try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        l = (new e.Error).stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "3b3bcbed-7e96-4e29-a4b8-2513244c9650", e._sentryDebugIdIdentifier = "sentry-dbid-3b3bcbed-7e96-4e29-a4b8-2513244c9650")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6604], {
        20495: (e, l, s) => {
            "use strict";
            s.d(l, {
                m: () => n
            });
            var t = s(21462);
            let n = () => {
                let [e, l] = (0, t.useState)(!1);
                return (0, t.useEffect)(() => {
                    l(!0)
                }, []), e
            }
        },
        32614: (e, l, s) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/welcome", function() {
                return s(34649)
            }])
        },
        34649: (e, l, s) => {
            "use strict";
            s.r(l), s.d(l, {
                __N_SSP: () => a,
                default: () => o
            });
            var t = s(23798),
                n = s(54700),
                u = s(41733),
                r = s(74049),
                d = s(96420),
                i = s(41991),
                a = !0;
            let o = e => {
                var l, s, a;
                let {
                    data: o,
                    userAgentIsMobile: c
                } = e, f = (null != (a = null == o || null == (l = o.session) ? void 0 : l.activeUser) ? a : null) !== null, b = (e => {
                    var l;
                    let s = null != (l = null == e ? void 0 : e.utmMediumLatest) ? l : null == e ? void 0 : e.utmMedium;
                    return "cpc" === s || "sponsor" === s
                })(null == o || null == (s = o.session) ? void 0 : s.utmParams), _ = (0, n.useRouter)(), p = (0, i.jU)(_.query), {
                    data: y
                } = (0, r.$IH)();
                return (0, t.jsx)(u.L, {
                    rootNode: d.C$,
                    queryParams: p,
                    featureFlags: {},
                    graphqlData: y,
                    user: {
                        isAuthenticated: f
                    },
                    amplitudeExperiments: {},
                    isLolEligible: !b,
                    userAgentIsMobile: c
                })
            }
        },
        49081: (e, l, s) => {
            "use strict";
            s.d(l, {
                $X: () => o,
                MF: () => a,
                dA: () => c,
                e_: () => i
            });
            var t = s(23798),
                n = s(54284),
                u = s(44847),
                r = s(16562),
                d = s(23448);
            let i = (0, n.B)(r.P.div, {
                    shouldForwardProp: e => (0, d.S)(e) || (0, u.M)(e)
                }),
                a = e => (0, t.jsx)(i, {
                    display: "flex",
                    ...e
                }),
                o = e => (0, t.jsx)(i, {
                    display: "flex",
                    alignItems: "center",
                    ...e
                }),
                c = e => (0, t.jsx)(i, {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    ...e
                })
        }
    },
    e => {
        e.O(0, [5857, 2105, 9979, 1814, 9135, 9914, 7345, 3928, 317, 5475, 1733, 636, 6593, 8792], () => e(e.s = 32614)), _N_E = e.O()
    }
]);