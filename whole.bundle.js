!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
        for (var o in t)
          r.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 50));
})({
  1: function (t, e, r) {
    t.exports = r(16);
  },
  10: function (t, e) {
    t.exports = function (t, e, r) {
      return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
    };
  },
  16: function (t, e, r) {
    var n = (function (t) {
      "use strict";
      var e = Object.prototype,
        r = e.hasOwnProperty,
        n = "function" == typeof Symbol ? Symbol : {},
        o = n.iterator || "@@iterator",
        i = n.asyncIterator || "@@asyncIterator",
        a = n.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function u(t, e, r, n) {
        var o = e && e.prototype instanceof l ? e : l,
          i = Object.create(o.prototype),
          a = new j(n || []);
        return (
          (i._invoke = (function (t, e, r) {
            var n = "suspendedStart";
            return function (o, i) {
              if ("executing" === n) throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === o) throw i;
                return E();
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var c = b(a, r);
                  if (c) {
                    if (c === s) continue;
                    return c;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var u = f(t, e, r);
                if ("normal" === u.type) {
                  if (((n = r.done ? "completed" : "suspendedYield"), u.arg === s)) continue;
                  return { value: u.arg, done: r.done };
                }
                "throw" === u.type && ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
              }
            };
          })(t, r, a)),
          i
        );
      }
      function f(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = u;
      var s = {};
      function l() {}
      function h() {}
      function p() {}
      var d = {};
      d[o] = function () {
        return this;
      };
      var y = Object.getPrototypeOf,
        v = y && y(y(L([])));
      v && v !== e && r.call(v, o) && (d = v);
      var g = (p.prototype = l.prototype = Object.create(d));
      function m(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function w(t, e) {
        var n;
        this._invoke = function (o, i) {
          function a() {
            return new e(function (n, a) {
              !(function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                  var s = u.arg,
                    l = s.value;
                  return l && "object" == typeof l && r.call(l, "__await")
                    ? e.resolve(l.__await).then(
                        function (t) {
                          n("next", t, a, c);
                        },
                        function (t) {
                          n("throw", t, a, c);
                        }
                      )
                    : e.resolve(l).then(
                        function (t) {
                          (s.value = t), a(s);
                        },
                        function (t) {
                          return n("throw", t, a, c);
                        }
                      );
                }
                c(u.arg);
              })(o, i, n, a);
            });
          }
          return (n = n ? n.then(a, a) : a());
        };
      }
      function b(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), b(t, e), "throw" === e.method)) return s;
            (e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return s;
        }
        var n = f(r, t.iterator, e.arg);
        if ("throw" === n.type) return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), s;
        var o = n.arg;
        return o
          ? o.done
            ? ((e[t.resultName] = o.value), (e.next = t.nextLoc), "return" !== e.method && ((e.method = "next"), (e.arg = void 0)), (e.delegate = null), s)
            : o
          : ((e.method = "throw"), (e.arg = new TypeError("iterator result is not an object")), (e.delegate = null), s);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
      }
      function O(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function j(t) {
        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
      }
      function L(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              i = function e() {
                for (; ++n < t.length; ) if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (i.next = i);
          }
        }
        return { next: E };
      }
      function E() {
        return { value: void 0, done: !0 };
      }
      return (
        (h.prototype = g.constructor = p),
        (p.constructor = h),
        (h.displayName = c(p, a, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
        }),
        (t.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : ((t.__proto__ = p), c(t, a, "GeneratorFunction")), (t.prototype = Object.create(g)), t;
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        m(w.prototype),
        (w.prototype[i] = function () {
          return this;
        }),
        (t.AsyncIterator = w),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new w(u(e, r, n, o), i);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        m(g),
        c(g, a, "Generator"),
        (g[o] = function () {
          return this;
        }),
        (g.toString = function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = L),
        (j.prototype = {
          constructor: j,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(O),
              !t)
            )
              for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(r, n) {
              return (a.type = "throw"), (a.arg = t), (e.next = r), n && ((e.method = "next"), (e.arg = void 0)), !!n;
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var c = r.call(i, "catchLoc"),
                  u = r.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break;
              }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), s) : this.complete(a);
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              s
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), s;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  O(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (this.delegate = { iterator: L(t), resultName: e, nextLoc: r }), "next" === this.method && (this.arg = void 0), s;
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = n;
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(n);
    }
  },
  3: function (t, e) {
    function r(t, e, r, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void r(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, o);
    }
    t.exports = function (t) {
      return function () {
        var e = this,
          n = arguments;
        return new Promise(function (o, i) {
          var a = t.apply(e, n);
          function c(t) {
            r(a, o, i, c, u, "next", t);
          }
          function u(t) {
            r(a, o, i, c, u, "throw", t);
          }
          c(void 0);
        });
      };
    };
  },
  50: function (t, e, r) {
    "use strict";
    r.r(e);
    var n = r(1),
      o = r.n(n),
      i = r(10),
      a = r.n(i),
      c = r(3),
      u = r.n(c);
    function f(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function s(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? f(Object(r), !0).forEach(function (e) {
              a()(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : f(Object(r)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
            });
      }
      return t;
    }
    function l() {
      return (l = u()(
        o.a.mark(function t(e) {
          var r, n, i, a, c, u;
          return o.a.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), fetch(chrome.runtime.getURL("public/country_to_code.json"));
                case 2:
                  return (r = t.sent), (t.next = 5), r.json();
                case 5:
                  (n = t.sent),
                    (i = s({}, e)),
                    (a = i.projects),
                    (c = i.users),
                    (u = document.querySelectorAll(".Footer, .ProjectFooter")),
                    a.forEach(function (t, e) {
                      var r = u[e];
                      r.querySelector(".fh-flag-image") && r.querySelector(".fh-flag-image").remove();
                      var o = c[t.owner_id],
                        i = new window.Image(),
                        a = o.location.country.name,
                        f = n[a] || o.timezone.country;
                      f &&
                        ((i.src = "https://www.f-cdn.com/assets/main/en/assets/flags/".concat(f.toLowerCase(), ".svg")),
                        (i.title = a),
                        i.classList.add("fh-flag-image"),
                        (i.width = "20"),
                        (i.style.marginRight = "8px"),
                        ((r.firstChild && r.firstChild.firstChild) || r.firstChild || r).prepend(i));
                    });
                case 9:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    function h() {
      return (h = u()(
        o.a.mark(function t() {
          return o.a.wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  chrome.runtime.sendMessage({ action: "injectEmbeddedFunction" });
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )).apply(this, arguments);
    }
    window.addEventListener("message", function (t) {
      var e = t.data;
      "addCountryFlags" === e.action &&
        (function (t) {
          l.apply(this, arguments);
        })(e.data);
    }),
      (function () {
        h.apply(this, arguments);
      })();
  },
});
