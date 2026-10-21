/* fishing-game.js — Stardew-style fishing timing minigame (Phaser 3) */
(function () {
  if (typeof Phaser === "undefined") { console.error("Phaser not loaded"); return; }
  var UI = window.__gameUI || {};

  var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    parent: "gameCanvas",
    backgroundColor: "#0d1a2d",
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    scene: { preload: preload, create: create, update: update }
  };

  var bar = null, fish = null, progress = null, progressBox = null;
  var up = false, progressVal = 0, fishSpeed = 60, win = false, fail = false, started = false, failTimer = 0;
  var statusText = null, hintText = null;
  var SLOT_X = 430, SLOT_TOP = 110, SLOT_BOT = 410, SLOT_W = 150;
  var BAR_H = 20, FISH_H = 76;
  var upSpeed = 260, downSpeed = 120;
  var fishDir = 1;

  function preload() {}

  function create() {
    var g = this.add.graphics();
    // 槽背景
    g.fillStyle(0x141e30, 1);
    g.fillRect(SLOT_X - SLOT_W / 2, SLOT_TOP, SLOT_W, SLOT_BOT - SLOT_TOP);
    g.lineStyle(2, 0x2a3a55, 1);
    g.strokeRect(SLOT_X - SLOT_W / 2, SLOT_TOP, SLOT_W, SLOT_BOT - SLOT_TOP);

    // 水面/浮标装饰（左侧）
    g.lineStyle(3, 0x3ddc97, 1);
    g.lineBetween(60, 80, 60, 330);
    g.fillStyle(0x2a86c9, 1);
    g.fillCircle(60, 340, 16);
    g.lineStyle(2, 0x1e5f8a, 1);
    g.lineBetween(30, 380, 320, 410);
    g.lineBetween(30, 400, 340, 430);

    // 鱼目标（绿块，开局与条同区）
    fish = this.add.rectangle(SLOT_X, 260, SLOT_W, FISH_H, 0x3ddc97).setStrokeStyle(2, 0x2e7d5b);
    // 玩家钓条（橙）
    bar = this.add.rectangle(SLOT_X, 300, SLOT_W, BAR_H, 0xf0b429).setStrokeStyle(2, 0xb8860b);

    // 进度条
    progressBox = this.add.rectangle(60, 60, 200, 14, 0x141e30).setStrokeStyle(1, 0x2a3a55);
    progress = this.add.rectangle(60 - 100, 60, 0, 10, 0x3ddc97);
    progress.setOrigin(0, 0.5);

    statusText = this.add.text(60, 100, "", { fontFamily: "monospace", fontSize: "16px", color: "#f0b429" });
    hintText = this.add.text(320, 450, UI.hold || "Hold to rise, release to fall", {
      fontFamily: "monospace", fontSize: "13px", color: "#9aa8bf"
    }).setOrigin(0.5);

    // 输入（window 级监听，不依赖 canvas focus）
    this.input.on("pointerdown", function () { up = true; });
    this.input.on("pointerup", function () { up = false; });
    this.input.on("pointerout", function () { up = false; });
    window.addEventListener("keydown", function (e) {
      if (e.code === "Space" || e.code === "ArrowUp") { up = true; e.preventDefault(); }
      if (e.code === "Enter") reset();
    });
    window.addEventListener("keyup", function (e) {
      if (e.code === "Space" || e.code === "ArrowUp") up = false;
    });
  }

  function reset() {
    progressVal = 0; win = false; fail = false; started = false; failTimer = 0;
    bar.y = 300; fish.y = 240 + Math.random() * 100;
    fishSpeed = 30 + Math.random() * 45;
    fishDir = Math.random() < 0.5 ? -1 : 1;
    statusText.setText("");
  }

  function update(time, delta) {
    if (win || fail) return;
    var dt = delta / 1000;

    // 钓条移动
    if (up) bar.y -= upSpeed * dt;
    else bar.y += downSpeed * dt;
    bar.y = Phaser.Math.Clamp(bar.y, SLOT_TOP + BAR_H / 2, SLOT_BOT - BAR_H / 2);

    // 鱼移动（随机速度，边界反弹）
    fish.y += fishSpeed * fishDir * dt;
    if (fish.y < SLOT_TOP + FISH_H / 2) { fish.y = SLOT_TOP + FISH_H / 2; fishDir = 1; }
    if (fish.y > SLOT_BOT - FISH_H / 2) { fish.y = SLOT_BOT - FISH_H / 2; fishDir = -1; }
    if (Math.random() < 0.0015) fishSpeed = 30 + Math.random() * 70;

    // 重叠检测（Y 区间 + 缓冲）
    var overlap = Math.abs(bar.y - fish.y) < (FISH_H / 2 + BAR_H / 2 + 6);
    if (overlap) started = true;
    progressVal = Phaser.Math.Clamp(progressVal + (overlap ? 30 : -8) * dt, 0, 100);
    progress.width = progressVal * 2;

    // 失败缓冲：进度归零需持续 2s 才算鱼跑了
    if (started && progressVal <= 0) failTimer += dt; else failTimer = 0;

    if (progressVal >= 100) {
      win = true;
      statusText.setText(UI.win || "Gotcha! +XP");
      hintText.setText(UI.restart || "Press Enter to fish again");
    } else if (failTimer >= 2) {
      fail = true;
      statusText.setText(UI.fail || "The fish got away!");
      hintText.setText(UI.restart || "Press Enter to fish again");
    }
  }

  var game = new Phaser.Game(config);
  game.reset = reset;
  window.__fishingGame = game;
  window.__fishingState = function () { return { progress: Math.round(progressVal * 100) / 100, win: win, fail: fail, started: started, up: up, barY: Math.round(bar ? bar.y : -1), fishY: Math.round(fish ? fish.y : -1) }; };
})();
