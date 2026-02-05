try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7637a2c5-57ab-412a-bdb8-b3befe4a4a44", e._sentryDebugIdIdentifier = "sentry-dbid-7637a2c5-57ab-412a-bdb8-b3befe4a4a44")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1733], {
        41733: (e, t, n) => {
            n.d(t, {
                L: () => ep
            });
            var r = n(23798),
                a = n(21462),
                i = n(32587),
                l = n(26829),
                s = n(56545),
                o = n(70501),
                d = n(16127),
                c = n(95046),
                u = n.n(c),
                h = n(49135),
                p = n.n(h),
                x = n(54700);
            let g = {
                base: "75vh",
                md: "68vh"
            };
            var f = n(57552),
                m = n(41929),
                w = n(62104),
                b = n(5732),
                v = n(86191),
                j = n(28439),
                y = n(92510);
            let L = e => {
                    let {
                        icon: t,
                        isDisabled: n,
                        isLoading: a,
                        label: i,
                        onClick: l,
                        variant: s
                    } = e, o = (0, f.A)();
                    return (0, r.jsx)(w.$, {
                        isLoading: a,
                        "data-testid": "nux-continue-button",
                        width: {
                            base: "full",
                            md: "280px"
                        },
                        height: "48px",
                        variant: s,
                        isDisabled: n,
                        onClick: l,
                        zIndex: "sticky",
                        children: (0, r.jsxs)(b.z, {
                            children: [t && (0, r.jsx)(v.I, {
                                as: t
                            }), (0, r.jsx)(j.E, {
                                children: o.formatMessage(i)
                            })]
                        })
                    })
                },
                S = (0, a.forwardRef)((e, t) => {
                    let {
                        contentVariables: n,
                        ctaOverrides: a,
                        goToNextStep: i,
                        isContinueButtonEnabled: l,
                        isContinueButtonLoading: o = !1,
                        showFooterShadow: d,
                        showMobileFooter: c,
                        submitAnswersAndRedirect: u
                    } = e;
                    return (0, r.jsx)(y.c8, {
                        renderCta: () => {
                            let e = null;
                            return e = (null == a ? void 0 : a.length) ? a.map((e, t) => {
                                let a = () => i(e.name);
                                if ("redirect" === e.onClick.type) {
                                    let {
                                        getRedirect: t
                                    } = e.onClick;
                                    a = () => u(t, e.name)
                                }
                                let s = e.getVariant(n),
                                    d = e.getLabel(n);
                                return (0, r.jsx)(L, {
                                    label: d,
                                    variant: s,
                                    isLoading: "redirect" === e.onClick.type && o,
                                    isDisabled: !l,
                                    onClick: a,
                                    icon: e.icon
                                }, "".concat(d.id, "-").concat(s, "-").concat(t))
                            }) : (0, r.jsx)(L, {
                                label: (0, m.zR)({
                                    defaultMessage: "Continue",
                                    id: "acrOoz"
                                }),
                                variant: "pillPrimary",
                                isLoading: !1,
                                isDisabled: !l,
                                onClick: () => i("Continue")
                            }), (0, r.jsx)(s.T, {
                                gap: 3,
                                width: "100%",
                                children: e
                            })
                        },
                        hasFixedHeight: !1,
                        ref: t,
                        showMobileFooter: c,
                        showShadow: d
                    })
                });
            var A = n(47725),
                E = n(2433),
                I = n(87723);
            let _ = e => (0, r.jsx)(v.I, {
                    width: "44px",
                    height: "44px",
                    viewBox: "0 0 44 44",
                    ...e,
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M17 21.9571L24.9571 29.9142L26.3713 28.5L19.8284 21.9571L26.3713 15.4142L24.9571 14L17 21.9571Z",
                        fill: "currentColor"
                    })
                }),
                C = e => {
                    let {
                        currentValue: t,
                        goToPrevStep: n,
                        isBackButtonEnabled: a,
                        maxValue: i,
                        showBackButton: s,
                        showHeaderShadow: o
                    } = e;
                    return (0, r.jsxs)(b.z, {
                        minHeight: "".concat(44, "px"),
                        width: "100vw",
                        maxW: 800,
                        pr: "44px",
                        gap: 0,
                        position: "sticky",
                        zIndex: 1,
                        background: "white",
                        boxShadow: {
                            base: o ? "0px 0px 15px 0px rgba(0, 0, 0, 0.1)" : "none",
                            md: "none"
                        },
                        top: 0,
                        left: 0,
                        alignContent: "stretch",
                        children: [s ? (0, r.jsx)(_, {
                            "data-testid": "back-arrow",
                            color: a ? void 0 : "text.placeholder",
                            cursor: a ? "pointer" : "not-allowed",
                            onClick: a ? n : void 0
                        }) : (0, r.jsx)(l.az, {
                            minW: "44px",
                            visibility: "hidden"
                        }), (0, r.jsx)(I.k, {
                            max: i,
                            value: t
                        })]
                    })
                },
                T = e => {
                    let {
                        contentVariables: t,
                        currentNode: n,
                        previousNodes: r,
                        progressBarMax: a,
                        progressBarValue: i
                    } = e, l = e => n.step.id === e || r.some(t => t.step.id === e) ? t.answerState[e] : null, s = n.step.id, o = {
                        csLevel: l("cs-level"),
                        dailyGoal: l("daily-goal"),
                        dataLevel: l("data-level"),
                        habitTime: l("habit-time"),
                        interest: l("interest"),
                        mathLevel: l("math-level"),
                        persona: l("persona"),
                        ruxContent: l("rux-content"),
                        topic: l("topic")
                    }, d = [], c = "";
                    return "question" === n.step.stepType && (d = n.step.getContent(t).answers.map(e => e.id), c = ((e, t) => {
                        var n;
                        return null != (n = e[t]) ? n : ""
                    })(t.answerState, n.step.id)), {
                        answers: o,
                        answerSelected: c,
                        answersShown: d,
                        isActionUi: !0,
                        progressBarMax: a,
                        progressBarValue: i,
                        stepName: s
                    }
                };
            var k = n(12584),
                M = n(198),
                R = n(14770),
                z = n(84804),
                W = n(81714),
                P = n(45569),
                N = n(58514),
                B = n(79511),
                H = function(e) {
                    return e.LpReady = "lp_ready", e
                }({});

            function U() {
                let e = (0, k._)(["\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      display: none;\n    }\n  "]);
                return U = function() {
                    return e
                }, e
            }

            function O() {
                let e = (0, k._)(["\n    0% {\n      display: block;\n      opacity: 0;\n      transform: translateY(32px);\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  "]);
                return O = function() {
                    return e
                }, e
            }
            let D = e => {
                let {
                    contentVariables: t,
                    setShowBackButton: n,
                    step: i
                } = e, d = (0, f.A)(), {
                    author: c,
                    quote: u,
                    titleComplete: h,
                    titleInitial: p
                } = i.getContent(t), [x, m] = (0, a.useState)(!1), {
                    rive: w,
                    RiveComponent: b
                } = ((e, t) => {
                    let {
                        rive: n,
                        RiveComponent: r
                    } = (0, B.T)({
                        artboard: e,
                        autoplay: !0,
                        shouldDisableRiveListeners: !0,
                        src: N.nq,
                        stateMachines: t
                    }, {
                        fitCanvasToArtboardHeight: !0
                    });
                    return {
                        rive: n,
                        RiveComponent: r
                    }
                })("BYLP_Loop", "state_machine");
                (0, a.useEffect)(() => {
                    function e(e) {
                        let t = (0, P.n)(e);
                        (null == t ? void 0 : t.name) === H.LpReady && m(!0)
                    }
                    if (w) return function(t) {
                        return t.on(z.EventType.RiveEvent, e), () => {
                            t.off(z.EventType.RiveEvent, e)
                        }
                    }(w)
                }, [w, m, h]), (0, a.useEffect)(() => {
                    n(!1)
                }, []);
                let v = (0, M.i7)(U()),
                    y = x ? "".concat(v, " ").concat("400ms", " cubic-bezier(0.16, 1, 0.3, 1) forwards") : "",
                    L = (0, M.i7)(O()),
                    S = x ? "".concat(L, " ").concat("400ms", " forwards") : "";
                return (0, r.jsx)(o.s, {
                    alignItems: "center",
                    flexDirection: "column",
                    gap: {
                        base: 12,
                        lg: 25
                    },
                    w: "full",
                    justifyContent: "center",
                    minHeight: g,
                    paddingX: 5,
                    children: (0, r.jsxs)(s.T, {
                        alignItems: "center",
                        gap: {
                            base: 4,
                            md: 5,
                            lg: 6
                        },
                        maxW: 464,
                        width: "full",
                        children: [(0, r.jsxs)(l.az, {
                            position: "relative",
                            width: "100%",
                            children: [(0, r.jsx)(R.D, {
                                position: "absolute",
                                textAlign: "center",
                                width: "100%",
                                size: {
                                    base: "md",
                                    lg: "lg"
                                },
                                animation: y,
                                children: d.formatMessage(p)
                            }), (0, r.jsx)(R.D, {
                                position: "absolute",
                                display: x ? "block" : "none",
                                textAlign: "center",
                                width: "100%",
                                size: {
                                    base: "md",
                                    lg: "lg"
                                },
                                animation: S,
                                children: d.formatMessage(h)
                            })]
                        }), (0, r.jsx)(l.az, {
                            width: 360,
                            height: 360,
                            children: (0, r.jsx)(b, {})
                        }), (0, r.jsxs)(s.T, {
                            gap: 5,
                            children: [(0, r.jsx)(W.l, {
                                width: 160,
                                height: 8
                            }), (0, r.jsx)(j.E, {
                                size: "md",
                                fontStyle: "italic",
                                textAlign: "center",
                                color: "text.secondary",
                                _before: {
                                    content: '"“"'
                                },
                                _after: {
                                    content: '"”"'
                                },
                                children: u
                            }), (0, r.jsx)(j.E, {
                                textAlign: "center",
                                fontStyle: "italic",
                                color: "text.secondary",
                                _before: {
                                    content: '"— "',
                                    marginRight: 1
                                },
                                children: c
                            })]
                        })]
                    })
                })
            };
            var V = n(2025),
                F = n(66256),
                q = n(63223),
                X = n(78892),
                Y = n(49224),
                Q = n(15021),
                Z = n(51745);
            let G = (0, a.memo)(e => {
                    let {
                        answer: t,
                        hasGroupSelection: n,
                        isSelectedAnswer: a,
                        radioProps: i
                    } = e;
                    return (0, r.jsxs)(Y.a, {
                        userSelect: "none",
                        colorScheme: "purple",
                        label: "string" == typeof t.text ? t.text : t.id,
                        radioProps: i,
                        variant: n && !a ? "image.gradientUnselected" : "image.gradient",
                        width: "100%",
                        height: "100%",
                        paddingX: {
                            base: 4,
                            md: 5,
                            lg: 6
                        },
                        paddingTop: {
                            base: 6,
                            lg: 8
                        },
                        paddingBottom: 6,
                        minHeight: {
                            base: "auto",
                            md: "220px"
                        },
                        children: [(() => {
                            switch (t.variant) {
                                case "emoji":
                                    return (0, r.jsx)(t.emoji, {
                                        h: 14,
                                        size: "md"
                                    });
                                case "icon":
                                    return (0, r.jsx)(t.icon, {
                                        h: 14,
                                        minW: 14
                                    });
                                case "imagePath":
                                    return (0, r.jsx)(V._, {
                                        src: t.imagePath,
                                        w: "auto",
                                        height: 14,
                                        alt: ""
                                    })
                            }
                        })(), (0, r.jsxs)(s.T, {
                            gap: 1,
                            textAlign: "center",
                            children: [(0, r.jsx)(j.E, {
                                fontSize: 16,
                                fontWeight: t.secondaryText ? "bold" : "medium",
                                children: t.text
                            }), t.secondaryText && (0, r.jsx)(j.E, {
                                fontSize: 16,
                                fontWeight: "normal",
                                color: a ? "text.primary" : "text.secondary",
                                children: t.secondaryText
                            })]
                        })]
                    })
                }),
                J = (0, a.memo)(e => {
                    let {
                        answer: t,
                        hasGroupSelection: n,
                        isSelectedAnswer: a,
                        radioProps: i
                    } = e;
                    return (0, r.jsx)(Y.a, {
                        colorScheme: "purple",
                        label: "string" == typeof t.text ? t.text : t.id,
                        radioProps: i,
                        variant: n && !a ? "icon.gradientUnselected" : "icon.gradient",
                        userSelect: "none",
                        children: (0, r.jsxs)(j.E, {
                            "data-is-selected": a,
                            fontSize: 16,
                            textAlign: "left",
                            children: [(0, r.jsx)(l.az, {
                                as: "span",
                                fontWeight: t.secondaryText ? "bold" : "medium",
                                children: t.text
                            }), t.secondaryText && (0, r.jsxs)(l.az, {
                                as: "span",
                                fontWeight: "normal",
                                children: [(0, r.jsx)(Q.J, {
                                    text: " "
                                }), t.secondaryText]
                            })]
                        })
                    })
                }),
                $ = e => {
                    let {
                        contentVariables: t,
                        isFirstQuestionStep: n,
                        step: i,
                        updateAnswer: l
                    } = e, [d, c] = (0, a.useState)(null), u = i.getContent(t), h = t.answerState[i.id], p = (0, Z.xr)(i.id, u.answers), x = p.length % 2 == 0 ? 2 : 1;
                    (0, a.useEffect)(() => {
                        c(null)
                    }, [i]);
                    let {
                        getRadioProps: g,
                        getRootProps: f
                    } = (0, F.m)({
                        value: null != h ? h : void 0,
                        onChange: e => {
                            let t = p.find(t => t.id === e);
                            t && (e => {
                                c(e.kojiReaction), l(e.id)
                            })(t)
                        }
                    });
                    return (0, r.jsxs)(s.T, {
                        gap: 9,
                        width: "full",
                        paddingX: 5,
                        height: "100%",
                        children: [(0, r.jsx)(X.E, {
                            text: u.promptText,
                            kojiReaction: d,
                            isFirstQuestionStep: n
                        }), (() => {
                            let e = null !== h;
                            return "list" === u.variant ? (0, r.jsx)(s.T, { ...f(),
                                gap: 3,
                                width: "100%",
                                maxWidth: "530px",
                                alignItems: "flex-start",
                                children: p.map(t => (0, r.jsx)(J, {
                                    answer: t,
                                    hasGroupSelection: e,
                                    isSelectedAnswer: t.id === h,
                                    radioProps: g({
                                        value: t.id
                                    })
                                }, t.id))
                            }) : (0, r.jsx)(o.s, {
                                height: "100%",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                children: (0, r.jsx)(q.x, { ...f(),
                                    templateColumns: {
                                        base: "repeat(".concat(x, ", 1fr)"),
                                        lg: "repeat(".concat(p.length, ", minmax(0, 256px))")
                                    },
                                    gap: 3,
                                    justifyContent: "center",
                                    maxWidth: "800px",
                                    width: "100%",
                                    children: p.map(t => (0, r.jsx)(G, {
                                        answer: t,
                                        hasGroupSelection: e,
                                        isSelectedAnswer: t.id === h,
                                        radioProps: g({
                                            value: t.id
                                        })
                                    }, t.id))
                                })
                            })
                        })()]
                    })
                };
            var K = n(74049),
                ee = n(45460);
            let et = e => new Promise(t => {
                setTimeout(() => {
                    t()
                }, e)
            });
            async function en(e) {
                let {
                    delayMs: t,
                    maxRetries: n,
                    mutation: r,
                    mutationName: a = "retryWrappedMutation",
                    options: i,
                    shouldRetry: l
                } = e, s = 0, o = null;
                for (; s <= n;) try {
                    let e = await r(i);
                    if (l(e.data)) throw new ee.LI(a, "Retrying due to custom shouldRetry function");
                    return e
                } catch (e) {
                    if (o = e instanceof Error ? e : new ee.LI(a, String(e)), (s += 1) > n) throw o;
                    t && await et(t)
                }
                throw o || new ee.LI(a, "Mutation failed after maximum retries")
            }
            var er = n(51394),
                ea = n(20903),
                ei = n(99757);
            let el = e => {
                    let {
                        src: t,
                        ...n
                    } = e, [i, l] = (0, a.useState)(null);
                    return ((0, a.useEffect)(() => {
                        let e = null,
                            n = !1;
                        return fetch(t).then(e => e.blob()).then(t => {
                            n || l(e = URL.createObjectURL(t))
                        }), () => {
                            n = !0, e && URL.revokeObjectURL(e)
                        }
                    }, [t]), i) ? (0, r.jsx)(V._, {
                        src: i,
                        ...n
                    }) : null
                },
                es = e => {
                    let {
                        contentVariables: t,
                        step: n
                    } = e, {
                        desktopOnlyImagePath: a,
                        subtitle: i,
                        title: l
                    } = n.getContent(t), d = () => {
                        let e = n.getContent(t),
                            a = e.sizeOverride || {
                                height: 240,
                                width: 240
                            };
                        return (0, r.jsx)(o.s, {
                            width: {
                                base: "min(100%, ".concat(a.width, "px)"),
                                md: a.width
                            },
                            height: a.height,
                            alignItems: "center",
                            children: (() => {
                                if ("image" === e.variant)
                                    if (e.imagePath.endsWith(".gif")) return (0, r.jsx)(el, {
                                        alt: "",
                                        src: e.imagePath,
                                        maxW: "100%"
                                    });
                                    else return (0, r.jsx)(V._, {
                                        alt: "",
                                        src: e.imagePath,
                                        maxW: "100%"
                                    });
                                return (0, r.jsx)(ei.r, {
                                    variant: e.riveId
                                })
                            })()
                        })
                    }, c = "learning-path-ready" === n.id ? (0, r.jsxs)(s.T, {
                        gap: 8,
                        children: [d(), (0, r.jsxs)(s.T, {
                            alignItems: {
                                base: "center",
                                lg: "flex-start"
                            },
                            gap: {
                                base: 4,
                                lg: 6
                            },
                            maxWidth: "464px",
                            children: [(0, r.jsx)(R.D, {
                                fontSize: {
                                    base: "2xl",
                                    lg: "3xl"
                                },
                                textAlign: "center",
                                children: l
                            }), i && (0, r.jsx)(j.E, {
                                size: "md",
                                color: "text.secondary",
                                textAlign: "center",
                                children: i
                            }), a && (0, r.jsx)(V._, {
                                display: {
                                    base: "none",
                                    lg: "block"
                                },
                                src: a
                            })]
                        })]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [d(), (0, r.jsxs)(s.T, {
                            alignItems: {
                                base: "center",
                                lg: "flex-start"
                            },
                            gap: {
                                base: 4,
                                lg: 6
                            },
                            maxWidth: "464px",
                            children: [(0, r.jsx)(R.D, {
                                fontSize: {
                                    base: "2xl",
                                    lg: "3xl"
                                },
                                textAlign: {
                                    base: "center",
                                    lg: "left"
                                },
                                children: l
                            }), i && (0, r.jsx)(j.E, {
                                size: "md",
                                color: "text.secondary",
                                textAlign: {
                                    base: "center",
                                    lg: "left"
                                },
                                children: i
                            }), a && (0, r.jsx)(V._, {
                                display: {
                                    base: "none",
                                    lg: "block"
                                },
                                src: a
                            })]
                        })]
                    });
                    return (0, r.jsx)(o.s, {
                        alignItems: "center",
                        flexDirection: {
                            base: "column",
                            lg: "row"
                        },
                        gap: {
                            base: 8,
                            lg: "72px"
                        },
                        justifyContent: "center",
                        margin: "0 auto",
                        maxWidth: "1200px",
                        height: "100%",
                        paddingX: 5,
                        children: c
                    })
                };
            var eo = n(47717),
                ed = n(76321),
                ec = n(47220),
                eu = n(55335);
            let eh = u()(() => Promise.all([n.e(8382), n.e(9777)]).then(n.bind(n, 80909)).then(e => e.NuxErrorModal), {
                    loadableGenerated: {
                        webpack: () => [80909]
                    },
                    ssr: !1
                }),
                ep = e => {
                    var t, n, c;
                    let {
                        amplitudeExperiments: u,
                        featureFlags: h,
                        graphqlData: f,
                        isLolEligible: m,
                        queryParams: w,
                        rootNode: b,
                        ruxData: v,
                        user: j,
                        userAgentIsMobile: L
                    } = e, [I, _] = (0, a.useState)((0, ec.Qj)()), [k, M] = (0, a.useState)(b), [R, z] = (0, a.useState)([]), [W, P] = (0, a.useState)(!0), [N, B] = (0, a.useState)(!1), [H, U] = (0, a.useState)(!0), [O, V] = (0, a.useState)(!1), [F, q] = (0, a.useState)(!1), X = (0, a.useRef)(null), Y = (0, a.useRef)(null), Q = (0, a.useRef)(null), {
                        resetScrollPosition: G,
                        scrollPadding: J,
                        showFooterShadow: et,
                        showHeaderShadow: ei,
                        showMobileFooter: el
                    } = ((e, t, n, r) => {
                        let [l, s] = (0, a.useState)(!1), [o, d] = (0, a.useState)(!1), [c, u] = (0, a.useState)(0), h = (0, i.A)({
                            base: !0,
                            lg: !1
                        }), p = (0, a.useCallback)(() => {
                            var n, r;
                            let a = h ? y.sz : y.O3,
                                i = ((null == t || null == (n = t.current) ? void 0 : n.scrollHeight) || 0) + a;
                            u(((null == (r = e.current) ? void 0 : r.scrollHeight) || 0) + 44 + 16 >= window.innerHeight - i ? i + 24 - a : 0)
                        }, [t, e, o]);
                        (0, a.useEffect)(() => {
                            let e = n.current,
                                t = () => {
                                    e && (d(e.scrollHeight - e.scrollTop - e.clientHeight < 1), s(0 !== e.scrollTop))
                                };
                            return window.addEventListener("resize", p), null == e || e.addEventListener("scroll", t), document.documentElement.style.overscrollBehaviorY = "none", () => {
                                window.removeEventListener("resize", p), null == e || e.removeEventListener("scroll", t), document.documentElement.style.overscrollBehaviorY = "", t()
                            }
                        }, [p, n, r]);
                        let x = (0, a.useCallback)(() => {
                            var e;
                            null == (e = n.current) || e.scroll(0, 0), s(!0), d(!1)
                        }, [n]);
                        return (0, a.useLayoutEffect)(p, [r, p]), {
                            resetScrollPosition: x,
                            scrollPadding: c,
                            showFooterShadow: c > 0 && !o,
                            showHeaderShadow: l,
                            showMobileFooter: c > 0
                        }
                    })(Q, Y, X, k), ep = (0, i.A)({
                        base: !0,
                        lg: !1
                    }, {
                        fallback: L ? "base" : "lg"
                    }), ex = (0, A.Y4)(), eg = (0, x.useRouter)(), ef = function(e) {
                        let [t, n] = (0, a.useState)(!1), [r] = (0, K.S4d)();
                        return (0, a.useEffect)(() => {
                            n(!1)
                        }, [e]), async () => {
                            var a;
                            if (t) return;
                            let i = (0, Z.B$)(e);
                            await r({
                                variables: {
                                    questionAnswers: i
                                }
                            }), null == (a = localStorage) || a.removeItem(er.Rk.NUX_ANSWERS), n(!0)
                        }
                    }(I), em = function(e) {
                        let {
                            maxRetries: t
                        } = e, [n, r] = (0, a.useState)(!1), [i] = (0, K.mxw)();
                        return async () => {
                            n || (await en({
                                maxRetries: t,
                                mutation: i,
                                options: {
                                    awaitRefetchQueries: !0,
                                    refetchQueries: [K.nIV]
                                },
                                shouldRetry: e => (null == e ? void 0 : e.sessionMutation.createProvisionalUser.__typename) !== "CreateProvisionalUserPayload"
                            }), r(!0))
                        }
                    }({
                        maxRetries: 3
                    }), ew = (0, eu.RW)("localStorage"), eb = k.step, ev = (e => {
                        let t = {},
                            n = {},
                            r = {},
                            a = function(e) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                    l = e.step.id,
                                    s = t[l],
                                    o = s ? Math.min(s, i) : i;
                                t[l] = o;
                                let d = -1;
                                e.children.forEach(e => {
                                    let t = r[l] || [],
                                        n = e.node.step.id;
                                    if (!(null == t ? void 0 : t.includes(n))) {
                                        if (r[n]) {
                                            var s;
                                            null == (s = r[n]) || s.push(l, ...t)
                                        } else r[n] = [l, ...t];
                                        let o = a(e.node, i + 1);
                                        d = Math.max(d, o)
                                    }
                                });
                                let c = d + 1;
                                return n[l] = {
                                    currentValue: o,
                                    max: o + c
                                }, c
                            };
                        return a(e), n
                    })(b), ej = (null == (t = ev[eb.id]) ? void 0 : t.currentValue) || 0, ey = (null == (n = ev[eb.id]) ? void 0 : n.max) || 0, eL = (0, Z.cZ)(b, w);
                    (0, ea.p)({
                        condition: eL && j.isAuthenticated
                    }), (0, a.useEffect)(() => {
                        P(!!eb && ("question" !== eb.stepType || !!I[eb.id]))
                    }, [eb, I, w]);
                    let eS = {
                            amplitudeExperiments: u,
                            answerState: I,
                            featureFlags: h,
                            graphqlData: f,
                            isLolEligible: m,
                            isMobileBreakpoint: ep,
                            queryParams: w,
                            ruxData: v,
                            user: j
                        },
                        eA = T({
                            contentVariables: eS,
                            currentNode: k,
                            previousNodes: R,
                            progressBarMax: ey,
                            progressBarValue: ej
                        });
                    (0, a.useEffect)(() => {
                        try {
                            var e;
                            eb.getContent(eS), null == (e = eb.runSideEffects) || e.call(eb, eS)
                        } catch (e) {
                            d.Cp("User entered an invalid state and was ejected from the NUX. ".concat(e)), j.isAuthenticated ? eg.push("/") : eg.push("/signup")
                        }
                        ex(eo.m1o, eA)
                    }, [k]);
                    let eE = async (e, t) => {
                            let n = e(eS, eg),
                                r = null === (0, Z.jr)(k, eS),
                                a = !!I["lol-recs"] && r;
                            ex(eo.TiS, { ...eA,
                                ctaName: t
                            }), P(!1), B(!0), U(!1);
                            let i = await Promise.allSettled(a ? [ef(), em()] : [ef()]),
                                [l, s] = i;
                            if (Object.entries({
                                    createProvisionalUser: s,
                                    saveNuxAnswers: l
                                }).forEach(e => {
                                    let [t, n] = e;
                                    n && "fulfilled" !== n.status && ((e, t) => {
                                        let n = t.reason instanceof Error ? {
                                            error: t.reason.name,
                                            message: t.reason.message
                                        } : {
                                            error: String(t.reason)
                                        };
                                        d.Cp(new ee.LI(e, n.error), {
                                            extra: n
                                        })
                                    })(t, n)
                                }), !i.every(e => "fulfilled" === e.status)) {
                                P(!0), B(!1), U(!0), q(!0);
                                return
                            }
                            eg.push({
                                pathname: n.url.toString(),
                                query: n.query
                            })
                        },
                        eI = [];
                    k.children.length > 0 && (eI = (0, Z.ru)(k, eS));
                    let e_ = null == (c = k.ctaOverrides) ? void 0 : c.filter(e => {
                        var t;
                        return !e.checkIsValid || (null == (t = e.checkIsValid) ? void 0 : t.call(e, eS))
                    });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(p(), {
                            children: [eI.map(e => e && (0, r.jsx)("link", { ...e
                            }, e.href)), (0, r.jsx)("link", {
                                href: ed.E.href,
                                ...ed.E
                            })]
                        }), (0, r.jsx)(l.az, {
                            height: "100dvh",
                            overflow: "hidden",
                            children: (0, r.jsxs)(s.T, {
                                width: "full",
                                gap: 0,
                                height: "100dvh",
                                overflow: "auto",
                                ref: X,
                                overscrollBehaviorY: "none",
                                children: [(0, r.jsx)(C, {
                                    showBackButton: O,
                                    currentValue: ej,
                                    maxValue: ey,
                                    goToPrevStep: () => {
                                        G(), ex(eo.Qbu, eA);
                                        let e = R[R.length - 1];
                                        1 === R.length && V(!1), M(e), z(R.length > 1 ? R.slice(0, -1) : [])
                                    },
                                    showHeaderShadow: ei,
                                    isBackButtonEnabled: H
                                }), (0, r.jsx)(o.s, {
                                    width: "full",
                                    paddingBottom: el ? "".concat(J, "px") : "0px",
                                    children: (0, r.jsx)(o.s, {
                                        paddingY: "".concat(16, "px"),
                                        minHeight: g,
                                        w: "full",
                                        children: (0, r.jsx)(o.s, {
                                            ref: Q,
                                            w: "full",
                                            style: {
                                                textWrap: "pretty"
                                            },
                                            children: (() => {
                                                if (!eb) return null;
                                                let e = "question" === eb.stepType && !R.some(e => "question" === e.step.stepType);
                                                switch (eb.stepType) {
                                                    case "question":
                                                        return (0, r.jsx)($, {
                                                            step: eb,
                                                            isFirstQuestionStep: e,
                                                            contentVariables: eS,
                                                            updateAnswer: e => ((e, t) => {
                                                                let n = (0, Z.N0)(e, t, I);
                                                                _(n), null == ew || ew.setItem(er.Rk.NUX_ANSWERS, JSON.stringify(n));
                                                                let r = T({
                                                                    contentVariables: eS,
                                                                    currentNode: k,
                                                                    previousNodes: R,
                                                                    progressBarMax: ey,
                                                                    progressBarValue: ej
                                                                });
                                                                ex(eo.FLd, r)
                                                            })(eb.id, e)
                                                        });
                                                    case "valueProp":
                                                        return (0, r.jsx)(es, {
                                                            step: eb,
                                                            contentVariables: eS
                                                        });
                                                    case "graphic":
                                                        return (0, r.jsx)(E.n, {
                                                            step: eb,
                                                            contentVariables: eS
                                                        });
                                                    case "custom":
                                                        return eb.getContent(eS);
                                                    case "outro":
                                                        return (0, r.jsx)(D, {
                                                            step: eb,
                                                            contentVariables: eS,
                                                            setShowBackButton: V
                                                        })
                                                }
                                            })()
                                        })
                                    })
                                }), (0, r.jsx)(S, {
                                    contentVariables: eS,
                                    isContinueButtonEnabled: W,
                                    isContinueButtonLoading: N,
                                    goToNextStep: e => {
                                        let t = (0, Z.jr)(k, eS);
                                        ex(eo.TiS, { ...eA,
                                            ctaName: e
                                        }), t ? (G(), z([...R, k]), M(t), V(!0)) : d.Cp('Called "goToNextStep" on a NuxNode (step id: '.concat(k.step.id, ") with no valid children."))
                                    },
                                    submitAnswersAndRedirect: eE,
                                    ref: Y,
                                    ctaOverrides: e_,
                                    showFooterShadow: et,
                                    showMobileFooter: el
                                })]
                            })
                        }), R.length > 0 && (0, r.jsx)(eh, {
                            isOpen: F,
                            onClose: () => q(!1)
                        })]
                    })
                }
        },
        45569: (e, t, n) => {
            n.d(t, {
                n: () => a
            });
            var r = n(84804);

            function a(e) {
                return e.type !== r.EventType.RiveEvent || !e.data || "string" == typeof e.data || "number" == typeof e.data || Array.isArray(e.data) || "animation" in e.data || "buffer" in e.data ? null : e.data
            }
        },
        49224: (e, t, n) => {
            n.d(t, {
                a: () => o
            });
            var r = n(23798),
                a = n(29135),
                i = n(67267),
                l = n(26829),
                s = n(70501);
            let o = e => {
                let {
                    boxProps: t,
                    children: n,
                    colorScheme: o,
                    label: d,
                    radioProps: c,
                    variant: u,
                    ...h
                } = e, {
                    getInputProps: p,
                    getRadioProps: x
                } = (0, a.z)(c), g = (0, i.Vl)("RadioButton", {
                    colorScheme: o,
                    variant: u
                }), f = p(), m = x();
                return (0, r.jsxs)(l.az, {
                    as: "label",
                    width: h.width,
                    height: h.height,
                    sx: {
                        WebkitTapHighlightColor: "transparent"
                    },
                    ...t,
                    children: [(0, r.jsx)("input", { ...f,
                        "aria-label": d
                    }), (0, r.jsx)(s.s, {
                        __css: g,
                        ...m,
                        ...h,
                        children: n
                    })]
                })
            }
        },
        62444: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            var r = n(21462);
            let a = e => {
                let [t, n] = (0, r.useState)(null);
                return (0, r.useEffect)(() => {
                    !t && Object.values(e).every(e => null !== e) && n(e)
                }, [e, t]), t || null
            }
        },
        78892: (e, t, n) => {
            n.d(t, {
                E: () => g
            });
            var r = n(23798),
                a = n(21462),
                i = n(57552),
                l = n(70501),
                s = n(26829),
                o = n(28439),
                d = n(49081),
                c = n(84804),
                u = n(79511),
                h = n(62444),
                p = n(58514);
            let x = "Questions Main",
                g = e => {
                    let {
                        isFirstQuestionStep: t,
                        kojiContainerStyles: n,
                        kojiReaction: g,
                        text: f
                    } = e, m = (0, i.A)(), {
                        hydratedInputs: w,
                        RiveComponent: b
                    } = (() => {
                        let {
                            rive: e,
                            RiveComponent: t
                        } = (0, u.T)({
                            autoplay: !0,
                            src: p.al,
                            stateMachines: [x]
                        }, {
                            fitCanvasToArtboardHeight: !0
                        }), n = {
                            Answered_Break: (0, c.useStateMachineInput)(e, x, "Answered_Break", !1),
                            Answered_Evening: (0, c.useStateMachineInput)(e, x, "Answered_Evening", !1),
                            Answered_Morning: (0, c.useStateMachineInput)(e, x, "Answered_Morning", !1),
                            Answered_Nod: (0, c.useStateMachineInput)(e, x, "Answered_Nod"),
                            Answered_Nod2: (0, c.useStateMachineInput)(e, x, "Answered_Nod2"),
                            Answered_Other: (0, c.useStateMachineInput)(e, x, "Answered_Other", !1),
                            Answered_Shrug: (0, c.useStateMachineInput)(e, x, "Answered_Shrug"),
                            Answered_Surprise: (0, c.useStateMachineInput)(e, x, "Answered_Surprise"),
                            Answered_TempSurprise: (0, c.useStateMachineInput)(e, x, "Answered_TempSurprise"),
                            Idle: (0, c.useStateMachineInput)(e, x, "Idle"),
                            NormalAppear: (0, c.useStateMachineInput)(e, x, "Normal Appear"),
                            ParticleAppear: (0, c.useStateMachineInput)(e, x, "Particle Appear")
                        };
                        return {
                            hydratedInputs: (0, h.A)(n),
                            RiveComponent: t
                        }
                    })();
                    (0, a.useEffect)(() => {
                        w && (Object.keys(w).forEach(e => {
                            let t = w[e];
                            t && (t.value = !1)
                        }), t && null === g ? (() => {
                            var e;
                            null == (e = w.ParticleAppear) || e.fire()
                        })() : null === g ? (() => {
                            var e, t;
                            null == (e = w.NormalAppear) || e.fire(), null == (t = w.Idle) || t.fire()
                        })() : (() => {
                            if (g && w) {
                                let e = w[g.riveState];
                                e && (e.fire(), e.value = !0)
                            }
                        })())
                    }, [null == g ? void 0 : g.text, w]);
                    let v = g ? g.text : f;
                    return (0, r.jsxs)(l.s, {
                        width: "100%",
                        maxWidth: 530,
                        alignItems: "center",
                        minHeight: "92px",
                        children: [(0, r.jsx)(s.az, {
                            width: "84px",
                            height: "84px",
                            ...n,
                            children: (0, r.jsx)(b, {})
                        }), (0, r.jsx)(d.e_, {
                            style: {
                                originX: 0
                            },
                            initial: {
                                scale: .4
                            },
                            animate: {
                                scale: 1
                            },
                            transition: {
                                damping: 19,
                                mass: .95,
                                stiffness: 240,
                                type: "spring"
                            },
                            flex: 1,
                            paddingLeft: {
                                base: 2,
                                md: 4
                            },
                            paddingRight: {
                                base: 0,
                                md: 4
                            },
                            children: (0, r.jsx)(o.E, {
                                fontSize: 20,
                                fontWeight: 500,
                                lineHeight: "125%",
                                children: m.formatMessage(v)
                            })
                        }, v.id)]
                    })
                }
        },
        81714: (e, t, n) => {
            n.d(t, {
                l: () => i
            });
            var r = n(23798),
                a = n(86191);
            let i = e => (0, r.jsxs)(a.I, {
                w: "156px",
                h: "28px",
                viewBox: "0 0 156 28",
                color: "yellow.500",
                ...e,
                children: [(0, r.jsx)("path", {
                    d: "M15.2092 0.109375L19.0989 9.57724L28.7731 10.5832L21.5029 17.4407L23.5922 27.5303L15.2092 22.3005L6.82625 27.5303L8.91555 17.4407L1.64529 10.5832L11.3195 9.57724L15.2092 0.109375Z",
                    fill: "currentcolor"
                }), (0, r.jsx)("path", {
                    d: "M46.6037 0.109375L50.4934 9.57724L60.1676 10.5832L52.8974 17.4407L54.9867 27.5303L46.6037 22.3005L38.2208 27.5303L40.3101 17.4407L33.0398 10.5832L42.714 9.57724L46.6037 0.109375Z",
                    fill: "currentcolor"
                }), (0, r.jsx)("path", {
                    d: "M78.0002 0.109375L81.8899 9.57724L91.5641 10.5832L84.2939 17.4407L86.3832 27.5303L78.0002 22.3005L69.6173 27.5303L71.7066 17.4407L64.4363 10.5832L74.1105 9.57724L78.0002 0.109375Z",
                    fill: "currentcolor"
                }), (0, r.jsx)("path", {
                    d: "M109.395 0.109375L113.284 9.57724L122.959 10.5832L115.688 17.4407L117.778 27.5303L109.395 22.3005L101.012 27.5303L103.101 17.4407L95.8308 10.5832L105.505 9.57724L109.395 0.109375Z",
                    fill: "currentcolor"
                }), (0, r.jsx)("path", {
                    d: "M140.791 0.109375L144.681 9.57724L154.355 10.5832L147.085 17.4407L149.174 27.5303L140.791 22.3005L132.408 27.5303L134.498 17.4407L127.227 10.5832L136.902 9.57724L140.791 0.109375Z",
                    fill: "currentcolor"
                })]
            })
        },
        92510: (e, t, n) => {
            n.d(t, {
                O3: () => u,
                c8: () => h,
                j_: () => d,
                sz: () => c
            });
            var r = n(23798),
                a = n(21462),
                i = n(32587),
                l = n(70501),
                s = n(59979),
                o = n(20495);
            let d = 92,
                c = 32,
                u = 80,
                h = (0, a.forwardRef)((e, t) => {
                    let {
                        containerProps: n,
                        hasFixedHeight: a = !0,
                        renderCta: c,
                        showMobileFooter: u,
                        showShadow: h = !0
                    } = e, p = (0, o.m)(), x = (0, i.A)({
                        base: !0,
                        lg: !1
                    }), g = (0, s.Ub)("(max-height: 800px)"), f = (0, s.Ub)("(min-height: 1000px)"), m = u || x || g;
                    return (0, r.jsx)(l.s, {
                        position: f && !x ? "unset" : "fixed",
                        bottom: "0",
                        left: "0",
                        w: "100%",
                        h: a ? "calc(".concat(d, "px)") : "auto",
                        px: "5",
                        pt: "".concat(16, "px"),
                        pb: m ? "".concat(16, "px") : "".concat(64, "px"),
                        gap: 4,
                        color: "white",
                        zIndex: "2",
                        opacity: +!!p,
                        boxShadow: h && m ? "base" : "",
                        backgroundColor: "white",
                        ...n,
                        children: (0, r.jsx)(l.s, {
                            w: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            ref: t,
                            children: c(!!x)
                        })
                    })
                })
        }
    }
]);