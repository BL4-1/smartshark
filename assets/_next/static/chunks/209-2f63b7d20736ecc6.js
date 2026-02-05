try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "196a173f-c0ee-43db-ba87-5a992800a136", e._sentryDebugIdIdentifier = "sentry-dbid-196a173f-c0ee-43db-ba87-5a992800a136")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [209], {
        9698: (e, t, n) => {
            n.d(t, {
                $c: () => O,
                Jn: () => y,
                O_: () => g,
                Vh: () => m,
                at: () => b,
                uc: () => v,
                uo: () => S
            });
            var a = n(86387),
                s = n(45290),
                r = n(92463),
                i = n(59673),
                o = n(62336),
                l = n(67665),
                c = n(61586),
                u = n(66196),
                d = n(21462),
                [b, p, f, h] = (0, s.D)();

            function v(e) {
                var t;
                let {
                    defaultIndex: n,
                    onChange: a,
                    index: s,
                    isManual: r,
                    isLazy: o,
                    lazyBehavior: l = "unmount",
                    orientation: c = "horizontal",
                    direction: u = "ltr",
                    ...b
                } = e, [p, h] = (0, d.useState)(null != n ? n : 0), [v, g] = (0, i.i)({
                    defaultValue: null != n ? n : 0,
                    value: s,
                    onChange: a
                });
                (0, d.useEffect)(() => {
                    null != s && h(s)
                }, [s]);
                let w = f(),
                    O = (0, d.useId)(),
                    m = null != (t = e.id) ? t : O;
                return {
                    id: `tabs-${m}`,
                    selectedIndex: v,
                    focusedIndex: p,
                    setSelectedIndex: g,
                    setFocusedIndex: h,
                    isManual: r,
                    isLazy: o,
                    lazyBehavior: l,
                    orientation: c,
                    descendants: w,
                    direction: u,
                    htmlProps: b
                }
            }
            var [g, w] = (0, r.q)({
                name: "TabsContext",
                errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
            });

            function O(e) {
                let {
                    focusedIndex: t,
                    orientation: n,
                    direction: a
                } = w(), s = p(), r = (0, d.useCallback)(e => {
                    let r = () => {
                            var e;
                            let n = s.nextEnabled(t);
                            n && (null == (e = n.node) || e.focus())
                        },
                        i = () => {
                            var e;
                            let n = s.prevEnabled(t);
                            n && (null == (e = n.node) || e.focus())
                        },
                        o = "horizontal" === n,
                        l = "vertical" === n,
                        c = e.key,
                        u = {
                            ["ltr" === a ? "ArrowLeft" : "ArrowRight"]: () => o && i(),
                            ["ltr" === a ? "ArrowRight" : "ArrowLeft"]: () => o && r(),
                            ArrowDown: () => l && r(),
                            ArrowUp: () => l && i(),
                            Home: () => {
                                var e;
                                let t = s.firstEnabled();
                                t && (null == (e = t.node) || e.focus())
                            },
                            End: () => {
                                var e;
                                let t = s.lastEnabled();
                                t && (null == (e = t.node) || e.focus())
                            }
                        }[c];
                    u && (e.preventDefault(), u(e))
                }, [s, t, n, a]);
                return { ...e,
                    role: "tablist",
                    "aria-orientation": n,
                    onKeyDown: (0, u.Hj)(e.onKeyDown, r)
                }
            }

            function m(e) {
                let {
                    isDisabled: t = !1,
                    isFocusable: n = !1,
                    ...s
                } = e, {
                    setSelectedIndex: r,
                    isManual: i,
                    id: o,
                    setFocusedIndex: c,
                    selectedIndex: d
                } = w(), {
                    index: b,
                    register: p
                } = h({
                    disabled: t && !n
                }), f = b === d;
                return { ...(0, a.I)({ ...s,
                        ref: (0, l.Px)(p, e.ref),
                        isDisabled: t,
                        isFocusable: n,
                        onClick: (0, u.Hj)(e.onClick, () => {
                            r(b)
                        })
                    }),
                    id: _(o, b),
                    role: "tab",
                    tabIndex: f ? 0 : -1,
                    type: "button",
                    "aria-selected": f,
                    "aria-controls": x(o, b),
                    onFocus: t ? void 0 : (0, u.Hj)(e.onFocus, () => {
                        c(b);
                        let e = t && n;
                        i || e || r(b)
                    })
                }
            }
            var [j, T] = (0, r.q)({});

            function S(e) {
                let {
                    id: t,
                    selectedIndex: n
                } = w(), a = (0, o.a)(e.children).map((e, a) => (0, d.createElement)(j, {
                    key: a,
                    value: {
                        isSelected: a === n,
                        id: x(t, a),
                        tabId: _(t, a),
                        selectedIndex: n
                    }
                }, e));
                return { ...e,
                    children: a
                }
            }

            function y(e) {
                let {
                    children: t,
                    ...n
                } = e, {
                    isLazy: a,
                    lazyBehavior: s
                } = w(), {
                    isSelected: r,
                    id: i,
                    tabId: o
                } = T(), l = (0, d.useRef)(!1);
                r && (l.current = !0);
                let u = (0, c.q)({
                    wasSelected: l.current,
                    isSelected: r,
                    enabled: a,
                    mode: s
                });
                return {
                    tabIndex: 0,
                    ...n,
                    children: u ? t : null,
                    role: "tabpanel",
                    "aria-labelledby": o,
                    hidden: !r,
                    id: i
                }
            }

            function _(e, t) {
                return `${e}--tab-${t}`
            }

            function x(e, t) {
                return `${e}--tabpanel-${t}`
            }
        },
        10213: (e, t, n) => {
            n.d(t, {
                w: () => c
            });
            var a = n(13234),
                s = n(9698),
                r = n(66196),
                i = n(96116),
                o = n(54284),
                l = n(23798),
                c = (0, i.R)(function(e, t) {
                    let n = (0, s.$c)({ ...e,
                            ref: t
                        }),
                        i = {
                            display: "flex",
                            ...(0, a.e)().tablist
                        };
                    return (0, l.jsx)(o.B.div, { ...n,
                        className: (0, r.cx)("chakra-tabs__tablist", e.className),
                        __css: i
                    })
                });
            c.displayName = "TabList"
        },
        13234: (e, t, n) => {
            n.d(t, {
                e: () => p,
                t: () => f
            });
            var a = n(9698),
                s = n(92463),
                r = n(96116),
                i = n(67267),
                o = n(56134),
                l = n(54284),
                c = n(66196),
                u = n(21462),
                d = n(23798),
                [b, p] = (0, s.q)({
                    name: "TabsStylesContext",
                    errorMessage: "useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tabs />\" "
                }),
                f = (0, r.R)(function(e, t) {
                    let n = (0, i.o5)("Tabs", e),
                        {
                            children: s,
                            className: r,
                            ...p
                        } = (0, o.MN)(e),
                        {
                            htmlProps: f,
                            descendants: h,
                            ...v
                        } = (0, a.uc)(p),
                        g = (0, u.useMemo)(() => v, [v]),
                        {
                            isFitted: w,
                            ...O
                        } = f,
                        m = {
                            position: "relative",
                            ...n.root
                        };
                    return (0, d.jsx)(a.at, {
                        value: h,
                        children: (0, d.jsx)(a.O_, {
                            value: g,
                            children: (0, d.jsx)(b, {
                                value: n,
                                children: (0, d.jsx)(l.B.div, {
                                    className: (0, c.cx)("chakra-tabs", r),
                                    ref: t,
                                    ...O,
                                    __css: m,
                                    children: s
                                })
                            })
                        })
                    })
                });
            f.displayName = "Tabs"
        },
        20814: (e, t, n) => {
            n.d(t, {
                o: () => c
            });
            var a = n(13234),
                s = n(9698),
                r = n(66196),
                i = n(96116),
                o = n(54284),
                l = n(23798),
                c = (0, i.R)(function(e, t) {
                    let n = (0, a.e)(),
                        i = (0, s.Vh)({ ...e,
                            ref: t
                        }),
                        c = {
                            outline: "0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            ...n.tab
                        };
                    return (0, l.jsx)(o.B.button, { ...i,
                        className: (0, r.cx)("chakra-tabs__tab", e.className),
                        __css: c
                    })
                });
            c.displayName = "Tab"
        },
        35451: (e, t, n) => {
            n.d(t, {
                K: () => c
            });
            var a = n(13234),
                s = n(9698),
                r = n(66196),
                i = n(96116),
                o = n(54284),
                l = n(23798),
                c = (0, i.R)(function(e, t) {
                    let n = (0, s.Jn)({ ...e,
                            ref: t
                        }),
                        i = (0, a.e)();
                    return (0, l.jsx)(o.B.div, {
                        outline: "0",
                        ...n,
                        className: (0, r.cx)("chakra-tabs__tab-panel", e.className),
                        __css: i.tabpanel
                    })
                });
            c.displayName = "TabPanel"
        },
        41153: (e, t, n) => {
            n.d(t, {
                T: () => c
            });
            var a = n(13234),
                s = n(9698),
                r = n(66196),
                i = n(96116),
                o = n(54284),
                l = n(23798),
                c = (0, i.R)(function(e, t) {
                    let n = (0, s.uo)(e),
                        i = (0, a.e)();
                    return (0, l.jsx)(o.B.div, { ...n,
                        width: "100%",
                        ref: t,
                        className: (0, r.cx)("chakra-tabs__tab-panels", e.className),
                        __css: i.tabpanels
                    })
                });
            c.displayName = "TabPanels"
        },
        99792: (e, t, n) => {
            n.d(t, {
                uh: () => c
            });
            var a = n(21462);
            let s = {
                    delta: 10,
                    preventScrollOnSwipe: !1,
                    rotationAngle: 0,
                    trackMouse: !1,
                    trackTouch: !0,
                    swipeDuration: 1 / 0,
                    touchEventOptions: {
                        passive: !0
                    }
                },
                r = {
                    first: !0,
                    initial: [0, 0],
                    start: 0,
                    swiping: !1,
                    xy: [0, 0]
                },
                i = "mousemove",
                o = "mouseup";

            function l(e, t) {
                if (0 === t) return e;
                let n = Math.PI / 180 * t;
                return [e[0] * Math.cos(n) + e[1] * Math.sin(n), e[1] * Math.cos(n) - e[0] * Math.sin(n)]
            }

            function c(e) {
                var t, n, c;
                let u, {
                        trackMouse: d
                    } = e,
                    b = a.useRef(Object.assign({}, r)),
                    p = a.useRef(Object.assign({}, s)),
                    f = a.useRef(Object.assign({}, p.current));
                for (u in f.current = Object.assign({}, p.current), p.current = Object.assign(Object.assign({}, s), e), s) void 0 === p.current[u] && (p.current[u] = s[u]);
                let [h, v] = a.useMemo(() => (function(e, t) {
                    let n = t => {
                            let n = "touches" in t;
                            n && t.touches.length > 1 || e((e, s) => {
                                s.trackMouse && !n && (document.addEventListener(i, a), document.addEventListener(o, u));
                                let {
                                    clientX: c,
                                    clientY: d
                                } = n ? t.touches[0] : t, b = l([c, d], s.rotationAngle);
                                return s.onTouchStartOrOnMouseDown && s.onTouchStartOrOnMouseDown({
                                    event: t
                                }), Object.assign(Object.assign(Object.assign({}, e), r), {
                                    initial: b.slice(),
                                    xy: b,
                                    start: t.timeStamp || 0
                                })
                            })
                        },
                        a = t => {
                            e((e, n) => {
                                var a, r, i, o;
                                let c = "touches" in t;
                                if (c && t.touches.length > 1) return e;
                                if (t.timeStamp - e.start > n.swipeDuration) return e.swiping ? Object.assign(Object.assign({}, e), {
                                    swiping: !1
                                }) : e;
                                let {
                                    clientX: u,
                                    clientY: d
                                } = c ? t.touches[0] : t, [b, p] = l([u, d], n.rotationAngle), f = b - e.xy[0], h = p - e.xy[1], v = Math.abs(f), g = Math.abs(h), w = (t.timeStamp || 0) - e.start, O = Math.sqrt(v * v + g * g) / (w || 1), m = [f / (w || 1), h / (w || 1)], j = (a = v, r = g, i = f, o = h, a > r ? i > 0 ? "Right" : "Left" : o > 0 ? "Down" : "Up"), T = "number" == typeof n.delta ? n.delta : n.delta[j.toLowerCase()] || s.delta;
                                if (v < T && g < T && !e.swiping) return e;
                                let S = {
                                    absX: v,
                                    absY: g,
                                    deltaX: f,
                                    deltaY: h,
                                    dir: j,
                                    event: t,
                                    first: e.first,
                                    initial: e.initial,
                                    velocity: O,
                                    vxvy: m
                                };
                                S.first && n.onSwipeStart && n.onSwipeStart(S), n.onSwiping && n.onSwiping(S);
                                let y = !1;
                                return (n.onSwiping || n.onSwiped || n[`onSwiped${j}`]) && (y = !0), y && n.preventScrollOnSwipe && n.trackTouch && t.cancelable && t.preventDefault(), Object.assign(Object.assign({}, e), {
                                    first: !1,
                                    eventData: S,
                                    swiping: !0
                                })
                            })
                        },
                        c = t => {
                            e((e, n) => {
                                let a;
                                if (e.swiping && e.eventData) {
                                    if (t.timeStamp - e.start < n.swipeDuration) {
                                        a = Object.assign(Object.assign({}, e.eventData), {
                                            event: t
                                        }), n.onSwiped && n.onSwiped(a);
                                        let s = n[`onSwiped${a.dir}`];
                                        s && s(a)
                                    }
                                } else n.onTap && n.onTap({
                                    event: t
                                });
                                return n.onTouchEndOrOnMouseUp && n.onTouchEndOrOnMouseUp({
                                    event: t
                                }), Object.assign(Object.assign(Object.assign({}, e), r), {
                                    eventData: a
                                })
                            })
                        },
                        u = e => {
                            document.removeEventListener(i, a), document.removeEventListener(o, u), c(e)
                        },
                        d = (e, t) => {
                            let r = () => {};
                            if (e && e.addEventListener) {
                                let i = Object.assign(Object.assign({}, s.touchEventOptions), t.touchEventOptions),
                                    o = [
                                        ["touchstart", n, i],
                                        ["touchmove", a, Object.assign(Object.assign({}, i), t.preventScrollOnSwipe ? {
                                            passive: !1
                                        } : {})],
                                        ["touchend", c, i]
                                    ];
                                o.forEach(([t, n, a]) => e.addEventListener(t, n, a)), r = () => o.forEach(([t, n]) => e.removeEventListener(t, n))
                            }
                            return r
                        },
                        b = {
                            ref: t => {
                                null !== t && e((e, n) => {
                                    if (e.el === t) return e;
                                    let a = {};
                                    return e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), a.cleanUpTouch = void 0), n.trackTouch && t && (a.cleanUpTouch = d(t, n)), Object.assign(Object.assign(Object.assign({}, e), {
                                        el: t
                                    }), a)
                                })
                            }
                        };
                    return t.trackMouse && (b.onMouseDown = n), [b, d]
                })(e => b.current = e(b.current, p.current), {
                    trackMouse: d
                }), [d]);
                return t = b.current, n = p.current, c = f.current, b.current = n.trackTouch && t.el ? t.cleanUpTouch ? n.preventScrollOnSwipe !== c.preventScrollOnSwipe || n.touchEventOptions.passive !== c.touchEventOptions.passive ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), {
                    cleanUpTouch: v(t.el, n)
                })) : t : Object.assign(Object.assign({}, t), {
                    cleanUpTouch: v(t.el, n)
                }) : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), {
                    cleanUpTouch: void 0
                })), h
            }
        }
    }
]);