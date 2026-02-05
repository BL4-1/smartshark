try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ea605cb2-79fb-47d8-85fe-b24606e27a40", e._sentryDebugIdIdentifier = "sentry-dbid-ea605cb2-79fb-47d8-85fe-b24606e27a40")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8295], {
        7987: (e, t, i) => {
            "use strict";
            i.d(t, {
                j: () => d
            });
            var s = i(23798);
            i(21462);
            var l = i(22159),
                o = i(25367),
                n = i(32705),
                r = i(77142),
                a = i(51399);
            let d = e => {
                let {
                    centerProps: t,
                    children: i,
                    fullWidth: d,
                    headerProps: c,
                    hideFooter: p,
                    hideHeader: u,
                    innerContainerStyles: h,
                    outerContainerStyles: x,
                    ...f
                } = e, g = (0, a.JK)();
                return (0, s.jsxs)(n.v, { ...f,
                    children: [!u && !g && (0, s.jsx)(o.Y, { ...c
                    }), d ? i : (0, s.jsx)(r.c, {
                        outerContainerStyles: x,
                        centerProps: t,
                        ...h,
                        children: i
                    }), !p && !g && (0, s.jsx)(l.w, {})]
                })
            }
        },
        9613: (e, t, i) => {
            "use strict";
            i.d(t, {
                Y: () => o
            });
            var s = i(23798),
                l = i(86191);
            let o = e => (0, s.jsx)(l.I, {
                h: "21px",
                w: "17px",
                viewBox: "0 0 17 21",
                ...e,
                children: (0, s.jsx)("path", {
                    d: "M11.0718 3.70342C11.691 2.95595 12.1288 1.93086 12.1288 0.905766C12.1288 0.756273 12.1181 0.617459 12.0861 0.5C11.0825 0.542712 9.87599 1.17272 9.14997 2.02696C8.5841 2.66765 8.05026 3.70342 8.05026 4.72851C8.05026 4.88868 8.08229 5.03817 8.09297 5.09156C8.15703 5.10224 8.2638 5.11292 8.35989 5.11292C9.26741 5.11292 10.3991 4.51495 11.0718 3.70342ZM11.7764 5.33716C10.271 5.33716 9.0432 6.25547 8.2638 6.25547C7.42033 6.25547 6.33131 5.39055 5.00739 5.39055C2.51971 5.39055 0 7.45142 0 11.3275C0 13.7515 0.928876 16.3142 2.08196 17.9586C3.0749 19.3468 3.93972 20.5 5.1889 20.5C6.4274 20.5 6.97191 19.6778 8.50936 19.6778C10.0682 19.6778 10.4098 20.4786 11.7764 20.4786C13.1324 20.4786 14.0399 19.24 14.8834 18.012C15.8443 16.6025 16.2393 15.2357 16.25 15.1716C16.1753 15.1503 13.5808 14.0932 13.5808 11.1247C13.5808 8.56193 15.6201 7.4087 15.7375 7.32328C14.3922 5.39055 12.3423 5.33716 11.7764 5.33716Z",
                    fill: "currentColor"
                })
            })
        },
        25367: (e, t, i) => {
            "use strict";
            i.d(t, {
                Y: () => s.Y
            });
            var s = i(26780)
        },
        34943: (e, t, i) => {
            "use strict";
            i.d(t, {
                X: () => r
            });
            var s = i(23798),
                l = i(70501),
                o = i(92170),
                n = i(28439);
            let r = e => {
                let {
                    dividerProps: t,
                    flexProps: i,
                    text: r,
                    textProps: a
                } = e;
                return (0, s.jsxs)(l.s, {
                    pt: "4",
                    pb: "4",
                    align: "center",
                    w: "full",
                    ...i,
                    children: [(0, s.jsx)(o.c, {
                        borderColor: "gray.300",
                        borderBottomWidth: "1px",
                        ...t
                    }), (0, s.jsx)(n.E, {
                        padding: "2",
                        color: "gray.600",
                        fontWeight: "700",
                        fontSize: "12px",
                        ...a,
                        children: r
                    }), (0, s.jsx)(o.c, {
                        borderColor: "gray.300",
                        borderBottomWidth: "1px",
                        ...t
                    })]
                })
            }
        },
        41692: (e, t, i) => {
            "use strict";
            i.d(t, {
                N: () => o
            });
            var s = i(23798),
                l = i(86191);
            let o = e => (0, s.jsxs)(l.I, {
                h: "21px",
                w: "20px",
                viewBox: "0 0 20 21",
                ...e,
                children: [(0, s.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.0002 10.511C20.0002 9.81688 19.9352 9.14949 19.8146 8.50879H10.2041V12.2951H15.6958C15.4593 13.5187 14.7404 14.5554 13.6596 15.2495V17.7055H16.9575C18.887 16.0014 20.0002 13.492 20.0002 10.511Z",
                    fill: "#4285F4"
                }), (0, s.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.2048 20.0766C12.96 20.0766 15.2698 19.2001 16.9582 17.7051L13.6603 15.2491C12.7466 15.8364 11.5778 16.1834 10.2048 16.1834C7.54708 16.1834 5.29751 14.4616 4.49508 12.1479H1.08594V14.684C2.765 17.8831 6.21589 20.0766 10.2048 20.0766Z",
                    fill: "#34A853"
                }), (0, s.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.49451 12.1483C4.29042 11.561 4.17446 10.9336 4.17446 10.2885C4.17446 9.64332 4.29042 9.01597 4.49451 8.42867V5.89258H1.08536C0.394255 7.21401 0 8.70897 0 10.2885C0 11.868 0.394255 13.3629 1.08536 14.6844L4.49451 12.1483Z",
                    fill: "#FBBC05"
                }), (0, s.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.2048 4.39312C11.703 4.39312 13.0481 4.88699 14.1056 5.85694L17.0324 3.04944C15.2652 1.46994 12.9553 0.5 10.2048 0.5C6.21589 0.5 2.765 2.6935 1.08594 5.89253L4.49508 8.42862C5.29751 6.115 7.54708 4.39312 10.2048 4.39312Z",
                    fill: "#EA4335"
                })]
            })
        },
        64755: (e, t, i) => {
            "use strict";
            i.d(t, {
                A: () => h
            });
            var s = i(21462),
                l = i(54700),
                o = i(47725),
                n = i(13423),
                r = i(53094),
                a = i(47717),
                d = i(6622),
                c = i(85375),
                p = i(41991),
                u = i(6225);

            function h() {
                let e = (0, o.Y4)(),
                    t = (0, l.useRouter)(),
                    {
                        beginEmailLogin: i,
                        beginEmailSignup: h,
                        nextUrl: x
                    } = (0, n.QN)(),
                    f = (x ? (0, p.Si)(x) : null) || t.asPath,
                    g = f.includes("signup") ? "page" : "modal",
                    C = (0, s.useCallback)(s => {
                        switch (s) {
                            case c.O.Google:
                                e(a.kAk, r.LP);
                                break;
                            case c.O.Facebook:
                                e(a.BII, r.LP);
                                break;
                            case c.O.Apple:
                                e(a.TkE, r.LP);
                                break;
                            case c.O.Email:
                                i(), e(a.vUc, r.LP);
                                break;
                            default:
                                (0, d.$)(s)
                        }
                        s !== c.O.Email && t.push((0, u.bS)(s, f))
                    }, [e, i, t, f]);
                return {
                    beforeLoginNav: () => e(a.bBH, r.LP),
                    beforeSignupNav: () => e(a.C4G, r.LP),
                    loginWith: C,
                    signupWith: (0, s.useCallback)(i => {
                        switch (i) {
                            case c.O.Google:
                                e(a.zXm, {
                                    isActionUi: !0,
                                    signupLocation: g,
                                    signupMethod: "google"
                                });
                                break;
                            case c.O.Facebook:
                                e(a.zXm, {
                                    isActionUi: !0,
                                    signupLocation: g,
                                    signupMethod: "facebook"
                                });
                                break;
                            case c.O.Email:
                                h(), e(a.zXm, {
                                    isActionUi: !0,
                                    signupLocation: g,
                                    signupMethod: "email"
                                });
                                break;
                            default:
                                (0, d.$)(i)
                        }
                        i !== c.O.Email && t.push((0, u.bS)(i, f))
                    }, [e, g, h, t, f])
                }
            }
        },
        65762: (e, t, i) => {
            "use strict";
            i.d(t, {
                z: () => n
            });
            var s = i(23798),
                l = i(21462),
                o = i(86191);
            let n = e => {
                let t = (0, l.useId)(),
                    i = (0, l.useId)(),
                    n = (0, l.useId)();
                return (0, s.jsxs)(o.I, {
                    width: "142px",
                    height: "152px",
                    viewBox: "0 0 142 152",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, s.jsx)("path", {
                        d: "M98.149 54.7674L115.611 64.8212L0.752208 151.405L46.9497 21.5896L52.6553 22.972L98.149 54.7674Z",
                        fill: "url(#".concat(t, ")")
                    }), (0, s.jsx)("path", {
                        opacity: "0.55",
                        d: "M7.40925 143.583L59.7394 19.2668L69.2461 24.682L88.2597 35.5124L107.273 46.3428L116.78 51.7581L7.40925 143.583Z",
                        fill: "url(#".concat(i, ")")
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M119.775 60.4209L119.777 60.418C124.01 53.0793 121.642 46.4508 119.859 43.1896C115.709 35.5932 113.123 24.9576 113.09 17.1291C113.078 14.1927 111.78 7.24133 104.381 2.96991C96.9831 -1.3015 90.3123 1.05274 87.765 2.50771C80.9688 6.39336 70.4652 9.47187 61.8112 9.67541C58.0974 9.75982 51.1727 11.0227 46.9338 18.3581L46.9321 18.361C46.9321 18.361 46.9321 18.361 46.9288 18.3667C42.6956 25.7054 45.0643 32.3339 46.8464 35.5951C50.9972 43.1915 53.5829 53.8271 53.6159 61.6556C53.6279 64.592 54.9261 71.5434 62.3244 75.8148C69.7227 80.0862 76.3935 77.732 78.9409 76.277C85.7371 72.3913 96.2407 69.3128 104.895 69.1093C108.61 69.022 115.535 67.7591 119.774 60.4237L119.775 60.4209Z",
                        fill: "#29CC57"
                    }), (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M119.775 60.4209L119.777 60.418C124.01 53.0793 121.642 46.4508 119.859 43.1896C115.709 35.5932 113.123 24.9576 113.09 17.1291C113.078 14.1927 111.78 7.24133 104.381 2.96991C96.9831 -1.3015 90.3123 1.05274 87.765 2.50771C80.9688 6.39336 70.4652 9.47187 61.8112 9.67541C58.0974 9.75982 51.1727 11.0227 46.9338 18.3581L46.9321 18.361C46.9321 18.361 46.9321 18.361 46.9288 18.3667C42.6956 25.7054 45.0643 32.3339 46.8464 35.5951C50.9972 43.1915 53.5829 53.8271 53.6159 61.6556C53.6279 64.592 54.9261 71.5434 62.3244 75.8148C69.7227 80.0862 76.3935 77.732 78.9409 76.277C85.7371 72.3913 96.2407 69.3128 104.895 69.1093C108.61 69.022 115.535 67.7591 119.774 60.4237L119.775 60.4209Z",
                        fill: "url(#".concat(n, ")")
                    }), (0, s.jsx)("path", {
                        d: "M71.6588 29.1511C69.3361 33.1742 70.7145 38.3185 74.7376 40.6412L90.631 49.8173C94.6541 52.1401 99.7985 50.7616 102.121 46.7385L109.793 33.4506L79.3306 15.8632L71.6588 29.1511Z",
                        fill: "white"
                    }), (0, s.jsx)("path", {
                        d: "M97.1348 38.8262L83.8903 31.1795L89.3857 21.661L102.63 29.3078L97.1348 38.8262Z",
                        fill: "black"
                    }), (0, s.jsxs)("defs", {
                        children: [(0, s.jsxs)("linearGradient", {
                            id: t,
                            x1: "105.577",
                            y1: "14.8788",
                            x2: "17.2228",
                            y2: "138.03",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, s.jsx)("stop", {
                                stopColor: "#D8E82E"
                            }), (0, s.jsx)("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })]
                        }), (0, s.jsxs)("linearGradient", {
                            id: i,
                            x1: "18.2456",
                            y1: "123.764",
                            x2: "93.1227",
                            y2: "-39.3232",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, s.jsx)("stop", {
                                stopColor: "white",
                                stopOpacity: "0"
                            }), (0, s.jsx)("stop", {
                                offset: "0.148027",
                                stopColor: "white"
                            }), (0, s.jsx)("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })]
                        }), (0, s.jsxs)("linearGradient", {
                            id: n,
                            x1: "104.381",
                            y1: "2.96991",
                            x2: "58.8123",
                            y2: "82.9199",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, s.jsx)("stop", {
                                offset: "0.367206",
                                stopColor: "#D8E82E",
                                stopOpacity: "0"
                            }), (0, s.jsx)("stop", {
                                offset: "1",
                                stopColor: "#D8E82E"
                            })]
                        })]
                    })]
                })
            }
        },
        66183: (e, t, i) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/login", function() {
                return i(96664)
            }])
        },
        70480: (e, t, i) => {
            "use strict";
            i.d(t, {
                e: () => C
            });
            var s = i(12584),
                l = i(23798),
                o = i(21462),
                n = i(40796),
                r = i(86191),
                a = i(198),
                d = i(67267),
                c = i(26829),
                p = i(62104),
                u = i(70501),
                h = i(63903);

            function x() {
                let e = (0, s._)(["\n    0% {\n      opacity: 1;\n      left: ", "\n    }\n    ", "% {\n      opacity: 1;\n      left: ", ";\n    }\n    ", "% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 0;\n      left: ", ";\n    }\n  "]);
                return x = function() {
                    return e
                }, e
            }
            let f = e => {
                    let {
                        animation: t
                    } = e, i = (0, n.Bi)(), s = (0, n.Bi)(), o = (0, n.Bi)();
                    return (0, l.jsxs)(r.I, {
                        viewBox: "0 0 150 56",
                        width: "150",
                        height: "56px",
                        animation: t,
                        zIndex: "100",
                        position: "absolute",
                        top: 0,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#".concat(o, ")"),
                            children: [(0, l.jsx)("rect", {
                                opacity: "0.4",
                                x: "75",
                                y: "-58.6328",
                                width: "51",
                                height: "150",
                                transform: "rotate(30 75 -58.6328)",
                                fill: "url(#".concat(i, ")")
                            }), (0, l.jsx)("rect", {
                                opacity: "0.4",
                                x: "127.826",
                                y: "-28.1328",
                                width: "26",
                                height: "150",
                                transform: "rotate(30 127.826 -28.1328)",
                                fill: "url(#".concat(s, ")")
                            })]
                        }), (0, l.jsxs)("defs", {
                            children: [(0, l.jsxs)("linearGradient", {
                                id: i,
                                x1: "100.5",
                                y1: "-58.6328",
                                x2: "100.5",
                                y2: "91.3672",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, l.jsx)("stop", {
                                    offset: "0.27",
                                    stopColor: "#F5EFFF"
                                }), (0, l.jsx)("stop", {
                                    offset: "0.71",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })]
                            }), (0, l.jsxs)("linearGradient", {
                                id: s,
                                x1: "140.826",
                                y1: "-28.1328",
                                x2: "140.826",
                                y2: "121.867",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, l.jsx)("stop", {
                                    offset: "0.081302",
                                    stopColor: "#F5EFFF"
                                }), (0, l.jsx)("stop", {
                                    offset: "0.570844",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })]
                            }), (0, l.jsx)("clipPath", {
                                id: o,
                                children: (0, l.jsx)("rect", {
                                    width: "150",
                                    height: "56",
                                    fill: "white"
                                })
                            })]
                        })]
                    })
                },
                g = e => {
                    let {
                        animationDuration: t = 1600,
                        colorScheme: i,
                        delayDuration: s = 4800
                    } = e, o = "100%", n = t + s, r = t / n * 100, p = (0, a.i7)(x(), "-100%", r, o, r + 1, o), u = "".concat(p, " ").concat(n, "ms cubic-bezier(.16, 1, 0.7, 1) infinite"), h = (0, d.Vl)("Button", {
                        variant: "pillPrimary"
                    });
                    return (0, l.jsx)(c.az, {
                        w: "100%",
                        height: "iridescent" === i ? "calc(100% - 4px)" : "100%",
                        position: "absolute",
                        overflow: "clip",
                        borderRadius: (() => {
                            let {
                                borderRadius: e
                            } = h;
                            return "string" == typeof e ? e : "56px"
                        })(),
                        zIndex: 0,
                        children: (0, l.jsx)(f, {
                            animation: u
                        })
                    })
                },
                C = e => {
                    let {
                        animationDuration: t = 1600,
                        children: i,
                        delayDuration: s = 4800,
                        variant: n = "pillPrimary",
                        ...r
                    } = e, [a, d] = (0, o.useState)(!0);
                    return (0, o.useEffect)(() => {
                        var e, t, i, s;
                        let l = null == (t = (0, h.V)()) || null == (e = t.userAgent.match(/Chrome\/(\d+)/)) ? void 0 : e[1],
                            o = !!l && parseInt(l, 10) >= 90,
                            n = null == (s = (0, h.V)()) || null == (i = s.userAgent.match(/Version\/(\d+\.\d+)/)) ? void 0 : i[1],
                            r = !!n && parseInt(n, 10) >= 16;
                        d(o || r || !l && !n)
                    }, []), (0, l.jsxs)(p.$, {
                        variant: n,
                        cursor: "pointer",
                        ...r,
                        children: [(0, l.jsx)(u.s, {
                            zIndex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            children: i
                        }), a && (0, l.jsx)(g, {
                            animationDuration: t,
                            delayDuration: s,
                            colorScheme: r.colorScheme
                        })]
                    })
                }
        },
        76723: (e, t, i) => {
            "use strict";
            i.d(t, {
                P: () => f
            });
            var s = i(23798),
                l = i(21462),
                o = i(23651),
                n = i(54700),
                r = i(19250),
                a = i.n(r),
                d = i(47725),
                c = i(13423),
                p = i(53094),
                u = i(47717),
                h = i(82313),
                x = i(41991);
            let f = e => {
                let {
                    authType: t = "login"
                } = e, i = (0, d.Y4)(), r = (0, n.useRouter)(), f = (0, h.e)(), {
                    extraParams: g = {},
                    nextUrl: C
                } = (0, c.QN)(), j = (C ? (0, x.Si)(C) : null) || r.asPath, m = new URL("/account/google_one_tap_login/", f);
                return m.searchParams.append("next", j), Object.keys(g).forEach(e => {
                    m.searchParams.append(e, g[e])
                }), (0, l.useEffect)(() => {
                    window.logMomentNotification = e => {
                        e.isDisplayMoment() ? e.isDisplayed() ? i(u.AEY, { ...p.uZ,
                            reason: ""
                        }) : i(u.V5E, { ...p.uZ,
                            reason: e.getNotDisplayedReason()
                        }) : e.isSkippedMoment() ? i(u.bh4, { ...p.uZ,
                            reason: e.getSkippedReason()
                        }) : e.isDismissedMoment() && i(u.YSc, { ...p.uZ,
                            reason: e.getDismissedReason()
                        })
                    }
                }, [i]), (0, s.jsxs)(o.Z, {
                    children: [(0, s.jsx)(a(), {
                        src: "https://accounts.google.com/gsi/client",
                        strategy: "afterInteractive"
                    }), (0, s.jsx)("div", {
                        id: "show-google-one-tap",
                        children: (0, s.jsx)("div", {
                            id: "g_id_onload",
                            "data-client_id": "252005599926.apps.googleusercontent.com",
                            "data-login_uri": m.toString(),
                            "data-context": "signup" === t ? "use" : "signin",
                            "data-current_view": "signup" === t ? "signup" : "signin",
                            "data-moment_callback": "logMomentNotification",
                            "data-approval_state": "auto"
                        })
                    })]
                })
            }
        },
        85057: (e, t, i) => {
            "use strict";
            i.d(t, {
                B: () => n
            });
            var s = i(23798),
                l = i(16968),
                o = i(7987);
            let n = e => {
                let {
                    children: t,
                    hideHeader: i,
                    ...n
                } = e;
                return (0, s.jsx)(o.j, {
                    hideHeader: i,
                    hideFooter: !0,
                    fullWidth: !0,
                    children: (0, s.jsx)(l.o, {
                        flex: "1",
                        ...n,
                        children: t
                    })
                })
            }
        },
        85375: (e, t, i) => {
            "use strict";
            i.d(t, {
                O: () => s
            });
            var s = function(e) {
                return e.Google = "Google", e.Facebook = "Facebook", e.Apple = "Apple", e.Email = "Email", e
            }({})
        },
        92170: (e, t, i) => {
            "use strict";
            i.d(t, {
                c: () => d
            });
            var s = i(96116),
                l = i(67267),
                o = i(56134),
                n = i(54284),
                r = i(66196),
                a = i(23798),
                d = (0, s.R)(function(e, t) {
                    let {
                        borderLeftWidth: i,
                        borderBottomWidth: s,
                        borderTopWidth: d,
                        borderRightWidth: c,
                        borderWidth: p,
                        borderStyle: u,
                        borderColor: h,
                        ...x
                    } = (0, l.Vl)("Divider", e), {
                        className: f,
                        orientation: g = "horizontal",
                        __css: C,
                        ...j
                    } = (0, o.MN)(e);
                    return (0, a.jsx)(n.B.hr, {
                        ref: t,
                        "aria-orientation": g,
                        ...j,
                        __css: { ...x,
                            border: "0",
                            borderColor: h,
                            borderStyle: u,
                            ...{
                                vertical: {
                                    borderLeftWidth: i || c || p || "1px",
                                    height: "100%"
                                },
                                horizontal: {
                                    borderBottomWidth: s || d || p || "1px",
                                    width: "100%"
                                }
                            }[g],
                            ...C
                        },
                        className: (0, r.cx)("chakra-divider", f)
                    })
                });
            d.displayName = "Divider"
        },
        96664: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                __N_SSP: () => S,
                default: () => I
            });
            var s = i(23798),
                l = i(21462),
                o = i(54700),
                n = i(57552),
                r = i(86027),
                a = i(56037),
                d = i(70501),
                c = i(14770),
                p = i(26829),
                u = i(38683),
                h = i(34943),
                x = i(65762),
                f = i(13423),
                g = i(85057),
                C = i(72637),
                j = i(76723),
                m = i(5732),
                y = i(24167),
                b = i(9613),
                v = i(48465),
                w = i(41692),
                L = i(85375),
                k = i(64755);
            let _ = () => {
                let e = (0, n.A)(),
                    {
                        loginWith: t
                    } = (0, k.A)();
                return (0, s.jsxs)(m.z, {
                    w: "full",
                    justifyContent: "space-between",
                    spacing: 2,
                    children: [(0, s.jsx)(y.K, {
                        "aria-label": e.formatMessage({
                            defaultMessage: "Google",
                            id: "lzgH40"
                        }),
                        icon: (0, s.jsx)(w.N, {}),
                        variant: "pillSecondaryOutline",
                        colorScheme: "gray",
                        height: "48px",
                        size: "lg",
                        width: "100%",
                        onClick: () => t(L.O.Google)
                    }), (0, s.jsx)(y.K, {
                        "aria-label": e.formatMessage({
                            defaultMessage: "Facebook",
                            id: "EmpHyB"
                        }),
                        icon: (0, s.jsx)(v.i, {
                            color: "#0866FF",
                            w: "20px",
                            h: "21px"
                        }),
                        variant: "pillSecondaryOutline",
                        colorScheme: "gray",
                        height: "48px",
                        size: "lg",
                        width: "100%",
                        onClick: () => t(L.O.Facebook)
                    }), (0, s.jsx)(y.K, {
                        "aria-label": e.formatMessage({
                            defaultMessage: "Apple",
                            id: "OTN0yk"
                        }),
                        icon: (0, s.jsx)(b.Y, {}),
                        variant: "pillSecondaryOutline",
                        colorScheme: "gray",
                        height: "48px",
                        size: "lg",
                        width: "100%",
                        onClick: () => t(L.O.Apple)
                    })]
                })
            };
            var O = i(41991);
            let E = e => {
                let {
                    showSpinner: t
                } = e, i = (0, n.A)(), o = (0, u.useSearchParams)(), {
                    nextUrl: m,
                    setNextUrl: y
                } = (0, f.QN)();
                return (0, l.useEffect)(() => {
                    let e = (0, O.Zb)(o);
                    e && e !== m && y(e)
                }, [m, o, y]), (0, s.jsx)(g.B, {
                    hideHeader: !0,
                    "data-testid": "login-next",
                    children: t ? (0, s.jsx)(a.y, {
                        "data-testid": "loading-spinner",
                        size: "xl",
                        thickness: "6px",
                        speed: "1s",
                        emptyColor: "gray.200"
                    }) : (0, s.jsxs)(d.s, {
                        minWidth: {
                            base: "xs",
                            sm: "sm",
                            md: "md"
                        },
                        flexDirection: "column",
                        pl: {
                            base: 6,
                            md: 0
                        },
                        pr: {
                            base: 6,
                            md: 0
                        },
                        pt: 20,
                        pb: 16,
                        children: [(0, s.jsxs)(d.s, {
                            alignItems: "center",
                            flexDirection: "column",
                            children: [(0, s.jsx)(x.z, {
                                width: "115px",
                                height: "126px"
                            }), (0, s.jsx)(c.D, {
                                mt: "6",
                                as: "h2",
                                size: "lg",
                                children: (0, s.jsx)(r.A, {
                                    defaultMessage: "Login",
                                    id: "AyGauy"
                                })
                            }), (0, s.jsx)(j.P, {
                                authType: "login"
                            }), (0, s.jsx)(p.az, {
                                mt: "12",
                                width: "full",
                                children: (0, s.jsx)(_, {})
                            })]
                        }), (0, s.jsx)(h.X, {
                            text: i.formatMessage({
                                defaultMessage: "OR",
                                id: "INlWvJ"
                            })
                        }), (0, s.jsx)(C.G, {
                            method: "ajax"
                        })]
                    })
                })
            };
            var M = i(6225),
                S = !0;
            let I = e => {
                var t, i;
                let n = (0, o.useRouter)(),
                    {
                        data: r
                    } = e,
                    a = (null != (i = null == r || null == (t = r.session) ? void 0 : t.activeUser) ? i : null) !== null;
                return (0, l.useEffect)(() => {
                    if (a) {
                        let e = "string" == typeof n.query.next ? n.query.next : void 0,
                            t = (e ? (0, O.Si)(e) : null) || M.j_;
                        n.push(t)
                    }
                }, [n, a]), (0, s.jsx)(E, {
                    showSpinner: a
                })
            }
        }
    },
    e => {
        e.O(0, [2105, 9979, 8382, 9062, 1718, 3456, 8901, 3013, 9510, 8683, 1975, 6780, 2637, 636, 6593, 8792], () => e(e.s = 66183)), _N_E = e.O()
    }
]);