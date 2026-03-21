var Pd = (e) => {
  throw TypeError(e);
};
var Sc = (e, t, r) => t.has(e) || Pd("Cannot " + r);
var K = (e, t, r) => (Sc(e, t, "read from private field"), r ? r.call(e) : t.get(e)), We = (e, t, r) => t.has(e) ? Pd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), me = (e, t, r, n) => (Sc(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), Ye = (e, t, r) => (Sc(e, t, "access private method"), r);
import * as V from "react";
import E, { forwardRef as js, createElement as na, isValidElement as Lt, Children as tn, PureComponent as Yt, useRef as So, useImperativeHandle as rw, useState as $r, useCallback as nw, useEffect as $s, useMemo as ia, cloneElement as Qe, useContext as fr, createContext as fn, Component as um } from "react";
import "react-dom";
var ro = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Me(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fu = { exports: {} }, Mi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad;
function iw() {
  if (Ad) return Mi;
  Ad = 1;
  var e = E, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, c, u) {
    var l, f = {}, d = null, h = null;
    u !== void 0 && (d = "" + u), c.key !== void 0 && (d = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (l in c) n.call(c, l) && !a.hasOwnProperty(l) && (f[l] = c[l]);
    if (s && s.defaultProps) for (l in c = s.defaultProps, c) f[l] === void 0 && (f[l] = c[l]);
    return { $$typeof: t, type: s, key: d, ref: h, props: f, _owner: i.current };
  }
  return Mi.Fragment = r, Mi.jsx = o, Mi.jsxs = o, Mi;
}
var Ci = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Td;
function aw() {
  return Td || (Td = 1, process.env.NODE_ENV !== "production" && function() {
    var e = E, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = Symbol.iterator, v = "@@iterator";
    function p(A) {
      if (A === null || typeof A != "object")
        return null;
      var G = y && A[y] || A[v];
      return typeof G == "function" ? G : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(A) {
      {
        for (var G = arguments.length, Z = new Array(G > 1 ? G - 1 : 0), ce = 1; ce < G; ce++)
          Z[ce - 1] = arguments[ce];
        b("error", A, Z);
      }
    }
    function b(A, G, Z) {
      {
        var ce = g.ReactDebugCurrentFrame, we = ce.getStackAddendum();
        we !== "" && (G += "%s", Z = Z.concat([we]));
        var Ce = Z.map(function(ye) {
          return String(ye);
        });
        Ce.unshift("Warning: " + G), Function.prototype.apply.call(console[A], console, Ce);
      }
    }
    var S = !1, m = !1, w = !1, O = !1, _ = !1, T;
    T = Symbol.for("react.module.reference");
    function I(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === n || A === a || _ || A === i || A === u || A === l || O || A === h || S || m || w || typeof A == "object" && A !== null && (A.$$typeof === d || A.$$typeof === f || A.$$typeof === o || A.$$typeof === s || A.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === T || A.getModuleId !== void 0));
    }
    function j(A, G, Z) {
      var ce = A.displayName;
      if (ce)
        return ce;
      var we = G.displayName || G.name || "";
      return we !== "" ? Z + "(" + we + ")" : Z;
    }
    function $(A) {
      return A.displayName || "Context";
    }
    function k(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case s:
            var G = A;
            return $(G) + ".Consumer";
          case o:
            var Z = A;
            return $(Z._context) + ".Provider";
          case c:
            return j(A, A.render, "ForwardRef");
          case f:
            var ce = A.displayName || null;
            return ce !== null ? ce : k(A.type) || "Memo";
          case d: {
            var we = A, Ce = we._payload, ye = we._init;
            try {
              return k(ye(Ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, L = 0, N, F, U, Y, M, R, W;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function J() {
      {
        if (L === 0) {
          N = console.log, F = console.info, U = console.warn, Y = console.error, M = console.group, R = console.groupCollapsed, W = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        L++;
      }
    }
    function te() {
      {
        if (L--, L === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, A, {
              value: N
            }),
            info: D({}, A, {
              value: F
            }),
            warn: D({}, A, {
              value: U
            }),
            error: D({}, A, {
              value: Y
            }),
            group: D({}, A, {
              value: M
            }),
            groupCollapsed: D({}, A, {
              value: R
            }),
            groupEnd: D({}, A, {
              value: W
            })
          });
        }
        L < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = g.ReactCurrentDispatcher, ae;
    function ie(A, G, Z) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (we) {
            var ce = we.stack.trim().match(/\n( *(at )?)/);
            ae = ce && ce[1] || "";
          }
        return `
` + ae + A;
      }
    }
    var z = !1, Q;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new re();
    }
    function C(A, G) {
      if (!A || z)
        return "";
      {
        var Z = Q.get(A);
        if (Z !== void 0)
          return Z;
      }
      var ce;
      z = !0;
      var we = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ce;
      Ce = ne.current, ne.current = null, J();
      try {
        if (G) {
          var ye = function() {
            throw Error();
          };
          if (Object.defineProperty(ye.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ye, []);
            } catch (dt) {
              ce = dt;
            }
            Reflect.construct(A, [], ye);
          } else {
            try {
              ye.call();
            } catch (dt) {
              ce = dt;
            }
            A.call(ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dt) {
            ce = dt;
          }
          A();
        }
      } catch (dt) {
        if (dt && ce && typeof dt.stack == "string") {
          for (var pe = dt.stack.split(`
`), st = ce.stack.split(`
`), Ue = pe.length - 1, Ge = st.length - 1; Ue >= 1 && Ge >= 0 && pe[Ue] !== st[Ge]; )
            Ge--;
          for (; Ue >= 1 && Ge >= 0; Ue--, Ge--)
            if (pe[Ue] !== st[Ge]) {
              if (Ue !== 1 || Ge !== 1)
                do
                  if (Ue--, Ge--, Ge < 0 || pe[Ue] !== st[Ge]) {
                    var Ot = `
` + pe[Ue].replace(" at new ", " at ");
                    return A.displayName && Ot.includes("<anonymous>") && (Ot = Ot.replace("<anonymous>", A.displayName)), typeof A == "function" && Q.set(A, Ot), Ot;
                  }
                while (Ue >= 1 && Ge >= 0);
              break;
            }
        }
      } finally {
        z = !1, ne.current = Ce, te(), Error.prepareStackTrace = we;
      }
      var xn = A ? A.displayName || A.name : "", Lr = xn ? ie(xn) : "";
      return typeof A == "function" && Q.set(A, Lr), Lr;
    }
    function he(A, G, Z) {
      return C(A, !1);
    }
    function H(A) {
      var G = A.prototype;
      return !!(G && G.isReactComponent);
    }
    function be(A, G, Z) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return C(A, H(A));
      if (typeof A == "string")
        return ie(A);
      switch (A) {
        case u:
          return ie("Suspense");
        case l:
          return ie("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case c:
            return he(A.render);
          case f:
            return be(A.type, G, Z);
          case d: {
            var ce = A, we = ce._payload, Ce = ce._init;
            try {
              return be(Ce(we), G, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, qe = {}, Mt = g.ReactDebugCurrentFrame;
    function Ct(A) {
      if (A) {
        var G = A._owner, Z = be(A.type, A._source, G ? G.type : null);
        Mt.setExtraStackFrame(Z);
      } else
        Mt.setExtraStackFrame(null);
    }
    function mn(A, G, Z, ce, we) {
      {
        var Ce = Function.call.bind(xe);
        for (var ye in A)
          if (Ce(A, ye)) {
            var pe = void 0;
            try {
              if (typeof A[ye] != "function") {
                var st = Error((ce || "React class") + ": " + Z + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw st.name = "Invariant Violation", st;
              }
              pe = A[ye](G, ye, ce, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ue) {
              pe = Ue;
            }
            pe && !(pe instanceof Error) && (Ct(we), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", Z, ye, typeof pe), Ct(null)), pe instanceof Error && !(pe.message in qe) && (qe[pe.message] = !0, Ct(we), x("Failed %s type: %s", Z, pe.message), Ct(null));
          }
      }
    }
    var Vt = Array.isArray;
    function mt(A) {
      return Vt(A);
    }
    function Ei(A) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, Z = G && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return Z;
      }
    }
    function ji(A) {
      try {
        return gn(A), !1;
      } catch {
        return !0;
      }
    }
    function gn(A) {
      return "" + A;
    }
    function $i(A) {
      if (ji(A))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ei(A)), gn(A);
    }
    var yr = g.ReactCurrentOwner, Lx = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yd, md, gc;
    gc = {};
    function Bx(A) {
      if (xe.call(A, "ref")) {
        var G = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function Fx(A) {
      if (xe.call(A, "key")) {
        var G = Object.getOwnPropertyDescriptor(A, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function Wx(A, G) {
      if (typeof A.ref == "string" && yr.current && G && yr.current.stateNode !== G) {
        var Z = k(yr.current.type);
        gc[Z] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(yr.current.type), A.ref), gc[Z] = !0);
      }
    }
    function zx(A, G) {
      {
        var Z = function() {
          yd || (yd = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        Z.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function Ux(A, G) {
      {
        var Z = function() {
          md || (md = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        Z.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var qx = function(A, G, Z, ce, we, Ce, ye) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: A,
        key: G,
        ref: Z,
        props: ye,
        // Record the component responsible for creating this element.
        _owner: Ce
      };
      return pe._store = {}, Object.defineProperty(pe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.defineProperty(pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
    };
    function Gx(A, G, Z, ce, we) {
      {
        var Ce, ye = {}, pe = null, st = null;
        Z !== void 0 && ($i(Z), pe = "" + Z), Fx(G) && ($i(G.key), pe = "" + G.key), Bx(G) && (st = G.ref, Wx(G, we));
        for (Ce in G)
          xe.call(G, Ce) && !Lx.hasOwnProperty(Ce) && (ye[Ce] = G[Ce]);
        if (A && A.defaultProps) {
          var Ue = A.defaultProps;
          for (Ce in Ue)
            ye[Ce] === void 0 && (ye[Ce] = Ue[Ce]);
        }
        if (pe || st) {
          var Ge = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          pe && zx(ye, Ge), st && Ux(ye, Ge);
        }
        return qx(A, pe, st, we, ce, yr.current, ye);
      }
    }
    var bc = g.ReactCurrentOwner, gd = g.ReactDebugCurrentFrame;
    function bn(A) {
      if (A) {
        var G = A._owner, Z = be(A.type, A._source, G ? G.type : null);
        gd.setExtraStackFrame(Z);
      } else
        gd.setExtraStackFrame(null);
    }
    var xc;
    xc = !1;
    function wc(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function bd() {
      {
        if (bc.current) {
          var A = k(bc.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function Yx(A) {
      return "";
    }
    var xd = {};
    function Hx(A) {
      {
        var G = bd();
        if (!G) {
          var Z = typeof A == "string" ? A : A.displayName || A.name;
          Z && (G = `

Check the top-level render call using <` + Z + ">.");
        }
        return G;
      }
    }
    function wd(A, G) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var Z = Hx(G);
        if (xd[Z])
          return;
        xd[Z] = !0;
        var ce = "";
        A && A._owner && A._owner !== bc.current && (ce = " It was passed a child from " + k(A._owner.type) + "."), bn(A), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, ce), bn(null);
      }
    }
    function Od(A, G) {
      {
        if (typeof A != "object")
          return;
        if (mt(A))
          for (var Z = 0; Z < A.length; Z++) {
            var ce = A[Z];
            wc(ce) && wd(ce, G);
          }
        else if (wc(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var we = p(A);
          if (typeof we == "function" && we !== A.entries)
            for (var Ce = we.call(A), ye; !(ye = Ce.next()).done; )
              wc(ye.value) && wd(ye.value, G);
        }
      }
    }
    function Kx(A) {
      {
        var G = A.type;
        if (G == null || typeof G == "string")
          return;
        var Z;
        if (typeof G == "function")
          Z = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        G.$$typeof === f))
          Z = G.propTypes;
        else
          return;
        if (Z) {
          var ce = k(G);
          mn(Z, A.props, "prop", ce, A);
        } else if (G.PropTypes !== void 0 && !xc) {
          xc = !0;
          var we = k(G);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vx(A) {
      {
        for (var G = Object.keys(A.props), Z = 0; Z < G.length; Z++) {
          var ce = G[Z];
          if (ce !== "children" && ce !== "key") {
            bn(A), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), bn(null);
            break;
          }
        }
        A.ref !== null && (bn(A), x("Invalid attribute `ref` supplied to `React.Fragment`."), bn(null));
      }
    }
    var Sd = {};
    function _d(A, G, Z, ce, we, Ce) {
      {
        var ye = I(A);
        if (!ye) {
          var pe = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var st = Yx();
          st ? pe += st : pe += bd();
          var Ue;
          A === null ? Ue = "null" : mt(A) ? Ue = "array" : A !== void 0 && A.$$typeof === t ? (Ue = "<" + (k(A.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : Ue = typeof A, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ue, pe);
        }
        var Ge = Gx(A, G, Z, we, Ce);
        if (Ge == null)
          return Ge;
        if (ye) {
          var Ot = G.children;
          if (Ot !== void 0)
            if (ce)
              if (mt(Ot)) {
                for (var xn = 0; xn < Ot.length; xn++)
                  Od(Ot[xn], A);
                Object.freeze && Object.freeze(Ot);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Od(Ot, A);
        }
        if (xe.call(G, "key")) {
          var Lr = k(A), dt = Object.keys(G).filter(function(tw) {
            return tw !== "key";
          }), Oc = dt.length > 0 ? "{key: someKey, " + dt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Sd[Lr + Oc]) {
            var ew = dt.length > 0 ? "{" + dt.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Oc, Lr, ew, Lr), Sd[Lr + Oc] = !0;
          }
        }
        return A === n ? Vx(Ge) : Kx(Ge), Ge;
      }
    }
    function Xx(A, G, Z) {
      return _d(A, G, Z, !0);
    }
    function Qx(A, G, Z) {
      return _d(A, G, Z, !1);
    }
    var Jx = Qx, Zx = Xx;
    Ci.Fragment = n, Ci.jsx = Jx, Ci.jsxs = Zx;
  }()), Ci;
}
process.env.NODE_ENV === "production" ? fu.exports = iw() : fu.exports = aw();
var P = fu.exports;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ow = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), lm = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cw = js(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: a,
    iconNode: o,
    ...s
  }, c) => na(
    "svg",
    {
      ref: c,
      ...sw,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: lm("lucide", i),
      ...s
    },
    [
      ...o.map(([u, l]) => na(u, l)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = (e, t) => {
  const r = js(
    ({ className: n, ...i }, a) => na(cw, {
      ref: a,
      iconNode: t,
      className: lm(`lucide-${ow(e)}`, n),
      ...i
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uw = Ir("Banknote", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lw = Ir("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fw = Ir("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dw = Ir("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hw = Ir("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pw = Ir("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vw = Ir("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fm = Ir("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
var rf = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, aa = typeof window > "u" || "Deno" in globalThis;
function du() {
}
function Ed(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function yw(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Xi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function hu(e, t) {
  if (e === t)
    return e;
  const r = jd(e) && jd(t);
  if (r || $d(e) && $d(t)) {
    const n = r ? e : Object.keys(e), i = n.length, a = r ? t : Object.keys(t), o = a.length, s = r ? [] : {}, c = new Set(n);
    let u = 0;
    for (let l = 0; l < o; l++) {
      const f = r ? l : a[l];
      (!r && c.has(f) || r) && e[f] === void 0 && t[f] === void 0 ? (s[f] = void 0, u++) : (s[f] = hu(e[f], t[f]), s[f] === e[f] && e[f] !== void 0 && u++);
    }
    return i === o && u === i ? e : s;
  }
  return t;
}
function pu(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function jd(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function $d(e) {
  if (!Md(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!Md(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Md(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Cd(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return hu(e, t);
      } catch (n) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${n}`
        ), n;
      }
    return hu(e, t);
  }
  return t;
}
function mw(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var Qr, _r, Rn, om, gw = (om = class extends rf {
  constructor() {
    super();
    We(this, Qr);
    We(this, _r);
    We(this, Rn);
    me(this, Rn, (t) => {
      if (!aa && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    K(this, _r) || this.setEventListener(K(this, Rn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = K(this, _r)) == null || t.call(this), me(this, _r, void 0));
  }
  setEventListener(t) {
    var r;
    me(this, Rn, t), (r = K(this, _r)) == null || r.call(this), me(this, _r, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    K(this, Qr) !== t && (me(this, Qr, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((r) => {
      r(t);
    });
  }
  isFocused() {
    var t;
    return typeof K(this, Qr) == "boolean" ? K(this, Qr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Qr = new WeakMap(), _r = new WeakMap(), Rn = new WeakMap(), om), bw = new gw(), Dn, Pr, Ln, sm, xw = (sm = class extends rf {
  constructor() {
    super();
    We(this, Dn, !0);
    We(this, Pr);
    We(this, Ln);
    me(this, Ln, (t) => {
      if (!aa && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    K(this, Pr) || this.setEventListener(K(this, Ln));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = K(this, Pr)) == null || t.call(this), me(this, Pr, void 0));
  }
  setEventListener(t) {
    var r;
    me(this, Ln, t), (r = K(this, Pr)) == null || r.call(this), me(this, Pr, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    K(this, Dn) !== t && (me(this, Dn, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return K(this, Dn);
  }
}, Dn = new WeakMap(), Pr = new WeakMap(), Ln = new WeakMap(), sm), ww = new xw();
function Id() {
  let e, t;
  const r = new Promise((i, a) => {
    e = i, t = a;
  });
  r.status = "pending", r.catch(() => {
  });
  function n(i) {
    Object.assign(r, i), delete r.resolve, delete r.reject;
  }
  return r.resolve = (i) => {
    n({
      status: "fulfilled",
      value: i
    }), e(i);
  }, r.reject = (i) => {
    n({
      status: "rejected",
      reason: i
    }), t(i);
  }, r;
}
function Ow(e) {
  return (e ?? "online") === "online" ? ww.isOnline() : !0;
}
var Sw = (e) => setTimeout(e, 0);
function _w() {
  let e = [], t = 0, r = (s) => {
    s();
  }, n = (s) => {
    s();
  }, i = Sw;
  const a = (s) => {
    t ? e.push(s) : i(() => {
      r(s);
    });
  }, o = () => {
    const s = e;
    e = [], s.length && i(() => {
      n(() => {
        s.forEach((c) => {
          r(c);
        });
      });
    });
  };
  return {
    batch: (s) => {
      let c;
      t++;
      try {
        c = s();
      } finally {
        t--, t || o();
      }
      return c;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (s) => (...c) => {
      a(() => {
        s(...c);
      });
    },
    schedule: a,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (s) => {
      r = s;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (s) => {
      n = s;
    },
    setScheduler: (s) => {
      i = s;
    }
  };
}
var dm = _w();
function Pw(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ow(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
var ht, ve, Ga, ct, Jr, Bn, Ar, Tr, Ya, Fn, Wn, Zr, en, Er, zn, Te, Ki, vu, yu, mu, gu, bu, xu, wu, hm, cm, Aw = (cm = class extends rf {
  constructor(t, r) {
    super();
    We(this, Te);
    We(this, ht);
    We(this, ve);
    We(this, Ga);
    We(this, ct);
    We(this, Jr);
    We(this, Bn);
    We(this, Ar);
    We(this, Tr);
    We(this, Ya);
    We(this, Fn);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    We(this, Wn);
    We(this, Zr);
    We(this, en);
    We(this, Er);
    We(this, zn, /* @__PURE__ */ new Set());
    this.options = r, me(this, ht, t), me(this, Tr, null), me(this, Ar, Id()), this.options.experimental_prefetchInRender || K(this, Ar).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (K(this, ve).addObserver(this), kd(K(this, ve), this.options) ? Ye(this, Te, Ki).call(this) : this.updateResult(), Ye(this, Te, gu).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Ou(
      K(this, ve),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Ou(
      K(this, ve),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), Ye(this, Te, bu).call(this), Ye(this, Te, xu).call(this), K(this, ve).removeObserver(this);
  }
  setOptions(t) {
    const r = this.options, n = K(this, ve);
    if (this.options = K(this, ht).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof kt(this.options.enabled, K(this, ve)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    Ye(this, Te, wu).call(this), K(this, ve).setOptions(this.options), r._defaulted && !pu(this.options, r) && K(this, ht).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: K(this, ve),
      observer: this
    });
    const i = this.hasListeners();
    i && Nd(
      K(this, ve),
      n,
      this.options,
      r
    ) && Ye(this, Te, Ki).call(this), this.updateResult(), i && (K(this, ve) !== n || kt(this.options.enabled, K(this, ve)) !== kt(r.enabled, K(this, ve)) || Xi(this.options.staleTime, K(this, ve)) !== Xi(r.staleTime, K(this, ve))) && Ye(this, Te, vu).call(this);
    const a = Ye(this, Te, yu).call(this);
    i && (K(this, ve) !== n || kt(this.options.enabled, K(this, ve)) !== kt(r.enabled, K(this, ve)) || a !== K(this, Er)) && Ye(this, Te, mu).call(this, a);
  }
  getOptimisticResult(t) {
    const r = K(this, ht).getQueryCache().build(K(this, ht), t), n = this.createResult(r, t);
    return Ew(this, n) && (me(this, ct, n), me(this, Bn, this.options), me(this, Jr, K(this, ve).state)), n;
  }
  getCurrentResult() {
    return K(this, ct);
  }
  trackResult(t, r) {
    return new Proxy(t, {
      get: (n, i) => (this.trackProp(i), r == null || r(i), Reflect.get(n, i))
    });
  }
  trackProp(t) {
    K(this, zn).add(t);
  }
  getCurrentQuery() {
    return K(this, ve);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = K(this, ht).defaultQueryOptions(t), n = K(this, ht).getQueryCache().build(K(this, ht), r);
    return n.fetch().then(() => this.createResult(n, r));
  }
  fetch(t) {
    return Ye(this, Te, Ki).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), K(this, ct)));
  }
  createResult(t, r) {
    var T;
    const n = K(this, ve), i = this.options, a = K(this, ct), o = K(this, Jr), s = K(this, Bn), u = t !== n ? t.state : K(this, Ga), { state: l } = t;
    let f = { ...l }, d = !1, h;
    if (r._optimisticResults) {
      const I = this.hasListeners(), j = !I && kd(t, r), $ = I && Nd(t, n, r, i);
      (j || $) && (f = {
        ...f,
        ...Pw(l.data, t.options)
      }), r._optimisticResults === "isRestoring" && (f.fetchStatus = "idle");
    }
    let { error: y, errorUpdatedAt: v, status: p } = f;
    h = f.data;
    let g = !1;
    if (r.placeholderData !== void 0 && h === void 0 && p === "pending") {
      let I;
      a != null && a.isPlaceholderData && r.placeholderData === (s == null ? void 0 : s.placeholderData) ? (I = a.data, g = !0) : I = typeof r.placeholderData == "function" ? r.placeholderData(
        (T = K(this, Wn)) == null ? void 0 : T.state.data,
        K(this, Wn)
      ) : r.placeholderData, I !== void 0 && (p = "success", h = Cd(
        a == null ? void 0 : a.data,
        I,
        r
      ), d = !0);
    }
    if (r.select && h !== void 0 && !g)
      if (a && h === (o == null ? void 0 : o.data) && r.select === K(this, Ya))
        h = K(this, Fn);
      else
        try {
          me(this, Ya, r.select), h = r.select(h), h = Cd(a == null ? void 0 : a.data, h, r), me(this, Fn, h), me(this, Tr, null);
        } catch (I) {
          me(this, Tr, I);
        }
    K(this, Tr) && (y = K(this, Tr), h = K(this, Fn), v = Date.now(), p = "error");
    const x = f.fetchStatus === "fetching", b = p === "pending", S = p === "error", m = b && x, w = h !== void 0, _ = {
      status: p,
      fetchStatus: f.fetchStatus,
      isPending: b,
      isSuccess: p === "success",
      isError: S,
      isInitialLoading: m,
      isLoading: m,
      data: h,
      dataUpdatedAt: f.dataUpdatedAt,
      error: y,
      errorUpdatedAt: v,
      failureCount: f.fetchFailureCount,
      failureReason: f.fetchFailureReason,
      errorUpdateCount: f.errorUpdateCount,
      isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
      isFetchedAfterMount: f.dataUpdateCount > u.dataUpdateCount || f.errorUpdateCount > u.errorUpdateCount,
      isFetching: x,
      isRefetching: x && !b,
      isLoadingError: S && !w,
      isPaused: f.fetchStatus === "paused",
      isPlaceholderData: d,
      isRefetchError: S && w,
      isStale: nf(t, r),
      refetch: this.refetch,
      promise: K(this, Ar),
      isEnabled: kt(r.enabled, t) !== !1
    };
    if (this.options.experimental_prefetchInRender) {
      const I = (k) => {
        _.status === "error" ? k.reject(_.error) : _.data !== void 0 && k.resolve(_.data);
      }, j = () => {
        const k = me(this, Ar, _.promise = Id());
        I(k);
      }, $ = K(this, Ar);
      switch ($.status) {
        case "pending":
          t.queryHash === n.queryHash && I($);
          break;
        case "fulfilled":
          (_.status === "error" || _.data !== $.value) && j();
          break;
        case "rejected":
          (_.status !== "error" || _.error !== $.reason) && j();
          break;
      }
    }
    return _;
  }
  updateResult() {
    const t = K(this, ct), r = this.createResult(K(this, ve), this.options);
    if (me(this, Jr, K(this, ve).state), me(this, Bn, this.options), K(this, Jr).data !== void 0 && me(this, Wn, K(this, ve)), pu(r, t))
      return;
    me(this, ct, r);
    const n = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: i } = this.options, a = typeof i == "function" ? i() : i;
      if (a === "all" || !a && !K(this, zn).size)
        return !0;
      const o = new Set(
        a ?? K(this, zn)
      );
      return this.options.throwOnError && o.add("error"), Object.keys(K(this, ct)).some((s) => {
        const c = s;
        return K(this, ct)[c] !== t[c] && o.has(c);
      });
    };
    Ye(this, Te, hm).call(this, { listeners: n() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && Ye(this, Te, gu).call(this);
  }
}, ht = new WeakMap(), ve = new WeakMap(), Ga = new WeakMap(), ct = new WeakMap(), Jr = new WeakMap(), Bn = new WeakMap(), Ar = new WeakMap(), Tr = new WeakMap(), Ya = new WeakMap(), Fn = new WeakMap(), Wn = new WeakMap(), Zr = new WeakMap(), en = new WeakMap(), Er = new WeakMap(), zn = new WeakMap(), Te = new WeakSet(), Ki = function(t) {
  Ye(this, Te, wu).call(this);
  let r = K(this, ve).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(du)), r;
}, vu = function() {
  Ye(this, Te, bu).call(this);
  const t = Xi(
    this.options.staleTime,
    K(this, ve)
  );
  if (aa || K(this, ct).isStale || !Ed(t))
    return;
  const n = yw(K(this, ct).dataUpdatedAt, t) + 1;
  me(this, Zr, setTimeout(() => {
    K(this, ct).isStale || this.updateResult();
  }, n));
}, yu = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(K(this, ve)) : this.options.refetchInterval) ?? !1;
}, mu = function(t) {
  Ye(this, Te, xu).call(this), me(this, Er, t), !(aa || kt(this.options.enabled, K(this, ve)) === !1 || !Ed(K(this, Er)) || K(this, Er) === 0) && me(this, en, setInterval(() => {
    (this.options.refetchIntervalInBackground || bw.isFocused()) && Ye(this, Te, Ki).call(this);
  }, K(this, Er)));
}, gu = function() {
  Ye(this, Te, vu).call(this), Ye(this, Te, mu).call(this, Ye(this, Te, yu).call(this));
}, bu = function() {
  K(this, Zr) && (clearTimeout(K(this, Zr)), me(this, Zr, void 0));
}, xu = function() {
  K(this, en) && (clearInterval(K(this, en)), me(this, en, void 0));
}, wu = function() {
  const t = K(this, ht).getQueryCache().build(K(this, ht), this.options);
  if (t === K(this, ve))
    return;
  const r = K(this, ve);
  me(this, ve, t), me(this, Ga, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, hm = function(t) {
  dm.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(K(this, ct));
    }), K(this, ht).getQueryCache().notify({
      query: K(this, ve),
      type: "observerResultsUpdated"
    });
  });
}, cm);
function Tw(e, t) {
  return kt(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function kd(e, t) {
  return Tw(e, t) || e.state.data !== void 0 && Ou(e, t, t.refetchOnMount);
}
function Ou(e, t, r) {
  if (kt(t.enabled, e) !== !1 && Xi(t.staleTime, e) !== "static") {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== !1 && nf(e, t);
  }
  return !1;
}
function Nd(e, t, r, n) {
  return (e !== t || kt(n.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && nf(e, r);
}
function nf(e, t) {
  return kt(t.enabled, e) !== !1 && e.isStaleByTime(Xi(t.staleTime, e));
}
function Ew(e, t) {
  return !pu(e.getCurrentResult(), t);
}
var jw = V.createContext(
  void 0
), $w = (e) => {
  const t = V.useContext(jw);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, pm = V.createContext(!1), Mw = () => V.useContext(pm);
pm.Provider;
function Cw() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var Iw = V.createContext(Cw()), kw = () => V.useContext(Iw), Nw = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, Rw = (e) => {
  V.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Dw = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: n,
  suspense: i
}) => e.isError && !t.isReset() && !e.isFetching && n && (i && e.data === void 0 || mw(r, [e.error, n])), Lw = (e) => {
  if (e.suspense) {
    const t = (n) => n === "static" ? n : Math.max(n ?? 1e3, 1e3), r = e.staleTime;
    e.staleTime = typeof r == "function" ? (...n) => t(r(...n)) : t(r), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3));
  }
}, Bw = (e, t) => e.isLoading && e.isFetching && !t, Fw = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Rd = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function Ww(e, t, r) {
  var f, d, h, y, v;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Mw(), i = kw(), a = $w(), o = a.defaultQueryOptions(e);
  (d = (f = a.getDefaultOptions().queries) == null ? void 0 : f._experimental_beforeQuery) == null || d.call(
    f,
    o
  ), process.env.NODE_ENV !== "production" && (o.queryFn || console.error(
    `[${o.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), o._optimisticResults = n ? "isRestoring" : "optimistic", Lw(o), Nw(o, i), Rw(i);
  const s = !a.getQueryCache().get(o.queryHash), [c] = V.useState(
    () => new t(
      a,
      o
    )
  ), u = c.getOptimisticResult(o), l = !n && e.subscribed !== !1;
  if (V.useSyncExternalStore(
    V.useCallback(
      (p) => {
        const g = l ? c.subscribe(dm.batchCalls(p)) : du;
        return c.updateResult(), g;
      },
      [c, l]
    ),
    () => c.getCurrentResult(),
    () => c.getCurrentResult()
  ), V.useEffect(() => {
    c.setOptions(o);
  }, [o, c]), Fw(o, u))
    throw Rd(o, c, i);
  if (Dw({
    result: u,
    errorResetBoundary: i,
    throwOnError: o.throwOnError,
    query: a.getQueryCache().get(o.queryHash),
    suspense: o.suspense
  }))
    throw u.error;
  if ((y = (h = a.getDefaultOptions().queries) == null ? void 0 : h._experimental_afterQuery) == null || y.call(
    h,
    o,
    u
  ), o.experimental_prefetchInRender && !aa && Bw(u, n)) {
    const p = s ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Rd(o, c, i)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (v = a.getQueryCache().get(o.queryHash)) == null ? void 0 : v.promise
    );
    p == null || p.catch(du).finally(() => {
      c.updateResult();
    });
  }
  return o.notifyOnChangeProps ? u : c.trackResult(u);
}
function _o(e, t) {
  return Ww(e, Aw);
}
const zw = "";
typeof localStorage < "u" && localStorage.getItem("employer_id");
const Uw = "EMP000029";
function qw(e) {
  const r = e.includes("?") ? "&" : "?";
  return `${e}${r}employer_id=${encodeURIComponent(Uw)}`;
}
async function Po(e) {
  const t = qw(e), r = await fetch(`${zw}${t}`);
  if (!r.ok) {
    const n = await r.text();
    throw new Error(n || `Request failed: ${r.status}`);
  }
  return r.json();
}
const Gw = () => {
  const { data: e, isLoading: t, error: r } = _o({
    queryKey: ["employer-kpis"],
    queryFn: () => Po("/api/employer/kpis")
  }), n = [
    { title: "Active Jobs", value: (e == null ? void 0 : e.active_jobs) ?? "--", icon: hw, desc: "Live job posts" },
    { title: "Total Applications", value: (e == null ? void 0 : e.total_applications) ?? "--", icon: fm, desc: "All recent applications" },
    { title: "Workers Hired", value: (e == null ? void 0 : e.workers_hired) ?? "--", icon: lw, desc: "Confirmed hires" },
    { title: "Completed Jobs", value: (e == null ? void 0 : e.completed_jobs) ?? "--", icon: dw, desc: "Finished placements" },
    { title: "Open Positions", value: (e == null ? void 0 : e.open_positions) ?? "--", icon: vw, desc: "Roles still available" }
  ];
  return /* @__PURE__ */ P.jsx("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-5", children: n.map((i) => /* @__PURE__ */ P.jsxs("div", { className: "min-w-0 rounded-lg border border-border bg-card p-4 shadow-sm sm:p-5", children: [
    /* @__PURE__ */ P.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ P.jsx("p", { className: "text-sm font-medium text-muted-foreground", children: i.title }),
      /* @__PURE__ */ P.jsx("div", { className: "rounded-lg bg-primary/10 p-2 text-primary", children: /* @__PURE__ */ P.jsx(i.icon, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ P.jsx("p", { className: "mt-2 break-words text-xl font-display font-semibold text-card-foreground sm:text-2xl", children: t ? "..." : i.value }),
    /* @__PURE__ */ P.jsx("p", { className: "mt-1 text-xs font-medium leading-relaxed text-muted-foreground", children: r ? "Unable to load data" : i.desc })
  ] }, i.title)) });
};
function vm(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = vm(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function fe() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = vm(e)) && (n && (n += " "), n += t);
  return n;
}
var Yw = Array.isArray, yt = Yw, Hw = typeof ro == "object" && ro && ro.Object === Object && ro, ym = Hw, Kw = ym, Vw = typeof self == "object" && self && self.Object === Object && self, Xw = Kw || Vw || Function("return this")(), Ht = Xw, Qw = Ht, Jw = Qw.Symbol, Ha = Jw, Dd = Ha, mm = Object.prototype, Zw = mm.hasOwnProperty, e1 = mm.toString, Ii = Dd ? Dd.toStringTag : void 0;
function t1(e) {
  var t = Zw.call(e, Ii), r = e[Ii];
  try {
    e[Ii] = void 0;
    var n = !0;
  } catch {
  }
  var i = e1.call(e);
  return n && (t ? e[Ii] = r : delete e[Ii]), i;
}
var r1 = t1, n1 = Object.prototype, i1 = n1.toString;
function a1(e) {
  return i1.call(e);
}
var o1 = a1, Ld = Ha, s1 = r1, c1 = o1, u1 = "[object Null]", l1 = "[object Undefined]", Bd = Ld ? Ld.toStringTag : void 0;
function f1(e) {
  return e == null ? e === void 0 ? l1 : u1 : Bd && Bd in Object(e) ? s1(e) : c1(e);
}
var dr = f1;
function d1(e) {
  return e != null && typeof e == "object";
}
var hr = d1, h1 = dr, p1 = hr, v1 = "[object Symbol]";
function y1(e) {
  return typeof e == "symbol" || p1(e) && h1(e) == v1;
}
var pi = y1, m1 = yt, g1 = pi, b1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, x1 = /^\w*$/;
function w1(e, t) {
  if (m1(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || g1(e) ? !0 : x1.test(e) || !b1.test(e) || t != null && e in Object(t);
}
var af = w1;
function O1(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var kr = O1;
const vi = /* @__PURE__ */ Me(kr);
var S1 = dr, _1 = kr, P1 = "[object AsyncFunction]", A1 = "[object Function]", T1 = "[object GeneratorFunction]", E1 = "[object Proxy]";
function j1(e) {
  if (!_1(e))
    return !1;
  var t = S1(e);
  return t == A1 || t == T1 || t == P1 || t == E1;
}
var of = j1;
const ue = /* @__PURE__ */ Me(of);
var $1 = Ht, M1 = $1["__core-js_shared__"], C1 = M1, _c = C1, Fd = function() {
  var e = /[^.]+$/.exec(_c && _c.keys && _c.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function I1(e) {
  return !!Fd && Fd in e;
}
var k1 = I1, N1 = Function.prototype, R1 = N1.toString;
function D1(e) {
  if (e != null) {
    try {
      return R1.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var gm = D1, L1 = of, B1 = k1, F1 = kr, W1 = gm, z1 = /[\\^$.*+?()[\]{}|]/g, U1 = /^\[object .+?Constructor\]$/, q1 = Function.prototype, G1 = Object.prototype, Y1 = q1.toString, H1 = G1.hasOwnProperty, K1 = RegExp(
  "^" + Y1.call(H1).replace(z1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function V1(e) {
  if (!F1(e) || B1(e))
    return !1;
  var t = L1(e) ? K1 : U1;
  return t.test(W1(e));
}
var X1 = V1;
function Q1(e, t) {
  return e == null ? void 0 : e[t];
}
var J1 = Q1, Z1 = X1, eO = J1;
function tO(e, t) {
  var r = eO(e, t);
  return Z1(r) ? r : void 0;
}
var dn = tO, rO = dn, nO = rO(Object, "create"), Ms = nO, Wd = Ms;
function iO() {
  this.__data__ = Wd ? Wd(null) : {}, this.size = 0;
}
var aO = iO;
function oO(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var sO = oO, cO = Ms, uO = "__lodash_hash_undefined__", lO = Object.prototype, fO = lO.hasOwnProperty;
function dO(e) {
  var t = this.__data__;
  if (cO) {
    var r = t[e];
    return r === uO ? void 0 : r;
  }
  return fO.call(t, e) ? t[e] : void 0;
}
var hO = dO, pO = Ms, vO = Object.prototype, yO = vO.hasOwnProperty;
function mO(e) {
  var t = this.__data__;
  return pO ? t[e] !== void 0 : yO.call(t, e);
}
var gO = mO, bO = Ms, xO = "__lodash_hash_undefined__";
function wO(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = bO && t === void 0 ? xO : t, this;
}
var OO = wO, SO = aO, _O = sO, PO = hO, AO = gO, TO = OO;
function yi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
yi.prototype.clear = SO;
yi.prototype.delete = _O;
yi.prototype.get = PO;
yi.prototype.has = AO;
yi.prototype.set = TO;
var EO = yi;
function jO() {
  this.__data__ = [], this.size = 0;
}
var $O = jO;
function MO(e, t) {
  return e === t || e !== e && t !== t;
}
var sf = MO, CO = sf;
function IO(e, t) {
  for (var r = e.length; r--; )
    if (CO(e[r][0], t))
      return r;
  return -1;
}
var Cs = IO, kO = Cs, NO = Array.prototype, RO = NO.splice;
function DO(e) {
  var t = this.__data__, r = kO(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : RO.call(t, r, 1), --this.size, !0;
}
var LO = DO, BO = Cs;
function FO(e) {
  var t = this.__data__, r = BO(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var WO = FO, zO = Cs;
function UO(e) {
  return zO(this.__data__, e) > -1;
}
var qO = UO, GO = Cs;
function YO(e, t) {
  var r = this.__data__, n = GO(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var HO = YO, KO = $O, VO = LO, XO = WO, QO = qO, JO = HO;
function mi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
mi.prototype.clear = KO;
mi.prototype.delete = VO;
mi.prototype.get = XO;
mi.prototype.has = QO;
mi.prototype.set = JO;
var Is = mi, ZO = dn, eS = Ht, tS = ZO(eS, "Map"), cf = tS, zd = EO, rS = Is, nS = cf;
function iS() {
  this.size = 0, this.__data__ = {
    hash: new zd(),
    map: new (nS || rS)(),
    string: new zd()
  };
}
var aS = iS;
function oS(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var sS = oS, cS = sS;
function uS(e, t) {
  var r = e.__data__;
  return cS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ks = uS, lS = ks;
function fS(e) {
  var t = lS(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var dS = fS, hS = ks;
function pS(e) {
  return hS(this, e).get(e);
}
var vS = pS, yS = ks;
function mS(e) {
  return yS(this, e).has(e);
}
var gS = mS, bS = ks;
function xS(e, t) {
  var r = bS(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var wS = xS, OS = aS, SS = dS, _S = vS, PS = gS, AS = wS;
function gi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
gi.prototype.clear = OS;
gi.prototype.delete = SS;
gi.prototype.get = _S;
gi.prototype.has = PS;
gi.prototype.set = AS;
var uf = gi, bm = uf, TS = "Expected a function";
function lf(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(TS);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (lf.Cache || bm)(), r;
}
lf.Cache = bm;
var xm = lf;
const ES = /* @__PURE__ */ Me(xm);
var jS = xm, $S = 500;
function MS(e) {
  var t = jS(e, function(n) {
    return r.size === $S && r.clear(), n;
  }), r = t.cache;
  return t;
}
var CS = MS, IS = CS, kS = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, NS = /\\(\\)?/g, RS = IS(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(kS, function(r, n, i, a) {
    t.push(i ? a.replace(NS, "$1") : n || r);
  }), t;
}), DS = RS;
function LS(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var ff = LS, Ud = Ha, BS = ff, FS = yt, WS = pi, zS = 1 / 0, qd = Ud ? Ud.prototype : void 0, Gd = qd ? qd.toString : void 0;
function wm(e) {
  if (typeof e == "string")
    return e;
  if (FS(e))
    return BS(e, wm) + "";
  if (WS(e))
    return Gd ? Gd.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -zS ? "-0" : t;
}
var US = wm, qS = US;
function GS(e) {
  return e == null ? "" : qS(e);
}
var Om = GS, YS = yt, HS = af, KS = DS, VS = Om;
function XS(e, t) {
  return YS(e) ? e : HS(e, t) ? [e] : KS(VS(e));
}
var Sm = XS, QS = pi, JS = 1 / 0;
function ZS(e) {
  if (typeof e == "string" || QS(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -JS ? "-0" : t;
}
var Ns = ZS, e_ = Sm, t_ = Ns;
function r_(e, t) {
  t = e_(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[t_(t[r++])];
  return r && r == n ? e : void 0;
}
var df = r_, n_ = df;
function i_(e, t, r) {
  var n = e == null ? void 0 : n_(e, t);
  return n === void 0 ? r : n;
}
var _m = i_;
const wt = /* @__PURE__ */ Me(_m);
function a_(e) {
  return e == null;
}
var o_ = a_;
const de = /* @__PURE__ */ Me(o_);
var s_ = dr, c_ = yt, u_ = hr, l_ = "[object String]";
function f_(e) {
  return typeof e == "string" || !c_(e) && u_(e) && s_(e) == l_;
}
var d_ = f_;
const an = /* @__PURE__ */ Me(d_);
var Su = { exports: {} }, Oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yd;
function h_() {
  if (Yd) return Oe;
  Yd = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function v(p) {
    if (typeof p == "object" && p !== null) {
      var g = p.$$typeof;
      switch (g) {
        case e:
          switch (p = p.type, p) {
            case r:
            case i:
            case n:
            case u:
            case l:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case o:
                case c:
                case d:
                case f:
                case a:
                  return p;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return Oe.ContextConsumer = o, Oe.ContextProvider = a, Oe.Element = e, Oe.ForwardRef = c, Oe.Fragment = r, Oe.Lazy = d, Oe.Memo = f, Oe.Portal = t, Oe.Profiler = i, Oe.StrictMode = n, Oe.Suspense = u, Oe.SuspenseList = l, Oe.isAsyncMode = function() {
    return !1;
  }, Oe.isConcurrentMode = function() {
    return !1;
  }, Oe.isContextConsumer = function(p) {
    return v(p) === o;
  }, Oe.isContextProvider = function(p) {
    return v(p) === a;
  }, Oe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Oe.isForwardRef = function(p) {
    return v(p) === c;
  }, Oe.isFragment = function(p) {
    return v(p) === r;
  }, Oe.isLazy = function(p) {
    return v(p) === d;
  }, Oe.isMemo = function(p) {
    return v(p) === f;
  }, Oe.isPortal = function(p) {
    return v(p) === t;
  }, Oe.isProfiler = function(p) {
    return v(p) === i;
  }, Oe.isStrictMode = function(p) {
    return v(p) === n;
  }, Oe.isSuspense = function(p) {
    return v(p) === u;
  }, Oe.isSuspenseList = function(p) {
    return v(p) === l;
  }, Oe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === i || p === n || p === u || p === l || p === h || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === f || p.$$typeof === a || p.$$typeof === o || p.$$typeof === c || p.$$typeof === y || p.getModuleId !== void 0);
  }, Oe.typeOf = v, Oe;
}
var Se = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hd;
function p_() {
  return Hd || (Hd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = !1, v = !1, p = !1, g = !1, x = !1, b;
    b = Symbol.for("react.module.reference");
    function S(H) {
      return !!(typeof H == "string" || typeof H == "function" || H === r || H === i || x || H === n || H === u || H === l || g || H === h || y || v || p || typeof H == "object" && H !== null && (H.$$typeof === d || H.$$typeof === f || H.$$typeof === a || H.$$typeof === o || H.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      H.$$typeof === b || H.getModuleId !== void 0));
    }
    function m(H) {
      if (typeof H == "object" && H !== null) {
        var be = H.$$typeof;
        switch (be) {
          case e:
            var xe = H.type;
            switch (xe) {
              case r:
              case i:
              case n:
              case u:
              case l:
                return xe;
              default:
                var qe = xe && xe.$$typeof;
                switch (qe) {
                  case s:
                  case o:
                  case c:
                  case d:
                  case f:
                  case a:
                    return qe;
                  default:
                    return be;
                }
            }
          case t:
            return be;
        }
      }
    }
    var w = o, O = a, _ = e, T = c, I = r, j = d, $ = f, k = t, D = i, L = n, N = u, F = l, U = !1, Y = !1;
    function M(H) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function R(H) {
      return Y || (Y = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(H) {
      return m(H) === o;
    }
    function q(H) {
      return m(H) === a;
    }
    function J(H) {
      return typeof H == "object" && H !== null && H.$$typeof === e;
    }
    function te(H) {
      return m(H) === c;
    }
    function ne(H) {
      return m(H) === r;
    }
    function ae(H) {
      return m(H) === d;
    }
    function ie(H) {
      return m(H) === f;
    }
    function z(H) {
      return m(H) === t;
    }
    function Q(H) {
      return m(H) === i;
    }
    function re(H) {
      return m(H) === n;
    }
    function C(H) {
      return m(H) === u;
    }
    function he(H) {
      return m(H) === l;
    }
    Se.ContextConsumer = w, Se.ContextProvider = O, Se.Element = _, Se.ForwardRef = T, Se.Fragment = I, Se.Lazy = j, Se.Memo = $, Se.Portal = k, Se.Profiler = D, Se.StrictMode = L, Se.Suspense = N, Se.SuspenseList = F, Se.isAsyncMode = M, Se.isConcurrentMode = R, Se.isContextConsumer = W, Se.isContextProvider = q, Se.isElement = J, Se.isForwardRef = te, Se.isFragment = ne, Se.isLazy = ae, Se.isMemo = ie, Se.isPortal = z, Se.isProfiler = Q, Se.isStrictMode = re, Se.isSuspense = C, Se.isSuspenseList = he, Se.isValidElementType = S, Se.typeOf = m;
  }()), Se;
}
process.env.NODE_ENV === "production" ? Su.exports = h_() : Su.exports = p_();
var v_ = Su.exports, y_ = dr, m_ = hr, g_ = "[object Number]";
function b_(e) {
  return typeof e == "number" || m_(e) && y_(e) == g_;
}
var Pm = b_;
const x_ = /* @__PURE__ */ Me(Pm);
var w_ = Pm;
function O_(e) {
  return w_(e) && e != +e;
}
var S_ = O_;
const Ka = /* @__PURE__ */ Me(S_);
var ut = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Hr = function(t) {
  return an(t) && t.indexOf("%") === t.length - 1;
}, X = function(t) {
  return x_(t) && !Ka(t);
}, __ = function(t) {
  return de(t);
}, Je = function(t) {
  return X(t) || an(t);
}, P_ = 0, Va = function(t) {
  var r = ++P_;
  return "".concat(t || "").concat(r);
}, lt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!X(t) && !an(t))
    return n;
  var a;
  if (Hr(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return Ka(a) && (a = n), i && a > r && (a = r), a;
}, Sr = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, A_ = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, wr = function(t, r) {
  return X(t) && X(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function _u(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : wt(n, t)) === r;
  });
}
var T_ = function(t, r) {
  return X(t) && X(r) ? t - r : an(t) && an(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function Mn(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Pu(e) {
  "@babel/helpers - typeof";
  return Pu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pu(e);
}
var E_ = ["viewBox", "children"], j_ = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], Kd = ["points", "pathLength"], Pc = {
  svg: E_,
  polygon: Kd,
  polyline: Kd
}, hf = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Ao = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Lt(t) && (n = t.props), !vi(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    hf.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, $_ = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, on = function(t, r, n) {
  if (!vi(t) || Pu(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    hf.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = $_(o, r, n));
  }), i;
}, M_ = ["children"], C_ = ["children"];
function Vd(e, t) {
  if (e == null) return {};
  var r = I_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function I_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Xd = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick"
}, nr = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Qd = null, Ac = null, pf = function e(t) {
  if (t === Qd && Array.isArray(Ac))
    return Ac;
  var r = [];
  return tn.forEach(t, function(n) {
    de(n) || (v_.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Ac = r, Qd = t, r;
};
function Et(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return nr(i);
  }) : n = [nr(t)], pf(e).forEach(function(i) {
    var a = wt(i, "type.displayName") || wt(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function bt(e, t) {
  var r = Et(e, t);
  return r && r[0];
}
var Jd = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!X(n) || n <= 0 || !X(i) || i <= 0);
}, k_ = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], N_ = function(t) {
  return t && t.type && an(t.type) && k_.indexOf(t.type) >= 0;
}, R_ = function(t, r, n, i) {
  var a, o = (a = Pc == null ? void 0 : Pc[i]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !ue(t) && (i && o.includes(r) || j_.includes(r)) || n && hf.includes(r);
}, se = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ Lt(t) && (i = t.props), !vi(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var s;
    R_((s = i) === null || s === void 0 ? void 0 : s[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, Au = function e(t, r) {
  if (t === r)
    return !0;
  var n = tn.count(t);
  if (n !== tn.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return Zd(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e(a, o))
        return !1;
    } else if (!Zd(a, o))
      return !1;
  }
  return !0;
}, Zd = function(t, r) {
  if (de(t) && de(r))
    return !0;
  if (!de(t) && !de(r)) {
    var n = t.props || {}, i = n.children, a = Vd(n, M_), o = r.props || {}, s = o.children, c = Vd(o, C_);
    return i && s ? Mn(a, c) && Au(i, s) : !i && !s ? Mn(a, c) : !1;
  }
  return !1;
}, eh = function(t, r) {
  var n = [], i = {};
  return pf(t).forEach(function(a, o) {
    if (N_(a))
      n.push(a);
    else if (a) {
      var s = nr(a.type), c = r[s] || {}, u = c.handler, l = c.once;
      if (u && (!l || !i[s])) {
        var f = u(a, s, o);
        n.push(f), i[s] = !0;
      }
    }
  }), n;
}, D_ = function(t) {
  var r = t && t.type;
  return r && Xd[r] ? Xd[r] : null;
}, L_ = function(t, r) {
  return pf(r).indexOf(t);
}, B_ = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Tu() {
  return Tu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tu.apply(this, arguments);
}
function F_(e, t) {
  if (e == null) return {};
  var r = W_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function W_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Eu(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, s = e.title, c = e.desc, u = F_(e, B_), l = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = fe("recharts-surface", a);
  return /* @__PURE__ */ E.createElement("svg", Tu({}, se(u, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height)
  }), /* @__PURE__ */ E.createElement("title", null, s), /* @__PURE__ */ E.createElement("desc", null, c), t);
}
var z_ = ["children", "className"];
function ju() {
  return ju = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ju.apply(this, arguments);
}
function U_(e, t) {
  if (e == null) return {};
  var r = q_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function q_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var je = /* @__PURE__ */ E.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = U_(e, z_), a = fe("recharts-layer", n);
  return /* @__PURE__ */ E.createElement("g", ju({
    className: a
  }, se(i, !0), {
    ref: t
  }), r);
}), G_ = process.env.NODE_ENV !== "production", Bt = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (G_ && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return i[o++];
      }));
    }
};
function Y_(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + t];
  return a;
}
var H_ = Y_, K_ = H_;
function V_(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : K_(e, t, r);
}
var X_ = V_, Q_ = "\\ud800-\\udfff", J_ = "\\u0300-\\u036f", Z_ = "\\ufe20-\\ufe2f", eP = "\\u20d0-\\u20ff", tP = J_ + Z_ + eP, rP = "\\ufe0e\\ufe0f", nP = "\\u200d", iP = RegExp("[" + nP + Q_ + tP + rP + "]");
function aP(e) {
  return iP.test(e);
}
var Am = aP;
function oP(e) {
  return e.split("");
}
var sP = oP, Tm = "\\ud800-\\udfff", cP = "\\u0300-\\u036f", uP = "\\ufe20-\\ufe2f", lP = "\\u20d0-\\u20ff", fP = cP + uP + lP, dP = "\\ufe0e\\ufe0f", hP = "[" + Tm + "]", $u = "[" + fP + "]", Mu = "\\ud83c[\\udffb-\\udfff]", pP = "(?:" + $u + "|" + Mu + ")", Em = "[^" + Tm + "]", jm = "(?:\\ud83c[\\udde6-\\uddff]){2}", $m = "[\\ud800-\\udbff][\\udc00-\\udfff]", vP = "\\u200d", Mm = pP + "?", Cm = "[" + dP + "]?", yP = "(?:" + vP + "(?:" + [Em, jm, $m].join("|") + ")" + Cm + Mm + ")*", mP = Cm + Mm + yP, gP = "(?:" + [Em + $u + "?", $u, jm, $m, hP].join("|") + ")", bP = RegExp(Mu + "(?=" + Mu + ")|" + gP + mP, "g");
function xP(e) {
  return e.match(bP) || [];
}
var wP = xP, OP = sP, SP = Am, _P = wP;
function PP(e) {
  return SP(e) ? _P(e) : OP(e);
}
var AP = PP, TP = X_, EP = Am, jP = AP, $P = Om;
function MP(e) {
  return function(t) {
    t = $P(t);
    var r = EP(t) ? jP(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? TP(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var CP = MP, IP = CP, kP = IP("toUpperCase"), NP = kP;
const Rs = /* @__PURE__ */ Me(NP);
function Ne(e) {
  return function() {
    return e;
  };
}
const Im = Math.cos, To = Math.sin, Ft = Math.sqrt, Eo = Math.PI, Ds = 2 * Eo, Cu = Math.PI, Iu = 2 * Cu, zr = 1e-6, RP = Iu - zr;
function km(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function DP(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return km;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class LP {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? km : DP(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, c = n - t, u = i - r, l = o - t, f = s - r, d = l * l + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > zr) if (!(Math.abs(f * c - u * l) > zr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - o, y = i - s, v = c * c + u * u, p = h * h + y * y, g = Math.sqrt(v), x = Math.sqrt(d), b = a * Math.tan((Cu - Math.acos((v + d - p) / (2 * g * x))) / 2), S = b / x, m = b / g;
      Math.abs(S - 1) > zr && this._append`L${t + S * l},${r + S * f}`, this._append`A${a},${a},0,0,${+(f * h > l * y)},${this._x1 = t + m * c},${this._y1 = r + m * u}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(i), c = n * Math.sin(i), u = t + s, l = r + c, f = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${l}` : (Math.abs(this._x1 - u) > zr || Math.abs(this._y1 - l) > zr) && this._append`L${u},${l}`, n && (d < 0 && (d = d % Iu + Iu), d > RP ? this._append`A${n},${n},0,1,${f},${t - s},${r - c}A${n},${n},0,1,${f},${this._x1 = u},${this._y1 = l}` : d > zr && this._append`A${n},${n},0,${+(d >= Cu)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function vf(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new LP(t);
}
function yf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Nm(e) {
  this._context = e;
}
Nm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Ls(e) {
  return new Nm(e);
}
function Rm(e) {
  return e[0];
}
function Dm(e) {
  return e[1];
}
function Lm(e, t) {
  var r = Ne(!0), n = null, i = Ls, a = null, o = vf(s);
  e = typeof e == "function" ? e : e === void 0 ? Rm : Ne(e), t = typeof t == "function" ? t : t === void 0 ? Dm : Ne(t);
  function s(c) {
    var u, l = (c = yf(c)).length, f, d = !1, h;
    for (n == null && (a = i(h = o())), u = 0; u <= l; ++u)
      !(u < l && r(f = c[u], u, c)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(f, u, c), +t(f, u, c));
    if (h) return a = null, h + "" || null;
  }
  return s.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : Ne(+c), s) : e;
  }, s.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Ne(+c), s) : t;
  }, s.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : Ne(!!c), s) : r;
  }, s.curve = function(c) {
    return arguments.length ? (i = c, n != null && (a = i(n)), s) : i;
  }, s.context = function(c) {
    return arguments.length ? (c == null ? n = a = null : a = i(n = c), s) : n;
  }, s;
}
function no(e, t, r) {
  var n = null, i = Ne(!0), a = null, o = Ls, s = null, c = vf(u);
  e = typeof e == "function" ? e : e === void 0 ? Rm : Ne(+e), t = typeof t == "function" ? t : Ne(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Dm : Ne(+r);
  function u(f) {
    var d, h, y, v = (f = yf(f)).length, p, g = !1, x, b = new Array(v), S = new Array(v);
    for (a == null && (s = o(x = c())), d = 0; d <= v; ++d) {
      if (!(d < v && i(p = f[d], d, f)) === g)
        if (g = !g)
          h = d, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), y = d - 1; y >= h; --y)
            s.point(b[y], S[y]);
          s.lineEnd(), s.areaEnd();
        }
      g && (b[d] = +e(p, d, f), S[d] = +t(p, d, f), s.point(n ? +n(p, d, f) : b[d], r ? +r(p, d, f) : S[d]));
    }
    if (x) return s = null, x + "" || null;
  }
  function l() {
    return Lm().defined(i).curve(o).context(a);
  }
  return u.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ne(+f), n = null, u) : e;
  }, u.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ne(+f), u) : e;
  }, u.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : Ne(+f), u) : n;
  }, u.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ne(+f), r = null, u) : t;
  }, u.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ne(+f), u) : t;
  }, u.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Ne(+f), u) : r;
  }, u.lineX0 = u.lineY0 = function() {
    return l().x(e).y(t);
  }, u.lineY1 = function() {
    return l().x(e).y(r);
  }, u.lineX1 = function() {
    return l().x(n).y(t);
  }, u.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Ne(!!f), u) : i;
  }, u.curve = function(f) {
    return arguments.length ? (o = f, a != null && (s = o(a)), u) : o;
  }, u.context = function(f) {
    return arguments.length ? (f == null ? a = s = null : s = o(a = f), u) : a;
  }, u;
}
class Bm {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function BP(e) {
  return new Bm(e, !0);
}
function FP(e) {
  return new Bm(e, !1);
}
const mf = {
  draw(e, t) {
    const r = Ft(t / Eo);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Ds);
  }
}, WP = {
  draw(e, t) {
    const r = Ft(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, Fm = Ft(1 / 3), zP = Fm * 2, UP = {
  draw(e, t) {
    const r = Ft(t / zP), n = r * Fm;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, qP = {
  draw(e, t) {
    const r = Ft(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, GP = 0.8908130915292852, Wm = To(Eo / 10) / To(7 * Eo / 10), YP = To(Ds / 10) * Wm, HP = -Im(Ds / 10) * Wm, KP = {
  draw(e, t) {
    const r = Ft(t * GP), n = YP * r, i = HP * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = Ds * a / 5, s = Im(o), c = To(o);
      e.lineTo(c * r, -s * r), e.lineTo(s * n - c * i, c * n + s * i);
    }
    e.closePath();
  }
}, Tc = Ft(3), VP = {
  draw(e, t) {
    const r = -Ft(t / (Tc * 3));
    e.moveTo(0, r * 2), e.lineTo(-Tc * r, -r), e.lineTo(Tc * r, -r), e.closePath();
  }
}, St = -0.5, _t = Ft(3) / 2, ku = 1 / Ft(12), XP = (ku / 2 + 1) * 3, QP = {
  draw(e, t) {
    const r = Ft(t / XP), n = r / 2, i = r * ku, a = n, o = r * ku + r, s = -a, c = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(s, c), e.lineTo(St * n - _t * i, _t * n + St * i), e.lineTo(St * a - _t * o, _t * a + St * o), e.lineTo(St * s - _t * c, _t * s + St * c), e.lineTo(St * n + _t * i, St * i - _t * n), e.lineTo(St * a + _t * o, St * o - _t * a), e.lineTo(St * s + _t * c, St * c - _t * s), e.closePath();
  }
};
function JP(e, t) {
  let r = null, n = vf(i);
  e = typeof e == "function" ? e : Ne(e || mf), t = typeof t == "function" ? t : Ne(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Ne(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : Ne(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function jo() {
}
function $o(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function zm(e) {
  this._context = e;
}
zm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        $o(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        $o(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function ZP(e) {
  return new zm(e);
}
function Um(e) {
  this._context = e;
}
Um.prototype = {
  areaStart: jo,
  areaEnd: jo,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        $o(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function eA(e) {
  return new Um(e);
}
function qm(e) {
  this._context = e;
}
qm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        $o(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function tA(e) {
  return new qm(e);
}
function Gm(e) {
  this._context = e;
}
Gm.prototype = {
  areaStart: jo,
  areaEnd: jo,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function rA(e) {
  return new Gm(e);
}
function th(e) {
  return e < 0 ? -1 : 1;
}
function rh(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), s = (a * i + o * n) / (n + i);
  return (th(a) + th(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function nh(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Ec(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - n) / 3;
  e._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o);
}
function Mo(e) {
  this._context = e;
}
Mo.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Ec(this, this._t0, nh(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Ec(this, nh(this, r = rh(this, e, t)), r);
          break;
        default:
          Ec(this, this._t0, r = rh(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Ym(e) {
  this._context = new Hm(e);
}
(Ym.prototype = Object.create(Mo.prototype)).point = function(e, t) {
  Mo.prototype.point.call(this, t, e);
};
function Hm(e) {
  this._context = e;
}
Hm.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function nA(e) {
  return new Mo(e);
}
function iA(e) {
  return new Ym(e);
}
function Km(e) {
  this._context = e;
}
Km.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = ih(e), i = ih(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function ih(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function aA(e) {
  return new Km(e);
}
function Bs(e, t) {
  this._context = e, this._t = t;
}
Bs.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function oA(e) {
  return new Bs(e, 0.5);
}
function sA(e) {
  return new Bs(e, 0);
}
function cA(e) {
  return new Bs(e, 1);
}
function Un(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, s = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < s; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Nu(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function uA(e, t) {
  return e[t];
}
function lA(e) {
  const t = [];
  return t.key = e, t;
}
function fA() {
  var e = Ne([]), t = Nu, r = Un, n = uA;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), lA), s, c = o.length, u = -1, l;
    for (const f of a)
      for (s = 0, ++u; s < c; ++s)
        (o[s][u] = [0, +n(f, o[s].key, u, a)]).data = f;
    for (s = 0, l = yf(t(o)); s < c; ++s)
      o[l[s]].index = s;
    return r(o, l), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Ne(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : Ne(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Nu : typeof a == "function" ? a : Ne(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Un, i) : r;
  }, i;
}
function dA(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Un(e, t);
  }
}
function hA(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, s = 0; o < i; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    Un(e, t);
  }
}
function pA(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var s = 0, c = 0, u = 0; s < o; ++s) {
        for (var l = e[t[s]], f = l[n][1] || 0, d = l[n - 1][1] || 0, h = (f - d) / 2, y = 0; y < s; ++y) {
          var v = e[t[y]], p = v[n][1] || 0, g = v[n - 1][1] || 0;
          h += p - g;
        }
        c += f, u += h * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, c && (r -= u / c);
    }
    i[n - 1][1] += i[n - 1][0] = r, Un(e, t);
  }
}
function oa(e) {
  "@babel/helpers - typeof";
  return oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oa(e);
}
var vA = ["type", "size", "sizeType"];
function Ru() {
  return Ru = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ru.apply(this, arguments);
}
function ah(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ah(Object(r), !0).forEach(function(n) {
      yA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ah(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yA(e, t, r) {
  return t = mA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mA(e) {
  var t = gA(e, "string");
  return oa(t) == "symbol" ? t : t + "";
}
function gA(e, t) {
  if (oa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (oa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bA(e, t) {
  if (e == null) return {};
  var r = xA(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function xA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Vm = {
  symbolCircle: mf,
  symbolCross: WP,
  symbolDiamond: UP,
  symbolSquare: qP,
  symbolStar: KP,
  symbolTriangle: VP,
  symbolWye: QP
}, wA = Math.PI / 180, OA = function(t) {
  var r = "symbol".concat(Rs(t));
  return Vm[r] || mf;
}, SA = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * wA;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, _A = function(t, r) {
  Vm["symbol".concat(Rs(t))] = r;
}, gf = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, s = o === void 0 ? "area" : o, c = bA(t, vA), u = oh(oh({}, c), {}, {
    type: n,
    size: a,
    sizeType: s
  }), l = function() {
    var p = OA(n), g = JP().type(p).size(SA(a, s, n));
    return g();
  }, f = u.className, d = u.cx, h = u.cy, y = se(u, !0);
  return d === +d && h === +h && a === +a ? /* @__PURE__ */ E.createElement("path", Ru({}, y, {
    className: fe("recharts-symbols", f),
    transform: "translate(".concat(d, ", ").concat(h, ")"),
    d: l()
  })) : null;
};
gf.registerSymbol = _A;
function qn(e) {
  "@babel/helpers - typeof";
  return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qn(e);
}
function Du() {
  return Du = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Du.apply(this, arguments);
}
function sh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function PA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sh(Object(r), !0).forEach(function(n) {
      sa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AA(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function TA(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Qm(n.key), n);
  }
}
function EA(e, t, r) {
  return t && TA(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function jA(e, t, r) {
  return t = Co(t), $A(e, Xm() ? Reflect.construct(t, r || [], Co(e).constructor) : t.apply(e, r));
}
function $A(e, t) {
  if (t && (qn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return MA(e);
}
function MA(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xm() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Xm = function() {
    return !!e;
  })();
}
function Co(e) {
  return Co = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Co(e);
}
function CA(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Lu(e, t);
}
function Lu(e, t) {
  return Lu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Lu(e, t);
}
function sa(e, t, r) {
  return t = Qm(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Qm(e) {
  var t = IA(e, "string");
  return qn(t) == "symbol" ? t : t + "";
}
function IA(e, t) {
  if (qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pt = 32, bf = /* @__PURE__ */ function(e) {
  function t() {
    return AA(this, t), jA(this, t, arguments);
  }
  return CA(t, e), EA(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = Pt / 2, o = Pt / 6, s = Pt / 3, c = n.inactive ? i : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ E.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: Pt,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ E.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Pt, "M").concat(2 * s, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ E.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(Pt / 8, "h").concat(Pt, "v").concat(Pt * 3 / 4, "h").concat(-Pt, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ E.isValidElement(n.legendIcon)) {
          var u = PA({}, n);
          return delete u.legendIcon, /* @__PURE__ */ E.cloneElement(n.legendIcon, u);
        }
        return /* @__PURE__ */ E.createElement(gf, {
          fill: c,
          cx: a,
          cy: a,
          size: Pt,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, i = this.props, a = i.payload, o = i.iconSize, s = i.layout, c = i.formatter, u = i.inactiveColor, l = {
        x: 0,
        y: 0,
        width: Pt,
        height: Pt
      }, f = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(h, y) {
        var v = h.formatter || c, p = fe(sa(sa({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", h.inactive));
        if (h.type === "none")
          return null;
        var g = ue(h.value) ? null : h.value;
        Bt(
          !ue(h.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var x = h.inactive ? u : h.color;
        return /* @__PURE__ */ E.createElement("li", Du({
          className: p,
          style: f,
          key: "legend-item-".concat(y)
        }, on(n.props, h, y)), /* @__PURE__ */ E.createElement(Eu, {
          width: o,
          height: o,
          viewBox: l,
          style: d
        }, n.renderIcon(h)), /* @__PURE__ */ E.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: x
          }
        }, v ? v(g, h, y) : g));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.payload, a = n.layout, o = n.align;
      if (!i || !i.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}(Yt);
sa(bf, "displayName", "Legend");
sa(bf, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var kA = Is;
function NA() {
  this.__data__ = new kA(), this.size = 0;
}
var RA = NA;
function DA(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var LA = DA;
function BA(e) {
  return this.__data__.get(e);
}
var FA = BA;
function WA(e) {
  return this.__data__.has(e);
}
var zA = WA, UA = Is, qA = cf, GA = uf, YA = 200;
function HA(e, t) {
  var r = this.__data__;
  if (r instanceof UA) {
    var n = r.__data__;
    if (!qA || n.length < YA - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new GA(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var KA = HA, VA = Is, XA = RA, QA = LA, JA = FA, ZA = zA, eT = KA;
function bi(e) {
  var t = this.__data__ = new VA(e);
  this.size = t.size;
}
bi.prototype.clear = XA;
bi.prototype.delete = QA;
bi.prototype.get = JA;
bi.prototype.has = ZA;
bi.prototype.set = eT;
var Jm = bi, tT = "__lodash_hash_undefined__";
function rT(e) {
  return this.__data__.set(e, tT), this;
}
var nT = rT;
function iT(e) {
  return this.__data__.has(e);
}
var aT = iT, oT = uf, sT = nT, cT = aT;
function Io(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new oT(); ++t < r; )
    this.add(e[t]);
}
Io.prototype.add = Io.prototype.push = sT;
Io.prototype.has = cT;
var Zm = Io;
function uT(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var eg = uT;
function lT(e, t) {
  return e.has(t);
}
var tg = lT, fT = Zm, dT = eg, hT = tg, pT = 1, vT = 2;
function yT(e, t, r, n, i, a) {
  var o = r & pT, s = e.length, c = t.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(e), l = a.get(t);
  if (u && l)
    return u == t && l == e;
  var f = -1, d = !0, h = r & vT ? new fT() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < s; ) {
    var y = e[f], v = t[f];
    if (n)
      var p = o ? n(v, y, f, t, e, a) : n(y, v, f, e, t, a);
    if (p !== void 0) {
      if (p)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!dT(t, function(g, x) {
        if (!hT(h, x) && (y === g || i(y, g, r, n, a)))
          return h.push(x);
      })) {
        d = !1;
        break;
      }
    } else if (!(y === v || i(y, v, r, n, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), d;
}
var rg = yT, mT = Ht, gT = mT.Uint8Array, bT = gT;
function xT(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var wT = xT;
function OT(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var xf = OT, ch = Ha, uh = bT, ST = sf, _T = rg, PT = wT, AT = xf, TT = 1, ET = 2, jT = "[object Boolean]", $T = "[object Date]", MT = "[object Error]", CT = "[object Map]", IT = "[object Number]", kT = "[object RegExp]", NT = "[object Set]", RT = "[object String]", DT = "[object Symbol]", LT = "[object ArrayBuffer]", BT = "[object DataView]", lh = ch ? ch.prototype : void 0, jc = lh ? lh.valueOf : void 0;
function FT(e, t, r, n, i, a, o) {
  switch (r) {
    case BT:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case LT:
      return !(e.byteLength != t.byteLength || !a(new uh(e), new uh(t)));
    case jT:
    case $T:
    case IT:
      return ST(+e, +t);
    case MT:
      return e.name == t.name && e.message == t.message;
    case kT:
    case RT:
      return e == t + "";
    case CT:
      var s = PT;
    case NT:
      var c = n & TT;
      if (s || (s = AT), e.size != t.size && !c)
        return !1;
      var u = o.get(e);
      if (u)
        return u == t;
      n |= ET, o.set(e, t);
      var l = _T(s(e), s(t), n, i, a, o);
      return o.delete(e), l;
    case DT:
      if (jc)
        return jc.call(e) == jc.call(t);
  }
  return !1;
}
var WT = FT;
function zT(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var ng = zT, UT = ng, qT = yt;
function GT(e, t, r) {
  var n = t(e);
  return qT(e) ? n : UT(n, r(e));
}
var YT = GT;
function HT(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
var KT = HT;
function VT() {
  return [];
}
var XT = VT, QT = KT, JT = XT, ZT = Object.prototype, eE = ZT.propertyIsEnumerable, fh = Object.getOwnPropertySymbols, tE = fh ? function(e) {
  return e == null ? [] : (e = Object(e), QT(fh(e), function(t) {
    return eE.call(e, t);
  }));
} : JT, rE = tE;
function nE(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var iE = nE, aE = dr, oE = hr, sE = "[object Arguments]";
function cE(e) {
  return oE(e) && aE(e) == sE;
}
var uE = cE, dh = uE, lE = hr, ig = Object.prototype, fE = ig.hasOwnProperty, dE = ig.propertyIsEnumerable, hE = dh(/* @__PURE__ */ function() {
  return arguments;
}()) ? dh : function(e) {
  return lE(e) && fE.call(e, "callee") && !dE.call(e, "callee");
}, wf = hE, ko = { exports: {} };
function pE() {
  return !1;
}
var vE = pE;
ko.exports;
(function(e, t) {
  var r = Ht, n = vE, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, s = o ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, u = c || n;
  e.exports = u;
})(ko, ko.exports);
var ag = ko.exports, yE = 9007199254740991, mE = /^(?:0|[1-9]\d*)$/;
function gE(e, t) {
  var r = typeof e;
  return t = t ?? yE, !!t && (r == "number" || r != "symbol" && mE.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Of = gE, bE = 9007199254740991;
function xE(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bE;
}
var Sf = xE, wE = dr, OE = Sf, SE = hr, _E = "[object Arguments]", PE = "[object Array]", AE = "[object Boolean]", TE = "[object Date]", EE = "[object Error]", jE = "[object Function]", $E = "[object Map]", ME = "[object Number]", CE = "[object Object]", IE = "[object RegExp]", kE = "[object Set]", NE = "[object String]", RE = "[object WeakMap]", DE = "[object ArrayBuffer]", LE = "[object DataView]", BE = "[object Float32Array]", FE = "[object Float64Array]", WE = "[object Int8Array]", zE = "[object Int16Array]", UE = "[object Int32Array]", qE = "[object Uint8Array]", GE = "[object Uint8ClampedArray]", YE = "[object Uint16Array]", HE = "[object Uint32Array]", Le = {};
Le[BE] = Le[FE] = Le[WE] = Le[zE] = Le[UE] = Le[qE] = Le[GE] = Le[YE] = Le[HE] = !0;
Le[_E] = Le[PE] = Le[DE] = Le[AE] = Le[LE] = Le[TE] = Le[EE] = Le[jE] = Le[$E] = Le[ME] = Le[CE] = Le[IE] = Le[kE] = Le[NE] = Le[RE] = !1;
function KE(e) {
  return SE(e) && OE(e.length) && !!Le[wE(e)];
}
var VE = KE;
function XE(e) {
  return function(t) {
    return e(t);
  };
}
var og = XE, No = { exports: {} };
No.exports;
(function(e, t) {
  var r = ym, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, s = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(No, No.exports);
var QE = No.exports, JE = VE, ZE = og, hh = QE, ph = hh && hh.isTypedArray, ej = ph ? ZE(ph) : JE, sg = ej, tj = iE, rj = wf, nj = yt, ij = ag, aj = Of, oj = sg, sj = Object.prototype, cj = sj.hasOwnProperty;
function uj(e, t) {
  var r = nj(e), n = !r && rj(e), i = !r && !n && ij(e), a = !r && !n && !i && oj(e), o = r || n || i || a, s = o ? tj(e.length, String) : [], c = s.length;
  for (var u in e)
    (t || cj.call(e, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    aj(u, c))) && s.push(u);
  return s;
}
var lj = uj, fj = Object.prototype;
function dj(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || fj;
  return e === r;
}
var hj = dj;
function pj(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var cg = pj, vj = cg, yj = vj(Object.keys, Object), mj = yj, gj = hj, bj = mj, xj = Object.prototype, wj = xj.hasOwnProperty;
function Oj(e) {
  if (!gj(e))
    return bj(e);
  var t = [];
  for (var r in Object(e))
    wj.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Sj = Oj, _j = of, Pj = Sf;
function Aj(e) {
  return e != null && Pj(e.length) && !_j(e);
}
var Xa = Aj, Tj = lj, Ej = Sj, jj = Xa;
function $j(e) {
  return jj(e) ? Tj(e) : Ej(e);
}
var Fs = $j, Mj = YT, Cj = rE, Ij = Fs;
function kj(e) {
  return Mj(e, Ij, Cj);
}
var Nj = kj, vh = Nj, Rj = 1, Dj = Object.prototype, Lj = Dj.hasOwnProperty;
function Bj(e, t, r, n, i, a) {
  var o = r & Rj, s = vh(e), c = s.length, u = vh(t), l = u.length;
  if (c != l && !o)
    return !1;
  for (var f = c; f--; ) {
    var d = s[f];
    if (!(o ? d in t : Lj.call(t, d)))
      return !1;
  }
  var h = a.get(e), y = a.get(t);
  if (h && y)
    return h == t && y == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var p = o; ++f < c; ) {
    d = s[f];
    var g = e[d], x = t[d];
    if (n)
      var b = o ? n(x, g, d, t, e, a) : n(g, x, d, e, t, a);
    if (!(b === void 0 ? g === x || i(g, x, r, n, a) : b)) {
      v = !1;
      break;
    }
    p || (p = d == "constructor");
  }
  if (v && !p) {
    var S = e.constructor, m = t.constructor;
    S != m && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof m == "function" && m instanceof m) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var Fj = Bj, Wj = dn, zj = Ht, Uj = Wj(zj, "DataView"), qj = Uj, Gj = dn, Yj = Ht, Hj = Gj(Yj, "Promise"), Kj = Hj, Vj = dn, Xj = Ht, Qj = Vj(Xj, "Set"), ug = Qj, Jj = dn, Zj = Ht, e$ = Jj(Zj, "WeakMap"), t$ = e$, Bu = qj, Fu = cf, Wu = Kj, zu = ug, Uu = t$, lg = dr, xi = gm, yh = "[object Map]", r$ = "[object Object]", mh = "[object Promise]", gh = "[object Set]", bh = "[object WeakMap]", xh = "[object DataView]", n$ = xi(Bu), i$ = xi(Fu), a$ = xi(Wu), o$ = xi(zu), s$ = xi(Uu), Ur = lg;
(Bu && Ur(new Bu(new ArrayBuffer(1))) != xh || Fu && Ur(new Fu()) != yh || Wu && Ur(Wu.resolve()) != mh || zu && Ur(new zu()) != gh || Uu && Ur(new Uu()) != bh) && (Ur = function(e) {
  var t = lg(e), r = t == r$ ? e.constructor : void 0, n = r ? xi(r) : "";
  if (n)
    switch (n) {
      case n$:
        return xh;
      case i$:
        return yh;
      case a$:
        return mh;
      case o$:
        return gh;
      case s$:
        return bh;
    }
  return t;
});
var c$ = Ur, $c = Jm, u$ = rg, l$ = WT, f$ = Fj, wh = c$, Oh = yt, Sh = ag, d$ = sg, h$ = 1, _h = "[object Arguments]", Ph = "[object Array]", io = "[object Object]", p$ = Object.prototype, Ah = p$.hasOwnProperty;
function v$(e, t, r, n, i, a) {
  var o = Oh(e), s = Oh(t), c = o ? Ph : wh(e), u = s ? Ph : wh(t);
  c = c == _h ? io : c, u = u == _h ? io : u;
  var l = c == io, f = u == io, d = c == u;
  if (d && Sh(e)) {
    if (!Sh(t))
      return !1;
    o = !0, l = !1;
  }
  if (d && !l)
    return a || (a = new $c()), o || d$(e) ? u$(e, t, r, n, i, a) : l$(e, t, c, r, n, i, a);
  if (!(r & h$)) {
    var h = l && Ah.call(e, "__wrapped__"), y = f && Ah.call(t, "__wrapped__");
    if (h || y) {
      var v = h ? e.value() : e, p = y ? t.value() : t;
      return a || (a = new $c()), i(v, p, r, n, a);
    }
  }
  return d ? (a || (a = new $c()), f$(e, t, r, n, i, a)) : !1;
}
var y$ = v$, m$ = y$, Th = hr;
function fg(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Th(e) && !Th(t) ? e !== e && t !== t : m$(e, t, r, n, fg, i);
}
var _f = fg, g$ = Jm, b$ = _f, x$ = 1, w$ = 2;
function O$(e, t, r, n) {
  var i = r.length, a = i, o = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var s = r[i];
    if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    s = r[i];
    var c = s[0], u = e[c], l = s[1];
    if (o && s[2]) {
      if (u === void 0 && !(c in e))
        return !1;
    } else {
      var f = new g$();
      if (n)
        var d = n(u, l, c, e, t, f);
      if (!(d === void 0 ? b$(l, u, x$ | w$, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var S$ = O$, _$ = kr;
function P$(e) {
  return e === e && !_$(e);
}
var dg = P$, A$ = dg, T$ = Fs;
function E$(e) {
  for (var t = T$(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, A$(i)];
  }
  return t;
}
var j$ = E$;
function $$(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var hg = $$, M$ = S$, C$ = j$, I$ = hg;
function k$(e) {
  var t = C$(e);
  return t.length == 1 && t[0][2] ? I$(t[0][0], t[0][1]) : function(r) {
    return r === e || M$(r, e, t);
  };
}
var N$ = k$;
function R$(e, t) {
  return e != null && t in Object(e);
}
var D$ = R$, L$ = Sm, B$ = wf, F$ = yt, W$ = Of, z$ = Sf, U$ = Ns;
function q$(e, t, r) {
  t = L$(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = U$(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && z$(i) && W$(o, i) && (F$(e) || B$(e)));
}
var G$ = q$, Y$ = D$, H$ = G$;
function K$(e, t) {
  return e != null && H$(e, t, Y$);
}
var V$ = K$, X$ = _f, Q$ = _m, J$ = V$, Z$ = af, eM = dg, tM = hg, rM = Ns, nM = 1, iM = 2;
function aM(e, t) {
  return Z$(e) && eM(t) ? tM(rM(e), t) : function(r) {
    var n = Q$(r, e);
    return n === void 0 && n === t ? J$(r, e) : X$(t, n, nM | iM);
  };
}
var oM = aM;
function sM(e) {
  return e;
}
var wi = sM;
function cM(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var uM = cM, lM = df;
function fM(e) {
  return function(t) {
    return lM(t, e);
  };
}
var dM = fM, hM = uM, pM = dM, vM = af, yM = Ns;
function mM(e) {
  return vM(e) ? hM(yM(e)) : pM(e);
}
var gM = mM, bM = N$, xM = oM, wM = wi, OM = yt, SM = gM;
function _M(e) {
  return typeof e == "function" ? e : e == null ? wM : typeof e == "object" ? OM(e) ? xM(e[0], e[1]) : bM(e) : SM(e);
}
var Kt = _M;
function PM(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var pg = PM;
function AM(e) {
  return e !== e;
}
var TM = AM;
function EM(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
var jM = EM, $M = pg, MM = TM, CM = jM;
function IM(e, t, r) {
  return t === t ? CM(e, t, r) : $M(e, MM, r);
}
var kM = IM, NM = kM;
function RM(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && NM(e, t, 0) > -1;
}
var DM = RM;
function LM(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var BM = LM;
function FM() {
}
var WM = FM, Mc = ug, zM = WM, UM = xf, qM = 1 / 0, GM = Mc && 1 / UM(new Mc([, -0]))[1] == qM ? function(e) {
  return new Mc(e);
} : zM, YM = GM, HM = Zm, KM = DM, VM = BM, XM = tg, QM = YM, JM = xf, ZM = 200;
function eC(e, t, r) {
  var n = -1, i = KM, a = e.length, o = !0, s = [], c = s;
  if (r)
    o = !1, i = VM;
  else if (a >= ZM) {
    var u = t ? null : QM(e);
    if (u)
      return JM(u);
    o = !1, i = XM, c = new HM();
  } else
    c = t ? [] : s;
  e:
    for (; ++n < a; ) {
      var l = e[n], f = t ? t(l) : l;
      if (l = r || l !== 0 ? l : 0, o && f === f) {
        for (var d = c.length; d--; )
          if (c[d] === f)
            continue e;
        t && c.push(f), s.push(l);
      } else i(c, f, r) || (c !== s && c.push(f), s.push(l));
    }
  return s;
}
var tC = eC, rC = Kt, nC = tC;
function iC(e, t) {
  return e && e.length ? nC(e, rC(t)) : [];
}
var aC = iC;
const Eh = /* @__PURE__ */ Me(aC);
function vg(e, t, r) {
  return t === !0 ? Eh(e, r) : ue(t) ? Eh(e, t) : e;
}
function Gn(e) {
  "@babel/helpers - typeof";
  return Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gn(e);
}
var oC = ["ref"];
function jh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jh(Object(r), !0).forEach(function(n) {
      Ws(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $h(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, mg(n.key), n);
  }
}
function cC(e, t, r) {
  return t && $h(e.prototype, t), r && $h(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function uC(e, t, r) {
  return t = Ro(t), lC(e, yg() ? Reflect.construct(t, r || [], Ro(e).constructor) : t.apply(e, r));
}
function lC(e, t) {
  if (t && (Gn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fC(e);
}
function fC(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yg = function() {
    return !!e;
  })();
}
function Ro(e) {
  return Ro = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ro(e);
}
function dC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && qu(e, t);
}
function qu(e, t) {
  return qu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, qu(e, t);
}
function Ws(e, t, r) {
  return t = mg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mg(e) {
  var t = hC(e, "string");
  return Gn(t) == "symbol" ? t : t + "";
}
function hC(e, t) {
  if (Gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pC(e, t) {
  if (e == null) return {};
  var r = vC(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function vC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function yC(e) {
  return e.value;
}
function mC(e, t) {
  if (/* @__PURE__ */ E.isValidElement(e))
    return /* @__PURE__ */ E.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ E.createElement(e, t);
  t.ref;
  var r = pC(t, oC);
  return /* @__PURE__ */ E.createElement(bf, r);
}
var Mh = 1, Cn = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    sC(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = uC(this, t, [].concat(i)), Ws(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return dC(t, e), cC(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, i = this.getBBox();
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > Mh || Math.abs(i.height - this.lastBoundingBox.height) > Mh) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Xt({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var i = this.props, a = i.layout, o = i.align, s = i.verticalAlign, c = i.margin, u = i.chartWidth, l = i.chartHeight, f, d;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && a === "vertical") {
          var h = this.getBBoxSnapshot();
          f = {
            left: ((u || 0) - h.width) / 2
          };
        } else
          f = o === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (s === "middle") {
          var y = this.getBBoxSnapshot();
          d = {
            top: ((l || 0) - y.height) / 2
          };
        } else
          d = s === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return Xt(Xt({}, f), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, o = i.width, s = i.height, c = i.wrapperStyle, u = i.payloadUniqBy, l = i.payload, f = Xt(Xt({
        position: "absolute",
        width: o || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ E.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(h) {
          n.wrapperNode = h;
        }
      }, mC(a, Xt(Xt({}, this.props), {}, {
        payload: vg(l, u, yC)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, i) {
      var a = Xt(Xt({}, this.defaultProps), n.props), o = a.layout;
      return o === "vertical" && X(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || i
      } : null;
    }
  }]);
}(Yt);
Ws(Cn, "displayName", "Legend");
Ws(Cn, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Ch = Ha, gC = wf, bC = yt, Ih = Ch ? Ch.isConcatSpreadable : void 0;
function xC(e) {
  return bC(e) || gC(e) || !!(Ih && e && e[Ih]);
}
var wC = xC, OC = ng, SC = wC;
function gg(e, t, r, n, i) {
  var a = -1, o = e.length;
  for (r || (r = SC), i || (i = []); ++a < o; ) {
    var s = e[a];
    t > 0 && r(s) ? t > 1 ? gg(s, t - 1, r, n, i) : OC(i, s) : n || (i[i.length] = s);
  }
  return i;
}
var bg = gg;
function _C(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var c = o[e ? s : ++i];
      if (r(a[c], c, a) === !1)
        break;
    }
    return t;
  };
}
var PC = _C, AC = PC, TC = AC(), EC = TC, jC = EC, $C = Fs;
function MC(e, t) {
  return e && jC(e, t, $C);
}
var xg = MC, CC = Xa;
function IC(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!CC(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; )
      ;
    return r;
  };
}
var kC = IC, NC = xg, RC = kC, DC = RC(NC), Pf = DC, LC = Pf, BC = Xa;
function FC(e, t) {
  var r = -1, n = BC(e) ? Array(e.length) : [];
  return LC(e, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var wg = FC;
function WC(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var zC = WC, kh = pi;
function UC(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, a = kh(e), o = t !== void 0, s = t === null, c = t === t, u = kh(t);
    if (!s && !u && !a && e > t || a && o && c && !s && !u || n && o && c || !r && c || !i)
      return 1;
    if (!n && !a && !u && e < t || u && r && i && !n && !a || s && r && i || !o && i || !c)
      return -1;
  }
  return 0;
}
var qC = UC, GC = qC;
function YC(e, t, r) {
  for (var n = -1, i = e.criteria, a = t.criteria, o = i.length, s = r.length; ++n < o; ) {
    var c = GC(i[n], a[n]);
    if (c) {
      if (n >= s)
        return c;
      var u = r[n];
      return c * (u == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var HC = YC, Cc = ff, KC = df, VC = Kt, XC = wg, QC = zC, JC = og, ZC = HC, eI = wi, tI = yt;
function rI(e, t, r) {
  t.length ? t = Cc(t, function(a) {
    return tI(a) ? function(o) {
      return KC(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [eI];
  var n = -1;
  t = Cc(t, JC(VC));
  var i = XC(e, function(a, o, s) {
    var c = Cc(t, function(u) {
      return u(a);
    });
    return { criteria: c, index: ++n, value: a };
  });
  return QC(i, function(a, o) {
    return ZC(a, o, r);
  });
}
var nI = rI;
function iI(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var aI = iI, oI = aI, Nh = Math.max;
function sI(e, t, r) {
  return t = Nh(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = Nh(n.length - t, 0), o = Array(a); ++i < a; )
      o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = n[i];
    return s[t] = r(o), oI(e, this, s);
  };
}
var cI = sI;
function uI(e) {
  return function() {
    return e;
  };
}
var lI = uI, fI = dn, dI = function() {
  try {
    var e = fI(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Og = dI, hI = lI, Rh = Og, pI = wi, vI = Rh ? function(e, t) {
  return Rh(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: hI(t),
    writable: !0
  });
} : pI, yI = vI, mI = 800, gI = 16, bI = Date.now;
function xI(e) {
  var t = 0, r = 0;
  return function() {
    var n = bI(), i = gI - (n - r);
    if (r = n, i > 0) {
      if (++t >= mI)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var wI = xI, OI = yI, SI = wI, _I = SI(OI), PI = _I, AI = wi, TI = cI, EI = PI;
function jI(e, t) {
  return EI(TI(e, t, AI), e + "");
}
var $I = jI, MI = sf, CI = Xa, II = Of, kI = kr;
function NI(e, t, r) {
  if (!kI(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? CI(r) && II(t, r.length) : n == "string" && t in r) ? MI(r[t], e) : !1;
}
var zs = NI, RI = bg, DI = nI, LI = $I, Dh = zs, BI = LI(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && Dh(e, t[0], t[1]) ? t = [] : r > 2 && Dh(t[0], t[1], t[2]) && (t = [t[0]]), DI(e, RI(t, 1), []);
}), FI = BI;
const Af = /* @__PURE__ */ Me(FI);
function ca(e) {
  "@babel/helpers - typeof";
  return ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ca(e);
}
function Gu() {
  return Gu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gu.apply(this, arguments);
}
function WI(e, t) {
  return GI(e) || qI(e, t) || UI(e, t) || zI();
}
function zI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UI(e, t) {
  if (e) {
    if (typeof e == "string") return Lh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Lh(e, t);
  }
}
function Lh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function qI(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function GI(e) {
  if (Array.isArray(e)) return e;
}
function Bh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ic(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bh(Object(r), !0).forEach(function(n) {
      YI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YI(e, t, r) {
  return t = HI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HI(e) {
  var t = KI(e, "string");
  return ca(t) == "symbol" ? t : t + "";
}
function KI(e, t) {
  if (ca(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ca(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function VI(e) {
  return Array.isArray(e) && Je(e[0]) && Je(e[1]) ? e.join(" ~ ") : e;
}
var XI = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, s = o === void 0 ? {} : o, c = t.labelStyle, u = c === void 0 ? {} : c, l = t.payload, f = t.formatter, d = t.itemSorter, h = t.wrapperClassName, y = t.labelClassName, v = t.label, p = t.labelFormatter, g = t.accessibilityLayer, x = g === void 0 ? !1 : g, b = function() {
    if (l && l.length) {
      var $ = {
        padding: 0,
        margin: 0
      }, k = (d ? Af(l, d) : l).map(function(D, L) {
        if (D.type === "none")
          return null;
        var N = Ic({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: D.color || "#000"
        }, s), F = D.formatter || f || VI, U = D.value, Y = D.name, M = U, R = Y;
        if (F && M != null && R != null) {
          var W = F(U, Y, D, L, l);
          if (Array.isArray(W)) {
            var q = WI(W, 2);
            M = q[0], R = q[1];
          } else
            M = W;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ E.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(L),
            style: N
          }, Je(R) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, R) : null, Je(R) ? /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, M), /* @__PURE__ */ E.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, D.unit || ""))
        );
      });
      return /* @__PURE__ */ E.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: $
      }, k);
    }
    return null;
  }, S = Ic({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), m = Ic({
    margin: 0
  }, u), w = !de(v), O = w ? v : "", _ = fe("recharts-default-tooltip", h), T = fe("recharts-tooltip-label", y);
  w && p && l !== void 0 && l !== null && (O = p(v, l));
  var I = x ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ E.createElement("div", Gu({
    className: _,
    style: S
  }, I), /* @__PURE__ */ E.createElement("p", {
    className: T,
    style: m
  }, /* @__PURE__ */ E.isValidElement(O) ? O : "".concat(O)), b());
};
function ua(e) {
  "@babel/helpers - typeof";
  return ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ua(e);
}
function ao(e, t, r) {
  return t = QI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QI(e) {
  var t = JI(e, "string");
  return ua(t) == "symbol" ? t : t + "";
}
function JI(e, t) {
  if (ua(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ki = "recharts-tooltip-wrapper", ZI = {
  visibility: "hidden"
};
function ek(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return fe(ki, ao(ao(ao(ao({}, "".concat(ki, "-right"), X(r) && t && X(t.x) && r >= t.x), "".concat(ki, "-left"), X(r) && t && X(t.x) && r < t.x), "".concat(ki, "-bottom"), X(n) && t && X(t.y) && n >= t.y), "".concat(ki, "-top"), X(n) && t && X(t.y) && n < t.y));
}
function Fh(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, o = e.reverseDirection, s = e.tooltipDimension, c = e.viewBox, u = e.viewBoxDimension;
  if (a && X(a[n]))
    return a[n];
  var l = r[n] - s - i, f = r[n] + i;
  if (t[n])
    return o[n] ? l : f;
  if (o[n]) {
    var d = l, h = c[n];
    return d < h ? Math.max(f, c[n]) : Math.max(l, c[n]);
  }
  var y = f + s, v = c[n] + u;
  return y > v ? Math.max(l, c[n]) : Math.max(f, c[n]);
}
function tk(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function rk(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, o = e.tooltipBox, s = e.useTranslate3d, c = e.viewBox, u, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = Fh({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), f = Fh({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), u = tk({
    translateX: l,
    translateY: f,
    useTranslate3d: s
  })) : u = ZI, {
    cssProperties: u,
    cssClasses: ek({
      translateX: l,
      translateY: f,
      coordinate: r
    })
  };
}
function Yn(e) {
  "@babel/helpers - typeof";
  return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yn(e);
}
function Wh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wh(Object(r), !0).forEach(function(n) {
      Hu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ik(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _g(n.key), n);
  }
}
function ak(e, t, r) {
  return t && ik(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ok(e, t, r) {
  return t = Do(t), sk(e, Sg() ? Reflect.construct(t, r || [], Do(e).constructor) : t.apply(e, r));
}
function sk(e, t) {
  if (t && (Yn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ck(e);
}
function ck(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Sg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Sg = function() {
    return !!e;
  })();
}
function Do(e) {
  return Do = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Do(e);
}
function uk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Yu(e, t);
}
function Yu(e, t) {
  return Yu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Yu(e, t);
}
function Hu(e, t, r) {
  return t = _g(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _g(e) {
  var t = lk(e, "string");
  return Yn(t) == "symbol" ? t : t + "";
}
function lk(e, t) {
  if (Yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Uh = 1, fk = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    nk(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = ok(this, t, [].concat(i)), Hu(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Hu(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var s, c, u, l;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && s !== void 0 ? s : 0,
            y: (u = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.y) !== null && u !== void 0 ? u : 0
          }
        });
      }
    }), r;
  }
  return uk(t, e), ak(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Uh || Math.abs(n.height - this.state.lastBoundingBox.height) > Uh) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, i;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, c = i.animationEasing, u = i.children, l = i.coordinate, f = i.hasPayload, d = i.isAnimationActive, h = i.offset, y = i.position, v = i.reverseDirection, p = i.useTranslate3d, g = i.viewBox, x = i.wrapperStyle, b = rk({
        allowEscapeViewBox: o,
        coordinate: l,
        offsetTopLeft: h,
        position: y,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: p,
        viewBox: g
      }), S = b.cssClasses, m = b.cssProperties, w = zh(zh({
        transition: d && a ? "transform ".concat(s, "ms ").concat(c) : void 0
      }, m), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, x);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ E.createElement("div", {
          tabIndex: -1,
          className: S,
          style: w,
          ref: function(_) {
            n.wrapperNode = _;
          }
        }, u)
      );
    }
  }]);
}(Yt), dk = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, ir = {
  isSsr: dk(),
  get: function(t) {
    return ir[t];
  },
  set: function(t, r) {
    if (typeof t == "string")
      ir[t] = r;
    else {
      var n = Object.keys(t);
      n && n.length && n.forEach(function(i) {
        ir[i] = t[i];
      });
    }
  }
};
function Hn(e) {
  "@babel/helpers - typeof";
  return Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hn(e);
}
function qh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qh(Object(r), !0).forEach(function(n) {
      Tf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ag(n.key), n);
  }
}
function vk(e, t, r) {
  return t && pk(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yk(e, t, r) {
  return t = Lo(t), mk(e, Pg() ? Reflect.construct(t, r || [], Lo(e).constructor) : t.apply(e, r));
}
function mk(e, t) {
  if (t && (Hn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return gk(e);
}
function gk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Pg = function() {
    return !!e;
  })();
}
function Lo(e) {
  return Lo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Lo(e);
}
function bk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ku(e, t);
}
function Ku(e, t) {
  return Ku = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ku(e, t);
}
function Tf(e, t, r) {
  return t = Ag(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ag(e) {
  var t = xk(e, "string");
  return Hn(t) == "symbol" ? t : t + "";
}
function xk(e, t) {
  if (Hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wk(e) {
  return e.dataKey;
}
function Ok(e, t) {
  return /* @__PURE__ */ E.isValidElement(e) ? /* @__PURE__ */ E.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ E.createElement(e, t) : /* @__PURE__ */ E.createElement(XI, t);
}
var Nt = /* @__PURE__ */ function(e) {
  function t() {
    return hk(this, t), yk(this, t, arguments);
  }
  return bk(t, e), vk(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, s = i.animationDuration, c = i.animationEasing, u = i.content, l = i.coordinate, f = i.filterNull, d = i.isAnimationActive, h = i.offset, y = i.payload, v = i.payloadUniqBy, p = i.position, g = i.reverseDirection, x = i.useTranslate3d, b = i.viewBox, S = i.wrapperStyle, m = y ?? [];
      f && m.length && (m = vg(y.filter(function(O) {
        return O.value != null && (O.hide !== !0 || n.props.includeHidden);
      }), v, wk));
      var w = m.length > 0;
      return /* @__PURE__ */ E.createElement(fk, {
        allowEscapeViewBox: o,
        animationDuration: s,
        animationEasing: c,
        isAnimationActive: d,
        active: a,
        coordinate: l,
        hasPayload: w,
        offset: h,
        position: p,
        reverseDirection: g,
        useTranslate3d: x,
        viewBox: b,
        wrapperStyle: S
      }, Ok(u, Gh(Gh({}, this.props), {}, {
        payload: m
      })));
    }
  }]);
}(Yt);
Tf(Nt, "displayName", "Tooltip");
Tf(Nt, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !ir.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var Sk = Ht, _k = function() {
  return Sk.Date.now();
}, Pk = _k, Ak = /\s/;
function Tk(e) {
  for (var t = e.length; t-- && Ak.test(e.charAt(t)); )
    ;
  return t;
}
var Ek = Tk, jk = Ek, $k = /^\s+/;
function Mk(e) {
  return e && e.slice(0, jk(e) + 1).replace($k, "");
}
var Ck = Mk, Ik = Ck, Yh = kr, kk = pi, Hh = NaN, Nk = /^[-+]0x[0-9a-f]+$/i, Rk = /^0b[01]+$/i, Dk = /^0o[0-7]+$/i, Lk = parseInt;
function Bk(e) {
  if (typeof e == "number")
    return e;
  if (kk(e))
    return Hh;
  if (Yh(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Yh(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ik(e);
  var r = Rk.test(e);
  return r || Dk.test(e) ? Lk(e.slice(2), r ? 2 : 8) : Nk.test(e) ? Hh : +e;
}
var Tg = Bk, Fk = kr, kc = Pk, Kh = Tg, Wk = "Expected a function", zk = Math.max, Uk = Math.min;
function qk(e, t, r) {
  var n, i, a, o, s, c, u = 0, l = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Wk);
  t = Kh(t) || 0, Fk(r) && (l = !!r.leading, f = "maxWait" in r, a = f ? zk(Kh(r.maxWait) || 0, t) : a, d = "trailing" in r ? !!r.trailing : d);
  function h(w) {
    var O = n, _ = i;
    return n = i = void 0, u = w, o = e.apply(_, O), o;
  }
  function y(w) {
    return u = w, s = setTimeout(g, t), l ? h(w) : o;
  }
  function v(w) {
    var O = w - c, _ = w - u, T = t - O;
    return f ? Uk(T, a - _) : T;
  }
  function p(w) {
    var O = w - c, _ = w - u;
    return c === void 0 || O >= t || O < 0 || f && _ >= a;
  }
  function g() {
    var w = kc();
    if (p(w))
      return x(w);
    s = setTimeout(g, v(w));
  }
  function x(w) {
    return s = void 0, d && n ? h(w) : (n = i = void 0, o);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, n = c = i = s = void 0;
  }
  function S() {
    return s === void 0 ? o : x(kc());
  }
  function m() {
    var w = kc(), O = p(w);
    if (n = arguments, i = this, c = w, O) {
      if (s === void 0)
        return y(c);
      if (f)
        return clearTimeout(s), s = setTimeout(g, t), h(c);
    }
    return s === void 0 && (s = setTimeout(g, t)), o;
  }
  return m.cancel = b, m.flush = S, m;
}
var Gk = qk, Yk = Gk, Hk = kr, Kk = "Expected a function";
function Vk(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(Kk);
  return Hk(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Yk(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var Xk = Vk;
const Eg = /* @__PURE__ */ Me(Xk);
function la(e) {
  "@babel/helpers - typeof";
  return la = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, la(e);
}
function Vh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vh(Object(r), !0).forEach(function(n) {
      Qk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qk(e, t, r) {
  return t = Jk(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Jk(e) {
  var t = Zk(e, "string");
  return la(t) == "symbol" ? t : t + "";
}
function Zk(e, t) {
  if (la(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (la(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function eN(e, t) {
  return iN(e) || nN(e, t) || rN(e, t) || tN();
}
function tN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rN(e, t) {
  if (e) {
    if (typeof e == "string") return Xh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xh(e, t);
  }
}
function Xh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function nN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function iN(e) {
  if (Array.isArray(e)) return e;
}
var Qh = /* @__PURE__ */ js(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, o = a === void 0 ? "100%" : a, s = e.height, c = s === void 0 ? "100%" : s, u = e.minWidth, l = u === void 0 ? 0 : u, f = e.minHeight, d = e.maxHeight, h = e.children, y = e.debounce, v = y === void 0 ? 0 : y, p = e.id, g = e.className, x = e.onResize, b = e.style, S = b === void 0 ? {} : b, m = So(null), w = So();
  w.current = x, rw(t, function() {
    return Object.defineProperty(m.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), m.current;
      },
      configurable: !0
    });
  });
  var O = $r({
    containerWidth: i.width,
    containerHeight: i.height
  }), _ = eN(O, 2), T = _[0], I = _[1], j = nw(function(k, D) {
    I(function(L) {
      var N = Math.round(k), F = Math.round(D);
      return L.containerWidth === N && L.containerHeight === F ? L : {
        containerWidth: N,
        containerHeight: F
      };
    });
  }, []);
  $s(function() {
    var k = function(Y) {
      var M, R = Y[0].contentRect, W = R.width, q = R.height;
      j(W, q), (M = w.current) === null || M === void 0 || M.call(w, W, q);
    };
    v > 0 && (k = Eg(k, v, {
      trailing: !0,
      leading: !1
    }));
    var D = new ResizeObserver(k), L = m.current.getBoundingClientRect(), N = L.width, F = L.height;
    return j(N, F), D.observe(m.current), function() {
      D.disconnect();
    };
  }, [j, v]);
  var $ = ia(function() {
    var k = T.containerWidth, D = T.containerHeight;
    if (k < 0 || D < 0)
      return null;
    Bt(Hr(o) || Hr(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, c), Bt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var L = Hr(o) ? k : o, N = Hr(c) ? D : c;
    r && r > 0 && (L ? N = L / r : N && (L = N * r), d && N > d && (N = d)), Bt(L > 0 || N > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, L, N, o, c, l, f, r);
    var F = !Array.isArray(h) && nr(h.type).endsWith("Chart");
    return E.Children.map(h, function(U) {
      return /* @__PURE__ */ E.isValidElement(U) ? /* @__PURE__ */ Qe(U, oo({
        width: L,
        height: N
      }, F ? {
        style: oo({
          height: "100%",
          width: "100%",
          maxHeight: N,
          maxWidth: L
        }, U.props.style)
      } : {})) : U;
    });
  }, [r, h, c, d, f, l, T, o]);
  return /* @__PURE__ */ E.createElement("div", {
    id: p ? "".concat(p) : void 0,
    className: fe("recharts-responsive-container", g),
    style: oo(oo({}, S), {}, {
      width: o,
      height: c,
      minWidth: l,
      minHeight: f,
      maxHeight: d
    }),
    ref: m
  }, $);
}), fa = function(t) {
  return null;
};
fa.displayName = "Cell";
function da(e) {
  "@babel/helpers - typeof";
  return da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, da(e);
}
function Jh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jh(Object(r), !0).forEach(function(n) {
      aN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aN(e, t, r) {
  return t = oN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oN(e) {
  var t = sN(e, "string");
  return da(t) == "symbol" ? t : t + "";
}
function sN(e, t) {
  if (da(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (da(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wn = {
  widthCache: {},
  cacheCount: 0
}, cN = 2e3, uN = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Zh = "recharts_measurement_span";
function lN(e) {
  var t = Vu({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Qi = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || ir.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = lN(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (wn.widthCache[i])
    return wn.widthCache[i];
  try {
    var a = document.getElementById(Zh);
    a || (a = document.createElement("span"), a.setAttribute("id", Zh), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = Vu(Vu({}, uN), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var s = a.getBoundingClientRect(), c = {
      width: s.width,
      height: s.height
    };
    return wn.widthCache[i] = c, ++wn.cacheCount > cN && (wn.cacheCount = 0, wn.widthCache = {}), c;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, fN = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function ha(e) {
  "@babel/helpers - typeof";
  return ha = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ha(e);
}
function Bo(e, t) {
  return vN(e) || pN(e, t) || hN(e, t) || dN();
}
function dN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hN(e, t) {
  if (e) {
    if (typeof e == "string") return ep(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ep(e, t);
  }
}
function ep(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function vN(e) {
  if (Array.isArray(e)) return e;
}
function yN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, gN(n.key), n);
  }
}
function mN(e, t, r) {
  return t && tp(e.prototype, t), r && tp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function gN(e) {
  var t = bN(e, "string");
  return ha(t) == "symbol" ? t : t + "";
}
function bN(e, t) {
  if (ha(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ha(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var rp = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, np = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, xN = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, wN = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, jg = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, ON = Object.keys(jg), An = "NaN";
function SN(e, t) {
  return e * jg[t];
}
var so = /* @__PURE__ */ function() {
  function e(t, r) {
    yN(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !xN.test(r) && (this.num = NaN, this.unit = ""), ON.includes(r) && (this.num = SN(t, r), this.unit = "px");
  }
  return mN(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, i = (n = wN.exec(r)) !== null && n !== void 0 ? n : [], a = Bo(i, 3), o = a[1], s = a[2];
      return new e(parseFloat(o), s ?? "");
    }
  }]);
}();
function $g(e) {
  if (e.includes(An))
    return An;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = rp.exec(t)) !== null && r !== void 0 ? r : [], i = Bo(n, 4), a = i[1], o = i[2], s = i[3], c = so.parse(a ?? ""), u = so.parse(s ?? ""), l = o === "*" ? c.multiply(u) : c.divide(u);
    if (l.isNaN())
      return An;
    t = t.replace(rp, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, d = (f = np.exec(t)) !== null && f !== void 0 ? f : [], h = Bo(d, 4), y = h[1], v = h[2], p = h[3], g = so.parse(y ?? ""), x = so.parse(p ?? ""), b = v === "+" ? g.add(x) : g.subtract(x);
    if (b.isNaN())
      return An;
    t = t.replace(np, b.toString());
  }
  return t;
}
var ip = /\(([^()]*)\)/;
function _N(e) {
  for (var t = e; t.includes("("); ) {
    var r = ip.exec(t), n = Bo(r, 2), i = n[1];
    t = t.replace(ip, $g(i));
  }
  return t;
}
function PN(e) {
  var t = e.replace(/\s+/g, "");
  return t = _N(t), t = $g(t), t;
}
function AN(e) {
  try {
    return PN(e);
  } catch {
    return An;
  }
}
function Nc(e) {
  var t = AN(e.slice(5, -1));
  return t === An ? "" : t;
}
var TN = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], EN = ["dx", "dy", "angle", "className", "breakAll"];
function Xu() {
  return Xu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xu.apply(this, arguments);
}
function ap(e, t) {
  if (e == null) return {};
  var r = jN(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function jN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function op(e, t) {
  return IN(e) || CN(e, t) || MN(e, t) || $N();
}
function $N() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MN(e, t) {
  if (e) {
    if (typeof e == "string") return sp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sp(e, t);
  }
}
function sp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function CN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function IN(e) {
  if (Array.isArray(e)) return e;
}
var Mg = /[ \f\n\r\t\v\u2028\u2029]+/, Cg = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    de(r) || (n ? a = r.toString().split("") : a = r.toString().split(Mg));
    var o = a.map(function(c) {
      return {
        word: c,
        width: Qi(c, i).width
      };
    }), s = n ? 0 : Qi(" ", i).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, kN = function(t, r, n, i, a) {
  var o = t.maxLines, s = t.children, c = t.style, u = t.breakAll, l = X(o), f = s, d = function() {
    var L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return L.reduce(function(N, F) {
      var U = F.word, Y = F.width, M = N[N.length - 1];
      if (M && (i == null || a || M.width + Y + n < Number(i)))
        M.words.push(U), M.width += Y + n;
      else {
        var R = {
          words: [U],
          width: Y
        };
        N.push(R);
      }
      return N;
    }, []);
  }, h = d(r), y = function(L) {
    return L.reduce(function(N, F) {
      return N.width > F.width ? N : F;
    });
  };
  if (!l)
    return h;
  for (var v = "…", p = function(L) {
    var N = f.slice(0, L), F = Cg({
      breakAll: u,
      style: c,
      children: N + v
    }).wordsWithComputedWidth, U = d(F), Y = U.length > o || y(U).width > Number(i);
    return [Y, U];
  }, g = 0, x = f.length - 1, b = 0, S; g <= x && b <= f.length - 1; ) {
    var m = Math.floor((g + x) / 2), w = m - 1, O = p(w), _ = op(O, 2), T = _[0], I = _[1], j = p(m), $ = op(j, 1), k = $[0];
    if (!T && !k && (g = m + 1), T && k && (x = m - 1), !T && k) {
      S = I;
      break;
    }
    b++;
  }
  return S || h;
}, cp = function(t) {
  var r = de(t) ? [] : t.toString().split(Mg);
  return [{
    words: r
  }];
}, NN = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !ir.isSsr) {
    var c, u, l = Cg({
      breakAll: o,
      children: i,
      style: a
    });
    if (l) {
      var f = l.wordsWithComputedWidth, d = l.spaceWidth;
      c = f, u = d;
    } else
      return cp(i);
    return kN({
      breakAll: o,
      children: i,
      maxLines: s,
      style: a
    }, c, u, r, n);
  }
  return cp(i);
}, up = "#808080", sn = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, s = o === void 0 ? "1em" : o, c = t.capHeight, u = c === void 0 ? "0.71em" : c, l = t.scaleToFit, f = l === void 0 ? !1 : l, d = t.textAnchor, h = d === void 0 ? "start" : d, y = t.verticalAnchor, v = y === void 0 ? "end" : y, p = t.fill, g = p === void 0 ? up : p, x = ap(t, TN), b = ia(function() {
    return NN({
      breakAll: x.breakAll,
      children: x.children,
      maxLines: x.maxLines,
      scaleToFit: f,
      style: x.style,
      width: x.width
    });
  }, [x.breakAll, x.children, x.maxLines, f, x.style, x.width]), S = x.dx, m = x.dy, w = x.angle, O = x.className, _ = x.breakAll, T = ap(x, EN);
  if (!Je(n) || !Je(a))
    return null;
  var I = n + (X(S) ? S : 0), j = a + (X(m) ? m : 0), $;
  switch (v) {
    case "start":
      $ = Nc("calc(".concat(u, ")"));
      break;
    case "middle":
      $ = Nc("calc(".concat((b.length - 1) / 2, " * -").concat(s, " + (").concat(u, " / 2))"));
      break;
    default:
      $ = Nc("calc(".concat(b.length - 1, " * -").concat(s, ")"));
      break;
  }
  var k = [];
  if (f) {
    var D = b[0].width, L = x.width;
    k.push("scale(".concat((X(L) ? L / D : 1) / D, ")"));
  }
  return w && k.push("rotate(".concat(w, ", ").concat(I, ", ").concat(j, ")")), k.length && (T.transform = k.join(" ")), /* @__PURE__ */ E.createElement("text", Xu({}, se(T, !0), {
    x: I,
    y: j,
    className: fe("recharts-text", O),
    textAnchor: h,
    fill: g.includes("url") ? up : g
  }), b.map(function(N, F) {
    var U = N.words.join(_ ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ E.createElement("tspan", {
        x: I,
        dy: F === 0 ? $ : s,
        key: "".concat(U, "-").concat(F)
      }, U)
    );
  }));
};
function Mr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function RN(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ef(e) {
  let t, r, n;
  e.length !== 2 ? (t = Mr, r = (s, c) => Mr(e(s), c), n = (s, c) => e(s) - c) : (t = e === Mr || e === RN ? e : DN, r = e, n = e);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (t(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        r(s[f], c) < 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (t(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        r(s[f], c) <= 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    const f = i(s, c, u, l - 1);
    return f > u && n(s[f - 1], c) > -n(s[f], c) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function DN() {
  return 0;
}
function Ig(e) {
  return e === null ? NaN : +e;
}
function* LN(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const BN = Ef(Mr), Qa = BN.right;
Ef(Ig).center;
class lp extends Map {
  constructor(t, r = zN) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(fp(this, t));
  }
  has(t) {
    return super.has(fp(this, t));
  }
  set(t, r) {
    return super.set(FN(this, t), r);
  }
  delete(t) {
    return super.delete(WN(this, t));
  }
}
function fp({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function FN({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function WN({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function zN(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function UN(e = Mr) {
  if (e === Mr) return kg;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function kg(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const qN = Math.sqrt(50), GN = Math.sqrt(10), YN = Math.sqrt(2);
function Fo(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= qN ? 10 : a >= GN ? 5 : a >= YN ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(e * u), c = Math.round(t * u), s / u < e && ++s, c / u > t && --c, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(e / u), c = Math.round(t / u), s * u < e && ++s, c * u > t && --c), c < s && 0.5 <= r && r < 2 ? Fo(e, t, r * 2) : [s, c, u];
}
function Qu(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? Fo(t, e, r) : Fo(e, t, r);
  if (!(a >= i)) return [];
  const s = a - i + 1, c = new Array(s);
  if (n)
    if (o < 0) for (let u = 0; u < s; ++u) c[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) c[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * o;
  return c;
}
function Ju(e, t, r) {
  return t = +t, e = +e, r = +r, Fo(e, t, r)[2];
}
function Zu(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? Ju(t, e, r) : Ju(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function dp(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function hp(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Ng(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? kg : UN(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, u = t - r + 1, l = Math.log(c), f = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * f * (c - f) / c) * (u - c / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - u * f / c + d)), y = Math.min(n, Math.floor(t + (c - u) * f / c + d));
      Ng(e, t, h, y, i);
    }
    const a = e[t];
    let o = r, s = n;
    for (Ni(e, r, t), i(e[n], a) > 0 && Ni(e, r, n); o < s; ) {
      for (Ni(e, o, s), ++o, --s; i(e[o], a) < 0; ) ++o;
      for (; i(e[s], a) > 0; ) --s;
    }
    i(e[r], a) === 0 ? Ni(e, r, s) : (++s, Ni(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function Ni(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function HN(e, t, r) {
  if (e = Float64Array.from(LN(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return hp(e);
    if (t >= 1) return dp(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = dp(Ng(e, a).subarray(0, a + 1)), s = hp(e.subarray(a + 1));
    return o + (s - o) * (i - a);
  }
}
function KN(e, t, r = Ig) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), s = +r(e[a + 1], a + 1, e);
    return o + (s - o) * (i - a);
  }
}
function VN(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function $t(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function pr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const el = Symbol("implicit");
function jf() {
  var e = new lp(), t = [], r = [], n = el;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== el) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new lp();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return jf(t, r).unknown(n);
  }, $t.apply(i, arguments), i;
}
function pa() {
  var e = jf().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, s = !1, c = 0, u = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, h = i < n, y = h ? i : n, v = h ? n : i;
    a = (v - y) / Math.max(1, d - c + u * 2), s && (a = Math.floor(a)), y += (v - y - a * (d - c)) * l, o = a * (1 - c), s && (y = Math.round(y), o = Math.round(o));
    var p = VN(d).map(function(g) {
      return y + a * g;
    });
    return r(h ? p.reverse() : p);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, f()) : [n, i];
  }, e.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, s = !0, f();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(d) {
    return arguments.length ? (s = !!d, f()) : s;
  }, e.padding = function(d) {
    return arguments.length ? (c = Math.min(1, u = +d), f()) : c;
  }, e.paddingInner = function(d) {
    return arguments.length ? (c = Math.min(1, d), f()) : c;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (u = +d, f()) : u;
  }, e.align = function(d) {
    return arguments.length ? (l = Math.max(0, Math.min(1, d)), f()) : l;
  }, e.copy = function() {
    return pa(t(), [n, i]).round(s).paddingInner(c).paddingOuter(u).align(l);
  }, $t.apply(f(), arguments);
}
function Rg(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Rg(t());
  }, e;
}
function Ji() {
  return Rg(pa.apply(null, arguments).paddingInner(1));
}
function $f(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Dg(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Ja() {
}
var va = 0.7, Wo = 1 / va, In = "\\s*([+-]?\\d+)\\s*", ya = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ut = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", XN = /^#([0-9a-f]{3,8})$/, QN = new RegExp(`^rgb\\(${In},${In},${In}\\)$`), JN = new RegExp(`^rgb\\(${Ut},${Ut},${Ut}\\)$`), ZN = new RegExp(`^rgba\\(${In},${In},${In},${ya}\\)$`), e2 = new RegExp(`^rgba\\(${Ut},${Ut},${Ut},${ya}\\)$`), t2 = new RegExp(`^hsl\\(${ya},${Ut},${Ut}\\)$`), r2 = new RegExp(`^hsla\\(${ya},${Ut},${Ut},${ya}\\)$`), pp = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
$f(Ja, ma, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: vp,
  // Deprecated! Use color.formatHex.
  formatHex: vp,
  formatHex8: n2,
  formatHsl: i2,
  formatRgb: yp,
  toString: yp
});
function vp() {
  return this.rgb().formatHex();
}
function n2() {
  return this.rgb().formatHex8();
}
function i2() {
  return Lg(this).formatHsl();
}
function yp() {
  return this.rgb().formatRgb();
}
function ma(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = XN.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? mp(t) : r === 3 ? new pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? co(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? co(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = QN.exec(e)) ? new pt(t[1], t[2], t[3], 1) : (t = JN.exec(e)) ? new pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ZN.exec(e)) ? co(t[1], t[2], t[3], t[4]) : (t = e2.exec(e)) ? co(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = t2.exec(e)) ? xp(t[1], t[2] / 100, t[3] / 100, 1) : (t = r2.exec(e)) ? xp(t[1], t[2] / 100, t[3] / 100, t[4]) : pp.hasOwnProperty(e) ? mp(pp[e]) : e === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
}
function mp(e) {
  return new pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function co(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new pt(e, t, r, n);
}
function a2(e) {
  return e instanceof Ja || (e = ma(e)), e ? (e = e.rgb(), new pt(e.r, e.g, e.b, e.opacity)) : new pt();
}
function tl(e, t, r, n) {
  return arguments.length === 1 ? a2(e) : new pt(e, t, r, n ?? 1);
}
function pt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
$f(pt, tl, Dg(Ja, {
  brighter(e) {
    return e = e == null ? Wo : Math.pow(Wo, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? va : Math.pow(va, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pt(rn(this.r), rn(this.g), rn(this.b), zo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: gp,
  // Deprecated! Use color.formatHex.
  formatHex: gp,
  formatHex8: o2,
  formatRgb: bp,
  toString: bp
}));
function gp() {
  return `#${Kr(this.r)}${Kr(this.g)}${Kr(this.b)}`;
}
function o2() {
  return `#${Kr(this.r)}${Kr(this.g)}${Kr(this.b)}${Kr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function bp() {
  const e = zo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${rn(this.r)}, ${rn(this.g)}, ${rn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function zo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function rn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Kr(e) {
  return e = rn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function xp(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Dt(e, t, r, n);
}
function Lg(e) {
  if (e instanceof Dt) return new Dt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ja || (e = ma(e)), !e) return new Dt();
  if (e instanceof Dt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new Dt(o, s, c, e.opacity);
}
function s2(e, t, r, n) {
  return arguments.length === 1 ? Lg(e) : new Dt(e, t, r, n ?? 1);
}
function Dt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
$f(Dt, s2, Dg(Ja, {
  brighter(e) {
    return e = e == null ? Wo : Math.pow(Wo, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? va : Math.pow(va, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new pt(
      Rc(e >= 240 ? e - 240 : e + 120, i, n),
      Rc(e, i, n),
      Rc(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Dt(wp(this.h), uo(this.s), uo(this.l), zo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = zo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${wp(this.h)}, ${uo(this.s) * 100}%, ${uo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function wp(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function uo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Rc(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Mf = (e) => () => e;
function c2(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function u2(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function l2(e) {
  return (e = +e) == 1 ? Bg : function(t, r) {
    return r - t ? u2(t, r, e) : Mf(isNaN(t) ? r : t);
  };
}
function Bg(e, t) {
  var r = t - e;
  return r ? c2(e, r) : Mf(isNaN(e) ? t : e);
}
const Op = function e(t) {
  var r = l2(t);
  function n(i, a) {
    var o = r((i = tl(i)).r, (a = tl(a)).r), s = r(i.g, a.g), c = r(i.b, a.b), u = Bg(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function f2(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function d2(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function h2(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = Oi(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = i[o](s);
    return a;
  };
}
function p2(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Uo(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function v2(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = Oi(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var rl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Dc = new RegExp(rl.source, "g");
function y2(e) {
  return function() {
    return e;
  };
}
function m2(e) {
  return function(t) {
    return e(t) + "";
  };
}
function g2(e, t) {
  var r = rl.lastIndex = Dc.lastIndex = 0, n, i, a, o = -1, s = [], c = [];
  for (e = e + "", t = t + ""; (n = rl.exec(e)) && (i = Dc.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: Uo(n, i) })), r = Dc.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? m2(c[0].x) : y2(t) : (t = c.length, function(u) {
    for (var l = 0, f; l < t; ++l) s[(f = c[l]).i] = f.x(u);
    return s.join("");
  });
}
function Oi(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Mf(t) : (r === "number" ? Uo : r === "string" ? (n = ma(t)) ? (t = n, Op) : g2 : t instanceof ma ? Op : t instanceof Date ? p2 : d2(t) ? f2 : Array.isArray(t) ? h2 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? v2 : Uo)(e, t);
}
function Cf(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function b2(e, t) {
  t === void 0 && (t = e, e = Oi);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[s](o - s);
  };
}
function x2(e) {
  return function() {
    return e;
  };
}
function qo(e) {
  return +e;
}
var Sp = [0, 1];
function ft(e) {
  return e;
}
function nl(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : x2(isNaN(t) ? NaN : 0.5);
}
function w2(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function O2(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = nl(i, n), a = r(o, a)) : (n = nl(n, i), a = r(a, o)), function(s) {
    return a(n(s));
  };
}
function S2(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = nl(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(s) {
    var c = Qa(e, s, 1, n) - 1;
    return a[c](i[c](s));
  };
}
function Za(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Us() {
  var e = Sp, t = Sp, r = Oi, n, i, a, o = ft, s, c, u;
  function l() {
    var d = Math.min(e.length, t.length);
    return o !== ft && (o = w2(e[0], e[d - 1])), s = d > 2 ? S2 : O2, c = u = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? a : (c || (c = s(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(i((u || (u = s(t, e.map(n), Uo)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, qo), l()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), l()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = Cf, l();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : ft, l()) : o !== ft;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, l()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (a = d, f) : a;
  }, function(d, h) {
    return n = d, i = h, l();
  };
}
function If() {
  return Us()(ft, ft);
}
function _2(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Go(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Kn(e) {
  return e = Go(Math.abs(e)), e ? e[1] : NaN;
}
function P2(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > n && (s = Math.max(1, n - c)), a.push(r.substring(i -= s, i + s)), !((c += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function A2(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var T2 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ga(e) {
  if (!(t = T2.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new kf({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
ga.prototype = kf.prototype;
function kf(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
kf.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function E2(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var Fg;
function j2(e, t) {
  var r = Go(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (Fg = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Go(e, Math.max(0, t + a - 1))[0];
}
function _p(e, t) {
  var r = Go(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Pp = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: _2,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => _p(e * 100, t),
  r: _p,
  s: j2,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Ap(e) {
  return e;
}
var Tp = Array.prototype.map, Ep = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function $2(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Ap : P2(Tp.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Ap : A2(Tp.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(f) {
    f = ga(f);
    var d = f.fill, h = f.align, y = f.sign, v = f.symbol, p = f.zero, g = f.width, x = f.comma, b = f.precision, S = f.trim, m = f.type;
    m === "n" ? (x = !0, m = "g") : Pp[m] || (b === void 0 && (b = 12), S = !0, m = "g"), (p || d === "0" && h === "=") && (p = !0, d = "0", h = "=");
    var w = v === "$" ? r : v === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", O = v === "$" ? n : /[%p]/.test(m) ? o : "", _ = Pp[m], T = /[defgprs%]/.test(m);
    b = b === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function I(j) {
      var $ = w, k = O, D, L, N;
      if (m === "c")
        k = _(j) + k, j = "";
      else {
        j = +j;
        var F = j < 0 || 1 / j < 0;
        if (j = isNaN(j) ? c : _(Math.abs(j), b), S && (j = E2(j)), F && +j == 0 && y !== "+" && (F = !1), $ = (F ? y === "(" ? y : s : y === "-" || y === "(" ? "" : y) + $, k = (m === "s" ? Ep[8 + Fg / 3] : "") + k + (F && y === "(" ? ")" : ""), T) {
          for (D = -1, L = j.length; ++D < L; )
            if (N = j.charCodeAt(D), 48 > N || N > 57) {
              k = (N === 46 ? i + j.slice(D + 1) : j.slice(D)) + k, j = j.slice(0, D);
              break;
            }
        }
      }
      x && !p && (j = t(j, 1 / 0));
      var U = $.length + j.length + k.length, Y = U < g ? new Array(g - U + 1).join(d) : "";
      switch (x && p && (j = t(Y + j, Y.length ? g - k.length : 1 / 0), Y = ""), h) {
        case "<":
          j = $ + j + k + Y;
          break;
        case "=":
          j = $ + Y + j + k;
          break;
        case "^":
          j = Y.slice(0, U = Y.length >> 1) + $ + j + k + Y.slice(U);
          break;
        default:
          j = Y + $ + j + k;
          break;
      }
      return a(j);
    }
    return I.toString = function() {
      return f + "";
    }, I;
  }
  function l(f, d) {
    var h = u((f = ga(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(Kn(d) / 3))) * 3, v = Math.pow(10, -y), p = Ep[8 + y / 3];
    return function(g) {
      return h(v * g) + p;
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var lo, Nf, Wg;
M2({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function M2(e) {
  return lo = $2(e), Nf = lo.format, Wg = lo.formatPrefix, lo;
}
function C2(e) {
  return Math.max(0, -Kn(Math.abs(e)));
}
function I2(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Kn(t) / 3))) * 3 - Kn(Math.abs(e)));
}
function k2(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Kn(t) - Kn(e)) + 1;
}
function zg(e, t, r, n) {
  var i = Zu(e, t, r), a;
  switch (n = ga(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = I2(i, o)) && (n.precision = a), Wg(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = k2(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = C2(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Nf(n);
}
function Nr(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Qu(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return zg(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], s = n[a], c, u, l = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); l-- > 0; ) {
      if (u = Ju(o, s, r), u === c)
        return n[i] = o, n[a] = s, t(n);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return e;
  }, e;
}
function Yo() {
  var e = If();
  return e.copy = function() {
    return Za(e, Yo());
  }, $t.apply(e, arguments), Nr(e);
}
function Ug(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, qo), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Ug(e).unknown(t);
  }, e = arguments.length ? Array.from(e, qo) : [0, 1], Nr(r);
}
function qg(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function jp(e) {
  return Math.log(e);
}
function $p(e) {
  return Math.exp(e);
}
function N2(e) {
  return -Math.log(-e);
}
function R2(e) {
  return -Math.exp(-e);
}
function D2(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function L2(e) {
  return e === 10 ? D2 : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function B2(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Mp(e) {
  return (t, r) => -e(-t, r);
}
function Rf(e) {
  const t = e(jp, $p), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = B2(n), a = L2(n), r()[0] < 0 ? (i = Mp(i), a = Mp(a), e(N2, R2)) : e(jp, $p), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, o()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), o()) : r();
  }, t.ticks = (s) => {
    const c = r();
    let u = c[0], l = c[c.length - 1];
    const f = l < u;
    f && ([u, l] = [l, u]);
    let d = i(u), h = i(l), y, v;
    const p = s == null ? 10 : +s;
    let g = [];
    if (!(n % 1) && h - d < p) {
      if (d = Math.floor(d), h = Math.ceil(h), u > 0) {
        for (; d <= h; ++d)
          for (y = 1; y < n; ++y)
            if (v = d < 0 ? y / a(-d) : y * a(d), !(v < u)) {
              if (v > l) break;
              g.push(v);
            }
      } else for (; d <= h; ++d)
        for (y = n - 1; y >= 1; --y)
          if (v = d > 0 ? y / a(-d) : y * a(d), !(v < u)) {
            if (v > l) break;
            g.push(v);
          }
      g.length * 2 < p && (g = Qu(u, l, p));
    } else
      g = Qu(d, h, Math.min(h - d, p)).map(a);
    return f ? g.reverse() : g;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = ga(c)).precision == null && (c.trim = !0), c = Nf(c)), s === 1 / 0) return c;
    const u = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let f = l / a(Math.round(i(l)));
      return f * n < n - 0.5 && (f *= n), f <= u ? c(l) : "";
    };
  }, t.nice = () => r(qg(r(), {
    floor: (s) => a(Math.floor(i(s))),
    ceil: (s) => a(Math.ceil(i(s)))
  })), t;
}
function Gg() {
  const e = Rf(Us()).domain([1, 10]);
  return e.copy = () => Za(e, Gg()).base(e.base()), $t.apply(e, arguments), e;
}
function Cp(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Ip(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Df(e) {
  var t = 1, r = e(Cp(t), Ip(t));
  return r.constant = function(n) {
    return arguments.length ? e(Cp(t = +n), Ip(t)) : t;
  }, Nr(r);
}
function Yg() {
  var e = Df(Us());
  return e.copy = function() {
    return Za(e, Yg()).constant(e.constant());
  }, $t.apply(e, arguments);
}
function kp(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function F2(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function W2(e) {
  return e < 0 ? -e * e : e * e;
}
function Lf(e) {
  var t = e(ft, ft), r = 1;
  function n() {
    return r === 1 ? e(ft, ft) : r === 0.5 ? e(F2, W2) : e(kp(r), kp(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Nr(t);
}
function Bf() {
  var e = Lf(Us());
  return e.copy = function() {
    return Za(e, Bf()).exponent(e.exponent());
  }, $t.apply(e, arguments), e;
}
function z2() {
  return Bf.apply(null, arguments).exponent(0.5);
}
function Np(e) {
  return Math.sign(e) * e * e;
}
function U2(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Hg() {
  var e = If(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = U2(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(Np(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, qo)).map(Np)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Hg(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, $t.apply(i, arguments), Nr(i);
}
function Kg() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = KN(e, o / s);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Qa(r, o)];
  }
  return a.invertExtent = function(o) {
    var s = t.indexOf(o);
    return s < 0 ? [NaN, NaN] : [
      s > 0 ? r[s - 1] : e[0],
      s < r.length ? r[s] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let s of o) s != null && !isNaN(s = +s) && e.push(s);
    return e.sort(Mr), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Kg().domain(e).range(t).unknown(n);
  }, $t.apply(a, arguments);
}
function Vg() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(c) {
    return c != null && c <= c ? i[Qa(n, c, 0, r)] : a;
  }
  function s() {
    var c = -1;
    for (n = new Array(r); ++c < r; ) n[c] = ((c + 1) * t - (c - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(c) {
    return arguments.length ? ([e, t] = c, e = +e, t = +t, s()) : [e, t];
  }, o.range = function(c) {
    return arguments.length ? (r = (i = Array.from(c)).length - 1, s()) : i.slice();
  }, o.invertExtent = function(c) {
    var u = i.indexOf(c);
    return u < 0 ? [NaN, NaN] : u < 1 ? [e, n[0]] : u >= r ? [n[r - 1], t] : [n[u - 1], n[u]];
  }, o.unknown = function(c) {
    return arguments.length && (a = c), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Vg().domain([e, t]).range(i).unknown(a);
  }, $t.apply(Nr(o), arguments);
}
function Xg() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Qa(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return Xg().domain(e).range(t).unknown(r);
  }, $t.apply(i, arguments);
}
const Lc = /* @__PURE__ */ new Date(), Bc = /* @__PURE__ */ new Date();
function Ze(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), s = i.ceil(a);
    return a - o < s - a ? o : s;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, s) => {
    const c = [];
    if (a = i.ceil(a), s = s == null ? 1 : Math.floor(s), !(a < o) || !(s > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+a)), t(a, s), e(a);
    while (u < a && a < o);
    return c;
  }, i.filter = (a) => Ze((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o)
      if (s < 0) for (; ++s <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --s >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (Lc.setTime(+a), Bc.setTime(+o), e(Lc), e(Bc), Math.floor(r(Lc, Bc))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const Ho = Ze(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Ho.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ze((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Ho);
Ho.range;
const er = 1e3, Tt = er * 60, tr = Tt * 60, sr = tr * 24, Ff = sr * 7, Rp = sr * 30, Fc = sr * 365, Vr = Ze((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * er);
}, (e, t) => (t - e) / er, (e) => e.getUTCSeconds());
Vr.range;
const Wf = Ze((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * er);
}, (e, t) => {
  e.setTime(+e + t * Tt);
}, (e, t) => (t - e) / Tt, (e) => e.getMinutes());
Wf.range;
const zf = Ze((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Tt);
}, (e, t) => (t - e) / Tt, (e) => e.getUTCMinutes());
zf.range;
const Uf = Ze((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * er - e.getMinutes() * Tt);
}, (e, t) => {
  e.setTime(+e + t * tr);
}, (e, t) => (t - e) / tr, (e) => e.getHours());
Uf.range;
const qf = Ze((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * tr);
}, (e, t) => (t - e) / tr, (e) => e.getUTCHours());
qf.range;
const eo = Ze(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Tt) / sr,
  (e) => e.getDate() - 1
);
eo.range;
const qs = Ze((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / sr, (e) => e.getUTCDate() - 1);
qs.range;
const Qg = Ze((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / sr, (e) => Math.floor(e / sr));
Qg.range;
function hn(e) {
  return Ze((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Tt) / Ff);
}
const Gs = hn(0), Ko = hn(1), q2 = hn(2), G2 = hn(3), Vn = hn(4), Y2 = hn(5), H2 = hn(6);
Gs.range;
Ko.range;
q2.range;
G2.range;
Vn.range;
Y2.range;
H2.range;
function pn(e) {
  return Ze((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Ff);
}
const Ys = pn(0), Vo = pn(1), K2 = pn(2), V2 = pn(3), Xn = pn(4), X2 = pn(5), Q2 = pn(6);
Ys.range;
Vo.range;
K2.range;
V2.range;
Xn.range;
X2.range;
Q2.range;
const Gf = Ze((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Gf.range;
const Yf = Ze((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Yf.range;
const cr = Ze((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
cr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ze((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
cr.range;
const ur = Ze((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
ur.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ze((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
ur.range;
function Jg(e, t, r, n, i, a) {
  const o = [
    [Vr, 1, er],
    [Vr, 5, 5 * er],
    [Vr, 15, 15 * er],
    [Vr, 30, 30 * er],
    [a, 1, Tt],
    [a, 5, 5 * Tt],
    [a, 15, 15 * Tt],
    [a, 30, 30 * Tt],
    [i, 1, tr],
    [i, 3, 3 * tr],
    [i, 6, 6 * tr],
    [i, 12, 12 * tr],
    [n, 1, sr],
    [n, 2, 2 * sr],
    [r, 1, Ff],
    [t, 1, Rp],
    [t, 3, 3 * Rp],
    [e, 1, Fc]
  ];
  function s(u, l, f) {
    const d = l < u;
    d && ([u, l] = [l, u]);
    const h = f && typeof f.range == "function" ? f : c(u, l, f), y = h ? h.range(u, +l + 1) : [];
    return d ? y.reverse() : y;
  }
  function c(u, l, f) {
    const d = Math.abs(l - u) / f, h = Ef(([, , p]) => p).right(o, d);
    if (h === o.length) return e.every(Zu(u / Fc, l / Fc, f));
    if (h === 0) return Ho.every(Math.max(Zu(u, l, f), 1));
    const [y, v] = o[d / o[h - 1][2] < o[h][2] / d ? h - 1 : h];
    return y.every(v);
  }
  return [s, c];
}
const [J2, Z2] = Jg(ur, Yf, Ys, Qg, qf, zf), [eR, tR] = Jg(cr, Gf, Gs, eo, Uf, Wf);
function Wc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function zc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Ri(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function rR(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, u = Di(i), l = Li(i), f = Di(a), d = Li(a), h = Di(o), y = Li(o), v = Di(s), p = Li(s), g = Di(c), x = Li(c), b = {
    a: F,
    A: U,
    b: Y,
    B: M,
    c: null,
    d: zp,
    e: zp,
    f: PR,
    g: NR,
    G: DR,
    H: OR,
    I: SR,
    j: _R,
    L: Zg,
    m: AR,
    M: TR,
    p: R,
    q: W,
    Q: Gp,
    s: Yp,
    S: ER,
    u: jR,
    U: $R,
    V: MR,
    w: CR,
    W: IR,
    x: null,
    X: null,
    y: kR,
    Y: RR,
    Z: LR,
    "%": qp
  }, S = {
    a: q,
    A: J,
    b: te,
    B: ne,
    c: null,
    d: Up,
    e: Up,
    f: zR,
    g: JR,
    G: eD,
    H: BR,
    I: FR,
    j: WR,
    L: tb,
    m: UR,
    M: qR,
    p: ae,
    q: ie,
    Q: Gp,
    s: Yp,
    S: GR,
    u: YR,
    U: HR,
    V: KR,
    w: VR,
    W: XR,
    x: null,
    X: null,
    y: QR,
    Y: ZR,
    Z: tD,
    "%": qp
  }, m = {
    a: I,
    A: j,
    b: $,
    B: k,
    c: D,
    d: Fp,
    e: Fp,
    f: gR,
    g: Bp,
    G: Lp,
    H: Wp,
    I: Wp,
    j: pR,
    L: mR,
    m: hR,
    M: vR,
    p: T,
    q: dR,
    Q: xR,
    s: wR,
    S: yR,
    u: sR,
    U: cR,
    V: uR,
    w: oR,
    W: lR,
    x: L,
    X: N,
    y: Bp,
    Y: Lp,
    Z: fR,
    "%": bR
  };
  b.x = w(r, b), b.X = w(n, b), b.c = w(t, b), S.x = w(r, S), S.X = w(n, S), S.c = w(t, S);
  function w(z, Q) {
    return function(re) {
      var C = [], he = -1, H = 0, be = z.length, xe, qe, Mt;
      for (re instanceof Date || (re = /* @__PURE__ */ new Date(+re)); ++he < be; )
        z.charCodeAt(he) === 37 && (C.push(z.slice(H, he)), (qe = Dp[xe = z.charAt(++he)]) != null ? xe = z.charAt(++he) : qe = xe === "e" ? " " : "0", (Mt = Q[xe]) && (xe = Mt(re, qe)), C.push(xe), H = he + 1);
      return C.push(z.slice(H, he)), C.join("");
    };
  }
  function O(z, Q) {
    return function(re) {
      var C = Ri(1900, void 0, 1), he = _(C, z, re += "", 0), H, be;
      if (he != re.length) return null;
      if ("Q" in C) return new Date(C.Q);
      if ("s" in C) return new Date(C.s * 1e3 + ("L" in C ? C.L : 0));
      if (Q && !("Z" in C) && (C.Z = 0), "p" in C && (C.H = C.H % 12 + C.p * 12), C.m === void 0 && (C.m = "q" in C ? C.q : 0), "V" in C) {
        if (C.V < 1 || C.V > 53) return null;
        "w" in C || (C.w = 1), "Z" in C ? (H = zc(Ri(C.y, 0, 1)), be = H.getUTCDay(), H = be > 4 || be === 0 ? Vo.ceil(H) : Vo(H), H = qs.offset(H, (C.V - 1) * 7), C.y = H.getUTCFullYear(), C.m = H.getUTCMonth(), C.d = H.getUTCDate() + (C.w + 6) % 7) : (H = Wc(Ri(C.y, 0, 1)), be = H.getDay(), H = be > 4 || be === 0 ? Ko.ceil(H) : Ko(H), H = eo.offset(H, (C.V - 1) * 7), C.y = H.getFullYear(), C.m = H.getMonth(), C.d = H.getDate() + (C.w + 6) % 7);
      } else ("W" in C || "U" in C) && ("w" in C || (C.w = "u" in C ? C.u % 7 : "W" in C ? 1 : 0), be = "Z" in C ? zc(Ri(C.y, 0, 1)).getUTCDay() : Wc(Ri(C.y, 0, 1)).getDay(), C.m = 0, C.d = "W" in C ? (C.w + 6) % 7 + C.W * 7 - (be + 5) % 7 : C.w + C.U * 7 - (be + 6) % 7);
      return "Z" in C ? (C.H += C.Z / 100 | 0, C.M += C.Z % 100, zc(C)) : Wc(C);
    };
  }
  function _(z, Q, re, C) {
    for (var he = 0, H = Q.length, be = re.length, xe, qe; he < H; ) {
      if (C >= be) return -1;
      if (xe = Q.charCodeAt(he++), xe === 37) {
        if (xe = Q.charAt(he++), qe = m[xe in Dp ? Q.charAt(he++) : xe], !qe || (C = qe(z, re, C)) < 0) return -1;
      } else if (xe != re.charCodeAt(C++))
        return -1;
    }
    return C;
  }
  function T(z, Q, re) {
    var C = u.exec(Q.slice(re));
    return C ? (z.p = l.get(C[0].toLowerCase()), re + C[0].length) : -1;
  }
  function I(z, Q, re) {
    var C = h.exec(Q.slice(re));
    return C ? (z.w = y.get(C[0].toLowerCase()), re + C[0].length) : -1;
  }
  function j(z, Q, re) {
    var C = f.exec(Q.slice(re));
    return C ? (z.w = d.get(C[0].toLowerCase()), re + C[0].length) : -1;
  }
  function $(z, Q, re) {
    var C = g.exec(Q.slice(re));
    return C ? (z.m = x.get(C[0].toLowerCase()), re + C[0].length) : -1;
  }
  function k(z, Q, re) {
    var C = v.exec(Q.slice(re));
    return C ? (z.m = p.get(C[0].toLowerCase()), re + C[0].length) : -1;
  }
  function D(z, Q, re) {
    return _(z, t, Q, re);
  }
  function L(z, Q, re) {
    return _(z, r, Q, re);
  }
  function N(z, Q, re) {
    return _(z, n, Q, re);
  }
  function F(z) {
    return o[z.getDay()];
  }
  function U(z) {
    return a[z.getDay()];
  }
  function Y(z) {
    return c[z.getMonth()];
  }
  function M(z) {
    return s[z.getMonth()];
  }
  function R(z) {
    return i[+(z.getHours() >= 12)];
  }
  function W(z) {
    return 1 + ~~(z.getMonth() / 3);
  }
  function q(z) {
    return o[z.getUTCDay()];
  }
  function J(z) {
    return a[z.getUTCDay()];
  }
  function te(z) {
    return c[z.getUTCMonth()];
  }
  function ne(z) {
    return s[z.getUTCMonth()];
  }
  function ae(z) {
    return i[+(z.getUTCHours() >= 12)];
  }
  function ie(z) {
    return 1 + ~~(z.getUTCMonth() / 3);
  }
  return {
    format: function(z) {
      var Q = w(z += "", b);
      return Q.toString = function() {
        return z;
      }, Q;
    },
    parse: function(z) {
      var Q = O(z += "", !1);
      return Q.toString = function() {
        return z;
      }, Q;
    },
    utcFormat: function(z) {
      var Q = w(z += "", S);
      return Q.toString = function() {
        return z;
      }, Q;
    },
    utcParse: function(z) {
      var Q = O(z += "", !0);
      return Q.toString = function() {
        return z;
      }, Q;
    }
  };
}
var Dp = { "-": "", _: " ", 0: "0" }, rt = /^\s*\d+/, nR = /^%/, iR = /[\\^$*+?|[\]().{}]/g;
function ge(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function aR(e) {
  return e.replace(iR, "\\$&");
}
function Di(e) {
  return new RegExp("^(?:" + e.map(aR).join("|") + ")", "i");
}
function Li(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function oR(e, t, r) {
  var n = rt.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function sR(e, t, r) {
  var n = rt.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function cR(e, t, r) {
  var n = rt.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function uR(e, t, r) {
  var n = rt.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function lR(e, t, r) {
  var n = rt.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Lp(e, t, r) {
  var n = rt.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Bp(e, t, r) {
  var n = rt.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function fR(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function dR(e, t, r) {
  var n = rt.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function hR(e, t, r) {
  var n = rt.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Fp(e, t, r) {
  var n = rt.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function pR(e, t, r) {
  var n = rt.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Wp(e, t, r) {
  var n = rt.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function vR(e, t, r) {
  var n = rt.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function yR(e, t, r) {
  var n = rt.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function mR(e, t, r) {
  var n = rt.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function gR(e, t, r) {
  var n = rt.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function bR(e, t, r) {
  var n = nR.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function xR(e, t, r) {
  var n = rt.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function wR(e, t, r) {
  var n = rt.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function zp(e, t) {
  return ge(e.getDate(), t, 2);
}
function OR(e, t) {
  return ge(e.getHours(), t, 2);
}
function SR(e, t) {
  return ge(e.getHours() % 12 || 12, t, 2);
}
function _R(e, t) {
  return ge(1 + eo.count(cr(e), e), t, 3);
}
function Zg(e, t) {
  return ge(e.getMilliseconds(), t, 3);
}
function PR(e, t) {
  return Zg(e, t) + "000";
}
function AR(e, t) {
  return ge(e.getMonth() + 1, t, 2);
}
function TR(e, t) {
  return ge(e.getMinutes(), t, 2);
}
function ER(e, t) {
  return ge(e.getSeconds(), t, 2);
}
function jR(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function $R(e, t) {
  return ge(Gs.count(cr(e) - 1, e), t, 2);
}
function eb(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Vn(e) : Vn.ceil(e);
}
function MR(e, t) {
  return e = eb(e), ge(Vn.count(cr(e), e) + (cr(e).getDay() === 4), t, 2);
}
function CR(e) {
  return e.getDay();
}
function IR(e, t) {
  return ge(Ko.count(cr(e) - 1, e), t, 2);
}
function kR(e, t) {
  return ge(e.getFullYear() % 100, t, 2);
}
function NR(e, t) {
  return e = eb(e), ge(e.getFullYear() % 100, t, 2);
}
function RR(e, t) {
  return ge(e.getFullYear() % 1e4, t, 4);
}
function DR(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Vn(e) : Vn.ceil(e), ge(e.getFullYear() % 1e4, t, 4);
}
function LR(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ge(t / 60 | 0, "0", 2) + ge(t % 60, "0", 2);
}
function Up(e, t) {
  return ge(e.getUTCDate(), t, 2);
}
function BR(e, t) {
  return ge(e.getUTCHours(), t, 2);
}
function FR(e, t) {
  return ge(e.getUTCHours() % 12 || 12, t, 2);
}
function WR(e, t) {
  return ge(1 + qs.count(ur(e), e), t, 3);
}
function tb(e, t) {
  return ge(e.getUTCMilliseconds(), t, 3);
}
function zR(e, t) {
  return tb(e, t) + "000";
}
function UR(e, t) {
  return ge(e.getUTCMonth() + 1, t, 2);
}
function qR(e, t) {
  return ge(e.getUTCMinutes(), t, 2);
}
function GR(e, t) {
  return ge(e.getUTCSeconds(), t, 2);
}
function YR(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function HR(e, t) {
  return ge(Ys.count(ur(e) - 1, e), t, 2);
}
function rb(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Xn(e) : Xn.ceil(e);
}
function KR(e, t) {
  return e = rb(e), ge(Xn.count(ur(e), e) + (ur(e).getUTCDay() === 4), t, 2);
}
function VR(e) {
  return e.getUTCDay();
}
function XR(e, t) {
  return ge(Vo.count(ur(e) - 1, e), t, 2);
}
function QR(e, t) {
  return ge(e.getUTCFullYear() % 100, t, 2);
}
function JR(e, t) {
  return e = rb(e), ge(e.getUTCFullYear() % 100, t, 2);
}
function ZR(e, t) {
  return ge(e.getUTCFullYear() % 1e4, t, 4);
}
function eD(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Xn(e) : Xn.ceil(e), ge(e.getUTCFullYear() % 1e4, t, 4);
}
function tD() {
  return "+0000";
}
function qp() {
  return "%";
}
function Gp(e) {
  return +e;
}
function Yp(e) {
  return Math.floor(+e / 1e3);
}
var On, nb, ib;
rD({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function rD(e) {
  return On = rR(e), nb = On.format, On.parse, ib = On.utcFormat, On.utcParse, On;
}
function nD(e) {
  return new Date(e);
}
function iD(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Hf(e, t, r, n, i, a, o, s, c, u) {
  var l = If(), f = l.invert, d = l.domain, h = u(".%L"), y = u(":%S"), v = u("%I:%M"), p = u("%I %p"), g = u("%a %d"), x = u("%b %d"), b = u("%B"), S = u("%Y");
  function m(w) {
    return (c(w) < w ? h : s(w) < w ? y : o(w) < w ? v : a(w) < w ? p : n(w) < w ? i(w) < w ? g : x : r(w) < w ? b : S)(w);
  }
  return l.invert = function(w) {
    return new Date(f(w));
  }, l.domain = function(w) {
    return arguments.length ? d(Array.from(w, iD)) : d().map(nD);
  }, l.ticks = function(w) {
    var O = d();
    return e(O[0], O[O.length - 1], w ?? 10);
  }, l.tickFormat = function(w, O) {
    return O == null ? m : u(O);
  }, l.nice = function(w) {
    var O = d();
    return (!w || typeof w.range != "function") && (w = t(O[0], O[O.length - 1], w ?? 10)), w ? d(qg(O, w)) : l;
  }, l.copy = function() {
    return Za(l, Hf(e, t, r, n, i, a, o, s, c, u));
  }, l;
}
function aD() {
  return $t.apply(Hf(eR, tR, cr, Gf, Gs, eo, Uf, Wf, Vr, nb).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function oD() {
  return $t.apply(Hf(J2, Z2, ur, Yf, Ys, qs, qf, zf, Vr, ib).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Hs() {
  var e = 0, t = 1, r, n, i, a, o = ft, s = !1, c;
  function u(f) {
    return f == null || isNaN(f = +f) ? c : o(i === 0 ? 0.5 : (f = (a(f) - r) * i, s ? Math.max(0, Math.min(1, f)) : f));
  }
  u.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), u) : [e, t];
  }, u.clamp = function(f) {
    return arguments.length ? (s = !!f, u) : s;
  }, u.interpolator = function(f) {
    return arguments.length ? (o = f, u) : o;
  };
  function l(f) {
    return function(d) {
      var h, y;
      return arguments.length ? ([h, y] = d, o = f(h, y), u) : [o(0), o(1)];
    };
  }
  return u.range = l(Oi), u.rangeRound = l(Cf), u.unknown = function(f) {
    return arguments.length ? (c = f, u) : c;
  }, function(f) {
    return a = f, r = f(e), n = f(t), i = r === n ? 0 : 1 / (n - r), u;
  };
}
function Rr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function ab() {
  var e = Nr(Hs()(ft));
  return e.copy = function() {
    return Rr(e, ab());
  }, pr.apply(e, arguments);
}
function ob() {
  var e = Rf(Hs()).domain([1, 10]);
  return e.copy = function() {
    return Rr(e, ob()).base(e.base());
  }, pr.apply(e, arguments);
}
function sb() {
  var e = Df(Hs());
  return e.copy = function() {
    return Rr(e, sb()).constant(e.constant());
  }, pr.apply(e, arguments);
}
function Kf() {
  var e = Lf(Hs());
  return e.copy = function() {
    return Rr(e, Kf()).exponent(e.exponent());
  }, pr.apply(e, arguments);
}
function sD() {
  return Kf.apply(null, arguments).exponent(0.5);
}
function cb() {
  var e = [], t = ft;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Qa(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Mr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => HN(e, a / n));
  }, r.copy = function() {
    return cb(t).domain(e);
  }, pr.apply(r, arguments);
}
function Ks() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, s, c, u = ft, l, f = !1, d;
  function h(v) {
    return isNaN(v = +v) ? d : (v = 0.5 + ((v = +l(v)) - a) * (n * v < n * a ? s : c), u(f ? Math.max(0, Math.min(1, v)) : v));
  }
  h.domain = function(v) {
    return arguments.length ? ([e, t, r] = v, i = l(e = +e), a = l(t = +t), o = l(r = +r), s = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h) : [e, t, r];
  }, h.clamp = function(v) {
    return arguments.length ? (f = !!v, h) : f;
  }, h.interpolator = function(v) {
    return arguments.length ? (u = v, h) : u;
  };
  function y(v) {
    return function(p) {
      var g, x, b;
      return arguments.length ? ([g, x, b] = p, u = b2(v, [g, x, b]), h) : [u(0), u(0.5), u(1)];
    };
  }
  return h.range = y(Oi), h.rangeRound = y(Cf), h.unknown = function(v) {
    return arguments.length ? (d = v, h) : d;
  }, function(v) {
    return l = v, i = v(e), a = v(t), o = v(r), s = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h;
  };
}
function ub() {
  var e = Nr(Ks()(ft));
  return e.copy = function() {
    return Rr(e, ub());
  }, pr.apply(e, arguments);
}
function lb() {
  var e = Rf(Ks()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Rr(e, lb()).base(e.base());
  }, pr.apply(e, arguments);
}
function fb() {
  var e = Df(Ks());
  return e.copy = function() {
    return Rr(e, fb()).constant(e.constant());
  }, pr.apply(e, arguments);
}
function Vf() {
  var e = Lf(Ks());
  return e.copy = function() {
    return Rr(e, Vf()).exponent(e.exponent());
  }, pr.apply(e, arguments);
}
function cD() {
  return Vf.apply(null, arguments).exponent(0.5);
}
const Hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: pa,
  scaleDiverging: ub,
  scaleDivergingLog: lb,
  scaleDivergingPow: Vf,
  scaleDivergingSqrt: cD,
  scaleDivergingSymlog: fb,
  scaleIdentity: Ug,
  scaleImplicit: el,
  scaleLinear: Yo,
  scaleLog: Gg,
  scaleOrdinal: jf,
  scalePoint: Ji,
  scalePow: Bf,
  scaleQuantile: Kg,
  scaleQuantize: Vg,
  scaleRadial: Hg,
  scaleSequential: ab,
  scaleSequentialLog: ob,
  scaleSequentialPow: Kf,
  scaleSequentialQuantile: cb,
  scaleSequentialSqrt: sD,
  scaleSequentialSymlog: sb,
  scaleSqrt: z2,
  scaleSymlog: Yg,
  scaleThreshold: Xg,
  scaleTime: aD,
  scaleUtc: oD,
  tickFormat: zg
}, Symbol.toStringTag, { value: "Module" }));
var uD = pi;
function lD(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n], o = t(a);
    if (o != null && (s === void 0 ? o === o && !uD(o) : r(o, s)))
      var s = o, c = a;
  }
  return c;
}
var Vs = lD;
function fD(e, t) {
  return e > t;
}
var db = fD, dD = Vs, hD = db, pD = wi;
function vD(e) {
  return e && e.length ? dD(e, pD, hD) : void 0;
}
var yD = vD;
const Xs = /* @__PURE__ */ Me(yD);
function mD(e, t) {
  return e < t;
}
var hb = mD, gD = Vs, bD = hb, xD = wi;
function wD(e) {
  return e && e.length ? gD(e, xD, bD) : void 0;
}
var OD = wD;
const Qs = /* @__PURE__ */ Me(OD);
var SD = ff, _D = Kt, PD = wg, AD = yt;
function TD(e, t) {
  var r = AD(e) ? SD : PD;
  return r(e, _D(t));
}
var ED = TD, jD = bg, $D = ED;
function MD(e, t) {
  return jD($D(e, t), 1);
}
var CD = MD;
const ID = /* @__PURE__ */ Me(CD);
var kD = _f;
function ND(e, t) {
  return kD(e, t);
}
var RD = ND;
const Js = /* @__PURE__ */ Me(RD);
var Si = 1e9, DD = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Qf, Fe = !0, jt = "[DecimalError] ", nn = jt + "Invalid argument: ", Xf = jt + "Exponent out of range: ", _i = Math.floor, qr = Math.pow, LD = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, xt, et = 1e7, Be = 7, pb = 9007199254740991, Xo = _i(pb / Be), ee = {};
ee.absoluteValue = ee.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
ee.comparedTo = ee.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
ee.decimalPlaces = ee.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * Be;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
ee.dividedBy = ee.div = function(e) {
  return ar(this, new this.constructor(e));
};
ee.dividedToIntegerBy = ee.idiv = function(e) {
  var t = this, r = t.constructor;
  return Ie(ar(t, new r(e), 0, 1), r.precision);
};
ee.equals = ee.eq = function(e) {
  return !this.cmp(e);
};
ee.exponent = function() {
  return Ke(this);
};
ee.greaterThan = ee.gt = function(e) {
  return this.cmp(e) > 0;
};
ee.greaterThanOrEqualTo = ee.gte = function(e) {
  return this.cmp(e) >= 0;
};
ee.isInteger = ee.isint = function() {
  return this.e > this.d.length - 2;
};
ee.isNegative = ee.isneg = function() {
  return this.s < 0;
};
ee.isPositive = ee.ispos = function() {
  return this.s > 0;
};
ee.isZero = function() {
  return this.s === 0;
};
ee.lessThan = ee.lt = function(e) {
  return this.cmp(e) < 0;
};
ee.lessThanOrEqualTo = ee.lte = function(e) {
  return this.cmp(e) < 1;
};
ee.logarithm = ee.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(xt)) throw Error(jt + "NaN");
  if (r.s < 1) throw Error(jt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(xt) ? new n(0) : (Fe = !1, t = ar(ba(r, a), ba(e, a), a), Fe = !0, Ie(t, i));
};
ee.minus = ee.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? mb(t, e) : vb(t, (e.s = -e.s, e));
};
ee.modulo = ee.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(jt + "NaN");
  return r.s ? (Fe = !1, t = ar(r, e, 0, 1).times(e), Fe = !0, r.minus(t)) : Ie(new n(r), i);
};
ee.naturalExponential = ee.exp = function() {
  return yb(this);
};
ee.naturalLogarithm = ee.ln = function() {
  return ba(this);
};
ee.negated = ee.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
ee.plus = ee.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? vb(t, e) : mb(t, (e.s = -e.s, e));
};
ee.precision = ee.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(nn + e);
  if (t = Ke(i) + 1, n = i.d.length - 1, r = n * Be + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
ee.squareRoot = ee.sqrt = function() {
  var e, t, r, n, i, a, o, s = this, c = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new c(0);
    throw Error(jt + "NaN");
  }
  for (e = Ke(s), Fe = !1, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = zt(s.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = _i((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new c(t)) : n = new c(i.toString()), r = c.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(ar(s, a, o + 2)).times(0.5), zt(a.d).slice(0, o) === (t = zt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (Ie(a, r + 1, 0), a.times(a).eq(s)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return Fe = !0, Ie(n, r);
};
ee.times = ee.mul = function(e) {
  var t, r, n, i, a, o, s, c, u, l = this, f = l.constructor, d = l.d, h = (e = new f(e)).d;
  if (!l.s || !e.s) return new f(0);
  for (e.s *= l.s, r = l.e + e.e, c = d.length, u = h.length, c < u && (a = d, d = h, h = a, o = c, c = u, u = o), a = [], o = c + u, n = o; n--; ) a.push(0);
  for (n = u; --n >= 0; ) {
    for (t = 0, i = c + n; i > n; )
      s = a[i] + h[n] * d[i - n - 1] + t, a[i--] = s % et | 0, t = s / et | 0;
    a[i] = (a[i] + t) % et | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, Fe ? Ie(e, f.precision) : e;
};
ee.toDecimalPlaces = ee.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Gt(e, 0, Si), t === void 0 ? t = n.rounding : Gt(t, 0, 8), Ie(r, e + Ke(r) + 1, t));
};
ee.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = cn(n, !0) : (Gt(e, 0, Si), t === void 0 ? t = i.rounding : Gt(t, 0, 8), n = Ie(new i(n), e + 1, t), r = cn(n, !0, e + 1)), r;
};
ee.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? cn(i) : (Gt(e, 0, Si), t === void 0 ? t = a.rounding : Gt(t, 0, 8), n = Ie(new a(i), e + Ke(i) + 1, t), r = cn(n.abs(), !1, e + Ke(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
ee.toInteger = ee.toint = function() {
  var e = this, t = e.constructor;
  return Ie(new t(e), Ke(e) + 1, t.rounding);
};
ee.toNumber = function() {
  return +this;
};
ee.toPower = ee.pow = function(e) {
  var t, r, n, i, a, o, s = this, c = s.constructor, u = 12, l = +(e = new c(e));
  if (!e.s) return new c(xt);
  if (s = new c(s), !s.s) {
    if (e.s < 1) throw Error(jt + "Infinity");
    return s;
  }
  if (s.eq(xt)) return s;
  if (n = c.precision, e.eq(xt)) return Ie(s, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = s.s, o) {
    if ((r = l < 0 ? -l : l) <= pb) {
      for (i = new c(xt), t = Math.ceil(n / Be + 4), Fe = !1; r % 2 && (i = i.times(s), Vp(i.d, t)), r = _i(r / 2), r !== 0; )
        s = s.times(s), Vp(s.d, t);
      return Fe = !0, e.s < 0 ? new c(xt).div(i) : Ie(i, n);
    }
  } else if (a < 0) throw Error(jt + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Fe = !1, i = e.times(ba(s, n + u)), Fe = !0, i = yb(i), i.s = a, i;
};
ee.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = Ke(i), n = cn(i, r <= a.toExpNeg || r >= a.toExpPos)) : (Gt(e, 1, Si), t === void 0 ? t = a.rounding : Gt(t, 0, 8), i = Ie(new a(i), e, t), r = Ke(i), n = cn(i, e <= r || r <= a.toExpNeg, e)), n;
};
ee.toSignificantDigits = ee.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Gt(e, 1, Si), t === void 0 ? t = n.rounding : Gt(t, 0, 8)), Ie(new n(r), e, t);
};
ee.toString = ee.valueOf = ee.val = ee.toJSON = ee[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Ke(e), r = e.constructor;
  return cn(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function vb(e, t) {
  var r, n, i, a, o, s, c, u, l = e.constructor, f = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), Fe ? Ie(t, f) : t;
  if (c = e.d, u = t.d, o = e.e, i = t.e, c = c.slice(), a = o - i, a) {
    for (a < 0 ? (n = c, a = -a, s = u.length) : (n = u, i = o, s = c.length), o = Math.ceil(f / Be), s = o > s ? o + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (s = c.length, a = u.length, s - a < 0 && (a = s, n = u, u = c, c = n), r = 0; a; )
    r = (c[--a] = c[a] + u[a] + r) / et | 0, c[a] %= et;
  for (r && (c.unshift(r), ++i), s = c.length; c[--s] == 0; ) c.pop();
  return t.d = c, t.e = i, Fe ? Ie(t, f) : t;
}
function Gt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(nn + e);
}
function zt(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = Be - n.length, r && (a += Or(r)), a += n;
    o = e[t], n = o + "", r = Be - n.length, r && (a += Or(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var ar = /* @__PURE__ */ function() {
  function e(n, i) {
    var a, o = 0, s = n.length;
    for (n = n.slice(); s--; )
      a = n[s] * i + o, n[s] = a % et | 0, o = a / et | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var s, c;
    if (a != o)
      c = a > o ? 1 : -1;
    else
      for (s = c = 0; s < a; s++)
        if (n[s] != i[s]) {
          c = n[s] > i[s] ? 1 : -1;
          break;
        }
    return c;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * et + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var s, c, u, l, f, d, h, y, v, p, g, x, b, S, m, w, O, _, T = n.constructor, I = n.s == i.s ? 1 : -1, j = n.d, $ = i.d;
    if (!n.s) return new T(n);
    if (!i.s) throw Error(jt + "Division by zero");
    for (c = n.e - i.e, O = $.length, m = j.length, h = new T(I), y = h.d = [], u = 0; $[u] == (j[u] || 0); ) ++u;
    if ($[u] > (j[u] || 0) && --c, a == null ? x = a = T.precision : o ? x = a + (Ke(n) - Ke(i)) + 1 : x = a, x < 0) return new T(0);
    if (x = x / Be + 2 | 0, u = 0, O == 1)
      for (l = 0, $ = $[0], x++; (u < m || l) && x--; u++)
        b = l * et + (j[u] || 0), y[u] = b / $ | 0, l = b % $ | 0;
    else {
      for (l = et / ($[0] + 1) | 0, l > 1 && ($ = e($, l), j = e(j, l), O = $.length, m = j.length), S = O, v = j.slice(0, O), p = v.length; p < O; ) v[p++] = 0;
      _ = $.slice(), _.unshift(0), w = $[0], $[1] >= et / 2 && ++w;
      do
        l = 0, s = t($, v, O, p), s < 0 ? (g = v[0], O != p && (g = g * et + (v[1] || 0)), l = g / w | 0, l > 1 ? (l >= et && (l = et - 1), f = e($, l), d = f.length, p = v.length, s = t(f, v, d, p), s == 1 && (l--, r(f, O < d ? _ : $, d))) : (l == 0 && (s = l = 1), f = $.slice()), d = f.length, d < p && f.unshift(0), r(v, f, p), s == -1 && (p = v.length, s = t($, v, O, p), s < 1 && (l++, r(v, O < p ? _ : $, p))), p = v.length) : s === 0 && (l++, v = [0]), y[u++] = l, s && v[0] ? v[p++] = j[S] || 0 : (v = [j[S]], p = 1);
      while ((S++ < m || v[0] !== void 0) && x--);
    }
    return y[0] || y.shift(), h.e = c, Ie(h, o ? a + Ke(h) + 1 : a);
  };
}();
function yb(e, t) {
  var r, n, i, a, o, s, c = 0, u = 0, l = e.constructor, f = l.precision;
  if (Ke(e) > 16) throw Error(Xf + Ke(e));
  if (!e.s) return new l(xt);
  for (t == null ? (Fe = !1, s = f) : s = t, o = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(o), u += 5;
  for (n = Math.log(qr(2, u)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new l(xt), l.precision = s; ; ) {
    if (i = Ie(i.times(e), s), r = r.times(++c), o = a.plus(ar(i, r, s)), zt(o.d).slice(0, s) === zt(a.d).slice(0, s)) {
      for (; u--; ) a = Ie(a.times(a), s);
      return l.precision = f, t == null ? (Fe = !0, Ie(a, f)) : a;
    }
    a = o;
  }
}
function Ke(e) {
  for (var t = e.e * Be, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Uc(e, t, r) {
  if (t > e.LN10.sd())
    throw Fe = !0, r && (e.precision = r), Error(jt + "LN10 precision limit exceeded");
  return Ie(new e(e.LN10), t);
}
function Or(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function ba(e, t) {
  var r, n, i, a, o, s, c, u, l, f = 1, d = 10, h = e, y = h.d, v = h.constructor, p = v.precision;
  if (h.s < 1) throw Error(jt + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(xt)) return new v(0);
  if (t == null ? (Fe = !1, u = p) : u = t, h.eq(10))
    return t == null && (Fe = !0), Uc(v, u);
  if (u += d, v.precision = u, r = zt(y), n = r.charAt(0), a = Ke(h), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = zt(h.d), n = r.charAt(0), f++;
    a = Ke(h), n > 1 ? (h = new v("0." + r), a++) : h = new v(n + "." + r.slice(1));
  } else
    return c = Uc(v, u + 2, p).times(a + ""), h = ba(new v(n + "." + r.slice(1)), u - d).plus(c), v.precision = p, t == null ? (Fe = !0, Ie(h, p)) : h;
  for (s = o = h = ar(h.minus(xt), h.plus(xt), u), l = Ie(h.times(h), u), i = 3; ; ) {
    if (o = Ie(o.times(l), u), c = s.plus(ar(o, new v(i), u)), zt(c.d).slice(0, u) === zt(s.d).slice(0, u))
      return s = s.times(2), a !== 0 && (s = s.plus(Uc(v, u + 2, p).times(a + ""))), s = ar(s, new v(f), u), v.precision = p, t == null ? (Fe = !0, Ie(s, p)) : s;
    s = c, i += 2;
  }
}
function Kp(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = _i(r / Be), e.d = [], n = (r + 1) % Be, r < 0 && (n += Be), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= Be; n < i; ) e.d.push(+t.slice(n, n += Be));
      t = t.slice(n), n = Be - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Fe && (e.e > Xo || e.e < -Xo)) throw Error(Xf + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Ie(e, t, r) {
  var n, i, a, o, s, c, u, l, f = e.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += Be, i = t, u = f[l = 0];
  else {
    if (l = Math.ceil((n + 1) / Be), a = f.length, l >= a) return e;
    for (u = a = f[l], o = 1; a >= 10; a /= 10) o++;
    n %= Be, i = n - Be + o;
  }
  if (r !== void 0 && (a = qr(10, o - i - 1), s = u / a % 10 | 0, c = t < 0 || f[l + 1] !== void 0 || u % a, c = r < 4 ? (s || c) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || c || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? u / qr(10, o - i) : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return c ? (a = Ke(e), f.length = 1, t = t - a - 1, f[0] = qr(10, (Be - t % Be) % Be), e.e = _i(-t / Be) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = l, a = 1, l--) : (f.length = l + 1, a = qr(10, Be - n), f[l] = i > 0 ? (u / qr(10, o - i) % qr(10, i) | 0) * a : 0), c)
    for (; ; )
      if (l == 0) {
        (f[0] += a) == et && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[l] += a, f[l] != et) break;
        f[l--] = 0, a = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Fe && (e.e > Xo || e.e < -Xo))
    throw Error(Xf + Ke(e));
  return e;
}
function mb(e, t) {
  var r, n, i, a, o, s, c, u, l, f, d = e.constructor, h = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), Fe ? Ie(t, h) : t;
  if (c = e.d, f = t.d, n = t.e, u = e.e, c = c.slice(), o = u - n, o) {
    for (l = o < 0, l ? (r = c, o = -o, s = f.length) : (r = f, n = u, s = c.length), i = Math.max(Math.ceil(h / Be), s) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = c.length, s = f.length, l = i < s, l && (s = i), i = 0; i < s; i++)
      if (c[i] != f[i]) {
        l = c[i] < f[i];
        break;
      }
    o = 0;
  }
  for (l && (r = c, c = f, f = r, t.s = -t.s), s = c.length, i = f.length - s; i > 0; --i) c[s++] = 0;
  for (i = f.length; i > o; ) {
    if (c[--i] < f[i]) {
      for (a = i; a && c[--a] === 0; ) c[a] = et - 1;
      --c[a], c[i] += et;
    }
    c[i] -= f[i];
  }
  for (; c[--s] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = n, Fe ? Ie(t, h) : t) : new d(0);
}
function cn(e, t, r) {
  var n, i = Ke(e), a = zt(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Or(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Or(-i - 1) + a, r && (n = r - o) > 0 && (a += Or(n))) : i >= o ? (a += Or(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Or(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Or(n))), e.s < 0 ? "-" + a : a;
}
function Vp(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function gb(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(nn + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return Kp(o, a.toString());
    } else if (typeof a != "string")
      throw Error(nn + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, LD.test(a)) Kp(o, a);
    else throw Error(nn + a);
  }
  if (i.prototype = ee, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = gb, i.config = i.set = BD, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function BD(e) {
  if (!e || typeof e != "object")
    throw Error(jt + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    Si,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (_i(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(nn + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(nn + r + ": " + n);
  return this;
}
var Qf = gb(DD);
xt = new Qf(1);
const $e = Qf;
function FD(e) {
  return qD(e) || UD(e) || zD(e) || WD();
}
function WD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zD(e, t) {
  if (e) {
    if (typeof e == "string") return il(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return il(e, t);
  }
}
function UD(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function qD(e) {
  if (Array.isArray(e)) return il(e);
}
function il(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var GD = function(t) {
  return t;
}, bb = {
  "@@functional/placeholder": !0
}, xb = function(t) {
  return t === bb;
}, Xp = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && xb(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, YD = function e(t, r) {
  return t === 1 ? r : Xp(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(s) {
      return s !== bb;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, Xp(function() {
      for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
        c[u] = arguments[u];
      var l = i.map(function(f) {
        return xb(f) ? c.shift() : f;
      });
      return r.apply(void 0, FD(l).concat(c));
    }));
  });
}, Zs = function(t) {
  return YD(t.length, t);
}, al = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, HD = Zs(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), KD = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return GD;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(s, c) {
      return c(s);
    }, a.apply(void 0, arguments));
  };
}, ol = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, wb = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(s, c) {
      return s === r[c];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function VD(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new $e(e).abs().log(10).toNumber()) + 1, t;
}
function XD(e, t, r) {
  for (var n = new $e(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var QD = Zs(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), JD = Zs(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), ZD = Zs(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const ec = {
  rangeStep: XD,
  getDigitCount: VD,
  interpolateNumber: QD,
  uninterpolateNumber: JD,
  uninterpolateTruncation: ZD
};
function sl(e) {
  return rL(e) || tL(e) || Ob(e) || eL();
}
function eL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tL(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function rL(e) {
  if (Array.isArray(e)) return cl(e);
}
function xa(e, t) {
  return aL(e) || iL(e, t) || Ob(e, t) || nL();
}
function nL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ob(e, t) {
  if (e) {
    if (typeof e == "string") return cl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cl(e, t);
  }
}
function cl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function iL(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (c) {
      i = !0, a = c;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function aL(e) {
  if (Array.isArray(e)) return e;
}
function Sb(e) {
  var t = xa(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function _b(e, t, r) {
  if (e.lte(0))
    return new $e(0);
  var n = ec.getDigitCount(e.toNumber()), i = new $e(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, s = new $e(Math.ceil(a.div(o).toNumber())).add(r).mul(o), c = s.mul(i);
  return t ? c : new $e(Math.ceil(c));
}
function oL(e, t, r) {
  var n = 1, i = new $e(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new $e(10).pow(ec.getDigitCount(e) - 1), i = new $e(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new $e(Math.floor(e)));
  } else e === 0 ? i = new $e(Math.floor((t - 1) / 2)) : r || (i = new $e(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = KD(HD(function(c) {
    return i.add(new $e(c - o).mul(n)).toNumber();
  }), al);
  return s(0, t);
}
function Pb(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new $e(0),
      tickMin: new $e(0),
      tickMax: new $e(0)
    };
  var a = _b(new $e(t).sub(e).div(r - 1), n, i), o;
  e <= 0 && t >= 0 ? o = new $e(0) : (o = new $e(e).add(t).div(2), o = o.sub(new $e(o).mod(a)));
  var s = Math.ceil(o.sub(e).div(a).toNumber()), c = Math.ceil(new $e(t).sub(o).div(a).toNumber()), u = s + c + 1;
  return u > r ? Pb(e, t, r, n, i + 1) : (u < r && (c = t > 0 ? c + (r - u) : c, s = t > 0 ? s : s + (r - u)), {
    step: a,
    tickMin: o.sub(new $e(s).mul(a)),
    tickMax: o.add(new $e(c).mul(a))
  });
}
function sL(e) {
  var t = xa(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), s = Sb([r, n]), c = xa(s, 2), u = c[0], l = c[1];
  if (u === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [u].concat(sl(al(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(sl(al(0, i - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? ol(f) : f;
  }
  if (u === l)
    return oL(u, i, a);
  var d = Pb(u, l, o, a), h = d.step, y = d.tickMin, v = d.tickMax, p = ec.rangeStep(y, v.add(new $e(0.1).mul(h)), h);
  return r > n ? ol(p) : p;
}
function cL(e, t) {
  var r = xa(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Sb([n, i]), s = xa(o, 2), c = s[0], u = s[1];
  if (c === -1 / 0 || u === 1 / 0)
    return [n, i];
  if (c === u)
    return [c];
  var l = Math.max(t, 2), f = _b(new $e(u).sub(c).div(l - 1), a, 0), d = [].concat(sl(ec.rangeStep(new $e(c), new $e(u).sub(new $e(0.99).mul(f)), f)), [u]);
  return n > i ? ol(d) : d;
}
var uL = wb(sL), lL = wb(cL), fL = process.env.NODE_ENV === "production", qc = "Invariant failed";
function vt(e, t) {
  if (fL)
    throw new Error(qc);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(qc, ": ").concat(r) : qc;
  throw new Error(n);
}
var dL = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Qn(e) {
  "@babel/helpers - typeof";
  return Qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qn(e);
}
function Qo() {
  return Qo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qo.apply(this, arguments);
}
function hL(e, t) {
  return mL(e) || yL(e, t) || vL(e, t) || pL();
}
function pL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vL(e, t) {
  if (e) {
    if (typeof e == "string") return Qp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qp(e, t);
  }
}
function Qp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yL(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function mL(e) {
  if (Array.isArray(e)) return e;
}
function gL(e, t) {
  if (e == null) return {};
  var r = bL(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function bL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function xL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Eb(n.key), n);
  }
}
function OL(e, t, r) {
  return t && wL(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function SL(e, t, r) {
  return t = Jo(t), _L(e, Ab() ? Reflect.construct(t, r || [], Jo(e).constructor) : t.apply(e, r));
}
function _L(e, t) {
  if (t && (Qn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return PL(e);
}
function PL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ab() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ab = function() {
    return !!e;
  })();
}
function Jo(e) {
  return Jo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Jo(e);
}
function AL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ul(e, t);
}
function ul(e, t) {
  return ul = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ul(e, t);
}
function Tb(e, t, r) {
  return t = Eb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Eb(e) {
  var t = TL(e, "string");
  return Qn(t) == "symbol" ? t : t + "";
}
function TL(e, t) {
  if (Qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tc = /* @__PURE__ */ function(e) {
  function t() {
    return xL(this, t), SL(this, t, arguments);
  }
  return AL(t, e), OL(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.offset, a = n.layout, o = n.width, s = n.dataKey, c = n.data, u = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, d = gL(n, dL), h = se(d, !1);
      this.props.direction === "x" && l.type !== "number" && (process.env.NODE_ENV !== "production" ? vt(!1, 'ErrorBar requires Axis type property to be "number".') : vt());
      var y = c.map(function(v) {
        var p = u(v, s), g = p.x, x = p.y, b = p.value, S = p.errorVal;
        if (!S)
          return null;
        var m = [], w, O;
        if (Array.isArray(S)) {
          var _ = hL(S, 2);
          w = _[0], O = _[1];
        } else
          w = O = S;
        if (a === "vertical") {
          var T = l.scale, I = x + i, j = I + o, $ = I - o, k = T(b - w), D = T(b + O);
          m.push({
            x1: D,
            y1: j,
            x2: D,
            y2: $
          }), m.push({
            x1: k,
            y1: I,
            x2: D,
            y2: I
          }), m.push({
            x1: k,
            y1: j,
            x2: k,
            y2: $
          });
        } else if (a === "horizontal") {
          var L = f.scale, N = g + i, F = N - o, U = N + o, Y = L(b - w), M = L(b + O);
          m.push({
            x1: F,
            y1: M,
            x2: U,
            y2: M
          }), m.push({
            x1: N,
            y1: Y,
            x2: N,
            y2: M
          }), m.push({
            x1: F,
            y1: Y,
            x2: U,
            y2: Y
          });
        }
        return /* @__PURE__ */ E.createElement(je, Qo({
          className: "recharts-errorBar",
          key: "bar-".concat(m.map(function(R) {
            return "".concat(R.x1, "-").concat(R.x2, "-").concat(R.y1, "-").concat(R.y2);
          }))
        }, h), m.map(function(R) {
          return /* @__PURE__ */ E.createElement("line", Qo({}, R, {
            key: "line-".concat(R.x1, "-").concat(R.x2, "-").concat(R.y1, "-").concat(R.y2)
          }));
        }));
      });
      return /* @__PURE__ */ E.createElement(je, {
        className: "recharts-errorBars"
      }, y);
    }
  }]);
}(E.Component);
Tb(tc, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
Tb(tc, "displayName", "ErrorBar");
function wa(e) {
  "@babel/helpers - typeof";
  return wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wa(e);
}
function Jp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jp(Object(r), !0).forEach(function(n) {
      EL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EL(e, t, r) {
  return t = jL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jL(e) {
  var t = $L(e, "string");
  return wa(t) == "symbol" ? t : t + "";
}
function $L(e, t) {
  if (wa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jb = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = bt(r, Cn);
  if (!o)
    return null;
  var s = Cn.defaultProps, c = s !== void 0 ? Br(Br({}, s), o.props) : {}, u;
  return o.props && o.props.payload ? u = o.props && o.props.payload : a === "children" ? u = (n || []).reduce(function(l, f) {
    var d = f.item, h = f.props, y = h.sectors || h.data || [];
    return l.concat(y.map(function(v) {
      return {
        type: o.props.iconType || d.props.legendType,
        value: v.name,
        color: v.fill,
        payload: v
      };
    }));
  }, []) : u = (n || []).map(function(l) {
    var f = l.item, d = f.type.defaultProps, h = d !== void 0 ? Br(Br({}, d), f.props) : {}, y = h.dataKey, v = h.name, p = h.legendType, g = h.hide;
    return {
      inactive: g,
      dataKey: y,
      type: c.iconType || p || "square",
      color: Jf(f),
      value: v || y,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: h
    };
  }), Br(Br(Br({}, c), Cn.getWithHeight(o, i)), {}, {
    payload: u,
    item: o
  });
};
function Oa(e) {
  "@babel/helpers - typeof";
  return Oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oa(e);
}
function Zp(e) {
  return kL(e) || IL(e) || CL(e) || ML();
}
function ML() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CL(e, t) {
  if (e) {
    if (typeof e == "string") return ll(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ll(e, t);
  }
}
function IL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function kL(e) {
  if (Array.isArray(e)) return ll(e);
}
function ll(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ev(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ev(Object(r), !0).forEach(function(n) {
      kn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ev(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kn(e, t, r) {
  return t = NL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function NL(e) {
  var t = RL(e, "string");
  return Oa(t) == "symbol" ? t : t + "";
}
function RL(e, t) {
  if (Oa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Oa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ot(e, t, r) {
  return de(e) || de(t) ? r : Je(t) ? wt(e, t, r) : ue(t) ? t(e) : r;
}
function Zi(e, t, r, n) {
  var i = ID(e, function(s) {
    return ot(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return X(s) || parseFloat(s);
    });
    return a.length ? [Qs(a), Xs(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(s) {
    return !de(s);
  }) : i;
  return o.map(function(s) {
    return Je(s) || s instanceof Date ? s : "";
  });
}
var DL = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var c = a.range, u = 0; u < s; u++) {
      var l = u > 0 ? i[u - 1].coordinate : i[s - 1].coordinate, f = i[u].coordinate, d = u >= s - 1 ? i[0].coordinate : i[u + 1].coordinate, h = void 0;
      if (ut(f - l) !== ut(d - f)) {
        var y = [];
        if (ut(d - f) === ut(c[1] - c[0])) {
          h = d;
          var v = f + c[1] - c[0];
          y[0] = Math.min(v, (v + l) / 2), y[1] = Math.max(v, (v + l) / 2);
        } else {
          h = l;
          var p = d + c[1] - c[0];
          y[0] = Math.min(f, (p + f) / 2), y[1] = Math.max(f, (p + f) / 2);
        }
        var g = [Math.min(f, (h + f) / 2), Math.max(f, (h + f) / 2)];
        if (t > g[0] && t <= g[1] || t >= y[0] && t <= y[1]) {
          o = i[u].index;
          break;
        }
      } else {
        var x = Math.min(l, d), b = Math.max(l, d);
        if (t > (x + f) / 2 && t <= (b + f) / 2) {
          o = i[u].index;
          break;
        }
      }
    }
  else
    for (var S = 0; S < s; S++)
      if (S === 0 && t <= (n[S].coordinate + n[S + 1].coordinate) / 2 || S > 0 && S < s - 1 && t > (n[S].coordinate + n[S - 1].coordinate) / 2 && t <= (n[S].coordinate + n[S + 1].coordinate) / 2 || S === s - 1 && t > (n[S].coordinate + n[S - 1].coordinate) / 2) {
        o = n[S].index;
        break;
      }
  return o;
}, Jf = function(t) {
  var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? ze(ze({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, s = a.fill, c;
  switch (i) {
    case "Line":
      c = o;
      break;
    case "Area":
    case "Radar":
      c = o && o !== "none" ? o : s;
      break;
    default:
      c = s;
      break;
  }
  return c;
}, LL = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var o = {}, s = Object.keys(a), c = 0, u = s.length; c < u; c++)
    for (var l = a[s[c]].stackGroups, f = Object.keys(l), d = 0, h = f.length; d < h; d++) {
      var y = l[f[d]], v = y.items, p = y.cateAxisId, g = v.filter(function(O) {
        return nr(O.type).indexOf("Bar") >= 0;
      });
      if (g && g.length) {
        var x = g[0].type.defaultProps, b = x !== void 0 ? ze(ze({}, x), g[0].props) : g[0].props, S = b.barSize, m = b[p];
        o[m] || (o[m] = []);
        var w = de(S) ? r : S;
        o[m].push({
          item: g[0],
          stackList: g.slice(1),
          barSize: de(w) ? void 0 : lt(w, n, 0)
        });
      }
    }
  return o;
}, BL = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, s = t.maxBarSize, c = o.length;
  if (c < 1) return null;
  var u = lt(r, i, 0, !0), l, f = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = !1, h = i / c, y = o.reduce(function(S, m) {
      return S + m.barSize || 0;
    }, 0);
    y += (c - 1) * u, y >= i && (y -= (c - 1) * u, u = 0), y >= i && h > 0 && (d = !0, h *= 0.9, y = c * h);
    var v = (i - y) / 2 >> 0, p = {
      offset: v - u,
      size: 0
    };
    l = o.reduce(function(S, m) {
      var w = {
        item: m.item,
        position: {
          offset: p.offset + p.size + u,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: d ? h : m.barSize
        }
      }, O = [].concat(Zp(S), [w]);
      return p = O[O.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(_) {
        O.push({
          item: _,
          position: p
        });
      }), O;
    }, f);
  } else {
    var g = lt(n, i, 0, !0);
    i - 2 * g - (c - 1) * u <= 0 && (u = 0);
    var x = (i - 2 * g - (c - 1) * u) / c;
    x > 1 && (x >>= 0);
    var b = s === +s ? Math.min(x, s) : x;
    l = o.reduce(function(S, m, w) {
      var O = [].concat(Zp(S), [{
        item: m.item,
        position: {
          offset: g + (x + u) * w + (x - b) / 2,
          size: b
        }
      }]);
      return m.stackList && m.stackList.length && m.stackList.forEach(function(_) {
        O.push({
          item: _,
          position: O[O.length - 1].position
        });
      }), O;
    }, f);
  }
  return l;
}, FL = function(t, r, n, i) {
  var a = n.children, o = n.width, s = n.margin, c = o - (s.left || 0) - (s.right || 0), u = jb({
    children: a,
    legendWidth: c
  });
  if (u) {
    var l = i || {}, f = l.width, d = l.height, h = u.align, y = u.verticalAlign, v = u.layout;
    if ((v === "vertical" || v === "horizontal" && y === "middle") && h !== "center" && X(t[h]))
      return ze(ze({}, t), {}, kn({}, h, t[h] + (f || 0)));
    if ((v === "horizontal" || v === "vertical" && h === "center") && y !== "middle" && X(t[y]))
      return ze(ze({}, t), {}, kn({}, y, t[y] + (d || 0)));
  }
  return t;
}, WL = function(t, r, n) {
  return de(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, $b = function(t, r, n, i, a) {
  var o = r.props.children, s = Et(o, tc).filter(function(u) {
    return WL(i, a, u.props.direction);
  });
  if (s && s.length) {
    var c = s.map(function(u) {
      return u.props.dataKey;
    });
    return t.reduce(function(u, l) {
      var f = ot(l, n);
      if (de(f)) return u;
      var d = Array.isArray(f) ? [Qs(f), Xs(f)] : [f, f], h = c.reduce(function(y, v) {
        var p = ot(l, v, 0), g = d[0] - Math.abs(Array.isArray(p) ? p[0] : p), x = d[1] + Math.abs(Array.isArray(p) ? p[1] : p);
        return [Math.min(g, y[0]), Math.max(x, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(h[0], u[0]), Math.max(h[1], u[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, zL = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    return $b(t, s, n, a, i);
  }).filter(function(s) {
    return !de(s);
  });
  return o && o.length ? o.reduce(function(s, c) {
    return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
  }, [1 / 0, -1 / 0]) : null;
}, Mb = function(t, r, n, i, a) {
  var o = r.map(function(c) {
    var u = c.props.dataKey;
    return n === "number" && u && $b(t, c, u, i) || Zi(t, u, n, a);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(c, u) {
        return [Math.min(c[0], u[0]), Math.max(c[1], u[1])];
      },
      [1 / 0, -1 / 0]
    );
  var s = {};
  return o.reduce(function(c, u) {
    for (var l = 0, f = u.length; l < f; l++)
      s[u[l]] || (s[u[l]] = !0, c.push(u[l]));
    return c;
  }, []);
}, Cb = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, Ib = function(t, r, n, i) {
  if (i)
    return t.map(function(c) {
      return c.coordinate;
    });
  var a, o, s = t.map(function(c) {
    return c.coordinate === r && (a = !0), c.coordinate === n && (o = !0), c.coordinate;
  });
  return a || s.push(r), o || s.push(n), s;
}, rr = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, s = t.range, c = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, u = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / c : 0;
  if (u = t.axisType === "angleAxis" && (s == null ? void 0 : s.length) >= 2 ? ut(s[0] - s[1]) * 2 * u : u, r && (t.ticks || t.niceTicks)) {
    var l = (t.ticks || t.niceTicks).map(function(f) {
      var d = a ? a.indexOf(f) : f;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: i(d) + u,
        value: f,
        offset: u
      };
    });
    return l.filter(function(f) {
      return !Ka(f.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(f, d) {
    return {
      coordinate: i(f) + u,
      value: f,
      index: d,
      offset: u
    };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(f) {
    return {
      coordinate: i(f) + u,
      value: f,
      offset: u
    };
  }) : i.domain().map(function(f, d) {
    return {
      coordinate: i(f) + u,
      value: a ? a[f] : f,
      index: d,
      offset: u
    };
  });
}, Gc = /* @__PURE__ */ new WeakMap(), fo = function(t, r) {
  if (typeof r != "function")
    return t;
  Gc.has(t) || Gc.set(t, /* @__PURE__ */ new WeakMap());
  var n = Gc.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, kb = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, s = t.axisType;
  if (i === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: pa(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
      scale: Yo(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: Ji(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: pa(),
      realScaleType: "band"
    } : {
      scale: Yo(),
      realScaleType: "linear"
    };
  if (an(i)) {
    var c = "scale".concat(Rs(i));
    return {
      scale: (Hp[c] || Ji)(),
      realScaleType: Hp[c] ? c : "point"
    };
  }
  return ue(i) ? {
    scale: i
  } : {
    scale: Ji(),
    realScaleType: "point"
  };
}, tv = 1e-4, Nb = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - tv, o = Math.max(i[0], i[1]) + tv, s = t(r[0]), c = t(r[n - 1]);
    (s < a || s > o || c < a || c > o) && t.domain([r[0], r[n - 1]]);
  }
}, UL = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, qL = function(t, r) {
  if (!r || r.length !== 2 || !X(r[0]) || !X(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!X(t[0]) || t[0] < n) && (a[0] = n), (!X(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, GL = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, s = 0; s < r; ++s) {
        var c = Ka(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        c >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + c, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + c, o = t[s][n][1]);
      }
}, YL = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var s = Ka(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, HL = {
  sign: GL,
  // @ts-expect-error definitelytyped types are incorrect
  expand: dA,
  // @ts-expect-error definitelytyped types are incorrect
  none: Un,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: hA,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: pA,
  positive: YL
}, KL = function(t, r, n) {
  var i = r.map(function(s) {
    return s.props.dataKey;
  }), a = HL[n], o = fA().keys(i).value(function(s, c) {
    return +ot(s, c, 0);
  }).order(Nu).offset(a);
  return o(t);
}, VL = function(t, r, n, i, a, o) {
  if (!t)
    return null;
  var s = o ? r.reverse() : r, c = {}, u = s.reduce(function(f, d) {
    var h, y = (h = d.type) !== null && h !== void 0 && h.defaultProps ? ze(ze({}, d.type.defaultProps), d.props) : d.props, v = y.stackId, p = y.hide;
    if (p)
      return f;
    var g = y[n], x = f[g] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Je(v)) {
      var b = x.stackGroups[v] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      b.items.push(d), x.hasStack = !0, x.stackGroups[v] = b;
    } else
      x.stackGroups[Va("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [d]
      };
    return ze(ze({}, f), {}, kn({}, g, x));
  }, c), l = {};
  return Object.keys(u).reduce(function(f, d) {
    var h = u[d];
    if (h.hasStack) {
      var y = {};
      h.stackGroups = Object.keys(h.stackGroups).reduce(function(v, p) {
        var g = h.stackGroups[p];
        return ze(ze({}, v), {}, kn({}, p, {
          numericAxisId: n,
          cateAxisId: i,
          items: g.items,
          stackedData: KL(t, g.items, a)
        }));
      }, y);
    }
    return ze(ze({}, f), {}, kn({}, d, h));
  }, l);
}, Rb = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, s = r.allowDecimals, c = n || r.scale;
  if (c !== "auto" && c !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var u = t.domain();
    if (!u.length)
      return null;
    var l = uL(u, a, s);
    return t.domain([Qs(l), Xs(l)]), {
      niceTicks: l
    };
  }
  if (a && i === "number") {
    var f = t.domain(), d = lL(f, a, s);
    return {
      niceTicks: d
    };
  }
  return null;
}, rv = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + i : null;
  var c = ot(o, r.dataKey, r.domain[s]);
  return de(c) ? null : r.scale(c) - a / 2 + i;
}, XL = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, QL = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? ze(ze({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (Je(a)) {
    var o = r[a];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, JL = function(t) {
  return t.reduce(function(r, n) {
    return [Qs(n.concat([r[0]]).filter(X)), Xs(n.concat([r[1]]).filter(X))];
  }, [1 / 0, -1 / 0]);
}, Db = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], s = o.stackedData, c = s.reduce(function(u, l) {
      var f = JL(l.slice(r, n + 1));
      return [Math.min(u[0], f[0]), Math.max(u[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(c[0], i[0]), Math.max(c[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, nv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, iv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, fl = function(t, r, n) {
  if (ue(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (X(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (nv.test(t[0])) {
    var a = +nv.exec(t[0])[1];
    i[0] = r[0] - a;
  } else ue(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (X(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (iv.test(t[1])) {
    var o = +iv.exec(t[1])[1];
    i[1] = r[1] + o;
  } else ue(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Zo = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = Af(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, s = 1, c = a.length; s < c; s++) {
      var u = a[s], l = a[s - 1];
      o = Math.min((u.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, av = function(t, r, n) {
  return !t || !t.length || Js(t, wt(n, "type.defaultProps.domain")) ? r : t;
}, Lb = function(t, r) {
  var n = t.type.defaultProps ? ze(ze({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, s = n.formatter, c = n.tooltipType, u = n.chartType, l = n.hide;
  return ze(ze({}, se(t, !1)), {}, {
    dataKey: i,
    unit: o,
    formatter: s,
    name: a || i,
    color: Jf(t),
    value: ot(r, i),
    type: c,
    payload: r,
    chartType: u,
    hide: l
  });
};
function Sa(e) {
  "@babel/helpers - typeof";
  return Sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sa(e);
}
function ov(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ov(Object(r), !0).forEach(function(n) {
      Bb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ov(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Bb(e, t, r) {
  return t = ZL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZL(e) {
  var t = eB(e, "string");
  return Sa(t) == "symbol" ? t : t + "";
}
function eB(e, t) {
  if (Sa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Sa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tB(e, t) {
  return aB(e) || iB(e, t) || nB(e, t) || rB();
}
function rB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nB(e, t) {
  if (e) {
    if (typeof e == "string") return sv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sv(e, t);
  }
}
function sv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function iB(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function aB(e) {
  if (Array.isArray(e)) return e;
}
var es = Math.PI / 180, oB = function(t) {
  return t * 180 / Math.PI;
}, Re = function(t, r, n, i) {
  return {
    x: t + Math.cos(-es * i) * n,
    y: r + Math.sin(-es * i) * n
  };
}, Fb = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, sB = function(t, r, n, i, a) {
  var o = t.width, s = t.height, c = t.startAngle, u = t.endAngle, l = lt(t.cx, o, o / 2), f = lt(t.cy, s, s / 2), d = Fb(o, s, n), h = lt(t.innerRadius, d, 0), y = lt(t.outerRadius, d, d * 0.8), v = Object.keys(r);
  return v.reduce(function(p, g) {
    var x = r[g], b = x.domain, S = x.reversed, m;
    if (de(x.range))
      i === "angleAxis" ? m = [c, u] : i === "radiusAxis" && (m = [h, y]), S && (m = [m[1], m[0]]);
    else {
      m = x.range;
      var w = m, O = tB(w, 2);
      c = O[0], u = O[1];
    }
    var _ = kb(x, a), T = _.realScaleType, I = _.scale;
    I.domain(b).range(m), Nb(I);
    var j = Rb(I, Zt(Zt({}, x), {}, {
      realScaleType: T
    })), $ = Zt(Zt(Zt({}, x), j), {}, {
      range: m,
      radius: y,
      realScaleType: T,
      scale: I,
      cx: l,
      cy: f,
      innerRadius: h,
      outerRadius: y,
      startAngle: c,
      endAngle: u
    });
    return Zt(Zt({}, p), {}, Bb({}, g, $));
  }, {});
}, cB = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, uB = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, s = cB({
    x: n,
    y: i
  }, {
    x: a,
    y: o
  });
  if (s <= 0)
    return {
      radius: s
    };
  var c = (n - a) / s, u = Math.acos(c);
  return i > o && (u = 2 * Math.PI - u), {
    radius: s,
    angle: oB(u),
    angleInRadian: u
  };
}, lB = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, fB = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), s = Math.min(a, o);
  return t + s * 360;
}, cv = function(t, r) {
  var n = t.x, i = t.y, a = uB({
    x: n,
    y: i
  }, r), o = a.radius, s = a.angle, c = r.innerRadius, u = r.outerRadius;
  if (o < c || o > u)
    return !1;
  if (o === 0)
    return !0;
  var l = lB(r), f = l.startAngle, d = l.endAngle, h = s, y;
  if (f <= d) {
    for (; h > d; )
      h -= 360;
    for (; h < f; )
      h += 360;
    y = h >= f && h <= d;
  } else {
    for (; h > f; )
      h -= 360;
    for (; h < d; )
      h += 360;
    y = h >= d && h <= f;
  }
  return y ? Zt(Zt({}, r), {}, {
    radius: o,
    angle: fB(h, r)
  }) : null;
}, Wb = function(t) {
  return !/* @__PURE__ */ Lt(t) && !ue(t) && typeof t != "boolean" ? t.className : "";
};
function _a(e) {
  "@babel/helpers - typeof";
  return _a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _a(e);
}
var dB = ["offset"];
function hB(e) {
  return mB(e) || yB(e) || vB(e) || pB();
}
function pB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vB(e, t) {
  if (e) {
    if (typeof e == "string") return dl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dl(e, t);
  }
}
function yB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function mB(e) {
  if (Array.isArray(e)) return dl(e);
}
function dl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function gB(e, t) {
  if (e == null) return {};
  var r = bB(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function bB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function uv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uv(Object(r), !0).forEach(function(n) {
      xB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xB(e, t, r) {
  return t = wB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wB(e) {
  var t = OB(e, "string");
  return _a(t) == "symbol" ? t : t + "";
}
function OB(e, t) {
  if (_a(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (_a(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pa() {
  return Pa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pa.apply(this, arguments);
}
var SB = function(t) {
  var r = t.value, n = t.formatter, i = de(t.children) ? r : t.children;
  return ue(n) ? n(i) : i;
}, _B = function(t, r) {
  var n = ut(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, PB = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, s = t.className, c = a, u = c.cx, l = c.cy, f = c.innerRadius, d = c.outerRadius, h = c.startAngle, y = c.endAngle, v = c.clockWise, p = (f + d) / 2, g = _B(h, y), x = g >= 0 ? 1 : -1, b, S;
  i === "insideStart" ? (b = h + x * o, S = v) : i === "insideEnd" ? (b = y - x * o, S = !v) : i === "end" && (b = y + x * o, S = v), S = g <= 0 ? S : !S;
  var m = Re(u, l, p, b), w = Re(u, l, p, b + (S ? 1 : -1) * 359), O = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(S ? 0 : 1, `,
    `).concat(w.x, ",").concat(w.y), _ = de(t.id) ? Va("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ E.createElement("text", Pa({}, n, {
    dominantBaseline: "central",
    className: fe("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("path", {
    id: _,
    d: O
  })), /* @__PURE__ */ E.createElement("textPath", {
    xlinkHref: "#".concat(_)
  }, r));
}, AB = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, s = a.cy, c = a.innerRadius, u = a.outerRadius, l = a.startAngle, f = a.endAngle, d = (l + f) / 2;
  if (i === "outside") {
    var h = Re(o, s, u + n, d), y = h.x, v = h.y;
    return {
      x: y,
      y: v,
      textAnchor: y >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (i === "center")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var p = (c + u) / 2, g = Re(o, s, p, d), x = g.x, b = g.y;
  return {
    x,
    y: b,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, TB = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, s = o.x, c = o.y, u = o.width, l = o.height, f = l >= 0 ? 1 : -1, d = f * i, h = f > 0 ? "end" : "start", y = f > 0 ? "start" : "end", v = u >= 0 ? 1 : -1, p = v * i, g = v > 0 ? "end" : "start", x = v > 0 ? "start" : "end";
  if (a === "top") {
    var b = {
      x: s + u / 2,
      y: c - f * i,
      textAnchor: "middle",
      verticalAnchor: h
    };
    return Xe(Xe({}, b), n ? {
      height: Math.max(c - n.y, 0),
      width: u
    } : {});
  }
  if (a === "bottom") {
    var S = {
      x: s + u / 2,
      y: c + l + d,
      textAnchor: "middle",
      verticalAnchor: y
    };
    return Xe(Xe({}, S), n ? {
      height: Math.max(n.y + n.height - (c + l), 0),
      width: u
    } : {});
  }
  if (a === "left") {
    var m = {
      x: s - p,
      y: c + l / 2,
      textAnchor: g,
      verticalAnchor: "middle"
    };
    return Xe(Xe({}, m), n ? {
      width: Math.max(m.x - n.x, 0),
      height: l
    } : {});
  }
  if (a === "right") {
    var w = {
      x: s + u + p,
      y: c + l / 2,
      textAnchor: x,
      verticalAnchor: "middle"
    };
    return Xe(Xe({}, w), n ? {
      width: Math.max(n.x + n.width - w.x, 0),
      height: l
    } : {});
  }
  var O = n ? {
    width: u,
    height: l
  } : {};
  return a === "insideLeft" ? Xe({
    x: s + p,
    y: c + l / 2,
    textAnchor: x,
    verticalAnchor: "middle"
  }, O) : a === "insideRight" ? Xe({
    x: s + u - p,
    y: c + l / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, O) : a === "insideTop" ? Xe({
    x: s + u / 2,
    y: c + d,
    textAnchor: "middle",
    verticalAnchor: y
  }, O) : a === "insideBottom" ? Xe({
    x: s + u / 2,
    y: c + l - d,
    textAnchor: "middle",
    verticalAnchor: h
  }, O) : a === "insideTopLeft" ? Xe({
    x: s + p,
    y: c + d,
    textAnchor: x,
    verticalAnchor: y
  }, O) : a === "insideTopRight" ? Xe({
    x: s + u - p,
    y: c + d,
    textAnchor: g,
    verticalAnchor: y
  }, O) : a === "insideBottomLeft" ? Xe({
    x: s + p,
    y: c + l - d,
    textAnchor: x,
    verticalAnchor: h
  }, O) : a === "insideBottomRight" ? Xe({
    x: s + u - p,
    y: c + l - d,
    textAnchor: g,
    verticalAnchor: h
  }, O) : vi(a) && (X(a.x) || Hr(a.x)) && (X(a.y) || Hr(a.y)) ? Xe({
    x: s + lt(a.x, u),
    y: c + lt(a.y, l),
    textAnchor: "end",
    verticalAnchor: "end"
  }, O) : Xe({
    x: s + u / 2,
    y: c + l / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, O);
}, EB = function(t) {
  return "cx" in t && X(t.cx);
};
function tt(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = gB(e, dB), i = Xe({
    offset: r
  }, n), a = i.viewBox, o = i.position, s = i.value, c = i.children, u = i.content, l = i.className, f = l === void 0 ? "" : l, d = i.textBreakAll;
  if (!a || de(s) && de(c) && !/* @__PURE__ */ Lt(u) && !ue(u))
    return null;
  if (/* @__PURE__ */ Lt(u))
    return /* @__PURE__ */ Qe(u, i);
  var h;
  if (ue(u)) {
    if (h = /* @__PURE__ */ na(u, i), /* @__PURE__ */ Lt(h))
      return h;
  } else
    h = SB(i);
  var y = EB(a), v = se(i, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return PB(i, h, v);
  var p = y ? AB(i) : TB(i);
  return /* @__PURE__ */ E.createElement(sn, Pa({
    className: fe("recharts-label", f)
  }, v, p, {
    breakAll: d
  }), h);
}
tt.displayName = "Label";
var zb = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, s = t.r, c = t.radius, u = t.innerRadius, l = t.outerRadius, f = t.x, d = t.y, h = t.top, y = t.left, v = t.width, p = t.height, g = t.clockWise, x = t.labelViewBox;
  if (x)
    return x;
  if (X(v) && X(p)) {
    if (X(f) && X(d))
      return {
        x: f,
        y: d,
        width: v,
        height: p
      };
    if (X(h) && X(y))
      return {
        x: h,
        y,
        width: v,
        height: p
      };
  }
  return X(f) && X(d) ? {
    x: f,
    y: d,
    width: 0,
    height: 0
  } : X(r) && X(n) ? {
    cx: r,
    cy: n,
    startAngle: a || i || 0,
    endAngle: o || i || 0,
    innerRadius: u || 0,
    outerRadius: l || c || s || 0,
    clockWise: g
  } : t.viewBox ? t.viewBox : {};
}, jB = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ E.createElement(tt, {
    key: "label-implicit",
    viewBox: r
  }) : Je(t) ? /* @__PURE__ */ E.createElement(tt, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Lt(t) ? t.type === tt ? /* @__PURE__ */ Qe(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ E.createElement(tt, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : ue(t) ? /* @__PURE__ */ E.createElement(tt, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : vi(t) ? /* @__PURE__ */ E.createElement(tt, Pa({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, $B = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = zb(t), o = Et(i, tt).map(function(c, u) {
    return /* @__PURE__ */ Qe(c, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(u)
    });
  });
  if (!n)
    return o;
  var s = jB(t.label, r || a);
  return [s].concat(hB(o));
};
tt.parseViewBox = zb;
tt.renderCallByParent = $B;
function MB(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var CB = MB;
const IB = /* @__PURE__ */ Me(CB);
function Aa(e) {
  "@babel/helpers - typeof";
  return Aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Aa(e);
}
var kB = ["valueAccessor"], NB = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function RB(e) {
  return FB(e) || BB(e) || LB(e) || DB();
}
function DB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LB(e, t) {
  if (e) {
    if (typeof e == "string") return hl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hl(e, t);
  }
}
function BB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function FB(e) {
  if (Array.isArray(e)) return hl(e);
}
function hl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ts() {
  return ts = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ts.apply(this, arguments);
}
function lv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lv(Object(r), !0).forEach(function(n) {
      WB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WB(e, t, r) {
  return t = zB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zB(e) {
  var t = UB(e, "string");
  return Aa(t) == "symbol" ? t : t + "";
}
function UB(e, t) {
  if (Aa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Aa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dv(e, t) {
  if (e == null) return {};
  var r = qB(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function qB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var GB = function(t) {
  return Array.isArray(t.value) ? IB(t.value) : t.value;
};
function Cr(e) {
  var t = e.valueAccessor, r = t === void 0 ? GB : t, n = dv(e, kB), i = n.data, a = n.dataKey, o = n.clockWise, s = n.id, c = n.textBreakAll, u = dv(n, NB);
  return !i || !i.length ? null : /* @__PURE__ */ E.createElement(je, {
    className: "recharts-label-list"
  }, i.map(function(l, f) {
    var d = de(a) ? r(l, f) : ot(l && l.payload, a), h = de(s) ? {} : {
      id: "".concat(s, "-").concat(f)
    };
    return /* @__PURE__ */ E.createElement(tt, ts({}, se(l, !0), u, h, {
      parentViewBox: l.parentViewBox,
      value: d,
      textBreakAll: c,
      viewBox: tt.parseViewBox(de(o) ? l : fv(fv({}, l), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
Cr.displayName = "LabelList";
function YB(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ E.createElement(Cr, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ E.isValidElement(e) || ue(e) ? /* @__PURE__ */ E.createElement(Cr, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : vi(e) ? /* @__PURE__ */ E.createElement(Cr, ts({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function HB(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = Et(n, Cr).map(function(o, s) {
    return /* @__PURE__ */ Qe(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return i;
  var a = YB(e.label, t);
  return [a].concat(RB(i));
}
Cr.renderCallByParent = HB;
function Ta(e) {
  "@babel/helpers - typeof";
  return Ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ta(e);
}
function pl() {
  return pl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pl.apply(this, arguments);
}
function hv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hv(Object(r), !0).forEach(function(n) {
      KB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KB(e, t, r) {
  return t = VB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VB(e) {
  var t = XB(e, "string");
  return Ta(t) == "symbol" ? t : t + "";
}
function XB(e, t) {
  if (Ta(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var QB = function(t, r) {
  var n = ut(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, ho = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, s = t.isExternal, c = t.cornerRadius, u = t.cornerIsExternal, l = c * (s ? 1 : -1) + i, f = Math.asin(c / l) / es, d = u ? a : a + o * f, h = Re(r, n, l, d), y = Re(r, n, i, d), v = u ? a - o * f : a, p = Re(r, n, l * Math.cos(f * es), v);
  return {
    center: h,
    circleTangency: y,
    lineTangency: p,
    theta: f
  };
}, Ub = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, s = t.endAngle, c = QB(o, s), u = o + c, l = Re(r, n, a, o), f = Re(r, n, a, u), d = "M ".concat(l.x, ",").concat(l.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(c) > 180), ",").concat(+(o > u), `,
    `).concat(f.x, ",").concat(f.y, `
  `);
  if (i > 0) {
    var h = Re(r, n, i, o), y = Re(r, n, i, u);
    d += "L ".concat(y.x, ",").concat(y.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(c) > 180), ",").concat(+(o <= u), `,
            `).concat(h.x, ",").concat(h.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, JB = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, c = t.cornerIsExternal, u = t.startAngle, l = t.endAngle, f = ut(l - u), d = ho({
    cx: r,
    cy: n,
    radius: a,
    angle: u,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: c
  }), h = d.circleTangency, y = d.lineTangency, v = d.theta, p = ho({
    cx: r,
    cy: n,
    radius: a,
    angle: l,
    sign: -f,
    cornerRadius: o,
    cornerIsExternal: c
  }), g = p.circleTangency, x = p.lineTangency, b = p.theta, S = c ? Math.abs(u - l) : Math.abs(u - l) - v - b;
  if (S < 0)
    return s ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : Ub({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: u,
      endAngle: l
    });
  var m = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(h.x, ",").concat(h.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(S > 180), ",").concat(+(f < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(x.x, ",").concat(x.y, `
  `);
  if (i > 0) {
    var w = ho({
      cx: r,
      cy: n,
      radius: i,
      angle: u,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: c
    }), O = w.circleTangency, _ = w.lineTangency, T = w.theta, I = ho({
      cx: r,
      cy: n,
      radius: i,
      angle: l,
      sign: -f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: c
    }), j = I.circleTangency, $ = I.lineTangency, k = I.theta, D = c ? Math.abs(u - l) : Math.abs(u - l) - T - k;
    if (D < 0 && o === 0)
      return "".concat(m, "L").concat(r, ",").concat(n, "Z");
    m += "L".concat($.x, ",").concat($.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(j.x, ",").concat(j.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(D > 180), ",").concat(+(f > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(_.x, ",").concat(_.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, ZB = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, qb = function(t) {
  var r = pv(pv({}, ZB), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, c = r.forceCornerRadius, u = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, d = r.className;
  if (o < a || l === f)
    return null;
  var h = fe("recharts-sector", d), y = o - a, v = lt(s, y, 0, !0), p;
  return v > 0 && Math.abs(l - f) < 360 ? p = JB({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    cornerRadius: Math.min(v, y / 2),
    forceCornerRadius: c,
    cornerIsExternal: u,
    startAngle: l,
    endAngle: f
  }) : p = Ub({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: l,
    endAngle: f
  }), /* @__PURE__ */ E.createElement("path", pl({}, se(r, !0), {
    className: h,
    d: p,
    role: "img"
  }));
};
function Ea(e) {
  "@babel/helpers - typeof";
  return Ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ea(e);
}
function vl() {
  return vl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vl.apply(this, arguments);
}
function vv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vv(Object(r), !0).forEach(function(n) {
      eF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eF(e, t, r) {
  return t = tF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tF(e) {
  var t = rF(e, "string");
  return Ea(t) == "symbol" ? t : t + "";
}
function rF(e, t) {
  if (Ea(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mv = {
  curveBasisClosed: eA,
  curveBasisOpen: tA,
  curveBasis: ZP,
  curveBumpX: BP,
  curveBumpY: FP,
  curveLinearClosed: rA,
  curveLinear: Ls,
  curveMonotoneX: nA,
  curveMonotoneY: iA,
  curveNatural: aA,
  curveStep: oA,
  curveStepAfter: cA,
  curveStepBefore: sA
}, po = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Bi = function(t) {
  return t.x;
}, Fi = function(t) {
  return t.y;
}, nF = function(t, r) {
  if (ue(t))
    return t;
  var n = "curve".concat(Rs(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? mv["".concat(n).concat(r === "vertical" ? "Y" : "X")] : mv[n] || Ls;
}, iF = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, s = t.layout, c = t.connectNulls, u = c === void 0 ? !1 : c, l = nF(n, s), f = u ? a.filter(function(v) {
    return po(v);
  }) : a, d;
  if (Array.isArray(o)) {
    var h = u ? o.filter(function(v) {
      return po(v);
    }) : o, y = f.map(function(v, p) {
      return yv(yv({}, v), {}, {
        base: h[p]
      });
    });
    return s === "vertical" ? d = no().y(Fi).x1(Bi).x0(function(v) {
      return v.base.x;
    }) : d = no().x(Bi).y1(Fi).y0(function(v) {
      return v.base.y;
    }), d.defined(po).curve(l), d(y);
  }
  return s === "vertical" && X(o) ? d = no().y(Fi).x1(Bi).x0(o) : X(o) ? d = no().x(Bi).y1(Fi).y0(o) : d = Lm().x(Bi).y(Fi), d.defined(po).curve(l), d(f);
}, yl = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var o = n && n.length ? iF(t) : i;
  return /* @__PURE__ */ V.createElement("path", vl({}, se(t, !1), Ao(t), {
    className: fe("recharts-curve", r),
    d: o,
    ref: a
  }));
}, ml = { exports: {} }, vo = { exports: {} }, _e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gv;
function aF() {
  if (gv) return _e;
  gv = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function b(m) {
    if (typeof m == "object" && m !== null) {
      var w = m.$$typeof;
      switch (w) {
        case t:
          switch (m = m.type, m) {
            case c:
            case u:
            case n:
            case a:
            case i:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case l:
                case y:
                case h:
                case o:
                  return m;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function S(m) {
    return b(m) === u;
  }
  return _e.AsyncMode = c, _e.ConcurrentMode = u, _e.ContextConsumer = s, _e.ContextProvider = o, _e.Element = t, _e.ForwardRef = l, _e.Fragment = n, _e.Lazy = y, _e.Memo = h, _e.Portal = r, _e.Profiler = a, _e.StrictMode = i, _e.Suspense = f, _e.isAsyncMode = function(m) {
    return S(m) || b(m) === c;
  }, _e.isConcurrentMode = S, _e.isContextConsumer = function(m) {
    return b(m) === s;
  }, _e.isContextProvider = function(m) {
    return b(m) === o;
  }, _e.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, _e.isForwardRef = function(m) {
    return b(m) === l;
  }, _e.isFragment = function(m) {
    return b(m) === n;
  }, _e.isLazy = function(m) {
    return b(m) === y;
  }, _e.isMemo = function(m) {
    return b(m) === h;
  }, _e.isPortal = function(m) {
    return b(m) === r;
  }, _e.isProfiler = function(m) {
    return b(m) === a;
  }, _e.isStrictMode = function(m) {
    return b(m) === i;
  }, _e.isSuspense = function(m) {
    return b(m) === f;
  }, _e.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === u || m === a || m === i || m === f || m === d || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === h || m.$$typeof === o || m.$$typeof === s || m.$$typeof === l || m.$$typeof === p || m.$$typeof === g || m.$$typeof === x || m.$$typeof === v);
  }, _e.typeOf = b, _e;
}
var Pe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bv;
function oF() {
  return bv || (bv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function b(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === n || C === u || C === a || C === i || C === f || C === d || typeof C == "object" && C !== null && (C.$$typeof === y || C.$$typeof === h || C.$$typeof === o || C.$$typeof === s || C.$$typeof === l || C.$$typeof === p || C.$$typeof === g || C.$$typeof === x || C.$$typeof === v);
    }
    function S(C) {
      if (typeof C == "object" && C !== null) {
        var he = C.$$typeof;
        switch (he) {
          case t:
            var H = C.type;
            switch (H) {
              case c:
              case u:
              case n:
              case a:
              case i:
              case f:
                return H;
              default:
                var be = H && H.$$typeof;
                switch (be) {
                  case s:
                  case l:
                  case y:
                  case h:
                  case o:
                    return be;
                  default:
                    return he;
                }
            }
          case r:
            return he;
        }
      }
    }
    var m = c, w = u, O = s, _ = o, T = t, I = l, j = n, $ = y, k = h, D = r, L = a, N = i, F = f, U = !1;
    function Y(C) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(C) || S(C) === c;
    }
    function M(C) {
      return S(C) === u;
    }
    function R(C) {
      return S(C) === s;
    }
    function W(C) {
      return S(C) === o;
    }
    function q(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function J(C) {
      return S(C) === l;
    }
    function te(C) {
      return S(C) === n;
    }
    function ne(C) {
      return S(C) === y;
    }
    function ae(C) {
      return S(C) === h;
    }
    function ie(C) {
      return S(C) === r;
    }
    function z(C) {
      return S(C) === a;
    }
    function Q(C) {
      return S(C) === i;
    }
    function re(C) {
      return S(C) === f;
    }
    Pe.AsyncMode = m, Pe.ConcurrentMode = w, Pe.ContextConsumer = O, Pe.ContextProvider = _, Pe.Element = T, Pe.ForwardRef = I, Pe.Fragment = j, Pe.Lazy = $, Pe.Memo = k, Pe.Portal = D, Pe.Profiler = L, Pe.StrictMode = N, Pe.Suspense = F, Pe.isAsyncMode = Y, Pe.isConcurrentMode = M, Pe.isContextConsumer = R, Pe.isContextProvider = W, Pe.isElement = q, Pe.isForwardRef = J, Pe.isFragment = te, Pe.isLazy = ne, Pe.isMemo = ae, Pe.isPortal = ie, Pe.isProfiler = z, Pe.isStrictMode = Q, Pe.isSuspense = re, Pe.isValidElementType = b, Pe.typeOf = S;
  }()), Pe;
}
var xv;
function Gb() {
  return xv || (xv = 1, process.env.NODE_ENV === "production" ? vo.exports = aF() : vo.exports = oF()), vo.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Yc, wv;
function sF() {
  if (wv) return Yc;
  wv = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(o).map(function(l) {
        return o[l];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        u[l] = l;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Yc = i() ? Object.assign : function(a, o) {
    for (var s, c = n(a), u, l = 1; l < arguments.length; l++) {
      s = Object(arguments[l]);
      for (var f in s)
        t.call(s, f) && (c[f] = s[f]);
      if (e) {
        u = e(s);
        for (var d = 0; d < u.length; d++)
          r.call(s, u[d]) && (c[u[d]] = s[u[d]]);
      }
    }
    return c;
  }, Yc;
}
var Hc, Ov;
function Zf() {
  if (Ov) return Hc;
  Ov = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Hc = e, Hc;
}
var Kc, Sv;
function Yb() {
  return Sv || (Sv = 1, Kc = Function.call.bind(Object.prototype.hasOwnProperty)), Kc;
}
var Vc, _v;
function cF() {
  if (_v) return Vc;
  _v = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Zf(), r = {}, n = Yb();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, s, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in a)
        if (n(a, l)) {
          var f;
          try {
            if (typeof a[l] != "function") {
              var d = Error(
                (c || "React class") + ": " + s + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = a[l](o, l, c, s, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var h = u ? u() : "";
            e(
              "Failed " + s + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Vc = i, Vc;
}
var Xc, Pv;
function uF() {
  if (Pv) return Xc;
  Pv = 1;
  var e = Gb(), t = sF(), r = Zf(), n = Yb(), i = cF(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Xc = function(s, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(M) {
      var R = M && (u && M[u] || M[l]);
      if (typeof R == "function")
        return R;
    }
    var d = "<<anonymous>>", h = {
      array: g("array"),
      bigint: g("bigint"),
      bool: g("boolean"),
      func: g("function"),
      number: g("number"),
      object: g("object"),
      string: g("string"),
      symbol: g("symbol"),
      any: x(),
      arrayOf: b,
      element: S(),
      elementType: m(),
      instanceOf: w,
      node: I(),
      objectOf: _,
      oneOf: O,
      oneOfType: T,
      shape: $,
      exact: k
    };
    function y(M, R) {
      return M === R ? M !== 0 || 1 / M === 1 / R : M !== M && R !== R;
    }
    function v(M, R) {
      this.message = M, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function p(M) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, W = 0;
      function q(te, ne, ae, ie, z, Q, re) {
        if (ie = ie || d, Q = Q || ae, re !== r) {
          if (c) {
            var C = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw C.name = "Invariant Violation", C;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var he = ie + ":" + ae;
            !R[he] && // Avoid spamming the console because they are often not actionable except for lib authors
            W < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + ie + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[he] = !0, W++);
          }
        }
        return ne[ae] == null ? te ? ne[ae] === null ? new v("The " + z + " `" + Q + "` is marked as required " + ("in `" + ie + "`, but its value is `null`.")) : new v("The " + z + " `" + Q + "` is marked as required in " + ("`" + ie + "`, but its value is `undefined`.")) : null : M(ne, ae, ie, z, Q);
      }
      var J = q.bind(null, !1);
      return J.isRequired = q.bind(null, !0), J;
    }
    function g(M) {
      function R(W, q, J, te, ne, ae) {
        var ie = W[q], z = N(ie);
        if (z !== M) {
          var Q = F(ie);
          return new v(
            "Invalid " + te + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + J + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return p(R);
    }
    function x() {
      return p(o);
    }
    function b(M) {
      function R(W, q, J, te, ne) {
        if (typeof M != "function")
          return new v("Property `" + ne + "` of component `" + J + "` has invalid PropType notation inside arrayOf.");
        var ae = W[q];
        if (!Array.isArray(ae)) {
          var ie = N(ae);
          return new v("Invalid " + te + " `" + ne + "` of type " + ("`" + ie + "` supplied to `" + J + "`, expected an array."));
        }
        for (var z = 0; z < ae.length; z++) {
          var Q = M(ae, z, J, te, ne + "[" + z + "]", r);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return p(R);
    }
    function S() {
      function M(R, W, q, J, te) {
        var ne = R[W];
        if (!s(ne)) {
          var ae = N(ne);
          return new v("Invalid " + J + " `" + te + "` of type " + ("`" + ae + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return p(M);
    }
    function m() {
      function M(R, W, q, J, te) {
        var ne = R[W];
        if (!e.isValidElementType(ne)) {
          var ae = N(ne);
          return new v("Invalid " + J + " `" + te + "` of type " + ("`" + ae + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return p(M);
    }
    function w(M) {
      function R(W, q, J, te, ne) {
        if (!(W[q] instanceof M)) {
          var ae = M.name || d, ie = Y(W[q]);
          return new v("Invalid " + te + " `" + ne + "` of type " + ("`" + ie + "` supplied to `" + J + "`, expected ") + ("instance of `" + ae + "`."));
        }
        return null;
      }
      return p(R);
    }
    function O(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function R(W, q, J, te, ne) {
        for (var ae = W[q], ie = 0; ie < M.length; ie++)
          if (y(ae, M[ie]))
            return null;
        var z = JSON.stringify(M, function(re, C) {
          var he = F(C);
          return he === "symbol" ? String(C) : C;
        });
        return new v("Invalid " + te + " `" + ne + "` of value `" + String(ae) + "` " + ("supplied to `" + J + "`, expected one of " + z + "."));
      }
      return p(R);
    }
    function _(M) {
      function R(W, q, J, te, ne) {
        if (typeof M != "function")
          return new v("Property `" + ne + "` of component `" + J + "` has invalid PropType notation inside objectOf.");
        var ae = W[q], ie = N(ae);
        if (ie !== "object")
          return new v("Invalid " + te + " `" + ne + "` of type " + ("`" + ie + "` supplied to `" + J + "`, expected an object."));
        for (var z in ae)
          if (n(ae, z)) {
            var Q = M(ae, z, J, te, ne + "." + z, r);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return p(R);
    }
    function T(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var R = 0; R < M.length; R++) {
        var W = M[R];
        if (typeof W != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(W) + " at index " + R + "."
          ), o;
      }
      function q(J, te, ne, ae, ie) {
        for (var z = [], Q = 0; Q < M.length; Q++) {
          var re = M[Q], C = re(J, te, ne, ae, ie, r);
          if (C == null)
            return null;
          C.data && n(C.data, "expectedType") && z.push(C.data.expectedType);
        }
        var he = z.length > 0 ? ", expected one of type [" + z.join(", ") + "]" : "";
        return new v("Invalid " + ae + " `" + ie + "` supplied to " + ("`" + ne + "`" + he + "."));
      }
      return p(q);
    }
    function I() {
      function M(R, W, q, J, te) {
        return D(R[W]) ? null : new v("Invalid " + J + " `" + te + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return p(M);
    }
    function j(M, R, W, q, J) {
      return new v(
        (M || "React class") + ": " + R + " type `" + W + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + J + "`."
      );
    }
    function $(M) {
      function R(W, q, J, te, ne) {
        var ae = W[q], ie = N(ae);
        if (ie !== "object")
          return new v("Invalid " + te + " `" + ne + "` of type `" + ie + "` " + ("supplied to `" + J + "`, expected `object`."));
        for (var z in M) {
          var Q = M[z];
          if (typeof Q != "function")
            return j(J, te, ne, z, F(Q));
          var re = Q(ae, z, J, te, ne + "." + z, r);
          if (re)
            return re;
        }
        return null;
      }
      return p(R);
    }
    function k(M) {
      function R(W, q, J, te, ne) {
        var ae = W[q], ie = N(ae);
        if (ie !== "object")
          return new v("Invalid " + te + " `" + ne + "` of type `" + ie + "` " + ("supplied to `" + J + "`, expected `object`."));
        var z = t({}, W[q], M);
        for (var Q in z) {
          var re = M[Q];
          if (n(M, Q) && typeof re != "function")
            return j(J, te, ne, Q, F(re));
          if (!re)
            return new v(
              "Invalid " + te + " `" + ne + "` key `" + Q + "` supplied to `" + J + "`.\nBad object: " + JSON.stringify(W[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var C = re(ae, Q, J, te, ne + "." + Q, r);
          if (C)
            return C;
        }
        return null;
      }
      return p(R);
    }
    function D(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(D);
          if (M === null || s(M))
            return !0;
          var R = f(M);
          if (R) {
            var W = R.call(M), q;
            if (R !== M.entries) {
              for (; !(q = W.next()).done; )
                if (!D(q.value))
                  return !1;
            } else
              for (; !(q = W.next()).done; ) {
                var J = q.value;
                if (J && !D(J[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function L(M, R) {
      return M === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function N(M) {
      var R = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : L(R, M) ? "symbol" : R;
    }
    function F(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var R = N(M);
      if (R === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function U(M) {
      var R = F(M);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function Y(M) {
      return !M.constructor || !M.constructor.name ? d : M.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, Xc;
}
var Qc, Av;
function lF() {
  if (Av) return Qc;
  Av = 1;
  var e = Zf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Qc = function() {
    function n(o, s, c, u, l, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Qc;
}
if (process.env.NODE_ENV !== "production") {
  var fF = Gb(), dF = !0;
  ml.exports = uF()(fF.isElement, dF);
} else
  ml.exports = lF()();
var hF = ml.exports;
const Ae = /* @__PURE__ */ Me(hF);
var pF = Object.getOwnPropertyNames, vF = Object.getOwnPropertySymbols, yF = Object.prototype.hasOwnProperty;
function Tv(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function yo(e) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    var a = i.cache, o = a.get(r), s = a.get(n);
    if (o && s)
      return o === n && s === r;
    a.set(r, n), a.set(n, r);
    var c = e(r, n, i);
    return a.delete(r), a.delete(n), c;
  };
}
function Ev(e) {
  return pF(e).concat(vF(e));
}
var mF = Object.hasOwn || function(e, t) {
  return yF.call(e, t);
};
function vn(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var gF = "__v", bF = "__o", xF = "_owner", jv = Object.getOwnPropertyDescriptor, $v = Object.keys;
function wF(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function OF(e, t) {
  return vn(e.getTime(), t.getTime());
}
function SF(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function _F(e, t) {
  return e === t;
}
function Mv(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var i = new Array(n), a = e.entries(), o, s, c = 0; (o = a.next()) && !o.done; ) {
    for (var u = t.entries(), l = !1, f = 0; (s = u.next()) && !s.done; ) {
      if (i[f]) {
        f++;
        continue;
      }
      var d = o.value, h = s.value;
      if (r.equals(d[0], h[0], c, f, e, t, r) && r.equals(d[1], h[1], d[0], h[0], e, t, r)) {
        l = i[f] = !0;
        break;
      }
      f++;
    }
    if (!l)
      return !1;
    c++;
  }
  return !0;
}
var PF = vn;
function AF(e, t, r) {
  var n = $v(e), i = n.length;
  if ($v(t).length !== i)
    return !1;
  for (; i-- > 0; )
    if (!Hb(e, t, r, n[i]))
      return !1;
  return !0;
}
function Wi(e, t, r) {
  var n = Ev(e), i = n.length;
  if (Ev(t).length !== i)
    return !1;
  for (var a, o, s; i-- > 0; )
    if (a = n[i], !Hb(e, t, r, a) || (o = jv(e, a), s = jv(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
      return !1;
  return !0;
}
function TF(e, t) {
  return vn(e.valueOf(), t.valueOf());
}
function EF(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Cv(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var i = new Array(n), a = e.values(), o, s; (o = a.next()) && !o.done; ) {
    for (var c = t.values(), u = !1, l = 0; (s = c.next()) && !s.done; ) {
      if (!i[l] && r.equals(o.value, s.value, o.value, s.value, e, t, r)) {
        u = i[l] = !0;
        break;
      }
      l++;
    }
    if (!u)
      return !1;
  }
  return !0;
}
function jF(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function $F(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function Hb(e, t, r, n) {
  return (n === xF || n === bF || n === gF) && (e.$$typeof || t.$$typeof) ? !0 : mF(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var MF = "[object Arguments]", CF = "[object Boolean]", IF = "[object Date]", kF = "[object Error]", NF = "[object Map]", RF = "[object Number]", DF = "[object Object]", LF = "[object RegExp]", BF = "[object Set]", FF = "[object String]", WF = "[object URL]", zF = Array.isArray, Iv = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, kv = Object.assign, UF = Object.prototype.toString.call.bind(Object.prototype.toString);
function qF(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areErrorsEqual, i = e.areFunctionsEqual, a = e.areMapsEqual, o = e.areNumbersEqual, s = e.areObjectsEqual, c = e.arePrimitiveWrappersEqual, u = e.areRegExpsEqual, l = e.areSetsEqual, f = e.areTypedArraysEqual, d = e.areUrlsEqual;
  return function(y, v, p) {
    if (y === v)
      return !0;
    if (y == null || v == null)
      return !1;
    var g = typeof y;
    if (g !== typeof v)
      return !1;
    if (g !== "object")
      return g === "number" ? o(y, v, p) : g === "function" ? i(y, v, p) : !1;
    var x = y.constructor;
    if (x !== v.constructor)
      return !1;
    if (x === Object)
      return s(y, v, p);
    if (zF(y))
      return t(y, v, p);
    if (Iv != null && Iv(y))
      return f(y, v, p);
    if (x === Date)
      return r(y, v, p);
    if (x === RegExp)
      return u(y, v, p);
    if (x === Map)
      return a(y, v, p);
    if (x === Set)
      return l(y, v, p);
    var b = UF(y);
    return b === IF ? r(y, v, p) : b === LF ? u(y, v, p) : b === NF ? a(y, v, p) : b === BF ? l(y, v, p) : b === DF ? typeof y.then != "function" && typeof v.then != "function" && s(y, v, p) : b === WF ? d(y, v, p) : b === kF ? n(y, v, p) : b === MF ? s(y, v, p) : b === CF || b === RF || b === FF ? c(y, v, p) : !1;
  };
}
function GF(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? Wi : wF,
    areDatesEqual: OF,
    areErrorsEqual: SF,
    areFunctionsEqual: _F,
    areMapsEqual: n ? Tv(Mv, Wi) : Mv,
    areNumbersEqual: PF,
    areObjectsEqual: n ? Wi : AF,
    arePrimitiveWrappersEqual: TF,
    areRegExpsEqual: EF,
    areSetsEqual: n ? Tv(Cv, Wi) : Cv,
    areTypedArraysEqual: n ? Wi : jF,
    areUrlsEqual: $F
  };
  if (r && (i = kv({}, i, r(i))), t) {
    var a = yo(i.areArraysEqual), o = yo(i.areMapsEqual), s = yo(i.areObjectsEqual), c = yo(i.areSetsEqual);
    i = kv({}, i, {
      areArraysEqual: a,
      areMapsEqual: o,
      areObjectsEqual: s,
      areSetsEqual: c
    });
  }
  return i;
}
function YF(e) {
  return function(t, r, n, i, a, o, s) {
    return e(t, r, s);
  };
}
function HF(e) {
  var t = e.circular, r = e.comparator, n = e.createState, i = e.equals, a = e.strict;
  if (n)
    return function(c, u) {
      var l = n(), f = l.cache, d = f === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : f, h = l.meta;
      return r(c, u, {
        cache: d,
        equals: i,
        meta: h,
        strict: a
      });
    };
  if (t)
    return function(c, u) {
      return r(c, u, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: i,
        meta: void 0,
        strict: a
      });
    };
  var o = {
    cache: void 0,
    equals: i,
    meta: void 0,
    strict: a
  };
  return function(c, u) {
    return r(c, u, o);
  };
}
var KF = Dr();
Dr({ strict: !0 });
Dr({ circular: !0 });
Dr({
  circular: !0,
  strict: !0
});
Dr({
  createInternalComparator: function() {
    return vn;
  }
});
Dr({
  strict: !0,
  createInternalComparator: function() {
    return vn;
  }
});
Dr({
  circular: !0,
  createInternalComparator: function() {
    return vn;
  }
});
Dr({
  circular: !0,
  createInternalComparator: function() {
    return vn;
  },
  strict: !0
});
function Dr(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, o = a === void 0 ? !1 : a, s = GF(e), c = qF(s), u = n ? n(c) : YF(c);
  return HF({ circular: r, comparator: c, createState: i, equals: u, strict: o });
}
function VF(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Nv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : VF(i);
  };
  requestAnimationFrame(n);
}
function gl(e) {
  "@babel/helpers - typeof";
  return gl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gl(e);
}
function XF(e) {
  return eW(e) || ZF(e) || JF(e) || QF();
}
function QF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JF(e, t) {
  if (e) {
    if (typeof e == "string") return Rv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rv(e, t);
  }
}
function Rv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ZF(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function eW(e) {
  if (Array.isArray(e)) return e;
}
function tW() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, s = XF(o), c = s[0], u = s.slice(1);
        if (typeof c == "number") {
          Nv(i.bind(null, u), c);
          return;
        }
        i(c), Nv(i.bind(null, u));
        return;
      }
      gl(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(a) {
      r = !1, n(a);
    },
    subscribe: function(a) {
      return t = a, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function ja(e) {
  "@babel/helpers - typeof";
  return ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ja(e);
}
function Dv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dv(Object(r), !0).forEach(function(n) {
      Kb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Kb(e, t, r) {
  return t = rW(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rW(e) {
  var t = nW(e, "string");
  return ja(t) === "symbol" ? t : String(t);
}
function nW(e, t) {
  if (ja(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ja(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var iW = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, aW = function(t) {
  return t;
}, oW = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, ea = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return Lv(Lv({}, n), {}, Kb({}, i, t(i, r[i])));
  }, {});
}, Bv = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(oW(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, sW = process.env.NODE_ENV !== "production", rs = function(t, r, n, i, a, o, s, c) {
  if (sW && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var u = [n, i, a, o, s, c], l = 0;
      console.warn(r.replace(/%s/g, function() {
        return u[l++];
      }));
    }
};
function cW(e, t) {
  return fW(e) || lW(e, t) || Vb(e, t) || uW();
}
function uW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lW(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function fW(e) {
  if (Array.isArray(e)) return e;
}
function dW(e) {
  return vW(e) || pW(e) || Vb(e) || hW();
}
function hW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vb(e, t) {
  if (e) {
    if (typeof e == "string") return bl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bl(e, t);
  }
}
function pW(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function vW(e) {
  if (Array.isArray(e)) return bl(e);
}
function bl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ns = 1e-4, Xb = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, Qb = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, Fv = function(t, r) {
  return function(n) {
    var i = Xb(t, r);
    return Qb(i, n);
  };
}, yW = function(t, r) {
  return function(n) {
    var i = Xb(t, r), a = [].concat(dW(i.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return Qb(a, n);
  };
}, Wv = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], o = r[2], s = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, o = 1, s = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, o = 0.25, s = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, o = 1, s = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, o = 0.58, s = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, o = 0.58, s = 1;
        break;
      default: {
        var c = r[0].split("(");
        if (c[0] === "cubic-bezier" && c[1].split(")")[0].split(",").length === 4) {
          var u = c[1].split(")")[0].split(",").map(function(p) {
            return parseFloat(p);
          }), l = cW(u, 4);
          i = l[0], a = l[1], o = l[2], s = l[3];
        } else
          rs(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  rs([i, o, a, s].every(function(p) {
    return typeof p == "number" && p >= 0 && p <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = Fv(i, o), d = Fv(a, s), h = yW(i, o), y = function(g) {
    return g > 1 ? 1 : g < 0 ? 0 : g;
  }, v = function(g) {
    for (var x = g > 1 ? 1 : g, b = x, S = 0; S < 8; ++S) {
      var m = f(b) - x, w = h(b);
      if (Math.abs(m - x) < ns || w < ns)
        return d(b);
      b = y(b - m / w);
    }
    return d(b);
  };
  return v.isStepper = !1, v;
}, mW = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, s = o === void 0 ? 17 : o, c = function(l, f, d) {
    var h = -(l - f) * n, y = d * a, v = d + (h - y) * s / 1e3, p = d * s / 1e3 + l;
    return Math.abs(p - f) < ns && Math.abs(v) < ns ? [f, 0] : [p, v];
  };
  return c.isStepper = !0, c.dt = s, c;
}, gW = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string")
    switch (i) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Wv(i);
      case "spring":
        return mW();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return Wv(i);
        rs(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof i == "function" ? i : (rs(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function $a(e) {
  "@babel/helpers - typeof";
  return $a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $a(e);
}
function zv(e) {
  return wW(e) || xW(e) || Jb(e) || bW();
}
function bW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xW(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function wW(e) {
  if (Array.isArray(e)) return wl(e);
}
function Uv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uv(Object(r), !0).forEach(function(n) {
      xl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xl(e, t, r) {
  return t = OW(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OW(e) {
  var t = SW(e, "string");
  return $a(t) === "symbol" ? t : String(t);
}
function SW(e, t) {
  if ($a(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if ($a(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _W(e, t) {
  return TW(e) || AW(e, t) || Jb(e, t) || PW();
}
function PW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jb(e, t) {
  if (e) {
    if (typeof e == "string") return wl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wl(e, t);
  }
}
function wl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function AW(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function TW(e) {
  if (Array.isArray(e)) return e;
}
var is = function(t, r, n) {
  return t + (r - t) * n;
}, Ol = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, EW = function e(t, r, n) {
  var i = ea(function(a, o) {
    if (Ol(o)) {
      var s = t(o.from, o.to, o.velocity), c = _W(s, 2), u = c[0], l = c[1];
      return nt(nt({}, o), {}, {
        from: u,
        velocity: l
      });
    }
    return o;
  }, r);
  return n < 1 ? ea(function(a, o) {
    return Ol(o) ? nt(nt({}, o), {}, {
      velocity: is(o.velocity, i[a].velocity, n),
      from: is(o.from, i[a].from, n)
    }) : o;
  }, r) : e(t, i, n - 1);
};
const jW = function(e, t, r, n, i) {
  var a = iW(e, t), o = a.reduce(function(p, g) {
    return nt(nt({}, p), {}, xl({}, g, [e[g], t[g]]));
  }, {}), s = a.reduce(function(p, g) {
    return nt(nt({}, p), {}, xl({}, g, {
      from: e[g],
      velocity: 0,
      to: t[g]
    }));
  }, {}), c = -1, u, l, f = function() {
    return null;
  }, d = function() {
    return ea(function(g, x) {
      return x.from;
    }, s);
  }, h = function() {
    return !Object.values(s).filter(Ol).length;
  }, y = function(g) {
    u || (u = g);
    var x = g - u, b = x / r.dt;
    s = EW(r, s, b), i(nt(nt(nt({}, e), t), d())), u = g, h() || (c = requestAnimationFrame(f));
  }, v = function(g) {
    l || (l = g);
    var x = (g - l) / n, b = ea(function(m, w) {
      return is.apply(void 0, zv(w).concat([r(x)]));
    }, o);
    if (i(nt(nt(nt({}, e), t), b)), x < 1)
      c = requestAnimationFrame(f);
    else {
      var S = ea(function(m, w) {
        return is.apply(void 0, zv(w).concat([r(1)]));
      }, o);
      i(nt(nt(nt({}, e), t), S));
    }
  };
  return f = r.isStepper ? y : v, function() {
    return requestAnimationFrame(f), function() {
      cancelAnimationFrame(c);
    };
  };
};
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
var $W = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function MW(e, t) {
  if (e == null) return {};
  var r = CW(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function CW(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Jc(e) {
  return RW(e) || NW(e) || kW(e) || IW();
}
function IW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kW(e, t) {
  if (e) {
    if (typeof e == "string") return Sl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sl(e, t);
  }
}
function NW(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function RW(e) {
  if (Array.isArray(e)) return Sl(e);
}
function Sl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function qv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function It(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qv(Object(r), !0).forEach(function(n) {
      Vi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Vi(e, t, r) {
  return t = Zb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function LW(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Zb(n.key), n);
  }
}
function BW(e, t, r) {
  return t && LW(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Zb(e) {
  var t = FW(e, "string");
  return Jn(t) === "symbol" ? t : String(t);
}
function FW(e, t) {
  if (Jn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Jn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function WW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _l(e, t);
}
function _l(e, t) {
  return _l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, _l(e, t);
}
function zW(e) {
  var t = UW();
  return function() {
    var n = as(e), i;
    if (t) {
      var a = as(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return Pl(this, i);
  };
}
function Pl(e, t) {
  if (t && (Jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Al(e);
}
function Al(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function UW() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function as(e) {
  return as = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, as(e);
}
var lr = /* @__PURE__ */ function(e) {
  WW(r, e);
  var t = zW(r);
  function r(n, i) {
    var a;
    DW(this, r), a = t.call(this, n, i);
    var o = a.props, s = o.isActive, c = o.attributeName, u = o.from, l = o.to, f = o.steps, d = o.children, h = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(Al(a)), a.changeStyle = a.changeStyle.bind(Al(a)), !s || h <= 0)
      return a.state = {
        style: {}
      }, typeof d == "function" && (a.state = {
        style: l
      }), Pl(a);
    if (f && f.length)
      a.state = {
        style: f[0].style
      };
    else if (u) {
      if (typeof d == "function")
        return a.state = {
          style: u
        }, Pl(a);
      a.state = {
        style: c ? Vi({}, c, u) : u
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return BW(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, o = i.canBegin;
      this.mounted = !0, !(!a || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, o = a.isActive, s = a.canBegin, c = a.attributeName, u = a.shouldReAnimate, l = a.to, f = a.from, d = this.state.style;
      if (s) {
        if (!o) {
          var h = {
            style: c ? Vi({}, c, l) : l
          };
          this.state && d && (c && d[c] !== l || !c && d !== l) && this.setState(h);
          return;
        }
        if (!(KF(i.to, l) && i.canBegin && i.isActive)) {
          var y = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var v = y || u ? f : i.to;
          if (this.state && d) {
            var p = {
              style: c ? Vi({}, c, v) : v
            };
            (c && d[c] !== v || !c && d !== v) && this.setState(p);
          }
          this.runAnimation(It(It({}, this.props), {}, {
            from: v,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var i = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i();
    }
  }, {
    key: "handleStyleChange",
    value: function(i) {
      this.changeStyle(i);
    }
  }, {
    key: "changeStyle",
    value: function(i) {
      this.mounted && this.setState({
        style: i
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(i) {
      var a = this, o = i.from, s = i.to, c = i.duration, u = i.easing, l = i.begin, f = i.onAnimationEnd, d = i.onAnimationStart, h = jW(o, s, gW(u), c, this.changeStyle), y = function() {
        a.stopJSAnimation = h();
      };
      this.manager.start([d, l, y, c, f]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, s = i.begin, c = i.onAnimationStart, u = o[0], l = u.style, f = u.duration, d = f === void 0 ? 0 : f, h = function(v, p, g) {
        if (g === 0)
          return v;
        var x = p.duration, b = p.easing, S = b === void 0 ? "ease" : b, m = p.style, w = p.properties, O = p.onAnimationEnd, _ = g > 0 ? o[g - 1] : p, T = w || Object.keys(m);
        if (typeof S == "function" || S === "spring")
          return [].concat(Jc(v), [a.runJSAnimation.bind(a, {
            from: _.style,
            to: m,
            duration: x,
            easing: S
          }), x]);
        var I = Bv(T, x, S), j = It(It(It({}, _.style), m), {}, {
          transition: I
        });
        return [].concat(Jc(v), [j, x, O]).filter(aW);
      };
      return this.manager.start([c].concat(Jc(o.reduce(h, [l, Math.max(d, s)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = tW());
      var a = i.begin, o = i.duration, s = i.attributeName, c = i.to, u = i.easing, l = i.onAnimationStart, f = i.onAnimationEnd, d = i.steps, h = i.children, y = this.manager;
      if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof u == "function" || typeof h == "function" || u === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var v = s ? Vi({}, s, c) : c, p = Bv(Object.keys(v), o, u);
      y.start([l, a, It(It({}, v), {}, {
        transition: p
      }), o, f]);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.children;
      i.begin;
      var o = i.duration;
      i.attributeName, i.easing;
      var s = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var c = MW(i, $W), u = tn.count(a), l = this.state.style;
      if (typeof a == "function")
        return a(l);
      if (!s || u === 0 || o <= 0)
        return a;
      var f = function(h) {
        var y = h.props, v = y.style, p = v === void 0 ? {} : v, g = y.className, x = /* @__PURE__ */ Qe(h, It(It({}, c), {}, {
          style: It(It({}, p), l),
          className: g
        }));
        return x;
      };
      return u === 1 ? f(tn.only(a)) : /* @__PURE__ */ E.createElement("div", null, tn.map(a, function(d) {
        return f(d);
      }));
    }
  }]), r;
}(Yt);
lr.displayName = "Animate";
lr.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
lr.propTypes = {
  from: Ae.oneOfType([Ae.object, Ae.string]),
  to: Ae.oneOfType([Ae.object, Ae.string]),
  attributeName: Ae.string,
  // animation duration
  duration: Ae.number,
  begin: Ae.number,
  easing: Ae.oneOfType([Ae.string, Ae.func]),
  steps: Ae.arrayOf(Ae.shape({
    duration: Ae.number.isRequired,
    style: Ae.object.isRequired,
    easing: Ae.oneOfType([Ae.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Ae.func]),
    // transition css properties(dash case), optional
    properties: Ae.arrayOf("string"),
    onAnimationEnd: Ae.func
  })),
  children: Ae.oneOfType([Ae.node, Ae.func]),
  isActive: Ae.bool,
  canBegin: Ae.bool,
  onAnimationEnd: Ae.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: Ae.bool,
  onAnimationStart: Ae.func,
  onAnimationReStart: Ae.func
};
function Ma(e) {
  "@babel/helpers - typeof";
  return Ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ma(e);
}
function os() {
  return os = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, os.apply(this, arguments);
}
function qW(e, t) {
  return KW(e) || HW(e, t) || YW(e, t) || GW();
}
function GW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YW(e, t) {
  if (e) {
    if (typeof e == "string") return Gv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gv(e, t);
  }
}
function Gv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function HW(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function KW(e) {
  if (Array.isArray(e)) return e;
}
function Yv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yv(Object(r), !0).forEach(function(n) {
      VW(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VW(e, t, r) {
  return t = XW(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XW(e) {
  var t = QW(e, "string");
  return Ma(t) == "symbol" ? t : t + "";
}
function QW(e, t) {
  if (Ma(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ma(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Kv = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), s = i >= 0 ? 1 : -1, c = n >= 0 ? 1 : -1, u = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, l;
  if (o > 0 && a instanceof Array) {
    for (var f = [0, 0, 0, 0], d = 0, h = 4; d < h; d++)
      f[d] = a[d] > o ? o : a[d];
    l = "M".concat(t, ",").concat(r + s * f[0]), f[0] > 0 && (l += "A ".concat(f[0], ",").concat(f[0], ",0,0,").concat(u, ",").concat(t + c * f[0], ",").concat(r)), l += "L ".concat(t + n - c * f[1], ",").concat(r), f[1] > 0 && (l += "A ".concat(f[1], ",").concat(f[1], ",0,0,").concat(u, `,
        `).concat(t + n, ",").concat(r + s * f[1])), l += "L ".concat(t + n, ",").concat(r + i - s * f[2]), f[2] > 0 && (l += "A ".concat(f[2], ",").concat(f[2], ",0,0,").concat(u, `,
        `).concat(t + n - c * f[2], ",").concat(r + i)), l += "L ".concat(t + c * f[3], ",").concat(r + i), f[3] > 0 && (l += "A ".concat(f[3], ",").concat(f[3], ",0,0,").concat(u, `,
        `).concat(t, ",").concat(r + i - s * f[3])), l += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var y = Math.min(o, a);
    l = "M ".concat(t, ",").concat(r + s * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(u, ",").concat(t + c * y, ",").concat(r, `
            L `).concat(t + n - c * y, ",").concat(r, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(u, ",").concat(t + n, ",").concat(r + s * y, `
            L `).concat(t + n, ",").concat(r + i - s * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(u, ",").concat(t + n - c * y, ",").concat(r + i, `
            L `).concat(t + c * y, ",").concat(r + i, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(u, ",").concat(t, ",").concat(r + i - s * y, " Z");
  } else
    l = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return l;
}, JW = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, s = r.width, c = r.height;
  if (Math.abs(s) > 0 && Math.abs(c) > 0) {
    var u = Math.min(a, a + s), l = Math.max(a, a + s), f = Math.min(o, o + c), d = Math.max(o, o + c);
    return n >= u && n <= l && i >= f && i <= d;
  }
  return !1;
}, ZW = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, ed = function(t) {
  var r = Hv(Hv({}, ZW), t), n = So(), i = $r(-1), a = qW(i, 2), o = a[0], s = a[1];
  $s(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var S = n.current.getTotalLength();
        S && s(S);
      } catch {
      }
  }, []);
  var c = r.x, u = r.y, l = r.width, f = r.height, d = r.radius, h = r.className, y = r.animationEasing, v = r.animationDuration, p = r.animationBegin, g = r.isAnimationActive, x = r.isUpdateAnimationActive;
  if (c !== +c || u !== +u || l !== +l || f !== +f || l === 0 || f === 0)
    return null;
  var b = fe("recharts-rectangle", h);
  return x ? /* @__PURE__ */ E.createElement(lr, {
    canBegin: o > 0,
    from: {
      width: l,
      height: f,
      x: c,
      y: u
    },
    to: {
      width: l,
      height: f,
      x: c,
      y: u
    },
    duration: v,
    animationEasing: y,
    isActive: x
  }, function(S) {
    var m = S.width, w = S.height, O = S.x, _ = S.y;
    return /* @__PURE__ */ E.createElement(lr, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: p,
      duration: v,
      isActive: g,
      easing: y
    }, /* @__PURE__ */ E.createElement("path", os({}, se(r, !0), {
      className: b,
      d: Kv(O, _, m, w, d),
      ref: n
    })));
  }) : /* @__PURE__ */ E.createElement("path", os({}, se(r, !0), {
    className: b,
    d: Kv(c, u, l, f, d)
  }));
}, e3 = ["points", "className", "baseLinePoints", "connectNulls"];
function Tn() {
  return Tn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tn.apply(this, arguments);
}
function t3(e, t) {
  if (e == null) return {};
  var r = r3(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function r3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Vv(e) {
  return o3(e) || a3(e) || i3(e) || n3();
}
function n3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i3(e, t) {
  if (e) {
    if (typeof e == "string") return Tl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Tl(e, t);
  }
}
function a3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function o3(e) {
  if (Array.isArray(e)) return Tl(e);
}
function Tl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Xv = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, s3 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    Xv(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), Xv(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, ta = function(t, r) {
  var n = s3(t);
  r && (n = [n.reduce(function(a, o) {
    return [].concat(Vv(a), Vv(o));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(o, s, c) {
      return "".concat(o).concat(c === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, c3 = function(t, r, n) {
  var i = ta(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(ta(r.reverse(), n).slice(1));
}, u3 = function(t) {
  var r = t.points, n = t.className, i = t.baseLinePoints, a = t.connectNulls, o = t3(t, e3);
  if (!r || !r.length)
    return null;
  var s = fe("recharts-polygon", n);
  if (i && i.length) {
    var c = o.stroke && o.stroke !== "none", u = c3(r, i, a);
    return /* @__PURE__ */ E.createElement("g", {
      className: s
    }, /* @__PURE__ */ E.createElement("path", Tn({}, se(o, !0), {
      fill: u.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: u
    })), c ? /* @__PURE__ */ E.createElement("path", Tn({}, se(o, !0), {
      fill: "none",
      d: ta(r, a)
    })) : null, c ? /* @__PURE__ */ E.createElement("path", Tn({}, se(o, !0), {
      fill: "none",
      d: ta(i, a)
    })) : null);
  }
  var l = ta(r, a);
  return /* @__PURE__ */ E.createElement("path", Tn({}, se(o, !0), {
    fill: l.slice(-1) === "Z" ? o.fill : "none",
    className: s,
    d: l
  }));
};
function El() {
  return El = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, El.apply(this, arguments);
}
var td = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = fe("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ V.createElement("circle", El({}, se(t, !1), Ao(t), {
    className: o,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function Ca(e) {
  "@babel/helpers - typeof";
  return Ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ca(e);
}
var l3 = ["x", "y", "top", "left", "width", "height", "className"];
function jl() {
  return jl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jl.apply(this, arguments);
}
function Qv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function f3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qv(Object(r), !0).forEach(function(n) {
      d3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function d3(e, t, r) {
  return t = h3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function h3(e) {
  var t = p3(e, "string");
  return Ca(t) == "symbol" ? t : t + "";
}
function p3(e, t) {
  if (Ca(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ca(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function v3(e, t) {
  if (e == null) return {};
  var r = y3(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function y3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var m3 = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, g3 = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, s = o === void 0 ? 0 : o, c = t.left, u = c === void 0 ? 0 : c, l = t.width, f = l === void 0 ? 0 : l, d = t.height, h = d === void 0 ? 0 : d, y = t.className, v = v3(t, l3), p = f3({
    x: n,
    y: a,
    top: s,
    left: u,
    width: f,
    height: h
  }, v);
  return !X(n) || !X(a) || !X(f) || !X(h) || !X(s) || !X(u) ? null : /* @__PURE__ */ E.createElement("path", jl({}, se(p, !0), {
    className: fe("recharts-cross", y),
    d: m3(n, a, f, h, s, u)
  }));
}, b3 = Vs, x3 = db, w3 = Kt;
function O3(e, t) {
  return e && e.length ? b3(e, w3(t), x3) : void 0;
}
var S3 = O3;
const _3 = /* @__PURE__ */ Me(S3);
var P3 = Vs, A3 = Kt, T3 = hb;
function E3(e, t) {
  return e && e.length ? P3(e, A3(t), T3) : void 0;
}
var j3 = E3;
const $3 = /* @__PURE__ */ Me(j3);
var M3 = ["cx", "cy", "angle", "ticks", "axisLine"], C3 = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Zn(e) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e);
}
function ra() {
  return ra = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ra.apply(this, arguments);
}
function Jv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jv(Object(r), !0).forEach(function(n) {
      rc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Zv(e, t) {
  if (e == null) return {};
  var r = I3(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function I3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function k3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ey(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, t0(n.key), n);
  }
}
function N3(e, t, r) {
  return t && ey(e.prototype, t), r && ey(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function R3(e, t, r) {
  return t = ss(t), D3(e, e0() ? Reflect.construct(t, r || [], ss(e).constructor) : t.apply(e, r));
}
function D3(e, t) {
  if (t && (Zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return L3(e);
}
function L3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function e0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (e0 = function() {
    return !!e;
  })();
}
function ss(e) {
  return ss = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ss(e);
}
function B3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $l(e, t);
}
function $l(e, t) {
  return $l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, $l(e, t);
}
function rc(e, t, r) {
  return t = t0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function t0(e) {
  var t = F3(e, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function F3(e, t) {
  if (Zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var nc = /* @__PURE__ */ function(e) {
  function t() {
    return k3(this, t), R3(this, t, arguments);
  }
  return B3(t, e), N3(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var i = n.coordinate, a = this.props, o = a.angle, s = a.cx, c = a.cy;
        return Re(s, c, i, o);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props.orientation, i;
      switch (n) {
        case "left":
          i = "end";
          break;
        case "right":
          i = "start";
          break;
        default:
          i = "middle";
          break;
      }
      return i;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.angle, s = n.ticks, c = _3(s, function(l) {
        return l.coordinate || 0;
      }), u = $3(s, function(l) {
        return l.coordinate || 0;
      });
      return {
        cx: i,
        cy: a,
        startAngle: o,
        endAngle: o,
        innerRadius: u.coordinate || 0,
        outerRadius: c.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.angle, s = n.ticks, c = n.axisLine, u = Zv(n, M3), l = s.reduce(function(y, v) {
        return [Math.min(y[0], v.coordinate), Math.max(y[1], v.coordinate)];
      }, [1 / 0, -1 / 0]), f = Re(i, a, l[0], o), d = Re(i, a, l[1], o), h = Fr(Fr(Fr({}, se(u, !1)), {}, {
        fill: "none"
      }, se(c, !1)), {}, {
        x1: f.x,
        y1: f.y,
        x2: d.x,
        y2: d.y
      });
      return /* @__PURE__ */ E.createElement("line", ra({
        className: "recharts-polar-radius-axis-line"
      }, h));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, o = i.tick, s = i.angle, c = i.tickFormatter, u = i.stroke, l = Zv(i, C3), f = this.getTickTextAnchor(), d = se(l, !1), h = se(o, !1), y = a.map(function(v, p) {
        var g = n.getTickValueCoord(v), x = Fr(Fr(Fr(Fr({
          textAnchor: f,
          transform: "rotate(".concat(90 - s, ", ").concat(g.x, ", ").concat(g.y, ")")
        }, d), {}, {
          stroke: "none",
          fill: u
        }, h), {}, {
          index: p
        }, g), {}, {
          payload: v
        });
        return /* @__PURE__ */ E.createElement(je, ra({
          className: fe("recharts-polar-radius-axis-tick", Wb(o)),
          key: "tick-".concat(v.coordinate)
        }, on(n.props, v, p)), t.renderTickItem(o, x, c ? c(v.value, p) : v.value));
      });
      return /* @__PURE__ */ E.createElement(je, {
        className: "recharts-polar-radius-axis-ticks"
      }, y);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.axisLine, o = n.tick;
      return !i || !i.length ? null : /* @__PURE__ */ E.createElement(je, {
        className: fe("recharts-polar-radius-axis", this.props.className)
      }, a && this.renderAxisLine(), o && this.renderTicks(), tt.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ E.isValidElement(n) ? o = /* @__PURE__ */ E.cloneElement(n, i) : ue(n) ? o = n(i) : o = /* @__PURE__ */ E.createElement(sn, ra({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), a), o;
    }
  }]);
}(Yt);
rc(nc, "displayName", "PolarRadiusAxis");
rc(nc, "axisType", "radiusAxis");
rc(nc, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0
});
function ei(e) {
  "@babel/helpers - typeof";
  return ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ei(e);
}
function Yr() {
  return Yr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yr.apply(this, arguments);
}
function ty(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ty(Object(r), !0).forEach(function(n) {
      ic(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ty(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function W3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ry(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n0(n.key), n);
  }
}
function z3(e, t, r) {
  return t && ry(e.prototype, t), r && ry(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function U3(e, t, r) {
  return t = cs(t), q3(e, r0() ? Reflect.construct(t, r || [], cs(e).constructor) : t.apply(e, r));
}
function q3(e, t) {
  if (t && (ei(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return G3(e);
}
function G3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function r0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (r0 = function() {
    return !!e;
  })();
}
function cs(e) {
  return cs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cs(e);
}
function Y3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ml(e, t);
}
function Ml(e, t) {
  return Ml = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ml(e, t);
}
function ic(e, t, r) {
  return t = n0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function n0(e) {
  var t = H3(e, "string");
  return ei(t) == "symbol" ? t : t + "";
}
function H3(e, t) {
  if (ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var K3 = Math.PI / 180, ny = 1e-5, ac = /* @__PURE__ */ function(e) {
  function t() {
    return W3(this, t), U3(this, t, arguments);
  }
  return Y3(t, e), z3(t, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function(n) {
        var i = this.props, a = i.cx, o = i.cy, s = i.radius, c = i.orientation, u = i.tickSize, l = u || 8, f = Re(a, o, s, n.coordinate), d = Re(a, o, s + (c === "inner" ? -1 : 1) * l, n.coordinate);
        return {
          x1: f.x,
          y1: f.y,
          x2: d.x,
          y2: d.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function(n) {
      var i = this.props.orientation, a = Math.cos(-n.coordinate * K3), o;
      return a > ny ? o = i === "outer" ? "start" : "end" : a < -ny ? o = i === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.radius, s = n.axisLine, c = n.axisLineType, u = Wr(Wr({}, se(this.props, !1)), {}, {
        fill: "none"
      }, se(s, !1));
      if (c === "circle")
        return /* @__PURE__ */ E.createElement(td, Yr({
          className: "recharts-polar-angle-axis-line"
        }, u, {
          cx: i,
          cy: a,
          r: o
        }));
      var l = this.props.ticks, f = l.map(function(d) {
        return Re(i, a, o, d.coordinate);
      });
      return /* @__PURE__ */ E.createElement(u3, Yr({
        className: "recharts-polar-angle-axis-line"
      }, u, {
        points: f
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, o = i.tick, s = i.tickLine, c = i.tickFormatter, u = i.stroke, l = se(this.props, !1), f = se(o, !1), d = Wr(Wr({}, l), {}, {
        fill: "none"
      }, se(s, !1)), h = a.map(function(y, v) {
        var p = n.getTickLineCoord(y), g = n.getTickTextAnchor(y), x = Wr(Wr(Wr({
          textAnchor: g
        }, l), {}, {
          stroke: "none",
          fill: u
        }, f), {}, {
          index: v,
          payload: y,
          x: p.x2,
          y: p.y2
        });
        return /* @__PURE__ */ E.createElement(je, Yr({
          className: fe("recharts-polar-angle-axis-tick", Wb(o)),
          key: "tick-".concat(y.coordinate)
        }, on(n.props, y, v)), s && /* @__PURE__ */ E.createElement("line", Yr({
          className: "recharts-polar-angle-axis-tick-line"
        }, d, p)), o && t.renderTickItem(o, x, c ? c(y.value, v) : y.value));
      });
      return /* @__PURE__ */ E.createElement(je, {
        className: "recharts-polar-angle-axis-ticks"
      }, h);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.radius, o = n.axisLine;
      return a <= 0 || !i || !i.length ? null : /* @__PURE__ */ E.createElement(je, {
        className: fe("recharts-polar-angle-axis", this.props.className)
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ E.isValidElement(n) ? o = /* @__PURE__ */ E.cloneElement(n, i) : ue(n) ? o = n(i) : o = /* @__PURE__ */ E.createElement(sn, Yr({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), a), o;
    }
  }]);
}(Yt);
ic(ac, "displayName", "PolarAngleAxis");
ic(ac, "axisType", "angleAxis");
ic(ac, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0
});
var V3 = cg, X3 = V3(Object.getPrototypeOf, Object), Q3 = X3, J3 = dr, Z3 = Q3, ez = hr, tz = "[object Object]", rz = Function.prototype, nz = Object.prototype, i0 = rz.toString, iz = nz.hasOwnProperty, az = i0.call(Object);
function oz(e) {
  if (!ez(e) || J3(e) != tz)
    return !1;
  var t = Z3(e);
  if (t === null)
    return !0;
  var r = iz.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && i0.call(r) == az;
}
var sz = oz;
const cz = /* @__PURE__ */ Me(sz);
var uz = dr, lz = hr, fz = "[object Boolean]";
function dz(e) {
  return e === !0 || e === !1 || lz(e) && uz(e) == fz;
}
var hz = dz;
const pz = /* @__PURE__ */ Me(hz);
function Ia(e) {
  "@babel/helpers - typeof";
  return Ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ia(e);
}
function us() {
  return us = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, us.apply(this, arguments);
}
function vz(e, t) {
  return bz(e) || gz(e, t) || mz(e, t) || yz();
}
function yz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mz(e, t) {
  if (e) {
    if (typeof e == "string") return iy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return iy(e, t);
  }
}
function iy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function gz(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function bz(e) {
  if (Array.isArray(e)) return e;
}
function ay(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ay(Object(r), !0).forEach(function(n) {
      xz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ay(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xz(e, t, r) {
  return t = wz(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wz(e) {
  var t = Oz(e, "string");
  return Ia(t) == "symbol" ? t : t + "";
}
function Oz(e, t) {
  if (Ia(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ia(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var sy = function(t, r, n, i, a) {
  var o = n - i, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + a), s += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, Sz = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, _z = function(t) {
  var r = oy(oy({}, Sz), t), n = So(), i = $r(-1), a = vz(i, 2), o = a[0], s = a[1];
  $s(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var b = n.current.getTotalLength();
        b && s(b);
      } catch {
      }
  }, []);
  var c = r.x, u = r.y, l = r.upperWidth, f = r.lowerWidth, d = r.height, h = r.className, y = r.animationEasing, v = r.animationDuration, p = r.animationBegin, g = r.isUpdateAnimationActive;
  if (c !== +c || u !== +u || l !== +l || f !== +f || d !== +d || l === 0 && f === 0 || d === 0)
    return null;
  var x = fe("recharts-trapezoid", h);
  return g ? /* @__PURE__ */ E.createElement(lr, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: d,
      x: c,
      y: u
    },
    to: {
      upperWidth: l,
      lowerWidth: f,
      height: d,
      x: c,
      y: u
    },
    duration: v,
    animationEasing: y,
    isActive: g
  }, function(b) {
    var S = b.upperWidth, m = b.lowerWidth, w = b.height, O = b.x, _ = b.y;
    return /* @__PURE__ */ E.createElement(lr, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: p,
      duration: v,
      easing: y
    }, /* @__PURE__ */ E.createElement("path", us({}, se(r, !0), {
      className: x,
      d: sy(O, _, S, m, w),
      ref: n
    })));
  }) : /* @__PURE__ */ E.createElement("g", null, /* @__PURE__ */ E.createElement("path", us({}, se(r, !0), {
    className: x,
    d: sy(c, u, l, f, d)
  })));
}, Pz = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function ka(e) {
  "@babel/helpers - typeof";
  return ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ka(e);
}
function Az(e, t) {
  if (e == null) return {};
  var r = Tz(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Tz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function cy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ls(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cy(Object(r), !0).forEach(function(n) {
      Ez(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ez(e, t, r) {
  return t = jz(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jz(e) {
  var t = $z(e, "string");
  return ka(t) == "symbol" ? t : t + "";
}
function $z(e, t) {
  if (ka(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ka(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Mz(e, t) {
  return ls(ls({}, t), e);
}
function Cz(e, t) {
  return e === "symbols";
}
function uy(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ E.createElement(ed, r);
    case "trapezoid":
      return /* @__PURE__ */ E.createElement(_z, r);
    case "sector":
      return /* @__PURE__ */ E.createElement(qb, r);
    case "symbols":
      if (Cz(t))
        return /* @__PURE__ */ E.createElement(gf, r);
      break;
    default:
      return null;
  }
}
function Iz(e) {
  return /* @__PURE__ */ Lt(e) ? e.props : e;
}
function a0(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? Mz : n, a = e.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, s = e.isActive, c = Az(e, Pz), u;
  if (/* @__PURE__ */ Lt(t))
    u = /* @__PURE__ */ Qe(t, ls(ls({}, c), Iz(t)));
  else if (ue(t))
    u = t(c);
  else if (cz(t) && !pz(t)) {
    var l = i(t, c);
    u = /* @__PURE__ */ E.createElement(uy, {
      shapeType: r,
      elementProps: l
    });
  } else {
    var f = c;
    u = /* @__PURE__ */ E.createElement(uy, {
      shapeType: r,
      elementProps: f
    });
  }
  return s ? /* @__PURE__ */ E.createElement(je, {
    className: o
  }, u) : u;
}
function oc(e, t) {
  return t != null && "trapezoids" in e.props;
}
function sc(e, t) {
  return t != null && "sectors" in e.props;
}
function Na(e, t) {
  return t != null && "points" in e.props;
}
function kz(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function Nz(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function Rz(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function Dz(e, t) {
  var r;
  return oc(e, t) ? r = kz : sc(e, t) ? r = Nz : Na(e, t) && (r = Rz), r;
}
function Lz(e, t) {
  var r;
  return oc(e, t) ? r = "trapezoids" : sc(e, t) ? r = "sectors" : Na(e, t) && (r = "points"), r;
}
function Bz(e, t) {
  if (oc(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (sc(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Na(e, t) ? t.payload : {};
}
function Fz(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = Lz(r, t), a = Bz(r, t), o = n.filter(function(c, u) {
    var l = Js(a, c), f = r.props[i].filter(function(y) {
      var v = Dz(r, t);
      return v(y, t);
    }), d = r.props[i].indexOf(f[f.length - 1]), h = u === d;
    return l && h;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var Oo;
function ti(e) {
  "@babel/helpers - typeof";
  return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ti(e);
}
function En() {
  return En = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, En.apply(this, arguments);
}
function ly(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ly(Object(r), !0).forEach(function(n) {
      At(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ly(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, s0(n.key), n);
  }
}
function zz(e, t, r) {
  return t && fy(e.prototype, t), r && fy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Uz(e, t, r) {
  return t = fs(t), qz(e, o0() ? Reflect.construct(t, r || [], fs(e).constructor) : t.apply(e, r));
}
function qz(e, t) {
  if (t && (ti(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Gz(e);
}
function Gz(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function o0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (o0 = function() {
    return !!e;
  })();
}
function fs(e) {
  return fs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fs(e);
}
function Yz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cl(e, t);
}
function Cl(e, t) {
  return Cl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Cl(e, t);
}
function At(e, t, r) {
  return t = s0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function s0(e) {
  var t = Hz(e, "string");
  return ti(t) == "symbol" ? t : t + "";
}
function Hz(e, t) {
  if (ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vr = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return Wz(this, t), n = Uz(this, t, [r]), At(n, "pieRef", null), At(n, "sectorRefs", []), At(n, "id", Va("recharts-pie-")), At(n, "handleAnimationEnd", function() {
      var i = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), ue(i) && i();
    }), At(n, "handleAnimationStart", function() {
      var i = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), ue(i) && i();
    }), n.state = {
      isAnimationFinished: !r.isAnimationActive,
      prevIsAnimationActive: r.isAnimationActive,
      prevAnimationId: r.animationId,
      sectorToFocus: 0
    }, n;
  }
  return Yz(t, e), zz(t, [{
    key: "isActiveIndex",
    value: function(n) {
      var i = this.props.activeIndex;
      return Array.isArray(i) ? i.indexOf(n) !== -1 : n === i;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var n = this.props.activeIndex;
      return Array.isArray(n) ? n.length !== 0 : n || n === 0;
    }
  }, {
    key: "renderLabels",
    value: function(n) {
      var i = this.props.isAnimationActive;
      if (i && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.label, s = a.labelLine, c = a.dataKey, u = a.valueKey, l = se(this.props, !1), f = se(o, !1), d = se(s, !1), h = o && o.offsetRadius || 20, y = n.map(function(v, p) {
        var g = (v.startAngle + v.endAngle) / 2, x = Re(v.cx, v.cy, v.outerRadius + h, g), b = ke(ke(ke(ke({}, l), v), {}, {
          stroke: "none"
        }, f), {}, {
          index: p,
          textAnchor: t.getTextAnchor(x.x, v.cx)
        }, x), S = ke(ke(ke(ke({}, l), v), {}, {
          fill: "none",
          stroke: v.fill
        }, d), {}, {
          index: p,
          points: [Re(v.cx, v.cy, v.outerRadius, g), x]
        }), m = c;
        return de(c) && de(u) ? m = "value" : de(c) && (m = u), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ E.createElement(je, {
          key: "label-".concat(v.startAngle, "-").concat(v.endAngle, "-").concat(v.midAngle, "-").concat(p)
        }, s && t.renderLabelLineItem(s, S, "line"), t.renderLabelItem(o, b, ot(v, m)));
      });
      return /* @__PURE__ */ E.createElement(je, {
        className: "recharts-pie-labels"
      }, y);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.activeShape, s = a.blendStroke, c = a.inactiveShape;
      return n.map(function(u, l) {
        if ((u == null ? void 0 : u.startAngle) === 0 && (u == null ? void 0 : u.endAngle) === 0 && n.length !== 1) return null;
        var f = i.isActiveIndex(l), d = c && i.hasActiveIndex() ? c : null, h = f ? o : d, y = ke(ke({}, u), {}, {
          stroke: s ? u.fill : u.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ E.createElement(je, En({
          ref: function(p) {
            p && !i.sectorRefs.includes(p) && i.sectorRefs.push(p);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, on(i.props, u, l), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(u == null ? void 0 : u.startAngle, "-").concat(u == null ? void 0 : u.endAngle, "-").concat(u.midAngle, "-").concat(l)
        }), /* @__PURE__ */ E.createElement(a0, En({
          option: h,
          isActive: f,
          shapeType: "sector"
        }, y)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.sectors, o = i.isAnimationActive, s = i.animationBegin, c = i.animationDuration, u = i.animationEasing, l = i.animationId, f = this.state, d = f.prevSectors, h = f.prevIsAnimationActive;
      return /* @__PURE__ */ E.createElement(lr, {
        begin: s,
        duration: c,
        isActive: o,
        easing: u,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(l, "-").concat(h),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(y) {
        var v = y.t, p = [], g = a && a[0], x = g.startAngle;
        return a.forEach(function(b, S) {
          var m = d && d[S], w = S > 0 ? wt(b, "paddingAngle", 0) : 0;
          if (m) {
            var O = wr(m.endAngle - m.startAngle, b.endAngle - b.startAngle), _ = ke(ke({}, b), {}, {
              startAngle: x + w,
              endAngle: x + O(v) + w
            });
            p.push(_), x = _.endAngle;
          } else {
            var T = b.endAngle, I = b.startAngle, j = wr(0, T - I), $ = j(v), k = ke(ke({}, b), {}, {
              startAngle: x + w,
              endAngle: x + $ + w
            });
            p.push(k), x = k.endAngle;
          }
        }), /* @__PURE__ */ E.createElement(je, null, n.renderSectorsStatically(p));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(n) {
      var i = this;
      n.onkeydown = function(a) {
        if (!a.altKey)
          switch (a.key) {
            case "ArrowLeft": {
              var o = ++i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[o].focus(), i.setState({
                sectorToFocus: o
              });
              break;
            }
            case "ArrowRight": {
              var s = --i.state.sectorToFocus < 0 ? i.sectorRefs.length - 1 : i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[s].focus(), i.setState({
                sectorToFocus: s
              });
              break;
            }
            case "Escape": {
              i.sectorRefs[i.state.sectorToFocus].blur(), i.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
      };
    }
  }, {
    key: "renderSectors",
    value: function() {
      var n = this.props, i = n.sectors, a = n.isAnimationActive, o = this.state.prevSectors;
      return a && i && i.length && (!o || !Js(o, i)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(i);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.hide, o = i.sectors, s = i.className, c = i.label, u = i.cx, l = i.cy, f = i.innerRadius, d = i.outerRadius, h = i.isAnimationActive, y = this.state.isAnimationFinished;
      if (a || !o || !o.length || !X(u) || !X(l) || !X(f) || !X(d))
        return null;
      var v = fe("recharts-pie", s);
      return /* @__PURE__ */ E.createElement(je, {
        tabIndex: this.props.rootTabIndex,
        className: v,
        ref: function(g) {
          n.pieRef = g;
        }
      }, this.renderSectors(), c && this.renderLabels(o), tt.renderCallByParent(this.props, null, !1), (!h || y) && Cr.renderCallByParent(this.props, o, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return i.prevIsAnimationActive !== n.isAnimationActive ? {
        prevIsAnimationActive: n.isAnimationActive,
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : n.isAnimationActive && n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: i.curSectors,
        isAnimationFinished: !0
      } : n.sectors !== i.curSectors ? {
        curSectors: n.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(n, i) {
      return n > i ? "start" : n < i ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(n, i, a) {
      if (/* @__PURE__ */ E.isValidElement(n))
        return /* @__PURE__ */ E.cloneElement(n, i);
      if (ue(n))
        return n(i);
      var o = fe("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ E.createElement(yl, En({}, i, {
        key: a,
        type: "linear",
        className: o
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, i, a) {
      if (/* @__PURE__ */ E.isValidElement(n))
        return /* @__PURE__ */ E.cloneElement(n, i);
      var o = a;
      if (ue(n) && (o = n(i), /* @__PURE__ */ E.isValidElement(o)))
        return o;
      var s = fe("recharts-pie-label-text", typeof n != "boolean" && !ue(n) ? n.className : "");
      return /* @__PURE__ */ E.createElement(sn, En({}, i, {
        alignmentBaseline: "middle",
        className: s
      }), o);
    }
  }]);
}(Yt);
Oo = vr;
At(vr, "displayName", "Pie");
At(vr, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !ir.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
At(vr, "parseDeltaAngle", function(e, t) {
  var r = ut(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
At(vr, "getRealPieData", function(e) {
  var t = e.data, r = e.children, n = se(e, !1), i = Et(r, fa);
  return t && t.length ? t.map(function(a, o) {
    return ke(ke(ke({
      payload: a
    }, n), a), i && i[o] && i[o].props);
  }) : i && i.length ? i.map(function(a) {
    return ke(ke({}, n), a.props);
  }) : [];
});
At(vr, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, o = Fb(i, a), s = n + lt(e.cx, i, i / 2), c = r + lt(e.cy, a, a / 2), u = lt(e.innerRadius, o, 0), l = lt(e.outerRadius, o, o * 0.8), f = e.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: s,
    cy: c,
    innerRadius: u,
    outerRadius: l,
    maxRadius: f
  };
});
At(vr, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? ke(ke({}, t.type.defaultProps), t.props) : t.props, i = Oo.getRealPieData(n);
  if (!i || !i.length)
    return null;
  var a = n.cornerRadius, o = n.startAngle, s = n.endAngle, c = n.paddingAngle, u = n.dataKey, l = n.nameKey, f = n.valueKey, d = n.tooltipType, h = Math.abs(n.minAngle), y = Oo.parseCoordinateOfPie(n, r), v = Oo.parseDeltaAngle(o, s), p = Math.abs(v), g = u;
  de(u) && de(f) ? (Bt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), g = "value") : de(u) && (Bt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), g = f);
  var x = i.filter(function(_) {
    return ot(_, g, 0) !== 0;
  }).length, b = (p >= 360 ? x : x - 1) * c, S = p - x * h - b, m = i.reduce(function(_, T) {
    var I = ot(T, g, 0);
    return _ + (X(I) ? I : 0);
  }, 0), w;
  if (m > 0) {
    var O;
    w = i.map(function(_, T) {
      var I = ot(_, g, 0), j = ot(_, l, T), $ = (X(I) ? I : 0) / m, k;
      T ? k = O.endAngle + ut(v) * c * (I !== 0 ? 1 : 0) : k = o;
      var D = k + ut(v) * ((I !== 0 ? h : 0) + $ * S), L = (k + D) / 2, N = (y.innerRadius + y.outerRadius) / 2, F = [{
        name: j,
        value: I,
        payload: _,
        dataKey: g,
        type: d
      }], U = Re(y.cx, y.cy, N, L);
      return O = ke(ke(ke({
        percent: $,
        cornerRadius: a,
        name: j,
        tooltipPayload: F,
        midAngle: L,
        middleRadius: N,
        tooltipPosition: U
      }, _), y), {}, {
        value: ot(_, g),
        startAngle: k,
        endAngle: D,
        payload: _,
        paddingAngle: ut(v) * c
      }), O;
    });
  }
  return ke(ke({}, y), {}, {
    sectors: w,
    data: i
  });
});
var Kz = Math.ceil, Vz = Math.max;
function Xz(e, t, r, n) {
  for (var i = -1, a = Vz(Kz((t - e) / (r || 1)), 0), o = Array(a); a--; )
    o[n ? a : ++i] = e, e += r;
  return o;
}
var Qz = Xz, Jz = Tg, dy = 1 / 0, Zz = 17976931348623157e292;
function eU(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Jz(e), e === dy || e === -dy) {
    var t = e < 0 ? -1 : 1;
    return t * Zz;
  }
  return e === e ? e : 0;
}
var c0 = eU, tU = Qz, rU = zs, Zc = c0;
function nU(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && rU(t, r, n) && (r = n = void 0), t = Zc(t), r === void 0 ? (r = t, t = 0) : r = Zc(r), n = n === void 0 ? t < r ? 1 : -1 : Zc(n), tU(t, r, n, e);
  };
}
var iU = nU, aU = iU, oU = aU(), sU = oU;
const ds = /* @__PURE__ */ Me(sU);
function Ra(e) {
  "@babel/helpers - typeof";
  return Ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ra(e);
}
function hy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function py(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hy(Object(r), !0).forEach(function(n) {
      u0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u0(e, t, r) {
  return t = cU(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cU(e) {
  var t = uU(e, "string");
  return Ra(t) == "symbol" ? t : t + "";
}
function uU(e, t) {
  if (Ra(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ra(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lU = ["Webkit", "Moz", "O", "ms"], fU = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = lU.reduce(function(a, o) {
    return py(py({}, a), {}, u0({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function ri(e) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ri(e);
}
function hs() {
  return hs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hs.apply(this, arguments);
}
function vy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function eu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vy(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, f0(n.key), n);
  }
}
function hU(e, t, r) {
  return t && yy(e.prototype, t), r && yy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function pU(e, t, r) {
  return t = ps(t), vU(e, l0() ? Reflect.construct(t, r || [], ps(e).constructor) : t.apply(e, r));
}
function vU(e, t) {
  if (t && (ri(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yU(e);
}
function yU(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function l0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (l0 = function() {
    return !!e;
  })();
}
function ps(e) {
  return ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ps(e);
}
function mU(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Il(e, t);
}
function Il(e, t) {
  return Il = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Il(e, t);
}
function gt(e, t, r) {
  return t = f0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function f0(e) {
  var t = gU(e, "string");
  return ri(t) == "symbol" ? t : t + "";
}
function gU(e, t) {
  if (ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bU = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var c = r.length, u = Ji().domain(ds(0, c)).range([a, a + o - s]), l = u.domain().map(function(f) {
    return u(f);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: u(n),
    endX: u(i),
    scale: u,
    scaleValues: l
  };
}, my = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, ni = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return dU(this, t), n = pU(this, t, [r]), gt(n, "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), gt(n, "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), gt(n, "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var i = n.props, a = i.endIndex, o = i.onDragEnd, s = i.startIndex;
        o == null || o({
          endIndex: a,
          startIndex: s
        });
      }), n.detachDragEndListener();
    }), gt(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), gt(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), gt(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), gt(n, "handleSlideDragStart", function(i) {
      var a = my(i) ? i.changedTouches[0] : i;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: a.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(n, "startX"),
      endX: n.handleTravellerDragStart.bind(n, "endX")
    }, n.state = {}, n;
  }
  return mU(t, e), hU(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, o = this.state.scaleValues, s = this.props, c = s.gap, u = s.data, l = u.length - 1, f = Math.min(i, a), d = Math.max(i, a), h = t.getIndexInRange(o, f), y = t.getIndexInRange(o, d);
      return {
        startIndex: h - h % c,
        endIndex: y === l ? l : y - y % c
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, o = i.tickFormatter, s = i.dataKey, c = ot(a[n], s, n);
      return ue(o) ? o(c, n) : c;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var i = this.state, a = i.slideMoveStartX, o = i.startX, s = i.endX, c = this.props, u = c.x, l = c.width, f = c.travellerWidth, d = c.startIndex, h = c.endIndex, y = c.onChange, v = n.pageX - a;
      v > 0 ? v = Math.min(v, u + l - f - s, u + l - f - o) : v < 0 && (v = Math.max(v, u - o, u - s));
      var p = this.getIndex({
        startX: o + v,
        endX: s + v
      });
      (p.startIndex !== d || p.endIndex !== h) && y && y(p), this.setState({
        startX: o + v,
        endX: s + v,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = my(i) ? i.changedTouches[0] : i;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: a.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, s = i.endX, c = i.startX, u = this.state[o], l = this.props, f = l.x, d = l.width, h = l.travellerWidth, y = l.onChange, v = l.gap, p = l.data, g = {
        startX: this.state.startX,
        endX: this.state.endX
      }, x = n.pageX - a;
      x > 0 ? x = Math.min(x, f + d - h - u) : x < 0 && (x = Math.max(x, f - u)), g[o] = u + x;
      var b = this.getIndex(g), S = b.startIndex, m = b.endIndex, w = function() {
        var _ = p.length - 1;
        return o === "startX" && (s > c ? S % v === 0 : m % v === 0) || s < c && m === _ || o === "endX" && (s > c ? m % v === 0 : S % v === 0) || s > c && m === _;
      };
      this.setState(gt(gt({}, o, u + x), "brushMoveStartX", n.pageX), function() {
        y && w() && y(b);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, o = this.state, s = o.scaleValues, c = o.startX, u = o.endX, l = this.state[i], f = s.indexOf(l);
      if (f !== -1) {
        var d = f + n;
        if (!(d === -1 || d >= s.length)) {
          var h = s[d];
          i === "startX" && h >= u || i === "endX" && h <= c || this.setState(gt({}, i, h), function() {
            a.props.onChange(a.getIndex({
              startX: a.state.startX,
              endX: a.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, c = n.fill, u = n.stroke;
      return /* @__PURE__ */ E.createElement("rect", {
        stroke: u,
        fill: c,
        x: i,
        y: a,
        width: o,
        height: s
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, c = n.data, u = n.children, l = n.padding, f = tn.only(u);
      return f ? /* @__PURE__ */ E.cloneElement(f, {
        x: i,
        y: a,
        width: o,
        height: s,
        margin: l,
        compact: !0,
        data: c
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a, o, s = this, c = this.props, u = c.y, l = c.travellerWidth, f = c.height, d = c.traveller, h = c.ariaLabel, y = c.data, v = c.startIndex, p = c.endIndex, g = Math.max(n, this.props.x), x = eu(eu({}, se(this.props, !1)), {}, {
        x: g,
        y: u,
        width: l,
        height: f
      }), b = h || "Min value: ".concat((a = y[v]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = y[p]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ E.createElement(je, {
        tabIndex: 0,
        role: "slider",
        "aria-label": b,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[i],
        onTouchStart: this.travellerDragStartHandlers[i],
        onKeyDown: function(m) {
          ["ArrowLeft", "ArrowRight"].includes(m.key) && (m.preventDefault(), m.stopPropagation(), s.handleTravellerMoveKeyboard(m.key === "ArrowRight" ? 1 : -1, i));
        },
        onFocus: function() {
          s.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          s.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(d, x));
    }
  }, {
    key: "renderSlide",
    value: function(n, i) {
      var a = this.props, o = a.y, s = a.height, c = a.stroke, u = a.travellerWidth, l = Math.min(n, i) + u, f = Math.max(Math.abs(i - n) - u, 0);
      return /* @__PURE__ */ E.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: c,
        fillOpacity: 0.2,
        x: l,
        y: o,
        width: f,
        height: s
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, s = n.height, c = n.travellerWidth, u = n.stroke, l = this.state, f = l.startX, d = l.endX, h = 5, y = {
        pointerEvents: "none",
        fill: u
      };
      return /* @__PURE__ */ E.createElement(je, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ E.createElement(sn, hs({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, d) - h,
        y: o + s / 2
      }, y), this.getTextOfTick(i)), /* @__PURE__ */ E.createElement(sn, hs({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(f, d) + c + h,
        y: o + s / 2
      }, y), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, o = n.children, s = n.x, c = n.y, u = n.width, l = n.height, f = n.alwaysShowText, d = this.state, h = d.startX, y = d.endX, v = d.isTextActive, p = d.isSlideMoving, g = d.isTravellerMoving, x = d.isTravellerFocused;
      if (!i || !i.length || !X(s) || !X(c) || !X(u) || !X(l) || u <= 0 || l <= 0)
        return null;
      var b = fe("recharts-brush", a), S = E.Children.count(o) === 1, m = fU("userSelect", "none");
      return /* @__PURE__ */ E.createElement(je, {
        className: b,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: m
      }, this.renderBackground(), S && this.renderPanorama(), this.renderSlide(h, y), this.renderTravellerLayer(h, "startX"), this.renderTravellerLayer(y, "endX"), (v || p || g || x || f) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, o = n.width, s = n.height, c = n.stroke, u = Math.floor(a + s / 2) - 1;
      return /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("rect", {
        x: i,
        y: a,
        width: o,
        height: s,
        fill: c,
        stroke: "none"
      }), /* @__PURE__ */ E.createElement("line", {
        x1: i + 1,
        y1: u,
        x2: i + o - 1,
        y2: u,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ E.createElement("line", {
        x1: i + 1,
        y1: u + 2,
        x2: i + o - 1,
        y2: u + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, i) {
      var a;
      return /* @__PURE__ */ E.isValidElement(n) ? a = /* @__PURE__ */ E.cloneElement(n, i) : ue(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var a = n.data, o = n.width, s = n.x, c = n.travellerWidth, u = n.updateId, l = n.startIndex, f = n.endIndex;
      if (a !== i.prevData || u !== i.prevUpdateId)
        return eu({
          prevData: a,
          prevTravellerWidth: c,
          prevUpdateId: u,
          prevX: s,
          prevWidth: o
        }, a && a.length ? bU({
          data: a,
          width: o,
          x: s,
          travellerWidth: c,
          startIndex: l,
          endIndex: f
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (o !== i.prevWidth || s !== i.prevX || c !== i.prevTravellerWidth)) {
        i.scale.range([s, s + o - c]);
        var d = i.scale.domain().map(function(h) {
          return i.scale(h);
        });
        return {
          prevData: a,
          prevTravellerWidth: c,
          prevUpdateId: u,
          prevX: s,
          prevWidth: o,
          startX: i.scale(n.startIndex),
          endX: i.scale(n.endIndex),
          scaleValues: d
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, i) {
      for (var a = n.length, o = 0, s = a - 1; s - o > 1; ) {
        var c = Math.floor((o + s) / 2);
        n[c] > i ? s = c : o = c;
      }
      return i >= n[s] ? s : o;
    }
  }]);
}(Yt);
gt(ni, "displayName", "Brush");
gt(ni, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var xU = Pf;
function wU(e, t) {
  var r;
  return xU(e, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var OU = wU, SU = eg, _U = Kt, PU = OU, AU = yt, TU = zs;
function EU(e, t, r) {
  var n = AU(e) ? SU : PU;
  return r && TU(e, t, r) && (t = void 0), n(e, _U(t));
}
var jU = EU;
const $U = /* @__PURE__ */ Me(jU);
var qt = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, gy = Og;
function MU(e, t, r) {
  t == "__proto__" && gy ? gy(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var CU = MU, IU = CU, kU = xg, NU = Kt;
function RU(e, t) {
  var r = {};
  return t = NU(t), kU(e, function(n, i, a) {
    IU(r, i, t(n, i, a));
  }), r;
}
var DU = RU;
const LU = /* @__PURE__ */ Me(DU);
function BU(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var FU = BU, WU = Pf;
function zU(e, t) {
  var r = !0;
  return WU(e, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var UU = zU, qU = FU, GU = UU, YU = Kt, HU = yt, KU = zs;
function VU(e, t, r) {
  var n = HU(e) ? qU : GU;
  return r && KU(e, t, r) && (t = void 0), n(e, YU(t));
}
var XU = VU;
const d0 = /* @__PURE__ */ Me(XU);
var QU = ["x", "y"];
function ii(e) {
  "@babel/helpers - typeof";
  return ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ii(e);
}
function kl() {
  return kl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kl.apply(this, arguments);
}
function by(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? by(Object(r), !0).forEach(function(n) {
      JU(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : by(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JU(e, t, r) {
  return t = ZU(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZU(e) {
  var t = eq(e, "string");
  return ii(t) == "symbol" ? t : t + "";
}
function eq(e, t) {
  if (ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tq(e, t) {
  if (e == null) return {};
  var r = rq(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function rq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function nq(e, t) {
  var r = e.x, n = e.y, i = tq(e, QU), a = "".concat(r), o = parseInt(a, 10), s = "".concat(n), c = parseInt(s, 10), u = "".concat(t.height || i.height), l = parseInt(u, 10), f = "".concat(t.width || i.width), d = parseInt(f, 10);
  return zi(zi(zi(zi(zi({}, t), i), o ? {
    x: o
  } : {}), c ? {
    y: c
  } : {}), {}, {
    height: l,
    width: d,
    name: t.name,
    radius: t.radius
  });
}
function xy(e) {
  return /* @__PURE__ */ E.createElement(a0, kl({
    shapeType: "rectangle",
    propTransformer: nq,
    activeClassName: "recharts-active-bar"
  }, e));
}
var iq = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = X(n) || __(n);
    return a ? t(n, i) : (a || (process.env.NODE_ENV !== "production" ? vt(!1, "minPointSize callback function received a value with type of ".concat(ii(n), ". Currently only numbers or null/undefined are supported.")) : vt()), r);
  };
}, aq = ["value", "background"], h0;
function ai(e) {
  "@babel/helpers - typeof";
  return ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ai(e);
}
function oq(e, t) {
  if (e == null) return {};
  var r = sq(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function sq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function vs() {
  return vs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vs.apply(this, arguments);
}
function wy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function He(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wy(Object(r), !0).forEach(function(n) {
      jr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Oy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, v0(n.key), n);
  }
}
function uq(e, t, r) {
  return t && Oy(e.prototype, t), r && Oy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function lq(e, t, r) {
  return t = ys(t), fq(e, p0() ? Reflect.construct(t, r || [], ys(e).constructor) : t.apply(e, r));
}
function fq(e, t) {
  if (t && (ai(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return dq(e);
}
function dq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function p0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (p0 = function() {
    return !!e;
  })();
}
function ys(e) {
  return ys = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ys(e);
}
function hq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Nl(e, t);
}
function Nl(e, t) {
  return Nl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Nl(e, t);
}
function jr(e, t, r) {
  return t = v0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function v0(e) {
  var t = pq(e, "string");
  return ai(t) == "symbol" ? t : t + "";
}
function pq(e, t) {
  if (ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yn = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    cq(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = lq(this, t, [].concat(i)), jr(r, "state", {
      isAnimationFinished: !1
    }), jr(r, "id", Va("recharts-bar-")), jr(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), jr(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return hq(t, e), uq(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, s = a.dataKey, c = a.activeIndex, u = a.activeBar, l = se(this.props, !1);
      return n && n.map(function(f, d) {
        var h = d === c, y = h ? u : o, v = He(He(He({}, l), f), {}, {
          isActive: h,
          option: y,
          index: d,
          dataKey: s,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ E.createElement(je, vs({
          className: "recharts-bar-rectangle"
        }, on(i.props, f, d), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(f == null ? void 0 : f.x, "-").concat(f == null ? void 0 : f.y, "-").concat(f == null ? void 0 : f.value, "-").concat(d)
        }), /* @__PURE__ */ E.createElement(xy, v));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.layout, s = i.isAnimationActive, c = i.animationBegin, u = i.animationDuration, l = i.animationEasing, f = i.animationId, d = this.state.prevData;
      return /* @__PURE__ */ E.createElement(lr, {
        begin: c,
        duration: u,
        isActive: s,
        easing: l,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(f),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(h) {
        var y = h.t, v = a.map(function(p, g) {
          var x = d && d[g];
          if (x) {
            var b = wr(x.x, p.x), S = wr(x.y, p.y), m = wr(x.width, p.width), w = wr(x.height, p.height);
            return He(He({}, p), {}, {
              x: b(y),
              y: S(y),
              width: m(y),
              height: w(y)
            });
          }
          if (o === "horizontal") {
            var O = wr(0, p.height), _ = O(y);
            return He(He({}, p), {}, {
              y: p.y + p.height - _,
              height: _
            });
          }
          var T = wr(0, p.width), I = T(y);
          return He(He({}, p), {}, {
            width: I
          });
        });
        return /* @__PURE__ */ E.createElement(je, null, n.renderRectanglesStatically(v));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, i = n.data, a = n.isAnimationActive, o = this.state.prevData;
      return a && i && i.length && (!o || !Js(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.dataKey, s = i.activeIndex, c = se(this.props.background, !1);
      return a.map(function(u, l) {
        u.value;
        var f = u.background, d = oq(u, aq);
        if (!f)
          return null;
        var h = He(He(He(He(He({}, d), {}, {
          fill: "#eee"
        }, f), c), on(n.props, u, l)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: l,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ E.createElement(xy, vs({
          key: "background-bar-".concat(l),
          option: n.props.background,
          isActive: l === s
        }, h));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.data, s = a.xAxis, c = a.yAxis, u = a.layout, l = a.children, f = Et(l, tc);
      if (!f)
        return null;
      var d = u === "vertical" ? o[0].height / 2 : o[0].width / 2, h = function(p, g) {
        var x = Array.isArray(p.value) ? p.value[1] : p.value;
        return {
          x: p.x,
          y: p.y,
          value: x,
          errorVal: ot(p, g)
        };
      }, y = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ E.createElement(je, y, f.map(function(v) {
        return /* @__PURE__ */ E.cloneElement(v, {
          key: "error-bar-".concat(i, "-").concat(v.props.dataKey),
          data: o,
          xAxis: s,
          yAxis: c,
          layout: u,
          offset: d,
          dataPointFormatter: h
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.data, o = n.className, s = n.xAxis, c = n.yAxis, u = n.left, l = n.top, f = n.width, d = n.height, h = n.isAnimationActive, y = n.background, v = n.id;
      if (i || !a || !a.length)
        return null;
      var p = this.state.isAnimationFinished, g = fe("recharts-bar", o), x = s && s.allowDataOverflow, b = c && c.allowDataOverflow, S = x || b, m = de(v) ? this.id : v;
      return /* @__PURE__ */ E.createElement(je, {
        className: g
      }, x || b ? /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ E.createElement("rect", {
        x: x ? u : u - f / 2,
        y: b ? l : l - d / 2,
        width: x ? f : f * 2,
        height: b ? d : d * 2
      }))) : null, /* @__PURE__ */ E.createElement(je, {
        className: "recharts-bar-rectangles",
        clipPath: S ? "url(#clipPath-".concat(m, ")") : null
      }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(S, m), (!h || p) && Cr.renderCallByParent(this.props, a));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: i.curData
      } : n.data !== i.curData ? {
        curData: n.data
      } : null;
    }
  }]);
}(Yt);
h0 = yn;
jr(yn, "displayName", "Bar");
jr(yn, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !ir.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
jr(yn, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, o = e.yAxis, s = e.xAxisTicks, c = e.yAxisTicks, u = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, h = UL(n, r);
  if (!h)
    return null;
  var y = t.layout, v = r.type.defaultProps, p = v !== void 0 ? He(He({}, v), r.props) : r.props, g = p.dataKey, x = p.children, b = p.minPointSize, S = y === "horizontal" ? o : a, m = u ? S.scale.domain() : null, w = XL({
    numericAxis: S
  }), O = Et(x, fa), _ = f.map(function(T, I) {
    var j, $, k, D, L, N;
    u ? j = qL(u[l + I], m) : (j = ot(T, g), Array.isArray(j) || (j = [w, j]));
    var F = iq(b, h0.defaultProps.minPointSize)(j[1], I);
    if (y === "horizontal") {
      var U, Y = [o.scale(j[0]), o.scale(j[1])], M = Y[0], R = Y[1];
      $ = rv({
        axis: a,
        ticks: s,
        bandSize: i,
        offset: h.offset,
        entry: T,
        index: I
      }), k = (U = R ?? M) !== null && U !== void 0 ? U : void 0, D = h.size;
      var W = M - R;
      if (L = Number.isNaN(W) ? 0 : W, N = {
        x: $,
        y: o.y,
        width: D,
        height: o.height
      }, Math.abs(F) > 0 && Math.abs(L) < Math.abs(F)) {
        var q = ut(L || F) * (Math.abs(F) - Math.abs(L));
        k -= q, L += q;
      }
    } else {
      var J = [a.scale(j[0]), a.scale(j[1])], te = J[0], ne = J[1];
      if ($ = te, k = rv({
        axis: o,
        ticks: c,
        bandSize: i,
        offset: h.offset,
        entry: T,
        index: I
      }), D = ne - te, L = h.size, N = {
        x: a.x,
        y: k,
        width: a.width,
        height: L
      }, Math.abs(F) > 0 && Math.abs(D) < Math.abs(F)) {
        var ae = ut(D || F) * (Math.abs(F) - Math.abs(D));
        D += ae;
      }
    }
    return He(He(He({}, T), {}, {
      x: $,
      y: k,
      width: D,
      height: L,
      value: u ? j : j[1],
      payload: T,
      background: N
    }, O && O[I] && O[I].props), {}, {
      tooltipPayload: [Lb(r, T)],
      tooltipPosition: {
        x: $ + D / 2,
        y: k + L / 2
      }
    });
  });
  return He({
    data: _,
    layout: y
  }, d);
});
function Da(e) {
  "@babel/helpers - typeof";
  return Da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Da(e);
}
function vq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, y0(n.key), n);
  }
}
function yq(e, t, r) {
  return t && Sy(e.prototype, t), r && Sy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _y(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _y(Object(r), !0).forEach(function(n) {
      cc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _y(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cc(e, t, r) {
  return t = y0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y0(e) {
  var t = mq(e, "string");
  return Da(t) == "symbol" ? t : t + "";
}
function mq(e, t) {
  if (Da(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Da(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gq = function(t, r, n, i, a) {
  var o = t.width, s = t.height, c = t.layout, u = t.children, l = Object.keys(r), f = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: s - n.bottom,
    bottomMirror: s - n.bottom
  }, d = !!bt(u, yn);
  return l.reduce(function(h, y) {
    var v = r[y], p = v.orientation, g = v.domain, x = v.padding, b = x === void 0 ? {} : x, S = v.mirror, m = v.reversed, w = "".concat(p).concat(S ? "Mirror" : ""), O, _, T, I, j;
    if (v.type === "number" && (v.padding === "gap" || v.padding === "no-gap")) {
      var $ = g[1] - g[0], k = 1 / 0, D = v.categoricalDomain.sort(T_);
      if (D.forEach(function(J, te) {
        te > 0 && (k = Math.min((J || 0) - (D[te - 1] || 0), k));
      }), Number.isFinite(k)) {
        var L = k / $, N = v.layout === "vertical" ? n.height : n.width;
        if (v.padding === "gap" && (O = L * N / 2), v.padding === "no-gap") {
          var F = lt(t.barCategoryGap, L * N), U = L * N / 2;
          O = U - F - (U - F) / N * F;
        }
      }
    }
    i === "xAxis" ? _ = [n.left + (b.left || 0) + (O || 0), n.left + n.width - (b.right || 0) - (O || 0)] : i === "yAxis" ? _ = c === "horizontal" ? [n.top + n.height - (b.bottom || 0), n.top + (b.top || 0)] : [n.top + (b.top || 0) + (O || 0), n.top + n.height - (b.bottom || 0) - (O || 0)] : _ = v.range, m && (_ = [_[1], _[0]]);
    var Y = kb(v, a, d), M = Y.scale, R = Y.realScaleType;
    M.domain(g).range(_), Nb(M);
    var W = Rb(M, Rt(Rt({}, v), {}, {
      realScaleType: R
    }));
    i === "xAxis" ? (j = p === "top" && !S || p === "bottom" && S, T = n.left, I = f[w] - j * v.height) : i === "yAxis" && (j = p === "left" && !S || p === "right" && S, T = f[w] - j * v.width, I = n.top);
    var q = Rt(Rt(Rt({}, v), W), {}, {
      realScaleType: R,
      x: T,
      y: I,
      scale: M,
      width: i === "xAxis" ? n.width : v.width,
      height: i === "yAxis" ? n.height : v.height
    });
    return q.bandSize = Zo(q, W), !v.hide && i === "xAxis" ? f[w] += (j ? -1 : 1) * q.height : v.hide || (f[w] += (j ? -1 : 1) * q.width), Rt(Rt({}, h), {}, cc({}, y, q));
  }, {});
}, m0 = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, bq = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return m0({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, g0 = /* @__PURE__ */ function() {
  function e(t) {
    vq(this, e), this.scale = t;
  }
  return yq(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.bandAware, a = n.position;
      if (r !== void 0) {
        if (a)
          switch (a) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var s = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + s;
            }
            default:
              return this.scale(r);
          }
        if (i) {
          var c = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + c;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), i = n[0], a = n[n.length - 1];
      return i <= a ? r >= i && r <= a : r >= a && r <= i;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]);
}();
cc(g0, "EPS", 1e-4);
var rd = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return Rt(Rt({}, n), {}, cc({}, i, g0.create(t[i])));
  }, {});
  return Rt(Rt({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, s = a.position;
      return LU(i, function(c, u) {
        return r[u].apply(c, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(i) {
      return d0(i, function(a, o) {
        return r[o].isInRange(a);
      });
    }
  });
};
function xq(e) {
  return (e % 180 + 180) % 180;
}
var wq = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = xq(i), o = a * Math.PI / 180, s = Math.atan(n / r), c = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(c);
}, Oq = Kt, Sq = Xa, _q = Fs;
function Pq(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Sq(t)) {
      var a = Oq(r);
      t = _q(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var Aq = Pq, Tq = c0;
function Eq(e) {
  var t = Tq(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var jq = Eq, $q = pg, Mq = Kt, Cq = jq, Iq = Math.max;
function kq(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : Cq(r);
  return i < 0 && (i = Iq(n + i, 0)), $q(e, Mq(t), i);
}
var Nq = kq, Rq = Aq, Dq = Nq, Lq = Rq(Dq), Bq = Lq;
const Fq = /* @__PURE__ */ Me(Bq);
var Wq = ES(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function ms(e) {
  "@babel/helpers - typeof";
  return ms = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ms(e);
}
var nd = /* @__PURE__ */ fn(void 0), id = /* @__PURE__ */ fn(void 0), b0 = /* @__PURE__ */ fn(void 0), x0 = /* @__PURE__ */ fn({}), w0 = /* @__PURE__ */ fn(void 0), O0 = /* @__PURE__ */ fn(0), S0 = /* @__PURE__ */ fn(0), Py = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, s = t.children, c = t.width, u = t.height, l = Wq(a);
  return /* @__PURE__ */ E.createElement(nd.Provider, {
    value: n
  }, /* @__PURE__ */ E.createElement(id.Provider, {
    value: i
  }, /* @__PURE__ */ E.createElement(x0.Provider, {
    value: a
  }, /* @__PURE__ */ E.createElement(b0.Provider, {
    value: l
  }, /* @__PURE__ */ E.createElement(w0.Provider, {
    value: o
  }, /* @__PURE__ */ E.createElement(O0.Provider, {
    value: u
  }, /* @__PURE__ */ E.createElement(S0.Provider, {
    value: c
  }, s)))))));
}, zq = function() {
  return fr(w0);
};
function _0(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var P0 = function(t) {
  var r = fr(nd);
  r == null && (process.env.NODE_ENV !== "production" ? vt(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : vt());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? vt(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(ms(t), "]. ").concat(_0(r))) : vt()), n;
}, Uq = function() {
  var t = fr(nd);
  return Sr(t);
}, qq = function() {
  var t = fr(id), r = Fq(t, function(n) {
    return d0(n.domain, Number.isFinite);
  });
  return r || Sr(t);
}, A0 = function(t) {
  var r = fr(id);
  r == null && (process.env.NODE_ENV !== "production" ? vt(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : vt());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? vt(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(ms(t), "]. ").concat(_0(r))) : vt()), n;
}, Gq = function() {
  var t = fr(b0);
  return t;
}, Yq = function() {
  return fr(x0);
}, ad = function() {
  return fr(S0);
}, od = function() {
  return fr(O0);
};
function oi(e) {
  "@babel/helpers - typeof";
  return oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oi(e);
}
function Hq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, E0(n.key), n);
  }
}
function Vq(e, t, r) {
  return t && Kq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Xq(e, t, r) {
  return t = gs(t), Qq(e, T0() ? Reflect.construct(t, r || [], gs(e).constructor) : t.apply(e, r));
}
function Qq(e, t) {
  if (t && (oi(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Jq(e);
}
function Jq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function T0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (T0 = function() {
    return !!e;
  })();
}
function gs(e) {
  return gs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gs(e);
}
function Zq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rl(e, t);
}
function Rl(e, t) {
  return Rl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Rl(e, t);
}
function Ay(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ty(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ay(Object(r), !0).forEach(function(n) {
      sd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ay(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sd(e, t, r) {
  return t = E0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E0(e) {
  var t = e4(e, "string");
  return oi(t) == "symbol" ? t : t + "";
}
function e4(e, t) {
  if (oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function t4(e, t) {
  return a4(e) || i4(e, t) || n4(e, t) || r4();
}
function r4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n4(e, t) {
  if (e) {
    if (typeof e == "string") return Ey(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ey(e, t);
  }
}
function Ey(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function i4(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function a4(e) {
  if (Array.isArray(e)) return e;
}
function Dl() {
  return Dl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dl.apply(this, arguments);
}
var o4 = function(t, r) {
  var n;
  return /* @__PURE__ */ E.isValidElement(t) ? n = /* @__PURE__ */ E.cloneElement(t, r) : ue(t) ? n = t(r) : n = /* @__PURE__ */ E.createElement("line", Dl({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, s4 = function(t, r, n, i, a, o, s, c, u) {
  var l = a.x, f = a.y, d = a.width, h = a.height;
  if (n) {
    var y = u.y, v = t.y.apply(y, {
      position: o
    });
    if (qt(u, "discard") && !t.y.isInRange(v))
      return null;
    var p = [{
      x: l + d,
      y: v
    }, {
      x: l,
      y: v
    }];
    return c === "left" ? p.reverse() : p;
  }
  if (r) {
    var g = u.x, x = t.x.apply(g, {
      position: o
    });
    if (qt(u, "discard") && !t.x.isInRange(x))
      return null;
    var b = [{
      x,
      y: f + h
    }, {
      x,
      y: f
    }];
    return s === "top" ? b.reverse() : b;
  }
  if (i) {
    var S = u.segment, m = S.map(function(w) {
      return t.apply(w, {
        position: o
      });
    });
    return qt(u, "discard") && $U(m, function(w) {
      return !t.isInRange(w);
    }) ? null : m;
  }
  return null;
};
function c4(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, o = e.shape, s = e.className, c = e.alwaysShow, u = zq(), l = P0(i), f = A0(a), d = Gq();
  if (!u || !d)
    return null;
  Bt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var h = rd({
    x: l.scale,
    y: f.scale
  }), y = Je(t), v = Je(r), p = n && n.length === 2, g = s4(h, y, v, p, d, e.position, l.orientation, f.orientation, e);
  if (!g)
    return null;
  var x = t4(g, 2), b = x[0], S = b.x, m = b.y, w = x[1], O = w.x, _ = w.y, T = qt(e, "hidden") ? "url(#".concat(u, ")") : void 0, I = Ty(Ty({
    clipPath: T
  }, se(e, !0)), {}, {
    x1: S,
    y1: m,
    x2: O,
    y2: _
  });
  return /* @__PURE__ */ E.createElement(je, {
    className: fe("recharts-reference-line", s)
  }, o4(o, I), tt.renderCallByParent(e, bq({
    x1: S,
    y1: m,
    x2: O,
    y2: _
  })));
}
var cd = /* @__PURE__ */ function(e) {
  function t() {
    return Hq(this, t), Xq(this, t, arguments);
  }
  return Zq(t, e), Vq(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ E.createElement(c4, this.props);
    }
  }]);
}(E.Component);
sd(cd, "displayName", "ReferenceLine");
sd(cd, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function Ll() {
  return Ll = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ll.apply(this, arguments);
}
function si(e) {
  "@babel/helpers - typeof";
  return si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, si(e);
}
function jy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jy(Object(r), !0).forEach(function(n) {
      uc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function l4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $0(n.key), n);
  }
}
function f4(e, t, r) {
  return t && l4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function d4(e, t, r) {
  return t = bs(t), h4(e, j0() ? Reflect.construct(t, r || [], bs(e).constructor) : t.apply(e, r));
}
function h4(e, t) {
  if (t && (si(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return p4(e);
}
function p4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function j0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (j0 = function() {
    return !!e;
  })();
}
function bs(e) {
  return bs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bs(e);
}
function v4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bl(e, t);
}
function Bl(e, t) {
  return Bl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bl(e, t);
}
function uc(e, t, r) {
  return t = $0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $0(e) {
  var t = y4(e, "string");
  return si(t) == "symbol" ? t : t + "";
}
function y4(e, t) {
  if (si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var m4 = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = rd({
    x: i.scale,
    y: a.scale
  }), s = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return qt(t, "discard") && !o.isInRange(s) ? null : s;
}, lc = /* @__PURE__ */ function(e) {
  function t() {
    return u4(this, t), d4(this, t, arguments);
  }
  return v4(t, e), f4(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.r, s = n.alwaysShow, c = n.clipPathId, u = Je(i), l = Je(a);
      if (Bt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !u || !l)
        return null;
      var f = m4(this.props);
      if (!f)
        return null;
      var d = f.x, h = f.y, y = this.props, v = y.shape, p = y.className, g = qt(this.props, "hidden") ? "url(#".concat(c, ")") : void 0, x = $y($y({
        clipPath: g
      }, se(this.props, !0)), {}, {
        cx: d,
        cy: h
      });
      return /* @__PURE__ */ E.createElement(je, {
        className: fe("recharts-reference-dot", p)
      }, t.renderDot(v, x), tt.renderCallByParent(this.props, {
        x: d - o,
        y: h - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
}(E.Component);
uc(lc, "displayName", "ReferenceDot");
uc(lc, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
uc(lc, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ E.isValidElement(e) ? r = /* @__PURE__ */ E.cloneElement(e, t) : ue(e) ? r = e(t) : r = /* @__PURE__ */ E.createElement(td, Ll({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function Fl() {
  return Fl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fl.apply(this, arguments);
}
function ci(e) {
  "@babel/helpers - typeof";
  return ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ci(e);
}
function My(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? My(Object(r), !0).forEach(function(n) {
      fc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : My(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function b4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, C0(n.key), n);
  }
}
function x4(e, t, r) {
  return t && b4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function w4(e, t, r) {
  return t = xs(t), O4(e, M0() ? Reflect.construct(t, r || [], xs(e).constructor) : t.apply(e, r));
}
function O4(e, t) {
  if (t && (ci(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return S4(e);
}
function S4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function M0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (M0 = function() {
    return !!e;
  })();
}
function xs(e) {
  return xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xs(e);
}
function _4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Wl(e, t);
}
function Wl(e, t) {
  return Wl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Wl(e, t);
}
function fc(e, t, r) {
  return t = C0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function C0(e) {
  var t = P4(e, "string");
  return ci(t) == "symbol" ? t : t + "";
}
function P4(e, t) {
  if (ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var A4 = function(t, r, n, i, a) {
  var o = a.x1, s = a.x2, c = a.y1, u = a.y2, l = a.xAxis, f = a.yAxis;
  if (!l || !f) return null;
  var d = rd({
    x: l.scale,
    y: f.scale
  }), h = {
    x: t ? d.x.apply(o, {
      position: "start"
    }) : d.x.rangeMin,
    y: n ? d.y.apply(c, {
      position: "start"
    }) : d.y.rangeMin
  }, y = {
    x: r ? d.x.apply(s, {
      position: "end"
    }) : d.x.rangeMax,
    y: i ? d.y.apply(u, {
      position: "end"
    }) : d.y.rangeMax
  };
  return qt(a, "discard") && (!d.isInRange(h) || !d.isInRange(y)) ? null : m0(h, y);
}, dc = /* @__PURE__ */ function(e) {
  function t() {
    return g4(this, t), w4(this, t, arguments);
  }
  return _4(t, e), x4(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x1, a = n.x2, o = n.y1, s = n.y2, c = n.className, u = n.alwaysShow, l = n.clipPathId;
      Bt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = Je(i), d = Je(a), h = Je(o), y = Je(s), v = this.props.shape;
      if (!f && !d && !h && !y && !v)
        return null;
      var p = A4(f, d, h, y, this.props);
      if (!p && !v)
        return null;
      var g = qt(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
      return /* @__PURE__ */ E.createElement(je, {
        className: fe("recharts-reference-area", c)
      }, t.renderRect(v, Cy(Cy({
        clipPath: g
      }, se(this.props, !0)), p)), tt.renderCallByParent(this.props, p));
    }
  }]);
}(E.Component);
fc(dc, "displayName", "ReferenceArea");
fc(dc, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
fc(dc, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ E.isValidElement(e) ? r = /* @__PURE__ */ E.cloneElement(e, t) : ue(e) ? r = e(t) : r = /* @__PURE__ */ E.createElement(ed, Fl({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function I0(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function T4(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return wq(n, r);
}
function E4(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, o = e.width, s = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + s
  } : {
    start: n ? i + o : a + s,
    end: n ? i : a
  };
}
function ws(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function j4(e, t) {
  return I0(e, t + 1);
}
function $4(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, s = t.end, c = 0, u = 1, l = o, f = function() {
    var y = n == null ? void 0 : n[c];
    if (y === void 0)
      return {
        v: I0(n, u)
      };
    var v = c, p, g = function() {
      return p === void 0 && (p = r(y, v)), p;
    }, x = y.coordinate, b = c === 0 || ws(e, x, g, l, s);
    b || (c = 0, l = o, u += 1), b && (l = x + e * (g() / 2 + i), c += u);
  }, d; u <= a.length; )
    if (d = f(), d) return d.v;
  return [];
}
function La(e) {
  "@babel/helpers - typeof";
  return La = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, La(e);
}
function Iy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Iy(Object(r), !0).forEach(function(n) {
      M4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function M4(e, t, r) {
  return t = C4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function C4(e) {
  var t = I4(e, "string");
  return La(t) == "symbol" ? t : t + "";
}
function I4(e, t) {
  if (La(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (La(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function k4(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, s = t.start, c = t.end, u = function(d) {
    var h = a[d], y, v = function() {
      return y === void 0 && (y = r(h, d)), y;
    };
    if (d === o - 1) {
      var p = e * (h.coordinate + e * v() / 2 - c);
      a[d] = h = it(it({}, h), {}, {
        tickCoord: p > 0 ? h.coordinate - p * e : h.coordinate
      });
    } else
      a[d] = h = it(it({}, h), {}, {
        tickCoord: h.coordinate
      });
    var g = ws(e, h.tickCoord, v, s, c);
    g && (c = h.tickCoord - e * (v() / 2 + i), a[d] = it(it({}, h), {}, {
      isShow: !0
    }));
  }, l = o - 1; l >= 0; l--)
    u(l);
  return a;
}
function N4(e, t, r, n, i, a) {
  var o = (n || []).slice(), s = o.length, c = t.start, u = t.end;
  if (a) {
    var l = n[s - 1], f = r(l, s - 1), d = e * (l.coordinate + e * f / 2 - u);
    o[s - 1] = l = it(it({}, l), {}, {
      tickCoord: d > 0 ? l.coordinate - d * e : l.coordinate
    });
    var h = ws(e, l.tickCoord, function() {
      return f;
    }, c, u);
    h && (u = l.tickCoord - e * (f / 2 + i), o[s - 1] = it(it({}, l), {}, {
      isShow: !0
    }));
  }
  for (var y = a ? s - 1 : s, v = function(x) {
    var b = o[x], S, m = function() {
      return S === void 0 && (S = r(b, x)), S;
    };
    if (x === 0) {
      var w = e * (b.coordinate - e * m() / 2 - c);
      o[x] = b = it(it({}, b), {}, {
        tickCoord: w < 0 ? b.coordinate - w * e : b.coordinate
      });
    } else
      o[x] = b = it(it({}, b), {}, {
        tickCoord: b.coordinate
      });
    var O = ws(e, b.tickCoord, m, c, u);
    O && (c = b.tickCoord + e * (m() / 2 + i), o[x] = it(it({}, b), {}, {
      isShow: !0
    }));
  }, p = 0; p < y; p++)
    v(p);
  return o;
}
function ud(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, o = e.minTickGap, s = e.orientation, c = e.interval, u = e.tickFormatter, l = e.unit, f = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (X(c) || ir.isSsr)
    return j4(i, typeof c == "number" && X(c) ? c : 0);
  var d = [], h = s === "top" || s === "bottom" ? "width" : "height", y = l && h === "width" ? Qi(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, v = function(b, S) {
    var m = ue(u) ? u(b.value, S) : b.value;
    return h === "width" ? T4(Qi(m, {
      fontSize: t,
      letterSpacing: r
    }), y, f) : Qi(m, {
      fontSize: t,
      letterSpacing: r
    })[h];
  }, p = i.length >= 2 ? ut(i[1].coordinate - i[0].coordinate) : 1, g = E4(a, p, h);
  return c === "equidistantPreserveStart" ? $4(p, g, v, i, o) : (c === "preserveStart" || c === "preserveStartEnd" ? d = N4(p, g, v, i, o, c === "preserveStartEnd") : d = k4(p, g, v, i, o), d.filter(function(x) {
    return x.isShow;
  }));
}
var R4 = ["viewBox"], D4 = ["viewBox"], L4 = ["ticks"];
function ui(e) {
  "@babel/helpers - typeof";
  return ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ui(e);
}
function jn() {
  return jn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jn.apply(this, arguments);
}
function ky(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ky(Object(r), !0).forEach(function(n) {
      ld(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ky(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tu(e, t) {
  if (e == null) return {};
  var r = B4(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function B4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function F4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ny(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, N0(n.key), n);
  }
}
function W4(e, t, r) {
  return t && Ny(e.prototype, t), r && Ny(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function z4(e, t, r) {
  return t = Os(t), U4(e, k0() ? Reflect.construct(t, r || [], Os(e).constructor) : t.apply(e, r));
}
function U4(e, t) {
  if (t && (ui(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return q4(e);
}
function q4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function k0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (k0 = function() {
    return !!e;
  })();
}
function Os(e) {
  return Os = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Os(e);
}
function G4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zl(e, t);
}
function zl(e, t) {
  return zl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zl(e, t);
}
function ld(e, t, r) {
  return t = N0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function N0(e) {
  var t = Y4(e, "string");
  return ui(t) == "symbol" ? t : t + "";
}
function Y4(e, t) {
  if (ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pi = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return F4(this, t), n = z4(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return G4(t, e), W4(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, o = tu(n, R4), s = this.props, c = s.viewBox, u = tu(s, D4);
      return !Mn(a, c) || !Mn(o, u) || !Mn(i, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var n = this.layerReference;
      if (n) {
        var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        i && this.setState({
          fontSize: window.getComputedStyle(i).fontSize,
          letterSpacing: window.getComputedStyle(i).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function(n) {
      var i = this.props, a = i.x, o = i.y, s = i.width, c = i.height, u = i.orientation, l = i.tickSize, f = i.mirror, d = i.tickMargin, h, y, v, p, g, x, b = f ? -1 : 1, S = n.tickSize || l, m = X(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (u) {
        case "top":
          h = y = n.coordinate, p = o + +!f * c, v = p - b * S, x = v - b * d, g = m;
          break;
        case "left":
          v = p = n.coordinate, y = a + +!f * s, h = y - b * S, g = h - b * d, x = m;
          break;
        case "right":
          v = p = n.coordinate, y = a + +f * s, h = y + b * S, g = h + b * d, x = m;
          break;
        default:
          h = y = n.coordinate, p = o + +f * c, v = p + b * S, x = v + b * d, g = m;
          break;
      }
      return {
        line: {
          x1: h,
          y1: v,
          x2: y,
          y2: p
        },
        tick: {
          x: g,
          y: x
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, o;
      switch (i) {
        case "left":
          o = a ? "start" : "end";
          break;
        case "right":
          o = a ? "end" : "start";
          break;
        default:
          o = "middle";
          break;
      }
      return o;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, o = "end";
      switch (i) {
        case "left":
        case "right":
          o = "middle";
          break;
        case "top":
          o = a ? "start" : "end";
          break;
        default:
          o = a ? "end" : "start";
          break;
      }
      return o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, s = n.height, c = n.orientation, u = n.mirror, l = n.axisLine, f = Ve(Ve(Ve({}, se(this.props, !1)), se(l, !1)), {}, {
        fill: "none"
      });
      if (c === "top" || c === "bottom") {
        var d = +(c === "top" && !u || c === "bottom" && u);
        f = Ve(Ve({}, f), {}, {
          x1: i,
          y1: a + d * s,
          x2: i + o,
          y2: a + d * s
        });
      } else {
        var h = +(c === "left" && !u || c === "right" && u);
        f = Ve(Ve({}, f), {}, {
          x1: i + h * o,
          y1: a,
          x2: i + h * o,
          y2: a + s
        });
      }
      return /* @__PURE__ */ E.createElement("line", jn({}, f, {
        className: fe("recharts-cartesian-axis-line", wt(l, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function(n, i, a) {
        var o = this, s = this.props, c = s.tickLine, u = s.stroke, l = s.tick, f = s.tickFormatter, d = s.unit, h = ud(Ve(Ve({}, this.props), {}, {
          ticks: n
        }), i, a), y = this.getTickTextAnchor(), v = this.getTickVerticalAnchor(), p = se(this.props, !1), g = se(l, !1), x = Ve(Ve({}, p), {}, {
          fill: "none"
        }, se(c, !1)), b = h.map(function(S, m) {
          var w = o.getTickLineCoord(S), O = w.line, _ = w.tick, T = Ve(Ve(Ve(Ve({
            textAnchor: y,
            verticalAnchor: v
          }, p), {}, {
            stroke: "none",
            fill: u
          }, g), _), {}, {
            index: m,
            payload: S,
            visibleTicksCount: h.length,
            tickFormatter: f
          });
          return /* @__PURE__ */ E.createElement(je, jn({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(S.value, "-").concat(S.coordinate, "-").concat(S.tickCoord)
          }, on(o.props, S, m)), c && /* @__PURE__ */ E.createElement("line", jn({}, x, O, {
            className: fe("recharts-cartesian-axis-tick-line", wt(c, "className"))
          })), l && t.renderTickItem(l, T, "".concat(ue(f) ? f(S.value, m) : S.value).concat(d || "")));
        });
        return /* @__PURE__ */ E.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, b);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.axisLine, o = i.width, s = i.height, c = i.ticksGenerator, u = i.className, l = i.hide;
      if (l)
        return null;
      var f = this.props, d = f.ticks, h = tu(f, L4), y = d;
      return ue(c) && (y = d && d.length > 0 ? c(this.props) : c(h)), o <= 0 || s <= 0 || !y || !y.length ? null : /* @__PURE__ */ E.createElement(je, {
        className: fe("recharts-cartesian-axis", u),
        ref: function(p) {
          n.layerReference = p;
        }
      }, a && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), tt.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o, s = fe(i.className, "recharts-cartesian-axis-tick-value");
      return /* @__PURE__ */ E.isValidElement(n) ? o = /* @__PURE__ */ E.cloneElement(n, Ve(Ve({}, i), {}, {
        className: s
      })) : ue(n) ? o = n(Ve(Ve({}, i), {}, {
        className: s
      })) : o = /* @__PURE__ */ E.createElement(sn, jn({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), o;
    }
  }]);
}(um);
ld(Pi, "displayName", "CartesianAxis");
ld(Pi, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var H4 = ["x1", "y1", "x2", "y2", "key"], K4 = ["offset"];
function un(e) {
  "@babel/helpers - typeof";
  return un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, un(e);
}
function Ry(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ry(Object(r), !0).forEach(function(n) {
      V4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ry(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function V4(e, t, r) {
  return t = X4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X4(e) {
  var t = Q4(e, "string");
  return un(t) == "symbol" ? t : t + "";
}
function Q4(e, t) {
  if (un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xr() {
  return Xr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xr.apply(this, arguments);
}
function Dy(e, t) {
  if (e == null) return {};
  var r = J4(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function J4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Z4 = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, s = t.height, c = t.ry;
  return /* @__PURE__ */ E.createElement("rect", {
    x: i,
    y: a,
    ry: c,
    width: o,
    height: s,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function R0(e, t) {
  var r;
  if (/* @__PURE__ */ E.isValidElement(e))
    r = /* @__PURE__ */ E.cloneElement(e, t);
  else if (ue(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, s = t.key, c = Dy(t, H4), u = se(c, !1);
    u.offset;
    var l = Dy(u, K4);
    r = /* @__PURE__ */ E.createElement("line", Xr({}, l, {
      x1: n,
      y1: i,
      x2: a,
      y2: o,
      fill: "none",
      key: s
    }));
  }
  return r;
}
function e5(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(s, c) {
    var u = at(at({}, e), {}, {
      x1: t,
      y1: s,
      x2: t + r,
      y2: s,
      key: "line-".concat(c),
      index: c
    });
    return R0(i, u);
  });
  return /* @__PURE__ */ E.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function t5(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(s, c) {
    var u = at(at({}, e), {}, {
      x1: s,
      y1: t,
      x2: s,
      y2: t + r,
      key: "line-".concat(c),
      index: c
    });
    return R0(i, u);
  });
  return /* @__PURE__ */ E.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function r5(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, o = e.height, s = e.horizontalPoints, c = e.horizontal, u = c === void 0 ? !0 : c;
  if (!u || !t || !t.length)
    return null;
  var l = s.map(function(d) {
    return Math.round(d + i - i);
  }).sort(function(d, h) {
    return d - h;
  });
  i !== l[0] && l.unshift(0);
  var f = l.map(function(d, h) {
    var y = !l[h + 1], v = y ? i + o - d : l[h + 1] - d;
    if (v <= 0)
      return null;
    var p = h % t.length;
    return /* @__PURE__ */ E.createElement("rect", {
      key: "react-".concat(h),
      y: d,
      x: n,
      height: v,
      width: a,
      stroke: "none",
      fill: t[p],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ E.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, f);
}
function n5(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, o = e.y, s = e.width, c = e.height, u = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var l = u.map(function(d) {
    return Math.round(d + a - a);
  }).sort(function(d, h) {
    return d - h;
  });
  a !== l[0] && l.unshift(0);
  var f = l.map(function(d, h) {
    var y = !l[h + 1], v = y ? a + s - d : l[h + 1] - d;
    if (v <= 0)
      return null;
    var p = h % n.length;
    return /* @__PURE__ */ E.createElement("rect", {
      key: "react-".concat(h),
      x: d,
      y: o,
      width: v,
      height: c,
      stroke: "none",
      fill: n[p],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ E.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, f);
}
var i5 = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return Ib(ud(at(at(at({}, Pi.defaultProps), n), {}, {
    ticks: rr(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.left, o.left + o.width, r);
}, a5 = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return Ib(ud(at(at(at({}, Pi.defaultProps), n), {}, {
    ticks: rr(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.top, o.top + o.height, r);
}, Sn = {
  horizontal: !0,
  vertical: !0,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function D0(e) {
  var t, r, n, i, a, o, s = ad(), c = od(), u = Yq(), l = at(at({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : Sn.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : Sn.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : Sn.horizontal,
    horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : Sn.horizontalFill,
    vertical: (a = e.vertical) !== null && a !== void 0 ? a : Sn.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : Sn.verticalFill,
    x: X(e.x) ? e.x : u.left,
    y: X(e.y) ? e.y : u.top,
    width: X(e.width) ? e.width : u.width,
    height: X(e.height) ? e.height : u.height
  }), f = l.x, d = l.y, h = l.width, y = l.height, v = l.syncWithTicks, p = l.horizontalValues, g = l.verticalValues, x = Uq(), b = qq();
  if (!X(h) || h <= 0 || !X(y) || y <= 0 || !X(f) || f !== +f || !X(d) || d !== +d)
    return null;
  var S = l.verticalCoordinatesGenerator || i5, m = l.horizontalCoordinatesGenerator || a5, w = l.horizontalPoints, O = l.verticalPoints;
  if ((!w || !w.length) && ue(m)) {
    var _ = p && p.length, T = m({
      yAxis: b ? at(at({}, b), {}, {
        ticks: _ ? p : b.ticks
      }) : void 0,
      width: s,
      height: c,
      offset: u
    }, _ ? !0 : v);
    Bt(Array.isArray(T), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(un(T), "]")), Array.isArray(T) && (w = T);
  }
  if ((!O || !O.length) && ue(S)) {
    var I = g && g.length, j = S({
      xAxis: x ? at(at({}, x), {}, {
        ticks: I ? g : x.ticks
      }) : void 0,
      width: s,
      height: c,
      offset: u
    }, I ? !0 : v);
    Bt(Array.isArray(j), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(un(j), "]")), Array.isArray(j) && (O = j);
  }
  return /* @__PURE__ */ E.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ E.createElement(Z4, {
    fill: l.fill,
    fillOpacity: l.fillOpacity,
    x: l.x,
    y: l.y,
    width: l.width,
    height: l.height,
    ry: l.ry
  }), /* @__PURE__ */ E.createElement(e5, Xr({}, l, {
    offset: u,
    horizontalPoints: w,
    xAxis: x,
    yAxis: b
  })), /* @__PURE__ */ E.createElement(t5, Xr({}, l, {
    offset: u,
    verticalPoints: O,
    xAxis: x,
    yAxis: b
  })), /* @__PURE__ */ E.createElement(r5, Xr({}, l, {
    horizontalPoints: w
  })), /* @__PURE__ */ E.createElement(n5, Xr({}, l, {
    verticalPoints: O
  })));
}
D0.displayName = "CartesianGrid";
function li(e) {
  "@babel/helpers - typeof";
  return li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, li(e);
}
function o5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function s5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, F0(n.key), n);
  }
}
function c5(e, t, r) {
  return t && s5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function u5(e, t, r) {
  return t = Ss(t), l5(e, L0() ? Reflect.construct(t, r || [], Ss(e).constructor) : t.apply(e, r));
}
function l5(e, t) {
  if (t && (li(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return f5(e);
}
function f5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function L0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (L0 = function() {
    return !!e;
  })();
}
function Ss(e) {
  return Ss = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ss(e);
}
function d5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ul(e, t);
}
function Ul(e, t) {
  return Ul = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ul(e, t);
}
function B0(e, t, r) {
  return t = F0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function F0(e) {
  var t = h5(e, "string");
  return li(t) == "symbol" ? t : t + "";
}
function h5(e, t) {
  if (li(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (li(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ql() {
  return ql = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ql.apply(this, arguments);
}
function p5(e) {
  var t = e.xAxisId, r = ad(), n = od(), i = P0(t);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ V.createElement(Pi, ql({}, i, {
      className: fe("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(o) {
        return rr(o, !0);
      }
    }))
  );
}
var hc = /* @__PURE__ */ function(e) {
  function t() {
    return o5(this, t), u5(this, t, arguments);
  }
  return d5(t, e), c5(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ V.createElement(p5, this.props);
    }
  }]);
}(V.Component);
B0(hc, "displayName", "XAxis");
B0(hc, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0
});
function fi(e) {
  "@babel/helpers - typeof";
  return fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fi(e);
}
function v5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function y5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, U0(n.key), n);
  }
}
function m5(e, t, r) {
  return t && y5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function g5(e, t, r) {
  return t = _s(t), b5(e, W0() ? Reflect.construct(t, r || [], _s(e).constructor) : t.apply(e, r));
}
function b5(e, t) {
  if (t && (fi(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return x5(e);
}
function x5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function W0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (W0 = function() {
    return !!e;
  })();
}
function _s(e) {
  return _s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _s(e);
}
function w5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gl(e, t);
}
function Gl(e, t) {
  return Gl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Gl(e, t);
}
function z0(e, t, r) {
  return t = U0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function U0(e) {
  var t = O5(e, "string");
  return fi(t) == "symbol" ? t : t + "";
}
function O5(e, t) {
  if (fi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Yl() {
  return Yl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yl.apply(this, arguments);
}
var S5 = function(t) {
  var r = t.yAxisId, n = ad(), i = od(), a = A0(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ V.createElement(Pi, Yl({}, a, {
      className: fe("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(s) {
        return rr(s, !0);
      }
    }))
  );
}, pc = /* @__PURE__ */ function(e) {
  function t() {
    return v5(this, t), g5(this, t, arguments);
  }
  return w5(t, e), m5(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ V.createElement(S5, this.props);
    }
  }]);
}(V.Component);
z0(pc, "displayName", "YAxis");
z0(pc, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1
});
function Ly(e) {
  return T5(e) || A5(e) || P5(e) || _5();
}
function _5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P5(e, t) {
  if (e) {
    if (typeof e == "string") return Hl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hl(e, t);
  }
}
function A5(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function T5(e) {
  if (Array.isArray(e)) return Hl(e);
}
function Hl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Kl = function(t, r, n, i, a) {
  var o = Et(t, cd), s = Et(t, lc), c = [].concat(Ly(o), Ly(s)), u = Et(t, dc), l = "".concat(i, "Id"), f = i[0], d = r;
  if (c.length && (d = c.reduce(function(v, p) {
    if (p.props[l] === n && qt(p.props, "extendDomain") && X(p.props[f])) {
      var g = p.props[f];
      return [Math.min(v[0], g), Math.max(v[1], g)];
    }
    return v;
  }, d)), u.length) {
    var h = "".concat(f, "1"), y = "".concat(f, "2");
    d = u.reduce(function(v, p) {
      if (p.props[l] === n && qt(p.props, "extendDomain") && X(p.props[h]) && X(p.props[y])) {
        var g = p.props[h], x = p.props[y];
        return [Math.min(v[0], g, x), Math.max(v[1], g, x)];
      }
      return v;
    }, d);
  }
  return a && a.length && (d = a.reduce(function(v, p) {
    return X(p) ? [Math.min(v[0], p), Math.max(v[1], p)] : v;
  }, d)), d;
}, q0 = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function i(c, u, l) {
    this.fn = c, this.context = u, this.once = l || !1;
  }
  function a(c, u, l, f, d) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var h = new i(l, f || c, d), y = r ? r + u : u;
    return c._events[y] ? c._events[y].fn ? c._events[y] = [c._events[y], h] : c._events[y].push(h) : (c._events[y] = h, c._eventsCount++), c;
  }
  function o(c, u) {
    --c._eventsCount === 0 ? c._events = new n() : delete c._events[u];
  }
  function s() {
    this._events = new n(), this._eventsCount = 0;
  }
  s.prototype.eventNames = function() {
    var u = [], l, f;
    if (this._eventsCount === 0) return u;
    for (f in l = this._events)
      t.call(l, f) && u.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(l)) : u;
  }, s.prototype.listeners = function(u) {
    var l = r ? r + u : u, f = this._events[l];
    if (!f) return [];
    if (f.fn) return [f.fn];
    for (var d = 0, h = f.length, y = new Array(h); d < h; d++)
      y[d] = f[d].fn;
    return y;
  }, s.prototype.listenerCount = function(u) {
    var l = r ? r + u : u, f = this._events[l];
    return f ? f.fn ? 1 : f.length : 0;
  }, s.prototype.emit = function(u, l, f, d, h, y) {
    var v = r ? r + u : u;
    if (!this._events[v]) return !1;
    var p = this._events[v], g = arguments.length, x, b;
    if (p.fn) {
      switch (p.once && this.removeListener(u, p.fn, void 0, !0), g) {
        case 1:
          return p.fn.call(p.context), !0;
        case 2:
          return p.fn.call(p.context, l), !0;
        case 3:
          return p.fn.call(p.context, l, f), !0;
        case 4:
          return p.fn.call(p.context, l, f, d), !0;
        case 5:
          return p.fn.call(p.context, l, f, d, h), !0;
        case 6:
          return p.fn.call(p.context, l, f, d, h, y), !0;
      }
      for (b = 1, x = new Array(g - 1); b < g; b++)
        x[b - 1] = arguments[b];
      p.fn.apply(p.context, x);
    } else {
      var S = p.length, m;
      for (b = 0; b < S; b++)
        switch (p[b].once && this.removeListener(u, p[b].fn, void 0, !0), g) {
          case 1:
            p[b].fn.call(p[b].context);
            break;
          case 2:
            p[b].fn.call(p[b].context, l);
            break;
          case 3:
            p[b].fn.call(p[b].context, l, f);
            break;
          case 4:
            p[b].fn.call(p[b].context, l, f, d);
            break;
          default:
            if (!x) for (m = 1, x = new Array(g - 1); m < g; m++)
              x[m - 1] = arguments[m];
            p[b].fn.apply(p[b].context, x);
        }
    }
    return !0;
  }, s.prototype.on = function(u, l, f) {
    return a(this, u, l, f, !1);
  }, s.prototype.once = function(u, l, f) {
    return a(this, u, l, f, !0);
  }, s.prototype.removeListener = function(u, l, f, d) {
    var h = r ? r + u : u;
    if (!this._events[h]) return this;
    if (!l)
      return o(this, h), this;
    var y = this._events[h];
    if (y.fn)
      y.fn === l && (!d || y.once) && (!f || y.context === f) && o(this, h);
    else {
      for (var v = 0, p = [], g = y.length; v < g; v++)
        (y[v].fn !== l || d && !y[v].once || f && y[v].context !== f) && p.push(y[v]);
      p.length ? this._events[h] = p.length === 1 ? p[0] : p : o(this, h);
    }
    return this;
  }, s.prototype.removeAllListeners = function(u) {
    var l;
    return u ? (l = r ? r + u : u, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
})(q0);
var E5 = q0.exports;
const j5 = /* @__PURE__ */ Me(E5);
var ru = new j5(), nu = "recharts.syncMouseEvents";
function Ba(e) {
  "@babel/helpers - typeof";
  return Ba = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ba(e);
}
function $5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function M5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, G0(n.key), n);
  }
}
function C5(e, t, r) {
  return t && M5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function iu(e, t, r) {
  return t = G0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function G0(e) {
  var t = I5(e, "string");
  return Ba(t) == "symbol" ? t : t + "";
}
function I5(e, t) {
  if (Ba(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ba(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var k5 = /* @__PURE__ */ function() {
  function e() {
    $5(this, e), iu(this, "activeIndex", 0), iu(this, "coordinateList", []), iu(this, "layout", "horizontal");
  }
  return C5(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, s = o === void 0 ? null : o, c = r.layout, u = c === void 0 ? null : c, l = r.offset, f = l === void 0 ? null : l, d = r.mouseHandlerCallback, h = d === void 0 ? null : d;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = s ?? this.container, this.layout = u ?? this.layout, this.offset = f ?? this.offset, this.mouseHandlerCallback = h ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var i = this.container.getBoundingClientRect(), a = i.x, o = i.y, s = i.height, c = this.coordinateList[this.activeIndex].coordinate, u = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, l = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, f = a + c + u, d = o + this.offset.top + s / 2 + l;
        this.mouseHandlerCallback({
          pageX: f,
          pageY: d
        });
      }
    }
  }]);
}();
function N5(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], i = e == null ? void 0 : e[1];
    if (n && i && X(n) && X(i))
      return !0;
  }
  return !1;
}
function R5(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function Y0(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, o = Re(t, r, n, i), s = Re(t, r, n, a);
  return {
    points: [o, s],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function D5(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var s = t.cx, c = t.cy, u = t.innerRadius, l = t.outerRadius, f = t.angle, d = Re(s, c, u, f), h = Re(s, c, l, f);
      n = d.x, i = d.y, a = h.x, o = h.y;
    } else
      return Y0(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: o
  }];
}
function Fa(e) {
  "@babel/helpers - typeof";
  return Fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fa(e);
}
function By(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? By(Object(r), !0).forEach(function(n) {
      L5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : By(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function L5(e, t, r) {
  return t = B5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function B5(e) {
  var t = F5(e, "string");
  return Fa(t) == "symbol" ? t : t + "";
}
function F5(e, t) {
  if (Fa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function W5(e) {
  var t, r, n = e.element, i = e.tooltipEventType, a = e.isActive, o = e.activeCoordinate, s = e.activePayload, c = e.offset, u = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName, h = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !h || !a || !o || d !== "ScatterChart" && i !== "axis")
    return null;
  var y, v = yl;
  if (d === "ScatterChart")
    y = o, v = g3;
  else if (d === "BarChart")
    y = R5(f, o, c, l), v = ed;
  else if (f === "radial") {
    var p = Y0(o), g = p.cx, x = p.cy, b = p.radius, S = p.startAngle, m = p.endAngle;
    y = {
      cx: g,
      cy: x,
      startAngle: S,
      endAngle: m,
      innerRadius: b,
      outerRadius: b
    }, v = qb;
  } else
    y = {
      points: D5(f, o, c)
    }, v = yl;
  var w = mo(mo(mo(mo({
    stroke: "#ccc",
    pointerEvents: "none"
  }, c), y), se(h, !1)), {}, {
    payload: s,
    payloadIndex: u,
    className: fe("recharts-tooltip-cursor", h.className)
  });
  return /* @__PURE__ */ Lt(h) ? /* @__PURE__ */ Qe(h, w) : /* @__PURE__ */ na(v, w);
}
var z5 = ["item"], U5 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function di(e) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, di(e);
}
function $n() {
  return $n = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $n.apply(this, arguments);
}
function Fy(e, t) {
  return Y5(e) || G5(e, t) || K0(e, t) || q5();
}
function q5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G5(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (l) {
      u = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function Y5(e) {
  if (Array.isArray(e)) return e;
}
function Wy(e, t) {
  if (e == null) return {};
  var r = H5(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function H5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function K5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function V5(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, V0(n.key), n);
  }
}
function X5(e, t, r) {
  return t && V5(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Q5(e, t, r) {
  return t = Ps(t), J5(e, H0() ? Reflect.construct(t, r || [], Ps(e).constructor) : t.apply(e, r));
}
function J5(e, t) {
  if (t && (di(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Z5(e);
}
function Z5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function H0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (H0 = function() {
    return !!e;
  })();
}
function Ps(e) {
  return Ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ps(e);
}
function e8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Vl(e, t);
}
function Vl(e, t) {
  return Vl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Vl(e, t);
}
function hi(e) {
  return n8(e) || r8(e) || K0(e) || t8();
}
function t8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K0(e, t) {
  if (e) {
    if (typeof e == "string") return Xl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xl(e, t);
  }
}
function r8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function n8(e) {
  if (Array.isArray(e)) return Xl(e);
}
function Xl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zy(Object(r), !0).forEach(function(n) {
      oe(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oe(e, t, r) {
  return t = V0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V0(e) {
  var t = i8(e, "string");
  return di(t) == "symbol" ? t : t + "";
}
function i8(e, t) {
  if (di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var a8 = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, o8 = {
  width: "100%",
  height: "100%"
}, X0 = {
  x: 0,
  y: 0
};
function go(e) {
  return e;
}
var s8 = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, c8 = function(t, r, n, i) {
  var a = r.find(function(l) {
    return l && l.index === n;
  });
  if (a) {
    if (t === "horizontal")
      return {
        x: a.coordinate,
        y: i.y
      };
    if (t === "vertical")
      return {
        x: i.x,
        y: a.coordinate
      };
    if (t === "centric") {
      var o = a.coordinate, s = i.radius;
      return B(B(B({}, i), Re(i.cx, i.cy, s, o)), {}, {
        angle: o,
        radius: s
      });
    }
    var c = a.coordinate, u = i.angle;
    return B(B(B({}, i), Re(i.cx, i.cy, c, u)), {}, {
      angle: u,
      radius: c
    });
  }
  return X0;
}, vc = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(s, c) {
    var u = c.props.data;
    return u && u.length ? [].concat(hi(s), hi(u)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && X(i) && X(a) ? t.slice(i, a + 1) : [];
};
function Q0(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Ql = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, s = vc(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(c, u) {
    var l, f = (l = u.props.data) !== null && l !== void 0 ? l : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var h = f === void 0 ? s : f;
      d = _u(h, o.dataKey, i);
    } else
      d = f && f[n] || s[n];
    return d ? [].concat(hi(c), [Lb(u, d)]) : c;
  }, []);
}, Uy = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = s8(a, n), s = t.orderedTooltipTicks, c = t.tooltipAxis, u = t.tooltipTicks, l = DL(o, s, u, c);
  if (l >= 0 && u) {
    var f = u[l] && u[l].value, d = Ql(t, r, l, f), h = c8(n, s, l, a);
    return {
      activeTooltipIndex: l,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: h
    };
  }
  return null;
}, u8 = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.layout, f = t.children, d = t.stackOffset, h = Cb(l, a);
  return n.reduce(function(y, v) {
    var p, g = v.type.defaultProps !== void 0 ? B(B({}, v.type.defaultProps), v.props) : v.props, x = g.type, b = g.dataKey, S = g.allowDataOverflow, m = g.allowDuplicatedCategory, w = g.scale, O = g.ticks, _ = g.includeHidden, T = g[o];
    if (y[T])
      return y;
    var I = vc(t.data, {
      graphicalItems: i.filter(function(W) {
        var q, J = o in W.props ? W.props[o] : (q = W.type.defaultProps) === null || q === void 0 ? void 0 : q[o];
        return J === T;
      }),
      dataStartIndex: c,
      dataEndIndex: u
    }), j = I.length, $, k, D;
    N5(g.domain, S, x) && ($ = fl(g.domain, null, S), h && (x === "number" || w !== "auto") && (D = Zi(I, b, "category")));
    var L = Q0(x);
    if (!$ || $.length === 0) {
      var N, F = (N = g.domain) !== null && N !== void 0 ? N : L;
      if (b) {
        if ($ = Zi(I, b, x), x === "category" && h) {
          var U = A_($);
          m && U ? (k = $, $ = ds(0, j)) : m || ($ = av(F, $, v).reduce(function(W, q) {
            return W.indexOf(q) >= 0 ? W : [].concat(hi(W), [q]);
          }, []));
        } else if (x === "category")
          m ? $ = $.filter(function(W) {
            return W !== "" && !de(W);
          }) : $ = av(F, $, v).reduce(function(W, q) {
            return W.indexOf(q) >= 0 || q === "" || de(q) ? W : [].concat(hi(W), [q]);
          }, []);
        else if (x === "number") {
          var Y = zL(I, i.filter(function(W) {
            var q, J, te = o in W.props ? W.props[o] : (q = W.type.defaultProps) === null || q === void 0 ? void 0 : q[o], ne = "hide" in W.props ? W.props.hide : (J = W.type.defaultProps) === null || J === void 0 ? void 0 : J.hide;
            return te === T && (_ || !ne);
          }), b, a, l);
          Y && ($ = Y);
        }
        h && (x === "number" || w !== "auto") && (D = Zi(I, b, "category"));
      } else h ? $ = ds(0, j) : s && s[T] && s[T].hasStack && x === "number" ? $ = d === "expand" ? [0, 1] : Db(s[T].stackGroups, c, u) : $ = Mb(I, i.filter(function(W) {
        var q = o in W.props ? W.props[o] : W.type.defaultProps[o], J = "hide" in W.props ? W.props.hide : W.type.defaultProps.hide;
        return q === T && (_ || !J);
      }), x, l, !0);
      if (x === "number")
        $ = Kl(f, $, T, a, O), F && ($ = fl(F, $, S));
      else if (x === "category" && F) {
        var M = F, R = $.every(function(W) {
          return M.indexOf(W) >= 0;
        });
        R && ($ = M);
      }
    }
    return B(B({}, y), {}, oe({}, T, B(B({}, g), {}, {
      axisType: a,
      domain: $,
      categoricalDomain: D,
      duplicateDomain: k,
      originalDomain: (p = g.domain) !== null && p !== void 0 ? p : L,
      isCategorical: h,
      layout: l
    })));
  }, {});
}, l8 = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.layout, f = t.children, d = vc(t.data, {
    graphicalItems: n,
    dataStartIndex: c,
    dataEndIndex: u
  }), h = d.length, y = Cb(l, a), v = -1;
  return n.reduce(function(p, g) {
    var x = g.type.defaultProps !== void 0 ? B(B({}, g.type.defaultProps), g.props) : g.props, b = x[o], S = Q0("number");
    if (!p[b]) {
      v++;
      var m;
      return y ? m = ds(0, h) : s && s[b] && s[b].hasStack ? (m = Db(s[b].stackGroups, c, u), m = Kl(f, m, b, a)) : (m = fl(S, Mb(d, n.filter(function(w) {
        var O, _, T = o in w.props ? w.props[o] : (O = w.type.defaultProps) === null || O === void 0 ? void 0 : O[o], I = "hide" in w.props ? w.props.hide : (_ = w.type.defaultProps) === null || _ === void 0 ? void 0 : _.hide;
        return T === b && !I;
      }), "number", l), i.defaultProps.allowDataOverflow), m = Kl(f, m, b, a)), B(B({}, p), {}, oe({}, b, B(B({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: wt(a8, "".concat(a, ".").concat(v % 2), null),
        domain: m,
        originalDomain: S,
        isCategorical: y,
        layout: l
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return p;
  }, {});
}, f8 = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, c = r.dataStartIndex, u = r.dataEndIndex, l = t.children, f = "".concat(i, "Id"), d = Et(l, a), h = {};
  return d && d.length ? h = u8(t, {
    axes: d,
    graphicalItems: o,
    axisType: i,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: c,
    dataEndIndex: u
  }) : o && o.length && (h = l8(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: c,
    dataEndIndex: u
  })), h;
}, d8 = function(t) {
  var r = Sr(t), n = rr(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Af(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Zo(r, n)
  };
}, qy = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = bt(r, ni), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, h8 = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = nr(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Gy = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, p8 = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, s = t.yAxisMap, c = s === void 0 ? {} : s, u = n.width, l = n.height, f = n.children, d = n.margin || {}, h = bt(f, ni), y = bt(f, Cn), v = Object.keys(c).reduce(function(m, w) {
    var O = c[w], _ = O.orientation;
    return !O.mirror && !O.hide ? B(B({}, m), {}, oe({}, _, m[_] + O.width)) : m;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), p = Object.keys(o).reduce(function(m, w) {
    var O = o[w], _ = O.orientation;
    return !O.mirror && !O.hide ? B(B({}, m), {}, oe({}, _, wt(m, "".concat(_)) + O.height)) : m;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), g = B(B({}, p), v), x = g.bottom;
  h && (g.bottom += h.props.height || ni.defaultProps.height), y && r && (g = FL(g, i, n, r));
  var b = u - g.left - g.right, S = l - g.top - g.bottom;
  return B(B({
    brushBottom: x
  }, g), {}, {
    // never return negative values for height and width
    width: Math.max(b, 0),
    height: Math.max(S, 0)
  });
}, v8 = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, J0 = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, c = t.axisComponents, u = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, d = function(g, x) {
    var b = x.graphicalItems, S = x.stackGroups, m = x.offset, w = x.updateId, O = x.dataStartIndex, _ = x.dataEndIndex, T = g.barSize, I = g.layout, j = g.barGap, $ = g.barCategoryGap, k = g.maxBarSize, D = Gy(I), L = D.numericAxisName, N = D.cateAxisName, F = h8(b), U = [];
    return b.forEach(function(Y, M) {
      var R = vc(g.data, {
        graphicalItems: [Y],
        dataStartIndex: O,
        dataEndIndex: _
      }), W = Y.type.defaultProps !== void 0 ? B(B({}, Y.type.defaultProps), Y.props) : Y.props, q = W.dataKey, J = W.maxBarSize, te = W["".concat(L, "Id")], ne = W["".concat(N, "Id")], ae = {}, ie = c.reduce(function(Vt, mt) {
        var Ei, ji, gn = x["".concat(mt.axisType, "Map")], $i = W["".concat(mt.axisType, "Id")];
        gn && gn[$i] || mt.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? vt(!1, "Specifying a(n) ".concat(mt.axisType, "Id requires a corresponding ").concat(
          mt.axisType,
          "Id on the targeted graphical component "
        ).concat((Ei = Y == null || (ji = Y.type) === null || ji === void 0 ? void 0 : ji.displayName) !== null && Ei !== void 0 ? Ei : "")) : vt());
        var yr = gn[$i];
        return B(B({}, Vt), {}, oe(oe({}, mt.axisType, yr), "".concat(mt.axisType, "Ticks"), rr(yr)));
      }, ae), z = ie[N], Q = ie["".concat(N, "Ticks")], re = S && S[te] && S[te].hasStack && QL(Y, S[te].stackGroups), C = nr(Y.type).indexOf("Bar") >= 0, he = Zo(z, Q), H = [], be = F && LL({
        barSize: T,
        stackGroups: S,
        totalSize: v8(ie, N)
      });
      if (C) {
        var xe, qe, Mt = de(J) ? k : J, Ct = (xe = (qe = Zo(z, Q, !0)) !== null && qe !== void 0 ? qe : Mt) !== null && xe !== void 0 ? xe : 0;
        H = BL({
          barGap: j,
          barCategoryGap: $,
          bandSize: Ct !== he ? Ct : he,
          sizeList: be[ne],
          maxBarSize: Mt
        }), Ct !== he && (H = H.map(function(Vt) {
          return B(B({}, Vt), {}, {
            position: B(B({}, Vt.position), {}, {
              offset: Vt.position.offset - Ct / 2
            })
          });
        }));
      }
      var mn = Y && Y.type && Y.type.getComposedData;
      mn && U.push({
        props: B(B({}, mn(B(B({}, ie), {}, {
          displayedData: R,
          props: g,
          dataKey: q,
          item: Y,
          bandSize: he,
          barPosition: H,
          offset: m,
          stackedData: re,
          layout: I,
          dataStartIndex: O,
          dataEndIndex: _
        }))), {}, oe(oe(oe({
          key: Y.key || "item-".concat(M)
        }, L, ie[L]), N, ie[N]), "animationId", w)),
        childIndex: L_(Y, g.children),
        item: Y
      });
    }), U;
  }, h = function(g, x) {
    var b = g.props, S = g.dataStartIndex, m = g.dataEndIndex, w = g.updateId;
    if (!Jd({
      props: b
    }))
      return null;
    var O = b.children, _ = b.layout, T = b.stackOffset, I = b.data, j = b.reverseStackOrder, $ = Gy(_), k = $.numericAxisName, D = $.cateAxisName, L = Et(O, n), N = VL(I, L, "".concat(k, "Id"), "".concat(D, "Id"), T, j), F = c.reduce(function(W, q) {
      var J = "".concat(q.axisType, "Map");
      return B(B({}, W), {}, oe({}, J, f8(b, B(B({}, q), {}, {
        graphicalItems: L,
        stackGroups: q.axisType === k && N,
        dataStartIndex: S,
        dataEndIndex: m
      }))));
    }, {}), U = p8(B(B({}, F), {}, {
      props: b,
      graphicalItems: L
    }), x == null ? void 0 : x.legendBBox);
    Object.keys(F).forEach(function(W) {
      F[W] = l(b, F[W], U, W.replace("Map", ""), r);
    });
    var Y = F["".concat(D, "Map")], M = d8(Y), R = d(b, B(B({}, F), {}, {
      dataStartIndex: S,
      dataEndIndex: m,
      updateId: w,
      graphicalItems: L,
      stackGroups: N,
      offset: U
    }));
    return B(B({
      formattedGraphicalItems: R,
      graphicalItems: L,
      offset: U,
      stackGroups: N
    }, M), F);
  }, y = /* @__PURE__ */ function(p) {
    function g(x) {
      var b, S, m;
      return K5(this, g), m = Q5(this, g, [x]), oe(m, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), oe(m, "accessibilityManager", new k5()), oe(m, "handleLegendBBoxUpdate", function(w) {
        if (w) {
          var O = m.state, _ = O.dataStartIndex, T = O.dataEndIndex, I = O.updateId;
          m.setState(B({
            legendBBox: w
          }, h({
            props: m.props,
            dataStartIndex: _,
            dataEndIndex: T,
            updateId: I
          }, B(B({}, m.state), {}, {
            legendBBox: w
          }))));
        }
      }), oe(m, "handleReceiveSyncEvent", function(w, O, _) {
        if (m.props.syncId === w) {
          if (_ === m.eventEmitterSymbol && typeof m.props.syncMethod != "function")
            return;
          m.applySyncEvent(O);
        }
      }), oe(m, "handleBrushChange", function(w) {
        var O = w.startIndex, _ = w.endIndex;
        if (O !== m.state.dataStartIndex || _ !== m.state.dataEndIndex) {
          var T = m.state.updateId;
          m.setState(function() {
            return B({
              dataStartIndex: O,
              dataEndIndex: _
            }, h({
              props: m.props,
              dataStartIndex: O,
              dataEndIndex: _,
              updateId: T
            }, m.state));
          }), m.triggerSyncEvent({
            dataStartIndex: O,
            dataEndIndex: _
          });
        }
      }), oe(m, "handleMouseEnter", function(w) {
        var O = m.getMouseInfo(w);
        if (O) {
          var _ = B(B({}, O), {}, {
            isTooltipActive: !0
          });
          m.setState(_), m.triggerSyncEvent(_);
          var T = m.props.onMouseEnter;
          ue(T) && T(_, w);
        }
      }), oe(m, "triggeredAfterMouseMove", function(w) {
        var O = m.getMouseInfo(w), _ = O ? B(B({}, O), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        m.setState(_), m.triggerSyncEvent(_);
        var T = m.props.onMouseMove;
        ue(T) && T(_, w);
      }), oe(m, "handleItemMouseEnter", function(w) {
        m.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: w,
            activePayload: w.tooltipPayload,
            activeCoordinate: w.tooltipPosition || {
              x: w.cx,
              y: w.cy
            }
          };
        });
      }), oe(m, "handleItemMouseLeave", function() {
        m.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), oe(m, "handleMouseMove", function(w) {
        w.persist(), m.throttleTriggeredAfterMouseMove(w);
      }), oe(m, "handleMouseLeave", function(w) {
        m.throttleTriggeredAfterMouseMove.cancel();
        var O = {
          isTooltipActive: !1
        };
        m.setState(O), m.triggerSyncEvent(O);
        var _ = m.props.onMouseLeave;
        ue(_) && _(O, w);
      }), oe(m, "handleOuterEvent", function(w) {
        var O = D_(w), _ = wt(m.props, "".concat(O));
        if (O && ue(_)) {
          var T, I;
          /.*touch.*/i.test(O) ? I = m.getMouseInfo(w.changedTouches[0]) : I = m.getMouseInfo(w), _((T = I) !== null && T !== void 0 ? T : {}, w);
        }
      }), oe(m, "handleClick", function(w) {
        var O = m.getMouseInfo(w);
        if (O) {
          var _ = B(B({}, O), {}, {
            isTooltipActive: !0
          });
          m.setState(_), m.triggerSyncEvent(_);
          var T = m.props.onClick;
          ue(T) && T(_, w);
        }
      }), oe(m, "handleMouseDown", function(w) {
        var O = m.props.onMouseDown;
        if (ue(O)) {
          var _ = m.getMouseInfo(w);
          O(_, w);
        }
      }), oe(m, "handleMouseUp", function(w) {
        var O = m.props.onMouseUp;
        if (ue(O)) {
          var _ = m.getMouseInfo(w);
          O(_, w);
        }
      }), oe(m, "handleTouchMove", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.throttleTriggeredAfterMouseMove(w.changedTouches[0]);
      }), oe(m, "handleTouchStart", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.handleMouseDown(w.changedTouches[0]);
      }), oe(m, "handleTouchEnd", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.handleMouseUp(w.changedTouches[0]);
      }), oe(m, "handleDoubleClick", function(w) {
        var O = m.props.onDoubleClick;
        if (ue(O)) {
          var _ = m.getMouseInfo(w);
          O(_, w);
        }
      }), oe(m, "handleContextMenu", function(w) {
        var O = m.props.onContextMenu;
        if (ue(O)) {
          var _ = m.getMouseInfo(w);
          O(_, w);
        }
      }), oe(m, "triggerSyncEvent", function(w) {
        m.props.syncId !== void 0 && ru.emit(nu, m.props.syncId, w, m.eventEmitterSymbol);
      }), oe(m, "applySyncEvent", function(w) {
        var O = m.props, _ = O.layout, T = O.syncMethod, I = m.state.updateId, j = w.dataStartIndex, $ = w.dataEndIndex;
        if (w.dataStartIndex !== void 0 || w.dataEndIndex !== void 0)
          m.setState(B({
            dataStartIndex: j,
            dataEndIndex: $
          }, h({
            props: m.props,
            dataStartIndex: j,
            dataEndIndex: $,
            updateId: I
          }, m.state)));
        else if (w.activeTooltipIndex !== void 0) {
          var k = w.chartX, D = w.chartY, L = w.activeTooltipIndex, N = m.state, F = N.offset, U = N.tooltipTicks;
          if (!F)
            return;
          if (typeof T == "function")
            L = T(U, w);
          else if (T === "value") {
            L = -1;
            for (var Y = 0; Y < U.length; Y++)
              if (U[Y].value === w.activeLabel) {
                L = Y;
                break;
              }
          }
          var M = B(B({}, F), {}, {
            x: F.left,
            y: F.top
          }), R = Math.min(k, M.x + M.width), W = Math.min(D, M.y + M.height), q = U[L] && U[L].value, J = Ql(m.state, m.props.data, L), te = U[L] ? {
            x: _ === "horizontal" ? U[L].coordinate : R,
            y: _ === "horizontal" ? W : U[L].coordinate
          } : X0;
          m.setState(B(B({}, w), {}, {
            activeLabel: q,
            activeCoordinate: te,
            activePayload: J,
            activeTooltipIndex: L
          }));
        } else
          m.setState(w);
      }), oe(m, "renderCursor", function(w) {
        var O, _ = m.state, T = _.isTooltipActive, I = _.activeCoordinate, j = _.activePayload, $ = _.offset, k = _.activeTooltipIndex, D = _.tooltipAxisBandSize, L = m.getTooltipEventType(), N = (O = w.props.active) !== null && O !== void 0 ? O : T, F = m.props.layout, U = w.key || "_recharts-cursor";
        return /* @__PURE__ */ E.createElement(W5, {
          key: U,
          activeCoordinate: I,
          activePayload: j,
          activeTooltipIndex: k,
          chartName: r,
          element: w,
          isActive: N,
          layout: F,
          offset: $,
          tooltipAxisBandSize: D,
          tooltipEventType: L
        });
      }), oe(m, "renderPolarAxis", function(w, O, _) {
        var T = wt(w, "type.axisType"), I = wt(m.state, "".concat(T, "Map")), j = w.type.defaultProps, $ = j !== void 0 ? B(B({}, j), w.props) : w.props, k = I && I[$["".concat(T, "Id")]];
        return /* @__PURE__ */ Qe(w, B(B({}, k), {}, {
          className: fe(T, k.className),
          key: w.key || "".concat(O, "-").concat(_),
          ticks: rr(k, !0)
        }));
      }), oe(m, "renderPolarGrid", function(w) {
        var O = w.props, _ = O.radialLines, T = O.polarAngles, I = O.polarRadius, j = m.state, $ = j.radiusAxisMap, k = j.angleAxisMap, D = Sr($), L = Sr(k), N = L.cx, F = L.cy, U = L.innerRadius, Y = L.outerRadius;
        return /* @__PURE__ */ Qe(w, {
          polarAngles: Array.isArray(T) ? T : rr(L, !0).map(function(M) {
            return M.coordinate;
          }),
          polarRadius: Array.isArray(I) ? I : rr(D, !0).map(function(M) {
            return M.coordinate;
          }),
          cx: N,
          cy: F,
          innerRadius: U,
          outerRadius: Y,
          key: w.key || "polar-grid",
          radialLines: _
        });
      }), oe(m, "renderLegend", function() {
        var w = m.state.formattedGraphicalItems, O = m.props, _ = O.children, T = O.width, I = O.height, j = m.props.margin || {}, $ = T - (j.left || 0) - (j.right || 0), k = jb({
          children: _,
          formattedGraphicalItems: w,
          legendWidth: $,
          legendContent: u
        });
        if (!k)
          return null;
        var D = k.item, L = Wy(k, z5);
        return /* @__PURE__ */ Qe(D, B(B({}, L), {}, {
          chartWidth: T,
          chartHeight: I,
          margin: j,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), oe(m, "renderTooltip", function() {
        var w, O = m.props, _ = O.children, T = O.accessibilityLayer, I = bt(_, Nt);
        if (!I)
          return null;
        var j = m.state, $ = j.isTooltipActive, k = j.activeCoordinate, D = j.activePayload, L = j.activeLabel, N = j.offset, F = (w = I.props.active) !== null && w !== void 0 ? w : $;
        return /* @__PURE__ */ Qe(I, {
          viewBox: B(B({}, N), {}, {
            x: N.left,
            y: N.top
          }),
          active: F,
          label: L,
          payload: F ? D : [],
          coordinate: k,
          accessibilityLayer: T
        });
      }), oe(m, "renderBrush", function(w) {
        var O = m.props, _ = O.margin, T = O.data, I = m.state, j = I.offset, $ = I.dataStartIndex, k = I.dataEndIndex, D = I.updateId;
        return /* @__PURE__ */ Qe(w, {
          key: w.key || "_recharts-brush",
          onChange: fo(m.handleBrushChange, w.props.onChange),
          data: T,
          x: X(w.props.x) ? w.props.x : j.left,
          y: X(w.props.y) ? w.props.y : j.top + j.height + j.brushBottom - (_.bottom || 0),
          width: X(w.props.width) ? w.props.width : j.width,
          startIndex: $,
          endIndex: k,
          updateId: "brush-".concat(D)
        });
      }), oe(m, "renderReferenceElement", function(w, O, _) {
        if (!w)
          return null;
        var T = m, I = T.clipPathId, j = m.state, $ = j.xAxisMap, k = j.yAxisMap, D = j.offset, L = w.type.defaultProps || {}, N = w.props, F = N.xAxisId, U = F === void 0 ? L.xAxisId : F, Y = N.yAxisId, M = Y === void 0 ? L.yAxisId : Y;
        return /* @__PURE__ */ Qe(w, {
          key: w.key || "".concat(O, "-").concat(_),
          xAxis: $[U],
          yAxis: k[M],
          viewBox: {
            x: D.left,
            y: D.top,
            width: D.width,
            height: D.height
          },
          clipPathId: I
        });
      }), oe(m, "renderActivePoints", function(w) {
        var O = w.item, _ = w.activePoint, T = w.basePoint, I = w.childIndex, j = w.isRange, $ = [], k = O.props.key, D = O.item.type.defaultProps !== void 0 ? B(B({}, O.item.type.defaultProps), O.item.props) : O.item.props, L = D.activeDot, N = D.dataKey, F = B(B({
          index: I,
          dataKey: N,
          cx: _.x,
          cy: _.y,
          r: 4,
          fill: Jf(O.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: _.payload,
          value: _.value
        }, se(L, !1)), Ao(L));
        return $.push(g.renderActiveDot(L, F, "".concat(k, "-activePoint-").concat(I))), T ? $.push(g.renderActiveDot(L, B(B({}, F), {}, {
          cx: T.x,
          cy: T.y
        }), "".concat(k, "-basePoint-").concat(I))) : j && $.push(null), $;
      }), oe(m, "renderGraphicChild", function(w, O, _) {
        var T = m.filterFormatItem(w, O, _);
        if (!T)
          return null;
        var I = m.getTooltipEventType(), j = m.state, $ = j.isTooltipActive, k = j.tooltipAxis, D = j.activeTooltipIndex, L = j.activeLabel, N = m.props.children, F = bt(N, Nt), U = T.props, Y = U.points, M = U.isRange, R = U.baseLine, W = T.item.type.defaultProps !== void 0 ? B(B({}, T.item.type.defaultProps), T.item.props) : T.item.props, q = W.activeDot, J = W.hide, te = W.activeBar, ne = W.activeShape, ae = !!(!J && $ && F && (q || te || ne)), ie = {};
        I !== "axis" && F && F.props.trigger === "click" ? ie = {
          onClick: fo(m.handleItemMouseEnter, w.props.onClick)
        } : I !== "axis" && (ie = {
          onMouseLeave: fo(m.handleItemMouseLeave, w.props.onMouseLeave),
          onMouseEnter: fo(m.handleItemMouseEnter, w.props.onMouseEnter)
        });
        var z = /* @__PURE__ */ Qe(w, B(B({}, T.props), ie));
        function Q(mt) {
          return typeof k.dataKey == "function" ? k.dataKey(mt.payload) : null;
        }
        if (ae)
          if (D >= 0) {
            var re, C;
            if (k.dataKey && !k.allowDuplicatedCategory) {
              var he = typeof k.dataKey == "function" ? Q : "payload.".concat(k.dataKey.toString());
              re = _u(Y, he, L), C = M && R && _u(R, he, L);
            } else
              re = Y == null ? void 0 : Y[D], C = M && R && R[D];
            if (ne || te) {
              var H = w.props.activeIndex !== void 0 ? w.props.activeIndex : D;
              return [/* @__PURE__ */ Qe(w, B(B(B({}, T.props), ie), {}, {
                activeIndex: H
              })), null, null];
            }
            if (!de(re))
              return [z].concat(hi(m.renderActivePoints({
                item: T,
                activePoint: re,
                basePoint: C,
                childIndex: D,
                isRange: M
              })));
          } else {
            var be, xe = (be = m.getItemByXY(m.state.activeCoordinate)) !== null && be !== void 0 ? be : {
              graphicalItem: z
            }, qe = xe.graphicalItem, Mt = qe.item, Ct = Mt === void 0 ? w : Mt, mn = qe.childIndex, Vt = B(B(B({}, T.props), ie), {}, {
              activeIndex: mn
            });
            return [/* @__PURE__ */ Qe(Ct, Vt), null, null];
          }
        return M ? [z, null, null] : [z, null];
      }), oe(m, "renderCustomized", function(w, O, _) {
        return /* @__PURE__ */ Qe(w, B(B({
          key: "recharts-customized-".concat(_)
        }, m.props), m.state));
      }), oe(m, "renderMap", {
        CartesianGrid: {
          handler: go,
          once: !0
        },
        ReferenceArea: {
          handler: m.renderReferenceElement
        },
        ReferenceLine: {
          handler: go
        },
        ReferenceDot: {
          handler: m.renderReferenceElement
        },
        XAxis: {
          handler: go
        },
        YAxis: {
          handler: go
        },
        Brush: {
          handler: m.renderBrush,
          once: !0
        },
        Bar: {
          handler: m.renderGraphicChild
        },
        Line: {
          handler: m.renderGraphicChild
        },
        Area: {
          handler: m.renderGraphicChild
        },
        Radar: {
          handler: m.renderGraphicChild
        },
        RadialBar: {
          handler: m.renderGraphicChild
        },
        Scatter: {
          handler: m.renderGraphicChild
        },
        Pie: {
          handler: m.renderGraphicChild
        },
        Funnel: {
          handler: m.renderGraphicChild
        },
        Tooltip: {
          handler: m.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: m.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: m.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: m.renderPolarAxis
        },
        Customized: {
          handler: m.renderCustomized
        }
      }), m.clipPathId = "".concat((b = x.id) !== null && b !== void 0 ? b : Va("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = Eg(m.triggeredAfterMouseMove, (S = x.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60), m.state = {}, m;
    }
    return e8(g, p), X5(g, [{
      key: "componentDidMount",
      value: function() {
        var b, S;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (b = this.props.margin.left) !== null && b !== void 0 ? b : 0,
            top: (S = this.props.margin.top) !== null && S !== void 0 ? S : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var b = this.props, S = b.children, m = b.data, w = b.height, O = b.layout, _ = bt(S, Nt);
        if (_) {
          var T = _.props.defaultIndex;
          if (!(typeof T != "number" || T < 0 || T > this.state.tooltipTicks.length - 1)) {
            var I = this.state.tooltipTicks[T] && this.state.tooltipTicks[T].value, j = Ql(this.state, m, T, I), $ = this.state.tooltipTicks[T].coordinate, k = (this.state.offset.top + w) / 2, D = O === "horizontal", L = D ? {
              x: $,
              y: k
            } : {
              y: $,
              x: k
            }, N = this.state.formattedGraphicalItems.find(function(U) {
              var Y = U.item;
              return Y.type.name === "Scatter";
            });
            N && (L = B(B({}, L), N.props.points[T].tooltipPosition), j = N.props.points[T].tooltipPayload);
            var F = {
              activeTooltipIndex: T,
              isTooltipActive: !0,
              activeLabel: I,
              activePayload: j,
              activeCoordinate: L
            };
            this.setState(F), this.renderCursor(_), this.accessibilityManager.setIndex(T);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(b, S) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== S.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== b.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== b.margin) {
          var m, w;
          this.accessibilityManager.setDetails({
            offset: {
              left: (m = this.props.margin.left) !== null && m !== void 0 ? m : 0,
              top: (w = this.props.margin.top) !== null && w !== void 0 ? w : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(b) {
        Au([bt(b.children, Nt)], [bt(this.props.children, Nt)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var b = bt(this.props.children, Nt);
        if (b && typeof b.props.shared == "boolean") {
          var S = b.props.shared ? "axis" : "item";
          return s.indexOf(S) >= 0 ? S : a;
        }
        return a;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(b) {
        if (!this.container)
          return null;
        var S = this.container, m = S.getBoundingClientRect(), w = fN(m), O = {
          chartX: Math.round(b.pageX - w.left),
          chartY: Math.round(b.pageY - w.top)
        }, _ = m.width / S.offsetWidth || 1, T = this.inRange(O.chartX, O.chartY, _);
        if (!T)
          return null;
        var I = this.state, j = I.xAxisMap, $ = I.yAxisMap, k = this.getTooltipEventType(), D = Uy(this.state, this.props.data, this.props.layout, T);
        if (k !== "axis" && j && $) {
          var L = Sr(j).scale, N = Sr($).scale, F = L && L.invert ? L.invert(O.chartX) : null, U = N && N.invert ? N.invert(O.chartY) : null;
          return B(B({}, O), {}, {
            xValue: F,
            yValue: U
          }, D);
        }
        return D ? B(B({}, O), D) : null;
      }
    }, {
      key: "inRange",
      value: function(b, S) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, w = this.props.layout, O = b / m, _ = S / m;
        if (w === "horizontal" || w === "vertical") {
          var T = this.state.offset, I = O >= T.left && O <= T.left + T.width && _ >= T.top && _ <= T.top + T.height;
          return I ? {
            x: O,
            y: _
          } : null;
        }
        var j = this.state, $ = j.angleAxisMap, k = j.radiusAxisMap;
        if ($ && k) {
          var D = Sr($);
          return cv({
            x: O,
            y: _
          }, D);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var b = this.props.children, S = this.getTooltipEventType(), m = bt(b, Nt), w = {};
        m && S === "axis" && (m.props.trigger === "click" ? w = {
          onClick: this.handleClick
        } : w = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var O = Ao(this.props, this.handleOuterEvent);
        return B(B({}, O), w);
      }
    }, {
      key: "addListener",
      value: function() {
        ru.on(nu, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        ru.removeListener(nu, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(b, S, m) {
        for (var w = this.state.formattedGraphicalItems, O = 0, _ = w.length; O < _; O++) {
          var T = w[O];
          if (T.item === b || T.props.key === b.key || S === nr(T.item.type) && m === T.childIndex)
            return T;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var b = this.clipPathId, S = this.state.offset, m = S.left, w = S.top, O = S.height, _ = S.width;
        return /* @__PURE__ */ E.createElement("defs", null, /* @__PURE__ */ E.createElement("clipPath", {
          id: b
        }, /* @__PURE__ */ E.createElement("rect", {
          x: m,
          y: w,
          height: O,
          width: _
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var b = this.state.xAxisMap;
        return b ? Object.entries(b).reduce(function(S, m) {
          var w = Fy(m, 2), O = w[0], _ = w[1];
          return B(B({}, S), {}, oe({}, O, _.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var b = this.state.yAxisMap;
        return b ? Object.entries(b).reduce(function(S, m) {
          var w = Fy(m, 2), O = w[0], _ = w[1];
          return B(B({}, S), {}, oe({}, O, _.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(b) {
        var S;
        return (S = this.state.xAxisMap) === null || S === void 0 || (S = S[b]) === null || S === void 0 ? void 0 : S.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(b) {
        var S;
        return (S = this.state.yAxisMap) === null || S === void 0 || (S = S[b]) === null || S === void 0 ? void 0 : S.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(b) {
        var S = this.state, m = S.formattedGraphicalItems, w = S.activeItem;
        if (m && m.length)
          for (var O = 0, _ = m.length; O < _; O++) {
            var T = m[O], I = T.props, j = T.item, $ = j.type.defaultProps !== void 0 ? B(B({}, j.type.defaultProps), j.props) : j.props, k = nr(j.type);
            if (k === "Bar") {
              var D = (I.data || []).find(function(U) {
                return JW(b, U);
              });
              if (D)
                return {
                  graphicalItem: T,
                  payload: D
                };
            } else if (k === "RadialBar") {
              var L = (I.data || []).find(function(U) {
                return cv(b, U);
              });
              if (L)
                return {
                  graphicalItem: T,
                  payload: L
                };
            } else if (oc(T, w) || sc(T, w) || Na(T, w)) {
              var N = Fz({
                graphicalItem: T,
                activeTooltipItem: w,
                itemData: $.data
              }), F = $.activeIndex === void 0 ? N : $.activeIndex;
              return {
                graphicalItem: B(B({}, T), {}, {
                  childIndex: F
                }),
                payload: Na(T, w) ? $.data[N] : T.props.data[N]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var b = this;
        if (!Jd(this))
          return null;
        var S = this.props, m = S.children, w = S.className, O = S.width, _ = S.height, T = S.style, I = S.compact, j = S.title, $ = S.desc, k = Wy(S, U5), D = se(k, !1);
        if (I)
          return /* @__PURE__ */ E.createElement(Py, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ E.createElement(Eu, $n({}, D, {
            width: O,
            height: _,
            title: j,
            desc: $
          }), this.renderClipPath(), eh(m, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var L, N;
          D.tabIndex = (L = this.props.tabIndex) !== null && L !== void 0 ? L : 0, D.role = (N = this.props.role) !== null && N !== void 0 ? N : "application", D.onKeyDown = function(U) {
            b.accessibilityManager.keyboardEvent(U);
          }, D.onFocus = function() {
            b.accessibilityManager.focus();
          };
        }
        var F = this.parseEventsOfWrapper();
        return /* @__PURE__ */ E.createElement(Py, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ E.createElement("div", $n({
          className: fe("recharts-wrapper", w),
          style: B({
            position: "relative",
            cursor: "default",
            width: O,
            height: _
          }, T)
        }, F, {
          ref: function(Y) {
            b.container = Y;
          }
        }), /* @__PURE__ */ E.createElement(Eu, $n({}, D, {
          width: O,
          height: _,
          title: j,
          desc: $,
          style: o8
        }), this.renderClipPath(), eh(m, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(um);
  oe(y, "displayName", r), oe(y, "defaultProps", B({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, f)), oe(y, "getDerivedStateFromProps", function(p, g) {
    var x = p.dataKey, b = p.data, S = p.children, m = p.width, w = p.height, O = p.layout, _ = p.stackOffset, T = p.margin, I = g.dataStartIndex, j = g.dataEndIndex;
    if (g.updateId === void 0) {
      var $ = qy(p);
      return B(B(B({}, $), {}, {
        updateId: 0
      }, h(B(B({
        props: p
      }, $), {}, {
        updateId: 0
      }), g)), {}, {
        prevDataKey: x,
        prevData: b,
        prevWidth: m,
        prevHeight: w,
        prevLayout: O,
        prevStackOffset: _,
        prevMargin: T,
        prevChildren: S
      });
    }
    if (x !== g.prevDataKey || b !== g.prevData || m !== g.prevWidth || w !== g.prevHeight || O !== g.prevLayout || _ !== g.prevStackOffset || !Mn(T, g.prevMargin)) {
      var k = qy(p), D = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: g.chartX,
        chartY: g.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: g.isTooltipActive
      }, L = B(B({}, Uy(g, b, O)), {}, {
        updateId: g.updateId + 1
      }), N = B(B(B({}, k), D), L);
      return B(B(B({}, N), h(B({
        props: p
      }, N), g)), {}, {
        prevDataKey: x,
        prevData: b,
        prevWidth: m,
        prevHeight: w,
        prevLayout: O,
        prevStackOffset: _,
        prevMargin: T,
        prevChildren: S
      });
    }
    if (!Au(S, g.prevChildren)) {
      var F, U, Y, M, R = bt(S, ni), W = R && (F = (U = R.props) === null || U === void 0 ? void 0 : U.startIndex) !== null && F !== void 0 ? F : I, q = R && (Y = (M = R.props) === null || M === void 0 ? void 0 : M.endIndex) !== null && Y !== void 0 ? Y : j, J = W !== I || q !== j, te = !de(b), ne = te && !J ? g.updateId : g.updateId + 1;
      return B(B({
        updateId: ne
      }, h(B(B({
        props: p
      }, g), {}, {
        updateId: ne,
        dataStartIndex: W,
        dataEndIndex: q
      }), g)), {}, {
        prevChildren: S,
        dataStartIndex: W,
        dataEndIndex: q
      });
    }
    return null;
  }), oe(y, "renderActiveDot", function(p, g, x) {
    var b;
    return /* @__PURE__ */ Lt(p) ? b = /* @__PURE__ */ Qe(p, g) : ue(p) ? b = p(g) : b = /* @__PURE__ */ E.createElement(td, g), /* @__PURE__ */ E.createElement(je, {
      className: "recharts-active-dot",
      key: x
    }, b);
  });
  var v = /* @__PURE__ */ js(function(g, x) {
    return /* @__PURE__ */ E.createElement(y, $n({}, g, {
      ref: x
    }));
  });
  return v.displayName = y.displayName, v;
}, y8 = J0({
  chartName: "BarChart",
  GraphicalChild: yn,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: hc
  }, {
    axisType: "yAxis",
    AxisComp: pc
  }],
  formatAxisMap: gq
}), m8 = J0({
  chartName: "PieChart",
  GraphicalChild: vr,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: ac
  }, {
    axisType: "radiusAxis",
    AxisComp: nc
  }],
  formatAxisMap: sB,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
});
const au = 768;
function Z0() {
  const [e, t] = V.useState(void 0);
  return V.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${au - 1}px)`), n = () => {
      t(window.innerWidth < au);
    };
    return r.addEventListener("change", n), t(window.innerWidth < au), () => r.removeEventListener("change", n);
  }, []), !!e;
}
function or(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), r === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function fd(e, t = []) {
  let r = [];
  function n(a, o) {
    const s = V.createContext(o), c = r.length;
    r = [...r, o];
    const u = (f) => {
      var g;
      const { scope: d, children: h, ...y } = f, v = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[c]) || s, p = V.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ P.jsx(v.Provider, { value: p, children: h });
    };
    u.displayName = a + "Provider";
    function l(f, d) {
      var v;
      const h = ((v = d == null ? void 0 : d[e]) == null ? void 0 : v[c]) || s, y = V.useContext(h);
      if (y) return y;
      if (o !== void 0) return o;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [u, l];
  }
  const i = () => {
    const a = r.map((o) => V.createContext(o));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || a;
      return V.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return i.scopeName = e, [n, g8(i, ...t)];
}
function g8(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(a) {
      const o = n.reduce((s, { useScope: c, scopeName: u }) => {
        const f = c(a)[`__scope${u}`];
        return { ...s, ...f };
      }, {});
      return V.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function Yy(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function ex(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((i) => {
      const a = Yy(i, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let i = 0; i < n.length; i++) {
          const a = n[i];
          typeof a == "function" ? a() : Yy(e[i], null);
        }
      };
  };
}
function As(...e) {
  return V.useCallback(ex(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Jl(e) {
  const t = /* @__PURE__ */ b8(e), r = V.forwardRef((n, i) => {
    const { children: a, ...o } = n, s = V.Children.toArray(a), c = s.find(w8);
    if (c) {
      const u = c.props.children, l = s.map((f) => f === c ? V.Children.count(u) > 1 ? V.Children.only(null) : V.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ P.jsx(t, { ...o, ref: i, children: V.isValidElement(u) ? V.cloneElement(u, void 0, l) : null });
    }
    return /* @__PURE__ */ P.jsx(t, { ...o, ref: i, children: a });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function b8(e) {
  const t = V.forwardRef((r, n) => {
    const { children: i, ...a } = r;
    if (V.isValidElement(i)) {
      const o = S8(i), s = O8(a, i.props);
      return i.type !== V.Fragment && (s.ref = n ? ex(n, o) : o), V.cloneElement(i, s);
    }
    return V.Children.count(i) > 1 ? V.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var x8 = Symbol("radix.slottable");
function w8(e) {
  return V.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === x8;
}
function O8(e, t) {
  const r = { ...t };
  for (const n in t) {
    const i = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? i && a ? r[n] = (...s) => {
      const c = a(...s);
      return i(...s), c;
    } : i && (r[n] = i) : n === "style" ? r[n] = { ...i, ...a } : n === "className" && (r[n] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function S8(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function _8(e) {
  const t = e + "CollectionProvider", [r, n] = fd(t), [i, a] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), o = (v) => {
    const { scope: p, children: g } = v, x = E.useRef(null), b = E.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ P.jsx(i, { scope: p, itemMap: b, collectionRef: x, children: g });
  };
  o.displayName = t;
  const s = e + "CollectionSlot", c = /* @__PURE__ */ Jl(s), u = E.forwardRef(
    (v, p) => {
      const { scope: g, children: x } = v, b = a(s, g), S = As(p, b.collectionRef);
      return /* @__PURE__ */ P.jsx(c, { ref: S, children: x });
    }
  );
  u.displayName = s;
  const l = e + "CollectionItemSlot", f = "data-radix-collection-item", d = /* @__PURE__ */ Jl(l), h = E.forwardRef(
    (v, p) => {
      const { scope: g, children: x, ...b } = v, S = E.useRef(null), m = As(p, S), w = a(l, g);
      return E.useEffect(() => (w.itemMap.set(S, { ref: S, ...b }), () => void w.itemMap.delete(S))), /* @__PURE__ */ P.jsx(d, { [f]: "", ref: m, children: x });
    }
  );
  h.displayName = l;
  function y(v) {
    const p = a(e + "CollectionConsumer", v);
    return E.useCallback(() => {
      const x = p.collectionRef.current;
      if (!x) return [];
      const b = Array.from(x.querySelectorAll(`[${f}]`));
      return Array.from(p.itemMap.values()).sort(
        (w, O) => b.indexOf(w.ref.current) - b.indexOf(O.ref.current)
      );
    }, [p.collectionRef, p.itemMap]);
  }
  return [
    { Provider: o, Slot: u, ItemSlot: h },
    y,
    n
  ];
}
var Ts = globalThis != null && globalThis.document ? V.useLayoutEffect : () => {
}, P8 = V[" useId ".trim().toString()] || (() => {
}), A8 = 0;
function tx(e) {
  const [t, r] = V.useState(P8());
  return Ts(() => {
    e || r((n) => n ?? String(A8++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var T8 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Ai = T8.reduce((e, t) => {
  const r = /* @__PURE__ */ Jl(`Primitive.${t}`), n = V.forwardRef((i, a) => {
    const { asChild: o, ...s } = i, c = o ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ P.jsx(c, { ...s, ref: a });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function E8(e) {
  const t = V.useRef(e);
  return V.useEffect(() => {
    t.current = e;
  }), V.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
var j8 = V[" useInsertionEffect ".trim().toString()] || Ts;
function rx({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [i, a, o] = $8({
    defaultProp: t,
    onChange: r
  }), s = e !== void 0, c = s ? e : i;
  {
    const l = V.useRef(e !== void 0);
    V.useEffect(() => {
      const f = l.current;
      f !== s && console.warn(
        `${n} is changing from ${f ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), l.current = s;
    }, [s, n]);
  }
  const u = V.useCallback(
    (l) => {
      var f;
      if (s) {
        const d = M8(l) ? l(e) : l;
        d !== e && ((f = o.current) == null || f.call(o, d));
      } else
        a(l);
    },
    [s, e, a, o]
  );
  return [c, u];
}
function $8({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = V.useState(e), i = V.useRef(r), a = V.useRef(t);
  return j8(() => {
    a.current = t;
  }, [t]), V.useEffect(() => {
    var o;
    i.current !== r && ((o = a.current) == null || o.call(a, r), i.current = r);
  }, [r, i]), [r, n, a];
}
function M8(e) {
  return typeof e == "function";
}
var C8 = V.createContext(void 0);
function nx(e) {
  const t = V.useContext(C8);
  return e || t || "ltr";
}
var ou = "rovingFocusGroup.onEntryFocus", I8 = { bubbles: !1, cancelable: !0 }, to = "RovingFocusGroup", [Zl, ix, k8] = _8(to), [N8, ax] = fd(
  to,
  [k8]
), [R8, D8] = N8(to), ox = V.forwardRef(
  (e, t) => /* @__PURE__ */ P.jsx(Zl.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ P.jsx(Zl.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ P.jsx(L8, { ...e, ref: t }) }) })
);
ox.displayName = to;
var L8 = V.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: i = !1,
    dir: a,
    currentTabStopId: o,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: u,
    preventScrollOnEntryFocus: l = !1,
    ...f
  } = e, d = V.useRef(null), h = As(t, d), y = nx(a), [v, p] = rx({
    prop: o,
    defaultProp: s ?? null,
    onChange: c,
    caller: to
  }), [g, x] = V.useState(!1), b = E8(u), S = ix(r), m = V.useRef(!1), [w, O] = V.useState(0);
  return V.useEffect(() => {
    const _ = d.current;
    if (_)
      return _.addEventListener(ou, b), () => _.removeEventListener(ou, b);
  }, [b]), /* @__PURE__ */ P.jsx(
    R8,
    {
      scope: r,
      orientation: n,
      dir: y,
      loop: i,
      currentTabStopId: v,
      onItemFocus: V.useCallback(
        (_) => p(_),
        [p]
      ),
      onItemShiftTab: V.useCallback(() => x(!0), []),
      onFocusableItemAdd: V.useCallback(
        () => O((_) => _ + 1),
        []
      ),
      onFocusableItemRemove: V.useCallback(
        () => O((_) => _ - 1),
        []
      ),
      children: /* @__PURE__ */ P.jsx(
        Ai.div,
        {
          tabIndex: g || w === 0 ? -1 : 0,
          "data-orientation": n,
          ...f,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: or(e.onMouseDown, () => {
            m.current = !0;
          }),
          onFocus: or(e.onFocus, (_) => {
            const T = !m.current;
            if (_.target === _.currentTarget && T && !g) {
              const I = new CustomEvent(ou, I8);
              if (_.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
                const j = S().filter((N) => N.focusable), $ = j.find((N) => N.active), k = j.find((N) => N.id === v), L = [$, k, ...j].filter(
                  Boolean
                ).map((N) => N.ref.current);
                ux(L, l);
              }
            }
            m.current = !1;
          }),
          onBlur: or(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), sx = "RovingFocusGroupItem", cx = V.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: i = !1,
      tabStopId: a,
      children: o,
      ...s
    } = e, c = tx(), u = a || c, l = D8(sx, r), f = l.currentTabStopId === u, d = ix(r), { onFocusableItemAdd: h, onFocusableItemRemove: y, currentTabStopId: v } = l;
    return V.useEffect(() => {
      if (n)
        return h(), () => y();
    }, [n, h, y]), /* @__PURE__ */ P.jsx(
      Zl.ItemSlot,
      {
        scope: r,
        id: u,
        focusable: n,
        active: i,
        children: /* @__PURE__ */ P.jsx(
          Ai.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": l.orientation,
            ...s,
            ref: t,
            onMouseDown: or(e.onMouseDown, (p) => {
              n ? l.onItemFocus(u) : p.preventDefault();
            }),
            onFocus: or(e.onFocus, () => l.onItemFocus(u)),
            onKeyDown: or(e.onKeyDown, (p) => {
              if (p.key === "Tab" && p.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (p.target !== p.currentTarget) return;
              const g = W8(p, l.orientation, l.dir);
              if (g !== void 0) {
                if (p.metaKey || p.ctrlKey || p.altKey || p.shiftKey) return;
                p.preventDefault();
                let b = d().filter((S) => S.focusable).map((S) => S.ref.current);
                if (g === "last") b.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && b.reverse();
                  const S = b.indexOf(p.currentTarget);
                  b = l.loop ? z8(b, S + 1) : b.slice(S + 1);
                }
                setTimeout(() => ux(b));
              }
            }),
            children: typeof o == "function" ? o({ isCurrentTabStop: f, hasTabStop: v != null }) : o
          }
        )
      }
    );
  }
);
cx.displayName = sx;
var B8 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function F8(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function W8(e, t, r) {
  const n = F8(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return B8[n];
}
function ux(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function z8(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var U8 = ox, q8 = cx;
function G8(e, t) {
  return V.useReducer((r, n) => t[r][n] ?? r, e);
}
var lx = (e) => {
  const { present: t, children: r } = e, n = Y8(t), i = typeof r == "function" ? r({ present: n.isPresent }) : V.Children.only(r), a = As(n.ref, H8(i));
  return typeof r == "function" || n.isPresent ? V.cloneElement(i, { ref: a }) : null;
};
lx.displayName = "Presence";
function Y8(e) {
  const [t, r] = V.useState(), n = V.useRef(null), i = V.useRef(e), a = V.useRef("none"), o = e ? "mounted" : "unmounted", [s, c] = G8(o, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return V.useEffect(() => {
    const u = bo(n.current);
    a.current = s === "mounted" ? u : "none";
  }, [s]), Ts(() => {
    const u = n.current, l = i.current;
    if (l !== e) {
      const d = a.current, h = bo(u);
      e ? c("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(l && d !== h ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, c]), Ts(() => {
    if (t) {
      let u;
      const l = t.ownerDocument.defaultView ?? window, f = (h) => {
        const v = bo(n.current).includes(h.animationName);
        if (h.target === t && v && (c("ANIMATION_END"), !i.current)) {
          const p = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = l.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = p);
          });
        }
      }, d = (h) => {
        h.target === t && (a.current = bo(n.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        l.clearTimeout(u), t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: V.useCallback((u) => {
      n.current = u ? getComputedStyle(u) : null, r(u);
    }, [])
  };
}
function bo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function H8(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var yc = "Tabs", [K8, fY] = fd(yc, [
  ax
]), fx = ax(), [V8, dd] = K8(yc), dx = V.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: r,
      value: n,
      onValueChange: i,
      defaultValue: a,
      orientation: o = "horizontal",
      dir: s,
      activationMode: c = "automatic",
      ...u
    } = e, l = nx(s), [f, d] = rx({
      prop: n,
      onChange: i,
      defaultProp: a ?? "",
      caller: yc
    });
    return /* @__PURE__ */ P.jsx(
      V8,
      {
        scope: r,
        baseId: tx(),
        value: f,
        onValueChange: d,
        orientation: o,
        dir: l,
        activationMode: c,
        children: /* @__PURE__ */ P.jsx(
          Ai.div,
          {
            dir: l,
            "data-orientation": o,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
dx.displayName = yc;
var hx = "TabsList", px = V.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...i } = e, a = dd(hx, r), o = fx(r);
    return /* @__PURE__ */ P.jsx(
      U8,
      {
        asChild: !0,
        ...o,
        orientation: a.orientation,
        dir: a.dir,
        loop: n,
        children: /* @__PURE__ */ P.jsx(
          Ai.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
px.displayName = hx;
var vx = "TabsTrigger", yx = V.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: i = !1, ...a } = e, o = dd(vx, r), s = fx(r), c = bx(o.baseId, n), u = xx(o.baseId, n), l = n === o.value;
    return /* @__PURE__ */ P.jsx(
      q8,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: l,
        children: /* @__PURE__ */ P.jsx(
          Ai.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": l,
            "aria-controls": u,
            "data-state": l ? "active" : "inactive",
            "data-disabled": i ? "" : void 0,
            disabled: i,
            id: c,
            ...a,
            ref: t,
            onMouseDown: or(e.onMouseDown, (f) => {
              !i && f.button === 0 && f.ctrlKey === !1 ? o.onValueChange(n) : f.preventDefault();
            }),
            onKeyDown: or(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && o.onValueChange(n);
            }),
            onFocus: or(e.onFocus, () => {
              const f = o.activationMode !== "manual";
              !l && !i && f && o.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
yx.displayName = vx;
var mx = "TabsContent", gx = V.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: i, children: a, ...o } = e, s = dd(mx, r), c = bx(s.baseId, n), u = xx(s.baseId, n), l = n === s.value, f = V.useRef(l);
    return V.useEffect(() => {
      const d = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(d);
    }, []), /* @__PURE__ */ P.jsx(lx, { present: i || l, children: ({ present: d }) => /* @__PURE__ */ P.jsx(
      Ai.div,
      {
        "data-state": l ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !d,
        id: u,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
          ...e.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: d && a
      }
    ) });
  }
);
gx.displayName = mx;
function bx(e, t) {
  return `${e}-trigger-${t}`;
}
function xx(e, t) {
  return `${e}-content-${t}`;
}
var X8 = dx, wx = px, Ox = yx, Sx = gx;
const hd = "-", Q8 = (e) => {
  const t = Z8(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (o) => {
      const s = o.split(hd);
      return s[0] === "" && s.length !== 1 && s.shift(), _x(s, t) || J8(o);
    },
    getConflictingClassGroupIds: (o, s) => {
      const c = r[o] || [];
      return s && n[o] ? [...c, ...n[o]] : c;
    }
  };
}, _x = (e, t) => {
  var o;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? _x(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const a = e.join(hd);
  return (o = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : o.classGroupId;
}, Hy = /^\[(.+)\]$/, J8 = (e) => {
  if (Hy.test(e)) {
    const t = Hy.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Z8 = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return t6(Object.entries(e.classGroups), r).forEach(([a, o]) => {
    ef(o, n, a, t);
  }), n;
}, ef = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? t : Ky(t, i);
      a.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (e6(i)) {
        ef(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([a, o]) => {
      ef(o, Ky(t, a), r, n);
    });
  });
}, Ky = (e, t) => {
  let r = e;
  return t.split(hd).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, e6 = (e) => e.isThemeGetter, t6 = (e, t) => t ? e.map(([r, n]) => {
  const i = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([o, s]) => [t + o, s])) : a);
  return [r, i];
}) : e, r6 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (a, o) => {
    r.set(a, o), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let o = r.get(a);
      if (o !== void 0)
        return o;
      if ((o = n.get(a)) !== void 0)
        return i(a, o), o;
    },
    set(a, o) {
      r.has(a) ? r.set(a, o) : i(a, o);
    }
  };
}, Px = "!", n6 = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, i = t[0], a = t.length, o = (s) => {
    const c = [];
    let u = 0, l = 0, f;
    for (let p = 0; p < s.length; p++) {
      let g = s[p];
      if (u === 0) {
        if (g === i && (n || s.slice(p, p + a) === t)) {
          c.push(s.slice(l, p)), l = p + a;
          continue;
        }
        if (g === "/") {
          f = p;
          continue;
        }
      }
      g === "[" ? u++ : g === "]" && u--;
    }
    const d = c.length === 0 ? s : s.substring(l), h = d.startsWith(Px), y = h ? d.substring(1) : d, v = f && f > l ? f - l : void 0;
    return {
      modifiers: c,
      hasImportantModifier: h,
      baseClassName: y,
      maybePostfixModifierPosition: v
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: o
  }) : o;
}, i6 = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, a6 = (e) => ({
  cache: r6(e.cacheSize),
  parseClassName: n6(e),
  ...Q8(e)
}), o6 = /\s+/, s6 = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = t, a = [], o = e.trim().split(o6);
  let s = "";
  for (let c = o.length - 1; c >= 0; c -= 1) {
    const u = o[c], {
      modifiers: l,
      hasImportantModifier: f,
      baseClassName: d,
      maybePostfixModifierPosition: h
    } = r(u);
    let y = !!h, v = n(y ? d.substring(0, h) : d);
    if (!v) {
      if (!y) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (v = n(d), !v) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      y = !1;
    }
    const p = i6(l).join(":"), g = f ? p + Px : p, x = g + v;
    if (a.includes(x))
      continue;
    a.push(x);
    const b = i(v, y);
    for (let S = 0; S < b.length; ++S) {
      const m = b[S];
      a.push(g + m);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function c6() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ax(t)) && (n && (n += " "), n += r);
  return n;
}
const Ax = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ax(e[n])) && (r && (r += " "), r += t);
  return r;
};
function u6(e, ...t) {
  let r, n, i, a = o;
  function o(c) {
    const u = t.reduce((l, f) => f(l), e());
    return r = a6(u), n = r.cache.get, i = r.cache.set, a = s, s(c);
  }
  function s(c) {
    const u = n(c);
    if (u)
      return u;
    const l = s6(c, r);
    return i(c, l), l;
  }
  return function() {
    return a(c6.apply(null, arguments));
  };
}
const De = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Tx = /^\[(?:([a-z-]+):)?(.+)\]$/i, l6 = /^\d+\/\d+$/, f6 = /* @__PURE__ */ new Set(["px", "full", "screen"]), d6 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, h6 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, p6 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, v6 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, y6 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Qt = (e) => Nn(e) || f6.has(e) || l6.test(e), mr = (e) => Ti(e, "length", _6), Nn = (e) => !!e && !Number.isNaN(Number(e)), su = (e) => Ti(e, "number", Nn), Ui = (e) => !!e && Number.isInteger(Number(e)), m6 = (e) => e.endsWith("%") && Nn(e.slice(0, -1)), le = (e) => Tx.test(e), gr = (e) => d6.test(e), g6 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), b6 = (e) => Ti(e, g6, Ex), x6 = (e) => Ti(e, "position", Ex), w6 = /* @__PURE__ */ new Set(["image", "url"]), O6 = (e) => Ti(e, w6, A6), S6 = (e) => Ti(e, "", P6), qi = () => !0, Ti = (e, t, r) => {
  const n = Tx.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, _6 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  h6.test(e) && !p6.test(e)
), Ex = () => !1, P6 = (e) => v6.test(e), A6 = (e) => y6.test(e), T6 = () => {
  const e = De("colors"), t = De("spacing"), r = De("blur"), n = De("brightness"), i = De("borderColor"), a = De("borderRadius"), o = De("borderSpacing"), s = De("borderWidth"), c = De("contrast"), u = De("grayscale"), l = De("hueRotate"), f = De("invert"), d = De("gap"), h = De("gradientColorStops"), y = De("gradientColorStopPositions"), v = De("inset"), p = De("margin"), g = De("opacity"), x = De("padding"), b = De("saturate"), S = De("scale"), m = De("sepia"), w = De("skew"), O = De("space"), _ = De("translate"), T = () => ["auto", "contain", "none"], I = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", le, t], $ = () => [le, t], k = () => ["", Qt, mr], D = () => ["auto", Nn, le], L = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], N = () => ["solid", "dashed", "dotted", "double", "none"], F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], U = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Y = () => ["", "0", le], M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], R = () => [Nn, le];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [qi],
      spacing: [Qt, mr],
      blur: ["none", "", gr, le],
      brightness: R(),
      borderColor: [e],
      borderRadius: ["none", "", "full", gr, le],
      borderSpacing: $(),
      borderWidth: k(),
      contrast: R(),
      grayscale: Y(),
      hueRotate: R(),
      invert: Y(),
      gap: $(),
      gradientColorStops: [e],
      gradientColorStopPositions: [m6, mr],
      inset: j(),
      margin: j(),
      opacity: R(),
      padding: $(),
      saturate: R(),
      scale: R(),
      sepia: Y(),
      skew: R(),
      space: $(),
      translate: $()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", le]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [gr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": M()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": M()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...L(), le]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: I()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": I()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": I()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Ui, le]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: j()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", le]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Y()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Y()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ui, le]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [qi]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ui, le]
        }, le]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [qi]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ui, le]
        }, le]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [d]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [d]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [d]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...U()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...U(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...U(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [p]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [p]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [p]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [p]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [p]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [p]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [p]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [p]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [p]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [O]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [O]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", le, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [le, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [le, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [gr]
        }, gr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [le, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [le, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [le, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [le, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", gr, mr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", su]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [qi]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", le]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Nn, su]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Qt, le]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", le]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", le]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [g]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [g]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...N(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Qt, mr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Qt, le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: $()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", le]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [g]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...L(), x6]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", b6]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, O6]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [g]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...N(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [g]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: N()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [i]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...N()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Qt, le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Qt, mr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: k()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [g]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Qt, mr]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", gr, S6]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [qi]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [g]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...F(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": F()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", gr, le]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [l]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [b]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [m]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [l]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [g]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [b]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [m]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", le]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: R()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", le]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: R()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", le]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [S]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ui, le]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [_]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [_]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [w]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [w]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", le]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": $()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": $()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": $()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": $()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": $()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": $()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": $()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": $()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": $()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": $()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": $()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": $()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": $()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": $()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": $()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": $()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": $()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": $()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", le]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Qt, mr, su]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, E6 = /* @__PURE__ */ u6(T6);
function pd(...e) {
  return E6(fe(e));
}
const jx = X8, vd = V.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ P.jsx(
  wx,
  {
    ref: r,
    className: pd(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
vd.displayName = wx.displayName;
const Wa = V.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ P.jsx(
  Ox,
  {
    ref: r,
    className: pd(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t
  }
));
Wa.displayName = Ox.displayName;
const za = V.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ P.jsx(
  Sx,
  {
    ref: r,
    className: pd(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
za.displayName = Sx.displayName;
const _n = [
  "hsl(239 84% 67%)",
  "hsl(330 81% 60%)",
  "hsl(142 71% 45%)",
  "hsl(38 92% 50%)",
  "hsl(199 89% 48%)",
  "hsl(262 83% 58%)",
  "hsl(25 95% 53%)",
  "hsl(174 72% 40%)",
  "hsl(346 77% 50%)",
  "hsl(217 91% 60%)",
  "hsl(47 96% 53%)",
  "hsl(280 67% 50%)"
], j6 = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "THB",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}), xo = (e) => j6.format(e), $6 = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric"
}), Vy = (e) => {
  const t = new Date(e);
  return Number.isNaN(t.getTime()) ? e : $6.format(t);
}, M6 = () => {
  const [e, t] = $r("all"), [r, n] = $r("wage"), [i, a] = $r(""), o = Z0(), { data: s, isLoading: c, error: u } = _o({
    queryKey: ["jobpost-summary"],
    queryFn: () => Po("/api/employer/jobpost-summary")
  }), l = e === "all" ? "/api/employer/recent-applications" : `/api/employer/recent-applications?jobpost_id=${e}`, { data: f, isLoading: d, error: h } = _o({
    queryKey: ["employer-applicants", e],
    queryFn: () => Po(l)
  }), y = (s || []).map((O) => ({
    name: O.job_title,
    value: O.total_agreed_wage,
    jobpost_id: O.jobpost_id,
    applicant_count: O.applicant_count
  })), v = y.reduce((O, _) => O + _.value, 0), p = y.reduce((O, _) => O + _.applicant_count, 0), g = (s || []).map((O, _) => ({
    key: O.jobpost_id,
    label: O.job_title,
    applicants: O.applicant_count,
    fill: _n[_ % _n.length]
  })), x = (s || []).find((O) => O.jobpost_id === e), b = (x == null ? void 0 : x.job_title) ?? e, S = (f || []).filter((O) => {
    const _ = i.toLowerCase();
    return (O.job_title || "").toLowerCase().includes(_) || (O.applicant_name || "").toLowerCase().includes(_) || String(O.job_seeker_id).includes(_);
  }), m = (O, _) => {
    y[_] && t(y[_].jobpost_id);
  }, w = (O, _) => {
    g[_] && t((T) => T === g[_].key ? "all" : g[_].key);
  };
  return /* @__PURE__ */ P.jsxs("div", { className: "space-y-4 sm:space-y-6", children: [
    /* @__PURE__ */ P.jsx("div", { className: "overflow-hidden rounded-xl border border-border bg-card shadow-sm", children: /* @__PURE__ */ P.jsxs(
      jx,
      {
        value: r,
        onValueChange: (O) => n(O),
        className: "w-full",
        children: [
          /* @__PURE__ */ P.jsx("div", { className: "border-b border-border/70 bg-gradient-to-r from-primary/5 via-background to-success/5 px-4 py-4 sm:px-5", children: /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between", children: [
            /* @__PURE__ */ P.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ P.jsxs("div", { children: [
                /* @__PURE__ */ P.jsx("h3", { className: "font-display text-lg font-semibold text-card-foreground", children: "Jobpost Insights" }),
                /* @__PURE__ */ P.jsx("p", { className: "text-sm text-muted-foreground", children: "Switch between applicants volume and agreed wage without leaving the same panel." })
              ] }),
              /* @__PURE__ */ P.jsxs(vd, { className: "grid h-auto w-full grid-cols-2 gap-1 rounded-xl bg-secondary/80 p-1 sm:w-[420px]", children: [
                /* @__PURE__ */ P.jsx(
                  Wa,
                  {
                    value: "applicants",
                    className: "min-h-[2.75rem] rounded-lg px-4 py-2 text-xs font-semibold leading-tight sm:text-sm",
                    children: "Applicants by Jobpost"
                  }
                ),
                /* @__PURE__ */ P.jsx(
                  Wa,
                  {
                    value: "wage",
                    className: "min-h-[2.75rem] rounded-lg px-4 py-2 text-xs font-semibold leading-tight sm:text-sm",
                    children: "Agreed Wage by Jobpost"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ P.jsxs("div", { className: "flex flex-wrap items-center gap-2 lg:justify-end", children: [
              /* @__PURE__ */ P.jsxs("div", { className: "rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm", children: [
                y.length,
                " jobposts"
              ] }),
              /* @__PURE__ */ P.jsxs("div", { className: "rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm", children: [
                p,
                " applicants"
              ] }),
              /* @__PURE__ */ P.jsxs("div", { className: "rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm", children: [
                xo(v),
                " total wage"
              ] }),
              e !== "all" && /* @__PURE__ */ P.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => t("all"),
                  className: "rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/15",
                  children: [
                    "Reset filter: ",
                    b
                  ]
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ P.jsxs(za, { value: "applicants", className: "mt-0 p-4 sm:p-5", children: [
            c && /* @__PURE__ */ P.jsx("p", { className: "text-sm text-muted-foreground", children: "Loading..." }),
            u && !c && /* @__PURE__ */ P.jsx("p", { className: "text-sm text-destructive", children: "Unable to load applicants chart" }),
            !c && !u && g.length === 0 && /* @__PURE__ */ P.jsx("p", { className: "text-sm text-muted-foreground", children: "No data" }),
            !c && !u && g.length > 0 && /* @__PURE__ */ P.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between", children: [
                /* @__PURE__ */ P.jsxs("div", { children: [
                  /* @__PURE__ */ P.jsx("h4", { className: "font-display font-semibold text-card-foreground", children: "Applicants by Jobpost" }),
                  /* @__PURE__ */ P.jsx("p", { className: "text-sm text-muted-foreground", children: "Click a bar to filter the applicants table below." })
                ] }),
                /* @__PURE__ */ P.jsx("div", { className: "text-xs text-muted-foreground", children: e === "all" ? "Showing all jobposts" : `Selected: ${b}` })
              ] }),
              /* @__PURE__ */ P.jsx("div", { className: "rounded-xl border border-border/70 bg-background/70 p-3 sm:p-4", children: /* @__PURE__ */ P.jsx("div", { className: "h-[260px] sm:h-[320px] lg:h-[340px]", children: /* @__PURE__ */ P.jsx(Qh, { width: "100%", height: "100%", children: /* @__PURE__ */ P.jsxs(y8, { data: g, margin: { top: 8, left: 8, right: 8, bottom: 0 }, children: [
                /* @__PURE__ */ P.jsx(D0, { strokeDasharray: "3 3", stroke: "hsl(220 13% 91%)" }),
                /* @__PURE__ */ P.jsx(
                  hc,
                  {
                    dataKey: "label",
                    tick: { fill: "hsl(220 9% 46%)", fontSize: 11 },
                    interval: 0,
                    height: 40,
                    tickFormatter: (O) => O
                  }
                ),
                /* @__PURE__ */ P.jsx(pc, { tick: { fill: "hsl(220 9% 46%)", fontSize: 11 }, allowDecimals: !1 }),
                /* @__PURE__ */ P.jsx(
                  Nt,
                  {
                    formatter: (O, _, T) => {
                      var I;
                      return [
                        `${O} applicants`,
                        ((I = T.payload) == null ? void 0 : I.label) ?? "Jobpost"
                      ];
                    }
                  }
                ),
                /* @__PURE__ */ P.jsx(yn, { dataKey: "applicants", radius: [6, 6, 0, 0], onClick: w, style: { cursor: "pointer" }, children: g.map((O) => /* @__PURE__ */ P.jsx(
                  fa,
                  {
                    fill: O.fill,
                    opacity: e === "all" || e === O.key ? 1 : 0.35,
                    stroke: e === O.key ? "hsl(220 26% 14%)" : "transparent",
                    strokeWidth: e === O.key ? 2 : 0
                  },
                  O.key
                )) })
              ] }) }) }) })
            ] })
          ] }),
          /* @__PURE__ */ P.jsxs(za, { value: "wage", className: "mt-0 p-4 sm:p-5", children: [
            c && /* @__PURE__ */ P.jsx("p", { className: "text-sm text-muted-foreground", children: "Loading..." }),
            u && !c && /* @__PURE__ */ P.jsx("p", { className: "text-sm text-destructive", children: "Unable to load chart data" }),
            !c && !u && y.length === 0 && /* @__PURE__ */ P.jsx("p", { className: "text-sm text-muted-foreground", children: "No data" }),
            !c && !u && y.length > 0 && /* @__PURE__ */ P.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between", children: [
                /* @__PURE__ */ P.jsxs("div", { children: [
                  /* @__PURE__ */ P.jsx("h4", { className: "font-display font-semibold text-card-foreground", children: "Agreed Wage by Jobpost" }),
                  /* @__PURE__ */ P.jsx("p", { className: "text-sm text-muted-foreground", children: "Click a slice or list item to focus the applicants table on one jobpost." })
                ] }),
                /* @__PURE__ */ P.jsx("div", { className: "text-xs text-muted-foreground", children: e === "all" ? "Showing all jobposts" : `Selected: ${b}` })
              ] }),
              /* @__PURE__ */ P.jsxs("div", { className: "grid gap-4 rounded-xl border border-border/70 bg-background/70 p-3 sm:p-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,320px)] lg:items-start", children: [
                /* @__PURE__ */ P.jsx("div", { className: "h-[260px] sm:h-[320px] lg:h-[360px]", children: /* @__PURE__ */ P.jsx(Qh, { width: "100%", height: "100%", children: /* @__PURE__ */ P.jsxs(m8, { children: [
                  /* @__PURE__ */ P.jsx(
                    vr,
                    {
                      data: y,
                      cx: "50%",
                      cy: "50%",
                      outerRadius: o ? 84 : 120,
                      dataKey: "value",
                      onClick: m,
                      style: { cursor: "pointer" },
                      label: !1,
                      labelLine: !1,
                      paddingAngle: y.length > 1 ? 1 : 0,
                      children: y.map((O, _) => /* @__PURE__ */ P.jsx(
                        fa,
                        {
                          fill: _n[_ % _n.length],
                          opacity: e === "all" || e === O.jobpost_id ? 1 : 0.3,
                          stroke: e === O.jobpost_id ? "hsl(220 26% 14%)" : "hsl(0 0% 100%)",
                          strokeWidth: e === O.jobpost_id ? 3 : 1
                        },
                        O.jobpost_id
                      ))
                    }
                  ),
                  /* @__PURE__ */ P.jsx(
                    Nt,
                    {
                      formatter: (O, _, T) => {
                        var I;
                        return [
                          `${xo(Number(O))} (${((I = T.payload) == null ? void 0 : I.applicant_count) ?? 0} applicants)`,
                          "Agreed wage"
                        ];
                      }
                    }
                  )
                ] }) }) }),
                /* @__PURE__ */ P.jsx("div", { className: "grid gap-2 sm:grid-cols-2 lg:max-h-[360px] lg:grid-cols-1 lg:overflow-y-auto lg:pr-1", children: y.map((O, _) => {
                  const T = e === O.jobpost_id, I = v > 0 ? Math.round(O.value / v * 100) : 0;
                  return /* @__PURE__ */ P.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => t((j) => j === O.jobpost_id ? "all" : O.jobpost_id),
                      className: `rounded-lg border px-3 py-2 text-left transition-colors ${T ? "border-primary bg-primary/5" : "border-border hover:bg-accent/50"}`,
                      children: /* @__PURE__ */ P.jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ P.jsx(
                          "span",
                          {
                            className: "mt-1 h-2.5 w-2.5 shrink-0 rounded-full",
                            style: { backgroundColor: _n[_ % _n.length] }
                          }
                        ),
                        /* @__PURE__ */ P.jsxs("div", { className: "min-w-0 flex-1", children: [
                          /* @__PURE__ */ P.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                            /* @__PURE__ */ P.jsx("span", { className: "break-words text-sm leading-snug text-card-foreground", children: O.name }),
                            /* @__PURE__ */ P.jsxs("span", { className: "shrink-0 text-xs font-medium text-muted-foreground", children: [
                              I,
                              "%"
                            ] })
                          ] }),
                          /* @__PURE__ */ P.jsxs("div", { className: "mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground", children: [
                            /* @__PURE__ */ P.jsxs("span", { children: [
                              O.applicant_count,
                              " applicants"
                            ] }),
                            /* @__PURE__ */ P.jsx("span", { children: xo(O.value) })
                          ] })
                        ] })
                      ] })
                    },
                    O.jobpost_id
                  );
                }) })
              ] })
            ] })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ P.jsxs("div", { className: "rounded-lg border border-border bg-card p-4 shadow-sm sm:p-5", children: [
      /* @__PURE__ */ P.jsxs("div", { className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ P.jsxs(
          "select",
          {
            value: e,
            onChange: (O) => t(O.target.value),
            className: "h-10 w-full rounded-lg bg-secondary px-3 text-sm text-foreground outline-none ring-0 transition-shadow focus:ring-2 focus:ring-ring sm:w-72",
            children: [
              /* @__PURE__ */ P.jsx("option", { value: "all", children: "All Jobposts" }),
              (s || []).map((O) => /* @__PURE__ */ P.jsxs("option", { value: O.jobpost_id, children: [
                O.job_title,
                " (",
                xo(O.total_agreed_wage),
                ")"
              ] }, O.jobpost_id))
            ]
          }
        ),
        /* @__PURE__ */ P.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ P.jsx(pw, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ P.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search applicant or job...",
              value: i,
              onChange: (O) => a(O.target.value),
              className: "h-10 w-full rounded-lg bg-secondary pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-shadow focus:ring-2 focus:ring-ring"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ P.jsxs("h3", { className: "mb-3 font-display font-semibold text-card-foreground", children: [
        "Applicants ",
        e !== "all" ? `- ${b}` : "- All"
      ] }),
      /* @__PURE__ */ P.jsx("div", { className: "hidden overflow-x-auto md:block", children: /* @__PURE__ */ P.jsxs("table", { className: "w-full table-fixed text-sm", children: [
        /* @__PURE__ */ P.jsx("thead", { children: /* @__PURE__ */ P.jsxs("tr", { className: "border-b border-border", children: [
          /* @__PURE__ */ P.jsx("th", { className: "w-[28%] py-2 pr-4 text-left font-medium text-muted-foreground", children: "Applicant Name" }),
          /* @__PURE__ */ P.jsx("th", { className: "w-[24%] py-2 pr-4 text-left font-medium text-muted-foreground", children: "Applied For" }),
          /* @__PURE__ */ P.jsx("th", { className: "w-[22%] py-2 pr-4 text-left font-medium text-muted-foreground", children: "Province" }),
          /* @__PURE__ */ P.jsx("th", { className: "w-[26%] py-2 text-left font-medium text-muted-foreground", children: "Applied" })
        ] }) }),
        /* @__PURE__ */ P.jsxs("tbody", { children: [
          d && /* @__PURE__ */ P.jsx("tr", { children: /* @__PURE__ */ P.jsx("td", { colSpan: 4, className: "py-6 text-center text-muted-foreground", children: "Loading..." }) }),
          h && !d && /* @__PURE__ */ P.jsx("tr", { children: /* @__PURE__ */ P.jsx("td", { colSpan: 4, className: "py-6 text-center text-destructive", children: "Unable to load applicants" }) }),
          !d && !h && S.map((O) => /* @__PURE__ */ P.jsxs("tr", { className: "border-b border-border last:border-0 transition-colors hover:bg-accent/50", children: [
            /* @__PURE__ */ P.jsx("td", { className: "py-3 pr-4 font-medium text-card-foreground", children: O.applicant_name }),
            /* @__PURE__ */ P.jsx("td", { className: "py-3 pr-4 text-muted-foreground", children: O.job_title }),
            /* @__PURE__ */ P.jsx("td", { className: "py-3 pr-4 text-muted-foreground", children: O.province }),
            /* @__PURE__ */ P.jsx("td", { className: "py-3 text-muted-foreground", children: Vy(O.applied_at) })
          ] }, O.job_application_id)),
          !d && !h && S.length === 0 && /* @__PURE__ */ P.jsx("tr", { children: /* @__PURE__ */ P.jsx("td", { colSpan: 4, className: "py-8 text-center text-muted-foreground", children: "No applicants found" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ P.jsxs("div", { className: "space-y-3 md:hidden", children: [
        d && /* @__PURE__ */ P.jsx("p", { className: "text-center text-muted-foreground", children: "Loading..." }),
        h && !d && /* @__PURE__ */ P.jsx("p", { className: "text-center text-destructive", children: "Unable to load applicants" }),
        !d && !h && S.map((O) => /* @__PURE__ */ P.jsxs("div", { className: "space-y-3 rounded-lg border border-border p-4", children: [
          /* @__PURE__ */ P.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ P.jsx("p", { className: "font-medium text-card-foreground", children: O.applicant_name }),
            /* @__PURE__ */ P.jsx("p", { className: "break-words text-sm text-muted-foreground", children: O.job_title })
          ] }),
          /* @__PURE__ */ P.jsxs("div", { className: "grid gap-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ P.jsxs("p", { children: [
              "Province: ",
              O.province || "-"
            ] }),
            /* @__PURE__ */ P.jsxs("p", { children: [
              "Applied: ",
              Vy(O.applied_at)
            ] })
          ] })
        ] }, O.job_application_id)),
        !d && !h && S.length === 0 && /* @__PURE__ */ P.jsx("p", { className: "py-8 text-center text-muted-foreground", children: "No applicants found" })
      ] })
    ] })
  ] });
};
function Wt(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function ln(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const $x = 6048e5, C6 = 864e5, Mx = 6e4, Cx = 36e5;
let I6 = {};
function mc() {
  return I6;
}
function Ua(e, t) {
  var s, c, u, l;
  const r = mc(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? r.weekStartsOn ?? ((l = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : l.weekStartsOn) ?? 0, i = Wt(e), a = i.getDay(), o = (a < n ? 7 : 0) + a - n;
  return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
function Es(e) {
  return Ua(e, { weekStartsOn: 1 });
}
function Ix(e) {
  const t = Wt(e), r = t.getFullYear(), n = ln(e, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const i = Es(n), a = ln(e, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const o = Es(a);
  return t.getTime() >= i.getTime() ? r + 1 : t.getTime() >= o.getTime() ? r : r - 1;
}
function Xy(e) {
  const t = Wt(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Qy(e) {
  const t = Wt(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function k6(e, t) {
  const r = Xy(e), n = Xy(t), i = +r - Qy(r), a = +n - Qy(n);
  return Math.round((i - a) / C6);
}
function N6(e) {
  const t = Ix(e), r = ln(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), Es(r);
}
function R6(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function D6(e) {
  if (!R6(e) && typeof e != "number")
    return !1;
  const t = Wt(e);
  return !isNaN(Number(t));
}
function L6(e) {
  const t = Wt(e), r = ln(e, 0);
  return r.setFullYear(t.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const B6 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, F6 = (e, t, r) => {
  let n;
  const i = B6[e];
  return typeof i == "string" ? n = i : t === 1 ? n = i.one : n = i.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function cu(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const W6 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, z6 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, U6 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, q6 = {
  date: cu({
    formats: W6,
    defaultWidth: "full"
  }),
  time: cu({
    formats: z6,
    defaultWidth: "full"
  }),
  dateTime: cu({
    formats: U6,
    defaultWidth: "full"
  })
}, G6 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Y6 = (e, t, r, n) => G6[e];
function Gi(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let i;
    if (n === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, s = r != null && r.width ? String(r.width) : o;
      i = e.formattingValues[s] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, s = r != null && r.width ? String(r.width) : e.defaultWidth;
      i = e.values[s] || e.values[o];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[a];
  };
}
const H6 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, K6 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, V6 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, X6 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Q6 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, J6 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Z6 = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, eG = {
  ordinalNumber: Z6,
  era: Gi({
    values: H6,
    defaultWidth: "wide"
  }),
  quarter: Gi({
    values: K6,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Gi({
    values: V6,
    defaultWidth: "wide"
  }),
  day: Gi({
    values: X6,
    defaultWidth: "wide"
  }),
  dayPeriod: Gi({
    values: Q6,
    defaultWidth: "wide",
    formattingValues: J6,
    defaultFormattingWidth: "wide"
  })
};
function Yi(e) {
  return (t, r = {}) => {
    const n = r.width, i = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const o = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? rG(s, (f) => f.test(o)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      tG(s, (f) => f.test(o))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(u)
    ) : u;
    const l = t.slice(o.length);
    return { value: u, rest: l };
  };
}
function tG(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function rG(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function nG(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const i = n[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    o = r.valueCallback ? r.valueCallback(o) : o;
    const s = t.slice(i.length);
    return { value: o, rest: s };
  };
}
const iG = /^(\d+)(th|st|nd|rd)?/i, aG = /\d+/i, oG = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, sG = {
  any: [/^b/i, /^(a|c)/i]
}, cG = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, uG = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, lG = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, fG = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, dG = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, hG = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, pG = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, vG = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, yG = {
  ordinalNumber: nG({
    matchPattern: iG,
    parsePattern: aG,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Yi({
    matchPatterns: oG,
    defaultMatchWidth: "wide",
    parsePatterns: sG,
    defaultParseWidth: "any"
  }),
  quarter: Yi({
    matchPatterns: cG,
    defaultMatchWidth: "wide",
    parsePatterns: uG,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Yi({
    matchPatterns: lG,
    defaultMatchWidth: "wide",
    parsePatterns: fG,
    defaultParseWidth: "any"
  }),
  day: Yi({
    matchPatterns: dG,
    defaultMatchWidth: "wide",
    parsePatterns: hG,
    defaultParseWidth: "any"
  }),
  dayPeriod: Yi({
    matchPatterns: pG,
    defaultMatchWidth: "any",
    parsePatterns: vG,
    defaultParseWidth: "any"
  })
}, mG = {
  code: "en-US",
  formatDistance: F6,
  formatLong: q6,
  formatRelative: Y6,
  localize: eG,
  match: yG,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function gG(e) {
  const t = Wt(e);
  return k6(t, L6(t)) + 1;
}
function bG(e) {
  const t = Wt(e), r = +Es(t) - +N6(t);
  return Math.round(r / $x) + 1;
}
function kx(e, t) {
  var l, f, d, h;
  const r = Wt(e), n = r.getFullYear(), i = mc(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : f.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((h = (d = i.locale) == null ? void 0 : d.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, o = ln(e, 0);
  o.setFullYear(n + 1, 0, a), o.setHours(0, 0, 0, 0);
  const s = Ua(o, t), c = ln(e, 0);
  c.setFullYear(n, 0, a), c.setHours(0, 0, 0, 0);
  const u = Ua(c, t);
  return r.getTime() >= s.getTime() ? n + 1 : r.getTime() >= u.getTime() ? n : n - 1;
}
function xG(e, t) {
  var s, c, u, l;
  const r = mc(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((l = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, i = kx(e, t), a = ln(e, 0);
  return a.setFullYear(i, 0, n), a.setHours(0, 0, 0, 0), Ua(a, t);
}
function wG(e, t) {
  const r = Wt(e), n = +Ua(r, t) - +xG(r, t);
  return Math.round(n / $x) + 1;
}
function Ee(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const br = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return Ee(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : Ee(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Ee(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Ee(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Ee(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Ee(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Ee(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), i = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return Ee(i, t.length);
  }
}, Pn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Jy = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), i = n > 0 ? n : 1 - n;
      return r.ordinalNumber(i, { unit: "year" });
    }
    return br.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const i = kx(e, n), a = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const o = a % 100;
      return Ee(o, 2);
    }
    return t === "Yo" ? r.ordinalNumber(a, { unit: "year" }) : Ee(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = Ix(e);
    return Ee(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return Ee(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return Ee(n, 2);
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return Ee(n, 2);
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return br.M(e, t);
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return Ee(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const i = wG(e, n);
    return t === "wo" ? r.ordinalNumber(i, { unit: "week" }) : Ee(i, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = bG(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : Ee(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : br.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = gG(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : Ee(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const i = e.getDay(), a = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return Ee(a, 2);
      case "eo":
        return r.ordinalNumber(a, { unit: "day" });
      case "eee":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const i = e.getDay(), a = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return Ee(a, t.length);
      case "co":
        return r.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return r.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), i = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(i);
      case "ii":
        return Ee(i, t.length);
      case "io":
        return r.ordinalNumber(i, { unit: "day" });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let i;
    switch (n === 12 ? i = Pn.noon : n === 0 ? i = Pn.midnight : i = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let i;
    switch (n >= 17 ? i = Pn.evening : n >= 12 ? i = Pn.afternoon : n >= 4 ? i = Pn.morning : i = Pn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return br.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : br.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : Ee(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : Ee(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : br.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : br.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return br.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return em(n);
      case "XXXX":
      case "XX":
        return Gr(n);
      case "XXXXX":
      case "XXX":
      default:
        return Gr(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return em(n);
      case "xxxx":
      case "xx":
        return Gr(n);
      case "xxxxx":
      case "xxx":
      default:
        return Gr(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Zy(n, ":");
      case "OOOO":
      default:
        return "GMT" + Gr(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Zy(n, ":");
      case "zzzz":
      default:
        return "GMT" + Gr(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(e.getTime() / 1e3);
    return Ee(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    const n = e.getTime();
    return Ee(n, t.length);
  }
};
function Zy(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), i = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? r + String(i) : r + String(i) + t + Ee(a, 2);
}
function em(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ee(Math.abs(e) / 60, 2) : Gr(e, t);
}
function Gr(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), i = Ee(Math.trunc(n / 60), 2), a = Ee(n % 60, 2);
  return r + i + t + a;
}
const tm = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Nx = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, OG = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], i = r[2];
  if (!i)
    return tm(e, t);
  let a;
  switch (n) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", tm(n, t)).replace("{{time}}", Nx(i, t));
}, SG = {
  p: Nx,
  P: OG
}, _G = /^D+$/, PG = /^Y+$/, AG = ["D", "DD", "YY", "YYYY"];
function TG(e) {
  return _G.test(e);
}
function EG(e) {
  return PG.test(e);
}
function jG(e, t, r) {
  const n = $G(e, t, r);
  if (console.warn(n), AG.includes(e)) throw new RangeError(n);
}
function $G(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const MG = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, CG = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, IG = /^'([^]*?)'?$/, kG = /''/g, NG = /[a-zA-Z]/;
function Rx(e, t, r) {
  var l, f, d, h;
  const n = mc(), i = n.locale ?? mG, a = n.firstWeekContainsDate ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = n.weekStartsOn ?? ((h = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : h.weekStartsOn) ?? 0, s = Wt(e);
  if (!D6(s))
    throw new RangeError("Invalid time value");
  let c = t.match(CG).map((y) => {
    const v = y[0];
    if (v === "p" || v === "P") {
      const p = SG[v];
      return p(y, i.formatLong);
    }
    return y;
  }).join("").match(MG).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const v = y[0];
    if (v === "'")
      return { isToken: !1, value: RG(y) };
    if (Jy[v])
      return { isToken: !0, value: y };
    if (v.match(NG))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + v + "`"
      );
    return { isToken: !1, value: y };
  });
  i.localize.preprocessor && (c = i.localize.preprocessor(s, c));
  const u = {
    firstWeekContainsDate: a,
    weekStartsOn: o,
    locale: i
  };
  return c.map((y) => {
    if (!y.isToken) return y.value;
    const v = y.value;
    (EG(v) || TG(v)) && jG(v, t, String(e));
    const p = Jy[v[0]];
    return p(s, v, i.localize, u);
  }).join("");
}
function RG(e) {
  const t = e.match(IG);
  return t ? t[1].replace(kG, "'") : e;
}
function qa(e, t) {
  const n = FG(e);
  let i;
  if (n.date) {
    const c = WG(n.date, 2);
    i = zG(c.restDateString, c.year);
  }
  if (!i || isNaN(i.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  const a = i.getTime();
  let o = 0, s;
  if (n.time && (o = UG(n.time), isNaN(o)))
    return /* @__PURE__ */ new Date(NaN);
  if (n.timezone) {
    if (s = qG(n.timezone), isNaN(s))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    const c = new Date(a + o), u = /* @__PURE__ */ new Date(0);
    return u.setFullYear(
      c.getUTCFullYear(),
      c.getUTCMonth(),
      c.getUTCDate()
    ), u.setHours(
      c.getUTCHours(),
      c.getUTCMinutes(),
      c.getUTCSeconds(),
      c.getUTCMilliseconds()
    ), u;
  }
  return new Date(a + o + s);
}
const wo = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, DG = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, LG = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, BG = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function FG(e) {
  const t = {}, r = e.split(wo.dateTimeDelimiter);
  let n;
  if (r.length > 2)
    return t;
  if (/:/.test(r[0]) ? n = r[0] : (t.date = r[0], n = r[1], wo.timeZoneDelimiter.test(t.date) && (t.date = e.split(wo.timeZoneDelimiter)[0], n = e.substr(
    t.date.length,
    e.length
  ))), n) {
    const i = wo.timezone.exec(n);
    i ? (t.time = n.replace(i[1], ""), t.timezone = i[1]) : t.time = n;
  }
  return t;
}
function WG(e, t) {
  const r = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"
  ), n = e.match(r);
  if (!n) return { year: NaN, restDateString: "" };
  const i = n[1] ? parseInt(n[1]) : null, a = n[2] ? parseInt(n[2]) : null;
  return {
    year: a === null ? i : a * 100,
    restDateString: e.slice((n[1] || n[2]).length)
  };
}
function zG(e, t) {
  if (t === null) return /* @__PURE__ */ new Date(NaN);
  const r = e.match(DG);
  if (!r) return /* @__PURE__ */ new Date(NaN);
  const n = !!r[4], i = Hi(r[1]), a = Hi(r[2]) - 1, o = Hi(r[3]), s = Hi(r[4]), c = Hi(r[5]) - 1;
  if (n)
    return VG(t, s, c) ? GG(t, s, c) : /* @__PURE__ */ new Date(NaN);
  {
    const u = /* @__PURE__ */ new Date(0);
    return !HG(t, a, o) || !KG(t, i) ? /* @__PURE__ */ new Date(NaN) : (u.setUTCFullYear(t, a, Math.max(i, o)), u);
  }
}
function Hi(e) {
  return e ? parseInt(e) : 1;
}
function UG(e) {
  const t = e.match(LG);
  if (!t) return NaN;
  const r = uu(t[1]), n = uu(t[2]), i = uu(t[3]);
  return XG(r, n, i) ? r * Cx + n * Mx + i * 1e3 : NaN;
}
function uu(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function qG(e) {
  if (e === "Z") return 0;
  const t = e.match(BG);
  if (!t) return 0;
  const r = t[1] === "+" ? -1 : 1, n = parseInt(t[2]), i = t[3] && parseInt(t[3]) || 0;
  return QG(n, i) ? r * (n * Cx + i * Mx) : NaN;
}
function GG(e, t, r) {
  const n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  const i = n.getUTCDay() || 7, a = (t - 1) * 7 + r + 1 - i;
  return n.setUTCDate(n.getUTCDate() + a), n;
}
const YG = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Dx(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function HG(e, t, r) {
  return t >= 0 && t <= 11 && r >= 1 && r <= (YG[t] || (Dx(e) ? 29 : 28));
}
function KG(e, t) {
  return t >= 1 && t <= (Dx(e) ? 366 : 365);
}
function VG(e, t, r) {
  return t >= 1 && t <= 53 && r >= 0 && r <= 6;
}
function XG(e, t, r) {
  return e === 24 ? t === 0 && r === 0 : r >= 0 && r < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function QG(e, t) {
  return t >= 0 && t <= 59;
}
const rm = 24 * 60 * 60 * 1e3, JG = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1
}), ZG = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "THB",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
}), tf = (e, t, r) => Math.min(r, Math.max(t, e)), nm = (e) => ZG.format(e), Jt = (e, t) => Rx(e, t ? "d MMM yy" : "d MMM yyyy"), im = (e) => !Number.isNaN(e.getTime());
function eY(e) {
  const t = e <= 0 ? 1 : e, n = 10 ** Math.floor(Math.log10(t)), i = t / n;
  return i <= 1 ? n : i <= 2 ? 2 * n : i <= 5 ? 5 * n : 10 * n;
}
function tY(e, t, r) {
  if (e === t) {
    const o = e === 0 ? 1 : Math.abs(e) * 0.2;
    e -= o, t += o;
  }
  const n = eY((t - e) / Math.max(1, r - 1)), i = Math.floor(e / n) * n, a = Math.ceil(t / n) * n;
  return { domainMin: i, domainMax: a, step: n };
}
function rY(e, t, r) {
  const n = [];
  for (let i = e; i <= t + r / 2; i += r)
    n.push(Number(i.toFixed(10)));
  return n;
}
function nY(e, t, r) {
  return e >= t ? [e] : Array.from({ length: r }, (n, i) => {
    const a = r === 1 ? 0 : i / (r - 1);
    return e + (t - e) * a;
  });
}
function iY(e, t, r, n) {
  const a = [...e].sort((c, u) => c.desiredY - u.desiredY).map((c) => ({ ...c, y: c.desiredY }));
  for (let c = 0; c < a.length; c += 1) {
    const u = c === 0 ? t : a[c - 1].y + n;
    a[c].y = Math.max(a[c].y, u);
  }
  const o = a[a.length - 1];
  if (o && o.y > r) {
    const c = o.y - r;
    for (const u of a)
      u.y -= c;
  }
  for (let c = a.length - 2; c >= 0; c -= 1)
    a[c].y = Math.min(a[c].y, a[c + 1].y - n);
  const s = a[0];
  if (s && s.y < t) {
    const c = t - s.y;
    for (const u of a)
      u.y += c;
  }
  return new Map(a.map((c) => [c.id, tf(c.y, t, r)]));
}
const aY = ({
  data: e,
  selectedJobpostId: t,
  onSelectJobpost: r
}) => {
  var d;
  const n = Z0(), [i, a] = $r(null), o = ia(() => {
    const h = e.map((M) => {
      const R = qa(M.start), W = qa(M.end);
      if (!im(R) || !im(W))
        return null;
      const q = R.getTime(), J = Math.max(W.getTime(), q + rm);
      return {
        ...M,
        startDate: R,
        endDate: W,
        startMs: q,
        endMs: J
      };
    }).filter((M) => M !== null).sort((M, R) => M.startMs - R.startMs || M.wage - R.wage);
    if (!h.length)
      return null;
    const y = Math.min(...h.map((M) => M.startMs)), v = Math.max(...h.map((M) => M.endMs)), p = y === v ? v + rm : v, g = Math.min(...h.map((M) => M.wage)), x = Math.max(...h.map((M) => M.wage)), b = x === g ? Math.max(1, x * 0.2) : (x - g) * 0.18, { domainMin: S, domainMax: m, step: w } = tY(Math.max(0, g - b), x + b, 5), O = n ? Math.max(760, h.length * 140) : Math.max(960, h.length * 150), _ = Math.max(n ? 340 : 420, h.length * (n ? 66 : 74)), T = {
      top: 24,
      right: 24,
      bottom: 96,
      left: n ? 76 : 96
    }, I = O - T.left - T.right, j = _ - T.top - T.bottom, $ = n ? 16 : 18, k = Math.max($ + 14, Math.min(n ? 52 : 60, j / Math.max(1, h.length))), D = T.top + $ / 2, L = T.top + j - $ / 2, N = (M) => T.left + (M - y) / (p - y) * I, F = (M) => T.top + j - (M - S) / (m - S) * j, U = iY(
      h.map((M) => ({ id: M.jobpostId, desiredY: F(M.wage) })),
      D,
      L,
      k
    );
    return {
      plotted: h.map((M) => {
        const R = N(M.startMs), W = N(M.endMs), q = Math.max(W - R, n ? 14 : 18), J = Math.min(R, T.left + I - q), te = U.get(M.jobpostId) ?? F(M.wage);
        return {
          ...M,
          desiredY: F(M.wage),
          centerY: te,
          startX: J,
          endX: J + q,
          rectY: te - $ / 2,
          rectHeight: $
        };
      }),
      chartWidth: O,
      chartHeight: _,
      margins: T,
      innerWidth: I,
      innerHeight: j,
      axisY: T.top + j,
      dateTicks: nY(y, p, n ? 4 : 5),
      wageTicks: rY(S, m, w),
      xScale: N,
      yScale: F
    };
  }, [e, n]);
  if (!o)
    return null;
  const s = i ?? t ?? ((d = o.plotted[0]) == null ? void 0 : d.jobpostId) ?? null, c = o.plotted.find((h) => h.jobpostId === s) ?? o.plotted[0], u = c.endX - c.startX < (n ? 140 : 190), l = tf(c.startX, o.margins.left, o.margins.left + o.innerWidth - 70), f = tf(c.endX, o.margins.left + 70, o.margins.left + o.innerWidth);
  return /* @__PURE__ */ P.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ P.jsxs("div", { className: "grid gap-3 sm:grid-cols-3", children: [
      /* @__PURE__ */ P.jsxs("div", { className: "rounded-lg bg-secondary/60 p-3", children: [
        /* @__PURE__ */ P.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground", children: "Selected Job" }),
        /* @__PURE__ */ P.jsx("p", { className: "mt-2 text-sm font-semibold text-card-foreground", children: c.label })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: "rounded-lg bg-secondary/60 p-3", children: [
        /* @__PURE__ */ P.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground", children: "Range" }),
        /* @__PURE__ */ P.jsxs("p", { className: "mt-2 text-sm font-semibold text-card-foreground", children: [
          Jt(c.startDate, n),
          " - ",
          Jt(c.endDate, n)
        ] })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: "rounded-lg bg-secondary/60 p-3", children: [
        /* @__PURE__ */ P.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground", children: "Wage / Employments" }),
        /* @__PURE__ */ P.jsxs("p", { className: "mt-2 text-sm font-semibold text-card-foreground", children: [
          nm(c.wage),
          " / ",
          c.employmentCount,
          " hires"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ P.jsxs("div", { className: "grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start", children: [
      /* @__PURE__ */ P.jsx("div", { className: "overflow-x-auto pb-2", children: /* @__PURE__ */ P.jsx("div", { style: { minWidth: `${o.chartWidth}px` }, children: /* @__PURE__ */ P.jsxs("svg", { viewBox: `0 0 ${o.chartWidth} ${o.chartHeight}`, className: "h-auto w-full", children: [
        /* @__PURE__ */ P.jsx("defs", { children: /* @__PURE__ */ P.jsx("filter", { id: "quartile-bar-shadow", x: "-20%", y: "-20%", width: "140%", height: "140%", children: /* @__PURE__ */ P.jsx("feDropShadow", { dx: "0", dy: "8", stdDeviation: "8", floodColor: "#0f172a", floodOpacity: "0.08" }) }) }),
        /* @__PURE__ */ P.jsx(
          "rect",
          {
            x: o.margins.left,
            y: o.margins.top,
            width: o.innerWidth,
            height: o.innerHeight,
            rx: "18",
            fill: "hsl(var(--background))"
          }
        ),
        o.wageTicks.map((h) => {
          const y = o.yScale(h);
          return /* @__PURE__ */ P.jsxs("g", { children: [
            /* @__PURE__ */ P.jsx(
              "line",
              {
                x1: o.margins.left,
                y1: y,
                x2: o.margins.left + o.innerWidth,
                y2: y,
                stroke: "hsl(var(--border))",
                strokeDasharray: "4 6"
              }
            ),
            /* @__PURE__ */ P.jsx(
              "text",
              {
                x: o.margins.left - 12,
                y: y + 4,
                textAnchor: "end",
                fontSize: n ? 10 : 11,
                fill: "hsl(var(--muted-foreground))",
                children: JG.format(h)
              }
            )
          ] }, h);
        }),
        /* @__PURE__ */ P.jsx(
          "line",
          {
            x1: o.margins.left,
            y1: o.margins.top,
            x2: o.margins.left,
            y2: o.axisY,
            stroke: "hsl(var(--ring))",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ P.jsx(
          "line",
          {
            x1: o.margins.left,
            y1: o.axisY,
            x2: o.margins.left + o.innerWidth,
            y2: o.axisY,
            stroke: "hsl(var(--ring))",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ P.jsx(
          "text",
          {
            x: o.margins.left - (n ? 58 : 68),
            y: o.margins.top - 6,
            fontSize: n ? 11 : 12,
            fontWeight: "600",
            fill: "hsl(var(--ring))",
            children: "Agreed Wage"
          }
        ),
        /* @__PURE__ */ P.jsx(
          "text",
          {
            x: o.margins.left + o.innerWidth + 6,
            y: o.axisY + 6,
            fontSize: n ? 11 : 12,
            fontWeight: "600",
            fill: "hsl(var(--ring))",
            children: "Date"
          }
        ),
        /* @__PURE__ */ P.jsx(
          "line",
          {
            x1: o.margins.left,
            y1: c.centerY,
            x2: o.margins.left + o.innerWidth,
            y2: c.centerY,
            stroke: "hsl(var(--muted-foreground))",
            strokeDasharray: "8 8",
            opacity: "0.25"
          }
        ),
        o.plotted.map((h) => {
          const y = h.jobpostId === c.jobpostId;
          return /* @__PURE__ */ P.jsx(
            "g",
            {
              onMouseEnter: () => a(h.jobpostId),
              onMouseLeave: () => a(null),
              onClick: () => r(h.jobpostId),
              style: { cursor: "pointer" },
              children: /* @__PURE__ */ P.jsx(
                "rect",
                {
                  x: h.startX,
                  y: h.rectY,
                  width: h.endX - h.startX,
                  height: h.rectHeight,
                  rx: h.rectHeight / 2,
                  fill: h.color,
                  opacity: y ? 0.95 : 0.68,
                  stroke: y ? "hsl(var(--ring))" : "rgba(255,255,255,0.75)",
                  strokeWidth: y ? 2.5 : 1,
                  filter: "url(#quartile-bar-shadow)"
                }
              )
            },
            h.jobpostId
          );
        }),
        /* @__PURE__ */ P.jsx(
          "line",
          {
            x1: c.startX,
            y1: c.rectY + c.rectHeight,
            x2: c.startX,
            y2: o.axisY + 10,
            stroke: c.color,
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ P.jsx(
          "line",
          {
            x1: c.endX,
            y1: c.rectY + c.rectHeight,
            x2: c.endX,
            y2: o.axisY + 10,
            stroke: c.color,
            strokeWidth: "2"
          }
        ),
        o.dateTicks.map((h) => {
          const y = o.xScale(h);
          return /* @__PURE__ */ P.jsxs("g", { children: [
            /* @__PURE__ */ P.jsx(
              "line",
              {
                x1: y,
                y1: o.axisY,
                x2: y,
                y2: o.axisY + 8,
                stroke: "hsl(var(--ring))",
                strokeWidth: "1.5"
              }
            ),
            /* @__PURE__ */ P.jsx(
              "text",
              {
                x: y,
                y: o.axisY + 28,
                textAnchor: "middle",
                fontSize: n ? 10 : 11,
                fill: "hsl(var(--muted-foreground))",
                children: Jt(new Date(h), n)
              }
            )
          ] }, h);
        }),
        u ? /* @__PURE__ */ P.jsx(
          "text",
          {
            x: (c.startX + c.endX) / 2,
            y: o.axisY + 52,
            textAnchor: "middle",
            fontSize: n ? 10 : 11,
            fontWeight: "600",
            fill: c.color,
            children: `${Jt(c.startDate, n)} - ${Jt(c.endDate, n)}`
          }
        ) : /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
          /* @__PURE__ */ P.jsx(
            "text",
            {
              x: l,
              y: o.axisY + 52,
              textAnchor: "start",
              fontSize: n ? 10 : 11,
              fontWeight: "600",
              fill: c.color,
              children: Jt(c.startDate, n)
            }
          ),
          /* @__PURE__ */ P.jsx(
            "text",
            {
              x: f,
              y: o.axisY + 52,
              textAnchor: "end",
              fontSize: n ? 10 : 11,
              fontWeight: "600",
              fill: c.color,
              children: Jt(c.endDate, n)
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ P.jsx("div", { className: "grid gap-2 sm:grid-cols-2 xl:grid-cols-1", children: o.plotted.map((h) => {
        const y = h.jobpostId === c.jobpostId;
        return /* @__PURE__ */ P.jsx(
          "button",
          {
            type: "button",
            onClick: () => r(h.jobpostId),
            onMouseEnter: () => a(h.jobpostId),
            onMouseLeave: () => a(null),
            className: `rounded-lg border px-3 py-3 text-left transition-colors ${y ? "border-primary bg-primary/5" : "border-border hover:bg-accent/50"}`,
            children: /* @__PURE__ */ P.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ P.jsx(
                "span",
                {
                  className: "mt-1 h-2.5 w-2.5 shrink-0 rounded-full",
                  style: { backgroundColor: h.color }
                }
              ),
              /* @__PURE__ */ P.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ P.jsx("p", { className: "break-words text-sm font-medium text-card-foreground", children: h.label }),
                /* @__PURE__ */ P.jsxs("div", { className: "mt-1 grid gap-1 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ P.jsxs("p", { children: [
                    Jt(h.startDate, n),
                    " - ",
                    Jt(h.endDate, n)
                  ] }),
                  /* @__PURE__ */ P.jsxs("p", { children: [
                    nm(h.wage),
                    " / ",
                    h.employmentCount,
                    " hires"
                  ] })
                ] })
              ] })
            ] })
          },
          h.jobpostId
        );
      }) })
    ] })
  ] });
}, am = [
  "hsl(355 92% 72%)",
  "hsl(276 72% 67%)",
  "hsl(239 84% 67%)",
  "hsl(199 89% 48%)",
  "hsl(142 71% 45%)",
  "hsl(38 92% 50%)",
  "hsl(25 95% 53%)",
  "hsl(174 72% 40%)",
  "hsl(346 77% 50%)",
  "hsl(217 91% 60%)",
  "hsl(47 96% 53%)",
  "hsl(280 67% 50%)"
], oY = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "THB",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}), lu = (e) => oY.format(e), xr = (e) => {
  const t = qa(e);
  return Number.isNaN(t.getTime()) ? e : Rx(t, "d MMM yyyy");
}, sY = () => {
  const [e, t] = $r(null), { data: r, isLoading: n, error: i } = _o({
    queryKey: ["employment-timeline"],
    queryFn: () => Po("/api/employer/employment-timeline")
  }), a = ia(() => {
    if (!(r != null && r.timeline)) return [];
    const u = /* @__PURE__ */ new Map();
    for (const l of r.timeline) {
      const f = u.get(l.jobpost_id);
      f ? (f.total_agreed_wage += l.total_agreed_wage, f.employment_count += l.employment_count, l.earliest_start < f.earliest_start && (f.earliest_start = l.earliest_start), l.latest_end > f.latest_end && (f.latest_end = l.latest_end)) : u.set(l.jobpost_id, {
        jobpost_id: l.jobpost_id,
        title: l.title,
        job_type: l.job_type,
        total_agreed_wage: l.total_agreed_wage,
        employment_count: l.employment_count,
        earliest_start: l.earliest_start,
        latest_end: l.latest_end
      });
    }
    return Array.from(u.values()).sort((l, f) => {
      const d = qa(l.earliest_start).getTime(), h = qa(f.earliest_start).getTime();
      return !Number.isNaN(d) && !Number.isNaN(h) && d !== h ? d - h : l.total_agreed_wage - f.total_agreed_wage;
    });
  }, [r == null ? void 0 : r.timeline]), o = ia(
    () => a.map((u, l) => ({
      jobpostId: u.jobpost_id,
      label: u.title,
      jobType: u.job_type,
      start: u.earliest_start,
      end: u.latest_end,
      wage: u.total_agreed_wage,
      employmentCount: u.employment_count,
      color: am[l % am.length]
    })),
    [a]
  );
  $s(() => {
    t((u) => a.length ? u && a.some((l) => l.jobpost_id === u) ? u : a[0].jobpost_id : null);
  }, [a]);
  const s = r == null ? void 0 : r.summary, c = a.find((u) => u.jobpost_id === e) ?? a[0];
  return /* @__PURE__ */ P.jsxs("div", { className: "space-y-4 sm:space-y-6", children: [
    s && /* @__PURE__ */ P.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4", children: [
      /* @__PURE__ */ P.jsxs("div", { className: "flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm", children: [
        /* @__PURE__ */ P.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10", children: /* @__PURE__ */ P.jsx(fw, { className: "h-5 w-5 text-primary" }) }),
        /* @__PURE__ */ P.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ P.jsx("p", { className: "text-xs text-muted-foreground", children: "Date Range" }),
          /* @__PURE__ */ P.jsxs("p", { className: "break-words text-sm font-semibold text-card-foreground", children: [
            xr(s.overall_start),
            " - ",
            xr(s.overall_end)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: "flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm", children: [
        /* @__PURE__ */ P.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-success/10", children: /* @__PURE__ */ P.jsx(uw, { className: "h-5 w-5 text-success" }) }),
        /* @__PURE__ */ P.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ P.jsx("p", { className: "text-xs text-muted-foreground", children: "Total Agreed Wage" }),
          /* @__PURE__ */ P.jsx("p", { className: "break-words text-sm font-semibold text-card-foreground", children: lu(s.grand_total_wage) })
        ] })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { className: "flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm", children: [
        /* @__PURE__ */ P.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10", children: /* @__PURE__ */ P.jsx(fm, { className: "h-5 w-5 text-primary" }) }),
        /* @__PURE__ */ P.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ P.jsx("p", { className: "text-xs text-muted-foreground", children: "Total Employments" }),
          /* @__PURE__ */ P.jsx("p", { className: "text-sm font-semibold text-card-foreground", children: s.total_employments })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ P.jsxs("div", { className: "rounded-lg border border-border bg-card p-4 shadow-sm sm:p-5", children: [
      /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between", children: [
        /* @__PURE__ */ P.jsxs("div", { children: [
          /* @__PURE__ */ P.jsx("h3", { className: "font-display font-semibold text-card-foreground", children: "Employment Quartile Timeline" }),
          /* @__PURE__ */ P.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Each jobpost is drawn as a date-range bar. The X-axis tracks the employment timeline and the Y-axis tracks total agreed wage." })
        ] }),
        c && /* @__PURE__ */ P.jsxs("div", { className: "rounded-lg bg-secondary/70 px-3 py-2 text-xs text-muted-foreground", children: [
          "Focus: ",
          /* @__PURE__ */ P.jsx("span", { className: "font-medium text-card-foreground", children: c.title })
        ] })
      ] }),
      n && /* @__PURE__ */ P.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Loading..." }),
      i && !n && /* @__PURE__ */ P.jsx("p", { className: "mt-4 text-sm text-destructive", children: "Unable to load chart data" }),
      !n && !i && o.length === 0 && /* @__PURE__ */ P.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "No employments data" }),
      !n && !i && o.length > 0 && /* @__PURE__ */ P.jsx("div", { className: "mt-4", children: /* @__PURE__ */ P.jsx(
        aY,
        {
          data: o,
          selectedJobpostId: e,
          onSelectJobpost: t
        }
      ) })
    ] }),
    /* @__PURE__ */ P.jsxs("div", { className: "rounded-lg border border-border bg-card p-4 shadow-sm sm:p-5", children: [
      /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ P.jsx("h3", { className: "font-display font-semibold text-card-foreground", children: "Employment Details" }),
        c && /* @__PURE__ */ P.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Selected range: ",
          xr(c.earliest_start),
          " - ",
          xr(c.latest_end)
        ] })
      ] }),
      /* @__PURE__ */ P.jsx("div", { className: "mt-3 hidden overflow-x-auto md:block", children: /* @__PURE__ */ P.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ P.jsx("thead", { children: /* @__PURE__ */ P.jsxs("tr", { className: "border-b border-border", children: [
          /* @__PURE__ */ P.jsx("th", { className: "py-2 text-left font-medium text-muted-foreground", children: "Job Title" }),
          /* @__PURE__ */ P.jsx("th", { className: "py-2 text-left font-medium text-muted-foreground", children: "Type" }),
          /* @__PURE__ */ P.jsx("th", { className: "py-2 text-right font-medium text-muted-foreground", children: "Employments" }),
          /* @__PURE__ */ P.jsx("th", { className: "py-2 text-left font-medium text-muted-foreground", children: "Start" }),
          /* @__PURE__ */ P.jsx("th", { className: "py-2 text-left font-medium text-muted-foreground", children: "End" }),
          /* @__PURE__ */ P.jsx("th", { className: "py-2 text-right font-medium text-muted-foreground", children: "Agreed Wage" })
        ] }) }),
        /* @__PURE__ */ P.jsx("tbody", { children: a.map((u) => {
          const l = u.jobpost_id === e;
          return /* @__PURE__ */ P.jsxs(
            "tr",
            {
              onClick: () => t(u.jobpost_id),
              className: `border-b border-border last:border-0 transition-colors ${l ? "bg-primary/5" : "hover:bg-accent/50"} cursor-pointer`,
              children: [
                /* @__PURE__ */ P.jsx("td", { className: "py-3 font-medium text-card-foreground", children: u.title }),
                /* @__PURE__ */ P.jsx("td", { className: "py-3 text-muted-foreground", children: u.job_type }),
                /* @__PURE__ */ P.jsx("td", { className: "py-3 text-right text-muted-foreground", children: u.employment_count }),
                /* @__PURE__ */ P.jsx("td", { className: "py-3 text-muted-foreground", children: xr(u.earliest_start) }),
                /* @__PURE__ */ P.jsx("td", { className: "py-3 text-muted-foreground", children: xr(u.latest_end) }),
                /* @__PURE__ */ P.jsx("td", { className: "py-3 text-right font-medium text-card-foreground", children: lu(u.total_agreed_wage) })
              ]
            },
            u.jobpost_id
          );
        }) })
      ] }) }),
      /* @__PURE__ */ P.jsx("div", { className: "mt-3 space-y-3 md:hidden", children: a.map((u) => {
        const l = u.jobpost_id === e;
        return /* @__PURE__ */ P.jsxs(
          "button",
          {
            type: "button",
            onClick: () => t(u.jobpost_id),
            className: `w-full space-y-3 rounded-lg border p-4 text-left transition-colors ${l ? "border-primary bg-primary/5" : "border-border hover:bg-accent/50"}`,
            children: [
              /* @__PURE__ */ P.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ P.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ P.jsx("p", { className: "break-words font-medium text-card-foreground", children: u.title }),
                  /* @__PURE__ */ P.jsx("p", { className: "text-xs text-muted-foreground", children: u.job_type })
                ] }),
                /* @__PURE__ */ P.jsxs("span", { className: "shrink-0 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-foreground", children: [
                  u.employment_count,
                  " hires"
                ] })
              ] }),
              /* @__PURE__ */ P.jsxs("div", { className: "grid gap-1 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ P.jsxs("p", { children: [
                  "Start: ",
                  xr(u.earliest_start)
                ] }),
                /* @__PURE__ */ P.jsxs("p", { children: [
                  "End: ",
                  xr(u.latest_end)
                ] })
              ] }),
              /* @__PURE__ */ P.jsx("div", { className: "rounded-md bg-secondary/60 px-3 py-2 text-sm font-medium text-card-foreground", children: lu(u.total_agreed_wage) })
            ]
          },
          u.jobpost_id
        );
      }) })
    ] })
  ] });
};
function dY() {
  return /* @__PURE__ */ P.jsxs("div", { className: "space-y-4 sm:space-y-6", children: [
    /* @__PURE__ */ P.jsx(Gw, {}),
    /* @__PURE__ */ P.jsxs(jx, { defaultValue: "jobpost", className: "w-full", children: [
      /* @__PURE__ */ P.jsxs(vd, { className: "grid h-auto w-full grid-cols-2 gap-1", children: [
        /* @__PURE__ */ P.jsx(Wa, { value: "jobpost", className: "min-h-[2.75rem] whitespace-normal px-3 py-2 text-xs leading-tight sm:text-sm", children: "Jobpost" }),
        /* @__PURE__ */ P.jsx(Wa, { value: "employments", className: "min-h-[2.75rem] whitespace-normal px-3 py-2 text-xs leading-tight sm:text-sm", children: "Employments" })
      ] }),
      /* @__PURE__ */ P.jsx(za, { value: "jobpost", children: /* @__PURE__ */ P.jsx(M6, {}) }),
      /* @__PURE__ */ P.jsx(za, { value: "employments", children: /* @__PURE__ */ P.jsx(sY, {}) })
    ] })
  ] });
}
export {
  dY as default
};
