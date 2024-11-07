"use strict";

if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {// 移动端不显示
} else {
  // document.write('<canvas id="snow" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2;pointer-events:none"></canvas>');
  window && function () {
    var e = {
      flakeCount: 50,
      // 雪花数目
      minDist: 150,
      // 最小距离
      color: "255, 255, 255",
      // 雪花颜色
      size: 1.5,
      // 雪花大小
      speed: .5,
      // 雪花速度
      opacity: .7,
      // 雪花透明度
      stepsize: .5 // 步距

    };

    var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
      window.setTimeout(e, 1e3 / 60);
    };

    window.requestAnimationFrame = t;
    var i = document.getElementById("snow"),
        n = i.getContext("2d"),
        o = e.flakeCount;
    var a = -100,
        d = -100,
        s = [];
    i.width = window.innerWidth, i.height = window.innerHeight;

    var h = function h() {
      n.clearRect(0, 0, i.width, i.height);
      var r = e.minDist;

      for (var _t = 0; _t < o; _t++) {
        var _o = s[_t];
        var _h = a,
            w = d,
            m = _o.x,
            c = _o.y,
            p = Math.sqrt((_h - m) * (_h - m) + (w - c) * (w - c));

        if (p < r) {
          var _e = (_h - m) / p,
              _t2 = (w - c) / p,
              _i = r / (p * p) / 2;

          _o.velX -= _i * _e, _o.velY -= _i * _t2;
        } else _o.velX *= .98, _o.velY < _o.speed && _o.speed - _o.velY > .01 && (_o.velY += .01 * (_o.speed - _o.velY)), _o.velX += Math.cos(_o.step += .05) * _o.stepSize;

        n.fillStyle = "rgba(" + e.color + ", " + _o.opacity + ")", _o.y += _o.velY, _o.x += _o.velX, (_o.y >= i.height || _o.y <= 0) && l(_o), (_o.x >= i.width || _o.x <= 0) && l(_o), n.beginPath(), n.arc(_o.x, _o.y, _o.size, 0, 2 * Math.PI), n.fill();
      }

      t(h);
    },
        l = function l(e) {
      e.x = Math.floor(Math.random() * i.width), e.y = 0, e.size = 3 * Math.random() + 2, e.speed = 1 * Math.random() + .5, e.velY = e.speed, e.velX = 0, e.opacity = .5 * Math.random() + .3;
    };

    document.addEventListener("mousemove", function (e) {
      a = e.clientX, d = e.clientY;
    }), window.addEventListener("resize", function () {
      i.width = window.innerWidth, i.height = window.innerHeight;
    }), function () {
      for (var _t3 = 0; _t3 < o; _t3++) {
        var _t4 = Math.floor(Math.random() * i.width),
            _n = Math.floor(Math.random() * i.height),
            _o2 = 3 * Math.random() + e.size,
            _a = 1 * Math.random() + e.speed,
            _d = .5 * Math.random() + e.opacity;

        s.push({
          speed: _a,
          velX: 0,
          velY: _a,
          x: _t4,
          y: _n,
          size: _o2,
          stepSize: Math.random() / 30 * e.stepsize,
          step: 0,
          angle: 180,
          opacity: _d
        });
      }

      h();
    }();
  }();
}