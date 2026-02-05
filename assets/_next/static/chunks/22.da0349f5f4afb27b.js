try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fb3602bd-b4a9-4af6-9db6-b7f61c84b520", e._sentryDebugIdIdentifier = "sentry-dbid-fb3602bd-b4a9-4af6-9db6-b7f61c84b520")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [22, 3351], {
        5732: (e, t, i) => {
            i.d(t, {
                z: () => s
            });
            var n = i(64724),
                a = i(96116),
                r = i(23798),
                s = (0, a.R)((e, t) => (0, r.jsx)(n.B, {
                    align: "center",
                    ...e,
                    direction: "row",
                    ref: t
                }));
            s.displayName = "HStack"
        },
        7337: (e, t, i) => {
            i.d(t, {
                s: () => c,
                w: () => d
            });
            var n = i(71437),
                a = i(66196),
                r = i(4373),
                s = i(16562),
                l = i(21462),
                o = i(23798),
                d = {
                    initial: "initial",
                    animate: "enter",
                    exit: "exit",
                    variants: {
                        initial: ({
                            offsetX: e,
                            offsetY: t,
                            transition: i,
                            transitionEnd: a,
                            delay: r
                        }) => {
                            var s;
                            return {
                                opacity: 0,
                                x: e,
                                y: t,
                                transition: null != (s = null == i ? void 0 : i.exit) ? s : n.yA.exit(n.jd.exit, r),
                                transitionEnd: null == a ? void 0 : a.exit
                            }
                        },
                        enter: ({
                            transition: e,
                            transitionEnd: t,
                            delay: i
                        }) => {
                            var a;
                            return {
                                opacity: 1,
                                x: 0,
                                y: 0,
                                transition: null != (a = null == e ? void 0 : e.enter) ? a : n.yA.enter(n.jd.enter, i),
                                transitionEnd: null == t ? void 0 : t.enter
                            }
                        },
                        exit: ({
                            offsetY: e,
                            offsetX: t,
                            transition: i,
                            transitionEnd: a,
                            reverse: r,
                            delay: s
                        }) => {
                            var l;
                            let o = {
                                x: t,
                                y: e
                            };
                            return {
                                opacity: 0,
                                transition: null != (l = null == i ? void 0 : i.exit) ? l : n.yA.exit(n.jd.exit, s),
                                ...r ? { ...o,
                                    transitionEnd: null == a ? void 0 : a.exit
                                } : {
                                    transitionEnd: { ...o,
                                        ...null == a ? void 0 : a.exit
                                    }
                                }
                            }
                        }
                    }
                },
                c = (0, l.forwardRef)(function(e, t) {
                    let {
                        unmountOnExit: i,
                        in: n,
                        reverse: l = !0,
                        className: c,
                        offsetX: u = 0,
                        offsetY: x = 8,
                        transition: p,
                        transitionEnd: h,
                        delay: f,
                        ...g
                    } = e, m = !i || n && i, j = n || i ? "enter" : "exit", v = {
                        offsetX: u,
                        offsetY: x,
                        reverse: l,
                        transition: p,
                        transitionEnd: h,
                        delay: f
                    };
                    return (0, o.jsx)(r.N, {
                        custom: v,
                        children: m && (0, o.jsx)(s.P.div, {
                            ref: t,
                            className: (0, a.cx)("chakra-offset-slide", c),
                            custom: v,
                            ...d,
                            animate: j,
                            ...g
                        })
                    })
                });
            c.displayName = "SlideFade"
        },
        9205: (e, t, i) => {
            i.r(t), i.d(t, {
                EmailLogin: () => D,
                EmailSignup: () => B,
                LoginOrSignupModal: () => z
            });
            var n = i(23798),
                a = i(21462),
                r = i(86027),
                s = i(14770),
                l = i(26829),
                o = i(56545),
                d = i(220),
                c = i(45838),
                u = i(93383),
                x = i(47966),
                p = i(16968),
                h = i(47725),
                f = i(65762),
                g = i(13423),
                m = i(72637),
                j = i(76723),
                v = i(5732),
                C = i(28439),
                y = i(90914),
                w = i(62104);
            i(41814);
            var _ = i(9613);
            let b = e => {
                let {
                    children: t,
                    ...i
                } = e;
                return (0, n.jsx)(w.$, {
                    variant: "pillSecondaryOutline",
                    w: "full",
                    leftIcon: (0, n.jsx)(_.Y, {
                        w: "20px",
                        h: "20px"
                    }),
                    ...i,
                    children: t
                })
            };
            var k = i(65539),
                L = i(48465);
            let N = e => {
                let {
                    children: t,
                    ...i
                } = e;
                return (0, n.jsx)(w.$, {
                    variant: "pillSecondaryOutline",
                    w: "full",
                    leftIcon: (0, n.jsx)(L.i, {
                        color: "#0866FF",
                        w: "20px",
                        h: "20px"
                    }),
                    ...i,
                    children: t
                })
            };
            var S = i(11900),
                E = i(85375),
                M = i(64755);
            let R = e => {
                    let {
                        headingImage: t,
                        onSignupClick: i
                    } = e, {
                        beforeSignupNav: a,
                        loginWith: d
                    } = (0, M.A)(), {
                        closeLoginOrSignupModal: c
                    } = (0, g.QN)(), u = (0, n.jsx)(s.D, {
                        as: "h2",
                        size: "lg",
                        textAlign: "center",
                        width: {
                            base: "full",
                            md: 96
                        },
                        fontWeight: 600,
                        children: (0, n.jsx)(r.A, {
                            defaultMessage: "Sign in",
                            id: "SQJto2"
                        })
                    });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [t ? (0, n.jsxs)(l.az, {
                            textAlign: "center",
                            children: [t, u]
                        }) : u, (0, n.jsxs)(o.T, {
                            width: {
                                base: "full",
                                md: 96
                            },
                            spacing: 3,
                            children: [(0, n.jsx)(S.a, {
                                onClick: () => d(E.O.Google),
                                "data-testid": "modal_log_in_with_google_button",
                                children: (0, n.jsx)(r.A, {
                                    defaultMessage: "Sign in with Google",
                                    id: "Op5EHr"
                                })
                            }), (0, n.jsx)(N, {
                                onClick: () => d(E.O.Facebook),
                                "data-testid": "modal_log_in_with_facebook_button",
                                children: (0, n.jsx)(r.A, {
                                    defaultMessage: "Sign in with Facebook",
                                    id: "7vsu1w"
                                })
                            }), (0, n.jsx)(b, {
                                onClick: () => d(E.O.Apple),
                                "data-testid": "modal_log_in_with_apple_button",
                                children: (0, n.jsx)(r.A, {
                                    defaultMessage: "Continue with Apple",
                                    id: "BmecBA"
                                })
                            }), (0, n.jsx)(k.t, {
                                onClick: () => d(E.O.Email),
                                "data-testid": "modal_log_in_with_email_button",
                                children: (0, n.jsx)(r.A, {
                                    defaultMessage: "Sign in with email",
                                    id: "BKQjDk"
                                })
                            })]
                        }), (0, n.jsxs)(v.z, {
                            children: [(0, n.jsx)(C.E, {
                                as: "span",
                                color: "gray.700",
                                children: (0, n.jsx)(r.A, {
                                    defaultMessage: "New user? ",
                                    id: "ei7GHK"
                                })
                            }), (0, n.jsx)(y.Q, { ...i ? {
                                    chakraLinkProps: {
                                        onClick: i,
                                        textDecoration: "underline",
                                        variant: "primary"
                                    },
                                    href: "#"
                                } : {
                                    chakraLinkProps: {
                                        onClick: () => {
                                            a(), c()
                                        },
                                        textDecoration: "underline",
                                        variant: "primary"
                                    },
                                    href: "/welcome/",
                                    nextLinkProps: {
                                        prefetch: !0
                                    }
                                },
                                children: (0, n.jsx)(r.A, {
                                    defaultMessage: "Sign up",
                                    id: "8HJxXG"
                                })
                            })]
                        })]
                    })
                },
                A = () => {
                    let {
                        beforeLoginNav: e,
                        signupWith: t
                    } = (0, M.A)(), {
                        showLoginOptions: i
                    } = (0, g.QN)(), l = (0, a.useCallback)(t => {
                        t.preventDefault(), e(), i()
                    }, [e, i]);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(s.D, {
                            as: "h2",
                            size: "lg",
                            textAlign: "center",
                            width: {
                                base: "full",
                                md: 96
                            },
                            fontWeight: 600,
                            children: (0, n.jsx)(r.A, {
                                defaultMessage: "Create a free account",
                                id: "d82w2J"
                            })
                        }), (0, n.jsxs)(o.T, {
                            width: {
                                base: "full",
                                md: 96
                            },
                            spacing: 3,
                            children: [(0, n.jsx)(S.a, {
                                onClick: () => t(E.O.Google),
                                "data-testid": "modal_signup_with_google_button",
                                children: (0, n.jsx)(r.A, {
                                    defaultMessage: "Join using Google",
                                    id: "FaelkM"
                                })
                            }), (0, n.jsx)(k.t, {
                                onClick: () => t(E.O.Email),
                                "data-testid": "modal_signup_with_email_button",
                                children: (0, n.jsx)(r.A, {
                                    defaultMessage: "Join using email",
                                    id: "Lk8zJe"
                                })
                            })]
                        }), (0, n.jsxs)(v.z, {
                            children: [(0, n.jsx)(C.E, {
                                as: "span",
                                color: "gray.700",
                                children: (0, n.jsx)(r.A, {
                                    defaultMessage: "Existing user? ",
                                    id: "Uoax0R"
                                })
                            }), (0, n.jsx)(y.Q, {
                                chakraLinkProps: {
                                    onClick: l,
                                    textDecoration: "underline",
                                    variant: "primary"
                                },
                                href: "/login/",
                                children: (0, n.jsx)(r.A, {
                                    defaultMessage: "Sign in",
                                    id: "SQJto2"
                                })
                            })]
                        })]
                    })
                };
            var O = i(2457),
                I = i(47717);
            let D = e => {
                    let {
                        headingImage: t,
                        onSignupClick: i
                    } = e, a = (0, n.jsx)(s.D, {
                        as: "h2",
                        size: "lg",
                        fontWeight: "bold",
                        children: (0, n.jsx)(r.A, {
                            defaultMessage: "Sign in",
                            id: "SQJto2"
                        })
                    });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [t ? (0, n.jsxs)(l.az, {
                            textAlign: "center",
                            children: [t, a]
                        }) : a, (0, n.jsx)(l.az, {
                            w: "full",
                            pl: {
                                base: 4,
                                md: 12
                            },
                            pr: {
                                base: 4,
                                md: 12
                            },
                            children: (0, n.jsx)(m.G, {
                                method: "ajax",
                                onSignupClick: i
                            })
                        })]
                    })
                },
                B = e => {
                    let {
                        containerRef: t,
                        heading: i
                    } = e;
                    return (0, n.jsxs)(o.T, {
                        w: "full",
                        pl: {
                            base: 4,
                            md: 12
                        },
                        pr: {
                            base: 4,
                            md: 12
                        },
                        gap: 0,
                        children: [i, (0, n.jsx)(O.J, {
                            containerRef: t
                        })]
                    })
                },
                V = e => {
                    let {
                        containerRef: t,
                        modalState: i
                    } = e, a = (0, h.Y4)();
                    switch (i === g.VN.SignupOptions && a(I.RMt, {
                        isActionUi: !0,
                        signupLocation: "modal"
                    }), i) {
                        case g.VN.LoginOptions:
                            return (0, n.jsx)(R, {});
                        case g.VN.EmailLogin:
                            return (0, n.jsx)(D, {});
                        case g.VN.SignupOptions:
                            return (0, n.jsx)(A, {});
                        case g.VN.EmailSignup:
                            return (0, n.jsx)(B, {
                                containerRef: t
                            });
                        default:
                            return null
                    }
                },
                z = () => {
                    let e = (0, a.useRef)(null),
                        {
                            closeLoginOrSignupModal: t,
                            isOpen: i,
                            modalState: r,
                            showLoginOptions: s
                        } = (0, g.QN)(),
                        l = (0, a.useCallback)(() => {
                            t(), s()
                        }, [t, s]);
                    return (0, n.jsxs)(d.aF, {
                        isOpen: i,
                        onClose: l,
                        size: "lg",
                        returnFocusOnClose: !1,
                        children: [(0, n.jsx)(c.m, {}), (0, n.jsxs)(u.$, {
                            mx: 2,
                            px: 6,
                            children: [(0, n.jsx)(j.P, {
                                authType: r === g.VN.SignupOptions || r === g.VN.EmailSignup ? "signup" : "login"
                            }), (0, n.jsx)(x.c, {
                                ref: e,
                                children: (0, n.jsxs)(o.T, {
                                    my: 5,
                                    spacing: 8,
                                    children: [(0, n.jsx)(p.o, {
                                        children: (0, n.jsx)(f.z, {
                                            width: 150,
                                            height: 164
                                        })
                                    }), (0, n.jsx)(V, {
                                        modalState: r,
                                        containerRef: e
                                    })]
                                })
                            })]
                        })]
                    })
                }
        },
        9613: (e, t, i) => {
            i.d(t, {
                Y: () => r
            });
            var n = i(23798),
                a = i(86191);
            let r = e => (0, n.jsx)(a.I, {
                h: "21px",
                w: "17px",
                viewBox: "0 0 17 21",
                ...e,
                children: (0, n.jsx)("path", {
                    d: "M11.0718 3.70342C11.691 2.95595 12.1288 1.93086 12.1288 0.905766C12.1288 0.756273 12.1181 0.617459 12.0861 0.5C11.0825 0.542712 9.87599 1.17272 9.14997 2.02696C8.5841 2.66765 8.05026 3.70342 8.05026 4.72851C8.05026 4.88868 8.08229 5.03817 8.09297 5.09156C8.15703 5.10224 8.2638 5.11292 8.35989 5.11292C9.26741 5.11292 10.3991 4.51495 11.0718 3.70342ZM11.7764 5.33716C10.271 5.33716 9.0432 6.25547 8.2638 6.25547C7.42033 6.25547 6.33131 5.39055 5.00739 5.39055C2.51971 5.39055 0 7.45142 0 11.3275C0 13.7515 0.928876 16.3142 2.08196 17.9586C3.0749 19.3468 3.93972 20.5 5.1889 20.5C6.4274 20.5 6.97191 19.6778 8.50936 19.6778C10.0682 19.6778 10.4098 20.4786 11.7764 20.4786C13.1324 20.4786 14.0399 19.24 14.8834 18.012C15.8443 16.6025 16.2393 15.2357 16.25 15.1716C16.1753 15.1503 13.5808 14.0932 13.5808 11.1247C13.5808 8.56193 15.6201 7.4087 15.7375 7.32328C14.3922 5.39055 12.3423 5.33716 11.7764 5.33716Z",
                    fill: "currentColor"
                })
            })
        },
        11900: (e, t, i) => {
            i.d(t, {
                a: () => s
            });
            var n = i(23798),
                a = i(62104);
            i(41814);
            var r = i(41692);
            let s = e => {
                let {
                    children: t,
                    ...i
                } = e;
                return (0, n.jsx)(a.$, {
                    variant: "pillSecondaryOutline",
                    w: "full",
                    leftIcon: (0, n.jsx)(r.N, {
                        w: "20px",
                        h: "20px"
                    }),
                    ...i,
                    children: t
                })
            }
        },
        14770: (e, t, i) => {
            i.d(t, {
                D: () => d
            });
            var n = i(96116),
                a = i(67267),
                r = i(56134),
                s = i(54284),
                l = i(66196),
                o = i(23798),
                d = (0, n.R)(function(e, t) {
                    let i = (0, a.Vl)("Heading", e),
                        {
                            className: n,
                            ...d
                        } = (0, r.MN)(e);
                    return (0, o.jsx)(s.B.h2, {
                        ref: t,
                        className: (0, l.cx)("chakra-heading", e.className),
                        ...d,
                        __css: i
                    })
                });
            d.displayName = "Heading"
        },
        16728: (e, t, i) => {
            i.d(t, {
                I: () => r,
                U: () => s
            });
            var n = i(28799),
                a = i(84678);

            function r() {
                return new Promise(e => {
                    let t = () => e((0, n.Qm)() || ""),
                        i = (0, n.Qm)();
                    if (i) return void e(i);
                    (0, a.q)().then(t).catch(t)
                })
            }

            function s() {
                return (0, a.Z)(() => !(0, n.Qm)()), {
                    csrfToken: (0, n.Qm)()
                }
            }
        },
        26829: (e, t, i) => {
            i.d(t, {
                M6: () => l,
                az: () => s,
                jl: () => o
            });
            var n = i(54284),
                a = i(96116),
                r = i(23798),
                s = (0, n.B)("div");
            s.displayName = "Box";
            var l = (0, a.R)(function(e, t) {
                let {
                    size: i,
                    centerContent: n = !0,
                    ...a
                } = e;
                return (0, r.jsx)(s, {
                    ref: t,
                    boxSize: i,
                    __css: { ...n ? {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        } : {},
                        flexShrink: 0,
                        flexGrow: 0
                    },
                    ...a
                })
            });
            l.displayName = "Square";
            var o = (0, a.R)(function(e, t) {
                let {
                    size: i,
                    ...n
                } = e;
                return (0, r.jsx)(l, {
                    size: i,
                    ref: t,
                    borderRadius: "9999px",
                    ...n
                })
            });
            o.displayName = "Circle"
        },
        48465: (e, t, i) => {
            i.d(t, {
                i: () => r
            });
            var n = i(23798),
                a = i(86191);
            let r = e => (0, n.jsx)(a.I, {
                h: "22px",
                w: "22px",
                viewBox: "0 0 22 22",
                ...e,
                children: (0, n.jsx)("path", {
                    d: "M0 11.0662C0.00127985 16.5108 3.9361 21.1467 9.28038 22V14.2648H6.48977V11.0662H9.28368V8.6313C9.15878 7.47753 9.55044 6.32766 10.3524 5.49353C11.1544 4.6594 12.2837 4.22747 13.4338 4.31489C14.2594 4.32831 15.0829 4.40229 15.8977 4.53625V7.2578H14.5074C14.0287 7.19472 13.5475 7.35378 13.1993 7.69018C12.8511 8.02657 12.6735 8.5039 12.7167 8.98768V11.0662H15.7647L15.2774 14.2659H12.7167V22C18.4964 21.0809 22.5493 15.7697 21.9393 9.91413C21.3293 4.05853 16.2698 -0.291573 10.4263 0.0152787C4.58284 0.322131 0.000928892 5.17851 0 11.0662Z",
                    fill: "currentColor"
                })
            })
        },
        56545: (e, t, i) => {
            i.d(t, {
                T: () => s
            });
            var n = i(64724),
                a = i(96116),
                r = i(23798),
                s = (0, a.R)((e, t) => (0, r.jsx)(n.B, {
                    align: "center",
                    ...e,
                    direction: "column",
                    ref: t
                }));
            s.displayName = "VStack"
        },
        62336: (e, t, i) => {
            i.d(t, {
                a: () => a
            });
            var n = i(21462);

            function a(e) {
                return n.Children.toArray(e).filter(e => (0, n.isValidElement)(e))
            }
        },
        64724: (e, t, i) => {
            i.d(t, {
                B: () => u
            });
            var n = i(54284),
                a = i(23798),
                r = e => (0, a.jsx)(n.B.div, {
                    className: "chakra-stack__item",
                    ...e,
                    __css: {
                        display: "inline-block",
                        flex: "0 0 auto",
                        minWidth: 0,
                        ...e.__css
                    }
                });
            r.displayName = "StackItem";
            var s = i(23031),
                l = i(62336),
                o = i(66196),
                d = i(96116),
                c = i(21462),
                u = (0, d.R)((e, t) => {
                    let {
                        isInline: i,
                        direction: d,
                        align: u,
                        justify: x,
                        spacing: p = "0.5rem",
                        wrap: h,
                        children: f,
                        divider: g,
                        className: m,
                        shouldWrapChildren: j,
                        ...v
                    } = e, C = i ? "row" : null != d ? d : "column", y = (0, c.useMemo)(() => (function(e) {
                        let {
                            spacing: t,
                            direction: i
                        } = e, n = {
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
                            "&": (0, s.bk)(i, e => n[e])
                        }
                    })({
                        spacing: p,
                        direction: C
                    }), [p, C]), w = !!g, _ = !j && !w, b = (0, c.useMemo)(() => {
                        let e = (0, l.a)(f);
                        return _ ? e : e.map((t, i) => {
                            let n = void 0 !== t.key ? t.key : i,
                                s = i + 1 === e.length,
                                l = (0, a.jsx)(r, {
                                    children: t
                                }, n),
                                o = j ? l : t;
                            if (!w) return o;
                            let d = (0, c.cloneElement)(g, {
                                __css: y
                            });
                            return (0, a.jsxs)(c.Fragment, {
                                children: [o, s ? null : d]
                            }, n)
                        })
                    }, [g, y, w, _, j, f]), k = (0, o.cx)("chakra-stack", m);
                    return (0, a.jsx)(n.B.div, {
                        ref: t,
                        display: "flex",
                        alignItems: u,
                        justifyContent: x,
                        flexDirection: C,
                        flexWrap: h,
                        gap: w ? void 0 : p,
                        className: k,
                        ...v,
                        children: b
                    })
                });
            u.displayName = "Stack"
        },
        65539: (e, t, i) => {
            i.d(t, {
                t: () => r
            });
            var n = i(23798),
                a = i(62104);
            let r = e => {
                let {
                    children: t,
                    ...i
                } = e;
                return (0, n.jsx)(a.$, {
                    variant: "pillPrimary",
                    w: "full",
                    ...i,
                    children: t
                })
            }
        },
        65762: (e, t, i) => {
            i.d(t, {
                z: () => s
            });
            var n = i(23798),
                a = i(21462),
                r = i(86191);
            let s = e => {
                let t = (0, a.useId)(),
                    i = (0, a.useId)(),
                    s = (0, a.useId)();
                return (0, n.jsxs)(r.I, {
                    width: "142px",
                    height: "152px",
                    viewBox: "0 0 142 152",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, n.jsx)("path", {
                        d: "M98.149 54.7674L115.611 64.8212L0.752208 151.405L46.9497 21.5896L52.6553 22.972L98.149 54.7674Z",
                        fill: "url(#".concat(t, ")")
                    }), (0, n.jsx)("path", {
                        opacity: "0.55",
                        d: "M7.40925 143.583L59.7394 19.2668L69.2461 24.682L88.2597 35.5124L107.273 46.3428L116.78 51.7581L7.40925 143.583Z",
                        fill: "url(#".concat(i, ")")
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M119.775 60.4209L119.777 60.418C124.01 53.0793 121.642 46.4508 119.859 43.1896C115.709 35.5932 113.123 24.9576 113.09 17.1291C113.078 14.1927 111.78 7.24133 104.381 2.96991C96.9831 -1.3015 90.3123 1.05274 87.765 2.50771C80.9688 6.39336 70.4652 9.47187 61.8112 9.67541C58.0974 9.75982 51.1727 11.0227 46.9338 18.3581L46.9321 18.361C46.9321 18.361 46.9321 18.361 46.9288 18.3667C42.6956 25.7054 45.0643 32.3339 46.8464 35.5951C50.9972 43.1915 53.5829 53.8271 53.6159 61.6556C53.6279 64.592 54.9261 71.5434 62.3244 75.8148C69.7227 80.0862 76.3935 77.732 78.9409 76.277C85.7371 72.3913 96.2407 69.3128 104.895 69.1093C108.61 69.022 115.535 67.7591 119.774 60.4237L119.775 60.4209Z",
                        fill: "#29CC57"
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M119.775 60.4209L119.777 60.418C124.01 53.0793 121.642 46.4508 119.859 43.1896C115.709 35.5932 113.123 24.9576 113.09 17.1291C113.078 14.1927 111.78 7.24133 104.381 2.96991C96.9831 -1.3015 90.3123 1.05274 87.765 2.50771C80.9688 6.39336 70.4652 9.47187 61.8112 9.67541C58.0974 9.75982 51.1727 11.0227 46.9338 18.3581L46.9321 18.361C46.9321 18.361 46.9321 18.361 46.9288 18.3667C42.6956 25.7054 45.0643 32.3339 46.8464 35.5951C50.9972 43.1915 53.5829 53.8271 53.6159 61.6556C53.6279 64.592 54.9261 71.5434 62.3244 75.8148C69.7227 80.0862 76.3935 77.732 78.9409 76.277C85.7371 72.3913 96.2407 69.3128 104.895 69.1093C108.61 69.022 115.535 67.7591 119.774 60.4237L119.775 60.4209Z",
                        fill: "url(#".concat(s, ")")
                    }), (0, n.jsx)("path", {
                        d: "M71.6588 29.1511C69.3361 33.1742 70.7145 38.3185 74.7376 40.6412L90.631 49.8173C94.6541 52.1401 99.7985 50.7616 102.121 46.7385L109.793 33.4506L79.3306 15.8632L71.6588 29.1511Z",
                        fill: "white"
                    }), (0, n.jsx)("path", {
                        d: "M97.1348 38.8262L83.8903 31.1795L89.3857 21.661L102.63 29.3078L97.1348 38.8262Z",
                        fill: "black"
                    }), (0, n.jsxs)("defs", {
                        children: [(0, n.jsxs)("linearGradient", {
                            id: t,
                            x1: "105.577",
                            y1: "14.8788",
                            x2: "17.2228",
                            y2: "138.03",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, n.jsx)("stop", {
                                stopColor: "#D8E82E"
                            }), (0, n.jsx)("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })]
                        }), (0, n.jsxs)("linearGradient", {
                            id: i,
                            x1: "18.2456",
                            y1: "123.764",
                            x2: "93.1227",
                            y2: "-39.3232",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, n.jsx)("stop", {
                                stopColor: "white",
                                stopOpacity: "0"
                            }), (0, n.jsx)("stop", {
                                offset: "0.148027",
                                stopColor: "white"
                            }), (0, n.jsx)("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })]
                        }), (0, n.jsxs)("linearGradient", {
                            id: s,
                            x1: "104.381",
                            y1: "2.96991",
                            x2: "58.8123",
                            y2: "82.9199",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, n.jsx)("stop", {
                                offset: "0.367206",
                                stopColor: "#D8E82E",
                                stopOpacity: "0"
                            }), (0, n.jsx)("stop", {
                                offset: "1",
                                stopColor: "#D8E82E"
                            })]
                        })]
                    })]
                })
            }
        },
        68523: (e, t, i) => {
            function n(e) {
                let {
                    quality: t,
                    src: i,
                    width: n
                } = e, a = [];
                if (i || a.push("src"), n || a.push("width"), a.length > 0) throw Error("Cloudflare image loader requires ".concat(a.join(", "), " to be provided. Make sure you pass them as props to the `next/image` component. Received: ").concat(JSON.stringify({
                    quality: t,
                    src: i,
                    width: n
                })));
                if (i.startsWith("//")) throw Error('Failed to parse src "'.concat(i, '" on `cloudflare-image-loader.ts`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)'));
                if (!i.startsWith("/")) try {
                    new URL(i)
                } catch (e) {
                    throw Error('Failed to parse src "'.concat(i, '" on `cloudflare-image-loader.ts`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)'))
                }
                return "/cdn-cgi/image/".concat(["width=".concat(n), "quality=".concat(t || 75), "format=auto"].join(",")).concat(i)
            }
            i.r(t), i.d(t, {
                default: () => n
            })
        },
        76723: (e, t, i) => {
            i.d(t, {
                P: () => f
            });
            var n = i(23798),
                a = i(21462),
                r = i(23651),
                s = i(54700),
                l = i(19250),
                o = i.n(l),
                d = i(47725),
                c = i(13423),
                u = i(53094),
                x = i(47717),
                p = i(82313),
                h = i(41991);
            let f = e => {
                let {
                    authType: t = "login"
                } = e, i = (0, d.Y4)(), l = (0, s.useRouter)(), f = (0, p.e)(), {
                    extraParams: g = {},
                    nextUrl: m
                } = (0, c.QN)(), j = (m ? (0, h.Si)(m) : null) || l.asPath, v = new URL("/account/google_one_tap_login/", f);
                return v.searchParams.append("next", j), Object.keys(g).forEach(e => {
                    v.searchParams.append(e, g[e])
                }), (0, a.useEffect)(() => {
                    window.logMomentNotification = e => {
                        e.isDisplayMoment() ? e.isDisplayed() ? i(x.AEY, { ...u.uZ,
                            reason: ""
                        }) : i(x.V5E, { ...u.uZ,
                            reason: e.getNotDisplayedReason()
                        }) : e.isSkippedMoment() ? i(x.bh4, { ...u.uZ,
                            reason: e.getSkippedReason()
                        }) : e.isDismissedMoment() && i(x.YSc, { ...u.uZ,
                            reason: e.getDismissedReason()
                        })
                    }
                }, [i]), (0, n.jsxs)(r.Z, {
                    children: [(0, n.jsx)(o(), {
                        src: "https://accounts.google.com/gsi/client",
                        strategy: "afterInteractive"
                    }), (0, n.jsx)("div", {
                        id: "show-google-one-tap",
                        children: (0, n.jsx)("div", {
                            id: "g_id_onload",
                            "data-client_id": "252005599926.apps.googleusercontent.com",
                            "data-login_uri": v.toString(),
                            "data-context": "signup" === t ? "use" : "signin",
                            "data-current_view": "signup" === t ? "signup" : "signin",
                            "data-moment_callback": "logMomentNotification",
                            "data-approval_state": "auto"
                        })
                    })]
                })
            }
        },
        83770: (e, t, i) => {
            i.d(t, {
                l: () => d,
                z: () => c
            });
            var n = i(71437),
                a = i(66196),
                r = i(4373),
                s = i(16562),
                l = i(21462),
                o = i(23798),
                d = {
                    initial: "exit",
                    animate: "enter",
                    exit: "exit",
                    variants: {
                        enter: ({
                            transition: e,
                            transitionEnd: t,
                            delay: i
                        } = {}) => {
                            var a;
                            return {
                                opacity: 1,
                                transition: null != (a = null == e ? void 0 : e.enter) ? a : n.yA.enter(n.jd.enter, i),
                                transitionEnd: null == t ? void 0 : t.enter
                            }
                        },
                        exit: ({
                            transition: e,
                            transitionEnd: t,
                            delay: i
                        } = {}) => {
                            var a;
                            return {
                                opacity: 0,
                                transition: null != (a = null == e ? void 0 : e.exit) ? a : n.yA.exit(n.jd.exit, i),
                                transitionEnd: null == t ? void 0 : t.exit
                            }
                        }
                    }
                },
                c = (0, l.forwardRef)(function(e, t) {
                    let {
                        unmountOnExit: i,
                        in: n,
                        className: l,
                        transition: c,
                        transitionEnd: u,
                        delay: x,
                        ...p
                    } = e, h = n || i ? "enter" : "exit", f = !i || n && i, g = {
                        transition: c,
                        transitionEnd: u,
                        delay: x
                    };
                    return (0, o.jsx)(r.N, {
                        custom: g,
                        children: f && (0, o.jsx)(s.P.div, {
                            ref: t,
                            className: (0, a.cx)("chakra-fade", l),
                            custom: g,
                            ...d,
                            animate: h,
                            ...p
                        })
                    })
                });
            c.displayName = "Fade"
        },
        90914: (e, t, i) => {
            i.d(t, {
                Q: () => l
            });
            var n = i(23798),
                a = i(22711),
                r = i(88749),
                s = i.n(r);
            let l = e => {
                let {
                    chakraLinkProps: t,
                    children: i,
                    href: r,
                    nextLinkProps: l
                } = e;
                return (0, n.jsx)(s(), {
                    href: r,
                    ...l,
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0, n.jsx)(a.N, { ...t,
                        children: i
                    })
                })
            }
        },
        93383: (e, t, i) => {
            i.d(t, {
                $: () => m
            });
            var n = i(54284),
                a = i(7337),
                r = i(71437),
                s = i(66196),
                l = i(4373),
                o = i(16562),
                d = i(21462),
                c = i(23798),
                u = {
                    initial: "exit",
                    animate: "enter",
                    exit: "exit",
                    variants: {
                        exit: ({
                            reverse: e,
                            initialScale: t,
                            transition: i,
                            transitionEnd: n,
                            delay: a
                        }) => {
                            var s;
                            return {
                                opacity: 0,
                                ...e ? {
                                    scale: t,
                                    transitionEnd: null == n ? void 0 : n.exit
                                } : {
                                    transitionEnd: {
                                        scale: t,
                                        ...null == n ? void 0 : n.exit
                                    }
                                },
                                transition: null != (s = null == i ? void 0 : i.exit) ? s : r.yA.exit(r.jd.exit, a)
                            }
                        },
                        enter: ({
                            transitionEnd: e,
                            transition: t,
                            delay: i
                        }) => {
                            var n;
                            return {
                                opacity: 1,
                                scale: 1,
                                transition: null != (n = null == t ? void 0 : t.enter) ? n : r.yA.enter(r.jd.enter, i),
                                transitionEnd: null == e ? void 0 : e.enter
                            }
                        }
                    }
                };
            (0, d.forwardRef)(function(e, t) {
                let {
                    unmountOnExit: i,
                    in: n,
                    reverse: a = !0,
                    initialScale: r = .95,
                    className: d,
                    transition: x,
                    transitionEnd: p,
                    delay: h,
                    ...f
                } = e, g = !i || n && i, m = n || i ? "enter" : "exit", j = {
                    initialScale: r,
                    reverse: a,
                    transition: x,
                    transitionEnd: p,
                    delay: h
                };
                return (0, c.jsx)(l.N, {
                    custom: j,
                    children: g && (0, c.jsx)(o.P.div, {
                        ref: t,
                        className: (0, s.cx)("chakra-offset-slide", d),
                        ...u,
                        animate: m,
                        custom: j,
                        ...f
                    })
                })
            }).displayName = "ScaleFade";
            var x = {
                    slideInBottom: { ...a.w,
                        custom: {
                            offsetY: 16,
                            reverse: !0
                        }
                    },
                    slideInRight: { ...a.w,
                        custom: {
                            offsetX: 16,
                            reverse: !0
                        }
                    },
                    slideInTop: { ...a.w,
                        custom: {
                            offsetY: -16,
                            reverse: !0
                        }
                    },
                    slideInLeft: { ...a.w,
                        custom: {
                            offsetX: -16,
                            reverse: !0
                        }
                    },
                    scale: { ...u,
                        custom: {
                            initialScale: .95,
                            reverse: !0
                        }
                    },
                    none: {}
                },
                p = (0, n.B)(o.P.section),
                h = (0, d.forwardRef)((e, t) => {
                    let {
                        preset: i,
                        motionProps: n = x[i || "none"],
                        ...a
                    } = e;
                    return (0, c.jsx)(p, {
                        ref: t,
                        ...n,
                        ...a
                    })
                });
            h.displayName = "ModalTransition";
            var f = i(76142),
                g = i(220),
                m = (0, i(96116).R)((e, t) => {
                    let {
                        className: i,
                        children: a,
                        containerProps: r,
                        motionProps: l,
                        ...o
                    } = e, {
                        getDialogProps: d,
                        getDialogContainerProps: u
                    } = (0, g.k3)(), x = d(o, t), p = u(r), m = (0, s.cx)("chakra-modal__content", i), j = (0, g.x5)(), v = {
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        width: "100%",
                        outline: 0,
                        ...j.dialog
                    }, C = {
                        display: "flex",
                        width: "100vw",
                        height: "$100vh",
                        position: "fixed",
                        left: 0,
                        top: 0,
                        ...j.dialogContainer
                    }, {
                        motionPreset: y
                    } = (0, g.k3)();
                    return (0, c.jsx)(f.u, {
                        children: (0, c.jsx)(n.B.div, { ...p,
                            className: "chakra-modal__content-container",
                            tabIndex: -1,
                            __css: C,
                            children: (0, c.jsx)(h, {
                                preset: y,
                                motionProps: l,
                                className: m,
                                ...x,
                                __css: v,
                                children: a
                            })
                        })
                    })
                });
            m.displayName = "ModalContent"
        }
    }
]);