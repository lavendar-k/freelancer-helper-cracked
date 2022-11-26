!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 49));
})([
  ,
  function (e, t, r) {
    e.exports = r(16);
  },
  ,
  function (e, t) {
    function r(e, t, r, n, o, a, c) {
      try {
        var i = e[a](c),
          s = i.value;
      } catch (e) {
        return void r(e);
      }
      i.done ? t(s) : Promise.resolve(s).then(n, o);
    }
    e.exports = function (e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, a) {
          var c = e.apply(t, n);
          function i(e) {
            r(c, o, a, i, s, "next", e);
          }
          function s(e) {
            r(c, o, a, i, s, "throw", e);
          }
          i(void 0);
        });
      };
    };
  },
  function (e, t, r) {
    "use strict";
    r.d(t, "d", function () {
      return i;
    }),
      r.d(t, "a", function () {
        return s;
      }),
      r.d(t, "c", function () {
        return u;
      }),
      r.d(t, "b", function () {
        return l;
      });
    var n = r(1),
      o = r.n(n),
      a = r(3),
      c = r.n(a);
    r(14);
    function i(e) {
      return new Promise(function (t, r) {
        chrome.runtime.sendMessage(e, t);
      });
    }
    function s(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "local";
      return new Promise(function (r, n) {
        chrome.storage[t].get(e, function (t) {
          r(t && t[e]);
        });
      });
    }
    function u(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "local";
      return new Promise(function (n, o) {
        var a = {};
        (a[e] = t), chrome.storage[r].set(a, n);
      });
    }
    function l(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (p = c()(
        o.a.mark(function e(t) {
          var r, n;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), s("config", "sync");
                case 2:
                  if (((e.t0 = e.sent), e.t0)) {
                    e.next = 5;
                    break;
                  }
                  e.t0 = {};
                case 5:
                  return (r = e.t0), (n = Object.assign({}, r, t)), (e.next = 9), u("config", n, "sync");
                case 9:
                  return e.abrupt("return", n);
                case 10:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
  },
  function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return n;
    }),
      r.d(t, "c", function () {
        return o;
      }),
      r.d(t, "a", function () {
        return a;
      });
    var n = "https://freelancer-helper.com",
      o = (new Date(2021, 2, 3), 3),
      a = 3.99;
  },
  ,
  ,
  ,
  function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return l;
    }),
      r.d(t, "d", function () {
        return f;
      }),
      r.d(t, "c", function () {
        return d;
      }),
      r.d(t, "e", function () {
        return h;
      }),
      r.d(t, "f", function () {
        return v;
      }),
      r.d(t, "b", function () {
        return y;
      }),
      r.d(t, "g", function () {
        return g;
      });
    var n = r(1),
      o = r.n(n),
      a = r(3),
      c = r.n(a),
      i = r(4),
      s = r(5),
      u = function () {
        return chrome.runtime.getManifest().version;
      },
      l = (function () {
        var e = c()(
          o.a.mark(function e(t) {
            var r, n, a, c, i;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", 0);
                  case 2:
                    return (
                      (r = s.c), 864e5, (n = new Date(t.signup_date)), (a = new Date()), (c = a.getTime() - n.getTime()), (i = Math.ceil(r - c / 864e5)), e.abrupt("return", i)
                    );
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      p = (function () {
        var e = c()(
          o.a.mark(function e(t) {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!t) {
                      e.next = 16;
                      break;
                    }
                    if (!(t.amount && parseFloat(t.amount) >= s.a && "USD" === t.currency)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return", "PREMIUM");
                  case 5:
                    if (!t.signup_date) {
                      e.next = 14;
                      break;
                    }
                    return (e.next = 8), l(t);
                  case 8:
                    if (!(e.sent > 0)) {
                      e.next = 13;
                      break;
                    }
                    return e.abrupt("return", "DURING_TRIAL");
                  case 13:
                    return e.abrupt("return", "PREMIUM");
                  case 14:
                    e.next = 17;
                    break;
                  case 16:
                    return e.abrupt("return", "NOT_LOGGED_IN");
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      f = (function () {
        var e = c()(
          o.a.mark(function e(t) {
            var r, n, a, c, i, s, u, l;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((r = t.userData), (n = void 0 === r ? null : r), (a = t.queryServer), (c = void 0 !== a && a), (i = t.callback), (e.t0 = n), e.t0)) {
                      e.next = 6;
                      break;
                    }
                    return (e.next = 5), d({ queryServer: c });
                  case 5:
                    e.t0 = e.sent;
                  case 6:
                    return (s = e.t0), (e.next = 9), p(s);
                  case 9:
                    return (u = e.sent), (l = { actual: u, adjusted: u }), i && i(l), e.abrupt("return", l);
                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      d = (function () {
        var e = c()(
          o.a.mark(function e(t) {
            var r, n, a, c, s, u;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((r = t.queryServer), (n = void 0 !== r && r), (a = t.callback), (c = void 0 === a ? null : a), !n)) {
                      e.next = 9;
                      break;
                    }
                    return (e.next = 4), g();
                  case 4:
                    return (s = e.sent), c && c(s.data), e.abrupt("return", s.data);
                  case 9:
                    return (e.next = 11), Object(i.a)("userData");
                  case 11:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 14;
                      break;
                    }
                    e.t0 = null;
                  case 14:
                    return (u = e.t0), c && c(u), e.abrupt("return", u);
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      h = (function () {
        var e = c()(
          o.a.mark(function e(t) {
            var r, n, a, c, l, p, f, d;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.token),
                        (n = t.provider),
                        (a = void 0 === n ? "google" : n),
                        (c = t.callback),
                        (l = new FormData()).append("authToken", r),
                        l.append("provider", a),
                        l.append("extensionVersion", u()),
                        (p = { method: "POST", body: l }),
                        (e.prev = 6),
                        (e.next = 9),
                        fetch("".concat(s.b, "/login.php"), p)
                      );
                    case 9:
                      return (f = e.sent), (e.next = 12), f.json();
                    case 12:
                      if (!(d = e.sent).data || !d.data.session_handle) {
                        e.next = 16;
                        break;
                      }
                      return (e.next = 16), Object(i.c)("sessionHandle", d.data.session_handle);
                    case 16:
                      c(d), (e.next = 24);
                      break;
                    case 20:
                      (e.prev = 20), (e.t0 = e.catch(6)), c({ success: !1, message: "Error accessing the server." });
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[6, 20]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      m = (function () {
        var e = c()(
          o.a.mark(function e() {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Promise.all([Object(i.c)("sessionHandle", null), Object(i.c)("googleToken", null), Object(i.c)("userData", null)]);
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      v = (function () {
        var e = c()(
          o.a.mark(function e(t) {
            var r, n, a, c, l, p, f, d, h, v;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.token),
                        (n = t.provider),
                        (a = void 0 === n ? "google" : n),
                        (c = t.callback),
                        chrome.identity.clearAllCachedAuthTokens(function (e) {
                          return e;
                        }),
                        (l = null),
                        (e.next = 5),
                        Object(i.a)("sessionHandle")
                      );
                    case 5:
                      return (
                        (p = e.sent),
                        (f = new FormData()).append("authToken", r),
                        f.append("provider", a),
                        f.append("extensionVersion", u()),
                        p && f.append("sessionHandle", p),
                        (d = { method: "POST", body: f }),
                        (e.next = 14),
                        m()
                      );
                    case 14:
                      return (e.prev = 14), (e.next = 17), fetch("".concat(s.b, "/logout.php"), d);
                    case 17:
                      return (h = e.sent), (e.next = 20), h.json();
                    case 20:
                      (v = e.sent).success, (l = v), (e.next = 29);
                      break;
                    case 25:
                      (e.prev = 25), (e.t0 = e.catch(14)), (l = { success: !1, message: "Error accessing the server." });
                    case 29:
                      c(l);
                    case 30:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[14, 25]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      y = (function () {
        var e = c()(
          o.a.mark(function e(t) {
            var r, n, a, c, l, p, f, d, h, m;
            return o.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.paymentData), (n = t.provider), (a = void 0 === n ? "paypal" : n), (c = t.callback), (l = null), (e.next = 4), Object(i.a)("sessionHandle");
                    case 4:
                      return (
                        (p = e.sent),
                        (f = new FormData()).append("orderID", r.orderID),
                        f.append("paymentProvider", a),
                        f.append("sessionHandle", p),
                        f.append("extensionVersion", u()),
                        (d = { method: "POST", body: f }),
                        (e.prev = 12),
                        (e.next = 15),
                        fetch("".concat(s.b, "/paypal/capture_payment.php"), d)
                      );
                    case 15:
                      return (h = e.sent), (e.next = 18), h.json();
                    case 18:
                      (m = e.sent), (l = m), (e.next = 27);
                      break;
                    case 23:
                      (e.prev = 23), (e.t0 = e.catch(12)), (l = { success: !1, message: "Error accessing the server. Please contact support." });
                    case 27:
                      c(l);
                    case 28:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[12, 23]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      g = (function () {
        var e = c()(
          o.a.mark(function e() {
            var t, r, n, a, c;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Object(i.a)("sessionHandle");
                  case 2:
                    return (
                      (t = e.sent),
                      (r = new FormData()).append("sessionHandle", t),
                      r.append("extensionVersion", u()),
                      (n = { method: "POST", body: r }),
                      (e.next = 9),
                      fetch("".concat(s.b, "/get_user_data.php"), n)
                    );
                  case 9:
                    return (a = e.sent), (e.next = 12), a.json();
                  case 12:
                    return (c = e.sent).success && Object(i.c)("userData", c.data || null), e.abrupt("return", c);
                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
  },
  function (e, t) {
    e.exports = function (e, t, r) {
      return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
    };
  },
  ,
  ,
  function (e, t) {
    e.exports = function (e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    };
  },
  function (e, t, r) {
    var n = r(22),
      o = r(23),
      a = r(15),
      c = r(24);
    e.exports = function (e) {
      return n(e) || o(e) || a(e) || c();
    };
  },
  function (e, t, r) {
    var n = r(13);
    e.exports = function (e, t) {
      if (e) {
        if ("string" == typeof e) return n(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === r && e.constructor && (r = e.constructor.name),
          "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
        );
      }
    };
  },
  function (e, t, r) {
    var n = (function (e) {
      "use strict";
      var t = Object.prototype,
        r = t.hasOwnProperty,
        n = "function" == typeof Symbol ? Symbol : {},
        o = n.iterator || "@@iterator",
        a = n.asyncIterator || "@@asyncIterator",
        c = n.toStringTag || "@@toStringTag";
      function i(e, t, r) {
        return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }), e[t];
      }
      try {
        i({}, "");
      } catch (e) {
        i = function (e, t, r) {
          return (e[t] = r);
        };
      }
      function s(e, t, r, n) {
        var o = t && t.prototype instanceof p ? t : p,
          a = Object.create(o.prototype),
          c = new O(n || []);
        return (
          (a._invoke = (function (e, t, r) {
            var n = "suspendedStart";
            return function (o, a) {
              if ("executing" === n) throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === o) throw a;
                return _();
              }
              for (r.method = o, r.arg = a; ; ) {
                var c = r.delegate;
                if (c) {
                  var i = b(c, r);
                  if (i) {
                    if (i === l) continue;
                    return i;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var s = u(e, t, r);
                if ("normal" === s.type) {
                  if (((n = r.done ? "completed" : "suspendedYield"), s.arg === l)) continue;
                  return { value: s.arg, done: r.done };
                }
                "throw" === s.type && ((n = "completed"), (r.method = "throw"), (r.arg = s.arg));
              }
            };
          })(e, r, c)),
          a
        );
      }
      function u(e, t, r) {
        try {
          return { type: "normal", arg: e.call(t, r) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = s;
      var l = {};
      function p() {}
      function f() {}
      function d() {}
      var h = {};
      h[o] = function () {
        return this;
      };
      var m = Object.getPrototypeOf,
        v = m && m(m(k([])));
      v && v !== t && r.call(v, o) && (h = v);
      var y = (d.prototype = p.prototype = Object.create(h));
      function g(e) {
        ["next", "throw", "return"].forEach(function (t) {
          i(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function w(e, t) {
        var n;
        this._invoke = function (o, a) {
          function c() {
            return new t(function (n, c) {
              !(function n(o, a, c, i) {
                var s = u(e[o], e, a);
                if ("throw" !== s.type) {
                  var l = s.arg,
                    p = l.value;
                  return p && "object" == typeof p && r.call(p, "__await")
                    ? t.resolve(p.__await).then(
                        function (e) {
                          n("next", e, c, i);
                        },
                        function (e) {
                          n("throw", e, c, i);
                        }
                      )
                    : t.resolve(p).then(
                        function (e) {
                          (l.value = e), c(l);
                        },
                        function (e) {
                          return n("throw", e, c, i);
                        }
                      );
                }
                i(s.arg);
              })(o, a, n, c);
            });
          }
          return (n = n ? n.then(c, c) : c());
        };
      }
      function b(e, t) {
        var r = e.iterator[t.method];
        if (void 0 === r) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (e.iterator.return && ((t.method = "return"), (t.arg = void 0), b(e, t), "throw" === t.method)) return l;
            (t.method = "throw"), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return l;
        }
        var n = u(r, e.iterator, t.arg);
        if ("throw" === n.type) return (t.method = "throw"), (t.arg = n.arg), (t.delegate = null), l;
        var o = n.arg;
        return o
          ? o.done
            ? ((t[e.resultName] = o.value), (t.next = e.nextLoc), "return" !== t.method && ((t.method = "next"), (t.arg = void 0)), (t.delegate = null), l)
            : o
          : ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), l);
      }
      function x(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
      }
      function j(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function O(e) {
        (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(x, this), this.reset(!0);
      }
      function k(e) {
        if (e) {
          var t = e[o];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var n = -1,
              a = function t() {
                for (; ++n < e.length; ) if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (a.next = a);
          }
        }
        return { next: _ };
      }
      function _() {
        return { value: void 0, done: !0 };
      }
      return (
        (f.prototype = y.constructor = d),
        (d.constructor = f),
        (f.displayName = i(d, c, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name));
        }),
        (e.mark = function (e) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : ((e.__proto__ = d), i(e, c, "GeneratorFunction")), (e.prototype = Object.create(y)), e;
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        g(w.prototype),
        (w.prototype[a] = function () {
          return this;
        }),
        (e.AsyncIterator = w),
        (e.async = function (t, r, n, o, a) {
          void 0 === a && (a = Promise);
          var c = new w(s(t, r, n, o), a);
          return e.isGeneratorFunction(r)
            ? c
            : c.next().then(function (e) {
                return e.done ? e.value : c.next();
              });
        }),
        g(y),
        i(y, c, "Generator"),
        (y[o] = function () {
          return this;
        }),
        (y.toString = function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = [];
          for (var r in e) t.push(r);
          return (
            t.reverse(),
            function r() {
              for (; t.length; ) {
                var n = t.pop();
                if (n in e) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (e.values = k),
        (O.prototype = {
          constructor: O,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(j),
              !e)
            )
              for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function n(r, n) {
              return (c.type = "throw"), (c.arg = e), (t.next = r), n && ((t.method = "next"), (t.arg = void 0)), !!n;
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var a = this.tryEntries[o],
                c = a.completion;
              if ("root" === a.tryLoc) return n("end");
              if (a.tryLoc <= this.prev) {
                var i = r.call(a, "catchLoc"),
                  s = r.call(a, "finallyLoc");
                if (i && s) {
                  if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                } else if (i) {
                  if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                } else {
                  if (!s) throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var a = o;
                break;
              }
            }
            a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
            var c = a ? a.completion : {};
            return (c.type = e), (c.arg = t), a ? ((this.method = "next"), (this.next = a.finallyLoc), l) : this.complete(c);
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              l
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), j(r), l;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.tryLoc === e) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  j(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, r) {
            return (this.delegate = { iterator: k(e), resultName: t, nextLoc: r }), "next" === this.method && (this.arg = void 0), l;
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = n;
    } catch (e) {
      Function("r", "regeneratorRuntime = r")(n);
    }
  },
  ,
  ,
  ,
  ,
  ,
  function (e, t, r) {
    var n = r(13);
    e.exports = function (e) {
      if (Array.isArray(e)) return n(e);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
    };
  },
  function (e, t) {
    e.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(1),
      o = r.n(n),
      a = r(10),
      c = r.n(a),
      i = r(3),
      s = r.n(i),
      u = r(9),
      l = r(4);
    function p(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? p(Object(r), !0).forEach(function (t) {
              c()(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : p(Object(r)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
      }
      return e;
    }
    var d = {
      countriesBlacklist: [],
      namesBlacklist: [],
      tagsBlacklist: [],
      employerPropertiesAll: [],
      employerPropertiesOne: [],
      openAttachments: !1,
      resultsPerPage: 20,
      maxBids: 9999999,
      user: "usr_".concat(Math.floor(1e9 * Math.random())),
      firstRegisteredInstallTimestamp: Math.floor(Date.now() / 1e3),
    };
    function h(e, t) {
      var r, n, o, a, c;
      function i(e) {
        return new Promise(function (t, r) {
          fetch("https://www.freelancer.com/ajax/reputation-employer-on-hover-content.php?user_id=".concat(e))
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              var n = {
                name: e.profile.name,
                logo: e.profile.logo,
                past_projects: e.rep.entire_history.totalCompleted,
                completed_projects: e.rep.entire_history.count_all_project,
              };
              e ? t(n) : r("no employer details found");
            })
            .catch(function (e) {
              r(e);
            });
        });
      }
      function s() {
        var e,
          n = document.createElement("div");
        if (((n.id = "freelancer-helper-details"), "PREMIUM" === t || "DURING_TRIAL" === t)) {
          var o;
          r.logo && (((o = new window.Image()).width = 50), (o.style.marginRight = "10px"), (o.src = r.logo));
          var a = document.createElement("a");
          (a.textContent = r.name), (a.href = "https://www.freelancer.com/u/".concat(r.name, "?w=f")), (a.target = "_blank");
          var c = r.past_projects / r.completed_projects,
            i = c > 4 ? 5 : c > 3 ? 4 : c > 2 ? 3 : c > 1.5 ? 2 : isNaN(c) ? 0 : 1,
            s = [
              { color: "#a1c4c3", title: "This is a new employer. Proceed with caution." },
              { color: "green", title: "Amazing employer. Very high chance of awarding the project. Make sure to write a convincing bid - it will pay off." },
              { color: "blue", title: "Great employer. Very likely will award someone. Write a good bid." },
              { color: "#c7c70a", title: "Medium chance of awarding." },
              { color: "purple", title: "Low chance of employer awarding the project. Only bid if project is very interesting." },
              { color: "red", title: "Employer has poor track record of awarding projects. Best look for another project to bid on." },
            ],
            l = '<span title="'
              .concat(r.past_projects, ' projects opened">')
              .concat(r.past_projects, '</span> / <span title="')
              .concat(Number(r.completed_projects), ' projects awarded">')
              .concat(Number(r.completed_projects), "</span> = "),
            p = "".concat(isNaN(c) ? "New" : c.toFixed(1)),
            f = document.createElement("p");
          (f.style.marginTop = "10px"), (f.style.fontWeight = "900"), (f.innerHTML = l), (f.style.cursor = "help");
          var d = document.createElement("span");
          f.appendChild(d),
            (d.style.color = s[i].color),
            (d.style.fontSize = "1.2em"),
            (d.textContent = p),
            (d.title = s[i].title),
            n.appendChild(o),
            n.appendChild(a),
            n.appendChild(f);
        } else {
          var h = document.createElement("a");
          (h.textContent = r.name), (h.href = "https://www.freelancer.com/u/".concat(r.name, "?w=f")), (h.target = "_blank"), n.appendChild(h);
        }
        ((e = performance.now()),
        new Promise(function (t, r) {
          var n = setInterval(function () {
            if (performance.now() - e > 1e4) clearInterval(n), r("target parent not found");
            else {
              var o = document.querySelector("app-employer-info fl-list-item");
              o && (clearInterval(n), t(o));
            }
          }, 50);
        })).then(function (e) {
          var t = u();
          t && t.remove(), e.appendChild(n);
        });
      }
      function u() {
        return document.getElementById("freelancer-helper-details");
      }
      function l(t) {
        return (
          e.countriesBlacklist.includes(t.location.country.name) ||
          e.namesBlacklist.includes(t.username) ||
          e.employerPropertiesAll.some(function (e) {
            return !t.status[e];
          }) ||
          (0 != e.employerPropertiesOne.length &&
            !e.employerPropertiesOne.some(function (e) {
              return t.status[e];
            }))
        );
      }
      function p(t) {
        return (
          t.jobs.some(function (t) {
            return e.tagsBlacklist.includes(t.name);
          }) ||
          (t.bid_stats && t.bid_stats.bid_count > e.maxBids)
        );
      }
      (o = XMLHttpRequest.prototype),
        (a = null),
        (c = o.open),
        (o.open = function (o, u) {
          var f = "/api/projects/0.1/projects/active",
            d = "https://www.freelancer.com/api/projects/0.1/projects?",
            h = arguments;
          if (u.includes(d) && u.includes("full_description=true"))
            this.addEventListener("load", function (e) {
              var t = JSON.parse(this.response);
              i(t.result.projects[0].owner_id)
                .then(function (e) {
                  (r = e), (n = t.result.projects[0].id), s();
                })
                .catch(function (e) {});
            });
          else if (("PREMIUM" === t || "DURING_TRIAL" === t) && u.includes(f)) {
            var m = 20,
              v = parseInt(e.resultsPerPage) || 20,
              y = new URL(u, "https://www.freelancer.com"),
              g = y.searchParams,
              w = g.get("offset"),
              b = new URL(window.location.href).searchParams.get("page"),
              x = w || b ? parseInt(b) : (parseInt(w) || 0) / m + 1;
            g.set("limit", v);
            var j = (x - 1) * v;
            1 !== x && a && a <= j && (j = a - 1),
              g.set("offset", j),
              !g.has("user_status") && (g.set("compact", "true"), g.set("user_details", "true"), g.set("user_status", "true")),
              ((h = Array.prototype.slice.call(arguments))[1] = y.href),
              this.addEventListener("load", function (e) {
                var t = JSON.parse(this.response),
                  r = t.result.users,
                  n = t.result.projects.filter(function (e) {
                    var t = r[e.owner_id],
                      n = !p(e) && !l(t);
                    return n;
                  });
                t.result.projects = n;
                var o = JSON.stringify(t);
                Object.defineProperty(this, "response", {
                  get: function () {
                    return o;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                  (a = t.result.total_count),
                  window.setTimeout(function () {
                    return window.postMessage({ action: "addCountryFlags", data: t.result }, "*");
                  }, 500);
              });
          }
          return c.apply(this, h);
        }),
        window.setInterval(function () {
          r && !u() && document.querySelector("app-employer-info fl-list-item") && s(),
            n &&
              !document.querySelector(".FH-attachment-link") &&
              document.querySelector("app-employer-info fl-list-item") &&
              (function () {
                if (e.openAttachments) {
                  document.querySelectorAll('.AdditionalDetails > [data-type="paragraph"]').forEach(function (e) {
                    for (var t, r = e, o = document.createNodeIterator(r, NodeFilter.SHOW_TEXT), a = [], c = []; (t = o.nextNode()); )
                      if (t.textContent.trim().length >= 3) {
                        var i = t.textContent.trim(),
                          s = document.createElement("a");
                        (s.target = "_blank"),
                          s.classList.add("FH-attachment-link"),
                          (s.title = "View attachment"),
                          (s.style.display = "block"),
                          (s.style.color = "blue"),
                          (s.style.fontSize = "14px"),
                          (s.href = "https://www.freelancer.com/fs/download-api.php?type=project&id=".concat(n, "&filename=").concat(encodeURIComponent(i))),
                          (s.textContent = i),
                          a.push(e),
                          c.push(s);
                      }
                    for (var u = 0; u < a.length; u++) a[u].replaceWith(c[u]);
                  });
                }
              })();
        }, 1e3);
    }
    function m() {
      return (m = s()(
        o.a.mark(function e(t) {
          var r, n;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), Object(l.a)("config", "sync");
                case 2:
                  return (r = e.sent), (e.next = 5), u.d({});
                case 5:
                  (n = e.sent), chrome.scripting.executeScript({ target: { tabId: t.id }, func: h, args: [r, n.actual], world: "MAIN", injectImmediately: !0 }, function (e) {});
                case 7:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    chrome.runtime.onInstalled.addListener(
      (function () {
        var e = s()(
          o.a.mark(function e(t) {
            var r, n;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 3), Object(l.a)("config", "sync");
                  case 3:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 6;
                      break;
                    }
                    e.t0 = {};
                  case 6:
                    return (r = e.t0), (n = f(f({}, d), r)), (e.next = 10), Object(l.c)("config", n, "sync");
                  case 10:
                    chrome.alarms.create("analyticsAlarm", { when: Date.now() + 1e4, periodInMinutes: 60 }),
                      chrome.alarms.create("userDataAlarm", { when: Date.now() + 36e5, periodInMinutes: 1440 }),
                      chrome.scripting.registerContentScripts([
                        {
                          id: "employer-reviews-content-script",
                          js: ["employerPage.bundle.js"],
                          matches: ["https://www.freelancer.com/u/*"],
                          runAt: "document_start",
                          persistAcrossSessions: !0,
                          world: "MAIN",
                        },
                      ]);
                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })()
    ),
      chrome.alarms.onAlarm.addListener(function (e) {
        "analyticsAlarm" === e.name || ("userDataAlarm" === e.name && u.g());
      }),
      chrome.runtime.onMessage.addListener(function (e, t, r) {
        return "openInBrowser" === e.action
          ? (!0 === e.payload
              ? Object(l.b)({ openAttachments: !0 }).then(function (e) {
                  chrome.declarativeNetRequest.updateDynamicRules({
                    addRules: [
                      {
                        id: 1,
                        action: { type: "modifyHeaders", responseHeaders: [{ header: "content-disposition", operation: "set", value: "inline" }] },
                        condition: {
                          urlFilter: "https://www.freelancer.com/fs/download-api.php*",
                          resourceTypes: ["main_frame", "sub_frame", "image", "object", "xmlhttprequest", "media"],
                        },
                      },
                    ],
                  });
                })
              : !1 === e.payload &&
                Object(l.b)({ openAttachments: !1 }).then(function (e) {
                  chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: [1] });
                }),
            !0)
          : "loginToServer" === e.action
          ? (u.e(f(f({}, e), {}, { callback: r })), !0)
          : "logoutFromAuth" === e.action
          ? (u.f(f(f({}, e), {}, { callback: r })), !0)
          : "capturePayment" === e.action
          ? (u.b(f(f({}, e), {}, { callback: r })), !0)
          : "getUserData" === e.action
          ? (u.c(f(f({}, e), {}, { callback: r })), !0)
          : "getUserTiers" === e.action
          ? (u.d(f(f({}, e), {}, { callback: r })), !0)
          : void (
              "injectEmbeddedFunction" === e.action &&
              (function (e) {
                m.apply(this, arguments);
              })(t.tab)
            );
      });
  },
]);
