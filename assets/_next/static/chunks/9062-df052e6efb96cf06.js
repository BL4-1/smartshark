try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f2c7edff-0ca8-4345-b330-d18ca1239e69", e._sentryDebugIdIdentifier = "sentry-dbid-f2c7edff-0ca8-4345-b330-d18ca1239e69")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3351, 9062], {
        5732: (e, t, r) => {
            r.d(t, {
                z: () => o
            });
            var a = r(64724),
                n = r(96116),
                i = r(23798),
                o = (0, n.R)((e, t) => (0, i.jsx)(a.B, {
                    align: "center",
                    ...e,
                    direction: "row",
                    ref: t
                }));
            o.displayName = "HStack"
        },
        12977: (e, t, r) => {
            r.d(t, {
                r: () => s
            });
            var a = r(63223),
                n = r(96116),
                i = r(20007),
                o = r(76759),
                l = r(23031),
                d = r(23798),
                s = (0, n.R)(function(e, t) {
                    var r, n, s;
                    let {
                        columns: u,
                        spacingX: m,
                        spacingY: c,
                        spacing: f,
                        minChildWidth: p,
                        ...y
                    } = e, v = (0, i.D)(), x = p ? (r = p, n = v, (0, l.bk)(r, e => {
                        let t = (0, o.gf)("sizes", e, "number" == typeof e ? `${e}px` : e)(n);
                        return null === e ? null : `repeat(auto-fit, minmax(${t}, 1fr))`
                    })) : (s = u, (0, l.bk)(s, e => null === e ? null : `repeat(${e}, minmax(0, 1fr))`));
                    return (0, d.jsx)(a.x, {
                        ref: t,
                        gap: f,
                        columnGap: m,
                        rowGap: c,
                        templateColumns: x,
                        ...y
                    })
                });
            s.displayName = "SimpleGrid"
        },
        14770: (e, t, r) => {
            r.d(t, {
                D: () => s
            });
            var a = r(96116),
                n = r(67267),
                i = r(56134),
                o = r(54284),
                l = r(66196),
                d = r(23798),
                s = (0, a.R)(function(e, t) {
                    let r = (0, n.Vl)("Heading", e),
                        {
                            className: a,
                            ...s
                        } = (0, i.MN)(e);
                    return (0, d.jsx)(o.B.h2, {
                        ref: t,
                        className: (0, l.cx)("chakra-heading", e.className),
                        ...s,
                        __css: r
                    })
                });
            s.displayName = "Heading"
        },
        21976: (e, t, r) => {
            function a(e) {
                var t;
                return null != e && "object" == typeof e && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE && null != (t = e.ownerDocument) ? t : document
            }
            r.d(t, {
                Bd: () => n,
                TW: () => a
            });
            var n = !!("undefined" != typeof window && window.document && window.document.createElement)
        },
        26829: (e, t, r) => {
            r.d(t, {
                M6: () => l,
                az: () => o,
                jl: () => d
            });
            var a = r(54284),
                n = r(96116),
                i = r(23798),
                o = (0, a.B)("div");
            o.displayName = "Box";
            var l = (0, n.R)(function(e, t) {
                let {
                    size: r,
                    centerContent: a = !0,
                    ...n
                } = e;
                return (0, i.jsx)(o, {
                    ref: t,
                    boxSize: r,
                    __css: { ...a ? {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        } : {},
                        flexShrink: 0,
                        flexGrow: 0
                    },
                    ...n
                })
            });
            l.displayName = "Square";
            var d = (0, n.R)(function(e, t) {
                let {
                    size: r,
                    ...a
                } = e;
                return (0, i.jsx)(l, {
                    size: r,
                    ref: t,
                    borderRadius: "9999px",
                    ...a
                })
            });
            d.displayName = "Circle"
        },
        35575: (e, t, r) => {
            r.d(t, {
                c: () => o
            });
            var a = r(21976),
                n = r(21462),
                i = a.Bd ? n.useLayoutEffect : n.useEffect;

            function o(e, t = []) {
                let r = (0, n.useRef)(e);
                return i(() => {
                    r.current = e
                }), (0, n.useCallback)((...e) => {
                    var t;
                    return null == (t = r.current) ? void 0 : t.call(r, ...e)
                }, t)
            }
        },
        40796: (e, t, r) => {
            r.d(t, {
                Bi: () => n
            });
            var a = r(21462);

            function n(e, t) {
                let r = (0, a.useId)();
                return (0, a.useMemo)(() => e || [t, r].filter(Boolean).join("-"), [e, t, r])
            }
        },
        41929: (e, t, r) => {
            r.d(t, {
                XU: () => c,
                Gr: () => f,
                zR: () => m
            });
            var a, n, i = r(82643),
                o = r(21462),
                l = r(57552);
            ! function(e) {
                e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
            }(a || (a = {})),
            function(e) {
                e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
            }(n || (n = {}));
            var d = function(e) {
                var t = (0, l.A)(),
                    r = e.value,
                    a = e.children,
                    n = (0, i.Tt)(e, ["value", "children"]);
                return a(t.formatNumberToParts(r, n))
            };

            function s(e) {
                var t = function(t) {
                    var r = (0, l.A)(),
                        a = t.value,
                        n = t.children,
                        o = (0, i.Tt)(t, ["value", "children"]),
                        d = "string" == typeof a ? new Date(a || 0) : a;
                    return n("formatDate" === e ? r.formatDateToParts(d, o) : r.formatTimeToParts(d, o))
                };
                return t.displayName = n[e], t
            }

            function u(e) {
                var t = function(t) {
                    var r = (0, l.A)(),
                        a = t.value,
                        n = t.children,
                        d = (0, i.Tt)(t, ["value", "children"]),
                        s = r[e](a, d);
                    if ("function" == typeof n) return n(s);
                    var u = r.textComponent || o.Fragment;
                    return o.createElement(u, null, s)
                };
                return t.displayName = a[e], t
            }

            function m(e) {
                return e
            }
            d.displayName = "FormattedNumberParts", d.displayName = "FormattedNumberParts";
            var c = u("formatDate");
            u("formatTime");
            var f = u("formatNumber");
            u("formatList"), u("formatDisplayName"), s("formatDate"), s("formatTime")
        },
        56545: (e, t, r) => {
            r.d(t, {
                T: () => o
            });
            var a = r(64724),
                n = r(96116),
                i = r(23798),
                o = (0, n.R)((e, t) => (0, i.jsx)(a.B, {
                    align: "center",
                    ...e,
                    direction: "column",
                    ref: t
                }));
            o.displayName = "VStack"
        },
        62336: (e, t, r) => {
            r.d(t, {
                a: () => n
            });
            var a = r(21462);

            function n(e) {
                return a.Children.toArray(e).filter(e => (0, a.isValidElement)(e))
            }
        },
        63223: (e, t, r) => {
            r.d(t, {
                x: () => o
            });
            var a = r(96116),
                n = r(54284),
                i = r(23798),
                o = (0, a.R)(function(e, t) {
                    let {
                        templateAreas: r,
                        gap: a,
                        rowGap: o,
                        columnGap: l,
                        column: d,
                        row: s,
                        autoFlow: u,
                        autoRows: m,
                        templateRows: c,
                        autoColumns: f,
                        templateColumns: p,
                        ...y
                    } = e;
                    return (0, i.jsx)(n.B.div, {
                        ref: t,
                        __css: {
                            display: "grid",
                            gridTemplateAreas: r,
                            gridGap: a,
                            gridRowGap: o,
                            gridColumnGap: l,
                            gridAutoColumns: f,
                            gridColumn: d,
                            gridRow: s,
                            gridAutoFlow: u,
                            gridAutoRows: m,
                            gridTemplateRows: c,
                            gridTemplateColumns: p
                        },
                        ...y
                    })
                });
            o.displayName = "Grid"
        },
        64724: (e, t, r) => {
            r.d(t, {
                B: () => m
            });
            var a = r(54284),
                n = r(23798),
                i = e => (0, n.jsx)(a.B.div, {
                    className: "chakra-stack__item",
                    ...e,
                    __css: {
                        display: "inline-block",
                        flex: "0 0 auto",
                        minWidth: 0,
                        ...e.__css
                    }
                });
            i.displayName = "StackItem";
            var o = r(23031),
                l = r(62336),
                d = r(66196),
                s = r(96116),
                u = r(21462),
                m = (0, s.R)((e, t) => {
                    let {
                        isInline: r,
                        direction: s,
                        align: m,
                        justify: c,
                        spacing: f = "0.5rem",
                        wrap: p,
                        children: y,
                        divider: v,
                        className: x,
                        shouldWrapChildren: b,
                        ...N
                    } = e, g = r ? "row" : null != s ? s : "column", h = (0, u.useMemo)(() => (function(e) {
                        let {
                            spacing: t,
                            direction: r
                        } = e, a = {
                            column: {
                                my: t,
                                mx: 0,
                                borderLeftWidth: 0,
                                borderBottomWidth: "1px"
                            },
                            "column-reverse": {
                                my: t,
                                mx: 0,
                                borderLeftWidth: 0,
                                borderBottomWidth: "1px"
                            },
                            row: {
                                mx: t,
                                my: 0,
                                borderLeftWidth: "1px",
                                borderBottomWidth: 0
                            },
                            "row-reverse": {
                                mx: t,
                                my: 0,
                                borderLeftWidth: "1px",
                                borderBottomWidth: 0
                            }
                        };
                        return {
                            "&": (0, o.bk)(r, e => a[e])
                        }
                    })({
                        spacing: f,
                        direction: g
                    }), [f, g]), k = !!v, w = !b && !k, _ = (0, u.useMemo)(() => {
                        let e = (0, l.a)(y);
                        return w ? e : e.map((t, r) => {
                            let a = void 0 !== t.key ? t.key : r,
                                o = r + 1 === e.length,
                                l = (0, n.jsx)(i, {
                                    children: t
                                }, a),
                                d = b ? l : t;
                            if (!k) return d;
                            let s = (0, u.cloneElement)(v, {
                                __css: h
                            });
                            return (0, n.jsxs)(u.Fragment, {
                                children: [d, o ? null : s]
                            }, a)
                        })
                    }, [v, h, k, w, b, y]), D = (0, d.cx)("chakra-stack", x);
                    return (0, n.jsx)(a.B.div, {
                        ref: t,
                        display: "flex",
                        alignItems: m,
                        justifyContent: c,
                        flexDirection: g,
                        flexWrap: p,
                        gap: k ? void 0 : f,
                        className: D,
                        ...N,
                        children: _
                    })
                });
            m.displayName = "Stack"
        },
        82095: (e, t, r) => {
            r.d(t, {
                j: () => l
            });
            var a = r(40796),
                n = r(21462),
                i = r(35575),
                o = r(90188);

            function l(e = {}) {
                let {
                    onClose: t,
                    onOpen: r,
                    isOpen: d,
                    id: s
                } = e, u = (0, i.c)(r), m = (0, i.c)(t), [c, f] = (0, n.useState)(e.defaultIsOpen || !1), [p, y] = function(e, t) {
                    let r = void 0 !== e;
                    return [r, r && void 0 !== e ? e : t]
                }(d, c), v = (0, a.Bi)(s, "disclosure"), x = (0, n.useCallback)(() => {
                    p || f(!1), null == m || m()
                }, [p, m]), b = (0, n.useCallback)(() => {
                    p || f(!0), null == u || u()
                }, [p, u]), N = (0, n.useCallback)(() => {
                    (y ? x : b)()
                }, [y, b, x]);
                return {
                    isOpen: !!y,
                    onOpen: b,
                    onClose: x,
                    onToggle: N,
                    isControlled: p,
                    getButtonProps: (e = {}) => ({ ...e,
                        "aria-expanded": y,
                        "aria-controls": v,
                        onClick: (0, o.Hj)(e.onClick, N)
                    }),
                    getDisclosureProps: (e = {}) => ({ ...e,
                        hidden: !y,
                        id: v
                    })
                }
            }
        },
        83902: (e, t, r) => {
            r.d(t, {
                m: () => s
            });
            var a = r(96116),
                n = r(56134),
                i = r(67267),
                o = r(54284),
                l = r(66196),
                d = r(23798),
                s = (0, a.R)(function(e, t) {
                    let {
                        className: r,
                        centerContent: a,
                        ...s
                    } = (0, n.MN)(e), u = (0, i.Vl)("Container", e);
                    return (0, d.jsx)(o.B.div, {
                        ref: t,
                        className: (0, l.cx)("chakra-container", r),
                        ...s,
                        __css: { ...u,
                            ...a && {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }
                        }
                    })
                });
            s.displayName = "Container"
        }
    }
]);