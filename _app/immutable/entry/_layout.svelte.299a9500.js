import {
    S as h,
    i as p,
    s as $,
    C as g,
    k as f,
    a as v,
    D as y,
    l as m,
    h as c,
    c as E,
    n as u,
    E as _,
    b,
    F as k,
    G as w,
    H as A,
    g as C,
    d as I
} from "../chunks/index.ae2f2c48.js";

function L(r) {
    let s, l, o, i, n;
    const d = r[1].default,
        t = g(d, r, r[0], null);
    return {
        c() {
            s = f("meta"), l = f("link"), o = f("meta"), i = v(), t && t.c(), this.h()
        },
        l(e) {
            const a = y("svelte-gy7552", document.head);
            s = m(a, "META", {
                charset: !0
            }), l = m(a, "LINK", {
                rel: !0,
                href: !0
            }), o = m(a, "META", {
                name: !0,
                content: !0
            }), a.forEach(c), i = E(e), t && t.l(e), this.h()
        },
        h() {
            u(s, "charset", "utf-8"), u(l, "rel", "icon"), u(l, "href", "/assets/po.png"), u(o, "name", "viewport"), u(o, "content", "width=device-width, initial-scale=1, user-scalable=no"), document.title = "Pepeorge Inu"
        },
        m(e, a) {
            _(document.head, s), _(document.head, l), _(document.head, o), b(e, i, a), t && t.m(e, a), n = !0
        },
        p(e, [a]) {
            t && t.p && (!n || a & 1) && k(t, d, e, e[0], n ? A(d, e[0], a, null) : w(e[0]), null)
        },
        i(e) {
            n || (C(t, e), n = !0)
        },
        o(e) {
            I(t, e), n = !1
        },
        d(e) {
            c(s), c(l), c(o), e && c(i), t && t.d(e)
        }
    }
}

function M(r, s, l) {
    let {
        $$slots: o = {},
        $$scope: i
    } = s;
    return r.$$set = n => {
        "$$scope" in n && l(0, i = n.$$scope)
    }, [i, o]
}
class T extends h {
    constructor(s) {
        super(), p(this, s, M, L, $, {})
    }
}
export {
    T as
    default
};