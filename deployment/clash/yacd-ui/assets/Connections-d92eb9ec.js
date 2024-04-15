import {
    r as G,
    R as ee,
    p as Ne,
    c as Ir,
    a as Pu,
    u as it,
    m as Oo,
    j as Re,
    M as Ru,
    b as U,
    B as Tt,
    d as Li,
    e as Wi,
    f as Ao,
    g as Gi,
    _ as Du,
    h as ne,
    i as Eu,
    k as ki,
    l as Bu,
    S as Ou,
    n as Au,
    o as Tu,
    C as Mu,
    I as To,
    q as Nu
} from "./index-f0dc51cb.js";
import {S as Fu} from "./Select-bb6e41ed.js";
import {u as Lu} from "./useRemainingViewPortHeight-d32e3bba.js";
import {C as Wu, B as $i} from "./BaseModal-c6ce05d5.js";
import {r as Hi, t as Gu, g as ku, b as Wr, a as gr, c as zi, d as mr, f as $u, e as Hu} from "./index-84fa0cb3.js";
import {I as kn} from "./Input-1be8bac7.js";
import {_ as Mt} from "./objectWithoutPropertiesLoose-4f48578a.js";
import {F as Mo, p as No, A as Br} from "./Fab-67ff0a5f.js";
import {P as zu, a as ju} from "./play-47393696.js";

function $n() {
    return $n = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    }, $n.apply(this, arguments)
}

function Vu(e, r) {
    if (e == null) return {};
    var t = Uu(e, r), n, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++) n = i[o], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n])
    }
    return t
}

function Uu(e, r) {
    if (e == null) return {};
    var t = {}, n = Object.keys(e), o, i;
    for (i = 0; i < n.length; i++) o = n[i], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
    return t
}

var na = G.forwardRef(function (e, r) {
    var t = e.color, n = t === void 0 ? "currentColor" : t, o = e.size, i = o === void 0 ? 24 : o,
        l = Vu(e, ["color", "size"]);
    return ee.createElement("svg", $n({
        ref: r,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: n,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, l), ee.createElement("line", {x1: "3", y1: "12", x2: "21", y2: "12"}), ee.createElement("line", {
        x1: "3",
        y1: "6",
        x2: "21",
        y2: "6"
    }), ee.createElement("line", {x1: "3", y1: "18", x2: "21", y2: "18"}))
});
na.propTypes = {color: Ne.string, size: Ne.oneOfType([Ne.string, Ne.number])};
na.displayName = "Menu";
const qu = na;

function Hn() {
    return Hn = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    }, Hn.apply(this, arguments)
}

function _u(e, r) {
    if (e == null) return {};
    var t = Xu(e, r), n, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++) n = i[o], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n])
    }
    return t
}

function Xu(e, r) {
    if (e == null) return {};
    var t = {}, n = Object.keys(e), o, i;
    for (i = 0; i < n.length; i++) o = n[i], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
    return t
}

var aa = G.forwardRef(function (e, r) {
    var t = e.color, n = t === void 0 ? "currentColor" : t, o = e.size, i = o === void 0 ? 24 : o,
        l = _u(e, ["color", "size"]);
    return ee.createElement("svg", Hn({
        ref: r,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: n,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, l), ee.createElement("polyline", {points: "1 4 1 10 7 10"}), ee.createElement("polyline", {points: "23 20 23 14 17 14"}), ee.createElement("path", {d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"}))
});
aa.propTypes = {color: Ne.string, size: Ne.oneOfType([Ne.string, Ne.number])};
aa.displayName = "RefreshCcw";
const Fo = aa;

function zn() {
    return zn = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    }, zn.apply(this, arguments)
}

function Ku(e, r) {
    if (e == null) return {};
    var t = Yu(e, r), n, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++) n = i[o], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n])
    }
    return t
}

function Yu(e, r) {
    if (e == null) return {};
    var t = {}, n = Object.keys(e), o, i;
    for (i = 0; i < n.length; i++) o = n[i], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
    return t
}

var oa = G.forwardRef(function (e, r) {
    var t = e.color, n = t === void 0 ? "currentColor" : t, o = e.size, i = o === void 0 ? 24 : o,
        l = Ku(e, ["color", "size"]);
    return ee.createElement("svg", zn({
        ref: r,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: n,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, l), ee.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3"
    }), ee.createElement("path", {d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))
});
oa.propTypes = {color: Ne.string, size: Ne.oneOfType([Ne.string, Ne.number])};
oa.displayName = "Settings";
const Lo = oa;

function jn() {
    return jn = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    }, jn.apply(this, arguments)
}

function Ju(e, r) {
    if (e == null) return {};
    var t = Qu(e, r), n, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++) n = i[o], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n])
    }
    return t
}

function Qu(e, r) {
    if (e == null) return {};
    var t = {}, n = Object.keys(e), o, i;
    for (i = 0; i < n.length; i++) o = n[i], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
    return t
}

var ia = G.forwardRef(function (e, r) {
    var t = e.color, n = t === void 0 ? "currentColor" : t, o = e.size, i = o === void 0 ? 24 : o,
        l = Ju(e, ["color", "size"]);
    return ee.createElement("svg", jn({
        ref: r,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: n,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, l), ee.createElement("path", {d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}), ee.createElement("line", {
        x1: "7",
        y1: "7",
        x2: "7.01",
        y2: "7"
    }))
});
ia.propTypes = {color: Ne.string, size: Ne.oneOfType([Ne.string, Ne.number])};
ia.displayName = "Tag";
const Wo = ia;

function Vn() {
    return Vn = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    }, Vn.apply(this, arguments)
}

function Zu(e, r) {
    if (e == null) return {};
    var t = ec(e, r), n, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++) n = i[o], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n])
    }
    return t
}

function ec(e, r) {
    if (e == null) return {};
    var t = {}, n = Object.keys(e), o, i;
    for (i = 0; i < n.length; i++) o = n[i], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
    return t
}

var la = G.forwardRef(function (e, r) {
    var t = e.color, n = t === void 0 ? "currentColor" : t, o = e.size, i = o === void 0 ? 24 : o,
        l = Zu(e, ["color", "size"]);
    return ee.createElement("svg", Vn({
        ref: r,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: n,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, l), ee.createElement("circle", {cx: "12", cy: "12", r: "10"}), ee.createElement("line", {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
    }), ee.createElement("line", {x1: "9", y1: "9", x2: "15", y2: "15"}))
});
la.propTypes = {color: Ne.string, size: Ne.oneOfType([Ne.string, Ne.number])};
la.displayName = "XCircle";
const rc = la;

function sa(e) {
    return r => !!r.type && r.type.tabsRole === e
}

const Ut = sa("Tab"), ua = sa("TabList"), ca = sa("TabPanel");

function tc(e) {
    return Ut(e) || ua(e) || ca(e)
}

function Un(e, r) {
    return G.Children.map(e, t => t === null ? null : tc(t) ? r(t) : t.props && t.props.children && typeof t.props.children == "object" ? G.cloneElement(t, {
        ...t.props,
        children: Un(t.props.children, r)
    }) : t)
}

function ji(e, r) {
    return G.Children.forEach(e, t => {
        t !== null && (Ut(t) || ca(t) ? r(t) : t.props && t.props.children && typeof t.props.children == "object" && (ua(t) && r(t), ji(t.props.children, r)))
    })
}

function Vi(e) {
    let r = 0;
    return ji(e, t => {
        Ut(t) && r++
    }), r
}

function Ui(e) {
    return e && "getAttribute" in e
}

function Go(e) {
    return Ui(e) && e.getAttribute("data-rttab")
}

function Or(e) {
    return Ui(e) && e.getAttribute("aria-disabled") === "true"
}

let Nt;

function nc(e) {
    const r = e || (typeof window < "u" ? window : void 0);
    try {
        Nt = !!(typeof r < "u" && r.document && r.document.activeElement)
    } catch {
        Nt = !1
    }
}

const ac = {className: "react-tabs", focus: !1}, da = e => {
    let r = G.useRef([]), t = G.useRef([]);
    const n = G.useRef();

    function o(H, V) {
        if (H < 0 || H >= u()) return;
        const {onSelect: se, selectedIndex: Ie} = e;
        se(H, Ie, V)
    }

    function i(H) {
        const V = u();
        for (let se = H + 1; se < V; se++) if (!Or(m(se))) return se;
        for (let se = 0; se < H; se++) if (!Or(m(se))) return se;
        return H
    }

    function l(H) {
        let V = H;
        for (; V--;) if (!Or(m(V))) return V;
        for (V = u(); V-- > H;) if (!Or(m(V))) return V;
        return H
    }

    function s() {
        const H = u();
        for (let V = 0; V < H; V++) if (!Or(m(V))) return V;
        return null
    }

    function f() {
        let H = u();
        for (; H--;) if (!Or(m(H))) return H;
        return null
    }

    function u() {
        const {children: H} = e;
        return Vi(H)
    }

    function m(H) {
        return r.current[`tabs-${H}`]
    }

    function g() {
        let H = 0;
        const {
            children: V,
            disabledTabClassName: se,
            focus: Ie,
            forceRenderTabPanel: Se,
            selectedIndex: we,
            selectedTabClassName: Ee,
            selectedTabPanelClassName: De,
            environment: Oe
        } = e;
        t.current = t.current || [];
        let Fe = t.current.length - u();
        const ur = G.useId();
        for (; Fe++ < 0;) t.current.push(`${ur}${t.current.length}`);
        return Un(V, Ve => {
            let Ae = Ve;
            if (ua(Ve)) {
                let We = 0, cr = !1;
                Nt == null && nc(Oe);
                const nr = Oe || (typeof window < "u" ? window : void 0);
                Nt && nr && (cr = ee.Children.toArray(Ve.props.children).filter(Ut).some((dr, Ke) => nr.document.activeElement === m(Ke))), Ae = G.cloneElement(Ve, {
                    children: Un(Ve.props.children, dr => {
                        const Ke = `tabs-${We}`, xe = we === We, Ue = {
                            tabRef: vr => {
                                r.current[Ke] = vr
                            }, id: t.current[We], selected: xe, focus: xe && (Ie || cr)
                        };
                        return Ee && (Ue.selectedClassName = Ee), se && (Ue.disabledClassName = se), We++, G.cloneElement(dr, Ue)
                    })
                })
            } else if (ca(Ve)) {
                const We = {id: t.current[H], selected: we === H};
                Se && (We.forceRender = Se), De && (We.selectedClassName = De), H++, Ae = G.cloneElement(Ve, We)
            }
            return Ae
        })
    }

    function p(H) {
        const {direction: V, disableUpDownKeys: se, disableLeftRightKeys: Ie} = e;
        if (C(H.target)) {
            let {selectedIndex: Se} = e, we = !1, Ee = !1;
            (H.code === "Space" || H.keyCode === 32 || H.code === "Enter" || H.keyCode === 13) && (we = !0, Ee = !1, b(H)), !Ie && (H.keyCode === 37 || H.code === "ArrowLeft") || !se && (H.keyCode === 38 || H.code === "ArrowUp") ? (V === "rtl" ? Se = i(Se) : Se = l(Se), we = !0, Ee = !0) : !Ie && (H.keyCode === 39 || H.code === "ArrowRight") || !se && (H.keyCode === 40 || H.code === "ArrowDown") ? (V === "rtl" ? Se = l(Se) : Se = i(Se), we = !0, Ee = !0) : H.keyCode === 35 || H.code === "End" ? (Se = f(), we = !0, Ee = !0) : (H.keyCode === 36 || H.code === "Home") && (Se = s(), we = !0, Ee = !0), we && H.preventDefault(), Ee && o(Se, H)
        }
    }

    function b(H) {
        let V = H.target;
        do if (C(V)) {
            if (Or(V)) return;
            const se = [].slice.call(V.parentNode.children).filter(Go).indexOf(V);
            o(se, H);
            return
        } while ((V = V.parentNode) != null)
    }

    function C(H) {
        if (!Go(H)) return !1;
        let V = H.parentElement;
        do {
            if (V === n.current) return !0;
            if (V.getAttribute("data-rttabs")) break;
            V = V.parentElement
        } while (V);
        return !1
    }

    const {
        children: S,
        className: P,
        disabledTabClassName: D,
        domRef: B,
        focus: O,
        forceRenderTabPanel: A,
        onSelect: k,
        selectedIndex: j,
        selectedTabClassName: J,
        selectedTabPanelClassName: fe,
        environment: le,
        disableUpDownKeys: be,
        disableLeftRightKeys: pe,
        ...Le
    } = e;
    return ee.createElement("div", Object.assign({}, Le, {
        className: Ir(P), onClick: b, onKeyDown: p, ref: H => {
            n.current = H, B && B(H)
        }, "data-rttabs": !0
    }), g())
};
da.defaultProps = ac;
da.propTypes = {};
const oc = 0, Ot = 1, ic = {
    defaultFocus: !1,
    focusTabOnClick: !0,
    forceRenderTabPanel: !1,
    selectedIndex: null,
    defaultIndex: null,
    environment: null,
    disableUpDownKeys: !1,
    disableLeftRightKeys: !1
}, lc = e => e.selectedIndex === null ? Ot : oc, qt = e => {
    const {
        children: r,
        defaultFocus: t,
        defaultIndex: n,
        focusTabOnClick: o,
        onSelect: i
    } = e, [l, s] = G.useState(t), [f] = G.useState(lc(e)), [u, m] = G.useState(f === Ot ? n || 0 : null);
    if (G.useEffect(() => {
        s(!1)
    }, []), f === Ot) {
        const b = Vi(r);
        G.useEffect(() => {
            if (u != null) {
                const C = Math.max(0, b - 1);
                m(Math.min(u, C))
            }
        }, [b])
    }
    const g = (b, C, S) => {
        typeof i == "function" && i(b, C, S) === !1 || (o && s(!0), f === Ot && m(b))
    };
    let p = {...e};
    return p.focus = l, p.onSelect = g, u != null && (p.selectedIndex = u), delete p.defaultFocus, delete p.defaultIndex, delete p.focusTabOnClick, ee.createElement(da, p, r)
};
qt.propTypes = {};
qt.defaultProps = ic;
qt.tabsRole = "Tabs";
const sc = {className: "react-tabs__tab-list"}, _t = e => {
    const {children: r, className: t, ...n} = e;
    return ee.createElement("ul", Object.assign({}, n, {className: Ir(t), role: "tablist"}), r)
};
_t.tabsRole = "TabList";
_t.propTypes = {};
_t.defaultProps = sc;
const xn = "react-tabs__tab", uc = {
    className: xn,
    disabledClassName: `${xn}--disabled`,
    focus: !1,
    id: null,
    selected: !1,
    selectedClassName: `${xn}--selected`
}, Zr = e => {
    let r = G.useRef();
    const {
        children: t,
        className: n,
        disabled: o,
        disabledClassName: i,
        focus: l,
        id: s,
        selected: f,
        selectedClassName: u,
        tabIndex: m,
        tabRef: g,
        ...p
    } = e;
    return G.useEffect(() => {
        f && l && r.current.focus()
    }, [f, l]), ee.createElement("li", Object.assign({}, p, {
        className: Ir(n, {[u]: f, [i]: o}),
        ref: b => {
            r.current = b, g && g(b)
        },
        role: "tab",
        id: `tab${s}`,
        "aria-selected": f ? "true" : "false",
        "aria-disabled": o ? "true" : "false",
        "aria-controls": `panel${s}`,
        tabIndex: m || (f ? "0" : null),
        "data-rttab": !0
    }), t)
};
Zr.propTypes = {};
Zr.tabsRole = "Tab";
Zr.defaultProps = uc;
const ko = "react-tabs__tab-panel", cc = {className: ko, forceRender: !1, selectedClassName: `${ko}--selected`},
    et = e => {
        const {children: r, className: t, forceRender: n, id: o, selected: i, selectedClassName: l, ...s} = e;
        return ee.createElement("div", Object.assign({}, s, {
            className: Ir(t, {[l]: i}),
            role: "tabpanel",
            id: `panel${o}`,
            "aria-labelledby": `tab${o}`
        }), n || i ? r : null)
    };
et.tabsRole = "TabPanel";
et.propTypes = {};
et.defaultProps = cc;
const dc = "_placeHolder_1vhnb_1", fc = "_connQty_1vhnb_16", pc = "_header_1vhnb_28", vc = "_inputWrapper_1vhnb_44",
    gc = "_input_1vhnb_44", Lr = {placeHolder: dc, connQty: fc, header: pc, inputWrapper: vc, input: gc};

function mc(e) {
    if (e === null || e === !0 || e === !1) return NaN;
    var r = Number(e);
    return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r)
}

function $o(e, r) {
    var t, n, o, i, l, s, f, u;
    Hi(1, arguments);
    var m = ku(),
        g = mc((t = (n = (o = (i = r == null ? void 0 : r.weekStartsOn) !== null && i !== void 0 ? i : r == null || (l = r.locale) === null || l === void 0 || (s = l.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : m.weekStartsOn) !== null && n !== void 0 ? n : (f = m.locale) === null || f === void 0 || (u = f.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && t !== void 0 ? t : 0);
    if (!(g >= 0 && g <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var p = Gu(e), b = p.getUTCDay(), C = (b < g ? 7 : 0) + b - g;
    return p.setUTCDate(p.getUTCDate() - C), p.setUTCHours(0, 0, 0, 0), p
}

function hc(e, r, t) {
    Hi(2, arguments);
    var n = $o(e, t), o = $o(r, t);
    return n.getTime() === o.getTime()
}

var bc = {
    lessThanXSeconds: {one: "不到 1 秒", other: "不到 {{count}} 秒"},
    xSeconds: {one: "1 秒", other: "{{count}} 秒"},
    halfAMinute: "半分钟",
    lessThanXMinutes: {one: "不到 1 分钟", other: "不到 {{count}} 分钟"},
    xMinutes: {one: "1 分钟", other: "{{count}} 分钟"},
    xHours: {one: "1 小时", other: "{{count}} 小时"},
    aboutXHours: {one: "大约 1 小时", other: "大约 {{count}} 小时"},
    xDays: {one: "1 天", other: "{{count}} 天"},
    aboutXWeeks: {one: "大约 1 个星期", other: "大约 {{count}} 个星期"},
    xWeeks: {one: "1 个星期", other: "{{count}} 个星期"},
    aboutXMonths: {one: "大约 1 个月", other: "大约 {{count}} 个月"},
    xMonths: {one: "1 个月", other: "{{count}} 个月"},
    aboutXYears: {one: "大约 1 年", other: "大约 {{count}} 年"},
    xYears: {one: "1 年", other: "{{count}} 年"},
    overXYears: {one: "超过 1 年", other: "超过 {{count}} 年"},
    almostXYears: {one: "将近 1 年", other: "将近 {{count}} 年"}
}, yc = function (r, t, n) {
    var o, i = bc[r];
    return typeof i == "string" ? o = i : t === 1 ? o = i.one : o = i.other.replace("{{count}}", String(t)), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? o + "内" : o + "前" : o
};
const wc = yc;
var Cc = {full: "y'年'M'月'd'日' EEEE", long: "y'年'M'月'd'日'", medium: "yyyy-MM-dd", short: "yy-MM-dd"},
    Sc = {full: "zzzz a h:mm:ss", long: "z a h:mm:ss", medium: "a h:mm:ss", short: "a h:mm"}, xc = {
        full: "{{date}} {{time}}",
        long: "{{date}} {{time}}",
        medium: "{{date}} {{time}}",
        short: "{{date}} {{time}}"
    }, Ic = {
        date: Wr({formats: Cc, defaultWidth: "full"}),
        time: Wr({formats: Sc, defaultWidth: "full"}),
        dateTime: Wr({formats: xc, defaultWidth: "full"})
    };
const Pc = Ic;

function Ho(e, r, t) {
    var n = "eeee p";
    return hc(e, r, t) ? n : e.getTime() > r.getTime() ? "'下个'" + n : "'上个'" + n
}

var Rc = {lastWeek: Ho, yesterday: "'昨天' p", today: "'今天' p", tomorrow: "'明天' p", nextWeek: Ho, other: "PP p"},
    Dc = function (r, t, n, o) {
        var i = Rc[r];
        return typeof i == "function" ? i(t, n, o) : i
    };
const Ec = Dc;
var Bc = {narrow: ["前", "公元"], abbreviated: ["前", "公元"], wide: ["公元前", "公元"]}, Oc = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["第一季", "第二季", "第三季", "第四季"],
    wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, Ac = {
    narrow: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
    abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    wide: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
}, Tc = {
    narrow: ["日", "一", "二", "三", "四", "五", "六"],
    short: ["日", "一", "二", "三", "四", "五", "六"],
    abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, Mc = {
    narrow: {
        am: "上",
        pm: "下",
        midnight: "凌晨",
        noon: "午",
        morning: "早",
        afternoon: "下午",
        evening: "晚",
        night: "夜"
    },
    abbreviated: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜间"
    },
    wide: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜间"
    }
}, Nc = {
    narrow: {
        am: "上",
        pm: "下",
        midnight: "凌晨",
        noon: "午",
        morning: "早",
        afternoon: "下午",
        evening: "晚",
        night: "夜"
    },
    abbreviated: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜间"
    },
    wide: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜间"
    }
}, Fc = function (r, t) {
    var n = Number(r);
    switch (t == null ? void 0 : t.unit) {
        case"date":
            return n.toString() + "日";
        case"hour":
            return n.toString() + "时";
        case"minute":
            return n.toString() + "分";
        case"second":
            return n.toString() + "秒";
        default:
            return "第 " + n.toString()
    }
}, Lc = {
    ordinalNumber: Fc,
    era: gr({values: Bc, defaultWidth: "wide"}),
    quarter: gr({
        values: Oc, defaultWidth: "wide", argumentCallback: function (r) {
            return r - 1
        }
    }),
    month: gr({values: Ac, defaultWidth: "wide"}),
    day: gr({values: Tc, defaultWidth: "wide"}),
    dayPeriod: gr({values: Mc, defaultWidth: "wide", formattingValues: Nc, defaultFormattingWidth: "wide"})
};
const Wc = Lc;
var Gc = /^(第\s*)?\d+(日|时|分|秒)?/i, kc = /\d+/i,
    $c = {narrow: /^(前)/i, abbreviated: /^(前)/i, wide: /^(公元前|公元)/i}, Hc = {any: [/^(前)/i, /^(公元)/i]},
    zc = {narrow: /^[1234]/i, abbreviated: /^第[一二三四]刻/i, wide: /^第[一二三四]刻钟/i},
    jc = {any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]}, Vc = {
        narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
        abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
        wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
    }, Uc = {
        narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i],
        any: [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i]
    }, qc = {
        narrow: /^[一二三四五六日]/i,
        short: /^[一二三四五六日]/i,
        abbreviated: /^周[一二三四五六日]/i,
        wide: /^星期[一二三四五六日]/i
    }, _c = {any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]},
    Xc = {any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i}, Kc = {
        any: {
            am: /^上午?/i,
            pm: /^下午?/i,
            midnight: /^午夜/i,
            noon: /^[中正]午/i,
            morning: /^早上/i,
            afternoon: /^下午/i,
            evening: /^晚上?/i,
            night: /^凌晨/i
        }
    }, Yc = {
        ordinalNumber: zi({
            matchPattern: Gc, parsePattern: kc, valueCallback: function (r) {
                return parseInt(r, 10)
            }
        }),
        era: mr({matchPatterns: $c, defaultMatchWidth: "wide", parsePatterns: Hc, defaultParseWidth: "any"}),
        quarter: mr({
            matchPatterns: zc,
            defaultMatchWidth: "wide",
            parsePatterns: jc,
            defaultParseWidth: "any",
            valueCallback: function (r) {
                return r + 1
            }
        }),
        month: mr({matchPatterns: Vc, defaultMatchWidth: "wide", parsePatterns: Uc, defaultParseWidth: "any"}),
        day: mr({matchPatterns: qc, defaultMatchWidth: "wide", parsePatterns: _c, defaultParseWidth: "any"}),
        dayPeriod: mr({matchPatterns: Xc, defaultMatchWidth: "any", parsePatterns: Kc, defaultParseWidth: "any"})
    };
const Jc = Yc;
var Qc = {
    code: "zh-CN",
    formatDistance: wc,
    formatLong: Pc,
    formatRelative: Ec,
    localize: Wc,
    match: Jc,
    options: {weekStartsOn: 1, firstWeekContainsDate: 4}
};
const Zc = Qc;
var ed = {
    lessThanXSeconds: {one: "少於 1 秒", other: "少於 {{count}} 秒"},
    xSeconds: {one: "1 秒", other: "{{count}} 秒"},
    halfAMinute: "半分鐘",
    lessThanXMinutes: {one: "少於 1 分鐘", other: "少於 {{count}} 分鐘"},
    xMinutes: {one: "1 分鐘", other: "{{count}} 分鐘"},
    xHours: {one: "1 小時", other: "{{count}} 小時"},
    aboutXHours: {one: "大約 1 小時", other: "大約 {{count}} 小時"},
    xDays: {one: "1 天", other: "{{count}} 天"},
    aboutXWeeks: {one: "大約 1 個星期", other: "大約 {{count}} 個星期"},
    xWeeks: {one: "1 個星期", other: "{{count}} 個星期"},
    aboutXMonths: {one: "大約 1 個月", other: "大約 {{count}} 個月"},
    xMonths: {one: "1 個月", other: "{{count}} 個月"},
    aboutXYears: {one: "大約 1 年", other: "大約 {{count}} 年"},
    xYears: {one: "1 年", other: "{{count}} 年"},
    overXYears: {one: "超過 1 年", other: "超過 {{count}} 年"},
    almostXYears: {one: "將近 1 年", other: "將近 {{count}} 年"}
}, rd = function (r, t, n) {
    var o, i = ed[r];
    return typeof i == "string" ? o = i : t === 1 ? o = i.one : o = i.other.replace("{{count}}", String(t)), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? o + "內" : o + "前" : o
};
const td = rd;
var nd = {full: "y'年'M'月'd'日' EEEE", long: "y'年'M'月'd'日'", medium: "yyyy-MM-dd", short: "yy-MM-dd"},
    ad = {full: "zzzz a h:mm:ss", long: "z a h:mm:ss", medium: "a h:mm:ss", short: "a h:mm"}, od = {
        full: "{{date}} {{time}}",
        long: "{{date}} {{time}}",
        medium: "{{date}} {{time}}",
        short: "{{date}} {{time}}"
    }, id = {
        date: Wr({formats: nd, defaultWidth: "full"}),
        time: Wr({formats: ad, defaultWidth: "full"}),
        dateTime: Wr({formats: od, defaultWidth: "full"})
    };
const ld = id;
var sd = {
    lastWeek: "'上個'eeee p",
    yesterday: "'昨天' p",
    today: "'今天' p",
    tomorrow: "'明天' p",
    nextWeek: "'下個'eeee p",
    other: "P"
}, ud = function (r, t, n, o) {
    return sd[r]
};
const cd = ud;
var dd = {narrow: ["前", "公元"], abbreviated: ["前", "公元"], wide: ["公元前", "公元"]}, fd = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["第一刻", "第二刻", "第三刻", "第四刻"],
    wide: ["第一刻鐘", "第二刻鐘", "第三刻鐘", "第四刻鐘"]
}, pd = {
    narrow: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
    abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    wide: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
}, vd = {
    narrow: ["日", "一", "二", "三", "四", "五", "六"],
    short: ["日", "一", "二", "三", "四", "五", "六"],
    abbreviated: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
    wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, gd = {
    narrow: {
        am: "上",
        pm: "下",
        midnight: "凌晨",
        noon: "午",
        morning: "早",
        afternoon: "下午",
        evening: "晚",
        night: "夜"
    },
    abbreviated: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜間"
    },
    wide: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜間"
    }
}, md = {
    narrow: {
        am: "上",
        pm: "下",
        midnight: "凌晨",
        noon: "午",
        morning: "早",
        afternoon: "下午",
        evening: "晚",
        night: "夜"
    },
    abbreviated: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜間"
    },
    wide: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜間"
    }
}, hd = function (r, t) {
    var n = Number(r);
    switch (t == null ? void 0 : t.unit) {
        case"date":
            return n + "日";
        case"hour":
            return n + "時";
        case"minute":
            return n + "分";
        case"second":
            return n + "秒";
        default:
            return "第 " + n
    }
}, bd = {
    ordinalNumber: hd,
    era: gr({values: dd, defaultWidth: "wide"}),
    quarter: gr({
        values: fd, defaultWidth: "wide", argumentCallback: function (r) {
            return r - 1
        }
    }),
    month: gr({values: pd, defaultWidth: "wide"}),
    day: gr({values: vd, defaultWidth: "wide"}),
    dayPeriod: gr({values: gd, defaultWidth: "wide", formattingValues: md, defaultFormattingWidth: "wide"})
};
const yd = bd;
var wd = /^(第\s*)?\d+(日|時|分|秒)?/i, Cd = /\d+/i,
    Sd = {narrow: /^(前)/i, abbreviated: /^(前)/i, wide: /^(公元前|公元)/i}, xd = {any: [/^(前)/i, /^(公元)/i]},
    Id = {narrow: /^[1234]/i, abbreviated: /^第[一二三四]刻/i, wide: /^第[一二三四]刻鐘/i},
    Pd = {any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]}, Rd = {
        narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
        abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
        wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
    }, Dd = {
        narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i],
        any: [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i]
    }, Ed = {
        narrow: /^[一二三四五六日]/i,
        short: /^[一二三四五六日]/i,
        abbreviated: /^週[一二三四五六日]/i,
        wide: /^星期[一二三四五六日]/i
    }, Bd = {any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]},
    Od = {any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i}, Ad = {
        any: {
            am: /^上午?/i,
            pm: /^下午?/i,
            midnight: /^午夜/i,
            noon: /^[中正]午/i,
            morning: /^早上/i,
            afternoon: /^下午/i,
            evening: /^晚上?/i,
            night: /^凌晨/i
        }
    }, Td = {
        ordinalNumber: zi({
            matchPattern: wd, parsePattern: Cd, valueCallback: function (r) {
                return parseInt(r, 10)
            }
        }),
        era: mr({matchPatterns: Sd, defaultMatchWidth: "wide", parsePatterns: xd, defaultParseWidth: "any"}),
        quarter: mr({
            matchPatterns: Id,
            defaultMatchWidth: "wide",
            parsePatterns: Pd,
            defaultParseWidth: "any",
            valueCallback: function (r) {
                return r + 1
            }
        }),
        month: mr({matchPatterns: Rd, defaultMatchWidth: "wide", parsePatterns: Dd, defaultParseWidth: "any"}),
        day: mr({matchPatterns: Ed, defaultMatchWidth: "wide", parsePatterns: Bd, defaultParseWidth: "any"}),
        dayPeriod: mr({matchPatterns: Od, defaultMatchWidth: "any", parsePatterns: Ad, defaultParseWidth: "any"})
    };
const Md = Td;
var Nd = {
    code: "zh-TW",
    formatDistance: td,
    formatLong: ld,
    formatRelative: cd,
    localize: yd,
    match: Md,
    options: {weekStartsOn: 1, firstWeekContainsDate: 4}
};
const Fd = Nd;
var Ft = {}, Ld = {
    get exports() {
        return Ft
    }, set exports(e) {
        Ft = e
    }
}, Lt = {}, Wd = {
    get exports() {
        return Lt
    }, set exports(e) {
        Lt = e
    }
};
(function (e, r) {
    (function (t, n) {
        n(r, G)
    })(Pu, function (t, n) {
        function o(a, c, d, v, y, h, w) {
            try {
                var x = a[h](w), I = x.value
            } catch (R) {
                return void d(R)
            }
            x.done ? c(I) : Promise.resolve(I).then(v, y)
        }

        function i(a) {
            return function () {
                var c = this, d = arguments;
                return new Promise(function (v, y) {
                    var h = a.apply(c, d);

                    function w(I) {
                        o(h, v, y, w, x, "next", I)
                    }

                    function x(I) {
                        o(h, v, y, w, x, "throw", I)
                    }

                    w(void 0)
                })
            }
        }

        function l() {
            return (l = Object.assign || function (a) {
                for (var c = 1; c < arguments.length; c++) {
                    var d = arguments[c];
                    for (var v in d) Object.prototype.hasOwnProperty.call(d, v) && (a[v] = d[v])
                }
                return a
            }).apply(this, arguments)
        }

        function s(a, c) {
            if (a == null) return {};
            var d, v, y = {}, h = Object.keys(a);
            for (v = 0; v < h.length; v++) d = h[v], c.indexOf(d) >= 0 || (y[d] = a[d]);
            return y
        }

        function f(a) {
            var c = function (d, v) {
                if (typeof d != "object" || d === null) return d;
                var y = d[Symbol.toPrimitive];
                if (y !== void 0) {
                    var h = y.call(d, v || "default");
                    if (typeof h != "object") return h;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return (v === "string" ? String : Number)(d)
            }(a, "string");
            return typeof c == "symbol" ? c : String(c)
        }

        n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
        var u = {init: "init"}, m = function (a) {
            var c = a.value;
            return c === void 0 ? "" : c
        }, g = function () {
            return n.createElement(n.Fragment, null, " ")
        }, p = {Cell: m, width: 150, minWidth: 0, maxWidth: Number.MAX_SAFE_INTEGER};

        function b() {
            for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
            return c.reduce(function (v, y) {
                var h = y.style, w = y.className;
                return v = l({}, v, {}, s(y, ["style", "className"])), h && (v.style = v.style ? l({}, v.style || {}, {}, h || {}) : h), w && (v.className = v.className ? v.className + " " + w : w), v.className === "" && delete v.className, v
            }, {})
        }

        var C = function (a, c) {
            return c === void 0 && (c = {}), function (d) {
                return d === void 0 && (d = {}), [].concat(a, [d]).reduce(function (v, y) {
                    return function h(w, x, I) {
                        return typeof x == "function" ? h({}, x(w, I)) : Array.isArray(x) ? b.apply(void 0, [w].concat(x)) : b(w, x)
                    }(v, y, l({}, c, {userProps: d}))
                }, {})
            }
        }, S = function (a, c, d, v) {
            return d === void 0 && (d = {}), a.reduce(function (y, h) {
                return h(y, d)
            }, c)
        }, P = function (a, c, d) {
            return d === void 0 && (d = {}), a.forEach(function (v) {
                v(c, d)
            })
        };

        function D(a, c, d, v) {
            a.findIndex(function (y) {
                return y.pluginName === d
            }), c.forEach(function (y) {
                a.findIndex(function (h) {
                    return h.pluginName === y
                })
            })
        }

        function B(a, c) {
            return typeof a == "function" ? a(c) : a
        }

        function O(a) {
            var c = n.useRef();
            return c.current = a, n.useCallback(function () {
                return c.current
            }, [])
        }

        var A = typeof document < "u" ? n.useLayoutEffect : n.useEffect;

        function k(a, c) {
            var d = n.useRef(!1);
            A(function () {
                d.current && a(), d.current = !0
            }, c)
        }

        function j(a, c, d) {
            return d === void 0 && (d = {}), function (v, y) {
                y === void 0 && (y = {});
                var h = typeof v == "string" ? c[v] : v;
                if (h === void 0) throw console.info(c), new Error("Renderer Error ☝️");
                return J(h, l({}, a, {column: c}, d, {}, y))
            }
        }

        function J(a, c) {
            return function (v) {
                return typeof v == "function" && (y = Object.getPrototypeOf(v)).prototype && y.prototype.isReactComponent;
                var y
            }(d = a) || typeof d == "function" || function (v) {
                return typeof v == "object" && typeof v.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(v.$$typeof.description)
            }(d) ? n.createElement(a, c) : a;
            var d
        }

        function fe(a, c, d) {
            return d === void 0 && (d = 0), a.map(function (v) {
                return be(v = l({}, v, {parent: c, depth: d})), v.columns && (v.columns = fe(v.columns, v, d + 1)), v
            })
        }

        function le(a) {
            return Ie(a, "columns")
        }

        function be(a) {
            var c = a.id, d = a.accessor, v = a.Header;
            if (typeof d == "string") {
                c = c || d;
                var y = d.split(".");
                d = function (h) {
                    return function (w, x, I) {
                        if (!x) return w;
                        var R, F = typeof x == "function" ? x : JSON.stringify(x), T = H.get(F) || function () {
                            var M = function (E) {
                                return function N($, z) {
                                    if (z === void 0 && (z = []), Array.isArray($)) for (var X = 0; X < $.length; X += 1) N($[X], z); else z.push($);
                                    return z
                                }(E).map(function (N) {
                                    return String(N).replace(".", "_")
                                }).join(".").replace(Fe, ".").replace(ur, "").split(".")
                            }(x);
                            return H.set(F, M), M
                        }();
                        try {
                            R = T.reduce(function (M, E) {
                                return M[E]
                            }, w)
                        } catch {
                        }
                        return R !== void 0 ? R : I
                    }(h, y)
                }
            }
            if (!c && typeof v == "string" && v && (c = v), !c && a.columns) throw console.error(a), new Error('A column ID (or unique "Header" value) is required!');
            if (!c) throw console.error(a), new Error("A column ID (or string accessor) is required!");
            return Object.assign(a, {id: c, accessor: d}), a
        }

        function pe(a, c) {
            if (!c) throw new Error;
            return Object.assign(a, l({
                Header: g,
                Footer: g
            }, p, {}, c, {}, a)), Object.assign(a, {originalWidth: a.width}), a
        }

        function Le(a, c, d) {
            d === void 0 && (d = function () {
                return {}
            });
            for (var v = [], y = a, h = 0, w = function () {
                return h++
            }, x = function () {
                var I = {headers: []}, R = [], F = y.some(function (T) {
                    return T.parent
                });
                y.forEach(function (T) {
                    var M, E = [].concat(R).reverse()[0];
                    F && (T.parent ? M = l({}, T.parent, {
                        originalId: T.parent.id,
                        id: T.parent.id + "_" + w(),
                        headers: [T]
                    }, d(T)) : M = pe(l({
                        originalId: T.id + "_placeholder",
                        id: T.id + "_placeholder_" + w(),
                        placeholderOf: T,
                        headers: [T]
                    }, d(T)), c), E && E.originalId === M.originalId ? E.headers.push(T) : R.push(M)), I.headers.push(T)
                }), v.push(I), y = R
            }; y.length;) x();
            return v.reverse()
        }

        var H = new Map;

        function V() {
            for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
            for (var v = 0; v < c.length; v += 1) if (c[v] !== void 0) return c[v]
        }

        function se(a) {
            if (typeof a == "function") return a
        }

        function Ie(a, c) {
            var d = [];
            return function v(y) {
                y.forEach(function (h) {
                    h[c] ? v(h[c]) : d.push(h)
                })
            }(a), d
        }

        function Se(a, c) {
            var d = c.manualExpandedKey, v = c.expanded, y = c.expandSubRows, h = y === void 0 || y, w = [];
            return a.forEach(function (x) {
                return function I(R, F) {
                    F === void 0 && (F = !0), R.isExpanded = R.original && R.original[d] || v[R.id], R.canExpand = R.subRows && !!R.subRows.length, F && w.push(R), R.subRows && R.subRows.length && R.isExpanded && R.subRows.forEach(function (T) {
                        return I(T, h)
                    })
                }(x)
            }), w
        }

        function we(a, c, d) {
            return se(a) || c[a] || d[a] || d.text
        }

        function Ee(a, c, d) {
            return a ? a(c, d) : c === void 0
        }

        function De() {
            throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.")
        }

        var Oe = null, Fe = /\[/g, ur = /\]/g, Ve = function (a) {
            return l({role: "table"}, a)
        }, Ae = function (a) {
            return l({role: "rowgroup"}, a)
        }, We = function (a, c) {
            var d = c.column;
            return l({key: "header_" + d.id, colSpan: d.totalVisibleHeaderCount, role: "columnheader"}, a)
        }, cr = function (a, c) {
            var d = c.column;
            return l({key: "footer_" + d.id, colSpan: d.totalVisibleHeaderCount}, a)
        }, nr = function (a, c) {
            return l({key: "headerGroup_" + c.index, role: "row"}, a)
        }, dr = function (a, c) {
            return l({key: "footerGroup_" + c.index}, a)
        }, Ke = function (a, c) {
            return l({key: "row_" + c.row.id, role: "row"}, a)
        }, xe = function (a, c) {
            var d = c.cell;
            return l({key: "cell_" + d.row.id + "_" + d.column.id, role: "cell"}, a)
        };

        function Ue() {
            return {
                useOptions: [],
                stateReducers: [],
                useControlledState: [],
                columns: [],
                columnsDeps: [],
                allColumns: [],
                allColumnsDeps: [],
                accessValue: [],
                materializedColumns: [],
                materializedColumnsDeps: [],
                useInstanceAfterData: [],
                visibleColumns: [],
                visibleColumnsDeps: [],
                headerGroups: [],
                headerGroupsDeps: [],
                useInstanceBeforeDimensions: [],
                useInstance: [],
                prepareRow: [],
                getTableProps: [Ve],
                getTableBodyProps: [Ae],
                getHeaderGroupProps: [nr],
                getFooterGroupProps: [dr],
                getHeaderProps: [We],
                getFooterProps: [cr],
                getRowProps: [Ke],
                getCellProps: [xe],
                useFinalInstance: []
            }
        }

        u.resetHiddenColumns = "resetHiddenColumns", u.toggleHideColumn = "toggleHideColumn", u.setHiddenColumns = "setHiddenColumns", u.toggleHideAllColumns = "toggleHideAllColumns";
        var vr = function (a) {
            a.getToggleHiddenProps = [Je], a.getToggleHideAllColumnsProps = [Dr], a.stateReducers.push(ar), a.useInstanceBeforeDimensions.push(Nr), a.headerGroupsDeps.push(function (c, d) {
                var v = d.instance;
                return [].concat(c, [v.state.hiddenColumns])
            }), a.useInstance.push(Vr)
        };
        vr.pluginName = "useColumnVisibility";
        var Je = function (a, c) {
            var d = c.column;
            return [a, {
                onChange: function (v) {
                    d.toggleHidden(!v.target.checked)
                }, style: {cursor: "pointer"}, checked: d.isVisible, title: "Toggle Column Visible"
            }]
        }, Dr = function (a, c) {
            var d = c.instance;
            return [a, {
                onChange: function (v) {
                    d.toggleHideAllColumns(!v.target.checked)
                },
                style: {cursor: "pointer"},
                checked: !d.allColumnsHidden && !d.state.hiddenColumns.length,
                title: "Toggle All Columns Hidden",
                indeterminate: !d.allColumnsHidden && d.state.hiddenColumns.length
            }]
        };

        function ar(a, c, d, v) {
            if (c.type === u.init) return l({hiddenColumns: []}, a);
            if (c.type === u.resetHiddenColumns) return l({}, a, {hiddenColumns: v.initialState.hiddenColumns || []});
            if (c.type === u.toggleHideColumn) {
                var y = (c.value !== void 0 ? c.value : !a.hiddenColumns.includes(c.columnId)) ? [].concat(a.hiddenColumns, [c.columnId]) : a.hiddenColumns.filter(function (h) {
                    return h !== c.columnId
                });
                return l({}, a, {hiddenColumns: y})
            }
            return c.type === u.setHiddenColumns ? l({}, a, {hiddenColumns: B(c.value, a.hiddenColumns)}) : c.type === u.toggleHideAllColumns ? l({}, a, {
                hiddenColumns: (c.value !== void 0 ? c.value : !a.hiddenColumns.length) ? v.allColumns.map(function (h) {
                    return h.id
                }) : []
            }) : void 0
        }

        function Nr(a) {
            var c = a.headers, d = a.state.hiddenColumns;
            n.useRef(!1).current;
            var v = 0;
            c.forEach(function (y) {
                return v += function h(w, x) {
                    w.isVisible = x && !d.includes(w.id);
                    var I = 0;
                    return w.headers && w.headers.length ? w.headers.forEach(function (R) {
                        return I += h(R, w.isVisible)
                    }) : I = w.isVisible ? 1 : 0, w.totalVisibleHeaderCount = I, I
                }(y, !0)
            })
        }

        function Vr(a) {
            var c = a.columns, d = a.flatHeaders, v = a.dispatch, y = a.allColumns, h = a.getHooks,
                w = a.state.hiddenColumns, x = a.autoResetHiddenColumns, I = x === void 0 || x, R = O(a),
                F = y.length === w.length, T = n.useCallback(function (z, X) {
                    return v({type: u.toggleHideColumn, columnId: z, value: X})
                }, [v]), M = n.useCallback(function (z) {
                    return v({type: u.setHiddenColumns, value: z})
                }, [v]), E = n.useCallback(function (z) {
                    return v({type: u.toggleHideAllColumns, value: z})
                }, [v]), N = C(h().getToggleHideAllColumnsProps, {instance: R()});
            d.forEach(function (z) {
                z.toggleHidden = function (X) {
                    v({type: u.toggleHideColumn, columnId: z.id, value: X})
                }, z.getToggleHiddenProps = C(h().getToggleHiddenProps, {instance: R(), column: z})
            });
            var $ = O(I);
            k(function () {
                $() && v({type: u.resetHiddenColumns})
            }, [v, c]), Object.assign(a, {
                allColumnsHidden: F,
                toggleHideColumn: T,
                setHiddenColumns: M,
                toggleHideAllColumns: E,
                getToggleHideAllColumnsProps: N
            })
        }

        var Er = {}, Ur = {}, us = function (a, c, d) {
            return a
        }, cs = function (a, c) {
            return a.subRows || []
        }, ds = function (a, c, d) {
            return "" + (d ? [d.id, c].join(".") : c)
        }, fs = function (a) {
            return a
        };

        function Ha(a) {
            var c = a.initialState, d = c === void 0 ? Er : c, v = a.defaultColumn, y = v === void 0 ? Ur : v,
                h = a.getSubRows, w = h === void 0 ? cs : h, x = a.getRowId, I = x === void 0 ? ds : x,
                R = a.stateReducer, F = R === void 0 ? us : R, T = a.useControlledState, M = T === void 0 ? fs : T;
            return l({}, s(a, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]), {
                initialState: d,
                defaultColumn: y,
                getSubRows: w,
                getRowId: I,
                stateReducer: F,
                useControlledState: M
            })
        }

        function za(a, c) {
            c === void 0 && (c = 0);
            var d = 0, v = 0, y = 0, h = 0;
            return a.forEach(function (w) {
                var x = w.headers;
                if (w.totalLeft = c, x && x.length) {
                    var I = za(x, c), R = I[0], F = I[1], T = I[2], M = I[3];
                    w.totalMinWidth = R, w.totalWidth = F, w.totalMaxWidth = T, w.totalFlexWidth = M
                } else w.totalMinWidth = w.minWidth, w.totalWidth = Math.min(Math.max(w.minWidth, w.width), w.maxWidth), w.totalMaxWidth = w.maxWidth, w.totalFlexWidth = w.canResize ? w.totalWidth : 0;
                w.isVisible && (c += w.totalWidth, d += w.totalMinWidth, v += w.totalWidth, y += w.totalMaxWidth, h += w.totalFlexWidth)
            }), [d, v, y, h]
        }

        function ps(a) {
            var c = a.data, d = a.rows, v = a.flatRows, y = a.rowsById, h = a.column, w = a.getRowId, x = a.getSubRows,
                I = a.accessValueHooks, R = a.getInstance;
            c.forEach(function (F, T) {
                return function M(E, N, $, z, X) {
                    $ === void 0 && ($ = 0);
                    var ie = E, _ = w(E, N, z), L = y[_];
                    if (L) L.subRows && L.originalSubRows.forEach(function (q, te) {
                        return M(q, te, $ + 1, L)
                    }); else if ((L = {
                        id: _,
                        original: ie,
                        index: N,
                        depth: $,
                        cells: [{}]
                    }).cells.map = De, L.cells.filter = De, L.cells.forEach = De, L.cells[0].getCellProps = De, L.values = {}, X.push(L), v.push(L), y[_] = L, L.originalSubRows = x(E, N), L.originalSubRows) {
                        var oe = [];
                        L.originalSubRows.forEach(function (q, te) {
                            return M(q, te, $ + 1, L, oe)
                        }), L.subRows = oe
                    }
                    h.accessor && (L.values[h.id] = h.accessor(E, N, L, X, c)), L.values[h.id] = S(I, L.values[h.id], {
                        row: L,
                        column: h,
                        instance: R()
                    })
                }(F, T, 0, void 0, d)
            })
        }

        u.resetExpanded = "resetExpanded", u.toggleRowExpanded = "toggleRowExpanded", u.toggleAllRowsExpanded = "toggleAllRowsExpanded";
        var ja = function (a) {
            a.getToggleAllRowsExpandedProps = [vs], a.getToggleRowExpandedProps = [gs], a.stateReducers.push(ms), a.useInstance.push(hs), a.prepareRow.push(bs)
        };
        ja.pluginName = "useExpanded";
        var vs = function (a, c) {
            var d = c.instance;
            return [a, {
                onClick: function (v) {
                    d.toggleAllRowsExpanded()
                }, style: {cursor: "pointer"}, title: "Toggle All Rows Expanded"
            }]
        }, gs = function (a, c) {
            var d = c.row;
            return [a, {
                onClick: function () {
                    d.toggleRowExpanded()
                }, style: {cursor: "pointer"}, title: "Toggle Row Expanded"
            }]
        };

        function ms(a, c, d, v) {
            if (c.type === u.init) return l({expanded: {}}, a);
            if (c.type === u.resetExpanded) return l({}, a, {expanded: v.initialState.expanded || {}});
            if (c.type === u.toggleAllRowsExpanded) {
                var y = c.value, h = v.rowsById, w = Object.keys(h).length === Object.keys(a.expanded).length;
                if (y !== void 0 ? y : !w) {
                    var x = {};
                    return Object.keys(h).forEach(function (N) {
                        x[N] = !0
                    }), l({}, a, {expanded: x})
                }
                return l({}, a, {expanded: {}})
            }
            if (c.type === u.toggleRowExpanded) {
                var I, R = c.id, F = c.value, T = a.expanded[R], M = F !== void 0 ? F : !T;
                if (!T && M) return l({}, a, {expanded: l({}, a.expanded, (I = {}, I[R] = !0, I))});
                if (T && !M) {
                    var E = a.expanded;
                    return E[R], l({}, a, {expanded: s(E, [R].map(f))})
                }
                return a
            }
        }

        function hs(a) {
            var c = a.data, d = a.rows, v = a.rowsById, y = a.manualExpandedKey, h = y === void 0 ? "expanded" : y,
                w = a.paginateExpandedRows, x = w === void 0 || w, I = a.expandSubRows, R = I === void 0 || I,
                F = a.autoResetExpanded, T = F === void 0 || F, M = a.getHooks, E = a.plugins, N = a.state.expanded,
                $ = a.dispatch;
            D(E, ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"], "useExpanded");
            var z = O(T), X = Boolean(Object.keys(v).length && Object.keys(N).length);
            X && Object.keys(v).some(function (ue) {
                return !N[ue]
            }) && (X = !1), k(function () {
                z() && $({type: u.resetExpanded})
            }, [$, c]);
            var ie = n.useCallback(function (ue, Q) {
                $({type: u.toggleRowExpanded, id: ue, value: Q})
            }, [$]), _ = n.useCallback(function (ue) {
                return $({type: u.toggleAllRowsExpanded, value: ue})
            }, [$]), L = n.useMemo(function () {
                return x ? Se(d, {manualExpandedKey: h, expanded: N, expandSubRows: R}) : d
            }, [x, d, h, N, R]), oe = n.useMemo(function () {
                return function (ue) {
                    var Q = 0;
                    return Object.keys(ue).forEach(function (re) {
                        var ge = re.split(".");
                        Q = Math.max(Q, ge.length)
                    }), Q
                }(N)
            }, [N]), q = O(a), te = C(M().getToggleAllRowsExpandedProps, {instance: q()});
            Object.assign(a, {
                preExpandedRows: d,
                expandedRows: L,
                rows: L,
                expandedDepth: oe,
                isAllRowsExpanded: X,
                toggleRowExpanded: ie,
                toggleAllRowsExpanded: _,
                getToggleAllRowsExpandedProps: te
            })
        }

        function bs(a, c) {
            var d = c.instance.getHooks, v = c.instance;
            a.toggleRowExpanded = function (y) {
                return v.toggleRowExpanded(a.id, y)
            }, a.getToggleRowExpandedProps = C(d().getToggleRowExpandedProps, {instance: v, row: a})
        }

        var Va = function (a, c, d) {
            return a = a.filter(function (v) {
                return c.some(function (y) {
                    var h = v.values[y];
                    return String(h).toLowerCase().includes(String(d).toLowerCase())
                })
            })
        };
        Va.autoRemove = function (a) {
            return !a
        };
        var Ua = function (a, c, d) {
            return a.filter(function (v) {
                return c.some(function (y) {
                    var h = v.values[y];
                    return h === void 0 || String(h).toLowerCase() === String(d).toLowerCase()
                })
            })
        };
        Ua.autoRemove = function (a) {
            return !a
        };
        var qa = function (a, c, d) {
            return a.filter(function (v) {
                return c.some(function (y) {
                    var h = v.values[y];
                    return h === void 0 || String(h) === String(d)
                })
            })
        };
        qa.autoRemove = function (a) {
            return !a
        };
        var _a = function (a, c, d) {
            return a.filter(function (v) {
                return c.some(function (y) {
                    return v.values[y].includes(d)
                })
            })
        };
        _a.autoRemove = function (a) {
            return !a || !a.length
        };
        var Xa = function (a, c, d) {
            return a.filter(function (v) {
                return c.some(function (y) {
                    var h = v.values[y];
                    return h && h.length && d.every(function (w) {
                        return h.includes(w)
                    })
                })
            })
        };
        Xa.autoRemove = function (a) {
            return !a || !a.length
        };
        var Ka = function (a, c, d) {
            return a.filter(function (v) {
                return c.some(function (y) {
                    var h = v.values[y];
                    return h && h.length && d.some(function (w) {
                        return h.includes(w)
                    })
                })
            })
        };
        Ka.autoRemove = function (a) {
            return !a || !a.length
        };
        var Ya = function (a, c, d) {
            return a.filter(function (v) {
                return c.some(function (y) {
                    var h = v.values[y];
                    return d.includes(h)
                })
            })
        };
        Ya.autoRemove = function (a) {
            return !a || !a.length
        };
        var Ja = function (a, c, d) {
            return a.filter(function (v) {
                return c.some(function (y) {
                    return v.values[y] === d
                })
            })
        };
        Ja.autoRemove = function (a) {
            return a === void 0
        };
        var Qa = function (a, c, d) {
            return a.filter(function (v) {
                return c.some(function (y) {
                    return v.values[y] == d
                })
            })
        };
        Qa.autoRemove = function (a) {
            return a == null
        };
        var Za = function (a, c, d) {
            var v = d || [], y = v[0], h = v[1];
            if ((y = typeof y == "number" ? y : -1 / 0) > (h = typeof h == "number" ? h : 1 / 0)) {
                var w = y;
                y = h, h = w
            }
            return a.filter(function (x) {
                return c.some(function (I) {
                    var R = x.values[I];
                    return R >= y && R <= h
                })
            })
        };
        Za.autoRemove = function (a) {
            return !a || typeof a[0] != "number" && typeof a[1] != "number"
        };
        var qr = Object.freeze({
            __proto__: null,
            text: Va,
            exactText: Ua,
            exactTextCase: qa,
            includes: _a,
            includesAll: Xa,
            includesSome: Ka,
            includesValue: Ya,
            exact: Ja,
            equals: Qa,
            between: Za
        });
        u.resetFilters = "resetFilters", u.setFilter = "setFilter", u.setAllFilters = "setAllFilters";
        var eo = function (a) {
            a.stateReducers.push(ys), a.useInstance.push(ws)
        };

        function ys(a, c, d, v) {
            if (c.type === u.init) return l({filters: []}, a);
            if (c.type === u.resetFilters) return l({}, a, {filters: v.initialState.filters || []});
            if (c.type === u.setFilter) {
                var y = c.columnId, h = c.filterValue, w = v.allColumns, x = v.filterTypes, I = w.find(function ($) {
                    return $.id === y
                });
                if (!I) throw new Error("React-Table: Could not find a column with id: " + y);
                var R = we(I.filter, x || {}, qr), F = a.filters.find(function ($) {
                    return $.id === y
                }), T = B(h, F && F.value);
                return Ee(R.autoRemove, T, I) ? l({}, a, {
                    filters: a.filters.filter(function ($) {
                        return $.id !== y
                    })
                }) : l({}, a, F ? {
                    filters: a.filters.map(function ($) {
                        return $.id === y ? {id: y, value: T} : $
                    })
                } : {filters: [].concat(a.filters, [{id: y, value: T}])})
            }
            if (c.type === u.setAllFilters) {
                var M = c.filters, E = v.allColumns, N = v.filterTypes;
                return l({}, a, {
                    filters: B(M, a.filters).filter(function ($) {
                        var z = E.find(function (X) {
                            return X.id === $.id
                        });
                        return !Ee(we(z.filter, N || {}, qr).autoRemove, $.value, z)
                    })
                })
            }
        }

        function ws(a) {
            var c = a.data, d = a.rows, v = a.flatRows, y = a.rowsById, h = a.allColumns, w = a.filterTypes,
                x = a.manualFilters, I = a.defaultCanFilter, R = I !== void 0 && I, F = a.disableFilters,
                T = a.state.filters, M = a.dispatch, E = a.autoResetFilters, N = E === void 0 || E,
                $ = n.useCallback(function (q, te) {
                    M({type: u.setFilter, columnId: q, filterValue: te})
                }, [M]), z = n.useCallback(function (q) {
                    M({type: u.setAllFilters, filters: q})
                }, [M]);
            h.forEach(function (q) {
                var te = q.id, ue = q.accessor, Q = q.defaultCanFilter, re = q.disableFilters;
                q.canFilter = ue ? V(re !== !0 && void 0, F !== !0 && void 0, !0) : V(Q, R, !1), q.setFilter = function (ae) {
                    return $(q.id, ae)
                };
                var ge = T.find(function (ae) {
                    return ae.id === te
                });
                q.filterValue = ge && ge.value
            });
            var X = n.useMemo(function () {
                if (x || !T.length) return [d, v, y];
                var q = [], te = {};
                return [function ue(Q, re) {
                    re === void 0 && (re = 0);
                    var ge = Q;
                    return (ge = T.reduce(function (ae, ve) {
                        var de = ve.id, ye = ve.value, K = h.find(function (Be) {
                            return Be.id === de
                        });
                        if (!K) return ae;
                        re === 0 && (K.preFilteredRows = ae);
                        var ce = we(K.filter, w || {}, qr);
                        return ce ? (K.filteredRows = ce(ae, [de], ye), K.filteredRows) : (console.warn("Could not find a valid 'column.filter' for column with the ID: " + K.id + "."), ae)
                    }, Q)).forEach(function (ae) {
                        q.push(ae), te[ae.id] = ae, ae.subRows && (ae.subRows = ae.subRows && ae.subRows.length > 0 ? ue(ae.subRows, re + 1) : ae.subRows)
                    }), ge
                }(d), q, te]
            }, [x, T, d, v, y, h, w]), ie = X[0], _ = X[1], L = X[2];
            n.useMemo(function () {
                h.filter(function (q) {
                    return !T.find(function (te) {
                        return te.id === q.id
                    })
                }).forEach(function (q) {
                    q.preFilteredRows = ie, q.filteredRows = ie
                })
            }, [ie, T, h]);
            var oe = O(N);
            k(function () {
                oe() && M({type: u.resetFilters})
            }, [M, x ? null : c]), Object.assign(a, {
                preFilteredRows: d,
                preFilteredFlatRows: v,
                preFilteredRowsById: y,
                filteredRows: ie,
                filteredFlatRows: _,
                filteredRowsById: L,
                rows: ie,
                flatRows: _,
                rowsById: L,
                setFilter: $,
                setAllFilters: z
            })
        }

        eo.pluginName = "useFilters", u.resetGlobalFilter = "resetGlobalFilter", u.setGlobalFilter = "setGlobalFilter";
        var ro = function (a) {
            a.stateReducers.push(Cs), a.useInstance.push(Ss)
        };

        function Cs(a, c, d, v) {
            if (c.type === u.resetGlobalFilter) return l({}, a, {globalFilter: v.initialState.globalFilter || void 0});
            if (c.type === u.setGlobalFilter) {
                var y = c.filterValue, h = v.userFilterTypes, w = we(v.globalFilter, h || {}, qr),
                    x = B(y, a.globalFilter);
                return Ee(w.autoRemove, x) ? (a.globalFilter, s(a, ["globalFilter"])) : l({}, a, {globalFilter: x})
            }
        }

        function Ss(a) {
            var c = a.data, d = a.rows, v = a.flatRows, y = a.rowsById, h = a.allColumns, w = a.filterTypes,
                x = a.globalFilter, I = a.manualGlobalFilter, R = a.state.globalFilter, F = a.dispatch,
                T = a.autoResetGlobalFilter, M = T === void 0 || T, E = a.disableGlobalFilter,
                N = n.useCallback(function (L) {
                    F({type: u.setGlobalFilter, filterValue: L})
                }, [F]), $ = n.useMemo(function () {
                    if (I || R === void 0) return [d, v, y];
                    var L = [], oe = {}, q = we(x, w || {}, qr);
                    if (!q) return console.warn("Could not find a valid 'globalFilter' option."), d;
                    h.forEach(function (ue) {
                        var Q = ue.disableGlobalFilter;
                        ue.canFilter = V(Q !== !0 && void 0, E !== !0 && void 0, !0)
                    });
                    var te = h.filter(function (ue) {
                        return ue.canFilter === !0
                    });
                    return [function ue(Q) {
                        return (Q = q(Q, te.map(function (re) {
                            return re.id
                        }), R)).forEach(function (re) {
                            L.push(re), oe[re.id] = re, re.subRows = re.subRows && re.subRows.length ? ue(re.subRows) : re.subRows
                        }), Q
                    }(d), L, oe]
                }, [I, R, x, w, h, d, v, y, E]), z = $[0], X = $[1], ie = $[2], _ = O(M);
            k(function () {
                _() && F({type: u.resetGlobalFilter})
            }, [F, I ? null : c]), Object.assign(a, {
                preGlobalFilteredRows: d,
                preGlobalFilteredFlatRows: v,
                preGlobalFilteredRowsById: y,
                globalFilteredRows: z,
                globalFilteredFlatRows: X,
                globalFilteredRowsById: ie,
                rows: z,
                flatRows: X,
                rowsById: ie,
                setGlobalFilter: N,
                disableGlobalFilter: E
            })
        }

        function to(a, c) {
            return c.reduce(function (d, v) {
                return d + (typeof v == "number" ? v : 0)
            }, 0)
        }

        ro.pluginName = "useGlobalFilter";
        var no = Object.freeze({
            __proto__: null, sum: to, min: function (a) {
                var c = a[0] || 0;
                return a.forEach(function (d) {
                    typeof d == "number" && (c = Math.min(c, d))
                }), c
            }, max: function (a) {
                var c = a[0] || 0;
                return a.forEach(function (d) {
                    typeof d == "number" && (c = Math.max(c, d))
                }), c
            }, minMax: function (a) {
                var c = a[0] || 0, d = a[0] || 0;
                return a.forEach(function (v) {
                    typeof v == "number" && (c = Math.min(c, v), d = Math.max(d, v))
                }), c + ".." + d
            }, average: function (a) {
                return to(0, a) / a.length
            }, median: function (a) {
                if (!a.length) return null;
                var c = Math.floor(a.length / 2), d = [].concat(a).sort(function (v, y) {
                    return v - y
                });
                return a.length % 2 != 0 ? d[c] : (d[c - 1] + d[c]) / 2
            }, unique: function (a) {
                return Array.from(new Set(a).values())
            }, uniqueCount: function (a) {
                return new Set(a).size
            }, count: function (a) {
                return a.length
            }
        }), xs = [], Is = {};
        u.resetGroupBy = "resetGroupBy", u.setGroupBy = "setGroupBy", u.toggleGroupBy = "toggleGroupBy";
        var ao = function (a) {
            a.getGroupByToggleProps = [Ps], a.stateReducers.push(Rs), a.visibleColumnsDeps.push(function (c, d) {
                var v = d.instance;
                return [].concat(c, [v.state.groupBy])
            }), a.visibleColumns.push(Ds), a.useInstance.push(Bs), a.prepareRow.push(Os)
        };
        ao.pluginName = "useGroupBy";
        var Ps = function (a, c) {
            var d = c.header;
            return [a, {
                onClick: d.canGroupBy ? function (v) {
                    v.persist(), d.toggleGroupBy()
                } : void 0, style: {cursor: d.canGroupBy ? "pointer" : void 0}, title: "Toggle GroupBy"
            }]
        };

        function Rs(a, c, d, v) {
            if (c.type === u.init) return l({groupBy: []}, a);
            if (c.type === u.resetGroupBy) return l({}, a, {groupBy: v.initialState.groupBy || []});
            if (c.type === u.setGroupBy) return l({}, a, {groupBy: c.value});
            if (c.type === u.toggleGroupBy) {
                var y = c.columnId, h = c.value, w = h !== void 0 ? h : !a.groupBy.includes(y);
                return l({}, a, w ? {groupBy: [].concat(a.groupBy, [y])} : {
                    groupBy: a.groupBy.filter(function (x) {
                        return x !== y
                    })
                })
            }
        }

        function Ds(a, c) {
            var d = c.instance.state.groupBy, v = d.map(function (h) {
                return a.find(function (w) {
                    return w.id === h
                })
            }).filter(Boolean), y = a.filter(function (h) {
                return !d.includes(h.id)
            });
            return (a = [].concat(v, y)).forEach(function (h) {
                h.isGrouped = d.includes(h.id), h.groupedIndex = d.indexOf(h.id)
            }), a
        }

        var Es = {};

        function Bs(a) {
            var c = a.data, d = a.rows, v = a.flatRows, y = a.rowsById, h = a.allColumns, w = a.flatHeaders,
                x = a.groupByFn, I = x === void 0 ? oo : x, R = a.manualGroupBy, F = a.aggregations,
                T = F === void 0 ? Es : F, M = a.plugins, E = a.state.groupBy, N = a.dispatch, $ = a.autoResetGroupBy,
                z = $ === void 0 || $, X = a.disableGroupBy, ie = a.defaultCanGroupBy, _ = a.getHooks;
            D(M, ["useColumnOrder", "useFilters"], "useGroupBy");
            var L = O(a);
            h.forEach(function (K) {
                var ce = K.accessor, Be = K.defaultGroupBy, qe = K.disableGroupBy;
                K.canGroupBy = ce ? V(K.canGroupBy, qe !== !0 && void 0, X !== !0 && void 0, !0) : V(K.canGroupBy, Be, ie, !1), K.canGroupBy && (K.toggleGroupBy = function () {
                    return a.toggleGroupBy(K.id)
                }), K.Aggregated = K.Aggregated || K.Cell
            });
            var oe = n.useCallback(function (K, ce) {
                N({type: u.toggleGroupBy, columnId: K, value: ce})
            }, [N]), q = n.useCallback(function (K) {
                N({type: u.setGroupBy, value: K})
            }, [N]);
            w.forEach(function (K) {
                K.getGroupByToggleProps = C(_().getGroupByToggleProps, {instance: L(), header: K})
            });
            var te = n.useMemo(function () {
                    if (R || !E.length) return [d, v, y, xs, Is, v, y];
                    var K = E.filter(function (Ge) {
                        return h.find(function (br) {
                            return br.id === Ge
                        })
                    }), ce = [], Be = {}, qe = [], Z = {}, Pe = [], Te = {}, _e = function Ge(br, hr, Io) {
                        if (hr === void 0 && (hr = 0), hr === K.length) return br.map(function (yt) {
                            return l({}, yt, {depth: hr})
                        });
                        var wn = K[hr], bu = I(br, wn);
                        return Object.entries(bu).map(function (yt, yu) {
                            var Po = yt[0], wt = yt[1], Ct = wn + ":" + Po,
                                Ro = Ge(wt, hr + 1, Ct = Io ? Io + ">" + Ct : Ct), Do = hr ? Ie(wt, "leafRows") : wt,
                                wu = function (or, Cn, Su) {
                                    var St = {};
                                    return h.forEach(function (Me) {
                                        if (K.includes(Me.id)) St[Me.id] = Cn[0] ? Cn[0].values[Me.id] : null; else {
                                            var Eo = typeof Me.aggregate == "function" ? Me.aggregate : T[Me.aggregate] || no[Me.aggregate];
                                            if (Eo) {
                                                var xu = Cn.map(function (xt) {
                                                    return xt.values[Me.id]
                                                }), Iu = or.map(function (xt) {
                                                    var Sn = xt.values[Me.id];
                                                    if (!Su && Me.aggregateValue) {
                                                        var Bo = typeof Me.aggregateValue == "function" ? Me.aggregateValue : T[Me.aggregateValue] || no[Me.aggregateValue];
                                                        if (!Bo) throw console.info({column: Me}), new Error("React Table: Invalid column.aggregateValue option for column listed above");
                                                        Sn = Bo(Sn, xt, Me)
                                                    }
                                                    return Sn
                                                });
                                                St[Me.id] = Eo(Iu, xu)
                                            } else {
                                                if (Me.aggregate) throw console.info({column: Me}), new Error("React Table: Invalid column.aggregate option for column listed above");
                                                St[Me.id] = null
                                            }
                                        }
                                    }), St
                                }(Do, wt, hr), Cu = {
                                    id: Ct,
                                    isGrouped: !0,
                                    groupByID: wn,
                                    groupByVal: Po,
                                    values: wu,
                                    subRows: Ro,
                                    leafRows: Do,
                                    depth: hr,
                                    index: yu
                                };
                            return Ro.forEach(function (or) {
                                ce.push(or), Be[or.id] = or, or.isGrouped ? (qe.push(or), Z[or.id] = or) : (Pe.push(or), Te[or.id] = or)
                            }), Cu
                        })
                    }(d);
                    return _e.forEach(function (Ge) {
                        ce.push(Ge), Be[Ge.id] = Ge, Ge.isGrouped ? (qe.push(Ge), Z[Ge.id] = Ge) : (Pe.push(Ge), Te[Ge.id] = Ge)
                    }), [_e, ce, Be, qe, Z, Pe, Te]
                }, [R, E, d, v, y, h, T, I]), ue = te[0], Q = te[1], re = te[2], ge = te[3], ae = te[4], ve = te[5],
                de = te[6], ye = O(z);
            k(function () {
                ye() && N({type: u.resetGroupBy})
            }, [N, R ? null : c]), Object.assign(a, {
                preGroupedRows: d,
                preGroupedFlatRow: v,
                preGroupedRowsById: y,
                groupedRows: ue,
                groupedFlatRows: Q,
                groupedRowsById: re,
                onlyGroupedFlatRows: ge,
                onlyGroupedRowsById: ae,
                nonGroupedFlatRows: ve,
                nonGroupedRowsById: de,
                rows: ue,
                flatRows: Q,
                rowsById: re,
                toggleGroupBy: oe,
                setGroupBy: q
            })
        }

        function Os(a) {
            a.allCells.forEach(function (c) {
                var d;
                c.isGrouped = c.column.isGrouped && c.column.id === a.groupByID, c.isPlaceholder = !c.isGrouped && c.column.isGrouped, c.isAggregated = !c.isGrouped && !c.isPlaceholder && ((d = a.subRows) == null ? void 0 : d.length)
            })
        }

        function oo(a, c) {
            return a.reduce(function (d, v, y) {
                var h = "" + v.values[c];
                return d[h] = Array.isArray(d[h]) ? d[h] : [], d[h].push(v), d
            }, {})
        }

        var io = /([0-9]+)/gm;

        function vn(a, c) {
            return a === c ? 0 : a > c ? 1 : -1
        }

        function _r(a, c, d) {
            return [a.values[d], c.values[d]]
        }

        function lo(a) {
            return typeof a == "number" ? isNaN(a) || a === 1 / 0 || a === -1 / 0 ? "" : String(a) : typeof a == "string" ? a : ""
        }

        var As = Object.freeze({
            __proto__: null, alphanumeric: function (a, c, d) {
                var v = _r(a, c, d), y = v[0], h = v[1];
                for (y = lo(y), h = lo(h), y = y.split(io).filter(Boolean), h = h.split(io).filter(Boolean); y.length && h.length;) {
                    var w = y.shift(), x = h.shift(), I = parseInt(w, 10), R = parseInt(x, 10), F = [I, R].sort();
                    if (isNaN(F[0])) {
                        if (w > x) return 1;
                        if (x > w) return -1
                    } else {
                        if (isNaN(F[1])) return isNaN(I) ? -1 : 1;
                        if (I > R) return 1;
                        if (R > I) return -1
                    }
                }
                return y.length - h.length
            }, datetime: function (a, c, d) {
                var v = _r(a, c, d), y = v[0], h = v[1];
                return vn(y = y.getTime(), h = h.getTime())
            }, basic: function (a, c, d) {
                var v = _r(a, c, d);
                return vn(v[0], v[1])
            }, string: function (a, c, d) {
                var v = _r(a, c, d), y = v[0], h = v[1];
                for (y = y.split("").filter(Boolean), h = h.split("").filter(Boolean); y.length && h.length;) {
                    var w = y.shift(), x = h.shift(), I = w.toLowerCase(), R = x.toLowerCase();
                    if (I > R) return 1;
                    if (R > I) return -1;
                    if (w > x) return 1;
                    if (x > w) return -1
                }
                return y.length - h.length
            }, number: function (a, c, d) {
                var v = _r(a, c, d), y = v[0], h = v[1], w = /[^0-9.]/gi;
                return vn(y = Number(String(y).replace(w, "")), h = Number(String(h).replace(w, "")))
            }
        });
        u.resetSortBy = "resetSortBy", u.setSortBy = "setSortBy", u.toggleSortBy = "toggleSortBy", u.clearSortBy = "clearSortBy", p.sortType = "alphanumeric", p.sortDescFirst = !1;
        var so = function (a) {
            a.getSortByToggleProps = [Ts], a.stateReducers.push(Ms), a.useInstance.push(Ns)
        };
        so.pluginName = "useSortBy";
        var Ts = function (a, c) {
            var d = c.instance, v = c.column, y = d.isMultiSortEvent, h = y === void 0 ? function (w) {
                return w.shiftKey
            } : y;
            return [a, {
                onClick: v.canSort ? function (w) {
                    w.persist(), v.toggleSortBy(void 0, !d.disableMultiSort && h(w))
                } : void 0, style: {cursor: v.canSort ? "pointer" : void 0}, title: v.canSort ? "Toggle SortBy" : void 0
            }]
        };

        function Ms(a, c, d, v) {
            if (c.type === u.init) return l({sortBy: []}, a);
            if (c.type === u.resetSortBy) return l({}, a, {sortBy: v.initialState.sortBy || []});
            if (c.type === u.clearSortBy) return l({}, a, {
                sortBy: a.sortBy.filter(function (L) {
                    return L.id !== c.columnId
                })
            });
            if (c.type === u.setSortBy) return l({}, a, {sortBy: c.sortBy});
            if (c.type === u.toggleSortBy) {
                var y, h = c.columnId, w = c.desc, x = c.multi, I = v.allColumns, R = v.disableMultiSort,
                    F = v.disableSortRemove, T = v.disableMultiRemove, M = v.maxMultiSortColCount,
                    E = M === void 0 ? Number.MAX_SAFE_INTEGER : M, N = a.sortBy, $ = I.find(function (L) {
                        return L.id === h
                    }).sortDescFirst, z = N.find(function (L) {
                        return L.id === h
                    }), X = N.findIndex(function (L) {
                        return L.id === h
                    }), ie = w != null, _ = [];
                return (y = !R && x ? z ? "toggle" : "add" : X !== N.length - 1 || N.length !== 1 ? "replace" : z ? "toggle" : "replace") != "toggle" || F || ie || x && T || !(z && z.desc && !$ || !z.desc && $) || (y = "remove"), y === "replace" ? _ = [{
                    id: h,
                    desc: ie ? w : $
                }] : y === "add" ? (_ = [].concat(N, [{
                    id: h,
                    desc: ie ? w : $
                }])).splice(0, _.length - E) : y === "toggle" ? _ = N.map(function (L) {
                    return L.id === h ? l({}, L, {desc: ie ? w : !z.desc}) : L
                }) : y === "remove" && (_ = N.filter(function (L) {
                    return L.id !== h
                })), l({}, a, {sortBy: _})
            }
        }

        function Ns(a) {
            var c = a.data, d = a.rows, v = a.flatRows, y = a.allColumns, h = a.orderByFn, w = h === void 0 ? uo : h,
                x = a.sortTypes, I = a.manualSortBy, R = a.defaultCanSort, F = a.disableSortBy, T = a.flatHeaders,
                M = a.state.sortBy, E = a.dispatch, N = a.plugins, $ = a.getHooks, z = a.autoResetSortBy,
                X = z === void 0 || z;
            D(N, ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"], "useSortBy");
            var ie = n.useCallback(function (Q) {
                E({type: u.setSortBy, sortBy: Q})
            }, [E]), _ = n.useCallback(function (Q, re, ge) {
                E({type: u.toggleSortBy, columnId: Q, desc: re, multi: ge})
            }, [E]), L = O(a);
            T.forEach(function (Q) {
                var re = Q.accessor, ge = Q.canSort, ae = Q.disableSortBy, ve = Q.id,
                    de = re ? V(ae !== !0 && void 0, F !== !0 && void 0, !0) : V(R, ge, !1);
                Q.canSort = de, Q.canSort && (Q.toggleSortBy = function (K, ce) {
                    return _(Q.id, K, ce)
                }, Q.clearSortBy = function () {
                    E({type: u.clearSortBy, columnId: Q.id})
                }), Q.getSortByToggleProps = C($().getSortByToggleProps, {instance: L(), column: Q});
                var ye = M.find(function (K) {
                    return K.id === ve
                });
                Q.isSorted = !!ye, Q.sortedIndex = M.findIndex(function (K) {
                    return K.id === ve
                }), Q.isSortedDesc = Q.isSorted ? ye.desc : void 0
            });
            var oe = n.useMemo(function () {
                if (I || !M.length) return [d, v];
                var Q = [], re = M.filter(function (ge) {
                    return y.find(function (ae) {
                        return ae.id === ge.id
                    })
                });
                return [function ge(ae) {
                    var ve = w(ae, re.map(function (de) {
                        var ye = y.find(function (Be) {
                            return Be.id === de.id
                        });
                        if (!ye) throw new Error("React-Table: Could not find a column with id: " + de.id + " while sorting");
                        var K = ye.sortType, ce = se(K) || (x || {})[K] || As[K];
                        if (!ce) throw new Error("React-Table: Could not find a valid sortType of '" + K + "' for column '" + de.id + "'.");
                        return function (Be, qe) {
                            return ce(Be, qe, de.id, de.desc)
                        }
                    }), re.map(function (de) {
                        var ye = y.find(function (K) {
                            return K.id === de.id
                        });
                        return ye && ye.sortInverted ? de.desc : !de.desc
                    }));
                    return ve.forEach(function (de) {
                        Q.push(de), de.subRows && de.subRows.length !== 0 && (de.subRows = ge(de.subRows))
                    }), ve
                }(d), Q]
            }, [I, M, d, v, y, w, x]), q = oe[0], te = oe[1], ue = O(X);
            k(function () {
                ue() && E({type: u.resetSortBy})
            }, [I ? null : c]), Object.assign(a, {
                preSortedRows: d,
                preSortedFlatRows: v,
                sortedRows: q,
                sortedFlatRows: te,
                rows: q,
                flatRows: te,
                setSortBy: ie,
                toggleSortBy: _
            })
        }

        function uo(a, c, d) {
            return [].concat(a).sort(function (v, y) {
                for (var h = 0; h < c.length; h += 1) {
                    var w = c[h], x = d[h] === !1 || d[h] === "desc", I = w(v, y);
                    if (I !== 0) return x ? -I : I
                }
                return d[0] ? v.index - y.index : y.index - v.index
            })
        }

        u.resetPage = "resetPage", u.gotoPage = "gotoPage", u.setPageSize = "setPageSize";
        var co = function (a) {
            a.stateReducers.push(Fs), a.useInstance.push(Ls)
        };

        function Fs(a, c, d, v) {
            if (c.type === u.init) return l({pageSize: 10, pageIndex: 0}, a);
            if (c.type === u.resetPage) return l({}, a, {pageIndex: v.initialState.pageIndex || 0});
            if (c.type === u.gotoPage) {
                var y = v.pageCount, h = v.page, w = B(c.pageIndex, a.pageIndex), x = !1;
                return w > a.pageIndex ? x = y === -1 ? h.length >= a.pageSize : w < y : w < a.pageIndex && (x = w > -1), x ? l({}, a, {pageIndex: w}) : a
            }
            if (c.type === u.setPageSize) {
                var I = c.pageSize, R = a.pageSize * a.pageIndex;
                return l({}, a, {pageIndex: Math.floor(R / I), pageSize: I})
            }
        }

        function Ls(a) {
            var c = a.rows, d = a.autoResetPage, v = d === void 0 || d, y = a.manualExpandedKey,
                h = y === void 0 ? "expanded" : y, w = a.plugins, x = a.pageCount, I = a.paginateExpandedRows,
                R = I === void 0 || I, F = a.expandSubRows, T = F === void 0 || F, M = a.state, E = M.pageSize,
                N = M.pageIndex, $ = M.expanded, z = M.globalFilter, X = M.filters, ie = M.groupBy, _ = M.sortBy,
                L = a.dispatch, oe = a.data, q = a.manualPagination;
            D(w, ["useGlobalFilter", "useFilters", "useGroupBy", "useSortBy", "useExpanded"], "usePagination");
            var te = O(v);
            k(function () {
                te() && L({type: u.resetPage})
            }, [L, q ? null : oe, z, X, ie, _]);
            var ue = q ? x : Math.ceil(c.length / E), Q = n.useMemo(function () {
                    return ue > 0 ? [].concat(new Array(ue)).fill(null).map(function (ce, Be) {
                        return Be
                    }) : []
                }, [ue]), re = n.useMemo(function () {
                    var ce;
                    if (q) ce = c; else {
                        var Be = E * N, qe = Be + E;
                        ce = c.slice(Be, qe)
                    }
                    return R ? ce : Se(ce, {manualExpandedKey: h, expanded: $, expandSubRows: T})
                }, [T, $, h, q, N, E, R, c]), ge = N > 0, ae = ue === -1 ? re.length >= E : N < ue - 1,
                ve = n.useCallback(function (ce) {
                    L({type: u.gotoPage, pageIndex: ce})
                }, [L]), de = n.useCallback(function () {
                    return ve(function (ce) {
                        return ce - 1
                    })
                }, [ve]), ye = n.useCallback(function () {
                    return ve(function (ce) {
                        return ce + 1
                    })
                }, [ve]), K = n.useCallback(function (ce) {
                    L({type: u.setPageSize, pageSize: ce})
                }, [L]);
            Object.assign(a, {
                pageOptions: Q,
                pageCount: ue,
                page: re,
                canPreviousPage: ge,
                canNextPage: ae,
                gotoPage: ve,
                previousPage: de,
                nextPage: ye,
                setPageSize: K
            })
        }

        co.pluginName = "usePagination", u.resetPivot = "resetPivot", u.togglePivot = "togglePivot";
        var fo = function (a) {
            a.getPivotToggleProps = [Ws], a.stateReducers.push(Gs), a.useInstanceAfterData.push(ks), a.allColumns.push($s), a.accessValue.push(Hs), a.materializedColumns.push(zs), a.materializedColumnsDeps.push(js), a.visibleColumns.push(Vs), a.visibleColumnsDeps.push(Us), a.useInstance.push(qs), a.prepareRow.push(_s)
        };
        fo.pluginName = "usePivotColumns";
        var po = [], Ws = function (a, c) {
            var d = c.header;
            return [a, {
                onClick: d.canPivot ? function (v) {
                    v.persist(), d.togglePivot()
                } : void 0, style: {cursor: d.canPivot ? "pointer" : void 0}, title: "Toggle Pivot"
            }]
        };

        function Gs(a, c, d, v) {
            if (c.type === u.init) return l({pivotColumns: po}, a);
            if (c.type === u.resetPivot) return l({}, a, {pivotColumns: v.initialState.pivotColumns || po});
            if (c.type === u.togglePivot) {
                var y = c.columnId, h = c.value, w = h !== void 0 ? h : !a.pivotColumns.includes(y);
                return l({}, a, w ? {pivotColumns: [].concat(a.pivotColumns, [y])} : {
                    pivotColumns: a.pivotColumns.filter(function (x) {
                        return x !== y
                    })
                })
            }
        }

        function ks(a) {
            a.allColumns.forEach(function (c) {
                c.isPivotSource = a.state.pivotColumns.includes(c.id)
            })
        }

        function $s(a, c) {
            var d = c.instance;
            return a.forEach(function (v) {
                v.isPivotSource = d.state.pivotColumns.includes(v.id), v.uniqueValues = new Set
            }), a
        }

        function Hs(a, c) {
            var d = c.column;
            return d.uniqueValues && a !== void 0 && d.uniqueValues.add(a), a
        }

        function zs(a, c) {
            var d = c.instance, v = d.allColumns, y = d.state;
            if (!y.pivotColumns.length || !y.groupBy || !y.groupBy.length) return a;
            var h = y.pivotColumns.map(function (I) {
                return v.find(function (R) {
                    return R.id === I
                })
            }).filter(Boolean), w = v.filter(function (I) {
                return !I.isPivotSource && !y.groupBy.includes(I.id) && !y.pivotColumns.includes(I.id)
            }), x = le(function I(R, F, T) {
                R === void 0 && (R = 0), T === void 0 && (T = []);
                var M = h[R];
                return M ? Array.from(M.uniqueValues).sort().map(function (E) {
                    var N = l({}, M, {
                        Header: M.PivotHeader || typeof M.header == "string" ? M.Header + ": " + E : E,
                        isPivotGroup: !0,
                        parent: F,
                        depth: R,
                        id: F ? F.id + "." + M.id + "." + E : M.id + "." + E,
                        pivotValue: E
                    });
                    return N.columns = I(R + 1, N, [].concat(T, [function ($) {
                        return $.values[M.id] === E
                    }])), N
                }) : w.map(function (E) {
                    return l({}, E, {
                        canPivot: !1,
                        isPivoted: !0,
                        parent: F,
                        depth: R,
                        id: "" + (F ? F.id + "." + E.id : E.id),
                        accessor: function (N, $, z) {
                            if (T.every(function (X) {
                                return X(z)
                            })) return z.values[E.id]
                        }
                    })
                })
            }());
            return [].concat(a, x)
        }

        function js(a, c) {
            var d = c.instance.state, v = d.pivotColumns, y = d.groupBy;
            return [].concat(a, [v, y])
        }

        function Vs(a, c) {
            var d = c.instance.state;
            return a = a.filter(function (v) {
                return !v.isPivotSource
            }), d.pivotColumns.length && d.groupBy && d.groupBy.length && (a = a.filter(function (v) {
                return v.isGrouped || v.isPivoted
            })), a
        }

        function Us(a, c) {
            var d = c.instance;
            return [].concat(a, [d.state.pivotColumns, d.state.groupBy])
        }

        function qs(a) {
            var c = a.columns, d = a.allColumns, v = a.flatHeaders, y = a.getHooks, h = a.plugins, w = a.dispatch,
                x = a.autoResetPivot, I = x === void 0 || x, R = a.manaulPivot, F = a.disablePivot,
                T = a.defaultCanPivot;
            D(h, ["useGroupBy"], "usePivotColumns");
            var M = O(a);
            d.forEach(function (N) {
                var $ = N.accessor, z = N.defaultPivot, X = N.disablePivot;
                N.canPivot = $ ? V(N.canPivot, X !== !0 && void 0, F !== !0 && void 0, !0) : V(N.canPivot, z, T, !1), N.canPivot && (N.togglePivot = function () {
                    return a.togglePivot(N.id)
                }), N.Aggregated = N.Aggregated || N.Cell
            }), v.forEach(function (N) {
                N.getPivotToggleProps = C(y().getPivotToggleProps, {instance: M(), header: N})
            });
            var E = O(I);
            k(function () {
                E() && w({type: u.resetPivot})
            }, [w, R ? null : c]), Object.assign(a, {
                togglePivot: function (N, $) {
                    w({type: u.togglePivot, columnId: N, value: $})
                }
            })
        }

        function _s(a) {
            a.allCells.forEach(function (c) {
                c.isPivoted = c.column.isPivoted
            })
        }

        u.resetSelectedRows = "resetSelectedRows", u.toggleAllRowsSelected = "toggleAllRowsSelected", u.toggleRowSelected = "toggleRowSelected", u.toggleAllPageRowsSelected = "toggleAllPageRowsSelected";
        var vo = function (a) {
            a.getToggleRowSelectedProps = [Xs], a.getToggleAllRowsSelectedProps = [Ks], a.getToggleAllPageRowsSelectedProps = [Ys], a.stateReducers.push(Js), a.useInstance.push(Qs), a.prepareRow.push(Zs)
        };
        vo.pluginName = "useRowSelect";
        var Xs = function (a, c) {
            var d = c.instance, v = c.row, y = d.manualRowSelectedKey, h = y === void 0 ? "isSelected" : y;
            return [a, {
                onChange: function (w) {
                    v.toggleRowSelected(w.target.checked)
                },
                style: {cursor: "pointer"},
                checked: !(!v.original || !v.original[h]) || v.isSelected,
                title: "Toggle Row Selected",
                indeterminate: v.isSomeSelected
            }]
        }, Ks = function (a, c) {
            var d = c.instance;
            return [a, {
                onChange: function (v) {
                    d.toggleAllRowsSelected(v.target.checked)
                },
                style: {cursor: "pointer"},
                checked: d.isAllRowsSelected,
                title: "Toggle All Rows Selected",
                indeterminate: Boolean(!d.isAllRowsSelected && Object.keys(d.state.selectedRowIds).length)
            }]
        }, Ys = function (a, c) {
            var d = c.instance;
            return [a, {
                onChange: function (v) {
                    d.toggleAllPageRowsSelected(v.target.checked)
                },
                style: {cursor: "pointer"},
                checked: d.isAllPageRowsSelected,
                title: "Toggle All Current Page Rows Selected",
                indeterminate: Boolean(!d.isAllPageRowsSelected && d.page.some(function (v) {
                    var y = v.id;
                    return d.state.selectedRowIds[y]
                }))
            }]
        };

        function Js(a, c, d, v) {
            if (c.type === u.init) return l({selectedRowIds: {}}, a);
            if (c.type === u.resetSelectedRows) return l({}, a, {selectedRowIds: v.initialState.selectedRowIds || {}});
            if (c.type === u.toggleAllRowsSelected) {
                var y = c.value, h = v.isAllRowsSelected, w = v.rowsById, x = v.nonGroupedRowsById,
                    I = x === void 0 ? w : x, R = y !== void 0 ? y : !h, F = Object.assign({}, a.selectedRowIds);
                return R ? Object.keys(I).forEach(function (ve) {
                    F[ve] = !0
                }) : Object.keys(I).forEach(function (ve) {
                    delete F[ve]
                }), l({}, a, {selectedRowIds: F})
            }
            if (c.type === u.toggleRowSelected) {
                var T = c.id, M = c.value, E = v.rowsById, N = v.selectSubRows, $ = N === void 0 || N, z = v.getSubRows,
                    X = a.selectedRowIds[T], ie = M !== void 0 ? M : !X;
                if (X === ie) return a;
                var _ = l({}, a.selectedRowIds);
                return function ve(de) {
                    var ye = E[de];
                    if (ye && (ye.isGrouped || (ie ? _[de] = !0 : delete _[de]), $ && z(ye))) return z(ye).forEach(function (K) {
                        return ve(K.id)
                    })
                }(T), l({}, a, {selectedRowIds: _})
            }
            if (c.type === u.toggleAllPageRowsSelected) {
                var L = c.value, oe = v.page, q = v.rowsById, te = v.selectSubRows, ue = te === void 0 || te,
                    Q = v.isAllPageRowsSelected, re = v.getSubRows, ge = L !== void 0 ? L : !Q,
                    ae = l({}, a.selectedRowIds);
                return oe.forEach(function (ve) {
                    return function de(ye) {
                        var K = q[ye];
                        if (K.isGrouped || (ge ? ae[ye] = !0 : delete ae[ye]), ue && re(K)) return re(K).forEach(function (ce) {
                            return de(ce.id)
                        })
                    }(ve.id)
                }), l({}, a, {selectedRowIds: ae})
            }
            return a
        }

        function Qs(a) {
            var c = a.data, d = a.rows, v = a.getHooks, y = a.plugins, h = a.rowsById, w = a.nonGroupedRowsById,
                x = w === void 0 ? h : w, I = a.autoResetSelectedRows, R = I === void 0 || I,
                F = a.state.selectedRowIds, T = a.selectSubRows, M = T === void 0 || T, E = a.dispatch, N = a.page,
                $ = a.getSubRows;
            D(y, ["useFilters", "useGroupBy", "useSortBy", "useExpanded", "usePagination"], "useRowSelect");
            var z = n.useMemo(function () {
                var re = [];
                return d.forEach(function (ge) {
                    var ae = M ? function ve(de, ye, K) {
                        if (ye[de.id]) return !0;
                        var ce = K(de);
                        if (ce && ce.length) {
                            var Be = !0, qe = !1;
                            return ce.forEach(function (Z) {
                                qe && !Be || (ve(Z, ye, K) ? qe = !0 : Be = !1)
                            }), !!Be || !!qe && null
                        }
                        return !1
                    }(ge, F, $) : !!F[ge.id];
                    ge.isSelected = !!ae, ge.isSomeSelected = ae === null, ae && re.push(ge)
                }), re
            }, [d, M, F, $]), X = Boolean(Object.keys(x).length && Object.keys(F).length), ie = X;
            X && Object.keys(x).some(function (re) {
                return !F[re]
            }) && (X = !1), X || N && N.length && N.some(function (re) {
                var ge = re.id;
                return !F[ge]
            }) && (ie = !1);
            var _ = O(R);
            k(function () {
                _() && E({type: u.resetSelectedRows})
            }, [E, c]);
            var L = n.useCallback(function (re) {
                    return E({type: u.toggleAllRowsSelected, value: re})
                }, [E]), oe = n.useCallback(function (re) {
                    return E({type: u.toggleAllPageRowsSelected, value: re})
                }, [E]), q = n.useCallback(function (re, ge) {
                    return E({type: u.toggleRowSelected, id: re, value: ge})
                }, [E]), te = O(a), ue = C(v().getToggleAllRowsSelectedProps, {instance: te()}),
                Q = C(v().getToggleAllPageRowsSelectedProps, {instance: te()});
            Object.assign(a, {
                selectedFlatRows: z,
                isAllRowsSelected: X,
                isAllPageRowsSelected: ie,
                toggleRowSelected: q,
                toggleAllRowsSelected: L,
                getToggleAllRowsSelectedProps: ue,
                getToggleAllPageRowsSelectedProps: Q,
                toggleAllPageRowsSelected: oe
            })
        }

        function Zs(a, c) {
            var d = c.instance;
            a.toggleRowSelected = function (v) {
                return d.toggleRowSelected(a.id, v)
            }, a.getToggleRowSelectedProps = C(d.getHooks().getToggleRowSelectedProps, {instance: d, row: a})
        }

        var go = function (a) {
            return {}
        }, mo = function (a) {
            return {}
        };
        u.setRowState = "setRowState", u.setCellState = "setCellState", u.resetRowState = "resetRowState";
        var ho = function (a) {
            a.stateReducers.push(eu), a.useInstance.push(ru), a.prepareRow.push(tu)
        };

        function eu(a, c, d, v) {
            var y = v.initialRowStateAccessor, h = y === void 0 ? go : y, w = v.initialCellStateAccessor,
                x = w === void 0 ? mo : w, I = v.rowsById;
            if (c.type === u.init) return l({rowState: {}}, a);
            if (c.type === u.resetRowState) return l({}, a, {rowState: v.initialState.rowState || {}});
            if (c.type === u.setRowState) {
                var R, F = c.rowId, T = c.value, M = a.rowState[F] !== void 0 ? a.rowState[F] : h(I[F]);
                return l({}, a, {rowState: l({}, a.rowState, (R = {}, R[F] = B(T, M), R))})
            }
            if (c.type === u.setCellState) {
                var E, N, $, z, X, ie = c.rowId, _ = c.columnId, L = c.value,
                    oe = a.rowState[ie] !== void 0 ? a.rowState[ie] : h(I[ie]),
                    q = (oe == null || (E = oe.cellState) == null ? void 0 : E[_]) !== void 0 ? oe.cellState[_] : x((N = I[ie]) == null || ($ = N.cells) == null ? void 0 : $.find(function (te) {
                        return te.column.id === _
                    }));
                return l({}, a, {rowState: l({}, a.rowState, (X = {}, X[ie] = l({}, oe, {cellState: l({}, oe.cellState || {}, (z = {}, z[_] = B(L, q), z))}), X))})
            }
        }

        function ru(a) {
            var c = a.autoResetRowState, d = c === void 0 || c, v = a.data, y = a.dispatch,
                h = n.useCallback(function (I, R) {
                    return y({type: u.setRowState, rowId: I, value: R})
                }, [y]), w = n.useCallback(function (I, R, F) {
                    return y({type: u.setCellState, rowId: I, columnId: R, value: F})
                }, [y]), x = O(d);
            k(function () {
                x() && y({type: u.resetRowState})
            }, [v]), Object.assign(a, {setRowState: h, setCellState: w})
        }

        function tu(a, c) {
            var d = c.instance, v = d.initialRowStateAccessor, y = v === void 0 ? go : v,
                h = d.initialCellStateAccessor, w = h === void 0 ? mo : h, x = d.state.rowState;
            a && (a.state = x[a.id] !== void 0 ? x[a.id] : y(a), a.setState = function (I) {
                return d.setRowState(a.id, I)
            }, a.cells.forEach(function (I) {
                a.state.cellState || (a.state.cellState = {}), I.state = a.state.cellState[I.column.id] !== void 0 ? a.state.cellState[I.column.id] : w(I), I.setState = function (R) {
                    return d.setCellState(a.id, I.column.id, R)
                }
            }))
        }

        ho.pluginName = "useRowState", u.resetColumnOrder = "resetColumnOrder", u.setColumnOrder = "setColumnOrder";
        var bo = function (a) {
            a.stateReducers.push(nu), a.visibleColumnsDeps.push(function (c, d) {
                var v = d.instance;
                return [].concat(c, [v.state.columnOrder])
            }), a.visibleColumns.push(au), a.useInstance.push(ou)
        };

        function nu(a, c, d, v) {
            return c.type === u.init ? l({columnOrder: []}, a) : c.type === u.resetColumnOrder ? l({}, a, {columnOrder: v.initialState.columnOrder || []}) : c.type === u.setColumnOrder ? l({}, a, {columnOrder: B(c.columnOrder, a.columnOrder)}) : void 0
        }

        function au(a, c) {
            var d = c.instance.state.columnOrder;
            if (!d || !d.length) return a;
            for (var v = [].concat(d), y = [].concat(a), h = [], w = function () {
                var x = v.shift(), I = y.findIndex(function (R) {
                    return R.id === x
                });
                I > -1 && h.push(y.splice(I, 1)[0])
            }; y.length && v.length;) w();
            return [].concat(h, y)
        }

        function ou(a) {
            var c = a.dispatch;
            a.setColumnOrder = n.useCallback(function (d) {
                return c({type: u.setColumnOrder, columnOrder: d})
            }, [c])
        }

        bo.pluginName = "useColumnOrder", p.canResize = !0, u.columnStartResizing = "columnStartResizing", u.columnResizing = "columnResizing", u.columnDoneResizing = "columnDoneResizing", u.resetResize = "resetResize";
        var yo = function (a) {
            a.getResizerProps = [iu], a.getHeaderProps.push({style: {position: "relative"}}), a.stateReducers.push(lu), a.useInstance.push(uu), a.useInstanceBeforeDimensions.push(su)
        }, iu = function (a, c) {
            var d = c.instance, v = c.header, y = d.dispatch, h = function (w, x) {
                var I = !1;
                if (w.type === "touchstart") {
                    if (w.touches && w.touches.length > 1) return;
                    I = !0
                }
                var R, F, T = function (_) {
                    var L = [];
                    return function oe(q) {
                        q.columns && q.columns.length && q.columns.map(oe), L.push(q)
                    }(_), L
                }(x).map(function (_) {
                    return [_.id, _.totalWidth]
                }), M = I ? Math.round(w.touches[0].clientX) : w.clientX, E = function () {
                    window.cancelAnimationFrame(R), R = null, y({type: u.columnDoneResizing})
                }, N = function () {
                    window.cancelAnimationFrame(R), R = null, y({type: u.columnResizing, clientX: F})
                }, $ = function (_) {
                    F = _, R || (R = window.requestAnimationFrame(N))
                }, z = {
                    mouse: {
                        moveEvent: "mousemove", moveHandler: function (_) {
                            return $(_.clientX)
                        }, upEvent: "mouseup", upHandler: function (_) {
                            document.removeEventListener("mousemove", z.mouse.moveHandler), document.removeEventListener("mouseup", z.mouse.upHandler), E()
                        }
                    }, touch: {
                        moveEvent: "touchmove", moveHandler: function (_) {
                            return _.cancelable && (_.preventDefault(), _.stopPropagation()), $(_.touches[0].clientX), !1
                        }, upEvent: "touchend", upHandler: function (_) {
                            document.removeEventListener(z.touch.moveEvent, z.touch.moveHandler), document.removeEventListener(z.touch.upEvent, z.touch.moveHandler), E()
                        }
                    }
                }, X = I ? z.touch : z.mouse, ie = !!function () {
                    if (typeof Oe == "boolean") return Oe;
                    var _ = !1;
                    try {
                        var L = {
                            get passive() {
                                return _ = !0, !1
                            }
                        };
                        window.addEventListener("test", null, L), window.removeEventListener("test", null, L)
                    } catch {
                        _ = !1
                    }
                    return Oe = _
                }() && {passive: !1};
                document.addEventListener(X.moveEvent, X.moveHandler, ie), document.addEventListener(X.upEvent, X.upHandler, ie), y({
                    type: u.columnStartResizing,
                    columnId: x.id,
                    columnWidth: x.totalWidth,
                    headerIdWidths: T,
                    clientX: M
                })
            };
            return [a, {
                onMouseDown: function (w) {
                    return w.persist() || h(w, v)
                }, onTouchStart: function (w) {
                    return w.persist() || h(w, v)
                }, style: {cursor: "col-resize"}, draggable: !1, role: "separator"
            }]
        };

        function lu(a, c) {
            if (c.type === u.init) return l({columnResizing: {columnWidths: {}}}, a);
            if (c.type === u.resetResize) return l({}, a, {columnResizing: {columnWidths: {}}});
            if (c.type === u.columnStartResizing) {
                var d = c.clientX, v = c.columnId, y = c.columnWidth, h = c.headerIdWidths;
                return l({}, a, {
                    columnResizing: l({}, a.columnResizing, {
                        startX: d,
                        headerIdWidths: h,
                        columnWidth: y,
                        isResizingColumn: v
                    })
                })
            }
            if (c.type === u.columnResizing) {
                var w = c.clientX, x = a.columnResizing, I = x.startX, R = x.columnWidth, F = x.headerIdWidths,
                    T = (w - I) / R, M = {};
                return (F === void 0 ? [] : F).forEach(function (E) {
                    var N = E[0], $ = E[1];
                    M[N] = Math.max($ + $ * T, 0)
                }), l({}, a, {columnResizing: l({}, a.columnResizing, {columnWidths: l({}, a.columnResizing.columnWidths, {}, M)})})
            }
            return c.type === u.columnDoneResizing ? l({}, a, {
                columnResizing: l({}, a.columnResizing, {
                    startX: null,
                    isResizingColumn: null
                })
            }) : void 0
        }

        yo.pluginName = "useResizeColumns";
        var su = function (a) {
            var c = a.flatHeaders, d = a.disableResizing, v = a.getHooks, y = a.state.columnResizing, h = O(a);
            c.forEach(function (w) {
                var x = V(w.disableResizing !== !0 && void 0, d !== !0 && void 0, !0);
                w.canResize = x, w.width = y.columnWidths[w.id] || w.originalWidth || w.width, w.isResizing = y.isResizingColumn === w.id, x && (w.getResizerProps = C(v().getResizerProps, {
                    instance: h(),
                    header: w
                }))
            })
        };

        function uu(a) {
            var c = a.plugins, d = a.dispatch, v = a.autoResetResize, y = v === void 0 || v, h = a.columns;
            D(c, ["useAbsoluteLayout"], "useResizeColumns");
            var w = O(y);
            k(function () {
                w() && d({type: u.resetResize})
            }, [h]);
            var x = n.useCallback(function () {
                return d({type: u.resetResize})
            }, [d]);
            Object.assign(a, {resetResizing: x})
        }

        var gn = {position: "absolute", top: 0}, wo = function (a) {
            a.getTableBodyProps.push(bt), a.getRowProps.push(bt), a.getHeaderGroupProps.push(bt), a.getFooterGroupProps.push(bt), a.getHeaderProps.push(function (c, d) {
                var v = d.column;
                return [c, {style: l({}, gn, {left: v.totalLeft + "px", width: v.totalWidth + "px"})}]
            }), a.getCellProps.push(function (c, d) {
                var v = d.cell;
                return [c, {style: l({}, gn, {left: v.column.totalLeft + "px", width: v.column.totalWidth + "px"})}]
            }), a.getFooterProps.push(function (c, d) {
                var v = d.column;
                return [c, {style: l({}, gn, {left: v.totalLeft + "px", width: v.totalWidth + "px"})}]
            })
        };
        wo.pluginName = "useAbsoluteLayout";
        var bt = function (a, c) {
            return [a, {style: {position: "relative", width: c.instance.totalColumnsWidth + "px"}}]
        }, mn = {display: "inline-block", boxSizing: "border-box"}, hn = function (a, c) {
            return [a, {style: {display: "flex", width: c.instance.totalColumnsWidth + "px"}}]
        }, Co = function (a) {
            a.getRowProps.push(hn), a.getHeaderGroupProps.push(hn), a.getFooterGroupProps.push(hn), a.getHeaderProps.push(function (c, d) {
                var v = d.column;
                return [c, {style: l({}, mn, {width: v.totalWidth + "px"})}]
            }), a.getCellProps.push(function (c, d) {
                var v = d.cell;
                return [c, {style: l({}, mn, {width: v.column.totalWidth + "px"})}]
            }), a.getFooterProps.push(function (c, d) {
                var v = d.column;
                return [c, {style: l({}, mn, {width: v.totalWidth + "px"})}]
            })
        };

        function So(a) {
            a.getTableProps.push(cu), a.getRowProps.push(bn), a.getHeaderGroupProps.push(bn), a.getFooterGroupProps.push(bn), a.getHeaderProps.push(du), a.getCellProps.push(fu), a.getFooterProps.push(pu)
        }

        Co.pluginName = "useBlockLayout", So.pluginName = "useFlexLayout";
        var cu = function (a, c) {
            return [a, {style: {minWidth: c.instance.totalColumnsMinWidth + "px"}}]
        }, bn = function (a, c) {
            return [a, {style: {display: "flex", flex: "1 0 auto", minWidth: c.instance.totalColumnsMinWidth + "px"}}]
        }, du = function (a, c) {
            var d = c.column;
            return [a, {
                style: {
                    boxSizing: "border-box",
                    flex: d.totalFlexWidth ? d.totalFlexWidth + " 0 auto" : void 0,
                    minWidth: d.totalMinWidth + "px",
                    width: d.totalWidth + "px"
                }
            }]
        }, fu = function (a, c) {
            var d = c.cell;
            return [a, {
                style: {
                    boxSizing: "border-box",
                    flex: d.column.totalFlexWidth + " 0 auto",
                    minWidth: d.column.totalMinWidth + "px",
                    width: d.column.totalWidth + "px"
                }
            }]
        }, pu = function (a, c) {
            var d = c.column;
            return [a, {
                style: {
                    boxSizing: "border-box",
                    flex: d.totalFlexWidth ? d.totalFlexWidth + " 0 auto" : void 0,
                    minWidth: d.totalMinWidth + "px",
                    width: d.totalWidth + "px"
                }
            }]
        };

        function xo(a) {
            a.stateReducers.push(hu), a.getTableProps.push(vu), a.getHeaderProps.push(gu), a.getRowProps.push(mu)
        }

        u.columnStartResizing = "columnStartResizing", u.columnResizing = "columnResizing", u.columnDoneResizing = "columnDoneResizing", u.resetResize = "resetResize", xo.pluginName = "useGridLayout";
        var vu = function (a, c) {
            var d = c.instance;
            return [a, {
                style: {
                    display: "grid", gridTemplateColumns: d.visibleColumns.map(function (v) {
                        var y;
                        return d.state.gridLayout.columnWidths[v.id] ? d.state.gridLayout.columnWidths[v.id] + "px" : (y = d.state.columnResizing) != null && y.isResizingColumn ? d.state.gridLayout.startWidths[v.id] + "px" : typeof v.width == "number" ? v.width + "px" : v.width
                    }).join(" ")
                }
            }]
        }, gu = function (a, c) {
            var d = c.column;
            return [a, {
                id: "header-cell-" + d.id,
                style: {position: "sticky", gridColumn: "span " + d.totalVisibleHeaderCount}
            }]
        }, mu = function (a, c) {
            var d = c.row;
            return d.isExpanded ? [a, {style: {gridColumn: "1 / " + (d.cells.length + 1)}}] : [a, {}]
        };

        function hu(a, c, d, v) {
            if (c.type === u.init) return l({gridLayout: {columnWidths: {}}}, a);
            if (c.type === u.resetResize) return l({}, a, {gridLayout: {columnWidths: {}}});
            if (c.type === u.columnStartResizing) {
                var y = c.columnId, h = c.headerIdWidths, w = yn(y);
                if (w !== void 0) {
                    var x = v.visibleColumns.reduce(function (L, oe) {
                        var q;
                        return l({}, L, ((q = {})[oe.id] = yn(oe.id), q))
                    }, {}), I = v.visibleColumns.reduce(function (L, oe) {
                        var q;
                        return l({}, L, ((q = {})[oe.id] = oe.minWidth, q))
                    }, {}), R = v.visibleColumns.reduce(function (L, oe) {
                        var q;
                        return l({}, L, ((q = {})[oe.id] = oe.maxWidth, q))
                    }, {}), F = h.map(function (L) {
                        var oe = L[0];
                        return [oe, yn(oe)]
                    });
                    return l({}, a, {
                        gridLayout: l({}, a.gridLayout, {
                            startWidths: x,
                            minWidths: I,
                            maxWidths: R,
                            headerIdGridWidths: F,
                            columnWidth: w
                        })
                    })
                }
                return a
            }
            if (c.type === u.columnResizing) {
                var T = c.clientX, M = a.columnResizing.startX, E = a.gridLayout, N = E.columnWidth, $ = E.minWidths,
                    z = E.maxWidths, X = E.headerIdGridWidths, ie = (T - M) / N, _ = {};
                return (X === void 0 ? [] : X).forEach(function (L) {
                    var oe = L[0], q = L[1];
                    _[oe] = Math.min(Math.max($[oe], q + q * ie), z[oe])
                }), l({}, a, {gridLayout: l({}, a.gridLayout, {columnWidths: l({}, a.gridLayout.columnWidths, {}, _)})})
            }
            return c.type === u.columnDoneResizing ? l({}, a, {
                gridLayout: l({}, a.gridLayout, {
                    startWidths: {},
                    minWidths: {},
                    maxWidths: {}
                })
            }) : void 0
        }

        function yn(a) {
            var c, d = (c = document.getElementById("header-cell-" + a)) == null ? void 0 : c.offsetWidth;
            if (d !== void 0) return d
        }

        t._UNSTABLE_usePivotColumns = fo, t.actions = u, t.defaultColumn = p, t.defaultGroupByFn = oo, t.defaultOrderByFn = uo, t.defaultRenderer = m, t.emptyRenderer = g, t.ensurePluginOrder = D, t.flexRender = J, t.functionalUpdate = B, t.loopHooks = P, t.makePropGetter = C, t.makeRenderer = j, t.reduceHooks = S, t.safeUseLayoutEffect = A, t.useAbsoluteLayout = wo, t.useAsyncDebounce = function (a, c) {
            c === void 0 && (c = 0);
            var d = n.useRef({}), v = O(a), y = O(c);
            return n.useCallback(function () {
                var h = i(regeneratorRuntime.mark(function w() {
                    var x, I, R, F = arguments;
                    return regeneratorRuntime.wrap(function (T) {
                        for (; ;) switch (T.prev = T.next) {
                            case 0:
                                for (x = F.length, I = new Array(x), R = 0; R < x; R++) I[R] = F[R];
                                return d.current.promise || (d.current.promise = new Promise(function (M, E) {
                                    d.current.resolve = M, d.current.reject = E
                                })), d.current.timeout && clearTimeout(d.current.timeout), d.current.timeout = setTimeout(i(regeneratorRuntime.mark(function M() {
                                    return regeneratorRuntime.wrap(function (E) {
                                        for (; ;) switch (E.prev = E.next) {
                                            case 0:
                                                return delete d.current.timeout, E.prev = 1, E.t0 = d.current, E.next = 5, v().apply(void 0, I);
                                            case 5:
                                                E.t1 = E.sent, E.t0.resolve.call(E.t0, E.t1), E.next = 12;
                                                break;
                                            case 9:
                                                E.prev = 9, E.t2 = E.catch(1), d.current.reject(E.t2);
                                            case 12:
                                                return E.prev = 12, delete d.current.promise, E.finish(12);
                                            case 15:
                                            case"end":
                                                return E.stop()
                                        }
                                    }, M, null, [[1, 9, 12, 15]])
                                })), y()), T.abrupt("return", d.current.promise);
                            case 5:
                            case"end":
                                return T.stop()
                        }
                    }, w)
                }));
                return function () {
                    return h.apply(this, arguments)
                }
            }(), [v, y])
        }, t.useBlockLayout = Co, t.useColumnOrder = bo, t.useExpanded = ja, t.useFilters = eo, t.useFlexLayout = So, t.useGetLatest = O, t.useGlobalFilter = ro, t.useGridLayout = xo, t.useGroupBy = ao, t.useMountedLayoutEffect = k, t.usePagination = co, t.useResizeColumns = yo, t.useRowSelect = vo, t.useRowState = ho, t.useSortBy = so, t.useTable = function (a) {
            for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), v = 1; v < c; v++) d[v - 1] = arguments[v];
            a = Ha(a), d = [vr].concat(d);
            var y = n.useRef({}), h = O(y.current);
            Object.assign(h(), l({}, a, {plugins: d, hooks: Ue()})), d.filter(Boolean).forEach(function (Z) {
                Z(h().hooks)
            });
            var w = O(h().hooks);
            h().getHooks = w, delete h().hooks, Object.assign(h(), S(w().useOptions, Ha(a)));
            var x = h(), I = x.data, R = x.columns, F = x.initialState, T = x.defaultColumn, M = x.getSubRows,
                E = x.getRowId, N = x.stateReducer, $ = x.useControlledState, z = O(N),
                X = n.useCallback(function (Z, Pe) {
                    if (!Pe.type) throw console.info({action: Pe}), new Error("Unknown Action 👆");
                    return [].concat(w().stateReducers, Array.isArray(z()) ? z() : [z()]).reduce(function (Te, _e) {
                        return _e(Te, Pe, Z, h()) || Te
                    }, Z)
                }, [w, z, h]), ie = n.useReducer(X, void 0, function () {
                    return X(F, {type: u.init})
                }), _ = ie[0], L = ie[1], oe = S([].concat(w().useControlledState, [$]), _, {instance: h()});
            Object.assign(h(), {state: oe, dispatch: L});
            var q = n.useMemo(function () {
                return fe(S(w().columns, R, {instance: h()}))
            }, [w, h, R].concat(S(w().columnsDeps, [], {instance: h()})));
            h().columns = q;
            var te = n.useMemo(function () {
                return S(w().allColumns, le(q), {instance: h()}).map(be)
            }, [q, w, h].concat(S(w().allColumnsDeps, [], {instance: h()})));
            h().allColumns = te;
            var ue = n.useMemo(function () {
                for (var Z = [], Pe = [], Te = {}, _e = [].concat(te); _e.length;) {
                    var Ge = _e.shift();
                    ps({
                        data: I,
                        rows: Z,
                        flatRows: Pe,
                        rowsById: Te,
                        column: Ge,
                        getRowId: E,
                        getSubRows: M,
                        accessValueHooks: w().accessValue,
                        getInstance: h
                    })
                }
                return [Z, Pe, Te]
            }, [te, I, E, M, w, h]), Q = ue[0], re = ue[1], ge = ue[2];
            Object.assign(h(), {
                rows: Q,
                initialRows: [].concat(Q),
                flatRows: re,
                rowsById: ge
            }), P(w().useInstanceAfterData, h());
            var ae = n.useMemo(function () {
                return S(w().visibleColumns, te, {instance: h()}).map(function (Z) {
                    return pe(Z, T)
                })
            }, [w, te, h, T].concat(S(w().visibleColumnsDeps, [], {instance: h()})));
            te = n.useMemo(function () {
                var Z = [].concat(ae);
                return te.forEach(function (Pe) {
                    Z.find(function (Te) {
                        return Te.id === Pe.id
                    }) || Z.push(Pe)
                }), Z
            }, [te, ae]), h().allColumns = te;
            var ve = n.useMemo(function () {
                return S(w().headerGroups, Le(ae, T), h())
            }, [w, ae, T, h].concat(S(w().headerGroupsDeps, [], {instance: h()})));
            h().headerGroups = ve;
            var de = n.useMemo(function () {
                return ve.length ? ve[0].headers : []
            }, [ve]);
            h().headers = de, h().flatHeaders = ve.reduce(function (Z, Pe) {
                return [].concat(Z, Pe.headers)
            }, []), P(w().useInstanceBeforeDimensions, h());
            var ye = ae.filter(function (Z) {
                return Z.isVisible
            }).map(function (Z) {
                return Z.id
            }).sort().join("_");
            ae = n.useMemo(function () {
                return ae.filter(function (Z) {
                    return Z.isVisible
                })
            }, [ae, ye]), h().visibleColumns = ae;
            var K = za(de), ce = K[0], Be = K[1], qe = K[2];
            return h().totalColumnsMinWidth = ce, h().totalColumnsWidth = Be, h().totalColumnsMaxWidth = qe, P(w().useInstance, h()), [].concat(h().flatHeaders, h().allColumns).forEach(function (Z) {
                Z.render = j(h(), Z), Z.getHeaderProps = C(w().getHeaderProps, {
                    instance: h(),
                    column: Z
                }), Z.getFooterProps = C(w().getFooterProps, {instance: h(), column: Z})
            }), h().headerGroups = n.useMemo(function () {
                return ve.filter(function (Z, Pe) {
                    return Z.headers = Z.headers.filter(function (Te) {
                        return Te.headers ? function _e(Ge) {
                            return Ge.filter(function (br) {
                                return br.headers ? _e(br.headers) : br.isVisible
                            }).length
                        }(Te.headers) : Te.isVisible
                    }), !!Z.headers.length && (Z.getHeaderGroupProps = C(w().getHeaderGroupProps, {
                        instance: h(),
                        headerGroup: Z,
                        index: Pe
                    }), Z.getFooterGroupProps = C(w().getFooterGroupProps, {
                        instance: h(),
                        headerGroup: Z,
                        index: Pe
                    }), !0)
                })
            }, [ve, h, w]), h().footerGroups = [].concat(h().headerGroups).reverse(), h().prepareRow = n.useCallback(function (Z) {
                Z.getRowProps = C(w().getRowProps, {instance: h(), row: Z}), Z.allCells = te.map(function (Pe) {
                    var Te = Z.values[Pe.id], _e = {column: Pe, row: Z, value: Te};
                    return _e.getCellProps = C(w().getCellProps, {
                        instance: h(),
                        cell: _e
                    }), _e.render = j(h(), Pe, {row: Z, cell: _e, value: Te}), _e
                }), Z.cells = ae.map(function (Pe) {
                    return Z.allCells.find(function (Te) {
                        return Te.column.id === Pe.id
                    })
                }), P(w().prepareRow, Z, {instance: h()})
            }, [w, h, te, ae]), h().getTableProps = C(w().getTableProps, {instance: h()}), h().getTableBodyProps = C(w().getTableBodyProps, {instance: h()}), P(w().useFinalInstance, h()), h()
        }, Object.defineProperty(t, "__esModule", {value: !0})
    })
})(Wd, Lt);
(function (e) {
    e.exports = Lt
})(Ld);
const Gd = "_tr_12ddc_2", kd = "_th_12ddc_6", $d = "_btnSection_12ddc_18", Hd = "_td_12ddc_29",
    zd = "_overlay_12ddc_44", jd = "_modal_12ddc_48", Vd = "_table_12ddc_52", Ud = "_odd_12ddc_56",
    qd = "_center_12ddc_61", _d = "_sortIconContainer_12ddc_66", Xd = "_rotate180_12ddc_72", yr = {
        tr: Gd,
        th: kd,
        btnSection: $d,
        break: "_break_12ddc_22",
        td: Hd,
        overlay: zd,
        modal: jd,
        table: Vd,
        odd: Ud,
        center: qd,
        sortIconContainer: _d,
        rotate180: Xd
    }, Kd = "_overlay_1cbjw_1", Yd = "_cnt_1cbjw_5", Jd = "_afterOpen_1cbjw_15", Qd = "_btngrp_1cbjw_20",
    It = {overlay: Kd, cnt: Yd, afterOpen: Jd, btngrp: Qd}, {useRef: Zd, useCallback: ef, useMemo: rf} = ee;

function qn({confirm: e = "close_all_confirm", isOpen: r, onRequestClose: t, primaryButtonOnTap: n}) {
    const {t: o} = it(), i = Zd(null), l = ef(() => {
        i.current.focus()
    }, []), s = rf(() => ({base: Ir(Oo.content, It.cnt), afterOpen: It.afterOpen, beforeClose: ""}), []);
    return Re(Ru, {
        isOpen: r,
        onRequestClose: t,
        onAfterOpen: l,
        className: s,
        overlayClassName: Ir(Oo.overlay, It.overlay),
        children: [U("p", {children: o(e)}), Re("div", {
            className: It.btngrp,
            children: [U(Tt, {
                onClick: n,
                ref: i,
                children: o("close_all_confirm_yes")
            }), U("div", {style: {width: 20}}), U(Tt, {onClick: t, children: o("close_all_confirm_no")})]
        })]
    })
}

//默认排序
const tf = {id: "start", desc: !1};

function nf({data: e, columns: r, hiddenColumns: t, apiConfig: n}) {
    const [o, i] = G.useState(""), [l, s] = G.useState(!1), f = {sortBy: [tf], hiddenColumns: t},
        u = Ft.useTable({columns: r, data: e, initialState: f, autoResetSortBy: !1}, Ft.useSortBy), {
            getTableProps: m,
            setHiddenColumns: g,
            headerGroups: p,
            rows: b,
            prepareRow: C
        } = u;
    G.useEffect(() => {
        g(t)
    }, [g, t]);
    const {t: S, i18n: P} = it();
    let D;
    P.language === "zh-CN" ? D = Zc : P.language === "zh-TW" ? D = Fd : D = Hu;
    const B = () => {
        Wi(n, o), s(!1)
    }, O = k => {
        i(k), s(!0)
    }, A = (k, j) => {
        switch (k.column.id) {
            case"ctrl":
                return U(rc, {style: {cursor: "pointer"}, onClick: () => O(k.row.original.id)});
            case"start":
                return $u(k.value, 0, {locale: j});
            case"download":
            case"upload":
                return Ao(k.value);
            case"downloadSpeedCurr":
            case"uploadSpeedCurr":
                return Ao(k.value) + "/s";
            default:
                return k.value
        }
    };
    return Re("div", {
        style: {marginTop: "5px"},
        children: [Re("table", {
            ...m(),
            className: Ir(yr.table, "connections-table"),
            children: [U("thead", {
                children: p.map((k, j) => G.createElement("tr", {
                    ...k.getHeaderGroupProps(),
                    className: yr.tr,
                    key: j
                }, k.headers.map(J => Re("th", {
                    ...J.getHeaderProps(J.getSortByToggleProps()),
                    className: yr.th,
                    children: [U("span", {children: S(J.render("Header"))}), J.id !== "ctrl" ? U("span", {
                        className: yr.sortIconContainer,
                        children: J.isSorted ? U(Wu, {size: 16, className: J.isSortedDesc ? "" : yr.rotate180}) : null
                    }) : null]
                }))))
            }), U("tbody", {
                children: b.map((k, j) => (C(k), U("tr", {
                    className: yr.tr,
                    children: k.cells.map(J => U("td", {
                        ...J.getCellProps(),
                        className: Ir(yr.td, j % 2 === 0 ? yr.odd : !1, J.column.id),
                        children: A(J, D)
                    }))
                }, j)))
            })]
        }), U(qn, {confirm: "disconnect", isOpen: l, onRequestClose: () => s(!1), primaryButtonOnTap: B})]
    })
}

const af = e => ({apiConfig: Gi(e)}), of = Li(af)(nf);

function zo(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function (o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), t.push.apply(t, n)
    }
    return t
}

function jo(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r] != null ? arguments[r] : {};
        r % 2 ? zo(Object(t), !0).forEach(function (n) {
            Du(e, n, t[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : zo(Object(t)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        })
    }
    return e
}

function Ye(e) {
    return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}

var Vo = function () {
    return typeof Symbol == "function" && Symbol.observable || "@@observable"
}(), In = function () {
    return Math.random().toString(36).substring(7).split("").join(".")
}, Uo = {
    INIT: "@@redux/INIT" + In(), REPLACE: "@@redux/REPLACE" + In(), PROBE_UNKNOWN_ACTION: function () {
        return "@@redux/PROBE_UNKNOWN_ACTION" + In()
    }
};

function lf(e) {
    if (typeof e != "object" || e === null) return !1;
    for (var r = e; Object.getPrototypeOf(r) !== null;) r = Object.getPrototypeOf(r);
    return Object.getPrototypeOf(e) === r
}

function qi(e, r, t) {
    var n;
    if (typeof r == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function") throw new Error(Ye(0));
    if (typeof r == "function" && typeof t > "u" && (t = r, r = void 0), typeof t < "u") {
        if (typeof t != "function") throw new Error(Ye(1));
        return t(qi)(e, r)
    }
    if (typeof e != "function") throw new Error(Ye(2));
    var o = e, i = r, l = [], s = l, f = !1;

    function u() {
        s === l && (s = l.slice())
    }

    function m() {
        if (f) throw new Error(Ye(3));
        return i
    }

    function g(S) {
        if (typeof S != "function") throw new Error(Ye(4));
        if (f) throw new Error(Ye(5));
        var P = !0;
        return u(), s.push(S), function () {
            if (P) {
                if (f) throw new Error(Ye(6));
                P = !1, u();
                var B = s.indexOf(S);
                s.splice(B, 1), l = null
            }
        }
    }

    function p(S) {
        if (!lf(S)) throw new Error(Ye(7));
        if (typeof S.type > "u") throw new Error(Ye(8));
        if (f) throw new Error(Ye(9));
        try {
            f = !0, i = o(i, S)
        } finally {
            f = !1
        }
        for (var P = l = s, D = 0; D < P.length; D++) {
            var B = P[D];
            B()
        }
        return S
    }

    function b(S) {
        if (typeof S != "function") throw new Error(Ye(10));
        o = S, p({type: Uo.REPLACE})
    }

    function C() {
        var S, P = g;
        return S = {
            subscribe: function (B) {
                if (typeof B != "object" || B === null) throw new Error(Ye(11));

                function O() {
                    B.next && B.next(m())
                }

                O();
                var A = P(O);
                return {unsubscribe: A}
            }
        }, S[Vo] = function () {
            return this
        }, S
    }

    return p({type: Uo.INIT}), n = {dispatch: p, subscribe: g, getState: m, replaceReducer: b}, n[Vo] = C, n
}

function qo(e, r) {
    return function () {
        return r(e.apply(this, arguments))
    }
}

function _o(e, r) {
    if (typeof e == "function") return qo(e, r);
    if (typeof e != "object" || e === null) throw new Error(Ye(16));
    var t = {};
    for (var n in e) {
        var o = e[n];
        typeof o == "function" && (t[n] = qo(o, r))
    }
    return t
}

function _i() {
    for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
    return r.length === 0 ? function (n) {
        return n
    } : r.length === 1 ? r[0] : r.reduce(function (n, o) {
        return function () {
            return n(o.apply(void 0, arguments))
        }
    })
}

function sf() {
    for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
    return function (n) {
        return function () {
            var o = n.apply(void 0, arguments), i = function () {
                throw new Error(Ye(15))
            }, l = {
                getState: o.getState, dispatch: function () {
                    return i.apply(void 0, arguments)
                }
            }, s = r.map(function (f) {
                return f(l)
            });
            return i = _i.apply(void 0, s)(o.dispatch), jo(jo({}, o), {}, {dispatch: i})
        }
    }
}

var Xi = ee.createContext(null);

function uf(e) {
    e()
}

var Ki = uf, cf = function (r) {
    return Ki = r
}, df = function () {
    return Ki
};

function ff() {
    var e = df(), r = null, t = null;
    return {
        clear: function () {
            r = null, t = null
        }, notify: function () {
            e(function () {
                for (var o = r; o;) o.callback(), o = o.next
            })
        }, get: function () {
            for (var o = [], i = r; i;) o.push(i), i = i.next;
            return o
        }, subscribe: function (o) {
            var i = !0, l = t = {callback: o, next: null, prev: t};
            return l.prev ? l.prev.next = l : r = l, function () {
                !i || r === null || (i = !1, l.next ? l.next.prev = l.prev : t = l.prev, l.prev ? l.prev.next = l.next : r = l.next)
            }
        }
    }
}

var Xo = {
    notify: function () {
    }, get: function () {
        return []
    }
};

function Yi(e, r) {
    var t, n = Xo;

    function o(g) {
        return f(), n.subscribe(g)
    }

    function i() {
        n.notify()
    }

    function l() {
        m.onStateChange && m.onStateChange()
    }

    function s() {
        return Boolean(t)
    }

    function f() {
        t || (t = r ? r.addNestedSub(l) : e.subscribe(l), n = ff())
    }

    function u() {
        t && (t(), t = void 0, n.clear(), n = Xo)
    }

    var m = {
        addNestedSub: o,
        notifyNestedSubs: i,
        handleChangeWrapper: l,
        isSubscribed: s,
        trySubscribe: f,
        tryUnsubscribe: u,
        getListeners: function () {
            return n
        }
    };
    return m
}

var Ji = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? G.useLayoutEffect : G.useEffect;

function pf(e) {
    var r = e.store, t = e.context, n = e.children, o = G.useMemo(function () {
        var s = Yi(r);
        return {store: r, subscription: s}
    }, [r]), i = G.useMemo(function () {
        return r.getState()
    }, [r]);
    Ji(function () {
        var s = o.subscription;
        return s.onStateChange = s.notifyNestedSubs, s.trySubscribe(), i !== r.getState() && s.notifyNestedSubs(), function () {
            s.tryUnsubscribe(), s.onStateChange = null
        }
    }, [o, i]);
    var l = t || Xi;
    return ee.createElement(l.Provider, {value: o}, n)
}

var _n = {}, vf = {
    get exports() {
        return _n
    }, set exports(e) {
        _n = e
    }
}, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He = typeof Symbol == "function" && Symbol.for, fa = He ? Symbol.for("react.element") : 60103,
    pa = He ? Symbol.for("react.portal") : 60106, Xt = He ? Symbol.for("react.fragment") : 60107,
    Kt = He ? Symbol.for("react.strict_mode") : 60108, Yt = He ? Symbol.for("react.profiler") : 60114,
    Jt = He ? Symbol.for("react.provider") : 60109, Qt = He ? Symbol.for("react.context") : 60110,
    va = He ? Symbol.for("react.async_mode") : 60111, Zt = He ? Symbol.for("react.concurrent_mode") : 60111,
    en = He ? Symbol.for("react.forward_ref") : 60112, rn = He ? Symbol.for("react.suspense") : 60113,
    gf = He ? Symbol.for("react.suspense_list") : 60120, tn = He ? Symbol.for("react.memo") : 60115,
    nn = He ? Symbol.for("react.lazy") : 60116, mf = He ? Symbol.for("react.block") : 60121,
    hf = He ? Symbol.for("react.fundamental") : 60117, bf = He ? Symbol.for("react.responder") : 60118,
    yf = He ? Symbol.for("react.scope") : 60119;

function tr(e) {
    if (typeof e == "object" && e !== null) {
        var r = e.$$typeof;
        switch (r) {
            case fa:
                switch (e = e.type, e) {
                    case va:
                    case Zt:
                    case Xt:
                    case Yt:
                    case Kt:
                    case rn:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case Qt:
                            case en:
                            case nn:
                            case tn:
                            case Jt:
                                return e;
                            default:
                                return r
                        }
                }
            case pa:
                return r
        }
    }
}

function Qi(e) {
    return tr(e) === Zt
}

he.AsyncMode = va;
he.ConcurrentMode = Zt;
he.ContextConsumer = Qt;
he.ContextProvider = Jt;
he.Element = fa;
he.ForwardRef = en;
he.Fragment = Xt;
he.Lazy = nn;
he.Memo = tn;
he.Portal = pa;
he.Profiler = Yt;
he.StrictMode = Kt;
he.Suspense = rn;
he.isAsyncMode = function (e) {
    return Qi(e) || tr(e) === va
};
he.isConcurrentMode = Qi;
he.isContextConsumer = function (e) {
    return tr(e) === Qt
};
he.isContextProvider = function (e) {
    return tr(e) === Jt
};
he.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === fa
};
he.isForwardRef = function (e) {
    return tr(e) === en
};
he.isFragment = function (e) {
    return tr(e) === Xt
};
he.isLazy = function (e) {
    return tr(e) === nn
};
he.isMemo = function (e) {
    return tr(e) === tn
};
he.isPortal = function (e) {
    return tr(e) === pa
};
he.isProfiler = function (e) {
    return tr(e) === Yt
};
he.isStrictMode = function (e) {
    return tr(e) === Kt
};
he.isSuspense = function (e) {
    return tr(e) === rn
};
he.isValidElementType = function (e) {
    return typeof e == "string" || typeof e == "function" || e === Xt || e === Zt || e === Yt || e === Kt || e === rn || e === gf || typeof e == "object" && e !== null && (e.$$typeof === nn || e.$$typeof === tn || e.$$typeof === Jt || e.$$typeof === Qt || e.$$typeof === en || e.$$typeof === hf || e.$$typeof === bf || e.$$typeof === yf || e.$$typeof === mf)
};
he.typeOf = tr;
(function (e) {
    e.exports = he
})(vf);
var ga = _n, wf = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    }, Cf = {name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0},
    Sf = {$$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0},
    Zi = {$$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0}, ma = {};
ma[ga.ForwardRef] = Sf;
ma[ga.Memo] = Zi;

function Ko(e) {
    return ga.isMemo(e) ? Zi : ma[e.$$typeof] || wf
}

var xf = Object.defineProperty, If = Object.getOwnPropertyNames, Yo = Object.getOwnPropertySymbols,
    Pf = Object.getOwnPropertyDescriptor, Rf = Object.getPrototypeOf, Jo = Object.prototype;

function el(e, r, t) {
    if (typeof r != "string") {
        if (Jo) {
            var n = Rf(r);
            n && n !== Jo && el(e, n, t)
        }
        var o = If(r);
        Yo && (o = o.concat(Yo(r)));
        for (var i = Ko(e), l = Ko(r), s = 0; s < o.length; ++s) {
            var f = o[s];
            if (!Cf[f] && !(t && t[f]) && !(l && l[f]) && !(i && i[f])) {
                var u = Pf(r, f);
                try {
                    xf(e, f, u)
                } catch {
                }
            }
        }
    }
    return e
}

var Qo = el, Xn = {}, Df = {
    get exports() {
        return Xn
    }, set exports(e) {
        Xn = e
    }
}, Ce = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var an = 60103, on = 60106, lt = 60107, st = 60108, ut = 60114, ct = 60109, dt = 60110, ft = 60112, pt = 60113,
    ha = 60120, vt = 60115, gt = 60116, rl = 60121, tl = 60122, nl = 60117, al = 60129, ol = 60131;
if (typeof Symbol == "function" && Symbol.for) {
    var ze = Symbol.for;
    an = ze("react.element"), on = ze("react.portal"), lt = ze("react.fragment"), st = ze("react.strict_mode"), ut = ze("react.profiler"), ct = ze("react.provider"), dt = ze("react.context"), ft = ze("react.forward_ref"), pt = ze("react.suspense"), ha = ze("react.suspense_list"), vt = ze("react.memo"), gt = ze("react.lazy"), rl = ze("react.block"), tl = ze("react.server.block"), nl = ze("react.fundamental"), al = ze("react.debug_trace_mode"), ol = ze("react.legacy_hidden")
}

function pr(e) {
    if (typeof e == "object" && e !== null) {
        var r = e.$$typeof;
        switch (r) {
            case an:
                switch (e = e.type, e) {
                    case lt:
                    case ut:
                    case st:
                    case pt:
                    case ha:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case dt:
                            case ft:
                            case gt:
                            case vt:
                            case ct:
                                return e;
                            default:
                                return r
                        }
                }
            case on:
                return r
        }
    }
}

var Ef = ct, Bf = an, Of = ft, Af = lt, Tf = gt, Mf = vt, Nf = on, Ff = ut, Lf = st, Wf = pt;
Ce.ContextConsumer = dt;
Ce.ContextProvider = Ef;
Ce.Element = Bf;
Ce.ForwardRef = Of;
Ce.Fragment = Af;
Ce.Lazy = Tf;
Ce.Memo = Mf;
Ce.Portal = Nf;
Ce.Profiler = Ff;
Ce.StrictMode = Lf;
Ce.Suspense = Wf;
Ce.isAsyncMode = function () {
    return !1
};
Ce.isConcurrentMode = function () {
    return !1
};
Ce.isContextConsumer = function (e) {
    return pr(e) === dt
};
Ce.isContextProvider = function (e) {
    return pr(e) === ct
};
Ce.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === an
};
Ce.isForwardRef = function (e) {
    return pr(e) === ft
};
Ce.isFragment = function (e) {
    return pr(e) === lt
};
Ce.isLazy = function (e) {
    return pr(e) === gt
};
Ce.isMemo = function (e) {
    return pr(e) === vt
};
Ce.isPortal = function (e) {
    return pr(e) === on
};
Ce.isProfiler = function (e) {
    return pr(e) === ut
};
Ce.isStrictMode = function (e) {
    return pr(e) === st
};
Ce.isSuspense = function (e) {
    return pr(e) === pt
};
Ce.isValidElementType = function (e) {
    return typeof e == "string" || typeof e == "function" || e === lt || e === ut || e === al || e === st || e === pt || e === ha || e === ol || typeof e == "object" && e !== null && (e.$$typeof === gt || e.$$typeof === vt || e.$$typeof === ct || e.$$typeof === dt || e.$$typeof === ft || e.$$typeof === nl || e.$$typeof === rl || e[0] === tl)
};
Ce.typeOf = pr;
(function (e) {
    e.exports = Ce
})(Df);
var Gf = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"],
    kf = ["reactReduxForwardedRef"], $f = [], Hf = [null, null];

function zf(e, r) {
    var t = e[1];
    return [r.payload, t + 1]
}

function Zo(e, r, t) {
    Ji(function () {
        return e.apply(void 0, r)
    }, t)
}

function jf(e, r, t, n, o, i, l) {
    e.current = n, r.current = o, t.current = !1, i.current && (i.current = null, l())
}

function Vf(e, r, t, n, o, i, l, s, f, u) {
    if (e) {
        var m = !1, g = null, p = function () {
            if (!m) {
                var S = r.getState(), P, D;
                try {
                    P = n(S, o.current)
                } catch (B) {
                    D = B, g = B
                }
                D || (g = null), P === i.current ? l.current || f() : (i.current = P, s.current = P, l.current = !0, u({
                    type: "STORE_UPDATED",
                    payload: {error: D}
                }))
            }
        };
        t.onStateChange = p, t.trySubscribe(), p();
        var b = function () {
            if (m = !0, t.tryUnsubscribe(), t.onStateChange = null, g) throw g
        };
        return b
    }
}

var Uf = function () {
    return [null, 0]
};

function qf(e, r) {
    r === void 0 && (r = {});
    var t = r, n = t.getDisplayName, o = n === void 0 ? function (O) {
            return "ConnectAdvanced(" + O + ")"
        } : n, i = t.methodName, l = i === void 0 ? "connectAdvanced" : i, s = t.renderCountProp,
        f = s === void 0 ? void 0 : s, u = t.shouldHandleStateChanges, m = u === void 0 ? !0 : u, g = t.storeKey,
        p = g === void 0 ? "store" : g;
    t.withRef;
    var b = t.forwardRef, C = b === void 0 ? !1 : b, S = t.context, P = S === void 0 ? Xi : S, D = Mt(t, Gf), B = P;
    return function (A) {
        var k = A.displayName || A.name || "Component", j = o(k), J = ne({}, D, {
            getDisplayName: o,
            methodName: l,
            renderCountProp: f,
            shouldHandleStateChanges: m,
            storeKey: p,
            displayName: j,
            wrappedComponentName: k,
            WrappedComponent: A
        }), fe = D.pure;

        function le(V) {
            return e(V.dispatch, J)
        }

        var be = fe ? G.useMemo : function (V) {
            return V()
        };

        function pe(V) {
            var se = G.useMemo(function () {
                    var Er = V.reactReduxForwardedRef, Ur = Mt(V, kf);
                    return [V.context, Er, Ur]
                }, [V]), Ie = se[0], Se = se[1], we = se[2], Ee = G.useMemo(function () {
                    return Ie && Ie.Consumer && Xn.isContextConsumer(ee.createElement(Ie.Consumer, null)) ? Ie : B
                }, [Ie, B]), De = G.useContext(Ee),
                Oe = Boolean(V.store) && Boolean(V.store.getState) && Boolean(V.store.dispatch);
            Boolean(De) && Boolean(De.store);
            var Fe = Oe ? V.store : De.store, ur = G.useMemo(function () {
                return le(Fe)
            }, [Fe]), Ve = G.useMemo(function () {
                if (!m) return Hf;
                var Er = Yi(Fe, Oe ? null : De.subscription), Ur = Er.notifyNestedSubs.bind(Er);
                return [Er, Ur]
            }, [Fe, Oe, De]), Ae = Ve[0], We = Ve[1], cr = G.useMemo(function () {
                return Oe ? De : ne({}, De, {subscription: Ae})
            }, [Oe, De, Ae]), nr = G.useReducer(zf, $f, Uf), dr = nr[0], Ke = dr[0], xe = nr[1];
            if (Ke && Ke.error) throw Ke.error;
            var Ue = G.useRef(), vr = G.useRef(we), Je = G.useRef(), Dr = G.useRef(!1), ar = be(function () {
                return Je.current && we === vr.current ? Je.current : ur(Fe.getState(), we)
            }, [Fe, Ke, we]);
            Zo(jf, [vr, Ue, Dr, we, ar, Je, We]), Zo(Vf, [m, Fe, Ae, ur, vr, Ue, Dr, Je, We, xe], [Fe, Ae, ur]);
            var Nr = G.useMemo(function () {
                return ee.createElement(A, ne({}, ar, {ref: Se}))
            }, [Se, A, ar]), Vr = G.useMemo(function () {
                return m ? ee.createElement(Ee.Provider, {value: cr}, Nr) : Nr
            }, [Ee, Nr, cr]);
            return Vr
        }

        var Le = fe ? ee.memo(pe) : pe;
        if (Le.WrappedComponent = A, Le.displayName = pe.displayName = j, C) {
            var H = ee.forwardRef(function (se, Ie) {
                return ee.createElement(Le, ne({}, se, {reactReduxForwardedRef: Ie}))
            });
            return H.displayName = j, H.WrappedComponent = A, Qo(H, A)
        }
        return Qo(Le, A)
    }
}

function ei(e, r) {
    return e === r ? e !== 0 || r !== 0 || 1 / e === 1 / r : e !== e && r !== r
}

function Pn(e, r) {
    if (ei(e, r)) return !0;
    if (typeof e != "object" || e === null || typeof r != "object" || r === null) return !1;
    var t = Object.keys(e), n = Object.keys(r);
    if (t.length !== n.length) return !1;
    for (var o = 0; o < t.length; o++) if (!Object.prototype.hasOwnProperty.call(r, t[o]) || !ei(e[t[o]], r[t[o]])) return !1;
    return !0
}

function _f(e, r) {
    var t = {}, n = function (l) {
        var s = e[l];
        typeof s == "function" && (t[l] = function () {
            return r(s.apply(void 0, arguments))
        })
    };
    for (var o in e) n(o);
    return t
}

function ba(e) {
    return function (t, n) {
        var o = e(t, n);

        function i() {
            return o
        }

        return i.dependsOnOwnProps = !1, i
    }
}

function ri(e) {
    return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0 ? Boolean(e.dependsOnOwnProps) : e.length !== 1
}

function il(e, r) {
    return function (n, o) {
        o.displayName;
        var i = function (s, f) {
            return i.dependsOnOwnProps ? i.mapToProps(s, f) : i.mapToProps(s)
        };
        return i.dependsOnOwnProps = !0, i.mapToProps = function (s, f) {
            i.mapToProps = e, i.dependsOnOwnProps = ri(e);
            var u = i(s, f);
            return typeof u == "function" && (i.mapToProps = u, i.dependsOnOwnProps = ri(u), u = i(s, f)), u
        }, i
    }
}

function Xf(e) {
    return typeof e == "function" ? il(e) : void 0
}

function Kf(e) {
    return e ? void 0 : ba(function (r) {
        return {dispatch: r}
    })
}

function Yf(e) {
    return e && typeof e == "object" ? ba(function (r) {
        return _f(e, r)
    }) : void 0
}

const Jf = [Xf, Kf, Yf];

function Qf(e) {
    return typeof e == "function" ? il(e) : void 0
}

function Zf(e) {
    return e ? void 0 : ba(function () {
        return {}
    })
}

const ep = [Qf, Zf];

function rp(e, r, t) {
    return ne({}, t, e, r)
}

function tp(e) {
    return function (t, n) {
        n.displayName;
        var o = n.pure, i = n.areMergedPropsEqual, l = !1, s;
        return function (u, m, g) {
            var p = e(u, m, g);
            return l ? (!o || !i(p, s)) && (s = p) : (l = !0, s = p), s
        }
    }
}

function np(e) {
    return typeof e == "function" ? tp(e) : void 0
}

function ap(e) {
    return e ? void 0 : function () {
        return rp
    }
}

const op = [np, ap];
var ip = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

function lp(e, r, t, n) {
    return function (i, l) {
        return t(e(i, l), r(n, l), l)
    }
}

function sp(e, r, t, n, o) {
    var i = o.areStatesEqual, l = o.areOwnPropsEqual, s = o.areStatePropsEqual, f = !1, u, m, g, p, b;

    function C(O, A) {
        return u = O, m = A, g = e(u, m), p = r(n, m), b = t(g, p, m), f = !0, b
    }

    function S() {
        return g = e(u, m), r.dependsOnOwnProps && (p = r(n, m)), b = t(g, p, m), b
    }

    function P() {
        return e.dependsOnOwnProps && (g = e(u, m)), r.dependsOnOwnProps && (p = r(n, m)), b = t(g, p, m), b
    }

    function D() {
        var O = e(u, m), A = !s(O, g);
        return g = O, A && (b = t(g, p, m)), b
    }

    function B(O, A) {
        var k = !l(A, m), j = !i(O, u, A, m);
        return u = O, m = A, k && j ? S() : k ? P() : j ? D() : b
    }

    return function (A, k) {
        return f ? B(A, k) : C(A, k)
    }
}

function up(e, r) {
    var t = r.initMapStateToProps, n = r.initMapDispatchToProps, o = r.initMergeProps, i = Mt(r, ip), l = t(e, i),
        s = n(e, i), f = o(e, i), u = i.pure ? sp : lp;
    return u(l, s, f, e, i)
}

var cp = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];

function Rn(e, r, t) {
    for (var n = r.length - 1; n >= 0; n--) {
        var o = r[n](e);
        if (o) return o
    }
    return function (i, l) {
        throw new Error("Invalid value of type " + typeof e + " for " + t + " argument when connecting component " + l.wrappedComponentName + ".")
    }
}

function dp(e, r) {
    return e === r
}

function fp(e) {
    var r = e === void 0 ? {} : e, t = r.connectHOC, n = t === void 0 ? qf : t, o = r.mapStateToPropsFactories,
        i = o === void 0 ? ep : o, l = r.mapDispatchToPropsFactories, s = l === void 0 ? Jf : l,
        f = r.mergePropsFactories, u = f === void 0 ? op : f, m = r.selectorFactory, g = m === void 0 ? up : m;
    return function (b, C, S, P) {
        P === void 0 && (P = {});
        var D = P, B = D.pure, O = B === void 0 ? !0 : B, A = D.areStatesEqual, k = A === void 0 ? dp : A,
            j = D.areOwnPropsEqual, J = j === void 0 ? Pn : j, fe = D.areStatePropsEqual, le = fe === void 0 ? Pn : fe,
            be = D.areMergedPropsEqual, pe = be === void 0 ? Pn : be, Le = Mt(D, cp), H = Rn(b, i, "mapStateToProps"),
            V = Rn(C, s, "mapDispatchToProps"), se = Rn(S, u, "mergeProps");
        return n(g, ne({
            methodName: "connect",
            getDisplayName: function (Se) {
                return "Connect(" + Se + ")"
            },
            shouldHandleStateChanges: Boolean(b),
            initMapStateToProps: H,
            initMapDispatchToProps: V,
            initMergeProps: se,
            pure: O,
            areStatesEqual: k,
            areOwnPropsEqual: J,
            areStatePropsEqual: le,
            areMergedPropsEqual: pe
        }, Le))
    }
}

const ll = fp();
cf(Eu.unstable_batchedUpdates);

function pp(e, r) {
    if (e.length !== r.length) return !1;
    for (var t = 0; t < e.length; t++) if (e[t] !== r[t]) return !1;
    return !0
}

function sl(e, r) {
    var t = G.useState(function () {
            return {inputs: r, result: e()}
        })[0], n = G.useRef(!0), o = G.useRef(t),
        i = n.current || Boolean(r && o.current.inputs && pp(r, o.current.inputs)),
        l = i ? o.current : {inputs: r, result: e()};
    return G.useEffect(function () {
        n.current = !1, o.current = l
    }, [l]), l.result
}

function vp(e, r) {
    return sl(function () {
        return e
    }, r)
}

var me = sl, Y = vp, gp = !0, Dn = "Invariant failed";

function mp(e, r) {
    if (!e) {
        if (gp) throw new Error(Dn);
        var t = typeof r == "function" ? r() : r, n = t ? "".concat(Dn, ": ").concat(t) : Dn;
        throw new Error(n)
    }
}

var fr = function (r) {
    var t = r.top, n = r.right, o = r.bottom, i = r.left, l = n - i, s = o - t, f = {
        top: t,
        right: n,
        bottom: o,
        left: i,
        width: l,
        height: s,
        x: i,
        y: t,
        center: {x: (n + i) / 2, y: (o + t) / 2}
    };
    return f
}, ya = function (r, t) {
    return {top: r.top - t.top, left: r.left - t.left, bottom: r.bottom + t.bottom, right: r.right + t.right}
}, ti = function (r, t) {
    return {top: r.top + t.top, left: r.left + t.left, bottom: r.bottom - t.bottom, right: r.right - t.right}
}, hp = function (r, t) {
    return {top: r.top + t.y, left: r.left + t.x, bottom: r.bottom + t.y, right: r.right + t.x}
}, En = {top: 0, right: 0, bottom: 0, left: 0}, wa = function (r) {
    var t = r.borderBox, n = r.margin, o = n === void 0 ? En : n, i = r.border, l = i === void 0 ? En : i,
        s = r.padding, f = s === void 0 ? En : s, u = fr(ya(t, o)), m = fr(ti(t, l)), g = fr(ti(m, f));
    return {marginBox: u, borderBox: fr(t), paddingBox: m, contentBox: g, margin: o, border: l, padding: f}
}, ir = function (r) {
    var t = r.slice(0, -2), n = r.slice(-2);
    if (n !== "px") return 0;
    var o = Number(t);
    return isNaN(o) && mp(!1), o
}, bp = function () {
    return {x: window.pageXOffset, y: window.pageYOffset}
}, Wt = function (r, t) {
    var n = r.borderBox, o = r.border, i = r.margin, l = r.padding, s = hp(n, t);
    return wa({borderBox: s, border: o, margin: i, padding: l})
}, Gt = function (r, t) {
    return t === void 0 && (t = bp()), Wt(r, t)
}, ul = function (r, t) {
    var n = {top: ir(t.marginTop), right: ir(t.marginRight), bottom: ir(t.marginBottom), left: ir(t.marginLeft)},
        o = {top: ir(t.paddingTop), right: ir(t.paddingRight), bottom: ir(t.paddingBottom), left: ir(t.paddingLeft)},
        i = {
            top: ir(t.borderTopWidth),
            right: ir(t.borderRightWidth),
            bottom: ir(t.borderBottomWidth),
            left: ir(t.borderLeftWidth)
        };
    return wa({borderBox: r, margin: n, padding: o, border: i})
}, cl = function (r) {
    var t = r.getBoundingClientRect(), n = window.getComputedStyle(r);
    return ul(t, n)
}, ni = Number.isNaN || function (r) {
    return typeof r == "number" && r !== r
};

function yp(e, r) {
    return !!(e === r || ni(e) && ni(r))
}

function wp(e, r) {
    if (e.length !== r.length) return !1;
    for (var t = 0; t < e.length; t++) if (!yp(e[t], r[t])) return !1;
    return !0
}

function ke(e, r) {
    r === void 0 && (r = wp);
    var t, n = [], o, i = !1;

    function l() {
        for (var s = [], f = 0; f < arguments.length; f++) s[f] = arguments[f];
        return i && t === this && r(s, n) || (o = e.apply(this, s), i = !0, t = this, n = s), o
    }

    return l
}

var Cp = function (r) {
    var t = [], n = null, o = function () {
        for (var l = arguments.length, s = new Array(l), f = 0; f < l; f++) s[f] = arguments[f];
        t = s, !n && (n = requestAnimationFrame(function () {
            n = null, r.apply(void 0, t)
        }))
    };
    return o.cancel = function () {
        n && (cancelAnimationFrame(n), n = null)
    }, o
};
const rt = Cp;

function dl(e, r) {
}

dl.bind(null, "warn");
dl.bind(null, "error");

function Cr() {
}

function Sp(e, r) {
    return ne({}, e, {}, r)
}

function lr(e, r, t) {
    var n = r.map(function (o) {
        var i = Sp(t, o.options);
        return e.addEventListener(o.eventName, o.fn, i), function () {
            e.removeEventListener(o.eventName, o.fn, i)
        }
    });
    return function () {
        n.forEach(function (i) {
            i()
        })
    }
}

var xp = "Invariant failed";

function kt(e) {
    this.message = e
}

kt.prototype.toString = function () {
    return this.message
};

function W(e, r) {
    if (!e) throw new kt(xp)
}

var Ip = function (e) {
        ki(r, e);

        function r() {
            for (var n, o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
            return n = e.call.apply(e, [this].concat(i)) || this, n.callbacks = null, n.unbind = Cr, n.onWindowError = function (s) {
                var f = n.getCallbacks();
                f.isDragging() && f.tryAbort();
                var u = s.error;
                u instanceof kt && s.preventDefault()
            }, n.getCallbacks = function () {
                if (!n.callbacks) throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
                return n.callbacks
            }, n.setCallbacks = function (s) {
                n.callbacks = s
            }, n
        }

        var t = r.prototype;
        return t.componentDidMount = function () {
            this.unbind = lr(window, [{eventName: "error", fn: this.onWindowError}])
        }, t.componentDidCatch = function (o) {
            if (o instanceof kt) {
                this.setState({});
                return
            }
            throw o
        }, t.componentWillUnmount = function () {
            this.unbind()
        }, t.render = function () {
            return this.props.children(this.setCallbacks)
        }, r
    }(ee.Component), Pp = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, $t = function (r) {
        return r + 1
    }, Rp = function (r) {
        return `
  You have lifted an item in position ` + $t(r.source.index) + `
`
    }, fl = function (r, t) {
        var n = r.droppableId === t.droppableId, o = $t(r.index), i = $t(t.index);
        return n ? `
      You have moved the item from position ` + o + `
      to position ` + i + `
    ` : `
    You have moved the item from position ` + o + `
    in list ` + r.droppableId + `
    to list ` + t.droppableId + `
    in position ` + i + `
  `
    }, pl = function (r, t, n) {
        var o = t.droppableId === n.droppableId;
        return o ? `
      The item ` + r + `
      has been combined with ` + n.draggableId : `
      The item ` + r + `
      in list ` + t.droppableId + `
      has been combined with ` + n.draggableId + `
      in list ` + n.droppableId + `
    `
    }, Dp = function (r) {
        var t = r.destination;
        if (t) return fl(r.source, t);
        var n = r.combine;
        return n ? pl(r.draggableId, r.source, n) : "You are over an area that cannot be dropped on"
    }, ai = function (r) {
        return `
  The item has returned to its starting position
  of ` + $t(r.index) + `
`
    }, Ep = function (r) {
        if (r.reason === "CANCEL") return `
      Movement cancelled.
      ` + ai(r.source) + `
    `;
        var t = r.destination, n = r.combine;
        return t ? `
      You have dropped the item.
      ` + fl(r.source, t) + `
    ` : n ? `
      You have dropped the item.
      ` + pl(r.draggableId, r.source, n) + `
    ` : `
    The item has been dropped while not over a drop area.
    ` + ai(r.source) + `
  `
    }, At = {dragHandleUsageInstructions: Pp, onDragStart: Rp, onDragUpdate: Dp, onDragEnd: Ep}, $e = {x: 0, y: 0},
    je = function (r, t) {
        return {x: r.x + t.x, y: r.y + t.y}
    }, Ze = function (r, t) {
        return {x: r.x - t.x, y: r.y - t.y}
    }, Sr = function (r, t) {
        return r.x === t.x && r.y === t.y
    }, Hr = function (r) {
        return {x: r.x !== 0 ? -r.x : 0, y: r.y !== 0 ? -r.y : 0}
    }, Mr = function (r, t, n) {
        var o;
        return n === void 0 && (n = 0), o = {}, o[r] = t, o[r === "x" ? "y" : "x"] = n, o
    }, tt = function (r, t) {
        return Math.sqrt(Math.pow(t.x - r.x, 2) + Math.pow(t.y - r.y, 2))
    }, oi = function (r, t) {
        return Math.min.apply(Math, t.map(function (n) {
            return tt(r, n)
        }))
    }, vl = function (r) {
        return function (t) {
            return {x: r(t.x), y: r(t.y)}
        }
    }, Bp = function (e, r) {
        var t = fr({
            top: Math.max(r.top, e.top),
            right: Math.min(r.right, e.right),
            bottom: Math.min(r.bottom, e.bottom),
            left: Math.max(r.left, e.left)
        });
        return t.width <= 0 || t.height <= 0 ? null : t
    }, mt = function (r, t) {
        return {top: r.top + t.y, left: r.left + t.x, bottom: r.bottom + t.y, right: r.right + t.x}
    }, ii = function (r) {
        return [{x: r.left, y: r.top}, {x: r.right, y: r.top}, {x: r.left, y: r.bottom}, {x: r.right, y: r.bottom}]
    }, Op = {top: 0, right: 0, bottom: 0, left: 0}, Ap = function (r, t) {
        return t ? mt(r, t.scroll.diff.displacement) : r
    }, Tp = function (r, t, n) {
        if (n && n.increasedBy) {
            var o;
            return ne({}, r, (o = {}, o[t.end] = r[t.end] + n.increasedBy[t.line], o))
        }
        return r
    }, Mp = function (r, t) {
        return t && t.shouldClipSubject ? Bp(t.pageMarginBox, r) : fr(r)
    }, Gr = function (e) {
        var r = e.page, t = e.withPlaceholder, n = e.axis, o = e.frame, i = Ap(r.marginBox, o), l = Tp(i, n, t),
            s = Mp(l, o);
        return {page: r, withPlaceholder: t, active: s}
    }, Ca = function (e, r) {
        e.frame || W(!1);
        var t = e.frame, n = Ze(r, t.scroll.initial), o = Hr(n), i = ne({}, t, {
                scroll: {
                    initial: t.scroll.initial,
                    current: r,
                    diff: {value: n, displacement: o},
                    max: t.scroll.max
                }
            }), l = Gr({page: e.subject.page, withPlaceholder: e.subject.withPlaceholder, axis: e.axis, frame: i}),
            s = ne({}, e, {frame: i, subject: l});
        return s
    };

function Ht(e) {
    return Object.values ? Object.values(e) : Object.keys(e).map(function (r) {
        return e[r]
    })
}

function Sa(e, r) {
    if (e.findIndex) return e.findIndex(r);
    for (var t = 0; t < e.length; t++) if (r(e[t])) return t;
    return -1
}

function Rr(e, r) {
    if (e.find) return e.find(r);
    var t = Sa(e, r);
    if (t !== -1) return e[t]
}

function gl(e) {
    return Array.prototype.slice.call(e)
}

var ml = ke(function (e) {
    return e.reduce(function (r, t) {
        return r[t.descriptor.id] = t, r
    }, {})
}), hl = ke(function (e) {
    return e.reduce(function (r, t) {
        return r[t.descriptor.id] = t, r
    }, {})
}), ln = ke(function (e) {
    return Ht(e)
}), Np = ke(function (e) {
    return Ht(e)
}), zr = ke(function (e, r) {
    var t = Np(r).filter(function (n) {
        return e === n.descriptor.droppableId
    }).sort(function (n, o) {
        return n.descriptor.index - o.descriptor.index
    });
    return t
});

function xa(e) {
    return e.at && e.at.type === "REORDER" ? e.at.destination : null
}

function sn(e) {
    return e.at && e.at.type === "COMBINE" ? e.at.combine : null
}

var un = ke(function (e, r) {
        return r.filter(function (t) {
            return t.descriptor.id !== e.descriptor.id
        })
    }), Fp = function (e) {
        var r = e.isMovingForward, t = e.draggable, n = e.destination, o = e.insideDestination, i = e.previousImpact;
        if (!n.isCombineEnabled) return null;
        var l = xa(i);
        if (!l) return null;

        function s(S) {
            var P = {type: "COMBINE", combine: {draggableId: S, droppableId: n.descriptor.id}};
            return ne({}, i, {at: P})
        }

        var f = i.displaced.all, u = f.length ? f[0] : null;
        if (r) return u ? s(u) : null;
        var m = un(t, o);
        if (!u) {
            if (!m.length) return null;
            var g = m[m.length - 1];
            return s(g.descriptor.id)
        }
        var p = Sa(m, function (S) {
            return S.descriptor.id === u
        });
        p === -1 && W(!1);
        var b = p - 1;
        if (b < 0) return null;
        var C = m[b];
        return s(C.descriptor.id)
    }, jr = function (e, r) {
        return e.descriptor.droppableId === r.descriptor.id
    }, bl = {point: $e, value: 0}, nt = {invisible: {}, visible: {}, all: []},
    Lp = {displaced: nt, displacedBy: bl, at: null}, sr = function (e, r) {
        return function (t) {
            return e <= t && t <= r
        }
    }, yl = function (e) {
        var r = sr(e.top, e.bottom), t = sr(e.left, e.right);
        return function (n) {
            var o = r(n.top) && r(n.bottom) && t(n.left) && t(n.right);
            if (o) return !0;
            var i = r(n.top) || r(n.bottom), l = t(n.left) || t(n.right), s = i && l;
            if (s) return !0;
            var f = n.top < e.top && n.bottom > e.bottom, u = n.left < e.left && n.right > e.right, m = f && u;
            if (m) return !0;
            var g = f && l || u && i;
            return g
        }
    }, Wp = function (e) {
        var r = sr(e.top, e.bottom), t = sr(e.left, e.right);
        return function (n) {
            var o = r(n.top) && r(n.bottom) && t(n.left) && t(n.right);
            return o
        }
    }, Ia = {
        direction: "vertical",
        line: "y",
        crossAxisLine: "x",
        start: "top",
        end: "bottom",
        size: "height",
        crossAxisStart: "left",
        crossAxisEnd: "right",
        crossAxisSize: "width"
    }, wl = {
        direction: "horizontal",
        line: "x",
        crossAxisLine: "y",
        start: "left",
        end: "right",
        size: "width",
        crossAxisStart: "top",
        crossAxisEnd: "bottom",
        crossAxisSize: "height"
    }, Gp = function (e) {
        return function (r) {
            var t = sr(r.top, r.bottom), n = sr(r.left, r.right);
            return function (o) {
                return e === Ia ? t(o.top) && t(o.bottom) : n(o.left) && n(o.right)
            }
        }
    }, kp = function (r, t) {
        var n = t.frame ? t.frame.scroll.diff.displacement : $e;
        return mt(r, n)
    }, $p = function (r, t, n) {
        return t.subject.active ? n(t.subject.active)(r) : !1
    }, Hp = function (r, t, n) {
        return n(t)(r)
    }, Pa = function (r) {
        var t = r.target, n = r.destination, o = r.viewport, i = r.withDroppableDisplacement, l = r.isVisibleThroughFrameFn,
            s = i ? kp(t, n) : t;
        return $p(s, n, l) && Hp(s, o, l)
    }, zp = function (r) {
        return Pa(ne({}, r, {isVisibleThroughFrameFn: yl}))
    }, Cl = function (r) {
        return Pa(ne({}, r, {isVisibleThroughFrameFn: Wp}))
    }, jp = function (r) {
        return Pa(ne({}, r, {isVisibleThroughFrameFn: Gp(r.destination.axis)}))
    }, Vp = function (r, t, n) {
        if (typeof n == "boolean") return n;
        if (!t) return !0;
        var o = t.invisible, i = t.visible;
        if (o[r]) return !1;
        var l = i[r];
        return l ? l.shouldAnimate : !0
    };

function Up(e, r) {
    var t = e.page.marginBox, n = {top: r.point.y, right: 0, bottom: 0, left: r.point.x};
    return fr(ya(t, n))
}

function at(e) {
    var r = e.afterDragging, t = e.destination, n = e.displacedBy, o = e.viewport, i = e.forceShouldAnimate, l = e.last;
    return r.reduce(function (f, u) {
        var m = Up(u, n), g = u.descriptor.id;
        f.all.push(g);
        var p = zp({target: m, destination: t, viewport: o, withDroppableDisplacement: !0});
        if (!p) return f.invisible[u.descriptor.id] = !0, f;
        var b = Vp(g, l, i), C = {draggableId: g, shouldAnimate: b};
        return f.visible[g] = C, f
    }, {all: [], visible: {}, invisible: {}})
}

function qp(e, r) {
    if (!e.length) return 0;
    var t = e[e.length - 1].descriptor.index;
    return r.inHomeList ? t : t + 1
}

function li(e) {
    var r = e.insideDestination, t = e.inHomeList, n = e.displacedBy, o = e.destination, i = qp(r, {inHomeList: t});
    return {displaced: nt, displacedBy: n, at: {type: "REORDER", destination: {droppableId: o.descriptor.id, index: i}}}
}

function zt(e) {
    var r = e.draggable, t = e.insideDestination, n = e.destination, o = e.viewport, i = e.displacedBy, l = e.last,
        s = e.index, f = e.forceShouldAnimate, u = jr(r, n);
    if (s == null) return li({insideDestination: t, inHomeList: u, displacedBy: i, destination: n});
    var m = Rr(t, function (S) {
        return S.descriptor.index === s
    });
    if (!m) return li({insideDestination: t, inHomeList: u, displacedBy: i, destination: n});
    var g = un(r, t), p = t.indexOf(m), b = g.slice(p),
        C = at({afterDragging: b, destination: n, displacedBy: i, last: l, viewport: o.frame, forceShouldAnimate: f});
    return {displaced: C, displacedBy: i, at: {type: "REORDER", destination: {droppableId: n.descriptor.id, index: s}}}
}

function Pr(e, r) {
    return Boolean(r.effected[e])
}

var _p = function (e) {
    var r = e.isMovingForward, t = e.destination, n = e.draggables, o = e.combine, i = e.afterCritical;
    if (!t.isCombineEnabled) return null;
    var l = o.draggableId, s = n[l], f = s.descriptor.index, u = Pr(l, i);
    return u ? r ? f : f - 1 : r ? f + 1 : f
}, Xp = function (e) {
    var r = e.isMovingForward, t = e.isInHomeList, n = e.insideDestination, o = e.location;
    if (!n.length) return null;
    var i = o.index, l = r ? i + 1 : i - 1, s = n[0].descriptor.index, f = n[n.length - 1].descriptor.index,
        u = t ? f : f + 1;
    return l < s || l > u ? null : l
}, Kp = function (e) {
    var r = e.isMovingForward, t = e.isInHomeList, n = e.draggable, o = e.draggables, i = e.destination,
        l = e.insideDestination, s = e.previousImpact, f = e.viewport, u = e.afterCritical, m = s.at;
    if (m || W(!1), m.type === "REORDER") {
        var g = Xp({isMovingForward: r, isInHomeList: t, location: m.destination, insideDestination: l});
        return g == null ? null : zt({
            draggable: n,
            insideDestination: l,
            destination: i,
            viewport: f,
            last: s.displaced,
            displacedBy: s.displacedBy,
            index: g
        })
    }
    var p = _p({
        isMovingForward: r,
        destination: i,
        displaced: s.displaced,
        draggables: o,
        combine: m.combine,
        afterCritical: u
    });
    return p == null ? null : zt({
        draggable: n,
        insideDestination: l,
        destination: i,
        viewport: f,
        last: s.displaced,
        displacedBy: s.displacedBy,
        index: p
    })
}, Yp = function (e) {
    var r = e.displaced, t = e.afterCritical, n = e.combineWith, o = e.displacedBy,
        i = Boolean(r.visible[n] || r.invisible[n]);
    return Pr(n, t) ? i ? $e : Hr(o.point) : i ? o.point : $e
}, Jp = function (e) {
    var r = e.afterCritical, t = e.impact, n = e.draggables, o = sn(t);
    o || W(!1);
    var i = o.draggableId, l = n[i].page.borderBox.center,
        s = Yp({displaced: t.displaced, afterCritical: r, combineWith: i, displacedBy: t.displacedBy});
    return je(l, s)
}, Sl = function (r, t) {
    return t.margin[r.start] + t.borderBox[r.size] / 2
}, Qp = function (r, t) {
    return t.margin[r.end] + t.borderBox[r.size] / 2
}, Ra = function (r, t, n) {
    return t[r.crossAxisStart] + n.margin[r.crossAxisStart] + n.borderBox[r.crossAxisSize] / 2
}, si = function (r) {
    var t = r.axis, n = r.moveRelativeTo, o = r.isMoving;
    return Mr(t.line, n.marginBox[t.end] + Sl(t, o), Ra(t, n.marginBox, o))
}, ui = function (r) {
    var t = r.axis, n = r.moveRelativeTo, o = r.isMoving;
    return Mr(t.line, n.marginBox[t.start] - Qp(t, o), Ra(t, n.marginBox, o))
}, Zp = function (r) {
    var t = r.axis, n = r.moveInto, o = r.isMoving;
    return Mr(t.line, n.contentBox[t.start] + Sl(t, o), Ra(t, n.contentBox, o))
}, ev = function (e) {
    var r = e.impact, t = e.draggable, n = e.draggables, o = e.droppable, i = e.afterCritical,
        l = zr(o.descriptor.id, n), s = t.page, f = o.axis;
    if (!l.length) return Zp({axis: f, moveInto: o.page, isMoving: s});
    var u = r.displaced, m = r.displacedBy, g = u.all[0];
    if (g) {
        var p = n[g];
        if (Pr(g, i)) return ui({axis: f, moveRelativeTo: p.page, isMoving: s});
        var b = Wt(p.page, m.point);
        return ui({axis: f, moveRelativeTo: b, isMoving: s})
    }
    var C = l[l.length - 1];
    if (C.descriptor.id === t.descriptor.id) return s.borderBox.center;
    if (Pr(C.descriptor.id, i)) {
        var S = Wt(C.page, Hr(i.displacedBy.point));
        return si({axis: f, moveRelativeTo: S, isMoving: s})
    }
    return si({axis: f, moveRelativeTo: C.page, isMoving: s})
}, Kn = function (e, r) {
    var t = e.frame;
    return t ? je(r, t.scroll.diff.displacement) : r
}, rv = function (r) {
    var t = r.impact, n = r.draggable, o = r.droppable, i = r.draggables, l = r.afterCritical,
        s = n.page.borderBox.center, f = t.at;
    return !o || !f ? s : f.type === "REORDER" ? ev({
        impact: t,
        draggable: n,
        draggables: i,
        droppable: o,
        afterCritical: l
    }) : Jp({impact: t, draggables: i, afterCritical: l})
}, cn = function (e) {
    var r = rv(e), t = e.droppable, n = t ? Kn(t, r) : r;
    return n
}, xl = function (e, r) {
    var t = Ze(r, e.scroll.initial), n = Hr(t),
        o = fr({top: r.y, bottom: r.y + e.frame.height, left: r.x, right: r.x + e.frame.width}), i = {
            frame: o,
            scroll: {initial: e.scroll.initial, max: e.scroll.max, current: r, diff: {value: t, displacement: n}}
        };
    return i
};

function ci(e, r) {
    return e.map(function (t) {
        return r[t]
    })
}

function tv(e, r) {
    for (var t = 0; t < r.length; t++) {
        var n = r[t].visible[e];
        if (n) return n
    }
    return null
}

var nv = function (e) {
    var r = e.impact, t = e.viewport, n = e.destination, o = e.draggables, i = e.maxScrollChange,
        l = xl(t, je(t.scroll.current, i)), s = n.frame ? Ca(n, je(n.frame.scroll.current, i)) : n, f = r.displaced,
        u = at({
            afterDragging: ci(f.all, o),
            destination: n,
            displacedBy: r.displacedBy,
            viewport: l.frame,
            last: f,
            forceShouldAnimate: !1
        }), m = at({
            afterDragging: ci(f.all, o),
            destination: s,
            displacedBy: r.displacedBy,
            viewport: t.frame,
            last: f,
            forceShouldAnimate: !1
        }), g = {}, p = {}, b = [f, u, m];
    f.all.forEach(function (S) {
        var P = tv(S, b);
        if (P) {
            p[S] = P;
            return
        }
        g[S] = !0
    });
    var C = ne({}, r, {displaced: {all: f.all, invisible: g, visible: p}});
    return C
}, av = function (e, r) {
    return je(e.scroll.diff.displacement, r)
}, Da = function (e) {
    var r = e.pageBorderBoxCenter, t = e.draggable, n = e.viewport, o = av(n, r), i = Ze(o, t.page.borderBox.center);
    return je(t.client.borderBox.center, i)
}, Il = function (e) {
    var r = e.draggable, t = e.destination, n = e.newPageBorderBoxCenter, o = e.viewport,
        i = e.withDroppableDisplacement, l = e.onlyOnMainAxis, s = l === void 0 ? !1 : l,
        f = Ze(n, r.page.borderBox.center), u = mt(r.page.borderBox, f),
        m = {target: u, destination: t, withDroppableDisplacement: i, viewport: o};
    return s ? jp(m) : Cl(m)
}, ov = function (e) {
    var r = e.isMovingForward, t = e.draggable, n = e.destination, o = e.draggables, i = e.previousImpact,
        l = e.viewport, s = e.previousPageBorderBoxCenter, f = e.previousClientSelection, u = e.afterCritical;
    if (!n.isEnabled) return null;
    var m = zr(n.descriptor.id, o), g = jr(t, n), p = Fp({
        isMovingForward: r,
        draggable: t,
        destination: n,
        insideDestination: m,
        previousImpact: i
    }) || Kp({
        isMovingForward: r,
        isInHomeList: g,
        draggable: t,
        draggables: o,
        destination: n,
        insideDestination: m,
        previousImpact: i,
        viewport: l,
        afterCritical: u
    });
    if (!p) return null;
    var b = cn({impact: p, draggable: t, droppable: n, draggables: o, afterCritical: u}), C = Il({
        draggable: t,
        destination: n,
        newPageBorderBoxCenter: b,
        viewport: l.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0
    });
    if (C) {
        var S = Da({pageBorderBoxCenter: b, draggable: t, viewport: l});
        return {clientSelection: S, impact: p, scrollJumpRequest: null}
    }
    var P = Ze(b, s), D = nv({impact: p, viewport: l, destination: n, draggables: o, maxScrollChange: P});
    return {clientSelection: f, impact: D, scrollJumpRequest: P}
}, Xe = function (r) {
    var t = r.subject.active;
    return t || W(!1), t
}, iv = function (e) {
    var r = e.isMovingForward, t = e.pageBorderBoxCenter, n = e.source, o = e.droppables, i = e.viewport,
        l = n.subject.active;
    if (!l) return null;
    var s = n.axis, f = sr(l[s.start], l[s.end]), u = ln(o).filter(function (g) {
        return g !== n
    }).filter(function (g) {
        return g.isEnabled
    }).filter(function (g) {
        return Boolean(g.subject.active)
    }).filter(function (g) {
        return yl(i.frame)(Xe(g))
    }).filter(function (g) {
        var p = Xe(g);
        return r ? l[s.crossAxisEnd] < p[s.crossAxisEnd] : p[s.crossAxisStart] < l[s.crossAxisStart]
    }).filter(function (g) {
        var p = Xe(g), b = sr(p[s.start], p[s.end]);
        return f(p[s.start]) || f(p[s.end]) || b(l[s.start]) || b(l[s.end])
    }).sort(function (g, p) {
        var b = Xe(g)[s.crossAxisStart], C = Xe(p)[s.crossAxisStart];
        return r ? b - C : C - b
    }).filter(function (g, p, b) {
        return Xe(g)[s.crossAxisStart] === Xe(b[0])[s.crossAxisStart]
    });
    if (!u.length) return null;
    if (u.length === 1) return u[0];
    var m = u.filter(function (g) {
        var p = sr(Xe(g)[s.start], Xe(g)[s.end]);
        return p(t[s.line])
    });
    return m.length === 1 ? m[0] : m.length > 1 ? m.sort(function (g, p) {
        return Xe(g)[s.start] - Xe(p)[s.start]
    })[0] : u.sort(function (g, p) {
        var b = oi(t, ii(Xe(g))), C = oi(t, ii(Xe(p)));
        return b !== C ? b - C : Xe(g)[s.start] - Xe(p)[s.start]
    })[0]
}, di = function (r, t) {
    var n = r.page.borderBox.center;
    return Pr(r.descriptor.id, t) ? Ze(n, t.displacedBy.point) : n
}, lv = function (r, t) {
    var n = r.page.borderBox;
    return Pr(r.descriptor.id, t) ? mt(n, Hr(t.displacedBy.point)) : n
}, sv = function (e) {
    var r = e.pageBorderBoxCenter, t = e.viewport, n = e.destination, o = e.insideDestination, i = e.afterCritical,
        l = o.filter(function (s) {
            return Cl({target: lv(s, i), destination: n, viewport: t.frame, withDroppableDisplacement: !0})
        }).sort(function (s, f) {
            var u = tt(r, Kn(n, di(s, i))), m = tt(r, Kn(n, di(f, i)));
            return u < m ? -1 : m < u ? 1 : s.descriptor.index - f.descriptor.index
        });
    return l[0] || null
}, ht = ke(function (r, t) {
    var n = t[r.line];
    return {value: n, point: Mr(r.line, n)}
}), uv = function (r, t, n) {
    var o = r.axis;
    if (r.descriptor.mode === "virtual") return Mr(o.line, t[o.line]);
    var i = r.subject.page.contentBox[o.size], l = zr(r.descriptor.id, n), s = l.reduce(function (m, g) {
        return m + g.client.marginBox[o.size]
    }, 0), f = s + t[o.line], u = f - i;
    return u <= 0 ? null : Mr(o.line, u)
}, Pl = function (r, t) {
    return ne({}, r, {scroll: ne({}, r.scroll, {max: t})})
}, Rl = function (r, t, n) {
    var o = r.frame;
    jr(t, r) && W(!1), r.subject.withPlaceholder && W(!1);
    var i = ht(r.axis, t.displaceBy).point, l = uv(r, i, n),
        s = {placeholderSize: i, increasedBy: l, oldFrameMaxScroll: r.frame ? r.frame.scroll.max : null};
    if (!o) {
        var f = Gr({page: r.subject.page, withPlaceholder: s, axis: r.axis, frame: r.frame});
        return ne({}, r, {subject: f})
    }
    var u = l ? je(o.scroll.max, l) : o.scroll.max, m = Pl(o, u),
        g = Gr({page: r.subject.page, withPlaceholder: s, axis: r.axis, frame: m});
    return ne({}, r, {subject: g, frame: m})
}, cv = function (r) {
    var t = r.subject.withPlaceholder;
    t || W(!1);
    var n = r.frame;
    if (!n) {
        var o = Gr({page: r.subject.page, axis: r.axis, frame: null, withPlaceholder: null});
        return ne({}, r, {subject: o})
    }
    var i = t.oldFrameMaxScroll;
    i || W(!1);
    var l = Pl(n, i), s = Gr({page: r.subject.page, axis: r.axis, frame: l, withPlaceholder: null});
    return ne({}, r, {subject: s, frame: l})
}, dv = function (e) {
    var r = e.previousPageBorderBoxCenter, t = e.moveRelativeTo, n = e.insideDestination, o = e.draggable,
        i = e.draggables, l = e.destination, s = e.viewport, f = e.afterCritical;
    if (!t) {
        if (n.length) return null;
        var u = {
                displaced: nt,
                displacedBy: bl,
                at: {type: "REORDER", destination: {droppableId: l.descriptor.id, index: 0}}
            }, m = cn({impact: u, draggable: o, droppable: l, draggables: i, afterCritical: f}),
            g = jr(o, l) ? l : Rl(l, o, i), p = Il({
                draggable: o,
                destination: g,
                newPageBorderBoxCenter: m,
                viewport: s.frame,
                withDroppableDisplacement: !1,
                onlyOnMainAxis: !0
            });
        return p ? u : null
    }
    var b = Boolean(r[l.axis.line] <= t.page.borderBox.center[l.axis.line]), C = function () {
        var P = t.descriptor.index;
        return t.descriptor.id === o.descriptor.id || b ? P : P + 1
    }(), S = ht(l.axis, o.displaceBy);
    return zt({draggable: o, insideDestination: n, destination: l, viewport: s, displacedBy: S, last: nt, index: C})
}, fv = function (e) {
    var r = e.isMovingForward, t = e.previousPageBorderBoxCenter, n = e.draggable, o = e.isOver, i = e.draggables,
        l = e.droppables, s = e.viewport, f = e.afterCritical,
        u = iv({isMovingForward: r, pageBorderBoxCenter: t, source: o, droppables: l, viewport: s});
    if (!u) return null;
    var m = zr(u.descriptor.id, i),
        g = sv({pageBorderBoxCenter: t, viewport: s, destination: u, insideDestination: m, afterCritical: f}), p = dv({
            previousPageBorderBoxCenter: t,
            destination: u,
            draggable: n,
            draggables: i,
            moveRelativeTo: g,
            insideDestination: m,
            viewport: s,
            afterCritical: f
        });
    if (!p) return null;
    var b = cn({impact: p, draggable: n, droppable: u, draggables: i, afterCritical: f}),
        C = Da({pageBorderBoxCenter: b, draggable: n, viewport: s});
    return {clientSelection: C, impact: p, scrollJumpRequest: null}
}, er = function (e) {
    var r = e.at;
    return r ? r.type === "REORDER" ? r.destination.droppableId : r.combine.droppableId : null
}, pv = function (r, t) {
    var n = er(r);
    return n ? t[n] : null
}, vv = function (e) {
    var r = e.state, t = e.type, n = pv(r.impact, r.dimensions.droppables), o = Boolean(n),
        i = r.dimensions.droppables[r.critical.droppable.id], l = n || i, s = l.axis.direction,
        f = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
    if (f && !o) return null;
    var u = t === "MOVE_DOWN" || t === "MOVE_RIGHT", m = r.dimensions.draggables[r.critical.draggable.id],
        g = r.current.page.borderBoxCenter, p = r.dimensions, b = p.draggables, C = p.droppables;
    return f ? ov({
        isMovingForward: u,
        previousPageBorderBoxCenter: g,
        draggable: m,
        destination: l,
        draggables: b,
        viewport: r.viewport,
        previousClientSelection: r.current.client.selection,
        previousImpact: r.impact,
        afterCritical: r.afterCritical
    }) : fv({
        isMovingForward: u,
        previousPageBorderBoxCenter: g,
        draggable: m,
        isOver: l,
        draggables: b,
        droppables: C,
        viewport: r.viewport,
        afterCritical: r.afterCritical
    })
};

function Tr(e) {
    return e.phase === "DRAGGING" || e.phase === "COLLECTING"
}

function Dl(e) {
    var r = sr(e.top, e.bottom), t = sr(e.left, e.right);
    return function (o) {
        return r(o.y) && t(o.x)
    }
}

function gv(e, r) {
    return e.left < r.right && e.right > r.left && e.top < r.bottom && e.bottom > r.top
}

function mv(e) {
    var r = e.pageBorderBox, t = e.draggable, n = e.candidates, o = t.page.borderBox.center, i = n.map(function (l) {
        var s = l.axis, f = Mr(l.axis.line, r.center[s.line], l.page.borderBox.center[s.crossAxisLine]);
        return {id: l.descriptor.id, distance: tt(o, f)}
    }).sort(function (l, s) {
        return s.distance - l.distance
    });
    return i[0] ? i[0].id : null
}

function hv(e) {
    var r = e.pageBorderBox, t = e.draggable, n = e.droppables, o = ln(n).filter(function (i) {
        if (!i.isEnabled) return !1;
        var l = i.subject.active;
        if (!l || !gv(r, l)) return !1;
        if (Dl(l)(r.center)) return !0;
        var s = i.axis, f = l.center[s.crossAxisLine], u = r[s.crossAxisStart], m = r[s.crossAxisEnd],
            g = sr(l[s.crossAxisStart], l[s.crossAxisEnd]), p = g(u), b = g(m);
        return !p && !b ? !0 : p ? u < f : m > f
    });
    return o.length ? o.length === 1 ? o[0].descriptor.id : mv({pageBorderBox: r, draggable: t, candidates: o}) : null
}

var El = function (r, t) {
    return fr(mt(r, t))
}, bv = function (e, r) {
    var t = e.frame;
    return t ? El(r, t.scroll.diff.value) : r
};

function Bl(e) {
    var r = e.displaced, t = e.id;
    return Boolean(r.visible[t] || r.invisible[t])
}

function yv(e) {
    var r = e.draggable, t = e.closest, n = e.inHomeList;
    return t ? n && t.descriptor.index > r.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null
}

var wv = function (e) {
    var r = e.pageBorderBoxWithDroppableScroll, t = e.draggable, n = e.destination, o = e.insideDestination, i = e.last,
        l = e.viewport, s = e.afterCritical, f = n.axis, u = ht(n.axis, t.displaceBy), m = u.value, g = r[f.start],
        p = r[f.end], b = un(t, o), C = Rr(b, function (P) {
            var D = P.descriptor.id, B = P.page.borderBox.center[f.line], O = Pr(D, s), A = Bl({displaced: i, id: D});
            return O ? A ? p <= B : g < B - m : A ? p <= B + m : g < B
        }), S = yv({draggable: t, closest: C, inHomeList: jr(t, n)});
    return zt({draggable: t, insideDestination: o, destination: n, viewport: l, last: i, displacedBy: u, index: S})
}, Cv = 4, Sv = function (e) {
    var r = e.draggable, t = e.pageBorderBoxWithDroppableScroll, n = e.previousImpact, o = e.destination,
        i = e.insideDestination, l = e.afterCritical;
    if (!o.isCombineEnabled) return null;
    var s = o.axis, f = ht(o.axis, r.displaceBy), u = f.value, m = t[s.start], g = t[s.end], p = un(r, i),
        b = Rr(p, function (S) {
            var P = S.descriptor.id, D = S.page.borderBox, B = D[s.size], O = B / Cv, A = Pr(P, l),
                k = Bl({displaced: n.displaced, id: P});
            return A ? k ? g > D[s.start] + O && g < D[s.end] - O : m > D[s.start] - u + O && m < D[s.end] - u - O : k ? g > D[s.start] + u + O && g < D[s.end] + u - O : m > D[s.start] + O && m < D[s.end] - O
        });
    if (!b) return null;
    var C = {
        displacedBy: f,
        displaced: n.displaced,
        at: {type: "COMBINE", combine: {draggableId: b.descriptor.id, droppableId: o.descriptor.id}}
    };
    return C
}, Ol = function (e) {
    var r = e.pageOffset, t = e.draggable, n = e.draggables, o = e.droppables, i = e.previousImpact, l = e.viewport,
        s = e.afterCritical, f = El(t.page.borderBox, r), u = hv({pageBorderBox: f, draggable: t, droppables: o});
    if (!u) return Lp;
    var m = o[u], g = zr(m.descriptor.id, n), p = bv(m, f);
    return Sv({
        pageBorderBoxWithDroppableScroll: p,
        draggable: t,
        previousImpact: i,
        destination: m,
        insideDestination: g,
        afterCritical: s
    }) || wv({
        pageBorderBoxWithDroppableScroll: p,
        draggable: t,
        destination: m,
        insideDestination: g,
        last: i.displaced,
        viewport: l,
        afterCritical: s
    })
}, Ea = function (e, r) {
    var t;
    return ne({}, e, (t = {}, t[r.descriptor.id] = r, t))
}, xv = function (r) {
    var t = r.previousImpact, n = r.impact, o = r.droppables, i = er(t), l = er(n);
    if (!i || i === l) return o;
    var s = o[i];
    if (!s.subject.withPlaceholder) return o;
    var f = cv(s);
    return Ea(o, f)
}, Iv = function (e) {
    var r = e.draggable, t = e.draggables, n = e.droppables, o = e.previousImpact, i = e.impact,
        l = xv({previousImpact: o, impact: i, droppables: n}), s = er(i);
    if (!s) return l;
    var f = n[s];
    if (jr(r, f) || f.subject.withPlaceholder) return l;
    var u = Rl(f, r, t);
    return Ea(l, u)
}, Jr = function (e) {
    var r = e.state, t = e.clientSelection, n = e.dimensions, o = e.viewport, i = e.impact, l = e.scrollJumpRequest,
        s = o || r.viewport, f = n || r.dimensions, u = t || r.current.client.selection,
        m = Ze(u, r.initial.client.selection),
        g = {offset: m, selection: u, borderBoxCenter: je(r.initial.client.borderBoxCenter, m)}, p = {
            selection: je(g.selection, s.scroll.current),
            borderBoxCenter: je(g.borderBoxCenter, s.scroll.current),
            offset: je(g.offset, s.scroll.diff.value)
        }, b = {client: g, page: p};
    if (r.phase === "COLLECTING") return ne({phase: "COLLECTING"}, r, {dimensions: f, viewport: s, current: b});
    var C = f.draggables[r.critical.draggable.id], S = i || Ol({
            pageOffset: p.offset,
            draggable: C,
            draggables: f.draggables,
            droppables: f.droppables,
            previousImpact: r.impact,
            viewport: s,
            afterCritical: r.afterCritical
        }), P = Iv({draggable: C, impact: S, previousImpact: r.impact, draggables: f.draggables, droppables: f.droppables}),
        D = ne({}, r, {
            current: b,
            dimensions: {draggables: f.draggables, droppables: P},
            impact: S,
            viewport: s,
            scrollJumpRequest: l || null,
            forceShouldAnimate: l ? !1 : null
        });
    return D
};

function Pv(e, r) {
    return e.map(function (t) {
        return r[t]
    })
}

var Al = function (e) {
    var r = e.impact, t = e.viewport, n = e.draggables, o = e.destination, i = e.forceShouldAnimate, l = r.displaced,
        s = Pv(l.all, n), f = at({
            afterDragging: s,
            destination: o,
            displacedBy: r.displacedBy,
            viewport: t.frame,
            forceShouldAnimate: i,
            last: l
        });
    return ne({}, r, {displaced: f})
}, Tl = function (e) {
    var r = e.impact, t = e.draggable, n = e.droppable, o = e.draggables, i = e.viewport, l = e.afterCritical,
        s = cn({impact: r, draggable: t, draggables: o, droppable: n, afterCritical: l});
    return Da({pageBorderBoxCenter: s, draggable: t, viewport: i})
}, Ml = function (e) {
    var r = e.state, t = e.dimensions, n = e.viewport;
    r.movementMode !== "SNAP" && W(!1);
    var o = r.impact, i = n || r.viewport, l = t || r.dimensions, s = l.draggables, f = l.droppables,
        u = s[r.critical.draggable.id], m = er(o);
    m || W(!1);
    var g = f[m], p = Al({impact: o, viewport: i, destination: g, draggables: s}),
        b = Tl({impact: p, draggable: u, droppable: g, draggables: s, viewport: i, afterCritical: r.afterCritical});
    return Jr({impact: p, clientSelection: b, state: r, dimensions: l, viewport: i})
}, Rv = function (e) {
    return {index: e.index, droppableId: e.droppableId}
}, Nl = function (e) {
    var r = e.draggable, t = e.home, n = e.draggables, o = e.viewport, i = ht(t.axis, r.displaceBy),
        l = zr(t.descriptor.id, n), s = l.indexOf(r);
    s === -1 && W(!1);
    var f = l.slice(s + 1), u = f.reduce(function (b, C) {
        return b[C.descriptor.id] = !0, b
    }, {}), m = {inVirtualList: t.descriptor.mode === "virtual", displacedBy: i, effected: u}, g = at({
        afterDragging: f,
        destination: t,
        displacedBy: i,
        last: null,
        viewport: o.frame,
        forceShouldAnimate: !1
    }), p = {displaced: g, displacedBy: i, at: {type: "REORDER", destination: Rv(r.descriptor)}};
    return {impact: p, afterCritical: m}
}, Dv = function (e, r) {
    return {draggables: e.draggables, droppables: Ea(e.droppables, r)}
}, Ev = function (e) {
    var r = e.draggable, t = e.offset, n = e.initialWindowScroll, o = Wt(r.client, t), i = Gt(o, n),
        l = ne({}, r, {placeholder: ne({}, r.placeholder, {client: o}), client: o, page: i});
    return l
}, Bv = function (e) {
    var r = e.frame;
    return r || W(!1), r
}, Ov = function (e) {
    var r = e.additions, t = e.updatedDroppables, n = e.viewport, o = n.scroll.diff.value;
    return r.map(function (i) {
        var l = i.descriptor.droppableId, s = t[l], f = Bv(s), u = f.scroll.diff.value, m = je(o, u),
            g = Ev({draggable: i, offset: m, initialWindowScroll: n.scroll.initial});
        return g
    })
}, Av = function (e) {
    var r = e.state, t = e.published, n = t.modified.map(function (O) {
            var A = r.dimensions.droppables[O.droppableId], k = Ca(A, O.scroll);
            return k
        }), o = ne({}, r.dimensions.droppables, {}, ml(n)),
        i = hl(Ov({additions: t.additions, updatedDroppables: o, viewport: r.viewport})),
        l = ne({}, r.dimensions.draggables, {}, i);
    t.removals.forEach(function (O) {
        delete l[O]
    });
    var s = {droppables: o, draggables: l}, f = er(r.impact), u = f ? s.droppables[f] : null,
        m = s.draggables[r.critical.draggable.id], g = s.droppables[r.critical.droppable.id],
        p = Nl({draggable: m, home: g, draggables: l, viewport: r.viewport}), b = p.impact, C = p.afterCritical,
        S = u && u.isCombineEnabled ? r.impact : b, P = Ol({
            pageOffset: r.current.page.offset,
            draggable: s.draggables[r.critical.draggable.id],
            draggables: s.draggables,
            droppables: s.droppables,
            previousImpact: S,
            viewport: r.viewport,
            afterCritical: C
        }), D = ne({phase: "DRAGGING"}, r, {
            phase: "DRAGGING",
            impact: P,
            onLiftImpact: b,
            dimensions: s,
            afterCritical: C,
            forceShouldAnimate: !1
        });
    if (r.phase === "COLLECTING") return D;
    var B = ne({phase: "DROP_PENDING"}, D, {phase: "DROP_PENDING", reason: r.reason, isWaiting: !1});
    return B
}, Yn = function (r) {
    return r.movementMode === "SNAP"
}, Bn = function (r, t, n) {
    var o = Dv(r.dimensions, t);
    return !Yn(r) || n ? Jr({state: r, dimensions: o}) : Ml({state: r, dimensions: o})
};

function On(e) {
    return e.isDragging && e.movementMode === "SNAP" ? ne({phase: "DRAGGING"}, e, {scrollJumpRequest: null}) : e
}

var fi = {phase: "IDLE", completed: null, shouldFlush: !1}, Tv = function (e, r) {
        if (e === void 0 && (e = fi), r.type === "FLUSH") return ne({}, fi, {shouldFlush: !0});
        if (r.type === "INITIAL_PUBLISH") {
            e.phase !== "IDLE" && W(!1);
            var t = r.payload, n = t.critical, o = t.clientSelection, i = t.viewport, l = t.dimensions, s = t.movementMode,
                f = l.draggables[n.draggable.id], u = l.droppables[n.droppable.id],
                m = {selection: o, borderBoxCenter: f.client.borderBox.center, offset: $e}, g = {
                    client: m,
                    page: {
                        selection: je(m.selection, i.scroll.initial),
                        borderBoxCenter: je(m.selection, i.scroll.initial),
                        offset: je(m.selection, i.scroll.diff.value)
                    }
                }, p = ln(l.droppables).every(function (xe) {
                    return !xe.isFixedOnPage
                }), b = Nl({draggable: f, home: u, draggables: l.draggables, viewport: i}), C = b.impact, S = b.afterCritical,
                P = {
                    phase: "DRAGGING",
                    isDragging: !0,
                    critical: n,
                    movementMode: s,
                    dimensions: l,
                    initial: g,
                    current: g,
                    isWindowScrollAllowed: p,
                    impact: C,
                    afterCritical: S,
                    onLiftImpact: C,
                    viewport: i,
                    scrollJumpRequest: null,
                    forceShouldAnimate: null
                };
            return P
        }
        if (r.type === "COLLECTION_STARTING") {
            if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
            e.phase !== "DRAGGING" && W(!1);
            var D = ne({phase: "COLLECTING"}, e, {phase: "COLLECTING"});
            return D
        }
        if (r.type === "PUBLISH_WHILE_DRAGGING") return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || W(!1), Av({
            state: e,
            published: r.payload
        });
        if (r.type === "MOVE") {
            if (e.phase === "DROP_PENDING") return e;
            Tr(e) || W(!1);
            var B = r.payload.client;
            return Sr(B, e.current.client.selection) ? e : Jr({
                state: e,
                clientSelection: B,
                impact: Yn(e) ? e.impact : null
            })
        }
        if (r.type === "UPDATE_DROPPABLE_SCROLL") {
            if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING") return On(e);
            Tr(e) || W(!1);
            var O = r.payload, A = O.id, k = O.newScroll, j = e.dimensions.droppables[A];
            if (!j) return e;
            var J = Ca(j, k);
            return Bn(e, J, !1)
        }
        if (r.type === "UPDATE_DROPPABLE_IS_ENABLED") {
            if (e.phase === "DROP_PENDING") return e;
            Tr(e) || W(!1);
            var fe = r.payload, le = fe.id, be = fe.isEnabled, pe = e.dimensions.droppables[le];
            pe || W(!1), pe.isEnabled === be && W(!1);
            var Le = ne({}, pe, {isEnabled: be});
            return Bn(e, Le, !0)
        }
        if (r.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
            if (e.phase === "DROP_PENDING") return e;
            Tr(e) || W(!1);
            var H = r.payload, V = H.id, se = H.isCombineEnabled, Ie = e.dimensions.droppables[V];
            Ie || W(!1), Ie.isCombineEnabled === se && W(!1);
            var Se = ne({}, Ie, {isCombineEnabled: se});
            return Bn(e, Se, !0)
        }
        if (r.type === "MOVE_BY_WINDOW_SCROLL") {
            if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING") return e;
            Tr(e) || W(!1), e.isWindowScrollAllowed || W(!1);
            var we = r.payload.newScroll;
            if (Sr(e.viewport.scroll.current, we)) return On(e);
            var Ee = xl(e.viewport, we);
            return Yn(e) ? Ml({state: e, viewport: Ee}) : Jr({state: e, viewport: Ee})
        }
        if (r.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
            if (!Tr(e)) return e;
            var De = r.payload.maxScroll;
            if (Sr(De, e.viewport.scroll.max)) return e;
            var Oe = ne({}, e.viewport, {scroll: ne({}, e.viewport.scroll, {max: De})});
            return ne({phase: "DRAGGING"}, e, {viewport: Oe})
        }
        if (r.type === "MOVE_UP" || r.type === "MOVE_DOWN" || r.type === "MOVE_LEFT" || r.type === "MOVE_RIGHT") {
            if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING") return e;
            e.phase !== "DRAGGING" && W(!1);
            var Fe = vv({state: e, type: r.type});
            return Fe ? Jr({
                state: e,
                impact: Fe.impact,
                clientSelection: Fe.clientSelection,
                scrollJumpRequest: Fe.scrollJumpRequest
            }) : e
        }
        if (r.type === "DROP_PENDING") {
            var ur = r.payload.reason;
            e.phase !== "COLLECTING" && W(!1);
            var Ve = ne({phase: "DROP_PENDING"}, e, {phase: "DROP_PENDING", isWaiting: !0, reason: ur});
            return Ve
        }
        if (r.type === "DROP_ANIMATE") {
            var Ae = r.payload, We = Ae.completed, cr = Ae.dropDuration, nr = Ae.newHomeClientOffset;
            e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || W(!1);
            var dr = {
                phase: "DROP_ANIMATING",
                completed: We,
                dropDuration: cr,
                newHomeClientOffset: nr,
                dimensions: e.dimensions
            };
            return dr
        }
        if (r.type === "DROP_COMPLETE") {
            var Ke = r.payload.completed;
            return {phase: "IDLE", completed: Ke, shouldFlush: !1}
        }
        return e
    }, Mv = function (r) {
        return {type: "BEFORE_INITIAL_CAPTURE", payload: r}
    }, Nv = function (r) {
        return {type: "LIFT", payload: r}
    }, Fv = function (r) {
        return {type: "INITIAL_PUBLISH", payload: r}
    }, Lv = function (r) {
        return {type: "PUBLISH_WHILE_DRAGGING", payload: r}
    }, Wv = function () {
        return {type: "COLLECTION_STARTING", payload: null}
    }, Gv = function (r) {
        return {type: "UPDATE_DROPPABLE_SCROLL", payload: r}
    }, kv = function (r) {
        return {type: "UPDATE_DROPPABLE_IS_ENABLED", payload: r}
    }, $v = function (r) {
        return {type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: r}
    }, Fl = function (r) {
        return {type: "MOVE", payload: r}
    }, Hv = function (r) {
        return {type: "MOVE_BY_WINDOW_SCROLL", payload: r}
    }, zv = function (r) {
        return {type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: r}
    }, jv = function () {
        return {type: "MOVE_UP", payload: null}
    }, Vv = function () {
        return {type: "MOVE_DOWN", payload: null}
    }, Uv = function () {
        return {type: "MOVE_RIGHT", payload: null}
    }, qv = function () {
        return {type: "MOVE_LEFT", payload: null}
    }, Ba = function () {
        return {type: "FLUSH", payload: null}
    }, _v = function (r) {
        return {type: "DROP_ANIMATE", payload: r}
    }, Oa = function (r) {
        return {type: "DROP_COMPLETE", payload: r}
    }, Ll = function (r) {
        return {type: "DROP", payload: r}
    }, Xv = function (r) {
        return {type: "DROP_PENDING", payload: r}
    }, Wl = function () {
        return {type: "DROP_ANIMATION_FINISHED", payload: null}
    }, Kv = function (e) {
        return function (r) {
            var t = r.getState, n = r.dispatch;
            return function (o) {
                return function (i) {
                    if (i.type !== "LIFT") {
                        o(i);
                        return
                    }
                    var l = i.payload, s = l.id, f = l.clientSelection, u = l.movementMode, m = t();
                    m.phase === "DROP_ANIMATING" && n(Oa({completed: m.completed})), t().phase !== "IDLE" && W(!1), n(Ba()), n(Mv({
                        draggableId: s,
                        movementMode: u
                    }));
                    var g = {shouldPublishImmediately: u === "SNAP"}, p = {draggableId: s, scrollOptions: g},
                        b = e.startPublishing(p), C = b.critical, S = b.dimensions, P = b.viewport;
                    n(Fv({critical: C, dimensions: S, clientSelection: f, movementMode: u, viewport: P}))
                }
            }
        }
    }, Yv = function (e) {
        return function () {
            return function (r) {
                return function (t) {
                    t.type === "INITIAL_PUBLISH" && e.dragging(), t.type === "DROP_ANIMATE" && e.dropping(t.payload.completed.result.reason), (t.type === "FLUSH" || t.type === "DROP_COMPLETE") && e.resting(), r(t)
                }
            }
        }
    }, Aa = {outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)", drop: "cubic-bezier(.2,1,.1,1)"},
    ot = {opacity: {drop: 0, combining: .7}, scale: {drop: .75}},
    Ta = {outOfTheWay: .2, minDropTime: .33, maxDropTime: .55}, Ar = Ta.outOfTheWay + "s " + Aa.outOfTheWay, Qr = {
        fluid: "opacity " + Ar, snap: "transform " + Ar + ", opacity " + Ar, drop: function (r) {
            var t = r + "s " + Aa.drop;
            return "transform " + t + ", opacity " + t
        }, outOfTheWay: "transform " + Ar, placeholder: "height " + Ar + ", width " + Ar + ", margin " + Ar
    }, pi = function (r) {
        return Sr(r, $e) ? null : "translate(" + r.x + "px, " + r.y + "px)"
    }, Jn = {
        moveTo: pi, drop: function (r, t) {
            var n = pi(r);
            return n ? t ? n + " scale(" + ot.scale.drop + ")" : n : null
        }
    }, Qn = Ta.minDropTime, Gl = Ta.maxDropTime, Jv = Gl - Qn, vi = 1500, Qv = .6, Zv = function (e) {
        var r = e.current, t = e.destination, n = e.reason, o = tt(r, t);
        if (o <= 0) return Qn;
        if (o >= vi) return Gl;
        var i = o / vi, l = Qn + Jv * i, s = n === "CANCEL" ? l * Qv : l;
        return Number(s.toFixed(2))
    }, eg = function (e) {
        var r = e.impact, t = e.draggable, n = e.dimensions, o = e.viewport, i = e.afterCritical, l = n.draggables,
            s = n.droppables, f = er(r), u = f ? s[f] : null, m = s[t.descriptor.droppableId],
            g = Tl({impact: r, draggable: t, draggables: l, afterCritical: i, droppable: u || m, viewport: o}),
            p = Ze(g, t.client.borderBox.center);
        return p
    }, rg = function (e) {
        var r = e.draggables, t = e.reason, n = e.lastImpact, o = e.home, i = e.viewport, l = e.onLiftImpact;
        if (!n.at || t !== "DROP") {
            var s = Al({draggables: r, impact: l, destination: o, viewport: i, forceShouldAnimate: !0});
            return {impact: s, didDropInsideDroppable: !1}
        }
        if (n.at.type === "REORDER") return {impact: n, didDropInsideDroppable: !0};
        var f = ne({}, n, {displaced: nt});
        return {impact: f, didDropInsideDroppable: !0}
    }, tg = function (e) {
        var r = e.getState, t = e.dispatch;
        return function (n) {
            return function (o) {
                if (o.type !== "DROP") {
                    n(o);
                    return
                }
                var i = r(), l = o.payload.reason;
                if (i.phase === "COLLECTING") {
                    t(Xv({reason: l}));
                    return
                }
                if (i.phase !== "IDLE") {
                    var s = i.phase === "DROP_PENDING" && i.isWaiting;
                    s && W(!1), i.phase === "DRAGGING" || i.phase === "DROP_PENDING" || W(!1);
                    var f = i.critical, u = i.dimensions, m = u.draggables[i.critical.draggable.id], g = rg({
                            reason: l,
                            lastImpact: i.impact,
                            afterCritical: i.afterCritical,
                            onLiftImpact: i.onLiftImpact,
                            home: i.dimensions.droppables[i.critical.droppable.id],
                            viewport: i.viewport,
                            draggables: i.dimensions.draggables
                        }), p = g.impact, b = g.didDropInsideDroppable, C = b ? xa(p) : null, S = b ? sn(p) : null,
                        P = {index: f.draggable.index, droppableId: f.droppable.id}, D = {
                            draggableId: m.descriptor.id,
                            type: m.descriptor.type,
                            source: P,
                            reason: l,
                            mode: i.movementMode,
                            destination: C,
                            combine: S
                        }, B = eg({
                            impact: p,
                            draggable: m,
                            dimensions: u,
                            viewport: i.viewport,
                            afterCritical: i.afterCritical
                        }), O = {critical: i.critical, afterCritical: i.afterCritical, result: D, impact: p},
                        A = !Sr(i.current.client.offset, B) || Boolean(D.combine);
                    if (!A) {
                        t(Oa({completed: O}));
                        return
                    }
                    var k = Zv({current: i.current.client.offset, destination: B, reason: l}),
                        j = {newHomeClientOffset: B, dropDuration: k, completed: O};
                    t(_v(j))
                }
            }
        }
    }, kl = function () {
        return {x: window.pageXOffset, y: window.pageYOffset}
    };

function ng(e) {
    return {
        eventName: "scroll", options: {passive: !0, capture: !1}, fn: function (t) {
            t.target !== window && t.target !== window.document || e()
        }
    }
}

function ag(e) {
    var r = e.onWindowScroll;

    function t() {
        r(kl())
    }

    var n = rt(t), o = ng(n), i = Cr;

    function l() {
        return i !== Cr
    }

    function s() {
        l() && W(!1), i = lr(window, [o])
    }

    function f() {
        l() || W(!1), n.cancel(), i(), i = Cr
    }

    return {start: s, stop: f, isActive: l}
}

var og = function (r) {
    return r.type === "DROP_COMPLETE" || r.type === "DROP_ANIMATE" || r.type === "FLUSH"
}, ig = function (e) {
    var r = ag({
        onWindowScroll: function (n) {
            e.dispatch(Hv({newScroll: n}))
        }
    });
    return function (t) {
        return function (n) {
            !r.isActive() && n.type === "INITIAL_PUBLISH" && r.start(), r.isActive() && og(n) && r.stop(), t(n)
        }
    }
}, lg = function (e) {
    var r = !1, t = !1, n = setTimeout(function () {
        t = !0
    }), o = function (l) {
        r || t || (r = !0, e(l), clearTimeout(n))
    };
    return o.wasCalled = function () {
        return r
    }, o
}, sg = function () {
    var e = [], r = function (i) {
        var l = Sa(e, function (u) {
            return u.timerId === i
        });
        l === -1 && W(!1);
        var s = e.splice(l, 1), f = s[0];
        f.callback()
    }, t = function (i) {
        var l = setTimeout(function () {
            return r(l)
        }), s = {timerId: l, callback: i};
        e.push(s)
    }, n = function () {
        if (e.length) {
            var i = [].concat(e);
            e.length = 0, i.forEach(function (l) {
                clearTimeout(l.timerId), l.callback()
            })
        }
    };
    return {add: t, flush: n}
}, ug = function (r, t) {
    return r == null && t == null ? !0 : r == null || t == null ? !1 : r.droppableId === t.droppableId && r.index === t.index
}, cg = function (r, t) {
    return r == null && t == null ? !0 : r == null || t == null ? !1 : r.draggableId === t.draggableId && r.droppableId === t.droppableId
}, dg = function (r, t) {
    if (r === t) return !0;
    var n = r.draggable.id === t.draggable.id && r.draggable.droppableId === t.draggable.droppableId && r.draggable.type === t.draggable.type && r.draggable.index === t.draggable.index,
        o = r.droppable.id === t.droppable.id && r.droppable.type === t.droppable.type;
    return n && o
}, Xr = function (r, t) {
    t()
}, Pt = function (r, t) {
    return {
        draggableId: r.draggable.id,
        type: r.droppable.type,
        source: {droppableId: r.droppable.id, index: r.draggable.index},
        mode: t
    }
}, An = function (r, t, n, o) {
    if (!r) {
        n(o(t));
        return
    }
    var i = lg(n), l = {announce: i};
    r(t, l), i.wasCalled() || n(o(t))
}, fg = function (e, r) {
    var t = sg(), n = null, o = function (p, b) {
        n && W(!1), Xr("onBeforeCapture", function () {
            var C = e().onBeforeCapture;
            if (C) {
                var S = {draggableId: p, mode: b};
                C(S)
            }
        })
    }, i = function (p, b) {
        n && W(!1), Xr("onBeforeDragStart", function () {
            var C = e().onBeforeDragStart;
            C && C(Pt(p, b))
        })
    }, l = function (p, b) {
        n && W(!1);
        var C = Pt(p, b);
        n = {mode: b, lastCritical: p, lastLocation: C.source, lastCombine: null}, t.add(function () {
            Xr("onDragStart", function () {
                return An(e().onDragStart, C, r, At.onDragStart)
            })
        })
    }, s = function (p, b) {
        var C = xa(b), S = sn(b);
        n || W(!1);
        var P = !dg(p, n.lastCritical);
        P && (n.lastCritical = p);
        var D = !ug(n.lastLocation, C);
        D && (n.lastLocation = C);
        var B = !cg(n.lastCombine, S);
        if (B && (n.lastCombine = S), !(!P && !D && !B)) {
            var O = ne({}, Pt(p, n.mode), {combine: S, destination: C});
            t.add(function () {
                Xr("onDragUpdate", function () {
                    return An(e().onDragUpdate, O, r, At.onDragUpdate)
                })
            })
        }
    }, f = function () {
        n || W(!1), t.flush()
    }, u = function (p) {
        n || W(!1), n = null, Xr("onDragEnd", function () {
            return An(e().onDragEnd, p, r, At.onDragEnd)
        })
    }, m = function () {
        if (n) {
            var p = ne({}, Pt(n.lastCritical, n.mode), {combine: null, destination: null, reason: "CANCEL"});
            u(p)
        }
    };
    return {beforeCapture: o, beforeStart: i, start: l, update: s, flush: f, drop: u, abort: m}
}, pg = function (e, r) {
    var t = fg(e, r);
    return function (n) {
        return function (o) {
            return function (i) {
                if (i.type === "BEFORE_INITIAL_CAPTURE") {
                    t.beforeCapture(i.payload.draggableId, i.payload.movementMode);
                    return
                }
                if (i.type === "INITIAL_PUBLISH") {
                    var l = i.payload.critical;
                    t.beforeStart(l, i.payload.movementMode), o(i), t.start(l, i.payload.movementMode);
                    return
                }
                if (i.type === "DROP_COMPLETE") {
                    var s = i.payload.completed.result;
                    t.flush(), o(i), t.drop(s);
                    return
                }
                if (o(i), i.type === "FLUSH") {
                    t.abort();
                    return
                }
                var f = n.getState();
                f.phase === "DRAGGING" && t.update(f.critical, f.impact)
            }
        }
    }
}, vg = function (e) {
    return function (r) {
        return function (t) {
            if (t.type !== "DROP_ANIMATION_FINISHED") {
                r(t);
                return
            }
            var n = e.getState();
            n.phase !== "DROP_ANIMATING" && W(!1), e.dispatch(Oa({completed: n.completed}))
        }
    }
}, gg = function (e) {
    var r = null, t = null;

    function n() {
        t && (cancelAnimationFrame(t), t = null), r && (r(), r = null)
    }

    return function (o) {
        return function (i) {
            if ((i.type === "FLUSH" || i.type === "DROP_COMPLETE" || i.type === "DROP_ANIMATION_FINISHED") && n(), o(i), i.type === "DROP_ANIMATE") {
                var l = {
                    eventName: "scroll", options: {capture: !0, passive: !1, once: !0}, fn: function () {
                        var f = e.getState();
                        f.phase === "DROP_ANIMATING" && e.dispatch(Wl())
                    }
                };
                t = requestAnimationFrame(function () {
                    t = null, r = lr(window, [l])
                })
            }
        }
    }
}, mg = function (e) {
    return function () {
        return function (r) {
            return function (t) {
                (t.type === "DROP_COMPLETE" || t.type === "FLUSH" || t.type === "DROP_ANIMATE") && e.stopPublishing(), r(t)
            }
        }
    }
}, hg = function (e) {
    var r = !1;
    return function () {
        return function (t) {
            return function (n) {
                if (n.type === "INITIAL_PUBLISH") {
                    r = !0, e.tryRecordFocus(n.payload.critical.draggable.id), t(n), e.tryRestoreFocusRecorded();
                    return
                }
                if (t(n), !!r) {
                    if (n.type === "FLUSH") {
                        r = !1, e.tryRestoreFocusRecorded();
                        return
                    }
                    if (n.type === "DROP_COMPLETE") {
                        r = !1;
                        var o = n.payload.completed.result;
                        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded()
                    }
                }
            }
        }
    }
}, bg = function (r) {
    return r.type === "DROP_COMPLETE" || r.type === "DROP_ANIMATE" || r.type === "FLUSH"
}, yg = function (e) {
    return function (r) {
        return function (t) {
            return function (n) {
                if (bg(n)) {
                    e.stop(), t(n);
                    return
                }
                if (n.type === "INITIAL_PUBLISH") {
                    t(n);
                    var o = r.getState();
                    o.phase !== "DRAGGING" && W(!1), e.start(o);
                    return
                }
                t(n), e.scroll(r.getState())
            }
        }
    }
}, wg = function (e) {
    return function (r) {
        return function (t) {
            if (r(t), t.type === "PUBLISH_WHILE_DRAGGING") {
                var n = e.getState();
                n.phase === "DROP_PENDING" && (n.isWaiting || e.dispatch(Ll({reason: n.reason})))
            }
        }
    }
}, Cg = _i, Sg = function (e) {
    var r = e.dimensionMarshal, t = e.focusMarshal, n = e.styleMarshal, o = e.getResponders, i = e.announce,
        l = e.autoScroller;
    return qi(Tv, Cg(sf(Yv(n), mg(r), Kv(r), tg, vg, gg, wg, yg(l), ig, hg(t), pg(o, i))))
}, Tn = function () {
    return {additions: {}, removals: {}, modified: {}}
};

function xg(e) {
    var r = e.registry, t = e.callbacks, n = Tn(), o = null, i = function () {
        o || (t.collectionStarting(), o = requestAnimationFrame(function () {
            o = null;
            var m = n, g = m.additions, p = m.removals, b = m.modified, C = Object.keys(g).map(function (D) {
                return r.draggable.getById(D).getDimension($e)
            }).sort(function (D, B) {
                return D.descriptor.index - B.descriptor.index
            }), S = Object.keys(b).map(function (D) {
                var B = r.droppable.getById(D), O = B.callbacks.getScrollWhileDragging();
                return {droppableId: D, scroll: O}
            }), P = {additions: C, removals: Object.keys(p), modified: S};
            n = Tn(), t.publish(P)
        }))
    }, l = function (m) {
        var g = m.descriptor.id;
        n.additions[g] = m, n.modified[m.descriptor.droppableId] = !0, n.removals[g] && delete n.removals[g], i()
    }, s = function (m) {
        var g = m.descriptor;
        n.removals[g.id] = !0, n.modified[g.droppableId] = !0, n.additions[g.id] && delete n.additions[g.id], i()
    }, f = function () {
        o && (cancelAnimationFrame(o), o = null, n = Tn())
    };
    return {add: l, remove: s, stop: f}
}

var $l = function (e) {
    var r = e.scrollHeight, t = e.scrollWidth, n = e.height, o = e.width, i = Ze({x: t, y: r}, {x: o, y: n}),
        l = {x: Math.max(0, i.x), y: Math.max(0, i.y)};
    return l
}, Hl = function () {
    var e = document.documentElement;
    return e || W(!1), e
}, zl = function () {
    var e = Hl(), r = $l({
        scrollHeight: e.scrollHeight,
        scrollWidth: e.scrollWidth,
        width: e.clientWidth,
        height: e.clientHeight
    });
    return r
}, Ig = function () {
    var e = kl(), r = zl(), t = e.y, n = e.x, o = Hl(), i = o.clientWidth, l = o.clientHeight, s = n + i, f = t + l,
        u = fr({top: t, left: n, right: s, bottom: f}),
        m = {frame: u, scroll: {initial: e, current: e, max: r, diff: {value: $e, displacement: $e}}};
    return m
}, Pg = function (e) {
    var r = e.critical, t = e.scrollOptions, n = e.registry, o = Ig(), i = o.scroll.current, l = r.droppable,
        s = n.droppable.getAllByType(l.type).map(function (g) {
            return g.callbacks.getDimensionAndWatchScroll(i, t)
        }), f = n.draggable.getAllByType(r.draggable.type).map(function (g) {
            return g.getDimension(i)
        }), u = {draggables: hl(f), droppables: ml(s)}, m = {dimensions: u, critical: r, viewport: o};
    return m
};

function gi(e, r, t) {
    if (t.descriptor.id === r.id || t.descriptor.type !== r.type) return !1;
    var n = e.droppable.getById(t.descriptor.droppableId);
    return n.descriptor.mode === "virtual"
}

var Rg = function (e, r) {
        var t = null,
            n = xg({callbacks: {publish: r.publishWhileDragging, collectionStarting: r.collectionStarting}, registry: e}),
            o = function (b, C) {
                e.droppable.exists(b) || W(!1), t && r.updateDroppableIsEnabled({id: b, isEnabled: C})
            }, i = function (b, C) {
                t && (e.droppable.exists(b) || W(!1), r.updateDroppableIsCombineEnabled({id: b, isCombineEnabled: C}))
            }, l = function (b, C) {
                t && (e.droppable.exists(b) || W(!1), r.updateDroppableScroll({id: b, newScroll: C}))
            }, s = function (b, C) {
                t && e.droppable.getById(b).callbacks.scroll(C)
            }, f = function () {
                if (t) {
                    n.stop();
                    var b = t.critical.droppable;
                    e.droppable.getAllByType(b.type).forEach(function (C) {
                        return C.callbacks.dragStopped()
                    }), t.unsubscribe(), t = null
                }
            }, u = function (b) {
                t || W(!1);
                var C = t.critical.draggable;
                b.type === "ADDITION" && gi(e, C, b.value) && n.add(b.value), b.type === "REMOVAL" && gi(e, C, b.value) && n.remove(b.value)
            }, m = function (b) {
                t && W(!1);
                var C = e.draggable.getById(b.draggableId), S = e.droppable.getById(C.descriptor.droppableId),
                    P = {draggable: C.descriptor, droppable: S.descriptor}, D = e.subscribe(u);
                return t = {critical: P, unsubscribe: D}, Pg({critical: P, registry: e, scrollOptions: b.scrollOptions})
            }, g = {
                updateDroppableIsEnabled: o,
                updateDroppableIsCombineEnabled: i,
                scrollDroppable: s,
                updateDroppableScroll: l,
                startPublishing: m,
                stopPublishing: f
            };
        return g
    }, jl = function (e, r) {
        return e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === r ? !1 : e.completed.result.reason === "DROP"
    }, Dg = function (e) {
        window.scrollBy(e.x, e.y)
    }, Eg = ke(function (e) {
        return ln(e).filter(function (r) {
            return !(!r.isEnabled || !r.frame)
        })
    }), Bg = function (r, t) {
        var n = Rr(Eg(t), function (o) {
            return o.frame || W(!1), Dl(o.frame.pageMarginBox)(r)
        });
        return n
    }, Og = function (e) {
        var r = e.center, t = e.destination, n = e.droppables;
        if (t) {
            var o = n[t];
            return o.frame ? o : null
        }
        var i = Bg(r, n);
        return i
    }, xr = {
        startFromPercentage: .25, maxScrollAtPercentage: .05, maxPixelScroll: 28, ease: function (r) {
            return Math.pow(r, 2)
        }, durationDampening: {stopDampeningAt: 1200, accelerateAt: 360}
    }, Ag = function (e, r) {
        var t = e[r.size] * xr.startFromPercentage, n = e[r.size] * xr.maxScrollAtPercentage,
            o = {startScrollingFrom: t, maxScrollValueAt: n};
        return o
    }, Vl = function (e) {
        var r = e.startOfRange, t = e.endOfRange, n = e.current, o = t - r;
        if (o === 0) return 0;
        var i = n - r, l = i / o;
        return l
    }, Ma = 1, Tg = function (e, r) {
        if (e > r.startScrollingFrom) return 0;
        if (e <= r.maxScrollValueAt) return xr.maxPixelScroll;
        if (e === r.startScrollingFrom) return Ma;
        var t = Vl({startOfRange: r.maxScrollValueAt, endOfRange: r.startScrollingFrom, current: e}), n = 1 - t,
            o = xr.maxPixelScroll * xr.ease(n);
        return Math.ceil(o)
    }, mi = xr.durationDampening.accelerateAt, hi = xr.durationDampening.stopDampeningAt, Mg = function (e, r) {
        var t = r, n = hi, o = Date.now(), i = o - t;
        if (i >= hi) return e;
        if (i < mi) return Ma;
        var l = Vl({startOfRange: mi, endOfRange: n, current: i}), s = e * xr.ease(l);
        return Math.ceil(s)
    }, bi = function (e) {
        var r = e.distanceToEdge, t = e.thresholds, n = e.dragStartTime, o = e.shouldUseTimeDampening, i = Tg(r, t);
        return i === 0 ? 0 : o ? Math.max(Mg(i, n), Ma) : i
    }, yi = function (e) {
        var r = e.container, t = e.distanceToEdges, n = e.dragStartTime, o = e.axis, i = e.shouldUseTimeDampening,
            l = Ag(r, o), s = t[o.end] < t[o.start];
        return s ? bi({
            distanceToEdge: t[o.end],
            thresholds: l,
            dragStartTime: n,
            shouldUseTimeDampening: i
        }) : -1 * bi({distanceToEdge: t[o.start], thresholds: l, dragStartTime: n, shouldUseTimeDampening: i})
    }, Ng = function (e) {
        var r = e.container, t = e.subject, n = e.proposedScroll, o = t.height > r.height, i = t.width > r.width;
        return !i && !o ? n : i && o ? null : {x: i ? 0 : n.x, y: o ? 0 : n.y}
    }, Fg = vl(function (e) {
        return e === 0 ? 0 : e
    }), Ul = function (e) {
        var r = e.dragStartTime, t = e.container, n = e.subject, o = e.center, i = e.shouldUseTimeDampening,
            l = {top: o.y - t.top, right: t.right - o.x, bottom: t.bottom - o.y, left: o.x - t.left},
            s = yi({container: t, distanceToEdges: l, dragStartTime: r, axis: Ia, shouldUseTimeDampening: i}),
            f = yi({container: t, distanceToEdges: l, dragStartTime: r, axis: wl, shouldUseTimeDampening: i}),
            u = Fg({x: f, y: s});
        if (Sr(u, $e)) return null;
        var m = Ng({container: t, subject: n, proposedScroll: u});
        return m ? Sr(m, $e) ? null : m : null
    }, Lg = vl(function (e) {
        return e === 0 ? 0 : e > 0 ? 1 : -1
    }), Na = function () {
        var e = function (t, n) {
            return t < 0 ? t : t > n ? t - n : 0
        };
        return function (r) {
            var t = r.current, n = r.max, o = r.change, i = je(t, o), l = {x: e(i.x, n.x), y: e(i.y, n.y)};
            return Sr(l, $e) ? null : l
        }
    }(), ql = function (r) {
        var t = r.max, n = r.current, o = r.change, i = {x: Math.max(n.x, t.x), y: Math.max(n.y, t.y)}, l = Lg(o),
            s = Na({max: i, current: n, change: l});
        return !s || l.x !== 0 && s.x === 0 || l.y !== 0 && s.y === 0
    }, Fa = function (r, t) {
        return ql({current: r.scroll.current, max: r.scroll.max, change: t})
    }, Wg = function (r, t) {
        if (!Fa(r, t)) return null;
        var n = r.scroll.max, o = r.scroll.current;
        return Na({current: o, max: n, change: t})
    }, La = function (r, t) {
        var n = r.frame;
        return n ? ql({current: n.scroll.current, max: n.scroll.max, change: t}) : !1
    }, Gg = function (r, t) {
        var n = r.frame;
        return !n || !La(r, t) ? null : Na({current: n.scroll.current, max: n.scroll.max, change: t})
    }, kg = function (e) {
        var r = e.viewport, t = e.subject, n = e.center, o = e.dragStartTime, i = e.shouldUseTimeDampening,
            l = Ul({dragStartTime: o, container: r.frame, subject: t, center: n, shouldUseTimeDampening: i});
        return l && Fa(r, l) ? l : null
    }, $g = function (e) {
        var r = e.droppable, t = e.subject, n = e.center, o = e.dragStartTime, i = e.shouldUseTimeDampening, l = r.frame;
        if (!l) return null;
        var s = Ul({dragStartTime: o, container: l.pageMarginBox, subject: t, center: n, shouldUseTimeDampening: i});
        return s && La(r, s) ? s : null
    }, wi = function (e) {
        var r = e.state, t = e.dragStartTime, n = e.shouldUseTimeDampening, o = e.scrollWindow, i = e.scrollDroppable,
            l = r.current.page.borderBoxCenter, s = r.dimensions.draggables[r.critical.draggable.id], f = s.page.marginBox;
        if (r.isWindowScrollAllowed) {
            var u = r.viewport, m = kg({dragStartTime: t, viewport: u, subject: f, center: l, shouldUseTimeDampening: n});
            if (m) {
                o(m);
                return
            }
        }
        var g = Og({center: l, destination: er(r.impact), droppables: r.dimensions.droppables});
        if (g) {
            var p = $g({dragStartTime: t, droppable: g, subject: f, center: l, shouldUseTimeDampening: n});
            p && i(g.descriptor.id, p)
        }
    }, Hg = function (e) {
        var r = e.scrollWindow, t = e.scrollDroppable, n = rt(r), o = rt(t), i = null, l = function (m) {
            i || W(!1);
            var g = i, p = g.shouldUseTimeDampening, b = g.dragStartTime;
            wi({state: m, scrollWindow: n, scrollDroppable: o, dragStartTime: b, shouldUseTimeDampening: p})
        }, s = function (m) {
            i && W(!1);
            var g = Date.now(), p = !1, b = function () {
                p = !0
            };
            wi({
                state: m,
                dragStartTime: 0,
                shouldUseTimeDampening: !1,
                scrollWindow: b,
                scrollDroppable: b
            }), i = {dragStartTime: g, shouldUseTimeDampening: p}, p && l(m)
        }, f = function () {
            i && (n.cancel(), o.cancel(), i = null)
        };
        return {start: s, stop: f, scroll: l}
    }, zg = function (e) {
        var r = e.move, t = e.scrollDroppable, n = e.scrollWindow, o = function (u, m) {
            var g = je(u.current.client.selection, m);
            r({client: g})
        }, i = function (u, m) {
            if (!La(u, m)) return m;
            var g = Gg(u, m);
            if (!g) return t(u.descriptor.id, m), null;
            var p = Ze(m, g);
            t(u.descriptor.id, p);
            var b = Ze(m, p);
            return b
        }, l = function (u, m, g) {
            if (!u || !Fa(m, g)) return g;
            var p = Wg(m, g);
            if (!p) return n(g), null;
            var b = Ze(g, p);
            n(b);
            var C = Ze(g, b);
            return C
        }, s = function (u) {
            var m = u.scrollJumpRequest;
            if (m) {
                var g = er(u.impact);
                g || W(!1);
                var p = i(u.dimensions.droppables[g], m);
                if (p) {
                    var b = u.viewport, C = l(u.isWindowScrollAllowed, b, p);
                    C && o(u, C)
                }
            }
        };
        return s
    }, jg = function (e) {
        var r = e.scrollDroppable, t = e.scrollWindow, n = e.move, o = Hg({scrollWindow: t, scrollDroppable: r}),
            i = zg({move: n, scrollWindow: t, scrollDroppable: r}), l = function (u) {
                if (u.phase === "DRAGGING") {
                    if (u.movementMode === "FLUID") {
                        o.scroll(u);
                        return
                    }
                    u.scrollJumpRequest && i(u)
                }
            }, s = {scroll: l, start: o.start, stop: o.stop};
        return s
    }, kr = "data-rbd", $r = function () {
        var e = kr + "-drag-handle";
        return {base: e, draggableId: e + "-draggable-id", contextId: e + "-context-id"}
    }(), Zn = function () {
        var e = kr + "-draggable";
        return {base: e, contextId: e + "-context-id", id: e + "-id"}
    }(), Vg = function () {
        var e = kr + "-droppable";
        return {base: e, contextId: e + "-context-id", id: e + "-id"}
    }(), Ci = {contextId: kr + "-scroll-container-context-id"}, Ug = function (r) {
        return function (t) {
            return "[" + t + '="' + r + '"]'
        }
    }, Kr = function (r, t) {
        return r.map(function (n) {
            var o = n.styles[t];
            return o ? n.selector + " { " + o + " }" : ""
        }).join(" ")
    }, qg = "pointer-events: none;", _g = function (e) {
        var r = Ug(e), t = function () {
            var s = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
            return {
                selector: r($r.contextId), styles: {
                    always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `, resting: s, dragging: qg, dropAnimating: s
                }
            }
        }(), n = function () {
            var s = `
      transition: ` + Qr.outOfTheWay + `;
    `;
            return {selector: r(Zn.contextId), styles: {dragging: s, dropAnimating: s, userCancel: s}}
        }(), o = {selector: r(Vg.contextId), styles: {always: "overflow-anchor: none;"}}, i = {
            selector: "body", styles: {
                dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
            }
        }, l = [n, t, o, i];
        return {
            always: Kr(l, "always"),
            resting: Kr(l, "resting"),
            dragging: Kr(l, "dragging"),
            dropAnimating: Kr(l, "dropAnimating"),
            userCancel: Kr(l, "userCancel")
        }
    },
    rr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? G.useLayoutEffect : G.useEffect,
    Mn = function () {
        var r = document.querySelector("head");
        return r || W(!1), r
    }, Si = function (r) {
        var t = document.createElement("style");
        return r && t.setAttribute("nonce", r), t.type = "text/css", t
    };

function Xg(e, r) {
    var t = me(function () {
        return _g(e)
    }, [e]), n = G.useRef(null), o = G.useRef(null), i = Y(ke(function (g) {
        var p = o.current;
        p || W(!1), p.textContent = g
    }), []), l = Y(function (g) {
        var p = n.current;
        p || W(!1), p.textContent = g
    }, []);
    rr(function () {
        !n.current && !o.current || W(!1);
        var g = Si(r), p = Si(r);
        return n.current = g, o.current = p, g.setAttribute(kr + "-always", e), p.setAttribute(kr + "-dynamic", e), Mn().appendChild(g), Mn().appendChild(p), l(t.always), i(t.resting), function () {
            var b = function (S) {
                var P = S.current;
                P || W(!1), Mn().removeChild(P), S.current = null
            };
            b(n), b(o)
        }
    }, [r, l, i, t.always, t.resting, e]);
    var s = Y(function () {
        return i(t.dragging)
    }, [i, t.dragging]), f = Y(function (g) {
        if (g === "DROP") {
            i(t.dropAnimating);
            return
        }
        i(t.userCancel)
    }, [i, t.dropAnimating, t.userCancel]), u = Y(function () {
        o.current && i(t.resting)
    }, [i, t.resting]), m = me(function () {
        return {dragging: s, dropping: f, resting: u}
    }, [s, f, u]);
    return m
}

var _l = function (e) {
    return e && e.ownerDocument ? e.ownerDocument.defaultView : window
};

function dn(e) {
    return e instanceof _l(e).HTMLElement
}

function Kg(e, r) {
    var t = "[" + $r.contextId + '="' + e + '"]', n = gl(document.querySelectorAll(t));
    if (!n.length) return null;
    var o = Rr(n, function (i) {
        return i.getAttribute($r.draggableId) === r
    });
    return !o || !dn(o) ? null : o
}

function Yg(e) {
    var r = G.useRef({}), t = G.useRef(null), n = G.useRef(null), o = G.useRef(!1), i = Y(function (p, b) {
        var C = {id: p, focus: b};
        return r.current[p] = C, function () {
            var P = r.current, D = P[p];
            D !== C && delete P[p]
        }
    }, []), l = Y(function (p) {
        var b = Kg(e, p);
        b && b !== document.activeElement && b.focus()
    }, [e]), s = Y(function (p, b) {
        t.current === p && (t.current = b)
    }, []), f = Y(function () {
        n.current || o.current && (n.current = requestAnimationFrame(function () {
            n.current = null;
            var p = t.current;
            p && l(p)
        }))
    }, [l]), u = Y(function (p) {
        t.current = null;
        var b = document.activeElement;
        b && b.getAttribute($r.draggableId) === p && (t.current = p)
    }, []);
    rr(function () {
        return o.current = !0, function () {
            o.current = !1;
            var p = n.current;
            p && cancelAnimationFrame(p)
        }
    }, []);
    var m = me(function () {
        return {register: i, tryRecordFocus: u, tryRestoreFocusRecorded: f, tryShiftRecord: s}
    }, [i, u, f, s]);
    return m
}

function Jg() {
    var e = {draggables: {}, droppables: {}}, r = [];

    function t(g) {
        return r.push(g), function () {
            var b = r.indexOf(g);
            b !== -1 && r.splice(b, 1)
        }
    }

    function n(g) {
        r.length && r.forEach(function (p) {
            return p(g)
        })
    }

    function o(g) {
        return e.draggables[g] || null
    }

    function i(g) {
        var p = o(g);
        return p || W(!1), p
    }

    var l = {
        register: function (p) {
            e.draggables[p.descriptor.id] = p, n({type: "ADDITION", value: p})
        }, update: function (p, b) {
            var C = e.draggables[b.descriptor.id];
            C && C.uniqueId === p.uniqueId && (delete e.draggables[b.descriptor.id], e.draggables[p.descriptor.id] = p)
        }, unregister: function (p) {
            var b = p.descriptor.id, C = o(b);
            C && p.uniqueId === C.uniqueId && (delete e.draggables[b], n({type: "REMOVAL", value: p}))
        }, getById: i, findById: o, exists: function (p) {
            return Boolean(o(p))
        }, getAllByType: function (p) {
            return Ht(e.draggables).filter(function (b) {
                return b.descriptor.type === p
            })
        }
    };

    function s(g) {
        return e.droppables[g] || null
    }

    function f(g) {
        var p = s(g);
        return p || W(!1), p
    }

    var u = {
        register: function (p) {
            e.droppables[p.descriptor.id] = p
        }, unregister: function (p) {
            var b = s(p.descriptor.id);
            b && p.uniqueId === b.uniqueId && delete e.droppables[p.descriptor.id]
        }, getById: f, findById: s, exists: function (p) {
            return Boolean(s(p))
        }, getAllByType: function (p) {
            return Ht(e.droppables).filter(function (b) {
                return b.descriptor.type === p
            })
        }
    };

    function m() {
        e.draggables = {}, e.droppables = {}, r.length = 0
    }

    return {draggable: l, droppable: u, subscribe: t, clean: m}
}

function Qg() {
    var e = me(Jg, []);
    return G.useEffect(function () {
        return function () {
            requestAnimationFrame(e.clean)
        }
    }, [e]), e
}

var Wa = ee.createContext(null), jt = function () {
    var e = document.body;
    return e || W(!1), e
}, Zg = {
    position: "absolute",
    width: "1px",
    height: "1px",
    margin: "-1px",
    border: "0",
    padding: "0",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    "clip-path": "inset(100%)"
}, em = function (r) {
    return "rbd-announcement-" + r
};

function rm(e) {
    var r = me(function () {
        return em(e)
    }, [e]), t = G.useRef(null);
    G.useEffect(function () {
        var i = document.createElement("div");
        return t.current = i, i.id = r, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), ne(i.style, Zg), jt().appendChild(i), function () {
            setTimeout(function () {
                var f = jt();
                f.contains(i) && f.removeChild(i), i === t.current && (t.current = null)
            })
        }
    }, [r]);
    var n = Y(function (o) {
        var i = t.current;
        if (i) {
            i.textContent = o;
            return
        }
    }, []);
    return n
}

var tm = 0, nm = {separator: "::"};

function Ga(e, r) {
    return r === void 0 && (r = nm), me(function () {
        return "" + e + r.separator + tm++
    }, [r.separator, e])
}

function am(e) {
    var r = e.contextId, t = e.uniqueId;
    return "rbd-hidden-text-" + r + "-" + t
}

function om(e) {
    var r = e.contextId, t = e.text, n = Ga("hidden-text", {separator: "-"}), o = me(function () {
        return am({contextId: r, uniqueId: n})
    }, [n, r]);
    return G.useEffect(function () {
        var l = document.createElement("div");
        return l.id = o, l.textContent = t, l.style.display = "none", jt().appendChild(l), function () {
            var f = jt();
            f.contains(l) && f.removeChild(l)
        }
    }, [o, t]), o
}

var fn = ee.createContext(null);

function Xl(e) {
    var r = G.useRef(e);
    return G.useEffect(function () {
        r.current = e
    }), r
}

function im() {
    var e = null;

    function r() {
        return Boolean(e)
    }

    function t(l) {
        return l === e
    }

    function n(l) {
        e && W(!1);
        var s = {abandon: l};
        return e = s, s
    }

    function o() {
        e || W(!1), e = null
    }

    function i() {
        e && (e.abandon(), o())
    }

    return {isClaimed: r, isActive: t, claim: n, release: o, tryAbandon: i}
}

var lm = 9, sm = 13, ka = 27, Kl = 32, um = 33, cm = 34, dm = 35, fm = 36, pm = 37, vm = 38, gm = 39, mm = 40, Rt,
    hm = (Rt = {}, Rt[sm] = !0, Rt[lm] = !0, Rt), Yl = function (e) {
        hm[e.keyCode] && e.preventDefault()
    }, pn = function () {
        var e = "visibilitychange";
        if (typeof document > "u") return e;
        var r = [e, "ms" + e, "webkit" + e, "moz" + e, "o" + e], t = Rr(r, function (n) {
            return "on" + n in document
        });
        return t || e
    }(), Jl = 0, xi = 5;

function bm(e, r) {
    return Math.abs(r.x - e.x) >= xi || Math.abs(r.y - e.y) >= xi
}

var Ii = {type: "IDLE"};

function ym(e) {
    var r = e.cancel, t = e.completed, n = e.getPhase, o = e.setPhase;
    return [{
        eventName: "mousemove", fn: function (l) {
            var s = l.button, f = l.clientX, u = l.clientY;
            if (s === Jl) {
                var m = {x: f, y: u}, g = n();
                if (g.type === "DRAGGING") {
                    l.preventDefault(), g.actions.move(m);
                    return
                }
                g.type !== "PENDING" && W(!1);
                var p = g.point;
                if (bm(p, m)) {
                    l.preventDefault();
                    var b = g.actions.fluidLift(m);
                    o({type: "DRAGGING", actions: b})
                }
            }
        }
    }, {
        eventName: "mouseup", fn: function (l) {
            var s = n();
            if (s.type !== "DRAGGING") {
                r();
                return
            }
            l.preventDefault(), s.actions.drop({shouldBlockNextClick: !0}), t()
        }
    }, {
        eventName: "mousedown", fn: function (l) {
            n().type === "DRAGGING" && l.preventDefault(), r()
        }
    }, {
        eventName: "keydown", fn: function (l) {
            var s = n();
            if (s.type === "PENDING") {
                r();
                return
            }
            if (l.keyCode === ka) {
                l.preventDefault(), r();
                return
            }
            Yl(l)
        }
    }, {eventName: "resize", fn: r}, {
        eventName: "scroll", options: {passive: !0, capture: !1}, fn: function () {
            n().type === "PENDING" && r()
        }
    }, {
        eventName: "webkitmouseforcedown", fn: function (l) {
            var s = n();
            if (s.type === "IDLE" && W(!1), s.actions.shouldRespectForcePress()) {
                r();
                return
            }
            l.preventDefault()
        }
    }, {eventName: pn, fn: r}]
}

function wm(e) {
    var r = G.useRef(Ii), t = G.useRef(Cr), n = me(function () {
        return {
            eventName: "mousedown", fn: function (g) {
                if (!g.defaultPrevented && g.button === Jl && !(g.ctrlKey || g.metaKey || g.shiftKey || g.altKey)) {
                    var p = e.findClosestDraggableId(g);
                    if (p) {
                        var b = e.tryGetLock(p, l, {sourceEvent: g});
                        if (b) {
                            g.preventDefault();
                            var C = {x: g.clientX, y: g.clientY};
                            t.current(), u(b, C)
                        }
                    }
                }
            }
        }
    }, [e]), o = me(function () {
        return {
            eventName: "webkitmouseforcewillbegin", fn: function (g) {
                if (!g.defaultPrevented) {
                    var p = e.findClosestDraggableId(g);
                    if (p) {
                        var b = e.findOptionsForDraggable(p);
                        b && (b.shouldRespectForcePress || e.canGetLock(p) && g.preventDefault())
                    }
                }
            }
        }
    }, [e]), i = Y(function () {
        var g = {passive: !1, capture: !0};
        t.current = lr(window, [o, n], g)
    }, [o, n]), l = Y(function () {
        var m = r.current;
        m.type !== "IDLE" && (r.current = Ii, t.current(), i())
    }, [i]), s = Y(function () {
        var m = r.current;
        l(), m.type === "DRAGGING" && m.actions.cancel({shouldBlockNextClick: !0}), m.type === "PENDING" && m.actions.abort()
    }, [l]), f = Y(function () {
        var g = {capture: !0, passive: !1}, p = ym({
            cancel: s, completed: l, getPhase: function () {
                return r.current
            }, setPhase: function (C) {
                r.current = C
            }
        });
        t.current = lr(window, p, g)
    }, [s, l]), u = Y(function (g, p) {
        r.current.type !== "IDLE" && W(!1), r.current = {type: "PENDING", point: p, actions: g}, f()
    }, [f]);
    rr(function () {
        return i(), function () {
            t.current()
        }
    }, [i])
}

var Fr;

function Cm() {
}

var Sm = (Fr = {}, Fr[cm] = !0, Fr[um] = !0, Fr[fm] = !0, Fr[dm] = !0, Fr);

function xm(e, r) {
    function t() {
        r(), e.cancel()
    }

    function n() {
        r(), e.drop()
    }

    return [{
        eventName: "keydown", fn: function (i) {
            if (i.keyCode === ka) {
                i.preventDefault(), t();
                return
            }
            if (i.keyCode === Kl) {
                i.preventDefault(), n();
                return
            }
            if (i.keyCode === mm) {
                i.preventDefault(), e.moveDown();
                return
            }
            if (i.keyCode === vm) {
                i.preventDefault(), e.moveUp();
                return
            }
            if (i.keyCode === gm) {
                i.preventDefault(), e.moveRight();
                return
            }
            if (i.keyCode === pm) {
                i.preventDefault(), e.moveLeft();
                return
            }
            if (Sm[i.keyCode]) {
                i.preventDefault();
                return
            }
            Yl(i)
        }
    }, {eventName: "mousedown", fn: t}, {eventName: "mouseup", fn: t}, {
        eventName: "click",
        fn: t
    }, {eventName: "touchstart", fn: t}, {eventName: "resize", fn: t}, {
        eventName: "wheel",
        fn: t,
        options: {passive: !0}
    }, {eventName: pn, fn: t}]
}

function Im(e) {
    var r = G.useRef(Cm), t = me(function () {
        return {
            eventName: "keydown", fn: function (i) {
                if (i.defaultPrevented || i.keyCode !== Kl) return;
                var l = e.findClosestDraggableId(i);
                if (!l) return;
                var s = e.tryGetLock(l, m, {sourceEvent: i});
                if (!s) return;
                i.preventDefault();
                var f = !0, u = s.snapLift();
                r.current();

                function m() {
                    f || W(!1), f = !1, r.current(), n()
                }

                r.current = lr(window, xm(u, m), {capture: !0, passive: !1})
            }
        }
    }, [e]), n = Y(function () {
        var i = {passive: !1, capture: !0};
        r.current = lr(window, [t], i)
    }, [t]);
    rr(function () {
        return n(), function () {
            r.current()
        }
    }, [n])
}

var Nn = {type: "IDLE"}, Pm = 120, Rm = .15;

function Dm(e) {
    var r = e.cancel, t = e.getPhase;
    return [{eventName: "orientationchange", fn: r}, {eventName: "resize", fn: r}, {
        eventName: "contextmenu",
        fn: function (o) {
            o.preventDefault()
        }
    }, {
        eventName: "keydown", fn: function (o) {
            if (t().type !== "DRAGGING") {
                r();
                return
            }
            o.keyCode === ka && o.preventDefault(), r()
        }
    }, {eventName: pn, fn: r}]
}

function Em(e) {
    var r = e.cancel, t = e.completed, n = e.getPhase;
    return [{
        eventName: "touchmove", options: {capture: !1}, fn: function (i) {
            var l = n();
            if (l.type !== "DRAGGING") {
                r();
                return
            }
            l.hasMoved = !0;
            var s = i.touches[0], f = s.clientX, u = s.clientY, m = {x: f, y: u};
            i.preventDefault(), l.actions.move(m)
        }
    }, {
        eventName: "touchend", fn: function (i) {
            var l = n();
            if (l.type !== "DRAGGING") {
                r();
                return
            }
            i.preventDefault(), l.actions.drop({shouldBlockNextClick: !0}), t()
        }
    }, {
        eventName: "touchcancel", fn: function (i) {
            if (n().type !== "DRAGGING") {
                r();
                return
            }
            i.preventDefault(), r()
        }
    }, {
        eventName: "touchforcechange", fn: function (i) {
            var l = n();
            l.type === "IDLE" && W(!1);
            var s = i.touches[0];
            if (s) {
                var f = s.force >= Rm;
                if (f) {
                    var u = l.actions.shouldRespectForcePress();
                    if (l.type === "PENDING") {
                        u && r();
                        return
                    }
                    if (u) {
                        if (l.hasMoved) {
                            i.preventDefault();
                            return
                        }
                        r();
                        return
                    }
                    i.preventDefault()
                }
            }
        }
    }, {eventName: pn, fn: r}]
}

function Bm(e) {
    var r = G.useRef(Nn), t = G.useRef(Cr), n = Y(function () {
        return r.current
    }, []), o = Y(function (b) {
        r.current = b
    }, []), i = me(function () {
        return {
            eventName: "touchstart", fn: function (b) {
                if (!b.defaultPrevented) {
                    var C = e.findClosestDraggableId(b);
                    if (C) {
                        var S = e.tryGetLock(C, s, {sourceEvent: b});
                        if (S) {
                            var P = b.touches[0], D = P.clientX, B = P.clientY, O = {x: D, y: B};
                            t.current(), g(S, O)
                        }
                    }
                }
            }
        }
    }, [e]), l = Y(function () {
        var b = {capture: !0, passive: !1};
        t.current = lr(window, [i], b)
    }, [i]), s = Y(function () {
        var p = r.current;
        p.type !== "IDLE" && (p.type === "PENDING" && clearTimeout(p.longPressTimerId), o(Nn), t.current(), l())
    }, [l, o]), f = Y(function () {
        var p = r.current;
        s(), p.type === "DRAGGING" && p.actions.cancel({shouldBlockNextClick: !0}), p.type === "PENDING" && p.actions.abort()
    }, [s]), u = Y(function () {
        var b = {capture: !0, passive: !1}, C = {cancel: f, completed: s, getPhase: n}, S = lr(window, Em(C), b),
            P = lr(window, Dm(C), b);
        t.current = function () {
            S(), P()
        }
    }, [f, n, s]), m = Y(function () {
        var b = n();
        b.type !== "PENDING" && W(!1);
        var C = b.actions.fluidLift(b.point);
        o({type: "DRAGGING", actions: C, hasMoved: !1})
    }, [n, o]), g = Y(function (b, C) {
        n().type !== "IDLE" && W(!1);
        var S = setTimeout(m, Pm);
        o({type: "PENDING", point: C, actions: b, longPressTimerId: S}), u()
    }, [u, n, o, m]);
    rr(function () {
        return l(), function () {
            t.current();
            var C = n();
            C.type === "PENDING" && (clearTimeout(C.longPressTimerId), o(Nn))
        }
    }, [n, l, o]), rr(function () {
        var b = lr(window, [{
            eventName: "touchmove", fn: function () {
            }, options: {capture: !1, passive: !1}
        }]);
        return b
    }, [])
}

var Om = {input: !0, button: !0, textarea: !0, select: !0, option: !0, optgroup: !0, video: !0, audio: !0};

function Ql(e, r) {
    if (r == null) return !1;
    var t = Boolean(Om[r.tagName.toLowerCase()]);
    if (t) return !0;
    var n = r.getAttribute("contenteditable");
    return n === "true" || n === "" ? !0 : r === e ? !1 : Ql(e, r.parentElement)
}

function Am(e, r) {
    var t = r.target;
    return dn(t) ? Ql(e, t) : !1
}

var Tm = function (e) {
    return fr(e.getBoundingClientRect()).center
};

function Mm(e) {
    return e instanceof _l(e).Element
}

var Nm = function () {
    var e = "matches";
    if (typeof document > "u") return e;
    var r = [e, "msMatchesSelector", "webkitMatchesSelector"], t = Rr(r, function (n) {
        return n in Element.prototype
    });
    return t || e
}();

function Zl(e, r) {
    return e == null ? null : e[Nm](r) ? e : Zl(e.parentElement, r)
}

function Fm(e, r) {
    return e.closest ? e.closest(r) : Zl(e, r)
}

function Lm(e) {
    return "[" + $r.contextId + '="' + e + '"]'
}

function Wm(e, r) {
    var t = r.target;
    if (!Mm(t)) return null;
    var n = Lm(e), o = Fm(t, n);
    return !o || !dn(o) ? null : o
}

function Gm(e, r) {
    var t = Wm(e, r);
    return t ? t.getAttribute($r.draggableId) : null
}

function km(e, r) {
    var t = "[" + Zn.contextId + '="' + e + '"]', n = gl(document.querySelectorAll(t)), o = Rr(n, function (i) {
        return i.getAttribute(Zn.id) === r
    });
    return !o || !dn(o) ? null : o
}

function $m(e) {
    e.preventDefault()
}

function Dt(e) {
    var r = e.expected, t = e.phase, n = e.isLockActive;
    return e.shouldWarn, !(!n() || r !== t)
}

function es(e) {
    var r = e.lockAPI, t = e.store, n = e.registry, o = e.draggableId;
    if (r.isClaimed()) return !1;
    var i = n.draggable.findById(o);
    return !(!i || !i.options.isEnabled || !jl(t.getState(), o))
}

function Hm(e) {
    var r = e.lockAPI, t = e.contextId, n = e.store, o = e.registry, i = e.draggableId, l = e.forceSensorStop,
        s = e.sourceEvent, f = es({lockAPI: r, store: n, registry: o, draggableId: i});
    if (!f) return null;
    var u = o.draggable.getById(i), m = km(t, u.descriptor.id);
    if (!m || s && !u.options.canDragInteractiveElements && Am(m, s)) return null;
    var g = r.claim(l || Cr), p = "PRE_DRAG";

    function b() {
        return u.options.shouldRespectForcePress
    }

    function C() {
        return r.isActive(g)
    }

    function S(j, J) {
        Dt({expected: j, phase: p, isLockActive: C, shouldWarn: !0}) && n.dispatch(J())
    }

    var P = S.bind(null, "DRAGGING");

    function D(j) {
        function J() {
            r.release(), p = "COMPLETED"
        }

        p !== "PRE_DRAG" && (J(), p !== "PRE_DRAG" && W(!1)), n.dispatch(Nv(j.liftActionArgs)), p = "DRAGGING";

        function fe(le, be) {
            if (be === void 0 && (be = {shouldBlockNextClick: !1}), j.cleanup(), be.shouldBlockNextClick) {
                var pe = lr(window, [{eventName: "click", fn: $m, options: {once: !0, passive: !1, capture: !0}}]);
                setTimeout(pe)
            }
            J(), n.dispatch(Ll({reason: le}))
        }

        return ne({
            isActive: function () {
                return Dt({expected: "DRAGGING", phase: p, isLockActive: C, shouldWarn: !1})
            }, shouldRespectForcePress: b, drop: function (be) {
                return fe("DROP", be)
            }, cancel: function (be) {
                return fe("CANCEL", be)
            }
        }, j.actions)
    }

    function B(j) {
        var J = rt(function (le) {
            P(function () {
                return Fl({client: le})
            })
        }), fe = D({
            liftActionArgs: {id: i, clientSelection: j, movementMode: "FLUID"}, cleanup: function () {
                return J.cancel()
            }, actions: {move: J}
        });
        return ne({}, fe, {move: J})
    }

    function O() {
        var j = {
            moveUp: function () {
                return P(jv)
            }, moveRight: function () {
                return P(Uv)
            }, moveDown: function () {
                return P(Vv)
            }, moveLeft: function () {
                return P(qv)
            }
        };
        return D({liftActionArgs: {id: i, clientSelection: Tm(m), movementMode: "SNAP"}, cleanup: Cr, actions: j})
    }

    function A() {
        var j = Dt({expected: "PRE_DRAG", phase: p, isLockActive: C, shouldWarn: !0});
        j && r.release()
    }

    var k = {
        isActive: function () {
            return Dt({expected: "PRE_DRAG", phase: p, isLockActive: C, shouldWarn: !1})
        }, shouldRespectForcePress: b, fluidLift: B, snapLift: O, abort: A
    };
    return k
}

var zm = [wm, Im, Bm];

function jm(e) {
    var r = e.contextId, t = e.store, n = e.registry, o = e.customSensors, i = e.enableDefaultSensors,
        l = [].concat(i ? zm : [], o || []), s = G.useState(function () {
            return im()
        })[0], f = Y(function (B, O) {
            B.isDragging && !O.isDragging && s.tryAbandon()
        }, [s]);
    rr(function () {
        var B = t.getState(), O = t.subscribe(function () {
            var A = t.getState();
            f(B, A), B = A
        });
        return O
    }, [s, t, f]), rr(function () {
        return s.tryAbandon
    }, [s.tryAbandon]);
    for (var u = Y(function (D) {
        return es({lockAPI: s, registry: n, store: t, draggableId: D})
    }, [s, n, t]), m = Y(function (D, B, O) {
        return Hm({
            lockAPI: s,
            registry: n,
            contextId: r,
            store: t,
            draggableId: D,
            forceSensorStop: B,
            sourceEvent: O && O.sourceEvent ? O.sourceEvent : null
        })
    }, [r, s, n, t]), g = Y(function (D) {
        return Gm(r, D)
    }, [r]), p = Y(function (D) {
        var B = n.draggable.findById(D);
        return B ? B.options : null
    }, [n.draggable]), b = Y(function () {
        s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Ba()))
    }, [s, t]), C = Y(s.isClaimed, [s]), S = me(function () {
        return {
            canGetLock: u,
            tryGetLock: m,
            findClosestDraggableId: g,
            findOptionsForDraggable: p,
            tryReleaseLock: b,
            isLockClaimed: C
        }
    }, [u, m, g, p, b, C]), P = 0; P < l.length; P++) l[P](S)
}

var Vm = function (r) {
    return {
        onBeforeCapture: r.onBeforeCapture,
        onBeforeDragStart: r.onBeforeDragStart,
        onDragStart: r.onDragStart,
        onDragEnd: r.onDragEnd,
        onDragUpdate: r.onDragUpdate
    }
};

function Yr(e) {
    return e.current || W(!1), e.current
}

function Um(e) {
    var r = e.contextId, t = e.setCallbacks, n = e.sensors, o = e.nonce, i = e.dragHandleUsageInstructions,
        l = G.useRef(null), s = Xl(e), f = Y(function () {
            return Vm(s.current)
        }, [s]), u = rm(r), m = om({contextId: r, text: i}), g = Xg(r, o), p = Y(function (le) {
            Yr(l).dispatch(le)
        }, []), b = me(function () {
            return _o({
                publishWhileDragging: Lv,
                updateDroppableScroll: Gv,
                updateDroppableIsEnabled: kv,
                updateDroppableIsCombineEnabled: $v,
                collectionStarting: Wv
            }, p)
        }, [p]), C = Qg(), S = me(function () {
            return Rg(C, b)
        }, [C, b]), P = me(function () {
            return jg(ne({scrollWindow: Dg, scrollDroppable: S.scrollDroppable}, _o({move: Fl}, p)))
        }, [S.scrollDroppable, p]), D = Yg(r), B = me(function () {
            return Sg({
                announce: u,
                autoScroller: P,
                dimensionMarshal: S,
                focusMarshal: D,
                getResponders: f,
                styleMarshal: g
            })
        }, [u, P, S, D, f, g]);
    l.current = B;
    var O = Y(function () {
        var le = Yr(l), be = le.getState();
        be.phase !== "IDLE" && le.dispatch(Ba())
    }, []), A = Y(function () {
        var le = Yr(l).getState();
        return le.isDragging || le.phase === "DROP_ANIMATING"
    }, []), k = me(function () {
        return {isDragging: A, tryAbort: O}
    }, [A, O]);
    t(k);
    var j = Y(function (le) {
        return jl(Yr(l).getState(), le)
    }, []), J = Y(function () {
        return Tr(Yr(l).getState())
    }, []), fe = me(function () {
        return {
            marshal: S,
            focus: D,
            contextId: r,
            canLift: j,
            isMovementAllowed: J,
            dragHandleUsageInstructionsId: m,
            registry: C
        }
    }, [r, S, m, D, j, J, C]);
    return jm({
        contextId: r,
        store: B,
        registry: C,
        customSensors: n,
        enableDefaultSensors: e.enableDefaultSensors !== !1
    }), G.useEffect(function () {
        return O
    }, [O]), ee.createElement(fn.Provider, {value: fe}, ee.createElement(pf, {context: Wa, store: B}, e.children))
}

var qm = 0;

function _m() {
    return me(function () {
        return "" + qm++
    }, [])
}

function Xm(e) {
    var r = _m(), t = e.dragHandleUsageInstructions || At.dragHandleUsageInstructions;
    return ee.createElement(Ip, null, function (n) {
        return ee.createElement(Um, {
            nonce: e.nonce,
            contextId: r,
            setCallbacks: n,
            dragHandleUsageInstructions: t,
            enableDefaultSensors: e.enableDefaultSensors,
            sensors: e.sensors,
            onBeforeCapture: e.onBeforeCapture,
            onBeforeDragStart: e.onBeforeDragStart,
            onDragStart: e.onDragStart,
            onDragUpdate: e.onDragUpdate,
            onDragEnd: e.onDragEnd
        }, e.children)
    })
}

var rs = function (r) {
    return function (t) {
        return r === t
    }
}, Km = rs("scroll"), Ym = rs("auto"), Pi = function (r, t) {
    return t(r.overflowX) || t(r.overflowY)
}, Jm = function (r) {
    var t = window.getComputedStyle(r), n = {overflowX: t.overflowX, overflowY: t.overflowY};
    return Pi(n, Km) || Pi(n, Ym)
}, Qm = function () {
    return !1
}, Zm = function e(r) {
    return r == null ? null : r === document.body ? Qm() ? r : null : r === document.documentElement ? null : Jm(r) ? r : e(r.parentElement)
}, ea = function (e) {
    return {x: e.scrollLeft, y: e.scrollTop}
}, eh = function e(r) {
    if (!r) return !1;
    var t = window.getComputedStyle(r);
    return t.position === "fixed" ? !0 : e(r.parentElement)
}, rh = function (e) {
    var r = Zm(e), t = eh(e);
    return {closestScrollable: r, isFixedOnPage: t}
}, th = function (e) {
    var r = e.descriptor, t = e.isEnabled, n = e.isCombineEnabled, o = e.isFixedOnPage, i = e.direction, l = e.client,
        s = e.page, f = e.closest, u = function () {
            if (!f) return null;
            var b = f.scrollSize, C = f.client, S = $l({
                scrollHeight: b.scrollHeight,
                scrollWidth: b.scrollWidth,
                height: C.paddingBox.height,
                width: C.paddingBox.width
            });
            return {
                pageMarginBox: f.page.marginBox,
                frameClient: C,
                scrollSize: b,
                shouldClipSubject: f.shouldClipSubject,
                scroll: {initial: f.scroll, current: f.scroll, max: S, diff: {value: $e, displacement: $e}}
            }
        }(), m = i === "vertical" ? Ia : wl, g = Gr({page: s, withPlaceholder: null, axis: m, frame: u}), p = {
            descriptor: r,
            isCombineEnabled: n,
            isFixedOnPage: o,
            axis: m,
            isEnabled: t,
            client: l,
            page: s,
            frame: u,
            subject: g
        };
    return p
}, nh = function (r, t) {
    var n = cl(r);
    if (!t || r !== t) return n;
    var o = n.paddingBox.top - t.scrollTop, i = n.paddingBox.left - t.scrollLeft, l = o + t.scrollHeight,
        s = i + t.scrollWidth, f = {top: o, right: s, bottom: l, left: i}, u = ya(f, n.border),
        m = wa({borderBox: u, margin: n.margin, border: n.border, padding: n.padding});
    return m
}, ah = function (e) {
    var r = e.ref, t = e.descriptor, n = e.env, o = e.windowScroll, i = e.direction, l = e.isDropDisabled,
        s = e.isCombineEnabled, f = e.shouldClipSubject, u = n.closestScrollable, m = nh(r, u), g = Gt(m, o),
        p = function () {
            if (!u) return null;
            var C = cl(u), S = {scrollHeight: u.scrollHeight, scrollWidth: u.scrollWidth};
            return {client: C, page: Gt(C, o), scroll: ea(u), scrollSize: S, shouldClipSubject: f}
        }(), b = th({
            descriptor: t,
            isEnabled: !l,
            isCombineEnabled: s,
            isFixedOnPage: n.isFixedOnPage,
            direction: i,
            client: m,
            page: g,
            closest: p
        });
    return b
}, oh = {passive: !1}, ih = {passive: !0}, Ri = function (e) {
    return e.shouldPublishImmediately ? oh : ih
};

function Vt(e) {
    var r = G.useContext(e);
    return r || W(!1), r
}

var Et = function (r) {
    return r && r.env.closestScrollable || null
};

function lh(e) {
    var r = G.useRef(null), t = Vt(fn), n = Ga("droppable"), o = t.registry, i = t.marshal, l = Xl(e),
        s = me(function () {
            return {id: e.droppableId, type: e.type, mode: e.mode}
        }, [e.droppableId, e.mode, e.type]), f = G.useRef(s), u = me(function () {
            return ke(function (A, k) {
                r.current || W(!1);
                var j = {x: A, y: k};
                i.updateDroppableScroll(s.id, j)
            })
        }, [s.id, i]), m = Y(function () {
            var A = r.current;
            return !A || !A.env.closestScrollable ? $e : ea(A.env.closestScrollable)
        }, []), g = Y(function () {
            var A = m();
            u(A.x, A.y)
        }, [m, u]), p = me(function () {
            return rt(g)
        }, [g]), b = Y(function () {
            var A = r.current, k = Et(A);
            A && k || W(!1);
            var j = A.scrollOptions;
            if (j.shouldPublishImmediately) {
                g();
                return
            }
            p()
        }, [p, g]), C = Y(function (A, k) {
            r.current && W(!1);
            var j = l.current, J = j.getDroppableRef();
            J || W(!1);
            var fe = rh(J), le = {ref: J, descriptor: s, env: fe, scrollOptions: k};
            r.current = le;
            var be = ah({
                ref: J,
                descriptor: s,
                env: fe,
                windowScroll: A,
                direction: j.direction,
                isDropDisabled: j.isDropDisabled,
                isCombineEnabled: j.isCombineEnabled,
                shouldClipSubject: !j.ignoreContainerClipping
            }), pe = fe.closestScrollable;
            return pe && (pe.setAttribute(Ci.contextId, t.contextId), pe.addEventListener("scroll", b, Ri(le.scrollOptions))), be
        }, [t.contextId, s, b, l]), S = Y(function () {
            var A = r.current, k = Et(A);
            return A && k || W(!1), ea(k)
        }, []), P = Y(function () {
            var A = r.current;
            A || W(!1);
            var k = Et(A);
            r.current = null, k && (p.cancel(), k.removeAttribute(Ci.contextId), k.removeEventListener("scroll", b, Ri(A.scrollOptions)))
        }, [b, p]), D = Y(function (A) {
            var k = r.current;
            k || W(!1);
            var j = Et(k);
            j || W(!1), j.scrollTop += A.y, j.scrollLeft += A.x
        }, []), B = me(function () {
            return {getDimensionAndWatchScroll: C, getScrollWhileDragging: S, dragStopped: P, scroll: D}
        }, [P, C, S, D]), O = me(function () {
            return {uniqueId: n, descriptor: s, callbacks: B}
        }, [B, s, n]);
    rr(function () {
        return f.current = O.descriptor, o.droppable.register(O), function () {
            r.current && P(), o.droppable.unregister(O)
        }
    }, [B, s, P, O, i, o.droppable]), rr(function () {
        r.current && i.updateDroppableIsEnabled(f.current.id, !e.isDropDisabled)
    }, [e.isDropDisabled, i]), rr(function () {
        r.current && i.updateDroppableIsCombineEnabled(f.current.id, e.isCombineEnabled)
    }, [e.isCombineEnabled, i])
}

function Fn() {
}

var Di = {width: 0, height: 0, margin: Op}, sh = function (r) {
    var t = r.isAnimatingOpenOnMount, n = r.placeholder, o = r.animate;
    return t || o === "close" ? Di : {
        height: n.client.borderBox.height,
        width: n.client.borderBox.width,
        margin: n.client.margin
    }
}, uh = function (r) {
    var t = r.isAnimatingOpenOnMount, n = r.placeholder, o = r.animate,
        i = sh({isAnimatingOpenOnMount: t, placeholder: n, animate: o});
    return {
        display: n.display,
        boxSizing: "border-box",
        width: i.width,
        height: i.height,
        marginTop: i.margin.top,
        marginRight: i.margin.right,
        marginBottom: i.margin.bottom,
        marginLeft: i.margin.left,
        flexShrink: "0",
        flexGrow: "0",
        pointerEvents: "none",
        transition: o !== "none" ? Qr.placeholder : null
    }
};

function ch(e) {
    var r = G.useRef(null), t = Y(function () {
            r.current && (clearTimeout(r.current), r.current = null)
        }, []), n = e.animate, o = e.onTransitionEnd, i = e.onClose, l = e.contextId, s = G.useState(e.animate === "open"),
        f = s[0], u = s[1];
    G.useEffect(function () {
        return f ? n !== "open" ? (t(), u(!1), Fn) : r.current ? Fn : (r.current = setTimeout(function () {
            r.current = null, u(!1)
        }), t) : Fn
    }, [n, f, t]);
    var m = Y(function (p) {
        p.propertyName === "height" && (o(), n === "close" && i())
    }, [n, i, o]), g = uh({isAnimatingOpenOnMount: f, animate: e.animate, placeholder: e.placeholder});
    return ee.createElement(e.placeholder.tagName, {
        style: g,
        "data-rbd-placeholder-context-id": l,
        onTransitionEnd: m,
        ref: e.innerRef
    })
}

var dh = ee.memo(ch), $a = ee.createContext(null), fh = function (e) {
    ki(r, e);

    function r() {
        for (var n, o = arguments.length, i = new Array(o), l = 0; l < o; l++) i[l] = arguments[l];
        return n = e.call.apply(e, [this].concat(i)) || this, n.state = {
            isVisible: Boolean(n.props.on),
            data: n.props.on,
            animate: n.props.shouldAnimate && n.props.on ? "open" : "none"
        }, n.onClose = function () {
            n.state.animate === "close" && n.setState({isVisible: !1})
        }, n
    }

    r.getDerivedStateFromProps = function (o, i) {
        return o.shouldAnimate ? o.on ? {isVisible: !0, data: o.on, animate: "open"} : i.isVisible ? {
            isVisible: !0,
            data: i.data,
            animate: "close"
        } : {isVisible: !1, animate: "close", data: null} : {isVisible: Boolean(o.on), data: o.on, animate: "none"}
    };
    var t = r.prototype;
    return t.render = function () {
        if (!this.state.isVisible) return null;
        var o = {onClose: this.onClose, data: this.state.data, animate: this.state.animate};
        return this.props.children(o)
    }, r
}(ee.PureComponent), Ei = {dragging: 5e3, dropAnimating: 4500}, ph = function (r, t) {
    return t ? Qr.drop(t.duration) : r ? Qr.snap : Qr.fluid
}, vh = function (r, t) {
    return r ? t ? ot.opacity.drop : ot.opacity.combining : null
}, gh = function (r) {
    return r.forceShouldAnimate != null ? r.forceShouldAnimate : r.mode === "SNAP"
};

function mh(e) {
    var r = e.dimension, t = r.client, n = e.offset, o = e.combineWith, i = e.dropping, l = Boolean(o), s = gh(e),
        f = Boolean(i), u = f ? Jn.drop(n, l) : Jn.moveTo(n), m = {
            position: "fixed",
            top: t.marginBox.top,
            left: t.marginBox.left,
            boxSizing: "border-box",
            width: t.borderBox.width,
            height: t.borderBox.height,
            transition: ph(s, i),
            transform: u,
            opacity: vh(l, f),
            zIndex: f ? Ei.dropAnimating : Ei.dragging,
            pointerEvents: "none"
        };
    return m
}

function hh(e) {
    return {transform: Jn.moveTo(e.offset), transition: e.shouldAnimateDisplacement ? null : "none"}
}

function bh(e) {
    return e.type === "DRAGGING" ? mh(e) : hh(e)
}

function yh(e, r, t) {
    t === void 0 && (t = $e);
    var n = window.getComputedStyle(r), o = r.getBoundingClientRect(), i = ul(o, n), l = Gt(i, t),
        s = {client: i, tagName: r.tagName.toLowerCase(), display: n.display},
        f = {x: i.marginBox.width, y: i.marginBox.height},
        u = {descriptor: e, placeholder: s, displaceBy: f, client: i, page: l};
    return u
}

function wh(e) {
    var r = Ga("draggable"), t = e.descriptor, n = e.registry, o = e.getDraggableRef, i = e.canDragInteractiveElements,
        l = e.shouldRespectForcePress, s = e.isEnabled, f = me(function () {
            return {canDragInteractiveElements: i, shouldRespectForcePress: l, isEnabled: s}
        }, [i, s, l]), u = Y(function (b) {
            var C = o();
            return C || W(!1), yh(t, C, b)
        }, [t, o]), m = me(function () {
            return {uniqueId: r, descriptor: t, options: f, getDimension: u}
        }, [t, u, f, r]), g = G.useRef(m), p = G.useRef(!0);
    rr(function () {
        return n.draggable.register(g.current), function () {
            return n.draggable.unregister(g.current)
        }
    }, [n.draggable]), rr(function () {
        if (p.current) {
            p.current = !1;
            return
        }
        var b = g.current;
        g.current = m, n.draggable.update(m, b)
    }, [m, n.draggable])
}

function Ch(e) {
    e.preventDefault()
}

function Sh(e) {
    var r = G.useRef(null), t = Y(function (le) {
            r.current = le
        }, []), n = Y(function () {
            return r.current
        }, []), o = Vt(fn), i = o.contextId, l = o.dragHandleUsageInstructionsId, s = o.registry, f = Vt($a), u = f.type,
        m = f.droppableId, g = me(function () {
            return {id: e.draggableId, index: e.index, type: u, droppableId: m}
        }, [e.draggableId, e.index, u, m]), p = e.children, b = e.draggableId, C = e.isEnabled,
        S = e.shouldRespectForcePress, P = e.canDragInteractiveElements, D = e.isClone, B = e.mapped,
        O = e.dropAnimationFinished;
    if (!D) {
        var A = me(function () {
            return {
                descriptor: g,
                registry: s,
                getDraggableRef: n,
                canDragInteractiveElements: P,
                shouldRespectForcePress: S,
                isEnabled: C
            }
        }, [g, s, n, P, S, C]);
        wh(A)
    }
    var k = me(function () {
        return C ? {
            tabIndex: 0,
            role: "button",
            "aria-describedby": l,
            "data-rbd-drag-handle-draggable-id": b,
            "data-rbd-drag-handle-context-id": i,
            draggable: !1,
            onDragStart: Ch
        } : null
    }, [i, l, b, C]), j = Y(function (le) {
        B.type === "DRAGGING" && B.dropping && le.propertyName === "transform" && O()
    }, [O, B]), J = me(function () {
        var le = bh(B), be = B.type === "DRAGGING" && B.dropping ? j : null, pe = {
            innerRef: t,
            draggableProps: {
                "data-rbd-draggable-context-id": i,
                "data-rbd-draggable-id": b,
                style: le,
                onTransitionEnd: be
            },
            dragHandleProps: k
        };
        return pe
    }, [i, k, b, B, j, t]), fe = me(function () {
        return {draggableId: g.id, type: g.type, source: {index: g.index, droppableId: g.droppableId}}
    }, [g.droppableId, g.id, g.index, g.type]);
    return p(J, B.snapshot, fe)
}

var ts = function (e, r) {
    return e === r
}, ns = function (e) {
    var r = e.combine, t = e.destination;
    return t ? t.droppableId : r ? r.droppableId : null
}, xh = function (r) {
    return r.combine ? r.combine.draggableId : null
}, Ih = function (r) {
    return r.at && r.at.type === "COMBINE" ? r.at.combine.draggableId : null
};

function Ph() {
    var e = ke(function (o, i) {
        return {x: o, y: i}
    }), r = ke(function (o, i, l, s, f) {
        return {
            isDragging: !0,
            isClone: i,
            isDropAnimating: Boolean(f),
            dropAnimation: f,
            mode: o,
            draggingOver: l,
            combineWith: s,
            combineTargetFor: null
        }
    }), t = ke(function (o, i, l, s, f, u, m) {
        return {
            mapped: {
                type: "DRAGGING",
                dropping: null,
                draggingOver: f,
                combineWith: u,
                mode: i,
                offset: o,
                dimension: l,
                forceShouldAnimate: m,
                snapshot: r(i, s, f, u, null)
            }
        }
    }), n = function (i, l) {
        if (i.isDragging) {
            if (i.critical.draggable.id !== l.draggableId) return null;
            var s = i.current.client.offset, f = i.dimensions.draggables[l.draggableId], u = er(i.impact),
                m = Ih(i.impact), g = i.forceShouldAnimate;
            return t(e(s.x, s.y), i.movementMode, f, l.isClone, u, m, g)
        }
        if (i.phase === "DROP_ANIMATING") {
            var p = i.completed;
            if (p.result.draggableId !== l.draggableId) return null;
            var b = l.isClone, C = i.dimensions.draggables[l.draggableId], S = p.result, P = S.mode, D = ns(S),
                B = xh(S), O = i.dropDuration, A = {
                    duration: O,
                    curve: Aa.drop,
                    moveTo: i.newHomeClientOffset,
                    opacity: B ? ot.opacity.drop : null,
                    scale: B ? ot.scale.drop : null
                };
            return {
                mapped: {
                    type: "DRAGGING",
                    offset: i.newHomeClientOffset,
                    dimension: C,
                    dropping: A,
                    draggingOver: D,
                    combineWith: B,
                    mode: P,
                    forceShouldAnimate: null,
                    snapshot: r(P, b, D, B, A)
                }
            }
        }
        return null
    };
    return n
}

function as(e) {
    return {
        isDragging: !1,
        isDropAnimating: !1,
        isClone: !1,
        dropAnimation: null,
        mode: null,
        draggingOver: null,
        combineTargetFor: e,
        combineWith: null
    }
}

var Rh = {
    mapped: {
        type: "SECONDARY",
        offset: $e,
        combineTargetFor: null,
        shouldAnimateDisplacement: !0,
        snapshot: as(null)
    }
};

function Dh() {
    var e = ke(function (l, s) {
        return {x: l, y: s}
    }), r = ke(as), t = ke(function (l, s, f) {
        return s === void 0 && (s = null), {
            mapped: {
                type: "SECONDARY",
                offset: l,
                combineTargetFor: s,
                shouldAnimateDisplacement: f,
                snapshot: r(s)
            }
        }
    }), n = function (s) {
        return s ? t($e, s, !0) : null
    }, o = function (s, f, u, m) {
        var g = u.displaced.visible[s], p = Boolean(m.inVirtualList && m.effected[s]), b = sn(u),
            C = b && b.draggableId === s ? f : null;
        if (!g) {
            if (!p) return n(C);
            if (u.displaced.invisible[s]) return null;
            var S = Hr(m.displacedBy.point), P = e(S.x, S.y);
            return t(P, C, !0)
        }
        if (p) return n(C);
        var D = u.displacedBy.point, B = e(D.x, D.y);
        return t(B, C, g.shouldAnimate)
    }, i = function (s, f) {
        if (s.isDragging) return s.critical.draggable.id === f.draggableId ? null : o(f.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
        if (s.phase === "DROP_ANIMATING") {
            var u = s.completed;
            return u.result.draggableId === f.draggableId ? null : o(f.draggableId, u.result.draggableId, u.impact, u.afterCritical)
        }
        return null
    };
    return i
}

var Eh = function () {
    var r = Ph(), t = Dh(), n = function (i, l) {
        return r(i, l) || t(i, l) || Rh
    };
    return n
}, Bh = {dropAnimationFinished: Wl}, Oh = ll(Eh, Bh, null, {context: Wa, pure: !0, areStatePropsEqual: ts})(Sh);

function os(e) {
    var r = Vt($a), t = r.isUsingCloneFor;
    return t === e.draggableId && !e.isClone ? null : ee.createElement(Oh, e)
}

function Ah(e) {
    var r = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0,
        t = Boolean(e.disableInteractiveElementBlocking), n = Boolean(e.shouldRespectForcePress);
    return ee.createElement(os, ne({}, e, {
        isClone: !1,
        isEnabled: r,
        canDragInteractiveElements: t,
        shouldRespectForcePress: n
    }))
}

function Th(e) {
    var r = G.useContext(fn);
    r || W(!1);
    var t = r.contextId, n = r.isMovementAllowed, o = G.useRef(null), i = G.useRef(null), l = e.children,
        s = e.droppableId, f = e.type, u = e.mode, m = e.direction, g = e.ignoreContainerClipping, p = e.isDropDisabled,
        b = e.isCombineEnabled, C = e.snapshot, S = e.useClone, P = e.updateViewportMaxScroll,
        D = e.getContainerForClone, B = Y(function () {
            return o.current
        }, []), O = Y(function (pe) {
            o.current = pe
        }, []);
    Y(function () {
        return i.current
    }, []);
    var A = Y(function (pe) {
        i.current = pe
    }, []), k = Y(function () {
        n() && P({maxScroll: zl()})
    }, [n, P]);
    lh({
        droppableId: s,
        type: f,
        mode: u,
        direction: m,
        isDropDisabled: p,
        isCombineEnabled: b,
        ignoreContainerClipping: g,
        getDroppableRef: B
    });
    var j = ee.createElement(fh, {on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder}, function (pe) {
        var Le = pe.onClose, H = pe.data, V = pe.animate;
        return ee.createElement(dh, {
            placeholder: H,
            onClose: Le,
            innerRef: A,
            animate: V,
            contextId: t,
            onTransitionEnd: k
        })
    }), J = me(function () {
        return {
            innerRef: O,
            placeholder: j,
            droppableProps: {"data-rbd-droppable-id": s, "data-rbd-droppable-context-id": t}
        }
    }, [t, s, j, O]), fe = S ? S.dragging.draggableId : null, le = me(function () {
        return {droppableId: s, type: f, isUsingCloneFor: fe}
    }, [s, fe, f]);

    function be() {
        if (!S) return null;
        var pe = S.dragging, Le = S.render, H = ee.createElement(os, {
            draggableId: pe.draggableId,
            index: pe.source.index,
            isClone: !0,
            isEnabled: !0,
            shouldRespectForcePress: !1,
            canDragInteractiveElements: !0
        }, function (V, se) {
            return Le(V, se, pe)
        });
        return Bu.createPortal(H, D())
    }

    return ee.createElement($a.Provider, {value: le}, l(J, C), be())
}

var Ln = function (r, t) {
    return r === t.droppable.type
}, Bi = function (r, t) {
    return t.draggables[r.draggable.id]
}, Mh = function () {
    var r = {
        placeholder: null,
        shouldAnimatePlaceholder: !0,
        snapshot: {isDraggingOver: !1, draggingOverWith: null, draggingFromThisWith: null, isUsingPlaceholder: !1},
        useClone: null
    }, t = ne({}, r, {shouldAnimatePlaceholder: !1}), n = ke(function (l) {
        return {draggableId: l.id, type: l.type, source: {index: l.index, droppableId: l.droppableId}}
    }), o = ke(function (l, s, f, u, m, g) {
        var p = m.descriptor.id, b = m.descriptor.droppableId === l;
        if (b) {
            var C = g ? {render: g, dragging: n(m.descriptor)} : null, S = {
                isDraggingOver: f,
                draggingOverWith: f ? p : null,
                draggingFromThisWith: p,
                isUsingPlaceholder: !0
            };
            return {placeholder: m.placeholder, shouldAnimatePlaceholder: !1, snapshot: S, useClone: C}
        }
        if (!s) return t;
        if (!u) return r;
        var P = {isDraggingOver: f, draggingOverWith: p, draggingFromThisWith: null, isUsingPlaceholder: !0};
        return {placeholder: m.placeholder, shouldAnimatePlaceholder: !0, snapshot: P, useClone: null}
    }), i = function (s, f) {
        var u = f.droppableId, m = f.type, g = !f.isDropDisabled, p = f.renderClone;
        if (s.isDragging) {
            var b = s.critical;
            if (!Ln(m, b)) return t;
            var C = Bi(b, s.dimensions), S = er(s.impact) === u;
            return o(u, g, S, S, C, p)
        }
        if (s.phase === "DROP_ANIMATING") {
            var P = s.completed;
            if (!Ln(m, P.critical)) return t;
            var D = Bi(P.critical, s.dimensions);
            return o(u, g, ns(P.result) === u, er(P.impact) === u, D, p)
        }
        if (s.phase === "IDLE" && s.completed && !s.shouldFlush) {
            var B = s.completed;
            if (!Ln(m, B.critical)) return t;
            var O = er(B.impact) === u, A = Boolean(B.impact.at && B.impact.at.type === "COMBINE"),
                k = B.critical.droppable.id === u;
            return O ? A ? r : t : k ? r : t
        }
        return t
    };
    return i
}, Nh = {updateViewportMaxScroll: zv};

function Fh() {
    return document.body || W(!1), document.body
}

var Lh = {
    mode: "standard",
    type: "DEFAULT",
    direction: "vertical",
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: Fh
}, is = ll(Mh, Nh, null, {context: Wa, pure: !0, areStatePropsEqual: ts})(Th);
is.defaultProps = Lh;
const Wh = "_columnManagerRow_e56pa_1", Gh = "_columnManageLabel_e56pa_7", kh = "_columnManageSwitch_e56pa_11",
    Wn = {columnManagerRow: Wh, columnManageLabel: Gh, columnManageSwitch: kh},
    $h = (e, r) => ({...r, ...e && {background: "transparent"}});

function Hh({isOpen: e, onRequestClose: r, columns: t, hiddenColumns: n, setColumns: o, setHiddenColumns: i}) {
    const {t: l} = it(), s = u => {
        if (!u.destination) return;
        const m = Array.from(t), [g] = m.splice(u.source.index, 1);
        m.splice(u.destination.index, 0, g), o(m), localStorage.setItem("columns", JSON.stringify(m))
    }, f = (u, m) => {
        if (!m) n.push(u.accessor); else {
            const g = n.indexOf(u.accessor);
            n.splice(g, 1)
        }
        i(Array.from(n)), localStorage.setItem("hiddenColumns", JSON.stringify(n))
    };
    return U($i, {
        isOpen: e,
        onRequestClose: r,
        children: U("div", {
            children: U(Xm, {
                onDragEnd: s,
                children: U(is, {
                    droppableId: "droppable-modal",
                    children: u => Re("div", {
                        ...u.droppableProps,
                        ref: u.innerRef,
                        children: [t.filter(m => m.accessor !== "id").map(m => {
                            const g = !n.includes(m.accessor);
                            return U(Ah, {
                                draggableId: m.accessor,
                                index: t.findIndex(p => p.accessor === m.accessor),
                                children: (p, b) => Re("div", {
                                    ref: p.innerRef, ...p.draggableProps, ...p.dragHandleProps,
                                    className: Wn.columnManagerRow,
                                    style: $h(b.isDragging, p.draggableProps.style),
                                    children: [U(qu, {}), U("span", {
                                        className: Wn.columnManageLabel,
                                        children: l(m.Header)
                                    }), U("div", {
                                        className: Wn.columnManageSwitch,
                                        children: U(Ou, {size: "mini", checked: g, onChange: C => f(m, C)})
                                    })]
                                })
                            }, m.accessor)
                        }), u.placeholder]
                    })
                })
            })
        })
    })
}

const zh = "_sourceipTable_2lem6_1", jh = "_iptableTipContainer_2lem6_5",
    Oi = {sourceipTable: zh, iptableTipContainer: jh};

function Vh({isOpen: e, onRequestClose: r, sourceMap: t, setSourceMap: n}) {
    const {t: o} = it(), i = (l, s, f) => {
        t[s][l] = f, n(Array.from(t))
    };
    return Re($i, {
        isOpen: e,
        onRequestClose: r,
        children: [Re("table", {
            className: Oi.sourceipTable,
            children: [U("thead", {children: Re("tr", {children: [U("th", {children: o("c_source")}), U("th", {children: o("device_name")})]})}), U("tbody", {
                children: t.map((l, s) => Re("tr", {
                    children: [U("td", {
                        children: U(kn, {
                            type: "text",
                            name: "reg",
                            autoComplete: "off",
                            value: l.reg,
                            onChange: f => i("reg", s, f.target.value)
                        })
                    }), U("td", {
                        children: U(kn, {
                            type: "text",
                            name: "name",
                            autoComplete: "off",
                            value: l.name,
                            onChange: f => i("name", s, f.target.value)
                        })
                    }), U("td", {children: U(Tt, {onClick: () => t.splice(s, 1), children: o("delete")})})]
                }, `${s}`))
            })]
        }), Re("div", {
            children: [U("div", {
                className: Oi.iptableTipContainer,
                children: o("sourceip_tip")
            }), U(Tt, {onClick: () => t.push({reg: "", name: ""}), children: o("add_tag")})]
        })]
    })
}

const {useEffect: Uh, useState: Qe, useRef: qh, useCallback: wr} = ee, ra = "ALL_SOURCE_IP",
    _h = localStorage.getItem("sourceMap") ? JSON.parse(localStorage.getItem("sourceMap")) : [], Xh = 30;

function Kh(e) {
    const r = {};
    for (let t = 0; t < e.length; t++) {
        const n = e[t];
        r[n.id] = n
    }
    return r
}

function Yh(e, r) {
    return e.toLowerCase().includes(r.toLowerCase())
}

function Jh(e, r) {
    return e.filter(t => t.sourceIP === r)
}

function Ai(e, r, t) {
    let n = e;
    return r !== "" && (n = e.filter(o => [o.host, o.sourceIP, o.sourcePort, o.destinationIP, o.chains, o.rule, o.type, o.network, o.process].some(i => Yh(i, r)))), t !== ra && (n = Jh(n, t)), n
}

function ls(e, r, t) {
    let n = t ?? e;
    return r.forEach(({reg: o, name: i}) => {
        o && (o.startsWith("/") ? new RegExp(o.replace("/", ""), "g").test(e) && i && (n = `${i}(${e})`) : e === o && i && (n = `${i}(${e})`))
    }), n
}

function Qh(e, r, t, n) {
    const {id: o, metadata: i, upload: l, download: s, start: f, chains: u, rule: m, rulePayload: g} = e, {
        host: p,
        destinationPort: b,
        destinationIP: C,
        remoteDestination: S,
        network: P,
        type: D,
        sourceIP: B,
        sourcePort: O,
        process: A,
        sniffHost: k
    } = i;
    let j = p;
    j === "" && (j = C);
    const J = r[o], fe = `${B}:${O}`;
    return {
        id: o,
        upload: l,
        download: s,
        start: t - new Date(f).valueOf(),
        chains: Zh(u),
        rule: g ? `${m} :: ${g}` : m, ...i,
        host: `${j}:${b}`,
        sniffHost: k || "-",
        type: `${D}(${P})`,
        source: ls(B, n, fe),
        downloadSpeedCurr: s - (J ? J.download : 0),
        uploadSpeedCurr: l - (J ? J.upload : 0),
        process: A || "-",
        destinationIP: S || C || p
    }
}

function Zh(e) {
    if (!Array.isArray(e) || e.length === 0) return "";
    if (e.length === 1) return e[0];
    if (e.length === 2) return `${e[1]} -> ${e[0]}`;
    const r = e.pop(), t = e.shift();
    return `${r} -> ${t}`
}

function Ti(e, r, t) {
    return t.length > 0 ? U(of, {data: t, columns: e, hiddenColumns: r}) : U("div", {
        className: Lr.placeHolder,
        children: U(Nu, {width: 200, height: 200, c1: "var(--color-text)"})
    })
}

function Mi({qty: e}) {
    return e < 100 ? "" + e : "99+"
}

const Bt = !0, ss = ["id"], ta = [{accessor: "id", show: !1}, {Header: "c_type", accessor: "type"}, {
        Header: "c_process",
        accessor: "process"
    }, {Header: "c_host", accessor: "host"}, {Header: "c_rule", accessor: "rule"}, {
        Header: "c_chains",
        accessor: "chains"
    }, {Header: "c_time", accessor: "start"}, {
        Header: "c_dl_speed",
        accessor: "downloadSpeedCurr",
        sortDescFirst: Bt
    }, {Header: "c_ul_speed", accessor: "uploadSpeedCurr", sortDescFirst: Bt}, {
        Header: "c_dl",
        accessor: "download",
        sortDescFirst: Bt
    }, {Header: "c_ul", accessor: "upload", sortDescFirst: Bt}, {
        Header: "c_source",
        accessor: "source"
    }, {Header: "c_destination_ip", accessor: "destinationIP"}, {Header: "c_sni", accessor: "sniffHost"}, {
        Header: "c_ctrl",
        accessor: "ctrl"
    }], Ni = localStorage.getItem("hiddenColumns"), Fi = localStorage.getItem("columns"),
    eb = Ni ? JSON.parse(Ni) : [...ss], Gn = Fi ? JSON.parse(Fi) : null, rb = Gn ? [...ta].sort((e, r) => {
        const t = Gn.findIndex(o => o.accessor === e.accessor), n = Gn.findIndex(o => o.accessor === r.accessor);
        return t === -1 ? 1 : n === -1 ? -1 : t - n
    }) : [...ta];

function tb({apiConfig: e}) {
    const {t: r} = it(), [t, n] = Qe(!1), [o, i] = Qe(eb), [l, s] = Qe(rb), f = () => {
            n(!1)
        }, u = () => {
            i([...ss]), s([...ta]), localStorage.removeItem("hiddenColumns"), localStorage.removeItem("columns")
        }, [m, g] = Qe(!1), [p, b] = Qe(_h), [C, S] = Lu(), [P, D] = Qe([]), [B, O] = Qe([]), [A, k] = Qe(""), [j, J] = Qe(ra),
        fe = Ai(P, A, j), le = Ai(B, A, j),
        pe = (xe => [[ra, r("All")], ...Array.from(new Set(xe.map(Ue => Ue.sourceIP))).sort().map(Ue => [Ue, ls(Ue, p).trim() || r("internel")])])(P), [Le, H] = Qe(!1),
        V = wr(() => H(!0), []), se = wr(() => H(!1), []), Ie = wr(async () => {
            for (const xe of fe) await Wi(e, xe.id);
            se()
        }, [e, fe, se]), [Se, we] = Qe(!1), Ee = wr(() => we(!0), []), De = wr(() => we(!1), []), [Oe, Fe] = Qe(!1),
        ur = wr(() => {
            Fe(xe => !xe)
        }, []), Ve = wr(() => {
            Au(e), De()
        }, [e, De]), Ae = qh(P), We = wr(({connections: xe}) => {
            const Ue = Kh(Ae.current), vr = Date.now(), Je = xe.map(ar => Qh(ar, Ue, vr, p)), Dr = [];
            for (const ar of Ae.current) Je.findIndex(Vr => Vr.id === ar.id) < 0 && Dr.push(ar);
            O(ar => [...Dr, ...ar].slice(0, 101)), Je && (Je.length !== 0 || Ae.current.length !== 0) && !Oe ? (Ae.current = Je, D(Je)) : Ae.current = Je
        }, [D, p, Oe]), [cr, nr] = Qe(0);
    Uh(() => Tu(e, We, () => {
        setTimeout(() => {
            nr(xe => xe + 1)
        }, 1e3)
    }), [e, We, cr, nr]);
    const dr = () => {
        p.length === 0 && p.push({reg: "", name: ""}), g(!0)
    }, Ke = () => {
        b(p.filter(xe => xe.reg || xe.name)), localStorage.setItem("sourceMap", JSON.stringify(p)), g(!1)
    };
    return Re("div", {
        children: [Re("div", {
            className: Lr.header,
            children: [U(Mu, {title: r("Connections")}), U("div", {
                className: Lr.inputWrapper,
                children: U(kn, {
                    type: "text",
                    name: "filter",
                    autoComplete: "off",
                    className: Lr.input,
                    placeholder: r("Search"),
                    onChange: xe => k(xe.target.value)
                })
            })]
        }), Re(qt, {
            children: [Re("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    paddingLeft: "30px",
                    justifyContent: "flex-start"
                },
                children: [Re(_t, {
                    style: {padding: "0 15px 0 0"},
                    children: [Re(Zr, {
                        children: [U("span", {children: r("Active")}), U("span", {
                            className: Lr.connQty,
                            children: U(Mi, {qty: fe.length})
                        })]
                    }), Re(Zr, {
                        children: [U("span", {children: r("Closed")}), U("span", {
                            className: Lr.connQty,
                            children: U(Mi, {qty: le.length})
                        })]
                    })]
                }), U(Fu, {options: pe, selected: j, style: {width: "unset"}, onChange: xe => J(xe.target.value)})]
            }), U("div", {
                ref: C,
                style: {padding: 30, paddingBottom: 10, paddingTop: 10},
                children: Re("div", {
                    style: {height: S - Xh, overflow: "auto"},
                    children: [Re(et, {
                        children: [Ti(l, o, fe), Re(Mo, {
                            icon: Oe ? U(zu, {size: 16}) : U(ju, {size: 16}),
                            mainButtonStyles: Oe ? {background: "#e74c3c"} : {},
                            style: No,
                            text: r(Oe ? "Resume Refresh" : "Pause Refresh"),
                            onClick: ur,
                            children: [U(Br, {
                                text: r("close_all_connections"),
                                onClick: Ee,
                                children: U(To, {size: 10})
                            }), U(Br, {
                                text: r("close_filter_connections"),
                                onClick: V,
                                children: U(To, {size: 10})
                            }), U(Br, {
                                text: r("manage_column"),
                                onClick: () => n(!0),
                                children: U(Lo, {size: 10})
                            }), U(Br, {
                                text: r("reset_column"),
                                onClick: u,
                                children: U(Fo, {size: 10})
                            }), U(Br, {text: r("client_tag"), onClick: dr, children: U(Wo, {size: 10})})]
                        })]
                    }), Re(et, {
                        children: [Ti(l, o, le), Re(Mo, {
                            icon: U(Lo, {size: 16}),
                            style: No,
                            text: r("manage_column"),
                            onClick: () => n(!0),
                            children: [U(Br, {
                                text: r("reset_column"),
                                onClick: u,
                                children: U(Fo, {size: 10})
                            }), U(Br, {text: r("client_tag"), onClick: dr, children: U(Wo, {size: 10})})]
                        })]
                    })]
                })
            }), U(qn, {
                isOpen: Se,
                primaryButtonOnTap: Ve,
                onRequestClose: De
            }), U(qn, {
                confirm: "close_filter_connections",
                isOpen: Le,
                primaryButtonOnTap: Ie,
                onRequestClose: se
            }), U(Hh, {
                isOpen: t,
                onRequestClose: f,
                columns: l,
                hiddenColumns: o,
                setColumns: s,
                setHiddenColumns: i
            }), U(Vh, {isOpen: m, onRequestClose: Ke, sourceMap: p, setSourceMap: b})]
        })]
    })
}

const nb = e => ({apiConfig: Gi(e)}), pb = Li(nb)(tb);
export {pb as default};
