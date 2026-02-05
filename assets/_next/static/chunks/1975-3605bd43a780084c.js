try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        l = (new e.Error).stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "ef421091-b521-4cc0-a57d-66507d0bd505", e._sentryDebugIdIdentifier = "sentry-dbid-ef421091-b521-4cc0-a57d-66507d0bd505")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1975], {
        2651: (e, l, r) => {
            r.d(l, {
                T: () => t
            });
            var s = r(23798),
                a = r(86191);
            let t = e => (0, s.jsxs)(a.I, {
                width: "114px",
                height: "27px",
                color: "black",
                viewBox: "0 0 114 27",
                fill: "none",
                ...e,
                children: [(0, s.jsx)("path", {
                    d: "M39.6614 0H35.8083V3.84981H39.6614V0Z",
                    fill: "currentColor"
                }), (0, s.jsx)("path", {
                    d: "M26.2288 9.53622H25.84V7.52301H21.9869V26.4895H25.84V16.2822C25.84 12.9622 27.8548 10.843 31.0009 10.843H33.546V7.52301H30.8948C28.9153 7.52301 27.36 8.19408 26.2288 9.53622Z",
                    fill: "currentColor"
                }), (0, s.jsx)("path", {
                    d: "M39.6614 7.52301H35.8083V26.4895H39.6614V7.52301Z",
                    fill: "currentColor"
                }), (0, s.jsx)("path", {
                    d: "M16.6493 11.9168C18.018 10.7533 18.8056 8.9962 18.8056 6.99324C18.8056 3.03747 15.7302 0 11.9833 0H0V26.4895H15.7302L19.0177 23.2402V14.5516L16.6493 12.2873V11.9171V11.9168ZM3.85302 3.35534H11.347C13.4679 3.35534 15.1293 4.98003 15.1293 7.06388C15.1293 9.14772 13.4679 10.8077 11.347 10.8077H3.85302V3.35534ZM15.0233 23.1342H3.85302V14.1984H15.0233V23.1342Z",
                    fill: "currentColor"
                }), (0, s.jsx)("path", {
                    d: "M78.4744 9.39498H78.0856C76.2828 7.98221 74.3032 7.27582 72.1116 7.27582C66.5618 7.27582 62.1786 11.5495 62.1786 17.1299C62.1786 22.7104 66.3144 26.7368 71.9702 26.7368C74.3739 26.7368 76.3888 25.9951 78.0856 24.6176H78.4744V26.4896H82.3274V7.52305H78.4744V9.39498ZM72.1823 23.4168C68.6121 23.4168 65.7488 20.5912 65.7488 16.9887C65.7488 13.3861 68.6121 10.5958 72.1823 10.5958C75.7525 10.5958 78.5805 13.4214 78.5805 16.9887C78.5805 20.5559 75.7525 23.4168 72.1823 23.4168Z",
                    fill: "currentColor"
                }), (0, s.jsx)("path", {
                    d: "M85.1199 7.52301V26.4895H88.9729V10.8784H97.3152V26.4895H101.168V10.7018L97.9868 7.52301H85.1199Z",
                    fill: "currentColor"
                }), (0, s.jsx)("path", {
                    d: "M60.0576 0H56.2046V3.84981H60.0576V0Z",
                    fill: "currentColor"
                }), (0, s.jsx)("path", {
                    d: "M46.4838 0H42.5601V26.4895H46.4838V0Z",
                    fill: "currentColor"
                }), (0, s.jsx)("path", {
                    d: "M114 10.8431V7.52305H107.779V2.08386H103.926V22.4985C103.926 24.7589 105.622 26.4896 107.885 26.4896H114V23.1342H107.779V10.8431H114Z",
                    fill: "currentColor"
                }), (0, s.jsx)("path", {
                    d: "M60.0576 7.52301H56.2046V26.4895H60.0576V7.52301Z",
                    fill: "currentColor"
                }), (0, s.jsx)("path", {
                    d: "M53.306 0H49.3823V26.4895H53.306V0Z",
                    fill: "currentColor"
                })]
            })
        },
        16728: (e, l, r) => {
            r.d(l, {
                I: () => t,
                U: () => i
            });
            var s = r(28799),
                a = r(84678);

            function t() {
                return new Promise(e => {
                    let l = () => e((0, s.Qm)() || ""),
                        r = (0, s.Qm)();
                    if (r) return void e(r);
                    (0, a.q)().then(l).catch(l)
                })
            }

            function i() {
                return (0, a.Z)(() => !(0, s.Qm)()), {
                    csrfToken: (0, s.Qm)()
                }
            }
        },
        22159: (e, l, r) => {
            r.d(l, {
                w: () => q
            });
            var s = r(23798),
                a = r(70501),
                t = r(83902),
                i = r(64724),
                n = r(12977),
                o = r(90914),
                d = r(2651),
                c = r(41929),
                h = r(86027),
                x = r(56545),
                f = r(57552),
                C = r(26829),
                g = r(28439);
            let u = e => {
                    let {
                        children: l,
                        href: r,
                        ...a
                    } = e;
                    return (0, s.jsx)(o.Q, {
                        href: r,
                        chakraLinkProps: {
                            borderBottom: "2px solid transparent",
                            color: "white",
                            position: "relative",
                            _hover: {
                                borderBottom: "2px solid",
                                borderColor: "blue.500"
                            },
                            ...a
                        },
                        children: l
                    })
                },
                p = e => {
                    let {
                        links: l,
                        title: r
                    } = e, a = (0, f.A)();
                    return (0, s.jsxs)(C.az, {
                        children: [(0, s.jsx)(g.E, {
                            color: "gray.500",
                            fontWeight: "normal",
                            fontSize: "md",
                            mb: 4,
                            children: a.formatMessage(r)
                        }), (0, s.jsx)(x.T, {
                            alignItems: "left",
                            spacing: 3,
                            children: l.map(e => {
                                let {
                                    href: l,
                                    label: r,
                                    onClick: a
                                } = e;
                                return (0, s.jsx)(C.az, {
                                    onClick: a,
                                    children: (0, s.jsx)(u, {
                                        href: l,
                                        children: r
                                    })
                                }, l)
                            })
                        })]
                    })
                },
                b = (0, c.zR)({
                    defaultMessage: "Behind the scenes",
                    id: "b4Z16R"
                }),
                j = [{
                    href: "https://blog.brilliant.org/hand-crafted-machine-made/",
                    label: (0, s.jsx)(h.A, {
                        defaultMessage: "AI at Brilliant",
                        id: "TxVJYZ"
                    })
                }, {
                    href: "https://blog.brilliant.org/when-almost-right-is-catastrophically-wrong-evals-for-ai-learning-games/",
                    label: (0, s.jsx)(h.A, {
                        defaultMessage: "AI Evals for Learning Games",
                        id: "/S0zR7"
                    })
                }, {
                    href: "https://blog.brilliant.org/solving-equations/",
                    label: (0, s.jsx)(h.A, {
                        defaultMessage: "Solving Equations",
                        id: "X/7CDs"
                    })
                }, {
                    href: "https://blog.brilliant.org/thinking-in-code/",
                    label: (0, s.jsx)(h.A, {
                        defaultMessage: "Thinking in Code",
                        id: "AJQWmE"
                    })
                }, {
                    href: "https://blog.brilliant.org/visual-algebra/",
                    label: (0, s.jsx)(h.A, {
                        defaultMessage: "Visual Algebra",
                        id: "G2pD4B"
                    })
                }, {
                    href: "https://blog.brilliant.org/decomposition-and-abstraction/",
                    label: (0, s.jsx)(h.A, {
                        defaultMessage: "Decomposition and Abstraction",
                        id: "EKhaHW"
                    })
                }],
                m = () => (0, s.jsx)(x.T, {
                    gap: 6,
                    align: "left",
                    children: (0, s.jsx)(p, {
                        title: b,
                        links: j
                    })
                }),
                H = [{
                    href: "/terms-of-use/",
                    label: (0, s.jsx)(h.A, {
                        defaultMessage: "Terms of service",
                        id: "FqgDIV"
                    })
                }, {
                    href: "/privacy/",
                    label: (0, s.jsx)(h.A, {
                        defaultMessage: "Privacy policy",
                        id: "cPwv2c"
                    })
                }, {
                    href: "/cookie-policy#types-of-cookies",
                    label: (0, s.jsx)(h.A, {
                        defaultMessage: "Do not sell my personal information",
                        id: "9t2dgy"
                    })
                }, {
                    href: "/ccpa-policy/",
                    label: (0, s.jsx)(h.A, {
                        defaultMessage: "California privacy policy",
                        id: "DDbETW"
                    })
                }],
                w = e => (0, s.jsxs)(a.s, {
                    gap: 8,
                    w: "full",
                    flexDir: {
                        base: "column",
                        xl: "row"
                    },
                    justifyContent: "space-between",
                    mb: {
                        base: "12",
                        xl: "20"
                    },
                    children: [(0, s.jsx)(a.s, {
                        gap: {
                            base: 3,
                            lg: 4
                        },
                        flexDir: {
                            base: "column",
                            md: "row"
                        },
                        alignItems: "center",
                        ...e,
                        children: H.map(e => {
                            let {
                                href: l,
                                label: r
                            } = e;
                            return (0, s.jsx)(a.s, {
                                w: {
                                    base: "full",
                                    md: "initial"
                                },
                                justifyContent: "flex-start",
                                children: (0, s.jsx)(u, {
                                    href: l,
                                    fontSize: "xs",
                                    color: "gray.500",
                                    children: r
                                }, l)
                            }, l)
                        })
                    }), (0, s.jsx)(g.E, {
                        width: {
                            xl: "50%"
                        },
                        fontSize: "xs",
                        color: "gray.500",
                        wordBreak: "break-word",
                        children: (0, s.jsx)(h.A, {
                            defaultMessage: "\xa9 {year} Brilliant Worldwide, Inc., Brilliant and the Brilliant Logo are trademarks of Brilliant Worldwide, Inc.",
                            values: {
                                year: new Date().getFullYear()
                            },
                            id: "DTrn63"
                        })
                    })]
                }),
                V = (0, c.zR)({
                    defaultMessage: "Company",
                    id: "9YazHG"
                }),
                M = [{
                    href: "/about/",
                    label: (0, s.jsx)(h.A, {
                        defaultMessage: "About us",
                        id: "wGhqrf"
                    })
                }, {
                    href: "/careers/",
                    label: (0, s.jsx)(h.A, {
                        defaultMessage: "Careers",
                        id: "yJ1ORH"
                    })
                }, {
                    href: "/educators/",
                    label: (0, s.jsx)(h.A, {
                        defaultMessage: "Educators",
                        id: "unYbzq"
                    })
                }],
                y = () => (0, s.jsx)(x.T, {
                    gap: 6,
                    align: "left",
                    children: (0, s.jsx)(p, {
                        title: V,
                        links: M
                    })
                });
            var v = r(54700),
                k = r(47725),
                A = r(47717),
                Z = r(6225);
            let I = (0, c.zR)({
                    defaultMessage: "Product",
                    id: "x/ZVlU"
                }),
                L = () => {
                    let e = (0, v.useRouter)(),
                        l = (0, k.Y4)(),
                        r = [{
                            href: "/courses/",
                            label: (0, s.jsx)(h.A, {
                                defaultMessage: "Courses",
                                id: "R85gsW"
                            }),
                            onClick: () => {
                                l(A.cAy, {
                                    isActionUi: !0,
                                    pageType: e.asPath
                                })
                            }
                        }, {
                            href: (0, Z.d_)(),
                            label: (0, s.jsx)(h.A, {
                                defaultMessage: "Pricing",
                                id: "5Wwopw"
                            }),
                            onClick: () => {
                                l(A.Szq, {
                                    isActionUi: !0,
                                    pageType: e.asPath
                                })
                            }
                        }, {
                            href: Z.du,
                            label: (0, s.jsx)(h.A, {
                                defaultMessage: "Gift Brilliant",
                                id: "0oVG2+"
                            }),
                            onClick: () => {
                                l(A.nUL, {
                                    isActionUi: !0,
                                    pageType: e.asPath
                                })
                            }
                        }, {
                            href: "/help/",
                            label: (0, s.jsx)(h.A, {
                                defaultMessage: "Help",
                                id: "SENRqu"
                            })
                        }];
                    return (0, s.jsx)(p, {
                        title: I,
                        links: r
                    })
                };
            var B = r(22711),
                T = r(5732),
                D = r(48465),
                z = r(86191);
            let W = e => (0, s.jsx)(z.I, {
                    h: "21px",
                    w: "21px",
                    viewBox: "0 0 21 21",
                    ...e,
                    children: (0, s.jsx)("path", {
                        d: "M10.4942 21C7.62576 21 7.28762 20.9849 6.16824 20.936C5.29533 20.9073 4.43371 20.7301 3.62049 20.412C2.21347 19.8652 1.10089 18.7538 0.553859 17.3486C0.247553 16.5336 0.0823418 15.6726 0.0652971 14.8022C0 13.6868 0 13.3212 0 10.479C0 7.60662 0.0151582 7.27129 0.0652971 6.15935C0.0827146 5.29019 0.24792 4.43031 0.553859 3.61643C1.10029 2.20937 2.21468 1.09701 3.62399 0.551896C4.43862 0.244747 5.29996 0.079343 6.17057 0.0628743C7.28412 0 7.65025 0 10.4942 0C13.3859 0 13.7182 0.0151364 14.8201 0.0628743C15.693 0.0794854 16.5566 0.244871 17.3737 0.551896C18.7826 1.09762 19.8968 2.20977 20.4438 3.61643C20.7553 4.44217 20.9214 5.3155 20.9347 6.19777C21 7.31321 21 7.67764 21 10.5186C21 13.3596 20.9837 13.7322 20.9347 14.8348C20.9173 15.706 20.7517 16.5679 20.445 17.3836C19.8965 18.7897 18.7823 19.9015 17.3737 20.4481C16.5578 20.7534 15.6959 20.9183 14.8248 20.936C13.7112 21 13.3463 21 10.4942 21ZM10.4545 1.84315C7.60244 1.84315 7.30627 1.85712 6.19273 1.90719C5.52808 1.91598 4.86985 2.03845 4.24664 2.26929C3.32636 2.62093 2.59815 3.34513 2.24225 4.26264C2.0093 4.89173 1.88663 5.5562 1.87962 6.22688C1.81782 7.35512 1.81782 7.65086 1.81782 10.479C1.81782 13.2735 1.82832 13.6123 1.87962 14.7335C1.89006 15.3974 2.01266 16.0548 2.24225 16.678C2.59868 17.5949 3.32676 18.3185 4.24664 18.6702C4.86943 18.9025 5.52792 19.0251 6.19273 19.0323C7.32143 19.0975 7.61877 19.0975 10.4545 19.0975C13.3148 19.0975 13.6109 19.0835 14.7152 19.0323C15.3803 19.0242 16.039 18.9017 16.6624 18.6702C17.5771 18.3155 18.3006 17.5935 18.6563 16.6803C18.8888 16.0507 19.0115 15.3859 19.0189 14.7149H19.0318C19.0819 13.6018 19.0819 13.3049 19.0819 10.4604C19.0819 7.61593 19.0691 7.3167 19.0189 6.20476C19.0085 5.54161 18.8859 4.88499 18.6563 4.26264C18.3014 3.34814 17.5778 2.62476 16.6624 2.26929C16.0391 2.03729 15.3803 1.91478 14.7152 1.90719C13.5876 1.84315 13.2926 1.84315 10.4545 1.84315ZM10.4942 15.8571C8.3137 15.8585 6.34713 14.5481 5.51161 12.537C4.67609 10.5258 5.1362 8.21013 6.67736 6.66986C8.21852 5.1296 10.5372 4.66815 12.5519 5.50072C14.5667 6.33329 15.8807 8.29589 15.8812 10.4732C15.878 13.4435 13.4688 15.8513 10.4942 15.8571ZM10.4942 6.97788C8.56225 6.97788 6.99611 8.54175 6.99611 10.4709C6.99611 12.4 8.56225 13.9639 10.4942 13.9639C12.4261 13.9639 13.9922 12.4 13.9922 10.4709C13.9877 8.54361 12.4242 6.98236 10.4942 6.97788ZM16.0911 6.14771C15.3978 6.14513 14.8375 5.58252 14.8388 4.89023C14.84 4.19794 15.4024 3.6374 16.0957 3.6374C16.789 3.6374 17.3514 4.19793 17.3527 4.89022C17.353 5.22422 17.2201 5.5446 16.9834 5.78056C16.7466 6.01652 16.4255 6.14863 16.0911 6.14771Z",
                        fill: "currentColor"
                    })
                }),
                E = e => (0, s.jsx)(z.I, {
                    h: "21px",
                    w: "20px",
                    viewBox: "0 0 20 21",
                    ...e,
                    children: (0, s.jsx)("path", {
                        d: "M11.1111 21H6.66665V7H11.1111V9.33333C12.0585 8.0678 13.4951 7.31333 15.0277 7.2765C17.784 7.29257 20.008 9.64761 20 12.5417V21H15.5555V13.125C15.3778 11.8214 14.313 10.8542 13.0589 10.857C12.5103 10.8752 11.9925 11.1274 11.6249 11.5554C11.2573 11.9834 11.0718 12.5502 11.1111 13.125V21ZM4.44444 21H0V7H4.44444V21ZM2.22222 4.66667C0.994921 4.66667 0 3.622 0 2.33333C0 1.04467 0.994921 0 2.22222 0C3.44951 0 4.44444 1.04467 4.44444 2.33333C4.44444 2.95217 4.21031 3.54566 3.79356 3.98325C3.37682 4.42083 2.81159 4.66667 2.22222 4.66667Z",
                        fill: "currentColor"
                    })
                }),
                P = e => (0, s.jsx)(z.I, {
                    h: "22px",
                    w: "22px",
                    viewBox: "0 -1 20 19",
                    ...e,
                    children: (0, s.jsx)("path", {
                        d: "M15.2718 1.58667H18.0831L11.9413 8.60625L19.1666 18.1583H13.5093L9.07828 12.365L4.00821 18.1583H1.19528L7.76445 10.6501L0.833252 1.58667H6.63418L10.6394 6.88195L15.2718 1.58667ZM14.2852 16.4757H15.8429L5.78775 3.18095H4.11614L14.2852 16.4757Z",
                        fill: "currentColor"
                    })
                }),
                _ = e => {
                    let {
                        children: l,
                        href: r,
                        ...a
                    } = e;
                    return (0, s.jsx)(B.N, {
                        href: r,
                        color: "gray.500",
                        _hover: {
                            color: "blue.500"
                        },
                        target: "_blank",
                        ...a,
                        children: l
                    })
                },
                R = e => (0, s.jsxs)(T.z, {
                    gap: 2,
                    ...e,
                    children: [(0, s.jsx)(_, {
                        href: "https://www.facebook.com/brilliantorg",
                        children: (0, s.jsx)(D.i, {})
                    }), (0, s.jsx)(_, {
                        href: "https://www.instagram.com/brilliantorg",
                        children: (0, s.jsx)(W, {})
                    }), (0, s.jsx)(_, {
                        href: "https://twitter.com/brilliantorg",
                        children: (0, s.jsx)(P, {})
                    }), (0, s.jsx)(_, {
                        href: "https://www.linkedin.com/company/brilliant-org/",
                        children: (0, s.jsx)(E, {})
                    })]
                }),
                q = () => (0, s.jsx)(a.s, {
                    bgColor: "black",
                    w: "100%",
                    pt: 20,
                    justifyContent: "center",
                    children: (0, s.jsxs)(t.m, {
                        maxW: {
                            base: "full",
                            sm: "container.sm",
                            md: "container.md",
                            lg: "container.lg",
                            xl: "container.xl"
                        },
                        ml: {
                            base: "6",
                            lg: "10",
                            "2xl": "8"
                        },
                        mr: {
                            base: "6",
                            lg: "10",
                            "2xl": "8"
                        },
                        padding: 0,
                        children: [(0, s.jsxs)(i.B, {
                            flexDir: {
                                base: "column",
                                "2xl": "row"
                            },
                            w: "100%",
                            alignItems: "start",
                            justifyContent: "space-between",
                            mb: {
                                base: "20",
                                lg: "32"
                            },
                            gap: 0,
                            children: [(0, s.jsx)(o.Q, {
                                href: "/",
                                chakraLinkProps: {
                                    mb: {
                                        base: "12",
                                        "2xl": "0"
                                    },
                                    w: "40%"
                                },
                                children: (0, s.jsx)(d.T, {
                                    color: "white",
                                    height: "32px"
                                })
                            }), (0, s.jsxs)(n.r, {
                                flex: "1",
                                columns: 2,
                                minChildWidth: {
                                    lg: 140
                                },
                                alignItems: "start",
                                spacingX: 8,
                                spacingY: {
                                    base: 12,
                                    "2xl": 0
                                },
                                w: {
                                    md: "xl"
                                },
                                maxW: "full",
                                children: [(0, s.jsx)(L, {}), (0, s.jsx)(y, {}), (0, s.jsx)(m, {}), (0, s.jsx)(R, {
                                    gap: 6
                                })]
                            })]
                        }), (0, s.jsx)(w, {})]
                    })
                })
        },
        32705: (e, l, r) => {
            r.d(l, {
                v: () => t
            });
            var s = r(23798);
            r(21462);
            var a = r(56545);
            let t = e => {
                let {
                    children: l,
                    ...r
                } = e;
                return (0, s.jsx)(a.T, {
                    minH: "100dvh",
                    spacing: 0,
                    ...r,
                    children: l
                })
            }
        },
        42562: (e, l, r) => {
            r.d(l, {
                z: () => o
            });
            var s = r(23798),
                a = r(86027),
                t = r(26829),
                i = r(62104),
                n = r(16728);
            let o = e => {
                let {
                    children: l,
                    ...r
                } = e, {
                    csrfToken: o
                } = (0, n.U)();
                return (0, s.jsxs)(t.az, {
                    as: "form",
                    action: "/account/logout/",
                    method: "POST",
                    children: [(0, s.jsx)("input", {
                        type: "hidden",
                        name: "csrfmiddlewaretoken",
                        value: o || ""
                    }), l ? l({
                        type: "submit",
                        ...r
                    }) : (0, s.jsx)(i.$, {
                        type: "submit",
                        ...r,
                        children: (0, s.jsx)(a.A, {
                            defaultMessage: "Log out",
                            id: "PlBReU"
                        })
                    })]
                })
            }
        },
        48465: (e, l, r) => {
            r.d(l, {
                i: () => t
            });
            var s = r(23798),
                a = r(86191);
            let t = e => (0, s.jsx)(a.I, {
                h: "22px",
                w: "22px",
                viewBox: "0 0 22 22",
                ...e,
                children: (0, s.jsx)("path", {
                    d: "M0 11.0662C0.00127985 16.5108 3.9361 21.1467 9.28038 22V14.2648H6.48977V11.0662H9.28368V8.6313C9.15878 7.47753 9.55044 6.32766 10.3524 5.49353C11.1544 4.6594 12.2837 4.22747 13.4338 4.31489C14.2594 4.32831 15.0829 4.40229 15.8977 4.53625V7.2578H14.5074C14.0287 7.19472 13.5475 7.35378 13.1993 7.69018C12.8511 8.02657 12.6735 8.5039 12.7167 8.98768V11.0662H15.7647L15.2774 14.2659H12.7167V22C18.4964 21.0809 22.5493 15.7697 21.9393 9.91413C21.3293 4.05853 16.2698 -0.291573 10.4263 0.0152787C4.58284 0.322131 0.000928892 5.17851 0 11.0662Z",
                    fill: "currentColor"
                })
            })
        },
        77142: (e, l, r) => {
            r.d(l, {
                c: () => n
            });
            var s = r(23798),
                a = r(56545),
                t = r(16968),
                i = r(83902);
            let n = e => {
                let {
                    centerProps: l,
                    children: r,
                    outerContainerStyles: n,
                    ...o
                } = e;
                return (0, s.jsx)(a.T, {
                    maxW: "100dvw",
                    ...n,
                    children: (0, s.jsx)(t.o, {
                        w: "full",
                        ...l,
                        children: (0, s.jsx)(i.m, {
                            maxW: {
                                base: "full",
                                sm: "container.sm",
                                md: "container.md",
                                lg: "container.lg",
                                "2xl": "container.xl"
                            },
                            mx: {
                                base: 6,
                                md: 0,
                                lg: 8,
                                "2xl": 0
                            },
                            padding: 0,
                            ...o,
                            children: r
                        })
                    })
                })
            }
        },
        90914: (e, l, r) => {
            r.d(l, {
                Q: () => n
            });
            var s = r(23798),
                a = r(22711),
                t = r(88749),
                i = r.n(t);
            let n = e => {
                let {
                    chakraLinkProps: l,
                    children: r,
                    href: t,
                    nextLinkProps: n
                } = e;
                return (0, s.jsx)(i(), {
                    href: t,
                    ...n,
                    passHref: !0,
                    legacyBehavior: !0,
                    children: (0, s.jsx)(a.N, { ...l,
                        children: r
                    })
                })
            }
        }
    }
]);