try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        r = (new e.Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "018ba674-0699-48fe-b18c-14a61b2a8ebd", e._sentryDebugIdIdentifier = "sentry-dbid-018ba674-0699-48fe-b18c-14a61b2a8ebd")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3351, 7345, 9726], {
        2025: (e, r, t) => {
            t.d(r, {
                _: () => u
            });
            var n = t(96116),
                o = t(23798),
                a = (0, n.R)(function(e, r) {
                    let {
                        htmlWidth: t,
                        htmlHeight: n,
                        alt: a,
                        ...i
                    } = e;
                    return (0, o.jsx)("img", {
                        width: t,
                        height: n,
                        ref: r,
                        alt: a,
                        ...i
                    })
                });
            a.displayName = "NativeImage";
            var i = t(7526),
                l = t(54284),
                u = (0, n.R)(function(e, r) {
                    let {
                        fallbackSrc: t,
                        fallback: n,
                        src: u,
                        srcSet: s,
                        align: d,
                        fit: c,
                        loading: m,
                        ignoreFallback: f,
                        crossOrigin: p,
                        fallbackStrategy: v = "beforeLoadOrError",
                        referrerPolicy: b,
                        ...h
                    } = e, y = void 0 !== t || void 0 !== n, g = null != m || f || !y, x = (0, i.l)({ ...e,
                        crossOrigin: p,
                        ignoreFallback: g
                    }), w = (0, i.m)(x, v), N = {
                        ref: r,
                        objectFit: c,
                        objectPosition: d,
                        ...g ? h : function(e, r = []) {
                            let t = Object.assign({}, e);
                            for (let e of r) e in t && delete t[e];
                            return t
                        }(h, ["onError", "onLoad"])
                    };
                    return w ? n || (0, o.jsx)(l.B.img, {
                        as: a,
                        className: "chakra-image__placeholder",
                        src: t,
                        ...N
                    }) : (0, o.jsx)(l.B.img, {
                        as: a,
                        src: u,
                        srcSet: s,
                        crossOrigin: p,
                        loading: m,
                        referrerPolicy: b,
                        className: "chakra-image",
                        ...N
                    })
                });
            u.displayName = "Image"
        },
        4129: (e, r, t) => {
            t.d(r, {
                v: () => i
            });
            var n = t(21462),
                o = t(62561),
                a = t(12189);

            function i(e) {
                let {
                    isOpen: r,
                    ref: t
                } = e, [i, l] = (0, n.useState)(r), [u, s] = (0, n.useState)(!1);
                return (0, n.useEffect)(() => {
                    u || (l(r), s(!0))
                }, [r, u, i]), (0, o.M)(() => t.current, "animationend", () => {
                    l(r)
                }), {
                    present: !(!r && !i),
                    onComplete() {
                        var e;
                        let r = new((0, a.mD)(t.current)).CustomEvent("animationend", {
                            bubbles: !0
                        });
                        null == (e = t.current) || e.dispatchEvent(r)
                    }
                }
            }
        },
        5732: (e, r, t) => {
            t.d(r, {
                z: () => i
            });
            var n = t(64724),
                o = t(96116),
                a = t(23798),
                i = (0, o.R)((e, r) => (0, a.jsx)(n.B, {
                    align: "center",
                    ...e,
                    direction: "row",
                    ref: r
                }));
            i.displayName = "HStack"
        },
        7526: (e, r, t) => {
            t.d(r, {
                l: () => a,
                m: () => i
            });
            var n = t(41701),
                o = t(21462);

            function a(e) {
                let {
                    loading: r,
                    src: t,
                    srcSet: a,
                    onLoad: i,
                    onError: l,
                    crossOrigin: u,
                    sizes: s,
                    ignoreFallback: d
                } = e, [c, m] = (0, o.useState)("pending");
                (0, o.useEffect)(() => {
                    m(t ? "loading" : "pending")
                }, [t]);
                let f = (0, o.useRef)(),
                    p = (0, o.useCallback)(() => {
                        if (!t) return;
                        v();
                        let e = new Image;
                        e.src = t, u && (e.crossOrigin = u), a && (e.srcset = a), s && (e.sizes = s), r && (e.loading = r), e.onload = e => {
                            v(), m("loaded"), null == i || i(e)
                        }, e.onerror = e => {
                            v(), m("failed"), null == l || l(e)
                        }, f.current = e
                    }, [t, u, a, s, i, l, r]),
                    v = () => {
                        f.current && (f.current.onload = null, f.current.onerror = null, f.current = null)
                    };
                return (0, n.U)(() => {
                    if (!d) return "loading" === c && p(), () => {
                        v()
                    }
                }, [c, p, d]), d ? "loaded" : c
            }
            var i = (e, r) => "loaded" !== e && "beforeLoadOrError" === r || "failed" === e && "onError" === r
        },
        9812: (e, r, t) => {
            t.d(r, {
                h: () => m
            });
            var n = t(69384),
                o = t(54284),
                a = t(96116),
                i = t(16562),
                l = t(23798),
                u = {
                    exit: {
                        opacity: 0,
                        scale: .95,
                        transition: {
                            duration: .1,
                            ease: [.4, 0, 1, 1]
                        }
                    },
                    enter: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: .15,
                            ease: [0, 0, .2, 1]
                        }
                    }
                },
                s = (0, o.B)(i.P.section),
                d = (0, a.R)(function(e, r) {
                    let {
                        variants: t = u,
                        ...o
                    } = e, {
                        isOpen: a
                    } = (0, n.C_)();
                    return (0, l.jsx)(s, {
                        ref: r,
                        variants: function(e) {
                            if (e) return {
                                enter: { ...e.enter,
                                    visibility: "visible"
                                },
                                exit: { ...e.exit,
                                    transitionEnd: {
                                        visibility: "hidden"
                                    }
                                }
                            }
                        }(t),
                        initial: !1,
                        animate: a ? "enter" : "exit",
                        ...o
                    })
                });
            d.displayName = "PopoverTransition";
            var c = t(66196),
                m = (0, a.R)(function(e, r) {
                    let {
                        rootProps: t,
                        motionProps: a,
                        ...i
                    } = e, {
                        getPopoverProps: u,
                        getPopoverPositionerProps: s,
                        onAnimationComplete: m
                    } = (0, n.C_)(), f = (0, n.jm)(), p = {
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        ...f.content
                    };
                    return (0, l.jsx)(o.B.div, { ...s(t),
                        __css: f.popper,
                        className: "chakra-popover__popper",
                        children: (0, l.jsx)(d, { ...a,
                            ...u(i, r),
                            onAnimationComplete: (0, c.OK)(m, i.onAnimationComplete),
                            className: (0, c.cx)("chakra-popover__content", e.className),
                            __css: p
                        })
                    })
                });
            m.displayName = "PopoverContent"
        },
        12189: (e, r, t) => {
            function n(e) {
                return null != e && "object" == typeof e && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE
            }

            function o(e) {
                var r;
                if (!n(e)) return !1;
                let t = null != (r = e.ownerDocument.defaultView) ? r : window;
                return e instanceof t.HTMLElement
            }

            function a(e) {
                var r, t;
                return null != (t = null == (r = i(e)) ? void 0 : r.defaultView) ? t : window
            }

            function i(e) {
                return n(e) ? e.ownerDocument : document
            }

            function l(e) {
                return i(e).activeElement
            }
            t.d(r, {
                bq: () => l,
                mD: () => a,
                sb: () => o
            })
        },
        14770: (e, r, t) => {
            t.d(r, {
                D: () => s
            });
            var n = t(96116),
                o = t(67267),
                a = t(56134),
                i = t(54284),
                l = t(66196),
                u = t(23798),
                s = (0, n.R)(function(e, r) {
                    let t = (0, o.Vl)("Heading", e),
                        {
                            className: n,
                            ...s
                        } = (0, a.MN)(e);
                    return (0, u.jsx)(i.B.h2, {
                        ref: r,
                        className: (0, l.cx)("chakra-heading", e.className),
                        ...s,
                        __css: t
                    })
                });
            s.displayName = "Heading"
        },
        19288: (e, r, t) => {
            t.d(r, {
                R: () => u
            });
            var n = t(69384),
                o = t(54284),
                a = t(66196),
                i = t(23798),
                l = (e, r) => r ? `${e}.${r}, ${r}` : void 0;

            function u(e) {
                var r;
                let {
                    bg: t,
                    bgColor: u,
                    backgroundColor: s,
                    shadow: d,
                    boxShadow: c,
                    shadowColor: m
                } = e, {
                    getArrowProps: f,
                    getArrowInnerProps: p
                } = (0, n.C_)(), v = (0, n.jm)(), b = null != (r = null != t ? t : u) ? r : s;
                return (0, i.jsx)(o.B.div, { ...f(),
                    className: "chakra-popover__arrow-positioner",
                    children: (0, i.jsx)(o.B.div, {
                        className: (0, a.cx)("chakra-popover__arrow", e.className),
                        ...p(e),
                        __css: {
                            "--popper-arrow-shadow-color": l("colors", m),
                            "--popper-arrow-bg": l("colors", b),
                            "--popper-arrow-shadow": l("shadows", null != d ? d : c),
                            ...v.arrow
                        }
                    })
                })
            }
            u.displayName = "PopoverArrow"
        },
        23097: (e, r, t) => {
            t.d(r, {
                A: () => w
            });
            var n = t(4129),
                o = t(32452),
                a = t(97665),
                i = t(7705),
                l = t(51825),
                u = t(48846),
                s = t(67665),
                d = t(66196),
                c = t(61586),
                m = t(21462),
                f = {
                    click: "click",
                    hover: "hover"
                };

            function p(e, r) {
                return e === r || (null == e ? void 0 : e.contains(r))
            }

            function v(e) {
                var r;
                let t = e.currentTarget.ownerDocument.activeElement;
                return null != (r = e.relatedTarget) ? r : t
            }
            var b = t(69384),
                h = t(67267),
                y = t(56134),
                g = t(20007),
                x = t(23798);

            function w(e) {
                let r = (0, h.o5)("Popover", e),
                    {
                        children: t,
                        ...w
                    } = (0, y.MN)(e),
                    N = (0, g.D)(),
                    _ = function(e = {}) {
                        let {
                            closeOnBlur: r = !0,
                            closeOnEsc: t = !0,
                            initialFocusRef: b,
                            id: h,
                            returnFocusOnClose: y = !0,
                            autoFocus: g = !0,
                            arrowSize: x,
                            arrowShadowColor: w,
                            trigger: N = f.click,
                            openDelay: _ = 200,
                            closeDelay: k = 200,
                            isLazy: j,
                            lazyBehavior: C = "unmount",
                            computePositionOnMount: E,
                            ...T
                        } = e, {
                            isOpen: D,
                            onClose: R,
                            onOpen: A,
                            onToggle: P
                        } = (0, i.j)(e), B = (0, m.useRef)(null), F = (0, m.useRef)(null), S = (0, m.useRef)(null), M = (0, m.useRef)(!1), L = (0, m.useRef)(!1);
                        D && (L.current = !0);
                        let [O, H] = (0, m.useState)(!1), [I, W] = (0, m.useState)(!1), q = (0, m.useId)(), z = null != h ? h : q, [G, $, K, U] = ["popover-trigger", "popover-content", "popover-header", "popover-body"].map(e => `${e}-${z}`), {
                            referenceRef: V,
                            getArrowProps: X,
                            getPopperProps: J,
                            getArrowInnerProps: Q,
                            forceUpdate: Y
                        } = (0, l.E)({ ...T,
                            enabled: D || !!E
                        }), Z = (0, n.v)({
                            isOpen: D,
                            ref: S
                        });
                        (0, o.S)({
                            enabled: D,
                            ref: F
                        }), (0, a.X)(S, {
                            focusRef: F,
                            visible: D,
                            shouldFocus: y && N === f.click
                        }), (0, a.w)(S, {
                            focusRef: b,
                            visible: D,
                            shouldFocus: g && N === f.click
                        });
                        let ee = (0, c.q)({
                                wasSelected: L.current,
                                enabled: j,
                                mode: C,
                                isSelected: Z.present
                            }),
                            er = (0, m.useCallback)((e = {}, n = null) => {
                                let o = { ...e,
                                    style: { ...e.style,
                                        transformOrigin: u.O3.transformOrigin.varRef,
                                        [u.O3.arrowSize.var]: x ? `${x}px` : void 0,
                                        [u.O3.arrowShadowColor.var]: w
                                    },
                                    ref: (0, s.Px)(S, n),
                                    children: ee ? e.children : null,
                                    id: $,
                                    tabIndex: -1,
                                    role: "dialog",
                                    onKeyDown: (0, d.Hj)(e.onKeyDown, e => {
                                        t && "Escape" === e.key && R()
                                    }),
                                    onBlur: (0, d.Hj)(e.onBlur, e => {
                                        let t = v(e),
                                            n = p(S.current, t),
                                            o = p(F.current, t);
                                        D && r && !n && !o && R()
                                    }),
                                    "aria-labelledby": O ? K : void 0,
                                    "aria-describedby": I ? U : void 0
                                };
                                return N === f.hover && (o.role = "tooltip", o.onMouseEnter = (0, d.Hj)(e.onMouseEnter, () => {
                                    M.current = !0
                                }), o.onMouseLeave = (0, d.Hj)(e.onMouseLeave, e => {
                                    null !== e.nativeEvent.relatedTarget && (M.current = !1, setTimeout(() => R(), k))
                                })), o
                            }, [ee, $, O, K, I, U, N, t, R, D, r, k, w, x]),
                            et = (0, m.useCallback)((e = {}, r = null) => J({ ...e,
                                style: {
                                    visibility: D ? "visible" : "hidden",
                                    ...e.style
                                }
                            }, r), [D, J]),
                            en = (0, m.useCallback)((e, r = null) => ({ ...e,
                                ref: (0, s.Px)(r, B, V)
                            }), [B, V]),
                            eo = (0, m.useRef)(),
                            ea = (0, m.useRef)(),
                            ei = (0, m.useCallback)(e => {
                                null == B.current && V(e)
                            }, [V]),
                            el = (0, m.useCallback)((e = {}, t = null) => {
                                let n = { ...e,
                                    ref: (0, s.Px)(F, t, ei),
                                    id: G,
                                    "aria-haspopup": "dialog",
                                    "aria-expanded": D,
                                    "aria-controls": $
                                };
                                return N === f.click && (n.onClick = (0, d.Hj)(e.onClick, P)), N === f.hover && (n.onFocus = (0, d.Hj)(e.onFocus, () => {
                                    void 0 === eo.current && A()
                                }), n.onBlur = (0, d.Hj)(e.onBlur, e => {
                                    let t = v(e),
                                        n = !p(S.current, t);
                                    D && r && n && R()
                                }), n.onKeyDown = (0, d.Hj)(e.onKeyDown, e => {
                                    "Escape" === e.key && R()
                                }), n.onMouseEnter = (0, d.Hj)(e.onMouseEnter, () => {
                                    M.current = !0, eo.current = window.setTimeout(() => A(), _)
                                }), n.onMouseLeave = (0, d.Hj)(e.onMouseLeave, () => {
                                    M.current = !1, eo.current && (clearTimeout(eo.current), eo.current = void 0), ea.current = window.setTimeout(() => {
                                        !1 === M.current && R()
                                    }, k)
                                })), n
                            }, [G, D, $, N, ei, P, A, r, R, _, k]);
                        (0, m.useEffect)(() => () => {
                            eo.current && clearTimeout(eo.current), ea.current && clearTimeout(ea.current)
                        }, []);
                        let eu = (0, m.useCallback)((e = {}, r = null) => ({ ...e,
                                id: K,
                                ref: (0, s.Px)(r, e => {
                                    H(!!e)
                                })
                            }), [K]),
                            es = (0, m.useCallback)((e = {}, r = null) => ({ ...e,
                                id: U,
                                ref: (0, s.Px)(r, e => {
                                    W(!!e)
                                })
                            }), [U]);
                        return {
                            forceUpdate: Y,
                            isOpen: D,
                            onAnimationComplete: Z.onComplete,
                            onClose: R,
                            getAnchorProps: en,
                            getArrowProps: X,
                            getArrowInnerProps: Q,
                            getPopoverPositionerProps: et,
                            getPopoverProps: er,
                            getTriggerProps: el,
                            getHeaderProps: eu,
                            getBodyProps: es
                        }
                    }({ ...w,
                        direction: N.direction
                    });
                return (0, x.jsx)(b.pb, {
                    value: _,
                    children: (0, x.jsx)(b.hA, {
                        value: r,
                        children: (0, d.Jg)(t, {
                            isOpen: _.isOpen,
                            onClose: _.onClose,
                            forceUpdate: _.forceUpdate
                        })
                    })
                })
            }
            w.displayName = "Popover"
        },
        26829: (e, r, t) => {
            t.d(r, {
                M6: () => l,
                az: () => i,
                jl: () => u
            });
            var n = t(54284),
                o = t(96116),
                a = t(23798),
                i = (0, n.B)("div");
            i.displayName = "Box";
            var l = (0, o.R)(function(e, r) {
                let {
                    size: t,
                    centerContent: n = !0,
                    ...o
                } = e;
                return (0, a.jsx)(i, {
                    ref: r,
                    boxSize: t,
                    __css: { ...n ? {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        } : {},
                        flexShrink: 0,
                        flexGrow: 0
                    },
                    ...o
                })
            });
            l.displayName = "Square";
            var u = (0, o.R)(function(e, r) {
                let {
                    size: t,
                    ...n
                } = e;
                return (0, a.jsx)(l, {
                    size: t,
                    ref: r,
                    borderRadius: "9999px",
                    ...n
                })
            });
            u.displayName = "Circle"
        },
        32452: (e, r, t) => {
            t.d(r, {
                S: () => o
            });
            var n = t(62561);

            function o(e) {
                let {
                    ref: r,
                    elements: t,
                    enabled: o
                } = e, a = () => {
                    var e, t;
                    return null != (t = null == (e = r.current) ? void 0 : e.ownerDocument) ? t : document
                };
                (0, n.M)(a, "pointerdown", e => {
                    let n, i;
                    if (i = /mac|iphone|ipad|ipod/i, !("undefined" != typeof window && i.test(function() {
                            var e;
                            let r = navigator.userAgentData;
                            return null != (e = null == r ? void 0 : r.platform) ? e : navigator.platform
                        }()) && (n = /apple/i, "undefined" != typeof window && n.test(navigator.vendor))) || !o) return;
                    let l = e.target,
                        u = (null != t ? t : [r]).some(e => {
                            let r = "current" in e ? e.current : e;
                            return (null == r ? void 0 : r.contains(l)) || r === l
                        });
                    a().activeElement !== l && u && (e.preventDefault(), l.focus())
                })
            }
        },
        40796: (e, r, t) => {
            t.d(r, {
                Bi: () => o
            });
            var n = t(21462);

            function o(e, r) {
                let t = (0, n.useId)();
                return (0, n.useMemo)(() => e || [r, t].filter(Boolean).join("-"), [e, r, t])
            }
        },
        41929: (e, r, t) => {
            t.d(r, {
                XU: () => m,
                Gr: () => f,
                zR: () => c
            });
            var n, o, a = t(82643),
                i = t(21462),
                l = t(57552);
            ! function(e) {
                e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
            }(n || (n = {})),
            function(e) {
                e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
            }(o || (o = {}));
            var u = function(e) {
                var r = (0, l.A)(),
                    t = e.value,
                    n = e.children,
                    o = (0, a.Tt)(e, ["value", "children"]);
                return n(r.formatNumberToParts(t, o))
            };

            function s(e) {
                var r = function(r) {
                    var t = (0, l.A)(),
                        n = r.value,
                        o = r.children,
                        i = (0, a.Tt)(r, ["value", "children"]),
                        u = "string" == typeof n ? new Date(n || 0) : n;
                    return o("formatDate" === e ? t.formatDateToParts(u, i) : t.formatTimeToParts(u, i))
                };
                return r.displayName = o[e], r
            }

            function d(e) {
                var r = function(r) {
                    var t = (0, l.A)(),
                        n = r.value,
                        o = r.children,
                        u = (0, a.Tt)(r, ["value", "children"]),
                        s = t[e](n, u);
                    if ("function" == typeof o) return o(s);
                    var d = t.textComponent || i.Fragment;
                    return i.createElement(d, null, s)
                };
                return r.displayName = n[e], r
            }

            function c(e) {
                return e
            }
            u.displayName = "FormattedNumberParts", u.displayName = "FormattedNumberParts";
            var m = d("formatDate");
            d("formatTime");
            var f = d("formatNumber");
            d("formatList"), d("formatDisplayName"), s("formatDate"), s("formatTime")
        },
        42469: (e, r, t) => {
            t.d(r, {
                W: () => a
            });
            var n = t(69384),
                o = t(21462);

            function a(e) {
                let r = o.Children.only(e.children),
                    {
                        getTriggerProps: t
                    } = (0, n.C_)();
                return (0, o.cloneElement)(r, t(r.props, r.ref))
            }
            a.displayName = "PopoverTrigger"
        },
        56545: (e, r, t) => {
            t.d(r, {
                T: () => i
            });
            var n = t(64724),
                o = t(96116),
                a = t(23798),
                i = (0, o.R)((e, r) => (0, a.jsx)(n.B, {
                    align: "center",
                    ...e,
                    direction: "column",
                    ref: r
                }));
            i.displayName = "VStack"
        },
        61586: (e, r, t) => {
            t.d(r, {
                q: () => n
            });

            function n(e) {
                let {
                    wasSelected: r,
                    enabled: t,
                    isSelected: n,
                    mode: o = "unmount"
                } = e;
                return !t || !!n || "keepMounted" === o && !!r
            }
        },
        61948: (e, r, t) => {
            t.d(r, {
                ep: () => o
            });
            var n = t(92413);

            function o(e) {
                let r = Array.from(e.querySelectorAll("input:not(:disabled):not([disabled]),select:not(:disabled):not([disabled]),textarea:not(:disabled):not([disabled]),embed,iframe,object,a[href],area[href],button:not(:disabled):not([disabled]),[tabindex],audio[controls],video[controls],*[tabindex]:not([aria-disabled]),*[contenteditable]"));
                return r.unshift(e), r.filter(e => (0, n.tp)(e) && e.offsetWidth > 0 && e.offsetHeight > 0)
            }
        },
        62336: (e, r, t) => {
            t.d(r, {
                a: () => o
            });
            var n = t(21462);

            function o(e) {
                return n.Children.toArray(e).filter(e => (0, n.isValidElement)(e))
            }
        },
        63223: (e, r, t) => {
            t.d(r, {
                x: () => i
            });
            var n = t(96116),
                o = t(54284),
                a = t(23798),
                i = (0, n.R)(function(e, r) {
                    let {
                        templateAreas: t,
                        gap: n,
                        rowGap: i,
                        columnGap: l,
                        column: u,
                        row: s,
                        autoFlow: d,
                        autoRows: c,
                        templateRows: m,
                        autoColumns: f,
                        templateColumns: p,
                        ...v
                    } = e;
                    return (0, a.jsx)(o.B.div, {
                        ref: r,
                        __css: {
                            display: "grid",
                            gridTemplateAreas: t,
                            gridGap: n,
                            gridRowGap: i,
                            gridColumnGap: l,
                            gridAutoColumns: f,
                            gridColumn: u,
                            gridRow: s,
                            gridAutoFlow: d,
                            gridAutoRows: c,
                            gridTemplateRows: m,
                            gridTemplateColumns: p
                        },
                        ...v
                    })
                });
            i.displayName = "Grid"
        },
        64724: (e, r, t) => {
            t.d(r, {
                B: () => c
            });
            var n = t(54284),
                o = t(23798),
                a = e => (0, o.jsx)(n.B.div, {
                    className: "chakra-stack__item",
                    ...e,
                    __css: {
                        display: "inline-block",
                        flex: "0 0 auto",
                        minWidth: 0,
                        ...e.__css
                    }
                });
            a.displayName = "StackItem";
            var i = t(23031),
                l = t(62336),
                u = t(66196),
                s = t(96116),
                d = t(21462),
                c = (0, s.R)((e, r) => {
                    let {
                        isInline: t,
                        direction: s,
                        align: c,
                        justify: m,
                        spacing: f = "0.5rem",
                        wrap: p,
                        children: v,
                        divider: b,
                        className: h,
                        shouldWrapChildren: y,
                        ...g
                    } = e, x = t ? "row" : null != s ? s : "column", w = (0, d.useMemo)(() => (function(e) {
                        let {
                            spacing: r,
                            direction: t
                        } = e, n = {
                            column: {
                                my: r,
                                mx: 0,
                                borderLeftWidth: 0,
                                borderBottomWidth: "1px"
                            },
                            "column-reverse": {
                                my: r,
                                mx: 0,
                                borderLeftWidth: 0,
                                borderBottomWidth: "1px"
                            },
                            row: {
                                mx: r,
                                my: 0,
                                borderLeftWidth: "1px",
                                borderBottomWidth: 0
                            },
                            "row-reverse": {
                                mx: r,
                                my: 0,
                                borderLeftWidth: "1px",
                                borderBottomWidth: 0
                            }
                        };
                        return {
                            "&": (0, i.bk)(t, e => n[e])
                        }
                    })({
                        spacing: f,
                        direction: x
                    }), [f, x]), N = !!b, _ = !y && !N, k = (0, d.useMemo)(() => {
                        let e = (0, l.a)(v);
                        return _ ? e : e.map((r, t) => {
                            let n = void 0 !== r.key ? r.key : t,
                                i = t + 1 === e.length,
                                l = (0, o.jsx)(a, {
                                    children: r
                                }, n),
                                u = y ? l : r;
                            if (!N) return u;
                            let s = (0, d.cloneElement)(b, {
                                __css: w
                            });
                            return (0, o.jsxs)(d.Fragment, {
                                children: [u, i ? null : s]
                            }, n)
                        })
                    }, [b, w, N, _, y, v]), j = (0, u.cx)("chakra-stack", h);
                    return (0, o.jsx)(n.B.div, {
                        ref: r,
                        display: "flex",
                        alignItems: c,
                        justifyContent: m,
                        flexDirection: x,
                        flexWrap: p,
                        gap: N ? void 0 : f,
                        className: j,
                        ...g,
                        children: k
                    })
                });
            c.displayName = "Stack"
        },
        69384: (e, r, t) => {
            t.d(r, {
                C_: () => a,
                hA: () => i,
                jm: () => l,
                pb: () => o
            });
            var n = t(92463),
                [o, a] = (0, n.q)({
                    name: "PopoverContext",
                    errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
                }),
                [i, l] = (0, n.q)({
                    name: "PopoverStylesContext",
                    errorMessage: "usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Popover />\" "
                })
        },
        92413: (e, r, t) => {
            t.d(r, {
                AO: () => i,
                tp: () => a
            });
            var n = t(12189),
                o = e => e.hasAttribute("tabindex");

            function a(e) {
                var r;
                if (!(0, n.sb)(e) || function e(r) {
                        return !!(r.parentElement && e(r.parentElement)) || r.hidden
                    }(e) || !0 == !!(r = e).getAttribute("disabled") || !0 == !!r.getAttribute("aria-disabled")) return !1;
                let {
                    localName: t
                } = e;
                if (["input", "select", "textarea", "button"].indexOf(t) >= 0) return !0;
                let a = {
                    a: () => e.hasAttribute("href"),
                    audio: () => e.hasAttribute("controls"),
                    video: () => e.hasAttribute("controls")
                };
                return t in a ? a[t]() : !! function(e) {
                    let r = e.getAttribute("contenteditable");
                    return "false" !== r && null != r
                }(e) || o(e)
            }

            function i(e) {
                return !!e && (0, n.sb)(e) && a(e) && !(o(e) && -1 === e.tabIndex)
            }
        },
        93761: (e, r, t) => {
            t.d(r, {
                e: () => u
            });
            var n = t(69384),
                o = t(96116),
                a = t(54284),
                i = t(66196),
                l = t(23798),
                u = (0, o.R)(function(e, r) {
                    let {
                        getBodyProps: t
                    } = (0, n.C_)(), o = (0, n.jm)();
                    return (0, l.jsx)(a.B.div, { ...t(e, r),
                        className: (0, i.cx)("chakra-popover__body", e.className),
                        __css: o.body
                    })
                });
            u.displayName = "PopoverBody"
        },
        97665: (e, r, t) => {
            t.d(r, {
                X: () => d,
                w: () => m
            });
            var n = t(12189),
                o = t(92413),
                a = t(61948),
                i = t(62561),
                l = t(41701),
                u = t(49347),
                s = t(21462);

            function d(e, r) {
                let {
                    shouldFocus: t,
                    visible: a,
                    focusRef: i
                } = r, l = t && !a;
                (0, u.w)(() => {
                    let r;
                    if (!l || function(e) {
                            let r = e.current;
                            if (!r) return !1;
                            let t = (0, n.bq)(r);
                            return !(!t || r.contains(t)) && !!(0, o.AO)(t)
                        }(e)) return;
                    let t = (null == i ? void 0 : i.current) || e.current;
                    if (t) return r = requestAnimationFrame(() => {
                        t.focus({
                            preventScroll: !0
                        })
                    }), () => {
                        cancelAnimationFrame(r)
                    }
                }, [l, e, i])
            }
            var c = {
                preventScroll: !0,
                shouldFocus: !1
            };

            function m(e, r = c) {
                let {
                    focusRef: t,
                    preventScroll: n,
                    shouldFocus: o,
                    visible: d
                } = r, f = "current" in e ? e.current : e, p = o && d, v = (0, s.useRef)(p), b = (0, s.useRef)(d);
                (0, l.U)(() => {
                    !b.current && d && (v.current = p), b.current = d
                }, [d, p]);
                let h = (0, s.useCallback)(() => {
                    if (d && f && v.current && (v.current = !1, !f.contains(document.activeElement)))
                        if (null == t ? void 0 : t.current) requestAnimationFrame(() => {
                            var e;
                            null == (e = t.current) || e.focus({
                                preventScroll: n
                            })
                        });
                        else {
                            let e = (0, a.ep)(f);
                            e.length > 0 && requestAnimationFrame(() => {
                                e[0].focus({
                                    preventScroll: n
                                })
                            })
                        }
                }, [d, n, f, t]);
                (0, u.w)(() => {
                    h()
                }, [h]), (0, i.M)(f, "transitionend", h)
            }
        }
    }
]);