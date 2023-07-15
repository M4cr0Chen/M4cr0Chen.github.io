"use strict";

var now = new Date();

function createtime() {
  // 当前时间
  now.setTime(now.getTime() + 1000);
  var start = new Date("08/01/2022 00:00:00"); // 旅行者1号开始计算的时间

  var dis = Math.trunc(23400000000 + (now - start) / 1000 * 17); // 距离=秒数*速度 记住转换毫秒

  var unit = (dis / 149600000).toFixed(6); // 天文单位

  var grt = new Date("08/09/2022 00:00:00"); // 网站诞生时间

  var days = (now - grt) / 1e3 / 60 / 60 / 24,
      dnum = Math.floor(days),
      hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
      hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
      mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
      snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);
  var currentTimeHtml = "";
  currentTimeHtml = hnum < 18 && hnum >= 9 ? "<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F\u5C0F\u5C4B-\u79D1\u7814\u6478\u9C7C\u4E2D.svg' title='\u4EC0\u4E48\u65F6\u5019\u80FD\u591F\u5B9E\u73B0\u8D22\u5BCC\u81EA\u7531\u5440~'><br> <div style=\"font-size:13px;font-weight:bold\">\u672C\u7AD9\u5C45\u7136\u8FD0\u884C\u4E86 ".concat(dnum, " \u5929 ").concat(hnum, " \u5C0F\u65F6 ").concat(mnum, " \u5206 ").concat(snum, " \u79D2 <i id=\"heartbeat\" class='fas fa-heartbeat'></i> <br> \u65C5\u884C\u8005 1 \u53F7\u5F53\u524D\u8DDD\u79BB\u5730\u7403 ").concat(dis, " \u5343\u7C73\uFF0C\u7EA6\u4E3A ").concat(unit, " \u4E2A\u5929\u6587\u5355\u4F4D \uD83D\uDE80</div>") : "<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F\u5C0F\u5C4B-\u4E0B\u73ED\u4F11\u606F\u5566.svg' title='\u4E0B\u73ED\u4E86\u5C31\u8BE5\u5F00\u5F00\u5FC3\u5FC3\u5730\u73A9\u800D~'><br> <div style=\"font-size:13px;font-weight:bold\">\u672C\u7AD9\u5C45\u7136\u8FD0\u884C\u4E86 ".concat(dnum, " \u5929 ").concat(hnum, " \u5C0F\u65F6 ").concat(mnum, " \u5206 ").concat(snum, " \u79D2 <i id=\"heartbeat\" class='fas fa-heartbeat'></i> <br> \u65C5\u884C\u8005 1 \u53F7\u5F53\u524D\u8DDD\u79BB\u5730\u7403 ").concat(dis, " \u5343\u7C73\uFF0C\u7EA6\u4E3A ").concat(unit, " \u4E2A\u5929\u6587\u5355\u4F4D \uD83D\uDE80</div>"), document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = currentTimeHtml);
} // 设置重复执行函数，周期1000ms


setInterval(function () {
  createtime();
}, 1000);