try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8fe93c92-6f3c-4917-bcd8-30b4da558e69", e._sentryDebugIdIdentifier = "sentry-dbid-8fe93c92-6f3c-4917-bcd8-30b4da558e69")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2637], {
        72637: (e, a, t) => {
            t.d(a, {
                G: () => R
            });
            var s = t(23798),
                r = t(21462),
                i = t(63856),
                n = t(532),
                l = t(57552),
                d = t(86027),
                o = t(56545),
                c = t(26829),
                h = t(24627),
                u = t(62104),
                g = t(54700),
                p = t(13423),
                f = t(70501),
                x = t(28439),
                m = t(22711),
                j = t(90914);
            let y = e => {
                let {
                    onSignupClick: a
                } = e, {
                    closeLoginOrSignupModal: t
                } = (0, p.QN)(), r = (0, g.useRouter)(), i = a ? {
                    chakraLinkProps: {
                        onClick: a,
                        textDecoration: "underline",
                        variant: "primary"
                    },
                    href: "#"
                } : {
                    chakraLinkProps: {
                        onClick: e => {
                            e.preventDefault(), t(), r.push("/welcome/")
                        },
                        textDecoration: "underline",
                        variant: "primary"
                    },
                    href: "/welcome/",
                    nextLinkProps: {
                        prefetch: !0
                    }
                };
                return (0, s.jsxs)(f.s, {
                    flexDirection: "column",
                    children: [(0, s.jsxs)(f.s, {
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
                        children: [(0, s.jsx)(c.az, {
                            children: (0, s.jsx)(j.Q, {
                                chakraLinkProps: {
                                    textDecoration: "underline",
                                    variant: "primary"
                                },
                                href: "/account/password/reset/",
                                children: (0, s.jsx)(d.A, {
                                    defaultMessage: "Reset password",
                                    id: "Yy/yDL"
                                })
                            })
                        }), (0, s.jsxs)(f.s, {
                            flexDirection: "row",
                            gap: "2",
                            children: [(0, s.jsx)(x.E, {
                                as: "span",
                                color: "black",
                                children: (0, s.jsx)(d.A, {
                                    defaultMessage: "New user? ",
                                    id: "ei7GHK"
                                })
                            }), (0, s.jsx)(j.Q, { ...i,
                                children: (0, s.jsx)(d.A, {
                                    defaultMessage: "Sign up",
                                    id: "8HJxXG"
                                })
                            })]
                        })]
                    }), (0, s.jsx)(c.az, {
                        mt: "20",
                        maxWidth: {
                            base: "xs",
                            sm: "sm",
                            md: "md"
                        },
                        children: (0, s.jsx)(x.E, {
                            color: "gray.700",
                            textAlign: "center",
                            textStyle: "bodyXs",
                            children: (0, s.jsx)(d.A, {
                                defaultMessage: "This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsAndServices} apply",
                                id: "xd72Ww",
                                values: {
                                    privacyPolicy: (0, s.jsx)(m.N, {
                                        variant: "secondary",
                                        textDecor: "none",
                                        href: "https://policies.google.com/privacy?hl=en",
                                        target: "_blank",
                                        children: (0, s.jsx)(d.A, {
                                            defaultMessage: "Privacy Policy",
                                            id: "vx0nkZ"
                                        })
                                    }),
                                    termsAndServices: (0, s.jsx)(m.N, {
                                        variant: "secondary",
                                        textDecor: "none",
                                        href: "https://policies.google.com/terms?hl=en",
                                        target: "_blank",
                                        children: (0, s.jsx)(d.A, {
                                            defaultMessage: "Terms and Services",
                                            id: "Hlwzws"
                                        })
                                    })
                                }
                            })
                        })
                    })]
                })
            };
            var b = t(43599),
                _ = t(6622),
                w = function(e) {
                    return e.FAILED_LOGIN = "failed_login", e.FAILED_RECAPTCHA = "failed_recaptcha", e.DEACTIVATED_ACCOUNT = "account_deactivated", e.GENERIC_ERROR = "generic_error", e.CHALLENGE_COMPLETED = "challenge_completed", e
                }({});
            let A = e => (0, s.jsx)(m.N, {
                    href: "mailto:support@brilliant.org",
                    children: e
                }),
                E = e => {
                    let a, {
                            type: t
                        } = e,
                        r = "challenge_completed" === t;
                    switch (t) {
                        case "failed_login":
                            a = (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(x.E, {
                                    as: "span",
                                    fontWeight: "bold",
                                    paddingRight: "1",
                                    children: (0, s.jsx)(d.A, {
                                        defaultMessage: "The email and/or password you specified are not correct.",
                                        id: "O/xy3e"
                                    })
                                }), (0, s.jsx)(d.A, {
                                    defaultMessage: "If you forgot your password or never set one, you can reset it easily. If you signed up with Google or another third-party service, choose to sign in with that method instead.",
                                    id: "OUYU6P"
                                })]
                            });
                            break;
                        case "failed_recaptcha":
                            a = (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(x.E, {
                                    as: "span",
                                    fontWeight: "bold",
                                    paddingRight: "1",
                                    children: (0, s.jsx)(d.A, {
                                        defaultMessage: "Sorry - the reCAPTCHA check failed!",
                                        id: "2tzAFQ"
                                    })
                                }), (0, s.jsx)(d.A, {
                                    defaultMessage: "Please try again.",
                                    id: "VjB59s"
                                })]
                            });
                            break;
                        case "generic_error":
                            a = (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(x.E, {
                                    as: "span",
                                    fontWeight: "bold",
                                    paddingRight: "1",
                                    children: (0, s.jsx)(d.A, {
                                        defaultMessage: "Internal server error!",
                                        id: "abo6KO"
                                    })
                                }), (0, s.jsx)(d.A, {
                                    defaultMessage: "Please try again later.",
                                    id: "EjH+J3"
                                })]
                            });
                            break;
                        case "account_deactivated":
                            a = (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(x.E, {
                                    as: "span",
                                    fontWeight: "bold",
                                    paddingRight: "1",
                                    children: (0, s.jsx)(d.A, {
                                        defaultMessage: "This account has been deactivated.",
                                        id: "Qlwl8N"
                                    })
                                }), (0, s.jsx)(d.A, {
                                    defaultMessage: "To reactivate your account, please contact <mail>support@brilliant.org</mail>.",
                                    id: "klOMTf",
                                    values: {
                                        mail: A
                                    }
                                })]
                            });
                            break;
                        case "challenge_completed":
                            a = (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(x.E, {
                                    as: "span",
                                    fontWeight: "bold",
                                    paddingRight: "1",
                                    children: (0, s.jsx)(d.A, {
                                        defaultMessage: "Security check completed.",
                                        id: "XrihX+"
                                    })
                                }), (0, s.jsx)(d.A, {
                                    defaultMessage: "Please sign in again to continue.",
                                    id: "QTWich"
                                })]
                            });
                            break;
                        default:
                            return (0, _.$)(t)
                    }
                    return (0, s.jsx)(b.F, {
                        background: r ? "blue.50" : "red.50",
                        status: r ? "info" : "error",
                        borderInlineStartWidth: "inherit",
                        borderInlineStartColor: "inherit",
                        children: (0, s.jsx)(x.E, {
                            color: r ? "blue.500" : "red.500",
                            children: a
                        })
                    })
                };
            async function C(e) {
                return "challenge" === e.headers.get("cf-mitigated") ? {
                    challengeType: "managed",
                    isChallenge: !0
                } : {
                    isChallenge: !1
                }
            }
            async function v(e) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        onChallengeDetected: t,
                        returnUrl: s,
                        ...r
                    } = a,
                    i = await fetch(e, r);
                if ((await C(i)).isChallenge) {
                    null == t || t();
                    let e = s || window.location.pathname + window.location.search,
                        a = "/cf-challenge?return=".concat(encodeURIComponent(e));
                    return window.location.href = a, new Promise(() => {})
                }
                return i
            }
            var T = t(16728),
                k = t(82313),
                I = t(41991),
                D = t(6225);
            let R = e => {
                let {
                    method: a,
                    onSignupClick: t
                } = e, {
                    executeRecaptcha: f
                } = (0, i._Y)(), {
                    control: x,
                    formState: {
                        isSubmitting: m
                    },
                    handleSubmit: j,
                    register: b,
                    setValue: _
                } = (0, n.mN)(), A = (0, g.useRouter)(), C = (0, l.A)(), R = (0, n.FH)({
                    control: x,
                    name: "g-recaptcha-response"
                }), [P, M] = (0, r.useState)(void 0), N = A.asPath, L = (0, k.e)(), S = "".concat(L).concat((0, D.Zi)(N, !0)), {
                    nextUrl: O
                } = (0, p.QN)(), F = (O ? (0, I.Si)(O) : null) || A.asPath;
                (0, r.useEffect)(() => {
                    _("next", F)
                }, [F, _]), (0, r.useEffect)(() => {
                    var e;
                    (null == (e = A.query) ? void 0 : e.cf_challenge_completed) === "true" && M(w.CHALLENGE_COMPLETED)
                }, [A]);
                let {
                    csrfToken: G
                } = (0, T.U)(), H = (0, r.useCallback)(async () => {
                    f && _("g-recaptcha-response", await f())
                }, [f, _]);
                (0, r.useEffect)(() => {
                    R || H();
                    let e = setTimeout(H, 6e4);
                    return () => clearInterval(e)
                }, [f, _, R, H]);
                let W = async e => {
                    try {
                        let t = await v(S, {
                                body: JSON.stringify({ ...e
                                }),
                                headers: {
                                    "Content-Type": "application/json",
                                    "X-CSRFToken": G,
                                    "X-Requested-With": "XMLHttpRequest"
                                },
                                method: "POST",
                                returnUrl: (0, I.ev)("/login/", {
                                    cf_challenge_completed: "true"
                                })
                            }),
                            s = await t.json();
                        if (s.success)
                            if (N.includes("login")) {
                                let e = F && F !== N ? F : D.j_;
                                A.push(e)
                            } else if ((null == s ? void 0 : s.redirect_url) && s.redirect_url === N) A.reload();
                        else {
                            var a;
                            window.location.assign(null != (a = s.redirect_url) ? a : D.j_)
                        } else s.success || (H(), (null == s ? void 0 : s.error) === w.FAILED_RECAPTCHA ? M(w.FAILED_RECAPTCHA) : (null == s ? void 0 : s.error) === w.FAILED_LOGIN ? M(w.FAILED_LOGIN) : (null == s ? void 0 : s.error) === w.DEACTIVATED_ACCOUNT ? M(w.DEACTIVATED_ACCOUNT) : M(w.GENERIC_ERROR))
                    } catch (e) {
                        M(w.GENERIC_ERROR)
                    }
                };
                return (0, s.jsxs)("form", {
                    "data-testid": "email-login-form",
                    method: "POST",
                    action: S,
                    ..."ajax" === a && {
                        onSubmit: j(W)
                    },
                    children: [(0, s.jsxs)(o.T, {
                        alignItems: "center",
                        spacing: 6,
                        children: [P ? (0, s.jsx)(c.az, {
                            "data-testid": "login-form-error",
                            maxWidth: {
                                base: "xs",
                                sm: "sm",
                                md: "md"
                            },
                            width: "100%",
                            children: (0, s.jsx)(E, {
                                type: P
                            })
                        }) : null, (0, s.jsxs)(c.az, {
                            width: "100%",
                            children: [(0, s.jsx)(h.p, {
                                type: "hidden",
                                ...b("csrfmiddlewaretoken"),
                                value: G
                            }), (0, s.jsx)(h.p, {
                                type: "hidden",
                                ...b("next")
                            }), (0, s.jsxs)(o.T, {
                                spacing: 3,
                                children: [(0, s.jsx)(h.p, {
                                    focusBorderColor: "black",
                                    ...b("login", {
                                        required: !0
                                    }),
                                    type: "email",
                                    "data-testid": "login_email",
                                    width: "100%",
                                    height: 12,
                                    autoFocus: !0,
                                    placeholder: C.formatMessage({
                                        defaultMessage: "Email",
                                        id: "sy+pv5"
                                    }),
                                    id: "id_login"
                                }), (0, s.jsx)(h.p, {
                                    focusBorderColor: "black",
                                    ...b("password", {
                                        required: !0
                                    }),
                                    type: "password",
                                    width: "100%",
                                    height: 12,
                                    "data-testid": "login_password",
                                    placeholder: C.formatMessage({
                                        defaultMessage: "Password",
                                        id: "5sg7KC"
                                    }),
                                    id: "id_password"
                                }), (0, s.jsx)(h.p, {
                                    type: "hidden",
                                    ...b("g-recaptcha-response")
                                })]
                            })]
                        }), (0, s.jsx)(u.$, {
                            disabled: m,
                            "data-testid": "submit_email_login",
                            type: "submit",
                            variant: "pillPrimary",
                            width: "full",
                            children: (0, s.jsx)(d.A, {
                                defaultMessage: "Sign in",
                                id: "SQJto2"
                            })
                        })]
                    }), (0, s.jsx)(o.T, {
                        children: (0, s.jsx)(c.az, {
                            mt: 10,
                            children: (0, s.jsx)(y, {
                                onSignupClick: t
                            })
                        })
                    })]
                })
            }
        }
    }
]);