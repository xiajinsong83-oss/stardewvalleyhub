/* memory-game.js — crop & forage memory match (Phaser 3) */
(function () {
  if (typeof Phaser === "undefined") { console.error("Phaser not loaded"); return; }
  var UI = window.__gameUI || {};

  var config = {
    type: Phaser.AUTO,
    width: 560,
    height: 560,
    parent: "gameCanvas",
    backgroundColor: "#0d1a2d",
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    scene: { preload: preload, create: create, update: update }
  };

  var ICONS = ["🌽", "🍓", "🍇", "🍒", "🥕", "🍄", "🐟", "🌻"];
  var CARDS = [];
  var grid = [];
  var first = null, second = null, locked = false;
  var matches = 0, moves = 0, elapsed = 0, done = false;
  var movesText = null, timerText = null, statusText = null;
  var GX = 40, GY = 80, GW = 120, GH = 120, GAP = 10;

  function preload() {}

  function create() {
    movesText = this.add.text(40, 28, UI.moves + ": 0", { fontFamily: "monospace", fontSize: "16px", color: "#3ddc97" });
    timerText = this.add.text(340, 28, UI.time + ": 0s", { fontFamily: "monospace", fontSize: "16px", color: "#9aa8bf" });
    statusText = this.add.text(280, 60, "", { fontFamily: "monospace", fontSize: "14px", color: "#f0b429" }).setOrigin(0.5);

    buildDeck(this);
    deal(this);

    // 全局点击 + 坐标命中检测（兼容各 Phaser 版本，绕开 setInteractive 差异）
    var scene = this;
    this.input.on("pointerdown", function (ptr) {
      if (locked || done) return;
      grid.forEach(function (card) {
        if (card.matched || card.shown) return;
        if (Math.abs(ptr.x - card.back.x) < GW / 2 && Math.abs(ptr.y - card.back.y) < GH / 2) {
          onFlip(scene, card);
        }
      });
    });
  }

  function buildDeck(scene) {
    CARDS = [];
    ICONS.forEach(function (icon) { CARDS.push(icon, icon); });
    // Fisher–Yates 洗牌
    for (var i = CARDS.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = CARDS[i]; CARDS[i] = CARDS[j]; CARDS[j] = t;
    }
  }

  function deal(scene) {
    grid = [];
    for (var i = 0; i < 16; i++) {
      var col = i % 4, row = Math.floor(i / 4);
      var x = GX + col * (GW + GAP) + GW / 2;
      var y = GY + row * (GH + GAP) + GH / 2;
      var back = scene.add.rectangle(x, y, GW, GH, 0x1e2a40).setStrokeStyle(2, 0x3ddc97);
      var front = scene.add.text(x, y, CARDS[i], { fontFamily: "monospace", fontSize: "44px" }).setOrigin(0.5);
      front.setVisible(false);
      var card = { back: back, front: front, icon: CARDS[i], matched: false, shown: false };
      grid.push(card);
    }
  }

  function onFlip(scene, card) {
    if (locked || done || card.matched || card.shown) return;
    if (first && second) return;
    showCard(card, true);
    if (!first) { first = card; return; }
    second = card;
    moves++; movesText.setText(UI.moves + ": " + moves);
    locked = true;
    if (first.icon === second.icon) {
      scene.time.delayedCall(450, function () {
        first.matched = true; second.matched = true;
        first.back.setFillStyle(0x123524).setStrokeStyle(2, 0x3ddc97);
        second.back.setFillStyle(0x123524).setStrokeStyle(2, 0x3ddc97);
        matches++; first = null; second = null; locked = false;
        if (matches === 8) {
          done = true;
          statusText.setText(UI.win + " · " + UI.moves + ": " + moves + " · " + UI.time + ": " + Math.floor(elapsed) + "s");
        }
      }, null, scene);
    } else {
      scene.time.delayedCall(900, function () {
        showCard(first, false); showCard(second, false);
        first = null; second = null; locked = false;
      }, null, scene);
    }
  }

  function showCard(card, show) {
    card.shown = show;
    card.back.setVisible(!show);
    card.front.setVisible(show);
  }

  function update(time, delta) {
    if (done) return;
    elapsed += delta / 1000;
    timerText.setText(UI.time + ": " + Math.floor(elapsed) + "s");
  }

  var game = new Phaser.Game(config);
  window.__memGame = game;
  window.__memState = function () { return { matches: matches, moves: moves, done: done, elapsed: Math.floor(elapsed), cards: grid.map(function (g) { return { shown: g.shown, matched: g.matched, icon: g.icon, input: g.back.input ? { enabled: g.back.input.enabled, hitArea: !!g.back.input.hitArea } : null, visible: g.back.visible }; }) }; };
})();
