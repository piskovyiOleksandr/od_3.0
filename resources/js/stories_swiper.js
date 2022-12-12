const ye = function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
    new MutationObserver(r => {
        for (const n of r)
            if (n.type === "childList")
                for (const a of n.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && s(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function i(r) {
        const n = {};
        return r.integrity && (n.integrity = r.integrity), r.referrerpolicy && (n.referrerPolicy = r.referrerpolicy), r.crossorigin === "use-credentials" ? n.credentials = "include" : r.crossorigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
    }

    function s(r) {
        if (r.ep) return;
        r.ep = !0;
        const n = i(r);
        fetch(r.href, n)
    }
};
ye();

function le(t) {
    return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object
}

function ae(t = {}, e = {}) {
    Object.keys(e).forEach(i => {
        typeof t[i] == "undefined" ? t[i] = e[i] : le(e[i]) && le(t[i]) && Object.keys(e[i]).length > 0 && ae(t[i], e[i])
    })
}
const he = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};

function G() {
    const t = typeof document != "undefined" ? document : {};
    return ae(t, he), t
}
const xe = {
    document: he,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(t) {
        return typeof setTimeout == "undefined" ? (t(), null) : setTimeout(t, 0)
    },
    cancelAnimationFrame(t) {
        typeof setTimeout != "undefined" && clearTimeout(t)
    }
};

function k() {
    const t = typeof window != "undefined" ? window : {};
    return ae(t, xe), t
}

function Ee(t) {
    const e = t.__proto__;
    Object.defineProperty(t, "__proto__", {
        get() {
            return e
        },
        set(i) {
            e.__proto__ = i
        }
    })
}
class _ extends Array {
    constructor(e) {
        typeof e == "number" ? super(e) : (super(...e || []), Ee(this))
    }
}

function X(t = []) {
    const e = [];
    return t.forEach(i => {
        Array.isArray(i) ? e.push(...X(i)) : e.push(i)
    }), e
}

function me(t, e) {
    return Array.prototype.filter.call(t, e)
}

function Ce(t) {
    const e = [];
    for (let i = 0; i < t.length; i += 1) e.indexOf(t[i]) === -1 && e.push(t[i]);
    return e
}

function Pe(t, e) {
    if (typeof t != "string") return [t];
    const i = [],
        s = e.querySelectorAll(t);
    for (let r = 0; r < s.length; r += 1) i.push(s[r]);
    return i
}

function g(t, e) {
    const i = k(),
        s = G();
    let r = [];
    if (!e && t instanceof _) return t;
    if (!t) return new _(r);
    if (typeof t == "string") {
        const n = t.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
            let a = "div";
            n.indexOf("<li") === 0 && (a = "ul"), n.indexOf("<tr") === 0 && (a = "tbody"), (n.indexOf("<td") === 0 || n.indexOf("<th") === 0) && (a = "tr"), n.indexOf("<tbody") === 0 && (a = "table"), n.indexOf("<option") === 0 && (a = "select");
            const l = s.createElement(a);
            l.innerHTML = n;
            for (let o = 0; o < l.childNodes.length; o += 1) r.push(l.childNodes[o])
        } else r = Pe(t.trim(), e || s)
    } else if (t.nodeType || t === i || t === s) r.push(t);
    else if (Array.isArray(t)) {
        if (t instanceof _) return t;
        r = t
    }
    return new _(Ce(r))
}
g.fn = _.prototype;

function Me(...t) {
    const e = X(t.map(i => i.split(" ")));
    return this.forEach(i => {
        i.classList.add(...e)
    }), this
}

function Le(...t) {
    const e = X(t.map(i => i.split(" ")));
    return this.forEach(i => {
        i.classList.remove(...e)
    }), this
}

function $e(...t) {
    const e = X(t.map(i => i.split(" ")));
    this.forEach(i => {
        e.forEach(s => {
            i.classList.toggle(s)
        })
    })
}

function Ae(...t) {
    const e = X(t.map(i => i.split(" ")));
    return me(this, i => e.filter(s => i.classList.contains(s)).length > 0).length > 0
}

function Oe(t, e) {
    if (arguments.length === 1 && typeof t == "string") return this[0] ? this[0].getAttribute(t) : void 0;
    for (let i = 0; i < this.length; i += 1)
        if (arguments.length === 2) this[i].setAttribute(t, e);
        else
            for (const s in t) this[i][s] = t[s], this[i].setAttribute(s, t[s]);
    return this
}

function Ie(t) {
    for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
    return this
}

function ke(t) {
    for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
    return this
}

function ze(t) {
    for (let e = 0; e < this.length; e += 1) this[e].style.transitionDuration = typeof t != "string" ? `${t}ms` : t;
    return this
}

function De(...t) {
    let [e, i, s, r] = t;
    typeof t[1] == "function" && ([e, s, r] = t, i = void 0), r || (r = !1);

    function n(d) {
        const c = d.target;
        if (!c) return;
        const f = d.target.dom7EventData || [];
        if (f.indexOf(d) < 0 && f.unshift(d), g(c).is(i)) s.apply(c, f);
        else {
            const u = g(c).parents();
            for (let p = 0; p < u.length; p += 1) g(u[p]).is(i) && s.apply(u[p], f)
        }
    }

    function a(d) {
        const c = d && d.target ? d.target.dom7EventData || [] : [];
        c.indexOf(d) < 0 && c.unshift(d), s.apply(this, c)
    }
    const l = e.split(" ");
    let o;
    for (let d = 0; d < this.length; d += 1) {
        const c = this[d];
        if (i)
            for (o = 0; o < l.length; o += 1) {
                const f = l[o];
                c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[f] || (c.dom7LiveListeners[f] = []), c.dom7LiveListeners[f].push({
                    listener: s,
                    proxyListener: n
                }), c.addEventListener(f, n, r)
            } else
                for (o = 0; o < l.length; o += 1) {
                    const f = l[o];
                    c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[f] || (c.dom7Listeners[f] = []), c.dom7Listeners[f].push({
                        listener: s,
                        proxyListener: a
                    }), c.addEventListener(f, a, r)
                }
    }
    return this
}

function Ne(...t) {
    let [e, i, s, r] = t;
    typeof t[1] == "function" && ([e, s, r] = t, i = void 0), r || (r = !1);
    const n = e.split(" ");
    for (let a = 0; a < n.length; a += 1) {
        const l = n[a];
        for (let o = 0; o < this.length; o += 1) {
            const d = this[o];
            let c;
            if (!i && d.dom7Listeners ? c = d.dom7Listeners[l] : i && d.dom7LiveListeners && (c = d.dom7LiveListeners[l]), c && c.length)
                for (let f = c.length - 1; f >= 0; f -= 1) {
                    const u = c[f];
                    s && u.listener === s || s && u.listener && u.listener.dom7proxy && u.listener.dom7proxy === s ? (d.removeEventListener(l, u.proxyListener, r), c.splice(f, 1)) : s || (d.removeEventListener(l, u.proxyListener, r), c.splice(f, 1))
                }
        }
    }
    return this
}

function Ge(...t) {
    const e = k(),
        i = t[0].split(" "),
        s = t[1];
    for (let r = 0; r < i.length; r += 1) {
        const n = i[r];
        for (let a = 0; a < this.length; a += 1) {
            const l = this[a];
            if (e.CustomEvent) {
                const o = new e.CustomEvent(n, {
                    detail: s,
                    bubbles: !0,
                    cancelable: !0
                });
                l.dom7EventData = t.filter((d, c) => c > 0), l.dispatchEvent(o), l.dom7EventData = [], delete l.dom7EventData
            }
        }
    }
    return this
}

function Be(t) {
    const e = this;

    function i(s) {
        s.target === this && (t.call(this, s), e.off("transitionend", i))
    }
    return t && e.on("transitionend", i), this
}

function Ve(t) {
    if (this.length > 0) {
        if (t) {
            const e = this.styles();
            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
    }
    return null
}

function He(t) {
    if (this.length > 0) {
        if (t) {
            const e = this.styles();
            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
    }
    return null
}

function Fe() {
    if (this.length > 0) {
        const t = k(),
            e = G(),
            i = this[0],
            s = i.getBoundingClientRect(),
            r = e.body,
            n = i.clientTop || r.clientTop || 0,
            a = i.clientLeft || r.clientLeft || 0,
            l = i === t ? t.scrollY : i.scrollTop,
            o = i === t ? t.scrollX : i.scrollLeft;
        return {
            top: s.top + l - n,
            left: s.left + o - a
        }
    }
    return null
}

function Re() {
    const t = k();
    return this[0] ? t.getComputedStyle(this[0], null) : {}
}

function _e(t, e) {
    const i = k();
    let s;
    if (arguments.length === 1)
        if (typeof t == "string") {
            if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(t)
        } else {
            for (s = 0; s < this.length; s += 1)
                for (const r in t) this[s].style[r] = t[r];
            return this
        } if (arguments.length === 2 && typeof t == "string") {
        for (s = 0; s < this.length; s += 1) this[s].style[t] = e;
        return this
    }
    return this
}

function We(t) {
    return t ? (this.forEach((e, i) => {
        t.apply(e, [e, i])
    }), this) : this
}

function qe(t) {
    const e = me(this, t);
    return g(e)
}

function je(t) {
    if (typeof t == "undefined") return this[0] ? this[0].innerHTML : null;
    for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
    return this
}

function Xe(t) {
    if (typeof t == "undefined") return this[0] ? this[0].textContent.trim() : null;
    for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
    return this
}

function Ye(t) {
    const e = k(),
        i = G(),
        s = this[0];
    let r, n;
    if (!s || typeof t == "undefined") return !1;
    if (typeof t == "string") {
        if (s.matches) return s.matches(t);
        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
        if (s.msMatchesSelector) return s.msMatchesSelector(t);
        for (r = g(t), n = 0; n < r.length; n += 1)
            if (r[n] === s) return !0;
        return !1
    }
    if (t === i) return s === i;
    if (t === e) return s === e;
    if (t.nodeType || t instanceof _) {
        for (r = t.nodeType ? [t] : t, n = 0; n < r.length; n += 1)
            if (r[n] === s) return !0;
        return !1
    }
    return !1
}

function Ke() {
    let t = this[0],
        e;
    if (t) {
        for (e = 0;
            (t = t.previousSibling) !== null;) t.nodeType === 1 && (e += 1);
        return e
    }
}

function Ue(t) {
    if (typeof t == "undefined") return this;
    const e = this.length;
    if (t > e - 1) return g([]);
    if (t < 0) {
        const i = e + t;
        return i < 0 ? g([]) : g([this[i]])
    }
    return g([this[t]])
}

function Ze(...t) {
    let e;
    const i = G();
    for (let s = 0; s < t.length; s += 1) {
        e = t[s];
        for (let r = 0; r < this.length; r += 1)
            if (typeof e == "string") {
                const n = i.createElement("div");
                for (n.innerHTML = e; n.firstChild;) this[r].appendChild(n.firstChild)
            } else if (e instanceof _)
            for (let n = 0; n < e.length; n += 1) this[r].appendChild(e[n]);
        else this[r].appendChild(e)
    }
    return this
}

function Je(t) {
    const e = G();
    let i, s;
    for (i = 0; i < this.length; i += 1)
        if (typeof t == "string") {
            const r = e.createElement("div");
            for (r.innerHTML = t, s = r.childNodes.length - 1; s >= 0; s -= 1) this[i].insertBefore(r.childNodes[s], this[i].childNodes[0])
        } else if (t instanceof _)
        for (s = 0; s < t.length; s += 1) this[i].insertBefore(t[s], this[i].childNodes[0]);
    else this[i].insertBefore(t, this[i].childNodes[0]);
    return this
}

function Qe(t) {
    return this.length > 0 ? t ? this[0].nextElementSibling && g(this[0].nextElementSibling).is(t) ? g([this[0].nextElementSibling]) : g([]) : this[0].nextElementSibling ? g([this[0].nextElementSibling]) : g([]) : g([])
}

function et(t) {
    const e = [];
    let i = this[0];
    if (!i) return g([]);
    for (; i.nextElementSibling;) {
        const s = i.nextElementSibling;
        t ? g(s).is(t) && e.push(s) : e.push(s), i = s
    }
    return g(e)
}

function tt(t) {
    if (this.length > 0) {
        const e = this[0];
        return t ? e.previousElementSibling && g(e.previousElementSibling).is(t) ? g([e.previousElementSibling]) : g([]) : e.previousElementSibling ? g([e.previousElementSibling]) : g([])
    }
    return g([])
}

function it(t) {
    const e = [];
    let i = this[0];
    if (!i) return g([]);
    for (; i.previousElementSibling;) {
        const s = i.previousElementSibling;
        t ? g(s).is(t) && e.push(s) : e.push(s), i = s
    }
    return g(e)
}

function st(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1) this[i].parentNode !== null && (t ? g(this[i].parentNode).is(t) && e.push(this[i].parentNode) : e.push(this[i].parentNode));
    return g(e)
}

function nt(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1) {
        let s = this[i].parentNode;
        for (; s;) t ? g(s).is(t) && e.push(s) : e.push(s), s = s.parentNode
    }
    return g(e)
}

function rt(t) {
    let e = this;
    return typeof t == "undefined" ? g([]) : (e.is(t) || (e = e.parents(t).eq(0)), e)
}

function at(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1) {
        const s = this[i].querySelectorAll(t);
        for (let r = 0; r < s.length; r += 1) e.push(s[r])
    }
    return g(e)
}

function ot(t) {
    const e = [];
    for (let i = 0; i < this.length; i += 1) {
        const s = this[i].children;
        for (let r = 0; r < s.length; r += 1)(!t || g(s[r]).is(t)) && e.push(s[r])
    }
    return g(e)
}

function lt() {
    for (let t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
    return this
}
const de = {
    addClass: Me,
    removeClass: Le,
    hasClass: Ae,
    toggleClass: $e,
    attr: Oe,
    removeAttr: Ie,
    transform: ke,
    transition: ze,
    on: De,
    off: Ne,
    trigger: Ge,
    transitionEnd: Be,
    outerWidth: Ve,
    outerHeight: He,
    styles: Re,
    offset: Fe,
    css: _e,
    each: We,
    html: je,
    text: Xe,
    is: Ye,
    index: Ke,
    eq: Ue,
    append: Ze,
    prepend: Je,
    next: Qe,
    nextAll: et,
    prev: tt,
    prevAll: it,
    parent: st,
    parents: nt,
    closest: rt,
    find: at,
    children: ot,
    filter: qe,
    remove: lt
};
Object.keys(de).forEach(t => {
    Object.defineProperty(g.fn, t, {
        value: de[t],
        writable: !0
    })
});

function dt(t) {
    const e = t;
    Object.keys(e).forEach(i => {
        try {
            e[i] = null
        } catch {}
        try {
            delete e[i]
        } catch {}
    })
}

function re(t, e) {
    return e === void 0 && (e = 0), setTimeout(t, e)
}

function q() {
    return Date.now()
}

function ct(t) {
    const e = k();
    let i;
    return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i
}

function ft(t, e) {
    e === void 0 && (e = "x");
    const i = k();
    let s, r, n;
    const a = ct(t);
    return i.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(l => l.replace(",", ".")).join(", ")), n = new i.WebKitCSSMatrix(r === "none" ? "" : r)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = n.toString().split(",")), e === "x" && (i.WebKitCSSMatrix ? r = n.m41 : s.length === 16 ? r = parseFloat(s[12]) : r = parseFloat(s[4])), e === "y" && (i.WebKitCSSMatrix ? r = n.m42 : s.length === 16 ? r = parseFloat(s[13]) : r = parseFloat(s[5])), r || 0
}

function Y(t) {
    return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object"
}

function ut(t) {
    return typeof window != "undefined" && typeof window.HTMLElement != "undefined" ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11)
}

function N() {
    const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        e = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
        const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (s != null && !ut(s)) {
            const r = Object.keys(Object(s)).filter(n => e.indexOf(n) < 0);
            for (let n = 0, a = r.length; n < a; n += 1) {
                const l = r[n],
                    o = Object.getOwnPropertyDescriptor(s, l);
                o !== void 0 && o.enumerable && (Y(t[l]) && Y(s[l]) ? s[l].__swiper__ ? t[l] = s[l] : N(t[l], s[l]) : !Y(t[l]) && Y(s[l]) ? (t[l] = {}, s[l].__swiper__ ? t[l] = s[l] : N(t[l], s[l])) : t[l] = s[l])
            }
        }
    }
    return t
}

function K(t, e, i) {
    t.style.setProperty(e, i)
}

function ge(t) {
    let {
        swiper: e,
        targetPosition: i,
        side: s
    } = t;
    const r = k(),
        n = -e.translate;
    let a = null,
        l;
    const o = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
    const d = i > n ? "next" : "prev",
        c = (u, p) => d === "next" && u >= p || d === "prev" && u <= p,
        f = () => {
            l = new Date().getTime(), a === null && (a = l);
            const u = Math.max(Math.min((l - a) / o, 1), 0),
                p = .5 - Math.cos(u * Math.PI) / 2;
            let m = n + p * (i - n);
            if (c(m, i) && (m = i), e.wrapperEl.scrollTo({
                    [s]: m
                }), c(m, i)) {
                e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [s]: m
                    })
                }), r.cancelAnimationFrame(e.cssModeFrameID);
                return
            }
            e.cssModeFrameID = r.requestAnimationFrame(f)
        };
    f()
}
let ee;

function pt() {
    const t = k(),
        e = G();
    return {
        smoothScroll: e.documentElement && "scrollBehavior" in e.documentElement.style,
        touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
        passiveListener: function() {
            let s = !1;
            try {
                const r = Object.defineProperty({}, "passive", {
                    get() {
                        s = !0
                    }
                });
                t.addEventListener("testPassiveListener", null, r)
            } catch {}
            return s
        }(),
        gestures: function() {
            return "ongesturestart" in t
        }()
    }
}

function ve() {
    return ee || (ee = pt()), ee
}
let te;

function ht(t) {
    let {
        userAgent: e
    } = t === void 0 ? {} : t;
    const i = ve(),
        s = k(),
        r = s.navigator.platform,
        n = e || s.navigator.userAgent,
        a = {
            ios: !1,
            android: !1
        },
        l = s.screen.width,
        o = s.screen.height,
        d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = n.match(/(iPad).*OS\s([\d_]+)/);
    const f = n.match(/(iPod)(.*OS\s([\d_]+))?/),
        u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        p = r === "Win32";
    let m = r === "MacIntel";
    const T = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !c && m && i.touch && T.indexOf(`${l}x${o}`) >= 0 && (c = n.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), m = !1), d && !p && (a.os = "android", a.android = !0), (c || u || f) && (a.os = "ios", a.ios = !0), a
}

function mt(t) {
    return t === void 0 && (t = {}), te || (te = ht(t)), te
}
let ie;

function gt() {
    const t = k();

    function e() {
        const i = t.navigator.userAgent.toLowerCase();
        return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0
    }
    return {
        isSafari: e(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
    }
}

function vt() {
    return ie || (ie = gt()), ie
}

function wt(t) {
    let {
        swiper: e,
        on: i,
        emit: s
    } = t;
    const r = k();
    let n = null,
        a = null;
    const l = () => {
            !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"))
        },
        o = () => {
            !e || e.destroyed || !e.initialized || (n = new ResizeObserver(f => {
                a = r.requestAnimationFrame(() => {
                    const {
                        width: u,
                        height: p
                    } = e;
                    let m = u,
                        T = p;
                    f.forEach(S => {
                        let {
                            contentBoxSize: y,
                            contentRect: x,
                            target: b
                        } = S;
                        b && b !== e.el || (m = x ? x.width : (y[0] || y).inlineSize, T = x ? x.height : (y[0] || y).blockSize)
                    }), (m !== u || T !== p) && l()
                })
            }), n.observe(e.el))
        },
        d = () => {
            a && r.cancelAnimationFrame(a), n && n.unobserve && e.el && (n.unobserve(e.el), n = null)
        },
        c = () => {
            !e || e.destroyed || !e.initialized || s("orientationchange")
        };
    i("init", () => {
        if (e.params.resizeObserver && typeof r.ResizeObserver != "undefined") {
            o();
            return
        }
        r.addEventListener("resize", l), r.addEventListener("orientationchange", c)
    }), i("destroy", () => {
        d(), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", c)
    })
}

function St(t) {
    let {
        swiper: e,
        extendParams: i,
        on: s,
        emit: r
    } = t;
    const n = [],
        a = k(),
        l = function(c, f) {
            f === void 0 && (f = {});
            const u = a.MutationObserver || a.WebkitMutationObserver,
                p = new u(m => {
                    if (m.length === 1) {
                        r("observerUpdate", m[0]);
                        return
                    }
                    const T = function() {
                        r("observerUpdate", m[0])
                    };
                    a.requestAnimationFrame ? a.requestAnimationFrame(T) : a.setTimeout(T, 0)
                });
            p.observe(c, {
                attributes: typeof f.attributes == "undefined" ? !0 : f.attributes,
                childList: typeof f.childList == "undefined" ? !0 : f.childList,
                characterData: typeof f.characterData == "undefined" ? !0 : f.characterData
            }), n.push(p)
        },
        o = () => {
            if (!!e.params.observer) {
                if (e.params.observeParents) {
                    const c = e.$el.parents();
                    for (let f = 0; f < c.length; f += 1) l(c[f])
                }
                l(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }), l(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        d = () => {
            n.forEach(c => {
                c.disconnect()
            }), n.splice(0, n.length)
        };
    i({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), s("init", o), s("destroy", d)
}
var Tt = {
    on(t, e, i) {
        const s = this;
        if (typeof e != "function") return s;
        const r = i ? "unshift" : "push";
        return t.split(" ").forEach(n => {
            s.eventsListeners[n] || (s.eventsListeners[n] = []), s.eventsListeners[n][r](e)
        }), s
    },
    once(t, e, i) {
        const s = this;
        if (typeof e != "function") return s;

        function r() {
            s.off(t, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var n = arguments.length, a = new Array(n), l = 0; l < n; l++) a[l] = arguments[l];
            e.apply(s, a)
        }
        return r.__emitterProxy = e, s.on(t, r, i)
    },
    onAny(t, e) {
        const i = this;
        if (typeof t != "function") return i;
        const s = e ? "unshift" : "push";
        return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i
    },
    offAny(t) {
        const e = this;
        if (!e.eventsAnyListeners) return e;
        const i = e.eventsAnyListeners.indexOf(t);
        return i >= 0 && e.eventsAnyListeners.splice(i, 1), e
    },
    off(t, e) {
        const i = this;
        return i.eventsListeners && t.split(" ").forEach(s => {
            typeof e == "undefined" ? i.eventsListeners[s] = [] : i.eventsListeners[s] && i.eventsListeners[s].forEach((r, n) => {
                (r === e || r.__emitterProxy && r.__emitterProxy === e) && i.eventsListeners[s].splice(n, 1)
            })
        }), i
    },
    emit() {
        const t = this;
        if (!t.eventsListeners) return t;
        let e, i, s;
        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
        return typeof n[0] == "string" || Array.isArray(n[0]) ? (e = n[0], i = n.slice(1, n.length), s = t) : (e = n[0].events, i = n[0].data, s = n[0].context || t), i.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach(o => {
            t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(d => {
                d.apply(s, [o, ...i])
            }), t.eventsListeners && t.eventsListeners[o] && t.eventsListeners[o].forEach(d => {
                d.apply(s, i)
            })
        }), t
    }
};

function bt() {
    const t = this;
    let e, i;
    const s = t.$el;
    typeof t.params.width != "undefined" && t.params.width !== null ? e = t.params.width : e = s[0].clientWidth, typeof t.params.height != "undefined" && t.params.height !== null ? i = t.params.height : i = s[0].clientHeight, !(e === 0 && t.isHorizontal() || i === 0 && t.isVertical()) && (e = e - parseInt(s.css("padding-left") || 0, 10) - parseInt(s.css("padding-right") || 0, 10), i = i - parseInt(s.css("padding-top") || 0, 10) - parseInt(s.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(i) && (i = 0), Object.assign(t, {
        width: e,
        height: i,
        size: t.isHorizontal() ? e : i
    }))
}

function yt() {
    const t = this;

    function e(w) {
        return t.isHorizontal() ? w : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        } [w]
    }

    function i(w, C) {
        return parseFloat(w.getPropertyValue(e(C)) || 0)
    }
    const s = t.params,
        {
            $wrapperEl: r,
            size: n,
            rtlTranslate: a,
            wrongRTL: l
        } = t,
        o = t.virtual && s.virtual.enabled,
        d = o ? t.virtual.slides.length : t.slides.length,
        c = r.children(`.${t.params.slideClass}`),
        f = o ? t.virtual.slides.length : c.length;
    let u = [];
    const p = [],
        m = [];
    let T = s.slidesOffsetBefore;
    typeof T == "function" && (T = s.slidesOffsetBefore.call(t));
    let S = s.slidesOffsetAfter;
    typeof S == "function" && (S = s.slidesOffsetAfter.call(t));
    const y = t.snapGrid.length,
        x = t.slidesGrid.length;
    let b = s.spaceBetween,
        v = -T,
        O = 0,
        A = 0;
    if (typeof n == "undefined") return;
    typeof b == "string" && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * n), t.virtualSize = -b, a ? c.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: ""
    }) : c.css({
        marginRight: "",
        marginBottom: "",
        marginTop: ""
    }), s.centeredSlides && s.cssMode && (K(t.wrapperEl, "--swiper-centered-offset-before", ""), K(t.wrapperEl, "--swiper-centered-offset-after", ""));
    const z = s.grid && s.grid.rows > 1 && t.grid;
    z && t.grid.initSlides(f);
    let L;
    const D = s.slidesPerView === "auto" && s.breakpoints && Object.keys(s.breakpoints).filter(w => typeof s.breakpoints[w].slidesPerView != "undefined").length > 0;
    for (let w = 0; w < f; w += 1) {
        L = 0;
        const C = c.eq(w);
        if (z && t.grid.updateSlide(w, C, f, e), C.css("display") !== "none") {
            if (s.slidesPerView === "auto") {
                D && (c[w].style[e("width")] = "");
                const P = getComputedStyle(C[0]),
                    B = C[0].style.transform,
                    H = C[0].style.webkitTransform;
                if (B && (C[0].style.transform = "none"), H && (C[0].style.webkitTransform = "none"), s.roundLengths) L = t.isHorizontal() ? C.outerWidth(!0) : C.outerHeight(!0);
                else {
                    const W = i(P, "width"),
                        U = i(P, "padding-left"),
                        oe = i(P, "padding-right"),
                        Z = i(P, "margin-left"),
                        J = i(P, "margin-right"),
                        Q = P.getPropertyValue("box-sizing");
                    if (Q && Q === "border-box") L = W + Z + J;
                    else {
                        const {
                            clientWidth: h,
                            offsetWidth: E
                        } = C[0];
                        L = W + U + oe + Z + J + (E - h)
                    }
                }
                B && (C[0].style.transform = B), H && (C[0].style.webkitTransform = H), s.roundLengths && (L = Math.floor(L))
            } else L = (n - (s.slidesPerView - 1) * b) / s.slidesPerView, s.roundLengths && (L = Math.floor(L)), c[w] && (c[w].style[e("width")] = `${L}px`);
            c[w] && (c[w].swiperSlideSize = L), m.push(L), s.centeredSlides ? (v = v + L / 2 + O / 2 + b, O === 0 && w !== 0 && (v = v - n / 2 - b), w === 0 && (v = v - n / 2 - b), Math.abs(v) < 1 / 1e3 && (v = 0), s.roundLengths && (v = Math.floor(v)), A % s.slidesPerGroup === 0 && u.push(v), p.push(v)) : (s.roundLengths && (v = Math.floor(v)), (A - Math.min(t.params.slidesPerGroupSkip, A)) % t.params.slidesPerGroup === 0 && u.push(v), p.push(v), v = v + L + b), t.virtualSize += L + b, O = L, A += 1
        }
    }
    if (t.virtualSize = Math.max(t.virtualSize, n) + S, a && l && (s.effect === "slide" || s.effect === "coverflow") && r.css({
            width: `${t.virtualSize + s.spaceBetween}px`
        }), s.setWrapperSize && r.css({
            [e("width")]: `${t.virtualSize + s.spaceBetween}px`
        }), z && t.grid.updateWrapperSize(L, u, e), !s.centeredSlides) {
        const w = [];
        for (let C = 0; C < u.length; C += 1) {
            let P = u[C];
            s.roundLengths && (P = Math.floor(P)), u[C] <= t.virtualSize - n && w.push(P)
        }
        u = w, Math.floor(t.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(t.virtualSize - n)
    }
    if (u.length === 0 && (u = [0]), s.spaceBetween !== 0) {
        const w = t.isHorizontal() && a ? "marginLeft" : e("marginRight");
        c.filter((C, P) => s.cssMode ? P !== c.length - 1 : !0).css({
            [w]: `${b}px`
        })
    }
    if (s.centeredSlides && s.centeredSlidesBounds) {
        let w = 0;
        m.forEach(P => {
            w += P + (s.spaceBetween ? s.spaceBetween : 0)
        }), w -= s.spaceBetween;
        const C = w - n;
        u = u.map(P => P < 0 ? -T : P > C ? C + S : P)
    }
    if (s.centerInsufficientSlides) {
        let w = 0;
        if (m.forEach(C => {
                w += C + (s.spaceBetween ? s.spaceBetween : 0)
            }), w -= s.spaceBetween, w < n) {
            const C = (n - w) / 2;
            u.forEach((P, B) => {
                u[B] = P - C
            }), p.forEach((P, B) => {
                p[B] = P + C
            })
        }
    }
    if (Object.assign(t, {
            slides: c,
            snapGrid: u,
            slidesGrid: p,
            slidesSizesGrid: m
        }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
        K(t.wrapperEl, "--swiper-centered-offset-before", `${-u[0]}px`), K(t.wrapperEl, "--swiper-centered-offset-after", `${t.size / 2 - m[m.length - 1] / 2}px`);
        const w = -t.snapGrid[0],
            C = -t.slidesGrid[0];
        t.snapGrid = t.snapGrid.map(P => P + w), t.slidesGrid = t.slidesGrid.map(P => P + C)
    }
    if (f !== d && t.emit("slidesLengthChange"), u.length !== y && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), p.length !== x && t.emit("slidesGridLengthChange"), s.watchSlidesProgress && t.updateSlidesOffset(), !o && !s.cssMode && (s.effect === "slide" || s.effect === "fade")) {
        const w = `${s.containerModifierClass}backface-hidden`,
            C = t.$el.hasClass(w);
        f <= s.maxBackfaceHiddenSlides ? C || t.$el.addClass(w) : C && t.$el.removeClass(w)
    }
}

function xt(t) {
    const e = this,
        i = [],
        s = e.virtual && e.params.virtual.enabled;
    let r = 0,
        n;
    typeof t == "number" ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
    const a = l => s ? e.slides.filter(o => parseInt(o.getAttribute("data-swiper-slide-index"), 10) === l)[0] : e.slides.eq(l)[0];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides) e.visibleSlides.each(l => {
            i.push(l)
        });
        else
            for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
                const l = e.activeIndex + n;
                if (l > e.slides.length && !s) break;
                i.push(a(l))
            } else i.push(a(e.activeIndex));
    for (n = 0; n < i.length; n += 1)
        if (typeof i[n] != "undefined") {
            const l = i[n].offsetHeight;
            r = l > r ? l : r
        }(r || r === 0) && e.$wrapperEl.css("height", `${r}px`)
}

function Et() {
    const t = this,
        e = t.slides;
    for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = t.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop
}

function Ct(t) {
    t === void 0 && (t = this && this.translate || 0);
    const e = this,
        i = e.params,
        {
            slides: s,
            rtlTranslate: r,
            snapGrid: n
        } = e;
    if (s.length === 0) return;
    typeof s[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
    let a = -t;
    r && (a = t), s.removeClass(i.slideVisibleClass), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    for (let l = 0; l < s.length; l += 1) {
        const o = s[l];
        let d = o.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
        const c = (a + (i.centeredSlides ? e.minTranslate() : 0) - d) / (o.swiperSlideSize + i.spaceBetween),
            f = (a - n[0] + (i.centeredSlides ? e.minTranslate() : 0) - d) / (o.swiperSlideSize + i.spaceBetween),
            u = -(a - d),
            p = u + e.slidesSizesGrid[l];
        (u >= 0 && u < e.size - 1 || p > 1 && p <= e.size || u <= 0 && p >= e.size) && (e.visibleSlides.push(o), e.visibleSlidesIndexes.push(l), s.eq(l).addClass(i.slideVisibleClass)), o.progress = r ? -c : c, o.originalProgress = r ? -f : f
    }
    e.visibleSlides = g(e.visibleSlides)
}

function Pt(t) {
    const e = this;
    if (typeof t == "undefined") {
        const d = e.rtlTranslate ? -1 : 1;
        t = e && e.translate && e.translate * d || 0
    }
    const i = e.params,
        s = e.maxTranslate() - e.minTranslate();
    let {
        progress: r,
        isBeginning: n,
        isEnd: a
    } = e;
    const l = n,
        o = a;
    s === 0 ? (r = 0, n = !0, a = !0) : (r = (t - e.minTranslate()) / s, n = r <= 0, a = r >= 1), Object.assign(e, {
        progress: r,
        isBeginning: n,
        isEnd: a
    }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t), n && !l && e.emit("reachBeginning toEdge"), a && !o && e.emit("reachEnd toEdge"), (l && !n || o && !a) && e.emit("fromEdge"), e.emit("progress", r)
}

function Mt() {
    const t = this,
        {
            slides: e,
            params: i,
            $wrapperEl: s,
            activeIndex: r,
            realIndex: n
        } = t,
        a = t.virtual && i.virtual.enabled;
    e.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`);
    let l;
    a ? l = t.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${r}"]`) : l = e.eq(r), l.addClass(i.slideActiveClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(i.slideDuplicateActiveClass));
    let o = l.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
    i.loop && o.length === 0 && (o = e.eq(0), o.addClass(i.slideNextClass));
    let d = l.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
    i.loop && d.length === 0 && (d = e.eq(-1), d.addClass(i.slidePrevClass)), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses()
}

function Lt(t) {
    const e = this,
        i = e.rtlTranslate ? e.translate : -e.translate,
        {
            slidesGrid: s,
            snapGrid: r,
            params: n,
            activeIndex: a,
            realIndex: l,
            snapIndex: o
        } = e;
    let d = t,
        c;
    if (typeof d == "undefined") {
        for (let u = 0; u < s.length; u += 1) typeof s[u + 1] != "undefined" ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? d = u : i >= s[u] && i < s[u + 1] && (d = u + 1) : i >= s[u] && (d = u);
        n.normalizeSlideIndex && (d < 0 || typeof d == "undefined") && (d = 0)
    }
    if (r.indexOf(i) >= 0) c = r.indexOf(i);
    else {
        const u = Math.min(n.slidesPerGroupSkip, d);
        c = u + Math.floor((d - u) / n.slidesPerGroup)
    }
    if (c >= r.length && (c = r.length - 1), d === a) {
        c !== o && (e.snapIndex = c, e.emit("snapIndexChange"));
        return
    }
    const f = parseInt(e.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
    Object.assign(e, {
        snapIndex: c,
        realIndex: f,
        previousIndex: a,
        activeIndex: d
    }), e.emit("activeIndexChange"), e.emit("snapIndexChange"), l !== f && e.emit("realIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
}

function $t(t) {
    const e = this,
        i = e.params,
        s = g(t).closest(`.${i.slideClass}`)[0];
    let r = !1,
        n;
    if (s) {
        for (let a = 0; a < e.slides.length; a += 1)
            if (e.slides[a] === s) {
                r = !0, n = a;
                break
            }
    }
    if (s && r) e.clickedSlide = s, e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(g(s).attr("data-swiper-slide-index"), 10) : e.clickedIndex = n;
    else {
        e.clickedSlide = void 0, e.clickedIndex = void 0;
        return
    }
    i.slideToClickedSlide && e.clickedIndex !== void 0 && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
}
var At = {
    updateSize: bt,
    updateSlides: yt,
    updateAutoHeight: xt,
    updateSlidesOffset: Et,
    updateSlidesProgress: Ct,
    updateProgress: Pt,
    updateSlidesClasses: Mt,
    updateActiveIndex: Lt,
    updateClickedSlide: $t
};

function Ot(t) {
    t === void 0 && (t = this.isHorizontal() ? "x" : "y");
    const e = this,
        {
            params: i,
            rtlTranslate: s,
            translate: r,
            $wrapperEl: n
        } = e;
    if (i.virtualTranslate) return s ? -r : r;
    if (i.cssMode) return r;
    let a = ft(n[0], t);
    return s && (a = -a), a || 0
}

function It(t, e) {
    const i = this,
        {
            rtlTranslate: s,
            params: r,
            $wrapperEl: n,
            wrapperEl: a,
            progress: l
        } = i;
    let o = 0,
        d = 0;
    const c = 0;
    i.isHorizontal() ? o = s ? -t : t : d = t, r.roundLengths && (o = Math.floor(o), d = Math.floor(d)), r.cssMode ? a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -d : r.virtualTranslate || n.transform(`translate3d(${o}px, ${d}px, ${c}px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : d;
    let f;
    const u = i.maxTranslate() - i.minTranslate();
    u === 0 ? f = 0 : f = (t - i.minTranslate()) / u, f !== l && i.updateProgress(t), i.emit("setTranslate", i.translate, e)
}

function kt() {
    return -this.snapGrid[0]
}

function zt() {
    return -this.snapGrid[this.snapGrid.length - 1]
}

function Dt(t, e, i, s, r) {
    t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), s === void 0 && (s = !0);
    const n = this,
        {
            params: a,
            wrapperEl: l
        } = n;
    if (n.animating && a.preventInteractionOnTransition) return !1;
    const o = n.minTranslate(),
        d = n.maxTranslate();
    let c;
    if (s && t > o ? c = o : s && t < d ? c = d : c = t, n.updateProgress(c), a.cssMode) {
        const f = n.isHorizontal();
        if (e === 0) l[f ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!n.support.smoothScroll) return ge({
                swiper: n,
                targetPosition: -c,
                side: f ? "left" : "top"
            }), !0;
            l.scrollTo({
                [f ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (n.setTransition(0), n.setTranslate(c), i && (n.emit("beforeTransitionStart", e, r), n.emit("transitionEnd"))) : (n.setTransition(e), n.setTranslate(c), i && (n.emit("beforeTransitionStart", e, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(u) {
        !n || n.destroyed || u.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
    }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
}
var Nt = {
    getTranslate: Ot,
    setTranslate: It,
    minTranslate: kt,
    maxTranslate: zt,
    translateTo: Dt
};

function Gt(t, e) {
    const i = this;
    i.params.cssMode || i.$wrapperEl.transition(t), i.emit("setTransition", t, e)
}

function we(t) {
    let {
        swiper: e,
        runCallbacks: i,
        direction: s,
        step: r
    } = t;
    const {
        activeIndex: n,
        previousIndex: a
    } = e;
    let l = s;
    if (l || (n > a ? l = "next" : n < a ? l = "prev" : l = "reset"), e.emit(`transition${r}`), i && n !== a) {
        if (l === "reset") {
            e.emit(`slideResetTransition${r}`);
            return
        }
        e.emit(`slideChangeTransition${r}`), l === "next" ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
    }
}

function Bt(t, e) {
    t === void 0 && (t = !0);
    const i = this,
        {
            params: s
        } = i;
    s.cssMode || (s.autoHeight && i.updateAutoHeight(), we({
        swiper: i,
        runCallbacks: t,
        direction: e,
        step: "Start"
    }))
}

function Vt(t, e) {
    t === void 0 && (t = !0);
    const i = this,
        {
            params: s
        } = i;
    i.animating = !1, !s.cssMode && (i.setTransition(0), we({
        swiper: i,
        runCallbacks: t,
        direction: e,
        step: "End"
    }))
}
var Ht = {
    setTransition: Gt,
    transitionStart: Bt,
    transitionEnd: Vt
};

function Ft(t, e, i, s, r) {
    if (t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), typeof t != "number" && typeof t != "string") throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`);
    if (typeof t == "string") {
        const b = parseInt(t, 10);
        if (!isFinite(b)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`);
        t = b
    }
    const n = this;
    let a = t;
    a < 0 && (a = 0);
    const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: f,
        rtlTranslate: u,
        wrapperEl: p,
        enabled: m
    } = n;
    if (n.animating && l.preventInteractionOnTransition || !m && !s && !r) return !1;
    const T = Math.min(n.params.slidesPerGroupSkip, a);
    let S = T + Math.floor((a - T) / n.params.slidesPerGroup);
    S >= o.length && (S = o.length - 1), (f || l.initialSlide || 0) === (c || 0) && i && n.emit("beforeSlideChangeStart");
    const y = -o[S];
    if (n.updateProgress(y), l.normalizeSlideIndex)
        for (let b = 0; b < d.length; b += 1) {
            const v = -Math.floor(y * 100),
                O = Math.floor(d[b] * 100),
                A = Math.floor(d[b + 1] * 100);
            typeof d[b + 1] != "undefined" ? v >= O && v < A - (A - O) / 2 ? a = b : v >= O && v < A && (a = b + 1) : v >= O && (a = b)
        }
    if (n.initialized && a !== f && (!n.allowSlideNext && y < n.translate && y < n.minTranslate() || !n.allowSlidePrev && y > n.translate && y > n.maxTranslate() && (f || 0) !== a)) return !1;
    let x;
    if (a > f ? x = "next" : a < f ? x = "prev" : x = "reset", u && -y === n.translate || !u && y === n.translate) return n.updateActiveIndex(a), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), l.effect !== "slide" && n.setTranslate(y), x !== "reset" && (n.transitionStart(i, x), n.transitionEnd(i, x)), !1;
    if (l.cssMode) {
        const b = n.isHorizontal(),
            v = u ? y : -y;
        if (e === 0) {
            const O = n.virtual && n.params.virtual.enabled;
            O && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), p[b ? "scrollLeft" : "scrollTop"] = v, O && requestAnimationFrame(() => {
                n.wrapperEl.style.scrollSnapType = "", n._swiperImmediateVirtual = !1
            })
        } else {
            if (!n.support.smoothScroll) return ge({
                swiper: n,
                targetPosition: v,
                side: b ? "left" : "top"
            }), !0;
            p.scrollTo({
                [b ? "left" : "top"]: v,
                behavior: "smooth"
            })
        }
        return !0
    }
    return n.setTransition(e), n.setTranslate(y), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", e, s), n.transitionStart(i, x), e === 0 ? n.transitionEnd(i, x) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(v) {
        !n || n.destroyed || v.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, x))
    }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd)), !0
}

function Rt(t, e, i, s) {
    t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0);
    const r = this;
    let n = t;
    return r.params.loop && (n += r.loopedSlides), r.slideTo(n, e, i, s)
}

function _t(t, e, i) {
    t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
    const s = this,
        {
            animating: r,
            enabled: n,
            params: a
        } = s;
    if (!n) return s;
    let l = a.slidesPerGroup;
    a.slidesPerView === "auto" && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const o = s.activeIndex < a.slidesPerGroupSkip ? 1 : l;
    if (a.loop) {
        if (r && a.loopPreventsSlide) return !1;
        s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
    }
    return a.rewind && s.isEnd ? s.slideTo(0, t, e, i) : s.slideTo(s.activeIndex + o, t, e, i)
}

function Wt(t, e, i) {
    t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
    const s = this,
        {
            params: r,
            animating: n,
            snapGrid: a,
            slidesGrid: l,
            rtlTranslate: o,
            enabled: d
        } = s;
    if (!d) return s;
    if (r.loop) {
        if (n && r.loopPreventsSlide) return !1;
        s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
    }
    const c = o ? s.translate : -s.translate;

    function f(S) {
        return S < 0 ? -Math.floor(Math.abs(S)) : Math.floor(S)
    }
    const u = f(c),
        p = a.map(S => f(S));
    let m = a[p.indexOf(u) - 1];
    if (typeof m == "undefined" && r.cssMode) {
        let S;
        a.forEach((y, x) => {
            u >= y && (S = x)
        }), typeof S != "undefined" && (m = a[S > 0 ? S - 1 : S])
    }
    let T = 0;
    if (typeof m != "undefined" && (T = l.indexOf(m), T < 0 && (T = s.activeIndex - 1), r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (T = T - s.slidesPerViewDynamic("previous", !0) + 1, T = Math.max(T, 0))), r.rewind && s.isBeginning) {
        const S = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
        return s.slideTo(S, t, e, i)
    }
    return s.slideTo(T, t, e, i)
}

function qt(t, e, i) {
    t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
    const s = this;
    return s.slideTo(s.activeIndex, t, e, i)
}

function jt(t, e, i, s) {
    t === void 0 && (t = this.params.speed), e === void 0 && (e = !0), s === void 0 && (s = .5);
    const r = this;
    let n = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, n),
        l = a + Math.floor((n - a) / r.params.slidesPerGroup),
        o = r.rtlTranslate ? r.translate : -r.translate;
    if (o >= r.snapGrid[l]) {
        const d = r.snapGrid[l],
            c = r.snapGrid[l + 1];
        o - d > (c - d) * s && (n += r.params.slidesPerGroup)
    } else {
        const d = r.snapGrid[l - 1],
            c = r.snapGrid[l];
        o - d <= (c - d) * s && (n -= r.params.slidesPerGroup)
    }
    return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, t, e, i)
}

function Xt() {
    const t = this,
        {
            params: e,
            $wrapperEl: i
        } = t,
        s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
    let r = t.clickedIndex,
        n;
    if (e.loop) {
        if (t.animating) return;
        n = parseInt(g(t.clickedSlide).attr("data-swiper-slide-index"), 10), e.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children(`.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`).eq(0).index(), re(() => {
            t.slideTo(r)
        })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children(`.${e.slideClass}[data-swiper-slide-index="${n}"]:not(.${e.slideDuplicateClass})`).eq(0).index(), re(() => {
            t.slideTo(r)
        })) : t.slideTo(r)
    } else t.slideTo(r)
}
var Yt = {
    slideTo: Ft,
    slideToLoop: Rt,
    slideNext: _t,
    slidePrev: Wt,
    slideReset: qt,
    slideToClosest: jt,
    slideToClickedSlide: Xt
};

function Kt() {
    const t = this,
        e = G(),
        {
            params: i,
            $wrapperEl: s
        } = t,
        r = s.children().length > 0 ? g(s.children()[0].parentNode) : s;
    r.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
    let n = r.children(`.${i.slideClass}`);
    if (i.loopFillGroupWithBlank) {
        const o = i.slidesPerGroup - n.length % i.slidesPerGroup;
        if (o !== i.slidesPerGroup) {
            for (let d = 0; d < o; d += 1) {
                const c = g(e.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                r.append(c)
            }
            n = r.children(`.${i.slideClass}`)
        }
    }
    i.slidesPerView === "auto" && !i.loopedSlides && (i.loopedSlides = n.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > n.length && (t.loopedSlides = n.length);
    const a = [],
        l = [];
    n.each((o, d) => {
        const c = g(o);
        d < t.loopedSlides && l.push(o), d < n.length && d >= n.length - t.loopedSlides && a.push(o), c.attr("data-swiper-slide-index", d)
    });
    for (let o = 0; o < l.length; o += 1) r.append(g(l[o].cloneNode(!0)).addClass(i.slideDuplicateClass));
    for (let o = a.length - 1; o >= 0; o -= 1) r.prepend(g(a[o].cloneNode(!0)).addClass(i.slideDuplicateClass))
}

function Ut() {
    const t = this;
    t.emit("beforeLoopFix");
    const {
        activeIndex: e,
        slides: i,
        loopedSlides: s,
        allowSlidePrev: r,
        allowSlideNext: n,
        snapGrid: a,
        rtlTranslate: l
    } = t;
    let o;
    t.allowSlidePrev = !0, t.allowSlideNext = !0;
    const c = -a[e] - t.getTranslate();
    e < s ? (o = i.length - s * 3 + e, o += s, t.slideTo(o, 0, !1, !0) && c !== 0 && t.setTranslate((l ? -t.translate : t.translate) - c)) : e >= i.length - s && (o = -i.length + e + s, o += s, t.slideTo(o, 0, !1, !0) && c !== 0 && t.setTranslate((l ? -t.translate : t.translate) - c)), t.allowSlidePrev = r, t.allowSlideNext = n, t.emit("loopFix")
}

function Zt() {
    const t = this,
        {
            $wrapperEl: e,
            params: i,
            slides: s
        } = t;
    e.children(`.${i.slideClass}.${i.slideDuplicateClass},.${i.slideClass}.${i.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
}
var Jt = {
    loopCreate: Kt,
    loopFix: Ut,
    loopDestroy: Zt
};

function Qt(t) {
    const e = this;
    if (e.support.touch || !e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
    const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    i.style.cursor = "move", i.style.cursor = t ? "grabbing" : "grab"
}

function ei() {
    const t = this;
    t.support.touch || t.params.watchOverflow && t.isLocked || t.params.cssMode || (t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "")
}
var ti = {
    setGrabCursor: Qt,
    unsetGrabCursor: ei
};

function ii(t, e) {
    e === void 0 && (e = this);

    function i(s) {
        return !s || s === G() || s === k() ? null : (s.assignedSlot && (s = s.assignedSlot), s.closest(t) || i(s.getRootNode().host))
    }
    return i(e)
}

function si(t) {
    const e = this,
        i = G(),
        s = k(),
        r = e.touchEventsData,
        {
            params: n,
            touches: a,
            enabled: l
        } = e;
    if (!l || e.animating && n.preventInteractionOnTransition) return;
    !e.animating && n.cssMode && n.loop && e.loopFix();
    let o = t;
    o.originalEvent && (o = o.originalEvent);
    let d = g(o.target);
    if (n.touchEventsTarget === "wrapper" && !d.closest(e.wrapperEl).length || (r.isTouchEvent = o.type === "touchstart", !r.isTouchEvent && "which" in o && o.which === 3) || !r.isTouchEvent && "button" in o && o.button > 0 || r.isTouched && r.isMoved) return;
    !!n.noSwipingClass && n.noSwipingClass !== "" && o.target && o.target.shadowRoot && t.path && t.path[0] && (d = g(t.path[0]));
    const f = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
        u = !!(o.target && o.target.shadowRoot);
    if (n.noSwiping && (u ? ii(f, o.target) : d.closest(f)[0])) {
        e.allowClick = !0;
        return
    }
    if (n.swipeHandler && !d.closest(n.swipeHandler)[0]) return;
    a.currentX = o.type === "touchstart" ? o.targetTouches[0].pageX : o.pageX, a.currentY = o.type === "touchstart" ? o.targetTouches[0].pageY : o.pageY;
    const p = a.currentX,
        m = a.currentY,
        T = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
        S = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
    if (T && (p <= S || p >= s.innerWidth - S))
        if (T === "prevent") t.preventDefault();
        else return;
    if (Object.assign(r, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), a.startX = p, a.startY = m, r.touchStartTime = q(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = !1), o.type !== "touchstart") {
        let y = !0;
        d.is(r.focusableElements) && (y = !1, d[0].nodeName === "SELECT" && (r.isTouched = !1)), i.activeElement && g(i.activeElement).is(r.focusableElements) && i.activeElement !== d[0] && i.activeElement.blur();
        const x = y && e.allowTouchMove && n.touchStartPreventDefault;
        (n.touchStartForcePreventDefault || x) && !d[0].isContentEditable && o.preventDefault()
    }
    e.params.freeMode && e.params.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", o)
}

function ni(t) {
    const e = G(),
        i = this,
        s = i.touchEventsData,
        {
            params: r,
            touches: n,
            rtlTranslate: a,
            enabled: l
        } = i;
    if (!l) return;
    let o = t;
    if (o.originalEvent && (o = o.originalEvent), !s.isTouched) {
        s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", o);
        return
    }
    if (s.isTouchEvent && o.type !== "touchmove") return;
    const d = o.type === "touchmove" && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
        c = o.type === "touchmove" ? d.pageX : o.pageX,
        f = o.type === "touchmove" ? d.pageY : o.pageY;
    if (o.preventedByNestedSwiper) {
        n.startX = c, n.startY = f;
        return
    }
    if (!i.allowTouchMove) {
        g(o.target).is(s.focusableElements) || (i.allowClick = !1), s.isTouched && (Object.assign(n, {
            startX: c,
            startY: f,
            currentX: c,
            currentY: f
        }), s.touchStartTime = q());
        return
    }
    if (s.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
        if (i.isVertical()) {
            if (f < n.startY && i.translate <= i.maxTranslate() || f > n.startY && i.translate >= i.minTranslate()) {
                s.isTouched = !1, s.isMoved = !1;
                return
            }
        } else if (c < n.startX && i.translate <= i.maxTranslate() || c > n.startX && i.translate >= i.minTranslate()) return
    }
    if (s.isTouchEvent && e.activeElement && o.target === e.activeElement && g(o.target).is(s.focusableElements)) {
        s.isMoved = !0, i.allowClick = !1;
        return
    }
    if (s.allowTouchCallbacks && i.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
    n.currentX = c, n.currentY = f;
    const u = n.currentX - n.startX,
        p = n.currentY - n.startY;
    if (i.params.threshold && Math.sqrt(u ** 2 + p ** 2) < i.params.threshold) return;
    if (typeof s.isScrolling == "undefined") {
        let y;
        i.isHorizontal() && n.currentY === n.startY || i.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : u * u + p * p >= 25 && (y = Math.atan2(Math.abs(p), Math.abs(u)) * 180 / Math.PI, s.isScrolling = i.isHorizontal() ? y > r.touchAngle : 90 - y > r.touchAngle)
    }
    if (s.isScrolling && i.emit("touchMoveOpposite", o), typeof s.startMoving == "undefined" && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0), s.isScrolling) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving) return;
    i.allowClick = !1, !r.cssMode && o.cancelable && o.preventDefault(), r.touchMoveStopPropagation && !r.nested && o.stopPropagation(), s.isMoved || (r.loop && !r.cssMode && i.loopFix(), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, r.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0), i.emit("sliderFirstMove", o)), i.emit("sliderMove", o), s.isMoved = !0;
    let m = i.isHorizontal() ? u : p;
    n.diff = m, m *= r.touchRatio, a && (m = -m), i.swipeDirection = m > 0 ? "prev" : "next", s.currentTranslate = m + s.startTranslate;
    let T = !0,
        S = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (S = 0), m > 0 && s.currentTranslate > i.minTranslate() ? (T = !1, r.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + m) ** S)) : m < 0 && s.currentTranslate < i.maxTranslate() && (T = !1, r.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - m) ** S)), T && (o.preventedByNestedSwiper = !0), !i.allowSlideNext && i.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && i.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate), r.threshold > 0)
        if (Math.abs(m) > r.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, s.currentTranslate = s.startTranslate, n.diff = i.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }! r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && i.freeMode || r.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), i.params.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
}

function ri(t) {
    const e = this,
        i = e.touchEventsData,
        {
            params: s,
            touches: r,
            rtlTranslate: n,
            slidesGrid: a,
            enabled: l
        } = e;
    if (!l) return;
    let o = t;
    if (o.originalEvent && (o = o.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", o), i.allowTouchCallbacks = !1, !i.isTouched) {
        i.isMoved && s.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, i.startMoving = !1;
        return
    }
    s.grabCursor && i.isMoved && i.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const d = q(),
        c = d - i.touchStartTime;
    if (e.allowClick) {
        const x = o.path || o.composedPath && o.composedPath();
        e.updateClickedSlide(x && x[0] || o.target), e.emit("tap click", o), c < 300 && d - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", o)
    }
    if (i.lastClickTime = q(), re(() => {
            e.destroyed || (e.allowClick = !0)
        }), !i.isTouched || !i.isMoved || !e.swipeDirection || r.diff === 0 || i.currentTranslate === i.startTranslate) {
        i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
        return
    }
    i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
    let f;
    if (s.followFinger ? f = n ? e.translate : -e.translate : f = -i.currentTranslate, s.cssMode) return;
    if (e.params.freeMode && s.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: f
        });
        return
    }
    let u = 0,
        p = e.slidesSizesGrid[0];
    for (let x = 0; x < a.length; x += x < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
        const b = x < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        typeof a[x + b] != "undefined" ? f >= a[x] && f < a[x + b] && (u = x, p = a[x + b] - a[x]) : f >= a[x] && (u = x, p = a[a.length - 1] - a[a.length - 2])
    }
    let m = null,
        T = null;
    s.rewind && (e.isBeginning ? T = e.params.virtual && e.params.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (m = 0));
    const S = (f - a[u]) / p,
        y = u < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    if (c > s.longSwipesMs) {
        if (!s.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (S >= s.longSwipesRatio ? e.slideTo(s.rewind && e.isEnd ? m : u + y) : e.slideTo(u)), e.swipeDirection === "prev" && (S > 1 - s.longSwipesRatio ? e.slideTo(u + y) : T !== null && S < 0 && Math.abs(S) > s.longSwipesRatio ? e.slideTo(T) : e.slideTo(u))
    } else {
        if (!s.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (o.target === e.navigation.nextEl || o.target === e.navigation.prevEl) ? o.target === e.navigation.nextEl ? e.slideTo(u + y) : e.slideTo(u) : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : u + y), e.swipeDirection === "prev" && e.slideTo(T !== null ? T : u))
    }
}

function ce() {
    const t = this,
        {
            params: e,
            el: i
        } = t;
    if (i && i.offsetWidth === 0) return;
    e.breakpoints && t.setBreakpoint();
    const {
        allowSlideNext: s,
        allowSlidePrev: r,
        snapGrid: n
    } = t;
    t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses(), (e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.run(), t.allowSlidePrev = r, t.allowSlideNext = s, t.params.watchOverflow && n !== t.snapGrid && t.checkOverflow()
}

function ai(t) {
    const e = this;
    !e.enabled || e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
}

function oi() {
    const t = this,
        {
            wrapperEl: e,
            rtlTranslate: i,
            enabled: s
        } = t;
    if (!s) return;
    t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, t.translate === 0 && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
    let r;
    const n = t.maxTranslate() - t.minTranslate();
    n === 0 ? r = 0 : r = (t.translate - t.minTranslate()) / n, r !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
}
let fe = !1;

function li() {}
const Se = (t, e) => {
    const i = G(),
        {
            params: s,
            touchEvents: r,
            el: n,
            wrapperEl: a,
            device: l,
            support: o
        } = t,
        d = !!s.nested,
        c = e === "on" ? "addEventListener" : "removeEventListener",
        f = e;
    if (!o.touch) n[c](r.start, t.onTouchStart, !1), i[c](r.move, t.onTouchMove, d), i[c](r.end, t.onTouchEnd, !1);
    else {
        const u = r.start === "touchstart" && o.passiveListener && s.passiveListeners ? {
            passive: !0,
            capture: !1
        } : !1;
        n[c](r.start, t.onTouchStart, u), n[c](r.move, t.onTouchMove, o.passiveListener ? {
            passive: !1,
            capture: d
        } : d), n[c](r.end, t.onTouchEnd, u), r.cancel && n[c](r.cancel, t.onTouchEnd, u)
    }(s.preventClicks || s.preventClicksPropagation) && n[c]("click", t.onClick, !0), s.cssMode && a[c]("scroll", t.onScroll), s.updateOnWindowResize ? t[f](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ce, !0) : t[f]("observerUpdate", ce, !0)
};

function di() {
    const t = this,
        e = G(),
        {
            params: i,
            support: s
        } = t;
    t.onTouchStart = si.bind(t), t.onTouchMove = ni.bind(t), t.onTouchEnd = ri.bind(t), i.cssMode && (t.onScroll = oi.bind(t)), t.onClick = ai.bind(t), s.touch && !fe && (e.addEventListener("touchstart", li), fe = !0), Se(t, "on")
}

function ci() {
    Se(this, "off")
}
var fi = {
    attachEvents: di,
    detachEvents: ci
};
const ue = (t, e) => t.grid && e.grid && e.grid.rows > 1;

function ui() {
    const t = this,
        {
            activeIndex: e,
            initialized: i,
            loopedSlides: s = 0,
            params: r,
            $el: n
        } = t,
        a = r.breakpoints;
    if (!a || a && Object.keys(a).length === 0) return;
    const l = t.getBreakpoint(a, t.params.breakpointsBase, t.el);
    if (!l || t.currentBreakpoint === l) return;
    const d = (l in a ? a[l] : void 0) || t.originalParams,
        c = ue(t, r),
        f = ue(t, d),
        u = r.enabled;
    c && !f ? (n.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`), t.emitContainerClasses()) : !c && f && (n.addClass(`${r.containerModifierClass}grid`), (d.grid.fill && d.grid.fill === "column" || !d.grid.fill && r.grid.fill === "column") && n.addClass(`${r.containerModifierClass}grid-column`), t.emitContainerClasses());
    const p = d.direction && d.direction !== r.direction,
        m = r.loop && (d.slidesPerView !== r.slidesPerView || p);
    p && i && t.changeDirection(), N(t.params, d);
    const T = t.params.enabled;
    Object.assign(t, {
        allowTouchMove: t.params.allowTouchMove,
        allowSlideNext: t.params.allowSlideNext,
        allowSlidePrev: t.params.allowSlidePrev
    }), u && !T ? t.disable() : !u && T && t.enable(), t.currentBreakpoint = l, t.emit("_beforeBreakpoint", d), m && i && (t.loopDestroy(), t.loopCreate(), t.updateSlides(), t.slideTo(e - s + t.loopedSlides, 0, !1)), t.emit("breakpoint", d)
}

function pi(t, e, i) {
    if (e === void 0 && (e = "window"), !t || e === "container" && !i) return;
    let s = !1;
    const r = k(),
        n = e === "window" ? r.innerHeight : i.clientHeight,
        a = Object.keys(t).map(l => {
            if (typeof l == "string" && l.indexOf("@") === 0) {
                const o = parseFloat(l.substr(1));
                return {
                    value: n * o,
                    point: l
                }
            }
            return {
                value: l,
                point: l
            }
        });
    a.sort((l, o) => parseInt(l.value, 10) - parseInt(o.value, 10));
    for (let l = 0; l < a.length; l += 1) {
        const {
            point: o,
            value: d
        } = a[l];
        e === "window" ? r.matchMedia(`(min-width: ${d}px)`).matches && (s = o) : d <= i.clientWidth && (s = o)
    }
    return s || "max"
}
var hi = {
    setBreakpoint: ui,
    getBreakpoint: pi
};

function mi(t, e) {
    const i = [];
    return t.forEach(s => {
        typeof s == "object" ? Object.keys(s).forEach(r => {
            s[r] && i.push(e + r)
        }) : typeof s == "string" && i.push(e + s)
    }), i
}

function gi() {
    const t = this,
        {
            classNames: e,
            params: i,
            rtl: s,
            $el: r,
            device: n,
            support: a
        } = t,
        l = mi(["initialized", i.direction, {
            "pointer-events": !a.touch
        }, {
            "free-mode": t.params.freeMode && i.freeMode.enabled
        }, {
            autoheight: i.autoHeight
        }, {
            rtl: s
        }, {
            grid: i.grid && i.grid.rows > 1
        }, {
            "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
        }, {
            android: n.android
        }, {
            ios: n.ios
        }, {
            "css-mode": i.cssMode
        }, {
            centered: i.cssMode && i.centeredSlides
        }], i.containerModifierClass);
    e.push(...l), r.addClass([...e].join(" ")), t.emitContainerClasses()
}

function vi() {
    const t = this,
        {
            $el: e,
            classNames: i
        } = t;
    e.removeClass(i.join(" ")), t.emitContainerClasses()
}
var wi = {
    addClasses: gi,
    removeClasses: vi
};

function Si(t, e, i, s, r, n) {
    const a = k();
    let l;

    function o() {
        n && n()
    }!g(t).parent("picture")[0] && (!t.complete || !r) && e ? (l = new a.Image, l.onload = o, l.onerror = o, s && (l.sizes = s), i && (l.srcset = i), e && (l.src = e)) : o()
}

function Ti() {
    const t = this;
    t.imagesToLoad = t.$el.find("img");

    function e() {
        typeof t == "undefined" || t === null || !t || t.destroyed || (t.imagesLoaded !== void 0 && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
    }
    for (let i = 0; i < t.imagesToLoad.length; i += 1) {
        const s = t.imagesToLoad[i];
        t.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, e)
    }
}
var bi = {
    loadImage: Si,
    preloadImages: Ti
};

function yi() {
    const t = this,
        {
            isLocked: e,
            params: i
        } = t,
        {
            slidesOffsetBefore: s
        } = i;
    if (s) {
        const r = t.slides.length - 1,
            n = t.slidesGrid[r] + t.slidesSizesGrid[r] + s * 2;
        t.isLocked = t.size > n
    } else t.isLocked = t.snapGrid.length === 1;
    i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked), i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
}
var xi = {
        checkOverflow: yi
    },
    pe = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

function Ei(t, e) {
    return function(s) {
        s === void 0 && (s = {});
        const r = Object.keys(s)[0],
            n = s[r];
        if (typeof n != "object" || n === null) {
            N(e, s);
            return
        }
        if (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && t[r] === !0 && (t[r] = {
                auto: !0
            }), !(r in t && "enabled" in n)) {
            N(e, s);
            return
        }
        t[r] === !0 && (t[r] = {
            enabled: !0
        }), typeof t[r] == "object" && !("enabled" in t[r]) && (t[r].enabled = !0), t[r] || (t[r] = {
            enabled: !1
        }), N(e, s)
    }
}
const se = {
        eventsEmitter: Tt,
        update: At,
        translate: Nt,
        transition: Ht,
        slide: Yt,
        loop: Jt,
        grabCursor: ti,
        events: fi,
        breakpoints: hi,
        checkOverflow: xi,
        classes: wi,
        images: bi
    },
    ne = {};
class V {
    constructor() {
        let e, i;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
        if (r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === "Object" ? i = r[0] : [e, i] = r, i || (i = {}), i = N({}, i), e && !i.el && (i.el = e), i.el && g(i.el).length > 1) {
            const d = [];
            return g(i.el).each(c => {
                const f = N({}, i, {
                    el: c
                });
                d.push(new V(f))
            }), d
        }
        const a = this;
        a.__swiper__ = !0, a.support = ve(), a.device = mt({
            userAgent: i.userAgent
        }), a.browser = vt(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], i.modules && Array.isArray(i.modules) && a.modules.push(...i.modules);
        const l = {};
        a.modules.forEach(d => {
            d({
                swiper: a,
                extendParams: Ei(i, l),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a)
            })
        });
        const o = N({}, pe, l);
        return a.params = N({}, o, ne, i), a.originalParams = N({}, a.params), a.passedParams = N({}, i), a.params && a.params.on && Object.keys(a.params.on).forEach(d => {
            a.on(d, a.params.on[d])
        }), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = g, Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: g(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return a.params.direction === "horizontal"
            },
            isVertical() {
                return a.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEvents: function() {
                const c = ["touchstart", "touchmove", "touchend", "touchcancel"],
                    f = ["pointerdown", "pointermove", "pointerup"];
                return a.touchEventsTouch = {
                    start: c[0],
                    move: c[1],
                    end: c[2],
                    cancel: c[3]
                }, a.touchEventsDesktop = {
                    start: f[0],
                    move: f[1],
                    end: f[2]
                }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop
            }(),
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: a.params.focusableElements,
                lastClickTime: q(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), a.emit("_swiper"), a.params.init && a.init(), a
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
    }
    disable() {
        const e = this;
        !e.enabled || (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
    }
    setProgress(e, i) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const r = s.minTranslate(),
            a = (s.maxTranslate() - r) * e + r;
        s.translateTo(a, typeof i == "undefined" ? 0 : i), s.updateActiveIndex(), s.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const i = e.el.className.split(" ").filter(s => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", i.join(" "))
    }
    getSlideClasses(e) {
        const i = this;
        return e.className.split(" ").filter(s => s.indexOf("swiper-slide") === 0 || s.indexOf(i.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const i = [];
        e.slides.each(s => {
            const r = e.getSlideClasses(s);
            i.push({
                slideEl: s,
                classNames: r
            }), e.emit("_slideClass", s, r)
        }), e.emit("_slideClasses", i)
    }
    slidesPerViewDynamic(e, i) {
        e === void 0 && (e = "current"), i === void 0 && (i = !1);
        const s = this,
            {
                params: r,
                slides: n,
                slidesGrid: a,
                slidesSizesGrid: l,
                size: o,
                activeIndex: d
            } = s;
        let c = 1;
        if (r.centeredSlides) {
            let f = n[d].swiperSlideSize,
                u;
            for (let p = d + 1; p < n.length; p += 1) n[p] && !u && (f += n[p].swiperSlideSize, c += 1, f > o && (u = !0));
            for (let p = d - 1; p >= 0; p -= 1) n[p] && !u && (f += n[p].swiperSlideSize, c += 1, f > o && (u = !0))
        } else if (e === "current")
            for (let f = d + 1; f < n.length; f += 1)(i ? a[f] + l[f] - a[d] < o : a[f] - a[d] < o) && (c += 1);
        else
            for (let f = d - 1; f >= 0; f -= 1) a[d] - a[f] < o && (c += 1);
        return c
    }
    update() {
        const e = this;
        if (!e || e.destroyed) return;
        const {
            snapGrid: i,
            params: s
        } = e;
        s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();

        function r() {
            const a = e.rtlTranslate ? e.translate * -1 : e.translate,
                l = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
            e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses()
        }
        let n;
        e.params.freeMode && e.params.freeMode.enabled ? (r(), e.params.autoHeight && e.updateAutoHeight()) : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? n = e.slideTo(e.slides.length - 1, 0, !1, !0) : n = e.slideTo(e.activeIndex, 0, !1, !0), n || r()), s.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit("update")
    }
    changeDirection(e, i) {
        i === void 0 && (i = !0);
        const s = this,
            r = s.params.direction;
        return e || (e = r === "horizontal" ? "vertical" : "horizontal"), e === r || e !== "horizontal" && e !== "vertical" || (s.$el.removeClass(`${s.params.containerModifierClass}${r}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each(n => {
            e === "vertical" ? n.style.width = "" : n.style.height = ""
        }), s.emit("changeDirection"), i && s.update()), s
    }
    mount(e) {
        const i = this;
        if (i.mounted) return !0;
        const s = g(e || i.params.el);
        if (e = s[0], !e) return !1;
        e.swiper = i;
        const r = () => `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let a = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                const l = g(e.shadowRoot.querySelector(r()));
                return l.children = o => s.children(o), l
            }
            return s.children(r())
        })();
        if (a.length === 0 && i.params.createElements) {
            const o = G().createElement("div");
            a = g(o), o.className = i.params.wrapperClass, s.append(o), s.children(`.${i.params.slideClass}`).each(d => {
                a.append(d)
            })
        }
        return Object.assign(i, {
            $el: s,
            el: e,
            $wrapperEl: a,
            wrapperEl: a[0],
            mounted: !0,
            rtl: e.dir.toLowerCase() === "rtl" || s.css("direction") === "rtl",
            rtlTranslate: i.params.direction === "horizontal" && (e.dir.toLowerCase() === "rtl" || s.css("direction") === "rtl"),
            wrongRTL: a.css("display") === "-webkit-box"
        }), !0
    }
    init(e) {
        const i = this;
        return i.initialized || i.mount(e) === !1 || (i.emit("beforeInit"), i.params.breakpoints && i.setBreakpoint(), i.addClasses(), i.params.loop && i.loopCreate(), i.updateSize(), i.updateSlides(), i.params.watchOverflow && i.checkOverflow(), i.params.grabCursor && i.enabled && i.setGrabCursor(), i.params.preloadImages && i.preloadImages(), i.params.loop ? i.slideTo(i.params.initialSlide + i.loopedSlides, 0, i.params.runCallbacksOnInit, !1, !0) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0), i.attachEvents(), i.initialized = !0, i.emit("init"), i.emit("afterInit")), i
    }
    destroy(e, i) {
        e === void 0 && (e = !0), i === void 0 && (i = !0);
        const s = this,
            {
                params: r,
                $el: n,
                $wrapperEl: a,
                slides: l
            } = s;
        return typeof s.params == "undefined" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), r.loop && s.loopDestroy(), i && (s.removeClasses(), n.removeAttr("style"), a.removeAttr("style"), l && l.length && l.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(o => {
            s.off(o)
        }), e !== !1 && (s.$el[0].swiper = null, dt(s)), s.destroyed = !0), null
    }
    static extendDefaults(e) {
        N(ne, e)
    }
    static get extendedDefaults() {
        return ne
    }
    static get defaults() {
        return pe
    }
    static installModule(e) {
        V.prototype.__modules__ || (V.prototype.__modules__ = []);
        const i = V.prototype.__modules__;
        typeof e == "function" && i.indexOf(e) < 0 && i.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(i => V.installModule(i)), V) : (V.installModule(e), V)
    }
}
Object.keys(se).forEach(t => {
    Object.keys(se[t]).forEach(e => {
        V.prototype[e] = se[t][e]
    })
});
V.use([wt, St]);

function Ci(t) {
    const {
        effect: e,
        swiper: i,
        on: s,
        setTranslate: r,
        setTransition: n,
        overwriteParams: a,
        perspective: l,
        recreateShadows: o,
        getEffectParams: d
    } = t;
    s("beforeInit", () => {
        if (i.params.effect !== e) return;
        i.classNames.push(`${i.params.containerModifierClass}${e}`), l && l() && i.classNames.push(`${i.params.containerModifierClass}3d`);
        const f = a ? a() : {};
        Object.assign(i.params, f), Object.assign(i.originalParams, f)
    }), s("setTranslate", () => {
        i.params.effect === e && r()
    }), s("setTransition", (f, u) => {
        i.params.effect === e && n(u)
    }), s("transitionEnd", () => {
        if (i.params.effect === e && o) {
            if (!d || !d().slideShadows) return;
            i.slides.each(f => {
                i.$(f).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
            }), o()
        }
    });
    let c;
    s("virtualUpdate", () => {
        i.params.effect === e && (i.slides.length || (c = !0), requestAnimationFrame(() => {
            c && i.slides && i.slides.length && (r(), c = !1)
        }))
    })
}

function Pi(t) {
    let {
        swiper: e,
        extendParams: i,
        on: s
    } = t;
    i({
        cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
        }
    });
    const r = (o, d, c) => {
        let f = c ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
            u = c ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
        f.length === 0 && (f = g(`<div class="swiper-slide-shadow-${c ? "left" : "top"}"></div>`), o.append(f)), u.length === 0 && (u = g(`<div class="swiper-slide-shadow-${c ? "right" : "bottom"}"></div>`), o.append(u)), f.length && (f[0].style.opacity = Math.max(-d, 0)), u.length && (u[0].style.opacity = Math.max(d, 0))
    };
    Ci({
        effect: "cube",
        swiper: e,
        on: s,
        setTranslate: () => {
            const {
                $el: o,
                $wrapperEl: d,
                slides: c,
                width: f,
                height: u,
                rtlTranslate: p,
                size: m,
                browser: T
            } = e, S = e.params.cubeEffect, y = e.isHorizontal(), x = e.virtual && e.params.virtual.enabled;
            let b = 0,
                v;
            S.shadow && (y ? (v = d.find(".swiper-cube-shadow"), v.length === 0 && (v = g('<div class="swiper-cube-shadow"></div>'), d.append(v)), v.css({
                height: `${f}px`
            })) : (v = o.find(".swiper-cube-shadow"), v.length === 0 && (v = g('<div class="swiper-cube-shadow"></div>'), o.append(v))));
            for (let A = 0; A < c.length; A += 1) {
                const z = c.eq(A);
                let L = A;
                x && (L = parseInt(z.attr("data-swiper-slide-index"), 10));
                let D = L * 90,
                    w = Math.floor(D / 360);
                p && (D = -D, w = Math.floor(-D / 360));
                const C = Math.max(Math.min(z[0].progress, 1), -1);
                let P = 0,
                    B = 0,
                    H = 0;
                L % 4 === 0 ? (P = -w * 4 * m, H = 0) : (L - 1) % 4 === 0 ? (P = 0, H = -w * 4 * m) : (L - 2) % 4 === 0 ? (P = m + w * 4 * m, H = m) : (L - 3) % 4 === 0 && (P = -m, H = 3 * m + m * 4 * w), p && (P = -P), y || (B = P, P = 0);
                const W = `rotateX(${y ? 0 : -D}deg) rotateY(${y ? D : 0}deg) translate3d(${P}px, ${B}px, ${H}px)`;
                C <= 1 && C > -1 && (b = L * 90 + C * 90, p && (b = -L * 90 - C * 90)), z.transform(W), S.slideShadows && r(z, C, y)
            }
            if (d.css({
                    "-webkit-transform-origin": `50% 50% -${m / 2}px`,
                    "transform-origin": `50% 50% -${m / 2}px`
                }), S.shadow)
                if (y) v.transform(`translate3d(0px, ${f / 2 + S.shadowOffset}px, ${-f / 2}px) rotateX(90deg) rotateZ(0deg) scale(${S.shadowScale})`);
                else {
                    const A = Math.abs(b) - Math.floor(Math.abs(b) / 90) * 90,
                        z = 1.5 - (Math.sin(A * 2 * Math.PI / 360) / 2 + Math.cos(A * 2 * Math.PI / 360) / 2),
                        L = S.shadowScale,
                        D = S.shadowScale / z,
                        w = S.shadowOffset;
                    v.transform(`scale3d(${L}, 1, ${D}) translate3d(0px, ${u / 2 + w}px, ${-u / 2 / D}px) rotateX(-90deg)`)
                } const O = T.isSafari || T.isWebView ? -m / 2 : 0;
            d.transform(`translate3d(0px,0,${O}px) rotateX(${e.isHorizontal() ? 0 : b}deg) rotateY(${e.isHorizontal() ? -b : 0}deg)`), d[0].style.setProperty("--swiper-cube-translate-z", `${O}px`)
        },
        setTransition: o => {
            const {
                $el: d,
                slides: c
            } = e;
            c.transition(o).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(o), e.params.cubeEffect.shadow && !e.isHorizontal() && d.find(".swiper-cube-shadow").transition(o)
        },
        recreateShadows: () => {
            const o = e.isHorizontal();
            e.slides.each(d => {
                const c = Math.max(Math.min(d.progress, 1), -1);
                r(g(d), c, o)
            })
        },
        getEffectParams: () => e.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
        })
    })
}

function Mi(t, e = {}) {
    const i = t.querySelector(".swiper"),
        {
            autoplayDuration: s = 5e3,
            Swiper: r,
            EffectCube: n,
            onSlidesIndexesChange: a,
            onAutoplayStart: l,
            onAutoplayStop: o
        } = e;
    let {
        enabled: d = !0
    } = e, c = 0, f, u;
    const p = [];
    let m, T, S, y, x, b, v, O;
    const A = (h, E) => {
            const $ = p.indexOf(h);
            let M = typeof E == "undefined" ? s : E,
                I = parseInt(h.slides[h.activeIndex].getAttribute("data-duration"), 10);
            const F = h.slides.eq(h.activeIndex).find("video")[0];
            return Number.isNaN(I) && F && (I = F.duration * 1e3), !Number.isNaN(I) && I > 0 && typeof E == "undefined" && (M = I), v = M, h.storiesSliderAutoplayTimeout = setTimeout(() => {
                if (!h.isEnd) h.slideNext();
                else {
                    if (c !== $) return;
                    f.isEnd || f.slideNext()
                }
            }, M), l && l(h), M
        },
        z = h => {
            clearTimeout(h.storiesSliderAutoplayTimeout), o && o(h)
        },
        L = h => {
            z(h);
            const E = h.slides.eq(h.activeIndex).find("video")[0];
            E && (cancelAnimationFrame(u), E.pause());
            const $ = v || s;
            let M = parseInt(h.slides[h.activeIndex].getAttribute("data-duration"), 10);
            if (Number.isNaN(M) && (M = void 0), !M && E && (M = E.duration * 1e3), v = $ - (new Date().getTime() - b), h.isEnd && v < 0) return;
            v < 0 && (v = 0);
            const I = 1 - v / (M || s),
                F = h.$el.find(`.stories-slider-pagination-bullet:nth-child(${h.activeIndex + 1})`);
            F.children("span").remove(), F.append(`<span style="transform:translateX(${-100 + I * 100}%)"></span>`)
        },
        D = h => {
            if (h.isEnd && v < 0) return;
            b = new Date().getTime(), A(h, v);
            const E = h.slides.eq(h.activeIndex).find("video")[0];
            if (E) try {
                u = requestAnimationFrame(() => {
                    E.play()
                })
            } catch {}
            h.$el.find(`.stories-slider-pagination-bullet:nth-child(${h.activeIndex + 1})`).children("span").transform("translateX(0%)").transition(`${v}ms`)
        },
        w = h => {
            z(h), A(h), b = new Date().getTime(), h.$el.find(".stories-slider-pagination-bullet-current").removeClass("stories-slider-pagination-bullet-current");
            const E = h.$el.find(`.stories-slider-pagination-bullet:nth-child(${h.activeIndex + 1})`),
                $ = h.slides.eq(h.activeIndex).find("video")[0];
            if ($) {
                $.currentTime = 0;
                try {
                    u = requestAnimationFrame(() => {
                        $.play()
                    })
                } catch {}
            }
            h.slides.find("video").forEach(M => {
                M !== $ && (M.currentTime = 0, cancelAnimationFrame(u), M.pause())
            }), p.filter((M, I) => I !== c).forEach(M => {
                M.$el.find("video").forEach(I => {
                    cancelAnimationFrame(u), I.pause()
                })
            }), E.prevAll().addClass("stories-slider-pagination-bullet-viewed").children("span").remove(), E.prevAll().append("<span></span>"), E.nextAll().removeClass("stories-slider-pagination-bullet-viewed stories-slider-pagination-bullet-current").children("span").remove(), E.nextAll().append("<span></span>"), E.removeClass("stories-slider-pagination-bullet-viewed").addClass("stories-slider-pagination-bullet-current").children("span").remove(), E.append("<span></span>"), E[0].clientWidth, E.children("span").transition(`${v}ms`).transform("translateX(0%)"), a && (cancelAnimationFrame(m), m = requestAnimationFrame(() => {
                a(c, h.activeIndex)
            }))
        },
        C = () => {
            const h = () => {
                    t.classList.add("stories-slider-perspective")
                },
                E = () => {
                    t.classList.remove("stories-slider-perspective")
                };
            f = new r(i, {
                modules: typeof n != "undefined" ? [n] : [],
                effect: "cube",
                speed: 500,
                threshold: 5,
                cubeEffect: {
                    shadow: !1
                },
                observer: !0,
                on: {
                    transitionStart() {
                        E()
                    },
                    sliderFirstMove() {
                        E()
                    },
                    transitionEnd() {
                        h()
                    },
                    init($) {
                        $.params.resistanceRatio = .5, h()
                    },
                    slideChange() {
                        const $ = p[c];
                        c = f.activeIndex;
                        const M = p[c];
                        z($), A(M), w(M)
                    }
                }
            })
        },
        P = h => {
            const E = h.querySelectorAll(".swiper-slide"),
                $ = document.createElement("div");
            $.classList.add("stories-slider-pagination");
            for (let M = 0; M < E.length; M += 1) {
                const I = document.createElement("div");
                I.classList.add("stories-slider-pagination-bullet"), I.appendChild(document.createElement("span")), $.appendChild(I)
            }
            h.appendChild($)
        },
        B = h => {
            h.$el.find(".stories-slider-pagination, .stories-slider-pagination-bullet").remove()
        },
        H = (h, E) => {
            h.querySelectorAll(".swiper-slide").forEach(M => {
                const I = document.createElement("div"),
                    F = document.createElement("div");
                I.classList.add("stories-slider-button", "stories-slider-button-prev"), F.classList.add("stories-slider-button", "stories-slider-button-next"), M.appendChild(I), M.appendChild(F);
                const Te = () => {
                        if (!(x > 200)) {
                            if (E.isBeginning) {
                                f.slidePrev();
                                return
                            }
                            E.slidePrev()
                        }
                    },
                    be = () => {
                        if (!(x > 200)) {
                            if (E.isEnd) {
                                f.slideNext();
                                return
                            }
                            E.slideNext()
                        }
                    };
                I.addEventListener("click", Te), F.addEventListener("click", be)
            })
        },
        W = h => {
            h.slides.find(".stories-slider-button").remove()
        },
        U = () => {
            t.querySelectorAll(".swiper .swiper").forEach((h, E) => {
                const $ = new r(h, {
                    speed: 1,
                    nested: !0,
                    allowTouchMove: !1,
                    observer: !0,
                    on: {
                        touchStart(M) {
                            T = !0, O = !1, S = new Date().getTime(), y = setTimeout(() => {
                                O = !0, L(M)
                            }, 200)
                        },
                        touchEnd(M) {
                            clearTimeout(y), c === E && (!T || (x = new Date().getTime() - S, O && D(M), O = !1, T = !1))
                        },
                        init(M) {
                            !d || (c !== E ? z(M) : requestAnimationFrame(() => {
                                w(M)
                            }))
                        },
                        slideChange(M) {
                            w(M)
                        }
                    }
                });
                P(h), H(h, $), p.push($)
            })
        };
    return C(), U(), {
        el: t,
        mainSwiper: f,
        subSwipers: p,
        destroy: () => {
            f && f.destroy && f.destroy(), p.forEach(h => {
                z(h), B(h), W(h), h.destroy && h.destroy()
            })
        },
        slideTo: (h, E) => {
            if (f && f.slideTo && !f.destroyed && f.slideTo(h, 0), typeof E != "undefined") {
                const $ = p[h];
                $.slideTo && !$.destroyed && ($.activeIndex === E ? w($) : $.slideTo(E, 0))
            }
        },
        enable: () => {
            d || p.forEach((h, E) => {
                E === c && w(h)
            })
        },
        disable: () => {
            d = !1, p.forEach((h, E) => {
                h.$el.find("video").forEach($ => {
                    cancelAnimationFrame(u), $.pause()
                }), E === c ? L(h) : z(h)
            })
        }
    }
}
const R = document.querySelector(".stories-slider"),
    j = Mi(R, {
        Swiper: V,
        EffectCube: Pi,
        autoplayDuration: 5e3,
        enabled: !1,
        onSlidesIndexesChange(t, e) {
            console.log({
                mainIndex: t,
                subIndex: e
            })
        }
    });
document.querySelectorAll(".demo-stories a").forEach((t, e) => {
    t.addEventListener("click", i => {
        i.preventDefault(), R.classList.add("stories-slider-in"), j.enable(), j.slideTo(e, 0)
    })
});
document.querySelectorAll(".demo-post-avatar").forEach(t => {
    const e = parseInt(t.getAttribute("data-user-index"), 10);
    t.addEventListener("click", i => {
        i.preventDefault(), R.classList.add("stories-slider-in"), j.enable(), j.slideTo(e, 0)
    })
});
R.addEventListener("click", t => {
    t.target.matches(".stories-slider-close-button") && (j.disable(), R.classList.add("stories-slider-out"))
});
R.addEventListener("animationend", () => {
    R.classList.contains("stories-slider-out") && (R.classList.remove("stories-slider-in"), R.classList.remove("stories-slider-out"))
});