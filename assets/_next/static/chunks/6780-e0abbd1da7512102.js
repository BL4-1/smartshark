try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "29db50f3-706d-4e63-a08b-ffc5293fcdd3", e._sentryDebugIdIdentifier = "sentry-dbid-29db50f3-706d-4e63-a08b-ffc5293fcdd3")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6780], {
        1654: (e, t, r) => {
            r.d(t, {
                AL: () => L,
                ej: () => g
            });
            var s = r(23798),
                i = r(21462),
                l = r(86027),
                n = r(76759),
                a = r(56134),
                o = r(28439),
                d = r(26829),
                c = r(17241),
                h = r(59979),
                u = r(32371),
                x = r(49081),
                f = r(20495),
                p = r(55335);
            let g = (0, c.A)();
            var m = function(e) {
                return e.Waiting = "Waiting", e.AnimateIn = "AnimateIn", e.AnimateOut = "AnimateOut", e.Completed = "Completed", e.Unneeded = "Unneeded", e
            }(m || {});
            let j = {
                    animationDuration: 500,
                    maxWaitBeforeSkipping: 1e3,
                    waitBeforeAnimateOut: 2e3
                },
                L = e => {
                    var t, r;
                    let {
                        streakButton: c
                    } = e, m = (0, f.m)(), L = (0, h.Ub)("(max-width: 880px)", {
                        defaultValue: !0
                    }), C = (0, h.Ub)("(max-width: 560px)"), [b, w] = (0, n.rd)("space", ["4", "8"]), v = (0, n.rd)("zIndices", "relativeFront"), [y, k] = (0, i.useState)("Waiting"), [M, A] = (0, i.useState)(void 0), [S, R] = (0, i.useState)(void 0), [H, W] = (0, i.useState)();
                    (0, i.useEffect)(() => {
                        m && A("true" === (0, p.EN)("sessionStorage", "icp.justExtendedStreak"))
                    }, [m]), (0, i.useEffect)(() => {
                        let e;
                        return "AnimateIn" === y && (e = setTimeout(() => {
                            k("AnimateOut")
                        }, j.waitBeforeAnimateOut)), "AnimateOut" === y && (e = setTimeout(() => {
                            k("Completed")
                        }, j.animationDuration)), "Waiting" === y && (e = setTimeout(() => {
                            k("Unneeded")
                        }, j.maxWaitBeforeSkipping)), () => clearTimeout(e)
                    }, [y]), (0, i.useEffect)(() => {
                        let e = e => {
                            R(e)
                        };
                        return g.on("lessonPathMeasurements", e), () => {
                            g.off("lessonPathMeasurements", e)
                        }
                    }, []), (0, i.useEffect)(() => {
                        c && W({
                            streakButtonRight: window.innerWidth - c.getBoundingClientRect().right,
                            streakButtonWidth: c.getBoundingClientRect().width
                        })
                    }, [c]), (0, i.useEffect)(() => {
                        !1 === M ? k("Unneeded") : void 0 !== S && M && "Waiting" === y && k("AnimateIn")
                    }, [y, S, M]);
                    let _ = null != (t = null == H ? void 0 : H.streakButtonRight) ? t : "80px",
                        B = null != (r = null == H ? void 0 : H.streakButtonWidth) ? r : "60px",
                        z = {
                            opacity: 0,
                            right: C ? "16px" : "".concat(null == S ? void 0 : S.headerRight, "px"),
                            width: C ? "calc(100% - 32px)" : "".concat(null == S ? void 0 : S.headerWidth, "px")
                        },
                        I = {
                            opacity: 0,
                            right: _,
                            width: B
                        };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(x.e_, {
                            initial: z,
                            animate: function() {
                                switch (y) {
                                    case "Waiting":
                                        return z;
                                    case "AnimateIn":
                                        return { ...z,
                                            opacity: 1
                                        };
                                    case "AnimateOut":
                                        return { ...I,
                                            transition: {
                                                duration: j.animationDuration / 1e3,
                                                ease: "easeOut",
                                                opacity: {
                                                    delay: j.animationDuration / 1e3 * .9,
                                                    duration: j.animationDuration / 1e3 * .1
                                                }
                                            }
                                        };
                                    case "Completed":
                                        return { ...I,
                                            zIndex: -1
                                        };
                                    default:
                                        return {}
                                }
                            }(),
                            position: "absolute",
                            backgroundColor: "pear.500",
                            border: "2px solid",
                            display: "flex",
                            borderColor: "pear.600",
                            h: (0, a._u)("100%").subtract(b).toString(),
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "54px",
                            overflow: "hidden",
                            zIndex: ["Completed", "Unneeded"].includes(y) ? -1 : (0, a._u)(v).add(1).toString(),
                            children: [(0, s.jsx)(u.c, {
                                completed: !0,
                                position: "absolute",
                                left: "AnimateOut" === y ? w : b,
                                transition: "left ".concat(j.animationDuration / 2, "ms"),
                                fill: {
                                    base: "pear.500",
                                    md: "black"
                                },
                                width: "AnimateOut" === y ? "7" : "6",
                                height: "AnimateOut" === y ? "8" : "7"
                            }), (0, s.jsx)(o.E, {
                                fontWeight: "bold",
                                whiteSpace: "nowrap",
                                opacity: +!!["Waiting", "AnimateIn"].includes(y),
                                transition: "opacity ".concat(j.animationDuration / 2, "ms"),
                                children: (0, s.jsx)(l.A, {
                                    defaultMessage: "Streak extended!",
                                    id: "aHRRFd"
                                })
                            })]
                        }), (0, s.jsx)(d.az, {
                            position: "absolute",
                            backgroundColor: "white",
                            w: {
                                base: L ? "100%" : (0, a._u)("100%").subtract("150px").toString(),
                                xl: "50%"
                            },
                            h: "100%",
                            right: "0",
                            zIndex: ["Completed", "Unneeded"].includes(y) ? -1 : "relativeFront",
                            opacity: +!!["Waiting", "AnimateIn"].includes(y),
                            transition: "Unneeded" === y ? "unset" : "opacity ".concat(.3 * j.animationDuration, "ms ease-in-out ").concat(.7 * j.animationDuration, "ms")
                        })]
                    })
                }
        },
        8964: (e, t, r) => {
            r.d(t, {
                Gp: () => L,
                rN: () => j
            });
            var s = r(23798);
            r(21462);
            var i = r(41929),
                l = r(57552),
                n = r(22711),
                a = r(62104),
                o = r(88749),
                d = r.n(o),
                c = r(54700),
                h = r(47725),
                u = r(74049),
                x = r(47717),
                f = r(33668);
            let p = {
                    label: (0, i.zR)({
                        defaultMessage: "Gift Premium",
                        id: "lu5sAc"
                    }),
                    link: "/gift-premium/"
                },
                g = {
                    label: (0, i.zR)({
                        defaultMessage: "Start trial",
                        id: "/YZ/sw"
                    }),
                    link: "/subscribe/"
                },
                m = {
                    label: (0, i.zR)({
                        defaultMessage: "Go Premium",
                        id: "i/qpb5"
                    }),
                    link: "/subscribe/"
                };

            function j() {
                var e, t, r, s, i;
                let {
                    data: l,
                    error: n,
                    loading: a
                } = (0, u.XAw)({}), o = (0, c.useRouter)();
                if (a || n || o.pathname.startsWith("/subscribe")) return null;
                let d = null != (r = null == l || null == (e = l.session) ? void 0 : e.activeUser) ? r : null;
                return d ? (i = null != (s = null == l || null == (t = l.session) ? void 0 : t.trialOffering) ? s : null, (0, f.q)(d) ? i ? g : m : p) : null
            }(0, i.zR)({
                defaultMessage: "Refer a friend",
                id: "VyKjyg"
            });
            let L = e => {
                let {
                    label: t,
                    link: r,
                    ...i
                } = e, o = (0, l.A)().formatMessage(t), c = (0, h.Y4)();
                return (0, s.jsx)(n.N, {
                    as: d(),
                    fontSize: "sm",
                    _hover: {
                        opacity: 1,
                        textDecoration: "none"
                    },
                    href: r,
                    "data-testid": "app_header_premium_button",
                    onClick: () => {
                        c(x.tlL, {
                            isActionUi: !0
                        })
                    },
                    ...i,
                    children: (0, s.jsx)(a.$, {
                        as: "span",
                        variant: "secondary",
                        colorScheme: "iridescent",
                        px: {
                            base: 1,
                            sm: 2,
                            md: 4
                        },
                        "aria-label": o,
                        borderWidth: 2,
                        height: {
                            base: 8,
                            lg: 12
                        },
                        lineHeight: "unset",
                        sx: {
                            fontSize: "md",
                            "@media screen and (max-width: 24.875rem)": {
                                fontSize: "xs"
                            }
                        },
                        children: o
                    })
                })
            }
        },
        20495: (e, t, r) => {
            r.d(t, {
                m: () => i
            });
            var s = r(21462);
            let i = () => {
                let [e, t] = (0, s.useState)(!1);
                return (0, s.useEffect)(() => {
                    t(!0)
                }, []), e
            }
        },
        26569: (e, t, r) => {
            r.d(t, {
                m: () => n
            });
            var s = r(23798),
                i = r(21462),
                l = r(86191);
            let n = e => {
                let t = (0, i.useId)();
                return (0, s.jsxs)(l.I, {
                    h: "16px",
                    w: "16px",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    color: "black",
                    ...e,
                    children: [(0, s.jsx)("g", {
                        clipPath: "url(#".concat(t, ")"),
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM7 6V4H9V6H7ZM9 12V9V7H7H6V9H7V12H9Z",
                            fill: "currentColor"
                        })
                    }), (0, s.jsx)("defs", {
                        children: (0, s.jsx)("clipPath", {
                            id: t,
                            children: (0, s.jsx)("rect", {
                                width: "16",
                                height: "16",
                                fill: "white"
                            })
                        })
                    })]
                })
            }
        },
        26780: (e, t, r) => {
            r.d(t, {
                Y: () => eO
            });
            var s = r(23798),
                i = r(21462),
                l = r(86027),
                n = r(22711),
                a = r(5732),
                o = r(26829),
                d = r(62104),
                c = r(76759),
                h = r(83902),
                u = r(95046),
                x = r.n(u),
                f = r(88749),
                p = r.n(f),
                g = r(54700),
                m = r(59979),
                j = r(2651),
                L = r(13423),
                C = r(57552),
                b = r(82095),
                w = r(90143),
                v = r(82166),
                y = r(70501),
                k = r(86191);
            let M = e => (0, s.jsxs)(k.I, {
                width: 4,
                height: 4,
                viewBox: "0 0 16 16",
                ...e,
                children: [(0, s.jsx)("path", {
                    d: "M16 4H0V2H16V4Z",
                    fill: "currentColor"
                }), (0, s.jsx)("path", {
                    d: "M16 9H0V7H16V9Z",
                    fill: "currentColor"
                }), (0, s.jsx)("path", {
                    d: "M0 14H16V12H0V14Z",
                    fill: "currentColor"
                })]
            });
            var A = r(96116),
                S = r(59269),
                R = r(81761),
                H = r(57991),
                W = r(47725),
                _ = r(42562);
            let B = e => (0, s.jsx)(k.I, {
                width: "24px",
                height: "18px",
                viewBox: "0 0 24 18",
                ...e,
                children: (0, s.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24 17.3333L22.6667 6.66667L17.3333 0H6.66667L1.33333 6.66667L0 17.3333H24ZM2.26556 15.3333H5.4797L2.87113 10.4888L2.26556 15.3333ZM21.1289 10.489L18.5204 15.3333H21.7344L21.1289 10.489ZM16.7238 2.43962L20.3721 6.99997H13.8217L16.7238 2.43962ZM9.36721 2H14.6329L12.0001 6.13734L9.36721 2ZM3.62794 6.99997L7.27629 2.43953L10.1784 6.99997H3.62794ZM13.6743 8.99997L16.6667 14.5574L19.6592 8.99997H13.6743ZM10.3258 8.99997H4.34094L7.33339 14.5574L10.3258 8.99997Z",
                    fill: "currentColor"
                })
            });
            var z = r(68433),
                I = r(74049),
                Z = r(53094),
                E = r(47717),
                P = r(6225);
            let D = (0, A.R)((e, t) => {
                    let {
                        children: r,
                        isExternal: i = !1,
                        ...l
                    } = e;
                    return (0, s.jsx)(S.D, {
                        as: i ? "a" : p(),
                        ref: t,
                        px: 6,
                        py: 3,
                        color: "black",
                        fontSize: {
                            base: "sm",
                            sm: "md"
                        },
                        _focus: {
                            bg: "gray.100"
                        },
                        ...l,
                        children: r
                    })
                }),
                U = () => (0, s.jsx)(R.N, {
                    borderColor: "gray.300"
                }),
                O = () => {
                    var e, t, r;
                    let i = (0, W.Y4)(),
                        {
                            data: n
                        } = (0, I.XAw)({}),
                        a = null != (t = null == n || null == (e = n.session) ? void 0 : e.activeUser) ? t : null,
                        o = ["USA", "Canada"].includes(null != (r = null == a ? void 0 : a.countryName) ? r : "");
                    return (0, s.jsxs)(H.c, {
                        pos: "relative",
                        mt: 4,
                        mr: {
                            base: 0,
                            sm: -2
                        },
                        w: {
                            base: "2xs",
                            sm: "xs"
                        },
                        border: 0,
                        boxShadow: "center.lg",
                        bg: "white",
                        "data-testid": "header_links_menu",
                        children: [(0, s.jsx)(z.o, {
                            pos: "absolute",
                            top: "-11px",
                            right: 3,
                            direction: "up",
                            color: "white",
                            css: {
                                path: {
                                    filter: "drop-shadow(var(--bits-shadows-center-lg))"
                                }
                            }
                        }), (null == a ? void 0 : a.isStaff) && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsxs)(D, {
                                href: "https://retool.brilliant.org/app/campgrounds/Home",
                                isExternal: !0,
                                children: [(0, s.jsx)(B, {
                                    mr: 2
                                }), (0, s.jsx)(l.A, {
                                    defaultMessage: "Campgrounds",
                                    id: "124tCD"
                                })]
                            }), (0, s.jsx)(U, {})]
                        }), (0, s.jsx)(D, {
                            href: P.QQ,
                            children: (0, s.jsx)(l.A, {
                                defaultMessage: "Settings",
                                id: "D3idYv"
                            })
                        }), (null == a ? void 0 : a.isStaff) && (0, s.jsx)(D, {
                            href: "/profile/",
                            isExternal: !0,
                            children: (0, s.jsx)(l.A, {
                                defaultMessage: "Profile",
                                id: "itPgxd"
                            })
                        }), (0, s.jsx)(U, {}), (0, s.jsx)(D, {
                            href: P.Hs,
                            children: (0, s.jsx)(l.A, {
                                defaultMessage: "About",
                                id: "g5pX+a"
                            })
                        }), o && (0, s.jsx)(D, {
                            href: "/careers/",
                            children: (0, s.jsx)(l.A, {
                                defaultMessage: "Work at Brilliant!",
                                id: "Te3CYK"
                            })
                        }), (0, s.jsx)(D, {
                            href: "/help/",
                            onClick: () => i(E.NZj, Z.LP),
                            isExternal: !0,
                            children: (0, s.jsx)(l.A, {
                                defaultMessage: "Help",
                                id: "SENRqu"
                            })
                        }), (0, s.jsx)(D, {
                            href: P.m6.X,
                            isExternal: !0,
                            target: "_blank",
                            children: (0, s.jsx)(l.A, {
                                defaultMessage: "Product updates",
                                id: "0hvnCt"
                            })
                        }), (0, s.jsx)(U, {}), (null == a ? void 0 : a.isStaff) && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(D, {
                                href: "/utils/create_test_user/",
                                isExternal: !0,
                                children: (0, s.jsx)(l.A, {
                                    defaultMessage: "Create test user",
                                    id: "28bevW"
                                })
                            }), (0, s.jsx)(D, {
                                href: "/welcome/",
                                children: (0, s.jsx)(l.A, {
                                    defaultMessage: "Redo the NUX",
                                    id: "mAKUFN"
                                })
                            }), (0, s.jsx)(U, {})]
                        }), (0, s.jsx)(_.z, {
                            children: e => (0, s.jsx)(S.D, {
                                as: "button",
                                w: "100%",
                                textAlign: "left",
                                px: 6,
                                ...e,
                                children: (0, s.jsx)(l.A, {
                                    defaultMessage: "Log out",
                                    id: "PlBReU"
                                })
                            })
                        })]
                    })
                },
                V = e => {
                    let t = (0, C.A)(),
                        {
                            isOpen: r,
                            onClose: i,
                            onOpen: l
                        } = (0, b.j)();
                    return (0, s.jsxs)(w.W, {
                        onOpen: l,
                        onClose: i,
                        placement: "bottom-end",
                        isLazy: !0,
                        ...e,
                        children: [(0, s.jsx)(v.I, {
                            as: "button",
                            role: "group",
                            "data-testid": "header_links_dropdown_toggle",
                            "aria-label": t.formatMessage({
                                defaultMessage: "Menu",
                                id: "tKMlOc"
                            }),
                            children: (0, s.jsx)(y.s, {
                                pos: "relative",
                                p: {
                                    base: 2,
                                    sm: 3
                                },
                                mx: {
                                    base: 0,
                                    sm: -2
                                },
                                borderRadius: "md",
                                background: r ? "blackAlpha.200" : "transparent",
                                transition: "background-color 100ms linear",
                                _groupHover: {
                                    background: "gray.200"
                                },
                                children: (0, s.jsx)(M, {})
                            })
                        }), (0, s.jsx)(O, {})]
                    })
                };
            var T = r(28439),
                N = r(56545),
                F = r(14770),
                Y = r(18500),
                K = r(45838),
                X = r(82542),
                G = r(28242),
                $ = r(47966),
                q = r(16968),
                J = r(23097),
                Q = r(42469),
                ee = r(9812),
                et = r(19288),
                er = r(93761),
                es = r(32587),
                ei = r(40796);
            let el = e => {
                    let {
                        filled: t = !1,
                        ...r
                    } = e, i = (0, ei.Bi)(), l = (0, ei.Bi)(), n = (0, ei.Bi)(), a = (0, ei.Bi)(), [o, d, h, u, x, f, p, g, m, j, L, C] = (0, c.rd)("colors", ["yellow.400", "yellow.500", "yellow.600", "yellow.700", "yellow.800", "yellow.900", "gray.400", "gray.500", "gray.600", "gray.700", "gray.800", "gray.900"]);
                    return (0, s.jsxs)(k.I, {
                        viewBox: "0 0 51 94",
                        width: "51px",
                        height: "94px",
                        fill: "none",
                        opacity: t ? 1 : .3,
                        ...r,
                        children: [(0, s.jsx)("g", {
                            clipPath: "url(#".concat(i, ")"),
                            children: (0, s.jsxs)("g", {
                                clipPath: "url(#".concat(l, ")"),
                                children: [(0, s.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M34.5185 74.5894L25.7161 79.6715L16.9137 74.5894L16.9136 64.4252L23.6247 60.5506L23.6247 38.6682L27.3397 37.4599L27.3397 37.4612L35.8845 34.6834L35.8845 34.6807L35.8898 34.679L35.8845 34.6695L35.8845 22.4941L27.8416 25.0879L23.6247 26.4012L23.6247 23.8971L23.6247 22.5444L24.9121 22.1293L35.8845 18.5907L35.8845 12.2791C35.8845 9.43802 33.1758 7.3795 30.4384 8.14028L18.2668 11.5231C16.6591 11.9699 15.5466 13.4338 15.5466 15.1024L15.5466 50.4407L7.83408 54.8935C5.53527 56.2207 4.11914 58.6735 4.11914 61.328L4.11914 77.6867C4.11914 80.3411 5.53527 82.7939 7.83408 84.1211L22.0011 92.3005C24.2999 93.6277 27.1322 93.6277 29.431 92.3005L43.5981 84.1211C45.8969 82.7939 47.313 80.3411 47.313 77.6867L47.313 61.328C47.313 58.6735 45.8969 56.2207 43.5981 54.8935L35.8845 50.4401L35.8845 38.6631L27.3397 41.4409L27.3397 60.2805L34.5185 64.4252L34.5185 74.5894Z",
                                    fill: t ? u : j
                                }), (0, s.jsx)("mask", {
                                    id: n,
                                    style: {
                                        maskType: "alpha"
                                    },
                                    maskUnits: "userSpaceOnUse",
                                    x: "4",
                                    y: "7",
                                    width: "44",
                                    height: "87",
                                    children: (0, s.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M34.5019 74.5892L25.6995 79.6712L16.897 74.5892L16.897 64.425L23.6081 60.5504L23.6081 38.6682L27.3231 37.4599L27.3231 37.461L35.8679 34.6832L35.8679 34.6807L35.8738 34.6787L35.8679 34.6681L35.8679 22.4938L27.8053 25.094L23.6081 26.4011L23.6081 23.8968L23.6081 22.5442L24.8955 22.129L35.8679 18.5905L35.8679 12.2789C35.8679 9.43778 33.1592 7.37925 30.4218 8.14004L18.2502 11.5229C16.6425 11.9697 15.53 13.4336 15.53 15.1022L15.53 50.4404L7.81748 54.8933C5.51866 56.2205 4.10254 58.6733 4.10254 61.3277L4.10254 77.6864C4.10254 80.3409 5.51867 82.7937 7.81748 84.1209L21.9845 92.3002C24.2833 93.6275 27.1156 93.6275 29.4144 92.3002L43.5815 84.1209C45.8803 82.7937 47.2964 80.3409 47.2964 77.6864L47.2964 61.3277C47.2964 58.6733 45.8803 56.2205 43.5815 54.8933L35.8679 50.4398L35.8679 38.6629L27.3231 41.4407L27.3231 60.2803L34.5019 64.425L34.5019 74.5892Z",
                                        fill: t ? d : g
                                    })
                                }), (0, s.jsxs)("g", {
                                    mask: "url(#".concat(n, ")"),
                                    children: [(0, s.jsx)("rect", {
                                        x: "-0.989258",
                                        y: "90.8528",
                                        width: "26.7055",
                                        height: "10.1932",
                                        transform: "rotate(-90 -0.989258 90.8528)",
                                        fill: t ? h : m
                                    }), (0, s.jsx)("rect", {
                                        x: "25.7275",
                                        y: "95.4495",
                                        width: "26.7055",
                                        height: "6.24292",
                                        transform: "rotate(-90 25.7275 95.4495)",
                                        fill: t ? x : L
                                    }), (0, s.jsx)("rect", {
                                        width: "11.5213",
                                        height: "9.21356",
                                        transform: "matrix(-4.37114e-08 -1 -1 4.37114e-08 24.8652 65.1226)",
                                        fill: t ? f : C
                                    }), (0, s.jsx)("rect", {
                                        width: "11.5213",
                                        height: "17.2607",
                                        transform: "matrix(-4.37114e-08 -1 -1 4.37114e-08 37.1943 23.3843)",
                                        fill: t ? f : C
                                    }), (0, s.jsx)("rect", {
                                        width: "13.324",
                                        height: "17.2607",
                                        transform: "matrix(-4.37114e-08 -1 -1 4.37114e-08 37.1943 39.8523)",
                                        fill: t ? f : C
                                    }), (0, s.jsx)("rect", {
                                        width: "26.7055",
                                        height: "16.3686",
                                        transform: "matrix(-4.37114e-08 -1 -1 4.37114e-08 48.3438 95.4495)",
                                        fill: t ? f : C
                                    })]
                                }), (0, s.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M34.5097 68.7056L25.7073 73.7877L16.9049 68.7056L16.9049 58.5414L23.6159 54.6668L23.6159 32.7842L27.3309 31.5759L27.3309 31.5772L35.8757 28.7994L35.8757 28.7967L35.8817 28.7947L35.8757 28.7841L35.8757 16.61L27.8324 19.2039L23.6159 20.5171L23.6159 18.013L23.6159 16.6604L24.9033 16.2452L35.8757 12.7067L35.8757 6.39534C35.8757 3.55423 33.167 1.49571 30.4297 2.25649L18.258 5.63933C16.6504 6.08614 15.5378 7.55002 15.5378 9.21861L15.5378 44.5569L7.82529 49.0097C5.52648 50.3369 4.11035 52.7897 4.11035 55.4442L4.11035 71.8029C4.11035 74.4573 5.52648 76.9101 7.82529 78.2373L21.9923 86.4167C24.2912 87.7439 27.1234 87.7439 29.4222 86.4167L43.5893 78.2373C45.8881 76.9101 47.3042 74.4573 47.3042 71.8029L47.3042 55.4442C47.3042 52.7897 45.8881 50.3369 43.5893 49.0097L35.8757 44.5563L35.8757 32.7791L27.3309 35.5569L27.3309 54.3967L34.5097 58.5414L34.5097 68.7056Z",
                                    fill: t ? d : g
                                }), (0, s.jsx)("mask", {
                                    id: a,
                                    style: {
                                        maskType: "alpha"
                                    },
                                    maskUnits: "userSpaceOnUse",
                                    x: "4",
                                    y: "2",
                                    width: "44",
                                    height: "86",
                                    children: (0, s.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M34.5058 68.7046L25.7034 73.7867L16.901 68.7046L16.901 58.5405L23.612 54.6658L23.612 32.783L27.327 31.5747L27.327 31.5762L35.8718 28.7984L35.8718 28.7955L35.8778 28.7936L35.8718 28.783L35.8718 16.609L27.8444 19.1978L23.612 20.516L23.612 18.0121L23.612 16.6594L24.8994 16.2442L35.8718 12.7057L35.8718 6.39436C35.8718 3.55325 33.1631 1.49473 30.4257 2.25552L18.2541 5.63836C16.6464 6.08517 15.5339 7.54904 15.5339 9.21764L15.5339 44.5559L7.82138 49.0087C5.52257 50.336 4.10644 52.7888 4.10644 55.4432L4.10645 71.8019C4.10645 74.4563 5.52257 76.9091 7.82139 78.2364L21.9884 86.4157C24.2873 87.7429 27.1195 87.7429 29.4183 86.4157L43.5854 78.2364C45.8842 76.9091 47.3003 74.4563 47.3003 71.8019L47.3003 55.4432C47.3003 52.7888 45.8842 50.336 43.5854 49.0087L35.8718 44.5553L35.8718 32.7781L27.327 35.5559L27.327 54.3958L34.5058 58.5405L34.5058 68.7046Z",
                                        fill: t ? d : g
                                    })
                                }), (0, s.jsx)("g", {
                                    mask: "url(#".concat(a, ")"),
                                    children: (0, s.jsx)("rect", {
                                        x: "-17.335",
                                        y: "44.6023",
                                        width: "37.6816",
                                        height: "77.6601",
                                        transform: "rotate(-60 -17.335 44.6023)",
                                        fill: t ? o : p
                                    })
                                })]
                            })
                        }), (0, s.jsxs)("defs", {
                            children: [(0, s.jsx)("clipPath", {
                                id: i,
                                children: (0, s.jsx)("rect", {
                                    width: "50",
                                    height: "93.75",
                                    fill: "white",
                                    transform: "translate(0.5)"
                                })
                            }), (0, s.jsx)("clipPath", {
                                id: l,
                                children: (0, s.jsx)("rect", {
                                    width: "85.6477",
                                    height: "85.6477",
                                    fill: "white",
                                    transform: "translate(-34.3896 47.521) rotate(-45)"
                                })
                            })]
                        })]
                    })
                },
                en = e => {
                    let {
                        filled: t = !1,
                        ...r
                    } = e, [i, l] = (0, c.rd)("colors", ["blackAlpha.200", "yellow.500"]);
                    return (0, s.jsx)(k.I, {
                        viewBox: "0 0 24 25",
                        width: "25px",
                        height: "24px",
                        fill: "none",
                        ...r,
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.4817 19.6977L11.999 21.1161L9.52933 19.6752L9.54232 16.816L11.4342 15.7351L11.4622 9.58023L14.9175 8.47371L14.9161 8.47119L14.9316 5.04609L12.6755 5.76237L11.4778 6.12943L11.481 5.42512L11.4828 5.04461L11.8454 4.92947L14.9366 3.94805L14.9447 2.17121C14.9483 1.37199 14.189 0.789447 13.418 0.999965L9.98967 1.93603C9.53685 2.05967 9.22203 2.47004 9.2199 2.93943L9.17475 12.8808L7.00035 14.123C6.35198 14.4934 5.95048 15.1816 5.94709 15.9283L5.92619 20.5302C5.9228 21.2769 6.31803 21.9687 6.96301 22.345L10.9379 24.664C11.5828 25.0403 12.3796 25.0439 13.0279 24.6735L17.0237 22.3907C17.672 22.0202 18.0735 21.3321 18.0769 20.5853L18.0978 15.9835C18.1012 15.2368 17.706 14.545 17.061 14.1687L14.8959 12.9056L14.911 9.59355L12.5037 10.3641L12.4796 15.6628L14.4947 16.8385L14.4817 19.6977Z",
                            fill: t ? l : i
                        })
                    })
                };
            var ea = r(70480),
                eo = r(35498),
                ed = r(40996),
                ec = r(72526);
            let eh = (0, A.R)((e, t) => {
                    let {
                        remainingKeys: r,
                        ...i
                    } = e;
                    return (0, s.jsx)(d.$, {
                        ref: t,
                        variant: {
                            base: "unstyled",
                            lg: "secondaryNoColorScheme"
                        },
                        minW: {
                            base: void 0,
                            lg: "74px"
                        },
                        py: {
                            base: void 0,
                            lg: "9px"
                        },
                        px: {
                            base: void 0,
                            lg: "5"
                        },
                        position: "relative",
                        isolation: "isolate",
                        ...i,
                        children: (0, s.jsx)(a.z, {
                            alignItems: "center",
                            cursor: "pointer",
                            children: (0, s.jsxs)(a.z, {
                                gap: "0",
                                px: {
                                    base: 2,
                                    lg: 0
                                },
                                children: [(0, s.jsx)(T.E, {
                                    as: "span",
                                    fontWeight: "bold",
                                    fontSize: "lg",
                                    children: r
                                }), (0, s.jsx)(en, {
                                    filled: r > 0
                                })]
                            })
                        })
                    })
                }),
                eu = e => {
                    let {
                        keysResetAt: t,
                        remainingKeys: r,
                        variant: n
                    } = e, o = (0, g.useRouter)(), d = (0, W.Y4)(), c = (e => {
                        let t = (0, C.A)(),
                            r = (0, ed.a)(e, ["day", "hour", "minute", "second"]),
                            s = [r.days > 0 ? "".concat(r.days, "d") : "", r.hours > 0 ? "".concat(r.hours, "h") : "", r.minutes > 0 ? "".concat(r.minutes, "m") : ""],
                            i = s.findIndex(e => !!e),
                            l = -1 !== i ? s.slice(i, i + 2).join(" ") : r.seconds > 0 ? "1m" : "0m";
                        return t.formatMessage({
                            defaultMessage: "You’ll get two new keys in <emphasis>{time}</emphasis>",
                            id: "0rbXlF"
                        }, {
                            emphasis: eo.Y,
                            time: l
                        })
                    })(t), {
                        isLoading: h,
                        startLoading: u
                    } = (0, ec.C)({
                        timeout: 4e3
                    }), x = "popover" === n ? "keys_icon_popover" : "keys_icon_modal", f = !o.pathname.startsWith("/subscribe");
                    return (0, i.useEffect)(() => {
                        d(E.Evo, {
                            isActionUi: !0,
                            keysRemaining: r,
                            source: x
                        })
                    }, []), (0, s.jsxs)(N.T, {
                        alignItems: "center",
                        gap: 6,
                        w: "full",
                        children: [(0, s.jsxs)(N.T, {
                            alignItems: "center",
                            gap: 4,
                            children: [(0, s.jsxs)(a.z, {
                                justifyContent: "center",
                                gap: 1,
                                children: [(0, s.jsx)(T.E, {
                                    fontSize: "60px",
                                    fontWeight: 700,
                                    lineHeight: "75px",
                                    children: r
                                }), (0, s.jsx)(el, {
                                    filled: r > 0
                                })]
                            }), (0, s.jsx)(N.T, {
                                alignItems: "center",
                                gap: "popover" === n ? 2 : 4,
                                children: r > 0 ? (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)(F.D, {
                                        as: "h4",
                                        fontSize: "xl",
                                        lineHeight: "125%",
                                        children: (0, s.jsx)(l.A, {
                                            defaultMessage: "You have {remainingKeys, plural, one {1 key} other {# keys}} left today",
                                            values: {
                                                remainingKeys: r
                                            },
                                            id: "PnjJhR"
                                        })
                                    }), (0, s.jsx)(T.E, {
                                        children: (0, s.jsx)(l.A, {
                                            defaultMessage: "Use keys to unlock lessons",
                                            id: "BrUxzl"
                                        })
                                    })]
                                }) : (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)(F.D, {
                                        as: "h4",
                                        fontSize: "xl",
                                        lineHeight: "125%",
                                        children: (0, s.jsx)(l.A, {
                                            defaultMessage: "You’re out of keys for today",
                                            id: "P8Rym1"
                                        })
                                    }), c && (0, s.jsx)(T.E, {
                                        children: c
                                    })]
                                })
                            })]
                        }), f && (0, s.jsx)(ea.e, {
                            as: p(),
                            href: (0, P.d_)(),
                            colorScheme: "iridescent",
                            w: "full",
                            isLoading: h,
                            onClick: () => {
                                u(), d(E.Dog, {
                                    isActionUi: !0,
                                    keysRemaining: r,
                                    source: x
                                })
                            },
                            children: (0, s.jsx)(l.A, {
                                defaultMessage: "Unlock all lessons now",
                                id: "JBpHcH"
                            })
                        })]
                    })
                },
                ex = e => {
                    let {
                        keysResetAt: t,
                        remainingKeys: r
                    } = e, l = (0, i.useRef)(null), {
                        isOpen: n,
                        onClose: a,
                        onOpen: o
                    } = (0, b.j)();
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(eh, {
                            ref: l,
                            remainingKeys: r,
                            onClick: o
                        }), (0, s.jsxs)(Y._, {
                            isOpen: n,
                            placement: "bottom",
                            onClose: a,
                            finalFocusRef: l,
                            children: [(0, s.jsx)(K.m, {}), (0, s.jsxs)(X.z, {
                                width: "100%",
                                children: [(0, s.jsx)(G.s, {}), (0, s.jsx)($.c, {
                                    p: 0,
                                    children: (0, s.jsx)(q.o, {
                                        p: 6,
                                        pt: 14,
                                        children: (0, s.jsx)(eu, {
                                            remainingKeys: r,
                                            keysResetAt: t,
                                            variant: "drawer"
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                },
                ef = e => {
                    let {
                        keysResetAt: t,
                        remainingKeys: r
                    } = e;
                    return (0, s.jsxs)(J.A, {
                        placement: "top-end",
                        arrowShadowColor: "transparent",
                        isLazy: !0,
                        children: [(0, s.jsx)(Q.W, {
                            children: (0, s.jsx)(eh, {
                                remainingKeys: r
                            })
                        }), (0, s.jsxs)(ee.h, {
                            width: "353px",
                            mt: 4,
                            border: 0,
                            boxShadow: "center.lg",
                            _focus: {
                                boxShadow: "center.lg"
                            },
                            children: [(0, s.jsx)(et.R, {}), (0, s.jsx)(er.e, {
                                py: 6,
                                px: 5,
                                children: (0, s.jsx)(eu, {
                                    remainingKeys: r,
                                    keysResetAt: t,
                                    variant: "popover"
                                })
                            })]
                        })]
                    })
                },
                ep = e => {
                    let {
                        contentMetering: t
                    } = e;
                    return (0, es.A)({
                        base: !0,
                        md: !1
                    }) ? (0, s.jsx)(ex, {
                        remainingKeys: t.quotaRemaining,
                        keysResetAt: t.quotaResetsAt
                    }) : (0, s.jsx)(ef, {
                        remainingKeys: t.quotaRemaining,
                        keysResetAt: t.quotaResetsAt
                    })
                };
            var eg = r(56134);
            let em = e => (0, s.jsxs)(k.I, {
                    viewBox: "0 0 17 17",
                    fill: "currentcolor",
                    ...e,
                    children: [(0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.68251 2.87297C5.00079 1.40536 6.48945 0.508958 7.93546 0.914182L14.5221 2.75999C15.8941 3.14447 16.7215 4.5396 16.4008 5.9279L14.88 12.5116C14.7972 12.8703 14.4392 13.094 14.0804 13.0111C13.7217 12.9282 13.498 12.5702 13.5809 12.2115L15.1016 5.62782C15.262 4.93367 14.8483 4.2361 14.1623 4.04386L7.57568 2.19806C6.86883 1.99997 6.14114 2.43816 5.98555 3.15556C5.90752 3.51538 5.55256 3.74382 5.19273 3.66578C4.83291 3.58775 4.60447 3.23279 4.68251 2.87297Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M0 6.33337C0 5.2288 0.895431 4.33337 2 4.33337H10.6667C11.7712 4.33337 12.6667 5.2288 12.6667 6.33337V15C12.6667 16.1046 11.7712 17 10.6667 17H2C0.895431 17 0 16.1046 0 15V6.33337ZM2 5.66671C1.63181 5.66671 1.33333 5.96518 1.33333 6.33337V15C1.33333 15.3682 1.63181 15.6667 2 15.6667H10.6667C11.0349 15.6667 11.3333 15.3682 11.3333 15V6.33337C11.3333 5.96518 11.0349 5.66671 10.6667 5.66671H2Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.33326 13.2618L3.19519 11.1238L4.138 10.1809L5.33326 11.3762L8.19519 8.51428L9.138 9.45709L5.33326 13.2618Z",
                        fill: "currentcolor"
                    })]
                }),
                ej = e => (0, s.jsx)(k.I, {
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.86768 1.19904C8.36836 0.771054 7.63156 0.771055 7.13224 1.19904L1.13224 6.3419C0.83671 6.59521 0.666626 6.96501 0.666626 7.35424V14.6667C0.666626 15.403 1.26358 16 1.99996 16L6.33333 16H9.66667L14 16C14.7331 16 15.3333 15.4087 15.3333 14.6691V7.35298C15.3333 6.96239 15.1622 6.59432 14.8677 6.3419L8.86768 1.19904ZM10.6667 14.6667H14V7.35424L7.99996 2.21139L1.99996 7.35424V14.6667H5.33333V10.3333C5.33333 9.78105 5.78105 9.33333 6.33333 9.33333H9.66667C10.219 9.33333 10.6667 9.78105 10.6667 10.3333V14.6667ZM6.66667 14.6667H9.33333V10.6667H6.66667V14.6667Z",
                        fill: "currentcolor"
                    })
                }),
                eL = e => (0, s.jsx)(k.I, {
                    viewBox: "0 0 24 24",
                    fill: "currentcolor",
                    ...e,
                    children: (0, s.jsx)("path", {
                        d: "M4.12073 23.5901C2.04024 23.5901 1 22.9108 1 21.5521C1 20.7199 1.25475 19.8325 1.76426 18.8899C2.27377 17.9474 3.0083 17.06 3.96787 16.2278C4.93594 15.3871 6.10355 14.7035 7.47073 14.177C8.8464 13.6505 10.4004 13.3873 12.1327 13.3873C13.8565 13.3873 15.402 13.6505 16.7692 14.177C18.1449 14.7035 19.3125 15.3871 20.2721 16.2278C21.2401 17.06 21.9789 17.9474 22.4884 18.8899C22.9979 19.8325 23.2527 20.7199 23.2527 21.5521C23.2527 22.9108 22.2124 23.5901 20.132 23.5901H4.12073ZM3.52206 21.6668H20.7434C20.9047 21.6668 21.0194 21.6413 21.0873 21.5903C21.1637 21.5394 21.2019 21.446 21.2019 21.3101C21.2019 20.7836 21.0024 20.1807 20.6033 19.5014C20.2126 18.822 19.6309 18.1639 18.8582 17.527C18.0854 16.8901 17.1344 16.3636 16.005 15.9475C14.884 15.523 13.5933 15.3107 12.1327 15.3107C10.6721 15.3107 9.37713 15.523 8.24773 15.9475C7.11832 16.3636 6.16724 16.8901 5.39449 17.527C4.62174 18.1639 4.03581 18.822 3.6367 19.5014C3.24607 20.1807 3.05076 20.7836 3.05076 21.3101C3.05076 21.446 3.08473 21.5394 3.15266 21.5903C3.22909 21.6413 3.35222 21.6668 3.52206 21.6668ZM12.1327 11.7951C11.1222 11.7951 10.2008 11.5276 9.36864 10.9926C8.53645 10.4576 7.86984 9.74006 7.36883 8.83993C6.87631 7.93131 6.63005 6.93353 6.63005 5.84658C6.63005 4.76813 6.87631 3.78733 7.36883 2.90419C7.86984 2.02104 8.53645 1.31622 9.36864 0.789734C10.2008 0.263244 11.1222 0 12.1327 0C13.1517 0 14.0773 0.258999 14.9095 0.776997C15.7417 1.295 16.4041 1.99557 16.8966 2.87871C17.3891 3.75336 17.6354 4.73416 17.6354 5.82111C17.6354 6.91655 17.3849 7.91858 16.8839 8.8272C16.3913 9.72732 15.729 10.4491 14.8968 10.9926C14.0646 11.5276 13.1432 11.7951 12.1327 11.7951ZM12.1327 9.87169C12.7611 9.87169 13.3343 9.69336 13.8523 9.3367C14.3788 8.97156 14.7991 8.48328 15.1133 7.87187C15.4275 7.25197 15.5846 6.56839 15.5846 5.82111C15.5846 5.08233 15.4275 4.41997 15.1133 3.83404C14.8076 3.23961 14.3915 2.77256 13.865 2.43289C13.347 2.09322 12.7696 1.92339 12.1327 1.92339C11.5043 1.92339 10.9269 2.09747 10.4004 2.44563C9.88239 2.7853 9.4663 3.25235 9.1521 3.84677C8.83791 4.4412 8.68081 5.1078 8.68081 5.84658C8.68081 6.59386 8.83791 7.2732 9.1521 7.88461C9.47479 8.49602 9.89513 8.98005 10.4131 9.3367C10.9396 9.69336 11.5128 9.87169 12.1327 9.87169Z",
                        fill: "currentcolor"
                    })
                }),
                eC = e => {
                    let {
                        href: t,
                        icon: r,
                        label: i,
                        ...l
                    } = e, n = (0, g.useRouter)().asPath.startsWith(t);
                    return (0, s.jsx)(d.$, {
                        as: p(),
                        variant: "unstyled",
                        href: t,
                        display: "flex",
                        alignItems: "center",
                        pos: "relative",
                        height: (0, eg._u)("100%").subtract("1px").toString(),
                        border: 0,
                        color: n ? "black" : "gray.700",
                        overflow: "hidden",
                        fontSize: "md",
                        fontWeight: n ? "medium" : "normal",
                        lineHeight: "base",
                        borderRadius: 0,
                        _after: {
                            bg: n ? "black" : "gray.300",
                            content: '""',
                            height: "2px",
                            position: "absolute",
                            top: "100%",
                            transform: n ? "translateY(-".concat("2px", ")") : void 0,
                            transition: "transform 100ms linear",
                            width: "100%"
                        },
                        _hover: {
                            color: "black",
                            _after: {
                                transform: "translateY(-".concat("2px", ")")
                            }
                        },
                        ...l,
                        children: (0, s.jsxs)(a.z, {
                            spacing: {
                                base: 1,
                                md: 2
                            },
                            "data-testid": "header_link",
                            "data-selected": "".concat(n),
                            children: [(0, s.jsx)(r, {
                                width: {
                                    base: 6,
                                    lg: 4
                                },
                                height: {
                                    base: 6,
                                    lg: 4
                                }
                            }), (0, s.jsx)(T.E, {
                                as: "span",
                                display: {
                                    base: "none",
                                    lg: "inline-block"
                                },
                                children: i
                            })]
                        })
                    })
                },
                eb = e => {
                    var t, r;
                    let i = (0, C.A)(),
                        {
                            data: l
                        } = (0, I.XAw)({}),
                        n = null != (r = null == l || null == (t = l.session) ? void 0 : t.activeUser) ? r : null,
                        o = (0, g.useRouter)();
                    return (0, s.jsxs)(a.z, {
                        height: "100%",
                        spacing: {
                            base: 1,
                            lg: 8
                        },
                        mx: {
                            base: 0,
                            lg: 4
                        },
                        flex: "1",
                        ...e,
                        children: [n && (0, s.jsx)(eC, {
                            label: i.formatMessage({
                                defaultMessage: "Home",
                                id: "ejEGdx"
                            }),
                            href: "/home",
                            icon: ej,
                            "aria-label": i.formatMessage({
                                defaultMessage: "Go home",
                                id: "SWMHO+"
                            })
                        }), (0, s.jsx)(eC, {
                            label: i.formatMessage({
                                defaultMessage: "Courses",
                                id: "R85gsW"
                            }),
                            href: "/courses",
                            icon: em,
                            "aria-label": i.formatMessage({
                                defaultMessage: "View all courses",
                                id: "QwmhuD"
                            })
                        }), n && (0, s.jsx)(eC, {
                            display: {
                                base: "flex",
                                lg: o.asPath.startsWith(P.r1) ? "flex" : "none"
                            },
                            label: i.formatMessage({
                                defaultMessage: "You",
                                id: "kJ5W29"
                            }),
                            icon: eL,
                            "aria-label": i.formatMessage({
                                defaultMessage: "Profile",
                                id: "itPgxd"
                            }),
                            href: P.r1
                        })]
                    })
                };
            var ew = r(8964),
                ev = r(1654),
                ey = r(95424),
                ek = r(59461);
            let eM = e => {
                let {
                    completed: t,
                    currentLength: r,
                    problemsLeft: i,
                    ...n
                } = e;
                return t ? (0, s.jsx)(T.E, {
                    fontWeight: "medium",
                    ...n,
                    children: (0, s.jsx)(l.A, {
                        values: {
                            count: r
                        },
                        defaultMessage: "You’re on a {count}-day streak!",
                        id: "4rNABM"
                    })
                }) : (0, s.jsx)(T.E, {
                    as: "span",
                    ...n,
                    children: (0, s.jsx)(l.A, {
                        values: {
                            currentLength: r,
                            emphasis: eo.Y,
                            problemsLeft: i
                        },
                        defaultMessage: "Solve <emphasis>{problemsLeft}</emphasis> {problemsLeft, plural, =0 {problems} one {problem} other {more problems}} to {currentLength, plural, =0 {start} one {build} other {build}} a streak.",
                        description: "The phrase used in the Streaks popover menu instructing the current user what action is neccessary to progress in their streak. The value 'problemsLeft' is the amount of problems left before they advance the streak, and the value 'currentStreakLength' is how many days their current streak is.",
                        id: "d87sXv"
                    })
                })
            };
            var eA = r(32371);
            let eS = (0, A.R)((e, t) => {
                let {
                    completed: r,
                    currentLength: i,
                    ...l
                } = e;
                return (0, s.jsx)(d.$, {
                    ref: t,
                    variant: {
                        base: "unstyled",
                        lg: "secondaryNoColorScheme"
                    },
                    minW: {
                        base: void 0,
                        lg: "60px"
                    },
                    py: {
                        base: void 0,
                        lg: "9px"
                    },
                    px: {
                        base: void 0,
                        lg: "5"
                    },
                    position: "relative",
                    isolation: "isolate",
                    _disabled: {},
                    _loading: {},
                    ...l,
                    children: (0, s.jsxs)(a.z, {
                        alignItems: "center",
                        cursor: "pointer",
                        spacing: {
                            base: "0",
                            lg: "1.5"
                        },
                        children: [(0, s.jsx)(T.E, {
                            as: "span",
                            fontWeight: "bold",
                            fontSize: "lg",
                            children: i
                        }), (0, s.jsx)(eA.c, {
                            completed: r,
                            fill: r ? "pear.500" : "white",
                            viewBox: "7 0 18 32",
                            width: {
                                base: "6",
                                lg: "18px"
                            },
                            height: "6",
                            transitionProperty: {
                                base: "none",
                                lg: "stroke, stroke-width, stroke-opacity, fill"
                            },
                            transitionDuration: "normal",
                            transitionTimingFunction: "ease",
                            sx: {
                                "& path": {
                                    transitionDuration: "inherit",
                                    transitionProperty: "inherit",
                                    transitionTimingFunction: "inherit"
                                }
                            }
                        })]
                    })
                })
            });
            var eR = r(59966),
                eH = r(48079);
            let eW = e => {
                let {
                    calendar: t,
                    completed: r,
                    currentLength: n,
                    maxNumStreakCharges: o,
                    numAvailableStreakCharges: c,
                    problemsLeft: h,
                    streakButtonRef: u
                } = e, x = (0, i.useRef)(null), {
                    isOpen: f,
                    onClose: p,
                    onOpen: g
                } = (0, b.j)(), m = (0, i.useCallback)(e => {
                    x && (x.current = e), u && (u.current = e)
                }, [u, x]);
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(eS, {
                        ref: m,
                        completed: r,
                        currentLength: n,
                        onClick: g
                    }), (0, s.jsxs)(Y._, {
                        isOpen: f,
                        placement: "bottom",
                        onClose: p,
                        finalFocusRef: x,
                        children: [(0, s.jsx)(K.m, {}), (0, s.jsxs)(X.z, {
                            width: "100%",
                            children: [(0, s.jsx)(G.s, {}), (0, s.jsx)($.c, {
                                p: 0,
                                children: (0, s.jsx)(q.o, {
                                    p: 6,
                                    pt: 14,
                                    children: (0, s.jsxs)(N.T, {
                                        spacing: 4,
                                        alignItems: "center",
                                        width: "full",
                                        children: [(0, s.jsxs)(a.z, {
                                            justifyContent: "space-between",
                                            w: "100%",
                                            px: 4,
                                            children: [(0, s.jsx)(ek.w, {
                                                currentStreak: n,
                                                completed: r,
                                                textStyles: {
                                                    fontSize: "6xl"
                                                },
                                                iconStyles: {
                                                    height: "12",
                                                    width: "12"
                                                }
                                            }), (0, eH.f)(o) ? (0, s.jsx)(eR.I, {
                                                numAvailableStreakCharges: c,
                                                maxNumStreakCharges: o,
                                                enablePopover: !1
                                            }) : null]
                                        }), (0, s.jsx)(eM, {
                                            completed: r,
                                            problemsLeft: h,
                                            currentLength: n,
                                            fontSize: "xl",
                                            textAlign: "center",
                                            mb: 1,
                                            fontWeight: "normal"
                                        }), (0, s.jsx)(ey.f, {
                                            calendar: t
                                        }), (0, s.jsx)(d.$, {
                                            variant: "primaryNoColorScheme",
                                            w: "full",
                                            mt: 2,
                                            onClick: p,
                                            children: (0, s.jsx)(l.A, {
                                                defaultMessage: "Continue",
                                                id: "acrOoz"
                                            })
                                        })]
                                    })
                                })
                            })]
                        })]
                    })]
                })
            };
            var e_ = r(26410);
            let eB = e => {
                    let {
                        calendar: t,
                        completed: r,
                        currentStreakLength: i,
                        lessonsCompleted: n,
                        longestStreakDays: o,
                        maxNumStreakCharges: d,
                        numAvailableStreakCharges: c,
                        problemsLeft: h,
                        streakButtonRef: u
                    } = e;
                    return (0, s.jsxs)(J.A, {
                        placement: "top-end",
                        arrowShadowColor: "transparent",
                        children: [(0, s.jsx)(Q.W, {
                            children: (0, s.jsx)(eS, {
                                ref: u,
                                completed: r,
                                currentLength: i
                            })
                        }), (0, s.jsxs)(ee.h, {
                            width: 96,
                            mt: 4,
                            boxShadow: "center.lg",
                            border: 0,
                            children: [(0, s.jsx)(et.R, {}), (0, s.jsx)(er.e, {
                                p: 6,
                                children: (0, s.jsxs)(N.T, {
                                    alignItems: "flex-start",
                                    gap: 4,
                                    children: [(0, s.jsxs)(a.z, {
                                        justifyContent: "space-between",
                                        w: "100%",
                                        overflow: "hidden",
                                        children: [(0, s.jsx)(ek.w, {
                                            currentStreak: i,
                                            completed: r
                                        }), (0, eH.f)(d) ? (0, s.jsx)(eR.I, {
                                            numAvailableStreakCharges: c,
                                            maxNumStreakCharges: d,
                                            enablePopover: !1
                                        }) : null]
                                    }), (0, s.jsx)(eM, {
                                        completed: r,
                                        problemsLeft: h,
                                        currentLength: i,
                                        fontWeight: "normal"
                                    }), (0, s.jsx)(ey.f, {
                                        calendar: t
                                    }), (0, s.jsxs)(a.z, {
                                        w: "full",
                                        bgColor: "gray.100",
                                        borderRadius: "lg",
                                        py: "4",
                                        justify: "center",
                                        align: "center",
                                        gap: "4",
                                        divider: (0, s.jsx)(e_.G, {}),
                                        children: [(0, s.jsxs)(N.T, {
                                            gap: "0.5",
                                            children: [(0, s.jsx)(T.E, {
                                                fontWeight: "medium",
                                                children: o
                                            }), (0, s.jsx)(T.E, {
                                                color: "text.placeholder",
                                                children: (0, s.jsx)(l.A, {
                                                    defaultMessage: "Max streak",
                                                    id: "Z2ZbKK"
                                                })
                                            })]
                                        }), (0, s.jsxs)(N.T, {
                                            gap: "0.5",
                                            children: [(0, s.jsx)(T.E, {
                                                fontWeight: "medium",
                                                children: n
                                            }), (0, s.jsx)(T.E, {
                                                color: "text.placeholder",
                                                children: (0, s.jsx)(l.A, {
                                                    defaultMessage: "Lessons complete",
                                                    id: "KeRVLX"
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                },
                ez = e => {
                    var t, r, i, l, n;
                    let {
                        streakButtonRef: a
                    } = e, {
                        data: o,
                        error: d,
                        loading: c
                    } = (0, I.XAw)({}), h = null == o || null == (r = o.session) || null == (t = r.activeUser) ? void 0 : t.activity, u = null == o || null == (n = o.session) || null == (l = n.activeUser) || null == (i = l.activity) ? void 0 : i.streak, x = (0, es.A)({
                        base: !0,
                        md: !1
                    });
                    if (c) return null;
                    if (d || !h || !u) throw Error("Could not fetch data for streak menu");
                    let {
                        calendar: f,
                        canIncreaseStreak: p,
                        currentStreakLength: g,
                        longestStreakDays: m,
                        maxNumStreakCharges: j,
                        numAvailableStreakCharges: L,
                        problemsAttemptedToday: C,
                        problemsRequiredToday: b
                    } = u, {
                        lessonsCompleted: w
                    } = h, v = !p, y = b - C;
                    return x ? (0, s.jsx)(eW, {
                        calendar: f,
                        completed: v,
                        currentLength: g,
                        maxNumStreakCharges: j,
                        numAvailableStreakCharges: L,
                        problemsLeft: y,
                        streakButtonRef: a
                    }) : (0, s.jsx)(eB, {
                        calendar: f,
                        completed: v,
                        currentStreakLength: g,
                        maxNumStreakCharges: j,
                        numAvailableStreakCharges: L,
                        problemsLeft: y,
                        lessonsCompleted: w,
                        longestStreakDays: m,
                        streakButtonRef: a
                    })
                };
            var eI = r(50675);
            let eZ = x()(() => Promise.all([r.e(3392), r.e(2991), r.e(3928), r.e(7735), r.e(7967), r.e(3835)]).then(r.bind(r, 17967)).then(e => e.Banner), {
                    loadableGenerated: {
                        webpack: () => [17967]
                    },
                    ssr: !1
                }),
                eE = e => {
                    let {
                        href: t,
                        ...r
                    } = e;
                    return (0, s.jsx)(n.N, {
                        as: p(),
                        href: t,
                        color: "black",
                        _hover: {
                            color: "black"
                        },
                        _focus: {
                            color: "black"
                        },
                        ...r,
                        children: (0, s.jsx)(j.T, {
                            h: "6",
                            minH: "5",
                            maxH: "12"
                        })
                    })
                },
                eP = e => {
                    var t;
                    let {
                        enableStreakExtendedAnimation: r = !1
                    } = e, l = (0, i.useRef)(null), n = (0, ew.rN)(), d = (0, g.useRouter)(), {
                        data: c
                    } = (0, I.XAw)({}), h = c && !(null == c || null == (t = c.session) ? void 0 : t.trialOffering), {
                        variant: u
                    } = (0, eI.rk)("gw_route_to_multistep_paywall_01_2026");
                    (null == u ? void 0 : u.value) === "treatment" && h && (null == n ? void 0 : n.link) && (n.link = (0, P.AD)({
                        closePath: d.asPath,
                        skipMultiStepComparisonTable: !0
                    }));
                    let x = (0, m.Ub)("(min-width: 650px) and (max-width: 768px), (min-width: 820px)"),
                        f = (null == c ? void 0 : c.contentMetering) && !x;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(eE, {
                            display: {
                                base: "none",
                                lg: "block"
                            },
                            href: P.j_
                        }), (0, s.jsx)(eb, {}), (0, s.jsxs)(a.z, {
                            spacing: {
                                base: 0,
                                sm: 2,
                                md: 4,
                                xl: 6
                            },
                            children: [(0, s.jsxs)(a.z, {
                                spacing: "3",
                                children: [n && !f && (0, s.jsx)(ew.Gp, { ...n,
                                    display: {
                                        base: "none",
                                        md: "flex"
                                    }
                                }), (null == c ? void 0 : c.contentMetering) && (0, s.jsx)(ep, {
                                    contentMetering: null == c ? void 0 : c.contentMetering
                                }), (0, s.jsx)(ez, {
                                    streakButtonRef: l
                                })]
                            }), (0, s.jsx)(o.az, {
                                display: {
                                    base: "none",
                                    lg: "flex"
                                },
                                children: (0, s.jsx)(V, {})
                            })]
                        }), r && (0, s.jsx)(ev.AL, {
                            streakButton: l.current
                        })]
                    })
                },
                eD = e => {
                    let {
                        signUpButtonText: t,
                        ...r
                    } = e;
                    return (0, s.jsx)(d.$, {
                        as: p(),
                        variant: "primary",
                        h: 12,
                        py: 4,
                        px: 5,
                        ...r,
                        children: t || (0, s.jsx)(l.A, {
                            defaultMessage: "Sign up",
                            id: "8HJxXG"
                        })
                    })
                },
                eU = e => {
                    let {
                        signUpButtonText: t
                    } = e, r = (0, g.useRouter)(), [i] = (0, c.rd)("colors", ["blackAlpha.400"]), {
                        openLoginOrSignupModal: n
                    } = (0, L.QN)(), o = "0px 1px 3px ".concat(i), h = {
                        href: (0, P.dJ)("/welcome/"),
                        onClick: e => {
                            e.preventDefault(), n(L.VN.SignupOptions)
                        },
                        signUpButtonText: t,
                        _hover: {
                            boxShadow: o
                        }
                    };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(eE, {
                            href: P.Ec
                        }), (0, s.jsx)(eb, {
                            display: {
                                base: "none",
                                lg: "flex"
                            }
                        }), (0, s.jsxs)(a.z, {
                            spacing: 2,
                            children: [(0, s.jsx)(d.$, {
                                as: p(),
                                href: (0, P.Zi)(r.asPath),
                                variant: "outline",
                                h: 12,
                                py: 4,
                                px: 6,
                                borderWidth: "2px",
                                colorScheme: "black",
                                _hover: {
                                    boxShadow: o
                                },
                                display: {
                                    base: "none",
                                    lg: "inline-flex"
                                },
                                onClick: e => {
                                    e.preventDefault(), n(L.VN.LoginOptions)
                                },
                                children: (0, s.jsx)(l.A, {
                                    defaultMessage: "Sign in",
                                    id: "SQJto2"
                                })
                            }), (0, s.jsx)(eD, { ...h,
                                colorScheme: "green"
                            })]
                        })]
                    })
                },
                eO = e => {
                    var t, r;
                    let {
                        enableStreakExtendedAnimation: l,
                        hideBanner: n = !1,
                        isLoading: d,
                        signUpButtonText: u,
                        ...x
                    } = e, f = (0, g.useRouter)(), {
                        data: p,
                        error: m,
                        loading: j,
                        refetch: L
                    } = (0, I.XAw)({}), {
                        data: C,
                        refetch: b
                    } = (0, I.On5)({
                        variables: {
                            route: f.asPath
                        }
                    }), w = (0, c.rd)("sizes", "appBar");
                    if ((0, i.useEffect)(() => {
                            L(), b()
                        }, [f.asPath, L, b]), !p && (j || m)) return (0, s.jsx)(o.az, {
                        w: "100%",
                        h: w,
                        borderBottom: "1px",
                        borderColor: "gray.200"
                    });
                    let v = (null != (r = null == p || null == (t = p.session) ? void 0 : t.activeUser) ? r : null) !== null;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(h.m, {
                            bgColor: "bg.elevated",
                            borderBottom: "1px",
                            borderColor: "gray.200",
                            boxShadow: {
                                base: "xs",
                                lg: "center.lg"
                            },
                            centerContent: !0,
                            maxW: "100%",
                            position: "sticky",
                            px: {
                                base: 6,
                                md: 8
                            },
                            top: "0",
                            transitionDuration: "normal",
                            transitionProperty: "common",
                            transitionTimingFunction: "ease-in",
                            zIndex: "appBar",
                            ...x,
                            children: (0, s.jsx)(a.z, {
                                align: "center",
                                flexWrap: "nowrap",
                                h: "appBar",
                                justify: "space-between",
                                maxW: "full",
                                spacing: v ? {
                                    base: 4,
                                    md: 6
                                } : 8,
                                w: "container.xl",
                                visibility: d ? "hidden" : "visible",
                                children: v ? (0, s.jsx)(eP, {
                                    enableStreakExtendedAnimation: l
                                }) : (0, s.jsx)(eU, {
                                    signUpButtonText: u
                                })
                            })
                        }), (null == C ? void 0 : C.banner) && !d && !n && (0, s.jsx)(eZ, {
                            banner: C.banner
                        })]
                    })
                }
        },
        32371: (e, t, r) => {
            r.d(t, {
                c: () => l
            });
            var s = r(23798),
                i = r(86191);
            let l = e => {
                let {
                    completed: t,
                    ...r
                } = e;
                return (0, s.jsx)(i.I, {
                    width: 8,
                    height: 8,
                    viewBox: "0 0 32 32",
                    fill: t ? "pear.500" : "white",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...r,
                    children: (0, s.jsx)("path", {
                        d: "M6.09996 16.3696L17.3989 2.00572C18.0763 1.14448 19.456 1.74802 19.2833 2.83009L17.6524 13.0514H24.6505C25.9809 13.0514 26.7257 14.585 25.9032 15.6306L14.6043 29.9945C13.9268 30.8557 12.5472 30.2522 12.7199 29.1701L14.3507 18.9489H7.35269C6.02231 18.9489 5.27743 17.4152 6.09996 16.3696Z",
                        fill: t ? "pear.500" : "white",
                        stroke: t ? void 0 : "black",
                        strokeOpacity: t ? void 0 : "0.1",
                        strokeWidth: t ? void 0 : "2.66667"
                    })
                })
            }
        },
        33668: (e, t, r) => {
            r.d(t, {
                q: () => s
            });

            function s(e) {
                var t;
                return !!e && !(e.isClassroomStudent || e.isClassroomTeacher) && !(null == (t = e.payment) ? void 0 : t.hasBrilliantPremium)
            }
        },
        35498: (e, t, r) => {
            r.d(t, {
                Y: () => l
            });
            var s = r(23798),
                i = r(28439);
            let l = (e, t) => (0, s.jsx)(i.E, {
                as: "strong",
                ...t,
                children: e
            })
        },
        40996: (e, t, r) => {
            r.d(t, {
                M: () => d,
                a: () => c
            });
            var s = r(21462),
                i = r(13233),
                l = r(77812),
                n = r(33787),
                a = r(19873),
                o = r(59979);

            function d(e) {
                let t, r, d, c = new Date(e),
                    h = new Date,
                    u = (0, i.A)(c, h);
                (0, l.A)(c, h) >= 1 ? (t = Math.floor((0, l.A)(c, h)), r = "day", d = 36e5) : (0, n.A)(c, h) >= 1 ? (t = Math.floor((0, n.A)(c, h)), r = "hour", d = 6e4) : ((0, a.A)(c, h) >= 1 ? (t = Math.floor((0, a.A)(c, h)), r = "minute") : (t = Math.floor(u >= 0 ? u : 0), r = "second"), d = 1e3);
                let [x, {
                    startCountdown: f,
                    stopCountdown: p
                }] = (0, o.L4)({
                    countStart: u,
                    countStop: 0,
                    intervalMs: d
                });
                return (0, s.useEffect)(() => (f(), () => p()), [f, p]), {
                    timeLeft: t,
                    unit: r
                }
            }

            function c(e, t) {
                let r = new Date(e),
                    n = new Date,
                    a = (0, i.A)(r, n),
                    d = {
                        days: 0,
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    },
                    c = Math.max(0, a),
                    h = 1e3;
                a >= 0 && (t.includes("day") && (d.days = Math.floor((0, l.A)(r, n)), c -= 24 * d.days * 3600, h = 36e5), t.includes("hour") && (d.hours = Math.floor(c / 3600), c -= 3600 * d.hours, h = 6e4), t.includes("minute") && (d.minutes = Math.floor(c / 60), c -= 60 * d.minutes, h = 1e3), t.includes("second") && (d.seconds = Math.floor(c), h = 1e3));
                let [u, {
                    startCountdown: x,
                    stopCountdown: f
                }] = (0, o.L4)({
                    countStart: a,
                    countStop: 0,
                    intervalMs: h
                });
                return (0, s.useEffect)(() => (x(), () => f()), [x, f]), d
            }
        },
        48079: (e, t, r) => {
            r.d(t, {
                f: () => s
            });

            function s(e) {
                return e > 0
            }
        },
        49081: (e, t, r) => {
            r.d(t, {
                $X: () => c,
                MF: () => d,
                dA: () => h,
                e_: () => o
            });
            var s = r(23798),
                i = r(54284),
                l = r(44847),
                n = r(16562),
                a = r(23448);
            let o = (0, i.B)(n.P.div, {
                    shouldForwardProp: e => (0, a.S)(e) || (0, l.M)(e)
                }),
                d = e => (0, s.jsx)(o, {
                    display: "flex",
                    ...e
                }),
                c = e => (0, s.jsx)(o, {
                    display: "flex",
                    alignItems: "center",
                    ...e
                }),
                h = e => (0, s.jsx)(o, {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    ...e
                })
        },
        59461: (e, t, r) => {
            r.d(t, {
                w: () => a
            });
            var s = r(23798),
                i = r(70501),
                l = r(28439),
                n = r(32371);
            let a = e => {
                let {
                    completed: t,
                    currentStreak: r,
                    iconStyles: a,
                    textStyles: o
                } = e;
                return (0, s.jsxs)(i.s, {
                    align: "center",
                    children: [(0, s.jsx)(l.E, {
                        fontWeight: "700",
                        fontSize: "5xl",
                        lineHeight: "shorter",
                        color: "text.primary",
                        ...o,
                        children: r
                    }), (0, s.jsx)(n.c, {
                        width: 8,
                        height: 8,
                        completed: t,
                        ...a
                    })]
                })
            }
        },
        59966: (e, t, r) => {
            r.d(t, {
                I: () => y
            });
            var s = r(23798),
                i = r(57552),
                l = r(86027),
                n = r(23097),
                a = r(42469),
                o = r(62104),
                d = r(64724),
                c = r(9812),
                h = r(19288),
                u = r(5732),
                x = r(28439),
                f = r(24167),
                p = r(47725),
                g = r(26569),
                m = r(40796),
                j = r(76759),
                L = r(86191);
            let C = e => {
                let {
                    charged: t,
                    ...r
                } = e, i = (0, m.Bi)(), l = (0, m.Bi)(), n = (0, m.Bi)(), [a] = (0, j.rd)("colors", ["pear.500"]);
                return t ? (0, s.jsxs)(L.I, {
                    width: "16px",
                    height: "16px",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    ...r,
                    children: [(0, s.jsx)("rect", {
                        x: "3.20007",
                        y: "1.59912",
                        width: "9.59999",
                        height: "12.8006",
                        rx: "0.719596",
                        fill: a
                    }), (0, s.jsx)("rect", {
                        x: "3.20081",
                        y: "4.00342",
                        width: "9.59945",
                        height: "7.99319",
                        fill: a
                    }), (0, s.jsx)("path", {
                        d: "M5.3335 0.619597C5.3335 0.222175 5.65567 -0.1 6.05309 -0.1L9.94723 -0.1C10.3447 -0.1 10.6668 0.222174 10.6668 0.619596L10.6668 1.7L5.3335 1.7L5.3335 0.619597Z",
                        fill: a
                    }), (0, s.jsx)("path", {
                        d: "M5.33337 15.3804C5.33337 15.7778 5.65555 16.1 6.05297 16.1L9.94711 16.1C10.3445 16.1 10.6667 15.7778 10.6667 15.3804L10.6667 14.3L5.33337 14.3L5.33337 15.3804Z",
                        fill: a
                    }), (0, s.jsx)("path", {
                        d: "M8.45561 4.11332C8.64382 3.87466 9.02697 4.04248 8.97905 4.34281L8.52592 7.18168H10.4693C10.8387 7.18168 11.0452 7.60714 10.8169 7.8975L7.67924 11.8868C7.49101 12.1253 7.10886 11.9576 7.15678 11.6573L7.60991 8.8184H5.66557C5.29623 8.81836 5.08969 8.39292 5.31791 8.10258L8.45561 4.11332Z",
                        fill: "white"
                    })]
                }) : (0, s.jsxs)(L.I, {
                    width: "16px",
                    height: "16px",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...r,
                    children: [(0, s.jsx)("g", {
                        clipPath: "url(#".concat(i, ")"),
                        children: (0, s.jsxs)("g", {
                            clipPath: "url(#".concat(l, ")"),
                            children: [(0, s.jsx)("mask", {
                                id: n,
                                fill: "white",
                                children: (0, s.jsx)("rect", {
                                    x: "4.80029",
                                    y: "2.39795",
                                    width: "14.4",
                                    height: "19.2009",
                                    rx: "1.07939"
                                })
                            }), (0, s.jsx)("rect", {
                                x: "4.80029",
                                y: "2.39795",
                                width: "14.4",
                                height: "19.2009",
                                rx: "1.07939",
                                stroke: "black",
                                strokeOpacity: "0.1",
                                strokeWidth: "3.75925",
                                mask: "url(#".concat(n, ")")
                            }), (0, s.jsx)("path", {
                                d: "M9.07959 0.938721L14.9214 0.938721C14.9982 0.938878 15.0609 1.00151 15.061 1.07837L15.061 1.45923L8.93994 1.45923L8.93994 1.07837L8.95166 1.02466C8.97278 0.974571 9.02184 0.938839 9.07959 0.938721Z",
                                stroke: "black",
                                strokeOpacity: "0.1",
                                strokeWidth: "1.87963"
                            }), (0, s.jsx)("path", {
                                d: "M9.0791 23.0598L14.9209 23.0598C14.9978 23.0597 15.0604 22.997 15.0605 22.9202L15.0605 22.5393L8.93945 22.5393L8.93945 22.9202L8.95117 22.9739C8.97229 23.024 9.02136 23.0597 9.0791 23.0598Z",
                                stroke: "black",
                                strokeOpacity: "0.1",
                                strokeWidth: "1.87963"
                            })]
                        })
                    }), (0, s.jsxs)("defs", {
                        children: [(0, s.jsx)("clipPath", {
                            id: i,
                            children: (0, s.jsx)("rect", {
                                width: "24",
                                height: "24",
                                fill: "white"
                            })
                        }), (0, s.jsx)("clipPath", {
                            id: l,
                            children: (0, s.jsx)("rect", {
                                width: "24",
                                height: "24",
                                fill: "white",
                                transform: "translate(0 -0.000732422)"
                            })
                        })]
                    })]
                })
            };
            var b = r(36737),
                w = r(47717),
                v = r(6225);
            let y = e => {
                let {
                    enablePopover: t,
                    maxNumStreakCharges: r,
                    numAvailableStreakCharges: m
                } = e, j = (0, p.Y4)(), L = (0, i.A)();
                return t ? (0, s.jsxs)(n.A, {
                    children: [(0, s.jsx)(a.W, {
                        children: (0, s.jsx)(o.$, {
                            variant: "unstyled",
                            borderRadius: 0,
                            onClick: () => j(w.miD, {
                                isActionUi: !0
                            }),
                            children: (0, s.jsx)(d.B, {
                                direction: "row",
                                gap: "0",
                                children: [...Array(r)].map((e, t) => (0, s.jsx)(C, {
                                    charged: t < m,
                                    w: "6",
                                    h: "6"
                                }, "streak-charge-".concat(t)))
                            })
                        })
                    }), (0, s.jsxs)(c.h, {
                        px: 4,
                        py: 3,
                        w: "auto",
                        boxShadow: "base",
                        children: [(0, s.jsx)(h.R, {}), (0, s.jsxs)(u.z, {
                            children: [(0, s.jsx)(x.E, {
                                children: (0, s.jsx)(l.A, {
                                    defaultMessage: "<emphasis>{numAvailableStreakCharges} of {maxNumStreakCharges}</emphasis> Streak Charges",
                                    id: "U7OGs+",
                                    values: {
                                        emphasis: b.j,
                                        maxNumStreakCharges: r,
                                        numAvailableStreakCharges: m
                                    }
                                })
                            }), (0, s.jsx)(f.K, {
                                as: "a",
                                "aria-label": L.formatMessage({
                                    defaultMessage: "Streak Charges FAQ",
                                    id: "Ks+Hbk"
                                }),
                                href: v.DD,
                                target: "_blank",
                                variant: "unstyled",
                                icon: (0, s.jsx)(g.m, {
                                    color: "gray.500"
                                }),
                                display: "flex",
                                h: "5",
                                w: "5",
                                minWidth: 0
                            })]
                        })]
                    })]
                }) : (0, s.jsx)(d.B, {
                    direction: "row",
                    gap: "0",
                    children: [...Array(r)].map((e, t) => (0, s.jsx)(C, {
                        charged: t < m,
                        w: "6",
                        h: "6"
                    }, "streak-charge-".concat(t).concat(t < m ? "charged" : "")))
                })
            }
        },
        68433: (e, t, r) => {
            r.d(t, {
                o: () => n
            });
            var s = r(23798),
                i = r(86191),
                l = r(87110);
            let n = e => {
                let {
                    direction: t = "up",
                    ...r
                } = e;
                return (0, s.jsx)(i.I, {
                    viewBox: "0 0 16 8",
                    fill: "currentcolor",
                    transform: "auto",
                    rotate: (0, l.y)(t),
                    ...r,
                    children: (0, s.jsx)("path", {
                        d: "M8 0L16 8H0L8 0Z",
                        fill: "currentColor"
                    })
                })
            }
        },
        72526: (e, t, r) => {
            r.d(t, {
                C: () => l
            });
            var s = r(21462),
                i = r(34373);
            let l = e => {
                let {
                    timeout: t
                } = e, [r, {
                    off: l,
                    on: n
                }] = (0, i.C)(!1);
                return (0, s.useEffect)(() => {
                    if (r && t) {
                        let e = setTimeout(() => l(), t);
                        return () => clearTimeout(e)
                    }
                }, [r, t, l]), {
                    cancelLoading: l,
                    isLoading: r,
                    startLoading: n
                }
            }
        },
        87110: (e, t, r) => {
            function s(e) {
                switch (e) {
                    case "up":
                        return 0;
                    case "right":
                    default:
                        return 90;
                    case "down":
                        return 180;
                    case "left":
                        return 270
                }
            }

            function i(e) {
                return "string" == typeof e ? s(e) : Array.isArray(e) ? e.map(s) : Object.keys(e).reduce((t, r) => ({ ...t,
                    [r]: s(e[r])
                }), {})
            }
            r.d(t, {
                y: () => i
            })
        },
        95424: (e, t, r) => {
            r.d(t, {
                f: () => u
            });
            var s = r(23798),
                i = r(21462),
                l = r(5732),
                n = r(56545),
                a = r(28439),
                o = r(40796),
                d = r(76759),
                c = r(86191);
            let h = e => {
                    let {
                        enableCompleteAnimation: t = !1,
                        isCompleted: r,
                        isToday: i,
                        usedStreakCharge: l,
                        variant: n = "default",
                        ...a
                    } = e, h = (0, o.Bi)(), [u, x] = (0, d.rd)("colors", ["pear.500", "gray.200"]);
                    return (0, s.jsxs)(c.I, {
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 8,
                        height: 8,
                        ...a,
                        children: [(r || l) && (0, s.jsx)("rect", {
                            width: "32",
                            height: "32",
                            rx: "16",
                            fill: "#D8E82E",
                            opacity: +!t,
                            children: t && (0, s.jsx)("animate", {
                                attributeName: "opacity",
                                from: "0",
                                to: "1",
                                dur: "0.3s",
                                fill: "freeze",
                                begin: "0.5s"
                            })
                        }), l && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("rect", {
                                x: "11.2002",
                                y: "9.59912",
                                width: "9.59999",
                                height: "12.8006",
                                rx: "0.719596",
                                fill: "black"
                            }), (0, s.jsx)("rect", {
                                x: "11.2007",
                                y: "12.0034",
                                width: "9.59945",
                                height: "7.99319",
                                fill: "black"
                            }), (0, s.jsx)("path", {
                                d: "M13.3335 8.6196C13.3335 8.22217 13.6557 7.9 14.0531 7.9L17.9472 7.9C18.3447 7.9 18.6668 8.22217 18.6668 8.6196L18.6668 9.7L13.3335 9.7L13.3335 8.6196Z",
                                fill: "black"
                            }), (0, s.jsx)("path", {
                                d: "M13.3335 23.3804C13.3335 23.7778 13.6557 24.1 14.0531 24.1L17.9472 24.1C18.3447 24.1 18.6668 23.7778 18.6668 23.3804L18.6668 22.3L13.3335 22.3L13.3335 23.3804Z",
                                fill: "black"
                            }), (0, s.jsx)("path", {
                                d: "M16.4559 12.1133C16.6441 11.8747 17.0272 12.0425 16.9793 12.3428L16.5262 15.1817H18.4695C18.8389 15.1817 19.0455 15.6071 18.8172 15.8975L15.6795 19.8868C15.4913 20.1253 15.1091 19.9576 15.157 19.6573L15.6101 16.8184H13.6658C13.2965 16.8184 13.0899 16.3929 13.3182 16.1026L16.4559 12.1133Z",
                                fill: u
                            })]
                        }), !l && ("default" === n || r) && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("g", {
                                clipPath: "url(#".concat(h, ")"),
                                children: (0, s.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M10.2903 16.2252L16.5654 8.24794C16.9417 7.76964 17.7079 8.10483 17.612 8.70578L16.7061 14.3834H20.5934C21.3322 14.3834 21.7459 15.2351 21.2891 15.8159L15.014 23.7931C14.6378 24.2714 13.8716 23.9362 13.9674 23.3353L14.8734 17.6577H10.9861C10.2472 17.6577 9.83354 16.8059 10.2903 16.2252Z",
                                    fill: r && !t ? "black" : x,
                                    children: t && (0, s.jsx)("animate", {
                                        attributeName: "fill",
                                        from: x,
                                        to: "black",
                                        dur: "0.3s",
                                        fill: "freeze",
                                        begin: "0.5s"
                                    })
                                })
                            }), (0, s.jsx)("defs", {
                                children: (0, s.jsx)("clipPath", {
                                    id: h,
                                    children: (0, s.jsx)("rect", {
                                        width: "16",
                                        height: "16",
                                        fill: "white",
                                        transform: "translate(8 8)"
                                    })
                                })
                            })]
                        }), "default" === n ? (0, s.jsx)("rect", {
                            x: "1",
                            y: "1",
                            width: "30",
                            height: "30",
                            rx: "15",
                            stroke: "black",
                            strokeOpacity: i ? "0.2" : r || l ? "0" : "0.05",
                            strokeWidth: "1.5"
                        }) : (0, s.jsx)("rect", {
                            x: "1",
                            y: "1",
                            width: "30",
                            height: "30",
                            rx: "15",
                            stroke: "black",
                            strokeOpacity: l || r || t ? "0.2" : "0.1",
                            strokeWidth: "2"
                        })]
                    })
                },
                u = (0, i.forwardRef)((e, t) => {
                    let {
                        calendar: r,
                        variant: i = "default",
                        ...o
                    } = e, d = "default" === i;
                    return (0, s.jsx)(l.z, {
                        width: "100%",
                        flexGrow: "1",
                        ...d ? {
                            justifyContent: "space-between"
                        } : {
                            gap: "4",
                            justifyContent: "center"
                        },
                        ...o,
                        children: r.map(e => {
                            let {
                                code: r,
                                currentDay: l,
                                highlighted: o,
                                streakChargeUsed: c
                            } = e;
                            return (0, s.jsxs)(n.T, {
                                ref: l ? t : null,
                                children: [(0, s.jsx)(h, {
                                    width: d ? {
                                        base: "100%",
                                        md: 12
                                    } : 8,
                                    height: d ? {
                                        base: "100%",
                                        md: 12
                                    } : 8,
                                    maxWidth: "12",
                                    usedStreakCharge: c,
                                    isToday: l,
                                    isCompleted: o,
                                    variant: i,
                                    enableCompleteAnimation: !d && l
                                }), (0, s.jsx)(a.E, {
                                    fontSize: d ? "md" : "sm",
                                    color: l ? "black" : d ? "text.secondary" : "gray.300",
                                    fontWeight: l || !d ? "bold" : "normal",
                                    lineHeight: "short",
                                    textAlign: "center",
                                    padding: +("default" === i),
                                    children: r
                                })]
                            }, "streak-day-".concat(r))
                        })
                    })
                })
        }
    }
]);