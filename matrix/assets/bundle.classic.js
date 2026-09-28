(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
    get: (a3, b2) => (typeof require !== "undefined" ? require : a3)[b2]
  }) : x2)(function(x2) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x2 + '" is not supported');
  });
  var __copyProps = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to2, key) && key !== except)
          __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // rolldown-runtime-BHe-jwch.js
  var e = Object.create;
  var t = Object.defineProperty;
  var n = Object.getOwnPropertyDescriptor;
  var r = Object.getOwnPropertyNames;
  var i = Object.getPrototypeOf;
  var a = Object.prototype.hasOwnProperty;
  var o = (e2, t2) => () => (t2 || (e2((t2 = { exports: {} }).exports, t2), e2 = null), t2.exports);
  var s = (e2, i3, o3, s3) => {
    if (i3 && typeof i3 == `object` || typeof i3 == `function`) for (var c3 = r(i3), l3 = 0, u2 = c3.length, d2; l3 < u2; l3++) d2 = c3[l3], !a.call(e2, d2) && d2 !== o3 && t(e2, d2, { get: ((e3) => i3[e3]).bind(null, d2), enumerable: !(s3 = n(i3, d2)) || s3.enumerable });
    return e2;
  };
  var c = (n3, r3, a3) => (a3 = n3 == null ? {} : e(i(n3)), s(r3 || !n3 || !n3.__esModule ? t(a3, `default`, { value: n3, enumerable: true }) : a3, n3));
  var l = ((e2) => typeof __require < `u` ? __require : typeof Proxy < `u` ? new Proxy(e2, { get: (e3, t2) => (typeof __require < `u` ? __require : e3)[t2] }) : e2)(function(e2) {
    if (typeof __require < `u`) return __require.apply(this, arguments);
    throw Error('Calling `require` for "' + e2 + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
  });

  // index-CwyNOXYR.js
  var __vite__mapDeps = (i3, m2 = __vite__mapDeps, d2 = m2.f || (m2.f = ["assets/exportExcel-DivztvYO.js", "assets/rolldown-runtime-BHe-jwch.js", "assets/exceljs-CeEylOcq.js"])) => i3.map((i4) => d2[i4]);
  (function() {
    let e2 = document.createElement(`link`).relList;
    if (e2 && e2.supports && e2.supports(`modulepreload`)) return;
    for (let e3 of document.querySelectorAll(`link[rel="modulepreload"]`)) n3(e3);
    new MutationObserver((e3) => {
      for (let t3 of e3) if (t3.type === `childList`) for (let e4 of t3.addedNodes) e4.tagName === `LINK` && e4.rel === `modulepreload` && n3(e4);
    }).observe(document, { childList: true, subtree: true });
    function t2(e3) {
      let t3 = {};
      return e3.integrity && (t3.integrity = e3.integrity), e3.referrerPolicy && (t3.referrerPolicy = e3.referrerPolicy), e3.crossOrigin === `use-credentials` ? t3.credentials = `include` : e3.crossOrigin === `anonymous` ? t3.credentials = `omit` : t3.credentials = `same-origin`, t3;
    }
    function n3(e3) {
      if (e3.ep) return;
      e3.ep = true;
      let n4 = t2(e3);
      fetch(e3.href, n4);
    }
  })();
  var n2 = o(((e2) => {
    var t2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), n3 = /* @__PURE__ */ Symbol.for(`react.portal`), r3 = /* @__PURE__ */ Symbol.for(`react.fragment`), i3 = /* @__PURE__ */ Symbol.for(`react.strict_mode`), a3 = /* @__PURE__ */ Symbol.for(`react.profiler`), o3 = /* @__PURE__ */ Symbol.for(`react.consumer`), s3 = /* @__PURE__ */ Symbol.for(`react.context`), c3 = /* @__PURE__ */ Symbol.for(`react.forward_ref`), l3 = /* @__PURE__ */ Symbol.for(`react.suspense`), u2 = /* @__PURE__ */ Symbol.for(`react.memo`), d2 = /* @__PURE__ */ Symbol.for(`react.lazy`), f2 = /* @__PURE__ */ Symbol.for(`react.activity`), p2 = Symbol.iterator;
    function m2(e3) {
      return typeof e3 != `object` || !e3 ? null : (e3 = p2 && e3[p2] || e3[`@@iterator`], typeof e3 == `function` ? e3 : null);
    }
    var h2 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, g2 = Object.assign, _2 = {};
    function v2(e3, t3, n4) {
      this.props = e3, this.context = t3, this.refs = _2, this.updater = n4 || h2;
    }
    v2.prototype.isReactComponent = {}, v2.prototype.setState = function(e3, t3) {
      if (typeof e3 != `object` && typeof e3 != `function` && e3 != null) throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
      this.updater.enqueueSetState(this, e3, t3, `setState`);
    }, v2.prototype.forceUpdate = function(e3) {
      this.updater.enqueueForceUpdate(this, e3, `forceUpdate`);
    };
    function y2() {
    }
    y2.prototype = v2.prototype;
    function b2(e3, t3, n4) {
      this.props = e3, this.context = t3, this.refs = _2, this.updater = n4 || h2;
    }
    var x2 = b2.prototype = new y2();
    x2.constructor = b2, g2(x2, v2.prototype), x2.isPureReactComponent = true;
    var S2 = Array.isArray;
    function C2() {
    }
    var w2 = { H: null, A: null, T: null, S: null }, T2 = Object.prototype.hasOwnProperty;
    function E2(e3, n4, r4) {
      var i4 = r4.ref;
      return { $$typeof: t2, type: e3, key: n4, ref: i4 === void 0 ? null : i4, props: r4 };
    }
    function D2(e3, t3) {
      return E2(e3.type, t3, e3.props);
    }
    function O2(e3) {
      return typeof e3 == `object` && !!e3 && e3.$$typeof === t2;
    }
    function k2(e3) {
      var t3 = { "=": `=0`, ":": `=2` };
      return `$` + e3.replace(/[=:]/g, function(e4) {
        return t3[e4];
      });
    }
    var ee2 = /\/+/g;
    function te2(e3, t3) {
      return typeof e3 == `object` && e3 && e3.key != null ? k2(`` + e3.key) : t3.toString(36);
    }
    function ne2(e3) {
      switch (e3.status) {
        case `fulfilled`:
          return e3.value;
        case `rejected`:
          throw e3.reason;
        default:
          switch (typeof e3.status == `string` ? e3.then(C2, C2) : (e3.status = `pending`, e3.then(function(t3) {
            e3.status === `pending` && (e3.status = `fulfilled`, e3.value = t3);
          }, function(t3) {
            e3.status === `pending` && (e3.status = `rejected`, e3.reason = t3);
          })), e3.status) {
            case `fulfilled`:
              return e3.value;
            case `rejected`:
              throw e3.reason;
          }
      }
      throw e3;
    }
    function re2(e3, r4, i4, a4, o4) {
      var s4 = typeof e3;
      (s4 === `undefined` || s4 === `boolean`) && (e3 = null);
      var c4 = false;
      if (e3 === null) c4 = true;
      else switch (s4) {
        case `bigint`:
        case `string`:
        case `number`:
          c4 = true;
          break;
        case `object`:
          switch (e3.$$typeof) {
            case t2:
            case n3:
              c4 = true;
              break;
            case d2:
              return c4 = e3._init, re2(c4(e3._payload), r4, i4, a4, o4);
          }
      }
      if (c4) return o4 = o4(e3), c4 = a4 === `` ? `.` + te2(e3, 0) : a4, S2(o4) ? (i4 = ``, c4 != null && (i4 = c4.replace(ee2, `$&/`) + `/`), re2(o4, r4, i4, ``, function(e4) {
        return e4;
      })) : o4 != null && (O2(o4) && (o4 = D2(o4, i4 + (o4.key == null || e3 && e3.key === o4.key ? `` : (`` + o4.key).replace(ee2, `$&/`) + `/`) + c4)), r4.push(o4)), 1;
      c4 = 0;
      var l4 = a4 === `` ? `.` : a4 + `:`;
      if (S2(e3)) for (var u3 = 0; u3 < e3.length; u3++) a4 = e3[u3], s4 = l4 + te2(a4, u3), c4 += re2(a4, r4, i4, s4, o4);
      else if (u3 = m2(e3), typeof u3 == `function`) for (e3 = u3.call(e3), u3 = 0; !(a4 = e3.next()).done; ) a4 = a4.value, s4 = l4 + te2(a4, u3++), c4 += re2(a4, r4, i4, s4, o4);
      else if (s4 === `object`) {
        if (typeof e3.then == `function`) return re2(ne2(e3), r4, i4, a4, o4);
        throw r4 = String(e3), Error(`Objects are not valid as a React child (found: ` + (r4 === `[object Object]` ? `object with keys {` + Object.keys(e3).join(`, `) + `}` : r4) + `). If you meant to render a collection of children, use an array instead.`);
      }
      return c4;
    }
    function ie2(e3, t3, n4) {
      if (e3 == null) return e3;
      var r4 = [], i4 = 0;
      return re2(e3, r4, ``, ``, function(e4) {
        return t3.call(n4, e4, i4++);
      }), r4;
    }
    function ae2(e3) {
      if (e3._status === -1) {
        var t3 = e3._result;
        t3 = t3(), t3.then(function(t4) {
          (e3._status === 0 || e3._status === -1) && (e3._status = 1, e3._result = t4);
        }, function(t4) {
          (e3._status === 0 || e3._status === -1) && (e3._status = 2, e3._result = t4);
        }), e3._status === -1 && (e3._status = 0, e3._result = t3);
      }
      if (e3._status === 1) return e3._result.default;
      throw e3._result;
    }
    var A2 = typeof reportError == `function` ? reportError : function(e3) {
      if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
        var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e3 == `object` && e3 && typeof e3.message == `string` ? String(e3.message) : String(e3), error: e3 });
        if (!window.dispatchEvent(t3)) return;
      } else if (typeof process == `object` && typeof process.emit == `function`) {
        process.emit(`uncaughtException`, e3);
        return;
      }
      console.error(e3);
    }, j2 = { map: ie2, forEach: function(e3, t3, n4) {
      ie2(e3, function() {
        t3.apply(this, arguments);
      }, n4);
    }, count: function(e3) {
      var t3 = 0;
      return ie2(e3, function() {
        t3++;
      }), t3;
    }, toArray: function(e3) {
      return ie2(e3, function(e4) {
        return e4;
      }) || [];
    }, only: function(e3) {
      if (!O2(e3)) throw Error(`React.Children.only expected to receive a single React element child.`);
      return e3;
    } };
    e2.Activity = f2, e2.Children = j2, e2.Component = v2, e2.Fragment = r3, e2.Profiler = a3, e2.PureComponent = b2, e2.StrictMode = i3, e2.Suspense = l3, e2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w2, e2.__COMPILER_RUNTIME = { __proto__: null, c: function(e3) {
      return w2.H.useMemoCache(e3);
    } }, e2.cache = function(e3) {
      return function() {
        return e3.apply(null, arguments);
      };
    }, e2.cacheSignal = function() {
      return null;
    }, e2.cloneElement = function(e3, t3, n4) {
      if (e3 == null) throw Error(`The argument must be a React element, but you passed ` + e3 + `.`);
      var r4 = g2({}, e3.props), i4 = e3.key;
      if (t3 != null) for (a4 in t3.key !== void 0 && (i4 = `` + t3.key), t3) !T2.call(t3, a4) || a4 === `key` || a4 === `__self` || a4 === `__source` || a4 === `ref` && t3.ref === void 0 || (r4[a4] = t3[a4]);
      var a4 = arguments.length - 2;
      if (a4 === 1) r4.children = n4;
      else if (1 < a4) {
        for (var o4 = Array(a4), s4 = 0; s4 < a4; s4++) o4[s4] = arguments[s4 + 2];
        r4.children = o4;
      }
      return E2(e3.type, i4, r4);
    }, e2.createContext = function(e3) {
      return e3 = { $$typeof: s3, _currentValue: e3, _currentValue2: e3, _threadCount: 0, Provider: null, Consumer: null }, e3.Provider = e3, e3.Consumer = { $$typeof: o3, _context: e3 }, e3;
    }, e2.createElement = function(e3, t3, n4) {
      var r4, i4 = {}, a4 = null;
      if (t3 != null) for (r4 in t3.key !== void 0 && (a4 = `` + t3.key), t3) T2.call(t3, r4) && r4 !== `key` && r4 !== `__self` && r4 !== `__source` && (i4[r4] = t3[r4]);
      var o4 = arguments.length - 2;
      if (o4 === 1) i4.children = n4;
      else if (1 < o4) {
        for (var s4 = Array(o4), c4 = 0; c4 < o4; c4++) s4[c4] = arguments[c4 + 2];
        i4.children = s4;
      }
      if (e3 && e3.defaultProps) for (r4 in o4 = e3.defaultProps, o4) i4[r4] === void 0 && (i4[r4] = o4[r4]);
      return E2(e3, a4, i4);
    }, e2.createRef = function() {
      return { current: null };
    }, e2.forwardRef = function(e3) {
      return { $$typeof: c3, render: e3 };
    }, e2.isValidElement = O2, e2.lazy = function(e3) {
      return { $$typeof: d2, _payload: { _status: -1, _result: e3 }, _init: ae2 };
    }, e2.memo = function(e3, t3) {
      return { $$typeof: u2, type: e3, compare: t3 === void 0 ? null : t3 };
    }, e2.startTransition = function(e3) {
      var t3 = w2.T, n4 = {};
      w2.T = n4;
      try {
        var r4 = e3(), i4 = w2.S;
        i4 !== null && i4(n4, r4), typeof r4 == `object` && r4 && typeof r4.then == `function` && r4.then(C2, A2);
      } catch (e4) {
        A2(e4);
      } finally {
        t3 !== null && n4.types !== null && (t3.types = n4.types), w2.T = t3;
      }
    }, e2.unstable_useCacheRefresh = function() {
      return w2.H.useCacheRefresh();
    }, e2.use = function(e3) {
      return w2.H.use(e3);
    }, e2.useActionState = function(e3, t3, n4) {
      return w2.H.useActionState(e3, t3, n4);
    }, e2.useCallback = function(e3, t3) {
      return w2.H.useCallback(e3, t3);
    }, e2.useContext = function(e3) {
      return w2.H.useContext(e3);
    }, e2.useDebugValue = function() {
    }, e2.useDeferredValue = function(e3, t3) {
      return w2.H.useDeferredValue(e3, t3);
    }, e2.useEffect = function(e3, t3) {
      return w2.H.useEffect(e3, t3);
    }, e2.useEffectEvent = function(e3) {
      return w2.H.useEffectEvent(e3);
    }, e2.useId = function() {
      return w2.H.useId();
    }, e2.useImperativeHandle = function(e3, t3, n4) {
      return w2.H.useImperativeHandle(e3, t3, n4);
    }, e2.useInsertionEffect = function(e3, t3) {
      return w2.H.useInsertionEffect(e3, t3);
    }, e2.useLayoutEffect = function(e3, t3) {
      return w2.H.useLayoutEffect(e3, t3);
    }, e2.useMemo = function(e3, t3) {
      return w2.H.useMemo(e3, t3);
    }, e2.useOptimistic = function(e3, t3) {
      return w2.H.useOptimistic(e3, t3);
    }, e2.useReducer = function(e3, t3, n4) {
      return w2.H.useReducer(e3, t3, n4);
    }, e2.useRef = function(e3) {
      return w2.H.useRef(e3);
    }, e2.useState = function(e3) {
      return w2.H.useState(e3);
    }, e2.useSyncExternalStore = function(e3, t3, n4) {
      return w2.H.useSyncExternalStore(e3, t3, n4);
    }, e2.useTransition = function() {
      return w2.H.useTransition();
    }, e2.version = `19.2.7`;
  }));
  var r2 = o(((e2, t2) => {
    t2.exports = n2();
  }));
  var i2 = o(((e2) => {
    function t2(e3, t3) {
      var n4 = e3.length;
      e3.push(t3);
      a: for (; 0 < n4; ) {
        var r4 = n4 - 1 >>> 1, a4 = e3[r4];
        if (0 < i3(a4, t3)) e3[r4] = t3, e3[n4] = a4, n4 = r4;
        else break a;
      }
    }
    function n3(e3) {
      return e3.length === 0 ? null : e3[0];
    }
    function r3(e3) {
      if (e3.length === 0) return null;
      var t3 = e3[0], n4 = e3.pop();
      if (n4 !== t3) {
        e3[0] = n4;
        a: for (var r4 = 0, a4 = e3.length, o4 = a4 >>> 1; r4 < o4; ) {
          var s4 = 2 * (r4 + 1) - 1, c4 = e3[s4], l4 = s4 + 1, u3 = e3[l4];
          if (0 > i3(c4, n4)) l4 < a4 && 0 > i3(u3, c4) ? (e3[r4] = u3, e3[l4] = n4, r4 = l4) : (e3[r4] = c4, e3[s4] = n4, r4 = s4);
          else if (l4 < a4 && 0 > i3(u3, n4)) e3[r4] = u3, e3[l4] = n4, r4 = l4;
          else break a;
        }
      }
      return t3;
    }
    function i3(e3, t3) {
      var n4 = e3.sortIndex - t3.sortIndex;
      return n4 === 0 ? e3.id - t3.id : n4;
    }
    if (e2.unstable_now = void 0, typeof performance == `object` && typeof performance.now == `function`) {
      var a3 = performance;
      e2.unstable_now = function() {
        return a3.now();
      };
    } else {
      var o3 = Date, s3 = o3.now();
      e2.unstable_now = function() {
        return o3.now() - s3;
      };
    }
    var c3 = [], l3 = [], u2 = 1, d2 = null, f2 = 3, p2 = false, m2 = false, h2 = false, g2 = false, _2 = typeof setTimeout == `function` ? setTimeout : null, v2 = typeof clearTimeout == `function` ? clearTimeout : null, y2 = typeof setImmediate < `u` ? setImmediate : null;
    function b2(e3) {
      for (var i4 = n3(l3); i4 !== null; ) {
        if (i4.callback === null) r3(l3);
        else if (i4.startTime <= e3) r3(l3), i4.sortIndex = i4.expirationTime, t2(c3, i4);
        else break;
        i4 = n3(l3);
      }
    }
    function x2(e3) {
      if (h2 = false, b2(e3), !m2) if (n3(c3) !== null) m2 = true, S2 || (S2 = true, O2());
      else {
        var t3 = n3(l3);
        t3 !== null && te2(x2, t3.startTime - e3);
      }
    }
    var S2 = false, C2 = -1, w2 = 5, T2 = -1;
    function E2() {
      return g2 ? true : !(e2.unstable_now() - T2 < w2);
    }
    function D2() {
      if (g2 = false, S2) {
        var t3 = e2.unstable_now();
        T2 = t3;
        var i4 = true;
        try {
          a: {
            m2 = false, h2 && (h2 = false, v2(C2), C2 = -1), p2 = true;
            var a4 = f2;
            try {
              b: {
                for (b2(t3), d2 = n3(c3); d2 !== null && !(d2.expirationTime > t3 && E2()); ) {
                  var o4 = d2.callback;
                  if (typeof o4 == `function`) {
                    d2.callback = null, f2 = d2.priorityLevel;
                    var s4 = o4(d2.expirationTime <= t3);
                    if (t3 = e2.unstable_now(), typeof s4 == `function`) {
                      d2.callback = s4, b2(t3), i4 = true;
                      break b;
                    }
                    d2 === n3(c3) && r3(c3), b2(t3);
                  } else r3(c3);
                  d2 = n3(c3);
                }
                if (d2 !== null) i4 = true;
                else {
                  var u3 = n3(l3);
                  u3 !== null && te2(x2, u3.startTime - t3), i4 = false;
                }
              }
              break a;
            } finally {
              d2 = null, f2 = a4, p2 = false;
            }
            i4 = void 0;
          }
        } finally {
          i4 ? O2() : S2 = false;
        }
      }
    }
    var O2;
    if (typeof y2 == `function`) O2 = function() {
      y2(D2);
    };
    else if (typeof MessageChannel < `u`) {
      var k2 = new MessageChannel(), ee2 = k2.port2;
      k2.port1.onmessage = D2, O2 = function() {
        ee2.postMessage(null);
      };
    } else O2 = function() {
      _2(D2, 0);
    };
    function te2(t3, n4) {
      C2 = _2(function() {
        t3(e2.unstable_now());
      }, n4);
    }
    e2.unstable_IdlePriority = 5, e2.unstable_ImmediatePriority = 1, e2.unstable_LowPriority = 4, e2.unstable_NormalPriority = 3, e2.unstable_Profiling = null, e2.unstable_UserBlockingPriority = 2, e2.unstable_cancelCallback = function(e3) {
      e3.callback = null;
    }, e2.unstable_forceFrameRate = function(e3) {
      0 > e3 || 125 < e3 ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : w2 = 0 < e3 ? Math.floor(1e3 / e3) : 5;
    }, e2.unstable_getCurrentPriorityLevel = function() {
      return f2;
    }, e2.unstable_next = function(e3) {
      switch (f2) {
        case 1:
        case 2:
        case 3:
          var t3 = 3;
          break;
        default:
          t3 = f2;
      }
      var n4 = f2;
      f2 = t3;
      try {
        return e3();
      } finally {
        f2 = n4;
      }
    }, e2.unstable_requestPaint = function() {
      g2 = true;
    }, e2.unstable_runWithPriority = function(e3, t3) {
      switch (e3) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e3 = 3;
      }
      var n4 = f2;
      f2 = e3;
      try {
        return t3();
      } finally {
        f2 = n4;
      }
    }, e2.unstable_scheduleCallback = function(r4, i4, a4) {
      var o4 = e2.unstable_now();
      switch (typeof a4 == `object` && a4 ? (a4 = a4.delay, a4 = typeof a4 == `number` && 0 < a4 ? o4 + a4 : o4) : a4 = o4, r4) {
        case 1:
          var s4 = -1;
          break;
        case 2:
          s4 = 250;
          break;
        case 5:
          s4 = 1073741823;
          break;
        case 4:
          s4 = 1e4;
          break;
        default:
          s4 = 5e3;
      }
      return s4 = a4 + s4, r4 = { id: u2++, callback: i4, priorityLevel: r4, startTime: a4, expirationTime: s4, sortIndex: -1 }, a4 > o4 ? (r4.sortIndex = a4, t2(l3, r4), n3(c3) === null && r4 === n3(l3) && (h2 ? (v2(C2), C2 = -1) : h2 = true, te2(x2, a4 - o4))) : (r4.sortIndex = s4, t2(c3, r4), m2 || p2 || (m2 = true, S2 || (S2 = true, O2()))), r4;
    }, e2.unstable_shouldYield = E2, e2.unstable_wrapCallback = function(e3) {
      var t3 = f2;
      return function() {
        var n4 = f2;
        f2 = t3;
        try {
          return e3.apply(this, arguments);
        } finally {
          f2 = n4;
        }
      };
    };
  }));
  var a2 = o(((e2, t2) => {
    t2.exports = i2();
  }));
  var o2 = o(((e2) => {
    var t2 = r2();
    function n3(e3) {
      var t3 = `https://react.dev/errors/` + e3;
      if (1 < arguments.length) {
        t3 += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n4 = 2; n4 < arguments.length; n4++) t3 += `&args[]=` + encodeURIComponent(arguments[n4]);
      }
      return `Minified React error #` + e3 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
    }
    function i3() {
    }
    var a3 = { d: { f: i3, r: function() {
      throw Error(n3(522));
    }, D: i3, C: i3, L: i3, m: i3, X: i3, S: i3, M: i3 }, p: 0, findDOMNode: null }, o3 = /* @__PURE__ */ Symbol.for(`react.portal`);
    function s3(e3, t3, n4) {
      var r3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: o3, key: r3 == null ? null : `` + r3, children: e3, containerInfo: t3, implementation: n4 };
    }
    var c3 = t2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function l3(e3, t3) {
      if (e3 === `font`) return ``;
      if (typeof t3 == `string`) return t3 === `use-credentials` ? t3 : ``;
    }
    e2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a3, e2.createPortal = function(e3, t3) {
      var r3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!t3 || t3.nodeType !== 1 && t3.nodeType !== 9 && t3.nodeType !== 11) throw Error(n3(299));
      return s3(e3, t3, null, r3);
    }, e2.flushSync = function(e3) {
      var t3 = c3.T, n4 = a3.p;
      try {
        if (c3.T = null, a3.p = 2, e3) return e3();
      } finally {
        c3.T = t3, a3.p = n4, a3.d.f();
      }
    }, e2.preconnect = function(e3, t3) {
      typeof e3 == `string` && (t3 ? (t3 = t3.crossOrigin, t3 = typeof t3 == `string` ? t3 === `use-credentials` ? t3 : `` : void 0) : t3 = null, a3.d.C(e3, t3));
    }, e2.prefetchDNS = function(e3) {
      typeof e3 == `string` && a3.d.D(e3);
    }, e2.preinit = function(e3, t3) {
      if (typeof e3 == `string` && t3 && typeof t3.as == `string`) {
        var n4 = t3.as, r3 = l3(n4, t3.crossOrigin), i4 = typeof t3.integrity == `string` ? t3.integrity : void 0, o4 = typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0;
        n4 === `style` ? a3.d.S(e3, typeof t3.precedence == `string` ? t3.precedence : void 0, { crossOrigin: r3, integrity: i4, fetchPriority: o4 }) : n4 === `script` && a3.d.X(e3, { crossOrigin: r3, integrity: i4, fetchPriority: o4, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0 });
      }
    }, e2.preinitModule = function(e3, t3) {
      if (typeof e3 == `string`) if (typeof t3 == `object` && t3) {
        if (t3.as == null || t3.as === `script`) {
          var n4 = l3(t3.as, t3.crossOrigin);
          a3.d.M(e3, { crossOrigin: n4, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0 });
        }
      } else t3 ?? a3.d.M(e3);
    }, e2.preload = function(e3, t3) {
      if (typeof e3 == `string` && typeof t3 == `object` && t3 && typeof t3.as == `string`) {
        var n4 = t3.as, r3 = l3(n4, t3.crossOrigin);
        a3.d.L(e3, n4, { crossOrigin: r3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, type: typeof t3.type == `string` ? t3.type : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0, referrerPolicy: typeof t3.referrerPolicy == `string` ? t3.referrerPolicy : void 0, imageSrcSet: typeof t3.imageSrcSet == `string` ? t3.imageSrcSet : void 0, imageSizes: typeof t3.imageSizes == `string` ? t3.imageSizes : void 0, media: typeof t3.media == `string` ? t3.media : void 0 });
      }
    }, e2.preloadModule = function(e3, t3) {
      if (typeof e3 == `string`) if (t3) {
        var n4 = l3(t3.as, t3.crossOrigin);
        a3.d.m(e3, { as: typeof t3.as == `string` && t3.as !== `script` ? t3.as : void 0, crossOrigin: n4, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0 });
      } else a3.d.m(e3);
    }, e2.requestFormReset = function(e3) {
      a3.d.r(e3);
    }, e2.unstable_batchedUpdates = function(e3, t3) {
      return e3(t3);
    }, e2.useFormState = function(e3, t3, n4) {
      return c3.H.useFormState(e3, t3, n4);
    }, e2.useFormStatus = function() {
      return c3.H.useHostTransitionStatus();
    }, e2.version = `19.2.7`;
  }));
  var s2 = o(((e2, t2) => {
    function n3() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`)) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n3);
      } catch (e3) {
        console.error(e3);
      }
    }
    n3(), t2.exports = o2();
  }));
  var c2 = o(((e2) => {
    var t2 = a2(), n3 = r2(), i3 = s2();
    function o3(e3) {
      var t3 = `https://react.dev/errors/` + e3;
      if (1 < arguments.length) {
        t3 += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n4 = 2; n4 < arguments.length; n4++) t3 += `&args[]=` + encodeURIComponent(arguments[n4]);
      }
      return `Minified React error #` + e3 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
    }
    function c3(e3) {
      return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11);
    }
    function l3(e3) {
      var t3 = e3, n4 = e3;
      if (e3.alternate) for (; t3.return; ) t3 = t3.return;
      else {
        e3 = t3;
        do
          t3 = e3, t3.flags & 4098 && (n4 = t3.return), e3 = t3.return;
        while (e3);
      }
      return t3.tag === 3 ? n4 : null;
    }
    function u2(e3) {
      if (e3.tag === 13) {
        var t3 = e3.memoizedState;
        if (t3 === null && (e3 = e3.alternate, e3 !== null && (t3 = e3.memoizedState)), t3 !== null) return t3.dehydrated;
      }
      return null;
    }
    function d2(e3) {
      if (e3.tag === 31) {
        var t3 = e3.memoizedState;
        if (t3 === null && (e3 = e3.alternate, e3 !== null && (t3 = e3.memoizedState)), t3 !== null) return t3.dehydrated;
      }
      return null;
    }
    function f2(e3) {
      if (l3(e3) !== e3) throw Error(o3(188));
    }
    function p2(e3) {
      var t3 = e3.alternate;
      if (!t3) {
        if (t3 = l3(e3), t3 === null) throw Error(o3(188));
        return t3 === e3 ? e3 : null;
      }
      for (var n4 = e3, r3 = t3; ; ) {
        var i4 = n4.return;
        if (i4 === null) break;
        var a3 = i4.alternate;
        if (a3 === null) {
          if (r3 = i4.return, r3 !== null) {
            n4 = r3;
            continue;
          }
          break;
        }
        if (i4.child === a3.child) {
          for (a3 = i4.child; a3; ) {
            if (a3 === n4) return f2(i4), e3;
            if (a3 === r3) return f2(i4), t3;
            a3 = a3.sibling;
          }
          throw Error(o3(188));
        }
        if (n4.return !== r3.return) n4 = i4, r3 = a3;
        else {
          for (var s3 = false, c4 = i4.child; c4; ) {
            if (c4 === n4) {
              s3 = true, n4 = i4, r3 = a3;
              break;
            }
            if (c4 === r3) {
              s3 = true, r3 = i4, n4 = a3;
              break;
            }
            c4 = c4.sibling;
          }
          if (!s3) {
            for (c4 = a3.child; c4; ) {
              if (c4 === n4) {
                s3 = true, n4 = a3, r3 = i4;
                break;
              }
              if (c4 === r3) {
                s3 = true, r3 = a3, n4 = i4;
                break;
              }
              c4 = c4.sibling;
            }
            if (!s3) throw Error(o3(189));
          }
        }
        if (n4.alternate !== r3) throw Error(o3(190));
      }
      if (n4.tag !== 3) throw Error(o3(188));
      return n4.stateNode.current === n4 ? e3 : t3;
    }
    function m2(e3) {
      var t3 = e3.tag;
      if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e3;
      for (e3 = e3.child; e3 !== null; ) {
        if (t3 = m2(e3), t3 !== null) return t3;
        e3 = e3.sibling;
      }
      return null;
    }
    var h2 = Object.assign, g2 = /* @__PURE__ */ Symbol.for(`react.element`), _2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), v2 = /* @__PURE__ */ Symbol.for(`react.portal`), y2 = /* @__PURE__ */ Symbol.for(`react.fragment`), b2 = /* @__PURE__ */ Symbol.for(`react.strict_mode`), x2 = /* @__PURE__ */ Symbol.for(`react.profiler`), S2 = /* @__PURE__ */ Symbol.for(`react.consumer`), C2 = /* @__PURE__ */ Symbol.for(`react.context`), w2 = /* @__PURE__ */ Symbol.for(`react.forward_ref`), T2 = /* @__PURE__ */ Symbol.for(`react.suspense`), E2 = /* @__PURE__ */ Symbol.for(`react.suspense_list`), D2 = /* @__PURE__ */ Symbol.for(`react.memo`), O2 = /* @__PURE__ */ Symbol.for(`react.lazy`), k2 = /* @__PURE__ */ Symbol.for(`react.activity`), ee2 = /* @__PURE__ */ Symbol.for(`react.memo_cache_sentinel`), te2 = Symbol.iterator;
    function ne2(e3) {
      return typeof e3 != `object` || !e3 ? null : (e3 = te2 && e3[te2] || e3[`@@iterator`], typeof e3 == `function` ? e3 : null);
    }
    var re2 = /* @__PURE__ */ Symbol.for(`react.client.reference`);
    function ie2(e3) {
      if (e3 == null) return null;
      if (typeof e3 == `function`) return e3.$$typeof === re2 ? null : e3.displayName || e3.name || null;
      if (typeof e3 == `string`) return e3;
      switch (e3) {
        case y2:
          return `Fragment`;
        case x2:
          return `Profiler`;
        case b2:
          return `StrictMode`;
        case T2:
          return `Suspense`;
        case E2:
          return `SuspenseList`;
        case k2:
          return `Activity`;
      }
      if (typeof e3 == `object`) switch (e3.$$typeof) {
        case v2:
          return `Portal`;
        case C2:
          return e3.displayName || `Context`;
        case S2:
          return (e3._context.displayName || `Context`) + `.Consumer`;
        case w2:
          var t3 = e3.render;
          return e3 = e3.displayName, e3 ||= (e3 = t3.displayName || t3.name || ``, e3 === `` ? `ForwardRef` : `ForwardRef(` + e3 + `)`), e3;
        case D2:
          return t3 = e3.displayName || null, t3 === null ? ie2(e3.type) || `Memo` : t3;
        case O2:
          t3 = e3._payload, e3 = e3._init;
          try {
            return ie2(e3(t3));
          } catch {
          }
      }
      return null;
    }
    var ae2 = Array.isArray, A2 = n3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j2 = i3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe2 = { pending: false, data: null, method: null, action: null }, se2 = [], ce2 = -1;
    function le2(e3) {
      return { current: e3 };
    }
    function ue2(e3) {
      0 > ce2 || (e3.current = se2[ce2], se2[ce2] = null, ce2--);
    }
    function de2(e3, t3) {
      ce2++, se2[ce2] = e3.current, e3.current = t3;
    }
    var fe2 = le2(null), M2 = le2(null), pe2 = le2(null), N2 = le2(null);
    function me2(e3, t3) {
      switch (de2(pe2, t3), de2(M2, e3), de2(fe2, null), t3.nodeType) {
        case 9:
        case 11:
          e3 = (e3 = t3.documentElement) && (e3 = e3.namespaceURI) ? Vd(e3) : 0;
          break;
        default:
          if (e3 = t3.tagName, t3 = t3.namespaceURI) t3 = Vd(t3), e3 = Hd(t3, e3);
          else switch (e3) {
            case `svg`:
              e3 = 1;
              break;
            case `math`:
              e3 = 2;
              break;
            default:
              e3 = 0;
          }
      }
      ue2(fe2), de2(fe2, e3);
    }
    function he2() {
      ue2(fe2), ue2(M2), ue2(pe2);
    }
    function ge2(e3) {
      e3.memoizedState !== null && de2(N2, e3);
      var t3 = fe2.current, n4 = Hd(t3, e3.type);
      t3 !== n4 && (de2(M2, e3), de2(fe2, n4));
    }
    function _e2(e3) {
      M2.current === e3 && (ue2(fe2), ue2(M2)), N2.current === e3 && (ue2(N2), Qf._currentValue = oe2);
    }
    var ve2, ye2;
    function be2(e3) {
      if (ve2 === void 0) try {
        throw Error();
      } catch (e4) {
        var t3 = e4.stack.trim().match(/\n( *(at )?)/);
        ve2 = t3 && t3[1] || ``, ye2 = -1 < e4.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e4.stack.indexOf(`@`) ? `@unknown:0:0` : ``;
      }
      return `
` + ve2 + e3 + ye2;
    }
    var xe2 = false;
    function Se2(e3, t3) {
      if (!e3 || xe2) return ``;
      xe2 = true;
      var n4 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r3 = { DetermineComponentFrameRoot: function() {
          try {
            if (t3) {
              var n5 = function() {
                throw Error();
              };
              if (Object.defineProperty(n5.prototype, "props", { set: function() {
                throw Error();
              } }), typeof Reflect == `object` && Reflect.construct) {
                try {
                  Reflect.construct(n5, []);
                } catch (e4) {
                  var r4 = e4;
                }
                Reflect.construct(e3, [], n5);
              } else {
                try {
                  n5.call();
                } catch (e4) {
                  r4 = e4;
                }
                e3.call(n5.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (e4) {
                r4 = e4;
              }
              (n5 = e3()) && typeof n5.catch == `function` && n5.catch(function() {
              });
            }
          } catch (e4) {
            if (e4 && r4 && typeof e4.stack == `string`) return [e4.stack, r4.stack];
          }
          return [null, null];
        } };
        r3.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i4 = Object.getOwnPropertyDescriptor(r3.DetermineComponentFrameRoot, `name`);
        i4 && i4.configurable && Object.defineProperty(r3.DetermineComponentFrameRoot, "name", { value: `DetermineComponentFrameRoot` });
        var a3 = r3.DetermineComponentFrameRoot(), o4 = a3[0], s3 = a3[1];
        if (o4 && s3) {
          var c4 = o4.split(`
`), l4 = s3.split(`
`);
          for (i4 = r3 = 0; r3 < c4.length && !c4[r3].includes(`DetermineComponentFrameRoot`); ) r3++;
          for (; i4 < l4.length && !l4[i4].includes(`DetermineComponentFrameRoot`); ) i4++;
          if (r3 === c4.length || i4 === l4.length) for (r3 = c4.length - 1, i4 = l4.length - 1; 1 <= r3 && 0 <= i4 && c4[r3] !== l4[i4]; ) i4--;
          for (; 1 <= r3 && 0 <= i4; r3--, i4--) if (c4[r3] !== l4[i4]) {
            if (r3 !== 1 || i4 !== 1) do
              if (r3--, i4--, 0 > i4 || c4[r3] !== l4[i4]) {
                var u3 = `
` + c4[r3].replace(` at new `, ` at `);
                return e3.displayName && u3.includes(`<anonymous>`) && (u3 = u3.replace(`<anonymous>`, e3.displayName)), u3;
              }
            while (1 <= r3 && 0 <= i4);
            break;
          }
        }
      } finally {
        xe2 = false, Error.prepareStackTrace = n4;
      }
      return (n4 = e3 ? e3.displayName || e3.name : ``) ? be2(n4) : ``;
    }
    function Ce2(e3, t3) {
      switch (e3.tag) {
        case 26:
        case 27:
        case 5:
          return be2(e3.type);
        case 16:
          return be2(`Lazy`);
        case 13:
          return e3.child !== t3 && t3 !== null ? be2(`Suspense Fallback`) : be2(`Suspense`);
        case 19:
          return be2(`SuspenseList`);
        case 0:
        case 15:
          return Se2(e3.type, false);
        case 11:
          return Se2(e3.type.render, false);
        case 1:
          return Se2(e3.type, true);
        case 31:
          return be2(`Activity`);
        default:
          return ``;
      }
    }
    function we2(e3) {
      try {
        var t3 = ``, n4 = null;
        do
          t3 += Ce2(e3, n4), n4 = e3, e3 = e3.return;
        while (e3);
        return t3;
      } catch (e4) {
        return `
Error generating stack: ` + e4.message + `
` + e4.stack;
      }
    }
    var Te2 = Object.prototype.hasOwnProperty, Ee2 = t2.unstable_scheduleCallback, De2 = t2.unstable_cancelCallback, Oe2 = t2.unstable_shouldYield, ke2 = t2.unstable_requestPaint, Ae2 = t2.unstable_now, je2 = t2.unstable_getCurrentPriorityLevel, Me2 = t2.unstable_ImmediatePriority, Ne2 = t2.unstable_UserBlockingPriority, Pe2 = t2.unstable_NormalPriority, Fe2 = t2.unstable_LowPriority, Ie2 = t2.unstable_IdlePriority, P2 = t2.log, Le2 = t2.unstable_setDisableYieldValue, Re2 = null, ze2 = null;
    function F2(e3) {
      if (typeof P2 == `function` && Le2(e3), ze2 && typeof ze2.setStrictMode == `function`) try {
        ze2.setStrictMode(Re2, e3);
      } catch {
      }
    }
    var Be2 = Math.clz32 ? Math.clz32 : I2, Ve2 = Math.log, He2 = Math.LN2;
    function I2(e3) {
      return e3 >>>= 0, e3 === 0 ? 32 : 31 - (Ve2(e3) / He2 | 0) | 0;
    }
    var Ue2 = 256, We2 = 262144, Ge2 = 4194304;
    function Ke2(e3) {
      var t3 = e3 & 42;
      if (t3 !== 0) return t3;
      switch (e3 & -e3) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e3 & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e3 & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e3 & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e3;
      }
    }
    function qe2(e3, t3, n4) {
      var r3 = e3.pendingLanes;
      if (r3 === 0) return 0;
      var i4 = 0, a3 = e3.suspendedLanes, o4 = e3.pingedLanes;
      e3 = e3.warmLanes;
      var s3 = r3 & 134217727;
      return s3 === 0 ? (s3 = r3 & ~a3, s3 === 0 ? o4 === 0 ? n4 || (n4 = r3 & ~e3, n4 !== 0 && (i4 = Ke2(n4))) : i4 = Ke2(o4) : i4 = Ke2(s3)) : (r3 = s3 & ~a3, r3 === 0 ? (o4 &= s3, o4 === 0 ? n4 || (n4 = s3 & ~e3, n4 !== 0 && (i4 = Ke2(n4))) : i4 = Ke2(o4)) : i4 = Ke2(r3)), i4 === 0 ? 0 : t3 !== 0 && t3 !== i4 && (t3 & a3) === 0 && (a3 = i4 & -i4, n4 = t3 & -t3, a3 >= n4 || a3 === 32 && n4 & 4194048) ? t3 : i4;
    }
    function Je2(e3, t3) {
      return (e3.pendingLanes & ~(e3.suspendedLanes & ~e3.pingedLanes) & t3) === 0;
    }
    function Ye2(e3, t3) {
      switch (e3) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t3 + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t3 + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Xe2() {
      var e3 = Ge2;
      return Ge2 <<= 1, !(Ge2 & 62914560) && (Ge2 = 4194304), e3;
    }
    function Ze2(e3) {
      for (var t3 = [], n4 = 0; 31 > n4; n4++) t3.push(e3);
      return t3;
    }
    function Qe2(e3, t3) {
      e3.pendingLanes |= t3, t3 !== 268435456 && (e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.warmLanes = 0);
    }
    function $e2(e3, t3, n4, r3, i4, a3) {
      var o4 = e3.pendingLanes;
      e3.pendingLanes = n4, e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.warmLanes = 0, e3.expiredLanes &= n4, e3.entangledLanes &= n4, e3.errorRecoveryDisabledLanes &= n4, e3.shellSuspendCounter = 0;
      var s3 = e3.entanglements, c4 = e3.expirationTimes, l4 = e3.hiddenUpdates;
      for (n4 = o4 & ~n4; 0 < n4; ) {
        var u3 = 31 - Be2(n4), d3 = 1 << u3;
        s3[u3] = 0, c4[u3] = -1;
        var f3 = l4[u3];
        if (f3 !== null) for (l4[u3] = null, u3 = 0; u3 < f3.length; u3++) {
          var p3 = f3[u3];
          p3 !== null && (p3.lane &= -536870913);
        }
        n4 &= ~d3;
      }
      r3 !== 0 && et2(e3, r3, 0), a3 !== 0 && i4 === 0 && e3.tag !== 0 && (e3.suspendedLanes |= a3 & ~(o4 & ~t3));
    }
    function et2(e3, t3, n4) {
      e3.pendingLanes |= t3, e3.suspendedLanes &= ~t3;
      var r3 = 31 - Be2(t3);
      e3.entangledLanes |= t3, e3.entanglements[r3] = e3.entanglements[r3] | 1073741824 | n4 & 261930;
    }
    function tt2(e3, t3) {
      var n4 = e3.entangledLanes |= t3;
      for (e3 = e3.entanglements; n4; ) {
        var r3 = 31 - Be2(n4), i4 = 1 << r3;
        i4 & t3 | e3[r3] & t3 && (e3[r3] |= t3), n4 &= ~i4;
      }
    }
    function nt2(e3, t3) {
      var n4 = t3 & -t3;
      return n4 = n4 & 42 ? 1 : rt2(n4), (n4 & (e3.suspendedLanes | t3)) === 0 ? n4 : 0;
    }
    function rt2(e3) {
      switch (e3) {
        case 2:
          e3 = 1;
          break;
        case 8:
          e3 = 4;
          break;
        case 32:
          e3 = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e3 = 128;
          break;
        case 268435456:
          e3 = 134217728;
          break;
        default:
          e3 = 0;
      }
      return e3;
    }
    function it2(e3) {
      return e3 &= -e3, 2 < e3 ? 8 < e3 ? e3 & 134217727 ? 32 : 268435456 : 8 : 2;
    }
    function at2() {
      var e3 = j2.p;
      return e3 === 0 ? (e3 = window.event, e3 === void 0 ? 32 : mp(e3.type)) : e3;
    }
    function ot2(e3, t3) {
      var n4 = j2.p;
      try {
        return j2.p = e3, t3();
      } finally {
        j2.p = n4;
      }
    }
    var st2 = Math.random().toString(36).slice(2), ct2 = `__reactFiber$` + st2, lt2 = `__reactProps$` + st2, ut2 = `__reactContainer$` + st2, dt2 = `__reactEvents$` + st2, ft2 = `__reactListeners$` + st2, pt2 = `__reactHandles$` + st2, mt2 = `__reactResources$` + st2, ht2 = `__reactMarker$` + st2;
    function gt2(e3) {
      delete e3[ct2], delete e3[lt2], delete e3[dt2], delete e3[ft2], delete e3[pt2];
    }
    function _t2(e3) {
      var t3 = e3[ct2];
      if (t3) return t3;
      for (var n4 = e3.parentNode; n4; ) {
        if (t3 = n4[ut2] || n4[ct2]) {
          if (n4 = t3.alternate, t3.child !== null || n4 !== null && n4.child !== null) for (e3 = df(e3); e3 !== null; ) {
            if (n4 = e3[ct2]) return n4;
            e3 = df(e3);
          }
          return t3;
        }
        e3 = n4, n4 = e3.parentNode;
      }
      return null;
    }
    function vt2(e3) {
      if (e3 = e3[ct2] || e3[ut2]) {
        var t3 = e3.tag;
        if (t3 === 5 || t3 === 6 || t3 === 13 || t3 === 31 || t3 === 26 || t3 === 27 || t3 === 3) return e3;
      }
      return null;
    }
    function yt2(e3) {
      var t3 = e3.tag;
      if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e3.stateNode;
      throw Error(o3(33));
    }
    function bt2(e3) {
      var t3 = e3[mt2];
      return t3 ||= e3[mt2] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }, t3;
    }
    function xt2(e3) {
      e3[ht2] = true;
    }
    var St2 = /* @__PURE__ */ new Set(), Ct2 = {};
    function L2(e3, t3) {
      wt2(e3, t3), wt2(e3 + `Capture`, t3);
    }
    function wt2(e3, t3) {
      for (Ct2[e3] = t3, e3 = 0; e3 < t3.length; e3++) St2.add(t3[e3]);
    }
    var Tt2 = RegExp(`^[:A-Z_a-z\À-\Ö\Ø-\ö\ø-\˿\Ͱ-\ͽ\Ϳ-\῿\‌-\‍\⁰-\↏\Ⰰ-\⿯\、-\퟿\豈-\﷏\ﷰ-\�][:A-Z_a-z\À-\Ö\Ø-\ö\ø-\˿\Ͱ-\ͽ\Ϳ-\῿\‌-\‍\⁰-\↏\Ⰰ-\⿯\、-\퟿\豈-\﷏\ﷰ-\�\\-.0-9\·\̀-\ͯ\‿-\⁀]*$`), Et2 = {}, Dt2 = {};
    function Ot2(e3) {
      return Te2.call(Dt2, e3) ? true : Te2.call(Et2, e3) ? false : Tt2.test(e3) ? Dt2[e3] = true : (Et2[e3] = true, false);
    }
    function kt2(e3, t3, n4) {
      if (Ot2(t3)) if (n4 === null) e3.removeAttribute(t3);
      else {
        switch (typeof n4) {
          case `undefined`:
          case `function`:
          case `symbol`:
            e3.removeAttribute(t3);
            return;
          case `boolean`:
            var r3 = t3.toLowerCase().slice(0, 5);
            if (r3 !== `data-` && r3 !== `aria-`) {
              e3.removeAttribute(t3);
              return;
            }
        }
        e3.setAttribute(t3, `` + n4);
      }
    }
    function At2(e3, t3, n4) {
      if (n4 === null) e3.removeAttribute(t3);
      else {
        switch (typeof n4) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e3.removeAttribute(t3);
            return;
        }
        e3.setAttribute(t3, `` + n4);
      }
    }
    function jt2(e3, t3, n4, r3) {
      if (r3 === null) e3.removeAttribute(n4);
      else {
        switch (typeof r3) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e3.removeAttribute(n4);
            return;
        }
        e3.setAttributeNS(t3, n4, `` + r3);
      }
    }
    function Mt2(e3) {
      switch (typeof e3) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e3;
        case `object`:
          return e3;
        default:
          return ``;
      }
    }
    function Nt2(e3) {
      var t3 = e3.type;
      return (e3 = e3.nodeName) && e3.toLowerCase() === `input` && (t3 === `checkbox` || t3 === `radio`);
    }
    function Pt2(e3, t3, n4) {
      var r3 = Object.getOwnPropertyDescriptor(e3.constructor.prototype, t3);
      if (!e3.hasOwnProperty(t3) && r3 !== void 0 && typeof r3.get == `function` && typeof r3.set == `function`) {
        var i4 = r3.get, a3 = r3.set;
        return Object.defineProperty(e3, t3, { configurable: true, get: function() {
          return i4.call(this);
        }, set: function(e4) {
          n4 = `` + e4, a3.call(this, e4);
        } }), Object.defineProperty(e3, t3, { enumerable: r3.enumerable }), { getValue: function() {
          return n4;
        }, setValue: function(e4) {
          n4 = `` + e4;
        }, stopTracking: function() {
          e3._valueTracker = null, delete e3[t3];
        } };
      }
    }
    function Ft2(e3) {
      if (!e3._valueTracker) {
        var t3 = Nt2(e3) ? `checked` : `value`;
        e3._valueTracker = Pt2(e3, t3, `` + e3[t3]);
      }
    }
    function It2(e3) {
      if (!e3) return false;
      var t3 = e3._valueTracker;
      if (!t3) return true;
      var n4 = t3.getValue(), r3 = ``;
      return e3 && (r3 = Nt2(e3) ? e3.checked ? `true` : `false` : e3.value), e3 = r3, e3 === n4 ? false : (t3.setValue(e3), true);
    }
    function Lt2(e3) {
      if (e3 ||= typeof document < `u` ? document : void 0, e3 === void 0) return null;
      try {
        return e3.activeElement || e3.body;
      } catch {
        return e3.body;
      }
    }
    var Rt2 = /[\n"\\]/g;
    function zt2(e3) {
      return e3.replace(Rt2, function(e4) {
        return `\\` + e4.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Bt2(e3, t3, n4, r3, i4, a3, o4, s3) {
      e3.name = ``, o4 != null && typeof o4 != `function` && typeof o4 != `symbol` && typeof o4 != `boolean` ? e3.type = o4 : e3.removeAttribute(`type`), t3 == null ? o4 !== `submit` && o4 !== `reset` || e3.removeAttribute(`value`) : o4 === `number` ? (t3 === 0 && e3.value === `` || e3.value != t3) && (e3.value = `` + Mt2(t3)) : e3.value !== `` + Mt2(t3) && (e3.value = `` + Mt2(t3)), t3 == null ? n4 == null ? r3 != null && e3.removeAttribute(`value`) : Ht2(e3, o4, Mt2(n4)) : Ht2(e3, o4, Mt2(t3)), i4 == null && a3 != null && (e3.defaultChecked = !!a3), i4 != null && (e3.checked = i4 && typeof i4 != `function` && typeof i4 != `symbol`), s3 != null && typeof s3 != `function` && typeof s3 != `symbol` && typeof s3 != `boolean` ? e3.name = `` + Mt2(s3) : e3.removeAttribute(`name`);
    }
    function Vt2(e3, t3, n4, r3, i4, a3, o4, s3) {
      if (a3 != null && typeof a3 != `function` && typeof a3 != `symbol` && typeof a3 != `boolean` && (e3.type = a3), t3 != null || n4 != null) {
        if (!(a3 !== `submit` && a3 !== `reset` || t3 != null)) {
          Ft2(e3);
          return;
        }
        n4 = n4 == null ? `` : `` + Mt2(n4), t3 = t3 == null ? n4 : `` + Mt2(t3), s3 || t3 === e3.value || (e3.value = t3), e3.defaultValue = t3;
      }
      r3 ??= i4, r3 = typeof r3 != `function` && typeof r3 != `symbol` && !!r3, e3.checked = s3 ? e3.checked : !!r3, e3.defaultChecked = !!r3, o4 != null && typeof o4 != `function` && typeof o4 != `symbol` && typeof o4 != `boolean` && (e3.name = o4), Ft2(e3);
    }
    function Ht2(e3, t3, n4) {
      t3 === `number` && Lt2(e3.ownerDocument) === e3 || e3.defaultValue === `` + n4 || (e3.defaultValue = `` + n4);
    }
    function Ut2(e3, t3, n4, r3) {
      if (e3 = e3.options, t3) {
        t3 = {};
        for (var i4 = 0; i4 < n4.length; i4++) t3[`$` + n4[i4]] = true;
        for (n4 = 0; n4 < e3.length; n4++) i4 = t3.hasOwnProperty(`$` + e3[n4].value), e3[n4].selected !== i4 && (e3[n4].selected = i4), i4 && r3 && (e3[n4].defaultSelected = true);
      } else {
        for (n4 = `` + Mt2(n4), t3 = null, i4 = 0; i4 < e3.length; i4++) {
          if (e3[i4].value === n4) {
            e3[i4].selected = true, r3 && (e3[i4].defaultSelected = true);
            return;
          }
          t3 !== null || e3[i4].disabled || (t3 = e3[i4]);
        }
        t3 !== null && (t3.selected = true);
      }
    }
    function Wt2(e3, t3, n4) {
      if (t3 != null && (t3 = `` + Mt2(t3), t3 !== e3.value && (e3.value = t3), n4 == null)) {
        e3.defaultValue !== t3 && (e3.defaultValue = t3);
        return;
      }
      e3.defaultValue = n4 == null ? `` : `` + Mt2(n4);
    }
    function Gt2(e3, t3, n4, r3) {
      if (t3 == null) {
        if (r3 != null) {
          if (n4 != null) throw Error(o3(92));
          if (ae2(r3)) {
            if (1 < r3.length) throw Error(o3(93));
            r3 = r3[0];
          }
          n4 = r3;
        }
        n4 ??= ``, t3 = n4;
      }
      n4 = Mt2(t3), e3.defaultValue = n4, r3 = e3.textContent, r3 === n4 && r3 !== `` && r3 !== null && (e3.value = r3), Ft2(e3);
    }
    function Kt2(e3, t3) {
      if (t3) {
        var n4 = e3.firstChild;
        if (n4 && n4 === e3.lastChild && n4.nodeType === 3) {
          n4.nodeValue = t3;
          return;
        }
      }
      e3.textContent = t3;
    }
    var qt2 = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
    function Jt2(e3, t3, n4) {
      var r3 = t3.indexOf(`--`) === 0;
      n4 == null || typeof n4 == `boolean` || n4 === `` ? r3 ? e3.setProperty(t3, ``) : t3 === `float` ? e3.cssFloat = `` : e3[t3] = `` : r3 ? e3.setProperty(t3, n4) : typeof n4 != `number` || n4 === 0 || qt2.has(t3) ? t3 === `float` ? e3.cssFloat = n4 : e3[t3] = (`` + n4).trim() : e3[t3] = n4 + `px`;
    }
    function Yt2(e3, t3, n4) {
      if (t3 != null && typeof t3 != `object`) throw Error(o3(62));
      if (e3 = e3.style, n4 != null) {
        for (var r3 in n4) !n4.hasOwnProperty(r3) || t3 != null && t3.hasOwnProperty(r3) || (r3.indexOf(`--`) === 0 ? e3.setProperty(r3, ``) : r3 === `float` ? e3.cssFloat = `` : e3[r3] = ``);
        for (var i4 in t3) r3 = t3[i4], t3.hasOwnProperty(i4) && n4[i4] !== r3 && Jt2(e3, i4, r3);
      } else for (var a3 in t3) t3.hasOwnProperty(a3) && Jt2(e3, a3, t3[a3]);
    }
    function Xt2(e3) {
      if (e3.indexOf(`-`) === -1) return false;
      switch (e3) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return false;
        default:
          return true;
      }
    }
    var Zt2 = /* @__PURE__ */ new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]), Qt2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function $t2(e3) {
      return Qt2.test(`` + e3) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e3;
    }
    function en2() {
    }
    var tn2 = null;
    function nn2(e3) {
      return e3 = e3.target || e3.srcElement || window, e3.correspondingUseElement && (e3 = e3.correspondingUseElement), e3.nodeType === 3 ? e3.parentNode : e3;
    }
    var rn2 = null, an2 = null;
    function on2(e3) {
      var t3 = vt2(e3);
      if (t3 && (e3 = t3.stateNode)) {
        var n4 = e3[lt2] || null;
        a: switch (e3 = t3.stateNode, t3.type) {
          case `input`:
            if (Bt2(e3, n4.value, n4.defaultValue, n4.defaultValue, n4.checked, n4.defaultChecked, n4.type, n4.name), t3 = n4.name, n4.type === `radio` && t3 != null) {
              for (n4 = e3; n4.parentNode; ) n4 = n4.parentNode;
              for (n4 = n4.querySelectorAll(`input[name="` + zt2(`` + t3) + `"][type="radio"]`), t3 = 0; t3 < n4.length; t3++) {
                var r3 = n4[t3];
                if (r3 !== e3 && r3.form === e3.form) {
                  var i4 = r3[lt2] || null;
                  if (!i4) throw Error(o3(90));
                  Bt2(r3, i4.value, i4.defaultValue, i4.defaultValue, i4.checked, i4.defaultChecked, i4.type, i4.name);
                }
              }
              for (t3 = 0; t3 < n4.length; t3++) r3 = n4[t3], r3.form === e3.form && It2(r3);
            }
            break a;
          case `textarea`:
            Wt2(e3, n4.value, n4.defaultValue);
            break a;
          case `select`:
            t3 = n4.value, t3 != null && Ut2(e3, !!n4.multiple, t3, false);
        }
      }
    }
    var sn2 = false;
    function cn2(e3, t3, n4) {
      if (sn2) return e3(t3, n4);
      sn2 = true;
      try {
        return e3(t3);
      } finally {
        if (sn2 = false, (rn2 !== null || an2 !== null) && (_u(), rn2 && (t3 = rn2, e3 = an2, an2 = rn2 = null, on2(t3), e3))) for (t3 = 0; t3 < e3.length; t3++) on2(e3[t3]);
      }
    }
    function ln2(e3, t3) {
      var n4 = e3.stateNode;
      if (n4 === null) return null;
      var r3 = n4[lt2] || null;
      if (r3 === null) return null;
      n4 = r3[t3];
      a: switch (t3) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          (r3 = !r3.disabled) || (e3 = e3.type, r3 = !(e3 === `button` || e3 === `input` || e3 === `select` || e3 === `textarea`)), e3 = !r3;
          break a;
        default:
          e3 = false;
      }
      if (e3) return null;
      if (n4 && typeof n4 != `function`) throw Error(o3(231, t3, typeof n4));
      return n4;
    }
    var un2 = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0), dn2 = false;
    if (un2) try {
      var fn2 = {};
      Object.defineProperty(fn2, "passive", { get: function() {
        dn2 = true;
      } }), window.addEventListener(`test`, fn2, fn2), window.removeEventListener(`test`, fn2, fn2);
    } catch {
      dn2 = false;
    }
    var pn2 = null, mn2 = null, hn2 = null;
    function gn2() {
      if (hn2) return hn2;
      var e3, t3 = mn2, n4 = t3.length, r3, i4 = `value` in pn2 ? pn2.value : pn2.textContent, a3 = i4.length;
      for (e3 = 0; e3 < n4 && t3[e3] === i4[e3]; e3++) ;
      var o4 = n4 - e3;
      for (r3 = 1; r3 <= o4 && t3[n4 - r3] === i4[a3 - r3]; r3++) ;
      return hn2 = i4.slice(e3, 1 < r3 ? 1 - r3 : void 0);
    }
    function _n2(e3) {
      var t3 = e3.keyCode;
      return `charCode` in e3 ? (e3 = e3.charCode, e3 === 0 && t3 === 13 && (e3 = 13)) : e3 = t3, e3 === 10 && (e3 = 13), 32 <= e3 || e3 === 13 ? e3 : 0;
    }
    function vn2() {
      return true;
    }
    function yn2() {
      return false;
    }
    function bn2(e3) {
      function t3(t4, n4, r3, i4, a3) {
        for (var o4 in this._reactName = t4, this._targetInst = r3, this.type = n4, this.nativeEvent = i4, this.target = a3, this.currentTarget = null, e3) e3.hasOwnProperty(o4) && (t4 = e3[o4], this[o4] = t4 ? t4(i4) : i4[o4]);
        return this.isDefaultPrevented = (i4.defaultPrevented == null ? false === i4.returnValue : i4.defaultPrevented) ? vn2 : yn2, this.isPropagationStopped = yn2, this;
      }
      return h2(t3.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var e4 = this.nativeEvent;
        e4 && (e4.preventDefault ? e4.preventDefault() : typeof e4.returnValue != `unknown` && (e4.returnValue = false), this.isDefaultPrevented = vn2);
      }, stopPropagation: function() {
        var e4 = this.nativeEvent;
        e4 && (e4.stopPropagation ? e4.stopPropagation() : typeof e4.cancelBubble != `unknown` && (e4.cancelBubble = true), this.isPropagationStopped = vn2);
      }, persist: function() {
      }, isPersistent: vn2 }), t3;
    }
    var xn2 = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e3) {
      return e3.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, Sn2 = bn2(xn2), Cn2 = h2({}, xn2, { view: 0, detail: 0 }), wn2 = bn2(Cn2), Tn2, En2, Dn2, On2 = h2({}, Cn2, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Rn2, button: 0, buttons: 0, relatedTarget: function(e3) {
      return e3.relatedTarget === void 0 ? e3.fromElement === e3.srcElement ? e3.toElement : e3.fromElement : e3.relatedTarget;
    }, movementX: function(e3) {
      return `movementX` in e3 ? e3.movementX : (e3 !== Dn2 && (Dn2 && e3.type === `mousemove` ? (Tn2 = e3.screenX - Dn2.screenX, En2 = e3.screenY - Dn2.screenY) : En2 = Tn2 = 0, Dn2 = e3), Tn2);
    }, movementY: function(e3) {
      return `movementY` in e3 ? e3.movementY : En2;
    } }), kn2 = bn2(On2), An2 = bn2(h2({}, On2, { dataTransfer: 0 })), jn2 = bn2(h2({}, Cn2, { relatedTarget: 0 })), Mn2 = bn2(h2({}, xn2, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), Nn2 = bn2(h2({}, xn2, { clipboardData: function(e3) {
      return `clipboardData` in e3 ? e3.clipboardData : window.clipboardData;
    } })), Pn2 = bn2(h2({}, xn2, { data: 0 })), Fn2 = { Esc: `Escape`, Spacebar: ` `, Left: `ArrowLeft`, Up: `ArrowUp`, Right: `ArrowRight`, Down: `ArrowDown`, Del: `Delete`, Win: `OS`, Menu: `ContextMenu`, Apps: `ContextMenu`, Scroll: `ScrollLock`, MozPrintableKey: `Unidentified` }, In2 = { 8: `Backspace`, 9: `Tab`, 12: `Clear`, 13: `Enter`, 16: `Shift`, 17: `Control`, 18: `Alt`, 19: `Pause`, 20: `CapsLock`, 27: `Escape`, 32: ` `, 33: `PageUp`, 34: `PageDown`, 35: `End`, 36: `Home`, 37: `ArrowLeft`, 38: `ArrowUp`, 39: `ArrowRight`, 40: `ArrowDown`, 45: `Insert`, 46: `Delete`, 112: `F1`, 113: `F2`, 114: `F3`, 115: `F4`, 116: `F5`, 117: `F6`, 118: `F7`, 119: `F8`, 120: `F9`, 121: `F10`, 122: `F11`, 123: `F12`, 144: `NumLock`, 145: `ScrollLock`, 224: `Meta` }, R2 = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function Ln2(e3) {
      var t3 = this.nativeEvent;
      return t3.getModifierState ? t3.getModifierState(e3) : (e3 = R2[e3]) ? !!t3[e3] : false;
    }
    function Rn2() {
      return Ln2;
    }
    var zn2 = bn2(h2({}, Cn2, { key: function(e3) {
      if (e3.key) {
        var t3 = Fn2[e3.key] || e3.key;
        if (t3 !== `Unidentified`) return t3;
      }
      return e3.type === `keypress` ? (e3 = _n2(e3), e3 === 13 ? `Enter` : String.fromCharCode(e3)) : e3.type === `keydown` || e3.type === `keyup` ? In2[e3.keyCode] || `Unidentified` : ``;
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Rn2, charCode: function(e3) {
      return e3.type === `keypress` ? _n2(e3) : 0;
    }, keyCode: function(e3) {
      return e3.type === `keydown` || e3.type === `keyup` ? e3.keyCode : 0;
    }, which: function(e3) {
      return e3.type === `keypress` ? _n2(e3) : e3.type === `keydown` || e3.type === `keyup` ? e3.keyCode : 0;
    } })), Bn2 = bn2(h2({}, On2, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Vn2 = bn2(h2({}, Cn2, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Rn2 })), Hn2 = bn2(h2({}, xn2, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Un2 = bn2(h2({}, On2, { deltaX: function(e3) {
      return `deltaX` in e3 ? e3.deltaX : `wheelDeltaX` in e3 ? -e3.wheelDeltaX : 0;
    }, deltaY: function(e3) {
      return `deltaY` in e3 ? e3.deltaY : `wheelDeltaY` in e3 ? -e3.wheelDeltaY : `wheelDelta` in e3 ? -e3.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 })), Wn2 = bn2(h2({}, xn2, { newState: 0, oldState: 0 })), Gn2 = [9, 13, 27, 32], Kn2 = un2 && `CompositionEvent` in window, qn2 = null;
    un2 && `documentMode` in document && (qn2 = document.documentMode);
    var Jn2 = un2 && `TextEvent` in window && !qn2, Yn2 = un2 && (!Kn2 || qn2 && 8 < qn2 && 11 >= qn2), Xn2 = ` `, Zn2 = false;
    function Qn2(e3, t3) {
      switch (e3) {
        case `keyup`:
          return Gn2.indexOf(t3.keyCode) !== -1;
        case `keydown`:
          return t3.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return true;
        default:
          return false;
      }
    }
    function $n2(e3) {
      return e3 = e3.detail, typeof e3 == `object` && `data` in e3 ? e3.data : null;
    }
    var er2 = false;
    function tr2(e3, t3) {
      switch (e3) {
        case `compositionend`:
          return $n2(t3);
        case `keypress`:
          return t3.which === 32 ? (Zn2 = true, Xn2) : null;
        case `textInput`:
          return e3 = t3.data, e3 === Xn2 && Zn2 ? null : e3;
        default:
          return null;
      }
    }
    function nr2(e3, t3) {
      if (er2) return e3 === `compositionend` || !Kn2 && Qn2(e3, t3) ? (e3 = gn2(), hn2 = mn2 = pn2 = null, er2 = false, e3) : null;
      switch (e3) {
        case `paste`:
          return null;
        case `keypress`:
          if (!(t3.ctrlKey || t3.altKey || t3.metaKey) || t3.ctrlKey && t3.altKey) {
            if (t3.char && 1 < t3.char.length) return t3.char;
            if (t3.which) return String.fromCharCode(t3.which);
          }
          return null;
        case `compositionend`:
          return Yn2 && t3.locale !== `ko` ? null : t3.data;
        default:
          return null;
      }
    }
    var rr2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function ir2(e3) {
      var t3 = e3 && e3.nodeName && e3.nodeName.toLowerCase();
      return t3 === `input` ? !!rr2[e3.type] : t3 === `textarea`;
    }
    function ar2(e3, t3, n4, r3) {
      rn2 ? an2 ? an2.push(r3) : an2 = [r3] : rn2 = r3, t3 = Td(t3, `onChange`), 0 < t3.length && (n4 = new Sn2(`onChange`, `change`, null, n4, r3), e3.push({ event: n4, listeners: t3 }));
    }
    var or2 = null, sr2 = null;
    function cr2(e3) {
      _d(e3, 0);
    }
    function lr2(e3) {
      if (It2(yt2(e3))) return e3;
    }
    function ur2(e3, t3) {
      if (e3 === `change`) return t3;
    }
    var dr2 = false;
    if (un2) {
      var fr2;
      if (un2) {
        var pr2 = `oninput` in document;
        if (!pr2) {
          var mr2 = document.createElement(`div`);
          mr2.setAttribute(`oninput`, `return;`), pr2 = typeof mr2.oninput == `function`;
        }
        fr2 = pr2;
      } else fr2 = false;
      dr2 = fr2 && (!document.documentMode || 9 < document.documentMode);
    }
    function hr2() {
      or2 && (or2.detachEvent(`onpropertychange`, gr2), sr2 = or2 = null);
    }
    function gr2(e3) {
      if (e3.propertyName === `value` && lr2(sr2)) {
        var t3 = [];
        ar2(t3, sr2, e3, nn2(e3)), cn2(cr2, t3);
      }
    }
    function _r2(e3, t3, n4) {
      e3 === `focusin` ? (hr2(), or2 = t3, sr2 = n4, or2.attachEvent(`onpropertychange`, gr2)) : e3 === `focusout` && hr2();
    }
    function vr2(e3) {
      if (e3 === `selectionchange` || e3 === `keyup` || e3 === `keydown`) return lr2(sr2);
    }
    function yr2(e3, t3) {
      if (e3 === `click`) return lr2(t3);
    }
    function br2(e3, t3) {
      if (e3 === `input` || e3 === `change`) return lr2(t3);
    }
    function xr2(e3, t3) {
      return e3 === t3 && (e3 !== 0 || 1 / e3 == 1 / t3) || e3 !== e3 && t3 !== t3;
    }
    var Sr2 = typeof Object.is == `function` ? Object.is : xr2;
    function Cr2(e3, t3) {
      if (Sr2(e3, t3)) return true;
      if (typeof e3 != `object` || !e3 || typeof t3 != `object` || !t3) return false;
      var n4 = Object.keys(e3), r3 = Object.keys(t3);
      if (n4.length !== r3.length) return false;
      for (r3 = 0; r3 < n4.length; r3++) {
        var i4 = n4[r3];
        if (!Te2.call(t3, i4) || !Sr2(e3[i4], t3[i4])) return false;
      }
      return true;
    }
    function wr2(e3) {
      for (; e3 && e3.firstChild; ) e3 = e3.firstChild;
      return e3;
    }
    function Tr2(e3, t3) {
      var n4 = wr2(e3);
      e3 = 0;
      for (var r3; n4; ) {
        if (n4.nodeType === 3) {
          if (r3 = e3 + n4.textContent.length, e3 <= t3 && r3 >= t3) return { node: n4, offset: t3 - e3 };
          e3 = r3;
        }
        a: {
          for (; n4; ) {
            if (n4.nextSibling) {
              n4 = n4.nextSibling;
              break a;
            }
            n4 = n4.parentNode;
          }
          n4 = void 0;
        }
        n4 = wr2(n4);
      }
    }
    function Er2(e3, t3) {
      return e3 && t3 ? e3 === t3 ? true : e3 && e3.nodeType === 3 ? false : t3 && t3.nodeType === 3 ? Er2(e3, t3.parentNode) : `contains` in e3 ? e3.contains(t3) : e3.compareDocumentPosition ? !!(e3.compareDocumentPosition(t3) & 16) : false : false;
    }
    function Dr2(e3) {
      e3 = e3 != null && e3.ownerDocument != null && e3.ownerDocument.defaultView != null ? e3.ownerDocument.defaultView : window;
      for (var t3 = Lt2(e3.document); t3 instanceof e3.HTMLIFrameElement; ) {
        try {
          var n4 = typeof t3.contentWindow.location.href == `string`;
        } catch {
          n4 = false;
        }
        if (n4) e3 = t3.contentWindow;
        else break;
        t3 = Lt2(e3.document);
      }
      return t3;
    }
    function Or2(e3) {
      var t3 = e3 && e3.nodeName && e3.nodeName.toLowerCase();
      return t3 && (t3 === `input` && (e3.type === `text` || e3.type === `search` || e3.type === `tel` || e3.type === `url` || e3.type === `password`) || t3 === `textarea` || e3.contentEditable === `true`);
    }
    var kr2 = un2 && `documentMode` in document && 11 >= document.documentMode, z2 = null, Ar2 = null, jr2 = null, B2 = false;
    function Mr2(e3, t3, n4) {
      var r3 = n4.window === n4 ? n4.document : n4.nodeType === 9 ? n4 : n4.ownerDocument;
      B2 || z2 == null || z2 !== Lt2(r3) || (r3 = z2, `selectionStart` in r3 && Or2(r3) ? r3 = { start: r3.selectionStart, end: r3.selectionEnd } : (r3 = (r3.ownerDocument && r3.ownerDocument.defaultView || window).getSelection(), r3 = { anchorNode: r3.anchorNode, anchorOffset: r3.anchorOffset, focusNode: r3.focusNode, focusOffset: r3.focusOffset }), jr2 && Cr2(jr2, r3) || (jr2 = r3, r3 = Td(Ar2, `onSelect`), 0 < r3.length && (t3 = new Sn2(`onSelect`, `select`, null, t3, n4), e3.push({ event: t3, listeners: r3 }), t3.target = z2)));
    }
    function Nr2(e3, t3) {
      var n4 = {};
      return n4[e3.toLowerCase()] = t3.toLowerCase(), n4[`Webkit` + e3] = `webkit` + t3, n4[`Moz` + e3] = `moz` + t3, n4;
    }
    var Pr2 = { animationend: Nr2(`Animation`, `AnimationEnd`), animationiteration: Nr2(`Animation`, `AnimationIteration`), animationstart: Nr2(`Animation`, `AnimationStart`), transitionrun: Nr2(`Transition`, `TransitionRun`), transitionstart: Nr2(`Transition`, `TransitionStart`), transitioncancel: Nr2(`Transition`, `TransitionCancel`), transitionend: Nr2(`Transition`, `TransitionEnd`) }, Fr2 = {}, Ir2 = {};
    un2 && (Ir2 = document.createElement(`div`).style, `AnimationEvent` in window || (delete Pr2.animationend.animation, delete Pr2.animationiteration.animation, delete Pr2.animationstart.animation), `TransitionEvent` in window || delete Pr2.transitionend.transition);
    function Lr2(e3) {
      if (Fr2[e3]) return Fr2[e3];
      if (!Pr2[e3]) return e3;
      var t3 = Pr2[e3], n4;
      for (n4 in t3) if (t3.hasOwnProperty(n4) && n4 in Ir2) return Fr2[e3] = t3[n4];
      return e3;
    }
    var Rr2 = Lr2(`animationend`), zr2 = Lr2(`animationiteration`), Br2 = Lr2(`animationstart`), Vr2 = Lr2(`transitionrun`), Hr2 = Lr2(`transitionstart`), Ur2 = Lr2(`transitioncancel`), Wr2 = Lr2(`transitionend`), Gr2 = /* @__PURE__ */ new Map(), Kr2 = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
    Kr2.push(`scrollEnd`);
    function qr2(e3, t3) {
      Gr2.set(e3, t3), L2(t3, [e3]);
    }
    var V2 = typeof reportError == `function` ? reportError : function(e3) {
      if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
        var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e3 == `object` && e3 && typeof e3.message == `string` ? String(e3.message) : String(e3), error: e3 });
        if (!window.dispatchEvent(t3)) return;
      } else if (typeof process == `object` && typeof process.emit == `function`) {
        process.emit(`uncaughtException`, e3);
        return;
      }
      console.error(e3);
    }, Jr2 = [], H2 = 0, Yr2 = 0;
    function U2() {
      for (var e3 = H2, t3 = Yr2 = H2 = 0; t3 < e3; ) {
        var n4 = Jr2[t3];
        Jr2[t3++] = null;
        var r3 = Jr2[t3];
        Jr2[t3++] = null;
        var i4 = Jr2[t3];
        Jr2[t3++] = null;
        var a3 = Jr2[t3];
        if (Jr2[t3++] = null, r3 !== null && i4 !== null) {
          var o4 = r3.pending;
          o4 === null ? i4.next = i4 : (i4.next = o4.next, o4.next = i4), r3.pending = i4;
        }
        a3 !== 0 && $r2(n4, i4, a3);
      }
    }
    function Xr2(e3, t3, n4, r3) {
      Jr2[H2++] = e3, Jr2[H2++] = t3, Jr2[H2++] = n4, Jr2[H2++] = r3, Yr2 |= r3, e3.lanes |= r3, e3 = e3.alternate, e3 !== null && (e3.lanes |= r3);
    }
    function Zr2(e3, t3, n4, r3) {
      return Xr2(e3, t3, n4, r3), ei2(e3);
    }
    function Qr2(e3, t3) {
      return Xr2(e3, null, null, t3), ei2(e3);
    }
    function $r2(e3, t3, n4) {
      e3.lanes |= n4;
      var r3 = e3.alternate;
      r3 !== null && (r3.lanes |= n4);
      for (var i4 = false, a3 = e3.return; a3 !== null; ) a3.childLanes |= n4, r3 = a3.alternate, r3 !== null && (r3.childLanes |= n4), a3.tag === 22 && (e3 = a3.stateNode, e3 === null || e3._visibility & 1 || (i4 = true)), e3 = a3, a3 = a3.return;
      return e3.tag === 3 ? (a3 = e3.stateNode, i4 && t3 !== null && (i4 = 31 - Be2(n4), e3 = a3.hiddenUpdates, r3 = e3[i4], r3 === null ? e3[i4] = [t3] : r3.push(t3), t3.lane = n4 | 536870912), a3) : null;
    }
    function ei2(e3) {
      if (50 < cu) throw cu = 0, lu = null, Error(o3(185));
      for (var t3 = e3.return; t3 !== null; ) e3 = t3, t3 = e3.return;
      return e3.tag === 3 ? e3.stateNode : null;
    }
    var ti2 = {};
    function ni2(e3, t3, n4, r3) {
      this.tag = e3, this.key = n4, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t3, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r3, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function ri2(e3, t3, n4, r3) {
      return new ni2(e3, t3, n4, r3);
    }
    function ii2(e3) {
      return e3 = e3.prototype, !(!e3 || !e3.isReactComponent);
    }
    function ai2(e3, t3) {
      var n4 = e3.alternate;
      return n4 === null ? (n4 = ri2(e3.tag, t3, e3.key, e3.mode), n4.elementType = e3.elementType, n4.type = e3.type, n4.stateNode = e3.stateNode, n4.alternate = e3, e3.alternate = n4) : (n4.pendingProps = t3, n4.type = e3.type, n4.flags = 0, n4.subtreeFlags = 0, n4.deletions = null), n4.flags = e3.flags & 65011712, n4.childLanes = e3.childLanes, n4.lanes = e3.lanes, n4.child = e3.child, n4.memoizedProps = e3.memoizedProps, n4.memoizedState = e3.memoizedState, n4.updateQueue = e3.updateQueue, t3 = e3.dependencies, n4.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }, n4.sibling = e3.sibling, n4.index = e3.index, n4.ref = e3.ref, n4.refCleanup = e3.refCleanup, n4;
    }
    function oi2(e3, t3) {
      e3.flags &= 65011714;
      var n4 = e3.alternate;
      return n4 === null ? (e3.childLanes = 0, e3.lanes = t3, e3.child = null, e3.subtreeFlags = 0, e3.memoizedProps = null, e3.memoizedState = null, e3.updateQueue = null, e3.dependencies = null, e3.stateNode = null) : (e3.childLanes = n4.childLanes, e3.lanes = n4.lanes, e3.child = n4.child, e3.subtreeFlags = 0, e3.deletions = null, e3.memoizedProps = n4.memoizedProps, e3.memoizedState = n4.memoizedState, e3.updateQueue = n4.updateQueue, e3.type = n4.type, t3 = n4.dependencies, e3.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }), e3;
    }
    function si2(e3, t3, n4, r3, i4, a3) {
      var s3 = 0;
      if (r3 = e3, typeof e3 == `function`) ii2(e3) && (s3 = 1);
      else if (typeof e3 == `string`) s3 = Uf(e3, n4, fe2.current) ? 26 : e3 === `html` || e3 === `head` || e3 === `body` ? 27 : 5;
      else a: switch (e3) {
        case k2:
          return e3 = ri2(31, n4, t3, i4), e3.elementType = k2, e3.lanes = a3, e3;
        case y2:
          return ci2(n4.children, i4, a3, t3);
        case b2:
          s3 = 8, i4 |= 24;
          break;
        case x2:
          return e3 = ri2(12, n4, t3, i4 | 2), e3.elementType = x2, e3.lanes = a3, e3;
        case T2:
          return e3 = ri2(13, n4, t3, i4), e3.elementType = T2, e3.lanes = a3, e3;
        case E2:
          return e3 = ri2(19, n4, t3, i4), e3.elementType = E2, e3.lanes = a3, e3;
        default:
          if (typeof e3 == `object` && e3) switch (e3.$$typeof) {
            case C2:
              s3 = 10;
              break a;
            case S2:
              s3 = 9;
              break a;
            case w2:
              s3 = 11;
              break a;
            case D2:
              s3 = 14;
              break a;
            case O2:
              s3 = 16, r3 = null;
              break a;
          }
          s3 = 29, n4 = Error(o3(130, e3 === null ? `null` : typeof e3, ``)), r3 = null;
      }
      return t3 = ri2(s3, n4, t3, i4), t3.elementType = e3, t3.type = r3, t3.lanes = a3, t3;
    }
    function ci2(e3, t3, n4, r3) {
      return e3 = ri2(7, e3, r3, t3), e3.lanes = n4, e3;
    }
    function li2(e3, t3, n4) {
      return e3 = ri2(6, e3, null, t3), e3.lanes = n4, e3;
    }
    function ui2(e3) {
      var t3 = ri2(18, null, null, 0);
      return t3.stateNode = e3, t3;
    }
    function di2(e3, t3, n4) {
      return t3 = ri2(4, e3.children === null ? [] : e3.children, e3.key, t3), t3.lanes = n4, t3.stateNode = { containerInfo: e3.containerInfo, pendingChildren: null, implementation: e3.implementation }, t3;
    }
    var fi2 = /* @__PURE__ */ new WeakMap();
    function pi2(e3, t3) {
      if (typeof e3 == `object` && e3) {
        var n4 = fi2.get(e3);
        return n4 === void 0 ? (t3 = { value: e3, source: t3, stack: we2(t3) }, fi2.set(e3, t3), t3) : n4;
      }
      return { value: e3, source: t3, stack: we2(t3) };
    }
    var mi2 = [], hi2 = 0, gi2 = null, _i2 = 0, vi2 = [], W2 = 0, G2 = null, yi2 = 1, bi2 = ``;
    function xi2(e3, t3) {
      mi2[hi2++] = _i2, mi2[hi2++] = gi2, gi2 = e3, _i2 = t3;
    }
    function Si2(e3, t3, n4) {
      vi2[W2++] = yi2, vi2[W2++] = bi2, vi2[W2++] = G2, G2 = e3;
      var r3 = yi2;
      e3 = bi2;
      var i4 = 32 - Be2(r3) - 1;
      r3 &= ~(1 << i4), n4 += 1;
      var a3 = 32 - Be2(t3) + i4;
      if (30 < a3) {
        var o4 = i4 - i4 % 5;
        a3 = (r3 & (1 << o4) - 1).toString(32), r3 >>= o4, i4 -= o4, yi2 = 1 << 32 - Be2(t3) + i4 | n4 << i4 | r3, bi2 = a3 + e3;
      } else yi2 = 1 << a3 | n4 << i4 | r3, bi2 = e3;
    }
    function Ci2(e3) {
      e3.return !== null && (xi2(e3, 1), Si2(e3, 1, 0));
    }
    function wi2(e3) {
      for (; e3 === gi2; ) gi2 = mi2[--hi2], mi2[hi2] = null, _i2 = mi2[--hi2], mi2[hi2] = null;
      for (; e3 === G2; ) G2 = vi2[--W2], vi2[W2] = null, bi2 = vi2[--W2], vi2[W2] = null, yi2 = vi2[--W2], vi2[W2] = null;
    }
    function Ti2(e3, t3) {
      vi2[W2++] = yi2, vi2[W2++] = bi2, vi2[W2++] = G2, yi2 = t3.id, bi2 = t3.overflow, G2 = e3;
    }
    var Ei2 = null, Di2 = null, K2 = false, Oi2 = null, ki2 = false, Ai2 = Error(o3(519));
    function ji2(e3) {
      throw Li2(pi2(Error(o3(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e3)), Ai2;
    }
    function Mi2(e3) {
      var t3 = e3.stateNode, n4 = e3.type, r3 = e3.memoizedProps;
      switch (t3[ct2] = e3, t3[lt2] = r3, n4) {
        case `dialog`:
          vd(`cancel`, t3), vd(`close`, t3);
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          vd(`load`, t3);
          break;
        case `video`:
        case `audio`:
          for (n4 = 0; n4 < hd.length; n4++) vd(hd[n4], t3);
          break;
        case `source`:
          vd(`error`, t3);
          break;
        case `img`:
        case `image`:
        case `link`:
          vd(`error`, t3), vd(`load`, t3);
          break;
        case `details`:
          vd(`toggle`, t3);
          break;
        case `input`:
          vd(`invalid`, t3), Vt2(t3, r3.value, r3.defaultValue, r3.checked, r3.defaultChecked, r3.type, r3.name, true);
          break;
        case `select`:
          vd(`invalid`, t3);
          break;
        case `textarea`:
          vd(`invalid`, t3), Gt2(t3, r3.value, r3.defaultValue, r3.children);
      }
      n4 = r3.children, typeof n4 != `string` && typeof n4 != `number` && typeof n4 != `bigint` || t3.textContent === `` + n4 || true === r3.suppressHydrationWarning || jd(t3.textContent, n4) ? (r3.popover != null && (vd(`beforetoggle`, t3), vd(`toggle`, t3)), r3.onScroll != null && vd(`scroll`, t3), r3.onScrollEnd != null && vd(`scrollend`, t3), r3.onClick != null && (t3.onclick = en2), t3 = true) : t3 = false, t3 || ji2(e3, true);
    }
    function Ni2(e3) {
      for (Ei2 = e3.return; Ei2; ) switch (Ei2.tag) {
        case 5:
        case 31:
        case 13:
          ki2 = false;
          return;
        case 27:
        case 3:
          ki2 = true;
          return;
        default:
          Ei2 = Ei2.return;
      }
    }
    function Pi2(e3) {
      if (e3 !== Ei2) return false;
      if (!K2) return Ni2(e3), K2 = true, false;
      var t3 = e3.tag, n4;
      if ((n4 = t3 !== 3 && t3 !== 27) && ((n4 = t3 === 5) && (n4 = e3.type, n4 = !(n4 !== `form` && n4 !== `button`) || Ud(e3.type, e3.memoizedProps)), n4 = !n4), n4 && Di2 && ji2(e3), Ni2(e3), t3 === 13) {
        if (e3 = e3.memoizedState, e3 = e3 === null ? null : e3.dehydrated, !e3) throw Error(o3(317));
        Di2 = uf(e3);
      } else if (t3 === 31) {
        if (e3 = e3.memoizedState, e3 = e3 === null ? null : e3.dehydrated, !e3) throw Error(o3(317));
        Di2 = uf(e3);
      } else t3 === 27 ? (t3 = Di2, Zd(e3.type) ? (e3 = lf, lf = null, Di2 = e3) : Di2 = t3) : Di2 = Ei2 ? cf(e3.stateNode.nextSibling) : null;
      return true;
    }
    function Fi2() {
      Di2 = Ei2 = null, K2 = false;
    }
    function Ii2() {
      var e3 = Oi2;
      return e3 !== null && (Jl === null ? Jl = e3 : Jl.push.apply(Jl, e3), Oi2 = null), e3;
    }
    function Li2(e3) {
      Oi2 === null ? Oi2 = [e3] : Oi2.push(e3);
    }
    var Ri2 = le2(null), zi2 = null, Bi2 = null;
    function Vi2(e3, t3, n4) {
      de2(Ri2, t3._currentValue), t3._currentValue = n4;
    }
    function Hi2(e3) {
      e3._currentValue = Ri2.current, ue2(Ri2);
    }
    function Ui2(e3, t3, n4) {
      for (; e3 !== null; ) {
        var r3 = e3.alternate;
        if ((e3.childLanes & t3) === t3 ? r3 !== null && (r3.childLanes & t3) !== t3 && (r3.childLanes |= t3) : (e3.childLanes |= t3, r3 !== null && (r3.childLanes |= t3)), e3 === n4) break;
        e3 = e3.return;
      }
    }
    function Wi2(e3, t3, n4, r3) {
      var i4 = e3.child;
      for (i4 !== null && (i4.return = e3); i4 !== null; ) {
        var a3 = i4.dependencies;
        if (a3 !== null) {
          var s3 = i4.child;
          a3 = a3.firstContext;
          a: for (; a3 !== null; ) {
            var c4 = a3;
            a3 = i4;
            for (var l4 = 0; l4 < t3.length; l4++) if (c4.context === t3[l4]) {
              a3.lanes |= n4, c4 = a3.alternate, c4 !== null && (c4.lanes |= n4), Ui2(a3.return, n4, e3), r3 || (s3 = null);
              break a;
            }
            a3 = c4.next;
          }
        } else if (i4.tag === 18) {
          if (s3 = i4.return, s3 === null) throw Error(o3(341));
          s3.lanes |= n4, a3 = s3.alternate, a3 !== null && (a3.lanes |= n4), Ui2(s3, n4, e3), s3 = null;
        } else s3 = i4.child;
        if (s3 !== null) s3.return = i4;
        else for (s3 = i4; s3 !== null; ) {
          if (s3 === e3) {
            s3 = null;
            break;
          }
          if (i4 = s3.sibling, i4 !== null) {
            i4.return = s3.return, s3 = i4;
            break;
          }
          s3 = s3.return;
        }
        i4 = s3;
      }
    }
    function Gi2(e3, t3, n4, r3) {
      e3 = null;
      for (var i4 = t3, a3 = false; i4 !== null; ) {
        if (!a3) {
          if (i4.flags & 524288) a3 = true;
          else if (i4.flags & 262144) break;
        }
        if (i4.tag === 10) {
          var s3 = i4.alternate;
          if (s3 === null) throw Error(o3(387));
          if (s3 = s3.memoizedProps, s3 !== null) {
            var c4 = i4.type;
            Sr2(i4.pendingProps.value, s3.value) || (e3 === null ? e3 = [c4] : e3.push(c4));
          }
        } else if (i4 === N2.current) {
          if (s3 = i4.alternate, s3 === null) throw Error(o3(387));
          s3.memoizedState.memoizedState !== i4.memoizedState.memoizedState && (e3 === null ? e3 = [Qf] : e3.push(Qf));
        }
        i4 = i4.return;
      }
      e3 !== null && Wi2(t3, e3, n4, r3), t3.flags |= 262144;
    }
    function Ki2(e3) {
      for (e3 = e3.firstContext; e3 !== null; ) {
        if (!Sr2(e3.context._currentValue, e3.memoizedValue)) return true;
        e3 = e3.next;
      }
      return false;
    }
    function qi2(e3) {
      zi2 = e3, Bi2 = null, e3 = e3.dependencies, e3 !== null && (e3.firstContext = null);
    }
    function Ji2(e3) {
      return Xi2(zi2, e3);
    }
    function Yi2(e3, t3) {
      return zi2 === null && qi2(e3), Xi2(e3, t3);
    }
    function Xi2(e3, t3) {
      var n4 = t3._currentValue;
      if (t3 = { context: t3, memoizedValue: n4, next: null }, Bi2 === null) {
        if (e3 === null) throw Error(o3(308));
        Bi2 = t3, e3.dependencies = { lanes: 0, firstContext: t3 }, e3.flags |= 524288;
      } else Bi2 = Bi2.next = t3;
      return n4;
    }
    var Zi2 = typeof AbortController < `u` ? AbortController : function() {
      var e3 = [], t3 = this.signal = { aborted: false, addEventListener: function(t4, n4) {
        e3.push(n4);
      } };
      this.abort = function() {
        t3.aborted = true, e3.forEach(function(e4) {
          return e4();
        });
      };
    }, Qi2 = t2.unstable_scheduleCallback, $i2 = t2.unstable_NormalPriority, ea2 = { $$typeof: C2, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function ta2() {
      return { controller: new Zi2(), data: /* @__PURE__ */ new Map(), refCount: 0 };
    }
    function na2(e3) {
      e3.refCount--, e3.refCount === 0 && Qi2($i2, function() {
        e3.controller.abort();
      });
    }
    var ra2 = null, ia2 = 0, aa2 = 0, oa2 = null;
    function sa2(e3, t3) {
      if (ra2 === null) {
        var n4 = ra2 = [];
        ia2 = 0, aa2 = ld(), oa2 = { status: `pending`, value: void 0, then: function(e4) {
          n4.push(e4);
        } };
      }
      return ia2++, t3.then(ca2, ca2), t3;
    }
    function ca2() {
      if (--ia2 === 0 && ra2 !== null) {
        oa2 !== null && (oa2.status = `fulfilled`);
        var e3 = ra2;
        ra2 = null, aa2 = 0, oa2 = null;
        for (var t3 = 0; t3 < e3.length; t3++) (0, e3[t3])();
      }
    }
    function la2(e3, t3) {
      var n4 = [], r3 = { status: `pending`, value: null, reason: null, then: function(e4) {
        n4.push(e4);
      } };
      return e3.then(function() {
        r3.status = `fulfilled`, r3.value = t3;
        for (var e4 = 0; e4 < n4.length; e4++) (0, n4[e4])(t3);
      }, function(e4) {
        for (r3.status = `rejected`, r3.reason = e4, e4 = 0; e4 < n4.length; e4++) (0, n4[e4])(void 0);
      }), r3;
    }
    var ua2 = A2.S;
    A2.S = function(e3, t3) {
      Zl = Ae2(), typeof t3 == `object` && t3 && typeof t3.then == `function` && sa2(e3, t3), ua2 !== null && ua2(e3, t3);
    };
    var da2 = le2(null);
    function fa2() {
      var e3 = da2.current;
      return e3 === null ? Nl.pooledCache : e3;
    }
    function pa2(e3, t3) {
      t3 === null ? de2(da2, da2.current) : de2(da2, t3.pool);
    }
    function ma2() {
      var e3 = fa2();
      return e3 === null ? null : { parent: ea2._currentValue, pool: e3 };
    }
    var ha2 = Error(o3(460)), ga2 = Error(o3(474)), _a2 = Error(o3(542)), va2 = { then: function() {
    } };
    function ya2(e3) {
      return e3 = e3.status, e3 === `fulfilled` || e3 === `rejected`;
    }
    function ba2(e3, t3, n4) {
      switch (n4 = e3[n4], n4 === void 0 ? e3.push(t3) : n4 !== t3 && (t3.then(en2, en2), t3 = n4), t3.status) {
        case `fulfilled`:
          return t3.value;
        case `rejected`:
          throw e3 = t3.reason, wa2(e3), e3;
        default:
          if (typeof t3.status == `string`) t3.then(en2, en2);
          else {
            if (e3 = Nl, e3 !== null && 100 < e3.shellSuspendCounter) throw Error(o3(482));
            e3 = t3, e3.status = `pending`, e3.then(function(e4) {
              if (t3.status === `pending`) {
                var n5 = t3;
                n5.status = `fulfilled`, n5.value = e4;
              }
            }, function(e4) {
              if (t3.status === `pending`) {
                var n5 = t3;
                n5.status = `rejected`, n5.reason = e4;
              }
            });
          }
          switch (t3.status) {
            case `fulfilled`:
              return t3.value;
            case `rejected`:
              throw e3 = t3.reason, wa2(e3), e3;
          }
          throw Sa2 = t3, ha2;
      }
    }
    function xa2(e3) {
      try {
        var t3 = e3._init;
        return t3(e3._payload);
      } catch (e4) {
        throw typeof e4 == `object` && e4 && typeof e4.then == `function` ? (Sa2 = e4, ha2) : e4;
      }
    }
    var Sa2 = null;
    function Ca2() {
      if (Sa2 === null) throw Error(o3(459));
      var e3 = Sa2;
      return Sa2 = null, e3;
    }
    function wa2(e3) {
      if (e3 === ha2 || e3 === _a2) throw Error(o3(483));
    }
    var Ta2 = null, Ea2 = 0;
    function Da2(e3) {
      var t3 = Ea2;
      return Ea2 += 1, Ta2 === null && (Ta2 = []), ba2(Ta2, e3, t3);
    }
    function Oa2(e3, t3) {
      t3 = t3.props.ref, e3.ref = t3 === void 0 ? null : t3;
    }
    function ka2(e3, t3) {
      throw t3.$$typeof === g2 ? Error(o3(525)) : (e3 = Object.prototype.toString.call(t3), Error(o3(31, e3 === `[object Object]` ? `object with keys {` + Object.keys(t3).join(`, `) + `}` : e3)));
    }
    function Aa2(e3) {
      function t3(t4, n5) {
        if (e3) {
          var r4 = t4.deletions;
          r4 === null ? (t4.deletions = [n5], t4.flags |= 16) : r4.push(n5);
        }
      }
      function n4(n5, r4) {
        if (!e3) return null;
        for (; r4 !== null; ) t3(n5, r4), r4 = r4.sibling;
        return null;
      }
      function r3(e4) {
        for (var t4 = /* @__PURE__ */ new Map(); e4 !== null; ) e4.key === null ? t4.set(e4.index, e4) : t4.set(e4.key, e4), e4 = e4.sibling;
        return t4;
      }
      function i4(e4, t4) {
        return e4 = ai2(e4, t4), e4.index = 0, e4.sibling = null, e4;
      }
      function a3(t4, n5, r4) {
        return t4.index = r4, e3 ? (r4 = t4.alternate, r4 === null ? (t4.flags |= 67108866, n5) : (r4 = r4.index, r4 < n5 ? (t4.flags |= 67108866, n5) : r4)) : (t4.flags |= 1048576, n5);
      }
      function s3(t4) {
        return e3 && t4.alternate === null && (t4.flags |= 67108866), t4;
      }
      function c4(e4, t4, n5, r4) {
        return t4 === null || t4.tag !== 6 ? (t4 = li2(n5, e4.mode, r4), t4.return = e4, t4) : (t4 = i4(t4, n5), t4.return = e4, t4);
      }
      function l4(e4, t4, n5, r4) {
        var a4 = n5.type;
        return a4 === y2 ? d3(e4, t4, n5.props.children, r4, n5.key) : t4 !== null && (t4.elementType === a4 || typeof a4 == `object` && a4 && a4.$$typeof === O2 && xa2(a4) === t4.type) ? (t4 = i4(t4, n5.props), Oa2(t4, n5), t4.return = e4, t4) : (t4 = si2(n5.type, n5.key, n5.props, null, e4.mode, r4), Oa2(t4, n5), t4.return = e4, t4);
      }
      function u3(e4, t4, n5, r4) {
        return t4 === null || t4.tag !== 4 || t4.stateNode.containerInfo !== n5.containerInfo || t4.stateNode.implementation !== n5.implementation ? (t4 = di2(n5, e4.mode, r4), t4.return = e4, t4) : (t4 = i4(t4, n5.children || []), t4.return = e4, t4);
      }
      function d3(e4, t4, n5, r4, a4) {
        return t4 === null || t4.tag !== 7 ? (t4 = ci2(n5, e4.mode, r4, a4), t4.return = e4, t4) : (t4 = i4(t4, n5), t4.return = e4, t4);
      }
      function f3(e4, t4, n5) {
        if (typeof t4 == `string` && t4 !== `` || typeof t4 == `number` || typeof t4 == `bigint`) return t4 = li2(`` + t4, e4.mode, n5), t4.return = e4, t4;
        if (typeof t4 == `object` && t4) {
          switch (t4.$$typeof) {
            case _2:
              return n5 = si2(t4.type, t4.key, t4.props, null, e4.mode, n5), Oa2(n5, t4), n5.return = e4, n5;
            case v2:
              return t4 = di2(t4, e4.mode, n5), t4.return = e4, t4;
            case O2:
              return t4 = xa2(t4), f3(e4, t4, n5);
          }
          if (ae2(t4) || ne2(t4)) return t4 = ci2(t4, e4.mode, n5, null), t4.return = e4, t4;
          if (typeof t4.then == `function`) return f3(e4, Da2(t4), n5);
          if (t4.$$typeof === C2) return f3(e4, Yi2(e4, t4), n5);
          ka2(e4, t4);
        }
        return null;
      }
      function p3(e4, t4, n5, r4) {
        var i5 = t4 === null ? null : t4.key;
        if (typeof n5 == `string` && n5 !== `` || typeof n5 == `number` || typeof n5 == `bigint`) return i5 === null ? c4(e4, t4, `` + n5, r4) : null;
        if (typeof n5 == `object` && n5) {
          switch (n5.$$typeof) {
            case _2:
              return n5.key === i5 ? l4(e4, t4, n5, r4) : null;
            case v2:
              return n5.key === i5 ? u3(e4, t4, n5, r4) : null;
            case O2:
              return n5 = xa2(n5), p3(e4, t4, n5, r4);
          }
          if (ae2(n5) || ne2(n5)) return i5 === null ? d3(e4, t4, n5, r4, null) : null;
          if (typeof n5.then == `function`) return p3(e4, t4, Da2(n5), r4);
          if (n5.$$typeof === C2) return p3(e4, t4, Yi2(e4, n5), r4);
          ka2(e4, n5);
        }
        return null;
      }
      function m3(e4, t4, n5, r4, i5) {
        if (typeof r4 == `string` && r4 !== `` || typeof r4 == `number` || typeof r4 == `bigint`) return e4 = e4.get(n5) || null, c4(t4, e4, `` + r4, i5);
        if (typeof r4 == `object` && r4) {
          switch (r4.$$typeof) {
            case _2:
              return e4 = e4.get(r4.key === null ? n5 : r4.key) || null, l4(t4, e4, r4, i5);
            case v2:
              return e4 = e4.get(r4.key === null ? n5 : r4.key) || null, u3(t4, e4, r4, i5);
            case O2:
              return r4 = xa2(r4), m3(e4, t4, n5, r4, i5);
          }
          if (ae2(r4) || ne2(r4)) return e4 = e4.get(n5) || null, d3(t4, e4, r4, i5, null);
          if (typeof r4.then == `function`) return m3(e4, t4, n5, Da2(r4), i5);
          if (r4.$$typeof === C2) return m3(e4, t4, n5, Yi2(t4, r4), i5);
          ka2(t4, r4);
        }
        return null;
      }
      function h3(i5, o4, s4, c5) {
        for (var l5 = null, u4 = null, d4 = o4, h4 = o4 = 0, g4 = null; d4 !== null && h4 < s4.length; h4++) {
          d4.index > h4 ? (g4 = d4, d4 = null) : g4 = d4.sibling;
          var _3 = p3(i5, d4, s4[h4], c5);
          if (_3 === null) {
            d4 === null && (d4 = g4);
            break;
          }
          e3 && d4 && _3.alternate === null && t3(i5, d4), o4 = a3(_3, o4, h4), u4 === null ? l5 = _3 : u4.sibling = _3, u4 = _3, d4 = g4;
        }
        if (h4 === s4.length) return n4(i5, d4), K2 && xi2(i5, h4), l5;
        if (d4 === null) {
          for (; h4 < s4.length; h4++) d4 = f3(i5, s4[h4], c5), d4 !== null && (o4 = a3(d4, o4, h4), u4 === null ? l5 = d4 : u4.sibling = d4, u4 = d4);
          return K2 && xi2(i5, h4), l5;
        }
        for (d4 = r3(d4); h4 < s4.length; h4++) g4 = m3(d4, i5, h4, s4[h4], c5), g4 !== null && (e3 && g4.alternate !== null && d4.delete(g4.key === null ? h4 : g4.key), o4 = a3(g4, o4, h4), u4 === null ? l5 = g4 : u4.sibling = g4, u4 = g4);
        return e3 && d4.forEach(function(e4) {
          return t3(i5, e4);
        }), K2 && xi2(i5, h4), l5;
      }
      function g3(i5, s4, c5, l5) {
        if (c5 == null) throw Error(o3(151));
        for (var u4 = null, d4 = null, h4 = s4, g4 = s4 = 0, _3 = null, v3 = c5.next(); h4 !== null && !v3.done; g4++, v3 = c5.next()) {
          h4.index > g4 ? (_3 = h4, h4 = null) : _3 = h4.sibling;
          var y3 = p3(i5, h4, v3.value, l5);
          if (y3 === null) {
            h4 === null && (h4 = _3);
            break;
          }
          e3 && h4 && y3.alternate === null && t3(i5, h4), s4 = a3(y3, s4, g4), d4 === null ? u4 = y3 : d4.sibling = y3, d4 = y3, h4 = _3;
        }
        if (v3.done) return n4(i5, h4), K2 && xi2(i5, g4), u4;
        if (h4 === null) {
          for (; !v3.done; g4++, v3 = c5.next()) v3 = f3(i5, v3.value, l5), v3 !== null && (s4 = a3(v3, s4, g4), d4 === null ? u4 = v3 : d4.sibling = v3, d4 = v3);
          return K2 && xi2(i5, g4), u4;
        }
        for (h4 = r3(h4); !v3.done; g4++, v3 = c5.next()) v3 = m3(h4, i5, g4, v3.value, l5), v3 !== null && (e3 && v3.alternate !== null && h4.delete(v3.key === null ? g4 : v3.key), s4 = a3(v3, s4, g4), d4 === null ? u4 = v3 : d4.sibling = v3, d4 = v3);
        return e3 && h4.forEach(function(e4) {
          return t3(i5, e4);
        }), K2 && xi2(i5, g4), u4;
      }
      function b3(e4, r4, a4, c5) {
        if (typeof a4 == `object` && a4 && a4.type === y2 && a4.key === null && (a4 = a4.props.children), typeof a4 == `object` && a4) {
          switch (a4.$$typeof) {
            case _2:
              a: {
                for (var l5 = a4.key; r4 !== null; ) {
                  if (r4.key === l5) {
                    if (l5 = a4.type, l5 === y2) {
                      if (r4.tag === 7) {
                        n4(e4, r4.sibling), c5 = i4(r4, a4.props.children), c5.return = e4, e4 = c5;
                        break a;
                      }
                    } else if (r4.elementType === l5 || typeof l5 == `object` && l5 && l5.$$typeof === O2 && xa2(l5) === r4.type) {
                      n4(e4, r4.sibling), c5 = i4(r4, a4.props), Oa2(c5, a4), c5.return = e4, e4 = c5;
                      break a;
                    }
                    n4(e4, r4);
                    break;
                  } else t3(e4, r4);
                  r4 = r4.sibling;
                }
                a4.type === y2 ? (c5 = ci2(a4.props.children, e4.mode, c5, a4.key), c5.return = e4, e4 = c5) : (c5 = si2(a4.type, a4.key, a4.props, null, e4.mode, c5), Oa2(c5, a4), c5.return = e4, e4 = c5);
              }
              return s3(e4);
            case v2:
              a: {
                for (l5 = a4.key; r4 !== null; ) {
                  if (r4.key === l5) if (r4.tag === 4 && r4.stateNode.containerInfo === a4.containerInfo && r4.stateNode.implementation === a4.implementation) {
                    n4(e4, r4.sibling), c5 = i4(r4, a4.children || []), c5.return = e4, e4 = c5;
                    break a;
                  } else {
                    n4(e4, r4);
                    break;
                  }
                  else t3(e4, r4);
                  r4 = r4.sibling;
                }
                c5 = di2(a4, e4.mode, c5), c5.return = e4, e4 = c5;
              }
              return s3(e4);
            case O2:
              return a4 = xa2(a4), b3(e4, r4, a4, c5);
          }
          if (ae2(a4)) return h3(e4, r4, a4, c5);
          if (ne2(a4)) {
            if (l5 = ne2(a4), typeof l5 != `function`) throw Error(o3(150));
            return a4 = l5.call(a4), g3(e4, r4, a4, c5);
          }
          if (typeof a4.then == `function`) return b3(e4, r4, Da2(a4), c5);
          if (a4.$$typeof === C2) return b3(e4, r4, Yi2(e4, a4), c5);
          ka2(e4, a4);
        }
        return typeof a4 == `string` && a4 !== `` || typeof a4 == `number` || typeof a4 == `bigint` ? (a4 = `` + a4, r4 !== null && r4.tag === 6 ? (n4(e4, r4.sibling), c5 = i4(r4, a4), c5.return = e4, e4 = c5) : (n4(e4, r4), c5 = li2(a4, e4.mode, c5), c5.return = e4, e4 = c5), s3(e4)) : n4(e4, r4);
      }
      return function(e4, t4, n5, r4) {
        try {
          Ea2 = 0;
          var i5 = b3(e4, t4, n5, r4);
          return Ta2 = null, i5;
        } catch (t5) {
          if (t5 === ha2 || t5 === _a2) throw t5;
          var a4 = ri2(29, t5, null, e4.mode);
          return a4.lanes = r4, a4.return = e4, a4;
        }
      };
    }
    var ja2 = Aa2(true), Ma2 = Aa2(false), Na2 = false;
    function Pa2(e3) {
      e3.updateQueue = { baseState: e3.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
    }
    function Fa2(e3, t3) {
      e3 = e3.updateQueue, t3.updateQueue === e3 && (t3.updateQueue = { baseState: e3.baseState, firstBaseUpdate: e3.firstBaseUpdate, lastBaseUpdate: e3.lastBaseUpdate, shared: e3.shared, callbacks: null });
    }
    function Ia2(e3) {
      return { lane: e3, tag: 0, payload: null, callback: null, next: null };
    }
    function La2(e3, t3, n4) {
      var r3 = e3.updateQueue;
      if (r3 === null) return null;
      if (r3 = r3.shared, Ml & 2) {
        var i4 = r3.pending;
        return i4 === null ? t3.next = t3 : (t3.next = i4.next, i4.next = t3), r3.pending = t3, t3 = ei2(e3), $r2(e3, null, n4), t3;
      }
      return Xr2(e3, r3, t3, n4), ei2(e3);
    }
    function Ra2(e3, t3, n4) {
      if (t3 = t3.updateQueue, t3 !== null && (t3 = t3.shared, n4 & 4194048)) {
        var r3 = t3.lanes;
        r3 &= e3.pendingLanes, n4 |= r3, t3.lanes = n4, tt2(e3, n4);
      }
    }
    function za2(e3, t3) {
      var n4 = e3.updateQueue, r3 = e3.alternate;
      if (r3 !== null && (r3 = r3.updateQueue, n4 === r3)) {
        var i4 = null, a3 = null;
        if (n4 = n4.firstBaseUpdate, n4 !== null) {
          do {
            var o4 = { lane: n4.lane, tag: n4.tag, payload: n4.payload, callback: null, next: null };
            a3 === null ? i4 = a3 = o4 : a3 = a3.next = o4, n4 = n4.next;
          } while (n4 !== null);
          a3 === null ? i4 = a3 = t3 : a3 = a3.next = t3;
        } else i4 = a3 = t3;
        n4 = { baseState: r3.baseState, firstBaseUpdate: i4, lastBaseUpdate: a3, shared: r3.shared, callbacks: r3.callbacks }, e3.updateQueue = n4;
        return;
      }
      e3 = n4.lastBaseUpdate, e3 === null ? n4.firstBaseUpdate = t3 : e3.next = t3, n4.lastBaseUpdate = t3;
    }
    var Ba2 = false;
    function Va2() {
      if (Ba2) {
        var e3 = oa2;
        if (e3 !== null) throw e3;
      }
    }
    function Ha2(e3, t3, n4, r3) {
      Ba2 = false;
      var i4 = e3.updateQueue;
      Na2 = false;
      var a3 = i4.firstBaseUpdate, o4 = i4.lastBaseUpdate, s3 = i4.shared.pending;
      if (s3 !== null) {
        i4.shared.pending = null;
        var c4 = s3, l4 = c4.next;
        c4.next = null, o4 === null ? a3 = l4 : o4.next = l4, o4 = c4;
        var u3 = e3.alternate;
        u3 !== null && (u3 = u3.updateQueue, s3 = u3.lastBaseUpdate, s3 !== o4 && (s3 === null ? u3.firstBaseUpdate = l4 : s3.next = l4, u3.lastBaseUpdate = c4));
      }
      if (a3 !== null) {
        var d3 = i4.baseState;
        o4 = 0, u3 = l4 = c4 = null, s3 = a3;
        do {
          var f3 = s3.lane & -536870913, p3 = f3 !== s3.lane;
          if (p3 ? (Pl & f3) === f3 : (r3 & f3) === f3) {
            f3 !== 0 && f3 === aa2 && (Ba2 = true), u3 !== null && (u3 = u3.next = { lane: 0, tag: s3.tag, payload: s3.payload, callback: null, next: null });
            a: {
              var m3 = e3, g3 = s3;
              f3 = t3;
              var _3 = n4;
              switch (g3.tag) {
                case 1:
                  if (m3 = g3.payload, typeof m3 == `function`) {
                    d3 = m3.call(_3, d3, f3);
                    break a;
                  }
                  d3 = m3;
                  break a;
                case 3:
                  m3.flags = m3.flags & -65537 | 128;
                case 0:
                  if (m3 = g3.payload, f3 = typeof m3 == `function` ? m3.call(_3, d3, f3) : m3, f3 == null) break a;
                  d3 = h2({}, d3, f3);
                  break a;
                case 2:
                  Na2 = true;
              }
            }
            f3 = s3.callback, f3 !== null && (e3.flags |= 64, p3 && (e3.flags |= 8192), p3 = i4.callbacks, p3 === null ? i4.callbacks = [f3] : p3.push(f3));
          } else p3 = { lane: f3, tag: s3.tag, payload: s3.payload, callback: s3.callback, next: null }, u3 === null ? (l4 = u3 = p3, c4 = d3) : u3 = u3.next = p3, o4 |= f3;
          if (s3 = s3.next, s3 === null) {
            if (s3 = i4.shared.pending, s3 === null) break;
            p3 = s3, s3 = p3.next, p3.next = null, i4.lastBaseUpdate = p3, i4.shared.pending = null;
          }
        } while (1);
        u3 === null && (c4 = d3), i4.baseState = c4, i4.firstBaseUpdate = l4, i4.lastBaseUpdate = u3, a3 === null && (i4.shared.lanes = 0), Hl |= o4, e3.lanes = o4, e3.memoizedState = d3;
      }
    }
    function Ua2(e3, t3) {
      if (typeof e3 != `function`) throw Error(o3(191, e3));
      e3.call(t3);
    }
    function Wa2(e3, t3) {
      var n4 = e3.callbacks;
      if (n4 !== null) for (e3.callbacks = null, e3 = 0; e3 < n4.length; e3++) Ua2(n4[e3], t3);
    }
    var Ga2 = le2(null), Ka2 = le2(0);
    function qa2(e3, t3) {
      e3 = Bl, de2(Ka2, e3), de2(Ga2, t3), Bl = e3 | t3.baseLanes;
    }
    function Ja2() {
      de2(Ka2, Bl), de2(Ga2, Ga2.current);
    }
    function Ya2() {
      Bl = Ka2.current, ue2(Ga2), ue2(Ka2);
    }
    var Xa2 = le2(null), Za2 = null;
    function Qa2(e3) {
      var t3 = e3.alternate;
      de2(ro2, ro2.current & 1), de2(Xa2, e3), Za2 === null && (t3 === null || Ga2.current !== null || t3.memoizedState !== null) && (Za2 = e3);
    }
    function $a2(e3) {
      de2(ro2, ro2.current), de2(Xa2, e3), Za2 === null && (Za2 = e3);
    }
    function eo2(e3) {
      e3.tag === 22 ? (de2(ro2, ro2.current), de2(Xa2, e3), Za2 === null && (Za2 = e3)) : to2(e3);
    }
    function to2() {
      de2(ro2, ro2.current), de2(Xa2, Xa2.current);
    }
    function no2(e3) {
      ue2(Xa2), Za2 === e3 && (Za2 = null), ue2(ro2);
    }
    var ro2 = le2(0);
    function io2(e3) {
      for (var t3 = e3; t3 !== null; ) {
        if (t3.tag === 13) {
          var n4 = t3.memoizedState;
          if (n4 !== null && (n4 = n4.dehydrated, n4 === null || af(n4) || of(n4))) return t3;
        } else if (t3.tag === 19 && (t3.memoizedProps.revealOrder === `forwards` || t3.memoizedProps.revealOrder === `backwards` || t3.memoizedProps.revealOrder === `unstable_legacy-backwards` || t3.memoizedProps.revealOrder === `together`)) {
          if (t3.flags & 128) return t3;
        } else if (t3.child !== null) {
          t3.child.return = t3, t3 = t3.child;
          continue;
        }
        if (t3 === e3) break;
        for (; t3.sibling === null; ) {
          if (t3.return === null || t3.return === e3) return null;
          t3 = t3.return;
        }
        t3.sibling.return = t3.return, t3 = t3.sibling;
      }
      return null;
    }
    var ao2 = 0, q2 = null, oo2 = null, J2 = null, so2 = false, co2 = false, lo2 = false, uo2 = 0, fo2 = 0, po2 = null, mo2 = 0;
    function ho2() {
      throw Error(o3(321));
    }
    function go2(e3, t3) {
      if (t3 === null) return false;
      for (var n4 = 0; n4 < t3.length && n4 < e3.length; n4++) if (!Sr2(e3[n4], t3[n4])) return false;
      return true;
    }
    function _o2(e3, t3, n4, r3, i4, a3) {
      return ao2 = a3, q2 = t3, t3.memoizedState = null, t3.updateQueue = null, t3.lanes = 0, A2.H = e3 === null || e3.memoizedState === null ? As : js, lo2 = false, a3 = n4(r3, i4), lo2 = false, co2 && (a3 = yo2(t3, n4, r3, i4)), vo2(e3), a3;
    }
    function vo2(e3) {
      A2.H = ks;
      var t3 = oo2 !== null && oo2.next !== null;
      if (ao2 = 0, J2 = oo2 = q2 = null, so2 = false, fo2 = 0, po2 = null, t3) throw Error(o3(300));
      e3 === null || Js || (e3 = e3.dependencies, e3 !== null && Ki2(e3) && (Js = true));
    }
    function yo2(e3, t3, n4, r3) {
      q2 = e3;
      var i4 = 0;
      do {
        if (co2 && (po2 = null), fo2 = 0, co2 = false, 25 <= i4) throw Error(o3(301));
        if (i4 += 1, J2 = oo2 = null, e3.updateQueue != null) {
          var a3 = e3.updateQueue;
          a3.lastEffect = null, a3.events = null, a3.stores = null, a3.memoCache != null && (a3.memoCache.index = 0);
        }
        A2.H = Ms, a3 = t3(n4, r3);
      } while (co2);
      return a3;
    }
    function bo2() {
      var e3 = A2.H, t3 = e3.useState()[0];
      return t3 = typeof t3.then == `function` ? Eo2(t3) : t3, e3 = e3.useState()[0], (oo2 === null ? null : oo2.memoizedState) !== e3 && (q2.flags |= 1024), t3;
    }
    function xo2() {
      var e3 = uo2 !== 0;
      return uo2 = 0, e3;
    }
    function So2(e3, t3, n4) {
      t3.updateQueue = e3.updateQueue, t3.flags &= -2053, e3.lanes &= ~n4;
    }
    function Co2(e3) {
      if (so2) {
        for (e3 = e3.memoizedState; e3 !== null; ) {
          var t3 = e3.queue;
          t3 !== null && (t3.pending = null), e3 = e3.next;
        }
        so2 = false;
      }
      ao2 = 0, J2 = oo2 = q2 = null, co2 = false, fo2 = uo2 = 0, po2 = null;
    }
    function Y2() {
      var e3 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return J2 === null ? q2.memoizedState = J2 = e3 : J2 = J2.next = e3, J2;
    }
    function wo2() {
      if (oo2 === null) {
        var e3 = q2.alternate;
        e3 = e3 === null ? null : e3.memoizedState;
      } else e3 = oo2.next;
      var t3 = J2 === null ? q2.memoizedState : J2.next;
      if (t3 !== null) J2 = t3, oo2 = e3;
      else {
        if (e3 === null) throw q2.alternate === null ? Error(o3(467)) : Error(o3(310));
        oo2 = e3, e3 = { memoizedState: oo2.memoizedState, baseState: oo2.baseState, baseQueue: oo2.baseQueue, queue: oo2.queue, next: null }, J2 === null ? q2.memoizedState = J2 = e3 : J2 = J2.next = e3;
      }
      return J2;
    }
    function To2() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Eo2(e3) {
      var t3 = fo2;
      return fo2 += 1, po2 === null && (po2 = []), e3 = ba2(po2, e3, t3), t3 = q2, (J2 === null ? t3.memoizedState : J2.next) === null && (t3 = t3.alternate, A2.H = t3 === null || t3.memoizedState === null ? As : js), e3;
    }
    function Do2(e3) {
      if (typeof e3 == `object` && e3) {
        if (typeof e3.then == `function`) return Eo2(e3);
        if (e3.$$typeof === C2) return Ji2(e3);
      }
      throw Error(o3(438, String(e3)));
    }
    function Oo2(e3) {
      var t3 = null, n4 = q2.updateQueue;
      if (n4 !== null && (t3 = n4.memoCache), t3 == null) {
        var r3 = q2.alternate;
        r3 !== null && (r3 = r3.updateQueue, r3 !== null && (r3 = r3.memoCache, r3 != null && (t3 = { data: r3.data.map(function(e4) {
          return e4.slice();
        }), index: 0 })));
      }
      if (t3 ??= { data: [], index: 0 }, n4 === null && (n4 = To2(), q2.updateQueue = n4), n4.memoCache = t3, n4 = t3.data[t3.index], n4 === void 0) for (n4 = t3.data[t3.index] = Array(e3), r3 = 0; r3 < e3; r3++) n4[r3] = ee2;
      return t3.index++, n4;
    }
    function X2(e3, t3) {
      return typeof t3 == `function` ? t3(e3) : t3;
    }
    function ko2(e3) {
      return Ao2(wo2(), oo2, e3);
    }
    function Ao2(e3, t3, n4) {
      var r3 = e3.queue;
      if (r3 === null) throw Error(o3(311));
      r3.lastRenderedReducer = n4;
      var i4 = e3.baseQueue, a3 = r3.pending;
      if (a3 !== null) {
        if (i4 !== null) {
          var s3 = i4.next;
          i4.next = a3.next, a3.next = s3;
        }
        t3.baseQueue = i4 = a3, r3.pending = null;
      }
      if (a3 = e3.baseState, i4 === null) e3.memoizedState = a3;
      else {
        t3 = i4.next;
        var c4 = s3 = null, l4 = null, u3 = t3, d3 = false;
        do {
          var f3 = u3.lane & -536870913;
          if (f3 === u3.lane ? (ao2 & f3) === f3 : (Pl & f3) === f3) {
            var p3 = u3.revertLane;
            if (p3 === 0) l4 !== null && (l4 = l4.next = { lane: 0, revertLane: 0, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }), f3 === aa2 && (d3 = true);
            else if ((ao2 & p3) === p3) {
              u3 = u3.next, p3 === aa2 && (d3 = true);
              continue;
            } else f3 = { lane: 0, revertLane: u3.revertLane, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }, l4 === null ? (c4 = l4 = f3, s3 = a3) : l4 = l4.next = f3, q2.lanes |= p3, Hl |= p3;
            f3 = u3.action, lo2 && n4(a3, f3), a3 = u3.hasEagerState ? u3.eagerState : n4(a3, f3);
          } else p3 = { lane: f3, revertLane: u3.revertLane, gesture: u3.gesture, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null }, l4 === null ? (c4 = l4 = p3, s3 = a3) : l4 = l4.next = p3, q2.lanes |= f3, Hl |= f3;
          u3 = u3.next;
        } while (u3 !== null && u3 !== t3);
        if (l4 === null ? s3 = a3 : l4.next = c4, !Sr2(a3, e3.memoizedState) && (Js = true, d3 && (n4 = oa2, n4 !== null))) throw n4;
        e3.memoizedState = a3, e3.baseState = s3, e3.baseQueue = l4, r3.lastRenderedState = a3;
      }
      return i4 === null && (r3.lanes = 0), [e3.memoizedState, r3.dispatch];
    }
    function jo2(e3) {
      var t3 = wo2(), n4 = t3.queue;
      if (n4 === null) throw Error(o3(311));
      n4.lastRenderedReducer = e3;
      var r3 = n4.dispatch, i4 = n4.pending, a3 = t3.memoizedState;
      if (i4 !== null) {
        n4.pending = null;
        var s3 = i4 = i4.next;
        do
          a3 = e3(a3, s3.action), s3 = s3.next;
        while (s3 !== i4);
        Sr2(a3, t3.memoizedState) || (Js = true), t3.memoizedState = a3, t3.baseQueue === null && (t3.baseState = a3), n4.lastRenderedState = a3;
      }
      return [a3, r3];
    }
    function Mo2(e3, t3, n4) {
      var r3 = q2, i4 = wo2(), a3 = K2;
      if (a3) {
        if (n4 === void 0) throw Error(o3(407));
        n4 = n4();
      } else n4 = t3();
      var s3 = !Sr2((oo2 || i4).memoizedState, n4);
      if (s3 && (i4.memoizedState = n4, Js = true), i4 = i4.queue, ts2(Po2.bind(null, r3, i4, e3), [e3]), i4.getSnapshot !== t3 || s3 || J2 !== null && J2.memoizedState.tag & 1) {
        if (r3.flags |= 2048, Xo2(9, { destroy: void 0 }, No2.bind(null, r3, i4, n4, t3), null), Nl === null) throw Error(o3(349));
        a3 || ao2 & 127 || Z2(r3, t3, n4);
      }
      return n4;
    }
    function Z2(e3, t3, n4) {
      e3.flags |= 16384, e3 = { getSnapshot: t3, value: n4 }, t3 = q2.updateQueue, t3 === null ? (t3 = To2(), q2.updateQueue = t3, t3.stores = [e3]) : (n4 = t3.stores, n4 === null ? t3.stores = [e3] : n4.push(e3));
    }
    function No2(e3, t3, n4, r3) {
      t3.value = n4, t3.getSnapshot = r3, Fo2(t3) && Io2(e3);
    }
    function Po2(e3, t3, n4) {
      return n4(function() {
        Fo2(t3) && Io2(e3);
      });
    }
    function Fo2(e3) {
      var t3 = e3.getSnapshot;
      e3 = e3.value;
      try {
        var n4 = t3();
        return !Sr2(e3, n4);
      } catch {
        return true;
      }
    }
    function Io2(e3) {
      var t3 = Qr2(e3, 2);
      t3 !== null && fu(t3, e3, 2);
    }
    function Lo2(e3) {
      var t3 = Y2();
      if (typeof e3 == `function`) {
        var n4 = e3;
        if (e3 = n4(), lo2) {
          F2(true);
          try {
            n4();
          } finally {
            F2(false);
          }
        }
      }
      return t3.memoizedState = t3.baseState = e3, t3.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: X2, lastRenderedState: e3 }, t3;
    }
    function Ro2(e3, t3, n4, r3) {
      return e3.baseState = n4, Ao2(e3, oo2, typeof r3 == `function` ? r3 : X2);
    }
    function zo2(e3, t3, n4, r3, i4) {
      if (Es(e3)) throw Error(o3(485));
      if (e3 = t3.action, e3 !== null) {
        var a3 = { payload: i4, action: e3, next: null, isTransition: true, status: `pending`, value: null, reason: null, listeners: [], then: function(e4) {
          a3.listeners.push(e4);
        } };
        A2.T === null ? a3.isTransition = false : n4(true), r3(a3), n4 = t3.pending, n4 === null ? (a3.next = t3.pending = a3, Bo2(t3, a3)) : (a3.next = n4.next, t3.pending = n4.next = a3);
      }
    }
    function Bo2(e3, t3) {
      var n4 = t3.action, r3 = t3.payload, i4 = e3.state;
      if (t3.isTransition) {
        var a3 = A2.T, o4 = {};
        A2.T = o4;
        try {
          var s3 = n4(i4, r3), c4 = A2.S;
          c4 !== null && c4(o4, s3), Vo2(e3, t3, s3);
        } catch (n5) {
          Uo2(e3, t3, n5);
        } finally {
          a3 !== null && o4.types !== null && (a3.types = o4.types), A2.T = a3;
        }
      } else try {
        a3 = n4(i4, r3), Vo2(e3, t3, a3);
      } catch (n5) {
        Uo2(e3, t3, n5);
      }
    }
    function Vo2(e3, t3, n4) {
      typeof n4 == `object` && n4 && typeof n4.then == `function` ? n4.then(function(n5) {
        Ho2(e3, t3, n5);
      }, function(n5) {
        return Uo2(e3, t3, n5);
      }) : Ho2(e3, t3, n4);
    }
    function Ho2(e3, t3, n4) {
      t3.status = `fulfilled`, t3.value = n4, Wo2(t3), e3.state = n4, t3 = e3.pending, t3 !== null && (n4 = t3.next, n4 === t3 ? e3.pending = null : (n4 = n4.next, t3.next = n4, Bo2(e3, n4)));
    }
    function Uo2(e3, t3, n4) {
      var r3 = e3.pending;
      if (e3.pending = null, r3 !== null) {
        r3 = r3.next;
        do
          t3.status = `rejected`, t3.reason = n4, Wo2(t3), t3 = t3.next;
        while (t3 !== r3);
      }
      e3.action = null;
    }
    function Wo2(e3) {
      e3 = e3.listeners;
      for (var t3 = 0; t3 < e3.length; t3++) (0, e3[t3])();
    }
    function Go2(e3, t3) {
      return t3;
    }
    function Q2(e3, t3) {
      if (K2) {
        var n4 = Nl.formState;
        if (n4 !== null) {
          a: {
            var r3 = q2;
            if (K2) {
              if (Di2) {
                b: {
                  for (var i4 = Di2, a3 = ki2; i4.nodeType !== 8; ) {
                    if (!a3) {
                      i4 = null;
                      break b;
                    }
                    if (i4 = cf(i4.nextSibling), i4 === null) {
                      i4 = null;
                      break b;
                    }
                  }
                  a3 = i4.data, i4 = a3 === `F!` || a3 === `F` ? i4 : null;
                }
                if (i4) {
                  Di2 = cf(i4.nextSibling), r3 = i4.data === `F!`;
                  break a;
                }
              }
              ji2(r3);
            }
            r3 = false;
          }
          r3 && (t3 = n4[0]);
        }
      }
      return n4 = Y2(), n4.memoizedState = n4.baseState = t3, r3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Go2, lastRenderedState: t3 }, n4.queue = r3, n4 = Cs.bind(null, q2, r3), r3.dispatch = n4, r3 = Lo2(false), a3 = Ts.bind(null, q2, false, r3.queue), r3 = Y2(), i4 = { state: t3, dispatch: null, action: e3, pending: null }, r3.queue = i4, n4 = zo2.bind(null, q2, i4, a3, n4), i4.dispatch = n4, r3.memoizedState = e3, [t3, n4, false];
    }
    function Ko2(e3) {
      return qo2(wo2(), oo2, e3);
    }
    function qo2(e3, t3, n4) {
      if (t3 = Ao2(e3, t3, Go2)[0], e3 = ko2(X2)[0], typeof t3 == `object` && t3 && typeof t3.then == `function`) try {
        var r3 = Eo2(t3);
      } catch (e4) {
        throw e4 === ha2 ? _a2 : e4;
      }
      else r3 = t3;
      t3 = wo2();
      var i4 = t3.queue, a3 = i4.dispatch;
      return n4 !== t3.memoizedState && (q2.flags |= 2048, Xo2(9, { destroy: void 0 }, Jo2.bind(null, i4, n4), null)), [r3, a3, e3];
    }
    function Jo2(e3, t3) {
      e3.action = t3;
    }
    function Yo2(e3) {
      var t3 = wo2(), n4 = oo2;
      if (n4 !== null) return qo2(t3, n4, e3);
      wo2(), t3 = t3.memoizedState, n4 = wo2();
      var r3 = n4.queue.dispatch;
      return n4.memoizedState = e3, [t3, r3, false];
    }
    function Xo2(e3, t3, n4, r3) {
      return e3 = { tag: e3, create: n4, deps: r3, inst: t3, next: null }, t3 = q2.updateQueue, t3 === null && (t3 = To2(), q2.updateQueue = t3), n4 = t3.lastEffect, n4 === null ? t3.lastEffect = e3.next = e3 : (r3 = n4.next, n4.next = e3, e3.next = r3, t3.lastEffect = e3), e3;
    }
    function Zo2() {
      return wo2().memoizedState;
    }
    function Qo2(e3, t3, n4, r3) {
      var i4 = Y2();
      q2.flags |= e3, i4.memoizedState = Xo2(1 | t3, { destroy: void 0 }, n4, r3 === void 0 ? null : r3);
    }
    function $o2(e3, t3, n4, r3) {
      var i4 = wo2();
      r3 = r3 === void 0 ? null : r3;
      var a3 = i4.memoizedState.inst;
      oo2 !== null && r3 !== null && go2(r3, oo2.memoizedState.deps) ? i4.memoizedState = Xo2(t3, a3, n4, r3) : (q2.flags |= e3, i4.memoizedState = Xo2(1 | t3, a3, n4, r3));
    }
    function es2(e3, t3) {
      Qo2(8390656, 8, e3, t3);
    }
    function ts2(e3, t3) {
      $o2(2048, 8, e3, t3);
    }
    function ns2(e3) {
      q2.flags |= 4;
      var t3 = q2.updateQueue;
      if (t3 === null) t3 = To2(), q2.updateQueue = t3, t3.events = [e3];
      else {
        var n4 = t3.events;
        n4 === null ? t3.events = [e3] : n4.push(e3);
      }
    }
    function rs2(e3) {
      var t3 = wo2().memoizedState;
      return ns2({ ref: t3, nextImpl: e3 }), function() {
        if (Ml & 2) throw Error(o3(440));
        return t3.impl.apply(void 0, arguments);
      };
    }
    function is2(e3, t3) {
      return $o2(4, 2, e3, t3);
    }
    function as2(e3, t3) {
      return $o2(4, 4, e3, t3);
    }
    function os2(e3, t3) {
      if (typeof t3 == `function`) {
        e3 = e3();
        var n4 = t3(e3);
        return function() {
          typeof n4 == `function` ? n4() : t3(null);
        };
      }
      if (t3 != null) return e3 = e3(), t3.current = e3, function() {
        t3.current = null;
      };
    }
    function ss2(e3, t3, n4) {
      n4 = n4 == null ? null : n4.concat([e3]), $o2(4, 4, os2.bind(null, t3, e3), n4);
    }
    function cs2() {
    }
    function ls2(e3, t3) {
      var n4 = wo2();
      t3 = t3 === void 0 ? null : t3;
      var r3 = n4.memoizedState;
      return t3 !== null && go2(t3, r3[1]) ? r3[0] : (n4.memoizedState = [e3, t3], e3);
    }
    function us2(e3, t3) {
      var n4 = wo2();
      t3 = t3 === void 0 ? null : t3;
      var r3 = n4.memoizedState;
      if (t3 !== null && go2(t3, r3[1])) return r3[0];
      if (r3 = e3(), lo2) {
        F2(true);
        try {
          e3();
        } finally {
          F2(false);
        }
      }
      return n4.memoizedState = [r3, t3], r3;
    }
    function ds2(e3, t3, n4) {
      return n4 === void 0 || ao2 & 1073741824 && !(Pl & 261930) ? e3.memoizedState = t3 : (e3.memoizedState = n4, e3 = du(), q2.lanes |= e3, Hl |= e3, n4);
    }
    function fs2(e3, t3, n4, r3) {
      return Sr2(n4, t3) ? n4 : Ga2.current === null ? !(ao2 & 42) || ao2 & 1073741824 && !(Pl & 261930) ? (Js = true, e3.memoizedState = n4) : (e3 = du(), q2.lanes |= e3, Hl |= e3, t3) : (e3 = ds2(e3, n4, r3), Sr2(e3, t3) || (Js = true), e3);
    }
    function ps2(e3, t3, n4, r3, i4) {
      var a3 = j2.p;
      j2.p = a3 !== 0 && 8 > a3 ? a3 : 8;
      var o4 = A2.T, s3 = {};
      A2.T = s3, Ts(e3, false, t3, n4);
      try {
        var c4 = i4(), l4 = A2.S;
        l4 !== null && l4(s3, c4), typeof c4 == `object` && c4 && typeof c4.then == `function` ? ws(e3, t3, la2(c4, r3), uu(e3)) : ws(e3, t3, r3, uu(e3));
      } catch (n5) {
        ws(e3, t3, { then: function() {
        }, status: `rejected`, reason: n5 }, uu());
      } finally {
        j2.p = a3, o4 !== null && s3.types !== null && (o4.types = s3.types), A2.T = o4;
      }
    }
    function ms2() {
    }
    function hs2(e3, t3, n4, r3) {
      if (e3.tag !== 5) throw Error(o3(476));
      var i4 = gs2(e3).queue;
      ps2(e3, i4, t3, oe2, n4 === null ? ms2 : function() {
        return _s2(e3), n4(r3);
      });
    }
    function gs2(e3) {
      var t3 = e3.memoizedState;
      if (t3 !== null) return t3;
      t3 = { memoizedState: oe2, baseState: oe2, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: X2, lastRenderedState: oe2 }, next: null };
      var n4 = {};
      return t3.next = { memoizedState: n4, baseState: n4, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: X2, lastRenderedState: n4 }, next: null }, e3.memoizedState = t3, e3 = e3.alternate, e3 !== null && (e3.memoizedState = t3), t3;
    }
    function _s2(e3) {
      var t3 = gs2(e3);
      t3.next === null && (t3 = e3.alternate.memoizedState), ws(e3, t3.next.queue, {}, uu());
    }
    function vs2() {
      return Ji2(Qf);
    }
    function ys2() {
      return wo2().memoizedState;
    }
    function bs2() {
      return wo2().memoizedState;
    }
    function xs2(e3) {
      for (var t3 = e3.return; t3 !== null; ) {
        switch (t3.tag) {
          case 24:
          case 3:
            var n4 = uu();
            e3 = Ia2(n4);
            var r3 = La2(t3, e3, n4);
            r3 !== null && (fu(r3, t3, n4), Ra2(r3, t3, n4)), t3 = { cache: ta2() }, e3.payload = t3;
            return;
        }
        t3 = t3.return;
      }
    }
    function Ss(e3, t3, n4) {
      var r3 = uu();
      n4 = { lane: r3, revertLane: 0, gesture: null, action: n4, hasEagerState: false, eagerState: null, next: null }, Es(e3) ? Ds(t3, n4) : (n4 = Zr2(e3, t3, n4, r3), n4 !== null && (fu(n4, e3, r3), Os(n4, t3, r3)));
    }
    function Cs(e3, t3, n4) {
      ws(e3, t3, n4, uu());
    }
    function ws(e3, t3, n4, r3) {
      var i4 = { lane: r3, revertLane: 0, gesture: null, action: n4, hasEagerState: false, eagerState: null, next: null };
      if (Es(e3)) Ds(t3, i4);
      else {
        var a3 = e3.alternate;
        if (e3.lanes === 0 && (a3 === null || a3.lanes === 0) && (a3 = t3.lastRenderedReducer, a3 !== null)) try {
          var o4 = t3.lastRenderedState, s3 = a3(o4, n4);
          if (i4.hasEagerState = true, i4.eagerState = s3, Sr2(s3, o4)) return Xr2(e3, t3, i4, 0), Nl === null && U2(), false;
        } catch {
        }
        if (n4 = Zr2(e3, t3, i4, r3), n4 !== null) return fu(n4, e3, r3), Os(n4, t3, r3), true;
      }
      return false;
    }
    function Ts(e3, t3, n4, r3) {
      if (r3 = { lane: 2, revertLane: ld(), gesture: null, action: r3, hasEagerState: false, eagerState: null, next: null }, Es(e3)) {
        if (t3) throw Error(o3(479));
      } else t3 = Zr2(e3, n4, r3, 2), t3 !== null && fu(t3, e3, 2);
    }
    function Es(e3) {
      var t3 = e3.alternate;
      return e3 === q2 || t3 !== null && t3 === q2;
    }
    function Ds(e3, t3) {
      co2 = so2 = true;
      var n4 = e3.pending;
      n4 === null ? t3.next = t3 : (t3.next = n4.next, n4.next = t3), e3.pending = t3;
    }
    function Os(e3, t3, n4) {
      if (n4 & 4194048) {
        var r3 = t3.lanes;
        r3 &= e3.pendingLanes, n4 |= r3, t3.lanes = n4, tt2(e3, n4);
      }
    }
    var ks = { readContext: Ji2, use: Do2, useCallback: ho2, useContext: ho2, useEffect: ho2, useImperativeHandle: ho2, useLayoutEffect: ho2, useInsertionEffect: ho2, useMemo: ho2, useReducer: ho2, useRef: ho2, useState: ho2, useDebugValue: ho2, useDeferredValue: ho2, useTransition: ho2, useSyncExternalStore: ho2, useId: ho2, useHostTransitionStatus: ho2, useFormState: ho2, useActionState: ho2, useOptimistic: ho2, useMemoCache: ho2, useCacheRefresh: ho2 };
    ks.useEffectEvent = ho2;
    var As = { readContext: Ji2, use: Do2, useCallback: function(e3, t3) {
      return Y2().memoizedState = [e3, t3 === void 0 ? null : t3], e3;
    }, useContext: Ji2, useEffect: es2, useImperativeHandle: function(e3, t3, n4) {
      n4 = n4 == null ? null : n4.concat([e3]), Qo2(4194308, 4, os2.bind(null, t3, e3), n4);
    }, useLayoutEffect: function(e3, t3) {
      return Qo2(4194308, 4, e3, t3);
    }, useInsertionEffect: function(e3, t3) {
      Qo2(4, 2, e3, t3);
    }, useMemo: function(e3, t3) {
      var n4 = Y2();
      t3 = t3 === void 0 ? null : t3;
      var r3 = e3();
      if (lo2) {
        F2(true);
        try {
          e3();
        } finally {
          F2(false);
        }
      }
      return n4.memoizedState = [r3, t3], r3;
    }, useReducer: function(e3, t3, n4) {
      var r3 = Y2();
      if (n4 !== void 0) {
        var i4 = n4(t3);
        if (lo2) {
          F2(true);
          try {
            n4(t3);
          } finally {
            F2(false);
          }
        }
      } else i4 = t3;
      return r3.memoizedState = r3.baseState = i4, e3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e3, lastRenderedState: i4 }, r3.queue = e3, e3 = e3.dispatch = Ss.bind(null, q2, e3), [r3.memoizedState, e3];
    }, useRef: function(e3) {
      var t3 = Y2();
      return e3 = { current: e3 }, t3.memoizedState = e3;
    }, useState: function(e3) {
      e3 = Lo2(e3);
      var t3 = e3.queue, n4 = Cs.bind(null, q2, t3);
      return t3.dispatch = n4, [e3.memoizedState, n4];
    }, useDebugValue: cs2, useDeferredValue: function(e3, t3) {
      return ds2(Y2(), e3, t3);
    }, useTransition: function() {
      var e3 = Lo2(false);
      return e3 = ps2.bind(null, q2, e3.queue, true, false), Y2().memoizedState = e3, [false, e3];
    }, useSyncExternalStore: function(e3, t3, n4) {
      var r3 = q2, i4 = Y2();
      if (K2) {
        if (n4 === void 0) throw Error(o3(407));
        n4 = n4();
      } else {
        if (n4 = t3(), Nl === null) throw Error(o3(349));
        Pl & 127 || Z2(r3, t3, n4);
      }
      i4.memoizedState = n4;
      var a3 = { value: n4, getSnapshot: t3 };
      return i4.queue = a3, es2(Po2.bind(null, r3, a3, e3), [e3]), r3.flags |= 2048, Xo2(9, { destroy: void 0 }, No2.bind(null, r3, a3, n4, t3), null), n4;
    }, useId: function() {
      var e3 = Y2(), t3 = Nl.identifierPrefix;
      if (K2) {
        var n4 = bi2, r3 = yi2;
        n4 = (r3 & ~(1 << 32 - Be2(r3) - 1)).toString(32) + n4, t3 = `_` + t3 + `R_` + n4, n4 = uo2++, 0 < n4 && (t3 += `H` + n4.toString(32)), t3 += `_`;
      } else n4 = mo2++, t3 = `_` + t3 + `r_` + n4.toString(32) + `_`;
      return e3.memoizedState = t3;
    }, useHostTransitionStatus: vs2, useFormState: Q2, useActionState: Q2, useOptimistic: function(e3) {
      var t3 = Y2();
      t3.memoizedState = t3.baseState = e3;
      var n4 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return t3.queue = n4, t3 = Ts.bind(null, q2, true, n4), n4.dispatch = t3, [e3, t3];
    }, useMemoCache: Oo2, useCacheRefresh: function() {
      return Y2().memoizedState = xs2.bind(null, q2);
    }, useEffectEvent: function(e3) {
      var t3 = Y2(), n4 = { impl: e3 };
      return t3.memoizedState = n4, function() {
        if (Ml & 2) throw Error(o3(440));
        return n4.impl.apply(void 0, arguments);
      };
    } }, js = { readContext: Ji2, use: Do2, useCallback: ls2, useContext: Ji2, useEffect: ts2, useImperativeHandle: ss2, useInsertionEffect: is2, useLayoutEffect: as2, useMemo: us2, useReducer: ko2, useRef: Zo2, useState: function() {
      return ko2(X2);
    }, useDebugValue: cs2, useDeferredValue: function(e3, t3) {
      return fs2(wo2(), oo2.memoizedState, e3, t3);
    }, useTransition: function() {
      var e3 = ko2(X2)[0], t3 = wo2().memoizedState;
      return [typeof e3 == `boolean` ? e3 : Eo2(e3), t3];
    }, useSyncExternalStore: Mo2, useId: ys2, useHostTransitionStatus: vs2, useFormState: Ko2, useActionState: Ko2, useOptimistic: function(e3, t3) {
      return Ro2(wo2(), oo2, e3, t3);
    }, useMemoCache: Oo2, useCacheRefresh: bs2 };
    js.useEffectEvent = rs2;
    var Ms = { readContext: Ji2, use: Do2, useCallback: ls2, useContext: Ji2, useEffect: ts2, useImperativeHandle: ss2, useInsertionEffect: is2, useLayoutEffect: as2, useMemo: us2, useReducer: jo2, useRef: Zo2, useState: function() {
      return jo2(X2);
    }, useDebugValue: cs2, useDeferredValue: function(e3, t3) {
      var n4 = wo2();
      return oo2 === null ? ds2(n4, e3, t3) : fs2(n4, oo2.memoizedState, e3, t3);
    }, useTransition: function() {
      var e3 = jo2(X2)[0], t3 = wo2().memoizedState;
      return [typeof e3 == `boolean` ? e3 : Eo2(e3), t3];
    }, useSyncExternalStore: Mo2, useId: ys2, useHostTransitionStatus: vs2, useFormState: Yo2, useActionState: Yo2, useOptimistic: function(e3, t3) {
      var n4 = wo2();
      return oo2 === null ? (n4.baseState = e3, [e3, n4.queue.dispatch]) : Ro2(n4, oo2, e3, t3);
    }, useMemoCache: Oo2, useCacheRefresh: bs2 };
    Ms.useEffectEvent = rs2;
    function Ns(e3, t3, n4, r3) {
      t3 = e3.memoizedState, n4 = n4(r3, t3), n4 = n4 == null ? t3 : h2({}, t3, n4), e3.memoizedState = n4, e3.lanes === 0 && (e3.updateQueue.baseState = n4);
    }
    var Ps = { enqueueSetState: function(e3, t3, n4) {
      e3 = e3._reactInternals;
      var r3 = uu(), i4 = Ia2(r3);
      i4.payload = t3, n4 != null && (i4.callback = n4), t3 = La2(e3, i4, r3), t3 !== null && (fu(t3, e3, r3), Ra2(t3, e3, r3));
    }, enqueueReplaceState: function(e3, t3, n4) {
      e3 = e3._reactInternals;
      var r3 = uu(), i4 = Ia2(r3);
      i4.tag = 1, i4.payload = t3, n4 != null && (i4.callback = n4), t3 = La2(e3, i4, r3), t3 !== null && (fu(t3, e3, r3), Ra2(t3, e3, r3));
    }, enqueueForceUpdate: function(e3, t3) {
      e3 = e3._reactInternals;
      var n4 = uu(), r3 = Ia2(n4);
      r3.tag = 2, t3 != null && (r3.callback = t3), t3 = La2(e3, r3, n4), t3 !== null && (fu(t3, e3, n4), Ra2(t3, e3, n4));
    } };
    function Fs(e3, t3, n4, r3, i4, a3, o4) {
      return e3 = e3.stateNode, typeof e3.shouldComponentUpdate == `function` ? e3.shouldComponentUpdate(r3, a3, o4) : t3.prototype && t3.prototype.isPureReactComponent ? !Cr2(n4, r3) || !Cr2(i4, a3) : true;
    }
    function Is(e3, t3, n4, r3) {
      e3 = t3.state, typeof t3.componentWillReceiveProps == `function` && t3.componentWillReceiveProps(n4, r3), typeof t3.UNSAFE_componentWillReceiveProps == `function` && t3.UNSAFE_componentWillReceiveProps(n4, r3), t3.state !== e3 && Ps.enqueueReplaceState(t3, t3.state, null);
    }
    function Ls(e3, t3) {
      var n4 = t3;
      if (`ref` in t3) for (var r3 in n4 = {}, t3) r3 !== `ref` && (n4[r3] = t3[r3]);
      if (e3 = e3.defaultProps) for (var i4 in n4 === t3 && (n4 = h2({}, n4)), e3) n4[i4] === void 0 && (n4[i4] = e3[i4]);
      return n4;
    }
    function Rs(e3) {
      V2(e3);
    }
    function zs(e3) {
      console.error(e3);
    }
    function Bs(e3) {
      V2(e3);
    }
    function Vs(e3, t3) {
      try {
        var n4 = e3.onUncaughtError;
        n4(t3.value, { componentStack: t3.stack });
      } catch (e4) {
        setTimeout(function() {
          throw e4;
        });
      }
    }
    function Hs(e3, t3, n4) {
      try {
        var r3 = e3.onCaughtError;
        r3(n4.value, { componentStack: n4.stack, errorBoundary: t3.tag === 1 ? t3.stateNode : null });
      } catch (e4) {
        setTimeout(function() {
          throw e4;
        });
      }
    }
    function Us(e3, t3, n4) {
      return n4 = Ia2(n4), n4.tag = 3, n4.payload = { element: null }, n4.callback = function() {
        Vs(e3, t3);
      }, n4;
    }
    function Ws(e3) {
      return e3 = Ia2(e3), e3.tag = 3, e3;
    }
    function Gs(e3, t3, n4, r3) {
      var i4 = n4.type.getDerivedStateFromError;
      if (typeof i4 == `function`) {
        var a3 = r3.value;
        e3.payload = function() {
          return i4(a3);
        }, e3.callback = function() {
          Hs(t3, n4, r3);
        };
      }
      var o4 = n4.stateNode;
      o4 !== null && typeof o4.componentDidCatch == `function` && (e3.callback = function() {
        Hs(t3, n4, r3), typeof i4 != `function` && (eu === null ? eu = /* @__PURE__ */ new Set([this]) : eu.add(this));
        var e4 = r3.stack;
        this.componentDidCatch(r3.value, { componentStack: e4 === null ? `` : e4 });
      });
    }
    function Ks(e3, t3, n4, r3, i4) {
      if (n4.flags |= 32768, typeof r3 == `object` && r3 && typeof r3.then == `function`) {
        if (t3 = n4.alternate, t3 !== null && Gi2(t3, n4, i4, true), n4 = Xa2.current, n4 !== null) {
          switch (n4.tag) {
            case 31:
            case 13:
              return Za2 === null ? wu() : n4.alternate === null && Vl === 0 && (Vl = 3), n4.flags &= -257, n4.flags |= 65536, n4.lanes = i4, r3 === va2 ? n4.flags |= 16384 : (t3 = n4.updateQueue, t3 === null ? n4.updateQueue = /* @__PURE__ */ new Set([r3]) : t3.add(r3), Uu(e3, r3, i4)), false;
            case 22:
              return n4.flags |= 65536, r3 === va2 ? n4.flags |= 16384 : (t3 = n4.updateQueue, t3 === null ? (t3 = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([r3]) }, n4.updateQueue = t3) : (n4 = t3.retryQueue, n4 === null ? t3.retryQueue = /* @__PURE__ */ new Set([r3]) : n4.add(r3)), Uu(e3, r3, i4)), false;
          }
          throw Error(o3(435, n4.tag));
        }
        return Uu(e3, r3, i4), wu(), false;
      }
      if (K2) return t3 = Xa2.current, t3 === null ? (r3 !== Ai2 && (t3 = Error(o3(423), { cause: r3 }), Li2(pi2(t3, n4))), e3 = e3.current.alternate, e3.flags |= 65536, i4 &= -i4, e3.lanes |= i4, r3 = pi2(r3, n4), i4 = Us(e3.stateNode, r3, i4), za2(e3, i4), Vl !== 4 && (Vl = 2)) : (!(t3.flags & 65536) && (t3.flags |= 256), t3.flags |= 65536, t3.lanes = i4, r3 !== Ai2 && (e3 = Error(o3(422), { cause: r3 }), Li2(pi2(e3, n4)))), false;
      var a3 = Error(o3(520), { cause: r3 });
      if (a3 = pi2(a3, n4), ql === null ? ql = [a3] : ql.push(a3), Vl !== 4 && (Vl = 2), t3 === null) return true;
      r3 = pi2(r3, n4), n4 = t3;
      do {
        switch (n4.tag) {
          case 3:
            return n4.flags |= 65536, e3 = i4 & -i4, n4.lanes |= e3, e3 = Us(n4.stateNode, r3, e3), za2(n4, e3), false;
          case 1:
            if (t3 = n4.type, a3 = n4.stateNode, !(n4.flags & 128) && (typeof t3.getDerivedStateFromError == `function` || a3 !== null && typeof a3.componentDidCatch == `function` && (eu === null || !eu.has(a3)))) return n4.flags |= 65536, i4 &= -i4, n4.lanes |= i4, i4 = Ws(i4), Gs(i4, e3, n4, r3), za2(n4, i4), false;
        }
        n4 = n4.return;
      } while (n4 !== null);
      return false;
    }
    var qs = Error(o3(461)), Js = false;
    function Ys(e3, t3, n4, r3) {
      t3.child = e3 === null ? Ma2(t3, null, n4, r3) : ja2(t3, e3.child, n4, r3);
    }
    function Xs(e3, t3, n4, r3, i4) {
      n4 = n4.render;
      var a3 = t3.ref;
      if (`ref` in r3) {
        var o4 = {};
        for (var s3 in r3) s3 !== `ref` && (o4[s3] = r3[s3]);
      } else o4 = r3;
      return qi2(t3), r3 = _o2(e3, t3, n4, o4, a3, i4), s3 = xo2(), e3 !== null && !Js ? (So2(e3, t3, i4), bc(e3, t3, i4)) : (K2 && s3 && Ci2(t3), t3.flags |= 1, Ys(e3, t3, r3, i4), t3.child);
    }
    function Zs(e3, t3, n4, r3, i4) {
      if (e3 === null) {
        var a3 = n4.type;
        return typeof a3 == `function` && !ii2(a3) && a3.defaultProps === void 0 && n4.compare === null ? (t3.tag = 15, t3.type = a3, Qs(e3, t3, a3, r3, i4)) : (e3 = si2(n4.type, null, r3, t3, t3.mode, i4), e3.ref = t3.ref, e3.return = t3, t3.child = e3);
      }
      if (a3 = e3.child, !xc(e3, i4)) {
        var o4 = a3.memoizedProps;
        if (n4 = n4.compare, n4 = n4 === null ? Cr2 : n4, n4(o4, r3) && e3.ref === t3.ref) return bc(e3, t3, i4);
      }
      return t3.flags |= 1, e3 = ai2(a3, r3), e3.ref = t3.ref, e3.return = t3, t3.child = e3;
    }
    function Qs(e3, t3, n4, r3, i4) {
      if (e3 !== null) {
        var a3 = e3.memoizedProps;
        if (Cr2(a3, r3) && e3.ref === t3.ref) if (Js = false, t3.pendingProps = r3 = a3, xc(e3, i4)) e3.flags & 131072 && (Js = true);
        else return t3.lanes = e3.lanes, bc(e3, t3, i4);
      }
      return oc(e3, t3, n4, r3, i4);
    }
    function $s(e3, t3, n4, r3) {
      var i4 = r3.children, a3 = e3 === null ? null : e3.memoizedState;
      if (e3 === null && t3.stateNode === null && (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), r3.mode === `hidden`) {
        if (t3.flags & 128) {
          if (a3 = a3 === null ? n4 : a3.baseLanes | n4, e3 !== null) {
            for (r3 = t3.child = e3.child, i4 = 0; r3 !== null; ) i4 = i4 | r3.lanes | r3.childLanes, r3 = r3.sibling;
            r3 = i4 & ~a3;
          } else r3 = 0, t3.child = null;
          return tc(e3, t3, a3, n4, r3);
        }
        if (n4 & 536870912) t3.memoizedState = { baseLanes: 0, cachePool: null }, e3 !== null && pa2(t3, a3 === null ? null : a3.cachePool), a3 === null ? Ja2() : qa2(t3, a3), eo2(t3);
        else return r3 = t3.lanes = 536870912, tc(e3, t3, a3 === null ? n4 : a3.baseLanes | n4, n4, r3);
      } else a3 === null ? (e3 !== null && pa2(t3, null), Ja2(), to2(t3)) : (pa2(t3, a3.cachePool), qa2(t3, a3), to2(t3), t3.memoizedState = null);
      return Ys(e3, t3, i4, n4), t3.child;
    }
    function ec(e3, t3) {
      return e3 !== null && e3.tag === 22 || t3.stateNode !== null || (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t3.sibling;
    }
    function tc(e3, t3, n4, r3, i4) {
      var a3 = fa2();
      return a3 = a3 === null ? null : { parent: ea2._currentValue, pool: a3 }, t3.memoizedState = { baseLanes: n4, cachePool: a3 }, e3 !== null && pa2(t3, null), Ja2(), eo2(t3), e3 !== null && Gi2(e3, t3, r3, true), t3.childLanes = i4, null;
    }
    function nc(e3, t3) {
      return t3 = hc({ mode: t3.mode, children: t3.children }, e3.mode), t3.ref = e3.ref, e3.child = t3, t3.return = e3, t3;
    }
    function rc(e3, t3, n4) {
      return ja2(t3, e3.child, null, n4), e3 = nc(t3, t3.pendingProps), e3.flags |= 2, no2(t3), t3.memoizedState = null, e3;
    }
    function ic(e3, t3, n4) {
      var r3 = t3.pendingProps, i4 = (t3.flags & 128) != 0;
      if (t3.flags &= -129, e3 === null) {
        if (K2) {
          if (r3.mode === `hidden`) return e3 = nc(t3, r3), t3.lanes = 536870912, ec(null, e3);
          if ($a2(t3), (e3 = Di2) ? (e3 = rf(e3, ki2), e3 = e3 !== null && e3.data === `&` ? e3 : null, e3 !== null && (t3.memoizedState = { dehydrated: e3, treeContext: G2 === null ? null : { id: yi2, overflow: bi2 }, retryLane: 536870912, hydrationErrors: null }, n4 = ui2(e3), n4.return = t3, t3.child = n4, Ei2 = t3, Di2 = null)) : e3 = null, e3 === null) throw ji2(t3);
          return t3.lanes = 536870912, null;
        }
        return nc(t3, r3);
      }
      var a3 = e3.memoizedState;
      if (a3 !== null) {
        var s3 = a3.dehydrated;
        if ($a2(t3), i4) if (t3.flags & 256) t3.flags &= -257, t3 = rc(e3, t3, n4);
        else if (t3.memoizedState !== null) t3.child = e3.child, t3.flags |= 128, t3 = null;
        else throw Error(o3(558));
        else if (Js || Gi2(e3, t3, n4, false), i4 = (n4 & e3.childLanes) !== 0, Js || i4) {
          if (r3 = Nl, r3 !== null && (s3 = nt2(r3, n4), s3 !== 0 && s3 !== a3.retryLane)) throw a3.retryLane = s3, Qr2(e3, s3), fu(r3, e3, s3), qs;
          wu(), t3 = rc(e3, t3, n4);
        } else e3 = a3.treeContext, Di2 = cf(s3.nextSibling), Ei2 = t3, K2 = true, Oi2 = null, ki2 = false, e3 !== null && Ti2(t3, e3), t3 = nc(t3, r3), t3.flags |= 4096;
        return t3;
      }
      return e3 = ai2(e3.child, { mode: r3.mode, children: r3.children }), e3.ref = t3.ref, t3.child = e3, e3.return = t3, e3;
    }
    function ac(e3, t3) {
      var n4 = t3.ref;
      if (n4 === null) e3 !== null && e3.ref !== null && (t3.flags |= 4194816);
      else {
        if (typeof n4 != `function` && typeof n4 != `object`) throw Error(o3(284));
        (e3 === null || e3.ref !== n4) && (t3.flags |= 4194816);
      }
    }
    function oc(e3, t3, n4, r3, i4) {
      return qi2(t3), n4 = _o2(e3, t3, n4, r3, void 0, i4), r3 = xo2(), e3 !== null && !Js ? (So2(e3, t3, i4), bc(e3, t3, i4)) : (K2 && r3 && Ci2(t3), t3.flags |= 1, Ys(e3, t3, n4, i4), t3.child);
    }
    function sc(e3, t3, n4, r3, i4, a3) {
      return qi2(t3), t3.updateQueue = null, n4 = yo2(t3, r3, n4, i4), vo2(e3), r3 = xo2(), e3 !== null && !Js ? (So2(e3, t3, a3), bc(e3, t3, a3)) : (K2 && r3 && Ci2(t3), t3.flags |= 1, Ys(e3, t3, n4, a3), t3.child);
    }
    function cc(e3, t3, n4, r3, i4) {
      if (qi2(t3), t3.stateNode === null) {
        var a3 = ti2, o4 = n4.contextType;
        typeof o4 == `object` && o4 && (a3 = Ji2(o4)), a3 = new n4(r3, a3), t3.memoizedState = a3.state !== null && a3.state !== void 0 ? a3.state : null, a3.updater = Ps, t3.stateNode = a3, a3._reactInternals = t3, a3 = t3.stateNode, a3.props = r3, a3.state = t3.memoizedState, a3.refs = {}, Pa2(t3), o4 = n4.contextType, a3.context = typeof o4 == `object` && o4 ? Ji2(o4) : ti2, a3.state = t3.memoizedState, o4 = n4.getDerivedStateFromProps, typeof o4 == `function` && (Ns(t3, n4, o4, r3), a3.state = t3.memoizedState), typeof n4.getDerivedStateFromProps == `function` || typeof a3.getSnapshotBeforeUpdate == `function` || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (o4 = a3.state, typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount(), o4 !== a3.state && Ps.enqueueReplaceState(a3, a3.state, null), Ha2(t3, r3, a3, i4), Va2(), a3.state = t3.memoizedState), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = true;
      } else if (e3 === null) {
        a3 = t3.stateNode;
        var s3 = t3.memoizedProps, c4 = Ls(n4, s3);
        a3.props = c4;
        var l4 = a3.context, u3 = n4.contextType;
        o4 = ti2, typeof u3 == `object` && u3 && (o4 = Ji2(u3));
        var d3 = n4.getDerivedStateFromProps;
        u3 = typeof d3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`, s3 = t3.pendingProps !== s3, u3 || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (s3 || l4 !== o4) && Is(t3, a3, r3, o4), Na2 = false;
        var f3 = t3.memoizedState;
        a3.state = f3, Ha2(t3, r3, a3, i4), Va2(), l4 = t3.memoizedState, s3 || f3 !== l4 || Na2 ? (typeof d3 == `function` && (Ns(t3, n4, d3, r3), l4 = t3.memoizedState), (c4 = Na2 || Fs(t3, n4, c4, r3, f3, l4, o4)) ? (u3 || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount()), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308)) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), t3.memoizedProps = r3, t3.memoizedState = l4), a3.props = r3, a3.state = l4, a3.context = o4, r3 = c4) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = false);
      } else {
        a3 = t3.stateNode, Fa2(e3, t3), o4 = t3.memoizedProps, u3 = Ls(n4, o4), a3.props = u3, d3 = t3.pendingProps, f3 = a3.context, l4 = n4.contextType, c4 = ti2, typeof l4 == `object` && l4 && (c4 = Ji2(l4)), s3 = n4.getDerivedStateFromProps, (l4 = typeof s3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`) || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (o4 !== d3 || f3 !== c4) && Is(t3, a3, r3, c4), Na2 = false, f3 = t3.memoizedState, a3.state = f3, Ha2(t3, r3, a3, i4), Va2();
        var p3 = t3.memoizedState;
        o4 !== d3 || f3 !== p3 || Na2 || e3 !== null && e3.dependencies !== null && Ki2(e3.dependencies) ? (typeof s3 == `function` && (Ns(t3, n4, s3, r3), p3 = t3.memoizedState), (u3 = Na2 || Fs(t3, n4, u3, r3, f3, p3, c4) || e3 !== null && e3.dependencies !== null && Ki2(e3.dependencies)) ? (l4 || typeof a3.UNSAFE_componentWillUpdate != `function` && typeof a3.componentWillUpdate != `function` || (typeof a3.componentWillUpdate == `function` && a3.componentWillUpdate(r3, p3, c4), typeof a3.UNSAFE_componentWillUpdate == `function` && a3.UNSAFE_componentWillUpdate(r3, p3, c4)), typeof a3.componentDidUpdate == `function` && (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate == `function` && (t3.flags |= 1024)) : (typeof a3.componentDidUpdate != `function` || o4 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o4 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 1024), t3.memoizedProps = r3, t3.memoizedState = p3), a3.props = r3, a3.state = p3, a3.context = c4, r3 = u3) : (typeof a3.componentDidUpdate != `function` || o4 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o4 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 1024), r3 = false);
      }
      return a3 = r3, ac(e3, t3), r3 = (t3.flags & 128) != 0, a3 || r3 ? (a3 = t3.stateNode, n4 = r3 && typeof n4.getDerivedStateFromError != `function` ? null : a3.render(), t3.flags |= 1, e3 !== null && r3 ? (t3.child = ja2(t3, e3.child, null, i4), t3.child = ja2(t3, null, n4, i4)) : Ys(e3, t3, n4, i4), t3.memoizedState = a3.state, e3 = t3.child) : e3 = bc(e3, t3, i4), e3;
    }
    function lc(e3, t3, n4, r3) {
      return Fi2(), t3.flags |= 256, Ys(e3, t3, n4, r3), t3.child;
    }
    var uc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function dc(e3) {
      return { baseLanes: e3, cachePool: ma2() };
    }
    function fc(e3, t3, n4) {
      return e3 = e3 === null ? 0 : e3.childLanes & ~n4, t3 && (e3 |= Gl), e3;
    }
    function pc(e3, t3, n4) {
      var r3 = t3.pendingProps, i4 = false, a3 = (t3.flags & 128) != 0, s3;
      if ((s3 = a3) || (s3 = e3 !== null && e3.memoizedState === null ? false : (ro2.current & 2) != 0), s3 && (i4 = true, t3.flags &= -129), s3 = (t3.flags & 32) != 0, t3.flags &= -33, e3 === null) {
        if (K2) {
          if (i4 ? Qa2(t3) : to2(t3), (e3 = Di2) ? (e3 = rf(e3, ki2), e3 = e3 !== null && e3.data !== `&` ? e3 : null, e3 !== null && (t3.memoizedState = { dehydrated: e3, treeContext: G2 === null ? null : { id: yi2, overflow: bi2 }, retryLane: 536870912, hydrationErrors: null }, n4 = ui2(e3), n4.return = t3, t3.child = n4, Ei2 = t3, Di2 = null)) : e3 = null, e3 === null) throw ji2(t3);
          return of(e3) ? t3.lanes = 32 : t3.lanes = 536870912, null;
        }
        var c4 = r3.children;
        return r3 = r3.fallback, i4 ? (to2(t3), i4 = t3.mode, c4 = hc({ mode: `hidden`, children: c4 }, i4), r3 = ci2(r3, i4, n4, null), c4.return = t3, r3.return = t3, c4.sibling = r3, t3.child = c4, r3 = t3.child, r3.memoizedState = dc(n4), r3.childLanes = fc(e3, s3, n4), t3.memoizedState = uc, ec(null, r3)) : (Qa2(t3), mc(t3, c4));
      }
      var l4 = e3.memoizedState;
      if (l4 !== null && (c4 = l4.dehydrated, c4 !== null)) {
        if (a3) t3.flags & 256 ? (Qa2(t3), t3.flags &= -257, t3 = gc(e3, t3, n4)) : t3.memoizedState === null ? (to2(t3), c4 = r3.fallback, i4 = t3.mode, r3 = hc({ mode: `visible`, children: r3.children }, i4), c4 = ci2(c4, i4, n4, null), c4.flags |= 2, r3.return = t3, c4.return = t3, r3.sibling = c4, t3.child = r3, ja2(t3, e3.child, null, n4), r3 = t3.child, r3.memoizedState = dc(n4), r3.childLanes = fc(e3, s3, n4), t3.memoizedState = uc, t3 = ec(null, r3)) : (to2(t3), t3.child = e3.child, t3.flags |= 128, t3 = null);
        else if (Qa2(t3), of(c4)) {
          if (s3 = c4.nextSibling && c4.nextSibling.dataset, s3) var u3 = s3.dgst;
          s3 = u3, r3 = Error(o3(419)), r3.stack = ``, r3.digest = s3, Li2({ value: r3, source: null, stack: null }), t3 = gc(e3, t3, n4);
        } else if (Js || Gi2(e3, t3, n4, false), s3 = (n4 & e3.childLanes) !== 0, Js || s3) {
          if (s3 = Nl, s3 !== null && (r3 = nt2(s3, n4), r3 !== 0 && r3 !== l4.retryLane)) throw l4.retryLane = r3, Qr2(e3, r3), fu(s3, e3, r3), qs;
          af(c4) || wu(), t3 = gc(e3, t3, n4);
        } else af(c4) ? (t3.flags |= 192, t3.child = e3.child, t3 = null) : (e3 = l4.treeContext, Di2 = cf(c4.nextSibling), Ei2 = t3, K2 = true, Oi2 = null, ki2 = false, e3 !== null && Ti2(t3, e3), t3 = mc(t3, r3.children), t3.flags |= 4096);
        return t3;
      }
      return i4 ? (to2(t3), c4 = r3.fallback, i4 = t3.mode, l4 = e3.child, u3 = l4.sibling, r3 = ai2(l4, { mode: `hidden`, children: r3.children }), r3.subtreeFlags = l4.subtreeFlags & 65011712, u3 === null ? (c4 = ci2(c4, i4, n4, null), c4.flags |= 2) : c4 = ai2(u3, c4), c4.return = t3, r3.return = t3, r3.sibling = c4, t3.child = r3, ec(null, r3), r3 = t3.child, c4 = e3.child.memoizedState, c4 === null ? c4 = dc(n4) : (i4 = c4.cachePool, i4 === null ? i4 = ma2() : (l4 = ea2._currentValue, i4 = i4.parent === l4 ? i4 : { parent: l4, pool: l4 }), c4 = { baseLanes: c4.baseLanes | n4, cachePool: i4 }), r3.memoizedState = c4, r3.childLanes = fc(e3, s3, n4), t3.memoizedState = uc, ec(e3.child, r3)) : (Qa2(t3), n4 = e3.child, e3 = n4.sibling, n4 = ai2(n4, { mode: `visible`, children: r3.children }), n4.return = t3, n4.sibling = null, e3 !== null && (s3 = t3.deletions, s3 === null ? (t3.deletions = [e3], t3.flags |= 16) : s3.push(e3)), t3.child = n4, t3.memoizedState = null, n4);
    }
    function mc(e3, t3) {
      return t3 = hc({ mode: `visible`, children: t3 }, e3.mode), t3.return = e3, e3.child = t3;
    }
    function hc(e3, t3) {
      return e3 = ri2(22, e3, null, t3), e3.lanes = 0, e3;
    }
    function gc(e3, t3, n4) {
      return ja2(t3, e3.child, null, n4), e3 = mc(t3, t3.pendingProps.children), e3.flags |= 2, t3.memoizedState = null, e3;
    }
    function _c(e3, t3, n4) {
      e3.lanes |= t3;
      var r3 = e3.alternate;
      r3 !== null && (r3.lanes |= t3), Ui2(e3.return, t3, n4);
    }
    function vc(e3, t3, n4, r3, i4, a3) {
      var o4 = e3.memoizedState;
      o4 === null ? e3.memoizedState = { isBackwards: t3, rendering: null, renderingStartTime: 0, last: r3, tail: n4, tailMode: i4, treeForkCount: a3 } : (o4.isBackwards = t3, o4.rendering = null, o4.renderingStartTime = 0, o4.last = r3, o4.tail = n4, o4.tailMode = i4, o4.treeForkCount = a3);
    }
    function yc(e3, t3, n4) {
      var r3 = t3.pendingProps, i4 = r3.revealOrder, a3 = r3.tail;
      r3 = r3.children;
      var o4 = ro2.current, s3 = (o4 & 2) != 0;
      if (s3 ? (o4 = o4 & 1 | 2, t3.flags |= 128) : o4 &= 1, de2(ro2, o4), Ys(e3, t3, r3, n4), r3 = K2 ? _i2 : 0, !s3 && e3 !== null && e3.flags & 128) a: for (e3 = t3.child; e3 !== null; ) {
        if (e3.tag === 13) e3.memoizedState !== null && _c(e3, n4, t3);
        else if (e3.tag === 19) _c(e3, n4, t3);
        else if (e3.child !== null) {
          e3.child.return = e3, e3 = e3.child;
          continue;
        }
        if (e3 === t3) break a;
        for (; e3.sibling === null; ) {
          if (e3.return === null || e3.return === t3) break a;
          e3 = e3.return;
        }
        e3.sibling.return = e3.return, e3 = e3.sibling;
      }
      switch (i4) {
        case `forwards`:
          for (n4 = t3.child, i4 = null; n4 !== null; ) e3 = n4.alternate, e3 !== null && io2(e3) === null && (i4 = n4), n4 = n4.sibling;
          n4 = i4, n4 === null ? (i4 = t3.child, t3.child = null) : (i4 = n4.sibling, n4.sibling = null), vc(t3, false, i4, n4, a3, r3);
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n4 = null, i4 = t3.child, t3.child = null; i4 !== null; ) {
            if (e3 = i4.alternate, e3 !== null && io2(e3) === null) {
              t3.child = i4;
              break;
            }
            e3 = i4.sibling, i4.sibling = n4, n4 = i4, i4 = e3;
          }
          vc(t3, true, n4, null, a3, r3);
          break;
        case `together`:
          vc(t3, false, null, null, void 0, r3);
          break;
        default:
          t3.memoizedState = null;
      }
      return t3.child;
    }
    function bc(e3, t3, n4) {
      if (e3 !== null && (t3.dependencies = e3.dependencies), Hl |= t3.lanes, (n4 & t3.childLanes) === 0) if (e3 !== null) {
        if (Gi2(e3, t3, n4, false), (n4 & t3.childLanes) === 0) return null;
      } else return null;
      if (e3 !== null && t3.child !== e3.child) throw Error(o3(153));
      if (t3.child !== null) {
        for (e3 = t3.child, n4 = ai2(e3, e3.pendingProps), t3.child = n4, n4.return = t3; e3.sibling !== null; ) e3 = e3.sibling, n4 = n4.sibling = ai2(e3, e3.pendingProps), n4.return = t3;
        n4.sibling = null;
      }
      return t3.child;
    }
    function xc(e3, t3) {
      return (e3.lanes & t3) === 0 ? (e3 = e3.dependencies, !!(e3 !== null && Ki2(e3))) : true;
    }
    function Sc(e3, t3, n4) {
      switch (t3.tag) {
        case 3:
          me2(t3, t3.stateNode.containerInfo), Vi2(t3, ea2, e3.memoizedState.cache), Fi2();
          break;
        case 27:
        case 5:
          ge2(t3);
          break;
        case 4:
          me2(t3, t3.stateNode.containerInfo);
          break;
        case 10:
          Vi2(t3, t3.type, t3.memoizedProps.value);
          break;
        case 31:
          if (t3.memoizedState !== null) return t3.flags |= 128, $a2(t3), null;
          break;
        case 13:
          var r3 = t3.memoizedState;
          if (r3 !== null) return r3.dehydrated === null ? (n4 & t3.child.childLanes) === 0 ? (Qa2(t3), e3 = bc(e3, t3, n4), e3 === null ? null : e3.sibling) : pc(e3, t3, n4) : (Qa2(t3), t3.flags |= 128, null);
          Qa2(t3);
          break;
        case 19:
          var i4 = (e3.flags & 128) != 0;
          if (r3 = (n4 & t3.childLanes) !== 0, r3 ||= (Gi2(e3, t3, n4, false), (n4 & t3.childLanes) !== 0), i4) {
            if (r3) return yc(e3, t3, n4);
            t3.flags |= 128;
          }
          if (i4 = t3.memoizedState, i4 !== null && (i4.rendering = null, i4.tail = null, i4.lastEffect = null), de2(ro2, ro2.current), r3) break;
          return null;
        case 22:
          return t3.lanes = 0, $s(e3, t3, n4, t3.pendingProps);
        case 24:
          Vi2(t3, ea2, e3.memoizedState.cache);
      }
      return bc(e3, t3, n4);
    }
    function Cc(e3, t3, n4) {
      if (e3 !== null) if (e3.memoizedProps !== t3.pendingProps) Js = true;
      else {
        if (!xc(e3, n4) && !(t3.flags & 128)) return Js = false, Sc(e3, t3, n4);
        Js = !!(e3.flags & 131072);
      }
      else Js = false, K2 && t3.flags & 1048576 && Si2(t3, _i2, t3.index);
      switch (t3.lanes = 0, t3.tag) {
        case 16:
          a: {
            var r3 = t3.pendingProps;
            if (e3 = xa2(t3.elementType), t3.type = e3, typeof e3 == `function`) ii2(e3) ? (r3 = Ls(e3, r3), t3.tag = 1, t3 = cc(null, t3, e3, r3, n4)) : (t3.tag = 0, t3 = oc(null, t3, e3, r3, n4));
            else {
              if (e3 != null) {
                var i4 = e3.$$typeof;
                if (i4 === w2) {
                  t3.tag = 11, t3 = Xs(null, t3, e3, r3, n4);
                  break a;
                } else if (i4 === D2) {
                  t3.tag = 14, t3 = Zs(null, t3, e3, r3, n4);
                  break a;
                }
              }
              throw t3 = ie2(e3) || e3, Error(o3(306, t3, ``));
            }
          }
          return t3;
        case 0:
          return oc(e3, t3, t3.type, t3.pendingProps, n4);
        case 1:
          return r3 = t3.type, i4 = Ls(r3, t3.pendingProps), cc(e3, t3, r3, i4, n4);
        case 3:
          a: {
            if (me2(t3, t3.stateNode.containerInfo), e3 === null) throw Error(o3(387));
            r3 = t3.pendingProps;
            var a3 = t3.memoizedState;
            i4 = a3.element, Fa2(e3, t3), Ha2(t3, r3, null, n4);
            var s3 = t3.memoizedState;
            if (r3 = s3.cache, Vi2(t3, ea2, r3), r3 !== a3.cache && Wi2(t3, [ea2], n4, true), Va2(), r3 = s3.element, a3.isDehydrated) if (a3 = { element: r3, isDehydrated: false, cache: s3.cache }, t3.updateQueue.baseState = a3, t3.memoizedState = a3, t3.flags & 256) {
              t3 = lc(e3, t3, r3, n4);
              break a;
            } else if (r3 !== i4) {
              i4 = pi2(Error(o3(424)), t3), Li2(i4), t3 = lc(e3, t3, r3, n4);
              break a;
            } else {
              switch (e3 = t3.stateNode.containerInfo, e3.nodeType) {
                case 9:
                  e3 = e3.body;
                  break;
                default:
                  e3 = e3.nodeName === `HTML` ? e3.ownerDocument.body : e3;
              }
              for (Di2 = cf(e3.firstChild), Ei2 = t3, K2 = true, Oi2 = null, ki2 = true, n4 = Ma2(t3, null, r3, n4), t3.child = n4; n4; ) n4.flags = n4.flags & -3 | 4096, n4 = n4.sibling;
            }
            else {
              if (Fi2(), r3 === i4) {
                t3 = bc(e3, t3, n4);
                break a;
              }
              Ys(e3, t3, r3, n4);
            }
            t3 = t3.child;
          }
          return t3;
        case 26:
          return ac(e3, t3), e3 === null ? (n4 = kf(t3.type, null, t3.pendingProps, null)) ? t3.memoizedState = n4 : K2 || (n4 = t3.type, e3 = t3.pendingProps, r3 = Bd(pe2.current).createElement(n4), r3[ct2] = t3, r3[lt2] = e3, Pd(r3, n4, e3), xt2(r3), t3.stateNode = r3) : t3.memoizedState = kf(t3.type, e3.memoizedProps, t3.pendingProps, e3.memoizedState), null;
        case 27:
          return ge2(t3), e3 === null && K2 && (r3 = t3.stateNode = ff(t3.type, t3.pendingProps, pe2.current), Ei2 = t3, ki2 = true, i4 = Di2, Zd(t3.type) ? (lf = i4, Di2 = cf(r3.firstChild)) : Di2 = i4), Ys(e3, t3, t3.pendingProps.children, n4), ac(e3, t3), e3 === null && (t3.flags |= 4194304), t3.child;
        case 5:
          return e3 === null && K2 && ((i4 = r3 = Di2) && (r3 = tf(r3, t3.type, t3.pendingProps, ki2), r3 === null ? i4 = false : (t3.stateNode = r3, Ei2 = t3, Di2 = cf(r3.firstChild), ki2 = false, i4 = true)), i4 || ji2(t3)), ge2(t3), i4 = t3.type, a3 = t3.pendingProps, s3 = e3 === null ? null : e3.memoizedProps, r3 = a3.children, Ud(i4, a3) ? r3 = null : s3 !== null && Ud(i4, s3) && (t3.flags |= 32), t3.memoizedState !== null && (i4 = _o2(e3, t3, bo2, null, null, n4), Qf._currentValue = i4), ac(e3, t3), Ys(e3, t3, r3, n4), t3.child;
        case 6:
          return e3 === null && K2 && ((e3 = n4 = Di2) && (n4 = nf(n4, t3.pendingProps, ki2), n4 === null ? e3 = false : (t3.stateNode = n4, Ei2 = t3, Di2 = null, e3 = true)), e3 || ji2(t3)), null;
        case 13:
          return pc(e3, t3, n4);
        case 4:
          return me2(t3, t3.stateNode.containerInfo), r3 = t3.pendingProps, e3 === null ? t3.child = ja2(t3, null, r3, n4) : Ys(e3, t3, r3, n4), t3.child;
        case 11:
          return Xs(e3, t3, t3.type, t3.pendingProps, n4);
        case 7:
          return Ys(e3, t3, t3.pendingProps, n4), t3.child;
        case 8:
          return Ys(e3, t3, t3.pendingProps.children, n4), t3.child;
        case 12:
          return Ys(e3, t3, t3.pendingProps.children, n4), t3.child;
        case 10:
          return r3 = t3.pendingProps, Vi2(t3, t3.type, r3.value), Ys(e3, t3, r3.children, n4), t3.child;
        case 9:
          return i4 = t3.type._context, r3 = t3.pendingProps.children, qi2(t3), i4 = Ji2(i4), r3 = r3(i4), t3.flags |= 1, Ys(e3, t3, r3, n4), t3.child;
        case 14:
          return Zs(e3, t3, t3.type, t3.pendingProps, n4);
        case 15:
          return Qs(e3, t3, t3.type, t3.pendingProps, n4);
        case 19:
          return yc(e3, t3, n4);
        case 31:
          return ic(e3, t3, n4);
        case 22:
          return $s(e3, t3, n4, t3.pendingProps);
        case 24:
          return qi2(t3), r3 = Ji2(ea2), e3 === null ? (i4 = fa2(), i4 === null && (i4 = Nl, a3 = ta2(), i4.pooledCache = a3, a3.refCount++, a3 !== null && (i4.pooledCacheLanes |= n4), i4 = a3), t3.memoizedState = { parent: r3, cache: i4 }, Pa2(t3), Vi2(t3, ea2, i4)) : ((e3.lanes & n4) !== 0 && (Fa2(e3, t3), Ha2(t3, null, null, n4), Va2()), i4 = e3.memoizedState, a3 = t3.memoizedState, i4.parent === r3 ? (r3 = a3.cache, Vi2(t3, ea2, r3), r3 !== i4.cache && Wi2(t3, [ea2], n4, true)) : (i4 = { parent: r3, cache: r3 }, t3.memoizedState = i4, t3.lanes === 0 && (t3.memoizedState = t3.updateQueue.baseState = i4), Vi2(t3, ea2, r3))), Ys(e3, t3, t3.pendingProps.children, n4), t3.child;
        case 29:
          throw t3.pendingProps;
      }
      throw Error(o3(156, t3.tag));
    }
    function wc(e3) {
      e3.flags |= 4;
    }
    function Tc(e3, t3, n4, r3, i4) {
      if ((t3 = (e3.mode & 32) != 0) && (t3 = false), t3) {
        if (e3.flags |= 16777216, (i4 & 335544128) === i4) if (e3.stateNode.complete) e3.flags |= 8192;
        else if (xu()) e3.flags |= 8192;
        else throw Sa2 = va2, ga2;
      } else e3.flags &= -16777217;
    }
    function Ec(e3, t3) {
      if (t3.type !== `stylesheet` || t3.state.loading & 4) e3.flags &= -16777217;
      else if (e3.flags |= 16777216, !Wf(t3)) if (xu()) e3.flags |= 8192;
      else throw Sa2 = va2, ga2;
    }
    function Dc(e3, t3) {
      t3 !== null && (e3.flags |= 4), e3.flags & 16384 && (t3 = e3.tag === 22 ? 536870912 : Xe2(), e3.lanes |= t3, Kl |= t3);
    }
    function Oc(e3, t3) {
      if (!K2) switch (e3.tailMode) {
        case `hidden`:
          t3 = e3.tail;
          for (var n4 = null; t3 !== null; ) t3.alternate !== null && (n4 = t3), t3 = t3.sibling;
          n4 === null ? e3.tail = null : n4.sibling = null;
          break;
        case `collapsed`:
          n4 = e3.tail;
          for (var r3 = null; n4 !== null; ) n4.alternate !== null && (r3 = n4), n4 = n4.sibling;
          r3 === null ? t3 || e3.tail === null ? e3.tail = null : e3.tail.sibling = null : r3.sibling = null;
      }
    }
    function kc(e3) {
      var t3 = e3.alternate !== null && e3.alternate.child === e3.child, n4 = 0, r3 = 0;
      if (t3) for (var i4 = e3.child; i4 !== null; ) n4 |= i4.lanes | i4.childLanes, r3 |= i4.subtreeFlags & 65011712, r3 |= i4.flags & 65011712, i4.return = e3, i4 = i4.sibling;
      else for (i4 = e3.child; i4 !== null; ) n4 |= i4.lanes | i4.childLanes, r3 |= i4.subtreeFlags, r3 |= i4.flags, i4.return = e3, i4 = i4.sibling;
      return e3.subtreeFlags |= r3, e3.childLanes = n4, t3;
    }
    function Ac(e3, t3, n4) {
      var r3 = t3.pendingProps;
      switch (wi2(t3), t3.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return kc(t3), null;
        case 1:
          return kc(t3), null;
        case 3:
          return n4 = t3.stateNode, r3 = null, e3 !== null && (r3 = e3.memoizedState.cache), t3.memoizedState.cache !== r3 && (t3.flags |= 2048), Hi2(ea2), he2(), n4.pendingContext && (n4.context = n4.pendingContext, n4.pendingContext = null), (e3 === null || e3.child === null) && (Pi2(t3) ? wc(t3) : e3 === null || e3.memoizedState.isDehydrated && !(t3.flags & 256) || (t3.flags |= 1024, Ii2())), kc(t3), null;
        case 26:
          var i4 = t3.type, a3 = t3.memoizedState;
          return e3 === null ? (wc(t3), a3 === null ? (kc(t3), Tc(t3, i4, null, r3, n4)) : (kc(t3), Ec(t3, a3))) : a3 ? a3 === e3.memoizedState ? (kc(t3), t3.flags &= -16777217) : (wc(t3), kc(t3), Ec(t3, a3)) : (e3 = e3.memoizedProps, e3 !== r3 && wc(t3), kc(t3), Tc(t3, i4, e3, r3, n4)), null;
        case 27:
          if (_e2(t3), n4 = pe2.current, i4 = t3.type, e3 !== null && t3.stateNode != null) e3.memoizedProps !== r3 && wc(t3);
          else {
            if (!r3) {
              if (t3.stateNode === null) throw Error(o3(166));
              return kc(t3), null;
            }
            e3 = fe2.current, Pi2(t3) ? Mi2(t3, e3) : (e3 = ff(i4, r3, n4), t3.stateNode = e3, wc(t3));
          }
          return kc(t3), null;
        case 5:
          if (_e2(t3), i4 = t3.type, e3 !== null && t3.stateNode != null) e3.memoizedProps !== r3 && wc(t3);
          else {
            if (!r3) {
              if (t3.stateNode === null) throw Error(o3(166));
              return kc(t3), null;
            }
            if (a3 = fe2.current, Pi2(t3)) Mi2(t3, a3);
            else {
              var s3 = Bd(pe2.current);
              switch (a3) {
                case 1:
                  a3 = s3.createElementNS(`http://www.w3.org/2000/svg`, i4);
                  break;
                case 2:
                  a3 = s3.createElementNS(`http://www.w3.org/1998/Math/MathML`, i4);
                  break;
                default:
                  switch (i4) {
                    case `svg`:
                      a3 = s3.createElementNS(`http://www.w3.org/2000/svg`, i4);
                      break;
                    case `math`:
                      a3 = s3.createElementNS(`http://www.w3.org/1998/Math/MathML`, i4);
                      break;
                    case `script`:
                      a3 = s3.createElement(`div`), a3.innerHTML = `<script><\/script>`, a3 = a3.removeChild(a3.firstChild);
                      break;
                    case `select`:
                      a3 = typeof r3.is == `string` ? s3.createElement(`select`, { is: r3.is }) : s3.createElement(`select`), r3.multiple ? a3.multiple = true : r3.size && (a3.size = r3.size);
                      break;
                    default:
                      a3 = typeof r3.is == `string` ? s3.createElement(i4, { is: r3.is }) : s3.createElement(i4);
                  }
              }
              a3[ct2] = t3, a3[lt2] = r3;
              a: for (s3 = t3.child; s3 !== null; ) {
                if (s3.tag === 5 || s3.tag === 6) a3.appendChild(s3.stateNode);
                else if (s3.tag !== 4 && s3.tag !== 27 && s3.child !== null) {
                  s3.child.return = s3, s3 = s3.child;
                  continue;
                }
                if (s3 === t3) break a;
                for (; s3.sibling === null; ) {
                  if (s3.return === null || s3.return === t3) break a;
                  s3 = s3.return;
                }
                s3.sibling.return = s3.return, s3 = s3.sibling;
              }
              t3.stateNode = a3;
              a: switch (Pd(a3, i4, r3), i4) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r3 = !!r3.autoFocus;
                  break a;
                case `img`:
                  r3 = true;
                  break a;
                default:
                  r3 = false;
              }
              r3 && wc(t3);
            }
          }
          return kc(t3), Tc(t3, t3.type, e3 === null ? null : e3.memoizedProps, t3.pendingProps, n4), null;
        case 6:
          if (e3 && t3.stateNode != null) e3.memoizedProps !== r3 && wc(t3);
          else {
            if (typeof r3 != `string` && t3.stateNode === null) throw Error(o3(166));
            if (e3 = pe2.current, Pi2(t3)) {
              if (e3 = t3.stateNode, n4 = t3.memoizedProps, r3 = null, i4 = Ei2, i4 !== null) switch (i4.tag) {
                case 27:
                case 5:
                  r3 = i4.memoizedProps;
              }
              e3[ct2] = t3, e3 = !!(e3.nodeValue === n4 || r3 !== null && true === r3.suppressHydrationWarning || jd(e3.nodeValue, n4)), e3 || ji2(t3, true);
            } else e3 = Bd(e3).createTextNode(r3), e3[ct2] = t3, t3.stateNode = e3;
          }
          return kc(t3), null;
        case 31:
          if (n4 = t3.memoizedState, e3 === null || e3.memoizedState !== null) {
            if (r3 = Pi2(t3), n4 !== null) {
              if (e3 === null) {
                if (!r3) throw Error(o3(318));
                if (e3 = t3.memoizedState, e3 = e3 === null ? null : e3.dehydrated, !e3) throw Error(o3(557));
                e3[ct2] = t3;
              } else Fi2(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
              kc(t3), e3 = false;
            } else n4 = Ii2(), e3 !== null && e3.memoizedState !== null && (e3.memoizedState.hydrationErrors = n4), e3 = true;
            if (!e3) return t3.flags & 256 ? (no2(t3), t3) : (no2(t3), null);
            if (t3.flags & 128) throw Error(o3(558));
          }
          return kc(t3), null;
        case 13:
          if (r3 = t3.memoizedState, e3 === null || e3.memoizedState !== null && e3.memoizedState.dehydrated !== null) {
            if (i4 = Pi2(t3), r3 !== null && r3.dehydrated !== null) {
              if (e3 === null) {
                if (!i4) throw Error(o3(318));
                if (i4 = t3.memoizedState, i4 = i4 === null ? null : i4.dehydrated, !i4) throw Error(o3(317));
                i4[ct2] = t3;
              } else Fi2(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
              kc(t3), i4 = false;
            } else i4 = Ii2(), e3 !== null && e3.memoizedState !== null && (e3.memoizedState.hydrationErrors = i4), i4 = true;
            if (!i4) return t3.flags & 256 ? (no2(t3), t3) : (no2(t3), null);
          }
          return no2(t3), t3.flags & 128 ? (t3.lanes = n4, t3) : (n4 = r3 !== null, e3 = e3 !== null && e3.memoizedState !== null, n4 && (r3 = t3.child, i4 = null, r3.alternate !== null && r3.alternate.memoizedState !== null && r3.alternate.memoizedState.cachePool !== null && (i4 = r3.alternate.memoizedState.cachePool.pool), a3 = null, r3.memoizedState !== null && r3.memoizedState.cachePool !== null && (a3 = r3.memoizedState.cachePool.pool), a3 !== i4 && (r3.flags |= 2048)), n4 !== e3 && n4 && (t3.child.flags |= 8192), Dc(t3, t3.updateQueue), kc(t3), null);
        case 4:
          return he2(), e3 === null && xd(t3.stateNode.containerInfo), kc(t3), null;
        case 10:
          return Hi2(t3.type), kc(t3), null;
        case 19:
          if (ue2(ro2), r3 = t3.memoizedState, r3 === null) return kc(t3), null;
          if (i4 = (t3.flags & 128) != 0, a3 = r3.rendering, a3 === null) if (i4) Oc(r3, false);
          else {
            if (Vl !== 0 || e3 !== null && e3.flags & 128) for (e3 = t3.child; e3 !== null; ) {
              if (a3 = io2(e3), a3 !== null) {
                for (t3.flags |= 128, Oc(r3, false), e3 = a3.updateQueue, t3.updateQueue = e3, Dc(t3, e3), t3.subtreeFlags = 0, e3 = n4, n4 = t3.child; n4 !== null; ) oi2(n4, e3), n4 = n4.sibling;
                return de2(ro2, ro2.current & 1 | 2), K2 && xi2(t3, r3.treeForkCount), t3.child;
              }
              e3 = e3.sibling;
            }
            r3.tail !== null && Ae2() > Ql && (t3.flags |= 128, i4 = true, Oc(r3, false), t3.lanes = 4194304);
          }
          else {
            if (!i4) if (e3 = io2(a3), e3 !== null) {
              if (t3.flags |= 128, i4 = true, e3 = e3.updateQueue, t3.updateQueue = e3, Dc(t3, e3), Oc(r3, true), r3.tail === null && r3.tailMode === `hidden` && !a3.alternate && !K2) return kc(t3), null;
            } else 2 * Ae2() - r3.renderingStartTime > Ql && n4 !== 536870912 && (t3.flags |= 128, i4 = true, Oc(r3, false), t3.lanes = 4194304);
            r3.isBackwards ? (a3.sibling = t3.child, t3.child = a3) : (e3 = r3.last, e3 === null ? t3.child = a3 : e3.sibling = a3, r3.last = a3);
          }
          return r3.tail === null ? (kc(t3), null) : (e3 = r3.tail, r3.rendering = e3, r3.tail = e3.sibling, r3.renderingStartTime = Ae2(), e3.sibling = null, n4 = ro2.current, de2(ro2, i4 ? n4 & 1 | 2 : n4 & 1), K2 && xi2(t3, r3.treeForkCount), e3);
        case 22:
        case 23:
          return no2(t3), Ya2(), r3 = t3.memoizedState !== null, e3 === null ? r3 && (t3.flags |= 8192) : e3.memoizedState !== null !== r3 && (t3.flags |= 8192), r3 ? n4 & 536870912 && !(t3.flags & 128) && (kc(t3), t3.subtreeFlags & 6 && (t3.flags |= 8192)) : kc(t3), n4 = t3.updateQueue, n4 !== null && Dc(t3, n4.retryQueue), n4 = null, e3 !== null && e3.memoizedState !== null && e3.memoizedState.cachePool !== null && (n4 = e3.memoizedState.cachePool.pool), r3 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (r3 = t3.memoizedState.cachePool.pool), r3 !== n4 && (t3.flags |= 2048), e3 !== null && ue2(da2), null;
        case 24:
          return n4 = null, e3 !== null && (n4 = e3.memoizedState.cache), t3.memoizedState.cache !== n4 && (t3.flags |= 2048), Hi2(ea2), kc(t3), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(o3(156, t3.tag));
    }
    function jc(e3, t3) {
      switch (wi2(t3), t3.tag) {
        case 1:
          return e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
        case 3:
          return Hi2(ea2), he2(), e3 = t3.flags, e3 & 65536 && !(e3 & 128) ? (t3.flags = e3 & -65537 | 128, t3) : null;
        case 26:
        case 27:
        case 5:
          return _e2(t3), null;
        case 31:
          if (t3.memoizedState !== null) {
            if (no2(t3), t3.alternate === null) throw Error(o3(340));
            Fi2();
          }
          return e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
        case 13:
          if (no2(t3), e3 = t3.memoizedState, e3 !== null && e3.dehydrated !== null) {
            if (t3.alternate === null) throw Error(o3(340));
            Fi2();
          }
          return e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
        case 19:
          return ue2(ro2), null;
        case 4:
          return he2(), null;
        case 10:
          return Hi2(t3.type), null;
        case 22:
        case 23:
          return no2(t3), Ya2(), e3 !== null && ue2(da2), e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
        case 24:
          return Hi2(ea2), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Mc(e3, t3) {
      switch (wi2(t3), t3.tag) {
        case 3:
          Hi2(ea2), he2();
          break;
        case 26:
        case 27:
        case 5:
          _e2(t3);
          break;
        case 4:
          he2();
          break;
        case 31:
          t3.memoizedState !== null && no2(t3);
          break;
        case 13:
          no2(t3);
          break;
        case 19:
          ue2(ro2);
          break;
        case 10:
          Hi2(t3.type);
          break;
        case 22:
        case 23:
          no2(t3), Ya2(), e3 !== null && ue2(da2);
          break;
        case 24:
          Hi2(ea2);
      }
    }
    function Nc(e3, t3) {
      try {
        var n4 = t3.updateQueue, r3 = n4 === null ? null : n4.lastEffect;
        if (r3 !== null) {
          var i4 = r3.next;
          n4 = i4;
          do {
            if ((n4.tag & e3) === e3) {
              r3 = void 0;
              var a3 = n4.create, o4 = n4.inst;
              r3 = a3(), o4.destroy = r3;
            }
            n4 = n4.next;
          } while (n4 !== i4);
        }
      } catch (e4) {
        Hu(t3, t3.return, e4);
      }
    }
    function Pc(e3, t3, n4) {
      try {
        var r3 = t3.updateQueue, i4 = r3 === null ? null : r3.lastEffect;
        if (i4 !== null) {
          var a3 = i4.next;
          r3 = a3;
          do {
            if ((r3.tag & e3) === e3) {
              var o4 = r3.inst, s3 = o4.destroy;
              if (s3 !== void 0) {
                o4.destroy = void 0, i4 = t3;
                var c4 = n4, l4 = s3;
                try {
                  l4();
                } catch (e4) {
                  Hu(i4, c4, e4);
                }
              }
            }
            r3 = r3.next;
          } while (r3 !== a3);
        }
      } catch (e4) {
        Hu(t3, t3.return, e4);
      }
    }
    function Fc(e3) {
      var t3 = e3.updateQueue;
      if (t3 !== null) {
        var n4 = e3.stateNode;
        try {
          Wa2(t3, n4);
        } catch (t4) {
          Hu(e3, e3.return, t4);
        }
      }
    }
    function Ic(e3, t3, n4) {
      n4.props = Ls(e3.type, e3.memoizedProps), n4.state = e3.memoizedState;
      try {
        n4.componentWillUnmount();
      } catch (n5) {
        Hu(e3, t3, n5);
      }
    }
    function Lc(e3, t3) {
      try {
        var n4 = e3.ref;
        if (n4 !== null) {
          switch (e3.tag) {
            case 26:
            case 27:
            case 5:
              var r3 = e3.stateNode;
              break;
            case 30:
              r3 = e3.stateNode;
              break;
            default:
              r3 = e3.stateNode;
          }
          typeof n4 == `function` ? e3.refCleanup = n4(r3) : n4.current = r3;
        }
      } catch (n5) {
        Hu(e3, t3, n5);
      }
    }
    function Rc(e3, t3) {
      var n4 = e3.ref, r3 = e3.refCleanup;
      if (n4 !== null) if (typeof r3 == `function`) try {
        r3();
      } catch (n5) {
        Hu(e3, t3, n5);
      } finally {
        e3.refCleanup = null, e3 = e3.alternate, e3 != null && (e3.refCleanup = null);
      }
      else if (typeof n4 == `function`) try {
        n4(null);
      } catch (n5) {
        Hu(e3, t3, n5);
      }
      else n4.current = null;
    }
    function zc(e3) {
      var t3 = e3.type, n4 = e3.memoizedProps, r3 = e3.stateNode;
      try {
        a: switch (t3) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n4.autoFocus && r3.focus();
            break a;
          case `img`:
            n4.src ? r3.src = n4.src : n4.srcSet && (r3.srcset = n4.srcSet);
        }
      } catch (t4) {
        Hu(e3, e3.return, t4);
      }
    }
    function Bc(e3, t3, n4) {
      try {
        var r3 = e3.stateNode;
        Fd(r3, e3.type, n4, t3), r3[lt2] = t3;
      } catch (t4) {
        Hu(e3, e3.return, t4);
      }
    }
    function Vc(e3) {
      return e3.tag === 5 || e3.tag === 3 || e3.tag === 26 || e3.tag === 27 && Zd(e3.type) || e3.tag === 4;
    }
    function Hc(e3) {
      a: for (; ; ) {
        for (; e3.sibling === null; ) {
          if (e3.return === null || Vc(e3.return)) return null;
          e3 = e3.return;
        }
        for (e3.sibling.return = e3.return, e3 = e3.sibling; e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 18; ) {
          if (e3.tag === 27 && Zd(e3.type) || e3.flags & 2 || e3.child === null || e3.tag === 4) continue a;
          e3.child.return = e3, e3 = e3.child;
        }
        if (!(e3.flags & 2)) return e3.stateNode;
      }
    }
    function Uc(e3, t3, n4) {
      var r3 = e3.tag;
      if (r3 === 5 || r3 === 6) e3 = e3.stateNode, t3 ? (n4.nodeType === 9 ? n4.body : n4.nodeName === `HTML` ? n4.ownerDocument.body : n4).insertBefore(e3, t3) : (t3 = n4.nodeType === 9 ? n4.body : n4.nodeName === `HTML` ? n4.ownerDocument.body : n4, t3.appendChild(e3), n4 = n4._reactRootContainer, n4 != null || t3.onclick !== null || (t3.onclick = en2));
      else if (r3 !== 4 && (r3 === 27 && Zd(e3.type) && (n4 = e3.stateNode, t3 = null), e3 = e3.child, e3 !== null)) for (Uc(e3, t3, n4), e3 = e3.sibling; e3 !== null; ) Uc(e3, t3, n4), e3 = e3.sibling;
    }
    function Wc(e3, t3, n4) {
      var r3 = e3.tag;
      if (r3 === 5 || r3 === 6) e3 = e3.stateNode, t3 ? n4.insertBefore(e3, t3) : n4.appendChild(e3);
      else if (r3 !== 4 && (r3 === 27 && Zd(e3.type) && (n4 = e3.stateNode), e3 = e3.child, e3 !== null)) for (Wc(e3, t3, n4), e3 = e3.sibling; e3 !== null; ) Wc(e3, t3, n4), e3 = e3.sibling;
    }
    function Gc(e3) {
      var t3 = e3.stateNode, n4 = e3.memoizedProps;
      try {
        for (var r3 = e3.type, i4 = t3.attributes; i4.length; ) t3.removeAttributeNode(i4[0]);
        Pd(t3, r3, n4), t3[ct2] = e3, t3[lt2] = n4;
      } catch (t4) {
        Hu(e3, e3.return, t4);
      }
    }
    var Kc = false, qc = false, Jc = false, Yc = typeof WeakSet == `function` ? WeakSet : Set, Xc = null;
    function Zc(e3, t3) {
      if (e3 = e3.containerInfo, Rd = sp, e3 = Dr2(e3), Or2(e3)) {
        if (`selectionStart` in e3) var n4 = { start: e3.selectionStart, end: e3.selectionEnd };
        else a: {
          n4 = (n4 = e3.ownerDocument) && n4.defaultView || window;
          var r3 = n4.getSelection && n4.getSelection();
          if (r3 && r3.rangeCount !== 0) {
            n4 = r3.anchorNode;
            var i4 = r3.anchorOffset, a3 = r3.focusNode;
            r3 = r3.focusOffset;
            try {
              n4.nodeType, a3.nodeType;
            } catch {
              n4 = null;
              break a;
            }
            var s3 = 0, c4 = -1, l4 = -1, u3 = 0, d3 = 0, f3 = e3, p3 = null;
            b: for (; ; ) {
              for (var m3; f3 !== n4 || i4 !== 0 && f3.nodeType !== 3 || (c4 = s3 + i4), f3 !== a3 || r3 !== 0 && f3.nodeType !== 3 || (l4 = s3 + r3), f3.nodeType === 3 && (s3 += f3.nodeValue.length), (m3 = f3.firstChild) !== null; ) p3 = f3, f3 = m3;
              for (; ; ) {
                if (f3 === e3) break b;
                if (p3 === n4 && ++u3 === i4 && (c4 = s3), p3 === a3 && ++d3 === r3 && (l4 = s3), (m3 = f3.nextSibling) !== null) break;
                f3 = p3, p3 = f3.parentNode;
              }
              f3 = m3;
            }
            n4 = c4 === -1 || l4 === -1 ? null : { start: c4, end: l4 };
          } else n4 = null;
        }
        n4 ||= { start: 0, end: 0 };
      } else n4 = null;
      for (zd = { focusedElem: e3, selectionRange: n4 }, sp = false, Xc = t3; Xc !== null; ) if (t3 = Xc, e3 = t3.child, t3.subtreeFlags & 1028 && e3 !== null) e3.return = t3, Xc = e3;
      else for (; Xc !== null; ) {
        switch (t3 = Xc, a3 = t3.alternate, e3 = t3.flags, t3.tag) {
          case 0:
            if (e3 & 4 && (e3 = t3.updateQueue, e3 = e3 === null ? null : e3.events, e3 !== null)) for (n4 = 0; n4 < e3.length; n4++) i4 = e3[n4], i4.ref.impl = i4.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (e3 & 1024 && a3 !== null) {
              e3 = void 0, n4 = t3, i4 = a3.memoizedProps, a3 = a3.memoizedState, r3 = n4.stateNode;
              try {
                var h3 = Ls(n4.type, i4);
                e3 = r3.getSnapshotBeforeUpdate(h3, a3), r3.__reactInternalSnapshotBeforeUpdate = e3;
              } catch (e4) {
                Hu(n4, n4.return, e4);
              }
            }
            break;
          case 3:
            if (e3 & 1024) {
              if (e3 = t3.stateNode.containerInfo, n4 = e3.nodeType, n4 === 9) ef(e3);
              else if (n4 === 1) switch (e3.nodeName) {
                case `HEAD`:
                case `HTML`:
                case `BODY`:
                  ef(e3);
                  break;
                default:
                  e3.textContent = ``;
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (e3 & 1024) throw Error(o3(163));
        }
        if (e3 = t3.sibling, e3 !== null) {
          e3.return = t3.return, Xc = e3;
          break;
        }
        Xc = t3.return;
      }
    }
    function Qc(e3, t3, n4) {
      var r3 = n4.flags;
      switch (n4.tag) {
        case 0:
        case 11:
        case 15:
          pl(e3, n4), r3 & 4 && Nc(5, n4);
          break;
        case 1:
          if (pl(e3, n4), r3 & 4) if (e3 = n4.stateNode, t3 === null) try {
            e3.componentDidMount();
          } catch (e4) {
            Hu(n4, n4.return, e4);
          }
          else {
            var i4 = Ls(n4.type, t3.memoizedProps);
            t3 = t3.memoizedState;
            try {
              e3.componentDidUpdate(i4, t3, e3.__reactInternalSnapshotBeforeUpdate);
            } catch (e4) {
              Hu(n4, n4.return, e4);
            }
          }
          r3 & 64 && Fc(n4), r3 & 512 && Lc(n4, n4.return);
          break;
        case 3:
          if (pl(e3, n4), r3 & 64 && (e3 = n4.updateQueue, e3 !== null)) {
            if (t3 = null, n4.child !== null) switch (n4.child.tag) {
              case 27:
              case 5:
                t3 = n4.child.stateNode;
                break;
              case 1:
                t3 = n4.child.stateNode;
            }
            try {
              Wa2(e3, t3);
            } catch (e4) {
              Hu(n4, n4.return, e4);
            }
          }
          break;
        case 27:
          t3 === null && r3 & 4 && Gc(n4);
        case 26:
        case 5:
          pl(e3, n4), t3 === null && r3 & 4 && zc(n4), r3 & 512 && Lc(n4, n4.return);
          break;
        case 12:
          pl(e3, n4);
          break;
        case 31:
          pl(e3, n4), r3 & 4 && il(e3, n4);
          break;
        case 13:
          pl(e3, n4), r3 & 4 && al(e3, n4), r3 & 64 && (e3 = n4.memoizedState, e3 !== null && (e3 = e3.dehydrated, e3 !== null && (n4 = Ku.bind(null, n4), sf(e3, n4))));
          break;
        case 22:
          if (r3 = n4.memoizedState !== null || Kc, !r3) {
            t3 = t3 !== null && t3.memoizedState !== null || qc, i4 = Kc;
            var a3 = qc;
            Kc = r3, (qc = t3) && !a3 ? hl(e3, n4, (n4.subtreeFlags & 8772) != 0) : pl(e3, n4), Kc = i4, qc = a3;
          }
          break;
        case 30:
          break;
        default:
          pl(e3, n4);
      }
    }
    function $c(e3) {
      var t3 = e3.alternate;
      t3 !== null && (e3.alternate = null, $c(t3)), e3.child = null, e3.deletions = null, e3.sibling = null, e3.tag === 5 && (t3 = e3.stateNode, t3 !== null && gt2(t3)), e3.stateNode = null, e3.return = null, e3.dependencies = null, e3.memoizedProps = null, e3.memoizedState = null, e3.pendingProps = null, e3.stateNode = null, e3.updateQueue = null;
    }
    var el = null, tl = false;
    function nl(e3, t3, n4) {
      for (n4 = n4.child; n4 !== null; ) rl(e3, t3, n4), n4 = n4.sibling;
    }
    function rl(e3, t3, n4) {
      if (ze2 && typeof ze2.onCommitFiberUnmount == `function`) try {
        ze2.onCommitFiberUnmount(Re2, n4);
      } catch {
      }
      switch (n4.tag) {
        case 26:
          qc || Rc(n4, t3), nl(e3, t3, n4), n4.memoizedState ? n4.memoizedState.count-- : n4.stateNode && (n4 = n4.stateNode, n4.parentNode.removeChild(n4));
          break;
        case 27:
          qc || Rc(n4, t3);
          var r3 = el, i4 = tl;
          Zd(n4.type) && (el = n4.stateNode, tl = false), nl(e3, t3, n4), pf(n4.stateNode), el = r3, tl = i4;
          break;
        case 5:
          qc || Rc(n4, t3);
        case 6:
          if (r3 = el, i4 = tl, el = null, nl(e3, t3, n4), el = r3, tl = i4, el !== null) if (tl) try {
            (el.nodeType === 9 ? el.body : el.nodeName === `HTML` ? el.ownerDocument.body : el).removeChild(n4.stateNode);
          } catch (e4) {
            Hu(n4, t3, e4);
          }
          else try {
            el.removeChild(n4.stateNode);
          } catch (e4) {
            Hu(n4, t3, e4);
          }
          break;
        case 18:
          el !== null && (tl ? (e3 = el, Qd(e3.nodeType === 9 ? e3.body : e3.nodeName === `HTML` ? e3.ownerDocument.body : e3, n4.stateNode), Np(e3)) : Qd(el, n4.stateNode));
          break;
        case 4:
          r3 = el, i4 = tl, el = n4.stateNode.containerInfo, tl = true, nl(e3, t3, n4), el = r3, tl = i4;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Pc(2, n4, t3), qc || Pc(4, n4, t3), nl(e3, t3, n4);
          break;
        case 1:
          qc || (Rc(n4, t3), r3 = n4.stateNode, typeof r3.componentWillUnmount == `function` && Ic(n4, t3, r3)), nl(e3, t3, n4);
          break;
        case 21:
          nl(e3, t3, n4);
          break;
        case 22:
          qc = (r3 = qc) || n4.memoizedState !== null, nl(e3, t3, n4), qc = r3;
          break;
        default:
          nl(e3, t3, n4);
      }
    }
    function il(e3, t3) {
      if (t3.memoizedState === null && (e3 = t3.alternate, e3 !== null && (e3 = e3.memoizedState, e3 !== null))) {
        e3 = e3.dehydrated;
        try {
          Np(e3);
        } catch (e4) {
          Hu(t3, t3.return, e4);
        }
      }
    }
    function al(e3, t3) {
      if (t3.memoizedState === null && (e3 = t3.alternate, e3 !== null && (e3 = e3.memoizedState, e3 !== null && (e3 = e3.dehydrated, e3 !== null)))) try {
        Np(e3);
      } catch (e4) {
        Hu(t3, t3.return, e4);
      }
    }
    function ol(e3) {
      switch (e3.tag) {
        case 31:
        case 13:
        case 19:
          var t3 = e3.stateNode;
          return t3 === null && (t3 = e3.stateNode = new Yc()), t3;
        case 22:
          return e3 = e3.stateNode, t3 = e3._retryCache, t3 === null && (t3 = e3._retryCache = new Yc()), t3;
        default:
          throw Error(o3(435, e3.tag));
      }
    }
    function sl(e3, t3) {
      var n4 = ol(e3);
      t3.forEach(function(t4) {
        if (!n4.has(t4)) {
          n4.add(t4);
          var r3 = qu.bind(null, e3, t4);
          t4.then(r3, r3);
        }
      });
    }
    function cl(e3, t3) {
      var n4 = t3.deletions;
      if (n4 !== null) for (var r3 = 0; r3 < n4.length; r3++) {
        var i4 = n4[r3], a3 = e3, s3 = t3, c4 = s3;
        a: for (; c4 !== null; ) {
          switch (c4.tag) {
            case 27:
              if (Zd(c4.type)) {
                el = c4.stateNode, tl = false;
                break a;
              }
              break;
            case 5:
              el = c4.stateNode, tl = false;
              break a;
            case 3:
            case 4:
              el = c4.stateNode.containerInfo, tl = true;
              break a;
          }
          c4 = c4.return;
        }
        if (el === null) throw Error(o3(160));
        rl(a3, s3, i4), el = null, tl = false, a3 = i4.alternate, a3 !== null && (a3.return = null), i4.return = null;
      }
      if (t3.subtreeFlags & 13886) for (t3 = t3.child; t3 !== null; ) ul(t3, e3), t3 = t3.sibling;
    }
    var ll = null;
    function ul(e3, t3) {
      var n4 = e3.alternate, r3 = e3.flags;
      switch (e3.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          cl(t3, e3), dl(e3), r3 & 4 && (Pc(3, e3, e3.return), Nc(3, e3), Pc(5, e3, e3.return));
          break;
        case 1:
          cl(t3, e3), dl(e3), r3 & 512 && (qc || n4 === null || Rc(n4, n4.return)), r3 & 64 && Kc && (e3 = e3.updateQueue, e3 !== null && (r3 = e3.callbacks, r3 !== null && (n4 = e3.shared.hiddenCallbacks, e3.shared.hiddenCallbacks = n4 === null ? r3 : n4.concat(r3))));
          break;
        case 26:
          var i4 = ll;
          if (cl(t3, e3), dl(e3), r3 & 512 && (qc || n4 === null || Rc(n4, n4.return)), r3 & 4) {
            var a3 = n4 === null ? null : n4.memoizedState;
            if (r3 = e3.memoizedState, n4 === null) if (r3 === null) if (e3.stateNode === null) {
              a: {
                r3 = e3.type, n4 = e3.memoizedProps, i4 = i4.ownerDocument || i4;
                b: switch (r3) {
                  case `title`:
                    a3 = i4.getElementsByTagName(`title`)[0], (!a3 || a3[ht2] || a3[ct2] || a3.namespaceURI === `http://www.w3.org/2000/svg` || a3.hasAttribute(`itemprop`)) && (a3 = i4.createElement(r3), i4.head.insertBefore(a3, i4.querySelector(`head > title`))), Pd(a3, r3, n4), a3[ct2] = e3, xt2(a3), r3 = a3;
                    break a;
                  case `link`:
                    var s3 = Vf(`link`, `href`, i4).get(r3 + (n4.href || ``));
                    if (s3) {
                      for (var c4 = 0; c4 < s3.length; c4++) if (a3 = s3[c4], a3.getAttribute(`href`) === (n4.href == null || n4.href === `` ? null : n4.href) && a3.getAttribute(`rel`) === (n4.rel == null ? null : n4.rel) && a3.getAttribute(`title`) === (n4.title == null ? null : n4.title) && a3.getAttribute(`crossorigin`) === (n4.crossOrigin == null ? null : n4.crossOrigin)) {
                        s3.splice(c4, 1);
                        break b;
                      }
                    }
                    a3 = i4.createElement(r3), Pd(a3, r3, n4), i4.head.appendChild(a3);
                    break;
                  case `meta`:
                    if (s3 = Vf(`meta`, `content`, i4).get(r3 + (n4.content || ``))) {
                      for (c4 = 0; c4 < s3.length; c4++) if (a3 = s3[c4], a3.getAttribute(`content`) === (n4.content == null ? null : `` + n4.content) && a3.getAttribute(`name`) === (n4.name == null ? null : n4.name) && a3.getAttribute(`property`) === (n4.property == null ? null : n4.property) && a3.getAttribute(`http-equiv`) === (n4.httpEquiv == null ? null : n4.httpEquiv) && a3.getAttribute(`charset`) === (n4.charSet == null ? null : n4.charSet)) {
                        s3.splice(c4, 1);
                        break b;
                      }
                    }
                    a3 = i4.createElement(r3), Pd(a3, r3, n4), i4.head.appendChild(a3);
                    break;
                  default:
                    throw Error(o3(468, r3));
                }
                a3[ct2] = e3, xt2(a3), r3 = a3;
              }
              e3.stateNode = r3;
            } else Hf(i4, e3.type, e3.stateNode);
            else e3.stateNode = If(i4, r3, e3.memoizedProps);
            else a3 === r3 ? r3 === null && e3.stateNode !== null && Bc(e3, e3.memoizedProps, n4.memoizedProps) : (a3 === null ? n4.stateNode !== null && (n4 = n4.stateNode, n4.parentNode.removeChild(n4)) : a3.count--, r3 === null ? Hf(i4, e3.type, e3.stateNode) : If(i4, r3, e3.memoizedProps));
          }
          break;
        case 27:
          cl(t3, e3), dl(e3), r3 & 512 && (qc || n4 === null || Rc(n4, n4.return)), n4 !== null && r3 & 4 && Bc(e3, e3.memoizedProps, n4.memoizedProps);
          break;
        case 5:
          if (cl(t3, e3), dl(e3), r3 & 512 && (qc || n4 === null || Rc(n4, n4.return)), e3.flags & 32) {
            i4 = e3.stateNode;
            try {
              Kt2(i4, ``);
            } catch (t4) {
              Hu(e3, e3.return, t4);
            }
          }
          r3 & 4 && e3.stateNode != null && (i4 = e3.memoizedProps, Bc(e3, i4, n4 === null ? i4 : n4.memoizedProps)), r3 & 1024 && (Jc = true);
          break;
        case 6:
          if (cl(t3, e3), dl(e3), r3 & 4) {
            if (e3.stateNode === null) throw Error(o3(162));
            r3 = e3.memoizedProps, n4 = e3.stateNode;
            try {
              n4.nodeValue = r3;
            } catch (t4) {
              Hu(e3, e3.return, t4);
            }
          }
          break;
        case 3:
          if (Bf = null, i4 = ll, ll = gf(t3.containerInfo), cl(t3, e3), ll = i4, dl(e3), r3 & 4 && n4 !== null && n4.memoizedState.isDehydrated) try {
            Np(t3.containerInfo);
          } catch (t4) {
            Hu(e3, e3.return, t4);
          }
          Jc && (Jc = false, fl(e3));
          break;
        case 4:
          r3 = ll, ll = gf(e3.stateNode.containerInfo), cl(t3, e3), dl(e3), ll = r3;
          break;
        case 12:
          cl(t3, e3), dl(e3);
          break;
        case 31:
          cl(t3, e3), dl(e3), r3 & 4 && (r3 = e3.updateQueue, r3 !== null && (e3.updateQueue = null, sl(e3, r3)));
          break;
        case 13:
          cl(t3, e3), dl(e3), e3.child.flags & 8192 && e3.memoizedState !== null != (n4 !== null && n4.memoizedState !== null) && (Xl = Ae2()), r3 & 4 && (r3 = e3.updateQueue, r3 !== null && (e3.updateQueue = null, sl(e3, r3)));
          break;
        case 22:
          i4 = e3.memoizedState !== null;
          var l4 = n4 !== null && n4.memoizedState !== null, u3 = Kc, d3 = qc;
          if (Kc = u3 || i4, qc = d3 || l4, cl(t3, e3), qc = d3, Kc = u3, dl(e3), r3 & 8192) a: for (t3 = e3.stateNode, t3._visibility = i4 ? t3._visibility & -2 : t3._visibility | 1, i4 && (n4 === null || l4 || Kc || qc || ml(e3)), n4 = null, t3 = e3; ; ) {
            if (t3.tag === 5 || t3.tag === 26) {
              if (n4 === null) {
                l4 = n4 = t3;
                try {
                  if (a3 = l4.stateNode, i4) s3 = a3.style, typeof s3.setProperty == `function` ? s3.setProperty(`display`, `none`, `important`) : s3.display = `none`;
                  else {
                    c4 = l4.stateNode;
                    var f3 = l4.memoizedProps.style, p3 = f3 != null && f3.hasOwnProperty(`display`) ? f3.display : null;
                    c4.style.display = p3 == null || typeof p3 == `boolean` ? `` : (`` + p3).trim();
                  }
                } catch (e4) {
                  Hu(l4, l4.return, e4);
                }
              }
            } else if (t3.tag === 6) {
              if (n4 === null) {
                l4 = t3;
                try {
                  l4.stateNode.nodeValue = i4 ? `` : l4.memoizedProps;
                } catch (e4) {
                  Hu(l4, l4.return, e4);
                }
              }
            } else if (t3.tag === 18) {
              if (n4 === null) {
                l4 = t3;
                try {
                  var m3 = l4.stateNode;
                  i4 ? $d(m3, true) : $d(l4.stateNode, false);
                } catch (e4) {
                  Hu(l4, l4.return, e4);
                }
              }
            } else if ((t3.tag !== 22 && t3.tag !== 23 || t3.memoizedState === null || t3 === e3) && t3.child !== null) {
              t3.child.return = t3, t3 = t3.child;
              continue;
            }
            if (t3 === e3) break a;
            for (; t3.sibling === null; ) {
              if (t3.return === null || t3.return === e3) break a;
              n4 === t3 && (n4 = null), t3 = t3.return;
            }
            n4 === t3 && (n4 = null), t3.sibling.return = t3.return, t3 = t3.sibling;
          }
          r3 & 4 && (r3 = e3.updateQueue, r3 !== null && (n4 = r3.retryQueue, n4 !== null && (r3.retryQueue = null, sl(e3, n4))));
          break;
        case 19:
          cl(t3, e3), dl(e3), r3 & 4 && (r3 = e3.updateQueue, r3 !== null && (e3.updateQueue = null, sl(e3, r3)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          cl(t3, e3), dl(e3);
      }
    }
    function dl(e3) {
      var t3 = e3.flags;
      if (t3 & 2) {
        try {
          for (var n4, r3 = e3.return; r3 !== null; ) {
            if (Vc(r3)) {
              n4 = r3;
              break;
            }
            r3 = r3.return;
          }
          if (n4 == null) throw Error(o3(160));
          switch (n4.tag) {
            case 27:
              var i4 = n4.stateNode;
              Wc(e3, Hc(e3), i4);
              break;
            case 5:
              var a3 = n4.stateNode;
              n4.flags & 32 && (Kt2(a3, ``), n4.flags &= -33), Wc(e3, Hc(e3), a3);
              break;
            case 3:
            case 4:
              var s3 = n4.stateNode.containerInfo;
              Uc(e3, Hc(e3), s3);
              break;
            default:
              throw Error(o3(161));
          }
        } catch (t4) {
          Hu(e3, e3.return, t4);
        }
        e3.flags &= -3;
      }
      t3 & 4096 && (e3.flags &= -4097);
    }
    function fl(e3) {
      if (e3.subtreeFlags & 1024) for (e3 = e3.child; e3 !== null; ) {
        var t3 = e3;
        fl(t3), t3.tag === 5 && t3.flags & 1024 && t3.stateNode.reset(), e3 = e3.sibling;
      }
    }
    function pl(e3, t3) {
      if (t3.subtreeFlags & 8772) for (t3 = t3.child; t3 !== null; ) Qc(e3, t3.alternate, t3), t3 = t3.sibling;
    }
    function ml(e3) {
      for (e3 = e3.child; e3 !== null; ) {
        var t3 = e3;
        switch (t3.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Pc(4, t3, t3.return), ml(t3);
            break;
          case 1:
            Rc(t3, t3.return);
            var n4 = t3.stateNode;
            typeof n4.componentWillUnmount == `function` && Ic(t3, t3.return, n4), ml(t3);
            break;
          case 27:
            pf(t3.stateNode);
          case 26:
          case 5:
            Rc(t3, t3.return), ml(t3);
            break;
          case 22:
            t3.memoizedState === null && ml(t3);
            break;
          case 30:
            ml(t3);
            break;
          default:
            ml(t3);
        }
        e3 = e3.sibling;
      }
    }
    function hl(e3, t3, n4) {
      for (n4 &&= (t3.subtreeFlags & 8772) != 0, t3 = t3.child; t3 !== null; ) {
        var r3 = t3.alternate, i4 = e3, a3 = t3, o4 = a3.flags;
        switch (a3.tag) {
          case 0:
          case 11:
          case 15:
            hl(i4, a3, n4), Nc(4, a3);
            break;
          case 1:
            if (hl(i4, a3, n4), r3 = a3, i4 = r3.stateNode, typeof i4.componentDidMount == `function`) try {
              i4.componentDidMount();
            } catch (e4) {
              Hu(r3, r3.return, e4);
            }
            if (r3 = a3, i4 = r3.updateQueue, i4 !== null) {
              var s3 = r3.stateNode;
              try {
                var c4 = i4.shared.hiddenCallbacks;
                if (c4 !== null) for (i4.shared.hiddenCallbacks = null, i4 = 0; i4 < c4.length; i4++) Ua2(c4[i4], s3);
              } catch (e4) {
                Hu(r3, r3.return, e4);
              }
            }
            n4 && o4 & 64 && Fc(a3), Lc(a3, a3.return);
            break;
          case 27:
            Gc(a3);
          case 26:
          case 5:
            hl(i4, a3, n4), n4 && r3 === null && o4 & 4 && zc(a3), Lc(a3, a3.return);
            break;
          case 12:
            hl(i4, a3, n4);
            break;
          case 31:
            hl(i4, a3, n4), n4 && o4 & 4 && il(i4, a3);
            break;
          case 13:
            hl(i4, a3, n4), n4 && o4 & 4 && al(i4, a3);
            break;
          case 22:
            a3.memoizedState === null && hl(i4, a3, n4), Lc(a3, a3.return);
            break;
          case 30:
            break;
          default:
            hl(i4, a3, n4);
        }
        t3 = t3.sibling;
      }
    }
    function gl(e3, t3) {
      var n4 = null;
      e3 !== null && e3.memoizedState !== null && e3.memoizedState.cachePool !== null && (n4 = e3.memoizedState.cachePool.pool), e3 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (e3 = t3.memoizedState.cachePool.pool), e3 !== n4 && (e3 != null && e3.refCount++, n4 != null && na2(n4));
    }
    function _l(e3, t3) {
      e3 = null, t3.alternate !== null && (e3 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e3 && (t3.refCount++, e3 != null && na2(e3));
    }
    function vl(e3, t3, n4, r3) {
      if (t3.subtreeFlags & 10256) for (t3 = t3.child; t3 !== null; ) yl(e3, t3, n4, r3), t3 = t3.sibling;
    }
    function yl(e3, t3, n4, r3) {
      var i4 = t3.flags;
      switch (t3.tag) {
        case 0:
        case 11:
        case 15:
          vl(e3, t3, n4, r3), i4 & 2048 && Nc(9, t3);
          break;
        case 1:
          vl(e3, t3, n4, r3);
          break;
        case 3:
          vl(e3, t3, n4, r3), i4 & 2048 && (e3 = null, t3.alternate !== null && (e3 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e3 && (t3.refCount++, e3 != null && na2(e3)));
          break;
        case 12:
          if (i4 & 2048) {
            vl(e3, t3, n4, r3), e3 = t3.stateNode;
            try {
              var a3 = t3.memoizedProps, o4 = a3.id, s3 = a3.onPostCommit;
              typeof s3 == `function` && s3(o4, t3.alternate === null ? `mount` : `update`, e3.passiveEffectDuration, -0);
            } catch (e4) {
              Hu(t3, t3.return, e4);
            }
          } else vl(e3, t3, n4, r3);
          break;
        case 31:
          vl(e3, t3, n4, r3);
          break;
        case 13:
          vl(e3, t3, n4, r3);
          break;
        case 23:
          break;
        case 22:
          a3 = t3.stateNode, o4 = t3.alternate, t3.memoizedState === null ? a3._visibility & 2 ? vl(e3, t3, n4, r3) : (a3._visibility |= 2, bl(e3, t3, n4, r3, (t3.subtreeFlags & 10256) != 0 || false)) : a3._visibility & 2 ? vl(e3, t3, n4, r3) : xl(e3, t3), i4 & 2048 && gl(o4, t3);
          break;
        case 24:
          vl(e3, t3, n4, r3), i4 & 2048 && _l(t3.alternate, t3);
          break;
        default:
          vl(e3, t3, n4, r3);
      }
    }
    function bl(e3, t3, n4, r3, i4) {
      for (i4 &&= (t3.subtreeFlags & 10256) != 0 || false, t3 = t3.child; t3 !== null; ) {
        var a3 = e3, o4 = t3, s3 = n4, c4 = r3, l4 = o4.flags;
        switch (o4.tag) {
          case 0:
          case 11:
          case 15:
            bl(a3, o4, s3, c4, i4), Nc(8, o4);
            break;
          case 23:
            break;
          case 22:
            var u3 = o4.stateNode;
            o4.memoizedState === null ? (u3._visibility |= 2, bl(a3, o4, s3, c4, i4)) : u3._visibility & 2 ? bl(a3, o4, s3, c4, i4) : xl(a3, o4), i4 && l4 & 2048 && gl(o4.alternate, o4);
            break;
          case 24:
            bl(a3, o4, s3, c4, i4), i4 && l4 & 2048 && _l(o4.alternate, o4);
            break;
          default:
            bl(a3, o4, s3, c4, i4);
        }
        t3 = t3.sibling;
      }
    }
    function xl(e3, t3) {
      if (t3.subtreeFlags & 10256) for (t3 = t3.child; t3 !== null; ) {
        var n4 = e3, r3 = t3, i4 = r3.flags;
        switch (r3.tag) {
          case 22:
            xl(n4, r3), i4 & 2048 && gl(r3.alternate, r3);
            break;
          case 24:
            xl(n4, r3), i4 & 2048 && _l(r3.alternate, r3);
            break;
          default:
            xl(n4, r3);
        }
        t3 = t3.sibling;
      }
    }
    var Sl = 8192;
    function Cl(e3, t3, n4) {
      if (e3.subtreeFlags & Sl) for (e3 = e3.child; e3 !== null; ) wl(e3, t3, n4), e3 = e3.sibling;
    }
    function wl(e3, t3, n4) {
      switch (e3.tag) {
        case 26:
          Cl(e3, t3, n4), e3.flags & Sl && e3.memoizedState !== null && Gf(n4, ll, e3.memoizedState, e3.memoizedProps);
          break;
        case 5:
          Cl(e3, t3, n4);
          break;
        case 3:
        case 4:
          var r3 = ll;
          ll = gf(e3.stateNode.containerInfo), Cl(e3, t3, n4), ll = r3;
          break;
        case 22:
          e3.memoizedState === null && (r3 = e3.alternate, r3 !== null && r3.memoizedState !== null ? (r3 = Sl, Sl = 16777216, Cl(e3, t3, n4), Sl = r3) : Cl(e3, t3, n4));
          break;
        default:
          Cl(e3, t3, n4);
      }
    }
    function Tl(e3) {
      var t3 = e3.alternate;
      if (t3 !== null && (e3 = t3.child, e3 !== null)) {
        t3.child = null;
        do
          t3 = e3.sibling, e3.sibling = null, e3 = t3;
        while (e3 !== null);
      }
    }
    function El(e3) {
      var t3 = e3.deletions;
      if (e3.flags & 16) {
        if (t3 !== null) for (var n4 = 0; n4 < t3.length; n4++) {
          var r3 = t3[n4];
          Xc = r3, kl(r3, e3);
        }
        Tl(e3);
      }
      if (e3.subtreeFlags & 10256) for (e3 = e3.child; e3 !== null; ) Dl(e3), e3 = e3.sibling;
    }
    function Dl(e3) {
      switch (e3.tag) {
        case 0:
        case 11:
        case 15:
          El(e3), e3.flags & 2048 && Pc(9, e3, e3.return);
          break;
        case 3:
          El(e3);
          break;
        case 12:
          El(e3);
          break;
        case 22:
          var t3 = e3.stateNode;
          e3.memoizedState !== null && t3._visibility & 2 && (e3.return === null || e3.return.tag !== 13) ? (t3._visibility &= -3, Ol(e3)) : El(e3);
          break;
        default:
          El(e3);
      }
    }
    function Ol(e3) {
      var t3 = e3.deletions;
      if (e3.flags & 16) {
        if (t3 !== null) for (var n4 = 0; n4 < t3.length; n4++) {
          var r3 = t3[n4];
          Xc = r3, kl(r3, e3);
        }
        Tl(e3);
      }
      for (e3 = e3.child; e3 !== null; ) {
        switch (t3 = e3, t3.tag) {
          case 0:
          case 11:
          case 15:
            Pc(8, t3, t3.return), Ol(t3);
            break;
          case 22:
            n4 = t3.stateNode, n4._visibility & 2 && (n4._visibility &= -3, Ol(t3));
            break;
          default:
            Ol(t3);
        }
        e3 = e3.sibling;
      }
    }
    function kl(e3, t3) {
      for (; Xc !== null; ) {
        var n4 = Xc;
        switch (n4.tag) {
          case 0:
          case 11:
          case 15:
            Pc(8, n4, t3);
            break;
          case 23:
          case 22:
            if (n4.memoizedState !== null && n4.memoizedState.cachePool !== null) {
              var r3 = n4.memoizedState.cachePool.pool;
              r3 != null && r3.refCount++;
            }
            break;
          case 24:
            na2(n4.memoizedState.cache);
        }
        if (r3 = n4.child, r3 !== null) r3.return = n4, Xc = r3;
        else a: for (n4 = e3; Xc !== null; ) {
          r3 = Xc;
          var i4 = r3.sibling, a3 = r3.return;
          if ($c(r3), r3 === n4) {
            Xc = null;
            break a;
          }
          if (i4 !== null) {
            i4.return = a3, Xc = i4;
            break a;
          }
          Xc = a3;
        }
      }
    }
    var Al = { getCacheForType: function(e3) {
      var t3 = Ji2(ea2), n4 = t3.data.get(e3);
      return n4 === void 0 && (n4 = e3(), t3.data.set(e3, n4)), n4;
    }, cacheSignal: function() {
      return Ji2(ea2).controller.signal;
    } }, jl = typeof WeakMap == `function` ? WeakMap : Map, Ml = 0, Nl = null, $ = null, Pl = 0, Fl = 0, Il = null, Ll = false, Rl = false, zl = false, Bl = 0, Vl = 0, Hl = 0, Ul = 0, Wl = 0, Gl = 0, Kl = 0, ql = null, Jl = null, Yl = false, Xl = 0, Zl = 0, Ql = 1 / 0, $l = null, eu = null, tu = 0, nu = null, ru = null, iu = 0, au = 0, ou = null, su = null, cu = 0, lu = null;
    function uu() {
      return Ml & 2 && Pl !== 0 ? Pl & -Pl : A2.T === null ? at2() : ld();
    }
    function du() {
      if (Gl === 0) if (!(Pl & 536870912) || K2) {
        var e3 = We2;
        We2 <<= 1, !(We2 & 3932160) && (We2 = 262144), Gl = e3;
      } else Gl = 536870912;
      return e3 = Xa2.current, e3 !== null && (e3.flags |= 32), Gl;
    }
    function fu(e3, t3, n4) {
      (e3 === Nl && (Fl === 2 || Fl === 9) || e3.cancelPendingCommit !== null) && (yu(e3, 0), gu(e3, Pl, Gl, false)), Qe2(e3, n4), (!(Ml & 2) || e3 !== Nl) && (e3 === Nl && (!(Ml & 2) && (Ul |= n4), Vl === 4 && gu(e3, Pl, Gl, false)), td(e3));
    }
    function pu(e3, t3, n4) {
      if (Ml & 6) throw Error(o3(327));
      var r3 = !n4 && (t3 & 127) == 0 && (t3 & e3.expiredLanes) === 0 || Je2(e3, t3), i4 = r3 ? Du(e3, t3) : Tu(e3, t3, true), a3 = r3;
      do {
        if (i4 === 0) {
          Rl && !r3 && gu(e3, t3, 0, false);
          break;
        } else {
          if (n4 = e3.current.alternate, a3 && !hu(n4)) {
            i4 = Tu(e3, t3, false), a3 = false;
            continue;
          }
          if (i4 === 2) {
            if (a3 = t3, e3.errorRecoveryDisabledLanes & a3) var s3 = 0;
            else s3 = e3.pendingLanes & -536870913, s3 = s3 === 0 ? s3 & 536870912 ? 536870912 : 0 : s3;
            if (s3 !== 0) {
              t3 = s3;
              a: {
                var c4 = e3;
                i4 = ql;
                var l4 = c4.current.memoizedState.isDehydrated;
                if (l4 && (yu(c4, s3).flags |= 256), s3 = Tu(c4, s3, false), s3 !== 2) {
                  if (zl && !l4) {
                    c4.errorRecoveryDisabledLanes |= a3, Ul |= a3, i4 = 4;
                    break a;
                  }
                  a3 = Jl, Jl = i4, a3 !== null && (Jl === null ? Jl = a3 : Jl.push.apply(Jl, a3));
                }
                i4 = s3;
              }
              if (a3 = false, i4 !== 2) continue;
            }
          }
          if (i4 === 1) {
            yu(e3, 0), gu(e3, t3, 0, true);
            break;
          }
          a: {
            switch (r3 = e3, a3 = i4, a3) {
              case 0:
              case 1:
                throw Error(o3(345));
              case 4:
                if ((t3 & 4194048) !== t3) break;
              case 6:
                gu(r3, t3, Gl, !Ll);
                break a;
              case 2:
                Jl = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(o3(329));
            }
            if ((t3 & 62914560) === t3 && (i4 = Xl + 300 - Ae2(), 10 < i4)) {
              if (gu(r3, t3, Gl, !Ll), qe2(r3, 0, true) !== 0) break a;
              iu = t3, r3.timeoutHandle = Kd(mu.bind(null, r3, n4, Jl, $l, Yl, t3, Gl, Ul, Kl, Ll, a3, `Throttled`, -0, 0), i4);
              break a;
            }
            mu(r3, n4, Jl, $l, Yl, t3, Gl, Ul, Kl, Ll, a3, null, -0, 0);
          }
        }
        break;
      } while (1);
      td(e3);
    }
    function mu(e3, t3, n4, r3, i4, a3, o4, s3, c4, l4, u3, d3, f3, p3) {
      if (e3.timeoutHandle = -1, d3 = t3.subtreeFlags, d3 & 8192 || (d3 & 16785408) == 16785408) {
        d3 = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: en2 }, wl(t3, a3, d3);
        var m3 = (a3 & 62914560) === a3 ? Xl - Ae2() : (a3 & 4194048) === a3 ? Zl - Ae2() : 0;
        if (m3 = qf(d3, m3), m3 !== null) {
          iu = a3, e3.cancelPendingCommit = m3(Pu.bind(null, e3, t3, a3, n4, r3, i4, o4, s3, c4, u3, d3, null, f3, p3)), gu(e3, a3, o4, !l4);
          return;
        }
      }
      Pu(e3, t3, a3, n4, r3, i4, o4, s3, c4);
    }
    function hu(e3) {
      for (var t3 = e3; ; ) {
        var n4 = t3.tag;
        if ((n4 === 0 || n4 === 11 || n4 === 15) && t3.flags & 16384 && (n4 = t3.updateQueue, n4 !== null && (n4 = n4.stores, n4 !== null))) for (var r3 = 0; r3 < n4.length; r3++) {
          var i4 = n4[r3], a3 = i4.getSnapshot;
          i4 = i4.value;
          try {
            if (!Sr2(a3(), i4)) return false;
          } catch {
            return false;
          }
        }
        if (n4 = t3.child, t3.subtreeFlags & 16384 && n4 !== null) n4.return = t3, t3 = n4;
        else {
          if (t3 === e3) break;
          for (; t3.sibling === null; ) {
            if (t3.return === null || t3.return === e3) return true;
            t3 = t3.return;
          }
          t3.sibling.return = t3.return, t3 = t3.sibling;
        }
      }
      return true;
    }
    function gu(e3, t3, n4, r3) {
      t3 &= ~Wl, t3 &= ~Ul, e3.suspendedLanes |= t3, e3.pingedLanes &= ~t3, r3 && (e3.warmLanes |= t3), r3 = e3.expirationTimes;
      for (var i4 = t3; 0 < i4; ) {
        var a3 = 31 - Be2(i4), o4 = 1 << a3;
        r3[a3] = -1, i4 &= ~o4;
      }
      n4 !== 0 && et2(e3, n4, t3);
    }
    function _u() {
      return Ml & 6 ? true : (nd(0, false), false);
    }
    function vu() {
      if ($ !== null) {
        if (Fl === 0) var e3 = $.return;
        else e3 = $, Bi2 = zi2 = null, Co2(e3), Ta2 = null, Ea2 = 0, e3 = $;
        for (; e3 !== null; ) Mc(e3.alternate, e3), e3 = e3.return;
        $ = null;
      }
    }
    function yu(e3, t3) {
      var n4 = e3.timeoutHandle;
      n4 !== -1 && (e3.timeoutHandle = -1, qd(n4)), n4 = e3.cancelPendingCommit, n4 !== null && (e3.cancelPendingCommit = null, n4()), iu = 0, vu(), Nl = e3, $ = n4 = ai2(e3.current, null), Pl = t3, Fl = 0, Il = null, Ll = false, Rl = Je2(e3, t3), zl = false, Kl = Gl = Wl = Ul = Hl = Vl = 0, Jl = ql = null, Yl = false, t3 & 8 && (t3 |= t3 & 32);
      var r3 = e3.entangledLanes;
      if (r3 !== 0) for (e3 = e3.entanglements, r3 &= t3; 0 < r3; ) {
        var i4 = 31 - Be2(r3), a3 = 1 << i4;
        t3 |= e3[i4], r3 &= ~a3;
      }
      return Bl = t3, U2(), n4;
    }
    function bu(e3, t3) {
      q2 = null, A2.H = ks, t3 === ha2 || t3 === _a2 ? (t3 = Ca2(), Fl = 3) : t3 === ga2 ? (t3 = Ca2(), Fl = 4) : Fl = t3 === qs ? 8 : typeof t3 == `object` && t3 && typeof t3.then == `function` ? 6 : 1, Il = t3, $ === null && (Vl = 1, Vs(e3, pi2(t3, e3.current)));
    }
    function xu() {
      var e3 = Xa2.current;
      return e3 === null ? true : (Pl & 4194048) === Pl ? Za2 === null : (Pl & 62914560) === Pl || Pl & 536870912 ? e3 === Za2 : false;
    }
    function Su() {
      var e3 = A2.H;
      return A2.H = ks, e3 === null ? ks : e3;
    }
    function Cu() {
      var e3 = A2.A;
      return A2.A = Al, e3;
    }
    function wu() {
      Vl = 4, Ll || (Pl & 4194048) !== Pl && Xa2.current !== null || (Rl = true), !(Hl & 134217727) && !(Ul & 134217727) || Nl === null || gu(Nl, Pl, Gl, false);
    }
    function Tu(e3, t3, n4) {
      var r3 = Ml;
      Ml |= 2;
      var i4 = Su(), a3 = Cu();
      (Nl !== e3 || Pl !== t3) && ($l = null, yu(e3, t3)), t3 = false;
      var o4 = Vl;
      a: do
        try {
          if (Fl !== 0 && $ !== null) {
            var s3 = $, c4 = Il;
            switch (Fl) {
              case 8:
                vu(), o4 = 6;
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                Xa2.current === null && (t3 = true);
                var l4 = Fl;
                if (Fl = 0, Il = null, ju(e3, s3, c4, l4), n4 && Rl) {
                  o4 = 0;
                  break a;
                }
                break;
              default:
                l4 = Fl, Fl = 0, Il = null, ju(e3, s3, c4, l4);
            }
          }
          Eu(), o4 = Vl;
          break;
        } catch (t4) {
          bu(e3, t4);
        }
      while (1);
      return t3 && e3.shellSuspendCounter++, Bi2 = zi2 = null, Ml = r3, A2.H = i4, A2.A = a3, $ === null && (Nl = null, Pl = 0, U2()), o4;
    }
    function Eu() {
      for (; $ !== null; ) ku($);
    }
    function Du(e3, t3) {
      var n4 = Ml;
      Ml |= 2;
      var r3 = Su(), i4 = Cu();
      Nl !== e3 || Pl !== t3 ? ($l = null, Ql = Ae2() + 500, yu(e3, t3)) : Rl = Je2(e3, t3);
      a: do
        try {
          if (Fl !== 0 && $ !== null) {
            t3 = $;
            var a3 = Il;
            b: switch (Fl) {
              case 1:
                Fl = 0, Il = null, ju(e3, t3, a3, 1);
                break;
              case 2:
              case 9:
                if (ya2(a3)) {
                  Fl = 0, Il = null, Au(t3);
                  break;
                }
                t3 = function() {
                  Fl !== 2 && Fl !== 9 || Nl !== e3 || (Fl = 7), td(e3);
                }, a3.then(t3, t3);
                break a;
              case 3:
                Fl = 7;
                break a;
              case 4:
                Fl = 5;
                break a;
              case 7:
                ya2(a3) ? (Fl = 0, Il = null, Au(t3)) : (Fl = 0, Il = null, ju(e3, t3, a3, 7));
                break;
              case 5:
                var s3 = null;
                switch ($.tag) {
                  case 26:
                    s3 = $.memoizedState;
                  case 5:
                  case 27:
                    var c4 = $;
                    if (s3 ? Wf(s3) : c4.stateNode.complete) {
                      Fl = 0, Il = null;
                      var l4 = c4.sibling;
                      if (l4 !== null) $ = l4;
                      else {
                        var u3 = c4.return;
                        u3 === null ? $ = null : ($ = u3, Mu(u3));
                      }
                      break b;
                    }
                }
                Fl = 0, Il = null, ju(e3, t3, a3, 5);
                break;
              case 6:
                Fl = 0, Il = null, ju(e3, t3, a3, 6);
                break;
              case 8:
                vu(), Vl = 6;
                break a;
              default:
                throw Error(o3(462));
            }
          }
          Ou();
          break;
        } catch (t4) {
          bu(e3, t4);
        }
      while (1);
      return Bi2 = zi2 = null, A2.H = r3, A2.A = i4, Ml = n4, $ === null ? (Nl = null, Pl = 0, U2(), Vl) : 0;
    }
    function Ou() {
      for (; $ !== null && !Oe2(); ) ku($);
    }
    function ku(e3) {
      var t3 = Cc(e3.alternate, e3, Bl);
      e3.memoizedProps = e3.pendingProps, t3 === null ? Mu(e3) : $ = t3;
    }
    function Au(e3) {
      var t3 = e3, n4 = t3.alternate;
      switch (t3.tag) {
        case 15:
        case 0:
          t3 = sc(n4, t3, t3.pendingProps, t3.type, void 0, Pl);
          break;
        case 11:
          t3 = sc(n4, t3, t3.pendingProps, t3.type.render, t3.ref, Pl);
          break;
        case 5:
          Co2(t3);
        default:
          Mc(n4, t3), t3 = $ = oi2(t3, Bl), t3 = Cc(n4, t3, Bl);
      }
      e3.memoizedProps = e3.pendingProps, t3 === null ? Mu(e3) : $ = t3;
    }
    function ju(e3, t3, n4, r3) {
      Bi2 = zi2 = null, Co2(t3), Ta2 = null, Ea2 = 0;
      var i4 = t3.return;
      try {
        if (Ks(e3, i4, t3, n4, Pl)) {
          Vl = 1, Vs(e3, pi2(n4, e3.current)), $ = null;
          return;
        }
      } catch (t4) {
        if (i4 !== null) throw $ = i4, t4;
        Vl = 1, Vs(e3, pi2(n4, e3.current)), $ = null;
        return;
      }
      t3.flags & 32768 ? (K2 || r3 === 1 ? e3 = true : Rl || Pl & 536870912 ? e3 = false : (Ll = e3 = true, (r3 === 2 || r3 === 9 || r3 === 3 || r3 === 6) && (r3 = Xa2.current, r3 !== null && r3.tag === 13 && (r3.flags |= 16384))), Nu(t3, e3)) : Mu(t3);
    }
    function Mu(e3) {
      var t3 = e3;
      do {
        if (t3.flags & 32768) {
          Nu(t3, Ll);
          return;
        }
        e3 = t3.return;
        var n4 = Ac(t3.alternate, t3, Bl);
        if (n4 !== null) {
          $ = n4;
          return;
        }
        if (t3 = t3.sibling, t3 !== null) {
          $ = t3;
          return;
        }
        $ = t3 = e3;
      } while (t3 !== null);
      Vl === 0 && (Vl = 5);
    }
    function Nu(e3, t3) {
      do {
        var n4 = jc(e3.alternate, e3);
        if (n4 !== null) {
          n4.flags &= 32767, $ = n4;
          return;
        }
        if (n4 = e3.return, n4 !== null && (n4.flags |= 32768, n4.subtreeFlags = 0, n4.deletions = null), !t3 && (e3 = e3.sibling, e3 !== null)) {
          $ = e3;
          return;
        }
        $ = e3 = n4;
      } while (e3 !== null);
      Vl = 6, $ = null;
    }
    function Pu(e3, t3, n4, r3, i4, a3, s3, c4, l4) {
      e3.cancelPendingCommit = null;
      do
        zu();
      while (tu !== 0);
      if (Ml & 6) throw Error(o3(327));
      if (t3 !== null) {
        if (t3 === e3.current) throw Error(o3(177));
        if (a3 = t3.lanes | t3.childLanes, a3 |= Yr2, $e2(e3, n4, a3, s3, c4, l4), e3 === Nl && ($ = Nl = null, Pl = 0), ru = t3, nu = e3, iu = n4, au = a3, ou = i4, su = r3, t3.subtreeFlags & 10256 || t3.flags & 10256 ? (e3.callbackNode = null, e3.callbackPriority = 0, Ju(Pe2, function() {
          return Bu(), null;
        })) : (e3.callbackNode = null, e3.callbackPriority = 0), r3 = (t3.flags & 13878) != 0, t3.subtreeFlags & 13878 || r3) {
          r3 = A2.T, A2.T = null, i4 = j2.p, j2.p = 2, s3 = Ml, Ml |= 4;
          try {
            Zc(e3, t3, n4);
          } finally {
            Ml = s3, j2.p = i4, A2.T = r3;
          }
        }
        tu = 1, Fu(), Iu(), Lu();
      }
    }
    function Fu() {
      if (tu === 1) {
        tu = 0;
        var e3 = nu, t3 = ru, n4 = (t3.flags & 13878) != 0;
        if (t3.subtreeFlags & 13878 || n4) {
          n4 = A2.T, A2.T = null;
          var r3 = j2.p;
          j2.p = 2;
          var i4 = Ml;
          Ml |= 4;
          try {
            ul(t3, e3);
            var a3 = zd, o4 = Dr2(e3.containerInfo), s3 = a3.focusedElem, c4 = a3.selectionRange;
            if (o4 !== s3 && s3 && s3.ownerDocument && Er2(s3.ownerDocument.documentElement, s3)) {
              if (c4 !== null && Or2(s3)) {
                var l4 = c4.start, u3 = c4.end;
                if (u3 === void 0 && (u3 = l4), `selectionStart` in s3) s3.selectionStart = l4, s3.selectionEnd = Math.min(u3, s3.value.length);
                else {
                  var d3 = s3.ownerDocument || document, f3 = d3 && d3.defaultView || window;
                  if (f3.getSelection) {
                    var p3 = f3.getSelection(), m3 = s3.textContent.length, h3 = Math.min(c4.start, m3), g3 = c4.end === void 0 ? h3 : Math.min(c4.end, m3);
                    !p3.extend && h3 > g3 && (o4 = g3, g3 = h3, h3 = o4);
                    var _3 = Tr2(s3, h3), v3 = Tr2(s3, g3);
                    if (_3 && v3 && (p3.rangeCount !== 1 || p3.anchorNode !== _3.node || p3.anchorOffset !== _3.offset || p3.focusNode !== v3.node || p3.focusOffset !== v3.offset)) {
                      var y3 = d3.createRange();
                      y3.setStart(_3.node, _3.offset), p3.removeAllRanges(), h3 > g3 ? (p3.addRange(y3), p3.extend(v3.node, v3.offset)) : (y3.setEnd(v3.node, v3.offset), p3.addRange(y3));
                    }
                  }
                }
              }
              for (d3 = [], p3 = s3; p3 = p3.parentNode; ) p3.nodeType === 1 && d3.push({ element: p3, left: p3.scrollLeft, top: p3.scrollTop });
              for (typeof s3.focus == `function` && s3.focus(), s3 = 0; s3 < d3.length; s3++) {
                var b3 = d3[s3];
                b3.element.scrollLeft = b3.left, b3.element.scrollTop = b3.top;
              }
            }
            sp = !!Rd, zd = Rd = null;
          } finally {
            Ml = i4, j2.p = r3, A2.T = n4;
          }
        }
        e3.current = t3, tu = 2;
      }
    }
    function Iu() {
      if (tu === 2) {
        tu = 0;
        var e3 = nu, t3 = ru, n4 = (t3.flags & 8772) != 0;
        if (t3.subtreeFlags & 8772 || n4) {
          n4 = A2.T, A2.T = null;
          var r3 = j2.p;
          j2.p = 2;
          var i4 = Ml;
          Ml |= 4;
          try {
            Qc(e3, t3.alternate, t3);
          } finally {
            Ml = i4, j2.p = r3, A2.T = n4;
          }
        }
        tu = 3;
      }
    }
    function Lu() {
      if (tu === 4 || tu === 3) {
        tu = 0, ke2();
        var e3 = nu, t3 = ru, n4 = iu, r3 = su;
        t3.subtreeFlags & 10256 || t3.flags & 10256 ? tu = 5 : (tu = 0, ru = nu = null, Ru(e3, e3.pendingLanes));
        var i4 = e3.pendingLanes;
        if (i4 === 0 && (eu = null), it2(n4), t3 = t3.stateNode, ze2 && typeof ze2.onCommitFiberRoot == `function`) try {
          ze2.onCommitFiberRoot(Re2, t3, void 0, (t3.current.flags & 128) == 128);
        } catch {
        }
        if (r3 !== null) {
          t3 = A2.T, i4 = j2.p, j2.p = 2, A2.T = null;
          try {
            for (var a3 = e3.onRecoverableError, o4 = 0; o4 < r3.length; o4++) {
              var s3 = r3[o4];
              a3(s3.value, { componentStack: s3.stack });
            }
          } finally {
            A2.T = t3, j2.p = i4;
          }
        }
        iu & 3 && zu(), td(e3), i4 = e3.pendingLanes, n4 & 261930 && i4 & 42 ? e3 === lu ? cu++ : (cu = 0, lu = e3) : cu = 0, nd(0, false);
      }
    }
    function Ru(e3, t3) {
      (e3.pooledCacheLanes &= t3) === 0 && (t3 = e3.pooledCache, t3 != null && (e3.pooledCache = null, na2(t3)));
    }
    function zu() {
      return Fu(), Iu(), Lu(), Bu();
    }
    function Bu() {
      if (tu !== 5) return false;
      var e3 = nu, t3 = au;
      au = 0;
      var n4 = it2(iu), r3 = A2.T, i4 = j2.p;
      try {
        j2.p = 32 > n4 ? 32 : n4, A2.T = null, n4 = ou, ou = null;
        var a3 = nu, s3 = iu;
        if (tu = 0, ru = nu = null, iu = 0, Ml & 6) throw Error(o3(331));
        var c4 = Ml;
        if (Ml |= 4, Dl(a3.current), yl(a3, a3.current, s3, n4), Ml = c4, nd(0, false), ze2 && typeof ze2.onPostCommitFiberRoot == `function`) try {
          ze2.onPostCommitFiberRoot(Re2, a3);
        } catch {
        }
        return true;
      } finally {
        j2.p = i4, A2.T = r3, Ru(e3, t3);
      }
    }
    function Vu(e3, t3, n4) {
      t3 = pi2(n4, t3), t3 = Us(e3.stateNode, t3, 2), e3 = La2(e3, t3, 2), e3 !== null && (Qe2(e3, 2), td(e3));
    }
    function Hu(e3, t3, n4) {
      if (e3.tag === 3) Vu(e3, e3, n4);
      else for (; t3 !== null; ) {
        if (t3.tag === 3) {
          Vu(t3, e3, n4);
          break;
        } else if (t3.tag === 1) {
          var r3 = t3.stateNode;
          if (typeof t3.type.getDerivedStateFromError == `function` || typeof r3.componentDidCatch == `function` && (eu === null || !eu.has(r3))) {
            e3 = pi2(n4, e3), n4 = Ws(2), r3 = La2(t3, n4, 2), r3 !== null && (Gs(n4, r3, t3, e3), Qe2(r3, 2), td(r3));
            break;
          }
        }
        t3 = t3.return;
      }
    }
    function Uu(e3, t3, n4) {
      var r3 = e3.pingCache;
      if (r3 === null) {
        r3 = e3.pingCache = new jl();
        var i4 = /* @__PURE__ */ new Set();
        r3.set(t3, i4);
      } else i4 = r3.get(t3), i4 === void 0 && (i4 = /* @__PURE__ */ new Set(), r3.set(t3, i4));
      i4.has(n4) || (zl = true, i4.add(n4), e3 = Wu.bind(null, e3, t3, n4), t3.then(e3, e3));
    }
    function Wu(e3, t3, n4) {
      var r3 = e3.pingCache;
      r3 !== null && r3.delete(t3), e3.pingedLanes |= e3.suspendedLanes & n4, e3.warmLanes &= ~n4, Nl === e3 && (Pl & n4) === n4 && (Vl === 4 || Vl === 3 && (Pl & 62914560) === Pl && 300 > Ae2() - Xl ? !(Ml & 2) && yu(e3, 0) : Wl |= n4, Kl === Pl && (Kl = 0)), td(e3);
    }
    function Gu(e3, t3) {
      t3 === 0 && (t3 = Xe2()), e3 = Qr2(e3, t3), e3 !== null && (Qe2(e3, t3), td(e3));
    }
    function Ku(e3) {
      var t3 = e3.memoizedState, n4 = 0;
      t3 !== null && (n4 = t3.retryLane), Gu(e3, n4);
    }
    function qu(e3, t3) {
      var n4 = 0;
      switch (e3.tag) {
        case 31:
        case 13:
          var r3 = e3.stateNode, i4 = e3.memoizedState;
          i4 !== null && (n4 = i4.retryLane);
          break;
        case 19:
          r3 = e3.stateNode;
          break;
        case 22:
          r3 = e3.stateNode._retryCache;
          break;
        default:
          throw Error(o3(314));
      }
      r3 !== null && r3.delete(t3), Gu(e3, n4);
    }
    function Ju(e3, t3) {
      return Ee2(e3, t3);
    }
    var Yu = null, Xu = null, Zu = false, Qu = false, $u = false, ed = 0;
    function td(e3) {
      e3 !== Xu && e3.next === null && (Xu === null ? Yu = Xu = e3 : Xu = Xu.next = e3), Qu = true, Zu || (Zu = true, cd());
    }
    function nd(e3, t3) {
      if (!$u && Qu) {
        $u = true;
        do
          for (var n4 = false, r3 = Yu; r3 !== null; ) {
            if (!t3) if (e3 !== 0) {
              var i4 = r3.pendingLanes;
              if (i4 === 0) var a3 = 0;
              else {
                var o4 = r3.suspendedLanes, s3 = r3.pingedLanes;
                a3 = (1 << 31 - Be2(42 | e3) + 1) - 1, a3 &= i4 & ~(o4 & ~s3), a3 = a3 & 201326741 ? a3 & 201326741 | 1 : a3 ? a3 | 2 : 0;
              }
              a3 !== 0 && (n4 = true, sd(r3, a3));
            } else a3 = Pl, a3 = qe2(r3, r3 === Nl ? a3 : 0, r3.cancelPendingCommit !== null || r3.timeoutHandle !== -1), !(a3 & 3) || Je2(r3, a3) || (n4 = true, sd(r3, a3));
            r3 = r3.next;
          }
        while (n4);
        $u = false;
      }
    }
    function rd() {
      id();
    }
    function id() {
      Qu = Zu = false;
      var e3 = 0;
      ed !== 0 && Gd() && (e3 = ed);
      for (var t3 = Ae2(), n4 = null, r3 = Yu; r3 !== null; ) {
        var i4 = r3.next, a3 = ad(r3, t3);
        a3 === 0 ? (r3.next = null, n4 === null ? Yu = i4 : n4.next = i4, i4 === null && (Xu = n4)) : (n4 = r3, (e3 !== 0 || a3 & 3) && (Qu = true)), r3 = i4;
      }
      tu !== 0 && tu !== 5 || nd(e3, false), ed !== 0 && (ed = 0);
    }
    function ad(e3, t3) {
      for (var n4 = e3.suspendedLanes, r3 = e3.pingedLanes, i4 = e3.expirationTimes, a3 = e3.pendingLanes & -62914561; 0 < a3; ) {
        var o4 = 31 - Be2(a3), s3 = 1 << o4, c4 = i4[o4];
        c4 === -1 ? ((s3 & n4) === 0 || (s3 & r3) !== 0) && (i4[o4] = Ye2(s3, t3)) : c4 <= t3 && (e3.expiredLanes |= s3), a3 &= ~s3;
      }
      if (t3 = Nl, n4 = Pl, n4 = qe2(e3, e3 === t3 ? n4 : 0, e3.cancelPendingCommit !== null || e3.timeoutHandle !== -1), r3 = e3.callbackNode, n4 === 0 || e3 === t3 && (Fl === 2 || Fl === 9) || e3.cancelPendingCommit !== null) return r3 !== null && r3 !== null && De2(r3), e3.callbackNode = null, e3.callbackPriority = 0;
      if (!(n4 & 3) || Je2(e3, n4)) {
        if (t3 = n4 & -n4, t3 === e3.callbackPriority) return t3;
        switch (r3 !== null && De2(r3), it2(n4)) {
          case 2:
          case 8:
            n4 = Ne2;
            break;
          case 32:
            n4 = Pe2;
            break;
          case 268435456:
            n4 = Ie2;
            break;
          default:
            n4 = Pe2;
        }
        return r3 = od.bind(null, e3), n4 = Ee2(n4, r3), e3.callbackPriority = t3, e3.callbackNode = n4, t3;
      }
      return r3 !== null && r3 !== null && De2(r3), e3.callbackPriority = 2, e3.callbackNode = null, 2;
    }
    function od(e3, t3) {
      if (tu !== 0 && tu !== 5) return e3.callbackNode = null, e3.callbackPriority = 0, null;
      var n4 = e3.callbackNode;
      if (zu() && e3.callbackNode !== n4) return null;
      var r3 = Pl;
      return r3 = qe2(e3, e3 === Nl ? r3 : 0, e3.cancelPendingCommit !== null || e3.timeoutHandle !== -1), r3 === 0 ? null : (pu(e3, r3, t3), ad(e3, Ae2()), e3.callbackNode != null && e3.callbackNode === n4 ? od.bind(null, e3) : null);
    }
    function sd(e3, t3) {
      if (zu()) return null;
      pu(e3, t3, true);
    }
    function cd() {
      Yd(function() {
        Ml & 6 ? Ee2(Me2, rd) : id();
      });
    }
    function ld() {
      if (ed === 0) {
        var e3 = aa2;
        e3 === 0 && (e3 = Ue2, Ue2 <<= 1, !(Ue2 & 261888) && (Ue2 = 256)), ed = e3;
      }
      return ed;
    }
    function ud(e3) {
      return e3 == null || typeof e3 == `symbol` || typeof e3 == `boolean` ? null : typeof e3 == `function` ? e3 : $t2(`` + e3);
    }
    function dd(e3, t3) {
      var n4 = t3.ownerDocument.createElement(`input`);
      return n4.name = t3.name, n4.value = t3.value, e3.id && n4.setAttribute(`form`, e3.id), t3.parentNode.insertBefore(n4, t3), e3 = new FormData(e3), n4.parentNode.removeChild(n4), e3;
    }
    function fd(e3, t3, n4, r3, i4) {
      if (t3 === `submit` && n4 && n4.stateNode === i4) {
        var a3 = ud((i4[lt2] || null).action), o4 = r3.submitter;
        o4 && (t3 = (t3 = o4[lt2] || null) ? ud(t3.formAction) : o4.getAttribute(`formAction`), t3 !== null && (a3 = t3, o4 = null));
        var s3 = new Sn2(`action`, `action`, null, r3, i4);
        e3.push({ event: s3, listeners: [{ instance: null, listener: function() {
          if (r3.defaultPrevented) {
            if (ed !== 0) {
              var e4 = o4 ? dd(i4, o4) : new FormData(i4);
              hs2(n4, { pending: true, data: e4, method: i4.method, action: a3 }, null, e4);
            }
          } else typeof a3 == `function` && (s3.preventDefault(), e4 = o4 ? dd(i4, o4) : new FormData(i4), hs2(n4, { pending: true, data: e4, method: i4.method, action: a3 }, a3, e4));
        }, currentTarget: i4 }] });
      }
    }
    for (var pd = 0; pd < Kr2.length; pd++) {
      var md = Kr2[pd];
      qr2(md.toLowerCase(), `on` + (md[0].toUpperCase() + md.slice(1)));
    }
    qr2(Rr2, `onAnimationEnd`), qr2(zr2, `onAnimationIteration`), qr2(Br2, `onAnimationStart`), qr2(`dblclick`, `onDoubleClick`), qr2(`focusin`, `onFocus`), qr2(`focusout`, `onBlur`), qr2(Vr2, `onTransitionRun`), qr2(Hr2, `onTransitionStart`), qr2(Ur2, `onTransitionCancel`), qr2(Wr2, `onTransitionEnd`), wt2(`onMouseEnter`, [`mouseout`, `mouseover`]), wt2(`onMouseLeave`, [`mouseout`, `mouseover`]), wt2(`onPointerEnter`, [`pointerout`, `pointerover`]), wt2(`onPointerLeave`, [`pointerout`, `pointerover`]), L2(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), L2(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), L2(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), L2(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), L2(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), L2(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
    var hd = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `), gd = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(hd));
    function _d(e3, t3) {
      t3 = (t3 & 4) != 0;
      for (var n4 = 0; n4 < e3.length; n4++) {
        var r3 = e3[n4], i4 = r3.event;
        r3 = r3.listeners;
        a: {
          var a3 = void 0;
          if (t3) for (var o4 = r3.length - 1; 0 <= o4; o4--) {
            var s3 = r3[o4], c4 = s3.instance, l4 = s3.currentTarget;
            if (s3 = s3.listener, c4 !== a3 && i4.isPropagationStopped()) break a;
            a3 = s3, i4.currentTarget = l4;
            try {
              a3(i4);
            } catch (e4) {
              V2(e4);
            }
            i4.currentTarget = null, a3 = c4;
          }
          else for (o4 = 0; o4 < r3.length; o4++) {
            if (s3 = r3[o4], c4 = s3.instance, l4 = s3.currentTarget, s3 = s3.listener, c4 !== a3 && i4.isPropagationStopped()) break a;
            a3 = s3, i4.currentTarget = l4;
            try {
              a3(i4);
            } catch (e4) {
              V2(e4);
            }
            i4.currentTarget = null, a3 = c4;
          }
        }
      }
    }
    function vd(e3, t3) {
      var n4 = t3[dt2];
      n4 === void 0 && (n4 = t3[dt2] = /* @__PURE__ */ new Set());
      var r3 = e3 + `__bubble`;
      n4.has(r3) || (Sd(t3, e3, 2, false), n4.add(r3));
    }
    function yd(e3, t3, n4) {
      var r3 = 0;
      t3 && (r3 |= 4), Sd(n4, e3, r3, t3);
    }
    var bd = `_reactListening` + Math.random().toString(36).slice(2);
    function xd(e3) {
      if (!e3[bd]) {
        e3[bd] = true, St2.forEach(function(t4) {
          t4 !== `selectionchange` && (gd.has(t4) || yd(t4, false, e3), yd(t4, true, e3));
        });
        var t3 = e3.nodeType === 9 ? e3 : e3.ownerDocument;
        t3 === null || t3[bd] || (t3[bd] = true, yd(`selectionchange`, false, t3));
      }
    }
    function Sd(e3, t3, n4, r3) {
      switch (mp(t3)) {
        case 2:
          var i4 = cp;
          break;
        case 8:
          i4 = lp;
          break;
        default:
          i4 = up;
      }
      n4 = i4.bind(null, t3, n4, e3), i4 = void 0, !dn2 || t3 !== `touchstart` && t3 !== `touchmove` && t3 !== `wheel` || (i4 = true), r3 ? i4 === void 0 ? e3.addEventListener(t3, n4, true) : e3.addEventListener(t3, n4, { capture: true, passive: i4 }) : i4 === void 0 ? e3.addEventListener(t3, n4, false) : e3.addEventListener(t3, n4, { passive: i4 });
    }
    function Cd(e3, t3, n4, r3, i4) {
      var a3 = r3;
      if (!(t3 & 1) && !(t3 & 2) && r3 !== null) a: for (; ; ) {
        if (r3 === null) return;
        var o4 = r3.tag;
        if (o4 === 3 || o4 === 4) {
          var s3 = r3.stateNode.containerInfo;
          if (s3 === i4) break;
          if (o4 === 4) for (o4 = r3.return; o4 !== null; ) {
            var c4 = o4.tag;
            if ((c4 === 3 || c4 === 4) && o4.stateNode.containerInfo === i4) return;
            o4 = o4.return;
          }
          for (; s3 !== null; ) {
            if (o4 = _t2(s3), o4 === null) return;
            if (c4 = o4.tag, c4 === 5 || c4 === 6 || c4 === 26 || c4 === 27) {
              r3 = a3 = o4;
              continue a;
            }
            s3 = s3.parentNode;
          }
        }
        r3 = r3.return;
      }
      cn2(function() {
        var r4 = a3, i5 = nn2(n4), o5 = [];
        a: {
          var s4 = Gr2.get(e3);
          if (s4 !== void 0) {
            var c5 = Sn2, u3 = e3;
            switch (e3) {
              case `keypress`:
                if (_n2(n4) === 0) break a;
              case `keydown`:
              case `keyup`:
                c5 = zn2;
                break;
              case `focusin`:
                u3 = `focus`, c5 = jn2;
                break;
              case `focusout`:
                u3 = `blur`, c5 = jn2;
                break;
              case `beforeblur`:
              case `afterblur`:
                c5 = jn2;
                break;
              case `click`:
                if (n4.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                c5 = kn2;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                c5 = An2;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                c5 = Vn2;
                break;
              case Rr2:
              case zr2:
              case Br2:
                c5 = Mn2;
                break;
              case Wr2:
                c5 = Hn2;
                break;
              case `scroll`:
              case `scrollend`:
                c5 = wn2;
                break;
              case `wheel`:
                c5 = Un2;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                c5 = Nn2;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                c5 = Bn2;
                break;
              case `toggle`:
              case `beforetoggle`:
                c5 = Wn2;
            }
            var d3 = (t3 & 4) != 0, f3 = !d3 && (e3 === `scroll` || e3 === `scrollend`), p3 = d3 ? s4 === null ? null : s4 + `Capture` : s4;
            d3 = [];
            for (var m3 = r4, h3; m3 !== null; ) {
              var g3 = m3;
              if (h3 = g3.stateNode, g3 = g3.tag, g3 !== 5 && g3 !== 26 && g3 !== 27 || h3 === null || p3 === null || (g3 = ln2(m3, p3), g3 != null && d3.push(wd(m3, g3, h3))), f3) break;
              m3 = m3.return;
            }
            0 < d3.length && (s4 = new c5(s4, u3, null, n4, i5), o5.push({ event: s4, listeners: d3 }));
          }
        }
        if (!(t3 & 7)) {
          a: {
            if (s4 = e3 === `mouseover` || e3 === `pointerover`, c5 = e3 === `mouseout` || e3 === `pointerout`, s4 && n4 !== tn2 && (u3 = n4.relatedTarget || n4.fromElement) && (_t2(u3) || u3[ut2])) break a;
            if ((c5 || s4) && (s4 = i5.window === i5 ? i5 : (s4 = i5.ownerDocument) ? s4.defaultView || s4.parentWindow : window, c5 ? (u3 = n4.relatedTarget || n4.toElement, c5 = r4, u3 = u3 ? _t2(u3) : null, u3 !== null && (f3 = l3(u3), d3 = u3.tag, u3 !== f3 || d3 !== 5 && d3 !== 27 && d3 !== 6) && (u3 = null)) : (c5 = null, u3 = r4), c5 !== u3)) {
              if (d3 = kn2, g3 = `onMouseLeave`, p3 = `onMouseEnter`, m3 = `mouse`, (e3 === `pointerout` || e3 === `pointerover`) && (d3 = Bn2, g3 = `onPointerLeave`, p3 = `onPointerEnter`, m3 = `pointer`), f3 = c5 == null ? s4 : yt2(c5), h3 = u3 == null ? s4 : yt2(u3), s4 = new d3(g3, m3 + `leave`, c5, n4, i5), s4.target = f3, s4.relatedTarget = h3, g3 = null, _t2(i5) === r4 && (d3 = new d3(p3, m3 + `enter`, u3, n4, i5), d3.target = h3, d3.relatedTarget = f3, g3 = d3), f3 = g3, c5 && u3) b: {
                for (d3 = Ed, p3 = c5, m3 = u3, h3 = 0, g3 = p3; g3; g3 = d3(g3)) h3++;
                g3 = 0;
                for (var _3 = m3; _3; _3 = d3(_3)) g3++;
                for (; 0 < h3 - g3; ) p3 = d3(p3), h3--;
                for (; 0 < g3 - h3; ) m3 = d3(m3), g3--;
                for (; h3--; ) {
                  if (p3 === m3 || m3 !== null && p3 === m3.alternate) {
                    d3 = p3;
                    break b;
                  }
                  p3 = d3(p3), m3 = d3(m3);
                }
                d3 = null;
              }
              else d3 = null;
              c5 !== null && Dd(o5, s4, c5, d3, false), u3 !== null && f3 !== null && Dd(o5, f3, u3, d3, true);
            }
          }
          a: {
            if (s4 = r4 ? yt2(r4) : window, c5 = s4.nodeName && s4.nodeName.toLowerCase(), c5 === `select` || c5 === `input` && s4.type === `file`) var v3 = ur2;
            else if (ir2(s4)) if (dr2) v3 = br2;
            else {
              v3 = vr2;
              var y3 = _r2;
            }
            else c5 = s4.nodeName, !c5 || c5.toLowerCase() !== `input` || s4.type !== `checkbox` && s4.type !== `radio` ? r4 && Xt2(r4.elementType) && (v3 = ur2) : v3 = yr2;
            if (v3 &&= v3(e3, r4)) {
              ar2(o5, v3, n4, i5);
              break a;
            }
            y3 && y3(e3, s4, r4), e3 === `focusout` && r4 && s4.type === `number` && r4.memoizedProps.value != null && Ht2(s4, `number`, s4.value);
          }
          switch (y3 = r4 ? yt2(r4) : window, e3) {
            case `focusin`:
              (ir2(y3) || y3.contentEditable === `true`) && (z2 = y3, Ar2 = r4, jr2 = null);
              break;
            case `focusout`:
              jr2 = Ar2 = z2 = null;
              break;
            case `mousedown`:
              B2 = true;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              B2 = false, Mr2(o5, n4, i5);
              break;
            case `selectionchange`:
              if (kr2) break;
            case `keydown`:
            case `keyup`:
              Mr2(o5, n4, i5);
          }
          var b3;
          if (Kn2) b: {
            switch (e3) {
              case `compositionstart`:
                var x3 = `onCompositionStart`;
                break b;
              case `compositionend`:
                x3 = `onCompositionEnd`;
                break b;
              case `compositionupdate`:
                x3 = `onCompositionUpdate`;
                break b;
            }
            x3 = void 0;
          }
          else er2 ? Qn2(e3, n4) && (x3 = `onCompositionEnd`) : e3 === `keydown` && n4.keyCode === 229 && (x3 = `onCompositionStart`);
          x3 && (Yn2 && n4.locale !== `ko` && (er2 || x3 !== `onCompositionStart` ? x3 === `onCompositionEnd` && er2 && (b3 = gn2()) : (pn2 = i5, mn2 = `value` in pn2 ? pn2.value : pn2.textContent, er2 = true)), y3 = Td(r4, x3), 0 < y3.length && (x3 = new Pn2(x3, e3, null, n4, i5), o5.push({ event: x3, listeners: y3 }), b3 ? x3.data = b3 : (b3 = $n2(n4), b3 !== null && (x3.data = b3)))), (b3 = Jn2 ? tr2(e3, n4) : nr2(e3, n4)) && (x3 = Td(r4, `onBeforeInput`), 0 < x3.length && (y3 = new Pn2(`onBeforeInput`, `beforeinput`, null, n4, i5), o5.push({ event: y3, listeners: x3 }), y3.data = b3)), fd(o5, e3, r4, n4, i5);
        }
        _d(o5, t3);
      });
    }
    function wd(e3, t3, n4) {
      return { instance: e3, listener: t3, currentTarget: n4 };
    }
    function Td(e3, t3) {
      for (var n4 = t3 + `Capture`, r3 = []; e3 !== null; ) {
        var i4 = e3, a3 = i4.stateNode;
        if (i4 = i4.tag, i4 !== 5 && i4 !== 26 && i4 !== 27 || a3 === null || (i4 = ln2(e3, n4), i4 != null && r3.unshift(wd(e3, i4, a3)), i4 = ln2(e3, t3), i4 != null && r3.push(wd(e3, i4, a3))), e3.tag === 3) return r3;
        e3 = e3.return;
      }
      return [];
    }
    function Ed(e3) {
      if (e3 === null) return null;
      do
        e3 = e3.return;
      while (e3 && e3.tag !== 5 && e3.tag !== 27);
      return e3 || null;
    }
    function Dd(e3, t3, n4, r3, i4) {
      for (var a3 = t3._reactName, o4 = []; n4 !== null && n4 !== r3; ) {
        var s3 = n4, c4 = s3.alternate, l4 = s3.stateNode;
        if (s3 = s3.tag, c4 !== null && c4 === r3) break;
        s3 !== 5 && s3 !== 26 && s3 !== 27 || l4 === null || (c4 = l4, i4 ? (l4 = ln2(n4, a3), l4 != null && o4.unshift(wd(n4, l4, c4))) : i4 || (l4 = ln2(n4, a3), l4 != null && o4.push(wd(n4, l4, c4)))), n4 = n4.return;
      }
      o4.length !== 0 && e3.push({ event: t3, listeners: o4 });
    }
    var Od = /\r\n?/g, kd = /\u0000|�/g;
    function Ad(e3) {
      return (typeof e3 == `string` ? e3 : `` + e3).replace(Od, `
`).replace(kd, ``);
    }
    function jd(e3, t3) {
      return t3 = Ad(t3), Ad(e3) === t3;
    }
    function Md(e3, t3, n4, r3, i4, a3) {
      switch (n4) {
        case `children`:
          typeof r3 == `string` ? t3 === `body` || t3 === `textarea` && r3 === `` || Kt2(e3, r3) : (typeof r3 == `number` || typeof r3 == `bigint`) && t3 !== `body` && Kt2(e3, `` + r3);
          break;
        case `className`:
          At2(e3, `class`, r3);
          break;
        case `tabIndex`:
          At2(e3, `tabindex`, r3);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          At2(e3, n4, r3);
          break;
        case `style`:
          Yt2(e3, r3, a3);
          break;
        case `data`:
          if (t3 !== `object`) {
            At2(e3, `data`, r3);
            break;
          }
        case `src`:
        case `href`:
          if (r3 === `` && (t3 !== `a` || n4 !== `href`)) {
            e3.removeAttribute(n4);
            break;
          }
          if (r3 == null || typeof r3 == `function` || typeof r3 == `symbol` || typeof r3 == `boolean`) {
            e3.removeAttribute(n4);
            break;
          }
          r3 = $t2(`` + r3), e3.setAttribute(n4, r3);
          break;
        case `action`:
        case `formAction`:
          if (typeof r3 == `function`) {
            e3.setAttribute(n4, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
            break;
          } else typeof a3 == `function` && (n4 === `formAction` ? (t3 !== `input` && Md(e3, t3, `name`, i4.name, i4, null), Md(e3, t3, `formEncType`, i4.formEncType, i4, null), Md(e3, t3, `formMethod`, i4.formMethod, i4, null), Md(e3, t3, `formTarget`, i4.formTarget, i4, null)) : (Md(e3, t3, `encType`, i4.encType, i4, null), Md(e3, t3, `method`, i4.method, i4, null), Md(e3, t3, `target`, i4.target, i4, null)));
          if (r3 == null || typeof r3 == `symbol` || typeof r3 == `boolean`) {
            e3.removeAttribute(n4);
            break;
          }
          r3 = $t2(`` + r3), e3.setAttribute(n4, r3);
          break;
        case `onClick`:
          r3 != null && (e3.onclick = en2);
          break;
        case `onScroll`:
          r3 != null && vd(`scroll`, e3);
          break;
        case `onScrollEnd`:
          r3 != null && vd(`scrollend`, e3);
          break;
        case `dangerouslySetInnerHTML`:
          if (r3 != null) {
            if (typeof r3 != `object` || !(`__html` in r3)) throw Error(o3(61));
            if (n4 = r3.__html, n4 != null) {
              if (i4.children != null) throw Error(o3(60));
              e3.innerHTML = n4;
            }
          }
          break;
        case `multiple`:
          e3.multiple = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
          break;
        case `muted`:
          e3.muted = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (r3 == null || typeof r3 == `function` || typeof r3 == `boolean` || typeof r3 == `symbol`) {
            e3.removeAttribute(`xlink:href`);
            break;
          }
          n4 = $t2(`` + r3), e3.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n4);
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r3 != null && typeof r3 != `function` && typeof r3 != `symbol` ? e3.setAttribute(n4, `` + r3) : e3.removeAttribute(n4);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r3 && typeof r3 != `function` && typeof r3 != `symbol` ? e3.setAttribute(n4, ``) : e3.removeAttribute(n4);
          break;
        case `capture`:
        case `download`:
          true === r3 ? e3.setAttribute(n4, ``) : false !== r3 && r3 != null && typeof r3 != `function` && typeof r3 != `symbol` ? e3.setAttribute(n4, r3) : e3.removeAttribute(n4);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r3 != null && typeof r3 != `function` && typeof r3 != `symbol` && !isNaN(r3) && 1 <= r3 ? e3.setAttribute(n4, r3) : e3.removeAttribute(n4);
          break;
        case `rowSpan`:
        case `start`:
          r3 == null || typeof r3 == `function` || typeof r3 == `symbol` || isNaN(r3) ? e3.removeAttribute(n4) : e3.setAttribute(n4, r3);
          break;
        case `popover`:
          vd(`beforetoggle`, e3), vd(`toggle`, e3), kt2(e3, `popover`, r3);
          break;
        case `xlinkActuate`:
          jt2(e3, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r3);
          break;
        case `xlinkArcrole`:
          jt2(e3, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r3);
          break;
        case `xlinkRole`:
          jt2(e3, `http://www.w3.org/1999/xlink`, `xlink:role`, r3);
          break;
        case `xlinkShow`:
          jt2(e3, `http://www.w3.org/1999/xlink`, `xlink:show`, r3);
          break;
        case `xlinkTitle`:
          jt2(e3, `http://www.w3.org/1999/xlink`, `xlink:title`, r3);
          break;
        case `xlinkType`:
          jt2(e3, `http://www.w3.org/1999/xlink`, `xlink:type`, r3);
          break;
        case `xmlBase`:
          jt2(e3, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r3);
          break;
        case `xmlLang`:
          jt2(e3, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r3);
          break;
        case `xmlSpace`:
          jt2(e3, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r3);
          break;
        case `is`:
          kt2(e3, `is`, r3);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n4.length) || n4[0] !== `o` && n4[0] !== `O` || n4[1] !== `n` && n4[1] !== `N`) && (n4 = Zt2.get(n4) || n4, kt2(e3, n4, r3));
      }
    }
    function Nd(e3, t3, n4, r3, i4, a3) {
      switch (n4) {
        case `style`:
          Yt2(e3, r3, a3);
          break;
        case `dangerouslySetInnerHTML`:
          if (r3 != null) {
            if (typeof r3 != `object` || !(`__html` in r3)) throw Error(o3(61));
            if (n4 = r3.__html, n4 != null) {
              if (i4.children != null) throw Error(o3(60));
              e3.innerHTML = n4;
            }
          }
          break;
        case `children`:
          typeof r3 == `string` ? Kt2(e3, r3) : (typeof r3 == `number` || typeof r3 == `bigint`) && Kt2(e3, `` + r3);
          break;
        case `onScroll`:
          r3 != null && vd(`scroll`, e3);
          break;
        case `onScrollEnd`:
          r3 != null && vd(`scrollend`, e3);
          break;
        case `onClick`:
          r3 != null && (e3.onclick = en2);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!Ct2.hasOwnProperty(n4)) a: {
            if (n4[0] === `o` && n4[1] === `n` && (i4 = n4.endsWith(`Capture`), t3 = n4.slice(2, i4 ? n4.length - 7 : void 0), a3 = e3[lt2] || null, a3 = a3 == null ? null : a3[n4], typeof a3 == `function` && e3.removeEventListener(t3, a3, i4), typeof r3 == `function`)) {
              typeof a3 != `function` && a3 !== null && (n4 in e3 ? e3[n4] = null : e3.hasAttribute(n4) && e3.removeAttribute(n4)), e3.addEventListener(t3, r3, i4);
              break a;
            }
            n4 in e3 ? e3[n4] = r3 : true === r3 ? e3.setAttribute(n4, ``) : kt2(e3, n4, r3);
          }
      }
    }
    function Pd(e3, t3, n4) {
      switch (t3) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          vd(`error`, e3), vd(`load`, e3);
          var r3 = false, i4 = false, a3;
          for (a3 in n4) if (n4.hasOwnProperty(a3)) {
            var s3 = n4[a3];
            if (s3 != null) switch (a3) {
              case `src`:
                r3 = true;
                break;
              case `srcSet`:
                i4 = true;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                throw Error(o3(137, t3));
              default:
                Md(e3, t3, a3, s3, n4, null);
            }
          }
          i4 && Md(e3, t3, `srcSet`, n4.srcSet, n4, null), r3 && Md(e3, t3, `src`, n4.src, n4, null);
          return;
        case `input`:
          vd(`invalid`, e3);
          var c4 = a3 = s3 = i4 = null, l4 = null, u3 = null;
          for (r3 in n4) if (n4.hasOwnProperty(r3)) {
            var d3 = n4[r3];
            if (d3 != null) switch (r3) {
              case `name`:
                i4 = d3;
                break;
              case `type`:
                s3 = d3;
                break;
              case `checked`:
                l4 = d3;
                break;
              case `defaultChecked`:
                u3 = d3;
                break;
              case `value`:
                a3 = d3;
                break;
              case `defaultValue`:
                c4 = d3;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (d3 != null) throw Error(o3(137, t3));
                break;
              default:
                Md(e3, t3, r3, d3, n4, null);
            }
          }
          Vt2(e3, a3, c4, l4, u3, s3, i4, false);
          return;
        case `select`:
          for (i4 in vd(`invalid`, e3), r3 = s3 = a3 = null, n4) if (n4.hasOwnProperty(i4) && (c4 = n4[i4], c4 != null)) switch (i4) {
            case `value`:
              a3 = c4;
              break;
            case `defaultValue`:
              s3 = c4;
              break;
            case `multiple`:
              r3 = c4;
            default:
              Md(e3, t3, i4, c4, n4, null);
          }
          t3 = a3, n4 = s3, e3.multiple = !!r3, t3 == null ? n4 != null && Ut2(e3, !!r3, n4, true) : Ut2(e3, !!r3, t3, false);
          return;
        case `textarea`:
          for (s3 in vd(`invalid`, e3), a3 = i4 = r3 = null, n4) if (n4.hasOwnProperty(s3) && (c4 = n4[s3], c4 != null)) switch (s3) {
            case `value`:
              r3 = c4;
              break;
            case `defaultValue`:
              i4 = c4;
              break;
            case `children`:
              a3 = c4;
              break;
            case `dangerouslySetInnerHTML`:
              if (c4 != null) throw Error(o3(91));
              break;
            default:
              Md(e3, t3, s3, c4, n4, null);
          }
          Gt2(e3, r3, i4, a3);
          return;
        case `option`:
          for (l4 in n4) if (n4.hasOwnProperty(l4) && (r3 = n4[l4], r3 != null)) switch (l4) {
            case `selected`:
              e3.selected = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
              break;
            default:
              Md(e3, t3, l4, r3, n4, null);
          }
          return;
        case `dialog`:
          vd(`beforetoggle`, e3), vd(`toggle`, e3), vd(`cancel`, e3), vd(`close`, e3);
          break;
        case `iframe`:
        case `object`:
          vd(`load`, e3);
          break;
        case `video`:
        case `audio`:
          for (r3 = 0; r3 < hd.length; r3++) vd(hd[r3], e3);
          break;
        case `image`:
          vd(`error`, e3), vd(`load`, e3);
          break;
        case `details`:
          vd(`toggle`, e3);
          break;
        case `embed`:
        case `source`:
        case `link`:
          vd(`error`, e3), vd(`load`, e3);
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u3 in n4) if (n4.hasOwnProperty(u3) && (r3 = n4[u3], r3 != null)) switch (u3) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(o3(137, t3));
            default:
              Md(e3, t3, u3, r3, n4, null);
          }
          return;
        default:
          if (Xt2(t3)) {
            for (d3 in n4) n4.hasOwnProperty(d3) && (r3 = n4[d3], r3 !== void 0 && Nd(e3, t3, d3, r3, n4, void 0));
            return;
          }
      }
      for (c4 in n4) n4.hasOwnProperty(c4) && (r3 = n4[c4], r3 != null && Md(e3, t3, c4, r3, n4, null));
    }
    function Fd(e3, t3, n4, r3) {
      switch (t3) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var i4 = null, a3 = null, s3 = null, c4 = null, l4 = null, u3 = null, d3 = null;
          for (m3 in n4) {
            var f3 = n4[m3];
            if (n4.hasOwnProperty(m3) && f3 != null) switch (m3) {
              case `checked`:
                break;
              case `value`:
                break;
              case `defaultValue`:
                l4 = f3;
              default:
                r3.hasOwnProperty(m3) || Md(e3, t3, m3, null, r3, f3);
            }
          }
          for (var p3 in r3) {
            var m3 = r3[p3];
            if (f3 = n4[p3], r3.hasOwnProperty(p3) && (m3 != null || f3 != null)) switch (p3) {
              case `type`:
                a3 = m3;
                break;
              case `name`:
                i4 = m3;
                break;
              case `checked`:
                u3 = m3;
                break;
              case `defaultChecked`:
                d3 = m3;
                break;
              case `value`:
                s3 = m3;
                break;
              case `defaultValue`:
                c4 = m3;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (m3 != null) throw Error(o3(137, t3));
                break;
              default:
                m3 !== f3 && Md(e3, t3, p3, m3, r3, f3);
            }
          }
          Bt2(e3, s3, c4, l4, u3, d3, a3, i4);
          return;
        case `select`:
          for (a3 in m3 = s3 = c4 = p3 = null, n4) if (l4 = n4[a3], n4.hasOwnProperty(a3) && l4 != null) switch (a3) {
            case `value`:
              break;
            case `multiple`:
              m3 = l4;
            default:
              r3.hasOwnProperty(a3) || Md(e3, t3, a3, null, r3, l4);
          }
          for (i4 in r3) if (a3 = r3[i4], l4 = n4[i4], r3.hasOwnProperty(i4) && (a3 != null || l4 != null)) switch (i4) {
            case `value`:
              p3 = a3;
              break;
            case `defaultValue`:
              c4 = a3;
              break;
            case `multiple`:
              s3 = a3;
            default:
              a3 !== l4 && Md(e3, t3, i4, a3, r3, l4);
          }
          t3 = c4, n4 = s3, r3 = m3, p3 == null ? !!r3 != !!n4 && (t3 == null ? Ut2(e3, !!n4, n4 ? [] : ``, false) : Ut2(e3, !!n4, t3, true)) : Ut2(e3, !!n4, p3, false);
          return;
        case `textarea`:
          for (c4 in m3 = p3 = null, n4) if (i4 = n4[c4], n4.hasOwnProperty(c4) && i4 != null && !r3.hasOwnProperty(c4)) switch (c4) {
            case `value`:
              break;
            case `children`:
              break;
            default:
              Md(e3, t3, c4, null, r3, i4);
          }
          for (s3 in r3) if (i4 = r3[s3], a3 = n4[s3], r3.hasOwnProperty(s3) && (i4 != null || a3 != null)) switch (s3) {
            case `value`:
              p3 = i4;
              break;
            case `defaultValue`:
              m3 = i4;
              break;
            case `children`:
              break;
            case `dangerouslySetInnerHTML`:
              if (i4 != null) throw Error(o3(91));
              break;
            default:
              i4 !== a3 && Md(e3, t3, s3, i4, r3, a3);
          }
          Wt2(e3, p3, m3);
          return;
        case `option`:
          for (var h3 in n4) if (p3 = n4[h3], n4.hasOwnProperty(h3) && p3 != null && !r3.hasOwnProperty(h3)) switch (h3) {
            case `selected`:
              e3.selected = false;
              break;
            default:
              Md(e3, t3, h3, null, r3, p3);
          }
          for (l4 in r3) if (p3 = r3[l4], m3 = n4[l4], r3.hasOwnProperty(l4) && p3 !== m3 && (p3 != null || m3 != null)) switch (l4) {
            case `selected`:
              e3.selected = p3 && typeof p3 != `function` && typeof p3 != `symbol`;
              break;
            default:
              Md(e3, t3, l4, p3, r3, m3);
          }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g3 in n4) p3 = n4[g3], n4.hasOwnProperty(g3) && p3 != null && !r3.hasOwnProperty(g3) && Md(e3, t3, g3, null, r3, p3);
          for (u3 in r3) if (p3 = r3[u3], m3 = n4[u3], r3.hasOwnProperty(u3) && p3 !== m3 && (p3 != null || m3 != null)) switch (u3) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (p3 != null) throw Error(o3(137, t3));
              break;
            default:
              Md(e3, t3, u3, p3, r3, m3);
          }
          return;
        default:
          if (Xt2(t3)) {
            for (var _3 in n4) p3 = n4[_3], n4.hasOwnProperty(_3) && p3 !== void 0 && !r3.hasOwnProperty(_3) && Nd(e3, t3, _3, void 0, r3, p3);
            for (d3 in r3) p3 = r3[d3], m3 = n4[d3], !r3.hasOwnProperty(d3) || p3 === m3 || p3 === void 0 && m3 === void 0 || Nd(e3, t3, d3, p3, r3, m3);
            return;
          }
      }
      for (var v3 in n4) p3 = n4[v3], n4.hasOwnProperty(v3) && p3 != null && !r3.hasOwnProperty(v3) && Md(e3, t3, v3, null, r3, p3);
      for (f3 in r3) p3 = r3[f3], m3 = n4[f3], !r3.hasOwnProperty(f3) || p3 === m3 || p3 == null && m3 == null || Md(e3, t3, f3, p3, r3, m3);
    }
    function Id(e3) {
      switch (e3) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return true;
        default:
          return false;
      }
    }
    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (var e3 = 0, t3 = 0, n4 = performance.getEntriesByType(`resource`), r3 = 0; r3 < n4.length; r3++) {
          var i4 = n4[r3], a3 = i4.transferSize, o4 = i4.initiatorType, s3 = i4.duration;
          if (a3 && s3 && Id(o4)) {
            for (o4 = 0, s3 = i4.responseEnd, r3 += 1; r3 < n4.length; r3++) {
              var c4 = n4[r3], l4 = c4.startTime;
              if (l4 > s3) break;
              var u3 = c4.transferSize, d3 = c4.initiatorType;
              u3 && Id(d3) && (c4 = c4.responseEnd, o4 += u3 * (c4 < s3 ? 1 : (s3 - l4) / (c4 - l4)));
            }
            if (--r3, t3 += 8 * (a3 + o4) / (i4.duration / 1e3), e3++, 10 < e3) break;
          }
        }
        if (0 < e3) return t3 / e3 / 1e6;
      }
      return navigator.connection && (e3 = navigator.connection.downlink, typeof e3 == `number`) ? e3 : 5;
    }
    var Rd = null, zd = null;
    function Bd(e3) {
      return e3.nodeType === 9 ? e3 : e3.ownerDocument;
    }
    function Vd(e3) {
      switch (e3) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Hd(e3, t3) {
      if (e3 === 0) switch (t3) {
        case `svg`:
          return 1;
        case `math`:
          return 2;
        default:
          return 0;
      }
      return e3 === 1 && t3 === `foreignObject` ? 0 : e3;
    }
    function Ud(e3, t3) {
      return e3 === `textarea` || e3 === `noscript` || typeof t3.children == `string` || typeof t3.children == `number` || typeof t3.children == `bigint` || typeof t3.dangerouslySetInnerHTML == `object` && t3.dangerouslySetInnerHTML !== null && t3.dangerouslySetInnerHTML.__html != null;
    }
    var Wd = null;
    function Gd() {
      var e3 = window.event;
      return e3 && e3.type === `popstate` ? e3 === Wd ? false : (Wd = e3, true) : (Wd = null, false);
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0, qd = typeof clearTimeout == `function` ? clearTimeout : void 0, Jd = typeof Promise == `function` ? Promise : void 0, Yd = typeof queueMicrotask == `function` ? queueMicrotask : Jd === void 0 ? Kd : function(e3) {
      return Jd.resolve(null).then(e3).catch(Xd);
    };
    function Xd(e3) {
      setTimeout(function() {
        throw e3;
      });
    }
    function Zd(e3) {
      return e3 === `head`;
    }
    function Qd(e3, t3) {
      var n4 = t3, r3 = 0;
      do {
        var i4 = n4.nextSibling;
        if (e3.removeChild(n4), i4 && i4.nodeType === 8) if (n4 = i4.data, n4 === `/$` || n4 === `/&`) {
          if (r3 === 0) {
            e3.removeChild(i4), Np(t3);
            return;
          }
          r3--;
        } else if (n4 === `$` || n4 === `$?` || n4 === `$~` || n4 === `$!` || n4 === `&`) r3++;
        else if (n4 === `html`) pf(e3.ownerDocument.documentElement);
        else if (n4 === `head`) {
          n4 = e3.ownerDocument.head, pf(n4);
          for (var a3 = n4.firstChild; a3; ) {
            var o4 = a3.nextSibling, s3 = a3.nodeName;
            a3[ht2] || s3 === `SCRIPT` || s3 === `STYLE` || s3 === `LINK` && a3.rel.toLowerCase() === `stylesheet` || n4.removeChild(a3), a3 = o4;
          }
        } else n4 === `body` && pf(e3.ownerDocument.body);
        n4 = i4;
      } while (n4);
      Np(t3);
    }
    function $d(e3, t3) {
      var n4 = e3;
      e3 = 0;
      do {
        var r3 = n4.nextSibling;
        if (n4.nodeType === 1 ? t3 ? (n4._stashedDisplay = n4.style.display, n4.style.display = `none`) : (n4.style.display = n4._stashedDisplay || ``, n4.getAttribute(`style`) === `` && n4.removeAttribute(`style`)) : n4.nodeType === 3 && (t3 ? (n4._stashedText = n4.nodeValue, n4.nodeValue = ``) : n4.nodeValue = n4._stashedText || ``), r3 && r3.nodeType === 8) if (n4 = r3.data, n4 === `/$`) {
          if (e3 === 0) break;
          e3--;
        } else n4 !== `$` && n4 !== `$?` && n4 !== `$~` && n4 !== `$!` || e3++;
        n4 = r3;
      } while (n4);
    }
    function ef(e3) {
      var t3 = e3.firstChild;
      for (t3 && t3.nodeType === 10 && (t3 = t3.nextSibling); t3; ) {
        var n4 = t3;
        switch (t3 = t3.nextSibling, n4.nodeName) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            ef(n4), gt2(n4);
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n4.rel.toLowerCase() === `stylesheet`) continue;
        }
        e3.removeChild(n4);
      }
    }
    function tf(e3, t3, n4, r3) {
      for (; e3.nodeType === 1; ) {
        var i4 = n4;
        if (e3.nodeName.toLowerCase() !== t3.toLowerCase()) {
          if (!r3 && (e3.nodeName !== `INPUT` || e3.type !== `hidden`)) break;
        } else if (!r3) if (t3 === `input` && e3.type === `hidden`) {
          var a3 = i4.name == null ? null : `` + i4.name;
          if (i4.type === `hidden` && e3.getAttribute(`name`) === a3) return e3;
        } else return e3;
        else if (!e3[ht2]) switch (t3) {
          case `meta`:
            if (!e3.hasAttribute(`itemprop`)) break;
            return e3;
          case `link`:
            if (a3 = e3.getAttribute(`rel`), a3 === `stylesheet` && e3.hasAttribute(`data-precedence`) || a3 !== i4.rel || e3.getAttribute(`href`) !== (i4.href == null || i4.href === `` ? null : i4.href) || e3.getAttribute(`crossorigin`) !== (i4.crossOrigin == null ? null : i4.crossOrigin) || e3.getAttribute(`title`) !== (i4.title == null ? null : i4.title)) break;
            return e3;
          case `style`:
            if (e3.hasAttribute(`data-precedence`)) break;
            return e3;
          case `script`:
            if (a3 = e3.getAttribute(`src`), (a3 !== (i4.src == null ? null : i4.src) || e3.getAttribute(`type`) !== (i4.type == null ? null : i4.type) || e3.getAttribute(`crossorigin`) !== (i4.crossOrigin == null ? null : i4.crossOrigin)) && a3 && e3.hasAttribute(`async`) && !e3.hasAttribute(`itemprop`)) break;
            return e3;
          default:
            return e3;
        }
        if (e3 = cf(e3.nextSibling), e3 === null) break;
      }
      return null;
    }
    function nf(e3, t3, n4) {
      if (t3 === ``) return null;
      for (; e3.nodeType !== 3; ) if ((e3.nodeType !== 1 || e3.nodeName !== `INPUT` || e3.type !== `hidden`) && !n4 || (e3 = cf(e3.nextSibling), e3 === null)) return null;
      return e3;
    }
    function rf(e3, t3) {
      for (; e3.nodeType !== 8; ) if ((e3.nodeType !== 1 || e3.nodeName !== `INPUT` || e3.type !== `hidden`) && !t3 || (e3 = cf(e3.nextSibling), e3 === null)) return null;
      return e3;
    }
    function af(e3) {
      return e3.data === `$?` || e3.data === `$~`;
    }
    function of(e3) {
      return e3.data === `$!` || e3.data === `$?` && e3.ownerDocument.readyState !== `loading`;
    }
    function sf(e3, t3) {
      var n4 = e3.ownerDocument;
      if (e3.data === `$~`) e3._reactRetry = t3;
      else if (e3.data !== `$?` || n4.readyState !== `loading`) t3();
      else {
        var r3 = function() {
          t3(), n4.removeEventListener(`DOMContentLoaded`, r3);
        };
        n4.addEventListener(`DOMContentLoaded`, r3), e3._reactRetry = r3;
      }
    }
    function cf(e3) {
      for (; e3 != null; e3 = e3.nextSibling) {
        var t3 = e3.nodeType;
        if (t3 === 1 || t3 === 3) break;
        if (t3 === 8) {
          if (t3 = e3.data, t3 === `$` || t3 === `$!` || t3 === `$?` || t3 === `$~` || t3 === `&` || t3 === `F!` || t3 === `F`) break;
          if (t3 === `/$` || t3 === `/&`) return null;
        }
      }
      return e3;
    }
    var lf = null;
    function uf(e3) {
      e3 = e3.nextSibling;
      for (var t3 = 0; e3; ) {
        if (e3.nodeType === 8) {
          var n4 = e3.data;
          if (n4 === `/$` || n4 === `/&`) {
            if (t3 === 0) return cf(e3.nextSibling);
            t3--;
          } else n4 !== `$` && n4 !== `$!` && n4 !== `$?` && n4 !== `$~` && n4 !== `&` || t3++;
        }
        e3 = e3.nextSibling;
      }
      return null;
    }
    function df(e3) {
      e3 = e3.previousSibling;
      for (var t3 = 0; e3; ) {
        if (e3.nodeType === 8) {
          var n4 = e3.data;
          if (n4 === `$` || n4 === `$!` || n4 === `$?` || n4 === `$~` || n4 === `&`) {
            if (t3 === 0) return e3;
            t3--;
          } else n4 !== `/$` && n4 !== `/&` || t3++;
        }
        e3 = e3.previousSibling;
      }
      return null;
    }
    function ff(e3, t3, n4) {
      switch (t3 = Bd(n4), e3) {
        case `html`:
          if (e3 = t3.documentElement, !e3) throw Error(o3(452));
          return e3;
        case `head`:
          if (e3 = t3.head, !e3) throw Error(o3(453));
          return e3;
        case `body`:
          if (e3 = t3.body, !e3) throw Error(o3(454));
          return e3;
        default:
          throw Error(o3(451));
      }
    }
    function pf(e3) {
      for (var t3 = e3.attributes; t3.length; ) e3.removeAttributeNode(t3[0]);
      gt2(e3);
    }
    var mf = /* @__PURE__ */ new Map(), hf = /* @__PURE__ */ new Set();
    function gf(e3) {
      return typeof e3.getRootNode == `function` ? e3.getRootNode() : e3.nodeType === 9 ? e3 : e3.ownerDocument;
    }
    var _f = j2.d;
    j2.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
    function vf() {
      var e3 = _f.f(), t3 = _u();
      return e3 || t3;
    }
    function yf(e3) {
      var t3 = vt2(e3);
      t3 !== null && t3.tag === 5 && t3.type === `form` ? _s2(t3) : _f.r(e3);
    }
    var bf = typeof document > `u` ? null : document;
    function xf(e3, t3, n4) {
      var r3 = bf;
      if (r3 && typeof t3 == `string` && t3) {
        var i4 = zt2(t3);
        i4 = `link[rel="` + e3 + `"][href="` + i4 + `"]`, typeof n4 == `string` && (i4 += `[crossorigin="` + n4 + `"]`), hf.has(i4) || (hf.add(i4), e3 = { rel: e3, crossOrigin: n4, href: t3 }, r3.querySelector(i4) === null && (t3 = r3.createElement(`link`), Pd(t3, `link`, e3), xt2(t3), r3.head.appendChild(t3)));
      }
    }
    function Sf(e3) {
      _f.D(e3), xf(`dns-prefetch`, e3, null);
    }
    function Cf(e3, t3) {
      _f.C(e3, t3), xf(`preconnect`, e3, t3);
    }
    function wf(e3, t3, n4) {
      _f.L(e3, t3, n4);
      var r3 = bf;
      if (r3 && e3 && t3) {
        var i4 = `link[rel="preload"][as="` + zt2(t3) + `"]`;
        t3 === `image` && n4 && n4.imageSrcSet ? (i4 += `[imagesrcset="` + zt2(n4.imageSrcSet) + `"]`, typeof n4.imageSizes == `string` && (i4 += `[imagesizes="` + zt2(n4.imageSizes) + `"]`)) : i4 += `[href="` + zt2(e3) + `"]`;
        var a3 = i4;
        switch (t3) {
          case `style`:
            a3 = Af(e3);
            break;
          case `script`:
            a3 = Pf(e3);
        }
        mf.has(a3) || (e3 = h2({ rel: `preload`, href: t3 === `image` && n4 && n4.imageSrcSet ? void 0 : e3, as: t3 }, n4), mf.set(a3, e3), r3.querySelector(i4) !== null || t3 === `style` && r3.querySelector(jf(a3)) || t3 === `script` && r3.querySelector(Ff(a3)) || (t3 = r3.createElement(`link`), Pd(t3, `link`, e3), xt2(t3), r3.head.appendChild(t3)));
      }
    }
    function Tf(e3, t3) {
      _f.m(e3, t3);
      var n4 = bf;
      if (n4 && e3) {
        var r3 = t3 && typeof t3.as == `string` ? t3.as : `script`, i4 = `link[rel="modulepreload"][as="` + zt2(r3) + `"][href="` + zt2(e3) + `"]`, a3 = i4;
        switch (r3) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a3 = Pf(e3);
        }
        if (!mf.has(a3) && (e3 = h2({ rel: `modulepreload`, href: e3 }, t3), mf.set(a3, e3), n4.querySelector(i4) === null)) {
          switch (r3) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n4.querySelector(Ff(a3))) return;
          }
          r3 = n4.createElement(`link`), Pd(r3, `link`, e3), xt2(r3), n4.head.appendChild(r3);
        }
      }
    }
    function Ef(e3, t3, n4) {
      _f.S(e3, t3, n4);
      var r3 = bf;
      if (r3 && e3) {
        var i4 = bt2(r3).hoistableStyles, a3 = Af(e3);
        t3 ||= `default`;
        var o4 = i4.get(a3);
        if (!o4) {
          var s3 = { loading: 0, preload: null };
          if (o4 = r3.querySelector(jf(a3))) s3.loading = 5;
          else {
            e3 = h2({ rel: `stylesheet`, href: e3, "data-precedence": t3 }, n4), (n4 = mf.get(a3)) && Rf(e3, n4);
            var c4 = o4 = r3.createElement(`link`);
            xt2(c4), Pd(c4, `link`, e3), c4._p = new Promise(function(e4, t4) {
              c4.onload = e4, c4.onerror = t4;
            }), c4.addEventListener(`load`, function() {
              s3.loading |= 1;
            }), c4.addEventListener(`error`, function() {
              s3.loading |= 2;
            }), s3.loading |= 4, Lf(o4, t3, r3);
          }
          o4 = { type: `stylesheet`, instance: o4, count: 1, state: s3 }, i4.set(a3, o4);
        }
      }
    }
    function Df(e3, t3) {
      _f.X(e3, t3);
      var n4 = bf;
      if (n4 && e3) {
        var r3 = bt2(n4).hoistableScripts, i4 = Pf(e3), a3 = r3.get(i4);
        a3 || (a3 = n4.querySelector(Ff(i4)), a3 || (e3 = h2({ src: e3, async: true }, t3), (t3 = mf.get(i4)) && zf(e3, t3), a3 = n4.createElement(`script`), xt2(a3), Pd(a3, `link`, e3), n4.head.appendChild(a3)), a3 = { type: `script`, instance: a3, count: 1, state: null }, r3.set(i4, a3));
      }
    }
    function Of(e3, t3) {
      _f.M(e3, t3);
      var n4 = bf;
      if (n4 && e3) {
        var r3 = bt2(n4).hoistableScripts, i4 = Pf(e3), a3 = r3.get(i4);
        a3 || (a3 = n4.querySelector(Ff(i4)), a3 || (e3 = h2({ src: e3, async: true, type: `module` }, t3), (t3 = mf.get(i4)) && zf(e3, t3), a3 = n4.createElement(`script`), xt2(a3), Pd(a3, `link`, e3), n4.head.appendChild(a3)), a3 = { type: `script`, instance: a3, count: 1, state: null }, r3.set(i4, a3));
      }
    }
    function kf(e3, t3, n4, r3) {
      var i4 = (i4 = pe2.current) ? gf(i4) : null;
      if (!i4) throw Error(o3(446));
      switch (e3) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n4.precedence == `string` && typeof n4.href == `string` ? (t3 = Af(n4.href), n4 = bt2(i4).hoistableStyles, r3 = n4.get(t3), r3 || (r3 = { type: `style`, instance: null, count: 0, state: null }, n4.set(t3, r3)), r3) : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (n4.rel === `stylesheet` && typeof n4.href == `string` && typeof n4.precedence == `string`) {
            e3 = Af(n4.href);
            var a3 = bt2(i4).hoistableStyles, s3 = a3.get(e3);
            if (s3 || (i4 = i4.ownerDocument || i4, s3 = { type: `stylesheet`, instance: null, count: 0, state: { loading: 0, preload: null } }, a3.set(e3, s3), (a3 = i4.querySelector(jf(e3))) && !a3._p && (s3.instance = a3, s3.state.loading = 5), mf.has(e3) || (n4 = { rel: `preload`, as: `style`, href: n4.href, crossOrigin: n4.crossOrigin, integrity: n4.integrity, media: n4.media, hrefLang: n4.hrefLang, referrerPolicy: n4.referrerPolicy }, mf.set(e3, n4), a3 || Nf(i4, e3, n4, s3.state))), t3 && r3 === null) throw Error(o3(528, ``));
            return s3;
          }
          if (t3 && r3 !== null) throw Error(o3(529, ``));
          return null;
        case `script`:
          return t3 = n4.async, n4 = n4.src, typeof n4 == `string` && t3 && typeof t3 != `function` && typeof t3 != `symbol` ? (t3 = Pf(n4), n4 = bt2(i4).hoistableScripts, r3 = n4.get(t3), r3 || (r3 = { type: `script`, instance: null, count: 0, state: null }, n4.set(t3, r3)), r3) : { type: `void`, instance: null, count: 0, state: null };
        default:
          throw Error(o3(444, e3));
      }
    }
    function Af(e3) {
      return `href="` + zt2(e3) + `"`;
    }
    function jf(e3) {
      return `link[rel="stylesheet"][` + e3 + `]`;
    }
    function Mf(e3) {
      return h2({}, e3, { "data-precedence": e3.precedence, precedence: null });
    }
    function Nf(e3, t3, n4, r3) {
      e3.querySelector(`link[rel="preload"][as="style"][` + t3 + `]`) ? r3.loading = 1 : (t3 = e3.createElement(`link`), r3.preload = t3, t3.addEventListener(`load`, function() {
        return r3.loading |= 1;
      }), t3.addEventListener(`error`, function() {
        return r3.loading |= 2;
      }), Pd(t3, `link`, n4), xt2(t3), e3.head.appendChild(t3));
    }
    function Pf(e3) {
      return `[src="` + zt2(e3) + `"]`;
    }
    function Ff(e3) {
      return `script[async]` + e3;
    }
    function If(e3, t3, n4) {
      if (t3.count++, t3.instance === null) switch (t3.type) {
        case `style`:
          var r3 = e3.querySelector(`style[data-href~="` + zt2(n4.href) + `"]`);
          if (r3) return t3.instance = r3, xt2(r3), r3;
          var i4 = h2({}, n4, { "data-href": n4.href, "data-precedence": n4.precedence, href: null, precedence: null });
          return r3 = (e3.ownerDocument || e3).createElement(`style`), xt2(r3), Pd(r3, `style`, i4), Lf(r3, n4.precedence, e3), t3.instance = r3;
        case `stylesheet`:
          i4 = Af(n4.href);
          var a3 = e3.querySelector(jf(i4));
          if (a3) return t3.state.loading |= 4, t3.instance = a3, xt2(a3), a3;
          r3 = Mf(n4), (i4 = mf.get(i4)) && Rf(r3, i4), a3 = (e3.ownerDocument || e3).createElement(`link`), xt2(a3);
          var s3 = a3;
          return s3._p = new Promise(function(e4, t4) {
            s3.onload = e4, s3.onerror = t4;
          }), Pd(a3, `link`, r3), t3.state.loading |= 4, Lf(a3, n4.precedence, e3), t3.instance = a3;
        case `script`:
          return a3 = Pf(n4.src), (i4 = e3.querySelector(Ff(a3))) ? (t3.instance = i4, xt2(i4), i4) : (r3 = n4, (i4 = mf.get(a3)) && (r3 = h2({}, n4), zf(r3, i4)), e3 = e3.ownerDocument || e3, i4 = e3.createElement(`script`), xt2(i4), Pd(i4, `link`, r3), e3.head.appendChild(i4), t3.instance = i4);
        case `void`:
          return null;
        default:
          throw Error(o3(443, t3.type));
      }
      else t3.type === `stylesheet` && !(t3.state.loading & 4) && (r3 = t3.instance, t3.state.loading |= 4, Lf(r3, n4.precedence, e3));
      return t3.instance;
    }
    function Lf(e3, t3, n4) {
      for (var r3 = n4.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i4 = r3.length ? r3[r3.length - 1] : null, a3 = i4, o4 = 0; o4 < r3.length; o4++) {
        var s3 = r3[o4];
        if (s3.dataset.precedence === t3) a3 = s3;
        else if (a3 !== i4) break;
      }
      a3 ? a3.parentNode.insertBefore(e3, a3.nextSibling) : (t3 = n4.nodeType === 9 ? n4.head : n4, t3.insertBefore(e3, t3.firstChild));
    }
    function Rf(e3, t3) {
      e3.crossOrigin ??= t3.crossOrigin, e3.referrerPolicy ??= t3.referrerPolicy, e3.title ??= t3.title;
    }
    function zf(e3, t3) {
      e3.crossOrigin ??= t3.crossOrigin, e3.referrerPolicy ??= t3.referrerPolicy, e3.integrity ??= t3.integrity;
    }
    var Bf = null;
    function Vf(e3, t3, n4) {
      if (Bf === null) {
        var r3 = /* @__PURE__ */ new Map(), i4 = Bf = /* @__PURE__ */ new Map();
        i4.set(n4, r3);
      } else i4 = Bf, r3 = i4.get(n4), r3 || (r3 = /* @__PURE__ */ new Map(), i4.set(n4, r3));
      if (r3.has(e3)) return r3;
      for (r3.set(e3, null), n4 = n4.getElementsByTagName(e3), i4 = 0; i4 < n4.length; i4++) {
        var a3 = n4[i4];
        if (!(a3[ht2] || a3[ct2] || e3 === `link` && a3.getAttribute(`rel`) === `stylesheet`) && a3.namespaceURI !== `http://www.w3.org/2000/svg`) {
          var o4 = a3.getAttribute(t3) || ``;
          o4 = e3 + o4;
          var s3 = r3.get(o4);
          s3 ? s3.push(a3) : r3.set(o4, [a3]);
        }
      }
      return r3;
    }
    function Hf(e3, t3, n4) {
      e3 = e3.ownerDocument || e3, e3.head.insertBefore(n4, t3 === `title` ? e3.querySelector(`head > title`) : null);
    }
    function Uf(e3, t3, n4) {
      if (n4 === 1 || t3.itemProp != null) return false;
      switch (e3) {
        case `meta`:
        case `title`:
          return true;
        case `style`:
          if (typeof t3.precedence != `string` || typeof t3.href != `string` || t3.href === ``) break;
          return true;
        case `link`:
          if (typeof t3.rel != `string` || typeof t3.href != `string` || t3.href === `` || t3.onLoad || t3.onError) break;
          switch (t3.rel) {
            case `stylesheet`:
              return e3 = t3.disabled, typeof t3.precedence == `string` && e3 == null;
            default:
              return true;
          }
        case `script`:
          if (t3.async && typeof t3.async != `function` && typeof t3.async != `symbol` && !t3.onLoad && !t3.onError && t3.src && typeof t3.src == `string`) return true;
      }
      return false;
    }
    function Wf(e3) {
      return !(e3.type === `stylesheet` && !(e3.state.loading & 3));
    }
    function Gf(e3, t3, n4, r3) {
      if (n4.type === `stylesheet` && (typeof r3.media != `string` || false !== matchMedia(r3.media).matches) && !(n4.state.loading & 4)) {
        if (n4.instance === null) {
          var i4 = Af(r3.href), a3 = t3.querySelector(jf(i4));
          if (a3) {
            t3 = a3._p, typeof t3 == `object` && t3 && typeof t3.then == `function` && (e3.count++, e3 = Jf.bind(e3), t3.then(e3, e3)), n4.state.loading |= 4, n4.instance = a3, xt2(a3);
            return;
          }
          a3 = t3.ownerDocument || t3, r3 = Mf(r3), (i4 = mf.get(i4)) && Rf(r3, i4), a3 = a3.createElement(`link`), xt2(a3);
          var o4 = a3;
          o4._p = new Promise(function(e4, t4) {
            o4.onload = e4, o4.onerror = t4;
          }), Pd(a3, `link`, r3), n4.instance = a3;
        }
        e3.stylesheets === null && (e3.stylesheets = /* @__PURE__ */ new Map()), e3.stylesheets.set(n4, t3), (t3 = n4.state.preload) && !(n4.state.loading & 3) && (e3.count++, n4 = Jf.bind(e3), t3.addEventListener(`load`, n4), t3.addEventListener(`error`, n4));
      }
    }
    var Kf = 0;
    function qf(e3, t3) {
      return e3.stylesheets && e3.count === 0 && Xf(e3, e3.stylesheets), 0 < e3.count || 0 < e3.imgCount ? function(n4) {
        var r3 = setTimeout(function() {
          if (e3.stylesheets && Xf(e3, e3.stylesheets), e3.unsuspend) {
            var t4 = e3.unsuspend;
            e3.unsuspend = null, t4();
          }
        }, 6e4 + t3);
        0 < e3.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
        var i4 = setTimeout(function() {
          if (e3.waitingForImages = false, e3.count === 0 && (e3.stylesheets && Xf(e3, e3.stylesheets), e3.unsuspend)) {
            var t4 = e3.unsuspend;
            e3.unsuspend = null, t4();
          }
        }, (e3.imgBytes > Kf ? 50 : 800) + t3);
        return e3.unsuspend = n4, function() {
          e3.unsuspend = null, clearTimeout(r3), clearTimeout(i4);
        };
      } : null;
    }
    function Jf() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) Xf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e3 = this.unsuspend;
          this.unsuspend = null, e3();
        }
      }
    }
    var Yf = null;
    function Xf(e3, t3) {
      e3.stylesheets = null, e3.unsuspend !== null && (e3.count++, Yf = /* @__PURE__ */ new Map(), t3.forEach(Zf, e3), Yf = null, Jf.call(e3));
    }
    function Zf(e3, t3) {
      if (!(t3.state.loading & 4)) {
        var n4 = Yf.get(e3);
        if (n4) var r3 = n4.get(null);
        else {
          n4 = /* @__PURE__ */ new Map(), Yf.set(e3, n4);
          for (var i4 = e3.querySelectorAll(`link[data-precedence],style[data-precedence]`), a3 = 0; a3 < i4.length; a3++) {
            var o4 = i4[a3];
            (o4.nodeName === `LINK` || o4.getAttribute(`media`) !== `not all`) && (n4.set(o4.dataset.precedence, o4), r3 = o4);
          }
          r3 && n4.set(null, r3);
        }
        i4 = t3.instance, o4 = i4.getAttribute(`data-precedence`), a3 = n4.get(o4) || r3, a3 === r3 && n4.set(null, i4), n4.set(o4, i4), this.count++, r3 = Jf.bind(this), i4.addEventListener(`load`, r3), i4.addEventListener(`error`, r3), a3 ? a3.parentNode.insertBefore(i4, a3.nextSibling) : (e3 = e3.nodeType === 9 ? e3.head : e3, e3.insertBefore(i4, e3.firstChild)), t3.state.loading |= 4;
      }
    }
    var Qf = { $$typeof: C2, Provider: null, Consumer: null, _currentValue: oe2, _currentValue2: oe2, _threadCount: 0 };
    function $f(e3, t3, n4, r3, i4, a3, o4, s3, c4) {
      this.tag = 1, this.containerInfo = e3, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ze2(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ze2(0), this.hiddenUpdates = Ze2(null), this.identifierPrefix = r3, this.onUncaughtError = i4, this.onCaughtError = a3, this.onRecoverableError = o4, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c4, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function ep(e3, t3, n4, r3, i4, a3, o4, s3, c4, l4, u3, d3) {
      return e3 = new $f(e3, t3, n4, o4, c4, l4, u3, d3, s3), t3 = 1, true === a3 && (t3 |= 24), a3 = ri2(3, null, null, t3), e3.current = a3, a3.stateNode = e3, t3 = ta2(), t3.refCount++, e3.pooledCache = t3, t3.refCount++, a3.memoizedState = { element: r3, isDehydrated: n4, cache: t3 }, Pa2(a3), e3;
    }
    function tp(e3) {
      return e3 ? (e3 = ti2, e3) : ti2;
    }
    function np(e3, t3, n4, r3, i4, a3) {
      i4 = tp(i4), r3.context === null ? r3.context = i4 : r3.pendingContext = i4, r3 = Ia2(t3), r3.payload = { element: n4 }, a3 = a3 === void 0 ? null : a3, a3 !== null && (r3.callback = a3), n4 = La2(e3, r3, t3), n4 !== null && (fu(n4, e3, t3), Ra2(n4, e3, t3));
    }
    function rp(e3, t3) {
      if (e3 = e3.memoizedState, e3 !== null && e3.dehydrated !== null) {
        var n4 = e3.retryLane;
        e3.retryLane = n4 !== 0 && n4 < t3 ? n4 : t3;
      }
    }
    function ip(e3, t3) {
      rp(e3, t3), (e3 = e3.alternate) && rp(e3, t3);
    }
    function ap(e3) {
      if (e3.tag === 13 || e3.tag === 31) {
        var t3 = Qr2(e3, 67108864);
        t3 !== null && fu(t3, e3, 67108864), ip(e3, 67108864);
      }
    }
    function op(e3) {
      if (e3.tag === 13 || e3.tag === 31) {
        var t3 = uu();
        t3 = rt2(t3);
        var n4 = Qr2(e3, t3);
        n4 !== null && fu(n4, e3, t3), ip(e3, t3);
      }
    }
    var sp = true;
    function cp(e3, t3, n4, r3) {
      var i4 = A2.T;
      A2.T = null;
      var a3 = j2.p;
      try {
        j2.p = 2, up(e3, t3, n4, r3);
      } finally {
        j2.p = a3, A2.T = i4;
      }
    }
    function lp(e3, t3, n4, r3) {
      var i4 = A2.T;
      A2.T = null;
      var a3 = j2.p;
      try {
        j2.p = 8, up(e3, t3, n4, r3);
      } finally {
        j2.p = a3, A2.T = i4;
      }
    }
    function up(e3, t3, n4, r3) {
      if (sp) {
        var i4 = dp(r3);
        if (i4 === null) Cd(e3, t3, r3, fp, n4), Cp(e3, r3);
        else if (Tp(i4, e3, t3, n4, r3)) r3.stopPropagation();
        else if (Cp(e3, r3), t3 & 4 && -1 < Sp.indexOf(e3)) {
          for (; i4 !== null; ) {
            var a3 = vt2(i4);
            if (a3 !== null) switch (a3.tag) {
              case 3:
                if (a3 = a3.stateNode, a3.current.memoizedState.isDehydrated) {
                  var o4 = Ke2(a3.pendingLanes);
                  if (o4 !== 0) {
                    var s3 = a3;
                    for (s3.pendingLanes |= 2, s3.entangledLanes |= 2; o4; ) {
                      var c4 = 1 << 31 - Be2(o4);
                      s3.entanglements[1] |= c4, o4 &= ~c4;
                    }
                    td(a3), !(Ml & 6) && (Ql = Ae2() + 500, nd(0, false));
                  }
                }
                break;
              case 31:
              case 13:
                s3 = Qr2(a3, 2), s3 !== null && fu(s3, a3, 2), _u(), ip(a3, 2);
            }
            if (a3 = dp(r3), a3 === null && Cd(e3, t3, r3, fp, n4), a3 === i4) break;
            i4 = a3;
          }
          i4 !== null && r3.stopPropagation();
        } else Cd(e3, t3, r3, null, n4);
      }
    }
    function dp(e3) {
      return e3 = nn2(e3), pp(e3);
    }
    var fp = null;
    function pp(e3) {
      if (fp = null, e3 = _t2(e3), e3 !== null) {
        var t3 = l3(e3);
        if (t3 === null) e3 = null;
        else {
          var n4 = t3.tag;
          if (n4 === 13) {
            if (e3 = u2(t3), e3 !== null) return e3;
            e3 = null;
          } else if (n4 === 31) {
            if (e3 = d2(t3), e3 !== null) return e3;
            e3 = null;
          } else if (n4 === 3) {
            if (t3.stateNode.current.memoizedState.isDehydrated) return t3.tag === 3 ? t3.stateNode.containerInfo : null;
            e3 = null;
          } else t3 !== e3 && (e3 = null);
        }
      }
      return fp = e3, null;
    }
    function mp(e3) {
      switch (e3) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (je2()) {
            case Me2:
              return 2;
            case Ne2:
              return 8;
            case Pe2:
            case Fe2:
              return 32;
            case Ie2:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = false, gp = null, _p = null, vp = null, yp = /* @__PURE__ */ new Map(), bp = /* @__PURE__ */ new Map(), xp = [], Sp = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
    function Cp(e3, t3) {
      switch (e3) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t3.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t3.pointerId);
      }
    }
    function wp(e3, t3, n4, r3, i4, a3) {
      return e3 === null || e3.nativeEvent !== a3 ? (e3 = { blockedOn: t3, domEventName: n4, eventSystemFlags: r3, nativeEvent: a3, targetContainers: [i4] }, t3 !== null && (t3 = vt2(t3), t3 !== null && ap(t3)), e3) : (e3.eventSystemFlags |= r3, t3 = e3.targetContainers, i4 !== null && t3.indexOf(i4) === -1 && t3.push(i4), e3);
    }
    function Tp(e3, t3, n4, r3, i4) {
      switch (t3) {
        case `focusin`:
          return gp = wp(gp, e3, t3, n4, r3, i4), true;
        case `dragenter`:
          return _p = wp(_p, e3, t3, n4, r3, i4), true;
        case `mouseover`:
          return vp = wp(vp, e3, t3, n4, r3, i4), true;
        case `pointerover`:
          var a3 = i4.pointerId;
          return yp.set(a3, wp(yp.get(a3) || null, e3, t3, n4, r3, i4)), true;
        case `gotpointercapture`:
          return a3 = i4.pointerId, bp.set(a3, wp(bp.get(a3) || null, e3, t3, n4, r3, i4)), true;
      }
      return false;
    }
    function Ep(e3) {
      var t3 = _t2(e3.target);
      if (t3 !== null) {
        var n4 = l3(t3);
        if (n4 !== null) {
          if (t3 = n4.tag, t3 === 13) {
            if (t3 = u2(n4), t3 !== null) {
              e3.blockedOn = t3, ot2(e3.priority, function() {
                op(n4);
              });
              return;
            }
          } else if (t3 === 31) {
            if (t3 = d2(n4), t3 !== null) {
              e3.blockedOn = t3, ot2(e3.priority, function() {
                op(n4);
              });
              return;
            }
          } else if (t3 === 3 && n4.stateNode.current.memoizedState.isDehydrated) {
            e3.blockedOn = n4.tag === 3 ? n4.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e3.blockedOn = null;
    }
    function Dp(e3) {
      if (e3.blockedOn !== null) return false;
      for (var t3 = e3.targetContainers; 0 < t3.length; ) {
        var n4 = dp(e3.nativeEvent);
        if (n4 === null) {
          n4 = e3.nativeEvent;
          var r3 = new n4.constructor(n4.type, n4);
          tn2 = r3, n4.target.dispatchEvent(r3), tn2 = null;
        } else return t3 = vt2(n4), t3 !== null && ap(t3), e3.blockedOn = n4, false;
        t3.shift();
      }
      return true;
    }
    function Op(e3, t3, n4) {
      Dp(e3) && n4.delete(t3);
    }
    function kp() {
      hp = false, gp !== null && Dp(gp) && (gp = null), _p !== null && Dp(_p) && (_p = null), vp !== null && Dp(vp) && (vp = null), yp.forEach(Op), bp.forEach(Op);
    }
    function Ap(e3, n4) {
      e3.blockedOn === n4 && (e3.blockedOn = null, hp || (hp = true, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, kp)));
    }
    var jp = null;
    function Mp(e3) {
      jp !== e3 && (jp = e3, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, function() {
        jp === e3 && (jp = null);
        for (var t3 = 0; t3 < e3.length; t3 += 3) {
          var n4 = e3[t3], r3 = e3[t3 + 1], i4 = e3[t3 + 2];
          if (typeof r3 != `function`) {
            if (pp(r3 || n4) === null) continue;
            break;
          }
          var a3 = vt2(n4);
          a3 !== null && (e3.splice(t3, 3), t3 -= 3, hs2(a3, { pending: true, data: i4, method: n4.method, action: r3 }, r3, i4));
        }
      }));
    }
    function Np(e3) {
      function t3(t4) {
        return Ap(t4, e3);
      }
      gp !== null && Ap(gp, e3), _p !== null && Ap(_p, e3), vp !== null && Ap(vp, e3), yp.forEach(t3), bp.forEach(t3);
      for (var n4 = 0; n4 < xp.length; n4++) {
        var r3 = xp[n4];
        r3.blockedOn === e3 && (r3.blockedOn = null);
      }
      for (; 0 < xp.length && (n4 = xp[0], n4.blockedOn === null); ) Ep(n4), n4.blockedOn === null && xp.shift();
      if (n4 = (e3.ownerDocument || e3).$$reactFormReplay, n4 != null) for (r3 = 0; r3 < n4.length; r3 += 3) {
        var i4 = n4[r3], a3 = n4[r3 + 1], o4 = i4[lt2] || null;
        if (typeof a3 == `function`) o4 || Mp(n4);
        else if (o4) {
          var s3 = null;
          if (a3 && a3.hasAttribute(`formAction`)) {
            if (i4 = a3, o4 = a3[lt2] || null) s3 = o4.formAction;
            else if (pp(i4) !== null) continue;
          } else s3 = o4.action;
          typeof s3 == `function` ? n4[r3 + 1] = s3 : (n4.splice(r3, 3), r3 -= 3), Mp(n4);
        }
      }
    }
    function Pp() {
      function e3(e4) {
        e4.canIntercept && e4.info === `react-transition` && e4.intercept({ handler: function() {
          return new Promise(function(e5) {
            return i4 = e5;
          });
        }, focusReset: `manual`, scroll: `manual` });
      }
      function t3() {
        i4 !== null && (i4(), i4 = null), r3 || setTimeout(n4, 20);
      }
      function n4() {
        if (!r3 && !navigation.transition) {
          var e4 = navigation.currentEntry;
          e4 && e4.url != null && navigation.navigate(e4.url, { state: e4.getState(), info: `react-transition`, history: `replace` });
        }
      }
      if (typeof navigation == `object`) {
        var r3 = false, i4 = null;
        return navigation.addEventListener(`navigate`, e3), navigation.addEventListener(`navigatesuccess`, t3), navigation.addEventListener(`navigateerror`, t3), setTimeout(n4, 100), function() {
          r3 = true, navigation.removeEventListener(`navigate`, e3), navigation.removeEventListener(`navigatesuccess`, t3), navigation.removeEventListener(`navigateerror`, t3), i4 !== null && (i4(), i4 = null);
        };
      }
    }
    function Fp(e3) {
      this._internalRoot = e3;
    }
    Ip.prototype.render = Fp.prototype.render = function(e3) {
      var t3 = this._internalRoot;
      if (t3 === null) throw Error(o3(409));
      var n4 = t3.current;
      np(n4, uu(), e3, t3, null, null);
    }, Ip.prototype.unmount = Fp.prototype.unmount = function() {
      var e3 = this._internalRoot;
      if (e3 !== null) {
        this._internalRoot = null;
        var t3 = e3.containerInfo;
        np(e3.current, 2, null, e3, null, null), _u(), t3[ut2] = null;
      }
    };
    function Ip(e3) {
      this._internalRoot = e3;
    }
    Ip.prototype.unstable_scheduleHydration = function(e3) {
      if (e3) {
        var t3 = at2();
        e3 = { blockedOn: null, target: e3, priority: t3 };
        for (var n4 = 0; n4 < xp.length && t3 !== 0 && t3 < xp[n4].priority; n4++) ;
        xp.splice(n4, 0, e3), n4 === 0 && Ep(e3);
      }
    };
    var Lp = n3.version;
    if (Lp !== `19.2.7`) throw Error(o3(527, Lp, `19.2.7`));
    j2.findDOMNode = function(e3) {
      var t3 = e3._reactInternals;
      if (t3 === void 0) throw typeof e3.render == `function` ? Error(o3(188)) : (e3 = Object.keys(e3).join(`,`), Error(o3(268, e3)));
      return e3 = p2(t3), e3 = e3 === null ? null : m2(e3), e3 = e3 === null ? null : e3.stateNode, e3;
    };
    var Rp = { bundleType: 0, version: `19.2.7`, rendererPackageName: `react-dom`, currentDispatcherRef: A2, reconcilerVersion: `19.2.7` };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber) try {
        Re2 = zp.inject(Rp), ze2 = zp;
      } catch {
      }
    }
    e2.createRoot = function(e3, t3) {
      if (!c3(e3)) throw Error(o3(299));
      var n4 = false, r3 = ``, i4 = Rs, a3 = zs, s3 = Bs;
      return t3 != null && (true === t3.unstable_strictMode && (n4 = true), t3.identifierPrefix !== void 0 && (r3 = t3.identifierPrefix), t3.onUncaughtError !== void 0 && (i4 = t3.onUncaughtError), t3.onCaughtError !== void 0 && (a3 = t3.onCaughtError), t3.onRecoverableError !== void 0 && (s3 = t3.onRecoverableError)), t3 = ep(e3, 1, false, null, null, n4, r3, null, i4, a3, s3, Pp), e3[ut2] = t3.current, xd(e3), new Fp(t3);
    };
  }));
  var l2 = o(((e2, t2) => {
    function n3() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`)) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n3);
      } catch (e3) {
        console.error(e3);
      }
    }
    n3(), t2.exports = c2();
  }));
  var u = c(r2(), 1);
  var d = l2();
  var f = (...e2) => e2.filter((e3, t2, n3) => !!e3 && e3.trim() !== `` && n3.indexOf(e3) === t2).join(` `).trim();
  var p = (e2) => e2.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
  var m = (e2) => e2.replace(/^([A-Z])|[\s-_]+(\w)/g, (e3, t2, n3) => n3 ? n3.toUpperCase() : t2.toLowerCase());
  var h = (e2) => {
    let t2 = m(e2);
    return t2.charAt(0).toUpperCase() + t2.slice(1);
  };
  var g = { xmlns: `http://www.w3.org/2000/svg`, width: 24, height: 24, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, strokeWidth: 2, strokeLinecap: `round`, strokeLinejoin: `round` };
  var _ = (e2) => {
    for (let t2 in e2) if (t2.startsWith(`aria-`) || t2 === `role` || t2 === `title`) return true;
    return false;
  };
  var v = (0, u.createContext)({});
  var y = () => (0, u.useContext)(v);
  var b = (0, u.forwardRef)(({ color: e2, size: t2, strokeWidth: n3, absoluteStrokeWidth: r3, className: i3 = ``, children: a3, iconNode: o3, ...s3 }, c3) => {
    let { size: l3 = 24, strokeWidth: d2 = 2, absoluteStrokeWidth: p2 = false, color: m2 = `currentColor`, className: h2 = `` } = y() ?? {}, v2 = r3 ?? p2 ? Number(n3 ?? d2) * 24 / Number(t2 ?? l3) : n3 ?? d2;
    return (0, u.createElement)(`svg`, { ref: c3, ...g, width: t2 ?? l3 ?? g.width, height: t2 ?? l3 ?? g.height, stroke: e2 ?? m2, strokeWidth: v2, className: f(`lucide`, h2, i3), ...!a3 && !_(s3) && { "aria-hidden": `true` }, ...s3 }, [...o3.map(([e3, t3]) => (0, u.createElement)(e3, t3)), ...Array.isArray(a3) ? a3 : [a3]]);
  });
  var x = (e2, t2) => {
    let n3 = (0, u.forwardRef)(({ className: n4, ...r3 }, i3) => (0, u.createElement)(b, { ref: i3, iconNode: t2, className: f(`lucide-${p(h(e2))}`, `lucide-${e2}`, n4), ...r3 }));
    return n3.displayName = h(e2), n3;
  };
  var S = x(`arrow-down-wide-narrow`, [[`path`, { d: `m3 16 4 4 4-4`, key: `1co6wj` }], [`path`, { d: `M7 20V4`, key: `1yoxec` }], [`path`, { d: `M11 4h10`, key: `1w87gc` }], [`path`, { d: `M11 8h7`, key: `djye34` }], [`path`, { d: `M11 12h4`, key: `q8tih4` }]]);
  x(`arrow-left-right`, [[`path`, { d: `M8 3 4 7l4 4`, key: `9rb6wj` }], [`path`, { d: `M4 7h16`, key: `6tx8e3` }], [`path`, { d: `m16 21 4-4-4-4`, key: `siv7j2` }], [`path`, { d: `M20 17H4`, key: `h6l3hr` }]]);
  var C = x(`arrow-right`, [[`path`, { d: `M5 12h14`, key: `1ays0h` }], [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }]]);
  var w = x(`arrow-up-narrow-wide`, [[`path`, { d: `m3 8 4-4 4 4`, key: `11wl7u` }], [`path`, { d: `M7 4v16`, key: `1glfcx` }], [`path`, { d: `M11 12h4`, key: `q8tih4` }], [`path`, { d: `M11 16h7`, key: `uosisv` }], [`path`, { d: `M11 20h10`, key: `jvxblo` }]]);
  var T = x(`award`, [[`path`, { d: `m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`, key: `1yiouv` }], [`circle`, { cx: `12`, cy: `8`, r: `6`, key: `1vp47v` }]]);
  x(`ban`, [[`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }], [`path`, { d: `M4.929 4.929 19.07 19.071`, key: `196cmz` }]]), x(`book-open`, [[`path`, { d: `M12 7v14`, key: `1akyts` }], [`path`, { d: `M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`, key: `ruj8y` }]]);
  var E = x(`calendar-clock`, [[`path`, { d: `M16 14v2.2l1.6 1`, key: `fo4ql5` }], [`path`, { d: `M16 2v4`, key: `4m81vk` }], [`path`, { d: `M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5`, key: `1osxxc` }], [`path`, { d: `M3 10h5`, key: `r794hk` }], [`path`, { d: `M8 2v4`, key: `1cmpym` }], [`circle`, { cx: `16`, cy: `16`, r: `6`, key: `qoo3c4` }]]);
  x(`calendar-days`, [[`path`, { d: `M8 2v4`, key: `1cmpym` }], [`path`, { d: `M16 2v4`, key: `4m81vk` }], [`rect`, { width: `18`, height: `18`, x: `3`, y: `4`, rx: `2`, key: `1hopcy` }], [`path`, { d: `M3 10h18`, key: `8toen8` }], [`path`, { d: `M8 14h.01`, key: `6423bh` }], [`path`, { d: `M12 14h.01`, key: `1etili` }], [`path`, { d: `M16 14h.01`, key: `1gbofw` }], [`path`, { d: `M8 18h.01`, key: `lrp35t` }], [`path`, { d: `M12 18h.01`, key: `mhygvu` }], [`path`, { d: `M16 18h.01`, key: `kzsmim` }]]), x(`calendar-off`, [[`path`, { d: `M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18`, key: `16swn3` }], [`path`, { d: `M21 15.5V6a2 2 0 0 0-2-2H9.5`, key: `yhw86o` }], [`path`, { d: `M16 2v4`, key: `4m81vk` }], [`path`, { d: `M3 10h7`, key: `1wap6i` }], [`path`, { d: `M21 10h-5.5`, key: `quycpq` }], [`path`, { d: `m2 2 20 20`, key: `1ooewy` }]]);
  var D = x(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]);
  x(`chevron-down`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]), x(`chevron-up`, [[`path`, { d: `m18 15-6-6-6 6`, key: `153udz` }]]);
  var O = x(`circle-check`, [[`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }], [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }]]);
  var k = x(`circle-x`, [[`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }], [`path`, { d: `m15 9-6 6`, key: `1uzhvr` }], [`path`, { d: `m9 9 6 6`, key: `z0biqf` }]]);
  x(`circle`, [[`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }]]), x(`clipboard-check`, [[`rect`, { width: `8`, height: `4`, x: `8`, y: `2`, rx: `1`, ry: `1`, key: `tgr4d6` }], [`path`, { d: `M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`, key: `116196` }], [`path`, { d: `m9 14 2 2 4-4`, key: `df797q` }]]);
  var ee = x(`clipboard-copy`, [[`rect`, { width: `8`, height: `4`, x: `8`, y: `2`, rx: `1`, ry: `1`, key: `tgr4d6` }], [`path`, { d: `M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2`, key: `4jdomd` }], [`path`, { d: `M16 4h2a2 2 0 0 1 2 2v4`, key: `3hqy98` }], [`path`, { d: `M21 14H11`, key: `1bme5i` }], [`path`, { d: `m15 10-4 4 4 4`, key: `5dvupr` }]]);
  x(`clipboard-list`, [[`rect`, { width: `8`, height: `4`, x: `8`, y: `2`, rx: `1`, ry: `1`, key: `tgr4d6` }], [`path`, { d: `M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`, key: `116196` }], [`path`, { d: `M12 11h4`, key: `1jrz19` }], [`path`, { d: `M12 16h4`, key: `n85exb` }], [`path`, { d: `M8 11h.01`, key: `1dfujw` }], [`path`, { d: `M8 16h.01`, key: `18s6g9` }]]), x(`clipboard`, [[`rect`, { width: `8`, height: `4`, x: `8`, y: `2`, rx: `1`, ry: `1`, key: `tgr4d6` }], [`path`, { d: `M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`, key: `116196` }]]);
  var te = x(`clock-3`, [[`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }], [`path`, { d: `M12 6v6h4`, key: `135r8i` }]]);
  x(`combine`, [[`path`, { d: `M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1`, key: `1l7d7l` }], [`path`, { d: `M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1`, key: `9955pe` }], [`path`, { d: `m7 15 3 3`, key: `4hkfgk` }], [`path`, { d: `m7 21 3-3H5a2 2 0 0 1-2-2v-2`, key: `1xljwe` }], [`rect`, { x: `14`, y: `14`, width: `7`, height: `7`, rx: `1`, key: `1cdgtw` }], [`rect`, { x: `3`, y: `3`, width: `7`, height: `7`, rx: `1`, key: `zi3rio` }]]);
  var ne = x(`compass`, [[`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }], [`path`, { d: `m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`, key: `9ktpf1` }]]);
  var re = x(`copy`, [[`rect`, { width: `14`, height: `14`, x: `8`, y: `8`, rx: `2`, ry: `2`, key: `17jyea` }], [`path`, { d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`, key: `zix9uf` }]]);
  x(`corner-down-right`, [[`path`, { d: `m15 10 5 5-5 5`, key: `qqa56n` }], [`path`, { d: `M4 4v7a4 4 0 0 0 4 4h12`, key: `z08zvw` }]]), x(`corner-left-up`, [[`path`, { d: `M14 9 9 4 4 9`, key: `1af5af` }], [`path`, { d: `M20 20h-7a4 4 0 0 1-4-4V4`, key: `1blwi3` }]]), x(`crosshair`, [[`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }], [`line`, { x1: `22`, x2: `18`, y1: `12`, y2: `12`, key: `l9bcsi` }], [`line`, { x1: `6`, x2: `2`, y1: `12`, y2: `12`, key: `13hhkx` }], [`line`, { x1: `12`, x2: `12`, y1: `6`, y2: `2`, key: `10w3f3` }], [`line`, { x1: `12`, x2: `12`, y1: `22`, y2: `18`, key: `15g9kq` }]]), x(`database-backup`, [[`ellipse`, { cx: `12`, cy: `5`, rx: `9`, ry: `3`, key: `msslwz` }], [`path`, { d: `M3 12a9 3 0 0 0 5 2.69`, key: `1ui2ym` }], [`path`, { d: `M21 9.3V5`, key: `6k6cib` }], [`path`, { d: `M3 5v14a9 3 0 0 0 6.47 2.88`, key: `i62tjy` }], [`path`, { d: `M12 12v4h4`, key: `1bxaet` }], [`path`, { d: `M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16`, key: `1f4ei9` }]]), x(`dices`, [[`rect`, { width: `12`, height: `12`, x: `2`, y: `10`, rx: `2`, ry: `2`, key: `6agr2n` }], [`path`, { d: `m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6`, key: `1o487t` }], [`path`, { d: `M6 18h.01`, key: `uhywen` }], [`path`, { d: `M10 14h.01`, key: `ssrbsk` }], [`path`, { d: `M15 6h.01`, key: `cblpky` }], [`path`, { d: `M18 9h.01`, key: `2061c0` }]]), x(`door-open`, [[`path`, { d: `M11 20H2`, key: `nlcfvz` }], [`path`, { d: `M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z`, key: `au4z13` }], [`path`, { d: `M11 4H8a2 2 0 0 0-2 2v14`, key: `74r1mk` }], [`path`, { d: `M14 12h.01`, key: `1jfl7z` }], [`path`, { d: `M22 20h-3`, key: `vhrsz` }]]);
  var ie = x(`download`, [[`path`, { d: `M12 15V3`, key: `m9g1x1` }], [`path`, { d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`, key: `ih7n3h` }], [`path`, { d: `m7 10 5 5 5-5`, key: `brsn70` }]]);
  var ae = x(`eraser`, [[`path`, { d: `M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21`, key: `g5wo59` }], [`path`, { d: `m5.082 11.09 8.828 8.828`, key: `1wx5vj` }]]);
  x(`external-link`, [[`path`, { d: `M15 3h6v6`, key: `1q9fwt` }], [`path`, { d: `M10 14 21 3`, key: `gplh6r` }], [`path`, { d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`, key: `a6xqqp` }]]);
  var A = x(`eye-off`, [[`path`, { d: `M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`, key: `ct8e1f` }], [`path`, { d: `M14.084 14.158a3 3 0 0 1-4.242-4.242`, key: `151rxh` }], [`path`, { d: `M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`, key: `13bj9a` }], [`path`, { d: `m2 2 20 20`, key: `1ooewy` }]]);
  x(`eye`, [[`path`, { d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`, key: `1nclc0` }], [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }]]);
  var j = x(`file-down`, [[`path`, { d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`, key: `1oefj6` }], [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }], [`path`, { d: `M12 18v-6`, key: `17g6i2` }], [`path`, { d: `m9 15 3 3 3-3`, key: `1npd3o` }]]);
  var oe = x(`file-input`, [[`path`, { d: `M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1`, key: `1q9hii` }], [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }], [`path`, { d: `M2 15h10`, key: `jfw4w8` }], [`path`, { d: `m9 18 3-3-3-3`, key: `112psh` }]]);
  var se = x(`file-output`, [[`path`, { d: `M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127`, key: `wfxp4w` }], [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }], [`path`, { d: `m5 11-3 3`, key: `1dgrs4` }], [`path`, { d: `m5 17-3-3h10`, key: `1mvvaf` }]]);
  x(`file-plus-corner`, [[`path`, { d: `M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35`, key: `17jvcc` }], [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }], [`path`, { d: `M14 19h6`, key: `bvotb8` }], [`path`, { d: `M17 16v6`, key: `18yu1i` }]]);
  var ce = x(`file-spreadsheet`, [[`path`, { d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`, key: `1oefj6` }], [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }], [`path`, { d: `M8 13h2`, key: `yr2amv` }], [`path`, { d: `M14 13h2`, key: `un5t4a` }], [`path`, { d: `M8 17h2`, key: `2yhykz` }], [`path`, { d: `M14 17h2`, key: `10kma7` }]]);
  x(`flame`, [[`path`, { d: `M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`, key: `1slcih` }]]), x(`folder-cog`, [[`path`, { d: `M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3`, key: `128dxu` }], [`path`, { d: `m14.305 19.53.923-.382`, key: `3m78fa` }], [`path`, { d: `m15.228 16.852-.923-.383`, key: `npixar` }], [`path`, { d: `m16.852 15.228-.383-.923`, key: `5xggr7` }], [`path`, { d: `m16.852 20.772-.383.924`, key: `dpfhf9` }], [`path`, { d: `m19.148 15.228.383-.923`, key: `1reyyz` }], [`path`, { d: `m19.53 21.696-.382-.924`, key: `1goivc` }], [`path`, { d: `m20.772 16.852.924-.383`, key: `htqkph` }], [`path`, { d: `m20.772 19.148.924.383`, key: `9w9pjp` }], [`circle`, { cx: `18`, cy: `18`, r: `3`, key: `1xkwt0` }]]);
  var le = x(`folder-open`, [[`path`, { d: `m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2`, key: `usdka0` }]]);
  var ue = x(`funnel-x`, [[`path`, { d: `M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473`, key: `ol2ft2` }], [`path`, { d: `m16.5 3.5 5 5`, key: `15e6fa` }], [`path`, { d: `m21.5 3.5-5 5`, key: `m0lwru` }]]);
  x(`funnel`, [[`path`, { d: `M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z`, key: `sc7q7i` }]]), x(`gauge`, [[`path`, { d: `m12 14 4-4`, key: `9kzdfg` }], [`path`, { d: `M3.34 19a10 10 0 1 1 17.32 0`, key: `19p75a` }]]);
  var de = x(`grid-3x3`, [[`rect`, { width: `18`, height: `18`, x: `3`, y: `3`, rx: `2`, key: `afitv7` }], [`path`, { d: `M3 9h18`, key: `1pudct` }], [`path`, { d: `M3 15h18`, key: `5xshup` }], [`path`, { d: `M9 3v18`, key: `fh3hqa` }], [`path`, { d: `M15 3v18`, key: `14nvp0` }]]);
  x(`history`, [[`path`, { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` }], [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }], [`path`, { d: `M12 7v5l4 2`, key: `1fdv2h` }]]);
  var fe = x(`image-down`, [[`path`, { d: `M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21`, key: `9csbqa` }], [`path`, { d: `m14 19 3 3v-5.5`, key: `9ldu5r` }], [`path`, { d: `m17 22 3-3`, key: `1nkfve` }], [`circle`, { cx: `9`, cy: `9`, r: `2`, key: `af1f0g` }]]);
  var M = x(`inbox`, [[`polyline`, { points: `22 12 16 12 14 15 10 15 8 12 2 12`, key: `o97t9d` }], [`path`, { d: `M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`, key: `oot6mr` }]]);
  var pe = x(`info`, [[`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }], [`path`, { d: `M12 16v-4`, key: `1dtifu` }], [`path`, { d: `M12 8h.01`, key: `e9boi3` }]]);
  x(`layers`, [[`path`, { d: `M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`, key: `zw3jo` }], [`path`, { d: `M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`, key: `1wduqc` }], [`path`, { d: `M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`, key: `kqbvx6` }]]), x(`layout-grid`, [[`rect`, { width: `7`, height: `7`, x: `3`, y: `3`, rx: `1`, key: `1g98yp` }], [`rect`, { width: `7`, height: `7`, x: `14`, y: `3`, rx: `1`, key: `6d4xhi` }], [`rect`, { width: `7`, height: `7`, x: `14`, y: `14`, rx: `1`, key: `nxv5o0` }], [`rect`, { width: `7`, height: `7`, x: `3`, y: `14`, rx: `1`, key: `1bb6yr` }]]), x(`layout-list`, [[`rect`, { width: `7`, height: `7`, x: `3`, y: `3`, rx: `1`, key: `1g98yp` }], [`rect`, { width: `7`, height: `7`, x: `3`, y: `14`, rx: `1`, key: `1bb6yr` }], [`path`, { d: `M14 4h7`, key: `3xa0d5` }], [`path`, { d: `M14 9h7`, key: `1icrd9` }], [`path`, { d: `M14 15h7`, key: `1mj8o2` }], [`path`, { d: `M14 20h7`, key: `11slyb` }]]);
  var N = x(`lightbulb`, [[`path`, { d: `M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`, key: `1gvzjb` }], [`path`, { d: `M9 18h6`, key: `x1upvd` }], [`path`, { d: `M10 22h4`, key: `ceow96` }]]);
  x(`link-2`, [[`path`, { d: `M9 17H7A5 5 0 0 1 7 7h2`, key: `8i5ue5` }], [`path`, { d: `M15 7h2a5 5 0 1 1 0 10h-2`, key: `1b9ql8` }], [`line`, { x1: `8`, x2: `16`, y1: `12`, y2: `12`, key: `1jonct` }]]), x(`list-checks`, [[`path`, { d: `M13 5h8`, key: `a7qcls` }], [`path`, { d: `M13 12h8`, key: `h98zly` }], [`path`, { d: `M13 19h8`, key: `c3s6r1` }], [`path`, { d: `m3 17 2 2 4-4`, key: `1jhpwq` }], [`path`, { d: `m3 7 2 2 4-4`, key: `1obspn` }]]);
  var me = x(`link`, [[`path`, { d: `M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71`, key: `1cjeqo` }], [`path`, { d: `M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71`, key: `19qd67` }]]);
  x(`list-ordered`, [[`path`, { d: `M11 5h10`, key: `1cz7ny` }], [`path`, { d: `M11 12h10`, key: `1438ji` }], [`path`, { d: `M11 19h10`, key: `11t30w` }], [`path`, { d: `M4 4h1v5`, key: `10yrso` }], [`path`, { d: `M4 9h2`, key: `r1h2o0` }], [`path`, { d: `M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02`, key: `xtkcd5` }]]), x(`list-plus`, [[`path`, { d: `M16 5H3`, key: `m91uny` }], [`path`, { d: `M11 12H3`, key: `51ecnj` }], [`path`, { d: `M16 19H3`, key: `zzsher` }], [`path`, { d: `M18 9v6`, key: `1twb98` }], [`path`, { d: `M21 12h-6`, key: `bt1uis` }]]);
  var he = x(`loader-circle`, [[`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }]]);
  x(`lock-open`, [[`rect`, { width: `18`, height: `11`, x: `3`, y: `11`, rx: `2`, ry: `2`, key: `1w4ew1` }], [`path`, { d: `M7 11V7a5 5 0 0 1 9.9-1`, key: `1mm8w8` }]]), x(`lock`, [[`rect`, { width: `18`, height: `11`, x: `3`, y: `11`, rx: `2`, ry: `2`, key: `1w4ew1` }], [`path`, { d: `M7 11V7a5 5 0 0 1 10 0v4`, key: `fwvmzm` }]]);
  var ge = x(`map`, [[`path`, { d: `M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z`, key: `169xi5` }], [`path`, { d: `M15 5.764v15`, key: `1pn4in` }], [`path`, { d: `M9 3.236v15`, key: `1uimfh` }]]);
  var _e = x(`maximize-2`, [[`path`, { d: `M15 3h6v6`, key: `1q9fwt` }], [`path`, { d: `m21 3-7 7`, key: `1l2asr` }], [`path`, { d: `m3 21 7-7`, key: `tjx5ai` }], [`path`, { d: `M9 21H3v-6`, key: `wtvkvv` }]]);
  var ve = x(`minus`, [[`path`, { d: `M5 12h14`, key: `1ays0h` }]]);
  var ye = x(`monitor-smartphone`, [[`path`, { d: `M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8`, key: `10dyio` }], [`path`, { d: `M10 19v-3.96 3.15`, key: `1irgej` }], [`path`, { d: `M7 19h5`, key: `qswx4l` }], [`rect`, { width: `6`, height: `10`, x: `16`, y: `12`, rx: `2`, key: `1egngj` }]]);
  var be = x(`moon`, [[`path`, { d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`, key: `kfwtm` }]]);
  var xe = x(`package`, [[`path`, { d: `M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z`, key: `1a0edw` }], [`path`, { d: `M12 22V12`, key: `d0xqtd` }], [`polyline`, { points: `3.29 7 12 12 20.71 7`, key: `ousv84` }], [`path`, { d: `m7.5 4.27 9 5.15`, key: `1c824w` }]]);
  var Se = x(`palette`, [[`path`, { d: `M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`, key: `e79jfc` }], [`circle`, { cx: `13.5`, cy: `6.5`, r: `.5`, fill: `currentColor`, key: `1okk4w` }], [`circle`, { cx: `17.5`, cy: `10.5`, r: `.5`, fill: `currentColor`, key: `f64h9f` }], [`circle`, { cx: `6.5`, cy: `12.5`, r: `.5`, fill: `currentColor`, key: `qy21gx` }], [`circle`, { cx: `8.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `fotxhn` }]]);
  x(`pin`, [[`path`, { d: `M12 17v5`, key: `bb1du9` }], [`path`, { d: `M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`, key: `1nkz8b` }]]);
  var Ce = x(`play`, [[`path`, { d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`, key: `10ikf1` }]]);
  x(`plus`, [[`path`, { d: `M5 12h14`, key: `1ays0h` }], [`path`, { d: `M12 5v14`, key: `s699le` }]]), x(`printer`, [[`path`, { d: `M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`, key: `143wyd` }], [`path`, { d: `M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`, key: `1itne7` }], [`rect`, { x: `6`, y: `14`, width: `12`, height: `8`, rx: `1`, key: `1ue0tg` }]]), x(`puzzle`, [[`path`, { d: `M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z`, key: `w46dr5` }]]);
  var we = x(`redo-2`, [[`path`, { d: `m15 14 5-5-5-5`, key: `12vg1m` }], [`path`, { d: `M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13`, key: `6uklza` }]]);
  var Te = x(`refresh-cw`, [[`path`, { d: `M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`, key: `v9h5vc` }], [`path`, { d: `M21 3v5h-5`, key: `1q7to0` }], [`path`, { d: `M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`, key: `3uifl3` }], [`path`, { d: `M8 16H3v5`, key: `1cv678` }]]);
  var Ee = x(`rocket`, [[`path`, { d: `M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5`, key: `qeys4` }], [`path`, { d: `M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09`, key: `u4xsad` }], [`path`, { d: `M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z`, key: `676m9` }], [`path`, { d: `M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05`, key: `92ym6u` }]]);
  var De = x(`rotate-ccw`, [[`path`, { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` }], [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }]]);
  x(`rows-3`, [[`rect`, { width: `18`, height: `18`, x: `3`, y: `3`, rx: `2`, key: `afitv7` }], [`path`, { d: `M21 9H3`, key: `1338ky` }], [`path`, { d: `M21 15H3`, key: `9uk58r` }]]), x(`save`, [[`path`, { d: `M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`, key: `1c8476` }], [`path`, { d: `M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`, key: `1ydtos` }], [`path`, { d: `M7 3v4a1 1 0 0 0 1 1h7`, key: `t51u73` }]]), x(`scale`, [[`path`, { d: `M12 3v18`, key: `108xh3` }], [`path`, { d: `m19 8 3 8a5 5 0 0 1-6 0zV7`, key: `zcdpyk` }], [`path`, { d: `M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1`, key: `1yorad` }], [`path`, { d: `m5 8 3 8a5 5 0 0 1-6 0zV7`, key: `eua70x` }], [`path`, { d: `M7 21h10`, key: `1b0cd5` }]]), x(`scissors`, [[`circle`, { cx: `6`, cy: `6`, r: `3`, key: `1lh9wr` }], [`path`, { d: `M8.12 8.12 12 12`, key: `1alkpv` }], [`path`, { d: `M20 4 8.12 15.88`, key: `xgtan2` }], [`circle`, { cx: `6`, cy: `18`, r: `3`, key: `fqmcym` }], [`path`, { d: `M14.8 14.8 20 20`, key: `ptml3r` }]]);
  var Oe = x(`search`, [[`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }], [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }]]);
  var ke = x(`send`, [[`path`, { d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`, key: `1ffxy3` }], [`path`, { d: `m21.854 2.147-10.94 10.939`, key: `12cjpa` }]]);
  var Ae = x(`settings-2`, [[`path`, { d: `M14 17H5`, key: `gfn3mx` }], [`path`, { d: `M19 7h-9`, key: `6i9tg` }], [`circle`, { cx: `17`, cy: `17`, r: `3`, key: `18b49y` }], [`circle`, { cx: `7`, cy: `7`, r: `3`, key: `dfmy0x` }]]);
  var je = x(`settings`, [[`path`, { d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`, key: `1i5ecw` }], [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }]]);
  var Me = x(`shield-check`, [[`path`, { d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`, key: `oel41y` }], [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }]]);
  x(`shuffle`, [[`path`, { d: `m18 14 4 4-4 4`, key: `10pe0f` }], [`path`, { d: `m18 2 4 4-4 4`, key: `pucp1d` }], [`path`, { d: `M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22`, key: `1ailkh` }], [`path`, { d: `M2 6h1.972a4 4 0 0 1 3.6 2.2`, key: `km57vx` }], [`path`, { d: `M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45`, key: `os18l9` }]]), x(`sparkles`, [[`path`, { d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`, key: `1s2grr` }], [`path`, { d: `M20 2v4`, key: `1rf3ol` }], [`path`, { d: `M22 4h-4`, key: `gwowj6` }], [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }]]), x(`square`, [[`rect`, { width: `18`, height: `18`, x: `3`, y: `3`, rx: `2`, key: `afitv7` }]]);
  var Ne = x(`sun`, [[`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }], [`path`, { d: `M12 2v2`, key: `tus03m` }], [`path`, { d: `M12 20v2`, key: `1lh1kg` }], [`path`, { d: `m4.93 4.93 1.41 1.41`, key: `149t6j` }], [`path`, { d: `m17.66 17.66 1.41 1.41`, key: `ptbguv` }], [`path`, { d: `M2 12h2`, key: `1t8f8n` }], [`path`, { d: `M20 12h2`, key: `1q8mjw` }], [`path`, { d: `m6.34 17.66-1.41 1.41`, key: `1m8zz5` }], [`path`, { d: `m19.07 4.93-1.41 1.41`, key: `1shlcs` }]]);
  x(`table-2`, [[`path`, { d: `M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18`, key: `gugj83` }]]);
  var Pe = x(`trash-2`, [[`path`, { d: `M10 11v6`, key: `nco0om` }], [`path`, { d: `M14 11v6`, key: `outv1u` }], [`path`, { d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`, key: `miytrc` }], [`path`, { d: `M3 6h18`, key: `d0wm0j` }], [`path`, { d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`, key: `e791ji` }]]);
  var Fe = x(`triangle-alert`, [[`path`, { d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`, key: `wmoenq` }], [`path`, { d: `M12 9v4`, key: `juzpu7` }], [`path`, { d: `M12 17h.01`, key: `p32p05` }]]);
  x(`trophy`, [[`path`, { d: `M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978`, key: `1n3hpd` }], [`path`, { d: `M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978`, key: `rfe1zi` }], [`path`, { d: `M18 9h1.5a1 1 0 0 0 0-5H18`, key: `7xy6bh` }], [`path`, { d: `M4 22h16`, key: `57wxv0` }], [`path`, { d: `M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`, key: `1mhfuq` }], [`path`, { d: `M6 9H4.5a1 1 0 0 1 0-5H6`, key: `tex48p` }]]);
  var Ie = x(`undo-2`, [[`path`, { d: `M9 14 4 9l5-5`, key: `102s5s` }], [`path`, { d: `M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11`, key: `f3b9sd` }]]);
  var P = x(`upload`, [[`path`, { d: `M12 3v12`, key: `1x0j5s` }], [`path`, { d: `m17 8-5-5-5 5`, key: `7q97r8` }], [`path`, { d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`, key: `ih7n3h` }]]);
  var Le = x(`user-plus`, [[`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }], [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }], [`line`, { x1: `19`, x2: `19`, y1: `8`, y2: `14`, key: `1bvyxn` }], [`line`, { x1: `22`, x2: `16`, y1: `11`, y2: `11`, key: `1shjgl` }]]);
  var Re = x(`user-x`, [[`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }], [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }], [`line`, { x1: `17`, x2: `22`, y1: `8`, y2: `13`, key: `3nzzx3` }], [`line`, { x1: `22`, x2: `17`, y1: `8`, y2: `13`, key: `1swrse` }]]);
  x(`user`, [[`path`, { d: `M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`, key: `975kel` }], [`circle`, { cx: `12`, cy: `7`, r: `4`, key: `17ys0d` }]]);
  var ze = x(`users`, [[`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }], [`path`, { d: `M16 3.128a4 4 0 0 1 0 7.744`, key: `16gr8j` }], [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }], [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }]]);
  x(`wand-sparkles`, [[`path`, { d: `m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72`, key: `ul74o6` }], [`path`, { d: `m14 7 3 3`, key: `1r5n42` }], [`path`, { d: `M5 6v4`, key: `ilb8ba` }], [`path`, { d: `M19 14v4`, key: `blhpug` }], [`path`, { d: `M10 2v2`, key: `7u0qdc` }], [`path`, { d: `M7 8H3`, key: `zfb6yr` }], [`path`, { d: `M21 16h-4`, key: `1cnmox` }], [`path`, { d: `M11 3H9`, key: `1obp7u` }]]);
  var F = x(`waypoints`, [[`path`, { d: `m10.586 5.414-5.172 5.172`, key: `4mc350` }], [`path`, { d: `m18.586 13.414-5.172 5.172`, key: `8c96vv` }], [`path`, { d: `M6 12h12`, key: `8npq4p` }], [`circle`, { cx: `12`, cy: `20`, r: `2`, key: `144qzu` }], [`circle`, { cx: `12`, cy: `4`, r: `2`, key: `muu5ef` }], [`circle`, { cx: `20`, cy: `12`, r: `2`, key: `1xzzfp` }], [`circle`, { cx: `4`, cy: `12`, r: `2`, key: `1hvhnz` }]]);
  x(`wrench`, [[`path`, { d: `M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z`, key: `1ngwbx` }]]);
  var Be = x(`x`, [[`path`, { d: `M18 6 6 18`, key: `1bl5f8` }], [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }]]);
  var Ve = x(`zap`, [[`path`, { d: `M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`, key: `1xq2db` }]]);
  function He(e2) {
    var t2, n3, r3 = ``;
    if (typeof e2 == `string` || typeof e2 == `number`) r3 += e2;
    else if (typeof e2 == `object`) if (Array.isArray(e2)) {
      var i3 = e2.length;
      for (t2 = 0; t2 < i3; t2++) e2[t2] && (n3 = He(e2[t2])) && (r3 && (r3 += ` `), r3 += n3);
    } else for (n3 in e2) e2[n3] && (r3 && (r3 += ` `), r3 += n3);
    return r3;
  }
  function I() {
    for (var e2, t2, n3 = 0, r3 = ``, i3 = arguments.length; n3 < i3; n3++) (e2 = arguments[n3]) && (t2 = He(e2)) && (r3 && (r3 += ` `), r3 += t2);
    return r3;
  }
  var Ue = `modulepreload`;
  var We = function(e2) {
    return `/matrix/` + e2;
  };
  var Ge = {};
  var Ke = function(e2, t2, n3) {
    let r3 = Promise.resolve();
    if (t2 && t2.length > 0) {
      let o3 = function(e4) {
        return Promise.all(e4.map((e5) => Promise.resolve(e5).then((e6) => ({ status: `fulfilled`, value: e6 }), (e6) => ({ status: `rejected`, reason: e6 }))));
      };
      let e3 = document.getElementsByTagName(`link`), i4 = document.querySelector(`meta[property=csp-nonce]`), a3 = i4?.nonce || i4?.getAttribute(`nonce`);
      r3 = o3(t2.map((t3) => {
        if (t3 = We(t3, n3), t3 in Ge) return;
        Ge[t3] = true;
        let r4 = t3.endsWith(`.css`), i5 = r4 ? `[rel="stylesheet"]` : ``;
        if (n3) for (let n4 = e3.length - 1; n4 >= 0; n4--) {
          let i6 = e3[n4];
          if (i6.href === t3 && (!r4 || i6.rel === `stylesheet`)) return;
        }
        else if (document.querySelector(`link[href="${t3}"]${i5}`)) return;
        let o4 = document.createElement(`link`);
        if (o4.rel = r4 ? `stylesheet` : Ue, r4 || (o4.as = `script`), o4.crossOrigin = ``, o4.href = t3, a3 && o4.setAttribute(`nonce`, a3), document.head.appendChild(o4), r4) return new Promise((e4, n4) => {
          o4.addEventListener(`load`, e4), o4.addEventListener(`error`, () => n4(Error(`Unable to preload CSS for ${t3}`)));
        });
      }));
    }
    function i3(e3) {
      let t3 = new Event(`vite:preloadError`, { cancelable: true });
      if (t3.payload = e3, window.dispatchEvent(t3), !t3.defaultPrevented) throw e3;
    }
    return r3.then((t3) => {
      for (let e3 of t3 || []) e3.status === `rejected` && i3(e3.reason);
      return e2().catch(i3);
    });
  };
  function qe(e2) {
    let t2 = {};
    return e2.map((e3) => {
      let n3 = e3.trim();
      return t2[n3] ? (t2[n3]++, `${n3}_${t2[n3]}`) : (t2[n3] = 1, n3);
    });
  }
  function Je(e2) {
    let t2 = [], n3 = ``, r3 = false;
    for (let i3 = 0; i3 < e2.length; i3++) {
      let a3 = e2[i3];
      a3 === `"` ? r3 && e2[i3 + 1] === `"` ? (n3 += `"`, i3++) : r3 = !r3 : a3 === `,` && !r3 ? (t2.push(n3.trim()), n3 = ``) : n3 += a3;
    }
    return t2.push(n3.trim()), t2;
  }
  function Ye(e2) {
    let t2 = e2.split(/\r?\n/);
    if (!t2.length) return [];
    let n3 = qe(Je(t2[0])), r3 = [];
    for (let e3 = 1; e3 < t2.length; e3++) {
      if (!t2[e3].trim()) continue;
      let i3 = Je(t2[e3]), a3 = {};
      n3.forEach((e4, t3) => a3[e4] = i3[t3] || ``), r3.push(a3);
    }
    return r3;
  }
  function Xe(e2, t2) {
    let n3 = t2(e2, { header: 1, defval: `` });
    if (!n3.length) return [];
    let r3 = qe(n3[0].map((e3) => String(e3 ?? ``))), i3 = [];
    for (let e3 = 1; e3 < n3.length; e3++) {
      let t3 = n3[e3];
      if (!t3 || t3.every((e4) => e4 === `` || e4 === void 0)) continue;
      let a3 = {};
      r3.forEach((e4, n4) => {
        if (!e4) return;
        let r4 = t3[n4];
        a3[e4] = r4 === void 0 ? `` : r4;
      }), i3.push(a3);
    }
    return i3;
  }
  async function Ze(e2) {
    if (e2.name.toLowerCase().endsWith(`.csv`)) return Ye(await e2.text());
    let t2 = await Ke(() => import("./xlsx-CKkngM-o.js"), []), n3 = await e2.arrayBuffer(), r3 = t2.read(n3, { type: `array` });
    for (let e3 of r3.SheetNames) {
      let n4 = Xe(r3.Sheets[e3], t2.utils.sheet_to_json);
      if (n4.length) return n4;
    }
    return [];
  }
  var Qe = (e2) => {
    let t2, n3 = /* @__PURE__ */ new Set(), r3 = (e3, r4) => {
      let i4 = typeof e3 == `function` ? e3(t2) : e3;
      if (!Object.is(i4, t2)) {
        let e4 = t2;
        t2 = r4 ?? (typeof i4 != `object` || !i4) ? i4 : Object.assign({}, t2, i4), n3.forEach((n4) => n4(t2, e4));
      }
    }, i3 = () => t2, a3 = { setState: r3, getState: i3, getInitialState: () => o3, subscribe: (e3) => (n3.add(e3), () => n3.delete(e3)) }, o3 = t2 = e2(r3, i3, a3);
    return a3;
  };
  var $e = ((e2) => e2 ? Qe(e2) : Qe);
  var et = (e2) => e2;
  function tt(e2, t2 = et) {
    let n3 = u.useSyncExternalStore(e2.subscribe, u.useCallback(() => t2(e2.getState()), [e2, t2]), u.useCallback(() => t2(e2.getInitialState()), [e2, t2]));
    return u.useDebugValue(n3), n3;
  }
  var nt = (e2) => {
    let t2 = $e(e2), n3 = (e3) => tt(t2, e3);
    return Object.assign(n3, t2), n3;
  };
  var rt = ((e2) => e2 ? nt(e2) : nt);
  var it = { "الفصل التدريبي الأول": 1, "الفصل التدريبي الأول ": 1, "الفصل التدريبي الثاني": 2, "الفصل التدريبي الثاني ": 2, "الفصل التدريبي الثالث": 3, "الفصل التدريبي الثالث ": 3, "الفصل التدريبي الرابع": 4, "الفصل التدريبي الرابع ": 4, "الفصل التدريبي الخامس": 5, "الفصل التدريبي الخامس ": 5, "الفصل التدريبي السادس": 6, "الفصل التدريبي السادس ": 6 };
  var at = { critical: 1, medium: 2, short: 3, standalone: 4 };
  var ot = 2.5;
  var st = 3e3;
  function ct(e2) {
    return String(e2).replace(/[أإآ]/g, `ا`);
  }
  function lt(e2) {
    return String(e2).replace(/[\s\-_]+/g, ``).toUpperCase();
  }
  function ut(e2, t2) {
    let n3 = lt(e2);
    if (t2[e2]) return e2;
    for (let e3 of Object.keys(t2)) if (lt(e3) === n3) return e3;
    return null;
  }
  function dt(e2, t2, n3) {
    if (!e2 || e2 === `-` || e2.includes(`جميع`)) return [];
    let r3 = [];
    return e2.split(/[\s,،/]+/).forEach((e3) => {
      let i3 = e3.trim();
      if (i3 && i3 !== `-` && i3 !== t2) {
        let e4 = ut(i3, n3);
        e4 && e4 !== t2 && r3.push(e4);
      }
    }), r3;
  }
  function ft(e2, t2, n3) {
    let r3 = { critical: [], medium: [], short: [], standalone: [] }, i3 = (e3, t3, n4 = /* @__PURE__ */ new Set()) => {
      if (n4.has(e3)) return 0;
      n4.add(e3);
      let r4 = t3(e3) || [];
      return r4.length === 0 ? 1 : 1 + Math.max(...r4.map((e4) => i3(e4, t3, new Set(n4))));
    };
    return Object.keys(e2).forEach((a3) => {
      if (e2[a3].semester === 5) return;
      let o3 = t2[a3] || [], s3 = n3[a3] || [], c3 = i3(a3, (e3) => t2[e3]) + i3(a3, (e3) => n3[e3]) - 1;
      o3.length === 0 && s3.length === 0 ? r3.standalone.push(a3) : c3 >= 4 ? r3.critical.push(a3) : c3 === 3 ? r3.medium.push(a3) : r3.short.push(a3);
    }), r3;
  }
  function pt(e2) {
    let t2 = {}, n3 = {}, r3 = {}, i3 = [], a3 = `الفصل التدريبي`;
    return e2[0]?.[`الفصل التدريبي_2`] && (a3 = `الفصل التدريبي_2`), e2.forEach((e3) => {
      let n4 = e3.المقرر;
      if (!n4) return;
      String(n4).includes(`>>`) && (n4 = String(n4).replace(/.*>>\s*/, ``).trim()), n4 = String(n4);
      let r4 = String(e3[a3] || e3[`الفصل التدريبي`] || ``).trim();
      r4 = r4.replace(/\d{4}/g, ``).trim();
      let o3 = it[r4] || 0;
      if (!o3) return;
      let s3 = String(e3[`اسم المقرر`] || ``), c3 = { code: n4, name: s3, credits: parseInt(String(e3[`و.م`])) || 0, theory: (parseInt(String(e3.مح)) || 0) + (parseInt(String(e3.تم)) || 0), practical: parseInt(String(e3.عم)) || 0, semester: o3, prereqRaw: String(e3[`المتطلب `] || e3.المتطلب || `-`) };
      if (ct(s3).includes(`المشروع الانتاجي`)) {
        i3.push(c3);
        return;
      }
      t2[n4] = c3;
    }), Object.keys(t2).forEach((e3) => {
      n3[e3] = dt(t2[e3].prereqRaw, e3, t2);
    }), Object.keys(t2).forEach((e3) => r3[e3] = []), Object.keys(n3).forEach((e3) => {
      n3[e3].forEach((t3) => {
        r3[t3] && r3[t3].push(e3);
      });
    }), { coursesData: t2, prerequisites: n3, dependents: r3, courseGroups: ft(t2, n3, r3), coopExtra: i3, reportTotals: { courses: parseInt(String(e2[0]?.المقررات ?? ``)) || 0, credits: parseInt(String(e2[0]?.[`الوحدات المعتمدة`] ?? ``)) || 0 } };
  }
  function mt(e2) {
    let t2 = {}, n3 = {};
    e2.forEach((e3) => {
      let t3 = e3.التخصص;
      if (!t3) return;
      let r3 = String(t3);
      n3[r3] || (n3[r3] = []), n3[r3].push(e3);
    });
    for (let [e3, r3] of Object.entries(n3)) t2[e3] = pt(r3);
    return t2;
  }
  function ht(e2) {
    let t2 = {};
    return e2.flatMap((e3) => e3.data).forEach((e3) => {
      let n3 = e3.التخصص, r3 = e3[`رقم المتدرب`], i3 = e3[`إسم المتدرب`], a3 = e3.المقرر, o3 = e3[`غير مسجل`], s3 = e3.مستوفى, c3 = e3[`المعدل التراكمي للبرنامج `] || e3[`المعدل التراكمي للبرنامج`] || ``;
      if (!n3 || !r3 || !a3) return;
      let l3 = String(n3), u2 = String(r3);
      t2[l3] || (t2[l3] = {}), t2[l3][u2] || (t2[l3][u2] = { name: String(i3 ?? ``), gpa: parseFloat(String(c3)) || 0, courses: {} });
      let d2;
      d2 = o3 === `نعم` && s3 === `نعم` ? `completed` : o3 === `نعم` && s3 === `لا` ? `notregistered` : (!o3 || o3 === ``) && s3 === `نعم` ? `registered` : `current`, t2[l3][u2].courses[String(a3)] = d2;
    }), t2;
  }
  function gt(e2) {
    let t2 = /* @__PURE__ */ new Set();
    for (let n3 of Object.values(e2)) for (let e3 in n3.courses) t2.add(e3);
    return t2;
  }
  function _t(e2, t2) {
    return Object.keys(t2).filter((n3) => e2[n3] && Object.keys(t2[n3]).length > 0).sort((e3, t3) => e3.localeCompare(t3, `ar`));
  }
  function vt(e2) {
    return e2 ? e2.includes(`مدمج`) ? `مدمج` : e2.includes(`ذاتي`) ? `ذاتي` : e2.includes(`تعاوني`) || e2.includes(`تدريب`) ? `تعاوني` : e2.includes(`عملي`) ? `عملي` : (e2.includes(`نظري`), `نظري`) : `نظري`;
  }
  function yt(e2) {
    return { نظري: `ن`, عملي: `ع`, مدمج: `م`, ذاتي: `ذ`, تعاوني: `ت` }[e2] || `ن`;
  }
  function bt(e2, t2) {
    return e2 === `نظري` ? `theory` : e2 === `عملي` ? `practical` : e2 === `تعاوني` ? `coop` : e2 === `مدمج` || e2 === `ذاتي` ? t2 > 0 ? `theory` : `practical` : `theory`;
  }
  function xt(e2) {
    let t2 = {}, n3 = {}, r3 = e2.length > 0 ? String(e2[0][`الفصل التدريبي`] || ``) : ``;
    return e2.forEach((e3) => {
      let r4 = String(e3.المقرر || ``), i3 = String(e3[`اسم المقرر`] || ``), a3 = String(e3[`الرقم المرجعي`] || ``), o3 = String(e3[`رقم المتدرب`] || ``), s3 = String(e3.التخصص || ``), c3 = String(e3.المدرب || ``), l3 = String(e3[`نوع الجدولة`] || ``), u2 = String(e3.القسم || ``), d2 = parseFloat(String(e3[`الساعات المعتمدة`])) || 0, f2 = String(e3.الدرجة || ``).trim();
      if (!r4 || !a3) return;
      if (o3 && f2) {
        let e4 = lt(r4);
        n3[e4] || (n3[e4] = {}), n3[e4][o3] || (n3[e4][o3] = f2);
      }
      let p2 = vt(l3), m2 = yt(p2), h2 = bt(p2, d2), g2 = `${r4}___${h2}`;
      t2[g2] || (t2[g2] = { code: r4, name: i3, courseType: h2, department: u2, sections: {}, specialties: {}, totalTrainees: 0 });
      let _2 = t2[g2];
      _2.sections[a3] || (_2.sections[a3] = { refNum: a3, trainees: /* @__PURE__ */ new Set(), instructor: c3, scheduleType: p2, typeBadge: m2, department: u2 }), o3 && (_2.sections[a3].trainees.add(o3), s3 && (_2.specialties[s3] || (_2.specialties[s3] = /* @__PURE__ */ new Set()), _2.specialties[s3].add(o3)));
    }), Object.values(t2).forEach((e3) => {
      let t3 = /* @__PURE__ */ new Set();
      Object.values(e3.sections).forEach((e4) => e4.trainees.forEach((e5) => t3.add(e5))), e3.totalTrainees = t3.size;
    }), { courses: t2, semester: r3, grades: n3 };
  }
  function St(e2) {
    let t2 = (e2 ?? ``).trim();
    if (!t2) return null;
    if (t2.includes(`ح`)) return `barred`;
    if (t2.includes(`ه`)) return `failed`;
    let n3 = Number(t2);
    return Number.isFinite(n3) && n3 < 60 ? `failed` : null;
  }
  function Ct(e2, t2, n3) {
    if (!e2?.grades) return null;
    let r3 = e2.grades[lt(t2)]?.[n3];
    return St(r3);
  }
  function L(e2) {
    if (!e2?.grades) return false;
    for (let t2 of Object.values(e2.grades)) for (let e3 of Object.values(t2)) {
      let t3 = e3.trim();
      if (t3 !== `` && Number.isFinite(Number(t3))) return true;
    }
    return false;
  }
  function wt(e2, t2) {
    if (!e2?.grades) return 0;
    let n3 = 0;
    for (let r3 of Object.values(e2.grades)) St(r3[t2]) === `barred` && n3++;
    return n3;
  }
  function Tt(e2) {
    if (!e2?.grades) return false;
    for (let t2 of Object.values(e2.grades)) for (let e3 of Object.values(t2)) if (St(e3) === `barred`) return true;
    return false;
  }
  function Et(e2, t2, n3) {
    if (n3.registrationPhase === `open` || !t2?.grades || Object.keys(t2.grades).length === 0) return e2;
    let r3 = L(t2), i3 = {};
    for (let [a3, o3] of Object.entries(e2)) {
      let e3 = o3.courses, s3 = false;
      for (let [i4, c3] of Object.entries(o3.courses)) {
        if (c3 === `notregistered`) continue;
        let l3 = Ct(t2, i4, a3);
        l3 && (l3 === `failed` || l3 === `barred` && (r3 || n3.approvedBarring)) && (s3 ||= (e3 = { ...o3.courses }, true), e3[i4] = `notregistered`);
      }
      i3[a3] = s3 ? { ...o3, courses: e3 } : o3;
    }
    return i3;
  }
  function Dt(e2, t2, n3, r3) {
    return Et({ [t2]: e2 }, n3, r3)[t2];
  }
  var Ot = [`theory`, `practical`, `coop`];
  function kt(e2, t2) {
    let n3 = Ot.map((e3) => `${t2}___${e3}`).filter((t3) => e2.courses[t3]);
    if (n3.length) return n3;
    let r3 = lt(t2);
    return Object.keys(e2.courses).filter((t3) => lt(e2.courses[t3].code) === r3);
  }
  function At(e2, t2, n3) {
    if (!e2) return 0;
    let r3 = /* @__PURE__ */ new Set();
    return kt(e2, t2).forEach((t3) => {
      e2.courses[t3].specialties[n3]?.forEach((e3) => r3.add(e3));
    }), r3.size;
  }
  function jt(e2, t2, n3) {
    if (!e2) return [];
    let r3 = [];
    return kt(e2, t2).forEach((t3) => {
      let i3 = e2.courses[t3], a3 = Object.values(i3.sections), o3 = n3 ? i3.specialties[n3] : void 0;
      r3.push({ type: i3.courseType, typeBadge: a3[0]?.typeBadge || `ن`, sectionCount: a3.length, totalTrainees: i3.totalTrainees, specialtyTrainees: o3?.size || 0, department: i3.department });
    }), r3;
  }
  function Mt(e2, t2) {
    return e2 ? kt(e2, t2).some((t3) => e2.courses[t3].department.includes(`الدراسات العامة`)) : false;
  }
  function Nt(e2) {
    let t2 = {};
    return e2.forEach((e3) => {
      let n3 = String(e3[`الرقم التدريبي`] ?? ``).trim(), r3 = String(e3.المقرر ?? ``).trim();
      if (!n3 || !r3 || r3 === `-`) return;
      let i3 = lt(r3);
      i3 && (t2[n3] ??= /* @__PURE__ */ new Set()).add(i3);
    }), t2;
  }
  function Pt(e2, t2) {
    let n3 = (e3, t3, r3 = /* @__PURE__ */ new Set()) => {
      if (r3.has(e3)) return 0;
      r3.add(e3);
      let i3 = t3(e3) || [];
      return i3.length === 0 ? 1 : 1 + Math.max(...i3.map((e4) => n3(e4, t3, new Set(r3))));
    };
    return n3(e2, (e3) => t2.prerequisites[e3]) + n3(e2, (e3) => t2.dependents[e3]) - 1;
  }
  function Ft(e2, t2) {
    let n3 = t2.coursesData[e2];
    return !n3 || e2.includes(`288`) ? false : e2.includes(`299`) ? true : String(n3.name).replace(/[أإآ]/g, `ا`).includes(`التدريب التعاوني`);
  }
  function It(e2) {
    return e2.includes(`288`);
  }
  function Lt(e2) {
    return e2.includes(`288`);
  }
  function Rt(e2, t2, n3 = /* @__PURE__ */ new Set()) {
    if (n3.has(e2)) return [];
    n3.add(e2);
    let r3 = [];
    return (t2[e2] || []).forEach((e3) => {
      r3.push(e3), r3.push(...Rt(e3, t2, n3));
    }), [...new Set(r3)];
  }
  function zt(e2, t2, n3 = /* @__PURE__ */ new Set()) {
    if (n3.has(e2)) return [];
    n3.add(e2);
    let r3 = [];
    return (t2[e2] || []).forEach((e3) => {
      r3.push(e3), r3.push(...zt(e3, t2, n3));
    }), [...new Set(r3)];
  }
  function Bt(e2, t2) {
    if (t2.courseGroups) {
      for (let [n4, r4] of Object.entries(t2.courseGroups)) if (r4.includes(e2)) return n4;
    }
    let n3 = t2.prerequisites?.[e2] || [], r3 = t2.dependents?.[e2] || [];
    if (n3.length === 0 && r3.length === 0) return `standalone`;
    let i3 = Pt(e2, t2);
    return i3 >= 4 ? `critical` : i3 === 3 ? `long` : `short`;
  }
  function Vt(e2, t2 = null) {
    return Object.values(e2.coursesData).filter((e3) => !Lt(e3.code)).filter((e3) => !t2 || t2.has(e3.code)).map((t3) => ({ ...t3, group: Bt(t3.code, e2), chainLength: Pt(t3.code, e2) })).sort((e3, t3) => {
      if (e3.semester !== t3.semester) return e3.semester - t3.semester;
      let n3 = at[e3.group] || 4, r3 = at[t3.group] || 4;
      if (n3 !== r3) return n3 - r3;
      if (t3.chainLength !== e3.chainLength) return t3.chainLength - e3.chainLength;
      return String(e3.code).localeCompare(String(t3.code), `ar`);
    });
  }
  function Ht(e2) {
    let t2 = /* @__PURE__ */ new Set(), n3 = null;
    return e2.forEach((e3, r3) => {
      n3 !== null && e3.semester !== n3 && t2.add(r3), n3 = e3.semester;
    }), t2;
  }
  function Ut(e2, t2, n3 = null, r3 = 12, i3 = 24) {
    if (!t2) return { courses: [], credits: 0 };
    let a3 = [], o3 = 0, s3 = n3 || Object.values(t2.coursesData).sort((e3, t3) => e3.semester === t3.semester ? 0 : e3.semester - t3.semester), c3 = s3.find((e3) => Ft(e3.code, t2)), l3 = c3?.code, u2 = s3.filter((t3) => {
      let n4 = e2.courses[t3.code], r4 = n4 === `notregistered` || !n4;
      return It(t3.code) ? false : r4;
    }), d2 = u2.filter((n4) => Ft(n4.code, t2) ? false : (t2.prerequisites[n4.code] || []).every((t3) => {
      let n5 = e2.courses[t3];
      return n5 === `completed` || n5 === `registered` || n5 === `current`;
    })), f2 = u2.some((e3) => Ft(e3.code, t2)), p2 = u2.filter((e3) => !Ft(e3.code, t2)).length > d2.length;
    if (d2.length <= 1) return d2.forEach((e3) => {
      a3.push(e3.code), o3 += e3.credits;
    }), f2 && l3 && c3 && !p2 && (a3.push(l3), o3 += c3.credits), { courses: a3, credits: o3 };
    let m2 = /* @__PURE__ */ new Map();
    d2.forEach((e3) => {
      let t3 = m2.get(e3.semester);
      t3 ? t3.push(e3) : m2.set(e3.semester, [e3]);
    });
    let h2 = [...m2.keys()].sort((e3, t3) => e3 - t3);
    outer: for (let e3 of h2) {
      for (let t3 of m2.get(e3)) {
        if (o3 + t3.credits > i3) break outer;
        a3.push(t3.code), o3 += t3.credits;
      }
      if (o3 >= r3) break;
    }
    return { courses: a3, credits: o3 };
  }
  function Wt(e2, t2, n3 = null, r3, i3 = 12, a3 = 24, o3 = null) {
    if (!t2) return { courses: [], credits: 0 };
    let s3 = r3?.locked, c3 = r3?.overrides || /* @__PURE__ */ new Set(), l3 = r3?.removals || /* @__PURE__ */ new Set();
    if (s3) {
      let n4 = [], r4 = 0, i4 = (t3) => {
        let n5 = e2.courses[t3];
        return n5 !== `completed` && n5 !== `registered` && n5 !== `current`;
      };
      return s3.forEach((e3) => {
        !l3.has(e3) && t2.coursesData[e3] && i4(e3) && (n4.push(e3), r4 += t2.coursesData[e3].credits);
      }), c3.forEach((e3) => {
        !n4.includes(e3) && t2.coursesData[e3] && i4(e3) && (n4.push(e3), r4 += t2.coursesData[e3].credits);
      }), { courses: n4, credits: r4 };
    }
    if (o3) {
      let e3 = [], n4 = 0;
      return o3.forEach((r4) => {
        t2.coursesData[r4] && (e3.push(r4), n4 += t2.coursesData[r4].credits);
      }), { courses: e3, credits: n4 };
    }
    return Ut(e2, t2, n3, i3, a3);
  }
  var Gt = { mode: `unified`, lowBoundary: 2, highBoundary: 3, lowCap: 14, midCap: 18, highCap: 24 };
  function Kt(e2, t2, n3) {
    return !t2 || t2.mode !== `gpa` || e2 <= 0 ? n3 : e2 < t2.lowBoundary ? t2.lowCap : e2 < t2.highBoundary ? t2.midCap : t2.highCap;
  }
  var qt = 12;
  var Jt = 24;
  var Yt = 0.1;
  var Xt = (e2, t2, n3) => Math.min(n3, Math.max(t2, e2));
  var Zt = (e2) => Math.round(e2 * 10) / 10;
  function Qt(e2, t2, n3) {
    if (!Number.isFinite(n3)) return e2;
    switch (t2) {
      case `lowCap`:
        return { ...e2, lowCap: Xt(Math.round(n3), qt, e2.midCap) };
      case `midCap`:
        return { ...e2, midCap: Xt(Math.round(n3), e2.lowCap, e2.highCap) };
      case `highCap`:
        return { ...e2, highCap: Xt(Math.round(n3), e2.midCap, Jt) };
      case `lowBoundary`:
        return { ...e2, lowBoundary: Xt(Zt(n3), 0.1, Zt(e2.highBoundary - Yt)) };
      case `highBoundary`:
        return { ...e2, highBoundary: Xt(Zt(n3), Zt(e2.lowBoundary + Yt), 5) };
      default:
        return e2;
    }
  }
  function $t(e2) {
    let t2 = {};
    for (let n3 in e2.courses) {
      let r3 = e2.courses[n3];
      t2[n3] = r3 === `registered` || r3 === `current` ? `notregistered` : r3;
    }
    return { ...e2, courses: t2 };
  }
  function en(e2, t2, n3) {
    if (!n3 || n3.size === 0) return [];
    let r3 = [];
    return e2.forEach((e3) => {
      let i3 = t2.courses[e3.code];
      i3 !== `completed` && i3 !== `registered` && i3 !== `current` && n3.has(lt(e3.code)) && r3.push(e3.code);
    }), r3;
  }
  function tn({ plan: e2, trainees: t2, edits: n3, freshmanCount: r3, minTermCredits: i3 = 12, maxTermCredits: a3 = 24, creditCeiling: o3, expectedSource: s3 = `algorithm`, sf08: c3 = null, registrationPhase: l3 = `during` }) {
    let u2 = Vt(e2, gt(t2)), d2 = Ht(u2), f2 = 0;
    u2.forEach((e3) => {
      It(e3.code) || (f2 += e3.credits);
    });
    let p2 = c3 !== null, m2 = s3 === `rayat` && p2, h2 = l3 === `open`, g2 = {}, _2 = {}, v2 = {}, y2 = {}, b2 = {}, x2 = {};
    u2.forEach((e3) => x2[e3.code] = { registered: 0, expected: 0 }), Object.entries(t2).forEach(([t3, r4]) => {
      let s4 = 0, l4 = 0, d3 = 0;
      u2.forEach((t4) => {
        let n4 = r4.courses[t4.code];
        if (It(t4.code)) return;
        let i4 = false;
        n4 === `completed` ? (l4 += t4.credits, i4 = true) : (n4 === `registered` || n4 === `current`) && (s4 += t4.credits, x2[t4.code].registered++, h2 || (l4 += t4.credits, i4 = true)), !i4 && nn(t4, e2) && (d3 += t4.credits);
      }), g2[t3] = { registered: s4, remaining: Math.max(0, f2 - l4) }, _2[t3] = d3;
      let S3 = Kt(r4.gpa, o3, a3), C3 = h2 ? $t(r4) : r4, w3 = new Set(Ut(C3, e2, u2, i3, S3).courses), T3 = p2 ? en(u2, r4, c3?.[t3]) : [];
      y2[t3] = w3, b2[t3] = new Set(T3);
      let E3 = Wt(C3, e2, u2, n3[t3], i3, S3, m2 ? T3 : null);
      v2[t3] = E3, E3.courses.forEach((e3) => {
        x2[e3] && x2[e3].expected++;
      });
    }), r3 > 0 && u2.forEach((e3) => {
      e3.semester === 1 && (x2[e3.code].expected += r3);
    });
    let S2 = Object.keys(t2).sort((e3, t3) => (g2[e3]?.remaining || 0) - (g2[t3]?.remaining || 0)), C2 = {};
    u2.forEach((e3) => C2[e3.code] = /* @__PURE__ */ new Set()), Object.entries(v2).forEach(([e3, t3]) => {
      t3 && t3.courses && t3.courses.forEach((t4) => {
        C2[t4] && C2[t4].add(e3);
      });
    });
    let w2 = {};
    u2.forEach((e3) => {
      w2[e3.code] = [...C2[e3.code]].filter((n4) => {
        let r4 = t2[n4]?.courses[e3.code];
        return r4 !== `registered` && r4 !== `current`;
      });
    });
    let T2 = {};
    u2.forEach((e3) => {
      let t3 = 0, n4 = C2[e3.code];
      n4.size > 0 && u2.forEach((r4) => {
        if (e3.code === r4.code || e3.semester === r4.semester) return;
        let i4 = C2[r4.code];
        if (i4.size > 0) {
          for (let e4 of n4) if (i4.has(e4)) {
            t3++;
            break;
          }
        }
      }), T2[e3.code] = t3;
    });
    let E2 = 0;
    return u2.forEach((t3) => {
      nn(t3, e2) && (E2 += t3.credits);
    }), { sortedCourses: u2, levelBoundaries: d2, totalCredits: f2, traineeStats: g2, traineeExpected: v2, courseStats: x2, conflictCounts: T2, courseTraineesMap: C2, courseUnregisteredExpected: w2, sortedTraineeIds: S2, coopTrainingCredits: E2, traineeCoopRemaining: _2, traineePureAlgo: y2, traineeRayat: b2 };
  }
  function nn(e2, t2) {
    return Ft(e2.code, t2) && !Lt(e2.code);
  }
  var rn = 2 / 3;
  var an = { theory: 35, practical: 15, computer: 20, remote: 50 };
  var on = (e2, t2) => t2 > 0 ? Math.ceil(e2 / t2) : 0;
  function sn(e2, t2, n3) {
    if (t2 <= 0 || n3 <= 0) return t2;
    let r3 = Math.ceil(e2 / t2), i3 = Math.floor(e2 / t2);
    return i3 >= 1 && i3 < r3 && n3 === i3 ? Math.ceil(e2 / n3) : t2;
  }
  function cn(e2) {
    return e2?.theoryTrainingType ?? `traditional`;
  }
  function ln(e2) {
    return e2?.practicalTrainingType ?? `traditional`;
  }
  function un(e2, t2) {
    let n3 = cn(e2) === `remote` ? t2.remote : t2.theory, r3 = e2?.theory ?? n3;
    return r3 > 0 ? r3 : n3;
  }
  function dn(e2, t2) {
    return e2 === `computer` ? t2.computer : e2 === `none` ? t2.theory : t2.practical;
  }
  function fn(e2) {
    return e2?.practicalKind ?? `workshop`;
  }
  function pn(e2, t2) {
    let n3 = e2?.practical;
    return n3 != null && n3 > 0 ? n3 : ln(e2) === `remote` ? t2.remote : dn(fn(e2), t2);
  }
  function mn(e2, t2, n3) {
    return e2 === `selfpaced` ? 0 : e2 === `blended` ? n3 ?? t2 : t2;
  }
  function hn(e2, t2, n3, r3, i3 = 0, a3 = () => false) {
    let o3 = [], s3 = 0, c3 = 0, l3 = 0, u2 = 0, d2 = 0, f2 = 0;
    for (let p2 of e2) {
      let e3 = a3(p2.code), m2 = p2.theory ?? 0, h2 = p2.practical ?? 0, g2 = !e3 && m2 > 0, _2 = e3 || h2 > 0;
      if (!e3 && !g2 && !_2) continue;
      let v2 = p2.semester === 1 ? Math.max(0, i3) : 0, y2 = Math.max(0, (t2(p2.code) || 0) + v2), b2 = r3[p2.code], x2 = cn(b2), S2 = ln(b2), C2 = un(b2, n3), w2 = e3 ? `workshop` : fn(b2), T2 = e3 ? 20 : pn(b2, n3), E2 = g2 ? on(y2, C2) : 0, D2 = g2 && C2 > 0 ? Math.floor(y2 / C2) : 0, O2 = b2?.theoryFloorSections && D2 >= 1 && D2 < E2 ? D2 : E2, k2 = g2 && b2?.theorySectionsManual != null && b2.theorySectionsManual >= 0 ? b2.theorySectionsManual : O2, ee2 = _2 ? on(y2, T2) : 0, te2 = _2 && T2 > 0 ? Math.floor(y2 / T2) : 0, ne2 = b2?.practicalFloorSections && te2 >= 1 && te2 < ee2 ? te2 : ee2, re2 = _2 && b2?.practicalSectionsManual != null && b2.practicalSectionsManual >= 0 ? b2.practicalSectionsManual : ne2, ie2 = e3 ? 0 : mn(x2, m2, b2?.theoryContact), ae2 = e3 ? b2?.practicalContact ?? 0 : mn(S2, h2, b2?.practicalContact), A2 = k2 * ie2, j2 = re2 * ae2;
      o3.push({ code: p2.code, name: p2.name, semester: p2.semester, credits: p2.credits, theoryHours: m2, practicalHours: h2, hasTheory: g2, hasPractical: _2, isCoop: e3, expected: y2, theoryTrainingType: x2, practicalTrainingType: S2, theorySize: C2, practicalSize: T2, theorySections: k2, practicalSections: re2, theoryAvg: k2 > 0 ? y2 / k2 : 0, practicalAvg: re2 > 0 ? y2 / re2 : 0, totalSections: k2 + re2, practicalKind: w2, theoryContact: ie2, practicalContact: ae2, theoryContactTotal: A2, practicalContactTotal: j2 }), s3 += k2, c3 += re2, g2 && (l3 += y2), _2 && (u2 += y2), d2 += A2, f2 += j2;
    }
    return { rows: o3, totals: { theorySections: s3, practicalSections: c3, totalSections: s3 + c3, theoryAvg: s3 > 0 ? l3 / s3 : 0, practicalAvg: c3 > 0 ? u2 / c3 : 0, theoryContactTotal: d2, practicalContactTotal: f2, coursesCounted: o3.length } };
  }
  var gn = c(o(((e2, t2) => {
    ((n3, r3) => {
      typeof e2 == `object` && t2 !== void 0 ? t2.exports = r3() : typeof define == `function` && define.amd ? define(r3) : (n3 = typeof globalThis < `u` ? globalThis : n3 || self).Dexie = r3();
    })(e2, function() {
      var e3 = function(t4, n4) {
        return (e3 = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e4, t5) {
          e4.__proto__ = t5;
        } : function(e4, t5) {
          for (var n5 in t5) Object.prototype.hasOwnProperty.call(t5, n5) && (e4[n5] = t5[n5]);
        }))(t4, n4);
      }, t3 = function() {
        return (t3 = Object.assign || function(e4) {
          for (var t4, n4 = 1, r4 = arguments.length; n4 < r4; n4++) for (var i4 in t4 = arguments[n4]) Object.prototype.hasOwnProperty.call(t4, i4) && (e4[i4] = t4[i4]);
          return e4;
        }).apply(this, arguments);
      };
      function n3(e4, t4, n4) {
        if (n4 || arguments.length === 2) for (var r4, i4 = 0, a4 = t4.length; i4 < a4; i4++) !r4 && i4 in t4 || ((r4 ||= Array.prototype.slice.call(t4, 0, i4))[i4] = t4[i4]);
        return e4.concat(r4 || Array.prototype.slice.call(t4));
      }
      var r3 = typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : typeof window < `u` ? window : global, i3 = Object.keys, a3 = Array.isArray;
      function o3(e4, t4) {
        return typeof t4 == `object` && i3(t4).forEach(function(n4) {
          e4[n4] = t4[n4];
        }), e4;
      }
      typeof Promise > `u` || r3.Promise || (r3.Promise = Promise);
      var s3 = Object.getPrototypeOf, c3 = {}.hasOwnProperty;
      function l3(e4, t4) {
        return c3.call(e4, t4);
      }
      function u2(e4, t4) {
        typeof t4 == `function` && (t4 = t4(s3(e4))), (typeof Reflect > `u` ? i3 : Reflect.ownKeys)(t4).forEach(function(n4) {
          f2(e4, n4, t4[n4]);
        });
      }
      var d2 = Object.defineProperty;
      function f2(e4, t4, n4, r4) {
        d2(e4, t4, o3(n4 && l3(n4, `get`) && typeof n4.get == `function` ? { get: n4.get, set: n4.set, configurable: true } : { value: n4, configurable: true, writable: true }, r4));
      }
      function p2(e4) {
        return { from: function(t4) {
          return e4.prototype = Object.create(t4.prototype), f2(e4.prototype, `constructor`, e4), { extend: u2.bind(null, e4.prototype) };
        } };
      }
      var m2 = Object.getOwnPropertyDescriptor, h2 = [].slice;
      function g2(e4, t4, n4) {
        return h2.call(e4, t4, n4);
      }
      function _2(e4, t4) {
        return t4(e4);
      }
      function v2(e4) {
        if (!e4) throw Error(`Assertion Failed`);
      }
      function y2(e4) {
        r3.setImmediate ? setImmediate(e4) : setTimeout(e4, 0);
      }
      function b2(e4, t4) {
        if (typeof t4 == `string` && l3(e4, t4)) return e4[t4];
        if (!t4) return e4;
        if (typeof t4 != `string`) {
          for (var n4 = [], r4 = 0, i4 = t4.length; r4 < i4; ++r4) {
            var a4 = b2(e4, t4[r4]);
            n4.push(a4);
          }
          return n4;
        }
        var o4, s4 = t4.indexOf(`.`);
        return s4 === -1 || (o4 = e4[t4.substr(0, s4)]) == null ? void 0 : b2(o4, t4.substr(s4 + 1));
      }
      function x2(e4, t4, n4) {
        if (e4 && t4 !== void 0 && !(`isFrozen` in Object && Object.isFrozen(e4))) if (typeof t4 != `string` && `length` in t4) {
          v2(typeof n4 != `string` && `length` in n4);
          for (var r4 = 0, i4 = t4.length; r4 < i4; ++r4) x2(e4, t4[r4], n4[r4]);
        } else {
          var o4 = t4.indexOf(`.`);
          if (o4 !== -1) {
            var s4 = t4.substr(0, o4), o4 = t4.substr(o4 + 1);
            if (o4 === ``) n4 === void 0 ? a3(e4) && !isNaN(parseInt(s4)) ? e4.splice(s4, 1) : delete e4[s4] : e4[s4] = n4;
            else {
              var c4 = e4[s4];
              if (!c4 || !l3(e4, s4)) {
                if (n4 === void 0) return;
                c4 = e4[s4] = {};
              }
              x2(c4, o4, n4);
            }
          } else n4 === void 0 ? a3(e4) && !isNaN(parseInt(t4)) ? e4.splice(t4, 1) : delete e4[t4] : e4[t4] = n4;
        }
      }
      function S2(e4) {
        var t4, n4 = {};
        for (t4 in e4) l3(e4, t4) && (n4[t4] = e4[t4]);
        return n4;
      }
      var C2 = [].concat;
      function w2(e4) {
        return C2.apply([], e4);
      }
      var T2 = `BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey`.split(`,`).concat(w2([8, 16, 32, 64].map(function(e4) {
        return [`Int`, `Uint`, `Float`].map(function(t4) {
          return t4 + e4 + `Array`;
        });
      }))).filter(function(e4) {
        return r3[e4];
      }), E2 = new Set(T2.map(function(e4) {
        return r3[e4];
      })), D2 = null;
      function O2(e4) {
        return D2 = /* @__PURE__ */ new WeakMap(), e4 = (function e5(t4) {
          if (!t4 || typeof t4 != `object`) return t4;
          var n4 = D2.get(t4);
          if (n4) return n4;
          if (a3(t4)) {
            n4 = [], D2.set(t4, n4);
            for (var r4 = 0, i4 = t4.length; r4 < i4; ++r4) n4.push(e5(t4[r4]));
          } else if (E2.has(t4.constructor)) n4 = t4;
          else {
            var o4, c4 = s3(t4);
            for (o4 in n4 = c4 === Object.prototype ? {} : Object.create(c4), D2.set(t4, n4), t4) l3(t4, o4) && (n4[o4] = e5(t4[o4]));
          }
          return n4;
        })(e4), D2 = null, e4;
      }
      var k2 = {}.toString;
      function ee2(e4) {
        return k2.call(e4).slice(8, -1);
      }
      var te2 = typeof Symbol < `u` ? Symbol.iterator : `@@iterator`, ne2 = typeof te2 == `symbol` ? function(e4) {
        var t4;
        return e4 != null && (t4 = e4[te2]) && t4.apply(e4);
      } : function() {
        return null;
      };
      function re2(e4, t4) {
        t4 = e4.indexOf(t4), 0 <= t4 && e4.splice(t4, 1);
      }
      var ie2 = {};
      function ae2(e4) {
        var t4, n4, r4, i4;
        if (arguments.length === 1) {
          if (a3(e4)) return e4.slice();
          if (this === ie2 && typeof e4 == `string`) return [e4];
          if (i4 = ne2(e4)) for (n4 = []; !(r4 = i4.next()).done; ) n4.push(r4.value);
          else {
            if (e4 == null || typeof (t4 = e4.length) != `number`) return [e4];
            for (n4 = Array(t4); t4--; ) n4[t4] = e4[t4];
          }
        } else for (t4 = arguments.length, n4 = Array(t4); t4--; ) n4[t4] = arguments[t4];
        return n4;
      }
      var A2 = typeof Symbol < `u` ? function(e4) {
        return e4[Symbol.toStringTag] === `AsyncFunction`;
      } : function() {
        return false;
      }, T2 = [`Unknown`, `Constraint`, `Data`, `TransactionInactive`, `ReadOnly`, `Version`, `NotFound`, `InvalidState`, `InvalidAccess`, `Abort`, `Timeout`, `QuotaExceeded`, `Syntax`, `DataClone`], j2 = [`Modify`, `Bulk`, `OpenFailed`, `VersionChange`, `Schema`, `Upgrade`, `InvalidTable`, `MissingAPI`, `NoSuchDatabase`, `InvalidArgument`, `SubTransaction`, `Unsupported`, `Internal`, `DatabaseClosed`, `PrematureCommit`, `ForeignAwait`].concat(T2), oe2 = { VersionChanged: `Database version changed by other database connection`, DatabaseClosed: `Database has been closed`, Abort: `Transaction aborted`, TransactionInactive: `Transaction has already completed or failed`, MissingAPI: `IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb` };
      function se2(e4, t4) {
        this.name = e4, this.message = t4;
      }
      function ce2(e4, t4) {
        return e4 + `. Errors: ` + Object.keys(t4).map(function(e5) {
          return t4[e5].toString();
        }).filter(function(e5, t5, n4) {
          return n4.indexOf(e5) === t5;
        }).join(`
`);
      }
      function le2(e4, t4, n4, r4) {
        this.failures = t4, this.failedKeys = r4, this.successCount = n4, this.message = ce2(e4, t4);
      }
      function ue2(e4, t4) {
        this.name = `BulkError`, this.failures = Object.keys(t4).map(function(e5) {
          return t4[e5];
        }), this.failuresByPos = t4, this.message = ce2(e4, this.failures);
      }
      p2(se2).from(Error).extend({ toString: function() {
        return this.name + `: ` + this.message;
      } }), p2(le2).from(se2), p2(ue2).from(se2);
      var de2 = j2.reduce(function(e4, t4) {
        return e4[t4] = t4 + `Error`, e4;
      }, {}), fe2 = se2, M2 = j2.reduce(function(e4, t4) {
        var n4 = t4 + `Error`;
        function r4(e5, r5) {
          this.name = n4, e5 ? typeof e5 == `string` ? (this.message = `${e5}${r5 ? `
 ` + r5 : ``}`, this.inner = r5 || null) : typeof e5 == `object` && (this.message = `${e5.name} ${e5.message}`, this.inner = e5) : (this.message = oe2[t4] || n4, this.inner = null);
        }
        return p2(r4).from(fe2), e4[t4] = r4, e4;
      }, {}), pe2 = (M2.Syntax = SyntaxError, M2.Type = TypeError, M2.Range = RangeError, T2.reduce(function(e4, t4) {
        return e4[t4 + `Error`] = M2[t4], e4;
      }, {}));
      T2 = j2.reduce(function(e4, t4) {
        return [`Syntax`, `Type`, `Range`].indexOf(t4) === -1 && (e4[t4 + `Error`] = M2[t4]), e4;
      }, {});
      function N2() {
      }
      function me2(e4) {
        return e4;
      }
      function he2(e4, t4) {
        return e4 == null || e4 === me2 ? t4 : function(n4) {
          return t4(e4(n4));
        };
      }
      function ge2(e4, t4) {
        return function() {
          e4.apply(this, arguments), t4.apply(this, arguments);
        };
      }
      function _e2(e4, t4) {
        return e4 === N2 ? t4 : function() {
          var n4 = e4.apply(this, arguments), r4 = (n4 !== void 0 && (arguments[0] = n4), this.onsuccess), i4 = this.onerror, a4 = (this.onsuccess = null, this.onerror = null, t4.apply(this, arguments));
          return r4 && (this.onsuccess = this.onsuccess ? ge2(r4, this.onsuccess) : r4), i4 && (this.onerror = this.onerror ? ge2(i4, this.onerror) : i4), a4 === void 0 ? n4 : a4;
        };
      }
      function ve2(e4, t4) {
        return e4 === N2 ? t4 : function() {
          e4.apply(this, arguments);
          var n4 = this.onsuccess, r4 = this.onerror;
          this.onsuccess = this.onerror = null, t4.apply(this, arguments), n4 && (this.onsuccess = this.onsuccess ? ge2(n4, this.onsuccess) : n4), r4 && (this.onerror = this.onerror ? ge2(r4, this.onerror) : r4);
        };
      }
      function ye2(e4, t4) {
        return e4 === N2 ? t4 : function(n4) {
          var r4 = e4.apply(this, arguments), n4 = (o3(n4, r4), this.onsuccess), i4 = this.onerror, a4 = (this.onsuccess = null, this.onerror = null, t4.apply(this, arguments));
          return n4 && (this.onsuccess = this.onsuccess ? ge2(n4, this.onsuccess) : n4), i4 && (this.onerror = this.onerror ? ge2(i4, this.onerror) : i4), r4 === void 0 ? a4 === void 0 ? void 0 : a4 : o3(r4, a4);
        };
      }
      function be2(e4, t4) {
        return e4 === N2 ? t4 : function() {
          return false !== t4.apply(this, arguments) && e4.apply(this, arguments);
        };
      }
      function xe2(e4, t4) {
        return e4 === N2 ? t4 : function() {
          var n4 = e4.apply(this, arguments);
          if (n4 && typeof n4.then == `function`) {
            for (var r4 = this, i4 = arguments.length, a4 = Array(i4); i4--; ) a4[i4] = arguments[i4];
            return n4.then(function() {
              return t4.apply(r4, a4);
            });
          }
          return t4.apply(this, arguments);
        };
      }
      T2.ModifyError = le2, T2.DexieError = se2, T2.BulkError = ue2;
      var Se2 = typeof location < `u` && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Ce2(e4) {
        Se2 = e4;
      }
      var we2 = {}, Te2 = 100, Ee2 = typeof Promise > `u` ? [] : (j2 = Promise.resolve(), typeof crypto < `u` && crypto.subtle ? [Ee2 = crypto.subtle.digest(`SHA-512`, new Uint8Array([0])), s3(Ee2), j2] : [j2, s3(j2), j2]), j2 = Ee2[0], De2 = Ee2[1], De2 = De2 && De2.then, Oe2 = j2 && j2.constructor, ke2 = !!Ee2[2], Ae2 = function(e4, t4) {
        Le2.push([e4, t4]), Me2 &&= (queueMicrotask(Ge2), false);
      }, je2 = true, Me2 = true, Ne2 = [], Pe2 = [], Fe2 = me2, Ie2 = { id: `global`, global: true, ref: 0, unhandleds: [], onunhandled: N2, pgp: false, env: {}, finalize: N2 }, P2 = Ie2, Le2 = [], Re2 = 0, ze2 = [];
      function F2(e4) {
        if (typeof this != `object`) throw TypeError(`Promises must be constructed via new`);
        this._listeners = [], this._lib = false;
        var t4 = this._PSD = P2;
        if (typeof e4 != `function`) {
          if (e4 !== we2) throw TypeError(`Not a function`);
          this._state = arguments[1], this._value = arguments[2], false === this._state && He2(this, this._value);
        } else this._state = null, this._value = null, ++t4.ref, (function e5(t5, n4) {
          try {
            n4(function(n5) {
              if (t5._state === null) {
                if (n5 === t5) throw TypeError(`A promise cannot be resolved with itself.`);
                var r4 = t5._lib && Ke2();
                n5 && typeof n5.then == `function` ? e5(t5, function(e6, t6) {
                  n5 instanceof F2 ? n5._then(e6, t6) : n5.then(e6, t6);
                }) : (t5._state = true, t5._value = n5, I2(t5)), r4 && qe2();
              }
            }, He2.bind(null, t5));
          } catch (e6) {
            He2(t5, e6);
          }
        })(this, e4);
      }
      var Be2 = { get: function() {
        var e4 = P2, t4 = tt2;
        function n4(n5, r4) {
          var i4 = this, a4 = !e4.global && (e4 !== P2 || t4 !== tt2), o4 = a4 && !at2(), s4 = new F2(function(t5, s5) {
            Ue2(i4, new Ve2(dt2(n5, e4, a4, o4), dt2(r4, e4, a4, o4), t5, s5, e4));
          });
          return this._consoleTask && (s4._consoleTask = this._consoleTask), s4;
        }
        return n4.prototype = we2, n4;
      }, set: function(e4) {
        f2(this, `then`, e4 && e4.prototype === we2 ? Be2 : { get: function() {
          return e4;
        }, set: Be2.set });
      } };
      function Ve2(e4, t4, n4, r4, i4) {
        this.onFulfilled = typeof e4 == `function` ? e4 : null, this.onRejected = typeof t4 == `function` ? t4 : null, this.resolve = n4, this.reject = r4, this.psd = i4;
      }
      function He2(e4, t4) {
        var n4, r4;
        Pe2.push(t4), e4._state === null && (n4 = e4._lib && Ke2(), t4 = Fe2(t4), e4._state = false, e4._value = t4, r4 = e4, Ne2.some(function(e5) {
          return e5._value === r4._value;
        }) || Ne2.push(r4), I2(e4), n4) && qe2();
      }
      function I2(e4) {
        var t4 = e4._listeners;
        e4._listeners = [];
        for (var n4 = 0, r4 = t4.length; n4 < r4; ++n4) Ue2(e4, t4[n4]);
        var i4 = e4._PSD;
        --i4.ref || i4.finalize(), Re2 === 0 && (++Re2, Ae2(function() {
          --Re2 == 0 && Je2();
        }, []));
      }
      function Ue2(e4, t4) {
        if (e4._state === null) e4._listeners.push(t4);
        else {
          var n4 = e4._state ? t4.onFulfilled : t4.onRejected;
          if (n4 === null) return (e4._state ? t4.resolve : t4.reject)(e4._value);
          ++t4.psd.ref, ++Re2, Ae2(We2, [n4, e4, t4]);
        }
      }
      function We2(e4, t4, n4) {
        try {
          var r4, i4 = t4._value;
          !t4._state && Pe2.length && (Pe2 = []), r4 = Se2 && t4._consoleTask ? t4._consoleTask.run(function() {
            return e4(i4);
          }) : e4(i4), t4._state || Pe2.indexOf(i4) !== -1 || ((e5) => {
            for (var t5 = Ne2.length; t5; ) if (Ne2[--t5]._value === e5._value) return Ne2.splice(t5, 1);
          })(t4), n4.resolve(r4);
        } catch (e5) {
          n4.reject(e5);
        } finally {
          --Re2 == 0 && Je2(), --n4.psd.ref || n4.psd.finalize();
        }
      }
      function Ge2() {
        ut2(Ie2, function() {
          Ke2() && qe2();
        });
      }
      function Ke2() {
        var e4 = je2;
        return Me2 = je2 = false, e4;
      }
      function qe2() {
        var e4, t4, n4;
        do
          for (; 0 < Le2.length; ) for (e4 = Le2, Le2 = [], n4 = e4.length, t4 = 0; t4 < n4; ++t4) {
            var r4 = e4[t4];
            r4[0].apply(null, r4[1]);
          }
        while (0 < Le2.length);
        Me2 = je2 = true;
      }
      function Je2() {
        for (var e4 = Ne2, t4 = (Ne2 = [], e4.forEach(function(e5) {
          e5._PSD.onunhandled.call(null, e5._value, e5);
        }), ze2.slice(0)), n4 = t4.length; n4; ) t4[--n4]();
      }
      function Ye2(e4) {
        return new F2(we2, false, e4);
      }
      function Xe2(e4, t4) {
        var n4 = P2;
        return function() {
          var r4 = Ke2(), i4 = P2;
          try {
            return ct2(n4, true), e4.apply(this, arguments);
          } catch (e5) {
            t4 && t4(e5);
          } finally {
            ct2(i4, false), r4 && qe2();
          }
        };
      }
      u2(F2.prototype, { then: Be2, _then: function(e4, t4) {
        Ue2(this, new Ve2(null, null, e4, t4, P2));
      }, catch: function(e4) {
        var t4, n4;
        return arguments.length === 1 ? this.then(null, e4) : (t4 = e4, n4 = arguments[1], typeof t4 == `function` ? this.then(null, function(e5) {
          return (e5 instanceof t4 ? n4 : Ye2)(e5);
        }) : this.then(null, function(e5) {
          return (e5 && e5.name === t4 ? n4 : Ye2)(e5);
        }));
      }, finally: function(e4) {
        return this.then(function(t4) {
          return F2.resolve(e4()).then(function() {
            return t4;
          });
        }, function(t4) {
          return F2.resolve(e4()).then(function() {
            return Ye2(t4);
          });
        });
      }, timeout: function(e4, t4) {
        var n4 = this;
        return e4 < 1 / 0 ? new F2(function(r4, i4) {
          var a4 = setTimeout(function() {
            return i4(new M2.Timeout(t4));
          }, e4);
          n4.then(r4, i4).finally(clearTimeout.bind(null, a4));
        }) : this;
      } }), typeof Symbol < `u` && Symbol.toStringTag && f2(F2.prototype, Symbol.toStringTag, `Dexie.Promise`), Ie2.env = lt2(), u2(F2, { all: function() {
        var e4 = ae2.apply(null, arguments).map(ot2);
        return new F2(function(t4, n4) {
          e4.length === 0 && t4([]);
          var r4 = e4.length;
          e4.forEach(function(i4, a4) {
            return F2.resolve(i4).then(function(n5) {
              e4[a4] = n5, --r4 || t4(e4);
            }, n4);
          });
        });
      }, resolve: function(e4) {
        return e4 instanceof F2 ? e4 : e4 && typeof e4.then == `function` ? new F2(function(t4, n4) {
          e4.then(t4, n4);
        }) : new F2(we2, true, e4);
      }, reject: Ye2, race: function() {
        var e4 = ae2.apply(null, arguments).map(ot2);
        return new F2(function(t4, n4) {
          e4.map(function(e5) {
            return F2.resolve(e5).then(t4, n4);
          });
        });
      }, PSD: { get: function() {
        return P2;
      }, set: function(e4) {
        return P2 = e4;
      } }, totalEchoes: { get: function() {
        return tt2;
      } }, newPSD: rt2, usePSD: ut2, scheduler: { get: function() {
        return Ae2;
      }, set: function(e4) {
        Ae2 = e4;
      } }, rejectionMapper: { get: function() {
        return Fe2;
      }, set: function(e4) {
        Fe2 = e4;
      } }, follow: function(e4, t4) {
        return new F2(function(n4, r4) {
          return rt2(function(t5, n5) {
            var r5 = P2;
            r5.unhandleds = [], r5.onunhandled = n5, r5.finalize = ge2(function() {
              var e5, r6 = this;
              e5 = function() {
                r6.unhandleds.length === 0 ? t5() : n5(r6.unhandleds[0]);
              }, ze2.push(function t6() {
                e5(), ze2.splice(ze2.indexOf(t6), 1);
              }), ++Re2, Ae2(function() {
                --Re2 == 0 && Je2();
              }, []);
            }, r5.finalize), e4();
          }, t4, n4, r4);
        });
      } }), Oe2 && (Oe2.allSettled && f2(F2, `allSettled`, function() {
        var e4 = ae2.apply(null, arguments).map(ot2);
        return new F2(function(t4) {
          e4.length === 0 && t4([]);
          var n4 = e4.length, r4 = Array(n4);
          e4.forEach(function(e5, i4) {
            return F2.resolve(e5).then(function(e6) {
              return r4[i4] = { status: `fulfilled`, value: e6 };
            }, function(e6) {
              return r4[i4] = { status: `rejected`, reason: e6 };
            }).then(function() {
              return --n4 || t4(r4);
            });
          });
        });
      }), Oe2.any && typeof AggregateError < `u` && f2(F2, `any`, function() {
        var e4 = ae2.apply(null, arguments).map(ot2);
        return new F2(function(t4, n4) {
          e4.length === 0 && n4(AggregateError([]));
          var r4 = e4.length, i4 = Array(r4);
          e4.forEach(function(e5, a4) {
            return F2.resolve(e5).then(function(e6) {
              return t4(e6);
            }, function(e6) {
              i4[a4] = e6, --r4 || n4(AggregateError(i4));
            });
          });
        });
      }), Oe2.withResolvers) && (F2.withResolvers = Oe2.withResolvers);
      var Ze2 = { awaits: 0, echoes: 0, id: 0 }, Qe2 = 0, $e2 = [], et2 = 0, tt2 = 0, nt2 = 0;
      function rt2(e4, t4, n4, r4) {
        var i4 = P2, a4 = Object.create(i4), t4 = (a4.parent = i4, a4.ref = 0, a4.global = false, a4.id = ++nt2, Ie2.env, a4.env = ke2 ? { Promise: F2, PromiseProp: { value: F2, configurable: true, writable: true }, all: F2.all, race: F2.race, allSettled: F2.allSettled, any: F2.any, resolve: F2.resolve, reject: F2.reject } : {}, t4 && o3(a4, t4), ++i4.ref, a4.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, ut2(a4, e4, n4, r4));
        return a4.ref === 0 && a4.finalize(), t4;
      }
      function it2() {
        return Ze2.id ||= ++Qe2, ++Ze2.awaits, Ze2.echoes += Te2, Ze2.id;
      }
      function at2() {
        return !!Ze2.awaits && (--Ze2.awaits == 0 && (Ze2.id = 0), Ze2.echoes = Ze2.awaits * Te2, true);
      }
      function ot2(e4) {
        return Ze2.echoes && e4 && e4.constructor === Oe2 ? (it2(), e4.then(function(e5) {
          return at2(), e5;
        }, function(e5) {
          return at2(), pt2(e5);
        })) : e4;
      }
      function st2() {
        var e4 = $e2[$e2.length - 1];
        $e2.pop(), ct2(e4, false);
      }
      function ct2(e4, t4) {
        var n4, i4, a4 = P2;
        (t4 ? !Ze2.echoes || et2++ && e4 === P2 : !et2 || --et2 && e4 === P2) || queueMicrotask(t4 ? function(e5) {
          ++tt2, Ze2.echoes && --Ze2.echoes != 0 || (Ze2.echoes = Ze2.awaits = Ze2.id = 0), $e2.push(P2), ct2(e5, true);
        }.bind(null, e4) : st2), e4 !== P2 && (P2 = e4, a4 === Ie2 && (Ie2.env = lt2()), ke2) && (n4 = Ie2.env.Promise, i4 = e4.env, a4.global || e4.global) && (Object.defineProperty(r3, "Promise", i4.PromiseProp), n4.all = i4.all, n4.race = i4.race, n4.resolve = i4.resolve, n4.reject = i4.reject, i4.allSettled && (n4.allSettled = i4.allSettled), i4.any) && (n4.any = i4.any);
      }
      function lt2() {
        var e4 = r3.Promise;
        return ke2 ? { Promise: e4, PromiseProp: Object.getOwnPropertyDescriptor(r3, `Promise`), all: e4.all, race: e4.race, allSettled: e4.allSettled, any: e4.any, resolve: e4.resolve, reject: e4.reject } : {};
      }
      function ut2(e4, t4, n4, r4, i4) {
        var a4 = P2;
        try {
          return ct2(e4, true), t4(n4, r4, i4);
        } finally {
          ct2(a4, false);
        }
      }
      function dt2(e4, t4, n4, r4) {
        return typeof e4 == `function` ? function() {
          var i4 = P2;
          n4 && it2(), ct2(t4, true);
          try {
            return e4.apply(this, arguments);
          } finally {
            ct2(i4, false), r4 && queueMicrotask(at2);
          }
        } : e4;
      }
      function ft2(e4) {
        Promise === Oe2 && Ze2.echoes === 0 ? et2 === 0 ? e4() : enqueueNativeMicroTask(e4) : setTimeout(e4, 0);
      }
      (`` + De2).indexOf(`[native code]`) === -1 && (it2 = at2 = N2);
      var pt2 = F2.reject, mt2 = `￿`, ht2 = `Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.`, gt2 = `String expected.`, _t2 = `__dbnames`, vt2 = `readonly`, yt2 = `readwrite`;
      function bt2(e4, t4) {
        return e4 ? t4 ? function() {
          return e4.apply(this, arguments) && t4.apply(this, arguments);
        } : e4 : t4;
      }
      var xt2 = { type: 3, lower: -1 / 0, lowerOpen: false, upper: [[]], upperOpen: false };
      function St2(e4) {
        return typeof e4 != `string` || /\./.test(e4) ? function(e5) {
          return e5;
        } : function(t4) {
          return t4[e4] === void 0 && e4 in t4 && delete (t4 = O2(t4))[e4], t4;
        };
      }
      function Ct2() {
        throw M2.Type(`Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.`);
      }
      function L2(e4, t4) {
        try {
          var n4 = wt2(e4), r4 = wt2(t4);
          if (n4 !== r4) return n4 === `Array` ? 1 : r4 === `Array` ? -1 : n4 === `binary` ? 1 : r4 === `binary` ? -1 : n4 === `string` ? 1 : r4 === `string` ? -1 : n4 === `Date` ? 1 : r4 === `Date` ? -1 : NaN;
          switch (n4) {
            case `number`:
            case `Date`:
            case `string`:
              return t4 < e4 ? 1 : e4 < t4 ? -1 : 0;
            case `binary`:
              for (var i4 = Tt2(e4), a4 = Tt2(t4), o4 = i4.length, s4 = a4.length, c4 = o4 < s4 ? o4 : s4, l4 = 0; l4 < c4; ++l4) if (i4[l4] !== a4[l4]) return i4[l4] < a4[l4] ? -1 : 1;
              return o4 === s4 ? 0 : o4 < s4 ? -1 : 1;
            case `Array`:
              for (var u3 = e4, d3 = t4, f3 = u3.length, p3 = d3.length, m3 = f3 < p3 ? f3 : p3, h3 = 0; h3 < m3; ++h3) {
                var g3 = L2(u3[h3], d3[h3]);
                if (g3 !== 0) return g3;
              }
              return f3 === p3 ? 0 : f3 < p3 ? -1 : 1;
          }
        } catch {
        }
        return NaN;
      }
      function wt2(e4) {
        var t4 = typeof e4;
        return t4 == `object` && (ArrayBuffer.isView(e4) || (t4 = ee2(e4)) === `ArrayBuffer`) ? `binary` : t4;
      }
      function Tt2(e4) {
        return e4 instanceof Uint8Array ? e4 : ArrayBuffer.isView(e4) ? new Uint8Array(e4.buffer, e4.byteOffset, e4.byteLength) : new Uint8Array(e4);
      }
      function Et2(e4, t4, n4) {
        var r4 = e4.schema.yProps;
        return r4 ? (t4 && 0 < n4.numFailures && (t4 = t4.filter(function(e5, t5) {
          return !n4.failures[t5];
        })), Promise.all(r4.map(function(n5) {
          return n5 = n5.updatesTable, t4 ? e4.db.table(n5).where(`k`).anyOf(t4).delete() : e4.db.table(n5).clear();
        })).then(function() {
          return n4;
        })) : n4;
      }
      Ot2.prototype.execute = function(e4) {
        var t4 = this[`@@propmod`];
        if (t4.add !== void 0) {
          var r4 = t4.add;
          if (a3(r4)) return n3(n3([], a3(e4) ? e4 : [], true), r4, true).sort();
          if (typeof r4 == `number`) return (Number(e4) || 0) + r4;
          if (typeof r4 == `bigint`) try {
            return BigInt(e4) + r4;
          } catch {
            return BigInt(0) + r4;
          }
          throw TypeError(`Invalid term ${r4}`);
        }
        if (t4.remove !== void 0) {
          var i4 = t4.remove;
          if (a3(i4)) return a3(e4) ? e4.filter(function(e5) {
            return !i4.includes(e5);
          }).sort() : [];
          if (typeof i4 == `number`) return Number(e4) - i4;
          if (typeof i4 == `bigint`) try {
            return BigInt(e4) - i4;
          } catch {
            return BigInt(0) - i4;
          }
          throw TypeError(`Invalid subtrahend ${i4}`);
        }
        return r4 = (r4 = t4.replacePrefix)?.[0], r4 && typeof e4 == `string` && e4.startsWith(r4) ? t4.replacePrefix[1] + e4.substring(r4.length) : e4;
      };
      var Dt2 = Ot2;
      function Ot2(e4) {
        this[`@@propmod`] = e4;
      }
      function kt2(e4, t4) {
        for (var n4 = i3(t4), r4 = n4.length, a4 = false, o4 = 0; o4 < r4; ++o4) {
          var s4 = n4[o4], c4 = t4[s4], l4 = b2(e4, s4);
          c4 instanceof Dt2 ? (x2(e4, s4, c4.execute(l4)), a4 = true) : l4 !== c4 && (x2(e4, s4, c4), a4 = true);
        }
        return a4;
      }
      jt2.prototype._trans = function(e4, t4, n4) {
        var r4 = this._tx || P2.trans, i4 = this.name, a4 = Se2 && typeof console < `u` && console.createTask && console.createTask(`Dexie: ${e4 === `readonly` ? `read` : `write`} ${this.name}`);
        function o4(e5, n5, r5) {
          if (r5.schema[i4]) return t4(r5.idbtrans, r5);
          throw new M2.NotFound(`Table ` + i4 + ` not part of transaction`);
        }
        var s4 = Ke2();
        try {
          var c4 = r4 && r4.db._novip === this.db._novip ? r4 === P2.trans ? r4._promise(e4, o4, n4) : rt2(function() {
            return r4._promise(e4, o4, n4);
          }, { trans: r4, transless: P2.transless || P2 }) : (function e5(t5, n5, r5, i5) {
            if (t5.idbdb && (t5._state.openComplete || P2.letThrough || t5._vip)) {
              var a5 = t5._createTransaction(n5, r5, t5._dbSchema);
              try {
                a5.create(), t5._state.PR1398_maxLoop = 3;
              } catch (a6) {
                return a6.name === de2.InvalidState && t5.isOpen() && 0 < --t5._state.PR1398_maxLoop ? (console.warn(`Dexie: Need to reopen db`), t5.close({ disableAutoOpen: false }), t5.open().then(function() {
                  return e5(t5, n5, r5, i5);
                })) : pt2(a6);
              }
              return a5._promise(n5, function(e6, t6) {
                return rt2(function() {
                  return P2.trans = a5, i5(e6, t6, a5);
                });
              }).then(function(e6) {
                if (n5 === `readwrite`) try {
                  a5.idbtrans.commit();
                } catch {
                }
                return n5 === `readonly` ? e6 : a5._completion.then(function() {
                  return e6;
                });
              });
            }
            if (t5._state.openComplete) return pt2(new M2.DatabaseClosed(t5._state.dbOpenError));
            if (!t5._state.isBeingOpened) {
              if (!t5._state.autoOpen) return pt2(new M2.DatabaseClosed());
              t5.open().catch(N2);
            }
            return t5._state.dbReadyPromise.then(function() {
              return e5(t5, n5, r5, i5);
            });
          })(this.db, e4, [this.name], o4);
          return a4 && (c4._consoleTask = a4, c4 = c4.catch(function(e5) {
            return console.trace(e5), pt2(e5);
          })), c4;
        } finally {
          s4 && qe2();
        }
      }, jt2.prototype.get = function(e4, t4) {
        var n4 = this;
        return e4 && e4.constructor === Object ? this.where(e4).first(t4) : e4 == null ? pt2(new M2.Type(`Invalid argument to Table.get()`)) : this._trans(`readonly`, function(t5) {
          return n4.core.get({ trans: t5, key: e4 }).then(function(e5) {
            return n4.hook.reading.fire(e5);
          });
        }).then(t4);
      }, jt2.prototype.where = function(e4) {
        if (typeof e4 == `string`) return new this.db.WhereClause(this, e4);
        if (a3(e4)) return new this.db.WhereClause(this, `[${e4.join(`+`)}]`);
        var t4 = i3(e4);
        if (t4.length === 1) return this.where(t4[0]).equals(e4[t4[0]]);
        var n4 = this.schema.indexes.concat(this.schema.primKey).filter(function(e5) {
          if (e5.compound && t4.every(function(t5) {
            return 0 <= e5.keyPath.indexOf(t5);
          })) {
            for (var n5 = 0; n5 < t4.length; ++n5) if (t4.indexOf(e5.keyPath[n5]) === -1) return false;
            return true;
          }
          return false;
        }).sort(function(e5, t5) {
          return e5.keyPath.length - t5.keyPath.length;
        })[0];
        if (n4 && this.db._maxKey !== mt2) return s4 = n4.keyPath.slice(0, t4.length), this.where(s4).equals(s4.map(function(t5) {
          return e4[t5];
        }));
        !n4 && Se2 && console.warn(`The query ${JSON.stringify(e4)} on ${this.name} would benefit from a compound index [${t4.join(`+`)}]`);
        var r4 = this.schema.idxByName;
        function o4(e5, t5) {
          return L2(e5, t5) === 0;
        }
        var s4 = t4.reduce(function(t5, n5) {
          var i4 = t5[0], t5 = t5[1], s5 = r4[n5], c5 = e4[n5];
          return [i4 || s5, i4 || !s5 ? bt2(t5, s5 && s5.multi ? function(e5) {
            return e5 = b2(e5, n5), a3(e5) && e5.some(function(e6) {
              return o4(c5, e6);
            });
          } : function(e5) {
            return o4(c5, b2(e5, n5));
          }) : t5];
        }, [null, null]), c4 = s4[0], s4 = s4[1];
        return c4 ? this.where(c4.name).equals(e4[c4.keyPath]).filter(s4) : n4 ? this.filter(s4) : this.where(t4).equals(``);
      }, jt2.prototype.filter = function(e4) {
        return this.toCollection().and(e4);
      }, jt2.prototype.count = function(e4) {
        return this.toCollection().count(e4);
      }, jt2.prototype.offset = function(e4) {
        return this.toCollection().offset(e4);
      }, jt2.prototype.limit = function(e4) {
        return this.toCollection().limit(e4);
      }, jt2.prototype.each = function(e4) {
        return this.toCollection().each(e4);
      }, jt2.prototype.toArray = function(e4) {
        return this.toCollection().toArray(e4);
      }, jt2.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, jt2.prototype.orderBy = function(e4) {
        return new this.db.Collection(new this.db.WhereClause(this, a3(e4) ? `[${e4.join(`+`)}]` : e4));
      }, jt2.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, jt2.prototype.mapToClass = function(t4) {
        for (var n4 = this.db, r4 = this.name, i4 = ((this.schema.mappedClass = t4).prototype instanceof Ct2 && (t4 = ((t5) => {
          var i5 = s4, a5 = t5;
          if (typeof a5 != `function` && a5 !== null) throw TypeError(`Class extends value ` + String(a5) + ` is not a constructor or null`);
          function o5() {
            this.constructor = i5;
          }
          function s4() {
            return t5 !== null && t5.apply(this, arguments) || this;
          }
          return e3(i5, a5), i5.prototype = a5 === null ? Object.create(a5) : (o5.prototype = a5.prototype, new o5()), Object.defineProperty(s4.prototype, "db", { get: function() {
            return n4;
          }, enumerable: false, configurable: true }), s4.prototype.table = function() {
            return r4;
          }, s4;
        })(t4)), /* @__PURE__ */ new Set()), a4 = t4.prototype; a4; a4 = s3(a4)) Object.getOwnPropertyNames(a4).forEach(function(e4) {
          return i4.add(e4);
        });
        function o4(e4) {
          if (!e4) return e4;
          var n5, r5 = Object.create(t4.prototype);
          for (n5 in e4) if (!i4.has(n5)) try {
            r5[n5] = e4[n5];
          } catch {
          }
          return r5;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = o4, this.hook(`reading`, o4), t4;
      }, jt2.prototype.defineClass = function() {
        return this.mapToClass(function(e4) {
          o3(this, e4);
        });
      }, jt2.prototype.add = function(e4, t4) {
        var n4 = this, r4 = this.schema.primKey, i4 = r4.auto, a4 = r4.keyPath, o4 = e4;
        return a4 && i4 && (o4 = St2(a4)(e4)), this._trans(`readwrite`, function(e5) {
          return n4.core.mutate({ trans: e5, type: `add`, keys: t4 == null ? null : [t4], values: [o4] });
        }).then(function(e5) {
          return e5.numFailures ? F2.reject(e5.failures[0]) : e5.lastResult;
        }).then(function(t5) {
          if (a4) try {
            x2(e4, a4, t5);
          } catch {
          }
          return t5;
        });
      }, jt2.prototype.upsert = function(e4, t4) {
        var n4 = this, r4 = this.schema.primKey.keyPath;
        return this._trans(`readwrite`, function(i4) {
          return n4.core.get({ trans: i4, key: e4 }).then(function(a4) {
            var o4 = a4 ?? {};
            return kt2(o4, t4), r4 && x2(o4, r4, e4), n4.core.mutate({ trans: i4, type: `put`, values: [o4], keys: [e4], upsert: true, updates: { keys: [e4], changeSpecs: [t4] } }).then(function(e5) {
              return e5.numFailures ? F2.reject(e5.failures[0]) : !!a4;
            });
          });
        });
      }, jt2.prototype.update = function(e4, t4) {
        return typeof e4 != `object` || a3(e4) ? this.where(`:id`).equals(e4).modify(t4) : (e4 = b2(e4, this.schema.primKey.keyPath)) === void 0 ? pt2(new M2.InvalidArgument(`Given object does not contain its primary key`)) : this.where(`:id`).equals(e4).modify(t4);
      }, jt2.prototype.put = function(e4, t4) {
        var n4 = this, r4 = this.schema.primKey, i4 = r4.auto, a4 = r4.keyPath, o4 = e4;
        return a4 && i4 && (o4 = St2(a4)(e4)), this._trans(`readwrite`, function(e5) {
          return n4.core.mutate({ trans: e5, type: `put`, values: [o4], keys: t4 == null ? null : [t4] });
        }).then(function(e5) {
          return e5.numFailures ? F2.reject(e5.failures[0]) : e5.lastResult;
        }).then(function(t5) {
          if (a4) try {
            x2(e4, a4, t5);
          } catch {
          }
          return t5;
        });
      }, jt2.prototype.delete = function(e4) {
        var t4 = this;
        return this._trans(`readwrite`, function(n4) {
          return t4.core.mutate({ trans: n4, type: `delete`, keys: [e4] }).then(function(n5) {
            return Et2(t4, [e4], n5);
          }).then(function(e5) {
            return e5.numFailures ? F2.reject(e5.failures[0]) : void 0;
          });
        });
      }, jt2.prototype.clear = function() {
        var e4 = this;
        return this._trans(`readwrite`, function(t4) {
          return e4.core.mutate({ trans: t4, type: `deleteRange`, range: xt2 }).then(function(t5) {
            return Et2(e4, null, t5);
          });
        }).then(function(e5) {
          return e5.numFailures ? F2.reject(e5.failures[0]) : void 0;
        });
      }, jt2.prototype.bulkGet = function(e4) {
        var t4 = this;
        return this._trans(`readonly`, function(n4) {
          return t4.core.getMany({ keys: e4, trans: n4 }).then(function(e5) {
            return e5.map(function(e6) {
              return t4.hook.reading.fire(e6);
            });
          });
        });
      }, jt2.prototype.bulkAdd = function(e4, t4, n4) {
        var r4 = this, i4 = Array.isArray(t4) ? t4 : void 0, a4 = (n4 ||= i4 ? void 0 : t4) ? n4.allKeys : void 0;
        return this._trans(`readwrite`, function(t5) {
          var n5 = r4.schema.primKey, o4 = n5.auto, n5 = n5.keyPath;
          if (n5 && i4) throw new M2.InvalidArgument(`bulkAdd(): keys argument invalid on tables with inbound keys`);
          if (i4 && i4.length !== e4.length) throw new M2.InvalidArgument(`Arguments objects and keys must have the same length`);
          var s4 = e4.length, o4 = n5 && o4 ? e4.map(St2(n5)) : e4;
          return r4.core.mutate({ trans: t5, type: `add`, keys: i4, values: o4, wantResults: a4 }).then(function(e5) {
            var t6 = e5.numFailures, n6 = e5.failures;
            if (t6 === 0) return a4 ? e5.results : e5.lastResult;
            throw new ue2(`${r4.name}.bulkAdd(): ${t6} of ${s4} operations failed`, n6);
          });
        });
      }, jt2.prototype.bulkPut = function(e4, t4, n4) {
        var r4 = this, i4 = Array.isArray(t4) ? t4 : void 0, a4 = (n4 ||= i4 ? void 0 : t4) ? n4.allKeys : void 0;
        return this._trans(`readwrite`, function(t5) {
          var n5 = r4.schema.primKey, o4 = n5.auto, n5 = n5.keyPath;
          if (n5 && i4) throw new M2.InvalidArgument(`bulkPut(): keys argument invalid on tables with inbound keys`);
          if (i4 && i4.length !== e4.length) throw new M2.InvalidArgument(`Arguments objects and keys must have the same length`);
          var s4 = e4.length, o4 = n5 && o4 ? e4.map(St2(n5)) : e4;
          return r4.core.mutate({ trans: t5, type: `put`, keys: i4, values: o4, wantResults: a4 }).then(function(e5) {
            var t6 = e5.numFailures, n6 = e5.failures;
            if (t6 === 0) return a4 ? e5.results : e5.lastResult;
            throw new ue2(`${r4.name}.bulkPut(): ${t6} of ${s4} operations failed`, n6);
          });
        });
      }, jt2.prototype.bulkUpdate = function(e4) {
        var t4 = this, n4 = this.core, r4 = e4.map(function(e5) {
          return e5.key;
        }), i4 = e4.map(function(e5) {
          return e5.changes;
        }), a4 = [];
        return this._trans(`readwrite`, function(o4) {
          return n4.getMany({ trans: o4, keys: r4, cache: `clone` }).then(function(s4) {
            var c4 = [], l4 = [], u3 = (e4.forEach(function(e5, n5) {
              var r5 = e5.key, i5 = e5.changes, o5 = s4[n5];
              if (o5) {
                for (var u4 = 0, d3 = Object.keys(i5); u4 < d3.length; u4++) {
                  var f3 = d3[u4], p3 = i5[f3];
                  if (f3 === t4.schema.primKey.keyPath) {
                    if (L2(p3, r5) !== 0) throw new M2.Constraint(`Cannot update primary key in bulkUpdate()`);
                  } else x2(o5, f3, p3);
                }
                a4.push(n5), c4.push(r5), l4.push(o5);
              }
            }), c4.length);
            return n4.mutate({ trans: o4, type: `put`, keys: c4, values: l4, updates: { keys: r4, changeSpecs: i4 } }).then(function(e5) {
              var n5 = e5.numFailures, r5 = e5.failures;
              if (n5 === 0) return u3;
              for (var i5 = 0, o5 = Object.keys(r5); i5 < o5.length; i5++) {
                var s5, c5 = o5[i5], l5 = a4[Number(c5)];
                l5 != null && (s5 = r5[c5], delete r5[c5], r5[l5] = s5);
              }
              throw new ue2(`${t4.name}.bulkUpdate(): ${n5} of ${u3} operations failed`, r5);
            });
          });
        });
      }, jt2.prototype.bulkDelete = function(e4) {
        var t4 = this, n4 = e4.length;
        return this._trans(`readwrite`, function(n5) {
          return t4.core.mutate({ trans: n5, type: `delete`, keys: e4 }).then(function(n6) {
            return Et2(t4, e4, n6);
          });
        }).then(function(e5) {
          var r4 = e5.numFailures, i4 = e5.failures;
          if (r4 === 0) return e5.lastResult;
          throw new ue2(`${t4.name}.bulkDelete(): ${r4} of ${n4} operations failed`, i4);
        });
      };
      var At2 = jt2;
      function jt2() {
      }
      function Mt2(e4) {
        function t4(t5, r5) {
          if (r5) {
            for (var i4 = arguments.length, a4 = Array(i4 - 1); --i4; ) a4[i4 - 1] = arguments[i4];
            return n4[t5].subscribe.apply(null, a4), e4;
          }
          if (typeof t5 == `string`) return n4[t5];
        }
        var n4 = {};
        t4.addEventType = s4;
        for (var r4 = 1, o4 = arguments.length; r4 < o4; ++r4) s4(arguments[r4]);
        return t4;
        function s4(e5, r5, o5) {
          var c4, l4;
          if (typeof e5 != `object`) return r5 ||= be2, l4 = { subscribers: [], fire: o5 ||= N2, subscribe: function(e6) {
            l4.subscribers.indexOf(e6) === -1 && (l4.subscribers.push(e6), l4.fire = r5(l4.fire, e6));
          }, unsubscribe: function(e6) {
            l4.subscribers = l4.subscribers.filter(function(t5) {
              return t5 !== e6;
            }), l4.fire = l4.subscribers.reduce(r5, o5);
          } }, n4[e5] = t4[e5] = l4;
          i3(c4 = e5).forEach(function(e6) {
            var t5 = c4[e6];
            if (a3(t5)) s4(e6, c4[e6][0], c4[e6][1]);
            else {
              if (t5 !== `asap`) throw new M2.InvalidArgument(`Invalid event config`);
              var n5 = s4(e6, me2, function() {
                for (var e7 = arguments.length, t6 = Array(e7); e7--; ) t6[e7] = arguments[e7];
                n5.subscribers.forEach(function(e8) {
                  y2(function() {
                    e8.apply(null, t6);
                  });
                });
              });
            }
          });
        }
      }
      function Nt2(e4, t4) {
        return p2(t4).from({ prototype: e4 }), t4;
      }
      function Pt2(e4, t4) {
        return !(e4.filter || e4.algorithm || e4.or) && (t4 ? e4.justLimit : !e4.replayFilter);
      }
      function Ft2(e4, t4) {
        e4.filter = bt2(e4.filter, t4);
      }
      function It2(e4, t4, n4) {
        var r4 = e4.replayFilter;
        e4.replayFilter = r4 ? function() {
          return bt2(r4(), t4());
        } : t4, e4.justLimit = n4 && !r4;
      }
      function Lt2(e4, t4) {
        if (e4.isPrimKey) return t4.primaryKey;
        var n4 = t4.getIndexByKeyPath(e4.index);
        if (n4) return n4;
        throw new M2.Schema(`KeyPath ` + e4.index + ` on object store ` + t4.name + ` is not indexed`);
      }
      function Rt2(e4, t4, n4) {
        var r4 = Lt2(e4, t4.schema);
        return t4.openCursor({ trans: n4, values: !e4.keysOnly, reverse: e4.dir === `prev`, unique: !!e4.unique, query: { index: r4, range: e4.range } });
      }
      function zt2(e4, t4, n4, r4) {
        var i4, a4, o4 = e4.replayFilter ? bt2(e4.filter, e4.replayFilter()) : e4.filter;
        return e4.or ? (i4 = {}, a4 = function(e5, n5, r5) {
          var a5, s4;
          o4 && !o4(n5, r5, function(e6) {
            return n5.stop(e6);
          }, function(e6) {
            return n5.fail(e6);
          }) || ((s4 = `` + (a5 = n5.primaryKey)) == `[object ArrayBuffer]` && (s4 = `` + new Uint8Array(a5)), l3(i4, s4)) || (i4[s4] = true, t4(e5, n5, r5));
        }, Promise.all([e4.or._iterate(a4, n4), Bt2(Rt2(e4, r4, n4), e4.algorithm, a4, !e4.keysOnly && e4.valueMapper)])) : Bt2(Rt2(e4, r4, n4), bt2(e4.algorithm, o4), t4, !e4.keysOnly && e4.valueMapper);
      }
      function Bt2(e4, t4, n4, r4) {
        var i4 = Xe2(r4 ? function(e5, t5, i5) {
          return n4(r4(e5), t5, i5);
        } : n4);
        return e4.then(function(e5) {
          if (e5) return e5.start(function() {
            var n5 = function() {
              return e5.continue();
            };
            t4 && !t4(e5, function(e6) {
              return n5 = e6;
            }, function(t5) {
              e5.stop(t5), n5 = N2;
            }, function(t5) {
              e5.fail(t5), n5 = N2;
            }) || i4(e5.value, e5, function(e6) {
              return n5 = e6;
            }), n5();
          });
        });
      }
      Ht2.prototype._read = function(e4, t4) {
        var n4 = this._ctx;
        return n4.error ? n4.table._trans(null, pt2.bind(null, n4.error)) : n4.table._trans(`readonly`, e4).then(t4);
      }, Ht2.prototype._write = function(e4) {
        var t4 = this._ctx;
        return t4.error ? t4.table._trans(null, pt2.bind(null, t4.error)) : t4.table._trans(`readwrite`, e4, `locked`);
      }, Ht2.prototype._addAlgorithm = function(e4) {
        var t4 = this._ctx;
        t4.algorithm = bt2(t4.algorithm, e4);
      }, Ht2.prototype._iterate = function(e4, t4) {
        return zt2(this._ctx, e4, t4, this._ctx.table.core);
      }, Ht2.prototype.clone = function(e4) {
        var t4 = Object.create(this.constructor.prototype), n4 = Object.create(this._ctx);
        return e4 && o3(n4, e4), t4._ctx = n4, t4;
      }, Ht2.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Ht2.prototype.each = function(e4) {
        var t4 = this._ctx;
        return this._read(function(n4) {
          return zt2(t4, e4, n4, t4.table.core);
        });
      }, Ht2.prototype.count = function(e4) {
        var t4 = this;
        return this._read(function(e5) {
          var n4, r4 = t4._ctx, i4 = r4.table.core;
          return Pt2(r4, true) ? i4.count({ trans: e5, query: { index: Lt2(r4, i4.schema), range: r4.range } }).then(function(e6) {
            return Math.min(e6, r4.limit);
          }) : (n4 = 0, zt2(r4, function() {
            return ++n4, false;
          }, e5, i4).then(function() {
            return n4;
          }));
        }).then(e4);
      }, Ht2.prototype.sortBy = function(e4, t4) {
        var n4 = e4.split(`.`).reverse(), r4 = n4[0], i4 = n4.length - 1;
        function a4(e5, t5) {
          return t5 ? a4(e5[n4[t5]], t5 - 1) : e5[r4];
        }
        var o4 = this._ctx.dir === `next` ? 1 : -1;
        function s4(e5, t5) {
          return L2(a4(e5, i4), a4(t5, i4)) * o4;
        }
        return this.toArray(function(e5) {
          return e5.slice().sort(s4);
        }).then(t4);
      }, Ht2.prototype.toArray = function(e4) {
        var t4 = this;
        return this._read(function(e5) {
          var n4, r4, i4, a4 = t4._ctx;
          return Pt2(a4, true) && 0 < a4.limit ? (n4 = a4.valueMapper, r4 = Lt2(a4, a4.table.core.schema), a4.table.core.query({ trans: e5, limit: a4.limit, values: true, direction: a4.dir === `prev` ? `prev` : void 0, query: { index: r4, range: a4.range } }).then(function(e6) {
            return e6 = e6.result, n4 ? e6.map(n4) : e6;
          })) : (i4 = [], zt2(a4, function(e6) {
            return i4.push(e6);
          }, e5, a4.table.core).then(function() {
            return i4;
          }));
        }, e4);
      }, Ht2.prototype.offset = function(e4) {
        var t4 = this._ctx;
        return e4 <= 0 || (t4.offset += e4, Pt2(t4) ? It2(t4, function() {
          var t5 = e4;
          return function(e5, n4) {
            return t5 === 0 || (t5 === 1 ? --t5 : n4(function() {
              e5.advance(t5), t5 = 0;
            }), false);
          };
        }) : It2(t4, function() {
          var t5 = e4;
          return function() {
            return --t5 < 0;
          };
        })), this;
      }, Ht2.prototype.limit = function(e4) {
        return this._ctx.limit = Math.min(this._ctx.limit, e4), It2(this._ctx, function() {
          var t4 = e4;
          return function(e5, n4, r4) {
            return --t4 <= 0 && n4(r4), 0 <= t4;
          };
        }, true), this;
      }, Ht2.prototype.until = function(e4, t4) {
        return Ft2(this._ctx, function(n4, r4, i4) {
          return !e4(n4.value) || (r4(i4), t4);
        }), this;
      }, Ht2.prototype.first = function(e4) {
        return this.limit(1).toArray(function(e5) {
          return e5[0];
        }).then(e4);
      }, Ht2.prototype.last = function(e4) {
        return this.reverse().first(e4);
      }, Ht2.prototype.filter = function(e4) {
        var t4;
        return Ft2(this._ctx, function(t5) {
          return e4(t5.value);
        }), (t4 = this._ctx).isMatch = bt2(t4.isMatch, e4), this;
      }, Ht2.prototype.and = function(e4) {
        return this.filter(e4);
      }, Ht2.prototype.or = function(e4) {
        return new this.db.WhereClause(this._ctx.table, e4, this);
      }, Ht2.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === `prev` ? `next` : `prev`, this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Ht2.prototype.desc = function() {
        return this.reverse();
      }, Ht2.prototype.eachKey = function(e4) {
        var t4 = this._ctx;
        return t4.keysOnly = !t4.isMatch, this.each(function(t5, n4) {
          e4(n4.key, n4);
        });
      }, Ht2.prototype.eachUniqueKey = function(e4) {
        return this._ctx.unique = `unique`, this.eachKey(e4);
      }, Ht2.prototype.eachPrimaryKey = function(e4) {
        var t4 = this._ctx;
        return t4.keysOnly = !t4.isMatch, this.each(function(t5, n4) {
          e4(n4.primaryKey, n4);
        });
      }, Ht2.prototype.keys = function(e4) {
        var t4 = this._ctx, n4 = (t4.keysOnly = !t4.isMatch, []);
        return this.each(function(e5, t5) {
          n4.push(t5.key);
        }).then(function() {
          return n4;
        }).then(e4);
      }, Ht2.prototype.primaryKeys = function(e4) {
        var t4 = this._ctx;
        if (Pt2(t4, true) && 0 < t4.limit) return this._read(function(e5) {
          var n5 = Lt2(t4, t4.table.core.schema);
          return t4.table.core.query({ trans: e5, values: false, limit: t4.limit, direction: t4.dir === `prev` ? `prev` : void 0, query: { index: n5, range: t4.range } });
        }).then(function(e5) {
          return e5.result;
        }).then(e4);
        t4.keysOnly = !t4.isMatch;
        var n4 = [];
        return this.each(function(e5, t5) {
          n4.push(t5.primaryKey);
        }).then(function() {
          return n4;
        }).then(e4);
      }, Ht2.prototype.uniqueKeys = function(e4) {
        return this._ctx.unique = `unique`, this.keys(e4);
      }, Ht2.prototype.firstKey = function(e4) {
        return this.limit(1).keys(function(e5) {
          return e5[0];
        }).then(e4);
      }, Ht2.prototype.lastKey = function(e4) {
        return this.reverse().firstKey(e4);
      }, Ht2.prototype.distinct = function() {
        var e4, t4 = this._ctx, t4 = t4.index && t4.table.schema.idxByName[t4.index];
        return t4 && t4.multi && (e4 = {}, Ft2(this._ctx, function(t5) {
          var t5 = t5.primaryKey.toString(), n4 = l3(e4, t5);
          return e4[t5] = true, !n4;
        })), this;
      }, Ht2.prototype.modify = function(e4) {
        var t4 = this, n4 = this._ctx;
        return this._write(function(r4) {
          function a4(e5, t5) {
            var n5 = t5.failures;
            p3 += e5 - t5.numFailures;
            for (var r5 = 0, a5 = i3(n5); r5 < a5.length; r5++) {
              var o5 = a5[r5];
              f3.push(n5[o5]);
            }
          }
          var o4 = typeof e4 == `function` ? e4 : function(t5) {
            return kt2(t5, e4);
          }, s4 = n4.table.core, c4 = s4.schema.primaryKey, l4 = c4.outbound, u3 = c4.extractKey, d3 = 200, c4 = t4.db._options.modifyChunkSize, f3 = (c4 && (d3 = typeof c4 == `object` ? c4[s4.name] || c4[`*`] || 200 : c4), []), p3 = 0, m3 = [], h3 = e4 === Ut2;
          return t4.clone().primaryKeys().then(function(t5) {
            function i4(f4) {
              var p4 = Math.min(d3, t5.length - f4), m4 = t5.slice(f4, f4 + p4);
              return (h3 ? Promise.resolve([]) : s4.getMany({ trans: r4, keys: m4, cache: `immutable` })).then(function(g3) {
                var _3 = [], v3 = [], y3 = l4 ? [] : null, b3 = h3 ? m4 : [];
                if (!h3) for (var x3 = 0; x3 < p4; ++x3) {
                  var S3 = g3[x3], C3 = { value: O2(S3), primKey: t5[f4 + x3] };
                  false !== o4.call(C3, C3.value, C3) && (C3.value == null ? b3.push(t5[f4 + x3]) : l4 || L2(u3(S3), u3(C3.value)) === 0 ? (v3.push(C3.value), l4 && y3.push(t5[f4 + x3])) : (b3.push(t5[f4 + x3]), _3.push(C3.value)));
                }
                return Promise.resolve(0 < _3.length && s4.mutate({ trans: r4, type: `add`, values: _3 }).then(function(e5) {
                  for (var t6 in e5.failures) b3.splice(parseInt(t6), 1);
                  a4(_3.length, e5);
                })).then(function() {
                  return (0 < v3.length || c5 && typeof e4 == `object`) && s4.mutate({ trans: r4, type: `put`, keys: y3, values: v3, criteria: c5, changeSpec: typeof e4 != `function` && e4, isAdditionalChunk: 0 < f4 }).then(function(e5) {
                    return a4(v3.length, e5);
                  });
                }).then(function() {
                  return (0 < b3.length || c5 && h3) && s4.mutate({ trans: r4, type: `delete`, keys: b3, criteria: c5, isAdditionalChunk: 0 < f4 }).then(function(e5) {
                    return Et2(n4.table, b3, e5);
                  }).then(function(e5) {
                    return a4(b3.length, e5);
                  });
                }).then(function() {
                  return t5.length > f4 + p4 && i4(f4 + d3);
                });
              });
            }
            var c5 = Pt2(n4) && n4.limit === 1 / 0 && (typeof e4 != `function` || h3) && { index: n4.index, range: n4.range };
            return i4(0).then(function() {
              if (0 < f3.length) throw new le2(`Error modifying one or more objects`, f3, p3, m3);
              return t5.length;
            });
          });
        });
      }, Ht2.prototype.delete = function() {
        var e4 = this._ctx, t4 = e4.range;
        return !Pt2(e4) || e4.table.schema.yProps || !e4.isPrimKey && t4.type !== 3 ? this.modify(Ut2) : this._write(function(n4) {
          var r4 = e4.table.core.schema.primaryKey, i4 = t4;
          return e4.table.core.count({ trans: n4, query: { index: r4, range: i4 } }).then(function(t5) {
            return e4.table.core.mutate({ trans: n4, type: `deleteRange`, range: i4 }).then(function(e5) {
              var n5 = e5.failures, e5 = e5.numFailures;
              if (e5) throw new le2(`Could not delete some values`, Object.keys(n5).map(function(e6) {
                return n5[e6];
              }), t5 - e5);
              return t5 - e5;
            });
          });
        });
      };
      var Vt2 = Ht2;
      function Ht2() {
      }
      var Ut2 = function(e4, t4) {
        return t4.value = null;
      };
      function Wt2(e4, t4) {
        return e4 < t4 ? -1 : e4 === t4 ? 0 : 1;
      }
      function Gt2(e4, t4) {
        return t4 < e4 ? -1 : e4 === t4 ? 0 : 1;
      }
      function Kt2(e4, t4, n4) {
        return e4 = e4 instanceof Zt2 ? new e4.Collection(e4) : e4, e4._ctx.error = new (n4 || TypeError)(t4), e4;
      }
      function qt2(e4) {
        return new e4.Collection(e4, function() {
          return Xt2(``);
        }).limit(0);
      }
      function Jt2(e4, t4, n4, r4) {
        var i4, a4, o4, s4, c4, l4, u3, d3 = n4.length;
        if (!n4.every(function(e5) {
          return typeof e5 == `string`;
        })) return Kt2(e4, gt2);
        function f3(e5) {
          i4 = e5 === `next` ? function(e6) {
            return e6.toUpperCase();
          } : function(e6) {
            return e6.toLowerCase();
          }, a4 = e5 === `next` ? function(e6) {
            return e6.toLowerCase();
          } : function(e6) {
            return e6.toUpperCase();
          }, o4 = e5 === `next` ? Wt2 : Gt2;
          var t5 = n4.map(function(e6) {
            return { lower: a4(e6), upper: i4(e6) };
          }).sort(function(e6, t6) {
            return o4(e6.lower, t6.lower);
          });
          s4 = t5.map(function(e6) {
            return e6.upper;
          }), c4 = t5.map(function(e6) {
            return e6.lower;
          }), u3 = (l4 = e5) === `next` ? `` : r4;
        }
        f3(`next`);
        var e4 = new e4.Collection(e4, function() {
          return Yt2(s4[0], c4[d3 - 1] + r4);
        }), p3 = (e4._ondirectionchange = function(e5) {
          f3(e5);
        }, 0);
        return e4._addAlgorithm(function(e5, n5, r5) {
          var i5 = e5.key;
          if (typeof i5 == `string`) {
            var f4 = a4(i5);
            if (t4(f4, c4, p3)) return true;
            for (var m3 = null, h3 = p3; h3 < d3; ++h3) {
              var g3 = ((e6, t5, n6, r6, i6, a5) => {
                for (var o5 = Math.min(e6.length, r6.length), s5 = -1, c5 = 0; c5 < o5; ++c5) {
                  var l5 = t5[c5];
                  if (l5 !== r6[c5]) return i6(e6[c5], n6[c5]) < 0 ? e6.substr(0, c5) + n6[c5] + n6.substr(c5 + 1) : i6(e6[c5], r6[c5]) < 0 ? e6.substr(0, c5) + r6[c5] + n6.substr(c5 + 1) : 0 <= s5 ? e6.substr(0, s5) + t5[s5] + n6.substr(s5 + 1) : null;
                  i6(e6[c5], l5) < 0 && (s5 = c5);
                }
                return o5 < r6.length && a5 === `next` ? e6 + n6.substr(e6.length) : o5 < e6.length && a5 === `prev` ? e6.substr(0, n6.length) : s5 < 0 ? null : e6.substr(0, s5) + r6[s5] + n6.substr(s5 + 1);
              })(i5, f4, s4[h3], c4[h3], o4, l4);
              g3 === null && m3 === null ? p3 = h3 + 1 : (m3 === null || 0 < o4(m3, g3)) && (m3 = g3);
            }
            n5(m3 === null ? r5 : function() {
              e5.continue(m3 + u3);
            });
          }
          return false;
        }), e4;
      }
      function Yt2(e4, t4, n4, r4) {
        return { type: 2, lower: e4, upper: t4, lowerOpen: n4, upperOpen: r4 };
      }
      function Xt2(e4) {
        return { type: 1, lower: e4, upper: e4 };
      }
      Object.defineProperty(Qt2.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: false, configurable: true }), Qt2.prototype.between = function(e4, t4, n4, r4) {
        n4 = false !== n4, r4 = true === r4;
        try {
          return 0 < this._cmp(e4, t4) || this._cmp(e4, t4) === 0 && (n4 || r4) && (!n4 || !r4) ? qt2(this) : new this.Collection(this, function() {
            return Yt2(e4, t4, !n4, !r4);
          });
        } catch {
          return Kt2(this, ht2);
        }
      }, Qt2.prototype.equals = function(e4) {
        return e4 == null ? Kt2(this, ht2) : new this.Collection(this, function() {
          return Xt2(e4);
        });
      }, Qt2.prototype.above = function(e4) {
        return e4 == null ? Kt2(this, ht2) : new this.Collection(this, function() {
          return Yt2(e4, void 0, true);
        });
      }, Qt2.prototype.aboveOrEqual = function(e4) {
        return e4 == null ? Kt2(this, ht2) : new this.Collection(this, function() {
          return Yt2(e4, void 0, false);
        });
      }, Qt2.prototype.below = function(e4) {
        return e4 == null ? Kt2(this, ht2) : new this.Collection(this, function() {
          return Yt2(void 0, e4, false, true);
        });
      }, Qt2.prototype.belowOrEqual = function(e4) {
        return e4 == null ? Kt2(this, ht2) : new this.Collection(this, function() {
          return Yt2(void 0, e4);
        });
      }, Qt2.prototype.startsWith = function(e4) {
        return typeof e4 == `string` ? this.between(e4, e4 + mt2, true, true) : Kt2(this, gt2);
      }, Qt2.prototype.startsWithIgnoreCase = function(e4) {
        return e4 === `` ? this.startsWith(e4) : Jt2(this, function(e5, t4) {
          return e5.indexOf(t4[0]) === 0;
        }, [e4], mt2);
      }, Qt2.prototype.equalsIgnoreCase = function(e4) {
        return Jt2(this, function(e5, t4) {
          return e5 === t4[0];
        }, [e4], ``);
      }, Qt2.prototype.anyOfIgnoreCase = function() {
        var e4 = ae2.apply(ie2, arguments);
        return e4.length === 0 ? qt2(this) : Jt2(this, function(e5, t4) {
          return t4.indexOf(e5) !== -1;
        }, e4, ``);
      }, Qt2.prototype.startsWithAnyOfIgnoreCase = function() {
        var e4 = ae2.apply(ie2, arguments);
        return e4.length === 0 ? qt2(this) : Jt2(this, function(e5, t4) {
          return t4.some(function(t5) {
            return e5.indexOf(t5) === 0;
          });
        }, e4, mt2);
      }, Qt2.prototype.anyOf = function() {
        var e4, t4, n4 = this, r4 = ae2.apply(ie2, arguments), i4 = this._cmp;
        try {
          r4.sort(i4);
        } catch {
          return Kt2(this, ht2);
        }
        return r4.length === 0 ? qt2(this) : ((e4 = new this.Collection(this, function() {
          return Yt2(r4[0], r4[r4.length - 1]);
        }))._ondirectionchange = function(e5) {
          i4 = e5 === `next` ? n4._ascending : n4._descending, r4.sort(i4);
        }, t4 = 0, e4._addAlgorithm(function(e5, n5, a4) {
          for (var o4 = e5.key; 0 < i4(o4, r4[t4]); ) if (++t4 === r4.length) return n5(a4), false;
          return i4(o4, r4[t4]) === 0 || (n5(function() {
            e5.continue(r4[t4]);
          }), false);
        }), e4);
      }, Qt2.prototype.notEqual = function(e4) {
        return this.inAnyRange([[-1 / 0, e4], [e4, this.db._maxKey]], { includeLowers: false, includeUppers: false });
      }, Qt2.prototype.noneOf = function() {
        var e4 = ae2.apply(ie2, arguments);
        if (e4.length === 0) return new this.Collection(this);
        try {
          e4.sort(this._ascending);
        } catch {
          return Kt2(this, ht2);
        }
        var t4 = e4.reduce(function(e5, t5) {
          return e5 ? e5.concat([[e5[e5.length - 1][1], t5]]) : [[-1 / 0, t5]];
        }, null);
        return t4.push([e4[e4.length - 1], this.db._maxKey]), this.inAnyRange(t4, { includeLowers: false, includeUppers: false });
      }, Qt2.prototype.inAnyRange = function(e4, t4) {
        var n4 = this, r4 = this._cmp, i4 = this._ascending, a4 = this._descending, o4 = this._min, s4 = this._max;
        if (e4.length === 0) return qt2(this);
        if (!e4.every(function(e5) {
          return e5[0] !== void 0 && e5[1] !== void 0 && i4(e5[0], e5[1]) <= 0;
        })) return Kt2(this, `First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower`, M2.InvalidArgument);
        var c4 = !t4 || false !== t4.includeLowers, l4 = t4 && true === t4.includeUppers, u3, d3 = i4;
        function f3(e5, t5) {
          return d3(e5[0], t5[0]);
        }
        try {
          (u3 = e4.reduce(function(e5, t5) {
            for (var n5 = 0, i5 = e5.length; n5 < i5; ++n5) {
              var a5 = e5[n5];
              if (r4(t5[0], a5[1]) < 0 && 0 < r4(t5[1], a5[0])) {
                a5[0] = o4(a5[0], t5[0]), a5[1] = s4(a5[1], t5[1]);
                break;
              }
            }
            return n5 === i5 && e5.push(t5), e5;
          }, [])).sort(f3);
        } catch {
          return Kt2(this, ht2);
        }
        var p3 = 0, m3 = l4 ? function(e5) {
          return 0 < i4(e5, u3[p3][1]);
        } : function(e5) {
          return 0 <= i4(e5, u3[p3][1]);
        }, h3 = c4 ? function(e5) {
          return 0 < a4(e5, u3[p3][0]);
        } : function(e5) {
          return 0 <= a4(e5, u3[p3][0]);
        }, g3 = m3, t4 = new this.Collection(this, function() {
          return Yt2(u3[0][0], u3[u3.length - 1][1], !c4, !l4);
        });
        return t4._ondirectionchange = function(e5) {
          d3 = e5 === `next` ? (g3 = m3, i4) : (g3 = h3, a4), u3.sort(f3);
        }, t4._addAlgorithm(function(e5, t5, r5) {
          for (var a5, o5 = e5.key; g3(o5); ) if (++p3 === u3.length) return t5(r5), false;
          return !m3(a5 = o5) && !h3(a5) || (n4._cmp(o5, u3[p3][1]) === 0 || n4._cmp(o5, u3[p3][0]) === 0 || t5(function() {
            d3 === i4 ? e5.continue(u3[p3][0]) : e5.continue(u3[p3][1]);
          }), false);
        }), t4;
      }, Qt2.prototype.startsWithAnyOf = function() {
        var e4 = ae2.apply(ie2, arguments);
        return e4.every(function(e5) {
          return typeof e5 == `string`;
        }) ? e4.length === 0 ? qt2(this) : this.inAnyRange(e4.map(function(e5) {
          return [e5, e5 + mt2];
        })) : Kt2(this, `startsWithAnyOf() only works with strings`);
      };
      var Zt2 = Qt2;
      function Qt2() {
      }
      function $t2(e4) {
        return Xe2(function(t4) {
          return en2(t4), e4(t4.target.error), false;
        });
      }
      function en2(e4) {
        e4.stopPropagation && e4.stopPropagation(), e4.preventDefault && e4.preventDefault();
      }
      var tn2 = `storagemutated`, nn2 = `x-storagemutated-1`, rn2 = Mt2(null, tn2), an2 = (on2.prototype._lock = function() {
        return v2(!P2.global), ++this._reculock, this._reculock !== 1 || P2.global || (P2.lockOwnerFor = this), this;
      }, on2.prototype._unlock = function() {
        if (v2(!P2.global), --this._reculock == 0) for (P2.global || (P2.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e4 = this._blockedFuncs.shift();
          try {
            ut2(e4[1], e4[0]);
          } catch {
          }
        }
        return this;
      }, on2.prototype._locked = function() {
        return this._reculock && P2.lockOwnerFor !== this;
      }, on2.prototype.create = function(e4) {
        var t4 = this;
        if (this.mode) {
          var n4 = this.db.idbdb, r4 = this.db._state.dbOpenError;
          if (v2(!this.idbtrans), !e4 && !n4) switch (r4 && r4.name) {
            case `DatabaseClosedError`:
              throw new M2.DatabaseClosed(r4);
            case `MissingAPIError`:
              throw new M2.MissingAPI(r4.message, r4);
            default:
              throw new M2.OpenFailed(r4);
          }
          if (!this.active) throw new M2.TransactionInactive();
          v2(this._completion._state === null), (e4 = this.idbtrans = e4 || (this.db.core || n4).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Xe2(function(n5) {
            en2(n5), t4._reject(e4.error);
          }), e4.onabort = Xe2(function(n5) {
            en2(n5), t4.active && t4._reject(new M2.Abort(e4.error)), t4.active = false, t4.on(`abort`).fire(n5);
          }), e4.oncomplete = Xe2(function() {
            t4.active = false, t4._resolve(), `mutatedParts` in e4 && rn2.storagemutated.fire(e4.mutatedParts);
          });
        }
        return this;
      }, on2.prototype._promise = function(e4, t4, n4) {
        var r4, i4 = this;
        return e4 === `readwrite` && this.mode !== `readwrite` ? pt2(new M2.ReadOnly(`Transaction is readonly`)) : this.active ? this._locked() ? new F2(function(r5, a4) {
          i4._blockedFuncs.push([function() {
            i4._promise(e4, t4, n4).then(r5, a4);
          }, P2]);
        }) : n4 ? rt2(function() {
          var e5 = new F2(function(e6, n5) {
            i4._lock();
            var r5 = t4(e6, n5, i4);
            r5 && r5.then && r5.then(e6, n5);
          });
          return e5.finally(function() {
            return i4._unlock();
          }), e5._lib = true, e5;
        }) : ((r4 = new F2(function(e5, n5) {
          var r5 = t4(e5, n5, i4);
          r5 && r5.then && r5.then(e5, n5);
        }))._lib = true, r4) : pt2(new M2.TransactionInactive());
      }, on2.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, on2.prototype.waitFor = function(e4) {
        var t4, n4 = this._root(), r4 = F2.resolve(e4), i4 = (n4._waitingFor ? n4._waitingFor = n4._waitingFor.then(function() {
          return r4;
        }) : (n4._waitingFor = r4, n4._waitingQueue = [], t4 = n4.idbtrans.objectStore(n4.storeNames[0]), (function e5() {
          for (++n4._spinCount; n4._waitingQueue.length; ) n4._waitingQueue.shift()();
          n4._waitingFor && (t4.get(-1 / 0).onsuccess = e5);
        })()), n4._waitingFor);
        return new F2(function(e5, t5) {
          r4.then(function(t6) {
            return n4._waitingQueue.push(Xe2(e5.bind(null, t6)));
          }, function(e6) {
            return n4._waitingQueue.push(Xe2(t5.bind(null, e6)));
          }).finally(function() {
            n4._waitingFor === i4 && (n4._waitingFor = null);
          });
        });
      }, on2.prototype.abort = function() {
        this.active && (this.active = false, this.idbtrans && this.idbtrans.abort(), this._reject(new M2.Abort()));
      }, on2.prototype.table = function(e4) {
        var t4 = this._memoizedTables ||= {};
        if (l3(t4, e4)) return t4[e4];
        var n4 = this.schema[e4];
        if (n4) return (n4 = new this.db.Table(e4, n4, this)).core = this.db.core.table(e4), t4[e4] = n4;
        throw new M2.NotFound(`Table ` + e4 + ` not part of transaction`);
      }, on2);
      function on2() {
      }
      function sn2(e4, t4, n4, r4, i4, a4, o4, s4) {
        return { name: e4, keyPath: t4, unique: n4, multi: r4, auto: i4, compound: a4, src: (n4 && !o4 ? `&` : ``) + (r4 ? `*` : ``) + (i4 ? `++` : ``) + cn2(t4), type: s4 };
      }
      function cn2(e4) {
        return typeof e4 == `string` ? e4 : e4 ? `[` + [].join.call(e4, `+`) + `]` : ``;
      }
      function ln2(e4, t4, n4) {
        return { name: e4, primKey: t4, indexes: n4, mappedClass: null, idxByName: (r4 = function(e5) {
          return [e5.name, e5];
        }, n4.reduce(function(e5, t5, n5) {
          return t5 = r4(t5, n5), t5 && (e5[t5[0]] = t5[1]), e5;
        }, {})) };
        var r4;
      }
      var un2 = function(e4) {
        try {
          return e4.only([[]]), un2 = function() {
            return [[]];
          }, [[]];
        } catch {
          return un2 = function() {
            return mt2;
          }, mt2;
        }
      };
      function dn2(e4) {
        return e4 == null ? function() {
        } : typeof e4 == `string` ? (t4 = e4).split(`.`).length === 1 ? function(e5) {
          return e5[t4];
        } : function(e5) {
          return b2(e5, t4);
        } : function(t5) {
          return b2(t5, e4);
        };
        var t4;
      }
      function fn2(e4) {
        return [].slice.call(e4);
      }
      var pn2 = 0;
      function mn2(e4) {
        return e4 == null ? `:id` : typeof e4 == `string` ? e4 : `[${e4.join(`+`)}]`;
      }
      function hn2(e4, t4, n4) {
        function r4(e5) {
          if (e5.type === 3) return null;
          if (e5.type === 4) throw Error(`Cannot convert never type to IDBKeyRange`);
          var n5 = e5.lower, r5 = e5.upper, i5 = e5.lowerOpen, e5 = e5.upperOpen;
          return n5 === void 0 ? r5 === void 0 ? null : t4.upperBound(r5, !!e5) : r5 === void 0 ? t4.lowerBound(n5, !!i5) : t4.bound(n5, r5, !!i5, !!e5);
        }
        function i4(e5) {
          var t5, n5, i5 = e5.name;
          return { name: i5, schema: e5, mutate: function(e6) {
            var t6 = e6.trans, n6 = e6.type, a4 = e6.keys, o5 = e6.values, s5 = e6.range;
            return new Promise(function(e7, c5) {
              e7 = Xe2(e7);
              var l5 = t6.objectStore(i5), u4 = l5.keyPath == null, d4 = n6 === `put` || n6 === `add`;
              if (!d4 && n6 !== `delete` && n6 !== `deleteRange`) throw Error(`Invalid operation type: ` + n6);
              var f3, p3 = (a4 || o5 || { length: 1 }).length;
              if (a4 && o5 && a4.length !== o5.length) throw Error(`Given keys array must have same length as given values array.`);
              if (p3 === 0) return e7({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function m3(e8) {
                ++_3, en2(e8);
              }
              var h3 = [], g3 = [], _3 = 0;
              if (n6 === `deleteRange`) {
                if (s5.type === 4) return e7({ numFailures: _3, failures: g3, results: [], lastResult: void 0 });
                s5.type === 3 ? h3.push(f3 = l5.clear()) : h3.push(f3 = l5.delete(r4(s5)));
              } else {
                var u4 = d4 ? u4 ? [o5, a4] : [o5, null] : [a4, null], v3 = u4[0], y3 = u4[1];
                if (d4) for (var b3 = 0; b3 < p3; ++b3) h3.push(f3 = y3 && y3[b3] !== void 0 ? l5[n6](v3[b3], y3[b3]) : l5[n6](v3[b3])), f3.onerror = m3;
                else for (b3 = 0; b3 < p3; ++b3) h3.push(f3 = l5[n6](v3[b3])), f3.onerror = m3;
              }
              function x3(t7) {
                t7 = t7.target.result, h3.forEach(function(e8, t8) {
                  return e8.error != null && (g3[t8] = e8.error);
                }), e7({ numFailures: _3, failures: g3, results: n6 === `delete` ? a4 : h3.map(function(e8) {
                  return e8.result;
                }), lastResult: t7 });
              }
              f3.onerror = function(e8) {
                m3(e8), x3(e8);
              }, f3.onsuccess = x3;
            });
          }, getMany: function(e6) {
            var t6 = e6.trans, n6 = e6.keys;
            return new Promise(function(e7, r5) {
              e7 = Xe2(e7);
              for (var a4, o5 = t6.objectStore(i5), s5 = n6.length, c5 = Array(s5), l5 = 0, u4 = 0, d4 = function(t7) {
                t7 = t7.target, c5[t7._pos] = t7.result, ++u4 === l5 && e7(c5);
              }, f3 = $t2(r5), p3 = 0; p3 < s5; ++p3) n6[p3] != null && ((a4 = o5.get(n6[p3]))._pos = p3, a4.onsuccess = d4, a4.onerror = f3, ++l5);
              l5 === 0 && e7(c5);
            });
          }, get: function(e6) {
            var t6 = e6.trans, n6 = e6.key;
            return new Promise(function(e7, r5) {
              e7 = Xe2(e7);
              var a4 = t6.objectStore(i5).get(n6);
              a4.onsuccess = function(t7) {
                return e7(t7.target.result);
              }, a4.onerror = $t2(r5);
            });
          }, query: (t5 = c4, n5 = l4, function(e6) {
            return new Promise(function(a4, o5) {
              a4 = Xe2(a4);
              var s5, c5, l5, u4, d4 = e6.trans, f3 = e6.values, p3 = e6.limit, m3 = e6.query, h3 = (h3 = e6.direction) ?? `next`, g3 = p3 === 1 / 0 ? void 0 : p3, _3 = m3.index, m3 = m3.range, d4 = d4.objectStore(i5), d4 = _3.isPrimaryKey ? d4 : d4.index(_3.name), _3 = r4(m3);
              if (p3 === 0) return a4({ result: [] });
              n5 ? (m3 = { query: _3, count: g3, direction: h3 }, (s5 = f3 ? d4.getAll(m3) : d4.getAllKeys(m3)).onsuccess = function(e7) {
                return a4({ result: e7.target.result });
              }, s5.onerror = $t2(o5)) : t5 && h3 === `next` ? ((s5 = f3 ? d4.getAll(_3, g3) : d4.getAllKeys(_3, g3)).onsuccess = function(e7) {
                return a4({ result: e7.target.result });
              }, s5.onerror = $t2(o5)) : (c5 = 0, l5 = !f3 && `openKeyCursor` in d4 ? d4.openKeyCursor(_3, h3) : d4.openCursor(_3, h3), u4 = [], l5.onsuccess = function() {
                var e7 = l5.result;
                return !e7 || (u4.push(f3 ? e7.value : e7.primaryKey), ++c5 === p3) ? a4({ result: u4 }) : void e7.continue();
              }, l5.onerror = $t2(o5));
            });
          }), openCursor: function(e6) {
            var t6 = e6.trans, n6 = e6.values, a4 = e6.query, o5 = e6.reverse, s5 = e6.unique;
            return new Promise(function(e7, c5) {
              e7 = Xe2(e7);
              var l5 = a4.index, u4 = a4.range, d4 = t6.objectStore(i5), d4 = l5.isPrimaryKey ? d4 : d4.index(l5.name), l5 = o5 ? s5 ? `prevunique` : `prev` : s5 ? `nextunique` : `next`, f3 = !n6 && `openKeyCursor` in d4 ? d4.openKeyCursor(r4(u4), l5) : d4.openCursor(r4(u4), l5);
              f3.onerror = $t2(c5), f3.onsuccess = Xe2(function(n7) {
                var r5, i6, a5, o6, s6 = f3.result;
                s6 ? (s6.___id = ++pn2, s6.done = false, r5 = s6.continue.bind(s6), i6 = (i6 = s6.continuePrimaryKey) && i6.bind(s6), a5 = s6.advance.bind(s6), o6 = function() {
                  throw Error(`Cursor not stopped`);
                }, s6.trans = t6, s6.stop = s6.continue = s6.continuePrimaryKey = s6.advance = function() {
                  throw Error(`Cursor not started`);
                }, s6.fail = Xe2(c5), s6.next = function() {
                  var e8 = this, t7 = 1;
                  return this.start(function() {
                    return t7-- ? e8.continue() : e8.stop();
                  }).then(function() {
                    return e8;
                  });
                }, s6.start = function(e8) {
                  function t7() {
                    if (f3.result) try {
                      e8();
                    } catch (e9) {
                      s6.fail(e9);
                    }
                    else s6.done = true, s6.start = function() {
                      throw Error(`Cursor behind last entry`);
                    }, s6.stop();
                  }
                  var n8 = new Promise(function(e9, t8) {
                    e9 = Xe2(e9), f3.onerror = $t2(t8), s6.fail = t8, s6.stop = function(t9) {
                      s6.stop = s6.continue = s6.continuePrimaryKey = s6.advance = o6, e9(t9);
                    };
                  });
                  return f3.onsuccess = Xe2(function(e9) {
                    f3.onsuccess = t7, t7();
                  }), s6.continue = r5, s6.continuePrimaryKey = i6, s6.advance = a5, t7(), n8;
                }, e7(s6)) : e7(null);
              }, c5);
            });
          }, count: function(e6) {
            var t6 = e6.query, n6 = e6.trans, a4 = t6.index, o5 = t6.range;
            return new Promise(function(e7, t7) {
              var s5 = n6.objectStore(i5), s5 = a4.isPrimaryKey ? s5 : s5.index(a4.name), c5 = r4(o5), c5 = c5 ? s5.count(c5) : s5.count();
              c5.onsuccess = Xe2(function(t8) {
                return e7(t8.target.result);
              }), c5.onerror = $t2(t7);
            });
          } };
        }
        o4 = n4, s4 = fn2((n4 = e4).objectStoreNames), u3 = 0 < s4.length ? o4.objectStore(s4[0]) : {};
        var o4, n4 = { schema: { name: n4.name, tables: s4.map(function(e5) {
          return o4.objectStore(e5);
        }).map(function(e5) {
          var t5 = e5.keyPath, n5 = e5.autoIncrement, r5 = a3(t5), i5 = {}, r5 = { name: e5.name, primaryKey: { name: null, isPrimaryKey: true, outbound: t5 == null, compound: r5, keyPath: t5, autoIncrement: n5, unique: true, extractKey: dn2(t5) }, indexes: fn2(e5.indexNames).map(function(t6) {
            return e5.index(t6);
          }).map(function(e6) {
            var t6 = e6.name, n6 = e6.unique, r6 = e6.multiEntry, e6 = e6.keyPath, t6 = { name: t6, compound: a3(e6), keyPath: e6, unique: n6, multiEntry: r6, extractKey: dn2(e6) };
            return i5[mn2(e6)] = t6;
          }), getIndexByKeyPath: function(e6) {
            return i5[mn2(e6)];
          } };
          return i5[`:id`] = r5.primaryKey, t5 != null && (i5[mn2(t5)] = r5.primaryKey), r5;
        }) }, hasGetAll: 0 < s4.length && `getAll` in u3 && !(typeof navigator < `u` && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604), hasIdb3Features: `getAllRecords` in u3 }, s4 = n4.schema, c4 = n4.hasGetAll, l4 = n4.hasIdb3Features, u3 = s4.tables.map(i4), d3 = {};
        return u3.forEach(function(e5) {
          return d3[e5.name] = e5;
        }), { stack: `dbcore`, transaction: e4.transaction.bind(e4), table: function(e5) {
          if (d3[e5]) return d3[e5];
          throw Error(`Table '${e5}' not found`);
        }, MIN_KEY: -1 / 0, MAX_KEY: un2(t4), schema: s4 };
      }
      function gn2(e4, n4, r4, i4) {
        return r4 = r4.IDBKeyRange, n4 = hn2(n4, r4, i4), { dbcore: e4.dbcore.reduce(function(e5, n5) {
          return n5 = n5.create, t3(t3({}, e5), n5(e5));
        }, n4) };
      }
      function _n2(e4, t4) {
        var n4 = t4.db, n4 = gn2(e4._middlewares, n4, e4._deps, t4);
        e4.core = n4.dbcore, e4.tables.forEach(function(t5) {
          var n5 = t5.name;
          e4.core.schema.tables.some(function(e5) {
            return e5.name === n5;
          }) && (t5.core = e4.core.table(n5), e4[n5] instanceof e4.Table) && (e4[n5].core = t5.core);
        });
      }
      function vn2(e4, t4, n4, r4) {
        n4.forEach(function(n5) {
          var i4 = r4[n5];
          t4.forEach(function(t5) {
            var r5 = (function e5(t6, n6) {
              return m2(t6, n6) || (t6 = s3(t6)) && e5(t6, n6);
            })(t5, n5);
            (!r5 || `value` in r5 && r5.value === void 0) && (t5 === e4.Transaction.prototype || t5 instanceof e4.Transaction ? f2(t5, n5, { get: function() {
              return this.table(n5);
            }, set: function(e5) {
              d2(this, n5, { value: e5, writable: true, configurable: true, enumerable: true });
            } }) : t5[n5] = new e4.Table(n5, i4));
          });
        });
      }
      function yn2(e4, t4) {
        t4.forEach(function(t5) {
          for (var n4 in t5) t5[n4] instanceof e4.Table && delete t5[n4];
        });
      }
      function bn2(e4, t4) {
        return e4._cfg.version - t4._cfg.version;
      }
      function xn2(e4, t4, n4, r4) {
        var a4 = e4._dbSchema, o4 = (n4.objectStoreNames.contains(`$meta`) && !a4.$meta && (a4.$meta = ln2(`$meta`, kn2(``)[0], []), e4._storeNames.push(`$meta`)), e4._createTransaction(`readwrite`, e4._storeNames, a4)), s4 = (o4.create(n4), o4._completion.catch(r4), o4._reject.bind(o4)), c4 = P2.transless || P2;
        rt2(function() {
          if (P2.trans = o4, P2.transless = c4, t4 !== 0) return _n2(e4, n4), l4 = t4, ((r5 = o4).storeNames.includes(`$meta`) ? r5.table(`$meta`).get(`version`).then(function(e5) {
            return e5 ?? l4;
          }) : F2.resolve(l4)).then(function(t5) {
            var r6 = e4, a5 = t5, s5 = o4, c5 = n4, l5 = [], t5 = r6._versions, u3 = r6._dbSchema = Dn2(0, r6.idbdb, c5);
            return (t5 = t5.filter(function(e5) {
              return e5._cfg.version >= a5;
            })).length === 0 ? F2.resolve() : (t5.forEach(function(e5) {
              l5.push(function() {
                var t6, n5, o5, l6 = u3, d3 = e5._cfg.dbschema, f3 = (On2(r6, l6, c5), On2(r6, d3, c5), u3 = r6._dbSchema = d3, Cn2(l6, d3)), p3 = (f3.add.forEach(function(e6) {
                  wn2(c5, e6[0], e6[1].primKey, e6[1].indexes);
                }), f3.change.forEach(function(e6) {
                  if (e6.recreate) throw new M2.Upgrade(`Not yet support for changing primary key`);
                  var t7 = c5.objectStore(e6.name);
                  e6.add.forEach(function(e7) {
                    return En2(t7, e7);
                  }), e6.change.forEach(function(e7) {
                    t7.deleteIndex(e7.name), En2(t7, e7);
                  }), e6.del.forEach(function(e7) {
                    return t7.deleteIndex(e7);
                  });
                }), e5._cfg.contentUpgrade);
                if (p3 && e5._cfg.version > a5) return _n2(r6, c5), s5._memoizedTables = {}, t6 = S2(d3), f3.del.forEach(function(e6) {
                  t6[e6] = l6[e6];
                }), yn2(r6, [r6.Transaction.prototype]), vn2(r6, [r6.Transaction.prototype], i3(t6), t6), s5.schema = t6, (n5 = A2(p3)) && it2(), d3 = F2.follow(function() {
                  var e6;
                  (o5 = p3(s5)) && n5 && (e6 = at2.bind(null, null), o5.then(e6, e6));
                }), o5 && typeof o5.then == `function` ? F2.resolve(o5) : d3.then(function() {
                  return o5;
                });
              }), l5.push(function(t6) {
                var n5 = e5._cfg.dbschema, i4 = t6;
                [].slice.call(i4.db.objectStoreNames).forEach(function(e6) {
                  return n5[e6] == null && i4.db.deleteObjectStore(e6);
                }), yn2(r6, [r6.Transaction.prototype]), vn2(r6, [r6.Transaction.prototype], r6._storeNames, r6._dbSchema), s5.schema = r6._dbSchema;
              }), l5.push(function(t6) {
                r6.idbdb.objectStoreNames.contains(`$meta`) && (Math.ceil(r6.idbdb.version / 10) === e5._cfg.version ? (r6.idbdb.deleteObjectStore(`$meta`), delete r6._dbSchema.$meta, r6._storeNames = r6._storeNames.filter(function(e6) {
                  return e6 !== `$meta`;
                })) : t6.objectStore(`$meta`).put(e5._cfg.version, `version`));
              });
            }), (function e5() {
              return l5.length ? F2.resolve(l5.shift()(s5.idbtrans)).then(e5) : F2.resolve();
            })().then(function() {
              Tn2(u3, c5);
            }));
          }).catch(s4);
          var r5, l4;
          i3(a4).forEach(function(e5) {
            wn2(n4, e5, a4[e5].primKey, a4[e5].indexes);
          }), _n2(e4, n4), F2.follow(function() {
            return e4.on.populate.fire(o4);
          }).catch(s4);
        });
      }
      function Sn2(e4, t4) {
        Tn2(e4._dbSchema, t4), t4.db.version % 10 != 0 || t4.objectStoreNames.contains(`$meta`) || t4.db.createObjectStore(`$meta`).add(Math.ceil(t4.db.version / 10 - 1), `version`);
        var n4 = Dn2(0, e4.idbdb, t4);
        On2(e4, e4._dbSchema, t4);
        for (var r4 = 0, i4 = Cn2(n4, e4._dbSchema).change; r4 < i4.length; r4++) {
          var a4 = ((e5) => {
            if (e5.change.length || e5.recreate) return console.warn(`Unable to patch indexes of table ${e5.name} because it has changes on the type of index or primary key.`), { value: void 0 };
            var n5 = t4.objectStore(e5.name);
            e5.add.forEach(function(t5) {
              Se2 && console.debug(`Dexie upgrade patch: Creating missing index ${e5.name}.${t5.src}`), En2(n5, t5);
            });
          })(i4[r4]);
          if (typeof a4 == `object`) return a4.value;
        }
      }
      function Cn2(e4, t4) {
        var n4, r4 = { del: [], add: [], change: [] };
        for (n4 in e4) t4[n4] || r4.del.push(n4);
        for (n4 in t4) {
          var i4 = e4[n4], a4 = t4[n4];
          if (i4) {
            var o4 = { name: n4, def: a4, recreate: false, del: [], add: [], change: [] };
            if (`` + (i4.primKey.keyPath || ``) != `` + (a4.primKey.keyPath || ``) || i4.primKey.auto !== a4.primKey.auto) o4.recreate = true, r4.change.push(o4);
            else {
              var s4 = i4.idxByName, c4 = a4.idxByName, l4 = void 0;
              for (l4 in s4) c4[l4] || o4.del.push(l4);
              for (l4 in c4) {
                var u3 = s4[l4], d3 = c4[l4];
                u3 ? u3.src !== d3.src && o4.change.push(d3) : o4.add.push(d3);
              }
              (0 < o4.del.length || 0 < o4.add.length || 0 < o4.change.length) && r4.change.push(o4);
            }
          } else r4.add.push([n4, a4]);
        }
        return r4;
      }
      function wn2(e4, t4, n4, r4) {
        var i4 = e4.db.createObjectStore(t4, n4.keyPath ? { keyPath: n4.keyPath, autoIncrement: n4.auto } : { autoIncrement: n4.auto });
        r4.forEach(function(e5) {
          return En2(i4, e5);
        });
      }
      function Tn2(e4, t4) {
        i3(e4).forEach(function(n4) {
          t4.db.objectStoreNames.contains(n4) || (Se2 && console.debug(`Dexie: Creating missing table`, n4), wn2(t4, n4, e4[n4].primKey, e4[n4].indexes));
        });
      }
      function En2(e4, t4) {
        e4.createIndex(t4.name, t4.keyPath, { unique: t4.unique, multiEntry: t4.multi });
      }
      function Dn2(e4, t4, n4) {
        var r4 = {};
        return g2(t4.objectStoreNames, 0).forEach(function(e5) {
          for (var t5 = n4.objectStore(e5), i4 = sn2(cn2(c4 = t5.keyPath), c4 || ``, true, false, !!t5.autoIncrement, c4 && typeof c4 != `string`, true), a4 = [], o4 = 0; o4 < t5.indexNames.length; ++o4) {
            var s4 = t5.index(t5.indexNames[o4]), c4 = s4.keyPath, s4 = sn2(s4.name, c4, !!s4.unique, !!s4.multiEntry, false, c4 && typeof c4 != `string`, false);
            a4.push(s4);
          }
          r4[e5] = ln2(e5, i4, a4);
        }), r4;
      }
      function On2(e4, t4, n4) {
        for (var i4 = n4.db.objectStoreNames, a4 = 0; a4 < i4.length; ++a4) {
          var o4 = i4[a4], s4 = n4.objectStore(o4);
          e4._hasGetAll = `getAll` in s4;
          for (var c4 = 0; c4 < s4.indexNames.length; ++c4) {
            var l4, u3 = s4.indexNames[c4], d3 = s4.index(u3).keyPath, d3 = typeof d3 == `string` ? d3 : `[` + g2(d3).join(`+`) + `]`;
            t4[o4] && (l4 = t4[o4].idxByName[d3]) && (l4.name = u3, delete t4[o4].idxByName[d3], t4[o4].idxByName[u3] = l4);
          }
        }
        typeof navigator < `u` && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && r3.WorkerGlobalScope && r3 instanceof r3.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e4._hasGetAll = false);
      }
      function kn2(e4) {
        return e4.split(`,`).map(function(e5, t4) {
          var n4 = e5.split(`:`), r4 = (r4 = n4[1])?.trim(), n4 = (e5 = n4[0].trim()).replace(/([&*]|\+\+)/g, ``), i4 = /^\[/.test(n4) ? n4.match(/^\[(.*)\]$/)[1].split(`+`) : n4;
          return sn2(n4, i4 || null, /\&/.test(e5), /\*/.test(e5), /\+\+/.test(e5), a3(i4), t4 === 0, r4);
        });
      }
      jn2.prototype._createTableSchema = ln2, jn2.prototype._parseIndexSyntax = kn2, jn2.prototype._parseStoresSpec = function(e4, t4) {
        var n4 = this;
        i3(e4).forEach(function(r4) {
          if (e4[r4] !== null) {
            var i4 = n4._parseIndexSyntax(e4[r4]), a4 = i4.shift();
            if (!a4) throw new M2.Schema(`Invalid schema for table ` + r4 + `: ` + e4[r4]);
            if (a4.unique = true, a4.multi) throw new M2.Schema(`Primary key cannot be multiEntry*`);
            i4.forEach(function(e5) {
              if (e5.auto) throw new M2.Schema(`Only primary key can be marked as autoIncrement (++)`);
              if (!e5.keyPath) throw new M2.Schema(`Index must have a name and cannot be an empty string`);
            }), a4 = n4._createTableSchema(r4, a4, i4), t4[r4] = a4;
          }
        });
      }, jn2.prototype.stores = function(e4) {
        var t4 = this.db, e4 = (this._cfg.storesSource = this._cfg.storesSource ? o3(this._cfg.storesSource, e4) : e4, t4._versions), n4 = {}, r4 = {};
        return e4.forEach(function(e5) {
          o3(n4, e5._cfg.storesSource), r4 = e5._cfg.dbschema = {}, e5._parseStoresSpec(n4, r4);
        }), t4._dbSchema = r4, yn2(t4, [t4._allTables, t4, t4.Transaction.prototype]), vn2(t4, [t4._allTables, t4, t4.Transaction.prototype, this._cfg.tables], i3(r4), r4), t4._storeNames = i3(r4), this;
      }, jn2.prototype.upgrade = function(e4) {
        return this._cfg.contentUpgrade = xe2(this._cfg.contentUpgrade || N2, e4), this;
      };
      var An2 = jn2;
      function jn2() {
      }
      var Mn2 = (() => {
        var e4, t4, n4;
        return typeof FinalizationRegistry < `u` && typeof WeakRef < `u` ? (e4 = /* @__PURE__ */ new Set(), t4 = new FinalizationRegistry(function(t5) {
          e4.delete(t5);
        }), { toArray: function() {
          return Array.from(e4).map(function(e5) {
            return e5.deref();
          }).filter(function(e5) {
            return e5 !== void 0;
          });
        }, add: function(n5) {
          var r4 = new WeakRef(n5._novip);
          e4.add(r4), t4.register(n5._novip, r4, r4), e4.size > n5._options.maxConnections && (r4 = e4.values().next().value, e4.delete(r4), t4.unregister(r4));
        }, remove: function(n5) {
          if (n5) for (var r4 = e4.values(), i4 = r4.next(); !i4.done; ) {
            var a4 = i4.value;
            if (a4.deref() === n5._novip) return e4.delete(a4), void t4.unregister(a4);
            i4 = r4.next();
          }
        } }) : (n4 = [], { toArray: function() {
          return n4;
        }, add: function(e5) {
          n4.push(e5._novip);
        }, remove: function(e5) {
          e5 && (e5 = n4.indexOf(e5._novip)) !== -1 && n4.splice(e5, 1);
        } });
      })();
      function Nn2(e4, t4) {
        var n4 = e4._dbNamesDB;
        return n4 || (n4 = e4._dbNamesDB = new _r2(_t2, { addons: [], indexedDB: e4, IDBKeyRange: t4 })).version(1).stores({ dbnames: `name` }), n4.table(`dbnames`);
      }
      function Pn2(e4) {
        return e4 && typeof e4.databases == `function`;
      }
      function Fn2(e4) {
        return rt2(function() {
          return P2.letThrough = true, e4();
        });
      }
      function In2(e4) {
        return !(`from` in e4);
      }
      var R2 = function(e4, t4) {
        var n4;
        if (!this) return n4 = new R2(), e4 && `d` in e4 && o3(n4, e4), n4;
        o3(this, arguments.length ? { d: 1, from: e4, to: 1 < arguments.length ? t4 : e4 } : { d: 0 });
      };
      function Ln2(e4, t4, n4) {
        var r4 = L2(t4, n4);
        if (!isNaN(r4)) {
          if (0 < r4) throw RangeError();
          if (In2(e4)) return o3(e4, { from: t4, to: n4, d: 1 });
          var r4 = e4.l, i4 = e4.r;
          if (L2(n4, e4.from) < 0) return r4 ? Ln2(r4, t4, n4) : e4.l = { from: t4, to: n4, d: 1, l: null, r: null }, Vn2(e4);
          if (0 < L2(t4, e4.to)) return i4 ? Ln2(i4, t4, n4) : e4.r = { from: t4, to: n4, d: 1, l: null, r: null }, Vn2(e4);
          L2(t4, e4.from) < 0 && (e4.from = t4, e4.l = null, e4.d = i4 ? i4.d + 1 : 1), 0 < L2(n4, e4.to) && (e4.to = n4, e4.r = null, e4.d = e4.l ? e4.l.d + 1 : 1), t4 = !e4.r, r4 && !e4.l && Rn2(e4, r4), i4 && t4 && Rn2(e4, i4);
        }
      }
      function Rn2(e4, t4) {
        In2(t4) || (function e5(t5, n4) {
          var r4 = n4.from, i4 = n4.l, a4 = n4.r;
          Ln2(t5, r4, n4.to), i4 && e5(t5, i4), a4 && e5(t5, a4);
        })(e4, t4);
      }
      function zn2(e4, t4) {
        var n4 = Bn2(t4), r4 = n4.next();
        if (!r4.done) for (var i4 = r4.value, a4 = Bn2(e4), o4 = a4.next(i4.from), s4 = o4.value; !r4.done && !o4.done; ) {
          if (L2(s4.from, i4.to) <= 0 && 0 <= L2(s4.to, i4.from)) return true;
          L2(i4.from, s4.from) < 0 ? i4 = (r4 = n4.next(s4.from)).value : s4 = (o4 = a4.next(i4.from)).value;
        }
        return false;
      }
      function Bn2(e4) {
        var t4 = In2(e4) ? null : { s: 0, n: e4 };
        return { next: function(e5) {
          for (var n4 = 0 < arguments.length; t4; ) switch (t4.s) {
            case 0:
              if (t4.s = 1, n4) for (; t4.n.l && L2(e5, t4.n.from) < 0; ) t4 = { up: t4, n: t4.n.l, s: 1 };
              else for (; t4.n.l; ) t4 = { up: t4, n: t4.n.l, s: 1 };
            case 1:
              if (t4.s = 2, !n4 || L2(e5, t4.n.to) <= 0) return { value: t4.n, done: false };
            case 2:
              if (t4.n.r) {
                t4.s = 3, t4 = { up: t4, n: t4.n.r, s: 0 };
                continue;
              }
            case 3:
              t4 = t4.up;
          }
          return { done: true };
        } };
      }
      function Vn2(e4) {
        var n4, r4, i4, a4 = ((a4 = e4.r)?.d || 0) - ((a4 = e4.l)?.d || 0), a4 = 1 < a4 ? `r` : a4 < -1 ? `l` : ``;
        a4 && (n4 = a4 == `r` ? `l` : `r`, r4 = t3({}, e4), i4 = e4[a4], e4.from = i4.from, e4.to = i4.to, e4[a4] = i4[a4], r4[a4] = i4[n4], (e4[n4] = r4).d = Hn2(r4)), e4.d = Hn2(e4);
      }
      function Hn2(e4) {
        var t4 = e4.r, e4 = e4.l;
        return (t4 ? e4 ? Math.max(t4.d, e4.d) : t4.d : e4 ? e4.d : 0) + 1;
      }
      function Un2(e4, t4) {
        return i3(t4).forEach(function(n4) {
          e4[n4] ? Rn2(e4[n4], t4[n4]) : e4[n4] = (function e5(t5) {
            var n5, r4, i4 = {};
            for (n5 in t5) l3(t5, n5) && (r4 = t5[n5], i4[n5] = !r4 || typeof r4 != `object` || E2.has(r4.constructor) ? r4 : e5(r4));
            return i4;
          })(t4[n4]);
        }), e4;
      }
      function Wn2(e4, t4) {
        return e4.all || t4.all || Object.keys(e4).some(function(n4) {
          return t4[n4] && zn2(t4[n4], e4[n4]);
        });
      }
      u2(R2.prototype, ((j2 = { add: function(e4) {
        return Rn2(this, e4), this;
      }, addKey: function(e4) {
        return Ln2(this, e4, e4), this;
      }, addKeys: function(e4) {
        var t4 = this;
        return e4.forEach(function(e5) {
          return Ln2(t4, e5, e5);
        }), this;
      }, hasKey: function(e4) {
        var t4 = Bn2(this).next(e4).value;
        return t4 && L2(t4.from, e4) <= 0 && 0 <= L2(t4.to, e4);
      } })[te2] = function() {
        return Bn2(this);
      }, j2));
      var Gn2 = {}, Kn2 = {}, qn2 = false;
      function Jn2(e4) {
        Un2(Kn2, e4), qn2 || (qn2 = true, setTimeout(function() {
          qn2 = false, Yn2(Kn2, !(Kn2 = {}));
        }, 0));
      }
      function Yn2(e4, t4) {
        t4 === void 0 && (t4 = false);
        var n4 = /* @__PURE__ */ new Set();
        if (e4.all) for (var r4 = 0, i4 = Object.values(Gn2); r4 < i4.length; r4++) Xn2(s4 = i4[r4], e4, n4, t4);
        else for (var a4 in e4) {
          var o4, s4, a4 = /^idb\:\/\/(.*)\/(.*)\//.exec(a4);
          a4 && (o4 = a4[1], a4 = a4[2], s4 = Gn2[`idb://${o4}/${a4}`]) && Xn2(s4, e4, n4, t4);
        }
        n4.forEach(function(e5) {
          return e5();
        });
      }
      function Xn2(e4, t4, n4, r4) {
        for (var i4 = [], a4 = 0, o4 = Object.entries(e4.queries.query); a4 < o4.length; a4++) {
          for (var s4 = o4[a4], c4 = s4[0], l4 = [], u3 = 0, d3 = s4[1]; u3 < d3.length; u3++) {
            var f3 = d3[u3];
            Wn2(t4, f3.obsSet) ? f3.subscribers.forEach(function(e5) {
              return n4.add(e5);
            }) : r4 && l4.push(f3);
          }
          r4 && i4.push([c4, l4]);
        }
        if (r4) for (var p3 = 0, m3 = i4; p3 < m3.length; p3++) {
          var h3 = m3[p3], c4 = h3[0], l4 = h3[1];
          e4.queries.query[c4] = l4;
        }
      }
      function Zn2(e4) {
        var t4 = e4._state, n4 = e4._deps.indexedDB;
        if (t4.isBeingOpened || e4.idbdb) return t4.dbReadyPromise.then(function() {
          return t4.dbOpenError ? pt2(t4.dbOpenError) : e4;
        });
        t4.isBeingOpened = true, t4.dbOpenError = null, t4.openComplete = false;
        var r4 = t4.openCanceller, a4 = Math.round(10 * e4.verno), o4 = false;
        function s4() {
          if (t4.openCanceller !== r4) throw new M2.DatabaseClosed(`db.open() was cancelled`);
        }
        function c4() {
          return new F2(function(r5, l5) {
            if (s4(), !n4) throw new M2.MissingAPI();
            var u4 = e4.name, p3 = t4.autoSchema || !a4 ? n4.open(u4) : n4.open(u4, a4);
            if (!p3) throw new M2.MissingAPI();
            p3.onerror = $t2(l5), p3.onblocked = Xe2(e4._fireOnBlocked), p3.onupgradeneeded = Xe2(function(r6) {
              var i4;
              d3 = p3.transaction, t4.autoSchema && !e4._options.allowEmptyDB ? (p3.onerror = en2, d3.abort(), p3.result.close(), (i4 = n4.deleteDatabase(u4)).onsuccess = i4.onerror = Xe2(function() {
                l5(new M2.NoSuchDatabase(`Database ${u4} doesnt exist`));
              })) : (d3.onerror = $t2(l5), i4 = r6.oldVersion > 2 ** 62 ? 0 : r6.oldVersion, f3 = i4 < 1, e4.idbdb = p3.result, o4 && Sn2(e4, d3), xn2(e4, i4 / 10, d3, l5));
            }, l5), p3.onsuccess = Xe2(function() {
              d3 = null;
              var n5, s5, l6, m3, h3, _3, v3 = e4.idbdb = p3.result, y3 = g2(v3.objectStoreNames);
              if (0 < y3.length) try {
                var b3 = v3.transaction((h3 = y3).length === 1 ? h3[0] : h3, `readonly`);
                if (t4.autoSchema) _3 = v3, m3 = b3, (l6 = e4).verno = _3.version / 10, m3 = l6._dbSchema = Dn2(0, _3, m3), l6._storeNames = g2(_3.objectStoreNames, 0), vn2(l6, [l6._allTables], i3(m3), m3);
                else if (On2(e4, e4._dbSchema, b3), s5 = b3, ((s5 = Cn2(Dn2(0, (n5 = e4).idbdb, s5), n5._dbSchema)).add.length || s5.change.some(function(e5) {
                  return e5.add.length || e5.change.length;
                })) && !o4) return console.warn(`Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.`), v3.close(), a4 = v3.version + 1, o4 = true, r5(c4());
                _n2(e4, b3);
              } catch {
              }
              Mn2.add(e4), v3.onversionchange = Xe2(function(n6) {
                t4.vcFired = true, e4.on(`versionchange`).fire(n6);
              }), v3.onclose = Xe2(function() {
                e4.close({ disableAutoOpen: false });
              }), f3 && (y3 = e4._deps, h3 = u4, Pn2(_3 = y3.indexedDB) || h3 === _t2 || Nn2(_3, y3.IDBKeyRange).put({ name: h3 }).catch(N2)), r5();
            }, l5);
          }).catch(function(e5) {
            switch (e5?.name) {
              case `UnknownError`:
                if (0 < t4.PR1398_maxLoop) return t4.PR1398_maxLoop--, console.warn(`Dexie: Workaround for Chrome UnknownError on open()`), c4();
                break;
              case `VersionError`:
                if (0 < a4) return a4 = 0, c4();
            }
            return F2.reject(e5);
          });
        }
        var l4, u3 = t4.dbReadyResolve, d3 = null, f3 = false;
        return F2.race([r4, (typeof navigator > `u` ? F2.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(e5) {
          function t5() {
            return indexedDB.databases().finally(e5);
          }
          l4 = setInterval(t5, 100), t5();
        }).finally(function() {
          return clearInterval(l4);
        }) : Promise.resolve()).then(c4)]).then(function() {
          return s4(), t4.onReadyBeingFired = [], F2.resolve(Fn2(function() {
            return e4.on.ready.fire(e4.vip);
          })).then(function n5() {
            var r5;
            if (0 < t4.onReadyBeingFired.length) return r5 = t4.onReadyBeingFired.reduce(xe2, N2), t4.onReadyBeingFired = [], F2.resolve(Fn2(function() {
              return r5(e4.vip);
            })).then(n5);
          });
        }).finally(function() {
          t4.openCanceller === r4 && (t4.onReadyBeingFired = null, t4.isBeingOpened = false);
        }).catch(function(n5) {
          t4.dbOpenError = n5;
          try {
            d3 && d3.abort();
          } catch {
          }
          return r4 === t4.openCanceller && e4._close(), pt2(n5);
        }).finally(function() {
          t4.openComplete = true, u3();
        }).then(function() {
          var t5;
          return f3 && (t5 = {}, e4.tables.forEach(function(n5) {
            n5.schema.indexes.forEach(function(r5) {
              r5.name && (t5[`idb://${e4.name}/${n5.name}/${r5.name}`] = new R2(-1 / 0, [[[]]]));
            }), t5[`idb://${e4.name}/${n5.name}/`] = t5[`idb://${e4.name}/${n5.name}/:dels`] = new R2(-1 / 0, [[[]]]);
          }), rn2(tn2).fire(t5), Yn2(t5, true)), e4;
        });
      }
      function Qn2(e4) {
        function t4(t5) {
          return e4.next(t5);
        }
        var n4 = i4(t4), r4 = i4(function(t5) {
          return e4.throw(t5);
        });
        function i4(e5) {
          return function(t5) {
            var t5 = e5(t5), i5 = t5.value;
            return t5.done ? i5 : i5 && typeof i5.then == `function` ? i5.then(n4, r4) : a3(i5) ? Promise.all(i5).then(n4, r4) : n4(i5);
          };
        }
        return i4(t4)();
      }
      function $n2(e4, t4, n4) {
        for (var r4 = a3(e4) ? e4.slice() : [e4], i4 = 0; i4 < n4; ++i4) r4.push(t4);
        return r4;
      }
      var er2 = { stack: `dbcore`, name: `VirtualIndexMiddleware`, level: 1, create: function(e4) {
        return t3(t3({}, e4), { table: function(n4) {
          var r4 = e4.table(n4), n4 = r4.schema, i4 = {}, a4 = [];
          function o4(e5, n5, r5) {
            var s5 = mn2(e5), c5 = i4[s5] = i4[s5] || [], l5 = e5 == null ? 0 : typeof e5 == `string` ? 1 : e5.length, u4 = 0 < n5, s5 = t3(t3({}, r5), { name: u4 ? `${s5}(virtual-from:${r5.name})` : r5.name, lowLevelIndex: r5, isVirtual: u4, keyTail: n5, keyLength: l5, extractKey: dn2(e5), unique: !u4 && r5.unique });
            return c5.push(s5), s5.isPrimaryKey || a4.push(s5), 1 < l5 && o4(l5 === 2 ? e5[0] : e5.slice(0, l5 - 1), n5 + 1, r5), c5.sort(function(e6, t4) {
              return e6.keyTail - t4.keyTail;
            }), s5;
          }
          var s4 = o4(n4.primaryKey.keyPath, 0, n4.primaryKey);
          i4[`:id`] = [s4];
          for (var c4 = 0, l4 = n4.indexes; c4 < l4.length; c4++) {
            var u3 = l4[c4];
            o4(u3.keyPath, 0, u3);
          }
          function d3(n5) {
            var r5, i5 = n5.query.index;
            return i5.isVirtual ? t3(t3({}, n5), { query: { index: i5.lowLevelIndex, range: (r5 = n5.query.range, i5 = i5.keyTail, { type: r5.type === 1 ? 2 : r5.type, lower: $n2(r5.lower, r5.lowerOpen ? e4.MAX_KEY : e4.MIN_KEY, i5), lowerOpen: true, upper: $n2(r5.upper, r5.upperOpen ? e4.MIN_KEY : e4.MAX_KEY, i5), upperOpen: true }) } }) : n5;
          }
          return t3(t3({}, r4), { schema: t3(t3({}, n4), { primaryKey: s4, indexes: a4, getIndexByKeyPath: function(e5) {
            return (e5 = i4[mn2(e5)]) && e5[0];
          } }), count: function(e5) {
            return r4.count(d3(e5));
          }, query: function(e5) {
            return r4.query(d3(e5));
          }, openCursor: function(t4) {
            var n5 = t4.query.index, i5 = n5.keyTail, a5 = n5.keyLength;
            return n5.isVirtual ? r4.openCursor(d3(t4)).then(function(e5) {
              return e5 && o5(e5);
            }) : r4.openCursor(t4);
            function o5(n6) {
              return Object.create(n6, { continue: { value: function(r5) {
                r5 == null ? t4.unique ? n6.continue(n6.key.slice(0, a5).concat(t4.reverse ? e4.MIN_KEY : e4.MAX_KEY, i5)) : n6.continue() : n6.continue($n2(r5, t4.reverse ? e4.MAX_KEY : e4.MIN_KEY, i5));
              } }, continuePrimaryKey: { value: function(t5, r5) {
                n6.continuePrimaryKey($n2(t5, e4.MAX_KEY, i5), r5);
              } }, primaryKey: { get: function() {
                return n6.primaryKey;
              } }, key: { get: function() {
                var e5 = n6.key;
                return a5 === 1 ? e5[0] : e5.slice(0, a5);
              } }, value: { get: function() {
                return n6.value;
              } } });
            }
          } });
        } });
      } };
      function tr2(e4, t4, n4, r4) {
        return n4 ||= {}, r4 ||= ``, i3(e4).forEach(function(i4) {
          var a4, o4, s4;
          l3(t4, i4) ? (a4 = e4[i4], o4 = t4[i4], typeof a4 == `object` && typeof o4 == `object` && a4 && o4 ? (s4 = ee2(a4)) === ee2(o4) ? s4 === `Object` ? tr2(a4, o4, n4, r4 + i4 + `.`) : a4 !== o4 && (n4[r4 + i4] = t4[i4]) : n4[r4 + i4] = t4[i4] : a4 !== o4 && (n4[r4 + i4] = t4[i4])) : n4[r4 + i4] = void 0;
        }), i3(t4).forEach(function(i4) {
          l3(e4, i4) || (n4[r4 + i4] = t4[i4]);
        }), n4;
      }
      function nr2(e4, t4) {
        return t4.type === `delete` ? t4.keys : t4.keys || t4.values.map(e4.extractKey);
      }
      var rr2 = { stack: `dbcore`, name: `HooksMiddleware`, level: 2, create: function(e4) {
        return t3(t3({}, e4), { table: function(r4) {
          var i4 = e4.table(r4), a4 = i4.schema.primaryKey;
          return t3(t3({}, i4), { mutate: function(e5) {
            var o4 = P2.trans, s4 = o4.table(r4).hook, c4 = s4.deleting, u3 = s4.creating, d3 = s4.updating;
            switch (e5.type) {
              case `add`:
                if (u3.fire === N2) break;
                return o4._promise(`readwrite`, function() {
                  return f3(e5);
                }, true);
              case `put`:
                if (u3.fire === N2 && d3.fire === N2) break;
                return o4._promise(`readwrite`, function() {
                  return f3(e5);
                }, true);
              case `delete`:
                if (c4.fire === N2) break;
                return o4._promise(`readwrite`, function() {
                  return f3(e5);
                }, true);
              case `deleteRange`:
                if (c4.fire === N2) break;
                return o4._promise(`readwrite`, function() {
                  return (function e6(n4, r5, o5) {
                    return i4.query({ trans: n4, values: false, query: { index: a4, range: r5 }, limit: o5 }).then(function(i5) {
                      var a5 = i5.result;
                      return f3({ type: `delete`, keys: a5, trans: n4 }).then(function(i6) {
                        return 0 < i6.numFailures ? Promise.reject(i6.failures[0]) : a5.length < o5 ? { failures: [], numFailures: 0, lastResult: void 0 } : e6(n4, t3(t3({}, r5), { lower: a5[a5.length - 1], lowerOpen: true }), o5);
                      });
                    });
                  })(e5.trans, e5.range, 1e4);
                }, true);
            }
            return i4.mutate(e5);
            function f3(e6) {
              var r5, o5, s5, f4 = P2.trans, p3 = e6.keys || nr2(a4, e6);
              if (p3) return (e6 = e6.type === `add` || e6.type === `put` ? t3(t3({}, e6), { keys: p3 }) : t3({}, e6)).type !== `delete` && (e6.values = n3([], e6.values, true)), e6.keys &&= n3([], e6.keys, true), r5 = i4, s5 = p3, ((o5 = e6).type === `add` ? Promise.resolve([]) : r5.getMany({ trans: o5.trans, keys: s5, cache: `immutable` })).then(function(t4) {
                var n4 = p3.map(function(n5, r6) {
                  var i5, o6, s6, p4 = t4[r6], m3 = { onerror: null, onsuccess: null };
                  return e6.type === `delete` ? c4.fire.call(m3, n5, p4, f4) : e6.type === `add` || p4 === void 0 ? (i5 = u3.fire.call(m3, n5, e6.values[r6], f4), n5 == null && i5 != null && (e6.keys[r6] = n5 = i5, a4.outbound || x2(e6.values[r6], a4.keyPath, n5))) : (i5 = tr2(p4, e6.values[r6]), (o6 = d3.fire.call(m3, i5, n5, p4, f4)) && (s6 = e6.values[r6], Object.keys(o6).forEach(function(e7) {
                    l3(s6, e7) ? s6[e7] = o6[e7] : x2(s6, e7, o6[e7]);
                  }))), m3;
                });
                return i4.mutate(e6).then(function(r6) {
                  for (var i5 = r6.failures, a5 = r6.results, o6 = r6.numFailures, r6 = r6.lastResult, s6 = 0; s6 < p3.length; ++s6) {
                    var c5 = (a5 || p3)[s6], l4 = n4[s6];
                    c5 == null ? l4.onerror && l4.onerror(i5[s6]) : l4.onsuccess && l4.onsuccess(e6.type === `put` && t4[s6] ? e6.values[s6] : c5);
                  }
                  return { failures: i5, results: a5, numFailures: o6, lastResult: r6 };
                }).catch(function(e7) {
                  return n4.forEach(function(t5) {
                    return t5.onerror && t5.onerror(e7);
                  }), Promise.reject(e7);
                });
              });
              throw Error(`Keys missing`);
            }
          } });
        } });
      } };
      function ir2(e4, t4, n4) {
        try {
          if (!t4 || t4.keys.length < e4.length) return null;
          for (var r4 = [], i4 = 0, a4 = 0; i4 < t4.keys.length && a4 < e4.length; ++i4) L2(t4.keys[i4], e4[a4]) === 0 && (r4.push(n4 ? O2(t4.values[i4]) : t4.values[i4]), ++a4);
          return r4.length === e4.length ? r4 : null;
        } catch {
          return null;
        }
      }
      var ar2 = { stack: `dbcore`, level: -1, create: function(e4) {
        return { table: function(n4) {
          var r4 = e4.table(n4);
          return t3(t3({}, r4), { getMany: function(e5) {
            var t4;
            return e5.cache ? (t4 = ir2(e5.keys, e5.trans._cache, e5.cache === `clone`)) ? F2.resolve(t4) : r4.getMany(e5).then(function(t5) {
              return e5.trans._cache = { keys: e5.keys, values: e5.cache === `clone` ? O2(t5) : t5 }, t5;
            }) : r4.getMany(e5);
          }, mutate: function(e5) {
            return e5.type !== `add` && (e5.trans._cache = null), r4.mutate(e5);
          } });
        } };
      } };
      function or2(e4, t4) {
        return e4.trans.mode === `readonly` && !!e4.subscr && !e4.trans.explicit && e4.trans.db._options.cache !== `disabled` && !t4.schema.primaryKey.outbound;
      }
      function sr2(e4, t4) {
        switch (e4) {
          case `query`:
            return t4.values && !t4.unique;
          case `get`:
          case `getMany`:
          case `count`:
          case `openCursor`:
            return false;
        }
      }
      var cr2 = { stack: `dbcore`, level: 0, name: `Observability`, create: function(e4) {
        var n4 = e4.schema.name, r4 = new R2(e4.MIN_KEY, e4.MAX_KEY);
        return t3(t3({}, e4), { transaction: function(t4, n5, r5) {
          if (P2.subscr && n5 !== `readonly`) throw new M2.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${P2.querier}`);
          return e4.transaction(t4, n5, r5);
        }, table: function(o4) {
          function s4(t4) {
            var t4 = t4.query;
            return [t4.index, new R2((t4 = t4.range).lower ?? e4.MIN_KEY, t4.upper ?? e4.MAX_KEY)];
          }
          var c4 = e4.table(o4), l4 = c4.schema, u3 = l4.primaryKey, d3 = l4.indexes, f3 = u3.extractKey, p3 = u3.outbound, m3 = u3.autoIncrement && d3.filter(function(e5) {
            return e5.compound && e5.keyPath.includes(u3.keyPath);
          }), h3 = t3(t3({}, c4), { mutate: function(t4) {
            function i4(e5) {
              return e5 = `idb://${n4}/${o4}/${e5}`, h4[e5] || (h4[e5] = new R2());
            }
            var s5, d4, f4, p4 = t4.trans, h4 = t4.mutatedParts ||= {}, g4 = i4(``), _3 = i4(`:dels`), v3 = t4.type, y3 = t4.type === `deleteRange` ? [t4.range] : t4.type === `delete` ? [t4.keys] : t4.values.length < 50 ? [nr2(u3, t4).filter(function(e5) {
              return e5;
            }), t4.values] : [], b3 = y3[0], y3 = y3[1], x3 = t4.trans._cache;
            return a3(b3) ? (g4.addKeys(b3), (v3 = v3 === `delete` || b3.length === y3.length ? ir2(b3, x3) : null) || _3.addKeys(b3), (v3 || y3) && (s5 = i4, d4 = v3, f4 = y3, l4.indexes.forEach(function(e5) {
              var t5 = s5(e5.name || ``);
              function n5(t6) {
                return t6 == null ? null : e5.extractKey(t6);
              }
              function r5(n6) {
                e5.multiEntry && a3(n6) ? n6.forEach(function(e6) {
                  return t5.addKey(e6);
                }) : t5.addKey(n6);
              }
              (d4 || f4).forEach(function(e6, t6) {
                var i5 = d4 && n5(d4[t6]), t6 = f4 && n5(f4[t6]);
                L2(i5, t6) !== 0 && (i5 != null && r5(i5), t6 != null) && r5(t6);
              });
            }))) : b3 ? (y3 = { from: (x3 = b3.lower) ?? e4.MIN_KEY, to: (v3 = b3.upper) ?? e4.MAX_KEY }, _3.add(y3), g4.add(y3)) : (g4.add(r4), _3.add(r4), l4.indexes.forEach(function(e5) {
              return i4(e5.name).add(r4);
            })), c4.mutate(t4).then(function(e5) {
              return !b3 || t4.type !== `add` && t4.type !== `put` || (g4.addKeys(e5.results), m3 && m3.forEach(function(n5) {
                for (var r5 = t4.values.map(function(e6) {
                  return n5.extractKey(e6);
                }), a4 = n5.keyPath.findIndex(function(e6) {
                  return e6 === u3.keyPath;
                }), o5 = 0, s6 = e5.results.length; o5 < s6; ++o5) r5[o5][a4] = e5.results[o5];
                i4(n5.name).addKeys(r5);
              })), p4.mutatedParts = Un2(p4.mutatedParts || {}, h4), e5;
            });
          } }), g3 = { get: function(e5) {
            return [u3, new R2(e5.key)];
          }, getMany: function(e5) {
            return [u3, new R2().addKeys(e5.keys)];
          }, count: s4, query: s4, openCursor: s4 };
          return i3(g3).forEach(function(e5) {
            h3[e5] = function(i4) {
              var a4 = P2.subscr, s5 = !!a4, l5 = or2(P2, c4) && sr2(e5, i4) ? i4.obsSet = {} : a4;
              if (s5) {
                var u4, a4 = function(e6) {
                  return e6 = `idb://${n4}/${o4}/${e6}`, l5[e6] || (l5[e6] = new R2());
                }, d4 = a4(``), m4 = a4(`:dels`), s5 = g3[e5](i4), h4 = s5[0], s5 = s5[1];
                if ((e5 === `query` && h4.isPrimaryKey && !i4.values ? m4 : a4(h4.name || ``)).add(s5), !h4.isPrimaryKey) {
                  if (e5 !== `count`) return u4 = e5 === `query` && p3 && i4.values && c4.query(t3(t3({}, i4), { values: false })), c4[e5].apply(this, arguments).then(function(t4) {
                    if (e5 === `query`) {
                      if (p3 && i4.values) return u4.then(function(e6) {
                        return e6 = e6.result, d4.addKeys(e6), t4;
                      });
                      var n5 = i4.values ? t4.result.map(f3) : t4.result;
                      (i4.values ? d4 : m4).addKeys(n5);
                    } else {
                      var r5, a5;
                      if (e5 === `openCursor`) return a5 = i4.values, (r5 = t4) && Object.create(r5, { key: { get: function() {
                        return m4.addKey(r5.primaryKey), r5.key;
                      } }, primaryKey: { get: function() {
                        var e6 = r5.primaryKey;
                        return m4.addKey(e6), e6;
                      } }, value: { get: function() {
                        return a5 && d4.addKey(r5.primaryKey), r5.value;
                      } } });
                    }
                    return t4;
                  });
                  m4.add(r4);
                }
              }
              return c4[e5].apply(this, arguments);
            };
          }), h3;
        } });
      } };
      function lr2(e4, n4, r4) {
        var i4;
        return r4.numFailures === 0 ? n4 : n4.type === `deleteRange` || (i4 = n4.keys ? n4.keys.length : `values` in n4 && n4.values ? n4.values.length : 1, r4.numFailures === i4) ? null : (i4 = t3({}, n4), a3(i4.keys) && (i4.keys = i4.keys.filter(function(e5, t4) {
          return !(t4 in r4.failures);
        })), `values` in i4 && a3(i4.values) && (i4.values = i4.values.filter(function(e5, t4) {
          return !(t4 in r4.failures);
        })), i4);
      }
      function ur2(e4, t4) {
        return n4 = e4, ((r4 = t4).lower === void 0 || (r4.lowerOpen ? 0 < L2(n4, r4.lower) : 0 <= L2(n4, r4.lower))) && (n4 = e4, (r4 = t4).upper === void 0 || (r4.upperOpen ? L2(n4, r4.upper) < 0 : L2(n4, r4.upper) <= 0));
        var n4, r4;
      }
      function dr2(e4, t4, n4, r4, i4, o4) {
        var s4, c4, l4, u3, d3, f3, p3;
        return !n4 || n4.length === 0 || (s4 = t4.query.index, c4 = s4.multiEntry, l4 = t4.query.range, u3 = r4.schema.primaryKey.extractKey, d3 = s4.extractKey, f3 = (s4.lowLevelIndex || s4).extractKey, (r4 = n4.reduce(function(e5, n5) {
          var r5 = e5, i5 = [];
          if (n5.type === `add` || n5.type === `put`) for (var o5 = new R2(), s5 = n5.values.length - 1; 0 <= s5; --s5) {
            var f4, p4 = n5.values[s5], m3 = u3(p4);
            !o5.hasKey(m3) && (f4 = d3(p4), c4 && a3(f4) ? f4.some(function(e6) {
              return ur2(e6, l4);
            }) : ur2(f4, l4)) && (o5.addKey(m3), i5.push(p4));
          }
          switch (n5.type) {
            case `add`:
              var h3 = new R2().addKeys(t4.values ? e5.map(function(e6) {
                return u3(e6);
              }) : e5), r5 = e5.concat(t4.values ? i5.filter(function(e6) {
                return e6 = u3(e6), !h3.hasKey(e6) && (h3.addKey(e6), true);
              }) : i5.map(function(e6) {
                return u3(e6);
              }).filter(function(e6) {
                return !h3.hasKey(e6) && (h3.addKey(e6), true);
              }));
              break;
            case `put`:
              var g3 = new R2().addKeys(n5.values.map(function(e6) {
                return u3(e6);
              }));
              r5 = e5.filter(function(e6) {
                return !g3.hasKey(t4.values ? u3(e6) : e6);
              }).concat(t4.values ? i5 : i5.map(function(e6) {
                return u3(e6);
              }));
              break;
            case `delete`:
              var _3 = new R2().addKeys(n5.keys);
              r5 = e5.filter(function(e6) {
                return !_3.hasKey(t4.values ? u3(e6) : e6);
              });
              break;
            case `deleteRange`:
              var v3 = n5.range;
              r5 = e5.filter(function(e6) {
                return !ur2(u3(e6), v3);
              });
          }
          return r5;
        }, e4)) === e4) ? e4 : (p3 = function(e5, t5) {
          return L2(f3(e5), f3(t5)) || L2(u3(e5), u3(t5));
        }, r4.sort(t4.direction === `prev` || t4.direction === `prevunique` ? function(e5, t5) {
          return p3(t5, e5);
        } : p3), t4.limit && t4.limit < 1 / 0 && (r4.length > t4.limit ? r4.length = t4.limit : e4.length === t4.limit && r4.length < t4.limit && (i4.dirty = true)), o4 ? Object.freeze(r4) : r4);
      }
      function fr2(e4, t4) {
        return L2(e4.lower, t4.lower) === 0 && L2(e4.upper, t4.upper) === 0 && !!e4.lowerOpen == !!t4.lowerOpen && !!e4.upperOpen == !!t4.upperOpen;
      }
      function pr2(e4, t4) {
        return ((e5, t5, n4, r4) => {
          if (e5 === void 0) return t5 === void 0 ? 0 : -1;
          if (t5 === void 0) return 1;
          if ((e5 = L2(e5, t5)) === 0) {
            if (n4 && r4) return 0;
            if (n4) return 1;
            if (r4) return -1;
          }
          return e5;
        })(e4.lower, t4.lower, e4.lowerOpen, t4.lowerOpen) <= 0 && 0 <= ((e5, t5, n4, r4) => {
          if (e5 === void 0) return t5 === void 0 ? 0 : 1;
          if (t5 === void 0) return -1;
          if ((e5 = L2(e5, t5)) === 0) {
            if (n4 && r4) return 0;
            if (n4) return -1;
            if (r4) return 1;
          }
          return e5;
        })(e4.upper, t4.upper, e4.upperOpen, t4.upperOpen);
      }
      function mr2(e4, t4, n4, r4) {
        e4.subscribers.add(n4), r4.addEventListener(`abort`, function() {
          var r5, i4;
          e4.subscribers.delete(n4), e4.subscribers.size === 0 && (r5 = e4, i4 = t4, setTimeout(function() {
            r5.subscribers.size === 0 && re2(i4, r5);
          }, 3e3));
        });
      }
      var hr2 = { stack: `dbcore`, level: 0, name: `Cache`, create: function(e4) {
        var n4 = e4.schema.name;
        return t3(t3({}, e4), { transaction: function(t4, r4, i4) {
          var a4, o4, s4 = e4.transaction(t4, r4, i4);
          return r4 === `readwrite` && (i4 = (a4 = new AbortController()).signal, s4.addEventListener(`abort`, (o4 = function(i5) {
            return function() {
              if (a4.abort(), r4 === `readwrite`) {
                for (var o5 = /* @__PURE__ */ new Set(), c4 = 0, l4 = t4; c4 < l4.length; c4++) {
                  var u3 = l4[c4], d3 = Gn2[`idb://${n4}/${u3}`];
                  if (d3) {
                    var f3 = e4.table(u3), p3 = d3.optimisticOps.filter(function(e5) {
                      return e5.trans === s4;
                    });
                    if (s4._explicit && i5 && s4.mutatedParts) for (var m3 = 0, h3 = Object.values(d3.queries.query); m3 < h3.length; m3++) for (var g3 = 0, _3 = (b3 = h3[m3]).slice(); g3 < _3.length; g3++) Wn2((x3 = _3[g3]).obsSet, s4.mutatedParts) && (re2(b3, x3), x3.subscribers.forEach(function(e5) {
                      return o5.add(e5);
                    }));
                    else if (0 < p3.length) {
                      d3.optimisticOps = d3.optimisticOps.filter(function(e5) {
                        return e5.trans !== s4;
                      });
                      for (var v3 = 0, y3 = Object.values(d3.queries.query); v3 < y3.length; v3++) for (var b3, x3, S3, C3 = 0, w3 = (b3 = y3[v3]).slice(); C3 < w3.length; C3++) (x3 = w3[C3]).res != null && s4.mutatedParts && (i5 && !x3.dirty ? (S3 = Object.isFrozen(x3.res), S3 = dr2(x3.res, x3.req, p3, f3, x3, S3), x3.dirty ? (re2(b3, x3), x3.subscribers.forEach(function(e5) {
                        return o5.add(e5);
                      })) : S3 !== x3.res && (x3.res = S3, x3.promise = F2.resolve({ result: S3 }))) : (x3.dirty && re2(b3, x3), x3.subscribers.forEach(function(e5) {
                        return o5.add(e5);
                      })));
                    }
                  }
                }
                o5.forEach(function(e5) {
                  return e5();
                });
              }
            };
          })(false), { signal: i4 }), s4.addEventListener(`error`, o4(false), { signal: i4 }), s4.addEventListener(`complete`, o4(true), { signal: i4 })), s4;
        }, table: function(r4) {
          var i4 = e4.table(r4), a4 = i4.schema.primaryKey;
          return t3(t3({}, i4), { mutate: function(e5) {
            var o4, s4 = P2.trans;
            return !a4.outbound && s4.db._options.cache !== `disabled` && !s4.explicit && s4.idbtrans.mode === `readwrite` && (o4 = Gn2[`idb://${n4}/${r4}`]) ? (s4 = i4.mutate(e5), e5.type !== `add` && e5.type !== `put` || !(50 <= e5.values.length || nr2(a4, e5).some(function(e6) {
              return e6 == null;
            })) ? (o4.optimisticOps.push(e5), e5.mutatedParts && Jn2(e5.mutatedParts), s4.then(function(t4) {
              0 < t4.numFailures && (re2(o4.optimisticOps, e5), (t4 = lr2(0, e5, t4)) && o4.optimisticOps.push(t4), e5.mutatedParts) && Jn2(e5.mutatedParts);
            }), s4.catch(function() {
              re2(o4.optimisticOps, e5), e5.mutatedParts && Jn2(e5.mutatedParts);
            })) : s4.then(function(n5) {
              var r5 = lr2(0, t3(t3({}, e5), { values: e5.values.map(function(e6, r6) {
                var i5;
                return n5.failures[r6] ? e6 : (x2(i5 = (i5 = a4.keyPath) != null && i5.includes(`.`) ? O2(e6) : t3({}, e6), a4.keyPath, n5.results[r6]), i5);
              }) }), n5);
              o4.optimisticOps.push(r5), queueMicrotask(function() {
                return e5.mutatedParts && Jn2(e5.mutatedParts);
              });
            }), s4) : i4.mutate(e5);
          }, query: function(e5) {
            var t4, a5, o4, s4, c4, l4, u3;
            return or2(P2, i4) && sr2(`query`, e5) ? (t4 = (o4 = P2.trans)?.db._options.cache === `immutable`, a5 = (o4 = P2).requery, o4 = o4.signal, l4 = ((e6, t5, n5, r5) => {
              var i5 = Gn2[`idb://${e6}/${t5}`];
              if (!i5) return [];
              if (!(e6 = i5.queries[n5])) return [null, false, i5, null];
              var a6 = e6[(r5.query ? r5.query.index.name : null) || ``];
              if (!a6) return [null, false, i5, null];
              switch (n5) {
                case `query`:
                  var o5 = (s5 = r5.direction) ?? `next`, s5 = a6.find(function(e7) {
                    return e7.req.limit === r5.limit && e7.req.values === r5.values && (e7.req.direction ?? `next`) === o5 && fr2(e7.req.query.range, r5.query.range);
                  });
                  return s5 ? [s5, true, i5, a6] : [a6.find(function(e7) {
                    return (`limit` in e7.req ? e7.req.limit : 1 / 0) >= r5.limit && (e7.req.direction ?? `next`) === o5 && (!r5.values || e7.req.values) && pr2(e7.req.query.range, r5.query.range);
                  }), false, i5, a6];
                case `count`:
                  return s5 = a6.find(function(e7) {
                    return fr2(e7.req.query.range, r5.query.range);
                  }), [s5, !!s5, i5, a6];
              }
            })(n4, r4, `query`, e5), u3 = l4[0], s4 = l4[2], c4 = l4[3], u3 && l4[1] ? u3.obsSet = e5.obsSet : (l4 = i4.query(e5).then(function(e6) {
              var n5 = e6.result;
              if (u3 && (u3.res = n5), t4) {
                for (var r5 = 0, i5 = n5.length; r5 < i5; ++r5) Object.freeze(n5[r5]);
                Object.freeze(n5);
              } else e6.result = O2(n5);
              return e6;
            }).catch(function(e6) {
              return c4 && u3 && re2(c4, u3), Promise.reject(e6);
            }), u3 = { obsSet: e5.obsSet, promise: l4, subscribers: /* @__PURE__ */ new Set(), type: `query`, req: e5, dirty: false }, c4 ? c4.push(u3) : (c4 = [u3], (s4 ||= Gn2[`idb://${n4}/${r4}`] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} }).queries.query[e5.query.index.name || ``] = c4)), mr2(u3, c4, a5, o4), u3.promise.then(function(n5) {
              return { result: dr2(n5.result, e5, s4?.optimisticOps, i4, u3, t4) };
            })) : i4.query(e5);
          } });
        } });
      } };
      function gr2(e4, t4) {
        return new Proxy(e4, { get: function(e5, n4, r4) {
          return n4 === `db` ? t4 : Reflect.get(e5, n4, r4);
        } });
      }
      vr2.prototype.version = function(e4) {
        if (isNaN(e4) || e4 < 0.1) throw new M2.Type(`Given version is not a positive number`);
        if (e4 = Math.round(10 * e4) / 10, this.idbdb || this._state.isBeingOpened) throw new M2.Schema(`Cannot add version when database is open`);
        this.verno = Math.max(this.verno, e4);
        var t4 = this._versions, n4 = t4.filter(function(t5) {
          return t5._cfg.version === e4;
        })[0];
        return n4 || (n4 = new this.Version(e4), t4.push(n4), t4.sort(bn2), n4.stores({}), this._state.autoSchema = false), n4;
      }, vr2.prototype._whenReady = function(e4) {
        var t4 = this;
        return this.idbdb && (this._state.openComplete || P2.letThrough || this._vip) ? e4() : new F2(function(e5, n4) {
          if (t4._state.openComplete) return n4(new M2.DatabaseClosed(t4._state.dbOpenError));
          if (!t4._state.isBeingOpened) {
            if (!t4._state.autoOpen) return void n4(new M2.DatabaseClosed());
            t4.open().catch(N2);
          }
          t4._state.dbReadyPromise.then(e5, n4);
        }).then(e4);
      }, vr2.prototype.use = function(e4) {
        var t4 = e4.stack, n4 = e4.create, r4 = e4.level, e4 = e4.name, i4 = (e4 && this.unuse({ stack: t4, name: e4 }), this._middlewares[t4] || (this._middlewares[t4] = []));
        return i4.push({ stack: t4, create: n4, level: r4 ?? 10, name: e4 }), i4.sort(function(e5, t5) {
          return e5.level - t5.level;
        }), this;
      }, vr2.prototype.unuse = function(e4) {
        var t4 = e4.stack, n4 = e4.name, r4 = e4.create;
        return t4 && this._middlewares[t4] && (this._middlewares[t4] = this._middlewares[t4].filter(function(e5) {
          return r4 ? e5.create !== r4 : !!n4 && e5.name !== n4;
        })), this;
      }, vr2.prototype.open = function() {
        var e4 = this;
        return ut2(Ie2, function() {
          return Zn2(e4);
        });
      }, vr2.prototype._close = function() {
        this.on.close.fire(new CustomEvent(`close`));
        var e4 = this._state;
        if (Mn2.remove(this), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e4.isBeingOpened || (e4.dbReadyPromise = new F2(function(t4) {
          e4.dbReadyResolve = t4;
        }), e4.openCanceller = new F2(function(t4, n4) {
          e4.cancelOpen = n4;
        }));
      }, vr2.prototype.close = function(e4) {
        var e4 = (e4 === void 0 ? { disableAutoOpen: true } : e4).disableAutoOpen, t4 = this._state;
        e4 ? (t4.isBeingOpened && t4.cancelOpen(new M2.DatabaseClosed()), this._close(), t4.autoOpen = false, t4.dbOpenError = new M2.DatabaseClosed()) : (this._close(), t4.autoOpen = this._options.autoOpen || t4.isBeingOpened, t4.openComplete = false, t4.dbOpenError = null);
      }, vr2.prototype.delete = function(e4) {
        var t4 = this, n4 = (e4 === void 0 && (e4 = { disableAutoOpen: true }), 0 < arguments.length && typeof arguments[0] != `object`), r4 = this._state;
        return new F2(function(i4, a4) {
          function o4() {
            t4.close(e4);
            var n5 = t4._deps.indexedDB.deleteDatabase(t4.name);
            n5.onsuccess = Xe2(function() {
              var e5 = t4._deps, n6 = t4.name, r5;
              Pn2(r5 = e5.indexedDB) || n6 === _t2 || Nn2(r5, e5.IDBKeyRange).delete(n6).catch(N2), i4();
            }), n5.onerror = $t2(a4), n5.onblocked = t4._fireOnBlocked;
          }
          if (n4) throw new M2.InvalidArgument(`Invalid closeOptions argument to db.delete()`);
          r4.isBeingOpened ? r4.dbReadyPromise.then(o4) : o4();
        });
      }, vr2.prototype.backendDB = function() {
        return this.idbdb;
      }, vr2.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, vr2.prototype.hasBeenClosed = function() {
        var e4 = this._state.dbOpenError;
        return e4 && e4.name === `DatabaseClosed`;
      }, vr2.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, vr2.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(vr2.prototype, "tables", { get: function() {
        var e4 = this;
        return i3(this._allTables).map(function(t4) {
          return e4._allTables[t4];
        });
      }, enumerable: false, configurable: true }), vr2.prototype.transaction = function() {
        var e4 = function(e5, t4, n4) {
          var r4 = arguments.length;
          if (r4 < 2) throw new M2.InvalidArgument(`Too few arguments`);
          for (var i4 = Array(r4 - 1); --r4; ) i4[r4 - 1] = arguments[r4];
          return n4 = i4.pop(), [e5, w2(i4), n4];
        }.apply(this, arguments);
        return this._transaction.apply(this, e4);
      }, vr2.prototype._transaction = function(e4, t4, n4) {
        var r4, i4, a4 = this, o4 = P2.trans, s4 = (o4 && o4.db === this && e4.indexOf(`!`) === -1 || (o4 = null), e4.indexOf(`?`) !== -1);
        e4 = e4.replace(`!`, ``).replace(`?`, ``);
        try {
          if (i4 = t4.map(function(e5) {
            if (e5 = e5 instanceof a4.Table ? e5.name : e5, typeof e5 != `string`) throw TypeError(`Invalid table argument to Dexie.transaction(). Only Table or String are allowed`);
            return e5;
          }), e4 == `r` || e4 === vt2) r4 = vt2;
          else {
            if (e4 != `rw` && e4 != yt2) throw new M2.InvalidArgument(`Invalid transaction mode: ` + e4);
            r4 = yt2;
          }
          if (o4) {
            if (o4.mode === vt2 && r4 === yt2) {
              if (!s4) throw new M2.SubTransaction(`Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY`);
              o4 = null;
            }
            o4 && i4.forEach(function(e5) {
              if (o4 && o4.storeNames.indexOf(e5) === -1) {
                if (!s4) throw new M2.SubTransaction(`Table ` + e5 + ` not included in parent transaction.`);
                o4 = null;
              }
            }), s4 && o4 && !o4.active && (o4 = null);
          }
        } catch (e5) {
          return o4 ? o4._promise(null, function(t5, n5) {
            n5(e5);
          }) : pt2(e5);
        }
        var c4 = function e5(t5, n5, r5, i5, a5) {
          return F2.resolve().then(function() {
            var o5 = P2.transless || P2, s5 = t5._createTransaction(n5, r5, t5._dbSchema, i5), o5 = (s5.explicit = true, { trans: s5, transless: o5 });
            if (i5) s5.idbtrans = i5.idbtrans;
            else try {
              s5.create(), s5.idbtrans._explicit = true, t5._state.PR1398_maxLoop = 3;
            } catch (i6) {
              return i6.name === de2.InvalidState && t5.isOpen() && 0 < --t5._state.PR1398_maxLoop ? (console.warn(`Dexie: Need to reopen db`), t5.close({ disableAutoOpen: false }), t5.open().then(function() {
                return e5(t5, n5, r5, null, a5);
              })) : pt2(i6);
            }
            var c5, l4 = A2(a5), o5 = (l4 && it2(), F2.follow(function() {
              var e6;
              (c5 = a5.call(s5, s5)) && (l4 ? (e6 = at2.bind(null, null), c5.then(e6, e6)) : typeof c5.next == `function` && typeof c5.throw == `function` && (c5 = Qn2(c5)));
            }, o5));
            return (c5 && typeof c5.then == `function` ? F2.resolve(c5).then(function(e6) {
              return s5.active ? e6 : pt2(new M2.PrematureCommit(`Transaction committed too early. See http://bit.ly/2kdckMn`));
            }) : o5.then(function() {
              return c5;
            })).then(function(e6) {
              return i5 && s5._resolve(), s5._completion.then(function() {
                return e6;
              });
            }).catch(function(e6) {
              return s5._reject(e6), pt2(e6);
            });
          });
        }.bind(null, this, r4, i4, o4, n4);
        return o4 ? o4._promise(r4, c4, `lock`) : P2.trans ? ut2(P2.transless, function() {
          return a4._whenReady(c4);
        }) : this._whenReady(c4);
      }, vr2.prototype.table = function(e4) {
        if (l3(this._allTables, e4)) return this._allTables[e4];
        throw new M2.InvalidTable(`Table ${e4} does not exist`);
      };
      var _r2 = vr2;
      function vr2(e4, n4) {
        var r4, i4, a4, o4, s4, c4 = this, l4 = (this._middlewares = {}, this.verno = 0, vr2.dependencies), l4 = (this._options = n4 = t3({ addons: vr2.addons, autoOpen: true, indexedDB: l4.indexedDB, IDBKeyRange: l4.IDBKeyRange, cache: `cloned`, maxConnections: 1e3 }, n4), this._deps = { indexedDB: n4.indexedDB, IDBKeyRange: n4.IDBKeyRange }, n4.addons), u3 = (this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, { dbOpenError: null, isBeingOpened: false, onReadyBeingFired: null, openComplete: false, dbReadyResolve: N2, dbReadyPromise: null, cancelOpen: N2, openCanceller: null, autoSchema: true, PR1398_maxLoop: 3, autoOpen: n4.autoOpen }), d3 = (u3.dbReadyPromise = new F2(function(e5) {
          u3.dbReadyResolve = e5;
        }), u3.openCanceller = new F2(function(e5, t4) {
          u3.cancelOpen = t4;
        }), this._state = u3, this.name = e4, this.on = Mt2(this, `populate`, `blocked`, `versionchange`, `close`, { ready: [xe2, N2] }), this.once = function(e5, t4) {
          var n5 = function() {
            var r5 = [...arguments];
            c4.on(e5).unsubscribe(n5), t4.apply(c4, r5);
          };
          return c4.on(e5, n5);
        }, this.on.ready.subscribe = _2(this.on.ready.subscribe, function(e5) {
          return function(t4, n5) {
            vr2.vip(function() {
              var r5, i5 = c4._state;
              i5.openComplete ? (i5.dbOpenError || F2.resolve().then(t4), n5 && e5(t4)) : i5.onReadyBeingFired ? (i5.onReadyBeingFired.push(t4), n5 && e5(t4)) : (e5(t4), r5 = c4, n5 || e5(function e6() {
                r5.on.ready.unsubscribe(t4), r5.on.ready.unsubscribe(e6);
              }));
            });
          };
        }), this.Collection = (r4 = this, Nt2(Vt2.prototype, function(e5, t4) {
          this.db = r4;
          var n5 = xt2, i5 = null;
          if (t4) try {
            n5 = t4();
          } catch (e6) {
            i5 = e6;
          }
          var t4 = e5._ctx, e5 = t4.table, a5 = e5.hook.reading.fire;
          this._ctx = { table: e5, index: t4.index, isPrimKey: !t4.index || e5.schema.primKey.keyPath && t4.index === e5.schema.primKey.name, range: n5, keysOnly: false, dir: `next`, unique: ``, algorithm: null, filter: null, replayFilter: null, justLimit: true, isMatch: null, offset: 0, limit: 1 / 0, error: i5, or: t4.or, valueMapper: a5 === me2 ? null : a5 };
        })), this.Table = (i4 = this, Nt2(At2.prototype, function(e5, t4, n5) {
          this.db = i4, this._tx = n5, this.name = e5, this.schema = t4, this.hook = i4._allTables[e5] ? i4._allTables[e5].hook : Mt2(null, { creating: [_e2, N2], reading: [he2, me2], updating: [ye2, N2], deleting: [ve2, N2] });
        })), this.Transaction = (a4 = this, Nt2(an2.prototype, function(e5, t4, n5, r5, i5) {
          var o5 = this;
          e5 !== `readonly` && t4.forEach(function(e6) {
            e6 = (e6 = n5[e6])?.yProps, e6 && (t4 = t4.concat(e6.map(function(e7) {
              return e7.updatesTable;
            })));
          }), this.db = a4, this.mode = e5, this.storeNames = t4, this.schema = n5, this.chromeTransactionDurability = r5, this.idbtrans = null, this.on = Mt2(this, `complete`, `error`, `abort`), this.parent = i5 || null, this.active = true, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new F2(function(e6, t5) {
            o5._resolve = e6, o5._reject = t5;
          }), this._completion.then(function() {
            o5.active = false, o5.on.complete.fire();
          }, function(e6) {
            var t5 = o5.active;
            return o5.active = false, o5.on.error.fire(e6), o5.parent ? o5.parent._reject(e6) : t5 && o5.idbtrans && o5.idbtrans.abort(), pt2(e6);
          });
        })), this.Version = (o4 = this, Nt2(An2.prototype, function(e5) {
          this.db = o4, this._cfg = { version: e5, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (s4 = this, Nt2(Zt2.prototype, function(e5, t4, n5) {
          if (this.db = s4, this._ctx = { table: e5, index: t4 === `:id` ? null : t4, or: n5 }, this._cmp = this._ascending = L2, this._descending = function(e6, t5) {
            return L2(t5, e6);
          }, this._max = function(e6, t5) {
            return 0 < L2(e6, t5) ? e6 : t5;
          }, this._min = function(e6, t5) {
            return L2(e6, t5) < 0 ? e6 : t5;
          }, this._IDBKeyRange = s4._deps.IDBKeyRange, !this._IDBKeyRange) throw new M2.MissingAPI();
        })), this.on(`versionchange`, function(e5) {
          0 < e5.newVersion ? console.warn(`Another connection wants to upgrade database '${c4.name}'. Closing db now to resume the upgrade.`) : console.warn(`Another connection wants to delete database '${c4.name}'. Closing db now to resume the delete request.`), c4.close({ disableAutoOpen: false });
        }), this.on(`blocked`, function(e5) {
          !e5.newVersion || e5.newVersion < e5.oldVersion ? console.warn(`Dexie.delete('${c4.name}') was blocked`) : console.warn(`Upgrade '${c4.name}' blocked by other connection holding version ${e5.oldVersion / 10}`);
        }), this._maxKey = un2(n4.IDBKeyRange), this._createTransaction = function(e5, t4, n5, r5) {
          return new c4.Transaction(e5, t4, n5, c4._options.chromeTransactionDurability, r5);
        }, this._fireOnBlocked = function(e5) {
          c4.on(`blocked`).fire(e5), Mn2.toArray().filter(function(e6) {
            return e6.name === c4.name && e6 !== c4 && !e6._state.vcFired;
          }).map(function(t4) {
            return t4.on(`versionchange`).fire(e5);
          });
        }, this.use(ar2), this.use(hr2), this.use(cr2), this.use(er2), this.use(rr2), new Proxy(this, { get: function(e5, t4, n5) {
          var r5;
          return t4 === `_vip` || (t4 === `table` ? function(e6) {
            return gr2(c4.table(e6), d3);
          } : (r5 = Reflect.get(e5, t4, n5)) instanceof At2 ? gr2(r5, d3) : t4 === `tables` ? r5.map(function(e6) {
            return gr2(e6, d3);
          }) : t4 === `_createTransaction` ? function() {
            return gr2(r5.apply(this, arguments), d3);
          } : r5);
        } }));
        this.vip = d3, l4.forEach(function(e5) {
          return e5(c4);
        });
      }
      var yr2, De2 = typeof Symbol < `u` && `observable` in Symbol ? Symbol.observable : `@@observable`, br2 = (xr2.prototype.subscribe = function(e4, t4, n4) {
        return this._subscribe(e4 && typeof e4 != `function` ? e4 : { next: e4, error: t4, complete: n4 });
      }, xr2.prototype[De2] = function() {
        return this;
      }, xr2);
      function xr2(e4) {
        this._subscribe = e4;
      }
      try {
        yr2 = { indexedDB: r3.indexedDB || r3.mozIndexedDB || r3.webkitIndexedDB || r3.msIndexedDB, IDBKeyRange: r3.IDBKeyRange || r3.webkitIDBKeyRange };
      } catch {
        yr2 = { indexedDB: null, IDBKeyRange: null };
      }
      function Sr2(e4) {
        var t4, n4 = false, r4 = new br2(function(r5) {
          var i4 = A2(e4), a4, o4 = false, s4 = {}, c4 = {}, l4 = { get closed() {
            return o4;
          }, unsubscribe: function() {
            o4 || (o4 = true, a4 && a4.abort(), u3 && rn2.storagemutated.unsubscribe(p3));
          } }, u3 = (r5.start && r5.start(l4), false), d3 = function() {
            return ft2(m3);
          };
          function f3() {
            return Wn2(c4, s4);
          }
          var p3 = function(e5) {
            Un2(s4, e5), f3() && d3();
          }, m3 = function() {
            var l5, m4, h3;
            !o4 && yr2.indexedDB && (s4 = {}, l5 = {}, a4 && a4.abort(), a4 = new AbortController(), h3 = ((t5) => {
              var n5 = Ke2();
              try {
                i4 && it2();
                var r6 = rt2(e4, t5);
                return r6 = i4 ? r6.finally(at2) : r6;
              } finally {
                n5 && qe2();
              }
            })(m4 = { subscr: l5, signal: a4.signal, requery: d3, querier: e4, trans: null }), u3 ||= (rn2.storagemutated.subscribe(p3), true), Promise.resolve(h3).then(function(e5) {
              n4 = true, t4 = e5, o4 || m4.signal.aborted || (f3() || (c4 = l5, f3()) ? d3() : (s4 = {}, ft2(function() {
                return !o4 && r5.next && r5.next(e5);
              })));
            }, function(e5) {
              n4 = false, [`DatabaseClosedError`, `AbortError`].includes(e5?.name) || o4 || ft2(function() {
                o4 || r5.error && r5.error(e5);
              });
            }));
          };
          return setTimeout(d3, 0), l4;
        });
        return r4.hasValue = function() {
          return n4;
        }, r4.getValue = function() {
          return t4;
        }, r4;
      }
      var Cr2 = _r2;
      function wr2(e4) {
        var t4 = Er2;
        try {
          Er2 = true, rn2.storagemutated.fire(e4), Yn2(e4, true);
        } finally {
          Er2 = t4;
        }
      }
      u2(Cr2, t3(t3({}, T2), { delete: function(e4) {
        return new Cr2(e4, { addons: [] }).delete();
      }, exists: function(e4) {
        return new Cr2(e4, { addons: [] }).open().then(function(e5) {
          return e5.close(), true;
        }).catch(`NoSuchDatabaseError`, function() {
          return false;
        });
      }, getDatabaseNames: function(e4) {
        try {
          return t4 = Cr2.dependencies, n4 = t4.indexedDB, t4 = t4.IDBKeyRange, (Pn2(n4) ? Promise.resolve(n4.databases()).then(function(e5) {
            return e5.map(function(e6) {
              return e6.name;
            }).filter(function(e6) {
              return e6 !== _t2;
            });
          }) : Nn2(n4, t4).toCollection().primaryKeys()).then(e4);
        } catch {
          return pt2(new M2.MissingAPI());
        }
        var t4, n4;
      }, defineClass: function() {
        return function(e4) {
          o3(this, e4);
        };
      }, ignoreTransaction: function(e4) {
        return P2.trans ? ut2(P2.transless || Ie2, e4) : e4();
      }, vip: Fn2, async: function(e4) {
        return function() {
          try {
            var t4 = Qn2(e4.apply(this, arguments));
            return t4 && typeof t4.then == `function` ? t4 : F2.resolve(t4);
          } catch (e5) {
            return pt2(e5);
          }
        };
      }, spawn: function(e4, t4, n4) {
        try {
          var r4 = Qn2(e4.apply(n4, t4 || []));
          return r4 && typeof r4.then == `function` ? r4 : F2.resolve(r4);
        } catch (e5) {
          return pt2(e5);
        }
      }, currentTransaction: { get: function() {
        return P2.trans || null;
      } }, waitFor: function(e4, t4) {
        return e4 = F2.resolve(typeof e4 == `function` ? Cr2.ignoreTransaction(e4) : e4).timeout(t4 || 6e4), P2.trans ? P2.trans.waitFor(e4) : e4;
      }, Promise: F2, debug: { get: function() {
        return Se2;
      }, set: function(e4) {
        Ce2(e4);
      } }, derive: p2, extend: o3, props: u2, override: _2, Events: Mt2, on: rn2, liveQuery: Sr2, extendObservabilitySet: Un2, getByKeyPath: b2, setByKeyPath: x2, delByKeyPath: function(e4, t4) {
        typeof t4 == `string` ? x2(e4, t4, void 0) : `length` in t4 && [].map.call(t4, function(t5) {
          x2(e4, t5, void 0);
        });
      }, shallowClone: S2, deepClone: O2, getObjectDiff: tr2, cmp: L2, asap: y2, minKey: -1 / 0, addons: [], connections: { get: Mn2.toArray }, errnames: de2, dependencies: yr2, cache: Gn2, semVer: `4.4.3`, version: `4.4.3`.split(`.`).map(function(e4) {
        return parseInt(e4);
      }).reduce(function(e4, t4, n4) {
        return e4 + t4 / 10 ** (2 * n4);
      }) })), Cr2.maxKey = un2(Cr2.dependencies.IDBKeyRange), typeof dispatchEvent < `u` && typeof addEventListener < `u` && (rn2(tn2, function(e4) {
        Er2 ||= (e4 = new CustomEvent(nn2, { detail: e4 }), Er2 = true, dispatchEvent(e4), false);
      }), addEventListener(nn2, function(e4) {
        e4 = e4.detail, Er2 || wr2(e4);
      }));
      var Tr2, Er2 = false, Dr2 = function() {
      };
      return typeof BroadcastChannel < `u` && ((Dr2 = function() {
        (Tr2 = new BroadcastChannel(nn2)).onmessage = function(e4) {
          return e4.data && wr2(e4.data);
        };
      })(), typeof Tr2.unref == `function` && Tr2.unref(), rn2(tn2, function(e4) {
        Er2 || Tr2.postMessage(e4);
      })), typeof addEventListener < `u` && (addEventListener(`pagehide`, function(e4) {
        if (!_r2.disableBfCache && e4.persisted) {
          Se2 && console.debug(`Dexie: handling persisted pagehide`), Tr2?.close();
          for (var t4 = 0, n4 = Mn2.toArray(); t4 < n4.length; t4++) n4[t4].close({ disableAutoOpen: false });
        }
      }), addEventListener(`pageshow`, function(e4) {
        !_r2.disableBfCache && e4.persisted && (Se2 && console.debug(`Dexie: handling persisted pageshow`), Dr2(), wr2({ all: new R2(-1 / 0, [[]]) }));
      })), F2.rejectionMapper = function(e4, t4) {
        return !e4 || e4 instanceof se2 || e4 instanceof TypeError || e4 instanceof SyntaxError || !e4.name || !pe2[e4.name] ? e4 : (t4 = new pe2[e4.name](t4 || e4.message, e4), `stack` in e4 && f2(t4, `stack`, { get: function() {
          return this.inner.stack;
        } }), t4);
      }, Ce2(Se2), t3(_r2, Object.freeze({ __proto__: null, DEFAULT_MAX_CONNECTIONS: 1e3, Dexie: _r2, Entity: Ct2, PropModification: Dt2, RangeSet: R2, add: function(e4) {
        return new Dt2({ add: e4 });
      }, cmp: L2, default: _r2, liveQuery: Sr2, mergeRanges: Rn2, rangesOverlap: zn2, remove: function(e4) {
        return new Dt2({ remove: e4 });
      }, replacePrefix: function(e4, t4) {
        return new Dt2({ replacePrefix: [e4, t4] });
      } }), { default: _r2 }), _r2;
    });
  }))(), 1);
  var _n = /* @__PURE__ */ Symbol.for(`Dexie`);
  var vn = globalThis[_n] || (globalThis[_n] = gn.default);
  if (gn.default.semVer !== vn.semVer) throw Error(`Two different versions of Dexie loaded in the same app: ${gn.default.semVer} and ${vn.semVer}`);
  var { liveQuery: yn, mergeRanges: bn, rangesOverlap: xn, RangeSet: Sn, cmp: Cn, Entity: wn, PropModification: Tn, replacePrefix: En, add: Dn, remove: On, DexieYProvider: kn } = vn;
  var An = new vn(`RegistrationMatrixDB`);
  An.version(1).stores({ files: `id`, edits: `key, specialty`, prefs: `key` });
  function jn(e2, t2) {
    return `${e2}␟${t2}`;
  }
  async function Mn(e2, t2, n3, r3 = null) {
    await An.files.bulkPut([{ id: `sc04`, payload: e2 }, { id: `sh06`, payload: t2 }, { id: `sf01`, name: n3?.name || ``, mtime: n3?.mtime, payload: n3?.data || [] }, { id: `sf08`, name: r3?.name || ``, mtime: r3?.mtime, payload: r3?.data || [] }]);
  }
  async function Nn(e2, t2, n3) {
    await An.edits.put({ key: jn(e2, t2), specialty: e2, traineeId: t2, overrides: [...n3.overrides], removals: [...n3.removals], locked: n3.locked ? [...n3.locked] : null });
  }
  async function Pn(e2) {
    let t2 = [];
    Object.entries(e2).forEach(([e3, n3]) => {
      Object.entries(n3).forEach(([n4, r3]) => {
        t2.push({ key: jn(e3, n4), specialty: e3, traineeId: n4, overrides: [...r3.overrides], removals: [...r3.removals], locked: r3.locked ? [...r3.locked] : null });
      });
    }), await An.transaction(`rw`, An.edits, async () => {
      await An.edits.clear(), await An.edits.bulkPut(t2);
    });
  }
  var Fn = null;
  function In(e2) {
    return { theme: e2.theme, currentTab: e2.currentTab, currentStage: e2.currentStage, currentSpecialty: e2.currentSpecialty, hideGraduates: e2.hideGraduates, treatRegisteredAsCompleted: e2.treatRegisteredAsCompleted, approvedBarring: e2.approvedBarring, minTermCredits: e2.minTermCredits, maxTermCredits: e2.maxTermCredits, creditCeiling: e2.creditCeiling, expectedSource: e2.expectedSource, registrationPhase: e2.registrationPhase, ignoreSameLevelConflicts: e2.ignoreSameLevelConflicts, conflictsSpecialtyOnly: e2.conflictsSpecialtyOnly, freshmanCounts: e2.freshmanCounts, bundleCapacities: e2.bundleCapacities, hiddenHeaderRows: e2.hiddenHeaderRows, hiddenHeaderColumns: e2.hiddenHeaderColumns, gpaDangerThreshold: e2.gpaDangerThreshold, gpaWarningThreshold: e2.gpaWarningThreshold, highExpectedCreditsThreshold: e2.highExpectedCreditsThreshold, excludedTrainees: e2.excludedTrainees, expectedBgColor: e2.expectedBgColor, manualExpectedBgColor: e2.manualExpectedBgColor, regOkBgColor: e2.regOkBgColor, regBadBgColor: e2.regBadBgColor, sectionDefaults: e2.sectionDefaults, overCapPct: e2.overCapPct, sectionOverrides: e2.sectionOverrides, sectionTrainers: e2.sectionTrainers, courseOrderMode: e2.courseOrderMode };
  }
  function R(e2) {
    Fn && clearTimeout(Fn), Fn = setTimeout(() => {
      Fn = null, An.prefs.put({ key: `ui`, value: In(e2) });
    }, 300);
  }
  function Ln(e2) {
    Fn && (clearTimeout(Fn), Fn = null, An.prefs.put({ key: `ui`, value: In(e2) }));
  }
  async function Rn() {
    await Promise.all([An.files.clear(), An.edits.clear(), An.prefs.clear()]);
  }
  function zn(e2) {
    let t2 = e2?.payload;
    return t2?.length ? `data` in t2[0] ? t2 : [{ name: e2?.name || `SC04 (محفوظ)`, data: t2 }] : [];
  }
  async function Bn() {
    let [e2, t2, n3] = await Promise.all([An.files.toArray(), An.edits.toArray(), An.prefs.get(`ui`)]), r3 = Object.fromEntries(e2.map((e3) => [e3.id, e3])), i3 = {};
    t2.forEach((e3) => {
      i3[e3.specialty] || (i3[e3.specialty] = {}), i3[e3.specialty][e3.traineeId] = { overrides: new Set(e3.overrides), removals: new Set(e3.removals), locked: e3.locked };
    });
    let a3 = r3.sf01, o3 = a3?.payload || [], s3 = r3.sf08, c3 = s3?.payload || [];
    return { sc04Files: zn(r3.sc04), sh06Files: r3.sh06?.payload || [], sf01File: o3.length ? { name: a3?.name || `SF01 (محفوظ)`, data: o3, mtime: a3?.mtime } : null, sf08File: c3.length ? { name: s3?.name || `SF08 (محفوظ)`, data: c3, mtime: s3?.mtime } : null, edits: i3, prefs: n3?.value || {} };
  }
  function Vn(e2, t2) {
    let n3;
    try {
      n3 = e2();
    } catch {
      return;
    }
    return { getItem: (e3) => {
      let r3 = (e4) => e4 === null ? null : JSON.parse(e4, t2?.reviver), i3 = n3.getItem(e3) ?? null;
      return i3 instanceof Promise ? i3.then(r3) : r3(i3);
    }, setItem: (e3, r3) => n3.setItem(e3, JSON.stringify(r3, t2?.replacer)), removeItem: (e3) => n3.removeItem(e3) };
  }
  var Hn = (e2) => (t2) => {
    try {
      let n3 = e2(t2);
      return n3 instanceof Promise ? n3 : { then(e3) {
        return Hn(e3)(n3);
      }, catch(e3) {
        return this;
      } };
    } catch (e3) {
      return { then(e4) {
        return this;
      }, catch(t3) {
        return Hn(t3)(e3);
      } };
    }
  };
  var Un = (e2, t2) => (n3, r3, i3) => {
    let a3 = { storage: Vn(() => window.localStorage), partialize: (e3) => e3, version: 0, merge: (e3, t3) => ({ ...t3, ...e3 }), ...t2 }, o3 = false, s3 = 0, c3 = /* @__PURE__ */ new Set(), l3 = /* @__PURE__ */ new Set(), u2 = a3.storage;
    if (!u2) return e2((...e3) => {
      console.warn(`[zustand persist middleware] Unable to update item '${a3.name}', the given storage is currently unavailable.`), n3(...e3);
    }, r3, i3);
    let d2 = () => {
      let e3 = a3.partialize({ ...r3() });
      return u2.setItem(a3.name, { state: e3, version: a3.version });
    }, f2 = i3.setState;
    i3.setState = (e3, t3) => (f2(e3, t3), d2());
    let p2 = e2((...e3) => (n3(...e3), d2()), r3, i3);
    i3.getInitialState = () => p2;
    let m2, h2 = () => {
      if (!u2) return;
      let e3 = ++s3;
      o3 = false, c3.forEach((e4) => e4(r3() ?? p2));
      let t3 = a3.onRehydrateStorage?.call(a3, r3() ?? p2) || void 0;
      return Hn(u2.getItem.bind(u2))(a3.name).then((e4) => {
        if (e4) if (typeof e4.version == `number` && e4.version !== a3.version) {
          if (a3.migrate) {
            let t4 = a3.migrate(e4.state, e4.version);
            return t4 instanceof Promise ? t4.then((e5) => [true, e5]) : [true, t4];
          }
          console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
        } else return [false, e4.state];
        return [false, void 0];
      }).then((t4) => {
        if (e3 !== s3) return;
        let [i4, o4] = t4;
        if (m2 = a3.merge(o4, r3() ?? p2), n3(m2, true), i4) return d2();
      }).then(() => {
        e3 === s3 && (t3?.(r3(), void 0), m2 = r3(), o3 = true, l3.forEach((e4) => e4(m2)));
      }).catch((n4) => {
        e3 === s3 && t3?.(void 0, n4);
      });
    };
    return i3.persist = { setOptions: (e3) => {
      a3 = { ...a3, ...e3 }, e3.storage && (u2 = e3.storage);
    }, clearStorage: () => {
      u2?.removeItem(a3.name);
    }, getOptions: () => a3, rehydrate: () => h2(), hasHydrated: () => o3, onHydrate: (e3) => (c3.add(e3), () => {
      c3.delete(e3);
    }), onFinishHydration: (e3) => (l3.add(e3), () => {
      l3.delete(e3);
    }) }, a3.skipHydration || h2(), m2 || p2;
  };
  function Wn(e2, t2) {
    let n3 = (e3) => e3.crn ? `${e3.crn}|${e3.day}|${e3.time}` : `c|${e3.courseCode}|${e3.sectionType}|${e3.day}|${e3.time}`, r3 = e2.map((e3) => ({ ...e3 })), i3 = new Map(r3.map((e3) => [n3(e3), e3]));
    for (let e3 of t2) {
      let t3 = i3.get(n3(e3));
      if (!t3) {
        let t4 = { ...e3 };
        r3.push(t4), i3.set(n3(t4), t4);
        continue;
      }
      !t3.courseCode.includes(`-`) && e3.courseCode.includes(`-`) && (t3.courseCode = e3.courseCode), t3.instructorId ||= e3.instructorId, t3.instructorName ||= e3.instructorName, t3.building ||= e3.building, t3.room ||= e3.room, t3.courseName ||= e3.courseName, t3.dept ||= e3.dept, t3.sectionType ||= e3.sectionType, t3.capacity = Math.max(t3.capacity, e3.capacity), t3.enrolled = Math.max(t3.enrolled, e3.enrolled), t3.lectureHours = Math.max(t3.lectureHours, e3.lectureHours), t3.labHours = Math.max(t3.labHours, e3.labHours), t3.otherHours = Math.max(t3.otherHours, e3.otherHours), t3.creditHours = Math.max(t3.creditHours, e3.creditHours), (!t3.term || !/^\d/.test(t3.term) && /^\d/.test(e3.term ?? ``)) && (t3.term = e3.term);
    }
    return r3;
  }
  function Gn(e2, t2) {
    let n3 = new Set([...t2].map(lt));
    return e2.filter((e3) => n3.has(lt(e3.courseCode)) && e3.dept !== `الدراسات العامة`);
  }
  function Kn(e2) {
    return /عملي|تعاوني/.test(e2.sectionType) ? `عملي` : /نظري/.test(e2.sectionType) ? `نظري` : e2.lectureHours === 0 && (e2.labHours > 0 || e2.otherHours > 0) ? `عملي` : `نظري`;
  }
  function qn(e2) {
    return /حاسب/.test(e2.courseCode) || /حاسب|حاسوب/.test(e2.courseName) ? `حاسب` : Kn(e2) === `عملي` ? `عملي` : `نظري`;
  }
  var Jn = (e2) => e2.id || e2.name;
  var Yn = (e2) => `${e2.building}|${e2.room}`;
  function Xn(e2, t2, n3) {
    t2 && (e2.some((e3) => e3.code === t2 && e3.part === n3) || e2.push({ code: t2, part: n3 }));
  }
  function Zn(e2) {
    let t2 = /* @__PURE__ */ new Map();
    for (let n3 of e2) {
      if (!n3.room) continue;
      let e3 = Yn(n3), r3 = t2.get(e3) ?? { building: n3.building, room: n3.room, capacity: n3.capacity, type: qn(n3), courses: [] };
      r3.capacity = Math.max(r3.capacity, n3.capacity), Xn(r3.courses, n3.courseCode, Kn(n3)), t2.set(e3, r3);
    }
    return [...t2.values()].sort((e3, t3) => e3.building.localeCompare(t3.building, `ar`) || e3.room.localeCompare(t3.room, `ar`));
  }
  function Qn(e2) {
    let t2 = e2.match(/(\d{3,4})\s*-\s*(\d{3,4})/);
    if (!t2) return null;
    let n3 = t2[2].padStart(4, `0`);
    return parseInt(n3.slice(0, 2), 10) * 60 + parseInt(n3.slice(2), 10);
  }
  function $n(e2) {
    let t2 = [];
    for (let n3 of e2) {
      let e3 = Qn(n3.time);
      e3 != null && t2.push(e3);
    }
    return t2;
  }
  var er = [{ n: 1, start: `0800`, breakAfter: 0 }, { n: 2, start: `0850`, breakAfter: 5 }, { n: 3, start: `0945`, breakAfter: 0 }, { n: 4, start: `1035`, breakAfter: 5 }, { n: 5, start: `1130`, breakAfter: 0 }, { n: 6, start: `1220`, breakAfter: 5 }, { n: 7, start: `1315`, breakAfter: 0 }, { n: 8, start: `1405`, breakAfter: 5 }, { n: 9, start: `1500`, breakAfter: 0 }, { n: 10, start: `1550`, breakAfter: 0 }];
  function tr(e2) {
    let t2 = String(e2).replace(/\D/g, ``).padStart(4, `0`).slice(0, 4);
    return parseInt(t2.slice(0, 2), 10) * 60 + parseInt(t2.slice(2), 10);
  }
  function nr(e2) {
    let t2 = 1440, n3 = (e2 % t2 + t2) % t2;
    return String(Math.floor(n3 / 60)).padStart(2, `0`) + String(n3 % 60).padStart(2, `0`);
  }
  function rr(e2) {
    return e2.replace(/\D/g, ``).slice(0, 4);
  }
  function ir(e2) {
    let t2 = rr(e2).padStart(4, `0`);
    return `${t2.slice(0, 2)}:${t2.slice(2)}`;
  }
  function ar(e2, t2, n3 = 50) {
    let r3 = e2.map((e3) => ({ ...e3 }));
    if (t2 < 0 || t2 >= r3.length) return r3;
    let i3 = tr(r3[t2].start) + n3;
    for (let e3 = t2 + 1; e3 < r3.length; e3++) i3 += r3[e3 - 1].breakAfter, r3[e3].start = nr(i3), i3 += n3;
    return r3;
  }
  function or(e2, t2 = 50, n3 = 10) {
    if (!e2.length) return er.map((e3) => ({ ...e3 }));
    let r3 = [...new Set(e2.map((e3) => Math.round(e3 / 5) * 5))].sort((e3, t3) => e3 - t3), i3 = [];
    for (let e3 = 0; e3 < r3.length; e3++) if (i3.push(r3[e3]), e3 < r3.length - 1) {
      let n4 = r3[e3] + t2;
      for (; r3[e3 + 1] - n4 >= t2; ) i3.push(n4), n4 += t2;
    }
    i3.length > n3 && (i3 = i3.slice(0, n3));
    let a3 = i3.map((e3, n4) => {
      let r4 = i3[n4 + 1], a4 = r4 === void 0 ? 0 : Math.max(0, r4 - (e3 + t2));
      return { n: n4 + 1, start: nr(e3), breakAfter: a4 };
    });
    for (; a3.length < n3; ) {
      let e3 = a3[a3.length - 1];
      e3.breakAfter = e3.n % 2 == 0 ? 5 : 0;
      let n4 = tr(e3.start) + t2 + e3.breakAfter;
      a3.push({ n: e3.n + 1, start: nr(n4), breakAfter: 0 });
    }
    return a3;
  }
  var sr = (e2, t2) => t2 === `trainee` ? `${e2}::__trainee__` : e2;
  var cr = (e2, t2) => [.../* @__PURE__ */ new Set([...e2 ?? [], t2])];
  var lr = (e2, t2) => (e2 ?? []).filter((e3) => e3 !== t2);
  var ur = (e2) => ({ meetings: e2?.meetings ?? 1, ...e2?.meetingHours ? { meetingHours: [...e2.meetingHours] } : {}, tracks: [...e2?.tracks ?? []], sectionList: (e2?.sectionList ?? []).map((e3) => ({ ref: e3.ref ?? ``, tracks: [...e3.tracks ?? []], meetingSlots: (e3.meetingSlots ?? []).map((e4) => [...e4]), meetings: e3.meetings, canceled: e3.canceled, importedSlots: e3.importedSlots?.map((e4) => [...e4]), importedMeetings: e3.importedMeetings, conflict: e3.conflict, importStatus: e3.importStatus, importNote: e3.importNote })) });
  var dr = (e2, t2) => e2.schedulingModeSession[t2] ?? e2.schedulingMode[t2] ?? `tracks`;
  var fr = (e2, t2) => sr(t2, dr(e2, t2));
  var pr = (e2, t2) => {
    let n3 = fr(e2, t2), r3 = n3 !== t2, i3 = { tt: e2.timetable[n3] ?? {}, tso: r3 ? e2.traineeSectionOverride[t2] ?? {} : void 0, gts: r3 ? e2.generalTraineeSection[t2] ?? {} : void 0 };
    return { ttPast: { ...e2.ttPast, [n3]: [...e2.ttPast[n3] ?? [], i3].slice(-50) }, ttFuture: { ...e2.ttFuture, [n3]: [] } };
  };
  var mr = (e2, t2) => Object.keys(e2.generalTraineeSection[t2] ?? {}).length ? { generalAssignStale: { ...e2.generalAssignStale, [t2]: true } } : {};
  var hr = (e2, t2) => {
    for (; e2.length <= t2; ) e2.push({ ref: ``, tracks: [], meetingSlots: [] });
  };
  var gr = `matrix-census`;
  var _r = 250;
  var vr = null;
  var yr = null;
  function br() {
    if (vr &&= (clearTimeout(vr), null), yr) {
      let e2 = yr;
      yr = null, e2();
    }
  }
  var xr = () => typeof localStorage > `u` ? null : localStorage;
  function Sr() {
    return { getItem: (e2) => {
      let t2 = xr()?.getItem(e2);
      return t2 ? JSON.parse(t2) : null;
    }, setItem: (e2, t2) => {
      yr = () => xr()?.setItem(e2, JSON.stringify(t2)), vr && clearTimeout(vr), vr = setTimeout(br, _r);
    }, removeItem: (e2) => {
      vr &&= (clearTimeout(vr), null), yr = null, xr()?.removeItem(e2);
    } };
  }
  typeof window < `u` && typeof window.addEventListener == `function` && window.addEventListener(`pagehide`, br);
  var Cr = () => ({ ss01FileName: null, ss01Rows: [], censusTab: `periods`, assignMode: `trainers`, periods: er.map((e2) => ({ ...e2 })), periodsSource: `default`, hiddenPeriods: [], trainerHours: {}, trainerOffSlots: {}, roomOffSlots: {}, removedTrainers: {}, addedTrainers: {}, removedRooms: {}, addedRooms: {}, roomOverrides: {}, assignments: {}, roomAssignEnabled: false, roomAssignments: {}, roomMaxHours: {}, levelTracks: {}, mergeView: false, schedulingMode: {}, schedulingModeSession: {}, traineeSectionOverride: {}, generalTraineeSection: {}, generalAssignStale: {}, generalLock: {}, bundleSection: {}, traineeSubgroup: {}, sgPast: {}, sgFuture: {}, timetable: {}, tapAttempts: {}, tapReports: {}, tapPinned: {}, ttPast: {}, ttFuture: {}, insertedCourses: {}, trackLabels: {}, roomPartOverride: {}, ttSelectedCourse: {}, generalSections: {}, generalConfig: {}, generalRefPool: {}, importSs01FileName: null, importSs01Rows: [], importSf01FileName: null, importSf01Reg: {}, trainerIdOverrides: {} });
  var wr = rt()(Un((e2) => ({ ...Cr(), resetAll: () => e2(Cr()), loadSs01: (t2, n3) => e2((e3) => e3.periodsSource === `manual` ? { ss01FileName: t2, ss01Rows: n3 } : { ss01FileName: t2, ss01Rows: n3, periods: or($n(n3)), periodsSource: `ss01` }), clearSs01: () => e2({ ss01FileName: null, ss01Rows: [] }), mergeSs01: (t2, n3) => e2((e3) => {
    let r3 = e3.ss01Rows.length ? Wn(e3.ss01Rows, n3) : n3, i3 = new Set((e3.ss01FileName ?? ``).split(` + `).filter(Boolean));
    i3.add(t2);
    let a3 = [...i3].join(` + `);
    return e3.periodsSource === `manual` ? { ss01FileName: a3, ss01Rows: r3 } : { ss01FileName: a3, ss01Rows: r3, periods: or($n(r3)), periodsSource: `ss01` };
  }), setTrainerIdOverride: (t2, n3) => e2((e3) => {
    let r3 = { ...e3.trainerIdOverrides }, i3 = n3.trim();
    return i3 ? r3[t2] = i3 : delete r3[t2], { trainerIdOverrides: r3 };
  }), setCensusTab: (t2) => e2({ censusTab: t2 }), setAssignMode: (t2) => e2({ assignMode: t2 }), adjustPeriodStart: (t2, n3) => e2((e3) => {
    let r3 = e3.periods.findIndex((e4) => e4.n === t2);
    if (r3 < 0) return {};
    let i3 = tr(e3.periods[r3].start) + n3;
    if (i3 = Math.max(0, Math.min(1435, i3)), r3 > 0) {
      let t3 = tr(e3.periods[r3 - 1].start) + 50;
      i3 < t3 && (i3 = t3);
    }
    return { periods: ar(e3.periods.map((e4, t3) => t3 === r3 ? { ...e4, start: nr(i3) } : e4), r3), periodsSource: `manual` };
  }), setPeriodBreak: (t2, n3) => e2((e3) => {
    let r3 = e3.periods.findIndex((e4) => e4.n === t2);
    return r3 < 0 ? {} : { periods: ar(e3.periods.map((e4, t3) => t3 === r3 ? { ...e4, breakAfter: n3 } : e4), r3), periodsSource: `manual` };
  }), resetPeriods: () => e2({ periods: er.map((e3) => ({ ...e3 })), periodsSource: `default` }), inferPeriodsFromSs01: () => e2((e3) => ({ periods: or($n(e3.ss01Rows)), periodsSource: `ss01` })), toggleHiddenPeriod: (t2) => e2((e3) => ({ hiddenPeriods: e3.hiddenPeriods.includes(t2) ? e3.hiddenPeriods.filter((e4) => e4 !== t2) : [...e3.hiddenPeriods, t2].sort((e4, t3) => e4 - t3) })), showAllPeriods: () => e2({ hiddenPeriods: [] }), setTrainerHours: (t2, n3, r3) => e2((e3) => ({ trainerHours: { ...e3.trainerHours, [t2]: { ...e3.trainerHours[t2] ?? {}, [n3]: r3 } } })), toggleTrainerOff: (t2, n3) => e2((e3) => {
    let r3 = e3.trainerOffSlots[t2] ?? [], i3 = r3.includes(n3) ? r3.filter((e4) => e4 !== n3) : [...r3, n3].sort((e4, t3) => e4 - t3), a3 = { ...e3.trainerOffSlots };
    return i3.length ? a3[t2] = i3 : delete a3[t2], { trainerOffSlots: a3 };
  }), clearTrainerOff: (t2) => e2((e3) => {
    if (!e3.trainerOffSlots[t2]) return {};
    let n3 = { ...e3.trainerOffSlots };
    return delete n3[t2], { trainerOffSlots: n3 };
  }), setTrainerOffMany: (t2, n3, r3) => e2((e3) => {
    let i3 = new Set(e3.trainerOffSlots[t2] ?? []);
    r3 ? n3.forEach((e4) => i3.add(e4)) : n3.forEach((e4) => i3.delete(e4));
    let a3 = [...i3].sort((e4, t3) => e4 - t3), o3 = { ...e3.trainerOffSlots };
    return a3.length ? o3[t2] = a3 : delete o3[t2], { trainerOffSlots: o3 };
  }), copyTrainerOff: (t2, n3) => e2((e3) => {
    let r3 = e3.trainerOffSlots[t2] ?? [], i3 = { ...e3.trainerOffSlots };
    return n3.forEach((e4) => {
      e4 !== t2 && (r3.length ? i3[e4] = [...r3] : delete i3[e4]);
    }), { trainerOffSlots: i3 };
  }), toggleRoomOff: (t2, n3) => e2((e3) => {
    let r3 = e3.roomOffSlots[t2] ?? [], i3 = r3.includes(n3) ? r3.filter((e4) => e4 !== n3) : [...r3, n3].sort((e4, t3) => e4 - t3), a3 = { ...e3.roomOffSlots };
    return i3.length ? a3[t2] = i3 : delete a3[t2], { roomOffSlots: a3 };
  }), clearRoomOff: (t2) => e2((e3) => {
    if (!e3.roomOffSlots[t2]) return {};
    let n3 = { ...e3.roomOffSlots };
    return delete n3[t2], { roomOffSlots: n3 };
  }), setRoomOffMany: (t2, n3, r3) => e2((e3) => {
    let i3 = new Set(e3.roomOffSlots[t2] ?? []);
    r3 ? n3.forEach((e4) => i3.add(e4)) : n3.forEach((e4) => i3.delete(e4));
    let a3 = [...i3].sort((e4, t3) => e4 - t3), o3 = { ...e3.roomOffSlots };
    return a3.length ? o3[t2] = a3 : delete o3[t2], { roomOffSlots: o3 };
  }), removeTrainer: (t2, n3) => e2((e3) => ({ removedTrainers: { ...e3.removedTrainers, [t2]: cr(e3.removedTrainers[t2], n3) }, addedTrainers: { ...e3.addedTrainers, [t2]: (e3.addedTrainers[t2] ?? []).filter((e4) => (e4.id || e4.name) !== n3) } })), addTrainer: (t2, n3) => e2((e3) => ({ addedTrainers: { ...e3.addedTrainers, [t2]: [...e3.addedTrainers[t2] ?? [], n3] }, removedTrainers: { ...e3.removedTrainers, [t2]: lr(e3.removedTrainers[t2], n3.id || n3.name) } })), removeRoom: (t2, n3) => e2((e3) => ({ removedRooms: { ...e3.removedRooms, [t2]: cr(e3.removedRooms[t2], n3) }, addedRooms: { ...e3.addedRooms, [t2]: (e3.addedRooms[t2] ?? []).filter((e4) => `${e4.building}|${e4.room}` !== n3) } })), addRoom: (t2, n3) => e2((e3) => ({ addedRooms: { ...e3.addedRooms, [t2]: [...e3.addedRooms[t2] ?? [], n3] }, removedRooms: { ...e3.removedRooms, [t2]: lr(e3.removedRooms[t2], `${n3.building}|${n3.room}`) } })), updateRoom: (t2, n3, r3) => e2((e3) => {
    let i3 = e3.addedRooms[t2] ?? [], a3 = i3.findIndex((e4) => `${e4.building}|${e4.room}` === n3);
    if (a3 >= 0) {
      let n4 = i3.slice();
      return n4[a3] = { ...n4[a3], ...r3 }, { addedRooms: { ...e3.addedRooms, [t2]: n4 } };
    }
    return { roomOverrides: { ...e3.roomOverrides, [t2]: { ...e3.roomOverrides[t2] ?? {}, [n3]: { ...e3.roomOverrides[t2]?.[n3] ?? {}, ...r3 } } } };
  }), setAssignment: (t2, n3, r3, i3) => e2((e3) => {
    let a3 = { ...e3.assignments[t2] ?? {} }, o3 = { ...a3[n3] ?? {} };
    return o3[r3] = Math.max(0, i3), a3[n3] = o3, { assignments: { ...e3.assignments, [t2]: a3 } };
  }), setRoomAssignEnabled: (t2) => e2({ roomAssignEnabled: t2 }), setRoomAssignment: (t2, n3, r3, i3) => e2((e3) => {
    let a3 = { ...e3.roomAssignments[t2] ?? {} }, o3 = { ...a3[n3] ?? {} };
    return o3[r3] = Math.max(0, i3), a3[n3] = o3, { roomAssignments: { ...e3.roomAssignments, [t2]: a3 } };
  }), setRoomMaxHours: (t2, n3, r3) => e2((e3) => ({ roomMaxHours: { ...e3.roomMaxHours, [t2]: { ...e3.roomMaxHours[t2] ?? {}, [n3]: Math.max(0, r3) } } })), setLevelTracks: (t2, n3, r3) => e2((e3) => ({ levelTracks: { ...e3.levelTracks, [t2]: { ...e3.levelTracks[t2] ?? {}, [n3]: Math.max(1, Math.floor(r3)) } } })), setSchedulingMode: (t2, n3) => e2((e3) => ({ schedulingMode: { ...e3.schedulingMode, [t2]: n3 } })), setMergeView: (t2) => e2({ mergeView: t2 }), setSchedulingModeSession: (t2, n3) => e2((e3) => {
    let r3 = { ...e3.schedulingModeSession };
    return n3 == null ? delete r3[t2] : r3[t2] = n3, { schedulingModeSession: r3 };
  }), setTraineeSection: (t2, n3, r3, i3, a3) => e2((e3) => {
    let o3 = `${n3}|${r3}`, s3 = { ...e3.traineeSectionOverride[t2] ?? {} }, c3 = { ...s3[o3] ?? {} };
    return a3 == null ? delete c3[i3] : c3[i3] = a3, Object.keys(c3).length ? s3[o3] = c3 : delete s3[o3], { traineeSectionOverride: { ...e3.traineeSectionOverride, [t2]: s3 }, ...pr(e3, t2) };
  }), setTraineeSectionsBulk: (t2, n3, r3, i3, a3) => e2((e3) => {
    if (!i3.length) return {};
    let o3 = `${n3}|${r3}`, s3 = { ...e3.traineeSectionOverride[t2] ?? {} }, c3 = { ...s3[o3] ?? {} };
    return i3.forEach((e4) => {
      a3 == null ? delete c3[e4] : c3[e4] = a3;
    }), Object.keys(c3).length ? s3[o3] = c3 : delete s3[o3], { traineeSectionOverride: { ...e3.traineeSectionOverride, [t2]: s3 }, ...pr(e3, t2) };
  }), applyTraineeSectionMap: (t2, n3, r3) => e2((e3) => {
    let i3 = { ...e3.traineeSectionOverride[t2] ?? {} };
    return Object.keys(r3).forEach((e4) => {
      let t3 = r3[e4];
      if (!t3) return;
      let a3 = `${n3}|${e4}`, o3 = { ...i3[a3] ?? {} };
      Object.entries(t3).forEach(([e5, t4]) => {
        o3[e5] = t4;
      }), Object.keys(o3).length ? i3[a3] = o3 : delete i3[a3];
    }), { traineeSectionOverride: { ...e3.traineeSectionOverride, [t2]: i3 }, ...pr(e3, t2) };
  }), setGeneralTraineeSection: (t2, n3, r3, i3) => e2((e3) => {
    let a3 = { ...e3.generalTraineeSection[t2] ?? {} }, o3 = { ...a3[n3] ?? {} };
    return i3 == null ? delete o3[r3] : o3[r3] = i3, Object.keys(o3).length ? a3[n3] = o3 : delete a3[n3], { generalTraineeSection: { ...e3.generalTraineeSection, [t2]: a3 }, ...pr(e3, t2) };
  }), setGeneralTraineeSectionsForCourse: (t2, n3, r3, i3) => e2((e3) => {
    if (!r3.length) return {};
    let a3 = { ...e3.generalTraineeSection[t2] ?? {} }, o3 = { ...a3[n3] ?? {} };
    return r3.forEach((e4) => {
      i3 == null ? delete o3[e4] : o3[e4] = i3;
    }), Object.keys(o3).length ? a3[n3] = o3 : delete a3[n3], { generalTraineeSection: { ...e3.generalTraineeSection, [t2]: a3 }, ...pr(e3, t2) };
  }), toggleGeneralLock: (t2, n3, r3, i3) => e2((e3) => {
    if (!r3.length) return {};
    let a3 = { ...e3.generalLock[t2] ?? {} }, o3 = new Set(a3[n3] ?? []);
    return r3.forEach((e4) => {
      i3 ? o3.add(e4) : o3.delete(e4);
    }), o3.size ? a3[n3] = [...o3] : delete a3[n3], { generalLock: { ...e3.generalLock, [t2]: a3 } };
  }), resetGeneralTraineeSections: (t2) => e2((e3) => {
    if (!Object.keys(e3.generalTraineeSection[t2] ?? {}).length) return {};
    let n3 = pr(e3, t2), r3 = { ...e3.generalTraineeSection };
    return delete r3[t2], { generalTraineeSection: r3, ...n3 };
  }), setGeneralTraineeSectionsBulk: (t2, n3) => e2((e3) => {
    let r3 = pr(e3, t2);
    return { generalTraineeSection: { ...e3.generalTraineeSection, [t2]: n3 }, generalAssignStale: { ...e3.generalAssignStale, [t2]: false }, ...r3 };
  }), setBundleSection: (t2, n3, r3, i3, a3) => e2((e3) => {
    let o3 = `${n3}|${r3}`, s3 = { ...e3.bundleSection[t2] ?? {} }, c3 = { ...s3[o3] ?? {} };
    return a3 == null ? delete c3[i3] : c3[i3] = a3, Object.keys(c3).length ? s3[o3] = c3 : delete s3[o3], { bundleSection: { ...e3.bundleSection, [t2]: s3 } };
  }), setTraineeSubgroups: (t2, n3) => e2((e3) => {
    let r3 = e3.traineeSubgroup[t2] ?? {}, i3 = { ...r3 };
    for (let [e4, t3] of Object.entries(n3)) t3 == null || t3 === `` ? delete i3[e4] : i3[e4] = t3;
    return { traineeSubgroup: { ...e3.traineeSubgroup, [t2]: i3 }, sgPast: { ...e3.sgPast, [t2]: [...e3.sgPast[t2] ?? [], r3].slice(-50) }, sgFuture: { ...e3.sgFuture, [t2]: [] } };
  }), clearTraineeSubgroups: (t2) => e2((e3) => {
    let n3 = e3.traineeSubgroup[t2];
    if (!n3 || !Object.keys(n3).length) return {};
    let r3 = { ...e3.traineeSubgroup };
    return delete r3[t2], { traineeSubgroup: r3, sgPast: { ...e3.sgPast, [t2]: [...e3.sgPast[t2] ?? [], n3].slice(-50) }, sgFuture: { ...e3.sgFuture, [t2]: [] } };
  }), undoSubgroups: (t2) => e2((e3) => {
    let n3 = e3.sgPast[t2] ?? [];
    if (!n3.length) return {};
    let r3 = n3[n3.length - 1], i3 = e3.traineeSubgroup[t2] ?? {};
    return { traineeSubgroup: { ...e3.traineeSubgroup, [t2]: r3 }, sgPast: { ...e3.sgPast, [t2]: n3.slice(0, -1) }, sgFuture: { ...e3.sgFuture, [t2]: [...e3.sgFuture[t2] ?? [], i3] } };
  }), redoSubgroups: (t2) => e2((e3) => {
    let n3 = e3.sgFuture[t2] ?? [];
    if (!n3.length) return {};
    let r3 = n3[n3.length - 1], i3 = e3.traineeSubgroup[t2] ?? {};
    return { traineeSubgroup: { ...e3.traineeSubgroup, [t2]: r3 }, sgFuture: { ...e3.sgFuture, [t2]: n3.slice(0, -1) }, sgPast: { ...e3.sgPast, [t2]: [...e3.sgPast[t2] ?? [], i3] } };
  }), setTtPlacement: (t2, n3, r3) => e2((e3) => {
    let i3 = fr(e3, t2), a3 = { ...e3.timetable[i3] ?? {} };
    return r3 ? a3[n3] = r3 : delete a3[n3], { timetable: { ...e3.timetable, [i3]: a3 }, ...pr(e3, t2) };
  }), clearTtPlacements: (t2, n3) => e2((e3) => {
    let r3 = fr(e3, t2), i3 = { ...e3.timetable[r3] ?? {} };
    return n3.forEach((e4) => delete i3[e4]), { timetable: { ...e3.timetable, [r3]: i3 }, ...pr(e3, t2) };
  }), applyTtBatch: (t2, n3, r3, i3) => e2((e3) => {
    let a3 = { ...pr(e3, t2) };
    if (n3.length) {
      let r4 = { ...e3.traineeSectionOverride[t2] ?? {} };
      n3.forEach(({ code: e4, part: t3, tid: n4, section: i4 }) => {
        let a4 = `${e4}|${t3}`, o3 = { ...r4[a4] ?? {} };
        i4 == null ? delete o3[n4] : o3[n4] = i4, Object.keys(o3).length ? r4[a4] = o3 : delete r4[a4];
      }), a3.traineeSectionOverride = { ...e3.traineeSectionOverride, [t2]: r4 };
    }
    if (r3.length) {
      let n4 = { ...e3.generalTraineeSection[t2] ?? {} };
      r3.forEach(({ code: e4, tid: t3, section: r4 }) => {
        let i4 = { ...n4[e4] ?? {} };
        r4 == null ? delete i4[t3] : i4[t3] = r4, Object.keys(i4).length ? n4[e4] = i4 : delete n4[e4];
      }), a3.generalTraineeSection = { ...e3.generalTraineeSection, [t2]: n4 };
    }
    if (i3) {
      let n4 = fr(e3, t2), r4 = { ...e3.timetable[n4] ?? {} };
      i3.placement ? r4[i3.boxId] = i3.placement : delete r4[i3.boxId], a3.timetable = { ...e3.timetable, [n4]: r4 };
    }
    return a3;
  }), applyAutoPlace: (t2, n3, r3) => e2((e3) => {
    let i3 = { ...pr(e3, t2) };
    if (n3.length) {
      let r4 = { ...e3.traineeSectionOverride[t2] ?? {} };
      n3.forEach(({ code: e4, part: t3, tid: n4, section: i4 }) => {
        let a3 = `${e4}|${t3}`, o3 = { ...r4[a3] ?? {} };
        i4 == null ? delete o3[n4] : o3[n4] = i4, Object.keys(o3).length ? r4[a3] = o3 : delete r4[a3];
      }), i3.traineeSectionOverride = { ...e3.traineeSectionOverride, [t2]: r4 };
    }
    if (r3.length) {
      let n4 = fr(e3, t2), a3 = { ...e3.timetable[n4] ?? {} };
      r3.forEach((e4) => {
        a3[e4.boxId] = e4.placement;
      }), i3.timetable = { ...e3.timetable, [n4]: a3 };
    }
    return i3;
  }), applyTraineePlan: (t2, n3, r3, i3) => e2((e3) => ({ ...pr(e3, t2), timetable: { ...e3.timetable, [fr(e3, t2)]: n3 }, traineeSectionOverride: { ...e3.traineeSectionOverride, [t2]: r3 }, generalTraineeSection: { ...e3.generalTraineeSection, [t2]: i3 } })), saveTapAttempt: (t2, n3) => e2((e3) => ({ tapAttempts: { ...e3.tapAttempts, [t2]: [n3, ...e3.tapAttempts[t2] ?? []].slice(0, 10) } })), deleteTapAttempt: (t2, n3) => e2((e3) => ({ tapAttempts: { ...e3.tapAttempts, [t2]: (e3.tapAttempts[t2] ?? []).filter((e4) => e4.id !== n3) } })), setTapReport: (t2, n3, r3) => e2((e3) => ({ tapReports: { ...e3.tapReports, [t2]: { ...e3.tapReports[t2] ?? {}, [n3]: { ...r3, at: Date.now() } } } })), toggleTapPin: (t2, n3) => e2((e3) => {
    let r3 = e3.tapPinned[t2] ?? [], i3 = r3.includes(n3) ? r3.filter((e4) => e4 !== n3) : [...r3, n3];
    return { tapPinned: { ...e3.tapPinned, [t2]: i3 } };
  }), clearTapPins: (t2) => e2((e3) => ({ tapPinned: { ...e3.tapPinned, [t2]: [] } })), undoTimetable: (t2) => e2((e3) => {
    let n3 = fr(e3, t2), r3 = e3.ttPast[n3] ?? [];
    if (!r3.length) return {};
    let i3 = r3[r3.length - 1], a3 = n3 !== t2, o3 = { tt: e3.timetable[n3] ?? {}, tso: a3 ? e3.traineeSectionOverride[t2] ?? {} : void 0, gts: a3 ? e3.generalTraineeSection[t2] ?? {} : void 0 }, s3 = { timetable: { ...e3.timetable, [n3]: i3.tt }, ttPast: { ...e3.ttPast, [n3]: r3.slice(0, -1) }, ttFuture: { ...e3.ttFuture, [n3]: [...e3.ttFuture[n3] ?? [], o3] } };
    return i3.tso !== void 0 && (s3.traineeSectionOverride = { ...e3.traineeSectionOverride, [t2]: i3.tso }), i3.gts !== void 0 && (s3.generalTraineeSection = { ...e3.generalTraineeSection, [t2]: i3.gts }), s3;
  }), redoTimetable: (t2) => e2((e3) => {
    let n3 = fr(e3, t2), r3 = e3.ttFuture[n3] ?? [];
    if (!r3.length) return {};
    let i3 = r3[r3.length - 1], a3 = n3 !== t2, o3 = { tt: e3.timetable[n3] ?? {}, tso: a3 ? e3.traineeSectionOverride[t2] ?? {} : void 0, gts: a3 ? e3.generalTraineeSection[t2] ?? {} : void 0 }, s3 = { timetable: { ...e3.timetable, [n3]: i3.tt }, ttFuture: { ...e3.ttFuture, [n3]: r3.slice(0, -1) }, ttPast: { ...e3.ttPast, [n3]: [...e3.ttPast[n3] ?? [], o3] } };
    return i3.tso !== void 0 && (s3.traineeSectionOverride = { ...e3.traineeSectionOverride, [t2]: i3.tso }), i3.gts !== void 0 && (s3.generalTraineeSection = { ...e3.generalTraineeSection, [t2]: i3.gts }), s3;
  }), addInsertedCourse: (t2, n3, r3) => e2((e3) => {
    let i3 = e3.insertedCourses[t2] ?? [];
    return i3.some((e4) => e4.level === n3 && e4.code === r3) ? {} : { insertedCourses: { ...e3.insertedCourses, [t2]: [...i3, { level: n3, code: r3 }] } };
  }), removeInsertedCourse: (t2, n3, r3) => e2((e3) => ({ insertedCourses: { ...e3.insertedCourses, [t2]: (e3.insertedCourses[t2] ?? []).filter((e4) => !(e4.level === n3 && e4.code === r3)) } })), setTrackLabel: (t2, n3, r3, i3) => e2((e3) => ({ trackLabels: { ...e3.trackLabels, [t2]: { ...e3.trackLabels[t2] ?? {}, [`${n3}|${r3}`]: i3 } } })), setRoomPart: (t2, n3, r3) => e2((e3) => {
    let i3 = { ...e3.roomPartOverride[t2] ?? {} };
    return r3 ? i3[n3] = r3 : delete i3[n3], { roomPartOverride: { ...e3.roomPartOverride, [t2]: i3 } };
  }), setTtSelectedCourse: (t2, n3) => e2((e3) => ({ ttSelectedCourse: { ...e3.ttSelectedCourse, [t2]: n3 } })), addGeneralSection: (t2, n3) => e2((e3) => ({ generalSections: { ...e3.generalSections, [t2]: [...e3.generalSections[t2] ?? [], n3] } })), removeGeneralSection: (t2, n3) => e2((e3) => ({ generalSections: { ...e3.generalSections, [t2]: (e3.generalSections[t2] ?? []).filter((e4) => e4.id !== n3) } })), setGeneralMeetings: (t2, n3, r3) => e2((e3) => {
    let i3 = { ...e3.generalConfig[t2] ?? {} }, a3 = ur(i3[n3]), o3 = Math.max(1, Math.floor(r3) || 1);
    return a3.meetings = o3, o3 !== 2 && delete a3.meetingHours, a3.sectionList = a3.sectionList.map((e4) => ({ ...e4, meetingSlots: e4.meetingSlots.slice(0, e4.meetings ?? o3) })), i3[n3] = a3, { generalConfig: { ...e3.generalConfig, [t2]: i3 } };
  }), setGeneralMeetingHours: (t2, n3, r3) => e2((e3) => {
    let i3 = { ...e3.generalConfig[t2] ?? {} }, a3 = ur(i3[n3]);
    return r3 && r3.length && r3.every((e4) => e4 >= 1) ? a3.meetingHours = [...r3] : delete a3.meetingHours, i3[n3] = a3, { generalConfig: { ...e3.generalConfig, [t2]: i3 } };
  }), setGeneralTracks: (t2, n3, r3) => e2((e3) => {
    let i3 = { ...e3.generalConfig[t2] ?? {} };
    return i3[n3] = { ...ur(i3[n3]), tracks: [...r3] }, { generalConfig: { ...e3.generalConfig, [t2]: i3 } };
  }), setGeneralSectionRef: (t2, n3, r3, i3) => e2((e3) => {
    let a3 = { ...e3.generalConfig[t2] ?? {} }, o3 = ur(a3[n3]);
    return hr(o3.sectionList, r3), o3.sectionList[r3].ref = i3, a3[n3] = o3, { generalConfig: { ...e3.generalConfig, [t2]: a3 } };
  }), setGeneralSectionTracks: (t2, n3, r3, i3) => e2((e3) => {
    let a3 = { ...e3.generalConfig[t2] ?? {} }, o3 = ur(a3[n3]);
    return hr(o3.sectionList, r3), o3.sectionList[r3].tracks = [...i3], a3[n3] = o3, { generalConfig: { ...e3.generalConfig, [t2]: a3 } };
  }), setGeneralSectionTracksBulk: (t2, n3, r3) => e2((e3) => {
    let i3 = { ...e3.generalConfig[t2] ?? {} }, a3 = ur(i3[n3]);
    return r3.forEach((e4, t3) => {
      hr(a3.sectionList, t3), a3.sectionList[t3].tracks = [...e4];
    }), i3[n3] = a3, { generalConfig: { ...e3.generalConfig, [t2]: i3 } };
  }), setGeneralSectionMeetingSlot: (t2, n3, r3, i3, a3) => e2((e3) => {
    let o3 = { ...e3.generalConfig[t2] ?? {} }, s3 = ur(o3[n3]);
    hr(s3.sectionList, r3);
    let c3 = s3.sectionList[r3];
    for (; c3.meetingSlots.length <= i3; ) c3.meetingSlots.push([]);
    return c3.meetingSlots[i3] = a3 ?? [], o3[n3] = s3, { generalConfig: { ...e3.generalConfig, [t2]: o3 }, ...mr(e3, t2) };
  }), setGeneralSectionCanceled: (t2, n3, r3, i3) => e2((e3) => {
    let a3 = { ...e3.generalConfig[t2] ?? {} }, o3 = ur(a3[n3]);
    return hr(o3.sectionList, r3), o3.sectionList[r3].canceled = i3, a3[n3] = o3, { generalConfig: { ...e3.generalConfig, [t2]: a3 }, ...mr(e3, t2) };
  }), bulkSetGeneralRefs: (t2, n3, r3) => e2((e3) => {
    let i3 = { ...e3.generalConfig[t2] ?? {} }, a3 = ur(i3[n3]);
    return r3.forEach((e4, t3) => {
      hr(a3.sectionList, t3), a3.sectionList[t3].ref = e4;
    }), i3[n3] = a3, { generalConfig: { ...e3.generalConfig, [t2]: i3 } };
  }), removeGeneralSectionRow: (t2, n3, r3) => e2((e3) => {
    let i3 = { ...e3.generalConfig[t2] ?? {} }, a3 = ur(i3[n3]);
    return r3 >= 0 && r3 < a3.sectionList.length && a3.sectionList.splice(r3, 1), i3[n3] = a3, { generalConfig: { ...e3.generalConfig, [t2]: i3 }, ...mr(e3, t2) };
  }), setGeneralRefPool: (t2, n3) => e2((e3) => ({ generalRefPool: { ...e3.generalRefPool, [t2]: [...new Set(n3)] } })), replaceGeneralSections: (t2, n3) => e2((e3) => {
    let r3 = { ...e3.generalConfig[t2] ?? {} };
    return Object.entries(n3).forEach(([e4, t3]) => {
      let n4 = ur(r3[e4]);
      n4.sectionList = t3.map((e5) => ({ ref: e5.ref ?? ``, tracks: [...e5.tracks ?? []], meetingSlots: (e5.meetingSlots ?? []).map((e6) => [...e6]), meetings: e5.meetings, canceled: e5.canceled, importedSlots: e5.importedSlots?.map((e6) => [...e6]), importedMeetings: e5.importedMeetings, conflict: e5.conflict, importStatus: e5.importStatus, importNote: e5.importNote })), r3[e4] = n4;
    }), { generalConfig: { ...e3.generalConfig, [t2]: r3 }, ...mr(e3, t2) };
  }), adoptGeneralImport: (t2, n3, r3) => e2((e3) => {
    let i3 = { ...e3.generalConfig[t2] ?? {} }, a3 = ur(i3[n3]);
    hr(a3.sectionList, r3);
    let o3 = a3.sectionList[r3];
    return o3.importedSlots && (o3.meetingSlots = o3.importedSlots.map((e4) => [...e4]), o3.importedMeetings != null && (o3.meetings = o3.importedMeetings), o3.conflict = false, o3.importedSlots = void 0, o3.importedMeetings = void 0), i3[n3] = a3, { generalConfig: { ...e3.generalConfig, [t2]: i3 }, ...mr(e3, t2) };
  }), setGeneralSectionTime: (t2, n3, r3, i3, a3) => e2((e3) => {
    let o3 = { ...e3.generalConfig[t2] ?? {} }, s3 = ur(o3[n3]);
    return hr(s3.sectionList, r3), s3.sectionList[r3].meetingSlots = i3.map((e4) => [...e4]), s3.sectionList[r3].meetings = a3, o3[n3] = s3, { generalConfig: { ...e3.generalConfig, [t2]: o3 }, ...mr(e3, t2) };
  }), setImportSs01: (t2, n3) => e2({ importSs01FileName: t2, importSs01Rows: n3 }), setImportSf01: (t2, n3) => e2({ importSf01FileName: t2, importSf01Reg: n3 }), clearImportSf01: () => e2({ importSf01FileName: null, importSf01Reg: {} }) }), { name: gr, storage: Sr(), partialize: (e2) => ({ censusTab: e2.censusTab, ss01FileName: e2.ss01FileName, ss01Rows: e2.ss01Rows, periods: e2.periods, periodsSource: e2.periodsSource, hiddenPeriods: e2.hiddenPeriods, trainerHours: e2.trainerHours, trainerOffSlots: e2.trainerOffSlots, roomOffSlots: e2.roomOffSlots, removedTrainers: e2.removedTrainers, addedTrainers: e2.addedTrainers, removedRooms: e2.removedRooms, addedRooms: e2.addedRooms, roomOverrides: e2.roomOverrides, assignments: e2.assignments, roomAssignEnabled: e2.roomAssignEnabled, roomAssignments: e2.roomAssignments, roomMaxHours: e2.roomMaxHours, levelTracks: e2.levelTracks, mergeView: e2.mergeView, schedulingMode: e2.schedulingMode, traineeSectionOverride: e2.traineeSectionOverride, generalTraineeSection: e2.generalTraineeSection, generalAssignStale: e2.generalAssignStale, generalLock: e2.generalLock, bundleSection: e2.bundleSection, traineeSubgroup: e2.traineeSubgroup, timetable: e2.timetable, tapAttempts: e2.tapAttempts, tapReports: e2.tapReports, tapPinned: e2.tapPinned, insertedCourses: e2.insertedCourses, trackLabels: e2.trackLabels, roomPartOverride: e2.roomPartOverride, ttSelectedCourse: e2.ttSelectedCourse, generalSections: e2.generalSections, generalConfig: e2.generalConfig, generalRefPool: e2.generalRefPool, importSs01FileName: e2.importSs01FileName, importSs01Rows: e2.importSs01Rows, importSf01FileName: e2.importSf01FileName, importSf01Reg: e2.importSf01Reg, trainerIdOverrides: e2.trainerIdOverrides }) }));
  function Tr(e2) {
    let t2 = {};
    return Object.entries(e2).forEach(([e3, n3]) => {
      t2[e3] = {}, Object.entries(n3).forEach(([n4, r3]) => {
        t2[e3][n4] = { overrides: [...r3.overrides], removals: [...r3.removals] };
      });
    }), t2;
  }
  function Er(e2, t2) {
    let n3 = {};
    return (/* @__PURE__ */ new Set([...Object.keys(e2), ...Object.keys(t2)])).forEach((r3) => {
      n3[r3] = {}, (/* @__PURE__ */ new Set([...Object.keys(e2[r3] || {}), ...Object.keys(t2[r3] || {})])).forEach((i3) => {
        let a3 = e2[r3]?.[i3], o3 = t2[r3]?.[i3];
        n3[r3][i3] = { overrides: new Set(a3?.overrides || []), removals: new Set(a3?.removals || []), locked: o3?.locked ?? null };
      });
    }), n3;
  }
  var Dr = `matrix-dev-mode`;
  var Or = () => {
    try {
      return window.localStorage.getItem(Dr) === `1`;
    } catch {
      return false;
    }
  };
  var kr = { searchQuery: ``, registrationStatusFilter: `all`, groupView: false, matchingExpected: false, mergeWithLarger: false, hybridMerge: false, hybridMergeSpec: false, activeConflictFilter: null, courseFilters: {}, fieldFilters: {}, sortField: null, sortOrder: `asc`, sortCourseIdx: null, matchingSort: null, matchingFieldFilters: {}, groupFilterTraineeIds: null, groupFilterName: null, groupFilterPrevView: null };
  var z = rt((e2, t2) => {
    let n3 = (e3, t3, n4, r4) => {
      let i4 = { ...e3.edits[t3] || {} }, a3 = i4[n4] || { overrides: /* @__PURE__ */ new Set(), removals: /* @__PURE__ */ new Set(), locked: null };
      return i4[n4] = r4({ overrides: new Set(a3.overrides), removals: new Set(a3.removals), locked: a3.locked ? [...a3.locked] : null }), { ...e3.edits, [t3]: i4 };
    }, r3 = (e3) => {
      let t3 = [...e3.undoStack, Tr(e3.edits)];
      return t3.length > 50 && t3.shift(), { undoStack: t3, redoStack: [] };
    }, i3 = (e3, t3, n4) => {
      let r4 = e3.edits[t3]?.[n4]?.locked;
      if (r4) return r4;
      let i4 = e3.plans[t3], a3 = e3.trainees[t3]?.[n4];
      if (!i4 || !a3) return [];
      let o3 = Dt(a3, n4, e3.sf01, { approvedBarring: e3.approvedBarring, registrationPhase: e3.registrationPhase }), s3 = Vt(i4, gt(e3.trainees[t3] || {}));
      if (e3.expectedSource === `rayat` && e3.sf08) return en(s3, o3, e3.sf08[n4]);
      let c3 = Kt(a3.gpa, e3.creditCeiling, e3.maxTermCredits);
      return [...Ut(o3, i4, s3, e3.minTermCredits, c3).courses];
    };
    return { sc04Files: [], sh06Files: [], sf01File: null, plans: {}, trainees: {}, specialties: [], sf01: null, sf08File: null, sf08: null, dataLoaded: false, hydrating: true, fileManagerOpen: false, focusTransfer: false, publishedAt: null, edits: {}, undoStack: [], redoStack: [], theme: `light`, currentTab: `matrix`, currentStage: `matrix`, devMode: Or(), currentSpecialty: ``, hiddenHeaderRows: [`conflict`, `registered_sf01`, `credits`, `theory`, `practical`], hiddenHeaderColumns: [], hideGraduates: true, treatRegisteredAsCompleted: false, approvedBarring: true, minTermCredits: 12, maxTermCredits: 20, creditCeiling: { ...Gt }, expectedSource: `algorithm`, registrationPhase: `open`, ignoreSameLevelConflicts: true, conflictsSpecialtyOnly: false, freshmanCounts: {}, bundleCapacities: {}, gpaDangerThreshold: 2, gpaWarningThreshold: ot, highExpectedCreditsThreshold: 19, excludedTrainees: {}, expectedBgColor: ``, manualExpectedBgColor: ``, regOkBgColor: ``, regBadBgColor: ``, sectionDefaults: { ...an }, overCapPct: 125, courseOrderMode: `difficulty`, sectionOverrides: {}, sectionTrainers: {}, ...kr, loadData: ({ sc04Files: n4, sh06Files: r4, sf01: i4, sf08: a3 = null, preserveEdits: o3 = false }) => {
      let s3 = t2(), c3 = mt(n4.flatMap((e3) => e3.data)), l3 = ht(r4), u2 = _t(c3, l3);
      return u2.length === 0 ? false : (e2({ sc04Files: n4, sh06Files: r4, sf01File: i4, sf08File: a3, plans: c3, trainees: l3, specialties: u2, sf01: i4?.data.length ? xt(i4.data) : null, sf08: a3?.data.length ? Nt(a3.data) : null, dataLoaded: true, fileManagerOpen: false, currentSpecialty: u2.includes(s3.currentSpecialty) ? s3.currentSpecialty : u2[0], edits: o3 ? s3.edits : {}, undoStack: [], redoStack: [], ...kr }), Mn(n4, r4, i4, a3), o3 || Pn({}), R(t2()), true);
    }, setFileManagerOpen: (t3) => e2({ fileManagerOpen: t3 }), openTransferView: () => e2({ fileManagerOpen: true, focusTransfer: true }), clearFocusTransfer: () => e2({ focusTransfer: false }), hydrateFrom: ({ sc04Files: t3, sh06Files: n4, sf01File: r4, sf08File: i4, edits: a3, prefs: o3 }) => {
      if (!t3.length || !n4.length) {
        e2({ hydrating: false });
        return;
      }
      let s3 = mt(t3.flatMap((e3) => e3.data)), c3 = ht(n4), l3 = _t(s3, c3), u2 = r4?.data.length ? xt(r4.data) : null, d2 = i4?.data.length ? Nt(i4.data) : null, f2 = o3.currentSpecialty && l3.includes(o3.currentSpecialty) ? o3.currentSpecialty : l3[0] || ``;
      e2({ sc04Files: t3, sh06Files: n4, sf01File: r4, sf08File: i4, plans: s3, trainees: c3, specialties: l3, sf01: u2, sf08: d2, edits: a3, dataLoaded: l3.length > 0, hydrating: false, ...o3, sectionDefaults: { ...an, ...o3.sectionDefaults }, currentSpecialty: f2 });
    }, hydratePublished: ({ generatedAt: t3 = null, phase: n4, plans: r4, trainees: i4, specialties: a3, sf01: o3, sf08: s3, prefs: c3, edits: l3 = {} }) => {
      let u2 = c3.currentSpecialty && a3.includes(c3.currentSpecialty) ? c3.currentSpecialty : a3[0] || ``;
      e2({ sf01File: o3 ? { name: `SF01`, data: [] } : null, sf08File: s3 ? { name: `SF08`, data: [] } : null, plans: r4, trainees: i4, specialties: a3, sf01: o3, sf08: s3, edits: l3, dataLoaded: a3.length > 0, hydrating: false, publishedAt: t3, ...c3, sectionDefaults: { ...an, ...c3.sectionDefaults }, registrationPhase: n4 ?? c3.registrationPhase ?? `open`, currentSpecialty: u2 });
    }, setHydrating: (t3) => e2({ hydrating: t3 }), resetAll: async () => {
      await Rn(), wr.getState().resetAll(), wr.persist.clearStorage(), localStorage.removeItem(`export.termCode`), e2({ sc04Files: [], sh06Files: [], sf01File: null, plans: {}, trainees: {}, specialties: [], sf01: null, sf08File: null, sf08: null, dataLoaded: false, fileManagerOpen: false, edits: {}, undoStack: [], redoStack: [], currentSpecialty: ``, excludedTrainees: {}, freshmanCounts: {}, bundleCapacities: {}, gpaDangerThreshold: 2, gpaWarningThreshold: ot, hiddenHeaderRows: [`conflict`, `registered_sf01`, `credits`, `theory`, `practical`], hiddenHeaderColumns: [], expectedBgColor: ``, manualExpectedBgColor: ``, sectionDefaults: { ...an }, overCapPct: 125, courseOrderMode: `difficulty`, sectionOverrides: {}, sectionTrainers: {}, ...kr });
    }, toggleExpectation: (a3, o3) => {
      let s3 = t2(), c3 = s3.currentSpecialty, l3 = s3.trainees[c3]?.[a3], u2 = s3.plans[c3];
      if (!l3 || !u2) return `ok`;
      let d2 = Dt(l3, a3, s3.sf01, { approvedBarring: s3.approvedBarring, registrationPhase: s3.registrationPhase }).courses[o3] || `notregistered`;
      if (d2 === `completed`) return `completed`;
      if (d2 === `registered` || d2 === `current`) return `registered`;
      let f2 = i3(s3, c3, a3), p2 = n3(s3, c3, a3, (e3) => (e3.locked = e3.locked || f2, e3.overrides.has(o3) ? e3.overrides.delete(o3) : e3.removals.has(o3) ? e3.removals.delete(o3) : e3.locked.includes(o3) ? e3.removals.add(o3) : e3.overrides.add(o3), e3));
      return e2({ ...r3(s3), edits: p2 }), Nn(c3, a3, p2[c3][a3]), `ok`;
    }, toggleGroupExpectation: (a3, o3) => {
      let s3 = t2(), c3 = s3.currentSpecialty;
      if (!s3.plans[c3] || a3.length === 0) return 0;
      let l3 = s3.trainees[c3]?.[a3[0]];
      if (!l3) return 0;
      if ((Dt(l3, a3[0], s3.sf01, { approvedBarring: s3.approvedBarring, registrationPhase: s3.registrationPhase }).courses[o3] || `notregistered`) === `completed`) return -1;
      let u2 = s3.edits[c3]?.[a3[0]], d2 = `add`;
      u2?.overrides.has(o3) ? d2 = `remove-override` : u2?.removals.has(o3) ? d2 = `remove-removal` : u2?.locked?.includes(o3) && (d2 = `add-removal`);
      let f2 = s3.edits, p2 = 0, m2 = r3(s3);
      return a3.forEach((e3) => {
        let t3 = s3.trainees[c3]?.[e3];
        if (!t3 || (Dt(t3, e3, s3.sf01, { approvedBarring: s3.approvedBarring, registrationPhase: s3.registrationPhase }).courses[o3] || `notregistered`) === `completed`) return;
        let r4 = s3.edits[c3]?.[e3]?.locked ? s3.edits[c3][e3].locked : i3({ ...s3, edits: f2 }, c3, e3);
        f2 = n3({ ...s3, edits: f2 }, c3, e3, (e4) => (e4.locked = e4.locked || r4, d2 === `remove-override` ? e4.overrides.delete(o3) : d2 === `remove-removal` ? e4.removals.delete(o3) : d2 === `add-removal` || e4.locked.includes(o3) ? e4.removals.add(o3) : e4.overrides.add(o3), e4)), p2++;
      }), e2({ ...m2, edits: f2 }), Pn(f2), p2;
    }, undo: () => {
      let n4 = t2();
      if (!n4.undoStack.length) return;
      let r4 = [...n4.undoStack], i4 = r4.pop(), a3 = [...n4.redoStack, Tr(n4.edits)], o3 = Er(i4, n4.edits);
      e2({ undoStack: r4, redoStack: a3, edits: o3 }), Pn(o3);
    }, redo: () => {
      let n4 = t2();
      if (!n4.redoStack.length) return;
      let r4 = [...n4.redoStack], i4 = r4.pop(), a3 = [...n4.undoStack, Tr(n4.edits)], o3 = Er(i4, n4.edits);
      e2({ undoStack: a3, redoStack: r4, edits: o3 }), Pn(o3);
    }, setTheme: (n4) => {
      e2({ theme: n4 }), R(t2());
    }, setHiddenHeaderRows: (n4) => {
      e2({ hiddenHeaderRows: n4 }), R(t2());
    }, setTab: (n4) => {
      e2({ currentTab: n4 }), R(t2());
    }, setStage: (n4) => {
      e2({ currentStage: n4 }), R(t2());
    }, toggleDevMode: () => {
      let n4 = !t2().devMode, r4 = { devMode: n4 };
      !n4 && t2().currentStage === `schedconflicts` && (r4.currentStage = `matrix`), e2(r4);
      try {
        n4 ? window.localStorage.setItem(Dr, `1`) : window.localStorage.removeItem(Dr);
      } catch {
      }
    }, setSpecialty: (n4) => {
      e2({ currentSpecialty: n4, activeConflictFilter: null, groupFilterTraineeIds: null, groupFilterName: null, courseFilters: {}, fieldFilters: {}, sortField: null, sortCourseIdx: null }), R(t2());
    }, setSearchQuery: (t3) => e2({ searchQuery: t3 }), setRegistrationStatusFilter: (t3) => e2({ registrationStatusFilter: t3 }), setHideGraduates: (n4) => {
      e2({ hideGraduates: n4 }), R(t2());
    }, setTreatRegisteredAsCompleted: (n4) => {
      e2({ treatRegisteredAsCompleted: n4 }), R(t2());
    }, setApprovedBarring: (n4) => {
      e2({ approvedBarring: n4 }), R(t2());
    }, setMinTermCredits: (n4) => {
      e2({ minTermCredits: n4 }), R(t2());
    }, setMaxTermCredits: (n4) => {
      e2({ maxTermCredits: n4 }), R(t2());
    }, setCreditCeiling: (n4) => {
      e2({ creditCeiling: n4 }), R(t2());
    }, setGroupView: (t3) => {
      e2((e3) => ({ groupView: t3, matchingExpected: t3 ? false : e3.matchingExpected, mergeWithLarger: t3 ? false : e3.mergeWithLarger, hybridMerge: t3 ? false : e3.hybridMerge, hybridMergeSpec: t3 ? false : e3.hybridMergeSpec }));
    }, setMatchingExpected: (t3) => {
      e2((e3) => ({ matchingExpected: t3, groupView: t3 ? false : e3.groupView, mergeWithLarger: t3 ? false : e3.mergeWithLarger, hybridMerge: t3 ? false : e3.hybridMerge, hybridMergeSpec: t3 ? false : e3.hybridMergeSpec, treatRegisteredAsCompleted: t3 ? true : e3.treatRegisteredAsCompleted }));
    }, setMergeWithLarger: (t3) => {
      e2((e3) => ({ mergeWithLarger: t3, groupView: t3 ? false : e3.groupView, matchingExpected: t3 ? false : e3.matchingExpected, hybridMerge: t3 ? false : e3.hybridMerge, hybridMergeSpec: t3 ? false : e3.hybridMergeSpec, treatRegisteredAsCompleted: t3 ? true : e3.treatRegisteredAsCompleted }));
    }, setHybridMerge: (t3) => {
      e2((e3) => ({ hybridMerge: t3, groupView: t3 ? false : e3.groupView, matchingExpected: t3 ? false : e3.matchingExpected, mergeWithLarger: t3 ? false : e3.mergeWithLarger, hybridMergeSpec: t3 ? false : e3.hybridMergeSpec, treatRegisteredAsCompleted: t3 ? true : e3.treatRegisteredAsCompleted }));
    }, setHybridMergeSpec: (t3) => {
      e2((e3) => ({ hybridMergeSpec: t3, groupView: t3 ? false : e3.groupView, matchingExpected: t3 ? false : e3.matchingExpected, mergeWithLarger: t3 ? false : e3.mergeWithLarger, hybridMerge: t3 ? false : e3.hybridMerge, treatRegisteredAsCompleted: t3 ? true : e3.treatRegisteredAsCompleted }));
    }, setConflictFilter: (t3, n4) => e2({ activeConflictFilter: { course1: t3, course2: n4 }, currentTab: `matrix` }), clearConflictFilter: () => e2({ activeConflictFilter: null }), setIgnoreSameLevelConflicts: (n4) => {
      e2({ ignoreSameLevelConflicts: n4 }), R(t2());
    }, setConflictsSpecialtyOnly: (n4) => {
      e2({ conflictsSpecialtyOnly: n4 }), R(t2());
    }, setFreshmanCount: (n4, r4) => {
      e2((e3) => ({ freshmanCounts: { ...e3.freshmanCounts, [n4]: r4 } })), R(t2());
    }, setBundleCapacity: (n4, r4) => {
      e2((e3) => ({ bundleCapacities: { ...e3.bundleCapacities, [n4]: r4 } })), R(t2());
    }, setGpaDangerThreshold: (n4) => {
      e2({ gpaDangerThreshold: n4 }), R(t2());
    }, setGpaWarningThreshold: (n4) => {
      e2({ gpaWarningThreshold: n4 }), R(t2());
    }, setExpectedBgColor: (n4) => {
      e2({ expectedBgColor: n4 }), R(t2());
    }, setManualExpectedBgColor: (n4) => {
      e2({ manualExpectedBgColor: n4 }), R(t2());
    }, setHighExpectedCreditsThreshold: (n4) => {
      e2({ highExpectedCreditsThreshold: n4 }), R(t2());
    }, setSectionDefault: (n4, r4) => {
      e2((e3) => ({ sectionDefaults: { ...e3.sectionDefaults, [n4]: r4 } })), R(t2());
    }, setOverCapPct: (n4) => {
      e2({ overCapPct: Math.min(150, Math.max(100, Math.round(n4))) }), R(t2());
    }, setCourseOrderMode: (n4) => {
      e2({ courseOrderMode: n4 }), R(t2());
    }, setSectionOverride: (n4, r4, i4) => {
      e2((e3) => {
        let t3 = { ...e3.sectionOverrides[n4] || {} }, a3 = { ...t3[r4] || {}, ...i4 };
        return Object.keys(a3).forEach((e4) => {
          a3[e4] ?? delete a3[e4];
        }), Object.keys(a3).length === 0 ? delete t3[r4] : t3[r4] = a3, { sectionOverrides: { ...e3.sectionOverrides, [n4]: t3 } };
      }), R(t2());
    }, resetSectionOverrides: (n4) => {
      e2((e3) => {
        let t3 = { ...e3.sectionOverrides };
        return delete t3[n4], { sectionOverrides: t3 };
      }), R(t2());
    }, setSectionTrainers: (n4, r4, i4) => {
      e2((e3) => {
        let t3 = e3.sectionTrainers[n4] || { specialty: 0, general: 0 };
        return { sectionTrainers: { ...e3.sectionTrainers, [n4]: { ...t3, [r4]: Math.max(0, i4) } } };
      }), R(t2());
    }, setHiddenHeaderColumns: (n4) => {
      e2({ hiddenHeaderColumns: n4 }), R(t2());
    }, setExpectedSource: (n4) => {
      e2({ expectedSource: n4 }), R(t2());
    }, setRegistrationPhase: (n4) => {
      e2({ registrationPhase: n4 }), R(t2());
    }, setRegOkBgColor: (n4) => {
      e2({ regOkBgColor: n4 }), R(t2());
    }, setRegBadBgColor: (n4) => {
      e2({ regBadBgColor: n4 }), R(t2());
    }, recomputeExpected: (n4) => {
      let i4 = t2(), a3 = i4.currentSpecialty, o3 = i4.edits[a3];
      if (!o3 || Object.keys(o3).length === 0) return;
      let s3 = r3(i4);
      if (n4 === `discard`) {
        let t3 = { ...i4.edits, [a3]: {} };
        e2({ ...s3, edits: t3 }), Pn(t3);
        return;
      }
      let c3 = i4.plans[a3], l3 = i4.trainees[a3] || {}, u2 = c3 ? Vt(c3, gt(l3)) : [], d2 = {};
      Object.entries(o3).forEach(([e3, t3]) => {
        if (!t3.locked) {
          d2[e3] = t3;
          return;
        }
        let n5 = l3[e3], r4 = [];
        if (n5 && c3) {
          let t4 = Dt(n5, e3, i4.sf01, { approvedBarring: i4.approvedBarring, registrationPhase: i4.registrationPhase }), a4 = Kt(n5.gpa, i4.creditCeiling, i4.maxTermCredits);
          r4 = i4.expectedSource === `rayat` && i4.sf08 ? en(u2, t4, i4.sf08[e3]) : [...Ut(t4, c3, u2, i4.minTermCredits, a4).courses];
        }
        d2[e3] = { overrides: new Set(t3.overrides), removals: new Set(t3.removals), locked: r4 };
      });
      let f2 = { ...i4.edits, [a3]: d2 };
      e2({ ...s3, edits: f2 }), Pn(f2);
    }, setCourseFilter: (t3, n4) => e2((e3) => {
      let r4 = { ...e3.courseFilters };
      return n4 === null ? delete r4[t3] : r4[t3] = n4, { courseFilters: r4 };
    }), setFieldFilter: (t3, n4) => e2((e3) => {
      let r4 = { ...e3.fieldFilters };
      return !n4 || n4.length === 0 ? delete r4[t3] : r4[t3] = n4, { fieldFilters: r4 };
    }), setSort: (t3, n4, r4 = null) => e2({ sortField: t3, sortOrder: n4, sortCourseIdx: r4 }), setMatchingSort: (t3, n4) => e2({ matchingSort: { field: t3, order: n4 } }), setMatchingFieldFilter: (t3, n4) => e2((e3) => {
      let r4 = { ...e3.matchingFieldFilters };
      return !n4 || n4.length === 0 ? delete r4[t3] : r4[t3] = n4, { matchingFieldFilters: r4 };
    }), setGroupFilter: (t3, n4) => e2((e3) => {
      if (t3 === null) {
        let t4 = e3.groupFilterPrevView;
        return { groupFilterName: null, groupFilterTraineeIds: null, groupFilterPrevView: null, groupView: t4?.groupView ?? false, matchingExpected: t4?.matchingExpected ?? false, mergeWithLarger: t4?.mergeWithLarger ?? false, hybridMerge: t4?.hybridMerge ?? false, hybridMergeSpec: t4?.hybridMergeSpec ?? false };
      }
      return { groupFilterName: t3, groupFilterTraineeIds: n4, groupFilterPrevView: e3.groupFilterName ? e3.groupFilterPrevView : { groupView: e3.groupView, matchingExpected: e3.matchingExpected, mergeWithLarger: e3.mergeWithLarger, hybridMerge: e3.hybridMerge, hybridMergeSpec: e3.hybridMergeSpec }, groupView: false, matchingExpected: false, mergeWithLarger: false, hybridMerge: false, hybridMergeSpec: false };
    }), resetAllFilters: () => e2({ searchQuery: ``, registrationStatusFilter: `all`, courseFilters: {}, fieldFilters: {}, sortField: null, sortOrder: `asc`, sortCourseIdx: null, matchingSort: null, matchingFieldFilters: {}, activeConflictFilter: null, groupFilterTraineeIds: null, groupFilterName: null, groupFilterPrevView: null }), excludeTrainee: (n4) => {
      let r4 = t2().currentSpecialty;
      e2((e3) => {
        let t3 = e3.excludedTrainees[r4] || [];
        return t3.includes(n4) ? {} : { excludedTrainees: { ...e3.excludedTrainees, [r4]: [...t3, n4] } };
      }), R(t2());
    }, restoreTrainee: (n4) => {
      let r4 = t2().currentSpecialty;
      e2((e3) => {
        let t3 = e3.excludedTrainees[r4] || [];
        return t3.includes(n4) ? { excludedTrainees: { ...e3.excludedTrainees, [r4]: t3.filter((e4) => e4 !== n4) } } : {};
      }), R(t2());
    }, restoreAllTrainees: () => {
      let n4 = t2().currentSpecialty;
      e2((e3) => ({ excludedTrainees: { ...e3.excludedTrainees, [n4]: [] } })), R(t2());
    } };
  });
  var Ar = 1;
  var jr = rt((e2) => ({ toasts: [], show: (t2, n3 = `info`, r3, i3, a3) => {
    let o3 = Ar++;
    e2((e3) => ({ toasts: [...e3.toasts, { id: o3, message: t2, kind: n3, action: r3, action2: i3, sticky: a3 }] })), a3 || setTimeout(() => {
      e2((e3) => ({ toasts: e3.toasts.filter((e4) => e4.id !== o3) }));
    }, st);
  }, dismiss: (t2) => e2((e3) => ({ toasts: e3.toasts.filter((e4) => e4.id !== t2) })) }));
  var B = (e2, t2 = `info`, n3, r3, i3) => jr.getState().show(e2, t2, n3, r3, i3);
  var Mr = `matrix-project`;
  var Nr = 3;
  var Pr = [`export.termCode`];
  var Fr = `matrix-backup-log`;
  var Ir = 50;
  function Lr() {
    try {
      let e2 = localStorage.getItem(Fr), t2 = e2 ? JSON.parse(e2) : [];
      return Array.isArray(t2) ? t2 : [];
    } catch {
      return [];
    }
  }
  function Rr(e2) {
    try {
      let t2 = [e2, ...Lr()].slice(0, Ir);
      localStorage.setItem(Fr, JSON.stringify(t2));
    } catch {
    }
  }
  var zr = [31, 139];
  async function Br(e2) {
    let t2 = new TextEncoder().encode(e2);
    if (typeof CompressionStream > `u`) return new Blob([t2], { type: `application/octet-stream` });
    let n3 = new Blob([t2]).stream().pipeThrough(new CompressionStream(`gzip`));
    return new Response(n3).blob();
  }
  async function Vr(e2) {
    let t2 = new Uint8Array(await e2.arrayBuffer());
    if (t2.length > 2 && t2[0] === zr[0] && t2[1] === zr[1] && typeof DecompressionStream < `u`) {
      let e3 = new Blob([t2]).stream().pipeThrough(new DecompressionStream(`gzip`));
      return new Response(e3).text();
    }
    return new TextDecoder().decode(t2);
  }
  function Hr() {
    let e2 = /* @__PURE__ */ new Date(), t2 = (e3) => String(e3).padStart(2, `0`);
    return `${e2.getFullYear()}-${t2(e2.getMonth() + 1)}-${t2(e2.getDate())}-${t2(e2.getHours())}${t2(e2.getMinutes())}`;
  }
  async function Ur() {
    let [e2, t2, n3] = await Promise.all([An.files.toArray(), An.edits.toArray(), An.prefs.toArray()]);
    br();
    let r3 = typeof localStorage < `u` ? localStorage.getItem(gr) : null, i3 = {};
    typeof localStorage < `u` && Pr.forEach((e3) => {
      i3[e3] = localStorage.getItem(e3);
    });
    let a3 = { format: Mr, version: Nr, exportedAt: (/* @__PURE__ */ new Date()).toISOString(), app: `1.49`, files: e2, edits: t2, prefs: n3, census: r3, extras: i3 }, o3 = await Br(JSON.stringify(a3)), s3 = `مصفوفة-${Hr()}.matrix`;
    return Rr({ type: `export`, at: a3.exportedAt, filename: s3, app: a3.app, sizeKB: Math.round(o3.size / 1024) }), { blob: o3, filename: s3, editCount: t2.length };
  }
  async function Wr(e2) {
    let t2;
    try {
      t2 = JSON.parse(await Vr(e2));
    } catch {
      throw Error(`تعذّرت قراءة الملف — تأكد أنه ملف عمل صالح (.matrix)`);
    }
    if (t2?.format !== Mr || !Array.isArray(t2.files)) throw Error(`هذا ليس ملف عمل صالحًا لمصفوفة التسجيل والمتوقع`);
    return { archive: t2, summary: { hasFiles: t2.files.some((e3) => e3.payload?.length), editCount: Array.isArray(t2.edits) ? t2.edits.length : 0, hasCensus: typeof t2.census == `string` && t2.census.length > 0, app: t2.app || `غير معروف`, exportedAt: t2.exportedAt || `` } };
  }
  async function Gr(e2, t2) {
    await An.transaction(`rw`, An.files, An.edits, An.prefs, async () => {
      await Promise.all([An.files.clear(), An.edits.clear(), An.prefs.clear()]), e2.files?.length && await An.files.bulkPut(e2.files), e2.edits?.length && await An.edits.bulkPut(e2.edits), e2.prefs?.length && await An.prefs.bulkPut(e2.prefs);
    }), typeof localStorage < `u` && (typeof e2.census == `string` && e2.census.length > 0 ? localStorage.setItem(gr, e2.census) : localStorage.removeItem(gr), Pr.forEach((t3) => {
      let n3 = e2.extras?.[t3];
      typeof n3 == `string` && n3.length ? localStorage.setItem(t3, n3) : localStorage.removeItem(t3);
    })), Rr({ type: `import`, at: (/* @__PURE__ */ new Date()).toISOString(), filename: t2?.filename, app: e2.app, exportedAt: e2.exportedAt });
  }
  function Kr(e2, t2) {
    let n3 = URL.createObjectURL(e2), r3 = document.createElement(`a`);
    r3.href = n3, r3.download = t2, document.body.appendChild(r3), r3.click(), r3.remove(), setTimeout(() => URL.revokeObjectURL(n3), 1e3);
  }
  var qr = s2();
  var V = { toastHost: `_toastHost_1exov_3`, toast: `_toast_1exov_3`, toastIn: `_toastIn_1exov_1`, toastAction: `_toastAction_1exov_63`, toastClose: `_toastClose_1exov_99`, toast_success: `_toast_success_1exov_145`, toast_warning: `_toast_warning_1exov_155`, toast_error: `_toast_error_1exov_165`, toast_info: `_toast_info_1exov_175`, popover: `_popover_1exov_209`, popIn: `_popIn_1exov_1`, modalOverlay: `_modalOverlay_1exov_261`, fadeIn: `_fadeIn_1exov_1`, modal: `_modal_1exov_261`, modalHeader: `_modalHeader_1exov_307`, modalTitle: `_modalTitle_1exov_327`, modalActions: `_modalActions_1exov_337`, modalBody: `_modalBody_1exov_349`, modalClose: `_modalClose_1exov_359`, switchLabel: `_switchLabel_1exov_409`, switchTrack: `_switchTrack_1exov_439`, switchInput: `_switchInput_1exov_483`, switchOn: `_switchOn_1exov_511`, iconButton: `_iconButton_1exov_523`, primaryButton: `_primaryButton_1exov_569`, ghostButton: `_ghostButton_1exov_603` };
  var Jr = o(((e2) => {
    var t2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), n3 = /* @__PURE__ */ Symbol.for(`react.fragment`);
    function r3(e3, n4, r4) {
      var i3 = null;
      if (r4 !== void 0 && (i3 = `` + r4), n4.key !== void 0 && (i3 = `` + n4.key), `key` in n4) for (var a3 in r4 = {}, n4) a3 !== `key` && (r4[a3] = n4[a3]);
      else r4 = n4;
      return n4 = r4.ref, { $$typeof: t2, type: e3, key: i3, ref: n4 === void 0 ? null : n4, props: r4 };
    }
    e2.Fragment = n3, e2.jsx = r3, e2.jsxs = r3;
  }));
  var H = o(((e2, t2) => {
    t2.exports = Jr();
  }))();
  function Yr({ title: e2, actions: t2, onClose: n3, children: r3, movable: i3 = false, wide: a3 = false }) {
    let [o3, s3] = (0, u.useState)({ x: 0, y: 0 }), [c3, l3] = (0, u.useState)(false), d2 = (e3) => {
      if (!i3 || e3.target.closest(`button`)) return;
      let t3 = e3.clientX, n4 = e3.clientY, r4 = { ...o3 }, a4 = (e4) => s3({ x: r4.x + (e4.clientX - t3), y: r4.y + (e4.clientY - n4) }), c4 = () => {
        window.removeEventListener(`mousemove`, a4), window.removeEventListener(`mouseup`, c4);
      };
      window.addEventListener(`mousemove`, a4), window.addEventListener(`mouseup`, c4);
    }, f2 = i3 ? { background: `transparent`, pointerEvents: `none`, animation: `none` } : {}, p2 = { ...i3 ? { transform: `translate(${o3.x}px, ${o3.y}px)`, pointerEvents: `auto` } : {}, ...a3 ? { width: `96vw`, maxWidth: 1150 } : {} }, m2 = i3 ? { cursor: `move`, userSelect: `none` } : {};
    return (0, qr.createPortal)((0, H.jsx)(`div`, { className: V.modalOverlay, style: f2, onClick: (e3) => {
      !i3 && e3.target === e3.currentTarget && n3();
    }, children: (0, H.jsxs)(`div`, { className: V.modal, role: `dialog`, "aria-modal": !i3, style: p2, children: [(0, H.jsxs)(`div`, { className: V.modalHeader, style: m2, onMouseDown: d2, children: [(0, H.jsx)(`h3`, { className: V.modalTitle, children: e2 }), (0, H.jsxs)(`div`, { className: V.modalActions, children: [!c3 && t2, i3 && (0, H.jsx)(`button`, { className: V.modalClose, onClick: () => l3((e3) => !e3), title: c3 ? `توسيع` : `تصغير`, children: c3 ? (0, H.jsx)(_e, { size: 15 }) : (0, H.jsx)(ve, { size: 16 }) }), (0, H.jsx)(`button`, { className: V.modalClose, onClick: n3, title: `إغلاق`, children: (0, H.jsx)(Be, { size: 16 }) })] })] }), !c3 && (0, H.jsx)(`div`, { className: V.modalBody, children: r3 })] }) }), document.body);
  }
  var U = { screen: `_screen_94o3e_1`, themeToggleWrapper: `_themeToggleWrapper_94o3e_29`, header: `_header_94o3e_43`, logo: `_logo_94o3e_59`, title: `_title_94o3e_71`, subtitle: `_subtitle_94o3e_83`, manageSubtitle: `_manageSubtitle_94o3e_95`, authorLine: `_authorLine_94o3e_113`, authorName: `_authorName_94o3e_127`, telegramLink: `_telegramLink_94o3e_139`, footer: `_footer_94o3e_175`, version: `_version_94o3e_201`, zones: `_zones_94o3e_215`, zoneWrapper: `_zoneWrapper_94o3e_233`, zoneHeader: `_zoneHeader_94o3e_245`, zoneBadge: `_zoneBadge_94o3e_259`, zoneTitle: `_zoneTitle_94o3e_281`, optionalTag: `_optionalTag_94o3e_291`, dropZone: `_dropZone_94o3e_307`, dragOver: `_dragOver_94o3e_355`, hasFiles: `_hasFiles_94o3e_367`, zoneIcon: `_zoneIcon_94o3e_377`, zoneIconDone: `_zoneIconDone_94o3e_385`, zoneHint: `_zoneHint_94o3e_393`, fileList: `_fileList_94o3e_405`, fileItem: `_fileItem_94o3e_423`, fileName: `_fileName_94o3e_447`, storedTag: `_storedTag_94o3e_465`, zoneNotice: `_zoneNotice_94o3e_485`, zoneAlert: `_zoneAlert_94o3e_505`, sf01Info: `_sf01Info_94o3e_543`, sf01InfoRow: `_sf01InfoRow_94o3e_569`, ageFresh: `_ageFresh_94o3e_601`, ageWarn: `_ageWarn_94o3e_611`, ageOld: `_ageOld_94o3e_621`, clearButton: `_clearButton_94o3e_631`, clearConfirm: `_clearConfirm_94o3e_667`, backButton: `_backButton_94o3e_687`, actions: `_actions_94o3e_723`, fileRemove: `_fileRemove_94o3e_735`, startButton: `_startButton_94o3e_765`, notesContainer: `_notesContainer_94o3e_813`, note: `_note_94o3e_813`, spin: `_spin_94o3e_841`, seasonAlertCard: `_seasonAlertCard_94o3e_861`, seasonAlertTitle: `_seasonAlertTitle_94o3e_893`, seasonAlertIcon: `_seasonAlertIcon_94o3e_915`, seasonAlertTableWrapper: `_seasonAlertTableWrapper_94o3e_923`, seasonAlertTable: `_seasonAlertTable_94o3e_923`, youtubeWrapper: `_youtubeWrapper_94o3e_987`, youtubeLink: `_youtubeLink_94o3e_1001`, youtubeIcon: `_youtubeIcon_94o3e_1045`, phaseCard: `_phaseCard_94o3e_1055`, phaseCardLabel: `_phaseCardLabel_94o3e_1085`, phaseToggle: `_phaseToggle_94o3e_1097`, phaseBtn: `_phaseBtn_94o3e_1113`, phaseBtnActive: `_phaseBtnActive_94o3e_1153`, phaseBtnTitle: `_phaseBtnTitle_94o3e_1165`, phaseBtnDesc: `_phaseBtnDesc_94o3e_1185`, transferRow: `_transferRow_94o3e_1211`, transferLabel: `_transferLabel_94o3e_1227`, transferBtn: `_transferBtn_94o3e_1239`, transferFlash: `_transferFlash_94o3e_1293`, transferRowGlow: `_transferRowGlow_94o3e_1`, transferBtnFlash: `_transferBtnFlash_94o3e_1341`, transferBtnPulse: `_transferBtnPulse_94o3e_1`, ringSpin: `_ringSpin_94o3e_1` };
  var Xr = `.xlsx,.xls,.csv`;
  function Zr({ title: e2, badge: t2, description: n3, multiple: r3 = false, optional: i3 = false, files: a3, onFiles: o3, onRemove: s3, children: c3 }) {
    let l3 = (0, u.useRef)(null), [d2, f2] = (0, u.useState)(false), p2 = (e3) => {
      if (!e3?.length) return;
      let t3 = Array.from(e3);
      o3(r3 ? t3 : t3.slice(0, 1));
    }, m2 = a3.length > 0;
    return (0, H.jsxs)(`div`, { className: U.zoneWrapper, children: [(0, H.jsxs)(`div`, { className: U.zoneHeader, children: [(0, H.jsx)(`span`, { className: U.zoneBadge, children: t2 }), (0, H.jsx)(`span`, { className: U.zoneTitle, children: e2 }), i3 && (0, H.jsx)(`span`, { className: U.optionalTag, children: `اختياري` })] }), (0, H.jsxs)(`div`, { className: I(U.dropZone, d2 && U.dragOver, m2 && U.hasFiles), onClick: () => l3.current?.click(), onDragOver: (e3) => {
      e3.preventDefault(), f2(true);
    }, onDragLeave: () => f2(false), onDrop: (e3) => {
      e3.preventDefault(), f2(false), p2(e3.dataTransfer.files);
    }, role: `button`, tabIndex: 0, onKeyDown: (e3) => {
      (e3.key === `Enter` || e3.key === ` `) && l3.current?.click();
    }, children: [(0, H.jsx)(`input`, { ref: l3, type: `file`, accept: Xr, multiple: r3, hidden: true, onChange: (e3) => {
      p2(e3.target.files), e3.target.value = ``;
    } }), m2 ? (0, H.jsx)(O, { className: U.zoneIconDone, size: 28 }) : (0, H.jsx)(P, { className: U.zoneIcon, size: 28 }), (0, H.jsx)(`p`, { className: U.zoneHint, children: m2 ? r3 ? `اضغط لإضافة ملفات أخرى` : `تم الرفع — اضغط لاستبدال الملف` : n3 })] }), m2 && (0, H.jsx)(`ul`, { className: U.fileList, children: a3.map((e3, t3) => (0, H.jsxs)(`li`, { className: U.fileItem, children: [(0, H.jsx)(ce, { size: 14 }), (0, H.jsx)(`span`, { className: U.fileName, title: e3.name, children: e3.name }), e3.stored && (0, H.jsx)(`span`, { className: U.storedTag, title: `ملف محفوظ من جلسة سابقة`, children: `محفوظ` }), (0, H.jsx)(`button`, { className: U.fileRemove, onClick: (e4) => {
      e4.stopPropagation(), s3(t3);
    }, title: `إزالة الملف`, children: (0, H.jsx)(Be, { size: 13 }) })] }, `${e3.name}-${t3}`)) }), c3] });
  }
  var Qr = `التخصص`;
  var $r = `رقم المتدرب`;
  function ei(e2) {
    let t2 = JSON.stringify(e2), n3 = 5381;
    for (let e3 = 0; e3 < t2.length; e3++) n3 = (n3 << 5) + n3 + t2.charCodeAt(e3) | 0;
    return n3;
  }
  function ti(e2, t2) {
    let n3 = /* @__PURE__ */ new Set();
    return e2.forEach((e3) => {
      let r3 = e3[t2];
      r3 !== void 0 && r3 !== `` && n3.add(String(r3));
    }), n3;
  }
  var ni = (e2, t2) => ({ name: e2.name, rows: e2.data, stored: true, sig: ei(e2.data), cov: ti(e2.data, t2), mtime: e2.mtime ?? null });
  var ri = (e2) => ({ name: e2.name, stored: e2.stored });
  var ii = (e2) => ({ name: e2.name, data: e2.rows, mtime: e2.mtime ?? void 0 });
  function ai(e2, t2, n3, r3) {
    let i3 = [], a3 = [];
    for (let o3 of e2) {
      let e3 = [...o3.cov].filter((e4) => t2.cov.has(e4));
      if (e3.length === 0) {
        a3.push(o3);
        continue;
      }
      if (e3.length === o3.cov.size) {
        i3.push(`استُبدل "${o3.name}" بالكامل بالملف الأحدث "${t2.name}"`);
        continue;
      }
      let s3 = o3.rows.filter((e4) => !t2.cov.has(String(e4[n3] ?? ``)));
      a3.push({ ...o3, rows: s3, sig: ei(s3), cov: ti(s3, n3) }), i3.push(`${r3} المتداخلة (${e3.length}) اعتُمدت من "${t2.name}" وأزيلت من "${o3.name}"`);
    }
    return a3.push(t2), { list: a3, notes: i3 };
  }
  var oi = (e2) => e2.some((e3) => String(e3.القسم || ``).includes(`الدراسات العامة`));
  var si = `يلزم إعادة تنزيل تقرير SF01 مع اختيار كافة الأقسام — الملف لا يتضمن قسم الدراسات العامة ولم يُقبل`;
  var ci = 24;
  var li = 72;
  function ui(e2) {
    let t2 = Math.floor(e2 / 36e5), n3 = Math.floor(t2 / 24), r3 = t2 % 24;
    return n3 === 0 ? r3 <= 0 ? `أقل من ساعة` : `${r3} ساعة` : `${n3} يوم و${r3} ساعة`;
  }
  var di = new Intl.DateTimeFormat(`ar-SA`, { dateStyle: `medium`, timeStyle: `short` });
  function fi({ rows: e2, mtime: t2, semesterCol: n3, label: r3 }) {
    let i3 = n3 ? String(e2[0]?.[n3] || ``) || `—` : null, [a3] = (0, u.useState)(() => Date.now()), o3 = t2 ? a3 - t2 : null, s3 = o3 === null ? null : o3 / 36e5, c3 = s3 === null || s3 >= li ? U.ageOld : s3 >= ci ? U.ageWarn : U.ageFresh;
    return (0, H.jsxs)(`div`, { className: U.sf01Info, children: [r3 && (0, H.jsx)(`div`, { className: U.sf01InfoRow, children: (0, H.jsx)(`strong`, { className: U.fileName, title: r3, children: r3 }) }), i3 !== null && (0, H.jsxs)(`div`, { className: U.sf01InfoRow, children: [(0, H.jsx)(E, { size: 14 }), (0, H.jsx)(`span`, { children: `الفصل التدريبي:` }), (0, H.jsx)(`strong`, { children: i3 })] }), (0, H.jsxs)(`div`, { className: U.sf01InfoRow, children: [(0, H.jsx)(`span`, { children: `تاريخ التقرير:` }), (0, H.jsx)(`strong`, { children: t2 ? di.format(t2) : `غير معروف` })] }), (0, H.jsxs)(`div`, { className: U.sf01InfoRow, children: [(0, H.jsx)(`span`, { children: `عمر التقرير:` }), o3 === null ? (0, H.jsx)(`span`, { className: U.ageOld, children: `غير معروف — أعد رفع الملف لإظهاره` }) : (0, H.jsx)(`span`, { className: c3, children: ui(o3) })] })] });
  }
  function pi() {
    let e2 = z((e3) => e3.loadData), t2 = z((e3) => e3.dataLoaded), n3 = z((e3) => e3.setFileManagerOpen), r3 = z((e3) => e3.theme), i3 = z((e3) => e3.setTheme), a3 = z((e3) => e3.registrationPhase), o3 = z((e3) => e3.setRegistrationPhase), s3 = t2, [c3, l3] = (0, u.useState)(() => {
      let e3 = z.getState();
      return s3 ? e3.sc04Files.map((e4) => ni(e4, Qr)) : [];
    }), [d2, f2] = (0, u.useState)(() => {
      let e3 = z.getState();
      return s3 ? e3.sh06Files.map((e4) => ni(e4, $r)) : [];
    }), [p2, m2] = (0, u.useState)(() => {
      let e3 = z.getState();
      return s3 && e3.sf01File ? { name: e3.sf01File.name, rows: e3.sf01File.data, stored: true, mtime: e3.sf01File.mtime ?? null } : null;
    }), [h2, g2] = (0, u.useState)(() => {
      let e3 = z.getState();
      return s3 && e3.sf08File ? { name: e3.sf08File.name, rows: e3.sf08File.data, stored: true, mtime: e3.sf08File.mtime ?? null } : null;
    }), [_2, v2] = (0, u.useState)(false), [y2, b2] = (0, u.useState)(null), [x2, S2] = (0, u.useState)(false), w2 = (0, u.useRef)(null), [T2, E2] = (0, u.useState)(null), D2 = (0, u.useRef)(null), O2 = (0, u.useRef)(false), [k2, ee2] = (0, u.useState)(false);
    (0, u.useEffect)(() => {
      O2.current || !z.getState().focusTransfer || (O2.current = true, z.getState().clearFocusTransfer(), window.setTimeout(() => {
        D2.current?.scrollIntoView({ behavior: `smooth`, block: `center` }), ee2(true), window.setTimeout(() => ee2(false), 3200);
      }, 120));
    }, []);
    let te2 = c3.length > 0 && d2.length > 0 && !_2, ne2 = c3.length > 0 || d2.length > 0 || p2 !== null || s3, re2 = async (e3, t3, n4, r4, i4) => {
      if (!_2) {
        v2(true);
        try {
          let a4 = t3;
          for (let t4 of e3) {
            let e4 = await Ze(t4);
            if (!e4.length) {
              B(`"${t4.name}" فارغ أو غير مقروء`, `error`);
              continue;
            }
            let i5 = { name: t4.name, rows: e4, stored: false, sig: ei(e4), cov: ti(e4, n4), mtime: t4.lastModified || null }, o4 = a4.find((e5) => e5.sig === i5.sig);
            if (o4) {
              B(`"${t4.name}" مكرر — نفس محتوى "${o4.name}"، تم تجاهله`, `warning`);
              continue;
            }
            let s4 = a4.find((e5) => e5.mtime !== null && i5.mtime !== null && i5.mtime < e5.mtime && [...e5.cov].some((e6) => i5.cov.has(e6)));
            s4 && B(`انتبه: "${t4.name}" أقدم تعديلاً من "${s4.name}" الموجود`, `warning`);
            let c4 = ai(a4, i5, n4, r4);
            c4.notes.forEach((e5) => B(e5, `info`)), a4 = c4.list;
          }
          i4(a4);
        } catch (e4) {
          console.error(e4), B(`تعذرت قراءة الملفات — تأكد من الصيغة (xlsx/xls/csv)`, `error`);
        } finally {
          v2(false);
        }
      }
    }, ae2 = async (e3) => {
      if (!_2) {
        v2(true);
        try {
          let t3 = await Ze(e3);
          if (!t3.length) {
            b2(`ملف SF01 فارغ أو غير مقروء`);
            return;
          }
          if (!oi(t3)) {
            b2(si);
            return;
          }
          m2({ name: e3.name, rows: t3, stored: false, mtime: e3.lastModified || null }), b2(null);
        } catch (e4) {
          console.error(e4), b2(`تعذرت قراءة ملف SF01 — تأكد من الصيغة (xlsx/xls/csv)`);
        } finally {
          v2(false);
        }
      }
    }, A2 = async (e3) => {
      if (!_2) {
        v2(true);
        try {
          let t3 = await Ze(e3);
          if (!t3.length) {
            B(`ملف SF08 فارغ أو غير مقروء`, `error`);
            return;
          }
          g2({ name: e3.name, rows: t3, stored: false, mtime: e3.lastModified || null });
        } catch (e4) {
          console.error(e4), B(`تعذرت قراءة ملف SF08 — تأكد من الصيغة (xlsx/xls/csv)`, `error`);
        } finally {
          v2(false);
        }
      }
    }, j2 = async () => {
      if (!x2) {
        S2(true), window.setTimeout(() => S2(false), 4e3);
        return;
      }
      await z.getState().resetAll(), l3([]), f2([]), m2(null), g2(null), b2(null), S2(false), B(`تم حذف جميع الملفات والبيانات المحفوظة — يمكنك البدء من جديد`, `success`);
    }, oe2 = async () => {
      if (!_2) {
        v2(true);
        try {
          let { blob: e3, filename: t3 } = await Ur();
          Kr(e3, t3), B(`تم تصدير العمل (${(e3.size / 1048576).toFixed(e3.size >= 1048576 ? 1 : 2)} م.ب) — افتحه على الجهاز الآخر عبر \xABاستيراد العمل\xBB`, `success`);
        } catch (e3) {
          console.error(e3), B(`تعذّر تصدير العمل`, `error`);
        } finally {
          v2(false);
        }
      }
    }, se2 = async (e3) => {
      if (!(!e3 || _2)) {
        v2(true);
        try {
          let t3 = await Wr(e3);
          ne2 ? E2(t3) : await ce2(t3.archive);
        } catch (e4) {
          console.error(e4), B(e4.message || `تعذّر استيراد الملف`, `error`);
        } finally {
          v2(false);
        }
      }
    }, ce2 = async (e3) => {
      await Gr(e3), window.location.reload();
    };
    return (0, H.jsxs)(`div`, { className: U.screen, children: [(0, H.jsx)(`div`, { className: U.themeToggleWrapper, children: (0, H.jsx)(`button`, { className: V.iconButton, onClick: () => i3(r3 === `dark` ? `light` : `dark`), title: r3 === `dark` ? `الوضع الفاتح` : `الوضع الداكن`, style: { border: `1px solid var(--border)`, borderRadius: `var(--radius-full)`, background: `var(--bg-surface)` }, children: r3 === `dark` ? (0, H.jsx)(Ne, { size: 17 }) : (0, H.jsx)(be, { size: 17 }) }) }), (0, H.jsxs)(`header`, { className: U.header, children: [(0, H.jsx)(`img`, { src: `/matrix/logo.png`, alt: `شعار المؤسسة`, className: U.logo }), (0, H.jsxs)(`h1`, { className: U.title, style: { lineHeight: `1.2`, margin: 0, position: `relative` }, children: [(0, H.jsx)(`span`, { children: `مصفوفة التسجيل والمتوقع` }), (0, H.jsxs)(`span`, { style: { position: `absolute`, left: `-8px`, transform: `translateX(-100%)`, fontSize: `11px`, color: `var(--primary)`, fontWeight: 700, whiteSpace: `nowrap`, bottom: `5px`, background: `var(--primary-subtle)`, border: `1px solid var(--primary-border)`, borderRadius: `4px`, padding: `1px 5px`, lineHeight: `1` }, title: `رقم الإصدار`, children: [`v`, `1.49`.replace(/\.0$/, ``)] })] }), (0, H.jsxs)(`div`, { className: U.authorLine, children: [(0, H.jsx)(`span`, { className: U.authorName, children: `إعداد: م. محمد يوسف الشبيلي` }), (0, H.jsx)(`a`, { href: `https://t.me/AboYousef20`, target: `_blank`, rel: `noopener noreferrer`, className: U.telegramLink, title: `تلجرام`, children: (0, H.jsx)(ke, { size: 11 }) }), (0, H.jsx)(`span`, { className: U.authorName, style: { marginInlineStart: `6px` }, children: `| مشاركة: أ. منصور عبدالعزيز الفايز` })] }), (0, H.jsx)(`div`, { className: U.youtubeWrapper, children: (0, H.jsxs)(`a`, { href: `https://youtu.be/zXRZz9FLaxE`, target: `_blank`, rel: `noopener noreferrer`, className: U.youtubeLink, title: `شرح استخدام التطبيق على يوتيوب`, children: [(0, H.jsx)(`svg`, { viewBox: `0 0 24 24`, fill: `currentColor`, width: `14`, height: `14`, className: U.youtubeIcon, children: (0, H.jsx)(`path`, { d: `M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z` }) }), (0, H.jsx)(`span`, { children: `شرح استخدام التطبيق (يوتيوب)` })] }) }), s3 && (0, H.jsxs)(`p`, { className: `${U.subtitle} ${U.manageSubtitle}`, children: [`في هذه الصفحة يمكن إدارة الملفات:`, (0, H.jsx)(`br`, {}), `أضف ملفات جديدة أو استبدل/احذف القائمة ثم حدّث المصفوفة`] })] }), (0, H.jsxs)(`div`, { className: U.phaseCard, children: [(0, H.jsx)(`div`, { className: U.phaseCardLabel, children: `مرحلة العمل الحالية` }), (0, H.jsxs)(`div`, { className: U.phaseToggle, children: [(0, H.jsxs)(`button`, { type: `button`, className: I(U.phaseBtn, a3 === `during` && U.phaseBtnActive), onClick: () => o3(`during`), children: [(0, H.jsx)(`span`, { className: U.phaseBtnTitle, children: `توقع الفصل القادم` }), (0, H.jsxs)(`span`, { className: U.phaseBtnDesc, children: [`قبل ظهور النتائج: حساب المتوقّع بافتراض النجاح في المسجل الحالي`, (0, H.jsx)(`br`, {}), `بعد ظهور النتائج: اعتماد النتائج من تقرير SF01`] })] }), (0, H.jsxs)(`button`, { type: `button`, className: I(U.phaseBtn, a3 === `open` && U.phaseBtnActive), onClick: () => o3(`open`), children: [(0, H.jsx)(`span`, { className: U.phaseBtnTitle, children: `بدء التسجيل` }), (0, H.jsx)(`span`, { className: U.phaseBtnDesc, children: `متابعة التسجيل وفق المتوقع، حساب المتوقّع من المستوفى فقط` })] })] })] }), (0, H.jsxs)(`div`, { className: U.seasonAlertCard, children: [(0, H.jsxs)(`div`, { className: U.seasonAlertTitle, children: [(0, H.jsx)(Fe, { size: 16, className: U.seasonAlertIcon }), (0, H.jsx)(`span`, { children: `الفصول التدريبية للتقارير المرفوعة` })] }), (0, H.jsx)(`div`, { className: U.seasonAlertTableWrapper, children: (0, H.jsxs)(`table`, { className: U.seasonAlertTable, children: [(0, H.jsx)(`thead`, { children: (0, H.jsxs)(`tr`, { children: [(0, H.jsx)(`th`, { children: `التقرير \\ الحالة` }), (0, H.jsxs)(`th`, { children: [(0, H.jsx)(`strong`, { children: `تقرير SH06` }), (0, H.jsx)(`div`, { style: { fontSize: `10px`, fontWeight: `normal`, color: `var(--text-muted)`, marginTop: `2px` }, children: `(المقررات المستوفاة والمتبقية)` })] }), (0, H.jsxs)(`th`, { children: [(0, H.jsx)(`strong`, { children: `تقرير SF08` }), (0, H.jsx)(`div`, { style: { fontSize: `10px`, fontWeight: `normal`, color: `var(--text-muted)`, marginTop: `2px` }, children: `(التسجيل المتوقع)` })] }), (0, H.jsxs)(`th`, { children: [(0, H.jsx)(`strong`, { children: `SF01 لكافة أقسام الكلية شاملا قسم الدراسات العامة` }), (0, H.jsx)(`div`, { style: { fontSize: `10px`, fontWeight: `normal`, color: `var(--text-muted)`, marginTop: `2px` }, children: `(قائمة بالمتدربين المسجلين في شعبة)` })] })] }) }), (0, H.jsxs)(`tbody`, { children: [a3 === `during` && (0, H.jsxs)(H.Fragment, { children: [(0, H.jsxs)(`tr`, { children: [(0, H.jsx)(`td`, { children: (0, H.jsx)(`strong`, { children: `توقع الفصل القادم: قبل احتساب النتائج` }) }), (0, H.jsxs)(`td`, { children: [`الفصل الصيفي `, (0, H.jsx)(`strong`, { children: `144630` })] }), (0, H.jsxs)(`td`, { children: [`الفصل الصيفي `, (0, H.jsx)(`strong`, { children: `144630` })] }), (0, H.jsxs)(`td`, { children: [`الفصل الثاني `, (0, H.jsx)(`strong`, { children: `144620` })] })] }), (0, H.jsxs)(`tr`, { children: [(0, H.jsx)(`td`, { children: (0, H.jsx)(`strong`, { children: `توقع الفصل القادم: بعد احتساب النتائج` }) }), (0, H.jsxs)(`td`, { children: [`الفصل الصيفي `, (0, H.jsx)(`strong`, { children: `144630` })] }), (0, H.jsxs)(`td`, { children: [`الفصل الصيفي `, (0, H.jsx)(`strong`, { children: `144630` })] }), (0, H.jsxs)(`td`, { children: [`الفصل الثاني `, (0, H.jsx)(`strong`, { children: `144620` })] })] })] }), a3 === `open` && (0, H.jsxs)(`tr`, { children: [(0, H.jsx)(`td`, { children: (0, H.jsx)(`strong`, { children: `بعد بداية التسجيل` }) }), (0, H.jsxs)(`td`, { children: [`الفصل الأول `, (0, H.jsx)(`strong`, { children: `144710` }), (0, H.jsx)(`div`, { style: { fontSize: `10px`, color: `var(--brand-teal, #0d9488)`, fontWeight: `bold`, marginTop: `4px` }, children: `يحدث تلقائيا ليظهر التغير في التسجيل` })] }), (0, H.jsxs)(`td`, { children: [`الفصل الأول `, (0, H.jsx)(`strong`, { children: `144710` })] }), (0, H.jsxs)(`td`, { children: [`الفصل الثاني `, (0, H.jsx)(`strong`, { children: `144620` })] })] })] })] }) })] }), (0, H.jsxs)(`div`, { className: U.zones, children: [(0, H.jsx)(Zr, { badge: `SC04`, title: `الخطط التدريبية`, description: `يمكن إضافة عدة ملفات خطط — التخصصات المعروضة يحددها SH06`, multiple: true, files: c3.map(ri), onFiles: (e3) => void re2(e3, c3, Qr, `الخطط`, l3), onRemove: (e3) => l3((t3) => t3.filter((t4, n4) => n4 !== e3)) }), (0, H.jsx)(Zr, { badge: `SH06`, title: `المقررات المستوفاة والمتبقية للمتدرب`, description: `المرجع المعتمد للتخصصات المعروضة — يمكن إضافة عدة ملفات`, multiple: true, files: d2.map(ri), onFiles: (e3) => void re2(e3, d2, $r, `بيانات المتدربين`, f2), onRemove: (e3) => f2((t3) => t3.filter((t4, n4) => n4 !== e3)), children: d2.map((e3, t3) => (0, H.jsx)(fi, { rows: e3.rows, mtime: e3.mtime, label: d2.length > 1 ? e3.name : void 0 }, `${e3.name}-${t3}`)) }), (0, H.jsx)(Zr, { badge: `SF08`, title: `التسجيل المتوقع (رايات)`, description: `يُظهر علامة استرشادية على المقررات المتوقع تسجيلها رسمياً لكل متدرب`, files: h2 ? [ri(h2)] : [], onFiles: (e3) => void A2(e3[0]), onRemove: () => g2(null), children: h2 && (0, H.jsx)(fi, { rows: h2.rows, mtime: h2.mtime, semesterCol: `الفصل التدريبي` }) }), (0, H.jsx)(Zr, { badge: `SF01`, title: `قائمة بالمتدربين المسجلين في شعبة`, description: `تقرير الكلية كاملة — يُستخدم لحساب مسجلي التخصص في كل مقرر`, optional: true, files: p2 ? [ri(p2)] : [], onFiles: (e3) => void ae2(e3[0]), onRemove: () => m2(null), children: y2 ? (0, H.jsxs)(`div`, { className: U.zoneAlert, role: `alert`, children: [(0, H.jsx)(Fe, { size: 15 }), (0, H.jsx)(`span`, { children: y2 })] }) : p2 ? (0, H.jsx)(fi, { rows: p2.rows, mtime: p2.mtime, semesterCol: `الفصل التدريبي` }) : (0, H.jsx)(`p`, { className: U.zoneNotice, children: `عند تنزيل تقرير SF01 من النظام اختر \xABكافة الأقسام\xBB — لن يُقبل ملف لا يشمل قسم الدراسات العامة` }) })] }), (0, H.jsxs)(`div`, { className: U.actions, children: [s3 && (0, H.jsxs)(`button`, { className: U.backButton, onClick: () => n3(false), children: [(0, H.jsx)(C, { size: 16 }), (0, H.jsx)(`span`, { children: `عودة بلا تغيير` })] }), ne2 && (0, H.jsxs)(`button`, { className: `${U.clearButton} ${x2 ? U.clearConfirm : ``}`, onClick: () => void j2(), disabled: _2, title: `حذف جميع الملفات والتعديلات المحفوظة والبدء من جديد`, children: [(0, H.jsx)(Pe, { size: 16 }), (0, H.jsx)(`span`, { children: x2 ? `اضغط مجدداً للتأكيد` : `حذف الكل` })] }), (0, H.jsxs)(`button`, { className: U.startButton, disabled: !te2, onClick: () => {
      if (te2) {
        v2(true);
        try {
          let t3 = c3.map(ii).filter((e3) => e3.data.length);
          if (!t3.length) {
            B(`ملفات الخطط SC04 فارغة أو غير مقروءة`, `error`);
            return;
          }
          let n4 = d2.map(ii).filter((e3) => e3.data.length);
          if (!n4.length) {
            B(`ملفات المتدربين SH06 فارغة أو غير مقروءة`, `error`);
            return;
          }
          if (p2 && !oi(p2.rows)) {
            m2(null), b2(si);
            return;
          }
          if (!e2({ sc04Files: t3, sh06Files: n4, sf01: p2 ? ii(p2) : null, sf08: h2 ? ii(h2) : null, preserveEdits: s3 })) {
            B(`لا يوجد تخصص مشترك بين الخطط والمتدربين — تحقق من الملفات`, `error`);
            return;
          }
          let r4 = z.getState().specialties.length;
          B(s3 ? `تم تحديث البيانات — ${r4} تخصص` : `تم تحميل ${r4} تخصص بنجاح`, `success`);
        } catch (e3) {
          console.error(e3), B(`تعذرت معالجة الملفات — تأكد من الصيغة (xlsx/xls/csv)`, `error`);
        } finally {
          v2(false);
        }
      }
    }, children: [_2 ? (0, H.jsx)(he, { size: 18, className: U.spin }) : (0, H.jsx)(Ee, { size: 18 }), (0, H.jsx)(`span`, { children: _2 ? `جارٍ المعالجة…` : s3 ? `تحديث المصفوفة` : `إنشاء المصفوفة` })] })] }), (0, H.jsxs)(`div`, { ref: D2, className: I(U.transferRow, k2 && U.transferFlash), style: void 0, children: [(0, H.jsx)(`span`, { className: U.transferLabel, children: `نقل العمل لجهاز آخر:` }), (0, H.jsxs)(`button`, { type: `button`, className: I(U.transferBtn, k2 && U.transferBtnFlash), onClick: () => void oe2(), disabled: _2 || !ne2, title: `حفظ كل عملك (الملفات والتعديلات والإعدادات ومرحلة الجدولة) في ملف مضغوط لفتحه على جهاز آخر`, children: [(0, H.jsx)(ie, { size: 16 }), (0, H.jsx)(`span`, { children: `تصدير العمل` })] }), (0, H.jsxs)(`button`, { type: `button`, className: I(U.transferBtn, k2 && U.transferBtnFlash), onClick: () => w2.current?.click(), disabled: _2, title: `فتح ملف عمل مُصدَّر من جهاز آخر (سيستبدل العمل الحالي)`, children: [(0, H.jsx)(P, { size: 16 }), (0, H.jsx)(`span`, { children: `استيراد العمل` })] }), (0, H.jsx)(`input`, { ref: w2, type: `file`, accept: `.matrix,.json,.gz`, hidden: true, onChange: (e3) => {
      se2(e3.target.files?.[0]), e3.target.value = ``;
    } })] }), (0, H.jsxs)(`div`, { className: U.notesContainer, children: [(0, H.jsxs)(`p`, { className: U.note, children: [`— تُحفظ البيانات محلياً في متصفحك فقط ولا تُرسل لأي خادم`, s3 && ` (التعديلات اليدوية تبقى محفوظة بعد التحديث)`] }), (0, H.jsx)(`p`, { className: U.note, children: `— المشروع الإنتاجي (288) يُستبعد تلقائياً من الحسابات` }), (0, H.jsxs)(`p`, { className: U.note, children: [`— لأفضل تجربة وتثبيت التطبيق على سطح المكتب بأيقونته، يُفضَّل متصفّح `, (0, H.jsx)(`b`, { children: `Chrome` }), ` أو`, ` `, (0, H.jsx)(`b`, { children: `Edge` }), ` على الكمبيوتر`] })] }), (0, H.jsx)(`footer`, { className: U.footer, children: (0, H.jsxs)(`span`, { children: [`جميع الحقوق محفوظة \xA9 `, (/* @__PURE__ */ new Date()).getFullYear()] }) }), T2 && (0, H.jsxs)(Yr, { title: `استيراد العمل`, onClose: () => E2(null), children: [(0, H.jsxs)(`p`, { style: { marginBottom: `var(--sp-3)` }, children: [`سيستبدل الاستيراد `, (0, H.jsx)(`b`, { children: `عملك الحالي على هذا الجهاز` }), ` (الملفات والتعديلات والإعدادات وعمل مرحلة الجدولة) بمحتوى الملف المختار. لا يمكن التراجع بعد الاستيراد.`] }), (0, H.jsxs)(`p`, { className: U.note, style: { textAlign: `start`, marginBottom: `var(--sp-5)` }, children: [`الملف: تعديلات `, (0, H.jsx)(`b`, { children: T2.summary.editCount }), ` متدرب، أُنشئ بإصدار`, ` `, (0, H.jsx)(`b`, { children: T2.summary.app }), !T2.summary.hasFiles && ` — لا يحتوي ملفات تقارير`, T2.summary.hasCensus ? ` — يشمل عمل مرحلة الجدولة` : ` — لا يشمل عمل مرحلة الجدولة (سيُمسح الحالي)`, `.`] }), (0, H.jsxs)(`div`, { style: { display: `flex`, gap: `var(--sp-2)`, justifyContent: `flex-end` }, children: [(0, H.jsx)(`button`, { className: V.ghostButton, onClick: () => E2(null), children: `إلغاء` }), (0, H.jsx)(`button`, { className: V.primaryButton, onClick: () => void ce2(T2.archive), children: `نعم، استورد واستبدل` })] })] })] });
  }
  var mi = rt(() => ({ status: `idle`, refreshing: false }));
  function hi() {
    gi(), document.addEventListener(`visibilitychange`, () => {
      document.visibilityState === `visible` && gi();
    }), window.setInterval(() => {
      document.visibilityState === `visible` && gi();
    }, 10 * 6e4);
  }
  async function gi() {
    try {
      let e2 = await fetch(`/matrix/version.json`, { cache: `no-store` });
      if (!e2.ok) throw Error(String(e2.status));
      let t2 = await e2.json();
      if (!t2.version) throw Error(`no version`);
      mi.setState({ status: t2.version === `1.49` ? `current` : `update` });
    } catch {
      mi.setState({ status: `error` });
    }
  }
  async function _i() {
    mi.getState().refreshing || (mi.setState({ refreshing: true }), await fetch(window.location.href, { cache: `reload` }).catch(() => {
    }), window.location.reload());
  }
  function vi(e2) {
    let t2 = `تحديث التطبيق`;
    return e2 === `update` ? `${t2}
⬆ يتوفر إصدار أحدث — اضغط للتحديث` : e2 === `current` ? `${t2}
✓ أنت على آخر إصدار` : e2 === `error` ? `${t2}
(تعذّر فحص التحديثات — يعمل الزر مع ذلك)` : t2;
  }
  var W = { wrapper: `_wrapper_138b5_9`, table: `_table_138b5_23`, colSeq: `_colSeq_138b5_83`, colGroup: `_colGroup_138b5_85`, colName: `_colName_138b5_87`, colId: `_colId_138b5_89`, colRemAfter: `_colRemAfter_138b5_91`, colExpected: `_colExpected_138b5_93`, colRemaining: `_colRemaining_138b5_95`, colRegistered: `_colRegistered_138b5_97`, colGpa: `_colGpa_138b5_99`, statLabel: `_statLabel_138b5_299`, statCell: `_statCell_138b5_349`, conflictCount: `_conflictCount_138b5_365`, registeredCount: `_registeredCount_138b5_375`, sf01Count: `_sf01Count_138b5_383`, expectedCount: `_expectedCount_138b5_391`, unregisteredCount: `_unregisteredCount_138b5_401`, codeCell: `_codeCell_138b5_425`, codeCellCritical: `_codeCellCritical_138b5_435`, nameCellCritical: `_nameCellCritical_138b5_445`, nameCell: `_nameCell_138b5_445`, nameContent: `_nameContent_138b5_495`, importanceBar: `_importanceBar_138b5_523`, importanceCritical: `_importanceCritical_138b5_537`, importanceMedium: `_importanceMedium_138b5_539`, importanceShort: `_importanceShort_138b5_541`, importanceStandalone: `_importanceStandalone_138b5_543`, level1: `_level1_138b5_551`, level2: `_level2_138b5_553`, level3: `_level3_138b5_555`, level4: `_level4_138b5_557`, level5: `_level5_138b5_559`, level6: `_level6_138b5_561`, levelSep: `_levelSep_138b5_581`, colHeader: `_colHeader_138b5_591`, colHeaderActive: `_colHeaderActive_138b5_615`, traineeRow: `_traineeRow_138b5_627`, blockedName: `_blockedName_138b5_661`, excludeBtn: `_excludeBtn_138b5_671`, ctxOverlay: `_ctxOverlay_138b5_731`, ctxMenu: `_ctxMenu_138b5_743`, ctxMenuTitle: `_ctxMenuTitle_138b5_769`, ctxMenuItem: `_ctxMenuItem_138b5_793`, cell: `_cell_138b5_833`, expectedMark: `_expectedMark_138b5_859`, markAlgorithm: `_markAlgorithm_138b5_879`, markRayat: `_markRayat_138b5_893`, gradeMark: `_gradeMark_138b5_907`, gradeBarred: `_gradeBarred_138b5_931`, gradeFailed: `_gradeFailed_138b5_941`, cellAgreement: `_cellAgreement_138b5_951`, cellNoEdit: `_cellNoEdit_138b5_963`, cellCompleted: `_cellCompleted_138b5_971`, cellRegisteredAsCompleted: `_cellRegisteredAsCompleted_138b5_983`, cellRegistered: `_cellRegistered_138b5_983`, cellCurrent: `_cellCurrent_138b5_1011`, cellRegExpected: `_cellRegExpected_138b5_1033`, cellRegUnexpected: `_cellRegUnexpected_138b5_1045`, cellRegUnmet: `_cellRegUnmet_138b5_1059`, cellExpected: `_cellExpected_138b5_1071`, cellExpectedScheduled: `_cellExpectedScheduled_138b5_1085`, cellExpectedPartial: `_cellExpectedPartial_138b5_1097`, cellManualExpected: `_cellManualExpected_138b5_1115`, cellManualBlocked: `_cellManualBlocked_138b5_1127`, cellManualRemoved: `_cellManualRemoved_138b5_1139`, cellBlocked: `_cellBlocked_138b5_1147`, cellAddableConflict: `_cellAddableConflict_138b5_1171`, addableMark: `_addableMark_138b5_1183`, groupLevel1: `_groupLevel1_138b5_1209`, groupLevel2: `_groupLevel2_138b5_1211`, groupLevel3: `_groupLevel3_138b5_1213`, groupLevel4: `_groupLevel4_138b5_1215`, groupLevel5: `_groupLevel5_138b5_1217`, groupLevel6: `_groupLevel6_138b5_1219`, groupGraduate: `_groupGraduate_138b5_1221`, groupBlocked: `_groupBlocked_138b5_1223`, gpaDanger: `_gpaDanger_138b5_1245`, gpaWarning: `_gpaWarning_138b5_1255`, lowExpected: `_lowExpected_138b5_1267`, highExpected: `_highExpected_138b5_1279`, countCell: `_countCell_138b5_1291`, pctCell: `_pctCell_138b5_1311`, pct0: `_pct0_138b5_1321`, pct1: `_pct1_138b5_1323`, pct2: `_pct2_138b5_1325`, pct3: `_pct3_138b5_1327`, pct4: `_pct4_138b5_1329`, pct5: `_pct5_138b5_1331`, goldSeparator: `_goldSeparator_138b5_1335`, emptyState: `_emptyState_138b5_1351` };
  var G = { shell: `_shell_17gf4_3`, stageLayout: `_stageLayout_17gf4_19`, stageMain: `_stageMain_17gf4_33`, stageRail: `_stageRail_17gf4_71`, stageRailItem: `_stageRailItem_17gf4_95`, stageRailItemActive: `_stageRailItemActive_17gf4_137`, stageRailItemSoon: `_stageRailItemSoon_17gf4_149`, stageRailNum: `_stageRailNum_17gf4_157`, stageRailLabel: `_stageRailLabel_17gf4_191`, stageRailBadge: `_stageRailBadge_17gf4_201`, header: `_header_17gf4_221`, brand: `_brand_17gf4_243`, brandLogo: `_brandLogo_17gf4_255`, brandTitle: `_brandTitle_17gf4_265`, specialtySelect: `_specialtySelect_17gf4_277`, headerActions: `_headerActions_17gf4_301`, headerDivider: `_headerDivider_17gf4_325`, toolbar: `_toolbar_17gf4_341`, toolbarDivider: `_toolbarDivider_17gf4_369`, statusChips: `_statusChips_17gf4_383`, statusChip: `_statusChip_17gf4_383`, statusChipActive: `_statusChipActive_17gf4_437`, statusChipZero: `_statusChipZero_17gf4_453`, statusDot: `_statusDot_17gf4_461`, statusMeta: `_statusMeta_17gf4_475`, toolbarSpacer: `_toolbarSpacer_17gf4_495`, activeFiltersRow: `_activeFiltersRow_17gf4_507`, searchBox: `_searchBox_17gf4_525`, searchBoxCompact: `_searchBoxCompact_17gf4_563`, searchIcon: `_searchIcon_17gf4_611`, freshmanField: `_freshmanField_17gf4_641`, filterChip: `_filterChip_17gf4_689`, resetButton: `_resetButton_17gf4_729`, resetButtonIcon: `_resetButtonIcon_17gf4_765`, resetButtonActive: `_resetButtonActive_17gf4_789`, resetBtnPulse: `_resetBtnPulse_17gf4_1`, resetRingSpin: `_resetRingSpin_17gf4_1`, tabBar: `_tabBar_17gf4_889`, tab: `_tab_17gf4_889`, tabActive: `_tabActive_17gf4_943`, settingsGrid: `_settingsGrid_17gf4_963`, settingsField: `_settingsField_17gf4_977`, settingsHint: `_settingsHint_17gf4_1025`, settingsSection: `_settingsSection_17gf4_1039`, sourceToggle: `_sourceToggle_17gf4_1059`, sourceBtn: `_sourceBtn_17gf4_1073`, sourceBtnAlgo: `_sourceBtnAlgo_17gf4_1109`, sourceBtnRayat: `_sourceBtnRayat_17gf4_1121`, sourceDotAlgo: `_sourceDotAlgo_17gf4_1133`, sourceDotRayat: `_sourceDotRayat_17gf4_1135`, sourceSamples: `_sourceSamples_17gf4_1167`, sampleCol: `_sampleCol_17gf4_1191`, sampleLabel: `_sampleLabel_17gf4_1207`, recomputeBtn: `_recomputeBtn_17gf4_1223`, recomputeWarn: `_recomputeWarn_17gf4_1267`, recomputeRow: `_recomputeRow_17gf4_1297`, exampleBox: `_exampleBox_17gf4_1311`, exampleTitle: `_exampleTitle_17gf4_1327`, exampleRow: `_exampleRow_17gf4_1341`, exampleLabel: `_exampleLabel_17gf4_1357`, exampleCells: `_exampleCells_17gf4_1369`, exCell: `_exCell_17gf4_1383`, exPlus: `_exPlus_17gf4_1407`, exFailed: `_exFailed_17gf4_1417`, exTaken: `_exTaken_17gf4_1427`, exDropped: `_exDropped_17gf4_1437`, exNote: `_exNote_17gf4_1449`, legend: `_legend_17gf4_1463`, legendItem: `_legendItem_17gf4_1481`, legendSwatch: `_legendSwatch_17gf4_1495`, conflictInfo: `_conflictInfo_17gf4_1511`, ceilingViz: `_ceilingViz_17gf4_1527`, ceilingZones: `_ceilingZones_17gf4_1537`, floorMarker: `_floorMarker_17gf4_1555`, floorLabel: `_floorLabel_17gf4_1593`, zone: `_zone_17gf4_1611`, zoneFill: `_zoneFill_17gf4_1631`, zoneLow: `_zoneLow_17gf4_1647`, zoneMid: `_zoneMid_17gf4_1657`, zoneHigh: `_zoneHigh_17gf4_1667`, zoneUnified: `_zoneUnified_17gf4_1677`, zoneControl: `_zoneControl_17gf4_1689`, zoneUnit: `_zoneUnit_17gf4_1713`, ceilingAxis: `_ceilingAxis_17gf4_1729`, axisEnd: `_axisEnd_17gf4_1745`, axisEndMax: `_axisEndMax_17gf4_1763`, axisBoundary: `_axisBoundary_17gf4_1775`, axisLabel: `_axisLabel_17gf4_1787`, stepper: `_stepper_17gf4_1809`, stepBtn: `_stepBtn_17gf4_1831`, stepInput: `_stepInput_17gf4_1885`, infoIconBtn: `_infoIconBtn_17gf4_1917`, infoIntro: `_infoIntro_17gf4_1959`, infoCard: `_infoCard_17gf4_1973`, infoCardHead: `_infoCardHead_17gf4_1989`, infoDot: `_infoDot_17gf4_2009`, infoFn: `_infoFn_17gf4_2023`, infoBA: `_infoBA_17gf4_2037`, infoBox: `_infoBox_17gf4_2049`, infoBoxLabel: `_infoBoxLabel_17gf4_2069`, infoBefore: `_infoBefore_17gf4_2083`, infoAfter: `_infoAfter_17gf4_2099`, miniMatrix: `_miniMatrix_17gf4_2119`, miniRow: `_miniRow_17gf4_2145`, miniName: `_miniName_17gf4_2165`, miniBadge: `_miniBadge_17gf4_2179`, miniCells: `_miniCells_17gf4_2201`, miniCell: `_miniCell_17gf4_2201`, miniCellCompleted: `_miniCellCompleted_17gf4_2241`, miniCellRegistered: `_miniCellRegistered_17gf4_2253`, miniCellExpected: `_miniCellExpected_17gf4_2265`, miniCellEmpty: `_miniCellEmpty_17gf4_2277` };
  function yi({ value: e2, min: t2, max: n3, step: r3, decimals: i3, onChange: a3 }) {
    let [o3, s3] = (0, u.useState)(null);
    return (0, H.jsxs)(`div`, { className: G.stepper, children: [(0, H.jsx)(`button`, { type: `button`, className: G.stepBtn, onClick: () => a3(e2 - r3), disabled: e2 <= t2, "aria-label": `إنقاص`, children: `−` }), (0, H.jsx)(`input`, { className: G.stepInput, type: `text`, inputMode: `decimal`, value: o3 ?? e2.toFixed(i3), onChange: (e3) => s3(e3.target.value), onBlur: () => {
      if (o3 !== null) {
        let e3 = parseFloat(o3);
        Number.isFinite(e3) && a3(e3);
      }
      s3(null);
    }, onKeyDown: (e3) => {
      e3.key === `Enter` && e3.target.blur();
    } }), (0, H.jsx)(`button`, { type: `button`, className: G.stepBtn, onClick: () => a3(e2 + r3), disabled: e2 >= n3, "aria-label": `زيادة`, children: `+` })] });
  }
  function bi({ content: e2 = ``, expected: t2, agreement: n3, markAlgo: r3, markRayat: i3 }) {
    return (0, H.jsxs)(`span`, { className: I(W.cell, t2 && W.cellExpected, n3 && W.cellAgreement), style: { position: `relative`, display: `inline-grid`, placeItems: `center`, width: 28, height: 28, minWidth: 28, borderRadius: `var(--radius-sm)`, border: t2 || n3 ? void 0 : `1px solid var(--border-strong)`, fontWeight: 750, fontSize: 12, cursor: `default` }, children: [e2, r3 && (0, H.jsx)(`span`, { className: I(W.expectedMark, W.markAlgorithm) }), i3 && (0, H.jsx)(`span`, { className: I(W.expectedMark, W.markRayat) })] });
  }
  function xi({ onClose: e2 }) {
    let t2 = z((e3) => e3.minTermCredits), n3 = z((e3) => e3.setMinTermCredits), r3 = z((e3) => e3.maxTermCredits), i3 = z((e3) => e3.setMaxTermCredits), a3 = z((e3) => e3.creditCeiling), o3 = z((e3) => e3.setCreditCeiling), s3 = z((e3) => e3.expectedSource), c3 = z((e3) => e3.setExpectedSource), l3 = z((e3) => e3.registrationPhase), d2 = z((e3) => e3.setRegistrationPhase), f2 = z((e3) => e3.recomputeExpected), p2 = z((e3) => e3.sf08 !== null), m2 = z((e3) => e3.highExpectedCreditsThreshold), h2 = z((e3) => e3.setHighExpectedCreditsThreshold), [g2, _2] = (0, u.useState)(String(m2)), [v2, y2] = (0, u.useState)(false), b2 = (e3, t3) => o3(Qt(a3, e3, t3)), x2 = (e3) => Math.min(24, Math.max(12, Math.round(e3))), S2 = (e3) => Math.max(0, Math.min(100, (e3 - 8) / 16 * 100)), C2 = (0, H.jsxs)(`div`, { className: G.floorMarker, style: { bottom: `${S2(t2)}%` }, children: [(0, H.jsx)(`span`, { className: G.floorLabel, children: `الأدنى (ساعة)` }), (0, H.jsx)(yi, { value: t2, min: 12, max: 24, step: 1, decimals: 0, onChange: (e3) => n3(x2(e3)) })] }), w2 = s3 === `rayat` ? `رايات (SF08)` : `الخوارزمية`, T2 = (e3) => {
      f2(e3), B(e3 === `keep` ? `أُعيد الاحتساب مع الإبقاء على تعديلاتك اليدوية` : `أُعيد الاحتساب وأُلغيت التعديلات اليدوية`, `success`), y2(false);
    };
    return (0, H.jsxs)(Yr, { title: `الإعدادات`, onClose: e2, movable: true, children: [(0, H.jsx)(`h4`, { className: G.settingsSection, children: `حساب المتوقع — حدود ساعات الفصل` }), (0, H.jsxs)(`p`, { className: G.settingsHint, children: [`يُسجَّل المتوقع `, (0, H.jsx)(`b`, { children: `مستوىً كاملاً تلو الآخر` }), ` (مستوى كامل + ما تبقّى قبله، بلا مقررات بعده). لا يتجاوز `, (0, H.jsx)(`b`, { children: `الحد الأعلى` }), `، ولا ينزل عن `, (0, H.jsx)(`b`, { children: `الحد الأدنى` }), ` ما دام في المستوى الأعلى ما يرفعه.`] }), (0, H.jsxs)(`div`, { className: G.sourceToggle, children: [(0, H.jsx)(`button`, { type: `button`, className: I(G.sourceBtn, a3.mode === `unified` && G.sourceBtnAlgo), onClick: () => o3({ ...a3, mode: `unified` }), children: `سقف موحّد` }), (0, H.jsx)(`button`, { type: `button`, className: I(G.sourceBtn, a3.mode === `gpa` && G.sourceBtnRayat), onClick: () => o3({ ...a3, mode: `gpa` }), children: `حسب المعدل` })] }), a3.mode === `unified` ? (0, H.jsxs)(H.Fragment, { children: [(0, H.jsxs)(`p`, { className: G.settingsHint, children: [`سقف واحد لكل المتدربين (\xB1١، محصور في `, (0, H.jsx)(`b`, { children: `١٢–٢٤` }), `، الافتراضي ٢٠). الشريط الملوّن يرتفع بقيمته.`] }), (0, H.jsx)(`div`, { className: G.ceilingViz, children: (0, H.jsxs)(`div`, { className: G.ceilingZones, children: [(0, H.jsxs)(`div`, { className: G.zone, children: [(0, H.jsx)(`div`, { className: I(G.zoneFill, G.zoneUnified), style: { bottom: `${S2(t2)}%`, height: `${S2(r3) - S2(t2)}%` } }), (0, H.jsx)(`div`, { className: G.zoneControl, style: { bottom: `${S2(r3)}%` }, children: (0, H.jsxs)(`div`, { style: { display: `flex`, alignItems: `center`, gap: `6px` }, children: [(0, H.jsx)(`span`, { className: G.floorLabel, children: `الأقصى (ساعة)` }), (0, H.jsx)(yi, { value: r3, min: 12, max: 24, step: 1, decimals: 0, onChange: (e3) => i3(x2(e3)) })] }) })] }), C2] }) }), (0, H.jsxs)(`p`, { className: G.settingsHint, children: [(0, H.jsx)(`b`, { children: `يُطبَّق فوراً` }), ` على المصفوفة. الشريط الأعلى والخط الأدنى يحدّان نافذة التسجيل.`] })] }) : (0, H.jsxs)(H.Fragment, { children: [(0, H.jsxs)(`p`, { className: G.settingsHint, children: [`ثلاث شرائح حسب المعدل. غيّر السقف (ساعة، \xB1١) والفواصل (المعدل، \xB1٠.١) بالكتابة أو بالأسهم — القيم محصورة في `, (0, H.jsx)(`b`, { children: `١٢–٢٤` }), `، ولا يقلّ سقف شريحةٍ عن سابقتها.`] }), (() => {
      let e3 = [{ field: `lowCap`, cap: a3.lowCap, min: 12, max: a3.midCap, cls: G.zoneLow }, { field: `midCap`, cap: a3.midCap, min: a3.lowCap, max: a3.highCap, cls: G.zoneMid }, { field: `highCap`, cap: a3.highCap, min: a3.midCap, max: 24, cls: G.zoneHigh }];
      return (0, H.jsxs)(`div`, { className: G.ceilingViz, children: [(0, H.jsxs)(`div`, { className: G.ceilingZones, children: [e3.map((e4) => (0, H.jsxs)(`div`, { className: G.zone, children: [(0, H.jsx)(`div`, { className: I(G.zoneFill, e4.cls), style: { bottom: `${S2(t2)}%`, height: `${S2(e4.cap) - S2(t2)}%` } }), (0, H.jsxs)(`div`, { className: G.zoneControl, style: { bottom: `${S2(e4.cap)}%` }, children: [(0, H.jsx)(yi, { value: e4.cap, min: e4.min, max: e4.max, step: 1, decimals: 0, onChange: (t3) => b2(e4.field, t3) }), (0, H.jsx)(`span`, { className: G.zoneUnit, children: `ساعة` })] })] }, e4.field)), C2] }), (0, H.jsxs)(`div`, { className: G.ceilingAxis, children: [(0, H.jsx)(`span`, { className: G.axisEnd, children: `0.0` }), (0, H.jsx)(`span`, { className: I(G.axisEnd, G.axisEndMax), children: `5.0` }), (0, H.jsx)(`div`, { className: G.axisBoundary, style: { left: `33.33%` }, children: (0, H.jsx)(yi, { value: a3.lowBoundary, min: 0.1, max: a3.highBoundary - 0.1, step: 0.1, decimals: 1, onChange: (e4) => b2(`lowBoundary`, e4) }) }), (0, H.jsx)(`div`, { className: G.axisBoundary, style: { left: `66.67%` }, children: (0, H.jsx)(yi, { value: a3.highBoundary, min: a3.lowBoundary + 0.1, max: 5, step: 0.1, decimals: 1, onChange: (e4) => b2(`highBoundary`, e4) }) }), (0, H.jsx)(`span`, { className: G.axisLabel, children: `المعدل` })] })] });
    })(), (0, H.jsxs)(`p`, { className: G.settingsHint, children: [(0, H.jsx)(`b`, { children: `يُطبَّق فوراً` }), ` على المصفوفة. الأدنى ١٢ يظل أرضيةً لكل الشرائح.`] })] }), (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(`h4`, { className: G.settingsSection, children: `مرحلة التسجيل` }), (0, H.jsxs)(`div`, { className: G.sourceToggle, children: [(0, H.jsx)(`button`, { type: `button`, className: I(G.sourceBtn, l3 === `during` && G.sourceBtnAlgo), onClick: () => d2(`during`), children: `توقع الفصل القادم` }), (0, H.jsx)(`button`, { type: `button`, className: I(G.sourceBtn, l3 === `open` && G.sourceBtnRayat), onClick: () => d2(`open`), children: `بدء التسجيل` })] }), (0, H.jsxs)(`p`, { className: G.settingsHint, children: [(0, H.jsx)(`b`, { children: `بدء التسجيل:` }), ` متابعة التسجيل وفق المتوقع، حساب المتوقّع من المستوفى فقط.`, (0, H.jsx)(`br`, {}), (0, H.jsx)(`b`, { children: `توقع الفصل القادم:` }), ` قبل ظهور النتائج (حساب المتوقّع بافتراض النجاح في المسجل الحالي)، بعد ظهور النتائج (اعتماد النتائج من تقرير SF01).`] })] }), (0, H.jsx)(`h4`, { className: G.settingsSection, children: `مصدر المتوقع` }), (0, H.jsxs)(`div`, { className: G.sourceToggle, children: [(0, H.jsxs)(`button`, { type: `button`, className: I(G.sourceBtn, s3 === `algorithm` && G.sourceBtnAlgo), onClick: () => c3(`algorithm`), children: [(0, H.jsx)(`span`, { className: G.sourceDotAlgo }), `الخوارزمية`] }), (0, H.jsxs)(`button`, { type: `button`, className: I(G.sourceBtn, s3 === `rayat` && G.sourceBtnRayat), onClick: () => c3(`rayat`), disabled: !p2, title: p2 ? void 0 : `ارفع تقرير SF08 أولاً`, children: [(0, H.jsx)(`span`, { className: G.sourceDotRayat }), `رايات (SF08)`] })] }), (0, H.jsxs)(`div`, { className: G.sourceSamples, children: [(0, H.jsxs)(`div`, { className: G.sampleCol, children: [s3 === `algorithm` ? (0, H.jsx)(bi, { content: `1`, expected: true }) : (0, H.jsx)(bi, { markAlgo: true }), (0, H.jsx)(`span`, { className: G.sampleLabel, children: `الخوارزمية` })] }), (0, H.jsxs)(`div`, { className: G.sampleCol, children: [s3 === `rayat` ? (0, H.jsx)(bi, { content: `1`, expected: true }) : (0, H.jsx)(bi, { markRayat: true }), (0, H.jsx)(`span`, { className: G.sampleLabel, children: `رايات (SF08)` })] }), (0, H.jsxs)(`div`, { className: G.sampleCol, children: [(0, H.jsx)(bi, { content: `1`, agreement: true }), (0, H.jsx)(`span`, { className: G.sampleLabel, children: `توافق المصدرين` })] }), (0, H.jsxs)(`div`, { className: G.sampleCol, children: [(0, H.jsx)(bi, { markAlgo: true, markRayat: true }), (0, H.jsx)(`span`, { className: G.sampleLabel, children: `مشترك أُزيل \xAB1\xBB` })] })] }), (0, H.jsxs)(`p`, { className: G.settingsHint, children: [`المصدر المختار يضع `, (0, H.jsx)(`b`, { children: `\xAB1\xBB` }), ` في المصفوفة، والمصدر الآخر يظهر `, (0, H.jsx)(`b`, { children: `مثلثاً` }), ` استرشادياً، وعند`, (0, H.jsx)(`b`, { children: ` توافق المصدرين` }), ` تكون الخلية زرقاء غامقة بخط أبيض.`, !p2 && ` (ارفع تقرير SF08 من شاشة الملفات لتفعيل المقارنة والعلامات.)`] }), v2 ? (0, H.jsxs)(`div`, { className: G.recomputeWarn, children: [(0, H.jsxs)(`p`, { children: [`سيُعاد حساب \xAB1\xBB لجميع المتدربين وفق المصدر \xAB`, (0, H.jsx)(`b`, { children: w2 }), `\xBB. كيف نتعامل مع تعديلاتك اليدوية (إضافة/إزالة \xAB1\xBB)؟`] }), (0, H.jsxs)(`div`, { className: G.recomputeRow, children: [(0, H.jsx)(`button`, { className: V.primaryButton, onClick: () => T2(`keep`), children: `الإبقاء على التعديلات اليدوية` }), (0, H.jsx)(`button`, { className: V.ghostButton, onClick: () => T2(`discard`), children: `تجاهل التعديلات اليدوية` }), (0, H.jsx)(`button`, { className: V.ghostButton, onClick: () => y2(false), children: `إلغاء` })] })] }) : (0, H.jsx)(`button`, { type: `button`, className: G.recomputeBtn, onClick: () => y2(true), children: `↻ إعادة احتساب المصفوفة` }), (0, H.jsx)(`h4`, { className: G.settingsSection, children: `تنبيه الساعات المعتمدة` }), (0, H.jsxs)(`div`, { className: G.settingsGrid, children: [(0, H.jsxs)(`label`, { className: G.settingsField, title: `تلوين خلايا الساعات المتوقعة التي تقلّ عن الحد الأدنى لساعات الفصل — تتبع \xABالأدنى (ساعة)\xBB في مخطط الحدود أعلاه تلقائيًّا (مصدر واحد للتلوين والتصنيف)`, children: [(0, H.jsx)(`span`, { children: `تنبيه الساعات المنخفضة (أقل من)` }), (0, H.jsx)(`input`, { type: `number`, value: t2, disabled: true, title: `يتبع الحد الأدنى لساعات الفصل — عدّله من مخطط الحدود أعلاه` })] }), (0, H.jsxs)(`label`, { className: G.settingsField, title: `تلوين خلايا الساعات المتوقعة التي تزيد عن هذه القيمة بلون تنبيه (أحمر)`, children: [(0, H.jsx)(`span`, { children: `تنبيه الساعات المرتفعة (أكثر من)` }), (0, H.jsx)(`input`, { type: `number`, min: 12, max: 30, value: g2, onChange: (e3) => _2(e3.target.value) })] })] }), (0, H.jsxs)(`p`, { className: G.settingsHint, children: [`أقل من `, (0, H.jsx)(`b`, { children: `المنخفضة` }), ` ← أصفر، وأكثر من `, (0, H.jsx)(`b`, { children: `المرتفعة` }), ` ← أحمر، وما بينهما بلا تلوين.`] }), (0, H.jsxs)(`div`, { style: { display: `flex`, gap: `var(--sp-2)`, justifyContent: `flex-end` }, children: [(0, H.jsx)(`button`, { className: V.ghostButton, onClick: e2, children: `إلغاء` }), (0, H.jsx)(`button`, { className: V.primaryButton, onClick: () => {
      h2(parseInt(g2) || 19), B(`تم حفظ الإعدادات`, `success`), e2();
    }, children: `حفظ` })] })] });
  }
  var Si = [{ id: `matrix`, label: `مصفوفة المتوقع`, icon: de }];
  function Ci() {
    let e2 = z((e3) => e3.currentTab), t2 = z((e3) => e3.setTab), n3 = z((e3) => e3.registrationPhase);
    return (0, H.jsx)(`nav`, { className: G.tabBar, role: `tablist`, children: Si.map(({ id: r3, label: i3, icon: a3 }) => {
      let o3 = r3 === `matrix` && n3 === `open` ? `مصفوفة التسجيل والمتوقع` : i3;
      return (0, H.jsxs)(`button`, { role: `tab`, "aria-selected": e2 === r3, className: I(G.tab, e2 === r3 && G.tabActive), onClick: () => t2(r3), children: [(0, H.jsx)(a3, { size: 15 }), (0, H.jsx)(`span`, { children: o3 })] }, r3);
    }) });
  }
  function wi(e2, t2, n3, r3, i3) {
    return e2 === 1 ? t2 : e2 === 2 ? n3 : e2 >= 3 && e2 <= 10 ? `${e2} ${r3}` : `${e2} ${i3}`;
  }
  function Ti(e2) {
    if (!e2) return null;
    let t2 = new Date(e2).getTime();
    if (Number.isNaN(t2)) return null;
    let n3 = Math.max(0, Date.now() - t2), r3 = 6e4, i3 = 60 * r3, a3 = 24 * i3;
    if (n3 < r3) return `منذ لحظات`;
    let o3 = Math.floor(n3 / a3);
    n3 -= o3 * a3;
    let s3 = Math.floor(n3 / i3);
    n3 -= s3 * i3;
    let c3 = Math.floor(n3 / r3), l3 = [];
    return o3 > 0 && l3.push(wi(o3, `يوم`, `يومين`, `أيام`, `يومًا`)), s3 > 0 && l3.push(wi(s3, `ساعة`, `ساعتين`, `ساعات`, `ساعة`)), c3 > 0 && o3 === 0 && l3.push(wi(c3, `دقيقة`, `دقيقتين`, `دقائق`, `دقيقة`)), `منذ ` + l3.slice(0, 2).join(` و`);
  }
  function Ei({ onExportExcel: e2, onExportPdf: t2 }) {
    let n3 = z((e3) => e3.specialties), r3 = z((e3) => e3.currentSpecialty), i3 = z((e3) => e3.setSpecialty), a3 = z((e3) => e3.theme), o3 = z((e3) => e3.setTheme), s3 = z((e3) => e3.undoStack), c3 = z((e3) => e3.redoStack), l3 = z((e3) => e3.undo), d2 = z((e3) => e3.redo), f2 = z((e3) => e3.resetAll), p2 = z((e3) => e3.setFileManagerOpen), m2 = z((e3) => e3.openTransferView), h2 = z((e3) => e3.publishedAt), g2 = z((e3) => e3.recomputeExpected), _2 = z((e3) => e3.edits), [v2, y2] = (0, u.useState)(false), [b2, x2] = (0, u.useState)(false), [S2, C2] = (0, u.useState)(false);
    Object.keys(_2[r3] || {}).length;
    let [, w2] = (0, u.useState)(0);
    (0, u.useEffect)(() => {
    }, [h2]);
    let [T2, E2] = (0, u.useState)(null);
    (0, u.useEffect)(() => {
    }, []);
    let D2 = T2 ? Ti(T2) : null, O2 = mi((e3) => e3.status), k2 = mi((e3) => e3.refreshing);
    return (0, H.jsxs)(`header`, { className: G.header, children: [(0, H.jsxs)(`div`, { className: G.brand, style: { marginInlineEnd: `35px` }, children: [(0, H.jsx)(`img`, { src: `/matrix/logo.png`, alt: `الشعار`, className: G.brandLogo }), (0, H.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, alignItems: `center` }, children: [(0, H.jsxs)(`h1`, { className: G.brandTitle, style: { lineHeight: `1.2`, margin: 0, position: `relative` }, children: [(0, H.jsx)(`span`, { children: `مصفوفة التسجيل والمتوقع` }), (0, H.jsxs)(`button`, { type: `button`, onClick: () => void _i(), disabled: k2, style: { position: `absolute`, left: `-8px`, top: `50%`, transform: `translate(-100%, -50%)`, display: `inline-flex`, flexDirection: `column`, alignItems: `center`, gap: `3px`, fontSize: `10px`, color: `var(--primary)`, fontWeight: 700, whiteSpace: `nowrap`, background: `var(--primary-subtle)`, border: `1px solid var(--primary-border)`, borderRadius: `4px`, padding: `1px 5px`, lineHeight: `1`, cursor: k2 ? `wait` : `pointer` }, title: `رقم الإصدار — ${vi(O2)}`, children: [(0, H.jsx)(Te, { size: 10, style: k2 ? { animation: `spin 1s linear infinite` } : void 0, "aria-hidden": true }), `v`, `1.49`.replace(/\.0$/, ``), O2 === `update` && (0, H.jsx)(`span`, { style: { position: `absolute`, top: `-3px`, left: `-3px`, width: `7px`, height: `7px`, borderRadius: `50%`, background: `var(--danger)`, border: `1px solid var(--bg-surface)` }, "aria-label": `يتوفر إصدار أحدث` })] })] }), (0, H.jsx)(`span`, { style: { fontSize: `9.5px`, color: `var(--text-muted)`, fontWeight: 600, marginTop: `4px` }, children: `م. محمد يوسف الشبيلي | أ. منصور عبدالعزيز الفايز` }), null, D2 && (0, H.jsxs)(`span`, { style: { fontSize: `9.5px`, color: `var(--success, #1b6b3a)`, fontWeight: 600, marginTop: `2px`, cursor: `help` }, title: `المشغّل راجع نظام رايات في هذا الوقت ووجد البيانات كما هي — ثبات \xABآخر تحديث\xBB يعني استقرار البيانات لا توقّف المنظومة`, children: [`✓ آخر تحقق من رايات: `, D2] })] })] }), (0, H.jsx)(`select`, { className: G.specialtySelect, value: r3, onChange: (e3) => i3(e3.target.value), title: `التخصص الحالي (يظهر في القائمة التخصصات من تقارير SH06 فقط)`, children: n3.map((e3) => (0, H.jsx)(`option`, { value: e3, children: e3 }, e3)) }), (0, H.jsx)(Ci, {}), (0, H.jsxs)(`div`, { className: G.headerActions, children: [(0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(`button`, { className: V.iconButton, onClick: () => p2(true), title: `إدارة الملفات: إضافة أو استبدال أو حذف ملفات دون فقدان البيانات`, children: (0, H.jsx)(le, { size: 17 }) }), (0, H.jsx)(`span`, { className: G.headerDivider })] }), (0, H.jsx)(`button`, { className: V.iconButton, disabled: !s3.length, onClick: l3, title: `تراجع (Ctrl+Z)`, children: (0, H.jsx)(Ie, { size: 17 }) }), (0, H.jsx)(`button`, { className: V.iconButton, disabled: !c3.length, onClick: d2, title: `إعادة (Ctrl+Y)`, children: (0, H.jsx)(we, { size: 17 }) }), (0, H.jsx)(`span`, { className: G.headerDivider }), (0, H.jsx)(`button`, { className: V.iconButton, "data-guide": `matrix-export-excel`, onClick: e2, title: `تصدير Excel`, children: (0, H.jsx)(ce, { size: 17 }) }), (0, H.jsx)(`button`, { className: V.iconButton, onClick: t2, title: `تصدير PDF (طباعة)`, children: (0, H.jsx)(j, { size: 17 }) }), false, (0, H.jsx)(`span`, { className: G.headerDivider }), (0, H.jsx)(`button`, { className: V.iconButton, onClick: () => C2(true), title: `الإعدادات`, children: (0, H.jsx)(je, { size: 17 }) }), (0, H.jsx)(`button`, { className: V.iconButton, onClick: () => o3(a3 === `dark` ? `light` : `dark`), title: a3 === `dark` ? `الوضع الفاتح` : `الوضع الداكن`, children: a3 === `dark` ? (0, H.jsx)(Ne, { size: 17 }) : (0, H.jsx)(be, { size: 17 }) }), (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(`button`, { className: V.iconButton, onClick: () => {
      m2();
    }, title: `نسخة احتياطية / نقل العمل لجهاز آخر: حفظ كل عملك في ملف واحد واسترداده متى شئت`, children: (0, H.jsx)(ye, { size: 17 }) }), (0, H.jsx)(`button`, { className: V.iconButton, onClick: () => y2(true), title: `مسح البيانات والبدء من جديد`, children: (0, H.jsx)(Pe, { size: 17 }) })] })] }), v2 && (0, H.jsxs)(Yr, { title: `مسح جميع البيانات`, onClose: () => y2(false), children: [(0, H.jsx)(`p`, { style: { marginBottom: `var(--sp-5)` }, children: `سيتم حذف الملفات المحملة وكل التعديلات اليدوية المحفوظة نهائياً. هل أنت متأكد؟` }), (0, H.jsxs)(`div`, { style: { display: `flex`, gap: `var(--sp-2)`, justifyContent: `flex-end` }, children: [(0, H.jsx)(`button`, { className: V.ghostButton, onClick: () => y2(false), children: `إلغاء` }), (0, H.jsx)(`button`, { className: V.primaryButton, style: { background: `var(--danger)` }, onClick: () => {
      f2().then(() => B(`تم مسح جميع البيانات`, `success`));
    }, children: `نعم، امسح الكل` })] })] }), b2 && (0, H.jsxs)(Yr, { title: `استعادة المصفوفة الافتراضية`, onClose: () => x2(false), children: [(0, H.jsx)(`p`, { style: { marginBottom: `var(--sp-5)` }, children: `ستُمسح تعديلاتك اليدوية على مصفوفة هذا التخصص وتعود إلى الحساب الافتراضي. هذا يخصّك وحدك ولا يؤثّر على غيرك. (يمكن التراجع بـ Ctrl+Z قبل تحديث الصفحة.)` }), (0, H.jsxs)(`div`, { style: { display: `flex`, gap: `var(--sp-2)`, justifyContent: `flex-end` }, children: [(0, H.jsx)(`button`, { className: V.ghostButton, onClick: () => x2(false), children: `إلغاء` }), (0, H.jsx)(`button`, { className: V.primaryButton, onClick: () => {
      g2(`discard`), x2(false), B(`استُعيدت المصفوفة الافتراضية`, `success`);
    }, children: `نعم، استعِد الافتراضي` })] })] }), S2 && (0, H.jsx)(xi, { onClose: () => C2(false) })] });
  }
  function Di() {
    let e2 = z((e3) => e3.plans), t2 = z((e3) => e3.trainees), n3 = z((e3) => e3.edits), r3 = z((e3) => e3.currentSpecialty), i3 = z((e3) => e3.minTermCredits), a3 = z((e3) => e3.maxTermCredits), o3 = z((e3) => e3.creditCeiling), s3 = z((e3) => e3.expectedSource), c3 = z((e3) => e3.sf08), l3 = z((e3) => e3.sf01), d2 = z((e3) => e3.approvedBarring), f2 = z((e3) => e3.excludedTrainees), p2 = z((e3) => e3.registrationPhase);
    return (0, u.useMemo)(() => {
      let u2 = e2[r3], m2 = t2[r3];
      if (!u2 || !m2) return null;
      let h2 = f2[r3], g2 = Et(h2?.length ? Object.fromEntries(Object.entries(m2).filter(([e3]) => !h2.includes(e3))) : m2, l3, { approvedBarring: d2, registrationPhase: p2 }), _2 = n3[r3] || {};
      return { model: tn({ plan: u2, trainees: g2, edits: _2, freshmanCount: 0, minTermCredits: i3, maxTermCredits: a3, creditCeiling: o3, expectedSource: s3, sf08: c3, registrationPhase: p2 }), plan: u2, trainees: g2, specialtyEdits: _2, specialty: r3 };
    }, [e2, t2, n3, r3, i3, a3, o3, s3, c3, l3, d2, f2, p2]);
  }
  function K(e2, t2, n3 = null) {
    let { sortedCourses: r3, courseTraineesMap: i3 } = e2, a3 = r3.filter((e3) => i3[e3.code] && i3[e3.code].size > 0 && !n3?.has(e3.code)), o3 = {};
    a3.forEach((e3) => {
      o3[e3.code] = {};
      let t3 = i3[e3.code];
      a3.forEach((n4) => {
        if (e3.code === n4.code) o3[e3.code][n4.code] = -1;
        else {
          let r4 = i3[n4.code], a4 = 0;
          for (let e4 of t3) r4.has(e4) && a4++;
          o3[e3.code][n4.code] = a4;
        }
      });
    });
    let s3 = a3.filter((e3) => a3.some((n4) => e3.code === n4.code || t2 && e3.semester === n4.semester ? false : o3[e3.code][n4.code] > 0)), c3 = {};
    return s3.forEach((e3) => {
      let t3 = 0;
      s3.forEach((n4) => {
        e3.code !== n4.code && e3.semester !== n4.semester && o3[e3.code][n4.code] > 0 && t3++;
      }), c3[e3.code] = t3;
    }), { courses: s3, matrix: o3, headerCounts: c3 };
  }
  function Oi(e2, t2) {
    return e2 === -1 ? `self` : t2 ? `same-level` : e2 === 0 ? `0` : e2 <= 5 ? `1` : e2 <= 10 ? `2` : `3`;
  }
  function ki({ label: e2, checked: t2, onChange: n3, title: r3 }) {
    return (0, H.jsxs)(`label`, { className: I(V.switchLabel, t2 && V.switchOn), title: r3, children: [(0, H.jsx)(`input`, { type: `checkbox`, className: V.switchInput, checked: t2, onChange: (e3) => n3(e3.target.checked) }), (0, H.jsx)(`span`, { className: V.switchTrack }), (0, H.jsx)(`span`, { children: e2 })] });
  }
  function Ai(e2, t2, n3) {
    let r3 = n3.prerequisites[e2] || [];
    return r3.length === 0 ? false : !r3.every((e3) => {
      let n4 = t2.courses[e3];
      return n4 === `completed` || n4 === `registered` || n4 === `current`;
    });
  }
  function ji(e2, t2, n3, r3, i3, a3, o3 = i3) {
    if (e2 === 0) return { group: `✓`, groupClass: `group-graduate` };
    if (t2.length === 0) return { group: `متعسر`, groupClass: `group-blocked` };
    let s3 = [...new Set(t2.map((e3) => r3.coursesData[e3]?.semester).filter((e3) => !!e3))].sort((e3, t3) => e3 - t3), c3 = e2 - n3, l3 = s3.length > 1, u2 = s3.includes(5);
    return s3.length === 1 ? { group: String(s3[0]), groupClass: `group-level-${s3[0]}` } : u2 ? { group: `تدريب+`, groupClass: `group-level-5` } : l3 && a3 === 0 && c3 === o3 ? { group: `خريج`, groupClass: `group-graduate` } : l3 && a3 === 1 && c3 > i3 && c3 <= i3 + 4 ? { group: `خريج-`, groupClass: `group-graduate` } : { group: s3.join(`-`), groupClass: `group-level-${s3[0]}` };
  }
  function Mi(e2) {
    return e2 === `✓` ? `متوقع تخرجه` : e2 === `متعسر` ? `لا يوجد مقررات متوقعة لأن المتطلبات السابقة غير مستوفاة` : e2 === `تدريب+` ? `متوقع التدريب + مقرر واحد` : e2 === `خريج` ? `بعد المتوقع: يتبقى له التدريب فقط` : e2 === `خريج-` ? `بعد المتوقع: يتبقى له التدريب ومقرر بقيمة 4 ساعات أو أقل` : e2.includes(`-`) ? `المستويات: ${e2}` : `مستوى ${e2} فقط`;
  }
  function Ni({ traineeId: e2, trainee: t2, model: n3, plan: r3, edits: i3, treatRegisteredAsCompleted: a3, gpaDanger: o3, gpaWarning: s3, pureAlgoSet: c3, rayatSet: l3, sf08Loaded: u2 = false, registrationPhase: d2 = `during`, scheduledExpected: f2, addable: p2 }) {
    let m2 = d2 === `open`, h2 = n3.traineeStats[e2] || { registered: 0, remaining: 0 }, g2 = n3.traineeExpected[e2] || { courses: [], credits: 0 }, _2 = m2 ? $t(t2) : t2, v2 = n3.sortedCourses.filter((e3) => {
      if (Ft(e3.code, r3) || It(e3.code)) return false;
      let t3 = _2.courses[e3.code];
      return (t3 === `notregistered` || !t3) && !Ai(e3.code, _2, r3);
    }).length <= 1, y2 = n3.sortedCourses.map((e3) => {
      let n4 = t2.courses[e3.code] || `notregistered`;
      return g2.courses.includes(e3.code) && n4 === `notregistered` ? `expected` : n4 === `notregistered` && (Ai(e3.code, _2, r3) || Ft(e3.code, r3) && !v2) ? `blocked` : n4 === `current` ? `registered` : n4;
    }), b2 = h2.remaining - g2.credits, x2 = new Set(g2.courses), S2 = n3.sortedCourses.filter((e3) => (t2.courses[e3.code] || `notregistered`) === `notregistered` && !x2.has(e3.code) && !Ft(e3.code, r3) && !It(e3.code)).length, C2 = false, w2 = ``, { group: T2, groupClass: E2 } = ji(h2.remaining, g2.courses, g2.credits, r3, n3.coopTrainingCredits, S2, n3.traineeCoopRemaining[e2] ?? n3.coopTrainingCredits);
    if (T2 === `متعسر`) {
      C2 = true;
      let e3 = n3.sortedCourses.filter((e4) => (t2.courses[e4.code] || `notregistered`) === `notregistered` ? (r3.prerequisites[e4.code] || []).length > 0 && Ai(e4.code, _2, r3) : false);
      w2 = `متعسر - متطلبات غير مستوفاة
${e3.slice(0, 5).map((e4) => e4.code).join(`, `)}${e3.length > 5 ? `...` : ``}`;
    }
    let D2 = o3 === void 0 ? 2 : o3, O2 = s3 === void 0 ? ot : s3, k2 = `gpa-normal`;
    t2.gpa < D2 ? k2 = `gpa-danger` : t2.gpa < O2 && (k2 = `gpa-warning`);
    let ee2 = i3?.overrides || /* @__PURE__ */ new Set(), te2 = i3?.removals || /* @__PURE__ */ new Set(), ne2 = n3.sortedCourses.map((e3) => {
      let n4 = t2.courses[e3.code] || `notregistered`, i4 = g2.courses.includes(e3.code), o4 = ee2.has(e3.code), s4 = te2.has(e3.code), d3 = Ai(e3.code, _2, r3), h3 = Ft(e3.code, r3), y3 = `empty`, b3 = ``;
      if (n4 === `completed` ? y3 = `completed` : (n4 === `registered` || n4 === `current`) && (m2 ? (y3 = d3 ? `registered-unmet` : i4 ? `registered-expected` : `registered-unexpected`, b3 = `م`) : a3 ? y3 = `registered-as-completed` : (y3 = n4, b3 = `م`)), o4 && n4 === `notregistered`) {
        if (d3 || h3 && !v2) y3 = `manual-blocked`;
        else {
          let t3 = f2?.get(e3.code);
          y3 = t3 === `full` ? `expected-scheduled` : t3 === `half` ? `expected-partial` : `manual-expected`;
        }
        b3 = `1`;
      } else if (i4 && n4 === `notregistered`) {
        let t3 = f2?.get(e3.code);
        y3 = t3 === `full` ? `expected-scheduled` : t3 === `half` ? `expected-partial` : `expected`, b3 = `1`;
      } else s4 && n4 === `notregistered` ? (y3 = `manual-removed`, b3 = ``) : n4 === `notregistered` && !i4 && !o4 && (d3 || h3 && !v2 ? y3 = `blocked` : p2?.get(e3.code) === `conflict` && (y3 = `addable-conflict`));
      let x3 = y3 === `empty` && p2?.get(e3.code) === `free`, S3;
      switch (y3) {
        case `completed`:
          S3 = `مقرر مستوفى`;
          break;
        case `registered`:
        case `current`:
          S3 = `مقرر مسجّل حالياً`;
          break;
        case `registered-as-completed`:
          S3 = `مقرر مسجّل (محسوب كمستوفى)`;
          break;
        case `registered-expected`:
          S3 = `✅ سجّل هذا المقرر وهو ضمن المتوقّع (تسجيل صحيح)`;
          break;
        case `registered-unexpected`:
          S3 = `⚠️ سجّل هذا المقرر وهو خارج المتوقّع`;
          break;
        case `registered-unmet`:
          S3 = `⛔ سجّل هذا المقرر ومتطلبه السابق غير مستوفى`;
          break;
        case `expected`:
          S3 = `متوقَّع تسجيله (حسب المصدر المختار)`;
          break;
        case `expected-scheduled`:
          S3 = `متوقَّع تسجيله — ومُجدوَل بالكامل لهذا المتدرب في لوحة بناء الجدول`;
          break;
        case `expected-partial`:
          S3 = `متوقَّع تسجيله — ومُجدوَل جزئيًا (أحد جزأيه) لهذا المتدرب في لوحة بناء الجدول`;
          break;
        case `manual-expected`:
          S3 = `متوقَّع يدوياً`;
          break;
        case `manual-blocked`:
          S3 = d3 ? `⚠️ متوقَّع يدوياً ومتطلبه السابق غير مستوفى` : `⚠️ متوقَّع يدوياً والتدريب التعاوني يتطلب إنهاء جميع المقررات (يُستثنى مقرر واحد)`;
          break;
        case `manual-removed`:
          S3 = `أُزيل توقُّعه يدوياً`;
          break;
        case `blocked`:
          S3 = d3 ? `متعذّر: المتطلب السابق غير مستوفى` : `التدريب التعاوني: يتطلب إنهاء جميع المقررات (يُستثنى مقرر واحد)`;
          break;
        case `addable-conflict`:
          S3 = `⛔ متاح للتسجيل (متطلّبه محقّق) لكنّ إضافته تُحدث تعارضًا زمنيًّا مع جدوله الحاليّ — كلّ شُعب أحد جزأيه تصطدم بمواعيده`;
          break;
        default:
          S3 = `غير مسجّل وغير متوقَّع`;
      }
      x3 && (S3 = `➕ قابل للإضافة بلا تعارض: متاح للتسجيل، متطلّبه محقّق، ولكلّ جزءٍ شعبةٌ يتفرّغ لموعدها`), y3 === `empty` && h3 && (S3 = `التدريب التعاوني: متاح للتسجيل (تبقّى مقرر واحد أو أقل)`);
      let C3 = b3 === `1`, w3 = n4 === `notregistered`, T3 = u2 && !!c3?.has(e3.code), E3 = u2 && !!l3?.has(e3.code), D3 = C3 && T3 && E3, O3 = w3 && !D3 && (!C3 || o4), k3 = O3 && T3, ne3 = O3 && E3;
      return u2 && (D3 ? S3 += `
توافق المصدرين: الخوارزمية ورايات تتوقعانه` : k3 && ne3 ? S3 += C3 ? `
الخوارزمية ورايات تتوقعانه أيضاً` : `
الخوارزمية ورايات تتوقعانه (أُزيل \xAB1\xBB)` : k3 ? S3 += C3 ? `
متوقَّع في الخوارزمية أيضاً` : `
متوقَّع في الخوارزمية` : ne3 && (S3 += C3 ? `
متوقَّع رسمياً في رايات (SF08) أيضاً` : `
متوقَّع رسمياً في رايات (SF08)`)), w3 && (S3 += `
نقرتان للتبديل`), { status: y3, content: b3, editable: n4 !== `completed`, tooltip: S3, markAlgo: k3, markRayat: ne3, agreement: D3, markAddable: x3 };
    }), re2 = false, ie2 = 0;
    return ne2.forEach((e3, t3) => {
      (e3.status === `registered-unexpected` || e3.status === `registered-unmet`) && (re2 = true), (e3.status === `expected` || e3.status === `expected-scheduled` || e3.status === `expected-partial` || e3.status === `manual-expected` || e3.status === `manual-blocked` || e3.status === `registered-expected`) && (ie2 += r3.coursesData[n3.sortedCourses[t3].code]?.credits ?? 0);
    }), { traineeId: e2, name: t2.name, gpa: t2.gpa, gpaClass: k2, registered: h2.registered, remaining: h2.remaining, expectedCredits: g2.credits, remainingAfter: b2, group: T2, groupClass: E2, isBlocked: C2, blockedTooltip: w2, cells: ne2, courseStatuses: y2, registeredOutsideExpected: re2, effectiveExpectedCredits: ie2 };
  }
  function Pi(e2, t2, n3, r3, i3 = null) {
    let a3 = i3 ? new Set(i3) : null, o3 = a3 ? e2.sortedTraineeIds.filter((e3) => a3.has(e3)) : e2.sortedTraineeIds, s3 = o3.length, c3 = {};
    return o3.forEach((n4) => {
      let r4 = t2[n4], i4 = e2.traineeStats[n4] || { registered: 0, remaining: 0 }, a4 = e2.traineeExpected[n4] || { courses: [], credits: 0 }, o4 = [];
      e2.sortedCourses.forEach((e3) => {
        let t3 = r4.courses[e3.code];
        (t3 === `completed` || t3 === `registered` || t3 === `current`) && o4.push(e3.code);
      });
      let s4 = [...o4].sort().join(`,`), l3 = [...a4.courses || []].sort().join(`,`), u2 = s4 + `||` + l3;
      c3[u2] || (c3[u2] = { trainees: [], traineeIds: [], completedCodes: new Set(o4), expectedCodes: new Set(a4.courses || []), expectedCredits: a4.credits || 0, remainingAfter: i4.remaining - (a4.credits || 0), remaining: i4.remaining, expectedCounts: {} }, e2.sortedCourses.forEach((e3) => c3[u2].expectedCounts[e3.code] = 0)), c3[u2].trainees.push({ id: n4, name: r4.name, gpa: r4.gpa || 0 }), c3[u2].traineeIds.push(n4), (a4.courses || []).forEach((e3) => {
        c3[u2].expectedCounts[e3] !== void 0 && c3[u2].expectedCounts[e3]++;
      });
    }), Object.values(c3).sort((e3, t3) => t3.trainees.length - e3.trainees.length).map((t3, i4) => {
      let a4 = t3.trainees.length, o4 = a4 / s3 * 100, c4 = [...new Set(Array.from(t3.expectedCodes).map((e3) => n3.coursesData[e3]?.semester).filter((e3) => !!e3))].sort((e3, t4) => e3 - t4), l3, u2;
      t3.remaining === 0 ? (l3 = `✓`, u2 = `group-graduate`) : c4.length > 0 ? (l3 = c4.join(`-`), u2 = `group-level-${String(c4[0])}`) : (l3 = `متعسر`, u2 = `group-blocked`);
      let d2 = e2.sortedCourses.map((e3) => {
        let i5 = t3.completedCodes.has(e3.code), a5 = t3.expectedCounts[e3.code] || 0, o5 = 0, s4 = 0;
        t3.traineeIds.forEach((t4) => {
          r3[t4]?.overrides.has(e3.code) && o5++, r3[t4]?.removals.has(e3.code) && s4++;
        });
        let c5 = false, l4 = n3.prerequisites[e3.code] || [];
        l4.length > 0 && !i5 && a5 === 0 && o5 === 0 && (c5 = !l4.every((e4) => t3.completedCodes.has(e4)));
        let u3 = `empty`, d3 = 0;
        return i5 ? u3 = `completed` : o5 > 0 ? (u3 = `manual-expected`, d3 = o5) : s4 > 0 && a5 === 0 ? u3 = `manual-removed` : a5 > 0 ? (u3 = `expected`, d3 = a5) : c5 && (u3 = `blocked`), { status: u3, count: d3, editable: !i5, editTraineeIds: t3.traineeIds };
      });
      return { index: i4 + 1, group: l3, groupClass: u2, trainees: t3.trainees, count: a4, percentage: o4, remainingAfter: t3.remainingAfter, expectedCredits: t3.expectedCredits, remaining: t3.remaining, cells: d2 };
    });
  }
  function Fi(e2, t2, n3, r3, i3 = null, a3 = null) {
    let o3 = i3 ? new Set(i3) : null, s3 = o3 ? e2.sortedTraineeIds.filter((e3) => o3.has(e3)) : e2.sortedTraineeIds, c3 = s3.length;
    if (c3 === 0) return [];
    let l3 = s3.map((n4) => {
      let r4 = e2.traineeExpected[n4] || { courses: [], credits: 0 }, i4 = e2.traineeStats[n4] || { registered: 0, remaining: 0 }, o4 = a3 ? (r4.courses || []).filter((e3) => !a3.has(e3)) : r4.courses || [];
      return { id: n4, trainee: t2[n4], expectedCourses: new Set(o4), expectedCredits: r4.credits || 0, remaining: i4.remaining, courses: o4 };
    });
    l3.sort((e3, t3) => t3.expectedCourses.size - e3.expectedCourses.size);
    let u2 = [], d2 = /* @__PURE__ */ new Set();
    return l3.forEach((e3) => {
      if (d2.has(e3.id)) return;
      let t3 = { leader: e3, members: [e3] };
      d2.add(e3.id), l3.forEach((n4) => {
        d2.has(n4.id) || n4.expectedCourses.size !== 0 && [...n4.expectedCourses].every((t4) => e3.expectedCourses.has(t4)) && (t3.members.push(n4), d2.add(n4.id));
      }), u2.push(t3);
    }), u2.map((t3, i4) => {
      let a4 = t3.members.length, o4 = a4 / c3 * 100, s4 = t3.leader, l4 = [...new Set(s4.courses.map((e3) => n3.coursesData[e3]?.semester).filter((e3) => !!e3))].sort((e3, t4) => e3 - t4), u3, d3;
      s4.remaining === 0 ? (u3 = `✓`, d3 = `group-graduate`) : l4.length > 0 ? (u3 = l4.join(`-`), d3 = `group-level-${String(l4[0])}`) : (u3 = `متعسر`, d3 = `group-blocked`);
      let f2 = /* @__PURE__ */ new Set();
      s4.trainee && Object.entries(s4.trainee.courses || {}).forEach(([e3, t4]) => {
        (t4 === `completed` || r3 && (t4 === `registered` || t4 === `current`)) && f2.add(e3);
      });
      let p2 = e2.sortedCourses.map((e3) => {
        let n4 = f2.has(e3.code), r4 = s4.expectedCourses.has(e3.code), i5 = 0;
        t3.members.forEach((t4) => {
          t4.expectedCourses.has(e3.code) && i5++;
        });
        let a5 = `empty`, o5 = 0;
        n4 ? a5 = `completed` : r4 && (a5 = `expected`, o5 = i5);
        let c4 = t3.members.filter((t4) => t4.expectedCourses.has(e3.code)).map((e4) => e4.id);
        return { status: a5, count: o5, editable: !n4, editTraineeIds: c4 };
      });
      return { index: i4 + 1, group: u3, groupClass: d3, trainees: t3.members.map((e3) => ({ id: e3.id, name: e3.trainee.name, gpa: e3.trainee.gpa || 0 })), count: a4, percentage: o4, remainingAfter: s4.remaining - s4.expectedCredits, expectedCredits: s4.expectedCredits, remaining: s4.remaining, cells: p2 };
    });
  }
  function Ii(e2, t2, n3, r3, i3 = null, a3 = null) {
    let o3 = i3 ? new Set(i3) : null, s3 = o3 ? e2.sortedTraineeIds.filter((e3) => o3.has(e3)) : e2.sortedTraineeIds, c3 = s3.length;
    if (c3 === 0) return [];
    let l3 = (t3) => {
      let n4 = e2.traineeExpected[t3]?.courses ?? [];
      return a3 ? n4.filter((e3) => !a3.has(e3)) : n4;
    }, u2 = /* @__PURE__ */ new Map();
    s3.forEach((r4) => {
      let i4 = t2[r4], a4 = e2.traineeStats[r4] || { registered: 0, remaining: 0 }, o4 = e2.traineeExpected[r4] || { courses: [], credits: 0 }, s4 = new Set(o4.courses), c4 = e2.sortedCourses.filter((e3) => (i4.courses[e3.code] || `notregistered`) === `notregistered` && !s4.has(e3.code) && !Ft(e3.code, n3) && !It(e3.code)).length, { group: l4 } = ji(a4.remaining, o4.courses, o4.credits, n3, e2.coopTrainingCredits, c4, e2.traineeCoopRemaining[r4] ?? e2.coopTrainingCredits);
      u2.set(r4, l4);
    });
    let d2 = [], f2 = [], p2 = [], m2 = [], h2 = [], g2 = /* @__PURE__ */ new Map(), _2 = [], v2 = (e3, t3) => (g2.get(e3) ?? g2.set(e3, []).get(e3)).push(t3);
    s3.forEach((e3) => {
      let t3 = u2.get(e3);
      if (t3 === `✓`) return;
      if (t3 === `خريج`) {
        d2.push(e3);
        return;
      }
      if (t3 === `خريج-`) {
        f2.push(e3);
        return;
      }
      if (t3 === `تدريب+`) {
        p2.push(e3);
        return;
      }
      if (t3 === `متعسر`) {
        m2.push(e3);
        return;
      }
      if (!a3) {
        /^[1-6]$/.test(t3) ? v2(parseInt(t3, 10), e3) : _2.push(e3);
        return;
      }
      let r4 = l3(e3);
      if (r4.length === 0) {
        h2.push(e3);
        return;
      }
      let i4 = new Set(r4.map((e4) => n3.coursesData[e4]?.semester).filter((e4) => !!e4));
      i4.size <= 1 ? v2([...i4][0] ?? 0, e3) : _2.push(e3);
    });
    let y2 = (n4, r4, i4) => {
      let o4 = i4.map((e3) => ({ id: e3, name: t2[e3]?.name ?? e3, gpa: t2[e3]?.gpa || 0 })), s4 = o4.length, l4 = 0, u3 = 0, d3 = 0;
      i4.forEach((t3) => {
        let n5 = e2.traineeExpected[t3] || { courses: [], credits: 0 }, r5 = e2.traineeStats[t3]?.remaining ?? 0;
        l4 += n5.credits || 0, u3 += r5, d3 += r5 - (n5.credits || 0);
      });
      let f3 = (e3) => s4 ? Math.round(e3 / s4) : 0, p3 = e2.sortedCourses.map((t3) => {
        let n5 = 0;
        return (!a3 || !a3.has(t3.code)) && i4.forEach((r5) => {
          e2.traineeExpected[r5]?.courses.includes(t3.code) && n5++;
        }), { status: n5 > 0 ? `expected` : `empty`, count: n5, editable: false, editTraineeIds: [] };
      });
      return { index: 0, group: n4, groupClass: r4, trainees: o4, count: s4, percentage: s4 / c3 * 100, remainingAfter: f3(d3), expectedCredits: f3(l4), remaining: f3(u3), cells: p3 };
    }, b2 = [];
    d2.length && b2.push(y2(`خريج`, `group-graduate`, d2)), f2.length && b2.push(y2(`خريج-`, `group-graduate`, f2)), p2.length && b2.push(y2(`تدريب+`, `group-level-5`, p2));
    for (let e3 of [6, 5, 4, 3, 2, 1]) {
      let t3 = g2.get(e3);
      t3 && t3.length && b2.push(y2(String(e3), `group-level-${e3}`, t3));
    }
    return _2.length && Fi(e2, t2, n3, r3, _2, a3).forEach((e3) => b2.push({ ...e3, percentage: e3.count / c3 * 100 })), h2.length && b2.push(y2(`عام فقط`, `group-blocked`, h2)), m2.length && b2.push(y2(`متعسر`, `group-blocked`, m2)), b2.map((e3, t3) => ({ ...e3, index: t3 + 1 }));
  }
  function Li(e2, t2, n3) {
    let r3 = e2.sortedTraineeIds.length, i3 = {};
    e2.sortedTraineeIds.forEach((r4) => {
      let a4 = t2[r4], o4 = e2.traineeStats[r4] || { registered: 0, remaining: 0 }, s4 = e2.traineeExpected[r4] || { courses: [], credits: 0 }, c4 = new Set(s4.courses), l4 = e2.sortedCourses.filter((e3) => (a4.courses[e3.code] || `notregistered`) === `notregistered` && !c4.has(e3.code) && !Ft(e3.code, n3) && !It(e3.code)).length, { group: u3 } = ji(o4.remaining, s4.courses, s4.credits, n3, e2.coopTrainingCredits, l4, e2.traineeCoopRemaining[r4] ?? e2.coopTrainingCredits), d3 = Mi(u3);
      i3[u3] || (i3[u3] = { trainees: [], traineeIds: [], expectedCounts: {}, tooltip: d3 }, e2.sortedCourses.forEach((e3) => i3[u3].expectedCounts[e3.code] = 0)), i3[u3].trainees.push({ id: r4, name: a4.name, gpa: a4.gpa || 0 }), i3[u3].traineeIds.push(r4), (s4.courses || []).forEach((e3) => {
        i3[u3].expectedCounts[e3] !== void 0 && i3[u3].expectedCounts[e3]++;
      });
    });
    let a3 = [], o3 = [], s3 = null, c3 = null, l3 = null, u2 = null;
    Object.entries(i3).forEach(([e3, t3]) => {
      if (e3 === `✓`) return;
      let n4 = { name: e3, data: t3, count: t3.trainees.length };
      [`1`, `2`, `3`, `4`, `5`, `6`].includes(e3) ? a3.push(n4) : e3 === `تدريب+` ? s3 = n4 : e3 === `خريج` ? c3 = n4 : e3 === `خريج-` ? l3 = n4 : e3 === `متعسر` ? u2 = n4 : o3.push(n4);
    }), a3.sort((e3, t3) => parseInt(t3.name) - parseInt(e3.name)), o3.sort((e3, t3) => t3.count - e3.count);
    let d2 = [], f2 = (e3) => {
      if (e3 === `متعسر`) return `group-blocked`;
      if (e3 === `تدريب+`) return `group-level-5`;
      if (e3 === `خريج` || e3 === `خريج-`) return `group-graduate`;
      for (let t3 of [`1`, `2`, `3`, `4`, `5`, `6`]) if (e3.startsWith(t3)) return `group-level-${t3}`;
      return ``;
    }, p2 = (t3, n4, i4) => {
      d2.push({ name: t3.name, groupClass: f2(t3.name), tooltip: i4 || t3.data.tooltip || t3.name, trainees: t3.data.trainees, traineeIds: t3.data.traineeIds, count: t3.count, percentage: t3.count / r3 * 100, expectedCounts: e2.sortedCourses.map((e3) => t3.data.expectedCounts[e3.code] || 0), separatorBefore: n4 });
    };
    return a3.forEach((e3) => p2(e3, false)), s3 && p2(s3, true, `المتوقع يشمل التدريب الميداني`), c3 && p2(c3, true, `بعد المتوقع: يتبقى له التدريب فقط`), l3 && p2(l3, !c3, `بعد المتوقع: يتبقى له التدريب ومقرر`), u2 && p2(u2, true, `لا يوجد مقررات متوقعة - متطلبات سابقة غير مستوفاة`), o3.forEach((e3, t3) => p2(e3, t3 === 0)), d2;
  }
  function Ri(e2, t2) {
    switch (t2) {
      case `group`:
        return e2.group;
      case `name`:
        return String(e2.count);
      case `id`:
        return e2.percentage.toFixed(1);
      case `remainingAfter`:
        return String(e2.remainingAfter);
      case `expected`:
        return String(e2.expectedCredits);
      case `remaining`:
        return String(e2.remaining);
      default:
        return ``;
    }
  }
  function zi(e2, t2) {
    switch (t2) {
      case `name`:
        return e2.count;
      case `id`:
        return e2.percentage;
      case `remainingAfter`:
        return e2.remainingAfter;
      case `expected`:
        return e2.expectedCredits;
      case `remaining`:
        return e2.remaining;
      default:
        return NaN;
    }
  }
  function Bi(e2, t2, n3) {
    let r3 = e2, i3 = Object.entries(n3);
    if (i3.length && (r3 = r3.filter((e3) => i3.every(([t3, n4]) => n4.includes(Ri(e3, t3))))), t2) {
      let { field: e3, order: n4 } = t2;
      r3 = [...r3].sort((t3, r4) => {
        if (e3 === `group`) return n4 === `asc` ? t3.group.localeCompare(r4.group, `ar`) : r4.group.localeCompare(t3.group, `ar`);
        let i4 = zi(t3, e3) - zi(r4, e3);
        return n4 === `asc` ? i4 : -i4;
      });
    }
    return r3.map((e3, t3) => e3.index === t3 + 1 ? e3 : { ...e3, index: t3 + 1 });
  }
  function Vi(e2) {
    return e2 >= 15 ? 5 : e2 >= 10 ? 4 : e2 >= 5 ? 3 : e2 >= 2 ? 2 : +(e2 >= 1);
  }
  function Hi(e2, t2) {
    let n3 = Math.max(1, e2), r3 = Math.floor(t2 / n3), i3 = t2 - r3 * n3, a3 = Array.from({ length: n3 }, (e3, t3) => r3 + +(t3 < i3)), o3 = [], s3 = 0;
    for (let e3 = 0; e3 < n3; e3++) {
      let t3 = [];
      for (let n4 = 0; n4 < a3[e3]; n4++) t3.push(s3 + n4);
      o3.push(t3), s3 += a3[e3];
    }
    return o3;
  }
  function Ui(e2, t2, n3) {
    let r3 = Hi(Math.max(1, e2), t2.length), i3 = {};
    r3.forEach((e3, n4) => e3.forEach((e4) => {
      t2[e4] && (i3[t2[e4].id] = n4);
    }));
    let a3 = n3 ?? {}, o3 = {};
    return t2.forEach((t3) => {
      let n4 = a3[t3.id];
      o3[t3.id] = n4 != null && n4 >= 0 && n4 < e2 ? n4 : i3[t3.id] ?? 0;
    }), o3;
  }
  function Wi(e2, t2, n3, r3, i3) {
    let a3 = /* @__PURE__ */ new Map();
    return e2.forEach((e3) => {
      e3.parts.forEach((o3) => {
        let s3 = o3.sections;
        if (s3 <= 0) return;
        let c3 = t2[e3.code], l3 = c3 ? n3.filter((e4) => c3.has(e4)) : [], u2 = Hi(s3, l3.length), d2 = {};
        u2.forEach((e4, t3) => e4.forEach((e5) => {
          d2[l3[e5]] = t3;
        }));
        let f2 = e3.code + `|` + o3.part, p2 = r3[f2] ?? {}, m2 = {}, h2 = Array.from({ length: s3 }, () => []), g2 = [];
        l3.forEach((e4) => {
          let t3 = p2[e4], n4 = t3 === -1 ? -1 : t3 != null && t3 >= 0 && t3 < s3 ? t3 : d2[e4] ?? 0;
          m2[e4] = n4, n4 === -1 ? g2.push(e4) : h2[n4].push(e4);
        });
        let _2 = Array.from({ length: s3 }, () => 0);
        if (i3 && e3.level === 1 && i3.bundles.length) {
          let e4 = Ui(s3, i3.bundles, i3.override[f2]);
          i3.bundles.forEach((t3) => {
            let n4 = e4[t3.id];
            n4 >= 0 && n4 < s3 && (_2[n4] += t3.size);
          });
        }
        let v2 = h2.map((e4, t3) => e4.length + _2[t3]);
        a3.set(f2, { code: e3.code, part: o3.part, sections: s3, expected: l3, eff: m2, members: h2, removed: g2, freshmen: _2, total: v2 });
      });
    }), a3;
  }
  function Gi(e2, t2, n3, r3, i3) {
    let a3 = /* @__PURE__ */ new Map(), o3 = Wi(e2, t2, n3, r3);
    for (let n4 of e2) {
      let e3 = n4.parts;
      if (!e3.length) continue;
      let r4 = e3.map((e4) => ({ info: o3.get(`${n4.code}|${e4.part}`) })), s3 = t2[n4.code];
      s3 && s3.forEach((t3) => {
        let o4 = 0;
        for (let e4 of r4) {
          let r5 = e4.info?.eff[t3];
          r5 != null && r5 >= 0 && i3(`${n4.code}|${e4.info.part}|${r5}`) && o4++;
        }
        if (o4 === 0) return;
        let s4 = o4 === e3.length ? `full` : `half`, c3 = a3.get(t3);
        c3 || a3.set(t3, c3 = /* @__PURE__ */ new Map()), c3.set(n4.code, s4);
      });
    }
    return a3;
  }
  function Ki() {
    let e2 = Di(), t2 = wr((e3) => e3.ss01Rows);
    return (0, u.useMemo)(() => Gn(t2, e2 ? new Set(e2.model.sortedCourses.map((e3) => e3.code)) : /* @__PURE__ */ new Set()), [e2, t2]);
  }
  var qi = () => ({ trainers: /* @__PURE__ */ new Map(), rooms: /* @__PURE__ */ new Map(), refs: /* @__PURE__ */ new Set(), assigned: /* @__PURE__ */ new Set() });
  var Ji = (e2, t2) => {
    let n3 = e2.get(t2);
    return n3 || e2.set(t2, n3 = { نظري: qi(), عملي: qi() }), n3;
  };
  function Yi(e2, t2, n3, r3, i3) {
    if (!t2) return;
    let a3 = e2.trainers.get(t2);
    a3 || e2.trainers.set(t2, a3 = { id: n3, name: r3, refs: /* @__PURE__ */ new Set() }), !a3.id && n3 && (a3.id = n3), !a3.name && r3 && (a3.name = r3), i3 && (a3.refs.add(i3), e2.assigned.add(i3));
  }
  function Xi(e2, t2) {
    let n3 = /* @__PURE__ */ new Map(), r3 = /* @__PURE__ */ new Set(), i3 = /* @__PURE__ */ new Map(), a3 = /* @__PURE__ */ new Map(), o3 = /* @__PURE__ */ new Map();
    for (let t3 of e2) {
      let e3 = lt(t3.courseCode);
      if (!e3) continue;
      if (t3.dept === `الدراسات العامة`) {
        r3.add(e3);
        continue;
      }
      let s4 = Ji(n3, e3)[Kn(t3)];
      if (t3.crn && s4.refs.add(t3.crn), t3.instructorId || t3.instructorName) {
        let e4 = t3.instructorId || t3.instructorName;
        Yi(s4, e4, t3.instructorId, t3.instructorName, t3.crn), t3.instructorName && i3.set(t3.instructorName, e4), t3.crn && a3.set(t3.crn, e4), o3.has(e4) || o3.set(e4, { id: t3.instructorId, name: t3.instructorName });
      }
      if (t3.room) {
        let e4 = Yn(t3), n4 = s4.rooms.get(e4);
        n4 || s4.rooms.set(e4, n4 = /* @__PURE__ */ new Set()), t3.crn && n4.add(t3.crn);
      }
    }
    let s3 = /* @__PURE__ */ new Map();
    for (let e3 of Object.values(t2?.courses ?? {})) if (!e3.department.includes(`الدراسات العامة`)) for (let t3 of Object.values(e3.sections)) {
      if (!t3.instructor || s3.has(t3.instructor)) continue;
      let e4 = a3.get(t3.refNum);
      e4 && s3.set(t3.instructor, e4);
    }
    for (let e3 of Object.values(t2?.courses ?? {})) {
      let t3 = lt(e3.code);
      if (!t3) continue;
      if (e3.department.includes(`الدراسات العامة`)) {
        r3.add(t3);
        continue;
      }
      let a4 = e3.courseType === `theory` ? `نظري` : `عملي`, c4 = Ji(n3, t3)[a4];
      for (let t4 of Object.values(e3.sections)) {
        let e4 = t4.refNum;
        if (e4 && c4.assigned.has(e4) || (e4 && c4.refs.add(e4), !t4.instructor)) continue;
        let n4 = s3.get(t4.instructor) ?? i3.get(t4.instructor) ?? t4.instructor, r4 = o3.get(n4);
        Yi(c4, n4, r4?.id ?? ``, r4?.name ?? t4.instructor, e4);
      }
    }
    let c3 = (e3) => {
      let t3 = /* @__PURE__ */ new Map();
      for (let [n5, r4] of e3.trainers) t3.set(n5, { id: r4.id, name: r4.name, sections: r4.refs.size });
      let n4 = /* @__PURE__ */ new Map();
      for (let [t4, r4] of e3.rooms) n4.set(t4, r4.size);
      return { trainers: t3, rooms: n4, sectionCount: e3.refs.size };
    }, l3 = /* @__PURE__ */ new Map();
    for (let [e3, t3] of n3) r3.has(e3) || l3.set(e3, { نظري: c3(t3.نظري), عملي: c3(t3.عملي) });
    return { byCode: l3, generalCodes: r3 };
  }
  function Zi() {
    let e2 = wr((e3) => e3.ss01Rows), t2 = z((e3) => e3.sf01);
    return (0, u.useMemo)(() => Xi(e2, t2), [e2, t2]);
  }
  function Qi() {
    let e2 = Di(), t2 = z((e3) => e3.currentSpecialty), n3 = wr((e3) => e3.removedTrainers), r3 = wr((e3) => e3.addedTrainers), i3 = Zi();
    return (0, u.useMemo)(() => {
      let a3 = new Set(n3[t2] ?? []), o3 = /* @__PURE__ */ new Map();
      if (e2) for (let t3 of e2.model.sortedCourses) {
        let e3 = i3.byCode.get(lt(t3.code));
        e3 && [`نظري`, `عملي`].forEach((n4) => {
          for (let [r4, i4] of e3[n4].trainers) {
            let e4 = o3.get(r4);
            e4 || o3.set(r4, e4 = { id: i4.id, name: i4.name, courses: [], manual: false }), !e4.id && i4.id && (e4.id = i4.id), e4.courses.some((e5) => e5.code === t3.code && e5.part === n4) || e4.courses.push({ code: t3.code, part: n4 });
          }
        });
      }
      return (r3[t2] ?? []).forEach((e3) => {
        let t3 = Jn(e3);
        o3.has(t3) || o3.set(t3, { id: e3.id, name: e3.name, courses: [], manual: true });
      }), [...o3.values()].filter((e3) => !a3.has(Jn(e3)));
    }, [e2, i3, t2, n3, r3]);
  }
  function $i() {
    let e2 = z((e3) => e3.currentSpecialty), t2 = wr((e3) => e3.removedRooms), n3 = wr((e3) => e3.addedRooms), r3 = wr((e3) => e3.roomOverrides), i3 = Ki();
    return (0, u.useMemo)(() => {
      let a3 = new Set(t2[e2] ?? []), o3 = r3[e2] ?? {}, s3 = /* @__PURE__ */ new Map();
      return Zn(i3).forEach((e3) => {
        let t3 = Yn(e3);
        s3.set(t3, { ...e3, key: t3, manual: false });
      }), (n3[e2] ?? []).forEach((e3) => {
        let t3 = Yn(e3);
        s3.has(t3) || s3.set(t3, { ...e3, courses: [], key: t3, manual: true });
      }), [...s3.values()].filter((e3) => !a3.has(e3.key)).map((e3) => e3.manual ? e3 : { ...e3, ...o3[e3.key] });
    }, [i3, e2, t2, n3, r3]);
  }
  function ea(e2, t2) {
    let n3 = Object.keys(t2), r3 = {}, i3 = n3.reduce((e3, n4) => e3 + t2[n4], 0);
    if (e2 <= 0 || i3 <= 0) return n3.forEach((e3) => r3[e3] = 0), r3;
    let a3 = {}, o3 = 0;
    n3.forEach((n4) => {
      let s4 = e2 * t2[n4] / i3;
      r3[n4] = Math.floor(s4), a3[n4] = s4 - r3[n4], o3 += r3[n4];
    });
    let s3 = e2 - o3, c3 = n3.slice().sort((e3, t3) => a3[t3] - a3[e3]);
    for (let e3 = 0; e3 < c3.length && s3 > 0; e3++, s3--) r3[c3[e3]]++;
    return r3;
  }
  var ta = { trainers: /* @__PURE__ */ new Map(), rooms: /* @__PURE__ */ new Map(), sectionCount: 0 };
  var na = (e2) => {
    let t2 = {};
    for (let [n3, r3] of e2) t2[n3] = r3.sections;
    return t2;
  };
  var ra = (e2, t2) => {
    let n3 = /* @__PURE__ */ new Map();
    for (let [t3, r4] of e2.trainers) n3.set(t3, { ...r4 });
    for (let [e3, r4] of t2.trainers) {
      let t3 = n3.get(e3);
      n3.set(e3, t3 ? { ...t3, sections: t3.sections + r4.sections } : { ...r4 });
    }
    let r3 = /* @__PURE__ */ new Map();
    for (let [t3, n4] of e2.rooms) r3.set(t3, n4);
    for (let [e3, n4] of t2.rooms) r3.set(e3, (r3.get(e3) ?? 0) + n4);
    return { trainers: n3, rooms: r3, sectionCount: e2.sectionCount + t2.sectionCount };
  };
  function ia(e2, t2, n3 = /* @__PURE__ */ new Set(), r3 = /* @__PURE__ */ new Set()) {
    let i3 = [], a3 = 0;
    for (let o3 of e2) {
      let e3 = lt(o3.code);
      if (t2.generalCodes.has(e3)) continue;
      let s3 = t2.byCode.get(e3), c3 = s3?.نظري ?? ta, l3 = s3?.عملي ?? ta, u2 = o3.hasTheory && o3.hasPractical, d2 = (e4) => u2 ? e4 === `نظري` ? c3 : l3 : ra(c3, l3), f2 = [];
      o3.hasTheory && f2.push(`نظري`), o3.hasPractical && f2.push(`عملي`);
      let p2 = f2.map((e4) => ({ part: e4, r: d2(e4) })).filter(({ part: e4, r: t3 }) => (e4 === `نظري` ? o3.theorySections : o3.practicalSections) > 0 || t3.sectionCount > 0);
      p2.length && (a3 += 1, p2.forEach(({ part: e4, r: t3 }, s4) => {
        let c4 = e4 === `نظري` ? o3.theorySections : o3.practicalSections, l4 = na(t3.trainers), u3 = ea(c4, l4), d3 = Object.fromEntries(t3.rooms), f3 = ea(c4, d3);
        for (let e5 of n3) delete l4[e5], delete u3[e5];
        for (let e5 of r3) delete d3[e5], delete f3[e5];
        i3.push({ rowKey: `${o3.code}|${e4}`, seq: a3, firstOfCourse: s4 === 0, code: o3.code, name: o3.name, part: e4, contactHours: e4 === `نظري` ? o3.theoryContact : o3.practicalContact, trainees: o3.expected, avgPerSection: e4 === `نظري` ? o3.theoryAvg : o3.practicalAvg, targetSections: c4, lastTermSections: t3.sectionCount, ss01ByTrainer: l4, defaultByTrainer: u3, ss01ByRoom: d3, defaultByRoom: f3 });
      }));
    }
    return i3;
  }
  var aa = [`#c0512e`, `#2f6fd0`, `#1d9e75`, `#6a4fb0`, `#b0567f`, `#a07b12`, `#0f8f9e`, `#9c4b86`, `#c2876a`, `#4a8bab`, `#3d8f4d`, `#8a5cb8`];
  var oa = 2;
  function sa() {
    let e2 = Di(), t2 = z((e3) => e3.sectionDefaults), n3 = z((e3) => e3.sectionOverrides), r3 = z((e3) => e3.freshmanCounts), i3 = Zi(), a3 = Qi(), o3 = $i(), s3 = wr((e3) => e3.ss01Rows), c3 = wr((e3) => e3.assignments), l3 = wr((e3) => e3.roomAssignments), d2 = wr((e3) => e3.roomAssignEnabled), f2 = wr((e3) => e3.removedTrainers), p2 = wr((e3) => e3.removedRooms), m2 = (0, u.useMemo)(() => {
      let e3 = /* @__PURE__ */ new Map();
      return a3.forEach((t3) => e3.set(Jn(t3), t3.name)), e3;
    }, [a3]), h2 = (0, u.useMemo)(() => {
      let e3 = /* @__PURE__ */ new Map();
      return o3.forEach((t3) => e3.set(t3.key, `${t3.building} \xB7 ${t3.room}`.trim())), e3;
    }, [o3]);
    return (0, u.useMemo)(() => {
      let a4 = e2?.specialty ?? ``, o4 = (e3) => m2.get(e3) ?? e3, u2 = (e3) => h2.get(e3) ?? e3;
      if (!s3.length) return { specialty: a4, ready: false, reason: `ارفع تقرير SS01 من تبويب \xABالحصر\xBB أولًا.`, courses: [], generalCourses: [], offGridParts: [], trainerName: o4, roomName: u2 };
      if (!e2) return { specialty: a4, ready: false, reason: `ارفع بيانات المصفوفة (SC04 وSH06) لمعرفة مقررات التخصص.`, courses: [], generalCourses: [], offGridParts: [], trainerName: o4, roomName: u2 };
      let g2 = n3[a4] || {}, _2 = r3[a4] || 0, v2 = hn(e2.model.sortedCourses, (t3) => e2.model.courseStats[t3]?.expected ?? 0, t2, g2, _2, (t3) => Ft(t3, e2.plan)), y2 = new Map(v2.rows.map((e3) => [e3.code, e3.semester])), b2 = new Map(v2.rows.map((e3) => [e3.code, e3])), x2 = v2.rows.filter((e3) => i3.generalCodes.has(lt(e3.code))).flatMap((e3) => {
        let t3 = [], n4 = { code: e3.code, name: e3.name, level: e3.semester, trainees: e3.expected || 0 };
        return e3.theoryContact > 0 && t3.push({ ...n4, key: `${e3.code}|نظري`, part: `نظري`, contactHours: e3.theoryContact, sections: e3.theorySections || 0, isPractical: false }), e3.practicalContact > 0 && t3.push({ ...n4, key: `${e3.code}|عملي`, part: `عملي`, contactHours: e3.practicalContact, sections: e3.practicalSections || 0, isPractical: true }), t3;
      }).sort((e3, t3) => e3.level - t3.level || e3.code.localeCompare(t3.code, `ar`) || (e3.part === `نظري` ? 0 : 1) - (t3.part === `نظري` ? 0 : 1)), S2 = new Set(f2[a4] ?? []), C2 = new Set(p2[a4] ?? []), w2 = ia(v2.rows, i3, S2, C2), T2 = c3[a4] ?? {}, E2 = l3[a4] ?? {}, D2 = (e3, t3) => {
        let n4 = b2.get(e3);
        if (!n4) return t3;
        if (t3 === `عملي` && n4.isCoop) return `تعاوني`;
        let r4 = t3 === `نظري` ? n4.theoryTrainingType : n4.practicalTrainingType;
        return r4 === `blended` ? `مدمج` : r4 === `selfpaced` ? `ذاتي` : t3;
      }, O2 = [], k2 = /* @__PURE__ */ new Map(), ee2 = 0;
      for (let e3 of w2) {
        let t3 = D2(e3.code, e3.part), n4 = t3 === `تعاوني` && e3.contactHours <= 0 ? oa : e3.contactHours;
        if (n4 <= 0 || e3.targetSections <= 0) {
          (t3 === `تعاوني` || t3 === `ذاتي`) && O2.push({ code: e3.code, name: e3.name, level: y2.get(e3.code) ?? 0, part: e3.part, kind: t3 });
          continue;
        }
        let r4 = k2.get(e3.code);
        r4 || (r4 = { code: e3.code, name: e3.name, level: y2.get(e3.code) ?? 0, color: aa[ee2 % aa.length], parts: [] }, k2.set(e3.code, r4), ee2 += 1);
        let i4 = T2[e3.rowKey] ?? {}, a5 = [.../* @__PURE__ */ new Set([...Object.keys(e3.defaultByTrainer), ...Object.keys(i4)])].filter((t4) => (i4[t4] ?? e3.defaultByTrainer[t4] ?? 0) > 0), o5 = {};
        a5.forEach((t4) => {
          o5[t4] = i4[t4] ?? e3.defaultByTrainer[t4] ?? 0;
        });
        let s4 = [], c4 = {};
        if (d2) {
          let t4 = E2[e3.rowKey] ?? {};
          s4 = [.../* @__PURE__ */ new Set([...Object.keys(e3.defaultByRoom), ...Object.keys(t4)])].filter((n5) => (t4[n5] ?? e3.defaultByRoom[n5] ?? 0) > 0), s4.forEach((n5) => {
            c4[n5] = t4[n5] ?? e3.defaultByRoom[n5] ?? 0;
          });
        }
        r4.parts.push({ part: e3.part, kind: t3, rowKey: e3.rowKey, lectures: n4, sections: e3.targetSections, trainees: e3.trainees, trainerKeys: a5, quotaByTrainer: o5, roomKeys: s4, quotaByRoom: c4 });
      }
      let te2 = [...k2.values()].sort((e3, t3) => e3.level - t3.level || e3.code.localeCompare(t3.code, `ar`));
      return te2.length ? { specialty: a4, ready: true, reason: ``, courses: te2, generalCourses: x2, offGridParts: O2, trainerName: o4, roomName: u2 } : { specialty: a4, ready: false, reason: `لا مقررات تخصصية قابلة للجدولة — راجع تبويبَي \xABإسناد الشُّعب\xBB و\xABتخطيط الشُّعب\xBB.`, courses: [], generalCourses: x2, offGridParts: O2, trainerName: o4, roomName: u2 };
    }, [e2, s3, t2, n3, r3, i3, c3, l3, d2, f2, p2, m2, h2]);
  }
  function ca(e2, t2, n3) {
    let r3 = new Set(n3.filter((e3) => e3 >= 0 && e3 < t2)), i3 = Array.from({ length: t2 }, (e3, t3) => t3).filter((e3) => !r3.has(e3));
    i3.length === 0 && (i3 = Array.from({ length: t2 }, (e3, t3) => t3), r3.clear());
    let a3 = [];
    for (let n4 = 0; n4 < e2; n4++) for (let e3 of i3) a3.push(n4 * t2 + e3);
    return { hiddenSet: r3, visP: i3, VNP: i3.length, firstVisP: i3[0], slots: a3 };
  }
  var la = (e2, t2) => e2.some((e3) => e3.some((e4) => t2.has(e4)));
  var ua = (e2) => e2.cap == null ? 1 / 0 : Math.max(0, e2.cap - (e2.enrolled ?? 0));
  function da(e2, t2, n3, r3, i3 = {}) {
    let a3 = {}, o3 = {}, s3 = (e3) => o3[e3] ?? (o3[e3] = Array(n3.get(e3)?.length ?? 0).fill(0)), c3 = [], l3 = (e3, t3, n4) => [...n4].sort((n5, r4) => {
      let i4 = t3[n5] < ua(e3[n5]) ? 0 : 1, a4 = t3[r4] < ua(e3[r4]) ? 0 : 1;
      if (i4 !== a4) return i4 - a4;
      if (i4 === 0) {
        if (t3[n5] !== t3[r4]) return t3[r4] - t3[n5];
      } else if (t3[n5] !== t3[r4]) return t3[n5] - t3[r4];
      return (e3[n5].kind === `spec` ? 0 : 1) - (e3[r4].kind === `spec` ? 0 : 1) || n5 - r4;
    });
    e2.forEach((e3) => {
      e3.trainees.forEach(({ id: o4 }) => {
        let u3 = t2.filter((e4) => r3[e4]?.has(o4) && n3.has(e4));
        if (!u3.length) return;
        let d2 = new Set(i3.busyOf?.(o4) ?? []), f2 = [];
        if (u3.forEach((e4) => {
          let t3 = n3.get(e4), r4 = i3.lockedSection?.(o4, e4) ?? null;
          r4 != null && r4 >= 0 && r4 < t3.length ? ((a3[e4] ??= {})[o4] = r4, s3(e4)[r4] += 1, t3[r4].blocks.forEach((e5) => e5.forEach((e6) => d2.add(e6)))) : f2.push(e4);
        }), !f2.length) return;
        let p2 = /* @__PURE__ */ new Map();
        f2.forEach((e4) => {
          let t3 = n3.get(e4), r4 = s3(e4), a4 = t3.map((e5, t4) => t4).filter((e5) => (!i3.specOnly || t3[e5].kind === `spec`) && !la(t3[e5].blocks, d2));
          p2.set(e4, l3(t3, r4, a4));
        }), f2.sort((e4, t3) => p2.get(e4).length - p2.get(t3).length || e4.localeCompare(t3));
        let m2 = f2.length, h2 = Array(m2).fill(-1), g2 = null, _2 = -1, v2 = new Set(d2), y2 = (e4, t3) => {
          if (_2 === m2 || t3 + (m2 - e4) <= _2) return;
          if (e4 === m2) {
            t3 > _2 && (_2 = t3, g2 = [...h2]);
            return;
          }
          let r4 = n3.get(f2[e4]);
          for (let n4 of p2.get(f2[e4])) if (!la(r4[n4].blocks, v2) && (r4[n4].blocks.forEach((e5) => e5.forEach((e6) => v2.add(e6))), h2[e4] = n4, y2(e4 + 1, t3 + 1), h2[e4] = -1, r4[n4].blocks.forEach((e5) => e5.forEach((e6) => v2.delete(e6))), _2 === m2)) return;
          y2(e4 + 1, t3);
        };
        y2(0, 0);
        for (let t3 = 0; t3 < m2; t3++) {
          let n4 = f2[t3], r4 = g2 ? g2[t3] : -1;
          r4 >= 0 ? ((a3[n4] ??= {})[o4] = r4, s3(n4)[r4] += 1) : c3.push({ code: n4, group: e3.group, tid: o4 });
        }
      });
    });
    let u2 = /* @__PURE__ */ new Map();
    return c3.forEach((e3) => {
      let t3 = e3.code + `\0` + e3.group, n4 = u2.get(t3);
      n4 ? n4.count += 1 : u2.set(t3, { code: e3.code, group: e3.group, count: 1, sample: e3.tid });
    }), { map: a3, unplaced: [...u2.values()] };
  }
  var fa = [`الأحد`, `الاثنين`, `الثلاثاء`, `الأربعاء`, `الخميس`];
  var pa = (e2) => {
    let t2 = 0;
    for (let n3 = 0; n3 < e2.length; n3++) t2 = Math.imul(t2, 31) + e2.charCodeAt(n3) | 0;
    return Math.abs(t2);
  };
  var ma = { ح: 0, ن: 1, ث: 2, ر: 3, خ: 4 };
  var ha = (e2) => {
    let t2 = /* @__PURE__ */ new Set();
    if (fa.forEach((n3, r3) => {
      e2.includes(n3) && t2.add(r3);
    }), !t2.size) for (let n3 of e2) {
      let e3 = ma[n3];
      e3 != null && t2.add(e3);
    }
    return [...t2].sort((e3, t3) => e3 - t3);
  };
  var ga = (e2) => {
    let t2 = e2.match(/(\d{3,4})\s*-\s*(\d{3,4})/);
    if (!t2) return null;
    let n3 = t2[1].padStart(4, `0`);
    return parseInt(n3.slice(0, 2), 10) * 60 + parseInt(n3.slice(2), 10);
  };
  function _a() {
    let e2 = sa(), t2 = Di(), n3 = e2.specialty, r3 = wr((e3) => e3.periods), i3 = wr((e3) => e3.hiddenPeriods), a3 = wr((e3) => e3.generalConfig), o3 = wr((e3) => e3.generalTraineeSection), s3 = wr((e3) => e3.traineeSectionOverride), c3 = wr((e3) => e3.importSs01Rows), l3 = wr((e3) => e3.ss01Rows), d2 = wr((e3) => e3.generalLock), f2 = wr((e3) => e3.timetable), p2 = wr((e3) => e3.schedulingMode), m2 = z((e3) => e3.treatRegisteredAsCompleted);
    return (0, u.useMemo)(() => {
      let u2 = (e3) => ({ ready: false, reason: e3, specialty: n3, hasGeneralOverrides: false, genConflictCount: 0, days: fa, NP: 1, periods: [], VNP: 1, firstVisP: 0, slots: [], generalRows: [], specRows: [], genNSpecByCode: {}, genSections: /* @__PURE__ */ new Map(), genEffOf: () => -1, specBusyOf: () => void 0 });
      if (!e2.ready || !t2) return u2(e2.reason || `ارفع بيانات المصفوفة والإسناد أولًا.`);
      let h2 = Math.max(1, r3.length), { VNP: g2, firstVisP: _2, slots: v2 } = ca(fa.length, h2, i3), y2 = a3[n3] ?? {}, b2 = (e3) => {
        let t3 = 0, n4 = 1 / 0;
        return r3.forEach((r4, i4) => {
          let a4 = Math.abs(tr(r4.start) - e3);
          a4 < n4 && (n4 = a4, t3 = i4);
        }), t3;
      }, x2 = (e3) => {
        let t3 = ha(e3.day), n4 = Qn(e3.time);
        if (n4 == null || !t3.length) return [];
        let r4 = ga(e3.time), i4 = b2(n4), a4 = Math.min(r4 == null ? 1 : Math.max(1, Math.round((r4 - n4) / 50)), h2 - i4);
        return t3.map((e4) => Array.from({ length: a4 }, (t4, n5) => e4 * h2 + i4 + n5));
      }, S2 = (e3) => {
        let t3 = /* @__PURE__ */ new Set();
        return e3.filter((e4) => {
          let n4 = e4.join(`,`);
          return t3.has(n4) ? false : (t3.add(n4), true);
        });
      }, C2 = /* @__PURE__ */ new Map(), w2 = /* @__PURE__ */ new Map();
      [l3, c3].forEach((e3) => e3.forEach((e4) => {
        e4.crn && (w2.set(e4.crn, Math.max(w2.get(e4.crn) ?? 0, e4.enrolled || 0)), e4.capacity > 0 && C2.set(e4.crn, Math.max(C2.get(e4.crn) ?? 0, e4.capacity)));
      }));
      let T2 = /* @__PURE__ */ new Map();
      if (c3.length) {
        let t3 = new Set(e2.generalCourses.map((e3) => lt(e3.code)));
        c3.forEach((e3) => {
          if (!e3.crn) return;
          let n4 = lt(e3.courseCode);
          if (!t3.has(n4)) return;
          let r4 = T2.get(n4);
          r4 || T2.set(n4, r4 = /* @__PURE__ */ new Map()), (r4.get(e3.crn) ?? r4.set(e3.crn, []).get(e3.crn)).push(e3);
        });
      }
      let E2 = /* @__PURE__ */ new Map(), D2 = /* @__PURE__ */ new Map(), O2 = new Map(e2.generalCourses.map((e3) => [e3.code, e3]));
      new Set(e2.generalCourses.map((e3) => e3.code)).forEach((t3) => {
        let n4 = e2.generalCourses.filter((e3) => e3.code === t3).flatMap((e3) => y2[e3.key]?.sectionList ?? []), r4 = n4.filter((e3) => !e3.canceled && e3.meetingSlots.length).map((e3, t4) => ({ blocks: e3.meetingSlots, kind: `spec`, label: `شعبة ${t4 + 1}`, ref: e3.ref || void 0, cap: e3.ref ? C2.get(e3.ref) : void 0, enrolled: e3.ref ? w2.get(e3.ref) : void 0 })), i4 = new Set(n4.map((e3) => e3.ref).filter(Boolean)), a4 = T2.get(lt(t3)), o4 = a4 ? [...a4.entries()].filter(([e3]) => !i4.has(e3)).sort((e3, t4) => e3[0].localeCompare(t4[0])).map(([e3, t4]) => ({ blocks: S2(t4.flatMap((e4) => x2(e4)).filter((e4) => e4.length)), kind: `other`, label: e3, ref: e3, cap: C2.get(e3), enrolled: w2.get(e3) })).filter((e3) => e3.blocks.length) : [], s4 = [...r4, ...o4];
        s4.length && (E2.set(t3, s4), D2.set(t3, r4.length));
      });
      let k2 = o3[n3] ?? {}, ee2 = (() => {
        if (!E2.size) return {};
        let e3 = d2[n3] ?? {}, r4 = (t3, n4) => {
          if (!e3[n4]?.includes(t3)) return null;
          let r5 = E2.get(n4);
          if (!r5) return null;
          let i4 = k2[n4]?.[t3];
          if (i4 != null && i4 >= 0 && i4 < r5.length) return i4;
          let a4 = D2.get(n4) ?? r5.length;
          return a4 > 0 ? pa(t3 + `|` + n4) % a4 : 0;
        };
        return da([...Ii(t2.model, t2.trainees, t2.plan, m2)].sort((e4, t3) => t3.count - e4.count), [...E2.keys()], E2, t2.model.courseTraineesMap, { lockedSection: r4 }).map;
      })(), te2 = (e3, t3, n4, r4) => {
        let i4 = k2[t3]?.[e3];
        if (i4 != null && i4 >= 0 && i4 < n4.length) return i4;
        let a4 = ee2[t3]?.[e3];
        return a4 != null && a4 >= 0 && a4 < n4.length ? a4 : r4 > 0 ? pa(e3 + `|` + t3) % r4 : 0;
      }, ne2 = (e3, t3) => {
        let n4 = E2.get(t3);
        return n4 ? te2(e3, t3, n4, D2.get(t3) ?? n4.length) : -1;
      }, re2 = t2.model.courseTraineesMap, ie2 = /* @__PURE__ */ new Map(), ae2 = /* @__PURE__ */ new Map(), A2 = /* @__PURE__ */ new Map(), j2 = (e3, t3) => {
        let n4 = e3.get(t3);
        return n4 || e3.set(t3, n4 = /* @__PURE__ */ new Set()), n4;
      };
      t2.model.sortedTraineeIds.forEach((e3) => {
        (t2.model.traineeExpected[e3]?.courses ?? []).forEach((t3) => {
          let n4 = E2.get(t3);
          if (!n4) return;
          let r4 = te2(e3, t3, n4, D2.get(t3) ?? n4.length), i4 = A2.get(t3 + `|` + r4);
          i4 || A2.set(t3 + `|` + r4, i4 = /* @__PURE__ */ new Set()), i4.add(e3);
          let a4 = j2(ie2, e3), o4 = j2(ae2, e3);
          n4[r4].blocks.forEach((e4) => e4.forEach((e5) => {
            a4.has(e5) ? o4.add(e5) : a4.add(e5);
          }));
        });
      });
      let oe2 = 0;
      ae2.forEach((e3) => {
        e3.size && oe2++;
      });
      let se2 = [];
      [...E2.entries()].forEach(([e3, t3]) => {
        let n4 = O2.get(e3);
        t3.forEach((t4, r4) => {
          let i4 = A2.get(e3 + `|` + r4) ?? /* @__PURE__ */ new Set(), a4 = t4.blocks.filter((e4) => e4.length).map((e4) => {
            let t5 = 0;
            return i4.forEach((n5) => {
              let r5 = ae2.get(n5);
              r5 && e4.some((e5) => r5.has(e5)) && t5++;
            }), { start: e4[0], len: e4.length, clash: t5 };
          });
          a4.length && se2.push({ key: e3 + `|` + r4, code: e3, name: n4?.name ?? e3, level: n4?.level ?? 0, sectionLabel: t4.label, ref: t4.ref, cap: t4.cap, enrolled: t4.enrolled, isOther: t4.kind === `other`, members: i4.size, memberIds: [...i4], blocks: a4 });
        });
      }), se2.sort((e3, t3) => e3.level - t3.level || e3.code.localeCompare(t3.code, `ar`) || !!e3.isOther - +!!t3.isOther || e3.sectionLabel.localeCompare(t3.sectionLabel, `ar`, { numeric: true }));
      let ce2 = fa.length * h2, le2 = Wi(e2.courses, re2, t2.model.sortedTraineeIds, s3[n3] ?? {}), ue2 = /* @__PURE__ */ new Map(), de2 = f2[sr(n3, p2[n3] ?? `tracks`)] ?? {};
      Object.entries(de2).forEach(([e3, t3]) => {
        if (!t3.slots.length || e3.startsWith(`INS|`)) return;
        let [n4, r4, i4] = e3.split(`|`);
        (le2.get(n4 + `|` + r4)?.members[Number(i4)] ?? []).forEach((e4) => {
          let n5 = ue2.get(e4);
          n5 || ue2.set(e4, n5 = /* @__PURE__ */ new Set()), t3.slots.forEach((e5) => n5.add(e5));
        });
      });
      let fe2 = (e3) => ue2.get(e3), M2 = [];
      e2.courses.forEach((e3) => {
        e3.parts.forEach((t3) => {
          if (t3.sections <= 0) return;
          let n4 = le2.get(e3.code + `|` + t3.part);
          if (!n4) return;
          let r4 = t3.sections > 1;
          for (let i4 = 0; i4 < t3.sections; i4++) {
            let a4 = n4.members[i4], o4 = Array(ce2).fill(0);
            a4.forEach((e4) => {
              let t4 = ie2.get(e4);
              t4 && t4.forEach((e5) => {
                e5 >= 0 && e5 < ce2 && o4[e5]++;
              });
            });
            let s4 = 0;
            v2.forEach((e4) => {
              o4[e4] === 0 && s4++;
            }), M2.push({ key: e3.code + `|` + t3.part + `|` + i4, code: e3.code, name: e3.name, level: e3.level, part: t3.part, sectionLabel: r4 ? `ش${i4 + 1}` : ``, total: a4.length, heat: o4, clearCount: s4 });
          }
        });
      }), M2.sort((e3, t3) => e3.level - t3.level || e3.code.localeCompare(t3.code, `ar`) || (e3.part === `نظري` ? 0 : 1) - (t3.part === `نظري` ? 0 : 1) || e3.sectionLabel.localeCompare(t3.sectionLabel, `ar`));
      let pe2 = {};
      return D2.forEach((e3, t3) => {
        pe2[t3] = e3;
      }), { ready: true, reason: ``, specialty: n3, hasGeneralOverrides: Object.keys(k2).length > 0, genConflictCount: oe2, days: fa, NP: h2, periods: r3, VNP: g2, firstVisP: _2, slots: v2, generalRows: se2, specRows: M2, genNSpecByCode: pe2, genSections: E2, genEffOf: ne2, specBusyOf: fe2 };
    }, [e2, t2, r3, i3, a3, o3, s3, c3, l3, d2, f2, p2, m2, n3]);
  }
  function va() {
    let e2 = sa(), t2 = Di(), n3 = _a(), r3 = wr((e3) => e3.timetable), i3 = wr((e3) => e3.traineeSectionOverride);
    return (0, u.useMemo)(() => {
      let a3 = /* @__PURE__ */ new Map();
      if (!t2) return a3;
      let o3 = (e3, t3, n4) => {
        let r4 = a3.get(e3);
        r4 || a3.set(e3, r4 = /* @__PURE__ */ new Map()), r4.has(t3) || r4.set(t3, n4);
      };
      if (e2.ready) {
        let n4 = e2.specialty, a4 = r3[sr(n4, `trainee`)] ?? {};
        Object.keys(a4).length && Gi(e2.courses, t2.model.courseTraineesMap, t2.model.sortedTraineeIds, i3[n4] ?? {}, (e3) => !!a4[e3]).forEach((e3, t3) => e3.forEach((e4, n5) => o3(t3, n5, e4)));
      }
      if (n3.ready) {
        let e3 = t2.model.courseTraineesMap;
        for (let t3 of n3.genSections.keys()) {
          let r4 = e3[t3];
          r4 && r4.forEach((e4) => {
            n3.genEffOf(e4, t3) >= 0 && o3(e4, t3, `full`);
          });
        }
      }
      return a3;
    }, [e2, t2, n3, r3, i3]);
  }
  function ya() {
    let e2 = sa(), t2 = Di(), n3 = _a(), r3 = wr((e3) => e3.timetable), i3 = wr((e3) => e3.traineeSectionOverride);
    return (0, u.useMemo)(() => {
      let a3 = /* @__PURE__ */ new Map();
      if (!t2 || !e2.ready) return a3;
      let o3 = e2.specialty, s3 = r3[sr(o3, `trainee`)] ?? {};
      if (!(Object.keys(s3).length > 0) && !n3.ready) return a3;
      let c3 = t2.model.courseTraineesMap, l3 = t2.model.sortedTraineeIds, u2 = Wi(e2.courses, c3, l3, i3[o3] ?? {}), d2 = (e3) => s3[e3]?.slots ?? [], f2 = /* @__PURE__ */ new Map(), p2 = (e3, t3) => {
        let n4 = f2.get(e3);
        n4 || f2.set(e3, n4 = /* @__PURE__ */ new Set()), n4.add(t3);
      };
      if (u2.forEach((e3) => {
        e3.members.forEach((t3, n4) => {
          let r4 = d2(`${e3.code}|${e3.part}|${n4}`);
          r4.length && t3.forEach((e4) => r4.forEach((t4) => p2(e4, t4)));
        });
      }), n3.ready) for (let [e3, t3] of n3.genSections) {
        let r4 = c3[e3];
        r4 && r4.forEach((r5) => {
          let i4 = n3.genEffOf(r5, e3);
          i4 >= 0 && t3[i4] && t3[i4].blocks.forEach((e4) => e4.forEach((e5) => p2(r5, e5)));
        });
      }
      let m2 = /* @__PURE__ */ new Set();
      for (let r4 of l3) {
        let i4 = t2.trainees[r4];
        if (!i4) continue;
        let o4 = f2.get(r4) ?? m2;
        for (let n4 of e2.courses) {
          let e3 = n4.code, s4 = i4.courses[e3];
          if (s4 === `completed` || s4 === `registered` || s4 === `current` || c3[e3]?.has(r4) || Ai(e3, i4, t2.plan)) continue;
          let l4 = false, u3 = false;
          for (let t3 of n4.parts) {
            if (t3.sections <= 0) continue;
            let n5 = false, r5 = false;
            for (let i5 = 0; i5 < t3.sections; i5++) {
              let a4 = d2(`${e3}|${t3.part}|${i5}`);
              if (a4.length && (n5 = true, !a4.some((e4) => o4.has(e4)))) {
                r5 = true;
                break;
              }
            }
            if (n5 && (l4 = true, !r5)) {
              u3 = true;
              break;
            }
          }
          if (!l4) continue;
          let f3 = a3.get(r4);
          f3 || a3.set(r4, f3 = /* @__PURE__ */ new Map()), f3.set(e3, u3 ? `conflict` : `free`);
        }
        if (n3.ready) for (let [e3, s4] of n3.genSections) {
          let n4 = i4.courses[e3];
          if (n4 === `completed` || n4 === `registered` || n4 === `current` || c3[e3]?.has(r4) || Ai(e3, i4, t2.plan)) continue;
          let l4 = false, u3 = false;
          for (let e4 of s4) {
            let t3 = e4.blocks.flat();
            if (t3.length && (l4 = true, !t3.some((e5) => o4.has(e5)))) {
              u3 = true;
              break;
            }
          }
          if (!l4) continue;
          let d3 = a3.get(r4);
          d3 || a3.set(r4, d3 = /* @__PURE__ */ new Map()), d3.set(e3, u3 ? `free` : `conflict`);
        }
      }
      return a3;
    }, [e2, t2, n3, r3, i3]);
  }
  function ba(e2) {
    return !e2 || !e2.size ? `` : [...e2.entries()].map(([e3, t2]) => `${e3}:${t2}`).sort().join(`,`);
  }
  function xa(e2) {
    let t2 = z((e3) => e3.treatRegisteredAsCompleted), n3 = z((e3) => e3.gpaDangerThreshold), r3 = z((e3) => e3.gpaWarningThreshold), i3 = z((e3) => e3.sf08), a3 = z((e3) => e3.registrationPhase), o3 = va(), s3 = ya(), c3 = (0, u.useRef)(/* @__PURE__ */ new Map()), l3 = i3 !== null;
    return (0, u.useMemo)(() => {
      if (!e2) return [];
      let { model: i4, plan: u2, trainees: d2, specialtyEdits: f2, specialty: p2 } = e2, m2 = c3.current, h2 = /* @__PURE__ */ new Map(), g2 = i4.sortedTraineeIds.map((e3) => {
        let c4 = d2[e3], g3 = f2[e3], _2 = i4.traineeExpected[e3], v2 = i4.traineeStats[e3], y2 = i4.traineePureAlgo[e3], b2 = i4.traineeRayat[e3], x2 = o3.get(e3), S2 = s3.get(e3), C2 = [p2, e3, +!!t2, a3, _2?.courses.join(`,`) ?? ``, v2?.remaining ?? ``, v2?.registered ?? ``, g3 ? [...g3.overrides].sort().join(`,`) : ``, g3 ? [...g3.removals].sort().join(`,`) : ``, i4.sortedCourses.length, n3, r3, l3 ? `on` : `off`, l3 && y2 ? [...y2].sort().join(`,`) : ``, l3 && b2 ? [...b2].sort().join(`,`) : ``, ba(x2), ba(S2)].join(`|`), w2 = m2.get(e3);
        if (w2 && w2.key === C2) return h2.set(e3, w2), w2.row;
        let T2 = Ni({ traineeId: e3, trainee: c4, model: i4, plan: u2, edits: g3, treatRegisteredAsCompleted: t2, gpaDanger: n3, gpaWarning: r3, pureAlgoSet: y2, rayatSet: b2, sf08Loaded: l3, registrationPhase: a3, scheduledExpected: x2, addable: S2 });
        return h2.set(e3, { key: C2, row: T2 }), T2;
      });
      return c3.current = h2, g2;
    }, [e2, t2, l3, n3, r3, a3, o3, s3]);
  }
  var Sa = { expected: 1, registered: 2, blocked: 3, completed: 4, notregistered: 5 };
  function Ca(e2, t2, n3, r3) {
    switch (t2) {
      case `group`:
        return e2.group;
      case `name`:
        return e2.name;
      case `id`:
        return e2.traineeId;
      case `gpa`:
        return String(e2.gpa);
      case `remainingAfter`:
        return String(e2.remainingAfter);
      case `expected`: {
        let t3 = e2.expectedCredits;
        return t3 < n3 ? `low` : t3 > r3 ? `high` : `normal`;
      }
      case `remaining`:
        return String(e2.remaining);
      case `registered`:
        return String(e2.registered);
      default:
        return ``;
    }
  }
  function wa(e2, t2) {
    let n3 = e2.registered, r3 = e2.effectiveExpectedCredits;
    return n3 === 0 && r3 > 0 ? `unregistered` : n3 > 0 && n3 < t2 && r3 >= t2 ? `underMin` : n3 > 0 && r3 > n3 ? `incomplete` : n3 > 0 && e2.registeredOutsideExpected ? `offPlan` : `complete`;
  }
  function Ta(e2, t2) {
    let n3 = { all: e2.length, unregistered: 0, underMin: 0, incomplete: 0, offPlan: 0, complete: 0 };
    for (let r3 of e2) n3[wa(r3, t2)]++;
    return n3;
  }
  function Ea(e2, t2) {
    let n3 = e2;
    if (t2.activeConflictFilter) {
      let { course1: e3, course2: r4 } = t2.activeConflictFilter;
      n3 = n3.filter((n4) => {
        let i4 = t2.traineeExpected[n4.traineeId];
        return i4?.courses.includes(e3) === true && i4.courses.includes(r4);
      });
    }
    if (t2.groupFilterTraineeIds?.length) {
      let e3 = new Set(t2.groupFilterTraineeIds);
      n3 = n3.filter((t3) => e3.has(t3.traineeId));
    }
    let r3 = t2.searchQuery.trim().toLowerCase();
    r3 && (n3 = n3.filter((e3) => e3.name.toLowerCase().includes(r3) || e3.traineeId.toLowerCase().includes(r3)));
    let i3 = Object.entries(t2.courseFilters);
    i3.length && (n3 = n3.filter((e3) => i3.every(([t3, n4]) => e3.courseStatuses[Number(t3)] === n4)));
    let a3 = Object.entries(t2.fieldFilters);
    if (a3.length && (n3 = n3.filter((e3) => a3.every(([n4, r4]) => r4.includes(Ca(e3, n4, t2.lowExpectedCreditsThreshold, t2.highExpectedCreditsThreshold))))), t2.hideGraduates && (n3 = n3.filter((e3) => e3.remaining !== 0)), t2.registrationStatusFilter !== `all`) {
      let e3 = t2.registrationStatusFilter;
      n3 = n3.filter((n4) => wa(n4, t2.minTermCredits) === e3);
    }
    if (t2.sortCourseIdx !== null) {
      let e3 = t2.sortCourseIdx;
      n3 = [...n3].sort((n4, r4) => {
        let i4 = Sa[n4.courseStatuses[e3]] || 9, a4 = Sa[r4.courseStatuses[e3]] || 9;
        return t2.sortOrder === `asc` ? i4 - a4 : a4 - i4;
      });
    } else if (t2.sortField) {
      let e3 = t2.sortField;
      n3 = [...n3].sort((n4, r4) => {
        switch (e3) {
          case `id`:
            return t2.sortOrder === `asc` ? n4.traineeId.localeCompare(r4.traineeId) : r4.traineeId.localeCompare(n4.traineeId);
          case `name`:
            return t2.sortOrder === `asc` ? n4.name.localeCompare(r4.name, `ar`) : r4.name.localeCompare(n4.name, `ar`);
          case `group`:
            return t2.sortOrder === `asc` ? n4.group.localeCompare(r4.group, `ar`) : r4.group.localeCompare(n4.group, `ar`);
          default: {
            let i4 = (t3) => {
              switch (e3) {
                case `remaining`:
                  return t3.remaining;
                case `remainingAfter`:
                  return t3.remainingAfter;
                case `registered`:
                  return t3.registered;
                case `expected`:
                  return t3.expectedCredits;
                case `gpa`:
                  return t3.gpa;
                default:
                  return 0;
              }
            };
            return t2.sortOrder === `asc` ? i4(n4) - i4(r4) : i4(r4) - i4(n4);
          }
        }
      });
    }
    return n3;
  }
  function Da(e2, t2) {
    let n3 = z((e3) => e3.searchQuery), r3 = z((e3) => e3.hideGraduates), i3 = z((e3) => e3.courseFilters), a3 = z((e3) => e3.fieldFilters), o3 = z((e3) => e3.activeConflictFilter), s3 = z((e3) => e3.groupFilterTraineeIds), c3 = z((e3) => e3.highExpectedCreditsThreshold), l3 = z((e3) => e3.minTermCredits);
    return (0, u.useMemo)(() => Ta(Ea(t2, { searchQuery: n3, hideGraduates: r3, registrationStatusFilter: `all`, minTermCredits: l3, courseFilters: i3, fieldFilters: a3, sortField: null, sortOrder: `asc`, sortCourseIdx: null, activeConflictFilter: o3, groupFilterTraineeIds: s3, lowExpectedCreditsThreshold: l3, highExpectedCreditsThreshold: c3, traineeExpected: e2?.model.traineeExpected ?? {} }), l3), [t2, n3, r3, l3, i3, a3, o3, s3, c3, e2]);
  }
  function Oa({ ctx: e2 }) {
    let t2 = Da(e2, xa(e2)), n3 = z((e3) => e3.registrationStatusFilter), r3 = z((e3) => e3.setRegistrationStatusFilter), i3 = z((e3) => e3.minTermCredits), a3 = t2.all, o3 = (e3) => a3 > 0 ? Math.round(e3 / a3 * 100) : 0, s3 = [{ key: `all`, label: `الكل`, title: `إظهار جميع المتدربين` }, { key: `unregistered`, label: `غير مسجّل`, dot: `var(--danger)`, title: `لم يسجّل أي مقرر بينما لديه مقررات متوقّعة` }, { key: `underMin`, label: `أقل من ${i3} ساعة`, dot: `var(--warning)`, title: `سجّل أقل من الحد الأدنى (${i3} ساعة) والمتوقّع المتاح له يبلغ ${i3} ساعة أو أكثر` }, { key: `incomplete`, label: `لم يكتمل تسجيله`, dot: `#4a90d9`, title: `بلغ الحدّ الأدنى لكن بقيت له مقررات متوقّعة لم يسجّلها (لا يشمل غير المسجّل ولا الأقل من الحد)` }, { key: `offPlan`, label: `لم يلتزم بالمخطط له`, dot: `#9b7cc9`, title: `سجّل مقرراً خارج المخطَّط له (خارج المتوقّع بعد تعديلاتك) — يظهر هنا من لا نقص ساعات لديه` }, { key: `complete`, label: `مكتمِل`, dot: `var(--success)`, title: `بلغ مخطّطه دون نقص ولا خروج عنه (أو خريج)` }], c3 = { all: t2.all, unregistered: t2.unregistered, underMin: t2.underMin, incomplete: t2.incomplete, offPlan: t2.offPlan, complete: t2.complete };
    return (0, H.jsx)(`div`, { className: G.statusChips, role: `group`, "aria-label": `تصفية حسب حالة التسجيل`, children: s3.map((e3) => {
      let t3 = n3 === e3.key, i4 = c3[e3.key], a4 = i4 === 0 && e3.key !== `all`;
      return (0, H.jsxs)(`button`, { type: `button`, className: `${G.statusChip} ${t3 ? G.statusChipActive : ``} ${a4 ? G.statusChipZero : ``}`, onClick: () => r3(t3 ? `all` : e3.key), "aria-pressed": t3, title: e3.title, children: [e3.dot && (0, H.jsx)(`span`, { className: G.statusDot, style: { background: e3.dot } }), (0, H.jsx)(`span`, { children: e3.label }), (0, H.jsxs)(`span`, { className: G.statusMeta, children: [i4, ` \xB7 `, o3(i4), `%`] })] }, e3.key);
    }) });
  }
  var ka = [{ id: `unregistered_expected`, label: `متبقّي لم يسجّل`, requiresPhase2: true }, { id: `conflict`, label: `تعارض` }, { id: `registered_sh06`, label: `المسجلون (SH06)` }, { id: `registered_sf01`, label: `المسجلون (SF01)`, requiresSf01: true }, { id: `expected`, label: `المتوقعون` }, { id: `level`, label: `المستوى` }, { id: `credits`, label: `و.م` }, { id: `theory`, label: `نظري` }, { id: `practical`, label: `عملي` }, { id: `code`, label: `رمز المقرر` }, { id: `name`, label: `اسم المقرر` }];
  var Aa = [{ id: `seq`, label: `#` }, { id: `group`, label: `المجموعة` }, { id: `name`, label: `الاسم` }, { id: `id`, label: `الرقم التدريبي` }, { id: `remainingAfter`, label: `ساعات بعد المتوقع` }, { id: `expected`, label: `ساعات متوقعة` }, { id: `remaining`, label: `ساعات متبقية` }, { id: `registered`, label: `ساعات مسجلة` }, { id: `gpa`, label: `المعدل` }];
  function ja({ onClose: e2 }) {
    let t2 = z((e3) => e3.sf01File), n3 = z((e3) => e3.registrationPhase) === `open`, r3 = z((e3) => e3.hiddenHeaderRows), i3 = z((e3) => e3.setHiddenHeaderRows), a3 = z((e3) => e3.hiddenHeaderColumns), o3 = z((e3) => e3.setHiddenHeaderColumns), [s3, c3] = (0, u.useState)(`rows`), l3 = ka.filter((e3) => (!e3.requiresSf01 || !!t2) && (!e3.requiresPhase2 || n3)), d2 = (e3) => {
      if (r3.includes(e3)) i3(r3.filter((t3) => t3 !== e3)), B(`تم إظهار صف الترويسة`, `success`);
      else {
        if (r3.length + 1 >= l3.length) {
          B(`يجب إبقاء صف واحد على الأقل ظاهراً`, `warning`);
          return;
        }
        i3([...r3, e3]), B(`تم إخفاء صف الترويسة`, `info`);
      }
    }, f2 = (e3) => {
      if (a3.includes(e3)) o3(a3.filter((t3) => t3 !== e3)), B(`تم إظهار العمود`, `success`);
      else {
        if (a3.length + 1 >= Aa.length) {
          B(`يجب إبقاء عمود واحد على الأقل ظاهراً`, `warning`);
          return;
        }
        o3([...a3, e3]), B(`تم إخفاء العمود`, `info`);
      }
    };
    return (0, H.jsx)(Yr, { title: `إعدادات إظهار وإخفاء الصفوف والأعمدة`, onClose: e2, children: (0, H.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: `var(--sp-4)`, minWidth: `320px` }, children: [(0, H.jsxs)(`div`, { style: { display: `flex`, gap: `2px`, borderBottom: `1px solid var(--border)`, paddingBottom: `2px` }, children: [(0, H.jsx)(`button`, { onClick: () => c3(`rows`), style: { padding: `6px 16px`, fontWeight: 700, fontSize: `var(--fs-sm)`, cursor: `pointer`, background: s3 === `rows` ? `var(--primary-subtle)` : `transparent`, color: s3 === `rows` ? `var(--primary)` : `var(--text-muted)`, border: `none`, borderBottom: s3 === `rows` ? `2px solid var(--primary)` : `none`, borderRadius: `var(--radius-sm) var(--radius-sm) 0 0` }, children: `الصفوف` }), (0, H.jsx)(`button`, { onClick: () => c3(`columns`), style: { padding: `6px 16px`, fontWeight: 700, fontSize: `var(--fs-sm)`, cursor: `pointer`, background: s3 === `columns` ? `var(--primary-subtle)` : `transparent`, color: s3 === `columns` ? `var(--primary)` : `var(--text-muted)`, border: `none`, borderBottom: s3 === `columns` ? `2px solid var(--primary)` : `none`, borderRadius: `var(--radius-sm) var(--radius-sm) 0 0` }, children: `أعمدة المعلومات` })] }), s3 === `rows` ? (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(`p`, { style: { fontSize: `var(--fs-sm)`, color: `var(--text-secondary)` }, children: `اختر الصفوف التي ترغب في إظهارها في ترويسة الجدول لتسهيل القراءة وتوفير المساحة:` }), (0, H.jsx)(`div`, { style: { display: `grid`, gridTemplateColumns: `1fr 1fr`, gap: `var(--sp-3)`, padding: `var(--sp-2) 0` }, children: l3.map((e3) => {
      let t3 = !r3.includes(e3.id);
      return (0, H.jsxs)(`label`, { style: { display: `flex`, alignItems: `center`, gap: `var(--sp-2)`, cursor: `pointer`, fontSize: `var(--fs-md)`, fontWeight: 600, color: t3 ? `var(--text-primary)` : `var(--text-muted)` }, children: [(0, H.jsx)(`input`, { type: `checkbox`, checked: t3, onChange: () => d2(e3.id), style: { width: `16px`, height: `16px`, cursor: `pointer` } }), (0, H.jsx)(`span`, { children: e3.label })] }, e3.id);
    }) }), (0, H.jsxs)(`div`, { style: { borderTop: `1px solid var(--border)`, paddingTop: `var(--sp-3)`, display: `flex`, gap: `var(--sp-2)`, justifyContent: `space-between` }, children: [(0, H.jsxs)(`div`, { style: { display: `flex`, gap: `var(--sp-2)` }, children: [(0, H.jsx)(`button`, { className: V.ghostButton, onClick: () => {
      i3([]), B(`تم إظهار جميع الصفوف`, `success`);
    }, style: { fontSize: `var(--fs-xs)` }, children: `إظهار الكل` }), (0, H.jsx)(`button`, { className: V.ghostButton, onClick: () => {
      i3(ka.map((e3) => e3.id).filter((e3) => e3 !== `name` && e3 !== `code`)), B(`تم إخفاء الصفوف غير الأساسية`, `info`);
    }, style: { fontSize: `var(--fs-xs)` }, children: `إبقاء الأساسي` })] }), (0, H.jsx)(`button`, { className: V.primaryButton, onClick: e2, children: `إغلاق` })] })] }) : (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(`p`, { style: { fontSize: `var(--fs-sm)`, color: `var(--text-secondary)` }, children: `اختر أعمدة البيانات التي ترغب في إظهارها في الجدول الجانبي:` }), (0, H.jsx)(`div`, { style: { display: `grid`, gridTemplateColumns: `1fr 1fr`, gap: `var(--sp-3)`, padding: `var(--sp-2) 0` }, children: Aa.map((e3) => {
      let t3 = !a3.includes(e3.id);
      return (0, H.jsxs)(`label`, { style: { display: `flex`, alignItems: `center`, gap: `var(--sp-2)`, cursor: `pointer`, fontSize: `var(--fs-md)`, fontWeight: 600, color: t3 ? `var(--text-primary)` : `var(--text-muted)` }, children: [(0, H.jsx)(`input`, { type: `checkbox`, checked: t3, onChange: () => f2(e3.id), style: { width: `16px`, height: `16px`, cursor: `pointer` } }), (0, H.jsx)(`span`, { children: e3.label })] }, e3.id);
    }) }), (0, H.jsxs)(`div`, { style: { borderTop: `1px solid var(--border)`, paddingTop: `var(--sp-3)`, display: `flex`, gap: `var(--sp-2)`, justifyContent: `space-between` }, children: [(0, H.jsxs)(`div`, { style: { display: `flex`, gap: `var(--sp-2)` }, children: [(0, H.jsx)(`button`, { className: V.ghostButton, onClick: () => {
      o3([]), B(`تم إظهار جميع الأعمدة`, `success`);
    }, style: { fontSize: `var(--fs-xs)` }, children: `إظهار الكل` }), (0, H.jsx)(`button`, { className: V.ghostButton, onClick: () => {
      o3(Aa.map((e3) => e3.id).filter((e3) => e3 !== `name` && e3 !== `id` && e3 !== `group`)), B(`تم إخفاء الأعمدة غير الأساسية`, `info`);
    }, style: { fontSize: `var(--fs-xs)` }, children: `إبقاء الأساسي` })] }), (0, H.jsx)(`button`, { className: V.primaryButton, onClick: e2, children: `إغلاق` })] })] })] }) });
  }
  function Ma({ name: e2, badge: t2, cells: n3 }) {
    let r3 = { completed: G.miniCellCompleted, registered: G.miniCellRegistered, expected: G.miniCellExpected, empty: G.miniCellEmpty };
    return (0, H.jsxs)(`div`, { className: G.miniRow, children: [(0, H.jsx)(`span`, { className: G.miniName, children: e2 }), (0, H.jsx)(`span`, { className: G.miniBadge, children: t2 }), (0, H.jsx)(`div`, { className: G.miniCells, children: n3.map((e3, t3) => (0, H.jsx)(`div`, { className: I(G.miniCell, r3[e3.status]), children: e3.text }, t3)) })] });
  }
  var Na = [{ title: `إخفاء الخريجين`, color: `#16a34a`, fn: `يُخفي المتدرب الذي أنهى خطته (لا ساعات متبقية) من المصفوفة، فيبقى فقط من لديه متبقٍّ.`, beforeText: `خالد (متبقٍّ 0) وسعد (متبقٍّ 12) — كلاهما يظهر.`, afterText: `سعد فقط؛ خالد خرّيج فاختفى.`, beforeRows: [{ name: `خالد`, badge: `متبقي: 0`, cells: [{ status: `completed`, text: `✓` }, { status: `completed`, text: `✓` }] }, { name: `سعد`, badge: `متبقي: 12`, cells: [{ status: `completed`, text: `✓` }, { status: `registered`, text: `م` }, { status: `expected`, text: `1` }] }], afterRows: [{ name: `سعد`, badge: `متبقي: 12`, cells: [{ status: `completed`, text: `✓` }, { status: `registered`, text: `م` }, { status: `expected`, text: `1` }] }] }, { title: `المسجل كمستوفى`, color: `#2c6e3a`, fn: `يَعُدّ المقررات المسجَّلة هذا الفصل وكأنها مكتملة (افتراض اجتيازها): تظهر بلونٍ باهت بلا حرف \xABم\xBB، وتُحتسب مكتملةً في التجميع.`, beforeText: `مقرر \xABأ\xBB مسجَّل ← يظهر بحرف \xABم\xBB.`, afterText: `مقرر \xABأ\xBB يظهر مع علامة الصح ✓ (افتراض النجاح).`, beforeRows: [{ name: `فهد`, badge: `متبقي: 8`, cells: [{ status: `completed`, text: `✓` }, { status: `registered`, text: `م` }, { status: `expected`, text: `1` }] }], afterRows: [{ name: `فهد`, badge: `متبقي: 8`, cells: [{ status: `completed`, text: `✓` }, { status: `completed`, text: `✓` }, { status: `expected`, text: `1` }] }] }];
  function Pa({ onClose: e2 }) {
    return (0, H.jsxs)(Yr, { title: `شرح خيارات العرض`, onClose: e2, children: [(0, H.jsxs)(`p`, { className: G.infoIntro, children: [`خياراتٌ تتحكّم بكيفية عرض المتدربين والمتوقَّع في تبويب المصفوفة. لكلٍّ مثالٌ مبسّط `, (0, H.jsx)(`b`, { children: `قبل التفعيل` }), ` و`, (0, H.jsx)(`b`, { children: `بعده` }), `.`] }), Na.map((e3) => (0, H.jsxs)(`div`, { className: G.infoCard, children: [(0, H.jsxs)(`div`, { className: G.infoCardHead, children: [(0, H.jsx)(`span`, { className: G.infoDot, style: { background: e3.color } }), e3.title] }), (0, H.jsx)(`p`, { className: G.infoFn, children: e3.fn }), (0, H.jsxs)(`div`, { className: G.infoBA, children: [(0, H.jsxs)(`div`, { className: I(G.infoBox, G.infoBefore), children: [(0, H.jsx)(`span`, { className: G.infoBoxLabel, children: `قبل التفعيل` }), (0, H.jsx)(`p`, { style: { margin: `0 0 8px 0`, fontSize: `var(--fs-xs)`, color: `var(--text-secondary)` }, children: e3.beforeText }), (0, H.jsx)(`div`, { className: G.miniMatrix, children: e3.beforeRows.map((e4, t2) => (0, H.jsx)(Ma, { ...e4 }, t2)) })] }), (0, H.jsxs)(`div`, { className: I(G.infoBox, G.infoAfter), children: [(0, H.jsx)(`span`, { className: G.infoBoxLabel, children: `بعد التفعيل` }), (0, H.jsx)(`p`, { style: { margin: `0 0 8px 0`, fontSize: `var(--fs-xs)`, color: `var(--text-secondary)` }, children: e3.afterText }), (0, H.jsx)(`div`, { className: G.miniMatrix, children: e3.afterRows.map((e4, t2) => (0, H.jsx)(Ma, { ...e4 }, t2)) })] })] })] }, e3.title))] });
  }
  function Fa({ onClose: e2 }) {
    let t2 = z((e3) => e3.gpaDangerThreshold), n3 = z((e3) => e3.gpaWarningThreshold), r3 = z((e3) => e3.setGpaDangerThreshold), i3 = z((e3) => e3.setGpaWarningThreshold), a3 = z((e3) => e3.expectedBgColor), o3 = z((e3) => e3.manualExpectedBgColor), s3 = z((e3) => e3.setExpectedBgColor), c3 = z((e3) => e3.setManualExpectedBgColor), l3 = z((e3) => e3.regOkBgColor), u2 = z((e3) => e3.regBadBgColor), d2 = z((e3) => e3.setRegOkBgColor), f2 = z((e3) => e3.setRegBadBgColor), p2 = `#92bddd`, m2 = `#92bddd`, h2 = `#2aa24e`, g2 = `#cdf3cf`, _2 = { expected: { value: a3 || p2, raw: a3, def: p2, set: s3 }, manual: { value: o3 || m2, raw: o3, def: m2, set: c3 }, regOk: { value: l3 || h2, raw: l3, def: h2, set: d2 }, regBad: { value: u2 || g2, raw: u2, def: g2, set: f2 } }, v2 = [{ statusClass: W.cellCompleted, content: ``, label: `مكتمل / مجتاز`, description: `مقرر اجتازه المتدرب بنجاح في فصول سابقة. (غير قابل للتعديل).` }, { statusClass: W.cellRegisteredAsCompleted, content: ``, label: `مسجل كمكتمل`, description: `مقرر مسجل حالياً ولكن يُعامل كمجتاز (خيار "المسجل كمستوفى" مفعّل).` }, { statusClass: W.cellRegistered, content: `م`, label: `مسجل حالياً`, description: `مقرر مسجل في جدول المتدرب للفصل الدراسي الحالي.` }, { statusClass: W.cellCurrent, content: `م`, label: `مقرر حالي`, description: `مقرر حالي للمتدرب (يُعامل كمعاملة المسجل الحالي).` }, { statusClass: W.cellRegExpected, content: `م`, label: `مسجّل ضمن المتوقّع`, description: `المرحلة 2 (بدء التسجيل): سجّل المتدرب هذا المقرر فعلاً وهو ضمن متوقّع الخوارزمية (تسجيل صحيح).`, colorKey: `regOk` }, { statusClass: W.cellRegUnexpected, content: `م`, label: `مسجّل خارج المتوقّع`, description: `المرحلة 2 (بدء التسجيل): سجّل المتدرب هذا المقرر لكنه خارج متوقّع الخوارزمية (من المستوفى).`, colorKey: `regBad` }, { statusClass: W.cellRegUnmet, content: `م`, label: `مسجّل بمتطلب غير مستوفى`, description: `المرحلة 2 (بدء التسجيل): سجّل المتدرب هذا المقرر ومتطلبه السابق غير مستوفى (تسجيل المتطلب في الفصل نفسه لا يلغيه) — أخطر حالات التسجيل.` }, { statusClass: W.cellExpected, content: `1`, label: `متوقع تلقائياً`, description: `مقرر تقترح الخوارزمية تسجيله تلقائياً بناءً على خطة المتدرب واستيفائه للمتطلبات.`, colorKey: `expected` }, { statusClass: W.cellExpectedScheduled, content: `1`, label: `متوقع ومُجدوَل بالكامل`, description: `مقرر متوقع (لم يظهر تسجيله في التقارير) جُدولت كل أجزائه لهذا المتدرب في لوحة بناء الجدول — خلفية خضراء.` }, { statusClass: W.cellExpectedPartial, content: `1`, label: `متوقع ومُجدوَل جزئياً`, description: `مقرر متوقع من جزأين (نظري/عملي) أُضيف أحدهما فقط لهذا المتدرب في لوحة بناء الجدول — خلفية قطرية نصفها أزرق (المعتاد) ونصفها أخضر.` }, { statusClass: W.cellManualExpected, content: `1`, label: `متوقع يدوياً`, description: `مقرر قام المستخدم بتوقعه وإضافته يدوياً (بالنقر المزدوج على الخلية).`, colorKey: `manual` }, { statusClass: W.cellManualBlocked, content: `1`, label: `متوقع يدوياً مع تعارض`, description: `مقرر أضيف يدوياً لكن النظام يكتشف تعارضاً أو متطلباً سابقاً غير مستوفى.` }, { statusClass: W.cellManualRemoved, content: ``, label: `مستبعد يدوياً`, description: `مقرر كان متوقعاً تلقائياً وقام المستخدم بحذفه يدوياً لمنع تسجيله.` }, { statusClass: W.cellBlocked, content: ``, label: `محجوب / غير متاح`, description: `مقرر غير متاح للتسجيل نهائياً لوجود متطلبات سابقة غير مستوفاة.` }, { statusClass: void 0, content: ``, label: `قابل للإضافة بلا تعارض`, description: `＋ أخضر (أعلى يسار): مقرر متاح متطلّبه محقّق، وله شُعبٌ مُدرَجة على الجدول، ولكلّ جزءٍ (نظري/عملي) شعبةٌ يتفرّغ لموعدها لهذا المتدرب — نقرتان لإضافته.`, mark: `addable` }, { statusClass: W.cellAddableConflict, content: ``, label: `متاح لكن يُحدث تعارضًا`, description: `خلفية حمراء: مقرر متاح متطلّبه محقّق، لكنّ كلّ شُعب أحد جزأيه المُدرَجة تصطدم بمواعيد جدوله الحاليّ — إضافته تُحدث تعارضًا زمنيًّا.` }, { statusClass: void 0, content: ``, label: `خلية فارغة / متاح`, description: `مقرر مستوفى متطلباته ومتاح للتسجيل، لكنه غير متوقع في الفصل الحالي.` }, { statusClass: void 0, content: ``, label: `توقّع الخوارزمية`, description: `مثلث أخضر (أسفل يسار): توقّعته الخوارزمية لكنه ليس \xAB1\xBB فعلياً (يظهر عند اعتماد \xABرايات\xBB مصدراً أو إزالة \xAB1\xBB).`, mark: `algorithm` }, { statusClass: void 0, content: ``, label: `توقّع رايات (SF08)`, description: `مثلث بنفسجي (أسفل يمين): ضمن التسجيل المتوقع رسمياً في رايات لكنه ليس \xAB1\xBB فعلياً (يظهر عند اعتماد \xABالخوارزمية\xBB مصدراً).`, mark: `rayat` }, { statusClass: void 0, content: ``, label: `مقرر مشترك أُزيل \xAB1\xBB`, description: `مثلثان معاً (أخضر + بنفسجي): توقّعه المصدران لكن المستخدم أزال \xAB1\xBB يدوياً، فيظهر توقّع كل مصدر.`, mark: `both` }, { statusClass: void 0, content: `1`, label: `توافق المصدرين`, description: `خلية زرقاء غامقة بخط أبيض: اتفقت الخوارزمية ورايات على توقّع المقرر، وله \xAB1\xBB فعلي.`, agreement: true }, { statusClass: W.cellExpected, content: `1`, label: `راسب — يُعاد`, description: `مثلث أصفر (أعلى يمين): رسب في الفصل الحالي (\xABهـ\xBB أو أقل من 60) بحسب SF01. يُعامَل المقرر غير مستوفى فيُحسب ضمن المتبقي ويُتوقَّع إعادته (\xAB1\xBB).`, grade: `failed` }, { statusClass: W.cellExpected, content: `1`, label: `محروم — يُعاد`, description: `مثلث أحمر (أعلى يمين): محروم من الاختبار (\xABح\xBB) بحسب SF01. يُعامَل غير مستوفى ويُتوقَّع إعادته عند ظهور الدرجات الرقمية أو تفعيل مفتاح \xABحرمان معتمد\xBB؛ وعند إطفاء المفتاح يبقى مسجّلاً (\xABم\xBB) مع بقاء المثلث.`, grade: `barred` }];
    return (0, H.jsx)(Yr, { title: `دليل ألوان الخلايا وإعدادات المعدل التراكمي`, onClose: e2, children: (0, H.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: `var(--sp-4)`, width: `780px`, maxWidth: `100%`, height: `440px`, overflow: `hidden` }, children: [(0, H.jsx)(`p`, { style: { fontSize: `var(--fs-sm)`, color: `var(--text-secondary)`, margin: 0, flexShrink: 0 }, children: `يوضح هذا الدليل معاني الألوان المختلفة لخلايا مصفوفة المتوقع، كما يتيح لك التحكم في قيم تلوين المعدل التراكمي للمتدربين.` }), (0, H.jsxs)(`div`, { style: { display: `grid`, gridTemplateColumns: `1.2fr 0.8fr`, gap: `var(--sp-6)`, flex: 1, minHeight: 0 }, children: [(0, H.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: `var(--sp-3)`, height: `100%`, minHeight: 0 }, children: [(0, H.jsxs)(`h4`, { style: { fontSize: `var(--fs-md)`, fontWeight: 800, color: `var(--text-primary)`, margin: `0 0 var(--sp-2) 0`, borderBottom: `2px solid var(--primary)`, paddingBottom: `var(--sp-2)`, flexShrink: 0, display: `flex`, alignItems: `center`, gap: `8px` }, children: [(0, H.jsx)(`span`, { style: { width: `4px`, height: `16px`, background: `var(--primary)`, borderRadius: `2px`, display: `inline-block` } }), `دليل ألوان خلايا المقررات`] }), (0, H.jsx)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: `var(--sp-2)`, flex: 1, overflowY: `auto`, paddingLeft: `var(--sp-2)` }, children: v2.map((e3, t3) => (0, H.jsxs)(`div`, { style: { display: `flex`, alignItems: `center`, gap: `var(--sp-3)`, padding: `var(--sp-2)`, background: `var(--bg-elevated)`, borderRadius: `var(--radius-sm)`, border: `1px solid var(--border)` }, children: [(0, H.jsxs)(`div`, { className: I(W.cell, e3.statusClass, e3.agreement && W.cellAgreement), style: { position: `relative`, display: `grid`, placeItems: `center`, width: `26px`, height: `26px`, minWidth: `26px`, borderRadius: `var(--radius-sm)`, boxSizing: `border-box`, border: e3.statusClass || e3.agreement ? void 0 : `1px solid var(--border-strong)`, cursor: `default`, fontWeight: 750, fontSize: `11px` }, children: [e3.content, (e3.mark === `algorithm` || e3.mark === `both`) && (0, H.jsx)(`span`, { className: I(W.expectedMark, W.markAlgorithm), "aria-hidden": `true` }), (e3.mark === `rayat` || e3.mark === `both`) && (0, H.jsx)(`span`, { className: I(W.expectedMark, W.markRayat), "aria-hidden": `true` }), e3.mark === `addable` && (0, H.jsx)(`span`, { className: W.addableMark, "aria-hidden": `true`, children: `＋` }), e3.grade && (0, H.jsx)(`span`, { className: I(W.gradeMark, e3.grade === `barred` ? W.gradeBarred : W.gradeFailed), "aria-hidden": `true` })] }), (0, H.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: `2px` }, children: [(0, H.jsx)(`span`, { style: { fontWeight: 700, fontSize: `var(--fs-sm)`, color: `var(--text-primary)` }, children: e3.label }), (0, H.jsx)(`span`, { style: { fontSize: `var(--fs-xs)`, color: `var(--text-muted)`, lineHeight: `1.3` }, children: e3.description })] }), e3.colorKey && (0, H.jsxs)(`div`, { style: { marginInlineStart: `auto`, display: `flex`, alignItems: `center`, gap: `var(--sp-2)`, paddingRight: `var(--sp-2)` }, children: [(0, H.jsx)(`input`, { type: `color`, value: _2[e3.colorKey].value, onChange: (t4) => _2[e3.colorKey].set(t4.target.value), style: { border: `1px solid var(--border-strong)`, width: `26px`, height: `26px`, padding: 0, background: `none`, cursor: `pointer`, borderRadius: `var(--radius-sm)`, overflow: `hidden` }, title: `تخصيص لون خلفية الخلية` }), (0, H.jsxs)(`button`, { onClick: () => B(`تم اعتماد اللون ${_2[e3.colorKey].value} لـ ${e3.label}`, `success`), style: { display: `flex`, alignItems: `center`, gap: `2px`, background: `var(--primary-subtle)`, border: `1px solid var(--primary-border)`, color: `var(--primary)`, borderRadius: `var(--radius-sm)`, padding: `3px 8px`, fontSize: `11px`, fontWeight: 700, cursor: `pointer` }, title: `تأكيد وحفظ اللون المختار`, children: [(0, H.jsx)(D, { size: 12 }), `موافق`] }), _2[e3.colorKey].raw && _2[e3.colorKey].raw !== _2[e3.colorKey].def && (0, H.jsx)(`button`, { onClick: () => _2[e3.colorKey].set(``), style: { background: `none`, border: `none`, color: `var(--danger)`, fontSize: `var(--fs-xs)`, fontWeight: 700, cursor: `pointer`, padding: `2px var(--sp-1)`, whiteSpace: `nowrap` }, title: `إعادة تعيين اللون الافتراضي`, children: `إعادة تعيين` })] })] }, t3)) })] }), (0, H.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: `var(--sp-4)` }, children: [(0, H.jsxs)(`h4`, { style: { fontSize: `var(--fs-md)`, fontWeight: 800, color: `var(--text-primary)`, margin: `0 0 var(--sp-2) 0`, borderBottom: `2px solid var(--primary)`, paddingBottom: `var(--sp-2)`, display: `flex`, alignItems: `center`, gap: `8px` }, children: [(0, H.jsx)(`span`, { style: { width: `4px`, height: `16px`, background: `var(--primary)`, borderRadius: `2px`, display: `inline-block` } }), `تلوين المعدل التراكمي (GPA)`] }), (0, H.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: `var(--sp-4)`, background: `var(--bg-elevated)`, border: `1px solid var(--border)`, borderRadius: `var(--radius-md)`, padding: `var(--sp-4)` }, children: [(0, H.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: `var(--sp-2)` }, children: [(0, H.jsxs)(`div`, { style: { display: `flex`, alignItems: `center`, gap: `var(--sp-2)` }, children: [(0, H.jsx)(`div`, { className: W.gpaDanger, style: { width: `38px`, height: `24px`, display: `grid`, placeItems: `center`, borderRadius: `var(--radius-sm)`, fontSize: `var(--fs-xs)`, fontWeight: 700, border: `1px solid var(--danger)` }, children: `1.95` }), (0, H.jsx)(`span`, { style: { fontWeight: 700, fontSize: `var(--fs-sm)` }, children: `معدل حرج (خطر)` })] }), (0, H.jsx)(`p`, { style: { fontSize: `var(--fs-xs)`, color: `var(--text-muted)`, margin: 0 }, children: `يتغير لون خلية المعدل للون الأحمر للمعدلات التي تقل عن القيمة المحددة:` }), (0, H.jsxs)(`div`, { style: { display: `flex`, alignItems: `center`, gap: `var(--sp-2)`, marginTop: `2px` }, children: [(0, H.jsx)(`input`, { type: `number`, step: `0.05`, min: `0`, max: `5`, value: t2, onChange: (e3) => r3(Math.max(0, Math.min(5, parseFloat(e3.target.value) || 0))), style: { width: `80px`, padding: `4px var(--sp-2)`, background: `var(--bg-base)`, border: `1px solid var(--border-strong)`, borderRadius: `var(--radius-sm)`, color: `var(--text-primary)`, fontWeight: 700, textAlign: `center` } }), (0, H.jsx)(`span`, { style: { fontSize: `var(--fs-xs)`, color: `var(--text-secondary)` }, children: `من 5` })] })] }), (0, H.jsx)(`div`, { style: { borderTop: `1px dashed var(--border)`, margin: `var(--sp-1) 0` } }), (0, H.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: `var(--sp-2)` }, children: [(0, H.jsxs)(`div`, { style: { display: `flex`, alignItems: `center`, gap: `var(--sp-2)` }, children: [(0, H.jsx)(`div`, { className: W.gpaWarning, style: { width: `38px`, height: `24px`, display: `grid`, placeItems: `center`, borderRadius: `var(--radius-sm)`, fontSize: `var(--fs-xs)`, fontWeight: 700, border: `1px solid var(--warning)` }, children: `2.45` }), (0, H.jsx)(`span`, { style: { fontWeight: 700, fontSize: `var(--fs-sm)` }, children: `معدل منخفض (تحذير)` })] }), (0, H.jsx)(`p`, { style: { fontSize: `var(--fs-xs)`, color: `var(--text-muted)`, margin: 0 }, children: `يتغير لون الخلية للون البرتقالي/الأصفر للمعدلات التي تقل عن هذه القيمة وتساوي أو تفوق قيمة المعدل الحرج:` }), (0, H.jsxs)(`div`, { style: { display: `flex`, alignItems: `center`, gap: `var(--sp-2)`, marginTop: `2px` }, children: [(0, H.jsx)(`input`, { type: `number`, step: `0.05`, min: `0`, max: `5`, value: n3, onChange: (e3) => i3(Math.max(0, Math.min(5, parseFloat(e3.target.value) || 0))), style: { width: `80px`, padding: `4px var(--sp-2)`, background: `var(--bg-base)`, border: `1px solid var(--border-strong)`, borderRadius: `var(--radius-sm)`, color: `var(--text-primary)`, fontWeight: 700, textAlign: `center` } }), (0, H.jsx)(`span`, { style: { fontSize: `var(--fs-xs)`, color: `var(--text-secondary)` }, children: `من 5` })] })] })] })] })] }), (0, H.jsx)(`div`, { style: { borderTop: `1px solid var(--border)`, paddingTop: `var(--sp-4)`, display: `flex`, justifyContent: `flex-end`, flexShrink: 0 }, children: (0, H.jsx)(`button`, { className: V.primaryButton, onClick: e2, children: `إغلاق النافذة` }) })] }) });
  }
  function Ia({ onClose: e2 }) {
    let t2 = z((e3) => e3.currentSpecialty), n3 = z((e3) => e3.excludedTrainees), r3 = z((e3) => e3.trainees), i3 = z((e3) => e3.sf01), a3 = z((e3) => e3.restoreTrainee), o3 = z((e3) => e3.restoreAllTrainees), s3 = n3[t2] || [], c3 = r3[t2] || {};
    return (0, u.useEffect)(() => {
      s3.length === 0 && e2();
    }, [s3.length, e2]), (0, H.jsx)(Yr, { title: `المتدربون المستبعدون (${s3.length})`, onClose: e2, actions: s3.length > 0 ? (0, H.jsxs)(`button`, { className: V.ghostButton, onClick: () => o3(), children: [(0, H.jsx)(De, { size: 14 }), (0, H.jsx)(`span`, { children: `استعادة الكل` })] }) : void 0, children: (0, H.jsxs)(`div`, { style: { width: `480px`, maxWidth: `100%` }, children: [(0, H.jsx)(`p`, { style: { fontSize: `var(--fs-sm)`, color: `var(--text-secondary)`, margin: `0 0 var(--sp-3)` }, children: `هؤلاء مطويّ قيدهم: لا يظهرون في الصفوف ولا يدخلون في الإحصاءات أو التصدير. الاستبعاد محفوظ ويمكن التراجع عنه في أي وقت.` }), s3.length === 0 ? (0, H.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, alignItems: `center`, gap: `var(--sp-2)`, padding: `var(--sp-6)`, color: `var(--text-muted)` }, children: [(0, H.jsx)(M, { size: 32 }), (0, H.jsx)(`span`, { children: `لا يوجد مستبعدون` })] }) : (0, H.jsx)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: `var(--sp-2)`, maxHeight: `420px`, overflowY: `auto` }, children: s3.map((e3, t3) => {
      let n4 = c3[e3], r4 = wt(i3, e3);
      return (0, H.jsxs)(`div`, { style: { display: `flex`, alignItems: `center`, gap: `var(--sp-3)`, padding: `var(--sp-2) var(--sp-3)`, background: `var(--bg-elevated)`, border: `1px solid var(--border)`, borderRadius: `var(--radius-sm)` }, children: [(0, H.jsxs)(`span`, { style: { color: `var(--primary)`, fontWeight: 700, minWidth: `22px` }, children: [t3 + 1, `.`] }), (0, H.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, gap: `2px`, flex: 1, minWidth: 0 }, children: [(0, H.jsx)(`span`, { style: { fontWeight: 600, whiteSpace: `nowrap`, overflow: `hidden`, textOverflow: `ellipsis` }, children: n4?.name || `—` }), (0, H.jsx)(`span`, { style: { fontSize: `var(--fs-xs)`, color: `var(--text-muted)`, direction: `ltr`, textAlign: `start` }, children: e3 })] }), r4 > 0 && (0, H.jsxs)(`span`, { style: { fontSize: `var(--fs-xs)`, fontWeight: 700, color: `var(--danger)`, background: `color-mix(in srgb, var(--danger) 12%, transparent)`, borderRadius: `var(--radius-sm)`, padding: `2px 6px`, whiteSpace: `nowrap` }, title: `عدد المقررات المحروم فيها`, children: [`حرمان: `, r4] }), (0, H.jsxs)(`button`, { className: V.ghostButton, onClick: () => a3(e3), title: `استعادة المتدرب`, children: [(0, H.jsx)(De, { size: 13 }), (0, H.jsx)(`span`, { children: `استعادة` })] })] }, e3);
    }) })] }) });
  }
  function La() {
    let [e2, t2] = (0, u.useState)(false), [n3, r3] = (0, u.useState)(false), [i3, a3] = (0, u.useState)(false), [o3, s3] = (0, u.useState)(false), [lvlRepOpen, setLvlRepOpen] = (0, u.useState)(false), c3 = z((e3) => e3.searchQuery), l3 = z((e3) => e3.setSearchQuery), d2 = z((e3) => e3.hideGraduates), f2 = z((e3) => e3.setHideGraduates), p2 = z((e3) => e3.treatRegisteredAsCompleted), m2 = z((e3) => e3.setTreatRegisteredAsCompleted), h2 = z((e3) => e3.registrationPhase) === `open`, g2 = z((e3) => e3.approvedBarring), _2 = z((e3) => e3.setApprovedBarring), v2 = z((e3) => e3.sf01), y2 = (0, u.useMemo)(() => !!v2 && !L(v2) && Tt(v2), [v2]), b2 = z((e3) => e3.groupView), x2 = z((e3) => e3.setGroupView), S2 = z((e3) => e3.matchingExpected), C2 = z((e3) => e3.setMatchingExpected), w2 = z((e3) => e3.mergeWithLarger), T2 = z((e3) => e3.setMergeWithLarger), E2 = z((e3) => e3.hybridMerge), D2 = z((e3) => e3.setHybridMerge), O2 = z((e3) => e3.hybridMergeSpec), k2 = z((e3) => e3.setHybridMergeSpec), ee2 = z((e3) => e3.currentSpecialty), te2 = z((e3) => e3.activeConflictFilter), ne2 = z((e3) => e3.clearConflictFilter), re2 = z((e3) => e3.groupFilterName), ie2 = z((e3) => e3.setGroupFilter), ae2 = z((e3) => e3.resetAllFilters), A2 = z((e3) => e3.currentTab), j2 = z((e3) => e3.excludedTrainees), oe2 = z((e3) => e3.registrationStatusFilter), se2 = z((e3) => e3.courseFilters), ce2 = z((e3) => e3.fieldFilters), le2 = z((e3) => e3.sortField), de2 = z((e3) => e3.sortCourseIdx), fe2 = z((e3) => e3.matchingSort), M2 = z((e3) => e3.matchingFieldFilters), N2 = A2 === `matrix`, me2 = (j2[ee2] || []).length, he2 = c3.trim() !== `` || oe2 !== `all` || Object.keys(se2).length > 0 || Object.keys(ce2).length > 0 || le2 !== null || de2 !== null || fe2 !== null || Object.keys(M2).length > 0 || te2 !== null || re2 !== null, ge2 = Di(), _e2 = z((e3) => e3.ignoreSameLevelConflicts), ve2 = z((e3) => e3.setIgnoreSameLevelConflicts), ye2 = z((e3) => e3.conflictsSpecialtyOnly), be2 = z((e3) => e3.setConflictsSpecialtyOnly), xe2 = (0, u.useMemo)(() => {
      if (!ye2 || !ge2 || !v2) return null;
      let e3 = /* @__PURE__ */ new Set();
      return ge2.model.sortedCourses.forEach((t3) => {
        Mt(v2, t3.code) && e3.add(t3.code);
      }), e3;
    }, [ye2, ge2, v2]), Ce2 = (0, u.useMemo)(() => ge2 ? K(ge2.model, _e2, xe2) : null, [ge2, _e2, xe2]), we2 = Ce2?.courses || [];
    return (0, H.jsxs)(`div`, { className: G.toolbar, children: [(0, H.jsxs)(`div`, { className: `${G.searchBox} ${h2 ? G.searchBoxCompact : ``}`, children: [(0, H.jsx)(Oe, { size: 14, className: G.searchIcon }), (0, H.jsx)(`input`, { type: `text`, placeholder: h2 ? `بحث` : `بحث بالاسم أو الرقم… (Ctrl+F)`, value: c3, onChange: (e3) => l3(e3.target.value), id: `matrixSearchInput`, title: `بحث بالاسم أو الرقم (Ctrl+F)` }), c3 && (0, H.jsx)(`button`, { onClick: () => l3(``), title: `مسح البحث`, children: (0, H.jsx)(Be, { size: 13 }) })] }), N2 && (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(`span`, { className: G.toolbarDivider }), h2 ? (0, H.jsx)(Oa, { ctx: ge2 }) : (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(ki, { label: `إخفاء الخريجين`, checked: d2, onChange: f2, title: `إخفاء المتدربين الذين لا ساعات متبقية لهم` }), (0, H.jsx)(ki, { label: `المسجل كمستوفى`, checked: p2, onChange: m2, title: `عرض خلايا المسجل بنمط المستوفى (بلا حرف م)` })] }), y2 && (0, H.jsx)(ki, { label: `حرمان معتمد`, checked: g2, onChange: _2, title: `اعتبار المحروم (ح) مقرراً غير مستوفى يُتوقَّع إعادته؛ عند الإطفاء يُعَدّ مسجّلاً مع بقاء العلامة الحمراء` }), (0, H.jsx)(ki, { label: `دمج تخصصي`, checked: O2, onChange: k2, title: `نفس \xABدمج\xBB لكن بتجاهل متوقع المقررات العامة كليًّا وإخفاء أعمدتها — يركّز على متوقع التخصص` }), (0, H.jsx)(`button`, { className: G.infoIconBtn, onClick: () => s3(true), title: `شرح خيارات العرض (إخفاء الخريجين، المسجل كمستوفى، التجميع، الدمج…)`, children: (0, H.jsx)(pe, { size: 16 }) })] }), !N2 && Ce2 && (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(`span`, { className: G.toolbarDivider }), (0, H.jsxs)(`span`, { className: G.conflictInfo, children: [`التخصص: `, ee2, we2.length > 0 && ` | عدد المقررات: ${we2.length}`] }), (0, H.jsx)(`span`, { className: G.toolbarDivider }), (0, H.jsx)(ki, { label: `اخفاء المقررات التي لاتتعارض مع بقية المستويات`, checked: _e2, onChange: ve2, title: `مقررات المستوى الواحد لا تُحسب تعارضاً` }), (0, H.jsx)(ki, { label: `تعارض تخصصي`, checked: ye2, onChange: be2, title: `استبعاد المقررات العامة (الدراسات العامة) من مصفوفة التعارض — يلزم رفع SF01` }), (0, H.jsx)(`span`, { className: G.toolbarDivider }), (0, H.jsxs)(`div`, { className: G.legend, children: [(0, H.jsxs)(`span`, { className: G.legendItem, children: [(0, H.jsx)(`span`, { className: G.legendSwatch, style: { background: `var(--conflict-0-bg)` } }), ` 0`] }), (0, H.jsxs)(`span`, { className: G.legendItem, children: [(0, H.jsx)(`span`, { className: G.legendSwatch, style: { background: `var(--conflict-1-bg)` } }), ` 1–5`] }), (0, H.jsxs)(`span`, { className: G.legendItem, children: [(0, H.jsx)(`span`, { className: G.legendSwatch, style: { background: `var(--conflict-2-bg)` } }), ` 6–10`] }), (0, H.jsxs)(`span`, { className: G.legendItem, children: [(0, H.jsx)(`span`, { className: G.legendSwatch, style: { background: `var(--conflict-3-bg)` } }), ` 11+`] })] })] }), (0, H.jsx)(`div`, { className: G.toolbarSpacer }), (0, H.jsxs)(`button`, { className: `${G.resetButton} ${h2 ? G.resetButtonIcon : ``}`, onClick: () => {
      let el = document.querySelector(`.${W.wrapper}`);
      if (!el) return;
      let cur = parseFloat(el.style.zoom || `1`);
      let next = Math.max(0.6, Math.round((cur - 0.1) * 100) / 100);
      el.style.zoom = String(next);
      let ind = document.getElementById(`matrixZoomIndicator`);
      if (ind) ind.textContent = Math.round(next * 100) + `%`;
    }, title: `تصغير`, children: [(0, H.jsx)(`span`, { style: { fontSize: 15, fontWeight: 900, lineHeight: 1 }, children: `−` }), !h2 && (0, H.jsx)(`span`, { children: `تصغير` })] }), (0, H.jsx)(`span`, { id: `matrixZoomIndicator`, style: { fontSize: 11, fontWeight: 700, color: `var(--text-muted)`, minWidth: 30, textAlign: `center`, userSelect: `none` }, children: `100%` }), (0, H.jsxs)(`button`, { className: `${G.resetButton} ${h2 ? G.resetButtonIcon : ``}`, onClick: () => {
      let el = document.querySelector(`.${W.wrapper}`);
      if (!el) return;
      let cur = parseFloat(el.style.zoom || `1`);
      let next = Math.min(1.6, Math.round((cur + 0.1) * 100) / 100);
      el.style.zoom = String(next);
      let ind = document.getElementById(`matrixZoomIndicator`);
      if (ind) ind.textContent = Math.round(next * 100) + `%`;
    }, title: `تكبير`, children: [(0, H.jsx)(`span`, { style: { fontSize: 15, fontWeight: 900, lineHeight: 1 }, children: `+` }), !h2 && (0, H.jsx)(`span`, { children: `تكبير` })] }), N2 && (0, H.jsxs)(`button`, { className: `${G.resetButton} ${h2 ? G.resetButtonIcon : ``}`, onClick: () => r3(true), title: `مفتاح الألوان ودليل المقررات والمعدل`, children: [(0, H.jsx)(Se, { size: 14 }), !h2 && (0, H.jsx)(`span`, { children: `الألوان` })] }), (0, H.jsxs)(`button`, { className: `${G.resetButton} ${h2 ? G.resetButtonIcon : ``}`, onClick: () => t2(true), title: `إعدادات إظهار وإخفاء الصفوف والأعمدة`, children: [(0, H.jsx)(je, { size: 14 }), !h2 && (0, H.jsx)(`span`, { children: `صفوف/أعمدة` })] }), (0, H.jsxs)(`button`, { className: `${G.resetButton} ${h2 ? G.resetButtonIcon : ``}`, onClick: () => setLvlRepOpen(true), title: `تقرير: لكل مستوى — الطالب وما يدرس`, children: [(0, H.jsx)(j, { size: 14 }), !h2 && (0, H.jsx)(`span`, { children: `تقرير المستويات` })] }), (0, H.jsxs)(`button`, { className: `${G.resetButton} ${h2 ? G.resetButtonIcon : ``} ${he2 ? G.resetButtonActive : ``}`, onClick: ae2, title: he2 ? `توجد تصفية مفعّلة — انقر لإعادة الضبط` : `إعادة ضبط جميع الفلاتر والفرز`, children: [(0, H.jsx)(ue, { size: 14 }), !h2 && (0, H.jsx)(`span`, { children: `إعادة ضبط` })] }), (re2 || te2 || N2 && me2 > 0) && (0, H.jsxs)(`div`, { className: G.activeFiltersRow, children: [re2 && (0, H.jsxs)(`button`, { className: G.filterChip, onClick: () => {
      ie2(null, null), B(`تم إلغاء تصفية المجموعة`, `info`);
    }, title: `انقر لإلغاء تصفية المجموعة`, children: [(0, H.jsxs)(`span`, { children: [`مجموعة: `, re2] }), (0, H.jsx)(Be, { size: 12 })] }), te2 && (0, H.jsxs)(`button`, { className: G.filterChip, onClick: () => {
      ne2(), B(`تم مسح فلتر التعارض`, `info`);
    }, title: `انقر لمسح فلتر التعارض`, children: [(0, H.jsxs)(`span`, { children: [`تعارض: `, te2.course1, ` ↔ `, te2.course2] }), (0, H.jsx)(Be, { size: 12 })] }), N2 && me2 > 0 && (0, H.jsxs)(`button`, { className: G.filterChip, onClick: () => a3(true), title: `إدارة المتدربين المستبعدين (طيّ القيد)`, children: [(0, H.jsx)(Re, { size: 13 }), (0, H.jsxs)(`span`, { children: [`مستبعدون (`, me2, `)`] })] })] }), e2 && (0, H.jsx)(ja, { onClose: () => t2(false) }), n3 && (0, H.jsx)(Fa, { onClose: () => r3(false) }), i3 && (0, H.jsx)(Ia, { onClose: () => a3(false) }), o3 && (0, H.jsx)(Pa, { onClose: () => s3(false) }), lvlRepOpen && (0, H.jsx)(LvlReportModalX, { ctx: ge2, onClose: () => setLvlRepOpen(false) })] });
  }
  function LvlReportModalX({ ctx: e2, onClose: t2 }) {
    let n3 = (0, u.useMemo)(() => {
      if (!e2) return [];
      let courseGroups = {};
      e2.model.sortedCourses.forEach((c4) => {
        (courseGroups[c4.semester] || (courseGroups[c4.semester] = [])).push({ code: c4.code, name: c4.name });
      });
      let studentGroups = {};
      Object.keys(e2.trainees).forEach((id) => {
        let exp = e2.model.traineeExpected[id];
        if (!exp || !exp.courses || !exp.courses.length) return;
        let byLevel = {};
        exp.courses.forEach((code) => {
          let course = e2.plan.coursesData[code];
          if (!course) return;
          (byLevel[course.semester] || (byLevel[course.semester] = [])).push({ code, name: course.name });
        });
        Object.entries(byLevel).forEach(([sem, courses]) => {
          courses.sort((a4, b4) => String(a4.code).localeCompare(String(b4.code), `ar`));
          (studentGroups[sem] || (studentGroups[sem] = [])).push({ id, name: e2.trainees[id].name, courses });
        });
      });
      let allSems = /* @__PURE__ */ new Set([...Object.keys(courseGroups).map(Number), ...Object.keys(studentGroups).map(Number)]);
      return [...allSems].sort((a4, b4) => a4 - b4).map((sem) => ({
        semester: sem,
        courses: courseGroups[sem] || [],
        trainees: (studentGroups[sem] || []).sort((a4, b4) => String(a4.name).localeCompare(String(b4.name), `ar`))
      }));
    }, [e2]);
    let copyReport = async () => {
      let text = n3.map((g3) => `المستوى ${g3.semester}
مقررات المستوى: ${g3.courses.map((c3) => c3.code + ` ` + c3.name).join(`، `)}
` + g3.trainees.map((t3) => `${t3.name} (${t3.id}): ${t3.courses.map((c3) => c3.code + ` ` + c3.name).join(`، `)}`).join(`
`)).join(`

`), html = `<div>` + n3.map((g3) => `<h3>المستوى ${g3.semester}</h3><p><strong>مقررات المستوى:</strong> ${g3.courses.map((c3) => c3.code + ` — ` + c3.name).join(`، `)}</p><table><tr><th>الاسم</th><th>الرقم التدريبي</th><th>المقررات المتوقعة</th></tr>` + g3.trainees.map((t3) => `<tr><td>${t3.name}</td><td>${t3.id}</td><td>${t3.courses.map((c3) => c3.code + ` — ` + c3.name).join(`<br>`)}</td></tr>`).join(``) + `</table>`).join(``) + `</div>`;
      try {
        let item = new ClipboardItem({ "text/html": new Blob([html], { type: `text/html` }), "text/plain": new Blob([text], { type: `text/plain` }) });
        await navigator.clipboard.write([item]), B(`تم نسخ التقرير — الصقه في Excel`, `success`);
      } catch {
        await navigator.clipboard.writeText(text), B(`تم نسخ التقرير`, `success`);
      }
    };
    let thStyle = { textAlign: `right`, padding: `6px 8px`, borderBottom: `2px solid var(--border-strong)`, fontWeight: 700 }, tdStyle = { padding: `6px 8px`, borderBottom: `1px solid var(--border)`, verticalAlign: `top` };
    return (0, H.jsx)(Yr, { title: `تقرير المستويات — لكل مستوى: الطالب وما يدرس`, onClose: t2, wide: true, actions: (0, H.jsxs)(`button`, { className: V.ghostButton, onClick: () => void copyReport(), children: [(0, H.jsx)(ee, { size: 14 }), (0, H.jsx)(`span`, { children: `نسخ` })] }), children: n3.length === 0 ? (0, H.jsx)(`p`, { children: `لا توجد بيانات كافية لهذا التخصص` }) : (0, H.jsx)(`div`, { children: n3.map((g3) => (0, H.jsxs)(`div`, { style: { marginBottom: `18px` }, children: [(0, H.jsxs)(`h3`, { style: { fontSize: `var(--fs-md)`, fontWeight: 800, marginBottom: `6px`, color: `var(--primary)` }, children: [`المستوى `, g3.semester] }), g3.courses.length > 0 && (0, H.jsxs)(`p`, { style: { fontSize: `var(--fs-sm)`, color: `var(--text-secondary)`, marginBottom: `10px`, lineHeight: `1.7` }, children: [(0, H.jsx)(`strong`, { children: `مقررات المستوى: ` }), g3.courses.map((c3) => `${c3.code} — ${c3.name}`).join(`، `)] }), g3.trainees.length === 0 ? (0, H.jsx)(`p`, { style: { fontSize: `var(--fs-sm)`, color: `var(--text-muted)` }, children: `لا يوجد متدربون متوقَّع لهم مقررات من هذا المستوى حالياً` }) : (0, H.jsxs)(`table`, { style: { width: `100%`, borderCollapse: `collapse`, fontSize: `var(--fs-sm)` }, children: [(0, H.jsx)(`thead`, { children: (0, H.jsxs)(`tr`, { children: [(0, H.jsx)(`th`, { style: thStyle, children: `الاسم` }), (0, H.jsx)(`th`, { style: thStyle, children: `الرقم التدريبي` }), (0, H.jsx)(`th`, { style: thStyle, children: `المقررات المتوقعة` })] }) }), (0, H.jsx)(`tbody`, { children: g3.trainees.map((t3) => (0, H.jsxs)(`tr`, { children: [(0, H.jsx)(`td`, { style: tdStyle, children: t3.name }), (0, H.jsx)(`td`, { style: tdStyle, children: t3.id }), (0, H.jsx)(`td`, { style: tdStyle, children: t3.courses.map((c3) => `${c3.code} — ${c3.name}`).join(`، `) })] }, t3.id)) })] })] }, g3.semester)) }) });
  }
  function Ra(e2, t2) {
    let n3 = z((e3) => e3.searchQuery), r3 = z((e3) => e3.hideGraduates), i3 = z((e3) => e3.courseFilters), a3 = z((e3) => e3.fieldFilters), o3 = z((e3) => e3.sortField), s3 = z((e3) => e3.sortOrder), c3 = z((e3) => e3.sortCourseIdx), l3 = z((e3) => e3.activeConflictFilter), d2 = z((e3) => e3.groupFilterTraineeIds), f2 = z((e3) => e3.highExpectedCreditsThreshold), p2 = z((e3) => e3.registrationStatusFilter), m2 = z((e3) => e3.minTermCredits);
    return (0, u.useMemo)(() => Ea(t2, { searchQuery: n3, hideGraduates: r3, registrationStatusFilter: p2, minTermCredits: m2, courseFilters: i3, fieldFilters: a3, sortField: o3, sortOrder: s3, sortCourseIdx: c3, activeConflictFilter: l3, groupFilterTraineeIds: d2, lowExpectedCreditsThreshold: m2, highExpectedCreditsThreshold: f2, traineeExpected: e2?.model.traineeExpected ?? {} }), [e2, t2, n3, r3, p2, m2, i3, a3, o3, s3, c3, l3, d2, f2]);
  }
  function za(e2, t2, n3 = true, r3 = null) {
    let i3 = z((e3) => e3.treatRegisteredAsCompleted), a3 = z((e3) => e3.hideGraduates), o3 = z((e3) => e3.groupFilterTraineeIds);
    return (0, u.useMemo)(() => {
      if (!e2 || !n3) return [];
      let s3 = t2 === `hybrid` || t2 === `hybrid-spec` ? Ii(e2.model, e2.trainees, e2.plan, i3, o3, t2 === `hybrid-spec` ? r3 : null) : t2 === `merged` ? Fi(e2.model, e2.trainees, e2.plan, i3, o3) : Pi(e2.model, e2.trainees, e2.plan, e2.specialtyEdits, o3);
      return (a3 ? s3.filter((e3) => e3.remaining !== 0) : s3).map((e3, t3) => ({ ...e3, index: t3 + 1 }));
    }, [e2, t2, n3, r3, i3, a3, o3]);
  }
  var Ba = { 1: W.level1, 2: W.level2, 3: W.level3, 4: W.level4, 5: W.level5, 6: W.level6 };
  var Va = { "group-level-1": W.groupLevel1, "group-level-2": W.groupLevel2, "group-level-3": W.groupLevel3, "group-level-4": W.groupLevel4, "group-level-5": W.groupLevel5, "group-level-6": W.groupLevel6, "group-graduate": W.groupGraduate, "group-blocked": W.groupBlocked };
  var Ha = { completed: W.cellCompleted, registered: W.cellRegistered, current: W.cellCurrent, "registered-as-completed": W.cellRegisteredAsCompleted, "registered-expected": W.cellRegExpected, "registered-unexpected": W.cellRegUnexpected, "registered-unmet": W.cellRegUnmet, expected: W.cellExpected, "expected-scheduled": W.cellExpectedScheduled, "expected-partial": W.cellExpectedPartial, "manual-expected": W.cellManualExpected, "manual-blocked": W.cellManualBlocked, "manual-removed": W.cellManualRemoved, blocked: W.cellBlocked, "addable-conflict": W.cellAddableConflict, empty: void 0 };
  var Ua = { critical: W.importanceCritical, medium: W.importanceMedium, short: W.importanceShort, standalone: W.importanceStandalone };
  var Wa = { theory: `نظري`, practical: `عملي`, coop: `تعاوني` };
  function Ga(e2, t2, n3, r3, i3, a3) {
    let o3 = t2.courseStats[e2.code]?.expected || 0, s3 = Ft(e2.code, n3) ? 20 : e2.theory > 0 ? i3.theory : i3.practical, c3 = [e2.name, `المستوى ${e2.semester} — ${e2.credits} وحدة`, `المتوقعون: ${o3}`, `الشُعب المتوقعة: ${o3 > 0 ? Math.ceil(o3 / s3) : 0} (سعة ${s3})`], l3 = jt(r3, e2.code, a3);
    if (l3.length) {
      c3.push(`───── شُعب الفصل الحالي (SF01) ─────`), Mt(r3, e2.code) && c3.push(`مقرر عام (الدراسات العامة)`), l3.forEach((e3) => {
        c3.push(`${Wa[e3.type]}: ${e3.sectionCount} شعبة — مسجلو الكلية ${e3.totalTrainees}` + (e3.specialtyTrainees ? ` — من التخصص ${e3.specialtyTrainees}` : ``));
      });
      let t3 = At(r3, e2.code, a3);
      t3 && c3.push(`مسجلو التخصص (موحدين للمقرر): ${t3}`);
    }
    return c3.join(`
`);
  }
  var Ka = [`group`, `name`, `id`, `remainingAfter`, `expected`, `remaining`];
  var qa = (0, H.jsx)(`span`, { style: { fontSize: `8px`, fontWeight: 500, color: `var(--text-muted)`, display: `block`, lineHeight: `1.1` }, children: `(حسب التصفية)` });
  var Ja = 24;
  var Ya = 76;
  var Xa = 28;
  var Za = (0, u.memo)(function({ model: e2, plan: t2, sf01: n3, sectionDefaults: r3, specialty: i3, traineeCount: a3, visibleCount: o3, variant: s3, activeCourseFilters: c3, activeFieldFilters: l3, onCourseHeaderClick: d2, onFieldHeaderClick: f2, onUnregisteredFilter: p2, onUnregisteredList: m2, hiddenCourseCodes: h2, filteredStats: g2 }) {
    let { sortedCourses: _2, courseStats: v2, conflictCounts: y2, levelBoundaries: b2 } = e2, x2 = (e3) => b2.has(e3) ? W.levelSep : void 0, S2 = (e3) => !!h2?.has(e3), C2 = z((e3) => e3.hiddenHeaderRows), w2 = z((e3) => e3.setHiddenHeaderRows), T2 = z((e3) => e3.registrationPhase) === `open`, E2 = (0, u.useRef)(null), D2 = (0, u.useRef)(null), O2 = [...T2 ? [`unregistered_expected`] : [], `conflict`, `registered_sh06`, `registered_sf01`, `expected`, `level`, `credits`, `theory`, `practical`].filter((e3) => (e3 !== `registered_sf01` || n3) && !C2.includes(e3)).length + 2, k2 = Math.round(180 - Math.min(8, Math.max(0, O2 - 2)) * 11.25), ee2 = Ya, te2 = [...T2 ? [{ id: `unregistered_expected`, label: `متبقّي لم يسجّل`, labelSuffix: g2 ? qa : void 0, height: Ja, labelTooltip: `عدد المتوقَّع لهم هذا المقرر ولم يسجّلوه — نقرة: تصفية هؤلاء، نقرتان: قائمة قابلة للنسخ`, render: (t3, n4) => {
      let r4 = g2 ? g2[t3.code]?.unreg ?? 0 : e2.courseUnregisteredExpected[t3.code]?.length ?? 0;
      return (0, H.jsx)(`td`, { className: I(W.statCell, W.unregisteredCount, x2(n4)), title: r4 > 0 ? `${r4} متوقَّع له ولم يسجّل — نقرة: تصفية، نقرتان: قائمة قابلة للنسخ` : `لا يوجد متوقَّع له ولم يسجّل`, onClick: () => {
        D2.current = t3.code, E2.current && window.clearTimeout(E2.current), E2.current = window.setTimeout(() => {
          E2.current = null, D2.current && p2?.(D2.current);
        }, 220);
      }, onDoubleClick: () => {
        E2.current &&= (window.clearTimeout(E2.current), null), m2?.(t3.code);
      }, children: r4 === 0 ? `-` : r4 }, t3.code);
    } }] : [], { id: `conflict`, label: `تعارض`, height: Ja, labelTooltip: `عدد المقررات الأخرى (من مستويات مختلفة) المشتركة في متدربين متوقعين`, render: (e3, t3) => (0, H.jsx)(`td`, { className: I(W.statCell, W.conflictCount, x2(t3)), title: `عدد المقررات المتنافسة على نفس المتدربين`, children: y2[e3.code] === 0 ? `-` : y2[e3.code] || `-` }, e3.code) }, { id: `registered_sh06`, label: `المسجلون (SH06)`, labelSuffix: g2 ? qa : void 0, height: Ja, labelTooltip: `المسجلون حالياً بحسب تقرير SH06`, render: (e3, t3) => {
      let n4 = g2 ? g2[e3.code]?.registered ?? 0 : v2[e3.code]?.registered ?? 0;
      return (0, H.jsx)(`td`, { className: I(W.statCell, W.registeredCount, x2(t3)), children: n4 === 0 ? `-` : n4 }, e3.code);
    } }, ...n3 ? [{ id: `registered_sf01`, label: `المسجلون (SF01)`, height: Ja, labelTooltip: `متدربو التخصص المسجلون فعلياً في شُعب الفصل الحالي (SF01) — المتدرب يُعد مرة واحدة للمقرر حتى لو كان له رقمان مرجعيان (نظري وعملي)`, render: (e3, t3) => {
      let r4 = At(n3, e3.code, i3);
      return (0, H.jsx)(`td`, { className: I(W.statCell, W.sf01Count, x2(t3)), children: r4 === 0 ? `-` : r4 || `-` }, e3.code);
    } }] : [], { id: `expected`, label: `المتوقعون`, labelSuffix: g2 ? qa : void 0, height: Ja, render: (e3, t3) => {
      let n4 = g2 ? g2[e3.code]?.expected ?? 0 : v2[e3.code]?.expected ?? 0;
      return (0, H.jsx)(`td`, { className: I(W.statCell, W.expectedCount, x2(t3)), children: n4 === 0 ? `-` : n4 }, e3.code);
    } }, { id: `level`, label: `المستوى`, height: 34, render: (e3, t3) => (0, H.jsx)(`td`, { className: I(W.statCell, Ba[e3.semester], x2(t3)), style: { fontSize: `17px`, fontWeight: 900, color: `var(--level-${Math.min(e3.semester, 6)})` }, children: e3.semester }, e3.code) }, { id: `credits`, label: `ساعة معتمدة`, height: Ja, render: (e3, t3) => (0, H.jsx)(`td`, { className: I(W.statCell, Ba[e3.semester], x2(t3)), children: e3.credits }, e3.code) }, { id: `theory`, label: (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(`span`, { style: { fontSize: `8.5px`, fontWeight: 500, color: `var(--text-muted)`, display: `block`, lineHeight: `1.2` }, children: `ساعة اتصال` }), `نظري`] }), height: Ja, render: (e3, t3) => (0, H.jsx)(`td`, { className: I(W.statCell, Ba[e3.semester], x2(t3)), children: e3.theory || `` }, e3.code) }, { id: `practical`, label: (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(`span`, { style: { fontSize: `8.5px`, fontWeight: 500, color: `var(--text-muted)`, display: `block`, lineHeight: `1.2` }, children: `ساعة اتصال` }), `عملي`] }), height: Ja, render: (e3, t3) => (0, H.jsx)(`td`, { className: I(W.statCell, Ba[e3.semester], x2(t3)), children: e3.practical || `` }, e3.code) }, { id: `code`, label: `رمز المقرر`, height: ee2, render: (e3, t3) => (0, H.jsx)(`td`, { className: I(W.codeCell, Ba[e3.semester], x2(t3), e3.group === `critical` && W.codeCellCritical), children: (0, H.jsx)(`div`, { children: e3.code }) }, e3.code) }, { id: `name`, label: `اسم المقرر`, height: k2, render: (a4, o4) => (0, H.jsxs)(`td`, { className: I(W.nameCell, Ba[a4.semester], x2(o4), a4.group === `critical` && W.nameCellCritical), title: Ga(a4, e2, t2, n3, r3, i3), style: { "--h-name": `${k2}px` }, children: [(0, H.jsx)(`div`, { className: W.nameContent, children: a4.name }), (0, H.jsx)(`div`, { className: I(W.importanceBar, Ua[a4.group]) })] }, a4.code) }].filter((e3) => !C2.includes(e3.id)), ne2 = z((e3) => e3.hiddenHeaderColumns), re2 = z((e3) => e3.setHiddenHeaderColumns), ie2 = z((e3) => e3.matchingFieldFilters), ae2 = z((e3) => e3.matchingSort), j2 = (0, u.useMemo)(() => {
      let e3 = 0, t3 = [{ id: `seq`, label: `#`, width: 30, className: W.colSeq }, { id: `group`, label: `المجموعة`, width: 48, className: W.colGroup }, { id: `name`, label: `الاسم`, width: 150, className: W.colName }, { id: `id`, label: `الرقم التدريبي`, width: 82, className: W.colId }, { id: `remainingAfter`, label: `بعد المتوقع`, width: 50, className: W.colRemAfter }, { id: `expected`, label: `متوقعة`, width: 50, className: W.colExpected }, { id: `remaining`, label: `متبقية`, width: 50, className: W.colRemaining }, { id: `registered`, label: `مسجلة`, width: 50, className: W.colRegistered }, { id: `gpa`, label: `المعدل`, width: 46, className: W.colGpa }].filter((e4) => !ne2.includes(e4.id));
      return t3.map((n4, r4) => {
        let i4 = e3;
        return e3 += n4.width, { ...n4, offset: i4, isLast: r4 === t3.length - 1 };
      });
    }, [ne2]), oe2 = 0, se2 = te2.map((e3) => {
      let t3 = oe2;
      return e3.id === `name` ? oe2 += 24 + (k2 - 24) : oe2 += e3.height, t3;
    }), ce2 = oe2, le2 = (0, H.jsxs)(`span`, { style: { fontSize: `8.5px`, fontWeight: 500, color: `var(--text-muted)`, display: `block`, lineHeight: `1.2`, marginBottom: `2px` }, children: [`ساعات`, (0, H.jsx)(`br`, {}), `معتمدة`] }), ue2 = (e3) => {
      if (s3 === `individual`) switch (e3) {
        case `seq`:
          return (0, H.jsxs)(H.Fragment, { children: [`#`, (0, H.jsxs)(`div`, { style: { fontSize: `9.5px`, fontWeight: 600, color: `var(--text-muted)`, marginTop: `2px` }, children: [`(`, o3, `)`] })] });
        case `group`:
          return `مجموعة`;
        case `name`:
          return `الاسم`;
        case `id`:
          return `الرقم التدريبي`;
        case `remainingAfter`:
          return (0, H.jsxs)(H.Fragment, { children: [le2, `بعد`, (0, H.jsx)(`br`, {}), `المتوقع`] });
        case `expected`:
          return (0, H.jsxs)(H.Fragment, { children: [le2, `متوقعة`] });
        case `remaining`:
          return (0, H.jsxs)(H.Fragment, { children: [le2, `متبقية`] });
        case `registered`:
          return (0, H.jsxs)(H.Fragment, { children: [le2, `مسجلة`] });
        case `gpa`:
          return `المعدل`;
        default:
          return ``;
      }
      else if (s3 === `group`) switch (e3) {
        case `seq`:
          return `العدد`;
        case `group`:
          return `مجموعة`;
        case `name`:
          return `النسبة`;
        default:
          return ``;
      }
      else switch (e3) {
        case `seq`:
          return (0, H.jsxs)(H.Fragment, { children: [`#`, (0, H.jsxs)(`div`, { style: { fontSize: `9.5px`, fontWeight: 600, color: `var(--text-muted)`, marginTop: `2px` }, children: [`(`, o3, `)`] })] });
        case `group`:
          return `مجموعة`;
        case `name`:
          return `العدد`;
        case `id`:
          return `النسبة`;
        case `remainingAfter`:
          return (0, H.jsxs)(H.Fragment, { children: [le2, `بعد`, (0, H.jsx)(`br`, {}), `المتوقع`] });
        case `expected`:
          return (0, H.jsxs)(H.Fragment, { children: [le2, `متوقعة`] });
        case `remaining`:
          return (0, H.jsxs)(H.Fragment, { children: [le2, `متبقية`] });
        default:
          return ``;
      }
    }, de2 = (e3, t3) => {
      let n4 = t3 === 0, r4 = j2.length;
      if (r4 === 0) return null;
      let o4 = [`seq`, `group`, `name`, `id`], s4 = j2.filter((e4) => o4.includes(e4.id)), c4 = j2.filter((e4) => !o4.includes(e4.id)), l4 = s4.length, u2 = 1, d3 = c4.length - 1;
      c4.length === 0 ? s4.length >= 2 ? (l4 = s4.length - 2, u2 = 1, d3 = 1) : (l4 = s4.length, u2 = 0, d3 = 0) : c4.length === 1 && (l4 = s4.length, u2 = 1, d3 = 0);
      let f3 = j2[l4], p3 = j2[l4 + u2], m3 = (e4) => e4 === r4 - 1, h3 = [];
      if (n4 && h3.push((0, H.jsx)(`td`, { colSpan: l4, rowSpan: te2.filter((e4) => e4.id !== `name`).length, style: { position: `sticky`, insetInlineStart: 0, zIndex: 30, background: `var(--bg-inset)`, borderInlineEnd: l4 > 0 && m3(l4 - 1) ? `2px solid var(--border-strong)` : `1px solid var(--border)`, borderBottom: `1px solid var(--border-strong)`, padding: 0, textAlign: `center`, verticalAlign: `middle`, width: `${j2.slice(0, l4).reduce((e4, t4) => e4 + t4.width, 0)}px` }, children: (0, H.jsxs)(`div`, { style: { display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`, gap: `6px`, background: `linear-gradient(135deg, var(--bg-surface), var(--bg-elevated))`, border: `1px solid var(--border-strong)`, borderTop: `3px solid var(--primary)`, borderRadius: `var(--radius-md)`, padding: `10px 14px`, boxShadow: `var(--shadow-sm)`, maxWidth: `220px`, margin: `0 auto` }, children: [(0, H.jsx)(`div`, { style: { fontSize: `11.5px`, color: `var(--text-secondary)`, fontWeight: 800, whiteSpace: `normal`, lineHeight: `1.3` }, children: `عدد المتدربين` }), (0, H.jsx)(`div`, { style: { fontSize: `9.5px`, color: `var(--text-muted)`, fontWeight: 700, whiteSpace: `normal`, lineHeight: `1.3`, marginTop: `1px` }, children: i3 }), (0, H.jsx)(`div`, { style: { fontSize: `24px`, fontWeight: 900, color: `var(--primary)`, lineHeight: `1`, textShadow: `0 1px 2px rgba(0,0,0,0.1)`, marginTop: `4px` }, children: a3 })] }) }, `card`)), u2 > 0 && f3) {
        let t4 = m3(l4);
        h3.push((0, H.jsxs)(`td`, { colSpan: u2, style: { position: `sticky`, insetInlineStart: `${f3.offset}px`, zIndex: 30, background: `var(--bg-hover)`, borderBottom: `1px solid var(--border)`, borderInlineEnd: t4 ? `2px solid var(--border-strong) !important` : `none`, textAlign: `center`, verticalAlign: `middle`, width: `${j2.slice(l4, l4 + u2).reduce((e4, t5) => e4 + t5.width, 0)}px` }, children: [(0, H.jsx)(`div`, { style: { display: `inline-flex`, alignItems: `center`, justifyContent: `center`, cursor: `pointer`, color: `var(--text-muted)`, width: `20px`, height: `20px`, borderRadius: `var(--radius-full)`, transition: `background var(--dur) var(--ease)`, margin: `0 auto` }, onClick: () => w2([...C2, e3.id]), title: `إخفاء صف ${e3.label}`, onMouseEnter: (e4) => {
          e4.currentTarget.style.background = `var(--bg-hover)`;
        }, onMouseLeave: (e4) => {
          e4.currentTarget.style.background = `transparent`;
        }, children: (0, H.jsx)(A, { size: 11 }) }), d3 === 0 && (0, H.jsxs)(`div`, { style: { fontSize: `10px`, fontWeight: 700, marginTop: `2px` }, children: [e3.label, e3.labelSuffix] })] }, `eye-btn`));
      }
      if (d3 > 0 && p3) {
        let t4 = m3(l4 + u2 + d3 - 1);
        h3.push((0, H.jsxs)(`td`, { colSpan: d3, className: W.statLabel, title: e3.labelTooltip, style: { position: `sticky`, insetInlineStart: `${p3.offset}px`, zIndex: 30, textAlign: `center`, verticalAlign: `middle`, cursor: e3.labelTooltip ? `help` : `default`, borderInlineEnd: t4 ? `2px solid var(--border-strong) !important` : `1px solid var(--border)`, width: `${j2.slice(l4 + u2, l4 + u2 + d3).reduce((e4, t5) => e4 + t5.width, 0)}px` }, children: [e3.label, e3.labelSuffix] }, `label-text`));
      }
      return h3;
    }, fe2 = (e3, t3) => ({ "--row-top": `${e3}px`, height: `${t3}px` });
    return (0, H.jsxs)(`thead`, { children: [te2.map((a4, o4) => a4.id === `name` ? (0, H.jsxs)(u.Fragment, { children: [(0, H.jsxs)(`tr`, { style: fe2(se2[o4], 24), children: [j2.map((e3) => (0, H.jsx)(`td`, { style: { position: `sticky`, insetInlineStart: `${e3.offset}px`, zIndex: 30, background: `linear-gradient(var(--primary-subtle), var(--primary-subtle)) var(--bg-elevated)`, width: `${e3.width}px`, minWidth: `${e3.width}px`, maxWidth: `${e3.width}px`, padding: `2px 0`, textAlign: `center`, verticalAlign: `middle`, borderTop: `1px solid var(--border-strong)`, ...e3.isLast ? { borderInlineEnd: `2px solid var(--border-strong)` } : {} }, children: (0, H.jsx)(`div`, { style: { display: `inline-flex`, alignItems: `center`, justifyContent: `center`, cursor: `pointer`, color: `var(--text-muted)`, width: `18px`, height: `18px`, borderRadius: `var(--radius-full)`, transition: `background var(--dur) var(--ease)`, margin: `0 auto` }, onClick: () => {
      if (ne2.length + 1 >= 9) {
        B(`يجب إبقاء عمود واحد على الأقل ظاهراً`, `warning`);
        return;
      }
      re2([...ne2, e3.id]), B(`تم إخفاء العمود`, `info`);
    }, title: `إخفاء عمود ${e3.label || e3.id}`, onMouseEnter: (e4) => {
      e4.currentTarget.style.background = `var(--bg-hover)`;
    }, onMouseLeave: (e4) => {
      e4.currentTarget.style.background = `transparent`;
    }, children: (0, H.jsx)(A, { size: 11 }) }) }, `eye-${e3.id}`)), _2.map((a5, o5) => S2(a5.code) ? null : (0, H.jsxs)(`td`, { rowSpan: 2, className: I(W.nameCell, Ba[a5.semester], x2(o5), a5.group === `critical` && W.nameCellCritical), title: Ga(a5, e2, t2, n3, r3, i3), style: { "--h-name": `${k2}px`, height: `${k2}px` }, children: [(0, H.jsx)(`div`, { className: W.nameContent, children: a5.name }), (0, H.jsx)(`div`, { className: I(W.importanceBar, Ua[a5.group]) })] }, a5.code))] }), (0, H.jsx)(`tr`, { style: fe2(se2[o4] + 24, k2 - 24), children: j2.map((e3) => (0, H.jsx)(`td`, { style: { position: `sticky`, insetInlineStart: `${e3.offset}px`, zIndex: 30, background: `linear-gradient(var(--primary-subtle), var(--primary-subtle)) var(--bg-elevated)`, width: `${e3.width}px`, minWidth: `${e3.width}px`, maxWidth: `${e3.width}px`, fontWeight: 800, textAlign: `center`, verticalAlign: `bottom`, fontSize: `var(--fs-sm)`, color: `var(--text-primary)`, paddingBottom: `6px`, borderBottom: `2px solid var(--primary-border)`, ...e3.isLast ? { borderInlineEnd: `2px solid var(--border-strong)` } : {} }, children: ue2(e3.id) }, `label-${e3.id}`)) })] }, `name-split`) : (0, H.jsxs)(`tr`, { style: fe2(se2[o4], a4.height), children: [de2(a4, o4), _2.map((e3, t3) => S2(e3.code) ? null : a4.render(e3, t3))] }, a4.id)), (0, H.jsxs)(`tr`, { style: fe2(ce2, Xa), children: [j2.map((e3) => {
      let t3 = s3 === `individual` && e3.id !== `seq` || s3 === `matching` && Ka.includes(e3.id) ? e3.id : null, n4 = t3 ? s3 === `matching` ? (ie2[t3]?.length ?? 0) > 0 || ae2?.field === t3 : (l3[t3]?.length ?? 0) > 0 : false, r4 = { position: `sticky`, insetInlineStart: `${e3.offset}px`, zIndex: 30, width: `${e3.width}px`, minWidth: `${e3.width}px`, maxWidth: `${e3.width}px`, textAlign: `center`, verticalAlign: `middle`, cursor: t3 ? `pointer` : `default`, ...e3.isLast ? { borderInlineEnd: `2px solid var(--border-strong)` } : {} };
      return (0, H.jsx)(`td`, { className: I(e3.className, t3 && W.colHeader, n4 && W.colHeaderActive), onClick: t3 ? (e4) => f2(e4, t3) : void 0, title: t3 ? `انقر للفرز والتصفية` : void 0, style: r4, children: t3 ? `⇅` : `` }, e3.id);
    }), _2.map((e3, t3) => S2(e3.code) ? null : (0, H.jsx)(`td`, { className: I(W.colHeader, W.statCell, x2(t3), c3[t3] && W.colHeaderActive), onClick: (n4) => d2(n4, t3, e3.code), title: `${e3.code} — فرز وتصفية`, children: `⇅` }, e3.code))] })] });
  });
  var Qa = (0, u.memo)(function({ cell: e2, isLevelBoundary: t2, gradeResult: n3, onToggle: r3 }) {
    let i3 = n3 === `barred` ? `محروم في الفصل الحالي (ح)` : n3 === `failed` ? `راسب في الفصل الحالي` : ``, a3 = i3 ? `${e2.tooltip}
${i3}` : e2.tooltip;
    return (0, H.jsxs)(`td`, { className: I(W.cell, Ha[e2.status], e2.agreement && W.cellAgreement, t2 && W.levelSep, !e2.editable && W.cellNoEdit), title: a3, onDoubleClick: r3, children: [e2.content, e2.markAlgo && (0, H.jsx)(`span`, { className: I(W.expectedMark, W.markAlgorithm), "aria-hidden": `true` }), e2.markRayat && (0, H.jsx)(`span`, { className: I(W.expectedMark, W.markRayat), "aria-hidden": `true` }), e2.markAddable && (0, H.jsx)(`span`, { className: W.addableMark, "aria-hidden": `true`, children: `＋` }), n3 && (0, H.jsx)(`span`, { className: I(W.gradeMark, n3 === `barred` ? W.gradeBarred : W.gradeFailed), "aria-hidden": `true` })] });
  });
  var $a = { "gpa-normal": void 0, "gpa-warning": W.gpaWarning, "gpa-danger": W.gpaDanger };
  var eo = (0, u.memo)(function({ row: e2, seq: t2, levelBoundaries: n3, onToggle: r3, onContextMenu: i3, courseCodes: a3 }) {
    let o3 = z((e3) => e3.minTermCredits), s3 = z((e3) => e3.highExpectedCreditsThreshold), c3 = z((e3) => e3.hiddenHeaderColumns), l3 = z((e3) => e3.sf01), d2 = z((e3) => e3.excludeTrainee), f2 = z((e3) => e3.restoreTrainee), sf01Raw_ = z((e3) => e3.sf01File), statusMap_ = (0, u.useMemo)(() => {
      let map = {};
      ((sf01Raw_ && sf01Raw_.data) || []).forEach((row) => {
        let sid = String(row[`رقم المتدرب`] || ``).trim();
        if (!sid) return;
        let regStatus = String(row[`حالة تسجيل`] || ``).trim(), grade = String(row.الدرجة || ``).trim();
        if (!map[sid]) map[sid] = `مستمر`;
        if (grade === `ح` || regStatus.includes(`حرمان`)) map[sid] = `محروم`;
        else if (map[sid] !== `محروم` && (regStatus.includes(`انسحاب`) || regStatus.includes(`مطوي`))) map[sid] = `مطوي القيد`;
      });
      return map;
    }, [sf01Raw_]), p2 = () => {
      d2(e2.traineeId), B(`تم استبعاد ${e2.name} (طيّ القيد)`, `info`, { label: `تراجع`, run: () => f2(e2.traineeId) });
    }, m2 = (0, u.useMemo)(() => {
      let e3 = 0, t3 = [{ id: `seq`, width: 30, className: W.colSeq }, { id: `group`, width: 48, className: W.colGroup }, { id: `name`, width: 150, className: W.colName }, { id: `id`, width: 82, className: W.colId }, { id: `remainingAfter`, width: 50, className: W.colRemAfter }, { id: `expected`, width: 50, className: W.colExpected }, { id: `remaining`, width: 50, className: W.colRemaining }, { id: `registered`, width: 50, className: W.colRegistered }, { id: `gpa`, width: 46, className: W.colGpa }].filter((e4) => !c3.includes(e4.id));
      return t3.map((n4, r4) => {
        let i4 = e3;
        return e3 += n4.width, { ...n4, offset: i4, isLast: r4 === t3.length - 1 };
      });
    }, [c3]);
    return (0, H.jsxs)(`tr`, { className: W.traineeRow, onContextMenu: i3 ? (t3) => i3(t3, e2.traineeId, e2.name) : void 0, children: [m2.map((n4) => {
      let r4 = { position: `sticky`, insetInlineStart: `${n4.offset}px`, zIndex: 10, width: `${n4.width}px`, minWidth: `${n4.width}px`, maxWidth: `${n4.width}px`, ...n4.isLast ? { borderInlineEnd: `2px solid var(--border-strong)` } : {} };
      switch (n4.id) {
        case `seq`:
          return (0, H.jsx)(`td`, { className: n4.className, style: r4, children: t2 }, `seq`);
        case `group`:
          return (0, H.jsx)(`td`, { className: I(n4.className, Va[e2.groupClass]), title: Mi(e2.group), style: r4, children: e2.group }, `group`);
        case `name`:
          let stBadge_ = statusMap_[e2.traineeId], stBadgeFull_ = stBadge_ === `محروم` ? `محروم (بحسب SF01)` : stBadge_ === `مطوي القيد` ? `مطوي القيد (بحسب SF01)` : ``;
          return (0, H.jsxs)(`td`, { className: I(n4.className, e2.isBlocked && W.blockedName), title: e2.isBlocked ? e2.blockedTooltip : (stBadgeFull_ ? `${e2.name} — ${stBadgeFull_}` : e2.name), style: r4, children: [(0, H.jsx)(`span`, { children: e2.name }), stBadge_ && stBadge_ !== `مستمر` && (0, H.jsx)(`span`, { style: { fontSize: `8px`, fontWeight: 900, marginInlineStart: `3px`, padding: `0 3px`, borderRadius: `3px`, color: `#fff`, background: stBadge_ === `محروم` ? `#dc2626` : `#ea580c`, whiteSpace: `nowrap`, flexShrink: 0 }, children: stBadge_ === `محروم` ? `ح` : `ط` }), (0, H.jsx)(`button`, { type: `button`, className: W.excludeBtn, title: `استبعاد المتدرب (طيّ القيد)`, onClick: (e3) => {
            e3.stopPropagation(), p2();
          }, children: (0, H.jsx)(Be, { size: 11 }) })] }, `name`);
        case `id`:
          return (0, H.jsx)(`td`, { className: n4.className, style: r4, children: e2.traineeId }, `id`);
        case `remainingAfter`:
          return (0, H.jsx)(`td`, { className: n4.className, style: r4, children: e2.remainingAfter === 0 ? `-` : e2.remainingAfter }, `remainingAfter`);
        case `expected`:
          return (0, H.jsx)(`td`, { className: I(n4.className, e2.expectedCredits < o3 && W.lowExpected, e2.expectedCredits > s3 && W.highExpected), title: e2.expectedCredits < o3 ? `الساعات المتوقعة منخفضة (أقل من ${o3} ساعة)` : e2.expectedCredits > s3 ? `الساعات المتوقعة مرتفعة (أكثر من ${s3} ساعة)` : void 0, style: r4, children: e2.expectedCredits === 0 ? `-` : e2.expectedCredits }, `expected`);
        case `remaining`:
          return (0, H.jsx)(`td`, { className: n4.className, style: r4, children: e2.remaining === 0 ? `-` : e2.remaining }, `remaining`);
        case `registered`:
          return (0, H.jsx)(`td`, { className: n4.className, style: r4, children: e2.registered === 0 ? `-` : e2.registered }, `registered`);
        case `gpa`:
          return (0, H.jsx)(`td`, { className: I(n4.className, e2.gpa > 0 && $a[e2.gpaClass]), style: r4, children: e2.gpa === 0 ? `-` : e2.gpa.toFixed(2) }, `gpa`);
        default:
          return null;
      }
    }), e2.cells.map((t3, i4) => (0, H.jsx)(Qa, { cell: t3, isLevelBoundary: n3.has(i4), gradeResult: Ct(l3, a3[i4], e2.traineeId), onToggle: t3.editable ? () => r3(e2.traineeId, a3[i4]) : void 0 }, a3[i4]))] });
  });
  function to({ trainees: e2, onClose: t2, title: n3 }) {
    let r3 = async () => {
      let t3 = e2.map((e3, t4) => `${t4 + 1}	${e3.id}	${e3.name}	${e3.gpa ? e3.gpa.toFixed(2) : ``}`).join(`
`), n4 = `<table><tr><th>م</th><th>الرقم التدريبي</th><th>الاسم</th><th>المعدل</th></tr>`;
      e2.forEach((e3, t4) => {
        n4 += `<tr><td>${t4 + 1}</td><td>${e3.id}</td><td>${e3.name}</td><td>${e3.gpa ? e3.gpa.toFixed(2) : ``}</td></tr>`;
      }), n4 += `</table>`;
      try {
        let e3 = new ClipboardItem({ "text/html": new Blob([n4], { type: `text/html` }), "text/plain": new Blob([t3], { type: `text/plain` }) });
        await navigator.clipboard.write([e3]), B(`تم نسخ البيانات — الصقها في Excel`, `success`);
      } catch {
        await navigator.clipboard.writeText(t3), B(`تم نسخ البيانات`, `success`);
      }
    }, i3 = Math.min(4, Math.max(1, Math.ceil(e2.length / 10))), a3 = Math.ceil(e2.length / i3), o3 = Array.from({ length: i3 }, (t3, n4) => e2.slice(n4 * a3, (n4 + 1) * a3));
    return (0, H.jsx)(Yr, { title: n3 ?? `قائمة المتدربين (${e2.length})`, onClose: t2, actions: (0, H.jsxs)(`button`, { className: V.ghostButton, onClick: () => void r3(), children: [(0, H.jsx)(ee, { size: 14 }), (0, H.jsx)(`span`, { children: `نسخ` })] }), children: (0, H.jsx)(`div`, { style: { display: `grid`, gridTemplateColumns: `repeat(${i3}, 1fr)`, gap: `var(--sp-5)` }, children: o3.map((e3, t3) => (0, H.jsx)(`div`, { children: e3.map((e4, n4) => (0, H.jsxs)(`div`, { style: { padding: `4px 0`, borderBottom: `1px solid var(--border)`, fontSize: `var(--fs-sm)`, display: `flex`, gap: `var(--sp-1)`, whiteSpace: `nowrap` }, children: [(0, H.jsxs)(`span`, { style: { color: `var(--primary)`, fontWeight: 700 }, children: [t3 * a3 + n4 + 1, `.`] }), (0, H.jsx)(`span`, { style: { color: `var(--text-secondary)`, direction: `ltr` }, children: e4.id }), (0, H.jsx)(`span`, { style: { fontWeight: 600 }, children: e4.name }), e4.gpa > 0 && (0, H.jsxs)(`span`, { className: W.expectedCount, children: [`(`, e4.gpa.toFixed(2), `)`] })] }, e4.id)) }, t3)) }) });
  }
  var no = [W.pct0, W.pct1, W.pct2, W.pct3, W.pct4, W.pct5];
  function ro({ ctx: e2 }) {
    let t2 = z((e3) => e3.setGroupFilter), [n3, r3] = (0, u.useState)(null), i3 = (0, u.useMemo)(() => Li(e2.model, e2.trainees, e2.plan), [e2]), { levelBoundaries: a3, sortedCourses: o3 } = e2.model, s3 = z((e3) => e3.hiddenHeaderColumns), c3 = (0, u.useMemo)(() => {
      let e3 = 0, t3 = [{ id: `seq`, width: 30, className: W.colSeq }, { id: `group`, width: 48, className: W.colGroup }, { id: `name`, width: 150, className: W.colName }, { id: `id`, width: 82, className: W.colId }, { id: `remainingAfter`, width: 50, className: W.colRemAfter }, { id: `expected`, width: 50, className: W.colExpected }, { id: `remaining`, width: 50, className: W.colRemaining }, { id: `registered`, width: 50, className: W.colRegistered }, { id: `gpa`, width: 46, className: W.colGpa }].filter((e4) => !s3.includes(e4.id));
      return t3.map((n4, r4) => {
        let i4 = e3;
        return e3 += n4.width, { ...n4, offset: i4, isLast: r4 === t3.length - 1 };
      });
    }, [s3]), l3 = c3.length + o3.length, d2 = (e3, n4) => {
      let i4 = { position: `sticky`, insetInlineStart: `${e3.offset}px`, zIndex: 10, width: `${e3.width}px`, minWidth: `${e3.width}px`, maxWidth: `${e3.width}px`, ...e3.isLast ? { borderInlineEnd: `2px solid var(--border-strong)` } : {} };
      switch (e3.id) {
        case `seq`:
          return (0, H.jsx)(`td`, { className: I(e3.className, W.countCell), onClick: () => r3(n4.trainees), title: `انقر لعرض قائمة المتدربين`, style: i4, children: n4.count }, `seq`);
        case `group`:
          return (0, H.jsx)(`td`, { className: I(e3.className, Va[n4.groupClass]), title: `${n4.tooltip} — انقر مرتين للتصفية`, style: { ...i4, cursor: `pointer` }, onDoubleClick: () => {
            t2(n4.name, n4.traineeIds), B(`تصفية: مجموعة "${n4.name}" (${n4.traineeIds.length} متدرب)`, `success`);
          }, children: n4.name }, `group`);
        case `name`:
          return (0, H.jsxs)(`td`, { className: I(e3.className, W.pctCell, no[Vi(n4.percentage)]), style: { ...i4, textAlign: `center` }, children: [n4.percentage.toFixed(1), `%`] }, `name`);
        default:
          return (0, H.jsx)(`td`, { className: e3.className, style: i4 }, e3.id);
      }
    };
    return (0, H.jsxs)(H.Fragment, { children: [i3.map((e3) => (0, H.jsxs)(u.Fragment, { children: [e3.separatorBefore && (0, H.jsx)(`tr`, { className: W.goldSeparator, children: (0, H.jsx)(`td`, { colSpan: l3 }) }), (0, H.jsxs)(`tr`, { className: W.traineeRow, children: [c3.map((t3) => d2(t3, e3)), e3.expectedCounts.map((e4, t3) => (0, H.jsx)(`td`, { className: I(W.cell, W.cellNoEdit, e4 > 0 && W.cellExpected, a3.has(t3) && W.levelSep), children: e4 > 0 ? e4 : `` }, o3[t3].code))] })] }, e3.name)), n3 && (0, H.jsx)(to, { trainees: n3, onClose: () => r3(null) })] });
  }
  var io = [W.pct0, W.pct1, W.pct2, W.pct3, W.pct4, W.pct5];
  var ao = { completed: W.cellCompleted, "manual-expected": W.cellManualExpected, "manual-removed": W.cellManualRemoved, expected: W.cellExpected, blocked: W.cellBlocked, empty: void 0 };
  function q({ ctx: e2, patterns: t2, hiddenCourseCodes: n3, onContextMenu: r3 }) {
    let i3 = z((e3) => e3.toggleGroupExpectation), a3 = z((e3) => e3.setGroupFilter), o3 = z((e3) => e3.minTermCredits), s3 = z((e3) => e3.highExpectedCreditsThreshold), [c3, l3] = (0, u.useState)(null), { levelBoundaries: d2, sortedCourses: f2 } = e2.model, p2 = (e3, t3) => {
      if (!e3.editable || e3.editTraineeIds.length === 0) return;
      let n4 = i3(e3.editTraineeIds, t3);
      n4 === -1 ? B(`لا يمكن إضافة توقع لمقرر مستوفى`, `warning`) : n4 > 0 && B(`تم تحديث ${n4} متدرب`, `success`);
    }, m2 = z((e3) => e3.hiddenHeaderColumns), h2 = (0, u.useMemo)(() => {
      let e3 = 0, t3 = [{ id: `seq`, width: 30, className: W.colSeq }, { id: `group`, width: 48, className: W.colGroup }, { id: `name`, width: 150, className: W.colName }, { id: `id`, width: 82, className: W.colId }, { id: `remainingAfter`, width: 50, className: W.colRemAfter }, { id: `expected`, width: 50, className: W.colExpected }, { id: `remaining`, width: 50, className: W.colRemaining }, { id: `registered`, width: 50, className: W.colRegistered }, { id: `gpa`, width: 46, className: W.colGpa }].filter((e4) => !m2.includes(e4.id));
      return t3.map((n4, r4) => {
        let i4 = e3;
        return e3 += n4.width, { ...n4, offset: i4, isLast: r4 === t3.length - 1 };
      });
    }, [m2]), g2 = (e3, t3) => {
      let n4 = { position: `sticky`, insetInlineStart: `${e3.offset}px`, zIndex: 10, width: `${e3.width}px`, minWidth: `${e3.width}px`, maxWidth: `${e3.width}px`, ...e3.isLast ? { borderInlineEnd: `2px solid var(--border-strong)` } : {} };
      switch (e3.id) {
        case `seq`:
          return (0, H.jsx)(`td`, { className: e3.className, style: n4, children: t3.index }, `seq`);
        case `group`:
          return (0, H.jsx)(`td`, { className: I(e3.className, Va[t3.groupClass]), title: `${t3.group} — انقر مرتين لتصفية أفراد هذه المجموعة`, style: { ...n4, cursor: `pointer` }, onDoubleClick: () => {
            let e4 = t3.trainees.map((e5) => e5.id);
            a3(t3.group, e4), B(`تصفية: مجموعة "${t3.group}" (${e4.length} متدرب)`, `success`);
          }, children: t3.group }, `group`);
        case `name`:
          return (0, H.jsx)(`td`, { className: I(e3.className, W.countCell), style: { ...n4, textAlign: `center` }, onClick: () => l3(t3.trainees), title: `انقر لعرض قائمة المتدربين`, children: t3.count }, `name`);
        case `id`:
          return (0, H.jsxs)(`td`, { className: I(e3.className, W.pctCell, io[Vi(t3.percentage)]), style: n4, children: [t3.percentage.toFixed(1), `%`] }, `id`);
        case `remainingAfter`:
          return (0, H.jsx)(`td`, { className: e3.className, style: n4, children: t3.remainingAfter === 0 ? `-` : t3.remainingAfter }, `remainingAfter`);
        case `expected`:
          return (0, H.jsx)(`td`, { className: I(e3.className, t3.expectedCredits < o3 && W.lowExpected, t3.expectedCredits > s3 && W.highExpected), title: t3.expectedCredits < o3 ? `الساعات المتوقعة منخفضة (أقل من ${o3} ساعة)` : t3.expectedCredits > s3 ? `الساعات المتوقعة مرتفعة (أكثر من ${s3} ساعة)` : void 0, style: n4, children: t3.expectedCredits === 0 ? `-` : t3.expectedCredits }, `expected`);
        case `remaining`:
          return (0, H.jsx)(`td`, { className: e3.className, style: n4, children: t3.remaining === 0 ? `-` : t3.remaining }, `remaining`);
        default:
          return (0, H.jsx)(`td`, { className: e3.className, style: n4 }, e3.id);
      }
    };
    return (0, H.jsxs)(H.Fragment, { children: [t2.map((e3) => (0, H.jsxs)(`tr`, { className: W.traineeRow, onContextMenu: r3 && e3.trainees[0] ? (t3) => r3(t3, e3.trainees[0].id, e3.trainees[0].name) : void 0, children: [h2.map((t3) => g2(t3, e3)), e3.cells.map((e4, t3) => n3?.has(f2[t3].code) ? null : (0, H.jsx)(`td`, { className: I(W.cell, ao[e4.status], d2.has(t3) && W.levelSep, !e4.editable && W.cellNoEdit), onDoubleClick: () => p2(e4, f2[t3].code), title: e4.editable ? `نقرتان للتبديل لكل متدربي النمط` : void 0, children: e4.count > 0 ? e4.count : `` }, f2[t3].code))] }, e3.index)), c3 && (0, H.jsx)(to, { trainees: c3, onClose: () => l3(null) })] });
  }
  function oo({ anchor: e2, onClose: t2, children: n3 }) {
    let r3 = (0, u.useRef)(null), [i3, a3] = (0, u.useState)({ top: e2.y, left: e2.x });
    return (0, u.useLayoutEffect)(() => {
      let t3 = r3.current;
      if (!t3) return;
      let n4 = t3.getBoundingClientRect(), i4 = e2.y + 6, o3 = e2.x - n4.width / 2;
      i4 + n4.height > window.innerHeight - 10 && (i4 = e2.y - n4.height - 6), i4 < 10 && (i4 = 10), o3 < 10 && (o3 = 10), o3 + n4.width > window.innerWidth - 10 && (o3 = window.innerWidth - n4.width - 10), a3({ top: i4, left: o3 });
    }, [e2]), (0, u.useEffect)(() => {
      let e3 = (e4) => {
        r3.current && !r3.current.contains(e4.target) && t2();
      }, n4 = (e4) => {
        e4.key === `Escape` && t2();
      }, i4 = setTimeout(() => document.addEventListener(`mousedown`, e3), 50);
      return document.addEventListener(`keydown`, n4), () => {
        clearTimeout(i4), document.removeEventListener(`mousedown`, e3), document.removeEventListener(`keydown`, n4);
      };
    }, [t2]), (0, qr.createPortal)((0, H.jsx)(`div`, { ref: r3, className: V.popover, style: { top: i3.top, left: i3.left }, children: n3 }), document.body);
  }
  var J = { panel: `_panel_1u1nc_1`, title: `_title_1u1nc_15`, option: `_option_1u1nc_33`, swatch: `_swatch_1u1nc_79`, divider: `_divider_1u1nc_95`, sortRow: `_sortRow_1u1nc_107`, valueSearch: `_valueSearch_1u1nc_119`, bulkRow: `_bulkRow_1u1nc_163`, valueList: `_valueList_1u1nc_195`, valueItem: `_valueItem_1u1nc_209`, noValues: `_noValues_1u1nc_245`, applyRow: `_applyRow_1u1nc_259`, applyButton: `_applyButton_1u1nc_271` };
  var so = [{ value: `expected`, label: `متوقع فقط`, swatchVar: `--cell-expected-bg` }, { value: `registered`, label: `مسجل فقط`, swatchVar: `--cell-registered-bg` }, { value: `completed`, label: `مستوفى فقط`, swatchVar: `--cell-completed-bg` }, { value: `notregistered`, label: `غير مسجل`, swatchVar: `--cell-empty-bg` }, { value: `blocked`, label: `متعذر فقط`, swatchVar: `--cell-blocked-bg` }];
  function co({ anchor: e2, courseIdx: t2, courseCode: n3, onClose: r3 }) {
    let i3 = z((e3) => e3.setCourseFilter), a3 = z((e3) => e3.setSort), o3 = z((e3) => e3.courseFilters[t2]);
    return (0, H.jsx)(oo, { anchor: e2, onClose: r3, children: (0, H.jsxs)(`div`, { className: J.panel, children: [(0, H.jsx)(`div`, { className: J.title, children: n3 }), (0, H.jsxs)(`button`, { className: J.option, onClick: () => {
      a3(null, `asc`, t2), r3();
    }, children: [(0, H.jsx)(w, { size: 14 }), (0, H.jsx)(`span`, { children: `فرز تصاعدي` })] }), (0, H.jsxs)(`button`, { className: J.option, onClick: () => {
      a3(null, `desc`, t2), r3();
    }, children: [(0, H.jsx)(S, { size: 14 }), (0, H.jsx)(`span`, { children: `فرز تنازلي` })] }), (0, H.jsx)(`div`, { className: J.divider }), so.map(({ value: e3, label: n4, swatchVar: a4 }) => (0, H.jsxs)(`button`, { className: J.option, "data-active": o3 === e3 || void 0, onClick: () => {
      i3(t2, e3), r3();
    }, children: [(0, H.jsx)(`span`, { className: J.swatch, style: { background: `var(${a4})` } }), (0, H.jsx)(`span`, { children: n4 })] }, e3)), (0, H.jsx)(`div`, { className: J.divider }), (0, H.jsxs)(`button`, { className: J.option, onClick: () => {
      i3(t2, null), r3();
    }, children: [(0, H.jsx)(ae, { size: 14 }), (0, H.jsx)(`span`, { children: `مسح الفلتر` })] })] }) });
  }
  var lo = { group: `المجموعة`, name: `الاسم`, id: `رقم المتدرب`, remainingAfter: `متبقي بعد المتوقع`, expected: `المتوقعة`, remaining: `المتبقية`, registered: `المسجلة`, gpa: `المعدل` };
  function uo(e2, t2, n3, r3) {
    switch (t2) {
      case `group`:
        return e2.group;
      case `name`:
        return e2.name;
      case `id`:
        return e2.traineeId;
      case `gpa`:
        return String(e2.gpa);
      case `remainingAfter`:
        return String(e2.remainingAfter);
      case `expected`: {
        let t3 = e2.expectedCredits;
        return t3 < n3 ? `low` : t3 > r3 ? `high` : `normal`;
      }
      case `remaining`:
        return String(e2.remaining);
      case `registered`:
        return String(e2.registered);
      default:
        return ``;
    }
  }
  function fo({ anchor: e2, field: t2, rows: n3, onClose: r3 }) {
    let i3 = z((e3) => e3.setFieldFilter), a3 = z((e3) => e3.setSort), o3 = z((e3) => e3.fieldFilters[t2]), s3 = z((e3) => e3.minTermCredits), c3 = z((e3) => e3.highExpectedCreditsThreshold), [l3, d2] = (0, u.useState)(``), [f2, p2] = (0, u.useState)(new Set(o3 || [])), m2 = (0, u.useMemo)(() => {
      let e3 = [...new Set(n3.map((e4) => uo(e4, t2, s3, c3)))], r4 = e3.every((e4) => !isNaN(parseFloat(e4)));
      return e3.sort(r4 ? (e4, t3) => parseFloat(e4) - parseFloat(t3) : (e4, t3) => e4.localeCompare(t3, `ar`));
    }, [n3, t2, s3, c3]), h2 = (0, u.useMemo)(() => {
      let e3 = l3.trim().toLowerCase();
      return e3 ? m2.filter((t3) => t3.toLowerCase().includes(e3)) : m2;
    }, [m2, l3]), g2 = (e3) => {
      p2((t3) => {
        let n4 = new Set(t3);
        return n4.has(e3) ? n4.delete(e3) : n4.add(e3), n4;
      });
    };
    return (0, H.jsx)(oo, { anchor: e2, onClose: r3, children: (0, H.jsxs)(`div`, { className: J.panel, children: [(0, H.jsx)(`div`, { className: J.title, children: lo[t2] || t2 }), (0, H.jsxs)(`div`, { className: J.sortRow, children: [(0, H.jsxs)(`button`, { className: J.option, onClick: () => {
      a3(t2, `asc`), r3();
    }, children: [(0, H.jsx)(w, { size: 14 }), (0, H.jsx)(`span`, { children: `تصاعدي` })] }), (0, H.jsxs)(`button`, { className: J.option, onClick: () => {
      a3(t2, `desc`), r3();
    }, children: [(0, H.jsx)(S, { size: 14 }), (0, H.jsx)(`span`, { children: `تنازلي` })] })] }), (0, H.jsx)(`div`, { className: J.divider }), (0, H.jsxs)(`div`, { className: J.valueSearch, children: [(0, H.jsx)(Oe, { size: 12 }), (0, H.jsx)(`input`, { type: `text`, placeholder: `بحث في القيم…`, value: l3, onChange: (e3) => d2(e3.target.value) })] }), (0, H.jsxs)(`div`, { className: J.bulkRow, children: [(0, H.jsx)(`button`, { onClick: () => p2(new Set(h2)), children: `تحديد الكل` }), (0, H.jsx)(`button`, { onClick: () => p2(/* @__PURE__ */ new Set()), children: `مسح التحديد` })] }), (0, H.jsxs)(`div`, { className: J.valueList, children: [h2.map((e3) => (0, H.jsxs)(`label`, { className: J.valueItem, children: [(0, H.jsx)(`input`, { type: `checkbox`, checked: f2.has(e3), onChange: () => g2(e3) }), (0, H.jsx)(`span`, { children: t2 === `expected` ? e3 === `low` ? `ساعات منخفضة (أقل من ${s3} ساعة)` : e3 === `high` ? `ساعات مرتفعة (أكثر من ${c3} ساعة)` : `ساعات طبيعية` : e3 || `(فارغ)` })] }, e3)), h2.length === 0 && (0, H.jsx)(`div`, { className: J.noValues, children: `لا توجد قيم` })] }), (0, H.jsx)(`div`, { className: J.divider }), (0, H.jsxs)(`div`, { className: J.applyRow, children: [(0, H.jsxs)(`button`, { className: J.applyButton, onClick: () => {
      i3(t2, f2.size ? [...f2] : null), r3();
    }, children: [(0, H.jsx)(D, { size: 14 }), (0, H.jsx)(`span`, { children: `تطبيق` })] }), (0, H.jsxs)(`button`, { className: J.option, onClick: () => {
      i3(t2, null), r3();
    }, children: [(0, H.jsx)(ae, { size: 14 }), (0, H.jsx)(`span`, { children: `مسح` })] })] })] }) });
  }
  var po = { group: `المجموعة`, name: `العدد`, id: `النسبة`, remainingAfter: `متبقي بعد المتوقع`, expected: `الساعات المتوقعة`, remaining: `المتبقية` };
  function mo({ anchor: e2, field: t2, patterns: n3, onClose: r3 }) {
    let i3 = z((e3) => e3.setMatchingSort), a3 = z((e3) => e3.setMatchingFieldFilter), o3 = z((e3) => e3.matchingFieldFilters[t2]), [s3, c3] = (0, u.useState)(``), [l3, d2] = (0, u.useState)(new Set(o3 || [])), f2 = (0, u.useMemo)(() => {
      let e3 = [...new Set(n3.map((e4) => Ri(e4, t2)))], r4 = e3.every((e4) => e4 !== `` && !isNaN(parseFloat(e4)));
      return e3.sort(r4 ? (e4, t3) => parseFloat(e4) - parseFloat(t3) : (e4, t3) => e4.localeCompare(t3, `ar`));
    }, [n3, t2]), p2 = (0, u.useMemo)(() => {
      let e3 = s3.trim().toLowerCase();
      return e3 ? f2.filter((t3) => t3.toLowerCase().includes(e3)) : f2;
    }, [f2, s3]), m2 = (e3) => {
      d2((t3) => {
        let n4 = new Set(t3);
        return n4.has(e3) ? n4.delete(e3) : n4.add(e3), n4;
      });
    }, h2 = (e3) => t2 === `id` ? `${e3}%` : e3 || `(فارغ)`;
    return (0, H.jsx)(oo, { anchor: e2, onClose: r3, children: (0, H.jsxs)(`div`, { className: J.panel, children: [(0, H.jsx)(`div`, { className: J.title, children: po[t2] || t2 }), (0, H.jsxs)(`div`, { className: J.sortRow, children: [(0, H.jsxs)(`button`, { className: J.option, onClick: () => {
      i3(t2, `asc`), r3();
    }, children: [(0, H.jsx)(w, { size: 14 }), (0, H.jsx)(`span`, { children: `تصاعدي` })] }), (0, H.jsxs)(`button`, { className: J.option, onClick: () => {
      i3(t2, `desc`), r3();
    }, children: [(0, H.jsx)(S, { size: 14 }), (0, H.jsx)(`span`, { children: `تنازلي` })] })] }), (0, H.jsx)(`div`, { className: J.divider }), (0, H.jsxs)(`div`, { className: J.valueSearch, children: [(0, H.jsx)(Oe, { size: 12 }), (0, H.jsx)(`input`, { type: `text`, placeholder: `بحث في القيم…`, value: s3, onChange: (e3) => c3(e3.target.value) })] }), (0, H.jsxs)(`div`, { className: J.bulkRow, children: [(0, H.jsx)(`button`, { onClick: () => d2(new Set(p2)), children: `تحديد الكل` }), (0, H.jsx)(`button`, { onClick: () => d2(/* @__PURE__ */ new Set()), children: `مسح التحديد` })] }), (0, H.jsxs)(`div`, { className: J.valueList, children: [p2.map((e3) => (0, H.jsxs)(`label`, { className: J.valueItem, children: [(0, H.jsx)(`input`, { type: `checkbox`, checked: l3.has(e3), onChange: () => m2(e3) }), (0, H.jsx)(`span`, { children: h2(e3) })] }, e3)), p2.length === 0 && (0, H.jsx)(`div`, { className: J.noValues, children: `لا توجد قيم` })] }), (0, H.jsx)(`div`, { className: J.divider }), (0, H.jsxs)(`div`, { className: J.applyRow, children: [(0, H.jsxs)(`button`, { className: J.applyButton, onClick: () => {
      a3(t2, l3.size ? [...l3] : null), r3();
    }, children: [(0, H.jsx)(D, { size: 14 }), (0, H.jsx)(`span`, { children: `تطبيق` })] }), (0, H.jsxs)(`button`, { className: J.option, onClick: () => {
      a3(t2, null), r3();
    }, children: [(0, H.jsx)(ae, { size: 14 }), (0, H.jsx)(`span`, { children: `مسح` })] })] })] }) });
  }
  var ho = { completed: `مكتمل`, registered: `مسجل`, current: `حالي`, notregistered: `غير مسجل` };
  var go = { barred: `محروم`, failed: `راسب` };
  function _o(e2, t2, n3) {
    return (n3.prerequisites[e2] || []).every((e3) => {
      let n4 = t2.courses[e3];
      return n4 === `completed` || n4 === `registered` || n4 === `current`;
    });
  }
  function vo(e2) {
    let t2 = z.getState(), n3 = t2.currentSpecialty, r3 = t2.plans[n3], i3 = t2.trainees[n3]?.[e2];
    if (!r3 || !i3) return null;
    let a3 = t2.minTermCredits, o3 = Kt(i3.gpa, t2.creditCeiling, t2.maxTermCredits), s3 = t2.creditCeiling.mode, c3 = t2.approvedBarring, l3 = t2.sf01, u2 = t2.sf08, d2 = t2.edits[n3]?.[e2], f2 = (t2.excludedTrainees[n3] || []).includes(e2), p2 = Dt(i3, e2, l3, { approvedBarring: c3 }), m2 = Vt(r3, gt(t2.trainees[n3] || {})), h2 = 0, g2 = 0, _2 = 0;
    m2.forEach((e3) => {
      if (It(e3.code)) return;
      h2 += e3.credits;
      let t3 = p2.courses[e3.code];
      (t3 === `completed` || t3 === `registered` || t3 === `current`) && (g2 += e3.credits, (t3 === `registered` || t3 === `current`) && (_2 += e3.credits));
    });
    let v2 = Math.max(0, h2 - g2), y2 = {};
    m2.forEach((e3) => {
      It(e3.code) || e3.semester === 5 || (y2[e3.semester] = (y2[e3.semester] || 0) + e3.credits);
    });
    let b2 = m2.filter((e3) => {
      let t3 = p2.courses[e3.code];
      return (t3 === `notregistered` || !t3) && !It(e3.code);
    }), x2 = b2.filter((e3) => !Ft(e3.code, r3) && _o(e3.code, p2, r3)), S2 = {};
    x2.forEach((e3) => (S2[e3.semester] ||= []).push(e3.code));
    let C2 = x2.length ? Math.min(...x2.map((e3) => e3.semester)) : null, w2 = Ut(p2, r3, m2, a3, o3), T2 = t2.expectedSource === `rayat` && u2 ? en(m2, p2, u2[e2]) : null, E2 = Wt(p2, r3, m2, d2, a3, o3, T2), D2 = new Set(w2.courses), O2 = (t3) => (l3?.grades?.[lt(t3)]?.[e2] || ``).trim(), k2 = m2.map((e3) => {
      let t3 = O2(e3.code), n4 = p2.courses[e3.code] || `notregistered`;
      return { level: e3.semester, code: e3.code, name: e3.name, credits: e3.credits, theory: e3.theory, practical: e3.practical, group: e3.group, prereqs: r3.prerequisites[e3.code] || [], sh06: i3.courses[e3.code] || `notregistered`, sf01Grade: t3 || null, sf01Class: St(t3), effective: n4, eligible: n4 === `notregistered` && _o(e3.code, p2, r3) && !Ft(e3.code, r3), expected: D2.has(e3.code) };
    }), ee2 = { meta: { id: e2, name: i3.name, gpa: i3.gpa, specialty: n3, excluded: f2 }, flags: { approvedBarring: c3, treatRegisteredAsCompleted: t2.treatRegisteredAsCompleted, expectedSource: t2.expectedSource, minTermCredits: a3, maxTermCredits: o3, ceilingMode: s3, sf01Loaded: !!l3, sf08Loaded: !!u2 }, totals: { planCredits: h2, completedCredits: g2, registeredCredits: _2, remaining: v2 }, semesterCaps: y2, trace: { availableCount: b2.length, eligibleCount: x2.length, eligibleByLevel: S2, lowestEligibleLevel: C2 }, expected: { algorithmRaw: { codes: w2.courses, credits: w2.credits }, displayed: { codes: E2.courses, credits: E2.credits }, rayat: T2 }, edits: d2 ? { locked: d2.locked, overrides: [...d2.overrides], removals: [...d2.removals] } : null, courses: k2 };
    return { name: i3.name, data: ee2, markdown: yo(ee2) };
  }
  function yo(e2) {
    let { meta: t2, flags: n3, totals: r3, trace: i3, expected: a3, semesterCaps: o3 } = e2, s3 = [];
    s3.push(`# تشخيص المتدرب: ${t2.name} (${t2.id})`), s3.push(``), s3.push(`- **التخصص:** ${t2.specialty}`), s3.push(`- **المعدل:** ${t2.gpa}${t2.excluded ? ` — ⚠️ مستبعد (طيّ قيد)` : ``}`), s3.push(``), s3.push(`## الإعدادات`), s3.push(`- حدود الفصل: **${n3.minTermCredits}–${n3.maxTermCredits}و**${n3.ceilingMode === `gpa` ? ` (السقف حسب المعدل)` : ``} | حرمان معتمد: ${n3.approvedBarring ? `مفعّل` : `مطفأ`} | المسجل كمستوفى: ${n3.treatRegisteredAsCompleted ? `مفعّل` : `مطفأ`}`), s3.push(`- مصدر المتوقع: **${n3.expectedSource}** | SF01: ${n3.sf01Loaded ? `مرفوع` : `—`} | SF08: ${n3.sf08Loaded ? `مرفوع` : `—`}`), s3.push(``), s3.push(`## الإحصاء`), s3.push(`- إجمالي الخطة: **${r3.planCredits}** | المنجَز: ${r3.completedCredits} | المسجّل حالياً: ${r3.registeredCredits} | **المتبقي: ${r3.remaining}**`), s3.push(`- سقوف المستويات: ${Object.entries(o3).map(([e3, t3]) => `م${e3}=${t3}`).join(` \xB7 `)}`), s3.push(``), s3.push(`## أثر الخوارزمية`), s3.push(`- المتاح: ${i3.availableCount} | المؤهل: ${i3.eligibleCount} | أدنى مستوى مؤهل: ${i3.lowestEligibleLevel ?? `—`}`), s3.push(`- المؤهل حسب المستوى: ${Object.entries(i3.eligibleByLevel).map(([e3, t3]) => `م${e3}[${t3.join(`, `)}]`).join(` \xB7 `) || `—`}`), s3.push(``), s3.push(`## المتوقع`), s3.push(`- **الخوارزمية (خام): ${a3.algorithmRaw.credits} و** → ${a3.algorithmRaw.codes.join(`, `) || `—`}`), s3.push(`- المعروض (بعد المصدر/التعديلات): ${a3.displayed.credits} و → ${a3.displayed.codes.join(`, `) || `—`}`), a3.rayat && s3.push(`- رايات (SF08): ${a3.rayat.join(`, `) || `—`}`);
    let c3 = {};
    e2.courses.forEach((e3) => c3[e3.code] = e3.level);
    let l3 = [...new Set(a3.displayed.codes.map((e3) => c3[e3]).filter(Boolean))].sort((e3, t3) => e3 - t3);
    return s3.push(`- مستويات المتوقع المعروض (أساس وسم المجموعة): **${l3.join(`-`) || `—`}**`), s3.push(``), s3.push(`## المقررات (بالترتيب القانوني)`), s3.push(`| م | الرمز | الاسم | و | ن/ع | المتطلبات | SH06 | SF01 | الفعلية | مؤهل | متوقع |`), s3.push(`|---|---|---|---|---|---|---|---|---|---|---|`), e2.courses.forEach((e3) => {
      let t3 = e3.sf01Grade ? `${e3.sf01Grade}${e3.sf01Class ? ` (${go[e3.sf01Class]})` : ``}` : `—`;
      s3.push(`| ${e3.level} | ${e3.code} | ${e3.name} | ${e3.credits} | ${e3.theory}/${e3.practical} | ${e3.prereqs.join(`، `) || `—`} | ${ho[e3.sh06]} | ${t3} | ${ho[e3.effective]} | ${e3.eligible ? `✓` : ``} | ${e3.expected ? `✓` : ``} |`);
    }), s3.push(``), s3.push(`## البيانات الخام (JSON)`), s3.push("```json"), s3.push(JSON.stringify(e2, null, 2)), s3.push("```"), s3.join(`
`);
  }
  async function bo(e2) {
    let t2 = vo(e2);
    if (!t2) {
      B(`تعذّر بناء تشخيص المتدرب`, `error`);
      return;
    }
    try {
      await navigator.clipboard.writeText(t2.markdown), B(`تم نسخ تشخيص ${t2.name}`, `success`);
    } catch {
      B(`تعذّر النسخ إلى الحافظة`, `error`);
    }
  }
  function xo(e2) {
    let t2 = vo(e2);
    if (!t2) {
      B(`تعذّر بناء تشخيص المتدرب`, `error`);
      return;
    }
    let n3 = new Blob([t2.markdown], { type: `text/markdown;charset=utf-8` }), r3 = URL.createObjectURL(n3), i3 = document.createElement(`a`);
    i3.href = r3, i3.download = `تشخيص-${e2}.md`, document.body.appendChild(i3), i3.click(), i3.remove(), setTimeout(() => URL.revokeObjectURL(r3), 1e4), B(`تم تنزيل تشخيص ${t2.name}`, `success`);
  }
  function So({ x: e2, y: t2, traineeId: n3, name: r3, onClose: i3 }) {
    (0, u.useEffect)(() => {
      let e3 = (e4) => {
        e4.key === `Escape` && i3();
      };
      return window.addEventListener(`keydown`, e3), () => window.removeEventListener(`keydown`, e3);
    }, [i3]);
    let a3 = Math.min(e2, window.innerWidth - 190), o3 = Math.min(t2, window.innerHeight - 100);
    return (0, qr.createPortal)((0, H.jsx)(`div`, { className: W.ctxOverlay, onClick: (e3) => {
      e3.target === e3.currentTarget && i3();
    }, onContextMenu: (e3) => {
      e3.preventDefault(), i3();
    }, children: (0, H.jsxs)(`div`, { className: W.ctxMenu, style: { left: a3, top: o3 }, children: [(0, H.jsxs)(`div`, { className: W.ctxMenuTitle, title: `${r3} — ${n3}`, children: [r3, ` (`, n3, `)`] }), (0, H.jsxs)(`button`, { className: W.ctxMenuItem, onClick: () => {
      bo(n3), i3();
    }, children: [(0, H.jsx)(ee, { size: 13 }), (0, H.jsx)(`span`, { children: `نسخ التشخيص` })] }), (0, H.jsxs)(`button`, { className: W.ctxMenuItem, onClick: () => {
      xo(n3), i3();
    }, children: [(0, H.jsx)(j, { size: 13 }), (0, H.jsx)(`span`, { children: `تنزيل ملف (MD)` })] })] }) }), document.body);
  }
  function Co() {
    let e2 = Di(), t2 = xa(e2), n3 = Ra(e2, t2), r3 = z((e3) => e3.sf01), i3 = z((e3) => e3.sectionDefaults), a3 = z((e3) => e3.courseFilters), o3 = z((e3) => e3.fieldFilters), s3 = z((e3) => e3.groupView), c3 = z((e3) => e3.matchingExpected), l3 = z((e3) => e3.mergeWithLarger), d2 = z((e3) => e3.hybridMerge), f2 = z((e3) => e3.hybridMergeSpec), p2 = z((e3) => e3.toggleExpectation), m2 = z((e3) => e3.setGroupFilter), h2 = (0, u.useMemo)(() => {
      if (!e2 || !r3) return null;
      let t3 = /* @__PURE__ */ new Set();
      return e2.model.sortedCourses.forEach((e3) => {
        Mt(r3, e3.code) && t3.add(e3.code);
      }), t3;
    }, [e2, r3]), g2 = c3 || l3 || d2 || f2, _2 = za(e2, f2 ? `hybrid-spec` : d2 ? `hybrid` : l3 ? `merged` : `matching`, g2, h2), v2 = z((e3) => e3.matchingSort), y2 = z((e3) => e3.matchingFieldFilters), b2 = (0, u.useMemo)(() => Bi(_2, v2, y2), [_2, v2, y2]), x2 = !s3 && !g2, S2 = (0, u.useMemo)(() => {
      if (!e2 || !x2 || n3.length === t2.length) return null;
      let r4 = new Set(n3.map((e3) => e3.traineeId)), i4 = {};
      for (let t3 of e2.model.sortedCourses) {
        let n4 = 0;
        for (let i5 of r4) {
          let r5 = e2.trainees[i5]?.courses[t3.code];
          (r5 === `registered` || r5 === `current`) && n4++;
        }
        i4[t3.code] = { registered: n4, expected: [...e2.model.courseTraineesMap[t3.code] ?? []].filter((e3) => r4.has(e3)).length, unreg: (e2.model.courseUnregisteredExpected[t3.code] ?? []).filter((e3) => r4.has(e3)).length };
      }
      return i4;
    }, [e2, x2, n3, t2]), [C2, w2] = (0, u.useState)(null), [T2, E2] = (0, u.useState)(null), [D2, O2] = (0, u.useState)(null);
    if (!e2) return (0, H.jsxs)(`div`, { className: W.emptyState, children: [(0, H.jsx)(M, { size: 40 }), (0, H.jsx)(`p`, { children: `اختر تخصصاً من القائمة أعلاه` })] });
    let k2 = l3 || c3 || d2 || f2 ? `matching` : s3 ? `group` : `individual`, ee2 = f2 ? h2 : null, te2 = e2.model.sortedCourses.map((e3) => e3.code), ne2 = (e3, t3) => {
      let n4 = p2(e3, t3);
      n4 === `completed` ? B(`لا يمكن إضافة توقع لمقرر مستوفى`, `warning`) : n4 === `registered` && B(`المقرر مسجل بالفعل`, `warning`);
    }, re2 = (t3) => {
      let r4 = e2.model.courseUnregisteredExpected[t3] ?? [];
      if (!S2) return r4;
      let i4 = new Set(n3.map((e3) => e3.traineeId));
      return r4.filter((e3) => i4.has(e3));
    };
    return (0, H.jsxs)(`div`, { className: W.wrapper, children: [(0, H.jsxs)(`table`, { className: W.table, children: [(0, H.jsx)(Za, { model: e2.model, plan: e2.plan, sf01: r3, sectionDefaults: i3, specialty: e2.specialty, traineeCount: Object.keys(e2.trainees).length, visibleCount: k2 === `matching` ? b2.length : n3.length, variant: k2, activeCourseFilters: a3, activeFieldFilters: o3, onCourseHeaderClick: (e3, t3, n4) => w2({ type: `course`, idx: t3, code: n4, anchor: { x: e3.clientX, y: e3.clientY } }), onFieldHeaderClick: (e3, t3) => w2({ type: `field`, field: t3, anchor: { x: e3.clientX, y: e3.clientY } }), filteredStats: S2, onUnregisteredFilter: (e3) => {
      let t3 = `لم يسجّل ${e3}`;
      if (z.getState().groupFilterName === t3) {
        m2(null, null);
        return;
      }
      let n4 = re2(e3);
      if (!n4.length) {
        B(`لا يوجد متوقَّع له ولم يسجّل هذا المقرر`, `info`);
        return;
      }
      m2(t3, n4);
    }, onUnregisteredList: (t3) => {
      let n4 = re2(t3);
      if (!n4.length) {
        B(`لا يوجد متوقَّع له ولم يسجّل هذا المقرر`, `info`);
        return;
      }
      let r4 = n4.map((t4) => ({ id: t4, name: e2.trainees[t4]?.name ?? t4, gpa: e2.trainees[t4]?.gpa ?? 0 })).sort((e3, t4) => e3.name.localeCompare(t4.name, `ar`));
      O2({ title: `متوقَّع لهم ولم يسجّلوا ${t3} (${r4.length})`, trainees: r4 });
    }, hiddenCourseCodes: ee2 }), (0, H.jsxs)(`tbody`, { children: [k2 === `individual` && n3.map((t3, n4) => (0, H.jsx)(eo, { row: t3, seq: n4 + 1, levelBoundaries: e2.model.levelBoundaries, onToggle: ne2, onContextMenu: (e3, t4, n5) => {
      e3.preventDefault(), E2({ x: e3.clientX, y: e3.clientY, traineeId: t4, name: n5 });
    }, courseCodes: te2 }, t3.traineeId)), k2 === `group` && (0, H.jsx)(ro, { ctx: e2 }), k2 === `matching` && (0, H.jsx)(q, { ctx: e2, patterns: b2, hiddenCourseCodes: ee2, onContextMenu: (e3, t3, n4) => {
      e3.preventDefault(), E2({ x: e3.clientX, y: e3.clientY, traineeId: t3, name: n4 });
    } })] })] }), k2 === `individual` && n3.length === 0 && (0, H.jsxs)(`div`, { className: W.emptyState, children: [(0, H.jsx)(M, { size: 32 }), (0, H.jsx)(`p`, { children: `لا توجد نتائج مطابقة للفلاتر الحالية` })] }), C2?.type === `course` && (0, H.jsx)(co, { anchor: C2.anchor, courseIdx: C2.idx, courseCode: C2.code, onClose: () => w2(null) }), C2?.type === `field` && k2 === `matching` && (0, H.jsx)(mo, { anchor: C2.anchor, field: C2.field, patterns: _2, onClose: () => w2(null) }), C2?.type === `field` && k2 !== `matching` && (0, H.jsx)(fo, { anchor: C2.anchor, field: C2.field, rows: t2, onClose: () => w2(null) }), T2 && (0, H.jsx)(So, { x: T2.x, y: T2.y, traineeId: T2.traineeId, name: T2.name, onClose: () => E2(null) }), D2 && (0, H.jsx)(to, { trainees: D2.trainees, title: D2.title, onClose: () => O2(null) })] });
  }
  var Y = { view: `_view_3pu39_1`, bar: `_bar_3pu39_15`, barTitle: `_barTitle_3pu39_37`, barCount: `_barCount_3pu39_47`, legend: `_legend_3pu39_59`, legendItem: `_legendItem_3pu39_77`, legendSwatch: `_legendSwatch_3pu39_89`, tableWrapper: `_tableWrapper_3pu39_103`, table: `_table_3pu39_103`, rowHeader: `_rowHeader_3pu39_175`, centeredHeader: `_centeredHeader_3pu39_205`, conflictCountHeader: `_conflictCountHeader_3pu39_213`, colHeader: `_colHeader_3pu39_227`, colHeaderContent: `_colHeaderContent_3pu39_237`, rowHeaderContent: `_rowHeaderContent_3pu39_251`, courseCode: `_courseCode_3pu39_265`, courseName: `_courseName_3pu39_277`, courseLevel: `_courseLevel_3pu39_297`, cell: `_cell_3pu39_313`, cellClickable: `_cellClickable_3pu39_327`, cellSelf: `_cellSelf_3pu39_355`, cellSameLevel: `_cellSameLevel_3pu39_365`, cell0: `_cell0_3pu39_387`, cell1: `_cell1_3pu39_397`, cell2: `_cell2_3pu39_407`, cell3: `_cell3_3pu39_417`, conflictCountHeaderHovered: `_conflictCountHeaderHovered_3pu39_429`, colHeaderHovered: `_colHeaderHovered_3pu39_443`, cellHighlighted: `_cellHighlighted_3pu39_453`, rowHeaderHighlighted: `_rowHeaderHighlighted_3pu39_483` };
  var wo = { self: Y.cellSelf, "same-level": Y.cellSameLevel, 0: Y.cell0, 1: Y.cell1, 2: Y.cell2, 3: Y.cell3 };
  function To() {
    let e2 = Di(), t2 = z((e3) => e3.ignoreSameLevelConflicts), n3 = z((e3) => e3.conflictsSpecialtyOnly), r3 = z((e3) => e3.sf01), i3 = z((e3) => e3.setConflictFilter), [a3, o3] = (0, u.useState)(null), s3 = (0, u.useMemo)(() => {
      if (!n3 || !e2 || !r3) return null;
      let t3 = /* @__PURE__ */ new Set();
      return e2.model.sortedCourses.forEach((e3) => {
        Mt(r3, e3.code) && t3.add(e3.code);
      }), t3;
    }, [n3, e2, r3]), c3 = (0, u.useMemo)(() => e2 ? K(e2.model, t2, s3) : null, [e2, t2, s3]);
    if (!e2 || !c3) return (0, H.jsxs)(`div`, { className: W.emptyState, children: [(0, H.jsx)(Me, { size: 40 }), (0, H.jsx)(`p`, { children: `اختر تخصصاً من القائمة أعلاه` })] });
    let { courses: l3, matrix: d2, headerCounts: f2 } = c3, p2 = a3 && l3.find((e3) => e3.code === a3) || null, m2 = (e3, t3, n4) => {
      i3(e3, t3), B(`فلترة: ${n4} متدرب متوقع لـ ${e3} و ${t3}`, `info`);
    };
    return (0, H.jsx)(`div`, { className: Y.view, children: l3.length === 0 ? (0, H.jsxs)(`div`, { className: W.emptyState, children: [(0, H.jsx)(Me, { size: 40 }), (0, H.jsx)(`p`, { children: `لا توجد تعارضات بين المقررات المتوقعة` })] }) : (0, H.jsx)(`div`, { className: Y.tableWrapper, children: (0, H.jsxs)(`table`, { className: Y.table, children: [(0, H.jsxs)(`thead`, { children: [(0, H.jsxs)(`tr`, { children: [(0, H.jsx)(`th`, { className: I(Y.rowHeader, Y.centeredHeader), title: `عدد المقررات الأخرى (من مستويات مختلفة) المشتركة في متدربين متوقعين`, children: `عدد المقررات المتعارضة` }), l3.map((e3) => (0, H.jsx)(`th`, { className: I(Y.conflictCountHeader, a3 === e3.code && Y.conflictCountHeaderHovered), onMouseEnter: () => o3(e3.code), onMouseLeave: () => o3(null), children: f2[e3.code] === 0 ? `` : f2[e3.code] }, e3.code))] }), (0, H.jsxs)(`tr`, { children: [(0, H.jsx)(`th`, { className: I(Y.rowHeader, Y.centeredHeader), children: `رمز المقرر | اسم المقرر | المستوى` }), l3.map((e3) => (0, H.jsx)(`th`, { className: I(Y.colHeader, Ba[e3.semester], a3 === e3.code && Y.colHeaderHovered), title: `${e3.name}
المستوى ${e3.semester}`, children: (0, H.jsxs)(`div`, { className: Y.colHeaderContent, children: [(0, H.jsx)(`span`, { className: Y.courseCode, children: e3.code }), (0, H.jsxs)(`span`, { className: Y.courseLevel, children: [`م`, e3.semester] })] }) }, e3.code))] })] }), (0, H.jsx)(`tbody`, { children: l3.map((e3) => {
      let t3 = a3 !== null && p2 !== null && d2[e3.code][a3] > 0 && e3.semester !== p2.semester;
      return (0, H.jsxs)(`tr`, { children: [(0, H.jsx)(`td`, { className: I(Y.rowHeader, Ba[e3.semester], t3 && Y.rowHeaderHighlighted), title: `${e3.name}
المستوى ${e3.semester}`, children: (0, H.jsxs)(`div`, { className: Y.rowHeaderContent, children: [(0, H.jsx)(`span`, { className: Y.courseCode, children: e3.code }), (0, H.jsx)(`span`, { className: Y.courseName, children: e3.name }), (0, H.jsxs)(`span`, { className: Y.courseLevel, children: [`م`, e3.semester] })] }) }), l3.map((t4) => {
        let n4 = d2[e3.code][t4.code], r4 = e3.semester === t4.semester, i4 = Oi(n4, r4), o4 = i4 === `1` || i4 === `2` || i4 === `3`, s4 = a3 === t4.code && n4 > 0 && !r4, c4 = n4 === -1 ? `نفس المقرر` : r4 ? `نفس المستوى` : `${n4} متدرب مشترك${o4 ? ` — انقر للفلترة` : ``}`;
        return (0, H.jsx)(`td`, { className: I(Y.cell, wo[i4], o4 && Y.cellClickable, s4 && Y.cellHighlighted), title: `${e3.code} ↔ ${t4.code}: ${c4}`, onClick: o4 ? () => m2(e3.code, t4.code, n4) : void 0, children: n4 === -1 ? `-` : r4 || n4 === 0 ? `` : n4 }, t4.code);
      })] }, e3.code);
    }) })] }) }) });
  }
  async function Eo(e2, t2) {
    let { domToPng: n3 } = await Ke(async () => {
      let { domToPng: e3 } = await import("./dist-BlGRJsIT.js");
      return { domToPng: e3 };
    }, []);
    document.fonts?.ready && await document.fonts.ready;
    let r3 = await n3(e2, { scale: 2, backgroundColor: getComputedStyle(document.documentElement).getPropertyValue(`--bg-base`).trim() || `#ffffff`, style: { margin: `0` } }), i3 = document.createElement(`a`);
    i3.download = `خريطة_المقررات_${t2 || `الخطة`}.png`, i3.href = r3, i3.click();
  }
  var Do = { matrix: `مصفوفة المتوقع`, conflicts: `تعارض المتوقع`, sections: `تخطيط الشُّعب`, coursemap: `خريطة المقررات` };
  function Oo(e2) {
    let t2 = z.getState(), n3 = e2?.specialty ?? t2.currentSpecialty, r3 = e2?.tabLabel ?? Do[t2.currentTab], i3 = document.title, a3 = document.documentElement.dataset.theme;
    document.title = `${r3} - ${n3}`, document.documentElement.dataset.theme = `light`, window.print(), document.documentElement.dataset.theme = a3, document.title = i3;
  }
  var X = { view: `_view_4ovv1_11`, emptyState: `_emptyState_4ovv1_27`, controls: `_controls_4ovv1_49`, controlsSpacer: `_controlsSpacer_4ovv1_75`, specialtyField: `_specialtyField_4ovv1_83`, specialtySelect: `_specialtySelect_4ovv1_101`, actionBtn: `_actionBtn_4ovv1_125`, exportArea: `_exportArea_4ovv1_167`, docHeader: `_docHeader_4ovv1_177`, docTitleBlock: `_docTitleBlock_4ovv1_205`, docTitle: `_docTitle_4ovv1_205`, docSpecialty: `_docSpecialty_4ovv1_237`, docAuthors: `_docAuthors_4ovv1_249`, stats: `_stats_4ovv1_261`, chip: `_chip_4ovv1_275`, mismatch: `_mismatch_4ovv1_315`, chipTotal: `_chipTotal_4ovv1_345`, chipCritical: `_chipCritical_4ovv1_351`, chipMedium: `_chipMedium_4ovv1_367`, chipShort: `_chipShort_4ovv1_383`, chipStandalone: `_chipStandalone_4ovv1_399`, legend: `_legend_4ovv1_417`, legendItem: `_legendItem_4ovv1_435`, legendDot: `_legendDot_4ovv1_449`, dotAncestor: `_dotAncestor_4ovv1_461`, dotDescendant: `_dotDescendant_4ovv1_467`, dotSelf: `_dotSelf_4ovv1_473`, grid: `_grid_4ovv1_483`, corner: `_corner_4ovv1_495`, groupHeader: `_groupHeader_4ovv1_505`, groupIcon: `_groupIcon_4ovv1_521`, groupName: `_groupName_4ovv1_529`, groupStat: `_groupStat_4ovv1_539`, gh_critical: `_gh_critical_4ovv1_549`, gh_medium: `_gh_medium_4ovv1_563`, gh_short: `_gh_short_4ovv1_577`, gh_standalone: `_gh_standalone_4ovv1_591`, semLabel: `_semLabel_4ovv1_609`, semName: `_semName_4ovv1_635`, semCredits: `_semCredits_4ovv1_647`, semHoursBox: `_semHoursBox_4ovv1_667`, hoursTheory: `_hoursTheory_4ovv1_695`, hoursPractical: `_hoursPractical_4ovv1_721`, totalBadge: `_totalBadge_4ovv1_747`, cell: `_cell_4ovv1_771`, cell_critical: `_cell_critical_4ovv1_793`, cell_medium: `_cell_medium_4ovv1_799`, cell_short: `_cell_short_4ovv1_805`, cell_standalone: `_cell_standalone_4ovv1_811`, empty: `_empty_4ovv1_27`, card: `_card_4ovv1_837`, cardSelf: `_cardSelf_4ovv1_877`, cardAncestor: `_cardAncestor_4ovv1_887`, cardDescendant: `_cardDescendant_4ovv1_897`, cardHead: `_cardHead_4ovv1_907`, cardCode: `_cardCode_4ovv1_923`, cardCredits: `_cardCredits_4ovv1_933`, creditsNum: `_creditsNum_4ovv1_959`, creditsWord: `_creditsWord_4ovv1_969`, cardName: `_cardName_4ovv1_981`, cardMeta: `_cardMeta_4ovv1_1001`, tag: `_tag_4ovv1_1013`, tagTheory: `_tagTheory_4ovv1_1027`, tagPractical: `_tagPractical_4ovv1_1037`, cardPrereq: `_cardPrereq_4ovv1_1047`, coopLabel: `_coopLabel_4ovv1_1077`, coopSection: `_coopSection_4ovv1_1093`, coopCard: `_coopCard_4ovv1_1107`, coopIcon: `_coopIcon_4ovv1_1129`, coopCode: `_coopCode_4ovv1_1137`, coopName: `_coopName_4ovv1_1149`, coopCredits: `_coopCredits_4ovv1_1161` };
  var ko = [`critical`, `medium`, `short`, `standalone`];
  var Ao = { critical: { name: `المسار الحرج`, icon: `\u{1F534}` }, medium: { name: `المسار المتوسط`, icon: `\u{1F7E0}` }, short: { name: `المسار البسيط`, icon: `\u{1F535}` }, standalone: { name: `المقررات المستقلة`, icon: `\u{1F7E2}` } };
  var jo = { 1: `الأول`, 2: `الثاني`, 3: `الثالث`, 4: `الرابع` };
  function Mo() {
    let e2 = z((e3) => e3.plans), t2 = z((e3) => e3.currentSpecialty), n3 = (0, u.useMemo)(() => Object.keys(e2), [e2]), [r3, i3] = (0, u.useState)(() => e2[t2] ? t2 : n3[0] || ``), a3 = e2[r3] ? r3 : e2[t2] ? t2 : n3[0] || ``, [o3, s3] = (0, u.useState)(null), c3 = (0, u.useRef)(null), l3 = (0, u.useRef)(null), d2 = e2[a3], f2 = (0, u.useMemo)(() => {
      if (!d2) return null;
      let e3 = {};
      ko.forEach((t4) => {
        (d2.courseGroups[t4] || []).forEach((n5) => e3[n5] = t4);
      });
      let t3 = { critical: { 1: [], 2: [], 3: [], 4: [] }, medium: { 1: [], 2: [], 3: [], 4: [] }, short: { 1: [], 2: [], 3: [], 4: [] }, standalone: { 1: [], 2: [], 3: [], 4: [] } }, n4 = [];
      Object.values(d2.coursesData).forEach((r5) => {
        if (r5.semester === 5) {
          n4.push(r5);
          return;
        }
        r5.semester < 1 || r5.semester > 4 || t3[e3[r5.code] || `standalone`][r5.semester].push(r5);
      }), (d2.coopExtra || []).forEach((e4) => n4.push(e4));
      let r4 = {};
      for (let e4 = 1; e4 <= 4; e4++) {
        let n5 = { theory: 0, practical: 0, total: 0, credits: 0 };
        ko.forEach((r5) => {
          t3[r5][e4].forEach((e5) => {
            n5.theory += e5.theory, n5.practical += e5.practical, n5.total += e5.theory + e5.practical, n5.credits += e5.credits;
          });
        }), r4[e4] = n5;
      }
      let i4 = { critical: { count: 0, credits: 0 }, medium: { count: 0, credits: 0 }, short: { count: 0, credits: 0 }, standalone: { count: 0, credits: 0 } };
      ko.forEach((e4) => {
        let n5 = [t3[e4][1], t3[e4][2], t3[e4][3], t3[e4][4]].flat();
        i4[e4] = { count: n5.length, credits: n5.reduce((e5, t4) => e5 + t4.credits, 0) };
      });
      let a4 = Object.values(d2.coursesData);
      return { matrix: t3, coop: n4, semesterHours: r4, groupStats: i4, totals: { count: a4.length, credits: a4.reduce((e4, t4) => e4 + t4.credits, 0) }, contactTotal: [1, 2, 3, 4].reduce((e4, t4) => e4 + r4[t4].total, 0) };
    }, [d2]), { ancestors: p2, descendants: m2 } = (0, u.useMemo)(() => !o3 || !d2 ? { ancestors: /* @__PURE__ */ new Set(), descendants: /* @__PURE__ */ new Set() } : { ancestors: new Set(Rt(o3, d2.prerequisites)), descendants: new Set(zt(o3, d2.dependents)) }, [o3, d2]), h2 = async () => {
      if (!c3.current) return;
      let e3 = l3.current;
      try {
        e3 && (e3.style.display = `flex`), B(`جارٍ إنشاء الصورة…`, `info`), await Eo(c3.current, a3), B(`تم حفظ الصورة`, `success`);
      } catch (e4) {
        console.error(e4), B(`تعذر حفظ الصورة`, `error`);
      } finally {
        e3 && (e3.style.display = ``);
      }
    };
    if (n3.length === 0 || !d2 || !f2) return (0, H.jsxs)(`div`, { className: X.emptyState, children: [(0, H.jsx)(M, { size: 40 }), (0, H.jsx)(`p`, { children: `لا توجد خطة تدريبية محمّلة` })] });
    let g2 = (e3) => {
      let t3 = d2.prerequisites[e3.code] || [], n4 = t3.length > 0 ? t3.join(`، `) : `—`, r4 = o3 === e3.code, i4 = !r4 && p2.has(e3.code), a4 = !r4 && m2.has(e3.code);
      return (0, H.jsxs)(`div`, { className: I(X.card, r4 && X.cardSelf, i4 && X.cardAncestor, a4 && X.cardDescendant), onMouseEnter: () => s3(e3.code), onMouseLeave: () => s3(null), children: [(0, H.jsx)(`div`, { className: X.cardHead, children: (0, H.jsx)(`span`, { className: X.cardCode, children: e3.code }) }), (0, H.jsx)(`div`, { className: X.cardName, title: e3.name, children: e3.name }), (0, H.jsxs)(`div`, { className: X.cardMeta, children: [e3.theory > 0 && (0, H.jsxs)(`span`, { className: I(X.tag, X.tagTheory), children: [e3.theory, ` نظري`] }), e3.practical > 0 && (0, H.jsxs)(`span`, { className: I(X.tag, X.tagPractical), children: [e3.practical, ` عملي`] })] }), (0, H.jsxs)(`div`, { className: X.cardCredits, children: [(0, H.jsx)(`span`, { className: X.creditsNum, children: e3.credits }), (0, H.jsx)(`span`, { className: X.creditsWord, children: `معتمدة` })] }), (0, H.jsxs)(`div`, { className: X.cardPrereq, children: [(0, H.jsx)(me, { size: 10 }), (0, H.jsx)(`span`, { children: n4 })] })] }, e3.code);
    }, _2 = d2.reportTotals, v2 = !!_2 && _2.courses > 0 && _2.courses !== f2.totals.count, y2 = !!_2 && _2.credits > 0 && _2.credits !== f2.totals.credits, b2 = _2 ? `عدد المقررات المحسوب ${f2.totals.count}، بينما ترويسة التقرير تذكر ${_2.courses}.` : ``, x2 = _2 ? `الوحدات المحسوبة ${f2.totals.credits} (مجموع مقررات الخطة شاملاً التدريب التعاوني)، بينما ترويسة التقرير تذكر ${_2.credits}. يوجد تعارض في بيانات المصدر.` : ``, S2 = (0, H.jsxs)(`div`, { className: X.stats, children: [(0, H.jsxs)(`span`, { className: I(X.chip, X.chipTotal), children: [(0, H.jsx)(`b`, { children: f2.totals.count }), ` مقرر`, v2 && (0, H.jsx)(`span`, { className: X.mismatch, title: b2, "aria-label": `اختلاف عن ترويسة التقرير`, children: `؟` })] }), (0, H.jsxs)(`span`, { className: I(X.chip, X.chipTotal), children: [(0, H.jsx)(`b`, { children: f2.totals.credits }), ` وحدة معتمدة`, y2 && (0, H.jsx)(`span`, { className: X.mismatch, title: x2, "aria-label": `اختلاف عن ترويسة التقرير`, children: `؟` })] }), (0, H.jsxs)(`span`, { className: I(X.chip, X.chipTotal), children: [(0, H.jsx)(`b`, { children: f2.contactTotal }), ` ساعة اتصال`] }), (0, H.jsxs)(`span`, { className: I(X.chip, X.chipCritical), children: [(0, H.jsx)(`b`, { children: f2.groupStats.critical.count }), ` مسار حرج`] }), (0, H.jsxs)(`span`, { className: I(X.chip, X.chipMedium), children: [(0, H.jsx)(`b`, { children: f2.groupStats.medium.count }), ` مسار متوسط`] }), (0, H.jsxs)(`span`, { className: I(X.chip, X.chipShort), children: [(0, H.jsx)(`b`, { children: f2.groupStats.short.count }), ` مسار بسيط`] }), (0, H.jsxs)(`span`, { className: I(X.chip, X.chipStandalone), children: [(0, H.jsx)(`b`, { children: f2.groupStats.standalone.count }), ` مقرر مستقل`] })] }), C2 = (0, H.jsxs)(`div`, { className: X.legend, children: [(0, H.jsxs)(`span`, { className: X.legendItem, children: [(0, H.jsx)(`span`, { className: I(X.legendDot, X.dotAncestor) }), ` متطلب سابق`] }), (0, H.jsxs)(`span`, { className: X.legendItem, children: [(0, H.jsx)(`span`, { className: I(X.legendDot, X.dotDescendant) }), ` مقرر لاحق`] }), (0, H.jsxs)(`span`, { className: X.legendItem, children: [(0, H.jsx)(`span`, { className: I(X.legendDot, X.dotSelf) }), ` المحدد`] })] });
    return (0, H.jsxs)(`div`, { className: X.view, children: [(0, H.jsxs)(`div`, { className: X.controls, "data-print-hide": true, children: [(0, H.jsxs)(`label`, { className: X.specialtyField, children: [(0, H.jsx)(`span`, { children: `التخصص` }), (0, H.jsx)(`select`, { className: X.specialtySelect, value: a3, onChange: (e3) => i3(e3.target.value), title: `التخصص الحالي (  يظهر في القائمة التخصصات من تقارير الخطط SC04 فقط)`, children: n3.map((e3) => (0, H.jsx)(`option`, { value: e3, children: e3 }, e3)) })] }), S2, (0, H.jsx)(`div`, { className: X.controlsSpacer }), C2, (0, H.jsx)(`div`, { className: X.controlsSpacer }), (0, H.jsxs)(`button`, { className: X.actionBtn, onClick: () => void h2(), title: `حفظ الخريطة كصورة PNG`, children: [(0, H.jsx)(fe, { size: 15 }), (0, H.jsx)(`span`, { children: `حفظ كصورة` })] }), (0, H.jsxs)(`button`, { className: X.actionBtn, onClick: () => Oo({ specialty: a3, tabLabel: `خريطة المقررات` }), title: `تصدير PDF عبر نافذة الطباعة`, children: [(0, H.jsx)(j, { size: 15 }), (0, H.jsx)(`span`, { children: `PDF` })] })] }), (0, H.jsxs)(`div`, { className: X.exportArea, ref: c3, children: [(0, H.jsxs)(`div`, { className: X.docHeader, ref: l3, children: [(0, H.jsxs)(`div`, { className: X.docTitleBlock, children: [(0, H.jsxs)(`div`, { className: X.docTitle, children: [(0, H.jsx)(ge, { size: 20 }), (0, H.jsx)(`span`, { children: `خريطة المقررات والمتطلبات` })] }), (0, H.jsx)(`div`, { className: X.docSpecialty, children: a3 }), (0, H.jsx)(`div`, { className: X.docAuthors, children: `فكرة وإعداد: م. محمد يوسف الشبيلي | أ. منصور عبدالعزيز الفايز` })] }), S2, C2] }), (0, H.jsxs)(`div`, { className: X.grid, children: [(0, H.jsx)(`div`, { className: X.corner }), ko.map((e3) => (0, H.jsxs)(`div`, { className: I(X.groupHeader, X[`gh_${e3}`]), children: [(0, H.jsx)(`span`, { className: X.groupIcon, children: Ao[e3].icon }), (0, H.jsx)(`div`, { className: X.groupName, children: Ao[e3].name }), (0, H.jsxs)(`div`, { className: X.groupStat, children: [f2.groupStats[e3].count, ` مقررات`] })] }, e3)), [1, 2, 3, 4].map((e3) => (0, H.jsxs)(u.Fragment, { children: [(0, H.jsxs)(`div`, { className: X.semLabel, children: [(0, H.jsx)(`div`, { className: X.semName, children: jo[e3] }), (0, H.jsxs)(`div`, { className: X.semCredits, title: `${f2.semesterHours[e3].credits} ساعة معتمدة`, children: [f2.semesterHours[e3].credits, ` معتمدة`] }), (0, H.jsxs)(`div`, { className: X.semHoursBox, children: [(0, H.jsxs)(`div`, { className: X.hoursTheory, title: `ساعات اتصال نظري`, children: [f2.semesterHours[e3].theory, ` نظري`] }), (0, H.jsxs)(`div`, { className: X.hoursPractical, title: `ساعات اتصال عملي`, children: [f2.semesterHours[e3].practical, ` عملي`] }), (0, H.jsx)(`div`, { className: X.totalBadge, title: `ساعات اتصال نظري وعملي`, children: f2.semesterHours[e3].total })] })] }), ko.map((t3) => {
      let n4 = f2.matrix[t3][e3];
      return (0, H.jsx)(`div`, { className: I(X.cell, X[`cell_${t3}`]), children: n4.length === 0 ? (0, H.jsx)(`div`, { className: X.empty, children: `—` }) : n4.map(g2) }, t3);
    })] }, e3))] }), f2.coop.length > 0 && (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(`div`, { className: X.coopLabel, children: `\u{1F7E3} الفصل الخامس: التدريب التعاوني (يعتمد على جميع المقررات)` }), (0, H.jsx)(`div`, { className: X.coopSection, children: f2.coop.map((e3) => (0, H.jsxs)(`div`, { className: X.coopCard, children: [(0, H.jsx)(`span`, { className: X.coopIcon, children: `\u{1F7E3}` }), (0, H.jsx)(`span`, { className: X.coopCode, children: e3.code }), (0, H.jsx)(`span`, { className: X.coopName, children: e3.name }), (0, H.jsxs)(`div`, { className: X.coopCredits, children: [(0, H.jsx)(`span`, { className: X.creditsNum, children: e3.credits }), (0, H.jsx)(`span`, { className: X.creditsWord, children: `معتمدة` })] })] }, e3.code)) })] })] })] });
  }
  var Z = { bulb: `_bulb_10z1e_5`, pulse: `_pulse_10z1e_49`, guidePing: `_guidePing_10z1e_1`, overlay: `_overlay_10z1e_83`, backdrop: `_backdrop_10z1e_101`, dialog: `_dialog_10z1e_111`, dlgHead: `_dlgHead_10z1e_141`, dlgTitle: `_dlgTitle_10z1e_151`, closeBtn: `_closeBtn_10z1e_163`, intro: `_intro_10z1e_193`, introWhat: `_introWhat_10z1e_211`, introWhen: `_introWhen_10z1e_223`, introMeta: `_introMeta_10z1e_249`, metaLabel: `_metaLabel_10z1e_275`, needTag: `_needTag_10z1e_281`, fullTourBtn: `_fullTourBtn_10z1e_299`, svcRow: `_svcRow_10z1e_335`, svcBtn: `_svcBtn_10z1e_345`, svcPlay: `_svcPlay_10z1e_351`, svcHint: `_svcHint_10z1e_387`, svcList: `_svcList_10z1e_397`, svcTitle: `_svcTitle_10z1e_441`, svcDesc: `_svcDesc_10z1e_449`, stepsTitle: `_stepsTitle_10z1e_459`, stepsList: `_stepsList_10z1e_469`, stepNum: `_stepNum_10z1e_499`, stepsActions: `_stepsActions_10z1e_527`, primaryBtn: `_primaryBtn_10z1e_539`, ghostBtn: `_ghostBtn_10z1e_565`, navBtn: `_navBtn_10z1e_589`, spot: `_spot_10z1e_619`, dim: `_dim_10z1e_637`, bubble: `_bubble_10z1e_651`, bubbleHead: `_bubbleHead_10z1e_675`, bubbleTitle: `_bubbleTitle_10z1e_685`, bubbleCount: `_bubbleCount_10z1e_695`, bubbleText: `_bubbleText_10z1e_705`, bubbleWarn: `_bubbleWarn_10z1e_715`, doneBubble: `_doneBubble_10z1e_729`, donePop: `_donePop_10z1e_1`, doneIcon: `_doneIcon_10z1e_759`, doneTitle: `_doneTitle_10z1e_765`, bubbleNav: `_bubbleNav_10z1e_775` };
  function No(e2, t2) {
    return { id: `__all`, title: `المرشد الشامل — ${t2}`, desc: `جولة واحدة على كل عمليات التبويب`, steps: e2.services.flatMap((e3) => e3.steps), after: () => e2.services.forEach((e3) => e3.after?.()) };
  }
  var Po = `matrix-guide-seen`;
  function Fo() {
    try {
      let e2 = JSON.parse(localStorage.getItem(Po) ?? `[]`);
      return new Set(Array.isArray(e2) ? e2 : []);
    } catch {
      return /* @__PURE__ */ new Set();
    }
  }
  function Io(e2) {
    try {
      let t2 = Fo();
      t2.add(e2), localStorage.setItem(Po, JSON.stringify([...t2]));
    } catch {
    }
  }
  function Lo({ children: e2, onClose: t2 }) {
    return (0, H.jsxs)(`div`, { dir: `rtl`, className: Z.overlay, children: [(0, H.jsx)(`div`, { className: Z.backdrop, onClick: t2 }), (0, H.jsx)(`div`, { className: Z.dialog, children: e2 })] });
  }
  function Ro({ intro: e2 }) {
    return (0, H.jsxs)(`div`, { className: Z.intro, children: [(0, H.jsx)(`p`, { className: Z.introWhat, children: e2.what }), (0, H.jsxs)(`p`, { className: Z.introWhen, children: [(0, H.jsx)(te, { size: 14, style: { flexShrink: 0, marginTop: 3 } }), (0, H.jsxs)(`span`, { children: [(0, H.jsx)(`b`, { children: `متى تفتحه؟` }), ` `, e2.when] })] }), (e2.needs?.length || e2.outputs?.length) && (0, H.jsxs)(`div`, { className: Z.introMeta, children: [!!e2.needs?.length && (0, H.jsxs)(`span`, { children: [(0, H.jsx)(oe, { size: 14, className: Z.metaLabel }), (0, H.jsx)(`span`, { className: Z.metaLabel, children: `يحتاج:` }), e2.needs.map((e3) => (0, H.jsx)(`span`, { className: Z.needTag, children: e3 }, e3))] }), !!e2.outputs?.length && (0, H.jsxs)(`span`, { children: [(0, H.jsx)(se, { size: 14, className: Z.metaLabel }), (0, H.jsx)(`span`, { className: Z.metaLabel, children: `يُخرج:` }), (0, H.jsx)(`span`, { children: e2.outputs.join(` \xB7 `) })] })] })] });
  }
  function zo({ content: e2, title: t2, onStartTour: n3, onClose: r3 }) {
    let [i3, a3] = (0, u.useState)(null), o3 = e2.services.find((e3) => e3.id === i3);
    return (0, H.jsxs)(Lo, { onClose: r3, children: [(0, H.jsxs)(`div`, { className: Z.dlgHead, children: [(0, H.jsx)(ne, { size: 16, style: { color: `var(--primary)` } }), (0, H.jsx)(`h2`, { className: Z.dlgTitle, children: t2 ? `دليل: ${t2}` : `دليل التبويب` }), (0, H.jsx)(`button`, { className: Z.closeBtn, onClick: r3, title: `إغلاق`, children: (0, H.jsx)(Be, { size: 16 }) })] }), o3 ? (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(`h3`, { className: Z.stepsTitle, children: o3.title }), (0, H.jsx)(`ol`, { className: Z.stepsList, children: o3.steps.map((e3, t3) => (0, H.jsxs)(`li`, { children: [(0, H.jsx)(`span`, { className: Z.stepNum, children: t3 + 1 }), e3.text] }, t3)) }), (0, H.jsxs)(`div`, { className: Z.stepsActions, children: [(0, H.jsx)(`button`, { className: Z.primaryBtn, onClick: () => n3(o3), children: `▶ ابدأ الجولة الإرشادية` }), (0, H.jsx)(`button`, { className: Z.ghostBtn, onClick: () => a3(null), children: `رجوع للقائمة` })] })] }) : (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(Ro, { intro: e2.intro }), !!e2.services.length && (0, H.jsxs)(H.Fragment, { children: [(0, H.jsxs)(`button`, { className: Z.fullTourBtn, onClick: () => n3(No(e2, t2 ?? `التبويب`)), children: [(0, H.jsx)(Ce, { size: 15 }), ` المرشد الشامل — جولة على كل عمليات التبويب`] }), (0, H.jsx)(`p`, { className: Z.svcHint, children: `أو اختر عملية بعينها: زر ▶ يبدأ جولتها مباشرة، ونقر العنوان يعرض خطواتها المكتوبة.` }), (0, H.jsx)(`div`, { className: Z.svcList, children: e2.services.map((e3) => (0, H.jsxs)(`div`, { className: Z.svcRow, children: [(0, H.jsx)(`button`, { className: Z.svcPlay, onClick: () => n3(e3), title: `ابدأ جولة \xAB${e3.title}\xBB`, children: (0, H.jsx)(Ce, { size: 13 }) }), (0, H.jsxs)(`button`, { className: Z.svcBtn, onClick: () => a3(e3.id), children: [(0, H.jsx)(`span`, { className: Z.svcTitle, children: e3.title }), (0, H.jsx)(`span`, { className: Z.svcDesc, children: e3.desc })] })] }, e3.id)) })] })] })] });
  }
  function Bo(e2) {
    let t2 = e2.getBoundingClientRect(), n3 = t2.bottom;
    if (e2.tagName === `TH`) {
      let t3 = e2.closest(`table`);
      t3 && (n3 = Math.min(t3.getBoundingClientRect().bottom, window.innerHeight - 60));
    }
    return { top: t2.top, left: t2.left, width: t2.width, height: n3 - t2.top, bottom: n3 };
  }
  function Vo(e2) {
    let t2 = Math.min(...e2.map((e3) => e3.top)), n3 = Math.min(...e2.map((e3) => e3.left)), r3 = Math.max(...e2.map((e3) => e3.left + e3.width)), i3 = Math.max(...e2.map((e3) => e3.bottom));
    return { top: t2, left: n3, width: r3 - n3, height: i3 - t2, bottom: i3 };
  }
  function Ho({ service: e2, onClose: t2 }) {
    let [n3, r3] = (0, u.useState)(0), [i3, a3] = (0, u.useState)(null), [o3, s3] = (0, u.useState)(false);
    (0, u.useEffect)(() => {
      if (!o3) return;
      let e3 = window.setTimeout(t2, 4e3);
      return () => window.clearTimeout(e3);
    }, [o3, t2]);
    let c3 = e2.steps[n3], l3 = !!(c3.targets?.length || c3.target);
    if ((0, u.useEffect)(() => () => e2.after?.(), [e2]), (0, u.useEffect)(() => {
      c3.before?.();
      let e3 = true, t3 = 0, n4 = 0, r4 = 0, i4 = () => (c3.targets ?? (c3.target ? [c3.target] : [])).map((e4) => document.querySelector(`[data-guide="${e4}"]`)).filter((e4) => e4 instanceof HTMLElement), o4 = () => {
        if (!e3) return;
        let t4 = i4();
        a3(t4.length ? Vo(t4.map(Bo)) : null);
      }, s4 = () => {
        if (!e3) return;
        let c4 = i4();
        if (c4.length) {
          c4[0].scrollIntoView({ block: `nearest`, inline: `nearest` }), t3 = requestAnimationFrame(o4);
          return;
        }
        a3(null), r4++ < 20 && (n4 = window.setTimeout(s4, 60));
      };
      return s4(), window.addEventListener(`resize`, o4), window.addEventListener(`scroll`, o4, true), () => {
        e3 = false, cancelAnimationFrame(t3), clearTimeout(n4), window.removeEventListener(`resize`, o4), window.removeEventListener(`scroll`, o4, true);
      };
    }, [c3]), (0, u.useEffect)(() => {
      let i4 = (i5) => {
        i5.key === `Escape` && t2(), i5.key === `Enter` && (i5.preventDefault(), n3 < e2.steps.length - 1 ? r3(n3 + 1) : s3(true)), i5.key === `ArrowLeft` && n3 < e2.steps.length - 1 && r3(n3 + 1), i5.key === `ArrowRight` && n3 > 0 && r3(n3 - 1);
      };
      return window.addEventListener(`keydown`, i4), () => window.removeEventListener(`keydown`, i4);
    }, [t2, n3, e2.steps.length]), o3) return (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(`div`, { className: Z.dim }), (0, H.jsxs)(`div`, { dir: `rtl`, className: `${Z.bubble} ${Z.doneBubble}`, style: { top: window.innerHeight / 2 - 70, left: window.innerWidth / 2 - 165, width: 330 }, onClick: t2, children: [(0, H.jsx)(T, { size: 34, className: Z.doneIcon }), (0, H.jsx)(`span`, { className: Z.doneTitle, children: `أحسنت — اكتملت الجولة! \u{1F389}` }), (0, H.jsx)(`p`, { className: Z.bubbleText, children: `صرت تعرف هذا التبويب وعملياته. اللمبة تبقى في متناولك متى احتجت تذكيرًا.` })] })] });
    let d2 = n3 === e2.steps.length - 1, f2 = i3 ? i3.bottom + 170 < window.innerHeight ? i3.bottom + 10 : Math.max(10, i3.top - 170) : window.innerHeight / 2 - 90, p2 = i3 ? Math.min(Math.max(10, i3.left + i3.width / 2 - 330 / 2), window.innerWidth - 330 - 10) : window.innerWidth / 2 - 330 / 2;
    return (0, H.jsxs)(H.Fragment, { children: [i3 ? (0, H.jsx)(`div`, { className: Z.spot, style: { top: i3.top - 5, left: i3.left - 5, width: i3.width + 10, height: i3.height + 10 } }) : (0, H.jsx)(`div`, { className: Z.dim }), (0, H.jsxs)(`div`, { dir: `rtl`, className: Z.bubble, style: { top: f2, left: p2, width: 330 }, children: [(0, H.jsxs)(`div`, { className: Z.bubbleHead, children: [(0, H.jsx)(ne, { size: 16, style: { flexShrink: 0, color: `var(--primary)` } }), (0, H.jsx)(`span`, { className: Z.bubbleTitle, children: e2.title }), (0, H.jsxs)(`span`, { className: Z.bubbleCount, children: [n3 + 1, ` / `, e2.steps.length] }), (0, H.jsx)(`button`, { className: Z.closeBtn, onClick: t2, title: `إنهاء (Esc)`, children: (0, H.jsx)(Be, { size: 14 }) })] }), (0, H.jsxs)(`p`, { className: Z.bubbleText, children: [c3.text, l3 && !i3 && (0, H.jsx)(`span`, { className: Z.bubbleWarn, children: `(العنصر غير ظاهر حاليًا — يظهر عند تحقق شرطه)` })] }), (0, H.jsxs)(`div`, { className: Z.bubbleNav, children: [(0, H.jsx)(`button`, { className: Z.navBtn, onClick: () => r3(n3 - 1), disabled: n3 === 0, children: `السابق` }), (0, H.jsx)(`button`, { className: Z.primaryBtn, onClick: () => d2 ? s3(true) : r3(n3 + 1), children: d2 ? `إنهاء` : `التالي` })] })] })] });
  }
  function Uo({ tab: e2, title: t2, content: n3 }) {
    let [r3, i3] = (0, u.useState)(false), [a3, o3] = (0, u.useState)(null), [s3, c3] = (0, u.useState)(() => !Fo().has(e2)), [l3, d2] = (0, u.useState)(true);
    (0, u.useEffect)(() => {
      if (!s3) return;
      let e3 = window.setTimeout(() => d2(false), 5e3);
      return () => window.clearTimeout(e3);
    }, [s3]);
    let f2 = () => {
      i3(true), s3 && (Io(e2), c3(false));
    };
    return (0, u.useEffect)(() => {
      let e3 = (e4) => {
        if (e4.key !== `?` && e4.key !== `؟`) return;
        let t3 = e4.target;
        t3 && (t3.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t3.tagName)) || (e4.preventDefault(), f2());
      };
      return window.addEventListener(`keydown`, e3), () => window.removeEventListener(`keydown`, e3);
    }, [s3, e2]), (0, H.jsxs)(H.Fragment, { children: [(0, H.jsxs)(`button`, { className: Z.bulb, onClick: f2, title: `دليل \xAB${t2}\xBB: تعريف بالتبويب وخطوات مهامه وجولة إرشادية على عناصره (؟)`, children: [(0, H.jsx)(N, { size: 14 }), s3 && l3 && (0, H.jsx)(`span`, { className: Z.pulse })] }), r3 && (0, H.jsx)(zo, { content: n3, title: t2, onStartTour: (e3) => {
      i3(false), o3(e3);
    }, onClose: () => i3(false) }), a3 && (0, H.jsx)(Ho, { service: a3, onClose: () => o3(null) })] });
  }
  var Wo = (e2) => () => {
    let t2 = document.querySelector(`[data-guide="${e2}"]`);
    t2 instanceof HTMLElement && t2.click();
  };
  var Go = { intro: { what: `تبويب يحسب عدد شُعب كل مقرر (نظري/عملي) من المتوقعين وسعة الشعبة، ويجمع ساعات الاتصال والنصاب — وهو أساس الإسناد والجدولة.`, when: `بعد اكتمال المصفوفة وحساب المتوقعين، وقبل إسناد الشُّعب وبناء الجدول.`, needs: [`SC04`, `SH06`, `SF01`], outputs: [`خطة الشُّعب وإجمالياتها`, `Excel`, `طباعة`] }, services: [{ id: `settings`, title: `الإعدادات العامة (شريط التحكم)`, desc: `السعات الافتراضية والمستجدون ورزمهم — تسري على كل الجدول.`, steps: [{ target: `secplan-defaults`, text: `سعة الشعبة الافتراضية للأنواع الأربعة: نظري، ورشة/معمل، حاسب آلي، عن بعد — تسري على كل المقررات ما لم يُخصَّص مقرر بعينه في الجدول.` }, { target: `secplan-freshmen`, text: `المستجدون: عددهم يُضاف إلى متوقعي مقررات المستوى الأول فيرفع شُعبها.` }, { target: `secplan-bundles`, text: `رزم المستجدين: أدخل سعة الرزمة الواحدة، وعدد الرزم يُشتق آليًّا = ⌈إجمالي المستجدين \xF7 سعة الرزمة⌉.` }] }, { id: `course`, title: `ضبط المقرر الواحد (صفوف الجدول)`, desc: `نوع التدريب والمقر والساعات والسعة والتقريب — لكل مقرر على حدة.`, steps: [{ target: `secplan-type-col`, text: `نوع التدريب لكل جزء (نظري وعملي): تقليدي / مدمج / ذاتي / عن بعد — غير التقليدي يظلَّل الصف بلون نوعه، وتغيير النوع يعيد سعة الشعبة لافتراضي النوع الجديد مع وميض تنبيهي.` }, { target: `secplan-kind-col`, text: `مقر التدريب العملي: ورشة/معمل أو حاسب آلي أو \xABلا تحتاج\xBB — يحدد سعة الشعبة الافتراضية للجزء العملي. (التدريب عن بعد لا يلزمه مقر.)` }, { target: `secplan-contact-col`, text: `ساعات الاتصال: محسوبة من الخطة، وتُفتح للتعديل اليدوي في النوع المدمج فقط (وفي التدريب التعاوني).` }, { target: `secplan-capacity-col`, text: `سعة الشعبة لكل مقرر: عدّلها موضعيًّا فتتقدم على الافتراضي وتتميز بلون — والرقم الصغير بزاوية الخلية يُظهر متوسط المتدربين للخيار الآخر من التقريب.` }, { target: `secplan-sections-col`, text: `خلية الشُّعب: العدد محسوب بالتقريب لأعلى، ونقرة مزدوجة تبدّله إلى التقريب لأسفل (شعبة أقل) والعكس — الرقم الصغير بالزاوية هو الخيار الآخر.` }, { target: `secplan-reset`, text: `زر \xABاستعادة السعة الافتراضية\xBB يظهر عند وجود تخصيصات، ويمسحها كلها دفعة واحدة عائدًا للافتراضيات.` }] }, { id: `stats`, title: `التبويبات الفرعية والإحصاءات`, desc: `الكل / التخصص / العامة، وبطاقات الإجماليات والنصاب.`, steps: [{ target: `secplan-tabs`, text: `ثلاثة عروض: الكل، التخصص، العامة — والتصنيف من تقرير SF01 (وسم \xABعام\xBB أو \xABتخصص\xBB أول كل صف).` }, { target: `secplan-summary`, text: `بطاقات الإجماليات: الشُّعب والاتصال نظري/عملي للعرض الحالي.` }, { target: `secplan-summary`, text: `في عرضَي \xABالتخصص\xBB و\xABالعامة\xBB تظهر بطاقات إضافية: النصاب التدريبي (اتصال نظري + ⅔ عملي)، وحقل عدد المدربين، ومتوسطا النصاب والاتصال لكل مدرب.`, before: Wo(`secplan-tab-specialty`) }, { target: `secplan-total-row`, text: `صف الإجمالي أسفل الجدول يتبع العرض المعروض: مجموع الشُّعب والاتصال والمتوسطات للصفوف الظاهرة.`, before: Wo(`secplan-tab-all`) }], after: Wo(`secplan-tab-all`) }, { id: `export`, title: `التصدير والطباعة`, desc: `إخراج خطة الشُّعب ملف Excel أو ورقة.`, steps: [{ target: `matrix-export-excel`, text: `زر Excel في الرأس (أو Ctrl+E) يصدّر بيانات هذا التبويب — لا المصفوفة — وبجانبه زر الطباعة.` }] }] };
  var Q = { wrap: `_wrap_kgaru_1`, empty: `_empty_kgaru_17`, controls: `_controls_kgaru_33`, controlsWithReset: `_controlsWithReset_kgaru_61`, defaults: `_defaults_kgaru_69`, defaultsTitle: `_defaultsTitle_kgaru_83`, defaultField: `_defaultField_kgaru_101`, sizeInput: `_sizeInput_kgaru_117`, sizeOverride: `_sizeOverride_kgaru_151`, resetBtn: `_resetBtn_kgaru_163`, summary: `_summary_kgaru_207`, stat: `_stat_kgaru_217`, statPrimary: `_statPrimary_kgaru_245`, statValue: `_statValue_kgaru_255`, statTheory: `_statTheory_kgaru_263`, statPractical: `_statPractical_kgaru_281`, statLabel: `_statLabel_kgaru_313`, tableScroll: `_tableScroll_kgaru_331`, table: `_table_kgaru_331`, groupTheory: `_groupTheory_kgaru_427`, groupPractical: `_groupPractical_kgaru_435`, expectedCol: `_expectedCol_kgaru_443`, code: `_code_kgaru_455`, name: `_name_kgaru_467`, num: `_num_kgaru_481`, sections: `_sections_kgaru_491`, total: `_total_kgaru_499`, ctrl: `_ctrl_kgaru_509`, dash: `_dash_kgaru_517`, kindSelect: `_kindSelect_kgaru_525`, levelRow: `_levelRow_kgaru_549`, footRow: `_footRow_kgaru_587`, footLabel: `_footLabel_kgaru_607`, defaultsGroup: `_defaultsGroup_kgaru_617`, defaultsFields: `_defaultsFields_kgaru_631`, freshmanGroup: `_freshmanGroup_kgaru_643`, freshmanLabel: `_freshmanLabel_kgaru_657`, freshmanStats: `_freshmanStats_kgaru_677`, noticeGroup: `_noticeGroup_kgaru_689`, freshmanInput: `_freshmanInput_kgaru_715`, colSeparator: `_colSeparator_kgaru_753`, typeBlended: `_typeBlended_kgaru_777`, typeSelfpaced: `_typeSelfpaced_kgaru_789`, typeRemote: `_typeRemote_kgaru_801`, tabsCenter: `_tabsCenter_kgaru_821`, segmentedControl: `_segmentedControl_kgaru_845`, tabButton: `_tabButton_kgaru_863`, tabButtonActive: `_tabButtonActive_kgaru_899`, cardInput: `_cardInput_kgaru_917`, cardInputWarning: `_cardInputWarning_kgaru_959`, cardInputReadonly: `_cardInputReadonly_kgaru_1001`, capFlash: `_capFlash_kgaru_1075` };
  var Ko = (e2) => e2 > 0 ? e2.toFixed(1) : `—`;
  function qo({ value: e2, min: t2 = 1, disabled: n3 = false, isOverride: r3 = false, onChange: i3 }) {
    return (0, H.jsx)(`input`, { type: `number`, min: t2, disabled: n3, className: I(Q.sizeInput, r3 && Q.sizeOverride), style: n3 ? { opacity: 0.55 } : void 0, value: e2, onChange: (e3) => {
      let n4 = parseInt(e3.target.value, 10);
      i3(Number.isFinite(n4) && n4 >= t2 ? n4 : void 0);
    } });
  }
  var Jo = [{ key: `theory`, label: `نظري` }, { key: `practical`, label: `ورشة/معمل` }, { key: `computer`, label: `حاسب آلي` }, { key: `remote`, label: `عن بعد` }];
  var Yo = [{ value: `workshop`, label: `ورشة/معمل` }, { value: `computer`, label: `حاسب آلي` }, { value: `none`, label: `لا تحتاج ورشة/معمل` }];
  var Xo = [{ value: `traditional`, label: `تقليدي` }, { value: `blended`, label: `مدمج` }, { value: `selfpaced`, label: `ذاتي` }, { value: `remote`, label: `عن بعد` }];
  var Zo = [{ value: `all`, label: `الكل` }, { value: `specialty`, label: `التخصص` }, { value: `general`, label: `العامة` }];
  function Qo(e2) {
    let t2 = 0, n3 = 0, r3 = 0, i3 = 0, a3 = 0, o3 = 0;
    for (let s3 of e2) t2 += s3.theorySections, n3 += s3.practicalSections, s3.hasTheory && (r3 += s3.expected), s3.hasPractical && (i3 += s3.expected), a3 += s3.theoryContactTotal, o3 += s3.practicalContactTotal;
    return { theorySections: t2, practicalSections: n3, totalSections: t2 + n3, theoryContactTotal: a3, practicalContactTotal: o3, theoryAvg: t2 > 0 ? r3 / t2 : 0, practicalAvg: n3 > 0 ? i3 / n3 : 0, coursesCounted: e2.length };
  }
  var $o = (e2) => I(Q.kindSelect, e2 === `blended` && Q.typeBlended, e2 === `selfpaced` && Q.typeSelfpaced, e2 === `remote` && Q.typeRemote);
  var es = (e2) => {
    if (e2 === `blended`) return `var(--info-subtle)`;
    if (e2 === `selfpaced`) return `var(--warning-subtle)`;
    if (e2 === `remote`) return `var(--primary-subtle)`;
  };
  function ts(e2, t2, n3, r3) {
    if (!e2 || n3 <= 0) return { hasReduction: false, floored: false, altSec: 0, altTrainees: 0, dispCapacity: n3 };
    let i3 = Math.ceil(t2 / n3), a3 = Math.floor(t2 / n3), o3 = a3 >= 1 && a3 < i3, s3 = o3 && r3 === a3, c3 = s3 ? i3 : a3;
    return { hasReduction: o3, floored: s3, altSec: c3, altTrainees: c3 > 0 ? Math.ceil(t2 / c3) : 0, dispCapacity: sn(t2, n3, r3) };
  }
  var ns = { position: `absolute`, top: 1, fontSize: `9px`, fontWeight: 400, color: `var(--text-muted)`, lineHeight: 1 };
  function rs({ has: e2, sections: t2, altSec: n3, hasReduction: r3, floored: i3, shade: a3, onToggle: o3 }) {
    return e2 ? (0, H.jsxs)(`td`, { className: `${Q.num} ${Q.sections}`, style: { position: `relative`, cursor: r3 ? `pointer` : void 0, background: a3 }, onDoubleClick: r3 ? o3 : void 0, title: r3 ? `ضغط مزدوج: تبديل عدد الشُّعب (أقل ↔ أكثر)` : void 0, children: [r3 && (0, H.jsx)(`span`, { style: { ...ns, right: 2 }, children: n3 }), (0, H.jsx)(`span`, { style: i3 ? { color: `var(--primary)`, fontWeight: 800 } : void 0, children: t2 > 0 ? t2 : `—` })] }) : (0, H.jsx)(`td`, { className: `${Q.num} ${Q.sections}`, style: a3 ? { background: a3 } : void 0, children: `—` });
  }
  function is() {
    let e2 = Di(), t2 = z((e3) => e3.sf01), n3 = z((e3) => e3.sectionTrainers), r3 = z((e3) => e3.setSectionTrainers), [i3, a3] = (0, u.useState)(`all`), o3 = z((e3) => e3.sectionDefaults), s3 = z((e3) => e3.sectionOverrides), c3 = z((e3) => e3.freshmanCounts), l3 = z((e3) => e3.setFreshmanCount), d2 = z((e3) => e3.bundleCapacities), f2 = z((e3) => e3.setBundleCapacity), p2 = z((e3) => e3.setSectionDefault), m2 = z((e3) => e3.overCapPct), h2 = z((e3) => e3.setOverCapPct), [g2, _2] = (0, u.useState)(m2 !== 125), v2 = z((e3) => e3.setSectionOverride), y2 = z((e3) => e3.resetSectionOverrides), [b2, x2] = (0, u.useState)(null), S2 = (0, u.useRef)(void 0), C2 = (e3) => {
      x2(e3), S2.current && window.clearTimeout(S2.current), S2.current = window.setTimeout(() => x2(null), 2500);
    };
    (0, u.useEffect)(() => () => {
      S2.current && window.clearTimeout(S2.current);
    }, []);
    let w2 = e2?.specialty ?? ``, T2 = (0, u.useMemo)(() => s3[w2] || {}, [s3, w2]), E2 = c3[w2] || 0, D2 = d2[w2] || 20, O2 = E2 > 0 ? Math.ceil(E2 / Math.max(1, D2)) : 0, k2 = (0, u.useMemo)(() => e2 ? hn(e2.model.sortedCourses, (t3) => e2.model.courseStats[t3]?.expected ?? 0, o3, T2, E2, (t3) => Ft(t3, e2.plan)) : null, [e2, o3, T2, E2]);
    if (!e2 || !k2) return (0, H.jsx)(`div`, { className: Q.empty, children: `حمّل بيانات الخطة والمتدربين لعرض تخطيط الشُّعب.` });
    let { rows: ee2, totals: te2 } = k2, ne2 = Object.keys(T2).length > 0, re2 = (e3) => !!t2 && Mt(t2, e3), ie2 = (e3) => +!re2(e3), ae2 = [...ee2].sort((e3, t3) => e3.semester - t3.semester || ie2(e3.code) - ie2(t3.code)), A2 = i3 === `specialty` ? ae2.filter((e3) => !re2(e3.code)) : i3 === `general` ? ae2.filter((e3) => re2(e3.code)) : ae2, j2 = i3 === `all` ? te2 : Qo(A2), oe2 = j2.theoryContactTotal + rn * j2.practicalContactTotal, se2 = i3 === `general` ? n3[w2]?.general ?? 0 : n3[w2]?.specialty ?? 0, ce2 = se2 > 0 ? oe2 / se2 : 0, le2 = j2.theoryContactTotal + j2.practicalContactTotal, ue2 = se2 > 0 ? le2 / se2 : 0;
    return (0, H.jsxs)(`div`, { className: Q.wrap, children: [(0, H.jsxs)(`div`, { className: I(Q.controls, ne2 && Q.controlsWithReset), children: [(0, H.jsx)(`span`, { style: { position: `absolute`, insetInlineStart: 3, top: 6, zIndex: 6, lineHeight: 0 }, children: (0, H.jsx)(Uo, { tab: `sections`, title: `تخطيط الشُّعب`, content: Go }) }), (0, H.jsxs)(`div`, { className: Q.defaults, children: [(0, H.jsxs)(`div`, { className: Q.defaultsGroup, "data-guide": `secplan-defaults`, children: [(0, H.jsxs)(`span`, { className: Q.defaultsTitle, children: [(0, H.jsx)(ze, { size: 14 }), (0, H.jsx)(`span`, { children: `سعة الشعبة الافتراضية` })] }), (0, H.jsxs)(`div`, { className: Q.defaultsFields, children: [Jo.map(({ key: e3, label: t3 }) => (0, H.jsxs)(`div`, { className: Q.stat, title: `سعة الشعبة الافتراضية - ${t3}`, children: [(0, H.jsx)(`input`, { type: `number`, min: 1, className: Q.cardInput, value: o3[e3], onChange: (t4) => {
      let n4 = parseInt(t4.target.value, 10);
      Number.isFinite(n4) && n4 > 0 && p2(e3, n4);
    } }), (0, H.jsx)(`span`, { className: Q.statLabel, children: t3 })] }, e3)), (0, H.jsx)(`button`, { type: `button`, onClick: () => _2((e3) => !e3), title: `إعدادات متقدمة — حدّ التوسّع فوق السعة`, style: { border: `none`, background: `transparent`, cursor: `pointer`, padding: 2, color: g2 ? `var(--accent)` : `var(--text-dim)`, alignSelf: `center`, lineHeight: 0 }, children: (0, H.jsx)(Ae, { size: 14 }) }), g2 && (0, H.jsxs)(`div`, { className: Q.stat, title: `حدّ التوسّع فوق السعة (٪) في التوزيع الآلي: السقف الصلب للشعبة = السعة \xD7 النسبة. 100 = لا توسّع، الافتراضي 125`, children: [(0, H.jsx)(`input`, { type: `number`, min: 100, max: 150, step: 5, className: Q.cardInput, style: m2 === 125 ? void 0 : { borderColor: `var(--accent)` }, value: m2, onChange: (e3) => {
      let t3 = parseInt(e3.target.value, 10);
      Number.isFinite(t3) && h2(t3);
    } }), (0, H.jsx)(`span`, { className: Q.statLabel, children: `توسّع ٪` })] })] })] }), (0, H.jsx)(`span`, { "aria-hidden": true, style: { width: 1, alignSelf: `stretch`, margin: `2px`, background: `var(--border)` } }), (0, H.jsxs)(`div`, { className: Q.freshmanGroup, "data-guide": `secplan-freshmen`, title: `عدد المستجدين — يُضاف إلى متوقعي مقررات المستوى الأول`, children: [(0, H.jsxs)(`div`, { className: Q.freshmanLabel, children: [(0, H.jsx)(Le, { size: 14 }), (0, H.jsx)(`span`, { children: `المستجدون` })] }), (0, H.jsxs)(`div`, { className: Q.stat, children: [(0, H.jsx)(`input`, { type: `number`, min: 0, className: Q.cardInputWarning, value: E2, onChange: (e3) => l3(w2, Math.max(0, parseInt(e3.target.value, 10) || 0)) }), (0, H.jsx)(`span`, { className: Q.statLabel, children: `متدرب` })] })] }), (0, H.jsx)(`span`, { "aria-hidden": true, style: { width: 1, alignSelf: `stretch`, margin: `2px`, background: `var(--border)` } }), (0, H.jsxs)(`div`, { className: Q.freshmanGroup, "data-guide": `secplan-bundles`, title: `سعة الرزمة الواحدة للمستجدين — يُشتقّ منها عدد الرزم = ⌈إجمالي المستجدين \xF7 سعة الرزمة⌉`, children: [(0, H.jsxs)(`div`, { className: Q.freshmanLabel, children: [(0, H.jsx)(xe, { size: 14 }), (0, H.jsx)(`span`, { children: `رزم المستجدين` })] }), (0, H.jsxs)(`div`, { className: Q.freshmanStats, children: [(0, H.jsxs)(`div`, { className: Q.stat, children: [(0, H.jsx)(`input`, { type: `number`, min: 1, className: Q.cardInputWarning, value: D2, onChange: (e3) => f2(w2, Math.max(1, parseInt(e3.target.value, 10) || 1)) }), (0, H.jsx)(`span`, { className: Q.statLabel, children: `سعة الرزمة` })] }), (0, H.jsxs)(`div`, { className: Q.stat, children: [(0, H.jsx)(`input`, { type: `number`, className: Q.cardInputReadonly, value: O2, disabled: true, title: `عدد الرزم المشتقّ تلقائيًّا (غير قابل للتعديل) = ⌈إجمالي المستجدين \xF7 سعة الرزمة⌉` }), (0, H.jsx)(`span`, { className: Q.statLabel, children: `عدد الرزم` })] })] })] })] }), (0, H.jsxs)(`div`, { className: Q.tabsCenter, children: [(0, H.jsx)(`div`, { className: Q.segmentedControl, "data-guide": `secplan-tabs`, children: Zo.map((e3) => {
      let t3 = i3 === e3.value;
      return (0, H.jsx)(`button`, { "data-guide": `secplan-tab-${e3.value}`, onClick: () => a3(e3.value), className: I(Q.tabButton, t3 && Q.tabButtonActive), children: e3.label }, e3.value);
    }) }), ne2 && (0, H.jsxs)(`button`, { className: Q.resetBtn, "data-guide": `secplan-reset`, onClick: () => y2(w2), title: `إرجاع كل المقررات إلى السعات وأنواع التدريب الافتراضية`, children: [(0, H.jsx)(De, { size: 13 }), (0, H.jsx)(`span`, { children: `استعادة السعة الافتراضية` })] })] }), (0, H.jsx)(`div`, { className: Q.summary, "data-guide": `secplan-summary`, children: i3 === `all` ? (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(as, { label: (0, H.jsxs)(H.Fragment, { children: [`إجمالي`, (0, H.jsx)(`br`, {}), `الشُّعب`] }), value: j2.totalSections, type: `primary` }), (0, H.jsx)(as, { label: (0, H.jsxs)(H.Fragment, { children: [`شعب`, (0, H.jsx)(`br`, {}), `نظري`] }), value: j2.theorySections, type: `theory` }), (0, H.jsx)(as, { label: (0, H.jsxs)(H.Fragment, { children: [`شعب`, (0, H.jsx)(`br`, {}), `عملي`] }), value: j2.practicalSections, type: `practical` }), (0, H.jsx)(as, { label: (0, H.jsxs)(H.Fragment, { children: [`اتصال`, (0, H.jsx)(`br`, {}), `نظري`] }), value: j2.theoryContactTotal, type: `theory` }), (0, H.jsx)(as, { label: (0, H.jsxs)(H.Fragment, { children: [`اتصال`, (0, H.jsx)(`br`, {}), `عملي`] }), value: j2.practicalContactTotal, type: `practical` })] }) : (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(as, { label: (0, H.jsxs)(H.Fragment, { children: [`شعب`, (0, H.jsx)(`br`, {}), `نظري`] }), value: j2.theorySections, type: `theory` }), (0, H.jsx)(as, { label: (0, H.jsxs)(H.Fragment, { children: [`شعب`, (0, H.jsx)(`br`, {}), `عملي`] }), value: j2.practicalSections, type: `practical` }), (0, H.jsx)(as, { label: (0, H.jsxs)(H.Fragment, { children: [`اتصال`, (0, H.jsx)(`br`, {}), `نظري`] }), value: j2.theoryContactTotal, type: `theory` }), (0, H.jsx)(as, { label: (0, H.jsxs)(H.Fragment, { children: [`اتصال`, (0, H.jsx)(`br`, {}), `عملي`] }), value: j2.practicalContactTotal, type: `practical` }), (0, H.jsx)(as, { label: (0, H.jsxs)(H.Fragment, { children: [`النصاب`, (0, H.jsx)(`br`, {}), `التدريبي`] }), value: oe2 > 0 ? oe2.toFixed(1) : `—`, type: `primary` }), (0, H.jsxs)(`div`, { className: Q.stat, title: `عدد مدربي القسم — لحساب متوسط النصاب`, children: [(0, H.jsx)(`input`, { type: `number`, min: 0, value: se2, onChange: (e3) => r3(w2, i3 === `general` ? `general` : `specialty`, parseInt(e3.target.value, 10) || 0), style: { width: 54, textAlign: `center`, fontSize: `var(--fs-lg)`, fontWeight: 800, fontFamily: `var(--font-family)`, color: `var(--text-primary)`, background: `var(--bg-elevated)`, border: `1px solid var(--border-strong)`, borderRadius: `var(--radius-sm)` } }), (0, H.jsx)(`span`, { className: Q.statLabel, children: `عدد المدربين` })] }), (0, H.jsx)(as, { label: (0, H.jsxs)(H.Fragment, { children: [`متوسط النصاب`, (0, H.jsx)(`br`, {}), `/مدرب`] }), value: ce2 > 0 ? ce2.toFixed(1) : `—`, type: `primary` }), (0, H.jsx)(as, { label: (0, H.jsxs)(H.Fragment, { children: [`متوسط`, (0, H.jsx)(`br`, {}), `س. اتصال`] }), value: ue2 > 0 ? ue2.toFixed(1) : `—`, type: `primary` })] }) })] }), (0, H.jsx)(`div`, { className: Q.tableScroll, children: (0, H.jsxs)(`table`, { className: Q.table, children: [(0, H.jsxs)(`thead`, { children: [(0, H.jsxs)(`tr`, { children: [(0, H.jsx)(`th`, { rowSpan: 2, title: `نوع المقرر: عام (الدراسات العامة) أو تخصص — يُحدَّد من قسم المقرر في SF01`, children: `مقرر` }), (0, H.jsx)(`th`, { rowSpan: 2, children: `الرمز` }), (0, H.jsx)(`th`, { rowSpan: 2, children: `المقرر` }), (0, H.jsx)(`th`, { rowSpan: 2, title: `وحدات معتمدة`, children: `و.م` }), (0, H.jsx)(`th`, { rowSpan: 2, className: Q.expectedCol, children: `المتوقعون` }), (0, H.jsx)(`th`, { rowSpan: 2, className: Q.colSeparator }), (0, H.jsx)(`th`, { colSpan: 5, className: Q.groupTheory, children: `نظري` }), (0, H.jsx)(`th`, { rowSpan: 2, className: Q.colSeparator }), (0, H.jsx)(`th`, { colSpan: 6, className: Q.groupPractical, children: `عملي` })] }), (0, H.jsxs)(`tr`, { children: [(0, H.jsx)(`th`, { className: Q.groupTheory, "data-guide": `secplan-type-col`, children: `نوع التدريب` }), (0, H.jsx)(`th`, { className: Q.groupTheory, "data-guide": `secplan-contact-col`, children: `ساعات الاتصال` }), (0, H.jsx)(`th`, { className: Q.groupTheory, "data-guide": `secplan-capacity-col`, children: `سعة الشعبة` }), (0, H.jsx)(`th`, { className: Q.groupTheory, "data-guide": `secplan-sections-col`, children: `الشُّعب` }), (0, H.jsx)(`th`, { className: Q.groupTheory, children: `متوسط العدد` }), (0, H.jsx)(`th`, { className: Q.groupPractical, children: `نوع التدريب` }), (0, H.jsx)(`th`, { className: Q.groupPractical, "data-guide": `secplan-kind-col`, children: `مقر التدريب` }), (0, H.jsx)(`th`, { className: Q.groupPractical, children: `ساعات الاتصال` }), (0, H.jsx)(`th`, { className: Q.groupPractical, children: `سعة الشعبة` }), (0, H.jsx)(`th`, { className: Q.groupPractical, children: `الشُّعب` }), (0, H.jsx)(`th`, { className: Q.groupPractical, children: `متوسط العدد` })] })] }), (0, H.jsxs)(`tbody`, { children: [A2.length === 0 && (0, H.jsx)(`tr`, { children: (0, H.jsx)(`td`, { colSpan: 18, style: { textAlign: `center`, padding: `var(--sp-6)`, color: `var(--text-muted)` }, children: t2 ? `لا توجد مقررات في هذا التصنيف` : `يلزم رفع تقرير SF01 لتصنيف المقررات (عام/تخصص)` }) }), A2.map((e3, n4) => {
      let r4 = n4 === 0 || A2[n4 - 1].semester !== e3.semester, i4 = T2[e3.code], a4 = t2 ? Mt(t2, e3.code) ? `عام` : `تخصص` : null, s4 = a4 === `تخصص` ? `var(--primary-subtle)` : void 0, c4 = !e3.isCoop && e3.theoryTrainingType === `blended`, l4 = e3.isCoop || e3.practicalTrainingType === `blended`, d3 = !e3.isCoop && e3.practicalTrainingType === `remote`, f3 = e3.hasTheory ? es(e3.theoryTrainingType) : void 0, p3 = e3.hasPractical ? es(e3.practicalTrainingType) : void 0, m3 = ts(e3.hasTheory, e3.expected, e3.theorySize, e3.theorySections), h3 = ts(e3.hasPractical && !e3.isCoop, e3.expected, e3.practicalSize, e3.practicalSections);
      return (0, H.jsxs)(u.Fragment, { children: [r4 && (0, H.jsx)(`tr`, { className: Q.levelRow, children: (0, H.jsxs)(`td`, { colSpan: 18, style: { "--lvl": `var(--level-${Math.min(e3.semester, 6)})` }, children: [`المستوى `, e3.semester, e3.semester === 5 && ` — التدريب التعاوني`] }) }), (0, H.jsxs)(`tr`, { children: [(0, H.jsx)(`td`, { style: { padding: `2px 6px`, background: s4 }, children: a4 ? (0, H.jsx)(`span`, { style: { display: `inline-block`, padding: `1px 8px`, borderRadius: `var(--radius-sm)`, fontSize: `var(--fs-sm)`, fontWeight: 700, color: a4 === `عام` ? `var(--info)` : `var(--text-secondary)`, background: a4 === `عام` ? `var(--info-subtle)` : `var(--bg-elevated)` }, children: a4 }) : (0, H.jsx)(`span`, { className: Q.dash, children: `—` }) }), (0, H.jsx)(`td`, { className: Q.code, style: { background: s4 }, children: e3.code }), (0, H.jsx)(`td`, { className: Q.name, style: { background: s4 }, children: e3.name }), (0, H.jsx)(`td`, { className: Q.num, children: e3.credits }), (0, H.jsx)(`td`, { className: `${Q.num} ${Q.expectedCol}`, children: e3.expected }), (0, H.jsx)(`td`, { className: Q.colSeparator }), (0, H.jsx)(`td`, { className: Q.ctrl, style: { background: f3 }, children: e3.hasTheory ? (0, H.jsx)(`select`, { className: $o(e3.theoryTrainingType), value: e3.theoryTrainingType, onChange: (t3) => {
        let n5 = t3.target.value, r5 = n5 === `remote` ? o3.remote : o3.theory;
        m3.dispCapacity !== r5 && C2(`th:${e3.code}`), v2(w2, e3.code, { theoryTrainingType: n5, theoryContact: void 0, theory: void 0, theoryFloorSections: void 0, theorySectionsManual: void 0 });
      }, children: Xo.map((e4) => (0, H.jsx)(`option`, { value: e4.value, children: e4.label }, e4.value)) }) : (0, H.jsx)(`span`, { className: Q.dash, children: `—` }) }), (0, H.jsx)(`td`, { className: Q.ctrl, style: { background: f3 }, children: e3.hasTheory ? (0, H.jsx)(qo, { value: e3.theoryContact, min: 0, disabled: !c4, isOverride: i4?.theoryContact != null, onChange: (t3) => v2(w2, e3.code, { theoryContact: t3 }) }) : (0, H.jsx)(`span`, { className: Q.dash, children: `—` }) }), (0, H.jsx)(`td`, { className: I(Q.ctrl, b2 === `th:${e3.code}` && Q.capFlash), style: { position: `relative`, background: f3 }, children: e3.hasTheory ? (0, H.jsxs)(H.Fragment, { children: [m3.hasReduction && (0, H.jsx)(`span`, { style: { ...ns, left: 2 }, title: `عدد المتدربين بالشعبة للخيار الآخر`, children: m3.altTrainees }), (0, H.jsx)(qo, { value: m3.dispCapacity, isOverride: i4?.theory != null, onChange: (t3) => v2(w2, e3.code, { theory: t3, theoryFloorSections: void 0, theorySectionsManual: void 0 }) })] }) : (0, H.jsx)(`span`, { className: Q.dash, children: `—` }) }), (0, H.jsx)(rs, { has: e3.hasTheory, sections: e3.theorySections, altSec: m3.altSec, hasReduction: m3.hasReduction, floored: m3.floored, shade: f3, onToggle: () => v2(w2, e3.code, { theoryFloorSections: i4?.theoryFloorSections ? void 0 : true, theorySectionsManual: void 0 }) }), (0, H.jsx)(`td`, { className: Q.num, style: { background: f3 }, children: e3.hasTheory ? Ko(e3.theoryAvg) : `—` }), (0, H.jsx)(`td`, { className: Q.colSeparator }), (0, H.jsx)(`td`, { className: Q.ctrl, style: { background: p3 }, children: e3.isCoop ? (0, H.jsx)(`span`, { className: Q.dash, children: `—` }) : e3.hasPractical ? (0, H.jsx)(`select`, { className: $o(e3.practicalTrainingType), value: e3.practicalTrainingType, onChange: (t3) => {
        let n5 = t3.target.value, r5 = n5 === `remote` ? o3.remote : dn(e3.practicalKind, o3);
        h3.dispCapacity !== r5 && C2(`pr:${e3.code}`), v2(w2, e3.code, { practicalTrainingType: n5, practicalContact: void 0, practical: void 0, practicalFloorSections: void 0, practicalSectionsManual: void 0 });
      }, children: Xo.map((e4) => (0, H.jsx)(`option`, { value: e4.value, children: e4.label }, e4.value)) }) : (0, H.jsx)(`span`, { className: Q.dash, children: `—` }) }), (0, H.jsx)(`td`, { className: Q.ctrl, style: { background: p3 }, children: e3.isCoop ? (0, H.jsx)(`span`, { style: { fontSize: `var(--fs-sm)`, color: `var(--text-secondary)`, fontWeight: 700 }, children: `تعاوني` }) : e3.hasPractical ? (0, H.jsx)(`select`, { className: Q.kindSelect, value: e3.practicalKind, disabled: d3, style: d3 ? { opacity: 0.55 } : void 0, title: d3 ? `لا يلزم مقر للتدريب عن بعد` : void 0, onChange: (t3) => v2(w2, e3.code, { practicalKind: t3.target.value, practical: void 0, practicalSectionsManual: void 0 }), children: Yo.map((e4) => (0, H.jsx)(`option`, { value: e4.value, children: e4.label }, e4.value)) }) : (0, H.jsx)(`span`, { className: Q.dash, children: `—` }) }), (0, H.jsx)(`td`, { className: Q.ctrl, style: { background: p3 }, children: e3.hasPractical ? (0, H.jsx)(qo, { value: e3.practicalContact, min: 0, disabled: !l4, isOverride: i4?.practicalContact != null, onChange: (t3) => v2(w2, e3.code, { practicalContact: t3 }) }) : (0, H.jsx)(`span`, { className: Q.dash, children: `—` }) }), (0, H.jsx)(`td`, { className: I(Q.ctrl, b2 === `pr:${e3.code}` && Q.capFlash), style: { position: `relative`, background: p3 }, children: e3.isCoop ? (0, H.jsx)(`span`, { className: Q.num, title: `سعة ثابتة للتدريب التعاوني`, children: e3.practicalSize }) : e3.hasPractical ? (0, H.jsxs)(H.Fragment, { children: [h3.hasReduction && (0, H.jsx)(`span`, { style: { ...ns, left: 2 }, title: `عدد المتدربين بالشعبة للخيار الآخر`, children: h3.altTrainees }), (0, H.jsx)(qo, { value: h3.dispCapacity, isOverride: i4?.practical != null, onChange: (t3) => v2(w2, e3.code, { practical: t3, practicalFloorSections: void 0, practicalSectionsManual: void 0 }) })] }) : (0, H.jsx)(`span`, { className: Q.dash, children: `—` }) }), (0, H.jsx)(rs, { has: e3.hasPractical, sections: e3.practicalSections, altSec: h3.altSec, hasReduction: h3.hasReduction, floored: h3.floored, shade: p3, onToggle: () => v2(w2, e3.code, { practicalFloorSections: i4?.practicalFloorSections ? void 0 : true, practicalSectionsManual: void 0 }) }), (0, H.jsx)(`td`, { className: Q.num, style: { background: p3 }, children: e3.hasPractical ? Ko(e3.practicalAvg) : `—` })] })] }, e3.code);
    })] }), (0, H.jsx)(`tfoot`, { children: (0, H.jsxs)(`tr`, { className: Q.footRow, "data-guide": `secplan-total-row`, children: [(0, H.jsxs)(`td`, { colSpan: 6, className: Q.footLabel, children: [`الإجمالي (`, j2.coursesCounted, ` مقرر)`] }), (0, H.jsx)(`td`, { className: Q.groupTheory }), (0, H.jsx)(`td`, { className: `${Q.num} ${Q.groupTheory}`, title: `مجموع اتصال نظري`, children: j2.theoryContactTotal }), (0, H.jsx)(`td`, { className: Q.groupTheory }), (0, H.jsx)(`td`, { className: `${Q.num} ${Q.groupTheory}`, children: j2.theorySections }), (0, H.jsx)(`td`, { className: `${Q.num} ${Q.groupTheory}`, children: Ko(j2.theoryAvg) }), (0, H.jsx)(`td`, { className: Q.colSeparator }), (0, H.jsx)(`td`, { className: Q.groupPractical }), (0, H.jsx)(`td`, { className: Q.groupPractical }), (0, H.jsx)(`td`, { className: `${Q.num} ${Q.groupPractical}`, title: `مجموع اتصال عملي`, children: j2.practicalContactTotal }), (0, H.jsx)(`td`, { className: Q.groupPractical }), (0, H.jsx)(`td`, { className: `${Q.num} ${Q.groupPractical}`, children: j2.practicalSections }), (0, H.jsx)(`td`, { className: `${Q.num} ${Q.groupPractical}`, children: Ko(j2.practicalAvg) })] }) })] }) })] });
  }
  function as({ label: e2, value: t2, type: n3 }) {
    return (0, H.jsxs)(`div`, { className: I(Q.stat, { [Q.statPrimary]: n3 === `primary`, [Q.statTheory]: n3 === `theory`, [Q.statPractical]: n3 === `practical` }), children: [(0, H.jsx)(`span`, { className: Q.statValue, children: t2 }), (0, H.jsx)(`span`, { className: Q.statLabel, children: e2 })] });
  }
  var os = { matrix: `مصفوفة المتوقع`, conflicts: `مصفوفة التعارضات`, sections: `تخطيط الشُّعب` };
  function ss() {
    let e2 = z((e3) => e3.currentSpecialty), t2 = z((e3) => e3.currentTab), n3 = (/* @__PURE__ */ new Date()).toLocaleDateString(`ar-SA`, { year: `numeric`, month: `long`, day: `numeric` });
    return t2 === `coursemap` ? null : (0, H.jsxs)(`div`, { className: `print-header`, children: [(0, H.jsx)(`img`, { src: `/matrix/logo.png`, alt: `` }), (0, H.jsxs)(`div`, { children: [(0, H.jsxs)(`div`, { className: `print-title`, children: [`مصفوفة التسجيل والمتوقع — `, os[t2] ?? `مصفوفة المتوقع`] }), (0, H.jsxs)(`div`, { className: `print-subtitle`, children: [`التخصص: `, e2, ` | التاريخ: `, n3] })] })] });
  }
  var cs = /failed to fetch dynamically imported module|error loading dynamically imported module|importing a module script failed/i;
  var ls = rt((e2) => ({ report: null, close: () => e2({ report: null }) }));
  function us(e2, t2, n3 = {}) {
    let r3 = t2 instanceof Error ? t2 : Error(String(t2));
    if (cs.test(r3.message)) {
      ls.setState({ report: { title: e2, details: ``, staleChunk: true } });
      return;
    }
    let i3 = [`— بلاغ خطأ تقني (${e2}) —`, `الوقت: ${(/* @__PURE__ */ new Date()).toISOString()}`, `إصدار التطبيق: 1.49`, `الرابط: ${location.href}`, `المتصفح: ${navigator.userAgent}`, `المنصة: ${navigator.platform ?? `?`} \xB7 الشاشة: ${screen.width}\xD7${screen.height}`, ...Object.entries(n3).map(([e3, t3]) => `${e3}: ${t3}`), `نوع الخطأ: ${r3.name}`, `الرسالة: ${r3.message}`, `المكدس:`, ...(r3.stack ?? ``).split(`
`).slice(0, 15)];
    ls.setState({ report: { title: e2, details: i3.join(`
`) } });
  }
  var ds = { stage: `_stage_1rite_1`, stageWrap: `_stageWrap_1rite_19`, tabs: `_tabs_1rite_33`, tab: `_tab_1rite_33`, tabActive: `_tabActive_1rite_51`, tabBody: `_tabBody_1rite_99`, topbar: `_topbar_1rite_115`, field: `_field_1rite_135`, partField: `_partField_1rite_179`, partCol: `_partCol_1rite_197`, partLabel: `_partLabel_1rite_209`, partAvgLabel: `_partAvgLabel_1rite_221`, partAvgVal: `_partAvgVal_1rite_237`, partNum: `_partNum_1rite_255`, chip: `_chip_1rite_293`, chipLevel: `_chipLevel_1rite_311`, modeBar: `_modeBar_1rite_323`, modeBtn: `_modeBtn_1rite_343`, modeBtnOn: `_modeBtnOn_1rite_375`, modePin: `_modePin_1rite_387`, modePinOn: `_modePinOn_1rite_423`, modeReco: `_modeReco_1rite_441`, toggle: `_toggle_1rite_477`, body: `_body_1rite_501`, frozenTop: `_frozenTop_1rite_521`, scroller: `_scroller_1rite_543`, grid: `_grid_1rite_565`, corner: `_corner_1rite_575`, clearAll: `_clearAll_1rite_595`, dayh: `_dayh_1rite_635`, perh: `_perh_1rite_655`, p1: `_p1_1rite_677`, grp: `_grp_1rite_685`, grpfill: `_grpfill_1rite_717`, lbl: `_lbl_1rite_729`, lblHot: `_lblHot_1rite_763`, lblGold: `_lblGold_1rite_775`, lblSilver: `_lblSilver_1rite_785`, grpSilver: `_grpSilver_1rite_797`, lblName: `_lblName_1rite_807`, traineeId: `_traineeId_1rite_823`, secGroupHead: `_secGroupHead_1rite_841`, secHead: `_secHead_1rite_867`, secHeadLbl: `_secHeadLbl_1rite_889`, secHeadCnt: `_secHeadCnt_1rite_897`, secHeadCntZero: `_secHeadCntZero_1rite_917`, secHeadTheory: `_secHeadTheory_1rite_925`, secHeadPrac: `_secHeadPrac_1rite_935`, secBlank: `_secBlank_1rite_947`, secNum: `_secNum_1rite_961`, secNumFull: `_secNumFull_1rite_985`, secCell: `_secCell_1rite_997`, secCellTheory: `_secCellTheory_1rite_1017`, secCellPrac: `_secCellPrac_1rite_1025`, secOn: `_secOn_1rite_1049`, secOver: `_secOver_1rite_1071`, secSplit: `_secSplit_1rite_1083`, secSplitPeer: `_secSplitPeer_1rite_1095`, secColDivide: `_secColDivide_1rite_1115`, unassignedBtn: `_unassignedBtn_1rite_1125`, lblRemoved: `_lblRemoved_1rite_1169`, removedDot: `_removedDot_1rite_1177`, lblFlash: `_lblFlash_1rite_1189`, ttFlash: `_ttFlash_1rite_1`, quota: `_quota_1rite_1207`, qchip: `_qchip_1rite_1221`, qfull: `_qfull_1rite_1241`, chipMuted: `_chipMuted_1rite_1253`, tdot: `_tdot_1rite_1263`, trackTag: `_trackTag_1rite_1277`, trackName: `_trackName_1rite_1309`, cell: `_cell_1rite_1359`, fillLbl: `_fillLbl_1rite_1395`, fillLblName: `_fillLblName_1rite_1415`, fillToggles: `_fillToggles_1rite_1427`, fillOverToggle: `_fillOverToggle_1rite_1437`, fillFill: `_fillFill_1rite_1471`, fillCell: `_fillCell_1rite_1483`, fillCellSec: `_fillCellSec_1rite_1513`, fillCellNa: `_fillCellNa_1rite_1541`, fillCellBlocked: `_fillCellBlocked_1rite_1549`, fillCellHot: `_fillCellHot_1rite_1559`, fillCellHard: `_fillCellHard_1rite_1573`, clashCell: `_clashCell_1rite_1585`, clashMark: `_clashMark_1rite_1593`, secIdxTag: `_secIdxTag_1rite_1615`, cellFlash: `_cellFlash_1rite_1647`, ttClashFlash: `_ttClashFlash_1rite_1`, roomNo: `_roomNo_1rite_1667`, roomPart: `_roomPart_1rite_1681`, roomPartTheory: `_roomPartTheory_1rite_1699`, roomPartPrac: `_roomPartPrac_1rite_1709`, roomPartForced: `_roomPartForced_1rite_1721`, cellStack: `_cellStack_1rite_1733`, go: `_go_1rite_1759`, green: `_green_1rite_1767`, amber: `_amber_1rite_1795`, amberCount: `_amberCount_1rite_1821`, amberStuck: `_amberStuck_1rite_1845`, bad: `_bad_1rite_1869`, off: `_off_1rite_1879`, offTag: `_offTag_1rite_1903`, cand: `_cand_1rite_1919`, preview: `_preview_1rite_1927`, seed: `_seed_1rite_1937`, seedPick: `_seedPick_1rite_1955`, specUnplacedTag: `_specUnplacedTag_1rite_1965`, specSecCount: `_specSecCount_1rite_1981`, specSecCountZero: `_specSecCountZero_1rite_2003`, block: `_block_1rite_2011`, ins: `_ins_1rite_2029`, locked: `_locked_1rite_2037`, lockedHot: `_lockedHot_1rite_2067`, cellPrac: `_cellPrac_1rite_2081`, genPanel: `_genPanel_1rite_2101`, genTracks: `_genTracks_1rite_2185`, genList: `_genList_1rite_2225`, genChip: `_genChip_1rite_2239`, gcWarn: `_gcWarn_1rite_2263`, gcTableWrap: `_gcTableWrap_1rite_2283`, gcTable: `_gcTable_1rite_2283`, gcBand: `_gcBand_1rite_2351`, gcStripRow: `_gcStripRow_1rite_2369`, gcSeq: `_gcSeq_1rite_2379`, gcName: `_gcName_1rite_2391`, gcCode: `_gcCode_1rite_2401`, gcNum: `_gcNum_1rite_2413`, gcRadio: `_gcRadio_1rite_2435`, gcRef: `_gcRef_1rite_2457`, gcRefEmpty: `_gcRefEmpty_1rite_2481`, gcTracksCell: `_gcTracksCell_1rite_2491`, ddWrap: `_ddWrap_1rite_2501`, gcTracksBtn: `_gcTracksBtn_1rite_2511`, ddBackdrop: `_ddBackdrop_1rite_2535`, ddPop: `_ddPop_1rite_2547`, ddLvl: `_ddLvl_1rite_2579`, ddLvlHead: `_ddLvlHead_1rite_2587`, ddChks: `_ddChks_1rite_2623`, ddChk: `_ddChk_1rite_2623`, stripWrap: `_stripWrap_1rite_2659`, stripMeetings: `_stripMeetings_1rite_2671`, stripChip: `_stripChip_1rite_2689`, stripChipOn: `_stripChipOn_1rite_2723`, stripChipDone: `_stripChipDone_1rite_2739`, stripGrid: `_stripGrid_1rite_2763`, stripDay: `_stripDay_1rite_2781`, stripCell: `_stripCell_1rite_2801`, stripBlock: `_stripBlock_1rite_2829`, stripGreen: `_stripGreen_1rite_2841`, stripPreview: `_stripPreview_1rite_2865`, gcToolbar: `_gcToolbar_1rite_2875`, gcToolEnd: `_gcToolEnd_1rite_2891`, gcInfoBtn: `_gcInfoBtn_1rite_2899`, gcInfoPop: `_gcInfoPop_1rite_2937`, gcInfoPopEnd: `_gcInfoPopEnd_1rite_2961`, gcBadge: `_gcBadge_1rite_2971`, gcWarnChip: `_gcWarnChip_1rite_3003`, gcBandInner: `_gcBandInner_1rite_3043`, gcBandLvl: `_gcBandLvl_1rite_3061`, gcBandName: `_gcBandName_1rite_3071`, gcMeta: `_gcMeta_1rite_3079`, gcPart: `_gcPart_1rite_3089`, gcPartTheory: `_gcPartTheory_1rite_3103`, gcPartPrac: `_gcPartPrac_1rite_3113`, gcChipInfo: `_gcChipInfo_1rite_3123`, gcCtl: `_gcCtl_1rite_3145`, gcIconBtn: `_gcIconBtn_1rite_3175`, gcExcess: `_gcExcess_1rite_3215`, gcTag: `_gcTag_1rite_3237`, gcTagWarn: `_gcTagWarn_1rite_3259`, gcConflictNote: `_gcConflictNote_1rite_3269`, gcAdoptNote: `_gcAdoptNote_1rite_3287`, gcCanceledRow: `_gcCanceledRow_1rite_3305`, gcTracksEmpty: `_gcTracksEmpty_1rite_3313`, gcActions: `_gcActions_1rite_3323`, gcActBtn: `_gcActBtn_1rite_3331`, gcDel: `_gcDel_1rite_3367`, gcAdopt: `_gcAdopt_1rite_3287`, bulkBackdrop: `_bulkBackdrop_1rite_3399`, bulkPanel: `_bulkPanel_1rite_3419`, bulkTitle: `_bulkTitle_1rite_3439`, bulkHint: `_bulkHint_1rite_3451`, bulkArea: `_bulkArea_1rite_3465`, bulkBtns: `_bulkBtns_1rite_3493`, bulkApply: `_bulkApply_1rite_3505`, bulkCancel: `_bulkCancel_1rite_3507`, tray: `_tray_1rite_3551`, traygrp: `_traygrp_1rite_3567`, grpUndo: `_grpUndo_1rite_3585`, grpUndoLbl: `_grpUndoLbl_1rite_3605`, trayGrid3: `_trayGrid3_1rite_3621`, coCol: `_coCol_1rite_3635`, secCol: `_secCol_1rite_1115`, secRow: `_secRow_1rite_3665`, secRowLbl: `_secRowLbl_1rite_3679`, secColTitle: `_secColTitle_1rite_3697`, secColTitleCo: `_secColTitleCo_1rite_3721`, secColDot: `_secColDot_1rite_3729`, trayCols: `_trayCols_1rite_3745`, trayRightCol: `_trayRightCol_1rite_3759`, trayLeftCol: `_trayLeftCol_1rite_3773`, insBoxesList: `_insBoxesList_1rite_3789`, box: `_box_1rite_3817`, boxPrac: `_boxPrac_1rite_3865`, boxPicked: `_boxPicked_1rite_3883`, boxPickedCo: `_boxPickedCo_1rite_3895`, boxPlaced: `_boxPlaced_1rite_3905`, boxIns: `_boxIns_1rite_3913`, boxX: `_boxX_1rite_3923`, boxHideBtn: `_boxHideBtn_1rite_3939`, boxHidden: `_boxHidden_1rite_3991`, showAllBtn: `_showAllBtn_1rite_4009`, insbar: `_insbar_1rite_4031`, legend: `_legend_1rite_4101`, key: `_key_1rite_4131`, hint: `_hint_1rite_4145`, tip: `_tip_1rite_4167`, tipCode: `_tipCode_1rite_4197`, tipGenRow: `_tipGenRow_1rite_4211`, tipGenName: `_tipGenName_1rite_4221`, tipGenPair: `_tipGenPair_1rite_4223`, tipHint: `_tipHint_1rite_4233`, lblNav: `_lblNav_1rite_4249`, ctxBackdrop: `_ctxBackdrop_1rite_4261`, ctxMenu: `_ctxMenu_1rite_4273`, ctxHead: `_ctxHead_1rite_4295`, ctxItem: `_ctxItem_1rite_4321`, ctxCount: `_ctxCount_1rite_4377`, amberMenu: `_amberMenu_1rite_4395`, amberMenuHead: `_amberMenuHead_1rite_4417`, amberMenuHint: `_amberMenuHint_1rite_4437`, amberMenuRow: `_amberMenuRow_1rite_4453`, amberMenuOff: `_amberMenuOff_1rite_4477`, amberMenuPos: `_amberMenuPos_1rite_4485`, amberMenuChk: `_amberMenuChk_1rite_4505`, amberMenuLbl: `_amberMenuLbl_1rite_4517`, amberMenuShare: `_amberMenuShare_1rite_4533`, amberMenuShareOn: `_amberMenuShareOn_1rite_4555`, amberMenuOrd: `_amberMenuOrd_1rite_4563`, amberMenuArrow: `_amberMenuArrow_1rite_4575`, amberMenuTerminal: `_amberMenuTerminal_1rite_4621`, amberMenuResult: `_amberMenuResult_1rite_4633`, amberMenuStatWarn: `_amberMenuStatWarn_1rite_4651`, amberMenuActions: `_amberMenuActions_1rite_4659`, amberMenuBtn: `_amberMenuBtn_1rite_4671`, amberMenuBtnGhost: `_amberMenuBtnGhost_1rite_4705`, qcard: `_qcard_1rite_4741`, qSec: `_qSec_1rite_4753`, qSecHead: `_qSecHead_1rite_4765`, retryStatus: `_retryStatus_1rite_4787`, retrySearching: `_retrySearching_1rite_4789`, retryFound: `_retryFound_1rite_4791`, retryNone: `_retryNone_1rite_4805`, retryHint: `_retryHint_1rite_4807`, retrySpin: `_retrySpin_1rite_4809`, qNote: `_qNote_1rite_4813`, qRowWrap: `_qRowWrap_1rite_4829`, qRow: `_qRow_1rite_4829`, qDetail: `_qDetail_1rite_4855`, qLbl: `_qLbl_1rite_4869`, qValBad: `_qValBad_1rite_4873`, qValWarn: `_qValWarn_1rite_4875`, qVerdictWarn: `_qVerdictWarn_1rite_4879`, qStaleBar: `_qStaleBar_1rite_4897`, curBar: `_curBar_1rite_4925`, curStat: `_curStat_1rite_4953`, curApplied: `_curApplied_1rite_4957`, cmpClickable: `_cmpClickable_1rite_4981`, cmpSel: `_cmpSel_1rite_4985`, qRowWarnBadge: `_qRowWarnBadge_1rite_4991`, qFold: `_qFold_1rite_5013`, qFoldHead: `_qFoldHead_1rite_5015`, qFoldCount: `_qFoldCount_1rite_5041`, qFoldCountBad: `_qFoldCountBad_1rite_5041`, qFoldBody: `_qFoldBody_1rite_5061`, qDetailOk: `_qDetailOk_1rite_5063`, hardestBox: `_hardestBox_1rite_5069`, akChip: `_akChip_1rite_5087`, akScratch: `_akScratch_1rite_5103`, akComplete: `_akComplete_1rite_5105`, akManual: `_akManual_1rite_5107`, akCurrent: `_akCurrent_1rite_5109`, akCand: `_akCand_1rite_5111`, cmpSearching: `_cmpSearching_1rite_5115`, cmpTable: `_cmpTable_1rite_5125`, qActBtn: `_qActBtn_1rite_5125`, qIncompleteBar: `_qIncompleteBar_1rite_5131`, cmpOutdated: `_cmpOutdated_1rite_5159`, cmpWrap: `_cmpWrap_1rite_5187`, cmpCurrent: `_cmpCurrent_1rite_5235`, cmpWhen: `_cmpWhen_1rite_5237`, runScratchBtn: `_runScratchBtn_1rite_5243`, gapAllBad: `_gapAllBad_1rite_5257`, gapAllOk: `_gapAllOk_1rite_5277`, tapTChip: `_tapTChip_1rite_5291`, qVal: `_qVal_1rite_4873`, qActs: `_qActs_1rite_5321`, qDelBtn: `_qDelBtn_1rite_5359`, qGood: `_qGood_1rite_5363`, qBad: `_qBad_1rite_5365`, qWarn: `_qWarn_1rite_5367`, qFoot: `_qFoot_1rite_5369`, qVerdictOk: `_qVerdictOk_1rite_5379`, qVerdictBad: `_qVerdictBad_1rite_5395`, ovSummary: `_ovSummary_1rite_5415`, ovControls: `_ovControls_1rite_5425`, ovCtlLbl: `_ovCtlLbl_1rite_5427`, ovSort: `_ovSort_1rite_5429`, ovHint: `_ovHint_1rite_5431`, ovTableWrap: `_ovTableWrap_1rite_5433`, ovTable: `_ovTable_1rite_5433`, ovCourseCol: `_ovCourseCol_1rite_5447`, ciDot: `_ciDot_1rite_5453`, ciControls: `_ciControls_1rite_5455`, ciHint: `_ciHint_1rite_5457`, ciEmpty: `_ciEmpty_1rite_5459`, ciPart: `_ciPart_1rite_5461`, ciPartHead: `_ciPartHead_1rite_5463`, ciResRow: `_ciResRow_1rite_5465`, ciResBox: `_ciResBox_1rite_5467`, ciResHead: `_ciResHead_1rite_5469`, ciChips: `_ciChips_1rite_5471`, ciChip: `_ciChip_1rite_5471`, ciChipFull: `_ciChipFull_1rite_5485`, ciNone: `_ciNone_1rite_5487`, ciTable: `_ciTable_1rite_5489`, ciRowUnplaced: `_ciRowUnplaced_1rite_5497`, ciLen: `_ciLen_1rite_5499`, ciUnplacedTag: `_ciUnplacedTag_1rite_5501`, ciBundle: `_ciBundle_1rite_5503`, ovCodeRow: `_ovCodeRow_1rite_5505`, ovCode: `_ovCode_1rite_5505`, ovConflict: `_ovConflict_1rite_5509`, ovName: `_ovName_1rite_5523`, ovSecs: `_ovSecs_1rite_5525`, ovSec: `_ovSec_1rite_5525`, ovSecTheory: `_ovSecTheory_1rite_5541`, ovSecPractical: `_ovSecPractical_1rite_5543`, ovSecLbl: `_ovSecLbl_1rite_5557`, ovSecBundle: `_ovSecBundle_1rite_5559`, ovThTheory: `_ovThTheory_1rite_5569`, ovThPractical: `_ovThPractical_1rite_5571`, ovDash: `_ovDash_1rite_5573`, ovRemoved: `_ovRemoved_1rite_5575`, refLbl: `_refLbl_1rite_5593`, refX: `_refX_1rite_5603`, refCell: `_refCell_1rite_5615`, refFill: `_refFill_1rite_5617`, refPicker: `_refPicker_1rite_5621`, refPickHead: `_refPickHead_1rite_5633`, refClearAll: `_refClearAll_1rite_5635`, refPickBody: `_refPickBody_1rite_5639`, refPickCol: `_refPickCol_1rite_5641`, refColHead: `_refColHead_1rite_5643`, refColCount: `_refColCount_1rite_5645`, refList: `_refList_1rite_5647`, refItem: `_refItem_1rite_5649`, refEmpty: `_refEmpty_1rite_5653`, snapSaveBtn: `_snapSaveBtn_1rite_5659`, snapList: `_snapList_1rite_5675`, snapRow: `_snapRow_1rite_5677`, snapMeta: `_snapMeta_1rite_5687`, snapKind: `_snapKind_1rite_5689`, snapKindManual: `_snapKindManual_1rite_5691`, snapKindAuto: `_snapKindAuto_1rite_5693`, snapDesc: `_snapDesc_1rite_5695`, splitControls: `_splitControls_1rite_5701`, splitCtlLbl: `_splitCtlLbl_1rite_5717`, splitStepper: `_splitStepper_1rite_5729`, splitMiniBtn: `_splitMiniBtn_1rite_5789`, splitDivide: `_splitDivide_1rite_5827`, splitSizes: `_splitSizes_1rite_5841`, splitSel: `_splitSel_1rite_5853`, splitHint: `_splitHint_1rite_5863`, splitChips: `_splitChips_1rite_5873`, splitChip: `_splitChip_1rite_5873`, splitTableWrap: `_splitTableWrap_1rite_5901`, splitTable: `_splitTable_1rite_5901`, splitNameCol: `_splitNameCol_1rite_5961`, splitCell: `_splitCell_1rite_5979`, splitFoot: `_splitFoot_1rite_5997`, splitSaveBtn: `_splitSaveBtn_1rite_6015`, tipRow: `_tipRow_1rite_6055`, empty: `_empty_1rite_6083`, printBtn: `_printBtn_1rite_6095`, periodVis: `_periodVis_1rite_6155`, periodVisBadge: `_periodVisBadge_1rite_6165`, periodVisMenu: `_periodVisMenu_1rite_6195`, periodVisHead: `_periodVisHead_1rite_6221`, periodVisShowAll: `_periodVisShowAll_1rite_6247`, periodVisRow: `_periodVisRow_1rite_6275`, periodVisName: `_periodVisName_1rite_6313`, periodVisTime: `_periodVisTime_1rite_6321`, periodVisHint: `_periodVisHint_1rite_6333`, resOk: `_resOk_1rite_6427`, resTight: `_resTight_1rite_6433`, resBad: `_resBad_1rite_6439`, resWrap: `_resWrap_1rite_6447`, resChip: `_resChip_1rite_6457`, resBadge: `_resBadge_1rite_6489`, resPanel: `_resPanel_1rite_6507`, resHint: `_resHint_1rite_6541`, ordModeRow: `_ordModeRow_1rite_6557`, ordModeBtn: `_ordModeBtn_1rite_6575`, ordModeBtnOn: `_ordModeBtnOn_1rite_6611`, resSecHead: `_resSecHead_1rite_6623`, resRow: `_resRow_1rite_6641`, resName: `_resName_1rite_6657`, resTrack: `_resTrack_1rite_6675`, resFill: `_resFill_1rite_6691`, resVal: `_resVal_1rite_6705`, resEmpty: `_resEmpty_1rite_6721`, ordChip: `_ordChip_1rite_6735`, ordTop: `_ordTop_1rite_6767`, coActiveChip: `_coActiveChip_1rite_6787`, coClear: `_coClear_1rite_6815`, coRelTag: `_coRelTag_1rite_6853`, inspectTag: `_inspectTag_1rite_6875`, coShared: `_coShared_1rite_6897`, coSharedOk: `_coSharedOk_1rite_6913`, coSharedBad: `_coSharedBad_1rite_6921`, ordRow: `_ordRow_1rite_6931`, ordRowSel: `_ordRowSel_1rite_6971`, ordRowOff: `_ordRowOff_1rite_6981`, ordScore: `_ordScore_1rite_6991`, ordRank: `_ordRank_1rite_6999`, ordDot: `_ordDot_1rite_7015`, ordCode: `_ordCode_1rite_7029`, ordName: `_ordName_1rite_7045`, ordPin: `_ordPin_1rite_7065`, ordWarn: `_ordWarn_1rite_7087`, ordDone: `_ordDone_1rite_7117`, ordRowDone: `_ordRowDone_1rite_7127`, ordTopDone: `_ordTopDone_1rite_7151`, genLock: `_genLock_1rite_7161`, genLockSel: `_genLockSel_1rite_7193`, genLockOn: `_genLockOn_1rite_7209`, genCandLbl: `_genCandLbl_1rite_7223`, genCandLblOn: `_genCandLblOn_1rite_7271`, genCandSpecCell: `_genCandSpecCell_1rite_7281`, genCandOtherCell: `_genCandOtherCell_1rite_7299`, genCandClash: `_genCandClash_1rite_7319`, genCandRowSpec: `_genCandRowSpec_1rite_7327`, genCandRowOther: `_genCandRowOther_1rite_7333`, genCandHot: `_genCandHot_1rite_7341`, topbarBreak: `_topbarBreak_1rite_7355`, toolDivide: `_toolDivide_1rite_7371`, genCandHead: `_genCandHead_1rite_7391`, genCandFoot: `_genCandFoot_1rite_7419`, genCandGroupSep: `_genCandGroupSep_1rite_7431`, genCandOther: `_genCandOther_1rite_7299`, genLockOther: `_genLockOther_1rite_7461`, genLockExcl: `_genLockExcl_1rite_7475`, genExclTag: `_genExclTag_1rite_7491`, mgGrpLbl: `_mgGrpLbl_1rite_7497`, mgGrpLblCont: `_mgGrpLblCont_1rite_7511`, mgGrpCell: `_mgGrpCell_1rite_7517`, mgRowTop: `_mgRowTop_1rite_7525`, mgRowBot: `_mgRowBot_1rite_7531`, gPrevFree: `_gPrevFree_1rite_7541`, gPrevAmber: `_gPrevAmber_1rite_7543`, gPrevRed: `_gPrevRed_1rite_7545`, mgCountBadge: `_mgCountBadge_1rite_7561`, mgCountBadgeFull: `_mgCountBadgeFull_1rite_7591`, mgCountBadgeZero: `_mgCountBadgeZero_1rite_7599`, boxCount: `_boxCount_1rite_7607`, boxCountZero: `_boxCountZero_1rite_7631`, emptyDot: `_emptyDot_1rite_7639`, mgLaneTick: `_mgLaneTick_1rite_7663`, mgToggle: `_mgToggle_1rite_7673`, mgCount: `_mgCount_1rite_7561`, cbWrap: `_cbWrap_1rite_7733`, cbIntro: `_cbIntro_1rite_7735`, cbBadgeRun: `_cbBadgeRun_1rite_7737`, cbBar: `_cbBar_1rite_7745`, cbFill: `_cbFill_1rite_7747`, cbNow: `_cbNow_1rite_7749`, cbSpin: `_cbSpin_1rite_7751`, cbLog: `_cbLog_1rite_7763`, cbLogRow: `_cbLogRow_1rite_7773`, cbLogVal: `_cbLogVal_1rite_7775`, cbTblWrap: `_cbTblWrap_1rite_7777`, cbTable: `_cbTable_1rite_7779`, cbBestRow: `_cbBestRow_1rite_7795`, cbTrophy: `_cbTrophy_1rite_7797`, cbError: `_cbError_1rite_7799` };
  var fs = `__bundle__`;
  function ps(e2, t2) {
    let n3 = Math.max(0, Math.floor(e2 || 0)), r3 = Math.max(1, Math.floor(t2) || 20);
    if (n3 <= 0) return [];
    let i3 = Math.ceil(n3 / r3), a3 = Math.floor(n3 / i3), o3 = n3 - a3 * i3;
    return Array.from({ length: i3 }, (e3, t3) => ({ id: fs + (t3 + 1), label: `رزمة${t3 + 1}`, size: a3 + +(t3 < o3) }));
  }
  ds.resOk, ds.resTight, ds.resBad, ds.resOk, ds.resTight, ds.resBad, rt(() => ({ target: null, reopen: null }));
  var ms = { wrap: `_wrap_d8xlc_1`, head: `_head_d8xlc_15`, title: `_title_d8xlc_27`, spacer: `_spacer_d8xlc_43`, modeGroup: `_modeGroup_d8xlc_47`, modeBtn: `_modeBtn_d8xlc_61`, modeBtnOn: `_modeBtnOn_d8xlc_83`, notice: `_notice_d8xlc_97`, cards: `_cards_d8xlc_121`, card: `_card_d8xlc_121`, cardOn: `_cardOn_d8xlc_153`, cardNum: `_cardNum_d8xlc_161`, cardLbl: `_cardLbl_d8xlc_173`, toolbar: `_toolbar_d8xlc_185`, copyBtn: `_copyBtn_d8xlc_197`, count: `_count_d8xlc_225`, tableWrap: `_tableWrap_d8xlc_229`, table: `_table_d8xlc_229`, mono: `_mono_d8xlc_281`, wrapCell: `_wrapCell_d8xlc_285`, hint: `_hint_d8xlc_289`, gap: `_gap_d8xlc_293`, muted: `_muted_d8xlc_295`, dash: `_dash_d8xlc_297`, badge: `_badge_d8xlc_301`, st_match: `_st_match_d8xlc_317`, st_diff: `_st_diff_d8xlc_319`, st_reportEmpty: `_st_reportEmpty_d8xlc_321`, st_appEmpty: `_st_appEmpty_d8xlc_323`, st_noCrn: `_st_noCrn_d8xlc_325`, st_surplus: `_st_surplus_d8xlc_327`, empty: `_empty_d8xlc_331`, panel: `_panel_d8xlc_345`, panelHead: `_panelHead_d8xlc_357`, miniTable: `_miniTable_d8xlc_375`, termField: `_termField_d8xlc_401`, otherTag: `_otherTag_d8xlc_437`, altTag: `_altTag_d8xlc_451`, missTag: `_missTag_d8xlc_453`, rowWarn: `_rowWarn_d8xlc_459` };
  ms.st_match, ms.st_diff, ms.st_reportEmpty, ms.st_appEmpty, ms.st_noCrn, ms.st_surplus, new Intl.DateTimeFormat(`ar-SA-u-ca-gregory`, { dateStyle: `short`, timeStyle: `short` }), new Intl.DateTimeFormat(`ar-SA-u-ca-islamic-umalqura`, { dateStyle: `short` });
  function hs() {
    let e2 = ls((e3) => e3.report), t2 = ls((e3) => e3.close), [n3, r3] = (0, u.useState)(false);
    return e2 ? e2.staleChunk ? (0, H.jsx)(Yr, { title: (0, H.jsxs)(`span`, { style: { display: `inline-flex`, alignItems: `center`, gap: 6 }, children: [(0, H.jsx)(Te, { size: 16, style: { color: `var(--primary)` } }), ` صدر تحديث جديد للتطبيق`] }), onClose: t2, actions: (0, H.jsxs)(`button`, { onClick: () => location.reload(), style: { display: `inline-flex`, alignItems: `center`, gap: 6, padding: `6px 14px`, border: `none`, borderRadius: 6, background: `var(--primary)`, color: `var(--on-primary)`, cursor: `pointer`, fontSize: `0.8rem`, fontWeight: 600 }, children: [(0, H.jsx)(Te, { size: 14 }), ` حدّث الآن`] }), children: (0, H.jsx)(`p`, { style: { margin: 0, fontSize: `0.85rem`, lineHeight: 2 }, children: `صدر تحديث جديد للتطبيق بعد فتحك لهذه الصفحة، لذا تعذّر إتمام العملية بالنسخة الحالية. اضغط \xABحدّث الآن\xBB لإعادة تحميل الصفحة على النسخة الأحدث ثم أعد المحاولة — بياناتك محفوظة ولن تتأثر.` }) }) : (0, H.jsxs)(Yr, { title: (0, H.jsxs)(`span`, { style: { display: `inline-flex`, alignItems: `center`, gap: 6 }, children: [(0, H.jsx)(Fe, { size: 16, style: { color: `var(--danger)` } }), ` `, e2.title] }), onClose: t2, actions: (0, H.jsxs)(`button`, { onClick: async () => {
      try {
        await navigator.clipboard.writeText(e2.details);
      } catch {
        let e3 = document.querySelector(`[data-error-report]`);
        e3?.focus(), e3?.select(), document.execCommand(`copy`);
      }
      r3(true), window.setTimeout(() => r3(false), 2500);
    }, title: `نسخ التفاصيل التقنية لإرسالها للدعم`, style: { display: `inline-flex`, alignItems: `center`, gap: 4, padding: `4px 10px`, border: `1px solid var(--border)`, borderRadius: 6, background: n3 ? `var(--primary)` : `transparent`, color: n3 ? `var(--on-primary)` : `inherit`, cursor: `pointer`, fontSize: `0.75rem` }, children: [n3 ? (0, H.jsx)(D, { size: 13 }) : (0, H.jsx)(re, { size: 13 }), ` `, n3 ? `نُسخ` : `نسخ التفاصيل`] }), children: [(0, H.jsx)(`p`, { style: { margin: `0 0 8px`, fontSize: `0.8rem`, lineHeight: 1.8 }, children: `حدث خطأ غير متوقع. انسخ التفاصيل التقنية أدناه بزر \xABنسخ التفاصيل\xBB وأرسلها للدعم — فهي تساعد على تشخيص السبب وإصلاحه. لا تحوي هذه التفاصيل بياناتك، بل وصف الخطأ وبيئة المتصفح فقط.` }), (0, H.jsx)(`textarea`, { "data-error-report": true, readOnly: true, value: e2.details, dir: `ltr`, style: { width: `100%`, minHeight: 220, padding: 8, border: `1px solid var(--border)`, borderRadius: 6, background: `var(--bg-inset)`, color: `var(--text-primary)`, fontFamily: `ui-monospace, monospace`, fontSize: `0.7rem`, lineHeight: 1.6, whiteSpace: `pre`, resize: `vertical` }, onFocus: (e3) => e3.currentTarget.select() })] }) : null;
  }
  function gs() {
    return z((e2) => e2.currentStage), z((e2) => e2.fileManagerOpen), (0, u.useEffect)(() => {
      let e2 = (e3) => {
        if (!e3.ctrlKey) return;
        let t2 = e3.key.toLowerCase();
        t2 === `z` ? (e3.preventDefault(), z.getState().undo()) : t2 === `y` ? (e3.preventDefault(), z.getState().redo()) : t2 === `f` ? (e3.preventDefault(), document.getElementById(`matrixSearchInput`)?.focus()) : t2 === `e` && (e3.preventDefault(), vs());
      };
      return window.addEventListener(`keydown`, e2), () => window.removeEventListener(`keydown`, e2);
    }, []), (0, H.jsxs)(H.Fragment, { children: [(0, H.jsx)(_s, {}), (0, H.jsx)(hs, {})] });
  }
  function _s() {
    let e2 = z((e3) => e3.currentTab);
    return (0, H.jsxs)(`div`, { className: G.shell, children: [(0, H.jsx)(ss, {}), (0, H.jsx)(Ei, { onExportExcel: () => void vs(), onExportPdf: () => Oo() }), e2 !== `coursemap` && e2 !== `sections` && (0, H.jsx)(La, {}), e2 === `matrix` && (0, H.jsx)(Co, {}), e2 === `conflicts` && (0, H.jsx)(To, {}), e2 === `sections` && (0, H.jsx)(is, {}), e2 === `coursemap` && (0, H.jsx)(Mo, {})] });
  }
  async function vs() {
    try {
      B(`جارٍ إنشاء ملف Excel…`, `info`);
      let e2 = await Ke(() => import("./exportExcel-DivztvYO.js"), __vite__mapDeps([0, 1, 2]));
      z.getState().currentTab === `sections` ? await e2.exportSectionPlanExcel() : await e2.exportExcel(), B(`تم تصدير ملف Excel`, `success`);
    } catch (e2) {
      console.error(e2), us(`تعذر تصدير ملف Excel`, e2, { التبويب: z.getState().currentTab });
    }
  }
  var ys = { success: O, warning: Fe, error: k, info: pe };
  function bs() {
    let e2 = jr((e3) => e3.toasts), t2 = jr((e3) => e3.dismiss);
    return (0, H.jsx)(`div`, { className: V.toastHost, role: `status`, "aria-live": `polite`, children: e2.map((e3) => {
      let n3 = ys[e3.kind];
      return (0, H.jsxs)(`div`, { className: I(V.toast, V[`toast_${e3.kind}`]), onClick: e3.sticky ? void 0 : () => t2(e3.id), children: [(0, H.jsx)(n3, { size: 16 }), (0, H.jsx)(`span`, { children: e3.message }), e3.action && (0, H.jsx)(`button`, { type: `button`, className: V.toastAction, onClick: (n4) => {
        n4.stopPropagation(), e3.action.run(), t2(e3.id);
      }, children: e3.action.label }), e3.action2 && (0, H.jsx)(`button`, { type: `button`, className: V.toastAction, onClick: (n4) => {
        n4.stopPropagation(), e3.action2.run(), t2(e3.id);
      }, children: e3.action2.label }), (0, H.jsx)(`button`, { type: `button`, className: V.toastClose, title: `إغلاق`, "aria-label": `إغلاق التنبيه`, onClick: (n4) => {
        n4.stopPropagation(), t2(e3.id);
      }, children: `✕` })] }, e3.id);
    }) });
  }
  function xs() {
    let e2 = z((e3) => e3.hydrating), t2 = z((e3) => e3.dataLoaded), n3 = z((e3) => e3.fileManagerOpen), r3 = z((e3) => e3.theme), [i3, a3] = (0, u.useState)(null);
    (0, u.useEffect)(() => {
      let e3 = false;
      return Bn().then((t3) => {
        e3 || z.getState().hydrateFrom(t3);
      }).catch((t3) => {
        console.error(`فشل تحميل البيانات المحفوظة`, t3), e3 || z.getState().setHydrating(false);
      }), () => {
        e3 = true;
      };
    }, []), (0, u.useEffect)(() => {
      let e3 = () => Ln(z.getState()), t3 = () => {
        document.visibilityState === `hidden` && e3();
      };
      return document.addEventListener(`visibilitychange`, t3), window.addEventListener(`pagehide`, e3), () => {
        document.removeEventListener(`visibilitychange`, t3), window.removeEventListener(`pagehide`, e3);
      };
    }, []), (0, u.useEffect)(() => {
      document.documentElement.dataset.theme = r3;
    }, [r3]);
    let o3 = z((e3) => e3.expectedBgColor), s3 = z((e3) => e3.manualExpectedBgColor);
    (0, u.useEffect)(() => {
      o3 ? document.documentElement.style.setProperty(`--cell-expected-bg`, o3) : document.documentElement.style.removeProperty(`--cell-expected-bg`);
    }, [o3]), (0, u.useEffect)(() => {
      s3 ? document.documentElement.style.setProperty(`--cell-manual-bg`, s3) : document.documentElement.style.removeProperty(`--cell-manual-bg`);
    }, [s3]);
    let c3 = z((e3) => e3.regOkBgColor), l3 = z((e3) => e3.regBadBgColor);
    return (0, u.useEffect)(() => {
      c3 ? document.documentElement.style.setProperty(`--cell-reg-ok-bg`, c3) : document.documentElement.style.removeProperty(`--cell-reg-ok-bg`);
    }, [c3]), (0, u.useEffect)(() => {
      l3 ? document.documentElement.style.setProperty(`--cell-reg-bad-bg`, l3) : document.documentElement.style.removeProperty(`--cell-reg-bad-bg`);
    }, [l3]), e2 ? (0, H.jsx)(`div`, { style: { display: `grid`, placeItems: `center`, height: `100%` }, children: (0, H.jsx)(he, { size: 32, style: { animation: `spin 0.8s linear infinite` } }) }) : (0, H.jsxs)(H.Fragment, { children: [!t2 || n3 ? (0, H.jsx)(pi, {}, String(n3)) : (0, H.jsx)(gs, {}), (0, H.jsx)(bs, {})] });
  }
  hi(), (0, d.createRoot)(document.getElementById(`root`)).render((0, H.jsx)(u.StrictMode, { children: (0, H.jsx)(xs, {}) }));
})();
