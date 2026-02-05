try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d19b912d-2cfb-423f-96b6-1c7e0b6d3f7d", e._sentryDebugIdIdentifier = "sentry-dbid-d19b912d-2cfb-423f-96b6-1c7e0b6d3f7d")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3308], {
        12776: (e, a, n) => {
            n.d(a, {
                t: () => i,
                v: () => d
            });
            var t = n(16044),
                l = n(66196);

            function i(e) {
                let {
                    isDisabled: a,
                    isInvalid: n,
                    isReadOnly: t,
                    isRequired: i,
                    ...r
                } = d(e);
                return { ...r,
                    disabled: a,
                    readOnly: t,
                    required: i,
                    "aria-invalid": (0, l.rq)(n),
                    "aria-required": (0, l.rq)(i),
                    "aria-readonly": (0, l.rq)(t)
                }
            }

            function d(e) {
                var a, n, i;
                let d = (0, t.Uc)(),
                    {
                        id: r,
                        disabled: o,
                        readOnly: s,
                        required: u,
                        isRequired: c,
                        isInvalid: f,
                        isReadOnly: v,
                        isDisabled: b,
                        onFocus: p,
                        onBlur: h,
                        ...m
                    } = e,
                    y = e["aria-describedby"] ? [e["aria-describedby"]] : [];
                return (null == d ? void 0 : d.hasFeedbackText) && (null == d ? void 0 : d.isInvalid) && y.push(d.feedbackId), (null == d ? void 0 : d.hasHelpText) && y.push(d.helpTextId), { ...m,
                    "aria-describedby": y.join(" ") || void 0,
                    id: null != r ? r : null == d ? void 0 : d.id,
                    isDisabled: null != (a = null != o ? o : b) ? a : null == d ? void 0 : d.isDisabled,
                    isReadOnly: null != (n = null != s ? s : v) ? n : null == d ? void 0 : d.isReadOnly,
                    isRequired: null != (i = null != u ? u : c) ? i : null == d ? void 0 : d.isRequired,
                    isInvalid: null != f ? f : null == d ? void 0 : d.isInvalid,
                    onFocus: (0, l.Hj)(null == d ? void 0 : d.onFocus, p),
                    onBlur: (0, l.Hj)(null == d ? void 0 : d.onBlur, h)
                }
            }
        },
        16044: (e, a, n) => {
            n.d(a, {
                MJ: () => h,
                TP: () => v,
                Uc: () => p,
                eK: () => m
            });
            var t = n(92463),
                l = n(67665),
                i = n(96116),
                d = n(67267),
                r = n(56134),
                o = n(54284),
                s = n(66196),
                u = n(21462),
                c = n(23798),
                [f, v] = (0, t.q)({
                    name: "FormControlStylesContext",
                    errorMessage: "useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "
                }),
                [b, p] = (0, t.q)({
                    strict: !1,
                    name: "FormControlContext"
                }),
                h = (0, i.R)(function(e, a) {
                    let n = (0, d.o5)("Form", e),
                        {
                            getRootProps: t,
                            htmlProps: i,
                            ...v
                        } = function(e) {
                            let {
                                id: a,
                                isRequired: n,
                                isInvalid: t,
                                isDisabled: i,
                                isReadOnly: d,
                                ...r
                            } = e, o = (0, u.useId)(), c = a || `field-${o}`, f = `${c}-label`, v = `${c}-feedback`, b = `${c}-helptext`, [p, h] = (0, u.useState)(!1), [m, y] = (0, u.useState)(!1), [k, E] = (0, u.useState)(!1), w = (0, u.useCallback)((e = {}, a = null) => ({
                                id: b,
                                ...e,
                                ref: (0, l.Px)(a, e => {
                                    e && y(!0)
                                })
                            }), [b]), x = (0, u.useCallback)((e = {}, a = null) => ({ ...e,
                                ref: a,
                                "data-focus": (0, s.sE)(k),
                                "data-disabled": (0, s.sE)(i),
                                "data-invalid": (0, s.sE)(t),
                                "data-readonly": (0, s.sE)(d),
                                id: void 0 !== e.id ? e.id : f,
                                htmlFor: void 0 !== e.htmlFor ? e.htmlFor : c
                            }), [c, i, k, t, d, f]), g = (0, u.useCallback)((e = {}, a = null) => ({
                                id: v,
                                ...e,
                                ref: (0, l.Px)(a, e => {
                                    e && h(!0)
                                }),
                                "aria-live": "polite"
                            }), [v]), _ = (0, u.useCallback)((e = {}, a = null) => ({ ...e,
                                ...r,
                                ref: a,
                                role: "group",
                                "data-focus": (0, s.sE)(k),
                                "data-disabled": (0, s.sE)(i),
                                "data-invalid": (0, s.sE)(t),
                                "data-readonly": (0, s.sE)(d)
                            }), [r, i, k, t, d]);
                            return {
                                isRequired: !!n,
                                isInvalid: !!t,
                                isReadOnly: !!d,
                                isDisabled: !!i,
                                isFocused: !!k,
                                onFocus: () => E(!0),
                                onBlur: () => E(!1),
                                hasFeedbackText: p,
                                setHasFeedbackText: h,
                                hasHelpText: m,
                                setHasHelpText: y,
                                id: c,
                                labelId: f,
                                feedbackId: v,
                                helpTextId: b,
                                htmlProps: r,
                                getHelpTextProps: w,
                                getErrorMessageProps: g,
                                getRootProps: _,
                                getLabelProps: x,
                                getRequiredIndicatorProps: (0, u.useCallback)((e = {}, a = null) => ({ ...e,
                                    ref: a,
                                    role: "presentation",
                                    "aria-hidden": !0,
                                    children: e.children || "*"
                                }), [])
                            }
                        }((0, r.MN)(e)),
                        p = (0, s.cx)("chakra-form-control", e.className);
                    return (0, c.jsx)(b, {
                        value: v,
                        children: (0, c.jsx)(f, {
                            value: n,
                            children: (0, c.jsx)(o.B.div, { ...t({}, a),
                                className: p,
                                __css: n.container
                            })
                        })
                    })
                });
            h.displayName = "FormControl";
            var m = (0, i.R)(function(e, a) {
                let n = p(),
                    t = v(),
                    l = (0, s.cx)("chakra-form__helper-text", e.className);
                return (0, c.jsx)(o.B.div, { ...null == n ? void 0 : n.getHelpTextProps(e, a),
                    __css: t.helperText,
                    className: l
                })
            });
            m.displayName = "FormHelperText"
        },
        33446: (e, a, n) => {
            n.d(a, {
                f: () => t
            });
            var t = {
                border: "0",
                clip: "rect(0, 0, 0, 0)",
                height: "1px",
                width: "1px",
                margin: "-1px",
                padding: "0",
                overflow: "hidden",
                whiteSpace: "nowrap",
                position: "absolute"
            }
        },
        53308: (e, a, n) => {
            n.d(a, {
                d: () => c
            });
            var t = n(81105),
                l = n(66196),
                i = n(96116),
                d = n(67267),
                r = n(56134),
                o = n(54284),
                s = n(21462),
                u = n(23798),
                c = (0, i.R)(function(e, a) {
                    let n = (0, d.o5)("Switch", e),
                        {
                            spacing: i = "0.5rem",
                            children: c,
                            ...f
                        } = (0, r.MN)(e),
                        {
                            getIndicatorProps: v,
                            getInputProps: b,
                            getCheckboxProps: p,
                            getRootProps: h,
                            getLabelProps: m
                        } = (0, t.v)(f),
                        y = (0, s.useMemo)(() => ({
                            display: "inline-block",
                            position: "relative",
                            verticalAlign: "middle",
                            lineHeight: 0,
                            ...n.container
                        }), [n.container]),
                        k = (0, s.useMemo)(() => ({
                            display: "inline-flex",
                            flexShrink: 0,
                            justifyContent: "flex-start",
                            boxSizing: "content-box",
                            cursor: "pointer",
                            ...n.track
                        }), [n.track]),
                        E = (0, s.useMemo)(() => ({
                            userSelect: "none",
                            marginStart: i,
                            ...n.label
                        }), [i, n.label]);
                    return (0, u.jsxs)(o.B.label, { ...h(),
                        className: (0, l.cx)("chakra-switch", e.className),
                        __css: y,
                        children: [(0, u.jsx)("input", {
                            className: "chakra-switch__input",
                            ...b({}, a)
                        }), (0, u.jsx)(o.B.span, { ...p(),
                            className: "chakra-switch__track",
                            __css: k,
                            children: (0, u.jsx)(o.B.span, {
                                __css: n.thumb,
                                className: "chakra-switch__thumb",
                                ...v()
                            })
                        }), c && (0, u.jsx)(o.B.span, {
                            className: "chakra-switch__label",
                            ...m(),
                            __css: E,
                            children: c
                        })]
                    })
                });
            c.displayName = "Switch"
        },
        61617: (e, a, n) => {
            n.d(a, {
                Yy: () => h
            });
            var t = !1,
                l = null,
                i = !1,
                d = !1,
                r = new Set;

            function o(e, a) {
                r.forEach(n => n(e, a))
            }
            var s = "undefined" != typeof window && null != window.navigator && /^Mac/.test(window.navigator.platform);

            function u(e) {
                i = !0, e.metaKey || !s && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (l = "keyboard", o("keyboard", e))
            }

            function c(e) {
                if (l = "pointer", "mousedown" === e.type || "pointerdown" === e.type) {
                    i = !0;
                    let a = e.composedPath ? e.composedPath()[0] : e.target,
                        n = !1;
                    try {
                        n = a.matches(":focus-visible")
                    } catch {}
                    n || o("pointer", e)
                }
            }

            function f(e) {
                (0 === e.mozInputSource && e.isTrusted || 0 === e.detail && !e.pointerType) && (i = !0, l = "virtual")
            }

            function v(e) {
                e.target !== window && e.target !== document && (i || d || (l = "virtual", o("virtual", e)), i = !1, d = !1)
            }

            function b() {
                i = !1, d = !0
            }

            function p() {
                return "pointer" !== l
            }

            function h(e) {
                ! function() {
                    if ("undefined" == typeof document || t) return;
                    let {
                        focus: e
                    } = HTMLElement.prototype;
                    HTMLElement.prototype.focus = function(...a) {
                        i = !0, e.apply(this, a)
                    }, document.addEventListener("keydown", u, !0), document.addEventListener("keyup", u, !0), document.addEventListener("click", f, !0), window.addEventListener("focus", v, !0), window.addEventListener("blur", b, !1), "undefined" != typeof PointerEvent ? (document.addEventListener("pointerdown", c, !0), document.addEventListener("pointermove", c, !0), document.addEventListener("pointerup", c, !0)) : (document.addEventListener("mousedown", c, !0), document.addEventListener("mousemove", c, !0), document.addEventListener("mouseup", c, !0)), t = !0
                }(), e(p());
                let a = () => e(p());
                return r.add(a), () => {
                    r.delete(a)
                }
            }
        },
        81105: (e, a, n) => {
            n.d(a, {
                v: () => f
            });
            var t = n(12776),
                l = n(41701),
                i = n(49347),
                d = n(17349),
                r = n(67665),
                o = n(66196),
                s = n(33446),
                u = n(61617),
                c = n(21462);

            function f(e = {}) {
                let {
                    isDisabled: a,
                    isReadOnly: n,
                    isRequired: b,
                    isInvalid: p,
                    id: h,
                    onBlur: m,
                    onFocus: y,
                    "aria-describedby": k
                } = (0, t.v)(e), {
                    defaultChecked: E,
                    isChecked: w,
                    isFocusable: x,
                    onChange: g,
                    isIndeterminate: _,
                    name: C,
                    value: j,
                    tabIndex: S,
                    "aria-label": M,
                    "aria-labelledby": F,
                    "aria-invalid": H,
                    ...L
                } = e, D = function(e, a = []) {
                    let n = Object.assign({}, e);
                    for (let e of a) e in n && delete n[e];
                    return n
                }(L, ["isDisabled", "isReadOnly", "isRequired", "isInvalid", "id", "onBlur", "onFocus", "aria-describedby"]), N = (0, d.c)(g), I = (0, d.c)(m), q = (0, d.c)(y), [B, R] = (0, c.useState)(!1), [T, P] = (0, c.useState)(!1), [U, K] = (0, c.useState)(!1), [O, $] = (0, c.useState)(!1);
                (0, c.useEffect)(() => (0, u.Yy)(R), []);
                let A = (0, c.useRef)(null),
                    [z, Y] = (0, c.useState)(!0),
                    [J, G] = (0, c.useState)(!!E),
                    Q = void 0 !== w,
                    V = Q ? w : J,
                    W = (0, c.useCallback)(e => {
                        if (n || a) return void e.preventDefault();
                        Q || (V ? G(e.target.checked) : G(!!_ || e.target.checked)), null == N || N(e)
                    }, [n, a, V, Q, _, N]);
                (0, l.U)(() => {
                    A.current && (A.current.indeterminate = !!_)
                }, [_]), (0, i.w)(() => {
                    a && P(!1)
                }, [a, P]), (0, l.U)(() => {
                    let e = A.current;
                    if (!(null == e ? void 0 : e.form)) return;
                    let a = () => {
                        G(!!E)
                    };
                    return e.form.addEventListener("reset", a), () => {
                        var n;
                        return null == (n = e.form) ? void 0 : n.removeEventListener("reset", a)
                    }
                }, []);
                let X = a && !x,
                    Z = (0, c.useCallback)(e => {
                        " " === e.key && $(!0)
                    }, [$]),
                    ee = (0, c.useCallback)(e => {
                        " " === e.key && $(!1)
                    }, [$]);
                (0, l.U)(() => {
                    A.current && A.current.checked !== V && G(A.current.checked)
                }, [A.current]);
                let ea = (0, c.useCallback)((e = {}, t = null) => ({ ...e,
                        ref: t,
                        "data-active": (0, o.sE)(O),
                        "data-hover": (0, o.sE)(U),
                        "data-checked": (0, o.sE)(V),
                        "data-focus": (0, o.sE)(T),
                        "data-focus-visible": (0, o.sE)(T && B),
                        "data-indeterminate": (0, o.sE)(_),
                        "data-disabled": (0, o.sE)(a),
                        "data-invalid": (0, o.sE)(p),
                        "data-readonly": (0, o.sE)(n),
                        "aria-hidden": !0,
                        onMouseDown: (0, o.Hj)(e.onMouseDown, e => {
                            T && e.preventDefault(), $(!0)
                        }),
                        onMouseUp: (0, o.Hj)(e.onMouseUp, () => $(!1)),
                        onMouseEnter: (0, o.Hj)(e.onMouseEnter, () => K(!0)),
                        onMouseLeave: (0, o.Hj)(e.onMouseLeave, () => K(!1))
                    }), [O, V, a, T, B, U, _, p, n]),
                    en = (0, c.useCallback)((e = {}, t = null) => ({ ...e,
                        ref: t,
                        "data-active": (0, o.sE)(O),
                        "data-hover": (0, o.sE)(U),
                        "data-checked": (0, o.sE)(V),
                        "data-focus": (0, o.sE)(T),
                        "data-focus-visible": (0, o.sE)(T && B),
                        "data-indeterminate": (0, o.sE)(_),
                        "data-disabled": (0, o.sE)(a),
                        "data-invalid": (0, o.sE)(p),
                        "data-readonly": (0, o.sE)(n)
                    }), [O, V, a, T, B, U, _, p, n]),
                    et = (0, c.useCallback)((e = {}, n = null) => ({ ...D,
                        ...e,
                        ref: (0, r.Px)(n, e => {
                            e && Y("LABEL" === e.tagName)
                        }),
                        onClick: (0, o.Hj)(e.onClick, () => {
                            var e;
                            z || (null == (e = A.current) || e.click(), requestAnimationFrame(() => {
                                var e;
                                null == (e = A.current) || e.focus({
                                    preventScroll: !0
                                })
                            }))
                        }),
                        "data-disabled": (0, o.sE)(a),
                        "data-checked": (0, o.sE)(V),
                        "data-invalid": (0, o.sE)(p)
                    }), [D, a, V, p, z]),
                    el = (0, c.useCallback)((e = {}, t = null) => ({ ...e,
                        ref: (0, r.Px)(A, t),
                        type: "checkbox",
                        name: C,
                        value: j,
                        id: h,
                        tabIndex: S,
                        onChange: (0, o.Hj)(e.onChange, W),
                        onBlur: (0, o.Hj)(e.onBlur, I, () => P(!1)),
                        onFocus: (0, o.Hj)(e.onFocus, q, () => P(!0)),
                        onKeyDown: (0, o.Hj)(e.onKeyDown, Z),
                        onKeyUp: (0, o.Hj)(e.onKeyUp, ee),
                        required: b,
                        checked: V,
                        disabled: X,
                        readOnly: n,
                        "aria-label": M,
                        "aria-labelledby": F,
                        "aria-invalid": H ? !!H : p,
                        "aria-describedby": k,
                        "aria-disabled": a,
                        style: s.f
                    }), [C, j, h, W, I, q, Z, ee, b, V, X, n, M, F, H, p, k, a, S]),
                    ei = (0, c.useCallback)((e = {}, n = null) => ({ ...e,
                        ref: n,
                        onMouseDown: (0, o.Hj)(e.onMouseDown, v),
                        "data-disabled": (0, o.sE)(a),
                        "data-checked": (0, o.sE)(V),
                        "data-invalid": (0, o.sE)(p)
                    }), [V, a, p]);
                return {
                    state: {
                        isInvalid: p,
                        isFocused: T,
                        isChecked: V,
                        isActive: O,
                        isHovered: U,
                        isIndeterminate: _,
                        isDisabled: a,
                        isReadOnly: n,
                        isRequired: b
                    },
                    getRootProps: et,
                    getCheckboxProps: ea,
                    getIndicatorProps: en,
                    getInputProps: el,
                    getLabelProps: ei,
                    htmlProps: D
                }
            }

            function v(e) {
                e.preventDefault(), e.stopPropagation()
            }
        }
    }
]);