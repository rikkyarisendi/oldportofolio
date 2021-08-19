!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
    "use strict";
    var e, i;
    function c() {
        return e.apply(null, arguments)
    }
    function o(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }
    function u(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function l(e) {
        return void 0 === e
    }
    function d(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
    function h(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function f(e, t) {
        var n, s = [];
        for (n = 0; n < e.length; ++n)
            s.push(t(e[n], n));
        return s
    }
    function m(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function _(e, t) {
        for (var n in t)
            m(t, n) && (e[n] = t[n]);
        return m(t, "toString") && (e.toString = t.toString),
        m(t, "valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function y(e, t, n, s) {
        return Ot(e, t, n, s, !0).utc()
    }
    function g(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }),
        e._pf
    }
    function p(e) {
        if (null == e._isValid) {
            var t = g(e)
              , n = i.call(t.parsedDateParts, function(e) {
                return null != e
            })
              , s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
            null != Object.isFrozen && Object.isFrozen(e))
                return s;
            e._isValid = s
        }
        return e._isValid
    }
    function v(e) {
        var t = y(NaN);
        return null != e ? _(g(t), e) : g(t).userInvalidated = !0,
        t
    }
    i = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
            if (s in t && e.call(this, t[s], s, t))
                return !0;
        return !1
    }
    ;
    var r = c.momentProperties = [];
    function w(e, t) {
        var n, s, i;
        if (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        l(t._i) || (e._i = t._i),
        l(t._f) || (e._f = t._f),
        l(t._l) || (e._l = t._l),
        l(t._strict) || (e._strict = t._strict),
        l(t._tzm) || (e._tzm = t._tzm),
        l(t._isUTC) || (e._isUTC = t._isUTC),
        l(t._offset) || (e._offset = t._offset),
        l(t._pf) || (e._pf = g(t)),
        l(t._locale) || (e._locale = t._locale),
        0 < r.length)
            for (n = 0; n < r.length; n++)
                l(i = t[s = r[n]]) || (e[s] = i);
        return e
    }
    var t = !1;
    function M(e) {
        w(this, e),
        this._d = new Date(null != e._d ? e._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === t && (t = !0,
        c.updateOffset(this),
        t = !1)
    }
    function S(e) {
        return e instanceof M || null != e && null != e._isAMomentObject
    }
    function D(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function k(e) {
        var t = +e
          , n = 0;
        return 0 !== t && isFinite(t) && (n = D(t)),
        n
    }
    function a(e, t, n) {
        var s, i = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0;
        for (s = 0; s < i; s++)
            (n && e[s] !== t[s] || !n && k(e[s]) !== k(t[s])) && a++;
        return a + r
    }
    function Y(e) {
        !1 === c.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }
    function n(i, r) {
        var a = !0;
        return _(function() {
            if (null != c.deprecationHandler && c.deprecationHandler(null, i),
            a) {
                for (var e, t = [], n = 0; n < arguments.length; n++) {
                    if (e = "",
                    "object" == typeof arguments[n]) {
                        for (var s in e += "\n[" + n + "] ",
                        arguments[0])
                            e += s + ": " + arguments[0][s] + ", ";
                        e = e.slice(0, -2)
                    } else
                        e = arguments[n];
                    t.push(e)
                }
                Y(i + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack),
                a = !1
            }
            return r.apply(this, arguments)
        }, r)
    }
    var s, O = {};
    function T(e, t) {
        null != c.deprecationHandler && c.deprecationHandler(e, t),
        O[e] || (Y(t),
        O[e] = !0)
    }
    function x(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function b(e, t) {
        var n, s = _({}, e);
        for (n in t)
            m(t, n) && (u(e[n]) && u(t[n]) ? (s[n] = {},
            _(s[n], e[n]),
            _(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
        for (n in e)
            m(e, n) && !m(t, n) && u(e[n]) && (s[n] = _({}, s[n]));
        return s
    }
    function P(e) {
        null != e && this.set(e)
    }
    c.suppressDeprecationWarnings = !1,
    c.deprecationHandler = null,
    s = Object.keys ? Object.keys : function(e) {
        var t, n = [];
        for (t in e)
            m(e, t) && n.push(t);
        return n
    }
    ;
    var W = {};
    function H(e, t) {
        var n = e.toLowerCase();
        W[n] = W[n + "s"] = W[t] = e
    }
    function R(e) {
        return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0
    }
    function C(e) {
        var t, n, s = {};
        for (n in e)
            m(e, n) && (t = R(n)) && (s[t] = e[n]);
        return s
    }
    var F = {};
    function L(e, t) {
        F[e] = t
    }
    function U(e, t, n) {
        var s = "" + Math.abs(e)
          , i = t - s.length;
        return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s
    }
    var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
      , G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
      , V = {}
      , E = {};
    function I(e, t, n, s) {
        var i = s;
        "string" == typeof s && (i = function() {
            return this[s]()
        }
        ),
        e && (E[e] = i),
        t && (E[t[0]] = function() {
            return U(i.apply(this, arguments), t[1], t[2])
        }
        ),
        n && (E[n] = function() {
            return this.localeData().ordinal(i.apply(this, arguments), e)
        }
        )
    }
    function A(e, t) {
        return e.isValid() ? (t = j(t, e.localeData()),
        V[t] = V[t] || function(s) {
            var e, i, t, r = s.match(N);
            for (e = 0,
            i = r.length; e < i; e++)
                E[r[e]] ? r[e] = E[r[e]] : r[e] = (t = r[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
            return function(e) {
                var t, n = "";
                for (t = 0; t < i; t++)
                    n += x(r[t]) ? r[t].call(e, s) : r[t];
                return n
            }
        }(t),
        V[t](e)) : e.localeData().invalidDate()
    }
    function j(e, t) {
        var n = 5;
        function s(e) {
            return t.longDateFormat(e) || e
        }
        for (G.lastIndex = 0; 0 <= n && G.test(e); )
            e = e.replace(G, s),
            G.lastIndex = 0,
            n -= 1;
        return e
    }
    var Z = /\d/
      , z = /\d\d/
      , $ = /\d{3}/
      , q = /\d{4}/
      , J = /[+-]?\d{6}/
      , B = /\d\d?/
      , Q = /\d\d\d\d?/
      , X = /\d\d\d\d\d\d?/
      , K = /\d{1,3}/
      , ee = /\d{1,4}/
      , te = /[+-]?\d{1,6}/
      , ne = /\d+/
      , se = /[+-]?\d+/
      , ie = /Z|[+-]\d\d:?\d\d/gi
      , re = /Z|[+-]\d\d(?::?\d\d)?/gi
      , ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i
      , oe = {};
    function ue(e, n, s) {
        oe[e] = x(n) ? n : function(e, t) {
            return e && s ? s : n
        }
    }
    function le(e, t) {
        return m(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(de(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, s, i) {
            return t || n || s || i
        })))
    }
    function de(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    var he = {};
    function ce(e, n) {
        var t, s = n;
        for ("string" == typeof e && (e = [e]),
        d(n) && (s = function(e, t) {
            t[n] = k(e)
        }
        ),
        t = 0; t < e.length; t++)
            he[e[t]] = s
    }
    function fe(e, i) {
        ce(e, function(e, t, n, s) {
            n._w = n._w || {},
            i(e, n._w, n, s)
        })
    }
    var me = 0
      , _e = 1
      , ye = 2
      , ge = 3
      , pe = 4
      , ve = 5
      , we = 6
      , Me = 7
      , Se = 8;
    function De(e) {
        return ke(e) ? 366 : 365
    }
    function ke(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    I("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    }),
    I(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }),
    I(0, ["YYYY", 4], 0, "year"),
    I(0, ["YYYYY", 5], 0, "year"),
    I(0, ["YYYYYY", 6, !0], 0, "year"),
    H("year", "y"),
    L("year", 1),
    ue("Y", se),
    ue("YY", B, z),
    ue("YYYY", ee, q),
    ue("YYYYY", te, J),
    ue("YYYYYY", te, J),
    ce(["YYYYY", "YYYYYY"], me),
    ce("YYYY", function(e, t) {
        t[me] = 2 === e.length ? c.parseTwoDigitYear(e) : k(e)
    }),
    ce("YY", function(e, t) {
        t[me] = c.parseTwoDigitYear(e)
    }),
    ce("Y", function(e, t) {
        t[me] = parseInt(e, 10)
    }),
    c.parseTwoDigitYear = function(e) {
        return k(e) + (68 < k(e) ? 1900 : 2e3)
    }
    ;
    var Ye, Oe = Te("FullYear", !0);
    function Te(t, n) {
        return function(e) {
            return null != e ? (be(this, t, e),
            c.updateOffset(this, n),
            this) : xe(this, t)
        }
    }
    function xe(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }
    function be(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && ke(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
    }
    function Pe(e, t) {
        if (isNaN(e) || isNaN(t))
            return NaN;
        var n, s = (t % (n = 12) + n) % n;
        return e += (t - s) / 12,
        1 === s ? ke(e) ? 29 : 28 : 31 - s % 7 % 2
    }
    Ye = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
            if (this[t] === e)
                return t;
        return -1
    }
    ,
    I("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }),
    I("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }),
    I("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }),
    H("month", "M"),
    L("month", 8),
    ue("M", B),
    ue("MM", B, z),
    ue("MMM", function(e, t) {
        return t.monthsShortRegex(e)
    }),
    ue("MMMM", function(e, t) {
        return t.monthsRegex(e)
    }),
    ce(["M", "MM"], function(e, t) {
        t[_e] = k(e) - 1
    }),
    ce(["MMM", "MMMM"], function(e, t, n, s) {
        var i = n._locale.monthsParse(e, s, n._strict);
        null != i ? t[_e] = i : g(n).invalidMonth = e
    });
    var We = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
      , He = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    var Re = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    function Ce(e, t) {
        var n;
        if (!e.isValid())
            return e;
        if ("string" == typeof t)
            if (/^\d+$/.test(t))
                t = k(t);
            else if (!d(t = e.localeData().monthsParse(t)))
                return e;
        return n = Math.min(e.date(), Pe(e.year(), t)),
        e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
        e
    }
    function Fe(e) {
        return null != e ? (Ce(this, e),
        c.updateOffset(this, !0),
        this) : xe(this, "Month")
    }
    var Le = ae;
    var Ue = ae;
    function Ne() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, s = [], i = [], r = [];
        for (t = 0; t < 12; t++)
            n = y([2e3, t]),
            s.push(this.monthsShort(n, "")),
            i.push(this.months(n, "")),
            r.push(this.months(n, "")),
            r.push(this.monthsShort(n, ""));
        for (s.sort(e),
        i.sort(e),
        r.sort(e),
        t = 0; t < 12; t++)
            s[t] = de(s[t]),
            i[t] = de(i[t]);
        for (t = 0; t < 24; t++)
            r[t] = de(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")","i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")","i"),
        this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")","i")
    }
    function Ge(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
        t
    }
    function Ve(e, t, n) {
        var s = 7 + t - n;
        return -((7 + Ge(e, 0, s).getUTCDay() - t) % 7) + s - 1
    }
    function Ee(e, t, n, s, i) {
        var r, a, o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ve(e, s, i);
        return o <= 0 ? a = De(r = e - 1) + o : o > De(e) ? (r = e + 1,
        a = o - De(e)) : (r = e,
        a = o),
        {
            year: r,
            dayOfYear: a
        }
    }
    function Ie(e, t, n) {
        var s, i, r = Ve(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return a < 1 ? s = a + Ae(i = e.year() - 1, t, n) : a > Ae(e.year(), t, n) ? (s = a - Ae(e.year(), t, n),
        i = e.year() + 1) : (i = e.year(),
        s = a),
        {
            week: s,
            year: i
        }
    }
    function Ae(e, t, n) {
        var s = Ve(e, t, n)
          , i = Ve(e + 1, t, n);
        return (De(e) - s + i) / 7
    }
    I("w", ["ww", 2], "wo", "week"),
    I("W", ["WW", 2], "Wo", "isoWeek"),
    H("week", "w"),
    H("isoWeek", "W"),
    L("week", 5),
    L("isoWeek", 5),
    ue("w", B),
    ue("ww", B, z),
    ue("W", B),
    ue("WW", B, z),
    fe(["w", "ww", "W", "WW"], function(e, t, n, s) {
        t[s.substr(0, 1)] = k(e)
    });
    I("d", 0, "do", "day"),
    I("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }),
    I("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }),
    I("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }),
    I("e", 0, 0, "weekday"),
    I("E", 0, 0, "isoWeekday"),
    H("day", "d"),
    H("weekday", "e"),
    H("isoWeekday", "E"),
    L("day", 11),
    L("weekday", 11),
    L("isoWeekday", 11),
    ue("d", B),
    ue("e", B),
    ue("E", B),
    ue("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
    }),
    ue("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
    }),
    ue("dddd", function(e, t) {
        return t.weekdaysRegex(e)
    }),
    fe(["dd", "ddd", "dddd"], function(e, t, n, s) {
        var i = n._locale.weekdaysParse(e, s, n._strict);
        null != i ? t.d = i : g(n).invalidWeekday = e
    }),
    fe(["d", "e", "E"], function(e, t, n, s) {
        t[s] = k(e)
    });
    var je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    var Ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    var ze = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    var $e = ae;
    var qe = ae;
    var Je = ae;
    function Be() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, s, i, r, a = [], o = [], u = [], l = [];
        for (t = 0; t < 7; t++)
            n = y([2e3, 1]).day(t),
            s = this.weekdaysMin(n, ""),
            i = this.weekdaysShort(n, ""),
            r = this.weekdays(n, ""),
            a.push(s),
            o.push(i),
            u.push(r),
            l.push(s),
            l.push(i),
            l.push(r);
        for (a.sort(e),
        o.sort(e),
        u.sort(e),
        l.sort(e),
        t = 0; t < 7; t++)
            o[t] = de(o[t]),
            u[t] = de(u[t]),
            l[t] = de(l[t]);
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")","i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")","i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")","i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")","i")
    }
    function Qe() {
        return this.hours() % 12 || 12
    }
    function Xe(e, t) {
        I(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }
    function Ke(e, t) {
        return t._meridiemParse
    }
    I("H", ["HH", 2], 0, "hour"),
    I("h", ["hh", 2], 0, Qe),
    I("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    }),
    I("hmm", 0, 0, function() {
        return "" + Qe.apply(this) + U(this.minutes(), 2)
    }),
    I("hmmss", 0, 0, function() {
        return "" + Qe.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2)
    }),
    I("Hmm", 0, 0, function() {
        return "" + this.hours() + U(this.minutes(), 2)
    }),
    I("Hmmss", 0, 0, function() {
        return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2)
    }),
    Xe("a", !0),
    Xe("A", !1),
    H("hour", "h"),
    L("hour", 13),
    ue("a", Ke),
    ue("A", Ke),
    ue("H", B),
    ue("h", B),
    ue("k", B),
    ue("HH", B, z),
    ue("hh", B, z),
    ue("kk", B, z),
    ue("hmm", Q),
    ue("hmmss", X),
    ue("Hmm", Q),
    ue("Hmmss", X),
    ce(["H", "HH"], ge),
    ce(["k", "kk"], function(e, t, n) {
        var s = k(e);
        t[ge] = 24 === s ? 0 : s
    }),
    ce(["a", "A"], function(e, t, n) {
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    }),
    ce(["h", "hh"], function(e, t, n) {
        t[ge] = k(e),
        g(n).bigHour = !0
    }),
    ce("hmm", function(e, t, n) {
        var s = e.length - 2;
        t[ge] = k(e.substr(0, s)),
        t[pe] = k(e.substr(s)),
        g(n).bigHour = !0
    }),
    ce("hmmss", function(e, t, n) {
        var s = e.length - 4
          , i = e.length - 2;
        t[ge] = k(e.substr(0, s)),
        t[pe] = k(e.substr(s, 2)),
        t[ve] = k(e.substr(i)),
        g(n).bigHour = !0
    }),
    ce("Hmm", function(e, t, n) {
        var s = e.length - 2;
        t[ge] = k(e.substr(0, s)),
        t[pe] = k(e.substr(s))
    }),
    ce("Hmmss", function(e, t, n) {
        var s = e.length - 4
          , i = e.length - 2;
        t[ge] = k(e.substr(0, s)),
        t[pe] = k(e.substr(s, 2)),
        t[ve] = k(e.substr(i))
    });
    var et, tt = Te("Hours", !0), nt = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: He,
        monthsShort: Re,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays: je,
        weekdaysMin: ze,
        weekdaysShort: Ze,
        meridiemParse: /[ap]\.?m?\.?/i
    }, st = {}, it = {};
    function rt(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function at(e) {
        var t = null;
        if (!st[e] && "undefined" != typeof module && module && module.exports)
            try {
                t = et._abbr,
                require("./locale/" + e),
                ot(t)
            } catch (e) {}
        return st[e]
    }
    function ot(e, t) {
        var n;
        return e && ((n = l(t) ? lt(e) : ut(e, t)) ? et = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
        et._abbr
    }
    function ut(e, t) {
        if (null !== t) {
            var n, s = nt;
            if (t.abbr = e,
            null != st[e])
                T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                s = st[e]._config;
            else if (null != t.parentLocale)
                if (null != st[t.parentLocale])
                    s = st[t.parentLocale]._config;
                else {
                    if (null == (n = at(t.parentLocale)))
                        return it[t.parentLocale] || (it[t.parentLocale] = []),
                        it[t.parentLocale].push({
                            name: e,
                            config: t
                        }),
                        null;
                    s = n._config
                }
            return st[e] = new P(b(s, t)),
            it[e] && it[e].forEach(function(e) {
                ut(e.name, e.config)
            }),
            ot(e),
            st[e]
        }
        return delete st[e],
        null
    }
    function lt(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
        !e)
            return et;
        if (!o(e)) {
            if (t = at(e))
                return t;
            e = [e]
        }
        return function(e) {
            for (var t, n, s, i, r = 0; r < e.length; ) {
                for (t = (i = rt(e[r]).split("-")).length,
                n = (n = rt(e[r + 1])) ? n.split("-") : null; 0 < t; ) {
                    if (s = at(i.slice(0, t).join("-")))
                        return s;
                    if (n && n.length >= t && a(i, n, !0) >= t - 1)
                        break;
                    t--
                }
                r++
            }
            return et
        }(e)
    }
    function dt(e) {
        var t, n = e._a;
        return n && -2 === g(e).overflow && (t = n[_e] < 0 || 11 < n[_e] ? _e : n[ye] < 1 || n[ye] > Pe(n[me], n[_e]) ? ye : n[ge] < 0 || 24 < n[ge] || 24 === n[ge] && (0 !== n[pe] || 0 !== n[ve] || 0 !== n[we]) ? ge : n[pe] < 0 || 59 < n[pe] ? pe : n[ve] < 0 || 59 < n[ve] ? ve : n[we] < 0 || 999 < n[we] ? we : -1,
        g(e)._overflowDayOfYear && (t < me || ye < t) && (t = ye),
        g(e)._overflowWeeks && -1 === t && (t = Me),
        g(e)._overflowWeekday && -1 === t && (t = Se),
        g(e).overflow = t),
        e
    }
    function ht(e, t, n) {
        return null != e ? e : null != t ? t : n
    }
    function ct(e) {
        var t, n, s, i, r, a = [];
        if (!e._d) {
            var o, u;
            for (o = e,
            u = new Date(c.now()),
            s = o._useUTC ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()] : [u.getFullYear(), u.getMonth(), u.getDate()],
            e._w && null == e._a[ye] && null == e._a[_e] && function(e) {
                var t, n, s, i, r, a, o, u;
                if (null != (t = e._w).GG || null != t.W || null != t.E)
                    r = 1,
                    a = 4,
                    n = ht(t.GG, e._a[me], Ie(Tt(), 1, 4).year),
                    s = ht(t.W, 1),
                    ((i = ht(t.E, 1)) < 1 || 7 < i) && (u = !0);
                else {
                    r = e._locale._week.dow,
                    a = e._locale._week.doy;
                    var l = Ie(Tt(), r, a);
                    n = ht(t.gg, e._a[me], l.year),
                    s = ht(t.w, l.week),
                    null != t.d ? ((i = t.d) < 0 || 6 < i) && (u = !0) : null != t.e ? (i = t.e + r,
                    (t.e < 0 || 6 < t.e) && (u = !0)) : i = r
                }
                s < 1 || s > Ae(n, r, a) ? g(e)._overflowWeeks = !0 : null != u ? g(e)._overflowWeekday = !0 : (o = Ee(n, s, i, r, a),
                e._a[me] = o.year,
                e._dayOfYear = o.dayOfYear)
            }(e),
            null != e._dayOfYear && (r = ht(e._a[me], s[me]),
            (e._dayOfYear > De(r) || 0 === e._dayOfYear) && (g(e)._overflowDayOfYear = !0),
            n = Ge(r, 0, e._dayOfYear),
            e._a[_e] = n.getUTCMonth(),
            e._a[ye] = n.getUTCDate()),
            t = 0; t < 3 && null == e._a[t]; ++t)
                e._a[t] = a[t] = s[t];
            for (; t < 7; t++)
                e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[ge] && 0 === e._a[pe] && 0 === e._a[ve] && 0 === e._a[we] && (e._nextDay = !0,
            e._a[ge] = 0),
            e._d = (e._useUTC ? Ge : function(e, t, n, s, i, r, a) {
                var o = new Date(e,t,n,s,i,r,a);
                return e < 100 && 0 <= e && isFinite(o.getFullYear()) && o.setFullYear(e),
                o
            }
            ).apply(null, a),
            i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[ge] = 24),
            e._w && void 0 !== e._w.d && e._w.d !== i && (g(e).weekdayMismatch = !0)
        }
    }
    var ft = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , _t = /Z|[+-]\d\d(?::?\d\d)?/
      , yt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]]
      , gt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
      , pt = /^\/?Date\((\-?\d+)/i;
    function vt(e) {
        var t, n, s, i, r, a, o = e._i, u = ft.exec(o) || mt.exec(o);
        if (u) {
            for (g(e).iso = !0,
            t = 0,
            n = yt.length; t < n; t++)
                if (yt[t][1].exec(u[1])) {
                    i = yt[t][0],
                    s = !1 !== yt[t][2];
                    break
                }
            if (null == i)
                return void (e._isValid = !1);
            if (u[3]) {
                for (t = 0,
                n = gt.length; t < n; t++)
                    if (gt[t][1].exec(u[3])) {
                        r = (u[2] || " ") + gt[t][0];
                        break
                    }
                if (null == r)
                    return void (e._isValid = !1)
            }
            if (!s && null != r)
                return void (e._isValid = !1);
            if (u[4]) {
                if (!_t.exec(u[4]))
                    return void (e._isValid = !1);
                a = "Z"
            }
            e._f = i + (r || "") + (a || ""),
            kt(e)
        } else
            e._isValid = !1
    }
    var wt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    function Mt(e, t, n, s, i, r) {
        var a = [function(e) {
            var t = parseInt(e, 10);
            {
                if (t <= 49)
                    return 2e3 + t;
                if (t <= 999)
                    return 1900 + t
            }
            return t
        }(e), Re.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)];
        return r && a.push(parseInt(r, 10)),
        a
    }
    var St = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    function Dt(e) {
        var t, n, s, i = wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (i) {
            var r = Mt(i[4], i[3], i[2], i[5], i[6], i[7]);
            if (t = i[1],
            n = r,
            s = e,
            t && Ze.indexOf(t) !== new Date(n[0],n[1],n[2]).getDay() && (g(s).weekdayMismatch = !0,
            !(s._isValid = !1)))
                return;
            e._a = r,
            e._tzm = function(e, t, n) {
                if (e)
                    return St[e];
                if (t)
                    return 0;
                var s = parseInt(n, 10)
                  , i = s % 100;
                return (s - i) / 100 * 60 + i
            }(i[8], i[9], i[10]),
            e._d = Ge.apply(null, e._a),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            g(e).rfc2822 = !0
        } else
            e._isValid = !1
    }
    function kt(e) {
        if (e._f !== c.ISO_8601)
            if (e._f !== c.RFC_2822) {
                e._a = [],
                g(e).empty = !0;
                var t, n, s, i, r, a, o, u, l = "" + e._i, d = l.length, h = 0;
                for (s = j(e._f, e._locale).match(N) || [],
                t = 0; t < s.length; t++)
                    i = s[t],
                    (n = (l.match(le(i, e)) || [])[0]) && (0 < (r = l.substr(0, l.indexOf(n))).length && g(e).unusedInput.push(r),
                    l = l.slice(l.indexOf(n) + n.length),
                    h += n.length),
                    E[i] ? (n ? g(e).empty = !1 : g(e).unusedTokens.push(i),
                    a = i,
                    u = e,
                    null != (o = n) && m(he, a) && he[a](o, u._a, u, a)) : e._strict && !n && g(e).unusedTokens.push(i);
                g(e).charsLeftOver = d - h,
                0 < l.length && g(e).unusedInput.push(l),
                e._a[ge] <= 12 && !0 === g(e).bigHour && 0 < e._a[ge] && (g(e).bigHour = void 0),
                g(e).parsedDateParts = e._a.slice(0),
                g(e).meridiem = e._meridiem,
                e._a[ge] = function(e, t, n) {
                    var s;
                    if (null == n)
                        return t;
                    return null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((s = e.isPM(n)) && t < 12 && (t += 12),
                    s || 12 !== t || (t = 0)),
                    t)
                }(e._locale, e._a[ge], e._meridiem),
                ct(e),
                dt(e)
            } else
                Dt(e);
        else
            vt(e)
    }
    function Yt(e) {
        var t, n, s, i, r = e._i, a = e._f;
        return e._locale = e._locale || lt(e._l),
        null === r || void 0 === a && "" === r ? v({
            nullInput: !0
        }) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)),
        S(r) ? new M(dt(r)) : (h(r) ? e._d = r : o(a) ? function(e) {
            var t, n, s, i, r;
            if (0 === e._f.length)
                return g(e).invalidFormat = !0,
                e._d = new Date(NaN);
            for (i = 0; i < e._f.length; i++)
                r = 0,
                t = w({}, e),
                null != e._useUTC && (t._useUTC = e._useUTC),
                t._f = e._f[i],
                kt(t),
                p(t) && (r += g(t).charsLeftOver,
                r += 10 * g(t).unusedTokens.length,
                g(t).score = r,
                (null == s || r < s) && (s = r,
                n = t));
            _(e, n || t)
        }(e) : a ? kt(e) : l(n = (t = e)._i) ? t._d = new Date(c.now()) : h(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? (s = t,
        null === (i = pt.exec(s._i)) ? (vt(s),
        !1 === s._isValid && (delete s._isValid,
        Dt(s),
        !1 === s._isValid && (delete s._isValid,
        c.createFromInputFallback(s)))) : s._d = new Date(+i[1])) : o(n) ? (t._a = f(n.slice(0), function(e) {
            return parseInt(e, 10)
        }),
        ct(t)) : u(n) ? function(e) {
            if (!e._d) {
                var t = C(e._i);
                e._a = f([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                    return e && parseInt(e, 10)
                }),
                ct(e)
            }
        }(t) : d(n) ? t._d = new Date(n) : c.createFromInputFallback(t),
        p(e) || (e._d = null),
        e))
    }
    function Ot(e, t, n, s, i) {
        var r, a = {};
        return !0 !== n && !1 !== n || (s = n,
        n = void 0),
        (u(e) && function(e) {
            if (Object.getOwnPropertyNames)
                return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e)
                if (e.hasOwnProperty(t))
                    return !1;
            return !0
        }(e) || o(e) && 0 === e.length) && (e = void 0),
        a._isAMomentObject = !0,
        a._useUTC = a._isUTC = i,
        a._l = n,
        a._i = e,
        a._f = t,
        a._strict = s,
        (r = new M(dt(Yt(a))))._nextDay && (r.add(1, "d"),
        r._nextDay = void 0),
        r
    }
    function Tt(e, t, n, s) {
        return Ot(e, t, n, s, !1)
    }
    c.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }),
    c.ISO_8601 = function() {}
    ,
    c.RFC_2822 = function() {}
    ;
    var xt = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = Tt.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : v()
    })
      , bt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = Tt.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this : e : v()
    });
    function Pt(e, t) {
        var n, s;
        if (1 === t.length && o(t[0]) && (t = t[0]),
        !t.length)
            return Tt();
        for (n = t[0],
        s = 1; s < t.length; ++s)
            t[s].isValid() && !t[s][e](n) || (n = t[s]);
        return n
    }
    var Wt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    function Ht(e) {
        var t = C(e)
          , n = t.year || 0
          , s = t.quarter || 0
          , i = t.month || 0
          , r = t.week || 0
          , a = t.day || 0
          , o = t.hour || 0
          , u = t.minute || 0
          , l = t.second || 0
          , d = t.millisecond || 0;
        this._isValid = function(e) {
            for (var t in e)
                if (-1 === Ye.call(Wt, t) || null != e[t] && isNaN(e[t]))
                    return !1;
            for (var n = !1, s = 0; s < Wt.length; ++s)
                if (e[Wt[s]]) {
                    if (n)
                        return !1;
                    parseFloat(e[Wt[s]]) !== k(e[Wt[s]]) && (n = !0)
                }
            return !0
        }(t),
        this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60,
        this._days = +a + 7 * r,
        this._months = +i + 3 * s + 12 * n,
        this._data = {},
        this._locale = lt(),
        this._bubble()
    }
    function Rt(e) {
        return e instanceof Ht
    }
    function Ct(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }
    function Ft(e, n) {
        I(e, 0, 0, function() {
            var e = this.utcOffset()
              , t = "+";
            return e < 0 && (e = -e,
            t = "-"),
            t + U(~~(e / 60), 2) + n + U(~~e % 60, 2)
        })
    }
    Ft("Z", ":"),
    Ft("ZZ", ""),
    ue("Z", re),
    ue("ZZ", re),
    ce(["Z", "ZZ"], function(e, t, n) {
        n._useUTC = !0,
        n._tzm = Ut(re, e)
    });
    var Lt = /([\+\-]|\d\d)/gi;
    function Ut(e, t) {
        var n = (t || "").match(e);
        if (null === n)
            return null;
        var s = ((n[n.length - 1] || []) + "").match(Lt) || ["-", 0, 0]
          , i = 60 * s[1] + k(s[2]);
        return 0 === i ? 0 : "+" === s[0] ? i : -i
    }
    function Nt(e, t) {
        var n, s;
        return t._isUTC ? (n = t.clone(),
        s = (S(e) || h(e) ? e.valueOf() : Tt(e).valueOf()) - n.valueOf(),
        n._d.setTime(n._d.valueOf() + s),
        c.updateOffset(n, !1),
        n) : Tt(e).local()
    }
    function Gt(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }
    function Vt() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }
    c.updateOffset = function() {}
    ;
    var Et = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/
      , It = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function At(e, t) {
        var n, s, i, r = e, a = null;
        return Rt(e) ? r = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : d(e) ? (r = {},
        t ? r[t] = e : r.milliseconds = e) : (a = Et.exec(e)) ? (n = "-" === a[1] ? -1 : 1,
        r = {
            y: 0,
            d: k(a[ye]) * n,
            h: k(a[ge]) * n,
            m: k(a[pe]) * n,
            s: k(a[ve]) * n,
            ms: k(Ct(1e3 * a[we])) * n
        }) : (a = It.exec(e)) ? (n = "-" === a[1] ? -1 : (a[1],
        1),
        r = {
            y: jt(a[2], n),
            M: jt(a[3], n),
            w: jt(a[4], n),
            d: jt(a[5], n),
            h: jt(a[6], n),
            m: jt(a[7], n),
            s: jt(a[8], n)
        }) : null == r ? r = {} : "object" == typeof r && ("from"in r || "to"in r) && (i = function(e, t) {
            var n;
            if (!e.isValid() || !t.isValid())
                return {
                    milliseconds: 0,
                    months: 0
                };
            t = Nt(t, e),
            e.isBefore(t) ? n = Zt(e, t) : ((n = Zt(t, e)).milliseconds = -n.milliseconds,
            n.months = -n.months);
            return n
        }(Tt(r.from), Tt(r.to)),
        (r = {}).ms = i.milliseconds,
        r.M = i.months),
        s = new Ht(r),
        Rt(e) && m(e, "_locale") && (s._locale = e._locale),
        s
    }
    function jt(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }
    function Zt(e, t) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        n.milliseconds = +t - +e.clone().add(n.months, "M"),
        n
    }
    function zt(s, i) {
        return function(e, t) {
            var n;
            return null === t || isNaN(+t) || (T(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
            n = e,
            e = t,
            t = n),
            $t(this, At(e = "string" == typeof e ? +e : e, t), s),
            this
        }
    }
    function $t(e, t, n, s) {
        var i = t._milliseconds
          , r = Ct(t._days)
          , a = Ct(t._months);
        e.isValid() && (s = null == s || s,
        a && Ce(e, xe(e, "Month") + a * n),
        r && be(e, "Date", xe(e, "Date") + r * n),
        i && e._d.setTime(e._d.valueOf() + i * n),
        s && c.updateOffset(e, r || a))
    }
    At.fn = Ht.prototype,
    At.invalid = function() {
        return At(NaN)
    }
    ;
    var qt = zt(1, "add")
      , Jt = zt(-1, "subtract");
    function Bt(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month())
          , s = e.clone().add(n, "months");
        return -(n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0
    }
    function Qt(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = lt(e)) && (this._locale = t),
        this)
    }
    c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Xt = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });
    function Kt() {
        return this._locale
    }
    function en(e, t) {
        I(0, [e, e.length], 0, t)
    }
    function tn(e, t, n, s, i) {
        var r;
        return null == e ? Ie(this, s, i).year : ((r = Ae(e, s, i)) < t && (t = r),
        function(e, t, n, s, i) {
            var r = Ee(e, t, n, s, i)
              , a = Ge(r.year, 0, r.dayOfYear);
            return this.year(a.getUTCFullYear()),
            this.month(a.getUTCMonth()),
            this.date(a.getUTCDate()),
            this
        }
        .call(this, e, t, n, s, i))
    }
    I(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }),
    I(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }),
    en("gggg", "weekYear"),
    en("ggggg", "weekYear"),
    en("GGGG", "isoWeekYear"),
    en("GGGGG", "isoWeekYear"),
    H("weekYear", "gg"),
    H("isoWeekYear", "GG"),
    L("weekYear", 1),
    L("isoWeekYear", 1),
    ue("G", se),
    ue("g", se),
    ue("GG", B, z),
    ue("gg", B, z),
    ue("GGGG", ee, q),
    ue("gggg", ee, q),
    ue("GGGGG", te, J),
    ue("ggggg", te, J),
    fe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, s) {
        t[s.substr(0, 2)] = k(e)
    }),
    fe(["gg", "GG"], function(e, t, n, s) {
        t[s] = c.parseTwoDigitYear(e)
    }),
    I("Q", 0, "Qo", "quarter"),
    H("quarter", "Q"),
    L("quarter", 7),
    ue("Q", Z),
    ce("Q", function(e, t) {
        t[_e] = 3 * (k(e) - 1)
    }),
    I("D", ["DD", 2], "Do", "date"),
    H("date", "D"),
    L("date", 9),
    ue("D", B),
    ue("DD", B, z),
    ue("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }),
    ce(["D", "DD"], ye),
    ce("Do", function(e, t) {
        t[ye] = k(e.match(B)[0])
    });
    var nn = Te("Date", !0);
    I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    H("dayOfYear", "DDD"),
    L("dayOfYear", 4),
    ue("DDD", K),
    ue("DDDD", $),
    ce(["DDD", "DDDD"], function(e, t, n) {
        n._dayOfYear = k(e)
    }),
    I("m", ["mm", 2], 0, "minute"),
    H("minute", "m"),
    L("minute", 14),
    ue("m", B),
    ue("mm", B, z),
    ce(["m", "mm"], pe);
    var sn = Te("Minutes", !1);
    I("s", ["ss", 2], 0, "second"),
    H("second", "s"),
    L("second", 15),
    ue("s", B),
    ue("ss", B, z),
    ce(["s", "ss"], ve);
    var rn, an = Te("Seconds", !1);
    for (I("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }),
    I(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }),
    I(0, ["SSS", 3], 0, "millisecond"),
    I(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }),
    I(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }),
    I(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }),
    I(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }),
    I(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }),
    I(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }),
    H("millisecond", "ms"),
    L("millisecond", 16),
    ue("S", K, Z),
    ue("SS", K, z),
    ue("SSS", K, $),
    rn = "SSSS"; rn.length <= 9; rn += "S")
        ue(rn, ne);
    function on(e, t) {
        t[we] = k(1e3 * ("0." + e))
    }
    for (rn = "S"; rn.length <= 9; rn += "S")
        ce(rn, on);
    var un = Te("Milliseconds", !1);
    I("z", 0, 0, "zoneAbbr"),
    I("zz", 0, 0, "zoneName");
    var ln = M.prototype;
    function dn(e) {
        return e
    }
    ln.add = qt,
    ln.calendar = function(e, t) {
        var n = e || Tt()
          , s = Nt(n, this).startOf("day")
          , i = c.calendarFormat(this, s) || "sameElse"
          , r = t && (x(t[i]) ? t[i].call(this, n) : t[i]);
        return this.format(r || this.localeData().calendar(i, this, Tt(n)))
    }
    ,
    ln.clone = function() {
        return new M(this)
    }
    ,
    ln.diff = function(e, t, n) {
        var s, i, r;
        if (!this.isValid())
            return NaN;
        if (!(s = Nt(e, this)).isValid())
            return NaN;
        switch (i = 6e4 * (s.utcOffset() - this.utcOffset()),
        t = R(t)) {
        case "year":
            r = Bt(this, s) / 12;
            break;
        case "month":
            r = Bt(this, s);
            break;
        case "quarter":
            r = Bt(this, s) / 3;
            break;
        case "second":
            r = (this - s) / 1e3;
            break;
        case "minute":
            r = (this - s) / 6e4;
            break;
        case "hour":
            r = (this - s) / 36e5;
            break;
        case "day":
            r = (this - s - i) / 864e5;
            break;
        case "week":
            r = (this - s - i) / 6048e5;
            break;
        default:
            r = this - s
        }
        return n ? r : D(r)
    }
    ,
    ln.endOf = function(e) {
        return void 0 === (e = R(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"),
        this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
    }
    ,
    ln.format = function(e) {
        e || (e = this.isUtc() ? c.defaultFormatUtc : c.defaultFormat);
        var t = A(this, e);
        return this.localeData().postformat(t)
    }
    ,
    ln.from = function(e, t) {
        return this.isValid() && (S(e) && e.isValid() || Tt(e).isValid()) ? At({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    ,
    ln.fromNow = function(e) {
        return this.from(Tt(), e)
    }
    ,
    ln.to = function(e, t) {
        return this.isValid() && (S(e) && e.isValid() || Tt(e).isValid()) ? At({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    ,
    ln.toNow = function(e) {
        return this.to(Tt(), e)
    }
    ,
    ln.get = function(e) {
        return x(this[e = R(e)]) ? this[e]() : this
    }
    ,
    ln.invalidAt = function() {
        return g(this).overflow
    }
    ,
    ln.isAfter = function(e, t) {
        var n = S(e) ? e : Tt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(l(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
    }
    ,
    ln.isBefore = function(e, t) {
        var n = S(e) ? e : Tt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(l(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
    }
    ,
    ln.isBetween = function(e, t, n, s) {
        return ("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
    }
    ,
    ln.isSame = function(e, t) {
        var n, s = S(e) ? e : Tt(e);
        return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = R(t || "millisecond")) ? this.valueOf() === s.valueOf() : (n = s.valueOf(),
        this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    }
    ,
    ln.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }
    ,
    ln.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }
    ,
    ln.isValid = function() {
        return p(this)
    }
    ,
    ln.lang = Xt,
    ln.locale = Qt,
    ln.localeData = Kt,
    ln.max = bt,
    ln.min = xt,
    ln.parsingFlags = function() {
        return _({}, g(this))
    }
    ,
    ln.set = function(e, t) {
        if ("object" == typeof e)
            for (var n = function(e) {
                var t = [];
                for (var n in e)
                    t.push({
                        unit: n,
                        priority: F[n]
                    });
                return t.sort(function(e, t) {
                    return e.priority - t.priority
                }),
                t
            }(e = C(e)), s = 0; s < n.length; s++)
                this[n[s].unit](e[n[s].unit]);
        else if (x(this[e = R(e)]))
            return this[e](t);
        return this
    }
    ,
    ln.startOf = function(e) {
        switch (e = R(e)) {
        case "year":
            this.month(0);
        case "quarter":
        case "month":
            this.date(1);
        case "week":
        case "isoWeek":
        case "day":
        case "date":
            this.hours(0);
        case "hour":
            this.minutes(0);
        case "minute":
            this.seconds(0);
        case "second":
            this.milliseconds(0)
        }
        return "week" === e && this.weekday(0),
        "isoWeek" === e && this.isoWeekday(1),
        "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
        this
    }
    ,
    ln.subtract = Jt,
    ln.toArray = function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }
    ,
    ln.toObject = function() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }
    ,
    ln.toDate = function() {
        return new Date(this.valueOf())
    }
    ,
    ln.toISOString = function(e) {
        if (!this.isValid())
            return null;
        var t = !0 !== e
          , n = t ? this.clone().utc() : this;
        return n.year() < 0 || 9999 < n.year() ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : x(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }
    ,
    ln.inspect = function() {
        if (!this.isValid())
            return "moment.invalid(/* " + this._i + " */)";
        var e = "moment"
          , t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
        t = "Z");
        var n = "[" + e + '("]'
          , s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"
          , i = t + '[")]';
        return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i)
    }
    ,
    ln.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    }
    ,
    ln.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    ,
    ln.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    }
    ,
    ln.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
    ,
    ln.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    ,
    ln.year = Oe,
    ln.isLeapYear = function() {
        return ke(this.year())
    }
    ,
    ln.weekYear = function(e) {
        return tn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }
    ,
    ln.isoWeekYear = function(e) {
        return tn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    ,
    ln.quarter = ln.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }
    ,
    ln.month = Fe,
    ln.daysInMonth = function() {
        return Pe(this.year(), this.month())
    }
    ,
    ln.week = ln.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    ,
    ln.isoWeek = ln.isoWeeks = function(e) {
        var t = Ie(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    ,
    ln.weeksInYear = function() {
        var e = this.localeData()._week;
        return Ae(this.year(), e.dow, e.doy)
    }
    ,
    ln.isoWeeksInYear = function() {
        return Ae(this.year(), 1, 4)
    }
    ,
    ln.date = nn,
    ln.day = ln.days = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t, n, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (t = e,
        n = this.localeData(),
        e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10),
        this.add(e - s, "d")) : s
    }
    ,
    ln.weekday = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }
    ,
    ln.isoWeekday = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null != e) {
            var t = (n = e,
            s = this.localeData(),
            "string" == typeof n ? s.weekdaysParse(n) % 7 || 7 : isNaN(n) ? null : n);
            return this.day(this.day() % 7 ? t : t - 7)
        }
        return this.day() || 7;
        var n, s
    }
    ,
    ln.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }
    ,
    ln.hour = ln.hours = tt,
    ln.minute = ln.minutes = sn,
    ln.second = ln.seconds = an,
    ln.millisecond = ln.milliseconds = un,
    ln.utcOffset = function(e, t, n) {
        var s, i = this._offset || 0;
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null != e) {
            if ("string" == typeof e) {
                if (null === (e = Ut(re, e)))
                    return this
            } else
                Math.abs(e) < 16 && !n && (e *= 60);
            return !this._isUTC && t && (s = Gt(this)),
            this._offset = e,
            this._isUTC = !0,
            null != s && this.add(s, "m"),
            i !== e && (!t || this._changeInProgress ? $t(this, At(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
            c.updateOffset(this, !0),
            this._changeInProgress = null)),
            this
        }
        return this._isUTC ? i : Gt(this)
    }
    ,
    ln.utc = function(e) {
        return this.utcOffset(0, e)
    }
    ,
    ln.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e),
        this._isUTC = !1,
        e && this.subtract(Gt(this), "m")),
        this
    }
    ,
    ln.parseZone = function() {
        if (null != this._tzm)
            this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var e = Ut(ie, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }
    ,
    ln.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? Tt(e).utcOffset() : 0,
        (this.utcOffset() - e) % 60 == 0)
    }
    ,
    ln.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    ,
    ln.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    }
    ,
    ln.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    }
    ,
    ln.isUtc = Vt,
    ln.isUTC = Vt,
    ln.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    }
    ,
    ln.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    ,
    ln.dates = n("dates accessor is deprecated. Use date instead.", nn),
    ln.months = n("months accessor is deprecated. Use month instead", Fe),
    ln.years = n("years accessor is deprecated. Use year instead", Oe),
    ln.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
        return null != e ? ("string" != typeof e && (e = -e),
        this.utcOffset(e, t),
        this) : -this.utcOffset()
    }),
    ln.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!l(this._isDSTShifted))
            return this._isDSTShifted;
        var e = {};
        if (w(e, this),
        (e = Yt(e))._a) {
            var t = e._isUTC ? y(e._a) : Tt(e._a);
            this._isDSTShifted = this.isValid() && 0 < a(e._a, t.toArray())
        } else
            this._isDSTShifted = !1;
        return this._isDSTShifted
    });
    var hn = P.prototype;
    function cn(e, t, n, s) {
        var i = lt()
          , r = y().set(s, t);
        return i[n](r, e)
    }
    function fn(e, t, n) {
        if (d(e) && (t = e,
        e = void 0),
        e = e || "",
        null != t)
            return cn(e, t, n, "month");
        var s, i = [];
        for (s = 0; s < 12; s++)
            i[s] = cn(e, s, n, "month");
        return i
    }
    function mn(e, t, n, s) {
        "boolean" == typeof e ? d(t) && (n = t,
        t = void 0) : (t = e,
        e = !1,
        d(n = t) && (n = t,
        t = void 0)),
        t = t || "";
        var i, r = lt(), a = e ? r._week.dow : 0;
        if (null != n)
            return cn(t, (n + a) % 7, s, "day");
        var o = [];
        for (i = 0; i < 7; i++)
            o[i] = cn(t, (i + a) % 7, s, "day");
        return o
    }
    hn.calendar = function(e, t, n) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return x(s) ? s.call(t, n) : s
    }
    ,
    hn.longDateFormat = function(e) {
        var t = this._longDateFormat[e]
          , n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1)
        }),
        this._longDateFormat[e])
    }
    ,
    hn.invalidDate = function() {
        return this._invalidDate
    }
    ,
    hn.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
    }
    ,
    hn.preparse = dn,
    hn.postformat = dn,
    hn.relativeTime = function(e, t, n, s) {
        var i = this._relativeTime[n];
        return x(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
    }
    ,
    hn.pastFuture = function(e, t) {
        var n = this._relativeTime[0 < e ? "future" : "past"];
        return x(n) ? n(t) : n.replace(/%s/i, t)
    }
    ,
    hn.set = function(e) {
        var t, n;
        for (n in e)
            x(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e,
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }
    ,
    hn.months = function(e, t) {
        return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || We).test(t) ? "format" : "standalone"][e.month()] : o(this._months) ? this._months : this._months.standalone
    }
    ,
    hn.monthsShort = function(e, t) {
        return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[We.test(t) ? "format" : "standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }
    ,
    hn.monthsParse = function(e, t, n) {
        var s, i, r;
        if (this._monthsParseExact)
            return function(e, t, n) {
                var s, i, r, a = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    s = 0; s < 12; ++s)
                        r = y([2e3, s]),
                        this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(),
                        this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null
            }
            .call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        s = 0; s < 12; s++) {
            if (i = y([2e3, s]),
            n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$","i")),
            n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""),
            this._monthsParse[s] = new RegExp(r.replace(".", ""),"i")),
            n && "MMMM" === t && this._longMonthsParse[s].test(e))
                return s;
            if (n && "MMM" === t && this._shortMonthsParse[s].test(e))
                return s;
            if (!n && this._monthsParse[s].test(e))
                return s
        }
    }
    ,
    hn.monthsRegex = function(e) {
        return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = Ue),
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }
    ,
    hn.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Le),
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
    ,
    hn.week = function(e) {
        return Ie(e, this._week.dow, this._week.doy).week
    }
    ,
    hn.firstDayOfYear = function() {
        return this._week.doy
    }
    ,
    hn.firstDayOfWeek = function() {
        return this._week.dow
    }
    ,
    hn.weekdays = function(e, t) {
        return e ? o(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : o(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }
    ,
    hn.weekdaysMin = function(e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }
    ,
    hn.weekdaysShort = function(e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }
    ,
    hn.weekdaysParse = function(e, t, n) {
        var s, i, r;
        if (this._weekdaysParseExact)
            return function(e, t, n) {
                var s, i, r, a = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    s = 0; s < 7; ++s)
                        r = y([2e3, 1]).day(s),
                        this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(),
                        this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(),
                        this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null
            }
            .call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [],
        this._minWeekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._fullWeekdaysParse = []),
        s = 0; s < 7; s++) {
            if (i = y([2e3, 1]).day(s),
            n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$","i"),
            this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$","i"),
            this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$","i")),
            this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""),
            this._weekdaysParse[s] = new RegExp(r.replace(".", ""),"i")),
            n && "dddd" === t && this._fullWeekdaysParse[s].test(e))
                return s;
            if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e))
                return s;
            if (n && "dd" === t && this._minWeekdaysParse[s].test(e))
                return s;
            if (!n && this._weekdaysParse[s].test(e))
                return s
        }
    }
    ,
    hn.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Be.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = $e),
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
    ,
    hn.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Be.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qe),
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
    ,
    hn.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Be.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Je),
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
    ,
    hn.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }
    ,
    hn.meridiem = function(e, t, n) {
        return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
    }
    ,
    ot("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
    }),
    c.lang = n("moment.lang is deprecated. Use moment.locale instead.", ot),
    c.langData = n("moment.langData is deprecated. Use moment.localeData instead.", lt);
    var _n = Math.abs;
    function yn(e, t, n, s) {
        var i = At(t, n);
        return e._milliseconds += s * i._milliseconds,
        e._days += s * i._days,
        e._months += s * i._months,
        e._bubble()
    }
    function gn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function pn(e) {
        return 4800 * e / 146097
    }
    function vn(e) {
        return 146097 * e / 4800
    }
    function wn(e) {
        return function() {
            return this.as(e)
        }
    }
    var Mn = wn("ms")
      , Sn = wn("s")
      , Dn = wn("m")
      , kn = wn("h")
      , Yn = wn("d")
      , On = wn("w")
      , Tn = wn("M")
      , xn = wn("y");
    function bn(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var Pn = bn("milliseconds")
      , Wn = bn("seconds")
      , Hn = bn("minutes")
      , Rn = bn("hours")
      , Cn = bn("days")
      , Fn = bn("months")
      , Ln = bn("years");
    var Un = Math.round
      , Nn = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    };
    var Gn = Math.abs;
    function Vn(e) {
        return (0 < e) - (e < 0) || +e
    }
    function En() {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var e, t, n = Gn(this._milliseconds) / 1e3, s = Gn(this._days), i = Gn(this._months);
        t = D((e = D(n / 60)) / 60),
        n %= 60,
        e %= 60;
        var r = D(i / 12)
          , a = i %= 12
          , o = s
          , u = t
          , l = e
          , d = n ? n.toFixed(3).replace(/\.?0+$/, "") : ""
          , h = this.asSeconds();
        if (!h)
            return "P0D";
        var c = h < 0 ? "-" : ""
          , f = Vn(this._months) !== Vn(h) ? "-" : ""
          , m = Vn(this._days) !== Vn(h) ? "-" : ""
          , _ = Vn(this._milliseconds) !== Vn(h) ? "-" : "";
        return c + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (o ? m + o + "D" : "") + (u || l || d ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (d ? _ + d + "S" : "")
    }
    var In = Ht.prototype;
    return In.isValid = function() {
        return this._isValid
    }
    ,
    In.abs = function() {
        var e = this._data;
        return this._milliseconds = _n(this._milliseconds),
        this._days = _n(this._days),
        this._months = _n(this._months),
        e.milliseconds = _n(e.milliseconds),
        e.seconds = _n(e.seconds),
        e.minutes = _n(e.minutes),
        e.hours = _n(e.hours),
        e.months = _n(e.months),
        e.years = _n(e.years),
        this
    }
    ,
    In.add = function(e, t) {
        return yn(this, e, t, 1)
    }
    ,
    In.subtract = function(e, t) {
        return yn(this, e, t, -1)
    }
    ,
    In.as = function(e) {
        if (!this.isValid())
            return NaN;
        var t, n, s = this._milliseconds;
        if ("month" === (e = R(e)) || "year" === e)
            return t = this._days + s / 864e5,
            n = this._months + pn(t),
            "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(vn(this._months)),
        e) {
        case "week":
            return t / 7 + s / 6048e5;
        case "day":
            return t + s / 864e5;
        case "hour":
            return 24 * t + s / 36e5;
        case "minute":
            return 1440 * t + s / 6e4;
        case "second":
            return 86400 * t + s / 1e3;
        case "millisecond":
            return Math.floor(864e5 * t) + s;
        default:
            throw new Error("Unknown unit " + e)
        }
    }
    ,
    In.asMilliseconds = Mn,
    In.asSeconds = Sn,
    In.asMinutes = Dn,
    In.asHours = kn,
    In.asDays = Yn,
    In.asWeeks = On,
    In.asMonths = Tn,
    In.asYears = xn,
    In.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
    }
    ,
    In._bubble = function() {
        var e, t, n, s, i, r = this._milliseconds, a = this._days, o = this._months, u = this._data;
        return 0 <= r && 0 <= a && 0 <= o || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * gn(vn(o) + a),
        o = a = 0),
        u.milliseconds = r % 1e3,
        e = D(r / 1e3),
        u.seconds = e % 60,
        t = D(e / 60),
        u.minutes = t % 60,
        n = D(t / 60),
        u.hours = n % 24,
        o += i = D(pn(a += D(n / 24))),
        a -= gn(vn(i)),
        s = D(o / 12),
        o %= 12,
        u.days = a,
        u.months = o,
        u.years = s,
        this
    }
    ,
    In.clone = function() {
        return At(this)
    }
    ,
    In.get = function(e) {
        return e = R(e),
        this.isValid() ? this[e + "s"]() : NaN
    }
    ,
    In.milliseconds = Pn,
    In.seconds = Wn,
    In.minutes = Hn,
    In.hours = Rn,
    In.days = Cn,
    In.weeks = function() {
        return D(this.days() / 7)
    }
    ,
    In.months = Fn,
    In.years = Ln,
    In.humanize = function(e) {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var t, n, s, i, r, a, o, u, l, d, h, c = this.localeData(), f = (n = !e,
        s = c,
        i = At(t = this).abs(),
        r = Un(i.as("s")),
        a = Un(i.as("m")),
        o = Un(i.as("h")),
        u = Un(i.as("d")),
        l = Un(i.as("M")),
        d = Un(i.as("y")),
        (h = r <= Nn.ss && ["s", r] || r < Nn.s && ["ss", r] || a <= 1 && ["m"] || a < Nn.m && ["mm", a] || o <= 1 && ["h"] || o < Nn.h && ["hh", o] || u <= 1 && ["d"] || u < Nn.d && ["dd", u] || l <= 1 && ["M"] || l < Nn.M && ["MM", l] || d <= 1 && ["y"] || ["yy", d])[2] = n,
        h[3] = 0 < +t,
        h[4] = s,
        function(e, t, n, s, i) {
            return i.relativeTime(t || 1, !!n, e, s)
        }
        .apply(null, h));
        return e && (f = c.pastFuture(+this, f)),
        c.postformat(f)
    }
    ,
    In.toISOString = En,
    In.toString = En,
    In.toJSON = En,
    In.locale = Qt,
    In.localeData = Kt,
    In.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", En),
    In.lang = Xt,
    I("X", 0, 0, "unix"),
    I("x", 0, 0, "valueOf"),
    ue("x", se),
    ue("X", /[+-]?\d+(\.\d{1,3})?/),
    ce("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }),
    ce("x", function(e, t, n) {
        n._d = new Date(k(e))
    }),
    c.version = "2.22.2",
    e = Tt,
    c.fn = ln,
    c.min = function() {
        return Pt("isBefore", [].slice.call(arguments, 0))
    }
    ,
    c.max = function() {
        return Pt("isAfter", [].slice.call(arguments, 0))
    }
    ,
    c.now = function() {
        return Date.now ? Date.now() : +new Date
    }
    ,
    c.utc = y,
    c.unix = function(e) {
        return Tt(1e3 * e)
    }
    ,
    c.months = function(e, t) {
        return fn(e, t, "months")
    }
    ,
    c.isDate = h,
    c.locale = ot,
    c.invalid = v,
    c.duration = At,
    c.isMoment = S,
    c.weekdays = function(e, t, n) {
        return mn(e, t, n, "weekdays")
    }
    ,
    c.parseZone = function() {
        return Tt.apply(null, arguments).parseZone()
    }
    ,
    c.localeData = lt,
    c.isDuration = Rt,
    c.monthsShort = function(e, t) {
        return fn(e, t, "monthsShort")
    }
    ,
    c.weekdaysMin = function(e, t, n) {
        return mn(e, t, n, "weekdaysMin")
    }
    ,
    c.defineLocale = ut,
    c.updateLocale = function(e, t) {
        if (null != t) {
            var n, s, i = nt;
            null != (s = at(e)) && (i = s._config),
            (n = new P(t = b(i, t))).parentLocale = st[e],
            st[e] = n,
            ot(e)
        } else
            null != st[e] && (null != st[e].parentLocale ? st[e] = st[e].parentLocale : null != st[e] && delete st[e]);
        return st[e]
    }
    ,
    c.locales = function() {
        return s(st)
    }
    ,
    c.weekdaysShort = function(e, t, n) {
        return mn(e, t, n, "weekdaysShort")
    }
    ,
    c.normalizeUnits = R,
    c.relativeTimeRounding = function(e) {
        return void 0 === e ? Un : "function" == typeof e && (Un = e,
        !0)
    }
    ,
    c.relativeTimeThreshold = function(e, t) {
        return void 0 !== Nn[e] && (void 0 === t ? Nn[e] : (Nn[e] = t,
        "s" === e && (Nn.ss = t - 1),
        !0))
    }
    ,
    c.calendarFormat = function(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }
    ,
    c.prototype = ln,
    c.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "YYYY-[W]WW",
        MONTH: "YYYY-MM"
    },
    c
});
;!function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["moment"], e) : "object" == typeof module && module.exports ? module.exports = e(require("moment")) : e(t.moment)
}(this, function(s) {
    "use strict";
    var e, i = {}, f = {}, u = {}, c = {}, t = s.version.split("."), n = +t[0], o = +t[1];
    function a(t) {
        return 96 < t ? t - 87 : 64 < t ? t - 29 : t - 48
    }
    function r(t) {
        var e = 0
          , n = t.split(".")
          , o = n[0]
          , r = n[1] || ""
          , s = 1
          , i = 0
          , f = 1;
        for (45 === t.charCodeAt(0) && (f = -(e = 1)); e < o.length; e++)
            i = 60 * i + a(o.charCodeAt(e));
        for (e = 0; e < r.length; e++)
            s /= 60,
            i += a(r.charCodeAt(e)) * s;
        return i * f
    }
    function h(t) {
        for (var e = 0; e < t.length; e++)
            t[e] = r(t[e])
    }
    function l(t, e) {
        var n, o = [];
        for (n = 0; n < e.length; n++)
            o[n] = t[e[n]];
        return o
    }
    function p(t) {
        var e = t.split("|")
          , n = e[2].split(" ")
          , o = e[3].split("")
          , r = e[4].split(" ");
        return h(n),
        h(o),
        h(r),
        function(t, e) {
            for (var n = 0; n < e; n++)
                t[n] = Math.round((t[n - 1] || 0) + 6e4 * t[n]);
            t[e - 1] = 1 / 0
        }(r, o.length),
        {
            name: e[0],
            abbrs: l(e[1].split(" "), o),
            offsets: l(n, o),
            untils: r,
            population: 0 | e[5]
        }
    }
    function d(t) {
        t && this._set(p(t))
    }
    function m(t) {
        var e = t.toTimeString()
          , n = e.match(/\([a-z ]+\)/i);
        "GMT" === (n = n && n[0] ? (n = n[0].match(/[A-Z]/g)) ? n.join("") : void 0 : (n = e.match(/[A-Z]{3,5}/g)) ? n[0] : void 0) && (n = void 0),
        this.at = +t,
        this.abbr = n,
        this.offset = t.getTimezoneOffset()
    }
    function v(t) {
        this.zone = t,
        this.offsetScore = 0,
        this.abbrScore = 0
    }
    function z(t, e) {
        for (var n, o; o = 6e4 * ((e.at - t.at) / 12e4 | 0); )
            (n = new m(new Date(t.at + o))).offset === t.offset ? t = n : e = n;
        return t
    }
    function b(t, e) {
        return t.offsetScore !== e.offsetScore ? t.offsetScore - e.offsetScore : t.abbrScore !== e.abbrScore ? t.abbrScore - e.abbrScore : e.zone.population - t.zone.population
    }
    function g(t, e) {
        var n, o;
        for (h(e),
        n = 0; n < e.length; n++)
            o = e[n],
            c[o] = c[o] || {},
            c[o][t] = !0
    }
    function _() {
        try {
            var t = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (t && 3 < t.length) {
                var e = u[w(t)];
                if (e)
                    return e;
                M("Moment Timezone found " + t + " from the Intl api, but did not have that data loaded.")
            }
        } catch (t) {}
        var n, o, r, s = function() {
            var t, e, n, o = (new Date).getFullYear() - 2, r = new m(new Date(o,0,1)), s = [r];
            for (n = 1; n < 48; n++)
                (e = new m(new Date(o,n,1))).offset !== r.offset && (t = z(r, e),
                s.push(t),
                s.push(new m(new Date(t.at + 6e4)))),
                r = e;
            for (n = 0; n < 4; n++)
                s.push(new m(new Date(o + n,0,1))),
                s.push(new m(new Date(o + n,6,1)));
            return s
        }(), i = s.length, f = function(t) {
            var e, n, o, r = t.length, s = {}, i = [];
            for (e = 0; e < r; e++)
                for (n in o = c[t[e].offset] || {})
                    o.hasOwnProperty(n) && (s[n] = !0);
            for (e in s)
                s.hasOwnProperty(e) && i.push(u[e]);
            return i
        }(s), a = [];
        for (o = 0; o < f.length; o++) {
            for (n = new v(S(f[o]),i),
            r = 0; r < i; r++)
                n.scoreOffsetAt(s[r]);
            a.push(n)
        }
        return a.sort(b),
        0 < a.length ? a[0].zone.name : void 0
    }
    function w(t) {
        return (t || "").toLowerCase().replace(/\//g, "_")
    }
    function y(t) {
        var e, n, o, r;
        for ("string" == typeof t && (t = [t]),
        e = 0; e < t.length; e++)
            r = w(n = (o = t[e].split("|"))[0]),
            i[r] = t[e],
            u[r] = n,
            g(r, o[2].split(" "))
    }
    function S(t, e) {
        t = w(t);
        var n, o = i[t];
        return o instanceof d ? o : "string" == typeof o ? (o = new d(o),
        i[t] = o) : f[t] && e !== S && (n = S(f[t], S)) ? ((o = i[t] = new d)._set(n),
        o.name = u[t],
        o) : null
    }
    function O(t) {
        var e, n, o, r;
        for ("string" == typeof t && (t = [t]),
        e = 0; e < t.length; e++)
            o = w((n = t[e].split("|"))[0]),
            r = w(n[1]),
            f[o] = r,
            u[o] = n[0],
            f[r] = o,
            u[r] = n[1]
    }
    function A(t) {
        var e = "X" === t._f || "x" === t._f;
        return !(!t._a || void 0 !== t._tzm || e)
    }
    function M(t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(t)
    }
    function j(t) {
        var e = Array.prototype.slice.call(arguments, 0, -1)
          , n = arguments[arguments.length - 1]
          , o = S(n)
          , r = s.utc.apply(null, e);
        return o && !s.isMoment(t) && A(r) && r.add(o.parse(r), "minutes"),
        r.tz(n),
        r
    }
    (n < 2 || 2 === n && o < 6) && M("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + s.version + ". See momentjs.com"),
    d.prototype = {
        _set: function(t) {
            this.name = t.name,
            this.abbrs = t.abbrs,
            this.untils = t.untils,
            this.offsets = t.offsets,
            this.population = t.population
        },
        _index: function(t) {
            var e, n = +t, o = this.untils;
            for (e = 0; e < o.length; e++)
                if (n < o[e])
                    return e
        },
        parse: function(t) {
            var e, n, o, r, s = +t, i = this.offsets, f = this.untils, a = f.length - 1;
            for (r = 0; r < a; r++)
                if (e = i[r],
                n = i[r + 1],
                o = i[r ? r - 1 : r],
                e < n && j.moveAmbiguousForward ? e = n : o < e && j.moveInvalidForward && (e = o),
                s < f[r] - 6e4 * e)
                    return i[r];
            return i[a]
        },
        abbr: function(t) {
            return this.abbrs[this._index(t)]
        },
        offset: function(t) {
            return M("zone.offset has been deprecated in favor of zone.utcOffset"),
            this.offsets[this._index(t)]
        },
        utcOffset: function(t) {
            return this.offsets[this._index(t)]
        }
    },
    v.prototype.scoreOffsetAt = function(t) {
        this.offsetScore += Math.abs(this.zone.utcOffset(t.at) - t.offset),
        this.zone.abbr(t.at).replace(/[^A-Z]/g, "") !== t.abbr && this.abbrScore++
    }
    ,
    j.version = "0.5.17",
    j.dataVersion = "",
    j._zones = i,
    j._links = f,
    j._names = u,
    j.add = y,
    j.link = O,
    j.load = function(t) {
        y(t.zones),
        O(t.links),
        j.dataVersion = t.version
    }
    ,
    j.zone = S,
    j.zoneExists = function t(e) {
        return t.didShowError || (t.didShowError = !0,
        M("moment.tz.zoneExists('" + e + "') has been deprecated in favor of !moment.tz.zone('" + e + "')")),
        !!S(e)
    }
    ,
    j.guess = function(t) {
        return e && !t || (e = _()),
        e
    }
    ,
    j.names = function() {
        var t, e = [];
        for (t in u)
            u.hasOwnProperty(t) && (i[t] || i[f[t]]) && u[t] && e.push(u[t]);
        return e.sort()
    }
    ,
    j.Zone = d,
    j.unpack = p,
    j.unpackBase60 = r,
    j.needsOffset = A,
    j.moveInvalidForward = !0,
    j.moveAmbiguousForward = !1;
    var D, x = s.fn;
    function T(t) {
        return function() {
            return this._z ? this._z.abbr(this) : t.call(this)
        }
    }
    s.tz = j,
    s.defaultZone = null,
    s.updateOffset = function(t, e) {
        var n, o = s.defaultZone;
        void 0 === t._z && (o && A(t) && !t._isUTC && (t._d = s.utc(t._a)._d,
        t.utc().add(o.parse(t), "minutes")),
        t._z = o),
        t._z && (n = t._z.utcOffset(t),
        Math.abs(n) < 16 && (n /= 60),
        void 0 !== t.utcOffset ? t.utcOffset(-n, e) : t.zone(n, e))
    }
    ,
    x.tz = function(t, e) {
        return t ? (this._z = S(t),
        this._z ? s.updateOffset(this, e) : M("Moment Timezone has no data for " + t + ". See http://momentjs.com/timezone/docs/#/data-loading/."),
        this) : this._z ? this._z.name : void 0
    }
    ,
    x.zoneName = T(x.zoneName),
    x.zoneAbbr = T(x.zoneAbbr),
    x.utc = (D = x.utc,
    function() {
        return this._z = null,
        D.apply(this, arguments)
    }
    ),
    s.tz.setDefault = function(t) {
        return (n < 2 || 2 === n && o < 9) && M("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + s.version + "."),
        s.defaultZone = t ? S(t) : null,
        s
    }
    ;
    var Z = s.momentProperties;
    return "[object Array]" === Object.prototype.toString.call(Z) ? (Z.push("_z"),
    Z.push("_a")) : Z && (Z._z = null),
    s
});
;!function(a, i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["moment"], i) : "object" == typeof module && module.exports ? module.exports = i(require("moment")) : i(a.moment)
}(this, function(A) {
    "use strict";
    var i, c = {}, n = {}, s = {}, u = {}, a = A.version.split("."), e = +a[0], r = +a[1];
    function t(a) {
        return 96 < a ? a - 87 : 64 < a ? a - 29 : a - 48
    }
    function o(a) {
        var i = 0
          , e = a.split(".")
          , r = e[0]
          , o = e[1] || ""
          , A = 1
          , c = 0
          , n = 1;
        for (45 === a.charCodeAt(0) && (n = -(i = 1)); i < r.length; i++)
            c = 60 * c + t(r.charCodeAt(i));
        for (i = 0; i < o.length; i++)
            A /= 60,
            c += t(o.charCodeAt(i)) * A;
        return c * n
    }
    function m(a) {
        for (var i = 0; i < a.length; i++)
            a[i] = o(a[i])
    }
    function f(a, i) {
        var e, r = [];
        for (e = 0; e < i.length; e++)
            r[e] = a[i[e]];
        return r
    }
    function l(a) {
        var i = a.split("|")
          , e = i[2].split(" ")
          , r = i[3].split("")
          , o = i[4].split(" ");
        return m(e),
        m(r),
        m(o),
        function(a, i) {
            for (var e = 0; e < i; e++)
                a[e] = Math.round((a[e - 1] || 0) + 6e4 * a[e]);
            a[i - 1] = 1 / 0
        }(o, r.length),
        {
            name: i[0],
            abbrs: f(i[1].split(" "), r),
            offsets: f(e, r),
            untils: o,
            population: 0 | i[5]
        }
    }
    function p(a) {
        a && this._set(l(a))
    }
    function b(a) {
        var i = a.toTimeString()
          , e = i.match(/\([a-z ]+\)/i);
        "GMT" === (e = e && e[0] ? (e = e[0].match(/[A-Z]/g)) ? e.join("") : void 0 : (e = i.match(/[A-Z]{3,5}/g)) ? e[0] : void 0) && (e = void 0),
        this.at = +a,
        this.abbr = e,
        this.offset = a.getTimezoneOffset()
    }
    function M(a) {
        this.zone = a,
        this.offsetScore = 0,
        this.abbrScore = 0
    }
    function d(a, i) {
        for (var e, r; r = 6e4 * ((i.at - a.at) / 12e4 | 0); )
            (e = new b(new Date(a.at + r))).offset === a.offset ? a = e : i = e;
        return a
    }
    function h(a, i) {
        return a.offsetScore !== i.offsetScore ? a.offsetScore - i.offsetScore : a.abbrScore !== i.abbrScore ? a.abbrScore - i.abbrScore : i.zone.population - a.zone.population
    }
    function z(a, i) {
        var e, r;
        for (m(i),
        e = 0; e < i.length; e++)
            r = i[e],
            u[r] = u[r] || {},
            u[r][a] = !0
    }
    function E() {
        try {
            var a = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (a && 3 < a.length) {
                var i = s[g(a)];
                if (i)
                    return i;
                N("Moment Timezone found " + a + " from the Intl api, but did not have that data loaded.")
            }
        } catch (a) {}
        var e, r, o, A = function() {
            var a, i, e, r = (new Date).getFullYear() - 2, o = new b(new Date(r,0,1)), A = [o];
            for (e = 1; e < 48; e++)
                (i = new b(new Date(r,e,1))).offset !== o.offset && (a = d(o, i),
                A.push(a),
                A.push(new b(new Date(a.at + 6e4)))),
                o = i;
            for (e = 0; e < 4; e++)
                A.push(new b(new Date(r + e,0,1))),
                A.push(new b(new Date(r + e,6,1)));
            return A
        }(), c = A.length, n = function(a) {
            var i, e, r, o = a.length, A = {}, c = [];
            for (i = 0; i < o; i++)
                for (e in r = u[a[i].offset] || {})
                    r.hasOwnProperty(e) && (A[e] = !0);
            for (i in A)
                A.hasOwnProperty(i) && c.push(s[i]);
            return c
        }(A), t = [];
        for (r = 0; r < n.length; r++) {
            for (e = new M(S(n[r]),c),
            o = 0; o < c; o++)
                e.scoreOffsetAt(A[o]);
            t.push(e)
        }
        return t.sort(h),
        0 < t.length ? t[0].zone.name : void 0
    }
    function g(a) {
        return (a || "").toLowerCase().replace(/\//g, "_")
    }
    function T(a) {
        var i, e, r, o;
        for ("string" == typeof a && (a = [a]),
        i = 0; i < a.length; i++)
            o = g(e = (r = a[i].split("|"))[0]),
            c[o] = a[i],
            s[o] = e,
            z(o, r[2].split(" "))
    }
    function S(a, i) {
        a = g(a);
        var e, r = c[a];
        return r instanceof p ? r : "string" == typeof r ? (r = new p(r),
        c[a] = r) : n[a] && i !== S && (e = S(n[a], S)) ? ((r = c[a] = new p)._set(e),
        r.name = s[a],
        r) : null
    }
    function P(a) {
        var i, e, r, o;
        for ("string" == typeof a && (a = [a]),
        i = 0; i < a.length; i++)
            r = g((e = a[i].split("|"))[0]),
            o = g(e[1]),
            n[r] = o,
            s[r] = e[0],
            n[o] = r,
            s[o] = e[1]
    }
    function _(a) {
        T(a.zones),
        P(a.links),
        C.dataVersion = a.version
    }
    function k(a) {
        var i = "X" === a._f || "x" === a._f;
        return !(!a._a || void 0 !== a._tzm || i)
    }
    function N(a) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(a)
    }
    function C(a) {
        var i = Array.prototype.slice.call(arguments, 0, -1)
          , e = arguments[arguments.length - 1]
          , r = S(e)
          , o = A.utc.apply(null, i);
        return r && !A.isMoment(a) && k(o) && o.add(r.parse(o), "minutes"),
        o.tz(e),
        o
    }
    (e < 2 || 2 === e && r < 6) && N("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + A.version + ". See momentjs.com"),
    p.prototype = {
        _set: function(a) {
            this.name = a.name,
            this.abbrs = a.abbrs,
            this.untils = a.untils,
            this.offsets = a.offsets,
            this.population = a.population
        },
        _index: function(a) {
            var i, e = +a, r = this.untils;
            for (i = 0; i < r.length; i++)
                if (e < r[i])
                    return i
        },
        parse: function(a) {
            var i, e, r, o, A = +a, c = this.offsets, n = this.untils, t = n.length - 1;
            for (o = 0; o < t; o++)
                if (i = c[o],
                e = c[o + 1],
                r = c[o ? o - 1 : o],
                i < e && C.moveAmbiguousForward ? i = e : r < i && C.moveInvalidForward && (i = r),
                A < n[o] - 6e4 * i)
                    return c[o];
            return c[t]
        },
        abbr: function(a) {
            return this.abbrs[this._index(a)]
        },
        offset: function(a) {
            return N("zone.offset has been deprecated in favor of zone.utcOffset"),
            this.offsets[this._index(a)]
        },
        utcOffset: function(a) {
            return this.offsets[this._index(a)]
        }
    },
    M.prototype.scoreOffsetAt = function(a) {
        this.offsetScore += Math.abs(this.zone.utcOffset(a.at) - a.offset),
        this.zone.abbr(a.at).replace(/[^A-Z]/g, "") !== a.abbr && this.abbrScore++
    }
    ,
    C.version = "0.5.17",
    C.dataVersion = "",
    C._zones = c,
    C._links = n,
    C._names = s,
    C.add = T,
    C.link = P,
    C.load = _,
    C.zone = S,
    C.zoneExists = function a(i) {
        return a.didShowError || (a.didShowError = !0,
        N("moment.tz.zoneExists('" + i + "') has been deprecated in favor of !moment.tz.zone('" + i + "')")),
        !!S(i)
    }
    ,
    C.guess = function(a) {
        return i && !a || (i = E()),
        i
    }
    ,
    C.names = function() {
        var a, i = [];
        for (a in s)
            s.hasOwnProperty(a) && (c[a] || c[n[a]]) && s[a] && i.push(s[a]);
        return i.sort()
    }
    ,
    C.Zone = p,
    C.unpack = l,
    C.unpackBase60 = o,
    C.needsOffset = k,
    C.moveInvalidForward = !0,
    C.moveAmbiguousForward = !1;
    var O, B = A.fn;
    function G(a) {
        return function() {
            return this._z ? this._z.abbr(this) : a.call(this)
        }
    }
    A.tz = C,
    A.defaultZone = null,
    A.updateOffset = function(a, i) {
        var e, r = A.defaultZone;
        void 0 === a._z && (r && k(a) && !a._isUTC && (a._d = A.utc(a._a)._d,
        a.utc().add(r.parse(a), "minutes")),
        a._z = r),
        a._z && (e = a._z.utcOffset(a),
        Math.abs(e) < 16 && (e /= 60),
        void 0 !== a.utcOffset ? a.utcOffset(-e, i) : a.zone(e, i))
    }
    ,
    B.tz = function(a, i) {
        return a ? (this._z = S(a),
        this._z ? A.updateOffset(this, i) : N("Moment Timezone has no data for " + a + ". See http://momentjs.com/timezone/docs/#/data-loading/."),
        this) : this._z ? this._z.name : void 0
    }
    ,
    B.zoneName = G(B.zoneName),
    B.zoneAbbr = G(B.zoneAbbr),
    B.utc = (O = B.utc,
    function() {
        return this._z = null,
        O.apply(this, arguments)
    }
    ),
    A.tz.setDefault = function(a) {
        return (e < 2 || 2 === e && r < 9) && N("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + A.version + "."),
        A.defaultZone = a ? S(a) : null,
        A
    }
    ;
    var D = A.momentProperties;
    return "[object Array]" === Object.prototype.toString.call(D) ? (D.push("_z"),
    D.push("_a")) : D && (D._z = null),
    _({
        version: "2018e",
        zones: ["Africa/Abidjan|GMT|0|0||48e5", "Africa/Nairobi|EAT|-30|0||47e5", "Africa/Algiers|CET|-10|0||26e5", "Africa/Lagos|WAT|-10|0||17e6", "Africa/Maputo|CAT|-20|0||26e5", "Africa/Cairo|EET EEST|-20 -30|01010|1M2m0 gL0 e10 mn0|15e6", "Africa/Casablanca|WET WEST|0 -10|0101010101010101010101010101010101010101010|1H3C0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00|32e5", "Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|11e6", "Africa/Johannesburg|SAST|-20|0||84e5", "Africa/Khartoum|EAT CAT|-30 -20|01|1Usl0|51e5", "Africa/Sao_Tome|GMT WAT|0 -10|01|1UQN0", "Africa/Tripoli|EET CET CEST|-20 -10 -20|0120|1IlA0 TA0 1o00|11e5", "Africa/Windhoek|CAT WAT|-20 -10|0101010101010|1GQo0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4", "America/Adak|HST HDT|a0 90|01010101010101010101010|1GIc0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|326", "America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1GIb0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|30e4", "America/Santo_Domingo|AST|40|0||29e5", "America/Araguaina|-03 -02|30 20|010|1IdD0 Lz0|14e4", "America/Fortaleza|-03|30|0||34e5", "America/Asuncion|-03 -04|30 40|01010101010101010101010|1GTf0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0|28e5", "America/Panama|EST|50|0||15e5", "America/Mexico_City|CST CDT|60 50|01010101010101010101010|1GQw0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|20e6", "America/Bahia|-02 -03|20 30|01|1GCq0|27e5", "America/Managua|CST|60|0||22e5", "America/La_Paz|-04|40|0||19e5", "America/Lima|-05|50|0||11e6", "America/Denver|MST MDT|70 60|01010101010101010101010|1GI90 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|26e5", "America/Campo_Grande|-03 -04|30 40|01010101010101010101010|1GCr0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0|77e4", "America/Cancun|CST CDT EST|60 50 50|01010102|1GQw0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4", "America/Caracas|-0430 -04|4u 40|01|1QMT0|29e5", "America/Chicago|CST CDT|60 50|01010101010101010101010|1GI80 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|92e5", "America/Chihuahua|MST MDT|70 60|01010101010101010101010|1GQx0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|81e4", "America/Phoenix|MST|70|0||42e5", "America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1GIa0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|15e6", "America/New_York|EST EDT|50 40|01010101010101010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|21e6", "America/Rio_Branco|-04 -05|40 50|01|1KLE0|31e4", "America/Fort_Nelson|PST PDT MST|80 70 70|01010102|1GIa0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2", "America/Halifax|AST ADT|40 30|01010101010101010101010|1GI60 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|39e4", "America/Godthab|-03 -02|30 20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|17e3", "America/Grand_Turk|EST EDT AST|50 40 40|0101010121010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|37e2", "America/Havana|CST CDT|50 40|01010101010101010101010|1GQt0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0|21e5", "America/Metlakatla|PST AKST AKDT|80 90 80|0121212121212121|1PAa0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|14e2", "America/Miquelon|-03 -02|30 20|01010101010101010101010|1GI50 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|61e2", "America/Montevideo|-02 -03|20 30|01010101|1GI40 1o10 11z0 1o10 11z0 1o10 11z0|17e5", "America/Noronha|-02|20|0||30e2", "America/Port-au-Prince|EST EDT|50 40|010101010101010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|23e5", "Antarctica/Palmer|-03 -04|30 40|010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40", "America/Santiago|-03 -04|30 40|010101010101010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0|62e5", "America/Sao_Paulo|-02 -03|20 30|01010101010101010101010|1GCq0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0|20e6", "Atlantic/Azores|-01 +00|10 0|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e4", "America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1GI5u 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|11e4", "Antarctica/Casey|+11 +08|-b0 -80|0101|1GAF0 blz0 3m10|10", "Antarctica/Davis|+05 +07|-50 -70|01|1GAI0|70", "Pacific/Port_Moresby|+10|-a0|0||25e4", "Pacific/Guadalcanal|+11|-b0|0||11e4", "Asia/Tashkent|+05|-50|0||23e5", "Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|14e5", "Asia/Baghdad|+03|-30|0||66e5", "Antarctica/Troll|+00 +02|0 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|40", "Asia/Dhaka|+06|-60|0||16e6", "Asia/Amman|EET EEST|-20 -30|010101010101010101010|1GPy0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00|25e5", "Asia/Kamchatka|+12|-c0|0||18e4", "Asia/Baku|+04 +05|-40 -50|010101010|1GNA0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5", "Asia/Bangkok|+07|-70|0||15e6", "Asia/Barnaul|+07 +06|-70 -60|010|1N7v0 3rd0", "Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1GNy0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|22e5", "Asia/Manila|+08|-80|0||24e6", "Asia/Kolkata|IST|-5u|0||15e6", "Asia/Chita|+10 +08 +09|-a0 -80 -90|012|1N7s0 3re0|33e4", "Asia/Ulaanbaatar|+08 +09|-80 -90|01010|1O8G0 1cJ0 1cP0 1cJ0|12e5", "Asia/Shanghai|CST|-80|0||23e6", "Asia/Colombo|+0530|-5u|0||22e5", "Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1GPy0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0|26e5", "Asia/Dili|+09|-90|0||19e4", "Asia/Dubai|+04|-40|0||39e5", "Asia/Famagusta|EET EEST +03|-20 -30 -30|0101010101201010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0", "Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1GPy0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0|18e5", "Asia/Hong_Kong|HKT|-80|0||73e5", "Asia/Hovd|+07 +08|-70 -80|01010|1O8H0 1cJ0 1cP0 1cJ0|81e3", "Asia/Irkutsk|+09 +08|-90 -80|01|1N7t0|60e4", "Europe/Istanbul|EET EEST +03|-20 -30 -30|01010101012|1GNB0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6", "Asia/Jakarta|WIB|-70|0||31e6", "Asia/Jayapura|WIT|-90|0||26e4", "Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1GPA0 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0|81e4", "Asia/Kabul|+0430|-4u|0||46e5", "Asia/Karachi|PKT|-50|0||24e6", "Asia/Kathmandu|+0545|-5J|0||12e5", "Asia/Yakutsk|+10 +09|-a0 -90|01|1N7s0|28e4", "Asia/Krasnoyarsk|+08 +07|-80 -70|01|1N7u0|10e5", "Asia/Magadan|+12 +10 +11|-c0 -a0 -b0|012|1N7q0 3Cq0|95e3", "Asia/Makassar|WITA|-80|0||15e5", "Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|35e5", "Asia/Novosibirsk|+07 +06|-70 -60|010|1N7v0 4eN0|15e5", "Asia/Omsk|+07 +06|-70 -60|01|1N7v0|12e5", "Asia/Pyongyang|KST KST|-90 -8u|010|1P4D0 6BAu|29e5", "Asia/Rangoon|+0630|-6u|0||48e5", "Asia/Sakhalin|+11 +10|-b0 -a0|010|1N7r0 3rd0|58e4", "Asia/Seoul|KST|-90|0||23e6", "Asia/Srednekolymsk|+12 +11|-c0 -b0|01|1N7q0|35e2", "Asia/Tehran|+0330 +0430|-3u -4u|01010101010101010101010|1GLUu 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0|14e6", "Asia/Tokyo|JST|-90|0||38e6", "Asia/Tomsk|+07 +06|-70 -60|010|1N7v0 3Qp0|10e5", "Asia/Vladivostok|+11 +10|-b0 -a0|01|1N7r0|60e4", "Asia/Yekaterinburg|+06 +05|-60 -50|01|1N7w0|14e5", "Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|27e5", "Atlantic/Cape_Verde|-01|10|0||50e4", "Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1GQg0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|40e5", "Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1GQgu 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|11e5", "Australia/Brisbane|AEST|-a0|0||20e5", "Australia/Darwin|ACST|-9u|0||12e4", "Australia/Eucla|+0845|-8J|0||368", "Australia/Lord_Howe|+11 +1030|-b0 -au|01010101010101010101010|1GQf0 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu|347", "Australia/Perth|AWST|-80|0||18e5", "Pacific/Easter|-05 -06|50 60|010101010101010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0|30e2", "Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|12e5", "Etc/GMT-1|+01|-10|0|", "Pacific/Fakaofo|+13|-d0|0||483", "Pacific/Kiritimati|+14|-e0|0||51e2", "Etc/GMT-2|+02|-20|0|", "Pacific/Tahiti|-10|a0|0||18e4", "Pacific/Niue|-11|b0|0||12e2", "Etc/GMT+12|-12|c0|0|", "Pacific/Galapagos|-06|60|0||25e3", "Etc/GMT+7|-07|70|0|", "Pacific/Pitcairn|-08|80|0||56", "Pacific/Gambier|-09|90|0||125", "Etc/UCT|UCT|0|0|", "Etc/UTC|UTC|0|0|", "Europe/Astrakhan|+04 +03|-40 -30|010|1N7y0 3rd0", "Europe/London|GMT BST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|10e6", "Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1GNA0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|67e4", "Europe/Kaliningrad|+03 EET|-30 -20|01|1N7z0|44e4", "Europe/Volgograd|+04 +03|-40 -30|01|1N7y0|10e5", "Europe/Moscow|MSK MSK|-40 -30|01|1N7y0|16e6", "Europe/Saratov|+04 +03|-40 -30|010|1N7y0 5810", "Europe/Simferopol|EET EEST MSK MSK|-20 -30 -40 -30|0101023|1GNB0 1qM0 11A0 1o00 11z0 1nW0|33e4", "Pacific/Honolulu|HST|a0|0||37e4", "MET|MET MEST|-10 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0", "Pacific/Chatham|+1345 +1245|-dJ -cJ|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|600", "Pacific/Apia|+14 +13|-e0 -d0|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|37e3", "Pacific/Bougainville|+10 +11|-a0 -b0|01|1NwE0|18e4", "Pacific/Fiji|+13 +12|-d0 -c0|01010101010101010101010|1Goe0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0|88e4", "Pacific/Guam|ChST|-a0|0||17e4", "Pacific/Marquesas|-0930|9u|0||86e2", "Pacific/Pago_Pago|SST|b0|0||37e2", "Pacific/Norfolk|+1130 +11|-bu -b0|01|1PoCu|25e4", "Pacific/Tongatapu|+13 +14|-d0 -e0|010|1S4d0 s00|75e3"],
        links: ["Africa/Abidjan|Africa/Accra", "Africa/Abidjan|Africa/Bamako", "Africa/Abidjan|Africa/Banjul", "Africa/Abidjan|Africa/Bissau", "Africa/Abidjan|Africa/Conakry", "Africa/Abidjan|Africa/Dakar", "Africa/Abidjan|Africa/Freetown", "Africa/Abidjan|Africa/Lome", "Africa/Abidjan|Africa/Monrovia", "Africa/Abidjan|Africa/Nouakchott", "Africa/Abidjan|Africa/Ouagadougou", "Africa/Abidjan|Africa/Timbuktu", "Africa/Abidjan|America/Danmarkshavn", "Africa/Abidjan|Atlantic/Reykjavik", "Africa/Abidjan|Atlantic/St_Helena", "Africa/Abidjan|Etc/GMT", "Africa/Abidjan|Etc/GMT+0", "Africa/Abidjan|Etc/GMT-0", "Africa/Abidjan|Etc/GMT0", "Africa/Abidjan|Etc/Greenwich", "Africa/Abidjan|GMT", "Africa/Abidjan|GMT+0", "Africa/Abidjan|GMT-0", "Africa/Abidjan|GMT0", "Africa/Abidjan|Greenwich", "Africa/Abidjan|Iceland", "Africa/Algiers|Africa/Tunis", "Africa/Cairo|Egypt", "Africa/Casablanca|Africa/El_Aaiun", "Africa/Johannesburg|Africa/Maseru", "Africa/Johannesburg|Africa/Mbabane", "Africa/Lagos|Africa/Bangui", "Africa/Lagos|Africa/Brazzaville", "Africa/Lagos|Africa/Douala", "Africa/Lagos|Africa/Kinshasa", "Africa/Lagos|Africa/Libreville", "Africa/Lagos|Africa/Luanda", "Africa/Lagos|Africa/Malabo", "Africa/Lagos|Africa/Ndjamena", "Africa/Lagos|Africa/Niamey", "Africa/Lagos|Africa/Porto-Novo", "Africa/Maputo|Africa/Blantyre", "Africa/Maputo|Africa/Bujumbura", "Africa/Maputo|Africa/Gaborone", "Africa/Maputo|Africa/Harare", "Africa/Maputo|Africa/Kigali", "Africa/Maputo|Africa/Lubumbashi", "Africa/Maputo|Africa/Lusaka", "Africa/Nairobi|Africa/Addis_Ababa", "Africa/Nairobi|Africa/Asmara", "Africa/Nairobi|Africa/Asmera", "Africa/Nairobi|Africa/Dar_es_Salaam", "Africa/Nairobi|Africa/Djibouti", "Africa/Nairobi|Africa/Juba", "Africa/Nairobi|Africa/Kampala", "Africa/Nairobi|Africa/Mogadishu", "Africa/Nairobi|Indian/Antananarivo", "Africa/Nairobi|Indian/Comoro", "Africa/Nairobi|Indian/Mayotte", "Africa/Tripoli|Libya", "America/Adak|America/Atka", "America/Adak|US/Aleutian", "America/Anchorage|America/Juneau", "America/Anchorage|America/Nome", "America/Anchorage|America/Sitka", "America/Anchorage|America/Yakutat", "America/Anchorage|US/Alaska", "America/Campo_Grande|America/Cuiaba", "America/Chicago|America/Indiana/Knox", "America/Chicago|America/Indiana/Tell_City", "America/Chicago|America/Knox_IN", "America/Chicago|America/Matamoros", "America/Chicago|America/Menominee", "America/Chicago|America/North_Dakota/Beulah", "America/Chicago|America/North_Dakota/Center", "America/Chicago|America/North_Dakota/New_Salem", "America/Chicago|America/Rainy_River", "America/Chicago|America/Rankin_Inlet", "America/Chicago|America/Resolute", "America/Chicago|America/Winnipeg", "America/Chicago|CST6CDT", "America/Chicago|Canada/Central", "America/Chicago|US/Central", "America/Chicago|US/Indiana-Starke", "America/Chihuahua|America/Mazatlan", "America/Chihuahua|Mexico/BajaSur", "America/Denver|America/Boise", "America/Denver|America/Cambridge_Bay", "America/Denver|America/Edmonton", "America/Denver|America/Inuvik", "America/Denver|America/Ojinaga", "America/Denver|America/Shiprock", "America/Denver|America/Yellowknife", "America/Denver|Canada/Mountain", "America/Denver|MST7MDT", "America/Denver|Navajo", "America/Denver|US/Mountain", "America/Fortaleza|America/Argentina/Buenos_Aires", "America/Fortaleza|America/Argentina/Catamarca", "America/Fortaleza|America/Argentina/ComodRivadavia", "America/Fortaleza|America/Argentina/Cordoba", "America/Fortaleza|America/Argentina/Jujuy", "America/Fortaleza|America/Argentina/La_Rioja", "America/Fortaleza|America/Argentina/Mendoza", "America/Fortaleza|America/Argentina/Rio_Gallegos", "America/Fortaleza|America/Argentina/Salta", "America/Fortaleza|America/Argentina/San_Juan", "America/Fortaleza|America/Argentina/San_Luis", "America/Fortaleza|America/Argentina/Tucuman", "America/Fortaleza|America/Argentina/Ushuaia", "America/Fortaleza|America/Belem", "America/Fortaleza|America/Buenos_Aires", "America/Fortaleza|America/Catamarca", "America/Fortaleza|America/Cayenne", "America/Fortaleza|America/Cordoba", "America/Fortaleza|America/Jujuy", "America/Fortaleza|America/Maceio", "America/Fortaleza|America/Mendoza", "America/Fortaleza|America/Paramaribo", "America/Fortaleza|America/Recife", "America/Fortaleza|America/Rosario", "America/Fortaleza|America/Santarem", "America/Fortaleza|Antarctica/Rothera", "America/Fortaleza|Atlantic/Stanley", "America/Fortaleza|Etc/GMT+3", "America/Halifax|America/Glace_Bay", "America/Halifax|America/Goose_Bay", "America/Halifax|America/Moncton", "America/Halifax|America/Thule", "America/Halifax|Atlantic/Bermuda", "America/Halifax|Canada/Atlantic", "America/Havana|Cuba", "America/La_Paz|America/Boa_Vista", "America/La_Paz|America/Guyana", "America/La_Paz|America/Manaus", "America/La_Paz|America/Porto_Velho", "America/La_Paz|Brazil/West", "America/La_Paz|Etc/GMT+4", "America/Lima|America/Bogota", "America/Lima|America/Guayaquil", "America/Lima|Etc/GMT+5", "America/Los_Angeles|America/Dawson", "America/Los_Angeles|America/Ensenada", "America/Los_Angeles|America/Santa_Isabel", "America/Los_Angeles|America/Tijuana", "America/Los_Angeles|America/Vancouver", "America/Los_Angeles|America/Whitehorse", "America/Los_Angeles|Canada/Pacific", "America/Los_Angeles|Canada/Yukon", "America/Los_Angeles|Mexico/BajaNorte", "America/Los_Angeles|PST8PDT", "America/Los_Angeles|US/Pacific", "America/Los_Angeles|US/Pacific-New", "America/Managua|America/Belize", "America/Managua|America/Costa_Rica", "America/Managua|America/El_Salvador", "America/Managua|America/Guatemala", "America/Managua|America/Regina", "America/Managua|America/Swift_Current", "America/Managua|America/Tegucigalpa", "America/Managua|Canada/Saskatchewan", "America/Mexico_City|America/Bahia_Banderas", "America/Mexico_City|America/Merida", "America/Mexico_City|America/Monterrey", "America/Mexico_City|Mexico/General", "America/New_York|America/Detroit", "America/New_York|America/Fort_Wayne", "America/New_York|America/Indiana/Indianapolis", "America/New_York|America/Indiana/Marengo", "America/New_York|America/Indiana/Petersburg", "America/New_York|America/Indiana/Vevay", "America/New_York|America/Indiana/Vincennes", "America/New_York|America/Indiana/Winamac", "America/New_York|America/Indianapolis", "America/New_York|America/Iqaluit", "America/New_York|America/Kentucky/Louisville", "America/New_York|America/Kentucky/Monticello", "America/New_York|America/Louisville", "America/New_York|America/Montreal", "America/New_York|America/Nassau", "America/New_York|America/Nipigon", "America/New_York|America/Pangnirtung", "America/New_York|America/Thunder_Bay", "America/New_York|America/Toronto", "America/New_York|Canada/Eastern", "America/New_York|EST5EDT", "America/New_York|US/East-Indiana", "America/New_York|US/Eastern", "America/New_York|US/Michigan", "America/Noronha|Atlantic/South_Georgia", "America/Noronha|Brazil/DeNoronha", "America/Noronha|Etc/GMT+2", "America/Panama|America/Atikokan", "America/Panama|America/Cayman", "America/Panama|America/Coral_Harbour", "America/Panama|America/Jamaica", "America/Panama|EST", "America/Panama|Jamaica", "America/Phoenix|America/Creston", "America/Phoenix|America/Dawson_Creek", "America/Phoenix|America/Hermosillo", "America/Phoenix|MST", "America/Phoenix|US/Arizona", "America/Rio_Branco|America/Eirunepe", "America/Rio_Branco|America/Porto_Acre", "America/Rio_Branco|Brazil/Acre", "America/Santiago|Chile/Continental", "America/Santo_Domingo|America/Anguilla", "America/Santo_Domingo|America/Antigua", "America/Santo_Domingo|America/Aruba", "America/Santo_Domingo|America/Barbados", "America/Santo_Domingo|America/Blanc-Sablon", "America/Santo_Domingo|America/Curacao", "America/Santo_Domingo|America/Dominica", "America/Santo_Domingo|America/Grenada", "America/Santo_Domingo|America/Guadeloupe", "America/Santo_Domingo|America/Kralendijk", "America/Santo_Domingo|America/Lower_Princes", "America/Santo_Domingo|America/Marigot", "America/Santo_Domingo|America/Martinique", "America/Santo_Domingo|America/Montserrat", "America/Santo_Domingo|America/Port_of_Spain", "America/Santo_Domingo|America/Puerto_Rico", "America/Santo_Domingo|America/St_Barthelemy", "America/Santo_Domingo|America/St_Kitts", "America/Santo_Domingo|America/St_Lucia", "America/Santo_Domingo|America/St_Thomas", "America/Santo_Domingo|America/St_Vincent", "America/Santo_Domingo|America/Tortola", "America/Santo_Domingo|America/Virgin", "America/Sao_Paulo|Brazil/East", "America/St_Johns|Canada/Newfoundland", "Antarctica/Palmer|America/Punta_Arenas", "Asia/Baghdad|Antarctica/Syowa", "Asia/Baghdad|Asia/Aden", "Asia/Baghdad|Asia/Bahrain", "Asia/Baghdad|Asia/Kuwait", "Asia/Baghdad|Asia/Qatar", "Asia/Baghdad|Asia/Riyadh", "Asia/Baghdad|Etc/GMT-3", "Asia/Baghdad|Europe/Minsk", "Asia/Bangkok|Asia/Ho_Chi_Minh", "Asia/Bangkok|Asia/Novokuznetsk", "Asia/Bangkok|Asia/Phnom_Penh", "Asia/Bangkok|Asia/Saigon", "Asia/Bangkok|Asia/Vientiane", "Asia/Bangkok|Etc/GMT-7", "Asia/Bangkok|Indian/Christmas", "Asia/Dhaka|Antarctica/Vostok", "Asia/Dhaka|Asia/Almaty", "Asia/Dhaka|Asia/Bishkek", "Asia/Dhaka|Asia/Dacca", "Asia/Dhaka|Asia/Kashgar", "Asia/Dhaka|Asia/Qyzylorda", "Asia/Dhaka|Asia/Thimbu", "Asia/Dhaka|Asia/Thimphu", "Asia/Dhaka|Asia/Urumqi", "Asia/Dhaka|Etc/GMT-6", "Asia/Dhaka|Indian/Chagos", "Asia/Dili|Etc/GMT-9", "Asia/Dili|Pacific/Palau", "Asia/Dubai|Asia/Muscat", "Asia/Dubai|Asia/Tbilisi", "Asia/Dubai|Asia/Yerevan", "Asia/Dubai|Etc/GMT-4", "Asia/Dubai|Europe/Samara", "Asia/Dubai|Indian/Mahe", "Asia/Dubai|Indian/Mauritius", "Asia/Dubai|Indian/Reunion", "Asia/Gaza|Asia/Hebron", "Asia/Hong_Kong|Hongkong", "Asia/Jakarta|Asia/Pontianak", "Asia/Jerusalem|Asia/Tel_Aviv", "Asia/Jerusalem|Israel", "Asia/Kamchatka|Asia/Anadyr", "Asia/Kamchatka|Etc/GMT-12", "Asia/Kamchatka|Kwajalein", "Asia/Kamchatka|Pacific/Funafuti", "Asia/Kamchatka|Pacific/Kwajalein", "Asia/Kamchatka|Pacific/Majuro", "Asia/Kamchatka|Pacific/Nauru", "Asia/Kamchatka|Pacific/Tarawa", "Asia/Kamchatka|Pacific/Wake", "Asia/Kamchatka|Pacific/Wallis", "Asia/Kathmandu|Asia/Katmandu", "Asia/Kolkata|Asia/Calcutta", "Asia/Makassar|Asia/Ujung_Pandang", "Asia/Manila|Asia/Brunei", "Asia/Manila|Asia/Kuala_Lumpur", "Asia/Manila|Asia/Kuching", "Asia/Manila|Asia/Singapore", "Asia/Manila|Etc/GMT-8", "Asia/Manila|Singapore", "Asia/Rangoon|Asia/Yangon", "Asia/Rangoon|Indian/Cocos", "Asia/Seoul|ROK", "Asia/Shanghai|Asia/Chongqing", "Asia/Shanghai|Asia/Chungking", "Asia/Shanghai|Asia/Harbin", "Asia/Shanghai|Asia/Macao", "Asia/Shanghai|Asia/Macau", "Asia/Shanghai|Asia/Taipei", "Asia/Shanghai|PRC", "Asia/Shanghai|ROC", "Asia/Tashkent|Antarctica/Mawson", "Asia/Tashkent|Asia/Aqtau", "Asia/Tashkent|Asia/Aqtobe", "Asia/Tashkent|Asia/Ashgabat", "Asia/Tashkent|Asia/Ashkhabad", "Asia/Tashkent|Asia/Atyrau", "Asia/Tashkent|Asia/Dushanbe", "Asia/Tashkent|Asia/Oral", "Asia/Tashkent|Asia/Samarkand", "Asia/Tashkent|Etc/GMT-5", "Asia/Tashkent|Indian/Kerguelen", "Asia/Tashkent|Indian/Maldives", "Asia/Tehran|Iran", "Asia/Tokyo|Japan", "Asia/Ulaanbaatar|Asia/Choibalsan", "Asia/Ulaanbaatar|Asia/Ulan_Bator", "Asia/Vladivostok|Asia/Ust-Nera", "Asia/Yakutsk|Asia/Khandyga", "Atlantic/Azores|America/Scoresbysund", "Atlantic/Cape_Verde|Etc/GMT+1", "Australia/Adelaide|Australia/Broken_Hill", "Australia/Adelaide|Australia/South", "Australia/Adelaide|Australia/Yancowinna", "Australia/Brisbane|Australia/Lindeman", "Australia/Brisbane|Australia/Queensland", "Australia/Darwin|Australia/North", "Australia/Lord_Howe|Australia/LHI", "Australia/Perth|Australia/West", "Australia/Sydney|Australia/ACT", "Australia/Sydney|Australia/Canberra", "Australia/Sydney|Australia/Currie", "Australia/Sydney|Australia/Hobart", "Australia/Sydney|Australia/Melbourne", "Australia/Sydney|Australia/NSW", "Australia/Sydney|Australia/Tasmania", "Australia/Sydney|Australia/Victoria", "Etc/UCT|UCT", "Etc/UTC|Etc/Universal", "Etc/UTC|Etc/Zulu", "Etc/UTC|UTC", "Etc/UTC|Universal", "Etc/UTC|Zulu", "Europe/Astrakhan|Europe/Ulyanovsk", "Europe/Athens|Asia/Nicosia", "Europe/Athens|EET", "Europe/Athens|Europe/Bucharest", "Europe/Athens|Europe/Helsinki", "Europe/Athens|Europe/Kiev", "Europe/Athens|Europe/Mariehamn", "Europe/Athens|Europe/Nicosia", "Europe/Athens|Europe/Riga", "Europe/Athens|Europe/Sofia", "Europe/Athens|Europe/Tallinn", "Europe/Athens|Europe/Uzhgorod", "Europe/Athens|Europe/Vilnius", "Europe/Athens|Europe/Zaporozhye", "Europe/Chisinau|Europe/Tiraspol", "Europe/Dublin|Eire", "Europe/Istanbul|Asia/Istanbul", "Europe/Istanbul|Turkey", "Europe/Lisbon|Atlantic/Canary", "Europe/Lisbon|Atlantic/Faeroe", "Europe/Lisbon|Atlantic/Faroe", "Europe/Lisbon|Atlantic/Madeira", "Europe/Lisbon|Portugal", "Europe/Lisbon|WET", "Europe/London|Europe/Belfast", "Europe/London|Europe/Guernsey", "Europe/London|Europe/Isle_of_Man", "Europe/London|Europe/Jersey", "Europe/London|GB", "Europe/London|GB-Eire", "Europe/Moscow|W-SU", "Europe/Paris|Africa/Ceuta", "Europe/Paris|Arctic/Longyearbyen", "Europe/Paris|Atlantic/Jan_Mayen", "Europe/Paris|CET", "Europe/Paris|Europe/Amsterdam", "Europe/Paris|Europe/Andorra", "Europe/Paris|Europe/Belgrade", "Europe/Paris|Europe/Berlin", "Europe/Paris|Europe/Bratislava", "Europe/Paris|Europe/Brussels", "Europe/Paris|Europe/Budapest", "Europe/Paris|Europe/Busingen", "Europe/Paris|Europe/Copenhagen", "Europe/Paris|Europe/Gibraltar", "Europe/Paris|Europe/Ljubljana", "Europe/Paris|Europe/Luxembourg", "Europe/Paris|Europe/Madrid", "Europe/Paris|Europe/Malta", "Europe/Paris|Europe/Monaco", "Europe/Paris|Europe/Oslo", "Europe/Paris|Europe/Podgorica", "Europe/Paris|Europe/Prague", "Europe/Paris|Europe/Rome", "Europe/Paris|Europe/San_Marino", "Europe/Paris|Europe/Sarajevo", "Europe/Paris|Europe/Skopje", "Europe/Paris|Europe/Stockholm", "Europe/Paris|Europe/Tirane", "Europe/Paris|Europe/Vaduz", "Europe/Paris|Europe/Vatican", "Europe/Paris|Europe/Vienna", "Europe/Paris|Europe/Warsaw", "Europe/Paris|Europe/Zagreb", "Europe/Paris|Europe/Zurich", "Europe/Paris|Poland", "Europe/Volgograd|Europe/Kirov", "Pacific/Auckland|Antarctica/McMurdo", "Pacific/Auckland|Antarctica/South_Pole", "Pacific/Auckland|NZ", "Pacific/Chatham|NZ-CHAT", "Pacific/Easter|Chile/EasterIsland", "Pacific/Fakaofo|Etc/GMT-13", "Pacific/Fakaofo|Pacific/Enderbury", "Pacific/Galapagos|Etc/GMT+6", "Pacific/Gambier|Etc/GMT+9", "Pacific/Guadalcanal|Antarctica/Macquarie", "Pacific/Guadalcanal|Etc/GMT-11", "Pacific/Guadalcanal|Pacific/Efate", "Pacific/Guadalcanal|Pacific/Kosrae", "Pacific/Guadalcanal|Pacific/Noumea", "Pacific/Guadalcanal|Pacific/Pohnpei", "Pacific/Guadalcanal|Pacific/Ponape", "Pacific/Guam|Pacific/Saipan", "Pacific/Honolulu|HST", "Pacific/Honolulu|Pacific/Johnston", "Pacific/Honolulu|US/Hawaii", "Pacific/Kiritimati|Etc/GMT-14", "Pacific/Niue|Etc/GMT+11", "Pacific/Pago_Pago|Pacific/Midway", "Pacific/Pago_Pago|Pacific/Samoa", "Pacific/Pago_Pago|US/Samoa", "Pacific/Pitcairn|Etc/GMT+8", "Pacific/Port_Moresby|Antarctica/DumontDUrville", "Pacific/Port_Moresby|Etc/GMT-10", "Pacific/Port_Moresby|Pacific/Chuuk", "Pacific/Port_Moresby|Pacific/Truk", "Pacific/Port_Moresby|Pacific/Yap", "Pacific/Tahiti|Etc/GMT+10", "Pacific/Tahiti|Pacific/Rarotonga"]
    }),
    A
});
;$(document).ready(function() {
    const tnode = $("#time")
    const update_localtime = function() {
        var time = moment().tz(tnode.attr("data-time-zone")).format(tnode.attr("data-time-format"));
        tnode.html(time);
    }
    update_localtime();
    setInterval(update_localtime, 1000);
})
