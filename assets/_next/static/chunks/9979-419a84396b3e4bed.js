try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "183ef28a-d37d-46a7-8c0e-d053ae1e167f", e._sentryDebugIdIdentifier = "sentry-dbid-183ef28a-d37d-46a7-8c0e-d053ae1e167f")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9979], {
        59979: (e, t, n) => {
            "use strict";
            n.d(t, {
                BL: () => h,
                Cg: () => u,
                Es: () => o,
                L4: () => s,
                ML: () => c,
                Q3: () => d,
                Ub: () => a,
                _6: () => f,
                lW: () => p,
                st: () => v,
                wY: () => w
            });
            var r = n(21462),
                i = n(96907);

            function u(e) {
                let [t, n] = (0, r.useState)(!!e), i = (0, r.useCallback)(() => {
                    n(!0)
                }, []), u = (0, r.useCallback)(() => {
                    n(!1)
                }, []), o = (0, r.useCallback)(() => {
                    n(e => !e)
                }, []);
                return {
                    value: t,
                    setValue: n,
                    setTrue: i,
                    setFalse: u,
                    toggle: o
                }
            }
            var o = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;

            function c(e, t, n, i) {
                let u = (0, r.useRef)(t);
                o(() => {
                    u.current = t
                }, [t]), (0, r.useEffect)(() => {
                    let t = (null == n ? void 0 : n.current) ? ? window;
                    if (!(t && t.addEventListener)) return;
                    let r = e => {
                        u.current(e)
                    };
                    return t.addEventListener(e, r, i), () => {
                        t.removeEventListener(e, r, i)
                    }
                }, [e, n, i])
            }

            function s(e) {
                let t, n, i, c, s = !1;
                "seconds" in e ? (console.warn("[useCountdown:DEPRECATED] new interface is already available (see https://usehooks-ts.com/react-hook/use-countdown), the old version will retire on usehooks-ts@3."), s = !0, t = e.seconds, n = e.interval, i = e.isIncrement) : {
                    countStart: t,
                    intervalMs: n,
                    isIncrement: i,
                    countStop: c
                } = e, n = n ? ? 1e3, i = i ? ? !1, c = c ? ? 0;
                let {
                    count: l,
                    increment: a,
                    decrement: f,
                    reset: d
                } = function(e) {
                    let [t, n] = (0, r.useState)(e ? ? 0);
                    return {
                        count: t,
                        increment: () => {
                            n(e => e + 1)
                        },
                        decrement: () => {
                            n(e => e - 1)
                        },
                        reset: () => {
                            n(e ? ? 0)
                        },
                        setCount: n
                    }
                }(t), {
                    value: v,
                    setTrue: h,
                    setFalse: y
                } = u(!1), w = () => {
                    y(), d()
                };
                var b = (0, r.useCallback)(() => {
                        if (l === c) return void y();
                        i ? a() : f()
                    }, [l, c, f, a, i, y]),
                    g = v ? n : null;
                let p = (0, r.useRef)(b);
                return o(() => {
                    p.current = b
                }, [b]), (0, r.useEffect)(() => {
                    if (null === g) return;
                    let e = setInterval(() => {
                        p.current()
                    }, g);
                    return () => {
                        clearInterval(e)
                    }
                }, [g]), s ? [l, {
                    start: h,
                    stop: y,
                    reset: w
                }] : [l, {
                    startCountdown: h,
                    stopCountdown: y,
                    resetCountdown: w
                }]
            }
            var l = "undefined" == typeof window;

            function a(e, t) {
                let n = "boolean" == typeof t ? t : (null == t ? void 0 : t.defaultValue) ? ? !1,
                    i = "boolean" == typeof t ? void 0 : (null == t ? void 0 : t.initializeWithValue) ? ? void 0,
                    u = e => l ? n : window.matchMedia(e).matches,
                    [c, s] = (0, r.useState)(() => i ? u(e) : n);

                function a() {
                    s(u(e))
                }
                return o(() => {
                    let t = window.matchMedia(e);
                    return a(), t.addListener ? t.addListener(a) : t.addEventListener("change", a), () => {
                        t.removeListener ? t.removeListener(a) : t.removeEventListener("change", a)
                    }
                }, [e]), c
            }

            function f(e, t = 500, n) {
                let u = (0, r.useRef)();
                var o = () => {
                    u.current && u.current.cancel()
                };
                let c = (0, r.useRef)(o);
                c.current = o, (0, r.useEffect)(() => () => {
                    c.current()
                }, []);
                let s = (0, r.useMemo)(() => {
                    let r = i(e, t, n),
                        o = (...e) => r(...e);
                    return o.cancel = () => {
                        r.cancel()
                    }, o.isPending = () => !!u.current, o.flush = () => r.flush(), o
                }, [e, t, n]);
                return (0, r.useEffect)(() => {
                    u.current = i(e, t, n)
                }, [e, t, n]), s
            }

            function d(e, t, n) {
                let i = (null == n ? void 0 : n.equalityFn) ? ? ((e, t) => e === t),
                    u = e instanceof Function ? e() : e,
                    [o, c] = (0, r.useState)(u),
                    s = (0, r.useRef)(u),
                    l = f(c, t, n);
                return i(s.current, u) || (l(u), s.current = u), [o, l]
            }

            function v(e, t) {
                let n = (0, r.useRef)({}),
                    i = (0, r.useRef)(!1),
                    u = {
                        error: void 0,
                        data: void 0
                    },
                    [o, c] = (0, r.useReducer)((e, t) => {
                        switch (t.type) {
                            case "loading":
                                return { ...u
                                };
                            case "fetched":
                                return { ...u,
                                    data: t.payload
                                };
                            case "error":
                                return { ...u,
                                    error: t.payload
                                };
                            default:
                                return e
                        }
                    }, u);
                return (0, r.useEffect)(() => {
                    if (e) return i.current = !1, (async () => {
                        c({
                            type: "loading"
                        });
                        let r = n.current[e];
                        if (r) return c({
                            type: "fetched",
                            payload: r
                        });
                        try {
                            let r = await fetch(e, t);
                            if (!r.ok) throw Error(r.statusText);
                            let u = await r.json();
                            if (n.current[e] = u, i.current) return;
                            c({
                                type: "fetched",
                                payload: u
                            })
                        } catch (e) {
                            if (i.current) return;
                            c({
                                type: "error",
                                payload: e
                            })
                        }
                    })(), () => {
                        i.current = !0
                    }
                }, [e]), o
            }

            function h(e, t) {
                var n;
                let i = "current" in e,
                    u = i ? t : e,
                    {
                        threshold: o = 0,
                        root: c = null,
                        rootMargin: s = "0%",
                        freezeOnceVisible: l = !1,
                        initialIsIntersecting: a = !1
                    } = u ? ? {},
                    [f, d] = (0, r.useState)(null),
                    v = i ? e.current : f,
                    [h, y] = (0, r.useState)(() => ({
                        isIntersecting: a,
                        entry: void 0
                    })),
                    w = (0, r.useRef)();
                w.current = null == u ? void 0 : u.onChange;
                let b = (null == (n = h.entry) ? void 0 : n.isIntersecting) && l;
                (0, r.useEffect)(() => {
                    let e;
                    if (!v || !("IntersectionObserver" in window) || b) return;
                    let t = new IntersectionObserver(n => {
                        let r = Array.isArray(t.thresholds) ? t.thresholds : [t.thresholds];
                        n.forEach(t => {
                            let n = t.isIntersecting && r.some(e => t.intersectionRatio >= e);
                            y({
                                isIntersecting: n,
                                entry: t
                            }), w.current && w.current(n, t), n && l && e && (e(), e = void 0)
                        })
                    }, {
                        threshold: o,
                        root: c,
                        rootMargin: s
                    });
                    return t.observe(v), () => {
                        t.disconnect()
                    }
                }, [v, JSON.stringify(o), c, s, b, l]);
                let g = (0, r.useRef)(null);
                if ((0, r.useEffect)(() => {
                        var e;
                        v || null == (e = h.entry) || !e.target || l || b || g.current === h.entry.target || (g.current = h.entry.target, y({
                            isIntersecting: a,
                            entry: void 0
                        }))
                    }, [v, h.entry, l, b, a]), i) return h.entry;
                let p = [d, !!h.isIntersecting, h.entry];
                return p.ref = p[0], p.isIntersecting = p[1], p.entry = p[2], p
            }
            var y = {
                width: void 0,
                height: void 0
            };

            function w(e) {
                let {
                    ref: t,
                    box: n = "content-box"
                } = e, [{
                    width: i,
                    height: u
                }, o] = (0, r.useState)(y), c = function() {
                    let e = (0, r.useRef)(!1);
                    return (0, r.useEffect)(() => (e.current = !0, () => {
                        e.current = !1
                    }), []), (0, r.useCallback)(() => e.current, [])
                }(), s = (0, r.useRef)({ ...y
                }), l = (0, r.useRef)(void 0);
                return l.current = null == e ? void 0 : e.onResize, (0, r.useEffect)(() => {
                    if (!(null == t ? void 0 : t.current) || "undefined" == typeof window || !("ResizeObserver" in window)) return;
                    let e = new ResizeObserver(([e]) => {
                        let t = "border-box" === n ? "borderBoxSize" : "device-pixel-content-box" === n ? "devicePixelContentBoxSize" : "contentBoxSize",
                            r = b(e, t, "inlineSize"),
                            i = b(e, t, "blockSize");
                        if (s.current.width !== r || s.current.height !== i) {
                            let e = {
                                width: r,
                                height: i
                            };
                            s.current.width = r, s.current.height = i, (null == l ? void 0 : l.current) ? l.current(e) : c() && o(e)
                        }
                    });
                    return e.observe(t.current, {
                        box: n
                    }), () => {
                        e.disconnect()
                    }
                }, [n, t, c]), {
                    width: i,
                    height: u
                }
            }

            function b(e, t, n) {
                return e[t] ? Array.isArray(e[t]) ? e[t][0][n] : e[t][n] : "contentBoxSize" === t ? e.contentRect["inlineSize" === n ? "width" : "height"] : void 0
            }
            var g = "undefined" == typeof window;

            function p(e = {}) {
                let {
                    initializeWithValue: t = !0
                } = e;
                g && (t = !1);
                let [n, i] = (0, r.useState)(() => t ? {
                    width: window.innerWidth,
                    height: window.innerHeight
                } : {
                    width: void 0,
                    height: void 0
                }), u = f(i, null == e ? void 0 : e.debounceDelay);

                function s() {
                    ((null == e ? void 0 : e.debounceDelay) ? u : i)({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                }
                return c("resize", s), o(() => {
                    s()
                }, []), n
            }
        },
        96907: (e, t, n) => {
            var r = 0 / 0,
                i = /^\s+|\s+$/g,
                u = /^[-+]0x[0-9a-f]+$/i,
                o = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                s = parseInt,
                l = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                a = "object" == typeof self && self && self.Object === Object && self,
                f = l || a || Function("return this")(),
                d = Object.prototype.toString,
                v = Math.max,
                h = Math.min,
                y = function() {
                    return f.Date.now()
                };

            function w(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function b(e) {
                if ("number" == typeof e) return e;
                if ("symbol" == typeof(t = e) || t && "object" == typeof t && "[object Symbol]" == d.call(t)) return r;
                if (w(e)) {
                    var t, n = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = w(n) ? n + "" : n
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(i, "");
                var l = o.test(e);
                return l || c.test(e) ? s(e.slice(2), l ? 2 : 8) : u.test(e) ? r : +e
            }
            e.exports = function(e, t, n) {
                var r, i, u, o, c, s, l = 0,
                    a = !1,
                    f = !1,
                    d = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function g(t) {
                    var n = r,
                        u = i;
                    return r = i = void 0, l = t, o = e.apply(u, n)
                }

                function p(e) {
                    var n = e - s,
                        r = e - l;
                    return void 0 === s || n >= t || n < 0 || f && r >= u
                }

                function E() {
                    var e, n, r, i = y();
                    if (p(i)) return m(i);
                    c = setTimeout(E, (e = i - s, n = i - l, r = t - e, f ? h(r, u - n) : r))
                }

                function m(e) {
                    return (c = void 0, d && r) ? g(e) : (r = i = void 0, o)
                }

                function R() {
                    var e, n = y(),
                        u = p(n);
                    if (r = arguments, i = this, s = n, u) {
                        if (void 0 === c) return l = e = s, c = setTimeout(E, t), a ? g(e) : o;
                        if (f) return c = setTimeout(E, t), g(s)
                    }
                    return void 0 === c && (c = setTimeout(E, t)), o
                }
                return t = b(t) || 0, w(n) && (a = !!n.leading, u = (f = "maxWait" in n) ? v(b(n.maxWait) || 0, t) : u, d = "trailing" in n ? !!n.trailing : d), R.cancel = function() {
                    void 0 !== c && clearTimeout(c), l = 0, r = s = i = c = void 0
                }, R.flush = function() {
                    return void 0 === c ? o : m(y())
                }, R
            }
        }
    }
]);