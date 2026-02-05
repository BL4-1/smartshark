try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7a009e1c-3e71-46e8-9225-55cd4c9e46de", e._sentryDebugIdIdentifier = "sentry-dbid-7a009e1c-3e71-46e8-9225-55cd4c9e46de")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4835, 5096], {
        25069: (e, t, i) => {
            i.d(t, {
                C: () => s
            });
            var o = i(23798),
                n = i(26829);
            let s = e => (0, o.jsx)(n.az, {
                as: "video",
                autoPlay: !0,
                css: {
                    "&::-webkit-media-controls": {
                        display: "none !important"
                    },
                    "&::-webkit-media-controls-enclosure": {
                        display: "none !important"
                    },
                    "&::-webkit-media-controls-panel": {
                        width: "0px !important"
                    }
                },
                disableRemotePlayback: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                ...e
            })
        },
        25096: (e, t, i) => {
            i.d(t, {
                B: () => ee
            });
            var o = i(23798),
                n = i(21462),
                s = i(86027),
                a = i(23097),
                l = i(42469),
                r = i(62104),
                c = i(9812),
                d = i(93761),
                g = i(63223),
                u = i(86314),
                h = i(76759),
                m = i(32587),
                b = i(64724),
                p = i(56545),
                x = i(14770),
                v = i(5732),
                y = i(28439),
                f = i(86191),
                w = i(79761),
                C = i(16968),
                j = i(13234),
                S = i(10213),
                k = i(20814),
                A = i(41153),
                T = i(35451),
                I = i(6724),
                P = i(41814),
                R = i.n(P),
                W = i(54700),
                z = i(59979),
                V = i(47725),
                D = i(49081),
                E = i(88480),
                B = i(64487),
                M = i(25069),
                N = i(59951),
                G = i(11074),
                F = i(73699);
            let L = e => {
                    let {
                        courses: t
                    } = e;
                    return (0, o.jsxs)(a.A, {
                        placement: "auto-end",
                        trigger: "hover",
                        children: [(0, o.jsx)(l.W, {
                            children: (0, o.jsxs)(r.$, {
                                height: "unset",
                                borderBottom: 1,
                                borderBottomStyle: "dashed",
                                borderBottomColor: "whiteAlpha.600",
                                fontWeight: 400,
                                fontSize: "md",
                                type: "button",
                                variant: "unstyled",
                                borderRadius: "none",
                                color: "whiteAlpha.600",
                                children: [t.length, " ", (0, o.jsx)(s.A, {
                                    defaultMessage: "additional courses",
                                    id: "RaaD4u"
                                })]
                            })
                        }), (0, o.jsx)(c.h, {
                            w: "fit-content",
                            bg: "bg.inverse.secondary",
                            border: "none",
                            borderRadius: "2xl",
                            boxShadow: "center.lg",
                            children: (0, o.jsx)(d.e, {
                                as: g.x,
                                gap: 3,
                                p: 6,
                                templateColumns: "repeat(3, 1fr)",
                                children: t.map(e => (0, o.jsx)(y.E, {
                                    fontSize: {
                                        base: "sm",
                                        lg: "md"
                                    },
                                    color: "white",
                                    mb: "1",
                                    children: e.title
                                }, e.title))
                            })
                        })]
                    })
                },
                _ = e => {
                    let {
                        children: t,
                        colorScheme: i,
                        isSelected: n,
                        onClick: s
                    } = e, {
                        blackOverlay: a,
                        whiteOverlay: l
                    } = (0, N.Uf)(), {
                        selectedGradientBg: c,
                        selectedGradientBgHover: d
                    } = (0, N.a$)(i, {
                        blackOverlay: a,
                        whiteOverlay: l
                    }), g = (0, F.N)("colors", "whiteAlpha.200").reference, u = (0, F.N)("colors", "whiteAlpha.100").reference, h = (0, G.YI)(0, [{
                        color: g,
                        percent: 0
                    }, {
                        color: u,
                        percent: 100
                    }]);
                    return (0, o.jsx)(r.$, {
                        onClick: s,
                        size: {
                            base: "sm",
                            md: "md"
                        },
                        px: {
                            base: 3,
                            md: 5
                        },
                        py: {
                            base: 3,
                            md: 4
                        },
                        fontSize: {
                            base: "sm",
                            md: "md"
                        },
                        fontWeight: "medium",
                        borderRadius: "38px",
                        position: "relative",
                        zIndex: 1,
                        cursor: "pointer",
                        bg: h,
                        backgroundColor: "transparent",
                        color: n ? "text.primary" : "whiteAlpha.600",
                        borderWidth: 0,
                        sx: {
                            "&::before": {
                                background: c,
                                borderRadius: "inherit",
                                bottom: 0,
                                content: '""',
                                left: 0,
                                opacity: +!!n,
                                position: "absolute",
                                right: 0,
                                top: 0,
                                transition: "opacity 500ms ease-out",
                                zIndex: -1
                            },
                            "&:hover::before": {
                                background: n ? d : c
                            }
                        },
                        children: t
                    })
                },
                q = e => {
                    let {
                        courseGroup: t
                    } = e, i = (0, F.N)("colors", "blackAlpha.200").reference, a = (0, F.N)("colors", "whiteAlpha.200").reference, [l, c] = (0, n.useState)(!1), d = "".concat((0, G.YI)(0, [{
                        color: a,
                        percent: 0
                    }, {
                        color: a,
                        percent: 100
                    }]), ", ").concat((0, G.YI)(180, [{
                        color: i,
                        percent: 0
                    }, {
                        color: i,
                        percent: 97
                    }]));
                    return (0, o.jsx)(D.e_, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1,
                            transition: {
                                delay: .1,
                                duration: .3
                            }
                        },
                        exit: {
                            opacity: 0,
                            transition: {
                                duration: .1
                            }
                        },
                        children: (0, o.jsxs)(b.B, {
                            direction: {
                                base: "column-reverse",
                                xl: "row"
                            },
                            w: "full",
                            justifyContent: {
                                base: "center",
                                xl: "space-between"
                            },
                            alignItems: {
                                base: "center",
                                xl: "flex-start"
                            },
                            gap: {
                                base: 3,
                                xl: 2
                            },
                            bg: d,
                            borderRadius: "2xl",
                            children: [(0, o.jsx)(p.T, {
                                alignItems: "flex-start",
                                width: "full",
                                mt: {
                                    base: 5,
                                    xl: 0
                                },
                                px: {
                                    base: 8,
                                    lg: 16
                                },
                                py: {
                                    base: 4,
                                    xl: 16
                                },
                                pb: "8",
                                children: (0, o.jsxs)(b.B, {
                                    direction: "column",
                                    justifyContent: {
                                        base: "center",
                                        xl: "flex-start"
                                    },
                                    alignItems: "flex-start",
                                    gap: {
                                        base: 3,
                                        xl: "4"
                                    },
                                    children: [(0, o.jsx)(y.E, {
                                        as: "h3",
                                        fontSize: {
                                            base: "md",
                                            lg: "xl"
                                        },
                                        color: "white",
                                        fontWeight: "bold",
                                        children: (0, o.jsx)(s.A, {
                                            defaultMessage: "{courseGroupTitle} Courses",
                                            id: "WwX1+f",
                                            values: {
                                                courseGroupTitle: t.title
                                            }
                                        })
                                    }), (0, o.jsx)(B.Xy, {
                                        listStyleType: "none",
                                        ml: 0,
                                        children: (l ? t.courses : t.courses.slice(0, t.coursesVisibleCount)).map(e => (0, o.jsx)(B.ck, {
                                            fontSize: "md",
                                            color: "white",
                                            mb: {
                                                base: 1,
                                                lg: 2
                                            },
                                            children: e.title
                                        }, e.title))
                                    }), t.courses.length > t.coursesVisibleCount && !l && (0, o.jsxs)(o.Fragment, {
                                        children: [(0, o.jsx)(w.w, {
                                            above: "xl",
                                            children: (0, o.jsx)(L, {
                                                courses: t.courses.slice(t.coursesVisibleCount)
                                            })
                                        }), (0, o.jsx)(w.w, {
                                            below: "xl",
                                            children: (0, o.jsx)(r.$, {
                                                height: "unset",
                                                borderBottom: 1,
                                                borderBottomStyle: "dashed",
                                                borderBottomColor: "whiteAlpha.600",
                                                fontWeight: 400,
                                                fontSize: "sm",
                                                type: "button",
                                                variant: "unstyled",
                                                borderRadius: "none",
                                                color: "whiteAlpha.600",
                                                onClick: () => c(!0),
                                                children: (0, o.jsx)(s.A, {
                                                    defaultMessage: "{coursesCount} additional courses",
                                                    id: "nAFGHZ",
                                                    values: {
                                                        coursesCount: t.courses.length - t.coursesVisibleCount
                                                    }
                                                })
                                            })
                                        })]
                                    })]
                                })
                            }), (0, o.jsx)(C.o, {
                                w: {
                                    base: "full",
                                    xl: "550px",
                                    "2xl": "700px"
                                },
                                maxW: "full",
                                h: {
                                    sm: "260px",
                                    md: "375px",
                                    xl: "456px"
                                },
                                borderRadius: "2xl",
                                backgroundColor: "white",
                                flexShrink: 0,
                                children: (0, o.jsx)(M.C, {
                                    poster: t.videoPoster,
                                    src: t.video,
                                    w: "full",
                                    h: {
                                        sm: "240px",
                                        md: "355px",
                                        xl: "430px"
                                    }
                                })
                            })]
                        })
                    })
                },
                $ = e => (0, o.jsx)(v.z, {
                    as: B.ck,
                    gap: {
                        base: 1,
                        "2xl": 3
                    },
                    ...e
                }),
                H = e => {
                    let {
                        course: t
                    } = e, i = (0, m.A)({
                        base: 20,
                        lg: 24
                    });
                    return (0, o.jsxs)($, { ...e,
                        children: [(0, o.jsx)(R(), {
                            alt: t.title,
                            height: i,
                            src: t.image,
                            width: i
                        }), (0, o.jsx)(y.E, {
                            fontSize: {
                                base: 12,
                                lg: 16
                            },
                            children: t.title
                        })]
                    })
                };
            var Y = i(47717),
                Q = i(18840),
                K = i.n(Q),
                U = i(68868),
                X = i(32255),
                Z = i(80020);
            let J = e => {
                    let {
                        courses: t
                    } = e;
                    return (0, o.jsxs)(a.A, {
                        placement: "auto-end",
                        trigger: "hover",
                        children: [(0, o.jsx)(l.W, {
                            children: (0, o.jsxs)(r.$, {
                                height: "unset",
                                borderBottom: 1,
                                borderBottomStyle: "dashed",
                                borderBottomColor: "gray.300",
                                fontWeight: 400,
                                fontSize: "md",
                                type: "button",
                                variant: "unstyled",
                                borderRadius: "none",
                                color: "text.secondary",
                                children: [t.length, " ", (0, o.jsx)(s.A, {
                                    defaultMessage: "additional courses",
                                    id: "RaaD4u"
                                })]
                            })
                        }), (0, o.jsx)(c.h, {
                            color: "black",
                            w: "fit-content",
                            children: (0, o.jsx)(d.e, {
                                as: g.x,
                                gap: 5,
                                p: 6,
                                templateColumns: "repeat(3, 1fr)",
                                children: t.map(e => (0, o.jsx)(H, {
                                    as: u.E,
                                    course: e,
                                    whiteSpace: "nowrap"
                                }, e.title))
                            })
                        })]
                    })
                },
                O = e => {
                    let {
                        courseGroup: t
                    } = e, i = (0, h.rd)("sizes", "container.lg"), a = (0, m.A)({
                        base: 24,
                        lg: 32
                    }), [l, c] = (0, n.useState)(!1);
                    return (0, o.jsx)(D.e_, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1,
                            transition: {
                                delay: .1,
                                duration: .3
                            }
                        },
                        exit: {
                            opacity: 0,
                            transition: {
                                duration: .1
                            }
                        },
                        children: (0, o.jsxs)(b.B, {
                            direction: {
                                base: "column-reverse",
                                "2xl": "row"
                            },
                            w: {
                                base: "full",
                                "2xl": "calc(".concat(i, " - 112px)")
                            },
                            justifyContent: {
                                "2xl": "space-between"
                            },
                            alignItems: {
                                base: "center",
                                "2xl": "flex-start"
                            },
                            gap: {
                                base: 3,
                                "2xl": 2
                            },
                            children: [(0, o.jsxs)(p.T, {
                                alignItems: {
                                    base: "center",
                                    "2xl": "flex-start"
                                },
                                mt: "5",
                                children: [(0, o.jsxs)(x.D, {
                                    as: "h3",
                                    fontSize: "xl",
                                    mb: {
                                        base: 4,
                                        lg: "6"
                                    },
                                    children: [t.title, "\xa0", (0, o.jsx)(s.A, {
                                        defaultMessage: "Courses",
                                        id: "R85gsW"
                                    })]
                                }), (0, o.jsxs)(b.B, {
                                    direction: {
                                        base: "row",
                                        "2xl": "column"
                                    },
                                    justifyContent: {
                                        base: "center",
                                        "2xl": "flex-start"
                                    },
                                    alignItems: "flex-start",
                                    flexWrap: "wrap",
                                    gap: {
                                        base: 3,
                                        "2xl": "4"
                                    },
                                    children: [(l ? t.courses : t.courses.slice(0, t.coursesVisibleCount)).map(e => (0, o.jsxs)(v.z, {
                                        h: "8",
                                        gap: "3",
                                        children: [(0, o.jsx)(R(), {
                                            src: e.image,
                                            width: a,
                                            height: a,
                                            alt: e.title
                                        }), (0, o.jsx)(y.E, {
                                            fontSize: {
                                                base: "sm",
                                                lg: "md"
                                            },
                                            children: e.title
                                        })]
                                    }, e.title)), t.courses.length > t.coursesVisibleCount && !l && (0, o.jsxs)(v.z, {
                                        h: "8",
                                        gap: {
                                            base: "1",
                                            "2xl": "3"
                                        },
                                        children: [(0, o.jsx)(f.I, {
                                            as: I.A,
                                            boxSize: {
                                                base: 3,
                                                lg: 4
                                            },
                                            color: "gray.700",
                                            m: 2
                                        }), (0, o.jsx)(w.w, {
                                            above: "xl",
                                            children: (0, o.jsx)(J, {
                                                courses: t.courses.slice(t.coursesVisibleCount)
                                            })
                                        }), (0, o.jsx)(w.w, {
                                            below: "xl",
                                            children: (0, o.jsxs)(r.$, {
                                                height: "unset",
                                                borderBottom: 1,
                                                borderBottomStyle: "dashed",
                                                borderBottomColor: "gray.300",
                                                fontWeight: 400,
                                                fontSize: "sm",
                                                type: "button",
                                                variant: "unstyled",
                                                borderRadius: "none",
                                                color: "text.secondary",
                                                onClick: () => c(!0),
                                                children: [t.courses.slice(t.coursesVisibleCount).length, "\xa0", (0, o.jsx)(s.A, {
                                                    defaultMessage: "additional courses",
                                                    id: "RaaD4u"
                                                })]
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, o.jsx)(C.o, {
                                w: "700px",
                                maxW: "full",
                                h: {
                                    sm: "220px",
                                    md: "438px",
                                    xl: "456px"
                                },
                                borderRadius: "2xl",
                                borderWidth: "2px",
                                borderStyle: "solid",
                                borderColor: "gray.100",
                                boxSizing: "content-box",
                                backgroundColor: "white",
                                children: (0, o.jsx)(M.C, {
                                    poster: t.videoPoster,
                                    src: t.video,
                                    w: {
                                        sm: "284px",
                                        md: "567px",
                                        xl: "590px"
                                    },
                                    h: {
                                        sm: "197px",
                                        md: "394px",
                                        xl: "410px"
                                    }
                                })
                            })]
                        })
                    })
                },
                ee = e => {
                    let {
                        courseGroups: t,
                        disableAutoSlide: i = !1,
                        footerSection: a,
                        headingProps: l = {},
                        headingText: r,
                        isInLohpRefreshExperiment: c = !1,
                        pageContext: d,
                        sectionProps: g = {}
                    } = e, u = (0, E.js)(d), h = t || (0, E.u7)(d), m = c ? u : h, b = (0, n.useRef)(null), v = (0, z.BL)(b, {}), y = (0, V.Y4)(), f = (0, W.useRouter)(), {
                        isDesktop: C
                    } = (0, Z.T)(), {
                        setHasUserInteraction: I,
                        setSlideIndex: P,
                        slideIndex: R,
                        swipeHandlers: D
                    } = (0, X.g)({
                        slideCount: m.length,
                        slideInterval: i ? void 0 : 1e4
                    });
                    return (0, n.useEffect)(() => {
                        I(!(null == v ? void 0 : v.isIntersecting))
                    }, [v, I]), (0, o.jsx)(p.T, {
                        gap: 0,
                        px: {
                            base: 5,
                            lg: 8,
                            "2xl": 0
                        },
                        py: {
                            base: 16,
                            "2xl": 20
                        },
                        bgColor: U.S,
                        ...g,
                        children: (0, o.jsxs)(p.T, {
                            maxW: 1142,
                            w: "full",
                            gap: 0,
                            children: [(0, o.jsx)(x.D, {
                                mb: "10",
                                textAlign: "center",
                                fontWeight: "medium",
                                style: K().style,
                                fontSize: {
                                    base: "4xl",
                                    lg: "5xl",
                                    "2xl": "6xl"
                                },
                                letterSpacing: "tight",
                                color: c ? "white" : "text.primary",
                                ...l,
                                children: r || (c ? (0, o.jsx)(s.A, {
                                    defaultMessage: "Reach big learning goals",
                                    id: "+/0ItK"
                                }) : (0, o.jsx)(s.A, {
                                    defaultMessage: "Guided paths for every journey",
                                    id: "vYCgZ5"
                                }))
                            }), (0, o.jsxs)(j.t, {
                                index: R,
                                isLazy: !0,
                                display: "flex",
                                w: "full",
                                flexDirection: "column",
                                alignItems: "center",
                                onChange: P,
                                variant: "unstyled",
                                children: [(0, o.jsx)(S.w, {
                                    justifyContent: "space-between",
                                    flexWrap: "nowrap",
                                    w: {
                                        base: "auto"
                                    },
                                    h: "58px",
                                    mb: {
                                        base: 4,
                                        "2xl": 10
                                    },
                                    px: "1.5",
                                    py: "1.5",
                                    gap: {
                                        base: 2 * !!c,
                                        md: 2
                                    },
                                    zIndex: 2,
                                    background: c ? "transparent" : "gray.100",
                                    borderRadius: "xl",
                                    overflowX: "auto",
                                    whiteSpace: "nowrap",
                                    css: {
                                        scrollbarWidth: "none",
                                        "&::-webkit-scrollbar": {
                                            width: 0
                                        }
                                    },
                                    children: c ? u.map((e, t) => {
                                        var i;
                                        return (0, o.jsxs)(_, {
                                            colorScheme: e.colorScheme,
                                            isSelected: R === t,
                                            onClick: () => {
                                                P(t), y(Y.ghs, {
                                                    isActionUi: !0,
                                                    pageType: f.asPath,
                                                    topicType: e.title
                                                })
                                            },
                                            children: [(0, o.jsx)(w.w, {
                                                above: "lg",
                                                children: e.title
                                            }), (0, o.jsx)(w.w, {
                                                below: "lg",
                                                children: null != (i = e.mobileTitle) ? i : e.title
                                            })]
                                        }, e.title)
                                    }) : h.map((e, t) => {
                                        var i;
                                        return (0, o.jsxs)(k.o, {
                                            color: "blackAlpha.600",
                                            borderColor: "gray.100",
                                            borderWidth: 2 * (R === t),
                                            borderRadius: "lg",
                                            fontSize: {
                                                base: "sm",
                                                md: "md"
                                            },
                                            fontWeight: "medium",
                                            h: "auto",
                                            py: {
                                                base: 3,
                                                md: 4
                                            },
                                            px: {
                                                base: 3,
                                                md: 5
                                            },
                                            _hover: {
                                                base: {
                                                    color: "black"
                                                },
                                                md: {
                                                    backgroundColor: "gray.200"
                                                }
                                            },
                                            _selected: {
                                                bg: "white",
                                                boxShadow: "0px 1px 8px 0px #0000000D",
                                                color: "black"
                                            },
                                            onClick: () => y(Y.ghs, {
                                                isActionUi: !0,
                                                pageType: f.asPath,
                                                topicType: e.title
                                            }),
                                            children: [(0, o.jsx)(w.w, {
                                                above: "lg",
                                                children: e.title
                                            }), (0, o.jsx)(w.w, {
                                                below: "lg",
                                                children: null != (i = e.mobileTitle) ? i : e.title
                                            })]
                                        }, e.title)
                                    })
                                }), (0, o.jsx)(A.T, {
                                    onMouseEnter: () => I(C),
                                    onMouseLeave: () => I(!1),
                                    position: "relative",
                                    zIndex: "1",
                                    ...D,
                                    children: c ? u.map((e, t) => (0, o.jsx)(T.K, {
                                        tabIndex: t,
                                        px: {
                                            base: 0,
                                            md: 4
                                        },
                                        children: (0, o.jsx)(q, {
                                            courseGroup: e
                                        })
                                    }, e.title)) : h.map((e, t) => (0, o.jsx)(T.K, {
                                        tabIndex: t,
                                        px: {
                                            base: 0,
                                            md: 4
                                        },
                                        children: (0, o.jsx)(O, {
                                            courseGroup: e
                                        })
                                    }, e.title))
                                })]
                            }), a]
                        })
                    })
                }
        },
        32255: (e, t, i) => {
            i.d(t, {
                g: () => s
            });
            var o = i(21462),
                n = i(99792);

            function s(e) {
                let {
                    slideCount: t,
                    slideInterval: i
                } = e, s = t - 1, [a, l] = (0, o.useState)(0), [r, c] = (0, o.useState)(!1), d = (0, n.uh)({
                    onSwipedLeft: () => l(a === s ? 0 : a + 1),
                    onSwipedRight: () => l(0 === a ? s : a - 1)
                });
                return (0, o.useEffect)(() => {
                    if (!i) return;
                    let e = setInterval(() => {
                        r || l(a >= s ? 0 : a + 1)
                    }, i);
                    return () => clearInterval(e)
                }, [r, a, i, s]), {
                    setHasUserInteraction: c,
                    setSlideIndex: l,
                    slideIndex: a,
                    swipeHandlers: d
                }
            }
        },
        88480: (e, t, i) => {
            i.d(t, {
                js: () => c,
                u7: () => r
            });
            let o = "/images/paywall/courses",
                n = "/videos/homepage/courses",
                s = "/videos/homepage/courses/posters",
                a = [{
                    colorScheme: "blue",
                    courses: [{
                        title: "Arithmetic Thinking"
                    }, {
                        title: "Proportional Reasoning"
                    }, {
                        title: "Probability and Chance"
                    }, {
                        title: "Visual Algebra"
                    }, {
                        title: "Solving Equations"
                    }, {
                        title: "Quadratics"
                    }, {
                        title: "Calculus"
                    }, {
                        title: "Exponential Functions"
                    }, {
                        title: "Coordinate Geometry"
                    }, {
                        title: "Everyday Statistics"
                    }, {
                        title: "Geometry and Measurement"
                    }, {
                        title: "Real-World Algebra"
                    }, {
                        title: "Coordinate Plane"
                    }, {
                        title: "Coordinate Transformations"
                    }, {
                        title: "Logic"
                    }, {
                        title: "Truth and Lies"
                    }, {
                        title: "Reasoning with Logic"
                    }, {
                        title: "Vectors"
                    }, {
                        title: "Infinity"
                    }, {
                        title: "Number Theory"
                    }, {
                        title: "Geometric Thinking"
                    }, {
                        title: "Bayesian Probability"
                    }, {
                        title: "Contest Math"
                    }, {
                        title: "Linear Functions"
                    }, {
                        title: "Exponents and Radicals"
                    }, {
                        title: "Introduction to Functions"
                    }],
                    coursesVisibleCount: 7,
                    title: "Math",
                    video: "".concat(n, "/math-refresh.webm"),
                    videoPoster: "".concat(s, "/math-refresh.png")
                }, {
                    colorScheme: "purple",
                    courses: [{
                        title: "Thinking in Code"
                    }, {
                        title: "Programming with Variables"
                    }, {
                        title: "Thinking in Python"
                    }, {
                        title: "Programming with Functions"
                    }, {
                        title: "Algorithmic Thinking"
                    }, {
                        title: "Computer Science Fundamentals"
                    }, {
                        title: "Introduction to Neural Networks"
                    }, {
                        title: "How AI Works"
                    }, {
                        title: "How Technology Works"
                    }, {
                        title: "Search Engines"
                    }, {
                        title: "Cryptocurrency"
                    }],
                    coursesVisibleCount: 7,
                    mobileTitle: "CS",
                    title: "Computer Science",
                    video: "".concat(n, "/cs-refresh.webm"),
                    videoPoster: "".concat(s, "/cs-refresh.png")
                }, {
                    colorScheme: "orange",
                    courses: [{
                        title: "Exploring Data Visually"
                    }, {
                        title: "Probability in Data"
                    }, {
                        title: "Clustering & Classification"
                    }, {
                        title: "Regression"
                    }, {
                        title: "Predicting with Probability"
                    }],
                    coursesVisibleCount: 7,
                    mobileTitle: "Data",
                    title: "Data Analysis",
                    video: "".concat(n, "/data-refresh.webm"),
                    videoPoster: "".concat(s, "/data-refresh.png")
                }, {
                    colorScheme: "yellow",
                    courses: [{
                        title: "Scientific Thinking"
                    }, {
                        title: "Circuits"
                    }, {
                        title: "Digital Circuits"
                    }, {
                        title: "Quantum Computing"
                    }, {
                        title: "Beyond the Nutshell"
                    }],
                    coursesVisibleCount: 8,
                    title: "Science",
                    video: "".concat(n, "/science-refresh.webm"),
                    videoPoster: "".concat(s, "/science-refresh.png")
                }],
                l = [{
                    courses: [{
                        image: "".concat(o, "/arithmetic-thinking.svg"),
                        title: "Arithmetic Thinking"
                    }, {
                        image: "".concat(o, "/proportional-reasoning.svg"),
                        title: "Proportional Reasoning"
                    }, {
                        image: "".concat(o, "/probability-and-chance.svg"),
                        title: "Probability and Chance"
                    }, {
                        image: "".concat(o, "/visual-algebra-v2.svg"),
                        title: "Visual Algebra"
                    }, {
                        image: "".concat(o, "/solving-equations-v2.svg"),
                        title: "Solving Equations"
                    }, {
                        image: "".concat(o, "/quadratics.svg"),
                        title: "Quadratics"
                    }, {
                        image: "".concat(o, "/calculus.svg"),
                        title: "Calculus"
                    }, {
                        image: "".concat(o, "/coordinate-geometry.svg"),
                        title: "Coordinate Geometry"
                    }, {
                        image: "".concat(o, "/exponential-functions.svg"),
                        title: "Exponential Functions"
                    }, {
                        image: "".concat(o, "/everyday-math-v2.svg"),
                        title: "Everyday Statistics"
                    }, {
                        image: "".concat(o, "/geometry-and-measurement.svg"),
                        title: "Geometry and Measurement"
                    }, {
                        image: "".concat(o, "/real-world-algebra-v2.svg"),
                        title: "Real-World Algebra"
                    }, {
                        image: "".concat(o, "/coordinate-plane.svg"),
                        title: "Coordinate Plane"
                    }, {
                        image: "".concat(o, "/coordinate-transformations.svg"),
                        title: "Coordinate Transformations"
                    }, {
                        image: "".concat(o, "/logic-v2.svg"),
                        title: "Logic"
                    }, {
                        image: "".concat(o, "/truth-and-lies.svg"),
                        title: "Truth and Lies"
                    }, {
                        image: "".concat(o, "/reasoning-with-logic.svg"),
                        title: "Reasoning with Logic"
                    }, {
                        image: "".concat(o, "/vectors-and-linear-algebra-v2.svg"),
                        title: "Vectors"
                    }, {
                        image: "".concat(o, "/infinity-v2.svg"),
                        title: "Infinity"
                    }, {
                        image: "".concat(o, "/number-theory-v2.svg"),
                        title: "Number Theory"
                    }, {
                        image: "".concat(o, "/geometric-thinking-v2.svg"),
                        title: "Geometric Thinking"
                    }, {
                        image: "".concat(o, "/bayesian-probability-v2.svg"),
                        title: "Bayesian Probability"
                    }, {
                        image: "".concat(o, "/contest-math-I-v2.svg"),
                        title: "Contest Math"
                    }, {
                        image: "".concat(o, "/linear-functions.svg"),
                        title: "Linear Functions"
                    }, {
                        image: "".concat(o, "/exponents-and-radicals.svg"),
                        title: "Exponents and Radicals"
                    }, {
                        image: "".concat(o, "/introduction-to-functions.svg"),
                        title: "Introduction to Functions"
                    }],
                    coursesVisibleCount: 7,
                    title: "Math",
                    video: "".concat(n, "/math.webm"),
                    videoPoster: "".concat(s, "/foundational-math.png")
                }, {
                    courses: [{
                        image: "".concat(o, "/thinking-in-code.svg"),
                        title: "Thinking in Code"
                    }, {
                        image: "".concat(o, "/programming-with-variables-v2.svg"),
                        title: "Programming with Variables"
                    }, {
                        image: "".concat(o, "/thinking-in-python.svg"),
                        title: "Thinking in Python"
                    }, {
                        image: "".concat(o, "/programming-with-functions.svg"),
                        title: "Programming with Functions"
                    }, {
                        image: "".concat(o, "/algorithmic-thinking.svg"),
                        title: "Algorithmic Thinking"
                    }, {
                        image: "".concat(o, "/computer-science-fundamentals-v2.svg"),
                        title: "Computer Science Fundamentals"
                    }, {
                        image: "".concat(o, "/introduction-to-neural-networks-v2.svg"),
                        title: "Introduction to Neural Networks"
                    }, {
                        image: "".concat(o, "/how-llms-work-v2.svg"),
                        title: "How AI Works"
                    }, {
                        image: "".concat(o, "/how-technology-works-v2.svg"),
                        title: "How Technology Works"
                    }, {
                        image: "".concat(o, "/search-engines-v2.svg"),
                        title: "Search Engines"
                    }, {
                        image: "".concat(o, "/cryptocurrency-v2.svg"),
                        title: "Cryptocurrency"
                    }],
                    coursesVisibleCount: 7,
                    mobileTitle: "Programming",
                    title: "CS & Programming",
                    video: "".concat(n, "/cs.webm"),
                    videoPoster: "".concat(s, "/cs-programming.png")
                }, {
                    courses: [{
                        image: "".concat(o, "/exploring-data-visually-v2.svg"),
                        title: "Exploring Data Visually"
                    }, {
                        image: "".concat(o, "/probability-in-data.svg"),
                        title: "Probability in Data"
                    }, {
                        image: "".concat(o, "/clustering.svg"),
                        title: "Clustering & Classification"
                    }, {
                        image: "".concat(o, "/regression-and-classification-v2.svg"),
                        title: "Regression"
                    }, {
                        image: "".concat(o, "/predicting-with-probability-v2.svg"),
                        title: "Predicting with Probability"
                    }],
                    coursesVisibleCount: 7,
                    mobileTitle: "Data",
                    title: "Data Analysis",
                    video: "".concat(n, "/data.webm"),
                    videoPoster: "".concat(s, "/data.png")
                }, {
                    courses: [{
                        image: "".concat(o, "/scientific-thinking.svg"),
                        title: "Scientific Thinking"
                    }, {
                        image: "".concat(o, "/circuits.svg"),
                        title: "Circuits"
                    }, {
                        image: "".concat(o, "/digital-circuits.svg"),
                        title: "Digital Circuits"
                    }, {
                        image: "".concat(o, "/quantum-computing-v2.svg"),
                        title: "Quantum Computing"
                    }, {
                        image: "".concat(o, "/beyond-the-nutshell-v2.svg"),
                        title: "Beyond the Nutshell"
                    }],
                    coursesVisibleCount: 8,
                    title: "Science",
                    video: "".concat(n, "/science.webm"),
                    videoPoster: "".concat(s, "/science.png")
                }],
                r = e => {
                    let t = [...l],
                        i = null;
                    if (e && (["cs", "ai", "tech", "python", "coding"].includes(e) ? i = "Computer Science" : ["math", "algebra", "calculus", "geometry", "collegemath", "gradeschoolmath", "fractions", "equations", "high-school-math", "middle-school-math"].includes(e) ? i = "Math" : "science" === e ? i = "Science" : ["data", "statistics"].includes(e) && (i = "Data Analysis")), i) {
                        let e = t.findIndex(e => e.title === i);
                        if (e > 0) {
                            let [i] = t.splice(e, 1);
                            t.unshift(i)
                        }
                    }
                    return t
                },
                c = e => {
                    let t = [...a],
                        i = null;
                    if (e && (["cs", "ai", "tech", "python", "coding"].includes(e) ? i = "Computer Science" : ["math", "algebra", "calculus", "geometry", "collegemath", "gradeschoolmath", "fractions", "equations", "high-school-math", "middle-school-math"].includes(e) ? i = "Math" : "science" === e ? i = "Science" : ["data", "statistics"].includes(e) && (i = "Data Analysis")), i) {
                        let e = t.findIndex(e => e.title === i);
                        if (e > 0) {
                            let [i] = t.splice(e, 1);
                            t.unshift(i)
                        }
                    }
                    return t
                }
        }
    }
]);