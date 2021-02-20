
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/ald-game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1800c04kJ5M7INGzgN+kvnb', 'ald-game');
// script/utils/ald-game.js

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.wx && !window.qq && !window.tt && !function () {
  function e() {
    this.request = [], this.push = function (e) {
      this.request.length >= 18 ? (this.request.shift(), this.request.push(e)) : this.request.push(e);
    }, this.concat = function () {
      this.request.map(function (e) {
        wx.Queue.push(e);
      }), this.request = [];
    };
  }

  function t() {
    var e = "";

    try {
      e = wx.getStorageSync("aldstat_op");
    } catch (t) {
      e = wx.getStorageSync("aldstat_op");
    }

    if ("" === e) {
      if ("" === y) return "";

      try {
        b = e = wx.getStorageSync(y), e && wx.setStorageSync("aldstat_op", e);
      } catch (t) {
        b = e = wx.getStorageSync(y), e && wx.setStorageSync("aldstat_op", e);
      }
    }

    return e;
  }

  function n() {
    function e(e) {
      return !/^\d+(.\d+)*$/.test(e.stageId) || e.stageId.length > 32 || isNaN(Number(e.stageId)) ? (console.warn("关卡stageId必须符合传参规则,请参考文档。"), !1) : !("string" !== u(e.stageName) || e.stageName.length > 32) || (console.warn("关卡名称为必传字段,且长度小于32个字符,请参考文档"), !1);
    }

    var t = "",
        n = "",
        r = 0;
    this.onStart = function (a) {
      if (e(a)) {
        var s = {};
        r = Date.now(), s.sid = a.stageId, s.snm = a.stageName, ("string" === u(a.userId) && a.userId) < 32 ? s.uid = a.userId : s.uid = "", s.state = "start", n = d(), t = s, this.request();
      }
    }, this.onRunning = function (n) {
      if (e(n)) {
        var r = {
          params: {}
        };
        if (("string" === u(n.userId) && n.userId) < 32 ? r.uid = n.userId : r.uid = "", "string" !== u(n.event) && Q.join(",").indexOf(n.event + ",") === -1) return void console.warn("关卡running状态中仅支持" + Q.join(",") + "事件类型，且为必传字段，详情请参考文档。");
        if (r.event = n.event, "object" !== u(n.params)) return void console.warn("关卡running状态中params为必传字段，且该字段需为Object类型，详情请参考文档。");
        if ("string" !== u(n.params.itemName) || n.params.itemName.length > 32) return void console.warn("道具/商品名称为必传字段，且长度小于32个字符，详情请参考文档");
        r.params.itnm = n.params.itemName, "string" === u(n.params.itemId) && n.params.itemId.length < 32 && (r.params.itid = n.params.itemId), "number" === u(n.params.itemCount) && toString(n.params.itemCount).length < 32 ? r.params.itco = n.params.itemCount : r.params.itco = 1, n.event.indexOf("pay") !== -1 && ("number" === u(n.params.itemMoney) && toString(n.params.itemMoney).length < 32 ? r.params.money = n.params.itemMoney : r.params.money = 0), "string" === u(n.params.desc) && n.params.desc.length < 64 && (r.params.desc = n.params.desc), r.state = "running", r.sid = n.stageId, r.snm = n.stageName, t = r, this.request();
      }
    }, this.onEnd = function (n) {
      if (e(n)) {
        var a = {};
        if (a.state = "end", ("string" === u(n.userId) && n.userId) < 32 ? a.uid = n.userId : a.uid = "", !u(n.event) && F.join(",").indexOf(n.event + ",") !== -1) return void F.join(",");
        a.sid = n.stageId, a.snm = n.stageName, a.event = n.event, a.sdr = 0 !== r ? Date.now() - r : "", a.params = {}, "object" === u(n.params) && "string" === u(n.params.desc) && n.params.desc.length < 64 && (a.params.desc = n.params.desc), t = a, this.request();
      }
    }, this.request = function () {
      var e = g(I);
      t.ss = n, e.ct = t, f(e, "screen");
    };
  }

  function r() {
    function e(e) {
      return !/^\d+(.\d+)*$/.test(e.levelId) || e.levelId.length > 32 || isNaN(Number(e.levelId)) ? (console.warn("levelId必须符合传参规则,请参考文档。"), !1) : !("string" !== u(e.levelName) || e.levelName.length > 32) || (console.warn("levelName为必传字段,且长度小于32个字符,请参考文档"), !1);
    }

    var t = "",
        n = "",
        r = 0;
    this.onInitLevel = function (r) {
      if (e(r)) {
        var a = {};
        "" == H ? (n = d(), wx.setStorageSync("ald_level_session", n)) : n = H, a.lid = r.levelId, a.lnm = r.levelName, ("string" === u(r.userId) && r.userId) < 32 ? a.uid = r.userId : a.uid = "", a.un = r.userName, a.state = "init", t = a, this.request();
      }
    }, this.onSetLevel = function (a) {
      if (e(a)) {
        var s = {};
        n = d(), wx.setStorageSync("ald_level_session", n), s.lid = a.levelId, s.lnm = a.levelName, ("string" === u(a.userId) && a.userId) < 32 ? s.uid = a.userId : s.uid = "", s.un = a.userName, s.state = "set", s.tmr = 0 !== U ? Date.now() - U : "", r = Date.now(), wx.setStorageSync("ald_level_time", r), t = s, this.request();
      }
    }, this.onPaySuccess = function (n) {
      if (e(n)) {
        var r = {
          params: {}
        };
        if ("object" !== u(n.params)) return void console.warn("关卡paySuccess状态中params为必传字段，且该字段需为Object类型，详情请参考文档。");
        "number" === u(n.params.amount) && toString(n.params.amount).length < 32 ? r.params.am = n.params.amount : r.params.am = 0, "string" === u(n.params.desc) && n.params.desc.length < 64 && (r.params.desc = n.params.desc), r.lid = n.levelId, r.lnm = n.levelName, ("string" === u(n.userId) && n.userId) < 32 ? r.uid = n.userId : r.uid = "", r.un = n.userName, r.state = "paySuccess", t = r, this.request();
      }
    }, this.onPayFail = function (n) {
      if (e(n)) {
        var r = {
          params: {}
        };
        if ("object" !== u(n.params)) return void console.warn("关卡payFile状态中params为必传字段，且该字段需为Object类型，详情请参考文档。");
        "number" === u(n.params.amount) && toString(n.params.amount).length < 32 ? r.params.am = n.params.amount : r.params.am = 0, "string" === u(n.params.desc) && n.params.desc.length < 64 && (r.params.desc = n.params.desc), r.lid = n.levelId, r.lnm = n.levelName, ("string" === u(n.userId) && n.userId) < 32 ? r.uid = n.userId : r.uid = "", r.un = n.userName, r.state = "payFail", t = r, this.request();
      }
    }, this.request = function () {
      var e = g(I);
      t.ls = n, e.ct = t, f(e, "level");
    };
  }

  function a() {
    return new Promise(function (e, t) {
      wx.getSetting({
        success: function success(t) {
          t.authSetting["scope.userInfo"] ? wx.getUserInfo({
            success: function success(t) {
              C = h(t.userInfo.avatarUrl.split("/")), e(t);
            },
            fail: function fail() {
              e("");
            }
          }) : e("");
        },
        fail: function fail() {
          e("");
        }
      });
    });
  }

  function s() {
    return new Promise(function (e, t) {
      wx.getNetworkType({
        success: function success(t) {
          e(t);
        },
        fail: function fail() {
          e("");
        }
      });
    });
  }

  function i() {
    return new Promise(function (e, t) {
      "1044" == j.scene ? wx.getShareInfo({
        shareTicket: j.shareTicket,
        success: function success(t) {
          e(t);
        },
        fail: function fail() {
          e("");
        }
      }) : e("");
    });
  }

  function o() {
    return new Promise(function (e, t) {
      w.getLocation ? wx.getLocation({
        success: function success(t) {
          e(t);
        },
        fail: function fail() {
          e("");
        }
      }) : wx.getSetting({
        success: function success(t) {
          t.authSetting["scope.userLocation"] ? (wx.getLocation({
            success: function success(t) {
              e(t);
            },
            fail: function fail() {
              e("");
            }
          }), e("")) : e("");
        },
        fail: function fail() {
          e("");
        }
      });
    });
  }

  function u(e) {
    function t(e) {
      return Object.prototype.toString.call(e);
    }

    var n = {};
    return "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function (e, t) {
      n["[object " + e + "]"] = e.toLowerCase();
    }), function () {
      return null == e ? e : "object" == _typeof(e) || "function" == typeof e ? n[t.call(e)] || "object" : _typeof(e);
    }();
  }

  function c(e) {
    for (var t in e) {
      if ("object" == _typeof(e[t]) && null !== e[t]) return !0;
    }

    return !1;
  }

  function d() {
    function e() {
      return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }

    return e() + e() + e() + e() + e() + e() + e() + e();
  }

  function l() {
    this.concurrency = 4, this.queue = [], this.tasks = [], this.activeCount = 0;
    var e = this;
    this.push = function (t) {
      this.tasks.push(new Promise(function (n, r) {
        var a = function a() {
          e.activeCount++, t().then(function (e) {
            n(e);
          }).then(function () {
            e.next();
          });
        };

        e.activeCount < e.concurrency ? a() : e.queue.push(a);
      }));
    }, this.all = function () {
      return Promise.all(this.tasks);
    }, this.next = function () {
      e.activeCount--, e.queue.length > 0 && e.queue.shift()();
    };
  }

  function f(e, n) {
    function r() {
      return new Promise(function (t, n) {
        wx.request({
          url: "https://" + v + ".aldwx.com/d.html",
          data: e,
          header: {
            se: q || "",
            op: b || "",
            img: C || ""
          },
          method: "GET",
          fail: function fail() {
            t("");
          },
          success: function success(e) {
            t(200 == e.statusCode ? "" : "status error");
          }
        });
      });
    }

    w.useOpen && t(), O++, e.as = D, e.at = M, e.rq_c = O, e.ifo = _, e.ak = w.app_key, e.uu = x, e.v = m, e.st = Date.now(), e.ev = n, e.te = S, e.wsr = j, "" !== p(e.ufo) && (e.ufo = e.ufo), e.ec = N, w.useOpen ? "" === b ? K.push(r) : (wx.Queue.push(r), K.concat()) : wx.Queue.push(r);
  }

  function p(e) {
    if (void 0 === e || "" === e) return "";
    var t = {};

    for (var n in e) {
      "rawData" != n && "errMsg" != n && (t[n] = e[n]);
    }

    return t;
  }

  function g(e) {
    var t = {};

    for (var n in e) {
      t[n] = e[n];
    }

    return t;
  }

  function h(e) {
    for (var t = "", n = 0; n < e.length; n++) {
      e[n].length > t.length && (t = e[n]);
    }

    return t;
  }

  var m = "3.2.0",
      v = "glog",
      w = require("./ald-game-conf");

  "" === w.app_key && console.error("请在配置文件中填写您的app_key"), w.useOpen && console.warn("提示：开启了useOpen配置后，如果不上传用户opendId则不会上报数据。"), w.app_key = w.app_key.replace(/\s/g, "");
  var y = w.openKey,
      S = "wg";
  !function () {
    wx.request({
      url: "https://" + v + ".aldwx.com/config/app.json",
      method: "GET",
      success: function success(e) {
        200 === e.statusCode && (e.data.version > m && console.warn("您的SDK不是最新版本，请尽快升级！"), e.data.warn && console.warn(e.data.warn), e.data.error && console.error(e.data.error));
      }
    });
  }();

  var _ = "",
      x = function () {
    var e = "";

    try {
      e = wx.getStorageSync("aldstat_uuid"), wx.setStorageSync("ald_ifo", !0);
    } catch (t) {
      e = "uuid_getstoragesync";
    }

    if (e) _ = !1;else {
      e = d(), _ = !0;

      try {
        wx.setStorageSync("aldstat_uuid", e);
      } catch (e) {
        wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
      }
    }
    return e;
  }(),
      I = {},
      q = "",
      b = t(),
      N = 0,
      O = "",
      j = wx.getLaunchOptionsSync(),
      k = Date.now(),
      M = "" + Date.now() + Math.floor(1e7 * Math.random()),
      D = "" + Date.now() + Math.floor(1e7 * Math.random()),
      L = 0,
      P = "",
      C = "",
      E = !0,
      A = !1,
      T = ["aldSendEvent", "aldOnShareAppMessage", "aldShareAppMessage", "aldSendSession", "aldSendOpenid", "aldLevelEvent"],
      Q = ["payStart", "paySuccess", "payFail", "die", "revive", "tools", "award"],
      F = ["complete", "fail"],
      U = wx.getStorageSync("ald_level_time") || 0,
      H = wx.getStorageSync("ald_level_session") || "";

  void 0 === wx.Queue && (wx.Queue = new l(), wx.Queue.all());
  var K = new e();
  (function () {
    return Promise.all([a(), s(), o()]);
  })().then(function (e) {
    "" !== e[2] ? (I.lat = e[2].latitude || "", I.lng = e[2].longitude || "", I.spd = e[2].speed || "") : (I.lat = "", I.lng = "", I.spd = ""), "" !== e[1] ? I.nt = e[1].networkType || "" : I.nt = "";
    var t = g(I);
    "" !== e[0] && (t.ufo = e[0], P = e[0]), f(t, "init");
  }), wx.onShow(function (e) {
    if (j = e, L = Date.now(), !E && !A) {
      M = "" + Date.now() + Math.floor(1e7 * Math.random()), _ = !1;

      try {
        wx.setStorageSync("ald_ifo", !1);
      } catch (e) {}
    }

    E = !1, A = !1;
    var t = g(I),
        n = g(I);
    t.sm = L - k, e.query.ald_share_src && e.shareTicket && "1044" === e.scene ? (n.tp = "ald_share_click", i().then(function (e) {
      n.ct = e, f(n, "event");
    })) : e.query.ald_share_src && (n.tp = "ald_share_click", n.ct = "1", f(n, "event")), f(t, "show");
  }), wx.onHide(function () {
    wx.setStorageSync("ald_level_session", "");
    var e = g(I);
    e.dr = Date.now() - L, "" === P ? wx.getSetting({
      success: function success(t) {
        t.authSetting["scope.userInfo"] ? wx.getUserInfo({
          success: function success(t) {
            e.ufo = t, P = t, C = h(t.userInfo.avatarUrl.split("/")), f(e, "hide");
          }
        }) : f(e, "hide");
      }
    }) : f(e, "hide");
  }), wx.onError(function (e) {
    var t = g(I);
    t.tp = "ald_error_message", t.ct = e, N++, f(t, "event");
  });
  var R = {
    aldSendEvent: function aldSendEvent(e, t) {
      var n = g(I);
      if ("" !== e && "string" == typeof e && e.length <= 255) {
        if (n.tp = e, "string" == typeof t && t.length <= 255) n.ct = String(t), f(n, "event");else if ("object" == _typeof(t)) {
          if (JSON.stringify(t).length >= 255) return void console.error("自定义事件参数不能超过255个字符");
          if (c(t)) return void console.error("事件参数，参数内部只支持Number,String等类型，请参考接入文档");

          for (var r in t) {
            "number" == typeof t[r] && (t[r] = t[r] + "s##");
          }

          n.ct = JSON.stringify(t), f(n, "event");
        } else void 0 === t || "" === t ? f(n, "event") : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符");
      } else console.error("事件名称必须为String类型且不能超过255个字符");
    },
    aldOnShareAppMessage: function aldOnShareAppMessage(e) {
      wx.onShareAppMessage(function () {
        A = !0;
        var t = e(),
            n = "";
        n = void 0 !== j.query.ald_share_src ? void 0 !== t.query ? (j.query.ald_share_src.indexOf(x), t.query + "&ald_share_src=" + j.query.ald_share_src + "," + x) : (j.query.ald_share_src.indexOf(x), "ald_share_src=" + j.query.ald_share_src + "," + x) : void 0 !== t.query ? t.query + "&ald_share_src=" + x : "ald_share_src=" + x, "undefined" != u(t.ald_desc) && (n += "&ald_desc=" + t.ald_desc), t.query = n;
        var r = g(I);
        return r.ct = t, r.ct.sho = 1, r.tp = "ald_share_chain", f(r, "event"), t;
      });
    },
    aldShareAppMessage: function aldShareAppMessage(e) {
      A = !0;
      var t = e,
          n = "";
      n = void 0 !== j.query.ald_share_src ? void 0 !== t.query ? (j.query.ald_share_src.indexOf(x), t.query + "&ald_share_src=" + j.query.ald_share_src + "," + x) : (j.query.ald_share_src.indexOf(x), "ald_share_src=" + j.query.ald_share_src + "," + x) : void 0 !== t.query ? t.query + "&ald_share_src=" + x : "ald_share_src=" + x;
      var r = g(I);
      "undefined" != u(t.ald_desc) && (n += "&ald_desc=" + t.ald_desc), t.query = n, r.ct = t, r.tp = "ald_share_chain", f(r, "event"), wx.shareAppMessage(t);
    },
    aldSendSession: function aldSendSession(e) {
      if ("" === e || !e) return void console.error("请传入从后台获取的session_key");
      var t = g(I);
      t.tp = "session", t.ct = "session", q = e, "" === P ? wx.getSetting({
        success: function success(e) {
          e.authSetting["scope.userInfo"] ? wx.getUserInfo({
            success: function success(e) {
              t.ufo = e, f(t, "event");
            }
          }) : f(t, "event");
        }
      }) : (t.ufo = P, "" !== P && (t.gid = ""), f(t, "event"));
    },
    aldSendOpenid: function aldSendOpenid(e) {
      if ("" === e || !e) return void console.error("openID不能为空");
      b = e, wx.setStorageSync("aldstat_op", "openid");
      var t = g(I);
      t.tp = "openid", t.ct = "openid", f(t, "event");
    }
  };
  wx.aldStage = new n(), wx.aldLevel = new r();

  for (var G = 0; G < T.length; G++) {
    !function (e, t) {
      Object.defineProperty(wx, e, {
        value: t,
        writable: !1,
        enumerable: !0,
        configurable: !0
      });
    }(T[G], R[T[G]]);
  }

  try {
    var J = wx.getSystemInfoSync();
    I.br = J.brand || "", I.md = J.model, I.pr = J.pixelRatio, I.sw = J.screenWidth, I.sh = J.screenHeight, I.ww = J.windowWidth, I.wh = J.windowHeight, I.lang = J.language, I.wv = J.version, I.sv = J.system, I.wvv = J.platform, I.fs = J.fontSizeSetting, I.wsdk = J.SDKVersion, I.bh = J.benchmarkLevel || "", I.bt = J.battery || "", I.wf = J.wifiSignal || "", I.lng = "", I.lat = "", I.nt = "", I.spd = "", I.ufo = "";
  } catch (e) {}
}();

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsc1xcYWxkLWdhbWUuanMiXSwibmFtZXMiOlsid2luZG93Iiwid3giLCJxcSIsInR0IiwiZSIsInJlcXVlc3QiLCJwdXNoIiwibGVuZ3RoIiwic2hpZnQiLCJjb25jYXQiLCJtYXAiLCJRdWV1ZSIsInQiLCJnZXRTdG9yYWdlU3luYyIsInkiLCJiIiwic2V0U3RvcmFnZVN5bmMiLCJuIiwidGVzdCIsInN0YWdlSWQiLCJpc05hTiIsIk51bWJlciIsImNvbnNvbGUiLCJ3YXJuIiwidSIsInN0YWdlTmFtZSIsInIiLCJvblN0YXJ0IiwiYSIsInMiLCJEYXRlIiwibm93Iiwic2lkIiwic25tIiwidXNlcklkIiwidWlkIiwic3RhdGUiLCJkIiwib25SdW5uaW5nIiwicGFyYW1zIiwiZXZlbnQiLCJRIiwiam9pbiIsImluZGV4T2YiLCJpdGVtTmFtZSIsIml0bm0iLCJpdGVtSWQiLCJpdGlkIiwiaXRlbUNvdW50IiwidG9TdHJpbmciLCJpdGNvIiwiaXRlbU1vbmV5IiwibW9uZXkiLCJkZXNjIiwib25FbmQiLCJGIiwic2RyIiwiZyIsIkkiLCJzcyIsImN0IiwiZiIsImxldmVsSWQiLCJsZXZlbE5hbWUiLCJvbkluaXRMZXZlbCIsIkgiLCJsaWQiLCJsbm0iLCJ1biIsInVzZXJOYW1lIiwib25TZXRMZXZlbCIsInRtciIsIlUiLCJvblBheVN1Y2Nlc3MiLCJhbW91bnQiLCJhbSIsIm9uUGF5RmFpbCIsImxzIiwiUHJvbWlzZSIsImdldFNldHRpbmciLCJzdWNjZXNzIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsIkMiLCJoIiwidXNlckluZm8iLCJhdmF0YXJVcmwiLCJzcGxpdCIsImZhaWwiLCJnZXROZXR3b3JrVHlwZSIsImkiLCJqIiwic2NlbmUiLCJnZXRTaGFyZUluZm8iLCJzaGFyZVRpY2tldCIsIm8iLCJ3IiwiZ2V0TG9jYXRpb24iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwiZm9yRWFjaCIsInRvTG93ZXJDYXNlIiwiYyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInN1YnN0cmluZyIsImwiLCJjb25jdXJyZW5jeSIsInF1ZXVlIiwidGFza3MiLCJhY3RpdmVDb3VudCIsInRoZW4iLCJuZXh0IiwiYWxsIiwidXJsIiwidiIsImRhdGEiLCJoZWFkZXIiLCJzZSIsInEiLCJvcCIsImltZyIsIm1ldGhvZCIsInN0YXR1c0NvZGUiLCJ1c2VPcGVuIiwiTyIsImFzIiwiRCIsImF0IiwiTSIsInJxX2MiLCJpZm8iLCJfIiwiYWsiLCJhcHBfa2V5IiwidXUiLCJ4IiwibSIsInN0IiwiZXYiLCJ0ZSIsIlMiLCJ3c3IiLCJwIiwidWZvIiwiZWMiLCJOIiwiSyIsInJlcXVpcmUiLCJlcnJvciIsInJlcGxhY2UiLCJvcGVuS2V5IiwidmVyc2lvbiIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiayIsIkwiLCJQIiwiRSIsIkEiLCJUIiwibGF0IiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJzcGQiLCJzcGVlZCIsIm50IiwibmV0d29ya1R5cGUiLCJvblNob3ciLCJzbSIsInF1ZXJ5IiwiYWxkX3NoYXJlX3NyYyIsInRwIiwib25IaWRlIiwiZHIiLCJvbkVycm9yIiwiUiIsImFsZFNlbmRFdmVudCIsIlN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbGRPblNoYXJlQXBwTWVzc2FnZSIsIm9uU2hhcmVBcHBNZXNzYWdlIiwiYWxkX2Rlc2MiLCJzaG8iLCJhbGRTaGFyZUFwcE1lc3NhZ2UiLCJzaGFyZUFwcE1lc3NhZ2UiLCJhbGRTZW5kU2Vzc2lvbiIsImdpZCIsImFsZFNlbmRPcGVuaWQiLCJhbGRTdGFnZSIsImFsZExldmVsIiwiRyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJ3cml0YWJsZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJKIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJiciIsImJyYW5kIiwibWQiLCJtb2RlbCIsInByIiwicGl4ZWxSYXRpbyIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsImxhbmciLCJsYW5ndWFnZSIsInd2Iiwic3YiLCJzeXN0ZW0iLCJ3dnYiLCJwbGF0Zm9ybSIsImZzIiwiZm9udFNpemVTZXR0aW5nIiwid3NkayIsIlNES1ZlcnNpb24iLCJiaCIsImJlbmNobWFya0xldmVsIiwiYnQiLCJiYXR0ZXJ5Iiwid2YiLCJ3aWZpU2lnbmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxJQUFhLENBQUNELE1BQU0sQ0FBQ0UsRUFBckIsSUFBMkIsQ0FBQ0YsTUFBTSxDQUFDRyxFQUFuQyxJQUF5QyxDQUFFLFlBQVc7QUFDckQsV0FBU0MsQ0FBVCxHQUFhO0FBQ1osU0FBS0MsT0FBTCxHQUFlLEVBQWYsRUFBbUIsS0FBS0MsSUFBTCxHQUFZLFVBQVNGLENBQVQsRUFBWTtBQUMxQyxXQUFLQyxPQUFMLENBQWFFLE1BQWIsSUFBdUIsRUFBdkIsSUFBNkIsS0FBS0YsT0FBTCxDQUFhRyxLQUFiLElBQXNCLEtBQUtILE9BQUwsQ0FBYUMsSUFBYixDQUFrQkYsQ0FBbEIsQ0FBbkQsSUFBMkUsS0FBS0MsT0FBTCxDQUFhQyxJQUFiLENBQWtCRixDQUFsQixDQUEzRTtBQUNBLEtBRkQsRUFFRyxLQUFLSyxNQUFMLEdBQWMsWUFBVztBQUMzQixXQUFLSixPQUFMLENBQWFLLEdBQWIsQ0FBaUIsVUFBU04sQ0FBVCxFQUFZO0FBQzVCSCxRQUFBQSxFQUFFLENBQUNVLEtBQUgsQ0FBU0wsSUFBVCxDQUFjRixDQUFkO0FBQ0EsT0FGRCxHQUVJLEtBQUtDLE9BQUwsR0FBZSxFQUZuQjtBQUdBLEtBTkQ7QUFPQTs7QUFFRCxXQUFTTyxDQUFULEdBQWE7QUFDWixRQUFJUixDQUFDLEdBQUcsRUFBUjs7QUFDQSxRQUFJO0FBQ0hBLE1BQUFBLENBQUMsR0FBR0gsRUFBRSxDQUFDWSxjQUFILENBQWtCLFlBQWxCLENBQUo7QUFDQSxLQUZE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QUFGLElBQWdCLEVBQWhXLEVBQW9XOUssQ0FBQyxDQUFDMEcsR0FBRixHQUFRLEVBQTVXLEVBQWdYMUcsQ0FBQyxDQUFDd0csR0FBRixHQUFRLEVBQXhYLEVBQTRYeEcsQ0FBQyxDQUFDOEcsRUFBRixHQUFPLEVBQW5ZLEVBQXVZOUcsQ0FBQyxDQUFDNEcsR0FBRixHQUFRLEVBQS9ZLEVBQW1aNUcsQ0FBQyxDQUFDd0YsR0FBRixHQUFRLEVBQTNaO0FBQ0EsR0FIRCxDQUdFLE9BQU85SSxDQUFQLEVBQVUsQ0FBRTtBQUNkLENBbGEwQyxFQUEzQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lnd4ICYmICF3aW5kb3cucXEgJiYgIXdpbmRvdy50dCAmJiAhIGZ1bmN0aW9uKCkge1xyXG5cdGZ1bmN0aW9uIGUoKSB7XHJcblx0XHR0aGlzLnJlcXVlc3QgPSBbXSwgdGhpcy5wdXNoID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0XHR0aGlzLnJlcXVlc3QubGVuZ3RoID49IDE4ID8gKHRoaXMucmVxdWVzdC5zaGlmdCgpLCB0aGlzLnJlcXVlc3QucHVzaChlKSkgOiB0aGlzLnJlcXVlc3QucHVzaChlKVxyXG5cdFx0fSwgdGhpcy5jb25jYXQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5yZXF1ZXN0Lm1hcChmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0d3guUXVldWUucHVzaChlKVxyXG5cdFx0XHR9KSwgdGhpcy5yZXF1ZXN0ID0gW11cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHQoKSB7XHJcblx0XHR2YXIgZSA9IFwiXCI7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRlID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJhbGRzdGF0X29wXCIpXHJcblx0XHR9IGNhdGNoICh0KSB7XHJcblx0XHRcdGUgPSB3eC5nZXRTdG9yYWdlU3luYyhcImFsZHN0YXRfb3BcIilcclxuXHRcdH1cclxuXHRcdGlmIChcIlwiID09PSBlKSB7XHJcblx0XHRcdGlmIChcIlwiID09PSB5KSByZXR1cm4gXCJcIjtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRiID0gZSA9IHd4LmdldFN0b3JhZ2VTeW5jKHkpLCBlICYmIHd4LnNldFN0b3JhZ2VTeW5jKFwiYWxkc3RhdF9vcFwiLCBlKVxyXG5cdFx0XHR9IGNhdGNoICh0KSB7XHJcblx0XHRcdFx0YiA9IGUgPSB3eC5nZXRTdG9yYWdlU3luYyh5KSwgZSAmJiB3eC5zZXRTdG9yYWdlU3luYyhcImFsZHN0YXRfb3BcIiwgZSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGVcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG4oKSB7XHJcblx0XHRmdW5jdGlvbiBlKGUpIHtcclxuXHRcdFx0cmV0dXJuICEvXlxcZCsoLlxcZCspKiQvLnRlc3QoZS5zdGFnZUlkKSB8fCBlLnN0YWdlSWQubGVuZ3RoID4gMzIgfHwgaXNOYU4oTnVtYmVyKGUuc3RhZ2VJZCkpID8gKGNvbnNvbGUud2FybihcIuWFs+WNoXN0YWdlSWTlv4XpobvnrKblkIjkvKDlj4Lop4TliJks6K+35Y+C6ICD5paH5qGj44CCXCIpLCAhMSkgOiAhKFwic3RyaW5nXCIgIT09IHUoZS5zdGFnZU5hbWUpIHx8IGUuc3RhZ2VOYW1lLmxlbmd0aCA+IDMyKSB8fCAoY29uc29sZS53YXJuKFwi5YWz5Y2h5ZCN56ew5Li65b+F5Lyg5a2X5q61LOS4lOmVv+W6puWwj+S6jjMy5Liq5a2X56ymLOivt+WPguiAg+aWh+aho1wiKSwgITEpXHJcblx0XHR9XHJcblx0XHR2YXIgdCA9IFwiXCIsXHJcblx0XHRcdG4gPSBcIlwiLFxyXG5cdFx0XHRyID0gMDtcclxuXHRcdHRoaXMub25TdGFydCA9IGZ1bmN0aW9uKGEpIHtcclxuXHRcdFx0aWYgKGUoYSkpIHtcclxuXHRcdFx0XHR2YXIgcyA9IHt9O1xyXG5cdFx0XHRcdHIgPSBEYXRlLm5vdygpLCBzLnNpZCA9IGEuc3RhZ2VJZCwgcy5zbm0gPSBhLnN0YWdlTmFtZSwgKFwic3RyaW5nXCIgPT09IHUoYS51c2VySWQpICYmIGEudXNlcklkKSA8IDMyID8gcy51aWQgPSBhLnVzZXJJZCA6IHMudWlkID0gXCJcIiwgcy5zdGF0ZSA9IFwic3RhcnRcIiwgbiA9IGQoKSwgdCA9IHMsIHRoaXMucmVxdWVzdCgpXHJcblx0XHRcdH1cclxuXHRcdH0sIHRoaXMub25SdW5uaW5nID0gZnVuY3Rpb24obikge1xyXG5cdFx0XHRpZiAoZShuKSkge1xyXG5cdFx0XHRcdHZhciByID0ge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiB7fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0aWYgKChcInN0cmluZ1wiID09PSB1KG4udXNlcklkKSAmJiBuLnVzZXJJZCkgPCAzMiA/IHIudWlkID0gbi51c2VySWQgOiByLnVpZCA9IFwiXCIsIFwic3RyaW5nXCIgIT09IHUobi5ldmVudCkgJiYgUS5qb2luKFwiLFwiKS5pbmRleE9mKG4uZXZlbnQgKyBcIixcIikgPT09IC0xKSByZXR1cm4gdm9pZCBjb25zb2xlLndhcm4oXCLlhbPljaFydW5uaW5n54q25oCB5Lit5LuF5pSv5oyBXCIgKyBRLmpvaW4oXCIsXCIpICsgXCLkuovku7bnsbvlnovvvIzkuJTkuLrlv4XkvKDlrZfmrrXvvIzor6bmg4Xor7flj4LogIPmlofmoaPjgIJcIik7XHJcblx0XHRcdFx0aWYgKHIuZXZlbnQgPSBuLmV2ZW50LCBcIm9iamVjdFwiICE9PSB1KG4ucGFyYW1zKSkgcmV0dXJuIHZvaWQgY29uc29sZS53YXJuKFwi5YWz5Y2hcnVubmluZ+eKtuaAgeS4rXBhcmFtc+S4uuW/heS8oOWtl+aute+8jOS4lOivpeWtl+autemcgOS4uk9iamVjdOexu+Wei++8jOivpuaDheivt+WPguiAg+aWh+aho+OAglwiKTtcclxuXHRcdFx0XHRpZiAoXCJzdHJpbmdcIiAhPT0gdShuLnBhcmFtcy5pdGVtTmFtZSkgfHwgbi5wYXJhbXMuaXRlbU5hbWUubGVuZ3RoID4gMzIpIHJldHVybiB2b2lkIGNvbnNvbGUud2FybihcIumBk+WFty/llYblk4HlkI3np7DkuLrlv4XkvKDlrZfmrrXvvIzkuJTplb/luqblsI/kuo4zMuS4quWtl+espu+8jOivpuaDheivt+WPguiAg+aWh+aho1wiKTtcclxuXHRcdFx0XHRyLnBhcmFtcy5pdG5tID0gbi5wYXJhbXMuaXRlbU5hbWUsIFwic3RyaW5nXCIgPT09IHUobi5wYXJhbXMuaXRlbUlkKSAmJiBuLnBhcmFtcy5pdGVtSWQubGVuZ3RoIDwgMzIgJiYgKHIucGFyYW1zLml0aWQgPSBuLnBhcmFtcy5pdGVtSWQpLCBcIm51bWJlclwiID09PSB1KG4ucGFyYW1zLml0ZW1Db3VudCkgJiYgdG9TdHJpbmcobi5wYXJhbXMuaXRlbUNvdW50KS5sZW5ndGggPCAzMiA/IHIucGFyYW1zLml0Y28gPSBuLnBhcmFtcy5pdGVtQ291bnQgOiByLnBhcmFtcy5pdGNvID0gMSwgbi5ldmVudC5pbmRleE9mKFwicGF5XCIpICE9PSAtMSAmJiAoXCJudW1iZXJcIiA9PT0gdShuLnBhcmFtcy5pdGVtTW9uZXkpICYmIHRvU3RyaW5nKG4ucGFyYW1zLml0ZW1Nb25leSkubGVuZ3RoIDwgMzIgPyByLnBhcmFtcy5tb25leSA9IG4ucGFyYW1zLml0ZW1Nb25leSA6IHIucGFyYW1zLm1vbmV5ID0gMCksIFwic3RyaW5nXCIgPT09IHUobi5wYXJhbXMuZGVzYykgJiYgbi5wYXJhbXMuZGVzYy5sZW5ndGggPCA2NCAmJiAoci5wYXJhbXMuZGVzYyA9IG4ucGFyYW1zLmRlc2MpLCByLnN0YXRlID0gXCJydW5uaW5nXCIsIHIuc2lkID0gbi5zdGFnZUlkLCByLnNubSA9IG4uc3RhZ2VOYW1lLCB0ID0gciwgdGhpcy5yZXF1ZXN0KClcclxuXHRcdFx0fVxyXG5cdFx0fSwgdGhpcy5vbkVuZCA9IGZ1bmN0aW9uKG4pIHtcclxuXHRcdFx0aWYgKGUobikpIHtcclxuXHRcdFx0XHR2YXIgYSA9IHt9O1xyXG5cdFx0XHRcdGlmIChhLnN0YXRlID0gXCJlbmRcIiwgKFwic3RyaW5nXCIgPT09IHUobi51c2VySWQpICYmIG4udXNlcklkKSA8IDMyID8gYS51aWQgPSBuLnVzZXJJZCA6IGEudWlkID0gXCJcIiwgIXUobi5ldmVudCkgJiYgRi5qb2luKFwiLFwiKS5pbmRleE9mKG4uZXZlbnQgKyBcIixcIikgIT09IC0xKSByZXR1cm4gdm9pZCBGLmpvaW4oXCIsXCIpO1xyXG5cdFx0XHRcdGEuc2lkID0gbi5zdGFnZUlkLCBhLnNubSA9IG4uc3RhZ2VOYW1lLCBhLmV2ZW50ID0gbi5ldmVudCwgYS5zZHIgPSAwICE9PSByID8gRGF0ZS5ub3coKSAtIHIgOiBcIlwiLCBhLnBhcmFtcyA9IHt9LCBcIm9iamVjdFwiID09PSB1KG4ucGFyYW1zKSAmJiBcInN0cmluZ1wiID09PSB1KG4ucGFyYW1zLmRlc2MpICYmIG4ucGFyYW1zLmRlc2MubGVuZ3RoIDwgNjQgJiYgKGEucGFyYW1zLmRlc2MgPSBuLnBhcmFtcy5kZXNjKSwgdCA9IGEsIHRoaXMucmVxdWVzdCgpXHJcblx0XHRcdH1cclxuXHRcdH0sIHRoaXMucmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgZSA9IGcoSSk7XHJcblx0XHRcdHQuc3MgPSBuLCBlLmN0ID0gdCwgZihlLCBcInNjcmVlblwiKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcigpIHtcclxuXHRcdGZ1bmN0aW9uIGUoZSkge1xyXG5cdFx0XHRyZXR1cm4gIS9eXFxkKyguXFxkKykqJC8udGVzdChlLmxldmVsSWQpIHx8IGUubGV2ZWxJZC5sZW5ndGggPiAzMiB8fCBpc05hTihOdW1iZXIoZS5sZXZlbElkKSkgPyAoY29uc29sZS53YXJuKFwibGV2ZWxJZOW/hemhu+espuWQiOS8oOWPguinhOWImSzor7flj4LogIPmlofmoaPjgIJcIiksICExKSA6ICEoXCJzdHJpbmdcIiAhPT0gdShlLmxldmVsTmFtZSkgfHwgZS5sZXZlbE5hbWUubGVuZ3RoID4gMzIpIHx8IChjb25zb2xlLndhcm4oXCJsZXZlbE5hbWXkuLrlv4XkvKDlrZfmrrUs5LiU6ZW/5bqm5bCP5LqOMzLkuKrlrZfnrKYs6K+35Y+C6ICD5paH5qGjXCIpLCAhMSlcclxuXHRcdH1cclxuXHRcdHZhciB0ID0gXCJcIixcclxuXHRcdFx0biA9IFwiXCIsXHJcblx0XHRcdHIgPSAwO1xyXG5cdFx0dGhpcy5vbkluaXRMZXZlbCA9IGZ1bmN0aW9uKHIpIHtcclxuXHRcdFx0aWYgKGUocikpIHtcclxuXHRcdFx0XHR2YXIgYSA9IHt9O1xyXG5cdFx0XHRcdFwiXCIgPT0gSCA/IChuID0gZCgpLCB3eC5zZXRTdG9yYWdlU3luYyhcImFsZF9sZXZlbF9zZXNzaW9uXCIsIG4pKSA6IG4gPSBILCBhLmxpZCA9IHIubGV2ZWxJZCwgYS5sbm0gPSByLmxldmVsTmFtZSwgKFwic3RyaW5nXCIgPT09IHUoci51c2VySWQpICYmIHIudXNlcklkKSA8IDMyID8gYS51aWQgPSByLnVzZXJJZCA6IGEudWlkID0gXCJcIiwgYS51biA9IHIudXNlck5hbWUsIGEuc3RhdGUgPSBcImluaXRcIiwgdCA9IGEsIHRoaXMucmVxdWVzdCgpXHJcblx0XHRcdH1cclxuXHRcdH0sIHRoaXMub25TZXRMZXZlbCA9IGZ1bmN0aW9uKGEpIHtcclxuXHRcdFx0aWYgKGUoYSkpIHtcclxuXHRcdFx0XHR2YXIgcyA9IHt9O1xyXG5cdFx0XHRcdG4gPSBkKCksIHd4LnNldFN0b3JhZ2VTeW5jKFwiYWxkX2xldmVsX3Nlc3Npb25cIiwgbiksIHMubGlkID0gYS5sZXZlbElkLCBzLmxubSA9IGEubGV2ZWxOYW1lLCAoXCJzdHJpbmdcIiA9PT0gdShhLnVzZXJJZCkgJiYgYS51c2VySWQpIDwgMzIgPyBzLnVpZCA9IGEudXNlcklkIDogcy51aWQgPSBcIlwiLCBzLnVuID0gYS51c2VyTmFtZSwgcy5zdGF0ZSA9IFwic2V0XCIsIHMudG1yID0gMCAhPT0gVSA/IERhdGUubm93KCkgLSBVIDogXCJcIiwgciA9IERhdGUubm93KCksIHd4LnNldFN0b3JhZ2VTeW5jKFwiYWxkX2xldmVsX3RpbWVcIiwgciksIHQgPSBzLCB0aGlzLnJlcXVlc3QoKVxyXG5cdFx0XHR9XHJcblx0XHR9LCB0aGlzLm9uUGF5U3VjY2VzcyA9IGZ1bmN0aW9uKG4pIHtcclxuXHRcdFx0aWYgKGUobikpIHtcclxuXHRcdFx0XHR2YXIgciA9IHtcclxuXHRcdFx0XHRcdHBhcmFtczoge31cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGlmIChcIm9iamVjdFwiICE9PSB1KG4ucGFyYW1zKSkgcmV0dXJuIHZvaWQgY29uc29sZS53YXJuKFwi5YWz5Y2hcGF5U3VjY2Vzc+eKtuaAgeS4rXBhcmFtc+S4uuW/heS8oOWtl+aute+8jOS4lOivpeWtl+autemcgOS4uk9iamVjdOexu+Wei++8jOivpuaDheivt+WPguiAg+aWh+aho+OAglwiKTtcclxuXHRcdFx0XHRcIm51bWJlclwiID09PSB1KG4ucGFyYW1zLmFtb3VudCkgJiYgdG9TdHJpbmcobi5wYXJhbXMuYW1vdW50KS5sZW5ndGggPCAzMiA/IHIucGFyYW1zLmFtID0gbi5wYXJhbXMuYW1vdW50IDogci5wYXJhbXMuYW0gPSAwLCBcInN0cmluZ1wiID09PSB1KG4ucGFyYW1zLmRlc2MpICYmIG4ucGFyYW1zLmRlc2MubGVuZ3RoIDwgNjQgJiYgKHIucGFyYW1zLmRlc2MgPSBuLnBhcmFtcy5kZXNjKSwgci5saWQgPSBuLmxldmVsSWQsIHIubG5tID0gbi5sZXZlbE5hbWUsIChcInN0cmluZ1wiID09PSB1KG4udXNlcklkKSAmJiBuLnVzZXJJZCkgPCAzMiA/IHIudWlkID0gbi51c2VySWQgOiByLnVpZCA9IFwiXCIsIHIudW4gPSBuLnVzZXJOYW1lLCByLnN0YXRlID0gXCJwYXlTdWNjZXNzXCIsIHQgPSByLCB0aGlzLnJlcXVlc3QoKVxyXG5cdFx0XHR9XHJcblx0XHR9LCB0aGlzLm9uUGF5RmFpbCA9IGZ1bmN0aW9uKG4pIHtcclxuXHRcdFx0aWYgKGUobikpIHtcclxuXHRcdFx0XHR2YXIgciA9IHtcclxuXHRcdFx0XHRcdHBhcmFtczoge31cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGlmIChcIm9iamVjdFwiICE9PSB1KG4ucGFyYW1zKSkgcmV0dXJuIHZvaWQgY29uc29sZS53YXJuKFwi5YWz5Y2hcGF5RmlsZeeKtuaAgeS4rXBhcmFtc+S4uuW/heS8oOWtl+aute+8jOS4lOivpeWtl+autemcgOS4uk9iamVjdOexu+Wei++8jOivpuaDheivt+WPguiAg+aWh+aho+OAglwiKTtcclxuXHRcdFx0XHRcIm51bWJlclwiID09PSB1KG4ucGFyYW1zLmFtb3VudCkgJiYgdG9TdHJpbmcobi5wYXJhbXMuYW1vdW50KS5sZW5ndGggPCAzMiA/IHIucGFyYW1zLmFtID0gbi5wYXJhbXMuYW1vdW50IDogci5wYXJhbXMuYW0gPSAwLCBcInN0cmluZ1wiID09PSB1KG4ucGFyYW1zLmRlc2MpICYmIG4ucGFyYW1zLmRlc2MubGVuZ3RoIDwgNjQgJiYgKHIucGFyYW1zLmRlc2MgPSBuLnBhcmFtcy5kZXNjKSwgci5saWQgPSBuLmxldmVsSWQsIHIubG5tID0gbi5sZXZlbE5hbWUsIChcInN0cmluZ1wiID09PSB1KG4udXNlcklkKSAmJiBuLnVzZXJJZCkgPCAzMiA/IHIudWlkID0gbi51c2VySWQgOiByLnVpZCA9IFwiXCIsIHIudW4gPSBuLnVzZXJOYW1lLCByLnN0YXRlID0gXCJwYXlGYWlsXCIsIHQgPSByLCB0aGlzLnJlcXVlc3QoKVxyXG5cdFx0XHR9XHJcblx0XHR9LCB0aGlzLnJlcXVlc3QgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGUgPSBnKEkpO1xyXG5cdFx0XHR0LmxzID0gbiwgZS5jdCA9IHQsIGYoZSwgXCJsZXZlbFwiKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYSgpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihlLCB0KSB7XHJcblx0XHRcdHd4LmdldFNldHRpbmcoe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHQpIHtcclxuXHRcdFx0XHRcdHQuYXV0aFNldHRpbmdbXCJzY29wZS51c2VySW5mb1wiXSA/IHd4LmdldFVzZXJJbmZvKHtcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24odCkge1xyXG5cdFx0XHRcdFx0XHRcdEMgPSBoKHQudXNlckluZm8uYXZhdGFyVXJsLnNwbGl0KFwiL1wiKSksIGUodClcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0ZShcIlwiKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KSA6IGUoXCJcIilcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0ZShcIlwiKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUsIHQpIHtcclxuXHRcdFx0d3guZ2V0TmV0d29ya1R5cGUoe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHQpIHtcclxuXHRcdFx0XHRcdGUodClcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0ZShcIlwiKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUsIHQpIHtcclxuXHRcdFx0XCIxMDQ0XCIgPT0gai5zY2VuZSA/IHd4LmdldFNoYXJlSW5mbyh7XHJcblx0XHRcdFx0c2hhcmVUaWNrZXQ6IGouc2hhcmVUaWNrZXQsXHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24odCkge1xyXG5cdFx0XHRcdFx0ZSh0KVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmFpbDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRlKFwiXCIpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KSA6IGUoXCJcIilcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKGUsIHQpIHtcclxuXHRcdFx0dy5nZXRMb2NhdGlvbiA/IHd4LmdldExvY2F0aW9uKHtcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbih0KSB7XHJcblx0XHRcdFx0XHRlKHQpXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGUoXCJcIilcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pIDogd3guZ2V0U2V0dGluZyh7XHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24odCkge1xyXG5cdFx0XHRcdFx0dC5hdXRoU2V0dGluZ1tcInNjb3BlLnVzZXJMb2NhdGlvblwiXSA/ICh3eC5nZXRMb2NhdGlvbih7XHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHQpIHtcclxuXHRcdFx0XHRcdFx0XHRlKHQpXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGUoXCJcIilcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSksIGUoXCJcIikpIDogZShcIlwiKVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmFpbDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRlKFwiXCIpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHUoZSkge1xyXG5cdFx0ZnVuY3Rpb24gdChlKSB7XHJcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSlcclxuXHRcdH1cclxuXHRcdHZhciBuID0ge307XHJcblx0XHRyZXR1cm4gXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUsIHQpIHtcclxuXHRcdFx0XHRuW1wiW29iamVjdCBcIiArIGUgKyBcIl1cIl0gPSBlLnRvTG93ZXJDYXNlKClcclxuXHRcdFx0fSksXHJcblx0XHRcdGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBudWxsID09IGUgPyBlIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZSB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUgPyBuW3QuY2FsbChlKV0gfHwgXCJvYmplY3RcIiA6IHR5cGVvZiBlXHJcblx0XHRcdH0oKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYyhlKSB7XHJcblx0XHRmb3IgKHZhciB0IGluIGUpXHJcblx0XHRcdGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBlW3RdICYmIG51bGwgIT09IGVbdF0pIHJldHVybiAhMDtcclxuXHRcdHJldHVybiAhMVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZCgpIHtcclxuXHRcdGZ1bmN0aW9uIGUoKSB7XHJcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKDY1NTM2ICogKDEgKyBNYXRoLnJhbmRvbSgpKSkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGUoKSArIGUoKSArIGUoKSArIGUoKSArIGUoKSArIGUoKSArIGUoKSArIGUoKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gbCgpIHtcclxuXHRcdHRoaXMuY29uY3VycmVuY3kgPSA0LCB0aGlzLnF1ZXVlID0gW10sIHRoaXMudGFza3MgPSBbXSwgdGhpcy5hY3RpdmVDb3VudCA9IDA7XHJcblx0XHR2YXIgZSA9IHRoaXM7XHJcblx0XHR0aGlzLnB1c2ggPSBmdW5jdGlvbih0KSB7XHJcblx0XHRcdHRoaXMudGFza3MucHVzaChuZXcgUHJvbWlzZShmdW5jdGlvbihuLCByKSB7XHJcblx0XHRcdFx0dmFyIGEgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGUuYWN0aXZlQ291bnQrKywgdCgpLnRoZW4oZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRuKGUpXHJcblx0XHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRlLm5leHQoKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGUuYWN0aXZlQ291bnQgPCBlLmNvbmN1cnJlbmN5ID8gYSgpIDogZS5xdWV1ZS5wdXNoKGEpXHJcblx0XHRcdH0pKVxyXG5cdFx0fSwgdGhpcy5hbGwgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKHRoaXMudGFza3MpXHJcblx0XHR9LCB0aGlzLm5leHQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0ZS5hY3RpdmVDb3VudC0tLCBlLnF1ZXVlLmxlbmd0aCA+IDAgJiYgZS5xdWV1ZS5zaGlmdCgpKClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGYoZSwgbikge1xyXG5cdFx0ZnVuY3Rpb24gcigpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQsIG4pIHtcclxuXHRcdFx0XHR3eC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogXCJodHRwczovL1wiICsgdiArIFwiLmFsZHd4LmNvbS9kLmh0bWxcIixcclxuXHRcdFx0XHRcdGRhdGE6IGUsXHJcblx0XHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFx0c2U6IHEgfHwgXCJcIixcclxuXHRcdFx0XHRcdFx0b3A6IGIgfHwgXCJcIixcclxuXHRcdFx0XHRcdFx0aW1nOiBDIHx8IFwiXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXHJcblx0XHRcdFx0XHRmYWlsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dChcIlwiKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0dCgyMDAgPT0gZS5zdGF0dXNDb2RlID8gXCJcIiA6IFwic3RhdHVzIGVycm9yXCIpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHRcdHcudXNlT3BlbiAmJiB0KCksIE8rKywgZS5hcyA9IEQsIGUuYXQgPSBNLCBlLnJxX2MgPSBPLCBlLmlmbyA9IF8sIGUuYWsgPSB3LmFwcF9rZXksIGUudXUgPSB4LCBlLnYgPSBtLCBlLnN0ID0gRGF0ZS5ub3coKSwgZS5ldiA9IG4sIGUudGUgPSBTLCBlLndzciA9IGosIFwiXCIgIT09IHAoZS51Zm8pICYmIChlLnVmbyA9IGUudWZvKSwgZS5lYyA9IE4sIHcudXNlT3BlbiA/IFwiXCIgPT09IGIgPyBLLnB1c2gocikgOiAod3guUXVldWUucHVzaChyKSwgSy5jb25jYXQoKSkgOiB3eC5RdWV1ZS5wdXNoKHIpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBwKGUpIHtcclxuXHRcdGlmICh2b2lkIDAgPT09IGUgfHwgXCJcIiA9PT0gZSkgcmV0dXJuIFwiXCI7XHJcblx0XHR2YXIgdCA9IHt9O1xyXG5cdFx0Zm9yICh2YXIgbiBpbiBlKSBcInJhd0RhdGFcIiAhPSBuICYmIFwiZXJyTXNnXCIgIT0gbiAmJiAodFtuXSA9IGVbbl0pO1xyXG5cdFx0cmV0dXJuIHRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGcoZSkge1xyXG5cdFx0dmFyIHQgPSB7fTtcclxuXHRcdGZvciAodmFyIG4gaW4gZSkgdFtuXSA9IGVbbl07XHJcblx0XHRyZXR1cm4gdFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaChlKSB7XHJcblx0XHRmb3IgKHZhciB0ID0gXCJcIiwgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSBlW25dLmxlbmd0aCA+IHQubGVuZ3RoICYmICh0ID0gZVtuXSk7XHJcblx0XHRyZXR1cm4gdFxyXG5cdH1cclxuXHR2YXIgbSA9IFwiMy4yLjBcIixcclxuXHRcdHYgPSBcImdsb2dcIixcclxuXHRcdHcgPSByZXF1aXJlKFwiLi9hbGQtZ2FtZS1jb25mXCIpO1xyXG5cdFwiXCIgPT09IHcuYXBwX2tleSAmJiBjb25zb2xlLmVycm9yKFwi6K+35Zyo6YWN572u5paH5Lu25Lit5aGr5YaZ5oKo55qEYXBwX2tleVwiKSwgdy51c2VPcGVuICYmIGNvbnNvbGUud2FybihcIuaPkOekuu+8muW8gOWQr+S6hnVzZU9wZW7phY3nva7lkI7vvIzlpoLmnpzkuI3kuIrkvKDnlKjmiLdvcGVuZElk5YiZ5LiN5Lya5LiK5oql5pWw5o2u44CCXCIpLCB3LmFwcF9rZXkgPSB3LmFwcF9rZXkucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xyXG5cdHZhciB5ID0gdy5vcGVuS2V5LFxyXG5cdFx0UyA9IFwid2dcIjtcclxuXHQhIGZ1bmN0aW9uKCkge1xyXG5cdFx0d3gucmVxdWVzdCh7XHJcblx0XHRcdHVybDogXCJodHRwczovL1wiICsgdiArIFwiLmFsZHd4LmNvbS9jb25maWcvYXBwLmpzb25cIixcclxuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0MjAwID09PSBlLnN0YXR1c0NvZGUgJiYgKGUuZGF0YS52ZXJzaW9uID4gbSAmJiBjb25zb2xlLndhcm4oXCLmgqjnmoRTREvkuI3mmK/mnIDmlrDniYjmnKzvvIzor7flsL3lv6vljYfnuqfvvIFcIiksIGUuZGF0YS53YXJuICYmIGNvbnNvbGUud2FybihlLmRhdGEud2FybiksIGUuZGF0YS5lcnJvciAmJiBjb25zb2xlLmVycm9yKGUuZGF0YS5lcnJvcikpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSgpO1xyXG5cdHZhciBfID0gXCJcIixcclxuXHRcdHggPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGUgPSBcIlwiO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGUgPSB3eC5nZXRTdG9yYWdlU3luYyhcImFsZHN0YXRfdXVpZFwiKSwgd3guc2V0U3RvcmFnZVN5bmMoXCJhbGRfaWZvXCIsICEwKVxyXG5cdFx0XHR9IGNhdGNoICh0KSB7XHJcblx0XHRcdFx0ZSA9IFwidXVpZF9nZXRzdG9yYWdlc3luY1wiXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGUpIF8gPSAhMTtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0ZSA9IGQoKSwgXyA9ICEwO1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHR3eC5zZXRTdG9yYWdlU3luYyhcImFsZHN0YXRfdXVpZFwiLCBlKVxyXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdHd4LnNldFN0b3JhZ2VTeW5jKFwiYWxkc3RhdF91dWlkXCIsIFwidXVpZF9nZXRzdG9yYWdlc3luY1wiKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZVxyXG5cdFx0fSgpLFxyXG5cdFx0SSA9IHt9LFxyXG5cdFx0cSA9IFwiXCIsXHJcblx0XHRiID0gdCgpLFxyXG5cdFx0TiA9IDAsXHJcblx0XHRPID0gXCJcIixcclxuXHRcdGogPSB3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpLFxyXG5cdFx0ayA9IERhdGUubm93KCksXHJcblx0XHRNID0gXCJcIiArIERhdGUubm93KCkgKyBNYXRoLmZsb29yKDFlNyAqIE1hdGgucmFuZG9tKCkpLFxyXG5cdFx0RCA9IFwiXCIgKyBEYXRlLm5vdygpICsgTWF0aC5mbG9vcigxZTcgKiBNYXRoLnJhbmRvbSgpKSxcclxuXHRcdEwgPSAwLFxyXG5cdFx0UCA9IFwiXCIsXHJcblx0XHRDID0gXCJcIixcclxuXHRcdEUgPSAhMCxcclxuXHRcdEEgPSAhMSxcclxuXHRcdFQgPSBbXCJhbGRTZW5kRXZlbnRcIiwgXCJhbGRPblNoYXJlQXBwTWVzc2FnZVwiLCBcImFsZFNoYXJlQXBwTWVzc2FnZVwiLCBcImFsZFNlbmRTZXNzaW9uXCIsIFwiYWxkU2VuZE9wZW5pZFwiLCBcImFsZExldmVsRXZlbnRcIl0sXHJcblx0XHRRID0gW1wicGF5U3RhcnRcIiwgXCJwYXlTdWNjZXNzXCIsIFwicGF5RmFpbFwiLCBcImRpZVwiLCBcInJldml2ZVwiLCBcInRvb2xzXCIsIFwiYXdhcmRcIl0sXHJcblx0XHRGID0gW1wiY29tcGxldGVcIiwgXCJmYWlsXCJdLFxyXG5cdFx0VSA9IHd4LmdldFN0b3JhZ2VTeW5jKFwiYWxkX2xldmVsX3RpbWVcIikgfHwgMCxcclxuXHRcdEggPSB3eC5nZXRTdG9yYWdlU3luYyhcImFsZF9sZXZlbF9zZXNzaW9uXCIpIHx8IFwiXCI7XHJcblx0dm9pZCAwID09PSB3eC5RdWV1ZSAmJiAod3guUXVldWUgPSBuZXcgbCwgd3guUXVldWUuYWxsKCkpO1xyXG5cdHZhciBLID0gbmV3IGU7XHJcblx0KGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKFthKCksIHMoKSwgbygpXSlcclxuXHR9KSgpLnRoZW4oZnVuY3Rpb24oZSkge1xyXG5cdFx0XCJcIiAhPT0gZVsyXSA/IChJLmxhdCA9IGVbMl0ubGF0aXR1ZGUgfHwgXCJcIiwgSS5sbmcgPSBlWzJdLmxvbmdpdHVkZSB8fCBcIlwiLCBJLnNwZCA9IGVbMl0uc3BlZWQgfHwgXCJcIikgOiAoSS5sYXQgPSBcIlwiLCBJLmxuZyA9IFwiXCIsIEkuc3BkID0gXCJcIiksIFwiXCIgIT09IGVbMV0gPyBJLm50ID0gZVsxXS5uZXR3b3JrVHlwZSB8fCBcIlwiIDogSS5udCA9IFwiXCI7XHJcblx0XHR2YXIgdCA9IGcoSSk7XHJcblx0XHRcIlwiICE9PSBlWzBdICYmICh0LnVmbyA9IGVbMF0sIFAgPSBlWzBdKSwgZih0LCBcImluaXRcIilcclxuXHR9KSwgd3gub25TaG93KGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmIChqID0gZSwgTCA9IERhdGUubm93KCksICFFICYmICFBKSB7XHJcblx0XHRcdE0gPSBcIlwiICsgRGF0ZS5ub3coKSArIE1hdGguZmxvb3IoMWU3ICogTWF0aC5yYW5kb20oKSksIF8gPSAhMTtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHR3eC5zZXRTdG9yYWdlU3luYyhcImFsZF9pZm9cIiwgITEpXHJcblx0XHRcdH0gY2F0Y2ggKGUpIHt9XHJcblx0XHR9XHJcblx0XHRFID0gITEsIEEgPSAhMTtcclxuXHRcdHZhciB0ID0gZyhJKSxcclxuXHRcdFx0biA9IGcoSSk7XHJcblx0XHR0LnNtID0gTCAtIGssIGUucXVlcnkuYWxkX3NoYXJlX3NyYyAmJiBlLnNoYXJlVGlja2V0ICYmIFwiMTA0NFwiID09PSBlLnNjZW5lID8gKG4udHAgPSBcImFsZF9zaGFyZV9jbGlja1wiLCBpKCkudGhlbihmdW5jdGlvbihlKSB7XHJcblx0XHRcdG4uY3QgPSBlLCBmKG4sIFwiZXZlbnRcIilcclxuXHRcdH0pKSA6IGUucXVlcnkuYWxkX3NoYXJlX3NyYyAmJiAobi50cCA9IFwiYWxkX3NoYXJlX2NsaWNrXCIsIG4uY3QgPSBcIjFcIiwgZihuLCBcImV2ZW50XCIpKSwgZih0LCBcInNob3dcIilcclxuXHR9KSwgd3gub25IaWRlKGZ1bmN0aW9uKCkge1xyXG5cdFx0d3guc2V0U3RvcmFnZVN5bmMoXCJhbGRfbGV2ZWxfc2Vzc2lvblwiLCBcIlwiKTtcclxuXHRcdHZhciBlID0gZyhJKTtcclxuXHRcdGUuZHIgPSBEYXRlLm5vdygpIC0gTCwgXCJcIiA9PT0gUCA/IHd4LmdldFNldHRpbmcoe1xyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbih0KSB7XHJcblx0XHRcdFx0dC5hdXRoU2V0dGluZ1tcInNjb3BlLnVzZXJJbmZvXCJdID8gd3guZ2V0VXNlckluZm8oe1xyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24odCkge1xyXG5cdFx0XHRcdFx0XHRlLnVmbyA9IHQsIFAgPSB0LCBDID0gaCh0LnVzZXJJbmZvLmF2YXRhclVybC5zcGxpdChcIi9cIikpLCBmKGUsIFwiaGlkZVwiKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pIDogZihlLCBcImhpZGVcIilcclxuXHRcdFx0fVxyXG5cdFx0fSkgOiBmKGUsIFwiaGlkZVwiKVxyXG5cdH0pLCB3eC5vbkVycm9yKGZ1bmN0aW9uKGUpIHtcclxuXHRcdHZhciB0ID0gZyhJKTtcclxuXHRcdHQudHAgPSBcImFsZF9lcnJvcl9tZXNzYWdlXCIsIHQuY3QgPSBlLCBOKyssIGYodCwgXCJldmVudFwiKVxyXG5cdH0pO1xyXG5cdHZhciBSID0ge1xyXG5cdFx0YWxkU2VuZEV2ZW50OiBmdW5jdGlvbihlLCB0KSB7XHJcblx0XHRcdHZhciBuID0gZyhJKTtcclxuXHRcdFx0aWYgKFwiXCIgIT09IGUgJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiBlLmxlbmd0aCA8PSAyNTUpXHJcblx0XHRcdFx0aWYgKG4udHAgPSBlLCBcInN0cmluZ1wiID09IHR5cGVvZiB0ICYmIHQubGVuZ3RoIDw9IDI1NSkgbi5jdCA9IFN0cmluZyh0KSwgZihuLCBcImV2ZW50XCIpO1xyXG5cdFx0XHRcdGVsc2UgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIHQpIHtcclxuXHRcdFx0XHRpZiAoSlNPTi5zdHJpbmdpZnkodCkubGVuZ3RoID49IDI1NSkgcmV0dXJuIHZvaWQgY29uc29sZS5lcnJvcihcIuiHquWumuS5ieS6i+S7tuWPguaVsOS4jeiDvei2hei/hzI1NeS4quWtl+esplwiKTtcclxuXHRcdFx0XHRpZiAoYyh0KSkgcmV0dXJuIHZvaWQgY29uc29sZS5lcnJvcihcIuS6i+S7tuWPguaVsO+8jOWPguaVsOWGhemDqOWPquaUr+aMgU51bWJlcixTdHJpbmfnrYnnsbvlnovvvIzor7flj4LogIPmjqXlhaXmlofmoaNcIik7XHJcblx0XHRcdFx0Zm9yICh2YXIgciBpbiB0KSBcIm51bWJlclwiID09IHR5cGVvZiB0W3JdICYmICh0W3JdID0gdFtyXSArIFwicyMjXCIpO1xyXG5cdFx0XHRcdG4uY3QgPSBKU09OLnN0cmluZ2lmeSh0KSwgZihuLCBcImV2ZW50XCIpXHJcblx0XHRcdH0gZWxzZSB2b2lkIDAgPT09IHQgfHwgXCJcIiA9PT0gdCA/IGYobiwgXCJldmVudFwiKSA6IGNvbnNvbGUuZXJyb3IoXCLkuovku7blj4LmlbDlv4XpobvkuLpTdHJpbmcsT2JqZWN057G75Z6LLOS4lOWPguaVsOmVv+W6puS4jeiDvei2hei/hzI1NeS4quWtl+esplwiKTtcclxuXHRcdFx0ZWxzZSBjb25zb2xlLmVycm9yKFwi5LqL5Lu25ZCN56ew5b+F6aG75Li6U3RyaW5n57G75Z6L5LiU5LiN6IO96LaF6L+HMjU15Liq5a2X56ymXCIpXHJcblx0XHR9LFxyXG5cdFx0YWxkT25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0d3gub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0QSA9ICEwO1xyXG5cdFx0XHRcdHZhciB0ID0gZSgpLFxyXG5cdFx0XHRcdFx0biA9IFwiXCI7XHJcblx0XHRcdFx0biA9IHZvaWQgMCAhPT0gai5xdWVyeS5hbGRfc2hhcmVfc3JjID8gdm9pZCAwICE9PSB0LnF1ZXJ5ID8gKGoucXVlcnkuYWxkX3NoYXJlX3NyYy5pbmRleE9mKHgpLCB0LnF1ZXJ5ICsgXCImYWxkX3NoYXJlX3NyYz1cIiArIGoucXVlcnkuYWxkX3NoYXJlX3NyYyArIFwiLFwiICsgeCkgOiAoai5xdWVyeS5hbGRfc2hhcmVfc3JjLmluZGV4T2YoeCksIFwiYWxkX3NoYXJlX3NyYz1cIiArIGoucXVlcnkuYWxkX3NoYXJlX3NyYyArIFwiLFwiICsgeCkgOiB2b2lkIDAgIT09IHQucXVlcnkgPyB0LnF1ZXJ5ICsgXCImYWxkX3NoYXJlX3NyYz1cIiArIHggOiBcImFsZF9zaGFyZV9zcmM9XCIgKyB4LCBcInVuZGVmaW5lZFwiICE9IHUodC5hbGRfZGVzYykgJiYgKG4gKz0gXCImYWxkX2Rlc2M9XCIgKyB0LmFsZF9kZXNjKSwgdC5xdWVyeSA9IG47XHJcblx0XHRcdFx0dmFyIHIgPSBnKEkpO1xyXG5cdFx0XHRcdHJldHVybiByLmN0ID0gdCwgci5jdC5zaG8gPSAxLCByLnRwID0gXCJhbGRfc2hhcmVfY2hhaW5cIiwgZihyLCBcImV2ZW50XCIpLCB0XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0YWxkU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdEEgPSAhMDtcclxuXHRcdFx0dmFyIHQgPSBlLFxyXG5cdFx0XHRcdG4gPSBcIlwiO1xyXG5cdFx0XHRuID0gdm9pZCAwICE9PSBqLnF1ZXJ5LmFsZF9zaGFyZV9zcmMgPyB2b2lkIDAgIT09IHQucXVlcnkgPyAoai5xdWVyeS5hbGRfc2hhcmVfc3JjLmluZGV4T2YoeCksIHQucXVlcnkgKyBcIiZhbGRfc2hhcmVfc3JjPVwiICsgai5xdWVyeS5hbGRfc2hhcmVfc3JjICsgXCIsXCIgKyB4KSA6IChqLnF1ZXJ5LmFsZF9zaGFyZV9zcmMuaW5kZXhPZih4KSwgXCJhbGRfc2hhcmVfc3JjPVwiICsgai5xdWVyeS5hbGRfc2hhcmVfc3JjICsgXCIsXCIgKyB4KSA6IHZvaWQgMCAhPT0gdC5xdWVyeSA/IHQucXVlcnkgKyBcIiZhbGRfc2hhcmVfc3JjPVwiICsgeCA6IFwiYWxkX3NoYXJlX3NyYz1cIiArIHg7XHJcblx0XHRcdHZhciByID0gZyhJKTtcclxuXHRcdFx0XCJ1bmRlZmluZWRcIiAhPSB1KHQuYWxkX2Rlc2MpICYmIChuICs9IFwiJmFsZF9kZXNjPVwiICsgdC5hbGRfZGVzYyksIHQucXVlcnkgPSBuLCByLmN0ID0gdCwgci50cCA9IFwiYWxkX3NoYXJlX2NoYWluXCIsIGYociwgXCJldmVudFwiKSwgd3guc2hhcmVBcHBNZXNzYWdlKHQpXHJcblx0XHR9LFxyXG5cdFx0YWxkU2VuZFNlc3Npb246IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0aWYgKFwiXCIgPT09IGUgfHwgIWUpIHJldHVybiB2b2lkIGNvbnNvbGUuZXJyb3IoXCLor7fkvKDlhaXku47lkI7lj7Dojrflj5bnmoRzZXNzaW9uX2tleVwiKTtcclxuXHRcdFx0dmFyIHQgPSBnKEkpO1xyXG5cdFx0XHR0LnRwID0gXCJzZXNzaW9uXCIsIHQuY3QgPSBcInNlc3Npb25cIiwgcSA9IGUsIFwiXCIgPT09IFAgPyB3eC5nZXRTZXR0aW5nKHtcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRlLmF1dGhTZXR0aW5nW1wic2NvcGUudXNlckluZm9cIl0gPyB3eC5nZXRVc2VySW5mbyh7XHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHR0LnVmbyA9IGUsIGYodCwgXCJldmVudFwiKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KSA6IGYodCwgXCJldmVudFwiKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkgOiAodC51Zm8gPSBQLCBcIlwiICE9PSBQICYmICh0LmdpZCA9IFwiXCIpLCBmKHQsIFwiZXZlbnRcIikpXHJcblx0XHR9LFxyXG5cdFx0YWxkU2VuZE9wZW5pZDogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRpZiAoXCJcIiA9PT0gZSB8fCAhZSkgcmV0dXJuIHZvaWQgY29uc29sZS5lcnJvcihcIm9wZW5JROS4jeiDveS4uuepulwiKTtcclxuXHRcdFx0YiA9IGUsIHd4LnNldFN0b3JhZ2VTeW5jKFwiYWxkc3RhdF9vcFwiLCBcIm9wZW5pZFwiKTtcclxuXHRcdFx0dmFyIHQgPSBnKEkpO1xyXG5cdFx0XHR0LnRwID0gXCJvcGVuaWRcIiwgdC5jdCA9IFwib3BlbmlkXCIsIGYodCwgXCJldmVudFwiKVxyXG5cdFx0fVxyXG5cdH07XHJcblx0d3guYWxkU3RhZ2UgPSBuZXcgbiwgd3guYWxkTGV2ZWwgPSBuZXcgcjtcclxuXHRmb3IgKHZhciBHID0gMDsgRyA8IFQubGVuZ3RoOyBHKyspICEgZnVuY3Rpb24oZSwgdCkge1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHd4LCBlLCB7XHJcblx0XHRcdHZhbHVlOiB0LFxyXG5cdFx0XHR3cml0YWJsZTogITEsXHJcblx0XHRcdGVudW1lcmFibGU6ICEwLFxyXG5cdFx0XHRjb25maWd1cmFibGU6ICEwXHJcblx0XHR9KVxyXG5cdH0oVFtHXSwgUltUW0ddXSk7XHJcblx0dHJ5IHtcclxuXHRcdHZhciBKID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHRcdEkuYnIgPSBKLmJyYW5kIHx8IFwiXCIsIEkubWQgPSBKLm1vZGVsLCBJLnByID0gSi5waXhlbFJhdGlvLCBJLnN3ID0gSi5zY3JlZW5XaWR0aCwgSS5zaCA9IEouc2NyZWVuSGVpZ2h0LCBJLnd3ID0gSi53aW5kb3dXaWR0aCwgSS53aCA9IEoud2luZG93SGVpZ2h0LCBJLmxhbmcgPSBKLmxhbmd1YWdlLCBJLnd2ID0gSi52ZXJzaW9uLCBJLnN2ID0gSi5zeXN0ZW0sIEkud3Z2ID0gSi5wbGF0Zm9ybSwgSS5mcyA9IEouZm9udFNpemVTZXR0aW5nLCBJLndzZGsgPSBKLlNES1ZlcnNpb24sIEkuYmggPSBKLmJlbmNobWFya0xldmVsIHx8IFwiXCIsIEkuYnQgPSBKLmJhdHRlcnkgfHwgXCJcIiwgSS53ZiA9IEoud2lmaVNpZ25hbCB8fCBcIlwiLCBJLmxuZyA9IFwiXCIsIEkubGF0ID0gXCJcIiwgSS5udCA9IFwiXCIsIEkuc3BkID0gXCJcIiwgSS51Zm8gPSBcIlwiXHJcblx0fSBjYXRjaCAoZSkge31cclxufSgpOyJdfQ==