import { g as xi, r as ki, d as ye, a as Di } from "../core-3c1db0c3.js";
import { Z as Li, b as Ni, c as Vi, p as Yi, s as Bi } from "../core-3c1db0c3.js";
function Ie() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  Ie = function() {
    return p;
  };
  var y, p = {}, s = Object.prototype, T = s.hasOwnProperty, F = Object.defineProperty || function(g, l, _) {
    g[l] = _.value;
  }, I = typeof Symbol == "function" ? Symbol : {}, N = I.iterator || "@@iterator", V = I.asyncIterator || "@@asyncIterator", H = I.toStringTag || "@@toStringTag";
  function E(g, l, _) {
    return Object.defineProperty(g, l, { value: _, enumerable: !0, configurable: !0, writable: !0 }), g[l];
  }
  try {
    E({}, "");
  } catch (g) {
    E = function(_, w, P) {
      return _[w] = P;
    };
  }
  function Pe(g, l, _, w) {
    var P = l && l.prototype instanceof te ? l : te, C = Object.create(P.prototype), M = new Oe(w || []);
    return F(C, "_invoke", { value: Ue(g, _, M) }), C;
  }
  function q(g, l, _) {
    try {
      return { type: "normal", arg: g.call(l, _) };
    } catch (w) {
      return { type: "throw", arg: w };
    }
  }
  p.wrap = Pe;
  var _e = "suspendedStart", ge = "suspendedYield", me = "executing", be = "completed", ne = {};
  function te() {
  }
  function X() {
  }
  function re() {
  }
  var he = {};
  E(he, N, function() {
    return this;
  });
  var B = Object.getPrototypeOf, j = B && B(B(Re([])));
  j && j !== s && T.call(j, N) && (he = j);
  var se = re.prototype = te.prototype = Object.create(he);
  function Ee(g) {
    ["next", "throw", "return"].forEach(function(l) {
      E(g, l, function(_) {
        return this._invoke(l, _);
      });
    });
  }
  function we(g, l) {
    function _(P, C, M, Y) {
      var J = q(g[P], g, C);
      if (J.type !== "throw") {
        var oe = J.arg, K = oe.value;
        return K && G(K) == "object" && T.call(K, "__await") ? l.resolve(K.__await).then(function(ue) {
          _("next", ue, M, Y);
        }, function(ue) {
          _("throw", ue, M, Y);
        }) : l.resolve(K).then(function(ue) {
          oe.value = ue, M(oe);
        }, function(ue) {
          return _("throw", ue, M, Y);
        });
      }
      Y(J.arg);
    }
    var w;
    F(this, "_invoke", { value: function(C, M) {
      function Y() {
        return new l(function(J, oe) {
          _(C, M, J, oe);
        });
      }
      return w = w ? w.then(Y, Y) : Y();
    } });
  }
  function Ue(g, l, _) {
    var w = _e;
    return function(P, C) {
      if (w === me)
        throw new Error("Generator is already running");
      if (w === be) {
        if (P === "throw")
          throw C;
        return { value: y, done: !0 };
      }
      for (_.method = P, _.arg = C; ; ) {
        var M = _.delegate;
        if (M) {
          var Y = Se(M, _);
          if (Y) {
            if (Y === ne)
              continue;
            return Y;
          }
        }
        if (_.method === "next")
          _.sent = _._sent = _.arg;
        else if (_.method === "throw") {
          if (w === _e)
            throw w = be, _.arg;
          _.dispatchException(_.arg);
        } else
          _.method === "return" && _.abrupt("return", _.arg);
        w = me;
        var J = q(g, l, _);
        if (J.type === "normal") {
          if (w = _.done ? be : ge, J.arg === ne)
            continue;
          return { value: J.arg, done: _.done };
        }
        J.type === "throw" && (w = be, _.method = "throw", _.arg = J.arg);
      }
    };
  }
  function Se(g, l) {
    var _ = l.method, w = g.iterator[_];
    if (w === y)
      return l.delegate = null, _ === "throw" && g.iterator.return && (l.method = "return", l.arg = y, Se(g, l), l.method === "throw") || _ !== "return" && (l.method = "throw", l.arg = new TypeError("The iterator does not provide a '" + _ + "' method")), ne;
    var P = q(w, g.iterator, l.arg);
    if (P.type === "throw")
      return l.method = "throw", l.arg = P.arg, l.delegate = null, ne;
    var C = P.arg;
    return C ? C.done ? (l[g.resultName] = C.value, l.next = g.nextLoc, l.method !== "return" && (l.method = "next", l.arg = y), l.delegate = null, ne) : C : (l.method = "throw", l.arg = new TypeError("iterator result is not an object"), l.delegate = null, ne);
  }
  function Le(g) {
    var l = { tryLoc: g[0] };
    1 in g && (l.catchLoc = g[1]), 2 in g && (l.finallyLoc = g[2], l.afterLoc = g[3]), this.tryEntries.push(l);
  }
  function Fe(g) {
    var l = g.completion || {};
    l.type = "normal", delete l.arg, g.completion = l;
  }
  function Oe(g) {
    this.tryEntries = [{ tryLoc: "root" }], g.forEach(Le, this), this.reset(!0);
  }
  function Re(g) {
    if (g || g === "") {
      var l = g[N];
      if (l)
        return l.call(g);
      if (typeof g.next == "function")
        return g;
      if (!isNaN(g.length)) {
        var _ = -1, w = function P() {
          for (; ++_ < g.length; )
            if (T.call(g, _))
              return P.value = g[_], P.done = !1, P;
          return P.value = y, P.done = !0, P;
        };
        return w.next = w;
      }
    }
    throw new TypeError(G(g) + " is not iterable");
  }
  return X.prototype = re, F(se, "constructor", { value: re, configurable: !0 }), F(re, "constructor", { value: X, configurable: !0 }), X.displayName = E(re, H, "GeneratorFunction"), p.isGeneratorFunction = function(g) {
    var l = typeof g == "function" && g.constructor;
    return !!l && (l === X || (l.displayName || l.name) === "GeneratorFunction");
  }, p.mark = function(g) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(g, re) : (g.__proto__ = re, E(g, H, "GeneratorFunction")), g.prototype = Object.create(se), g;
  }, p.awrap = function(g) {
    return { __await: g };
  }, Ee(we.prototype), E(we.prototype, V, function() {
    return this;
  }), p.AsyncIterator = we, p.async = function(g, l, _, w, P) {
    P === void 0 && (P = Promise);
    var C = new we(Pe(g, l, _, w), P);
    return p.isGeneratorFunction(l) ? C : C.next().then(function(M) {
      return M.done ? M.value : C.next();
    });
  }, Ee(se), E(se, H, "Generator"), E(se, N, function() {
    return this;
  }), E(se, "toString", function() {
    return "[object Generator]";
  }), p.keys = function(g) {
    var l = Object(g), _ = [];
    for (var w in l)
      _.push(w);
    return _.reverse(), function P() {
      for (; _.length; ) {
        var C = _.pop();
        if (C in l)
          return P.value = C, P.done = !1, P;
      }
      return P.done = !0, P;
    };
  }, p.values = Re, Oe.prototype = { constructor: Oe, reset: function(l) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = y, this.done = !1, this.delegate = null, this.method = "next", this.arg = y, this.tryEntries.forEach(Fe), !l)
      for (var _ in this)
        _.charAt(0) === "t" && T.call(this, _) && !isNaN(+_.slice(1)) && (this[_] = y);
  }, stop: function() {
    this.done = !0;
    var l = this.tryEntries[0].completion;
    if (l.type === "throw")
      throw l.arg;
    return this.rval;
  }, dispatchException: function(l) {
    if (this.done)
      throw l;
    var _ = this;
    function w(oe, K) {
      return M.type = "throw", M.arg = l, _.next = oe, K && (_.method = "next", _.arg = y), !!K;
    }
    for (var P = this.tryEntries.length - 1; P >= 0; --P) {
      var C = this.tryEntries[P], M = C.completion;
      if (C.tryLoc === "root")
        return w("end");
      if (C.tryLoc <= this.prev) {
        var Y = T.call(C, "catchLoc"), J = T.call(C, "finallyLoc");
        if (Y && J) {
          if (this.prev < C.catchLoc)
            return w(C.catchLoc, !0);
          if (this.prev < C.finallyLoc)
            return w(C.finallyLoc);
        } else if (Y) {
          if (this.prev < C.catchLoc)
            return w(C.catchLoc, !0);
        } else {
          if (!J)
            throw new Error("try statement without catch or finally");
          if (this.prev < C.finallyLoc)
            return w(C.finallyLoc);
        }
      }
    }
  }, abrupt: function(l, _) {
    for (var w = this.tryEntries.length - 1; w >= 0; --w) {
      var P = this.tryEntries[w];
      if (P.tryLoc <= this.prev && T.call(P, "finallyLoc") && this.prev < P.finallyLoc) {
        var C = P;
        break;
      }
    }
    C && (l === "break" || l === "continue") && C.tryLoc <= _ && _ <= C.finallyLoc && (C = null);
    var M = C ? C.completion : {};
    return M.type = l, M.arg = _, C ? (this.method = "next", this.next = C.finallyLoc, ne) : this.complete(M);
  }, complete: function(l, _) {
    if (l.type === "throw")
      throw l.arg;
    return l.type === "break" || l.type === "continue" ? this.next = l.arg : l.type === "return" ? (this.rval = this.arg = l.arg, this.method = "return", this.next = "end") : l.type === "normal" && _ && (this.next = _), ne;
  }, finish: function(l) {
    for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
      var w = this.tryEntries[_];
      if (w.finallyLoc === l)
        return this.complete(w.completion, w.afterLoc), Fe(w), ne;
    }
  }, catch: function(l) {
    for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
      var w = this.tryEntries[_];
      if (w.tryLoc === l) {
        var P = w.completion;
        if (P.type === "throw") {
          var C = P.arg;
          Fe(w);
        }
        return C;
      }
    }
    throw new Error("illegal catch attempt");
  }, delegateYield: function(l, _, w) {
    return this.delegate = { iterator: Re(l), resultName: _, nextLoc: w }, this.method === "next" && (this.arg = y), ne;
  } }, p;
}
function nr(y, p, s, T, F, I, N) {
  try {
    var V = y[I](N), H = V.value;
  } catch (E) {
    s(E);
    return;
  }
  V.done ? p(H) : Promise.resolve(H).then(T, F);
}
function sr(y) {
  return function() {
    var p = this, s = arguments;
    return new Promise(function(T, F) {
      var I = y.apply(p, s);
      function N(H) {
        nr(I, T, F, N, V, "next", H);
      }
      function V(H) {
        nr(I, T, F, N, V, "throw", H);
      }
      N(void 0);
    });
  };
}
function ir(y, p) {
  for (var s = 0; s < p.length; s++) {
    var T = p[s];
    T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(y, lr(T.key), T);
  }
}
function ar(y, p, s) {
  return p && ir(y.prototype, p), s && ir(y, s), Object.defineProperty(y, "prototype", { writable: !1 }), y;
}
function or(y, p) {
  if (!(y instanceof p))
    throw new TypeError("Cannot call a class as a function");
}
function ur(y, p) {
  if (typeof p != "function" && p !== null)
    throw new TypeError("Super expression must either be null or a function");
  y.prototype = Object.create(p && p.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), p && He(y, p);
}
function cr(y) {
  var p = fr();
  return function() {
    var T = Me(y), F;
    if (p) {
      var I = Me(this).constructor;
      F = Reflect.construct(T, arguments, I);
    } else
      F = T.apply(this, arguments);
    return Ei(this, F);
  };
}
function Ei(y, p) {
  if (p && (G(p) === "object" || typeof p == "function"))
    return p;
  if (p !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Si(y);
}
function Si(y) {
  if (y === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return y;
}
function nt(y) {
  var p = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return nt = function(T) {
    if (T === null || !Fi(T))
      return T;
    if (typeof T != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof p != "undefined") {
      if (p.has(T))
        return p.get(T);
      p.set(T, F);
    }
    function F() {
      return rt(T, arguments, Me(this).constructor);
    }
    return F.prototype = Object.create(T.prototype, { constructor: { value: F, enumerable: !1, writable: !0, configurable: !0 } }), He(F, T);
  }, nt(y);
}
function rt(y, p, s) {
  return fr() ? rt = Reflect.construct.bind() : rt = function(F, I, N) {
    var V = [null];
    V.push.apply(V, I);
    var H = Function.bind.apply(F, V), E = new H();
    return N && He(E, N.prototype), E;
  }, rt.apply(null, arguments);
}
function fr() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (y) {
    return !1;
  }
}
function Fi(y) {
  try {
    return Function.toString.call(y).indexOf("[native code]") !== -1;
  } catch (p) {
    return typeof y == "function";
  }
}
function He(y, p) {
  return He = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(T, F) {
    return T.__proto__ = F, T;
  }, He(y, p);
}
function Me(y) {
  return Me = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
    return s.__proto__ || Object.getPrototypeOf(s);
  }, Me(y);
}
function Oi(y, p, s) {
  return p = lr(p), p in y ? Object.defineProperty(y, p, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : y[p] = s, y;
}
function lr(y) {
  var p = Ri(y, "string");
  return G(p) === "symbol" ? p : String(p);
}
function Ri(y, p) {
  if (G(y) !== "object" || y === null)
    return y;
  var s = y[Symbol.toPrimitive];
  if (s !== void 0) {
    var T = s.call(y, p || "default");
    if (G(T) !== "object")
      return T;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (p === "string" ? String : Number)(y);
}
function G(y) {
  "@babel/helpers - typeof";
  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
    return typeof p;
  } : function(p) {
    return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
  }, G(y);
}
var mt = function() {
  var scriptElement = document.currentScript;
  var scriptUrl = new URL(scriptElement.src);
  var y = scriptUrl.href;
  return function() {
    var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = p, T, F;
    s.ready = new Promise(function(n, e) {
      T = n, F = e;
    });
    var I = Object.assign({}, s), N = "./this.program", V = (typeof window == "undefined" ? "undefined" : G(window)) == "object", H = typeof importScripts == "function";
    (typeof process == "undefined" ? "undefined" : G(process)) == "object" && G(process.versions) == "object" && process.versions.node;
    var E = "";
    function Pe(n) {
      return s.locateFile ? s.locateFile(n, E) : E + n;
    }
    var q;
    (V || H) && (H ? E = self.location.href : typeof document != "undefined" && document.currentScript && (E = document.currentScript.src), y && (E = y), E.indexOf("blob:") !== 0 ? E = E.substr(0, E.replace(/[?#].*/, "").lastIndexOf("/") + 1) : E = "", H && (q = function(e) {
      var t = new XMLHttpRequest();
      return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
    })), s.print || console.log.bind(console);
    var _e = s.printErr || console.error.bind(console);
    Object.assign(s, I), I = null, s.arguments && s.arguments, s.thisProgram && (N = s.thisProgram), s.quit && s.quit;
    var ge;
    s.wasmBinary && (ge = s.wasmBinary), (typeof WebAssembly == "undefined" ? "undefined" : G(WebAssembly)) != "object" && Y("no native wasm support detected");
    var me, be = !1;
    function ne(n, e) {
      n || Y(e);
    }
    var te, X, re, he, B, j, se, Ee;
    function we() {
      var n = me.buffer;
      s.HEAP8 = te = new Int8Array(n), s.HEAP16 = re = new Int16Array(n), s.HEAPU8 = X = new Uint8Array(n), s.HEAPU16 = he = new Uint16Array(n), s.HEAP32 = B = new Int32Array(n), s.HEAPU32 = j = new Uint32Array(n), s.HEAPF32 = se = new Float32Array(n), s.HEAPF64 = Ee = new Float64Array(n);
    }
    var Ue = [], Se = [], Le = [];
    function Fe() {
      if (s.preRun)
        for (typeof s.preRun == "function" && (s.preRun = [s.preRun]); s.preRun.length; )
          g(s.preRun.shift());
      it(Ue);
    }
    function Oe() {
      it(Se);
    }
    function Re() {
      if (s.postRun)
        for (typeof s.postRun == "function" && (s.postRun = [s.postRun]); s.postRun.length; )
          _(s.postRun.shift());
      it(Le);
    }
    function g(n) {
      Ue.unshift(n);
    }
    function l(n) {
      Se.unshift(n);
    }
    function _(n) {
      Le.unshift(n);
    }
    var w = 0, P = null;
    function C(n) {
      w++, s.monitorRunDependencies && s.monitorRunDependencies(w);
    }
    function M(n) {
      if (w--, s.monitorRunDependencies && s.monitorRunDependencies(w), w == 0 && P) {
        var e = P;
        P = null, e();
      }
    }
    function Y(n) {
      s.onAbort && s.onAbort(n), n = "Aborted(" + n + ")", _e(n), be = !0, n += ". Build with -sASSERTIONS for more info.";
      var e = new WebAssembly.RuntimeError(n);
      throw F(e), e;
    }
    var J = "data:application/octet-stream;base64,", oe = function(e) {
      return e.startsWith(J);
    }, K;
    s.locateFile ? (K = "zxing_reader.wasm", oe(K) || (K = Pe(K))) : K = new URL("/reader/zxing_reader.wasm", self.location).href;
    function ue(n) {
      if (n == K && ge)
        return new Uint8Array(ge);
      if (q)
        return q(n);
      throw "both async and sync fetching of the wasm failed";
    }
    function vr(n) {
      return !ge && (V || H) && typeof fetch == "function" ? fetch(n, {
        credentials: "same-origin"
      }).then(function(e) {
        if (!e.ok)
          throw "failed to load wasm binary file at '" + n + "'";
        return e.arrayBuffer();
      }).catch(function() {
        return ue(n);
      }) : Promise.resolve().then(function() {
        return ue(n);
      });
    }
    function bt(n, e, t) {
      return vr(n).then(function(r) {
        return WebAssembly.instantiate(r, e);
      }).then(function(r) {
        return r;
      }).then(t, function(r) {
        _e("failed to asynchronously prepare wasm: ".concat(r)), Y(r);
      });
    }
    function dr(n, e, t, r) {
      return !n && typeof WebAssembly.instantiateStreaming == "function" && !oe(e) && typeof fetch == "function" ? fetch(e, {
        credentials: "same-origin"
      }).then(function(i) {
        var a = WebAssembly.instantiateStreaming(i, t);
        return a.then(r, function(o) {
          return _e("wasm streaming compile failed: ".concat(o)), _e("falling back to ArrayBuffer instantiation"), bt(e, t, r);
        });
      }) : bt(e, t, r);
    }
    function _r() {
      var n = {
        a: Xn
      };
      function e(r, i) {
        return U = r.exports, me = U.qa, we(), kt = U.ua, l(U.ra), M(), U;
      }
      C();
      function t(r) {
        e(r.instance);
      }
      if (s.instantiateWasm)
        try {
          return s.instantiateWasm(n, e);
        } catch (r) {
          _e("Module.instantiateWasm callback failed with error: ".concat(r)), F(r);
        }
      return dr(ge, K, n, t).catch(F), {};
    }
    var it = function(e) {
      for (; e.length > 0; )
        e.shift()(s);
    };
    s.noExitRuntime;
    var Ne = [], Ve = 0, hr = function(e) {
      var t = new Ye(e);
      return t.get_caught() || (t.set_caught(!0), Ve--), t.set_rethrown(!1), Ne.push(t), Jt(t.excPtr), t.get_exception_ptr();
    }, fe = 0, pr = function() {
      S(0, 0);
      var e = Ne.pop();
      qt(e.excPtr), fe = 0;
    };
    function Ye(n) {
      this.excPtr = n, this.ptr = n - 24, this.set_type = function(e) {
        j[this.ptr + 4 >> 2] = e;
      }, this.get_type = function() {
        return j[this.ptr + 4 >> 2];
      }, this.set_destructor = function(e) {
        j[this.ptr + 8 >> 2] = e;
      }, this.get_destructor = function() {
        return j[this.ptr + 8 >> 2];
      }, this.set_caught = function(e) {
        e = e ? 1 : 0, te[this.ptr + 12 >> 0] = e;
      }, this.get_caught = function() {
        return te[this.ptr + 12 >> 0] != 0;
      }, this.set_rethrown = function(e) {
        e = e ? 1 : 0, te[this.ptr + 13 >> 0] = e;
      }, this.get_rethrown = function() {
        return te[this.ptr + 13 >> 0] != 0;
      }, this.init = function(e, t) {
        this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(t);
      }, this.set_adjusted_ptr = function(e) {
        j[this.ptr + 16 >> 2] = e;
      }, this.get_adjusted_ptr = function() {
        return j[this.ptr + 16 >> 2];
      }, this.get_exception_ptr = function() {
        var e = Qt(this.get_type());
        if (e)
          return j[this.excPtr >> 2];
        var t = this.get_adjusted_ptr();
        return t !== 0 ? t : this.excPtr;
      };
    }
    var yr = function(e) {
      throw fe || (fe = e), fe;
    }, at = function(e) {
      var t = fe;
      if (!t)
        return We(0), 0;
      var r = new Ye(t);
      r.set_adjusted_ptr(t);
      var i = r.get_type();
      if (!i)
        return We(0), t;
      for (var a in e) {
        var o = e[a];
        if (o === 0 || o === i)
          break;
        var u = r.ptr + 16;
        if (Kt(o, i, u))
          return We(o), t;
      }
      return We(i), t;
    }, gr = function() {
      return at([]);
    }, mr = function(e) {
      return at([e]);
    }, br = function(e, t) {
      return at([e, t]);
    }, wr = function(e) {
      var t = new Ye(e).get_exception_ptr();
      return t;
    }, Tr = function() {
      var e = Ne.pop();
      e || Y("no exception to throw");
      var t = e.excPtr;
      throw e.get_rethrown() || (Ne.push(e), e.set_rethrown(!0), e.set_caught(!1), Ve++), fe = t, fe;
    }, $r = function(e, t, r) {
      var i = new Ye(e);
      throw i.init(t, r), fe = e, Ve++, fe;
    }, Pr = function() {
      return Ve;
    }, Be = {}, wt = function(e) {
      for (; e.length; ) {
        var t = e.pop(), r = e.pop();
        r(t);
      }
    };
    function ot(n) {
      return this.fromWireType(B[n >> 2]);
    }
    var Ce = {}, Te = {}, ze = {}, Tt, Ge = function(e) {
      throw new Tt(e);
    }, $e = function(e, t, r) {
      e.forEach(function(c) {
        ze[c] = t;
      });
      function i(c) {
        var d = r(c);
        d.length !== e.length && Ge("Mismatched type converter count");
        for (var v = 0; v < e.length; ++v)
          le(e[v], d[v]);
      }
      var a = new Array(t.length), o = [], u = 0;
      t.forEach(function(c, d) {
        Te.hasOwnProperty(c) ? a[d] = Te[c] : (o.push(c), Ce.hasOwnProperty(c) || (Ce[c] = []), Ce[c].push(function() {
          a[d] = Te[c], ++u, u === o.length && i(a);
        }));
      }), o.length === 0 && i(a);
    }, Cr = function(e) {
      var t = Be[e];
      delete Be[e];
      var r = t.rawConstructor, i = t.rawDestructor, a = t.fields, o = a.map(function(u) {
        return u.getterReturnType;
      }).concat(a.map(function(u) {
        return u.setterArgumentType;
      }));
      $e([e], o, function(u) {
        var c = {};
        return a.forEach(function(d, v) {
          var h = d.fieldName, $ = u[v], m = d.getter, D = d.getterContext, W = u[v + a.length], L = d.setter, z = d.setterContext;
          c[h] = {
            read: function(b) {
              return $.fromWireType(m(D, b));
            },
            write: function(b, f) {
              var A = [];
              L(z, b, W.toWireType(A, f)), wt(A);
            }
          };
        }), [{
          name: t.name,
          fromWireType: function(v) {
            var h = {};
            for (var $ in c)
              h[$] = c[$].read(v);
            return i(v), h;
          },
          toWireType: function(v, h) {
            for (var $ in c)
              if (!($ in h))
                throw new TypeError('Missing field: "'.concat($, '"'));
            var m = r();
            for ($ in c)
              c[$].write(m, h[$]);
            return v !== null && v.push(i, m), m;
          },
          argPackAdvance: ve,
          readValueFromPointer: ot,
          destructorFunction: i
        }];
      });
    }, Ar = function(e, t, r, i, a) {
    }, Er = function() {
      for (var e = new Array(256), t = 0; t < 256; ++t)
        e[t] = String.fromCharCode(t);
      $t = e;
    }, $t, Q = function(e) {
      for (var t = "", r = e; X[r]; )
        t += $t[X[r++]];
      return t;
    }, Ae, x = function(e) {
      throw new Ae(e);
    };
    function Sr(n, e) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = e.name;
      if (n || x('type "'.concat(r, '" must have a positive integer typeid pointer')), Te.hasOwnProperty(n)) {
        if (t.ignoreDuplicateRegistrations)
          return;
        x("Cannot register type '".concat(r, "' twice"));
      }
      if (Te[n] = e, delete ze[n], Ce.hasOwnProperty(n)) {
        var i = Ce[n];
        delete Ce[n], i.forEach(function(a) {
          return a();
        });
      }
    }
    function le(n, e) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (!("argPackAdvance" in e))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      return Sr(n, e, t);
    }
    var ve = 8, Fr = function(e, t, r, i) {
      t = Q(t), le(e, {
        name: t,
        fromWireType: function(o) {
          return !!o;
        },
        toWireType: function(o, u) {
          return u ? r : i;
        },
        argPackAdvance: ve,
        readValueFromPointer: function(o) {
          return this.fromWireType(X[o]);
        },
        destructorFunction: null
      });
    }, Or = function(e) {
      return {
        count: e.count,
        deleteScheduled: e.deleteScheduled,
        preservePointerOnDelete: e.preservePointerOnDelete,
        ptr: e.ptr,
        ptrType: e.ptrType,
        smartPtr: e.smartPtr,
        smartPtrType: e.smartPtrType
      };
    }, ut = function(e) {
      function t(r) {
        return r.$$.ptrType.registeredClass.name;
      }
      x(t(e) + " instance already deleted");
    }, ct = !1, Pt = function(e) {
    }, Rr = function(e) {
      e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
    }, Ct = function(e) {
      e.count.value -= 1;
      var t = e.count.value === 0;
      t && Rr(e);
    }, xr = function n(e, t, r) {
      if (t === r)
        return e;
      if (r.baseClass === void 0)
        return null;
      var i = n(e, t, r.baseClass);
      return i === null ? null : r.downcast(i);
    }, At = {}, kr = function() {
      return Object.keys(De).length;
    }, Dr = function() {
      var e = [];
      for (var t in De)
        De.hasOwnProperty(t) && e.push(De[t]);
      return e;
    }, xe = [], st = function() {
      for (; xe.length; ) {
        var e = xe.pop();
        e.$$.deleteScheduled = !1, e.delete();
      }
    }, ke, jr = function(e) {
      ke = e, xe.length && ke && ke(st);
    }, Wr = function() {
      s.getInheritedInstanceCount = kr, s.getLiveInheritedInstances = Dr, s.flushPendingDeletes = st, s.setDelayFunction = jr;
    }, De = {}, Ir = function(e, t) {
      for (t === void 0 && x("ptr should not be undefined"); e.baseClass; )
        t = e.upcast(t), e = e.baseClass;
      return t;
    }, Hr = function(e, t) {
      return t = Ir(e, t), De[t];
    }, Xe = function(e, t) {
      (!t.ptrType || !t.ptr) && Ge("makeClassHandle requires ptr and ptrType");
      var r = !!t.smartPtrType, i = !!t.smartPtr;
      return r !== i && Ge("Both smartPtrType and smartPtr must be specified"), t.count = {
        value: 1
      }, je(Object.create(e, {
        $$: {
          value: t
        }
      }));
    };
    function Mr(n) {
      var e = this.getPointee(n);
      if (!e)
        return this.destructor(n), null;
      var t = Hr(this.registeredClass, e);
      if (t !== void 0) {
        if (t.$$.count.value === 0)
          return t.$$.ptr = e, t.$$.smartPtr = n, t.clone();
        var r = t.clone();
        return this.destructor(n), r;
      }
      function i() {
        return this.isSmartPointer ? Xe(this.registeredClass.instancePrototype, {
          ptrType: this.pointeeType,
          ptr: e,
          smartPtrType: this,
          smartPtr: n
        }) : Xe(this.registeredClass.instancePrototype, {
          ptrType: this,
          ptr: n
        });
      }
      var a = this.registeredClass.getActualType(e), o = At[a];
      if (!o)
        return i.call(this);
      var u;
      this.isConst ? u = o.constPointerType : u = o.pointerType;
      var c = xr(e, this.registeredClass, u.registeredClass);
      return c === null ? i.call(this) : this.isSmartPointer ? Xe(u.registeredClass.instancePrototype, {
        ptrType: u,
        ptr: c,
        smartPtrType: this,
        smartPtr: n
      }) : Xe(u.registeredClass.instancePrototype, {
        ptrType: u,
        ptr: c
      });
    }
    var je = function(e) {
      return typeof FinalizationRegistry == "undefined" ? (je = function(r) {
        return r;
      }, e) : (ct = new FinalizationRegistry(function(t) {
        Ct(t.$$);
      }), je = function(r) {
        var i = r.$$, a = !!i.smartPtr;
        if (a) {
          var o = {
            $$: i
          };
          ct.register(r, o, r);
        }
        return r;
      }, Pt = function(r) {
        return ct.unregister(r);
      }, je(e));
    }, Ur = function() {
      Object.assign(Ze.prototype, {
        isAliasOf: function(t) {
          if (!(this instanceof Ze) || !(t instanceof Ze))
            return !1;
          var r = this.$$.ptrType.registeredClass, i = this.$$.ptr;
          t.$$ = t.$$;
          for (var a = t.$$.ptrType.registeredClass, o = t.$$.ptr; r.baseClass; )
            i = r.upcast(i), r = r.baseClass;
          for (; a.baseClass; )
            o = a.upcast(o), a = a.baseClass;
          return r === a && i === o;
        },
        clone: function() {
          if (this.$$.ptr || ut(this), this.$$.preservePointerOnDelete)
            return this.$$.count.value += 1, this;
          var t = je(Object.create(Object.getPrototypeOf(this), {
            $$: {
              value: Or(this.$$)
            }
          }));
          return t.$$.count.value += 1, t.$$.deleteScheduled = !1, t;
        },
        delete: function() {
          this.$$.ptr || ut(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && x("Object already scheduled for deletion"), Pt(this), Ct(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
        },
        isDeleted: function() {
          return !this.$$.ptr;
        },
        deleteLater: function() {
          return this.$$.ptr || ut(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && x("Object already scheduled for deletion"), xe.push(this), xe.length === 1 && ke && ke(st), this.$$.deleteScheduled = !0, this;
        }
      });
    };
    function Ze() {
    }
    var Lr = 48, Nr = 57, Et = function(e) {
      if (e === void 0)
        return "_unknown";
      e = e.replace(/[^a-zA-Z0-9_]/g, "$");
      var t = e.charCodeAt(0);
      return t >= Lr && t <= Nr ? "_".concat(e) : e;
    };
    function St(n, e) {
      return n = Et(n), Oi({}, n, function() {
        return e.apply(this, arguments);
      })[n];
    }
    var Ft = function(e, t, r) {
      if (e[t].overloadTable === void 0) {
        var i = e[t];
        e[t] = function() {
          return e[t].overloadTable.hasOwnProperty(arguments.length) || x("Function '".concat(r, "' called with an invalid number of arguments (").concat(arguments.length, ") - expects one of (").concat(e[t].overloadTable, ")!")), e[t].overloadTable[arguments.length].apply(this, arguments);
        }, e[t].overloadTable = [], e[t].overloadTable[i.argCount] = i;
      }
    }, Ot = function(e, t, r) {
      s.hasOwnProperty(e) ? ((r === void 0 || s[e].overloadTable !== void 0 && s[e].overloadTable[r] !== void 0) && x("Cannot register public name '".concat(e, "' twice")), Ft(s, e, e), s.hasOwnProperty(r) && x("Cannot register multiple overloads of a function with the same number of arguments (".concat(r, ")!")), s[e].overloadTable[r] = t) : (s[e] = t, r !== void 0 && (s[e].numArguments = r));
    };
    function Vr(n, e, t, r, i, a, o, u) {
      this.name = n, this.constructor = e, this.instancePrototype = t, this.rawDestructor = r, this.baseClass = i, this.getActualType = a, this.upcast = o, this.downcast = u, this.pureVirtualFunctions = [];
    }
    var ft = function(e, t, r) {
      for (; t !== r; )
        t.upcast || x("Expected null or instance of ".concat(r.name, ", got an instance of ").concat(t.name)), e = t.upcast(e), t = t.baseClass;
      return e;
    };
    function Yr(n, e) {
      if (e === null)
        return this.isReference && x("null is not a valid ".concat(this.name)), 0;
      e.$$ || x('Cannot pass "'.concat(dt(e), '" as a ').concat(this.name)), e.$$.ptr || x("Cannot pass deleted object as a pointer of type ".concat(this.name));
      var t = e.$$.ptrType.registeredClass, r = ft(e.$$.ptr, t, this.registeredClass);
      return r;
    }
    function Br(n, e) {
      var t;
      if (e === null)
        return this.isReference && x("null is not a valid ".concat(this.name)), this.isSmartPointer ? (t = this.rawConstructor(), n !== null && n.push(this.rawDestructor, t), t) : 0;
      e.$$ || x('Cannot pass "'.concat(dt(e), '" as a ').concat(this.name)), e.$$.ptr || x("Cannot pass deleted object as a pointer of type ".concat(this.name)), !this.isConst && e.$$.ptrType.isConst && x("Cannot convert argument of type ".concat(e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name, " to parameter type ").concat(this.name));
      var r = e.$$.ptrType.registeredClass;
      if (t = ft(e.$$.ptr, r, this.registeredClass), this.isSmartPointer)
        switch (e.$$.smartPtr === void 0 && x("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
          case 0:
            e.$$.smartPtrType === this ? t = e.$$.smartPtr : x("Cannot convert argument of type ".concat(e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name, " to parameter type ").concat(this.name));
            break;
          case 1:
            t = e.$$.smartPtr;
            break;
          case 2:
            if (e.$$.smartPtrType === this)
              t = e.$$.smartPtr;
            else {
              var i = e.clone();
              t = this.rawShare(t, pe.toHandle(function() {
                return i.delete();
              })), n !== null && n.push(this.rawDestructor, t);
            }
            break;
          default:
            x("Unsupporting sharing policy");
        }
      return t;
    }
    function zr(n, e) {
      if (e === null)
        return this.isReference && x("null is not a valid ".concat(this.name)), 0;
      e.$$ || x('Cannot pass "'.concat(dt(e), '" as a ').concat(this.name)), e.$$.ptr || x("Cannot pass deleted object as a pointer of type ".concat(this.name)), e.$$.ptrType.isConst && x("Cannot convert argument of type ".concat(e.$$.ptrType.name, " to parameter type ").concat(this.name));
      var t = e.$$.ptrType.registeredClass, r = ft(e.$$.ptr, t, this.registeredClass);
      return r;
    }
    function Rt(n) {
      return this.fromWireType(j[n >> 2]);
    }
    var Gr = function() {
      Object.assign(qe.prototype, {
        getPointee: function(t) {
          return this.rawGetPointee && (t = this.rawGetPointee(t)), t;
        },
        destructor: function(t) {
          this.rawDestructor && this.rawDestructor(t);
        },
        argPackAdvance: ve,
        readValueFromPointer: Rt,
        deleteObject: function(t) {
          t !== null && t.delete();
        },
        fromWireType: Mr
      });
    };
    function qe(n, e, t, r, i, a, o, u, c, d, v) {
      this.name = n, this.registeredClass = e, this.isReference = t, this.isConst = r, this.isSmartPointer = i, this.pointeeType = a, this.sharingPolicy = o, this.rawGetPointee = u, this.rawConstructor = c, this.rawShare = d, this.rawDestructor = v, !i && e.baseClass === void 0 ? r ? (this.toWireType = Yr, this.destructorFunction = null) : (this.toWireType = zr, this.destructorFunction = null) : this.toWireType = Br;
    }
    var xt = function(e, t, r) {
      s.hasOwnProperty(e) || Ge("Replacing nonexistant public symbol"), s[e].overloadTable !== void 0 && r !== void 0 ? s[e].overloadTable[r] = t : (s[e] = t, s[e].argCount = r);
    }, Xr = function(e, t, r) {
      var i = s["dynCall_" + e];
      return r && r.length ? i.apply(null, [t].concat(r)) : i.call(null, t);
    }, Je = [], kt, k = function(e) {
      var t = Je[e];
      return t || (e >= Je.length && (Je.length = e + 1), Je[e] = t = kt.get(e)), t;
    }, Zr = function(e, t, r) {
      if (e.includes("j"))
        return Xr(e, t, r);
      var i = k(t).apply(null, r);
      return i;
    }, qr = function(e, t) {
      var r = [];
      return function() {
        return r.length = 0, Object.assign(r, arguments), Zr(e, t, r);
      };
    }, ae = function(e, t) {
      e = Q(e);
      function r() {
        return e.includes("j") ? qr(e, t) : k(t);
      }
      var i = r();
      return typeof i != "function" && x("unknown function pointer with signature ".concat(e, ": ").concat(t)), i;
    }, Jr = function(e, t) {
      var r = St(t, function(i) {
        this.name = t, this.message = i;
        var a = new Error(i).stack;
        a !== void 0 && (this.stack = this.toString() + "\n" + a.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.prototype.toString = function() {
        return this.message === void 0 ? this.name : "".concat(this.name, ": ").concat(this.message);
      }, r;
    }, Dt, jt = function(e) {
      var t = Zt(e), r = Q(t);
      return de(t), r;
    }, Ke = function(e, t) {
      var r = [], i = {};
      function a(o) {
        if (!i[o] && !Te[o]) {
          if (ze[o]) {
            ze[o].forEach(a);
            return;
          }
          r.push(o), i[o] = !0;
        }
      }
      throw t.forEach(a), new Dt("".concat(e, ": ") + r.map(jt).join([", "]));
    }, Kr = function(e, t, r, i, a, o, u, c, d, v, h, $, m) {
      h = Q(h), o = ae(a, o), c && (c = ae(u, c)), v && (v = ae(d, v)), m = ae($, m);
      var D = Et(h);
      Ot(D, function() {
        Ke("Cannot construct ".concat(h, " due to unbound types"), [i]);
      }), $e([e, t, r], i ? [i] : [], function(W) {
        W = W[0];
        var L, z;
        i ? (L = W.registeredClass, z = L.instancePrototype) : z = Ze.prototype;
        var ee = St(D, function() {
          if (Object.getPrototypeOf(this) !== b)
            throw new Ae("Use 'new' to construct " + h);
          if (f.constructor_body === void 0)
            throw new Ae(h + " has no accessible constructor");
          var tt = f.constructor_body[arguments.length];
          if (tt === void 0)
            throw new Ae("Tried to invoke ctor of ".concat(h, " with invalid number of parameters (").concat(arguments.length, ") - expected (").concat(Object.keys(f.constructor_body).toString(), ") parameters instead!"));
          return tt.apply(this, arguments);
        }), b = Object.create(z, {
          constructor: {
            value: ee
          }
        });
        ee.prototype = b;
        var f = new Vr(h, ee, b, m, L, o, c, v);
        f.baseClass && (f.baseClass.__derivedClasses === void 0 && (f.baseClass.__derivedClasses = []), f.baseClass.__derivedClasses.push(f));
        var A = new qe(h, f, !0, !1, !1), Z = new qe(h + "*", f, !1, !1, !1), ce = new qe(h + " const*", f, !1, !0, !1);
        return At[e] = {
          pointerType: Z,
          constPointerType: ce
        }, xt(D, ee), [A, Z, ce];
      });
    }, lt = function(e, t) {
      for (var r = [], i = 0; i < e; i++)
        r.push(j[t + i * 4 >> 2]);
      return r;
    };
    function vt(n, e, t, r, i, a) {
      var o = e.length;
      o < 2 && x("argTypes array size mismatch! Must at least get return value and 'this' types!");
      for (var u = e[1] !== null && t !== null, c = !1, d = 1; d < e.length; ++d)
        if (e[d] !== null && e[d].destructorFunction === void 0) {
          c = !0;
          break;
        }
      var v = e[0].name !== "void", h = o - 2, $ = new Array(h), m = [], D = [];
      return function() {
        arguments.length !== h && x("function ".concat(n, " called with ").concat(arguments.length, " arguments, expected ").concat(h)), D.length = 0;
        var W;
        m.length = u ? 2 : 1, m[0] = i, u && (W = e[1].toWireType(D, this), m[1] = W);
        for (var L = 0; L < h; ++L)
          $[L] = e[L + 2].toWireType(D, arguments[L]), m.push($[L]);
        var z = r.apply(null, m);
        function ee(b) {
          if (c)
            wt(D);
          else
            for (var f = u ? 1 : 2; f < e.length; f++) {
              var A = f === 1 ? W : $[f - 2];
              e[f].destructorFunction !== null && e[f].destructorFunction(A);
            }
          if (v)
            return e[0].fromWireType(b);
        }
        return ee(z);
      };
    }
    var Qr = function(e, t, r, i, a, o) {
      var u = lt(t, r);
      a = ae(i, a), $e([], [e], function(c) {
        c = c[0];
        var d = "constructor ".concat(c.name);
        if (c.registeredClass.constructor_body === void 0 && (c.registeredClass.constructor_body = []), c.registeredClass.constructor_body[t - 1] !== void 0)
          throw new Ae("Cannot register multiple constructors with identical number of parameters (".concat(t - 1, ") for class '").concat(c.name, "'! Overload resolution is currently only performed using the parameter count, not actual type info!"));
        return c.registeredClass.constructor_body[t - 1] = function() {
          Ke("Cannot construct ".concat(c.name, " due to unbound types"), u);
        }, $e([], u, function(v) {
          return v.splice(1, 0, null), c.registeredClass.constructor_body[t - 1] = vt(d, v, null, a, o), [];
        }), [];
      });
    }, Wt = function(e) {
      e = e.trim();
      var t = e.indexOf("(");
      return t !== -1 ? (ne(e[e.length - 1] == ")", "Parentheses for argument names should match."), e.substr(0, t)) : e;
    }, en = function(e, t, r, i, a, o, u, c, d) {
      var v = lt(r, i);
      t = Q(t), t = Wt(t), o = ae(a, o), $e([], [e], function(h) {
        h = h[0];
        var $ = "".concat(h.name, ".").concat(t);
        t.startsWith("@@") && (t = Symbol[t.substring(2)]), c && h.registeredClass.pureVirtualFunctions.push(t);
        function m() {
          Ke("Cannot call ".concat($, " due to unbound types"), v);
        }
        var D = h.registeredClass.instancePrototype, W = D[t];
        return W === void 0 || W.overloadTable === void 0 && W.className !== h.name && W.argCount === r - 2 ? (m.argCount = r - 2, m.className = h.name, D[t] = m) : (Ft(D, t, $), D[t].overloadTable[r - 2] = m), $e([], v, function(L) {
          var z = vt($, L, h, o, u);
          return D[t].overloadTable === void 0 ? (z.argCount = r - 2, D[t] = z) : D[t].overloadTable[r - 2] = z, [];
        }), [];
      });
    };
    function tn() {
      Object.assign(It.prototype, {
        get: function(e) {
          return this.allocated[e];
        },
        has: function(e) {
          return this.allocated[e] !== void 0;
        },
        allocate: function(e) {
          var t = this.freelist.pop() || this.allocated.length;
          return this.allocated[t] = e, t;
        },
        free: function(e) {
          this.allocated[e] = void 0, this.freelist.push(e);
        }
      });
    }
    function It() {
      this.allocated = [void 0], this.freelist = [];
    }
    var ie = new It(), Ht = function(e) {
      e >= ie.reserved && --ie.get(e).refcount === 0 && ie.free(e);
    }, rn = function() {
      for (var e = 0, t = ie.reserved; t < ie.allocated.length; ++t)
        ie.allocated[t] !== void 0 && ++e;
      return e;
    }, nn = function() {
      ie.allocated.push({
        value: void 0
      }, {
        value: null
      }, {
        value: !0
      }, {
        value: !1
      }), ie.reserved = ie.allocated.length, s.count_emval_handles = rn;
    }, pe = {
      toValue: function(e) {
        return e || x("Cannot use deleted val. handle = " + e), ie.get(e).value;
      },
      toHandle: function(e) {
        switch (e) {
          case void 0:
            return 1;
          case null:
            return 2;
          case !0:
            return 3;
          case !1:
            return 4;
          default:
            return ie.allocate({
              refcount: 1,
              value: e
            });
        }
      }
    }, an = function(e, t) {
      t = Q(t), le(e, {
        name: t,
        fromWireType: function(i) {
          var a = pe.toValue(i);
          return Ht(i), a;
        },
        toWireType: function(i, a) {
          return pe.toHandle(a);
        },
        argPackAdvance: ve,
        readValueFromPointer: ot,
        destructorFunction: null
      });
    }, dt = function(e) {
      if (e === null)
        return "null";
      var t = G(e);
      return t === "object" || t === "array" || t === "function" ? e.toString() : "" + e;
    }, on = function(e, t) {
      switch (t) {
        case 4:
          return function(r) {
            return this.fromWireType(se[r >> 2]);
          };
        case 8:
          return function(r) {
            return this.fromWireType(Ee[r >> 3]);
          };
        default:
          throw new TypeError("invalid float width (".concat(t, "): ").concat(e));
      }
    }, un = function(e, t, r) {
      t = Q(t), le(e, {
        name: t,
        fromWireType: function(a) {
          return a;
        },
        toWireType: function(a, o) {
          return o;
        },
        argPackAdvance: ve,
        readValueFromPointer: on(t, r),
        destructorFunction: null
      });
    }, cn = function(e, t, r, i, a, o, u) {
      var c = lt(t, r);
      e = Q(e), e = Wt(e), a = ae(i, a), Ot(e, function() {
        Ke("Cannot call ".concat(e, " due to unbound types"), c);
      }, t - 1), $e([], c, function(d) {
        var v = [d[0], null].concat(d.slice(1));
        return xt(e, vt(e, v, null, a, o), t - 1), [];
      });
    }, sn = function(e, t, r) {
      switch (t) {
        case 1:
          return r ? function(i) {
            return te[i >> 0];
          } : function(i) {
            return X[i >> 0];
          };
        case 2:
          return r ? function(i) {
            return re[i >> 1];
          } : function(i) {
            return he[i >> 1];
          };
        case 4:
          return r ? function(i) {
            return B[i >> 2];
          } : function(i) {
            return j[i >> 2];
          };
        default:
          throw new TypeError("invalid integer width (".concat(t, "): ").concat(e));
      }
    }, fn = function(e, t, r, i, a) {
      t = Q(t);
      var o = function($) {
        return $;
      };
      if (i === 0) {
        var u = 32 - 8 * r;
        o = function($) {
          return $ << u >>> u;
        };
      }
      var c = t.includes("unsigned"), d = function($, m) {
      }, v;
      c ? v = function($, m) {
        return d(m, this.name), m >>> 0;
      } : v = function($, m) {
        return d(m, this.name), m;
      }, le(e, {
        name: t,
        fromWireType: o,
        toWireType: v,
        argPackAdvance: ve,
        readValueFromPointer: sn(t, r, i !== 0),
        destructorFunction: null
      });
    }, ln = function(e, t, r) {
      var i = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], a = i[t];
      function o(u) {
        var c = j[u >> 2], d = j[u + 4 >> 2];
        return new a(te.buffer, d, c);
      }
      r = Q(r), le(e, {
        name: r,
        fromWireType: o,
        argPackAdvance: ve,
        readValueFromPointer: o
      }, {
        ignoreDuplicateRegistrations: !0
      });
    }, Mt = function(e, t, r, i) {
      if (!(i > 0))
        return 0;
      for (var a = r, o = r + i - 1, u = 0; u < e.length; ++u) {
        var c = e.charCodeAt(u);
        if (c >= 55296 && c <= 57343) {
          var d = e.charCodeAt(++u);
          c = 65536 + ((c & 1023) << 10) | d & 1023;
        }
        if (c <= 127) {
          if (r >= o)
            break;
          t[r++] = c;
        } else if (c <= 2047) {
          if (r + 1 >= o)
            break;
          t[r++] = 192 | c >> 6, t[r++] = 128 | c & 63;
        } else if (c <= 65535) {
          if (r + 2 >= o)
            break;
          t[r++] = 224 | c >> 12, t[r++] = 128 | c >> 6 & 63, t[r++] = 128 | c & 63;
        } else {
          if (r + 3 >= o)
            break;
          t[r++] = 240 | c >> 18, t[r++] = 128 | c >> 12 & 63, t[r++] = 128 | c >> 6 & 63, t[r++] = 128 | c & 63;
        }
      }
      return t[r] = 0, r - a;
    }, vn = function(e, t, r) {
      return Mt(e, X, t, r);
    }, Ut = function(e) {
      for (var t = 0, r = 0; r < e.length; ++r) {
        var i = e.charCodeAt(r);
        i <= 127 ? t++ : i <= 2047 ? t += 2 : i >= 55296 && i <= 57343 ? (t += 4, ++r) : t += 3;
      }
      return t;
    }, Lt = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0, dn = function(e, t, r) {
      for (var i = t + r, a = t; e[a] && !(a >= i); )
        ++a;
      if (a - t > 16 && e.buffer && Lt)
        return Lt.decode(e.subarray(t, a));
      for (var o = ""; t < a; ) {
        var u = e[t++];
        if (!(u & 128)) {
          o += String.fromCharCode(u);
          continue;
        }
        var c = e[t++] & 63;
        if ((u & 224) == 192) {
          o += String.fromCharCode((u & 31) << 6 | c);
          continue;
        }
        var d = e[t++] & 63;
        if ((u & 240) == 224 ? u = (u & 15) << 12 | c << 6 | d : u = (u & 7) << 18 | c << 12 | d << 6 | e[t++] & 63, u < 65536)
          o += String.fromCharCode(u);
        else {
          var v = u - 65536;
          o += String.fromCharCode(55296 | v >> 10, 56320 | v & 1023);
        }
      }
      return o;
    }, _t = function(e, t) {
      return e ? dn(X, e, t) : "";
    }, _n = function(e, t) {
      t = Q(t);
      var r = t === "std::string";
      le(e, {
        name: t,
        fromWireType: function(a) {
          var o = j[a >> 2], u = a + 4, c;
          if (r)
            for (var d = u, v = 0; v <= o; ++v) {
              var h = u + v;
              if (v == o || X[h] == 0) {
                var $ = h - d, m = _t(d, $);
                c === void 0 ? c = m : (c += String.fromCharCode(0), c += m), d = h + 1;
              }
            }
          else {
            for (var D = new Array(o), v = 0; v < o; ++v)
              D[v] = String.fromCharCode(X[u + v]);
            c = D.join("");
          }
          return de(a), c;
        },
        toWireType: function(a, o) {
          o instanceof ArrayBuffer && (o = new Uint8Array(o));
          var u, c = typeof o == "string";
          c || o instanceof Uint8Array || o instanceof Uint8ClampedArray || o instanceof Int8Array || x("Cannot pass non-string to std::string"), r && c ? u = Ut(o) : u = o.length;
          var d = pt(4 + u + 1), v = d + 4;
          if (j[d >> 2] = u, r && c)
            vn(o, v, u + 1);
          else if (c)
            for (var h = 0; h < u; ++h) {
              var $ = o.charCodeAt(h);
              $ > 255 && (de(v), x("String has UTF-16 code units that do not fit in 8 bits")), X[v + h] = $;
            }
          else
            for (var h = 0; h < u; ++h)
              X[v + h] = o[h];
          return a !== null && a.push(de, d), d;
        },
        argPackAdvance: ve,
        readValueFromPointer: Rt,
        destructorFunction: function(a) {
          de(a);
        }
      });
    }, Nt = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0, hn = function(e, t) {
      for (var r = e, i = r >> 1, a = i + t / 2; !(i >= a) && he[i]; )
        ++i;
      if (r = i << 1, r - e > 32 && Nt)
        return Nt.decode(X.subarray(e, r));
      for (var o = "", u = 0; !(u >= t / 2); ++u) {
        var c = re[e + u * 2 >> 1];
        if (c == 0)
          break;
        o += String.fromCharCode(c);
      }
      return o;
    }, pn = function(e, t, r) {
      if (r === void 0 && (r = 2147483647), r < 2)
        return 0;
      r -= 2;
      for (var i = t, a = r < e.length * 2 ? r / 2 : e.length, o = 0; o < a; ++o) {
        var u = e.charCodeAt(o);
        re[t >> 1] = u, t += 2;
      }
      return re[t >> 1] = 0, t - i;
    }, yn = function(e) {
      return e.length * 2;
    }, gn = function(e, t) {
      for (var r = 0, i = ""; !(r >= t / 4); ) {
        var a = B[e + r * 4 >> 2];
        if (a == 0)
          break;
        if (++r, a >= 65536) {
          var o = a - 65536;
          i += String.fromCharCode(55296 | o >> 10, 56320 | o & 1023);
        } else
          i += String.fromCharCode(a);
      }
      return i;
    }, mn = function(e, t, r) {
      if (r === void 0 && (r = 2147483647), r < 4)
        return 0;
      for (var i = t, a = i + r - 4, o = 0; o < e.length; ++o) {
        var u = e.charCodeAt(o);
        if (u >= 55296 && u <= 57343) {
          var c = e.charCodeAt(++o);
          u = 65536 + ((u & 1023) << 10) | c & 1023;
        }
        if (B[t >> 2] = u, t += 4, t + 4 > a)
          break;
      }
      return B[t >> 2] = 0, t - i;
    }, bn = function(e) {
      for (var t = 0, r = 0; r < e.length; ++r) {
        var i = e.charCodeAt(r);
        i >= 55296 && i <= 57343 && ++r, t += 4;
      }
      return t;
    }, wn = function(e, t, r) {
      r = Q(r);
      var i, a, o, u, c;
      t === 2 ? (i = hn, a = pn, u = yn, o = function() {
        return he;
      }, c = 1) : t === 4 && (i = gn, a = mn, u = bn, o = function() {
        return j;
      }, c = 2), le(e, {
        name: r,
        fromWireType: function(v) {
          for (var h = j[v >> 2], $ = o(), m, D = v + 4, W = 0; W <= h; ++W) {
            var L = v + 4 + W * t;
            if (W == h || $[L >> c] == 0) {
              var z = L - D, ee = i(D, z);
              m === void 0 ? m = ee : (m += String.fromCharCode(0), m += ee), D = L + t;
            }
          }
          return de(v), m;
        },
        toWireType: function(v, h) {
          typeof h != "string" && x("Cannot pass non-string to C++ string type ".concat(r));
          var $ = u(h), m = pt(4 + $ + t);
          return j[m >> 2] = $ >> c, a(h, m + 4, $ + t), v !== null && v.push(de, m), m;
        },
        argPackAdvance: ve,
        readValueFromPointer: ot,
        destructorFunction: function(v) {
          de(v);
        }
      });
    }, Tn = function(e, t, r, i, a, o) {
      Be[e] = {
        name: Q(t),
        rawConstructor: ae(r, i),
        rawDestructor: ae(a, o),
        fields: []
      };
    }, $n = function(e, t, r, i, a, o, u, c, d, v) {
      Be[e].fields.push({
        fieldName: Q(t),
        getterReturnType: r,
        getter: ae(i, a),
        getterContext: o,
        setterArgumentType: u,
        setter: ae(c, d),
        setterContext: v
      });
    }, Pn = function(e, t) {
      t = Q(t), le(e, {
        isVoid: !0,
        name: t,
        argPackAdvance: 0,
        fromWireType: function() {
        },
        toWireType: function(i, a) {
        }
      });
    }, Cn = {}, An = function(e) {
      var t = Cn[e];
      return t === void 0 ? Q(e) : t;
    }, Vt = function() {
      if ((typeof globalThis == "undefined" ? "undefined" : G(globalThis)) == "object")
        return globalThis;
      function e(t) {
        t.$$$embind_global$$$ = t;
        var r = (typeof $$$embind_global$$$ == "undefined" ? "undefined" : G($$$embind_global$$$)) == "object" && t.$$$embind_global$$$ == t;
        return r || delete t.$$$embind_global$$$, r;
      }
      if ((typeof $$$embind_global$$$ == "undefined" ? "undefined" : G($$$embind_global$$$)) == "object" || ((typeof global == "undefined" ? "undefined" : G(global)) == "object" && e(global) ? $$$embind_global$$$ = global : (typeof self == "undefined" ? "undefined" : G(self)) == "object" && e(self) && ($$$embind_global$$$ = self), (typeof $$$embind_global$$$ == "undefined" ? "undefined" : G($$$embind_global$$$)) == "object"))
        return $$$embind_global$$$;
      throw Error("unable to get global object.");
    }, En = function(e) {
      return e === 0 ? pe.toHandle(Vt()) : (e = An(e), pe.toHandle(Vt()[e]));
    }, Sn = function(e) {
      e > 4 && (ie.get(e).refcount += 1);
    }, Yt = function(e, t) {
      var r = Te[e];
      return r === void 0 && x(t + " has unknown type " + jt(e)), r;
    }, Fn = function(e) {
      var t = new Array(e + 1);
      return function(r, i, a) {
        t[0] = r;
        for (var o = 0; o < e; ++o) {
          var u = Yt(j[i + o * 4 >> 2], "parameter " + o);
          t[o + 1] = u.readValueFromPointer(a), a += u.argPackAdvance;
        }
        var c = new (r.bind.apply(r, t))();
        return pe.toHandle(c);
      };
    }, Bt = {}, On = function(e, t, r, i) {
      e = pe.toValue(e);
      var a = Bt[t];
      return a || (a = Fn(t), Bt[t] = a), a(e, r, i);
    }, Rn = function(e, t) {
      e = Yt(e, "_emval_take_value");
      var r = e.readValueFromPointer(t);
      return pe.toHandle(r);
    }, xn = function() {
      Y("");
    }, kn = function(e, t, r) {
      return X.copyWithin(e, t, t + r);
    }, Dn = function() {
      return 2147483648;
    }, jn = function(e) {
      var t = me.buffer, r = (e - t.byteLength + 65535) / 65536;
      try {
        return me.grow(r), we(), 1;
      } catch (i) {
      }
    }, Wn = function(e) {
      var t = X.length;
      e >>>= 0;
      var r = Dn();
      if (e > r)
        return !1;
      for (var i = function(v, h) {
        return v + (h - v % h) % h;
      }, a = 1; a <= 4; a *= 2) {
        var o = t * (1 + 0.2 / a);
        o = Math.min(o, e + 100663296);
        var u = Math.min(r, i(Math.max(e, o), 65536)), c = jn(u);
        if (c)
          return !0;
      }
      return !1;
    }, ht = {}, In = function() {
      return N || "./this.program";
    }, zt = function n() {
      if (!n.strings) {
        var e = ((typeof navigator == "undefined" ? "undefined" : G(navigator)) == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", t = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: e,
          _: In()
        };
        for (var r in ht)
          ht[r] === void 0 ? delete t[r] : t[r] = ht[r];
        var i = [];
        for (var r in t)
          i.push("".concat(r, "=").concat(t[r]));
        n.strings = i;
      }
      return n.strings;
    }, Hn = function(e, t) {
      for (var r = 0; r < e.length; ++r)
        te[t++ >> 0] = e.charCodeAt(r);
      te[t >> 0] = 0;
    }, Mn = function(e, t) {
      var r = 0;
      return zt().forEach(function(i, a) {
        var o = t + r;
        j[e + a * 4 >> 2] = o, Hn(i, o), r += i.length + 1;
      }), 0;
    }, Un = function(e, t) {
      var r = zt();
      j[e >> 2] = r.length;
      var i = 0;
      return r.forEach(function(a) {
        return i += a.length + 1;
      }), j[t >> 2] = i, 0;
    }, Ln = function(e) {
      return e;
    }, Qe = function(e) {
      return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
    }, Nn = function(e, t) {
      for (var r = 0, i = 0; i <= t; r += e[i++])
        ;
      return r;
    }, Gt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Xt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Vn = function(e, t) {
      for (var r = new Date(e.getTime()); t > 0; ) {
        var i = Qe(r.getFullYear()), a = r.getMonth(), o = (i ? Gt : Xt)[a];
        if (t > o - r.getDate())
          t -= o - r.getDate() + 1, r.setDate(1), a < 11 ? r.setMonth(a + 1) : (r.setMonth(0), r.setFullYear(r.getFullYear() + 1));
        else
          return r.setDate(r.getDate() + t), r;
      }
      return r;
    };
    function Yn(n, e, t) {
      var r = t > 0 ? t : Ut(n) + 1, i = new Array(r), a = Mt(n, i, 0, i.length);
      return e && (i.length = a), i;
    }
    var Bn = function(e, t) {
      te.set(e, t);
    }, zn = function(e, t, r, i) {
      var a = j[i + 40 >> 2], o = {
        tm_sec: B[i >> 2],
        tm_min: B[i + 4 >> 2],
        tm_hour: B[i + 8 >> 2],
        tm_mday: B[i + 12 >> 2],
        tm_mon: B[i + 16 >> 2],
        tm_year: B[i + 20 >> 2],
        tm_wday: B[i + 24 >> 2],
        tm_yday: B[i + 28 >> 2],
        tm_isdst: B[i + 32 >> 2],
        tm_gmtoff: B[i + 36 >> 2],
        tm_zone: a ? _t(a) : ""
      }, u = _t(r), c = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y"
      };
      for (var d in c)
        u = u.replace(new RegExp(d, "g"), c[d]);
      var v = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], h = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      function $(b, f, A) {
        for (var Z = typeof b == "number" ? b.toString() : b || ""; Z.length < f; )
          Z = A[0] + Z;
        return Z;
      }
      function m(b, f) {
        return $(b, f, "0");
      }
      function D(b, f) {
        function A(ce) {
          return ce < 0 ? -1 : ce > 0 ? 1 : 0;
        }
        var Z;
        return (Z = A(b.getFullYear() - f.getFullYear())) === 0 && (Z = A(b.getMonth() - f.getMonth())) === 0 && (Z = A(b.getDate() - f.getDate())), Z;
      }
      function W(b) {
        switch (b.getDay()) {
          case 0:
            return new Date(b.getFullYear() - 1, 11, 29);
          case 1:
            return b;
          case 2:
            return new Date(b.getFullYear(), 0, 3);
          case 3:
            return new Date(b.getFullYear(), 0, 2);
          case 4:
            return new Date(b.getFullYear(), 0, 1);
          case 5:
            return new Date(b.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(b.getFullYear() - 1, 11, 30);
        }
      }
      function L(b) {
        var f = Vn(new Date(b.tm_year + 1900, 0, 1), b.tm_yday), A = new Date(f.getFullYear(), 0, 4), Z = new Date(f.getFullYear() + 1, 0, 4), ce = W(A), tt = W(Z);
        return D(ce, f) <= 0 ? D(tt, f) <= 0 ? f.getFullYear() + 1 : f.getFullYear() : f.getFullYear() - 1;
      }
      var z = {
        "%a": function(f) {
          return v[f.tm_wday].substring(0, 3);
        },
        "%A": function(f) {
          return v[f.tm_wday];
        },
        "%b": function(f) {
          return h[f.tm_mon].substring(0, 3);
        },
        "%B": function(f) {
          return h[f.tm_mon];
        },
        "%C": function(f) {
          var A = f.tm_year + 1900;
          return m(A / 100 | 0, 2);
        },
        "%d": function(f) {
          return m(f.tm_mday, 2);
        },
        "%e": function(f) {
          return $(f.tm_mday, 2, " ");
        },
        "%g": function(f) {
          return L(f).toString().substring(2);
        },
        "%G": function(f) {
          return L(f);
        },
        "%H": function(f) {
          return m(f.tm_hour, 2);
        },
        "%I": function(f) {
          var A = f.tm_hour;
          return A == 0 ? A = 12 : A > 12 && (A -= 12), m(A, 2);
        },
        "%j": function(f) {
          return m(f.tm_mday + Nn(Qe(f.tm_year + 1900) ? Gt : Xt, f.tm_mon - 1), 3);
        },
        "%m": function(f) {
          return m(f.tm_mon + 1, 2);
        },
        "%M": function(f) {
          return m(f.tm_min, 2);
        },
        "%n": function() {
          return "\n";
        },
        "%p": function(f) {
          return f.tm_hour >= 0 && f.tm_hour < 12 ? "AM" : "PM";
        },
        "%S": function(f) {
          return m(f.tm_sec, 2);
        },
        "%t": function() {
          return "	";
        },
        "%u": function(f) {
          return f.tm_wday || 7;
        },
        "%U": function(f) {
          var A = f.tm_yday + 7 - f.tm_wday;
          return m(Math.floor(A / 7), 2);
        },
        "%V": function(f) {
          var A = Math.floor((f.tm_yday + 7 - (f.tm_wday + 6) % 7) / 7);
          if ((f.tm_wday + 371 - f.tm_yday - 2) % 7 <= 2 && A++, A) {
            if (A == 53) {
              var ce = (f.tm_wday + 371 - f.tm_yday) % 7;
              ce != 4 && (ce != 3 || !Qe(f.tm_year)) && (A = 1);
            }
          } else {
            A = 52;
            var Z = (f.tm_wday + 7 - f.tm_yday - 1) % 7;
            (Z == 4 || Z == 5 && Qe(f.tm_year % 400 - 1)) && A++;
          }
          return m(A, 2);
        },
        "%w": function(f) {
          return f.tm_wday;
        },
        "%W": function(f) {
          var A = f.tm_yday + 7 - (f.tm_wday + 6) % 7;
          return m(Math.floor(A / 7), 2);
        },
        "%y": function(f) {
          return (f.tm_year + 1900).toString().substring(2);
        },
        "%Y": function(f) {
          return f.tm_year + 1900;
        },
        "%z": function(f) {
          var A = f.tm_gmtoff, Z = A >= 0;
          return A = Math.abs(A) / 60, A = A / 60 * 100 + A % 60, (Z ? "+" : "-") + ("0000" + A).slice(-4);
        },
        "%Z": function(f) {
          return f.tm_zone;
        },
        "%%": function() {
          return "%";
        }
      };
      u = u.replace(/%%/g, "\0\0");
      for (var d in z)
        u.includes(d) && (u = u.replace(new RegExp(d, "g"), z[d](o)));
      u = u.replace(/\0\0/g, "%");
      var ee = Yn(u, !1);
      return ee.length > t ? 0 : (Bn(ee, e), ee.length - 1);
    }, Gn = function(e, t, r, i, a) {
      return zn(e, t, r, i);
    };
    Tt = s.InternalError = /* @__PURE__ */ function(n) {
      ur(t, n);
      var e = cr(t);
      function t(r) {
        var i;
        return or(this, t), i = e.call(this, r), i.name = "InternalError", i;
      }
      return ar(t);
    }(/* @__PURE__ */ nt(Error)), Er(), Ae = s.BindingError = /* @__PURE__ */ function(n) {
      ur(t, n);
      var e = cr(t);
      function t(r) {
        var i;
        return or(this, t), i = e.call(this, r), i.name = "BindingError", i;
      }
      return ar(t);
    }(/* @__PURE__ */ nt(Error)), Ur(), Wr(), Gr(), Dt = s.UnboundTypeError = Jr(Error, "UnboundTypeError"), tn(), nn();
    var Xn = {
      q: hr,
      u: pr,
      a: gr,
      h: mr,
      l: br,
      I: wr,
      P: Tr,
      n: $r,
      ba: Pr,
      d: yr,
      oa: Cr,
      X: Ar,
      fa: Fr,
      na: Kr,
      ma: Qr,
      D: en,
      ea: an,
      U: un,
      J: cn,
      w: fn,
      s: ln,
      T: _n,
      L: wn,
      Q: Tn,
      pa: $n,
      ga: Pn,
      aa: Ht,
      la: En,
      V: Sn,
      ia: On,
      ka: Rn,
      K: xn,
      da: kn,
      ca: Wn,
      _: Mn,
      $: Un,
      H: di,
      S: Ti,
      B: hi,
      p: fi,
      b: Zn,
      C: vi,
      ha: yi,
      c: ei,
      j: ri,
      i: Kn,
      x: _i,
      O: li,
      v: ci,
      G: mi,
      N: bi,
      A: pi,
      F: $i,
      Y: Ci,
      W: Ai,
      k: ti,
      f: Qn,
      e: Jn,
      g: qn,
      M: wi,
      m: ui,
      o: ni,
      R: ii,
      t: oi,
      ja: si,
      y: gi,
      r: ai,
      E: Pi,
      z: Ln,
      Z: Gn
    }, U = _r(), de = s._free = function(n) {
      return (de = s._free = U.sa)(n);
    }, pt = s._malloc = function(n) {
      return (pt = s._malloc = U.ta)(n);
    }, Zt = function(e) {
      return (Zt = U.va)(e);
    };
    s.__embind_initialize_bindings = function() {
      return (s.__embind_initialize_bindings = U.wa)();
    };
    var S = function(e, t) {
      return (S = U.xa)(e, t);
    }, We = function(e) {
      return (We = U.ya)(e);
    }, O = function() {
      return (O = U.za)();
    }, R = function(e) {
      return (R = U.Aa)(e);
    }, qt = function(e) {
      return (qt = U.Ba)(e);
    }, Jt = function(e) {
      return (Jt = U.Ca)(e);
    }, Kt = function(e, t, r) {
      return (Kt = U.Da)(e, t, r);
    }, Qt = function(e) {
      return (Qt = U.Ea)(e);
    };
    s.dynCall_viijii = function(n, e, t, r, i, a, o) {
      return (s.dynCall_viijii = U.Fa)(n, e, t, r, i, a, o);
    };
    var er = s.dynCall_jiii = function(n, e, t, r) {
      return (er = s.dynCall_jiii = U.Ga)(n, e, t, r);
    }, tr = s.dynCall_jiiii = function(n, e, t, r, i) {
      return (tr = s.dynCall_jiiii = U.Ha)(n, e, t, r, i);
    };
    s.dynCall_iiiiij = function(n, e, t, r, i, a, o) {
      return (s.dynCall_iiiiij = U.Ia)(n, e, t, r, i, a, o);
    }, s.dynCall_iiiiijj = function(n, e, t, r, i, a, o, u, c) {
      return (s.dynCall_iiiiijj = U.Ja)(n, e, t, r, i, a, o, u, c);
    }, s.dynCall_iiiiiijj = function(n, e, t, r, i, a, o, u, c, d) {
      return (s.dynCall_iiiiiijj = U.Ka)(n, e, t, r, i, a, o, u, c, d);
    };
    function Zn(n, e) {
      var t = O();
      try {
        return k(n)(e);
      } catch (r) {
        if (R(t), r !== r + 0)
          throw r;
        S(1, 0);
      }
    }
    function qn(n, e, t, r) {
      var i = O();
      try {
        k(n)(e, t, r);
      } catch (a) {
        if (R(i), a !== a + 0)
          throw a;
        S(1, 0);
      }
    }
    function Jn(n, e, t) {
      var r = O();
      try {
        k(n)(e, t);
      } catch (i) {
        if (R(r), i !== i + 0)
          throw i;
        S(1, 0);
      }
    }
    function Kn(n, e, t, r, i) {
      var a = O();
      try {
        return k(n)(e, t, r, i);
      } catch (o) {
        if (R(a), o !== o + 0)
          throw o;
        S(1, 0);
      }
    }
    function Qn(n, e) {
      var t = O();
      try {
        k(n)(e);
      } catch (r) {
        if (R(t), r !== r + 0)
          throw r;
        S(1, 0);
      }
    }
    function ei(n, e, t) {
      var r = O();
      try {
        return k(n)(e, t);
      } catch (i) {
        if (R(r), i !== i + 0)
          throw i;
        S(1, 0);
      }
    }
    function ti(n) {
      var e = O();
      try {
        k(n)();
      } catch (t) {
        if (R(e), t !== t + 0)
          throw t;
        S(1, 0);
      }
    }
    function ri(n, e, t, r) {
      var i = O();
      try {
        return k(n)(e, t, r);
      } catch (a) {
        if (R(i), a !== a + 0)
          throw a;
        S(1, 0);
      }
    }
    function ni(n, e, t, r, i, a) {
      var o = O();
      try {
        k(n)(e, t, r, i, a);
      } catch (u) {
        if (R(o), u !== u + 0)
          throw u;
        S(1, 0);
      }
    }
    function ii(n, e, t, r, i, a, o) {
      var u = O();
      try {
        k(n)(e, t, r, i, a, o);
      } catch (c) {
        if (R(u), c !== c + 0)
          throw c;
        S(1, 0);
      }
    }
    function ai(n, e, t, r, i, a, o, u, c, d, v) {
      var h = O();
      try {
        k(n)(e, t, r, i, a, o, u, c, d, v);
      } catch ($) {
        if (R(h), $ !== $ + 0)
          throw $;
        S(1, 0);
      }
    }
    function oi(n, e, t, r, i, a, o, u) {
      var c = O();
      try {
        k(n)(e, t, r, i, a, o, u);
      } catch (d) {
        if (R(c), d !== d + 0)
          throw d;
        S(1, 0);
      }
    }
    function ui(n, e, t, r, i) {
      var a = O();
      try {
        k(n)(e, t, r, i);
      } catch (o) {
        if (R(a), o !== o + 0)
          throw o;
        S(1, 0);
      }
    }
    function ci(n, e, t, r, i, a, o) {
      var u = O();
      try {
        return k(n)(e, t, r, i, a, o);
      } catch (c) {
        if (R(u), c !== c + 0)
          throw c;
        S(1, 0);
      }
    }
    function si(n, e, t, r, i, a, o, u, c) {
      var d = O();
      try {
        k(n)(e, t, r, i, a, o, u, c);
      } catch (v) {
        if (R(d), v !== v + 0)
          throw v;
        S(1, 0);
      }
    }
    function fi(n) {
      var e = O();
      try {
        return k(n)();
      } catch (t) {
        if (R(e), t !== t + 0)
          throw t;
        S(1, 0);
      }
    }
    function li(n, e, t, r, i, a, o) {
      var u = O();
      try {
        return k(n)(e, t, r, i, a, o);
      } catch (c) {
        if (R(u), c !== c + 0)
          throw c;
        S(1, 0);
      }
    }
    function vi(n, e, t, r) {
      var i = O();
      try {
        return k(n)(e, t, r);
      } catch (a) {
        if (R(i), a !== a + 0)
          throw a;
        S(1, 0);
      }
    }
    function di(n, e, t, r) {
      var i = O();
      try {
        return k(n)(e, t, r);
      } catch (a) {
        if (R(i), a !== a + 0)
          throw a;
        S(1, 0);
      }
    }
    function _i(n, e, t, r, i, a) {
      var o = O();
      try {
        return k(n)(e, t, r, i, a);
      } catch (u) {
        if (R(o), u !== u + 0)
          throw u;
        S(1, 0);
      }
    }
    function hi(n, e, t, r, i, a) {
      var o = O();
      try {
        return k(n)(e, t, r, i, a);
      } catch (u) {
        if (R(o), u !== u + 0)
          throw u;
        S(1, 0);
      }
    }
    function pi(n, e, t, r, i, a, o, u, c, d) {
      var v = O();
      try {
        return k(n)(e, t, r, i, a, o, u, c, d);
      } catch (h) {
        if (R(v), h !== h + 0)
          throw h;
        S(1, 0);
      }
    }
    function yi(n, e, t) {
      var r = O();
      try {
        return k(n)(e, t);
      } catch (i) {
        if (R(r), i !== i + 0)
          throw i;
        S(1, 0);
      }
    }
    function gi(n, e, t, r, i, a, o, u, c, d) {
      var v = O();
      try {
        k(n)(e, t, r, i, a, o, u, c, d);
      } catch (h) {
        if (R(v), h !== h + 0)
          throw h;
        S(1, 0);
      }
    }
    function mi(n, e, t, r, i, a, o, u) {
      var c = O();
      try {
        return k(n)(e, t, r, i, a, o, u);
      } catch (d) {
        if (R(c), d !== d + 0)
          throw d;
        S(1, 0);
      }
    }
    function bi(n, e, t, r, i, a, o, u, c) {
      var d = O();
      try {
        return k(n)(e, t, r, i, a, o, u, c);
      } catch (v) {
        if (R(d), v !== v + 0)
          throw v;
        S(1, 0);
      }
    }
    function wi(n, e, t, r, i, a, o) {
      var u = O();
      try {
        k(n)(e, t, r, i, a, o);
      } catch (c) {
        if (R(u), c !== c + 0)
          throw c;
        S(1, 0);
      }
    }
    function Ti(n, e, t, r) {
      var i = O();
      try {
        return k(n)(e, t, r);
      } catch (a) {
        if (R(i), a !== a + 0)
          throw a;
        S(1, 0);
      }
    }
    function $i(n, e, t, r, i, a, o, u, c, d, v, h) {
      var $ = O();
      try {
        return k(n)(e, t, r, i, a, o, u, c, d, v, h);
      } catch (m) {
        if (R($), m !== m + 0)
          throw m;
        S(1, 0);
      }
    }
    function Pi(n, e, t, r, i, a, o, u, c, d, v, h, $, m, D, W) {
      var L = O();
      try {
        k(n)(e, t, r, i, a, o, u, c, d, v, h, $, m, D, W);
      } catch (z) {
        if (R(L), z !== z + 0)
          throw z;
        S(1, 0);
      }
    }
    function Ci(n, e, t, r) {
      var i = O();
      try {
        return er(n, e, t, r);
      } catch (a) {
        if (R(i), a !== a + 0)
          throw a;
        S(1, 0);
      }
    }
    function Ai(n, e, t, r, i) {
      var a = O();
      try {
        return tr(n, e, t, r, i);
      } catch (o) {
        if (R(a), o !== o + 0)
          throw o;
        S(1, 0);
      }
    }
    var et;
    P = function n() {
      et || rr(), et || (P = n);
    };
    function rr() {
      if (w > 0 || (Fe(), w > 0))
        return;
      function n() {
        et || (et = !0, s.calledRun = !0, !be && (Oe(), T(s), s.onRuntimeInitialized && s.onRuntimeInitialized(), Re()));
      }
      s.setStatus ? (s.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          s.setStatus("");
        }, 1), n();
      }, 1)) : n();
    }
    if (s.preInit)
      for (typeof s.preInit == "function" && (s.preInit = [s.preInit]); s.preInit.length > 0; )
        s.preInit.pop()();
    return rr(), p.ready;
  };
}();
function Wi(y) {
  return xi(mt, y);
}
function Ii(y) {
  return yt.apply(this, arguments);
}
function yt() {
  return yt = sr(/* @__PURE__ */ Ie().mark(function y(p) {
    var s, T, F, I, N, V, H, E = arguments;
    return Ie().wrap(function(q) {
      for (; ; )
        switch (q.prev = q.next) {
          case 0:
            return s = E.length > 1 && E[1] !== void 0 ? E[1] : ye, T = s.tryHarder, F = T === void 0 ? ye.tryHarder : T, I = s.formats, N = I === void 0 ? ye.formats : I, V = s.maxSymbols, H = V === void 0 ? ye.maxSymbols : V, q.abrupt("return", ki(p, {
              tryHarder: F,
              formats: N,
              maxSymbols: H
            }, mt));
          case 2:
          case "end":
            return q.stop();
        }
    }, y);
  })), yt.apply(this, arguments);
}
function Hi(y) {
  return gt.apply(this, arguments);
}
function gt() {
  return gt = sr(/* @__PURE__ */ Ie().mark(function y(p) {
    var s, T, F, I, N, V, H, E = arguments;
    return Ie().wrap(function(q) {
      for (; ; )
        switch (q.prev = q.next) {
          case 0:
            return s = E.length > 1 && E[1] !== void 0 ? E[1] : ye, T = s.tryHarder, F = T === void 0 ? ye.tryHarder : T, I = s.formats, N = I === void 0 ? ye.formats : I, V = s.maxSymbols, H = V === void 0 ? ye.maxSymbols : V, q.abrupt("return", Di(p, {
              tryHarder: F,
              formats: N,
              maxSymbols: H
            }, mt));
          case 2:
          case "end":
            return q.stop();
        }
    }, y);
  })), gt.apply(this, arguments);
}
export {
  Li as ZXING_BARCODE_FORMAT_NAMES,
  Ni as ZXING_CHARACTOR_SET_NAMES,
  ye as defaultZXingReadOptions,
  Vi as defaultZXingWriteOptions,
  Wi as getZXingModule,
  Yi as purgeZXingModule,
  Hi as readBarcodesFromImageData,
  Ii as readBarcodesFromImageFile,
  Bi as setZXingModuleOverrides
};
