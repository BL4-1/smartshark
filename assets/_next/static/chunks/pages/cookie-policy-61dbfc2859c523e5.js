try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        o = (new e.Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "76ad2bdd-02cf-462d-921d-39e4e11351fb", e._sentryDebugIdIdentifier = "sentry-dbid-76ad2bdd-02cf-462d-921d-39e4e11351fb")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2913], {
        7987: (e, o, t) => {
            "use strict";
            t.d(o, {
                j: () => c
            });
            var i = t(23798);
            t(21462);
            var r = t(22159),
                s = t(25367),
                a = t(32705),
                n = t(77142),
                l = t(51399);
            let c = e => {
                let {
                    centerProps: o,
                    children: t,
                    fullWidth: c,
                    headerProps: h,
                    hideFooter: d,
                    hideHeader: u,
                    innerContainerStyles: f,
                    outerContainerStyles: m,
                    ...y
                } = e, p = (0, l.JK)();
                return (0, i.jsxs)(a.v, { ...y,
                    children: [!u && !p && (0, i.jsx)(s.Y, { ...h
                    }), c ? t : (0, i.jsx)(n.c, {
                        outerContainerStyles: m,
                        centerProps: o,
                        ...f,
                        children: t
                    }), !d && !p && (0, i.jsx)(r.w, {})]
                })
            }
        },
        25367: (e, o, t) => {
            "use strict";
            t.d(o, {
                Y: () => i.Y
            });
            var i = t(26780)
        },
        65711: (e, o, t) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/cookie-policy", function() {
                return t(87520)
            }])
        },
        70480: (e, o, t) => {
            "use strict";
            t.d(o, {
                e: () => g
            });
            var i = t(12584),
                r = t(23798),
                s = t(21462),
                a = t(40796),
                n = t(86191),
                l = t(198),
                c = t(67267),
                h = t(26829),
                d = t(62104),
                u = t(70501),
                f = t(63903);

            function m() {
                let e = (0, i._)(["\n    0% {\n      opacity: 1;\n      left: ", "\n    }\n    ", "% {\n      opacity: 1;\n      left: ", ";\n    }\n    ", "% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 0;\n      left: ", ";\n    }\n  "]);
                return m = function() {
                    return e
                }, e
            }
            let y = e => {
                    let {
                        animation: o
                    } = e, t = (0, a.Bi)(), i = (0, a.Bi)(), s = (0, a.Bi)();
                    return (0, r.jsxs)(n.I, {
                        viewBox: "0 0 150 56",
                        width: "150",
                        height: "56px",
                        animation: o,
                        zIndex: "100",
                        position: "absolute",
                        top: 0,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.jsxs)("g", {
                            clipPath: "url(#".concat(s, ")"),
                            children: [(0, r.jsx)("rect", {
                                opacity: "0.4",
                                x: "75",
                                y: "-58.6328",
                                width: "51",
                                height: "150",
                                transform: "rotate(30 75 -58.6328)",
                                fill: "url(#".concat(t, ")")
                            }), (0, r.jsx)("rect", {
                                opacity: "0.4",
                                x: "127.826",
                                y: "-28.1328",
                                width: "26",
                                height: "150",
                                transform: "rotate(30 127.826 -28.1328)",
                                fill: "url(#".concat(i, ")")
                            })]
                        }), (0, r.jsxs)("defs", {
                            children: [(0, r.jsxs)("linearGradient", {
                                id: t,
                                x1: "100.5",
                                y1: "-58.6328",
                                x2: "100.5",
                                y2: "91.3672",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    offset: "0.27",
                                    stopColor: "#F5EFFF"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.71",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: i,
                                x1: "140.826",
                                y1: "-28.1328",
                                x2: "140.826",
                                y2: "121.867",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    offset: "0.081302",
                                    stopColor: "#F5EFFF"
                                }), (0, r.jsx)("stop", {
                                    offset: "0.570844",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                })]
                            }), (0, r.jsx)("clipPath", {
                                id: s,
                                children: (0, r.jsx)("rect", {
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
                        animationDuration: o = 1600,
                        colorScheme: t,
                        delayDuration: i = 4800
                    } = e, s = "100%", a = o + i, n = o / a * 100, d = (0, l.i7)(m(), "-100%", n, s, n + 1, s), u = "".concat(d, " ").concat(a, "ms cubic-bezier(.16, 1, 0.7, 1) infinite"), f = (0, c.Vl)("Button", {
                        variant: "pillPrimary"
                    });
                    return (0, r.jsx)(h.az, {
                        w: "100%",
                        height: "iridescent" === t ? "calc(100% - 4px)" : "100%",
                        position: "absolute",
                        overflow: "clip",
                        borderRadius: (() => {
                            let {
                                borderRadius: e
                            } = f;
                            return "string" == typeof e ? e : "56px"
                        })(),
                        zIndex: 0,
                        children: (0, r.jsx)(y, {
                            animation: u
                        })
                    })
                },
                g = e => {
                    let {
                        animationDuration: o = 1600,
                        children: t,
                        delayDuration: i = 4800,
                        variant: a = "pillPrimary",
                        ...n
                    } = e, [l, c] = (0, s.useState)(!0);
                    return (0, s.useEffect)(() => {
                        var e, o, t, i;
                        let r = null == (o = (0, f.V)()) || null == (e = o.userAgent.match(/Chrome\/(\d+)/)) ? void 0 : e[1],
                            s = !!r && parseInt(r, 10) >= 90,
                            a = null == (i = (0, f.V)()) || null == (t = i.userAgent.match(/Version\/(\d+\.\d+)/)) ? void 0 : t[1],
                            n = !!a && parseInt(a, 10) >= 16;
                        c(s || n || !r && !a)
                    }, []), (0, r.jsxs)(d.$, {
                        variant: a,
                        cursor: "pointer",
                        ...n,
                        children: [(0, r.jsx)(u.s, {
                            zIndex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            children: t
                        }), l && (0, r.jsx)(p, {
                            animationDuration: o,
                            delayDuration: i,
                            colorScheme: n.colorScheme
                        })]
                    })
                }
        },
        87520: (e, o, t) => {
            "use strict";
            t.r(o), t.d(o, {
                __N_SSP: () => g,
                default: () => v
            });
            var i = t(23798),
                r = t(21462),
                s = t(2435),
                a = t(26829),
                n = t(14770),
                l = t(28439),
                c = t(22711),
                h = t(70501),
                d = t(53308),
                u = t(88749),
                f = t.n(u),
                m = t(7987),
                y = t(74049),
                p = t(51399),
                g = !0;
            let v = e => {
                let {
                    privacyProps: o
                } = e, t = (0, p.JK)(), [u, g] = (0, r.useState)(!o.thirdPartyCookiesDisabled), [v, w] = (0, r.useState)(!1), [b] = (0, y.GEI)(), {
                    under17: x
                } = o, [k] = (0, s.U)("(max-width: 768px)");
                return (0, i.jsx)(m.j, {
                    backgroundColor: "white",
                    hideHeader: t,
                    hideFooter: t,
                    children: (0, i.jsxs)(a.az, {
                        maxWidth: "800px",
                        marginX: "auto",
                        paddingY: 8,
                        fontSize: "sm",
                        className: "cookie-policy",
                        children: [(0, i.jsx)(n.D, {
                            as: "h1",
                            marginBottom: 4,
                            size: "xl",
                            children: "Brilliant Cookie Policy"
                        }), (0, i.jsx)(l.E, {
                            fontStyle: "italic",
                            color: "gray.600",
                            marginBottom: 8,
                            children: "Effective: May 21, 2018"
                        }), (0, i.jsxs)(l.E, {
                            marginBottom: 4,
                            children: ["Please remember that your use of the Services is at all times subject to the", (0, i.jsx)(c.N, {
                                as: f(),
                                href: "/terms-of-use",
                                color: "blue.500",
                                children: "\xa0Terms of Use"
                            }), "\xa0and", (0, i.jsx)(c.N, {
                                as: f(),
                                href: "/privacy",
                                color: "blue.500",
                                children: "\xa0Privacy Policy"
                            }), ", which incorporates this Cookie Policy. Any terms we use in this Cookie Policy without defining them have the definitions given to them in the", (0, i.jsx)(c.N, {
                                as: f(),
                                href: "/terms-of-use",
                                color: "blue.500",
                                children: "\xa0Terms of Use"
                            }), "\xa0and", (0, i.jsx)(c.N, {
                                as: f(),
                                href: "/privacy",
                                color: "blue.500",
                                children: "\xa0Privacy Policy"
                            }), "."]
                        }), (0, i.jsx)(n.D, {
                            as: "h2",
                            marginTop: 8,
                            marginBottom: 4,
                            fontSize: "22px",
                            fontWeight: "bold",
                            children: "Cookie Policy"
                        }), (0, i.jsx)(l.E, {
                            marginBottom: 4,
                            children: 'The Services use cookies and similar technologies such as pixel tags, web beacons, clear GIFs, JavaScript, and local storage. Cookies are small files – usually consisting of letters and numbers – placed on your computer, tablet, phone, or similar device, when you use that device to visit a Site. We will refer to cookies and similar technologies simply as "Cookies" for the remainder of this Cookie Policy. We use cookies to enable our servers to recognize your web browser and tell us how and when you visit and otherwise use the Services through the internet, to analyze trends, and to learn about our user base.'
                        }), (0, i.jsxs)(l.E, {
                            marginBottom: 4,
                            children: ["We may combine non-personally identifiable information collected through cookies with other Personal Information that we have about you, for example, to tell us who you are or whether you have an account. We may also supplement the information we collect from you with information received from third parties in order to enhance our Services, or to offer you information that we believe may be of interest to you. Where we use Cookies to collect information that is personally identifiable, or that can become personally identifiable if we combine it with other information, the Brilliant", (0, i.jsx)(c.N, {
                                as: f(),
                                href: "/privacy",
                                color: "blue.500",
                                children: "\xa0Privacy Policy"
                            }), "\xa0will apply in addition to this Cookie Policy."]
                        }), (0, i.jsxs)(l.E, {
                            marginBottom: 4,
                            children: ["You can control and/or delete cookies as you wish – for details, see", (0, i.jsx)(c.N, {
                                href: "https://www.aboutcookies.org/",
                                isExternal: !0,
                                color: "blue.500",
                                children: "\xa0aboutcookies.org"
                            }), ". Most browsers have an option for turning off the cookie feature, which will prevent your browser from accepting new cookies, as well as (depending on the sophistication of your browser software) allowing you to decide on acceptance of each new cookie in a variety of ways. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work. We strongly recommend that you leave cookies active, because they enable you to take advantage of the most attractive features of the Services."]
                        }), (0, i.jsxs)(l.E, {
                            marginBottom: 4,
                            children: ["Further information on cookies can be found", k ? (0, i.jsx)(c.N, {
                                href: "https://wikis.ec.europa.eu/display/WEBGUIDE/04.+Cookies+and+similar+technologies",
                                isExternal: !0,
                                color: "blue.500",
                                children: "\xa0here"
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: ["\xa0at", (0, i.jsx)(c.N, {
                                    href: "http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm",
                                    isExternal: !0,
                                    color: "blue.500",
                                    children: "\xa0http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm"
                                })]
                            }), "."]
                        }), (0, i.jsx)(n.D, {
                            as: "h2",
                            marginTop: 8,
                            marginBottom: 4,
                            fontSize: "22px",
                            fontWeight: "bold",
                            id: "types-of-cookies",
                            children: "What Types of Cookies Do We Use and For Which Purposes?"
                        }), (0, i.jsx)(l.E, {
                            marginBottom: 4,
                            children: "We use the following types of Cookies:"
                        }), (0, i.jsx)(n.D, {
                            as: "h3",
                            marginTop: 6,
                            marginBottom: 2,
                            fontSize: "17px",
                            fontWeight: "600",
                            children: "Essential Cookies"
                        }), (0, i.jsx)(l.E, {
                            marginBottom: 4,
                            children: "These are cookies that are required to provide you with features or services that you have requested. For example, Cookies that enable you to sign into secure areas of our site or use a shopping cart. Disabling these Cookies will encumber the Services' performance and may make certain features and services unavailable."
                        }), (0, i.jsx)(n.D, {
                            as: "h3",
                            marginTop: 6,
                            marginBottom: 2,
                            fontSize: "17px",
                            fontWeight: "600",
                            children: "Analytical Cookies"
                        }), (0, i.jsx)(l.E, {
                            marginBottom: 4,
                            children: "These Cookies allow us to understand how visitors use our site. This includes information about the number of visitors to the site, what pages visitors view on our site and how long visitors are viewing pages on the site. Analytical Cookies also help us measure the performance of our advertising campaigns in order to help us improve our advertising campaigns and to optimize our Services' content for those who engage with our advertising."
                        }), (0, i.jsxs)(h.s, {
                            justify: "space-between",
                            align: "center",
                            marginTop: 6,
                            marginBottom: 2,
                            children: [(0, i.jsx)(n.D, {
                                as: "h3",
                                fontSize: "17px",
                                fontWeight: "600",
                                children: "Third Party Cookies"
                            }), (0, i.jsxs)(h.s, {
                                align: "center",
                                children: [(0, i.jsx)(l.E, {
                                    fontSize: "xs",
                                    marginRight: 2,
                                    color: u ? "black" : "gray.500",
                                    children: u ? "ENABLED" : "DISABLED"
                                }), (0, i.jsx)(d.d, {
                                    size: "md",
                                    colorScheme: "gray",
                                    isChecked: u,
                                    onChange: e => (e => {
                                        v || (w(!0), g(e), b({
                                            variables: {
                                                thirdPartyCookiesDisabled: !e
                                            },
                                            onCompleted: () => {
                                                w(!1)
                                            },
                                            onError: () => {
                                                w(!1), g(!e)
                                            }
                                        }))
                                    })(e.target.checked),
                                    isDisabled: x
                                })]
                            })]
                        }), x && (0, i.jsx)(a.az, {
                            marginBottom: 3,
                            padding: 2,
                            bg: "red.100",
                            borderRadius: "sm",
                            children: (0, i.jsx)(l.E, {
                                fontSize: "sm",
                                color: "red.700",
                                children: "Third party cookie tracking is automatically disabled for all users under the age of 17."
                            })
                        }), (0, i.jsx)(l.E, {
                            marginBottom: 4,
                            children: "These are Cookies placed by a third party on your device and may provide information to those third parties about browsing habits (including your visits to our Services, the pages you have visited and the links and advertisements you have clicked) that may help identify if certain services that such third parties provide are being used, identify your interests, retarget you and serve advertisements that are relevant to you. We do not have control or access to such Cookies. If you look at one page on our Services, an advertisement may be delivered to you on our Services or on other sites, for products referenced on that page or for similar products and services. We do not engage in retargeted advertising for children users of our Services."
                        }), (0, i.jsx)(n.D, {
                            as: "h3",
                            marginTop: 6,
                            marginBottom: 2,
                            fontSize: "17px",
                            fontWeight: "600",
                            children: "Session Cookies and Persistent Cookies"
                        }), (0, i.jsx)(l.E, {
                            marginBottom: 4,
                            children: 'The types of Cookies described above may be "session Cookies" which are temporary Cookies that are only stored on your device while you are visiting our site or "persistent Cookies" which are Cookies that are stored on your device for a period of time after you leave our site. The length of time a persistent Cookie stays on your device varies from Cookie to Cookie. We use persistent Cookies to store your preferences so that they are available for the next visit, and to keep a more accurate account of how often you visit our Services, how often you return, how your use of the Services may vary over time, and measure the effectiveness of advertising efforts. Through these Cookies, we may collect information about your online activity after you leave our Services. Just like any other usage information we collect, this information allows us to improve the Services and customize your online experience. Your browser may offer you a "Do Not Track" option, which allows you to signal to operators of websites and web applications and services (including behavioral advertising services) that you do not wish such operators to track certain of your online activities over time and across different websites. Our Services do not support Do Not Track requests at this time, which means that we collect information about your online activity both while you are using the Services and after you leave the Services.'
                        }), (0, i.jsx)(n.D, {
                            as: "h2",
                            marginTop: 8,
                            marginBottom: 4,
                            fontSize: "22px",
                            fontWeight: "bold",
                            children: "Cookie Settings"
                        }), (0, i.jsxs)(l.E, {
                            marginBottom: 4,
                            children: ["You can decide whether or not to accept Cookies. One way you can do this is through your internet browser's settings. To find out more information about Cookies, including information about how to manage and delete Cookies, please visit", (0, i.jsx)(c.N, {
                                href: "https://ico.org.uk/your-data-matters/online/cookies/",
                                isExternal: !0,
                                color: "blue.500",
                                children: "\xa0https://ico.org.uk/your-data-matters/online/cookies/"
                            }), "\xa0or", (0, i.jsx)(c.N, {
                                href: "https://www.allaboutcookies.org/",
                                isExternal: !0,
                                color: "blue.500",
                                children: "\xa0https://www.allaboutcookies.org/"
                            }), "."]
                        }), (0, i.jsx)(l.E, {
                            marginBottom: 4,
                            children: 'To explore what Cookie settings are available to you, look in the "preferences" or "options" section of your browser\'s menu.'
                        }), (0, i.jsxs)(l.E, {
                            marginTop: 8,
                            children: ["If you have any queries regarding this Cookie Policy please contact us at", (0, i.jsx)(c.N, {
                                href: "mailto:privacy+cookies@brilliant.org",
                                color: "blue.500",
                                children: "\xa0privacy+cookies@brilliant.org"
                            }), "."]
                        })]
                    })
                })
            }
        }
    },
    e => {
        e.O(0, [2105, 9979, 8382, 9062, 1718, 3456, 8901, 3013, 3308, 1975, 6780, 636, 6593, 8792], () => e(e.s = 65711)), _N_E = e.O()
    }
]);