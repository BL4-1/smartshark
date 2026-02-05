try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8416ea19-72a2-4b84-9b1f-e3cc7b07339c", e._sentryDebugIdIdentifier = "sentry-dbid-8416ea19-72a2-4b84-9b1f-e3cc7b07339c")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3332, 4340], {
        12800: (e, t, n) => {
            "use strict";
            n.d(t, {
                X: () => C
            });
            var s = n(23798);
            n(21462);
            var a = n(57552),
                r = n(86027),
                i = n(62104),
                o = n(86191),
                l = n(2435),
                d = n(56545),
                g = n(26829),
                c = n(14770),
                f = n(28439),
                p = n(64724),
                h = n(2025),
                u = n(88749),
                x = n.n(u),
                m = n(54700),
                j = n(63640),
                y = n(89687),
                _ = n(47725),
                b = n(47717),
                v = n(50675),
                w = n(39746),
                S = n(18840),
                M = n.n(S),
                I = n(6225),
                k = n(11074);
            let z = e => {
                    let {
                        href: t,
                        ...n
                    } = e, r = (0, _.Y4)(), l = (0, m.useRouter)(), d = (0, a.A)(), {
                        variant: g
                    } = (0, v.rk)("gw_lohp_cta_copy_12_2025"), {
                        icon: c,
                        message: f
                    } = (0, w.S)(t || null == g ? void 0 : g.value);
                    return (0, s.jsxs)(i.$, {
                        as: x(),
                        href: t || I.fH,
                        variant: "pillSecondaryOutline",
                        textDecoration: "none",
                        w: "full",
                        maxW: {
                            base: "340px",
                            md: "280px"
                        },
                        onClick: () => r(b.bPR, {
                            ctaType: "footer",
                            isActionUi: !0,
                            pageType: l.asPath
                        }),
                        ...n,
                        children: [d.formatMessage(f), c && (0, s.jsx)(o.I, {
                            as: c,
                            width: "16px",
                            height: "16px",
                            marginLeft: 1
                        })]
                    })
                },
                A = e => (0, s.jsx)(i.$, {
                    as: x(),
                    variant: "secondaryNoColorScheme",
                    target: "_blank",
                    ...{
                        bgColor: "transparent",
                        border: "2px solid",
                        borderColor: "whiteAlpha.200",
                        borderRadius: "lg",
                        color: "text.inverse",
                        fontSize: "20px",
                        gap: 0,
                        height: "60px",
                        justifyContent: "flex-start",
                        lineHeight: 1.25,
                        paddingX: 4,
                        paddingY: 3,
                        width: "167px",
                        _hover: {
                            borderColor: "whiteAlpha.400",
                            opacity: .95
                        }
                    },
                    ...e
                }),
                C = e => {
                    let {
                        heading: t,
                        href: n
                    } = e, [a] = (0, l.U)("(max-width: 396px)");
                    return (0, s.jsxs)(d.T, {
                        w: "full",
                        pt: "90px",
                        pb: 12,
                        px: {
                            base: 5,
                            md: 8
                        },
                        gap: 12,
                        justifyContent: "center",
                        alignItems: "center",
                        background: k.K7.lohpDarkBg,
                        color: "white",
                        children: [(0, s.jsxs)(d.T, {
                            gap: 9,
                            textAlign: "center",
                            children: [(0, s.jsxs)(g.az, {
                                children: [(0, s.jsx)(c.D, {
                                    fontWeight: "medium",
                                    style: M().style,
                                    fontSize: {
                                        base: "48px",
                                        lg: "60px"
                                    },
                                    letterSpacing: "tight",
                                    lineHeight: "110%",
                                    mb: 6,
                                    children: t || (0, s.jsx)(r.A, {
                                        defaultMessage: "Everyone is a math person",
                                        id: "gtAqhG"
                                    })
                                }), (0, s.jsx)(f.E, {
                                    fontSize: {
                                        base: "16px",
                                        md: "20px"
                                    },
                                    fontWeight: "400",
                                    mb: 0,
                                    children: (0, s.jsx)(r.A, {
                                        defaultMessage: "Join over 10 million people learning interactively.",
                                        id: "8I20Rg"
                                    })
                                })]
                            }), (0, s.jsx)(z, {
                                href: n
                            })]
                        }), (0, s.jsxs)(p.B, {
                            direction: a ? "column" : "row",
                            w: "full",
                            maxW: "container.lg",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: a ? 4 : 6,
                            children: [(0, s.jsx)(A, {
                                href: I.qf,
                                leftIcon: (0, s.jsx)(j.E, {}),
                                children: (0, s.jsxs)(d.T, {
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                    gap: 1,
                                    children: [(0, s.jsx)(f.E, {
                                        fontSize: "xs",
                                        lineHeight: 1,
                                        children: (0, s.jsx)(r.A, {
                                            defaultMessage: "Download on the",
                                            id: "QjQqkW"
                                        })
                                    }), (0, s.jsx)(f.E, {
                                        as: "span",
                                        fontWeight: 700,
                                        fontSize: "md",
                                        lineHeight: 1,
                                        children: (0, s.jsx)(r.A, {
                                            defaultMessage: "App Store",
                                            id: "GuYqZ3"
                                        })
                                    })]
                                })
                            }), (0, s.jsx)(A, {
                                href: I.$F,
                                leftIcon: (0, s.jsx)(y.$, {}),
                                children: (0, s.jsxs)(d.T, {
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                    gap: 1,
                                    children: [(0, s.jsx)(f.E, {
                                        fontSize: "xs",
                                        lineHeight: 1,
                                        children: (0, s.jsx)(r.A, {
                                            defaultMessage: "Get it on",
                                            id: "xw3bdV"
                                        })
                                    }), (0, s.jsx)(f.E, {
                                        as: "span",
                                        fontWeight: 700,
                                        fontSize: "md",
                                        lineHeight: 1,
                                        children: (0, s.jsx)(r.A, {
                                            defaultMessage: "Google Play",
                                            id: "+1VvTZ"
                                        })
                                    })]
                                })
                            })]
                        }), (0, s.jsx)(h._, {
                            src: "/images/homepage/everyone-is-a-math-person.svg",
                            alt: ""
                        })]
                    })
                }
        },
        26225: (e, t, n) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(56973)
            }])
        },
        39746: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => r
            });
            var s = n(41929);
            let a = (0, n(38624).A)("arrow-up-right", [
                    ["path", {
                        d: "M7 7h10v10",
                        key: "1tivn9"
                    }],
                    ["path", {
                        d: "M7 17 17 7",
                        key: "1vkiza"
                    }]
                ]),
                r = e => "get_started_for_free" === e ? {
                    message: (0, s.zR)({
                        defaultMessage: "Get started for free",
                        id: "zn5JnP"
                    })
                } : "start_learning_for_free" === e ? {
                    message: (0, s.zR)({
                        defaultMessage: "Start learning for free",
                        id: "IKhKZP"
                    })
                } : "learn_for_free_today" === e ? {
                    message: (0, s.zR)({
                        defaultMessage: "Learn for free today",
                        id: "cHccEs"
                    })
                } : "try_for_free" === e ? {
                    icon: a,
                    message: (0, s.zR)({
                        defaultMessage: "Try for free",
                        id: "KWvjJB"
                    })
                } : {
                    message: (0, s.zR)({
                        defaultMessage: "Get started",
                        id: "/aBLH2"
                    })
                }
        },
        56973: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: () => _,
                default: () => b
            });
            var s = n(23798),
                a = n(21462),
                r = n(57552),
                i = n(95046),
                o = n.n(i),
                l = n(68113),
                d = n(48388),
                g = n(32374),
                c = n(12800),
                f = n(78954),
                p = n(33991),
                h = n(1913),
                u = n(57593),
                x = n(50675),
                m = n(82313),
                j = n(39746);
            let y = o()(() => Promise.all([n.e(8382), n.e(4176)]).then(n.bind(n, 52844)).then(e => e.SponsorModal), {
                loadableGenerated: {
                    webpack: () => [52844]
                },
                ssr: !1
            });
            var _ = !0;
            let b = e => {
                var t, n, i;
                let {
                    userIsMobile: o,
                    ..._
                } = e, b = (0, r.A)(), v = (0, m.e)(), {
                    trackExperimentExposure: w,
                    variant: S
                } = (0, x.rk)("gw_lohp_cta_copy_12_2025");
                (0, a.useEffect)(() => {
                    w()
                }, [w]);
                let M = (0, j.S)(null == S ? void 0 : S.value),
                    I = null != (n = null == _ ? void 0 : _.data.banner) ? n : null,
                    k = null != (i = null == _ ? void 0 : _.data.monetization) ? i : null,
                    z = b.formatMessage({
                        defaultMessage: "Brilliant | Learn by doing",
                        id: "V3O3pI"
                    }),
                    A = b.formatMessage({
                        defaultMessage: "Guided interactive problem solving that’s effective and fun. Try thousands of interactive lessons in math, programming, data analysis, AI, science, and more.",
                        id: "XCHdwI"
                    }),
                    C = null == k ? void 0 : k.discount,
                    E = null == C || null == (t = C.sponsor) ? void 0 : t.audienceName,
                    T = null == C ? void 0 : C.percentOff,
                    [H, P] = a.useState(!!(null == C ? void 0 : C.sponsor));
                return (0, s.jsxs)(h.y, {
                    fullWidth: !0,
                    align: "stretch",
                    hideHeader: !0,
                    children: [(0, s.jsxs)(u.b, {
                        children: [(0, s.jsx)("title", {
                            children: z
                        }), (0, s.jsx)("meta", {
                            name: "description",
                            content: A
                        }), (0, s.jsx)("meta", {
                            property: "og:description",
                            content: A
                        }), (0, s.jsx)("meta", {
                            property: "og:title",
                            content: z
                        }), (0, s.jsx)("meta", {
                            property: "og:image",
                            content: "".concat(v, "/images/opengraph/learn-interactively.png")
                        }), (0, s.jsx)("meta", {
                            property: "og:url",
                            content: v
                        }), (0, s.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, s.jsx)("meta", {
                            name: "twitter:site",
                            content: "@brilliantorg"
                        }), (0, s.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        })]
                    }), (0, s.jsx)(g.j, {
                        banner: I
                    }), (0, s.jsx)(d.S, {
                        isMobile: o,
                        getStartedButtonProps: {
                            icon: M.icon,
                            message: M.message
                        }
                    }), (0, s.jsx)(f.E, {}), (0, s.jsx)(p.B, {
                        pageContext: "lohp-refresh"
                    }), (0, s.jsx)(l.n, {}), (0, s.jsx)(c.X, {}), E && T && (0, s.jsx)(y, {
                        isOpen: H,
                        onClose: () => P(!1),
                        couponCodeName: E,
                        discount: T
                    })]
                })
            }
        }
    },
    e => {
        e.O(0, [5857, 2105, 9979, 9062, 1814, 1718, 209, 7793, 1975, 5096, 876, 636, 6593, 8792], () => e(e.s = 26225)), _N_E = e.O()
    }
]);