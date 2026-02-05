try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bdf428b4-e9de-457b-9078-dd059a1461aa", e._sentryDebugIdIdentifier = "sentry-dbid-bdf428b4-e9de-457b-9078-dd059a1461aa")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [876], {
        1913: (e, a, t) => {
            t.d(a, {
                y: () => k
            });
            var s = t(23798),
                i = t(21462),
                r = t(22159),
                l = t(95046),
                n = t.n(l),
                o = t(54700),
                C = t(77147),
                d = t(5732),
                g = t(26829),
                c = t(42562),
                u = t(90914),
                h = t(74049);
            let m = () => {
                    var e, a, t, i;
                    let {
                        data: r
                    } = (0, h.XAw)({});
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(c.z, {
                            variant: "secondaryNoColorScheme",
                            h: 12,
                            py: 4,
                            px: 6
                        }), (0, s.jsx)(u.Q, {
                            href: "/",
                            chakraLinkProps: {
                                _hover: {
                                    opacity: "0.7",
                                    textDecor: "none"
                                }
                            },
                            children: (0, s.jsx)(g.jl, {
                                bg: "yellow.500",
                                color: "white",
                                size: 10,
                                children: null != (i = null == r || null == (t = r.session) || null == (a = t.activeUser) || null == (e = a.firstName) ? void 0 : e.charAt(0)) ? i : ""
                            })
                        })]
                    })
                },
                p = () => (0, s.jsx)(C.e, {
                    position: "sticky",
                    children: (0, s.jsx)(d.z, {
                        spacing: 4,
                        display: {
                            base: "none",
                            lg: "flex"
                        },
                        children: (0, s.jsx)(m, {})
                    })
                });
            var x = t(82095),
                f = t(70501),
                b = t(62256),
                j = t(41929),
                v = t(31570),
                L = t(6225);
            let M = () => {
                    let e = encodeURIComponent((0, o.useRouter)().asPath);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(v.l, {
                            href: (0, L.Zi)(e),
                            message: (0, j.zR)({
                                defaultMessage: "Sign in",
                                id: "SQJto2"
                            }),
                            display: {
                                base: "none",
                                lg: "inline-flex"
                            },
                            py: 4,
                            px: 6
                        }), (0, s.jsx)(v.l, {
                            href: L.fH,
                            colorScheme: "green",
                            variant: "primary",
                            message: (0, j.zR)({
                                defaultMessage: "Sign up",
                                id: "8HJxXG"
                            }),
                            py: 4,
                            px: 5
                        })]
                    })
                },
                y = () => (0, s.jsx)(C.e, {
                    children: (0, s.jsx)(d.z, {
                        spacing: 2,
                        children: (0, s.jsx)(M, {})
                    })
                }),
                w = () => {
                    let {
                        isOpen: e,
                        onClose: a,
                        onOpen: t
                    } = (0, x.j)(), r = i.useCallback(() => {
                        window.scrollY > 200 ? t() : a()
                    }, [t, a]);
                    return i.useEffect(() => (r(), window.addEventListener("scroll", r), () => {
                        window.removeEventListener("scroll", r)
                    }), [r]), (0, s.jsxs)(f.s, {
                        w: "100%",
                        zIndex: "appBar",
                        children: [(0, s.jsx)(y, {}), (0, s.jsx)(b.q, {
                            direction: "top",
                            in: e,
                            style: {
                                marginTop: "0"
                            },
                            children: (0, s.jsx)(y, {})
                        })]
                    })
                },
                A = n()(() => Promise.all([t.e(9979), t.e(3392), t.e(2991), t.e(3928), t.e(7735), t.e(7967), t.e(3261)]).then(t.bind(t, 17967)).then(e => e.Banner), {
                    loadableGenerated: {
                        webpack: () => [17967]
                    },
                    ssr: !1
                }),
                V = e => {
                    var a, t;
                    let {
                        hideBannerForLoggedIn: r = !1
                    } = e, l = (0, o.useRouter)(), {
                        data: n,
                        error: d,
                        loading: g,
                        refetch: c
                    } = (0, h.XAw)({}), {
                        data: u,
                        refetch: m
                    } = (0, h.On5)({
                        variables: {
                            route: l.asPath
                        }
                    });
                    return ((0, i.useEffect)(() => {
                        c(), m()
                    }, [l.asPath, c, m]), g || d || !n) ? (0, s.jsx)(C.e, {}) : (null != (t = null == (a = n.session) ? void 0 : a.activeUser) ? t : null) ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(p, {}), (null == u ? void 0 : u.banner) && !r && (0, s.jsx)(A, {
                            banner: u.banner
                        })]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(null == u ? void 0 : u.banner) && (0, s.jsx)(A, {
                            banner: u.banner
                        }), (0, s.jsx)(w, {})]
                    })
                };
            var Z = t(32705),
                H = t(77142),
                S = t(51399);
            let k = e => {
                let {
                    children: a,
                    contentProps: t,
                    fullWidth: i,
                    headerProps: l,
                    hideFooter: n,
                    hideHeader: o,
                    ...C
                } = e, d = (0, S.JK)();
                return (0, s.jsxs)(Z.v, { ...C,
                    children: [!o && !d && (0, s.jsx)(V, { ...l
                    }), i ? a : (0, s.jsx)(H.c, {
                        outerContainerStyles: t,
                        children: a
                    }), !n && !d && (0, s.jsx)(r.w, {})]
                })
            }
        },
        31570: (e, a, t) => {
            t.d(a, {
                l: () => o
            });
            var s = t(23798),
                i = t(57552),
                r = t(62104),
                l = t(88749),
                n = t.n(l);
            let o = e => {
                let {
                    href: a,
                    message: t,
                    nextLinkProps: l,
                    ...o
                } = e, C = (0, i.A)();
                return (0, s.jsx)(n(), {
                    href: a,
                    ...l,
                    children: (0, s.jsx)(r.$, {
                        variant: "secondaryNoColorScheme",
                        h: 12,
                        ...o,
                        children: C.formatMessage(t)
                    })
                })
            }
        },
        32374: (e, a, t) => {
            t.d(a, {
                j: () => L
            });
            var s = t(23798),
                i = t(21462),
                r = t(41929),
                l = t(5732),
                n = t(82095),
                o = t(70501),
                C = t(62256),
                d = t(95046),
                g = t.n(d),
                c = t(54700),
                u = t(47725),
                h = t(13423),
                m = t(31570),
                p = t(77147),
                x = t(47717);
            let f = g()(() => Promise.all([t.e(9979), t.e(3392), t.e(2991), t.e(3928), t.e(7735), t.e(7967), t.e(3261)]).then(t.bind(t, 17967)).then(e => e.Banner), {
                    loadableGenerated: {
                        webpack: () => [17967]
                    },
                    ssr: !1
                }),
                b = e => {
                    let a = (0, c.useRouter)(),
                        t = (0, u.Y4)(),
                        {
                            openLoginOrSignupModal: i
                        } = (0, h.QN)();
                    return (0, s.jsx)(m.l, {
                        href: "/login",
                        onClick: e => {
                            e.preventDefault(), i(h.VN.LoginOptions), t(x.NdY, {
                                isActionUi: !0,
                                pageType: a.asPath
                            })
                        },
                        message: (0, r.zR)({
                            defaultMessage: "Sign in",
                            id: "SQJto2"
                        }),
                        display: "inline-flex",
                        ...e
                    })
                },
                j = () => (0, s.jsx)(p.e, {
                    pt: {
                        base: 3,
                        md: 6
                    },
                    borderBottom: 0,
                    children: (0, s.jsx)(b, {})
                }),
                v = () => {
                    let e = (0, u.Y4)(),
                        a = (0, c.useRouter)();
                    return (0, s.jsx)(p.e, {
                        children: (0, s.jsxs)(l.z, {
                            spacing: 2,
                            children: [(0, s.jsx)(b, {
                                display: {
                                    base: "none",
                                    md: "inline-flex"
                                }
                            }), (0, s.jsx)(m.l, {
                                href: "/welcome/",
                                nextLinkProps: {
                                    prefetch: !0
                                },
                                colorScheme: "green",
                                variant: "primary",
                                message: (0, r.zR)({
                                    defaultMessage: "Get started",
                                    id: "/aBLH2"
                                }),
                                display: "inline-flex",
                                onClick: () => e(x.bPR, {
                                    ctaType: "header",
                                    isActionUi: !0,
                                    pageType: a.asPath
                                })
                            })]
                        })
                    })
                },
                L = e => {
                    let {
                        banner: a
                    } = e, {
                        isOpen: t,
                        onClose: r,
                        onOpen: l
                    } = (0, n.j)(), d = i.useCallback(() => {
                        window.scrollY > 200 ? l() : window.scrollY < 92 && r()
                    }, [l, r]);
                    return (0, i.useEffect)(() => (window.addEventListener("scroll", d), () => window.removeEventListener("scroll", d)), [d]), (0, s.jsxs)(o.s, {
                        direction: "column",
                        w: "100%",
                        zIndex: "appBar",
                        children: [a && (0, s.jsx)(f, {
                            banner: a
                        }), (0, s.jsx)(j, {}), (0, s.jsx)(C.q, {
                            direction: "top",
                            in: t,
                            style: {
                                zIndex: 10
                            },
                            children: (0, s.jsx)(v, {})
                        })]
                    })
                }
        },
        33991: (e, a, t) => {
            t.d(a, {
                B: () => D
            });
            var s = t(23798),
                i = t(76759),
                r = t(26829),
                l = t(70501),
                n = t(56545),
                o = t(14770),
                C = t(28439),
                d = t(25096),
                g = t(18840),
                c = t.n(g),
                u = t(11074),
                h = t(73699);
            let m = e => {
                let {
                    assetAlignment: a,
                    gradientColor: t,
                    gradientColorStart: i,
                    heading: d,
                    imageSrc: g,
                    pinAssetToBottom: m,
                    subtitle: p
                } = e, x = (0, h.N)("colors", t).reference, f = i ? (0, h.N)("colors", i).reference : "white", b = "left" === a;
                return (0, s.jsx)(r.az, {
                    as: "section",
                    position: "relative",
                    background: {
                        base: (0, u.hW)(x, "up", f),
                        lg: (0, u.hW)(x, b ? "right" : "left", f)
                    },
                    px: {
                        base: 6,
                        lg: 8
                    },
                    maxW: "100vw",
                    overflow: "hidden",
                    pt: {
                        base: 16,
                        lg: 0
                    },
                    pb: {
                        base: 16 * !m,
                        lg: 0
                    },
                    children: (0, s.jsxs)(l.s, {
                        flexDirection: {
                            base: "column",
                            lg: b ? "row-reverse" : "row"
                        },
                        maxW: {
                            base: "full",
                            sm: "container.sm",
                            md: "container.md",
                            lg: "container.lg",
                            xl: "container.xl"
                        },
                        marginX: "auto",
                        gap: {
                            base: 4,
                            lg: 6
                        },
                        alignItems: {
                            base: "flex-start",
                            lg: "center"
                        },
                        justifyContent: {
                            base: "center",
                            lg: "space-between"
                        },
                        children: [(0, s.jsxs)(n.T, {
                            flex: "1",
                            spacing: 6,
                            alignItems: "flex-start",
                            textAlign: "left",
                            gap: 6,
                            maxWidth: {
                                base: "100%",
                                lg: "480px"
                            },
                            justifyContent: {
                                base: "start",
                                lg: "center"
                            },
                            justifySelf: {
                                base: "auto",
                                lg: "left" === a ? "start" : "end"
                            },
                            mb: {
                                base: 4,
                                lg: 0
                            },
                            children: [(0, s.jsx)(o.D, {
                                as: "h2",
                                style: c().style,
                                width: "100%",
                                fontSize: {
                                    base: "5xl",
                                    lg: "6xl"
                                },
                                fontWeight: "normal",
                                textAlign: "left",
                                letterSpacing: "tight",
                                lineHeight: "110%",
                                children: d
                            }), (0, s.jsx)(C.E, {
                                children: p
                            })]
                        }), (0, s.jsx)(r.az, {
                            flexShrink: 0,
                            flex: 1,
                            width: {
                                base: "100%"
                            },
                            position: "relative",
                            minHeight: {
                                base: "300px",
                                lg: "728px"
                            },
                            marginLeft: {
                                base: 0,
                                lg: (b ? 1 : -1) * 6
                            },
                            _before: {
                                backgroundImage: "url(".concat(g, ")"),
                                backgroundPosition: {
                                    base: "center",
                                    lg: m ? "bottom" : "center"
                                },
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                                bottom: 0,
                                content: '""',
                                height: "100%",
                                left: {
                                    base: "0",
                                    lg: b ? 0 : "auto"
                                },
                                objectFit: "cover",
                                position: "absolute",
                                right: {
                                    base: 0,
                                    lg: b ? "auto" : 0
                                },
                                width: {
                                    base: "100%",
                                    lg: "90%"
                                }
                            }
                        })]
                    })
                })
            };
            var p = t(86027);
            let x = [{
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Concepts{br}that click",
                        id: "Zr4L5f",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/concepts-that-click.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Interactive lessons make even complex ideas easy to grasp. Instant, custom feedback accelerates your understanding.",
                        id: "Iboe7y"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "purple.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Learn at{br}your level",
                        id: "9Ad9Z1",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/redesign/lohp-learn-at-your-level.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Brush up on the basics or learn new skills. Designed for learners ages 13 to{nbsp}113.",
                        id: "0uiP02",
                        values: {
                            nbsp: (0, s.jsx)("span", {
                                children: "\xa0"
                            })
                        }
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "pear.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/redesign/stay-motivated-v3.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Finish every day smarter with engaging lessons, competitive features, and daily encouragement.",
                        id: "If6Dv5"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "orange.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Guided {biteSized} lessons",
                        id: "x3EaIg",
                        values: {
                            biteSized: (0, s.jsx)("span", {
                                style: {
                                    whiteSpace: "nowrap"
                                },
                                children: (0, s.jsx)(p.A, {
                                    defaultMessage: "bite-sized",
                                    id: "YySLu/"
                                })
                            })
                        }
                    }),
                    imageSrc: "/images/homepage/redesign/lohp-guided-bite-sized.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay on track, see your progress, and build your problem solving skills one concept at a{nbsp}time.",
                        id: "urzavU",
                        values: {
                            nbsp: (0, s.jsx)("span", {
                                children: "\xa0"
                            })
                        }
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "green.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "More effective.{br}More fun.",
                        id: "52yfLJ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/redesign/more-effective-v3.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Brilliant’s interactive approach teaches you to think, not memorize.",
                        id: "ckcsNm"
                    })
                }],
                f = [{
                    assetAlignment: "left",
                    gradientColor: "teal.100",
                    gradientColorStart: "gray.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to{br}learn math",
                        id: "Vg++pN",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/math/better-way.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Our visual, interactive canvas makes even complex math concepts feel intuitive. Custom, intelligent feedback catches mistakes as you learn.",
                        id: "Djpu6x"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Personalized{br}learning",
                        id: "5al4qG",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/math/personalized-learning.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at your level and ramp up fast. Brilliant tracks the concepts you’ve mastered and designs practice sets based on your progress.",
                        id: "sq+ITK"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}mathematician",
                        id: "r9V5yF",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/math/think-like-mathematician.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Build mathematical intuition as you learn through “aha” moments, not memorizing answers.",
                        id: "2vO3/9"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "purple.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Guided math{br}lessons",
                        id: "vH124l",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/shared/guided-lessons.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From foundational algebra to calculus, we help you stay on track and build your problem-solving skills one concept at a time.",
                        id: "8YtABx"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/shared/stay-motivated.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Finish every day smarter with engaging lessons, competitive features, and daily encouragement.",
                        id: "If6Dv5"
                    })
                }],
                b = [{
                    assetAlignment: "left",
                    gradientColor: "teal.100",
                    gradientColorStart: "gray.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to{br}learn CS",
                        id: "E/2hNL",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/cs/better-way.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Interactive lessons in plain English (not syntax) make even complex ideas feel intuitive. Custom, intelligent feedback catches mistakes as you learn.",
                        id: "xBRQN4"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Personalized{br}learning",
                        id: "5al4qG",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/cs/personalized-learning.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at your level and ramp up fast. Brilliant tracks the concepts you’ve mastered and designs practice sets based on your progress.",
                        id: "sq+ITK"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "teal.100",
                    gradientColorStart: "gray.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}programmer",
                        id: "GkIgtw",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/cs/think-like-programmer.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Instead of focusing on syntax errors, you’ll master core concepts in computer logic before moving to more advanced topics.",
                        id: "EYK0er"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "purple.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Guided CS{br}lessons",
                        id: "fPpp2f",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/shared/guided-lessons.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From Python for beginners to advanced algorithms, we help you stay on track and build your problem-solving skills one concept at a time.",
                        id: "oyGWlG"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/shared/stay-motivated.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Finish every day smarter with engaging lessons, competitive features, and daily encouragement.",
                        id: "If6Dv5"
                    })
                }],
                j = [{
                    assetAlignment: "left",
                    gradientColor: "purple.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to learn science",
                        id: "Q3Ay1w"
                    }),
                    imageSrc: "/images/homepage/science/better-way.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Visual, interactive learning makes even complex concepts feel intuitive and approachable.",
                        id: "fMN8Z2"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at{br}your level",
                        id: "JzpCpW",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/science/start-at-your-level.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From foundational physics to quantum mechanics, we start you at the right level and help you advance, one step at a time.",
                        id: "dVuWAm"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}scientist",
                        id: "qKUExo",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/science/think-like.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Build scientific intuition as you learn through “aha” moments, not memorizing answers.",
                        id: "L/0Li5"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Learn at your{br}own pace",
                        id: "8FVbem",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/science/learn-at-your-own-pace.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "We personalize your experience by providing instant, custom feedback as you solve problems and recommending next steps.",
                        id: "r6eDii"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/science/stay-motivated.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Keep on track with engaging lessons, competitive features, and daily encouragement.",
                        id: "KfgCiW"
                    })
                }],
                v = [{
                    assetAlignment: "left",
                    gradientColor: "purple.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to learn data analysis",
                        id: "LPFYYw"
                    }),
                    imageSrc: "/images/homepage/data/better-way.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Visual, interactive learning makes even complex concepts feel intuitive and approachable.",
                        id: "fMN8Z2"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "orange.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at{br}your level",
                        id: "JzpCpW",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/data/start-at-your-level.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From foundational statistics to advanced data structures, we start you at the right level and help you make progress, one step at a time.",
                        id: "2n03Bu"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "purple.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}data scientist",
                        id: "7XDR5J",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/data/think-like.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Build your intuition through “aha” moments, not memorizing answers.",
                        id: "EFaSWg"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "orange.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Learn at your{br}own pace",
                        id: "8FVbem",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/data/learn-at-your-own-pace.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "We personalize your experience by providing instant, custom feedback as you solve problems and recommending next steps.",
                        id: "r6eDii"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/data/stay-motivated.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Keep on track with engaging lessons, competitive features, and daily encouragement.",
                        id: "KfgCiW"
                    })
                }],
                L = [{
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to learn AI",
                        id: "ZKA+Xp"
                    }),
                    imageSrc: "/images/homepage/ai-tech/better-way.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Visual, interactive learning makes even complex concepts feel intuitive and approachable.",
                        id: "fMN8Z2"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "purple.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at{br}your level",
                        id: "JzpCpW",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/ai-tech/start-at-your-level.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From the basics of LLMs to quantum computing, we start you at the right level and help you make progress, one step at a time.",
                        id: "EumuI5"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}computer scientist",
                        id: "6gZc92",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/ai-tech/think-like.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Learn to break down problems systematically and use AI coding assistants more effectively.",
                        id: "NCNToN"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "purple.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Learn at your{br}own pace",
                        id: "8FVbem",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/ai-tech/learn-at-your-own-pace.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "We personalize your experience by providing instant, custom feedback as you solve problems and recommending next steps.",
                        id: "r6eDii"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/ai-tech/stay-motivated.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Keep on track with engaging lessons, competitive features, and daily encouragement.",
                        id: "KfgCiW"
                    })
                }],
                M = [{
                    assetAlignment: "left",
                    gradientColor: "teal.100",
                    gradientColorStart: "gray.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to learn Python",
                        id: "dKMDBg"
                    }),
                    imageSrc: "/images/homepage/refresh/python/better-way.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Interactive lessons that focus on the logic of programs (not syntax) make even complex ideas feel intuitive. Custom, intelligent feedback catches mistakes as you learn.",
                        id: "W8SLNR"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Personalized learning",
                        id: "GnUJnA"
                    }),
                    imageSrc: "/images/homepage/refresh/cs/personalized-learning.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at your level and ramp up fast. Brilliant tracks the concepts you’ve mastered and designs practice sets based on your progress.",
                        id: "sq+ITK"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "teal.100",
                    gradientColorStart: "gray.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}programmer",
                        id: "GkIgtw",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/python/think-like-programmer.png",
                    pinAssetToBottom: !0,
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Get fluent in coding logic and learn how to debug Python programs with confidence.",
                        id: "m/bpy/"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "purple.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Guided{br}lessons",
                        id: "/ti+a6",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/shared/guided-lessons.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From Python for beginners to advanced algorithms, we help you stay on track and build your problem-solving skills one concept at a time.",
                        id: "oyGWlG"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/shared/stay-motivated.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Finish every day smarter with engaging lessons, competitive features, and daily encouragement.",
                        id: "If6Dv5"
                    })
                }],
                y = [{
                    assetAlignment: "left",
                    gradientColor: "teal.100",
                    gradientColorStart: "gray.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to{br}learn algebra",
                        id: "1tmMbX",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/algebra/better-way.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Our visual, interactive canvas makes even complex algebra concepts feel intuitive. Custom, intelligent feedback catches mistakes as you learn.",
                        id: "NWJ4ip"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Personalized{br}learning",
                        id: "5al4qG",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/algebra/personalized-learning.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at your level and ramp up fast. Brilliant tracks the concepts you’ve mastered and designs practice sets based on your progress.",
                        id: "sq+ITK"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "teal.100",
                    gradientColorStart: "gray.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}mathematician",
                        id: "r9V5yF",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/algebra/think-like-mathematician.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Build mathematical intuition as you learn through “aha” moments, not memorizing answers.",
                        id: "2vO3/9"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "purple.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Guided algebra{br}lessons",
                        id: "cKQcBW",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/shared/guided-lessons.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From finding unknowns to defining functions, we help you stay on track and build your problem-solving skills one concept at a time.",
                        id: "KP2sPK"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/shared/stay-motivated.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Finish every day smarter with engaging lessons, competitive features, and daily encouragement.",
                        id: "If6Dv5"
                    })
                }],
                w = [{
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to learn calculus",
                        id: "/BXuBL"
                    }),
                    imageSrc: "/images/topics/calculus/better-way.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Visual, interactive learning makes even complex concepts feel intuitive and approachable.",
                        id: "fMN8Z2"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at{br}your level",
                        id: "JzpCpW",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/calculus/start-at-your-level.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From algebra foundations to advanced applications, we start you at the right level and help you excel, one step at a time.",
                        id: "yMv0qT"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}mathematician",
                        id: "r9V5yF",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/calculus/think-like.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Build mathematical intuition as you learn through “aha” moments, not memorizing answers.",
                        id: "2vO3/9"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Learn at your{br}own pace",
                        id: "8FVbem",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/calculus/learn-at-your-own-pace.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "We personalize your experience by providing instant, custom feedback as you solve problems and recommending next steps.",
                        id: "r6eDii"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/calculus/stay-motivated.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Keep on track with engaging lessons, competitive features, and daily encouragement.",
                        id: "KfgCiW"
                    })
                }],
                A = [{
                    assetAlignment: "left",
                    gradientColor: "teal.100",
                    gradientColorStart: "gray.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to learn coding",
                        id: "HZpzX1"
                    }),
                    imageSrc: "/images/homepage/refresh/cs/better-way.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Interactive lessons in plain English (not syntax) make even complex ideas feel intuitive. Custom, intelligent feedback catches mistakes as you learn.",
                        id: "xBRQN4"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Personalized learning",
                        id: "GnUJnA"
                    }),
                    imageSrc: "/images/homepage/refresh/cs/personalized-learning.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at your level and ramp up fast. Brilliant tracks the concepts you’ve mastered and designs practice sets based on your progress.",
                        id: "sq+ITK"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "teal.100",
                    gradientColorStart: "gray.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}programmer",
                        id: "GkIgtw",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/cs/think-like-programmer.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Instead of focusing on syntax errors, you’ll master core concepts in computer logic before moving to more advanced topics.",
                        id: "EYK0er"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "purple.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Guided coding lessons",
                        id: "kAeCDW"
                    }),
                    imageSrc: "/images/homepage/refresh/shared/guided-lessons.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From Python for beginners to advanced algorithms, we help you stay on track and build your problem-solving skills one concept at a time.",
                        id: "oyGWlG"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/shared/stay-motivated.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Finish every day smarter with engaging lessons, competitive features, and daily encouragement.",
                        id: "If6Dv5"
                    })
                }],
                V = [{
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to learn geometry",
                        id: "IcBgsc"
                    }),
                    imageSrc: "/images/topics/geometry/better-way.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Visual, interactive learning makes even complex concepts feel intuitive and approachable.",
                        id: "fMN8Z2"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at{br}your level",
                        id: "JzpCpW",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/geometry/start-at-your-level.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From angles in polygons to trigonometric functions, we start you at the right level and help you advance, one step at a time.",
                        id: "Xm+GSf"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}mathematician",
                        id: "r9V5yF",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/geometry/think-like.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Build mathematical intuition as you learn through “aha” moments, not memorizing answers.",
                        id: "2vO3/9"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Learn at your{br}own pace",
                        id: "8FVbem",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/geometry/learn-at-your-own-pace.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "We personalize your experience by providing instant, custom feedback as you solve problems and recommending next steps.",
                        id: "r6eDii"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/geometry/stay-motivated.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Keep on track with engaging lessons, competitive features, and daily encouragement.",
                        id: "KfgCiW"
                    })
                }],
                Z = [{
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to learn college math",
                        id: "O0Svbg"
                    }),
                    imageSrc: "/images/topics/collegemath/better-way.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Visual, interactive learning makes even complex concepts feel intuitive and approachable.",
                        id: "fMN8Z2"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at{br}your level",
                        id: "JzpCpW",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/collegemath/start-at-your-level.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From algebra foundations to advanced applications, we start you at the right level and help you excel, one step at a time.",
                        id: "yMv0qT"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}mathematician",
                        id: "r9V5yF",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/collegemath/think-like.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Build mathematical intuition as you learn through “aha” moments, not memorizing answers.",
                        id: "2vO3/9"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Learn at your{br}own pace",
                        id: "8FVbem",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/collegemath/learn-at-your-own-pace.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "We personalize your experience by providing instant, custom feedback as you solve problems and recommending next steps.",
                        id: "r6eDii"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/collegemath/stay-motivated.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Keep on track with engaging lessons, competitive features, and daily encouragement.",
                        id: "KfgCiW"
                    })
                }],
                H = [{
                    assetAlignment: "left",
                    gradientColor: "purple.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to learn statistics",
                        id: "fbjN/o"
                    }),
                    imageSrc: "/images/topics/statistics/better-way.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Visual, interactive learning makes even complex concepts feel intuitive and approachable.",
                        id: "fMN8Z2"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "orange.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at{br}your level",
                        id: "JzpCpW",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/statistics/start-at-your-level.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From data visualization to machine learning algorithms, we start you at the right level and help you make progress, one step at a time.",
                        id: "BoVns6"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "purple.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}data scientist",
                        id: "7XDR5J",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/statistics/think-like.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Build your intuition through “aha” moments, not memorizing answers.",
                        id: "EFaSWg"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "orange.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Learn at your{br}own pace",
                        id: "8FVbem",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/statistics/learn-at-your-own-pace.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "We personalize your experience by providing instant, custom feedback as you solve problems and recommending next steps.",
                        id: "r6eDii"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/statistics/stay-motivated.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Keep on track with engaging lessons, competitive features, and daily encouragement.",
                        id: "KfgCiW"
                    })
                }],
                S = [{
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to learn fractions",
                        id: "WtehTq"
                    }),
                    imageSrc: "/images/topics/fractions/better-way.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Visual, interactive learning makes even complex concepts feel intuitive and approachable.",
                        id: "fMN8Z2"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at{br}your level",
                        id: "JzpCpW",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/fractions/start-at-your-level.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From adding fractions to graphing comparisons, we start you at the right level and help you advance, one step at a time.",
                        id: "xf301l"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}mathematician",
                        id: "r9V5yF",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/fractions/think-like.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Build mathematical intuition as you learn through “aha” moments, not memorizing answers.",
                        id: "2vO3/9"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Learn at your{br}own pace",
                        id: "8FVbem",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/fractions/learn-at-your-own-pace.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "We personalize your experience by providing instant, custom feedback as you solve problems and recommending next steps.",
                        id: "r6eDii"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/fractions/stay-motivated.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Keep on track with engaging lessons, competitive features, and daily encouragement.",
                        id: "KfgCiW"
                    })
                }];
            p.A, p.A, p.A, p.A, p.A, p.A, p.A, p.A, p.A, p.A;
            let k = [{
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to learn equations",
                        id: "vcRVsL"
                    }),
                    imageSrc: "/images/topics/equations/better-way.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Visual, interactive learning makes even complex concepts feel intuitive and approachable.",
                        id: "fMN8Z2"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at{br}your level",
                        id: "JzpCpW",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/equations/start-at-your-level.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From building expressions to graphing inequalities, we start you at the right level and help you excel, one step at a time.",
                        id: "EiruxC"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}mathematician",
                        id: "r9V5yF",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/equations/think-like.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Build mathematical intuition as you learn through “aha” moments, not memorizing answers.",
                        id: "2vO3/9"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Learn at your{br}own pace",
                        id: "8FVbem",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/equations/learn-at-your-own-pace.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "We personalize your experience by providing instant, custom feedback as you solve problems and recommending next steps.",
                        id: "r6eDii"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/equations/stay-motivated.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Keep on track with engaging lessons, competitive features, and daily encouragement.",
                        id: "KfgCiW"
                    })
                }],
                z = [{
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to learn high school math",
                        id: "LkMpAZ"
                    }),
                    imageSrc: "/images/topics/high-school-math/better-way.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Visual, interactive learning makes even complex concepts feel intuitive and approachable.",
                        id: "fMN8Z2"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at{br}your level",
                        id: "JzpCpW",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/high-school-math/start-at-your-level.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From the basics of algebra to advanced calculus, we start you at the right level and help you excel in high school math, one step at a time.",
                        id: "7ARPfg"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}mathematician",
                        id: "r9V5yF",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/high-school-math/think-like.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Build mathematical intuition as you learn through “aha” moments, not memorizing answers.",
                        id: "2vO3/9"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Learn at your{br}own pace",
                        id: "8FVbem",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/high-school-math/learn-at-your-own-pace.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "We personalize your experience by providing instant, custom feedback as you solve problems and recommending next steps.",
                        id: "r6eDii"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/high-school-math/stay-motivated.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Keep on track with engaging lessons, competitive features, and daily encouragement.",
                        id: "KfgCiW"
                    })
                }],
                I = [{
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to learn math",
                        id: "6NHCTh"
                    }),
                    imageSrc: "/images/topics/gradeschoolmath/better-way.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Visual, interactive learning makes concepts feel intuitive and approachable.",
                        id: "VJ6r6w"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at the{br}right level",
                        id: "R8TyK8",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/gradeschoolmath/start-at-your-level.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From fractions to equations, we start learners at the right level and help them advance, one step at a time.",
                        id: "VLl8r2"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Concepts that{br}click",
                        id: "wwHmCt",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/gradeschoolmath/concepts-that-click.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "We help learners build mathematical intuition as they learn through “aha” moments, not memorizing answers.",
                        id: "4t9w+m"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Personalized{br}learning",
                        id: "5al4qG",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/gradeschoolmath/personalized-learning.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "We tailor each learner’s experience by providing instant, custom feedback as they solve problems.",
                        id: "R/NA2z"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/gradeschoolmath/stay-motivated.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Keep on track with engaging lessons, competitive features, and daily encouragement.",
                        id: "KfgCiW"
                    })
                }],
                R = [{
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "A better way to learn middle school math",
                        id: "ZYJkRr"
                    }),
                    imageSrc: "/images/topics/middle-school-math/better-way.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Visual, interactive learning makes even complex concepts feel intuitive and approachable.",
                        id: "fMN8Z2"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Start at{br}your level",
                        id: "JzpCpW",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/middle-school-math/start-at-your-level.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "From fractions to algebraic thinking, we start you at the right level and help you excel in middle school math, one step at a time.",
                        id: "bLqkDK"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "yellow.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Think like a{br}mathematician",
                        id: "r9V5yF",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/middle-school-math/think-like.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Build mathematical intuition as you learn through “aha” moments, not memorizing answers.",
                        id: "2vO3/9"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Learn at your{br}own pace",
                        id: "8FVbem",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/middle-school-math/learn-at-your-own-pace.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "We personalize your experience by providing instant, custom feedback as you solve problems and recommending next steps.",
                        id: "r6eDii"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/topics/middle-school-math/stay-motivated.svg",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Keep on track with engaging lessons, competitive features, and daily encouragement.",
                        id: "KfgCiW"
                    })
                }],
                F = [{
                    assetAlignment: "left",
                    gradientColor: "teal.100",
                    gradientColorStart: "gray.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Concepts{br}that click",
                        id: "Zr4L5f",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/shared/concepts-that-click.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Our visual, interactive canvas makes even complex ideas feel intuitive. Custom, intelligent feedback catches mistakes as you learn.",
                        id: "LTy/rr"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "blue.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Personalized{br}learning",
                        id: "5al4qG",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/shared/personalized-learning.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Brilliant tracks the concepts you’ve mastered, designs practice sets based on your progress, and adapts to your pace.",
                        id: "FNd4zF"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "purple.100",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Guided{br}lessons",
                        id: "/ti+a6",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/shared/guided-lessons.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay on track, see your progress, and build your problem solving skills one concept at a time.",
                        id: "FdSuZd"
                    })
                }, {
                    assetAlignment: "right",
                    gradientColor: "pear.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "Stay{br}motivated",
                        id: "luIjdQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/shared/stay-motivated.png",
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Finish every day smarter with engaging lessons, competitive features, and daily encouragement.",
                        id: "If6Dv5"
                    })
                }, {
                    assetAlignment: "left",
                    gradientColor: "teal.100",
                    gradientColorStart: "gray.50",
                    heading: (0, s.jsx)(p.A, {
                        defaultMessage: "More effective,{br}more fun",
                        id: "iO/6cQ",
                        values: {
                            br: (0, s.jsx)("br", {})
                        }
                    }),
                    imageSrc: "/images/homepage/refresh/shared/more-effective.png",
                    pinAssetToBottom: !0,
                    subtitle: (0, s.jsx)(p.A, {
                        defaultMessage: "Brilliant’s interactive approach helps you master concepts in less time, with more purpose and joy.",
                        id: "K2Qxdw"
                    })
                }],
                W = {
                    algebra: {
                        courseSectionHeading: "Reach your algebra goals and more",
                        sections: y
                    },
                    coding: {
                        courseSectionHeading: "Reach your coding goals and more",
                        sections: A
                    },
                    cs: {
                        courseSectionHeading: "Reach your CS goals and more",
                        sections: b
                    },
                    "lohp-refresh": {
                        courseSectionHeading: void 0,
                        sections: F
                    },
                    math: {
                        courseSectionHeading: "Reach your math goals and more",
                        sections: f
                    },
                    python: {
                        courseSectionHeading: "Reach your Python goals and more",
                        sections: M
                    }
                };
            var B = t(55200),
                E = t.n(B);
            let P = e => {
                    let {
                        assetAlignment: a,
                        gradientColor: t,
                        hasBottomBorder: d,
                        heading: g,
                        imageSrc: h,
                        subtitle: m
                    } = e, [p, x] = (0, i.rd)("colors", [t, "blackAlpha.50"]), f = "left" === a;
                    return (0, s.jsx)(r.az, {
                        as: "section",
                        position: "relative",
                        background: {
                            base: (0, u.hW)(p, "up"),
                            xl: (0, u.hW)(p, a)
                        },
                        borderBottom: d ? "1px ".concat(x, " solid") : "",
                        px: {
                            base: 6,
                            lg: 8
                        },
                        maxW: "100vw",
                        overflow: "hidden",
                        children: (0, s.jsxs)(l.s, {
                            flexDirection: {
                                base: "column",
                                xl: f ? "row-reverse" : "row"
                            },
                            maxW: {
                                base: "full",
                                sm: "container.sm",
                                md: "container.md",
                                lg: "container.lg",
                                xl: "container.xl"
                            },
                            marginX: "auto",
                            gap: {
                                base: 4,
                                xl: 6
                            },
                            alignItems: {
                                base: "flex-start",
                                xl: "center"
                            },
                            children: [(0, s.jsxs)(n.T, {
                                flex: "1",
                                spacing: 6,
                                alignItems: "flex-start",
                                textAlign: "left",
                                gap: 6,
                                marginTop: {
                                    base: "64px",
                                    xl: "0"
                                },
                                maxWidth: {
                                    base: "100%",
                                    lg: "515px",
                                    xl: "480px"
                                },
                                justifyContent: {
                                    base: "start",
                                    xl: "center"
                                },
                                justifySelf: {
                                    base: "auto",
                                    xl: "left" === a ? "start" : "end"
                                },
                                children: [(0, s.jsx)(o.D, {
                                    as: "h2",
                                    style: c().style,
                                    width: "100%",
                                    fontSize: {
                                        base: "50px",
                                        lg: "72px"
                                    },
                                    fontWeight: "normal",
                                    textAlign: "left",
                                    letterSpacing: "tight",
                                    lineHeight: "110%",
                                    children: g
                                }), (0, s.jsx)(C.E, {
                                    className: E().className,
                                    fontSize: {
                                        base: "16px",
                                        xl: "20px"
                                    },
                                    children: m
                                })]
                            }), (0, s.jsx)(r.az, {
                                flexShrink: 0,
                                flex: 1,
                                width: {
                                    base: "100%"
                                },
                                position: "relative",
                                minHeight: {
                                    base: "375px",
                                    lg: "min(792px, 94vh)",
                                    "2xl": "min(1024px, 94vh)"
                                },
                                marginLeft: {
                                    base: (f ? 1 : -1) * 6
                                },
                                _before: {
                                    backgroundImage: "url(".concat(h, ")"),
                                    backgroundPosition: {
                                        base: f ? "right bottom" : "left bottom",
                                        xl: f ? "right" : "left"
                                    },
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "auto 100%",
                                    bottom: 0,
                                    content: '""',
                                    height: "100%",
                                    left: f ? "auto" : 0,
                                    objectFit: "cover",
                                    position: "absolute",
                                    right: f ? 0 : "auto",
                                    width: "100vw"
                                }
                            })]
                        })
                    })
                },
                D = e => {
                    let {
                        disableAutoSlide: a,
                        pageContext: t
                    } = e, i = (() => {
                        switch (t) {
                            case "math":
                                return f;
                            case "cs":
                                return b;
                            case "science":
                                return j;
                            case "data":
                                return v;
                            case "ai":
                            case "tech":
                                return L;
                            case "python":
                                return M;
                            case "algebra":
                                return y;
                            case "calculus":
                                return w;
                            case "coding":
                                return A;
                            case "geometry":
                                return V;
                            case "collegemath":
                                return Z;
                            case "statistics":
                                return H;
                            case "gradeschoolmath":
                                return I;
                            case "fractions":
                                return S;
                            case "equations":
                                return k;
                            case "high-school-math":
                                return z;
                            case "middle-school-math":
                                return R;
                            case "lohp-refresh":
                                return F;
                            default:
                                return x
                        }
                    })();
                    if ((e => !!(e && e in W))(t)) {
                        let e = W[t];
                        return (0, s.jsxs)(s.Fragment, {
                            children: [i.slice(0, -2).map((e, a) => (0, s.jsx)(m, { ...e
                            }, "value-prop-section-".concat(a))), (0, s.jsx)(d.B, {
                                isInLohpRefreshExperiment: !0,
                                pageContext: t,
                                disableAutoSlide: a,
                                headingText: e.courseSectionHeading,
                                sectionProps: {
                                    background: u.K7.lohpDarkBg
                                },
                                headingProps: {
                                    fontSize: {
                                        base: "5xl",
                                        lg: "6xl"
                                    },
                                    mb: {
                                        base: 9,
                                        lg: 10
                                    }
                                }
                            }), i.slice(-2).map((e, a) => (0, s.jsx)(m, { ...e
                            }, "value-prop-section-".concat(a)))]
                        })
                    }
                    return (0, s.jsx)(s.Fragment, {
                        children: i.map((e, a) => {
                            let t = i.indexOf(e) < i.length - 1;
                            return (0, s.jsx)(P, { ...e,
                                hasBottomBorder: t
                            }, "value-prop-section-".concat(a))
                        })
                    })
                }
        },
        48388: (e, a, t) => {
            t.d(a, {
                S: () => ea
            });
            var s = t(23798),
                i = t(21462),
                r = t(41929),
                l = t(86027),
                n = t(56134),
                o = t(14770),
                C = t(26829),
                d = t(28439),
                g = t(57552),
                c = t(56545),
                u = t(2025),
                h = t(86191),
                m = t(73699);
            let p = e => (0, s.jsxs)(h.I, {
                    width: "24",
                    height: "24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, s.jsx)("path", {
                        d: "m0 9.09 8.34 7.32 7.642-8.34L7.642.75 0 9.09Z",
                        fill: "#7491FF"
                    }), (0, s.jsx)("path", {
                        d: "M8.327 16.41v7.333h7.655v-7.334H8.327Z",
                        fill: "#375CDF"
                    }), (0, s.jsx)("path", {
                        d: "M15.981 8.07v8.34H24V8.07h-8.02Z",
                        fill: "#213C9D"
                    })]
                }),
                x = e => {
                    let a = (0, m.N)("colors", "papaya.800").reference,
                        t = (0, m.N)("colors", "papaya.500").reference,
                        i = (0, m.N)("colors", "papaya.300").reference;
                    return (0, s.jsxs)(h.I, {
                        width: "24",
                        height: "24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...e,
                        children: [(0, s.jsx)("path", {
                            d: "M23.51 24H.286V10.956c4.99 0 6.173-2.22 13.703-8.571C16.173.542 18.262 0 19.936 0c2.141 0 3.574.819 3.574.819v23.18Z",
                            fill: a
                        }), (0, s.jsx)("path", {
                            d: "M.25 6.464s1.8-1.844 4.068-1.686c2.267.158 3.866 1.532 6.034 3.787 1.274 1.345 2.291 1.73 3.273 1.8 2.07.147 3.72-1.416 6.05-1.25 1.504.107 2.833.898 3.795 1.793v13.094H.29L.25 6.463Z",
                            fill: t
                        }), (0, s.jsx)("path", {
                            d: "M23.509 14.088v9.909H.289v-4.46l.143-.119A8.851 8.851 0 0 1 2.327 18.2a6.17 6.17 0 0 1 2.002-.55c1.152-.12 2.228.09 3.356.23 1.804.225 3.735.284 6.303-1.402a27.39 27.39 0 0 1 2.24-1.33 17.624 17.624 0 0 1 2.137-.965c.961-.352 1.769-.534 2.437-.601 1.931-.198 2.703.506 2.703.506h.004Z",
                            fill: i
                        })]
                    })
                },
                f = e => (0, s.jsxs)(h.I, {
                    width: "25",
                    height: "24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, s.jsx)("path", {
                        d: "m24.5 12.252-3.402 1.257-4.651 1.715-3.509 1.298-4.87-1.797-6.692-2.473 4.422-1.635 3.036-1.12 3.779-1.394.247-.092h.156l4.026 1.486 4.138 1.527 3.32 1.228Z",
                        fill: "#9C62FF"
                    }), (0, s.jsx)("path", {
                        d: "M13.016 8.012h-.156l.078-.03.078.03Z",
                        fill: "#9C62FF"
                    }), (0, s.jsx)("path", {
                        d: "M18.61.75H6.6a3.61 3.61 0 0 0-2.558 1.06 3.617 3.617 0 0 0 2.555 6.175h12.01a3.603 3.603 0 0 0 2.559-1.061A3.618 3.618 0 0 0 18.606.75h.003Z",
                        fill: "#C3A0FF"
                    }), (0, s.jsx)("path", {
                        d: "M17.708 23.177H.5l6.03-6.648h17.21l-6.03 6.648Z",
                        fill: "#5A2E9F"
                    })]
                }),
                b = e => {
                    let a = (0, i.useId)();
                    return (0, s.jsxs)(h.I, {
                        width: "25",
                        height: "24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...e,
                        children: [(0, s.jsxs)("g", {
                            clipPath: "url(#a)",
                            children: [(0, s.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M13.714 12.32V0h-3.428v12.32h3.428Z",
                                fill: "#5A2EA3"
                            }), (0, s.jsx)("circle", {
                                cx: "12",
                                cy: "10.588",
                                r: "4.114",
                                transform: "rotate(-180 12 10.588)",
                                fill: "#5A2EA3"
                            }), (0, s.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M10.629 24v-7.51l-4.8-4.513V5.143h-3.43v8.316l4.8 4.513V24h3.43Z",
                                fill: "#9D62FF"
                            }), (0, s.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M13.371 24v-7.51l4.8-4.513V5.143h3.43v8.316l-4.8 4.513V24h-3.43Z",
                                fill: "#C3A0FF"
                            }), (0, s.jsx)("circle", {
                                cx: "4.114",
                                cy: "4.114",
                                r: "4.114",
                                transform: "matrix(1 0 0 -1 15.771 8.229)",
                                fill: "#C3A0FF"
                            }), (0, s.jsx)("circle", {
                                cx: "4.114",
                                cy: "4.114",
                                r: "4.114",
                                transform: "matrix(1 0 0 -1 .013 8.229)",
                                fill: "#9D62FF"
                            })]
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsx)("clipPath", {
                                id: a,
                                children: (0, s.jsx)("path", {
                                    fill: "#fff",
                                    transform: "matrix(1 0 0 -1 0 24)",
                                    d: "M0 0h24v24H0z"
                                })
                            })
                        })]
                    })
                },
                j = e => {
                    let a = (0, i.useId)();
                    return (0, s.jsxs)(h.I, {
                        width: "24",
                        height: "24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        ...e,
                        children: [(0, s.jsxs)("g", {
                            clipPath: "url(#a)",
                            children: [(0, s.jsx)("path", {
                                d: "M10.507 20.905c.229.32.48.628.766.914a7.456 7.456 0 0 0 10.541 0 7.456 7.456 0 0 0 0-10.542 7.213 7.213 0 0 0-.914-.765l-8.2 2.197-2.197 8.2.004-.004Z",
                                fill: "#926D00"
                            }), (0, s.jsx)("path", {
                                d: "M20.904 10.507a7.7 7.7 0 0 0 .407-1.124 7.452 7.452 0 0 0-5.27-9.128 7.452 7.452 0 0 0-9.129 5.27 7.483 7.483 0 0 0-.21 1.177l6.002 6.002 8.2-2.197Z",
                                fill: "#D6A513"
                            }), (0, s.jsx)("path", {
                                d: "M9.387 21.31a7.869 7.869 0 0 0 1.124-.407l2.197-8.2-6.002-6.001a7.483 7.483 0 0 0-1.176.21 7.454 7.454 0 1 0 3.854 14.4h.003Z",
                                fill: "#F5CE5C"
                            })]
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsx)("clipPath", {
                                id: a,
                                children: (0, s.jsx)("path", {
                                    fill: "#fff",
                                    d: "M0 0h24v24H0z"
                                })
                            })
                        })]
                    })
                },
                v = "/images/homepage",
                L = "/videos/homepage",
                M = [{
                    icon: p,
                    message: (0, r.zR)({
                        defaultMessage: "Math",
                        id: "dPgwrL"
                    })
                }, {
                    icon: x,
                    message: (0, r.zR)({
                        defaultMessage: "Data",
                        id: "XHHR08"
                    })
                }, {
                    icon: f,
                    message: (0, r.zR)({
                        defaultMessage: "CS",
                        id: "ql4XRo"
                    })
                }, {
                    icon: j,
                    message: (0, r.zR)({
                        defaultMessage: "Science",
                        id: "qydxOd"
                    })
                }],
                y = [{
                    icon: p,
                    message: (0, r.zR)({
                        defaultMessage: "Math",
                        id: "dPgwrL"
                    })
                }, {
                    icon: x,
                    message: (0, r.zR)({
                        defaultMessage: "Data Analysis",
                        id: "EwZRn3"
                    })
                }, {
                    icon: f,
                    message: (0, r.zR)({
                        defaultMessage: "Computer Science",
                        id: "l450Bl"
                    })
                }, {
                    icon: b,
                    message: (0, r.zR)({
                        defaultMessage: "Programming & AI",
                        id: "05dLMj"
                    })
                }, {
                    icon: j,
                    message: (0, r.zR)({
                        defaultMessage: "Science & Engineering",
                        id: "gitc+5"
                    })
                }],
                w = [{
                    icon: p,
                    message: (0, r.zR)({
                        defaultMessage: "Math",
                        id: "dPgwrL"
                    })
                }, {
                    icon: x,
                    message: (0, r.zR)({
                        defaultMessage: "Data Analysis",
                        id: "EwZRn3"
                    })
                }, {
                    icon: f,
                    message: (0, r.zR)({
                        defaultMessage: "Computer Science",
                        id: "l450Bl"
                    })
                }, {
                    icon: b,
                    message: (0, r.zR)({
                        defaultMessage: "Programming & AI",
                        id: "05dLMj"
                    })
                }, {
                    icon: j,
                    message: (0, r.zR)({
                        defaultMessage: "Science & Engineering",
                        id: "gitc+5"
                    })
                }],
                A = [{
                    icon: f,
                    message: (0, r.zR)({
                        defaultMessage: "CS",
                        id: "ql4XRo"
                    })
                }, {
                    icon: p,
                    message: (0, r.zR)({
                        defaultMessage: "Math",
                        id: "dPgwrL"
                    })
                }, {
                    icon: x,
                    message: (0, r.zR)({
                        defaultMessage: "Data",
                        id: "XHHR08"
                    })
                }, {
                    icon: j,
                    message: (0, r.zR)({
                        defaultMessage: "Science",
                        id: "qydxOd"
                    })
                }],
                V = [{
                    icon: p,
                    message: (0, r.zR)({
                        defaultMessage: "Math",
                        id: "dPgwrL"
                    })
                }, {
                    icon: x,
                    message: (0, r.zR)({
                        defaultMessage: "Data Analysis",
                        id: "EwZRn3"
                    })
                }, {
                    icon: j,
                    message: (0, r.zR)({
                        defaultMessage: "Science & Engineering",
                        id: "gitc+5"
                    })
                }, {
                    icon: f,
                    message: (0, r.zR)({
                        defaultMessage: "Computer Science",
                        id: "l450Bl"
                    })
                }, {
                    icon: b,
                    message: (0, r.zR)({
                        defaultMessage: "Programming & AI",
                        id: "05dLMj"
                    })
                }],
                Z = [{
                    icon: j,
                    message: (0, r.zR)({
                        defaultMessage: "Science",
                        id: "qydxOd"
                    })
                }, {
                    icon: p,
                    message: (0, r.zR)({
                        defaultMessage: "Math",
                        id: "dPgwrL"
                    })
                }, {
                    icon: x,
                    message: (0, r.zR)({
                        defaultMessage: "Data",
                        id: "XHHR08"
                    })
                }, {
                    icon: f,
                    message: (0, r.zR)({
                        defaultMessage: "CS",
                        id: "ql4XRo"
                    })
                }],
                H = [{
                    icon: p,
                    message: (0, r.zR)({
                        defaultMessage: "Math",
                        id: "dPgwrL"
                    })
                }, {
                    icon: f,
                    message: (0, r.zR)({
                        defaultMessage: "Computer Science",
                        id: "l450Bl"
                    })
                }, {
                    icon: x,
                    message: (0, r.zR)({
                        defaultMessage: "Data Analysis",
                        id: "EwZRn3"
                    })
                }, {
                    icon: j,
                    message: (0, r.zR)({
                        defaultMessage: "Science & Engineering",
                        id: "gitc+5"
                    })
                }, {
                    icon: b,
                    message: (0, r.zR)({
                        defaultMessage: "Programming & AI",
                        id: "05dLMj"
                    })
                }],
                S = [{
                    icon: x,
                    message: (0, r.zR)({
                        defaultMessage: "Data",
                        id: "XHHR08"
                    })
                }, {
                    icon: p,
                    message: (0, r.zR)({
                        defaultMessage: "Math",
                        id: "dPgwrL"
                    })
                }, {
                    icon: f,
                    message: (0, r.zR)({
                        defaultMessage: "CS",
                        id: "ql4XRo"
                    })
                }, {
                    icon: j,
                    message: (0, r.zR)({
                        defaultMessage: "Science",
                        id: "qydxOd"
                    })
                }],
                k = [{
                    icon: p,
                    message: (0, r.zR)({
                        defaultMessage: "Math",
                        id: "dPgwrL"
                    })
                }, {
                    icon: j,
                    message: (0, r.zR)({
                        defaultMessage: "Science & Engineering",
                        id: "gitc+5"
                    })
                }, {
                    icon: b,
                    message: (0, r.zR)({
                        defaultMessage: "Programming & AI",
                        id: "05dLMj"
                    })
                }, {
                    icon: f,
                    message: (0, r.zR)({
                        defaultMessage: "Computer Science",
                        id: "l450Bl"
                    })
                }, {
                    icon: x,
                    message: (0, r.zR)({
                        defaultMessage: "Data Analysis",
                        id: "EwZRn3"
                    })
                }],
                z = [{
                    icon: b,
                    message: (0, r.zR)({
                        defaultMessage: "Programming & AI",
                        id: "05dLMj"
                    })
                }, {
                    icon: p,
                    message: (0, r.zR)({
                        defaultMessage: "Math",
                        id: "dPgwrL"
                    })
                }, {
                    icon: f,
                    message: (0, r.zR)({
                        defaultMessage: "CS",
                        id: "ql4XRo"
                    })
                }, {
                    icon: x,
                    message: (0, r.zR)({
                        defaultMessage: "Data",
                        id: "XHHR08"
                    })
                }],
                I = [{
                    icon: x,
                    message: (0, r.zR)({
                        defaultMessage: "Data Analysis",
                        id: "EwZRn3"
                    })
                }, {
                    icon: f,
                    message: (0, r.zR)({
                        defaultMessage: "Computer Science",
                        id: "l450Bl"
                    })
                }, {
                    icon: p,
                    message: (0, r.zR)({
                        defaultMessage: "Math",
                        id: "dPgwrL"
                    })
                }, {
                    icon: b,
                    message: (0, r.zR)({
                        defaultMessage: "Programming & AI",
                        id: "05dLMj"
                    })
                }, {
                    icon: j,
                    message: (0, r.zR)({
                        defaultMessage: "Science & Engineering",
                        id: "gitc+5"
                    })
                }],
                R = e => {
                    let {
                        isMobile: a
                    } = e, [t, r] = (0, i.useState)(a), [l, n] = (0, i.useState)(!1), o = (0, g.A)(), d = (0, i.useRef)(null), h = "356px", m = "300px", {
                        imagePath: p,
                        videoPath: x
                    } = (e => ({
                        imagePath: e ? "".concat(v, "/learn-by-doing-mobile-refresh.png") : "".concat(v, "/learn-by-doing-refresh.png"),
                        videoPath: e ? "".concat(L, "/learn-by-doing-mobile-refresh.webm") : "".concat(L, "/learn-by-doing-refresh.webm")
                    }))(t);
                    return (0, i.useEffect)(() => {
                        let e = d.current;
                        e && e.play().then(() => {
                            n(!0)
                        }).catch(() => {
                            n(!1)
                        })
                    }, []), (0, i.useEffect)(() => {
                        let e = () => {
                            r(window.innerWidth < 770)
                        };
                        return window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, []), (0, i.useEffect)(() => {
                        let e = () => {
                            document.hidden && l && n(!1)
                        };
                        return document.addEventListener("visibilitychange", e), () => {
                            document.removeEventListener("visibilitychange", e)
                        }
                    }, [l]), (0, s.jsx)(c.T, {
                        width: "full",
                        maxWidth: "1200px",
                        maxHeight: {
                            base: m,
                            lg: h
                        },
                        marginY: "auto",
                        paddingX: 4,
                        children: (0, s.jsxs)(C.az, {
                            height: "full",
                            width: "full",
                            children: [(0, s.jsx)("video", {
                                ref: d,
                                style: {
                                    left: 0,
                                    margin: "0 auto",
                                    maxHeight: t ? m : h,
                                    position: l ? "static" : "absolute",
                                    top: 0,
                                    visibility: l ? "visible" : "hidden"
                                },
                                preload: "auto",
                                muted: !0,
                                playsInline: !0,
                                autoPlay: !0,
                                src: x,
                                controls: !1,
                                poster: p
                            }), !l && (0, s.jsx)(u._, {
                                src: p,
                                maxHeight: {
                                    base: m,
                                    lg: h
                                },
                                margin: "0 auto",
                                alt: o.formatMessage({
                                    defaultMessage: "Learn by doing",
                                    id: "Jn3edD"
                                })
                            })]
                        })
                    })
                };
            var F = t(5732),
                W = t(32587),
                B = t(76759),
                E = t(54700),
                P = t(49081);
            let D = e => {
                    let {
                        topic: a
                    } = e, t = (0, g.A)();
                    return (0, s.jsxs)(F.z, {
                        gap: 2,
                        alignItems: "center",
                        children: [(0, s.jsx)(a.icon, {
                            height: "24px",
                            width: "24px"
                        }), (0, s.jsx)(d.E, {
                            children: t.formatMessage(a.message)
                        })]
                    })
                },
                T = e => {
                    let {
                        transition: a
                    } = e, t = (0, W.A)({
                        base: !0,
                        xl: !1
                    }), i = (0, B.rd)("colors", ["gray.100"]), {
                        pathname: r
                    } = (0, E.useRouter)(), l = (() => {
                        if (t) switch (r) {
                            case "/cs":
                                return A;
                            case "/science":
                                return Z;
                            case "/data":
                                return S;
                            case "/tech":
                                return z;
                            default:
                                return M
                        }
                        switch (r) {
                            case "/math":
                                return I;
                            case "/cs":
                                return w;
                            case "/science":
                                return V;
                            case "/data":
                                return H;
                            case "/tech":
                            case "/ai":
                                return k;
                            default:
                                return y
                        }
                    })();
                    return (0, s.jsx)(C.az, {
                        height: {
                            base: "56px",
                            md: "72px"
                        },
                        overflow: "hidden",
                        width: "full",
                        children: (0, s.jsx)(P.MF, {
                            alignItems: "center",
                            justifyContent: "center",
                            height: "full",
                            width: "full",
                            px: {
                                base: 6,
                                md: 8
                            },
                            transition: a,
                            initial: {
                                borderTop: "2px solid transparent",
                                translateY: "56px"
                            },
                            animate: {
                                borderTop: "2px solid ".concat(i),
                                translateY: "0px"
                            },
                            bg: "bg.primary",
                            children: (0, s.jsx)(F.z, {
                                width: "full",
                                maxW: {
                                    base: "432px",
                                    lg: "container.lg"
                                },
                                justifyContent: "space-between",
                                children: l.map((e, a) => (0, s.jsx)(D, {
                                    topic: e
                                }, "topic-".concat(a, "-").concat(e.message.id)))
                            })
                        })
                    })
                };
            var N = t(70531),
                K = t(62104),
                q = t(70501),
                G = t(88749),
                _ = t.n(G),
                O = t(47725),
                Q = t(70480),
                J = t(47717),
                X = t(84804),
                Y = t(79511),
                U = t(62444),
                $ = t(58514);
            let ee = e => {
                    let {
                        href: a,
                        icon: t,
                        kojiDelayMs: r,
                        message: l,
                        onClick: n,
                        skipOnClickAnalytics: o = !1
                    } = e, [d, c] = (0, i.useState)(!1), {
                        hydratedInputs: u,
                        RiveComponent: m
                    } = (() => {
                        let e = "LOHP_TOP-nohitbox",
                            {
                                rive: a,
                                RiveComponent: t
                            } = (0, Y.T)({
                                artboard: "LOHP_TOP",
                                autoplay: !0,
                                src: $.c_,
                                stateMachines: e
                            }, {
                                fitCanvasToArtboardHeight: !0
                            }),
                            s = {
                                cursorHoverInput: (0, X.useStateMachineInput)(a, e, "cursor_Hover", !1),
                                watchShineInput: (0, X.useStateMachineInput)(a, e, "play_watchShine")
                            };
                        return {
                            hydratedInputs: (0, U.A)(s),
                            RiveComponent: t
                        }
                    })(), p = (0, O.Y4)(), x = (0, E.useRouter)(), f = (0, g.A)(), b = (0, W.A)({
                        base: !0,
                        md: !1
                    });
                    (0, i.useEffect)(() => {
                        setTimeout(() => c(!0), r)
                    }, [r]), (0, i.useEffect)(() => {
                        let e = () => {
                            var e;
                            null == u || null == (e = u.watchShineInput) || e.fire()
                        };
                        if (u && d) {
                            e();
                            let a = setInterval(e, 6400);
                            return () => {
                                clearInterval(a)
                            }
                        }
                    }, [u, d]);
                    let j = e => {
                            (null == u ? void 0 : u.cursorHoverInput) && !b && (u.cursorHoverInput.value = e)
                        },
                        v = {
                            colorScheme: "green",
                            fontSize: {
                                base: "medium",
                                md: "large"
                            },
                            height: {
                                base: "".concat(52, "px"),
                                md: "".concat(60, "px")
                            },
                            onClick: () => {
                                null == n || n(), o || p(J.bPR, {
                                    ctaType: "hero",
                                    isActionUi: !0,
                                    pageType: x.asPath
                                })
                            },
                            variant: "pillPrimary",
                            width: "100%",
                            onMouseEnter: () => j(!0),
                            onMouseLeave: () => j(!1)
                        },
                        L = { ...v,
                            animationDuration: 1600,
                            delayDuration: 4800,
                            zIndex: 2
                        };
                    return (0, s.jsxs)(q.s, {
                        width: "full",
                        flexDirection: "column",
                        alignItems: "center",
                        children: [(0, s.jsx)(C.az, {
                            position: "relative",
                            width: {
                                base: "full",
                                md: "294px"
                            },
                            maxWidth: "340px",
                            paddingBottom: 1,
                            children: a ? u && d ? (0, s.jsxs)(Q.e, {
                                as: _(),
                                href: a,
                                ...L,
                                children: [f.formatMessage(l), t && (0, s.jsx)(h.I, {
                                    as: t,
                                    width: "16px",
                                    height: "16px",
                                    marginLeft: 1
                                })]
                            }) : (0, s.jsxs)(K.$, {
                                as: _(),
                                href: a,
                                ...v,
                                children: [f.formatMessage(l), t && (0, s.jsx)(h.I, {
                                    as: t,
                                    width: "16px",
                                    height: "16px",
                                    marginLeft: 1
                                })]
                            }) : u && d ? (0, s.jsxs)(Q.e, { ...L,
                                children: [f.formatMessage(l), t && (0, s.jsx)(h.I, {
                                    as: t,
                                    width: "16px",
                                    height: "16px",
                                    marginLeft: 1
                                })]
                            }) : (0, s.jsxs)(K.$, { ...v,
                                children: [f.formatMessage(l), t && (0, s.jsx)(h.I, {
                                    as: t,
                                    width: "16px",
                                    height: "16px",
                                    marginLeft: 1
                                })]
                            })
                        }), (0, s.jsx)(C.az, {
                            position: "relative",
                            height: {
                                base: "72px",
                                md: "109px"
                            },
                            width: "250px",
                            zIndex: 1,
                            children: (0, s.jsx)(C.az, {
                                position: {
                                    base: "absolute",
                                    md: "static"
                                },
                                top: "-38px",
                                width: "full",
                                height: "full",
                                children: (0, s.jsx)(m, {})
                            })
                        })]
                    })
                },
                ea = e => {
                    let {
                        getStartedButtonProps: a,
                        header: t,
                        isMobile: i,
                        subheader: g
                    } = e, {
                        bannerHeight: c
                    } = (0, N.Y)(), u = (0, n._u)("96.5vh").subtract("76px").subtract("".concat(c, "px")).toString(), h = (0, n._u)("100vh").subtract("88px").subtract("".concat(c, "px")).toString(), m = {
                        delay: .9,
                        duration: .95,
                        ease: [.16, 1, .3, 1],
                        type: "tween"
                    }, p = {
                        href: "/welcome/",
                        kojiDelayMs: 2e3,
                        message: (0, r.zR)({
                            defaultMessage: "Get started",
                            id: "/aBLH2"
                        }),
                        ...a
                    };
                    return (0, s.jsxs)(P.dA, {
                        flexDirection: "column",
                        initial: {
                            minHeight: i ? u : h
                        },
                        animate: {
                            minHeight: i ? u : h
                        },
                        transition: {
                            delay: .9,
                            duration: .95
                        },
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 0,
                        width: "full",
                        children: [(0, s.jsx)(o.D, {
                            as: "h1",
                            display: "none",
                            children: t || (0, s.jsx)(l.A, {
                                defaultMessage: "Learn by doing",
                                id: "Jn3edD"
                            })
                        }), (0, s.jsx)(R, {
                            isMobile: i
                        }), (0, s.jsxs)(C.az, {
                            width: "full",
                            children: [(0, s.jsxs)(P.dA, {
                                gap: 8,
                                width: "full",
                                paddingX: {
                                    base: 4,
                                    md: 7
                                },
                                transition: m,
                                initial: {
                                    opacity: 0,
                                    translateY: "56px"
                                },
                                animate: {
                                    opacity: 1,
                                    translateY: "0px"
                                },
                                children: [(0, s.jsx)(C.az, {
                                    textAlign: "center",
                                    fontSize: {
                                        base: "md",
                                        md: "xl"
                                    },
                                    maxWidth: {
                                        md: "510px"
                                    },
                                    children: g || (0, s.jsx)(d.E, {
                                        children: (0, s.jsx)(l.A, {
                                            defaultMessage: "Interactive problem solving that’s effective and fun. Excel in math and computer science.",
                                            id: "mPDQ2C"
                                        })
                                    })
                                }), (0, s.jsx)(ee, { ...p
                                })]
                            }), (0, s.jsx)(T, {
                                transition: m
                            })]
                        })]
                    })
                }
        },
        49081: (e, a, t) => {
            t.d(a, {
                $X: () => d,
                MF: () => C,
                dA: () => g,
                e_: () => o
            });
            var s = t(23798),
                i = t(54284),
                r = t(44847),
                l = t(16562),
                n = t(23448);
            let o = (0, i.B)(l.P.div, {
                    shouldForwardProp: e => (0, n.S)(e) || (0, r.M)(e)
                }),
                C = e => (0, s.jsx)(o, {
                    display: "flex",
                    ...e
                }),
                d = e => (0, s.jsx)(o, {
                    display: "flex",
                    alignItems: "center",
                    ...e
                }),
                g = e => (0, s.jsx)(o, {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    ...e
                })
        },
        57593: (e, a, t) => {
            t.d(a, {
                b: () => l
            });
            var s = t(23798),
                i = t(49135),
                r = t.n(i);
            let l = e => {
                let {
                    children: a,
                    pageTitle: t
                } = e;
                return (0, s.jsxs)(r(), {
                    children: [void 0 !== t ? (0, s.jsx)("title", {
                        children: "".concat(t, " | Brilliant")
                    }) : null, a]
                })
            }
        },
        58514: (e, a, t) => {
            t.d(a, {
                Cu: () => A,
                FZ: () => i,
                F_: () => x,
                Gh: () => V,
                LX: () => g,
                ME: () => h,
                NL: () => d,
                Nb: () => f,
                OG: () => b,
                Qu: () => v,
                U0: () => o,
                Wo: () => c,
                Zd: () => Z,
                Zm: () => p,
                al: () => l,
                cG: () => m,
                c_: () => C,
                eE: () => r,
                fe: () => H,
                lB: () => u,
                nq: () => n,
                q8: () => s,
                tJ: () => M,
                vc: () => j,
                wQ: () => y,
                wd: () => w,
                xX: () => L
            });
            let s = "/rive/endstate.a858bf4e.riv",
                i = "/rive/paywall-koji-comet.71d2330b.riv",
                r = "/rive/nux-koji.2611eb62.riv",
                l = "/rive/nux_koji_reactions_v2.c14662ad.riv",
                n = "/rive/nux-koji-bylp.b9aa1aac.riv",
                o = "/rive/leagues-badges.45867fa0.riv",
                C = "/rive/lohp-cta-koji-rive.aca09e76.riv",
                d = "/rive/nux-recs-first-lesson-koji.ac879519.riv",
                g = "/rive/ondemand-gamified.e9b9a0f3.riv",
                c = "/rive/lightning.db922698.riv",
                u = "/rive/lcr-koji-transition.a3101a2e.riv",
                h = "/rive/gamenode.189ac627.riv",
                m = "/rive/logo-reveal.11aee2a6.riv",
                p = "/rive/app-push.07077f40.riv",
                x = "/rive/koji-gameboard.1b74fa1e.riv",
                f = "/rive/rux-koji-book.bc252df9.riv",
                b = "/rive/rux-koji-briefcase.ed4e6e67.riv",
                j = "/rive/koji-jump-back-in.7a4d3c18.riv",
                v = "/rive/post-checkout-flow.cc1aa242.riv",
                L = "/rive/endstate.2c03a447.riv",
                M = "/rive/koji-speech-bubble.5abaf0ba.riv",
                y = "/rive/practice-tray-complete.cd840223.riv",
                w = "/rive/personalized-practice-nudge.8d7e7c26.riv",
                A = "/rive/nux_revamp.d192d940.riv",
                V = "/rive/nux_key_gift.78031b83.riv",
                Z = "/rive/new_year_endstate_promo.32852c2a.riv",
                H = "/rive/lesson-loader.ac940c03.riv"
        },
        62444: (e, a, t) => {
            t.d(a, {
                A: () => i
            });
            var s = t(21462);
            let i = e => {
                let [a, t] = (0, s.useState)(null);
                return (0, s.useEffect)(() => {
                    !a && Object.values(e).every(e => null !== e) && t(e)
                }, [e, a]), a || null
            }
        },
        63640: (e, a, t) => {
            t.d(a, {
                E: () => l
            });
            var s = t(23798),
                i = t(40796),
                r = t(86191);
            let l = e => {
                let a = (0, i.Bi)();
                return (0, s.jsxs)(r.I, {
                    width: "32px",
                    height: "32px",
                    viewBox: "0 0 32 32",
                    fill: "none",
                    maxW: "100%",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, s.jsx)("g", {
                        clipPath: "url(#".concat(a, ")"),
                        children: (0, s.jsx)("path", {
                            d: "M29.0572 24.938C28.5733 26.056 28.0005 27.0851 27.3368 28.0313C26.4321 29.3211 25.6914 30.2139 25.1206 30.7097C24.2357 31.5235 23.2876 31.9403 22.2723 31.964C21.5434 31.964 20.6644 31.7566 19.6412 31.3359C18.6147 30.9171 17.6713 30.7097 16.8087 30.7097C15.9041 30.7097 14.9338 30.9171 13.8961 31.3359C12.8567 31.7566 12.0194 31.9759 11.3792 31.9976C10.4056 32.0391 9.43516 31.6104 8.4665 30.7097C7.84825 30.1705 7.07494 29.2461 6.14855 27.9365C5.1546 26.538 4.33745 24.9163 3.69727 23.0675C3.01166 21.0705 2.66797 19.1367 2.66797 17.2646C2.66797 15.1201 3.13136 13.2704 4.05953 11.7205C4.78899 10.4755 5.75942 9.49337 6.974 8.7724C8.18858 8.05144 9.50093 7.68404 10.9142 7.66054C11.6875 7.66054 12.7016 7.89974 13.9618 8.36985C15.2185 8.84154 16.0254 9.08074 16.3791 9.08074C16.6436 9.08074 17.54 8.80105 19.0595 8.24343C20.4965 7.72631 21.7093 7.5122 22.7029 7.59654C25.3951 7.81382 27.4178 8.87512 28.7629 10.7872C26.3551 12.2461 25.164 14.2895 25.1877 16.9108C25.2095 18.9526 25.9502 20.6517 27.4059 22.0008C28.0657 22.627 28.8024 23.1109 29.6222 23.4546C29.4444 23.9702 29.2567 24.464 29.0572 24.938ZM22.8826 0.640503C22.8826 2.24087 22.298 3.73512 21.1326 5.11819C19.7262 6.76239 18.0251 7.71249 16.1804 7.56256C16.1569 7.37057 16.1433 7.1685 16.1433 6.95616C16.1433 5.41981 16.8121 3.77562 17.9998 2.43126C18.5928 1.75059 19.3469 1.18462 20.2615 0.733141C21.174 0.288394 22.0372 0.0424391 22.849 0.000320435C22.8728 0.214264 22.8826 0.428222 22.8826 0.640482V0.640503Z",
                            fill: "white"
                        })
                    }), (0, s.jsx)("defs", {
                        children: (0, s.jsx)("clipPath", {
                            id: a,
                            children: (0, s.jsx)("rect", {
                                width: "32",
                                height: "32",
                                fill: "white"
                            })
                        })
                    })]
                })
            }
        },
        68113: (e, a, t) => {
            t.d(a, {
                o: () => S,
                n: () => H
            });
            var s = t(23798),
                i = t(86027),
                r = t(26829),
                l = t(70501),
                n = t(14770),
                o = t(28439),
                C = t(5732),
                d = t(21462),
                g = t(86191);
            let c = e => (0, s.jsxs)(g.I, {
                    width: "118px",
                    height: "26px",
                    viewBox: "0 0 118 26",
                    fill: "none",
                    maxW: "100%",
                    xmlns: "http://www.w3.org/2000/svg",
                    color: "white",
                    ...e,
                    children: [(0, s.jsx)("path", {
                        d: "M64.7001 3.35101C65.6448 1.71521 67.5472 0.852829 69.3902 0.836442C71.0721 0.727827 72.9745 1.00759 74.1528 2.3373C73.5538 3.12721 72.9811 3.9336 72.3821 4.7235C71.7139 3.95662 71.1643 2.87699 70.0847 2.65977C69.0216 2.33063 67.6854 2.88358 67.4088 4.02239C66.9612 5.82932 67.2311 7.71849 67.1653 9.56172H70.6179V11.6189H67.162C67.162 14.7194 67.162 17.8197 67.1587 20.9202C67.1455 21.799 67.2871 22.6679 67.4516 23.5302C68.2415 23.8956 69.094 24.0832 69.9662 24.0996C69.9629 24.3136 69.9596 24.7447 69.9563 24.962C67.1324 24.7776 64.305 24.7217 61.4844 24.9587C61.4844 24.7776 61.4909 24.4156 61.4909 24.2346C62.3829 24.0766 63.4888 23.6619 63.525 22.5889C63.8706 18.9454 63.6369 15.2755 63.706 11.6189C63.0181 11.6189 62.3302 11.6189 61.6423 11.6157C61.6456 11.3063 61.6522 10.9936 61.6555 10.6842C62.3532 10.3616 63.0345 10.0029 63.7059 9.63426C63.7059 7.52119 63.5808 5.23696 64.6999 3.35112L64.7001 3.35101Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M115.606 0.832846C113.78 1.25413 111.93 1.60949 110.054 1.69177C110.034 1.86292 109.998 2.20513 109.981 2.37629C110.679 2.58694 111.818 2.53126 111.868 3.5055C112.147 5.48037 111.95 7.48438 112.006 9.47236C109.317 9.01159 106.312 9.04121 104.024 10.7165C101.52 12.4708 100.661 15.7425 100.911 18.6588C101.052 20.9199 102.184 23.2404 104.235 24.3429C106.677 25.6857 109.801 25.4093 112.088 23.8623C112.105 24.3198 112.114 24.7773 112.118 25.2348C113.888 24.7839 115.699 24.5304 117.519 24.4251V23.635C114.939 23.1957 115.653 22.0019 115.472 19.972C115.475 13.5935 115.376 7.21147 115.606 0.833283L115.606 0.832846ZM108.915 11.1191C110.004 11.1076 111.112 11.4555 112.006 12.0628C112.009 15.4956 111.999 18.9284 112.012 22.3612C110.097 23.24 107.506 23.1775 106.006 21.5515C104.719 20.1757 104.501 18.1615 104.617 16.3643C104.745 14.7285 105.088 12.8591 106.516 11.8452C107.232 11.3542 108.067 11.1278 108.915 11.1189L108.915 11.1191Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M7.02878 2.92998C9.19775 2.79832 11.3733 2.93985 13.5193 3.24265C13.391 4.76984 13.4041 6.30693 13.5226 7.83406C13.3153 7.83406 12.9005 7.83735 12.6932 7.83735C12.5286 6.88287 12.3575 5.72428 11.3404 5.29966C9.83301 4.66442 8.06877 4.6019 6.5054 5.0561C4.46152 5.66171 4.12576 8.66991 5.64637 9.98327C7.54877 11.6487 9.87907 12.7382 11.8275 14.3542C14.8785 16.7832 14.4803 22.4378 10.8599 24.1393C7.81218 25.548 4.23443 25.1925 1.08785 24.3072C1.10751 22.7941 1.05161 21.281 0.982422 19.7697C1.20952 19.7664 1.66702 19.7565 1.89741 19.7532C2.05868 20.7044 2.20678 21.8728 3.17115 22.3632C4.89581 23.3309 7.12072 23.4098 8.91132 22.5771C11.1462 21.3429 10.7347 17.775 8.64471 16.5737C6.83117 15.1771 4.74777 14.1447 3.07243 12.5678C1.21609 10.8431 0.985754 7.82165 2.18058 5.66579C3.158 3.94765 5.1296 3.08877 7.02873 2.93072L7.02878 2.92998Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M19.9054 6.16451C20.0765 6.17439 20.4221 6.19084 20.5933 6.20072C20.59 7.34939 20.59 8.49478 20.59 9.64354H25.8562V11.6184H20.59C20.6097 14.3832 20.5472 17.1512 20.6196 19.9192C20.692 20.9724 20.7216 22.2858 21.7057 22.9309C22.9466 23.6681 24.431 23.2074 25.6719 22.7235C26.0537 23.6583 25.0827 24.1816 24.408 24.57C22.8249 25.3369 20.8929 25.4192 19.2571 24.7807C17.8582 24.2574 17.1835 22.727 17.111 21.3247C16.9432 18.0926 17.111 14.8541 17.1374 11.6186H15.0802C15.0769 11.4014 15.0736 11.1874 15.0703 10.9735C17.3052 10.1309 18.8125 8.20549 19.9053 6.16488L19.9054 6.16451Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M33.9974 9.12228C31.6245 9.09789 29.2314 10.2765 28.469 12.6592C28.6763 12.7777 29.0976 13.0113 29.3083 13.1298C30.22 11.5204 32.3494 10.6943 34.0279 11.6225C35.3444 12.2215 35.4565 13.8308 35.4302 15.0916C33.3599 15.7564 31.2172 16.2798 29.2621 17.2542C26.9187 18.4917 26.6159 22.0002 28.2945 23.8993C30.2727 25.7128 33.5738 25.4198 35.5289 23.705C36.1246 24.8833 37.5332 25.3342 38.7608 24.9887C39.8305 24.7813 40.5381 23.8894 41.2392 23.1356C41.1174 22.9974 40.8707 22.7175 40.749 22.576C40.3079 22.6879 39.8108 23.0368 39.3797 22.6977C38.8201 22.3127 38.8891 21.5392 38.8496 20.9435C38.8891 18.3894 39.0307 15.829 38.8957 13.2716C38.8299 11.9485 38.2375 10.5955 37.0658 9.90106C36.1504 9.39295 35.076 9.13337 33.9974 9.12228ZM35.3937 17.086C35.4069 18.8074 35.3939 20.5287 35.4071 22.2501C34.3045 22.7405 32.9945 23.1947 31.8326 22.6319C30.4108 21.8749 30.4701 19.6106 31.6451 18.6594C32.7741 17.8827 34.1133 17.5172 35.3937 17.086Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M79.3556 9.18695C77.621 9.2067 75.8304 9.63788 74.4743 10.7668C72.4566 12.3993 71.5813 15.0982 71.6702 17.6324C71.6603 19.8014 72.335 22.1153 74.0433 23.5571C76.0609 25.3146 78.9934 25.489 81.5047 24.9656C84.1542 24.3831 86.1454 22.0627 86.7083 19.4625C87.3139 16.7637 87.0604 13.6271 85.2041 11.4483C83.7756 9.77634 81.4883 9.14416 79.3556 9.18695ZM79.3786 11.0291C80.3107 11.0472 81.2331 11.43 81.8305 12.1722C82.9134 13.4986 83.2031 15.2826 83.2821 16.9479C83.2952 18.7614 83.0648 20.7196 81.9227 22.2006C80.8004 23.6521 78.3814 23.8134 77.0879 22.5067C76.0972 21.5885 75.7284 20.2227 75.5046 18.939C75.2709 17.2341 75.3303 15.46 75.8668 13.8176C76.242 12.7183 76.9726 11.6058 78.1312 11.2305C78.5292 11.0876 78.955 11.0206 79.3787 11.0288L79.3786 11.0291Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M42.4767 10.2333C44.3167 10.2037 46.1829 10.0128 47.8812 9.25249C47.9404 9.69024 47.9865 10.128 48.0227 10.5723C49.9744 9.29528 52.4956 8.79828 54.7304 9.58822C56.33 10.1247 57.4491 11.6915 57.5906 13.3502C57.9197 16.5066 57.4425 19.7058 57.8638 22.8557C57.9099 23.8464 58.9763 24.0702 59.7498 24.2315C59.7531 24.4158 59.7531 24.7844 59.7564 24.9687C57.1431 24.7614 51.9099 24.9589 51.9099 24.9589L51.9 24.2126C51.9 24.2126 53.7876 23.6818 53.9076 23.1387C54.3388 20.7953 54.2368 18.3729 54.2137 15.9933C54.1282 14.5714 54.1644 12.7941 52.805 11.9284C51.347 11.0891 49.5598 11.4775 48.0689 12.0206C48.0787 15.1013 48.0689 18.1852 48.0689 21.266C48.1117 22.0889 48.0524 23.0269 48.5889 23.7114C49.0398 24.0241 49.6059 24.0801 50.1227 24.2249C50.126 24.4092 50.1292 24.7811 50.1292 24.9687C47.552 24.8009 44.9685 24.6923 42.3945 24.9654C42.3945 24.7811 42.4011 24.4158 42.4011 24.2347C43.1845 24.0537 44.2179 23.8069 44.366 22.859C44.7247 20.588 44.4483 18.2676 44.5338 15.9768C44.5009 14.6701 44.6457 13.3469 44.4154 12.0567C44.2343 11.1746 43.1581 11.224 42.48 11.0495C42.48 10.8455 42.4767 10.4374 42.4767 10.2333Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M88.4656 10.1639C90.3088 10.1376 92.1519 9.88745 93.903 9.2983L93.9523 10.6543C95.7231 9.22918 98.3924 8.86713 100.278 10.2791L98.3118 13.2806C97.3935 11.8653 95.5306 11.523 94.0594 12.2438C94.0594 12.2438 94.0495 18.4743 94.0693 21.5879C94.145 22.2824 94.0363 23.1842 94.688 23.6384C95.3167 24.007 96.0803 23.9873 96.7813 24.0992C96.7813 24.3131 96.778 24.7475 96.778 24.9615C93.9507 24.7706 91.1168 24.7311 88.2896 24.9549L88.2891 24.0992C89.2004 23.9438 90.1492 23.6285 90.2874 23.0854C90.6791 21.7458 90.4882 20.3272 90.5277 18.9481C90.4882 16.7527 90.6067 14.5541 90.475 12.3622C90.4652 11.2958 89.2572 11.2003 88.4739 11.0456C88.4752 10.7433 88.4686 10.433 88.4674 10.1636L88.4656 10.1639Z",
                        fill: "currentcolor"
                    })]
                }),
                u = e => (0, s.jsxs)(g.I, {
                    width: "59px",
                    height: "31px",
                    viewBox: "0 0 59 31",
                    fill: "none",
                    maxW: "100%",
                    xmlns: "http://www.w3.org/2000/svg",
                    color: "white",
                    ...e,
                    children: [(0, s.jsx)("path", {
                        d: "M3.27734 0V30.05V0ZM13.5957 0V20.4557V0ZM23.9141 0V30.05V0ZM34.2325 0V5.97379V0ZM44.7319 9.59428V30.05V9.59428Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M3.27734 0V30.05M13.5957 0V20.4557M23.9141 0V30.05M34.2325 0V5.97379M44.7319 9.59428V30.05",
                        stroke: "currentcolor",
                        strokeWidth: "6.33584"
                    }), (0, s.jsx)("path", {
                        d: "M34.2363 9.59445V30.0502V9.59445Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M34.2363 9.59445V30.0502",
                        stroke: "currentcolor",
                        strokeWidth: "6.33584"
                    }), (0, s.jsx)("path", {
                        d: "M41.5684 2.98629H58.2226H41.5684Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M41.5684 2.98629H58.2226",
                        stroke: "currentcolor",
                        strokeWidth: "5.9738"
                    })]
                }),
                h = e => (0, s.jsxs)(g.I, {
                    width: "100px",
                    height: "33px",
                    viewBox: "0 0 100 33",
                    fill: "none",
                    maxW: "100%",
                    xmlns: "http://www.w3.org/2000/svg",
                    color: "white",
                    ...e,
                    children: [(0, s.jsx)("path", {
                        d: "M43.1086 17.2195C43.1086 21.9139 39.4362 25.3731 34.9293 25.3731C30.4224 25.3731 26.75 21.9139 26.75 17.2195C26.75 12.4921 30.4224 9.06598 34.9293 9.06598C39.4362 9.06598 43.1086 12.4921 43.1086 17.2195ZM39.5281 17.2195C39.5281 14.286 37.3996 12.2789 34.9293 12.2789C32.459 12.2789 30.3305 14.286 30.3305 17.2195C30.3305 20.1236 32.459 22.1602 34.9293 22.1602C37.3996 22.1602 39.5281 20.12 39.5281 17.2195Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M60.7512 17.2195C60.7512 21.9139 57.0788 25.3731 52.5719 25.3731C48.065 25.3731 44.3926 21.9139 44.3926 17.2195C44.3926 12.4958 48.065 9.06598 52.5719 9.06598C57.0788 9.06598 60.7512 12.4921 60.7512 17.2195ZM57.1707 17.2195C57.1707 14.286 55.0422 12.2789 52.5719 12.2789C50.1015 12.2789 47.9731 14.286 47.9731 17.2195C47.9731 20.1236 50.1015 22.1602 52.5719 22.1602C55.0422 22.1602 57.1707 20.12 57.1707 17.2195Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M77.662 9.55857V24.1968C77.662 30.2182 74.1109 32.6775 69.9128 32.6775C65.961 32.6775 63.5826 30.0344 62.6856 27.8728L65.8029 26.5752C66.358 27.9022 67.7182 29.4683 69.9091 29.4683C72.5963 29.4683 74.2616 27.8103 74.2616 24.6894V23.5167H74.1366C73.3352 24.5055 71.7913 25.3694 69.8429 25.3694C65.7662 25.3694 62.0312 21.8183 62.0312 17.2489C62.0312 12.6465 65.7662 9.06598 69.8429 9.06598C71.7876 9.06598 73.3315 9.92986 74.1366 10.8893H74.2616V9.56225H77.662V9.55857ZM74.5152 17.2489C74.5152 14.3779 72.6 12.2789 70.1628 12.2789C67.6924 12.2789 65.6228 14.3779 65.6228 17.2489C65.6228 20.0906 67.6924 22.1602 70.1628 22.1602C72.6 22.1602 74.5152 20.0906 74.5152 17.2489Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M83.2696 0.979996V24.8746H79.7773V0.979996H83.2696Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M96.8788 19.9024L99.6579 21.7551C98.7609 23.0822 96.5994 25.3687 92.8645 25.3687C88.2326 25.3687 84.7734 21.7882 84.7734 17.2152C84.7734 12.3664 88.262 9.0616 92.4638 9.0616C96.695 9.0616 98.7646 12.4289 99.441 14.2486L99.8123 15.1749L88.9127 19.6892C89.7472 21.325 91.0448 22.1595 92.8645 22.1595C94.6878 22.1595 95.9524 21.2625 96.8788 19.9024ZM88.3245 16.9689L95.6105 13.9434C95.2099 12.9252 94.0041 12.2157 92.5851 12.2157C90.7655 12.2157 88.2326 13.8221 88.3245 16.9689Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M13.53 15.0999V11.6407H25.1869C25.3009 12.2436 25.3597 12.9567 25.3597 13.7287C25.3597 16.324 24.6502 19.5333 22.3637 21.8198C20.1396 24.1357 17.298 25.3709 13.5337 25.3709C6.55649 25.3709 0.689453 19.6877 0.689453 12.7104C0.689453 5.73323 6.55649 0.0500031 13.5337 0.0500031C17.3936 0.0500031 20.1433 1.56455 22.2093 3.53861L19.7683 5.97953C18.2869 4.58997 16.2797 3.5092 13.53 3.5092C8.43497 3.5092 4.45009 7.61539 4.45009 12.7104C4.45009 17.8055 8.43497 21.9117 13.53 21.9117C16.8348 21.9117 18.717 20.5846 19.9227 19.3789C20.9006 18.401 21.5439 17.0041 21.7975 15.0962L13.53 15.0999Z",
                        fill: "currentcolor"
                    })]
                }),
                m = e => (0, s.jsx)(g.I, {
                    width: "100px",
                    height: "25px",
                    viewBox: "0 0 100 25",
                    fill: "none",
                    maxW: "100%",
                    xmlns: "http://www.w3.org/2000/svg",
                    color: "white",
                    ...e,
                    children: (0, s.jsx)("path", {
                        d: "M84.9794 23.7454H88.8344V15.5294C88.8344 13.5699 89.7194 11.1052 92.6271 11.1052C94.5866 11.1052 95.4707 12.0534 95.4707 14.2655V23.7454H99.3256V13.1599C99.3256 8.51416 96.1974 7.37653 93.4801 7.37653C91.2991 7.37653 89.7505 8.22951 88.8975 9.33606H88.8344V0.613884H84.9794V23.7454ZM83.7786 11.9271C82.7994 9.5255 80.903 7.37653 77.016 7.37653C71.834 7.37653 68.832 10.9789 68.832 15.7499C68.832 20.522 71.834 24.1243 76.7313 24.1243C81.0613 24.1243 82.8936 21.5654 83.9681 19.226L80.6815 17.4889C80.0811 18.9423 79.1018 20.5851 76.7955 20.5851C74.1093 20.5851 72.8764 18.2477 72.8764 15.7499C72.8764 13.2541 74.2666 10.9157 77.016 10.9157C78.5325 10.9157 79.8916 11.895 80.3978 13.4756L83.7786 11.9271ZM55.7284 13.6962C56.1393 11.9902 57.6248 10.5368 59.868 10.5368C62.459 10.5368 63.5014 12.8432 63.5014 13.6962H55.7284ZM67.5467 16.667C67.5467 10.9468 65.2083 7.37653 59.868 7.37653C54.685 7.37653 51.683 10.9789 51.683 15.7499C51.683 20.522 54.685 24.1243 59.868 24.1243C64.2281 24.1243 66.5354 22.0395 67.7362 20.2062L64.4816 18.3108C64.1018 18.8471 62.901 20.5851 59.868 20.5851C57.7821 20.5851 55.7915 19.0375 55.7284 16.667H67.5467ZM44.184 4.27354V20.0799C44.184 22.5136 45.2585 23.9349 48.4178 23.9349C49.6196 23.9349 50.5668 23.7454 51.4839 23.556V20.3957C50.9146 20.4588 50.3142 20.5851 49.7769 20.5851C48.2915 20.5851 48.0389 19.8905 48.0389 18.6266V10.5368H51.4839V7.75542H48.0389V0.413754L44.184 4.27354ZM37.7244 23.7454H41.5794V0.613884H37.7244V23.7454ZM31.1095 18.0262C31.1095 20.0799 28.8031 20.965 27.001 20.965C25.6107 20.965 24.5052 20.1742 24.5052 18.9734C24.5052 17.4569 25.706 17.0459 27.1593 16.7622L29.2762 16.3192C29.9718 16.1929 30.6043 16.0035 31.1095 15.7499V18.0262ZM34.9644 12.6227C34.9644 8.07213 31.5204 7.37653 28.0755 7.37653C24.5683 7.37653 21.2497 8.8299 21.2497 12.5906L25.1056 12.749C25.1056 11.0109 25.8322 10.3474 28.0755 10.3474C29.7503 10.3474 31.1095 10.7894 31.1095 12.3691V12.8432C30.1302 13.191 28.328 13.5067 26.9378 13.7914L25.3261 14.1071C22.9566 14.5812 20.4598 15.9724 20.4598 19.1007C20.4598 22.1968 22.8614 24.1243 25.8954 24.1243C27.886 24.1243 29.624 23.4928 31.1095 22.292C31.1095 22.703 31.2358 23.3665 31.4883 23.7454H35.5648C35.3443 23.3976 34.9644 22.703 34.9644 21.0592V12.6227ZM19.8789 7.75542C18.8044 3.0475 15.3594 0.677031 10.841 0.677031C4.11036 0.677031 0.173828 6.14369 0.173828 12.4954C0.173828 18.8471 3.63627 24.3138 10.841 24.3138C15.3283 24.3138 18.3303 22.1337 20.1315 17.6152L16.2765 15.8451C15.4546 18.4682 13.7798 20.3957 10.841 20.3957C6.35357 20.3957 4.48925 16.4144 4.48925 12.4954C4.48925 8.57731 6.35357 4.59608 10.841 4.59608C13.4009 4.59608 15.4546 6.30205 15.8024 8.79881L19.8789 7.75542Z",
                        fill: "currentcolor"
                    })
                }),
                p = e => {
                    let {
                        secondaryFill: a,
                        ...t
                    } = e;
                    return (0, s.jsxs)(g.I, {
                        width: "177px",
                        height: "38px",
                        viewBox: "0 0 177 38",
                        fill: "none",
                        maxW: "100%",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "white",
                        ...t,
                        children: [(0, s.jsx)("path", {
                            d: "M72.5237 25.8306C72.5237 25.5226 72.3184 25.3173 71.9077 25.2146V25.0093C72.1131 25.0093 72.883 25.0606 73.0883 25.0606C73.2423 25.0606 74.0123 25.0093 74.2176 25.0093V25.2146C73.8583 25.3173 73.653 25.5226 73.653 25.8306V29.6804C73.653 30.9123 74.3202 31.5796 75.7062 31.5796C76.9381 31.5796 77.862 31.015 77.862 29.7318V25.7792C77.862 25.4713 77.6567 25.266 77.2461 25.1633V25.0093C77.4001 25.0093 78.016 25.0606 78.2213 25.0606C78.4267 25.0606 79.0426 25.0093 79.1966 25.0093V25.2146C78.7346 25.3173 78.5807 25.5226 78.5807 25.8306V29.5778C78.5807 31.2716 77.6054 32.247 75.5008 32.247C73.5503 32.247 72.5236 31.3744 72.5236 29.7831L72.5237 25.8306ZM80.9418 31.9387C81.4038 31.8361 81.5578 31.6308 81.5578 31.3228V25.9846C81.5578 25.5226 81.3011 25.3173 80.8905 25.2147V25.0093H82.3791L86.9989 30.4502V25.8304C86.9989 25.5224 86.7935 25.3171 86.3829 25.2144V25.0091C86.5369 25.0091 87.1528 25.0604 87.3582 25.0604C87.5635 25.0604 88.1794 25.0091 88.3334 25.0091V25.2144C87.8715 25.3171 87.6661 25.5224 87.6661 25.8304V32.2465H87.4095C87.2555 32.1952 86.8962 32.0412 86.3829 31.4766L82.225 26.6515V31.3739C82.225 31.6819 82.379 31.8872 82.841 31.9899V32.1952C82.687 32.1952 82.071 32.1439 81.8657 32.1439C81.6604 32.1439 81.0444 32.1952 80.8905 32.1952L80.9418 31.9387ZM117.489 30.5015H117.694C117.797 30.9121 118.002 31.2714 118.361 31.4768C118.669 31.7334 119.234 31.8361 119.645 31.8361C120.568 31.8361 121.184 31.3741 121.184 30.6555C121.184 29.8855 120.414 29.5262 119.542 29.0643C118.875 28.705 117.54 28.1917 117.54 26.9084C117.54 25.7278 118.464 24.9579 119.901 24.9579C120.876 24.9579 121.287 25.2145 121.954 25.1632V26.6004H121.749C121.492 25.7278 120.722 25.4712 119.85 25.4712C118.875 25.4712 118.567 26.0358 118.567 26.5491C118.567 27.3191 119.337 27.7297 120.209 28.1403C121.184 28.551 122.262 29.1156 122.262 30.3475C122.262 31.5281 121.338 32.3494 119.696 32.3494C118.721 32.3494 118.105 32.0414 117.591 31.9901L117.489 30.5015ZM137.353 29.1669L135.454 26.1384C135.146 25.6251 134.89 25.3171 134.53 25.2144V25.0091C134.787 25.0091 135.506 25.0604 135.659 25.0604C135.865 25.0604 136.583 25.0091 136.891 25.0091V25.2144C136.635 25.2658 136.532 25.3684 136.532 25.5737C136.532 25.7277 136.635 25.9331 136.737 26.1384C136.84 26.2924 138.123 28.4482 138.123 28.4482L139.458 26.1384C139.612 25.8817 139.663 25.6764 139.663 25.5224C139.663 25.3684 139.561 25.2658 139.355 25.2658V25.0091C139.561 25.0091 140.074 25.0605 140.228 25.0605C140.382 25.0605 140.946 25.0091 141.152 25.0091V25.2144C140.638 25.4198 140.331 25.8817 140.023 26.395L138.329 29.2696M138.431 28.9103V31.3228C138.431 31.5794 138.637 31.8874 139.047 31.9387V32.1441C138.842 32.1441 138.072 32.0927 137.867 32.0927C137.661 32.0927 136.943 32.1441 136.686 32.1441V31.9387C137.097 31.8361 137.302 31.5794 137.302 31.3228V29.0129M102.347 25.0091H106.762C106.916 25.0091 107.121 25.0091 107.275 24.9064H107.48L107.429 26.3437H107.224C107.07 25.8817 106.864 25.5224 106.043 25.5224H104.144V28.089H105.632C105.838 28.089 106.094 28.089 106.197 28.0376C106.505 27.9863 106.659 27.781 106.762 27.473H106.967V29.2695H106.762C106.659 28.9616 106.556 28.7562 106.197 28.7049C106.094 28.6536 105.838 28.6536 105.632 28.6536H104.144V31.5795H106.248C107.172 31.5795 107.429 31.2201 107.634 30.6555H107.84L107.634 32.1441C106.967 32.0928 106.556 32.0928 105.786 32.0928H103.579C103.374 32.0928 102.604 32.1441 102.347 32.1441V31.9388C102.758 31.8361 102.963 31.6821 102.963 31.2715V25.8306C102.963 25.4713 102.758 25.266 102.347 25.2147L102.347 25.0091ZM91.0546 25.8817C91.0546 25.5224 90.8493 25.3171 90.4386 25.2144V25.0091C90.6953 25.0091 91.4139 25.0604 91.6705 25.0604C91.8758 25.0604 92.6458 25.0091 92.9024 25.0091V25.2144C92.4918 25.3171 92.2352 25.4711 92.2352 25.8817V31.2712C92.2352 31.6306 92.4405 31.8359 92.9024 31.9385V32.1438C92.6458 32.1438 91.9272 32.0925 91.6705 32.0925C91.4652 32.0925 90.6953 32.1438 90.4386 32.1438V31.9385C90.9006 31.8359 91.1059 31.6819 91.1059 31.2712L91.0546 25.8817ZM124.574 25.8817C124.574 25.5224 124.368 25.3171 123.958 25.2144V25.0091C124.214 25.0091 124.984 25.0604 125.19 25.0604C125.395 25.0604 126.165 25.0091 126.422 25.0091V25.2144C126.011 25.3171 125.806 25.4711 125.806 25.8817V31.2712C125.806 31.6306 126.011 31.8359 126.422 31.9385V32.1438C126.165 32.1438 125.446 32.0925 125.19 32.0925C124.984 32.0925 124.214 32.1438 123.958 32.1438V31.9385C124.42 31.8359 124.574 31.6819 124.574 31.2712V25.8817ZM130.733 25.0604C128.321 25.0604 127.91 25.0091 127.448 24.9578V26.395H127.653C127.859 25.7277 128.218 25.5737 128.68 25.5737H130.22V31.2199C130.22 31.5793 130.014 31.7846 129.552 31.8872V32.0925C129.809 32.0925 130.579 32.0412 130.784 32.0412C130.99 32.0412 131.76 32.0925 132.016 32.0925V31.8872C131.606 31.7846 131.349 31.5792 131.349 31.2199V25.5737H132.838C133.3 25.5737 133.659 25.7277 133.864 26.395H134.07V24.9578C133.505 25.0091 133.146 25.0604 130.733 25.0604ZM111.382 31.2713C111.382 31.6306 111.587 31.8359 112.049 31.9385V32.1439C111.792 32.1439 111.022 32.0925 110.817 32.0925C110.612 32.0925 109.893 32.1439 109.637 32.1439V31.9385C110.047 31.8359 110.252 31.6819 110.252 31.2713V25.8304C110.252 25.4711 110.047 25.2658 109.637 25.2144V25.0091C109.893 25.0091 110.612 25.0605 110.817 25.0605C111.176 25.0605 112.152 25.0091 112.562 25.0091C114.256 25.0091 115.18 25.7277 115.18 26.9083C115.18 27.8323 114.462 28.4996 113.384 28.7562C113.384 28.7562 113.64 28.9102 113.897 29.1669C114.205 29.5262 115.026 30.6554 115.334 31.0661C115.642 31.4767 116.104 31.9387 116.566 31.9387V32.0927C116.361 32.144 116.002 32.1953 115.745 32.1953C115.18 32.1953 114.718 31.99 114.256 31.4767C113.846 31.0147 113.23 30.0395 112.819 29.5262C112.562 29.2182 112.254 28.9615 111.741 28.8589C111.638 28.8589 111.536 28.8076 111.433 28.8076L111.382 31.2713ZM111.382 28.3967C111.587 28.448 111.946 28.448 112.254 28.448C113.589 28.448 114 27.6781 114 27.0108C114 26.0355 113.384 25.4709 112.203 25.4709C111.946 25.4709 111.638 25.5222 111.382 25.5736V28.3967ZM94.5456 25.8815C94.3916 25.5222 94.1349 25.2655 93.7243 25.2142V25.0089C93.981 25.0089 94.8536 25.0602 95.0589 25.0602C95.2129 25.0602 95.9828 25.0089 96.2395 25.0089V25.2142C96.0342 25.2655 95.7262 25.3682 95.7262 25.6248C95.7262 25.7788 95.8289 26.0355 96.0342 26.4461L97.8821 30.604L99.6273 26.4461C99.7813 26.0868 99.8839 25.8302 99.8839 25.6762C99.8839 25.4709 99.6786 25.3169 99.3706 25.2655V25.0089C99.5759 25.0089 100.141 25.0602 100.346 25.0602C100.5 25.0602 101.167 25.0089 101.424 25.0089V25.2142C101.013 25.3169 100.705 25.5735 100.5 26.1381L97.9333 32.1436H97.3687L94.5456 25.8815ZM101.116 6.94074C100.808 6.27346 100.346 5.81147 99.6272 5.65748V5.29816C100.089 5.29816 101.68 5.34949 102.04 5.34949C102.348 5.34949 103.888 5.29816 104.401 5.29816V5.65748C103.99 5.76014 103.477 5.96547 103.477 6.42743C103.477 6.73541 103.682 7.19737 104.042 7.96731L107.532 15.8721L110.817 7.96731C111.074 7.35136 111.279 6.83805 111.279 6.47873C111.279 6.06808 110.869 5.76012 110.355 5.65746V5.29814C110.817 5.29814 111.844 5.34947 112.203 5.34947C112.511 5.34947 113.743 5.29814 114.256 5.29814V5.65746C113.435 5.86278 112.922 6.37607 112.46 7.40267L107.635 18.798H106.557L101.116 6.94074ZM54.4043 18.336C55.0202 18.182 55.4822 17.9254 55.4822 17.2068V6.78677C55.4822 6.11949 55.0716 5.8115 54.4043 5.65751V5.24686C54.7123 5.24686 56.1495 5.29819 56.5088 5.29819C56.9195 5.29819 58.408 5.24686 58.716 5.24686V5.60617C58.1001 5.76016 57.6381 6.01682 57.6381 6.73544V11.1499H65.4402V6.78677C65.4402 6.06816 65.0296 5.76017 64.3623 5.65751V5.24686C64.6703 5.24686 66.1588 5.29819 66.5695 5.29819C66.9288 5.29819 68.366 5.24686 68.7253 5.24686V5.60617C68.1094 5.76016 67.6474 6.01682 67.6474 6.73544V17.1554C67.6474 17.8227 68.058 18.1307 68.7253 18.2847V18.644C68.4173 18.644 66.9288 18.5927 66.5695 18.5927C66.1588 18.5927 64.7216 18.644 64.3623 18.644V18.336C64.9782 18.182 65.4402 17.9254 65.4402 17.2068V12.279H57.6381V17.2068C57.6381 17.9254 58.0487 18.182 58.716 18.336V18.6953C58.408 18.6953 56.8681 18.644 56.5088 18.644C56.1495 18.644 54.7636 18.6953 54.4043 18.6953V18.336ZM144.336 18.336C145.157 18.182 145.568 17.8741 145.568 17.1554V6.78677C145.568 6.06816 145.106 5.76017 144.336 5.65751V5.24686C144.798 5.24686 146.235 5.29819 146.646 5.29819C147.313 5.29819 149.109 5.1442 150.547 5.1442C155.321 5.1442 158.246 7.81342 158.246 11.8683C158.246 15.8209 155.218 18.7465 150.29 18.7465C148.853 18.7465 147.21 18.6438 146.543 18.6438C146.132 18.6438 144.798 18.6952 144.336 18.6952V18.336ZM147.724 17.6687C148.237 17.7714 149.109 17.8227 149.828 17.8227C153.832 17.8227 155.936 15.4102 155.936 12.0226C155.936 8.53203 153.729 6.06838 149.982 6.06838C149.212 6.06838 148.237 6.11971 147.724 6.22237V17.6687ZM90.1829 17.1041C90.1829 17.7714 90.6449 18.1821 91.4149 18.3361V18.6954C90.9529 18.6954 89.5157 18.644 89.0537 18.644C88.6944 18.644 87.2571 18.6954 86.7951 18.6954V18.3361C87.5651 18.1821 87.9757 17.8227 87.9757 17.1041V6.83812C87.9757 6.22217 87.6164 5.81152 86.7951 5.65753V5.24688C87.2571 5.24688 88.643 5.29821 89.0537 5.29821C89.721 5.29821 91.5689 5.19555 92.3389 5.19555C95.5727 5.19555 97.3693 6.53014 97.3693 8.78874C97.3693 10.5853 96.0348 11.766 93.9815 12.2793C93.9815 12.2793 94.4435 12.5359 94.9054 13.1005C95.4701 13.7678 97.0613 16.0264 97.6773 16.7964C98.2933 17.5663 99.1146 18.4389 99.9872 18.4389V18.7469C99.5765 18.8496 98.9092 18.9009 98.3959 18.9009C97.318 18.9009 96.4454 18.4903 95.5727 17.4637C94.8541 16.5911 93.5709 14.6918 92.8522 13.7678C92.3902 13.1519 91.8256 12.6899 90.799 12.5359C90.5936 12.4846 90.3883 12.4846 90.183 12.4332L90.1829 17.1041ZM90.1829 11.6633C90.5936 11.7146 91.2609 11.7659 91.8768 11.7659C94.3921 11.7659 95.162 10.3287 95.162 9.04537C95.162 7.24882 93.9301 6.11948 91.7742 6.11948C91.3122 6.11948 90.6449 6.17081 90.1829 6.27347V11.6633ZM132.582 17.1041C132.582 17.7714 133.044 18.1821 133.814 18.3361V18.6954C133.352 18.6954 131.915 18.644 131.504 18.644C131.145 18.644 129.708 18.6954 129.246 18.6954V18.3361C130.016 18.1821 130.426 17.8227 130.426 17.1041V6.83812C130.426 6.22217 130.067 5.81152 129.246 5.65753V5.24688C129.708 5.24688 131.093 5.29821 131.504 5.29821C132.171 5.29821 134.019 5.19555 134.738 5.19555C137.972 5.19555 139.768 6.53014 139.768 8.78874C139.768 10.5853 138.434 11.766 136.381 12.2793C136.381 12.2793 136.843 12.5359 137.305 13.1005C137.869 13.7678 139.46 16.0264 140.076 16.7964C140.692 17.5663 141.514 18.4389 142.386 18.4389V18.7469C141.976 18.8496 141.308 18.9009 140.795 18.9009C139.717 18.9009 138.845 18.4903 137.972 17.4637C137.253 16.5911 135.97 14.6918 135.251 13.7678C134.789 13.1519 134.225 12.6899 133.198 12.5359C132.993 12.4846 132.787 12.4846 132.582 12.4332L132.582 17.1041ZM132.582 11.6633C132.993 11.7146 133.66 11.7659 134.276 11.7659C136.791 11.7659 137.561 10.3287 137.561 9.04537C137.561 7.24882 136.329 6.11948 134.173 6.11948C133.711 6.11948 133.044 6.17081 132.582 6.27347V11.6633ZM70.6771 18.3361C71.5497 18.1308 72.0116 17.5661 72.3196 16.8475L76.6314 6.47883C76.8368 6.06818 77.0421 5.19557 77.0421 5.19557H78.274C78.274 5.19557 78.4793 6.06818 78.6847 6.53016L83.2531 16.8988C83.5611 17.6174 83.9204 18.1308 84.8444 18.3361V18.6954C84.331 18.6954 82.8425 18.6441 82.4832 18.6441C82.1239 18.6441 80.6866 18.6954 80.1733 18.6954V18.3361C80.8406 18.1821 81.0459 17.8228 81.0459 17.5148C81.0459 17.2582 80.9433 16.8989 80.7893 16.5909L79.814 14.3837H74.7835L73.9109 16.6422C73.8083 16.8989 73.7056 17.2582 73.7056 17.5148C73.7056 17.8741 73.9109 18.1821 74.6295 18.3874V18.7467C74.1676 18.7467 72.987 18.6954 72.7303 18.6954L70.7798 18.7467L70.6771 18.3361ZM79.2491 13.3056L77.0933 8.32648L75.0914 13.3056H79.2491ZM113.383 18.3361C114.256 18.1308 114.718 17.5661 115.026 16.8475L119.338 6.47883C119.543 6.06818 119.748 5.19557 119.748 5.19557H120.98C120.98 5.19557 121.185 6.06818 121.391 6.53016L125.959 16.8988C126.267 17.6174 126.627 18.1308 127.55 18.3361V18.6954C127.037 18.6954 125.549 18.6441 125.189 18.6441C124.83 18.6441 123.393 18.6954 122.879 18.6954V18.3361C123.547 18.1821 123.752 17.8228 123.752 17.5148C123.752 17.2582 123.649 16.8989 123.495 16.5909L122.52 14.3837H117.49L116.617 16.6422C116.514 16.8989 116.412 17.2582 116.412 17.5148C116.412 17.8741 116.617 18.1821 117.336 18.3874V18.7467C116.874 18.7467 115.693 18.6954 115.436 18.6954L113.486 18.7467V18.3361H113.383ZM121.904 13.3056L119.748 8.32648L117.746 13.3056H121.904Z",
                            fill: "currentcolor"
                        }), (0, s.jsx)("path", {
                            d: "M18.4401 2.86537H45.603V13.1271C45.603 17.8167 43.8385 27.7998 32.1373 35.2293C32.1373 35.2293 19.4146 29.936 18.4395 13.1271L18.4401 2.86537Z",
                            fill: "currentcolor"
                        }), (0, s.jsx)("path", {
                            d: "M27.3719 19.0544C27.3038 19.0516 27.2446 19.0856 27.1969 19.1269C27.104 19.2074 27.0484 19.3187 27.0455 19.3246C26.9418 19.4697 26.7238 19.5062 26.5258 19.5006C26.3278 19.4949 26.1576 19.4498 26.1576 19.4498L26.1467 19.447L26.1358 19.4507C25.8512 19.5456 25.7245 19.6666 25.6724 19.7708C25.6464 19.8229 25.6398 19.8701 25.6398 19.9042C25.6398 19.9309 25.6432 19.9427 25.6452 19.9504V21.0142C25.6348 21.0728 25.6077 21.1087 25.5699 21.1339C25.5317 21.1594 25.4806 21.173 25.4294 21.1783C25.3268 21.1891 25.2271 21.1675 25.2271 21.1675H25.2262C24.8692 21.0961 24.6244 21.1797 24.4717 21.2836C24.3215 21.3857 24.2615 21.5045 24.2595 21.5085C24.1067 21.7152 24.2078 22.0054 24.2078 22.0054V22.0072C24.2177 22.0336 24.2291 22.0586 24.2422 22.0816C24.2424 22.0821 24.244 22.087 24.244 22.087C24.3833 22.4585 24.8943 22.4579 24.8943 22.4579C25.08 22.5972 25.4048 22.5042 25.4048 22.5042C25.5003 22.5042 25.5558 22.5438 25.5899 22.594C25.6068 22.6624 25.5989 22.7309 25.5989 22.7309L25.598 22.7391L25.5998 22.7463C25.6029 22.7587 25.6094 22.8231 25.6125 22.9114C25.6157 22.9996 25.6169 23.1158 25.618 23.2505C25.6201 23.52 25.619 23.8626 25.6161 24.1992C25.6103 24.8722 25.5989 25.5223 25.5989 25.5223C25.5989 25.7494 25.5545 25.8824 25.5545 25.8824L25.5527 25.8878V25.8941C25.5527 25.9054 25.5489 25.9112 25.5363 25.9213C25.5237 25.9314 25.5015 25.9424 25.4719 25.9503C25.4128 25.9661 25.3279 25.9721 25.2425 25.9721C25.0718 25.9721 24.8988 25.9494 24.8988 25.9494L24.8943 25.9485L24.8897 25.9494C24.4062 25.9978 24.2565 26.4318 24.2549 26.4364V26.4373C24.2166 26.5274 24.2199 26.6188 24.2458 26.7012C24.2588 26.7426 24.2777 26.7821 24.2993 26.8191C24.3856 27.0299 24.6158 27.1946 24.6158 27.1946C24.6158 27.2875 25.4982 27.3333 25.4982 27.3333C25.5517 27.3467 25.5881 27.3843 25.6152 27.4295C25.6179 27.4377 25.6212 27.4456 25.6234 27.4539C25.6451 27.5353 25.6452 27.6117 25.6452 27.6117C25.6385 27.6365 25.636 27.6643 25.6343 27.7042C25.6323 27.7493 25.6313 27.805 25.6325 27.8675C25.6346 27.9925 25.6419 28.1454 25.6506 28.2937C25.668 28.5903 25.6914 28.8687 25.6914 28.8687L25.6923 28.8705V28.8723C25.6973 28.9019 25.7117 28.9275 25.7295 28.9503C25.7295 28.9504 25.7304 28.9585 25.7304 28.9585C25.7769 29.2371 26.6591 29.1444 26.6591 29.1444C26.6591 29.1444 29.7513 29.073 30.5869 29.0863C30.7063 29.0881 30.7794 29.0923 30.791 29.0981C30.8838 29.0981 31.1165 29.0519 31.1165 29.0519L31.4412 29.2841C31.5718 29.3856 31.7071 29.4146 31.8312 29.4065C31.856 29.4051 31.8808 29.4018 31.9046 29.3974C32.1427 29.3543 32.3236 29.1907 32.3236 29.1907L32.7879 29.0982C32.8808 29.0982 36.6422 29.0519 36.6422 29.0519C36.9672 29.1448 37.1065 29.0047 37.1065 29.0047L37.7096 28.9585C37.7328 28.9585 37.7545 28.9567 37.7749 28.9531C37.9224 28.926 37.9983 28.8081 38.0379 28.6928C38.0497 28.6699 38.0621 28.6471 38.0706 28.6239C38.1198 28.4885 38.1186 28.3554 38.1186 28.3554V27.5701C38.1264 27.5079 38.1407 27.4594 38.1567 27.4159C38.2413 27.2667 38.3598 27.2409 38.3598 27.2409L38.9167 27.1474L39.196 27.0087C39.3032 26.9819 39.3596 26.907 39.3919 26.8164C39.4001 26.8035 39.409 26.7913 39.4155 26.7774C39.454 26.6956 39.4653 26.6003 39.4653 26.5099C39.4653 26.329 39.4173 26.1626 39.4173 26.1626L39.4164 26.1589L39.4155 26.1551C39.3138 25.9518 39.0793 25.8689 38.8768 25.8332C38.6742 25.7975 38.4959 25.8096 38.4959 25.8096H38.495C38.2715 25.832 38.1871 25.768 38.1486 25.7053C38.11 25.6427 38.1186 25.5747 38.1186 25.5747V25.5719L38.1658 22.6944C38.1841 22.5865 38.2155 22.5006 38.2465 22.4305C38.2828 22.361 38.3136 22.3189 38.3136 22.3189C38.4529 22.3654 38.9167 22.2255 38.9167 22.2255C39.1835 22.1988 39.2947 22.0352 39.3429 21.8999C39.3472 21.892 39.3537 21.8842 39.3575 21.8763C39.4186 21.7478 39.4182 21.6295 39.4182 21.626C39.443 21.444 39.3164 21.2935 39.1906 21.1917C39.0643 21.0894 38.9321 21.0302 38.9321 21.0302L38.9249 21.0265H38.2728C38.2547 21.0228 38.2401 21.0132 38.2247 20.9929C38.2091 20.9722 38.1941 20.9415 38.183 20.9041C38.1608 20.8292 38.1505 20.7281 38.1477 20.6284C38.142 20.4288 38.1649 20.2339 38.1649 20.2339L38.1658 20.2311V19.8577C38.1658 19.6771 38.0368 19.5502 37.9155 19.4714C37.7942 19.3925 37.6742 19.3571 37.6742 19.3571L37.6688 19.3553H36.8408C36.8221 19.3243 36.8012 19.2938 36.7701 19.2737C36.7289 19.247 36.6813 19.2272 36.6359 19.212C36.5449 19.1817 36.4608 19.1703 36.4608 19.1703C36.3095 19.1228 36.0845 19.1232 36.0845 19.1232H36.0727L36.0627 19.1295C35.7736 19.3297 35.2664 19.4136 34.8338 19.4424C34.4013 19.4713 34.0439 19.4488 34.0439 19.4488L32.5875 19.3545L32.5748 19.3663C32.579 19.3621 32.5698 19.3695 32.5548 19.3744C32.5398 19.3795 32.5183 19.3855 32.494 19.3908C32.4456 19.4013 32.384 19.4112 32.3236 19.4198C32.2027 19.4371 32.0868 19.4488 32.0868 19.4488L32.0633 19.4506L32.0551 19.4742C32.0151 19.5942 31.8937 19.6356 31.8937 19.6356L31.7658 19.6791C31.681 19.6071 31.5486 19.5523 31.423 19.5141C31.2905 19.4737 31.1804 19.4516 31.1754 19.4506C31.1745 19.4502 31.1736 19.4493 31.1727 19.4488C31.1683 19.447 31.1638 19.446 31.16 19.4451C31.1523 19.4433 31.145 19.4423 31.1355 19.4414C31.1165 19.4396 31.0921 19.4391 31.062 19.4386C31.0019 19.4381 30.9198 19.4399 30.8226 19.4432C30.6283 19.4498 30.3742 19.4623 30.1216 19.4768C29.6168 19.5058 29.1186 19.5411 29.1177 19.5412C28.542 19.5642 28.1532 19.4719 27.9088 19.3752C27.6644 19.2786 27.5678 19.1812 27.5678 19.1812C27.5065 19.0974 27.4388 19.057 27.3719 19.0544ZM27.3692 19.1305C27.4098 19.1323 27.4569 19.155 27.5107 19.2303L27.5116 19.2321L27.5134 19.2349C27.5134 19.2349 27.626 19.3455 27.8807 19.4462C28.1354 19.5469 28.5353 19.641 29.1204 19.6176H29.1232C29.1232 19.6176 29.6215 19.5822 30.1262 19.5532C30.3785 19.5387 30.6323 19.5262 30.8254 19.5196C30.922 19.5164 31.0042 19.5146 31.0621 19.515C31.0911 19.5152 31.1139 19.5163 31.1292 19.5178C31.1356 19.5182 31.1398 19.5191 31.1428 19.5196L31.1447 19.5214L31.1555 19.5241C31.1555 19.5241 31.2707 19.5467 31.4022 19.5867C31.5337 19.6267 31.6828 19.6877 31.7405 19.7454L31.7568 19.7618L31.9182 19.7083C31.9182 19.7083 32.0173 19.6502 32.0842 19.5496C32.0325 19.6752 31.9056 19.7182 31.9056 19.7182L31.7668 19.8117C31.6275 19.6724 31.1628 19.5795 31.1628 19.5795C31.1164 19.5331 29.1196 19.672 29.1196 19.672C27.9587 19.7184 27.5407 19.3011 27.5407 19.3011C27.3085 18.976 27.0763 19.4398 27.0763 19.4398C26.8442 19.7649 26.1477 19.5795 26.1477 19.5795C25.8907 19.6651 25.7757 19.7701 25.7223 19.8588C25.726 19.8426 25.7315 19.825 25.7414 19.8053C25.7817 19.7247 25.8901 19.6162 26.1558 19.526C26.1707 19.5297 26.3259 19.5711 26.5249 19.5768C26.7332 19.5827 26.9795 19.549 27.1081 19.3691L27.1099 19.3673L27.1117 19.3645C27.1117 19.3645 27.168 19.2523 27.2468 19.184C27.2862 19.1499 27.3286 19.1289 27.3692 19.1305ZM36.0954 19.2004C36.1119 19.2006 36.3222 19.2032 36.4446 19.2439L36.4482 19.2448L36.4509 19.2457C36.4509 19.2457 36.5301 19.257 36.6133 19.2847C36.6549 19.2986 36.6974 19.316 36.7303 19.3373C36.7355 19.3405 36.7383 19.3446 36.743 19.3481C36.6315 19.2795 36.4564 19.2538 36.4564 19.2538C36.3171 19.2074 36.0846 19.2076 36.0846 19.2076C35.4809 19.6255 34.0413 19.5332 34.0413 19.5332L32.6021 19.4397C32.5562 19.4856 32.1074 19.5312 32.097 19.5323C32.0989 19.529 32.1015 19.5265 32.1033 19.5232C32.1101 19.5227 32.2163 19.5121 32.3355 19.4951C32.3969 19.4863 32.4597 19.4763 32.5114 19.4651C32.5372 19.4595 32.5601 19.4534 32.5794 19.447C32.5902 19.4433 32.5985 19.4371 32.6075 19.4325L34.0395 19.5241C34.0395 19.5241 34.4023 19.5479 34.8403 19.5187C35.2732 19.4898 35.78 19.4124 36.0954 19.2004ZM36.8228 19.4316H37.6571C37.6598 19.4325 37.7261 19.458 37.8031 19.4978C37.7253 19.459 37.6635 19.4398 37.6635 19.4398H36.8273C36.8264 19.437 36.824 19.4345 36.8228 19.4316ZM37.8186 19.506C37.8385 19.5168 37.8549 19.5224 37.8757 19.5359C37.8814 19.5396 37.8863 19.5447 37.892 19.5486C37.867 19.5325 37.8423 19.5184 37.8186 19.506ZM38.1496 21.0123C38.1547 21.0211 38.159 21.0307 38.165 21.0386C38.1887 21.07 38.2208 21.0942 38.2602 21.1021L38.2638 21.103H38.9077C38.9132 21.1053 39.0287 21.1588 39.1435 21.2517C39.2239 21.3168 39.2947 21.3984 39.3267 21.4884C39.2436 21.3548 39.0902 21.2524 38.9966 21.1991C38.9494 21.1723 38.9168 21.1583 38.9168 21.1583H38.2674C38.2106 21.1469 38.1736 21.0903 38.1496 21.0123ZM25.6608 21.1538C25.5441 21.3747 25.2191 21.2971 25.2191 21.2971C24.5227 21.1578 24.2905 21.6227 24.2905 21.6227C24.2841 21.6311 24.2805 21.6402 24.2751 21.649C24.2856 21.6148 24.2999 21.5817 24.3222 21.5519L24.3259 21.5464C24.3259 21.5464 24.3788 21.4395 24.5163 21.3459C24.6537 21.2525 24.8732 21.1742 25.2119 21.2416C25.2119 21.2416 25.3206 21.2659 25.4386 21.2534C25.4976 21.2472 25.5605 21.2327 25.6136 21.1972C25.6312 21.1855 25.6464 21.1703 25.6608 21.1538ZM38.0899 25.7508C38.146 25.8363 38.2682 25.909 38.5025 25.8859C38.5025 25.8859 38.6731 25.8747 38.8653 25.9086C39.057 25.9424 39.2624 26.0214 39.3469 26.1888C39.3471 26.1897 39.3522 26.213 39.3541 26.2206C39.1363 25.8989 38.4998 25.9404 38.4998 25.9404C38.1962 25.9707 38.1125 25.8434 38.0899 25.7508ZM25.5955 25.9694C25.5949 25.9717 25.591 25.9866 25.591 25.9866C25.591 26.0098 25.5801 26.0294 25.561 26.0446C25.542 26.0599 25.5148 26.0713 25.4822 26.08C25.2863 26.1322 24.8945 26.08 24.8945 26.08C24.5584 26.1136 24.3936 26.3401 24.3277 26.4636C24.3277 26.4636 24.4568 26.0706 24.8981 26.0256C24.906 26.0265 25.0702 26.0482 25.2436 26.0482C25.3324 26.0482 25.4207 26.0428 25.4921 26.0238C25.5278 26.0143 25.56 26.0015 25.5855 25.9812C25.5895 25.9779 25.592 25.9731 25.5955 25.9694ZM28.8304 6.16554L28.8168 6.17734C28.0922 6.76609 27.0393 6.49475 27.0393 6.49475L27.0348 6.49386H27.0302C26.0076 6.49386 25.6781 6.5401 25.6781 6.5401L25.6635 6.54289L25.6545 6.55374C25.5488 6.68058 25.4192 6.67879 25.3053 6.64625C25.1941 6.61444 25.1098 6.55219 25.1058 6.54921C25.0849 6.51865 25.0514 6.50127 25.0151 6.48845C24.974 6.47391 24.9269 6.46541 24.8818 6.45942C24.7917 6.4474 24.7086 6.44675 24.7086 6.44675H24.7068L24.7058 6.44765C23.6868 6.51712 23.0514 6.4588 22.6726 6.38416C22.4832 6.34688 22.3581 6.30513 22.2808 6.27352C22.2036 6.2419 22.1765 6.22183 22.1765 6.22183L22.1811 6.22647C22.1663 6.21171 22.1521 6.20633 22.1348 6.20107C22.1175 6.19583 22.0976 6.19183 22.0759 6.1884C22.0324 6.18154 21.9808 6.17772 21.9308 6.17478C21.8307 6.16875 21.7367 6.16841 21.7367 6.16841H21.7131L21.7022 6.18925C21.6619 6.27001 21.5367 6.43948 21.5272 6.45224C21.5216 6.45404 21.5091 6.45781 21.4864 6.46041C21.4602 6.46319 21.4261 6.4657 21.3875 6.46678C21.3105 6.46909 21.2152 6.46768 21.1227 6.46499C20.9378 6.45922 20.7645 6.44776 20.7645 6.44776L20.7627 6.44686H20.7618C20.5681 6.44686 20.4515 6.50951 20.3863 6.57473C20.3211 6.63995 20.3065 6.70986 20.3065 6.70986L20.3056 6.71264L20.2594 7.6005V7.60328C20.2823 7.8789 20.2545 7.99045 20.2358 8.02044C20.2264 8.03545 20.2262 8.03224 20.2258 8.03224L20.1941 8.0114L20.1723 8.04316C20.1602 8.06131 20.1139 8.08588 20.0481 8.10029C19.9822 8.1147 19.9004 8.12194 19.8204 8.12477C19.6606 8.13049 19.5112 8.11934 19.5112 8.11934L19.5076 8.11844L19.5039 8.11934C19.3778 8.13197 19.2834 8.1937 19.2174 8.27623C19.1513 8.35876 19.1117 8.46088 19.0877 8.56008C19.0396 8.75851 19.0523 8.94914 19.0523 8.94914V8.95372C19.0775 9.07974 19.1494 9.16819 19.2391 9.22488C19.3289 9.28157 19.4362 9.30898 19.5384 9.32101C19.7372 9.34441 19.912 9.31107 19.922 9.30921H19.9229C20.1701 9.33196 20.2599 9.40834 20.2929 9.46972C20.3261 9.53124 20.3074 9.5849 20.3074 9.5849L20.3056 9.59033V9.5967C20.3056 9.69274 20.3176 10.4562 20.3292 11.1992C20.3408 11.9394 20.3518 12.6513 20.3519 12.6566C20.3408 12.756 20.3142 12.8184 20.283 12.857C20.2517 12.8956 20.2161 12.9123 20.1796 12.9196C20.1066 12.9342 20.0336 12.9051 20.0336 12.9051L20.0263 12.9014H20.019C19.4996 12.9014 19.2608 13.0826 19.1611 13.2696C19.0619 13.4556 19.0991 13.6396 19.0994 13.6414C19.1249 13.9785 19.3374 14.134 19.5375 14.1946C19.7382 14.2554 19.9302 14.2308 19.9302 14.2308L19.9256 14.2317C20.1741 14.2317 20.2759 14.2973 20.3192 14.3551C20.3625 14.4128 20.3528 14.4657 20.3528 14.4657L20.351 14.4775L20.3564 14.4893C20.3548 14.4861 20.3618 14.513 20.3636 14.5483C20.3655 14.5835 20.3665 14.6304 20.3655 14.6843C20.3633 14.7921 20.356 14.9284 20.3473 15.0616C20.33 15.3279 20.3065 15.583 20.3065 15.583V15.5877L20.3074 15.5931C20.356 15.8601 20.5104 15.9696 20.6493 16.0012C20.7781 16.0305 20.8842 16.0003 20.9006 15.9958H20.9024L24.6088 16.0892C25.138 16.4747 25.4797 16.4858 25.6844 16.3803C25.8803 16.2794 25.9318 16.0992 25.9383 16.0783L26.0027 16.0883C26.0441 16.0952 26.1252 16.0987 26.2439 16.1019C26.3626 16.1052 26.5166 16.1072 26.6937 16.1083C27.0481 16.1106 27.495 16.1092 27.9362 16.1065C28.3774 16.1037 28.8133 16.0992 29.1442 16.0956C29.4735 16.0919 29.6991 16.0893 29.721 16.0892H29.7237C29.8759 16.1231 29.9948 16.1154 30.0864 16.0802C30.1798 16.0443 30.243 15.9807 30.2841 15.9142C30.3659 15.7821 30.3658 15.6366 30.3658 15.6349V15.6331L30.412 14.5267C30.4309 14.454 30.5098 14.4007 30.5916 14.368C30.6707 14.3363 30.7421 14.3261 30.7476 14.3254C31.263 14.3935 31.5157 14.2117 31.6263 14.0088C31.7371 13.8058 31.7127 13.5889 31.7125 13.5871V13.5862C31.688 13.2484 31.4877 13.0816 31.299 13.0086C31.11 12.9354 30.929 12.9487 30.929 12.9487L30.9317 12.9478C30.6855 12.9478 30.5726 12.8622 30.5154 12.7791C30.4586 12.6964 30.4583 12.6167 30.4583 12.6159V12.615C30.4712 12.5343 30.479 12.3342 30.4855 12.0627C30.492 11.7881 30.4962 11.4486 30.4991 11.1177C30.5049 10.4558 30.5054 9.829 30.5054 9.829C30.5054 9.77204 30.5378 9.68025 30.5716 9.60682C30.6013 9.54257 30.6237 9.50525 30.6306 9.49345C30.9166 9.52256 31.135 9.50547 31.2881 9.45082C31.4479 9.39375 31.5463 9.30055 31.6028 9.20324C31.7145 9.01083 31.6647 8.80797 31.6636 8.80331C31.6847 8.62889 31.6585 8.49695 31.5974 8.40518C31.5348 8.3113 31.4417 8.25892 31.3489 8.23106C31.1688 8.17705 30.9892 8.20988 30.978 8.21201C30.6602 8.21201 30.5512 8.12393 30.5127 8.04696C30.4743 7.96964 30.5028 7.89154 30.5028 7.89154L30.5037 7.88784L30.5046 7.88411C30.5749 7.43906 30.5518 7.13211 30.5101 6.93551C30.4683 6.73891 30.4049 6.64892 30.4049 6.64892L30.4012 6.64349L30.3949 6.63885C30.3475 6.60723 30.2791 6.5952 30.1963 6.58625C30.1135 6.57728 30.0177 6.57445 29.9269 6.57445C29.7454 6.57445 29.5823 6.58625 29.5823 6.58625L29.5705 6.58715L29.5624 6.5935C29.5291 6.61843 29.4932 6.61564 29.4436 6.59072C29.3939 6.56592 29.3381 6.51805 29.2876 6.46466C29.1864 6.35788 29.1062 6.23249 29.1062 6.23249L29.0971 6.21887L28.8304 6.16554ZM41.9713 6.16554L41.9577 6.17734C41.2331 6.76609 40.1802 6.49475 40.1802 6.49475L40.1756 6.49386H40.1702C39.1939 6.49386 38.8652 6.5401 38.8652 6.5401L38.8507 6.54289L38.8416 6.55374C38.7359 6.68058 38.6063 6.67879 38.4924 6.64625C38.3829 6.61495 38.3002 6.55482 38.2938 6.55011C38.273 6.51886 38.239 6.50141 38.2022 6.48845C38.1611 6.47391 38.114 6.46541 38.0689 6.45942C37.9788 6.4474 37.8957 6.44675 37.8957 6.44675H37.8939L37.893 6.44765C36.874 6.51712 36.2386 6.4588 35.8598 6.38416C35.6703 6.34688 35.5452 6.30513 35.468 6.27352C35.3907 6.2419 35.3637 6.22183 35.3637 6.22183L35.3682 6.22647C35.3535 6.21171 35.3384 6.20633 35.3211 6.20107C35.3038 6.19583 35.2848 6.19183 35.263 6.1884C35.2195 6.18154 35.1671 6.17772 35.117 6.17478C35.017 6.16888 34.9239 6.16841 34.9239 6.16841H34.9003L34.8894 6.18925C34.8489 6.27021 34.7223 6.44116 34.7135 6.45316C34.7074 6.45496 34.6948 6.4579 34.6727 6.46041C34.6465 6.46319 34.6132 6.4657 34.5747 6.46678C34.4977 6.46909 34.4023 6.46768 34.3099 6.46499C34.125 6.45922 33.9508 6.44776 33.9508 6.44776L33.9498 6.44686H33.9489C33.7329 6.44686 33.606 6.50793 33.5345 6.57292C33.463 6.63791 33.4465 6.70986 33.4465 6.70986V7.64946C33.4694 7.90164 33.4405 8.0016 33.4238 8.02491C33.4155 8.03657 33.4163 8.03224 33.4148 8.03215C33.4133 8.03207 33.412 8.03215 33.412 8.03215L33.3812 8.01131L33.3594 8.04308C33.3473 8.06122 33.301 8.08579 33.2352 8.1002C33.1693 8.11461 33.0866 8.12185 33.0066 8.12468C32.8468 8.1304 32.6974 8.11925 32.6974 8.11925L32.6947 8.11835L32.691 8.11925C32.5542 8.1317 32.4511 8.19199 32.3781 8.27432C32.3052 8.35666 32.2611 8.45962 32.234 8.5591C32.1797 8.75804 32.1922 8.94905 32.1922 8.94905V8.95085L32.1932 8.95363C32.2184 9.07965 32.2902 9.1681 32.38 9.22479C32.4697 9.28148 32.5761 9.30889 32.6783 9.32092C32.8772 9.34432 33.0528 9.31098 33.0629 9.30912H33.0638C33.311 9.33187 33.3998 9.40825 33.4329 9.46964C33.466 9.53115 33.4483 9.58482 33.4483 9.58482L33.4474 9.58571V9.58751C33.4386 9.62266 33.4361 9.68269 33.4329 9.77977C33.4297 9.87684 33.4276 10.0052 33.4265 10.1534C33.4243 10.4498 33.4254 10.8275 33.4283 11.1991C33.4341 11.9394 33.4464 12.6511 33.4465 12.6564C33.4354 12.7558 33.4079 12.8183 33.3766 12.8569C33.3454 12.8955 33.3098 12.9121 33.2733 12.9194C33.2002 12.9341 33.1282 12.9049 33.1282 12.9049L33.1209 12.9012H33.1127C32.5933 12.9012 32.3545 13.0825 32.2548 13.2694C32.1556 13.4554 32.1928 13.6395 32.1931 13.6413C32.2186 13.9784 32.4311 14.1338 32.6312 14.1944C32.8319 14.2553 33.0248 14.2307 33.0248 14.2307L33.0202 14.2316C33.2447 14.2316 33.3465 14.2967 33.3966 14.3568C33.4466 14.4168 33.4464 14.4719 33.4464 14.4719V14.481L33.4501 14.4892C33.4485 14.4859 33.4555 14.5128 33.4573 14.5481C33.4591 14.5834 33.4593 14.6303 33.4582 14.6841C33.4561 14.7919 33.4488 14.9282 33.4401 15.0614C33.4227 15.3278 33.4002 15.5829 33.4002 15.5829L33.3993 15.5875L33.4002 15.593C33.4487 15.8599 33.604 15.9695 33.743 16.0011C33.8717 16.0303 33.9778 16.0013 33.9942 15.9964H33.996L37.7025 16.0898C38.2316 16.4753 38.5724 16.4864 38.7771 16.381C38.9745 16.2793 39.038 16.0864 39.0438 16.0681L39.0447 16.0672C39.0614 16.0352 39.0968 16.02 39.1145 16.02C39.1234 16.02 39.1227 16.0218 39.1208 16.0191C39.119 16.0163 39.1226 16.0182 39.1145 16.0345L39.0918 16.0808L39.1426 16.0889C39.184 16.0959 39.2651 16.0994 39.3838 16.1026C39.5026 16.1058 39.6565 16.1078 39.8337 16.1089C40.188 16.1113 40.6349 16.1098 41.0761 16.1071C41.5173 16.1044 41.9523 16.0999 42.2832 16.0963C42.6141 16.0926 42.8436 16.0899 42.8636 16.0899C43.0268 16.1237 43.1514 16.1152 43.2454 16.0799C43.341 16.0441 43.4038 15.9802 43.4422 15.9131C43.5189 15.7787 43.5048 15.6292 43.5048 15.6292L43.5057 15.6346L43.5519 14.5264C43.5708 14.4537 43.6488 14.4004 43.7306 14.3677C43.8104 14.3358 43.8832 14.3266 43.8875 14.326C44.4029 14.3942 44.6556 14.2114 44.7663 14.0086C44.877 13.8056 44.8517 13.5896 44.8515 13.5878V13.586C44.827 13.2481 44.6276 13.0814 44.4389 13.0083C44.2499 12.9352 44.068 12.9484 44.068 12.9484L44.0716 12.9476C43.8014 12.9476 43.6907 12.861 43.6399 12.7798C43.5891 12.6985 43.5991 12.6193 43.5991 12.6193V12.6147C43.5991 12.3403 43.6453 9.82953 43.6453 9.82953V9.82863C43.6453 9.77167 43.6776 9.67988 43.7115 9.60645C43.7412 9.54217 43.7645 9.50486 43.7714 9.49308C44.0574 9.52219 44.2758 9.5051 44.4289 9.45046C44.5887 9.39338 44.6871 9.30018 44.7436 9.20287C44.8553 9.01046 44.8055 8.8076 44.8043 8.80293C44.8255 8.62852 44.7984 8.49658 44.7372 8.40481C44.6746 8.31093 44.5816 8.25855 44.4887 8.23069C44.308 8.17647 44.1277 8.20981 44.1178 8.21164C43.8 8.21164 43.692 8.12356 43.6535 8.04659C43.615 7.96962 43.6435 7.89151 43.6435 7.89151L43.6453 7.88407C43.7156 7.43902 43.6924 7.13206 43.6507 6.93546C43.609 6.73887 43.5455 6.64887 43.5455 6.64887L43.541 6.64345L43.5355 6.6388C43.4881 6.60718 43.4197 6.59516 43.3369 6.5862C43.2541 6.57723 43.1584 6.5744 43.0676 6.5744C42.886 6.5744 42.7221 6.5862 42.7221 6.5862L42.7112 6.5871L42.7021 6.59347C42.6689 6.6184 42.6338 6.61561 42.5842 6.59069C42.5346 6.56589 42.4779 6.51802 42.4273 6.46463C42.3262 6.35785 42.2469 6.23246 42.2469 6.23246L42.2378 6.21885L41.9713 6.16554Z",
                            fill: "currentcolor"
                        }), (0, s.jsx)("path", {
                            d: "M32.091 35.3665L31.9982 35.32C31.9053 35.2736 19.229 29.7946 18.2539 13.125V2.67751H45.742V13.0785C45.742 17.1647 44.4419 27.5655 32.1835 35.2736L32.091 35.3665ZM18.5789 3.00165V13.0776C19.5076 28.8648 31.0231 34.5297 32.091 34.9941C44.1173 27.3327 45.4174 17.1174 45.4174 13.0776V3.00165H18.5789Z",
                            fill: a || "#001F09"
                        }), (0, s.jsx)("path", {
                            d: "M22.3393 6.57989C22.3393 6.57989 22.0607 6.58007 22.1072 6.7658L22.0147 13.8233C22.0147 13.8233 22.0145 14.1487 22.5252 14.1952C22.5252 14.1952 23.1749 14.2416 23.3142 14.1952H24.8006C24.8006 14.1952 25.0791 14.4731 25.0791 14.148C25.0791 14.148 25.2644 8.43751 25.1716 7.23023C25.1716 7.23023 25.1714 6.71873 24.7535 6.71873C24.7535 6.71873 23.0826 6.85803 22.9433 6.71873L22.3393 6.57989ZM28.7847 6.59075C28.7235 6.58532 28.6249 6.60273 28.4682 6.67237C28.4682 6.67237 28.5153 6.85864 26.4259 6.76578C26.3794 6.76578 25.5899 6.76533 25.5435 7.09046C25.5435 7.09046 25.4972 10.4337 25.4972 10.5266L25.45 13.3126L25.4038 14.2875C25.4038 14.2875 25.5431 14.4731 25.636 14.3338C25.636 14.3338 26.3325 14.1484 26.7968 14.2413C26.7968 14.2413 28.1903 14.38 28.5154 14.1479C28.5154 14.1479 28.7473 14.2407 28.7938 13.9157C28.7938 13.9157 28.8865 7.74019 28.84 7.64732C28.84 7.64732 28.9327 6.76528 28.8863 6.67241C28.8863 6.67241 28.8867 6.59982 28.7847 6.59075ZM21.1296 6.76397C21.0384 6.76675 20.9058 6.82382 20.7142 6.99793L20.668 7.92659C20.668 7.92659 20.668 8.43734 20.2036 8.39093C20.2036 8.39093 19.6923 8.39093 19.4137 8.6231C19.4137 8.6231 19.2748 9.0867 19.7856 9.04027C19.7856 9.04027 20.5753 9.04072 20.6217 9.36585L20.5746 12.7087C20.5746 12.7087 20.761 13.2664 20.1574 13.2664C20.1574 13.2664 19.4137 13.2192 19.4137 13.6836C19.4137 13.6836 19.5536 14.0558 20.2036 13.9629C20.2036 13.9629 20.6681 14.0556 20.6217 14.4735V15.3087C20.6217 15.3087 20.5746 15.6341 21.0389 15.6806H24.475C24.475 15.6806 24.6609 15.6804 24.6609 15.4946C24.6609 15.4946 24.6611 15.3087 24.3825 15.3087L21.5502 15.2162C21.5502 15.2162 21.0852 15.3559 21.0387 14.6594C21.0387 14.6594 21.0837 8.697 21.085 8.43455C21.085 8.43465 21.0859 8.43733 21.0859 8.43733C21.0859 8.43733 21.0851 8.41541 21.085 8.41286C21.085 8.41052 21.0859 8.34494 21.0859 8.34393C21.085 8.34214 21.0849 8.34214 21.0841 8.34021C21.0792 8.11201 21.0783 7.30424 21.3181 6.90459C21.3181 6.90459 21.2815 6.75943 21.1296 6.76397ZM29.922 6.78119C29.7228 6.79842 29.7225 7.04419 29.7225 7.04419C29.8153 7.13705 29.8612 7.46227 29.8612 7.46227C29.9077 8.2052 29.8612 9.04081 29.8612 9.83019C29.8148 12.4769 29.7225 14.8915 29.7225 14.8915C29.7225 15.4023 29.4441 15.2624 29.4441 15.2624H26.3787C26.0537 15.2624 26.0541 15.4483 26.0541 15.4483C26.1005 15.7269 26.3787 15.6342 26.3787 15.6342C26.6573 15.6807 29.7224 15.6342 29.7224 15.6342C30.1868 15.6807 30.1405 15.0765 30.1405 15.0765C30.187 14.0085 30.2793 13.9157 30.2793 13.9157C30.3721 13.8692 30.8833 13.8694 30.8833 13.8694C31.7191 13.9159 31.3476 13.3588 31.3476 13.3588C31.2548 13.2195 30.6974 13.2192 30.6974 13.2192C30.1866 13.2656 30.233 12.7086 30.233 12.7086L30.2793 9.50466C30.1864 9.22606 30.419 9.08749 30.419 9.08749H30.9295C31.626 9.13393 31.4401 8.66941 31.4401 8.66941C31.4401 8.43724 30.837 8.34383 30.837 8.34383C30.2798 8.4367 30.3255 8.11166 30.3255 8.11166V7.32268C30.4184 6.81191 30.0934 6.81211 30.0934 6.81211C30.0237 6.78601 29.968 6.7772 29.922 6.78119ZM29.2663 6.88458C29.2071 6.89252 29.1419 6.93972 29.0722 7.0442V14.0091C29.0722 14.0091 29.258 14.6124 29.5366 14.5659C29.5366 14.5659 29.5828 14.4272 29.5828 14.195L29.6762 7.5547C29.6762 7.5547 29.523 6.8501 29.2663 6.88458ZM21.7826 6.95079C21.3647 6.95079 21.3182 7.74068 21.3182 7.74068L21.2711 14.3339C21.3175 14.6589 21.4107 14.6123 21.4107 14.6123C21.8286 14.3337 21.7826 13.8696 21.7826 13.8696C21.7826 13.8696 21.8288 7.6014 21.8288 7.50853C21.8288 7.41567 21.7826 6.95079 21.7826 6.95079ZM21.9757 14.3773C21.9559 14.3782 21.9337 14.3815 21.9104 14.3882C21.8176 14.4147 21.7031 14.4946 21.6066 14.6875L21.6048 14.6912L21.6039 14.6949C21.6039 14.6949 21.5763 14.7814 21.5975 14.8663C21.6081 14.9087 21.6353 14.9537 21.6846 14.9769C21.7322 14.9994 21.7954 15.0002 21.8778 14.9778H24.145L24.7535 15.1184L24.7617 15.1166C24.7617 15.1166 24.8052 15.1066 24.8587 15.0867C24.9122 15.0668 24.9775 15.0377 25.0256 14.9896C25.0496 14.9656 25.0697 14.936 25.0782 14.9008C25.0867 14.8655 25.0821 14.825 25.0637 14.7856C25.0268 14.7067 24.9394 14.6265 24.7735 14.5317L24.7644 14.5262H22.5761C22.5727 14.5253 22.4738 14.5038 22.3602 14.4754C22.2447 14.4466 22.1127 14.4084 22.0782 14.3911L22.0764 14.3902H22.0754C22.0754 14.3902 22.0352 14.3741 21.9757 14.3773ZM28.8745 14.4998C28.7439 14.4932 28.5616 14.5197 28.5616 14.5197C28.1901 14.7519 26.0077 14.566 26.0077 14.566C25.8684 14.566 25.6821 14.7981 25.6821 14.7981C25.6357 15.2161 26.3325 15.0303 26.2861 15.0303H28.8862C29.3041 15.1232 29.3043 14.9378 29.3043 14.9378C29.3043 14.7985 28.9796 14.5197 28.9796 14.5197C28.9564 14.5081 28.918 14.5019 28.8745 14.4998ZM25.4392 15.0203C25.4273 15.0212 25.4155 15.0245 25.4039 15.0303C25.4039 15.0303 24.9858 15.0307 24.9858 15.588C24.9858 15.588 25.0322 16.0052 25.4501 16.0052C25.4501 16.0052 25.8219 15.9125 25.8219 15.4946C25.8219 15.4946 25.6178 15.005 25.4392 15.0203ZM35.4331 6.57985C35.4331 6.57985 35.1545 6.58003 35.2009 6.76576L35.1084 13.8233C35.1084 13.8233 35.1082 14.1487 35.619 14.1951C35.619 14.1951 36.2696 14.2416 36.4089 14.1951H37.8944C37.8944 14.1951 38.1728 14.4732 38.1728 14.1017C38.1728 14.1017 38.3591 8.39033 38.2662 7.18304C38.2662 7.18304 38.266 6.67247 37.8481 6.67247C37.8481 6.67247 36.1764 6.81177 36.0371 6.67247L35.4331 6.57985ZM41.8603 6.63699C41.8054 6.6393 41.7252 6.66058 41.6091 6.71861C41.6091 6.71861 41.6553 6.90488 39.5659 6.81202C39.5194 6.81202 38.6834 6.76522 38.6834 7.1367C38.6834 7.1367 38.6372 10.48 38.6372 10.5728L38.5909 13.3589L38.4984 14.3338C38.4984 14.3338 38.6377 14.5193 38.7306 14.38C38.7306 14.38 39.4271 14.1947 39.8914 14.2875C39.8914 14.2875 41.2841 14.4272 41.6091 14.195C41.6091 14.195 41.8411 14.2879 41.8875 13.9629C41.8875 13.9629 41.9802 7.78734 41.9338 7.69447C41.9338 7.69447 42.0274 6.81153 41.9809 6.71866C41.9809 6.71866 41.981 6.6315 41.8603 6.63699ZM34.1771 6.76395C34.086 6.76673 33.9533 6.82381 33.7618 6.99792V7.87943C33.7618 7.87943 33.7618 8.3902 33.2974 8.34377C33.2974 8.34377 32.7871 8.34377 32.5084 8.57594C32.5084 8.57594 32.3686 9.04046 32.8794 8.99402C32.8794 8.99402 33.6691 8.99447 33.7155 9.3196L33.6693 12.6624C33.6693 12.6624 33.855 13.2192 33.2049 13.2192C33.2049 13.2192 32.4622 13.173 32.4622 13.6373C32.4622 13.6373 32.6011 14.0086 33.2512 13.9157C33.2512 13.9157 33.7155 14.0093 33.7155 14.4272V15.2625C33.7155 15.2625 33.6694 15.5879 34.0873 15.6343H37.5226C37.5226 15.6343 37.7085 15.6341 37.7085 15.4484C37.7085 15.4484 37.7087 15.2625 37.4301 15.2625L34.644 15.2163C34.644 15.2163 34.1799 15.3559 34.1334 14.6594C34.1334 14.6594 34.1799 8.43658 34.1334 8.34371V8.43712C34.1334 8.43712 34.087 7.3688 34.3656 6.90448C34.3656 6.90448 34.329 6.75942 34.1771 6.76395ZM43.0158 6.78118C42.8165 6.79841 42.8163 7.04417 42.8163 7.04417C42.8627 7.13704 42.9559 7.46226 42.9559 7.46226C43.0023 8.20518 42.9559 9.04079 42.9559 9.83017C42.9095 12.4769 42.8163 14.8915 42.8163 14.8915C42.8163 15.4022 42.5378 15.2624 42.5378 15.2624H39.4734C39.1484 15.2624 39.1478 15.4483 39.1478 15.4483C39.1943 15.7269 39.5197 15.6344 39.5197 15.588C39.7983 15.6344 42.8625 15.588 42.8625 15.588C43.3268 15.6344 43.2805 15.0302 43.2805 15.0302C43.327 13.9623 43.4202 13.8694 43.4202 13.8694C43.5131 13.823 44.0233 13.8232 44.0233 13.8232C44.8127 13.8696 44.4414 13.3126 44.4414 13.3126C44.3485 13.1733 43.7911 13.1729 43.7911 13.1729C43.2804 13.2194 43.3268 12.6623 43.3268 12.6623L43.374 9.45839C43.2811 9.17979 43.5127 9.04031 43.5127 9.04031H44.0233C44.7198 9.08674 44.5348 8.62314 44.5348 8.62314C44.5348 8.39097 43.9308 8.29756 43.9308 8.29756C43.3736 8.39043 43.4202 8.06539 43.4202 8.06539V7.32267C43.5131 6.8119 43.188 6.8121 43.188 6.8121C43.1184 6.786 43.0618 6.77719 43.0158 6.78118ZM42.3601 6.9018C42.3008 6.90667 42.2357 6.94841 42.166 7.04418V14.0091C42.166 14.0091 42.3517 14.6123 42.6304 14.5659C42.6304 14.5659 42.6775 14.4271 42.6775 14.195L42.77 7.55469C42.77 7.55469 42.6168 6.88074 42.3601 6.9018ZM34.8763 6.95077C34.4584 6.95077 34.412 7.74067 34.412 7.74067L34.3657 14.3339C34.4122 14.6589 34.5045 14.6123 34.5045 14.6123C34.9224 14.3337 34.8763 13.8695 34.8763 13.8695C34.8763 13.8695 34.9226 7.60139 34.9226 7.50852C34.9226 7.41565 34.8763 6.95077 34.8763 6.95077ZM35.1421 14.3701C35.061 14.3678 34.9115 14.404 34.7839 14.6594C34.7839 14.6594 34.691 14.9845 35.016 14.8916H37.2906L37.8946 15.0304C37.8946 15.0304 38.5447 14.8912 37.8946 14.5198H35.7126C35.7126 14.5198 35.294 14.4266 35.2012 14.3801C35.2012 14.3801 35.1789 14.3713 35.1421 14.3701ZM41.9937 14.4527C41.8758 14.455 41.7488 14.4735 41.7488 14.4735C41.3773 14.7057 39.1949 14.5198 39.1949 14.5198C39.0556 14.5198 38.8694 14.7519 38.8694 14.7519C38.7765 15.1698 39.4734 14.9841 39.4734 14.9841H42.0735C42.4914 15.077 42.4915 14.8916 42.4915 14.8916C42.4915 14.7523 42.166 14.4735 42.166 14.4735C42.1311 14.4561 42.0644 14.4513 41.9937 14.4527ZM38.5802 14.9741C38.568 14.975 38.5565 14.9783 38.5448 14.9841C38.5448 14.9841 38.1266 14.9837 38.173 15.5409C38.173 15.5409 38.2194 15.959 38.6374 15.959C38.6374 15.959 39.0092 15.9128 39.0092 15.4485C39.0092 15.4485 38.7639 14.9588 38.5802 14.9741ZM31.6727 23.9922C31.6727 23.9922 31.6727 24.503 31.6263 25.0138C31.5799 25.2924 31.7192 26.5925 31.6263 27.2425C31.6263 27.2425 31.6263 27.4747 31.162 27.289C31.162 27.289 28.3295 27.3354 28.2831 27.2425C28.2831 27.2425 27.4937 27.289 27.4473 26.8711C27.4473 26.8711 27.5401 23.8529 27.4937 23.76C27.4937 23.76 27.4473 22.1348 27.4937 21.9491C27.4937 21.9491 27.5401 20.4168 27.4937 20.2311C27.4937 20.2311 27.4937 19.8596 27.4473 19.7203C27.4473 19.7203 27.4473 19.4882 27.8187 19.6275C27.8187 19.6275 27.958 19.8596 28.6545 19.7668C28.6545 19.7668 29.1653 19.8596 29.6761 19.7668C29.6761 19.7668 30.7905 19.6739 31.069 19.7668C31.069 19.7668 31.5334 19.6739 31.6262 20.1847V21.5312L31.7655 21.9956L31.9048 21.9027L31.9513 21.5777V20.1382C31.9513 20.1382 32.0441 19.8596 32.4156 19.8132C32.4156 19.8132 32.9728 19.7668 33.0656 19.8132C33.1585 19.8596 34.3658 19.9061 34.6908 19.8596C35.0158 19.8132 35.0623 20.0918 36.0838 19.581C36.0838 19.581 36.3624 19.581 36.3624 19.7668C36.3624 19.7668 36.2695 21.6241 36.3624 21.9956C36.3624 21.9956 36.3624 25.4317 36.2695 25.6639L36.316 26.7782C36.316 26.7782 36.3624 27.2426 35.573 27.289C35.573 27.289 36.0374 27.3354 33.0192 27.2426C33.0192 27.2426 32.5548 27.1961 31.9976 27.4747C31.9976 27.4747 31.9048 27.4283 31.9048 27.1497C31.9048 27.1497 31.9976 26.1282 31.9048 25.1066L31.8583 23.9922L31.6727 23.9922ZM36.5481 27.0104C36.5481 27.0104 36.8267 27.5212 36.9196 27.5676C36.9196 27.5676 37.1517 27.8462 37.1053 27.3355L37.1517 20.9742C37.1517 20.9742 37.1053 20.742 37.1517 20.417L36.8731 19.9527C36.8731 19.9527 36.5945 19.7205 36.5945 20.092V26.8247L36.5481 27.0104ZM27.3079 27.289C27.3079 27.289 27.633 27.6141 28.1437 27.6141L31.1155 27.6605C31.1155 27.6605 31.4406 27.707 31.4406 27.8463C31.4406 27.8463 31.3941 28.1249 30.9762 28.032L27.3544 27.9856L26.9364 28.032C26.9364 28.032 26.6578 27.9856 27.0757 27.4748L27.3079 27.289ZM26.6579 19.9991C26.6579 19.9991 26.3793 20.4635 26.4257 20.6027V27.9391C26.4257 27.9391 26.3793 28.4499 26.7972 28.3106C26.7972 28.3106 30.6512 28.2177 30.9298 28.3106C30.9298 28.3106 31.3013 28.357 31.162 28.5428C31.162 28.5428 31.162 28.682 30.9298 28.6356C30.9298 28.6356 29.1189 28.8213 27.4473 28.7285C27.4473 28.7285 26.3329 28.7749 26.2864 28.682C26.2864 28.682 26.1007 28.6356 26.1007 28.032C26.1007 28.032 26.1007 27.4284 26.0543 27.3355C26.0543 27.3355 26.1007 27.0105 25.5435 26.964C25.5435 26.964 24.7542 27.1033 24.7542 26.639C24.7542 26.639 24.847 26.314 25.6364 26.3604C25.6364 26.3604 26.1936 26.4533 26.0543 25.9889L26.1007 22.7385C26.1007 22.7385 26.1936 22.1813 25.7757 22.1349H25.3113C25.3113 22.1349 24.6613 22.1349 24.7077 21.7634C24.7077 21.7634 24.9399 21.392 25.59 21.4384C25.59 21.4384 26.0543 21.5313 26.1007 20.9741C26.1007 20.9741 26.1007 19.8597 26.3329 19.8132C26.2864 19.8132 26.8436 19.8598 26.6579 19.9991ZM27.0294 19.9525C27.0294 19.9525 27.1687 19.9525 27.1687 20.2311L27.1222 26.871C27.1222 26.871 27.1687 27.2889 26.7972 27.6139C26.7972 27.6139 26.6115 27.8461 26.6115 27.4746L26.7043 20.6954C26.7043 20.6954 26.7043 20.1847 27.0294 19.9525ZM32.2298 27.7532C32.2298 27.7532 32.6013 27.4746 32.787 27.5211C32.787 27.5211 34.7836 27.6604 35.3873 27.5675C35.9909 27.4746 35.6194 27.5211 35.6194 27.5211C35.6194 27.5211 36.1302 27.5211 36.3159 27.3353C36.3159 27.3353 36.4552 27.2889 36.5481 27.4282L36.8731 27.7997C36.8731 27.7997 36.8731 28.0318 36.5017 27.9854C36.5017 27.9854 32.9262 27.9854 32.7869 28.0318C32.8334 28.0318 32.1833 28.1247 32.2298 27.7532ZM32.4619 28.3569C32.4619 28.3569 32.7405 28.2176 32.9263 28.264C33.112 28.3104 35.6659 28.2176 35.6659 28.2176C35.6659 28.2176 36.7803 28.3104 36.966 28.1247L37.2446 28.0318C37.2446 28.0318 37.3375 27.8925 37.3375 27.7068V26.9174L37.3839 26.6853V20.6026C37.3839 20.6026 37.4768 20.1383 37.1982 19.8597C37.1982 19.8597 37.1982 19.674 37.291 19.7204C37.3839 19.7668 37.3375 19.7204 37.3375 19.7204C37.3375 19.7204 37.709 19.6275 37.8018 19.7668C37.8018 19.7668 37.9876 20.2776 37.8018 20.6026C37.8018 20.6026 37.7554 21.2527 38.0804 21.2527C38.0804 21.2527 38.2197 21.392 38.4519 21.2991C38.4519 21.2991 39.0091 21.3455 39.0091 21.5313C39.0091 21.5313 39.0091 21.9492 38.6376 21.8563L38.1268 21.9027C38.1268 21.9027 37.7554 21.9956 37.8018 22.3671C37.8482 22.785 37.8018 25.8032 37.8018 25.8032C37.8018 25.8032 37.8018 26.1747 38.359 26.1282C38.359 26.1282 39.0555 26.0818 39.0555 26.314C39.0555 26.314 39.2412 26.7319 38.7304 26.7783C38.7304 26.7783 37.8018 26.7319 37.8946 27.0105C37.8946 27.0105 37.8482 27.6141 37.8018 27.7534C37.8018 27.7534 37.8946 28.2642 37.8018 28.357C37.8018 28.357 37.7554 28.6356 37.1517 28.5892C37.1517 28.5892 33.3906 28.5892 32.7869 28.6356C32.7405 28.7285 32.3691 28.6819 32.4619 28.3569ZM31.8118 27.9391C31.8118 27.9391 32.1833 27.9856 32.1833 28.357C32.1833 28.7285 32.1833 28.9142 31.9976 28.9607C31.7654 29.0071 31.5332 28.9142 31.4868 28.6356C31.3939 28.357 31.4868 28.032 31.8118 27.9391Z",
                            fill: a || "#001F09"
                        }), (0, s.jsx)("path", {
                            d: "M24.8938 9.13139L24.708 9.5493C24.708 9.5493 24.2437 11.6852 23.9651 12.1032C23.9651 12.1032 23.9187 12.5675 23.5472 12.196C23.5472 12.196 22.665 9.50286 22.6185 9.40999L22.3399 9.22426C22.3399 9.22426 22.1542 8.99209 22.4792 8.94566H23.315C23.315 8.94566 23.5936 9.17783 23.2222 9.41C23.2222 9.41 23.2686 9.78147 23.7329 11.128C23.7329 11.128 23.8722 11.6388 24.0115 11.2673L24.4759 9.6886L24.3366 9.22426C24.3366 9.22426 24.1973 8.99209 24.383 8.99209C24.383 8.99209 24.8474 8.94566 24.8938 9.13139ZM26.1474 9.50286V11.8246L26.101 12.0103C26.101 12.0103 25.8688 12.2889 26.0546 12.3353C26.0546 12.3353 25.8688 12.4746 27.4476 12.4746C27.4476 12.4746 28.0512 12.5675 27.9119 11.7781C27.9119 11.7781 27.8655 11.4995 27.6333 11.9174C27.6333 11.9174 27.5869 12.2889 26.7511 12.1496C26.7511 12.1496 26.5653 12.0103 26.5653 11.8246V10.8495C26.5653 10.8495 26.5653 10.6173 26.9368 10.6173C26.9368 10.6173 27.3547 10.8959 27.4012 10.7566C27.4012 10.7566 27.5405 10.3851 27.4012 10.1994C27.4012 10.1994 27.2154 10.1994 27.169 10.2459C27.169 10.2459 27.0297 10.5245 26.6582 10.3387C26.6582 10.3387 26.4725 9.96726 26.6118 9.68867C26.6118 9.68867 26.5654 9.13149 26.9368 9.1779C26.9368 9.1779 27.4012 9.27076 27.4012 9.41007C27.4012 9.41007 27.494 9.68867 27.6333 9.36363L27.5405 9.0386C27.5405 9.0386 27.494 8.8993 27.3547 8.94573C27.3547 8.94573 26.6118 9.0386 26.519 8.94573L25.9153 8.99216C25.9153 8.99216 25.8225 9.22433 26.1011 9.3172C26.1011 9.36364 26.1474 9.41 26.1474 9.50286ZM39.4739 9.13146C39.4274 8.94573 39.8453 8.94573 39.8453 8.94573L40.0775 8.99216C40.2168 8.99216 40.4025 9.0386 40.4025 9.0386C40.5418 9.27077 40.3097 9.41007 40.3097 9.41007L40.2168 9.68867V12.0104C40.2632 12.1032 40.449 12.3354 40.449 12.3354C40.449 12.5211 40.2168 12.4747 40.2168 12.4747H39.5668C39.381 12.4747 39.4275 12.2425 39.4275 12.2425C39.6596 12.1497 39.7061 11.7318 39.7061 11.7318V9.54941L39.4739 9.13146ZM36.5021 11.1745L36.4557 11.871L36.6414 12.196C36.7807 12.3818 36.5485 12.5211 36.5485 12.5211L35.852 12.4282C35.7127 12.3818 35.852 12.1496 35.852 12.1496C36.0378 12.0567 36.0378 11.7781 36.0378 11.7781V9.54935C36.0378 9.45648 35.852 9.22431 35.852 9.22431C35.7127 9.22431 35.7592 8.99214 35.7592 8.99214C35.8056 8.89927 36.1771 8.9457 36.1771 8.9457H37.1057C37.988 9.22431 37.8487 9.87436 37.8487 9.87436C37.8951 10.5244 37.245 10.7566 37.245 10.7566L37.1986 11.1281L37.8487 12.1496C37.9415 12.2425 37.9415 12.3353 37.9415 12.3353C37.8487 12.5675 37.4772 12.3353 37.4772 12.3353L36.6878 11.0816C36.595 10.9888 36.5021 11.1745 36.5021 11.1745ZM36.5021 9.41004V10.5709C36.92 10.8959 37.1521 10.4316 37.1521 10.4316C37.7093 9.92081 37.1521 9.41004 37.0593 9.27074C36.9664 9.13144 36.5485 9.27074 36.5485 9.27074L36.5021 9.41004ZM29.7229 22.4114C29.7229 22.4114 29.7694 24.0365 29.7229 24.2687V24.6402C29.7229 24.6402 29.8158 24.8723 29.9551 24.9652C29.9551 24.9652 30.048 25.2902 29.8158 25.2438C29.8158 25.2438 29.2586 25.1974 29.1193 25.2438C29.1193 25.2438 28.7943 25.2438 29.1193 24.8723C29.1193 24.8723 29.2122 24.733 29.2122 24.3151C29.2122 24.3151 29.2122 22.4578 29.2586 22.365C29.2586 22.365 29.305 22.1328 29.1657 22.0399H28.8871L28.5621 22.365C28.5621 22.365 28.4692 22.69 28.3299 22.365V22.1792L28.5157 21.6684H28.655C28.655 21.6684 28.8407 21.8077 29.0264 21.8542H30.048L30.4194 21.6684C30.4194 21.6684 30.5587 21.6684 30.5123 21.9006C30.5123 21.9006 30.5587 22.4114 30.2801 22.4578C30.2801 22.4578 30.0944 22.4114 30.0015 22.1328C30.0015 22.0863 29.7229 21.9006 29.7229 22.4114ZM34.5518 21.8077C34.5518 21.8077 33.7161 21.7149 33.7161 22.6435C33.7161 22.6435 33.6232 23.2472 34.5518 23.6651C34.5518 23.6651 35.2483 23.9901 35.2019 24.408C35.2019 24.408 35.109 25.1509 34.3661 24.7795C34.3661 24.7795 33.9946 24.5937 34.0411 24.408C34.0411 24.408 33.9482 24.1758 33.8089 24.2223C33.8089 24.2223 33.6696 24.2687 33.716 25.0116C33.716 25.0116 33.716 25.2902 34.0411 25.0116L34.2268 25.0581C34.2268 25.0581 34.8304 25.5224 35.3412 24.9652C35.3412 24.9652 35.8984 24.4544 35.4805 23.8508C35.4805 23.8508 35.2019 23.3864 34.6911 23.2007C34.6911 23.2007 34.2268 22.9686 34.0875 22.5971C34.0875 22.5971 34.2268 21.9471 34.8304 22.2721C34.8304 22.2721 35.0626 22.5507 35.2019 22.5971C35.2019 22.5971 35.3876 22.5971 35.3412 22.1792L35.2948 21.8542C35.2948 21.8542 35.2483 21.622 34.9233 21.8542C34.9233 21.8077 34.6447 21.947 34.5518 21.8077ZM31.9051 21.3434C32.0444 21.4363 32.0908 21.6684 32.0908 21.6684C32.5552 22.8293 32.9266 24.5473 32.9266 24.5473C33.0195 24.7795 33.2517 24.9188 33.2517 24.9188C33.6231 25.0581 33.2517 25.151 33.2517 25.151C33.1124 25.1974 32.6016 25.151 32.6016 25.151C32.323 25.1046 32.4623 25.0117 32.4623 25.0117C32.5552 24.9188 32.4623 24.4545 32.4623 24.4545C32.4623 24.2688 32.2301 23.9902 32.2301 23.9902C32.1373 23.9437 31.998 24.1295 31.998 24.1295C31.998 24.1295 31.7658 24.2223 31.7194 24.1295C31.6729 24.0366 31.5336 23.9437 31.5336 23.9437C31.255 23.9437 31.1621 24.5938 31.1621 24.5938C31.3014 25.151 31.1621 25.0581 31.1621 25.0581C31.0229 25.2439 30.605 25.1046 30.605 25.1046C30.4192 25.0581 30.5585 24.9188 30.5585 24.9188C30.7907 24.8724 30.8836 24.5938 30.8836 24.5938C30.9764 24.4545 31.7194 21.5756 31.7194 21.5756C31.6729 21.5291 31.7194 21.2505 31.9051 21.3434ZM31.5336 22.8292C31.5336 22.9221 31.3479 23.5722 31.3479 23.5722L31.4872 23.8043H31.9515C32.0444 23.8043 32.0908 23.7115 32.0908 23.5722C32.0908 23.4793 31.8587 22.7828 31.8587 22.7828L31.7658 22.6435L31.5336 22.8292Z",
                            fill: "currentcolor"
                        })]
                    })
                },
                x = e => {
                    let a = (0, d.useId)();
                    return (0, s.jsx)(g.I, {
                        width: "142px",
                        height: "32px",
                        viewBox: "0 0 142 32",
                        fill: "none",
                        maxW: "100%",
                        xmlns: "http://www.w3.org/2000/svg",
                        color: "white",
                        ...e,
                        children: (0, s.jsxs)("svg", {
                            width: "142",
                            height: "31",
                            viewBox: "0 0 142 31",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, s.jsxs)("g", {
                                clipPath: a,
                                children: [(0, s.jsx)("path", {
                                    d: "M59.5297 6.46774V24.5337H56.3932V10.3569H56.3514L50.7476 24.5337H48.6566L42.9274 10.3569H42.8855V24.5337H40V6.46774H44.5165L49.7021 19.85H49.7857L55.2641 6.46774H59.5297ZM62.1225 7.84778C62.1225 7.34595 62.2898 6.92775 62.6661 6.5932C63.0425 6.25864 63.4607 6.09137 63.9625 6.09137C64.5062 6.09137 64.9662 6.25864 65.3008 6.5932C65.6353 6.92775 65.8444 7.34595 65.8444 7.84778C65.8444 8.34962 65.6771 8.76781 65.3008 9.10237C64.9244 9.43692 64.5062 9.6042 63.9625 9.6042C63.4189 9.6042 63.0007 9.43692 62.6661 9.10237C62.3316 8.72599 62.1225 8.3078 62.1225 7.84778ZM65.5099 11.5697V24.5337H62.457V11.5697H65.5099ZM74.752 22.3173C75.212 22.3173 75.7138 22.2337 76.2575 21.9828C76.8011 21.7737 77.3029 21.4809 77.763 21.1464V23.9901C77.2611 24.2828 76.7175 24.4919 76.0902 24.6174C75.4629 24.7428 74.7938 24.8265 74.041 24.8265C72.1173 24.8265 70.57 24.241 69.3991 23.0282C68.1863 21.8155 67.6008 20.2682 67.6008 18.4281C67.6008 16.3371 68.2281 14.6225 69.4409 13.2843C70.6537 11.9461 72.3682 11.277 74.6265 11.277C75.212 11.277 75.7974 11.3606 76.3411 11.4861C76.9266 11.6115 77.3866 11.8206 77.7211 11.9879V14.9153C77.2611 14.5807 76.7593 14.288 76.2993 14.1207C75.7974 13.9534 75.2956 13.828 74.7938 13.828C73.581 13.828 72.6192 14.2043 71.8664 14.9989C71.1137 15.7935 70.7791 16.839 70.7791 18.1772C70.7791 19.4736 71.1555 20.5191 71.8664 21.23C72.5773 21.9409 73.5392 22.3173 74.752 22.3173ZM86.4196 11.3606C86.6705 11.3606 86.8796 11.3606 87.0887 11.4024C87.2978 11.4443 87.4651 11.4861 87.5905 11.5279V14.6225C87.4232 14.4971 87.2142 14.3716 86.8796 14.288C86.545 14.2043 86.2105 14.1207 85.7505 14.1207C84.9977 14.1207 84.3704 14.4553 83.8686 15.0825C83.3668 15.7098 83.074 16.6717 83.074 18.0099V24.5337H80.0212V11.5697H83.074V13.6189H83.1158C83.4086 12.9079 83.8268 12.3643 84.3704 11.9461C84.9559 11.5697 85.625 11.3606 86.4196 11.3606ZM87.7578 18.2608C87.7578 16.128 88.3851 14.4134 89.556 13.1589C90.7688 11.9043 92.4416 11.277 94.5744 11.277C96.5817 11.277 98.1708 11.8624 99.3 13.0752C100.429 14.288 101.015 15.9189 101.015 17.9681C101.015 20.0591 100.387 21.7318 99.2163 22.9864C98.0036 24.241 96.3726 24.8683 94.2816 24.8683C92.2743 24.8683 90.6852 24.2828 89.5142 23.1119C88.3433 21.8991 87.7578 20.2682 87.7578 18.2608ZM90.9361 18.1354C90.9361 19.4736 91.2288 20.5191 91.8561 21.23C92.4834 21.9409 93.3616 22.3173 94.4907 22.3173C95.578 22.3173 96.4562 21.9828 97.0417 21.23C97.6272 20.5191 97.9199 19.4736 97.9199 18.0517C97.9199 16.6717 97.6272 15.6262 97.0417 14.8734C96.4562 14.1625 95.578 13.7861 94.5326 13.7861C93.4034 13.7861 92.567 14.1625 91.9397 14.9153C91.2288 15.7098 90.9361 16.7553 90.9361 18.1354ZM105.573 14.9989C105.573 15.4171 105.698 15.7935 105.991 16.0444C106.284 16.2953 106.869 16.588 107.831 16.9644C109.044 17.4663 109.922 18.0099 110.382 18.5954C110.884 19.2227 111.135 19.9336 111.135 20.8118C111.135 22.0246 110.675 22.9864 109.713 23.7392C108.793 24.4919 107.497 24.8265 105.907 24.8265C105.364 24.8265 104.778 24.7428 104.109 24.6174C103.44 24.4919 102.896 24.3246 102.436 24.1155V21.1045C102.98 21.4809 103.607 21.8155 104.235 22.0246C104.862 22.2337 105.447 22.3591 105.991 22.3591C106.66 22.3591 107.204 22.2755 107.497 22.0664C107.831 21.8573 107.998 21.5646 107.998 21.1045C107.998 20.6864 107.831 20.3518 107.497 20.0172C107.162 19.7245 106.493 19.3899 105.573 19.0136C104.444 18.5536 103.649 18.0099 103.189 17.4244C102.729 16.839 102.478 16.0862 102.478 15.1662C102.478 13.9952 102.938 13.0334 103.858 12.2806C104.778 11.5279 105.991 11.1515 107.455 11.1515C107.915 11.1515 108.417 11.1933 108.96 11.3188C109.504 11.4443 110.006 11.5697 110.382 11.6952V14.6644C109.964 14.4134 109.504 14.1625 108.96 13.9534C108.417 13.7443 107.873 13.6607 107.371 13.6607C106.786 13.6607 106.326 13.7861 106.033 13.9952C105.74 14.288 105.573 14.5807 105.573 14.9989ZM112.431 18.2608C112.431 16.128 113.059 14.4134 114.23 13.1589C115.442 11.9043 117.115 11.277 119.248 11.277C121.255 11.277 122.844 11.8624 123.973 13.0752C125.103 14.288 125.688 15.9189 125.688 17.9681C125.688 20.0591 125.061 21.7318 123.89 22.9864C122.677 24.241 121.046 24.8683 118.955 24.8683C116.948 24.8683 115.359 24.2828 114.188 23.1119C113.059 21.8991 112.431 20.2682 112.431 18.2608ZM115.61 18.1354C115.61 19.4736 115.902 20.5191 116.53 21.23C117.157 21.9409 118.035 22.3173 119.164 22.3173C120.252 22.3173 121.13 21.9828 121.715 21.23C122.301 20.5191 122.593 19.4736 122.593 18.0517C122.593 16.6717 122.301 15.6262 121.715 14.8734C121.13 14.1625 120.252 13.7861 119.206 13.7861C118.077 13.7861 117.241 14.1625 116.613 14.9153C115.944 15.7098 115.61 16.7553 115.61 18.1354ZM135.85 14.0789H131.292V24.5337H128.197V14.0789H126.023V11.5697H128.197V9.77148C128.197 8.43325 128.657 7.30413 129.535 6.42592C130.414 5.54771 131.543 5.12952 132.923 5.12952C133.299 5.12952 133.634 5.17134 133.926 5.17134C134.219 5.17134 134.47 5.25498 134.679 5.33862V7.97324C134.596 7.93142 134.386 7.84778 134.136 7.76414C133.885 7.6805 133.592 7.63869 133.257 7.63869C132.63 7.63869 132.128 7.84778 131.794 8.22416C131.459 8.60053 131.292 9.22782 131.292 9.98057V11.5279H135.85V8.60053L138.903 7.6805V11.5279H141.998V14.0371H138.903V20.1009C138.903 20.8954 139.07 21.4391 139.321 21.7737C139.614 22.1082 140.074 22.2755 140.701 22.2755C140.868 22.2755 141.078 22.2337 141.329 22.15C141.579 22.0664 141.789 21.9828 141.956 21.8573V24.3665C141.747 24.4919 141.454 24.5756 140.994 24.6592C140.534 24.7428 140.116 24.7847 139.656 24.7847C138.359 24.7847 137.397 24.4501 136.77 23.781C136.143 23.1119 135.808 22.0664 135.808 20.6864L135.85 14.0789Z",
                                    fill: "currentcolor"
                                }), (0, s.jsx)("path", {
                                    d: "M15.1187 0.444887H0.816406V14.7471H15.1187V0.444887Z",
                                    fill: "currentcolor"
                                }), (0, s.jsx)("path", {
                                    d: "M30.9233 0.444887H16.6211V14.7471H30.9233V0.444887Z",
                                    fill: "currentcolor"
                                }), (0, s.jsx)("path", {
                                    d: "M15.1187 16.2528H0.816406V30.5551H15.1187V16.2528Z",
                                    fill: "currentcolor"
                                }), (0, s.jsx)("path", {
                                    d: "M30.9233 16.2528H16.6211V30.5551H30.9233V16.2528Z",
                                    fill: "currentcolor"
                                })]
                            }), (0, s.jsx)("defs", {
                                children: (0, s.jsx)("clipPath", {
                                    id: a,
                                    children: (0, s.jsx)("rect", {
                                        width: "141.182",
                                        height: "30.11",
                                        fill: "currentcolor",
                                        transform: "translate(0.818359 0.445)"
                                    })
                                })
                            })]
                        })
                    })
                },
                f = e => {
                    let a, {
                        isInLohpRefreshExperiment: t,
                        variant: i
                    } = e;
                    switch (i) {
                        case "mit":
                            a = (0, s.jsx)(u, {
                                color: t ? "gray.400" : "white"
                            });
                            break;
                        case "stanford":
                            a = (0, s.jsx)(c, {
                                color: t ? "gray.400" : "white"
                            });
                            break;
                        case "microsoft":
                            a = (0, s.jsx)(x, {
                                color: t ? "gray.400" : "white"
                            });
                            break;
                        case "harvard":
                            a = (0, s.jsx)(p, {
                                secondaryFill: t ? "white" : void 0,
                                color: t ? "gray.400" : "white"
                            });
                            break;
                        case "google":
                            a = (0, s.jsx)(h, {
                                color: t ? "gray.400" : "white"
                            });
                            break;
                        case "caltech":
                            a = (0, s.jsx)(m, {
                                color: t ? "gray.400" : "white"
                            });
                            break;
                        default:
                            throw Error("Invalid variant")
                    }
                    return (0, s.jsx)(r.az, {
                        width: {
                            base: "100%",
                            xs: "50%",
                            lg: "25%",
                            "2xl": "auto"
                        },
                        textAlign: "center",
                        children: a
                    })
                };
            var b = t(18840),
                j = t.n(b),
                v = t(26410),
                L = t(56545),
                M = t(62104),
                y = t(88749),
                w = t.n(y),
                A = t(6225),
                V = t(11074),
                Z = t(73699);
            let H = () => {
                    let e = (0, Z.N)("colors", "gray.100").reference;
                    return (0, s.jsx)(r.az, {
                        color: "text.primary",
                        py: {
                            base: 16,
                            lg: 20
                        },
                        px: {
                            base: 5,
                            lg: 28
                        },
                        position: "relative",
                        background: (0, V.YI)(55, [{
                            color: e,
                            percent: 25
                        }, {
                            color: "white",
                            percent: 70
                        }]),
                        children: (0, s.jsxs)(l.s, {
                            maxW: {
                                base: "432px",
                                lg: "container.lg"
                            },
                            w: "full",
                            mx: "auto",
                            direction: "column",
                            gap: 0,
                            alignItems: "stretch",
                            children: [(0, s.jsx)(n.D, {
                                as: "h2",
                                fontSize: {
                                    base: "5xl",
                                    lg: "6xl"
                                },
                                fontWeight: "500",
                                textAlign: "center",
                                letterSpacing: "tight",
                                style: j().style,
                                mb: {
                                    base: 16,
                                    lg: "84px"
                                },
                                children: (0, s.jsx)(i.A, {
                                    defaultMessage: "Designed by experts",
                                    id: "mjEc2T"
                                })
                            }), (0, s.jsx)(r.az, {
                                mb: "10",
                                children: (0, s.jsx)(C.z, {
                                    columnGap: {
                                        base: 0,
                                        "2xl": 6
                                    },
                                    rowGap: {
                                        base: 12,
                                        xl: 4
                                    },
                                    wrap: "wrap",
                                    justifyContent: {
                                        base: "center",
                                        md: "space-around",
                                        "2xl": "space-between"
                                    },
                                    divider: (0, s.jsx)(v.G, {
                                        display: {
                                            base: "none",
                                            "2xl": "block"
                                        },
                                        borderColor: "gray.200",
                                        my: "-8px !important"
                                    }),
                                    children: ["stanford", "mit", "google", "caltech", "harvard", "microsoft"].map(e => (0, s.jsx)(f, {
                                        variant: e,
                                        isInLohpRefreshExperiment: !0
                                    }, e))
                                })
                            }), (0, s.jsxs)(L.T, {
                                gap: 0,
                                children: [(0, s.jsx)(o.E, {
                                    fontSize: {
                                        base: "16px",
                                        md: "20px"
                                    },
                                    textAlign: "center",
                                    mb: {
                                        base: 12,
                                        md: 14
                                    },
                                    color: "gray.500",
                                    children: (0, s.jsx)(i.A, {
                                        defaultMessage: "All of our courses are crafted by award-winning teachers and professionals from top institutions.",
                                        id: "2wJ6NB"
                                    })
                                }), (0, s.jsx)(M.$, {
                                    as: w(),
                                    variant: "pillSecondaryOutlineAlpha",
                                    size: "lg",
                                    maxWidth: {
                                        base: "340px",
                                        md: "280px"
                                    },
                                    w: "full",
                                    mx: "auto",
                                    href: A.Hs,
                                    children: (0, s.jsx)(i.A, {
                                        defaultMessage: "Learn more",
                                        id: "TdTXXf"
                                    })
                                })]
                            })]
                        })
                    })
                },
                S = e => {
                    let {
                        heading: a
                    } = e;
                    return (0, s.jsx)(r.az, {
                        color: "white",
                        py: {
                            base: 16,
                            lg: 20
                        },
                        px: {
                            base: 5,
                            lg: 28
                        },
                        position: "relative",
                        backgroundColor: "blue.950",
                        backgroundImage: "url('/images/homepage/experts-bg.svg')",
                        backgroundPosition: "center",
                        backgroundRepeat: "repeat",
                        backgroundSize: "auto",
                        children: (0, s.jsxs)(l.s, {
                            maxW: {
                                base: "432px",
                                lg: "container.lg"
                            },
                            w: "full",
                            mx: "auto",
                            direction: "column",
                            gap: "72px",
                            alignItems: "stretch",
                            children: [(0, s.jsxs)(r.az, {
                                children: [(0, s.jsx)(n.D, {
                                    as: "h2",
                                    fontSize: {
                                        base: "4xl",
                                        lg: "5xl",
                                        "2xl": "6xl"
                                    },
                                    fontWeight: "500",
                                    textAlign: "center",
                                    letterSpacing: "tight",
                                    style: j().style,
                                    mb: 4,
                                    children: a || (0, s.jsx)(i.A, {
                                        defaultMessage: "Designed by experts",
                                        id: "mjEc2T"
                                    })
                                }), (0, s.jsx)(o.E, {
                                    fontSize: {
                                        base: "16px",
                                        md: "20px"
                                    },
                                    fontWeight: "400",
                                    textAlign: "center",
                                    mb: 0,
                                    children: (0, s.jsx)(i.A, {
                                        defaultMessage: "All of our courses are crafted by award-winning teachers and professionals from top institutions.",
                                        id: "2wJ6NB"
                                    })
                                })]
                            }), (0, s.jsx)(r.az, {
                                children: (0, s.jsx)(C.z, {
                                    columnGap: {
                                        base: 0,
                                        "2xl": 6
                                    },
                                    rowGap: {
                                        base: 12,
                                        xl: 6
                                    },
                                    wrap: "wrap",
                                    justifyContent: {
                                        base: "center",
                                        md: "space-around",
                                        "2xl": "space-between"
                                    },
                                    opacity: .5,
                                    children: ["stanford", "mit", "google", "caltech", "harvard", "microsoft"].map(e => (0, s.jsx)(f, {
                                        variant: e
                                    }, e))
                                })
                            })]
                        })
                    })
                }
        },
        68523: (e, a, t) => {
            function s(e) {
                let {
                    quality: a,
                    src: t,
                    width: s
                } = e, i = [];
                if (t || i.push("src"), s || i.push("width"), i.length > 0) throw Error("Cloudflare image loader requires ".concat(i.join(", "), " to be provided. Make sure you pass them as props to the `next/image` component. Received: ").concat(JSON.stringify({
                    quality: a,
                    src: t,
                    width: s
                })));
                if (t.startsWith("//")) throw Error('Failed to parse src "'.concat(t, '" on `cloudflare-image-loader.ts`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)'));
                if (!t.startsWith("/")) try {
                    new URL(t)
                } catch (e) {
                    throw Error('Failed to parse src "'.concat(t, '" on `cloudflare-image-loader.ts`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)'))
                }
                return "/cdn-cgi/image/".concat(["width=".concat(s), "quality=".concat(a || 75), "format=auto"].join(",")).concat(t)
            }
            t.r(a), t.d(a, {
                default: () => s
            })
        },
        68868: (e, a, t) => {
            t.d(a, {
                $Q: () => i,
                R5: () => n,
                S: () => r,
                do: () => o,
                fk: () => l
            });
            var s = t(74449);
            let i = "/images/paywall",
                r = s.T.gray[50],
                l = "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, #FFF 62.11%), linear-gradient(0deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%), linear-gradient(66deg, #7491FF 14.55%, #FF90E0 42.56%, #F7C325 73.53%)",
                n = 5e3,
                o = "/videos/paywall"
        },
        70480: (e, a, t) => {
            t.d(a, {
                e: () => x
            });
            var s = t(12584),
                i = t(23798),
                r = t(21462),
                l = t(40796),
                n = t(86191),
                o = t(198),
                C = t(67267),
                d = t(26829),
                g = t(62104),
                c = t(70501),
                u = t(63903);

            function h() {
                let e = (0, s._)(["\n    0% {\n      opacity: 1;\n      left: ", "\n    }\n    ", "% {\n      opacity: 1;\n      left: ", ";\n    }\n    ", "% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 0;\n      left: ", ";\n    }\n  "]);
                return h = function() {
                    return e
                }, e
            }
            let m = e => {
                    let {
                        animation: a
                    } = e, t = (0, l.Bi)(), s = (0, l.Bi)(), r = (0, l.Bi)();
                    return (0, i.jsxs)(n.I, {
                        viewBox: "0 0 150 56",
                        width: "150",
                        height: "56px",
                        animation: a,
                        zIndex: "100",
                        position: "absolute",
                        top: 0,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.jsxs)("g", {
                            clipPath: "url(#".concat(r, ")"),
                            children: [(0, i.jsx)("rect", {
                                opacity: "0.4",
                                x: "75",
                                y: "-58.6328",
                                width: "51",
                                height: "150",
                                transform: "rotate(30 75 -58.6328)",
                                fill: "url(#".concat(t, ")")
                            }), (0, i.jsx)("rect", {
                                opacity: "0.4",
                                x: "127.826",
                                y: "-28.1328",
                                width: "26",
                                height: "150",
                                transform: "rotate(30 127.826 -28.1328)",
                                fill: "url(#".concat(s, ")")
                            })]
                        }), (0, i.jsxs)("defs", {
                            children: [(0, i.jsxs)("linearGradient", {
                                id: t,
                                x1: "100.5",
                                y1: "-58.6328",
                                x2: "100.5",
                                y2: "91.3672",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, i.jsx)("stop", {
                                    offset: "0.27",
                                    stopColor: "#F5EFFF"
                                }), (0, i.jsx)("stop", {
                                    offset: "0.71",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })]
                            }), (0, i.jsxs)("linearGradient", {
                                id: s,
                                x1: "140.826",
                                y1: "-28.1328",
                                x2: "140.826",
                                y2: "121.867",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, i.jsx)("stop", {
                                    offset: "0.081302",
                                    stopColor: "#F5EFFF"
                                }), (0, i.jsx)("stop", {
                                    offset: "0.570844",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })]
                            }), (0, i.jsx)("clipPath", {
                                id: r,
                                children: (0, i.jsx)("rect", {
                                    width: "150",
                                    height: "56",
                                    fill: "white"
                                })
                            })]
                        })]
                    })
                },
                p = e => {
                    let {
                        animationDuration: a = 1600,
                        colorScheme: t,
                        delayDuration: s = 4800
                    } = e, r = "100%", l = a + s, n = a / l * 100, g = (0, o.i7)(h(), "-100%", n, r, n + 1, r), c = "".concat(g, " ").concat(l, "ms cubic-bezier(.16, 1, 0.7, 1) infinite"), u = (0, C.Vl)("Button", {
                        variant: "pillPrimary"
                    });
                    return (0, i.jsx)(d.az, {
                        w: "100%",
                        height: "iridescent" === t ? "calc(100% - 4px)" : "100%",
                        position: "absolute",
                        overflow: "clip",
                        borderRadius: (() => {
                            let {
                                borderRadius: e
                            } = u;
                            return "string" == typeof e ? e : "56px"
                        })(),
                        zIndex: 0,
                        children: (0, i.jsx)(m, {
                            animation: c
                        })
                    })
                },
                x = e => {
                    let {
                        animationDuration: a = 1600,
                        children: t,
                        delayDuration: s = 4800,
                        variant: l = "pillPrimary",
                        ...n
                    } = e, [o, C] = (0, r.useState)(!0);
                    return (0, r.useEffect)(() => {
                        var e, a, t, s;
                        let i = null == (a = (0, u.V)()) || null == (e = a.userAgent.match(/Chrome\/(\d+)/)) ? void 0 : e[1],
                            r = !!i && parseInt(i, 10) >= 90,
                            l = null == (s = (0, u.V)()) || null == (t = s.userAgent.match(/Version\/(\d+\.\d+)/)) ? void 0 : t[1],
                            n = !!l && parseInt(l, 10) >= 16;
                        C(r || n || !i && !l)
                    }, []), (0, i.jsxs)(g.$, {
                        variant: l,
                        cursor: "pointer",
                        ...n,
                        children: [(0, i.jsx)(c.s, {
                            zIndex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            children: t
                        }), o && (0, i.jsx)(p, {
                            animationDuration: a,
                            delayDuration: s,
                            colorScheme: n.colorScheme
                        })]
                    })
                }
        },
        77147: (e, a, t) => {
            t.d(a, {
                e: () => d
            });
            var s = t(23798),
                i = t(83902),
                r = t(5732),
                l = t(22711),
                n = t(88749),
                o = t.n(n),
                C = t(2651);
            let d = e => {
                let {
                    children: a,
                    ...t
                } = e;
                return (0, s.jsx)(i.m, {
                    bgColor: "white",
                    borderBottom: "1px",
                    borderColor: "gray.200",
                    centerContent: !0,
                    maxW: "100%",
                    px: {
                        base: 6,
                        md: 8
                    },
                    top: "0",
                    zIndex: "appBar",
                    ...t,
                    children: (0, s.jsxs)(r.z, {
                        align: "center",
                        flexWrap: "nowrap",
                        h: "appBar",
                        justify: "space-between",
                        maxW: {
                            base: "full",
                            sm: "container.sm",
                            md: "container.md",
                            lg: "container.lg",
                            xl: "container.xl"
                        },
                        spacing: {
                            base: 6,
                            md: 8,
                            lg: 10
                        },
                        w: "100%",
                        children: [(0, s.jsx)(l.N, {
                            as: o(),
                            href: "/",
                            color: "black",
                            _hover: {
                                color: "black"
                            },
                            _focus: {
                                color: "black"
                            },
                            children: (0, s.jsx)(C.T, {
                                h: {
                                    base: 6,
                                    md: 8
                                },
                                minH: "5",
                                maxH: "12"
                            })
                        }), a]
                    })
                })
            }
        },
        78954: (e, a, t) => {
            t.d(a, {
                E: () => M,
                N: () => V
            });
            var s = t(23798);
            t(21462);
            var i = t(86027),
                r = t(64724),
                l = t(56545),
                n = t(28439),
                o = t(14770),
                C = t(86191);
            let d = e => (0, s.jsxs)(C.I, {
                    width: "137px",
                    height: "56px",
                    viewBox: "0 0 137 56",
                    fill: "none",
                    maxW: "100%",
                    xmlns: "http://www.w3.org/2000/svg",
                    color: "white",
                    ...e,
                    children: [(0, s.jsx)("path", {
                        fill: "currentcolor",
                        d: "M66.021 26.31V15.186h5.23c2.361 0 3.627 1.065 3.627 3.024 0 1.065-.463 2.052-1.636 2.438 1.296.293 1.929 1.265 1.929 2.515 0 2.02-1.28 3.147-3.873 3.147h-5.277Zm2.438-2.052h2.469c1.234 0 1.774-.416 1.774-1.265 0-.88-.478-1.28-1.728-1.28H68.46v2.545Zm0-4.551h2.438c1.142 0 1.543-.463 1.543-1.265 0-.787-.37-1.204-1.574-1.204H68.46v2.469Zm12.286 6.773c-2.345 0-3.857-1.45-3.857-4.15s1.697-4.182 3.996-4.182c2.206 0 3.672 1.389 3.672 3.92a5.1 5.1 0 0 1-.046.786h-5.416c.093 1.204.787 1.805 1.713 1.805.864 0 1.311-.447 1.512-.987l2.037.37c-.37 1.265-1.45 2.438-3.61 2.438Zm-1.605-5.076h3.256c-.093-.833-.602-1.481-1.543-1.481-.88 0-1.512.524-1.712 1.48ZM89.6 26.48c-2.021 0-3.317-.864-3.564-2.376l2.114-.417c.154.664.663 1.05 1.512 1.05.91 0 1.296-.263 1.296-.71 0-.417-.216-.587-1.142-.772l-1.11-.216c-1.559-.308-2.438-.926-2.438-2.33 0-1.681 1.419-2.56 3.425-2.56 1.851 0 3.194.863 3.44 2.33l-2.052.416c-.123-.587-.54-1.019-1.434-1.019-.818 0-1.22.278-1.22.695 0 .416.278.57 1.065.71l1.018.184c1.636.294 2.623.942 2.623 2.377 0 1.589-1.218 2.638-3.533 2.638Zm9.07-.17c-2.191 0-3.07-.817-3.07-3.101v-2.885h-1.204v-2.021h1.203v-1.975h2.346v1.975h2.175v2.02h-2.175v2.84c0 .848.37 1.11 1.095 1.11h1.095v2.037H98.67Zm-33.62 16 4.073-11.124h3.24L76.45 42.31h-2.623l-.895-2.561H68.49l-.895 2.561H65.05Zm4.196-4.752h2.916l-1.45-4.197-1.466 4.197Zm8.932 7.93V34.303h2.3v.956c.462-.694 1.357-1.11 2.422-1.11 1.897 0 3.363 1.403 3.363 4.072 0 2.809-1.574 4.259-3.657 4.259-.863 0-1.573-.262-2.082-.74v3.748h-2.346Zm2.346-6.557c0 .926.663 1.59 1.681 1.59 1.05 0 1.698-.818 1.698-2.238 0-1.404-.633-2.206-1.698-2.206-1.002 0-1.681.679-1.681 1.682v1.172Zm7.768 6.558V34.303h2.299v.956c.463-.694 1.358-1.11 2.422-1.11 1.898 0 3.364 1.403 3.364 4.072 0 2.809-1.574 4.259-3.657 4.259-.864 0-1.574-.262-2.083-.74v3.748h-2.345Zm2.345-6.558c0 .926.664 1.59 1.682 1.59 1.05 0 1.697-.818 1.697-2.238 0-1.404-.633-2.206-1.697-2.206-1.003 0-1.682.679-1.682 1.682v1.172ZM21.181 47.059c2.35 1.176 4.233 4.941 4.706 7.53C23.061 55.764 20.944 56 17.885 56c2.259-1.882 5.176-2.275 6.353-2.118-2.04-2.51-2.588-4.706-3.057-6.823Z"
                    }), (0, s.jsx)("path", {
                        fill: "currentcolor",
                        d: "M16.744 44.127c1.977 1.732 2.848 5.85 2.651 8.474-3.031.424-5.14.117-8.1-.656 2.662-1.25 5.584-.893 6.683-.444-1.34-2.943-1.316-5.207-1.234-7.374ZM13.571 40.526c1.21 2.333.52 6.485-.618 8.857-2.978-.709-4.83-1.763-7.304-3.561 2.934-.195 5.525 1.202 6.384 2.02-.174-3.228.672-5.328 1.538-7.316Z"
                    }), (0, s.jsx)("path", {
                        fill: "currentcolor",
                        d: "M11.273 35.904c.648 2.548-.967 6.435-2.614 8.486-2.739-1.367-4.303-2.814-6.304-5.127 2.901.476 5.107 2.426 5.758 3.418.563-3.184 1.865-5.037 3.16-6.777ZM9.366 30.123c.197 2.62-2.067 6.17-4.045 7.904-2.46-1.82-3.75-3.517-5.32-6.142 2.775.972 4.61 3.274 5.079 4.364 1.106-3.038 2.709-4.637 4.286-6.126ZM9.473 24.847c-.576 2.564-3.777 5.297-6.176 6.38-1.822-2.46-2.56-4.46-3.296-7.428 2.37 1.739 3.454 4.477 3.584 5.656 1.946-2.583 3.945-3.644 5.888-4.608Z"
                    }), (0, s.jsx)("path", {
                        fill: "currentcolor",
                        d: "M10.925 19.964c-1.228 2.324-5.034 4.123-7.632 4.538-1.113-2.851-1.302-4.973-1.234-8.031 1.832 2.3 2.16 5.225 1.976 6.398 2.555-1.983 4.763-2.483 6.89-2.905Z"
                    }), (0, s.jsx)("path", {
                        fill: "currentcolor",
                        d: "M13.643 15.465c-1.765 1.947-5.898 2.746-8.518 2.504-.372-3.038-.028-5.14.795-8.087 1.205 2.683.797 5.598.329 6.689 2.966-1.288 5.229-1.226 7.394-1.106Z"
                    }), (0, s.jsx)("path", {
                        fill: "currentcolor",
                        d: "M17.16 11.474c-2.174 1.478-6.379 1.285-8.869.436.352-3.041 1.18-5.005 2.671-7.675.542 2.89-.54 5.629-1.25 6.579 3.186-.556 5.37.036 7.448.66ZM21.921 8.604c-2.483.86-6.492-.422-8.675-1.89C14.377 3.868 15.688 2.188 17.824 0c-.23 2.931-1.987 5.764-2.921 6.496 3.22.294 5.176.964 7.018 2.108Z"
                    }), (0, s.jsx)("path", {
                        fill: "currentcolor",
                        d: "M24.236 1.176c-2.824 0-5.647 1.647-6.588 3.53 2.588-.236 5.176-1.647 6.588-3.53ZM115.246 47.059c-2.35 1.176-4.233 4.941-4.706 7.53 2.826 1.176 4.944 1.411 8.003 1.411-2.259-1.882-5.177-2.275-6.353-2.118 2.039-2.51 2.588-4.706 3.056-6.823Z"
                    }), (0, s.jsx)("path", {
                        fill: "currentcolor",
                        d: "M119.682 44.127c-1.977 1.732-2.847 5.85-2.651 8.474 3.032.424 5.14.117 8.1-.656-2.661-1.25-5.583-.893-6.682-.444 1.339-2.943 1.315-5.207 1.233-7.374ZM122.856 40.526c-1.211 2.333-.521 6.485.618 8.857 2.978-.709 4.829-1.763 7.304-3.561-2.934-.195-5.525 1.202-6.384 2.02.174-3.228-.672-5.328-1.538-7.316Z"
                    }), (0, s.jsx)("path", {
                        fill: "currentcolor",
                        d: "M125.153 35.904c-.648 2.547.966 6.434 2.614 8.486 2.739-1.367 4.303-2.814 6.304-5.127-2.901.476-5.107 2.426-5.758 3.418-.564-3.185-1.865-5.037-3.16-6.777ZM127.06 30.123c-.197 2.62 2.067 6.17 4.045 7.904 2.46-1.82 3.75-3.517 5.32-6.142-2.775.972-4.609 3.274-5.079 4.364-1.106-3.038-2.709-4.637-4.286-6.126ZM126.955 24.846c.576 2.565 3.777 5.298 6.176 6.38 1.821-2.46 2.559-4.459 3.296-7.428-2.371 1.74-3.454 4.478-3.585 5.657-1.945-2.583-3.944-3.644-5.887-4.608Z"
                    }), (0, s.jsx)("path", {
                        fill: "currentcolor",
                        d: "M125.5 19.964c1.228 2.324 5.033 4.123 7.632 4.538 1.113-2.85 1.301-4.973 1.234-8.031-1.832 2.3-2.16 5.225-1.977 6.398-2.554-1.983-4.762-2.483-6.889-2.905Z"
                    }), (0, s.jsx)("path", {
                        fill: "currentcolor",
                        d: "M122.782 15.465c1.766 1.947 5.899 2.746 8.519 2.504.372-3.038.028-5.14-.796-8.087-1.204 2.683-.796 5.598-.328 6.689-2.966-1.288-5.229-1.226-7.395-1.106Z"
                    }), (0, s.jsx)("path", {
                        fill: "currentcolor",
                        d: "M119.266 11.474c2.174 1.478 6.378 1.285 8.869.436-.352-3.041-1.179-5.005-2.671-7.675-.542 2.89.539 5.629 1.25 6.579-3.186-.556-5.371.036-7.448.66ZM114.503 8.604c2.484.86 6.493-.422 8.676-1.89-1.132-2.845-2.442-4.525-4.578-6.714.23 2.931 1.987 5.764 2.921 6.496-3.221.294-5.176.964-7.019 2.108Z"
                    }), (0, s.jsx)("path", {
                        fill: "currentcolor",
                        d: "M112.189 1.176c2.824 0 5.647 1.647 6.588 3.53-2.588-.236-5.176-1.647-6.588-3.53ZM31.688 16.497c-.277.283-.438.725-.438 1.297v20.413c0 .572.16 1.014.438 1.297l.069.063 11.715-11.434v-.27L31.757 16.43l-.069.067ZM51.631 31.946l-3.9-3.813v-.27l3.905-3.813.087.05 4.626 2.569c1.32.729 1.32 1.929 0 2.662l-4.626 2.565-.092.05ZM49.59 34.026l-3.993-3.898-11.784 11.506c.439.45 1.154.504 1.967.054l13.81-7.662M49.59 21.97l-13.81-7.662c-.813-.446-1.528-.392-1.967.058l11.784 11.502 3.993-3.898Z"
                    })]
                }),
                g = e => (0, s.jsxs)(C.I, {
                    width: "136px",
                    height: "49px",
                    viewBox: "0 0 136 49",
                    fill: "none",
                    maxW: "100%",
                    xmlns: "http://www.w3.org/2000/svg",
                    color: "white",
                    ...e,
                    children: [(0, s.jsx)("path", {
                        d: "M57.7752 22.7732V13.0381H64.8368V14.9014H59.9356V16.9673H64.6343V18.7901H59.9356V20.9099H64.7963V22.7732H57.7752ZM69.5843 22.9217C67.8966 22.9217 66.5464 21.7065 66.5464 19.3031C66.5464 16.8592 67.9236 15.6305 69.7464 15.6305C70.5295 15.6305 71.1506 15.8601 71.5557 16.2786V13.0381H73.608V22.7732H71.6232V22.0306C71.2856 22.5707 70.5565 22.9217 69.5843 22.9217ZM68.6122 19.2626C68.6122 20.4778 69.1658 21.2069 70.0974 21.2069C71.0696 21.2069 71.5557 20.5723 71.5557 19.7352V18.763C71.5557 17.8989 71.0426 17.3183 70.1784 17.3183C69.2063 17.3183 68.6122 18.0204 68.6122 19.2626ZM75.7616 22.7732V15.7656H77.8139V22.7732H75.7616ZM75.7346 14.8069V13.1056H77.8544V14.8069H75.7346ZM83.0764 22.7732C81.1591 22.7732 80.3895 22.0576 80.3895 20.0593V17.5344H79.3363V15.7656H80.3895V14.0373H82.4418V15.7656H84.3456V17.5344H82.4418V20.0188C82.4418 20.7614 82.7659 20.9909 83.4005 20.9909H84.3591V22.7732H83.0764ZM89.2661 22.9217C87.0653 22.9217 85.688 21.5445 85.688 19.2626C85.688 16.9808 87.0653 15.6305 89.2661 15.6305C91.467 15.6305 92.8712 16.9808 92.8712 19.2626C92.8712 21.5445 91.467 22.9217 89.2661 22.9217ZM87.7539 19.2626C87.7539 20.5588 88.3345 21.2339 89.2661 21.2339C90.1978 21.2339 90.8054 20.5588 90.8054 19.2626C90.8054 17.9664 90.1978 17.3183 89.2661 17.3183C88.3345 17.3183 87.7539 17.9664 87.7539 19.2626ZM94.6527 22.7732V15.7656H96.6376V16.6162C97.1506 15.9276 97.8798 15.7656 98.5009 15.7656H99.0275V17.5614H98.3793C97.1642 17.5614 96.7051 17.9124 96.7051 18.7901V22.7732H94.6527ZM103.251 22.9217C101.482 22.9217 100.348 22.1656 100.132 20.8424L101.981 20.4778C102.116 21.0584 102.562 21.396 103.305 21.396C104.101 21.396 104.439 21.1664 104.439 20.7749C104.439 20.4103 104.25 20.2618 103.44 20.0998L102.467 19.9107C101.104 19.6407 100.334 19.1006 100.334 17.8719C100.334 16.4002 101.576 15.6305 103.332 15.6305C104.952 15.6305 106.127 16.3867 106.343 17.6694L104.547 18.0339C104.439 17.5208 104.074 17.1428 103.291 17.1428C102.575 17.1428 102.224 17.3858 102.224 17.7504C102.224 18.1149 102.467 18.25 103.156 18.3715L104.047 18.5335C105.478 18.7901 106.343 19.3571 106.343 20.6128C106.343 22.0036 105.276 22.9217 103.251 22.9217ZM62.1094 36.9217C59.2605 36.9217 57.3701 35.2204 57.3701 31.9124C57.3701 28.5099 59.355 26.9031 62.1229 26.9031C64.7423 26.9031 66.1466 28.1183 66.5516 30.1841L64.3913 30.5217C64.1077 29.536 63.4596 28.8204 62.1229 28.8204C60.5972 28.8204 59.571 29.9141 59.571 31.9124C59.571 33.8702 60.5567 35.0044 62.0959 35.0044C63.4866 35.0044 64.1482 34.3023 64.3913 33.2761L66.5516 33.6272C66.1331 35.747 64.7423 36.9217 62.1094 36.9217ZM68.4536 36.7732V27.0381H70.506V30.5892C70.9515 30.0356 71.6672 29.6305 72.6933 29.6305C74.1381 29.6305 75.1642 30.4677 75.1642 32.0744V36.7732H73.1119V32.5335C73.1119 31.7234 72.6663 31.3588 71.8562 31.3588C71.1541 31.3588 70.506 31.7639 70.506 32.5065V36.7732H68.4536ZM80.4651 36.9217C78.2642 36.9217 76.887 35.5445 76.887 33.2626C76.887 30.9808 78.2642 29.6305 80.4651 29.6305C82.666 29.6305 84.0702 30.9808 84.0702 33.2626C84.0702 35.5445 82.666 36.9217 80.4651 36.9217ZM78.9529 33.2626C78.9529 34.5588 79.5335 35.2339 80.4651 35.2339C81.3968 35.2339 82.0044 34.5588 82.0044 33.2626C82.0044 31.9664 81.3968 31.3183 80.4651 31.3183C79.5335 31.3183 78.9529 31.9664 78.9529 33.2626ZM85.8517 36.7732V29.7656H87.9041V36.7732H85.8517ZM85.8247 28.8069V27.1056H87.9446V28.8069H85.8247ZM93.2071 36.9217C91.1412 36.9217 89.6965 35.693 89.6965 33.2491C89.6965 30.8592 91.1412 29.6305 93.2071 29.6305C95.0569 29.6305 96.1505 30.5487 96.4206 32.0609L94.5573 32.3715C94.3953 31.7774 94.0442 31.3183 93.2071 31.3183C92.3024 31.3183 91.7623 31.9934 91.7623 33.2491C91.7623 34.5183 92.2889 35.2339 93.2071 35.2339C94.0442 35.2339 94.3817 34.7614 94.5438 34.1673L96.4206 34.4643C96.137 35.9901 95.0569 36.9217 93.2071 36.9217ZM101.052 36.9217C99.0001 36.9217 97.6769 35.6525 97.6769 33.2896C97.6769 30.9268 99.1622 29.6305 101.174 29.6305C103.105 29.6305 104.387 30.8457 104.387 33.0601C104.387 33.3436 104.374 33.6002 104.347 33.7487H99.6077C99.6887 34.8019 100.296 35.3285 101.106 35.3285C101.863 35.3285 102.254 34.9369 102.43 34.4643L104.212 34.7884C103.888 35.8956 102.943 36.9217 101.052 36.9217ZM99.6482 32.4795H102.497C102.416 31.7504 101.971 31.1833 101.147 31.1833C100.377 31.1833 99.8238 31.6424 99.6482 32.4795Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M44.7401 24.2238C44.7549 23.0715 45.061 21.9417 45.6299 20.9395C46.1987 19.9372 47.0118 19.0952 47.9935 18.4916C47.3698 17.601 46.5471 16.868 45.5906 16.3509C44.6341 15.8338 43.5702 15.5468 42.4834 15.5128C40.1651 15.2695 37.9176 16.9001 36.7362 16.9001C35.532 16.9001 33.7131 15.537 31.7544 15.5773C30.4875 15.6182 29.2528 15.9866 28.1706 16.6466C27.0884 17.3066 26.1956 18.2357 25.5792 19.3433C22.9093 23.966 24.9008 30.7598 27.4585 34.4965C28.7381 36.3262 30.2336 38.37 32.1905 38.2976C34.1055 38.2181 34.8207 37.0765 37.1322 37.0765C39.4222 37.0765 40.0932 38.2976 42.0898 38.2515C44.1446 38.2181 45.4393 36.4136 46.674 34.5666C47.5935 33.2628 48.301 31.8219 48.7703 30.2972C47.5765 29.7923 46.5578 28.9471 45.8411 27.8671C45.1244 26.7871 44.7415 25.52 44.7401 24.2238Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M40.9689 13.0554C42.0893 11.7104 42.6412 9.98169 42.5076 8.23633C40.7959 8.4161 39.2148 9.23417 38.0793 10.5275C37.5241 11.1594 37.0989 11.8944 36.828 12.6907C36.557 13.487 36.4457 14.3288 36.5003 15.1681C37.3565 15.1769 38.2034 14.9914 38.9775 14.6254C39.7515 14.2594 40.4324 13.7226 40.9689 13.0554Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M18.5361 41.1824C20.5931 42.2119 22.2404 45.5065 22.6543 47.7716C20.1812 48.8011 18.328 49.007 15.6512 49.007C17.6279 47.3597 20.1813 47.0165 21.2108 47.1538C19.4262 44.9574 18.9458 43.0356 18.5361 41.1824Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M14.65 38.6168C16.3802 40.1326 17.1417 43.7365 16.97 46.0326C14.317 46.4039 12.4719 46.135 9.88187 45.4587C12.2107 44.3643 14.7679 44.6773 15.7294 45.0702C14.5576 42.4942 14.5782 40.5134 14.65 38.6168Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M11.8729 35.4655C12.9318 37.5075 12.328 41.1411 11.3315 43.2169C8.72558 42.5961 7.10527 41.6734 4.93965 40.1C7.50715 39.9292 9.77456 41.1524 10.5268 41.8686C10.374 39.0428 11.115 37.2056 11.8729 35.4655Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M9.86565 31.4211C10.4333 33.6502 9.02018 37.0518 7.57839 38.8471C5.18152 37.6509 3.81304 36.3844 2.06124 34.3603C4.60046 34.777 6.5309 36.4831 7.10083 37.3514C7.59374 34.5646 8.7325 32.9437 9.86565 31.4211Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M8.19986 26.3617C8.37264 28.6555 6.39141 31.7608 4.66033 33.279C2.50701 31.6856 1.37872 30.2011 0.00418084 27.904C2.43277 28.7544 4.03835 30.7693 4.44919 31.7232C5.41757 29.064 6.82 27.6649 8.19986 26.3617Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M8.28903 21.7442C7.78471 23.9885 4.98331 26.3802 2.88443 27.327C1.29005 25.1744 0.644237 23.4252 8.47112e-05 20.827C2.07467 22.3492 3.02217 24.745 3.13665 25.7773C4.83909 23.5166 6.58886 22.5878 8.28903 21.7442Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M9.55975 17.4716C8.48489 19.5053 5.15461 21.0792 2.88095 21.4429C1.90645 18.9477 1.74162 17.0904 1.80089 14.4142C3.40402 16.4269 3.69056 18.9872 3.5305 20.0134C5.76589 18.2779 7.69791 17.8402 9.55975 17.4716Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M11.9397 13.5337C10.3942 15.2375 6.77771 15.9367 4.48486 15.7255C4.15933 13.0665 4.46006 11.2263 5.1809 8.64835C6.23505 10.9957 5.87795 13.5471 5.4685 14.5016C8.06433 13.3744 10.0446 13.4292 11.9397 13.5337Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M15.0172 10.0418C13.115 11.3353 9.43543 11.1664 7.25621 10.4229C7.56378 7.76181 8.28798 6.04359 9.5937 3.70678C10.0675 6.23593 9.12161 8.63231 8.49958 9.46407C11.2875 8.97755 13.1995 9.49556 15.0172 10.0418Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M19.1853 7.52942C17.0118 8.28269 13.5033 7.1609 11.5931 5.87535C12.5833 3.38631 13.7302 1.91609 15.5996 0.000162168C15.3981 2.56542 13.8605 5.04442 13.0433 5.68541C15.8616 5.94201 17.5727 6.52845 19.1853 7.52942Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M21.2069 1.03003C18.7359 1.03003 16.2649 2.47141 15.4413 4.11871C17.7063 3.91279 19.9714 2.67732 21.2069 1.03003Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M116.545 41.1821C114.488 42.2117 112.841 45.5063 112.427 47.7713C114.9 48.8008 116.753 49.0067 119.43 49.0067C117.453 47.3594 114.9 47.0163 113.87 47.1536C115.655 44.9572 116.135 43.0353 116.545 41.1821Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M120.431 38.6165C118.701 40.1323 117.939 43.7362 118.111 46.0324C120.764 46.4037 122.609 46.1347 125.199 45.4585C122.87 44.364 120.313 44.6771 119.352 45.07C120.524 42.494 120.503 40.5131 120.431 38.6165Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M123.208 35.4655C122.149 37.5075 122.753 41.1411 123.75 43.2169C126.356 42.5961 127.976 41.6734 130.141 40.1C127.574 39.9292 125.307 41.1524 124.554 41.8686C124.707 39.0428 123.966 37.2056 123.208 35.4655Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M125.215 31.4211C124.648 33.6502 126.061 37.0518 127.503 38.8471C129.9 37.6509 131.268 36.3844 133.02 34.3603C130.481 34.777 128.55 36.4831 127.98 37.3514C127.487 34.5646 126.349 32.9437 125.215 31.4211Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M126.885 26.3613C126.712 28.655 128.693 31.7603 130.424 33.2786C132.578 31.6851 133.706 30.2006 135.081 27.9036C132.652 28.7539 131.046 30.7688 130.636 31.7227C129.667 29.0635 128.265 27.6644 126.885 26.3613Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M126.792 21.744C127.296 23.9883 130.098 26.38 132.197 27.3268C133.791 25.1741 134.437 23.4249 135.081 20.8267C133.006 22.349 132.059 24.7447 131.944 25.777C130.242 23.5164 128.492 22.5876 126.792 21.744Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M125.521 17.4716C126.596 19.5053 129.927 21.0792 132.2 21.4429C133.175 18.9477 133.339 17.0904 133.28 14.4142C131.677 16.4269 131.391 18.9872 131.551 20.0134C129.315 18.2779 127.383 17.8402 125.521 17.4716Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M123.141 13.5334C124.687 15.2372 128.303 15.9365 130.596 15.7252C130.922 13.0663 130.621 11.2261 129.9 8.64811C128.846 10.9954 129.203 13.5469 129.613 14.5014C127.017 13.3742 125.037 13.429 123.141 13.5334Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M120.064 10.0411C121.966 11.3346 125.646 11.1656 127.825 10.4222C127.517 7.76108 126.793 6.04285 125.487 3.70605C125.014 6.2352 125.96 8.63158 126.582 9.46334C123.794 8.97682 121.882 9.49482 120.064 10.0411Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M115.896 7.52918C118.069 8.28245 121.578 7.16065 123.488 5.8751C122.498 3.38607 121.351 1.91585 119.482 -8.19728e-05C119.683 2.56518 121.221 5.04418 122.038 5.68516C119.219 5.94176 117.508 6.52821 115.896 7.52918Z",
                        fill: "currentcolor"
                    }), (0, s.jsx)("path", {
                        d: "M113.871 1.0293C116.342 1.0293 118.812 2.47068 119.636 4.11797C117.371 3.91206 115.106 2.67659 113.871 1.0293Z",
                        fill: "currentcolor"
                    })]
                }),
                c = e => (0, s.jsxs)(C.I, {
                    viewBox: "0 0 185 25",
                    ...e,
                    width: "185px",
                    height: "25px",
                    children: [(0, s.jsx)("g", {
                        clipPath: "url(#clip0_78_55633)",
                        children: (0, s.jsx)("path", {
                            d: "M13.8 2.8999C13.8 0.899902 11.9 0.399902 10.4 0.399902V0.699902C11.3 0.699902 12 0.999902 12 1.6999C12 2.0999 11.7 2.6999 10.8 2.6999C10.1 2.6999 8.6 2.2999 7.5 1.8999C6.2 1.3999 5 0.999902 4 0.999902C2 0.999902 0.6 2.4999 0.6 4.1999C0.6 5.6999 1.7 6.1999 2.1 6.3999L2.2 6.1999C2 5.9999 1.7 5.7999 1.7 5.1999C1.7 4.7999 2.1 4.0999 3.1 4.0999C4 4.0999 5.2 4.4999 6.8 4.9999C8.2 5.3999 9.7 5.6999 10.5 5.7999V8.8999L9 10.1999V10.2999L10.5 11.5999V15.8999C9.7 16.3999 8.8 16.4999 8 16.4999C6.5 16.4999 5.2 16.0999 4.1 14.8999L8.2 12.8999V5.9999L3.2 8.1999C3.6 6.8999 4.7 5.9999 5.8 5.3999L5.7 5.0999C2.7 5.8999 0 8.6999 0 12.0999C0 16.0999 3.3 19.0999 7 19.0999C11 19.0999 13.6 15.8999 13.6 12.5999H13.4C12.8 13.8999 11.9 15.0999 10.8 15.6999V11.5999L12.4 10.2999V10.1999L10.8 8.8999V5.7999C12.3 5.7999 13.8 4.7999 13.8 2.8999ZM5.1 13.8999L3.9 14.4999C3.2 13.5999 2.8 12.3999 2.8 10.6999C2.8 9.9999 2.8 9.1999 3 8.5999L5.1 7.6999V13.8999ZM15.7 16.1999L14.4 17.1999L14.6 17.3999L15.2 16.8999L17.4 18.8999L20.4 16.8999L20.3 16.6999L19.5 17.1999L18.5 16.1999V9.3999L19.3 8.7999L21 10.1999V16.2999C21 20.0999 20.2 20.6999 18.5 21.2999V21.5999C21.3 21.6999 23.9 20.7999 23.9 15.8999V9.2999L24.8 8.5999L24.6 8.3999L23.8 8.9999L21.3 6.8999L18.5 8.9999V0.799902H18.3L14.8 3.1999V3.3999C15.2 3.5999 15.8 3.7999 15.8 4.8999L15.7 16.1999ZM34 15.0999L31.5 16.9999L29 14.9999V13.7999L33.7 10.5999V10.4999L31.3 6.8999L26.1 9.6999V16.2999L25.1 17.0999L25.3 17.2999L26.2 16.5999L29.6 19.0999L34.1 15.4999L34 15.0999ZM29 13.3999V8.4999L29.2 8.3999L31.4 11.8999L29 13.3999ZM53.1 1.9999C53.1 1.6999 53 1.3999 52.9 1.0999H52.7C52.4 1.8999 52 2.2999 51 2.2999C50.1 2.2999 49.5 1.7999 49.1 1.3999L46.2 4.6999L46.4 4.8999L47.4 3.9999C48 4.4999 48.5 4.8999 49.9 4.9999V13.2999L44 3.1999C43.5 2.3999 42.8 1.2999 41.4 1.2999C39.8 1.2999 38.4 2.6999 38.6 4.8999H38.9C39 4.2999 39.3 3.5999 40 3.5999C40.5 3.5999 41 4.0999 41.3 4.5999V7.8999C39.5 7.8999 38.3 8.6999 38.3 10.1999C38.3 10.9999 38.7 12.1999 39.9 12.4999V12.2999C39.7 12.0999 39.6 11.8999 39.6 11.5999C39.6 11.0999 40 10.6999 40.7 10.6999H41.2V14.8999C39.1 14.8999 37.4 16.0999 37.4 18.0999C37.4 19.9999 39 20.8999 40.8 20.7999V20.5999C39.7 20.4999 39.2 19.9999 39.2 19.2999C39.2 18.3999 39.8 17.9999 40.6 17.9999C41.4 17.9999 42.1 18.4999 42.6 19.0999L45.5 15.8999L45.3 15.6999L44.6 16.4999C43.5 15.4999 42.9 15.1999 41.6 14.9999V4.9999L49.6 18.9999H50.2V4.9999C51.7 4.8999 53.1 3.6999 53.1 1.9999ZM60.4 15.0999L57.9 16.9999L55.4 14.9999V13.7999L60.1 10.5999V10.4999L57.7 6.8999L52.5 9.6999V16.2999L51.5 17.0999L51.7 17.2999L52.6 16.5999L56 19.0999L60.5 15.4999L60.4 15.0999ZM55.4 13.3999V8.4999L55.6 8.3999L57.8 11.8999L55.4 13.3999ZM76.7 7.9999L76 8.4999L74.1 6.8999L71.9 8.8999L72.8 9.7999V17.2999L70.4 15.7999V9.5999L71.2 9.0999L68.9 6.8999L66.7 8.8999L67.6 9.7999V16.9999L67.3 17.1999L65.2 15.6999V9.6999C65.2 8.2999 64.5 7.8999 63.7 7.3999C63 6.8999 62.6 6.5999 62.6 5.8999C62.6 5.2999 63.2 4.9999 63.5 4.7999V4.5999C62.7 4.5999 60.6 5.3999 60.6 7.2999C60.6 8.2999 61.1 8.6999 61.6 9.1999C62.1 9.6999 62.6 10.0999 62.6 10.9999V16.7999L61.5 17.5999L61.7 17.7999L62.7 16.9999L65 18.9999L67.5 17.2999L70.3 18.9999L75.6 15.8999V9.1999L76.9 8.1999L76.7 7.9999ZM95.3 2.4999L94.3 3.3999L92.1 1.3999L88.8 3.7999V1.5999H88.5L88.6 17.7999C88.3 17.7999 87.4 17.5999 86.7 17.3999L86.5 3.8999C86.5 2.8999 85.8 1.4999 84 1.4999C82.2 1.4999 81 2.8999 81 4.2999H81.3C81.4 3.6999 81.7 3.1999 82.3 3.1999C82.9 3.1999 83.4 3.5999 83.4 4.8999V8.7999C81.6 8.8999 80.5 9.8999 80.5 11.1999C80.5 11.9999 80.9 13.1999 82.1 13.1999V12.9999C81.7 12.7999 81.6 12.4999 81.6 12.2999C81.6 11.6999 82.1 11.4999 82.9 11.4999H83.3V17.6999C81.8 18.1999 81.2 19.2999 81.2 20.4999C81.2 22.1999 82.5 23.3999 84.5 23.3999C85.9 23.3999 87.1 23.1999 88.3 22.8999C89.3 22.6999 90.6 22.3999 91.2 22.3999C92 22.3999 92.3 22.7999 92.3 23.2999C92.3 23.9999 92 24.2999 91.6 24.3999V24.5999C93.2 24.2999 94.2 23.2999 94.2 21.7999C94.2 20.2999 92.7 19.3999 91.1 19.3999C90.3 19.3999 88.6 19.6999 87.4 19.8999C86 20.1999 84.6 20.3999 84.2 20.3999C83.5 20.3999 82.7 20.0999 82.7 19.0999C82.7 18.2999 83.4 17.5999 85.1 17.5999C86 17.5999 87.1 17.6999 88.2 17.9999C89.4 18.2999 90.5 18.5999 91.5 18.5999C93 18.5999 94.3 18.0999 94.3 15.9999V3.6999L95.5 2.6999L95.3 2.4999ZM91.2 8.5999C90.9 8.8999 90.5 9.1999 90 9.1999C89.5 9.1999 89 8.8999 88.8 8.5999V4.1999L89.8 3.4999L91.2 4.7999V8.5999ZM91.2 11.5999C91 11.3999 90.5 11.0999 90 11.0999C89.5 11.0999 89 11.3999 88.8 11.5999V8.9999C89 9.1999 89.5 9.4999 90 9.4999C90.5 9.4999 91 9.1999 91.2 8.9999V11.5999ZM91.2 16.2999C91.2 17.0999 90.7 17.8999 89.6 17.8999H88.8V11.9999C89 11.7999 89.5 11.4999 90 11.4999C90.5 11.4999 90.9 11.7999 91.2 11.9999V16.2999ZM104.9 9.1999L101.7 6.8999L96.8 9.6999V16.1999L95.8 16.9999L95.9 17.1999L96.7 16.5999L99.9 18.9999L104.9 15.9999V9.1999ZM99.5 15.4999V8.2999L102 10.0999V17.1999L99.5 15.4999ZM114.4 7.0999H114.2C113.9 7.2999 113.6 7.4999 113.3 7.4999C112.9 7.4999 112.4 7.2999 112.2 6.9999H112L110.3 8.8999L108.6 6.9999L105.6 8.9999L105.7 9.1999L106.5 8.6999L107.5 9.7999V16.0999L106.2 17.0999L106.4 17.2999L107 16.7999L109.4 18.7999L112.5 16.6999L112.4 16.4999L111.5 16.9999L110.3 15.9999V8.9999C110.8 9.4999 111.4 9.9999 112.1 9.9999C113.5 10.0999 114.3 8.6999 114.4 7.0999ZM126.4 16.6999L123 18.9999L118.4 11.9999L121.7 6.8999H121.9C122.3 7.2999 122.9 7.6999 123.6 7.6999C124.3 7.6999 124.8 7.2999 125.1 6.8999H125.3C125.2 8.8999 123.8 10.0999 122.8 10.0999C121.8 10.0999 121.3 9.5999 120.7 9.2999L120.4 9.7999L125.4 17.1999L126.4 16.5999V16.6999ZM115.4 16.1999L114.1 17.1999L114.3 17.3999L114.9 16.8999L117.1 18.8999L120.1 16.8999L119.9 16.6999L119.1 17.1999L118.1 16.1999V0.799902H118L114.4 3.1999V3.3999C114.8 3.5999 115.4 3.6999 115.4 4.8999V16.1999ZM143 2.8999C143 0.899902 141.1 0.399902 139.6 0.399902V0.699902C140.5 0.699902 141.2 0.999902 141.2 1.6999C141.2 2.0999 140.9 2.6999 140 2.6999C139.3 2.6999 137.8 2.2999 136.7 1.8999C135.4 1.4999 134.2 1.0999 133.2 1.0999C131.2 1.0999 129.8 2.5999 129.8 4.2999C129.8 5.7999 130.9 6.2999 131.3 6.4999L131.4 6.2999C131.1 6.0999 130.8 5.8999 130.8 5.2999C130.8 4.8999 131.2 4.1999 132.2 4.1999C133.1 4.1999 134.3 4.5999 135.9 5.0999C137.3 5.4999 138.8 5.7999 139.6 5.8999V8.9999L138.1 10.2999V10.3999L139.6 11.6999V15.9999C138.8 16.4999 137.9 16.5999 137.1 16.5999C135.6 16.5999 134.3 16.1999 133.2 14.9999L137.3 12.9999V5.9999L132.3 8.1999C132.8 6.8999 133.9 5.9999 134.9 5.2999L134.8 5.0999C131.8 5.8999 129.1 8.5999 129.1 11.9999C129.1 15.9999 132.4 18.9999 136.1 18.9999C140.1 18.9999 142.7 15.7999 142.7 12.4999H142.5C141.9 13.7999 141 14.9999 139.9 15.5999V11.4999L141.5 10.1999V10.0999L140 8.7999V5.7999C141.5 5.7999 143 4.7999 143 2.8999ZM134.3 13.8999L133.1 14.4999C132.4 13.5999 132 12.3999 132 10.6999C132 9.9999 132.1 9.1999 132.3 8.5999L134.4 7.6999L134.3 13.8999ZM146.5 1.8999H146.4L144.4 3.5999V3.6999L146.1 5.5999H146.3L148.3 3.8999V3.7999L146.5 1.8999ZM149.5 16.6999L148.7 17.1999L147.7 16.1999V9.2999L148.7 8.5999L148.5 8.3999L147.8 8.9999L146 6.8999L143.1 8.8999L143.3 9.1999L144 8.6999L144.9 9.7999V16.2999L143.6 17.2999L143.7 17.4999L144.4 16.9999L146.6 18.9999L149.6 16.9999L149.5 16.6999ZM166.2 16.5999L165.5 17.0999L164.4 16.0999V9.2999L165.4 8.4999L165.2 8.2999L164.4 8.9999L162.1 6.8999L159.1 8.9999L156.8 6.8999L154 8.9999L152.2 6.8999L149.3 8.8999L149.4 9.1999L150.1 8.6999L151.1 9.7999V16.2999L150.3 17.0999L152.6 18.9999L154.8 16.9999L153.9 16.0999V9.2999L154.8 8.6999L156.3 10.0999V16.0999L155.5 16.8999L157.8 18.7999L160 16.7999L159.1 15.8999V9.2999L159.9 8.7999L161.5 10.1999V16.1999L160.8 16.8999L163.1 18.9999L166.2 16.8999V16.5999ZM174.9 15.0999L172.4 16.9999L169.9 14.9999V13.7999L174.6 10.5999V10.4999L172.2 6.8999L167 9.6999V16.4999L170.5 18.9999L175 15.3999L174.9 15.0999ZM169.9 13.3999V8.4999L170.1 8.3999L172.3 11.8999L169.9 13.3999ZM184 12.4999L182.1 10.9999C183.4 9.8999 183.9 8.3999 183.9 7.3999V6.7999H183.7C183.5 7.2999 183.1 7.7999 182.3 7.7999C181.5 7.7999 181 7.3999 180.5 6.7999L176 9.2999V12.8999L177.7 14.1999C176 15.6999 175.7 16.6999 175.7 17.4999C175.7 18.4999 176.2 19.1999 177 19.4999L177.1 19.2999C176.9 19.0999 176.7 18.9999 176.7 18.4999C176.7 18.1999 177.1 17.6999 177.9 17.6999C178.9 17.6999 179.5 18.3999 179.8 18.6999L184.1 16.0999V12.4999H184ZM182.9 9.4999C182.2 10.6999 180.7 11.8999 179.8 12.4999L178.7 11.5999V8.0999C179.1 9.0999 180.2 9.8999 181.3 9.8999C182 9.8999 182.4 9.7999 182.9 9.4999ZM181.2 17.4999C180.7 16.3999 179.5 15.5999 178.3 15.5999C178 15.5999 177.2 15.5999 176.4 16.0999C176.9 15.2999 178.2 13.8999 179.9 12.8999L181.1 13.8999L181.2 17.4999Z",
                            fill: "currentcolor"
                        })
                    }), (0, s.jsx)("defs", {
                        children: (0, s.jsx)("clipPath", {
                            id: "clip0_78_55633",
                            children: (0, s.jsx)("rect", {
                                width: "185",
                                height: "25",
                                fill: "currentcolor"
                            })
                        })
                    })]
                }),
                u = e => (0, s.jsx)(C.I, {
                    width: "170px",
                    height: "27px",
                    viewBox: "0 0 170 27",
                    fill: "none",
                    maxW: "100%",
                    xmlns: "http://www.w3.org/2000/svg",
                    color: "white",
                    ...e,
                    children: (0, s.jsx)("path", {
                        d: "M31.2922 10.5102C29.3856 10.5102 27.7729 11.956 25.7312 14.7365C24.7938 16.0393 23.5863 17.9142 23.054 18.7086C22.7522 19.1137 22.5138 19.0502 22.6807 18.6132L24.0947 14.9907L29.1472 1.08835C29.3935 0.516372 27.3757 -0.174772 27.0102 0.516372V0.58787C26.1443 2.43092 24.5317 3.03468 21.6479 2.93141C18.7642 2.82813 12.9649 1.23135 8.57973 1.23135C3.08235 1.23135 0 4.61557 0 8.60356C0 10.8438 1.46968 12.2182 3.44778 12.2182C3.88756 12.2542 4.3253 12.1278 4.67813 11.8628C5.03096 11.5978 5.27439 11.2127 5.36233 10.7803C5.40515 10.6131 5.40179 10.4374 5.3526 10.272C5.3034 10.1066 5.21023 9.95761 5.08301 9.84099C4.95579 9.72437 4.7993 9.64448 4.63024 9.60983C4.46117 9.57518 4.28587 9.58708 4.12304 9.64425C2.17671 10.0494 1.5094 8.70683 1.5094 7.66614C1.5094 5.18756 3.62255 3.3445 8.03952 3.3445C9.17554 3.3445 11.392 3.61461 13.7355 3.87677C10.7564 12.8537 7.73764 21.1713 6.99883 23.1414C6.92945 23.4063 6.79502 23.6497 6.60773 23.8495C6.42045 24.0492 6.18624 24.1991 5.92637 24.2854C4.86184 24.619 4.52024 24.6508 3.85293 24.8177C2.84402 25.056 3.01085 25.8901 3.71788 25.8583C4.98895 25.7868 6.6334 25.62 7.93625 25.62C9.52509 25.62 12.3929 25.7551 12.8299 25.7868C13.6243 25.8583 13.7355 24.8812 13.0682 24.7859C12.5995 24.7144 11.8289 24.5873 11.0901 24.484C10.2162 24.3807 9.95407 24.0153 10.1527 23.3083C10.5896 22.1405 15.7136 7.33249 16.7225 4.2422C18.3114 4.4408 19.6698 4.57585 20.5675 4.63941C22.4185 4.75063 24.198 4.63941 25.7312 3.51928L21.6797 14.9589L18.1286 24.7541C17.5249 26.3429 19.7969 26.4621 20.3054 25.4929C22.0301 22.0463 24.0586 18.7603 26.3668 15.6739C27.8444 13.529 29.2187 12.2499 30.1879 12.2499C30.9267 12.2499 31.3557 12.6551 31.3557 13.5607C31.3557 14.7683 30.7917 16.6431 29.6477 19.8287C28.1463 23.9835 27.5743 25.0878 27.0738 25.1195C26.5733 25.1513 25.5962 23.912 25.0639 23.777C24.8131 23.7013 24.5435 23.7173 24.3034 23.8221C24.0633 23.9269 23.8683 24.1136 23.7531 24.3489C23.483 24.8177 23.6578 26.327 25.9298 26.4303C28.6468 26.5574 30.9585 23.777 32.5632 19.3282C33.6675 16.3094 33.9376 14.7683 33.9376 13.664C33.9376 11.5191 32.9366 10.5102 31.2922 10.5102ZM77.289 24.8812C75.581 24.484 74.9058 23.8485 74.9058 23.1732L74.9773 21.7671C74.9773 20.7343 75.7717 5.48944 75.9465 3.20945C76.0815 1.53323 74.167 1.62062 73.3646 2.60569L71.7758 4.64735C69.8215 7.09416 61.9647 17.2468 58.1276 22.0054C57.0494 23.3166 55.6272 24.3014 54.0205 24.8494C53.385 25.0163 53.4485 25.6915 54.1556 25.6915C54.7196 25.6915 56.3958 25.4929 57.6351 25.4929C58.8744 25.4929 61.1544 25.5882 61.7264 25.62C62.2983 25.6518 62.5208 25.0163 61.7264 24.8256C60.1375 24.3569 59.3431 24.0312 59.3431 23.6181C59.3431 23.205 59.7085 22.6489 60.5824 21.4414C61.2497 20.504 62.8544 18.3908 64.6339 16.0473H72.2921C72.1253 19.2647 71.9267 22.6489 71.8949 23.3162C71.8986 23.5301 71.8264 23.7384 71.6912 23.9042C71.5559 24.0699 71.3664 24.1825 71.1561 24.2218L69.4481 24.7223C68.9794 24.8574 68.7729 25.7312 69.5117 25.6995C71.1879 25.5962 72.594 25.4611 73.3328 25.4611C74.4371 25.4611 76.3119 25.6995 77.1858 25.7312C78.0596 25.763 77.9325 25.056 77.289 24.8812ZM72.5225 12.5915C72.5225 13.1953 72.451 13.8626 72.4192 14.5696H65.8653C68.9159 10.5419 72.1333 6.32358 72.4034 5.91842C72.6735 5.51327 72.9356 5.71982 72.9038 6.0217C72.8006 7.49932 72.6337 10.2083 72.5066 12.5915H72.5225ZM43.7566 10.7485C40.8411 10.6134 37.5919 13.9977 36.0507 19.0899C34.5413 24.0153 36.2176 26.0569 38.0606 26.0569C39.4032 26.0569 41.6434 24.3172 42.8827 22.3073C43.3197 21.6003 42.986 20.8614 42.3187 21.6003C41.4766 22.5059 40.3406 23.4751 39.141 23.2447C38.3466 23.1097 37.5999 21.7353 38.7756 18.3193C41.5878 18.1843 44.9006 16.5795 45.7427 13.9262C46.4735 11.6382 44.9641 10.7803 43.7566 10.7485ZM44.0585 13.2271C43.3515 15.3005 40.8808 17.0403 39.1013 17.4772C40.8093 12.957 42.4458 11.7495 43.4865 11.7812C44.0585 11.7812 44.3286 12.4327 44.0585 13.2271ZM86.9094 12.4327H89.6264C90.2301 12.4327 90.532 12.2658 90.6591 11.8289C90.8974 11.2569 90.7624 10.9868 90.1586 10.9868H87.4417L88.7525 7.50726C88.9193 7.03855 88.7525 6.80023 88.4824 6.80023H87.0763C86.7108 6.80023 86.5758 6.9035 86.409 7.37221L85.0028 11.0106H82.8579C82.556 11.0106 82.3177 10.9471 82.1191 11.8527C82.0476 12.2897 82.1191 12.4565 82.556 12.4565H84.4626L81.2135 20.9329C80.6987 22.1469 80.2505 23.388 79.8709 24.6508C79.6723 25.8266 80.3793 26.2953 81.2452 26.1284C82.9532 25.8266 85.4001 24.0471 87.6006 21.2666C88.2044 20.4722 87.7039 19.9638 87.1001 20.5993C86.1885 21.5035 85.2142 22.3424 84.1846 23.1097C83.3107 23.6816 82.8817 23.2765 83.1836 22.4423L86.9094 12.4327ZM117.129 11.6382C117.328 11.1695 116.66 11.0345 115.119 10.7405C114.651 10.6373 114.38 11.1378 113.578 12.814C113.244 12.41 112.816 12.0949 112.331 11.8967C111.845 11.6985 111.319 11.6234 110.798 11.678C108.351 11.7415 105.332 13.95 102.853 17.3342C100.875 20.0511 100.272 21.926 100.645 23.9358C100.755 24.5029 101.059 25.0137 101.506 25.3794C101.953 25.7451 102.514 25.9427 103.092 25.9378C104.935 26.0013 106.778 24.2616 108.653 22.347L109.828 21.1713C110.162 20.8376 110.464 21.0362 110.257 21.4414C109.652 22.4947 109.149 23.6041 108.756 24.7541C108.518 25.9298 109.153 26.2317 110.059 26.0967C111.799 25.8663 114.516 24.2536 116.597 21.3778C117.193 20.5357 116.597 20.067 116.057 20.7026C115.148 21.6651 114.15 22.5402 113.078 23.3162C112.172 23.92 111.767 23.7531 112.037 23.0461C112.172 22.6092 112.672 21.4017 117.129 11.6382ZM109.392 20.3769C107.278 22.3232 105.57 23.7293 104.395 23.7293C103.6 23.7293 103.227 23.3877 103.155 22.8237C102.957 21.346 104.299 19.1058 105.404 17.5964C107.31 15.086 109.662 13.0046 111.163 13.0046C112.204 13.0046 112.752 13.4416 112.839 14.0771C113.038 15.237 111.1 18.788 109.392 20.3292V20.3769ZM155.929 10.2798C154.284 10.2798 152.076 11.4476 149.994 13.7593C149.327 14.5538 149.827 15.0701 150.463 14.4981C151.17 13.8516 151.933 13.2694 152.743 12.7584C153.45 12.3214 153.919 12.6551 153.712 13.2906C153.545 13.7991 153.045 15.0384 152.679 15.8725L150.399 21.0998C149.764 22.5774 149.16 24.0471 149.025 24.4522C148.723 25.4929 149.255 26.0411 150.098 26.0411C151.686 26.0411 153.887 24.7303 155.992 22.3867C156.659 21.5923 156.159 21.0839 155.523 21.6479C154.743 22.3408 153.915 22.9779 153.045 23.5545C152.346 23.9835 151.837 23.6499 152.076 23.0143C152.242 22.5456 152.743 21.4731 153.077 20.7026L155.388 15.4753C156.064 13.9341 156.834 12.2976 156.977 11.8607C157.231 10.8438 156.731 10.2798 155.929 10.2798ZM157.938 2.16876C157.447 2.13755 156.963 2.29818 156.589 2.6168C156.214 2.93541 155.977 3.38713 155.929 3.87677C155.888 4.10221 155.895 4.33362 155.948 4.55643C156.001 4.77924 156.1 4.98863 156.238 5.17144C156.376 5.35424 156.55 5.50651 156.75 5.61866C156.95 5.73081 157.17 5.80041 157.398 5.82309C157.877 5.83906 158.345 5.67631 158.711 5.3665C159.076 5.05668 159.314 4.62195 159.376 4.14687C159.423 3.92141 159.422 3.68867 159.374 3.46358C159.325 3.23848 159.23 3.02599 159.095 2.83975C158.96 2.6535 158.787 2.4976 158.588 2.38205C158.388 2.26651 158.167 2.19386 157.938 2.16876ZM167.217 10.7803C164.27 10.6452 161.116 14.0612 159.575 19.0899C158.034 24.1186 159.71 26.0569 161.656 26.0569C162.999 26.0569 165.239 24.4681 166.582 22.3073C167.019 21.6003 166.685 20.8614 166.01 21.6003C165.176 22.5059 164.103 23.34 162.999 23.2765C161.895 23.2129 161.116 21.6876 162.395 18.0174C164.27 12.7266 165.573 12.1228 166.145 12.0831C166.717 12.0434 167.885 13.5607 168.592 13.7276C168.84 13.8067 169.109 13.7933 169.349 13.6896C169.588 13.5859 169.782 13.399 169.894 13.1635C170.196 12.5915 170.006 10.9153 167.217 10.7803ZM148.191 11.0106H145.474L146.777 7.53109C146.952 7.06239 146.777 6.82406 146.515 6.82406H145.101C144.735 6.82406 144.6 6.92733 144.433 7.39604L143.059 11.0106H140.882C140.58 11.0106 140.35 10.9471 140.143 11.8527C140.08 12.2897 140.183 12.4565 140.58 12.4565H142.495L139.246 20.9329C138.727 22.1455 138.279 23.3868 137.903 24.6508C137.697 25.8266 138.404 26.2953 139.278 26.1284C140.986 25.8266 143.432 24.0471 145.633 21.2666C146.237 20.4722 145.736 19.9638 145.124 20.5993C144.21 21.504 143.233 22.3428 142.201 23.1097C141.327 23.6816 140.89 23.2765 141.192 22.4423L144.934 12.4327H147.651C148.254 12.4327 148.556 12.2658 148.691 11.8289C148.922 11.2808 148.787 11.0106 148.191 11.0106ZM97.6659 20.4642C96.716 21.4084 95.7078 22.292 94.6471 23.1097C93.7732 23.6816 93.3442 23.2765 93.6461 22.4423L101.821 0.794419C101.956 0.460763 101.884 0 101.416 0C99.8185 0.0980337 98.2275 0.278341 96.649 0.540205C96.3789 0.603758 96.2439 1.00891 96.5458 1.10424L98.357 1.7795C98.7225 1.91455 98.7622 2.08138 98.5239 2.68514L91.5012 20.9329C90.9828 22.1455 90.5346 23.3868 90.1586 24.6508C89.96 25.8266 90.6591 26.2953 91.533 26.1284C93.3442 25.8266 95.9182 24.0471 98.1664 21.1315C98.7701 20.3292 98.2696 19.8287 97.6659 20.4642ZM132.136 20.5278L134.114 16.5557C135.186 14.379 135.393 13.378 135.393 12.6392C135.393 11.2013 134.654 10.4625 133.145 10.4625C131.031 10.4625 129.355 12.1387 126.789 15.7533C126.082 16.7225 125.614 17.4613 124.676 18.6688C124.374 19.0422 124.144 19.0025 124.311 18.5656L125.614 15.3164C126.133 14.1877 126.494 12.9927 126.686 11.7653C126.686 10.8994 126.321 10.4943 125.383 10.4943C124.239 10.4943 122.801 11.098 120.291 14.2837C119.385 15.4515 120.291 15.5865 120.593 15.2211C121.093 14.7126 122.182 13.5766 122.905 12.9411C123.628 12.3056 124.271 12.5042 124.009 13.2747C123.836 13.881 123.623 14.4754 123.373 15.0542L119.401 24.8018C118.861 26.1443 121.411 26.4462 121.848 25.4373C123.222 22.2596 126.233 18.2875 127.472 16.5239C129.284 13.9421 130.857 12.1705 131.993 12.1705C132.596 12.1705 132.867 12.5042 132.867 13.1397C132.807 13.6932 132.648 14.2314 132.398 14.7285L129.586 20.7264C128.791 22.3152 128.044 24.0073 127.909 24.4443C127.576 25.485 128.148 26.0331 129.045 26.0331C130.634 26.0331 132.835 24.7223 134.948 22.3788C135.615 21.5844 135.115 21.0759 134.479 21.64C133.697 22.3336 132.869 22.9733 132.001 23.5545C131.27 24.0232 130.761 23.6499 131 22.9825C131.167 22.5059 131.77 21.2666 132.136 20.5278Z",
                        fill: "currentcolor"
                    })
                });
            var h = t(81714),
                m = t(18840),
                p = t.n(m),
                x = t(70501),
                f = t(5732),
                b = t(26410),
                j = t(11074),
                v = t(73699);
            let L = e => {
                    let {
                        color: a = "white"
                    } = e;
                    return (0, s.jsxs)(l.T, {
                        alignItems: "center",
                        flex: {
                            base: "1",
                            "2xl": "unset"
                        },
                        minW: {
                            "2xl": "272px"
                        },
                        children: [(0, s.jsx)(h.l, {
                            color: a,
                            height: {
                                base: "24px",
                                lg: "28px"
                            }
                        }), (0, s.jsx)(n.E, {
                            fontSize: "md",
                            align: {
                                base: "start",
                                md: "center",
                                lg: "left"
                            },
                            color: a,
                            textAlign: "center",
                            children: (0, s.jsx)(i.A, {
                                defaultMessage: "Over 100,000 5-star app reviews",
                                id: "p6gMbx"
                            })
                        })]
                    })
                },
                M = () => {
                    let e = (0, v.N)("colors", "gray.100").reference;
                    return (0, s.jsxs)(l.T, {
                        w: "full",
                        py: {
                            base: 16,
                            md: 20
                        },
                        px: {
                            base: 5,
                            md: 8
                        },
                        gap: {
                            base: "48px",
                            xl: "72px"
                        },
                        background: (0, j.YI)(55, [{
                            color: e,
                            percent: 25
                        }, {
                            color: "white",
                            percent: 70
                        }]),
                        children: [(0, s.jsx)(o.D, {
                            textAlign: "center",
                            fontWeight: "medium",
                            style: { ...p().style,
                                fontVariantNumeric: "lining-nums"
                            },
                            fontSize: {
                                base: "4xl",
                                lg: "5xl"
                            },
                            letterSpacing: "tight",
                            color: "text.primary",
                            children: (0, s.jsx)(i.A, {
                                defaultMessage: "Join over 10 million learners worldwide",
                                id: "Ez2dr6"
                            })
                        }), (0, s.jsxs)(x.s, {
                            display: {
                                base: "flex",
                                xl: "none"
                            },
                            direction: {
                                base: "column",
                                lg: "row"
                            },
                            gap: {
                                base: 16,
                                lg: 9
                            },
                            children: [(0, s.jsx)(L, {
                                color: "gray.400",
                                minW: "unset"
                            }), (0, s.jsxs)(l.T, {
                                gap: 4,
                                children: [(0, s.jsx)(c, {
                                    color: "gray.400"
                                }), (0, s.jsx)(u, {
                                    color: "gray.400"
                                })]
                            }), (0, s.jsxs)(f.z, {
                                gap: 6,
                                children: [(0, s.jsx)(g, {
                                    color: "gray.400"
                                }), (0, s.jsx)(d, {
                                    color: "gray.400"
                                })]
                            })]
                        }), (0, s.jsxs)(f.z, {
                            display: {
                                base: "none",
                                xl: "flex"
                            },
                            w: "full",
                            maxW: "container.lg",
                            justifyContent: "space-between",
                            alignItems: "center",
                            divider: (0, s.jsx)(b.G, {
                                borderColor: "gray.200",
                                my: "-24px !important"
                            }),
                            gap: 4,
                            children: [(0, s.jsx)(c, {
                                color: "gray.400",
                                flex: 1
                            }), (0, s.jsx)(u, {
                                color: "gray.400",
                                flex: 1
                            }), (0, s.jsx)(L, {
                                color: "gray.400",
                                flex: 1,
                                minW: "unset"
                            }), (0, s.jsx)(g, {
                                color: "gray.400",
                                flex: 1
                            }), (0, s.jsx)(d, {
                                color: "gray.400",
                                flex: 1
                            })]
                        })]
                    })
                },
                y = () => (0, s.jsxs)(r.B, {
                    direction: "column",
                    gap: "2",
                    alignItems: "center",
                    flex: {
                        base: "1",
                        "2xl": "unset"
                    },
                    minW: {
                        "2xl": "328px"
                    },
                    children: [(0, s.jsx)(c, {
                        height: {
                            base: "30px",
                            lg: "36px"
                        },
                        color: "white"
                    }), (0, s.jsx)(u, {
                        height: {
                            base: "22px",
                            lg: "28px"
                        },
                        color: "white"
                    })]
                }),
                w = e => {
                    let {
                        color: a = "white"
                    } = e;
                    return (0, s.jsxs)(l.T, {
                        alignItems: "center",
                        flex: {
                            base: "1",
                            "2xl": "unset"
                        },
                        minW: {
                            "2xl": "328px"
                        },
                        children: [(0, s.jsx)(h.l, {
                            color: a,
                            height: {
                                base: "24px",
                                lg: "28px"
                            }
                        }), (0, s.jsx)(n.E, {
                            fontSize: "md",
                            align: {
                                base: "start",
                                md: "center",
                                lg: "left"
                            },
                            color: a,
                            textAlign: "center",
                            children: (0, s.jsx)(i.A, {
                                defaultMessage: "Over 100,000 5-star app reviews",
                                id: "p6gMbx"
                            })
                        })]
                    })
                },
                A = () => (0, s.jsxs)(r.B, {
                    direction: "row",
                    spacing: "6",
                    alignItems: "center",
                    justify: "center",
                    flex: {
                        base: "1",
                        "2xl": "unset"
                    },
                    minW: {
                        "2xl": "328px"
                    },
                    children: [(0, s.jsx)(g, {
                        color: "white"
                    }), (0, s.jsx)(d, {
                        color: "white"
                    })]
                }),
                V = () => (0, s.jsxs)(l.T, {
                    w: "full",
                    py: {
                        base: 16,
                        md: 20
                    },
                    px: {
                        base: 5,
                        md: 8
                    },
                    gap: "72px",
                    backgroundColor: "blue.950",
                    backgroundImage: "/images/homepage/social-proof-background.svg",
                    backgroundPosition: "center",
                    children: [(0, s.jsx)(o.D, {
                        textAlign: "center",
                        fontWeight: "medium",
                        style: { ...p().style,
                            fontVariantNumeric: "lining-nums"
                        },
                        fontSize: {
                            base: "4xl",
                            lg: "5xl",
                            "2xl": "6xl"
                        },
                        letterSpacing: "tight",
                        color: "white",
                        children: (0, s.jsx)(i.A, {
                            defaultMessage: "Join over 10 million learners worldwide",
                            id: "Ez2dr6"
                        })
                    }), (0, s.jsxs)(r.B, {
                        direction: {
                            base: "column",
                            xl: "row"
                        },
                        w: "full",
                        maxW: "container.lg",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: {
                            base: "72px",
                            xl: "unset"
                        },
                        opacity: "0.8",
                        children: [(0, s.jsx)(w, {}), (0, s.jsx)(y, {}), (0, s.jsx)(A, {})]
                    })]
                })
        },
        79511: (e, a, t) => {
            t.d(a, {
                N: () => l,
                T: () => n
            });
            var s = t(21462),
                i = t(84804),
                r = t(16127);
            let l = e => {
                    let [a, t] = (0, s.useState)();
                    return (0, s.useEffect)(() => {
                        let s = async () => {
                            try {
                                let a = await fetch(e),
                                    s = await a.arrayBuffer();
                                t(s)
                            } catch (a) {
                                if (!a) return;
                                let e = "".concat(a);
                                if ("TypeError: Load failed" === e || e.includes("AbortError")) return;
                                r.Cp("Error fetching Rive file: ".concat(e))
                            }
                        };
                        a || s()
                    }, [a, e]), a
                },
                n = (e, a) => {
                    let t = {
                        useOffscreenRenderer: !0,
                        ...a
                    };
                    return (0, i.useRive)(e ? { ...e,
                        onLoadError: a => {
                            let t = a.data;
                            "string" != typeof t || ["Problem loading file; may be corrupt!", "Attempt to use file after calling cleanup."].includes(t) || r.wd("Error loading Rive: ".concat(t)), (null == e ? void 0 : e.onLoadError) && e.onLoadError(a)
                        }
                    } : void 0, t)
                }
        },
        81714: (e, a, t) => {
            t.d(a, {
                l: () => r
            });
            var s = t(23798),
                i = t(86191);
            let r = e => (0, s.jsxs)(i.I, {
                w: "156px",
                h: "28px",
                viewBox: "0 0 156 28",
                color: "yellow.500",
                ...e,
                children: [(0, s.jsx)("path", {
                    d: "M15.2092 0.109375L19.0989 9.57724L28.7731 10.5832L21.5029 17.4407L23.5922 27.5303L15.2092 22.3005L6.82625 27.5303L8.91555 17.4407L1.64529 10.5832L11.3195 9.57724L15.2092 0.109375Z",
                    fill: "currentcolor"
                }), (0, s.jsx)("path", {
                    d: "M46.6037 0.109375L50.4934 9.57724L60.1676 10.5832L52.8974 17.4407L54.9867 27.5303L46.6037 22.3005L38.2208 27.5303L40.3101 17.4407L33.0398 10.5832L42.714 9.57724L46.6037 0.109375Z",
                    fill: "currentcolor"
                }), (0, s.jsx)("path", {
                    d: "M78.0002 0.109375L81.8899 9.57724L91.5641 10.5832L84.2939 17.4407L86.3832 27.5303L78.0002 22.3005L69.6173 27.5303L71.7066 17.4407L64.4363 10.5832L74.1105 9.57724L78.0002 0.109375Z",
                    fill: "currentcolor"
                }), (0, s.jsx)("path", {
                    d: "M109.395 0.109375L113.284 9.57724L122.959 10.5832L115.688 17.4407L117.778 27.5303L109.395 22.3005L101.012 27.5303L103.101 17.4407L95.8308 10.5832L105.505 9.57724L109.395 0.109375Z",
                    fill: "currentcolor"
                }), (0, s.jsx)("path", {
                    d: "M140.791 0.109375L144.681 9.57724L154.355 10.5832L147.085 17.4407L149.174 27.5303L140.791 22.3005L132.408 27.5303L134.498 17.4407L127.227 10.5832L136.902 9.57724L140.791 0.109375Z",
                    fill: "currentcolor"
                })]
            })
        },
        89687: (e, a, t) => {
            t.d(a, {
                $: () => r
            });
            var s = t(23798),
                i = t(86191);
            let r = e => (0, s.jsxs)(i.I, {
                width: "33px",
                height: "32px",
                viewBox: "0 0 33 32",
                fill: "none",
                maxW: "100%",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, s.jsx)("path", {
                    d: "M3.00103 2.85328C2.68367 3.17765 2.5 3.68266 2.5 4.33667V27.6647C2.5 28.3187 2.68367 28.8237 3.00103 29.1481L3.07936 29.2193L16.4682 16.1523V15.8438L3.07936 2.77681L3.00103 2.85328Z",
                    fill: "white"
                }), (0, s.jsx)("path", {
                    d: "M25.7939 20.5096L21.3359 16.1517V15.8432L25.7993 11.4853L25.8993 11.542L31.1851 14.4785C32.6936 15.3118 32.6936 16.6831 31.1851 17.5217L25.8993 20.4529L25.7939 20.5096Z",
                    fill: "white"
                }), (0, s.jsx)("path", {
                    d: "M23.4602 22.8874L18.8969 18.4319L5.42969 31.582C5.93072 32.0962 6.74777 32.1582 7.67692 31.644L23.4602 22.8874Z",
                    fill: "white"
                }), (0, s.jsx)("path", {
                    d: "M23.4602 9.10812L7.67692 0.351535C6.74777 -0.157432 5.93072 -0.0954609 5.42969 0.418779L18.8969 13.5636L23.4602 9.10812Z",
                    fill: "white"
                })]
            })
        }
    }
]);