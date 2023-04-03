function w() {}

function G(t, e) {
    for (const n in e) t[n] = e[n];
    return t
}

function D(t) {
    return t()
}

function T() {
    return Object.create(null)
}

function g(t) {
    t.forEach(D)
}

function q(t) {
    return typeof t == "function"
}

function ot(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
}
let b;

function st(t, e) {
    return b || (b = document.createElement("a")), b.href = e, t === b.href
}

function I(t) {
    return Object.keys(t).length === 0
}

function J(t, ...e) {
    if (t == null) return w;
    const n = t.subscribe(...e);
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function ft(t, e, n) {
    t.$$.on_destroy.push(J(e, n))
}

function at(t, e, n, i) {
    if (t) {
        const r = B(t, e, n, i);
        return t[0](r)
    }
}

function B(t, e, n, i) {
    return t[1] && i ? G(n.ctx.slice(), t[1](i(e))) : n.ctx
}

function _t(t, e, n, i) {
    if (t[2] && i) {
        const r = t[2](i(n));
        if (e.dirty === void 0) return r;
        if (typeof r == "object") {
            const s = [],
                c = Math.max(e.dirty.length, r.length);
            for (let o = 0; o < c; o += 1) s[o] = e.dirty[o] | r[o];
            return s
        }
        return e.dirty | r
    }
    return e.dirty
}

function dt(t, e, n, i, r, s) {
    if (r) {
        const c = B(e, n, i, s);
        t.p(c, r)
    }
}

function ht(t) {
    if (t.ctx.length > 32) {
        const e = [],
            n = t.ctx.length / 32;
        for (let i = 0; i < n; i++) e[i] = -1;
        return e
    }
    return -1
}
let E = !1;

function K() {
    E = !0
}

function R() {
    E = !1
}

function W(t, e, n, i) {
    for (; t < e;) {
        const r = t + (e - t >> 1);
        n(r) <= i ? t = r + 1 : e = r
    }
    return t
}

function Q(t) {
    if (t.hydrate_init) return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
        const l = [];
        for (let u = 0; u < e.length; u++) {
            const a = e[u];
            a.claim_order !== void 0 && l.push(a)
        }
        e = l
    }
    const n = new Int32Array(e.length + 1),
        i = new Int32Array(e.length);
    n[0] = -1;
    let r = 0;
    for (let l = 0; l < e.length; l++) {
        const u = e[l].claim_order,
            a = (r > 0 && e[n[r]].claim_order <= u ? r + 1 : W(1, r, x => e[n[x]].claim_order, u)) - 1;
        i[l] = n[a] + 1;
        const f = a + 1;
        n[f] = l, r = Math.max(f, r)
    }
    const s = [],
        c = [];
    let o = e.length - 1;
    for (let l = n[r] + 1; l != 0; l = i[l - 1]) {
        for (s.push(e[l - 1]); o >= l; o--) c.push(e[o]);
        o--
    }
    for (; o >= 0; o--) c.push(e[o]);
    s.reverse(), c.sort((l, u) => l.claim_order - u.claim_order);
    for (let l = 0, u = 0; l < c.length; l++) {
        for (; u < s.length && c[l].claim_order >= s[u].claim_order;) u++;
        const a = u < s.length ? s[u] : null;
        t.insertBefore(c[l], a)
    }
}

function U(t, e) {
    if (E) {
        for (Q(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;) t.actual_end_child = t.actual_end_child.nextSibling;
        e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling
    } else(e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}

function mt(t, e, n) {
    E && !n ? U(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}

function V(t) {
    t.parentNode && t.parentNode.removeChild(t)
}

function X(t) {
    return document.createElement(t)
}

function Y(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
}

function S(t) {
    return document.createTextNode(t)
}

function pt() {
    return S(" ")
}

function yt() {
    return S("")
}

function gt(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}

function Z(t) {
    return Array.from(t.childNodes)
}

function tt(t) {
    t.claim_info === void 0 && (t.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}

function H(t, e, n, i, r = !1) {
    tt(t);
    const s = (() => {
        for (let c = t.claim_info.last_index; c < t.length; c++) {
            const o = t[c];
            if (e(o)) {
                const l = n(o);
                return l === void 0 ? t.splice(c, 1) : t[c] = l, r || (t.claim_info.last_index = c), o
            }
        }
        for (let c = t.claim_info.last_index - 1; c >= 0; c--) {
            const o = t[c];
            if (e(o)) {
                const l = n(o);
                return l === void 0 ? t.splice(c, 1) : t[c] = l, r ? l === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = c, o
            }
        }
        return i()
    })();
    return s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, s
}

function O(t, e, n, i) {
    return H(t, r => r.nodeName === e, r => {
        const s = [];
        for (let c = 0; c < r.attributes.length; c++) {
            const o = r.attributes[c];
            n[o.name] || s.push(o.name)
        }
        s.forEach(c => r.removeAttribute(c))
    }, () => i(e))
}

function xt(t, e, n) {
    return O(t, e, n, X)
}

function bt(t, e, n) {
    return O(t, e, n, Y)
}

function et(t, e) {
    return H(t, n => n.nodeType === 3, n => {
        const i = "" + e;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length) return n.splitText(i.length)
        } else n.data = i
    }, () => S(e), !0)
}

function $t(t) {
    return et(t, " ")
}

function wt(t, e) {
    e = "" + e, t.wholeText !== e && (t.data = e)
}

function Et(t, e, n, i) {
    n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "")
}

function vt(t, e) {
    const n = [];
    let i = 0;
    for (const r of e.childNodes)
        if (r.nodeType === 8) {
            const s = r.textContent.trim();
            s === `HEAD_${t}_END` ? (i -= 1, n.push(r)) : s === `HEAD_${t}_START` && (i += 1, n.push(r))
        } else i > 0 && n.push(r);
    return n
}

function Nt(t, e) {
    return new t(e)
}
let y;

function p(t) {
    y = t
}

function P() {
    if (!y) throw new Error("Function called outside component initialization");
    return y
}

function At(t) {
    P().$$.on_mount.push(t)
}

function St(t) {
    P().$$.after_update.push(t)
}
const h = [],
    M = [];
let m = [];
const k = [],
    z = Promise.resolve();
let N = !1;

function F() {
    N || (N = !0, z.then(L))
}

function jt() {
    return F(), z
}

function A(t) {
    m.push(t)
}
const v = new Set;
let d = 0;

function L() {
    if (d !== 0) return;
    const t = y;
    do {
        try {
            for (; d < h.length;) {
                const e = h[d];
                d++, p(e), nt(e.$$)
            }
        } catch (e) {
            throw h.length = 0, d = 0, e
        }
        for (p(null), h.length = 0, d = 0; M.length;) M.pop()();
        for (let e = 0; e < m.length; e += 1) {
            const n = m[e];
            v.has(n) || (v.add(n), n())
        }
        m.length = 0
    } while (h.length);
    for (; k.length;) k.pop()();
    N = !1, v.clear(), p(t)
}

function nt(t) {
    if (t.fragment !== null) {
        t.update(), g(t.before_update);
        const e = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(A)
    }
}

function it(t) {
    const e = [],
        n = [];
    m.forEach(i => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach(i => i()), m = e
}
const $ = new Set;
let _;

function Ct() {
    _ = {
        r: 0,
        c: [],
        p: _
    }
}

function Tt() {
    _.r || g(_.c), _ = _.p
}

function rt(t, e) {
    t && t.i && ($.delete(t), t.i(e))
}

function Mt(t, e, n, i) {
    if (t && t.o) {
        if ($.has(t)) return;
        $.add(t), _.c.push(() => {
            $.delete(t), i && (n && t.d(1), i())
        }), t.o(e)
    } else i && i()
}

function kt(t) {
    t && t.c()
}

function Dt(t, e) {
    t && t.l(e)
}

function ct(t, e, n, i) {
    const {
        fragment: r,
        after_update: s
    } = t.$$;
    r && r.m(e, n), i || A(() => {
        const c = t.$$.on_mount.map(D).filter(q);
        t.$$.on_destroy ? t.$$.on_destroy.push(...c) : g(c), t.$$.on_mount = []
    }), s.forEach(A)
}

function lt(t, e) {
    const n = t.$$;
    n.fragment !== null && (it(n.after_update), g(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
}

function ut(t, e) {
    t.$$.dirty[0] === -1 && (h.push(t), F(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}

function qt(t, e, n, i, r, s, c, o = [-1]) {
    const l = y;
    p(t);
    const u = t.$$ = {
        fragment: null,
        ctx: [],
        props: s,
        update: w,
        not_equal: r,
        bound: T(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (l ? l.$$.context : [])),
        callbacks: T(),
        dirty: o,
        skip_bound: !1,
        root: e.target || l.$$.root
    };
    c && c(u.root);
    let a = !1;
    if (u.ctx = n ? n(t, e.props || {}, (f, x, ...j) => {
            const C = j.length ? j[0] : x;
            return u.ctx && r(u.ctx[f], u.ctx[f] = C) && (!u.skip_bound && u.bound[f] && u.bound[f](C), a && ut(t, f)), x
        }) : [], u.update(), a = !0, g(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
        if (e.hydrate) {
            K();
            const f = Z(e.target);
            u.fragment && u.fragment.l(f), f.forEach(V)
        } else u.fragment && u.fragment.c();
        e.intro && rt(t.$$.fragment), ct(t, e.target, e.anchor, e.customElement), R(), L()
    }
    p(l)
}
class Bt {
    $destroy() {
        lt(this, 1), this.$destroy = w
    }
    $on(e, n) {
        if (!q(n)) return w;
        const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return i.push(n), () => {
            const r = i.indexOf(n);
            r !== -1 && i.splice(r, 1)
        }
    }
    $set(e) {
        this.$$set && !I(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
    }
}
export {
    ct as A, lt as B, at as C, vt as D, U as E, dt as F, ht as G, _t as H, w as I, ft as J, st as K, Y as L, bt as M, Bt as S, pt as a, mt as b, $t as c, Mt as d, yt as e, Tt as f, rt as g, V as h, qt as i, St as j, X as k, xt as l, Z as m, gt as n, At as o, Et as p, S as q, et as r, ot as s, jt as t, wt as u, Ct as v, M as w, Nt as x, kt as y, Dt as z
};