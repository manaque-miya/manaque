/**
 * svg-anim.js
 * SVG動的演出 共通JavaScriptコントローラー
 * 配置先: site/assets/svg-anim/svg-anim.js
 * 対象: 簿記3級・基本情報・第二種電工・FP2・他全資格
 */

'use strict';

const SvgAnim = (() => {

  /* ============================================================
     1. applyMunyu(element)
     要素に munyu クラスを付与し、アニメ終了後クラスを除去
     @param {Element|string} element - DOM要素 or CSSセレクター
     @param {boolean} [hold=false]   - trueで終了後もスケールを保持
  ============================================================ */
  function applyMunyu(element, hold = false) {
    const el = _resolve(element);
    if (!el) return;

    const cls = hold ? 'munyu-hold' : 'munyu';

    // 連続呼び出し対応：一旦クラスを外してリフロー後に再付与
    el.classList.remove('munyu', 'munyu-hold');
    void el.offsetWidth; // reflow

    el.classList.add(cls);

    el.addEventListener('animationend', () => {
      if (!hold) {
        el.classList.remove(cls);
      }
    }, { once: true });
  }

  /* ============================================================
     2. revealCorrect(svgElement, correctSelector)
     SVG内の正解部分を赤ハイライト + むにゅーで表示
     @param {Element|string} svgElement      - SVGルート要素 or セレクター
     @param {string}         correctSelector - 正解要素のCSSセレクター（SVG内相対）
     @param {Object}         [options]
       @param {boolean} [options.munyu=true]   - むにゅーも同時発火するか
       @param {boolean} [options.pulse=true]   - パルスを繰り返すか（false で静的）
       @param {number}  [options.delay=0]      - 発火遅延(ms)
  ============================================================ */
  function revealCorrect(svgElement, correctSelector, options = {}) {
    const svg = _resolve(svgElement);
    if (!svg) return;

    const { munyu = true, pulse = true, delay = 0 } = options;
    const highlightClass = pulse ? 'correct-highlight' : 'correct-highlight-static';

    setTimeout(() => {
      const targets = svg.querySelectorAll(correctSelector);
      targets.forEach((el) => {
        el.classList.remove('correct-highlight', 'correct-highlight-static');
        void el.offsetWidth;
        el.classList.add(highlightClass);

        if (munyu) {
          applyMunyu(el, true);
        }
      });
    }, delay);
  }

  /* ============================================================
     3. countUp(element, target, duration)
     数値をカウントアップ表示（textContent/innerHTML を更新）
     @param {Element|string} element  - 対象DOM要素 or セレクター
     @param {number}         target   - 目標値
     @param {number}         duration - アニメ時間(ms) デフォルト1200
     @param {Object}         [options]
       @param {number}   [options.start=0]    - 開始値
       @param {string}   [options.suffix='']  - 単位 (例: '円', '%', '万円')
       @param {string}   [options.prefix='']  - 前置 (例: '約')
       @param {Function} [options.formatter]  - 数値フォーマット関数
       @param {Function} [options.onComplete] - 完了コールバック
  ============================================================ */
  function countUp(element, target, duration = 1200, options = {}) {
    const el = _resolve(element);
    if (!el) return;

    const {
      start = 0,
      suffix = '',
      prefix = '',
      formatter = null,
      onComplete = null,
    } = options;

    const startTime = performance.now();
    const range = target - start;

    // easing: easeOutCubic
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.round(start + range * ease(progress));

      const display = formatter
        ? formatter(current)
        : `${prefix}${current.toLocaleString()}${suffix}`;

      el.textContent = display;

      // SVG text要素へのフラッシュ
      if (el.tagName.toLowerCase() === 'text') {
        el.classList.add('count-up-svg');
      } else {
        el.classList.add('counting');
        setTimeout(() => el.classList.remove('counting'), 300);
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        // 完了時：最終値を確定表示
        const finalDisplay = formatter
          ? formatter(target)
          : `${prefix}${target.toLocaleString()}${suffix}`;
        el.textContent = finalDisplay;

        if (onComplete) onComplete(el, target);
      }
    }

    requestAnimationFrame(update);
  }

  /* ============================================================
     4. revealSteps(elements, stepDelay)
     要素を順番に fade-in-step で段階表示
     @param {NodeList|Array|string} elements  - 対象要素群 or CSSセレクター
     @param {number}                stepDelay - 各ステップ間の遅延(ms) デフォルト300
     @param {Object}                [options]
       @param {string}   [options.className='visible'] - 付与するクラス名
       @param {Function} [options.onEach]              - 各要素表示時コールバック(el, index)
       @param {Function} [options.onComplete]          - 全表示完了コールバック
  ============================================================ */
  function revealSteps(elements, stepDelay = 300, options = {}) {
    const {
      className = 'visible',
      onEach = null,
      onComplete = null,
    } = options;

    let els;
    if (typeof elements === 'string') {
      els = Array.from(document.querySelectorAll(elements));
    } else if (elements instanceof NodeList) {
      els = Array.from(elements);
    } else if (Array.isArray(elements)) {
      els = elements;
    } else {
      console.warn('[SvgAnim.revealSteps] 無効な要素が渡されました:', elements);
      return;
    }

    els.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add(className);
        if (onEach) onEach(el, i);
        if (i === els.length - 1 && onComplete) onComplete();
      }, i * stepDelay);
    });
  }

  /* ============================================================
     5. traceLine(element)
     .line-trace / .arrow-run クラス用：
     path の totalLength を取得して CSS変数にセット後クラスを付与
     @param {Element|string} element - SVG path/line/polyline要素 or セレクター
     @param {Object}         [options]
       @param {string}  [options.type='line-trace'] - 'line-trace'|'arrow-run'|'arrow-flow'
       @param {string}  [options.speed='normal']    - 'fast'|'normal'|'slow' (line-trace系)
       @param {number}  [options.delay=0]            - 発火遅延(ms)
  ============================================================ */
  function traceLine(element, options = {}) {
    const el = _resolve(element);
    if (!el) return;

    const { type = 'line-trace', speed = 'normal', delay = 0 } = options;

    // pathLength を取得（getTotalLength が使えない要素は 1000 をフォールバック）
    let length = 1000;
    if (typeof el.getTotalLength === 'function') {
      length = el.getTotalLength();
    }

    el.style.setProperty('--line-length', length);

    setTimeout(() => {
      let cls;
      if (type === 'arrow-run') {
        cls = 'arrow-run';
      } else if (type === 'arrow-flow') {
        cls = 'arrow-flow';
      } else {
        const speedSuffix = speed === 'fast' ? '-fast' : speed === 'slow' ? '-slow' : '';
        cls = `line-trace${speedSuffix}`;
      }

      el.classList.remove('line-trace', 'line-trace-fast', 'line-trace-slow', 'arrow-run', 'arrow-flow');
      void el.getBoundingClientRect();
      el.classList.add(cls);
    }, delay);
  }

  /* ============================================================
     6. growBar(element)
     棒グラフ要素（rect）に bar-grow アニメを適用
     @param {Element|string} element  - SVG rect要素 or セレクター
     @param {number}         [delay=0] - 遅延(ms)
  ============================================================ */
  function growBar(element, delay = 0) {
    const el = _resolve(element);
    if (!el) return;

    setTimeout(() => {
      el.classList.remove('bar-grow');
      void el.getBoundingClientRect();
      el.classList.add('bar-grow');
    }, delay);
  }

  /* ============================================================
     7. shake(element)
     不正解・警告時の振動
     @param {Element|string} element
  ============================================================ */
  function shake(element) {
    const el = _resolve(element);
    if (!el) return;

    el.classList.remove('shake');
    void el.offsetWidth;
    el.classList.add('shake');
    el.addEventListener('animationend', () => el.classList.remove('shake'), { once: true });
  }

  /* ============================================================
     8. bindAnswerButton(btnSelector, svgSelector, correctSelector, options)
     「答えを見る」ボタンとの連携ユーティリティ
     ボタンクリックで正解ハイライト + むにゅーを発火
     @param {string} btnSelector     - ボタンのCSSセレクター
     @param {string} svgSelector     - SVGのCSSセレクター
     @param {string} correctSelector - SVG内の正解要素セレクター
     @param {Object} [options]       - revealCorrect と同じオプション
  ============================================================ */
  function bindAnswerButton(btnSelector, svgSelector, correctSelector, options = {}) {
    const btn = document.querySelector(btnSelector);
    const svg = document.querySelector(svgSelector);

    if (!btn || !svg) {
      console.warn('[SvgAnim.bindAnswerButton] ボタンまたはSVGが見つかりません');
      return;
    }

    btn.addEventListener('click', () => {
      revealCorrect(svg, correctSelector, options);

      // ボタン自体も押した感
      btn.classList.add('btn-pressed');
      setTimeout(() => btn.classList.remove('btn-pressed'), 200);
    });
  }

  /* ============================================================
     PRIVATE: セレクター文字列 → Element に解決
  ============================================================ */
  function _resolve(elementOrSelector) {
    if (!elementOrSelector) return null;
    if (typeof elementOrSelector === 'string') {
      const el = document.querySelector(elementOrSelector);
      if (!el) {
        console.warn('[SvgAnim] 要素が見つかりません:', elementOrSelector);
        return null;
      }
      return el;
    }
    return elementOrSelector;
  }

  /* ============================================================
     PUBLIC API
  ============================================================ */
  return {
    applyMunyu,
    revealCorrect,
    countUp,
    revealSteps,
    traceLine,
    growBar,
    shake,
    bindAnswerButton,
  };

})();

/* ============================================================
   使い方サンプルコード（コメント例）
   ============================================================

  // --- 1. むにゅーアニメ ---
  // 要素をポップさせる（アニメ後に元のscaleへ戻る）
  SvgAnim.applyMunyu('#my-rect');
  SvgAnim.applyMunyu(document.getElementById('total-amount'), true); // 保持

  // --- 2. 正解ハイライト ---
  // SVG内の .answer クラス要素を赤ハイライト
  SvgAnim.revealCorrect('#t-account-svg', '.answer');
  SvgAnim.revealCorrect('#t-account-svg', '#correct-cell', { delay: 500, pulse: false });

  // --- 3. 数値カウントアップ ---
  // テキスト要素を 0 → 150,000 まで1.5秒でカウント
  SvgAnim.countUp('#amount-text', 150000, 1500, { suffix: '円' });
  SvgAnim.countUp('#ratio-span', 72, 800, { suffix: '%', prefix: '約' });

  // --- 4. 段階表示 ---
  // .step クラス要素を200ms間隔で順に表示
  SvgAnim.revealSteps('.step', 200);
  // NodeListでも可
  SvgAnim.revealSteps(document.querySelectorAll('#flow > g'), 300, {
    onComplete: () => console.log('全ステップ表示完了')
  });

  // --- 5. 線なぞり ---
  SvgAnim.traceLine('#arrow-path', { type: 'arrow-run' });
  SvgAnim.traceLine('#line1', { speed: 'slow', delay: 200 });

  // --- 6. 棒グラフ成長 ---
  SvgAnim.growBar('#bar-sales', 0);
  SvgAnim.growBar('#bar-cost', 200);

  // --- 7. 「答えを見る」ボタン連携 ---
  // HTML: <button id="btn-answer">答えを見る</button>
  // SVG:  <svg id="quiz-svg"> ... <rect id="correct-cell" .../> ... </svg>
  SvgAnim.bindAnswerButton('#btn-answer', '#quiz-svg', '#correct-cell');

  // 複数の正解要素
  SvgAnim.bindAnswerButton('#btn-answer', '#quiz-svg', '.answer-elem', {
    munyu: true,
    pulse: true,
    delay: 100,
  });

============================================================ */
