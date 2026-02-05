try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        i = (new e.Error).stack;
    i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "6fb97570-1f9c-4789-98d4-93461dae791a", e._sentryDebugIdIdentifier = "sentry-dbid-6fb97570-1f9c-4789-98d4-93461dae791a")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4526], {
        2457: (e, i, a) => {
            a.d(i, {
                J: () => D
            });
            var s = a(23798),
                t = a(21462),
                l = a(532),
                r = a(57552),
                n = a(86027),
                o = a(56134),
                d = a(23097),
                c = a(42469),
                u = a(24167),
                h = a(23651),
                p = a(9812),
                g = a(19288),
                x = a(93761),
                f = a(56545),
                m = a(26829),
                y = a(24627),
                b = a(42426),
                j = a(28439),
                v = a(22711),
                k = a(62104),
                M = a(54700),
                w = a(47725),
                C = a(79646),
                L = a(13423),
                R = a(70501),
                A = a(90914),
                S = a(6225);
            let P = e => {
                let {
                    modal: i = !0,
                    variant: a
                } = e, {
                    showLoginOptions: l
                } = (0, L.QN)(), r = (0, t.useCallback)(e => {
                    e.preventDefault(), l()
                }, [l]), o = encodeURIComponent((0, M.useRouter)().asPath);
                return (0, s.jsxs)(R.s, {
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "full",
                    gap: 2,
                    children: [(0, s.jsx)(m.az, {
                        maxWidth: {
                            base: "xs",
                            sm: "sm",
                            md: "md"
                        },
                        children: (0, s.jsx)(j.E, {
                            textAlign: "center",
                            textStyle: "bodyXs",
                            color: "gray.700",
                            children: "provisional" === a ? (0, s.jsx)(n.A, {
                                defaultMessage: "By clicking Create account, I agree to Brilliant’s {terms} and {privacyPolicy}",
                                id: "cmbj9L",
                                values: {
                                    privacyPolicy: (0, s.jsx)(v.N, {
                                        variant: "secondary-block",
                                        href: "/privacy/",
                                        target: "_blank",
                                        textDecoration: "underline",
                                        children: (0, s.jsx)(n.A, {
                                            defaultMessage: "Privacy Policy",
                                            id: "vx0nkZ"
                                        })
                                    }),
                                    terms: (0, s.jsx)(v.N, {
                                        variant: "secondary-block",
                                        textDecoration: "underline",
                                        href: "/terms-of-use/",
                                        target: "_blank",
                                        children: (0, s.jsx)(n.A, {
                                            defaultMessage: "Terms",
                                            id: "xkr+zo"
                                        })
                                    })
                                }
                            }) : (0, s.jsx)(n.A, {
                                defaultMessage: "By clicking Sign up, I agree to Brilliant’s {terms} and {privacyPolicy}",
                                id: "OrfTw5",
                                values: {
                                    privacyPolicy: (0, s.jsx)(v.N, {
                                        variant: "secondary-block",
                                        href: "/privacy/",
                                        target: "_blank",
                                        textDecoration: "underline",
                                        children: (0, s.jsx)(n.A, {
                                            defaultMessage: "Privacy Policy",
                                            id: "vx0nkZ"
                                        })
                                    }),
                                    terms: (0, s.jsx)(v.N, {
                                        variant: "secondary-block",
                                        textDecoration: "underline",
                                        href: "/terms-of-use/",
                                        target: "_blank",
                                        children: (0, s.jsx)(n.A, {
                                            defaultMessage: "Terms",
                                            id: "xkr+zo"
                                        })
                                    })
                                }
                            })
                        })
                    }), (0, s.jsx)(R.s, {
                        width: "full",
                        flexDir: {
                            base: "column",
                            md: "row"
                        },
                        gap: {
                            base: 4,
                            md: 16
                        },
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 4,
                        children: (0, s.jsxs)(R.s, {
                            flexDirection: "row",
                            gap: "2",
                            children: [(0, s.jsx)(j.E, {
                                as: "span",
                                children: (0, s.jsx)(n.A, {
                                    defaultMessage: "Existing user?",
                                    id: "VT0Z7c"
                                })
                            }), (0, s.jsx)(A.Q, {
                                chakraLinkProps: {
                                    onClick: i ? r : void 0,
                                    textDecoration: "underline",
                                    variant: "primary"
                                },
                                href: (0, S.Zi)(o),
                                children: (0, s.jsx)(n.A, {
                                    defaultMessage: "Sign in",
                                    id: "SQJto2"
                                })
                            })]
                        })
                    })]
                })
            };
            var _ = a(47717),
                E = a(16728),
                B = a(82313),
                z = a(41991);
            let I = e => {
                    let {
                        ariaLabel: i,
                        children: a,
                        containerRef: t,
                        size: l = 20
                    } = e, r = "".concat(l, "px"), n = (0, o.Vg)("bits-space-0-5");
                    return (0, s.jsxs)(d.A, {
                        placement: "right",
                        closeOnBlur: !1,
                        children: [(0, s.jsx)(c.W, {
                            children: (0, s.jsx)(u.K, {
                                isRound: !0,
                                variant: "solid",
                                colorScheme: "gray",
                                w: r,
                                minW: r,
                                h: r,
                                tabIndex: -1,
                                position: "absolute",
                                right: (0, o._u)(r).negate().subtract(n).subtract("5px").toString(),
                                top: (0, o._u)("50%").subtract((0, o._u)(r).divide(2).toString()).toString(),
                                icon: (0, s.jsx)(C.J, {
                                    w: (0, o._u)(r).divide(2).toString(),
                                    h: (0, o._u)(r).divide(2).toString()
                                }),
                                "aria-label": i
                            })
                        }), (0, s.jsx)(h.Z, {
                            containerRef: t,
                            children: (0, s.jsxs)(p.h, {
                                w: "fit-content",
                                maxW: "177px",
                                children: [(0, s.jsx)(g.R, {}), (0, s.jsx)(x.e, {
                                    display: "flex",
                                    flexDir: "column",
                                    gap: 4,
                                    p: 4,
                                    fontSize: "xs",
                                    lineHeight: "shorter",
                                    children: a
                                })]
                            })
                        })]
                    })
                },
                D = e => {
                    let {
                        containerRef: i,
                        modal: a = !0,
                        variant: o
                    } = e, {
                        formState: {
                            errors: d,
                            isSubmitting: c
                        },
                        handleSubmit: u,
                        register: h,
                        setValue: p,
                        watch: g
                    } = (0, l.mN)({
                        mode: "onChange"
                    }), x = (0, M.useRouter)(), C = (0, r.A)(), R = (0, B.e)(), {
                        csrfToken: A
                    } = (0, E.U)(), D = (0, w.Y4)(), {
                        extraParams: N = {},
                        nextUrl: O
                    } = (0, L.QN)(), H = (O ? (0, z.Si)(O) : null) || x.asPath, [V, T] = (0, t.useState)(!1), F = g(), U = 0 === Object.keys(d).length, Z = "provisional" === o;
                    (0, t.useEffect)(() => {
                        p("next", H)
                    }, [H, p]), (0, t.useEffect)(() => {
                        F.email && F.email.includes("@") && !V && (T(!0), a || D(_.zXm, {
                            isActionUi: !0,
                            signupLocation: x.asPath.includes("signup") ? "page" : "modal",
                            signupMethod: "email"
                        }))
                    }, [F.email, a, x.asPath, D, V]);
                    let q = "".concat(R).concat((0, S.dJ)((0, z.Si)(H, S.Ec))).concat(Object.keys(N).length > 0 ? "&".concat(new URLSearchParams(N).toString()) : ""),
                        G = x.query.courseSlug,
                        X = async () => {
                            V || T(!0)
                        },
                        W = V && U ? void 0 : u(X);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("form", {
                            "aria-label": C.formatMessage({
                                defaultMessage: "signup form",
                                id: "kLSWUM"
                            }),
                            method: "POST",
                            action: q,
                            onSubmit: W,
                            children: (0, s.jsxs)(f.T, {
                                alignItems: "center",
                                spacing: 6,
                                children: [(0, s.jsxs)(m.az, {
                                    width: "100%",
                                    children: [(0, s.jsx)(y.p, {
                                        type: "hidden",
                                        ...h("city")
                                    }), (0, s.jsx)(y.p, {
                                        type: "hidden",
                                        ...h("country_of_residence")
                                    }), (0, s.jsx)(y.p, {
                                        type: "hidden",
                                        ...h("school")
                                    }), (0, s.jsx)(y.p, {
                                        type: "hidden",
                                        ...h("institution_type"),
                                        value: 0
                                    }), (0, s.jsx)(y.p, {
                                        type: "hidden",
                                        ...h("already_escaped"),
                                        value: "true"
                                    }), (0, s.jsx)(y.p, {
                                        type: "hidden",
                                        ...h("csrfmiddlewaretoken"),
                                        value: A
                                    }), (0, s.jsx)(y.p, {
                                        type: "hidden",
                                        ...h("next")
                                    }), G && (0, s.jsx)(y.p, {
                                        type: "hidden",
                                        ...h("signup_course_slug"),
                                        value: G
                                    }), (0, s.jsxs)(f.T, {
                                        spacing: 3,
                                        children: [(0, s.jsxs)(b.M, {
                                            children: [(0, s.jsx)(y.p, { ...h("email", {
                                                    required: !0
                                                }),
                                                type: "email",
                                                maxLength: 75,
                                                htmlSize: 75,
                                                height: 12,
                                                borderRadius: "10px",
                                                placeholder: C.formatMessage({
                                                    defaultMessage: "Email",
                                                    id: "sy+pv5"
                                                }),
                                                width: "full",
                                                focusBorderColor: "black",
                                                autoFocus: !0
                                            }), (0, s.jsxs)(I, {
                                                containerRef: i,
                                                ariaLabel: C.formatMessage({
                                                    defaultMessage: "show explanation of why email is needed",
                                                    id: "R4Byc9"
                                                }),
                                                children: [(0, s.jsx)(j.E, {
                                                    children: (0, s.jsx)(n.A, {
                                                        defaultMessage: "We need your email address for essential product functions like resetting your password and notifications.",
                                                        id: "0l9htz"
                                                    })
                                                }), (0, s.jsx)(j.E, {
                                                    children: (0, s.jsx)(n.A, {
                                                        defaultMessage: "You'll receive notifications about new content and the very occasional newsletter from the Brilliant team. You may unsubscribe at any point.",
                                                        id: "GDn23P"
                                                    })
                                                })]
                                            })]
                                        }), (0, s.jsx)(m.az, {
                                            display: V ? "block" : "none",
                                            children: (0, s.jsxs)(f.T, {
                                                spacing: 3,
                                                children: [(0, s.jsx)(y.p, { ...h("password1", {
                                                        required: !0
                                                    }),
                                                    type: "password",
                                                    placeholder: C.formatMessage({
                                                        defaultMessage: "Password",
                                                        id: "5sg7KC"
                                                    }),
                                                    borderRadius: "10px",
                                                    width: "full",
                                                    height: 12,
                                                    focusBorderColor: "black"
                                                }), (0, s.jsxs)(b.M, {
                                                    children: [(0, s.jsx)(y.p, { ...h("first_name", {
                                                            required: !0
                                                        }),
                                                        type: "text",
                                                        maxLength: 30,
                                                        htmlSize: 30,
                                                        placeholder: C.formatMessage({
                                                            defaultMessage: "First name",
                                                            id: "pONqz8"
                                                        }),
                                                        width: "full",
                                                        height: 12,
                                                        focusBorderColor: "black",
                                                        borderRadius: "10px",
                                                        borderTopRightRadius: 0,
                                                        borderBottomRightRadius: 0
                                                    }), (0, s.jsx)(y.p, { ...h("last_name", {
                                                            required: !0
                                                        }),
                                                        type: "text",
                                                        maxLength: 30,
                                                        htmlSize: 30,
                                                        placeholder: C.formatMessage({
                                                            defaultMessage: "Last name",
                                                            id: "txUL0F"
                                                        }),
                                                        width: "full",
                                                        height: 12,
                                                        focusBorderColor: "black",
                                                        borderRadius: "10px",
                                                        borderTopLeftRadius: 0,
                                                        borderBottomLeftRadius: 0,
                                                        ml: "-1px"
                                                    })]
                                                }), (0, s.jsxs)(b.M, {
                                                    children: [(0, s.jsx)(y.p, { ...h("birthday", {
                                                            required: !0
                                                        }),
                                                        type: "number",
                                                        maxLength: 75,
                                                        htmlSize: 75,
                                                        height: 12,
                                                        borderRadius: "10px",
                                                        placeholder: C.formatMessage({
                                                            defaultMessage: "Age",
                                                            id: "9oNQSC"
                                                        }),
                                                        width: "full",
                                                        focusBorderColor: "black"
                                                    }), (0, s.jsx)(I, {
                                                        containerRef: i,
                                                        ariaLabel: C.formatMessage({
                                                            defaultMessage: "show explanation of why age is needed",
                                                            id: "Ag/IXc"
                                                        }),
                                                        children: (0, s.jsx)(j.E, {
                                                            children: (0, s.jsx)(n.A, {
                                                                defaultMessage: "Filling in your age lets us customize the problem solving experience for you (and stay in compliance with local regulations). For more detail, check out the {privacyPolicy}.",
                                                                id: "1Rdq93",
                                                                values: {
                                                                    privacyPolicy: (0, s.jsx)(v.N, {
                                                                        variant: "primary",
                                                                        href: "/privacy/",
                                                                        target: "_blank",
                                                                        "data-testid": "explainer-privacy-policy-link",
                                                                        children: (0, s.jsx)(n.A, {
                                                                            defaultMessage: "privacy policy",
                                                                            id: "LIDXd2"
                                                                        })
                                                                    })
                                                                }
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })]
                                }), (0, s.jsx)(k.$, {
                                    type: "submit",
                                    onClick: () => {
                                        V && U && D(_.edG, {
                                            isActionUi: !0,
                                            signupLocation: x.asPath.includes("signup") ? "page" : "modal",
                                            signupMethod: "email"
                                        })
                                    },
                                    disabled: c,
                                    variant: "pillPrimary",
                                    width: "full",
                                    children: Z ? (0, s.jsx)(n.A, {
                                        defaultMessage: "Create account",
                                        id: "huqKGl"
                                    }) : (0, s.jsx)(n.A, {
                                        defaultMessage: "Sign up",
                                        id: "8HJxXG"
                                    })
                                })]
                            })
                        }), (0, s.jsx)(m.az, {
                            flex: 1,
                            mt: 4,
                            children: (0, s.jsx)(P, {
                                modal: a,
                                variant: o
                            })
                        })]
                    })
                }
        },
        41692: (e, i, a) => {
            a.d(i, {
                N: () => l
            });
            var s = a(23798),
                t = a(86191);
            let l = e => (0, s.jsxs)(t.I, {
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
        64755: (e, i, a) => {
            a.d(i, {
                A: () => p
            });
            var s = a(21462),
                t = a(54700),
                l = a(47725),
                r = a(13423),
                n = a(53094),
                o = a(47717),
                d = a(6622),
                c = a(85375),
                u = a(41991),
                h = a(6225);

            function p() {
                let e = (0, l.Y4)(),
                    i = (0, t.useRouter)(),
                    {
                        beginEmailLogin: a,
                        beginEmailSignup: p,
                        nextUrl: g
                    } = (0, r.QN)(),
                    x = (g ? (0, u.Si)(g) : null) || i.asPath,
                    f = x.includes("signup") ? "page" : "modal",
                    m = (0, s.useCallback)(s => {
                        switch (s) {
                            case c.O.Google:
                                e(o.kAk, n.LP);
                                break;
                            case c.O.Facebook:
                                e(o.BII, n.LP);
                                break;
                            case c.O.Apple:
                                e(o.TkE, n.LP);
                                break;
                            case c.O.Email:
                                a(), e(o.vUc, n.LP);
                                break;
                            default:
                                (0, d.$)(s)
                        }
                        s !== c.O.Email && i.push((0, h.bS)(s, x))
                    }, [e, a, i, x]);
                return {
                    beforeLoginNav: () => e(o.bBH, n.LP),
                    beforeSignupNav: () => e(o.C4G, n.LP),
                    loginWith: m,
                    signupWith: (0, s.useCallback)(a => {
                        switch (a) {
                            case c.O.Google:
                                e(o.zXm, {
                                    isActionUi: !0,
                                    signupLocation: f,
                                    signupMethod: "google"
                                });
                                break;
                            case c.O.Facebook:
                                e(o.zXm, {
                                    isActionUi: !0,
                                    signupLocation: f,
                                    signupMethod: "facebook"
                                });
                                break;
                            case c.O.Email:
                                p(), e(o.zXm, {
                                    isActionUi: !0,
                                    signupLocation: f,
                                    signupMethod: "email"
                                });
                                break;
                            default:
                                (0, d.$)(a)
                        }
                        a !== c.O.Email && i.push((0, h.bS)(a, x))
                    }, [e, f, p, i, x])
                }
            }
        },
        79646: (e, i, a) => {
            a.d(i, {
                J: () => l
            });
            var s = a(23798),
                t = a(86191);
            let l = e => (0, s.jsx)(t.I, {
                w: "16px",
                h: "16px",
                viewBox: "0 0 16 16",
                fill: "none",
                ...e,
                children: (0, s.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.2892 0H5.46079L2.875 2.58579V5H4.875V3.41421L6.28921 2H9.46077L10.8749 3.4142V5.96716L6.875 8.18938V12H8.875V9.36617L12.8749 7.14395V2.5858L10.2892 0ZM8.875 14H6.875V16H8.875V14Z",
                    fill: "currentColor"
                })
            })
        },
        85375: (e, i, a) => {
            a.d(i, {
                O: () => s
            });
            var s = function(e) {
                return e.Google = "Google", e.Facebook = "Facebook", e.Apple = "Apple", e.Email = "Email", e
            }({})
        }
    }
]);