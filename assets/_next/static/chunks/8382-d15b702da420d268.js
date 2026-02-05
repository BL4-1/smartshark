try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "22ee016f-ade0-4e26-a7fd-35018ba64222", e._sentryDebugIdIdentifier = "sentry-dbid-22ee016f-ade0-4e26-a7fd-35018ba64222")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8382], {
        220: (e, n, t) => {
            t.d(n, {
                aF: () => k,
                k3: () => x,
                x5: () => w
            });
            var r = t(52412),
                o = t(66196),
                a = t(67665),
                u = new WeakMap,
                i = new WeakMap,
                c = {},
                l = 0,
                d = function(e) {
                    return e && (e.host || d(e.parentNode))
                },
                s = function(e, n, t, r) {
                    var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (n.contains(e)) return e;
                        var t = d(e);
                        return t && n.contains(t) ? t : (console.error("aria-hidden", e, "in not contained inside", n, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    c[t] || (c[t] = new WeakMap);
                    var a = c[t],
                        s = [],
                        f = new Set,
                        v = new Set(o),
                        m = function(e) {
                            !e || f.has(e) || (f.add(e), m(e.parentNode))
                        };
                    o.forEach(m);
                    var p = function(e) {
                        !e || v.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (f.has(e)) p(e);
                            else try {
                                var n = e.getAttribute(r),
                                    o = null !== n && "false" !== n,
                                    c = (u.get(e) || 0) + 1,
                                    l = (a.get(e) || 0) + 1;
                                u.set(e, c), a.set(e, l), s.push(e), 1 === c && o && i.set(e, !0), 1 === l && e.setAttribute(t, "true"), o || e.setAttribute(r, "true")
                            } catch (n) {
                                console.error("aria-hidden: cannot operate on ", e, n)
                            }
                        })
                    };
                    return p(n), f.clear(), l++,
                        function() {
                            s.forEach(function(e) {
                                var n = u.get(e) - 1,
                                    o = a.get(e) - 1;
                                u.set(e, n), a.set(e, o), n || (i.has(e) || e.removeAttribute(r), i.delete(e)), o || e.removeAttribute(t)
                            }), --l || (u = new WeakMap, u = new WeakMap, i = new WeakMap, c = {})
                        }
                },
                f = function(e, n, t) {
                    void 0 === t && (t = "data-aria-hidden");
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        o = n || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), s(r, o, t, "aria-hidden")) : function() {
                        return null
                    }
                },
                v = t(21462),
                m = t(23651),
                p = t(92463),
                h = t(67267),
                b = t(4373),
                g = t(23798),
                [y, w] = (0, p.q)({
                    name: "ModalStylesContext",
                    errorMessage: "useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Modal />\" "
                }),
                [E, x] = (0, p.q)({
                    strict: !0,
                    name: "ModalContext",
                    errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
                }),
                k = e => {
                    let n = {
                            scrollBehavior: "outside",
                            autoFocus: !0,
                            trapFocus: !0,
                            returnFocusOnClose: !0,
                            blockScrollOnMount: !0,
                            allowPinchZoom: !1,
                            motionPreset: "scale",
                            lockFocusAcrossFrames: !0,
                            ...e
                        },
                        {
                            portalProps: t,
                            children: u,
                            autoFocus: i,
                            trapFocus: c,
                            initialFocusRef: l,
                            finalFocusRef: d,
                            returnFocusOnClose: s,
                            blockScrollOnMount: p,
                            allowPinchZoom: w,
                            preserveScrollBarGap: x,
                            motionPreset: k,
                            lockFocusAcrossFrames: C,
                            onCloseComplete: M
                        } = n,
                        S = (0, h.o5)("Modal", n),
                        N = { ... function(e) {
                                let {
                                    isOpen: n,
                                    onClose: t,
                                    id: u,
                                    closeOnOverlayClick: i = !0,
                                    closeOnEsc: c = !0,
                                    useInert: l = !0,
                                    onOverlayClick: d,
                                    onEsc: s
                                } = e, m = (0, v.useRef)(null), p = (0, v.useRef)(null), [h, b, g] = function(e, ...n) {
                                    let t = (0, v.useId)(),
                                        r = e || t;
                                    return (0, v.useMemo)(() => n.map(e => `${e}-${r}`), [r, n])
                                }(u, "chakra-modal", "chakra-modal--header", "chakra-modal--body");
                                var y = m,
                                    w = n && l;
                                let E = y.current;
                                (0, v.useEffect)(() => {
                                    if (y.current && w) return f(y.current)
                                }, [w, y, E]);
                                let x = (0, r.y)(m, n),
                                    k = (0, v.useRef)(null),
                                    C = (0, v.useCallback)(e => {
                                        k.current = e.target
                                    }, []),
                                    M = (0, v.useCallback)(e => {
                                        "Escape" === e.key && (e.stopPropagation(), c && (null == t || t()), null == s || s())
                                    }, [c, t, s]),
                                    [S, N] = (0, v.useState)(!1),
                                    [O, T] = (0, v.useState)(!1),
                                    A = (0, v.useCallback)((e = {}, n = null) => ({
                                        role: "dialog",
                                        ...e,
                                        ref: (0, a.Px)(n, m),
                                        id: h,
                                        tabIndex: -1,
                                        "aria-modal": !0,
                                        "aria-labelledby": S ? b : void 0,
                                        "aria-describedby": O ? g : void 0,
                                        onClick: (0, o.Hj)(e.onClick, e => e.stopPropagation())
                                    }), [g, O, h, b, S]),
                                    P = (0, v.useCallback)(e => {
                                        e.stopPropagation(), k.current === e.target && r.J.isTopModal(m.current) && (i && (null == t || t()), null == d || d())
                                    }, [t, i, d]),
                                    I = (0, v.useCallback)((e = {}, n = null) => ({ ...e,
                                        ref: (0, a.Px)(n, p),
                                        onClick: (0, o.Hj)(e.onClick, P),
                                        onKeyDown: (0, o.Hj)(e.onKeyDown, M),
                                        onMouseDown: (0, o.Hj)(e.onMouseDown, C)
                                    }), [M, C, P]);
                                return {
                                    isOpen: n,
                                    onClose: t,
                                    headerId: b,
                                    bodyId: g,
                                    setBodyMounted: T,
                                    setHeaderMounted: N,
                                    dialogRef: m,
                                    overlayRef: p,
                                    getDialogProps: A,
                                    getDialogContainerProps: I,
                                    index: x
                                }
                            }(n),
                            autoFocus: i,
                            trapFocus: c,
                            initialFocusRef: l,
                            finalFocusRef: d,
                            returnFocusOnClose: s,
                            blockScrollOnMount: p,
                            allowPinchZoom: w,
                            preserveScrollBarGap: x,
                            motionPreset: k,
                            lockFocusAcrossFrames: C
                        };
                    return (0, g.jsx)(E, {
                        value: N,
                        children: (0, g.jsx)(y, {
                            value: S,
                            children: (0, g.jsx)(b.N, {
                                onExitComplete: M,
                                children: N.isOpen && (0, g.jsx)(m.Z, { ...t,
                                    children: u
                                })
                            })
                        })
                    })
                };
            k.displayName = "Modal"
        },
        45838: (e, n, t) => {
            t.d(n, {
                m: () => s
            });
            var r = t(220),
                o = t(66196),
                a = t(54284),
                u = t(96116),
                i = t(83770),
                c = t(16562),
                l = t(23798),
                d = (0, a.B)(c.P.div),
                s = (0, u.R)((e, n) => {
                    let {
                        className: t,
                        transition: a,
                        motionProps: u,
                        ...c
                    } = e, s = (0, o.cx)("chakra-modal__overlay", t), f = {
                        pos: "fixed",
                        left: "0",
                        top: "0",
                        w: "100vw",
                        h: "100vh",
                        ...(0, r.x5)().overlay
                    }, {
                        motionPreset: v
                    } = (0, r.k3)(), m = "none" === v ? {} : i.l;
                    return (0, l.jsx)(d, { ...u || m,
                        __css: f,
                        ref: n,
                        className: s,
                        ...c
                    })
                });
            s.displayName = "ModalOverlay"
        },
        47966: (e, n, t) => {
            t.d(n, {
                c: () => l
            });
            var r = t(220),
                o = t(66196),
                a = t(96116),
                u = t(54284),
                i = t(21462),
                c = t(23798),
                l = (0, a.R)((e, n) => {
                    let {
                        className: t,
                        ...a
                    } = e, {
                        bodyId: l,
                        setBodyMounted: d
                    } = (0, r.k3)();
                    (0, i.useEffect)(() => (d(!0), () => d(!1)), [d]);
                    let s = (0, o.cx)("chakra-modal__body", t),
                        f = (0, r.x5)();
                    return (0, c.jsx)(u.B.div, {
                        ref: n,
                        className: s,
                        id: l,
                        ...a,
                        __css: f.body
                    })
                });
            l.displayName = "ModalBody"
        },
        52412: (e, n, t) => {
            t.d(n, {
                J: () => a,
                y: () => u
            });
            var r = Object.defineProperty,
                o = t(21462),
                a = new class {
                    constructor() {
                        ((e, n, t) => ((e, n, t) => n in e ? r(e, n, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        }) : e[n] = t)(e, "symbol" != typeof n ? n + "" : n, t))(this, "modals"), this.modals = new Map
                    }
                    add(e) {
                        return this.modals.set(e, this.modals.size + 1), this.modals.size
                    }
                    remove(e) {
                        this.modals.delete(e)
                    }
                    isTopModal(e) {
                        return !!e && this.modals.get(e) === this.modals.size
                    }
                };

            function u(e, n) {
                let [t, r] = (0, o.useState)(0);
                return (0, o.useEffect)(() => {
                    let t = e.current;
                    if (t) return n && r(a.add(t)), () => {
                        a.remove(t), r(0)
                    }
                }, [n, e]), t
            }
        },
        76142: (e, n, t) => {
            t.d(n, {
                u: () => nP
            });
            var r, o, a, u, i, c = t(220),
                l = t(52412),
                d = t(10071),
                s = t(21462),
                f = "data-focus-lock",
                v = "data-focus-lock-disabled";

            function m(e, n) {
                return "function" == typeof e ? e(n) : e && (e.current = n), e
            }
            var p = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect,
                h = new WeakMap;

            function b(e, n) {
                var t, r, o, a = (t = n || null, r = function(n) {
                    return e.forEach(function(e) {
                        return m(e, n)
                    })
                }, (o = (0, s.useState)(function() {
                    return {
                        value: t,
                        callback: r,
                        facade: {
                            get current() {
                                return o.value
                            },
                            set current(value) {
                                var e = o.value;
                                e !== value && (o.value = value, o.callback(value, e))
                            }
                        }
                    }
                })[0]).callback = r, o.facade);
                return p(function() {
                    var n = h.get(a);
                    if (n) {
                        var t = new Set(n),
                            r = new Set(e),
                            o = a.current;
                        t.forEach(function(e) {
                            r.has(e) || m(e, null)
                        }), r.forEach(function(e) {
                            t.has(e) || m(e, o)
                        })
                    }
                    h.set(a, e)
                }, [e]), a
            }
            var g = {
                    width: "1px",
                    height: "0px",
                    padding: 0,
                    overflow: "hidden",
                    position: "fixed",
                    top: "1px",
                    left: "1px"
                },
                y = t(82643);

            function w(e) {
                return e
            }

            function E(e, n) {
                void 0 === n && (n = w);
                var t = [],
                    r = !1;
                return {
                    read: function() {
                        if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return t.length ? t[t.length - 1] : e
                    },
                    useMedium: function(e) {
                        var o = n(e, r);
                        return t.push(o),
                            function() {
                                t = t.filter(function(e) {
                                    return e !== o
                                })
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (r = !0; t.length;) {
                            var n = t;
                            t = [], n.forEach(e)
                        }
                        t = {
                            push: function(n) {
                                return e(n)
                            },
                            filter: function() {
                                return t
                            }
                        }
                    },
                    assignMedium: function(e) {
                        r = !0;
                        var n = [];
                        if (t.length) {
                            var o = t;
                            t = [], o.forEach(e), n = t
                        }
                        var a = function() {
                                var t = n;
                                n = [], t.forEach(e)
                            },
                            u = function() {
                                return Promise.resolve().then(a)
                            };
                        u(), t = {
                            push: function(e) {
                                n.push(e), u()
                            },
                            filter: function(e) {
                                return n = n.filter(e), t
                            }
                        }
                    }
                }
            }

            function x(e, n) {
                return void 0 === n && (n = w), E(e, n)
            }

            function k(e) {
                void 0 === e && (e = {});
                var n = E(null);
                return n.options = (0, y.Cl)({
                    async: !0,
                    ssr: !1
                }, e), n
            }
            var C = x({}, function(e) {
                    return {
                        target: e.target,
                        currentTarget: e.currentTarget
                    }
                }),
                M = x(),
                S = x(),
                N = k({
                    async: !0,
                    ssr: "undefined" != typeof document
                }),
                O = (0, s.createContext)(void 0),
                T = [],
                A = s.forwardRef(function(e, n) {
                    var t, r = s.useState(),
                        o = r[0],
                        a = r[1],
                        u = s.useRef(),
                        i = s.useRef(!1),
                        c = s.useRef(null),
                        l = s.useState({})[1],
                        m = e.children,
                        p = e.disabled,
                        h = void 0 !== p && p,
                        y = e.noFocusGuards,
                        w = void 0 !== y && y,
                        E = e.persistentFocus,
                        x = e.crossFrame,
                        k = e.autoFocus,
                        S = (e.allowTextSelection, e.group),
                        A = e.className,
                        P = e.whiteList,
                        I = e.hasPositiveIndices,
                        R = e.shards,
                        F = void 0 === R ? T : R,
                        D = e.as,
                        L = e.lockProps,
                        _ = e.sideCar,
                        j = e.returnFocus,
                        W = void 0 !== j && j,
                        B = e.focusOptions,
                        q = e.onActivation,
                        H = e.onDeactivation,
                        U = s.useState({})[0],
                        X = s.useCallback(function(e) {
                            var n = e.captureFocusRestore;
                            if (!c.current) {
                                var t, r = null == (t = document) ? void 0 : t.activeElement;
                                c.current = r, r !== document.body && (c.current = n(r))
                            }
                            u.current && q && q(u.current), i.current = !0, l()
                        }, [q]),
                        Y = s.useCallback(function() {
                            i.current = !1, H && H(u.current), l()
                        }, [H]),
                        G = s.useCallback(function(e) {
                            var n = c.current;
                            if (n) {
                                var t = ("function" == typeof n ? n() : n) || document.body,
                                    r = "function" == typeof W ? W(t) : W;
                                if (r) {
                                    var o = "object" == typeof r ? r : void 0;
                                    c.current = null, e ? Promise.resolve().then(function() {
                                        return t.focus(o)
                                    }) : t.focus(o)
                                }
                            }
                        }, [W]),
                        Z = s.useCallback(function(e) {
                            i.current && C.useMedium(e)
                        }, []),
                        z = M.useMedium,
                        K = s.useCallback(function(e) {
                            u.current !== e && (u.current = e, a(e))
                        }, []),
                        V = (0, d.A)(((t = {})[v] = h && "disabled", t[f] = S, t), void 0 === L ? {} : L),
                        J = !0 !== w,
                        $ = J && "tail" !== w,
                        Q = b([n, K]),
                        ee = s.useMemo(function() {
                            return {
                                observed: u,
                                shards: F,
                                enabled: !h,
                                active: i.current
                            }
                        }, [h, i.current, F, o]);
                    return s.createElement(s.Fragment, null, J && [s.createElement("div", {
                        key: "guard-first",
                        "data-focus-guard": !0,
                        tabIndex: h ? -1 : 0,
                        style: g
                    }), I ? s.createElement("div", {
                        key: "guard-nearest",
                        "data-focus-guard": !0,
                        tabIndex: h ? -1 : 1,
                        style: g
                    }) : null], !h && s.createElement(_, {
                        id: U,
                        sideCar: N,
                        observed: o,
                        disabled: h,
                        persistentFocus: void 0 !== E && E,
                        crossFrame: void 0 === x || x,
                        autoFocus: void 0 === k || k,
                        whiteList: P,
                        shards: F,
                        onActivation: X,
                        onDeactivation: Y,
                        returnFocus: G,
                        focusOptions: B
                    }), s.createElement(void 0 === D ? "div" : D, (0, d.A)({
                        ref: Q
                    }, V, {
                        className: A,
                        onBlur: z,
                        onFocus: Z
                    }), s.createElement(O.Provider, {
                        value: ee
                    }, m)), $ && s.createElement("div", {
                        "data-focus-guard": !0,
                        tabIndex: h ? -1 : 0,
                        style: g
                    }))
                });

            function P(e, n) {
                return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
                    return e.__proto__ = n, e
                })(e, n)
            }

            function I(e) {
                return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            A.propTypes = {};
            var R = function(e) {
                    for (var n = Array(e.length), t = 0; t < e.length; ++t) n[t] = e[t];
                    return n
                },
                F = function(e) {
                    return Array.isArray(e) ? e : [e]
                },
                D = function(e) {
                    return Array.isArray(e) ? e[0] : e
                },
                L = function(e) {
                    if (e.nodeType !== Node.ELEMENT_NODE) return !1;
                    var n = window.getComputedStyle(e, null);
                    return !!n && !!n.getPropertyValue && ("none" === n.getPropertyValue("display") || "hidden" === n.getPropertyValue("visibility"))
                },
                _ = function(e) {
                    return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
                },
                j = function(e) {
                    return e === document || e && e.nodeType === Node.DOCUMENT_NODE
                },
                W = function(e, n) {
                    var t, r, o = e.get(n);
                    if (void 0 !== o) return o;
                    var a = (t = n, r = W.bind(void 0, e), !t || j(t) || !L(t) && !t.hasAttribute("inert") && r(_(t)));
                    return e.set(n, a), a
                },
                B = function(e, n) {
                    var t, r = e.get(n);
                    if (void 0 !== r) return r;
                    var o = (t = B.bind(void 0, e), !n || !!j(n) || !!X(n) && t(_(n)));
                    return e.set(n, o), o
                },
                q = function(e) {
                    return e.dataset
                },
                H = function(e) {
                    return "INPUT" === e.tagName
                },
                U = function(e) {
                    return H(e) && "radio" === e.type
                },
                X = function(e) {
                    return ![!0, "true", ""].includes(e.getAttribute("data-no-autofocus"))
                },
                Y = function(e) {
                    var n;
                    return !!(e && (null == (n = q(e)) ? void 0 : n.focusGuard))
                },
                G = function(e) {
                    return !Y(e)
                },
                Z = function(e) {
                    return !!e
                },
                z = function(e, n) {
                    var t = Math.max(0, e.tabIndex),
                        r = Math.max(0, n.tabIndex),
                        o = t - r,
                        a = e.index - n.index;
                    if (o) {
                        if (!t) return 1;
                        if (!r) return -1
                    }
                    return o || a
                },
                K = function(e, n, t) {
                    return R(e).map(function(e, n) {
                        var r = e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
                        return {
                            node: e,
                            index: n,
                            tabIndex: t && -1 === r ? (e.dataset || {}).focusGuard ? 0 : -1 : r
                        }
                    }).filter(function(e) {
                        return !n || e.tabIndex >= 0
                    }).sort(z)
                },
                V = "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",
                J = "".concat(V, ", [data-focus-guard]"),
                $ = function(e, n) {
                    return R((e.shadowRoot || e).children).reduce(function(e, t) {
                        return e.concat(t.matches(n ? J : V) ? [t] : [], $(t))
                    }, [])
                },
                Q = function(e, n) {
                    var t;
                    return e instanceof HTMLIFrameElement && (null == (t = e.contentDocument) ? void 0 : t.body) ? ee([e.contentDocument.body], n) : [e]
                },
                ee = function(e, n) {
                    return e.reduce(function(e, t) {
                        var r, o = $(t, n),
                            a = (r = []).concat.apply(r, o.map(function(e) {
                                return Q(e, n)
                            }));
                        return e.concat(a, t.parentNode ? R(t.parentNode.querySelectorAll(V)).filter(function(e) {
                            return e === t
                        }) : [])
                    }, [])
                },
                en = function(e, n) {
                    return R(e).filter(function(e) {
                        return W(n, e)
                    }).filter(function(e) {
                        var n;
                        return !((H(n = e) || "BUTTON" === n.tagName) && ("hidden" === n.type || n.disabled))
                    })
                },
                et = function(e, n) {
                    return void 0 === n && (n = new Map), R(e).filter(function(e) {
                        return B(n, e)
                    })
                },
                er = function(e, n, t) {
                    return K(en(ee(e, t), n), !0, t)
                },
                eo = function(e, n) {
                    return K(en(ee(e), n), !1)
                },
                ea = function(e, n) {
                    return e.shadowRoot ? ea(e.shadowRoot, n) : !!(void 0 !== Object.getPrototypeOf(e).contains && Object.getPrototypeOf(e).contains.call(e, n)) || R(e.children).some(function(e) {
                        var t;
                        if (e instanceof HTMLIFrameElement) {
                            var r = null == (t = e.contentDocument) ? void 0 : t.body;
                            return !!r && ea(r, n)
                        }
                        return ea(e, n)
                    })
                },
                eu = function(e) {
                    try {
                        return e()
                    } catch (e) {
                        return
                    }
                },
                ei = function(e) {
                    if (void 0 === e && (e = document), e && e.activeElement) {
                        var n = e.activeElement;
                        return n.shadowRoot ? ei(n.shadowRoot) : n instanceof HTMLIFrameElement && eu(function() {
                            return n.contentWindow.document
                        }) ? ei(n.contentWindow.document) : n
                    }
                },
                ec = function(e) {
                    void 0 === e && (e = document);
                    var n = ei(e);
                    return !!n && R(e.querySelectorAll("[".concat("data-no-focus-lock", "]"))).some(function(e) {
                        return ea(e, n)
                    })
                },
                el = function(e) {
                    for (var n = new Set, t = e.length, r = 0; r < t; r += 1)
                        for (var o = r + 1; o < t; o += 1) {
                            var a = e[r].compareDocumentPosition(e[o]);
                            (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && n.add(o), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && n.add(r)
                        }
                    return e.filter(function(e, t) {
                        return !n.has(t)
                    })
                },
                ed = function(e) {
                    return e.parentNode ? ed(e.parentNode) : e
                },
                es = function(e) {
                    return F(e).filter(Boolean).reduce(function(e, n) {
                        var t = n.getAttribute(f);
                        return e.push.apply(e, t ? el(R(ed(n).querySelectorAll("[".concat(f, '="').concat(t, '"]:not([').concat(v, '="disabled"])')))) : [n]), e
                    }, [])
                },
                ef = function(e, n) {
                    return void 0 === n && (n = ei(D(e).ownerDocument)), !!n && (!n.dataset || !n.dataset.focusGuard) && es(e).some(function(e) {
                        var t;
                        return ea(e, n) || (t = n, !!R(e.querySelectorAll("iframe")).some(function(e) {
                            return e === t
                        }))
                    })
                },
                ev = function(e, n) {
                    e && ("focus" in e && e.focus(n), "contentWindow" in e && e.contentWindow && e.contentWindow.focus())
                },
                em = function(e, n) {
                    if (U(e) && e.name) return n.filter(U).filter(function(n) {
                        return n.name === e.name
                    }).filter(function(e) {
                        return e.checked
                    })[0] || e;
                    return e
                },
                ep = function(e) {
                    var n = new Set;
                    return e.forEach(function(t) {
                        return n.add(em(t, e))
                    }), e.filter(function(e) {
                        return n.has(e)
                    })
                },
                eh = function(e) {
                    return e[0] && e.length > 1 ? em(e[0], e) : e[0]
                },
                eb = function(e, n) {
                    return e.indexOf(em(n, e))
                },
                eg = "NEW_FOCUS",
                ey = function(e, n, t, r, o) {
                    var a = e.length,
                        u = e[0],
                        i = e[a - 1],
                        c = Y(r);
                    if (!(r && e.indexOf(r) >= 0)) {
                        var l = void 0 !== r ? t.indexOf(r) : -1,
                            d = o ? t.indexOf(o) : l,
                            s = o ? e.indexOf(o) : -1;
                        if (-1 === l) return -1 !== s ? s : eg;
                        if (-1 === s) return eg;
                        var f = l - d,
                            v = t.indexOf(u),
                            m = t.indexOf(i),
                            p = ep(t),
                            h = (void 0 !== r ? p.indexOf(r) : -1) - (o ? p.indexOf(o) : l);
                        if (!f && s >= 0 || 0 === n.length) return s;
                        var b = eb(e, n[0]),
                            g = eb(e, n[n.length - 1]);
                        if (l <= v && c && Math.abs(f) > 1) return g;
                        if (l >= m && c && Math.abs(f) > 1) return b;
                        if (f && Math.abs(h) > 1) return s;
                        if (l <= v) return g;
                        if (l > m) return b;
                        if (f) return Math.abs(f) > 1 ? s : (a + s + f) % a
                    }
                },
                ew = function(e, n, t) {
                    var r = et(e.map(function(e) {
                        return e.node
                    }).filter(function(e) {
                        var n, r = null == (n = q(e)) ? void 0 : n.autofocus;
                        return e.autofocus || void 0 !== r && "false" !== r || t.indexOf(e) >= 0
                    }));
                    return r && r.length ? eh(r) : eh(et(n))
                },
                eE = function(e, n) {
                    return void 0 === n && (n = []), n.push(e), e.parentNode && eE(e.parentNode.host || e.parentNode, n), n
                },
                ex = function(e, n) {
                    for (var t = eE(e), r = eE(n), o = 0; o < t.length; o += 1) {
                        var a = t[o];
                        if (r.indexOf(a) >= 0) return a
                    }
                    return !1
                },
                ek = function(e, n, t) {
                    var r = F(e),
                        o = F(n),
                        a = r[0],
                        u = !1;
                    return o.filter(Boolean).forEach(function(e) {
                        u = ex(u || e, e) || u, t.filter(Boolean).forEach(function(e) {
                            var n = ex(a, e);
                            n && (u = !u || ea(n, u) ? n : ex(n, u))
                        })
                    }), u
                },
                eC = function(e, n) {
                    return e.reduce(function(e, t) {
                        var r, o;
                        return e.concat((r = t, o = n, en(R(r.querySelectorAll("[".concat("data-autofocus-inside", "]"))).map(function(e) {
                            return ee([e])
                        }).reduce(function(e, n) {
                            return e.concat(n)
                        }, []), o)))
                    }, [])
                },
                eM = function(e, n) {
                    var t = new Map;
                    return n.forEach(function(e) {
                        return t.set(e.node, e)
                    }), e.map(function(e) {
                        return t.get(e)
                    }).filter(Z)
                },
                eS = function(e, n) {
                    var t = ei(F(e).length > 0 ? document : D(e).ownerDocument),
                        r = es(e).filter(G),
                        o = ek(t || e, e, r),
                        a = new Map,
                        u = eo(r, a),
                        i = u.filter(function(e) {
                            return G(e.node)
                        });
                    if (i[0]) {
                        var c = eo([o], a).map(function(e) {
                                return e.node
                            }),
                            l = eM(c, i),
                            d = l.map(function(e) {
                                return e.node
                            }),
                            s = l.filter(function(e) {
                                return e.tabIndex >= 0
                            }).map(function(e) {
                                return e.node
                            }),
                            f = ey(d, s, c, t, n);
                        if (f === eg) {
                            var v = ew(u, s, eC(r, a)) || ew(u, d, eC(r, a));
                            return v ? {
                                node: v
                            } : void console.warn("focus-lock: cannot find any node to move focus into")
                        }
                        return void 0 === f ? f : l[f]
                    }
                },
                eN = 0,
                eO = !1,
                eT = function(e, n, t) {
                    void 0 === t && (t = {});
                    var r = eS(e, n);
                    if (!eO && r) {
                        if (eN > 2) {
                            console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), eO = !0, setTimeout(function() {
                                eO = !1
                            }, 1);
                            return
                        }
                        eN++, ev(r.node, t.focusOptions), eN--
                    }
                },
                eA = function(e) {
                    var n = es(e).filter(G),
                        t = K(ee([ek(e, e, n)], !0), !0, !0),
                        r = ee(n, !1);
                    return t.map(function(e) {
                        var n = e.node;
                        return {
                            node: n,
                            index: e.index,
                            lockItem: r.indexOf(n) >= 0,
                            guard: Y(n)
                        }
                    })
                },
                eP = function(e, n, t) {
                    if (!e || !n) return console.error("no element or scope given"), {};
                    var r = F(n);
                    if (r.every(function(n) {
                            return !ea(n, e)
                        })) return console.error("Active element is not contained in the scope"), {};
                    var o = t ? er(r, new Map) : eo(r, new Map),
                        a = o.findIndex(function(n) {
                            return n.node === e
                        });
                    if (-1 !== a) return {
                        prev: o[a - 1],
                        next: o[a + 1],
                        first: o[0],
                        last: o[o.length - 1]
                    }
                },
                eI = function(e, n) {
                    var t = n ? er(F(e), new Map) : eo(F(e), new Map);
                    return {
                        first: t[0],
                        last: t[t.length - 1]
                    }
                },
                eR = function(e, n, t) {
                    void 0 === n && (n = {});
                    var r, o = (r = n, Object.assign({
                            scope: document.body,
                            cycle: !0,
                            onlyTabbable: !0
                        }, r)),
                        a = eP(e, o.scope, o.onlyTabbable);
                    if (a) {
                        var u = t(a, o.cycle);
                        u && ev(u.node, o.focusOptions)
                    }
                },
                eF = function(e, n, t) {
                    var r, o = eI(e, null == (r = n.onlyTabbable) || r)[t];
                    o && ev(o.node, n.focusOptions)
                };

            function eD(e) {
                if (!e) return null;
                var n = e ? new WeakRef(e) : null;
                return function() {
                    return (null == n ? void 0 : n.deref()) || null
                }
            }
            var eL = function(e) {
                    if (!e) return null;
                    for (var n = [], t = e; t && t !== document.body;) n.push({
                        current: eD(t),
                        parent: eD(t.parentElement),
                        left: eD(t.previousElementSibling),
                        right: eD(t.nextElementSibling)
                    }), t = t.parentElement;
                    return {
                        element: eD(e),
                        stack: n,
                        ownerDocument: e.ownerDocument
                    }
                },
                e_ = function(e) {
                    if (e)
                        for (var n, t, r, o, a, u = e.stack, i = e.ownerDocument, c = new Map, l = 0; l < u.length; l++) {
                            var d = u[l],
                                s = null == (n = d.parent) ? void 0 : n.call(d);
                            if (s && i.contains(s)) {
                                for (var f = null == (t = d.left) ? void 0 : t.call(d), v = d.current(), m = s.contains(v) ? v : void 0, p = null == (r = d.right) ? void 0 : r.call(d), h = er([s], c), b = null != (a = null != (o = null != m ? m : null == f ? void 0 : f.nextElementSibling) ? o : p) ? a : f; b;) {
                                    for (var g = 0; g < h.length; g++) {
                                        var y = h[g];
                                        if (null == b ? void 0 : b.contains(y.node)) return y.node
                                    }
                                    b = b.nextElementSibling
                                }
                                if (h.length) return h[0].node
                            }
                        }
                };

            function ej(e) {
                setTimeout(e, 1)
            }
            var eW = function(e) {
                    return e && "current" in e ? e.current : e
                },
                eB = null,
                eq = null,
                eH = null,
                eU = !1,
                eX = function(e, n) {
                    eH = {
                        observerNode: e,
                        portaledElement: n
                    }
                };

            function eY(e, n, t, r) {
                var o = null,
                    a = e;
                do {
                    var u = r[a];
                    if (u.guard) u.node.dataset.focusAutoGuard && (o = u);
                    else if (u.lockItem) {
                        if (a !== e) return;
                        o = null
                    } else break
                } while ((a += t) !== n);
                o && (o.node.tabIndex = 0)
            }
            var eG = function() {
                    var e = !1;
                    if (eB) {
                        var n = eB,
                            t = n.observed,
                            r = n.persistentFocus,
                            o = n.autoFocus,
                            a = n.shards,
                            u = n.crossFrame,
                            i = n.focusOptions,
                            c = t || eH && eH.portaledElement,
                            l = document && document.activeElement;
                        if (c) {
                            var d = [c].concat(a.map(eW).filter(Boolean));
                            if ((!l || (eB.whiteList || function() {
                                    return !0
                                })(l)) && (r || (u ? !!eU : "meanwhile" === eU) || !(document && document.activeElement === document.body || ec()) || !eq && o) && (c && !(ef(d) || l && d.some(function(e) {
                                    return function e(n, t, r) {
                                        return t && (t.host === n && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && e(n, t.parentNode, r))
                                    }(l, e, e)
                                }) || eH && eH.portaledElement === l) && (document && !eq && l && !o ? (l.blur && l.blur(), document.body.focus()) : (e = eT(d, eq, {
                                    focusOptions: i
                                }), eH = {})), eU = !1, eq = document && document.activeElement), document && l !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
                                var s = document && document.activeElement,
                                    f = eA(d),
                                    v = f.map(function(e) {
                                        return e.node
                                    }).indexOf(s);
                                v > -1 && (f.filter(function(e) {
                                    var n = e.guard,
                                        t = e.node;
                                    return n && t.dataset.focusAutoGuard
                                }).forEach(function(e) {
                                    return e.node.removeAttribute("tabIndex")
                                }), eY(v, f.length, 1, f), eY(v, -1, -1, f))
                            }
                        }
                    }
                    return e
                },
                eZ = function(e) {
                    eG() && e && (e.stopPropagation(), e.preventDefault())
                },
                ez = function() {
                    return ej(eG)
                },
                eK = function() {
                    eU = "just", ej(function() {
                        eU = "meanwhile"
                    })
                },
                eV = function() {
                    document.addEventListener("focusin", eZ), document.addEventListener("focusout", ez), window.addEventListener("blur", eK)
                },
                eJ = function() {
                    document.removeEventListener("focusin", eZ), document.removeEventListener("focusout", ez), window.removeEventListener("blur", eK)
                },
                e$ = {
                    moveFocusInside: eT,
                    focusInside: ef,
                    focusNextElement: function(e, n) {
                        void 0 === n && (n = {}), eR(e, n, function(e, n) {
                            var t = e.next,
                                r = e.first;
                            return t || n && r
                        })
                    },
                    focusPrevElement: function(e, n) {
                        void 0 === n && (n = {}), eR(e, n, function(e, n) {
                            var t = e.prev,
                                r = e.last;
                            return t || n && r
                        })
                    },
                    focusFirstElement: function(e, n) {
                        void 0 === n && (n = {}), eF(e, n, "first")
                    },
                    focusLastElement: function(e, n) {
                        void 0 === n && (n = {}), eF(e, n, "last")
                    },
                    captureFocusRestore: function(e) {
                        var n = eL(e);
                        return function() {
                            return e_(n)
                        }
                    }
                };
            C.assignSyncMedium(function(e) {
                var n = e.target,
                    t = e.currentTarget;
                t.contains(n) || eX(t, n)
            }), M.assignMedium(ez), S.assignMedium(function(e) {
                return e(e$)
            });
            let eQ = (r = function(e) {
                return e.filter(function(e) {
                    return !e.disabled
                })
            }, o = function(e) {
                var n = e.slice(-1)[0];
                n && !eB && eV();
                var t = eB,
                    r = t && n && n.id === t.id;
                eB = n, t && !r && (t.onDeactivation(), e.filter(function(e) {
                    return e.id === t.id
                }).length || t.returnFocus(!n)), n ? (eq = null, r && t.observed === n.observed || n.onActivation(e$), eG(!0), ej(eG)) : (eJ(), eq = null)
            }, function(e) {
                var n, t, a, u, i, c = [];

                function l() {
                    o(i = r(c.map(function(e) {
                        return e.props
                    })))
                }
                var d = function(n) {
                    function t() {
                        return n.apply(this, arguments) || this
                    }
                    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, P(t, n), t.peek = function() {
                        return i
                    };
                    var r = t.prototype;
                    return r.componentDidMount = function() {
                        c.push(this), l()
                    }, r.componentDidUpdate = function() {
                        l()
                    }, r.componentWillUnmount = function() {
                        var e = c.indexOf(this);
                        c.splice(e, 1), l()
                    }, r.render = function() {
                        return s.createElement(e, this.props)
                    }, t
                }(s.PureComponent);
                return n = d, t = "displayName", a = "SideEffect(" + (e.displayName || e.name || "Component") + ")", (u = function(e, n) {
                    if ("object" != I(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, n || "default");
                        if ("object" != I(r)) return r;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === n ? String : Number)(e)
                }(t, "string"), (t = "symbol" == I(u) ? u : u + "") in n) ? Object.defineProperty(n, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = a, d
            })(function() {
                return null
            });
            var e0 = s.forwardRef(function(e, n) {
                    return s.createElement(A, (0, d.A)({
                        sideCar: eQ,
                        ref: n
                    }, e))
                }),
                e1 = A.propTypes || {};
            e1.sideCar,
                function(e, n) {
                    if (null != e) {
                        var t = {};
                        for (var r in e)
                            if (({}).hasOwnProperty.call(e, r)) {
                                if (-1 !== n.indexOf(r)) continue;
                                t[r] = e[r]
                            }
                    }
                }(e1, ["sideCar"]), e0.propTypes = {};
            var e2 = t(61948),
                e6 = t(23798),
                e4 = null != (u = e0.default) ? u : e0,
                e3 = e => {
                    let {
                        initialFocusRef: n,
                        finalFocusRef: t,
                        contentRef: r,
                        restoreFocus: o,
                        children: a,
                        isDisabled: u,
                        autoFocus: i,
                        persistentFocus: c,
                        lockFocusAcrossFrames: l
                    } = e, d = (0, s.useCallback)(() => {
                        (null == n ? void 0 : n.current) ? n.current.focus(): (null == r ? void 0 : r.current) && 0 === (0, e2.ep)(r.current).length && requestAnimationFrame(() => {
                            var e;
                            null == (e = r.current) || e.focus()
                        })
                    }, [n, r]), f = (0, s.useCallback)(() => {
                        var e;
                        null == (e = null == t ? void 0 : t.current) || e.focus()
                    }, [t]), v = o && !t;
                    return (0, e6.jsx)(e4, {
                        crossFrame: l,
                        persistentFocus: c,
                        autoFocus: i,
                        disabled: u,
                        onActivation: d,
                        onDeactivation: f,
                        returnFocus: v,
                        children: a
                    })
                };
            e3.displayName = "FocusLock";
            var e5 = t(63312),
                e7 = "right-scroll-bar-position",
                e8 = "width-before-scroll-bar",
                e9 = k(),
                ne = function() {},
                nn = s.forwardRef(function(e, n) {
                    var t = s.useRef(null),
                        r = s.useState({
                            onScrollCapture: ne,
                            onWheelCapture: ne,
                            onTouchMoveCapture: ne
                        }),
                        o = r[0],
                        a = r[1],
                        u = e.forwardProps,
                        i = e.children,
                        c = e.className,
                        l = e.removeScrollBar,
                        d = e.enabled,
                        f = e.shards,
                        v = e.sideCar,
                        m = e.noIsolation,
                        p = e.inert,
                        h = e.allowPinchZoom,
                        g = e.as,
                        w = e.gapMode,
                        E = (0, y.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        x = b([t, n]),
                        k = (0, y.Cl)((0, y.Cl)({}, E), o);
                    return s.createElement(s.Fragment, null, d && s.createElement(v, {
                        sideCar: e9,
                        removeScrollBar: l,
                        shards: f,
                        noIsolation: m,
                        inert: p,
                        setCallbacks: a,
                        allowPinchZoom: !!h,
                        lockRef: t,
                        gapMode: w
                    }), u ? s.cloneElement(s.Children.only(i), (0, y.Cl)((0, y.Cl)({}, k), {
                        ref: x
                    })) : s.createElement(void 0 === g ? "div" : g, (0, y.Cl)({}, k, {
                        className: c,
                        ref: x
                    }), i))
                });
            nn.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, nn.classNames = {
                fullWidth: e8,
                zeroRight: e7
            };
            var nt = function(e) {
                var n = e.sideCar,
                    t = (0, y.Tt)(e, ["sideCar"]);
                if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = n.read();
                if (!r) throw Error("Sidecar medium not found");
                return s.createElement(r, (0, y.Cl)({}, t))
            };
            nt.isSideCarExport = !0;
            var nr = function() {
                    var e = 0,
                        n = null;
                    return {
                        add: function(r) {
                            if (0 == e && (n = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var n = i || t.nc;
                                    return n && e.setAttribute("nonce", n), e
                                }())) {
                                var o, a;
                                (o = n).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)), a = n, (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !n || (n.parentNode && n.parentNode.removeChild(n), n = null)
                        }
                    }
                },
                no = function() {
                    var e = nr();
                    return function(n, t) {
                        s.useEffect(function() {
                            return e.add(n),
                                function() {
                                    e.remove()
                                }
                        }, [n && t])
                    }
                },
                na = function() {
                    var e = no();
                    return function(n) {
                        return e(n.styles, n.dynamic), null
                    }
                },
                nu = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                ni = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                nc = function(e) {
                    var n = window.getComputedStyle(document.body),
                        t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = n["padding" === e ? "paddingTop" : "marginTop"],
                        o = n["padding" === e ? "paddingRight" : "marginRight"];
                    return [ni(t), ni(r), ni(o)]
                },
                nl = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return nu;
                    var n = nc(e),
                        t = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: n[0],
                        top: n[1],
                        right: n[2],
                        gap: Math.max(0, r - t + n[2] - n[0])
                    }
                },
                nd = na(),
                ns = "data-scroll-locked",
                nf = function(e, n, t, r) {
                    var o = e.left,
                        a = e.top,
                        u = e.right,
                        i = e.gap;
                    return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(i, "px ").concat(r, ";\n  }\n  body[").concat(ns, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(e7, " {\n    right: ").concat(i, "px ").concat(r, ";\n  }\n  \n  .").concat(e8, " {\n    margin-right: ").concat(i, "px ").concat(r, ";\n  }\n  \n  .").concat(e7, " .").concat(e7, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(e8, " .").concat(e8, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(ns, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(i, "px;\n  }\n")
                },
                nv = function() {
                    var e = parseInt(document.body.getAttribute(ns) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                nm = function() {
                    s.useEffect(function() {
                        return document.body.setAttribute(ns, (nv() + 1).toString()),
                            function() {
                                var e = nv() - 1;
                                e <= 0 ? document.body.removeAttribute(ns) : document.body.setAttribute(ns, e.toString())
                            }
                    }, [])
                },
                np = function(e) {
                    var n = e.noRelative,
                        t = e.noImportant,
                        r = e.gapMode,
                        o = void 0 === r ? "margin" : r;
                    nm();
                    var a = s.useMemo(function() {
                        return nl(o)
                    }, [o]);
                    return s.createElement(nd, {
                        styles: nf(a, !n, o, t ? "" : "!important")
                    })
                },
                nh = !1;
            if ("undefined" != typeof window) try {
                var nb = Object.defineProperty({}, "passive", {
                    get: function() {
                        return nh = !0, !0
                    }
                });
                window.addEventListener("test", nb, nb), window.removeEventListener("test", nb, nb)
            } catch (e) {
                nh = !1
            }
            var ng = !!nh && {
                    passive: !1
                },
                ny = function(e, n) {
                    var t = window.getComputedStyle(e);
                    return "hidden" !== t[n] && (t.overflowY !== t.overflowX || "TEXTAREA" === e.tagName || "visible" !== t[n])
                },
                nw = function(e, n) {
                    var t = n.ownerDocument,
                        r = n;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), nE(e, r)) {
                            var o = nx(e, r);
                            if (o[1] > o[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== t.body);
                    return !1
                },
                nE = function(e, n) {
                    return "v" === e ? ny(n, "overflowY") : ny(n, "overflowX")
                },
                nx = function(e, n) {
                    return "v" === e ? [n.scrollTop, n.scrollHeight, n.clientHeight] : [n.scrollLeft, n.scrollWidth, n.clientWidth]
                },
                nk = function(e, n, t, r, o) {
                    var a, u = (a = window.getComputedStyle(n).direction, "h" === e && "rtl" === a ? -1 : 1),
                        i = u * r,
                        c = t.target,
                        l = n.contains(c),
                        d = !1,
                        s = i > 0,
                        f = 0,
                        v = 0;
                    do {
                        var m = nx(e, c),
                            p = m[0],
                            h = m[1] - m[2] - u * p;
                        (p || h) && nE(e, c) && (f += h, v += p), c = c instanceof ShadowRoot ? c.host : c.parentNode
                    } while (!l && c !== document.body || l && (n.contains(c) || n === c));
                    return s && (o && 1 > Math.abs(f) || !o && i > f) ? d = !0 : !s && (o && 1 > Math.abs(v) || !o && -i > v) && (d = !0), d
                },
                nC = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                nM = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                nS = function(e) {
                    return e && "current" in e ? e.current : e
                },
                nN = 0,
                nO = [];
            let nT = (a = function(e) {
                var n = s.useRef([]),
                    t = s.useRef([0, 0]),
                    r = s.useRef(),
                    o = s.useState(nN++)[0],
                    a = s.useState(na)[0],
                    u = s.useRef(e);
                s.useEffect(function() {
                    u.current = e
                }, [e]), s.useEffect(function() {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-".concat(o));
                        var n = (0, y.fX)([e.lockRef.current], (e.shards || []).map(nS), !0).filter(Boolean);
                        return n.forEach(function(e) {
                                return e.classList.add("allow-interactivity-".concat(o))
                            }),
                            function() {
                                document.body.classList.remove("block-interactivity-".concat(o)), n.forEach(function(e) {
                                    return e.classList.remove("allow-interactivity-".concat(o))
                                })
                            }
                    }
                }, [e.inert, e.lockRef.current, e.shards]);
                var i = s.useCallback(function(e, n) {
                        if ("touches" in e && 2 === e.touches.length) return !u.current.allowPinchZoom;
                        var o, a = nC(e),
                            i = t.current,
                            c = "deltaX" in e ? e.deltaX : i[0] - a[0],
                            l = "deltaY" in e ? e.deltaY : i[1] - a[1],
                            d = e.target,
                            s = Math.abs(c) > Math.abs(l) ? "h" : "v";
                        if ("touches" in e && "h" === s && "range" === d.type) return !1;
                        var f = nw(s, d);
                        if (!f) return !0;
                        if (f ? o = s : (o = "v" === s ? "h" : "v", f = nw(s, d)), !f) return !1;
                        if (!r.current && "changedTouches" in e && (c || l) && (r.current = o), !o) return !0;
                        var v = r.current || o;
                        return nk(v, n, e, "h" === v ? c : l, !0)
                    }, []),
                    c = s.useCallback(function(e) {
                        if (nO.length && nO[nO.length - 1] === a) {
                            var t = "deltaY" in e ? nM(e) : nC(e),
                                r = n.current.filter(function(n) {
                                    var r;
                                    return n.name === e.type && (n.target === e.target || e.target === n.shadowParent) && (r = n.delta, r[0] === t[0] && r[1] === t[1])
                                })[0];
                            if (r && r.should) {
                                e.cancelable && e.preventDefault();
                                return
                            }
                            if (!r) {
                                var o = (u.current.shards || []).map(nS).filter(Boolean).filter(function(n) {
                                    return n.contains(e.target)
                                });
                                (o.length > 0 ? i(e, o[0]) : !u.current.noIsolation) && e.cancelable && e.preventDefault()
                            }
                        }
                    }, []),
                    l = s.useCallback(function(e, t, r, o) {
                        var a = {
                            name: e,
                            delta: t,
                            target: r,
                            should: o,
                            shadowParent: function(e) {
                                for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
                                return n
                            }(r)
                        };
                        n.current.push(a), setTimeout(function() {
                            n.current = n.current.filter(function(e) {
                                return e !== a
                            })
                        }, 1)
                    }, []),
                    d = s.useCallback(function(e) {
                        t.current = nC(e), r.current = void 0
                    }, []),
                    f = s.useCallback(function(n) {
                        l(n.type, nM(n), n.target, i(n, e.lockRef.current))
                    }, []),
                    v = s.useCallback(function(n) {
                        l(n.type, nC(n), n.target, i(n, e.lockRef.current))
                    }, []);
                s.useEffect(function() {
                    return nO.push(a), e.setCallbacks({
                            onScrollCapture: f,
                            onWheelCapture: f,
                            onTouchMoveCapture: v
                        }), document.addEventListener("wheel", c, ng), document.addEventListener("touchmove", c, ng), document.addEventListener("touchstart", d, ng),
                        function() {
                            nO = nO.filter(function(e) {
                                return e !== a
                            }), document.removeEventListener("wheel", c, ng), document.removeEventListener("touchmove", c, ng), document.removeEventListener("touchstart", d, ng)
                        }
                }, []);
                var m = e.removeScrollBar,
                    p = e.inert;
                return s.createElement(s.Fragment, null, p ? s.createElement(a, {
                    styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                }) : null, m ? s.createElement(np, {
                    gapMode: e.gapMode
                }) : null)
            }, e9.useMedium(a), nt);
            var nA = s.forwardRef(function(e, n) {
                return s.createElement(nn, (0, y.Cl)({}, e, {
                    ref: n,
                    sideCar: nT
                }))
            });

            function nP(e) {
                let {
                    autoFocus: n,
                    trapFocus: t,
                    dialogRef: r,
                    initialFocusRef: o,
                    blockScrollOnMount: a,
                    allowPinchZoom: u,
                    finalFocusRef: i,
                    returnFocusOnClose: d,
                    preserveScrollBarGap: f,
                    lockFocusAcrossFrames: v,
                    isOpen: m
                } = (0, c.k3)(), [p, h] = (0, e5.xQ)();
                (0, s.useEffect)(() => {
                    !p && h && setTimeout(h)
                }, [p, h]);
                let b = (0, l.y)(r, m);
                return (0, e6.jsx)(e3, {
                    autoFocus: n,
                    isDisabled: !t,
                    initialFocusRef: o,
                    finalFocusRef: i,
                    restoreFocus: d,
                    contentRef: r,
                    lockFocusAcrossFrames: v,
                    children: (0, e6.jsx)(nA, {
                        removeScrollBar: !f,
                        allowPinchZoom: u,
                        enabled: 1 === b && a,
                        forwardProps: !0,
                        children: e.children
                    })
                })
            }
            nA.classNames = nn.classNames
        }
    }
]);