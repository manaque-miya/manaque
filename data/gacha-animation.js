/**
 * gacha-animation.js v1
 * まなクエ！共通ガチャ演出エンジン
 * 依存: cards.js (cardArt), gacha.js (RARITY_CONFIG)
 *
 * 公開API:
 *   openGachaAnimation(results, onClose)  … カード演出を開始
 *   showGachaNoReward(message, onClose)   … 報酬なし画面を表示
 *   closeGachaAnimation()                 … 演出を閉じる
 */
(function () {
  'use strict';

  // ===== CSS インジェクション（初回のみ） =====
  function _injectCSS() {
    if (document.getElementById('gacha-anim-css')) return;
    const s = document.createElement('style');
    s.id = 'gacha-anim-css';
    s.textContent = [
      '.gacha-reward-overlay{display:none;position:fixed;inset:0;background:radial-gradient(ellipse at center,#0d1a3a 0%,#050810 100%);z-index:1000;align-items:center;justify-content:center;overflow:hidden;cursor:pointer}',
      '.gacha-reward-overlay.show{display:flex}',
      '.g-star{position:absolute;background:white;border-radius:50%;animation:gTwinkle var(--d) ease-in-out infinite alternate;pointer-events:none}',
      '@keyframes gTwinkle{from{opacity:.1;transform:scale(.8)}to{opacity:.9;transform:scale(1.2)}}',
      '#gachaFlash{position:absolute;inset:0;background:white;opacity:0;pointer-events:none;z-index:50}',
      '#gachaFlash.active{animation:gFlash .4s ease-out forwards}',
      '@keyframes gFlash{0%{opacity:.9}100%{opacity:0}}',
      '#gachaQmark{position:absolute;font-size:clamp(140px,25vw,220px);font-weight:900;color:#2563EB;text-shadow:0 0 20px #2563EB,0 0 50px #2563EB,0 0 100px #1d4ed8,0 0 10px #F6C744;opacity:0;transform:scale(.3);user-select:none;z-index:10;line-height:1}',
      '#gachaQmark.appear{animation:gQappear .6s cubic-bezier(.34,1.56,.64,1) forwards}',
      '@keyframes gQappear{to{opacity:1;transform:scale(1)}}',
      '#gachaQmark.pulse{animation:gQpulse .4s ease-in-out 3}',
      '@keyframes gQpulse{0%{transform:scale(1);text-shadow:0 0 20px #2563EB,0 0 50px #2563EB}50%{transform:scale(1.15);text-shadow:0 0 40px #F6C744,0 0 80px #F6C744}100%{transform:scale(1);text-shadow:0 0 20px #2563EB,0 0 50px #2563EB}}',
      '#gachaQmark.explode{animation:gQexplode .3s ease-in forwards}',
      '@keyframes gQexplode{0%{opacity:1;transform:scale(1)}50%{opacity:1;transform:scale(1.4);filter:brightness(3)}100%{opacity:0;transform:scale(0)}}',
      '.g-particle{position:absolute;border-radius:50%;pointer-events:none;z-index:20}',
      '.g-particle.star-shape{clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);border-radius:0}',
      '#gachaCardWrap{position:absolute;width:min(320px,68vw);height:min(460px,72vh);perspective:1000px;opacity:0;z-index:30}',
      '#gachaCardWrap.reveal{animation:gCardReveal .5s cubic-bezier(.34,1.56,.64,1) forwards}',
      '@keyframes gCardReveal{0%{opacity:0;transform:translateY(60px) scale(.7)}100%{opacity:1;transform:translateY(0) scale(1)}}',
      '#gachaCardInner{width:100%;height:100%;position:relative;transform-style:preserve-3d;animation:gCardFlip .7s ease-out forwards;animation-play-state:paused}',
      '#gachaCardInner.flip{animation-play-state:running}',
      '@keyframes gCardFlip{0%{transform:rotateY(180deg)}100%{transform:rotateY(0)}}',
      '.g-card-outer{width:100%;height:100%;border-radius:18px;border:3px solid #F6C744;padding:8px 8px 8px 22px;position:relative;background:linear-gradient(180deg,#1a3a6e,#0f2456)}',
      '.g-card-outer.r{border-color:#60a5fa}',
      '.g-card-outer.sr{border-color:#a78bfa;background:linear-gradient(180deg,#2d1b69,#1a0f45)}',
      '.g-card-outer.ssr{border-color:#ffd700;background:linear-gradient(180deg,#5a2800,#2a1200);box-shadow:0 0 20px rgba(255,215,0,.4)}',
      '.g-ring{position:absolute;left:-4px;width:16px;height:16px;background:linear-gradient(135deg,#aaa,#eee,#aaa);border-radius:50%;border:2px solid #888}',
      '.g-card-paper{width:100%;height:100%;background:linear-gradient(180deg,#fdf8ee,#f5edda);border-radius:10px;position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:center}',
      '.g-card-paper::before{content:\'\';position:absolute;inset:0;background:repeating-linear-gradient(180deg,transparent,transparent 22px,rgba(150,190,230,.4) 22px,rgba(150,190,230,.4) 23px);top:55px}',
      '.g-badge{position:absolute;top:-3px;left:50%;transform:translateX(-50%);background:linear-gradient(180deg,#1a3a8e,#0d2060);border:2px solid #F6C744;border-radius:0 0 14px 14px;padding:4px 14px 6px;font-size:clamp(14px,3.5vw,18px);font-weight:900;color:#F6C744;letter-spacing:2px;z-index:2}',
      '.g-badge.r{border-color:#60a5fa;color:#60a5fa;background:linear-gradient(180deg,#1a3060,#0d2050)}',
      '.g-badge.sr{border-color:#a78bfa;color:#a78bfa;background:linear-gradient(180deg,#2d1b69,#1a0f45)}',
      '.g-badge.ssr{border-color:#ffd700;color:#ffd700;background:linear-gradient(180deg,#5a2800,#2a1200);animation:gSsrPulse 1s ease-in-out infinite}',
      '@keyframes gSsrPulse{0%,100%{box-shadow:0 0 8px rgba(255,215,0,.5)}50%{box-shadow:0 0 20px rgba(255,215,0,.9)}}',
      '.g-char-area{width:100%;flex:1;display:flex;align-items:center;justify-content:center;padding:50px 10px 0;position:relative;z-index:1}',
      '.g-char-emoji{font-size:clamp(60px,14vw,90px);filter:drop-shadow(0 4px 8px rgba(0,0,0,.2))}',
      '.g-name-area{width:85%;margin:8px auto 10px;background:rgba(255,248,231,.95);border:2px solid #C8960C;border-radius:20px;padding:5px 10px;text-align:center;position:relative;z-index:1}',
      '.g-char-name{font-size:clamp(13px,3vw,17px);font-weight:bold;color:#1a2855}',
      '.g-char-new{font-size:9px;background:#ef4444;color:#fff;border-radius:4px;padding:1px 5px;font-weight:900;display:inline-block;margin-top:2px}',
      '#gachaRarityBanner{position:absolute;bottom:-60px;left:50%;transform:translateX(-50%);padding:8px 40px;font-size:15px;font-weight:bold;letter-spacing:4px;white-space:nowrap;opacity:0;transition:opacity .4s,bottom .4s;text-shadow:0 0 10px rgba(246,199,68,.8);z-index:31;color:white;background:linear-gradient(90deg,transparent,#1a3a6e,#F6C744,#1a3a6e,transparent)}',
      '#gachaRarityBanner.sr-banner{background:linear-gradient(90deg,transparent,#2d1b69,#a78bfa,#2d1b69,transparent);text-shadow:0 0 10px rgba(167,139,250,.8)}',
      '#gachaRarityBanner.ssr-banner{background:linear-gradient(90deg,transparent,#5a2800,#ffd700,#5a2800,transparent);text-shadow:0 0 10px rgba(255,215,0,.9)}',
      '#gachaRarityBanner.show{opacity:1;bottom:-50px}',
      '#gachaCounter{position:absolute;top:20px;right:20px;color:rgba(255,255,255,.6);font-size:14px;font-weight:700;z-index:40}',
      '#gachaNextBtn,#gachaCloseBtn{position:absolute;bottom:28px;left:50%;transform:translateX(-50%);padding:14px 40px;border:none;border-radius:12px;font-size:clamp(15px,2vw,19px);font-weight:900;cursor:pointer;z-index:40;display:none;white-space:nowrap;font-family:inherit}',
      '#gachaNextBtn{background:rgba(37,99,235,.25);color:#F6C744;border:2px solid #F6C744;letter-spacing:.05em}',
      '#gachaNextBtn:hover{background:rgba(37,99,235,.45)}',
      '#gachaCloseBtn{background:linear-gradient(135deg,#2E6DE5,#1A449E);color:#fff;box-shadow:0 4px 20px rgba(46,109,229,.4)}',
      '#gachaNextBtn.show,#gachaCloseBtn.show{display:block}',
      '#gachaNorewardPhase{display:none;flex-direction:column;align-items:center;gap:16px;text-align:center;padding:20px}',
      '#gachaNorewardPhase.show{display:flex}',
    ].join('\n');
    document.head.appendChild(s);
  }

  // ===== DOM 生成（初回のみ） =====
  function _createOverlay() {
    if (document.getElementById('gachaRewardOverlay')) return;
    _injectCSS();
    const el = document.createElement('div');
    el.className = 'gacha-reward-overlay';
    el.id = 'gachaRewardOverlay';
    el.innerHTML =
      '<div id="gachaFlash"></div>' +
      '<div id="gachaStarField"></div>' +
      '<div id="gachaQmark">？</div>' +
      '<div id="gachaParticles"></div>' +
      '<div id="gachaCounter"></div>' +
      '<div id="gachaCardWrap"><div id="gachaCardInner"><div id="gachaCardFront"></div></div></div>' +
      '<div id="gachaRarityBanner"></div>' +
      '<button id="gachaNextBtn"></button>' +
      '<button id="gachaCloseBtn">とじる</button>' +
      '<div id="gachaNorewardPhase">' +
        '<div style="font-size:48px">😢</div>' +
        '<div style="color:rgba(255,255,255,.8);font-size:16px;font-weight:700">今回は報酬なし</div>' +
        '<div style="color:rgba(255,255,255,.6);font-size:13px" id="gachaNorewardMsg">全問正解でガチャが引けるよ！</div>' +
      '</div>';
    document.body.appendChild(el);
  }

  // ===== 内部状態 =====
  var _results    = [];
  var _onClose    = null;
  var _starsReady = false;

  // ===== 星フィールド =====
  function _initStars() {
    if (_starsReady) return;
    var sf = document.getElementById('gachaStarField');
    for (var i = 0; i < 80; i++) {
      var s  = document.createElement('div');
      var sz = Math.random() * 3 + 1;
      s.className = 'g-star';
      s.style.cssText = 'width:' + sz + 'px;height:' + sz + 'px;left:' + (Math.random()*100) + '%;top:' + (Math.random()*100) + '%;--d:' + (1+Math.random()*3) + 's;animation-delay:' + (Math.random()*3) + 's';
      sf.appendChild(s);
    }
    _starsReady = true;
  }

  // ===== パーティクル =====
  function _particles(rarity) {
    var con = document.getElementById('gachaParticles');
    con.innerHTML = '';
    var palettes = {
      n:   ['#F6C744','#2563EB','#ffffff','#60a5fa','#93c5fd'],
      r:   ['#60a5fa','#2563EB','#ffffff','#93c5fd','#bfdbfe'],
      sr:  ['#a78bfa','#7c3aed','#F6C744','#ffffff','#c4b5fd'],
      ssr: ['#ffd700','#ff6b35','#ff1493','#00bfff','#ffffff','#a78bfa']
    };
    var colors = palettes[rarity] || palettes.n;
    var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    for (var i = 0; i < 60; i++) {
      var p      = document.createElement('div');
      var isStar = Math.random() > 0.5;
      p.className = 'g-particle' + (isStar ? ' star-shape' : '');
      var sz    = Math.random() * 16 + 6;
      var color = colors[Math.floor(Math.random() * colors.length)];
      var angle = (Math.PI * 2 * i) / 60 + Math.random() * 0.3;
      var dist  = 150 + Math.random() * 300;
      var tx = Math.cos(angle) * dist, ty = Math.sin(angle) * dist;
      var dur = 600 + Math.random() * 600, delay = Math.random() * 100;
      p.style.cssText = 'width:' + sz + 'px;height:' + sz + 'px;left:' + cx + 'px;top:' + cy + 'px;background:' + color + ';box-shadow:0 0 ' + sz + 'px ' + color + ';transform:translate(-50%,-50%)';
      con.appendChild(p);
      p.animate(
        [{transform:'translate(-50%,-50%) scale(1)',opacity:1},
         {transform:'translate(calc(-50% + ' + tx + 'px),calc(-50% + ' + ty + 'px)) scale(0)',opacity:0}],
        {duration:dur, delay:delay, easing:'cubic-bezier(0,0,0.2,1)', fill:'forwards'}
      );
    }
  }

  // ===== カードHTML =====
  function _cardHTML(result) {
    var c = result.card, r = c.rarity;
    var labels = {n:'N', r:'R', sr:'SR', ssr:'SSR'};
    var rings = [30,72,114,156,198,240,282,324,366].map(function(t){
      return '<div class="g-ring" style="top:' + t + 'px"></div>';
    }).join('');
    return '<div class="g-card-outer ' + r + '">' + rings +
      '<div class="g-card-paper">' +
        '<div class="g-badge ' + r + '">' + (labels[r] || r.toUpperCase()) + '</div>' +
        '<div class="g-char-area"><div class="g-char-emoji">' + cardArt(c) + '</div></div>' +
        '<div class="g-name-area">' +
          '<div class="g-char-name">' + c.name + '</div>' +
          (result.isNew ? '<div class="g-char-new">NEW!</div>' : '') +
        '</div>' +
      '</div></div>';
  }

  // ===== リセット =====
  function _reset() {
    var qm     = document.getElementById('gachaQmark');
    var cw     = document.getElementById('gachaCardWrap');
    var ci     = document.getElementById('gachaCardInner');
    var banner = document.getElementById('gachaRarityBanner');
    qm.className = ''; qm.style.cssText = '';
    document.getElementById('gachaFlash').classList.remove('active');
    cw.classList.remove('reveal'); cw.style.opacity = '0';
    ci.className = '';
    banner.className = ''; banner.classList.remove('show'); banner.textContent = '';
    document.getElementById('gachaNextBtn').classList.remove('show');
    document.getElementById('gachaCloseBtn').classList.remove('show');
    document.getElementById('gachaNorewardPhase').classList.remove('show');
    document.getElementById('gachaParticles').innerHTML = '';
    document.getElementById('gachaCounter').textContent = '';
  }

  // ===== 1枚表示 =====
  function _showCard(idx) {
    var result = _results[idx];
    var total  = _results.length;
    var isLast = (idx === total - 1);
    var rarity = result.card.rarity;

    document.getElementById('gachaCounter').textContent = total > 1 ? (idx + 1) + ' / ' + total + '枚' : '';
    document.getElementById('gachaCardFront').innerHTML = _cardHTML(result);

    var bannerCfgs = {
      n:   {cls:'',           text:'✦ NORMAL ✦'},
      r:   {cls:'',           text:'✦ RARE ✦'},
      sr:  {cls:'sr-banner',  text:'✦ SUPER RARE ✦'},
      ssr: {cls:'ssr-banner', text:'🌈 SUPER SUPER RARE 🌈'}
    };
    var bannerCfg = bannerCfgs[rarity] || bannerCfgs.n;
    var ov     = document.getElementById('gachaRewardOverlay');
    var qm     = document.getElementById('gachaQmark');
    var cw     = document.getElementById('gachaCardWrap');
    var ci     = document.getElementById('gachaCardInner');
    var banner = document.getElementById('gachaRarityBanner');

    function revealCard() {
      qm.classList.add('explode');
      document.getElementById('gachaFlash').classList.add('active');
      setTimeout(function() {
        qm.style.opacity = '0';
        cw.style.opacity = '1';
        cw.classList.add('reveal');
        ci.classList.add('flip');
        _particles(rarity);
        setTimeout(function() {
          banner.className = bannerCfg.cls;
          banner.textContent = bannerCfg.text;
          banner.classList.add('show');
          if (!isLast) {
            var nb = document.getElementById('gachaNextBtn');
            nb.textContent = '次のカード →';
            nb.classList.add('show');
            nb.onclick = function() { nb.classList.remove('show'); _reset(); _showCard(idx + 1); };
          } else {
            var cb = document.getElementById('gachaCloseBtn');
            cb.textContent = total > 1 ? '全部見た！とじる' : 'とじる';
            cb.classList.add('show');
            cb.onclick = closeGachaAnimation;
          }
        }, 600);
      }, 250);
    }

    qm.classList.add('appear');
    setTimeout(function() {
      qm.classList.add('pulse');
      var _revealed = false;
      function doReveal() {
        if (_revealed) return;
        _revealed = true;
        ov.removeEventListener('click', tapHandler);
        ov.removeEventListener('touchend', tapHandler);
        revealCard();
      }
      function tapHandler(e) {
        if (e.target.closest && (e.target.closest('#gachaNextBtn') || e.target.closest('#gachaCloseBtn'))) return;
        clearTimeout(autoTimer);
        doReveal();
      }
      ov.addEventListener('click', tapHandler);
      ov.addEventListener('touchend', tapHandler);
      var autoTimer = setTimeout(doReveal, 1200);
    }, 700);
  }

  // ===== 公開API =====

  /**
   * ガチャ演出を開始する
   * @param {Array}    results  buyGacha() / claimQuizGacha().results の戻り値
   * @param {Function} onClose  とじる後のコールバック（省略可）
   */
  window.openGachaAnimation = function(results, onClose) {
    _createOverlay();
    _results = results;
    _onClose = onClose || null;
    var ov = document.getElementById('gachaRewardOverlay');
    ov.classList.add('show');
    _initStars();
    _reset();
    _showCard(0);
  };

  /**
   * 報酬なし / クリア済み 画面を表示する
   * @param {string}   message  表示メッセージ（省略可）
   * @param {Function} onClose  とじる後のコールバック（省略可）
   */
  window.showGachaNoReward = function(message, onClose) {
    _createOverlay();
    _onClose = onClose || null;
    var ov = document.getElementById('gachaRewardOverlay');
    ov.classList.add('show');
    _initStars();
    _reset();
    var msgEl = document.getElementById('gachaNorewardMsg');
    if (msgEl && message) msgEl.textContent = message;
    document.getElementById('gachaNorewardPhase').classList.add('show');
    var cb = document.getElementById('gachaCloseBtn');
    cb.textContent = 'とじる';
    cb.classList.add('show');
    cb.onclick = closeGachaAnimation;
  };

  /**
   * 演出を閉じる（外部から呼ぶ場合）
   */
  window.closeGachaAnimation = function() {
    var ov = document.getElementById('gachaRewardOverlay');
    if (!ov) return;
    ov.style.transition = 'opacity .4s ease';
    ov.style.opacity = '0';
    setTimeout(function() {
      ov.classList.remove('show');
      ov.style.opacity = '';
      _reset();
      if (_onClose) { _onClose(); _onClose = null; }
    }, 400);
  };

})();
