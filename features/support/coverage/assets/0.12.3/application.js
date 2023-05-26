!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (T, e) {
  "use strict";
  function g(e, t, n) {
    var r,
      a,
      i = (n = n || le).createElement("script");
    if (((i.text = e), t))
      for (r in Se)
        (a = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          i.setAttribute(r, a);
    n.head.appendChild(i).parentNode.removeChild(i);
  }
  function m(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? pe[ge.call(e)] || "object"
      : typeof e;
  }
  function s(e) {
    var t = !!e && "length" in e && e.length,
      n = m(e);
    return (
      !we(e) &&
      !xe(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  function u(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  function t(e, n, r) {
    return we(n)
      ? Te.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? Te.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? Te.grep(e, function (e) {
          return -1 < he.call(n, e) !== r;
        })
      : Te.filter(n, e, r);
  }
  function n(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function c(e) {
    var n = {};
    return (
      Te.each(e.match(Fe) || [], function (e, t) {
        n[t] = !0;
      }),
      n
    );
  }
  function f(e) {
    return e;
  }
  function d(e) {
    throw e;
  }
  function l(e, t, n, r) {
    var a;
    try {
      e && we((a = e.promise))
        ? a.call(e).done(t).fail(n)
        : e && we((a = e.then))
        ? a.call(e, t, n)
        : t.apply(undefined, [e].slice(r));
    } catch (e) {
      n.apply(undefined, [e]);
    }
  }
  function r() {
    le.removeEventListener("DOMContentLoaded", r),
      T.removeEventListener("load", r),
      Te.ready();
  }
  function a(e, t) {
    return t.toUpperCase();
  }
  function h(e) {
    return e.replace(Oe, "ms-").replace(qe, a);
  }
  function i() {
    this.expando = Te.expando + i.uid++;
  }
  function o(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : Ue.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function p(e, t, n) {
    var r;
    if (n === undefined && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(ze, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = o(n);
        } catch (a) {}
        $e.set(e, t, n);
      } else n = undefined;
    return n;
  }
  function v(e, t, n, r) {
    var a,
      i,
      o = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return Te.css(e, t, "");
          },
      l = s(),
      u = (n && n[3]) || (Te.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (Te.cssNumber[t] || ("px" !== u && +l)) &&
        Ve.exec(Te.css(e, t));
    if (c && c[3] !== u) {
      for (l /= 2, u = u || c[3], c = +l || 1; o--; )
        Te.style(e, t, c + u),
          (1 - i) * (1 - (i = s() / l || 0.5)) <= 0 && (o = 0),
          (c /= i);
      (c *= 2), Te.style(e, t, c + u), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +l || 0),
        (a = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = u), (r.start = c), (r.end = a))),
      a
    );
  }
  function y(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      a = et[r];
    return (
      a ||
      ((t = n.body.appendChild(n.createElement(r))),
      (a = Te.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === a && (a = "block"),
      (et[r] = a))
    );
  }
  function b(e, t) {
    for (var n, r, a = [], i = 0, o = e.length; i < o; i++)
      (r = e[i]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((a[i] = Be.get(r, "display") || null),
              a[i] || (r.style.display = "")),
            "" === r.style.display && Ke(r) && (a[i] = y(r)))
          : "none" !== n && ((a[i] = "none"), Be.set(r, "display", n)));
    for (i = 0; i < o; i++) null != a[i] && (e[i].style.display = a[i]);
    return e;
  }
  function w(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      t === undefined || (t && u(e, t)) ? Te.merge([e], n) : n
    );
  }
  function x(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Be.set(e[n], "globalEval", !t || Be.get(t[n], "globalEval"));
  }
  function S(e, t, n, r, a) {
    for (
      var i,
        o,
        s,
        l,
        u,
        c,
        f = t.createDocumentFragment(),
        d = [],
        h = 0,
        p = e.length;
      h < p;
      h++
    )
      if ((i = e[h]) || 0 === i)
        if ("object" === m(i)) Te.merge(d, i.nodeType ? [i] : i);
        else if (st.test(i)) {
          for (
            o = o || f.appendChild(t.createElement("div")),
              s = (nt.exec(i) || ["", ""])[1].toLowerCase(),
              l = at[s] || at._default,
              o.innerHTML = l[1] + Te.htmlPrefilter(i) + l[2],
              c = l[0];
            c--;

          )
            o = o.lastChild;
          Te.merge(d, o.childNodes), ((o = f.firstChild).textContent = "");
        } else d.push(t.createTextNode(i));
    for (f.textContent = "", h = 0; (i = d[h++]); )
      if (r && -1 < Te.inArray(i, r)) a && a.push(i);
      else if (((u = Ye(i)), (o = w(f.appendChild(i), "script")), u && x(o), n))
        for (c = 0; (i = o[c++]); ) rt.test(i.type || "") && n.push(i);
    return f;
  }
  function D() {
    return !0;
  }
  function C() {
    return !1;
  }
  function _(e, t) {
    return (e === A()) == ("focus" === t);
  }
  function A() {
    try {
      return le.activeElement;
    } catch (e) {}
  }
  function N(e, t, n, r, a, i) {
    var o, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = undefined)), t))
        N(e, s, n, r, t[s], i);
      return e;
    }
    if (
      (null == r && null == a
        ? ((a = n), (r = n = undefined))
        : null == a &&
          ("string" == typeof n
            ? ((a = r), (r = undefined))
            : ((a = r), (r = n), (n = undefined))),
      !1 === a)
    )
      a = C;
    else if (!a) return e;
    return (
      1 === i &&
        ((o = a),
        ((a = function (e) {
          return Te().off(e), o.apply(this, arguments);
        }).guid = o.guid || (o.guid = Te.guid++))),
      e.each(function () {
        Te.event.add(this, t, a, r, n);
      })
    );
  }
  function k(e, a, i) {
    i
      ? (Be.set(e, a, !1),
        Te.event.add(e, a, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Be.get(this, a);
            if (1 & e.isTrigger && this[a]) {
              if (r.length)
                (Te.event.special[a] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = ce.call(arguments)),
                Be.set(this, a, r),
                (t = i(this, a)),
                this[a](),
                r !== (n = Be.get(this, a)) || t
                  ? Be.set(this, a, !1)
                  : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Be.set(this, a, {
                  value: Te.event.trigger(
                    Te.extend(r[0], Te.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : Be.get(e, a) === undefined && Te.event.add(e, a, D);
  }
  function I(e, t) {
    return (
      (u(e, "table") &&
        u(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        Te(e).children("tbody")[0]) ||
      e
    );
  }
  function j(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function L(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function E(e, t) {
    var n, r, a, i, o, s, l, u;
    if (1 === t.nodeType) {
      if (
        Be.hasData(e) &&
        ((i = Be.access(e)), (o = Be.set(t, i)), (u = i.events))
      )
        for (a in (delete o.handle, (o.events = {}), u))
          for (n = 0, r = u[a].length; n < r; n++) Te.event.add(t, a, u[a][n]);
      $e.hasData(e) &&
        ((s = $e.access(e)), (l = Te.extend({}, s)), $e.set(t, l));
    }
  }
  function R(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && tt.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function F(n, r, a, i) {
    r = fe.apply([], r);
    var e,
      t,
      o,
      s,
      l,
      u,
      c = 0,
      f = n.length,
      d = f - 1,
      h = r[0],
      p = we(h);
    if (p || (1 < f && "string" == typeof h && !be.checkClone && ht.test(h)))
      return n.each(function (e) {
        var t = n.eq(e);
        p && (r[0] = h.call(this, e, t.html())), F(t, r, a, i);
      });
    if (
      f &&
      ((t = (e = S(r, n[0].ownerDocument, !1, n, i)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || i)
    ) {
      for (s = (o = Te.map(w(e, "script"), j)).length; c < f; c++)
        (l = e),
          c !== d &&
            ((l = Te.clone(l, !0, !0)), s && Te.merge(o, w(l, "script"))),
          a.call(n[c], l, c);
      if (s)
        for (u = o[o.length - 1].ownerDocument, Te.map(o, L), c = 0; c < s; c++)
          (l = o[c]),
            rt.test(l.type || "") &&
              !Be.access(l, "globalEval") &&
              Te.contains(u, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? Te._evalUrl &&
                  !l.noModule &&
                  Te._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce"),
                  })
                : g(l.textContent.replace(pt, ""), l, u));
    }
    return n;
  }
  function P(e, t, n) {
    for (var r, a = t ? Te.filter(t, e) : e, i = 0; null != (r = a[i]); i++)
      n || 1 !== r.nodeType || Te.cleanData(w(r)),
        r.parentNode &&
          (n && Ye(r) && x(w(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  function H(e, t, n) {
    var r,
      a,
      i,
      o,
      s = e.style;
    return (
      (n = n || mt(e)) &&
        ("" !== (o = n.getPropertyValue(t) || n[t]) ||
          Ye(e) ||
          (o = Te.style(e, t)),
        !be.pixelBoxStyles() &&
          gt.test(o) &&
          vt.test(t) &&
          ((r = s.width),
          (a = s.minWidth),
          (i = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = o),
          (o = n.width),
          (s.width = r),
          (s.minWidth = a),
          (s.maxWidth = i))),
      o !== undefined ? o + "" : o
    );
  }
  function M(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function O(e) {
    for (var t = e[0].toUpperCase() + e.slice(1), n = yt.length; n--; )
      if ((e = yt[n] + t) in bt) return e;
  }
  function q(e) {
    var t = Te.cssProps[e] || wt[e];
    return t || (e in bt ? e : (wt[e] = O(e) || e));
  }
  function W(e, t, n) {
    var r = Ve.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function B(e, t, n, r, a, i) {
    var o = "width" === t ? 1 : 0,
      s = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; o < 4; o += 2)
      "margin" === n && (l += Te.css(e, n + Ge[o], !0, a)),
        r
          ? ("content" === n && (l -= Te.css(e, "padding" + Ge[o], !0, a)),
            "margin" !== n &&
              (l -= Te.css(e, "border" + Ge[o] + "Width", !0, a)))
          : ((l += Te.css(e, "padding" + Ge[o], !0, a)),
            "padding" !== n
              ? (l += Te.css(e, "border" + Ge[o] + "Width", !0, a))
              : (s += Te.css(e, "border" + Ge[o] + "Width", !0, a)));
    return (
      !r &&
        0 <= i &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - s - 0.5
            )
          ) || 0),
      l
    );
  }
  function $(e, t, n) {
    var r = mt(e),
      a =
        (!be.boxSizingReliable() || n) &&
        "border-box" === Te.css(e, "boxSizing", !1, r),
      i = a,
      o = H(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (gt.test(o)) {
      if (!n) return o;
      o = "auto";
    }
    return (
      ((!be.boxSizingReliable() && a) ||
        "auto" === o ||
        (!parseFloat(o) && "inline" === Te.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((a = "border-box" === Te.css(e, "boxSizing", !1, r)),
        (i = s in e) && (o = e[s])),
      (o = parseFloat(o) || 0) +
        B(e, t, n || (a ? "border" : "content"), i, r, o) +
        "px"
    );
  }
  function U(e, t, n, r, a) {
    return new U.prototype.init(e, t, n, r, a);
  }
  function z() {
    _t &&
      (!1 === le.hidden && T.requestAnimationFrame
        ? T.requestAnimationFrame(z)
        : T.setTimeout(z, Te.fx.interval),
      Te.fx.tick());
  }
  function X() {
    return (
      T.setTimeout(function () {
        Ct = undefined;
      }),
      (Ct = Date.now())
    );
  }
  function V(e, t) {
    var n,
      r = 0,
      a = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      a["margin" + (n = Ge[r])] = a["padding" + n] = e;
    return t && (a.opacity = a.width = e), a;
  }
  function G(e, t, n) {
    for (
      var r,
        a = (Z.tweeners[t] || []).concat(Z.tweeners["*"]),
        i = 0,
        o = a.length;
      i < o;
      i++
    )
      if ((r = a[i].call(n, t, e))) return r;
  }
  function J(e, t, n) {
    var r,
      a,
      i,
      o,
      s,
      l,
      u,
      c,
      f = "width" in t || "height" in t,
      d = this,
      h = {},
      p = e.style,
      g = e.nodeType && Ke(e),
      m = Be.get(e, "fxshow");
    for (r in (n.queue ||
      (null == (o = Te._queueHooks(e, "fx")).unqueued &&
        ((o.unqueued = 0),
        (s = o.empty.fire),
        (o.empty.fire = function () {
          o.unqueued || s();
        })),
      o.unqueued++,
      d.always(function () {
        d.always(function () {
          o.unqueued--, Te.queue(e, "fx").length || o.empty.fire();
        });
      })),
    t))
      if (((a = t[r]), kt.test(a))) {
        if (
          (delete t[r], (i = i || "toggle" === a), a === (g ? "hide" : "show"))
        ) {
          if ("show" !== a || !m || m[r] === undefined) continue;
          g = !0;
        }
        h[r] = (m && m[r]) || Te.style(e, r);
      }
    if ((l = !Te.isEmptyObject(t)) || !Te.isEmptyObject(h))
      for (r in (f &&
        1 === e.nodeType &&
        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
        null == (u = m && m.display) && (u = Be.get(e, "display")),
        "none" === (c = Te.css(e, "display")) &&
          (u
            ? (c = u)
            : (b([e], !0),
              (u = e.style.display || u),
              (c = Te.css(e, "display")),
              b([e]))),
        ("inline" === c || ("inline-block" === c && null != u)) &&
          "none" === Te.css(e, "float") &&
          (l ||
            (d.done(function () {
              p.display = u;
            }),
            null == u && ((c = p.display), (u = "none" === c ? "" : c))),
          (p.display = "inline-block"))),
      n.overflow &&
        ((p.overflow = "hidden"),
        d.always(function () {
          (p.overflow = n.overflow[0]),
            (p.overflowX = n.overflow[1]),
            (p.overflowY = n.overflow[2]);
        })),
      (l = !1),
      h))
        l ||
          (m
            ? "hidden" in m && (g = m.hidden)
            : (m = Be.access(e, "fxshow", { display: u })),
          i && (m.hidden = !g),
          g && b([e], !0),
          d.done(function () {
            for (r in (g || b([e]), Be.remove(e, "fxshow"), h))
              Te.style(e, r, h[r]);
          })),
          (l = G(g ? m[r] : 0, r, d)),
          r in m || ((m[r] = l.start), g && ((l.end = l.start), (l.start = 0)));
  }
  function Y(e, t) {
    var n, r, a, i, o;
    for (n in e)
      if (
        ((a = t[(r = h(n))]),
        (i = e[n]),
        Array.isArray(i) && ((a = i[1]), (i = e[n] = i[0])),
        n !== r && ((e[r] = i), delete e[n]),
        (o = Te.cssHooks[r]) && "expand" in o)
      )
        for (n in ((i = o.expand(i)), delete e[r], i))
          n in e || ((e[n] = i[n]), (t[n] = a));
      else t[r] = a;
  }
  function Z(i, e, t) {
    var n,
      o,
      r = 0,
      a = Z.prefilters.length,
      s = Te.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (
          var e = Ct || X(),
            t = Math.max(0, u.startTime + u.duration - e),
            n = 1 - (t / u.duration || 0),
            r = 0,
            a = u.tweens.length;
          r < a;
          r++
        )
          u.tweens[r].run(n);
        return (
          s.notifyWith(i, [u, n, t]),
          n < 1 && a
            ? t
            : (a || s.notifyWith(i, [u, 1, 0]), s.resolveWith(i, [u]), !1)
        );
      },
      u = s.promise({
        elem: i,
        props: Te.extend({}, e),
        opts: Te.extend(
          !0,
          { specialEasing: {}, easing: Te.easing._default },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: Ct || X(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = Te.Tween(
            i,
            u.opts,
            e,
            t,
            u.opts.specialEasing[e] || u.opts.easing
          );
          return u.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? u.tweens.length : 0;
          if (o) return this;
          for (o = !0; t < n; t++) u.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(i, [u, 1, 0]), s.resolveWith(i, [u, e]))
              : s.rejectWith(i, [u, e]),
            this
          );
        },
      }),
      c = u.props;
    for (Y(c, u.opts.specialEasing); r < a; r++)
      if ((n = Z.prefilters[r].call(u, i, c, u.opts)))
        return (
          we(n.stop) &&
            (Te._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      Te.map(c, G, u),
      we(u.opts.start) && u.opts.start.call(i, u),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always),
      Te.fx.timer(Te.extend(l, { elem: i, anim: u, queue: u.opts.queue })),
      u
    );
  }
  function K(e) {
    return (e.match(Fe) || []).join(" ");
  }
  function Q(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function ee(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(Fe)) || [];
  }
  function te(n, e, r, a) {
    var t;
    if (Array.isArray(e))
      Te.each(e, function (e, t) {
        r || Wt.test(n)
          ? a(n, t)
          : te(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              a
            );
      });
    else if (r || "object" !== m(e)) a(n, e);
    else for (t in e) te(n + "[" + t + "]", e[t], r, a);
  }
  function ne(i) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        a = e.toLowerCase().match(Fe) || [];
      if (we(t))
        for (; (n = a[r++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (i[n] = i[n] || []).unshift(t))
            : (i[n] = i[n] || []).push(t);
    };
  }
  function re(t, a, i, o) {
    function s(e) {
      var r;
      return (
        (l[e] = !0),
        Te.each(t[e] || [], function (e, t) {
          var n = t(a, i, o);
          return "string" != typeof n || u || l[n]
            ? u
              ? !(r = n)
              : void 0
            : (a.dataTypes.unshift(n), s(n), !1);
        }),
        r
      );
    }
    var l = {},
      u = t === Qt;
    return s(a.dataTypes[0]) || (!l["*"] && s("*"));
  }
  function ae(e, t) {
    var n,
      r,
      a = Te.ajaxSettings.flatOptions || {};
    for (n in t) t[n] !== undefined && ((a[n] ? e : r || (r = {}))[n] = t[n]);
    return r && Te.extend(!0, e, r), e;
  }
  function ie(e, t, n) {
    for (var r, a, i, o, s = e.contents, l = e.dataTypes; "*" === l[0]; )
      l.shift(),
        r === undefined &&
          (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (a in s)
        if (s[a] && s[a].test(r)) {
          l.unshift(a);
          break;
        }
    if (l[0] in n) i = l[0];
    else {
      for (a in n) {
        if (!l[0] || e.converters[a + " " + l[0]]) {
          i = a;
          break;
        }
        o || (o = a);
      }
      i = i || o;
    }
    if (i) return i !== l[0] && l.unshift(i), n[i];
  }
  function oe(e, t, n, r) {
    var a,
      i,
      o,
      s,
      l,
      u = {},
      c = e.dataTypes.slice();
    if (c[1]) for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
    for (i = c.shift(); i; )
      if (
        (e.responseFields[i] && (n[e.responseFields[i]] = t),
        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (l = i),
        (i = c.shift()))
      )
        if ("*" === i) i = l;
        else if ("*" !== l && l !== i) {
          if (!(o = u[l + " " + i] || u["* " + i]))
            for (a in u)
              if (
                (s = a.split(" "))[1] === i &&
                (o = u[l + " " + s[0]] || u["* " + s[0]])
              ) {
                !0 === o
                  ? (o = u[a])
                  : !0 !== u[a] && ((i = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== o)
            if (o && e["throws"]) t = o(t);
            else
              try {
                t = o(t);
              } catch (f) {
                return {
                  state: "parsererror",
                  error: o ? f : "No conversion from " + l + " to " + i,
                };
              }
        }
    return { state: "success", data: t };
  }
  var se = [],
    le = T.document,
    ue = Object.getPrototypeOf,
    ce = se.slice,
    fe = se.concat,
    de = se.push,
    he = se.indexOf,
    pe = {},
    ge = pe.toString,
    me = pe.hasOwnProperty,
    ve = me.toString,
    ye = ve.call(Object),
    be = {},
    we = function we(e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    xe = function xe(e) {
      return null != e && e === e.window;
    },
    Se = { type: !0, src: !0, nonce: !0, noModule: !0 },
    De = "3.4.1",
    Te = function (e, t) {
      return new Te.fn.init(e, t);
    },
    Ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (Te.fn = Te.prototype =
    {
      jquery: De,
      constructor: Te,
      length: 0,
      toArray: function () {
        return ce.call(this);
      },
      get: function (e) {
        return null == e
          ? ce.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = Te.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return Te.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          Te.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(ce.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: de,
      sort: se.sort,
      splice: se.splice,
    }),
    (Te.extend = Te.fn.extend =
      function (e) {
        var t,
          n,
          r,
          a,
          i,
          o,
          s = e || {},
          l = 1,
          u = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[l] || {}), l++),
            "object" == typeof s || we(s) || (s = {}),
            l === u && ((s = this), l--);
          l < u;
          l++
        )
          if (null != (t = arguments[l]))
            for (n in t)
              (a = t[n]),
                "__proto__" !== n &&
                  s !== a &&
                  (c && a && (Te.isPlainObject(a) || (i = Array.isArray(a)))
                    ? ((r = s[n]),
                      (o =
                        i && !Array.isArray(r)
                          ? []
                          : i || Te.isPlainObject(r)
                          ? r
                          : {}),
                      (i = !1),
                      (s[n] = Te.extend(c, o, a)))
                    : a !== undefined && (s[n] = a));
        return s;
      }),
    Te.extend({
      expando: "jQuery" + (De + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== ge.call(e)) &&
          (!(t = ue(e)) ||
            ("function" ==
              typeof (n = me.call(t, "constructor") && t.constructor) &&
              ve.call(n) === ye))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t) {
        g(e, { nonce: t && t.nonce });
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (s(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(Ce, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (s(Object(e))
              ? Te.merge(n, "string" == typeof e ? [e] : e)
              : de.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : he.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, a = e.length; r < n; r++) e[a++] = t[r];
        return (e.length = a), e;
      },
      grep: function (e, t, n) {
        for (var r = [], a = 0, i = e.length, o = !n; a < i; a++)
          !t(e[a], a) !== o && r.push(e[a]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          a,
          i = 0,
          o = [];
        if (s(e))
          for (r = e.length; i < r; i++)
            null != (a = t(e[i], i, n)) && o.push(a);
        else for (i in e) null != (a = t(e[i], i, n)) && o.push(a);
        return fe.apply([], o);
      },
      guid: 1,
      support: be,
    }),
    "function" == typeof Symbol &&
      (Te.fn[Symbol.iterator] = se[Symbol.iterator]),
    Te.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        pe["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var _e = (function (n) {
    function w(e, t, n, r) {
      var a,
        i,
        o,
        s,
        l,
        u,
        c,
        f = t && t.ownerDocument,
        d = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== d && 9 !== d && 11 !== d))
      )
        return n;
      if (
        !r &&
        ((t ? t.ownerDocument || t : W) !== E && L(t), (t = t || E), F)
      ) {
        if (11 !== d && (l = be.exec(e)))
          if ((a = l[1])) {
            if (9 === d) {
              if (!(o = t.getElementById(a))) return n;
              if (o.id === a) return n.push(o), n;
            } else if (f && (o = f.getElementById(a)) && O(t, o) && o.id === a)
              return n.push(o), n;
          } else {
            if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
            if (
              (a = l[3]) &&
              S.getElementsByClassName &&
              t.getElementsByClassName
            )
              return Q.apply(n, t.getElementsByClassName(a)), n;
          }
        if (
          S.qsa &&
          !V[e + " "] &&
          (!P || !P.test(e)) &&
          (1 !== d || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((c = e), (f = t), 1 === d && fe.test(e))) {
            for (
              (s = t.getAttribute("id"))
                ? (s = s.replace(De, Te))
                : t.setAttribute("id", (s = q)),
                i = (u = _(e)).length;
              i--;

            )
              u[i] = "#" + s + " " + g(u[i]);
            (c = u.join(",")), (f = (we.test(e) && p(t.parentNode)) || t);
          }
          try {
            return Q.apply(n, f.querySelectorAll(c)), n;
          } catch (h) {
            V(e, !0);
          } finally {
            s === q && t.removeAttribute("id");
          }
        }
      }
      return N(e.replace(le, "$1"), t, n, r);
    }
    function e() {
      function n(e, t) {
        return (
          r.push(e + " ") > D.cacheLength && delete n[r.shift()],
          (n[e + " "] = t)
        );
      }
      var r = [];
      return n;
    }
    function l(e) {
      return (e[q] = !0), e;
    }
    function a(e) {
      var t = E.createElement("fieldset");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function t(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) D.attrHandle[n[r]] = t;
    }
    function u(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function r(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function i(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function o(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && _e(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function s(o) {
      return l(function (i) {
        return (
          (i = +i),
          l(function (e, t) {
            for (var n, r = o([], e.length, i), a = r.length; a--; )
              e[(n = r[a])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function p(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function c() {}
    function g(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function f(s, e, t) {
      var l = e.dir,
        u = e.next,
        c = u || l,
        f = t && "parentNode" === c,
        d = $++;
      return e.first
        ? function (e, t, n) {
            for (; (e = e[l]); ) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              a,
              i,
              o = [B, d];
            if (n) {
              for (; (e = e[l]); )
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              for (; (e = e[l]); )
                if (1 === e.nodeType || f)
                  if (
                    ((a =
                      (i = e[q] || (e[q] = {}))[e.uniqueID] ||
                      (i[e.uniqueID] = {})),
                    u && u === e.nodeName.toLowerCase())
                  )
                    e = e[l] || e;
                  else {
                    if ((r = a[c]) && r[0] === B && r[1] === d)
                      return (o[2] = r[2]);
                    if (((a[c] = o)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function d(a) {
      return 1 < a.length
        ? function (e, t, n) {
            for (var r = a.length; r--; ) if (!a[r](e, t, n)) return !1;
            return !0;
          }
        : a[0];
    }
    function y(e, t, n) {
      for (var r = 0, a = t.length; r < a; r++) w(e, t[r], n);
      return n;
    }
    function x(e, t, n, r, a) {
      for (var i, o = [], s = 0, l = e.length, u = null != t; s < l; s++)
        (i = e[s]) && ((n && !n(i, r, a)) || (o.push(i), u && t.push(s)));
      return o;
    }
    function b(h, p, g, m, v, e) {
      return (
        m && !m[q] && (m = b(m)),
        v && !v[q] && (v = b(v, e)),
        l(function (e, t, n, r) {
          var a,
            i,
            o,
            s = [],
            l = [],
            u = t.length,
            c = e || y(p || "*", n.nodeType ? [n] : n, []),
            f = !h || (!e && p) ? c : x(c, s, h, n, r),
            d = g ? (v || (e ? h : u || m) ? [] : t) : f;
          if ((g && g(f, d, n, r), m))
            for (a = x(d, l), m(a, [], n, r), i = a.length; i--; )
              (o = a[i]) && (d[l[i]] = !(f[l[i]] = o));
          if (e) {
            if (v || h) {
              if (v) {
                for (a = [], i = d.length; i--; )
                  (o = d[i]) && a.push((f[i] = o));
                v(null, (d = []), a, r);
              }
              for (i = d.length; i--; )
                (o = d[i]) &&
                  -1 < (a = v ? te(e, o) : s[i]) &&
                  (e[a] = !(t[a] = o));
            }
          } else (d = x(d === t ? d.splice(u, d.length) : d)), v ? v(null, t, d, r) : Q.apply(t, d);
        })
      );
    }
    function h(e) {
      for (
        var a,
          t,
          n,
          r = e.length,
          i = D.relative[e[0].type],
          o = i || D.relative[" "],
          s = i ? 1 : 0,
          l = f(
            function (e) {
              return e === a;
            },
            o,
            !0
          ),
          u = f(
            function (e) {
              return -1 < te(a, e);
            },
            o,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!i && (n || t !== k)) ||
                ((a = t).nodeType ? l(e, t, n) : u(e, t, n));
              return (a = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = D.relative[e[s].type])) c = [f(d(c), t)];
        else {
          if ((t = D.filter[e[s].type].apply(null, e[s].matches))[q]) {
            for (n = ++s; n < r && !D.relative[e[n].type]; n++);
            return b(
              1 < s && d(c),
              1 < s &&
                g(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(le, "$1"),
              t,
              s < n && h(e.slice(s, n)),
              n < r && h((e = e.slice(n))),
              n < r && g(e)
            );
          }
          c.push(t);
        }
      return d(c);
    }
    function m(m, v) {
      var y = 0 < v.length,
        b = 0 < m.length,
        e = function (e, t, n, r, a) {
          var i,
            o,
            s,
            l = 0,
            u = "0",
            c = e && [],
            f = [],
            d = k,
            h = e || (b && D.find.TAG("*", a)),
            p = (B += null == d ? 1 : Math.random() || 0.1),
            g = h.length;
          for (
            a && (k = t === E || t || a);
            u !== g && null != (i = h[u]);
            u++
          ) {
            if (b && i) {
              for (
                o = 0, t || i.ownerDocument === E || (L(i), (n = !F));
                (s = m[o++]);

              )
                if (s(i, t || E, n)) {
                  r.push(i);
                  break;
                }
              a && (B = p);
            }
            y && ((i = !s && i) && l--, e && c.push(i));
          }
          if (((l += u), y && u !== l)) {
            for (o = 0; (s = v[o++]); ) s(c, f, t, n);
            if (e) {
              if (0 < l) for (; u--; ) c[u] || f[u] || (f[u] = Z.call(r));
              f = x(f);
            }
            Q.apply(r, f),
              a && !e && 0 < f.length && 1 < l + v.length && w.uniqueSort(r);
          }
          return a && ((B = p), (k = d)), c;
        };
      return y ? l(e) : e;
    }
    var v,
      S,
      D,
      T,
      C,
      _,
      A,
      N,
      k,
      I,
      j,
      L,
      E,
      R,
      F,
      P,
      H,
      M,
      O,
      q = "sizzle" + 1 * new Date(),
      W = n.document,
      B = 0,
      $ = 0,
      U = e(),
      z = e(),
      X = e(),
      V = e(),
      G = function (e, t) {
        return e === t && (j = !0), 0;
      },
      J = {}.hasOwnProperty,
      Y = [],
      Z = Y.pop,
      K = Y.push,
      Q = Y.push,
      ee = Y.slice,
      te = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      ne =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      re = "[\\x20\\t\\r\\n\\f]",
      ae = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      ie =
        "\\[" +
        re +
        "*(" +
        ae +
        ")(?:" +
        re +
        "*([*^$|!~]?=)" +
        re +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        ae +
        "))|)" +
        re +
        "*\\]",
      oe =
        ":(" +
        ae +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        ie +
        ")*)|.*)\\)|)",
      se = new RegExp(re + "+", "g"),
      le = new RegExp(
        "^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$",
        "g"
      ),
      ue = new RegExp("^" + re + "*," + re + "*"),
      ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
      fe = new RegExp(re + "|>"),
      de = new RegExp(oe),
      he = new RegExp("^" + ae + "$"),
      pe = {
        ID: new RegExp("^#(" + ae + ")"),
        CLASS: new RegExp("^\\.(" + ae + ")"),
        TAG: new RegExp("^(" + ae + "|[*])"),
        ATTR: new RegExp("^" + ie),
        PSEUDO: new RegExp("^" + oe),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            re +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            re +
            "*(?:([+-]|)" +
            re +
            "*(\\d+)|))" +
            re +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + ne + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            re +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            re +
            "*((?:-\\d)?\\d*)" +
            re +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      ge = /HTML$/i,
      me = /^(?:input|select|textarea|button)$/i,
      ve = /^h\d$/i,
      ye = /^[^{]+\{\s*\[native \w/,
      be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      we = /[+~]/,
      xe = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
      Se = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      De = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      Te = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      Ce = function () {
        L();
      },
      _e = f(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      Q.apply((Y = ee.call(W.childNodes)), W.childNodes),
        Y[W.childNodes.length].nodeType;
    } catch (Ae) {
      Q = {
        apply: Y.length
          ? function (e, t) {
              K.apply(e, ee.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    for (v in ((S = w.support = {}),
    (C = w.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !ge.test(t || (n && n.nodeName) || "HTML");
      }),
    (L = w.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : W;
        return (
          r !== E &&
            9 === r.nodeType &&
            r.documentElement &&
            ((R = (E = r).documentElement),
            (F = !C(E)),
            W !== E &&
              (n = E.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", Ce, !1)
                : n.attachEvent && n.attachEvent("onunload", Ce)),
            (S.attributes = a(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (S.getElementsByTagName = a(function (e) {
              return (
                e.appendChild(E.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (S.getElementsByClassName = ye.test(E.getElementsByClassName)),
            (S.getById = a(function (e) {
              return (
                (R.appendChild(e).id = q),
                !E.getElementsByName || !E.getElementsByName(q).length
              );
            })),
            S.getById
              ? ((D.filter.ID = function (e) {
                  var t = e.replace(xe, Se);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (D.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && F) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((D.filter.ID = function (e) {
                  var n = e.replace(xe, Se);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (D.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && F) {
                    var n,
                      r,
                      a,
                      i = t.getElementById(e);
                    if (i) {
                      if ((n = i.getAttributeNode("id")) && n.value === e)
                        return [i];
                      for (a = t.getElementsByName(e), r = 0; (i = a[r++]); )
                        if ((n = i.getAttributeNode("id")) && n.value === e)
                          return [i];
                    }
                    return [];
                  }
                })),
            (D.find.TAG = S.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : S.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    a = 0,
                    i = t.getElementsByTagName(e);
                  if ("*" !== e) return i;
                  for (; (n = i[a++]); ) 1 === n.nodeType && r.push(n);
                  return r;
                }),
            (D.find.CLASS =
              S.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && F)
                  return t.getElementsByClassName(e);
              }),
            (H = []),
            (P = []),
            (S.qsa = ye.test(E.querySelectorAll)) &&
              (a(function (e) {
                (R.appendChild(e).innerHTML =
                  "<a id='" +
                  q +
                  "'></a><select id='" +
                  q +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    P.push("[*^$]=" + re + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    P.push("\\[" + re + "*(?:value|" + ne + ")"),
                  e.querySelectorAll("[id~=" + q + "-]").length || P.push("~="),
                  e.querySelectorAll(":checked").length || P.push(":checked"),
                  e.querySelectorAll("a#" + q + "+*").length ||
                    P.push(".#.+[+~]");
              }),
              a(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = E.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    P.push("name" + re + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    P.push(":enabled", ":disabled"),
                  (R.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    P.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  P.push(",.*:");
              })),
            (S.matchesSelector = ye.test(
              (M =
                R.matches ||
                R.webkitMatchesSelector ||
                R.mozMatchesSelector ||
                R.oMatchesSelector ||
                R.msMatchesSelector)
            )) &&
              a(function (e) {
                (S.disconnectedMatch = M.call(e, "*")),
                  M.call(e, "[s!='']:x"),
                  H.push("!=", oe);
              }),
            (P = P.length && new RegExp(P.join("|"))),
            (H = H.length && new RegExp(H.join("|"))),
            (t = ye.test(R.compareDocumentPosition)),
            (O =
              t || ye.test(R.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (G = t
              ? function (e, t) {
                  if (e === t) return (j = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!S.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === E || (e.ownerDocument === W && O(W, e))
                        ? -1
                        : t === E || (t.ownerDocument === W && O(W, t))
                        ? 1
                        : I
                        ? te(I, e) - te(I, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (j = !0), 0;
                  var n,
                    r = 0,
                    a = e.parentNode,
                    i = t.parentNode,
                    o = [e],
                    s = [t];
                  if (!a || !i)
                    return e === E
                      ? -1
                      : t === E
                      ? 1
                      : a
                      ? -1
                      : i
                      ? 1
                      : I
                      ? te(I, e) - te(I, t)
                      : 0;
                  if (a === i) return u(e, t);
                  for (n = e; (n = n.parentNode); ) o.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; o[r] === s[r]; ) r++;
                  return r
                    ? u(o[r], s[r])
                    : o[r] === W
                    ? -1
                    : s[r] === W
                    ? 1
                    : 0;
                })),
          E
        );
      }),
    (w.matches = function (e, t) {
      return w(e, null, null, t);
    }),
    (w.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== E && L(e),
        S.matchesSelector &&
          F &&
          !V[t + " "] &&
          (!H || !H.test(t)) &&
          (!P || !P.test(t)))
      )
        try {
          var n = M.call(e, t);
          if (
            n ||
            S.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (Ae) {
          V(t, !0);
        }
      return 0 < w(t, E, null, [e]).length;
    }),
    (w.contains = function (e, t) {
      return (e.ownerDocument || e) !== E && L(e), O(e, t);
    }),
    (w.attr = function (e, t) {
      (e.ownerDocument || e) !== E && L(e);
      var n = D.attrHandle[t.toLowerCase()],
        r =
          n && J.call(D.attrHandle, t.toLowerCase()) ? n(e, t, !F) : undefined;
      return r !== undefined
        ? r
        : S.attributes || !F
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (w.escape = function (e) {
      return (e + "").replace(De, Te);
    }),
    (w.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (w.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        a = 0;
      if (
        ((j = !S.detectDuplicates),
        (I = !S.sortStable && e.slice(0)),
        e.sort(G),
        j)
      ) {
        for (; (t = e[a++]); ) t === e[a] && (r = n.push(a));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (I = null), e;
    }),
    (T = w.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          a = e.nodeType;
        if (a) {
          if (1 === a || 9 === a || 11 === a) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
          } else if (3 === a || 4 === a) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += T(t);
        return n;
      }),
    ((D = w.selectors =
      {
        cacheLength: 50,
        createPseudo: l,
        match: pe,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(xe, Se)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Se)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || w.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && w.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return pe.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    de.test(n) &&
                    (t = _(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(xe, Se).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = U[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) &&
                U(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, a) {
            return function (e) {
              var t = w.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === a
                      : "!=" === r
                      ? t !== a
                      : "^=" === r
                      ? a && 0 === t.indexOf(a)
                      : "*=" === r
                      ? a && -1 < t.indexOf(a)
                      : "$=" === r
                      ? a && t.slice(-a.length) === a
                      : "~=" === r
                      ? -1 < (" " + t.replace(se, " ") + " ").indexOf(a)
                      : "|=" === r &&
                        (t === a || t.slice(0, a.length + 1) === a + "-"));
            };
          },
          CHILD: function (p, e, t, g, m) {
            var v = "nth" !== p.slice(0, 3),
              y = "last" !== p.slice(-4),
              b = "of-type" === e;
            return 1 === g && 0 === m
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    a,
                    i,
                    o,
                    s,
                    l,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = b && e.nodeName.toLowerCase(),
                    d = !n && !b,
                    h = !1;
                  if (c) {
                    if (v) {
                      for (; u; ) {
                        for (o = e; (o = o[u]); )
                          if (
                            b
                              ? o.nodeName.toLowerCase() === f
                              : 1 === o.nodeType
                          )
                            return !1;
                        l = u = "only" === p && !l && "nextSibling";
                      }
                      return !0;
                    }
                    if (((l = [y ? c.firstChild : c.lastChild]), y && d)) {
                      for (
                        h =
                          (s =
                            (r =
                              (a =
                                (i = (o = c)[q] || (o[q] = {}))[o.uniqueID] ||
                                (i[o.uniqueID] = {}))[p] || [])[0] === B &&
                            r[1]) && r[2],
                          o = s && c.childNodes[s];
                        (o = (++s && o && o[u]) || (h = s = 0) || l.pop());

                      )
                        if (1 === o.nodeType && ++h && o === e) {
                          a[p] = [B, s, h];
                          break;
                        }
                    } else if (
                      (d &&
                        (h = s =
                          (r =
                            (a =
                              (i = (o = e)[q] || (o[q] = {}))[o.uniqueID] ||
                              (i[o.uniqueID] = {}))[p] || [])[0] === B && r[1]),
                      !1 === h)
                    )
                      for (
                        ;
                        (o = (++s && o && o[u]) || (h = s = 0) || l.pop()) &&
                        ((b
                          ? o.nodeName.toLowerCase() !== f
                          : 1 !== o.nodeType) ||
                          !++h ||
                          (d &&
                            ((a =
                              (i = o[q] || (o[q] = {}))[o.uniqueID] ||
                              (i[o.uniqueID] = {}))[p] = [B, h]),
                          o !== e));

                      );
                    return (h -= m) === g || (h % g == 0 && 0 <= h / g);
                  }
                };
          },
          PSEUDO: function (e, i) {
            var t,
              o =
                D.pseudos[e] ||
                D.setFilters[e.toLowerCase()] ||
                w.error("unsupported pseudo: " + e);
            return o[q]
              ? o(i)
              : 1 < o.length
              ? ((t = [e, e, "", i]),
                D.setFilters.hasOwnProperty(e.toLowerCase())
                  ? l(function (e, t) {
                      for (var n, r = o(e, i), a = r.length; a--; )
                        e[(n = te(e, r[a]))] = !(t[n] = r[a]);
                    })
                  : function (e) {
                      return o(e, 0, t);
                    })
              : o;
          },
        },
        pseudos: {
          not: l(function (e) {
            var r = [],
              a = [],
              s = A(e.replace(le, "$1"));
            return s[q]
              ? l(function (e, t, n, r) {
                  for (var a, i = s(e, null, r, []), o = e.length; o--; )
                    (a = i[o]) && (e[o] = !(t[o] = a));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, a), (r[0] = null), !a.pop();
                };
          }),
          has: l(function (t) {
            return function (e) {
              return 0 < w(t, e).length;
            };
          }),
          contains: l(function (t) {
            return (
              (t = t.replace(xe, Se)),
              function (e) {
                return -1 < (e.textContent || T(e)).indexOf(t);
              }
            );
          }),
          lang: l(function (n) {
            return (
              he.test(n || "") || w.error("unsupported lang: " + n),
              (n = n.replace(xe, Se).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = F
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === R;
          },
          focus: function (e) {
            return (
              e === E.activeElement &&
              (!E.hasFocus || E.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: o(!1),
          disabled: o(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !D.pseudos.empty(e);
          },
          header: function (e) {
            return ve.test(e.nodeName);
          },
          input: function (e) {
            return me.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: s(function () {
            return [0];
          }),
          last: s(function (e, t) {
            return [t - 1];
          }),
          eq: s(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: s(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: s(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: s(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: s(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = D.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      D.pseudos[v] = r(v);
    for (v in { submit: !0, reset: !0 }) D.pseudos[v] = i(v);
    return (
      (c.prototype = D.filters = D.pseudos),
      (D.setFilters = new c()),
      (_ = w.tokenize =
        function (e, t) {
          var n,
            r,
            a,
            i,
            o,
            s,
            l,
            u = z[e + " "];
          if (u) return t ? 0 : u.slice(0);
          for (o = e, s = [], l = D.preFilter; o; ) {
            for (i in ((n && !(r = ue.exec(o))) ||
              (r && (o = o.slice(r[0].length) || o), s.push((a = []))),
            (n = !1),
            (r = ce.exec(o)) &&
              ((n = r.shift()),
              a.push({ value: n, type: r[0].replace(le, " ") }),
              (o = o.slice(n.length))),
            D.filter))
              !(r = pe[i].exec(o)) ||
                (l[i] && !(r = l[i](r))) ||
                ((n = r.shift()),
                a.push({ value: n, type: i, matches: r }),
                (o = o.slice(n.length)));
            if (!n) break;
          }
          return t ? o.length : o ? w.error(e) : z(e, s).slice(0);
        }),
      (A = w.compile =
        function (e, t) {
          var n,
            r = [],
            a = [],
            i = X[e + " "];
          if (!i) {
            for (t || (t = _(e)), n = t.length; n--; )
              (i = h(t[n]))[q] ? r.push(i) : a.push(i);
            (i = X(e, m(a, r))).selector = e;
          }
          return i;
        }),
      (N = w.select =
        function (e, t, n, r) {
          var a,
            i,
            o,
            s,
            l,
            u = "function" == typeof e && e,
            c = !r && _((e = u.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (i = c[0] = c[0].slice(0)).length &&
              "ID" === (o = i[0]).type &&
              9 === t.nodeType &&
              F &&
              D.relative[i[1].type]
            ) {
              if (!(t = (D.find.ID(o.matches[0].replace(xe, Se), t) || [])[0]))
                return n;
              u && (t = t.parentNode), (e = e.slice(i.shift().value.length));
            }
            for (
              a = pe.needsContext.test(e) ? 0 : i.length;
              a-- && ((o = i[a]), !D.relative[(s = o.type)]);

            )
              if (
                (l = D.find[s]) &&
                (r = l(
                  o.matches[0].replace(xe, Se),
                  (we.test(i[0].type) && p(t.parentNode)) || t
                ))
              ) {
                if ((i.splice(a, 1), !(e = r.length && g(i))))
                  return Q.apply(n, r), n;
                break;
              }
          }
          return (
            (u || A(e, c))(
              r,
              t,
              !F,
              n,
              !t || (we.test(e) && p(t.parentNode)) || t
            ),
            n
          );
        }),
      (S.sortStable = q.split("").sort(G).join("") === q),
      (S.detectDuplicates = !!j),
      L(),
      (S.sortDetached = a(function (e) {
        return 1 & e.compareDocumentPosition(E.createElement("fieldset"));
      })),
      a(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        t("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (S.attributes &&
        a(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        t("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      a(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        t(ne, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      w
    );
  })(T);
  (Te.find = _e),
    (Te.expr = _e.selectors),
    (Te.expr[":"] = Te.expr.pseudos),
    (Te.uniqueSort = Te.unique = _e.uniqueSort),
    (Te.text = _e.getText),
    (Te.isXMLDoc = _e.isXML),
    (Te.contains = _e.contains),
    (Te.escapeSelector = _e.escape);
  var Ae = function (e, t, n) {
      for (var r = [], a = n !== undefined; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (a && Te(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    Ne = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    ke = Te.expr.match.needsContext,
    Ie = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  (Te.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? Te.find.matchesSelector(r, e)
          ? [r]
          : []
        : Te.find.matches(
            e,
            Te.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    Te.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          a = this;
        if ("string" != typeof e)
          return this.pushStack(
            Te(e).filter(function () {
              for (t = 0; t < r; t++) if (Te.contains(a[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) Te.find(e, a[t], n);
        return 1 < r ? Te.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(t(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(t(this, e || [], !0));
      },
      is: function (e) {
        return !!t(
          this,
          "string" == typeof e && ke.test(e) ? Te(e) : e || [],
          !1
        ).length;
      },
    });
  var je,
    Le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((Te.fn.init = function (e, t, n) {
    var r, a;
    if (!e) return this;
    if (((n = n || je), "string" != typeof e))
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : we(e)
        ? n.ready !== undefined
          ? n.ready(e)
          : e(Te)
        : Te.makeArray(e, this);
    if (
      !(r =
        "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : Le.exec(e)) ||
      (!r[1] && t)
    )
      return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (r[1]) {
      if (
        ((t = t instanceof Te ? t[0] : t),
        Te.merge(
          this,
          Te.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : le, !0)
        ),
        Ie.test(r[1]) && Te.isPlainObject(t))
      )
        for (r in t) we(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
      return this;
    }
    return (
      (a = le.getElementById(r[2])) && ((this[0] = a), (this.length = 1)), this
    );
  }).prototype = Te.fn),
    (je = Te(le));
  var Ee = /^(?:parents|prev(?:Until|All))/,
    Re = { children: !0, contents: !0, next: !0, prev: !0 };
  Te.fn.extend({
    has: function (e) {
      var t = Te(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (Te.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        a = this.length,
        i = [],
        o = "string" != typeof e && Te(e);
      if (!ke.test(e))
        for (; r < a; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (o
                ? -1 < o.index(n)
                : 1 === n.nodeType && Te.find.matchesSelector(n, e))
            ) {
              i.push(n);
              break;
            }
      return this.pushStack(1 < i.length ? Te.uniqueSort(i) : i);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? he.call(Te(e), this[0])
          : he.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(Te.uniqueSort(Te.merge(this.get(), Te(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    Te.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return Ae(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return Ae(e, "parentNode", n);
        },
        next: function (e) {
          return n(e, "nextSibling");
        },
        prev: function (e) {
          return n(e, "previousSibling");
        },
        nextAll: function (e) {
          return Ae(e, "nextSibling");
        },
        prevAll: function (e) {
          return Ae(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return Ae(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return Ae(e, "previousSibling", n);
        },
        siblings: function (e) {
          return Ne((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Ne(e.firstChild);
        },
        contents: function (e) {
          return "undefined" != typeof e.contentDocument
            ? e.contentDocument
            : (u(e, "template") && (e = e.content || e),
              Te.merge([], e.childNodes));
        },
      },
      function (r, a) {
        Te.fn[r] = function (e, t) {
          var n = Te.map(this, a, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = Te.filter(t, n)),
            1 < this.length &&
              (Re[r] || Te.uniqueSort(n), Ee.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var Fe = /[^\x20\t\r\n\f]+/g;
  (Te.Callbacks = function (r) {
    r = "string" == typeof r ? c(r) : Te.extend({}, r);
    var a,
      e,
      t,
      n,
      i = [],
      o = [],
      s = -1,
      l = function () {
        for (n = n || r.once, t = a = !0; o.length; s = -1)
          for (e = o.shift(); ++s < i.length; )
            !1 === i[s].apply(e[0], e[1]) &&
              r.stopOnFalse &&
              ((s = i.length), (e = !1));
        r.memory || (e = !1), (a = !1), n && (i = e ? [] : "");
      },
      u = {
        add: function () {
          return (
            i &&
              (e && !a && ((s = i.length - 1), o.push(e)),
              (function n(e) {
                Te.each(e, function (e, t) {
                  we(t)
                    ? (r.unique && u.has(t)) || i.push(t)
                    : t && t.length && "string" !== m(t) && n(t);
                });
              })(arguments),
              e && !a && l()),
            this
          );
        },
        remove: function () {
          return (
            Te.each(arguments, function (e, t) {
              for (var n; -1 < (n = Te.inArray(t, i, n)); )
                i.splice(n, 1), n <= s && s--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < Te.inArray(e, i) : 0 < i.length;
        },
        empty: function () {
          return i && (i = []), this;
        },
        disable: function () {
          return (n = o = []), (i = e = ""), this;
        },
        disabled: function () {
          return !i;
        },
        lock: function () {
          return (n = o = []), e || a || (i = e = ""), this;
        },
        locked: function () {
          return !!n;
        },
        fireWith: function (e, t) {
          return (
            n ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              o.push(t),
              a || l()),
            this
          );
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!t;
        },
      };
    return u;
  }),
    Te.extend({
      Deferred: function (e) {
        var i = [
            [
              "notify",
              "progress",
              Te.Callbacks("memory"),
              Te.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              Te.Callbacks("once memory"),
              Te.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              Te.Callbacks("once memory"),
              Te.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          a = "pending",
          o = {
            state: function () {
              return a;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return o.then(null, e);
            },
            pipe: function () {
              var a = arguments;
              return Te.Deferred(function (r) {
                Te.each(i, function (e, t) {
                  var n = we(a[t[4]]) && a[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && we(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (a = null);
              }).promise();
            },
            then: function (t, n, r) {
              function u(i, o, s, l) {
                return function () {
                  var n = this,
                    r = arguments,
                    t = function () {
                      var e, t;
                      if (!(i < c)) {
                        if ((e = s.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          we(t)
                            ? l
                              ? t.call(e, u(c, o, f, l), u(c, o, d, l))
                              : (c++,
                                t.call(
                                  e,
                                  u(c, o, f, l),
                                  u(c, o, d, l),
                                  u(c, o, f, o.notifyWith)
                                ))
                            : (s !== f && ((n = undefined), (r = [e])),
                              (l || o.resolveWith)(n, r));
                      }
                    },
                    a = l
                      ? t
                      : function () {
                          try {
                            t();
                          } catch (e) {
                            Te.Deferred.exceptionHook &&
                              Te.Deferred.exceptionHook(e, a.stackTrace),
                              c <= i + 1 &&
                                (s !== d && ((n = undefined), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? a()
                    : (Te.Deferred.getStackHook &&
                        (a.stackTrace = Te.Deferred.getStackHook()),
                      T.setTimeout(a));
                };
              }
              var c = 0;
              return Te.Deferred(function (e) {
                i[0][3].add(u(0, e, we(r) ? r : f, e.notifyWith)),
                  i[1][3].add(u(0, e, we(t) ? t : f)),
                  i[2][3].add(u(0, e, we(n) ? n : d));
              }).promise();
            },
            promise: function (e) {
              return null != e ? Te.extend(e, o) : o;
            },
          },
          s = {};
        return (
          Te.each(i, function (e, t) {
            var n = t[2],
              r = t[5];
            (o[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    a = r;
                  },
                  i[3 - e][2].disable,
                  i[3 - e][3].disable,
                  i[0][2].lock,
                  i[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? undefined : this, arguments),
                  this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          o.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          a = ce.call(arguments),
          i = Te.Deferred(),
          o = function (t) {
            return function (e) {
              (r[t] = this),
                (a[t] = 1 < arguments.length ? ce.call(arguments) : e),
                --n || i.resolveWith(r, a);
            };
          };
        if (
          n <= 1 &&
          (l(e, i.done(o(t)).resolve, i.reject, !n),
          "pending" === i.state() || we(a[t] && a[t].then))
        )
          return i.then();
        for (; t--; ) l(a[t], o(t), i.reject);
        return i.promise();
      },
    });
  var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (Te.Deferred.exceptionHook = function (e, t) {
    T.console &&
      T.console.warn &&
      e &&
      Pe.test(e.name) &&
      T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (Te.readyException = function (e) {
      T.setTimeout(function () {
        throw e;
      });
    });
  var He = Te.Deferred();
  (Te.fn.ready = function (e) {
    return (
      He.then(e)["catch"](function (e) {
        Te.readyException(e);
      }),
      this
    );
  }),
    Te.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --Te.readyWait : Te.isReady) ||
          ((Te.isReady = !0) !== e && 0 < --Te.readyWait) ||
          He.resolveWith(le, [Te]);
      },
    }),
    (Te.ready.then = He.then),
    "complete" === le.readyState ||
    ("loading" !== le.readyState && !le.documentElement.doScroll)
      ? T.setTimeout(Te.ready)
      : (le.addEventListener("DOMContentLoaded", r),
        T.addEventListener("load", r));
  var Me = function (e, t, n, r, a, i, o) {
      var s = 0,
        l = e.length,
        u = null == n;
      if ("object" === m(n))
        for (s in ((a = !0), n)) Me(e, t, s, n[s], !0, i, o);
      else if (
        r !== undefined &&
        ((a = !0),
        we(r) || (o = !0),
        u &&
          (o
            ? (t.call(e, r), (t = null))
            : ((u = t),
              (t = function (e, t, n) {
                return u.call(Te(e), n);
              }))),
        t)
      )
        for (; s < l; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
      return a ? e : u ? t.call(e) : l ? t(e[0], n) : i;
    },
    Oe = /^-ms-/,
    qe = /-([a-z])/g,
    We = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (i.uid = 1),
    (i.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            We(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          a = this.cache(e);
        if ("string" == typeof t) a[h(t)] = n;
        else for (r in t) a[h(r)] = t[r];
        return a;
      },
      get: function (e, t) {
        return t === undefined
          ? this.cache(e)
          : e[this.expando] && e[this.expando][h(t)];
      },
      access: function (e, t, n) {
        return t === undefined || (t && "string" == typeof t && n === undefined)
          ? this.get(e, t)
          : (this.set(e, t, n), n !== undefined ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (r !== undefined) {
          if (t !== undefined) {
            n = (t = Array.isArray(t)
              ? t.map(h)
              : (t = h(t)) in r
              ? [t]
              : t.match(Fe) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (t === undefined || Te.isEmptyObject(r)) &&
            (e.nodeType
              ? (e[this.expando] = undefined)
              : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return t !== undefined && !Te.isEmptyObject(t);
      },
    });
  var Be = new i(),
    $e = new i(),
    Ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ze = /[A-Z]/g;
  Te.extend({
    hasData: function (e) {
      return $e.hasData(e) || Be.hasData(e);
    },
    data: function (e, t, n) {
      return $e.access(e, t, n);
    },
    removeData: function (e, t) {
      $e.remove(e, t);
    },
    _data: function (e, t, n) {
      return Be.access(e, t, n);
    },
    _removeData: function (e, t) {
      Be.remove(e, t);
    },
  }),
    Te.fn.extend({
      data: function (n, e) {
        var t,
          r,
          a,
          i = this[0],
          o = i && i.attributes;
        if (n !== undefined)
          return "object" == typeof n
            ? this.each(function () {
                $e.set(this, n);
              })
            : Me(
                this,
                function (e) {
                  var t;
                  if (i && e === undefined)
                    return (t = $e.get(i, n)) !== undefined
                      ? t
                      : (t = p(i, n)) !== undefined
                      ? t
                      : void 0;
                  this.each(function () {
                    $e.set(this, n, e);
                  });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((a = $e.get(i)), 1 === i.nodeType && !Be.get(i, "hasDataAttrs"))
        ) {
          for (t = o.length; t--; )
            o[t] &&
              0 === (r = o[t].name).indexOf("data-") &&
              ((r = h(r.slice(5))), p(i, r, a[r]));
          Be.set(i, "hasDataAttrs", !0);
        }
        return a;
      },
      removeData: function (e) {
        return this.each(function () {
          $e.remove(this, e);
        });
      },
    }),
    Te.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Be.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Be.access(e, t, Te.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = Te.queue(e, t),
          r = n.length,
          a = n.shift(),
          i = Te._queueHooks(e, t),
          o = function () {
            Te.dequeue(e, t);
          };
        "inprogress" === a && ((a = n.shift()), r--),
          a &&
            ("fx" === t && n.unshift("inprogress"),
            delete i.stop,
            a.call(e, o, i)),
          !r && i && i.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Be.get(e, n) ||
          Be.access(e, n, {
            empty: Te.Callbacks("once memory").add(function () {
              Be.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    Te.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? Te.queue(this[0], t)
            : n === undefined
            ? this
            : this.each(function () {
                var e = Te.queue(this, t, n);
                Te._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && Te.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          Te.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          a = Te.Deferred(),
          i = this,
          o = this.length,
          s = function () {
            --r || a.resolveWith(i, [i]);
          };
        for (
          "string" != typeof e && ((t = e), (e = undefined)), e = e || "fx";
          o--;

        )
          (n = Be.get(i[o], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), a.promise(t);
      },
    });
  var Xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ve = new RegExp("^(?:([+-])=|)(" + Xe + ")([a-z%]*)$", "i"),
    Ge = ["Top", "Right", "Bottom", "Left"],
    Je = le.documentElement,
    Ye = function (e) {
      return Te.contains(e.ownerDocument, e);
    },
    Ze = { composed: !0 };
  Je.getRootNode &&
    (Ye = function (e) {
      return (
        Te.contains(e.ownerDocument, e) || e.getRootNode(Ze) === e.ownerDocument
      );
    });
  var Ke = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && Ye(e) && "none" === Te.css(e, "display"))
      );
    },
    Qe = function (e, t, n, r) {
      var a,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((a = n.apply(e, r || [])), t)) e.style[i] = o[i];
      return a;
    },
    et = {};
  Te.fn.extend({
    show: function () {
      return b(this, !0);
    },
    hide: function () {
      return b(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            Ke(this) ? Te(this).show() : Te(this).hide();
          });
    },
  });
  var tt = /^(?:checkbox|radio)$/i,
    nt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    rt = /^$|^module$|\/(?:java|ecma)script/i,
    at = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (at.optgroup = at.option),
    (at.tbody = at.tfoot = at.colgroup = at.caption = at.thead),
    (at.th = at.td);
  var it,
    ot,
    st = /<|&#?\w+;/;
  (it = le.createDocumentFragment().appendChild(le.createElement("div"))),
    (ot = le.createElement("input")).setAttribute("type", "radio"),
    ot.setAttribute("checked", "checked"),
    ot.setAttribute("name", "t"),
    it.appendChild(ot),
    (be.checkClone = it.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (it.innerHTML = "<textarea>x</textarea>"),
    (be.noCloneChecked = !!it.cloneNode(!0).lastChild.defaultValue);
  var lt = /^key/,
    ut = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ct = /^([^.]*)(?:\.(.+)|)/;
  (Te.event = {
    global: {},
    add: function (t, e, n, r, a) {
      var i,
        o,
        s,
        l,
        u,
        c,
        f,
        d,
        h,
        p,
        g,
        m = Be.get(t);
      if (m)
        for (
          n.handler && ((n = (i = n).handler), (a = i.selector)),
            a && Te.find.matchesSelector(Je, a),
            n.guid || (n.guid = Te.guid++),
            (l = m.events) || (l = m.events = {}),
            (o = m.handle) ||
              (o = m.handle =
                function (e) {
                  return void 0 !== Te && Te.event.triggered !== e.type
                    ? Te.event.dispatch.apply(t, arguments)
                    : undefined;
                }),
            u = (e = (e || "").match(Fe) || [""]).length;
          u--;

        )
          (h = g = (s = ct.exec(e[u]) || [])[1]),
            (p = (s[2] || "").split(".").sort()),
            h &&
              ((f = Te.event.special[h] || {}),
              (h = (a ? f.delegateType : f.bindType) || h),
              (f = Te.event.special[h] || {}),
              (c = Te.extend(
                {
                  type: h,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: a,
                  needsContext: a && Te.expr.match.needsContext.test(a),
                  namespace: p.join("."),
                },
                i
              )),
              (d = l[h]) ||
                (((d = l[h] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, p, o)) ||
                  (t.addEventListener && t.addEventListener(h, o))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              a ? d.splice(d.delegateCount++, 0, c) : d.push(c),
              (Te.event.global[h] = !0));
    },
    remove: function (e, t, n, r, a) {
      var i,
        o,
        s,
        l,
        u,
        c,
        f,
        d,
        h,
        p,
        g,
        m = Be.hasData(e) && Be.get(e);
      if (m && (l = m.events)) {
        for (u = (t = (t || "").match(Fe) || [""]).length; u--; )
          if (
            ((h = g = (s = ct.exec(t[u]) || [])[1]),
            (p = (s[2] || "").split(".").sort()),
            h)
          ) {
            for (
              f = Te.event.special[h] || {},
                d = l[(h = (r ? f.delegateType : f.bindType) || h)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                o = i = d.length;
              i--;

            )
              (c = d[i]),
                (!a && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (d.splice(i, 1),
                  c.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, c));
            o &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) ||
                Te.removeEvent(e, h, m.handle),
              delete l[h]);
          } else for (h in l) Te.event.remove(e, h + t[u], n, r, !0);
        Te.isEmptyObject(l) && Be.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        a,
        i,
        o,
        s = Te.event.fix(e),
        l = new Array(arguments.length),
        u = (Be.get(this, "events") || {})[s.type] || [],
        c = Te.event.special[s.type] || {};
      for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, s))
      ) {
        for (
          o = Te.event.handlers.call(this, s, u), t = 0;
          (a = o[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = a.elem, n = 0;
            (i = a.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace &&
              !1 !== i.namespace &&
              !s.rnamespace.test(i.namespace)) ||
              ((s.handleObj = i),
              (s.data = i.data),
              (r = (
                (Te.event.special[i.origType] || {}).handle || i.handler
              ).apply(a.elem, l)) !== undefined &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        a,
        i,
        o,
        s = [],
        l = t.delegateCount,
        u = e.target;
      if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (i = [], o = {}, n = 0; n < l; n++)
              o[(a = (r = t[n]).selector + " ")] === undefined &&
                (o[a] = r.needsContext
                  ? -1 < Te(a, this).index(u)
                  : Te.find(a, this, null, [u]).length),
                o[a] && i.push(r);
            i.length && s.push({ elem: u, handlers: i });
          }
      return (
        (u = this), l < t.length && s.push({ elem: u, handlers: t.slice(l) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(Te.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: we(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[Te.expando] ? e : new Te.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            tt.test(t.type) && t.click && u(t, "input") && k(t, "click", D), !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            tt.test(t.type) && t.click && u(t, "input") && k(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (tt.test(t.type) &&
              t.click &&
              u(t, "input") &&
              Be.get(t, "click")) ||
            u(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== undefined &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (Te.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (Te.Event = function (e, t) {
      if (!(this instanceof Te.Event)) return new Te.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (e.defaultPrevented === undefined && !1 === e.returnValue)
              ? D
              : C),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && Te.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[Te.expando] = !0);
    }),
    (Te.Event.prototype = {
      constructor: Te.Event,
      isDefaultPrevented: C,
      isPropagationStopped: C,
      isImmediatePropagationStopped: C,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = D),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = D),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = D),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    Te.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && lt.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && t !== undefined && ut.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      Te.event.addProp
    ),
    Te.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      Te.event.special[e] = {
        setup: function () {
          return k(this, e, _), !1;
        },
        trigger: function () {
          return k(this, e), !0;
        },
        delegateType: t,
      };
    }),
    Te.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        Te.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = this,
              r = e.relatedTarget,
              a = e.handleObj;
            return (
              (r && (r === n || Te.contains(n, r))) ||
                ((e.type = a.origType),
                (t = a.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    Te.fn.extend({
      on: function (e, t, n, r) {
        return N(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return N(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, a;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            Te(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = undefined)),
            !1 === n && (n = C),
            this.each(function () {
              Te.event.remove(this, e, n, t);
            })
          );
        for (a in e) this.off(a, t, e[a]);
        return this;
      },
    });
  var ft =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    dt = /<script|<style|<link/i,
    ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
    pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  Te.extend({
    htmlPrefilter: function (e) {
      return e.replace(ft, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        a,
        i,
        o,
        s = e.cloneNode(!0),
        l = Ye(e);
      if (
        !(
          be.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          Te.isXMLDoc(e)
        )
      )
        for (o = w(s), r = 0, a = (i = w(e)).length; r < a; r++) R(i[r], o[r]);
      if (t)
        if (n)
          for (i = i || w(e), o = o || w(s), r = 0, a = i.length; r < a; r++)
            E(i[r], o[r]);
        else E(e, s);
      return 0 < (o = w(s, "script")).length && x(o, !l && w(e, "script")), s;
    },
    cleanData: function (e) {
      for (
        var t, n, r, a = Te.event.special, i = 0;
        (n = e[i]) !== undefined;
        i++
      )
        if (We(n)) {
          if ((t = n[Be.expando])) {
            if (t.events)
              for (r in t.events)
                a[r] ? Te.event.remove(n, r) : Te.removeEvent(n, r, t.handle);
            n[Be.expando] = undefined;
          }
          n[$e.expando] && (n[$e.expando] = undefined);
        }
    },
  }),
    Te.fn.extend({
      detach: function (e) {
        return P(this, e, !0);
      },
      remove: function (e) {
        return P(this, e);
      },
      text: function (e) {
        return Me(
          this,
          function (e) {
            return e === undefined
              ? Te.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return F(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            I(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return F(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = I(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return F(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return F(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (Te.cleanData(w(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return Te.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Me(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (e === undefined && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !dt.test(e) &&
              !at[(nt.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = Te.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (Te.cleanData(w(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (a) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return F(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            Te.inArray(this, n) < 0 &&
              (Te.cleanData(w(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    Te.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, o) {
        Te.fn[e] = function (e) {
          for (var t, n = [], r = Te(e), a = r.length - 1, i = 0; i <= a; i++)
            (t = i === a ? this : this.clone(!0)),
              Te(r[i])[o](t),
              de.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var gt = new RegExp("^(" + Xe + ")(?!px)[a-z%]+$", "i"),
    mt = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = T), t.getComputedStyle(e);
    },
    vt = new RegExp(Ge.join("|"), "i");
  !(function () {
    function e() {
      if (l) {
        (s.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          Je.appendChild(s).appendChild(l);
        var e = T.getComputedStyle(l);
        (n = "1%" !== e.top),
          (o = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (i = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (a = 12 === t(l.offsetWidth / 3)),
          Je.removeChild(s),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      a,
      i,
      o,
      s = le.createElement("div"),
      l = le.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (be.clearCloneStyle = "content-box" === l.style.backgroundClip),
      Te.extend(be, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), i;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), o;
        },
        scrollboxSize: function () {
          return e(), a;
        },
      }));
  })();
  var yt = ["Webkit", "Moz", "ms"],
    bt = le.createElement("div").style,
    wt = {},
    xt = /^(none|table(?!-c[ea]).+)/,
    St = /^--/,
    Dt = { position: "absolute", visibility: "hidden", display: "block" },
    Tt = { letterSpacing: "0", fontWeight: "400" };
  Te.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = H(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var a,
          i,
          o,
          s = h(t),
          l = St.test(t),
          u = e.style;
        if (
          (l || (t = q(s)),
          (o = Te.cssHooks[t] || Te.cssHooks[s]),
          n === undefined)
        )
          return o && "get" in o && (a = o.get(e, !1, r)) !== undefined
            ? a
            : u[t];
        "string" === (i = typeof n) &&
          (a = Ve.exec(n)) &&
          a[1] &&
          ((n = v(e, t, a)), (i = "number")),
          null != n &&
            n == n &&
            ("number" !== i ||
              l ||
              (n += (a && a[3]) || (Te.cssNumber[s] ? "" : "px")),
            be.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (u[t] = "inherit"),
            (o && "set" in o && (n = o.set(e, n, r)) === undefined) ||
              (l ? u.setProperty(t, n) : (u[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var a,
        i,
        o,
        s = h(t);
      return (
        St.test(t) || (t = q(s)),
        (o = Te.cssHooks[t] || Te.cssHooks[s]) &&
          "get" in o &&
          (a = o.get(e, !0, n)),
        a === undefined && (a = H(e, t, r)),
        "normal" === a && t in Tt && (a = Tt[t]),
        "" === n || n
          ? ((i = parseFloat(a)), !0 === n || isFinite(i) ? i || 0 : a)
          : a
      );
    },
  }),
    Te.each(["height", "width"], function (e, l) {
      Te.cssHooks[l] = {
        get: function (e, t, n) {
          if (t)
            return !xt.test(Te.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? $(e, l, n)
              : Qe(e, Dt, function () {
                  return $(e, l, n);
                });
        },
        set: function (e, t, n) {
          var r,
            a = mt(e),
            i = !be.scrollboxSize() && "absolute" === a.position,
            o = (i || n) && "border-box" === Te.css(e, "boxSizing", !1, a),
            s = n ? B(e, l, n, o, a) : 0;
          return (
            o &&
              i &&
              (s -= Math.ceil(
                e["offset" + l[0].toUpperCase() + l.slice(1)] -
                  parseFloat(a[l]) -
                  B(e, l, "border", !1, a) -
                  0.5
              )),
            s &&
              (r = Ve.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[l] = t), (t = Te.css(e, l))),
            W(e, t, s)
          );
        },
      };
    }),
    (Te.cssHooks.marginLeft = M(be.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(H(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Qe(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    Te.each({ margin: "", padding: "", border: "Width" }, function (a, i) {
      (Te.cssHooks[a + i] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[a + Ge[t] + i] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== a && (Te.cssHooks[a + i].set = W);
    }),
    Te.fn.extend({
      css: function (e, t) {
        return Me(
          this,
          function (e, t, n) {
            var r,
              a,
              i = {},
              o = 0;
            if (Array.isArray(t)) {
              for (r = mt(e), a = t.length; o < a; o++)
                i[t[o]] = Te.css(e, t[o], !1, r);
              return i;
            }
            return n !== undefined ? Te.style(e, t, n) : Te.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    ((Te.Tween = U).prototype = {
      constructor: U,
      init: function (e, t, n, r, a, i) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = a || Te.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = i || (Te.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = U.propHooks[this.prop];
        return e && e.get ? e.get(this) : U.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = U.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                Te.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : U.propHooks._default.set(this),
          this
        );
      },
    }),
    (U.prototype.init.prototype = U.prototype),
    (U.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = Te.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          Te.fx.step[e.prop]
            ? Te.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!Te.cssHooks[e.prop] && null == e.elem.style[q(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : Te.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (U.propHooks.scrollTop = U.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (Te.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (Te.fx = U.prototype.init),
    (Te.fx.step = {});
  var Ct,
    _t,
    At,
    Nt,
    kt = /^(?:toggle|show|hide)$/,
    It = /queueHooks$/;
  (Te.Animation = Te.extend(Z, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return v(n.elem, e, Ve.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      we(e) ? ((t = e), (e = ["*"])) : (e = e.match(Fe));
      for (var n, r = 0, a = e.length; r < a; r++)
        (n = e[r]),
          (Z.tweeners[n] = Z.tweeners[n] || []),
          Z.tweeners[n].unshift(t);
    },
    prefilters: [J],
    prefilter: function (e, t) {
      t ? Z.prefilters.unshift(e) : Z.prefilters.push(e);
    },
  })),
    (Te.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? Te.extend({}, e)
          : {
              complete: n || (!n && t) || (we(e) && e),
              duration: e,
              easing: (n && t) || (t && !we(t) && t),
            };
      return (
        Te.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in Te.fx.speeds
              ? (r.duration = Te.fx.speeds[r.duration])
              : (r.duration = Te.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          we(r.old) && r.old.call(this), r.queue && Te.dequeue(this, r.queue);
        }),
        r
      );
    }),
    Te.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(Ke)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var a = Te.isEmptyObject(t),
          i = Te.speed(e, n, r),
          o = function () {
            var e = Z(this, Te.extend({}, t), i);
            (a || Be.get(this, "finish")) && e.stop(!0);
          };
        return (
          (o.finish = o),
          a || !1 === i.queue ? this.each(o) : this.queue(i.queue, o)
        );
      },
      stop: function (a, e, i) {
        var o = function (e) {
          var t = e.stop;
          delete e.stop, t(i);
        };
        return (
          "string" != typeof a && ((i = e), (e = a), (a = undefined)),
          e && !1 !== a && this.queue(a || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != a && a + "queueHooks",
              n = Te.timers,
              r = Be.get(this);
            if (t) r[t] && r[t].stop && o(r[t]);
            else for (t in r) r[t] && r[t].stop && It.test(t) && o(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != a && n[t].queue !== a) ||
                (n[t].anim.stop(i), (e = !1), n.splice(t, 1));
            (!e && i) || Te.dequeue(this, a);
          })
        );
      },
      finish: function (o) {
        return (
          !1 !== o && (o = o || "fx"),
          this.each(function () {
            var e,
              t = Be.get(this),
              n = t[o + "queue"],
              r = t[o + "queueHooks"],
              a = Te.timers,
              i = n ? n.length : 0;
            for (
              t.finish = !0,
                Te.queue(this, o, []),
                r && r.stop && r.stop.call(this, !0),
                e = a.length;
              e--;

            )
              a[e].elem === this &&
                a[e].queue === o &&
                (a[e].anim.stop(!0), a.splice(e, 1));
            for (e = 0; e < i; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    Te.each(["toggle", "show", "hide"], function (e, r) {
      var a = Te.fn[r];
      Te.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? a.apply(this, arguments)
          : this.animate(V(r, !0), e, t, n);
      };
    }),
    Te.each(
      {
        slideDown: V("show"),
        slideUp: V("hide"),
        slideToggle: V("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        Te.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (Te.timers = []),
    (Te.fx.tick = function () {
      var e,
        t = 0,
        n = Te.timers;
      for (Ct = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || Te.fx.stop(), (Ct = undefined);
    }),
    (Te.fx.timer = function (e) {
      Te.timers.push(e), Te.fx.start();
    }),
    (Te.fx.interval = 13),
    (Te.fx.start = function () {
      _t || ((_t = !0), z());
    }),
    (Te.fx.stop = function () {
      _t = null;
    }),
    (Te.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (Te.fn.delay = function (r, e) {
      return (
        (r = (Te.fx && Te.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = T.setTimeout(e, r);
          t.stop = function () {
            T.clearTimeout(n);
          };
        })
      );
    }),
    (At = le.createElement("input")),
    (Nt = le.createElement("select").appendChild(le.createElement("option"))),
    (At.type = "checkbox"),
    (be.checkOn = "" !== At.value),
    (be.optSelected = Nt.selected),
    ((At = le.createElement("input")).value = "t"),
    (At.type = "radio"),
    (be.radioValue = "t" === At.value);
  var jt,
    Lt = Te.expr.attrHandle;
  Te.fn.extend({
    attr: function (e, t) {
      return Me(this, Te.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        Te.removeAttr(this, e);
      });
    },
  }),
    Te.extend({
      attr: function (e, t, n) {
        var r,
          a,
          i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i)
          return "undefined" == typeof e.getAttribute
            ? Te.prop(e, t, n)
            : ((1 === i && Te.isXMLDoc(e)) ||
                (a =
                  Te.attrHooks[t.toLowerCase()] ||
                  (Te.expr.match.bool.test(t) ? jt : undefined)),
              n !== undefined
                ? null === n
                  ? void Te.removeAttr(e, t)
                  : a && "set" in a && (r = a.set(e, n, t)) !== undefined
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : a && "get" in a && null !== (r = a.get(e, t))
                ? r
                : null == (r = Te.find.attr(e, t))
                ? undefined
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!be.radioValue && "radio" === t && u(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          a = t && t.match(Fe);
        if (a && 1 === e.nodeType) for (; (n = a[r++]); ) e.removeAttribute(n);
      },
    }),
    (jt = {
      set: function (e, t, n) {
        return !1 === t ? Te.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    Te.each(Te.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var o = Lt[t] || Te.find.attr;
      Lt[t] = function (e, t, n) {
        var r,
          a,
          i = t.toLowerCase();
        return (
          n ||
            ((a = Lt[i]),
            (Lt[i] = r),
            (r = null != o(e, t, n) ? i : null),
            (Lt[i] = a)),
          r
        );
      };
    });
  var Et = /^(?:input|select|textarea|button)$/i,
    Rt = /^(?:a|area)$/i;
  Te.fn.extend({
    prop: function (e, t) {
      return Me(this, Te.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[Te.propFix[e] || e];
      });
    },
  }),
    Te.extend({
      prop: function (e, t, n) {
        var r,
          a,
          i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i)
          return (
            (1 === i && Te.isXMLDoc(e)) ||
              ((t = Te.propFix[t] || t), (a = Te.propHooks[t])),
            n !== undefined
              ? a && "set" in a && (r = a.set(e, n, t)) !== undefined
                ? r
                : (e[t] = n)
              : a && "get" in a && null !== (r = a.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = Te.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : Et.test(e.nodeName) || (Rt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    be.optSelected ||
      (Te.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    Te.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        Te.propFix[this.toLowerCase()] = this;
      }
    ),
    Te.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          a,
          i,
          o,
          s,
          l = 0;
        if (we(t))
          return this.each(function (e) {
            Te(this).addClass(t.call(this, e, Q(this)));
          });
        if ((e = ee(t)).length)
          for (; (n = this[l++]); )
            if (((a = Q(n)), (r = 1 === n.nodeType && " " + K(a) + " "))) {
              for (o = 0; (i = e[o++]); )
                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
              a !== (s = K(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          a,
          i,
          o,
          s,
          l = 0;
        if (we(t))
          return this.each(function (e) {
            Te(this).removeClass(t.call(this, e, Q(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = ee(t)).length)
          for (; (n = this[l++]); )
            if (((a = Q(n)), (r = 1 === n.nodeType && " " + K(a) + " "))) {
              for (o = 0; (i = e[o++]); )
                for (; -1 < r.indexOf(" " + i + " "); )
                  r = r.replace(" " + i + " ", " ");
              a !== (s = K(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (a, t) {
        var i = typeof a,
          o = "string" === i || Array.isArray(a);
        return "boolean" == typeof t && o
          ? t
            ? this.addClass(a)
            : this.removeClass(a)
          : we(a)
          ? this.each(function (e) {
              Te(this).toggleClass(a.call(this, e, Q(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (o)
                for (t = 0, n = Te(this), r = ee(a); (e = r[t++]); )
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                (a !== undefined && "boolean" !== i) ||
                  ((e = Q(this)) && Be.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      e || !1 === a ? "" : Be.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = " " + e + " "; (n = this[r++]); )
          if (1 === n.nodeType && -1 < (" " + K(Q(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var Ft = /\r/g;
  Te.fn.extend({
    val: function (n) {
      var r,
        e,
        a,
        t = this[0];
      return arguments.length
        ? ((a = we(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = a ? n.call(this, e, Te(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = Te.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                Te.valHooks[this.type] ||
                Te.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                r.set(this, t, "value") !== undefined) ||
                (this.value = t));
          }))
        : t
        ? (r = Te.valHooks[t.type] || Te.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          (e = r.get(t, "value")) !== undefined
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(Ft, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    Te.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = Te.find.attr(e, "value");
            return null != t ? t : K(Te.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              a = e.options,
              i = e.selectedIndex,
              o = "select-one" === e.type,
              s = o ? null : [],
              l = o ? i + 1 : a.length;
            for (r = i < 0 ? l : o ? i : 0; r < l; r++)
              if (
                ((n = a[r]).selected || r === i) &&
                !n.disabled &&
                (!n.parentNode.disabled || !u(n.parentNode, "optgroup"))
              ) {
                if (((t = Te(n).val()), o)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var n, r, a = e.options, i = Te.makeArray(t), o = a.length;
              o--;

            )
              ((r = a[o]).selected =
                -1 < Te.inArray(Te.valHooks.option.get(r), i)) && (n = !0);
            return n || (e.selectedIndex = -1), i;
          },
        },
      },
    }),
    Te.each(["radio", "checkbox"], function () {
      (Te.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < Te.inArray(Te(e).val(), t));
        },
      }),
        be.checkOn ||
          (Te.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (be.focusin = "onfocusin" in T);
  var Pt = /^(?:focusinfocus|focusoutblur)$/,
    Ht = function (e) {
      e.stopPropagation();
    };
  Te.extend(Te.event, {
    trigger: function (e, t, n, r) {
      var a,
        i,
        o,
        s,
        l,
        u,
        c,
        f,
        d = [n || le],
        h = me.call(e, "type") ? e.type : e,
        p = me.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((i = f = o = n = n || le),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Pt.test(h + Te.event.triggered) &&
          (-1 < h.indexOf(".") && ((h = (p = h.split(".")).shift()), p.sort()),
          (l = h.indexOf(":") < 0 && "on" + h),
          ((e = e[Te.expando]
            ? e
            : new Te.Event(h, "object" == typeof e && e)).isTrigger = r
            ? 2
            : 3),
          (e.namespace = p.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = undefined),
          e.target || (e.target = n),
          (t = null == t ? [e] : Te.makeArray(t, [e])),
          (c = Te.event.special[h] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !xe(n)) {
          for (
            s = c.delegateType || h, Pt.test(s + h) || (i = i.parentNode);
            i;
            i = i.parentNode
          )
            d.push(i), (o = i);
          o === (n.ownerDocument || le) &&
            d.push(o.defaultView || o.parentWindow || T);
        }
        for (a = 0; (i = d[a++]) && !e.isPropagationStopped(); )
          (f = i),
            (e.type = 1 < a ? s : c.bindType || h),
            (u = (Be.get(i, "events") || {})[e.type] && Be.get(i, "handle")) &&
              u.apply(i, t),
            (u = l && i[l]) &&
              u.apply &&
              We(i) &&
              ((e.result = u.apply(i, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = h),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(d.pop(), t)) ||
            !We(n) ||
            (l &&
              we(n[h]) &&
              !xe(n) &&
              ((o = n[l]) && (n[l] = null),
              (Te.event.triggered = h),
              e.isPropagationStopped() && f.addEventListener(h, Ht),
              n[h](),
              e.isPropagationStopped() && f.removeEventListener(h, Ht),
              (Te.event.triggered = undefined),
              o && (n[l] = o))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = Te.extend(new Te.Event(), n, { type: e, isSimulated: !0 });
      Te.event.trigger(r, null, t);
    },
  }),
    Te.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          Te.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return Te.event.trigger(e, t, n, !0);
      },
    }),
    be.focusin ||
      Te.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var a = function (e) {
          Te.event.simulate(r, e.target, Te.event.fix(e));
        };
        Te.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = Be.access(e, r);
            t || e.addEventListener(n, a, !0), Be.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = Be.access(e, r) - 1;
            t
              ? Be.access(e, r, t)
              : (e.removeEventListener(n, a, !0), Be.remove(e, r));
          },
        };
      });
  var Mt = T.location,
    Ot = Date.now(),
    qt = /\?/;
  Te.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new T.DOMParser().parseFromString(e, "text/xml");
    } catch (n) {
      t = undefined;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        Te.error("Invalid XML: " + e),
      t
    );
  };
  var Wt = /\[\]$/,
    Bt = /\r?\n/g,
    $t = /^(?:submit|button|image|reset|file)$/i,
    Ut = /^(?:input|select|textarea|keygen)/i;
  (Te.param = function (e, t) {
    var n,
      r = [],
      a = function (e, t) {
        var n = we(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !Te.isPlainObject(e)))
      Te.each(e, function () {
        a(this.name, this.value);
      });
    else for (n in e) te(n, e[n], t, a);
    return r.join("&");
  }),
    Te.fn.extend({
      serialize: function () {
        return Te.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = Te.prop(this, "elements");
          return e ? Te.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !Te(this).is(":disabled") &&
              Ut.test(this.nodeName) &&
              !$t.test(e) &&
              (this.checked || !tt.test(e))
            );
          })
          .map(function (e, t) {
            var n = Te(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? Te.map(n, function (e) {
                  return { name: t.name, value: e.replace(Bt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Bt, "\r\n") };
          })
          .get();
      },
    });
  var zt = /%20/g,
    Xt = /#.*$/,
    Vt = /([?&])_=[^&]*/,
    Gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Jt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Yt = /^(?:GET|HEAD)$/,
    Zt = /^\/\//,
    Kt = {},
    Qt = {},
    en = "*/".concat("*"),
    tn = le.createElement("a");
  (tn.href = Mt.href),
    Te.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Mt.href,
        type: "GET",
        isLocal: Jt.test(Mt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": en,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": Te.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? ae(ae(e, Te.ajaxSettings), t) : ae(Te.ajaxSettings, e);
      },
      ajaxPrefilter: ne(Kt),
      ajaxTransport: ne(Qt),
      ajax: function (e, t) {
        function n(e, t, n, r) {
          var a,
            i,
            o,
            s,
            l,
            u = t;
          p ||
            ((p = !0),
            h && T.clearTimeout(h),
            (c = undefined),
            (d = r || ""),
            (S.readyState = 0 < e ? 4 : 0),
            (a = (200 <= e && e < 300) || 304 === e),
            n && (s = ie(m, S, n)),
            (s = oe(m, s, S, a)),
            a
              ? (m.ifModified &&
                  ((l = S.getResponseHeader("Last-Modified")) &&
                    (Te.lastModified[f] = l),
                  (l = S.getResponseHeader("etag")) && (Te.etag[f] = l)),
                204 === e || "HEAD" === m.type
                  ? (u = "nocontent")
                  : 304 === e
                  ? (u = "notmodified")
                  : ((u = s.state), (i = s.data), (a = !(o = s.error))))
              : ((o = u), (!e && u) || ((u = "error"), e < 0 && (e = 0))),
            (S.status = e),
            (S.statusText = (t || u) + ""),
            a ? b.resolveWith(v, [i, u, S]) : b.rejectWith(v, [S, u, o]),
            S.statusCode(x),
            (x = undefined),
            g && y.trigger(a ? "ajaxSuccess" : "ajaxError", [S, m, a ? i : o]),
            w.fireWith(v, [S, u]),
            g &&
              (y.trigger("ajaxComplete", [S, m]),
              --Te.active || Te.event.trigger("ajaxStop")));
        }
        "object" == typeof e && ((t = e), (e = undefined)), (t = t || {});
        var c,
          f,
          d,
          r,
          h,
          a,
          p,
          g,
          i,
          o,
          m = Te.ajaxSetup({}, t),
          v = m.context || m,
          y = m.context && (v.nodeType || v.jquery) ? Te(v) : Te.event,
          b = Te.Deferred(),
          w = Te.Callbacks("once memory"),
          x = m.statusCode || {},
          s = {},
          l = {},
          u = "canceled",
          S = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (p) {
                if (!r)
                  for (r = {}; (t = Gt.exec(d)); )
                    r[t[1].toLowerCase() + " "] = (
                      r[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = r[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return p ? d : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == p &&
                  ((e = l[e.toLowerCase()] = l[e.toLowerCase()] || e),
                  (s[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == p && (m.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (p) S.always(e[S.status]);
                else for (t in e) x[t] = [x[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), n(0, t), this;
            },
          };
        if (
          (b.promise(S),
          (m.url = ((e || m.url || Mt.href) + "").replace(
            Zt,
            Mt.protocol + "//"
          )),
          (m.type = t.method || t.type || m.method || m.type),
          (m.dataTypes = (m.dataType || "*").toLowerCase().match(Fe) || [""]),
          null == m.crossDomain)
        ) {
          a = le.createElement("a");
          try {
            (a.href = m.url),
              (a.href = a.href),
              (m.crossDomain =
                tn.protocol + "//" + tn.host != a.protocol + "//" + a.host);
          } catch (D) {
            m.crossDomain = !0;
          }
        }
        if (
          (m.data &&
            m.processData &&
            "string" != typeof m.data &&
            (m.data = Te.param(m.data, m.traditional)),
          re(Kt, m, t, S),
          p)
        )
          return S;
        for (i in ((g = Te.event && m.global) &&
          0 == Te.active++ &&
          Te.event.trigger("ajaxStart"),
        (m.type = m.type.toUpperCase()),
        (m.hasContent = !Yt.test(m.type)),
        (f = m.url.replace(Xt, "")),
        m.hasContent
          ? m.data &&
            m.processData &&
            0 ===
              (m.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (m.data = m.data.replace(zt, "+"))
          : ((o = m.url.slice(f.length)),
            m.data &&
              (m.processData || "string" == typeof m.data) &&
              ((f += (qt.test(f) ? "&" : "?") + m.data), delete m.data),
            !1 === m.cache &&
              ((f = f.replace(Vt, "$1")),
              (o = (qt.test(f) ? "&" : "?") + "_=" + Ot++ + o)),
            (m.url = f + o)),
        m.ifModified &&
          (Te.lastModified[f] &&
            S.setRequestHeader("If-Modified-Since", Te.lastModified[f]),
          Te.etag[f] && S.setRequestHeader("If-None-Match", Te.etag[f])),
        ((m.data && m.hasContent && !1 !== m.contentType) || t.contentType) &&
          S.setRequestHeader("Content-Type", m.contentType),
        S.setRequestHeader(
          "Accept",
          m.dataTypes[0] && m.accepts[m.dataTypes[0]]
            ? m.accepts[m.dataTypes[0]] +
                ("*" !== m.dataTypes[0] ? ", " + en + "; q=0.01" : "")
            : m.accepts["*"]
        ),
        m.headers))
          S.setRequestHeader(i, m.headers[i]);
        if (m.beforeSend && (!1 === m.beforeSend.call(v, S, m) || p))
          return S.abort();
        if (
          ((u = "abort"),
          w.add(m.complete),
          S.done(m.success),
          S.fail(m.error),
          (c = re(Qt, m, t, S)))
        ) {
          if (((S.readyState = 1), g && y.trigger("ajaxSend", [S, m]), p))
            return S;
          m.async &&
            0 < m.timeout &&
            (h = T.setTimeout(function () {
              S.abort("timeout");
            }, m.timeout));
          try {
            (p = !1), c.send(s, n);
          } catch (D) {
            if (p) throw D;
            n(-1, D);
          }
        } else n(-1, "No Transport");
        return S;
      },
      getJSON: function (e, t, n) {
        return Te.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return Te.get(e, undefined, t, "script");
      },
    }),
    Te.each(["get", "post"], function (e, a) {
      Te[a] = function (e, t, n, r) {
        return (
          we(t) && ((r = r || n), (n = t), (t = undefined)),
          Te.ajax(
            Te.extend(
              { url: e, type: a, dataType: r, data: t, success: n },
              Te.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (Te._evalUrl = function (e, t) {
      return Te.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          Te.globalEval(e, t);
        },
      });
    }),
    Te.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (we(e) && (e = e.call(this[0])),
            (t = Te(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return we(n)
          ? this.each(function (e) {
              Te(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = Te(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = we(t);
        return this.each(function (e) {
          Te(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              Te(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (Te.expr.pseudos.hidden = function (e) {
      return !Te.expr.pseudos.visible(e);
    }),
    (Te.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (Te.ajaxSettings.xhr = function () {
      try {
        return new T.XMLHttpRequest();
      } catch (e) {}
    });
  var nn = { 0: 200, 1223: 204 },
    rn = Te.ajaxSettings.xhr();
  (be.cors = !!rn && "withCredentials" in rn),
    (be.ajax = rn = !!rn),
    Te.ajaxTransport(function (i) {
      var o, s;
      if (be.cors || (rn && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    s =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        nn[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (s = r.onerror = r.ontimeout = o("error")),
              r.onabort !== undefined
                ? (r.onabort = s)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      T.setTimeout(function () {
                        o && s();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (a) {
              if (o) throw a;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    Te.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    Te.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return Te.globalEval(e), e;
        },
      },
    }),
    Te.ajaxPrefilter("script", function (e) {
      e.cache === undefined && (e.cache = !1),
        e.crossDomain && (e.type = "GET");
    }),
    Te.ajaxTransport("script", function (n) {
      var r, a;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = Te("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (a = function (e) {
                  r.remove(),
                    (a = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              le.head.appendChild(r[0]);
          },
          abort: function () {
            a && a();
          },
        };
    });
  var an,
    on = [],
    sn = /(=)\?(?=&|$)|\?\?/;
  Te.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = on.pop() || Te.expando + "_" + Ot++;
      return (this[e] = !0), e;
    },
  }),
    Te.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        a,
        i,
        o =
          !1 !== e.jsonp &&
          (sn.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              sn.test(e.data) &&
              "data");
      if (o || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            we(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          o
            ? (e[o] = e[o].replace(sn, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (qt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return i || Te.error(r + " was not called"), i[0];
          }),
          (e.dataTypes[0] = "json"),
          (a = T[r]),
          (T[r] = function () {
            i = arguments;
          }),
          n.always(function () {
            a === undefined ? Te(T).removeProp(r) : (T[r] = a),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), on.push(r)),
              i && we(a) && a(i[0]),
              (i = a = undefined);
          }),
          "script"
        );
    }),
    (be.createHTMLDocument =
      (((an = le.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === an.childNodes.length)),
    (Te.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (be.createHTMLDocument
              ? (((r = (t =
                  le.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = le.location.href),
                t.head.appendChild(r))
              : (t = le)),
          (i = !n && []),
          (a = Ie.exec(e))
            ? [t.createElement(a[1])]
            : ((a = S([e], t, i)),
              i && i.length && Te(i).remove(),
              Te.merge([], a.childNodes)));
      var r, a, i;
    }),
    (Te.fn.load = function (e, t, n) {
      var r,
        a,
        i,
        o = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = K(e.slice(s))), (e = e.slice(0, s))),
        we(t)
          ? ((n = t), (t = undefined))
          : t && "object" == typeof t && (a = "POST"),
        0 < o.length &&
          Te.ajax({ url: e, type: a || "GET", dataType: "html", data: t })
            .done(function (e) {
              (i = arguments),
                o.html(r ? Te("<div>").append(Te.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  o.each(function () {
                    n.apply(this, i || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    Te.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        Te.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (Te.expr.pseudos.animated = function (t) {
      return Te.grep(Te.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (Te.offset = {
      setOffset: function (e, t, n) {
        var r,
          a,
          i,
          o,
          s,
          l,
          u = Te.css(e, "position"),
          c = Te(e),
          f = {};
        "static" === u && (e.style.position = "relative"),
          (s = c.offset()),
          (i = Te.css(e, "top")),
          (l = Te.css(e, "left")),
          ("absolute" === u || "fixed" === u) && -1 < (i + l).indexOf("auto")
            ? ((o = (r = c.position()).top), (a = r.left))
            : ((o = parseFloat(i) || 0), (a = parseFloat(l) || 0)),
          we(t) && (t = t.call(e, n, Te.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + o),
          null != t.left && (f.left = t.left - s.left + a),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    Te.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return t === undefined
            ? this
            : this.each(function (e) {
                Te.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            a = { top: 0, left: 0 };
          if ("fixed" === Te.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = r.ownerDocument,
                e = r.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === Te.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((a = Te(e).offset()).top += Te.css(e, "borderTopWidth", !0)),
              (a.left += Te.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - a.top - Te.css(r, "marginTop", !0),
            left: t.left - a.left - Te.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === Te.css(e, "position");

          )
            e = e.offsetParent;
          return e || Je;
        });
      },
    }),
    Te.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, a) {
        var i = "pageYOffset" === a;
        Te.fn[t] = function (e) {
          return Me(
            this,
            function (e, t, n) {
              var r;
              if (
                (xe(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                n === undefined)
              )
                return r ? r[a] : e[t];
              r
                ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    Te.each(["top", "left"], function (e, n) {
      Te.cssHooks[n] = M(be.pixelPosition, function (e, t) {
        if (t)
          return (t = H(e, n)), gt.test(t) ? Te(e).position()[n] + "px" : t;
      });
    }),
    Te.each({ Height: "height", Width: "width" }, function (o, s) {
      Te.each(
        { padding: "inner" + o, content: s, "": "outer" + o },
        function (r, i) {
          Te.fn[i] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              a = r || (!0 === e || !0 === t ? "margin" : "border");
            return Me(
              this,
              function (e, t, n) {
                var r;
                return xe(e)
                  ? 0 === i.indexOf("outer")
                    ? e["inner" + o]
                    : e.document.documentElement["client" + o]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + o],
                      r["scroll" + o],
                      e.body["offset" + o],
                      r["offset" + o],
                      r["client" + o]
                    ))
                  : n === undefined
                  ? Te.css(e, t, a)
                  : Te.style(e, t, n, a);
              },
              s,
              n ? e : undefined,
              n
            );
          };
        }
      );
    }),
    Te.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        Te.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    Te.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    Te.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (Te.proxy = function (e, t) {
      var n, r, a;
      return (
        "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
        we(e)
          ? ((r = ce.call(arguments, 2)),
            ((a = function () {
              return e.apply(t || this, r.concat(ce.call(arguments)));
            }).guid = e.guid =
              e.guid || Te.guid++),
            a)
          : undefined
      );
    }),
    (Te.holdReady = function (e) {
      e ? Te.readyWait++ : Te.ready(!0);
    }),
    (Te.isArray = Array.isArray),
    (Te.parseJSON = JSON.parse),
    (Te.nodeName = u),
    (Te.isFunction = we),
    (Te.isWindow = xe),
    (Te.camelCase = h),
    (Te.type = m),
    (Te.now = Date.now),
    (Te.isNumeric = function (e) {
      var t = Te.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return Te;
      });
  var ln = T.jQuery,
    un = T.$;
  return (
    (Te.noConflict = function (e) {
      return (
        T.$ === Te && (T.$ = un), e && T.jQuery === Te && (T.jQuery = ln), Te
      );
    }),
    e || (T.jQuery = T.$ = Te),
    Te
  );
});
var hljs = new (function () {
  function x(e) {
    return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;");
  }
  function S(e, t, n) {
    return RegExp(t, "m" + (e.cI ? "i" : "") + (n ? "g" : ""));
  }
  function r(e) {
    for (var t = 0; t < e.childNodes.length; t++) {
      var n = e.childNodes[t];
      if ("CODE" == n.nodeName) return n;
      if (3 != n.nodeType || !n.nodeValue.match(/\s+/)) break;
    }
  }
  function h(e, t) {
    for (var n = "", r = 0; r < e.childNodes.length; r++)
      if (3 == e.childNodes[r].nodeType) {
        var a = e.childNodes[r].nodeValue;
        t && (a = a.replace(/\n/g, "")), (n += a);
      } else
        "BR" == e.childNodes[r].nodeName
          ? (n += "\n")
          : (n += h(e.childNodes[r]));
    return (
      /MSIE [678]/.test(navigator.userAgent) && (n = n.replace(/\r/g, "\n")), n
    );
  }
  function p(e) {
    var t = e.className.split(/\s+/);
    t = t.concat(e.parentNode.className.split(/\s+/));
    for (var n = 0; n < t.length; n++) {
      var r = t[n].replace(/^language-/, "");
      if (T[r] || "no-highlight" == r) return r;
    }
  }
  function g(e) {
    var r = [];
    return (
      (function (e, t) {
        for (var n = 0; n < e.childNodes.length; n++)
          3 == e.childNodes[n].nodeType
            ? (t += e.childNodes[n].nodeValue.length)
            : "BR" == e.childNodes[n].nodeName
            ? (t += 1)
            : (r.push({ event: "start", offset: t, node: e.childNodes[n] }),
              (t = arguments.callee(e.childNodes[n], t)),
              r.push({ event: "stop", offset: t, node: e.childNodes[n] }));
      })(e, 0),
      r
    );
  }
  function m(e, t, n) {
    function r() {
      return e.length && t.length
        ? e[0].offset != t[0].offset
          ? e[0].offset < t[0].offset
            ? e
            : t
          : "start" == t[0].event
          ? e
          : t
        : e.length
        ? e
        : t;
    }
    function a(e) {
      for (
        var t = "<" + e.nodeName.toLowerCase(), n = 0;
        n < e.attributes.length;
        n++
      ) {
        var r = e.attributes[n];
        (t += " " + r.nodeName.toLowerCase()),
          r.nodeValue != undefined && (t += '="' + x(r.nodeValue) + '"');
      }
      return t + ">";
    }
    for (var i = 0, o = "", s = []; e.length || t.length; ) {
      var l = r().splice(0, 1)[0];
      if (
        ((o += x(n.substr(i, l.offset - i))),
        (i = l.offset),
        "start" == l.event)
      )
        (o += a(l.node)), s.push(l.node);
      else if ("stop" == l.event) {
        var u = s.length;
        do {
          var c = s[--u];
          o += "</" + c.nodeName.toLowerCase() + ">";
        } while (c != l.node);
        for (s.splice(u, 1); u < s.length; ) (o += a(s[u])), u++;
      }
    }
    return (o += n.substr(i));
  }
  function D(e, t) {
    function l(e, t) {
      for (var n = 0; n < t.c.length; n++) if (t.c[n].bR.test(e)) return t.c[n];
    }
    function u(e, t) {
      if (h[e].e && h[e].eR.test(t)) return 1;
      if (h[e].eW) {
        var n = u(e - 1, t);
        return n ? n + 1 : 0;
      }
      return 0;
    }
    function c(e, t) {
      return t.iR && t.iR.test(e);
    }
    function a(e, t) {
      for (var n = [], r = 0; r < e.c.length; r++) n.push(e.c[r].b);
      for (var a = h.length - 1; h[a].e && n.push(h[a].e), h[--a + 1].eW; );
      return e.i && n.push(e.i), S(t, "(" + n.join("|") + ")", !0);
    }
    function n(e, t) {
      var n = h[h.length - 1];
      n.t || (n.t = a(n, s)), (n.t.lastIndex = t);
      var r = n.t.exec(e);
      return r ? [e.substr(t, r.index - t), r[0], !1] : [e.substr(t), "", !0];
    }
    function o(e, t) {
      var n = s.cI ? t[0].toLowerCase() : t[0];
      for (var r in e.kG)
        if (e.kG.hasOwnProperty(r)) {
          var a = e.kG[r].hasOwnProperty(n);
          if (a) return [r, a];
        }
      return !1;
    }
    function r(e, t) {
      if (!t.k) return x(e);
      var n = "",
        r = 0;
      t.lR.lastIndex = 0;
      for (var a = t.lR.exec(e); a; ) {
        n += x(e.substr(r, a.index - r));
        var i = o(t, a);
        i
          ? ((g += i[1]),
            (n += '<span class="' + i[0] + '">' + x(a[0]) + "</span>"))
          : (n += x(a[0])),
          (r = t.lR.lastIndex),
          (a = t.lR.exec(e));
      }
      return (n += x(e.substr(r, e.length - r)));
    }
    function f(e, t) {
      if (t.sL && T[t.sL]) {
        var n = D(t.sL, e);
        return (g += n.keyword_count), n.value;
      }
      return r(e, t);
    }
    function d(e, t) {
      var n = e.cN ? '<span class="' + e.cN + '">' : "";
      e.rB
        ? ((m += n), (e.buffer = ""))
        : e.eB
        ? ((m += x(t) + n), (e.buffer = ""))
        : ((m += n), (e.buffer = t)),
        h.push(e),
        (p += e.r);
    }
    function i(e, t, n) {
      var r = h[h.length - 1];
      if (n) return (m += f(r.buffer + e, r)), !1;
      var a = l(t, r);
      if (a) return (m += f(r.buffer + e, r)), d(a, t), a.rB;
      var i = u(h.length - 1, t);
      if (i) {
        var o = r.cN ? "</span>" : "";
        for (
          r.rE
            ? (m += f(r.buffer + e, r) + o)
            : r.eE
            ? (m += f(r.buffer + e, r) + o + x(t))
            : (m += f(r.buffer + e + t, r) + o);
          1 < i;

        )
          (o = h[h.length - 2].cN ? "</span>" : ""), (m += o), i--, h.length--;
        var s = h[h.length - 1];
        return (
          h.length--,
          (h[h.length - 1].buffer = ""),
          s.starts && d(s.starts, ""),
          r.rE
        );
      }
      if (c(t, r)) throw "Illegal";
    }
    var s = T[e],
      h = [s.dM],
      p = 0,
      g = 0,
      m = "";
    try {
      var v = 0;
      s.dM.buffer = "";
      do {
        var y = n(t, v),
          b = i(y[0], y[1], y[2]);
        (v += y[0].length), b || (v += y[1].length);
      } while (!y[2]);
      if (1 < h.length) throw "Illegal";
      return { language: e, r: p, keyword_count: g, value: m };
    } catch (w) {
      if ("Illegal" == w)
        return { language: null, r: 0, keyword_count: 0, value: x(t) };
      throw w;
    }
  }
  function e() {
    function i(e, t, n) {
      if (!e.compiled) {
        for (var r in (n ||
          ((e.bR = S(t, e.b ? e.b : "\\B|\\b")),
          e.e || e.eW || (e.e = "\\B|\\b"),
          e.e && (e.eR = S(t, e.e))),
        e.i && (e.iR = S(t, e.i)),
        e.r == undefined && (e.r = 1),
        e.k && (e.lR = S(t, e.l || hljs.IR, !0)),
        e.k))
          if (e.k.hasOwnProperty(r)) {
            e.k[r] instanceof Object ? (e.kG = e.k) : (e.kG = { keyword: e.k });
            break;
          }
        e.c || (e.c = []), (e.compiled = !0);
        for (var a = 0; a < e.c.length; a++) i(e.c[a], t, !1);
        e.starts && i(e.starts, t, !1);
      }
    }
    for (var e in T) T.hasOwnProperty(e) && i(T[e].dM, T[e], !0);
  }
  function v() {
    v.called || ((v.called = !0), e());
  }
  function a(e, n, t) {
    v();
    var r = h(e, t),
      a = p(e);
    if ("no-highlight" != a) {
      if (a) var i = D(a, r);
      else {
        var o = (i = { language: "", keyword_count: 0, r: 0, value: x(r) });
        for (var s in T)
          if (T.hasOwnProperty(s)) {
            var l = D(s, r);
            l.keyword_count + l.r > o.keyword_count + o.r && (o = l),
              l.keyword_count + l.r > i.keyword_count + i.r &&
                ((o = i), (i = l));
          }
      }
      var u = e.className;
      u.match(i.language) || (u = u ? u + " " + i.language : i.language);
      var c = g(e);
      if (c.length)
        ((f = document.createElement("pre")).innerHTML = i.value),
          (i.value = m(c, g(f), r));
      if (
        (n &&
          (i.value = i.value.replace(/^((<[^>]+>|\t)+)/gm, function (e, t) {
            return t.replace(/\t/g, n);
          })),
        t && (i.value = i.value.replace(/\n/g, "<br>")),
        /MSIE [678]/.test(navigator.userAgent) &&
          "CODE" == e.tagName &&
          "PRE" == e.parentNode.tagName)
      ) {
        var f = e.parentNode,
          d = document.createElement("div");
        (d.innerHTML = "<pre><code>" + i.value + "</code></pre>"),
          (e = d.firstChild.firstChild),
          (d.firstChild.cN = f.cN),
          f.parentNode.replaceChild(d.firstChild, f);
      } else e.innerHTML = i.value;
      (e.className = u),
        (e.dataset = {}),
        (e.dataset.result = {
          language: i.language,
          kw: i.keyword_count,
          re: i.r,
        }),
        o &&
          o.language &&
          (e.dataset.second_best = {
            language: o.language,
            kw: o.keyword_count,
            re: o.r,
          });
    }
  }
  function i() {
    if (!i.called) {
      (i.called = !0), v();
      for (
        var e = document.getElementsByTagName("pre"), t = 0;
        t < e.length;
        t++
      ) {
        var n = r(e[t]);
        n && a(n, hljs.tabReplace);
      }
    }
  }
  function t() {
    var e = arguments,
      t = function () {
        i.apply(null, e);
      };
    window.addEventListener
      ? (window.addEventListener("DOMContentLoaded", t, !1),
        window.addEventListener("load", t, !1))
      : window.attachEvent
      ? window.attachEvent("onload", t)
      : (window.onload = t);
  }
  var T = {};
  (this.LANGUAGES = T),
    (this.initHighlightingOnLoad = t),
    (this.highlightBlock = a),
    (this.initHighlighting = i),
    (this.IR = "[a-zA-Z][a-zA-Z0-9_]*"),
    (this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*"),
    (this.NR = "\\b\\d+(\\.\\d+)?"),
    (this.CNR = "\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)"),
    (this.RSR =
      "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
    (this.BE = { b: "\\\\.", r: 0 }),
    (this.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [this.BE], r: 0 }),
    (this.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [this.BE], r: 0 }),
    (this.CLCM = { cN: "comment", b: "//", e: "$" }),
    (this.CBLCLM = { cN: "comment", b: "/\\*", e: "\\*/" }),
    (this.HCM = { cN: "comment", b: "#", e: "$" }),
    (this.NM = { cN: "number", b: this.NR, r: 0 }),
    (this.CNM = { cN: "number", b: this.CNR, r: 0 }),
    (this.inherit = function (e, t) {
      var n = {};
      for (var r in e) n[r] = e[r];
      if (t) for (var r in t) n[r] = t[r];
      return n;
    });
})();
(hljs.LANGUAGES.ruby = (function () {
  var e = "[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",
    t =
      "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
    n = {
      keyword: {
        and: 1,
        false: 1,
        then: 1,
        defined: 1,
        module: 1,
        in: 1,
        return: 1,
        redo: 1,
        if: 1,
        BEGIN: 1,
        retry: 1,
        end: 1,
        for: 1,
        true: 1,
        self: 1,
        when: 1,
        next: 1,
        until: 1,
        do: 1,
        begin: 1,
        unless: 1,
        END: 1,
        rescue: 1,
        nil: 1,
        else: 1,
        break: 1,
        undef: 1,
        not: 1,
        super: 1,
        class: 1,
        case: 1,
        require: 1,
        yield: 1,
        alias: 1,
        while: 1,
        ensure: 1,
        elsif: 1,
        or: 1,
        def: 1,
      },
      keymethods: {
        __id__: 1,
        __send__: 1,
        abort: 1,
        abs: 1,
        "all?": 1,
        allocate: 1,
        ancestors: 1,
        "any?": 1,
        arity: 1,
        assoc: 1,
        at: 1,
        at_exit: 1,
        autoload: 1,
        "autoload?": 1,
        "between?": 1,
        binding: 1,
        binmode: 1,
        "block_given?": 1,
        call: 1,
        callcc: 1,
        caller: 1,
        capitalize: 1,
        "capitalize!": 1,
        casecmp: 1,
        catch: 1,
        ceil: 1,
        center: 1,
        chomp: 1,
        "chomp!": 1,
        chop: 1,
        "chop!": 1,
        chr: 1,
        class: 1,
        class_eval: 1,
        "class_variable_defined?": 1,
        class_variables: 1,
        clear: 1,
        clone: 1,
        close: 1,
        close_read: 1,
        close_write: 1,
        "closed?": 1,
        coerce: 1,
        collect: 1,
        "collect!": 1,
        compact: 1,
        "compact!": 1,
        concat: 1,
        "const_defined?": 1,
        const_get: 1,
        const_missing: 1,
        const_set: 1,
        constants: 1,
        count: 1,
        crypt: 1,
        default: 1,
        default_proc: 1,
        delete: 1,
        "delete!": 1,
        delete_at: 1,
        delete_if: 1,
        detect: 1,
        display: 1,
        div: 1,
        divmod: 1,
        downcase: 1,
        "downcase!": 1,
        downto: 1,
        dump: 1,
        dup: 1,
        each: 1,
        each_byte: 1,
        each_index: 1,
        each_key: 1,
        each_line: 1,
        each_pair: 1,
        each_value: 1,
        each_with_index: 1,
        "empty?": 1,
        entries: 1,
        eof: 1,
        "eof?": 1,
        "eql?": 1,
        "equal?": 1,
        eval: 1,
        exec: 1,
        exit: 1,
        "exit!": 1,
        extend: 1,
        fail: 1,
        fcntl: 1,
        fetch: 1,
        fileno: 1,
        fill: 1,
        find: 1,
        find_all: 1,
        first: 1,
        flatten: 1,
        "flatten!": 1,
        floor: 1,
        flush: 1,
        for_fd: 1,
        foreach: 1,
        fork: 1,
        format: 1,
        freeze: 1,
        "frozen?": 1,
        fsync: 1,
        getc: 1,
        gets: 1,
        global_variables: 1,
        grep: 1,
        gsub: 1,
        "gsub!": 1,
        "has_key?": 1,
        "has_value?": 1,
        hash: 1,
        hex: 1,
        id: 1,
        include: 1,
        "include?": 1,
        included_modules: 1,
        index: 1,
        indexes: 1,
        indices: 1,
        induced_from: 1,
        inject: 1,
        insert: 1,
        inspect: 1,
        instance_eval: 1,
        instance_method: 1,
        instance_methods: 1,
        "instance_of?": 1,
        "instance_variable_defined?": 1,
        instance_variable_get: 1,
        instance_variable_set: 1,
        instance_variables: 1,
        "integer?": 1,
        intern: 1,
        invert: 1,
        ioctl: 1,
        "is_a?": 1,
        isatty: 1,
        "iterator?": 1,
        join: 1,
        "key?": 1,
        keys: 1,
        "kind_of?": 1,
        lambda: 1,
        last: 1,
        length: 1,
        lineno: 1,
        ljust: 1,
        load: 1,
        local_variables: 1,
        loop: 1,
        lstrip: 1,
        "lstrip!": 1,
        map: 1,
        "map!": 1,
        match: 1,
        max: 1,
        "member?": 1,
        merge: 1,
        "merge!": 1,
        method: 1,
        "method_defined?": 1,
        method_missing: 1,
        methods: 1,
        min: 1,
        module_eval: 1,
        modulo: 1,
        name: 1,
        nesting: 1,
        new: 1,
        next: 1,
        "next!": 1,
        "nil?": 1,
        nitems: 1,
        "nonzero?": 1,
        object_id: 1,
        oct: 1,
        open: 1,
        pack: 1,
        partition: 1,
        pid: 1,
        pipe: 1,
        pop: 1,
        popen: 1,
        pos: 1,
        prec: 1,
        prec_f: 1,
        prec_i: 1,
        print: 1,
        printf: 1,
        private_class_method: 1,
        private_instance_methods: 1,
        "private_method_defined?": 1,
        private_methods: 1,
        proc: 1,
        protected_instance_methods: 1,
        "protected_method_defined?": 1,
        protected_methods: 1,
        public_class_method: 1,
        public_instance_methods: 1,
        "public_method_defined?": 1,
        public_methods: 1,
        push: 1,
        putc: 1,
        puts: 1,
        quo: 1,
        raise: 1,
        rand: 1,
        rassoc: 1,
        read: 1,
        read_nonblock: 1,
        readchar: 1,
        readline: 1,
        readlines: 1,
        readpartial: 1,
        rehash: 1,
        reject: 1,
        "reject!": 1,
        remainder: 1,
        reopen: 1,
        replace: 1,
        require: 1,
        "respond_to?": 1,
        reverse: 1,
        "reverse!": 1,
        reverse_each: 1,
        rewind: 1,
        rindex: 1,
        rjust: 1,
        round: 1,
        rstrip: 1,
        "rstrip!": 1,
        scan: 1,
        seek: 1,
        select: 1,
        send: 1,
        set_trace_func: 1,
        shift: 1,
        singleton_method_added: 1,
        singleton_methods: 1,
        size: 1,
        sleep: 1,
        slice: 1,
        "slice!": 1,
        sort: 1,
        "sort!": 1,
        sort_by: 1,
        split: 1,
        sprintf: 1,
        squeeze: 1,
        "squeeze!": 1,
        srand: 1,
        stat: 1,
        step: 1,
        store: 1,
        strip: 1,
        "strip!": 1,
        sub: 1,
        "sub!": 1,
        succ: 1,
        "succ!": 1,
        sum: 1,
        superclass: 1,
        swapcase: 1,
        "swapcase!": 1,
        sync: 1,
        syscall: 1,
        sysopen: 1,
        sysread: 1,
        sysseek: 1,
        system: 1,
        syswrite: 1,
        taint: 1,
        "tainted?": 1,
        tell: 1,
        test: 1,
        throw: 1,
        times: 1,
        to_a: 1,
        to_ary: 1,
        to_f: 1,
        to_hash: 1,
        to_i: 1,
        to_int: 1,
        to_io: 1,
        to_proc: 1,
        to_s: 1,
        to_str: 1,
        to_sym: 1,
        tr: 1,
        "tr!": 1,
        tr_s: 1,
        "tr_s!": 1,
        trace_var: 1,
        transpose: 1,
        trap: 1,
        truncate: 1,
        "tty?": 1,
        type: 1,
        ungetc: 1,
        uniq: 1,
        "uniq!": 1,
        unpack: 1,
        unshift: 1,
        untaint: 1,
        untrace_var: 1,
        upcase: 1,
        "upcase!": 1,
        update: 1,
        upto: 1,
        "value?": 1,
        values: 1,
        values_at: 1,
        warn: 1,
        write: 1,
        write_nonblock: 1,
        "zero?": 1,
        zip: 1,
      },
    },
    r = { cN: "yardoctag", b: "@[A-Za-z]+" },
    a = { cN: "comment", b: "#", e: "$", c: [r] },
    i = { cN: "comment", b: "^\\=begin", e: "^\\=end", c: [r], r: 10 },
    o = { cN: "comment", b: "^__END__", e: "\\n$" },
    s = { cN: "subst", b: "#\\{", e: "}", l: e, k: n },
    l = [hljs.BE, s],
    u = { cN: "string", b: "'", e: "'", c: l, r: 0 },
    c = { cN: "string", b: '"', e: '"', c: l, r: 0 },
    f = { cN: "string", b: "%[qw]?\\(", e: "\\)", c: l, r: 10 },
    d = { cN: "string", b: "%[qw]?\\[", e: "\\]", c: l, r: 10 },
    h = { cN: "string", b: "%[qw]?{", e: "}", c: l, r: 10 },
    p = { cN: "string", b: "%[qw]?<", e: ">", c: l, r: 10 },
    g = { cN: "string", b: "%[qw]?/", e: "/", c: l, r: 10 },
    m = { cN: "string", b: "%[qw]?%", e: "%", c: l, r: 10 },
    v = { cN: "string", b: "%[qw]?-", e: "-", c: l, r: 10 },
    y = { cN: "string", b: "%[qw]?\\|", e: "\\|", c: l, r: 10 },
    b = {
      cN: "function",
      b: "\\bdef\\s+",
      e: " |$|;",
      l: e,
      k: n,
      c: [
        { cN: "title", b: t, l: e, k: n },
        { cN: "params", b: "\\(", e: "\\)", l: e, k: n },
        a,
        i,
        o,
      ],
    },
    w = { cN: "identifier", b: e, l: e, k: n, r: 0 },
    x = [
      a,
      i,
      o,
      u,
      c,
      f,
      d,
      h,
      p,
      g,
      m,
      v,
      y,
      {
        cN: "class",
        b: "\\b(class|module)\\b",
        e: "$|;",
        k: { class: 1, module: 1 },
        c: [
          { cN: "title", b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?", r: 0 },
          {
            cN: "inheritance",
            b: "<\\s*",
            c: [{ cN: "parent", b: "(" + hljs.IR + "::)?" + hljs.IR }],
          },
          a,
          i,
          o,
        ],
      },
      b,
      { cN: "constant", b: "(::)?([A-Z]\\w*(::)?)+", r: 0 },
      { cN: "symbol", b: ":", c: [u, c, f, d, h, p, g, m, v, y, w], r: 0 },
      {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0,
      },
      { cN: "number", b: "\\?\\w" },
      { cN: "variable", b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))" },
      w,
      {
        b: "(" + hljs.RSR + ")\\s*",
        c: [
          a,
          i,
          o,
          { cN: "regexp", b: "/", e: "/[a-z]*", i: "\\n", c: [hljs.BE] },
        ],
        r: 0,
      },
    ];
  return (s.c = x), { dM: { l: e, k: n, c: (b.c[1].c = x) } };
})()),
  (function (c, s, o) {
    function l(e, t, n) {
      var r = s.createElement(e);
      return t && (r.id = te + t), n && (r.style.cssText = n), c(r);
    }
    function f() {
      return o.innerHeight ? o.innerHeight : c(o).height();
    }
    function u(e, n) {
      n !== Object(n) && (n = {}),
        (this.cache = {}),
        (this.el = e),
        (this.value = function (e) {
          var t;
          return (
            this.cache[e] === undefined &&
              ((t = c(this.el).attr("data-cbox-" + e)) !== undefined
                ? (this.cache[e] = t)
                : n[e] !== undefined
                ? (this.cache[e] = n[e])
                : Q[e] !== undefined && (this.cache[e] = Q[e])),
            this.cache[e]
          );
        }),
        (this.get = function (e) {
          var t = this.value(e);
          return c.isFunction(t) ? t.call(this.el, this) : t;
        });
    }
    function i(e) {
      var t = k.length,
        n = (X + e) % t;
      return n < 0 ? t + n : n;
    }
    function d(e, t) {
      return Math.round(
        (/%/.test(e) ? ("x" === t ? I.width() : f()) / 100 : 1) *
          parseInt(e, 10)
      );
    }
    function h(e, t) {
      return e.get("photo") || e.get("photoRegex").test(t);
    }
    function p(e, t) {
      return e.get("retinaUrl") && 1 < o.devicePixelRatio
        ? t.replace(e.get("photoRegex"), e.get("retinaSuffix"))
        : t;
    }
    function g(e) {
      "contains" in S[0] &&
        !S[0].contains(e.target) &&
        e.target !== x[0] &&
        (e.stopPropagation(), S.focus());
    }
    function m(e) {
      m.str !== e && (S.add(x).removeClass(m.str).addClass(e), (m.str = e));
    }
    function v(e) {
      (X = 0),
        e && !1 !== e && "nofollow" !== e
          ? ((k = c("." + ne).filter(function () {
              return new u(this, c.data(this, ee)).get("rel") === e;
            })),
            -1 === (X = k.index(W.el)) &&
              ((k = k.add(W.el)), (X = k.length - 1)))
          : (k = c(W.el));
    }
    function y(e) {
      c(s).trigger(e), ue.triggerHandler(e);
    }
    function r(e) {
      var t;
      if (!Y) {
        if (((t = c(e).data(ee)), v((W = new u(e, t)).get("rel")), !G)) {
          (G = J = !0),
            m(W.get("className")),
            S.css({ visibility: "hidden", display: "block", opacity: "" }),
            (j = l(
              ce,
              "LoadedContent",
              "width:0; height:0; overflow:hidden; visibility:hidden"
            )),
            T.css({ width: "", height: "" }).append(j),
            (B = C.height() + N.height() + T.outerHeight(!0) - T.height()),
            ($ = _.width() + A.width() + T.outerWidth(!0) - T.width()),
            (U = j.outerHeight(!0)),
            (z = j.outerWidth(!0));
          var n = d(W.get("initialWidth"), "x"),
            r = d(W.get("initialHeight"), "y"),
            a = W.get("maxWidth"),
            i = W.get("maxHeight");
          (W.w = Math.max((!1 !== a ? Math.min(n, d(a, "x")) : n) - z - $, 0)),
            (W.h = Math.max(
              (!1 !== i ? Math.min(r, d(i, "y")) : r) - U - B,
              0
            )),
            j.css({ width: "", height: W.h }),
            K.position(),
            y(re),
            W.get("onOpen"),
            q.add(R).hide(),
            S.focus(),
            W.get("trapFocus") &&
              s.addEventListener &&
              (s.addEventListener("focus", g, !0),
              ue.one(se, function () {
                s.removeEventListener("focus", g, !0);
              })),
            W.get("returnFocus") &&
              ue.one(se, function () {
                c(W.el).focus();
              });
        }
        var o = parseFloat(W.get("opacity"));
        x
          .css({
            opacity: o == o ? o : "",
            cursor: W.get("overlayClose") ? "pointer" : "",
            visibility: "visible",
          })
          .show(),
          W.get("closeButton")
            ? O.html(W.get("close")).appendTo(T)
            : O.appendTo("<div/>"),
          w();
      }
    }
    function a() {
      S ||
        ((t = !1),
        (I = c(o)),
        (S = l(ce)
          .attr({
            id: ee,
            class: !1 === c.support.opacity ? te + "IE" : "",
            role: "dialog",
            tabindex: "-1",
          })
          .hide()),
        (x = l(ce, "Overlay").hide()),
        (E = c([l(ce, "LoadingOverlay")[0], l(ce, "LoadingGraphic")[0]])),
        (D = l(ce, "Wrapper")),
        (T = l(ce, "Content").append(
          (R = l(ce, "Title")),
          (F = l(ce, "Current")),
          (M = c('<button type="button"/>').attr({ id: te + "Previous" })),
          (H = c('<button type="button"/>').attr({ id: te + "Next" })),
          (P = c('<button type="button"/>').attr({ id: te + "Slideshow" })),
          E
        )),
        (O = c('<button type="button"/>').attr({ id: te + "Close" })),
        D.append(
          l(ce).append(
            l(ce, "TopLeft"),
            (C = l(ce, "TopCenter")),
            l(ce, "TopRight")
          ),
          l(ce, !1, "clear:left").append(
            (_ = l(ce, "MiddleLeft")),
            T,
            (A = l(ce, "MiddleRight"))
          ),
          l(ce, !1, "clear:left").append(
            l(ce, "BottomLeft"),
            (N = l(ce, "BottomCenter")),
            l(ce, "BottomRight")
          )
        )
          .find("div div")
          .css({ float: "left" }),
        (L = l(
          ce,
          !1,
          "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"
        )),
        (q = H.add(M).add(F).add(P))),
        s.body && !S.parent().length && c(s.body).append(x, S.append(D, L));
    }
    function b() {
      function e(e) {
        1 < e.which ||
          e.shiftKey ||
          e.altKey ||
          e.metaKey ||
          e.ctrlKey ||
          (e.preventDefault(), r(this));
      }
      return (
        !!S &&
        (t ||
          ((t = !0),
          H.click(function () {
            K.next();
          }),
          M.click(function () {
            K.prev();
          }),
          O.click(function () {
            K.close();
          }),
          x.click(function () {
            W.get("overlayClose") && K.close();
          }),
          c(s).bind("keydown." + te, function (e) {
            var t = e.keyCode;
            G && W.get("escKey") && 27 === t && (e.preventDefault(), K.close()),
              G &&
                W.get("arrowKey") &&
                k[1] &&
                !e.altKey &&
                (37 === t
                  ? (e.preventDefault(), M.click())
                  : 39 === t && (e.preventDefault(), H.click()));
          }),
          c.isFunction(c.fn.on)
            ? c(s).on("click." + te, "." + ne, e)
            : c("." + ne).live("click." + te, e)),
        !0)
      );
    }
    function w() {
      var e,
        t,
        n,
        r = K.prep,
        a = ++fe;
      if (
        ((V = !(J = !0)),
        y(le),
        y(ae),
        W.get("onLoad"),
        (W.h = W.get("height")
          ? d(W.get("height"), "y") - U - B
          : W.get("innerHeight") && d(W.get("innerHeight"), "y")),
        (W.w = W.get("width")
          ? d(W.get("width"), "x") - z - $
          : W.get("innerWidth") && d(W.get("innerWidth"), "x")),
        (W.mw = W.w),
        (W.mh = W.h),
        W.get("maxWidth") &&
          ((W.mw = d(W.get("maxWidth"), "x") - z - $),
          (W.mw = W.w && W.w < W.mw ? W.w : W.mw)),
        W.get("maxHeight") &&
          ((W.mh = d(W.get("maxHeight"), "y") - U - B),
          (W.mh = W.h && W.h < W.mh ? W.h : W.mh)),
        (e = W.get("href")),
        (Z = setTimeout(function () {
          E.show();
        }, 100)),
        W.get("inline"))
      ) {
        var i = c(e).eq(0);
        (n = c("<div>").hide().insertBefore(i)),
          ue.one(le, function () {
            n.replaceWith(i);
          }),
          r(i);
      } else
        W.get("iframe")
          ? r(" ")
          : W.get("html")
          ? r(W.get("html"))
          : h(W, e)
          ? ((e = p(W, e)),
            (V = W.get("createImg")),
            c(V)
              .addClass(te + "Photo")
              .bind("error." + te, function () {
                r(l(ce, "Error").html(W.get("imgError")));
              })
              .one("load", function () {
                a === fe &&
                  setTimeout(function () {
                    var e;
                    W.get("retinaImage") &&
                      1 < o.devicePixelRatio &&
                      ((V.height = V.height / o.devicePixelRatio),
                      (V.width = V.width / o.devicePixelRatio)),
                      W.get("scalePhotos") &&
                        ((t = function () {
                          (V.height -= V.height * e), (V.width -= V.width * e);
                        }),
                        W.mw &&
                          V.width > W.mw &&
                          ((e = (V.width - W.mw) / V.width), t()),
                        W.mh &&
                          V.height > W.mh &&
                          ((e = (V.height - W.mh) / V.height), t())),
                      W.h &&
                        (V.style.marginTop =
                          Math.max(W.mh - V.height, 0) / 2 + "px"),
                      k[1] &&
                        (W.get("loop") || k[X + 1]) &&
                        ((V.style.cursor = "pointer"),
                        c(V).bind("click." + te, function () {
                          K.next();
                        })),
                      (V.style.width = V.width + "px"),
                      (V.style.height = V.height + "px"),
                      r(V);
                  }, 1);
              }),
            (V.src = e))
          : e &&
            L.load(e, W.get("data"), function (e, t) {
              a === fe &&
                r(
                  "error" === t
                    ? l(ce, "Error").html(W.get("xhrError"))
                    : c(this).contents()
                );
            });
    }
    var x,
      S,
      D,
      T,
      C,
      _,
      A,
      N,
      k,
      I,
      j,
      L,
      E,
      R,
      F,
      P,
      H,
      M,
      O,
      q,
      W,
      B,
      $,
      U,
      z,
      X,
      V,
      G,
      J,
      Y,
      Z,
      K,
      t,
      Q = {
        html: !1,
        photo: !1,
        iframe: !1,
        inline: !1,
        transition: "elastic",
        speed: 300,
        fadeOut: 300,
        width: !1,
        initialWidth: "600",
        innerWidth: !1,
        maxWidth: !1,
        height: !1,
        initialHeight: "450",
        innerHeight: !1,
        maxHeight: !1,
        scalePhotos: !0,
        scrolling: !0,
        opacity: 0.9,
        preloading: !0,
        className: !1,
        overlayClose: !0,
        escKey: !0,
        arrowKey: !0,
        top: !1,
        bottom: !1,
        left: !1,
        right: !1,
        fixed: !1,
        data: undefined,
        closeButton: !0,
        fastIframe: !0,
        open: !1,
        reposition: !0,
        loop: !0,
        slideshow: !1,
        slideshowAuto: !0,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
        retinaImage: !1,
        retinaUrl: !1,
        retinaSuffix: "@2x.$1",
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        xhrError: "This content failed to load.",
        imgError: "This image failed to load.",
        returnFocus: !0,
        trapFocus: !0,
        onOpen: !1,
        onLoad: !1,
        onComplete: !1,
        onCleanup: !1,
        onClosed: !1,
        rel: function () {
          return this.rel;
        },
        href: function () {
          return c(this).attr("href");
        },
        title: function () {
          return this.title;
        },
        createImg: function () {
          var n = new Image(),
            e = c(this).data("cbox-img-attrs");
          return (
            "object" == typeof e &&
              c.each(e, function (e, t) {
                n[e] = t;
              }),
            n
          );
        },
        createIframe: function () {
          var n = s.createElement("iframe"),
            e = c(this).data("cbox-iframe-attrs");
          return (
            "object" == typeof e &&
              c.each(e, function (e, t) {
                n[e] = t;
              }),
            "frameBorder" in n && (n.frameBorder = 0),
            "allowTransparency" in n && (n.allowTransparency = "true"),
            (n.name = new Date().getTime()),
            (n.allowFullscreen = !0),
            n
          );
        },
      },
      ee = "colorbox",
      te = "cbox",
      ne = te + "Element",
      re = te + "_open",
      ae = te + "_load",
      ie = te + "_complete",
      oe = te + "_cleanup",
      se = te + "_closed",
      le = te + "_purge",
      ue = c("<a/>"),
      ce = "div",
      fe = 0,
      de = {},
      he = (function () {
        function e() {
          clearTimeout(o);
        }
        function t() {
          (W.get("loop") || k[X + 1]) &&
            (e(), (o = setTimeout(K.next, W.get("slideshowSpeed"))));
        }
        function n() {
          P.html(W.get("slideshowStop")).unbind(l).one(l, r),
            ue.bind(ie, t).bind(ae, e),
            S.removeClass(s + "off").addClass(s + "on");
        }
        function r() {
          e(),
            ue.unbind(ie, t).unbind(ae, e),
            P.html(W.get("slideshowStart"))
              .unbind(l)
              .one(l, function () {
                K.next(), n();
              }),
            S.removeClass(s + "on").addClass(s + "off");
        }
        function a() {
          (i = !1),
            P.hide(),
            e(),
            ue.unbind(ie, t).unbind(ae, e),
            S.removeClass(s + "off " + s + "on");
        }
        var i,
          o,
          s = te + "Slideshow_",
          l = "click." + te;
        return function () {
          i
            ? W.get("slideshow") || (ue.unbind(oe, a), a())
            : W.get("slideshow") &&
              k[1] &&
              ((i = !0),
              ue.one(oe, a),
              W.get("slideshowAuto") ? n() : r(),
              P.show());
        };
      })();
    c[ee] ||
      (c(a),
      ((K =
        c.fn[ee] =
        c[ee] =
          function (t, e) {
            var n = this;
            return (
              (t = t || {}),
              c.isFunction(n) && ((n = c("<a/>")), (t.open = !0)),
              n[0] &&
                (a(),
                b() &&
                  (e && (t.onComplete = e),
                  n
                    .each(function () {
                      var e = c.data(this, ee) || {};
                      c.data(this, ee, c.extend(e, t));
                    })
                    .addClass(ne),
                  new u(n[0], t).get("open") && r(n[0]))),
              n
            );
          }).position = function (t, e) {
        function n() {
          (C[0].style.width =
            N[0].style.width =
            T[0].style.width =
              parseInt(S[0].style.width, 10) - $ + "px"),
            (T[0].style.height =
              _[0].style.height =
              A[0].style.height =
                parseInt(S[0].style.height, 10) - B + "px");
        }
        var r,
          a,
          i,
          o = 0,
          s = 0,
          l = S.offset();
        if (
          (I.unbind("resize." + te),
          S.css({ top: -9e4, left: -9e4 }),
          (a = I.scrollTop()),
          (i = I.scrollLeft()),
          W.get("fixed")
            ? ((l.top -= a), (l.left -= i), S.css({ position: "fixed" }))
            : ((o = a), (s = i), S.css({ position: "absolute" })),
          !1 !== W.get("right")
            ? (s += Math.max(
                I.width() - W.w - z - $ - d(W.get("right"), "x"),
                0
              ))
            : !1 !== W.get("left")
            ? (s += d(W.get("left"), "x"))
            : (s += Math.round(Math.max(I.width() - W.w - z - $, 0) / 2)),
          !1 !== W.get("bottom")
            ? (o += Math.max(f() - W.h - U - B - d(W.get("bottom"), "y"), 0))
            : !1 !== W.get("top")
            ? (o += d(W.get("top"), "y"))
            : (o += Math.round(Math.max(f() - W.h - U - B, 0) / 2)),
          S.css({ top: l.top, left: l.left, visibility: "visible" }),
          (D[0].style.width = D[0].style.height = "9999px"),
          (r = { width: W.w + z + $, height: W.h + U + B, top: o, left: s }),
          t)
        ) {
          var u = 0;
          c.each(r, function (e) {
            r[e] === de[e] || (u = t);
          }),
            (t = u);
        }
        (de = r),
          t || S.css(r),
          S.dequeue().animate(r, {
            duration: t || 0,
            complete: function () {
              n(),
                (J = !1),
                (D[0].style.width = W.w + z + $ + "px"),
                (D[0].style.height = W.h + U + B + "px"),
                W.get("reposition") &&
                  setTimeout(function () {
                    I.bind("resize." + te, K.position);
                  }, 1),
                c.isFunction(e) && e();
            },
            step: n,
          });
      }),
      (K.resize = function (e) {
        var t;
        G &&
          ((e = e || {}).width && (W.w = d(e.width, "x") - z - $),
          e.innerWidth && (W.w = d(e.innerWidth, "x")),
          j.css({ width: W.w }),
          e.height && (W.h = d(e.height, "y") - U - B),
          e.innerHeight && (W.h = d(e.innerHeight, "y")),
          e.innerHeight ||
            e.height ||
            ((t = j.scrollTop()),
            j.css({ height: "auto" }),
            (W.h = j.height())),
          j.css({ height: W.h }),
          t && j.scrollTop(t),
          K.position("none" === W.get("transition") ? 0 : W.get("speed")));
      }),
      (K.prep = function (e) {
        function t() {
          return (
            (W.w = W.w || j.width()),
            (W.w = W.mw && W.mw < W.w ? W.mw : W.w),
            W.w
          );
        }
        function n() {
          return (
            (W.h = W.h || j.height()),
            (W.h = W.mh && W.mh < W.h ? W.mh : W.h),
            W.h
          );
        }
        if (G) {
          var r,
            a = "none" === W.get("transition") ? 0 : W.get("speed");
          j.remove(),
            (j = l(ce, "LoadedContent").append(e))
              .hide()
              .appendTo(L.show())
              .css({
                width: t(),
                overflow: W.get("scrolling") ? "auto" : "hidden",
              })
              .css({ height: n() })
              .prependTo(T),
            L.hide(),
            c(V).css({ float: "none" }),
            m(W.get("className")),
            (r = function () {
              function e() {
                !1 === c.support.opacity &&
                  S[0].style.removeAttribute("filter");
              }
              var t,
                n,
                r = k.length;
              G &&
                ((n = function () {
                  clearTimeout(Z), E.hide(), y(ie), W.get("onComplete");
                }),
                R.html(W.get("title")).show(),
                j.show(),
                1 < r
                  ? ("string" == typeof W.get("current") &&
                      F.html(
                        W.get("current")
                          .replace("{current}", X + 1)
                          .replace("{total}", r)
                      ).show(),
                    H[W.get("loop") || X < r - 1 ? "show" : "hide"]().html(
                      W.get("next")
                    ),
                    M[W.get("loop") || X ? "show" : "hide"]().html(
                      W.get("previous")
                    ),
                    he(),
                    W.get("preloading") &&
                      c.each([i(-1), i(1)], function () {
                        var e = k[this],
                          t = new u(e, c.data(e, ee)),
                          n = t.get("href");
                        n &&
                          h(t, n) &&
                          ((n = p(t, n)), (s.createElement("img").src = n));
                      }))
                  : q.hide(),
                W.get("iframe")
                  ? ((t = W.get("createIframe")),
                    W.get("scrolling") || (t.scrolling = "no"),
                    c(t)
                      .attr({ src: W.get("href"), class: te + "Iframe" })
                      .one("load", n)
                      .appendTo(j),
                    ue.one(le, function () {
                      t.src = "//about:blank";
                    }),
                    W.get("fastIframe") && c(t).trigger("load"))
                  : n(),
                "fade" === W.get("transition") ? S.fadeTo(a, 1, e) : e());
            }),
            "fade" === W.get("transition")
              ? S.fadeTo(a, 0, function () {
                  K.position(0, r);
                })
              : K.position(a, r);
        }
      }),
      (K.next = function () {
        !J && k[1] && (W.get("loop") || k[X + 1]) && ((X = i(1)), r(k[X]));
      }),
      (K.prev = function () {
        !J && k[1] && (W.get("loop") || X) && ((X = i(-1)), r(k[X]));
      }),
      (K.close = function () {
        G &&
          !Y &&
          ((G = !(Y = !0)),
          y(oe),
          W.get("onCleanup"),
          I.unbind("." + te),
          x.fadeTo(W.get("fadeOut") || 0, 0),
          S.stop().fadeTo(W.get("fadeOut") || 0, 0, function () {
            S.hide(),
              x.hide(),
              y(le),
              j.remove(),
              setTimeout(function () {
                (Y = !1), y(se), W.get("onClosed");
              }, 1);
          }));
      }),
      (K.remove = function () {
        S &&
          (S.stop(),
          c[ee].close(),
          S.stop(!1, !0).remove(),
          x.remove(),
          (Y = !1),
          (S = null),
          c("." + ne)
            .removeData(ee)
            .removeClass(ne),
          c(s)
            .unbind("click." + te)
            .unbind("keydown." + te));
      }),
      (K.element = function () {
        return c(W.el);
      }),
      (K.settings = Q));
  })(jQuery, document, window),
  (function (n) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return n(e, window, document);
        })
      : "object" == typeof exports
      ? (module.exports = function (e, t) {
          return (
            e || (e = window),
            t ||
              (t =
                "undefined" != typeof window
                  ? require("jquery")
                  : require("jquery")(e)),
            n(t, e, e.document)
          );
        })
      : n(jQuery, window, document);
  })(function (B, N, w, $) {
    "use strict";
    function o(t) {
      var n,
        r,
        a = "a aa ai ao as b fn i m o s ",
        i = {};
      B.each(t, function (e) {
        (n = e.match(/^([^A-Z]+?)([A-Z])/)) &&
          -1 !== a.indexOf(n[1] + " ") &&
          ((r = e.replace(n[0], n[2].toLowerCase())),
          (i[r] = e),
          "o" === n[1] && o(t[e]));
      }),
        (t._hungarianMap = i);
    }
    function A(t, n, r) {
      var a;
      t._hungarianMap || o(t),
        B.each(n, function (e) {
          (a = t._hungarianMap[e]) === $ ||
            (!r && n[a] !== $) ||
            ("o" === a.charAt(0)
              ? (n[a] || (n[a] = {}),
                B.extend(!0, n[a], n[e]),
                A(t[a], n[a], r))
              : (n[a] = n[e]));
        });
    }
    function k(e) {
      var t = Ge.defaults.oLanguage,
        n = t.sDecimal;
      if ((n && Be(n), e)) {
        var r = e.sZeroRecords;
        !e.sEmptyTable &&
          r &&
          "No data available in table" === t.sEmptyTable &&
          Ee(e, e, "sZeroRecords", "sEmptyTable"),
          !e.sLoadingRecords &&
            r &&
            "Loading..." === t.sLoadingRecords &&
            Ee(e, e, "sZeroRecords", "sLoadingRecords"),
          e.sInfoThousands && (e.sThousands = e.sInfoThousands);
        var a = e.sDecimal;
        a && n !== a && Be(a);
      }
    }
    function I(e) {
      pt(e, "ordering", "bSort"),
        pt(e, "orderMulti", "bSortMulti"),
        pt(e, "orderClasses", "bSortClasses"),
        pt(e, "orderCellsTop", "bSortCellsTop"),
        pt(e, "order", "aaSorting"),
        pt(e, "orderFixed", "aaSortingFixed"),
        pt(e, "paging", "bPaginate"),
        pt(e, "pagingType", "sPaginationType"),
        pt(e, "pageLength", "iDisplayLength"),
        pt(e, "searching", "bFilter"),
        "boolean" == typeof e.sScrollX &&
          (e.sScrollX = e.sScrollX ? "100%" : ""),
        "boolean" == typeof e.scrollX && (e.scrollX = e.scrollX ? "100%" : "");
      var t = e.aoSearchCols;
      if (t)
        for (var n = 0, r = t.length; n < r; n++)
          t[n] && A(Ge.models.oSearch, t[n]);
    }
    function j(e) {
      pt(e, "orderable", "bSortable"),
        pt(e, "orderData", "aDataSort"),
        pt(e, "orderSequence", "asSorting"),
        pt(e, "orderDataType", "sortDataType");
      var t = e.aDataSort;
      "number" != typeof t || B.isArray(t) || (e.aDataSort = [t]);
    }
    function L(e) {
      if (!Ge.__browser) {
        var t = {};
        Ge.__browser = t;
        var n = B("<div/>")
            .css({
              position: "fixed",
              top: 0,
              left: -1 * B(N).scrollLeft(),
              height: 1,
              width: 1,
              overflow: "hidden",
            })
            .append(
              B("<div/>")
                .css({
                  position: "absolute",
                  top: 1,
                  left: 1,
                  width: 100,
                  overflow: "scroll",
                })
                .append(B("<div/>").css({ width: "100%", height: 10 }))
            )
            .appendTo("body"),
          r = n.children(),
          a = r.children();
        (t.barWidth = r[0].offsetWidth - r[0].clientWidth),
          (t.bScrollOversize =
            100 === a[0].offsetWidth && 100 !== r[0].clientWidth),
          (t.bScrollbarLeft = 1 !== Math.round(a.offset().left)),
          (t.bBounding = !!n[0].getBoundingClientRect().width),
          n.remove();
      }
      B.extend(e.oBrowser, Ge.__browser),
        (e.oScroll.iBarWidth = Ge.__browser.barWidth);
    }
    function n(e, t, n, r, a, i) {
      var o,
        s = r,
        l = !1;
      for (n !== $ && ((o = n), (l = !0)); s !== a; )
        e.hasOwnProperty(s) &&
          ((o = l ? t(o, e[s], s, e) : e[s]), (l = !0), (s += i));
      return o;
    }
    function E(e, t) {
      var n = Ge.defaults.column,
        r = e.aoColumns.length,
        a = B.extend({}, Ge.models.oColumn, n, {
          nTh: t || w.createElement("th"),
          sTitle: n.sTitle ? n.sTitle : t ? t.innerHTML : "",
          aDataSort: n.aDataSort ? n.aDataSort : [r],
          mData: n.mData ? n.mData : r,
          idx: r,
        });
      e.aoColumns.push(a);
      var i = e.aoPreSearchCols;
      (i[r] = B.extend({}, Ge.models.oSearch, i[r])), R(e, r, B(t).data());
    }
    function R(e, t, n) {
      var r = e.aoColumns[t],
        a = e.oClasses,
        i = B(r.nTh);
      if (!r.sWidthOrig) {
        r.sWidthOrig = i.attr("width") || null;
        var o = (i.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
        o && (r.sWidthOrig = o[1]);
      }
      n !== $ &&
        null !== n &&
        (j(n),
        A(Ge.defaults.column, n, !0),
        n.mDataProp === $ || n.mData || (n.mData = n.mDataProp),
        n.sType && (r._sManualType = n.sType),
        n.className && !n.sClass && (n.sClass = n.className),
        n.sClass && i.addClass(n.sClass),
        B.extend(r, n),
        Ee(r, n, "sWidth", "sWidthOrig"),
        n.iDataSort !== $ && (r.aDataSort = [n.iDataSort]),
        Ee(r, n, "aDataSort"));
      var s = r.mData,
        l = q(s),
        u = r.mRender ? q(r.mRender) : null,
        c = function (e) {
          return "string" == typeof e && -1 !== e.indexOf("@");
        };
      (r._bAttrSrc =
        B.isPlainObject(s) && (c(s.sort) || c(s.type) || c(s.filter))),
        (r._setter = null),
        (r.fnGetData = function (e, t, n) {
          var r = l(e, t, $, n);
          return u && t ? u(r, t, e, n) : r;
        }),
        (r.fnSetData = function (e, t, n) {
          return y(s)(e, t, n);
        }),
        "number" != typeof s && (e._rowReadObject = !0),
        e.oFeatures.bSort || ((r.bSortable = !1), i.addClass(a.sSortableNone));
      var f = -1 !== B.inArray("asc", r.asSorting),
        d = -1 !== B.inArray("desc", r.asSorting);
      r.bSortable && (f || d)
        ? f && !d
          ? ((r.sSortingClass = a.sSortableAsc),
            (r.sSortingClassJUI = a.sSortJUIAscAllowed))
          : !f && d
          ? ((r.sSortingClass = a.sSortableDesc),
            (r.sSortingClassJUI = a.sSortJUIDescAllowed))
          : ((r.sSortingClass = a.sSortable), (r.sSortingClassJUI = a.sSortJUI))
        : ((r.sSortingClass = a.sSortableNone), (r.sSortingClassJUI = ""));
    }
    function U(e) {
      if (!1 !== e.oFeatures.bAutoWidth) {
        var t = e.aoColumns;
        ve(e);
        for (var n = 0, r = t.length; n < r; n++)
          t[n].nTh.style.width = t[n].sWidth;
      }
      var a = e.oScroll;
      ("" === a.sY && "" === a.sX) || ge(e), He(e, null, "column-sizing", [e]);
    }
    function z(e, t) {
      var n = P(e, "bVisible");
      return "number" == typeof n[t] ? n[t] : null;
    }
    function c(e, t) {
      var n = P(e, "bVisible"),
        r = B.inArray(t, n);
      return -1 !== r ? r : null;
    }
    function F(e) {
      var n = 0;
      return (
        B.each(e.aoColumns, function (e, t) {
          t.bVisible && "none" !== B(t.nTh).css("display") && n++;
        }),
        n
      );
    }
    function P(e, n) {
      var r = [];
      return (
        B.map(e.aoColumns, function (e, t) {
          e[n] && r.push(t);
        }),
        r
      );
    }
    function l(e) {
      var t,
        n,
        r,
        a,
        i,
        o,
        s,
        l,
        u,
        c = e.aoColumns,
        f = e.aoData,
        d = Ge.ext.type.detect;
      for (t = 0, n = c.length; t < n; t++)
        if (((u = []), !(s = c[t]).sType && s._sManualType))
          s.sType = s._sManualType;
        else if (!s.sType) {
          for (r = 0, a = d.length; r < a; r++) {
            for (
              i = 0, o = f.length;
              i < o &&
              (u[i] === $ && (u[i] = g(e, i, t, "type")),
              (l = d[r](u[i], e)) || r === d.length - 1) &&
              "html" !== l;
              i++
            );
            if (l) {
              s.sType = l;
              break;
            }
          }
          s.sType || (s.sType = "string");
        }
    }
    function H(e, t, n, r) {
      var a,
        i,
        o,
        s,
        l,
        u,
        c,
        f = e.aoColumns;
      if (t)
        for (a = t.length - 1; 0 <= a; a--) {
          var d = (c = t[a]).targets !== $ ? c.targets : c.aTargets;
          for (B.isArray(d) || (d = [d]), o = 0, s = d.length; o < s; o++)
            if ("number" == typeof d[o] && 0 <= d[o]) {
              for (; f.length <= d[o]; ) E(e);
              r(d[o], c);
            } else if ("number" == typeof d[o] && d[o] < 0)
              r(f.length + d[o], c);
            else if ("string" == typeof d[o])
              for (l = 0, u = f.length; l < u; l++)
                ("_all" == d[o] || B(f[l].nTh).hasClass(d[o])) && r(l, c);
        }
      if (n) for (a = 0, i = n.length; a < i; a++) r(a, n[a]);
    }
    function M(e, t, n, r) {
      var a = e.aoData.length,
        i = B.extend(!0, {}, Ge.models.oRow, {
          src: n ? "dom" : "data",
          idx: a,
        });
      (i._aData = t), e.aoData.push(i);
      for (var o = e.aoColumns, s = 0, l = o.length; s < l; s++)
        o[s].sType = null;
      e.aiDisplayMaster.push(a);
      var u = e.rowIdFn(t);
      return (
        u !== $ && (e.aIds[u] = i),
        (!n && e.oFeatures.bDeferRender) || S(e, a, n, r),
        a
      );
    }
    function O(n, e) {
      var r;
      return (
        e instanceof B || (e = B(e)),
        e.map(function (e, t) {
          return (r = f(n, t)), M(n, r.data, t, r.cells);
        })
      );
    }
    function e(e, t) {
      return t._DT_RowIndex !== $ ? t._DT_RowIndex : null;
    }
    function t(e, t, n) {
      return B.inArray(n, e.aoData[t].anCells);
    }
    function g(e, t, n, r) {
      var a = e.iDraw,
        i = e.aoColumns[n],
        o = e.aoData[t]._aData,
        s = i.sDefaultContent,
        l = i.fnGetData(o, r, { settings: e, row: t, col: n });
      if (l === $)
        return (
          e.iDrawError != a &&
            null === s &&
            (Le(
              e,
              0,
              "Requested unknown parameter " +
                ("function" == typeof i.mData
                  ? "{function}"
                  : "'" + i.mData + "'") +
                " for row " +
                t +
                ", column " +
                n,
              4
            ),
            (e.iDrawError = a)),
          s
        );
      if ((l !== o && null !== l) || null === s || r === $) {
        if ("function" == typeof l) return l.call(o);
      } else l = s;
      return null === l && "display" == r ? "" : l;
    }
    function r(e, t, n, r) {
      var a = e.aoColumns[n],
        i = e.aoData[t]._aData;
      a.fnSetData(i, r, { settings: e, row: t, col: n });
    }
    function m(e) {
      return B.map(e.match(/(\\.|[^\.])+/g) || [""], function (e) {
        return e.replace(/\\\./g, ".");
      });
    }
    function q(a) {
      if (B.isPlainObject(a)) {
        var i = {};
        return (
          B.each(a, function (e, t) {
            t && (i[e] = q(t));
          }),
          function (e, t, n, r) {
            var a = i[t] || i._;
            return a !== $ ? a(e, t, n, r) : e;
          }
        );
      }
      if (null === a)
        return function (e) {
          return e;
        };
      if ("function" == typeof a)
        return function (e, t, n, r) {
          return a(e, t, n, r);
        };
      if (
        "string" != typeof a ||
        (-1 === a.indexOf(".") &&
          -1 === a.indexOf("[") &&
          -1 === a.indexOf("("))
      )
        return function (e) {
          return e[a];
        };
      var h = function (e, t, n) {
        var r, a, i, o;
        if ("" !== n)
          for (var s = m(n), l = 0, u = s.length; l < u; l++) {
            if (((r = s[l].match(gt)), (a = s[l].match(mt)), r)) {
              if (
                ((s[l] = s[l].replace(gt, "")),
                "" !== s[l] && (e = e[s[l]]),
                (i = []),
                s.splice(0, l + 1),
                (o = s.join(".")),
                B.isArray(e))
              )
                for (var c = 0, f = e.length; c < f; c++) i.push(h(e[c], t, o));
              var d = r[0].substring(1, r[0].length - 1);
              e = "" === d ? i : i.join(d);
              break;
            }
            if (a) (s[l] = s[l].replace(mt, "")), (e = e[s[l]]());
            else {
              if (null === e || e[s[l]] === $) return $;
              e = e[s[l]];
            }
          }
        return e;
      };
      return function (e, t) {
        return h(e, t, a);
      };
    }
    function y(r) {
      if (B.isPlainObject(r)) return y(r._);
      if (null === r) return function () {};
      if ("function" == typeof r)
        return function (e, t, n) {
          r(e, "set", t, n);
        };
      if (
        "string" != typeof r ||
        (-1 === r.indexOf(".") &&
          -1 === r.indexOf("[") &&
          -1 === r.indexOf("("))
      )
        return function (e, t) {
          e[r] = t;
        };
      var p = function (e, t, n) {
        for (
          var r,
            a,
            i,
            o,
            s,
            l = m(n),
            u = l[l.length - 1],
            c = 0,
            f = l.length - 1;
          c < f;
          c++
        ) {
          if (((a = l[c].match(gt)), (i = l[c].match(mt)), a)) {
            if (
              ((l[c] = l[c].replace(gt, "")),
              (e[l[c]] = []),
              (r = l.slice()).splice(0, c + 1),
              (s = r.join(".")),
              B.isArray(t))
            )
              for (var d = 0, h = t.length; d < h; d++)
                p((o = {}), t[d], s), e[l[c]].push(o);
            else e[l[c]] = t;
            return;
          }
          i && ((l[c] = l[c].replace(mt, "")), (e = e[l[c]](t))),
            (null !== e[l[c]] && e[l[c]] !== $) || (e[l[c]] = {}),
            (e = e[l[c]]);
        }
        u.match(mt)
          ? (e = e[u.replace(mt, "")](t))
          : (e[u.replace(gt, "")] = t);
      };
      return function (e, t) {
        return p(e, t, r);
      };
    }
    function x(e) {
      return st(e.aoData, "_aData");
    }
    function u(e) {
      (e.aoData.length = 0),
        (e.aiDisplayMaster.length = 0),
        (e.aiDisplay.length = 0),
        (e.aIds = {});
    }
    function h(e, t, n) {
      for (var r = -1, a = 0, i = e.length; a < i; a++)
        e[a] == t ? (r = a) : e[a] > t && e[a]--;
      -1 != r && n === $ && e.splice(r, 1);
    }
    function a(n, r, e, t) {
      var a,
        i,
        o = n.aoData[r],
        s = function (e, t) {
          for (; e.childNodes.length; ) e.removeChild(e.firstChild);
          e.innerHTML = g(n, r, t, "display");
        };
      if ("dom" !== e && ((e && "auto" !== e) || "dom" !== o.src)) {
        var l = o.anCells;
        if (l)
          if (t !== $) s(l[t], t);
          else for (a = 0, i = l.length; a < i; a++) s(l[a], a);
      } else o._aData = f(n, o, t, t === $ ? $ : o._aData).data;
      (o._aSortData = null), (o._aFilterData = null);
      var u = n.aoColumns;
      if (t !== $) u[t].sType = null;
      else {
        for (a = 0, i = u.length; a < i; a++) u[a].sType = null;
        p(n, o);
      }
    }
    function f(e, t, n, a) {
      var r,
        i,
        o,
        s = [],
        l = t.firstChild,
        u = 0,
        c = e.aoColumns,
        f = e._rowReadObject;
      a = a !== $ ? a : f ? {} : [];
      var d = function (e, t) {
          if ("string" == typeof e) {
            var n = e.indexOf("@");
            if (-1 !== n) {
              var r = e.substring(n + 1);
              y(e)(a, t.getAttribute(r));
            }
          }
        },
        h = function (e) {
          (n !== $ && n !== u) ||
            ((i = c[u]),
            (o = B.trim(e.innerHTML)),
            i && i._bAttrSrc
              ? (y(i.mData._)(a, o),
                d(i.mData.sort, e),
                d(i.mData.type, e),
                d(i.mData.filter, e))
              : f
              ? (i._setter || (i._setter = y(i.mData)), i._setter(a, o))
              : (a[u] = o));
          u++;
        };
      if (l)
        for (; l; )
          ("TD" != (r = l.nodeName.toUpperCase()) && "TH" != r) ||
            (h(l), s.push(l)),
            (l = l.nextSibling);
      else for (var p = 0, g = (s = t.anCells).length; p < g; p++) h(s[p]);
      var m = t.firstChild ? t : t.nTr;
      if (m) {
        var v = m.getAttribute("id");
        v && y(e.rowId)(a, v);
      }
      return { data: a, cells: s };
    }
    function S(e, t, n, r) {
      var a,
        i,
        o,
        s,
        l,
        u,
        c = e.aoData[t],
        f = c._aData,
        d = [];
      if (null === c.nTr) {
        for (
          a = n || w.createElement("tr"),
            c.nTr = a,
            c.anCells = d,
            a._DT_RowIndex = t,
            p(e, c),
            s = 0,
            l = e.aoColumns.length;
          s < l;
          s++
        )
          (o = e.aoColumns[s]),
            ((i = (u = !n)
              ? w.createElement(o.sCellType)
              : r[s])._DT_CellIndex = { row: t, column: s }),
            d.push(i),
            (!u &&
              ((n && !o.mRender && o.mData === s) ||
                (B.isPlainObject(o.mData) && o.mData._ === s + ".display"))) ||
              (i.innerHTML = g(e, t, s, "display")),
            o.sClass && (i.className += " " + o.sClass),
            o.bVisible && !n
              ? a.appendChild(i)
              : !o.bVisible && n && i.parentNode.removeChild(i),
            o.fnCreatedCell &&
              o.fnCreatedCell.call(e.oInstance, i, g(e, t, s), f, t, s);
        He(e, "aoRowCreatedCallback", null, [a, f, t, d]);
      }
      c.nTr.setAttribute("role", "row");
    }
    function p(e, t) {
      var n = t.nTr,
        r = t._aData;
      if (n) {
        var a = e.rowIdFn(r);
        if ((a && (n.id = a), r.DT_RowClass)) {
          var i = r.DT_RowClass.split(" ");
          (t.__rowc = t.__rowc ? ht(t.__rowc.concat(i)) : i),
            B(n).removeClass(t.__rowc.join(" ")).addClass(r.DT_RowClass);
        }
        r.DT_RowAttr && B(n).attr(r.DT_RowAttr),
          r.DT_RowData && B(n).data(r.DT_RowData);
      }
    }
    function d(e) {
      var t,
        n,
        r,
        a,
        i,
        o = e.nTHead,
        s = e.nTFoot,
        l = 0 === B("th, td", o).length,
        u = e.oClasses,
        c = e.aoColumns;
      for (l && (a = B("<tr/>").appendTo(o)), t = 0, n = c.length; t < n; t++)
        (i = c[t]),
          (r = B(i.nTh).addClass(i.sClass)),
          l && r.appendTo(a),
          e.oFeatures.bSort &&
            (r.addClass(i.sSortingClass),
            !1 !== i.bSortable &&
              (r
                .attr("tabindex", e.iTabIndex)
                .attr("aria-controls", e.sTableId),
              _e(e, i.nTh, t))),
          i.sTitle != r[0].innerHTML && r.html(i.sTitle),
          Oe(e, "header")(e, r, i, u);
      if (
        (l && W(e.aoHeader, o),
        B(o).find(">tr").attr("role", "row"),
        B(o).find(">tr>th, >tr>td").addClass(u.sHeaderTH),
        B(s).find(">tr>th, >tr>td").addClass(u.sFooterTH),
        null !== s)
      ) {
        var f = e.aoFooter[0];
        for (t = 0, n = f.length; t < n; t++)
          ((i = c[t]).nTf = f[t].cell), i.sClass && B(i.nTf).addClass(i.sClass);
      }
    }
    function v(e, t, n) {
      var r,
        a,
        i,
        o,
        s,
        l,
        u,
        c,
        f,
        d = [],
        h = [],
        p = e.aoColumns.length;
      if (t) {
        for (n === $ && (n = !1), r = 0, a = t.length; r < a; r++) {
          for (d[r] = t[r].slice(), d[r].nTr = t[r].nTr, i = p - 1; 0 <= i; i--)
            e.aoColumns[i].bVisible || n || d[r].splice(i, 1);
          h.push([]);
        }
        for (r = 0, a = d.length; r < a; r++) {
          if ((u = d[r].nTr)) for (; (l = u.firstChild); ) u.removeChild(l);
          for (i = 0, o = d[r].length; i < o; i++)
            if (((f = c = 1), h[r][i] === $)) {
              for (
                u.appendChild(d[r][i].cell), h[r][i] = 1;
                d[r + c] !== $ && d[r][i].cell == d[r + c][i].cell;

              )
                (h[r + c][i] = 1), c++;
              for (; d[r][i + f] !== $ && d[r][i].cell == d[r][i + f].cell; ) {
                for (s = 0; s < c; s++) h[r + s][i + f] = 1;
                f++;
              }
              B(d[r][i].cell).attr("rowspan", c).attr("colspan", f);
            }
        }
      }
    }
    function b(e) {
      var t = He(e, "aoPreDrawCallback", "preDraw", [e]);
      if (-1 === B.inArray(!1, t)) {
        var n = [],
          r = 0,
          a = e.asStripeClasses,
          i = a.length,
          o = (e.aoOpenRows.length, e.oLanguage),
          s = e.iInitDisplayStart,
          l = "ssp" == qe(e),
          u = e.aiDisplay;
        (e.bDrawing = !0),
          s !== $ &&
            -1 !== s &&
            ((e._iDisplayStart = l ? s : s >= e.fnRecordsDisplay() ? 0 : s),
            (e.iInitDisplayStart = -1));
        var c = e._iDisplayStart,
          f = e.fnDisplayEnd();
        if (e.bDeferLoading) (e.bDeferLoading = !1), e.iDraw++, he(e, !1);
        else if (l) {
          if (!e.bDestroying && !_(e)) return;
        } else e.iDraw++;
        if (0 !== u.length)
          for (
            var d = l ? 0 : c, h = l ? e.aoData.length : f, p = d;
            p < h;
            p++
          ) {
            var g = u[p],
              m = e.aoData[g];
            null === m.nTr && S(e, g);
            var v = m.nTr;
            if (0 !== i) {
              var y = a[r % i];
              m._sRowStripe != y &&
                (B(v).removeClass(m._sRowStripe).addClass(y),
                (m._sRowStripe = y));
            }
            He(e, "aoRowCallback", null, [v, m._aData, r, p, g]),
              n.push(v),
              r++;
          }
        else {
          var b = o.sZeroRecords;
          1 == e.iDraw && "ajax" == qe(e)
            ? (b = o.sLoadingRecords)
            : o.sEmptyTable && 0 === e.fnRecordsTotal() && (b = o.sEmptyTable),
            (n[0] = B("<tr/>", { class: i ? a[0] : "" }).append(
              B("<td />", {
                valign: "top",
                colSpan: F(e),
                class: e.oClasses.sRowEmpty,
              }).html(b)
            )[0]);
        }
        He(e, "aoHeaderCallback", "header", [
          B(e.nTHead).children("tr")[0],
          x(e),
          c,
          f,
          u,
        ]),
          He(e, "aoFooterCallback", "footer", [
            B(e.nTFoot).children("tr")[0],
            x(e),
            c,
            f,
            u,
          ]);
        var w = B(e.nTBody);
        w.children().detach(),
          w.append(B(n)),
          He(e, "aoDrawCallback", "draw", [e]),
          (e.bSorted = !1),
          (e.bFiltered = !1),
          (e.bDrawing = !1);
      } else he(e, !1);
    }
    function D(e, t) {
      var n = e.oFeatures,
        r = n.bSort,
        a = n.bFilter;
      r && De(e),
        a ? J(e, e.oPreviousSearch) : (e.aiDisplay = e.aiDisplayMaster.slice()),
        !0 !== t && (e._iDisplayStart = 0),
        (e._drawHold = t),
        b(e),
        (e._drawHold = !1);
    }
    function T(e) {
      var t = e.oClasses,
        n = B(e.nTable),
        r = B("<div/>").insertBefore(n),
        a = e.oFeatures,
        i = B("<div/>", {
          id: e.sTableId + "_wrapper",
          class: t.sWrapper + (e.nTFoot ? "" : " " + t.sNoFooter),
        });
      (e.nHolding = r[0]),
        (e.nTableWrapper = i[0]),
        (e.nTableReinsertBefore = e.nTable.nextSibling);
      for (
        var o, s, l, u, c, f, d = e.sDom.split(""), h = 0;
        h < d.length;
        h++
      ) {
        if (((o = null), "<" == (s = d[h]))) {
          if (((l = B("<div/>")[0]), "'" == (u = d[h + 1]) || '"' == u)) {
            for (c = "", f = 2; d[h + f] != u; ) (c += d[h + f]), f++;
            if (
              ("H" == c ? (c = t.sJUIHeader) : "F" == c && (c = t.sJUIFooter),
              -1 != c.indexOf("."))
            ) {
              var p = c.split(".");
              (l.id = p[0].substr(1, p[0].length - 1)), (l.className = p[1]);
            } else
              "#" == c.charAt(0)
                ? (l.id = c.substr(1, c.length - 1))
                : (l.className = c);
            h += f;
          }
          i.append(l), (i = B(l));
        } else if (">" == s) i = i.parent();
        else if ("l" == s && a.bPaginate && a.bLengthChange) o = ue(e);
        else if ("f" == s && a.bFilter) o = G(e);
        else if ("r" == s && a.bProcessing) o = de(e);
        else if ("t" == s) o = pe(e);
        else if ("i" == s && a.bInfo) o = re(e);
        else if ("p" == s && a.bPaginate) o = ce(e);
        else if (0 !== Ge.ext.feature.length)
          for (var g = Ge.ext.feature, m = 0, v = g.length; m < v; m++)
            if (s == g[m].cFeature) {
              o = g[m].fnInit(e);
              break;
            }
        if (o) {
          var y = e.aanFeatures;
          y[s] || (y[s] = []), y[s].push(o), i.append(o);
        }
      }
      r.replaceWith(i), (e.nHolding = null);
    }
    function W(e, t) {
      var n,
        r,
        a,
        i,
        o,
        s,
        l,
        u,
        c,
        f,
        d,
        h = B(t).children("tr"),
        p = function (e, t, n) {
          for (var r = e[t]; r[n]; ) n++;
          return n;
        };
      for (e.splice(0, e.length), a = 0, s = h.length; a < s; a++) e.push([]);
      for (a = 0, s = h.length; a < s; a++)
        for (u = 0, r = (n = h[a]).firstChild; r; ) {
          if (
            "TD" == r.nodeName.toUpperCase() ||
            "TH" == r.nodeName.toUpperCase()
          )
            for (
              c =
                (c = 1 * r.getAttribute("colspan")) && 0 !== c && 1 !== c
                  ? c
                  : 1,
                f =
                  (f = 1 * r.getAttribute("rowspan")) && 0 !== f && 1 !== f
                    ? f
                    : 1,
                l = p(e, a, u),
                d = 1 === c,
                o = 0;
              o < c;
              o++
            )
              for (i = 0; i < f; i++)
                (e[a + i][l + o] = { cell: r, unique: d }), (e[a + i].nTr = n);
          r = r.nextSibling;
        }
    }
    function X(e, t, n) {
      var r = [];
      n || ((n = e.aoHeader), t && W((n = []), t));
      for (var a = 0, i = n.length; a < i; a++)
        for (var o = 0, s = n[a].length; o < s; o++)
          !n[a][o].unique || (r[o] && e.bSortCellsTop) || (r[o] = n[a][o].cell);
      return r;
    }
    function C(r, e, t) {
      if ((He(r, "aoServerParams", "serverParams", [e]), e && B.isArray(e))) {
        var a = {},
          i = /(.*?)\[\]$/;
        B.each(e, function (e, t) {
          var n = t.name.match(i);
          if (n) {
            var r = n[0];
            a[r] || (a[r] = []), a[r].push(t.value);
          } else a[t.name] = t.value;
        }),
          (e = a);
      }
      var n,
        o = r.ajax,
        s = r.oInstance,
        l = function (e) {
          He(r, null, "xhr", [r, e, r.jqXHR]), t(e);
        };
      if (B.isPlainObject(o) && o.data) {
        var u = "function" == typeof (n = o.data) ? n(e, r) : n;
        (e = "function" == typeof n && u ? u : B.extend(!0, e, u)),
          delete o.data;
      }
      var c = {
        data: e,
        success: function (e) {
          var t = e.error || e.sError;
          t && Le(r, 0, t), (r.json = e), l(e);
        },
        dataType: "json",
        cache: !1,
        type: r.sServerMethod,
        error: function (e, t) {
          var n = He(r, null, "xhr", [r, null, r.jqXHR]);
          -1 === B.inArray(!0, n) &&
            ("parsererror" == t
              ? Le(r, 0, "Invalid JSON response", 1)
              : 4 === e.readyState && Le(r, 0, "Ajax error", 7)),
            he(r, !1);
        },
      };
      (r.oAjaxData = e),
        He(r, null, "preXhr", [r, e]),
        r.fnServerData
          ? r.fnServerData.call(
              s,
              r.sAjaxSource,
              B.map(e, function (e, t) {
                return { name: t, value: e };
              }),
              l,
              r
            )
          : r.sAjaxSource || "string" == typeof o
          ? (r.jqXHR = B.ajax(B.extend(c, { url: o || r.sAjaxSource })))
          : "function" == typeof o
          ? (r.jqXHR = o.call(s, e, l, r))
          : ((r.jqXHR = B.ajax(B.extend(c, o))), (o.data = n));
    }
    function _(t) {
      return (
        !t.bAjaxDataGet ||
        (t.iDraw++,
        he(t, !0),
        C(t, i(t), function (e) {
          s(t, e);
        }),
        !1)
      );
    }
    function i(e) {
      var t,
        n,
        r,
        a,
        i = e.aoColumns,
        o = i.length,
        s = e.oFeatures,
        l = e.oPreviousSearch,
        u = e.aoPreSearchCols,
        c = [],
        f = Se(e),
        d = e._iDisplayStart,
        h = !1 !== s.bPaginate ? e._iDisplayLength : -1,
        p = function (e, t) {
          c.push({ name: e, value: t });
        };
      p("sEcho", e.iDraw),
        p("iColumns", o),
        p("sColumns", st(i, "sName").join(",")),
        p("iDisplayStart", d),
        p("iDisplayLength", h);
      var g = {
        draw: e.iDraw,
        columns: [],
        order: [],
        start: d,
        length: h,
        search: { value: l.sSearch, regex: l.bRegex },
      };
      for (t = 0; t < o; t++)
        (r = i[t]),
          (a = u[t]),
          (n = "function" == typeof r.mData ? "function" : r.mData),
          g.columns.push({
            data: n,
            name: r.sName,
            searchable: r.bSearchable,
            orderable: r.bSortable,
            search: { value: a.sSearch, regex: a.bRegex },
          }),
          p("mDataProp_" + t, n),
          s.bFilter &&
            (p("sSearch_" + t, a.sSearch),
            p("bRegex_" + t, a.bRegex),
            p("bSearchable_" + t, r.bSearchable)),
          s.bSort && p("bSortable_" + t, r.bSortable);
      s.bFilter && (p("sSearch", l.sSearch), p("bRegex", l.bRegex)),
        s.bSort &&
          (B.each(f, function (e, t) {
            g.order.push({ column: t.col, dir: t.dir }),
              p("iSortCol_" + e, t.col),
              p("sSortDir_" + e, t.dir);
          }),
          p("iSortingCols", f.length));
      var m = Ge.ext.legacy.ajax;
      return null === m ? (e.sAjaxSource ? c : g) : m ? c : g;
    }
    function s(e, n) {
      var t = function (e, t) {
          return n[e] !== $ ? n[e] : n[t];
        },
        r = V(e, n),
        a = t("sEcho", "draw"),
        i = t("iTotalRecords", "recordsTotal"),
        o = t("iTotalDisplayRecords", "recordsFiltered");
      if (a) {
        if (1 * a < e.iDraw) return;
        e.iDraw = 1 * a;
      }
      u(e),
        (e._iRecordsTotal = parseInt(i, 10)),
        (e._iRecordsDisplay = parseInt(o, 10));
      for (var s = 0, l = r.length; s < l; s++) M(e, r[s]);
      (e.aiDisplay = e.aiDisplayMaster.slice()),
        (e.bAjaxDataGet = !1),
        b(e),
        e._bInitComplete || se(e, n),
        (e.bAjaxDataGet = !0),
        he(e, !1);
    }
    function V(e, t) {
      var n =
        B.isPlainObject(e.ajax) && e.ajax.dataSrc !== $
          ? e.ajax.dataSrc
          : e.sAjaxDataProp;
      return "data" === n ? t.aaData || t[n] : "" !== n ? q(n)(t) : t;
    }
    function G(r) {
      var e = r.oClasses,
        t = r.sTableId,
        n = r.oLanguage,
        a = r.oPreviousSearch,
        i = r.aanFeatures,
        o = '<input type="search" class="' + e.sFilterInput + '"/>',
        s = n.sSearch;
      s = s.match(/_INPUT_/) ? s.replace("_INPUT_", o) : s + o;
      var l = B("<div/>", {
          id: i.f ? null : t + "_filter",
          class: e.sFilter,
        }).append(B("<label/>").append(s)),
        u = function () {
          i.f;
          var e = this.value ? this.value : "";
          e != a.sSearch &&
            (J(r, {
              sSearch: e,
              bRegex: a.bRegex,
              bSmart: a.bSmart,
              bCaseInsensitive: a.bCaseInsensitive,
            }),
            (r._iDisplayStart = 0),
            b(r));
        },
        c = null !== r.searchDelay ? r.searchDelay : "ssp" === qe(r) ? 400 : 0,
        f = B("input", l)
          .val(a.sSearch)
          .attr("placeholder", n.sSearchPlaceholder)
          .on("keyup.DT search.DT input.DT paste.DT cut.DT", c ? xt(u, c) : u)
          .on("keypress.DT", function (e) {
            if (13 == e.keyCode) return !1;
          })
          .attr("aria-controls", t);
      return (
        B(r.nTable).on("search.dt.DT", function (e, t) {
          if (r === t)
            try {
              f[0] !== w.activeElement && f.val(a.sSearch);
            } catch (n) {}
        }),
        l[0]
      );
    }
    function J(e, t, n) {
      var r = e.oPreviousSearch,
        a = e.aoPreSearchCols,
        i = function (e) {
          (r.sSearch = e.sSearch),
            (r.bRegex = e.bRegex),
            (r.bSmart = e.bSmart),
            (r.bCaseInsensitive = e.bCaseInsensitive);
        },
        o = function (e) {
          return e.bEscapeRegex !== $ ? !e.bEscapeRegex : e.bRegex;
        };
      if ((l(e), "ssp" != qe(e))) {
        K(e, t.sSearch, n, o(t), t.bSmart, t.bCaseInsensitive), i(t);
        for (var s = 0; s < a.length; s++)
          Z(e, a[s].sSearch, s, o(a[s]), a[s].bSmart, a[s].bCaseInsensitive);
        Y(e);
      } else i(t);
      (e.bFiltered = !0), He(e, null, "search", [e]);
    }
    function Y(e) {
      for (
        var t, n, r = Ge.ext.search, a = e.aiDisplay, i = 0, o = r.length;
        i < o;
        i++
      ) {
        for (var s = [], l = 0, u = a.length; l < u; l++)
          (n = a[l]),
            (t = e.aoData[n]),
            r[i](e, t._aFilterData, n, t._aData, l) && s.push(n);
        (a.length = 0), B.merge(a, s);
      }
    }
    function Z(e, t, n, r, a, i) {
      if ("" !== t) {
        for (
          var o, s = [], l = e.aiDisplay, u = Q(t, r, a, i), c = 0;
          c < l.length;
          c++
        )
          (o = e.aoData[l[c]]._aFilterData[n]), u.test(o) && s.push(l[c]);
        e.aiDisplay = s;
      }
    }
    function K(e, t, n, r, a, i) {
      var o,
        s,
        l,
        u = Q(t, r, a, i),
        c = e.oPreviousSearch.sSearch,
        f = e.aiDisplayMaster,
        d = [];
      if ((0 !== Ge.ext.search.length && (n = !0), (s = ee(e)), t.length <= 0))
        e.aiDisplay = f.slice();
      else {
        for (
          (s ||
            n ||
            r ||
            c.length > t.length ||
            0 !== t.indexOf(c) ||
            e.bSorted) &&
            (e.aiDisplay = f.slice()),
            o = e.aiDisplay,
            l = 0;
          l < o.length;
          l++
        )
          u.test(e.aoData[o[l]]._sFilterRow) && d.push(o[l]);
        e.aiDisplay = d;
      }
    }
    function Q(e, t, n, r) {
      ((e = t ? e : vt(e)), n) &&
        (e =
          "^(?=.*?" +
          B.map(e.match(/"[^"]+"|[^ ]+/g) || [""], function (e) {
            if ('"' === e.charAt(0)) {
              var t = e.match(/^"(.*)"$/);
              e = t ? t[1] : e;
            }
            return e.replace('"', "");
          }).join(")(?=.*?") +
          ").*$");
      return new RegExp(e, r ? "i" : "");
    }
    function ee(e) {
      var t,
        n,
        r,
        a,
        i,
        o,
        s,
        l,
        u = e.aoColumns,
        c = Ge.ext.type.search,
        f = !1;
      for (n = 0, a = e.aoData.length; n < a; n++)
        if (!(l = e.aoData[n])._aFilterData) {
          for (o = [], r = 0, i = u.length; r < i; r++)
            (t = u[r]).bSearchable
              ? ((s = g(e, n, r, "filter")),
                c[t.sType] && (s = c[t.sType](s)),
                null === s && (s = ""),
                "string" != typeof s && s.toString && (s = s.toString()))
              : (s = ""),
              s.indexOf &&
                -1 !== s.indexOf("&") &&
                ((yt.innerHTML = s), (s = bt ? yt.textContent : yt.innerText)),
              s.replace && (s = s.replace(/[\r\n\u2028]/g, "")),
              o.push(s);
          (l._aFilterData = o), (l._sFilterRow = o.join("  ")), (f = !0);
        }
      return f;
    }
    function te(e) {
      return {
        search: e.sSearch,
        smart: e.bSmart,
        regex: e.bRegex,
        caseInsensitive: e.bCaseInsensitive,
      };
    }
    function ne(e) {
      return {
        sSearch: e.search,
        bSmart: e.smart,
        bRegex: e.regex,
        bCaseInsensitive: e.caseInsensitive,
      };
    }
    function re(e) {
      var t = e.sTableId,
        n = e.aanFeatures.i,
        r = B("<div/>", {
          class: e.oClasses.sInfo,
          id: n ? null : t + "_info",
        });
      return (
        n ||
          (e.aoDrawCallback.push({ fn: ae, sName: "information" }),
          r.attr("role", "status").attr("aria-live", "polite"),
          B(e.nTable).attr("aria-describedby", t + "_info")),
        r[0]
      );
    }
    function ae(e) {
      var t = e.aanFeatures.i;
      if (0 !== t.length) {
        var n = e.oLanguage,
          r = e._iDisplayStart + 1,
          a = e.fnDisplayEnd(),
          i = e.fnRecordsTotal(),
          o = e.fnRecordsDisplay(),
          s = o ? n.sInfo : n.sInfoEmpty;
        o !== i && (s += " " + n.sInfoFiltered),
          (s = ie(e, (s += n.sInfoPostFix)));
        var l = n.fnInfoCallback;
        null !== l && (s = l.call(e.oInstance, e, r, a, i, o, s)), B(t).html(s);
      }
    }
    function ie(e, t) {
      var n = e.fnFormatNumber,
        r = e._iDisplayStart + 1,
        a = e._iDisplayLength,
        i = e.fnRecordsDisplay(),
        o = -1 === a;
      return t
        .replace(/_START_/g, n.call(e, r))
        .replace(/_END_/g, n.call(e, e.fnDisplayEnd()))
        .replace(/_MAX_/g, n.call(e, e.fnRecordsTotal()))
        .replace(/_TOTAL_/g, n.call(e, i))
        .replace(/_PAGE_/g, n.call(e, o ? 1 : Math.ceil(r / a)))
        .replace(/_PAGES_/g, n.call(e, o ? 1 : Math.ceil(i / a)));
    }
    function oe(n) {
      var r,
        e,
        t,
        a = n.iInitDisplayStart,
        i = n.aoColumns,
        o = n.oFeatures,
        s = n.bDeferLoading;
      if (n.bInitialised) {
        for (
          T(n),
            d(n),
            v(n, n.aoHeader),
            v(n, n.aoFooter),
            he(n, !0),
            o.bAutoWidth && ve(n),
            r = 0,
            e = i.length;
          r < e;
          r++
        )
          (t = i[r]).sWidth && (t.nTh.style.width = xe(t.sWidth));
        He(n, null, "preInit", [n]), D(n);
        var l = qe(n);
        ("ssp" != l || s) &&
          ("ajax" == l
            ? C(
                n,
                [],
                function (e) {
                  var t = V(n, e);
                  for (r = 0; r < t.length; r++) M(n, t[r]);
                  (n.iInitDisplayStart = a), D(n), he(n, !1), se(n, e);
                },
                n
              )
            : (he(n, !1), se(n)));
      } else
        setTimeout(function () {
          oe(n);
        }, 200);
    }
    function se(e, t) {
      (e._bInitComplete = !0),
        (t || e.oInit.aaData) && U(e),
        He(e, null, "plugin-init", [e, t]),
        He(e, "aoInitComplete", "init", [e, t]);
    }
    function le(e, t) {
      var n = parseInt(t, 10);
      (e._iDisplayLength = n), Me(e), He(e, null, "length", [e, n]);
    }
    function ue(r) {
      for (
        var e = r.oClasses,
          t = r.sTableId,
          n = r.aLengthMenu,
          a = B.isArray(n[0]),
          i = a ? n[0] : n,
          o = a ? n[1] : n,
          s = B("<select/>", {
            name: t + "_length",
            "aria-controls": t,
            class: e.sLengthSelect,
          }),
          l = 0,
          u = i.length;
        l < u;
        l++
      )
        s[0][l] = new Option(
          "number" == typeof o[l] ? r.fnFormatNumber(o[l]) : o[l],
          i[l]
        );
      var c = B("<div><label/></div>").addClass(e.sLength);
      return (
        r.aanFeatures.l || (c[0].id = t + "_length"),
        c
          .children()
          .append(r.oLanguage.sLengthMenu.replace("_MENU_", s[0].outerHTML)),
        B("select", c)
          .val(r._iDisplayLength)
          .on("change.DT", function () {
            le(r, B(this).val()), b(r);
          }),
        B(r.nTable).on("length.dt.DT", function (e, t, n) {
          r === t && B("select", c).val(n);
        }),
        c[0]
      );
    }
    function ce(e) {
      var t = e.sPaginationType,
        c = Ge.ext.pager[t],
        f = "function" == typeof c,
        d = function (e) {
          b(e);
        },
        n = B("<div/>").addClass(e.oClasses.sPaging + t)[0],
        h = e.aanFeatures;
      return (
        f || c.fnInit(e, n, d),
        h.p ||
          ((n.id = e.sTableId + "_paginate"),
          e.aoDrawCallback.push({
            fn: function (e) {
              if (f) {
                var t,
                  n,
                  r = e._iDisplayStart,
                  a = e._iDisplayLength,
                  i = e.fnRecordsDisplay(),
                  o = -1 === a,
                  s = o ? 0 : Math.ceil(r / a),
                  l = o ? 1 : Math.ceil(i / a),
                  u = c(s, l);
                for (t = 0, n = h.p.length; t < n; t++)
                  Oe(e, "pageButton")(e, h.p[t], t, u, s, l);
              } else c.fnUpdate(e, d);
            },
            sName: "pagination",
          })),
        n
      );
    }
    function fe(e, t, n) {
      var r = e._iDisplayStart,
        a = e._iDisplayLength,
        i = e.fnRecordsDisplay();
      0 === i || -1 === a
        ? (r = 0)
        : "number" == typeof t
        ? i < (r = t * a) && (r = 0)
        : "first" == t
        ? (r = 0)
        : "previous" == t
        ? (r = 0 <= a ? r - a : 0) < 0 && (r = 0)
        : "next" == t
        ? r + a < i && (r += a)
        : "last" == t
        ? (r = Math.floor((i - 1) / a) * a)
        : Le(e, 0, "Unknown paging action: " + t, 5);
      var o = e._iDisplayStart !== r;
      return (
        (e._iDisplayStart = r), o && (He(e, null, "page", [e]), n && b(e)), o
      );
    }
    function de(e) {
      return B("<div/>", {
        id: e.aanFeatures.r ? null : e.sTableId + "_processing",
        class: e.oClasses.sProcessing,
      })
        .html(e.oLanguage.sProcessing)
        .insertBefore(e.nTable)[0];
    }
    function he(e, t) {
      e.oFeatures.bProcessing &&
        B(e.aanFeatures.r).css("display", t ? "block" : "none"),
        He(e, null, "processing", [e, t]);
    }
    function pe(e) {
      var t = B(e.nTable);
      t.attr("role", "grid");
      var n = e.oScroll;
      if ("" === n.sX && "" === n.sY) return e.nTable;
      var r = n.sX,
        a = n.sY,
        i = e.oClasses,
        o = t.children("caption"),
        s = o.length ? o[0]._captionSide : null,
        l = B(t[0].cloneNode(!1)),
        u = B(t[0].cloneNode(!1)),
        c = t.children("tfoot"),
        f = "<div/>",
        d = function (e) {
          return e ? xe(e) : null;
        };
      c.length || (c = null);
      var h = B(f, { class: i.sScrollWrapper })
        .append(
          B(f, { class: i.sScrollHead })
            .css({
              overflow: "hidden",
              position: "relative",
              border: 0,
              width: r ? d(r) : "100%",
            })
            .append(
              B(f, { class: i.sScrollHeadInner })
                .css({
                  "box-sizing": "content-box",
                  width: n.sXInner || "100%",
                })
                .append(
                  l
                    .removeAttr("id")
                    .css("margin-left", 0)
                    .append("top" === s ? o : null)
                    .append(t.children("thead"))
                )
            )
        )
        .append(
          B(f, { class: i.sScrollBody })
            .css({ position: "relative", overflow: "auto", width: d(r) })
            .append(t)
        );
      c &&
        h.append(
          B(f, { class: i.sScrollFoot })
            .css({ overflow: "hidden", border: 0, width: r ? d(r) : "100%" })
            .append(
              B(f, { class: i.sScrollFootInner }).append(
                u
                  .removeAttr("id")
                  .css("margin-left", 0)
                  .append("bottom" === s ? o : null)
                  .append(t.children("tfoot"))
              )
            )
        );
      var p = h.children(),
        g = p[0],
        m = p[1],
        v = c ? p[2] : null;
      return (
        r &&
          B(m).on("scroll.DT", function () {
            var e = this.scrollLeft;
            (g.scrollLeft = e), c && (v.scrollLeft = e);
          }),
        B(m).css(a && n.bCollapse ? "max-height" : "height", a),
        (e.nScrollHead = g),
        (e.nScrollBody = m),
        (e.nScrollFoot = v),
        e.aoDrawCallback.push({ fn: ge, sName: "scrolling" }),
        h[0]
      );
    }
    function ge(n) {
      var e,
        t,
        r,
        a,
        i,
        o,
        s,
        l,
        u,
        c = n.oScroll,
        f = c.sX,
        d = c.sXInner,
        h = c.sY,
        p = c.iBarWidth,
        g = B(n.nScrollHead),
        m = g[0].style,
        v = g.children("div"),
        y = v[0].style,
        b = v.children("table"),
        w = n.nScrollBody,
        x = B(w),
        S = w.style,
        D = B(n.nScrollFoot).children("div"),
        T = D.children("table"),
        C = B(n.nTHead),
        _ = B(n.nTable),
        A = _[0],
        N = A.style,
        k = n.nTFoot ? B(n.nTFoot) : null,
        I = n.oBrowser,
        j = I.bScrollOversize,
        L = st(n.aoColumns, "nTh"),
        E = [],
        R = [],
        F = [],
        P = [],
        H = function (e) {
          var t = e.style;
          (t.paddingTop = "0"),
            (t.paddingBottom = "0"),
            (t.borderTopWidth = "0"),
            (t.borderBottomWidth = "0"),
            (t.height = 0);
        },
        M = w.scrollHeight > w.clientHeight;
      if (n.scrollBarVis !== M && n.scrollBarVis !== $)
        return (n.scrollBarVis = M), void U(n);
      (n.scrollBarVis = M),
        _.children("thead, tfoot").remove(),
        k &&
          ((o = k.clone().prependTo(_)),
          (t = k.find("tr")),
          (a = o.find("tr"))),
        (i = C.clone().prependTo(_)),
        (e = C.find("tr")),
        (r = i.find("tr")),
        i.find("th, td").removeAttr("tabindex"),
        f || ((S.width = "100%"), (g[0].style.width = "100%")),
        B.each(X(n, i), function (e, t) {
          (s = z(n, e)), (t.style.width = n.aoColumns[s].sWidth);
        }),
        k &&
          me(function (e) {
            e.style.width = "";
          }, a),
        (u = _.outerWidth()),
        "" === f
          ? ((N.width = "100%"),
            j &&
              (_.find("tbody").height() > w.offsetHeight ||
                "scroll" == x.css("overflow-y")) &&
              (N.width = xe(_.outerWidth() - p)),
            (u = _.outerWidth()))
          : "" !== d && ((N.width = xe(d)), (u = _.outerWidth())),
        me(H, r),
        me(function (e) {
          F.push(e.innerHTML), E.push(xe(B(e).css("width")));
        }, r),
        me(function (e, t) {
          -1 !== B.inArray(e, L) && (e.style.width = E[t]);
        }, e),
        B(r).height(0),
        k &&
          (me(H, a),
          me(function (e) {
            P.push(e.innerHTML), R.push(xe(B(e).css("width")));
          }, a),
          me(function (e, t) {
            e.style.width = R[t];
          }, t),
          B(a).height(0)),
        me(function (e, t) {
          (e.innerHTML = '<div class="dataTables_sizing">' + F[t] + "</div>"),
            (e.childNodes[0].style.height = "0"),
            (e.childNodes[0].style.overflow = "hidden"),
            (e.style.width = E[t]);
        }, r),
        k &&
          me(function (e, t) {
            (e.innerHTML = '<div class="dataTables_sizing">' + P[t] + "</div>"),
              (e.childNodes[0].style.height = "0"),
              (e.childNodes[0].style.overflow = "hidden"),
              (e.style.width = R[t]);
          }, a),
        _.outerWidth() < u
          ? ((l =
              w.scrollHeight > w.offsetHeight || "scroll" == x.css("overflow-y")
                ? u + p
                : u),
            j &&
              (w.scrollHeight > w.offsetHeight ||
                "scroll" == x.css("overflow-y")) &&
              (N.width = xe(l - p)),
            ("" !== f && "" === d) ||
              Le(n, 1, "Possible column misalignment", 6))
          : (l = "100%"),
        (S.width = xe(l)),
        (m.width = xe(l)),
        k && (n.nScrollFoot.style.width = xe(l)),
        h || (j && (S.height = xe(A.offsetHeight + p)));
      var O = _.outerWidth();
      (b[0].style.width = xe(O)), (y.width = xe(O));
      var q = _.height() > w.clientHeight || "scroll" == x.css("overflow-y"),
        W = "padding" + (I.bScrollbarLeft ? "Left" : "Right");
      (y[W] = q ? p + "px" : "0px"),
        k &&
          ((T[0].style.width = xe(O)),
          (D[0].style.width = xe(O)),
          (D[0].style[W] = q ? p + "px" : "0px")),
        _.children("colgroup").insertBefore(_.children("thead")),
        x.trigger("scroll"),
        (!n.bSorted && !n.bFiltered) || n._drawHold || (w.scrollTop = 0);
    }
    function me(e, t, n) {
      for (var r, a, i = 0, o = 0, s = t.length; o < s; ) {
        for (r = t[o].firstChild, a = n ? n[o].firstChild : null; r; )
          1 === r.nodeType && (n ? e(r, a, i) : e(r, i), i++),
            (r = r.nextSibling),
            (a = n ? a.nextSibling : null);
        o++;
      }
    }
    function ve(e) {
      var t,
        n,
        r,
        a = e.nTable,
        i = e.aoColumns,
        o = e.oScroll,
        s = o.sY,
        l = o.sX,
        u = o.sXInner,
        c = i.length,
        f = P(e, "bVisible"),
        d = B("th", e.nTHead),
        h = a.getAttribute("width"),
        p = a.parentNode,
        g = !1,
        m = e.oBrowser,
        v = m.bScrollOversize,
        y = a.style.width;
      for (y && -1 !== y.indexOf("%") && (h = y), t = 0; t < f.length; t++)
        null !== (n = i[f[t]]).sWidth &&
          ((n.sWidth = ye(n.sWidthOrig, p)), (g = !0));
      if (v || (!g && !l && !s && c == F(e) && c == d.length))
        for (t = 0; t < c; t++) {
          var b = z(e, t);
          null !== b && (i[b].sWidth = xe(d.eq(t).width()));
        }
      else {
        var w = B(a).clone().css("visibility", "hidden").removeAttr("id");
        w.find("tbody tr").remove();
        var x = B("<tr/>").appendTo(w.find("tbody"));
        for (
          w.find("thead, tfoot").remove(),
            w.append(B(e.nTHead).clone()).append(B(e.nTFoot).clone()),
            w.find("tfoot th, tfoot td").css("width", ""),
            d = X(e, w.find("thead")[0]),
            t = 0;
          t < f.length;
          t++
        )
          (n = i[f[t]]),
            (d[t].style.width =
              null !== n.sWidthOrig && "" !== n.sWidthOrig
                ? xe(n.sWidthOrig)
                : ""),
            n.sWidthOrig &&
              l &&
              B(d[t]).append(
                B("<div/>").css({
                  width: n.sWidthOrig,
                  margin: 0,
                  padding: 0,
                  border: 0,
                  height: 1,
                })
              );
        if (e.aoData.length)
          for (t = 0; t < f.length; t++)
            (n = i[(r = f[t])]),
              B(be(e, r)).clone(!1).append(n.sContentPadding).appendTo(x);
        B("[name]", w).removeAttr("name");
        var S = B("<div/>")
          .css(
            l || s
              ? {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: 1,
                  right: 0,
                  overflow: "hidden",
                }
              : {}
          )
          .append(w)
          .appendTo(p);
        l && u
          ? w.width(u)
          : l
          ? (w.css("width", "auto"),
            w.removeAttr("width"),
            w.width() < p.clientWidth && h && w.width(p.clientWidth))
          : s
          ? w.width(p.clientWidth)
          : h && w.width(h);
        var D = 0;
        for (t = 0; t < f.length; t++) {
          var T = B(d[t]),
            C = T.outerWidth() - T.width(),
            _ = m.bBounding
              ? Math.ceil(d[t].getBoundingClientRect().width)
              : T.outerWidth();
          (D += _), (i[f[t]].sWidth = xe(_ - C));
        }
        (a.style.width = xe(D)), S.remove();
      }
      if ((h && (a.style.width = xe(h)), (h || l) && !e._reszEvt)) {
        var A = function () {
          B(N).on(
            "resize.DT-" + e.sInstance,
            xt(function () {
              U(e);
            })
          );
        };
        v ? setTimeout(A, 1e3) : A(), (e._reszEvt = !0);
      }
    }
    function ye(e, t) {
      if (!e) return 0;
      var n = B("<div/>")
          .css("width", xe(e))
          .appendTo(t || w.body),
        r = n[0].offsetWidth;
      return n.remove(), r;
    }
    function be(e, t) {
      var n = we(e, t);
      if (n < 0) return null;
      var r = e.aoData[n];
      return r.nTr ? r.anCells[t] : B("<td/>").html(g(e, n, t, "display"))[0];
    }
    function we(e, t) {
      for (var n, r = -1, a = -1, i = 0, o = e.aoData.length; i < o; i++)
        (n = (n = (n = g(e, i, t, "display") + "").replace(wt, "")).replace(
          /&nbsp;/g,
          " "
        )).length > r && ((r = n.length), (a = i));
      return a;
    }
    function xe(e) {
      return null === e
        ? "0px"
        : "number" == typeof e
        ? e < 0
          ? "0px"
          : e + "px"
        : e.match(/\d$/)
        ? e + "px"
        : e;
    }
    function Se(e) {
      var t,
        n,
        r,
        a,
        i,
        o,
        s,
        l = [],
        u = e.aoColumns,
        c = e.aaSortingFixed,
        f = B.isPlainObject(c),
        d = [],
        h = function (e) {
          e.length && !B.isArray(e[0]) ? d.push(e) : B.merge(d, e);
        };
      for (
        B.isArray(c) && h(c),
          f && c.pre && h(c.pre),
          h(e.aaSorting),
          f && c.post && h(c.post),
          t = 0;
        t < d.length;
        t++
      )
        for (n = 0, r = (a = u[(s = d[t][0])].aDataSort).length; n < r; n++)
          (o = u[(i = a[n])].sType || "string"),
            d[t]._idx === $ && (d[t]._idx = B.inArray(d[t][1], u[i].asSorting)),
            l.push({
              src: s,
              col: i,
              dir: d[t][1],
              index: d[t]._idx,
              type: o,
              formatter: Ge.ext.type.order[o + "-pre"],
            });
      return l;
    }
    function De(e) {
      var t,
        n,
        r,
        a,
        c,
        f = [],
        d = Ge.ext.type.order,
        h = e.aoData,
        i = (e.aoColumns, 0),
        o = e.aiDisplayMaster;
      for (l(e), t = 0, n = (c = Se(e)).length; t < n; t++)
        (a = c[t]).formatter && i++, Ne(e, a.col);
      if ("ssp" != qe(e) && 0 !== c.length) {
        for (t = 0, r = o.length; t < r; t++) f[o[t]] = t;
        i === c.length
          ? o.sort(function (e, t) {
              var n,
                r,
                a,
                i,
                o,
                s = c.length,
                l = h[e]._aSortData,
                u = h[t]._aSortData;
              for (a = 0; a < s; a++)
                if (
                  0 !==
                  (i =
                    (n = l[(o = c[a]).col]) < (r = u[o.col])
                      ? -1
                      : r < n
                      ? 1
                      : 0)
                )
                  return "asc" === o.dir ? i : -i;
              return (n = f[e]) < (r = f[t]) ? -1 : r < n ? 1 : 0;
            })
          : o.sort(function (e, t) {
              var n,
                r,
                a,
                i,
                o,
                s = c.length,
                l = h[e]._aSortData,
                u = h[t]._aSortData;
              for (a = 0; a < s; a++)
                if (
                  ((n = l[(o = c[a]).col]),
                  (r = u[o.col]),
                  0 !==
                    (i = (d[o.type + "-" + o.dir] || d["string-" + o.dir])(
                      n,
                      r
                    )))
                )
                  return i;
              return (n = f[e]) < (r = f[t]) ? -1 : r < n ? 1 : 0;
            });
      }
      e.bSorted = !0;
    }
    function Te(e) {
      for (
        var t,
          n,
          r = e.aoColumns,
          a = Se(e),
          i = e.oLanguage.oAria,
          o = 0,
          s = r.length;
        o < s;
        o++
      ) {
        var l = r[o],
          u = l.asSorting,
          c = l.sTitle.replace(/<.*?>/g, ""),
          f = l.nTh;
        f.removeAttribute("aria-sort"),
          l.bSortable
            ? (0 < a.length && a[0].col == o
                ? (f.setAttribute(
                    "aria-sort",
                    "asc" == a[0].dir ? "ascending" : "descending"
                  ),
                  (n = u[a[0].index + 1] || u[0]))
                : (n = u[0]),
              (t = c + ("asc" === n ? i.sSortAscending : i.sSortDescending)))
            : (t = c),
          f.setAttribute("aria-label", t);
      }
    }
    function Ce(e, t, n, r) {
      var a,
        i = e.aoColumns[t],
        o = e.aaSorting,
        s = i.asSorting,
        l = function (e, t) {
          var n = e._idx;
          return (
            n === $ && (n = B.inArray(e[1], s)),
            n + 1 < s.length ? n + 1 : t ? null : 0
          );
        };
      if (
        ("number" == typeof o[0] && (o = e.aaSorting = [o]),
        n && e.oFeatures.bSortMulti)
      ) {
        var u = B.inArray(t, st(o, "0"));
        -1 !== u
          ? (null === (a = l(o[u], !0)) && 1 === o.length && (a = 0),
            null === a ? o.splice(u, 1) : ((o[u][1] = s[a]), (o[u]._idx = a)))
          : (o.push([t, s[0], 0]), (o[o.length - 1]._idx = 0));
      } else o.length && o[0][0] == t ? ((a = l(o[0])), (o.length = 1), (o[0][1] = s[a]), (o[0]._idx = a)) : ((o.length = 0), o.push([t, s[0]]), (o[0]._idx = 0));
      D(e), "function" == typeof r && r(e);
    }
    function _e(t, e, n, r) {
      var a = t.aoColumns[n];
      Fe(e, {}, function (e) {
        !1 !== a.bSortable &&
          (t.oFeatures.bProcessing
            ? (he(t, !0),
              setTimeout(function () {
                Ce(t, n, e.shiftKey, r), "ssp" !== qe(t) && he(t, !1);
              }, 0))
            : Ce(t, n, e.shiftKey, r));
      });
    }
    function Ae(e) {
      var t,
        n,
        r,
        a = e.aLastSort,
        i = e.oClasses.sSortColumn,
        o = Se(e),
        s = e.oFeatures;
      if (s.bSort && s.bSortClasses) {
        for (t = 0, n = a.length; t < n; t++)
          (r = a[t].src),
            B(st(e.aoData, "anCells", r)).removeClass(i + (t < 2 ? t + 1 : 3));
        for (t = 0, n = o.length; t < n; t++)
          (r = o[t].src),
            B(st(e.aoData, "anCells", r)).addClass(i + (t < 2 ? t + 1 : 3));
      }
      e.aLastSort = o;
    }
    function Ne(e, t) {
      var n,
        r,
        a,
        i = e.aoColumns[t],
        o = Ge.ext.order[i.sSortDataType];
      o && (n = o.call(e.oInstance, e, t, c(e, t)));
      for (
        var s = Ge.ext.type.order[i.sType + "-pre"], l = 0, u = e.aoData.length;
        l < u;
        l++
      )
        (r = e.aoData[l])._aSortData || (r._aSortData = []),
          (r._aSortData[t] && !o) ||
            ((a = o ? n[l] : g(e, l, t, "sort")),
            (r._aSortData[t] = s ? s(a) : a));
    }
    function ke(n) {
      if (n.oFeatures.bStateSave && !n.bDestroying) {
        var e = {
          time: +new Date(),
          start: n._iDisplayStart,
          length: n._iDisplayLength,
          order: B.extend(!0, [], n.aaSorting),
          search: te(n.oPreviousSearch),
          columns: B.map(n.aoColumns, function (e, t) {
            return { visible: e.bVisible, search: te(n.aoPreSearchCols[t]) };
          }),
        };
        He(n, "aoStateSaveParams", "stateSaveParams", [n, e]),
          (n.oSavedState = e),
          n.fnStateSaveCallback.call(n.oInstance, n, e);
      }
    }
    function Ie(a, e, i) {
      var o,
        s,
        l = a.aoColumns,
        t = function (e) {
          if (e && e.time) {
            var t = He(a, "aoStateLoadParams", "stateLoadParams", [a, e]);
            if (-1 === B.inArray(!1, t)) {
              var n = a.iStateDuration;
              if (0 < n && e.time < +new Date() - 1e3 * n) i();
              else if (e.columns && l.length !== e.columns.length) i();
              else {
                if (
                  ((a.oLoadedState = B.extend(!0, {}, e)),
                  e.start !== $ &&
                    ((a._iDisplayStart = e.start),
                    (a.iInitDisplayStart = e.start)),
                  e.length !== $ && (a._iDisplayLength = e.length),
                  e.order !== $ &&
                    ((a.aaSorting = []),
                    B.each(e.order, function (e, t) {
                      a.aaSorting.push(t[0] >= l.length ? [0, t[1]] : t);
                    })),
                  e.search !== $ && B.extend(a.oPreviousSearch, ne(e.search)),
                  e.columns)
                )
                  for (o = 0, s = e.columns.length; o < s; o++) {
                    var r = e.columns[o];
                    r.visible !== $ && (l[o].bVisible = r.visible),
                      r.search !== $ &&
                        B.extend(a.aoPreSearchCols[o], ne(r.search));
                  }
                He(a, "aoStateLoaded", "stateLoaded", [a, e]), i();
              }
            } else i();
          } else i();
        };
      if (a.oFeatures.bStateSave) {
        var n = a.fnStateLoadCallback.call(a.oInstance, a, t);
        n !== $ && t(n);
      } else i();
    }
    function je(e) {
      var t = Ge.settings,
        n = B.inArray(e, st(t, "nTable"));
      return -1 !== n ? t[n] : null;
    }
    function Le(e, t, n, r) {
      if (
        ((n =
          "DataTables warning: " +
          (e ? "table id=" + e.sTableId + " - " : "") +
          n),
        r &&
          (n +=
            ". For more information about this error, please see http://datatables.net/tn/" +
            r),
        t)
      )
        N.console && console.log && console.log(n);
      else {
        var a = Ge.ext,
          i = a.sErrMode || a.errMode;
        if ((e && He(e, null, "error", [e, r, n]), "alert" == i)) alert(n);
        else {
          if ("throw" == i) throw new Error(n);
          "function" == typeof i && i(e, r, n);
        }
      }
    }
    function Ee(n, r, e, t) {
      B.isArray(e)
        ? B.each(e, function (e, t) {
            B.isArray(t) ? Ee(n, r, t[0], t[1]) : Ee(n, r, t);
          })
        : (t === $ && (t = e), r[e] !== $ && (n[t] = r[e]));
    }
    function Re(e, t, n) {
      var r;
      for (var a in t)
        t.hasOwnProperty(a) &&
          ((r = t[a]),
          B.isPlainObject(r)
            ? (B.isPlainObject(e[a]) || (e[a] = {}), B.extend(!0, e[a], r))
            : n && "data" !== a && "aaData" !== a && B.isArray(r)
            ? (e[a] = r.slice())
            : (e[a] = r));
      return e;
    }
    function Fe(t, e, n) {
      B(t)
        .on("click.DT", e, function (e) {
          B(t).blur(), n(e);
        })
        .on("keypress.DT", e, function (e) {
          13 === e.which && (e.preventDefault(), n(e));
        })
        .on("selectstart.DT", function () {
          return !1;
        });
    }
    function Pe(e, t, n, r) {
      n && e[t].push({ fn: n, sName: r });
    }
    function He(t, e, n, r) {
      var a = [];
      if (
        (e &&
          (a = B.map(t[e].slice().reverse(), function (e) {
            return e.fn.apply(t.oInstance, r);
          })),
        null !== n)
      ) {
        var i = B.Event(n + ".dt");
        B(t.nTable).trigger(i, r), a.push(i.result);
      }
      return a;
    }
    function Me(e) {
      var t = e._iDisplayStart,
        n = e.fnDisplayEnd(),
        r = e._iDisplayLength;
      n <= t && (t = n - r),
        (t -= t % r),
        (-1 === r || t < 0) && (t = 0),
        (e._iDisplayStart = t);
    }
    function Oe(e, t) {
      var n = e.renderer,
        r = Ge.ext.renderer[t];
      return B.isPlainObject(n) && n[t]
        ? r[n[t]] || r._
        : ("string" == typeof n && r[n]) || r._;
    }
    function qe(e) {
      return e.oFeatures.bServerSide
        ? "ssp"
        : e.ajax || e.sAjaxSource
        ? "ajax"
        : "dom";
    }
    function We(e, t) {
      var n = [],
        r = $t.numbers_length,
        a = Math.floor(r / 2);
      return (
        t <= r
          ? (n = ut(0, t))
          : e <= a
          ? ((n = ut(0, r - 2)).push("ellipsis"), n.push(t - 1))
          : (t - 1 - a <= e
              ? (n = ut(t - (r - 2), t)).splice(0, 0, "ellipsis")
              : ((n = ut(e - a + 2, e + a - 1)).push("ellipsis"),
                n.push(t - 1),
                n.splice(0, 0, "ellipsis")),
            n.splice(0, 0, 0)),
        (n.DT_el = "span"),
        n
      );
    }
    function Be(n) {
      B.each(
        {
          num: function (e) {
            return Ut(e, n);
          },
          "num-fmt": function (e) {
            return Ut(e, n, et);
          },
          "html-num": function (e) {
            return Ut(e, n, Ze);
          },
          "html-num-fmt": function (e) {
            return Ut(e, n, Ze, et);
          },
        },
        function (e, t) {
          (Ue.type.order[e + n + "-pre"] = t),
            e.match(/^html\-/) && (Ue.type.search[e + n] = Ue.type.search.html);
        }
      );
    }
    function $e(t) {
      return function () {
        var e = [je(this[Ge.ext.iApiIndex])].concat(
          Array.prototype.slice.call(arguments)
        );
        return Ge.ext.internal[t].apply(this, e);
      };
    }
    var Ue,
      ze,
      Xe,
      Ve,
      Ge = function (D) {
        (this.$ = function (e, t) {
          return this.api(!0).$(e, t);
        }),
          (this._ = function (e, t) {
            return this.api(!0).rows(e, t).data();
          }),
          (this.api = function (e) {
            return new ze(e ? je(this[Ue.iApiIndex]) : this);
          }),
          (this.fnAddData = function (e, t) {
            var n = this.api(!0),
              r =
                B.isArray(e) && (B.isArray(e[0]) || B.isPlainObject(e[0]))
                  ? n.rows.add(e)
                  : n.row.add(e);
            return (t === $ || t) && n.draw(), r.flatten().toArray();
          }),
          (this.fnAdjustColumnSizing = function (e) {
            var t = this.api(!0).columns.adjust(),
              n = t.settings()[0],
              r = n.oScroll;
            e === $ || e ? t.draw(!1) : ("" === r.sX && "" === r.sY) || ge(n);
          }),
          (this.fnClearTable = function (e) {
            var t = this.api(!0).clear();
            (e === $ || e) && t.draw();
          }),
          (this.fnClose = function (e) {
            this.api(!0).row(e).child.hide();
          }),
          (this.fnDeleteRow = function (e, t, n) {
            var r = this.api(!0),
              a = r.rows(e),
              i = a.settings()[0],
              o = i.aoData[a[0][0]];
            return (
              a.remove(), t && t.call(this, i, o), (n === $ || n) && r.draw(), o
            );
          }),
          (this.fnDestroy = function (e) {
            this.api(!0).destroy(e);
          }),
          (this.fnDraw = function (e) {
            this.api(!0).draw(e);
          }),
          (this.fnFilter = function (e, t, n, r, a, i) {
            var o = this.api(!0);
            null === t || t === $
              ? o.search(e, n, r, i)
              : o.column(t).search(e, n, r, i),
              o.draw();
          }),
          (this.fnGetData = function (e, t) {
            var n = this.api(!0);
            if (e === $) return n.data().toArray();
            var r = e.nodeName ? e.nodeName.toLowerCase() : "";
            return t !== $ || "td" == r || "th" == r
              ? n.cell(e, t).data()
              : n.row(e).data() || null;
          }),
          (this.fnGetNodes = function (e) {
            var t = this.api(!0);
            return e !== $
              ? t.row(e).node()
              : t.rows().nodes().flatten().toArray();
          }),
          (this.fnGetPosition = function (e) {
            var t = this.api(!0),
              n = e.nodeName.toUpperCase();
            if ("TR" == n) return t.row(e).index();
            if ("TD" != n && "TH" != n) return null;
            var r = t.cell(e).index();
            return [r.row, r.columnVisible, r.column];
          }),
          (this.fnIsOpen = function (e) {
            return this.api(!0).row(e).child.isShown();
          }),
          (this.fnOpen = function (e, t, n) {
            return this.api(!0).row(e).child(t, n).show().child()[0];
          }),
          (this.fnPageChange = function (e, t) {
            var n = this.api(!0).page(e);
            (t === $ || t) && n.draw(!1);
          }),
          (this.fnSetColumnVis = function (e, t, n) {
            var r = this.api(!0).column(e).visible(t);
            (n === $ || n) && r.columns.adjust().draw();
          }),
          (this.fnSettings = function () {
            return je(this[Ue.iApiIndex]);
          }),
          (this.fnSort = function (e) {
            this.api(!0).order(e).draw();
          }),
          (this.fnSortListener = function (e, t, n) {
            this.api(!0).order.listener(e, t, n);
          }),
          (this.fnUpdate = function (e, t, n, r, a) {
            var i = this.api(!0);
            return (
              n === $ || null === n ? i.row(t).data(e) : i.cell(t, n).data(e),
              (a === $ || a) && i.columns.adjust(),
              (r === $ || r) && i.draw(),
              0
            );
          }),
          (this.fnVersionCheck = Ue.fnVersionCheck);
        var T = this,
          C = D === $,
          _ = this.length;
        for (var e in (C && (D = {}),
        (this.oApi = this.internal = Ue.internal),
        Ge.ext.internal))
          e && (this[e] = $e(e));
        return (
          this.each(function () {
            var i,
              o = 1 < _ ? Re({}, D, !0) : D,
              s = 0,
              e = this.getAttribute("id"),
              l = !1,
              t = Ge.defaults,
              u = B(this);
            if ("table" == this.nodeName.toLowerCase()) {
              I(t),
                j(t.column),
                A(t, t, !0),
                A(t.column, t.column, !0),
                A(t, B.extend(o, u.data()), !0);
              var n = Ge.settings;
              for (s = 0, i = n.length; s < i; s++) {
                var r = n[s];
                if (
                  r.nTable == this ||
                  (r.nTHead && r.nTHead.parentNode == this) ||
                  (r.nTFoot && r.nTFoot.parentNode == this)
                ) {
                  var a = o.bRetrieve !== $ ? o.bRetrieve : t.bRetrieve,
                    c = o.bDestroy !== $ ? o.bDestroy : t.bDestroy;
                  if (C || a) return r.oInstance;
                  if (c) {
                    r.oInstance.fnDestroy();
                    break;
                  }
                  return void Le(r, 0, "Cannot reinitialise DataTable", 3);
                }
                if (r.sTableId == this.id) {
                  n.splice(s, 1);
                  break;
                }
              }
              (null !== e && "" !== e) ||
                ((e = "DataTables_Table_" + Ge.ext._unique++), (this.id = e));
              var f = B.extend(!0, {}, Ge.models.oSettings, {
                sDestroyWidth: u[0].style.width,
                sInstance: e,
                sTableId: e,
              });
              (f.nTable = this),
                (f.oApi = T.internal),
                (f.oInit = o),
                n.push(f),
                (f.oInstance = 1 === T.length ? T : u.dataTable()),
                I(o),
                k(o.oLanguage),
                o.aLengthMenu &&
                  !o.iDisplayLength &&
                  (o.iDisplayLength = B.isArray(o.aLengthMenu[0])
                    ? o.aLengthMenu[0][0]
                    : o.aLengthMenu[0]),
                (o = Re(B.extend(!0, {}, t), o)),
                Ee(f.oFeatures, o, [
                  "bPaginate",
                  "bLengthChange",
                  "bFilter",
                  "bSort",
                  "bSortMulti",
                  "bInfo",
                  "bProcessing",
                  "bAutoWidth",
                  "bSortClasses",
                  "bServerSide",
                  "bDeferRender",
                ]),
                Ee(f, o, [
                  "asStripeClasses",
                  "ajax",
                  "fnServerData",
                  "fnFormatNumber",
                  "sServerMethod",
                  "aaSorting",
                  "aaSortingFixed",
                  "aLengthMenu",
                  "sPaginationType",
                  "sAjaxSource",
                  "sAjaxDataProp",
                  "iStateDuration",
                  "sDom",
                  "bSortCellsTop",
                  "iTabIndex",
                  "fnStateLoadCallback",
                  "fnStateSaveCallback",
                  "renderer",
                  "searchDelay",
                  "rowId",
                  ["iCookieDuration", "iStateDuration"],
                  ["oSearch", "oPreviousSearch"],
                  ["aoSearchCols", "aoPreSearchCols"],
                  ["iDisplayLength", "_iDisplayLength"],
                ]),
                Ee(f.oScroll, o, [
                  ["sScrollX", "sX"],
                  ["sScrollXInner", "sXInner"],
                  ["sScrollY", "sY"],
                  ["bScrollCollapse", "bCollapse"],
                ]),
                Ee(f.oLanguage, o, "fnInfoCallback"),
                Pe(f, "aoDrawCallback", o.fnDrawCallback, "user"),
                Pe(f, "aoServerParams", o.fnServerParams, "user"),
                Pe(f, "aoStateSaveParams", o.fnStateSaveParams, "user"),
                Pe(f, "aoStateLoadParams", o.fnStateLoadParams, "user"),
                Pe(f, "aoStateLoaded", o.fnStateLoaded, "user"),
                Pe(f, "aoRowCallback", o.fnRowCallback, "user"),
                Pe(f, "aoRowCreatedCallback", o.fnCreatedRow, "user"),
                Pe(f, "aoHeaderCallback", o.fnHeaderCallback, "user"),
                Pe(f, "aoFooterCallback", o.fnFooterCallback, "user"),
                Pe(f, "aoInitComplete", o.fnInitComplete, "user"),
                Pe(f, "aoPreDrawCallback", o.fnPreDrawCallback, "user"),
                (f.rowIdFn = q(o.rowId)),
                L(f);
              var d = f.oClasses;
              if (
                (B.extend(d, Ge.ext.classes, o.oClasses),
                u.addClass(d.sTable),
                f.iInitDisplayStart === $ &&
                  ((f.iInitDisplayStart = o.iDisplayStart),
                  (f._iDisplayStart = o.iDisplayStart)),
                null !== o.iDeferLoading)
              ) {
                f.bDeferLoading = !0;
                var h = B.isArray(o.iDeferLoading);
                (f._iRecordsDisplay = h ? o.iDeferLoading[0] : o.iDeferLoading),
                  (f._iRecordsTotal = h ? o.iDeferLoading[1] : o.iDeferLoading);
              }
              var p = f.oLanguage;
              B.extend(!0, p, o.oLanguage),
                p.sUrl &&
                  (B.ajax({
                    dataType: "json",
                    url: p.sUrl,
                    success: function (e) {
                      k(e), A(t.oLanguage, e), B.extend(!0, p, e), oe(f);
                    },
                    error: function () {
                      oe(f);
                    },
                  }),
                  (l = !0)),
                null === o.asStripeClasses &&
                  (f.asStripeClasses = [d.sStripeOdd, d.sStripeEven]);
              var g = f.asStripeClasses,
                m = u.children("tbody").find("tr").eq(0);
              -1 !==
                B.inArray(
                  !0,
                  B.map(g, function (e) {
                    return m.hasClass(e);
                  })
                ) &&
                (B("tbody tr", this).removeClass(g.join(" ")),
                (f.asDestroyStripes = g.slice()));
              var v,
                y = [],
                b = this.getElementsByTagName("thead");
              if (
                (0 !== b.length && (W(f.aoHeader, b[0]), (y = X(f))),
                null === o.aoColumns)
              )
                for (v = [], s = 0, i = y.length; s < i; s++) v.push(null);
              else v = o.aoColumns;
              for (s = 0, i = v.length; s < i; s++) E(f, y ? y[s] : null);
              if (
                (H(f, o.aoColumnDefs, v, function (e, t) {
                  R(f, e, t);
                }),
                m.length)
              ) {
                var w = function (e, t) {
                  return null !== e.getAttribute("data-" + t) ? t : null;
                };
                B(m[0])
                  .children("th, td")
                  .each(function (e, t) {
                    var n = f.aoColumns[e];
                    if (n.mData === e) {
                      var r = w(t, "sort") || w(t, "order"),
                        a = w(t, "filter") || w(t, "search");
                      (null === r && null === a) ||
                        ((n.mData = {
                          _: e + ".display",
                          sort: null !== r ? e + ".@data-" + r : $,
                          type: null !== r ? e + ".@data-" + r : $,
                          filter: null !== a ? e + ".@data-" + a : $,
                        }),
                        R(f, e));
                    }
                  });
              }
              var x = f.oFeatures,
                S = function () {
                  if (o.aaSorting === $) {
                    var e = f.aaSorting;
                    for (s = 0, i = e.length; s < i; s++)
                      e[s][1] = f.aoColumns[s].asSorting[0];
                  }
                  Ae(f),
                    x.bSort &&
                      Pe(f, "aoDrawCallback", function () {
                        if (f.bSorted) {
                          var e = Se(f),
                            n = {};
                          B.each(e, function (e, t) {
                            n[t.src] = t.dir;
                          }),
                            He(f, null, "order", [f, e, n]),
                            Te(f);
                        }
                      }),
                    Pe(
                      f,
                      "aoDrawCallback",
                      function () {
                        (f.bSorted || "ssp" === qe(f) || x.bDeferRender) &&
                          Ae(f);
                      },
                      "sc"
                    );
                  var t = u.children("caption").each(function () {
                      this._captionSide = B(this).css("caption-side");
                    }),
                    n = u.children("thead");
                  0 === n.length && (n = B("<thead/>").appendTo(u)),
                    (f.nTHead = n[0]);
                  var r = u.children("tbody");
                  0 === r.length && (r = B("<tbody/>").appendTo(u)),
                    (f.nTBody = r[0]);
                  var a = u.children("tfoot");
                  if (
                    (0 === a.length &&
                      0 < t.length &&
                      ("" !== f.oScroll.sX || "" !== f.oScroll.sY) &&
                      (a = B("<tfoot/>").appendTo(u)),
                    0 === a.length || 0 === a.children().length
                      ? u.addClass(d.sNoFooter)
                      : 0 < a.length &&
                        ((f.nTFoot = a[0]), W(f.aoFooter, f.nTFoot)),
                    o.aaData)
                  )
                    for (s = 0; s < o.aaData.length; s++) M(f, o.aaData[s]);
                  else
                    (f.bDeferLoading || "dom" == qe(f)) &&
                      O(f, B(f.nTBody).children("tr"));
                  (f.aiDisplay = f.aiDisplayMaster.slice()),
                    !(f.bInitialised = !0) === l && oe(f);
                };
              o.bStateSave
                ? ((x.bStateSave = !0),
                  Pe(f, "aoDrawCallback", ke, "state_save"),
                  Ie(f, o, S))
                : S();
            } else Le(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
          }),
          (T = null),
          this
        );
      },
      Je = {},
      Ye = /[\r\n\u2028]/g,
      Ze = /<.*?>/g,
      Ke =
        /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
      Qe = new RegExp(
        "(\\" +
          [
            "/",
            ".",
            "*",
            "+",
            "?",
            "|",
            "(",
            ")",
            "[",
            "]",
            "{",
            "}",
            "\\",
            "$",
            "^",
            "-",
          ].join("|\\") +
          ")",
        "g"
      ),
      et =
        /[',$\xa3\u20ac\xa5%\u2009\u202F\u20BD\u20a9\u20BArfk\u0243\u039e]/gi,
      tt = function (e) {
        return !e || !0 === e || "-" === e;
      },
      nt = function (e) {
        var t = parseInt(e, 10);
        return !isNaN(t) && isFinite(e) ? t : null;
      },
      rt = function (e, t) {
        return (
          Je[t] || (Je[t] = new RegExp(vt(t), "g")),
          "string" == typeof e && "." !== t
            ? e.replace(/\./g, "").replace(Je[t], ".")
            : e
        );
      },
      at = function (e, t, n) {
        var r = "string" == typeof e;
        return (
          !!tt(e) ||
          (t && r && (e = rt(e, t)),
          n && r && (e = e.replace(et, "")),
          !isNaN(parseFloat(e)) && isFinite(e))
        );
      },
      it = function (e) {
        return tt(e) || "string" == typeof e;
      },
      ot = function (e, t, n) {
        return !!tt(e) || (it(e) && !!at(ft(e), t, n)) || null;
      },
      st = function (e, t, n) {
        var r = [],
          a = 0,
          i = e.length;
        if (n !== $) for (; a < i; a++) e[a] && e[a][t] && r.push(e[a][t][n]);
        else for (; a < i; a++) e[a] && r.push(e[a][t]);
        return r;
      },
      lt = function (e, t, n, r) {
        var a = [],
          i = 0,
          o = t.length;
        if (r !== $) for (; i < o; i++) e[t[i]][n] && a.push(e[t[i]][n][r]);
        else for (; i < o; i++) a.push(e[t[i]][n]);
        return a;
      },
      ut = function (e, t) {
        var n,
          r = [];
        t === $ ? ((t = 0), (n = e)) : ((n = t), (t = e));
        for (var a = t; a < n; a++) r.push(a);
        return r;
      },
      ct = function (e) {
        for (var t = [], n = 0, r = e.length; n < r; n++) e[n] && t.push(e[n]);
        return t;
      },
      ft = function (e) {
        return e.replace(Ze, "");
      },
      dt = function (e) {
        if (e.length < 2) return !0;
        for (
          var t = e.slice().sort(), n = t[0], r = 1, a = t.length;
          r < a;
          r++
        ) {
          if (t[r] === n) return !1;
          n = t[r];
        }
        return !0;
      },
      ht = function (e) {
        if (dt(e)) return e.slice();
        var t,
          n,
          r,
          a = [],
          i = e.length,
          o = 0;
        e: for (n = 0; n < i; n++) {
          for (t = e[n], r = 0; r < o; r++) if (a[r] === t) continue e;
          a.push(t), o++;
        }
        return a;
      };
    Ge.util = {
      throttle: function (r, e) {
        var a,
          i,
          o = e !== $ ? e : 200;
        return function () {
          var e = this,
            t = +new Date(),
            n = arguments;
          a && t < a + o
            ? (clearTimeout(i),
              (i = setTimeout(function () {
                (a = $), r.apply(e, n);
              }, o)))
            : ((a = t), r.apply(e, n));
        };
      },
      escapeRegex: function (e) {
        return e.replace(Qe, "\\$1");
      },
    };
    var pt = function (e, t, n) {
        e[t] !== $ && (e[n] = e[t]);
      },
      gt = /\[.*?\]$/,
      mt = /\(\)$/,
      vt = Ge.util.escapeRegex,
      yt = B("<div>")[0],
      bt = yt.textContent !== $,
      wt = /<.*?>/g,
      xt = Ge.util.throttle,
      St = [],
      Dt = Array.prototype,
      Tt = function (e) {
        var t,
          n,
          r = Ge.settings,
          a = B.map(r, function (e) {
            return e.nTable;
          });
        return e
          ? e.nTable && e.oApi
            ? [e]
            : e.nodeName && "table" === e.nodeName.toLowerCase()
            ? -1 !== (t = B.inArray(e, a))
              ? [r[t]]
              : null
            : e && "function" == typeof e.settings
            ? e.settings().toArray()
            : ("string" == typeof e ? (n = B(e)) : e instanceof B && (n = e),
              n
                ? n
                    .map(function () {
                      return -1 !== (t = B.inArray(this, a)) ? r[t] : null;
                    })
                    .toArray()
                : void 0)
          : [];
      };
    (ze = function (e, t) {
      if (!(this instanceof ze)) return new ze(e, t);
      var n = [],
        r = function (e) {
          var t = Tt(e);
          t && n.push.apply(n, t);
        };
      if (B.isArray(e)) for (var a = 0, i = e.length; a < i; a++) r(e[a]);
      else r(e);
      (this.context = ht(n)),
        t && B.merge(this, t),
        (this.selector = { rows: null, cols: null, opts: null }),
        ze.extend(this, this, St);
    }),
      (Ge.Api = ze),
      B.extend(ze.prototype, {
        any: function () {
          return 0 !== this.count();
        },
        concat: Dt.concat,
        context: [],
        count: function () {
          return this.flatten().length;
        },
        each: function (e) {
          for (var t = 0, n = this.length; t < n; t++)
            e.call(this, this[t], t, this);
          return this;
        },
        eq: function (e) {
          var t = this.context;
          return t.length > e ? new ze(t[e], this[e]) : null;
        },
        filter: function (e) {
          var t = [];
          if (Dt.filter) t = Dt.filter.call(this, e, this);
          else
            for (var n = 0, r = this.length; n < r; n++)
              e.call(this, this[n], n, this) && t.push(this[n]);
          return new ze(this.context, t);
        },
        flatten: function () {
          var e = [];
          return new ze(this.context, e.concat.apply(e, this.toArray()));
        },
        join: Dt.join,
        indexOf:
          Dt.indexOf ||
          function (e, t) {
            for (var n = t || 0, r = this.length; n < r; n++)
              if (this[n] === e) return n;
            return -1;
          },
        iterator: function (e, t, n, r) {
          var a,
            i,
            o,
            s,
            l,
            u,
            c,
            f,
            d = [],
            h = this.context,
            p = this.selector;
          for (
            "string" == typeof e && ((r = n), (n = t), (t = e), (e = !1)),
              i = 0,
              o = h.length;
            i < o;
            i++
          ) {
            var g = new ze(h[i]);
            if ("table" === t) (a = n.call(g, h[i], i)) !== $ && d.push(a);
            else if ("columns" === t || "rows" === t)
              (a = n.call(g, h[i], this[i], i)) !== $ && d.push(a);
            else if (
              "column" === t ||
              "column-rows" === t ||
              "row" === t ||
              "cell" === t
            )
              for (
                c = this[i],
                  "column-rows" === t && (u = It(h[i], p.opts)),
                  s = 0,
                  l = c.length;
                s < l;
                s++
              )
                (f = c[s]),
                  (a =
                    "cell" === t
                      ? n.call(g, h[i], f.row, f.column, i, s)
                      : n.call(g, h[i], f, i, s, u)) !== $ && d.push(a);
          }
          if (d.length || r) {
            var m = new ze(h, e ? d.concat.apply([], d) : d),
              v = m.selector;
            return (v.rows = p.rows), (v.cols = p.cols), (v.opts = p.opts), m;
          }
          return this;
        },
        lastIndexOf:
          Dt.lastIndexOf ||
          function () {
            return this.indexOf.apply(this.toArray.reverse(), arguments);
          },
        length: 0,
        map: function (e) {
          var t = [];
          if (Dt.map) t = Dt.map.call(this, e, this);
          else
            for (var n = 0, r = this.length; n < r; n++)
              t.push(e.call(this, this[n], n));
          return new ze(this.context, t);
        },
        pluck: function (t) {
          return this.map(function (e) {
            return e[t];
          });
        },
        pop: Dt.pop,
        push: Dt.push,
        reduce:
          Dt.reduce ||
          function (e, t) {
            return n(this, e, t, 0, this.length, 1);
          },
        reduceRight:
          Dt.reduceRight ||
          function (e, t) {
            return n(this, e, t, this.length - 1, -1, -1);
          },
        reverse: Dt.reverse,
        selector: null,
        shift: Dt.shift,
        slice: function () {
          return new ze(this.context, this);
        },
        sort: Dt.sort,
        splice: Dt.splice,
        toArray: function () {
          return Dt.slice.call(this);
        },
        to$: function () {
          return B(this);
        },
        toJQuery: function () {
          return B(this);
        },
        unique: function () {
          return new ze(this.context, ht(this));
        },
        unshift: Dt.unshift,
      }),
      (ze.extend = function (e, t, n) {
        if (n.length && t && (t instanceof ze || t.__dt_wrapper)) {
          var r,
            a,
            i,
            o = function (t, n, r) {
              return function () {
                var e = n.apply(t, arguments);
                return ze.extend(e, e, r.methodExt), e;
              };
            };
          for (r = 0, a = n.length; r < a; r++)
            (t[(i = n[r]).name] =
              "function" === i.type
                ? o(e, i.val, i)
                : "object" === i.type
                ? {}
                : i.val),
              (t[i.name].__dt_wrapper = !0),
              ze.extend(e, t[i.name], i.propExt);
        }
      }),
      (ze.register = Xe =
        function (e, t) {
          if (B.isArray(e))
            for (var n = 0, r = e.length; n < r; n++) ze.register(e[n], t);
          else {
            var a,
              i,
              o,
              s,
              l = e.split("."),
              u = St,
              c = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n].name === t) return e[n];
                return null;
              };
            for (a = 0, i = l.length; a < i; a++) {
              var f = c(
                u,
                (o = (s = -1 !== l[a].indexOf("()"))
                  ? l[a].replace("()", "")
                  : l[a])
              );
              f ||
                ((f = {
                  name: o,
                  val: {},
                  methodExt: [],
                  propExt: [],
                  type: "object",
                }),
                u.push(f)),
                a === i - 1
                  ? ((f.val = t),
                    (f.type =
                      "function" == typeof t
                        ? "function"
                        : B.isPlainObject(t)
                        ? "object"
                        : "other"))
                  : (u = s ? f.methodExt : f.propExt);
            }
          }
        }),
      (ze.registerPlural = Ve =
        function (e, t, n) {
          ze.register(e, n),
            ze.register(t, function () {
              var e = n.apply(this, arguments);
              return e === this
                ? this
                : e instanceof ze
                ? e.length
                  ? B.isArray(e[0])
                    ? new ze(e.context, e[0])
                    : e[0]
                  : $
                : e;
            });
        });
    var Ct = function (e, t) {
      if ("number" == typeof e) return [t[e]];
      var n = B.map(t, function (e) {
        return e.nTable;
      });
      return B(n)
        .filter(e)
        .map(function () {
          var e = B.inArray(this, n);
          return t[e];
        })
        .toArray();
    };
    Xe("tables()", function (e) {
      return e ? new ze(Ct(e, this.context)) : this;
    }),
      Xe("table()", function (e) {
        var t = this.tables(e),
          n = t.context;
        return n.length ? new ze(n[0]) : t;
      }),
      Ve("tables().nodes()", "table().node()", function () {
        return this.iterator(
          "table",
          function (e) {
            return e.nTable;
          },
          1
        );
      }),
      Ve("tables().body()", "table().body()", function () {
        return this.iterator(
          "table",
          function (e) {
            return e.nTBody;
          },
          1
        );
      }),
      Ve("tables().header()", "table().header()", function () {
        return this.iterator(
          "table",
          function (e) {
            return e.nTHead;
          },
          1
        );
      }),
      Ve("tables().footer()", "table().footer()", function () {
        return this.iterator(
          "table",
          function (e) {
            return e.nTFoot;
          },
          1
        );
      }),
      Ve("tables().containers()", "table().container()", function () {
        return this.iterator(
          "table",
          function (e) {
            return e.nTableWrapper;
          },
          1
        );
      }),
      Xe("draw()", function (t) {
        return this.iterator("table", function (e) {
          "page" === t
            ? b(e)
            : ("string" == typeof t && (t = "full-hold" !== t), D(e, !1 === t));
        });
      }),
      Xe("page()", function (t) {
        return t === $
          ? this.page.info().page
          : this.iterator("table", function (e) {
              fe(e, t);
            });
      }),
      Xe("page.info()", function () {
        if (0 === this.context.length) return $;
        var e = this.context[0],
          t = e._iDisplayStart,
          n = e.oFeatures.bPaginate ? e._iDisplayLength : -1,
          r = e.fnRecordsDisplay(),
          a = -1 === n;
        return {
          page: a ? 0 : Math.floor(t / n),
          pages: a ? 1 : Math.ceil(r / n),
          start: t,
          end: e.fnDisplayEnd(),
          length: n,
          recordsTotal: e.fnRecordsTotal(),
          recordsDisplay: r,
          serverSide: "ssp" === qe(e),
        };
      }),
      Xe("page.len()", function (t) {
        return t === $
          ? 0 !== this.context.length
            ? this.context[0]._iDisplayLength
            : $
          : this.iterator("table", function (e) {
              le(e, t);
            });
      });
    var _t = function (a, i, e) {
      if (e) {
        var t = new ze(a);
        t.one("draw", function () {
          e(t.ajax.json());
        });
      }
      if ("ssp" == qe(a)) D(a, i);
      else {
        he(a, !0);
        var n = a.jqXHR;
        n && 4 !== n.readyState && n.abort(),
          C(a, [], function (e) {
            u(a);
            for (var t = V(a, e), n = 0, r = t.length; n < r; n++) M(a, t[n]);
            D(a, i), he(a, !1);
          });
      }
    };
    Xe("ajax.json()", function () {
      var e = this.context;
      if (0 < e.length) return e[0].json;
    }),
      Xe("ajax.params()", function () {
        var e = this.context;
        if (0 < e.length) return e[0].oAjaxData;
      }),
      Xe("ajax.reload()", function (t, n) {
        return this.iterator("table", function (e) {
          _t(e, !1 === n, t);
        });
      }),
      Xe("ajax.url()", function (t) {
        var e = this.context;
        return t === $
          ? 0 === e.length
            ? $
            : (e = e[0]).ajax
            ? B.isPlainObject(e.ajax)
              ? e.ajax.url
              : e.ajax
            : e.sAjaxSource
          : this.iterator("table", function (e) {
              B.isPlainObject(e.ajax) ? (e.ajax.url = t) : (e.ajax = t);
            });
      }),
      Xe("ajax.url().load()", function (t, n) {
        return this.iterator("table", function (e) {
          _t(e, !1 === n, t);
        });
      });
    var At = function (e, t, n, r, a) {
        var i,
          o,
          s,
          l,
          u,
          c,
          f = [],
          d = typeof t;
        for (
          (t && "string" !== d && "function" !== d && t.length !== $) ||
            (t = [t]),
            s = 0,
            l = t.length;
          s < l;
          s++
        )
          for (
            u = 0,
              c = (o =
                t[s] && t[s].split && !t[s].match(/[\[\(:]/)
                  ? t[s].split(",")
                  : [t[s]]).length;
            u < c;
            u++
          )
            (i = n("string" == typeof o[u] ? B.trim(o[u]) : o[u])) &&
              i.length &&
              (f = f.concat(i));
        var h = Ue.selector[e];
        if (h.length) for (s = 0, l = h.length; s < l; s++) f = h[s](r, a, f);
        return ht(f);
      },
      Nt = function (e) {
        return (
          e || (e = {}),
          e.filter && e.search === $ && (e.search = e.filter),
          B.extend({ search: "none", order: "current", page: "all" }, e)
        );
      },
      kt = function (e) {
        for (var t = 0, n = e.length; t < n; t++)
          if (0 < e[t].length)
            return (
              (e[0] = e[t]),
              (e[0].length = 1),
              (e.length = 1),
              (e.context = [e.context[t]]),
              e
            );
        return (e.length = 0), e;
      },
      It = function (e, t) {
        var n,
          r = [],
          a = e.aiDisplay,
          i = e.aiDisplayMaster,
          o = t.search,
          s = t.order,
          l = t.page;
        if ("ssp" == qe(e)) return "removed" === o ? [] : ut(0, i.length);
        if ("current" == l)
          for (c = e._iDisplayStart, f = e.fnDisplayEnd(); c < f; c++)
            r.push(a[c]);
        else if ("current" == s || "applied" == s) {
          if ("none" == o) r = i.slice();
          else if ("applied" == o) r = a.slice();
          else if ("removed" == o) {
            for (var u = {}, c = 0, f = a.length; c < f; c++) u[a[c]] = null;
            r = B.map(i, function (e) {
              return u.hasOwnProperty(e) ? null : e;
            });
          }
        } else if ("index" == s || "original" == s)
          for (c = 0, f = e.aoData.length; c < f; c++)
            "none" == o
              ? r.push(c)
              : ((-1 === (n = B.inArray(c, a)) && "removed" == o) ||
                  (0 <= n && "applied" == o)) &&
                r.push(c);
        return r;
      },
      jt = function (l, e, u) {
        var c;
        return At(
          "row",
          e,
          function (n) {
            var e = nt(n),
              r = l.aoData;
            if (null !== e && !u) return [e];
            if ((c || (c = It(l, u)), null !== e && -1 !== B.inArray(e, c)))
              return [e];
            if (null === n || n === $ || "" === n) return c;
            if ("function" == typeof n)
              return B.map(c, function (e) {
                var t = r[e];
                return n(e, t._aData, t.nTr) ? e : null;
              });
            if (n.nodeName) {
              var t = n._DT_RowIndex,
                a = n._DT_CellIndex;
              if (t !== $) return r[t] && r[t].nTr === n ? [t] : [];
              if (a)
                return r[a.row] && r[a.row].nTr === n.parentNode ? [a.row] : [];
              var i = B(n).closest("*[data-dt-row]");
              return i.length ? [i.data("dt-row")] : [];
            }
            if ("string" == typeof n && "#" === n.charAt(0)) {
              var o = l.aIds[n.replace(/^#/, "")];
              if (o !== $) return [o.idx];
            }
            var s = ct(lt(l.aoData, c, "nTr"));
            return B(s)
              .filter(n)
              .map(function () {
                return this._DT_RowIndex;
              })
              .toArray();
          },
          l,
          u
        );
      };
    Xe("rows()", function (t, n) {
      t === $ ? (t = "") : B.isPlainObject(t) && ((n = t), (t = "")),
        (n = Nt(n));
      var e = this.iterator(
        "table",
        function (e) {
          return jt(e, t, n);
        },
        1
      );
      return (e.selector.rows = t), (e.selector.opts = n), e;
    }),
      Xe("rows().nodes()", function () {
        return this.iterator(
          "row",
          function (e, t) {
            return e.aoData[t].nTr || $;
          },
          1
        );
      }),
      Xe("rows().data()", function () {
        return this.iterator(
          !0,
          "rows",
          function (e, t) {
            return lt(e.aoData, t, "_aData");
          },
          1
        );
      }),
      Ve("rows().cache()", "row().cache()", function (r) {
        return this.iterator(
          "row",
          function (e, t) {
            var n = e.aoData[t];
            return "search" === r ? n._aFilterData : n._aSortData;
          },
          1
        );
      }),
      Ve("rows().invalidate()", "row().invalidate()", function (n) {
        return this.iterator("row", function (e, t) {
          a(e, t, n);
        });
      }),
      Ve("rows().indexes()", "row().index()", function () {
        return this.iterator(
          "row",
          function (e, t) {
            return t;
          },
          1
        );
      }),
      Ve("rows().ids()", "row().id()", function (e) {
        for (var t = [], n = this.context, r = 0, a = n.length; r < a; r++)
          for (var i = 0, o = this[r].length; i < o; i++) {
            var s = n[r].rowIdFn(n[r].aoData[this[r][i]]._aData);
            t.push((!0 === e ? "#" : "") + s);
          }
        return new ze(n, t);
      }),
      Ve("rows().remove()", "row().remove()", function () {
        var d = this;
        return (
          this.iterator("row", function (e, t, n) {
            var r,
              a,
              i,
              o,
              s,
              l,
              u = e.aoData,
              c = u[t];
            for (u.splice(t, 1), r = 0, a = u.length; r < a; r++)
              if (
                ((l = (s = u[r]).anCells),
                null !== s.nTr && (s.nTr._DT_RowIndex = r),
                null !== l)
              )
                for (i = 0, o = l.length; i < o; i++)
                  l[i]._DT_CellIndex.row = r;
            h(e.aiDisplayMaster, t),
              h(e.aiDisplay, t),
              h(d[n], t, !1),
              0 < e._iRecordsDisplay && e._iRecordsDisplay--,
              Me(e);
            var f = e.rowIdFn(c._aData);
            f !== $ && delete e.aIds[f];
          }),
          this.iterator("table", function (e) {
            for (var t = 0, n = e.aoData.length; t < n; t++)
              e.aoData[t].idx = t;
          }),
          this
        );
      }),
      Xe("rows.add()", function (i) {
        var e = this.iterator(
            "table",
            function (e) {
              var t,
                n,
                r,
                a = [];
              for (n = 0, r = i.length; n < r; n++)
                (t = i[n]).nodeName && "TR" === t.nodeName.toUpperCase()
                  ? a.push(O(e, t)[0])
                  : a.push(M(e, t));
              return a;
            },
            1
          ),
          t = this.rows(-1);
        return t.pop(), B.merge(t, e), t;
      }),
      Xe("row()", function (e, t) {
        return kt(this.rows(e, t));
      }),
      Xe("row().data()", function (e) {
        var t = this.context;
        if (e === $)
          return t.length && this.length ? t[0].aoData[this[0]]._aData : $;
        var n = t[0].aoData[this[0]];
        return (
          (n._aData = e),
          B.isArray(e) && n.nTr.id && y(t[0].rowId)(e, n.nTr.id),
          a(t[0], this[0], "data"),
          this
        );
      }),
      Xe("row().node()", function () {
        var e = this.context;
        return (e.length && this.length && e[0].aoData[this[0]].nTr) || null;
      }),
      Xe("row.add()", function (t) {
        t instanceof B && t.length && (t = t[0]);
        var e = this.iterator("table", function (e) {
          return t.nodeName && "TR" === t.nodeName.toUpperCase()
            ? O(e, t)[0]
            : M(e, t);
        });
        return this.row(e[0]);
      });
    var Lt = function (i, e, t, n) {
        var o = [],
          s = function (e, t) {
            if (B.isArray(e) || e instanceof B)
              for (var n = 0, r = e.length; n < r; n++) s(e[n], t);
            else if (e.nodeName && "tr" === e.nodeName.toLowerCase()) o.push(e);
            else {
              var a = B("<tr><td/></tr>").addClass(t);
              (B("td", a).addClass(t).html(e)[0].colSpan = F(i)), o.push(a[0]);
            }
          };
        s(t, n),
          e._details && e._details.detach(),
          (e._details = B(o)),
          e._detailsShow && e._details.insertAfter(e.nTr);
      },
      Et = function (e, t) {
        var n = e.context;
        if (n.length) {
          var r = n[0].aoData[t !== $ ? t : e[0]];
          r &&
            r._details &&
            (r._details.remove(), (r._detailsShow = $), (r._details = $));
        }
      },
      Rt = function (e, t) {
        var n = e.context;
        if (n.length && e.length) {
          var r = n[0].aoData[e[0]];
          r._details &&
            ((r._detailsShow = t)
              ? r._details.insertAfter(r.nTr)
              : r._details.detach(),
            Ft(n[0]));
        }
      },
      Ft = function (o) {
        var a = new ze(o),
          e = ".dt.DT_details",
          t = "draw" + e,
          n = "column-visibility" + e,
          r = "destroy" + e,
          s = o.aoData;
        a.off(t + " " + n + " " + r),
          0 < st(s, "_details").length &&
            (a.on(t, function (e, t) {
              o === t &&
                a
                  .rows({ page: "current" })
                  .eq(0)
                  .each(function (e) {
                    var t = s[e];
                    t._detailsShow && t._details.insertAfter(t.nTr);
                  });
            }),
            a.on(n, function (e, t) {
              if (o === t)
                for (var n, r = F(t), a = 0, i = s.length; a < i; a++)
                  (n = s[a])._details &&
                    n._details.children("td[colspan]").attr("colspan", r);
            }),
            a.on(r, function (e, t) {
              if (o === t)
                for (var n = 0, r = s.length; n < r; n++)
                  s[n]._details && Et(a, n);
            }));
      },
      Pt = "" + "row().child",
      Ht = Pt + "()";
    Xe(Ht, function (e, t) {
      var n = this.context;
      return e === $
        ? n.length && this.length
          ? n[0].aoData[this[0]]._details
          : $
        : (!0 === e
            ? this.child.show()
            : !1 === e
            ? Et(this)
            : n.length && this.length && Lt(n[0], n[0].aoData[this[0]], e, t),
          this);
    }),
      Xe([Pt + ".show()", Ht + ".show()"], function () {
        return Rt(this, !0), this;
      }),
      Xe([Pt + ".hide()", Ht + ".hide()"], function () {
        return Rt(this, !1), this;
      }),
      Xe([Pt + ".remove()", Ht + ".remove()"], function () {
        return Et(this), this;
      }),
      Xe(Pt + ".isShown()", function () {
        var e = this.context;
        return (
          (e.length && this.length && e[0].aoData[this[0]]._detailsShow) || !1
        );
      });
    var Mt = /^([^:]+):(name|visIdx|visible)$/,
      Ot = function (e, t, n, r, a) {
        for (var i = [], o = 0, s = a.length; o < s; o++) i.push(g(e, a[o], t));
        return i;
      },
      qt = function (l, e, u) {
        var c = l.aoColumns,
          f = st(c, "sName"),
          d = st(c, "nTh");
        return At(
          "column",
          e,
          function (n) {
            var e = nt(n);
            if ("" === n) return ut(c.length);
            if (null !== e) return [0 <= e ? e : c.length + e];
            if ("function" == typeof n) {
              var r = It(l, u);
              return B.map(c, function (e, t) {
                return n(t, Ot(l, t, 0, 0, r), d[t]) ? t : null;
              });
            }
            var a = "string" == typeof n ? n.match(Mt) : "";
            if (a)
              switch (a[2]) {
                case "visIdx":
                case "visible":
                  var t = parseInt(a[1], 10);
                  if (t < 0) {
                    var i = B.map(c, function (e, t) {
                      return e.bVisible ? t : null;
                    });
                    return [i[i.length + t]];
                  }
                  return [z(l, t)];
                case "name":
                  return B.map(f, function (e, t) {
                    return e === a[1] ? t : null;
                  });
                default:
                  return [];
              }
            if (n.nodeName && n._DT_CellIndex) return [n._DT_CellIndex.column];
            var o = B(d)
              .filter(n)
              .map(function () {
                return B.inArray(this, d);
              })
              .toArray();
            if (o.length || !n.nodeName) return o;
            var s = B(n).closest("*[data-dt-column]");
            return s.length ? [s.data("dt-column")] : [];
          },
          l,
          u
        );
      },
      Wt = function (e, t, n) {
        var r,
          a,
          i,
          o,
          s = e.aoColumns,
          l = s[t],
          u = e.aoData;
        if (n === $) return l.bVisible;
        if (l.bVisible !== n) {
          if (n) {
            var c = B.inArray(!0, st(s, "bVisible"), t + 1);
            for (a = 0, i = u.length; a < i; a++)
              (o = u[a].nTr),
                (r = u[a].anCells),
                o && o.insertBefore(r[t], r[c] || null);
          } else B(st(e.aoData, "anCells", t)).detach();
          l.bVisible = n;
        }
      };
    Xe("columns()", function (t, n) {
      t === $ ? (t = "") : B.isPlainObject(t) && ((n = t), (t = "")),
        (n = Nt(n));
      var e = this.iterator(
        "table",
        function (e) {
          return qt(e, t, n);
        },
        1
      );
      return (e.selector.cols = t), (e.selector.opts = n), e;
    }),
      Ve("columns().header()", "column().header()", function () {
        return this.iterator(
          "column",
          function (e, t) {
            return e.aoColumns[t].nTh;
          },
          1
        );
      }),
      Ve("columns().footer()", "column().footer()", function () {
        return this.iterator(
          "column",
          function (e, t) {
            return e.aoColumns[t].nTf;
          },
          1
        );
      }),
      Ve("columns().data()", "column().data()", function () {
        return this.iterator("column-rows", Ot, 1);
      }),
      Ve("columns().dataSrc()", "column().dataSrc()", function () {
        return this.iterator(
          "column",
          function (e, t) {
            return e.aoColumns[t].mData;
          },
          1
        );
      }),
      Ve("columns().cache()", "column().cache()", function (i) {
        return this.iterator(
          "column-rows",
          function (e, t, n, r, a) {
            return lt(
              e.aoData,
              a,
              "search" === i ? "_aFilterData" : "_aSortData",
              t
            );
          },
          1
        );
      }),
      Ve("columns().nodes()", "column().nodes()", function () {
        return this.iterator(
          "column-rows",
          function (e, t, n, r, a) {
            return lt(e.aoData, a, "anCells", t);
          },
          1
        );
      }),
      Ve("columns().visible()", "column().visible()", function (n, r) {
        var t = this,
          e = this.iterator("column", function (e, t) {
            if (n === $) return e.aoColumns[t].bVisible;
            Wt(e, t, n);
          });
        return (
          n !== $ &&
            this.iterator("table", function (e) {
              v(e, e.aoHeader),
                v(e, e.aoFooter),
                e.aiDisplay.length ||
                  B(e.nTBody).find("td[colspan]").attr("colspan", F(e)),
                ke(e),
                t.iterator("column", function (e, t) {
                  He(e, null, "column-visibility", [e, t, n, r]);
                }),
                (r === $ || r) && t.columns.adjust();
            }),
          e
        );
      }),
      Ve("columns().indexes()", "column().index()", function (n) {
        return this.iterator(
          "column",
          function (e, t) {
            return "visible" === n ? c(e, t) : t;
          },
          1
        );
      }),
      Xe("columns.adjust()", function () {
        return this.iterator(
          "table",
          function (e) {
            U(e);
          },
          1
        );
      }),
      Xe("column.index()", function (e, t) {
        if (0 !== this.context.length) {
          var n = this.context[0];
          if ("fromVisible" === e || "toData" === e) return z(n, t);
          if ("fromData" === e || "toVisible" === e) return c(n, t);
        }
      }),
      Xe("column()", function (e, t) {
        return kt(this.columns(e, t));
      });
    var Bt = function (r, e, t) {
      var a,
        i,
        o,
        s,
        l,
        u,
        c,
        f = r.aoData,
        d = It(r, t),
        n = ct(lt(f, d, "anCells")),
        h = B([].concat.apply([], n)),
        p = r.aoColumns.length;
      return At(
        "cell",
        e,
        function (e) {
          var t = "function" == typeof e;
          if (null === e || e === $ || t) {
            for (i = [], o = 0, s = d.length; o < s; o++)
              for (a = d[o], l = 0; l < p; l++)
                (u = { row: a, column: l }),
                  t
                    ? ((c = f[a]),
                      e(u, g(r, a, l), c.anCells ? c.anCells[l] : null) &&
                        i.push(u))
                    : i.push(u);
            return i;
          }
          if (B.isPlainObject(e))
            return e.column !== $ && e.row !== $ && -1 !== B.inArray(e.row, d)
              ? [e]
              : [];
          var n = h
            .filter(e)
            .map(function (e, t) {
              return {
                row: t._DT_CellIndex.row,
                column: t._DT_CellIndex.column,
              };
            })
            .toArray();
          return n.length || !e.nodeName
            ? n
            : (c = B(e).closest("*[data-dt-row]")).length
            ? [{ row: c.data("dt-row"), column: c.data("dt-column") }]
            : [];
        },
        r,
        t
      );
    };
    Xe("cells()", function (t, e, n) {
      if (
        (B.isPlainObject(t) &&
          (t.row === $ ? ((n = t), (t = null)) : ((n = e), (e = null))),
        B.isPlainObject(e) && ((n = e), (e = null)),
        null === e || e === $)
      )
        return this.iterator("table", function (e) {
          return Bt(e, t, Nt(n));
        });
      var r,
        a,
        i,
        o,
        s = n ? { page: n.page, order: n.order, search: n.search } : {},
        l = this.columns(e, s),
        u = this.rows(t, s),
        c = this.iterator(
          "table",
          function (e, t) {
            var n = [];
            for (r = 0, a = u[t].length; r < a; r++)
              for (i = 0, o = l[t].length; i < o; i++)
                n.push({ row: u[t][r], column: l[t][i] });
            return n;
          },
          1
        ),
        f = n && n.selected ? this.cells(c, n) : c;
      return B.extend(f.selector, { cols: e, rows: t, opts: n }), f;
    }),
      Ve("cells().nodes()", "cell().node()", function () {
        return this.iterator(
          "cell",
          function (e, t, n) {
            var r = e.aoData[t];
            return r && r.anCells ? r.anCells[n] : $;
          },
          1
        );
      }),
      Xe("cells().data()", function () {
        return this.iterator(
          "cell",
          function (e, t, n) {
            return g(e, t, n);
          },
          1
        );
      }),
      Ve("cells().cache()", "cell().cache()", function (r) {
        return (
          (r = "search" === r ? "_aFilterData" : "_aSortData"),
          this.iterator(
            "cell",
            function (e, t, n) {
              return e.aoData[t][r][n];
            },
            1
          )
        );
      }),
      Ve("cells().render()", "cell().render()", function (r) {
        return this.iterator(
          "cell",
          function (e, t, n) {
            return g(e, t, n, r);
          },
          1
        );
      }),
      Ve("cells().indexes()", "cell().index()", function () {
        return this.iterator(
          "cell",
          function (e, t, n) {
            return { row: t, column: n, columnVisible: c(e, n) };
          },
          1
        );
      }),
      Ve("cells().invalidate()", "cell().invalidate()", function (r) {
        return this.iterator("cell", function (e, t, n) {
          a(e, t, r, n);
        });
      }),
      Xe("cell()", function (e, t, n) {
        return kt(this.cells(e, t, n));
      }),
      Xe("cell().data()", function (e) {
        var t = this.context,
          n = this[0];
        return e === $
          ? t.length && n.length
            ? g(t[0], n[0].row, n[0].column)
            : $
          : (r(t[0], n[0].row, n[0].column, e),
            a(t[0], n[0].row, "data", n[0].column),
            this);
      }),
      Xe("order()", function (t, e) {
        var n = this.context;
        return t === $
          ? 0 !== n.length
            ? n[0].aaSorting
            : $
          : ("number" == typeof t
              ? (t = [[t, e]])
              : t.length &&
                !B.isArray(t[0]) &&
                (t = Array.prototype.slice.call(arguments)),
            this.iterator("table", function (e) {
              e.aaSorting = t.slice();
            }));
      }),
      Xe("order.listener()", function (t, n, r) {
        return this.iterator("table", function (e) {
          _e(e, t, n, r);
        });
      }),
      Xe("order.fixed()", function (t) {
        if (t)
          return this.iterator("table", function (e) {
            e.aaSortingFixed = B.extend(!0, {}, t);
          });
        var e = this.context,
          n = e.length ? e[0].aaSortingFixed : $;
        return B.isArray(n) ? { pre: n } : n;
      }),
      Xe(["columns().order()", "column().order()"], function (r) {
        var a = this;
        return this.iterator("table", function (e, t) {
          var n = [];
          B.each(a[t], function (e, t) {
            n.push([t, r]);
          }),
            (e.aaSorting = n);
        });
      }),
      Xe("search()", function (t, n, r, a) {
        var e = this.context;
        return t === $
          ? 0 !== e.length
            ? e[0].oPreviousSearch.sSearch
            : $
          : this.iterator("table", function (e) {
              e.oFeatures.bFilter &&
                J(
                  e,
                  B.extend({}, e.oPreviousSearch, {
                    sSearch: t + "",
                    bRegex: null !== n && n,
                    bSmart: null === r || r,
                    bCaseInsensitive: null === a || a,
                  }),
                  1
                );
            });
      }),
      Ve("columns().search()", "column().search()", function (r, a, i, o) {
        return this.iterator("column", function (e, t) {
          var n = e.aoPreSearchCols;
          if (r === $) return n[t].sSearch;
          e.oFeatures.bFilter &&
            (B.extend(n[t], {
              sSearch: r + "",
              bRegex: null !== a && a,
              bSmart: null === i || i,
              bCaseInsensitive: null === o || o,
            }),
            J(e, e.oPreviousSearch, 1));
        });
      }),
      Xe("state()", function () {
        return this.context.length ? this.context[0].oSavedState : null;
      }),
      Xe("state.clear()", function () {
        return this.iterator("table", function (e) {
          e.fnStateSaveCallback.call(e.oInstance, e, {});
        });
      }),
      Xe("state.loaded()", function () {
        return this.context.length ? this.context[0].oLoadedState : null;
      }),
      Xe("state.save()", function () {
        return this.iterator("table", function (e) {
          ke(e);
        });
      }),
      (Ge.versionCheck = Ge.fnVersionCheck =
        function (e) {
          for (
            var t,
              n,
              r = Ge.version.split("."),
              a = e.split("."),
              i = 0,
              o = a.length;
            i < o;
            i++
          )
            if ((t = parseInt(r[i], 10) || 0) !== (n = parseInt(a[i], 10) || 0))
              return n < t;
          return !0;
        }),
      (Ge.isDataTable = Ge.fnIsDataTable =
        function (e) {
          var a = B(e).get(0),
            i = !1;
          return (
            e instanceof Ge.Api ||
            (B.each(Ge.settings, function (e, t) {
              var n = t.nScrollHead ? B("table", t.nScrollHead)[0] : null,
                r = t.nScrollFoot ? B("table", t.nScrollFoot)[0] : null;
              (t.nTable !== a && n !== a && r !== a) || (i = !0);
            }),
            i)
          );
        }),
      (Ge.tables = Ge.fnTables =
        function (t) {
          var e = !1;
          B.isPlainObject(t) && ((e = t.api), (t = t.visible));
          var n = B.map(Ge.settings, function (e) {
            if (!t || (t && B(e.nTable).is(":visible"))) return e.nTable;
          });
          return e ? new ze(n) : n;
        }),
      (Ge.camelToHungarian = A),
      Xe("$()", function (e, t) {
        var n = this.rows(t).nodes(),
          r = B(n);
        return B([].concat(r.filter(e).toArray(), r.find(e).toArray()));
      }),
      B.each(["on", "one", "off"], function (e, n) {
        Xe(n + "()", function () {
          var e = Array.prototype.slice.call(arguments);
          e[0] = B.map(e[0].split(/\s/), function (e) {
            return e.match(/\.dt\b/) ? e : e + ".dt";
          }).join(" ");
          var t = B(this.tables().nodes());
          return t[n].apply(t, e), this;
        });
      }),
      Xe("clear()", function () {
        return this.iterator("table", function (e) {
          u(e);
        });
      }),
      Xe("settings()", function () {
        return new ze(this.context, this.context);
      }),
      Xe("init()", function () {
        var e = this.context;
        return e.length ? e[0].oInit : null;
      }),
      Xe("data()", function () {
        return this.iterator("table", function (e) {
          return st(e.aoData, "_aData");
        }).flatten();
      }),
      Xe("destroy()", function (p) {
        return (
          (p = p || !1),
          this.iterator("table", function (t) {
            var n,
              e = t.nTableWrapper.parentNode,
              r = t.oClasses,
              a = t.nTable,
              i = t.nTBody,
              o = t.nTHead,
              s = t.nTFoot,
              l = B(a),
              u = B(i),
              c = B(t.nTableWrapper),
              f = B.map(t.aoData, function (e) {
                return e.nTr;
              });
            (t.bDestroying = !0),
              He(t, "aoDestroyCallback", "destroy", [t]),
              p || new ze(t).columns().visible(!0),
              c.off(".DT").find(":not(tbody *)").off(".DT"),
              B(N).off(".DT-" + t.sInstance),
              a != o.parentNode && (l.children("thead").detach(), l.append(o)),
              s &&
                a != s.parentNode &&
                (l.children("tfoot").detach(), l.append(s)),
              (t.aaSorting = []),
              (t.aaSortingFixed = []),
              Ae(t),
              B(f).removeClass(t.asStripeClasses.join(" ")),
              B("th, td", o).removeClass(
                r.sSortable +
                  " " +
                  r.sSortableAsc +
                  " " +
                  r.sSortableDesc +
                  " " +
                  r.sSortableNone
              ),
              u.children().detach(),
              u.append(f);
            var d = p ? "remove" : "detach";
            l[d](),
              c[d](),
              !p &&
                e &&
                (e.insertBefore(a, t.nTableReinsertBefore),
                l.css("width", t.sDestroyWidth).removeClass(r.sTable),
                (n = t.asDestroyStripes.length) &&
                  u.children().each(function (e) {
                    B(this).addClass(t.asDestroyStripes[e % n]);
                  }));
            var h = B.inArray(t, Ge.settings);
            -1 !== h && Ge.settings.splice(h, 1);
          })
        );
      }),
      B.each(["column", "row", "cell"], function (e, l) {
        Xe(l + "s().every()", function (i) {
          var o = this.selector.opts,
            s = this;
          return this.iterator(l, function (e, t, n, r, a) {
            i.call(
              s[l](t, "cell" === l ? n : o, "cell" === l ? o : $),
              t,
              n,
              r,
              a
            );
          });
        });
      }),
      Xe("i18n()", function (e, t, n) {
        var r = this.context[0],
          a = q(e)(r.oLanguage);
        return (
          a === $ && (a = t),
          n !== $ && B.isPlainObject(a) && (a = a[n] !== $ ? a[n] : a._),
          a.replace("%d", n)
        );
      }),
      (Ge.version = "1.10.20"),
      (Ge.settings = []),
      (Ge.models = {}),
      (Ge.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0,
      }),
      (Ge.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1,
      }),
      (Ge.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null,
      }),
      (Ge.defaults = {
        aaData: null,
        aaSorting: [[0, "asc"]],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function (e) {
          return e
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function (e) {
          try {
            return JSON.parse(
              (-1 === e.iStateDuration ? sessionStorage : localStorage).getItem(
                "DataTables_" + e.sInstance + "_" + location.pathname
              )
            );
          } catch (t) {}
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function (e, t) {
          try {
            (-1 === e.iStateDuration ? sessionStorage : localStorage).setItem(
              "DataTables_" + e.sInstance + "_" + location.pathname,
              JSON.stringify(t)
            );
          } catch (n) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
          oAria: {
            sSortAscending: ": activate to sort column ascending",
            sSortDescending: ": activate to sort column descending",
          },
          oPaginate: {
            sFirst: "First",
            sLast: "Last",
            sNext: "Next",
            sPrevious: "Previous",
          },
          sEmptyTable: "No data available in table",
          sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
          sInfoEmpty: "Showing 0 to 0 of 0 entries",
          sInfoFiltered: "(filtered from _MAX_ total entries)",
          sInfoPostFix: "",
          sDecimal: "",
          sThousands: ",",
          sLengthMenu: "Show _MENU_ entries",
          sLoadingRecords: "Loading...",
          sProcessing: "Processing...",
          sSearch: "Search:",
          sSearchPlaceholder: "",
          sUrl: "",
          sZeroRecords: "No matching records found",
        },
        oSearch: B.extend({}, Ge.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId",
      }),
      o(Ge.defaults),
      (Ge.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null,
      }),
      o(Ge.defaults.column),
      (Ge.models.oSettings = {
        oFeatures: {
          bAutoWidth: null,
          bDeferRender: null,
          bFilter: null,
          bInfo: null,
          bLengthChange: null,
          bPaginate: null,
          bProcessing: null,
          bServerSide: null,
          bSort: null,
          bSortMulti: null,
          bSortClasses: null,
          bStateSave: null,
        },
        oScroll: {
          bCollapse: null,
          iBarWidth: 0,
          sX: null,
          sXInner: null,
          sY: null,
        },
        oLanguage: { fnInfoCallback: null },
        oBrowser: {
          bScrollOversize: !1,
          bScrollbarLeft: !1,
          bBounding: !1,
          barWidth: 0,
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: $,
        oAjaxData: $,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function () {
          return "ssp" == qe(this)
            ? 1 * this._iRecordsTotal
            : this.aiDisplayMaster.length;
        },
        fnRecordsDisplay: function () {
          return "ssp" == qe(this)
            ? 1 * this._iRecordsDisplay
            : this.aiDisplay.length;
        },
        fnDisplayEnd: function () {
          var e = this._iDisplayLength,
            t = this._iDisplayStart,
            n = t + e,
            r = this.aiDisplay.length,
            a = this.oFeatures,
            i = a.bPaginate;
          return a.bServerSide
            ? !1 === i || -1 === e
              ? t + r
              : Math.min(t + e, this._iRecordsDisplay)
            : !i || r < n || -1 === e
            ? r
            : n;
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null,
      }),
      (Ge.ext = Ue =
        {
          buttons: {},
          classes: {},
          build: "dt/dt-1.10.20",
          errMode: "alert",
          feature: [],
          search: [],
          selector: { cell: [], column: [], row: [] },
          internal: {},
          legacy: { ajax: null },
          pager: {},
          renderer: { pageButton: {}, header: {} },
          order: {},
          type: { detect: [], search: {}, order: {} },
          _unique: 0,
          fnVersionCheck: Ge.fnVersionCheck,
          iApiIndex: 0,
          oJUIClasses: {},
          sVersion: Ge.version,
        }),
      B.extend(Ue, {
        afnFiltering: Ue.search,
        aTypes: Ue.type.detect,
        ofnSearch: Ue.type.search,
        oSort: Ue.type.order,
        afnSortData: Ue.order,
        aoFeatures: Ue.feature,
        oApi: Ue.internal,
        oStdClasses: Ue.classes,
        oPagination: Ue.pager,
      }),
      B.extend(Ge.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: "",
      });
    var $t = Ge.ext.pager;
    B.extend($t, {
      simple: function () {
        return ["previous", "next"];
      },
      full: function () {
        return ["first", "previous", "next", "last"];
      },
      numbers: function (e, t) {
        return [We(e, t)];
      },
      simple_numbers: function (e, t) {
        return ["previous", We(e, t), "next"];
      },
      full_numbers: function (e, t) {
        return ["first", "previous", We(e, t), "next", "last"];
      },
      first_last_numbers: function (e, t) {
        return ["first", We(e, t), "last"];
      },
      _numbers: We,
      numbers_length: 7,
    }),
      B.extend(!0, Ge.ext.renderer, {
        pageButton: {
          _: function (u, e, c, t, f, d) {
            var h,
              p,
              n,
              g = u.oClasses,
              m = u.oLanguage.oPaginate,
              v = u.oLanguage.oAria.paginate || {},
              y = 0,
              b = function (e, t) {
                var n,
                  r,
                  a,
                  i,
                  o = g.sPageButtonDisabled,
                  s = function (e) {
                    fe(u, e.data.action, !0);
                  };
                for (n = 0, r = t.length; n < r; n++)
                  if (((a = t[n]), B.isArray(a))) {
                    var l = B("<" + (a.DT_el || "div") + "/>").appendTo(e);
                    b(l, a);
                  } else {
                    switch (((h = null), (p = a), (i = u.iTabIndex), a)) {
                      case "ellipsis":
                        e.append('<span class="ellipsis">&#x2026;</span>');
                        break;
                      case "first":
                        (h = m.sFirst), 0 === f && ((i = -1), (p += " " + o));
                        break;
                      case "previous":
                        (h = m.sPrevious),
                          0 === f && ((i = -1), (p += " " + o));
                        break;
                      case "next":
                        (h = m.sNext),
                          f === d - 1 && ((i = -1), (p += " " + o));
                        break;
                      case "last":
                        (h = m.sLast),
                          f === d - 1 && ((i = -1), (p += " " + o));
                        break;
                      default:
                        (h = a + 1), (p = f === a ? g.sPageButtonActive : "");
                    }
                    null !== h &&
                      (Fe(
                        B("<a>", {
                          class: g.sPageButton + " " + p,
                          "aria-controls": u.sTableId,
                          "aria-label": v[a],
                          "data-dt-idx": y,
                          tabindex: i,
                          id:
                            0 === c && "string" == typeof a
                              ? u.sTableId + "_" + a
                              : null,
                        })
                          .html(h)
                          .appendTo(e),
                        { action: a },
                        s
                      ),
                      y++);
                  }
              };
            try {
              n = B(e).find(w.activeElement).data("dt-idx");
            } catch (r) {}
            b(B(e).empty(), t),
              n !== $ &&
                B(e)
                  .find("[data-dt-idx=" + n + "]")
                  .focus();
          },
        },
      }),
      B.extend(Ge.ext.type.detect, [
        function (e, t) {
          var n = t.oLanguage.sDecimal;
          return at(e, n) ? "num" + n : null;
        },
        function (e) {
          if (e && !(e instanceof Date) && !Ke.test(e)) return null;
          var t = Date.parse(e);
          return (null !== t && !isNaN(t)) || tt(e) ? "date" : null;
        },
        function (e, t) {
          var n = t.oLanguage.sDecimal;
          return at(e, n, !0) ? "num-fmt" + n : null;
        },
        function (e, t) {
          var n = t.oLanguage.sDecimal;
          return ot(e, n) ? "html-num" + n : null;
        },
        function (e, t) {
          var n = t.oLanguage.sDecimal;
          return ot(e, n, !0) ? "html-num-fmt" + n : null;
        },
        function (e) {
          return tt(e) || ("string" == typeof e && -1 !== e.indexOf("<"))
            ? "html"
            : null;
        },
      ]),
      B.extend(Ge.ext.type.search, {
        html: function (e) {
          return tt(e)
            ? e
            : "string" == typeof e
            ? e.replace(Ye, " ").replace(Ze, "")
            : "";
        },
        string: function (e) {
          return tt(e) ? e : "string" == typeof e ? e.replace(Ye, " ") : e;
        },
      });
    var Ut = function (e, t, n, r) {
      return 0 === e || (e && "-" !== e)
        ? (t && (e = rt(e, t)),
          e.replace &&
            (n && (e = e.replace(n, "")), r && (e = e.replace(r, ""))),
          1 * e)
        : -Infinity;
    };
    B.extend(Ue.type.order, {
      "date-pre": function (e) {
        var t = Date.parse(e);
        return isNaN(t) ? -Infinity : t;
      },
      "html-pre": function (e) {
        return tt(e)
          ? ""
          : e.replace
          ? e.replace(/<.*?>/g, "").toLowerCase()
          : e + "";
      },
      "string-pre": function (e) {
        return tt(e)
          ? ""
          : "string" == typeof e
          ? e.toLowerCase()
          : e.toString
          ? e.toString()
          : "";
      },
      "string-asc": function (e, t) {
        return e < t ? -1 : t < e ? 1 : 0;
      },
      "string-desc": function (e, t) {
        return e < t ? 1 : t < e ? -1 : 0;
      },
    }),
      Be(""),
      B.extend(!0, Ge.ext.renderer, {
        header: {
          _: function (i, o, s, l) {
            B(i.nTable).on("order.dt.DT", function (e, t, n, r) {
              if (i === t) {
                var a = s.idx;
                o.removeClass(
                  s.sSortingClass + " " + l.sSortAsc + " " + l.sSortDesc
                ).addClass(
                  "asc" == r[a]
                    ? l.sSortAsc
                    : "desc" == r[a]
                    ? l.sSortDesc
                    : s.sSortingClass
                );
              }
            });
          },
          jqueryui: function (i, o, s, l) {
            B("<div/>")
              .addClass(l.sSortJUIWrapper)
              .append(o.contents())
              .append(
                B("<span/>").addClass(l.sSortIcon + " " + s.sSortingClassJUI)
              )
              .appendTo(o),
              B(i.nTable).on("order.dt.DT", function (e, t, n, r) {
                if (i === t) {
                  var a = s.idx;
                  o
                    .removeClass(l.sSortAsc + " " + l.sSortDesc)
                    .addClass(
                      "asc" == r[a]
                        ? l.sSortAsc
                        : "desc" == r[a]
                        ? l.sSortDesc
                        : s.sSortingClass
                    ),
                    o
                      .find("span." + l.sSortIcon)
                      .removeClass(
                        l.sSortJUIAsc +
                          " " +
                          l.sSortJUIDesc +
                          " " +
                          l.sSortJUI +
                          " " +
                          l.sSortJUIAscAllowed +
                          " " +
                          l.sSortJUIDescAllowed
                      )
                      .addClass(
                        "asc" == r[a]
                          ? l.sSortJUIAsc
                          : "desc" == r[a]
                          ? l.sSortJUIDesc
                          : s.sSortingClassJUI
                      );
                }
              });
          },
        },
      });
    var zt = function (e) {
      return "string" == typeof e
        ? e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        : e;
    };
    return (
      (Ge.render = {
        number: function (i, o, s, l, u) {
          return {
            display: function (e) {
              if ("number" != typeof e && "string" != typeof e) return e;
              var t = e < 0 ? "-" : "",
                n = parseFloat(e);
              if (isNaN(n)) return zt(e);
              (n = n.toFixed(s)), (e = Math.abs(n));
              var r = parseInt(e, 10),
                a = s ? o + (e - r).toFixed(s).substring(2) : "";
              return (
                t +
                (l || "") +
                r.toString().replace(/\B(?=(\d{3})+(?!\d))/g, i) +
                a +
                (u || "")
              );
            },
          };
        },
        text: function () {
          return { display: zt, filter: zt };
        },
      }),
      B.extend(Ge.ext.internal, {
        _fnExternApiFunc: $e,
        _fnBuildAjax: C,
        _fnAjaxUpdate: _,
        _fnAjaxParameters: i,
        _fnAjaxUpdateDraw: s,
        _fnAjaxDataSrc: V,
        _fnAddColumn: E,
        _fnColumnOptions: R,
        _fnAdjustColumnSizing: U,
        _fnVisibleToColumnIndex: z,
        _fnColumnIndexToVisible: c,
        _fnVisbleColumns: F,
        _fnGetColumns: P,
        _fnColumnTypes: l,
        _fnApplyColumnDefs: H,
        _fnHungarianMap: o,
        _fnCamelToHungarian: A,
        _fnLanguageCompat: k,
        _fnBrowserDetect: L,
        _fnAddData: M,
        _fnAddTr: O,
        _fnNodeToDataIndex: e,
        _fnNodeToColumnIndex: t,
        _fnGetCellData: g,
        _fnSetCellData: r,
        _fnSplitObjNotation: m,
        _fnGetObjectDataFn: q,
        _fnSetObjectDataFn: y,
        _fnGetDataMaster: x,
        _fnClearTable: u,
        _fnDeleteIndex: h,
        _fnInvalidate: a,
        _fnGetRowElements: f,
        _fnCreateTr: S,
        _fnBuildHead: d,
        _fnDrawHead: v,
        _fnDraw: b,
        _fnReDraw: D,
        _fnAddOptionsHtml: T,
        _fnDetectHeader: W,
        _fnGetUniqueThs: X,
        _fnFeatureHtmlFilter: G,
        _fnFilterComplete: J,
        _fnFilterCustom: Y,
        _fnFilterColumn: Z,
        _fnFilter: K,
        _fnFilterCreateSearch: Q,
        _fnEscapeRegex: vt,
        _fnFilterData: ee,
        _fnFeatureHtmlInfo: re,
        _fnUpdateInfo: ae,
        _fnInfoMacros: ie,
        _fnInitialise: oe,
        _fnInitComplete: se,
        _fnLengthChange: le,
        _fnFeatureHtmlLength: ue,
        _fnFeatureHtmlPaginate: ce,
        _fnPageChange: fe,
        _fnFeatureHtmlProcessing: de,
        _fnProcessingDisplay: he,
        _fnFeatureHtmlTable: pe,
        _fnScrollDraw: ge,
        _fnApplyToChildren: me,
        _fnCalculateColumnWidths: ve,
        _fnThrottle: xt,
        _fnConvertToWidth: ye,
        _fnGetWidestNode: be,
        _fnGetMaxLenString: we,
        _fnStringToCss: xe,
        _fnSortFlatten: Se,
        _fnSort: De,
        _fnSortAria: Te,
        _fnSortListener: Ce,
        _fnSortAttachListener: _e,
        _fnSortingClasses: Ae,
        _fnSortData: Ne,
        _fnSaveState: ke,
        _fnLoadState: Ie,
        _fnSettingsFromNode: je,
        _fnLog: Le,
        _fnMap: Ee,
        _fnBindAction: Fe,
        _fnCallbackReg: Pe,
        _fnCallbackFire: He,
        _fnLengthOverflow: Me,
        _fnRenderer: Oe,
        _fnDataSource: qe,
        _fnRowAttributes: p,
        _fnExtend: Re,
        _fnCalculateEnd: function () {},
      }),
      (((B.fn.dataTable = Ge).$ = B).fn.dataTableSettings = Ge.settings),
      (B.fn.dataTableExt = Ge.ext),
      (B.fn.DataTable = function (e) {
        return B(this).dataTable(e).api();
      }),
      B.each(Ge, function (e, t) {
        B.fn.DataTable[e] = t;
      }),
      B.fn.dataTable
    );
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof module && "object" == typeof module.exports
      ? e(require("jquery"))
      : e(jQuery);
  })(function (d) {
    function n() {
      var e = o.settings;
      if (e.autoDispose && !d.contains(document.documentElement, this))
        return d(this).timeago("dispose"), this;
      var t = r(this);
      return (
        isNaN(t.datetime) ||
          (0 === e.cutoff || Math.abs(i(t.datetime)) < e.cutoff
            ? d(this).text(a(t.datetime))
            : 0 < d(this).attr("title").length &&
              d(this).text(d(this).attr("title"))),
        this
      );
    }
    function r(e) {
      if (!(e = d(e)).data("timeago")) {
        e.data("timeago", { datetime: o.datetime(e) });
        var t = d.trim(e.text());
        o.settings.localeTitle
          ? e.attr("title", e.data("timeago").datetime.toLocaleString())
          : !(0 < t.length) ||
            (o.isTime(e) && e.attr("title")) ||
            e.attr("title", t);
      }
      return e.data("timeago");
    }
    function a(e) {
      return o.inWords(i(e));
    }
    function i(e) {
      return new Date().getTime() - e.getTime();
    }
    d.timeago = function (e) {
      return e instanceof Date
        ? a(e)
        : a(
            "string" == typeof e
              ? d.timeago.parse(e)
              : "number" == typeof e
              ? new Date(e)
              : d.timeago.datetime(e)
          );
    };
    var o = d.timeago;
    d.extend(d.timeago, {
      settings: {
        refreshMillis: 6e4,
        allowPast: !0,
        allowFuture: !1,
        localeTitle: !1,
        cutoff: 0,
        autoDispose: !0,
        strings: {
          prefixAgo: null,
          prefixFromNow: null,
          suffixAgo: "ago",
          suffixFromNow: "from now",
          inPast: "any moment now",
          seconds: "less than a minute",
          minute: "about a minute",
          minutes: "%d minutes",
          hour: "about an hour",
          hours: "about %d hours",
          day: "a day",
          days: "%d days",
          month: "about a month",
          months: "%d months",
          year: "about a year",
          years: "%d years",
          wordSeparator: " ",
          numbers: [],
        },
      },
      inWords: function (a) {
        function e(e, t) {
          var n = d.isFunction(e) ? e(t, a) : e,
            r = (i.numbers && i.numbers[t]) || t;
          return n.replace(/%d/i, r);
        }
        if (!this.settings.allowPast && !this.settings.allowFuture)
          throw "timeago allowPast and allowFuture settings can not both be set to false.";
        var i = this.settings.strings,
          t = i.prefixAgo,
          n = i.suffixAgo;
        if (
          (this.settings.allowFuture &&
            a < 0 &&
            ((t = i.prefixFromNow), (n = i.suffixFromNow)),
          !this.settings.allowPast && 0 <= a)
        )
          return this.settings.strings.inPast;
        var r = Math.abs(a) / 1e3,
          o = r / 60,
          s = o / 60,
          l = s / 24,
          u = l / 365,
          c =
            (r < 45 && e(i.seconds, Math.round(r))) ||
            (r < 90 && e(i.minute, 1)) ||
            (o < 45 && e(i.minutes, Math.round(o))) ||
            (o < 90 && e(i.hour, 1)) ||
            (s < 24 && e(i.hours, Math.round(s))) ||
            (s < 42 && e(i.day, 1)) ||
            (l < 30 && e(i.days, Math.round(l))) ||
            (l < 45 && e(i.month, 1)) ||
            (l < 365 && e(i.months, Math.round(l / 30))) ||
            (u < 1.5 && e(i.year, 1)) ||
            e(i.years, Math.round(u)),
          f = i.wordSeparator || "";
        return (
          i.wordSeparator === undefined && (f = " "), d.trim([t, c, n].join(f))
        );
      },
      parse: function (e) {
        var t = d.trim(e);
        return (
          (t = (t = (t = (t = (t = t.replace(/\.\d+/, ""))
            .replace(/-/, "/")
            .replace(/-/, "/"))
            .replace(/T/, " ")
            .replace(/Z/, " UTC")).replace(
            /([\+\-]\d\d)\:?(\d\d)/,
            " $1$2"
          )).replace(/([\+\-]\d\d)$/, " $100")),
          new Date(t)
        );
      },
      datetime: function (e) {
        var t = o.isTime(e) ? d(e).attr("datetime") : d(e).attr("title");
        return o.parse(t);
      },
      isTime: function (e) {
        return "time" === d(e).get(0).tagName.toLowerCase();
      },
    });
    var s = {
      init: function () {
        s.dispose.call(this);
        var e = d.proxy(n, this);
        e();
        var t = o.settings;
        0 < t.refreshMillis &&
          (this._timeagoInterval = setInterval(e, t.refreshMillis));
      },
      update: function (e) {
        var t = e instanceof Date ? e : o.parse(e);
        d(this).data("timeago", { datetime: t }),
          o.settings.localeTitle && d(this).attr("title", t.toLocaleString()),
          n.apply(this);
      },
      updateFromDOM: function () {
        d(this).data("timeago", {
          datetime: o.parse(
            o.isTime(this) ? d(this).attr("datetime") : d(this).attr("title")
          ),
        }),
          n.apply(this);
      },
      dispose: function () {
        this._timeagoInterval &&
          (window.clearInterval(this._timeagoInterval),
          (this._timeagoInterval = null));
      },
    };
    (d.fn.timeago = function (e, t) {
      var n = e ? s[e] : s.init;
      if (!n) throw new Error("Unknown function name '" + e + "' for timeago");
      return (
        this.each(function () {
          n.call(this, t);
        }),
        this
      );
    }),
      document.createElement("abbr"),
      document.createElement("time");
  }),
  $(document).ready(function () {
    var t, n;
    $(".file_list").dataTable({ order: [[1, "asc"]], paging: !1 }),
      $("a.src_link").click(function () {
        var e = $($(this).attr("href"));
        e.hasClass("highlighted") ||
          (e.find("pre code").each(function (e, t) {
            hljs.highlightBlock(t, "  ");
          }),
          e.addClass("highlighted"));
      }),
      $("a.src_link").colorbox({
        transition: "none",
        inline: !0,
        opacity: 1,
        width: "95%",
        height: "95%",
        onLoad: function () {
          (t = n || window.location.hash.substring(1)),
            (n = this.href.split("#")[1]),
            (window.location.hash = n),
            $(".file_list_container").hide();
        },
        onCleanup: function () {
          t && t != n
            ? ($('a[href="#' + t + '"]').click(), (n = t))
            : ($(".group_tabs a:first").click(), (t = n), (n = "#_AllFiles")),
            (window.location.hash = n);
          var e = $(".group_tabs li.active a").attr("class");
          $("#" + e + ".file_list_container").show();
        },
      }),
      (window.onpopstate = function () {
        "#_" == window.location.hash.substring(0, 2)
          ? ($.colorbox.close(), (n = window.location.hash.substring(1)))
          : $("#colorbox").is(":hidden") &&
            $('a.src_link[href="' + window.location.hash + '"]').colorbox({
              open: !0,
            });
      }),
      $(".source_files").hide(),
      $(".file_list_container").hide(),
      $(".file_list_container h2").each(function () {
        var e = $(this).parent().attr("id"),
          t = $(this).find(".group_name").first().html(),
          n = $(this).find(".covered_percent").first().html();
        $(".group_tabs").append(
          '<li><a href="#' + e + '">' + t + " (" + n + ")</a></li>"
        );
      }),
      $(".group_tabs a").each(function () {
        $(this).addClass($(this).attr("href").replace("#", ""));
      }),
      $(".group_tabs").on("focus", "a", function () {
        $(this).blur();
      });
    var e = $('link[rel="shortcut icon"]').attr("href");
    if (
      ($(".group_tabs").on("click", "a", function () {
        return (
          $(this).parent().hasClass("active") ||
            ($(".group_tabs a").parent().removeClass("active"),
            $(this).parent().addClass("active"),
            $(".file_list_container").hide(),
            $(".file_list_container" + $(this).attr("href")).show(),
            (window.location.href =
              window.location.href.split("#")[0] +
              $(this).attr("href").replace("#", "#_")),
            $('link[rel="shortcut icon"]').remove(),
            $("head").append(
              '<link rel="shortcut icon" type="image/png" href="' + e + '" />'
            )),
          !1
        );
      }),
      window.location.hash)
    ) {
      var r = window.location.hash.substring(1);
      40 == r.length
        ? $('a.src_link[href="#' + r + '"]').click()
        : $(".group_tabs a." + r.replace("_", "")).click();
    } else $(".group_tabs a:first").click();
    $("abbr.timeago").timeago(),
      $("#loading").fadeOut(),
      $("#wrapper").show(),
      $(".dataTables_filter input").focus();
  });
