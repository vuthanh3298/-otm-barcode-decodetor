function N() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  N = function() {
    return n;
  };
  var o, n = {}, a = Object.prototype, i = a.hasOwnProperty, l = Object.defineProperty || function(r, e, t) {
    r[e] = t.value;
  }, f = typeof Symbol == "function" ? Symbol : {}, g = f.iterator || "@@iterator", m = f.asyncIterator || "@@asyncIterator", v = f.toStringTag || "@@toStringTag";
  function h(r, e, t) {
    return Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }), r[e];
  }
  try {
    h({}, "");
  } catch (r) {
    h = function(t, u, c) {
      return t[u] = c;
    };
  }
  function p(r, e, t, u) {
    var c = e && e.prototype instanceof I ? e : I, s = Object.create(c.prototype), w = new Z(u || []);
    return l(s, "_invoke", { value: ie(r, t, w) }), s;
  }
  function O(r, e, t) {
    try {
      return { type: "normal", arg: r.call(e, t) };
    } catch (u) {
      return { type: "throw", arg: u };
    }
  }
  n.wrap = p;
  var x = "suspendedStart", _ = "suspendedYield", P = "executing", E = "completed", y = {};
  function I() {
  }
  function S() {
  }
  function L() {
  }
  var d = {};
  h(d, g, function() {
    return this;
  });
  var $ = Object.getPrototypeOf, b = $ && $($(H([])));
  b && b !== a && i.call(b, g) && (d = b);
  var G = L.prototype = I.prototype = Object.create(d);
  function Q(r) {
    ["next", "throw", "return"].forEach(function(e) {
      h(r, e, function(t) {
        return this._invoke(e, t);
      });
    });
  }
  function U(r, e) {
    function t(c, s, w, M) {
      var F = O(r[c], r, s);
      if (F.type !== "throw") {
        var A = F.arg, C = A.value;
        return C && z(C) == "object" && i.call(C, "__await") ? e.resolve(C.__await).then(function(B) {
          t("next", B, w, M);
        }, function(B) {
          t("throw", B, w, M);
        }) : e.resolve(C).then(function(B) {
          A.value = B, w(A);
        }, function(B) {
          return t("throw", B, w, M);
        });
      }
      M(F.arg);
    }
    var u;
    l(this, "_invoke", { value: function(s, w) {
      function M() {
        return new e(function(F, A) {
          t(s, w, F, A);
        });
      }
      return u = u ? u.then(M, M) : M();
    } });
  }
  function ie(r, e, t) {
    var u = x;
    return function(c, s) {
      if (u === P)
        throw new Error("Generator is already running");
      if (u === E) {
        if (c === "throw")
          throw s;
        return { value: o, done: !0 };
      }
      for (t.method = c, t.arg = s; ; ) {
        var w = t.delegate;
        if (w) {
          var M = V(w, t);
          if (M) {
            if (M === y)
              continue;
            return M;
          }
        }
        if (t.method === "next")
          t.sent = t._sent = t.arg;
        else if (t.method === "throw") {
          if (u === x)
            throw u = E, t.arg;
          t.dispatchException(t.arg);
        } else
          t.method === "return" && t.abrupt("return", t.arg);
        u = P;
        var F = O(r, e, t);
        if (F.type === "normal") {
          if (u = t.done ? E : _, F.arg === y)
            continue;
          return { value: F.arg, done: t.done };
        }
        F.type === "throw" && (u = E, t.method = "throw", t.arg = F.arg);
      }
    };
  }
  function V(r, e) {
    var t = e.method, u = r.iterator[t];
    if (u === o)
      return e.delegate = null, t === "throw" && r.iterator.return && (e.method = "return", e.arg = o, V(r, e), e.method === "throw") || t !== "return" && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + t + "' method")), y;
    var c = O(u, r.iterator, e.arg);
    if (c.type === "throw")
      return e.method = "throw", e.arg = c.arg, e.delegate = null, y;
    var s = c.arg;
    return s ? s.done ? (e[r.resultName] = s.value, e.next = r.nextLoc, e.method !== "return" && (e.method = "next", e.arg = o), e.delegate = null, y) : s : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, y);
  }
  function ue(r) {
    var e = { tryLoc: r[0] };
    1 in r && (e.catchLoc = r[1]), 2 in r && (e.finallyLoc = r[2], e.afterLoc = r[3]), this.tryEntries.push(e);
  }
  function R(r) {
    var e = r.completion || {};
    e.type = "normal", delete e.arg, r.completion = e;
  }
  function Z(r) {
    this.tryEntries = [{ tryLoc: "root" }], r.forEach(ue, this), this.reset(!0);
  }
  function H(r) {
    if (r || r === "") {
      var e = r[g];
      if (e)
        return e.call(r);
      if (typeof r.next == "function")
        return r;
      if (!isNaN(r.length)) {
        var t = -1, u = function c() {
          for (; ++t < r.length; )
            if (i.call(r, t))
              return c.value = r[t], c.done = !1, c;
          return c.value = o, c.done = !0, c;
        };
        return u.next = u;
      }
    }
    throw new TypeError(z(r) + " is not iterable");
  }
  return S.prototype = L, l(G, "constructor", { value: L, configurable: !0 }), l(L, "constructor", { value: S, configurable: !0 }), S.displayName = h(L, v, "GeneratorFunction"), n.isGeneratorFunction = function(r) {
    var e = typeof r == "function" && r.constructor;
    return !!e && (e === S || (e.displayName || e.name) === "GeneratorFunction");
  }, n.mark = function(r) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(r, L) : (r.__proto__ = L, h(r, v, "GeneratorFunction")), r.prototype = Object.create(G), r;
  }, n.awrap = function(r) {
    return { __await: r };
  }, Q(U.prototype), h(U.prototype, m, function() {
    return this;
  }), n.AsyncIterator = U, n.async = function(r, e, t, u, c) {
    c === void 0 && (c = Promise);
    var s = new U(p(r, e, t, u), c);
    return n.isGeneratorFunction(e) ? s : s.next().then(function(w) {
      return w.done ? w.value : s.next();
    });
  }, Q(G), h(G, v, "Generator"), h(G, g, function() {
    return this;
  }), h(G, "toString", function() {
    return "[object Generator]";
  }), n.keys = function(r) {
    var e = Object(r), t = [];
    for (var u in e)
      t.push(u);
    return t.reverse(), function c() {
      for (; t.length; ) {
        var s = t.pop();
        if (s in e)
          return c.value = s, c.done = !1, c;
      }
      return c.done = !0, c;
    };
  }, n.values = H, Z.prototype = { constructor: Z, reset: function(e) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = o, this.done = !1, this.delegate = null, this.method = "next", this.arg = o, this.tryEntries.forEach(R), !e)
      for (var t in this)
        t.charAt(0) === "t" && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = o);
  }, stop: function() {
    this.done = !0;
    var e = this.tryEntries[0].completion;
    if (e.type === "throw")
      throw e.arg;
    return this.rval;
  }, dispatchException: function(e) {
    if (this.done)
      throw e;
    var t = this;
    function u(A, C) {
      return w.type = "throw", w.arg = e, t.next = A, C && (t.method = "next", t.arg = o), !!C;
    }
    for (var c = this.tryEntries.length - 1; c >= 0; --c) {
      var s = this.tryEntries[c], w = s.completion;
      if (s.tryLoc === "root")
        return u("end");
      if (s.tryLoc <= this.prev) {
        var M = i.call(s, "catchLoc"), F = i.call(s, "finallyLoc");
        if (M && F) {
          if (this.prev < s.catchLoc)
            return u(s.catchLoc, !0);
          if (this.prev < s.finallyLoc)
            return u(s.finallyLoc);
        } else if (M) {
          if (this.prev < s.catchLoc)
            return u(s.catchLoc, !0);
        } else {
          if (!F)
            throw new Error("try statement without catch or finally");
          if (this.prev < s.finallyLoc)
            return u(s.finallyLoc);
        }
      }
    }
  }, abrupt: function(e, t) {
    for (var u = this.tryEntries.length - 1; u >= 0; --u) {
      var c = this.tryEntries[u];
      if (c.tryLoc <= this.prev && i.call(c, "finallyLoc") && this.prev < c.finallyLoc) {
        var s = c;
        break;
      }
    }
    s && (e === "break" || e === "continue") && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
    var w = s ? s.completion : {};
    return w.type = e, w.arg = t, s ? (this.method = "next", this.next = s.finallyLoc, y) : this.complete(w);
  }, complete: function(e, t) {
    if (e.type === "throw")
      throw e.arg;
    return e.type === "break" || e.type === "continue" ? this.next = e.arg : e.type === "return" ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : e.type === "normal" && t && (this.next = t), y;
  }, finish: function(e) {
    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
      var u = this.tryEntries[t];
      if (u.finallyLoc === e)
        return this.complete(u.completion, u.afterLoc), R(u), y;
    }
  }, catch: function(e) {
    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
      var u = this.tryEntries[t];
      if (u.tryLoc === e) {
        var c = u.completion;
        if (c.type === "throw") {
          var s = c.arg;
          R(u);
        }
        return s;
      }
    }
    throw new Error("illegal catch attempt");
  }, delegateYield: function(e, t, u) {
    return this.delegate = { iterator: H(e), resultName: t, nextLoc: u }, this.method === "next" && (this.arg = o), y;
  } }, n;
}
function J(o, n) {
  var a = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(o);
    n && (i = i.filter(function(l) {
      return Object.getOwnPropertyDescriptor(o, l).enumerable;
    })), a.push.apply(a, i);
  }
  return a;
}
function D(o) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2 ? J(Object(a), !0).forEach(function(i) {
      se(o, i, a[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : J(Object(a)).forEach(function(i) {
      Object.defineProperty(o, i, Object.getOwnPropertyDescriptor(a, i));
    });
  }
  return o;
}
function se(o, n, a) {
  return n = ce(n), n in o ? Object.defineProperty(o, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : o[n] = a, o;
}
function ce(o) {
  var n = le(o, "string");
  return z(n) === "symbol" ? n : String(n);
}
function le(o, n) {
  if (z(o) !== "object" || o === null)
    return o;
  var a = o[Symbol.toPrimitive];
  if (a !== void 0) {
    var i = a.call(o, n || "default");
    if (z(i) !== "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(o);
}
function ee(o, n, a, i, l, f, g) {
  try {
    var m = o[f](g), v = m.value;
  } catch (h) {
    a(h);
    return;
  }
  m.done ? n(v) : Promise.resolve(v).then(i, l);
}
function K(o) {
  return function() {
    var n = this, a = arguments;
    return new Promise(function(i, l) {
      var f = o.apply(n, a);
      function g(v) {
        ee(f, i, l, g, m, "next", v);
      }
      function m(v) {
        ee(f, i, l, g, m, "throw", v);
      }
      g(void 0);
    });
  };
}
function z(o) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, z(o);
}
var te = function(n) {
  var a, i = /* @__PURE__ */ new Set(), l = function(p, O) {
    var x = typeof p == "function" ? p(a) : p;
    if (!Object.is(x, a)) {
      var _ = a;
      a = (O != null ? O : z(x) !== "object") ? x : Object.assign({}, a, x), i.forEach(function(P) {
        return P(a, _);
      });
    }
  }, f = function() {
    return a;
  }, g = function(p) {
    return i.add(p), function() {
      return i.delete(p);
    };
  }, m = function() {
    i.clear();
  }, v = {
    setState: l,
    getState: f,
    subscribe: g,
    destroy: m
  };
  return a = n(l, f, v), v;
}, fe = function(n) {
  return n ? te(n) : te;
}, de = {
  locateFile: function(n, a) {
    var i, l = (i = n.match(/_(.+?)\.wasm$/)) === null || i === void 0 ? void 0 : i[1];
    return l ? "https://fastly.jsdelivr.net/npm/@sec-ant/zxing-wasm@".concat("2.1.8", "/dist/", l, "/").concat(n) : a + n;
  }
}, j = fe()(function() {
  return {
    zxingModuleWeakMap: /* @__PURE__ */ new WeakMap(),
    zxingModuleOverrides: de
  };
});
function he(o) {
  j.setState({
    zxingModuleOverrides: o
  });
}
function Y(o) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : j.getState().zxingModuleOverrides, a = j.getState(), i = a.zxingModuleWeakMap, l = i.get(o);
  if (l && Object.is(n, j.getState().zxingModuleOverrides))
    return l;
  j.setState({
    zxingModuleOverrides: n
  });
  var f = o(n);
  return i.set(o, f), f;
}
function ge() {
  j.setState({
    zxingModuleWeakMap: /* @__PURE__ */ new WeakMap()
  });
}
var re = ["Aztec", "Codabar", "Code128", "Code39", "Code93", "DataBar", "DataBarExpanded", "DataMatrix", "EAN-13", "EAN-8", "ITF", "Linear-Codes", "Matrix-Codes", "MaxiCode", "MicroQRCode", "None", "PDF417", "QRCode", "UPC-A", "UPC-E"], pe = ["Cp437", "ISO-8859-1", "ISO-8859-2", "ISO-8859-3", "ISO-8859-4", "ISO-8859-5", "ISO-8859-6", "ISO-8859-7", "ISO-8859-8", "ISO-8859-9", "ISO-8859-10", "ISO-8859-11", "ISO-8859-13", "ISO-8859-14", "ISO-8859-15", "ISO-8859-16", "SJIS", "Shift_JIS", "Cp1250", "windows-1250", "Cp1251", "windows-1251", "Cp1252", "windows-1252", "Cp1256", "windows-1256", "UTF-16BE", "UTF-16LE", "UTF-32BE", "UTF-32LE", "UnicodeBigUnmarked", "UnicodeBig", "UTF-8", "ASCII", "US-ASCII", "Big5", "GB2312", "GB18030", "EUC-CN", "GBK", "EUC-KR", "BINARY"], T = {
  tryHarder: !0,
  formats: [],
  maxSymbols: 255
}, k = {
  format: "QRCode",
  charset: "UTF-8",
  quietZone: 10,
  width: 200,
  height: 200,
  eccLevel: -1
};
function ve(o) {
  return X.apply(this, arguments);
}
function X() {
  return X = K(/* @__PURE__ */ N().mark(function o(n) {
    var a, i, l, f, g, m, v, h, p, O, x, _, P, E, y, I, S = arguments;
    return N().wrap(function(d) {
      for (; ; )
        switch (d.prev = d.next) {
          case 0:
            return a = S.length > 1 && S[1] !== void 0 ? S[1] : T, i = a.tryHarder, l = i === void 0 ? T.tryHarder : i, f = a.formats, g = f === void 0 ? T.formats : f, m = a.maxSymbols, v = m === void 0 ? T.maxSymbols : m, h = S.length > 2 ? S[2] : void 0, d.next = 4, Y(h, j.getState().zxingModuleOverrides);
          case 4:
            return p = d.sent, O = n.size, d.t0 = Uint8Array, d.next = 9, n.arrayBuffer();
          case 9:
            for (d.t1 = d.sent, x = new d.t0(d.t1), _ = p._malloc(O), p.HEAP8.set(x, _), P = p.readBarcodesFromImage(_, O, l, oe(g), v), p._free(_), E = [], y = 0; y < P.size(); ++y)
              I = P.get(y), E.push(D(D({}, I), {}, {
                format: ae(I.format)
              }));
            return d.abrupt("return", E);
          case 18:
          case "end":
            return d.stop();
        }
    }, o);
  })), X.apply(this, arguments);
}
function ye(o) {
  return W.apply(this, arguments);
}
function W() {
  return W = K(/* @__PURE__ */ N().mark(function o(n) {
    var a, i, l, f, g, m, v, h, p, O, x, _, P, E, y, I, S, L, d = arguments;
    return N().wrap(function(b) {
      for (; ; )
        switch (b.prev = b.next) {
          case 0:
            return a = d.length > 1 && d[1] !== void 0 ? d[1] : T, i = a.tryHarder, l = i === void 0 ? T.tryHarder : i, f = a.formats, g = f === void 0 ? T.formats : f, m = a.maxSymbols, v = m === void 0 ? T.maxSymbols : m, h = d.length > 2 ? d[2] : void 0, b.next = 4, Y(h, j.getState().zxingModuleOverrides);
          case 4:
            for (p = b.sent, O = n.data, x = n.width, _ = n.height, P = n.data.byteLength, E = p._malloc(P), p.HEAP8.set(O, E), y = p.readBarcodesFromPixmap(E, x, _, l, oe(g), v), p._free(E), I = [], S = 0; S < y.size(); ++S)
              L = y.get(S), I.push(D(D({}, L), {}, {
                format: ae(L.format)
              }));
            return b.abrupt("return", I);
          case 13:
          case "end":
            return b.stop();
        }
    }, o);
  })), W.apply(this, arguments);
}
function me(o) {
  return q.apply(this, arguments);
}
function q() {
  return q = K(/* @__PURE__ */ N().mark(function o(n) {
    var a, i, l, f, g, m, v, h, p, O, x, _, P, E, y, I, S, L, d = arguments;
    return N().wrap(function(b) {
      for (; ; )
        switch (b.prev = b.next) {
          case 0:
            return a = d.length > 1 && d[1] !== void 0 ? d[1] : k, i = a.format, l = i === void 0 ? k.format : i, f = a.charset, g = f === void 0 ? k.charset : f, m = a.quietZone, v = m === void 0 ? k.quietZone : m, h = a.width, p = h === void 0 ? k.width : h, O = a.height, x = O === void 0 ? k.height : O, _ = a.eccLevel, P = _ === void 0 ? k.eccLevel : _, E = d.length > 2 ? d[2] : void 0, b.next = 4, Y(E, j.getState().zxingModuleOverrides);
          case 4:
            if (y = b.sent, I = y.writeBarcodeToImage(n, l, g, v, p, x, P), S = I.image, L = I.error, !S) {
              b.next = 11;
              break;
            }
            return b.abrupt("return", {
              image: new Blob([new Uint8Array(S)], {
                type: "image/png"
              }),
              error: ""
            });
          case 11:
            return b.abrupt("return", {
              image: null,
              error: L
            });
          case 12:
          case "end":
            return b.stop();
        }
    }, o);
  })), q.apply(this, arguments);
}
function oe(o) {
  return o.join("|");
}
function ae(o) {
  for (var n = ne(o), a = 0, i = re.length - 1; a <= i; ) {
    var l = Math.floor((a + i) / 2), f = re[l], g = ne(f);
    if (g === n)
      return f;
    g < n ? a = l + 1 : i = l - 1;
  }
  return "None";
}
function ne(o) {
  return o.toLowerCase().replace(/_-\[\]/g, "");
}
export {
  re as Z,
  ye as a,
  pe as b,
  k as c,
  T as d,
  Y as g,
  ge as p,
  ve as r,
  he as s,
  me as w
};
