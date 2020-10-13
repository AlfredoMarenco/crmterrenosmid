function ValidateRfc(e) {
    let t;
    t = 12 === e.length ? "^(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))" : "^(([A-Z]|[a-z]|s){1})(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))";
    const n = new RegExp(t),
        i = e.match(n),
        r = $("input[type='submit']");
    "" !== e ? null == i ? (r.prop("disabled", !0), Swal.fire({ title: "\xa1Error!", text: "El RFC es inv\xe1lido", type: "error", confirmButtonText: "Ok" })) : (r.prop("disabled", !1), Swal.fire({ title: "\xa1\xc9xito!", text: "El RFC " + e + " es v\xe1lido", type: "success", confirmButtonText: "Ok" })) : r.prop("disabled", !1)
}

function ValidateCurp(e) {
    const t = new RegExp("^([A-Z][AEIOUX][A-Z]{2}\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\\d])(\\d)"),
        n = e.match(t),
        i = $("input[type='submit']");
    "" !== e ? null == n ? (i.prop("disabled", !0), Swal.fire({ title: "\xa1Error!", text: "El CURP es inv\xe1lido", type: "error", confirmButtonText: "Ok" })) : (i.prop("disabled", !1), Swal.fire({ title: "\xa1\xc9xito!", text: "El CURP " + e + " es v\xe1lido", type: "success", confirmButtonText: "Ok" })) : i.prop("disabled", !1)
}

function minmax(e, t, n) {
    const i = Swal.mixin({ toast: !0, position: "top-end", showConfirmButton: !1, timer: 3e3 }),
        r = Swal.mixin({ toast: !0, position: "top-end", showConfirmButton: !1 });
    return (isNaN(e) || "" === e) && r.fire({ type: "warning", title: "Se debe escribir el plazo de pagos." }), parseInt(e) < t ? t : parseInt(e) > n ? (i.fire({ type: "warning", title: `El plazo m\xe1ximo de financiamiento son ${n} meses.` }), n) : e
}

function minmaxFirstPayment(e, t, n) {
    1 == $("#down-payment-plan").val() ? ($(".tablesaw-stack td.downpayment-cash").css("display", "none!important"), $(".downpayment-cash").hide(), $(".downpayment-no-cash").show()) : ($(".tablesaw-stack td.downpayment-cash").css("display", "block!important"), $(".downpayment-cash").show(), $(".downpayment-no-cash").hide());
    const i = Swal.mixin({ toast: !0, position: "top-end", showConfirmButton: !1, timer: 3e3 }),
        r = Swal.mixin({ toast: !0, position: "top-end", showConfirmButton: !1 });
    return isNaN(e) || "" === e ? (r.fire({ type: "warning", title: "Se debe escribir el plazo del enganche." }), t) : parseInt(e) < t ? t : parseInt(e) > n ? (i.fire({ type: "warning", title: "El plazo m\xe1ximo del enganche son 12 meses." }), n) : e
}

function upperCase(e) { return $(e).val(e.value.toUpperCase()) }

function change_leader_title(e, t) {
    switch (e) {
        case "vice_director":
            t.text("Director");
            break;
        case "manager":
            t.text("Subdirector");
            break;
        case "coordinator":
            t.text("Gerente");
            break;
        case "salesman":
            t.text("Coordinador");
            break;
        case "realtor":
            t.text("Responsable")
    }
}

function create_structure(e) {
    const t = $("#user_role"),
        n = $("option:selected", t).data("key"),
        i = $("#leader").val(),
        r = $("option:selected", t).data("type"),
        o = `/users/${n}/leaders`,
        a = $(".level-section"),
        s = $("#user_level");
    e && "salesman" === n ? (a.addClass("d-none"), s.prop("disabled", !0)) : (a.removeClass("d-none"), s.prop("disabled", !1)), "evo" === r && "director" !== n ? (change_leader_title(n, $("label", a)), "" === i ? s.prop("required", "salesman" !== n) : s.prop("required", !0), $.ajax({
        type: "GET",
        contentType: "application/json",
        url: o,
        success: function(e) {
            $("#user_level option").remove().trigger("change"), e.forEach(e => {
                const t = new Option(`${e.label} (${e.email})`, e.id, !1, e.id === parseInt(i));
                $("#user_level").append(t).trigger("change")
            }), "" === i && $("#user_level").val(null).trigger("change")
        },
        error: function() {}
    })) : (a.addClass("d-none"), s.prop("disabled", !0), s.prop("required", !1))
}(function() {
    var e = this;
    (function() {
        (function() { this.Rails = { linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]", buttonClickSelector: { selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])", exclude: "form button" }, inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]", formSubmitSelector: "form", formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])", formDisableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled", formEnableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled", fileInputSelector: "input[name][type=file]:not([disabled])", linkDisableSelector: "a[data-disable-with], a[data-disable]", buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]" } }).call(this)
    }).call(e);
    var t = e.Rails;
    (function() {
        (function() {
            var e;
            e = null, t.loadCSPNonce = function() { var t; return e = null != (t = document.querySelector("meta[name=csp-nonce]")) ? t.content : void 0 }, t.cspNonce = function() { return null != e ? e : t.loadCSPNonce() }
        }).call(this),
            function() {
                var e, n;
                n = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector, t.matches = function(e, t) { return null != t.exclude ? n.call(e, t.selector) && !n.call(e, t.exclude) : n.call(e, t) }, e = "_ujsData", t.getData = function(t, n) { var i; return null != (i = t[e]) ? i[n] : void 0 }, t.setData = function(t, n, i) { return null == t[e] && (t[e] = {}), t[e][n] = i }, t.$ = function(e) { return Array.prototype.slice.call(document.querySelectorAll(e)) }
            }.call(this),
            function() {
                var e, n, i;
                e = t.$, i = t.csrfToken = function() { var e; return (e = document.querySelector("meta[name=csrf-token]")) && e.content }, n = t.csrfParam = function() { var e; return (e = document.querySelector("meta[name=csrf-param]")) && e.content }, t.CSRFProtection = function(e) { var t; if (null != (t = i())) return e.setRequestHeader("X-CSRF-Token", t) }, t.refreshCSRFTokens = function() { var t, r; if (r = i(), t = n(), null != r && null != t) return e('form input[name="' + t + '"]').forEach(function(e) { return e.value = r }) }
            }.call(this),
            function() {
                var e, n, i, r;
                i = t.matches, "function" != typeof(e = window.CustomEvent) && ((e = function(e, t) { var n; return (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n }).prototype = window.Event.prototype, r = e.prototype.preventDefault, e.prototype.preventDefault = function() { var e; return e = r.call(this), this.cancelable && !this.defaultPrevented && Object.defineProperty(this, "defaultPrevented", { get: function() { return !0 } }), e }), n = t.fire = function(t, n, i) { var r; return r = new e(n, { bubbles: !0, cancelable: !0, detail: i }), t.dispatchEvent(r), !r.defaultPrevented }, t.stopEverything = function(e) { return n(e.target, "ujs:everythingStopped"), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation() }, t.delegate = function(e, t, n, r) { return e.addEventListener(n, function(e) { var n; for (n = e.target; n instanceof Element && !i(n, t);) n = n.parentNode; if (n instanceof Element && !1 === r.call(n, e)) return e.preventDefault(), e.stopPropagation() }) }
            }.call(this),
            function() {
                var e, n, i, r, o, a;
                r = t.cspNonce, n = t.CSRFProtection, t.fire, e = { "*": "*/*", text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript", script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, t.ajax = function(e) { var t; return e = o(e), t = i(e, function() { var n, i; return i = a(null != (n = t.response) ? n : t.responseText, t.getResponseHeader("Content-Type")), 2 === Math.floor(t.status / 100) ? "function" == typeof e.success && e.success(i, t.statusText, t) : "function" == typeof e.error && e.error(i, t.statusText, t), "function" == typeof e.complete ? e.complete(t, t.statusText) : void 0 }), !(null != e.beforeSend && !e.beforeSend(t, e)) && (t.readyState === XMLHttpRequest.OPENED ? t.send(e.data) : void 0) }, o = function(t) { return t.url = t.url || location.href, t.type = t.type.toUpperCase(), "GET" === t.type && t.data && (t.url.indexOf("?") < 0 ? t.url += "?" + t.data : t.url += "&" + t.data), null == e[t.dataType] && (t.dataType = "*"), t.accept = e[t.dataType], "*" !== t.dataType && (t.accept += ", */*; q=0.01"), t }, i = function(e, t) { var i; return (i = new XMLHttpRequest).open(e.type, e.url, !0), i.setRequestHeader("Accept", e.accept), "string" == typeof e.data && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), e.crossDomain || i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n(i), i.withCredentials = !!e.withCredentials, i.onreadystatechange = function() { if (i.readyState === XMLHttpRequest.DONE) return t(i) }, i }, a = function(e, t) {
                    var n, i;
                    if ("string" == typeof e && "string" == typeof t)
                        if (t.match(/\bjson\b/)) try { e = JSON.parse(e) } catch (o) {} else if (t.match(/\b(?:java|ecma)script\b/))(i = document.createElement("script")).setAttribute("nonce", r()), i.text = e, document.head.appendChild(i).parentNode.removeChild(i);
                            else if (t.match(/\b(xml|html|svg)\b/)) { n = new DOMParser, t = t.replace(/;.+/, ""); try { e = n.parseFromString(e, t) } catch (o) {} }
                    return e
                }, t.href = function(e) { return e.href }, t.isCrossDomain = function(e) {
                    var t, n;
                    (t = document.createElement("a")).href = location.href, n = document.createElement("a");
                    try { return n.href = e, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host) } catch (i) { return i, !0 }
                }
            }.call(this),
            function() {
                var e, n;
                e = t.matches, n = function(e) { return Array.prototype.slice.call(e) }, t.serializeElement = function(t, i) { var r, o; return r = [t], e(t, "form") && (r = n(t.elements)), o = [], r.forEach(function(t) { if (t.name && !t.disabled) return e(t, "select") ? n(t.options).forEach(function(e) { if (e.selected) return o.push({ name: t.name, value: e.value }) }) : t.checked || -1 === ["radio", "checkbox", "submit"].indexOf(t.type) ? o.push({ name: t.name, value: t.value }) : void 0 }), i && o.push(i), o.map(function(e) { return null != e.name ? encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value) : e }).join("&") }, t.formElements = function(t, i) { return e(t, "form") ? n(t.elements).filter(function(t) { return e(t, i) }) : n(t.querySelectorAll(i)) }
            }.call(this),
            function() {
                var e, n, i;
                n = t.fire, i = t.stopEverything, t.handleConfirm = function(t) { if (!e(this)) return i(t) }, e = function(e) {
                    var t, i, r;
                    if (!(r = e.getAttribute("data-confirm"))) return !0;
                    if (t = !1, n(e, "confirm")) {
                        try { t = confirm(r) } catch (o) {}
                        i = n(e, "confirm:complete", [t])
                    }
                    return t && i
                }
            }.call(this),
            function() {
                var e, n, i, r, o, a, s, l, c, u, d;
                c = t.matches, l = t.getData, u = t.setData, d = t.stopEverything, s = t.formElements, t.handleDisabledElement = function(e) { if (this.disabled) return d(e) }, t.enableElement = function(e) { var n; return n = e instanceof Event ? e.target : e, c(n, t.linkDisableSelector) ? a(n) : c(n, t.buttonDisableSelector) || c(n, t.formEnableSelector) ? r(n) : c(n, t.formSubmitSelector) ? o(n) : void 0 }, t.disableElement = function(r) { var o; return o = r instanceof Event ? r.target : r, c(o, t.linkDisableSelector) ? i(o) : c(o, t.buttonDisableSelector) || c(o, t.formDisableSelector) ? e(o) : c(o, t.formSubmitSelector) ? n(o) : void 0 }, i = function(e) { var t; return null != (t = e.getAttribute("data-disable-with")) && (u(e, "ujs:enable-with", e.innerHTML), e.innerHTML = t), e.addEventListener("click", d), u(e, "ujs:disabled", !0) }, a = function(e) { var t; return null != (t = l(e, "ujs:enable-with")) && (e.innerHTML = t, u(e, "ujs:enable-with", null)), e.removeEventListener("click", d), u(e, "ujs:disabled", null) }, n = function(n) { return s(n, t.formDisableSelector).forEach(e) }, e = function(e) { var t; return null != (t = e.getAttribute("data-disable-with")) && (c(e, "button") ? (u(e, "ujs:enable-with", e.innerHTML), e.innerHTML = t) : (u(e, "ujs:enable-with", e.value), e.value = t)), e.disabled = !0, u(e, "ujs:disabled", !0) }, o = function(e) { return s(e, t.formEnableSelector).forEach(r) }, r = function(e) { var t; return null != (t = l(e, "ujs:enable-with")) && (c(e, "button") ? e.innerHTML = t : e.value = t, u(e, "ujs:enable-with", null)), e.disabled = !1, u(e, "ujs:disabled", null) }
            }.call(this),
            function() {
                var e;
                e = t.stopEverything, t.handleMethod = function(n) { var i, r, o, a, s, l, c; if (c = (l = this).getAttribute("data-method")) return s = t.href(l), r = t.csrfToken(), i = t.csrfParam(), o = document.createElement("form"), a = "<input name='_method' value='" + c + "' type='hidden' />", null == i || null == r || t.isCrossDomain(s) || (a += "<input name='" + i + "' value='" + r + "' type='hidden' />"), a += '<input type="submit" />', o.method = "post", o.action = s, o.target = l.target, o.innerHTML = a, o.style.display = "none", document.body.appendChild(o), o.querySelector('[type="submit"]').click(), e(n) }
            }.call(this),
            function() {
                var e, n, i, r, o, a, s, l, c, u = [].slice;
                a = t.matches, i = t.getData, l = t.setData, n = t.fire, c = t.stopEverything, e = t.ajax, r = t.isCrossDomain, s = t.serializeElement, o = function(e) { var t; return null != (t = e.getAttribute("data-remote")) && "false" !== t }, t.handleRemote = function(d) { var h, p, f, m, g, y, v; return !o(m = this) || (n(m, "ajax:before") ? (v = m.getAttribute("data-with-credentials"), f = m.getAttribute("data-type") || "script", a(m, t.formSubmitSelector) ? (h = i(m, "ujs:submit-button"), g = i(m, "ujs:submit-button-formmethod") || m.method, y = i(m, "ujs:submit-button-formaction") || m.getAttribute("action") || location.href, "GET" === g.toUpperCase() && (y = y.replace(/\?.*$/, "")), "multipart/form-data" === m.enctype ? (p = new FormData(m), null != h && p.append(h.name, h.value)) : p = s(m, h), l(m, "ujs:submit-button", null), l(m, "ujs:submit-button-formmethod", null), l(m, "ujs:submit-button-formaction", null)) : a(m, t.buttonClickSelector) || a(m, t.inputChangeSelector) ? (g = m.getAttribute("data-method"), y = m.getAttribute("data-url"), p = s(m, m.getAttribute("data-params"))) : (g = m.getAttribute("data-method"), y = t.href(m), p = m.getAttribute("data-params")), e({ type: g || "GET", url: y, data: p, dataType: f, beforeSend: function(e, t) { return n(m, "ajax:beforeSend", [e, t]) ? n(m, "ajax:send", [e]) : (n(m, "ajax:stopped"), !1) }, success: function() { var e; return e = 1 <= arguments.length ? u.call(arguments, 0) : [], n(m, "ajax:success", e) }, error: function() { var e; return e = 1 <= arguments.length ? u.call(arguments, 0) : [], n(m, "ajax:error", e) }, complete: function() { var e; return e = 1 <= arguments.length ? u.call(arguments, 0) : [], n(m, "ajax:complete", e) }, crossDomain: r(y), withCredentials: null != v && "false" !== v }), c(d)) : (n(m, "ajax:stopped"), !1)) }, t.formSubmitButtonClick = function() { var e, t; if (t = (e = this).form) return e.name && l(t, "ujs:submit-button", { name: e.name, value: e.value }), l(t, "ujs:formnovalidate-button", e.formNoValidate), l(t, "ujs:submit-button-formaction", e.getAttribute("formaction")), l(t, "ujs:submit-button-formmethod", e.getAttribute("formmethod")) }, t.preventInsignificantClick = function(e) { var t, n, i, r; if (r = ((i = this).getAttribute("data-method") || "GET").toUpperCase(), t = i.getAttribute("data-params"), n = (e.metaKey || e.ctrlKey) && "GET" === r && !t, null != e.button && 0 !== e.button || n) return e.stopImmediatePropagation() }
            }.call(this),
            function() {
                var e, n, i, r, o, a, s, l, c, u, d, h, p, f, m;
                if (a = t.fire, i = t.delegate, l = t.getData, e = t.$, m = t.refreshCSRFTokens, n = t.CSRFProtection, p = t.loadCSPNonce, o = t.enableElement, r = t.disableElement, u = t.handleDisabledElement, c = t.handleConfirm, f = t.preventInsignificantClick, h = t.handleRemote, s = t.formSubmitButtonClick, d = t.handleMethod, "undefined" != typeof jQuery && null !== jQuery && null != jQuery.ajax) {
                    if (jQuery.rails) throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
                    jQuery.rails = t, jQuery.ajaxPrefilter(function(e, t, i) { if (!e.crossDomain) return n(i) })
                }
                t.start = function() { if (window._rails_loaded) throw new Error("rails-ujs has already been loaded!"); return window.addEventListener("pageshow", function() { return e(t.formEnableSelector).forEach(function(e) { if (l(e, "ujs:disabled")) return o(e) }), e(t.linkDisableSelector).forEach(function(e) { if (l(e, "ujs:disabled")) return o(e) }) }), i(document, t.linkDisableSelector, "ajax:complete", o), i(document, t.linkDisableSelector, "ajax:stopped", o), i(document, t.buttonDisableSelector, "ajax:complete", o), i(document, t.buttonDisableSelector, "ajax:stopped", o), i(document, t.linkClickSelector, "click", f), i(document, t.linkClickSelector, "click", u), i(document, t.linkClickSelector, "click", c), i(document, t.linkClickSelector, "click", r), i(document, t.linkClickSelector, "click", h), i(document, t.linkClickSelector, "click", d), i(document, t.buttonClickSelector, "click", f), i(document, t.buttonClickSelector, "click", u), i(document, t.buttonClickSelector, "click", c), i(document, t.buttonClickSelector, "click", r), i(document, t.buttonClickSelector, "click", h), i(document, t.inputChangeSelector, "change", u), i(document, t.inputChangeSelector, "change", c), i(document, t.inputChangeSelector, "change", h), i(document, t.formSubmitSelector, "submit", u), i(document, t.formSubmitSelector, "submit", c), i(document, t.formSubmitSelector, "submit", h), i(document, t.formSubmitSelector, "submit", function(e) { return setTimeout(function() { return r(e) }, 13) }), i(document, t.formSubmitSelector, "ajax:send", r), i(document, t.formSubmitSelector, "ajax:complete", o), i(document, t.formInputClickSelector, "click", f), i(document, t.formInputClickSelector, "click", u), i(document, t.formInputClickSelector, "click", c), i(document, t.formInputClickSelector, "click", s), document.addEventListener("DOMContentLoaded", m), document.addEventListener("DOMContentLoaded", p), window._rails_loaded = !0 }, window.Rails === t && a(document, "rails:attachBindings") && t.start()
            }.call(this)
    }).call(this), "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd && define(t)
}).call(this),
    /*
    Turbolinks 5.2.0
    Copyright © 2018 Basecamp, LLC
     */
    function() {
        var e = this;
        (function() {
            (function() { this.Turbolinks = { supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener, visit: function(e, n) { return t.controller.visit(e, n) }, clearCache: function() { return t.controller.clearCache() }, setProgressBarDelay: function(e) { return t.controller.setProgressBarDelay(e) } } }).call(this)
        }).call(e);
        var t = e.Turbolinks;
        (function() {
            (function() {
                var e, n, i, r = [].slice;
                t.copyObject = function(e) { var t, n, i; for (t in n = {}, e) i = e[t], n[t] = i; return n }, t.closest = function(t, n) { return e.call(t, n) }, e = function() {
                    var e;
                    return null != (e = document.documentElement.closest) ? e : function(e) {
                        var t;
                        for (t = this; t;) {
                            if (t.nodeType === Node.ELEMENT_NODE && n.call(t, e)) return t;
                            t = t.parentNode
                        }
                    }
                }(), t.defer = function(e) { return setTimeout(e, 1) }, t.throttle = function(e) {
                    var t;
                    return t = null,
                        function() { var n, i; return n = 1 <= arguments.length ? r.call(arguments, 0) : [], null != t ? t : t = requestAnimationFrame((i = this, function() { return t = null, e.apply(i, n) })) }
                }, t.dispatch = function(e, t) { var n, r, o, a, s, l; return l = (s = null != t ? t : {}).target, n = s.cancelable, r = s.data, (o = document.createEvent("Events")).initEvent(e, !0, !0 === n), o.data = null != r ? r : {}, o.cancelable && !i && (a = o.preventDefault, o.preventDefault = function() { return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", { get: function() { return !0 } }), a.call(this) }), (null != l ? l : document).dispatchEvent(o), o }, i = function() { var e; return (e = document.createEvent("Events")).initEvent("test", !0, !0), e.preventDefault(), e.defaultPrevented }(), t.match = function(e, t) { return n.call(e, t) }, n = function() { var e, t, n, i; return null != (t = null != (n = null != (i = (e = document.documentElement).matchesSelector) ? i : e.webkitMatchesSelector) ? n : e.msMatchesSelector) ? t : e.mozMatchesSelector }(), t.uuid = function() { var e, t, n; for (n = "", e = t = 1; 36 >= t; e = ++t) n += 9 === e || 14 === e || 19 === e || 24 === e ? "-" : 15 === e ? "4" : 20 === e ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16); return n }
            }).call(this),
                function() {
                    t.Location = function() {
                        function e(e) {
                            var t, n;
                            null == e && (e = ""), (n = document.createElement("a")).href = e.toString(), this.absoluteURL = n.href, 2 > (t = n.hash.length) ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -t), this.anchor = n.hash.slice(1))
                        }
                        var t, n, i, r;
                        return e.wrap = function(e) { return e instanceof this ? e : new this(e) }, e.prototype.getOrigin = function() { return this.absoluteURL.split("/", 3).join("/") }, e.prototype.getPath = function() { var e, t; return null != (e = null != (t = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? t[1] : void 0) ? e : "/" }, e.prototype.getPathComponents = function() { return this.getPath().split("/").slice(1) }, e.prototype.getLastPathComponent = function() { return this.getPathComponents().slice(-1)[0] }, e.prototype.getExtension = function() { var e, t; return null != (e = null != (t = this.getLastPathComponent().match(/\.[^.]*$/)) ? t[0] : void 0) ? e : "" }, e.prototype.isHTML = function() { return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/) }, e.prototype.isPrefixedBy = function(e) { var t; return t = n(e), this.isEqualTo(e) || r(this.absoluteURL, t) }, e.prototype.isEqualTo = function(e) { return this.absoluteURL === (null != e ? e.absoluteURL : void 0) }, e.prototype.toCacheKey = function() { return this.requestURL }, e.prototype.toJSON = function() { return this.absoluteURL }, e.prototype.toString = function() { return this.absoluteURL }, e.prototype.valueOf = function() { return this.absoluteURL }, n = function(e) { return t(e.getOrigin() + e.getPath()) }, t = function(e) { return i(e, "/") ? e : e + "/" }, r = function(e, t) { return e.slice(0, t.length) === t }, i = function(e, t) { return e.slice(-t.length) === t }, e
                    }()
                }.call(this),
                function() {
                    var e = function(e, t) { return function() { return e.apply(t, arguments) } };
                    t.HttpRequest = function() {
                        function n(n, i, r) { this.delegate = n, this.requestCanceled = e(this.requestCanceled, this), this.requestTimedOut = e(this.requestTimedOut, this), this.requestFailed = e(this.requestFailed, this), this.requestLoaded = e(this.requestLoaded, this), this.requestProgressed = e(this.requestProgressed, this), this.url = t.Location.wrap(i).requestURL, this.referrer = t.Location.wrap(r).absoluteURL, this.createXHR() }
                        return n.NETWORK_FAILURE = 0, n.TIMEOUT_FAILURE = -1, n.timeout = 60, n.prototype.send = function() { var e; return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof(e = this.delegate).requestStarted ? e.requestStarted() : void 0) : void 0 }, n.prototype.cancel = function() { return this.xhr && this.sent ? this.xhr.abort() : void 0 }, n.prototype.requestProgressed = function(e) { return e.lengthComputable ? this.setProgress(e.loaded / e.total) : void 0 }, n.prototype.requestLoaded = function() { return this.endRequest((e = this, function() { var t; return 200 <= (t = e.xhr.status) && 300 > t ? e.delegate.requestCompletedWithResponse(e.xhr.responseText, e.xhr.getResponseHeader("Turbolinks-Location")) : (e.failed = !0, e.delegate.requestFailedWithStatusCode(e.xhr.status, e.xhr.responseText)) })); var e }, n.prototype.requestFailed = function() { return this.endRequest((e = this, function() { return e.failed = !0, e.delegate.requestFailedWithStatusCode(e.constructor.NETWORK_FAILURE) })); var e }, n.prototype.requestTimedOut = function() { return this.endRequest((e = this, function() { return e.failed = !0, e.delegate.requestFailedWithStatusCode(e.constructor.TIMEOUT_FAILURE) })); var e }, n.prototype.requestCanceled = function() { return this.endRequest() }, n.prototype.notifyApplicationBeforeRequestStart = function() { return t.dispatch("turbolinks:request-start", { data: { url: this.url, xhr: this.xhr } }) }, n.prototype.notifyApplicationAfterRequestEnd = function() { return t.dispatch("turbolinks:request-end", { data: { url: this.url, xhr: this.xhr } }) }, n.prototype.createXHR = function() { return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled }, n.prototype.endRequest = function(e) { return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != e && e.call(this), this.destroy()) : void 0 }, n.prototype.setProgress = function(e) { var t; return this.progress = e, "function" == typeof(t = this.delegate).requestProgressed ? t.requestProgressed(this.progress) : void 0 }, n.prototype.destroy = function() { var e; return this.setProgress(1), "function" == typeof(e = this.delegate).requestFinished && e.requestFinished(), this.delegate = null, this.xhr = null }, n
                    }()
                }.call(this),
                function() {
                    var e = function(e, t) { return function() { return e.apply(t, arguments) } };
                    t.ProgressBar = function() {
                        function t() { this.trickle = e(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement() }
                        var n;
                        return n = 300, t.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", t.prototype.show = function() { return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling()) }, t.prototype.hide = function() { return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement((e = this, function() { return e.uninstallProgressElement(), e.stopTrickling(), e.visible = !1, e.hiding = !1 }))) : void 0; var e }, t.prototype.setValue = function(e) { return this.value = e, this.refresh() }, t.prototype.installStylesheetElement = function() { return document.head.insertBefore(this.stylesheetElement, document.head.firstChild) }, t.prototype.installProgressElement = function() { return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh() }, t.prototype.fadeProgressElement = function(e) { return this.progressElement.style.opacity = 0, setTimeout(e, 1.5 * n) }, t.prototype.uninstallProgressElement = function() { return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0 }, t.prototype.startTrickling = function() { return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, n) }, t.prototype.stopTrickling = function() { return clearInterval(this.trickleInterval), this.trickleInterval = null }, t.prototype.trickle = function() { return this.setValue(this.value + Math.random() / 100) }, t.prototype.refresh = function() { return requestAnimationFrame((e = this, function() { return e.progressElement.style.width = 10 + 90 * e.value + "%" })); var e }, t.prototype.createStylesheetElement = function() { var e; return (e = document.createElement("style")).type = "text/css", e.textContent = this.constructor.defaultCSS, e }, t.prototype.createProgressElement = function() { var e; return (e = document.createElement("div")).className = "turbolinks-progress-bar", e }, t
                    }()
                }.call(this),
                function() {
                    var e = function(e, t) { return function() { return e.apply(t, arguments) } };
                    t.BrowserAdapter = function() {
                        function n(n) { this.controller = n, this.showProgressBar = e(this.showProgressBar, this), this.progressBar = new t.ProgressBar }
                        var i, r, o;
                        return o = t.HttpRequest, i = o.NETWORK_FAILURE, r = o.TIMEOUT_FAILURE, n.prototype.visitProposedToLocationWithAction = function(e, t) { return this.controller.startVisitToLocationWithAction(e, t) }, n.prototype.visitStarted = function(e) { return e.issueRequest(), e.changeHistory(), e.loadCachedSnapshot() }, n.prototype.visitRequestStarted = function(e) { return this.progressBar.setValue(0), e.hasCachedSnapshot() || "restore" !== e.action ? this.showProgressBarAfterDelay() : this.showProgressBar() }, n.prototype.visitRequestProgressed = function(e) { return this.progressBar.setValue(e.progress) }, n.prototype.visitRequestCompleted = function(e) { return e.loadResponse() }, n.prototype.visitRequestFailedWithStatusCode = function(e, t) {
                            switch (t) {
                                case i:
                                case r:
                                    return this.reload();
                                default:
                                    return e.loadResponse()
                            }
                        }, n.prototype.visitRequestFinished = function() { return this.hideProgressBar() }, n.prototype.visitCompleted = function(e) { return e.followRedirect() }, n.prototype.pageInvalidated = function() { return this.reload() }, n.prototype.showProgressBarAfterDelay = function() { return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay) }, n.prototype.showProgressBar = function() { return this.progressBar.show() }, n.prototype.hideProgressBar = function() { return this.progressBar.hide(), clearTimeout(this.progressBarTimeout) }, n.prototype.reload = function() { return window.location.reload() }, n
                    }()
                }.call(this),
                function() {
                    var e = function(e, t) { return function() { return e.apply(t, arguments) } };
                    t.History = function() {
                        function n(t) { this.delegate = t, this.onPageLoad = e(this.onPageLoad, this), this.onPopState = e(this.onPopState, this) }
                        return n.prototype.start = function() { return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0) }, n.prototype.stop = function() { return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0 }, n.prototype.push = function(e, n) { return e = t.Location.wrap(e), this.update("push", e, n) }, n.prototype.replace = function(e, n) { return e = t.Location.wrap(e), this.update("replace", e, n) }, n.prototype.onPopState = function(e) { var n, i, r, o; return this.shouldHandlePopState() && (o = null != (i = e.state) ? i.turbolinks : void 0) ? (n = t.Location.wrap(window.location), r = o.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(n, r)) : void 0 }, n.prototype.onPageLoad = function() { return t.defer(function(e) { return function() { return e.pageLoaded = !0 } }(this)) }, n.prototype.shouldHandlePopState = function() { return this.pageIsLoaded() }, n.prototype.pageIsLoaded = function() { return this.pageLoaded || "complete" === document.readyState }, n.prototype.update = function(e, t, n) { var i; return i = { turbolinks: { restorationIdentifier: n } }, history[e + "State"](i, null, t) }, n
                    }()
                }.call(this),
                function() {
                    t.HeadDetails = function() {
                        function e(e) { var t, n, i, a, s; for (this.elements = {}, n = 0, a = e.length; a > n; n++)(s = e[n]).nodeType === Node.ELEMENT_NODE && (i = s.outerHTML, (null != (t = this.elements)[i] ? t[i] : t[i] = { type: o(s), tracked: r(s), elements: [] }).elements.push(s)) }
                        var t, n, i, r, o;
                        return e.fromHeadElement = function(e) { var t; return new this(null != (t = null != e ? e.childNodes : void 0) ? t : []) }, e.prototype.hasElementWithKey = function(e) { return e in this.elements }, e.prototype.getTrackedElementSignature = function() { var e; return function() { var t, n; for (e in n = [], t = this.elements) t[e].tracked && n.push(e); return n }.call(this).join("") }, e.prototype.getScriptElementsNotInDetails = function(e) { return this.getElementsMatchingTypeNotInDetails("script", e) }, e.prototype.getStylesheetElementsNotInDetails = function(e) { return this.getElementsMatchingTypeNotInDetails("stylesheet", e) }, e.prototype.getElementsMatchingTypeNotInDetails = function(e, t) { var n, i, r, o, a, s; for (i in a = [], r = this.elements) s = (o = r[i]).type, n = o.elements, s !== e || t.hasElementWithKey(i) || a.push(n[0]); return a }, e.prototype.getProvisionalElements = function() { var e, t, n, i, r, o, a; for (t in n = [], i = this.elements) a = (r = i[t]).type, o = r.tracked, e = r.elements, null != a || o ? e.length > 1 && n.push.apply(n, e.slice(1)) : n.push.apply(n, e); return n }, e.prototype.getMetaValue = function(e) { var t; return null != (t = this.findMetaElementByName(e)) ? t.getAttribute("content") : void 0 }, e.prototype.findMetaElementByName = function(e) { var n, i, r, o; for (r in n = void 0, o = this.elements) i = o[r].elements, t(i[0], e) && (n = i[0]); return n }, o = function(e) { return n(e) ? "script" : i(e) ? "stylesheet" : void 0 }, r = function(e) { return "reload" === e.getAttribute("data-turbolinks-track") }, n = function(e) { return "script" === e.tagName.toLowerCase() }, i = function(e) { var t; return "style" === (t = e.tagName.toLowerCase()) || "link" === t && "stylesheet" === e.getAttribute("rel") }, t = function(e, t) { return "meta" === e.tagName.toLowerCase() && e.getAttribute("name") === t }, e
                    }()
                }.call(this),
                function() {
                    t.Snapshot = function() {
                        function e(e, t) { this.headDetails = e, this.bodyElement = t }
                        return e.wrap = function(e) { return e instanceof this ? e : "string" == typeof e ? this.fromHTMLString(e) : this.fromHTMLElement(e) }, e.fromHTMLString = function(e) { var t; return (t = document.createElement("html")).innerHTML = e, this.fromHTMLElement(t) }, e.fromHTMLElement = function(e) { var n, i, r; return i = e.querySelector("head"), n = null != (r = e.querySelector("body")) ? r : document.createElement("body"), new this(t.HeadDetails.fromHeadElement(i), n) }, e.prototype.clone = function() { return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0)) }, e.prototype.getRootLocation = function() { var e, n; return n = null != (e = this.getSetting("root")) ? e : "/", new t.Location(n) }, e.prototype.getCacheControlValue = function() { return this.getSetting("cache-control") }, e.prototype.getElementForAnchor = function(e) { try { return this.bodyElement.querySelector("[id='" + e + "'], a[name='" + e + "']") } catch (t) {} }, e.prototype.getPermanentElements = function() { return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]") }, e.prototype.getPermanentElementById = function(e) { return this.bodyElement.querySelector("#" + e + "[data-turbolinks-permanent]") }, e.prototype.getPermanentElementsPresentInSnapshot = function(e) { var t, n, i, r, o; for (o = [], n = 0, i = (r = this.getPermanentElements()).length; i > n; n++) t = r[n], e.getPermanentElementById(t.id) && o.push(t); return o }, e.prototype.findFirstAutofocusableElement = function() { return this.bodyElement.querySelector("[autofocus]") }, e.prototype.hasAnchor = function(e) { return null != this.getElementForAnchor(e) }, e.prototype.isPreviewable = function() { return "no-preview" !== this.getCacheControlValue() }, e.prototype.isCacheable = function() { return "no-cache" !== this.getCacheControlValue() }, e.prototype.isVisitable = function() { return "reload" !== this.getSetting("visit-control") }, e.prototype.getSetting = function(e) { return this.headDetails.getMetaValue("turbolinks-" + e) }, e
                    }()
                }.call(this),
                function() {
                    var e = [].slice;
                    t.Renderer = function() {
                        function t() {}
                        var n;
                        return t.render = function() {
                            var t, n, i;
                            return n = arguments[0], t = arguments[1], (i = function(e, t, n) {
                                n.prototype = e.prototype;
                                var i = new n,
                                    r = e.apply(i, t);
                                return Object(r) === r ? r : i
                            }(this, 3 <= arguments.length ? e.call(arguments, 2) : [], function() {})).delegate = n, i.render(t), i
                        }, t.prototype.renderView = function(e) { return this.delegate.viewWillRender(this.newBody), e(), this.delegate.viewRendered(this.newBody) }, t.prototype.invalidateView = function() { return this.delegate.viewInvalidated() }, t.prototype.createScriptElement = function(e) { var t; return "false" === e.getAttribute("data-turbolinks-eval") ? e : ((t = document.createElement("script")).textContent = e.textContent, t.async = !1, n(t, e), t) }, n = function(e, t) { var n, i, r, o, a, s, l; for (s = [], n = 0, i = (o = t.attributes).length; i > n; n++) r = (a = o[n]).name, l = a.value, s.push(e.setAttribute(r, l)); return s }, t
                    }()
                }.call(this),
                function() {
                    var e, n, i = function(e, t) {
                            function n() { this.constructor = e }
                            for (var i in t) r.call(t, i) && (e[i] = t[i]);
                            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                        },
                        r = {}.hasOwnProperty;
                    t.SnapshotRenderer = function(t) {
                        function r(e, t, n) { this.currentSnapshot = e, this.newSnapshot = t, this.isPreview = n, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement }
                        return i(r, t), r.prototype.render = function(e) { return this.shouldRender() ? (this.mergeHead(), this.renderView((t = this, function() { return t.replaceBody(), t.isPreview || t.focusFirstAutofocusableElement(), e() }))) : this.invalidateView(); var t }, r.prototype.mergeHead = function() { return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements() }, r.prototype.replaceBody = function() { var e; return e = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(e) }, r.prototype.shouldRender = function() { return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical() }, r.prototype.trackedElementsAreIdentical = function() { return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature() }, r.prototype.copyNewHeadStylesheetElements = function() { var e, t, n, i, r; for (r = [], t = 0, n = (i = this.getNewHeadStylesheetElements()).length; n > t; t++) e = i[t], r.push(document.head.appendChild(e)); return r }, r.prototype.copyNewHeadScriptElements = function() { var e, t, n, i, r; for (r = [], t = 0, n = (i = this.getNewHeadScriptElements()).length; n > t; t++) e = i[t], r.push(document.head.appendChild(this.createScriptElement(e))); return r }, r.prototype.removeCurrentHeadProvisionalElements = function() { var e, t, n, i, r; for (r = [], t = 0, n = (i = this.getCurrentHeadProvisionalElements()).length; n > t; t++) e = i[t], r.push(document.head.removeChild(e)); return r }, r.prototype.copyNewHeadProvisionalElements = function() { var e, t, n, i, r; for (r = [], t = 0, n = (i = this.getNewHeadProvisionalElements()).length; n > t; t++) e = i[t], r.push(document.head.appendChild(e)); return r }, r.prototype.relocateCurrentBodyPermanentElements = function() { var t, i, r, o, a, s, l; for (l = [], t = 0, i = (s = this.getCurrentBodyPermanentElements()).length; i > t; t++) o = s[t], a = e(o), r = this.newSnapshot.getPermanentElementById(o.id), n(o, a.element), n(r, o), l.push(a); return l }, r.prototype.replacePlaceholderElementsWithClonedPermanentElements = function(e) { var t, i, r, o, a, s; for (s = [], r = 0, o = e.length; o > r; r++) i = (a = e[r]).element, t = a.permanentElement.cloneNode(!0), s.push(n(i, t)); return s }, r.prototype.activateNewBodyScriptElements = function() { var e, t, i, r, o, a; for (a = [], t = 0, r = (o = this.getNewBodyScriptElements()).length; r > t; t++) i = o[t], e = this.createScriptElement(i), a.push(n(i, e)); return a }, r.prototype.assignNewBody = function() { return document.body = this.newBody }, r.prototype.focusFirstAutofocusableElement = function() { var e; return null != (e = this.newSnapshot.findFirstAutofocusableElement()) ? e.focus() : void 0 }, r.prototype.getNewHeadStylesheetElements = function() { return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails) }, r.prototype.getNewHeadScriptElements = function() { return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails) }, r.prototype.getCurrentHeadProvisionalElements = function() { return this.currentHeadDetails.getProvisionalElements() }, r.prototype.getNewHeadProvisionalElements = function() { return this.newHeadDetails.getProvisionalElements() }, r.prototype.getCurrentBodyPermanentElements = function() { return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot) }, r.prototype.getNewBodyScriptElements = function() { return this.newBody.querySelectorAll("script") }, r
                    }(t.Renderer), e = function(e) { var t; return (t = document.createElement("meta")).setAttribute("name", "turbolinks-permanent-placeholder"), t.setAttribute("content", e.id), { element: t, permanentElement: e } }, n = function(e, t) { var n; return (n = e.parentNode) ? n.replaceChild(t, e) : void 0 }
                }.call(this),
                function() {
                    var e = function(e, t) {
                            function i() { this.constructor = e }
                            for (var r in t) n.call(t, r) && (e[r] = t[r]);
                            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
                        },
                        n = {}.hasOwnProperty;
                    t.ErrorRenderer = function(t) {
                        function n(e) {
                            var t;
                            (t = document.createElement("html")).innerHTML = e, this.newHead = t.querySelector("head"), this.newBody = t.querySelector("body")
                        }
                        return e(n, t), n.prototype.render = function(e) { return this.renderView((t = this, function() { return t.replaceHeadAndBody(), t.activateBodyScriptElements(), e() })); var t }, n.prototype.replaceHeadAndBody = function() { var e, t; return t = document.head, e = document.body, t.parentNode.replaceChild(this.newHead, t), e.parentNode.replaceChild(this.newBody, e) }, n.prototype.activateBodyScriptElements = function() { var e, t, n, i, r, o; for (o = [], t = 0, n = (i = this.getScriptElements()).length; n > t; t++) r = i[t], e = this.createScriptElement(r), o.push(r.parentNode.replaceChild(e, r)); return o }, n.prototype.getScriptElements = function() { return document.documentElement.querySelectorAll("script") }, n
                    }(t.Renderer)
                }.call(this),
                function() {
                    t.View = function() {
                        function e(e) { this.delegate = e, this.htmlElement = document.documentElement }
                        return e.prototype.getRootLocation = function() { return this.getSnapshot().getRootLocation() }, e.prototype.getElementForAnchor = function(e) { return this.getSnapshot().getElementForAnchor(e) }, e.prototype.getSnapshot = function() { return t.Snapshot.fromHTMLElement(this.htmlElement) }, e.prototype.render = function(e, t) { var n, i, r; return r = e.snapshot, n = e.error, i = e.isPreview, this.markAsPreview(i), null != r ? this.renderSnapshot(r, i, t) : this.renderError(n, t) }, e.prototype.markAsPreview = function(e) { return e ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview") }, e.prototype.renderSnapshot = function(e, n, i) { return t.SnapshotRenderer.render(this.delegate, i, this.getSnapshot(), t.Snapshot.wrap(e), n) }, e.prototype.renderError = function(e, n) { return t.ErrorRenderer.render(this.delegate, n, e) }, e
                    }()
                }.call(this),
                function() {
                    var e = function(e, t) { return function() { return e.apply(t, arguments) } };
                    t.ScrollManager = function() {
                        function n(n) { this.delegate = n, this.onScroll = e(this.onScroll, this), this.onScroll = t.throttle(this.onScroll) }
                        return n.prototype.start = function() { return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0) }, n.prototype.stop = function() { return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0 }, n.prototype.scrollToElement = function(e) { return e.scrollIntoView() }, n.prototype.scrollToPosition = function(e) { var t, n; return t = e.x, n = e.y, window.scrollTo(t, n) }, n.prototype.onScroll = function() { return this.updatePosition({ x: window.pageXOffset, y: window.pageYOffset }) }, n.prototype.updatePosition = function(e) { var t; return this.position = e, null != (t = this.delegate) ? t.scrollPositionChanged(this.position) : void 0 }, n
                    }()
                }.call(this),
                function() {
                    t.SnapshotCache = function() {
                        function e(e) { this.size = e, this.keys = [], this.snapshots = {} }
                        var n;
                        return e.prototype.has = function(e) { return n(e) in this.snapshots }, e.prototype.get = function(e) { var t; if (this.has(e)) return t = this.read(e), this.touch(e), t }, e.prototype.put = function(e, t) { return this.write(e, t), this.touch(e), t }, e.prototype.read = function(e) { var t; return t = n(e), this.snapshots[t] }, e.prototype.write = function(e, t) { var i; return i = n(e), this.snapshots[i] = t }, e.prototype.touch = function(e) { var t, i; return i = n(e), (t = this.keys.indexOf(i)) > -1 && this.keys.splice(t, 1), this.keys.unshift(i), this.trim() }, e.prototype.trim = function() { var e, t, n, i, r; for (r = [], e = 0, n = (i = this.keys.splice(this.size)).length; n > e; e++) t = i[e], r.push(delete this.snapshots[t]); return r }, n = function(e) { return t.Location.wrap(e).toCacheKey() }, e
                    }()
                }.call(this),
                function() {
                    var e = function(e, t) { return function() { return e.apply(t, arguments) } };
                    t.Visit = function() {
                        function n(n, i, r) { this.controller = n, this.action = r, this.performScroll = e(this.performScroll, this), this.identifier = t.uuid(), this.location = t.Location.wrap(i), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {} }
                        var i;
                        return n.prototype.start = function() { return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0 }, n.prototype.cancel = function() { var e; return "started" === this.state ? (null != (e = this.request) && e.cancel(), this.cancelRender(), this.state = "canceled") : void 0 }, n.prototype.complete = function() { var e; return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof(e = this.adapter).visitCompleted && e.visitCompleted(this), this.controller.visitCompleted(this)) : void 0 }, n.prototype.fail = function() { var e; return "started" === this.state ? (this.state = "failed", "function" == typeof(e = this.adapter).visitFailed ? e.visitFailed(this) : void 0) : void 0 }, n.prototype.changeHistory = function() { var e, t; return this.historyChanged ? void 0 : (e = this.location.isEqualTo(this.referrer) ? "replace" : this.action, t = i(e), this.controller[t](this.location, this.restorationIdentifier), this.historyChanged = !0) }, n.prototype.issueRequest = function() { return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new t.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0 }, n.prototype.getCachedSnapshot = function() { var e; return !(e = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !e.hasAnchor(this.location.anchor) || "restore" !== this.action && !e.isPreviewable() ? void 0 : e }, n.prototype.hasCachedSnapshot = function() { return null != this.getCachedSnapshot() }, n.prototype.loadCachedSnapshot = function() { var e, t; return (t = this.getCachedSnapshot()) ? (e = this.shouldIssueRequest(), this.render(function() { var n; return this.cacheSnapshot(), this.controller.render({ snapshot: t, isPreview: e }, this.performScroll), "function" == typeof(n = this.adapter).visitRendered && n.visitRendered(this), e ? void 0 : this.complete() })) : void 0 }, n.prototype.loadResponse = function() { return null != this.response ? this.render(function() { var e, t; return this.cacheSnapshot(), this.request.failed ? (this.controller.render({ error: this.response }, this.performScroll), "function" == typeof(e = this.adapter).visitRendered && e.visitRendered(this), this.fail()) : (this.controller.render({ snapshot: this.response }, this.performScroll), "function" == typeof(t = this.adapter).visitRendered && t.visitRendered(this), this.complete()) }) : void 0 }, n.prototype.followRedirect = function() { return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0 }, n.prototype.requestStarted = function() { var e; return this.recordTimingMetric("requestStart"), "function" == typeof(e = this.adapter).visitRequestStarted ? e.visitRequestStarted(this) : void 0 }, n.prototype.requestProgressed = function(e) { var t; return this.progress = e, "function" == typeof(t = this.adapter).visitRequestProgressed ? t.visitRequestProgressed(this) : void 0 }, n.prototype.requestCompletedWithResponse = function(e, n) { return this.response = e, null != n && (this.redirectedToLocation = t.Location.wrap(n)), this.adapter.visitRequestCompleted(this) }, n.prototype.requestFailedWithStatusCode = function(e, t) { return this.response = t, this.adapter.visitRequestFailedWithStatusCode(this, e) }, n.prototype.requestFinished = function() { var e; return this.recordTimingMetric("requestEnd"), "function" == typeof(e = this.adapter).visitRequestFinished ? e.visitRequestFinished(this) : void 0 }, n.prototype.performScroll = function() { return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0) }, n.prototype.scrollToRestoredPosition = function() { var e, t; return null != (e = null != (t = this.restorationData) ? t.scrollPosition : void 0) ? (this.controller.scrollToPosition(e), !0) : void 0 }, n.prototype.scrollToAnchor = function() { return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0 }, n.prototype.scrollToTop = function() { return this.controller.scrollToPosition({ x: 0, y: 0 }) }, n.prototype.recordTimingMetric = function(e) { var t; return null != (t = this.timingMetrics)[e] ? t[e] : t[e] = (new Date).getTime() }, n.prototype.getTimingMetrics = function() { return t.copyObject(this.timingMetrics) }, i = function(e) {
                            switch (e) {
                                case "replace":
                                    return "replaceHistoryWithLocationAndRestorationIdentifier";
                                case "advance":
                                case "restore":
                                    return "pushHistoryWithLocationAndRestorationIdentifier"
                            }
                        }, n.prototype.shouldIssueRequest = function() { return "restore" !== this.action || !this.hasCachedSnapshot() }, n.prototype.cacheSnapshot = function() { return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0) }, n.prototype.render = function(e) { return this.cancelRender(), this.frame = requestAnimationFrame((t = this, function() { return t.frame = null, e.call(t) })); var t }, n.prototype.cancelRender = function() { return this.frame ? cancelAnimationFrame(this.frame) : void 0 }, n
                    }()
                }.call(this),
                function() {
                    var e = function(e, t) { return function() { return e.apply(t, arguments) } };
                    t.Controller = function() {
                        function n() { this.clickBubbled = e(this.clickBubbled, this), this.clickCaptured = e(this.clickCaptured, this), this.pageLoaded = e(this.pageLoaded, this), this.history = new t.History(this), this.view = new t.View(this), this.scrollManager = new t.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500) }
                        return n.prototype.start = function() { return t.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0 }, n.prototype.disable = function() { return this.enabled = !1 }, n.prototype.stop = function() { return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0 }, n.prototype.clearCache = function() { return this.cache = new t.SnapshotCache(10) }, n.prototype.visit = function(e, n) { var i, r; return null == n && (n = {}), e = t.Location.wrap(e), this.applicationAllowsVisitingLocation(e) ? this.locationIsVisitable(e) ? (i = null != (r = n.action) ? r : "advance", this.adapter.visitProposedToLocationWithAction(e, i)) : window.location = e : void 0 }, n.prototype.startVisitToLocationWithAction = function(e, n, i) { var r; return t.supported ? (r = this.getRestorationDataForIdentifier(i), this.startVisit(e, n, { restorationData: r })) : window.location = e }, n.prototype.setProgressBarDelay = function(e) { return this.progressBarDelay = e }, n.prototype.startHistory = function() { return this.location = t.Location.wrap(window.location), this.restorationIdentifier = t.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier) }, n.prototype.stopHistory = function() { return this.history.stop() }, n.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(e, n) { return this.restorationIdentifier = n, this.location = t.Location.wrap(e), this.history.push(this.location, this.restorationIdentifier) }, n.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(e, n) { return this.restorationIdentifier = n, this.location = t.Location.wrap(e), this.history.replace(this.location, this.restorationIdentifier) }, n.prototype.historyPoppedToLocationWithRestorationIdentifier = function(e, n) { var i; return this.restorationIdentifier = n, this.enabled ? (i = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(e, "restore", { restorationIdentifier: this.restorationIdentifier, restorationData: i, historyChanged: !0 }), this.location = t.Location.wrap(e)) : this.adapter.pageInvalidated() }, n.prototype.getCachedSnapshotForLocation = function(e) { var t; return null != (t = this.cache.get(e)) ? t.clone() : void 0 }, n.prototype.shouldCacheSnapshot = function() { return this.view.getSnapshot().isCacheable() }, n.prototype.cacheSnapshot = function() {
                            var e, n;
                            return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), n = this.view.getSnapshot(), e = this.lastRenderedLocation, t.defer(function(t) {
                                return function() { return t.cache.put(e, n.clone()) }
                            }(this))) : void 0
                        }, n.prototype.scrollToAnchor = function(e) { var t; return (t = this.view.getElementForAnchor(e)) ? this.scrollToElement(t) : this.scrollToPosition({ x: 0, y: 0 }) }, n.prototype.scrollToElement = function(e) { return this.scrollManager.scrollToElement(e) }, n.prototype.scrollToPosition = function(e) { return this.scrollManager.scrollToPosition(e) }, n.prototype.scrollPositionChanged = function(e) { return this.getCurrentRestorationData().scrollPosition = e }, n.prototype.render = function(e, t) { return this.view.render(e, t) }, n.prototype.viewInvalidated = function() { return this.adapter.pageInvalidated() }, n.prototype.viewWillRender = function(e) { return this.notifyApplicationBeforeRender(e) }, n.prototype.viewRendered = function() { return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender() }, n.prototype.pageLoaded = function() { return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad() }, n.prototype.clickCaptured = function() { return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1) }, n.prototype.clickBubbled = function(e) { var t, n, i; return this.enabled && this.clickEventIsSignificant(e) && (n = this.getVisitableLinkForNode(e.target)) && (i = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, i) ? (e.preventDefault(), t = this.getActionForLink(n), this.visit(i, { action: t })) : void 0 }, n.prototype.applicationAllowsFollowingLinkToLocation = function(e, t) { return !this.notifyApplicationAfterClickingLinkToLocation(e, t).defaultPrevented }, n.prototype.applicationAllowsVisitingLocation = function(e) { return !this.notifyApplicationBeforeVisitingLocation(e).defaultPrevented }, n.prototype.notifyApplicationAfterClickingLinkToLocation = function(e, n) { return t.dispatch("turbolinks:click", { target: e, data: { url: n.absoluteURL }, cancelable: !0 }) }, n.prototype.notifyApplicationBeforeVisitingLocation = function(e) { return t.dispatch("turbolinks:before-visit", { data: { url: e.absoluteURL }, cancelable: !0 }) }, n.prototype.notifyApplicationAfterVisitingLocation = function(e) { return t.dispatch("turbolinks:visit", { data: { url: e.absoluteURL } }) }, n.prototype.notifyApplicationBeforeCachingSnapshot = function() { return t.dispatch("turbolinks:before-cache") }, n.prototype.notifyApplicationBeforeRender = function(e) { return t.dispatch("turbolinks:before-render", { data: { newBody: e } }) }, n.prototype.notifyApplicationAfterRender = function() { return t.dispatch("turbolinks:render") }, n.prototype.notifyApplicationAfterPageLoad = function(e) { return null == e && (e = {}), t.dispatch("turbolinks:load", { data: { url: this.location.absoluteURL, timing: e } }) }, n.prototype.startVisit = function(e, t, n) { var i; return null != (i = this.currentVisit) && i.cancel(), this.currentVisit = this.createVisit(e, t, n), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(e) }, n.prototype.createVisit = function(e, n, i) { var r, o, a, s, l; return s = (o = null != i ? i : {}).restorationIdentifier, a = o.restorationData, r = o.historyChanged, (l = new t.Visit(this, e, n)).restorationIdentifier = null != s ? s : t.uuid(), l.restorationData = t.copyObject(a), l.historyChanged = r, l.referrer = this.location, l }, n.prototype.visitCompleted = function(e) { return this.notifyApplicationAfterPageLoad(e.getTimingMetrics()) }, n.prototype.clickEventIsSignificant = function(e) { return !(e.defaultPrevented || e.target.isContentEditable || e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) }, n.prototype.getVisitableLinkForNode = function(e) { return this.nodeIsVisitable(e) ? t.closest(e, "a[href]:not([target]):not([download])") : void 0 }, n.prototype.getVisitableLocationForLink = function(e) { var n; return n = new t.Location(e.getAttribute("href")), this.locationIsVisitable(n) ? n : void 0 }, n.prototype.getActionForLink = function(e) { var t; return null != (t = e.getAttribute("data-turbolinks-action")) ? t : "advance" }, n.prototype.nodeIsVisitable = function(e) { var n; return !(n = t.closest(e, "[data-turbolinks]")) || "false" !== n.getAttribute("data-turbolinks") }, n.prototype.locationIsVisitable = function(e) { return e.isPrefixedBy(this.view.getRootLocation()) && e.isHTML() }, n.prototype.getCurrentRestorationData = function() { return this.getRestorationDataForIdentifier(this.restorationIdentifier) }, n.prototype.getRestorationDataForIdentifier = function(e) { var t; return null != (t = this.restorationData)[e] ? t[e] : t[e] = {} }, n
                    }()
                }.call(this),
                function() {
                    ! function() {
                        var e, t;
                        if ((e = t = document.currentScript) && !t.hasAttribute("data-turbolinks-suppress-warning"))
                            for (; e = e.parentNode;)
                                if (e === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", t.outerHTML)
                    }()
                }.call(this),
                function() {
                    var e, n, i;
                    t.start = function() { return n() ? (null == t.controller && (t.controller = e()), t.controller.start()) : void 0 }, n = function() { return null == window.Turbolinks && (window.Turbolinks = t), i() }, e = function() { var e; return (e = new t.Controller).adapter = new t.BrowserAdapter(e), e }, (i = function() { return window.Turbolinks === t })() && t.start()
                }.call(this)
        }).call(this), "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd && define(t)
    }.call(this),
    function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.ActiveStorage = {}) }(this, function(e) {
        "use strict";

        function t(e, t) { return e(t = { exports: {} }, t.exports), t.exports }

        function n(e) { var t = r(document.head, 'meta[name="' + e + '"]'); if (t) return t.getAttribute("content") }

        function i(e, t) { return "string" == typeof e && (t = e, e = document), a(e.querySelectorAll(t)) }

        function r(e, t) { return "string" == typeof e && (t = e, e = document), e.querySelector(t) }

        function o(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                i = e.disabled,
                r = n.bubbles,
                o = n.cancelable,
                a = n.detail,
                s = document.createEvent("Event");
            s.initEvent(t, r || !0, o || !0), s.detail = a || {};
            try { e.disabled = !1, e.dispatchEvent(s) } finally { e.disabled = i }
            return s
        }

        function a(e) { return Array.isArray(e) ? e : Array.from ? Array.from(e) : [].slice.call(e) }

        function s(e, t) { if (e && "function" == typeof e[t]) { for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r]; return e[t].apply(e, i) } }

        function l() { O || (O = !0, document.addEventListener("click", c, !0), document.addEventListener("submit", u), document.addEventListener("ajax:before", d)) }

        function c(e) { var t = e.target; "INPUT" != t.tagName && "BUTTON" != t.tagName || "submit" != t.type || !t.form || M.set(t.form, t) }

        function u(e) { h(e) }

        function d(e) { "FORM" == e.target.tagName && h(e) }

        function h(e) {
            var t = e.target;
            if (t.hasAttribute(D)) e.preventDefault();
            else {
                var n = new x(t),
                    i = n.inputs;
                i.length && (e.preventDefault(), t.setAttribute(D, ""), i.forEach(f), n.start(function(e) { t.removeAttribute(D), e ? i.forEach(m) : p(t) }))
            }
        }

        function p(e) {
            var t = M.get(e) || r(e, "input[type=submit], button[type=submit]");
            if (t) {
                var n = t.disabled;
                t.disabled = !1, t.focus(), t.click(), t.disabled = n
            } else(t = document.createElement("input")).type = "submit", t.style.display = "none", e.appendChild(t), t.click(), e.removeChild(t);
            M["delete"](e)
        }

        function f(e) { e.disabled = !0 }

        function m(e) { e.disabled = !1 }

        function g() { window.ActiveStorage && l() }
        var y = t(function(e) {
                var t;
                t = function(e) {
                    function t(e, t) {
                        var n = e[0],
                            i = e[1],
                            r = e[2],
                            o = e[3];
                        i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & r | ~i & o) + t[0] - 680876936 | 0) << 7 | n >>> 25) + i | 0) & i | ~n & r) + t[1] - 389564586 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & i) + t[2] + 606105819 | 0) << 17 | r >>> 15) + o | 0) & o | ~r & n) + t[3] - 1044525330 | 0) << 22 | i >>> 10) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & r | ~i & o) + t[4] - 176418897 | 0) << 7 | n >>> 25) + i | 0) & i | ~n & r) + t[5] + 1200080426 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & i) + t[6] - 1473231341 | 0) << 17 | r >>> 15) + o | 0) & o | ~r & n) + t[7] - 45705983 | 0) << 22 | i >>> 10) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & r | ~i & o) + t[8] + 1770035416 | 0) << 7 | n >>> 25) + i | 0) & i | ~n & r) + t[9] - 1958414417 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & i) + t[10] - 42063 | 0) << 17 | r >>> 15) + o | 0) & o | ~r & n) + t[11] - 1990404162 | 0) << 22 | i >>> 10) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & r | ~i & o) + t[12] + 1804603682 | 0) << 7 | n >>> 25) + i | 0) & i | ~n & r) + t[13] - 40341101 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & i) + t[14] - 1502002290 | 0) << 17 | r >>> 15) + o | 0) & o | ~r & n) + t[15] + 1236535329 | 0) << 22 | i >>> 10) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & o | r & ~o) + t[1] - 165796510 | 0) << 5 | n >>> 27) + i | 0) & r | i & ~r) + t[6] - 1069501632 | 0) << 9 | o >>> 23) + n | 0) & i | n & ~i) + t[11] + 643717713 | 0) << 14 | r >>> 18) + o | 0) & n | o & ~n) + t[0] - 373897302 | 0) << 20 | i >>> 12) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & o | r & ~o) + t[5] - 701558691 | 0) << 5 | n >>> 27) + i | 0) & r | i & ~r) + t[10] + 38016083 | 0) << 9 | o >>> 23) + n | 0) & i | n & ~i) + t[15] - 660478335 | 0) << 14 | r >>> 18) + o | 0) & n | o & ~n) + t[4] - 405537848 | 0) << 20 | i >>> 12) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & o | r & ~o) + t[9] + 568446438 | 0) << 5 | n >>> 27) + i | 0) & r | i & ~r) + t[14] - 1019803690 | 0) << 9 | o >>> 23) + n | 0) & i | n & ~i) + t[3] - 187363961 | 0) << 14 | r >>> 18) + o | 0) & n | o & ~n) + t[8] + 1163531501 | 0) << 20 | i >>> 12) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & o | r & ~o) + t[13] - 1444681467 | 0) << 5 | n >>> 27) + i | 0) & r | i & ~r) + t[2] - 51403784 | 0) << 9 | o >>> 23) + n | 0) & i | n & ~i) + t[7] + 1735328473 | 0) << 14 | r >>> 18) + o | 0) & n | o & ~n) + t[12] - 1926607734 | 0) << 20 | i >>> 12) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i ^ r ^ o) + t[5] - 378558 | 0) << 4 | n >>> 28) + i | 0) ^ i ^ r) + t[8] - 2022574463 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ i) + t[11] + 1839030562 | 0) << 16 | r >>> 16) + o | 0) ^ o ^ n) + t[14] - 35309556 | 0) << 23 | i >>> 9) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i ^ r ^ o) + t[1] - 1530992060 | 0) << 4 | n >>> 28) + i | 0) ^ i ^ r) + t[4] + 1272893353 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ i) + t[7] - 155497632 | 0) << 16 | r >>> 16) + o | 0) ^ o ^ n) + t[10] - 1094730640 | 0) << 23 | i >>> 9) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i ^ r ^ o) + t[13] + 681279174 | 0) << 4 | n >>> 28) + i | 0) ^ i ^ r) + t[0] - 358537222 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ i) + t[3] - 722521979 | 0) << 16 | r >>> 16) + o | 0) ^ o ^ n) + t[6] + 76029189 | 0) << 23 | i >>> 9) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i ^ r ^ o) + t[9] - 640364487 | 0) << 4 | n >>> 28) + i | 0) ^ i ^ r) + t[12] - 421815835 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ i) + t[15] + 530742520 | 0) << 16 | r >>> 16) + o | 0) ^ o ^ n) + t[2] - 995338651 | 0) << 23 | i >>> 9) + r | 0, i = ((i += ((o = ((o += (i ^ ((n = ((n += (r ^ (i | ~o)) + t[0] - 198630844 | 0) << 6 | n >>> 26) + i | 0) | ~r)) + t[7] + 1126891415 | 0) << 10 | o >>> 22) + n | 0) ^ ((r = ((r += (n ^ (o | ~i)) + t[14] - 1416354905 | 0) << 15 | r >>> 17) + o | 0) | ~n)) + t[5] - 57434055 | 0) << 21 | i >>> 11) + r | 0, i = ((i += ((o = ((o += (i ^ ((n = ((n += (r ^ (i | ~o)) + t[12] + 1700485571 | 0) << 6 | n >>> 26) + i | 0) | ~r)) + t[3] - 1894986606 | 0) << 10 | o >>> 22) + n | 0) ^ ((r = ((r += (n ^ (o | ~i)) + t[10] - 1051523 | 0) << 15 | r >>> 17) + o | 0) | ~n)) + t[1] - 2054922799 | 0) << 21 | i >>> 11) + r | 0, i = ((i += ((o = ((o += (i ^ ((n = ((n += (r ^ (i | ~o)) + t[8] + 1873313359 | 0) << 6 | n >>> 26) + i | 0) | ~r)) + t[15] - 30611744 | 0) << 10 | o >>> 22) + n | 0) ^ ((r = ((r += (n ^ (o | ~i)) + t[6] - 1560198380 | 0) << 15 | r >>> 17) + o | 0) | ~n)) + t[13] + 1309151649 | 0) << 21 | i >>> 11) + r | 0, i = ((i += ((o = ((o += (i ^ ((n = ((n += (r ^ (i | ~o)) + t[4] - 145523070 | 0) << 6 | n >>> 26) + i | 0) | ~r)) + t[11] - 1120210379 | 0) << 10 | o >>> 22) + n | 0) ^ ((r = ((r += (n ^ (o | ~i)) + t[2] + 718787259 | 0) << 15 | r >>> 17) + o | 0) | ~n)) + t[9] - 343485551 | 0) << 21 | i >>> 11) + r | 0, e[0] = n + e[0] | 0, e[1] = i + e[1] | 0, e[2] = r + e[2] | 0, e[3] = o + e[3] | 0
                    }

                    function n(e) { var t, n = []; for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24); return n }

                    function i(e) { var t, n = []; for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24); return n }

                    function r(e) {
                        var i, r, o, a, s, l, c = e.length,
                            u = [1732584193, -271733879, -1732584194, 271733878];
                        for (i = 64; i <= c; i += 64) t(u, n(e.substring(i - 64, i)));
                        for (r = (e = e.substring(i - 64)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = 0; i < r; i += 1) o[i >> 2] |= e.charCodeAt(i) << (i % 4 << 3);
                        if (o[i >> 2] |= 128 << (i % 4 << 3), i > 55)
                            for (t(u, o), i = 0; i < 16; i += 1) o[i] = 0;
                        return a = (a = 8 * c).toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), l = parseInt(a[1], 16) || 0, o[14] = s, o[15] = l, t(u, o), u
                    }

                    function o(e) {
                        var n, r, o, a, s, l, c = e.length,
                            u = [1732584193, -271733879, -1732584194, 271733878];
                        for (n = 64; n <= c; n += 64) t(u, i(e.subarray(n - 64, n)));
                        for (r = (e = n - 64 < c ? e.subarray(n - 64) : new Uint8Array(0)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < r; n += 1) o[n >> 2] |= e[n] << (n % 4 << 3);
                        if (o[n >> 2] |= 128 << (n % 4 << 3), n > 55)
                            for (t(u, o), n = 0; n < 16; n += 1) o[n] = 0;
                        return a = (a = 8 * c).toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), l = parseInt(a[1], 16) || 0, o[14] = s, o[15] = l, t(u, o), u
                    }

                    function a(e) { var t, n = ""; for (t = 0; t < 4; t += 1) n += f[e >> 8 * t + 4 & 15] + f[e >> 8 * t & 15]; return n }

                    function s(e) { var t; for (t = 0; t < e.length; t += 1) e[t] = a(e[t]); return e.join("") }

                    function l(e) { return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e }

                    function c(e, t) {
                        var n, i = e.length,
                            r = new ArrayBuffer(i),
                            o = new Uint8Array(r);
                        for (n = 0; n < i; n += 1) o[n] = e.charCodeAt(n);
                        return t ? o : r
                    }

                    function u(e) { return String.fromCharCode.apply(null, new Uint8Array(e)) }

                    function d(e, t, n) { var i = new Uint8Array(e.byteLength + t.byteLength); return i.set(new Uint8Array(e)), i.set(new Uint8Array(t), e.byteLength), n ? i : i.buffer }

                    function h(e) {
                        var t, n = [],
                            i = e.length;
                        for (t = 0; t < i - 1; t += 2) n.push(parseInt(e.substr(t, 2), 16));
                        return String.fromCharCode.apply(String, n)
                    }

                    function p() { this.reset() }
                    var f = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
                    return s(r("hello")), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
                        function t(e, t) { return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t) }
                        ArrayBuffer.prototype.slice = function(n, i) {
                            var r, o, a, s, l = this.byteLength,
                                c = t(n, l),
                                u = l;
                            return i !== e && (u = t(i, l)), c > u ? new ArrayBuffer(0) : (r = u - c, o = new ArrayBuffer(r), a = new Uint8Array(o), s = new Uint8Array(this, c, r), a.set(s), o)
                        }
                    }(), p.prototype.append = function(e) { return this.appendBinary(l(e)), this }, p.prototype.appendBinary = function(e) { this._buff += e, this._length += e.length; var i, r = this._buff.length; for (i = 64; i <= r; i += 64) t(this._hash, n(this._buff.substring(i - 64, i))); return this._buff = this._buff.substring(i - 64), this }, p.prototype.end = function(e) {
                        var t, n, i = this._buff,
                            r = i.length,
                            o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        for (t = 0; t < r; t += 1) o[t >> 2] |= i.charCodeAt(t) << (t % 4 << 3);
                        return this._finish(o, r), n = s(this._hash), e && (n = h(n)), this.reset(), n
                    }, p.prototype.reset = function() { return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this }, p.prototype.getState = function() { return { buff: this._buff, length: this._length, hash: this._hash } }, p.prototype.setState = function(e) { return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this }, p.prototype.destroy = function() { delete this._hash, delete this._buff, delete this._length }, p.prototype._finish = function(e, n) {
                        var i, r, o, a = n;
                        if (e[a >> 2] |= 128 << (a % 4 << 3), a > 55)
                            for (t(this._hash, e), a = 0; a < 16; a += 1) e[a] = 0;
                        i = (i = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), r = parseInt(i[2], 16), o = parseInt(i[1], 16) || 0, e[14] = r, e[15] = o, t(this._hash, e)
                    }, p.hash = function(e, t) { return p.hashBinary(l(e), t) }, p.hashBinary = function(e, t) { var n = s(r(e)); return t ? h(n) : n }, p.ArrayBuffer = function() { this.reset() }, p.ArrayBuffer.prototype.append = function(e) {
                        var n, r = d(this._buff.buffer, e, !0),
                            o = r.length;
                        for (this._length += e.byteLength, n = 64; n <= o; n += 64) t(this._hash, i(r.subarray(n - 64, n)));
                        return this._buff = n - 64 < o ? new Uint8Array(r.buffer.slice(n - 64)) : new Uint8Array(0), this
                    }, p.ArrayBuffer.prototype.end = function(e) {
                        var t, n, i = this._buff,
                            r = i.length,
                            o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        for (t = 0; t < r; t += 1) o[t >> 2] |= i[t] << (t % 4 << 3);
                        return this._finish(o, r), n = s(this._hash), e && (n = h(n)), this.reset(), n
                    }, p.ArrayBuffer.prototype.reset = function() { return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this }, p.ArrayBuffer.prototype.getState = function() { var e = p.prototype.getState.call(this); return e.buff = u(e.buff), e }, p.ArrayBuffer.prototype.setState = function(e) { return e.buff = c(e.buff, !0), p.prototype.setState.call(this, e) }, p.ArrayBuffer.prototype.destroy = p.prototype.destroy, p.ArrayBuffer.prototype._finish = p.prototype._finish, p.ArrayBuffer.hash = function(e, t) { var n = s(o(new Uint8Array(e))); return t ? h(n) : n }, p
                }, e.exports = t()
            }),
            v = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") },
            b = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
            }(),
            k = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
            w = function() {
                function e(t) { v(this, e), this.file = t, this.chunkSize = 2097152, this.chunkCount = Math.ceil(this.file.size / this.chunkSize), this.chunkIndex = 0 }
                return b(e, null, [{ key: "create", value: function(t, n) { new e(t).create(n) } }]), b(e, [{
                    key: "create",
                    value: function(e) {
                        var t = this;
                        this.callback = e, this.md5Buffer = new y.ArrayBuffer, this.fileReader = new FileReader, this.fileReader.addEventListener("load", function(e) { return t.fileReaderDidLoad(e) }), this.fileReader.addEventListener("error", function(e) { return t.fileReaderDidError(e) }), this.readNextChunk()
                    }
                }, {
                    key: "fileReaderDidLoad",
                    value: function(e) {
                        if (this.md5Buffer.append(e.target.result), !this.readNextChunk()) {
                            var t = this.md5Buffer.end(!0),
                                n = btoa(t);
                            this.callback(null, n)
                        }
                    }
                }, { key: "fileReaderDidError", value: function() { this.callback("Error reading " + this.file.name) } }, {
                    key: "readNextChunk",
                    value: function() {
                        if (this.chunkIndex < this.chunkCount || 0 == this.chunkIndex && 0 == this.chunkCount) {
                            var e = this.chunkIndex * this.chunkSize,
                                t = Math.min(e + this.chunkSize, this.file.size),
                                n = k.call(this.file, e, t);
                            return this.fileReader.readAsArrayBuffer(n), this.chunkIndex++, !0
                        }
                        return !1
                    }
                }]), e
            }(),
            _ = function() {
                function e(t, i, r) {
                    var o = this;
                    v(this, e), this.file = t, this.attributes = { filename: t.name, content_type: t.type, byte_size: t.size, checksum: i }, this.xhr = new XMLHttpRequest, this.xhr.open("POST", r, !0), this.xhr.responseType = "json", this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.setRequestHeader("Accept", "application/json"), this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"), this.xhr.setRequestHeader("X-CSRF-Token", n("csrf-token")), this.xhr.addEventListener("load", function(e) { return o.requestDidLoad(e) }), this.xhr.addEventListener("error", function(e) { return o.requestDidError(e) })
                }
                return b(e, [{ key: "create", value: function(e) { this.callback = e, this.xhr.send(JSON.stringify({ blob: this.attributes })) } }, {
                    key: "requestDidLoad",
                    value: function(e) {
                        if (this.status >= 200 && this.status < 300) {
                            var t = this.response,
                                n = t.direct_upload;
                            delete t.direct_upload, this.attributes = t, this.directUploadData = n, this.callback(null, this.toJSON())
                        } else this.requestDidError(e)
                    }
                }, { key: "requestDidError", value: function() { this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status) } }, { key: "toJSON", value: function() { var e = {}; for (var t in this.attributes) e[t] = this.attributes[t]; return e } }, { key: "status", get: function() { return this.xhr.status } }, {
                    key: "response",
                    get: function() {
                        var e = this.xhr,
                            t = e.responseType,
                            n = e.response;
                        return "json" == t ? n : JSON.parse(n)
                    }
                }]), e
            }(),
            S = function() {
                function e(t) {
                    var n = this;
                    v(this, e), this.blob = t, this.file = t.file;
                    var i = t.directUploadData,
                        r = i.url,
                        o = i.headers;
                    for (var a in this.xhr = new XMLHttpRequest, this.xhr.open("PUT", r, !0), this.xhr.responseType = "text", o) this.xhr.setRequestHeader(a, o[a]);
                    this.xhr.addEventListener("load", function(e) { return n.requestDidLoad(e) }), this.xhr.addEventListener("error", function(e) { return n.requestDidError(e) })
                }
                return b(e, [{ key: "create", value: function(e) { this.callback = e, this.xhr.send(this.file.slice()) } }, {
                    key: "requestDidLoad",
                    value: function(e) {
                        var t = this.xhr,
                            n = t.status,
                            i = t.response;
                        n >= 200 && n < 300 ? this.callback(null, i) : this.requestDidError(e)
                    }
                }, { key: "requestDidError", value: function() { this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status) } }]), e
            }(),
            C = 0,
            T = function() {
                function e(t, n, i) { v(this, e), this.id = ++C, this.file = t, this.url = n, this.delegate = i }
                return b(e, [{
                    key: "create",
                    value: function(e) {
                        var t = this;
                        w.create(this.file, function(n, i) {
                            if (n) e(n);
                            else {
                                var r = new _(t.file, i, t.url);
                                s(t.delegate, "directUploadWillCreateBlobWithXHR", r.xhr), r.create(function(n) {
                                    if (n) e(n);
                                    else {
                                        var i = new S(r);
                                        s(t.delegate, "directUploadWillStoreFileWithXHR", i.xhr), i.create(function(t) { t ? e(t) : e(null, r.toJSON()) })
                                    }
                                })
                            }
                        })
                    }
                }]), e
            }(),
            E = function() {
                function e(t, n) { v(this, e), this.input = t, this.file = n, this.directUpload = new T(this.file, this.url, this), this.dispatch("initialize") }
                return b(e, [{
                    key: "start",
                    value: function(e) {
                        var t = this,
                            n = document.createElement("input");
                        n.type = "hidden", n.name = this.input.name, this.input.insertAdjacentElement("beforebegin", n), this.dispatch("start"), this.directUpload.create(function(i, r) { i ? (n.parentNode.removeChild(n), t.dispatchError(i)) : n.value = r.signed_id, t.dispatch("end"), e(i) })
                    }
                }, {
                    key: "uploadRequestDidProgress",
                    value: function(e) {
                        var t = e.loaded / e.total * 100;
                        t && this.dispatch("progress", { progress: t })
                    }
                }, { key: "dispatch", value: function(e) { var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; return t.file = this.file, t.id = this.directUpload.id, o(this.input, "direct-upload:" + e, { detail: t }) } }, { key: "dispatchError", value: function(e) { this.dispatch("error", { error: e }).defaultPrevented || alert(e) } }, { key: "directUploadWillCreateBlobWithXHR", value: function(e) { this.dispatch("before-blob-request", { xhr: e }) } }, {
                    key: "directUploadWillStoreFileWithXHR",
                    value: function(e) {
                        var t = this;
                        this.dispatch("before-storage-request", { xhr: e }), e.upload.addEventListener("progress", function(e) { return t.uploadRequestDidProgress(e) })
                    }
                }, { key: "url", get: function() { return this.input.getAttribute("data-direct-upload-url") } }]), e
            }(),
            A = "input[type=file][data-direct-upload-url]:not([disabled])",
            x = function() {
                function e(t) { v(this, e), this.form = t, this.inputs = i(t, A).filter(function(e) { return e.files.length }) }
                return b(e, [{
                    key: "start",
                    value: function(e) {
                        var t = this,
                            n = this.createDirectUploadControllers(),
                            i = function r() {
                                var i = n.shift();
                                i ? i.start(function(n) { n ? (e(n), t.dispatch("end")) : r() }) : (e(), t.dispatch("end"))
                            };
                        this.dispatch("start"), i()
                    }
                }, {
                    key: "createDirectUploadControllers",
                    value: function() {
                        var e = [];
                        return this.inputs.forEach(function(t) {
                            a(t.files).forEach(function(n) {
                                var i = new E(t, n);
                                e.push(i)
                            })
                        }), e
                    }
                }, { key: "dispatch", value: function(e) { var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; return o(this.form, "direct-uploads:" + e, { detail: t }) } }]), e
            }(),
            D = "data-direct-uploads-processing",
            M = new WeakMap,
            O = !1;
        setTimeout(g, 1), e.start = l, e.DirectUpload = T, Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    /*!
     * jQuery JavaScript Library v1.12.4
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2016-05-20T17:17Z
     */
    function(e, t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = !!e && "length" in e && e.length,
                n = pe.type(e);
            return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e, t, n) {
            if (pe.isFunction(t)) return pe.grep(e, function(e, i) { return !!t.call(e, i, e) !== n });
            if (t.nodeType) return pe.grep(e, function(e) { return e === t !== n });
            if ("string" == typeof t) {
                if (Se.test(t)) return pe.filter(t, e, n);
                t = pe.filter(t, e)
            }
            return pe.grep(e, function(e) { return pe.inArray(e, t) > -1 !== n })
        }

        function r(e, t) { do { e = e[t] } while (e && 1 !== e.nodeType); return e }

        function o(e) { var t = {}; return pe.each(e.match(Me) || [], function(e, n) { t[n] = !0 }), t }

        function a() { ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s), e.detachEvent("onload", s)) }

        function s() {
            (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (a(), pe.ready())
        }

        function l(e, t, n) {
            if (n === undefined && 1 === e.nodeType) {
                var i = "data-" + t.replace(Pe, "-$1").toLowerCase();
                if ("string" == typeof(n = e.getAttribute(i))) {
                    try { n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ne.test(n) ? pe.parseJSON(n) : n) } catch (r) {}
                    pe.data(e, t, n)
                } else n = undefined
            }
            return n
        }

        function c(e) {
            var t;
            for (t in e)
                if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function u(e, t, n, i) {
            if (Ie(e)) {
                var r, o, a = pe.expando,
                    s = e.nodeType,
                    l = s ? pe.cache : e,
                    c = s ? e[a] : e[a] && a;
                if (c && l[c] && (i || l[c].data) || n !== undefined || "string" != typeof t) return c || (c = s ? e[a] = ne.pop() || pe.guid++ : a), l[c] || (l[c] = s ? {} : { toJSON: pe.noop }), "object" != typeof t && "function" != typeof t || (i ? l[c] = pe.extend(l[c], t) : l[c].data = pe.extend(l[c].data, t)), o = l[c], i || (o.data || (o.data = {}), o = o.data), n !== undefined && (o[pe.camelCase(t)] = n), "string" == typeof t ? null == (r = o[t]) && (r = o[pe.camelCase(t)]) : r = o, r
            }
        }

        function d(e, t, n) {
            if (Ie(e)) {
                var i, r, o = e.nodeType,
                    a = o ? pe.cache : e,
                    s = o ? e[pe.expando] : pe.expando;
                if (a[s]) { if (t && (i = n ? a[s] : a[s].data)) { r = (t = pe.isArray(t) ? t.concat(pe.map(t, pe.camelCase)) : t in i ? [t] : (t = pe.camelCase(t)) in i ? [t] : t.split(" ")).length; for (; r--;) delete i[t[r]]; if (n ? !c(i) : !pe.isEmptyObject(i)) return }(n || (delete a[s].data, c(a[s]))) && (o ? pe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined) }
            }
        }

        function h(e, t, n, i) {
            var r, o = 1,
                a = 20,
                s = i ? function() { return i.cur() } : function() { return pe.css(e, t, "") },
                l = s(),
                c = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
                u = (pe.cssNumber[t] || "px" !== c && +l) && Fe.exec(pe.css(e, t));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do { u /= o = o || ".5", pe.style(e, t, u + c) } while (o !== (o = s() / l) && 1 !== o && --a)
            }
            return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
        }

        function p(e) {
            var t = Je.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function f(e, t) {
            var n, i, r = 0,
                o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || pe.nodeName(i, t) ? o.push(i) : pe.merge(o, f(i, t));
            return t === undefined || t && pe.nodeName(e, t) ? pe.merge([e], o) : o
        }

        function m(e, t) { for (var n, i = 0; null != (n = e[i]); i++) pe._data(n, "globalEval", !t || pe._data(t[i], "globalEval")) }

        function g(e) { Ue.test(e.type) && (e.defaultChecked = e.checked) }

        function y(e, t, n, i, r) {
            for (var o, a, s, l, c, u, d, h = e.length, y = p(t), v = [], b = 0; b < h; b++)
                if ((a = e[b]) || 0 === a)
                    if ("object" === pe.type(a)) pe.merge(v, a.nodeType ? [a] : a);
                    else if (Ke.test(a)) {
                for (l = l || y.appendChild(t.createElement("div")), c = (Ve.exec(a) || ["", ""])[1].toLowerCase(), d = Ge[c] || Ge._default, l.innerHTML = d[1] + pe.htmlPrefilter(a) + d[2], o = d[0]; o--;) l = l.lastChild;
                if (!de.leadingWhitespace && We.test(a) && v.push(t.createTextNode(We.exec(a)[0])), !de.tbody)
                    for (o = (a = "table" !== c || Qe.test(a) ? "<table>" !== d[1] || Qe.test(a) ? 0 : l : l.firstChild) && a.childNodes.length; o--;) pe.nodeName(u = a.childNodes[o], "tbody") && !u.childNodes.length && a.removeChild(u);
                for (pe.merge(v, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = y.lastChild
            } else v.push(t.createTextNode(a));
            for (l && y.removeChild(l), de.appendChecked || pe.grep(f(v, "input"), g), b = 0; a = v[b++];)
                if (i && pe.inArray(a, i) > -1) r && r.push(a);
                else if (s = pe.contains(a.ownerDocument, a), l = f(y.appendChild(a), "script"), s && m(l), n)
                for (o = 0; a = l[o++];) ze.test(a.type || "") && n.push(a);
            return l = null, y
        }

        function v() { return !0 }

        function b() { return !1 }

        function k() { try { return ie.activeElement } catch (e) {} }

        function w(e, t, n, i, r, o) {
            var a, s;
            if ("object" == typeof t) { for (s in "string" != typeof n && (i = i || n, n = undefined), t) w(e, s, n, i, t[s], o); return e }
            if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), !1 === r) r = b;
            else if (!r) return e;
            return 1 === o && (a = r, (r = function(e) { return pe().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = pe.guid++)), e.each(function() { pe.event.add(this, t, r, i, n) })
        }

        function _(e, t) { return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

        function S(e) { return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e }

        function C(e) { var t = st.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

        function T(e, t) {
            if (1 === t.nodeType && pe.hasData(e)) {
                var n, i, r, o = pe._data(e),
                    a = pe._data(t, o),
                    s = o.events;
                if (s)
                    for (n in delete a.handle, a.events = {}, s)
                        for (i = 0, r = s[n].length; i < r; i++) pe.event.add(t, n, s[n][i]);
                a.data && (a.data = pe.extend({}, a.data))
            }
        }

        function E(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[pe.expando]) {
                    for (i in (r = pe._data(t)).events) pe.removeEvent(t, i, r.handle);
                    t.removeAttribute(pe.expando)
                }
                "script" === n && t.text !== e.text ? (S(t).text = e.text, C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ue.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function A(e, t, n, i) {
            t = oe.apply([], t);
            var r, o, a, s, l, c, u = 0,
                d = e.length,
                h = d - 1,
                p = t[0],
                m = pe.isFunction(p);
            if (m || d > 1 && "string" == typeof p && !de.checkClone && at.test(p)) return e.each(function(r) {
                var o = e.eq(r);
                m && (t[0] = p.call(this, r, o.html())), A(o, t, n, i)
            });
            if (d && (r = (c = y(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === c.childNodes.length && (c = r), r || i)) {
                for (a = (s = pe.map(f(c, "script"), S)).length; u < d; u++) o = c, u !== h && (o = pe.clone(o, !0, !0), a && pe.merge(s, f(o, "script"))), n.call(e[u], o, u);
                if (a)
                    for (l = s[s.length - 1].ownerDocument, pe.map(s, C), u = 0; u < a; u++) o = s[u], ze.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(l, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(lt, "")));
                c = r = null
            }
            return e
        }

        function x(e, t, n) { for (var i, r = t ? pe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || pe.cleanData(f(i)), i.parentNode && (n && pe.contains(i.ownerDocument, i) && m(f(i, "script")), i.parentNode.removeChild(i)); return e }

        function D(e, t) {
            var n = pe(t.createElement(e)).appendTo(t.body),
                i = pe.css(n[0], "display");
            return n.detach(), i
        }

        function M(e) {
            var t = ie,
                n = dt[e];
            return n || ("none" !== (n = D(e, t)) && n || ((t = ((ut = (ut || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || ut[0].contentDocument).document).write(), t.close(), n = D(e, t), ut.detach()), dt[e] = n), n
        }

        function O(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        function I(e) {
            if (e in Et) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Tt.length; n--;)
                if ((e = Tt[n] + t) in Et) return e
        }

        function N(e, t) { for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (o[a] = pe._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Be(i) && (o[a] = pe._data(i, "olddisplay", M(i.nodeName)))) : (r = Be(i), (n && "none" !== n || !r) && pe._data(i, "olddisplay", r ? n : pe.css(i, "display")))); for (a = 0; a < s; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none")); return e }

        function P(e, t, n) { var i = _t.exec(t); return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t }

        function j(e, t, n, i, r) { for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += pe.css(e, n + He[o], !0, r)), i ? ("content" === n && (a -= pe.css(e, "padding" + He[o], !0, r)), "margin" !== n && (a -= pe.css(e, "border" + He[o] + "Width", !0, r))) : (a += pe.css(e, "padding" + He[o], !0, r), "padding" !== n && (a += pe.css(e, "border" + He[o] + "Width", !0, r))); return a }

        function L(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = gt(e),
                a = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o);
            if (r <= 0 || null == r) {
                if (((r = yt(e, t, o)) < 0 || null == r) && (r = e.style[t]), pt.test(r)) return r;
                i = a && (de.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + j(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function $(e, t, n, i, r) { return new $.prototype.init(e, t, n, i, r) }

        function R() { return e.setTimeout(function() { At = undefined }), At = pe.now() }

        function F(e, t) {
            var n, i = { height: e },
                r = 0;
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = He[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function H(e, t, n) {
            for (var i, r = (U.tweeners[t] || []).concat(U.tweeners["*"]), o = 0, a = r.length; o < a; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function B(e, t, n) {
            var i, r, o, a, s, l, c, u = this,
                d = {},
                h = e.style,
                p = e.nodeType && Be(e),
                f = pe._data(e, "fxshow");
            for (i in n.queue || (null == (s = pe._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() { s.unqueued || l() }), s.unqueued++, u.always(function() { u.always(function() { s.unqueued--, pe.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = pe.css(e, "display")) ? pe._data(e, "olddisplay") || M(e.nodeName) : c) && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== M(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", de.shrinkWrapBlocks() || u.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), t)
                if (r = t[i], Dt.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !f || f[i] === undefined) continue;
                        p = !0
                    }
                    d[i] = f && f[i] || pe.style(e, i)
                } else c = undefined;
            if (pe.isEmptyObject(d)) "inline" === ("none" === c ? M(e.nodeName) : c) && (h.display = c);
            else
                for (i in f ? "hidden" in f && (p = f.hidden) : f = pe._data(e, "fxshow", {}), o && (f.hidden = !p), p ? pe(e).show() : u.done(function() { pe(e).hide() }), u.done(function() { var t; for (t in pe._removeData(e, "fxshow"), d) pe.style(e, t, d[t]) }), d) a = H(p ? f[i] : 0, i, u), i in f || (f[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }

        function q(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (r = t[i = pe.camelCase(n)], o = e[n], pe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = pe.cssHooks[i]) && "expand" in a)
                    for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                else t[i] = r
        }

        function U(e, t, n) {
            var i, r, o = 0,
                a = U.prefilters.length,
                s = pe.Deferred().always(function() { delete l.elem }),
                l = function() { if (r) return !1; for (var t = At || R(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(i); return s.notifyWith(e, [c, i, n]), i < 1 && a ? n : (s.resolveWith(e, [c]), !1) },
                c = s.promise({
                    elem: e,
                    props: pe.extend({}, t),
                    opts: pe.extend(!0, { specialEasing: {}, easing: pe.easing._default }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: At || R(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) { var i = pe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing); return c.tweens.push(i), i },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) c.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (q(u, c.opts.specialEasing); o < a; o++)
                if (i = U.prefilters[o].call(c, e, u, c.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(i.stop, i)), i;
            return pe.map(u, H, c), pe.isFunction(c.opts.start) && c.opts.start.call(e, c), pe.fx.timer(pe.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function V(e) { return pe.attr(e, "class") || "" }

        function z(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(Me) || [];
                if (pe.isFunction(n))
                    for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function W(e, t, n, i) {
            function r(s) { var l; return o[s] = !0, pe.each(e[s] || [], function(e, s) { var c = s(t, n, i); return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1) }), l }
            var o = {},
                a = e === en;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function J(e, t) { var n, i, r = pe.ajaxSettings.flatOptions || {}; for (i in t) t[i] !== undefined && ((r[i] ? e : n || (n = {}))[i] = t[i]); return n && pe.extend(!0, e, n), e }

        function G(e, t, n) {
            for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (a in s)
                    if (s[a] && s[a].test(r)) { l.unshift(a); break }
            if (l[0] in n) o = l[0];
            else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) { o = a; break }
                    i || (i = a)
                }
                o = o || i
            }
            if (o) return o !== l[0] && l.unshift(o), n[o]
        }

        function K(e, t, n, i) {
            var r, o, a, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (o = u.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (!(a = c[l + " " + o] || c["* " + o]))
                    for (r in c)
                        if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {!0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1])); break }
                if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else try { t = a(t) } catch (d) { return { state: "parsererror", error: a ? d : "No conversion from " + l + " to " + o } }
            }
            return { state: "success", data: t }
        }

        function Q(e) { return e.style && e.style.display || pe.css(e, "display") }

        function Y(e) {
            if (!pe.contains(e.ownerDocument || ie, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === Q(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }

        function X(e, t, n, i) {
            var r;
            if (pe.isArray(t)) pe.each(t, function(t, r) { n || an.test(e) ? i(e, r) : X(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i) });
            else if (n || "object" !== pe.type(t)) i(e, t);
            else
                for (r in t) X(e + "[" + r + "]", t[r], n, i)
        }

        function Z() { try { return new e.XMLHttpRequest } catch (t) {} }

        function ee() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

        function te(e) { return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow) }
        var ne = [],
            ie = e.document,
            re = ne.slice,
            oe = ne.concat,
            ae = ne.push,
            se = ne.indexOf,
            le = {},
            ce = le.toString,
            ue = le.hasOwnProperty,
            de = {},
            he = "1.12.4",
            pe = function(e, t) { return new pe.fn.init(e, t) },
            fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            me = /^-ms-/,
            ge = /-([\da-z])/gi,
            ye = function(e, t) { return t.toUpperCase() };
        pe.fn = pe.prototype = {
            jquery: he,
            constructor: pe,
            selector: "",
            length: 0,
            toArray: function() { return re.call(this) },
            get: function(e) { return null != e ? e < 0 ? this[e + this.length] : this[e] : re.call(this) },
            pushStack: function(e) { var t = pe.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t },
            each: function(e) { return pe.each(this, e) },
            map: function(e) { return this.pushStack(pe.map(this, function(t, n) { return e.call(t, n, t) })) },
            slice: function() { return this.pushStack(re.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() { return this.prevObject || this.constructor() },
            push: ae,
            sort: ne.sort,
            splice: ne.splice
        }, pe.extend = pe.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                if (null != (r = arguments[s]))
                    for (i in r) e = a[i], a !== (n = r[i]) && (c && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {}, a[i] = pe.extend(c, o, n)) : n !== undefined && (a[i] = n));
            return a
        }, pe.extend({
            expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) { throw new Error(e) },
            noop: function() {},
            isFunction: function(e) { return "function" === pe.type(e) },
            isArray: Array.isArray || function(e) { return "array" === pe.type(e) },
            isWindow: function(e) { return null != e && e == e.window },
            isNumeric: function(e) { var t = e && e.toString(); return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0 },
            isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
                try { if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) { return !1 }
                if (!de.ownFirst)
                    for (t in e) return ue.call(e, t);
                for (t in e);
                return t === undefined || ue.call(e, t)
            },
            type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e },
            globalEval: function(t) { t && pe.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) },
            camelCase: function(e) { return e.replace(me, "ms-").replace(ge, ye) },
            nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
            each: function(e, t) {
                var i, r = 0;
                if (n(e))
                    for (i = e.length; r < i && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break; return e
            },
            trim: function(e) { return null == e ? "" : (e + "").replace(fe, "") },
            makeArray: function(e, t) { var i = t || []; return null != e && (n(Object(e)) ? pe.merge(i, "string" == typeof e ? [e] : e) : ae.call(i, e)), i },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (se) return se.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
                if (n != n)
                    for (; t[i] !== undefined;) e[r++] = t[i++];
                return e.length = r, e
            },
            grep: function(e, t, n) { for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]); return i },
            map: function(e, t, i) {
                var r, o, a = 0,
                    s = [];
                if (n(e))
                    for (r = e.length; a < r; a++) null != (o = t(e[a], a, i)) && s.push(o);
                else
                    for (a in e) null != (o = t(e[a], a, i)) && s.push(o);
                return oe.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) { var n, i, r; return "string" == typeof t && (r = e[t], t = e, e = r), pe.isFunction(e) ? (n = re.call(arguments, 2), (i = function() { return e.apply(t || this, n.concat(re.call(arguments))) }).guid = e.guid = e.guid || pe.guid++, i) : undefined },
            now: function() { return +new Date },
            support: de
        }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { le["[object " + t + "]"] = t.toLowerCase() });
        var ve =
            /*!
             * Sizzle CSS Selector Engine v2.2.1
             * http://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2015-10-17
             */
            function(e) {
                function t(e, t, n, i) {
                    var r, o, a, s, l, c, d, p, f = t && t.ownerDocument,
                        m = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                    if (!i && ((t ? t.ownerDocument || t : H) !== I && O(t), t = t || I, P)) {
                        if (11 !== m && (c = ye.exec(e)))
                            if (r = c[1]) { if (9 === m) { if (!(a = t.getElementById(r))) return n; if (a.id === r) return n.push(a), n } else if (f && (a = f.getElementById(r)) && R(t, a) && a.id === r) return n.push(a), n } else { if (c[2]) return X.apply(n, t.getElementsByTagName(e)), n; if ((r = c[3]) && w.getElementsByClassName && t.getElementsByClassName) return X.apply(n, t.getElementsByClassName(r)), n }
                        if (w.qsa && !z[e + " "] && (!j || !j.test(e))) {
                            if (1 !== m) f = t, p = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = F), o = (d = T(e)).length, l = he.test(s) ? "#" + s : "[id='" + s + "']"; o--;) d[o] = l + " " + h(d[o]);
                                p = d.join(","), f = ve.test(e) && u(t.parentNode) || t
                            }
                            if (p) try { return X.apply(n, f.querySelectorAll(p)), n } catch (g) {} finally { s === F && t.removeAttribute("id") }
                        }
                    }
                    return A(e.replace(se, "$1"), t, n, i)
                }

                function n() {
                    function e(n, i) { return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = i }
                    var t = [];
                    return e
                }

                function i(e) { return e[F] = !0, e }

                function r(e) { var t = I.createElement("div"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

                function o(e, t) { for (var n = e.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = t }

                function a(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }

                function l(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

                function c(e) { return i(function(t) { return t = +t, i(function(n, i) { for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r])) }) }) }

                function u(e) { return e && "undefined" != typeof e.getElementsByTagName && e }

                function d() {}

                function h(e) { for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value; return i }

                function p(e, t, n) {
                    var i = t.dir,
                        r = n && "parentNode" === i,
                        o = q++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) return e(t, n, o)
                    } : function(t, n, a) {
                        var s, l, c, u = [B, o];
                        if (a) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || r) { if ((s = (l = (c = t[F] || (t[F] = {}))[t.uniqueID] || (c[t.uniqueID] = {}))[i]) && s[0] === B && s[1] === o) return u[2] = s[2]; if (l[i] = u, u[2] = e(t, n, a)) return !0 }
                    }
                }

                function f(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function m(e, n, i) { for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i); return i }

                function g(e, t, n, i, r) { for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s))); return a }

                function y(e, t, n, r, o, a) {
                    return r && !r[F] && (r = y(r)), o && !o[F] && (o = y(o, a)), i(function(i, a, s, l) {
                        var c, u, d, h = [],
                            p = [],
                            f = a.length,
                            y = i || m(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !i && t ? y : g(y, h, e, s, l),
                            b = n ? o || (i ? e : f || r) ? [] : a : v;
                        if (n && n(v, b, s, l), r)
                            for (c = g(b, p), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(v[p[u]] = d));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], u = b.length; u--;)(d = b[u]) && c.push(v[u] = d);
                                    o(null, b = [], c, l)
                                }
                                for (u = b.length; u--;)(d = b[u]) && (c = o ? ee(i, d) : h[u]) > -1 && (i[c] = !(a[c] = d))
                            }
                        } else b = g(b === a ? b.splice(f, b.length) : b), o ? o(null, a, b, l) : X.apply(a, b)
                    })
                }

                function v(e) {
                    for (var t, n, i, r = e.length, o = _.relative[e[0].type], a = o || _.relative[" "], s = o ? 1 : 0, l = p(function(e) { return e === t }, a, !0), c = p(function(e) { return ee(t, e) > -1 }, a, !0), u = [function(e, n, i) { var r = !o && (i || n !== x) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i)); return t = null, r }]; s < r; s++)
                        if (n = _.relative[e[s].type]) u = [p(f(u), n)];
                        else {
                            if ((n = _.filter[e[s].type].apply(null, e[s].matches))[F]) { for (i = ++s; i < r && !_.relative[e[i].type]; i++); return y(s > 1 && f(u), s > 1 && h(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(se, "$1"), n, s < i && v(e.slice(s, i)), i < r && v(e = e.slice(i)), i < r && h(e)) }
                            u.push(n)
                        }
                    return f(u)
                }

                function b(e, n) {
                    var r = n.length > 0,
                        o = e.length > 0,
                        a = function(i, a, s, l, c) {
                            var u, d, h, p = 0,
                                f = "0",
                                m = i && [],
                                y = [],
                                v = x,
                                b = i || o && _.find.TAG("*", c),
                                k = B += null == v ? 1 : Math.random() || .1,
                                w = b.length;
                            for (c && (x = a === I || a || c); f !== w && null != (u = b[f]); f++) {
                                if (o && u) {
                                    for (d = 0, a || u.ownerDocument === I || (O(u), s = !P); h = e[d++];)
                                        if (h(u, a || I, s)) { l.push(u); break }
                                    c && (B = k)
                                }
                                r && ((u = !h && u) && p--, i && m.push(u))
                            }
                            if (p += f, r && f !== p) {
                                for (d = 0; h = n[d++];) h(m, y, a, s);
                                if (i) {
                                    if (p > 0)
                                        for (; f--;) m[f] || y[f] || (y[f] = Q.call(l));
                                    y = g(y)
                                }
                                X.apply(l, y), c && !i && y.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                            }
                            return c && (B = k, x = v), m
                        };
                    return r ? i(a) : a
                }
                var k, w, _, S, C, T, E, A, x, D, M, O, I, N, P, j, L, $, R, F = "sizzle" + 1 * new Date,
                    H = e.document,
                    B = 0,
                    q = 0,
                    U = n(),
                    V = n(),
                    z = n(),
                    W = function(e, t) { return e === t && (M = !0), 0 },
                    J = 1 << 31,
                    G = {}.hasOwnProperty,
                    K = [],
                    Q = K.pop,
                    Y = K.push,
                    X = K.push,
                    Z = K.slice,
                    ee = function(e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]",
                    ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                    oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                    ae = new RegExp(ne + "+", "g"),
                    se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    le = new RegExp("^" + ne + "*," + ne + "*"),
                    ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                    de = new RegExp(oe),
                    he = new RegExp("^" + ie + "$"),
                    pe = { ID: new RegExp("^#(" + ie + ")"), CLASS: new RegExp("^\\.(" + ie + ")"), TAG: new RegExp("^(" + ie + "|[*])"), ATTR: new RegExp("^" + re), PSEUDO: new RegExp("^" + oe), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
                    fe = /^(?:input|select|textarea|button)$/i,
                    me = /^h\d$/i,
                    ge = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ve = /[+~]/,
                    be = /'|\\/g,
                    ke = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                    we = function(e, t, n) { var i = "0x" + t - 65536; return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
                    _e = function() { O() };
                try { X.apply(K = Z.call(H.childNodes), H.childNodes), K[H.childNodes.length].nodeType } catch (Se) {
                    X = {
                        apply: K.length ? function(e, t) { Y.apply(e, Z.call(t)) } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                for (k in w = t.support = {}, C = t.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, O = t.setDocument = function(e) {
                        var t, n, i = e ? e.ownerDocument || e : H;
                        return i !== I && 9 === i.nodeType && i.documentElement ? (N = (I = i).documentElement, P = !C(I), (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _e, !1) : n.attachEvent && n.attachEvent("onunload", _e)), w.attributes = r(function(e) { return e.className = "i", !e.getAttribute("className") }), w.getElementsByTagName = r(function(e) { return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length }), w.getElementsByClassName = ge.test(I.getElementsByClassName), w.getById = r(function(e) { return N.appendChild(e).id = F, !I.getElementsByName || !I.getElementsByName(F).length }), w.getById ? (_.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && P) { var n = t.getElementById(e); return n ? [n] : [] } }, _.filter.ID = function(e) { var t = e.replace(ke, we); return function(e) { return e.getAttribute("id") === t } }) : (delete _.find.ID, _.filter.ID = function(e) { var t = e.replace(ke, we); return function(e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }), _.find.TAG = w.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                            var n, i = [],
                                r = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) { for (; n = o[r++];) 1 === n.nodeType && i.push(n); return i }
                            return o
                        }, _.find.CLASS = w.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && P) return t.getElementsByClassName(e) }, L = [], j = [], (w.qsa = ge.test(I.querySelectorAll)) && (r(function(e) { N.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + F + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || j.push(".#.+[+~]") }), r(function(e) {
                            var t = I.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
                        })), (w.matchesSelector = ge.test($ = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(e) { w.disconnectedMatch = $.call(e, "div"), $.call(e, "[s!='']:x"), L.push("!=", oe) }), j = j.length && new RegExp(j.join("|")), L = L.length && new RegExp(L.join("|")), t = ge.test(N.compareDocumentPosition), R = t || ge.test(N.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, W = t ? function(e, t) { if (e === t) return M = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === H && R(H, e) ? -1 : t === I || t.ownerDocument === H && R(H, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                            if (e === t) return M = !0, 0;
                            var n, i = 0,
                                r = e.parentNode,
                                o = t.parentNode,
                                s = [e],
                                l = [t];
                            if (!r || !o) return e === I ? -1 : t === I ? 1 : r ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                            if (r === o) return a(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) l.unshift(n);
                            for (; s[i] === l[i];) i++;
                            return i ? a(s[i], l[i]) : s[i] === H ? -1 : l[i] === H ? 1 : 0
                        }, I) : I
                    }, t.matches = function(e, n) { return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
                        if ((e.ownerDocument || e) !== I && O(e), n = n.replace(ue, "='$1']"), w.matchesSelector && P && !z[n + " "] && (!L || !L.test(n)) && (!j || !j.test(n))) try { var i = $.call(e, n); if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i } catch (Se) {}
                        return t(n, I, null, [e]).length > 0
                    }, t.contains = function(e, t) { return (e.ownerDocument || e) !== I && O(e), R(e, t) }, t.attr = function(e, t) {
                        (e.ownerDocument || e) !== I && O(e);
                        var n = _.attrHandle[t.toLowerCase()],
                            i = n && G.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !P) : undefined;
                        return i !== undefined ? i : w.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, t.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
                        var t, n = [],
                            i = 0,
                            r = 0;
                        if (M = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(W), M) { for (; t = e[r++];) t === e[r] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) }
                        return D = null, e
                    }, S = t.getText = function(e) {
                        var t, n = "",
                            i = 0,
                            r = e.nodeType;
                        if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += S(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                            for (; t = e[i++];) n += S(t);
                        return n
                    }, (_ = t.selectors = {
                        cacheLength: 50,
                        createPseudo: i,
                        match: pe,
                        attrHandle: {},
                        find: {},
                        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                        preFilter: { ATTR: function(e) { return e[1] = e[1].replace(ke, we), e[3] = (e[3] || e[4] || e[5] || "").replace(ke, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                        filter: {
                            TAG: function(e) { var t = e.replace(ke, we).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                            CLASS: function(e) { var t = U[e + " "]; return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                            ATTR: function(e, n, i) { return function(r) { var o = t.attr(r, e); return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-")) } },
                            CHILD: function(e, t, n, i, r) {
                                var o = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === i && 0 === r ? function(e) { return !!e.parentNode } : function(t, n, l) {
                                    var c, u, d, h, p, f, m = o !== a ? "nextSibling" : "previousSibling",
                                        g = t.parentNode,
                                        y = s && t.nodeName.toLowerCase(),
                                        v = !l && !s,
                                        b = !1;
                                    if (g) {
                                        if (o) {
                                            for (; m;) {
                                                for (h = t; h = h[m];)
                                                    if (s ? h.nodeName.toLowerCase() === y : 1 === h.nodeType) return !1;
                                                f = m = "only" === e && !f && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (f = [a ? g.firstChild : g.lastChild], a && v) {
                                            for (b = (p = (c = (u = (d = (h = g)[F] || (h[F] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === B && c[1]) && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop();)
                                                if (1 === h.nodeType && ++b && h === t) { u[e] = [B, p, b]; break }
                                        } else if (v && (b = p = (c = (u = (d = (h = t)[F] || (h[F] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === B && c[1]), !1 === b)
                                            for (;
                                                (h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((s ? h.nodeName.toLowerCase() !== y : 1 !== h.nodeType) || !++b || (v && ((u = (d = h[F] || (h[F] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [B, b]), h !== t)););
                                        return (b -= r) === i || b % i == 0 && b / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, n) { var r, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return o[F] ? o(n) : o.length > 1 ? (r = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) { for (var i, r = o(e, n), a = r.length; a--;) e[i = ee(e, r[a])] = !(t[i] = r[a]) }) : function(e) { return o(e, 0, r) }) : o }
                        },
                        pseudos: {
                            not: i(function(e) {
                                var t = [],
                                    n = [],
                                    r = E(e.replace(se, "$1"));
                                return r[F] ? i(function(e, t, n, i) { for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() }
                            }),
                            has: i(function(e) { return function(n) { return t(e, n).length > 0 } }),
                            contains: i(function(e) {
                                return e = e.replace(ke, we),
                                    function(t) { return (t.textContent || t.innerText || S(t)).indexOf(e) > -1 }
                            }),
                            lang: i(function(e) {
                                return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ke, we).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do { if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                            root: function(e) { return e === N },
                            focus: function(e) { return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                            enabled: function(e) { return !1 === e.disabled },
                            disabled: function(e) { return !0 === e.disabled },
                            checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                            selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) { return !_.pseudos.empty(e) },
                            header: function(e) { return me.test(e.nodeName) },
                            input: function(e) { return fe.test(e.nodeName) },
                            button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                            text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                            first: c(function() { return [0] }),
                            last: c(function(e, t) { return [t - 1] }),
                            eq: c(function(e, t, n) { return [n < 0 ? n + t : n] }),
                            even: c(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                            odd: c(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                            lt: c(function(e, t, n) { for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i); return e }),
                            gt: c(function(e, t, n) { for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i); return e })
                        }
                    }).pseudos.nth = _.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) _.pseudos[k] = s(k);
                for (k in { submit: !0, reset: !0 }) _.pseudos[k] = l(k);
                return d.prototype = _.filters = _.pseudos, _.setFilters = new d, T = t.tokenize = function(e, n) { var i, r, o, a, s, l, c, u = V[e + " "]; if (u) return n ? 0 : u.slice(0); for (s = e, l = [], c = _.preFilter; s;) { for (a in i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ce.exec(s)) && (i = r.shift(), o.push({ value: i, type: r[0].replace(se, " ") }), s = s.slice(i.length)), _.filter) !(r = pe[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({ value: i, type: a, matches: r }), s = s.slice(i.length)); if (!i) break } return n ? s.length : s ? t.error(e) : V(e, l).slice(0) }, E = t.compile = function(e, t) {
                    var n, i = [],
                        r = [],
                        o = z[e + " "];
                    if (!o) {
                        for (t || (t = T(e)), n = t.length; n--;)(o = v(t[n]))[F] ? i.push(o) : r.push(o);
                        (o = z(e, b(r, i))).selector = e
                    }
                    return o
                }, A = t.select = function(e, t, n, i) {
                    var r, o, a, s, l, c = "function" == typeof e && e,
                        d = !i && T(e = c.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && P && _.relative[o[1].type]) {
                            if (!(t = (_.find.ID(a.matches[0].replace(ke, we), t) || [])[0])) return n;
                            c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !_.relative[s = a.type]);)
                            if ((l = _.find[s]) && (i = l(a.matches[0].replace(ke, we), ve.test(o[0].type) && u(t.parentNode) || t))) { if (o.splice(r, 1), !(e = i.length && h(o))) return X.apply(n, i), n; break }
                    }
                    return (c || E(e, d))(i, t, !P, n, !t || ve.test(e) && u(t.parentNode) || t), n
                }, w.sortStable = F.split("").sort(W).join("") === F, w.detectDuplicates = !!M, O(), w.sortDetached = r(function(e) { return 1 & e.compareDocumentPosition(I.createElement("div")) }), r(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), w.attributes && r(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), r(function(e) { return null == e.getAttribute("disabled") }) || o(te, function(e, t, n) { var i; if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), t
            }(e);
        pe.find = ve, pe.expr = ve.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ve.uniqueSort, pe.text = ve.getText, pe.isXMLDoc = ve.isXML, pe.contains = ve.contains;
        var be = function(e, t, n) {
                for (var i = [], r = n !== undefined;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && pe(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            ke = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
            we = pe.expr.match.needsContext,
            _e = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            Se = /^.[^:#\[\.,]*$/;
        pe.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t, function(e) { return 1 === e.nodeType })) }, pe.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (pe.contains(i[t], this)) return !0
                }));
                for (t = 0; t < r; t++) pe.find(e, i[t], n);
                return (n = this.pushStack(r > 1 ? pe.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) { return this.pushStack(i(this, e || [], !1)) },
            not: function(e) { return this.pushStack(i(this, e || [], !0)) },
            is: function(e) { return !!i(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length }
        });
        var Ce, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (pe.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || Ce, "string" == typeof e) {
                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Te.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), _e.test(i[1]) && pe.isPlainObject(t))
                        for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if ((r = ie.getElementById(i[2])) && r.parentNode) {
                    if (r.id !== i[2]) return Ce.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = ie, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
        }).prototype = pe.fn, Ce = pe(ie);
        var Ee = /^(?:parents|prev(?:Until|All))/,
            Ae = { children: !0, contents: !0, next: !0, prev: !0 };
        pe.fn.extend({
            has: function(e) {
                var t, n = pe(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; t < i; t++)
                        if (pe.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) { o.push(n); break }
                return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
            },
            index: function(e) { return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function(e, t) { return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t)))) },
            addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
        }), pe.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return be(e, "parentNode") }, parentsUntil: function(e, t, n) { return be(e, "parentNode", n) }, next: function(e) { return r(e, "nextSibling") }, prev: function(e) { return r(e, "previousSibling") }, nextAll: function(e) { return be(e, "nextSibling") }, prevAll: function(e) { return be(e, "previousSibling") }, nextUntil: function(e, t, n) { return be(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return be(e, "previousSibling", n) }, siblings: function(e) { return ke((e.parentNode || {}).firstChild, e) }, children: function(e) { return ke(e.firstChild) }, contents: function(e) { return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes) } }, function(e, t) { pe.fn[e] = function(n, i) { var r = pe.map(this, t, n); return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = pe.filter(i, r)), this.length > 1 && (Ae[e] || (r = pe.uniqueSort(r)), Ee.test(e) && (r = r.reverse())), this.pushStack(r) } });
        var xe, De, Me = /\S+/g;
        for (De in pe.Callbacks = function(e) {
                e = "string" == typeof e ? o(e) : pe.extend({}, e);
                var t, n, i, r, a = [],
                    s = [],
                    l = -1,
                    c = function() {
                        for (r = e.once, i = t = !0; s.length; l = -1)
                            for (n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
                        e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
                    },
                    u = {
                        add: function() { return a && (n && !t && (l = a.length - 1, s.push(n)), function i(t) { pe.each(t, function(t, n) { pe.isFunction(n) ? e.unique && u.has(n) || a.push(n) : n && n.length && "string" !== pe.type(n) && i(n) }) }(arguments), n && !t && c()), this },
                        remove: function() {
                            return pe.each(arguments, function(e, t) {
                                for (var n;
                                    (n = pe.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                            }), this
                        },
                        has: function(e) { return e ? pe.inArray(e, a) > -1 : a.length > 0 },
                        empty: function() { return a && (a = []), this },
                        disable: function() { return r = s = [], a = n = "", this },
                        disabled: function() { return !a },
                        lock: function() { return r = !0, n || u.disable(), this },
                        locked: function() { return !!r },
                        fireWith: function(e, n) { return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || c()), this },
                        fire: function() { return u.fireWith(this, arguments), this },
                        fired: function() { return !!i }
                    };
                return u
            }, pe.extend({
                Deferred: function(e) {
                    var t = [
                            ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", pe.Callbacks("memory")]
                        ],
                        n = "pending",
                        i = {
                            state: function() { return n },
                            always: function() { return r.done(arguments).fail(arguments), this },
                            then: function() {
                                var e = arguments;
                                return pe.Deferred(function(n) {
                                    pe.each(t, function(t, o) {
                                        var a = pe.isFunction(e[t]) && e[t];
                                        r[o[1]](function() {
                                            var e = a && a.apply(this, arguments);
                                            e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function(e) { return null != e ? pe.extend(e, i) : i }
                        },
                        r = {};
                    return i.pipe = i.then, pe.each(t, function(e, o) {
                        var a = o[2],
                            s = o[3];
                        i[o[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() { return r[o[0] + "With"](this === r ? i : this, arguments), this }, r[o[0] + "With"] = a.fireWith
                    }), i.promise(r), e && e.call(r, r), r
                },
                when: function(e) {
                    var t, n, i, r = 0,
                        o = re.call(arguments),
                        a = o.length,
                        s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0,
                        l = 1 === s ? e : pe.Deferred(),
                        c = function(e, n, i) { return function(r) { n[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i) } };
                    if (a > 1)
                        for (t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) o[r] && pe.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, t)).done(c(r, i, o)).fail(l.reject) : --s;
                    return s || l.resolveWith(i, o), l.promise()
                }
            }), pe.fn.ready = function(e) { return pe.ready.promise().done(e), this }, pe.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) { e ? pe.readyWait++ : pe.ready(!0) },
                ready: function(e) {
                    (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || (xe.resolveWith(ie, [pe]), pe.fn.triggerHandler && (pe(ie).triggerHandler("ready"), pe(ie).off("ready"))))
                }
            }), pe.ready.promise = function(t) {
                if (!xe)
                    if (xe = pe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(pe.ready);
                    else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
                else {
                    ie.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                    var n = !1;
                    try { n = null == e.frameElement && ie.documentElement } catch (i) {}
                    n && n.doScroll && function t() {
                        if (!pe.isReady) {
                            try { n.doScroll("left") } catch (i) { return e.setTimeout(t, 50) }
                            a(), pe.ready()
                        }
                    }()
                }
                return xe.promise(t)
            }, pe.ready.promise(), pe(de)) break;
        de.ownFirst = "0" === De, de.inlineBlockNeedsLayout = !1, pe(function() {
                var e, t, n, i;
                (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"), (i = ie.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = ie.createElement("div");
                de.deleteExpando = !0;
                try { delete e.test } catch (t) { de.deleteExpando = !1 }
                e = null
            }();
        var Oe, Ie = function(e) {
                var t = pe.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
            },
            Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Pe = /([A-Z])/g;
        pe.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) { return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !c(e) }, data: function(e, t, n) { return u(e, t, n) }, removeData: function(e, t) { return d(e, t) }, _data: function(e, t, n) { return u(e, t, n, !0) }, _removeData: function(e, t) { return d(e, t, !0) } }), pe.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (e === undefined) {
                    if (this.length && (r = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && l(o, i = pe.camelCase(i.slice(5)), r[i]);
                        pe._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() { pe.data(this, e) }) : arguments.length > 1 ? this.each(function() { pe.data(this, e, t) }) : o ? l(o, e, pe.data(o, e)) : undefined
            },
            removeData: function(e) { return this.each(function() { pe.removeData(this, e) }) }
        }), pe.extend({
            queue: function(e, t, n) { var i; if (e) return t = (t || "fx") + "queue", i = pe._data(e, t), n && (!i || pe.isArray(n) ? i = pe._data(e, t, pe.makeArray(n)) : i.push(n)), i || [] },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = pe.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = pe._queueHooks(e, t),
                    a = function() { pe.dequeue(e, t) };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) { var n = t + "queueHooks"; return pe._data(e, n) || pe._data(e, n, { empty: pe.Callbacks("once memory").add(function() { pe._removeData(e, t + "queue"), pe._removeData(e, n) }) }) }
        }), pe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : t === undefined ? this : this.each(function() {
                    var n = pe.queue(this, e, t);
                    pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
                })
            },
            dequeue: function(e) { return this.each(function() { pe.dequeue(this, e) }) },
            clearQueue: function(e) { return this.queue(e || "fx", []) },
            promise: function(e, t) {
                var n, i = 1,
                    r = pe.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {--i || r.resolveWith(o, [o]) };
                for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;)(n = pe._data(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        }), de.shrinkWrapBlocks = function() { return null != Oe ? Oe : (Oe = !1, (t = ie.getElementsByTagName("body")[0]) && t.style ? (e = ie.createElement("div"), (n = ie.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ie.createElement("div")).style.width = "5px", Oe = 3 !== e.offsetWidth), t.removeChild(n), Oe) : void 0); var e, t, n };
        var je, Le, $e, Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Fe = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
            He = ["Top", "Right", "Bottom", "Left"],
            Be = function(e, t) { return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e) },
            qe = function(e, t, n, i, r, o, a) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === pe.type(n))
                    for (s in r = !0, n) qe(e, t, s, n[s], !0, o, a);
                else if (i !== undefined && (r = !0, pe.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) { return c.call(pe(e), n) })), t))
                    for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
            },
            Ue = /^(?:checkbox|radio)$/i,
            Ve = /<([\w:-]+)/,
            ze = /^$|\/(?:java|ecma)script/i,
            We = /^\s+/,
            Je = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        je = ie.createElement("div"), Le = ie.createDocumentFragment(), $e = ie.createElement("input"), je.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === je.firstChild.nodeType, de.tbody = !je.getElementsByTagName("tbody").length, de.htmlSerialize = !!je.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, $e.type = "checkbox", $e.checked = !0, Le.appendChild($e), de.appendChecked = $e.checked, je.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!je.cloneNode(!0).lastChild.defaultValue, Le.appendChild(je), ($e = ie.createElement("input")).setAttribute("type", "radio"), $e.setAttribute("checked", "checked"), $e.setAttribute("name", "t"), je.appendChild($e), de.checkClone = je.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!je.addEventListener, je[pe.expando] = 1, de.attributes = !je.getAttribute(pe.expando);
        var Ge = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
        Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
        var Ke = /<|&#?\w+;/,
            Qe = /<tbody/i;
        ! function() {
            var t, n, i = ie.createElement("div");
            for (t in { submit: !0, change: !0, focusin: !0 }) n = "on" + t, (de[t] = n in e) || (i.setAttribute(n, "t"), de[t] = !1 === i.attributes[n].expando);
            i = null
        }();
        var Ye = /^(?:input|select|textarea)$/i,
            Xe = /^key/,
            Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            et = /^(?:focusinfocus|focusoutblur)$/,
            tt = /^([^.]*)(?:\.(.+)|)/;
        pe.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, h, p, f, m, g = pe._data(e);
                if (g) {
                    for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = pe.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || ((u = g.handle = function(e) { return void 0 === pe || e && pe.event.triggered === e.type ? undefined : pe.event.dispatch.apply(u.elem, arguments) }).elem = e), s = (t = (t || "").match(Me) || [""]).length; s--;) p = m = (o = tt.exec(t[s]) || [])[1], f = (o[2] || "").split(".").sort(), p && (c = pe.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = pe.event.special[p] || {}, d = pe.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && pe.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, l), (h = a[p]) || ((h = a[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, f, u) || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), pe.event.global[p] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, h, p, f, m, g = pe.hasData(e) && pe._data(e);
                if (g && (u = g.events)) {
                    for (c = (t = (t || "").match(Me) || [""]).length; c--;)
                        if (p = m = (s = tt.exec(t[c]) || [])[1], f = (s[2] || "").split(".").sort(), p) {
                            for (d = pe.event.special[p] || {}, h = u[p = (i ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) a = h[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (h.splice(o, 1), a.selector && h.delegateCount--, d.remove && d.remove.call(e, a));
                            l && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || pe.removeEvent(e, p, g.handle), delete u[p])
                        } else
                            for (p in u) pe.event.remove(e, p + t[c], n, i, !0);
                    pe.isEmptyObject(u) && (delete g.handle, pe._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, r) {
                var o, a, s, l, c, u, d, h = [i || ie],
                    p = ue.call(t, "type") ? t.type : t,
                    f = ue.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = u = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !et.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (p = (f = p.split(".")).shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, (t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), c = pe.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(i, n))) {
                    if (!r && !c.noBubble && !pe.isWindow(i)) {
                        for (l = c.delegateType || p, et.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), u = s;
                        u === (i.ownerDocument || ie) && h.push(u.defaultView || u.parentWindow || e)
                    }
                    for (d = 0;
                        (s = h[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || p, (o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle")) && o.apply(s, n), (o = a && s[a]) && o.apply && Ie(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
                    if (t.type = p, !r && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(h.pop(), n)) && Ie(i) && a && i[p] && !pe.isWindow(i)) {
                        (u = i[a]) && (i[a] = null), pe.event.triggered = p;
                        try { i[p]() } catch (m) {}
                        pe.event.triggered = undefined, u && (i[a] = u)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = pe.event.fix(e);
                var t, n, i, r, o, a = [],
                    s = re.call(arguments),
                    l = (pe._data(this, "events") || {})[e.type] || [],
                    c = pe.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                    for (a = pe.event.handlers.call(this, e, l), t = 0;
                        (r = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, (i = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (i = [], n = 0; n < s; n++) i[r = (o = t[n]).selector + " "] === undefined && (i[r] = o.needsContext ? pe(r, this).index(l) > -1 : pe.find(r, this, null, [l]).length), i[r] && i.push(o);
                            i.length && a.push({ elem: l, handlers: i })
                        }
                return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a
            },
            fix: function(e) {
                if (e[pe.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = Ze.test(r) ? this.mouseHooks : Xe.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
                return e.target || (e.target = o.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || ie).documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== k() && this.focus) try { return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() { if (this === k() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1 }, _default: function(e) { return pe.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result) } } },
            simulate: function(e, t, n) {
                var i = pe.extend(new pe.Event, n, { type: e, isSimulated: !0 });
                pe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }, pe.removeEvent = ie.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
        }, pe.Event = function(e, t) {
            if (!(this instanceof pe.Event)) return new pe.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? v : b) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), this[pe.expando] = !0
        }, pe.Event.prototype = {
            constructor: pe.Event,
            isDefaultPrevented: b,
            isPropagationStopped: b,
            isImmediatePropagationStopped: b,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = v, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = v, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = v, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, pe.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
            pe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return r && (r === i || pe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), de.submit || (pe.event.special.submit = {
            setup: function() {
                if (pe.nodeName(this, "form")) return !1;
                pe.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : undefined;
                    n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) { e._submitBubble = !0 }), pe._data(n, "submit", !0))
                })
            },
            postDispatch: function(e) { e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e)) },
            teardown: function() {
                if (pe.nodeName(this, "form")) return !1;
                pe.event.remove(this, "._submit")
            }
        }), de.change || (pe.event.special.change = {
            setup: function() {
                if (Ye.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._justChanged = !0) }), pe.event.add(this, "click._change", function(e) { this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e) })), !1;
                pe.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Ye.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e) }), pe._data(t, "change", !0))
                })
            },
            handle: function(e) { var t = e.target; if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments) },
            teardown: function() { return pe.event.remove(this, "._change"), !Ye.test(this.nodeName) }
        }), de.focusin || pe.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            var n = function(e) { pe.event.simulate(t, e.target, pe.event.fix(e)) };
            pe.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = pe._data(i, t);
                    r || i.addEventListener(e, n, !0), pe._data(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = pe._data(i, t) - 1;
                    r ? pe._data(i, t, r) : (i.removeEventListener(e, n, !0), pe._removeData(i, t))
                }
            }
        }), pe.fn.extend({ on: function(e, t, n, i) { return w(this, e, t, n, i) }, one: function(e, t, n, i) { return w(this, e, t, n, i, 1) }, off: function(e, t, n) { var i, r; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (r in e) this.off(r, t, e[r]); return this } return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = b), this.each(function() { pe.event.remove(this, e, n, t) }) }, trigger: function(e, t) { return this.each(function() { pe.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return pe.event.trigger(e, t, n, !0) } });
        var nt = / jQuery\d+="(?:null|\d+)"/g,
            it = new RegExp("<(?:" + Je + ")[\\s/>]", "i"),
            rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ot = /<script|<style|<link/i,
            at = /checked\s*(?:[^=]|=\s*.checked.)/i,
            st = /^true\/(.*)/,
            lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ct = p(ie).appendChild(ie.createElement("div"));
        pe.extend({
            htmlPrefilter: function(e) { return e.replace(rt, "<$1></$2>") },
            clone: function(e, t, n) {
                var i, r, o, a, s, l = pe.contains(e.ownerDocument, e);
                if (de.html5Clone || pe.isXMLDoc(e) || !it.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ct.innerHTML = e.outerHTML, ct.removeChild(o = ct.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                    for (i = f(o), s = f(e), a = 0; null != (r = s[a]); ++a) i[a] && E(r, i[a]);
                if (t)
                    if (n)
                        for (s = s || f(e), i = i || f(o), a = 0; null != (r = s[a]); a++) T(r, i[a]);
                    else T(e, o);
                return (i = f(o, "script")).length > 0 && m(i, !l && f(e, "script")), i = s = r = null, o
            },
            cleanData: function(e, t) {
                for (var n, i, r, o, a = 0, s = pe.expando, l = pe.cache, c = de.attributes, u = pe.event.special; null != (n = e[a]); a++)
                    if ((t || Ie(n)) && (o = (r = n[s]) && l[r])) {
                        if (o.events)
                            for (i in o.events) u[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, o.handle);
                        l[r] && (delete l[r], c || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), ne.push(r))
                    }
            }
        }), pe.fn.extend({
            domManip: A,
            detach: function(e) { return x(this, e, !0) },
            remove: function(e) { return x(this, e) },
            text: function(e) { return qe(this, function(e) { return e === undefined ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e)) }, null, e, arguments.length) },
            append: function() { return A(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _(this, e).appendChild(e) }) },
            prepend: function() {
                return A(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = _(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() { return A(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
            after: function() { return A(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && pe.cleanData(f(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && pe.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return pe.clone(this, e, t) }) },
            html: function(e) {
                return qe(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(nt, "") : undefined;
                    if ("string" == typeof e && !ot.test(e) && (de.htmlSerialize || !it.test(e)) && (de.leadingWhitespace || !We.test(e)) && !Ge[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = pe.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (pe.cleanData(f(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return A(this, arguments, function(t) {
                    var n = this.parentNode;
                    pe.inArray(this, e) < 0 && (pe.cleanData(f(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), pe.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { pe.fn[e] = function(e) { for (var n, i = 0, r = [], o = pe(e), a = o.length - 1; i <= a; i++) n = i === a ? this : this.clone(!0), pe(o[i])[t](n), ae.apply(r, n.get()); return this.pushStack(r) } });
        var ut, dt = { HTML: "block", BODY: "block" },
            ht = /^margin/,
            pt = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"),
            ft = function(e, t, n, i) { var r, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in r = n.apply(e, i || []), t) e.style[o] = a[o]; return r },
            mt = ie.documentElement;
        ! function() {
            function t() {
                var t, u, d = ie.documentElement;
                d.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = s = !1, i = a = !0, e.getComputedStyle && (u = e.getComputedStyle(c), n = "1%" !== (u || {}).top, s = "2px" === (u || {}).marginLeft, r = "4px" === (u || { width: "4px" }).width, c.style.marginRight = "50%", i = "4px" === (u || { marginRight: "4px" }).marginRight, (t = c.appendChild(ie.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", c.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), c.removeChild(t)), c.style.display = "none", (o = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", (t = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), d.removeChild(l)
            }
            var n, i, r, o, a, s, l = ie.createElement("div"),
                c = ie.createElement("div");
            c.style && (c.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === c.style.opacity, de.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === c.style.backgroundClip, (l = ie.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), de.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, pe.extend(de, { reliableHiddenOffsets: function() { return null == n && t(), o }, boxSizingReliable: function() { return null == n && t(), r }, pixelMarginRight: function() { return null == n && t(), i }, pixelPosition: function() { return null == n && t(), n }, reliableMarginRight: function() { return null == n && t(), a }, reliableMarginLeft: function() { return null == n && t(), s } }))
        }();
        var gt, yt, vt = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (gt = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) }, yt = function(e, t, n) { var i, r, o, a, s = e.style; return "" !== (a = (n = n || gt(e)) ? n.getPropertyValue(t) || n[t] : undefined) && a !== undefined || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), n && !de.pixelMarginRight() && pt.test(a) && ht.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), a === undefined ? a : a + "" }) : mt.currentStyle && (gt = function(e) { return e.currentStyle }, yt = function(e, t, n) { var i, r, o, a, s = e.style; return null == (a = (n = n || gt(e)) ? n[t] : undefined) && s && s[t] && (a = s[t]), pt.test(a) && !vt.test(t) && (i = s.left, (o = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), a === undefined ? a : a + "" || "auto" });
        var bt = /alpha\([^)]*\)/i,
            kt = /opacity\s*=\s*([^)]*)/i,
            wt = /^(none|table(?!-c[ea]).+)/,
            _t = new RegExp("^(" + Re + ")(.*)$", "i"),
            St = { position: "absolute", visibility: "hidden", display: "block" },
            Ct = { letterSpacing: "0", fontWeight: "400" },
            Tt = ["Webkit", "O", "Moz", "ms"],
            Et = ie.createElement("div").style;
        pe.extend({
            cssHooks: { opacity: { get: function(e, t) { if (t) { var n = yt(e, "opacity"); return "" === n ? "1" : n } } } },
            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { float: de.cssFloat ? "cssFloat" : "styleFloat" },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = pe.camelCase(t),
                        l = e.style;
                    if (t = pe.cssProps[s] || (pe.cssProps[s] = I(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], n === undefined) return a && "get" in a && (r = a.get(e, !1, i)) !== undefined ? r : l[t];
                    if ("string" === (o = typeof n) && (r = Fe.exec(n)) && r[1] && (n = h(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (pe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && (n = a.set(e, n, i)) === undefined))) try { l[t] = n } catch (c) {}
                }
            },
            css: function(e, t, n, i) { var r, o, a, s = pe.camelCase(t); return t = pe.cssProps[s] || (pe.cssProps[s] = I(s) || s), (a = pe.cssHooks[t] || pe.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), o === undefined && (o = yt(e, t, i)), "normal" === o && t in Ct && (o = Ct[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o }
        }), pe.each(["height", "width"], function(e, t) { pe.cssHooks[t] = { get: function(e, n, i) { if (n) return wt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? ft(e, St, function() { return L(e, t, i) }) : L(e, t, i) }, set: function(e, n, i) { var r = i && gt(e); return P(e, n, i ? j(e, t, i, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, r), r) : 0) } } }), de.opacity || (pe.cssHooks.opacity = {
            get: function(e, t) { return kt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(bt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = bt.test(o) ? o.replace(bt, r) : o + " " + r)
            }
        }), pe.cssHooks.marginRight = O(de.reliableMarginRight, function(e, t) { if (t) return ft(e, { display: "inline-block" }, yt, [e, "marginRight"]) }), pe.cssHooks.marginLeft = O(de.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(yt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ft(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left }) : 0)) + "px" }), pe.each({ margin: "", padding: "", border: "Width" }, function(e, t) { pe.cssHooks[e + t] = { expand: function(n) { for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + He[i] + t] = o[i] || o[i - 2] || o[0]; return r } }, ht.test(e) || (pe.cssHooks[e + t].set = P) }), pe.fn.extend({
            css: function(e, t) {
                return qe(this, function(e, t, n) {
                    var i, r, o = {},
                        a = 0;
                    if (pe.isArray(t)) { for (i = gt(e), r = t.length; a < r; a++) o[t[a]] = pe.css(e, t[a], !1, i); return o }
                    return n !== undefined ? pe.style(e, t, n) : pe.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() { return N(this, !0) },
            hide: function() { return N(this) },
            toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Be(this) ? pe(this).show() : pe(this).hide() }) }
        }), pe.Tween = $, $.prototype = { constructor: $, init: function(e, t, n, i, r, o) { this.elem = e, this.prop = n, this.easing = r || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (pe.cssNumber[n] ? "" : "px") }, cur: function() { var e = $.propHooks[this.prop]; return e && e.get ? e.get(this) : $.propHooks._default.get(this) }, run: function(e) { var t, n = $.propHooks[this.prop]; return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this } }, $.prototype.init.prototype = $.prototype, $.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit) } } }, $.propHooks.scrollTop = $.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, pe.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, pe.fx = $.prototype.init, pe.fx.step = {};
        var At, xt, Dt = /^(?:toggle|show|hide)$/,
            Mt = /queueHooks$/;
        pe.Animation = pe.extend(U, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return h(n.elem, e, Fe.exec(t), n), n }] }, tweener: function(e, t) { pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Me); for (var n, i = 0, r = e.length; i < r; i++) n = e[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t) }, prefilters: [B], prefilter: function(e, t) { t ? U.prefilters.unshift(e) : U.prefilters.push(e) } }), pe.speed = function(e, t, n) { var i = e && "object" == typeof e ? pe.extend({}, e) : { complete: n || !n && t || pe.isFunction(e) && e, duration: e, easing: n && t || t && !pe.isFunction(t) && t }; return i.duration = pe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in pe.fx.speeds ? pe.fx.speeds[i.duration] : pe.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue) }, i }, pe.fn.extend({
                fadeTo: function(e, t, n, i) { return this.filter(Be).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) },
                animate: function(e, t, n, i) {
                    var r = pe.isEmptyObject(e),
                        o = pe.speed(t, n, i),
                        a = function() {
                            var t = U(this, pe.extend({}, e), o);
                            (r || pe._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = pe.timers,
                            a = pe._data(this);
                        if (r) a[r] && a[r].stop && i(a[r]);
                        else
                            for (r in a) a[r] && a[r].stop && Mt.test(r) && i(a[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        !t && n || pe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = pe._data(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = pe.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, pe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), pe.each(["toggle", "show", "hide"], function(e, t) {
                var n = pe.fn[t];
                pe.fn[t] = function(e, i, r) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, r) }
            }), pe.each({ slideDown: F("show"), slideUp: F("hide"), slideToggle: F("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { pe.fn[e] = function(e, n, i) { return this.animate(t, e, n, i) } }), pe.timers = [], pe.fx.tick = function() {
                var e, t = pe.timers,
                    n = 0;
                for (At = pe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || pe.fx.stop(), At = undefined
            }, pe.fx.timer = function(e) { pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop() }, pe.fx.interval = 13, pe.fx.start = function() { xt || (xt = e.setInterval(pe.fx.tick, pe.fx.interval)) }, pe.fx.stop = function() { e.clearInterval(xt), xt = null }, pe.fx.speeds = { slow: 600, fast: 200, _default: 400 }, pe.fn.delay = function(t, n) {
                return t = pe.fx && pe.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
                    var r = e.setTimeout(n, t);
                    i.stop = function() { e.clearTimeout(r) }
                })
            },
            function() {
                var e, t = ie.createElement("input"),
                    n = ie.createElement("div"),
                    i = ie.createElement("select"),
                    r = i.appendChild(ie.createElement("option"));
                (n = ie.createElement("div")).setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), (e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = r.selected, de.enctype = !!ie.createElement("form").enctype, i.disabled = !0, de.optDisabled = !r.disabled, (t = ie.createElement("input")).setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
            }();
        var Ot = /\r/g,
            It = /[\x20\t\r\n\f]+/g;
        pe.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0];
                return arguments.length ? (i = pe.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (null == (r = i ? e.call(this, n, pe(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : pe.isArray(r) && (r = pe.map(r, function(e) { return null == e ? "" : e + "" })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, r, "value") !== undefined || (this.value = r))
                })) : r ? (t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && (n = t.get(r, "value")) !== undefined ? n : "string" == typeof(n = r.value) ? n.replace(Ot, "") : null == n ? "" : n : void 0
            }
        }), pe.extend({
            valHooks: {
                option: { get: function(e) { var t = pe.find.attr(e, "value"); return null != t ? t : pe.trim(pe.text(e)).replace(It, " ") } },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                            if (((n = i[l]).selected || l === r) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = pe(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = pe.makeArray(t), a = r.length; a--;)
                            if (i = r[a], pe.inArray(pe.valHooks.option.get(i), o) > -1) try { i.selected = n = !0 } catch (s) { i.scrollHeight } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), pe.each(["radio", "checkbox"], function() { pe.valHooks[this] = { set: function(e, t) { if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1 } }, de.checkOn || (pe.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) });
        var Nt, Pt, jt = pe.expr.attrHandle,
            Lt = /^(?:checked|selected)$/i,
            $t = de.getSetAttribute,
            Rt = de.input;
        pe.fn.extend({ attr: function(e, t) { return qe(this, pe.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { pe.removeAttr(this, e) }) } }), pe.extend({
            attr: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), r = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Pt : Nt)), n !== undefined ? null === n ? void pe.removeAttr(e, t) : r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = pe.find.attr(e, t)) ? undefined : i) },
            attrHooks: { type: { set: function(e, t) { if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(Me);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Rt && $t || !Lt.test(n) ? e[i] = !1 : e[pe.camelCase("default-" + n)] = e[i] = !1 : pe.attr(e, n, ""), e.removeAttribute($t ? n : i)
            }
        }), Pt = { set: function(e, t, n) { return !1 === t ? pe.removeAttr(e, n) : Rt && $t || !Lt.test(n) ? e.setAttribute(!$t && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n } }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = jt[t] || pe.find.attr;
            Rt && $t || !Lt.test(t) ? jt[t] = function(e, t, i) { var r, o; return i || (o = jt[t], jt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, jt[t] = o), r } : jt[t] = function(e, t, n) { if (!n) return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null }
        }), Rt && $t || (pe.attrHooks.value = {
            set: function(e, t, n) {
                if (!pe.nodeName(e, "input")) return Nt && Nt.set(e, t, n);
                e.defaultValue = t
            }
        }), $t || (Nt = { set: function(e, t, n) { var i = e.getAttributeNode(n); if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t } }, jt.id = jt.name = jt.coords = function(e, t, n) { var i; if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null }, pe.valHooks.button = { get: function(e, t) { var n = e.getAttributeNode(t); if (n && n.specified) return n.value }, set: Nt.set }, pe.attrHooks.contenteditable = { set: function(e, t, n) { Nt.set(e, "" !== t && t, n) } }, pe.each(["width", "height"], function(e, t) { pe.attrHooks[t] = { set: function(e, n) { if ("" === n) return e.setAttribute(t, "auto"), n } } })), de.style || (pe.attrHooks.style = { get: function(e) { return e.style.cssText || undefined }, set: function(e, t) { return e.style.cssText = t + "" } });
        var Ft = /^(?:input|select|textarea|button|object)$/i,
            Ht = /^(?:a|area)$/i;
        pe.fn.extend({ prop: function(e, t) { return qe(this, pe.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return e = pe.propFix[e] || e, this.each(function() { try { this[e] = undefined, delete this[e] } catch (t) {} }) } }), pe.extend({ prop: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, r = pe.propHooks[t]), n !== undefined ? r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = pe.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Ft.test(e.nodeName) || Ht.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), de.hrefNormalized || pe.each(["href", "src"], function(e, t) { pe.propHooks[t] = { get: function(e) { return e.getAttribute(t, 4) } } }), de.optSelected || (pe.propHooks.selected = {
            get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { pe.propFix[this.toLowerCase()] = this }), de.enctype || (pe.propFix.enctype = "encoding");
        var Bt = /[\t\r\n\f]/g;
        pe.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, a, s, l = 0;
                if (pe.isFunction(e)) return this.each(function(t) { pe(this).addClass(e.call(this, t, V(this))) });
                if ("string" == typeof e && e)
                    for (t = e.match(Me) || []; n = this[l++];)
                        if (r = V(n), i = 1 === n.nodeType && (" " + r + " ").replace(Bt, " ")) {
                            for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (s = pe.trim(i)) && pe.attr(n, "class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, a, s, l = 0;
                if (pe.isFunction(e)) return this.each(function(t) { pe(this).removeClass(e.call(this, t, V(this))) });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(Me) || []; n = this[l++];)
                        if (r = V(n), i = 1 === n.nodeType && (" " + r + " ").replace(Bt, " ")) {
                            for (a = 0; o = t[a++];)
                                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            r !== (s = pe.trim(i)) && pe.attr(n, "class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) { pe(this).toggleClass(e.call(this, n, V(this), t), t) }) : this.each(function() {
                    var t, i, r, o;
                    if ("string" === n)
                        for (i = 0, r = pe(this), o = e.match(Me) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else e !== undefined && "boolean" !== n || ((t = V(this)) && pe._data(this, "__className__", t), pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + V(n) + " ").replace(Bt, " ").indexOf(t) > -1) return !0;
                return !1
            }
        }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { pe.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), pe.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } });
        var qt = e.location,
            Ut = pe.now(),
            Vt = /\?/,
            zt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        pe.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                r = pe.trim(t + "");
            return r && !pe.trim(r.replace(zt, function(e, t, r, o) { return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "") })) ? Function("return " + r)() : pe.error("Invalid JSON: " + t)
        }, pe.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try { e.DOMParser ? n = (new e.DOMParser).parseFromString(t, "text/xml") : ((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(t)) } catch (i) { n = undefined }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
        };
        var Wt = /#.*$/,
            Jt = /([?&])_=[^&]*/,
            Gt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Qt = /^(?:GET|HEAD)$/,
            Yt = /^\/\//,
            Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Zt = {},
            en = {},
            tn = "*/".concat("*"),
            nn = qt.href,
            rn = Xt.exec(nn.toLowerCase()) || [];
        pe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: nn, type: "GET", isLocal: Kt.test(rn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": tn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": pe.parseJSON, "text xml": pe.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(e, t) { return t ? J(J(e, pe.ajaxSettings), t) : J(pe.ajaxSettings, e) },
            ajaxPrefilter: z(Zt),
            ajaxTransport: z(en),
            ajax: function(t, n) {
                function i(t, n, i, r) {
                    var o, d, v, b, w, S = n;
                    2 !== k && (k = 2, l && e.clearTimeout(l), u = undefined, s = r || "", _.readyState = t > 0 ? 4 : 0, o = t >= 200 && t < 300 || 304 === t, i && (b = G(h, _, i)), b = K(h, b, _, o), o ? (h.ifModified && ((w = _.getResponseHeader("Last-Modified")) && (pe.lastModified[a] = w), (w = _.getResponseHeader("etag")) && (pe.etag[a] = w)), 204 === t || "HEAD" === h.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = b.state, d = b.data, o = !(v = b.error))) : (v = S, !t && S || (S = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (n || S) + "", o ? m.resolveWith(p, [d, S, _]) : m.rejectWith(p, [_, S, v]), _.statusCode(y), y = undefined, c && f.trigger(o ? "ajaxSuccess" : "ajaxError", [_, h, o ? d : v]), g.fireWith(p, [_, S]), c && (f.trigger("ajaxComplete", [_, h]), --pe.active || pe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = undefined), n = n || {};
                var r, o, a, s, l, c, u, d, h = pe.ajaxSetup({}, n),
                    p = h.context || h,
                    f = h.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
                    m = pe.Deferred(),
                    g = pe.Callbacks("once memory"),
                    y = h.statusCode || {},
                    v = {},
                    b = {},
                    k = 0,
                    w = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === k) {
                                if (!d)
                                    for (d = {}; t = Gt.exec(s);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() { return 2 === k ? s : null },
                        setRequestHeader: function(e, t) { var n = e.toLowerCase(); return k || (e = b[n] = b[n] || e, v[e] = t), this },
                        overrideMimeType: function(e) { return k || (h.mimeType = e), this },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (k < 2)
                                    for (t in e) y[t] = [y[t], e[t]];
                                else _.always(e[_.status]);
                            return this
                        },
                        abort: function(e) { var t = e || w; return u && u.abort(t), i(0, t), this }
                    };
                if (m.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, h.url = ((t || h.url || nn) + "").replace(Wt, "").replace(Yt, rn[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = pe.trim(h.dataType || "*").toLowerCase().match(Me) || [""], null == h.crossDomain && (r = Xt.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === rn[1] && r[2] === rn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (rn[3] || ("http:" === rn[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = pe.param(h.data, h.traditional)), W(Zt, h, n, _), 2 === k) return _;
                for (o in (c = pe.event && h.global) && 0 == pe.active++ && pe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Qt.test(h.type), a = h.url, h.hasContent || (h.data && (a = h.url += (Vt.test(a) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = Jt.test(a) ? a.replace(Jt, "$1_=" + Ut++) : a + (Vt.test(a) ? "&" : "?") + "_=" + Ut++)), h.ifModified && (pe.lastModified[a] && _.setRequestHeader("If-Modified-Since", pe.lastModified[a]), pe.etag[a] && _.setRequestHeader("If-None-Match", pe.etag[a])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && _.setRequestHeader("Content-Type", h.contentType), _.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + tn + "; q=0.01" : "") : h.accepts["*"]), h.headers) _.setRequestHeader(o, h.headers[o]);
                if (h.beforeSend && (!1 === h.beforeSend.call(p, _, h) || 2 === k)) return _.abort();
                for (o in w = "abort", { success: 1, error: 1, complete: 1 }) _[o](h[o]);
                if (u = W(en, h, n, _)) {
                    if (_.readyState = 1, c && f.trigger("ajaxSend", [_, h]), 2 === k) return _;
                    h.async && h.timeout > 0 && (l = e.setTimeout(function() { _.abort("timeout") }, h.timeout));
                    try { k = 1, u.send(v, i) } catch (S) {
                        if (!(k < 2)) throw S;
                        i(-1, S)
                    }
                } else i(-1, "No Transport");
                return _
            },
            getJSON: function(e, t, n) { return pe.get(e, t, n, "json") },
            getScript: function(e, t) { return pe.get(e, undefined, t, "script") }
        }), pe.each(["get", "post"], function(e, t) { pe[t] = function(e, n, i, r) { return pe.isFunction(n) && (r = r || i, i = n, n = undefined), pe.ajax(pe.extend({ url: e, type: t, dataType: r, data: n, success: i }, pe.isPlainObject(e) && e)) } }), pe._evalUrl = function(e) { return pe.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, pe.fn.extend({
            wrapAll: function(e) {
                if (pe.isFunction(e)) return this.each(function(t) { pe(this).wrapAll(e.call(this, t)) });
                if (this[0]) {
                    var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild; return e }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return pe.isFunction(e) ? this.each(function(t) { pe(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                    var t = pe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) { var t = pe.isFunction(e); return this.each(function(n) { pe(this).wrapAll(t ? e.call(this, n) : e) }) },
            unwrap: function() { return this.parent().each(function() { pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes) }).end() }
        }), pe.expr.filters.hidden = function(e) { return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Y(e) }, pe.expr.filters.visible = function(e) { return !pe.expr.filters.hidden(e) };
        var on = /%20/g,
            an = /\[\]$/,
            sn = /\r?\n/g,
            ln = /^(?:submit|button|image|reset|file)$/i,
            cn = /^(?:input|select|textarea|keygen)/i;
        pe.param = function(e, t) {
            var n, i = [],
                r = function(e, t) { t = pe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
            if (t === undefined && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() { r(this.name, this.value) });
            else
                for (n in e) X(n, e[n], t, r);
            return i.join("&").replace(on, "+")
        }, pe.fn.extend({ serialize: function() { return pe.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = pe.prop(this, "elements"); return e ? pe.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !pe(this).is(":disabled") && cn.test(this.nodeName) && !ln.test(e) && (this.checked || !Ue.test(e)) }).map(function(e, t) { var n = pe(this).val(); return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) { return { name: t.name, value: e.replace(sn, "\r\n") } }) : { name: t.name, value: n.replace(sn, "\r\n") } }).get() } }), pe.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() { return this.isLocal ? ee() : ie.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee() } : Z;
        var un = 0,
            dn = {},
            hn = pe.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() { for (var e in dn) dn[e](undefined, !0) }), de.cors = !!hn && "withCredentials" in hn, (hn = de.ajax = !!hn) && pe.ajaxTransport(function(t) {
            var n;
            if (!t.crossDomain || de.cors) return {
                send: function(i, r) {
                    var o, a = t.xhr(),
                        s = ++un;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    for (o in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) i[o] !== undefined && a.setRequestHeader(o, i[o] + "");
                    a.send(t.hasContent && t.data || null), n = function(e, i) {
                        var o, l, c;
                        if (n && (i || 4 === a.readyState))
                            if (delete dn[s], n = undefined, a.onreadystatechange = pe.noop, i) 4 !== a.readyState && a.abort();
                            else {
                                c = {}, o = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
                                try { l = a.statusText } catch (u) { l = "" }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = c.text ? 200 : 404
                            }
                        c && r(o, l, c, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = dn[s] = n : n()
                },
                abort: function() { n && n(undefined, !0) }
            }
        }), pe.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return pe.globalEval(e), e } } }), pe.ajaxPrefilter("script", function(e) { e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), pe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = ie.head || pe("head")[0] || ie.documentElement;
                return {
                    send: function(i, r) {
                        (t = ie.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() { t && t.onload(undefined, !0) }
                }
            }
        });
        var pn = [],
            fn = /(=)\?(?=&|$)|\?\?/;
        pe.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = pn.pop() || pe.expando + "_" + Ut++; return this[e] = !0, e } }), pe.ajaxPrefilter("json jsonp", function(t, n, i) { var r, o, a, s = !1 !== t.jsonp && (fn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && fn.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(fn, "$1" + r) : !1 !== t.jsonp && (t.url += (Vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() { return a || pe.error(r + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[r], e[r] = function() { a = arguments }, i.always(function() { o === undefined ? pe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, pn.push(r)), a && pe.isFunction(o) && o(a[0]), a = o = undefined }), "script" }), pe.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ie;
            var i = _e.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = y([e], t, r), r && r.length && pe(r).remove(), pe.merge([], i.childNodes))
        };
        var mn = pe.fn.load;
        pe.fn.load = function(e, t, n) {
            if ("string" != typeof e && mn) return mn.apply(this, arguments);
            var i, r, o, a = this,
                s = e.indexOf(" ");
            return s > -1 && (i = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (r = "POST"), a.length > 0 && pe.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
        }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { pe.fn[t] = function(e) { return this.on(t, e) } }), pe.expr.filters.animated = function(e) { return pe.grep(pe.timers, function(t) { return e === t.elem }).length }, pe.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s, l, c = pe.css(e, "position"),
                    u = pe(e),
                    d = {};
                "static" === c && (e.style.position = "relative"), s = u.offset(), o = pe.css(e, "top"), l = pe.css(e, "left"), ("absolute" === c || "fixed" === c) && pe.inArray("auto", [o, l]) > -1 ? (a = (i = u.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
            }
        }, pe.fn.extend({
            offset: function(e) {
                if (arguments.length) return e === undefined ? this : this.each(function(t) { pe.offset.setOffset(this, e, t) });
                var t, n, i = { top: 0, left: 0 },
                    r = this[0],
                    o = r && r.ownerDocument;
                return o ? (t = o.documentElement, pe.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = te(o), { top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = { top: 0, left: 0 },
                        i = this[0];
                    return "fixed" === pe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - pe.css(i, "marginTop", !0), left: t.left - n.left - pe.css(i, "marginLeft", !0) }
                }
            },
            offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent; return e || mt }) }
        }), pe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
            var n = /Y/.test(t);
            pe.fn[e] = function(i) {
                return qe(this, function(e, i, r) {
                    var o = te(e);
                    if (r === undefined) return o ? t in o ? o[t] : o.document.documentElement[i] : e[i];
                    o ? o.scrollTo(n ? pe(o).scrollLeft() : r, n ? r : pe(o).scrollTop()) : e[i] = r
                }, e, i, arguments.length, null)
            }
        }), pe.each(["top", "left"], function(e, t) { pe.cssHooks[t] = O(de.pixelPosition, function(e, n) { if (n) return n = yt(e, t), pt.test(n) ? pe(e).position()[t] + "px" : n }) }), pe.each({ Height: "height", Width: "width" }, function(e, t) {
            pe.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) {
                pe.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        a = n || (!0 === i || !0 === r ? "margin" : "border");
                    return qe(this, function(t, n, i) { var r; return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : i === undefined ? pe.css(t, n, a) : pe.style(t, n, i, a) }, t, o ? i : undefined, o, null)
                }
            })
        }), pe.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), pe.fn.size = function() { return this.length }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return pe });
        var gn = e.jQuery,
            yn = e.$;
        return pe.noConflict = function(t) { return e.$ === pe && (e.$ = yn), t && e.jQuery === pe && (e.jQuery = gn), pe }, t || (e.jQuery = e.$ = pe), pe
    }),
    function(e, t) {
        "use strict";
        var n;
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var i = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function() { return e("meta[name=csrf-token]").attr("content") },
            csrfParam: function() { return e("meta[name=csrf-param]").attr("content") },
            CSRFProtection: function(e) {
                var t = n.csrfToken();
                t && e.setRequestHeader("X-CSRF-Token", t)
            },
            refreshCSRFTokens: function() { e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken()) },
            fire: function(t, n, i) { var r = e.Event(n); return t.trigger(r, i), !1 !== r.result },
            confirm: function(e) { return confirm(e) },
            ajax: function(t) { return e.ajax(t) },
            href: function(e) { return e[0].href },
            isRemote: function(e) { return e.data("remote") !== t && !1 !== e.data("remote") },
            handleRemote: function(i) {
                var r, o, a, s, l, c;
                if (n.fire(i, "ajax:before")) {
                    if (s = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                        r = i.data("ujs:submit-button-formmethod") || i.attr("method"), o = i.data("ujs:submit-button-formaction") || i.attr("action"), a = e(i[0]).serializeArray();
                        var u = i.data("ujs:submit-button");
                        u && (a.push(u), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                    } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), a = i.data("params") || null);
                    return c = {
                        type: r || "GET",
                        data: a,
                        dataType: l,
                        beforeSend: function(e, r) {
                            if (r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), !n.fire(i, "ajax:beforeSend", [e, r])) return !1;
                            i.trigger("ajax:send", e)
                        },
                        success: function(e, t, n) { i.trigger("ajax:success", [e, t, n]) },
                        complete: function(e, t) { i.trigger("ajax:complete", [e, t]) },
                        error: function(e, t, n) { i.trigger("ajax:error", [e, t, n]) },
                        crossDomain: n.isCrossDomain(o)
                    }, s && (c.xhrFields = { withCredentials: s }), o && (c.url = o), n.ajax(c)
                }
                return !1
            },
            isCrossDomain: function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try { return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host) } catch (i) { return !0 }
            },
            handleMethod: function(i) {
                var r = n.href(i),
                    o = i.data("method"),
                    a = i.attr("target"),
                    s = n.csrfToken(),
                    l = n.csrfParam(),
                    c = e('<form method="post" action="' + r + '"></form>'),
                    u = '<input name="_method" value="' + o + '" type="hidden" />';
                l === t || s === t || n.isCrossDomain(r) || (u += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(u).appendTo("body"), c.submit()
            },
            formElements: function(t, n) { return t.is("form") ? e(t[0].elements).filter(n) : t.find(n) },
            disableFormElements: function(t) { n.formElements(t, n.disableSelector).each(function() { n.disableFormElement(e(this)) }) },
            disableFormElement: function(e) {
                var n, i;
                n = e.is("button") ? "html" : "val", (i = e.data("disable-with")) !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
            },
            enableFormElements: function(t) { n.formElements(t, n.enableSelector).each(function() { n.enableFormElement(e(this)) }) },
            enableFormElement: function(e) {
                var n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
            },
            allowAction: function(e) {
                var t, i = e.data("confirm"),
                    r = !1;
                if (!i) return !0;
                if (n.fire(e, "confirm")) {
                    try { r = n.confirm(i) } catch (o) {
                        (console.error || console.log).call(console, o.stack || o)
                    }
                    t = n.fire(e, "confirm:complete", [r])
                }
                return r && t
            },
            blankInputs: function(t, n, i) {
                var r, o, a, s = e(),
                    l = n || "input,textarea",
                    c = t.find(l),
                    u = {};
                return c.each(function() {
                    (r = e(this)).is("input[type=radio]") ? (a = r.attr("name"), u[a] || (0 === t.find('input[type=radio]:checked[name="' + a + '"]').length && (o = t.find('input[type=radio][name="' + a + '"]'), s = s.add(o)), u[a] = a)) : (r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === i && (s = s.add(r))
                }), !!s.length && s
            },
            nonBlankInputs: function(e, t) { return n.blankInputs(e, t, !0) },
            stopEverything: function(t) { return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1 },
            disableElement: function(e) {
                var i = e.data("disable-with");
                i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function(e) { return n.stopEverything(e) }), e.data("ujs:disabled", !0)
            },
            enableElement: function(e) { e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled") }
        }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) { e.crossDomain || n.CSRFProtection(i) }), e(window).on("pageshow.rails", function() {
            e(e.rails.enableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableFormElement(t)
            }), e(e.rails.linkDisableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableElement(t)
            })
        }), i.on("ajax:complete", n.linkDisableSelector, function() { n.enableElement(e(this)) }), i.on("ajax:complete", n.buttonDisableSelector, function() { n.enableFormElement(e(this)) }), i.on("click.rails", n.linkClickSelector, function(t) {
            var i = e(this),
                r = i.data("method"),
                o = i.data("params"),
                a = t.metaKey || t.ctrlKey;
            if (!n.allowAction(i)) return n.stopEverything(t);
            if (!a && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) { if (a && (!r || "GET" === r) && !o) return !0; var s = n.handleRemote(i); return !1 === s ? n.enableElement(i) : s.fail(function() { n.enableElement(i) }), !1 }
            return r ? (n.handleMethod(i), !1) : void 0
        }), i.on("click.rails", n.buttonClickSelector, function(t) {
            var i = e(this);
            if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var r = n.handleRemote(i);
            return !1 === r ? n.enableFormElement(i) : r.fail(function() { n.enableFormElement(i) }), !1
        }), i.on("change.rails", n.inputChangeSelector, function(t) { var i = e(this); return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t) }), i.on("submit.rails", n.formSubmitSelector, function(i) {
            var r, o, a = e(this),
                s = n.isRemote(a);
            if (!n.allowAction(a)) return n.stopEverything(i);
            if (a.attr("novalidate") === t)
                if (a.data("ujs:formnovalidate-button") === t) { if ((r = n.blankInputs(a, n.requiredInputSelector, !1)) && n.fire(a, "ajax:aborted:required", [r])) return n.stopEverything(i) } else a.data("ujs:formnovalidate-button", t);
            if (s) { if (o = n.nonBlankInputs(a, n.fileInputSelector)) { setTimeout(function() { n.disableFormElements(a) }, 13); var l = n.fire(a, "ajax:aborted:file", [o]); return l || setTimeout(function() { n.enableFormElements(a) }, 13), l } return n.handleRemote(a), !1 }
            setTimeout(function() { n.disableFormElements(a) }, 13)
        }), i.on("click.rails", n.formInputClickSelector, function(t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            var r = i.attr("name"),
                o = r ? { name: r, value: i.val() } : null,
                a = i.closest("form");
            0 === a.length && (a = e("#" + i.attr("form"))), a.data("ujs:submit-button", o), a.data("ujs:formnovalidate-button", i.attr("formnovalidate")), a.data("ujs:submit-button-formaction", i.attr("formaction")), a.data("ujs:submit-button-formmethod", i.attr("formmethod"))
        }), i.on("ajax:send.rails", n.formSubmitSelector, function(t) { this === t.target && n.disableFormElements(e(this)) }), i.on("ajax:complete.rails", n.formSubmitSelector, function(t) { this === t.target && n.enableFormElements(e(this)) }), e(function() { n.refreshCSRFTokens() }))
    }(jQuery),
    /*
     Copyright (C) Federico Zivolo 2019
     Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
     */
    function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t() }(this, function() {
        "use strict";

        function e(e) { return e && "[object Function]" === {}.toString.call(e) }

        function t(e, t) { if (1 !== e.nodeType) return []; var n = e.ownerDocument.defaultView.getComputedStyle(e, null); return t ? n[t] : n }

        function n(e) { return "HTML" === e.nodeName ? e : e.parentNode || e.host }

        function i(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body
            }
            var r = t(e),
                o = r.overflow,
                a = r.overflowX,
                s = r.overflowY;
            return /(auto|scroll|overlay)/.test(o + s + a) ? e : i(n(e))
        }

        function r(e) { return 11 === e ? oe : 10 === e ? ae : oe || ae }

        function o(e) { if (!e) return document.documentElement; for (var n = r(10) ? document.body : null, i = e.offsetParent || null; i === n && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent; var a = i && i.nodeName; return a && "BODY" !== a && "HTML" !== a ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? o(i) : i : e ? e.ownerDocument.documentElement : document.documentElement }

        function a(e) { var t = e.nodeName; return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e) }

        function s(e) { return null === e.parentNode ? e : s(e.parentNode) }

        function l(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                i = n ? e : t,
                r = n ? t : e,
                c = document.createRange();
            c.setStart(i, 0), c.setEnd(r, 0);
            var u = c.commonAncestorContainer;
            if (e !== u && t !== u || i.contains(r)) return a(u) ? u : o(u);
            var d = s(e);
            return d.host ? l(d.host, t) : l(e, s(t).host)
        }

        function c(e) {
            var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                n = e.nodeName;
            if ("BODY" === n || "HTML" === n) { var i = e.ownerDocument.documentElement; return (e.ownerDocument.scrollingElement || i)[t] }
            return e[t]
        }

        function u(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = c(t, "top"),
                r = c(t, "left"),
                o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }

        function d(e, t) {
            var n = "x" === t ? "Left" : "Top",
                i = "Left" == n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
        }

        function h(e, t, n, i) { return Z(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], r(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0) }

        function p(e) {
            var t = e.body,
                n = e.documentElement,
                i = r(10) && getComputedStyle(n);
            return { height: h("Height", t, n, i), width: h("Width", t, n, i) }
        }

        function f(e) { return ue({}, e, { right: e.left + e.width, bottom: e.top + e.height }) }

        function m(e) {
            var n = {};
            try {
                if (r(10)) {
                    n = e.getBoundingClientRect();
                    var i = c(e, "top"),
                        o = c(e, "left");
                    n.top += i, n.left += o, n.bottom += i, n.right += o
                } else n = e.getBoundingClientRect()
            } catch (t) {}
            var a = { left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top },
                s = "HTML" === e.nodeName ? p(e.ownerDocument) : {},
                l = s.width || e.clientWidth || a.right - a.left,
                u = s.height || e.clientHeight || a.bottom - a.top,
                h = e.offsetWidth - l,
                m = e.offsetHeight - u;
            if (h || m) {
                var g = t(e);
                h -= d(g, "x"), m -= d(g, "y"), a.width -= h, a.height -= m
            }
            return f(a)
        }

        function g(e, n) {
            var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                a = r(10),
                s = "HTML" === n.nodeName,
                l = m(e),
                c = m(n),
                d = i(e),
                h = t(n),
                p = parseFloat(h.borderTopWidth, 10),
                g = parseFloat(h.borderLeftWidth, 10);
            o && s && (c.top = Z(c.top, 0), c.left = Z(c.left, 0));
            var y = f({ top: l.top - c.top - p, left: l.left - c.left - g, width: l.width, height: l.height });
            if (y.marginTop = 0, y.marginLeft = 0, !a && s) {
                var v = parseFloat(h.marginTop, 10),
                    b = parseFloat(h.marginLeft, 10);
                y.top -= p - v, y.bottom -= p - v, y.left -= g - b, y.right -= g - b, y.marginTop = v, y.marginLeft = b
            }
            return (a && !o ? n.contains(d) : n === d && "BODY" !== d.nodeName) && (y = u(y, n)), y
        }

        function y(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = g(e, n),
                r = Z(n.clientWidth, window.innerWidth || 0),
                o = Z(n.clientHeight, window.innerHeight || 0),
                a = t ? 0 : c(n),
                s = t ? 0 : c(n, "left");
            return f({ top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: r, height: o })
        }

        function v(e) { var i = e.nodeName; if ("BODY" === i || "HTML" === i) return !1; if ("fixed" === t(e, "position")) return !0; var r = n(e); return !!r && v(r) }

        function b(e) { if (!e || !e.parentElement || r()) return document.documentElement; for (var n = e.parentElement; n && "none" === t(n, "transform");) n = n.parentElement; return n || document.documentElement }

        function k(e, t, r, o) {
            var a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
                s = { top: 0, left: 0 },
                c = a ? b(e) : l(e, t);
            if ("viewport" === o) s = y(c, a);
            else {
                var u;
                "scrollParent" === o ? "BODY" === (u = i(n(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === o ? e.ownerDocument.documentElement : o;
                var d = g(u, c, a);
                if ("HTML" !== u.nodeName || v(c)) s = d;
                else {
                    var h = p(e.ownerDocument),
                        f = h.height,
                        m = h.width;
                    s.top += d.top - d.marginTop, s.bottom = f + d.top, s.left += d.left - d.marginLeft, s.right = m + d.left
                }
            }
            var k = "number" == typeof(r = r || 0);
            return s.left += k ? r : r.left || 0, s.top += k ? r : r.top || 0, s.right -= k ? r : r.right || 0, s.bottom -= k ? r : r.bottom || 0, s
        }

        function w(e) { return e.width * e.height }

        function _(e, t, n, i, r) {
            var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var a = k(n, i, o, r),
                s = { top: { width: a.width, height: t.top - a.top }, right: { width: a.right - t.right, height: a.height }, bottom: { width: a.width, height: a.bottom - t.bottom }, left: { width: t.left - a.left, height: a.height } },
                l = Object.keys(s).map(function(e) { return ue({ key: e }, s[e], { area: w(s[e]) }) }).sort(function(e, t) { return t.area - e.area }),
                c = l.filter(function(e) {
                    var t = e.width,
                        i = e.height;
                    return t >= n.clientWidth && i >= n.clientHeight
                }),
                u = 0 < c.length ? c[0].key : l[0].key,
                d = e.split("-")[1];
            return u + (d ? "-" + d : "")
        }

        function S(e, t, n) { var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return g(n, i ? b(t) : l(t, n), i) }

        function C(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
                n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
            return { width: e.offsetWidth + i, height: e.offsetHeight + n }
        }

        function T(e) { var t = { left: "right", right: "left", bottom: "top", top: "bottom" }; return e.replace(/left|right|bottom|top/g, function(e) { return t[e] }) }

        function E(e, t, n) {
            n = n.split("-")[0];
            var i = C(e),
                r = { width: i.width, height: i.height },
                o = -1 !== ["right", "left"].indexOf(n),
                a = o ? "top" : "left",
                s = o ? "left" : "top",
                l = o ? "height" : "width",
                c = o ? "width" : "height";
            return r[a] = t[a] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[c] : t[T(s)], r
        }

        function A(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] }

        function x(e, t, n) { if (Array.prototype.findIndex) return e.findIndex(function(e) { return e[t] === n }); var i = A(e, function(e) { return e[t] === n }); return e.indexOf(i) }

        function D(t, n, i) {
            return (void 0 === i ? t : t.slice(0, x(t, "name", i))).forEach(function(t) {
                t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var i = t["function"] || t.fn;
                t.enabled && e(i) && (n.offsets.popper = f(n.offsets.popper), n.offsets.reference = f(n.offsets.reference), n = i(n, t))
            }), n
        }

        function M() {
            if (!this.state.isDestroyed) {
                var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                e.offsets.reference = S(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = _(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = E(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = D(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
            }
        }

        function O(e, t) { return e.some(function(e) { var n = e.name; return e.enabled && n === t }) }

        function I(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                var r = t[i],
                    o = r ? "" + r + n : e;
                if ("undefined" != typeof document.body.style[o]) return o
            }
            return null
        }

        function N() { return this.state.isDestroyed = !0, O(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[I("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }

        function P(e) { var t = e.ownerDocument; return t ? t.defaultView : window }

        function j(e, t, n, r) {
            var o = "BODY" === e.nodeName,
                a = o ? e.ownerDocument.defaultView : e;
            a.addEventListener(t, n, { passive: !0 }), o || j(i(a.parentNode), t, n, r), r.push(a)
        }

        function L(e, t, n, r) { n.updateBound = r, P(e).addEventListener("resize", n.updateBound, { passive: !0 }); var o = i(e); return j(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n }

        function $() { this.state.eventsEnabled || (this.state = L(this.reference, this.options, this.state, this.scheduleUpdate)) }

        function R(e, t) { return P(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) { e.removeEventListener("scroll", t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t }

        function F() { this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state)) }

        function H(e) { return "" !== e && !isNaN(parseFloat(e)) && isFinite(e) }

        function B(e, t) { Object.keys(t).forEach(function(n) { var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && H(t[n]) && (i = "px"), e.style[n] = t[n] + i }) }

        function q(e, t) { Object.keys(t).forEach(function(n) {!1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n]) }) }

        function U(e, t) {
            var n = e.offsets,
                i = n.popper,
                r = n.reference,
                o = X,
                a = function(e) { return e },
                s = o(r.width),
                l = o(i.width),
                c = -1 !== ["left", "right"].indexOf(e.placement),
                u = -1 !== e.placement.indexOf("-"),
                d = t ? c || u || s % 2 == l % 2 ? o : Y : a,
                h = t ? o : a;
            return { left: d(1 == s % 2 && 1 == l % 2 && !u && t ? i.left - 1 : i.left), top: h(i.top), bottom: h(i.bottom), right: d(i.right) }
        }

        function V(e, t, n) {
            var i = A(e, function(e) { return e.name === t }),
                r = !!i && e.some(function(e) { return e.name === n && e.enabled && e.order < i.order });
            if (!r) {
                var o = "`" + t + "`";
                console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
            }
            return r
        }

        function z(e) { return "end" === e ? "start" : "start" === e ? "end" : e }

        function W(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = pe.indexOf(e),
                i = pe.slice(n + 1).concat(pe.slice(0, n));
            return t ? i.reverse() : i
        }

        function J(e, t, n, i) {
            var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                o = +r[1],
                a = r[2];
            if (!o) return e;
            if (0 === a.indexOf("%")) {
                var s;
                switch (a) {
                    case "%p":
                        s = n;
                        break;
                    case "%":
                    case "%r":
                    default:
                        s = i
                }
                return f(s)[t] / 100 * o
            }
            return "vh" === a || "vw" === a ? ("vh" === a ? Z(document.documentElement.clientHeight, window.innerHeight || 0) : Z(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
        }

        function G(e, t, n, i) {
            var r = [0, 0],
                o = -1 !== ["right", "left"].indexOf(i),
                a = e.split(/(\+|\-)/).map(function(e) { return e.trim() }),
                s = a.indexOf(A(a, function(e) { return -1 !== e.search(/,|\s/) }));
            a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                c = -1 === s ? [a] : [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))];
            return (c = c.map(function(e, i) {
                var r = (1 === i ? !o : o) ? "height" : "width",
                    a = !1;
                return e.reduce(function(e, t) { return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t) }, []).map(function(e) { return J(e, r, t, n) })
            })).forEach(function(e, t) { e.forEach(function(n, i) { H(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1)) }) }), r
        }

        function K(e, t) {
            var n, i = t.offset,
                r = e.placement,
                o = e.offsets,
                a = o.popper,
                s = o.reference,
                l = r.split("-")[0];
            return n = H(+i) ? [+i, 0] : G(i, a, s, l), "left" === l ? (a.top += n[0], a.left -= n[1]) : "right" === l ? (a.top += n[0], a.left += n[1]) : "top" === l ? (a.left += n[0], a.top -= n[1]) : "bottom" === l && (a.left += n[0], a.top += n[1]), e.popper = a, e
        }
        for (var Q = Math.min, Y = Math.floor, X = Math.round, Z = Math.max, ee = "undefined" != typeof window && "undefined" != typeof document, te = ["Edge", "Trident", "Firefox"], ne = 0, ie = 0; ie < te.length; ie += 1)
            if (ee && 0 <= navigator.userAgent.indexOf(te[ie])) { ne = 1; break }
        var re = ee && window.Promise ? function(e) { var t = !1; return function() { t || (t = !0, window.Promise.resolve().then(function() { t = !1, e() })) } } : function(e) { var t = !1; return function() { t || (t = !0, setTimeout(function() { t = !1, e() }, ne)) } },
            oe = ee && !(!window.MSInputMethodContext || !document.documentMode),
            ae = ee && /MSIE 10/.test(navigator.userAgent),
            se = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") },
            le = function() {
                function e(e, t) { for (var n, i = 0; i < t.length; i++)(n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) }
                return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
            }(),
            ce = function(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e },
            ue = Object.assign || function(e) {
                for (var t, n = 1; n < arguments.length; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            },
            de = ee && /Firefox/i.test(navigator.userAgent),
            he = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            pe = he.slice(3),
            fe = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" },
            me = function() {
                function t(n, i) {
                    var r = this,
                        o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    se(this, t), this.scheduleUpdate = function() { return requestAnimationFrame(r.update) }, this.update = re(this.update.bind(this)), this.options = ue({}, t.Defaults, o), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = n && n.jquery ? n[0] : n, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(ue({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) { r.options.modifiers[e] = ue({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) { return ue({ name: e }, r.options.modifiers[e]) }).sort(function(e, t) { return e.order - t.order }), this.modifiers.forEach(function(t) { t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state) }), this.update();
                    var a = this.options.eventsEnabled;
                    a && this.enableEventListeners(), this.state.eventsEnabled = a
                }
                return le(t, [{ key: "update", value: function() { return M.call(this) } }, { key: "destroy", value: function() { return N.call(this) } }, { key: "enableEventListeners", value: function() { return $.call(this) } }, { key: "disableEventListeners", value: function() { return F.call(this) } }]), t
            }();
        return me.Utils = ("undefined" == typeof window ? global : window).PopperUtils, me.placements = he, me.Defaults = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                o = r.reference,
                                a = r.popper,
                                s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top",
                                c = s ? "width" : "height",
                                u = { start: ce({}, l, o[l]), end: ce({}, l, o[l] + o[c] - a[c]) };
                            e.offsets.popper = ue({}, a, u[i])
                        }
                        return e
                    }
                },
                offset: { order: 200, enabled: !0, fn: K, offset: 0 },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.boundariesElement || o(e.instance.popper);
                        e.instance.reference === n && (n = o(n));
                        var i = I("transform"),
                            r = e.instance.popper.style,
                            a = r.top,
                            s = r.left,
                            l = r[i];
                        r.top = "", r.left = "", r[i] = "";
                        var c = k(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                        r.top = a, r.left = s, r[i] = l, t.boundaries = c;
                        var u = t.priority,
                            d = e.offsets.popper,
                            h = {
                                primary: function(e) { var n = d[e]; return d[e] < c[e] && !t.escapeWithReference && (n = Z(d[e], c[e])), ce({}, e, n) },
                                secondary: function(e) {
                                    var n = "right" === e ? "left" : "top",
                                        i = d[n];
                                    return d[e] > c[e] && !t.escapeWithReference && (i = Q(d[n], c[e] - ("right" === e ? d.width : d.height))), ce({}, n, i)
                                }
                            };
                        return u.forEach(function(e) {
                            var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                            d = ue({}, d, h[t](e))
                        }), e.offsets.popper = d, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            o = Y,
                            a = -1 !== ["top", "bottom"].indexOf(r),
                            s = a ? "right" : "bottom",
                            l = a ? "left" : "top",
                            c = a ? "width" : "height";
                        return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, n) {
                        var i;
                        if (!V(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var r = n.element;
                        if ("string" == typeof r) { if (!(r = e.instance.popper.querySelector(r))) return e } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var o = e.placement.split("-")[0],
                            a = e.offsets,
                            s = a.popper,
                            l = a.reference,
                            c = -1 !== ["left", "right"].indexOf(o),
                            u = c ? "height" : "width",
                            d = c ? "Top" : "Left",
                            h = d.toLowerCase(),
                            p = c ? "left" : "top",
                            m = c ? "bottom" : "right",
                            g = C(r)[u];
                        l[m] - g < s[h] && (e.offsets.popper[h] -= s[h] - (l[m] - g)), l[h] + g > s[m] && (e.offsets.popper[h] += l[h] + g - s[m]), e.offsets.popper = f(e.offsets.popper);
                        var y = l[h] + l[u] / 2 - g / 2,
                            v = t(e.instance.popper),
                            b = parseFloat(v["margin" + d], 10),
                            k = parseFloat(v["border" + d + "Width"], 10),
                            w = y - e.offsets.popper[h] - b - k;
                        return w = Z(Q(s[u] - g, w), 0), e.arrowElement = r, e.offsets.arrow = (ce(i = {}, h, X(w)), ce(i, p, ""), i), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(e, t) {
                        if (O(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = k(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            i = e.placement.split("-")[0],
                            r = T(i),
                            o = e.placement.split("-")[1] || "",
                            a = [];
                        switch (t.behavior) {
                            case fe.FLIP:
                                a = [i, r];
                                break;
                            case fe.CLOCKWISE:
                                a = W(i);
                                break;
                            case fe.COUNTERCLOCKWISE:
                                a = W(i, !0);
                                break;
                            default:
                                a = t.behavior
                        }
                        return a.forEach(function(s, l) {
                            if (i !== s || a.length === l + 1) return e;
                            i = e.placement.split("-")[0], r = T(i);
                            var c = e.offsets.popper,
                                u = e.offsets.reference,
                                d = Y,
                                h = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                                p = d(c.left) < d(n.left),
                                f = d(c.right) > d(n.right),
                                m = d(c.top) < d(n.top),
                                g = d(c.bottom) > d(n.bottom),
                                y = "left" === i && p || "right" === i && f || "top" === i && m || "bottom" === i && g,
                                v = -1 !== ["top", "bottom"].indexOf(i),
                                b = !!t.flipVariations && (v && "start" === o && p || v && "end" === o && f || !v && "start" === o && m || !v && "end" === o && g);
                            (h || y || b) && (e.flipped = !0, (h || y) && (i = a[l + 1]), b && (o = z(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = ue({}, e.offsets.popper, E(e.instance.popper, e.offsets.reference, e.placement)), e = D(e.instance.modifiers, e, "flip"))
                        }), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            o = i.reference,
                            a = -1 !== ["left", "right"].indexOf(n),
                            s = -1 === ["top", "left"].indexOf(n);
                        return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), e.placement = T(t), e.offsets.popper = f(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!V(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = A(e.instance.modifiers, function(e) { return "preventOverflow" === e.name }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            a = A(e.instance.modifiers, function(e) { return "applyStyle" === e.name }).gpuAcceleration;
                        void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s, l, c = void 0 === a ? t.gpuAcceleration : a,
                            u = o(e.instance.popper),
                            d = m(u),
                            h = { position: r.position },
                            p = U(e, 2 > window.devicePixelRatio || !de),
                            f = "bottom" === n ? "top" : "bottom",
                            g = "right" === i ? "left" : "right",
                            y = I("transform");
                        if (l = "bottom" == f ? "HTML" === u.nodeName ? -u.clientHeight + p.bottom : -d.height + p.bottom : p.top, s = "right" == g ? "HTML" === u.nodeName ? -u.clientWidth + p.right : -d.width + p.right : p.left, c && y) h[y] = "translate3d(" + s + "px, " + l + "px, 0)", h[f] = 0, h[g] = 0, h.willChange = "transform";
                        else {
                            var v = "bottom" == f ? -1 : 1,
                                b = "right" == g ? -1 : 1;
                            h[f] = l * v, h[g] = s * b, h.willChange = f + ", " + g
                        }
                        var k = { "x-placement": e.placement };
                        return e.attributes = ue({}, k, e.attributes), e.styles = ue({}, h, e.styles), e.arrowStyles = ue({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) { return B(e.instance.popper, e.styles), q(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && B(e.arrowElement, e.arrowStyles), e },
                    onLoad: function(e, t, n, i, r) {
                        var o = S(r, t, e, n.positionFixed),
                            a = _(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", a), B(t, { position: n.positionFixed ? "fixed" : "absolute" }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        }, me
    }),
    /*!
     * Bootstrap v4.4.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper) }(this, function(e, t, n) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function r(e, t, n) { return t && i(e.prototype, t), n && i(e, n), e }

        function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), n.push.apply(n, i)
            }
            return n
        }

        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach(function(t) { o(e, t, n[t]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })
            }
            return e
        }

        function l(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

        function c(e) { return {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase() }

        function u() { return { bindType: m, delegateType: m, handle: function(e) { return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : undefined } } }

        function d(e) {
            var n = this,
                i = !1;
            return t(this).one(v.TRANSITION_END, function() { i = !0 }), setTimeout(function() { i || v.triggerTransitionEnd(n) }, e), this
        }

        function h() { t.fn.emulateTransitionEnd = d, t.event.special[v.TRANSITION_END] = u() }

        function p(e, t) {
            var n = e.nodeName.toLowerCase();
            if (-1 !== t.indexOf(n)) return -1 === Ke.indexOf(n) || Boolean(e.nodeValue.match(Ye) || e.nodeValue.match(Xe));
            for (var i = t.filter(function(e) { return e instanceof RegExp }), r = 0, o = i.length; r < o; r++)
                if (n.match(i[r])) return !0;
            return !1
        }

        function f(e, t, n) {
            if (0 === e.length) return e;
            if (n && "function" == typeof n) return n(e);
            for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), a = function(e) {
                    var n = o[e],
                        i = n.nodeName.toLowerCase();
                    if (-1 === r.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                    var a = [].slice.call(n.attributes),
                        s = [].concat(t["*"] || [], t[i] || []);
                    a.forEach(function(e) { p(e, s) || n.removeAttribute(e.nodeName) })
                }, s = 0, l = o.length; s < l; s++) a(s);
            return i.body.innerHTML
        }
        t = t && t.hasOwnProperty("default") ? t["default"] : t, n = n && n.hasOwnProperty("default") ? n["default"] : n;
        var m = "transitionend",
            g = 1e6,
            y = 1e3,
            v = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(e) { do { e += ~~(Math.random() * g) } while (document.getElementById(e)); return e },
                getSelectorFromElement: function(e) {
                    var t = e.getAttribute("data-target");
                    if (!t || "#" === t) {
                        var n = e.getAttribute("href");
                        t = n && "#" !== n ? n.trim() : ""
                    }
                    try { return document.querySelector(t) ? t : null } catch (i) { return null }
                },
                getTransitionDurationFromElement: function(e) {
                    if (!e) return 0;
                    var n = t(e).css("transition-duration"),
                        i = t(e).css("transition-delay"),
                        r = parseFloat(n),
                        o = parseFloat(i);
                    return r || o ? (n = n.split(",")[0], i = i.split(",")[0], (parseFloat(n) + parseFloat(i)) * y) : 0
                },
                reflow: function(e) { return e.offsetHeight },
                triggerTransitionEnd: function(e) { t(e).trigger(m) },
                supportsTransitionEnd: function() { return Boolean(m) },
                isElement: function(e) { return (e[0] || e).nodeType },
                typeCheckConfig: function(e, t, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var r = n[i],
                                o = t[i],
                                a = o && v.isElement(o) ? "element" : c(o);
                            if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
                        }
                },
                findShadowRoot: function(e) { if (!document.documentElement.attachShadow) return null; if ("function" == typeof e.getRootNode) { var t = e.getRootNode(); return t instanceof ShadowRoot ? t : null } return e instanceof ShadowRoot ? e : e.parentNode ? v.findShadowRoot(e.parentNode) : null },
                jQueryDetection: function() {
                    if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                    var e = t.fn.jquery.split(" ")[0].split("."),
                        n = 1,
                        i = 2,
                        r = 9,
                        o = 1,
                        a = 4;
                    if (e[0] < i && e[1] < r || e[0] === n && e[1] === r && e[2] < o || e[0] >= a) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
                }
            };
        v.jQueryDetection(), h();
        var b = "alert",
            k = "4.4.1",
            w = "bs.alert",
            _ = "." + w,
            S = ".data-api",
            C = t.fn[b],
            T = { DISMISS: '[data-dismiss="alert"]' },
            E = { CLOSE: "close" + _, CLOSED: "closed" + _, CLICK_DATA_API: "click" + _ + S },
            A = { ALERT: "alert", FADE: "fade", SHOW: "show" },
            x = function() {
                function e(e) { this._element = e }
                var n = e.prototype;
                return n.close = function(e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }, n.dispose = function() { t.removeData(this._element, w), this._element = null }, n._getRootElement = function(e) {
                    var n = v.getSelectorFromElement(e),
                        i = !1;
                    return n && (i = document.querySelector(n)), i || (i = t(e).closest("." + A.ALERT)[0]), i
                }, n._triggerCloseEvent = function(e) { var n = t.Event(E.CLOSE); return t(e).trigger(n), n }, n._removeElement = function(e) {
                    var n = this;
                    if (t(e).removeClass(A.SHOW), t(e).hasClass(A.FADE)) {
                        var i = v.getTransitionDurationFromElement(e);
                        t(e).one(v.TRANSITION_END, function(t) { return n._destroyElement(e, t) }).emulateTransitionEnd(i)
                    } else this._destroyElement(e)
                }, n._destroyElement = function(e) { t(e).detach().trigger(E.CLOSED).remove() }, e._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = t(this),
                            r = i.data(w);
                        r || (r = new e(this), i.data(w, r)), "close" === n && r[n](this)
                    })
                }, e._handleDismiss = function(e) { return function(t) { t && t.preventDefault(), e.close(this) } }, r(e, null, [{ key: "VERSION", get: function() { return k } }]), e
            }();
        t(document).on(E.CLICK_DATA_API, T.DISMISS, x._handleDismiss(new x)), t.fn[b] = x._jQueryInterface, t.fn[b].Constructor = x, t.fn[b].noConflict = function() { return t.fn[b] = C, x._jQueryInterface };
        var D = "button",
            M = "4.4.1",
            O = "bs.button",
            I = "." + O,
            N = ".data-api",
            P = t.fn[D],
            j = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
            L = { DATA_TOGGLE_CARROT: '[data-toggle^="button"]', DATA_TOGGLES: '[data-toggle="buttons"]', DATA_TOGGLE: '[data-toggle="button"]', DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn', INPUT: 'input:not([type="hidden"])', ACTIVE: ".active", BUTTON: ".btn" },
            $ = { CLICK_DATA_API: "click" + I + N, FOCUS_BLUR_DATA_API: "focus" + I + N + " blur" + I + N, LOAD_DATA_API: "load" + I + N },
            R = function() {
                function e(e) { this._element = e }
                var n = e.prototype;
                return n.toggle = function() {
                    var e = !0,
                        n = !0,
                        i = t(this._element).closest(L.DATA_TOGGLES)[0];
                    if (i) {
                        var r = this._element.querySelector(L.INPUT);
                        if (r) {
                            if ("radio" === r.type)
                                if (r.checked && this._element.classList.contains(j.ACTIVE)) e = !1;
                                else {
                                    var o = i.querySelector(L.ACTIVE);
                                    o && t(o).removeClass(j.ACTIVE)
                                }
                            else "checkbox" === r.type ? "LABEL" === this._element.tagName && r.checked === this._element.classList.contains(j.ACTIVE) && (e = !1) : e = !1;
                            e && (r.checked = !this._element.classList.contains(j.ACTIVE), t(r).trigger("change")), r.focus(), n = !1
                        }
                    }
                    this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(j.ACTIVE)), e && t(this._element).toggleClass(j.ACTIVE))
                }, n.dispose = function() { t.removeData(this._element, O), this._element = null }, e._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = t(this).data(O);
                        i || (i = new e(this), t(this).data(O, i)), "toggle" === n && i[n]()
                    })
                }, r(e, null, [{ key: "VERSION", get: function() { return M } }]), e
            }();
        t(document).on($.CLICK_DATA_API, L.DATA_TOGGLE_CARROT, function(e) {
            var n = e.target;
            if (t(n).hasClass(j.BUTTON) || (n = t(n).closest(L.BUTTON)[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) e.preventDefault();
            else {
                var i = n.querySelector(L.INPUT);
                if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();
                R._jQueryInterface.call(t(n), "toggle")
            }
        }).on($.FOCUS_BLUR_DATA_API, L.DATA_TOGGLE_CARROT, function(e) {
            var n = t(e.target).closest(L.BUTTON)[0];
            t(n).toggleClass(j.FOCUS, /^focus(in)?$/.test(e.type))
        }), t(window).on($.LOAD_DATA_API, function() {
            for (var e = [].slice.call(document.querySelectorAll(L.DATA_TOGGLES_BUTTONS)), t = 0, n = e.length; t < n; t++) {
                var i = e[t],
                    r = i.querySelector(L.INPUT);
                r.checked || r.hasAttribute("checked") ? i.classList.add(j.ACTIVE) : i.classList.remove(j.ACTIVE)
            }
            for (var o = 0, a = (e = [].slice.call(document.querySelectorAll(L.DATA_TOGGLE))).length; o < a; o++) { var s = e[o]; "true" === s.getAttribute("aria-pressed") ? s.classList.add(j.ACTIVE) : s.classList.remove(j.ACTIVE) }
        }), t.fn[D] = R._jQueryInterface, t.fn[D].Constructor = R, t.fn[D].noConflict = function() { return t.fn[D] = P, R._jQueryInterface };
        var F = "carousel",
            H = "4.4.1",
            B = "bs.carousel",
            q = "." + B,
            U = ".data-api",
            V = t.fn[F],
            z = 37,
            W = 39,
            J = 500,
            G = 40,
            K = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
            Q = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
            Y = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
            X = { SLIDE: "slide" + q, SLID: "slid" + q, KEYDOWN: "keydown" + q, MOUSEENTER: "mouseenter" + q, MOUSELEAVE: "mouseleave" + q, TOUCHSTART: "touchstart" + q, TOUCHMOVE: "touchmove" + q, TOUCHEND: "touchend" + q, POINTERDOWN: "pointerdown" + q, POINTERUP: "pointerup" + q, DRAG_START: "dragstart" + q, LOAD_DATA_API: "load" + q + U, CLICK_DATA_API: "click" + q + U },
            Z = { CAROUSEL: "carousel", ACTIVE: "active", SLIDE: "slide", RIGHT: "carousel-item-right", LEFT: "carousel-item-left", NEXT: "carousel-item-next", PREV: "carousel-item-prev", ITEM: "carousel-item", POINTER_EVENT: "pointer-event" },
            ee = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", ITEM_IMG: ".carousel-item img", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
            te = { TOUCH: "touch", PEN: "pen" },
            ne = function() {
                function e(e, t) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(ee.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() }
                var n = e.prototype;
                return n.next = function() { this._isSliding || this._slide(Y.NEXT) }, n.nextWhenVisible = function() {!document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next() }, n.prev = function() { this._isSliding || this._slide(Y.PREV) }, n.pause = function(e) { e || (this._isPaused = !0), this._element.querySelector(ee.NEXT_PREV) && (v.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, n.cycle = function(e) { e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, n.to = function(e) {
                    var n = this;
                    this._activeElement = this._element.querySelector(ee.ACTIVE_ITEM);
                    var i = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding) t(this._element).one(X.SLID, function() { return n.to(e) });
                        else {
                            if (i === e) return this.pause(), void this.cycle();
                            var r = e > i ? Y.NEXT : Y.PREV;
                            this._slide(r, this._items[e])
                        }
                }, n.dispose = function() { t(this._element).off(q), t.removeData(this._element, B), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, n._getConfig = function(e) { return e = s({}, K, {}, e), v.typeCheckConfig(F, e, Q), e }, n._handleSwipe = function() {
                    var e = Math.abs(this.touchDeltaX);
                    if (!(e <= G)) {
                        var t = e / this.touchDeltaX;
                        this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                    }
                }, n._addEventListeners = function() {
                    var e = this;
                    this._config.keyboard && t(this._element).on(X.KEYDOWN, function(t) { return e._keydown(t) }), "hover" === this._config.pause && t(this._element).on(X.MOUSEENTER, function(t) { return e.pause(t) }).on(X.MOUSELEAVE, function(t) { return e.cycle(t) }), this._config.touch && this._addTouchEventListeners()
                }, n._addTouchEventListeners = function() {
                    var e = this;
                    if (this._touchSupported) {
                        var n = function(t) { e._pointerEvent && te[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX) },
                            i = function(t) { t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX },
                            r = function(t) { e._pointerEvent && te[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) { return e.cycle(t) }, J + e._config.interval)) };
                        t(this._element.querySelectorAll(ee.ITEM_IMG)).on(X.DRAG_START, function(e) { return e.preventDefault() }), this._pointerEvent ? (t(this._element).on(X.POINTERDOWN, function(e) { return n(e) }), t(this._element).on(X.POINTERUP, function(e) { return r(e) }), this._element.classList.add(Z.POINTER_EVENT)) : (t(this._element).on(X.TOUCHSTART, function(e) { return n(e) }), t(this._element).on(X.TOUCHMOVE, function(e) { return i(e) }), t(this._element).on(X.TOUCHEND, function(e) { return r(e) }))
                    }
                }, n._keydown = function(e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                        case z:
                            e.preventDefault(), this.prev();
                            break;
                        case W:
                            e.preventDefault(), this.next()
                    }
                }, n._getItemIndex = function(e) { return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(ee.ITEM)) : [], this._items.indexOf(e) }, n._getItemByDirection = function(e, t) {
                    var n = e === Y.NEXT,
                        i = e === Y.PREV,
                        r = this._getItemIndex(t),
                        o = this._items.length - 1;
                    if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                    var a = (r + (e === Y.PREV ? -1 : 1)) % this._items.length;
                    return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                }, n._triggerSlideEvent = function(e, n) {
                    var i = this._getItemIndex(e),
                        r = this._getItemIndex(this._element.querySelector(ee.ACTIVE_ITEM)),
                        o = t.Event(X.SLIDE, { relatedTarget: e, direction: n, from: r, to: i });
                    return t(this._element).trigger(o), o
                }, n._setActiveIndicatorElement = function(e) {
                    if (this._indicatorsElement) {
                        var n = [].slice.call(this._indicatorsElement.querySelectorAll(ee.ACTIVE));
                        t(n).removeClass(Z.ACTIVE);
                        var i = this._indicatorsElement.children[this._getItemIndex(e)];
                        i && t(i).addClass(Z.ACTIVE)
                    }
                }, n._slide = function(e, n) {
                    var i, r, o, a = this,
                        s = this._element.querySelector(ee.ACTIVE_ITEM),
                        l = this._getItemIndex(s),
                        c = n || s && this._getItemByDirection(e, s),
                        u = this._getItemIndex(c),
                        d = Boolean(this._interval);
                    if (e === Y.NEXT ? (i = Z.LEFT, r = Z.NEXT, o = Y.LEFT) : (i = Z.RIGHT, r = Z.PREV, o = Y.RIGHT), c && t(c).hasClass(Z.ACTIVE)) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && s && c) {
                        this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(c);
                        var h = t.Event(X.SLID, { relatedTarget: c, direction: o, from: l, to: u });
                        if (t(this._element).hasClass(Z.SLIDE)) {
                            t(c).addClass(r), v.reflow(c), t(s).addClass(i), t(c).addClass(i);
                            var p = parseInt(c.getAttribute("data-interval"), 10);
                            p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                            var f = v.getTransitionDurationFromElement(s);
                            t(s).one(v.TRANSITION_END, function() { t(c).removeClass(i + " " + r).addClass(Z.ACTIVE), t(s).removeClass(Z.ACTIVE + " " + r + " " + i), a._isSliding = !1, setTimeout(function() { return t(a._element).trigger(h) }, 0) }).emulateTransitionEnd(f)
                        } else t(s).removeClass(Z.ACTIVE), t(c).addClass(Z.ACTIVE), this._isSliding = !1, t(this._element).trigger(h);
                        d && this.cycle()
                    }
                }, e._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = t(this).data(B),
                            r = s({}, K, {}, t(this).data());
                        "object" == typeof n && (r = s({}, r, {}, n));
                        var o = "string" == typeof n ? n : r.slide;
                        if (i || (i = new e(this, r), t(this).data(B, i)), "number" == typeof n) i.to(n);
                        else if ("string" == typeof o) {
                            if ("undefined" == typeof i[o]) throw new TypeError('No method named "' + o + '"');
                            i[o]()
                        } else r.interval && r.ride && (i.pause(), i.cycle())
                    })
                }, e._dataApiClickHandler = function(n) {
                    var i = v.getSelectorFromElement(this);
                    if (i) {
                        var r = t(i)[0];
                        if (r && t(r).hasClass(Z.CAROUSEL)) {
                            var o = s({}, t(r).data(), {}, t(this).data()),
                                a = this.getAttribute("data-slide-to");
                            a && (o.interval = !1), e._jQueryInterface.call(t(r), o), a && t(r).data(B).to(a), n.preventDefault()
                        }
                    }
                }, r(e, null, [{ key: "VERSION", get: function() { return H } }, { key: "Default", get: function() { return K } }]), e
            }();
        t(document).on(X.CLICK_DATA_API, ee.DATA_SLIDE, ne._dataApiClickHandler), t(window).on(X.LOAD_DATA_API, function() {
            for (var e = [].slice.call(document.querySelectorAll(ee.DATA_RIDE)), n = 0, i = e.length; n < i; n++) {
                var r = t(e[n]);
                ne._jQueryInterface.call(r, r.data())
            }
        }), t.fn[F] = ne._jQueryInterface, t.fn[F].Constructor = ne, t.fn[F].noConflict = function() { return t.fn[F] = V, ne._jQueryInterface };
        var ie = "collapse",
            re = "4.4.1",
            oe = "bs.collapse",
            ae = "." + oe,
            se = ".data-api",
            le = t.fn[ie],
            ce = { toggle: !0, parent: "" },
            ue = { toggle: "boolean", parent: "(string|element)" },
            de = { SHOW: "show" + ae, SHOWN: "shown" + ae, HIDE: "hide" + ae, HIDDEN: "hidden" + ae, CLICK_DATA_API: "click" + ae + se },
            he = { SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed" },
            pe = { WIDTH: "width", HEIGHT: "height" },
            fe = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
            me = function() {
                function e(e, t) {
                    this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll(fe.DATA_TOGGLE)), i = 0, r = n.length; i < r; i++) {
                        var o = n[i],
                            a = v.getSelectorFromElement(o),
                            s = [].slice.call(document.querySelectorAll(a)).filter(function(t) { return t === e });
                        null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(o))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var n = e.prototype;
                return n.toggle = function() { t(this._element).hasClass(he.SHOW) ? this.hide() : this.show() }, n.show = function() {
                    var n, i, r = this;
                    if (!this._isTransitioning && !t(this._element).hasClass(he.SHOW) && (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(fe.ACTIVES)).filter(function(e) { return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(he.COLLAPSE) })).length && (n = null), !(n && (i = t(n).not(this._selector).data(oe)) && i._isTransitioning))) {
                        var o = t.Event(de.SHOW);
                        if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                            n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data(oe, null));
                            var a = this._getDimension();
                            t(this._element).removeClass(he.COLLAPSE).addClass(he.COLLAPSING), this._element.style[a] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(he.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var s = function() { t(r._element).removeClass(he.COLLAPSING).addClass(he.COLLAPSE).addClass(he.SHOW), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(de.SHOWN) },
                                l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                                c = v.getTransitionDurationFromElement(this._element);
                            t(this._element).one(v.TRANSITION_END, s).emulateTransitionEnd(c), this._element.style[a] = this._element[l] + "px"
                        }
                    }
                }, n.hide = function() {
                    var e = this;
                    if (!this._isTransitioning && t(this._element).hasClass(he.SHOW)) {
                        var n = t.Event(de.HIDE);
                        if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var i = this._getDimension();
                            this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", v.reflow(this._element), t(this._element).addClass(he.COLLAPSING).removeClass(he.COLLAPSE).removeClass(he.SHOW);
                            var r = this._triggerArray.length;
                            if (r > 0)
                                for (var o = 0; o < r; o++) {
                                    var a = this._triggerArray[o],
                                        s = v.getSelectorFromElement(a);
                                    if (null !== s) t([].slice.call(document.querySelectorAll(s))).hasClass(he.SHOW) || t(a).addClass(he.COLLAPSED).attr("aria-expanded", !1)
                                }
                            this.setTransitioning(!0);
                            var l = function() { e.setTransitioning(!1), t(e._element).removeClass(he.COLLAPSING).addClass(he.COLLAPSE).trigger(de.HIDDEN) };
                            this._element.style[i] = "";
                            var c = v.getTransitionDurationFromElement(this._element);
                            t(this._element).one(v.TRANSITION_END, l).emulateTransitionEnd(c)
                        }
                    }
                }, n.setTransitioning = function(e) { this._isTransitioning = e }, n.dispose = function() { t.removeData(this._element, oe), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, n._getConfig = function(e) { return (e = s({}, ce, {}, e)).toggle = Boolean(e.toggle), v.typeCheckConfig(ie, e, ue), e }, n._getDimension = function() { return t(this._element).hasClass(pe.WIDTH) ? pe.WIDTH : pe.HEIGHT }, n._getParent = function() {
                    var n, i = this;
                    v.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                    var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        o = [].slice.call(n.querySelectorAll(r));
                    return t(o).each(function(t, n) { i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]) }), n
                }, n._addAriaAndCollapsedClass = function(e, n) {
                    var i = t(e).hasClass(he.SHOW);
                    n.length && t(n).toggleClass(he.COLLAPSED, !i).attr("aria-expanded", i)
                }, e._getTargetFromElement = function(e) { var t = v.getSelectorFromElement(e); return t ? document.querySelector(t) : null }, e._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = t(this),
                            r = i.data(oe),
                            o = s({}, ce, {}, i.data(), {}, "object" == typeof n && n ? n : {});
                        if (!r && o.toggle && /show|hide/.test(n) && (o.toggle = !1), r || (r = new e(this, o), i.data(oe, r)), "string" == typeof n) {
                            if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    })
                }, r(e, null, [{ key: "VERSION", get: function() { return re } }, { key: "Default", get: function() { return ce } }]), e
            }();
        t(document).on(de.CLICK_DATA_API, fe.DATA_TOGGLE, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = t(this),
                i = v.getSelectorFromElement(this),
                r = [].slice.call(document.querySelectorAll(i));
            t(r).each(function() {
                var e = t(this),
                    i = e.data(oe) ? "toggle" : n.data();
                me._jQueryInterface.call(e, i)
            })
        }), t.fn[ie] = me._jQueryInterface, t.fn[ie].Constructor = me, t.fn[ie].noConflict = function() { return t.fn[ie] = le, me._jQueryInterface };
        var ge = "dropdown",
            ye = "4.4.1",
            ve = "bs.dropdown",
            be = "." + ve,
            ke = ".data-api",
            we = t.fn[ge],
            _e = 27,
            Se = 32,
            Ce = 9,
            Te = 38,
            Ee = 40,
            Ae = 3,
            xe = new RegExp(Te + "|" + Ee + "|" + _e),
            De = { HIDE: "hide" + be, HIDDEN: "hidden" + be, SHOW: "show" + be, SHOWN: "shown" + be, CLICK: "click" + be, CLICK_DATA_API: "click" + be + ke, KEYDOWN_DATA_API: "keydown" + be + ke, KEYUP_DATA_API: "keyup" + be + ke },
            Me = { DISABLED: "disabled", SHOW: "show", DROPUP: "dropup", DROPRIGHT: "dropright", DROPLEFT: "dropleft", MENURIGHT: "dropdown-menu-right", MENULEFT: "dropdown-menu-left", POSITION_STATIC: "position-static" },
            Oe = { DATA_TOGGLE: '[data-toggle="dropdown"]', FORM_CHILD: ".dropdown form", MENU: ".dropdown-menu", NAVBAR_NAV: ".navbar-nav", VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)" },
            Ie = { TOP: "top-start", TOPEND: "top-end", BOTTOM: "bottom-start", BOTTOMEND: "bottom-end", RIGHT: "right-start", RIGHTEND: "right-end", LEFT: "left-start", LEFTEND: "left-end" },
            Ne = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
            Pe = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
            je = function() {
                function e(e, t) { this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() }
                var i = e.prototype;
                return i.toggle = function() {
                    if (!this._element.disabled && !t(this._element).hasClass(Me.DISABLED)) {
                        var n = t(this._menu).hasClass(Me.SHOW);
                        e._clearMenus(), n || this.show(!0)
                    }
                }, i.show = function(i) {
                    if (void 0 === i && (i = !1), !(this._element.disabled || t(this._element).hasClass(Me.DISABLED) || t(this._menu).hasClass(Me.SHOW))) {
                        var r = { relatedTarget: this._element },
                            o = t.Event(De.SHOW, r),
                            a = e._getParentFromElement(this._element);
                        if (t(a).trigger(o), !o.isDefaultPrevented()) { if (!this._inNavbar && i) { if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"); var s = this._element; "parent" === this._config.reference ? s = a : v.isElement(this._config.reference) && (s = this._config.reference, "undefined" != typeof this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(a).addClass(Me.POSITION_STATIC), this._popper = new n(s, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === t(a).closest(Oe.NAVBAR_NAV).length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(Me.SHOW), t(a).toggleClass(Me.SHOW).trigger(t.Event(De.SHOWN, r)) }
                    }
                }, i.hide = function() {
                    if (!this._element.disabled && !t(this._element).hasClass(Me.DISABLED) && t(this._menu).hasClass(Me.SHOW)) {
                        var n = { relatedTarget: this._element },
                            i = t.Event(De.HIDE, n),
                            r = e._getParentFromElement(this._element);
                        t(r).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass(Me.SHOW), t(r).toggleClass(Me.SHOW).trigger(t.Event(De.HIDDEN, n)))
                    }
                }, i.dispose = function() { t.removeData(this._element, ve), t(this._element).off(be), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null) }, i.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, i._addEventListeners = function() {
                    var e = this;
                    t(this._element).on(De.CLICK, function(t) { t.preventDefault(), t.stopPropagation(), e.toggle() })
                }, i._getConfig = function(e) { return e = s({}, this.constructor.Default, {}, t(this._element).data(), {}, e), v.typeCheckConfig(ge, e, this.constructor.DefaultType), e }, i._getMenuElement = function() {
                    if (!this._menu) {
                        var t = e._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(Oe.MENU))
                    }
                    return this._menu
                }, i._getPlacement = function() {
                    var e = t(this._element.parentNode),
                        n = Ie.BOTTOM;
                    return e.hasClass(Me.DROPUP) ? (n = Ie.TOP, t(this._menu).hasClass(Me.MENURIGHT) && (n = Ie.TOPEND)) : e.hasClass(Me.DROPRIGHT) ? n = Ie.RIGHT : e.hasClass(Me.DROPLEFT) ? n = Ie.LEFT : t(this._menu).hasClass(Me.MENURIGHT) && (n = Ie.BOTTOMEND), n
                }, i._detectNavbar = function() { return t(this._element).closest(".navbar").length > 0 }, i._getOffset = function() {
                    var e = this,
                        t = {};
                    return "function" == typeof this._config.offset ? t.fn = function(t) { return t.offsets = s({}, t.offsets, {}, e._config.offset(t.offsets, e._element) || {}), t } : t.offset = this._config.offset, t
                }, i._getPopperConfig = function() { var e = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), s({}, e, {}, this._config.popperConfig) }, e._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = t(this).data(ve);
                        if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data(ve, i)), "string" == typeof n) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    })
                }, e._clearMenus = function(n) {
                    if (!n || n.which !== Ae && ("keyup" !== n.type || n.which === Ce))
                        for (var i = [].slice.call(document.querySelectorAll(Oe.DATA_TOGGLE)), r = 0, o = i.length; r < o; r++) {
                            var a = e._getParentFromElement(i[r]),
                                s = t(i[r]).data(ve),
                                l = { relatedTarget: i[r] };
                            if (n && "click" === n.type && (l.clickEvent = n), s) {
                                var c = s._menu;
                                if (t(a).hasClass(Me.SHOW) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && n.which === Ce) && t.contains(a, n.target))) {
                                    var u = t.Event(De.HIDE, l);
                                    t(a).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), t(c).removeClass(Me.SHOW), t(a).removeClass(Me.SHOW).trigger(t.Event(De.HIDDEN, l)))
                                }
                            }
                        }
                }, e._getParentFromElement = function(e) { var t, n = v.getSelectorFromElement(e); return n && (t = document.querySelector(n)), t || e.parentNode }, e._dataApiKeydownHandler = function(n) {
                    if ((/input|textarea/i.test(n.target.tagName) ? !(n.which === Se || n.which !== _e && (n.which !== Ee && n.which !== Te || t(n.target).closest(Oe.MENU).length)) : xe.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(Me.DISABLED))) {
                        var i = e._getParentFromElement(this),
                            r = t(i).hasClass(Me.SHOW);
                        if (r || n.which !== _e)
                            if (r && (!r || n.which !== _e && n.which !== Se)) {
                                var o = [].slice.call(i.querySelectorAll(Oe.VISIBLE_ITEMS)).filter(function(e) { return t(e).is(":visible") });
                                if (0 !== o.length) {
                                    var a = o.indexOf(n.target);
                                    n.which === Te && a > 0 && a--, n.which === Ee && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus()
                                }
                            } else {
                                if (n.which === _e) {
                                    var s = i.querySelector(Oe.DATA_TOGGLE);
                                    t(s).trigger("focus")
                                }
                                t(this).trigger("click")
                            }
                    }
                }, r(e, null, [{ key: "VERSION", get: function() { return ye } }, { key: "Default", get: function() { return Ne } }, { key: "DefaultType", get: function() { return Pe } }]), e
            }();
        t(document).on(De.KEYDOWN_DATA_API, Oe.DATA_TOGGLE, je._dataApiKeydownHandler).on(De.KEYDOWN_DATA_API, Oe.MENU, je._dataApiKeydownHandler).on(De.CLICK_DATA_API + " " + De.KEYUP_DATA_API, je._clearMenus).on(De.CLICK_DATA_API, Oe.DATA_TOGGLE, function(e) { e.preventDefault(), e.stopPropagation(), je._jQueryInterface.call(t(this), "toggle") }).on(De.CLICK_DATA_API, Oe.FORM_CHILD, function(e) { e.stopPropagation() }), t.fn[ge] = je._jQueryInterface, t.fn[ge].Constructor = je, t.fn[ge].noConflict = function() { return t.fn[ge] = we, je._jQueryInterface };
        var Le = "modal",
            $e = "4.4.1",
            Re = "bs.modal",
            Fe = "." + Re,
            He = ".data-api",
            Be = t.fn[Le],
            qe = 27,
            Ue = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            Ve = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
            ze = { HIDE: "hide" + Fe, HIDE_PREVENTED: "hidePrevented" + Fe, HIDDEN: "hidden" + Fe, SHOW: "show" + Fe, SHOWN: "shown" + Fe, FOCUSIN: "focusin" + Fe, RESIZE: "resize" + Fe, CLICK_DISMISS: "click.dismiss" + Fe, KEYDOWN_DISMISS: "keydown.dismiss" + Fe, MOUSEUP_DISMISS: "mouseup.dismiss" + Fe, MOUSEDOWN_DISMISS: "mousedown.dismiss" + Fe, CLICK_DATA_API: "click" + Fe + He },
            We = { SCROLLABLE: "modal-dialog-scrollable", SCROLLBAR_MEASURER: "modal-scrollbar-measure", BACKDROP: "modal-backdrop", OPEN: "modal-open", FADE: "fade", SHOW: "show", STATIC: "modal-static" },
            Je = { DIALOG: ".modal-dialog", MODAL_BODY: ".modal-body", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top" },
            Ge = function() {
                function e(e, t) { this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(Je.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 }
                var n = e.prototype;
                return n.toggle = function(e) { return this._isShown ? this.hide() : this.show(e) }, n.show = function(e) {
                    var n = this;
                    if (!this._isShown && !this._isTransitioning) {
                        t(this._element).hasClass(We.FADE) && (this._isTransitioning = !0);
                        var i = t.Event(ze.SHOW, { relatedTarget: e });
                        t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(ze.CLICK_DISMISS, Je.DATA_DISMISS, function(e) { return n.hide(e) }), t(this._dialog).on(ze.MOUSEDOWN_DISMISS, function() { t(n._element).one(ze.MOUSEUP_DISMISS, function(e) { t(e.target).is(n._element) && (n._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return n._showElement(e) }))
                    }
                }, n.hide = function(e) {
                    var n = this;
                    if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                        var i = t.Event(ze.HIDE);
                        if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                            this._isShown = !1;
                            var r = t(this._element).hasClass(We.FADE);
                            if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(ze.FOCUSIN), t(this._element).removeClass(We.SHOW), t(this._element).off(ze.CLICK_DISMISS), t(this._dialog).off(ze.MOUSEDOWN_DISMISS), r) {
                                var o = v.getTransitionDurationFromElement(this._element);
                                t(this._element).one(v.TRANSITION_END, function(e) { return n._hideModal(e) }).emulateTransitionEnd(o)
                            } else this._hideModal()
                        }
                    }
                }, n.dispose = function() {
                    [window, this._element, this._dialog].forEach(function(e) { return t(e).off(Fe) }), t(document).off(ze.FOCUSIN), t.removeData(this._element, Re), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                }, n.handleUpdate = function() { this._adjustDialog() }, n._getConfig = function(e) { return e = s({}, Ue, {}, e), v.typeCheckConfig(Le, e, Ve), e }, n._triggerBackdropTransition = function() {
                    var e = this;
                    if ("static" === this._config.backdrop) {
                        var n = t.Event(ze.HIDE_PREVENTED);
                        if (t(this._element).trigger(n), n.defaultPrevented) return;
                        this._element.classList.add(We.STATIC);
                        var i = v.getTransitionDurationFromElement(this._element);
                        t(this._element).one(v.TRANSITION_END, function() {
                            e._element.classList.remove(We.STATIC)
                        }).emulateTransitionEnd(i), this._element.focus()
                    } else this.hide()
                }, n._showElement = function(e) {
                    var n = this,
                        i = t(this._element).hasClass(We.FADE),
                        r = this._dialog ? this._dialog.querySelector(Je.MODAL_BODY) : null;
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass(We.SCROLLABLE) && r ? r.scrollTop = 0 : this._element.scrollTop = 0, i && v.reflow(this._element), t(this._element).addClass(We.SHOW), this._config.focus && this._enforceFocus();
                    var o = t.Event(ze.SHOWN, { relatedTarget: e }),
                        a = function() { n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o) };
                    if (i) {
                        var s = v.getTransitionDurationFromElement(this._dialog);
                        t(this._dialog).one(v.TRANSITION_END, a).emulateTransitionEnd(s)
                    } else a()
                }, n._enforceFocus = function() {
                    var e = this;
                    t(document).off(ze.FOCUSIN).on(ze.FOCUSIN, function(n) { document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus() })
                }, n._setEscapeEvent = function() {
                    var e = this;
                    this._isShown && this._config.keyboard ? t(this._element).on(ze.KEYDOWN_DISMISS, function(t) { t.which === qe && e._triggerBackdropTransition() }) : this._isShown || t(this._element).off(ze.KEYDOWN_DISMISS)
                }, n._setResizeEvent = function() {
                    var e = this;
                    this._isShown ? t(window).on(ze.RESIZE, function(t) { return e.handleUpdate(t) }) : t(window).off(ze.RESIZE)
                }, n._hideModal = function() {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() { t(document.body).removeClass(We.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(ze.HIDDEN) })
                }, n._removeBackdrop = function() { this._backdrop && (t(this._backdrop).remove(), this._backdrop = null) }, n._showBackdrop = function(e) {
                    var n = this,
                        i = t(this._element).hasClass(We.FADE) ? We.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = We.BACKDROP, i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on(ze.CLICK_DISMISS, function(e) { n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && n._triggerBackdropTransition() }), i && v.reflow(this._backdrop), t(this._backdrop).addClass(We.SHOW), !e) return;
                        if (!i) return void e();
                        var r = v.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(v.TRANSITION_END, e).emulateTransitionEnd(r)
                    } else if (!this._isShown && this._backdrop) {
                        t(this._backdrop).removeClass(We.SHOW);
                        var o = function() { n._removeBackdrop(), e && e() };
                        if (t(this._element).hasClass(We.FADE)) {
                            var a = v.getTransitionDurationFromElement(this._backdrop);
                            t(this._backdrop).one(v.TRANSITION_END, o).emulateTransitionEnd(a)
                        } else o()
                    } else e && e()
                }, n._adjustDialog = function() { var e = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, n._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, n._checkScrollbar = function() {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, n._setScrollbar = function() {
                    var e = this;
                    if (this._isBodyOverflowing) {
                        var n = [].slice.call(document.querySelectorAll(Je.FIXED_CONTENT)),
                            i = [].slice.call(document.querySelectorAll(Je.STICKY_CONTENT));
                        t(n).each(function(n, i) {
                            var r = i.style.paddingRight,
                                o = t(i).css("padding-right");
                            t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                        }), t(i).each(function(n, i) {
                            var r = i.style.marginRight,
                                o = t(i).css("margin-right");
                            t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                        });
                        var r = document.body.style.paddingRight,
                            o = t(document.body).css("padding-right");
                        t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                    }
                    t(document.body).addClass(We.OPEN)
                }, n._resetScrollbar = function() {
                    var e = [].slice.call(document.querySelectorAll(Je.FIXED_CONTENT));
                    t(e).each(function(e, n) {
                        var i = t(n).data("padding-right");
                        t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                    });
                    var n = [].slice.call(document.querySelectorAll("" + Je.STICKY_CONTENT));
                    t(n).each(function(e, n) {
                        var i = t(n).data("margin-right");
                        void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                    });
                    var i = t(document.body).data("padding-right");
                    t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
                }, n._getScrollbarWidth = function() {
                    var e = document.createElement("div");
                    e.className = We.SCROLLBAR_MEASURER, document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, e._jQueryInterface = function(n, i) {
                    return this.each(function() {
                        var r = t(this).data(Re),
                            o = s({}, Ue, {}, t(this).data(), {}, "object" == typeof n && n ? n : {});
                        if (r || (r = new e(this, o), t(this).data(Re, r)), "string" == typeof n) {
                            if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n](i)
                        } else o.show && r.show(i)
                    })
                }, r(e, null, [{ key: "VERSION", get: function() { return $e } }, { key: "Default", get: function() { return Ue } }]), e
            }();
        t(document).on(ze.CLICK_DATA_API, Je.DATA_TOGGLE, function(e) {
            var n, i = this,
                r = v.getSelectorFromElement(this);
            r && (n = document.querySelector(r));
            var o = t(n).data(Re) ? "toggle" : s({}, t(n).data(), {}, t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var a = t(n).one(ze.SHOW, function(e) { e.isDefaultPrevented() || a.one(ze.HIDDEN, function() { t(i).is(":visible") && i.focus() }) });
            Ge._jQueryInterface.call(t(n), o, this)
        }), t.fn[Le] = Ge._jQueryInterface, t.fn[Le].Constructor = Ge, t.fn[Le].noConflict = function() { return t.fn[Le] = Be, Ge._jQueryInterface };
        var Ke = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            Qe = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
            Ye = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            Xe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
            Ze = "tooltip",
            et = "4.4.1",
            tt = "bs.tooltip",
            nt = "." + tt,
            it = t.fn[Ze],
            rt = "bs-tooltip",
            ot = new RegExp("(^|\\s)" + rt + "\\S+", "g"),
            at = ["sanitize", "whiteList", "sanitizeFn"],
            st = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" },
            lt = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
            ct = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: Qe, popperConfig: null },
            ut = { SHOW: "show", OUT: "out" },
            dt = { HIDE: "hide" + nt, HIDDEN: "hidden" + nt, SHOW: "show" + nt, SHOWN: "shown" + nt, INSERTED: "inserted" + nt, CLICK: "click" + nt, FOCUSIN: "focusin" + nt, FOCUSOUT: "focusout" + nt, MOUSEENTER: "mouseenter" + nt, MOUSELEAVE: "mouseleave" + nt },
            ht = { FADE: "fade", SHOW: "show" },
            pt = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner", ARROW: ".arrow" },
            ft = { HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual" },
            mt = function() {
                function e(e, t) {
                    if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }
                var i = e.prototype;
                return i.enable = function() { this._isEnabled = !0 }, i.disable = function() { this._isEnabled = !1 }, i.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, i.toggle = function(e) {
                    if (this._isEnabled)
                        if (e) {
                            var n = this.constructor.DATA_KEY,
                                i = t(e.currentTarget).data(n);
                            i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (t(this.getTipElement()).hasClass(ht.SHOW)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, i.dispose = function() { clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, i.show = function() {
                    var e = this;
                    if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var i = t.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        t(this.element).trigger(i);
                        var r = v.findShadowRoot(this.element),
                            o = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                        if (i.isDefaultPrevented() || !o) return;
                        var a = this.getTipElement(),
                            s = v.getUID(this.constructor.NAME);
                        a.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(a).addClass(ht.FADE);
                        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                            c = this._getAttachment(l);
                        this.addAttachmentClass(c);
                        var u = this._getContainer();
                        t(a).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(a).appendTo(u), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, a, this._getPopperConfig(c)), t(a).addClass(ht.SHOW), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                        var d = function() {
                            e.config.animation && e._fixTransition();
                            var n = e._hoverState;
                            e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === ut.OUT && e._leave(null, e)
                        };
                        if (t(this.tip).hasClass(ht.FADE)) {
                            var h = v.getTransitionDurationFromElement(this.tip);
                            t(this.tip).one(v.TRANSITION_END, d).emulateTransitionEnd(h)
                        } else d()
                    }
                }, i.hide = function(e) {
                    var n = this,
                        i = this.getTipElement(),
                        r = t.Event(this.constructor.Event.HIDE),
                        o = function() { n._hoverState !== ut.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e() };
                    if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
                        if (t(i).removeClass(ht.SHOW), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[ft.CLICK] = !1, this._activeTrigger[ft.FOCUS] = !1, this._activeTrigger[ft.HOVER] = !1, t(this.tip).hasClass(ht.FADE)) {
                            var a = v.getTransitionDurationFromElement(i);
                            t(i).one(v.TRANSITION_END, o).emulateTransitionEnd(a)
                        } else o();
                        this._hoverState = ""
                    }
                }, i.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, i.isWithContent = function() { return Boolean(this.getTitle()) }, i.addAttachmentClass = function(e) { t(this.getTipElement()).addClass(rt + "-" + e) }, i.getTipElement = function() { return this.tip = this.tip || t(this.config.template)[0], this.tip }, i.setContent = function() {
                    var e = this.getTipElement();
                    this.setElementContent(t(e.querySelectorAll(pt.TOOLTIP_INNER)), this.getTitle()), t(e).removeClass(ht.FADE + " " + ht.SHOW)
                }, i.setElementContent = function(e, n) { "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = f(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) }, i.getTitle = function() { var e = this.element.getAttribute("data-original-title"); return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e }, i._getPopperConfig = function(e) { var t = this; return s({}, { placement: e, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: pt.ARROW }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(e) { e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e) }, onUpdate: function(e) { return t._handlePopperPlacementChange(e) } }, {}, this.config.popperConfig) }, i._getOffset = function() {
                    var e = this,
                        t = {};
                    return "function" == typeof this.config.offset ? t.fn = function(t) { return t.offsets = s({}, t.offsets, {}, e.config.offset(t.offsets, e.element) || {}), t } : t.offset = this.config.offset, t
                }, i._getContainer = function() { return !1 === this.config.container ? document.body : v.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container) }, i._getAttachment = function(e) { return lt[e.toUpperCase()] }, i._setListeners = function() {
                    var e = this;
                    this.config.trigger.split(" ").forEach(function(n) {
                        if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) { return e.toggle(t) });
                        else if (n !== ft.MANUAL) {
                            var i = n === ft.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                r = n === ft.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            t(e.element).on(i, e.config.selector, function(t) { return e._enter(t) }).on(r, e.config.selector, function(t) { return e._leave(t) })
                        }
                    }), this._hideModalHandler = function() { e.element && e.hide() }, t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
                }, i._fixTitle = function() {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, i._enter = function(e, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? ft.FOCUS : ft.HOVER] = !0), t(n.getTipElement()).hasClass(ht.SHOW) || n._hoverState === ut.SHOW ? n._hoverState = ut.SHOW : (clearTimeout(n._timeout), n._hoverState = ut.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() { n._hoverState === ut.SHOW && n.show() }, n.config.delay.show) : n.show())
                }, i._leave = function(e, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? ft.FOCUS : ft.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = ut.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() { n._hoverState === ut.OUT && n.hide() }, n.config.delay.hide) : n.hide())
                }, i._isWithActiveTrigger = function() {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1
                }, i._getConfig = function(e) { var n = t(this.element).data(); return Object.keys(n).forEach(function(e) {-1 !== at.indexOf(e) && delete n[e] }), "number" == typeof(e = s({}, this.constructor.Default, {}, n, {}, "object" == typeof e && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), v.typeCheckConfig(Ze, e, this.constructor.DefaultType), e.sanitize && (e.template = f(e.template, e.whiteList, e.sanitizeFn)), e }, i._getDelegateConfig = function() {
                    var e = {};
                    if (this.config)
                        for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, i._cleanTipClass = function() {
                    var e = t(this.getTipElement()),
                        n = e.attr("class").match(ot);
                    null !== n && n.length && e.removeClass(n.join(""))
                }, i._handlePopperPlacementChange = function(e) {
                    var t = e.instance;
                    this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, i._fixTransition = function() {
                    var e = this.getTipElement(),
                        n = this.config.animation;
                    null === e.getAttribute("x-placement") && (t(e).removeClass(ht.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                }, e._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = t(this).data(tt),
                            r = "object" == typeof n && n;
                        if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, r), t(this).data(tt, i)), "string" == typeof n)) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    })
                }, r(e, null, [{ key: "VERSION", get: function() { return et } }, { key: "Default", get: function() { return ct } }, { key: "NAME", get: function() { return Ze } }, { key: "DATA_KEY", get: function() { return tt } }, { key: "Event", get: function() { return dt } }, { key: "EVENT_KEY", get: function() { return nt } }, { key: "DefaultType", get: function() { return st } }]), e
            }();
        t.fn[Ze] = mt._jQueryInterface, t.fn[Ze].Constructor = mt, t.fn[Ze].noConflict = function() { return t.fn[Ze] = it, mt._jQueryInterface };
        var gt = "popover",
            yt = "4.4.1",
            vt = "bs.popover",
            bt = "." + vt,
            kt = t.fn[gt],
            wt = "bs-popover",
            _t = new RegExp("(^|\\s)" + wt + "\\S+", "g"),
            St = s({}, mt.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
            Ct = s({}, mt.DefaultType, { content: "(string|element|function)" }),
            Tt = { FADE: "fade", SHOW: "show" },
            Et = { TITLE: ".popover-header", CONTENT: ".popover-body" },
            At = { HIDE: "hide" + bt, HIDDEN: "hidden" + bt, SHOW: "show" + bt, SHOWN: "shown" + bt, INSERTED: "inserted" + bt, CLICK: "click" + bt, FOCUSIN: "focusin" + bt, FOCUSOUT: "focusout" + bt, MOUSEENTER: "mouseenter" + bt, MOUSELEAVE: "mouseleave" + bt },
            xt = function(e) {
                function n() { return e.apply(this, arguments) || this }
                l(n, e);
                var i = n.prototype;
                return i.isWithContent = function() { return this.getTitle() || this._getContent() }, i.addAttachmentClass = function(e) { t(this.getTipElement()).addClass(wt + "-" + e) }, i.getTipElement = function() { return this.tip = this.tip || t(this.config.template)[0], this.tip }, i.setContent = function() {
                    var e = t(this.getTipElement());
                    this.setElementContent(e.find(Et.TITLE), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(Et.CONTENT), n), e.removeClass(Tt.FADE + " " + Tt.SHOW)
                }, i._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, i._cleanTipClass = function() {
                    var e = t(this.getTipElement()),
                        n = e.attr("class").match(_t);
                    null !== n && n.length > 0 && e.removeClass(n.join(""))
                }, n._jQueryInterface = function(e) {
                    return this.each(function() {
                        var i = t(this).data(vt),
                            r = "object" == typeof e ? e : null;
                        if ((i || !/dispose|hide/.test(e)) && (i || (i = new n(this, r), t(this).data(vt, i)), "string" == typeof e)) {
                            if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                            i[e]()
                        }
                    })
                }, r(n, null, [{ key: "VERSION", get: function() { return yt } }, { key: "Default", get: function() { return St } }, { key: "NAME", get: function() { return gt } }, { key: "DATA_KEY", get: function() { return vt } }, { key: "Event", get: function() { return At } }, { key: "EVENT_KEY", get: function() { return bt } }, { key: "DefaultType", get: function() { return Ct } }]), n
            }(mt);
        t.fn[gt] = xt._jQueryInterface, t.fn[gt].Constructor = xt, t.fn[gt].noConflict = function() { return t.fn[gt] = kt, xt._jQueryInterface };
        var Dt = "scrollspy",
            Mt = "4.4.1",
            Ot = "bs.scrollspy",
            It = "." + Ot,
            Nt = ".data-api",
            Pt = t.fn[Dt],
            jt = { offset: 10, method: "auto", target: "" },
            Lt = { offset: "number", method: "string", target: "(string|element)" },
            $t = { ACTIVATE: "activate" + It, SCROLL: "scroll" + It, LOAD_DATA_API: "load" + It + Nt },
            Rt = { DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active" },
            Ft = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
            Ht = { OFFSET: "offset", POSITION: "position" },
            Bt = function() {
                function e(e, n) {
                    var i = this;
                    this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + Ft.NAV_LINKS + "," + this._config.target + " " + Ft.LIST_ITEMS + "," + this._config.target + " " + Ft.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on($t.SCROLL, function(e) { return i._process(e) }), this.refresh(), this._process()
                }
                var n = e.prototype;
                return n.refresh = function() {
                    var e = this,
                        n = this._scrollElement === this._scrollElement.window ? Ht.OFFSET : Ht.POSITION,
                        i = "auto" === this._config.method ? n : this._config.method,
                        r = i === Ht.POSITION ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) { var n, o = v.getSelectorFromElement(e); if (o && (n = document.querySelector(o)), n) { var a = n.getBoundingClientRect(); if (a.width || a.height) return [t(n)[i]().top + r, o] } return null }).filter(function(e) { return e }).sort(function(e, t) { return e[0] - t[0] }).forEach(function(t) { e._offsets.push(t[0]), e._targets.push(t[1]) })
                }, n.dispose = function() { t.removeData(this._element, Ot), t(this._scrollElement).off(It), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, n._getConfig = function(e) {
                    if ("string" != typeof(e = s({}, jt, {}, "object" == typeof e && e ? e : {})).target) {
                        var n = t(e.target).attr("id");
                        n || (n = v.getUID(Dt), t(e.target).attr("id", n)), e.target = "#" + n
                    }
                    return v.typeCheckConfig(Dt, e, Lt), e
                }, n._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, n._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, n._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, n._process = function() {
                    var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), e >= n) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else { if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (var r = this._offsets.length; r--;) { this._activeTarget !== this._targets[r] && e >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]) } }
                }, n._activate = function(e) {
                    this._activeTarget = e, this._clear();
                    var n = this._selector.split(",").map(function(t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' }),
                        i = t([].slice.call(document.querySelectorAll(n.join(","))));
                    i.hasClass(Rt.DROPDOWN_ITEM) ? (i.closest(Ft.DROPDOWN).find(Ft.DROPDOWN_TOGGLE).addClass(Rt.ACTIVE), i.addClass(Rt.ACTIVE)) : (i.addClass(Rt.ACTIVE), i.parents(Ft.NAV_LIST_GROUP).prev(Ft.NAV_LINKS + ", " + Ft.LIST_ITEMS).addClass(Rt.ACTIVE), i.parents(Ft.NAV_LIST_GROUP).prev(Ft.NAV_ITEMS).children(Ft.NAV_LINKS).addClass(Rt.ACTIVE)), t(this._scrollElement).trigger($t.ACTIVATE, { relatedTarget: e })
                }, n._clear = function() {
                    [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) { return e.classList.contains(Rt.ACTIVE) }).forEach(function(e) { return e.classList.remove(Rt.ACTIVE) })
                }, e._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = t(this).data(Ot);
                        if (i || (i = new e(this, "object" == typeof n && n), t(this).data(Ot, i)), "string" == typeof n) {
                            if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    })
                }, r(e, null, [{ key: "VERSION", get: function() { return Mt } }, { key: "Default", get: function() { return jt } }]), e
            }();
        t(window).on($t.LOAD_DATA_API, function() {
            for (var e = [].slice.call(document.querySelectorAll(Ft.DATA_SPY)), n = e.length; n--;) {
                var i = t(e[n]);
                Bt._jQueryInterface.call(i, i.data())
            }
        }), t.fn[Dt] = Bt._jQueryInterface, t.fn[Dt].Constructor = Bt, t.fn[Dt].noConflict = function() { return t.fn[Dt] = Pt, Bt._jQueryInterface };
        var qt = "tab",
            Ut = "4.4.1",
            Vt = "bs.tab",
            zt = "." + Vt,
            Wt = ".data-api",
            Jt = t.fn[qt],
            Gt = { HIDE: "hide" + zt, HIDDEN: "hidden" + zt, SHOW: "show" + zt, SHOWN: "shown" + zt, CLICK_DATA_API: "click" + zt + Wt },
            Kt = { DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show" },
            Qt = { DROPDOWN: ".dropdown", NAV_LIST_GROUP: ".nav, .list-group", ACTIVE: ".active", ACTIVE_UL: "> li > .active", DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', DROPDOWN_TOGGLE: ".dropdown-toggle", DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active" },
            Yt = function() {
                function e(e) { this._element = e }
                var n = e.prototype;
                return n.show = function() {
                    var e = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(Kt.ACTIVE) || t(this._element).hasClass(Kt.DISABLED))) {
                        var n, i, r = t(this._element).closest(Qt.NAV_LIST_GROUP)[0],
                            o = v.getSelectorFromElement(this._element);
                        if (r) {
                            var a = "UL" === r.nodeName || "OL" === r.nodeName ? Qt.ACTIVE_UL : Qt.ACTIVE;
                            i = (i = t.makeArray(t(r).find(a)))[i.length - 1]
                        }
                        var s = t.Event(Gt.HIDE, { relatedTarget: this._element }),
                            l = t.Event(Gt.SHOW, { relatedTarget: i });
                        if (i && t(i).trigger(s), t(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
                            o && (n = document.querySelector(o)), this._activate(this._element, r);
                            var c = function() {
                                var n = t.Event(Gt.HIDDEN, { relatedTarget: e._element }),
                                    r = t.Event(Gt.SHOWN, { relatedTarget: i });
                                t(i).trigger(n), t(e._element).trigger(r)
                            };
                            n ? this._activate(n, n.parentNode, c) : c()
                        }
                    }
                }, n.dispose = function() { t.removeData(this._element, Vt), this._element = null }, n._activate = function(e, n, i) {
                    var r = this,
                        o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(Qt.ACTIVE) : t(n).find(Qt.ACTIVE_UL))[0],
                        a = i && o && t(o).hasClass(Kt.FADE),
                        s = function() { return r._transitionComplete(e, o, i) };
                    if (o && a) {
                        var l = v.getTransitionDurationFromElement(o);
                        t(o).removeClass(Kt.SHOW).one(v.TRANSITION_END, s).emulateTransitionEnd(l)
                    } else s()
                }, n._transitionComplete = function(e, n, i) {
                    if (n) {
                        t(n).removeClass(Kt.ACTIVE);
                        var r = t(n.parentNode).find(Qt.DROPDOWN_ACTIVE_CHILD)[0];
                        r && t(r).removeClass(Kt.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    if (t(e).addClass(Kt.ACTIVE), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), v.reflow(e), e.classList.contains(Kt.FADE) && e.classList.add(Kt.SHOW), e.parentNode && t(e.parentNode).hasClass(Kt.DROPDOWN_MENU)) {
                        var o = t(e).closest(Qt.DROPDOWN)[0];
                        if (o) {
                            var a = [].slice.call(o.querySelectorAll(Qt.DROPDOWN_TOGGLE));
                            t(a).addClass(Kt.ACTIVE)
                        }
                        e.setAttribute("aria-expanded", !0)
                    }
                    i && i()
                }, e._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = t(this),
                            r = i.data(Vt);
                        if (r || (r = new e(this), i.data(Vt, r)), "string" == typeof n) {
                            if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    })
                }, r(e, null, [{ key: "VERSION", get: function() { return Ut } }]), e
            }();
        t(document).on(Gt.CLICK_DATA_API, Qt.DATA_TOGGLE, function(e) { e.preventDefault(), Yt._jQueryInterface.call(t(this), "show") }), t.fn[qt] = Yt._jQueryInterface, t.fn[qt].Constructor = Yt, t.fn[qt].noConflict = function() { return t.fn[qt] = Jt, Yt._jQueryInterface };
        var Xt = "toast",
            Zt = "4.4.1",
            en = "bs.toast",
            tn = "." + en,
            nn = t.fn[Xt],
            rn = { CLICK_DISMISS: "click.dismiss" + tn, HIDE: "hide" + tn, HIDDEN: "hidden" + tn, SHOW: "show" + tn, SHOWN: "shown" + tn },
            on = { FADE: "fade", HIDE: "hide", SHOW: "show", SHOWING: "showing" },
            an = { animation: "boolean", autohide: "boolean", delay: "number" },
            sn = { animation: !0, autohide: !0, delay: 500 },
            ln = { DATA_DISMISS: '[data-dismiss="toast"]' },
            cn = function() {
                function e(e, t) { this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners() }
                var n = e.prototype;
                return n.show = function() {
                    var e = this,
                        n = t.Event(rn.SHOW);
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        this._config.animation && this._element.classList.add(on.FADE);
                        var i = function() { e._element.classList.remove(on.SHOWING), e._element.classList.add(on.SHOW), t(e._element).trigger(rn.SHOWN), e._config.autohide && (e._timeout = setTimeout(function() { e.hide() }, e._config.delay)) };
                        if (this._element.classList.remove(on.HIDE), v.reflow(this._element), this._element.classList.add(on.SHOWING), this._config.animation) {
                            var r = v.getTransitionDurationFromElement(this._element);
                            t(this._element).one(v.TRANSITION_END, i).emulateTransitionEnd(r)
                        } else i()
                    }
                }, n.hide = function() {
                    if (this._element.classList.contains(on.SHOW)) {
                        var e = t.Event(rn.HIDE);
                        t(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                    }
                }, n.dispose = function() { clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(on.SHOW) && this._element.classList.remove(on.SHOW), t(this._element).off(rn.CLICK_DISMISS), t.removeData(this._element, en), this._element = null, this._config = null }, n._getConfig = function(e) { return e = s({}, sn, {}, t(this._element).data(), {}, "object" == typeof e && e ? e : {}), v.typeCheckConfig(Xt, e, this.constructor.DefaultType), e }, n._setListeners = function() {
                    var e = this;
                    t(this._element).on(rn.CLICK_DISMISS, ln.DATA_DISMISS, function() { return e.hide() })
                }, n._close = function() {
                    var e = this,
                        n = function() { e._element.classList.add(on.HIDE), t(e._element).trigger(rn.HIDDEN) };
                    if (this._element.classList.remove(on.SHOW), this._config.animation) {
                        var i = v.getTransitionDurationFromElement(this._element);
                        t(this._element).one(v.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                }, e._jQueryInterface = function(n) {
                    return this.each(function() {
                        var i = t(this),
                            r = i.data(en);
                        if (r || (r = new e(this, "object" == typeof n && n), i.data(en, r)), "string" == typeof n) {
                            if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n](this)
                        }
                    })
                }, r(e, null, [{ key: "VERSION", get: function() { return Zt } }, { key: "DefaultType", get: function() { return an } }, { key: "Default", get: function() { return sn } }]), e
            }();
        t.fn[Xt] = cn._jQueryInterface, t.fn[Xt].Constructor = cn, t.fn[Xt].noConflict = function() { return t.fn[Xt] = nn, cn._jQueryInterface }, e.Alert = x, e.Button = R, e.Carousel = ne, e.Collapse = me, e.Dropdown = je, e.Modal = Ge, e.Popover = xt, e.Scrollspy = Bt, e.Tab = Yt, e.Toast = cn, e.Tooltip = mt, e.Util = v, Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    /*!
     * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)
     *
     * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
     */
    function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery) }(function(e, t) {
        function n() { return new Date(Date.UTC.apply(Date, arguments)) }

        function i() { var e = new Date; return n(e.getFullYear(), e.getMonth(), e.getDate()) }

        function r(e, t) { return e.getUTCFullYear() === t.getUTCFullYear() && e.getUTCMonth() === t.getUTCMonth() && e.getUTCDate() === t.getUTCDate() }

        function o(n, i) { return function() { return i !== t && e.fn.datepicker.deprecated(i), this[n].apply(this, arguments) } }

        function a(e) { return e && !isNaN(e.getTime()) }

        function s(t, n) {
            function i(e, t) { return t.toLowerCase() }
            var r = e(t).data(),
                o = {},
                a = new RegExp("^" + n.toLowerCase() + "([A-Z])");
            for (var s in n = new RegExp("^" + n.toLowerCase()), r) n.test(s) && (o[s.replace(a, i)] = r[s]);
            return o
        }

        function l(t) { var n = {}; if (y[t] || (t = t.split("-")[0], y[t])) { var i = y[t]; return e.each(g, function(e, t) { t in i && (n[t] = i[t]) }), n } }
        var c, u = (c = {
                get: function(e) { return this.slice(e)[0] },
                contains: function(e) {
                    for (var t = e && e.valueOf(), n = 0, i = this.length; n < i; n++)
                        if (0 <= this[n].valueOf() - t && this[n].valueOf() - t < 864e5) return n;
                    return -1
                },
                remove: function(e) { this.splice(e, 1) },
                replace: function(t) { t && (e.isArray(t) || (t = [t]), this.clear(), this.push.apply(this, t)) },
                clear: function() { this.length = 0 },
                copy: function() { var e = new u; return e.replace(this), e }
            }, function() { var t = []; return t.push.apply(t, arguments), e.extend(t, c), t }),
            d = function(t, n) { e.data(t, "datepicker", this), this._events = [], this._secondaryEvents = [], this._process_options(n), this.dates = new u, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = e(t), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"), this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = e(v.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(e, t) { return Number(t) + 1 }), this._process_options({ startDate: this._o.startDate, endDate: this._o.endDate, daysOfWeekDisabled: this.o.daysOfWeekDisabled, daysOfWeekHighlighted: this.o.daysOfWeekHighlighted, datesDisabled: this.o.datesDisabled }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show() };
        d.prototype = {
            constructor: d,
            _resolveViewName: function(t) { return e.each(v.viewModes, function(n, i) { if (t === n || -1 !== e.inArray(t, i.names)) return t = n, !1 }), t },
            _resolveDaysOfWeek: function(t) { return e.isArray(t) || (t = t.split(/[,\s]*/)), e.map(t, Number) },
            _check_template: function(n) { try { return n !== t && "" !== n && ((n.match(/[<>]/g) || []).length <= 0 || e(n).length > 0) } catch (i) { return !1 } },
            _process_options: function(t) {
                this._o = e.extend({}, this._o, t);
                var r = this.o = e.extend({}, this._o),
                    o = r.language;
                y[o] || (o = o.split("-")[0], y[o] || (o = m.language)), r.language = o, r.startView = this._resolveViewName(r.startView), r.minViewMode = this._resolveViewName(r.minViewMode), r.maxViewMode = this._resolveViewName(r.maxViewMode), r.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, r.startView)), !0 !== r.multidate && (r.multidate = Number(r.multidate) || !1, !1 !== r.multidate && (r.multidate = Math.max(0, r.multidate))), r.multidateSeparator = String(r.multidateSeparator), r.weekStart %= 7, r.weekEnd = (r.weekStart + 6) % 7;
                var a = v.parseFormat(r.format);
                r.startDate !== -Infinity && (r.startDate ? r.startDate instanceof Date ? r.startDate = this._local_to_utc(this._zero_time(r.startDate)) : r.startDate = v.parseDate(r.startDate, a, r.language, r.assumeNearbyYear) : r.startDate = -Infinity), r.endDate !== Infinity && (r.endDate ? r.endDate instanceof Date ? r.endDate = this._local_to_utc(this._zero_time(r.endDate)) : r.endDate = v.parseDate(r.endDate, a, r.language, r.assumeNearbyYear) : r.endDate = Infinity), r.daysOfWeekDisabled = this._resolveDaysOfWeek(r.daysOfWeekDisabled || []), r.daysOfWeekHighlighted = this._resolveDaysOfWeek(r.daysOfWeekHighlighted || []), r.datesDisabled = r.datesDisabled || [], e.isArray(r.datesDisabled) || (r.datesDisabled = r.datesDisabled.split(",")), r.datesDisabled = e.map(r.datesDisabled, function(e) { return v.parseDate(e, a, r.language, r.assumeNearbyYear) });
                var s = String(r.orientation).toLowerCase().split(/\s+/g),
                    l = r.orientation.toLowerCase();
                if (s = e.grep(s, function(e) { return /^auto|left|right|top|bottom$/.test(e) }), r.orientation = { x: "auto", y: "auto" }, l && "auto" !== l)
                    if (1 === s.length) switch (s[0]) {
                        case "top":
                        case "bottom":
                            r.orientation.y = s[0];
                            break;
                        case "left":
                        case "right":
                            r.orientation.x = s[0]
                    } else l = e.grep(s, function(e) { return /^left|right$/.test(e) }), r.orientation.x = l[0] || "auto", l = e.grep(s, function(e) { return /^top|bottom$/.test(e) }), r.orientation.y = l[0] || "auto";
                    else;
                if (r.defaultViewDate instanceof Date || "string" == typeof r.defaultViewDate) r.defaultViewDate = v.parseDate(r.defaultViewDate, a, r.language, r.assumeNearbyYear);
                else if (r.defaultViewDate) {
                    var c = r.defaultViewDate.year || (new Date).getFullYear(),
                        u = r.defaultViewDate.month || 0,
                        d = r.defaultViewDate.day || 1;
                    r.defaultViewDate = n(c, u, d)
                } else r.defaultViewDate = i()
            },
            _applyEvents: function(e) { for (var n, i, r, o = 0; o < e.length; o++) n = e[o][0], 2 === e[o].length ? (i = t, r = e[o][1]) : 3 === e[o].length && (i = e[o][1], r = e[o][2]), n.on(r, i) },
            _unapplyEvents: function(e) { for (var n, i, r, o = 0; o < e.length; o++) n = e[o][0], 2 === e[o].length ? (r = t, i = e[o][1]) : 3 === e[o].length && (r = e[o][1], i = e[o][2]), n.off(i, r) },
            _buildEvents: function() {
                var t = { keyup: e.proxy(function(t) {-1 === e.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update() }, this), keydown: e.proxy(this.keydown, this), paste: e.proxy(this.paste, this) };
                !0 === this.o.showOnFocus && (t.focus = e.proxy(this.show, this)), this.isInput ? this._events = [
                    [this.element, t]
                ] : this.component && this.inputField.length ? this._events = [
                    [this.inputField, t],
                    [this.component, { click: e.proxy(this.show, this) }]
                ] : this._events = [
                    [this.element, { click: e.proxy(this.show, this), keydown: e.proxy(this.keydown, this) }]
                ], this._events.push([this.element, "*", { blur: e.proxy(function(e) { this._focused_from = e.target }, this) }], [this.element, { blur: e.proxy(function(e) { this._focused_from = e.target }, this) }]), this.o.immediateUpdates && this._events.push([this.element, { "changeYear changeMonth": e.proxy(function(e) { this.update(e.date) }, this) }]), this._secondaryEvents = [
                    [this.picker, { click: e.proxy(this.click, this) }],
                    [this.picker, ".prev, .next", { click: e.proxy(this.navArrowsClick, this) }],
                    [this.picker, ".day:not(.disabled)", { click: e.proxy(this.dayCellClick, this) }],
                    [e(window), { resize: e.proxy(this.place, this) }],
                    [e(document), { "mousedown touchstart": e.proxy(function(e) { this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length || this.isInline || this.hide() }, this) }]
                ]
            },
            _attachEvents: function() { this._detachEvents(), this._applyEvents(this._events) },
            _detachEvents: function() { this._unapplyEvents(this._events) },
            _attachSecondaryEvents: function() { this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents) },
            _detachSecondaryEvents: function() { this._unapplyEvents(this._secondaryEvents) },
            _trigger: function(t, n) {
                var i = n || this.dates.get(-1),
                    r = this._utc_to_local(i);
                this.element.trigger({ type: t, date: r, viewMode: this.viewMode, dates: e.map(this.dates, this._utc_to_local), format: e.proxy(function(e, t) { 0 === arguments.length ? (e = this.dates.length - 1, t = this.o.format) : "string" == typeof e && (t = e, e = this.dates.length - 1), t = t || this.o.format; var n = this.dates.get(e); return v.formatDate(n, t, this.o.language) }, this) })
            },
            show: function() { if (!(this.inputField.is(":disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && e(this.element).blur(), this },
            hide: function() { return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this) },
            destroy: function() { return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this },
            paste: function(t) {
                var n;
                if (t.originalEvent.clipboardData && t.originalEvent.clipboardData.types && -1 !== e.inArray("text/plain", t.originalEvent.clipboardData.types)) n = t.originalEvent.clipboardData.getData("text/plain");
                else {
                    if (!window.clipboardData) return;
                    n = window.clipboardData.getData("Text")
                }
                this.setDate(n), this.update(), t.preventDefault()
            },
            _utc_to_local: function(e) { if (!e) return e; var t = new Date(e.getTime() + 6e4 * e.getTimezoneOffset()); return t.getTimezoneOffset() !== e.getTimezoneOffset() && (t = new Date(e.getTime() + 6e4 * t.getTimezoneOffset())), t },
            _local_to_utc: function(e) { return e && new Date(e.getTime() - 6e4 * e.getTimezoneOffset()) },
            _zero_time: function(e) { return e && new Date(e.getFullYear(), e.getMonth(), e.getDate()) },
            _zero_utc_time: function(e) { return e && n(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()) },
            getDates: function() { return e.map(this.dates, this._utc_to_local) },
            getUTCDates: function() { return e.map(this.dates, function(e) { return new Date(e) }) },
            getDate: function() { return this._utc_to_local(this.getUTCDate()) },
            getUTCDate: function() { var e = this.dates.get(-1); return e !== t ? new Date(e) : null },
            clearDates: function() { this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide() },
            setDates: function() { var t = e.isArray(arguments[0]) ? arguments[0] : arguments; return this.update.apply(this, t), this._trigger("changeDate"), this.setValue(), this },
            setUTCDates: function() { var t = e.isArray(arguments[0]) ? arguments[0] : arguments; return this.setDates.apply(this, e.map(t, this._utc_to_local)), this },
            setDate: o("setDates"),
            setUTCDate: o("setUTCDates"),
            remove: o("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
            setValue: function() { var e = this.getFormattedDate(); return this.inputField.val(e), this },
            getFormattedDate: function(n) { n === t && (n = this.o.format); var i = this.o.language; return e.map(this.dates, function(e) { return v.formatDate(e, n, i) }).join(this.o.multidateSeparator) },
            getStartDate: function() { return this.o.startDate },
            setStartDate: function(e) { return this._process_options({ startDate: e }), this.update(), this.updateNavArrows(), this },
            getEndDate: function() { return this.o.endDate },
            setEndDate: function(e) { return this._process_options({ endDate: e }), this.update(), this.updateNavArrows(), this },
            setDaysOfWeekDisabled: function(e) { return this._process_options({ daysOfWeekDisabled: e }), this.update(), this },
            setDaysOfWeekHighlighted: function(e) { return this._process_options({ daysOfWeekHighlighted: e }), this.update(), this },
            setDatesDisabled: function(e) { return this._process_options({ datesDisabled: e }), this.update(), this },
            place: function() {
                if (this.isInline) return this;
                var t = this.picker.outerWidth(),
                    n = this.picker.outerHeight(),
                    i = 10,
                    r = e(this.o.container),
                    o = r.width(),
                    a = "body" === this.o.container ? e(document).scrollTop() : r.scrollTop(),
                    s = r.offset(),
                    l = [0];
                this.element.parents().each(function() { var t = e(this).css("z-index"); "auto" !== t && 0 !== Number(t) && l.push(Number(t)) });
                var c = Math.max.apply(Math, l) + this.o.zIndexOffset,
                    u = this.component ? this.component.parent().offset() : this.element.offset(),
                    d = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    h = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    p = u.left - s.left,
                    f = u.top - s.top;
                "body" !== this.o.container && (f += a), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (p -= t - h)) : u.left < 0 ? (this.picker.addClass("datepicker-orient-left"), p -= u.left - i) : p + t > o ? (this.picker.addClass("datepicker-orient-right"), p += h - t) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
                var m = this.o.orientation.y;
                if ("auto" === m && (m = -a + f - n < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + m), "top" === m ? f -= n + parseInt(this.picker.css("padding-top")) : f += d, this.o.rtl) {
                    var g = o - (p + h);
                    this.picker.css({ top: f, right: g, zIndex: c })
                } else this.picker.css({ top: f, left: p, zIndex: c });
                return this
            },
            _allow_update: !0,
            update: function() {
                if (!this._allow_update) return this;
                var t = this.dates.copy(),
                    n = [],
                    i = !1;
                return arguments.length ? (e.each(arguments, e.proxy(function(e, t) { t instanceof Date && (t = this._local_to_utc(t)), n.push(t) }, this)), i = !0) : (n = (n = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val()) && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date), n = e.map(n, e.proxy(function(e) { return v.parseDate(e, this.o.format, this.o.language, this.o.assumeNearbyYear) }, this)), n = e.grep(n, e.proxy(function(e) { return !this.dateWithinRange(e) || !e }, this), !0), this.dates.replace(n), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), i ? (this.setValue(), this.element.change()) : this.dates.length && String(t) !== String(this.dates) && i && (this._trigger("changeDate"), this.element.change()), !this.dates.length && t.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this
            },
            fillDow: function() {
                if (this.o.showWeekDays) {
                    var t = this.o.weekStart,
                        n = "<tr>";
                    for (this.o.calendarWeeks && (n += '<th class="cw">&#160;</th>'); t < this.o.weekStart + 7;) n += '<th class="dow', -1 !== e.inArray(t, this.o.daysOfWeekDisabled) && (n += " disabled"), n += '">' + y[this.o.language].daysMin[t++ % 7] + "</th>";
                    n += "</tr>", this.picker.find(".datepicker-days thead").append(n)
                }
            },
            fillMonths: function() {
                for (var e = this._utc_to_local(this.viewDate), t = "", n = 0; n < 12; n++) t += '<span class="month' + (e && e.getMonth() === n ? " focused" : "") + '">' + y[this.o.language].monthsShort[n] + "</span>";
                this.picker.find(".datepicker-months td").html(t)
            },
            setRange: function(t) { t && t.length ? this.range = e.map(t, function(e) { return e.valueOf() }) : delete this.range, this.fill() },
            getClassNames: function(t) {
                var n = [],
                    o = this.viewDate.getUTCFullYear(),
                    a = this.viewDate.getUTCMonth(),
                    s = i();
                return t.getUTCFullYear() < o || t.getUTCFullYear() === o && t.getUTCMonth() < a ? n.push("old") : (t.getUTCFullYear() > o || t.getUTCFullYear() === o && t.getUTCMonth() > a) && n.push("new"), this.focusDate && t.valueOf() === this.focusDate.valueOf() && n.push("focused"), this.o.todayHighlight && r(t, s) && n.push("today"), -1 !== this.dates.contains(t) && n.push("active"), this.dateWithinRange(t) || n.push("disabled"), this.dateIsDisabled(t) && n.push("disabled", "disabled-date"), -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) && n.push("highlighted"), this.range && (t > this.range[0] && t < this.range[this.range.length - 1] && n.push("range"), -1 !== e.inArray(t.valueOf(), this.range) && n.push("selected"), t.valueOf() === this.range[0] && n.push("range-start"), t.valueOf() === this.range[this.range.length - 1] && n.push("range-end")), n
            },
            _fill_yearsView: function(n, i, r, o, a, s, l) {
                for (var c, u, d, h = "", p = r / 10, f = this.picker.find(n), m = Math.floor(o / r) * r, g = m + 9 * p, y = Math.floor(this.viewDate.getFullYear() / p) * p, v = e.map(this.dates, function(e) { return Math.floor(e.getUTCFullYear() / p) * p }), b = m - p; b <= g + p; b += p) c = [i], u = null, b === m - p ? c.push("old") : b === g + p && c.push("new"), -1 !== e.inArray(b, v) && c.push("active"), (b < a || b > s) && c.push("disabled"), b === y && c.push("focused"), l !== e.noop && ((d = l(new Date(b, 0, 1))) === t ? d = {} : "boolean" == typeof d ? d = { enabled: d } : "string" == typeof d && (d = { classes: d }), !1 === d.enabled && c.push("disabled"), d.classes && (c = c.concat(d.classes.split(/\s+/))), d.tooltip && (u = d.tooltip)), h += '<span class="' + c.join(" ") + '"' + (u ? ' title="' + u + '"' : "") + ">" + b + "</span>";
                f.find(".datepicker-switch").text(m + "-" + g), f.find("td").html(h)
            },
            fill: function() {
                var r, o, a = new Date(this.viewDate),
                    s = a.getUTCFullYear(),
                    l = a.getUTCMonth(),
                    c = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                    u = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                    d = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                    h = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                    p = y[this.o.language].today || y.en.today || "",
                    f = y[this.o.language].clear || y.en.clear || "",
                    m = y[this.o.language].titleFormat || y.en.titleFormat,
                    g = i(),
                    b = (!0 === this.o.todayBtn || "linked" === this.o.todayBtn) && g >= this.o.startDate && g <= this.o.endDate && !this.weekOfDateIsDisabled(g);
                if (!isNaN(s) && !isNaN(l)) {
                    this.picker.find(".datepicker-days .datepicker-switch").text(v.formatDate(a, m, this.o.language)), this.picker.find("tfoot .today").text(p).css("display", b ? "table-cell" : "none"), this.picker.find("tfoot .clear").text(f).css("display", !0 === this.o.clearBtn ? "table-cell" : "none"), this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"), this.updateNavArrows(), this.fillMonths();
                    var k = n(s, l, 0),
                        w = k.getUTCDate();
                    k.setUTCDate(w - (k.getUTCDay() - this.o.weekStart + 7) % 7);
                    var _ = new Date(k);
                    k.getUTCFullYear() < 100 && _.setUTCFullYear(k.getUTCFullYear()), _.setUTCDate(_.getUTCDate() + 42), _ = _.valueOf();
                    for (var S, C, T = []; k.valueOf() < _;) {
                        if ((S = k.getUTCDay()) === this.o.weekStart && (T.push("<tr>"), this.o.calendarWeeks)) {
                            var E = new Date(+k + (this.o.weekStart - S - 7) % 7 * 864e5),
                                A = new Date(Number(E) + (11 - E.getUTCDay()) % 7 * 864e5),
                                x = new Date(Number(x = n(A.getUTCFullYear(), 0, 1)) + (11 - x.getUTCDay()) % 7 * 864e5),
                                D = (A - x) / 864e5 / 7 + 1;
                            T.push('<td class="cw">' + D + "</td>")
                        }(C = this.getClassNames(k)).push("day");
                        var M = k.getUTCDate();
                        this.o.beforeShowDay !== e.noop && ((o = this.o.beforeShowDay(this._utc_to_local(k))) === t ? o = {} : "boolean" == typeof o ? o = { enabled: o } : "string" == typeof o && (o = { classes: o }), !1 === o.enabled && C.push("disabled"), o.classes && (C = C.concat(o.classes.split(/\s+/))), o.tooltip && (r = o.tooltip), o.content && (M = o.content)), C = e.isFunction(e.uniqueSort) ? e.uniqueSort(C) : e.unique(C), T.push('<td class="' + C.join(" ") + '"' + (r ? ' title="' + r + '"' : "") + ' data-date="' + k.getTime().toString() + '">' + M + "</td>"), r = null, S === this.o.weekEnd && T.push("</tr>"), k.setUTCDate(k.getUTCDate() + 1)
                    }
                    this.picker.find(".datepicker-days tbody").html(T.join(""));
                    var O = y[this.o.language].monthsTitle || y.en.monthsTitle || "Months",
                        I = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? O : s).end().find("tbody span").removeClass("active");
                    if (e.each(this.dates, function(e, t) { t.getUTCFullYear() === s && I.eq(t.getUTCMonth()).addClass("active") }), (s < c || s > d) && I.addClass("disabled"), s === c && I.slice(0, u).addClass("disabled"), s === d && I.slice(h + 1).addClass("disabled"), this.o.beforeShowMonth !== e.noop) {
                        var N = this;
                        e.each(I, function(n, i) {
                            var r = new Date(s, n, 1),
                                o = N.o.beforeShowMonth(r);
                            o === t ? o = {} : "boolean" == typeof o ? o = { enabled: o } : "string" == typeof o && (o = { classes: o }), !1 !== o.enabled || e(i).hasClass("disabled") || e(i).addClass("disabled"), o.classes && e(i).addClass(o.classes), o.tooltip && e(i).prop("title", o.tooltip)
                        })
                    }
                    this._fill_yearsView(".datepicker-years", "year", 10, s, c, d, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, s, c, d, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, s, c, d, this.o.beforeShowCentury)
                }
            },
            updateNavArrows: function() {
                if (this._allow_update) {
                    var e, t, n = new Date(this.viewDate),
                        i = n.getUTCFullYear(),
                        r = n.getUTCMonth(),
                        o = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
                        a = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
                        s = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
                        l = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
                        c = 1;
                    switch (this.viewMode) {
                        case 4:
                            c *= 10;
                        case 3:
                            c *= 10;
                        case 2:
                            c *= 10;
                        case 1:
                            e = Math.floor(i / c) * c <= o, t = Math.floor(i / c) * c + c > s;
                            break;
                        case 0:
                            e = i <= o && r <= a, t = i >= s && r >= l
                    }
                    this.picker.find(".prev").toggleClass("disabled", e), this.picker.find(".next").toggleClass("disabled", t)
                }
            },
            click: function(t) {
                var r, o, a, s;
                t.preventDefault(), t.stopPropagation(), (r = e(t.target)).hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), r.hasClass("today") && !r.hasClass("day") && (this.setViewMode(0), this._setDate(i(), "linked" === this.o.todayBtn ? null : "view")), r.hasClass("clear") && this.clearDates(), r.hasClass("disabled") || (r.hasClass("month") || r.hasClass("year") || r.hasClass("decade") || r.hasClass("century")) && (this.viewDate.setUTCDate(1), o = 1, 1 === this.viewMode ? (s = r.parent().find("span").index(r), a = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(s)) : (s = 0, a = Number(r.text()), this.viewDate.setUTCFullYear(a)), this._trigger(v.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(n(a, s, o)) : (this.setViewMode(this.viewMode - 1), this.fill())), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), delete this._focused_from
            },
            dayCellClick: function(t) {
                var n = e(t.currentTarget).data("date"),
                    i = new Date(n);
                this.o.updateViewDate && (i.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), i.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)), this._setDate(i)
            },
            navArrowsClick: function(t) {
                var n = e(t.currentTarget).hasClass("prev") ? -1 : 1;
                0 !== this.viewMode && (n *= 12 * v.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, n), this._trigger(v.viewModes[this.viewMode].e, this.viewDate), this.fill()
            },
            _toggle_multidate: function(e) {
                var t = this.dates.contains(e);
                if (e || this.dates.clear(), -1 !== t ? (!0 === this.o.multidate || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(t) : !1 === this.o.multidate ? (this.dates.clear(), this.dates.push(e)) : this.dates.push(e), "number" == typeof this.o.multidate)
                    for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
            },
            _setDate: function(e, t) { t && "date" !== t || this._toggle_multidate(e && new Date(e)), (!t && this.o.updateViewDate || "view" === t) && (this.viewDate = e && new Date(e)), this.fill(), this.setValue(), t && "view" === t || this._trigger("changeDate"), this.inputField.trigger("change"), !this.o.autoclose || t && "date" !== t || this.hide() },
            moveDay: function(e, t) { var n = new Date(e); return n.setUTCDate(e.getUTCDate() + t), n },
            moveWeek: function(e, t) { return this.moveDay(e, 7 * t) },
            moveMonth: function(e, t) {
                if (!a(e)) return this.o.defaultViewDate;
                if (!t) return e;
                var n, i, r = new Date(e.valueOf()),
                    o = r.getUTCDate(),
                    s = r.getUTCMonth(),
                    l = Math.abs(t);
                if (t = t > 0 ? 1 : -1, 1 === l) i = -1 === t ? function() { return r.getUTCMonth() === s } : function() { return r.getUTCMonth() !== n }, n = s + t, r.setUTCMonth(n), n = (n + 12) % 12;
                else {
                    for (var c = 0; c < l; c++) r = this.moveMonth(r, t);
                    n = r.getUTCMonth(), r.setUTCDate(o), i = function() { return n !== r.getUTCMonth() }
                }
                for (; i();) r.setUTCDate(--o), r.setUTCMonth(n);
                return r
            },
            moveYear: function(e, t) { return this.moveMonth(e, 12 * t) },
            moveAvailableDate: function(e, t, n) {
                do {
                    if (e = this[n](e, t), !this.dateWithinRange(e)) return !1;
                    n = "moveDay"
                } while (this.dateIsDisabled(e));
                return e
            },
            weekOfDateIsDisabled: function(t) { return -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled) },
            dateIsDisabled: function(t) { return this.weekOfDateIsDisabled(t) || e.grep(this.o.datesDisabled, function(e) { return r(t, e) }).length > 0 },
            dateWithinRange: function(e) { return e >= this.o.startDate && e <= this.o.endDate },
            keydown: function(e) {
                if (this.picker.is(":visible")) {
                    var t, n, i = !1,
                        r = this.focusDate || this.viewDate;
                    switch (e.keyCode) {
                        case 27:
                            this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), e.preventDefault(), e.stopPropagation();
                            break;
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                            if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                            t = 37 === e.keyCode || 38 === e.keyCode ? -1 : 1, 0 === this.viewMode ? e.ctrlKey ? (n = this.moveAvailableDate(r, t, "moveYear")) && this._trigger("changeYear", this.viewDate) : e.shiftKey ? (n = this.moveAvailableDate(r, t, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === e.keyCode || 39 === e.keyCode ? n = this.moveAvailableDate(r, t, "moveDay") : this.weekOfDateIsDisabled(r) || (n = this.moveAvailableDate(r, t, "moveWeek")) : 1 === this.viewMode ? (38 !== e.keyCode && 40 !== e.keyCode || (t *= 4), n = this.moveAvailableDate(r, t, "moveMonth")) : 2 === this.viewMode && (38 !== e.keyCode && 40 !== e.keyCode || (t *= 4), n = this.moveAvailableDate(r, t, "moveYear")), n && (this.focusDate = this.viewDate = n, this.setValue(), this.fill(), e.preventDefault());
                            break;
                        case 13:
                            if (!this.o.forceParse) break;
                            r = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(r), i = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (e.preventDefault(), e.stopPropagation(), this.o.autoclose && this.hide());
                            break;
                        case 9:
                            this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
                    }
                    i && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change"))
                } else 40 !== e.keyCode && 27 !== e.keyCode || (this.show(), e.stopPropagation())
            },
            setViewMode: function(e) { this.viewMode = e, this.picker.children("div").hide().filter(".datepicker-" + v.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate)) }
        };
        var h = function(t, n) { e.data(t, "datepicker", this), this.element = e(t), this.inputs = e.map(n.inputs, function(e) { return e.jquery ? e[0] : e }), delete n.inputs, this.keepEmptyValues = n.keepEmptyValues, delete n.keepEmptyValues, f.call(e(this.inputs), n).on("changeDate", e.proxy(this.dateUpdated, this)), this.pickers = e.map(this.inputs, function(t) { return e.data(t, "datepicker") }), this.updateDates() };
        h.prototype = {
            updateDates: function() { this.dates = e.map(this.pickers, function(e) { return e.getUTCDate() }), this.updateRanges() },
            updateRanges: function() {
                var t = e.map(this.dates, function(e) { return e.valueOf() });
                e.each(this.pickers, function(e, n) { n.setRange(t) })
            },
            clearDates: function() { e.each(this.pickers, function(e, t) { t.clearDates() }) },
            dateUpdated: function(n) {
                if (!this.updating) {
                    this.updating = !0;
                    var i = e.data(n.target, "datepicker");
                    if (i !== t) {
                        var r = i.getUTCDate(),
                            o = this.keepEmptyValues,
                            a = e.inArray(n.target, this.inputs),
                            s = a - 1,
                            l = a + 1,
                            c = this.inputs.length;
                        if (-1 !== a) {
                            if (e.each(this.pickers, function(e, t) { t.getUTCDate() || t !== i && o || t.setUTCDate(r) }), r < this.dates[s])
                                for (; s >= 0 && r < this.dates[s];) this.pickers[s--].setUTCDate(r);
                            else if (r > this.dates[l])
                                for (; l < c && r > this.dates[l];) this.pickers[l++].setUTCDate(r);
                            this.updateDates(), delete this.updating
                        }
                    }
                }
            },
            destroy: function() { e.map(this.pickers, function(e) { e.destroy() }), e(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker },
            remove: o("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
        };
        var p = e.fn.datepicker,
            f = function(n) {
                var i, r = Array.apply(null, arguments);
                if (r.shift(), this.each(function() {
                        var t = e(this),
                            o = t.data("datepicker"),
                            a = "object" == typeof n && n;
                        if (!o) {
                            var c = s(this, "date"),
                                u = l(e.extend({}, m, c, a).language),
                                p = e.extend({}, m, u, c, a);
                            t.hasClass("input-daterange") || p.inputs ? (e.extend(p, { inputs: p.inputs || t.find("input").toArray() }), o = new h(this, p)) : o = new d(this, p), t.data("datepicker", o)
                        }
                        "string" == typeof n && "function" == typeof o[n] && (i = o[n].apply(o, r))
                    }), i === t || i instanceof d || i instanceof h) return this;
                if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + n + " function)");
                return i
            };
        e.fn.datepicker = f;
        var m = e.fn.datepicker.defaults = { assumeNearbyYear: !1, autoclose: !1, beforeShowDay: e.noop, beforeShowMonth: e.noop, beforeShowYear: e.noop, beforeShowDecade: e.noop, beforeShowCentury: e.noop, calendarWeeks: !1, clearBtn: !1, toggleActive: !1, daysOfWeekDisabled: [], daysOfWeekHighlighted: [], datesDisabled: [], endDate: Infinity, forceParse: !0, format: "mm/dd/yyyy", keepEmptyValues: !1, keyboardNavigation: !0, language: "en", minViewMode: 0, maxViewMode: 4, multidate: !1, multidateSeparator: ",", orientation: "auto", rtl: !1, startDate: -Infinity, startView: 0, todayBtn: !1, todayHighlight: !1, updateViewDate: !0, weekStart: 0, disableTouchKeyboard: !1, enableOnReadonly: !0, showOnFocus: !0, zIndexOffset: 10, container: "body", immediateUpdates: !1, title: "", templates: { leftArrow: "&#x00AB;", rightArrow: "&#x00BB;" }, showWeekDays: !0 },
            g = e.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        e.fn.datepicker.Constructor = d;
        var y = e.fn.datepicker.dates = { en: { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", clear: "Clear", titleFormat: "MM yyyy" } },
            v = {
                viewModes: [{ names: ["days", "month"], clsName: "days", e: "changeMonth" }, { names: ["months", "year"], clsName: "months", e: "changeYear", navStep: 1 }, { names: ["years", "decade"], clsName: "years", e: "changeDecade", navStep: 10 }, { names: ["decades", "century"], clsName: "decades", e: "changeCentury", navStep: 100 }, { names: ["centuries", "millennium"], clsName: "centuries", e: "changeMillennium", navStep: 1e3 }],
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
                parseFormat: function(e) {
                    if ("function" == typeof e.toValue && "function" == typeof e.toDisplay) return e;
                    var t = e.replace(this.validParts, "\0").split("\0"),
                        n = e.match(this.validParts);
                    if (!t || !t.length || !n || 0 === n.length) throw new Error("Invalid date format.");
                    return { separators: t, parts: n }
                },
                parseDate: function(n, r, o, a) {
                    function s(e, t) { return !0 === t && (t = 10), e < 100 && (e += 2e3) > (new Date).getFullYear() + t && (e -= 100), e }

                    function l() {
                        var e = this.slice(0, c[p].length),
                            t = c[p].slice(0, e.length);
                        return e.toLowerCase() === t.toLowerCase()
                    }
                    if (!n) return t;
                    if (n instanceof Date) return n;
                    if ("string" == typeof r && (r = v.parseFormat(r)), r.toValue) return r.toValue(n, r, o);
                    var c, u, h, p, f, m = { d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear" },
                        g = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" };
                    if (n in g && (n = g[n]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(n)) { for (c = n.match(/([\-+]\d+)([dmwy])/gi), n = new Date, p = 0; p < c.length; p++) u = c[p].match(/([\-+]\d+)([dmwy])/i), h = Number(u[1]), f = m[u[2].toLowerCase()], n = d.prototype[f](n, h); return d.prototype._zero_utc_time(n) }
                    c = n && n.match(this.nonpunctuation) || [];
                    var b, k, w = {},
                        _ = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        S = { yyyy: function(e, t) { return e.setUTCFullYear(a ? s(t, a) : t) }, m: function(e, t) { if (isNaN(e)) return e; for (t -= 1; t < 0;) t += 12; for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() !== t;) e.setUTCDate(e.getUTCDate() - 1); return e }, d: function(e, t) { return e.setUTCDate(t) } };
                    S.yy = S.yyyy, S.M = S.MM = S.mm = S.m, S.dd = S.d, n = i();
                    var C = r.parts.slice();
                    if (c.length !== C.length && (C = e(C).filter(function(t, n) { return -1 !== e.inArray(n, _) }).toArray()), c.length === C.length) {
                        var T, E, A;
                        for (p = 0, T = C.length; p < T; p++) {
                            if (b = parseInt(c[p], 10), u = C[p], isNaN(b)) switch (u) {
                                case "MM":
                                    k = e(y[o].months).filter(l), b = e.inArray(k[0], y[o].months) + 1;
                                    break;
                                case "M":
                                    k = e(y[o].monthsShort).filter(l), b = e.inArray(k[0], y[o].monthsShort) + 1
                            }
                            w[u] = b
                        }
                        for (p = 0; p < _.length; p++)(A = _[p]) in w && !isNaN(w[A]) && (E = new Date(n), S[A](E, w[A]), isNaN(E) || (n = E))
                    }
                    return n
                },
                formatDate: function(t, n, i) {
                    if (!t) return "";
                    if ("string" == typeof n && (n = v.parseFormat(n)), n.toDisplay) return n.toDisplay(t, n, i);
                    var r = { d: t.getUTCDate(), D: y[i].daysShort[t.getUTCDay()], DD: y[i].days[t.getUTCDay()], m: t.getUTCMonth() + 1, M: y[i].monthsShort[t.getUTCMonth()], MM: y[i].months[t.getUTCMonth()], yy: t.getUTCFullYear().toString().substring(2), yyyy: t.getUTCFullYear() };
                    r.dd = (r.d < 10 ? "0" : "") + r.d, r.mm = (r.m < 10 ? "0" : "") + r.m, t = [];
                    for (var o = e.extend([], n.separators), a = 0, s = n.parts.length; a <= s; a++) o.length && t.push(o.shift()), t.push(r[n.parts[a]]);
                    return t.join("")
                },
                headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + m.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + m.templates.rightArrow + "</th></tr></thead>",
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
            };
        v.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + v.headTemplate + "<tbody></tbody>" + v.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + "</table></div></div>", e.fn.datepicker.DPGlobal = v, e.fn.datepicker.noConflict = function() { return e.fn.datepicker = p, this }, e.fn.datepicker.version = "1.9.0", e.fn.datepicker.deprecated = function(e) {
            var t = window.console;
            t && t.warn && t.warn("DEPRECATED: " + e)
        }, e(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(t) {
            var n = e(this);
            n.data("datepicker") || (t.preventDefault(), f.call(n, "show"))
        }), e(function() { f.call(e('[data-provide="datepicker-inline"]')) })
    }),
    function(e) { e.fn.datepicker.dates["en-CA"] = { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", monthsTitle: "Months", clear: "Clear", weekStart: 0, format: "yyyy-mm-dd" }, e.fn.datepicker.deprecated("This filename doesn't follow the convention, use bootstrap-datepicker.en-CA.js instead.") }(jQuery), jQuery.fn.datepicker.dates["ar-tn"] = { days: ["\u0627\u0644\u0623\u062d\u062f", "\u0627\u0644\u0627\u062b\u0646\u064a\u0646", "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062e\u0645\u064a\u0633", "\u0627\u0644\u062c\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062a", "\u0627\u0644\u0623\u062d\u062f"], daysShort: ["\u0623\u062d\u062f", "\u0627\u062b\u0646\u064a\u0646", "\u062b\u0644\u0627\u062b\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062e\u0645\u064a\u0633", "\u062c\u0645\u0639\u0629", "\u0633\u0628\u062a", "\u0623\u062d\u062f"], daysMin: ["\u062d", "\u0646", "\u062b", "\u0639", "\u062e", "\u062c", "\u0633", "\u062d"], months: ["\u062c\u0627\u0646\u0641\u064a", "\u0641\u064a\u0641\u0631\u064a", "\u0645\u0627\u0631\u0633", "\u0623\u0641\u0631\u064a\u0644", "\u0645\u0627\u064a", "\u062c\u0648\u0627\u0646", "\u062c\u0648\u064a\u0644\u064a\u0647", "\u0623\u0648\u062a", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"], monthsShort: ["\u062c\u0627\u0646\u0641\u064a", "\u0641\u064a\u0641\u0631\u064a", "\u0645\u0627\u0631\u0633", "\u0623\u0641\u0631\u064a\u0644", "\u0645\u0627\u064a", "\u062c\u0648\u0627\u0646", "\u062c\u0648\u064a\u0644\u064a\u0647", "\u0623\u0648\u062a", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"], today: "\u0647\u0630\u0627 \u0627\u0644\u064a\u0648\u0645", rtl: !0 }, jQuery.fn.datepicker.dates.ar = { days: ["\u0627\u0644\u0623\u062d\u062f", "\u0627\u0644\u0627\u062b\u0646\u064a\u0646", "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062e\u0645\u064a\u0633", "\u0627\u0644\u062c\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062a", "\u0627\u0644\u0623\u062d\u062f"], daysShort: ["\u0623\u062d\u062f", "\u0627\u062b\u0646\u064a\u0646", "\u062b\u0644\u0627\u062b\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062e\u0645\u064a\u0633", "\u062c\u0645\u0639\u0629", "\u0633\u0628\u062a", "\u0623\u062d\u062f"], daysMin: ["\u062d", "\u0646", "\u062b", "\u0639", "\u062e", "\u062c", "\u0633", "\u062d"], months: ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"], monthsShort: ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"], today: "\u0647\u0630\u0627 \u0627\u0644\u064a\u0648\u0645", rtl: !0 }, jQuery.fn.datepicker.dates.az = { days: ["Bazar", "Bazar ert\u0259si", "\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131", "\xc7\u0259r\u015f\u0259nb\u0259", "C\xfcm\u0259 ax\u015fam\u0131", "C\xfcm\u0259", "\u015e\u0259nb\u0259"], daysShort: ["B.", "B.e", "\xc7.a", "\xc7.", "C.a", "C.", "\u015e."], daysMin: ["B.", "B.e", "\xc7.a", "\xc7.", "C.a", "C.", "\u015e."], months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "\u0130yun", "\u0130yul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"], monthsShort: ["Yan", "Fev", "Mar", "Apr", "May", "\u0130yun", "\u0130yul", "Avq", "Sen", "Okt", "Noy", "Dek"], today: "Bu g\xfcn", weekStart: 1, clear: "T\u0259mizl\u0259", monthsTitle: "Aylar" }, jQuery.fn.datepicker.dates.bg = { days: ["\u041d\u0435\u0434\u0435\u043b\u044f", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u044f\u0434\u0430", "\u0427\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a", "\u041f\u0435\u0442\u044a\u043a", "\u0421\u044a\u0431\u043e\u0442\u0430"], daysShort: ["\u041d\u0435\u0434", "\u041f\u043e\u043d", "\u0412\u0442\u043e", "\u0421\u0440\u044f", "\u0427\u0435\u0442", "\u041f\u0435\u0442", "\u0421\u044a\u0431"], daysMin: ["\u041d", "\u041f", "\u0412", "\u0421", "\u0427", "\u041f", "\u0421"], months: ["\u042f\u043d\u0443\u0430\u0440\u0438", "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0438\u043b", "\u041c\u0430\u0439", "\u042e\u043d\u0438", "\u042e\u043b\u0438", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438", "\u041e\u043a\u0442\u043e\u043c\u0432\u0440\u0438", "\u041d\u043e\u0435\u043c\u0432\u0440\u0438", "\u0414\u0435\u043a\u0435\u043c\u0432\u0440\u0438"], monthsShort: ["\u042f\u043d", "\u0424\u0435\u0432", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0439", "\u042e\u043d\u0438", "\u042e\u043b\u0438", "\u0410\u0432\u0433", "\u0421\u0435\u043f", "\u041e\u043a\u0442", "\u041d\u043e\u0435", "\u0414\u0435\u043a"], today: "\u0434\u043d\u0435\u0441" }, jQuery.fn.datepicker.dates.bm = { days: ["Kari", "Nt\u025bn\u025bn", "Tarata", "Araba", "Alamisa", "Juma", "Sibiri"], daysShort: ["Kar", "Nt\u025b", "Tar", "Ara", "Ala", "Jum", "Sib"], daysMin: ["Ka", "Nt", "Ta", "Ar", "Al", "Ju", "Si"], months: ["Zanwuyekalo", "Fewuruyekalo", "Marisikalo", "Awirilikalo", "M\u025bkalo", "Zuw\u025bnkalo", "Zuluyekalo", "Utikalo", "S\u025btanburukalo", "\u0254kut\u0254burukalo", "Nowanburukalo", "Desanburukalo"], monthsShort: ["Zan", "Few", "Mar", "Awi", "M\u025b", "Zuw", "Zul", "Uti", "S\u025bt", "\u0254ku", "Now", "Des"], today: "Bi", monthsTitle: "Kalo", clear: "Ka j\u0254si", weekStart: 1, format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates.bn = { days: ["\u09b0\u09ac\u09bf\u09ac\u09be\u09b0", "\u09b8\u09cb\u09ae\u09ac\u09be\u09b0", "\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0", "\u09ac\u09c1\u09a7\u09ac\u09be\u09b0", "\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0", "\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0", "\u09b6\u09a8\u09bf\u09ac\u09be\u09b0"], daysShort: ["\u09b0\u09ac\u09bf\u09ac\u09be\u09b0", "\u09b8\u09cb\u09ae\u09ac\u09be\u09b0", "\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0", "\u09ac\u09c1\u09a7\u09ac\u09be\u09b0", "\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0", "\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0", "\u09b6\u09a8\u09bf\u09ac\u09be\u09b0"], daysMin: ["\u09b0\u09ac\u09bf", "\u09b8\u09cb\u09ae", "\u09ae\u0999\u09cd\u0997\u09b2", "\u09ac\u09c1\u09a7", "\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf", "\u09b6\u09c1\u0995\u09cd\u09b0", "\u09b6\u09a8\u09bf"], months: ["\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0", "\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09bf", "\u09ae\u09be\u09b0\u09cd\u099a", "\u098f\u09aa\u09cd\u09b0\u09bf\u09b2", "\u09ae\u09c7", "\u099c\u09c1\u09a8", "\u099c\u09c1\u09b2\u09be\u0987", "\u0985\u0997\u09be\u09b8\u09cd\u099f", "\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0", "\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0", "\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0", "\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0"], monthsShort: ["\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0", "\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09bf", "\u09ae\u09be\u09b0\u09cd\u099a", "\u098f\u09aa\u09cd\u09b0\u09bf\u09b2", "\u09ae\u09c7", "\u099c\u09c1\u09a8", "\u099c\u09c1\u09b2\u09be\u0987", "\u0985\u0997\u09be\u09b8\u09cd\u099f", "\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0", "\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0", "\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0", "\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0"], today: "\u0986\u099c", monthsTitle: "\u09ae\u09be\u09b8", clear: "\u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0", weekStart: 0, format: "mm/dd/yyyy" }, jQuery.fn.datepicker.dates.br = { days: ["Sul", "Lun", "Meurzh", "Merc'her", "Yaou", "Gwener", "Sadorn"], daysShort: ["Sul", "Lun", "Meu.", "Mer.", "Yao.", "Gwe.", "Sad."], daysMin: ["Su", "L", "Meu", "Mer", "Y", "G", "Sa"], months: ["Genver", "C'hwevrer", "Meurzh", "Ebrel", "Mae", "Mezheven", "Gouere", "Eost", "Gwengolo", "Here", "Du", "Kerzu"], monthsShort: ["Genv.", "C'hw.", "Meur.", "Ebre.", "Mae", "Mezh.", "Goue.", "Eost", "Gwen.", "Here", "Du", "Kerz."], today: "Hiziv", monthsTitle: "Miz", clear: "Dilemel", weekStart: 1, format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates.bs = { days: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010cetvrtak", "Petak", "Subota"], daysShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"], daysMin: ["N", "Po", "U", "Sr", "\u010c", "Pe", "Su"], months: ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli", "August", "Septembar", "Oktobar", "Novembar", "Decembar"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"], today: "Danas", weekStart: 1, format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates.ca = { days: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"], daysShort: ["Diu", "Dil", "Dmt", "Dmc", "Dij", "Div", "Dis"], daysMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"], months: ["Gener", "Febrer", "Mar\xe7", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"], monthsShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"], today: "Avui", monthsTitle: "Mesos", clear: "Esborrar", weekStart: 1, format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates.cs = { days: ["Ned\u011ble", "Pond\u011bl\xed", "\xdater\xfd", "St\u0159eda", "\u010ctvrtek", "P\xe1tek", "Sobota"], daysShort: ["Ned", "Pon", "\xdate", "St\u0159", "\u010ctv", "P\xe1t", "Sob"], daysMin: ["Ne", "Po", "\xdat", "St", "\u010ct", "P\xe1", "So"], months: ["Leden", "\xdanor", "B\u0159ezen", "Duben", "Kv\u011bten", "\u010cerven", "\u010cervenec", "Srpen", "Z\xe1\u0159\xed", "\u0158\xedjen", "Listopad", "Prosinec"], monthsShort: ["Led", "\xdano", "B\u0159e", "Dub", "Kv\u011b", "\u010cer", "\u010cnc", "Srp", "Z\xe1\u0159", "\u0158\xedj", "Lis", "Pro"], today: "Dnes", clear: "Vymazat", monthsTitle: "M\u011bs\xedc", weekStart: 1, format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates.cy = { days: ["Sul", "Llun", "Mawrth", "Mercher", "Iau", "Gwener", "Sadwrn"], daysShort: ["Sul", "Llu", "Maw", "Mer", "Iau", "Gwe", "Sad"], daysMin: ["Su", "Ll", "Ma", "Me", "Ia", "Gwe", "Sa"], months: ["Ionawr", "Chewfror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorfennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"], monthsShort: ["Ion", "Chw", "Maw", "Ebr", "Mai", "Meh", "Gor", "Aws", "Med", "Hyd", "Tach", "Rha"], today: "Heddiw" }, jQuery.fn.datepicker.dates.da = { days: ["S\xf8ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\xf8rdag"], daysShort: ["S\xf8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xf8r"], daysMin: ["S\xf8", "Ma", "Ti", "On", "To", "Fr", "L\xf8"], months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"], today: "I Dag", weekStart: 1, clear: "Nulstil", format: "dd/mm/yyyy", monthsTitle: "M\xe5neder" }, jQuery.fn.datepicker.dates.de = { days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], daysShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"], daysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], months: ["Januar", "Februar", "M\xe4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], monthsShort: ["Jan", "Feb", "M\xe4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], today: "Heute", monthsTitle: "Monate", clear: "L\xf6schen", weekStart: 1, format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates.el = { days: ["\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae", "\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1", "\u03a4\u03c1\u03af\u03c4\u03b7", "\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7", "\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7", "\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae", "\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf"], daysShort: ["\u039a\u03c5\u03c1", "\u0394\u03b5\u03c5", "\u03a4\u03c1\u03b9", "\u03a4\u03b5\u03c4", "\u03a0\u03b5\u03bc", "\u03a0\u03b1\u03c1", "\u03a3\u03b1\u03b2"], daysMin: ["\u039a\u03c5", "\u0394\u03b5", "\u03a4\u03c1", "\u03a4\u03b5", "\u03a0\u03b5", "\u03a0\u03b1", "\u03a3\u03b1"], months: ["\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2", "\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2", "\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2", "\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2", "\u039c\u03ac\u03b9\u03bf\u03c2", "\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2", "\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2", "\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2", "\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2", "\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2", "\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2", "\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2"], monthsShort: ["\u0399\u03b1\u03bd", "\u03a6\u03b5\u03b2", "\u039c\u03b1\u03c1", "\u0391\u03c0\u03c1", "\u039c\u03ac\u03b9", "\u0399\u03bf\u03c5\u03bd", "\u0399\u03bf\u03c5\u03bb", "\u0391\u03c5\u03b3", "\u03a3\u03b5\u03c0", "\u039f\u03ba\u03c4", "\u039d\u03bf\u03b5", "\u0394\u03b5\u03ba"], today: "\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1", clear: "\u039a\u03b1\u03b8\u03b1\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2", weekStart: 1, format: "d/m/yyyy" }, jQuery.fn.datepicker.dates["en-AU"] = { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", monthsTitle: "Months", clear: "Clear", weekStart: 1, format: "d/mm/yyyy" }, jQuery.fn.datepicker.dates["en-CA"] = { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", monthsTitle: "Months", clear: "Clear", weekStart: 0, format: "yyyy-mm-dd" }, jQuery.fn.datepicker.dates["en-GB"] = { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", monthsTitle: "Months", clear: "Clear", weekStart: 1, format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates["en-IE"] = { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", monthsTitle: "Months", clear: "Clear", weekStart: 1, format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates["en-NZ"] = { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", monthsTitle: "Months", clear: "Clear", weekStart: 1, format: "d/mm/yyyy" }, jQuery.fn.datepicker.dates["en-ZA"] = { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", monthsTitle: "Months", clear: "Clear", weekStart: 1, format: "yyyy/mm/d" }, jQuery.fn.datepicker.dates.eo = { days: ["diman\u0109o", "lundo", "mardo", "merkredo", "\u0135a\u016ddo", "vendredo", "sabato"], daysShort: ["dim.", "lun.", "mar.", "mer.", "\u0135a\u016d.", "ven.", "sam."], daysMin: ["d", "l", "ma", "me", "\u0135", "v", "s"], months: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "a\u016dgusto", "septembro", "oktobro", "novembro", "decembro"], monthsShort: ["jan.", "feb.", "mar.", "apr.", "majo", "jun.", "jul.", "a\u016dg.", "sep.", "okt.", "nov.", "dec."], today: "Hodia\u016d", clear: "Nuligi", weekStart: 1, format: "yyyy-mm-dd" }, jQuery.fn.datepicker.dates.es = { days: ["Domingo", "Lunes", "Martes", "Mi\xe9rcoles", "Jueves", "Viernes", "S\xe1bado"], daysShort: ["Dom", "Lun", "Mar", "Mi\xe9", "Jue", "Vie", "S\xe1b"], daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"], today: "Hoy", monthsTitle: "Meses", clear: "Borrar", weekStart: 1, format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates.et = { days: ["P\xfchap\xe4ev", "Esmasp\xe4ev", "Teisip\xe4ev", "Kolmap\xe4ev", "Neljap\xe4ev", "Reede", "Laup\xe4ev"], daysShort: ["P\xfchap", "Esmasp", "Teisip", "Kolmap", "Neljap", "Reede", "Laup"], daysMin: ["P", "E", "T", "K", "N", "R", "L"], months: ["Jaanuar", "Veebruar", "M\xe4rts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"], monthsShort: ["Jaan", "Veebr", "M\xe4rts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"], today: "T\xe4na", clear: "T\xfchjenda", weekStart: 1, format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates.eu = { days: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"], daysShort: ["Ig", "Al", "Ar", "Az", "Og", "Ol", "Lr"], daysMin: ["Ig", "Al", "Ar", "Az", "Og", "Ol", "Lr"], months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"], monthsShort: ["Urt", "Ots", "Mar", "Api", "Mai", "Eka", "Uzt", "Abu", "Ira", "Urr", "Aza", "Abe"], today: "Gaur", monthsTitle: "Hilabeteak", clear: "Ezabatu", weekStart: 1, format: "yyyy/mm/dd" }, jQuery.fn.datepicker.dates.fa = { days: ["\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647", "\u062f\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647\u200c\u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647", "\u062c\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647", "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647"], daysShort: ["\u06cc\u06a9", "\u062f\u0648", "\u0633\u0647", "\u0686\u0647\u0627\u0631", "\u067e\u0646\u062c", "\u062c\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647", "\u06cc\u06a9"], daysMin: ["\u06cc", "\u062f", "\u0633", "\u0686", "\u067e", "\u062c", "\u0634", "\u06cc"], months: ["\u0698\u0627\u0646\u0648\u06cc\u0647", "\u0641\u0648\u0631\u06cc\u0647", "\u0645\u0627\u0631\u0633", "\u0622\u0648\u0631\u06cc\u0644", "\u0645\u0647", "\u0698\u0648\u0626\u0646", "\u0698\u0648\u0626\u06cc\u0647", "\u0627\u0648\u062a", "\u0633\u067e\u062a\u0627\u0645\u0628\u0631", "\u0627\u06a9\u062a\u0628\u0631", "\u0646\u0648\u0627\u0645\u0628\u0631", "\u062f\u0633\u0627\u0645\u0628\u0631"], monthsShort: ["\u0698\u0627\u0646", "\u0641\u0648\u0631", "\u0645\u0627\u0631", "\u0622\u0648\u0631", "\u0645\u0647", "\u0698\u0648\u0646", "\u0698\u0648\u06cc", "\u0627\u0648\u062a", "\u0633\u067e\u062a", "\u0627\u06a9\u062a", "\u0646\u0648\u0627", "\u062f\u0633\u0627"], today: "\u0627\u0645\u0631\u0648\u0632", clear: "\u067e\u0627\u06a9 \u06a9\u0646", weekStart: 1, format: "yyyy/mm/dd" }, jQuery.fn.datepicker.dates.fi = { days: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"], daysShort: ["sun", "maa", "tii", "kes", "tor", "per", "lau"], daysMin: ["su", "ma", "ti", "ke", "to", "pe", "la"], months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kes\xe4kuu", "hein\xe4kuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"], monthsShort: ["tam", "hel", "maa", "huh", "tou", "kes", "hei", "elo", "syy", "lok", "mar", "jou"], today: "t\xe4n\xe4\xe4n", clear: "Tyhjenn\xe4", weekStart: 1, format: "d.m.yyyy" }, jQuery.fn.datepicker.dates.fo = { days: ["Sunnudagur", "M\xe1nadagur", "T\xfdsdagur", "Mikudagur", "H\xf3sdagur", "Fr\xedggjadagur", "Leygardagur"], daysShort: ["Sun", "M\xe1n", "T\xfds", "Mik", "H\xf3s", "Fr\xed", "Ley"], daysMin: ["Su", "M\xe1", "T\xfd", "Mi", "H\xf3", "Fr", "Le"], months: ["Januar", "Februar", "Marts", "Apr\xedl", "Mei", "Juni", "Juli", "August", "Septembur", "Oktobur", "Novembur", "Desembur"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], today: "\xcd Dag", clear: "Reinsa" }, jQuery.fn.datepicker.dates.fr = { days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"], daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"], daysMin: ["D", "L", "Ma", "Me", "J", "V", "S"], months: ["Janvier", "F\xe9vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao\xfbt", "Septembre", "Octobre", "Novembre", "D\xe9cembre"], monthsShort: ["Jan", "F\xe9v", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "D\xe9c"], today: "Aujourd'hui", monthsTitle: "Mois", clear: "Effacer", weekStart: 1, format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates.fr = { days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], daysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], daysMin: ["d", "l", "ma", "me", "j", "v", "s"], months: ["janvier", "f\xe9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xfbt", "septembre", "octobre", "novembre", "d\xe9cembre"], monthsShort: ["janv.", "f\xe9vr.", "mars", "avril", "mai", "juin", "juil.", "ao\xfbt", "sept.", "oct.", "nov.", "d\xe9c."], today: "Aujourd'hui", monthsTitle: "Mois", clear: "Effacer", weekStart: 1, format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates.gl = { days: ["Domingo", "Luns", "Martes", "M\xe9rcores", "Xoves", "Venres", "S\xe1bado"], daysShort: ["Dom", "Lun", "Mar", "M\xe9r", "Xov", "Ven", "S\xe1b"], daysMin: ["Do", "Lu", "Ma", "Me", "Xo", "Ve", "Sa"], months: ["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xu\xf1o", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"], monthsShort: ["Xan", "Feb", "Mar", "Abr", "Mai", "Xun", "Xul", "Ago", "Sep", "Out", "Nov", "Dec"], today: "Hoxe", clear: "Limpar", weekStart: 1, format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates.he = { days: ["\u05e8\u05d0\u05e9\u05d5\u05df", "\u05e9\u05e0\u05d9", "\u05e9\u05dc\u05d9\u05e9\u05d9", "\u05e8\u05d1\u05d9\u05e2\u05d9", "\u05d7\u05de\u05d9\u05e9\u05d9", "\u05e9\u05d9\u05e9\u05d9", "\u05e9\u05d1\u05ea", "\u05e8\u05d0\u05e9\u05d5\u05df"], daysShort: ["\u05d0", "\u05d1", "\u05d2", "\u05d3", "\u05d4", "\u05d5", "\u05e9", "\u05d0"], daysMin: ["\u05d0", "\u05d1", "\u05d2", "\u05d3", "\u05d4", "\u05d5", "\u05e9", "\u05d0"], months: ["\u05d9\u05e0\u05d5\u05d0\u05e8", "\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8", "\u05de\u05e8\u05e5", "\u05d0\u05e4\u05e8\u05d9\u05dc", "\u05de\u05d0\u05d9", "\u05d9\u05d5\u05e0\u05d9", "\u05d9\u05d5\u05dc\u05d9", "\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8", "\u05e1\u05e4\u05d8\u05de\u05d1\u05e8", "\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8", "\u05e0\u05d5\u05d1\u05de\u05d1\u05e8", "\u05d3\u05e6\u05de\u05d1\u05e8"], monthsShort: ["\u05d9\u05e0\u05d5", "\u05e4\u05d1\u05e8", "\u05de\u05e8\u05e5", "\u05d0\u05e4\u05e8", "\u05de\u05d0\u05d9", "\u05d9\u05d5\u05e0", "\u05d9\u05d5\u05dc", "\u05d0\u05d5\u05d2", "\u05e1\u05e4\u05d8", "\u05d0\u05d5\u05e7", "\u05e0\u05d5\u05d1", "\u05d3\u05e6\u05de"], today: "\u05d4\u05d9\u05d5\u05dd", rtl: !0 }, jQuery.fn.datepicker.dates.hi = { days: ["\u0930\u0935\u093f\u0935\u093e\u0930", "\u0938\u094b\u092e\u0935\u093e\u0930", "\u092e\u0902\u0917\u0932\u0935\u093e\u0930", "\u092c\u0941\u0927\u0935\u093e\u0930", "\u0917\u0941\u0930\u0941\u0935\u093e\u0930", "\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930", "\u0936\u0928\u093f\u0935\u093e\u0930"], daysShort: ["\u0938\u0942\u0930\u094d\u092f", "\u0938\u094b\u092e", "\u092e\u0902\u0917\u0932", "\u092c\u0941\u0927", "\u0917\u0941\u0930\u0941", "\u0936\u0941\u0915\u094d\u0930", "\u0936\u0928\u093f"], daysMin: ["\u0930", "\u0938\u094b", "\u092e\u0902", "\u092c\u0941", "\u0917\u0941", "\u0936\u0941", "\u0936"], months: ["\u091c\u0928\u0935\u0930\u0940", "\u092b\u093c\u0930\u0935\u0930\u0940", "\u092e\u093e\u0930\u094d\u091a", "\u0905\u092a\u094d\u0930\u0948\u0932", "\u092e\u0908", "\u091c\u0942\u0928", "\u091c\u0941\u0932\u093e\u0908", "\u0905\u0917\u0938\u094d\u0924", "\u0938\u093f\u0924\u092e\u094d\u092c\u0930", "\u0905\u0915\u094d\u091f\u0942\u092c\u0930", "\u0928\u0935\u0902\u092c\u0930", "\u0926\u093f\u0938\u092e\u094d\u092c\u0930"], monthsShort: ["\u091c\u0928", "\u092b\u093c\u0930\u0935\u0930\u0940", "\u092e\u093e\u0930\u094d\u091a", "\u0905\u092a\u094d\u0930\u0948\u0932", "\u092e\u0908", "\u091c\u0942\u0928", "\u091c\u0941\u0932\u093e\u0908", "\u0905\u0917\u0938\u094d\u0924", "\u0938\u093f\u0924\u0902", "\u0905\u0915\u094d\u091f\u0942\u092c\u0930", "\u0928\u0935\u0902", "\u0926\u093f\u0938\u092e\u094d\u092c\u0930"], today: "\u0906\u091c", monthsTitle: "\u092e\u0939\u0940\u0928\u0947", clear: "\u0938\u093e\u092b", weekStart: 1, format: "dd / mm / yyyy" }, jQuery.fn.datepicker.dates.hr = { days: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010cetvrtak", "Petak", "Subota"], daysShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"], daysMin: ["Ne", "Po", "Ut", "Sr", "\u010ce", "Pe", "Su"], months: ["Sije\u010danj", "Velja\u010da", "O\u017eujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"], monthsShort: ["Sij", "Velj", "O\u017eu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"], today: "Danas" }, jQuery.fn.datepicker.dates.hu = { days: ["vas\xe1rnap", "h\xe9tf\u0151", "kedd", "szerda", "cs\xfct\xf6rt\xf6k", "p\xe9ntek", "szombat"], daysShort: ["vas", "h\xe9t", "ked", "sze", "cs\xfc", "p\xe9n", "szo"], daysMin: ["V", "H", "K", "Sze", "Cs", "P", "Szo"], months: ["janu\xe1r", "febru\xe1r", "m\xe1rcius", "\xe1prilis", "m\xe1jus", "j\xfanius", "j\xfalius", "augusztus", "szeptember", "okt\xf3ber", "november", "december"], monthsShort: ["jan", "feb", "m\xe1r", "\xe1pr", "m\xe1j", "j\xfan", "j\xfal", "aug", "sze", "okt", "nov", "dec"], today: "ma", weekStart: 1, clear: "t\xf6r\xf6l", titleFormat: "yyyy. MM", format: "yyyy.mm.dd" }, jQuery.fn.datepicker.dates.hy = { days: ["\u053f\u056b\u0580\u0561\u056f\u056b", "\u0535\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b", "\u0535\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b", "\u0549\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b", "\u0540\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b", "\u0548\u0582\u0580\u0562\u0561\u0569", "\u0547\u0561\u0562\u0561\u0569"], daysShort: ["\u053f\u056b\u0580", "\u0535\u0580\u056f", "\u0535\u0580\u0565", "\u0549\u0578\u0580", "\u0540\u056b\u0576", "\u0548\u0582\u0580\u0562", "\u0547\u0561\u0562"], daysMin: ["\u053f\u056b", "\u0535\u056f", "\u0535\u0584", "\u0549\u0578", "\u0540\u056b", "\u0548\u0582", "\u0547\u0561"], months: ["\u0540\u0578\u0582\u0576\u057e\u0561\u0580", "\u0553\u0565\u057f\u0580\u057e\u0561\u0580", "\u0544\u0561\u0580\u057f", "\u0531\u057a\u0580\u056b\u056c", "\u0544\u0561\u0575\u056b\u057d", "\u0540\u0578\u0582\u0576\u056b\u057d", "\u0540\u0578\u0582\u056c\u056b\u057d", "\u0555\u0563\u0578\u057d\u057f\u0578\u057d", "\u054d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580", "\u0540\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580", "\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580", "\u0534\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580"], monthsShort: ["\u0540\u0576\u057e", "\u0553\u0565\u057f", "\u0544\u0561\u0580", "\u0531\u057a\u0580", "\u0544\u0561\u0575", "\u0540\u0578\u0582\u0576", "\u0540\u0578\u0582\u056c", "\u0555\u0563\u057d", "\u054d\u0565\u057a", "\u0540\u0578\u056f", "\u0546\u0578\u0575", "\u0534\u0565\u056f"], today: "\u0531\u0575\u057d\u0585\u0580", clear: "\u054b\u0576\u057b\u0565\u056c", format: "dd.mm.yyyy", weekStart: 1, monthsTitle: "\u0531\u0574\u056b\u057d\u0576\u0567\u0580" }, jQuery.fn.datepicker.dates.id = { days: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"], daysShort: ["Mgu", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"], daysMin: ["Mg", "Sn", "Sl", "Ra", "Ka", "Ju", "Sa"], months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"], today: "Hari Ini", clear: "Kosongkan" }, jQuery.fn.datepicker.dates.is = { days: ["Sunnudagur", "M\xe1nudagur", "\xderi\xf0judagur", "Mi\xf0vikudagur", "Fimmtudagur", "F\xf6studagur", "Laugardagur"], daysShort: ["Sun", "M\xe1n", "\xderi", "Mi\xf0", "Fim", "F\xf6s", "Lau"], daysMin: ["Su", "M\xe1", "\xder", "Mi", "Fi", "F\xf6", "La"], months: ["Jan\xfaar", "Febr\xfaar", "Mars", "Apr\xedl", "Ma\xed", "J\xfan\xed", "J\xfal\xed", "\xc1g\xfast", "September", "Okt\xf3ber", "N\xf3vember", "Desember"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Ma\xed", "J\xfan", "J\xfal", "\xc1g\xfa", "Sep", "Okt", "N\xf3v", "Des"], today: "\xcd Dag" }, jQuery.fn.datepicker.dates.it = { days: ["Domenica", "Luned\xec", "Marted\xec", "Mercoled\xec", "Gioved\xec", "Venerd\xec", "Sabato"], daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"], daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"], months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"], monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"], today: "Oggi", clear: "Cancella", weekStart: 1, format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates.it = { days: ["Domenica", "Luned\xec", "Marted\xec", "Mercoled\xec", "Gioved\xec", "Venerd\xec", "Sabato"], daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"], daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"], months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"], monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"], today: "Oggi", monthsTitle: "Mesi", clear: "Cancella", weekStart: 1, format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates.ja = { days: ["\u65e5\u66dc", "\u6708\u66dc", "\u706b\u66dc", "\u6c34\u66dc", "\u6728\u66dc", "\u91d1\u66dc", "\u571f\u66dc"], daysShort: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"], daysMin: ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"], months: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], today: "\u4eca\u65e5", format: "yyyy/mm/dd", titleFormat: "yyyy\u5e74mm\u6708", clear: "\u30af\u30ea\u30a2" }, jQuery.fn.datepicker.dates.ka = {
        days: ["\u10d9\u10d5\u10d8\u10e0\u10d0", "\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8", "\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8", "\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8"],
        daysShort: ["\u10d9\u10d5\u10d8", "\u10dd\u10e0\u10e8", "\u10e1\u10d0\u10db", "\u10dd\u10d7\u10ee", "\u10ee\u10e3\u10d7", "\u10de\u10d0\u10e0", "\u10e8\u10d0\u10d1"],
        daysMin: ["\u10d9\u10d5", "\u10dd\u10e0", "\u10e1\u10d0", "\u10dd\u10d7", "\u10ee\u10e3", "\u10de\u10d0", "\u10e8\u10d0"],
        months: ["\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8", "\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8", "\u10db\u10d0\u10e0\u10e2\u10d8", "\u10d0\u10de\u10e0\u10d8\u10da\u10d8", "\u10db\u10d0\u10d8\u10e1\u10d8", "\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8", "\u10d8\u10d5\u10da\u10d8\u10e1\u10d8", "\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd", "\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8", "\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8", "\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8", "\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8"],
        monthsShort: ["\u10d8\u10d0\u10dc", "\u10d7\u10d4\u10d1", "\u10db\u10d0\u10e0", "\u10d0\u10de\u10e0", "\u10db\u10d0\u10d8", "\u10d8\u10d5\u10dc", "\u10d8\u10d5\u10da", "\u10d0\u10d2\u10d5", "\u10e1\u10d4\u10e5", "\u10dd\u10e5\u10e2", "\u10dc\u10dd\u10d4", "\u10d3\u10d4\u10d9"],
        today: "\u10d3\u10e6\u10d4\u10e1",
        clear: "\u10d2\u10d0\u10e1\u10e3\u10e4\u10d7\u10d0\u10d5\u10d4\u10d1\u10d0",
        weekStart: 1,
        format: "dd.mm.yyyy"
    },
    function(e) { e.fn.datepicker.dates.kh = { days: ["\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799", "\u1785\u1793\u17d2\u1791", "\u17a2\u1784\u17d2\u1782\u17b6\u179a", "\u1796\u17bb\u1792", "\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd", "\u179f\u17bb\u1780\u17d2\u179a", "\u179f\u17c5\u179a\u17cd"], daysShort: ["\u17a2\u17b6.\u1791\u17b7", "\u1785\u1793\u17d2\u1791", "\u17a2\u1784\u17d2\u1782\u17b6\u179a", "\u1796\u17bb\u1792", "\u1796\u17d2\u179a.\u17a0", "\u179f\u17bb\u1780\u17d2\u179a", "\u179f\u17c5\u179a\u17cd"], daysMin: ["\u17a2\u17b6.\u1791\u17b7", "\u1785\u1793\u17d2\u1791", "\u17a2\u1784\u17d2\u1782\u17b6\u179a", "\u1796\u17bb\u1792", "\u1796\u17d2\u179a.\u17a0", "\u179f\u17bb\u1780\u17d2\u179a", "\u179f\u17c5\u179a\u17cd"], months: ["\u1798\u1780\u179a\u17b6", "\u1780\u17bb\u1798\u17d2\u1797\u17c7", "\u1798\u17b7\u1793\u17b6", "\u1798\u17c1\u179f\u17b6", "\u17a7\u179f\u1797\u17b6", "\u1798\u17b7\u1790\u17bb\u1793\u17b6", "\u1780\u1780\u17d2\u1780\u178a\u17b6", "\u179f\u17b8\u17a0\u17b6", "\u1780\u1789\u17d2\u1789\u17b6", "\u178f\u17bb\u179b\u17b6", "\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6", "\u1792\u17d2\u1793\u17bc"], monthsShort: ["\u1798\u1780\u179a\u17b6", "\u1780\u17bb\u1798\u17d2\u1797\u17c7", "\u1798\u17b7\u1793\u17b6", "\u1798\u17c1\u179f\u17b6", "\u17a7\u179f\u1797\u17b6", "\u1798\u17b7\u1790\u17bb\u1793\u17b6", "\u1780\u1780\u17d2\u1780\u178a\u17b6", "\u179f\u17b8\u17a0\u17b6", "\u1780\u1789\u17d2\u1789\u17b6", "\u178f\u17bb\u179b\u17b6", "\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6", "\u1792\u17d2\u1793\u17bc"], today: "\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7", clear: "\u179f\u17c6\u17a2\u17b6\u178f" }, e.fn.datepicker.deprecated('The language code "kh" is deprecated and will be removed in 2.0. For Khmer support use "km" instead.') }(jQuery), jQuery.fn.datepicker.dates.kk = { days: ["\u0416\u0435\u043a\u0441\u0435\u043d\u0431\u0456", "\u0414\u04af\u0439\u0441\u0435\u043d\u0431\u0456", "\u0421\u0435\u0439\u0441\u0435\u043d\u0431\u0456", "\u0421\u04d9\u0440\u0441\u0435\u043d\u0431\u0456", "\u0411\u0435\u0439\u0441\u0435\u043d\u0431\u0456", "\u0416\u04b1\u043c\u0430", "\u0421\u0435\u043d\u0431\u0456"], daysShort: ["\u0416\u0435\u043a", "\u0414\u04af\u0439", "\u0421\u0435\u0439", "\u0421\u04d9\u0440", "\u0411\u0435\u0439", "\u0416\u04b1\u043c", "\u0421\u0435\u043d"], daysMin: ["\u0416\u043a", "\u0414\u0441", "\u0421\u0441", "\u0421\u0440", "\u0411\u0441", "\u0416\u043c", "\u0421\u043d"], months: ["\u049a\u0430\u04a3\u0442\u0430\u0440", "\u0410\u049b\u043f\u0430\u043d", "\u041d\u0430\u0443\u0440\u044b\u0437", "\u0421\u04d9\u0443\u0456\u0440", "\u041c\u0430\u043c\u044b\u0440", "\u041c\u0430\u0443\u0441\u044b\u043c", "\u0428\u0456\u043b\u0434\u0435", "\u0422\u0430\u043c\u044b\u0437", "\u049a\u044b\u0440\u043a\u04af\u0439\u0435\u043a", "\u049a\u0430\u0437\u0430\u043d", "\u049a\u0430\u0440\u0430\u0448\u0430", "\u0416\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d"], monthsShort: ["\u049a\u0430\u04a3", "\u0410\u049b\u043f", "\u041d\u0430\u0443", "\u0421\u04d9\u0443", "\u041c\u0430\u043c", "\u041c\u0430\u0443", "\u0428\u0456\u043b", "\u0422\u0430\u043c", "\u049a\u044b\u0440", "\u049a\u0430\u0437", "\u049a\u0430\u0440", "\u0416\u0435\u043b"], today: "\u0411\u04af\u0433\u0456\u043d", weekStart: 1 }, jQuery.fn.datepicker.dates.km = { days: ["\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799", "\u1785\u1793\u17d2\u1791", "\u17a2\u1784\u17d2\u1782\u17b6\u179a", "\u1796\u17bb\u1792", "\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd", "\u179f\u17bb\u1780\u17d2\u179a", "\u179f\u17c5\u179a\u17cd"], daysShort: ["\u17a2\u17b6.\u1791\u17b7", "\u1785\u1793\u17d2\u1791", "\u17a2\u1784\u17d2\u1782\u17b6\u179a", "\u1796\u17bb\u1792", "\u1796\u17d2\u179a.\u17a0", "\u179f\u17bb\u1780\u17d2\u179a", "\u179f\u17c5\u179a\u17cd"], daysMin: ["\u17a2\u17b6.\u1791\u17b7", "\u1785\u1793\u17d2\u1791", "\u17a2\u1784\u17d2\u1782\u17b6\u179a", "\u1796\u17bb\u1792", "\u1796\u17d2\u179a.\u17a0", "\u179f\u17bb\u1780\u17d2\u179a", "\u179f\u17c5\u179a\u17cd"], months: ["\u1798\u1780\u179a\u17b6", "\u1780\u17bb\u1798\u17d2\u1797\u17c7", "\u1798\u17b7\u1793\u17b6", "\u1798\u17c1\u179f\u17b6", "\u17a7\u179f\u1797\u17b6", "\u1798\u17b7\u1790\u17bb\u1793\u17b6", "\u1780\u1780\u17d2\u1780\u178a\u17b6", "\u179f\u17b8\u17a0\u17b6", "\u1780\u1789\u17d2\u1789\u17b6", "\u178f\u17bb\u179b\u17b6", "\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6", "\u1792\u17d2\u1793\u17bc"], monthsShort: ["\u1798\u1780\u179a\u17b6", "\u1780\u17bb\u1798\u17d2\u1797\u17c7", "\u1798\u17b7\u1793\u17b6", "\u1798\u17c1\u179f\u17b6", "\u17a7\u179f\u1797\u17b6", "\u1798\u17b7\u1790\u17bb\u1793\u17b6", "\u1780\u1780\u17d2\u1780\u178a\u17b6", "\u179f\u17b8\u17a0\u17b6", "\u1780\u1789\u17d2\u1789\u17b6", "\u178f\u17bb\u179b\u17b6", "\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6", "\u1792\u17d2\u1793\u17bc"], today: "\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7", clear: "\u179f\u17c6\u17a2\u17b6\u178f" }, jQuery.fn.datepicker.dates.ko = { days: ["\uc77c\uc694\uc77c", "\uc6d4\uc694\uc77c", "\ud654\uc694\uc77c", "\uc218\uc694\uc77c", "\ubaa9\uc694\uc77c", "\uae08\uc694\uc77c", "\ud1a0\uc694\uc77c"], daysShort: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"], daysMin: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"], months: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"], monthsShort: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"], today: "\uc624\ub298", clear: "\uc0ad\uc81c", format: "yyyy-mm-dd", titleFormat: "yyyy\ub144mm\uc6d4", weekStart: 0 },
    function(e) { e.fn.datepicker.dates.kr = { days: ["\uc77c\uc694\uc77c", "\uc6d4\uc694\uc77c", "\ud654\uc694\uc77c", "\uc218\uc694\uc77c", "\ubaa9\uc694\uc77c", "\uae08\uc694\uc77c", "\ud1a0\uc694\uc77c"], daysShort: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"], daysMin: ["\uc77c", "\uc6d4", "\ud654", "\uc218", "\ubaa9", "\uae08", "\ud1a0"], months: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"], monthsShort: ["1\uc6d4", "2\uc6d4", "3\uc6d4", "4\uc6d4", "5\uc6d4", "6\uc6d4", "7\uc6d4", "8\uc6d4", "9\uc6d4", "10\uc6d4", "11\uc6d4", "12\uc6d4"] }, e.fn.datepicker.deprecated('The language code "kr" is deprecated and will be removed in 2.0. For korean support use "ko" instead.') }(jQuery), jQuery.fn.datepicker.dates.lt = { days: ["Sekmadienis", "Pirmadienis", "Antradienis", "Tre\u010diadienis", "Ketvirtadienis", "Penktadienis", "\u0160e\u0161tadienis"], daysShort: ["S", "Pr", "A", "T", "K", "Pn", "\u0160"], daysMin: ["Sk", "Pr", "An", "Tr", "Ke", "Pn", "\u0160t"], months: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegu\u017e\u0117", "Bir\u017eelis", "Liepa", "Rugpj\u016btis", "Rugs\u0117jis", "Spalis", "Lapkritis", "Gruodis"], monthsShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gru"], today: "\u0160iandien", monthsTitle: "M\u0117nesiai", clear: "I\u0161valyti", weekStart: 1, format: "yyyy-mm-dd" }, jQuery.fn.datepicker.dates.lv = { days: ["Sv\u0113tdiena", "Pirmdiena", "Otrdiena", "Tre\u0161diena", "Ceturtdiena", "Piektdiena", "Sestdiena"], daysShort: ["Sv", "P", "O", "T", "C", "Pk", "S"], daysMin: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"], months: ["Janv\u0101ris", "Febru\u0101ris", "Marts", "Apr\u012blis", "Maijs", "J\u016bnijs", "J\u016blijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "J\u016bn", "J\u016bl", "Aug", "Sep", "Okt", "Nov", "Dec"], monthsTitle: "M\u0113ne\u0161i", today: "\u0160odien", clear: "Nodz\u0113st", weekStart: 1 }, jQuery.fn.datepicker.dates.me = { days: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "\u010cetvrtak", "Petak", "Subota"], daysShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"], daysMin: ["Ne", "Po", "Ut", "Sr", "\u010ce", "Pe", "Su"], months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"], today: "Danas", weekStart: 1, clear: "Izbri\u0161i", format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates.mk = { days: ["\u041d\u0435\u0434\u0435\u043b\u0430", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0440\u0442\u043e\u043a", "\u041f\u0435\u0442\u043e\u043a", "\u0421\u0430\u0431\u043e\u0442\u0430"], daysShort: ["\u041d\u0435\u0434", "\u041f\u043e\u043d", "\u0412\u0442\u043e", "\u0421\u0440\u0435", "\u0427\u0435\u0442", "\u041f\u0435\u0442", "\u0421\u0430\u0431"], daysMin: ["\u041d\u0435", "\u041f\u043e", "\u0412\u0442", "\u0421\u0440", "\u0427\u0435", "\u041f\u0435", "\u0421\u0430"], months: ["\u0408\u0430\u043d\u0443\u0430\u0440\u0438", "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0438\u043b", "\u041c\u0430\u0458", "\u0408\u0443\u043d\u0438", "\u0408\u0443\u043b\u0438", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438", "\u041e\u043a\u0442\u043e\u043c\u0432\u0440\u0438", "\u041d\u043e\u0435\u043c\u0432\u0440\u0438", "\u0414\u0435\u043a\u0435\u043c\u0432\u0440\u0438"], monthsShort: ["\u0408\u0430\u043d", "\u0424\u0435\u0432", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433", "\u0421\u0435\u043f", "\u041e\u043a\u0442", "\u041d\u043e\u0435", "\u0414\u0435\u043a"], today: "\u0414\u0435\u043d\u0435\u0441", format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates.mn = { days: ["\u041d\u044f\u043c", "\u0414\u0430\u0432\u0430\u0430", "\u041c\u044f\u0433\u043c\u0430\u0440", "\u041b\u0445\u0430\u0433\u0432\u0430", "\u041f\u04af\u0440\u044d\u0432", "\u0411\u0430\u0430\u0441\u0430\u043d", "\u0411\u044f\u043c\u0431\u0430"], daysShort: ["\u041d\u044f\u043c", "\u0414\u0430\u0432", "\u041c\u044f\u0433", "\u041b\u0445\u0430", "\u041f\u04af\u0440", "\u0411\u0430\u0430", "\u0411\u044f\u043c"], daysMin: ["\u041d\u044f", "\u0414\u0430", "\u041c\u044f", "\u041b\u0445", "\u041f\u04af", "\u0411\u0430", "\u0411\u044f"], months: ["\u0425\u0443\u043b\u0433\u0430\u043d\u0430", "\u04ae\u0445\u044d\u0440", "\u0411\u0430\u0440", "\u0422\u0443\u0443\u043b\u0430\u0439", "\u041b\u0443\u0443", "\u041c\u043e\u0433\u043e\u0439", "\u041c\u043e\u0440\u044c", "\u0425\u043e\u043d\u044c", "\u0411\u0438\u0447", "\u0422\u0430\u0445\u0438\u0430", "\u041d\u043e\u0445\u043e\u0439", "\u0413\u0430\u0445\u0430\u0439"], monthsShort: ["\u0425\u0443\u043b", "\u04ae\u0445\u044d", "\u0411\u0430\u0440", "\u0422\u0443\u0443", "\u041b\u0443\u0443", "\u041c\u043e\u0433", "\u041c\u043e\u0440", "\u0425\u043e\u043d", "\u0411\u0438\u0447", "\u0422\u0430\u0445", "\u041d\u043e\u0445", "\u0413\u0430\u0445"], today: "\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440", clear: "\u0422\u043e\u0434\u043e\u0440\u0445\u043e\u0439", format: "yyyy.mm.dd", weekStart: 1 }, jQuery.fn.datepicker.dates.ms = { days: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"], daysShort: ["Aha", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"], daysMin: ["Ah", "Is", "Se", "Ra", "Kh", "Ju", "Sa"], months: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"], today: "Hari Ini", clear: "Bersihkan" }, jQuery.fn.datepicker.dates.nb = { days: ["S\xf8ndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "L\xf8rdag"], daysShort: ["S\xf8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xf8r"], daysMin: ["S\xf8", "Ma", "Ti", "On", "To", "Fr", "L\xf8"], months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], today: "I Dag", format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates["nl-BE"] = { days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], daysShort: ["zo", "ma", "di", "wo", "do", "vr", "za"], daysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"], months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"], monthsShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], today: "Vandaag", monthsTitle: "Maanden", clear: "Leegmaken", weekStart: 1, format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates.nl = { days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], daysShort: ["zo", "ma", "di", "wo", "do", "vr", "za"], daysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"], months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"], monthsShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], today: "Vandaag", monthsTitle: "Maanden", clear: "Wissen", weekStart: 1, format: "dd-mm-yyyy" }, jQuery.fn.datepicker.dates.no = { days: ["s\xf8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\xf8rdag"], daysShort: ["s\xf8n", "man", "tir", "ons", "tor", "fre", "l\xf8r"], daysMin: ["s\xf8", "ma", "ti", "on", "to", "fr", "l\xf8"], months: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"], monthsShort: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"], today: "i dag", monthsTitle: "M\xe5neder", clear: "Nullstill", weekStart: 1, format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates.oc = { days: ["Dimenge", "Diluns", "Dimars", "Dim\xe8cres", "Dij\xf2us", "Divendres", "Dissabte"], daysShort: ["Dim", "Dil", "Dmr", "Dmc", "Dij", "Div", "Dis"], daysMin: ["dg", "dl", "dr", "dc", "dj", "dv", "ds"], months: ["Geni\xe8r", "Febri\xe8r", "Mar\xe7", "Abrial", "Mai", "Junh", "Julhet", "Agost", "Setembre", "Octobre", "Novembre", "Decembre"], monthsShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dec"], today: "U\xe8i", monthsTitle: "Meses", clear: "Escafar", weekStart: 1, format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates.pl = { days: ["Niedziela", "Poniedzia\u0142ek", "Wtorek", "\u015aroda", "Czwartek", "Pi\u0105tek", "Sobota"], daysShort: ["Niedz.", "Pon.", "Wt.", "\u015ar.", "Czw.", "Pi\u0105t.", "Sob."], daysMin: ["Ndz.", "Pn.", "Wt.", "\u015ar.", "Czw.", "Pt.", "Sob."], months: ["Stycze\u0144", "Luty", "Marzec", "Kwiecie\u0144", "Maj", "Czerwiec", "Lipiec", "Sierpie\u0144", "Wrzesie\u0144", "Pa\u017adziernik", "Listopad", "Grudzie\u0144"], monthsShort: ["Sty.", "Lut.", "Mar.", "Kwi.", "Maj", "Cze.", "Lip.", "Sie.", "Wrz.", "Pa\u017a.", "Lis.", "Gru."], today: "Dzisiaj", weekStart: 1, clear: "Wyczy\u015b\u0107", format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates["pt-BR"] = { days: ["Domingo", "Segunda", "Ter\xe7a", "Quarta", "Quinta", "Sexta", "S\xe1bado"], daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xe1b"], daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"], months: ["Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], today: "Hoje", monthsTitle: "Meses", clear: "Limpar", format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates.pt = { days: ["Domingo", "Segunda", "Ter\xe7a", "Quarta", "Quinta", "Sexta", "S\xe1bado"], daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xe1b"], daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"], months: ["Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], today: "Hoje", monthsTitle: "Meses", clear: "Limpar", format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates.ro = { days: ["Duminic\u0103", "Luni", "Mar\u0163i", "Miercuri", "Joi", "Vineri", "S\xe2mb\u0103t\u0103"], daysShort: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "S\xe2m"], daysMin: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "S\xe2"], months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"], monthsShort: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Ast\u0103zi", clear: "\u0218terge", weekStart: 1, format: "dd/mm/yyyy" },
    function(e) { e.fn.datepicker.dates["rs-latin"] = { days: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "\u010cetvrtak", "Petak", "Subota"], daysShort: ["Ned", "Pon", "Uto", "Sre", "\u010cet", "Pet", "Sub"], daysMin: ["N", "Po", "U", "Sr", "\u010c", "Pe", "Su"], months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"], today: "Danas", weekStart: 1, format: "dd.mm.yyyy" }, e.fn.datepicker.deprecated('This language code "rs-latin" is deprecated (invalid serbian language code) and will be removed in 2.0. For Serbian latin support use "sr-latin" instead.') }(jQuery),
    function(e) { e.fn.datepicker.dates.rs = { days: ["\u041d\u0435\u0434\u0435\u0459\u0430", "\u041f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a", "\u0423\u0442\u043e\u0440\u0430\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0440\u0442\u0430\u043a", "\u041f\u0435\u0442\u0430\u043a", "\u0421\u0443\u0431\u043e\u0442\u0430"], daysShort: ["\u041d\u0435\u0434", "\u041f\u043e\u043d", "\u0423\u0442\u043e", "\u0421\u0440\u0435", "\u0427\u0435\u0442", "\u041f\u0435\u0442", "\u0421\u0443\u0431"], daysMin: ["\u041d", "\u041f\u043e", "\u0423", "\u0421\u0440", "\u0427", "\u041f\u0435", "\u0421\u0443"], months: ["\u0408\u0430\u043d\u0443\u0430\u0440", "\u0424\u0435\u0431\u0440\u0443\u0430\u0440", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0438\u043b", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440", "\u041e\u043a\u0442\u043e\u0431\u0430\u0440", "\u041d\u043e\u0432\u0435\u043c\u0431\u0430\u0440", "\u0414\u0435\u0446\u0435\u043c\u0431\u0430\u0440"], monthsShort: ["\u0408\u0430\u043d", "\u0424\u0435\u0431", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433", "\u0421\u0435\u043f", "\u041e\u043a\u0442", "\u041d\u043e\u0432", "\u0414\u0435\u0446"], today: "\u0414\u0430\u043d\u0430\u0441", weekStart: 1, format: "dd.mm.yyyy" }, e.fn.datepicker.deprecated('This language code "rs" is deprecated (invalid serbian language code) and will be removed in 2.0. For Serbian support use "sr" instead.') }(jQuery), jQuery.fn.datepicker.dates.ru = { days: ["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435", "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a", "\u0412\u0442\u043e\u0440\u043d\u0438\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440\u0433", "\u041f\u044f\u0442\u043d\u0438\u0446\u0430", "\u0421\u0443\u0431\u0431\u043e\u0442\u0430"], daysShort: ["\u0412\u0441\u043a", "\u041f\u043d\u0434", "\u0412\u0442\u0440", "\u0421\u0440\u0434", "\u0427\u0442\u0432", "\u041f\u0442\u043d", "\u0421\u0443\u0431"], daysMin: ["\u0412\u0441", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431"], months: ["\u042f\u043d\u0432\u0430\u0440\u044c", "\u0424\u0435\u0432\u0440\u0430\u043b\u044c", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0435\u043b\u044c", "\u041c\u0430\u0439", "\u0418\u044e\u043d\u044c", "\u0418\u044e\u043b\u044c", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c", "\u041e\u043a\u0442\u044f\u0431\u0440\u044c", "\u041d\u043e\u044f\u0431\u0440\u044c", "\u0414\u0435\u043a\u0430\u0431\u0440\u044c"], monthsShort: ["\u042f\u043d\u0432", "\u0424\u0435\u0432", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0439", "\u0418\u044e\u043d", "\u0418\u044e\u043b", "\u0410\u0432\u0433", "\u0421\u0435\u043d", "\u041e\u043a\u0442", "\u041d\u043e\u044f", "\u0414\u0435\u043a"], today: "\u0421\u0435\u0433\u043e\u0434\u043d\u044f", clear: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c", format: "dd.mm.yyyy", weekStart: 1, monthsTitle: "\u041c\u0435\u0441\u044f\u0446\u044b" }, jQuery.fn.datepicker.dates.si = { days: ["\u0d89\u0dbb\u0dd2\u0daf\u0dcf", "\u0dc3\u0db3\u0dd4\u0daf\u0dcf", "\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf", "\u0db6\u0daf\u0dcf\u0daf\u0dcf", "\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf", "\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf", "\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf"], daysShort: ["\u0d89\u0dbb\u0dd2", "\u0dc3\u0db3\u0dd4", "\u0d85\u0d9f", "\u0db6\u0daf\u0dcf", "\u0db6\u0dca\u200d\u0dbb\u0dc4", "\u0dc3\u0dd2\u0d9a\u0dd4", "\u0dc3\u0dd9\u0db1"], daysMin: ["\u0d89", "\u0dc3", "\u0d85", "\u0db6", "\u0db6\u0dca\u200d\u0dbb", "\u0dc3\u0dd2", "\u0dc3\u0dd9"], months: ["\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2", "\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2", "\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4", "\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca", "\u0db8\u0dd0\u0dba\u0dd2", "\u0da2\u0dd4\u0db1\u0dd2", "\u0da2\u0dd6\u0dbd\u0dd2", "\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4", "\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca", "\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca", "\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca", "\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca"], monthsShort: ["\u0da2\u0db1", "\u0db4\u0dd9\u0db6", "\u0db8\u0dcf\u0dbb\u0dca", "\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda", "\u0db8\u0dd0\u0dba\u0dd2", "\u0da2\u0dd4\u0db1\u0dd2", "\u0da2\u0dd6\u0dbd\u0dd2", "\u0d85\u0d9c\u0ddd", "\u0dc3\u0dd0\u0db4\u0dca", "\u0d94\u0d9a\u0dca", "\u0db1\u0ddc\u0dc0\u0dd0", "\u0daf\u0dd9\u0dc3\u0dd0"], today: "\u0d85\u0daf", monthsTitle: "\u0db8\u0dcf\u0dc3", clear: "\u0db8\u0d9a\u0db1\u0dca\u0db1", weekStart: 0, format: "yyyy-mm-dd" }, jQuery.fn.datepicker.dates.sk = { days: ["Nede\u013ea", "Pondelok", "Utorok", "Streda", "\u0160tvrtok", "Piatok", "Sobota"], daysShort: ["Ned", "Pon", "Uto", "Str", "\u0160tv", "Pia", "Sob"], daysMin: ["Ne", "Po", "Ut", "St", "\u0160t", "Pia", "So"], months: ["Janu\xe1r", "Febru\xe1r", "Marec", "Apr\xedl", "M\xe1j", "J\xfan", "J\xfal", "August", "September", "Okt\xf3ber", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "M\xe1j", "J\xfan", "J\xfal", "Aug", "Sep", "Okt", "Nov", "Dec"], today: "Dnes", clear: "Vymaza\u0165", weekStart: 1, format: "d.m.yyyy" }, jQuery.fn.datepicker.dates.sl = { days: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "\u010cetrtek", "Petek", "Sobota"], daysShort: ["Ned", "Pon", "Tor", "Sre", "\u010cet", "Pet", "Sob"], daysMin: ["Ne", "Po", "To", "Sr", "\u010ce", "Pe", "So"], months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"], today: "Danes", weekStart: 1 }, jQuery.fn.datepicker.dates.sq = { days: ["E Diel", "E H\xebn\xeb", "E Mart\u0113", "E M\xebrkur\xeb", "E Enjte", "E Premte", "E Shtun\xeb"], daysShort: ["Die", "H\xebn", "Mar", "M\xebr", "Enj", "Pre", "Shtu"], daysMin: ["Di", "H\xeb", "Ma", "M\xeb", "En", "Pr", "Sht"], months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N\xebntor", "Dhjetor"], monthsShort: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Korr", "Gu", "Sht", "Tet", "N\xebn", "Dhjet"], monthsTitle: "Muaj", today: "Sot", weekStart: 1, format: "dd/mm/yyyy", clear: "Pastro" }, jQuery.fn.datepicker.dates["sr-latin"] = { days: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "\u010cetvrtak", "Petak", "Subota"], daysShort: ["Ned", "Pon", "Uto", "Sre", "\u010cet", "Pet", "Sub"], daysMin: ["N", "Po", "U", "Sr", "\u010c", "Pe", "Su"], months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"], today: "Danas", weekStart: 1, format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates.sr = { days: ["\u041d\u0435\u0434\u0435\u0459\u0430", "\u041f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a", "\u0423\u0442\u043e\u0440\u0430\u043a", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0440\u0442\u0430\u043a", "\u041f\u0435\u0442\u0430\u043a", "\u0421\u0443\u0431\u043e\u0442\u0430"], daysShort: ["\u041d\u0435\u0434", "\u041f\u043e\u043d", "\u0423\u0442\u043e", "\u0421\u0440\u0435", "\u0427\u0435\u0442", "\u041f\u0435\u0442", "\u0421\u0443\u0431"], daysMin: ["\u041d", "\u041f\u043e", "\u0423", "\u0421\u0440", "\u0427", "\u041f\u0435", "\u0421\u0443"], months: ["\u0408\u0430\u043d\u0443\u0430\u0440", "\u0424\u0435\u0431\u0440\u0443\u0430\u0440", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0438\u043b", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440", "\u041e\u043a\u0442\u043e\u0431\u0430\u0440", "\u041d\u043e\u0432\u0435\u043c\u0431\u0430\u0440", "\u0414\u0435\u0446\u0435\u043c\u0431\u0430\u0440"], monthsShort: ["\u0408\u0430\u043d", "\u0424\u0435\u0431", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0458", "\u0408\u0443\u043d", "\u0408\u0443\u043b", "\u0410\u0432\u0433", "\u0421\u0435\u043f", "\u041e\u043a\u0442", "\u041d\u043e\u0432", "\u0414\u0435\u0446"], today: "\u0414\u0430\u043d\u0430\u0441", weekStart: 1, format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates.sv = { days: ["s\xf6ndag", "m\xe5ndag", "tisdag", "onsdag", "torsdag", "fredag", "l\xf6rdag"], daysShort: ["s\xf6n", "m\xe5n", "tis", "ons", "tor", "fre", "l\xf6r"], daysMin: ["s\xf6", "m\xe5", "ti", "on", "to", "fr", "l\xf6"], months: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"], monthsShort: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], today: "Idag", format: "yyyy-mm-dd", weekStart: 1, clear: "Rensa" }, jQuery.fn.datepicker.dates.sw = { days: ["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"], daysShort: ["J2", "J3", "J4", "J5", "Alh", "Ij", "J1"], daysMin: ["2", "3", "4", "5", "A", "I", "1"], months: ["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"], monthsShort: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ago", "Sep", "Okt", "Nov", "Des"], today: "Leo" }, jQuery.fn.datepicker.dates.ta = { days: ["\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1", "\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd", "\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd", "\u0baa\u0bc1\u0ba4\u0ba9\u0bcd", "\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd", "\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf", "\u0b9a\u0ba9\u0bbf"], daysShort: ["\u0b9e\u0bbe\u0baf\u0bbf", "\u0ba4\u0bbf\u0b99\u0bcd", "\u0b9a\u0bc6\u0bb5\u0bcd", "\u0baa\u0bc1\u0ba4", "\u0bb5\u0bbf\u0baf\u0bbe", "\u0bb5\u0bc6\u0bb3\u0bcd", "\u0b9a\u0ba9\u0bbf"], daysMin: ["\u0b9e\u0bbe", "\u0ba4\u0bbf", "\u0b9a\u0bc6", "\u0baa\u0bc1", "\u0bb5\u0bbf", "\u0bb5\u0bc6", "\u0b9a"], months: ["\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf", "\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf", "\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd", "\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd", "\u0bae\u0bc7", "\u0b9c\u0bc2\u0ba9\u0bcd", "\u0b9c\u0bc2\u0bb2\u0bc8", "\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bc1", "\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bcd", "\u0b85\u0b95\u0bcd\u0b9f\u0bcb\u0baa\u0bb0\u0bcd", "\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd", "\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd"], monthsShort: ["\u0b9c\u0ba9", "\u0baa\u0bbf\u0baa\u0bcd", "\u0bae\u0bbe\u0bb0\u0bcd", "\u0b8f\u0baa\u0bcd", "\u0bae\u0bc7", "\u0b9c\u0bc2\u0ba9\u0bcd", "\u0b9c\u0bc2\u0bb2\u0bc8", "\u0b86\u0b95", "\u0b9a\u0bc6\u0baa\u0bcd", "\u0b85\u0b95\u0bcd", "\u0ba8\u0bb5", "\u0b9f\u0bbf\u0b9a"], today: "\u0b87\u0ba9\u0bcd\u0bb1\u0bc1", monthsTitle: "\u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd", clear: "\u0ba8\u0bc0\u0b95\u0bcd\u0b95\u0bc1", weekStart: 1, format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates.tg = { days: ["\u042f\u043a\u0448\u0430\u043d\u0431\u0435", "\u0414\u0443\u0448\u0430\u043d\u0431\u0435", "\u0421\u0435\u0448\u0430\u043d\u0431\u0435", "\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0435", "\u041f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435", "\u04b6\u0443\u043c\u044a\u0430", "\u0428\u0430\u043d\u0431\u0435"], daysShort: ["\u042f\u0448\u0431", "\u0414\u0448\u0431", "\u0421\u0448\u0431", "\u0427\u0448\u0431", "\u041f\u0448\u0431", "\u04b6\u0443\u043c", "\u0428\u043d\u0431"], daysMin: ["\u042f\u0448", "\u0414\u0448", "\u0421\u0448", "\u0427\u0448", "\u041f\u0448", "\u04b6\u043c", "\u0428\u0431"], months: ["\u042f\u043d\u0432\u0430\u0440", "\u0424\u0435\u0432\u0440\u0430\u043b", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0435\u043b", "\u041c\u0430\u0439", "\u0418\u044e\u043d", "\u0418\u044e\u043b", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043d\u0442\u044f\u0431\u0440", "\u041e\u043a\u0442\u044f\u0431\u0440", "\u041d\u043e\u044f\u0431\u0440", "\u0414\u0435\u043a\u0430\u0431\u0440"], monthsShort: ["\u042f\u043d\u0432", "\u0424\u0435\u0432", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0439", "\u0418\u044e\u043d", "\u0418\u044e\u043b", "\u0410\u0432\u0433", "\u0421\u0435\u043d", "\u041e\u043a\u0442", "\u041d\u043e\u044f", "\u0414\u0435\u043a"], today: "\u0418\u043c\u0440\u04ef\u0437", monthsTitle: "\u041c\u043e\u04b3\u04b3\u043e", clear: "\u0422\u043e\u0437\u0430 \u043d\u0430\u043c\u0443\u0434\u0430\u043d", weekStart: 1, format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates.th = { days: ["\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c", "\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c", "\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23", "\u0e1e\u0e38\u0e18", "\u0e1e\u0e24\u0e2b\u0e31\u0e2a", "\u0e28\u0e38\u0e01\u0e23\u0e4c", "\u0e40\u0e2a\u0e32\u0e23\u0e4c", "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c"], daysShort: ["\u0e2d\u0e32", "\u0e08", "\u0e2d", "\u0e1e", "\u0e1e\u0e24", "\u0e28", "\u0e2a", "\u0e2d\u0e32"], daysMin: ["\u0e2d\u0e32", "\u0e08", "\u0e2d", "\u0e1e", "\u0e1e\u0e24", "\u0e28", "\u0e2a", "\u0e2d\u0e32"], months: ["\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21", "\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c", "\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21", "\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19", "\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21", "\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19", "\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21", "\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21", "\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19", "\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21", "\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19", "\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21"], monthsShort: ["\u0e21.\u0e04.", "\u0e01.\u0e1e.", "\u0e21\u0e35.\u0e04.", "\u0e40\u0e21.\u0e22.", "\u0e1e.\u0e04.", "\u0e21\u0e34.\u0e22.", "\u0e01.\u0e04.", "\u0e2a.\u0e04.", "\u0e01.\u0e22.", "\u0e15.\u0e04.", "\u0e1e.\u0e22.", "\u0e18.\u0e04."], today: "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49" }, jQuery.fn.datepicker.dates.tk = { days: ["\xddek\u015fenbe", "Du\u015fenbe", "Si\u015fenbe", "\xc7ar\u015fenbe", "Pen\u015fenbe", "Anna", "\u015eenbe"], daysShort: ["\xddek", "Du\u015f", "Si\u015f", "\xc7ar", "Pen", "Ann", "\u015een"], daysMin: ["\xdde", "Du", "Si", "\xc7a", "Pe", "An", "\u015ee"], months: ["\xddanwar", "Fewral", "Mart", "Aprel", "Ma\xfd", "I\xfdun", "I\xfdul", "Awgust", "Sent\xfdabr", "Okt\xfdabr", "No\xfdabr", "Dekabr"], monthsShort: ["\xddan", "Few", "Mar", "Apr", "Ma\xfd", "I\xfdn", "I\xfdl", "Awg", "Sen", "Okt", "No\xfd", "Dek"], today: "Bu g\xfcn", monthsTitle: "A\xfdlar", clear: "A\xfdyr", weekStart: 1, format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates.tr = { days: ["Pazar", "Pazartesi", "Sal\u0131", "\xc7ar\u015famba", "Per\u015fembe", "Cuma", "Cumartesi"], daysShort: ["Pz", "Pzt", "Sal", "\xc7r\u015f", "Pr\u015f", "Cu", "Cts"], daysMin: ["Pz", "Pzt", "Sa", "\xc7r", "Pr", "Cu", "Ct"], months: ["Ocak", "\u015eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011fustos", "Eyl\xfcl", "Ekim", "Kas\u0131m", "Aral\u0131k"], monthsShort: ["Oca", "\u015eub", "Mar", "Nis", "May", "Haz", "Tem", "A\u011fu", "Eyl", "Eki", "Kas", "Ara"], today: "Bug\xfcn", clear: "Temizle", weekStart: 1, format: "dd.mm.yyyy" }, jQuery.fn.datepicker.dates.ua = {
        days: ["\u041d\u0435\u0434\u0456\u043b\u044f", "\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a", "\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a", "\u0421\u0435\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440", "\u041f'\u044f\u0442\u043d\u0438\u0446\u0430", "\u0421\u0443\u0431\u043e\u0442\u0430", "\u041d\u0435\u0434\u0456\u043b\u044f"],
        daysShort: ["\u041d\u0435\u0434", "\u041f\u043d\u0434", "\u0412\u0442\u0440", "\u0421\u0440\u0434", "\u0427\u0442\u0432", "\u041f\u0442\u043d", "\u0421\u0443\u0431", "\u041d\u0435\u0434"],
        daysMin: ["\u041d\u0434", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431", "\u041d\u0434"],
        months: ["C\u0456\u0447\u0435\u043d\u044c", "\u041b\u044e\u0442\u0438\u0439", "\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c", "\u041a\u0432\u0456\u0442\u0435\u043d\u044c", "\u0422\u0440\u0430\u0432\u0435\u043d\u044c", "\u0427\u0435\u0440\u0432\u0435\u043d\u044c", "\u041b\u0438\u043f\u0435\u043d\u044c", "\u0421\u0435\u0440\u043f\u0435\u043d\u044c", "\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c", "\u0416\u043e\u0432\u0442\u0435\u043d\u044c", "\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434", "\u0413\u0440\u0443\u0434\u0435\u043d\u044c"],
        monthsShort: ["\u0421\u0456\u0447", "\u041b\u044e\u0442", "\u0411\u0435\u0440", "\u041a\u0432\u0456", "\u0422\u0440\u0430", "\u0427\u0435\u0440", "\u041b\u0438\u043f", "\u0421\u0435\u0440", "\u0412\u0435\u0440", "\u0416\u043e\u0432", "\u041b\u0438\u0441", "\u0413\u0440\u0443"],
        today: "\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456",
        weekStart: 1
    }, jQuery.fn.datepicker.dates.uk = { days: ["\u041d\u0435\u0434\u0456\u043b\u044f", "\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a", "\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a", "\u0421\u0435\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440", "\u041f'\u044f\u0442\u043d\u0438\u0446\u044f", "\u0421\u0443\u0431\u043e\u0442\u0430"], daysShort: ["\u041d\u0435\u0434", "\u041f\u043d\u0434", "\u0412\u0442\u0440", "\u0421\u0440\u0434", "\u0427\u0442\u0432", "\u041f\u0442\u043d", "\u0421\u0443\u0431"], daysMin: ["\u041d\u0434", "\u041f\u043d", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041f\u0442", "\u0421\u0431"], months: ["C\u0456\u0447\u0435\u043d\u044c", "\u041b\u044e\u0442\u0438\u0439", "\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c", "\u041a\u0432\u0456\u0442\u0435\u043d\u044c", "\u0422\u0440\u0430\u0432\u0435\u043d\u044c", "\u0427\u0435\u0440\u0432\u0435\u043d\u044c", "\u041b\u0438\u043f\u0435\u043d\u044c", "\u0421\u0435\u0440\u043f\u0435\u043d\u044c", "\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c", "\u0416\u043e\u0432\u0442\u0435\u043d\u044c", "\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434", "\u0413\u0440\u0443\u0434\u0435\u043d\u044c"], monthsShort: ["\u0421\u0456\u0447", "\u041b\u044e\u0442", "\u0411\u0435\u0440", "\u041a\u0432\u0456", "\u0422\u0440\u0430", "\u0427\u0435\u0440", "\u041b\u0438\u043f", "\u0421\u0435\u0440", "\u0412\u0435\u0440", "\u0416\u043e\u0432", "\u041b\u0438\u0441", "\u0413\u0440\u0443"], today: "\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456", clear: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438", format: "dd.mm.yyyy", weekStart: 1 }, jQuery.fn.datepicker.dates["uz-cyrl"] = { days: ["\u042f\u043a\u0448\u0430\u043d\u0431\u0430", "\u0414\u0443\u0448\u0430\u043d\u0431\u0430", "\u0421\u0435\u0448\u0430\u043d\u0431\u0430", "\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430", "\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430", "\u0416\u0443\u043c\u0430", "\u0428\u0430\u043d\u0431\u0430"], daysShort: ["\u042f\u043a\u0448", "\u0414\u0443", "\u0421\u0435", "\u0427\u043e\u0440", "\u041f\u0430\u0439", "\u0416\u0443", "\u0428\u0430"], daysMin: ["\u042f\u043a", "\u0414\u0443", "\u0421\u0435", "\u0427\u043e", "\u041f\u0430", "\u0416\u0443", "\u0428\u0430"], months: ["\u042f\u043d\u0432\u0430\u0440\u044c", "\u0424\u0435\u0432\u0440\u0430\u043b\u044c", "\u041c\u0430\u0440\u0442", "\u0410\u043f\u0440\u0435\u043b\u044c", "\u041c\u0430\u0439", "\u0418\u044e\u043d\u044c", "\u0418\u044e\u043b\u044c", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c", "\u041e\u043a\u0442\u044f\u0431\u0440\u044c", "\u041d\u043e\u044f\u0431\u0440\u044c", "\u0414\u0435\u043a\u0430\u0431\u0440\u044c"], monthsShort: ["\u042f\u043d\u0432", "\u0424\u0435\u0432", "\u041c\u0430\u0440", "\u0410\u043f\u0440", "\u041c\u0430\u0439", "\u0418\u044e\u043d", "\u0418\u044e\u043b", "\u0410\u0432\u0433", "\u0421\u0435\u043d", "\u041e\u043a\u0442", "\u041d\u043e\u044f", "\u0414\u0435\u043a"], today: "\u0411\u0443\u0433\u0443\u043d", clear: "\u040e\u0447\u0438\u0440\u0438\u0448", format: "dd.mm.yyyy", weekStart: 1, monthsTitle: "\u041e\u0439\u043b\u0430\u0440" }, jQuery.fn.datepicker.dates["uz-latn"] = { days: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"], daysShort: ["Yak", "Du", "Se", "Chor", "Pay", "Ju", "Sha"], daysMin: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"], months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"], monthsShort: ["Yan", "Fev", "Mar", "Apr", "May", "Iyn", "Iyl", "Avg", "Sen", "Okt", "Noy", "Dek"], today: "Bugun", clear: "O'chirish", format: "dd.mm.yyyy", weekStart: 1, monthsTitle: "Oylar" }, jQuery.fn.datepicker.dates.vi = { days: ["Ch\u1ee7 nh\u1eadt", "Th\u1ee9 hai", "Th\u1ee9 ba", "Th\u1ee9 t\u01b0", "Th\u1ee9 n\u0103m", "Th\u1ee9 s\xe1u", "Th\u1ee9 b\u1ea3y"], daysShort: ["CN", "Th\u1ee9 2", "Th\u1ee9 3", "Th\u1ee9 4", "Th\u1ee9 5", "Th\u1ee9 6", "Th\u1ee9 7"], daysMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"], months: ["Th\xe1ng 1", "Th\xe1ng 2", "Th\xe1ng 3", "Th\xe1ng 4", "Th\xe1ng 5", "Th\xe1ng 6", "Th\xe1ng 7", "Th\xe1ng 8", "Th\xe1ng 9", "Th\xe1ng 10", "Th\xe1ng 11", "Th\xe1ng 12"], monthsShort: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"], today: "H\xf4m nay", clear: "X\xf3a", format: "dd/mm/yyyy" }, jQuery.fn.datepicker.dates["zh-CN"] = { days: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"], daysShort: ["\u5468\u65e5", "\u5468\u4e00", "\u5468\u4e8c", "\u5468\u4e09", "\u5468\u56db", "\u5468\u4e94", "\u5468\u516d"], daysMin: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"], months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"], monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], today: "\u4eca\u5929", monthsTitle: "\u9009\u62e9\u6708\u4efd", clear: "\u6e05\u9664", format: "yyyy-mm-dd", titleFormat: "yyyy\u5e74mm\u6708", weekStart: 1 }, jQuery.fn.datepicker.dates["zh-TW"] = { days: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"], daysShort: ["\u9031\u65e5", "\u9031\u4e00", "\u9031\u4e8c", "\u9031\u4e09", "\u9031\u56db", "\u9031\u4e94", "\u9031\u516d"], daysMin: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"], months: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"], monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], today: "\u4eca\u5929", format: "yyyy\u5e74mm\u6708dd\u65e5", weekStart: 1, clear: "\u6e05\u9664" },
    /*!
     * Bootstrap Colorpicker - Bootstrap Colorpicker is a modular color picker plugin for Bootstrap 4.
     * @package bootstrap-colorpicker
     * @version v3.2.0
     * @license MIT
     * @link https://itsjavi.com/bootstrap-colorpicker/
     * @link https://github.com/itsjavi/bootstrap-colorpicker.git
     */
    function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define("bootstrap-colorpicker", ["jquery"], t) : "object" == typeof exports ? exports["bootstrap-colorpicker"] = t(require("jquery")) : e["bootstrap-colorpicker"] = t(e.jQuery) }(window, function(e) {
        return function(e) {
            function t(i) { if (n[i]) return n[i].exports; var r = n[i] = { i: i, l: !1, exports: {} }; return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports }
            var n = {};
            return t.m = e, t.c = n, t.d = function(e, n, i) { t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: i }) }, t.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, t.t = function(e, n) {
                if (1 & n && (e = t(e)), 8 & n) return e;
                if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                var i = Object.create(null);
                if (t.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e)
                    for (var r in e) t.d(i, r, function(t) { return e[t] }.bind(null, r));
                return i
            }, t.n = function(e) { var n = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 7)
        }([function(t) { t.exports = e }, function(e, t, n) {
            "use strict";

            function i(e) { return e && e.__esModule ? e : { "default": e } }

            function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                }(),
                a = i(n(0)),
                s = function() {
                    function e(t) {
                        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        if (r(this, e), this.colorpicker = t, this.options = n, !this.colorpicker.element || !this.colorpicker.element.length) throw new Error("Extension: this.colorpicker.element is not valid");
                        this.colorpicker.element.on("colorpickerCreate.colorpicker-ext", a["default"].proxy(this.onCreate, this)), this.colorpicker.element.on("colorpickerDestroy.colorpicker-ext", a["default"].proxy(this.onDestroy, this)), this.colorpicker.element.on("colorpickerUpdate.colorpicker-ext", a["default"].proxy(this.onUpdate, this)), this.colorpicker.element.on("colorpickerChange.colorpicker-ext", a["default"].proxy(this.onChange, this)), this.colorpicker.element.on("colorpickerInvalid.colorpicker-ext", a["default"].proxy(this.onInvalid, this)), this.colorpicker.element.on("colorpickerShow.colorpicker-ext", a["default"].proxy(this.onShow, this)), this.colorpicker.element.on("colorpickerHide.colorpicker-ext", a["default"].proxy(this.onHide, this)), this.colorpicker.element.on("colorpickerEnable.colorpicker-ext", a["default"].proxy(this.onEnable, this)), this.colorpicker.element.on("colorpickerDisable.colorpicker-ext", a["default"].proxy(this.onDisable, this))
                    }
                    return o(e, [{ key: "resolveColor", value: function() {!(arguments.length > 1 && arguments[1] !== undefined) || arguments[1]; return !1 } }, { key: "onCreate", value: function() {} }, { key: "onDestroy", value: function() { this.colorpicker.element.off(".colorpicker-ext") } }, { key: "onUpdate", value: function() {} }, { key: "onChange", value: function() {} }, { key: "onInvalid", value: function() {} }, { key: "onHide", value: function() {} }, { key: "onShow", value: function() {} }, { key: "onDisable", value: function() {} }, { key: "onEnable", value: function() {} }]), e
                }();
            t["default"] = s, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) { return e && e.__esModule ? e : { "default": e } }

            function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
            Object.defineProperty(t, "__esModule", { value: !0 }), t.ColorItem = t.HSVAColor = undefined;
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                }(),
                a = i(n(16)),
                s = function() {
                    function e(t, n, i, o) { r(this, e), this.h = isNaN(t) ? 0 : t, this.s = isNaN(n) ? 0 : n, this.v = isNaN(i) ? 0 : i, this.a = isNaN(t) ? 1 : o }
                    return o(e, [{ key: "toString", value: function() { return this.h + ", " + this.s + "%, " + this.v + "%, " + this.a } }]), e
                }(),
                l = function() {
                    function e() {
                        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null,
                            n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                        r(this, e), this.replace(t, n)
                    }
                    return o(e, [{ key: "api", value: function(t) { for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r]; if (0 === arguments.length) return this._color; var o = this._color[t].apply(this._color, i); return o instanceof a["default"] ? new e(o, this.format) : o } }, { key: "original", get: function() { return this._original } }], [{ key: "HSVAColor", get: function() { return s } }]), o(e, [{
                        key: "replace",
                        value: function(t) {
                            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                            if (n = e.sanitizeFormat(n), this._original = { color: t, format: n, valid: !0 }, this._color = e.parse(t), null === this._color) return this._color = (0, a["default"])(), void(this._original.valid = !1);
                            this._format = n || (e.isHex(t) ? "hex" : this._color.model)
                        }
                    }, { key: "isValid", value: function() { return !0 === this._original.valid } }, { key: "setHueRatio", value: function(e) { this.hue = 360 * (1 - e) } }, { key: "setSaturationRatio", value: function(e) { this.saturation = 100 * e } }, { key: "setValueRatio", value: function(e) { this.value = 100 * (1 - e) } }, { key: "setAlphaRatio", value: function(e) { this.alpha = 1 - e } }, { key: "isDesaturated", value: function() { return 0 === this.saturation } }, { key: "isTransparent", value: function() { return 0 === this.alpha } }, { key: "hasTransparency", value: function() { return this.hasAlpha() && this.alpha < 1 } }, { key: "hasAlpha", value: function() { return !isNaN(this.alpha) } }, { key: "toObject", value: function() { return new s(this.hue, this.saturation, this.value, this.alpha) } }, { key: "toHsva", value: function() { return this.toObject() } }, { key: "toHsvaRatio", value: function() { return new s(this.hue / 360, this.saturation / 100, this.value / 100, this.alpha) } }, { key: "toString", value: function() { return this.string() } }, { key: "string", value: function() { var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null; if (!(t = e.sanitizeFormat(t || this.format))) return this._color.round().string(); if (this._color[t] === undefined) throw new Error("Unsupported color format: '" + t + "'"); var n = this._color[t](); return n.round ? n.round().string() : n } }, { key: "equals", value: function(t) { return !(!(t = t instanceof e ? t : new e(t)).isValid() || !this.isValid()) && (this.hue === t.hue && this.saturation === t.saturation && this.value === t.value && this.alpha === t.alpha) } }, { key: "getClone", value: function() { return new e(this._color, this.format) } }, { key: "getCloneHueOnly", value: function() { return new e([this.hue, 100, 100, 1], this.format) } }, { key: "getCloneOpaque", value: function() { return new e(this._color.alpha(1), this.format) } }, { key: "toRgbString", value: function() { return this.string("rgb") } }, { key: "toHexString", value: function() { return this.string("hex") } }, { key: "toHslString", value: function() { return this.string("hsl") } }, { key: "isDark", value: function() { return this._color.isDark() } }, { key: "isLight", value: function() { return this._color.isLight() } }, {
                        key: "generate",
                        value: function(t) {
                            var n = [];
                            if (Array.isArray(t)) n = t;
                            else {
                                if (!e.colorFormulas.hasOwnProperty(t)) throw new Error("No color formula found with the name '" + t + "'.");
                                n = e.colorFormulas[t]
                            }
                            var i = [],
                                r = this._color,
                                o = this.format;
                            return n.forEach(function(t) {
                                var n = [t ? (r.hue() + t) % 360 : r.hue(), r.saturationv(), r.value(), r.alpha()];
                                i.push(new e(n, o))
                            }), i
                        }
                    }, { key: "hue", get: function() { return this._color.hue() }, set: function(e) { this._color = this._color.hue(e) } }, { key: "saturation", get: function() { return this._color.saturationv() }, set: function(e) { this._color = this._color.saturationv(e) } }, { key: "value", get: function() { return this._color.value() }, set: function(e) { this._color = this._color.value(e) } }, { key: "alpha", get: function() { var e = this._color.alpha(); return isNaN(e) ? 1 : e }, set: function(e) { this._color = this._color.alpha(Math.round(100 * e) / 100) } }, { key: "format", get: function() { return this._format ? this._format : this._color.model }, set: function(t) { this._format = e.sanitizeFormat(t) } }], [{
                        key: "parse",
                        value: function(t) {
                            if (t instanceof a["default"]) return t;
                            if (t instanceof e) return t._color;
                            var n = null;
                            if (null === (t = t instanceof s ? [t.h, t.s, t.v, isNaN(t.a) ? 1 : t.a] : e.sanitizeString(t))) return null;
                            Array.isArray(t) && (n = "hsv");
                            try { return (0, a["default"])(t, n) } catch (i) { return null }
                        }
                    }, { key: "sanitizeString", value: function(e) { return "string" == typeof e || e instanceof String ? e.match(/^[0-9a-f]{2,}$/i) ? "#" + e : "transparent" === e.toLowerCase() ? "#FFFFFF00" : e : e } }, { key: "isHex", value: function(e) { return ("string" == typeof e || e instanceof String) && !!e.match(/^#?[0-9a-f]{2,}$/i) } }, {
                        key: "sanitizeFormat",
                        value: function(e) {
                            switch (e) {
                                case "hex":
                                case "hex3":
                                case "hex4":
                                case "hex6":
                                case "hex8":
                                    return "hex";
                                case "rgb":
                                case "rgba":
                                case "keyword":
                                case "name":
                                    return "rgb";
                                case "hsl":
                                case "hsla":
                                case "hsv":
                                case "hsva":
                                case "hwb":
                                case "hwba":
                                    return "hsl";
                                default:
                                    return ""
                            }
                        }
                    }]), e
                }();
            l.colorFormulas = { complementary: [180], triad: [0, 120, 240], tetrad: [0, 90, 180, 270], splitcomplement: [0, 72, 216] }, t["default"] = l, t.HSVAColor = s, t.ColorItem = l
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = { bar_size_short: 16, base_margin: 6, columns: 6 },
                i = n.bar_size_short * n.columns + n.base_margin * (n.columns - 1);
            t["default"] = { customClass: null, color: !1, fallbackColor: !1, format: "auto", horizontal: !1, inline: !1, container: !1, popover: { animation: !0, placement: "bottom", fallbackPlacement: "flip" }, debug: !1, input: "input", addon: ".colorpicker-input-addon", autoInputFallback: !0, useHashPrefix: !0, useAlpha: !0, template: '<div class="colorpicker">\n      <div class="colorpicker-saturation"><i class="colorpicker-guide"></i></div>\n      <div class="colorpicker-hue"><i class="colorpicker-guide"></i></div>\n      <div class="colorpicker-alpha">\n        <div class="colorpicker-alpha-color"></div>\n        <i class="colorpicker-guide"></i>\n      </div>\n    </div>', extensions: [{ name: "preview", options: { showText: !0 } }], sliders: { saturation: { selector: ".colorpicker-saturation", maxLeft: i, maxTop: i, callLeft: "setSaturationRatio", callTop: "setValueRatio" }, hue: { selector: ".colorpicker-hue", maxLeft: 0, maxTop: i, callLeft: !1, callTop: "setHueRatio" }, alpha: { selector: ".colorpicker-alpha", childSelector: ".colorpicker-alpha-color", maxLeft: 0, maxTop: i, callLeft: !1, callTop: "setAlphaRatio" } }, slidersHorz: { saturation: { selector: ".colorpicker-saturation", maxLeft: i, maxTop: i, callLeft: "setSaturationRatio", callTop: "setValueRatio" }, hue: { selector: ".colorpicker-hue", maxLeft: i, maxTop: 0, callLeft: "setHueRatio", callTop: !1 }, alpha: { selector: ".colorpicker-alpha", childSelector: ".colorpicker-alpha-color", maxLeft: i, maxTop: 0, callLeft: "setAlphaRatio", callTop: !1 } } }, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) { return e && e.__esModule ? e : { "default": e } }

            function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                l = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                }(),
                c = i(n(1)),
                u = i(n(0)),
                d = { colors: null, namesAsValues: !0 },
                h = function() {
                    function e(t) {
                        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        r(this, e);
                        var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, u["default"].extend(!0, {}, d, n)));
                        return Array.isArray(i.options.colors) || "object" === s(i.options.colors) || (i.options.colors = null), i
                    }
                    return a(e, c["default"]), l(e, [{ key: "colors", get: function() { return this.options.colors } }]), l(e, [{ key: "getLength", value: function() { return this.options.colors ? Array.isArray(this.options.colors) ? this.options.colors.length : "object" === s(this.options.colors) ? Object.keys(this.options.colors).length : 0 : 0 } }, { key: "resolveColor", value: function(e) { var t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1]; return !(this.getLength() <= 0) && (Array.isArray(this.options.colors) ? this.options.colors.indexOf(e) >= 0 ? e : this.options.colors.indexOf(e.toUpperCase()) >= 0 ? e.toUpperCase() : this.options.colors.indexOf(e.toLowerCase()) >= 0 && e.toLowerCase() : "object" === s(this.options.colors) && (!this.options.namesAsValues || t ? this.getValue(e, !1) : this.getName(e, this.getName("#" + e)))) } }, {
                        key: "getName",
                        value: function(e) {
                            var t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
                            if ("string" != typeof e || !this.options.colors) return t;
                            for (var n in this.options.colors)
                                if (this.options.colors.hasOwnProperty(n) && this.options.colors[n].toLowerCase() === e.toLowerCase()) return n;
                            return t
                        }
                    }, { key: "getValue", value: function(e) { var t = arguments.length > 1 && arguments[1] !== undefined && arguments[1]; return "string" == typeof e && this.options.colors && this.options.colors.hasOwnProperty(e) ? this.options.colors[e] : t } }]), e
                }();
            t["default"] = h, e.exports = t["default"]
        }, function(e) {
            "use strict";
            e.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }
        }, function(e, t, n) {
            function i(e, t) { return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2) + Math.pow(e[2] - t[2], 2) }
            var r = n(5),
                o = {};
            for (var a in r) r.hasOwnProperty(a) && (o[r[a]] = a);
            var s = e.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
            for (var l in s)
                if (s.hasOwnProperty(l)) {
                    if (!("channels" in s[l])) throw new Error("missing channels property: " + l);
                    if (!("labels" in s[l])) throw new Error("missing channel labels property: " + l);
                    if (s[l].labels.length !== s[l].channels) throw new Error("channel and label counts mismatch: " + l);
                    var c = s[l].channels,
                        u = s[l].labels;
                    delete s[l].channels, delete s[l].labels, Object.defineProperty(s[l], "channels", { value: c }), Object.defineProperty(s[l], "labels", { value: u })
                }
            s.rgb.hsl = function(e) {
                var t, n, i = e[0] / 255,
                    r = e[1] / 255,
                    o = e[2] / 255,
                    a = Math.min(i, r, o),
                    s = Math.max(i, r, o),
                    l = s - a;
                return s === a ? t = 0 : i === s ? t = (r - o) / l : r === s ? t = 2 + (o - i) / l : o === s && (t = 4 + (i - r) / l), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (a + s) / 2, [t, 100 * (s === a ? 0 : n <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * n]
            }, s.rgb.hsv = function(e) {
                var t, n, i, r, o, a = e[0] / 255,
                    s = e[1] / 255,
                    l = e[2] / 255,
                    c = Math.max(a, s, l),
                    u = c - Math.min(a, s, l),
                    d = function(e) { return (c - e) / 6 / u + .5 };
                return 0 === u ? r = o = 0 : (o = u / c, t = d(a), n = d(s), i = d(l), a === c ? r = i - n : s === c ? r = 1 / 3 + t - i : l === c && (r = 2 / 3 + n - t), r < 0 ? r += 1 : r > 1 && (r -= 1)), [360 * r, 100 * o, 100 * c]
            }, s.rgb.hwb = function(e) {
                var t = e[0],
                    n = e[1],
                    i = e[2];
                return [s.rgb.hsl(e)[0], 100 * (1 / 255 * Math.min(t, Math.min(n, i))), 100 * (i = 1 - 1 / 255 * Math.max(t, Math.max(n, i)))]
            }, s.rgb.cmyk = function(e) {
                var t, n = e[0] / 255,
                    i = e[1] / 255,
                    r = e[2] / 255;
                return [100 * ((1 - n - (t = Math.min(1 - n, 1 - i, 1 - r))) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * t]
            }, s.rgb.keyword = function(e) {
                var t = o[e];
                if (t) return t;
                var n, a = Infinity;
                for (var s in r)
                    if (r.hasOwnProperty(s)) {
                        var l = i(e, r[s]);
                        l < a && (a = l, n = s)
                    }
                return n
            }, s.keyword.rgb = function(e) { return r[e] }, s.rgb.xyz = function(e) {
                var t = e[0] / 255,
                    n = e[1] / 255,
                    i = e[2] / 255;
                return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * i), 100 * (.0193 * t + .1192 * n + .9505 * i)]
            }, s.rgb.lab = function(e) {
                var t = s.rgb.xyz(e),
                    n = t[0],
                    i = t[1],
                    r = t[2];
                return i /= 100, r /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
            }, s.hsl.rgb = function(e) {
                var t, n, i, r, o, a = e[0] / 360,
                    s = e[1] / 100,
                    l = e[2] / 100;
                if (0 === s) return [o = 255 * l, o, o];
                t = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), r = [0, 0, 0];
                for (var c = 0; c < 3; c++)(i = a + 1 / 3 * -(c - 1)) < 0 && i++, i > 1 && i--, o = 6 * i < 1 ? t + 6 * (n - t) * i : 2 * i < 1 ? n : 3 * i < 2 ? t + (n - t) * (2 / 3 - i) * 6 : t, r[c] = 255 * o;
                return r
            }, s.hsl.hsv = function(e) {
                var t = e[0],
                    n = e[1] / 100,
                    i = e[2] / 100,
                    r = n,
                    o = Math.max(i, .01);
                return n *= (i *= 2) <= 1 ? i : 2 - i, r *= o <= 1 ? o : 2 - o, [t, 100 * (0 === i ? 2 * r / (o + r) : 2 * n / (i + n)), 100 * ((i + n) / 2)]
            }, s.hsv.rgb = function(e) {
                var t = e[0] / 60,
                    n = e[1] / 100,
                    i = e[2] / 100,
                    r = Math.floor(t) % 6,
                    o = t - Math.floor(t),
                    a = 255 * i * (1 - n),
                    s = 255 * i * (1 - n * o),
                    l = 255 * i * (1 - n * (1 - o));
                switch (i *= 255, r) {
                    case 0:
                        return [i, l, a];
                    case 1:
                        return [s, i, a];
                    case 2:
                        return [a, i, l];
                    case 3:
                        return [a, s, i];
                    case 4:
                        return [l, a, i];
                    case 5:
                        return [i, a, s]
                }
            }, s.hsv.hsl = function(e) {
                var t, n, i, r = e[0],
                    o = e[1] / 100,
                    a = e[2] / 100,
                    s = Math.max(a, .01);
                return i = (2 - o) * a, n = o * s, [r, 100 * (n = (n /= (t = (2 - o) * s) <= 1 ? t : 2 - t) || 0), 100 * (i /= 2)]
            }, s.hwb.rgb = function(e) {
                var t, n, i, r, o, a, s, l = e[0] / 360,
                    c = e[1] / 100,
                    u = e[2] / 100,
                    d = c + u;
                switch (d > 1 && (c /= d, u /= d), i = 6 * l - (t = Math.floor(6 * l)), 0 != (1 & t) && (i = 1 - i), r = c + i * ((n = 1 - u) - c), t) {
                    default:
                        case 6:
                        case 0:
                        o = n,
                    a = r,
                    s = c;
                    break;
                    case 1:
                            o = r,
                        a = n,
                        s = c;
                        break;
                    case 2:
                            o = c,
                        a = n,
                        s = r;
                        break;
                    case 3:
                            o = c,
                        a = r,
                        s = n;
                        break;
                    case 4:
                            o = r,
                        a = c,
                        s = n;
                        break;
                    case 5:
                            o = n,
                        a = c,
                        s = r
                }
                return [255 * o, 255 * a, 255 * s]
            }, s.cmyk.rgb = function(e) {
                var t = e[0] / 100,
                    n = e[1] / 100,
                    i = e[2] / 100,
                    r = e[3] / 100;
                return [255 * (1 - Math.min(1, t * (1 - r) + r)), 255 * (1 - Math.min(1, n * (1 - r) + r)), 255 * (1 - Math.min(1, i * (1 - r) + r))]
            }, s.xyz.rgb = function(e) {
                var t, n, i, r = e[0] / 100,
                    o = e[1] / 100,
                    a = e[2] / 100;
                return n = -.9689 * r + 1.8758 * o + .0415 * a, i = .0557 * r + -.204 * o + 1.057 * a, t = (t = 3.2406 * r + -1.5372 * o + -.4986 * a) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]
            }, s.xyz.lab = function(e) {
                var t = e[0],
                    n = e[1],
                    i = e[2];
                return n /= 100, i /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
            }, s.lab.xyz = function(e) {
                var t, n, i, r = e[0];
                t = e[1] / 500 + (n = (r + 16) / 116), i = n - e[2] / 200;
                var o = Math.pow(n, 3),
                    a = Math.pow(t, 3),
                    s = Math.pow(i, 3);
                return n = o > .008856 ? o : (n - 16 / 116) / 7.787, t = a > .008856 ? a : (t - 16 / 116) / 7.787, i = s > .008856 ? s : (i - 16 / 116) / 7.787, [t *= 95.047, n *= 100, i *= 108.883]
            }, s.lab.lch = function(e) {
                var t, n = e[0],
                    i = e[1],
                    r = e[2];
                return (t = 360 * Math.atan2(r, i) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(i * i + r * r), t]
            }, s.lch.lab = function(e) {
                var t, n = e[0],
                    i = e[1];
                return t = e[2] / 360 * 2 * Math.PI, [n, i * Math.cos(t), i * Math.sin(t)]
            }, s.rgb.ansi16 = function(e) {
                var t = e[0],
                    n = e[1],
                    i = e[2],
                    r = 1 in arguments ? arguments[1] : s.rgb.hsv(e)[2];
                if (0 === (r = Math.round(r / 50))) return 30;
                var o = 30 + (Math.round(i / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
                return 2 === r && (o += 60), o
            }, s.hsv.ansi16 = function(e) { return s.rgb.ansi16(s.hsv.rgb(e), e[2]) }, s.rgb.ansi256 = function(e) {
                var t = e[0],
                    n = e[1],
                    i = e[2];
                return t === n && n === i ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(i / 255 * 5)
            }, s.ansi16.rgb = function(e) { var t = e % 10; if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t]; var n = .5 * (1 + ~~(e > 50)); return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255] }, s.ansi256.rgb = function(e) { if (e >= 232) { var t = 10 * (e - 232) + 8; return [t, t, t] } var n; return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255] }, s.rgb.hex = function(e) { var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase(); return "000000".substring(t.length) + t }, s.hex.rgb = function(e) {
                var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                if (!t) return [0, 0, 0];
                var n = t[0];
                3 === t[0].length && (n = n.split("").map(function(e) { return e + e }).join(""));
                var i = parseInt(n, 16);
                return [i >> 16 & 255, i >> 8 & 255, 255 & i]
            }, s.rgb.hcg = function(e) {
                var t, n = e[0] / 255,
                    i = e[1] / 255,
                    r = e[2] / 255,
                    o = Math.max(Math.max(n, i), r),
                    a = Math.min(Math.min(n, i), r),
                    s = o - a;
                return t = s <= 0 ? 0 : o === n ? (i - r) / s % 6 : o === i ? 2 + (r - n) / s : 4 + (n - i) / s + 4, t /= 6, [360 * (t %= 1), 100 * s, 100 * (s < 1 ? a / (1 - s) : 0)]
            }, s.hsl.hcg = function(e) {
                var t = e[1] / 100,
                    n = e[2] / 100,
                    i = 1,
                    r = 0;
                return (i = n < .5 ? 2 * t * n : 2 * t * (1 - n)) < 1 && (r = (n - .5 * i) / (1 - i)), [e[0], 100 * i, 100 * r]
            }, s.hsv.hcg = function(e) {
                var t = e[1] / 100,
                    n = e[2] / 100,
                    i = t * n,
                    r = 0;
                return i < 1 && (r = (n - i) / (1 - i)), [e[0], 100 * i, 100 * r]
            }, s.hcg.rgb = function(e) {
                var t = e[0] / 360,
                    n = e[1] / 100,
                    i = e[2] / 100;
                if (0 === n) return [255 * i, 255 * i, 255 * i];
                var r = [0, 0, 0],
                    o = t % 1 * 6,
                    a = o % 1,
                    s = 1 - a,
                    l = 0;
                switch (Math.floor(o)) {
                    case 0:
                        r[0] = 1, r[1] = a, r[2] = 0;
                        break;
                    case 1:
                        r[0] = s, r[1] = 1, r[2] = 0;
                        break;
                    case 2:
                        r[0] = 0, r[1] = 1, r[2] = a;
                        break;
                    case 3:
                        r[0] = 0, r[1] = s, r[2] = 1;
                        break;
                    case 4:
                        r[0] = a, r[1] = 0, r[2] = 1;
                        break;
                    default:
                        r[0] = 1, r[1] = 0, r[2] = s
                }
                return l = (1 - n) * i, [255 * (n * r[0] + l), 255 * (n * r[1] + l), 255 * (n * r[2] + l)]
            }, s.hcg.hsv = function(e) {
                var t = e[1] / 100,
                    n = t + e[2] / 100 * (1 - t),
                    i = 0;
                return n > 0 && (i = t / n), [e[0], 100 * i, 100 * n]
            }, s.hcg.hsl = function(e) {
                var t = e[1] / 100,
                    n = e[2] / 100 * (1 - t) + .5 * t,
                    i = 0;
                return n > 0 && n < .5 ? i = t / (2 * n) : n >= .5 && n < 1 && (i = t / (2 * (1 - n))), [e[0], 100 * i, 100 * n]
            }, s.hcg.hwb = function(e) {
                var t = e[1] / 100,
                    n = t + e[2] / 100 * (1 - t);
                return [e[0], 100 * (n - t), 100 * (1 - n)]
            }, s.hwb.hcg = function(e) {
                var t = e[1] / 100,
                    n = 1 - e[2] / 100,
                    i = n - t,
                    r = 0;
                return i < 1 && (r = (n - i) / (1 - i)), [e[0], 100 * i, 100 * r]
            }, s.apple.rgb = function(e) { return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255] }, s.rgb.apple = function(e) { return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535] }, s.gray.rgb = function(e) { return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255] }, s.gray.hsl = s.gray.hsv = function(e) { return [0, 0, e[0]] }, s.gray.hwb = function(e) { return [0, 100, e[0]] }, s.gray.cmyk = function(e) { return [0, 0, 0, e[0]] }, s.gray.lab = function(e) { return [e[0], 0, 0] }, s.gray.hex = function(e) {
                var t = 255 & Math.round(e[0] / 100 * 255),
                    n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
                return "000000".substring(n.length) + n
            }, s.rgb.gray = function(e) { return [(e[0] + e[1] + e[2]) / 3 / 255 * 100] }
        }, function(e, t, n) {
            "use strict";

            function i(e) { return e && e.__esModule ? e : { "default": e } }
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                o = i(n(8)),
                a = i(n(0)),
                s = "colorpicker";
            a["default"][s] = o["default"], a["default"].fn[s] = function(e) {
                var t = Array.prototype.slice.call(arguments, 1),
                    n = 1 === this.length,
                    i = null,
                    l = this.each(function() {
                        var l = (0, a["default"])(this),
                            c = l.data(s),
                            u = "object" === (void 0 === e ? "undefined" : r(e)) ? e : {};
                        c || (c = new o["default"](this, u), l.data(s, c)), n && (i = l, "string" == typeof e && (i = "colorpicker" === e ? c : a["default"].isFunction(c[e]) ? c[e].apply(c, t) : c[e]))
                    });
                return n ? i : l
            }, a["default"].fn[s].constructor = o["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) { return e && e.__esModule ? e : { "default": e } }

            function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                }(),
                a = i(n(1)),
                s = i(n(3)),
                l = i(n(9)),
                c = i(n(0)),
                u = i(n(13)),
                d = i(n(14)),
                h = i(n(15)),
                p = i(n(22)),
                f = i(n(23)),
                m = i(n(24)),
                g = i(n(2)),
                y = 0,
                v = "undefined" != typeof self ? self : undefined,
                b = function() {
                    function e(t, n) { r(this, e), y += 1, this.id = y, this.lastEvent = { alias: null, e: null }, this.element = (0, c["default"])(t).addClass("colorpicker-element").attr("data-colorpicker-id", this.id), this.options = c["default"].extend(!0, {}, s["default"], n, this.element.data()), this.disabled = !1, this.extensions = [], this.container = !0 === this.options.container || !0 !== this.options.container && !0 === this.options.inline ? this.element : this.options.container, this.container = !1 !== this.container && (0, c["default"])(this.container), this.inputHandler = new h["default"](this), this.colorHandler = new p["default"](this), this.sliderHandler = new u["default"](this), this.popupHandler = new d["default"](this, v), this.pickerHandler = new f["default"](this), this.addonHandler = new m["default"](this), this.init(), (0, c["default"])(c["default"].proxy(function() { this.trigger("colorpickerCreate") }, this)) }
                    return o(e, [{ key: "color", get: function() { return this.colorHandler.color } }, { key: "format", get: function() { return this.colorHandler.format } }, { key: "picker", get: function() { return this.pickerHandler.picker } }], [{ key: "Color", get: function() { return g["default"] } }, { key: "Extension", get: function() { return a["default"] } }]), o(e, [{ key: "init", value: function() { this.addonHandler.bind(), this.inputHandler.bind(), this.initExtensions(), this.colorHandler.bind(), this.pickerHandler.bind(), this.sliderHandler.bind(), this.popupHandler.bind(), this.pickerHandler.attach(), this.update(), this.inputHandler.isDisabled() && this.disable() } }, {
                        key: "initExtensions",
                        value: function() {
                            var t = this;
                            Array.isArray(this.options.extensions) || (this.options.extensions = []), this.options.debug && this.options.extensions.push({ name: "debugger" }), this.options.extensions.forEach(function(n) { t.registerExtension(e.extensions[n.name.toLowerCase()], n.options || {}) })
                        }
                    }, { key: "registerExtension", value: function(e) { var t = new e(this, arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}); return this.extensions.push(t), t } }, {
                        key: "destroy",
                        value: function() {
                            var e = this.color;
                            this.sliderHandler.unbind(), this.inputHandler.unbind(), this.popupHandler.unbind(), this.colorHandler.unbind(), this.addonHandler.unbind(), this.pickerHandler.unbind(), this.element.removeClass("colorpicker-element").removeData("colorpicker", "color").off(".colorpicker"), this.trigger("colorpickerDestroy", e)
                        }
                    }, { key: "show", value: function(e) { this.popupHandler.show(e) } }, { key: "hide", value: function(e) { this.popupHandler.hide(e) } }, { key: "toggle", value: function(e) { this.popupHandler.toggle(e) } }, {
                        key: "getValue",
                        value: function() {
                            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null,
                                t = this.colorHandler.color;
                            return (t = t instanceof g["default"] ? t : e) instanceof g["default"] ? t.string(this.format) : t
                        }
                    }, {
                        key: "setValue",
                        value: function(e) {
                            if (!this.isDisabled()) {
                                var t = this.colorHandler;
                                t.hasColor() && e && t.color.equals(e) || !t.hasColor() && !e || (t.color = e ? t.createColor(e, this.options.autoInputFallback) : null, this.trigger("colorpickerChange", t.color, e), this.update())
                            }
                        }
                    }, { key: "update", value: function() { this.colorHandler.hasColor() ? this.inputHandler.update() : this.colorHandler.assureColor(), this.addonHandler.update(), this.pickerHandler.update(), this.trigger("colorpickerUpdate") } }, { key: "enable", value: function() { return this.inputHandler.enable(), this.disabled = !1, this.picker.removeClass("colorpicker-disabled"), this.trigger("colorpickerEnable"), !0 } }, { key: "disable", value: function() { return this.inputHandler.disable(), this.disabled = !0, this.picker.addClass("colorpicker-disabled"), this.trigger("colorpickerDisable"), !0 } }, { key: "isEnabled", value: function() { return !this.isDisabled() } }, { key: "isDisabled", value: function() { return !0 === this.disabled } }, {
                        key: "trigger",
                        value: function(e) {
                            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null,
                                n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                            this.element.trigger({ type: e, colorpicker: this, color: t || this.color, value: n || this.getValue() })
                        }
                    }]), e
                }();
            b.extensions = l["default"], t["default"] = b, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) { return e && e.__esModule ? e : { "default": e } }
            Object.defineProperty(t, "__esModule", { value: !0 }), t.Palette = t.Swatches = t.Preview = t.Debugger = undefined;
            var r = i(n(10)),
                o = i(n(11)),
                a = i(n(12)),
                s = i(n(4));
            t.Debugger = r["default"], t.Preview = o["default"], t.Swatches = a["default"], t.Palette = s["default"], t["default"] = { "debugger": r["default"], preview: o["default"], swatches: a["default"], palette: s["default"] }
        }, function(e, t, n) {
            "use strict";

            function i(e) { return e && e.__esModule ? e : { "default": e } }

            function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                }(),
                l = function h(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (i === undefined) { var r = Object.getPrototypeOf(e); return null === r ? undefined : h(r, t, n) } if ("value" in i) return i.value; var o = i.get; return o === undefined ? undefined : o.call(n) },
                c = i(n(1)),
                u = i(n(0)),
                d = function() {
                    function e(t) {
                        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        r(this, e);
                        var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                        return i.eventCounter = 0, i.colorpicker.inputHandler.hasInput() && i.colorpicker.inputHandler.input.on("change.colorpicker-ext", u["default"].proxy(i.onChangeInput, i)), i
                    }
                    return a(e, c["default"]), s(e, [{
                        key: "log",
                        value: function(e) {
                            for (var t, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                            this.eventCounter += 1;
                            var o = "#" + this.eventCounter + ": Colorpicker#" + this.colorpicker.id + " [" + e + "]";
                            (t = console).debug.apply(t, [o].concat(i)), this.colorpicker.element.trigger({ type: "colorpickerDebug", colorpicker: this.colorpicker, color: this.color, value: null, debug: { "debugger": this, eventName: e, logArgs: i, logMessage: o } })
                        }
                    }, { key: "resolveColor", value: function(e) { var t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1]; return this.log("resolveColor()", e, t), !1 } }, { key: "onCreate", value: function(t) { return this.log("colorpickerCreate"), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onCreate", this).call(this, t) } }, { key: "onDestroy", value: function(t) { return this.log("colorpickerDestroy"), this.eventCounter = 0, this.colorpicker.inputHandler.hasInput() && this.colorpicker.inputHandler.input.off(".colorpicker-ext"), l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onDestroy", this).call(this, t) } }, { key: "onUpdate", value: function() { this.log("colorpickerUpdate") } }, { key: "onChangeInput", value: function(e) { this.log("input:change.colorpicker", e.value, e.color) } }, { key: "onChange", value: function(e) { this.log("colorpickerChange", e.value, e.color) } }, { key: "onInvalid", value: function(e) { this.log("colorpickerInvalid", e.value, e.color) } }, { key: "onHide", value: function() { this.log("colorpickerHide"), this.eventCounter = 0 } }, { key: "onShow", value: function() { this.log("colorpickerShow") } }, { key: "onDisable", value: function() { this.log("colorpickerDisable") } }, { key: "onEnable", value: function() { this.log("colorpickerEnable") } }]), e
                }();
            t["default"] = d, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) { return e && e.__esModule ? e : { "default": e } }

            function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                }(),
                l = function h(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (i === undefined) { var r = Object.getPrototypeOf(e); return null === r ? undefined : h(r, t, n) } if ("value" in i) return i.value; var o = i.get; return o === undefined ? undefined : o.call(n) },
                c = i(n(1)),
                u = i(n(0)),
                d = function() {
                    function e(t) {
                        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        r(this, e);
                        var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, u["default"].extend(!0, {}, { template: '<div class="colorpicker-bar colorpicker-preview"><div /></div>', showText: !0, format: t.format }, n)));
                        return i.element = (0, u["default"])(i.options.template), i.elementInner = i.element.find("div"), i
                    }
                    return a(e, c["default"]), s(e, [{ key: "onCreate", value: function(t) { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onCreate", this).call(this, t), this.colorpicker.picker.append(this.element) } }, { key: "onUpdate", value: function(t) { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onUpdate", this).call(this, t), t.color ? (this.elementInner.css("backgroundColor", t.color.toRgbString()), this.options.showText && (this.elementInner.html(t.color.string(this.options.format || this.colorpicker.format)), t.color.isDark() && t.color.alpha > .5 ? this.elementInner.css("color", "white") : this.elementInner.css("color", "black"))) : this.elementInner.css("backgroundColor", null).css("color", null).html("") } }]), e
                }();
            t["default"] = d, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) { return e && e.__esModule ? e : { "default": e } }

            function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function o(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                }(),
                l = function p(e, t, n) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (i === undefined) { var r = Object.getPrototypeOf(e); return null === r ? undefined : p(r, t, n) } if ("value" in i) return i.value; var o = i.get; return o === undefined ? undefined : o.call(n) },
                c = i(n(4)),
                u = i(n(0)),
                d = { barTemplate: '<div class="colorpicker-bar colorpicker-swatches">\n                    <div class="colorpicker-swatches--inner"></div>\n                </div>', swatchTemplate: '<i class="colorpicker-swatch"><i class="colorpicker-swatch--inner"></i></i>' },
                h = function() {
                    function e(t) {
                        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        r(this, e);
                        var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, u["default"].extend(!0, {}, d, n)));
                        return i.element = null, i
                    }
                    return a(e, c["default"]), s(e, [{ key: "isEnabled", value: function() { return this.getLength() > 0 } }, { key: "onCreate", value: function(t) { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "onCreate", this).call(this, t), this.isEnabled() && (this.element = (0, u["default"])(this.options.barTemplate), this.load(), this.colorpicker.picker.append(this.element)) } }, {
                        key: "load",
                        value: function() {
                            var e = this,
                                t = this.colorpicker,
                                n = this.element.find(".colorpicker-swatches--inner"),
                                i = !0 === this.options.namesAsValues && !Array.isArray(this.colors);
                            n.empty(), u["default"].each(this.colors, function(r, o) {
                                var a = (0, u["default"])(e.options.swatchTemplate).attr("data-name", r).attr("data-value", o).attr("title", i ? r + ": " + o : o).on("mousedown.colorpicker touchstart.colorpicker", function() {
                                    var e = (0, u["default"])(this);
                                    t.setValue(i ? e.attr("data-name") : e.attr("data-value"))
                                });
                                a.find(".colorpicker-swatch--inner").css("background-color", o), n.append(a)
                            }), n.append((0, u["default"])('<i class="colorpicker-clear"></i>'))
                        }
                    }]), e
                }();
            t["default"] = h, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) { return e && e.__esModule ? e : { "default": e } }

            function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                }(),
                a = i(n(0)),
                s = function() {
                    function e(t) { r(this, e), this.colorpicker = t, this.currentSlider = null, this.mousePointer = { left: 0, top: 0 }, this.onMove = a["default"].proxy(this.defaultOnMove, this) }
                    return o(e, [{
                        key: "defaultOnMove",
                        value: function(e, t) {
                            if (this.currentSlider) {
                                var n = this.currentSlider,
                                    i = this.colorpicker,
                                    r = i.colorHandler,
                                    o = r.hasColor() ? r.color.getClone() : r.getFallbackColor();
                                n.guideStyle.left = t + "px", n.guideStyle.top = e + "px", n.callLeft && o[n.callLeft](t / n.maxLeft), n.callTop && o[n.callTop](e / n.maxTop), i.setValue(o), i.popupHandler.focus()
                            }
                        }
                    }, {
                        key: "bind",
                        value: function() {
                            var e = this.colorpicker.options.horizontal ? this.colorpicker.options.slidersHorz : this.colorpicker.options.sliders,
                                t = [];
                            for (var n in e) e.hasOwnProperty(n) && t.push(e[n].selector);
                            this.colorpicker.picker.find(t.join(", ")).on("mousedown.colorpicker touchstart.colorpicker", a["default"].proxy(this.pressed, this))
                        }
                    }, {
                        key: "unbind",
                        value: function() {
                            (0, a["default"])(this.colorpicker.picker).off({ "mousemove.colorpicker": a["default"].proxy(this.moved, this), "touchmove.colorpicker": a["default"].proxy(this.moved, this), "mouseup.colorpicker": a["default"].proxy(this.released, this), "touchend.colorpicker": a["default"].proxy(this.released, this) })
                        }
                    }, {
                        key: "pressed",
                        value: function(e) {
                            if (!this.colorpicker.isDisabled()) {
                                this.colorpicker.lastEvent.alias = "pressed", this.colorpicker.lastEvent.e = e, !e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches && (e.pageX = e.originalEvent.touches[0].pageX, e.pageY = e.originalEvent.touches[0].pageY);
                                var t = (0, a["default"])(e.target).closest("div"),
                                    n = this.colorpicker.options.horizontal ? this.colorpicker.options.slidersHorz : this.colorpicker.options.sliders;
                                if (!t.is(".colorpicker")) {
                                    for (var i in this.currentSlider = null, n)
                                        if (n.hasOwnProperty(i)) { var r = n[i]; if (t.is(r.selector)) { this.currentSlider = a["default"].extend({}, r, { name: i }); break } if (r.childSelector !== undefined && t.is(r.childSelector)) { this.currentSlider = a["default"].extend({}, r, { name: i }), t = t.parent(); break } }
                                    var o = t.find(".colorpicker-guide").get(0);
                                    if (null !== this.currentSlider && null !== o) {
                                        var s = t.offset();
                                        this.currentSlider.guideStyle = o.style, this.currentSlider.left = e.pageX - s.left, this.currentSlider.top = e.pageY - s.top, this.mousePointer = { left: e.pageX, top: e.pageY }, (0, a["default"])(this.colorpicker.picker).on({ "mousemove.colorpicker": a["default"].proxy(this.moved, this), "touchmove.colorpicker": a["default"].proxy(this.moved, this), "mouseup.colorpicker": a["default"].proxy(this.released, this), "touchend.colorpicker": a["default"].proxy(this.released, this) }).trigger("mousemove")
                                    }
                                }
                            }
                        }
                    }, {
                        key: "moved",
                        value: function(e) {
                            this.colorpicker.lastEvent.alias = "moved", this.colorpicker.lastEvent.e = e, !e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches && (e.pageX = e.originalEvent.touches[0].pageX, e.pageY = e.originalEvent.touches[0].pageY), e.preventDefault();
                            var t = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((e.pageX || this.mousePointer.left) - this.mousePointer.left))),
                                n = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((e.pageY || this.mousePointer.top) - this.mousePointer.top)));
                            this.onMove(n, t)
                        }
                    }, { key: "released", value: function(e) { this.colorpicker.lastEvent.alias = "released", this.colorpicker.lastEvent.e = e, (0, a["default"])(this.colorpicker.picker).off({ "mousemove.colorpicker": this.moved, "touchmove.colorpicker": this.moved, "mouseup.colorpicker": this.released, "touchend.colorpicker": this.released }) } }]), e
                }();
            t["default"] = s, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) { return e && e.__esModule ? e : { "default": e } }

            function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                }(),
                a = i(n(0)),
                s = i(n(3)),
                l = function() {
                    function e(t, n) { r(this, e), this.root = n, this.colorpicker = t, this.popoverTarget = null, this.popoverTip = null, this.clicking = !1, this.hidding = !1, this.showing = !1 }
                    return o(e, [{
                        key: "bind",
                        value: function() {
                            var e = this.colorpicker;
                            e.options.inline ? e.picker.addClass("colorpicker-inline colorpicker-visible") : (e.picker.addClass("colorpicker-popup colorpicker-hidden"), (this.hasInput || this.hasAddon) && (e.options.popover && this.createPopover(), this.hasAddon && (this.addon.attr("tabindex") || this.addon.attr("tabindex", 0), this.addon.on({ "mousedown.colorpicker touchstart.colorpicker": a["default"].proxy(this.toggle, this) }), this.addon.on({ "focus.colorpicker": a["default"].proxy(this.show, this) }), this.addon.on({ "focusout.colorpicker": a["default"].proxy(this.hide, this) })), this.hasInput && !this.hasAddon && (this.input.on({ "mousedown.colorpicker touchstart.colorpicker": a["default"].proxy(this.show, this), "focus.colorpicker": a["default"].proxy(this.show, this) }), this.input.on({ "focusout.colorpicker": a["default"].proxy(this.hide, this) })), (0, a["default"])(this.root).on("resize.colorpicker", a["default"].proxy(this.reposition, this))))
                        }
                    }, { key: "unbind", value: function() { this.hasInput && (this.input.off({ "mousedown.colorpicker touchstart.colorpicker": a["default"].proxy(this.show, this), "focus.colorpicker": a["default"].proxy(this.show, this) }), this.input.off({ "focusout.colorpicker": a["default"].proxy(this.hide, this) })), this.hasAddon && (this.addon.off({ "mousedown.colorpicker touchstart.colorpicker": a["default"].proxy(this.toggle, this) }), this.addon.off({ "focus.colorpicker": a["default"].proxy(this.show, this) }), this.addon.off({ "focusout.colorpicker": a["default"].proxy(this.hide, this) })), this.popoverTarget && this.popoverTarget.popover("dispose"), (0, a["default"])(this.root).off("resize.colorpicker", a["default"].proxy(this.reposition, this)), (0, a["default"])(this.root.document).off("mousedown.colorpicker touchstart.colorpicker", a["default"].proxy(this.hide, this)), (0, a["default"])(this.root.document).off("mousedown.colorpicker touchstart.colorpicker", a["default"].proxy(this.onClickingInside, this)) } }, { key: "isClickingInside", value: function(e) { return !!e && (this.isOrIsInside(this.popoverTip, e.currentTarget) || this.isOrIsInside(this.popoverTip, e.target) || this.isOrIsInside(this.colorpicker.picker, e.currentTarget) || this.isOrIsInside(this.colorpicker.picker, e.target)) } }, { key: "isOrIsInside", value: function(e, t) { return !(!e || !t) && ((t = (0, a["default"])(t)).is(e) || e.find(t).length > 0) } }, { key: "onClickingInside", value: function(e) { this.clicking = this.isClickingInside(e) } }, {
                        key: "createPopover",
                        value: function() {
                            var e = this.colorpicker;
                            this.popoverTarget = this.hasAddon ? this.addon : this.input, e.picker.addClass("colorpicker-bs-popover-content"), this.popoverTarget.popover(a["default"].extend(!0, {}, s["default"].popover, e.options.popover, { trigger: "manual", content: e.picker, html: !0 })), this.popoverTip = (0, a["default"])(this.popoverTarget.popover("getTipElement").data("bs.popover").tip), this.popoverTip.addClass("colorpicker-bs-popover"), this.popoverTarget.on("shown.bs.popover", a["default"].proxy(this.fireShow, this)), this.popoverTarget.on("hidden.bs.popover", a["default"].proxy(this.fireHide, this))
                        }
                    }, { key: "reposition", value: function() { this.popoverTarget && this.isVisible() && this.popoverTarget.popover("update") } }, { key: "toggle", value: function(e) { this.isVisible() ? this.hide(e) : this.show(e) } }, {
                        key: "show",
                        value: function(e) {
                            if (!(this.isVisible() || this.showing || this.hidding)) {
                                this.showing = !0, this.hidding = !1, this.clicking = !1;
                                var t = this.colorpicker;
                                t.lastEvent.alias = "show", t.lastEvent.e = e, e && (!this.hasInput || "color" === this.input.attr("type")) && e && e.preventDefault && (e.stopPropagation(), e.preventDefault()), this.isPopover && (0, a["default"])(this.root).on("resize.colorpicker", a["default"].proxy(this.reposition, this)), t.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"), this.popoverTarget ? this.popoverTarget.popover("show") : this.fireShow()
                            }
                        }
                    }, { key: "fireShow", value: function() { this.hidding = !1, this.showing = !1, this.isPopover && ((0, a["default"])(this.root.document).on("mousedown.colorpicker touchstart.colorpicker", a["default"].proxy(this.hide, this)), (0, a["default"])(this.root.document).on("mousedown.colorpicker touchstart.colorpicker", a["default"].proxy(this.onClickingInside, this))), this.colorpicker.trigger("colorpickerShow") } }, {
                        key: "hide",
                        value: function(e) {
                            if (!(this.isHidden() || this.showing || this.hidding)) {
                                var t = this.colorpicker,
                                    n = this.clicking || this.isClickingInside(e);
                                this.hidding = !0, this.showing = !1, this.clicking = !1, t.lastEvent.alias = "hide", t.lastEvent.e = e, n ? this.hidding = !1 : this.popoverTarget ? this.popoverTarget.popover("hide") : this.fireHide()
                            }
                        }
                    }, {
                        key: "fireHide",
                        value: function() {
                            this.hidding = !1, this.showing = !1;
                            var e = this.colorpicker;
                            e.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"), (0, a["default"])(this.root).off("resize.colorpicker", a["default"].proxy(this.reposition, this)), (0, a["default"])(this.root.document).off("mousedown.colorpicker touchstart.colorpicker", a["default"].proxy(this.hide, this)), (0, a["default"])(this.root.document).off("mousedown.colorpicker touchstart.colorpicker", a["default"].proxy(this.onClickingInside, this)), e.trigger("colorpickerHide")
                        }
                    }, { key: "focus", value: function() { return this.hasAddon ? this.addon.focus() : !!this.hasInput && this.input.focus() } }, { key: "isVisible", value: function() { return this.colorpicker.picker.hasClass("colorpicker-visible") && !this.colorpicker.picker.hasClass("colorpicker-hidden") } }, { key: "isHidden", value: function() { return this.colorpicker.picker.hasClass("colorpicker-hidden") && !this.colorpicker.picker.hasClass("colorpicker-visible") } }, { key: "input", get: function() { return this.colorpicker.inputHandler.input } }, { key: "hasInput", get: function() { return this.colorpicker.inputHandler.hasInput() } }, { key: "addon", get: function() { return this.colorpicker.addonHandler.addon } }, { key: "hasAddon", get: function() { return this.colorpicker.addonHandler.hasAddon() } }, { key: "isPopover", get: function() { return !this.colorpicker.options.inline && !!this.popoverTip } }]), e
                }();
            t["default"] = l, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) { return e && e.__esModule ? e : { "default": e } }

            function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                }(),
                a = i(n(0)),
                s = i(n(2)),
                l = function() {
                    function e(t) { r(this, e), this.colorpicker = t, this.input = this.colorpicker.element.is("input") ? this.colorpicker.element : !!this.colorpicker.options.input && this.colorpicker.element.find(this.colorpicker.options.input), this.input && 0 === this.input.length && (this.input = !1), this._initValue() }
                    return o(e, [{ key: "bind", value: function() { this.hasInput() && (this.input.on({ "keyup.colorpicker": a["default"].proxy(this.onkeyup, this) }), this.input.on({ "change.colorpicker": a["default"].proxy(this.onchange, this) })) } }, { key: "unbind", value: function() { this.hasInput() && this.input.off(".colorpicker") } }, {
                        key: "_initValue",
                        value: function() {
                            if (this.hasInput()) {
                                var e = "";
                                [this.input.val(), this.input.data("color"), this.input.attr("data-color")].map(function(t) { t && "" === e && (e = t) }), e instanceof s["default"] ? e = this.getFormattedColor(e.string(this.colorpicker.format)) : "string" == typeof e || e instanceof String || (e = ""), this.input.prop("value", e)
                            }
                        }
                    }, { key: "getValue", value: function() { return !!this.hasInput() && this.input.val() } }, {
                        key: "setValue",
                        value: function(e) {
                            if (this.hasInput()) {
                                var t = this.input.prop("value");
                                (e = e || "") !== (t || "") && (this.input.prop("value", e), this.input.trigger({ type: "change", colorpicker: this.colorpicker, color: this.colorpicker.color, value: e }))
                            }
                        }
                    }, { key: "getFormattedColor", value: function() { var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null; return (e = e || this.colorpicker.colorHandler.getColorString()) ? (e = this.colorpicker.colorHandler.resolveColorDelegate(e, !1), !1 === this.colorpicker.options.useHashPrefix && (e = e.replace(/^#/g, "")), e) : "" } }, { key: "hasInput", value: function() { return !1 !== this.input } }, { key: "isEnabled", value: function() { return this.hasInput() && !this.isDisabled() } }, { key: "isDisabled", value: function() { return this.hasInput() && !0 === this.input.prop("disabled") } }, { key: "disable", value: function() { this.hasInput() && this.input.prop("disabled", !0) } }, { key: "enable", value: function() { this.hasInput() && this.input.prop("disabled", !1) } }, { key: "update", value: function() { this.hasInput() && (!1 === this.colorpicker.options.autoInputFallback && this.colorpicker.colorHandler.isInvalidColor() || this.setValue(this.getFormattedColor())) } }, {
                        key: "onchange",
                        value: function(e) {
                            this.colorpicker.lastEvent.alias = "input.change", this.colorpicker.lastEvent.e = e;
                            var t = this.getValue();
                            t !== e.value && this.colorpicker.setValue(t)
                        }
                    }, {
                        key: "onkeyup",
                        value: function(e) {
                            this.colorpicker.lastEvent.alias = "input.keyup", this.colorpicker.lastEvent.e = e;
                            var t = this.getValue();
                            t !== e.value && this.colorpicker.setValue(t)
                        }
                    }]), e
                }();
            t["default"] = l, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(this instanceof i)) return new i(e, t);
                if (t && t in p && (t = null), t && !(t in d)) throw new Error("Unknown model: " + t);
                var n, r;
                if (null == e) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
                else if (e instanceof i) this.model = e.model, this.color = e.color.slice(), this.valpha = e.valpha;
                else if ("string" == typeof e) {
                    var o = u.get(e);
                    if (null === o) throw new Error("Unable to parse color from string: " + e);
                    this.model = o.model, r = d[this.model].channels, this.color = o.value.slice(0, r), this.valpha = "number" == typeof o.value[r] ? o.value[r] : 1
                } else if (e.length) {
                    this.model = t || "rgb", r = d[this.model].channels;
                    var a = h.call(e, 0, r);
                    this.color = c(a, r), this.valpha = "number" == typeof e[r] ? e[r] : 1
                } else if ("number" == typeof e) e &= 16777215, this.model = "rgb", this.color = [e >> 16 & 255, e >> 8 & 255, 255 & e], this.valpha = 1;
                else {
                    this.valpha = 1;
                    var s = Object.keys(e);
                    "alpha" in e && (s.splice(s.indexOf("alpha"), 1), this.valpha = "number" == typeof e.alpha ? e.alpha : 0);
                    var l = s.sort().join("");
                    if (!(l in f)) throw new Error("Unable to parse color from object: " + JSON.stringify(e));
                    this.model = f[l];
                    var g = d[this.model].labels,
                        y = [];
                    for (n = 0; n < g.length; n++) y.push(e[g[n]]);
                    this.color = c(y)
                }
                if (m[this.model])
                    for (r = d[this.model].channels, n = 0; n < r; n++) {
                        var v = m[this.model][n];
                        v && (this.color[n] = v(this.color[n]))
                    }
                this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
            }

            function r(e, t) { return Number(e.toFixed(t)) }

            function o(e) { return function(t) { return r(t, e) } }

            function a(e, t, n) {
                return (e = Array.isArray(e) ? e : [e]).forEach(function(e) {
                        (m[e] || (m[e] = []))[t] = n
                    }), e = e[0],
                    function(i) { var r; return arguments.length ? (n && (i = n(i)), (r = this[e]()).color[t] = i, r) : (r = this[e]().color[t], n && (r = n(r)), r) }
            }

            function s(e) { return function(t) { return Math.max(0, Math.min(e, t)) } }

            function l(e) { return Array.isArray(e) ? e : [e] }

            function c(e, t) { for (var n = 0; n < t; n++) "number" != typeof e[n] && (e[n] = 0); return e }
            var u = n(17),
                d = n(20),
                h = [].slice,
                p = ["keyword", "gray", "hex"],
                f = {};
            Object.keys(d).forEach(function(e) { f[h.call(d[e].labels).sort().join("")] = e });
            var m = {};
            i.prototype = {
                toString: function() { return this.string() },
                toJSON: function() { return this[this.model]() },
                string: function(e) {
                    var t = this.model in u.to ? this : this.rgb(),
                        n = 1 === (t = t.round("number" == typeof e ? e : 1)).valpha ? t.color : t.color.concat(this.valpha);
                    return u.to[t.model](n)
                },
                percentString: function(e) {
                    var t = this.rgb().round("number" == typeof e ? e : 1),
                        n = 1 === t.valpha ? t.color : t.color.concat(this.valpha);
                    return u.to.rgb.percent(n)
                },
                array: function() { return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha) },
                object: function() { for (var e = {}, t = d[this.model].channels, n = d[this.model].labels, i = 0; i < t; i++) e[n[i]] = this.color[i]; return 1 !== this.valpha && (e.alpha = this.valpha), e },
                unitArray: function() { var e = this.rgb().color; return e[0] /= 255, e[1] /= 255, e[2] /= 255, 1 !== this.valpha && e.push(this.valpha), e },
                unitObject: function() { var e = this.rgb().object(); return e.r /= 255, e.g /= 255, e.b /= 255, 1 !== this.valpha && (e.alpha = this.valpha), e },
                round: function(e) { return e = Math.max(e || 0, 0), new i(this.color.map(o(e)).concat(this.valpha), this.model) },
                alpha: function(e) { return arguments.length ? new i(this.color.concat(Math.max(0, Math.min(1, e))), this.model) : this.valpha },
                red: a("rgb", 0, s(255)),
                green: a("rgb", 1, s(255)),
                blue: a("rgb", 2, s(255)),
                hue: a(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(e) { return (e % 360 + 360) % 360 }),
                saturationl: a("hsl", 1, s(100)),
                lightness: a("hsl", 2, s(100)),
                saturationv: a("hsv", 1, s(100)),
                value: a("hsv", 2, s(100)),
                chroma: a("hcg", 1, s(100)),
                gray: a("hcg", 2, s(100)),
                white: a("hwb", 1, s(100)),
                wblack: a("hwb", 2, s(100)),
                cyan: a("cmyk", 0, s(100)),
                magenta: a("cmyk", 1, s(100)),
                yellow: a("cmyk", 2, s(100)),
                black: a("cmyk", 3, s(100)),
                x: a("xyz", 0, s(100)),
                y: a("xyz", 1, s(100)),
                z: a("xyz", 2, s(100)),
                l: a("lab", 0, s(100)),
                a: a("lab", 1),
                b: a("lab", 2),
                keyword: function(e) { return arguments.length ? new i(e) : d[this.model].keyword(this.color) },
                hex: function(e) { return arguments.length ? new i(e) : u.to.hex(this.rgb().round().color) },
                rgbNumber: function() { var e = this.rgb().color; return (255 & e[0]) << 16 | (255 & e[1]) << 8 | 255 & e[2] },
                luminosity: function() {
                    for (var e = this.rgb().color, t = [], n = 0; n < e.length; n++) {
                        var i = e[n] / 255;
                        t[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
                    }
                    return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
                },
                contrast: function(e) {
                    var t = this.luminosity(),
                        n = e.luminosity();
                    return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
                },
                level: function(e) { var t = this.contrast(e); return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "" },
                isDark: function() { var e = this.rgb().color; return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128 },
                isLight: function() { return !this.isDark() },
                negate: function() { for (var e = this.rgb(), t = 0; t < 3; t++) e.color[t] = 255 - e.color[t]; return e },
                lighten: function(e) { var t = this.hsl(); return t.color[2] += t.color[2] * e, t },
                darken: function(e) { var t = this.hsl(); return t.color[2] -= t.color[2] * e, t },
                saturate: function(e) { var t = this.hsl(); return t.color[1] += t.color[1] * e, t },
                desaturate: function(e) { var t = this.hsl(); return t.color[1] -= t.color[1] * e, t },
                whiten: function(e) { var t = this.hwb(); return t.color[1] += t.color[1] * e, t },
                blacken: function(e) { var t = this.hwb(); return t.color[2] += t.color[2] * e, t },
                grayscale: function() {
                    var e = this.rgb().color,
                        t = .3 * e[0] + .59 * e[1] + .11 * e[2];
                    return i.rgb(t, t, t)
                },
                fade: function(e) { return this.alpha(this.valpha - this.valpha * e) },
                opaquer: function(e) { return this.alpha(this.valpha + this.valpha * e) },
                rotate: function(e) {
                    var t = this.hsl(),
                        n = t.color[0];
                    return n = (n = (n + e) % 360) < 0 ? 360 + n : n, t.color[0] = n, t
                },
                mix: function(e, t) {
                    if (!e || !e.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof e);
                    var n = e.rgb(),
                        r = this.rgb(),
                        o = t === undefined ? .5 : t,
                        a = 2 * o - 1,
                        s = n.alpha() - r.alpha(),
                        l = ((a * s == -1 ? a : (a + s) / (1 + a * s)) + 1) / 2,
                        c = 1 - l;
                    return i.rgb(l * n.red() + c * r.red(), l * n.green() + c * r.green(), l * n.blue() + c * r.blue(), n.alpha() * o + r.alpha() * (1 - o))
                }
            }, Object.keys(d).forEach(function(e) {
                if (-1 === p.indexOf(e)) {
                    var t = d[e].channels;
                    i.prototype[e] = function() { if (this.model === e) return new i(this); if (arguments.length) return new i(arguments, e); var n = "number" == typeof arguments[t] ? t : this.valpha; return new i(l(d[this.model][e].raw(this.color)).concat(n), e) }, i[e] = function(n) { return "number" == typeof n && (n = c(h.call(arguments), t)), new i(n, e) }
                }
            }), e.exports = i
        }, function(e, t, n) {
            function i(e, t, n) { return Math.min(Math.max(t, e), n) }

            function r(e) { var t = e.toString(16).toUpperCase(); return t.length < 2 ? "0" + t : t }
            var o = n(5),
                a = n(18),
                s = {};
            for (var l in o) o.hasOwnProperty(l) && (s[o[l]] = l);
            var c = e.exports = { to: {}, get: {} };
            c.get = function(e) {
                var t, n;
                switch (e.substring(0, 3).toLowerCase()) {
                    case "hsl":
                        t = c.get.hsl(e), n = "hsl";
                        break;
                    case "hwb":
                        t = c.get.hwb(e), n = "hwb";
                        break;
                    default:
                        t = c.get.rgb(e), n = "rgb"
                }
                return t ? { model: n, value: t } : null
            }, c.get.rgb = function(e) {
                if (!e) return null;
                var t, n, r, a = /^#([a-f0-9]{3,4})$/i,
                    s = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i,
                    l = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                    c = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                    u = /(\D+)/,
                    d = [0, 0, 0, 1];
                if (t = e.match(s)) {
                    for (r = t[2], t = t[1], n = 0; n < 3; n++) {
                        var h = 2 * n;
                        d[n] = parseInt(t.slice(h, h + 2), 16)
                    }
                    r && (d[3] = Math.round(parseInt(r, 16) / 255 * 100) / 100)
                } else if (t = e.match(a)) {
                    for (r = (t = t[1])[3], n = 0; n < 3; n++) d[n] = parseInt(t[n] + t[n], 16);
                    r && (d[3] = Math.round(parseInt(r + r, 16) / 255 * 100) / 100)
                } else if (t = e.match(l)) {
                    for (n = 0; n < 3; n++) d[n] = parseInt(t[n + 1], 0);
                    t[4] && (d[3] = parseFloat(t[4]))
                } else {
                    if (!(t = e.match(c))) return (t = e.match(u)) ? "transparent" === t[1] ? [0, 0, 0, 0] : (d = o[t[1]]) ? (d[3] = 1, d) : null : null;
                    for (n = 0; n < 3; n++) d[n] = Math.round(2.55 * parseFloat(t[n + 1]));
                    t[4] && (d[3] = parseFloat(t[4]))
                }
                for (n = 0; n < 3; n++) d[n] = i(d[n], 0, 255);
                return d[3] = i(d[3], 0, 1), d
            }, c.get.hsl = function(e) {
                if (!e) return null;
                var t = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                    n = e.match(t);
                if (n) { var r = parseFloat(n[4]); return [(parseFloat(n[1]) + 360) % 360, i(parseFloat(n[2]), 0, 100), i(parseFloat(n[3]), 0, 100), i(isNaN(r) ? 1 : r, 0, 1)] }
                return null
            }, c.get.hwb = function(e) {
                if (!e) return null;
                var t = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                    n = e.match(t);
                if (n) { var r = parseFloat(n[4]); return [(parseFloat(n[1]) % 360 + 360) % 360, i(parseFloat(n[2]), 0, 100), i(parseFloat(n[3]), 0, 100), i(isNaN(r) ? 1 : r, 0, 1)] }
                return null
            }, c.to.hex = function() { var e = a(arguments); return "#" + r(e[0]) + r(e[1]) + r(e[2]) + (e[3] < 1 ? r(Math.round(255 * e[3])) : "") }, c.to.rgb = function() { var e = a(arguments); return e.length < 4 || 1 === e[3] ? "rgb(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ")" : "rgba(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ", " + e[3] + ")" }, c.to.rgb.percent = function() {
                var e = a(arguments),
                    t = Math.round(e[0] / 255 * 100),
                    n = Math.round(e[1] / 255 * 100),
                    i = Math.round(e[2] / 255 * 100);
                return e.length < 4 || 1 === e[3] ? "rgb(" + t + "%, " + n + "%, " + i + "%)" : "rgba(" + t + "%, " + n + "%, " + i + "%, " + e[3] + ")"
            }, c.to.hsl = function() { var e = a(arguments); return e.length < 4 || 1 === e[3] ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)" : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")" }, c.to.hwb = function() {
                var e = a(arguments),
                    t = "";
                return e.length >= 4 && 1 !== e[3] && (t = ", " + e[3]), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")"
            }, c.to.keyword = function(e) { return s[e.slice(0, 3)] }
        }, function(e, t, n) {
            "use strict";
            var i = n(19),
                r = Array.prototype.concat,
                o = Array.prototype.slice,
                a = e.exports = function(e) {
                    for (var t = [], n = 0, a = e.length; n < a; n++) {
                        var s = e[n];
                        i(s) ? t = r.call(t, o.call(s)) : t.push(s)
                    }
                    return t
                };
            a.wrap = function(e) { return function() { return e(a(arguments)) } }
        }, function(e) {
            "use strict";
            e.exports = function(e) { return !!e && (e instanceof Array || Array.isArray(e) || e.length >= 0 && e.splice instanceof Function) }
        }, function(e, t, n) {
            function i(e) { var t = function(t) { return t === undefined || null === t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t)) }; return "conversion" in e && (t.conversion = e.conversion), t }

            function r(e) {
                var t = function(t) {
                    if (t === undefined || null === t) return t;
                    arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
                    var n = e(t);
                    if ("object" == typeof n)
                        for (var i = n.length, r = 0; r < i; r++) n[r] = Math.round(n[r]);
                    return n
                };
                return "conversion" in e && (t.conversion = e.conversion), t
            }
            var o = n(6),
                a = n(21),
                s = {};
            Object.keys(o).forEach(function(e) {
                s[e] = {}, Object.defineProperty(s[e], "channels", { value: o[e].channels }), Object.defineProperty(s[e], "labels", { value: o[e].labels });
                var t = a(e);
                Object.keys(t).forEach(function(n) {
                    var o = t[n];
                    s[e][n] = r(o), s[e][n].raw = i(o)
                })
            }), e.exports = s
        }, function(e, t, n) {
            function i() { for (var e = {}, t = Object.keys(s), n = t.length, i = 0; i < n; i++) e[t[i]] = { distance: -1, parent: null }; return e }

            function r(e) {
                var t = i(),
                    n = [e];
                for (t[e].distance = 0; n.length;)
                    for (var r = n.pop(), o = Object.keys(s[r]), a = o.length, l = 0; l < a; l++) {
                        var c = o[l],
                            u = t[c]; - 1 === u.distance && (u.distance = t[r].distance + 1, u.parent = r, n.unshift(c))
                    }
                return t
            }

            function o(e, t) { return function(n) { return t(e(n)) } }

            function a(e, t) { for (var n = [t[e].parent, e], i = s[t[e].parent][e], r = t[e].parent; t[r].parent;) n.unshift(t[r].parent), i = o(s[t[r].parent][r], i), r = t[r].parent; return i.conversion = n, i }
            var s = n(6);
            e.exports = function(e) {
                for (var t = r(e), n = {}, i = Object.keys(t), o = i.length, s = 0; s < o; s++) {
                    var l = i[s];
                    null !== t[l].parent && (n[l] = a(l, t))
                }
                return n
            }
        }, function(e, t, n) {
            "use strict";

            function i(e) { return e && e.__esModule ? e : { "default": e } }

            function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                }(),
                a = i(n(0)),
                s = i(n(2)),
                l = function() {
                    function e(t) { r(this, e), this.colorpicker = t }
                    return o(e, [{ key: "bind", value: function() { this.colorpicker.options.color ? this.color = this.createColor(this.colorpicker.options.color) : !this.color && this.colorpicker.inputHandler.getValue() && (this.color = this.createColor(this.colorpicker.inputHandler.getValue(), this.colorpicker.options.autoInputFallback)) } }, { key: "unbind", value: function() { this.colorpicker.element.removeData("color") } }, { key: "getColorString", value: function() { return this.hasColor() ? this.color.string(this.format) : "" } }, {
                        key: "setColorString",
                        value: function(e) {
                            var t = e ? this.createColor(e) : null;
                            this.color = t || null
                        }
                    }, {
                        key: "createColor",
                        value: function(e) {
                            var t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1],
                                n = new s["default"](this.resolveColorDelegate(e), this.format);
                            return n.isValid() || (t && (n = this.getFallbackColor()), this.colorpicker.trigger("colorpickerInvalid", n, e)), this.isAlphaEnabled() || (n.alpha = 1), n
                        }
                    }, {
                        key: "getFallbackColor",
                        value: function() {
                            if (this.fallback && this.fallback === this.color) return this.color;
                            var e = this.resolveColorDelegate(this.fallback),
                                t = new s["default"](e, this.format);
                            return t.isValid() ? t : (console.warn("The fallback color is invalid. Falling back to the previous color or black if any."), this.color ? this.color : new s["default"]("#000000", this.format))
                        }
                    }, { key: "assureColor", value: function() { return this.hasColor() || (this.color = this.getFallbackColor()), this.color } }, {
                        key: "resolveColorDelegate",
                        value: function(e) {
                            var t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1],
                                n = !1;
                            return a["default"].each(this.colorpicker.extensions, function(i, r) {!1 === n && (n = r.resolveColor(e, t)) }), n || e
                        }
                    }, { key: "isInvalidColor", value: function() { return !this.hasColor() || !this.color.isValid() } }, { key: "isAlphaEnabled", value: function() { return !1 !== this.colorpicker.options.useAlpha } }, { key: "hasColor", value: function() { return this.color instanceof s["default"] } }, { key: "fallback", get: function() { return this.colorpicker.options.fallbackColor ? this.colorpicker.options.fallbackColor : this.hasColor() ? this.color : null } }, { key: "format", get: function() { return this.colorpicker.options.format ? this.colorpicker.options.format : this.hasColor() && this.color.hasTransparency() && this.color.format.match(/^hex/) ? this.isAlphaEnabled() ? "rgba" : "hex" : this.hasColor() ? this.color.format : "rgb" } }, { key: "color", get: function() { return this.colorpicker.element.data("color") }, set: function(e) { this.colorpicker.element.data("color", e), e instanceof s["default"] && "auto" === this.colorpicker.options.format && (this.colorpicker.options.format = this.color.format) } }]), e
                }();
            t["default"] = l, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function i(e) { return e && e.__esModule ? e : { "default": e } }

            function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                }(),
                a = i(n(0)),
                s = function() {
                    function e(t) { r(this, e), this.colorpicker = t, this.picker = null }
                    return o(e, [{
                        key: "bind",
                        value: function() {
                            var e = this.picker = (0, a["default"])(this.options.template);
                            this.options.customClass && e.addClass(this.options.customClass), this.options.horizontal && e.addClass("colorpicker-horizontal"), this._supportsAlphaBar() ? (this.options.useAlpha = !0, e.addClass("colorpicker-with-alpha")) : this.options.useAlpha = !1
                        }
                    }, {
                        key: "attach",
                        value: function() {
                            var e = this.colorpicker.container ? this.colorpicker.container : null;
                            e && this.picker.appendTo(e)
                        }
                    }, { key: "unbind", value: function() { this.picker.remove() } }, { key: "_supportsAlphaBar", value: function() { return (this.options.useAlpha || this.colorpicker.colorHandler.hasColor() && this.color.hasTransparency()) && !1 !== this.options.useAlpha && (!this.options.format || this.options.format && !this.options.format.match(/^hex([36])?$/i)) } }, {
                        key: "update",
                        value: function() {
                            if (this.colorpicker.colorHandler.hasColor()) {
                                var e = !0 !== this.options.horizontal,
                                    t = e ? this.options.sliders : this.options.slidersHorz,
                                    n = this.picker.find(".colorpicker-saturation .colorpicker-guide"),
                                    i = this.picker.find(".colorpicker-hue .colorpicker-guide"),
                                    r = this.picker.find(".colorpicker-alpha .colorpicker-guide"),
                                    o = this.color.toHsvaRatio();
                                i.length && i.css(e ? "top" : "left", (e ? t.hue.maxTop : t.hue.maxLeft) * (1 - o.h)), r.length && r.css(e ? "top" : "left", (e ? t.alpha.maxTop : t.alpha.maxLeft) * (1 - o.a)), n.length && n.css({ top: t.saturation.maxTop - o.v * t.saturation.maxTop, left: o.s * t.saturation.maxLeft }), this.picker.find(".colorpicker-saturation").css("backgroundColor", this.color.getCloneHueOnly().toHexString());
                                var a = this.color.toHexString(),
                                    s = "";
                                s = this.options.horizontal ? "linear-gradient(to right, " + a + " 0%, transparent 100%)" : "linear-gradient(to bottom, " + a + " 0%, transparent 100%)", this.picker.find(".colorpicker-alpha-color").css("background", s)
                            }
                        }
                    }, { key: "options", get: function() { return this.colorpicker.options } }, { key: "color", get: function() { return this.colorpicker.colorHandler.color } }]), e
                }();
            t["default"] = s, e.exports = t["default"]
        }, function(e, t) {
            "use strict";

            function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t }
                }(),
                r = function() {
                    function e(t) { n(this, e), this.colorpicker = t, this.addon = null }
                    return i(e, [{ key: "hasAddon", value: function() { return !!this.addon } }, { key: "bind", value: function() { this.addon = this.colorpicker.options.addon ? this.colorpicker.element.find(this.colorpicker.options.addon) : null, this.addon && 0 === this.addon.length && (this.addon = null) } }, { key: "unbind", value: function() { this.hasAddon() && this.addon.off(".colorpicker") } }, {
                        key: "update",
                        value: function() {
                            if (this.colorpicker.colorHandler.hasColor() && this.hasAddon()) {
                                var e = { background: this.colorpicker.colorHandler.getColorString() },
                                    t = this.addon.find("i").eq(0);
                                t.length > 0 ? t.css(e) : this.addon.css(e)
                            }
                        }
                    }]), e
                }();
            t["default"] = r, e.exports = t["default"]
        }])
    }),
    function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("bs.toggle"),
                    o = "object" == typeof t && t;
                r || i.data("bs.toggle", r = new n(this, o)), "string" == typeof t && r[t] && r[t]()
            })
        }
        var n = function(t, n) { this.$element = e(t), this.options = e.extend({}, this.defaults(), n), this.render() };
        n.VERSION = "3.4.0-beta", n.DEFAULTS = { on: "On", off: "Off", onstyle: "primary", offstyle: "light", size: "normal", style: "", width: null, height: null }, n.prototype.defaults = function() { return { on: this.$element.attr("data-on") || n.DEFAULTS.on, off: this.$element.attr("data-off") || n.DEFAULTS.off, onstyle: this.$element.attr("data-onstyle") || n.DEFAULTS.onstyle, offstyle: this.$element.attr("data-offstyle") || n.DEFAULTS.offstyle, size: this.$element.attr("data-size") || n.DEFAULTS.size, style: this.$element.attr("data-style") || n.DEFAULTS.style, width: this.$element.attr("data-width") || n.DEFAULTS.width, height: this.$element.attr("data-height") || n.DEFAULTS.height } }, n.prototype.render = function() {
            this._onstyle = "btn-" + this.options.onstyle, this._offstyle = "btn-" + this.options.offstyle;
            var t = "large" === this.options.size || "lg" === this.options.size ? "btn-lg" : "small" === this.options.size || "sm" === this.options.size ? "btn-sm" : "mini" === this.options.size || "xs" === this.options.size ? "btn-xs" : "",
                n = e('<label class="btn">').html(this.options.on).addClass(this._onstyle + " " + t),
                i = e('<label class="btn">').html(this.options.off).addClass(this._offstyle + " " + t),
                r = e('<span class="toggle-handle btn btn-light">').addClass(t),
                o = e('<div class="toggle-group">').append(n, i, r),
                a = e('<div class="toggle btn" data-toggle="toggle">').addClass(this.$element.prop("checked") ? this._onstyle : this._offstyle + " off").addClass(t).addClass(this.options.style);
            this.$element.wrap(a), e.extend(this, { $toggle: this.$element.parent(), $toggleOn: n, $toggleOff: i, $toggleGroup: o }), this.$toggle.append(o);
            var s = this.options.width || Math.max(n.outerWidth(), i.outerWidth()) + r.outerWidth() / 2,
                l = this.options.height || Math.max(n.outerHeight(), i.outerHeight());
            n.addClass("toggle-on"), i.addClass("toggle-off"), this.$toggle.css({ width: s, height: l }), this.options.height && (n.css("line-height", n.height() + "px"), i.css("line-height", i.height() + "px")), this.update(!0), this.trigger(!0)
        }, n.prototype.toggle = function() { this.$element.prop("checked") ? this.off() : this.on() }, n.prototype.on = function(e) {
            if (this.$element.prop("disabled")) return !1;
            this.$toggle.removeClass(this._offstyle + " off").addClass(this._onstyle), this.$element.prop("checked", !0), e || this.trigger()
        }, n.prototype.off = function(e) {
            if (this.$element.prop("disabled")) return !1;
            this.$toggle.removeClass(this._onstyle).addClass(this._offstyle + " off"), this.$element.prop("checked", !1), e || this.trigger()
        }, n.prototype.enable = function() { this.$toggle.removeAttr("disabled"), this.$element.prop("disabled", !1) }, n.prototype.disable = function() { this.$toggle.attr("disabled", "disabled"), this.$element.prop("disabled", !0) }, n.prototype.update = function(e) { this.$element.prop("disabled") ? this.disable() : this.enable(), this.$element.prop("checked") ? this.on(e) : this.off(e) }, n.prototype.trigger = function(t) { this.$element.off("change.bs.toggle"), t || this.$element.change(), this.$element.on("change.bs.toggle", e.proxy(function() { this.update() }, this)) }, n.prototype.destroy = function() { this.$element.off("change.bs.toggle"), this.$toggleGroup.remove(), this.$element.removeData("bs.toggle"), this.$element.unwrap() };
        var i = e.fn.bootstrapToggle;
        e.fn.bootstrapToggle = t, e.fn.bootstrapToggle.Constructor = n, e.fn.toggle.noConflict = function() { return e.fn.bootstrapToggle = i, this }, e(function() { e("input[type=checkbox][data-toggle^=toggle]").bootstrapToggle() }), e(document).on("touch.bs.toggle click.bs.toggle", "div[data-toggle^=toggle]", function(t) { e(this).find("input[type=checkbox]").bootstrapToggle("toggle"), t.preventDefault() })
    }(jQuery),
    /*! Tablesaw - v3.1.2 - 2019-03-19
     * https://github.com/filamentgroup/tablesaw
     * Copyright (c) 2019 Filament Group; Licensed MIT */
    function(e, t) { "function" == typeof define && define.amd ? define(["jquery"], function(n) { return e.Tablesaw = t(n, e) }) : "object" == typeof exports ? module.exports = t("document" in e ? require("jquery") : require("jquery")(e), e) : e.Tablesaw = t(jQuery, e) }("undefined" != typeof window ? window : this, function(e, t) {
        "use strict";
        var n = t.document,
            i = /complete|loaded/.test(n.readyState);
        n.addEventListener("DOMContentLoaded", function() { i = !0 });
        var r, o, a, s, l, c, u, d = {
            i18n: { modeStack: "Stack", modeSwipe: "Swipe", modeToggle: "Toggle", modeSwitchColumnsAbbreviated: "Cols", modeSwitchColumns: "Columns", columnToggleButton: "Columns", columnToggleError: "No eligible columns.", sort: "Sort", swipePreviousColumn: "Previous column", swipeNextColumn: "Next column" },
            mustard: "head" in n && (!t.blackberry || t.WebKitPoint) && !t.operamini,
            $: e,
            _init: function(e) { d.$(e || n).trigger("enhance.tablesaw") },
            init: function(e) {
                (i = i || /complete|loaded/.test(n.readyState)) ? d._init(e): "addEventListener" in n && n.addEventListener("DOMContentLoaded", function() { d._init(e) })
            }
        };
        return e(n).on("enhance.tablesaw", function() { "undefined" != typeof TablesawConfig && TablesawConfig.i18n && (d.i18n = e.extend(d.i18n, TablesawConfig.i18n || {})), d.i18n.modes = [d.i18n.modeStack, d.i18n.modeSwipe, d.i18n.modeToggle] }), d.mustard && e(n.documentElement).addClass("tablesaw-enhanced"),
            function() {
                var i = "tablesaw",
                    r = { toolbar: "tablesaw-bar" },
                    o = { create: "tablesawcreate", destroy: "tablesawdestroy", refresh: "tablesawrefresh", resize: "tablesawresize" },
                    a = "stack",
                    s = "table",
                    l = "[data-tablesaw],[data-tablesaw-mode],[data-tablesaw-sortable]",
                    c = {};
                d.events = o;
                var u = function(t) {
                    if (!t) throw new Error("Tablesaw requires an element.");
                    this.table = t, this.$table = e(t), this.$thead = this.$table.children().filter("thead").eq(0), this.$tbody = this.$table.children().filter("tbody"), this.mode = this.$table.attr("data-tablesaw-mode") || a, this.$toolbar = null, this.attributes = { subrow: "data-tablesaw-subrow", ignorerow: "data-tablesaw-ignorerow" }, this.init()
                };
                u.prototype.init = function() {
                    if (!this.$thead.length) throw new Error("tablesaw: a <thead> is required, but none was found.");
                    if (!this.$thead.find("th").length) throw new Error("tablesaw: no header cells found. Are you using <th> inside of <thead>?");
                    this.$table.attr("id") || this.$table.attr("id", i + "-" + Math.round(1e4 * Math.random())), this.createToolbar(), this._initCells(), this.$table.data(i, this), this.$table.trigger(o.create, [this])
                }, u.prototype.getConfig = function(t) { var n = e.extend(c, t || {}); return e.extend(n, "undefined" != typeof TablesawConfig ? TablesawConfig : {}) }, u.prototype._getPrimaryHeaderRow = function() { return this._getHeaderRows().eq(0) }, u.prototype._getHeaderRows = function() { return this.$thead.children().filter("tr").filter(function() { return !e(this).is("[data-tablesaw-ignorerow]") }) }, u.prototype._getRowIndex = function(e) { return e.prevAll().length }, u.prototype._getHeaderRowIndeces = function() {
                    var t = this,
                        n = [];
                    return this._getHeaderRows().each(function() { n.push(t._getRowIndex(e(this))) }), n
                }, u.prototype._getPrimaryHeaderCells = function(e) { return (e || this._getPrimaryHeaderRow()).find("th") }, u.prototype._$getCells = function(t) {
                    var n = this;
                    return e(t).add(t.cells).filter(function() {
                        var t = e(this),
                            i = t.parent(),
                            r = t.is("[colspan]");
                        return !(i.is("[" + n.attributes.subrow + "]") || i.is("[" + n.attributes.ignorerow + "]") && r)
                    })
                }, u.prototype._getVisibleColspan = function() { var t = 0; return this._getPrimaryHeaderCells().each(function() { var n = e(this); "none" !== n.css("display") && (t += parseInt(n.attr("colspan"), 10) || 1) }), t }, u.prototype.getColspanForCell = function(t) {
                    var n = this._getVisibleColspan(),
                        i = 0;
                    return t.closest("tr").data("tablesaw-rowspanned") && i++, t.siblings().each(function() {
                        var t = e(this),
                            n = parseInt(t.attr("colspan"), 10) || 1;
                        "none" !== t.css("display") && (i += n)
                    }), n - i
                }, u.prototype.isCellInColumn = function(t, n) { return e(t).add(t.cells).filter(function() { return this === n }).length }, u.prototype.updateColspanCells = function(t, n, i) {
                    var r = this,
                        o = r._getPrimaryHeaderRow();
                    this.$table.find("[rowspan][data-tablesaw-priority]").each(function() {
                        var t = e(this);
                        if ("persist" === t.attr("data-tablesaw-priority")) {
                            var n = t.closest("tr"),
                                i = parseInt(t.attr("rowspan"), 10);
                            i > 1 && ((n = n.next()).data("tablesaw-rowspanned", !0), i--)
                        }
                    }), this.$table.find("[colspan],[data-tablesaw-maxcolspan]").filter(function() { return e(this).closest("tr")[0] !== o[0] }).each(function() {
                        var o = e(this);
                        if (i === undefined || r.isCellInColumn(n, this)) {
                            var a = r.getColspanForCell(o);
                            t && i !== undefined && o[0 === a ? "addClass" : "removeClass"](t);
                            var s = parseInt(o.attr("data-tablesaw-maxcolspan"), 10);
                            s ? a > s && (a = s) : o.attr("data-tablesaw-maxcolspan", o.attr("colspan")), o.attr("colspan", a)
                        }
                    })
                }, u.prototype._findPrimaryHeadersForCell = function(e) {
                    for (var t = this._getPrimaryHeaderRow(), n = this._getRowIndex(t), i = [], r = 0; r < this.headerMapping.length; r++)
                        if (r !== n)
                            for (var o = 0; o < this.headerMapping[r].length; o++) this.headerMapping[r][o] === e && i.push(this.headerMapping[n][o]);
                    return i
                }, u.prototype.getRows = function() { var t = this; return this.$table.find("tr").filter(function() { return e(this).closest("table").is(t.$table) }) }, u.prototype.getBodyRows = function(t) { return (t ? e(t) : this.$tbody).children().filter("tr") }, u.prototype.getHeaderCellIndex = function(e) {
                    for (var t = this.headerMapping[0], n = 0; n < t.length; n++)
                        if (t[n] === e) return n;
                    return -1
                }, u.prototype._initCells = function() {
                    this.$table.find("[data-tablesaw-maxcolspan]").each(function() {
                        var t = e(this);
                        t.attr("colspan", t.attr("data-tablesaw-maxcolspan"))
                    });
                    var t = this.getRows(),
                        n = [];
                    t.each(function(e) { n[e] = [] }), t.each(function(t) {
                        var i = 0;
                        e(this).children().each(function() {
                            for (var e = parseInt(this.getAttribute("data-tablesaw-maxcolspan") || this.getAttribute("colspan"), 10), r = parseInt(this.getAttribute("rowspan"), 10); n[t][i];) i++;
                            if (n[t][i] = this, e)
                                for (var o = 0; o < e - 1; o++) i++, n[t][i] = this;
                            if (r)
                                for (var a = 1; a < r; a++) n[t + a][i] = this;
                            i++
                        })
                    });
                    for (var i = this._getHeaderRowIndeces(), r = 0; r < n[0].length; r++)
                        for (var o = 0, a = i.length; o < a; o++) {
                            var s, l = n[i[o]][r],
                                c = i[o];
                            for (l.cells || (l.cells = []); c < n.length;) l !== (s = n[c][r]) && l.cells.push(s), c++
                        }
                    this.headerMapping = n
                }, u.prototype.refresh = function() { this._initCells(), this.$table.trigger(o.refresh, [this]) }, u.prototype._getToolbarAnchor = function() { var e = this.$table.parent(); return e.is(".tablesaw-overflow") ? e : this.$table }, u.prototype._getToolbar = function(e) { return e || (e = this._getToolbarAnchor()), e.prev().filter("." + r.toolbar) }, u.prototype.createToolbar = function() {
                    var t = this._getToolbarAnchor(),
                        n = this._getToolbar(t);
                    n.length || (n = e("<div>").addClass(r.toolbar).insertBefore(t)), this.$toolbar = n, this.mode && this.$toolbar.addClass("tablesaw-mode-" + this.mode)
                }, u.prototype.destroy = function() {
                    this._getToolbar().each(function() { this.className = this.className.replace(/\btablesaw-mode\-\w*\b/gi, "") });
                    var r = this.$table.attr("id");
                    e(n).off("." + r), e(t).off("." + r), this.$table.trigger(o.destroy, [this]), this.$table.removeData(i)
                }, e.fn[i] = function() { return this.each(function() { e(this).data(i) || new u(this) }) };
                var h = e(n);
                h.on("enhance.tablesaw", function(t) {
                    if (d.mustard) {
                        var n = e(t.target);
                        n.parent().length && (n = n.parent()), n.find(s).filter(l)[i]()
                    }
                });
                var p, f, m = !1;
                h.on("scroll.tablesaw", function() { m = !0, t.clearTimeout(p), p = t.setTimeout(function() { m = !1 }, 300) }), e(t).on("resize", function() { m || (t.clearTimeout(f), f = t.setTimeout(function() { h.trigger(o.resize) }, 150)) }), d.Table = u
            }(), r = { stackTable: "tablesaw-stack", cellLabels: "tablesaw-cell-label", cellContentLabels: "tablesaw-cell-content" }, o = { key: "tablesaw-stack" }, a = { labelless: "data-tablesaw-no-labels", hideempty: "data-tablesaw-hide-empty" }, (s = function(t, n) { this.tablesaw = n, this.$table = e(t), this.labelless = this.$table.is("[" + a.labelless + "]"), this.hideempty = this.$table.is("[" + a.hideempty + "]"), this.$table.data(o.key, this) }).prototype.init = function() {
                if (this.$table.addClass(r.stackTable), !this.labelless) {
                    var t = this;
                    this.$table.find("th, td").filter(function() { return !e(this).closest("thead").length }).filter(function() { return !(e(this).is("[" + a.labelless + "]") || e(this).closest("tr").is("[" + a.labelless + "]") || t.hideempty && !e(this).html()) }).each(function() {
                        var i = e(n.createElement("b")).addClass(r.cellLabels),
                            o = e(this);
                        e(t.tablesaw._findPrimaryHeadersForCell(this)).each(function(t) {
                            var r = e(this.cloneNode(!0)),
                                o = r.find(".tablesaw-sortable-btn");
                            r.find(".tablesaw-sortable-arrow").remove();
                            var a = r.find("[data-tablesaw-checkall]");
                            if (a.closest("label").remove(), a.length) i = e([]);
                            else { t > 0 && i.append(n.createTextNode(", ")); for (var s, l = o.length ? o[0] : r[0]; s = l.firstChild;) i[0].appendChild(s) }
                        }), i.length && !o.find("." + r.cellContentLabels).length && o.wrapInner("<span class='" + r.cellContentLabels + "'></span>");
                        var a = o.find("." + r.cellLabels);
                        a.length ? a.replaceWith(i) : (o.prepend(n.createTextNode(" ")), o.prepend(i))
                    })
                }
            }, s.prototype.destroy = function() { this.$table.removeClass(r.stackTable), this.$table.find("." + r.cellLabels).remove(), this.$table.find("." + r.cellContentLabels).each(function() { e(this).replaceWith(e(this.childNodes)) }) }, e(n).on(d.events.create, function(e, t) { "stack" === t.mode && new s(t.table, t).init() }).on(d.events.refresh, function(t, n) { "stack" === n.mode && e(n.table).data(o.key).init() }).on(d.events.destroy, function(t, n) { "stack" === n.mode && e(n.table).data(o.key).destroy() }), d.Stack = s, l = "tablesawbtn", c = {
                _create: function() { return e(this).each(function() { e(this).trigger("beforecreate." + l)[l]("_init").trigger("create." + l) }) },
                _init: function() {
                    var t = e(this),
                        n = this.getElementsByTagName("select")[0];
                    return n && e(this).addClass("btn-select tablesaw-btn-select")[l]("_select", n), t
                },
                _select: function(t) {
                    var i = function(t, i) {
                        var r, o, a = e(i).find("option"),
                            s = n.createElement("span"),
                            l = !1;
                        if (s.setAttribute("aria-hidden", "true"), s.innerHTML = "&#160;", a.each(function() {
                                var e = this;
                                e.selected && (s.innerHTML = e.text)
                            }), o = t.childNodes, a.length > 0) {
                            for (var c = 0, u = o.length; c < u; c++)(r = o[c]) && "SPAN" === r.nodeName.toUpperCase() && (t.replaceChild(s, r), l = !0);
                            l || t.insertBefore(s, t.firstChild)
                        }
                    };
                    i(this, t), e(this).on("change refresh", function() { i(this, t) })
                }
            }, e.fn[l] = function(t, n, i, r) { return this.each(function() { return t && "string" == typeof t ? e.fn[l].prototype[t].call(this, n, i, r) : e(this).data(l + "active") ? e(this) : (e(this).data(l + "active", !0), void e.fn[l].prototype._create.call(this)) }) }, e.extend(e.fn[l].prototype, c),
            function() {
                var i = { key: "tablesaw-coltoggle" },
                    r = function(t) { this.$table = e(t), this.$table.length && (this.tablesaw = this.$table.data("tablesaw"), this.attributes = { btnTarget: "data-tablesaw-columntoggle-btn-target", set: "data-tablesaw-columntoggle-set" }, this.classes = { columnToggleTable: "tablesaw-columntoggle", columnBtnContain: "tablesaw-columntoggle-btnwrap tablesaw-advance", columnBtn: "tablesaw-columntoggle-btn tablesaw-nav-btn down", popup: "tablesaw-columntoggle-popup", priorityPrefix: "tablesaw-priority-" }, this.set = [], this.$headers = this.tablesaw._getPrimaryHeaderCells(), this.$table.data(i.key, this)) };
                r.prototype.initSet = function() {
                    var t = this.$table.attr(this.attributes.set);
                    if (t) {
                        var n = this.$table[0];
                        this.set = e("table[" + this.attributes.set + "='" + t + "']").filter(function() { return this !== n }).get()
                    }
                }, r.prototype.init = function() {
                    function r(e) {
                        var t = e.checked,
                            n = f.getHeaderFromCheckbox(e),
                            i = f.tablesaw._$getCells(n);
                        i[t ? "removeClass" : "addClass"]("tablesaw-toggle-cellhidden"), i[t ? "addClass" : "removeClass"]("tablesaw-toggle-cellvisible"), f.updateColspanCells(n, t), f.$table.trigger("tablesawcolumns")
                    }

                    function o(t) { t && e(t.target).closest("." + f.classes.popup).length || (e(n).off("click." + s), c.removeClass("up").addClass("down"), p.removeClass("visible")) }

                    function a() { p.addClass("visible"), c.removeClass("down").addClass("up"), e(n).off("click." + s, o), t.clearTimeout(y), y = t.setTimeout(function() { e(n).on("click." + s, o) }, 15) }
                    if (this.$table.length) {
                        var s, l, c, u, h, p, f = this,
                            m = this.tablesaw.getConfig({ getColumnToggleLabelTemplate: function(e) { return "<label><input type='checkbox' checked>" + e + "</label>" } });
                        this.$table.addClass(this.classes.columnToggleTable), l = (s = this.$table.attr("id")) + "-popup", p = e("<div class='" + this.classes.columnBtnContain + "'></div>"), c = e("<a href='#" + l + "' class='btn tablesaw-btn btn-micro " + this.classes.columnBtn + "' data-popup-link><span>" + d.i18n.columnToggleButton + "</span></a>"), u = e("<div class='" + this.classes.popup + "' id='" + l + "'></div>"), h = e("<div class='tablesaw-btn-group'></div>"), this.$popup = u;
                        var g = !1;
                        this.$headers.each(function() {
                            var t = e(this),
                                n = t.attr("data-tablesaw-priority"),
                                i = f.tablesaw._$getCells(this);
                            n && "persist" !== n && (i.addClass(f.classes.priorityPrefix + n), e(m.getColumnToggleLabelTemplate(t.text())).appendTo(h).find('input[type="checkbox"]').data("tablesaw-header", this), g = !0)
                        }), g || h.append("<label>" + d.i18n.columnToggleError + "</label>"), h.appendTo(u), h.find('input[type="checkbox"]').on("change", function(t) {
                            var n;
                            (r(t.target), f.set.length) && (e(f.$popup).find("input[type='checkbox']").each(function(e) { if (this === t.target) return n = e, !1 }), e(f.set).each(function() {
                                var o = e(this).data(i.key).$popup.find("input[type='checkbox']").get(n);
                                o && (o.checked = t.target.checked, r(o))
                            }))
                        }), c.appendTo(p);
                        var y, v = e(this.$table.attr(this.attributes.btnTarget));
                        p.appendTo(v.length ? v : this.tablesaw.$toolbar), c.on("click.tablesaw", function(e) { e.preventDefault(), p.is(".visible") ? o() : a() }), u.appendTo(p), this.$menu = h;
                        var b, k = this.$table.closest(".tablesaw-overflow");
                        if (k.css("-webkit-overflow-scrolling")) k.on("scroll", function() {
                            var n = e(this);
                            t.clearTimeout(b), b = t.setTimeout(function() { n.css("-webkit-overflow-scrolling", "auto"), t.setTimeout(function() { n.css("-webkit-overflow-scrolling", "touch") }, 0) }, 100)
                        });
                        e(t).on(d.events.resize + "." + s, function() { f.refreshToggle() }), this.initSet(), this.refreshToggle()
                    }
                }, r.prototype.getHeaderFromCheckbox = function(t) { return e(t).data("tablesaw-header") }, r.prototype.refreshToggle = function() {
                    var e = this;
                    this.$menu.find("input").each(function() {
                        var t = e.getHeaderFromCheckbox(this);
                        this.checked = "table-cell" === e.tablesaw._$getCells(t).eq(0).css("display")
                    }), this.updateColspanCells()
                }, r.prototype.updateColspanCells = function(e, t) { this.tablesaw.updateColspanCells("tablesaw-toggle-cellhidden", e, t) }, r.prototype.destroy = function() { this.$table.removeClass(this.classes.columnToggleTable), this.$table.find("th, td").each(function() { e(this).removeClass("tablesaw-toggle-cellhidden").removeClass("tablesaw-toggle-cellvisible"), this.className = this.className.replace(/\bui\-table\-priority\-\d\b/g, "") }) }, e(n).on(d.events.create, function(e, t) { "columntoggle" === t.mode && new r(t.table).init() }), e(n).on(d.events.destroy, function(t, n) { "columntoggle" === n.mode && e(n.table).data(i.key).destroy() }), e(n).on(d.events.refresh, function(t, n) { "columntoggle" === n.mode && e(n.table).data(i.key).refreshToggle() }), d.ColumnToggle = r
            }(),
            function() {
                function t(t) {
                    var n = [];
                    return e(t.childNodes).each(function() {
                        var t = e(this);
                        t.is("input, select") ? n.push(t.val()) : t.is(".tablesaw-cell-label") || n.push((t.text() || "").replace(/^\s+|\s+$/g, ""))
                    }), n.join("")
                }
                var i = "tablesaw-sortable",
                    r = "table[data-" + i + "]",
                    o = "[data-" + i + "-switch]",
                    a = { sortCol: "data-tablesaw-sortable-col", defaultCol: "data-tablesaw-sortable-default-col", numericCol: "data-tablesaw-sortable-numeric", subRow: "data-tablesaw-subrow", ignoreRow: "data-tablesaw-ignorerow" },
                    s = { head: i + "-head", ascend: i + "-ascending", descend: i + "-descending", switcher: i + "-switch", tableToolbar: "tablesaw-bar-section", sortButton: i + "-btn" },
                    l = {
                        _create: function(t) {
                            return e(this).each(function() {
                                if (e(this).data(i + "-init")) return !1;
                                e(this).data(i + "-init", !0).trigger("beforecreate." + i)[i]("_init", t).trigger("create." + i)
                            })
                        },
                        _init: function() {
                            function n(t) { e.each(t, function(t, n) { e(n).addClass(s.head) }) }

                            function r(t, n) {
                                e.each(t, function(t, i) {
                                    var r = e("<button class='" + s.sortButton + "'/>");
                                    r.on("click", { col: i }, n), e(i).wrapInner(r).find("button").append("<span class='tablesaw-sortable-arrow'>")
                                })
                            }

                            function l(t) {
                                e.each(t, function(t, n) {
                                    var i = e(n);
                                    i.removeAttr(a.defaultCol), i.removeClass(s.ascend), i.removeClass(s.descend)
                                })
                            }

                            function c(t) {
                                if (!e(t.target).is("a[href]")) {
                                    t.stopPropagation();
                                    var n = e(t.target).closest("[" + a.sortCol + "]"),
                                        r = t.data.col,
                                        o = p.index(n[0]);
                                    l(n.closest("thead").find("th").filter(function() { return this !== n[0] })), n.is("." + s.descend) || !n.is("." + s.ascend) ? (m[i]("sortBy", r, !0), o += "_asc") : (m[i]("sortBy", r), o += "_desc"), f && f.find("select").val(o).trigger("refresh"), t.preventDefault()
                                }
                            }

                            function u(t) {
                                e.each(t, function(t, n) {
                                    var i = e(n);
                                    i.is("[" + a.defaultCol + "]") && (i.is("." + s.descend) || i.addClass(s.ascend))
                                })
                            }

                            function h(n) {
                                f = e("<div>").addClass(s.switcher).addClass(s.tableToolbar);
                                var r = ["<label>" + d.i18n.sort + ":"];
                                r.push('<span class="btn tablesaw-btn"><select>'), n.each(function(n) {
                                    var i = e(this),
                                        o = i.is("[" + a.defaultCol + "]"),
                                        l = i.is("." + s.descend),
                                        c = i.is("[" + a.numericCol + "]"),
                                        u = 0,
                                        d = 5;
                                    e(this.cells.slice(0, d)).each(function() { isNaN(parseInt(t(this), 10)) || u++ });
                                    var h = u === d;
                                    c || i.attr(a.numericCol, h ? "" : "false"), r.push("<option" + (o && !l ? " selected" : "") + ' value="' + n + '_asc">' + i.text() + " " + (h ? "&#x2191;" : "(A-Z)") + "</option>"), r.push("<option" + (o && l ? " selected" : "") + ' value="' + n + '_desc">' + i.text() + " " + (h ? "&#x2193;" : "(Z-A)") + "</option>")
                                }), r.push("</select></span></label>"), f.html(r.join(""));
                                var o = g.$toolbar.children().eq(0);
                                o.length ? f.insertBefore(o) : f.appendTo(g.$toolbar), f.find(".tablesaw-btn").tablesawbtn(), f.find("select").on("change", function() {
                                    var t = e(this).val().split("_"),
                                        r = n.eq(t[0]);
                                    l(r.siblings()), m[i]("sortBy", r.get(0), "asc" === t[1])
                                })
                            }
                            var p, f, m = e(this),
                                g = m.data("tablesaw");
                            m.addClass(i), n(p = m.children().filter("thead").find("th[" + a.sortCol + "]")), r(p, c), u(p), m.is(o) && h(p)
                        },
                        sortRows: function(n, i, r, o, s) {
                            function l(n, i) {
                                var r = [];
                                return e.each(n, function(n, o) {
                                    for (var s = o.parentNode, l = e(s), c = [], u = l.next(); u.is("[" + a.subRow + "]");) c.push(u[0]), u = u.next();
                                    var d = s.parentNode;
                                    l.is("[" + a.subRow + "]") || d === i && r.push({ element: o, cell: t(o), row: s, subrows: c.length ? c : null, ignored: l.is("[" + a.ignoreRow + "]") })
                                }), r
                            }

                            function c(e, t) { var n = /[^\-\+\d\.]/g; return e ? function(e, i) { return e.ignored || i.ignored ? 0 : t ? parseFloat(e.cell.replace(n, "")) - parseFloat(i.cell.replace(n, "")) : e.cell.toLowerCase() > i.cell.toLowerCase() ? 1 : -1 } : function(e, i) { return e.ignored || i.ignored ? 0 : t ? parseFloat(i.cell.replace(n, "")) - parseFloat(e.cell.replace(n, "")) : e.cell.toLowerCase() < i.cell.toLowerCase() ? 1 : -1 } }

                            function u(e) { var t, n, i = []; for (t = 0, n = e.length; t < n; t++) i.push(e[t].row), e[t].subrows && i.push(e[t].subrows); return i }
                            var d, h = l(o.cells, s),
                                p = e(o).data("tablesaw-sort");
                            return d = !(!p || "function" != typeof p) && p(r) || c(r, e(o).is("[" + a.numericCol + "]") && !e(o).is("[" + a.numericCol + '="false"]')), u(h.sort(d))
                        },
                        makeColDefault: function(t, n) {
                            var i = e(t);
                            i.attr(a.defaultCol, "true"), n ? (i.removeClass(s.descend), i.addClass(s.ascend)) : (i.removeClass(s.ascend), i.addClass(s.descend))
                        },
                        sortBy: function(t, n) {
                            var r, o = e(this),
                                a = o.data("tablesaw");
                            a.$tbody.each(function() {
                                var s, l, c, u = this,
                                    d = e(this),
                                    h = a.getBodyRows(u),
                                    p = a.headerMapping[0];
                                for (l = 0, c = p.length; l < c; l++)
                                    if (p[l] === t) { r = l; break }
                                for (l = 0, c = (s = o[i]("sortRows", h, r, n, t, u)).length; l < c; l++) d.append(s[l])
                            }), o[i]("makeColDefault", t, n), o.trigger("tablesaw-sorted")
                        }
                    };
                e.fn[i] = function(t) { var n, r = Array.prototype.slice.call(arguments, 1); return t && "string" == typeof t ? void 0 !== (n = e.fn[i].prototype[t].apply(this[0], r)) ? n : e(this) : (e(this).data(i + "-active") || (e(this).data(i + "-active", !0), e.fn[i].prototype._create.call(this, t)), e(this)) }, e.extend(e.fn[i].prototype, l), e(n).on(d.events.create, function(e, t) { t.$table.is(r) && t.$table[i]() })
            }(),
            function() {
                function i(i, a) {
                    function s() {
                        a.css({ width: "1px" }), a.find("." + r.hiddenCol).removeClass(r.hiddenCol), M = [], O = [], x.each(function() {
                            var e = this.offsetWidth;
                            M.push(e), h(this) || O.push(e)
                        }), a.css({ width: "" })
                    }

                    function l(e) { C._$getCells(e).removeClass(r.hiddenCol) }

                    function c(e) { C._$getCells(e).addClass(r.hiddenCol) }

                    function u(e) { C._$getCells(e).addClass(r.persistCol) }

                    function h(t) { return e(t).is('[data-tablesaw-priority="persist"]') }

                    function p() { a.removeClass(r.persistWidths), e("#" + N + "-persist").remove() }

                    function f() {
                        var t, n = "#" + N + ".tablesaw-swipe ",
                            i = [],
                            o = a.width(),
                            s = o,
                            l = [];
                        if (x.each(function(e) {
                                var t;
                                h(this) && (t = this.offsetWidth, s -= t, t < .75 * o && (l.push(e + "-" + t), i.push(n + " ." + r.persistCol + ":nth-child(" + (e + 1) + ") { width: " + t + "px; }")))
                            }), t = l.join("_"), i.length) {
                            a.addClass(r.persistWidths);
                            var c = e("#" + N + "-persist");
                            c.length && c.data("tablesaw-hash") === t || (c.remove(), e("<style>" + i.join("\n") + "</style>").attr("id", N + "-persist").data("tablesaw-hash", t).appendTo(I))
                        }
                        return s
                    }

                    function m() {
                        var t, n = [];
                        return D.each(function(i) {
                            var o = e(this),
                                a = "none" === o.css("display") || o.is("." + r.hiddenCol);
                            if (a || t) { if (a && t) return n[1] = i, !1 } else t = !0, n[0] = i
                        }), n
                    }

                    function g() { var e = m(); return [e[1] - 1, e[0] - 1] }

                    function y(e) { return e[1] > -1 && e[1] < D.length }

                    function v() { var e = a.attr("data-tablesaw-swipe-media"); return !e || "matchMedia" in t && t.matchMedia(e).matches }

                    function b() {
                        if (v()) {
                            var t = a.parent().width(),
                                n = [],
                                i = 0,
                                o = [],
                                s = x.length;
                            x.each(function(r) {
                                var a = e(this).is('[data-tablesaw-priority="persist"]');
                                n.push(a), i += M[r], o.push(i), (a || i > t) && s--
                            });
                            var d = 0 === s;
                            x.each(function(e) { o[e] > t && c(this) });
                            var h = !0;
                            x.each(function(e) {
                                if (n[e]) return u(this), void(h && (C._$getCells(this).css("width", o[e] + "px"), h = !1));
                                (o[e] <= t || d) && (d = !1, l(this), C.updateColspanCells(r.hiddenCol, this, !0))
                            }), p(), a.trigger("tablesawcolumns")
                        }
                    }

                    function k() { _(!0) }

                    function w() { _(!1) }

                    function _(e) {
                        var t;
                        if (y(t = e ? m() : g())) {
                            isNaN(t[0]) && (t[0] = e ? 0 : D.length - 1);
                            var n, i = f(),
                                o = t[0],
                                s = t[1],
                                u = D.get(o),
                                d = !1,
                                h = !1;
                            c(u), C.updateColspanCells(r.hiddenCol, u, !0);
                            for (var p = o + (e ? 1 : -1); p >= 0 && p < O.length;) {
                                i -= O[p];
                                var v = D.eq(p);
                                v.is(".tablesaw-swipe-cellhidden") ? i > 0 && (d = !0, h = !0, l(n = v.get(0)), C.updateColspanCells(r.hiddenCol, n, !1)) : h = !0, e ? p++ : p--
                            }
                            h ? !d && y(e ? m() : g()) && _(e) : (l(n = D.get(s)), C.updateColspanCells(r.hiddenCol, n, !1)), a.trigger("tablesawcolumns")
                        }
                    }

                    function S(e, t) { return (e.touches || e.originalEvent.touches)[0][t] }
                    var C = a.data("tablesaw"),
                        T = e("<div class='tablesaw-advance'></div>"),
                        E = e("<a href='#' class='btn tablesaw-nav-btn tablesaw-btn btn-micro left'>" + d.i18n.swipePreviousColumn + "</a>").appendTo(T),
                        A = e("<a href='#' class='btn tablesaw-nav-btn tablesaw-btn btn-micro right'>" + d.i18n.swipeNextColumn + "</a>").appendTo(T),
                        x = i._getPrimaryHeaderCells(),
                        D = x.not('[data-tablesaw-priority="persist"]'),
                        M = [],
                        O = [],
                        I = e(n.head || "head"),
                        N = a.attr("id");
                    if (!x.length) throw new Error("tablesaw swipe: no header cells found.");
                    a.addClass("tablesaw-swipe"), s(), T.appendTo(C.$toolbar), N || (N = "tableswipe-" + Math.round(1e4 * Math.random()), a.attr("id", N)), E.add(A).on("click", function(t) { e(t.target).closest(A).length ? k() : w(), t.preventDefault() }), a.is("[" + o.disableTouchEvents + "]") || a.on("touchstart.swipetoggle", function(n) {
                        var r, o, a = S(n, "pageX"),
                            s = S(n, "pageY"),
                            l = t.pageYOffset;
                        e(t).off(d.events.resize, b), e(this).on("touchmove.swipetoggle", function(e) { r = S(e, "pageX"), o = S(e, "pageY") }).on("touchend.swipetoggle", function() {
                            var n = i.getConfig({ swipeHorizontalThreshold: 30, swipeVerticalThreshold: 30 }),
                                c = n.swipe ? n.swipe.verticalThreshold : n.swipeVerticalThreshold,
                                u = n.swipe ? n.swipe.horizontalThreshold : n.swipeHorizontalThreshold,
                                h = Math.abs(t.pageYOffset - l) >= c;
                            Math.abs(o - s) >= c || h || (r - a < -1 * u && k(), r - a > u && w()), t.setTimeout(function() { e(t).on(d.events.resize, b) }, 300), e(this).off("touchmove.swipetoggle touchend.swipetoggle")
                        })
                    }), a.on("tablesawcolumns.swipetoggle", function() {
                        var e = y(g()),
                            t = y(m());
                        E[e ? "removeClass" : "addClass"](r.hideBtn), A[t ? "removeClass" : "addClass"](r.hideBtn), C.$toolbar[e || t ? "removeClass" : "addClass"](r.allColumnsVisible)
                    }).on("tablesawnext.swipetoggle", function() { k() }).on("tablesawprev.swipetoggle", function() { w() }).on(d.events.destroy + ".swipetoggle", function() {
                        var n = e(this);
                        n.removeClass("tablesaw-swipe"), C.$toolbar.find(".tablesaw-advance").remove(), e(t).off(d.events.resize, b), n.off(".swipetoggle")
                    }).on(d.events.refresh, function() { p(), s(), b() }), b(), e(t).on(d.events.resize, b)
                }
                var r = { hideBtn: "disabled", persistWidths: "tablesaw-fix-persist", hiddenCol: "tablesaw-swipe-cellhidden", persistCol: "tablesaw-swipe-cellpersist", allColumnsVisible: "tablesaw-all-cols-visible" },
                    o = { disableTouchEvents: "data-tablesaw-no-touch", ignorerow: "data-tablesaw-ignorerow", subrow: "data-tablesaw-subrow" };
                e(n).on(d.events.create, function(e, t) { "swipe" === t.mode && i(t, t.$table) })
            }(),
            function() {
                function i(n) {
                    function i() {
                        if (r.show(n[0])) {
                            a.css("display", "block");
                            var t = s.find("li").removeClass(l);
                            n.find("thead th").each(function(n) { "none" === e(this).css("display") && t.eq(n).addClass(l) })
                        } else a.css("display", "none")
                    }
                    var o = n.data("tablesaw"),
                        a = e('<div class="tablesaw-advance minimap">'),
                        s = e('<ul class="tablesaw-advance-dots">').appendTo(a),
                        l = "tablesaw-advance-dots-hide";
                    n.data("tablesaw")._getPrimaryHeaderCells().each(function() { s.append("<li><i></i></li>") }), a.appendTo(o.$toolbar), i(), e(t).on(d.events.resize, i), n.on("tablesawcolumns.minimap", function() { i() }).on(d.events.destroy + ".minimap", function() {
                        var n = e(this);
                        o.$toolbar.find(".tablesaw-advance").remove(), e(t).off(d.events.resize, i), n.off(".minimap")
                    })
                }
                var r = { attr: { init: "data-tablesaw-minimap" }, show: function(e) { var n = e.getAttribute(r.attr.init); return "" === n || !!(n && "matchMedia" in t) && t.matchMedia(n).matches } };
                e(n).on(d.events.create, function(e, t) { "swipe" !== t.mode && "columntoggle" !== t.mode || !t.$table.is("[ " + r.attr.init + "]") || i(t.$table) }), d.MiniMap = r
            }(), u = {
                selectors: { init: "table[data-tablesaw-mode-switch]" },
                attributes: { excludeMode: "data-tablesaw-mode-exclude" },
                classes: { main: "tablesaw-modeswitch", toolbar: "tablesaw-bar-section" },
                modes: ["stack", "swipe", "columntoggle"],
                init: function(t) {
                    var n, i = e(t),
                        r = i.data("tablesaw"),
                        o = i.attr(u.attributes.excludeMode),
                        a = r.$toolbar,
                        s = e("<div>").addClass(u.classes.main + " " + u.classes.toolbar),
                        l = ['<label><span class="abbreviated">' + d.i18n.modeSwitchColumnsAbbreviated + '</span><span class="longform">' + d.i18n.modeSwitchColumns + "</span>:"],
                        c = i.attr("data-tablesaw-mode");
                    l.push('<span class="btn tablesaw-btn"><select>');
                    for (var h = 0, p = u.modes.length; h < p; h++) o && o.toLowerCase() === u.modes[h] || (n = c === u.modes[h], l.push("<option" + (n ? " selected" : "") + ' value="' + u.modes[h] + '">' + d.i18n.modes[h] + "</option>"));
                    l.push("</select></span></label>"), s.html(l.join(""));
                    var f = a.find(".tablesaw-advance").eq(0);
                    f.length ? s.insertBefore(f) : s.appendTo(a), s.find(".tablesaw-btn").tablesawbtn(), s.find("select").on("change", function(n) { return u.onModeChange.call(t, n, e(this).val()) })
                },
                onModeChange: function(t, n) {
                    var i = e(this),
                        r = i.data("tablesaw");
                    r.$toolbar.find("." + u.classes.main).remove(), r.destroy(), i.attr("data-tablesaw-mode", n), i.tablesaw()
                }
            }, e(n).on(d.events.create, function(e, t) { t.$table.is(u.selectors.init) && u.init(t.table) }),
            function() {
                function t(e) { this.tablesaw = e, this.$table = e.$table, this.attr = "data-tablesaw-checkall", this.checkAllSelector = "[" + this.attr + "]", this.forceCheckedSelector = "[" + this.attr + "-checked]", this.forceUncheckedSelector = "[" + this.attr + "-unchecked]", this.checkboxSelector = 'input[type="checkbox"]', this.$triggers = null, this.$checkboxes = null, this.$table.data(i) || (this.$table.data(i, this), this.init()) }
                var i = "tablesawCheckAll";
                t.prototype._filterCells = function(t) { return t.filter(function() { return !e(this).closest("tr").is("[data-tablesaw-subrow],[data-tablesaw-ignorerow]") }).find(this.checkboxSelector).not(this.checkAllSelector) }, t.prototype.getCheckboxesForButton = function(t) { return this._filterCells(e(e(t).attr(this.attr))) }, t.prototype.getCheckboxesForCheckbox = function(t) { return this._filterCells(e(e(t).closest("th")[0].cells)) }, t.prototype.init = function() {
                    var t = this;
                    this.$table.find(this.checkAllSelector).each(function() { e(this).is(t.checkboxSelector) ? t.addCheckboxEvents(this) : t.addButtonEvents(this) })
                }, t.prototype.addButtonEvents = function(t) {
                    var n = this;
                    e(t).on("click", function(t) {
                        t.preventDefault();
                        var r, o = n.getCheckboxesForButton(this),
                            a = !0;
                        o.each(function() { this.checked || (a = !1) }), r = !!e(this).is(n.forceCheckedSelector) || !e(this).is(n.forceUncheckedSelector) && !a, o.each(function() { this.checked = r, e(this).trigger("change." + i) })
                    })
                }, t.prototype.addCheckboxEvents = function(t) {
                    var n = this;
                    e(t).on("change", function() {
                        var e = this.checked;
                        n.getCheckboxesForCheckbox(this).each(function() { this.checked = e })
                    });
                    var r = n.getCheckboxesForCheckbox(t);
                    r.on("change." + i, function() {
                        var e = 0;
                        r.each(function() { this.checked && e++ });
                        var n = e === r.length;
                        t.checked = n, t.indeterminate = 0 !== e && !n
                    })
                }, e(n).on(d.events.create, function(e, n) { new t(n) }), d.CheckAll = t
            }(), d
    }),
    /*! Tablesaw - v3.1.2 - 2019-03-19
     * https://github.com/filamentgroup/tablesaw
     * Copyright (c) 2019 Filament Group; Licensed MIT */
    function(e) {
        "use strict";
        if (!("Tablesaw" in e)) throw new Error("Tablesaw library not found.");
        if (!("init" in Tablesaw)) throw new Error("Your tablesaw-init.js is newer than the core Tablesaw version.");
        Tablesaw.init()
    }("undefined" != typeof window ? window : this),
    /*!
     * Select2 4.0.3
     * https://select2.github.io
     *
     * Released under the MIT license
     * https://github.com/select2/select2/blob/master/LICENSE.md
     */
    function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery) }(function(e) {
        var t = function() {
                if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
                var n, i, r;
                return t && t.requirejs || (t ? i = t : t = {}, function(e) {
                    function t(e, t) { return k.call(e, t) }

                    function o(e, t) {
                        var n, i, r, o, a, s, l, c, u, d, h, p = t && t.split("/"),
                            f = v.map,
                            m = f && f["*"] || {};
                        if (e && "." === e.charAt(0))
                            if (t) {
                                for (a = (e = e.split("/")).length - 1, v.nodeIdCompat && _.test(e[a]) && (e[a] = e[a].replace(_, "")), e = p.slice(0, p.length - 1).concat(e), u = 0; u < e.length; u += 1)
                                    if ("." === (h = e[u])) e.splice(u, 1), u -= 1;
                                    else if (".." === h) {
                                    if (1 === u && (".." === e[2] || ".." === e[0])) break;
                                    u > 0 && (e.splice(u - 1, 2), u -= 2)
                                }
                                e = e.join("/")
                            } else 0 === e.indexOf("./") && (e = e.substring(2));
                        if ((p || m) && f) {
                            for (u = (n = e.split("/")).length; u > 0; u -= 1) {
                                if (i = n.slice(0, u).join("/"), p)
                                    for (d = p.length; d > 0; d -= 1)
                                        if ((r = f[p.slice(0, d).join("/")]) && (r = r[i])) { o = r, s = u; break }
                                if (o) break;
                                !l && m && m[i] && (l = m[i], c = u)
                            }!o && l && (o = l, s = c), o && (n.splice(0, s, o), e = n.join("/"))
                        }
                        return e
                    }

                    function a(t, n) { return function() { var i = w.call(arguments, 0); return "string" != typeof i[0] && 1 === i.length && i.push(null), p.apply(e, i.concat([t, n])) } }

                    function s(e) { return function(t) { return o(t, e) } }

                    function l(e) { return function(t) { g[e] = t } }

                    function c(n) {
                        if (t(y, n)) {
                            var i = y[n];
                            delete y[n], b[n] = !0, h.apply(e, i)
                        }
                        if (!t(g, n) && !t(b, n)) throw new Error("No " + n);
                        return g[n]
                    }

                    function u(e) { var t, n = e ? e.indexOf("!") : -1; return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e] }

                    function d(e) { return function() { return v && v.config && v.config[e] || {} } }
                    var h, p, f, m, g = {},
                        y = {},
                        v = {},
                        b = {},
                        k = Object.prototype.hasOwnProperty,
                        w = [].slice,
                        _ = /\.js$/;
                    f = function(e, t) {
                        var n, i = u(e),
                            r = i[0];
                        return e = i[1], r && (n = c(r = o(r, t))), r ? e = n && n.normalize ? n.normalize(e, s(t)) : o(e, t) : (r = (i = u(e = o(e, t)))[0], e = i[1], r && (n = c(r))), { f: r ? r + "!" + e : e, n: e, pr: r, p: n }
                    }, m = { require: function(e) { return a(e) }, exports: function(e) { var t = g[e]; return void 0 !== t ? t : g[e] = {} }, module: function(e) { return { id: e, uri: "", exports: g[e], config: d(e) } } }, h = function(n, i, r, o) {
                        var s, u, d, h, p, v, k = [],
                            w = typeof r;
                        if (o = o || n, "undefined" === w || "function" === w) {
                            for (i = !i.length && r.length ? ["require", "exports", "module"] : i, p = 0; p < i.length; p += 1)
                                if ("require" === (u = (h = f(i[p], o)).f)) k[p] = m.require(n);
                                else if ("exports" === u) k[p] = m.exports(n), v = !0;
                            else if ("module" === u) s = k[p] = m.module(n);
                            else if (t(g, u) || t(y, u) || t(b, u)) k[p] = c(u);
                            else {
                                if (!h.p) throw new Error(n + " missing " + u);
                                h.p.load(h.n, a(o, !0), l(u), {}), k[p] = g[u]
                            }
                            d = r ? r.apply(g[n], k) : undefined, n && (s && s.exports !== e && s.exports !== g[n] ? g[n] = s.exports : d === e && v || (g[n] = d))
                        } else n && (g[n] = r)
                    }, n = i = p = function(t, n, i, r, o) {
                        if ("string" == typeof t) return m[t] ? m[t](n) : c(f(t, n).f);
                        if (!t.splice) {
                            if ((v = t).deps && p(v.deps, v.callback), !n) return;
                            n.splice ? (t = n, n = i, i = null) : t = e
                        }
                        return n = n || function() {}, "function" == typeof i && (i = r, r = o), r ? h(e, t, n, i) : setTimeout(function() { h(e, t, n, i) }, 4), p
                    }, p.config = function(e) { return p(e) }, n._defined = g, (r = function(e, n, i) {
                        if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                        n.splice || (i = n, n = []), t(g, e) || t(y, e) || (y[e] = [e, n, i])
                    }).amd = { jQuery: !0 }
                }(), t.requirejs = n, t.require = i, t.define = r), t.define("almond", function() {}), t.define("jquery", [], function() { var t = e || $; return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t }), t.define("select2/utils", ["jquery"], function(e) {
                    function t(e) {
                        var t = e.prototype,
                            n = [];
                        for (var i in t) { "function" == typeof t[i] && ("constructor" !== i && n.push(i)) }
                        return n
                    }
                    var n = {
                            Extend: function(e, t) {
                                function n() { this.constructor = e }
                                var i = {}.hasOwnProperty;
                                for (var r in t) i.call(t, r) && (e[r] = t[r]);
                                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                            },
                            Decorate: function(e, n) {
                                function i() {
                                    var t = Array.prototype.unshift,
                                        i = n.prototype.constructor.length,
                                        r = e.prototype.constructor;
                                    i > 0 && (t.call(arguments, e.prototype.constructor), r = n.prototype.constructor), r.apply(this, arguments)
                                }

                                function r() { this.constructor = i }
                                var o = t(n),
                                    a = t(e);
                                n.displayName = e.displayName, i.prototype = new r;
                                for (var s = 0; s < a.length; s++) {
                                    var l = a[s];
                                    i.prototype[l] = e.prototype[l]
                                }
                                for (var c = function(e) {
                                        var t = function() {};
                                        e in i.prototype && (t = i.prototype[e]);
                                        var r = n.prototype[e];
                                        return function() { return Array.prototype.unshift.call(arguments, t), r.apply(this, arguments) }
                                    }, u = 0; u < o.length; u++) {
                                    var d = o[u];
                                    i.prototype[d] = c(d)
                                }
                                return i
                            }
                        },
                        i = function() { this.listeners = {} };
                    return i.prototype.on = function(e, t) { this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t] }, i.prototype.trigger = function(e) {
                        var t = Array.prototype.slice,
                            n = t.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, i.prototype.invoke = function(e, t) { for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t) }, n.Observable = i, n.generateChars = function(e) { for (var t = "", n = 0; n < e; n++) { t += Math.floor(36 * Math.random()).toString(36) } return t }, n.bind = function(e, t) { return function() { e.apply(t, arguments) } }, n._convertData = function(e) {
                        for (var t in e) {
                            var n = t.split("-"),
                                i = e;
                            if (1 !== n.length) {
                                for (var r = 0; r < n.length; r++) {
                                    var o = n[r];
                                    (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}), r == n.length - 1 && (i[o] = e[t]), i = i[o]
                                }
                                delete e[t]
                            }
                        }
                        return e
                    }, n.hasScroll = function(t, n) {
                        var i = e(n),
                            r = n.style.overflowX,
                            o = n.style.overflowY;
                        return (r !== o || "hidden" !== o && "visible" !== o) && ("scroll" === r || "scroll" === o || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth))
                    }, n.escapeMarkup = function(e) { var t = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) { return t[e] }) }, n.appendMany = function(t, n) {
                        if ("1.7" === e.fn.jquery.substr(0, 3)) {
                            var i = e();
                            e.map(n, function(e) { i = i.add(e) }), n = i
                        }
                        t.append(n)
                    }, n
                }), t.define("select2/results", ["jquery", "./utils"], function(e, t) {
                    function n(e, t, i) { this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this) }
                    return t.Extend(n, t.Observable), n.prototype.render = function() { var t = e('<ul class="select2-results__options" role="tree"></ul>'); return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t }, n.prototype.clear = function() { this.$results.empty() }, n.prototype.displayMessage = function(t) {
                        var n = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var i = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            r = this.options.get("translations").get(t.message);
                        i.append(n(r(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
                    }, n.prototype.hideMessages = function() { this.$results.find(".select2-results__message").remove() }, n.prototype.append = function(e) {
                        this.hideLoading();
                        var t = [];
                        if (null != e.results && 0 !== e.results.length) {
                            e.results = this.sort(e.results);
                            for (var n = 0; n < e.results.length; n++) {
                                var i = e.results[n],
                                    r = this.option(i);
                                t.push(r)
                            }
                            this.$results.append(t)
                        } else 0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" })
                    }, n.prototype.position = function(e, t) { t.find(".select2-results").append(e) }, n.prototype.sort = function(e) { return this.options.get("sorter")(e) }, n.prototype.highlightFirstItem = function() {
                        var e = this.$results.find(".select2-results__option[aria-selected]"),
                            t = e.filter("[aria-selected=true]");
                        t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                    }, n.prototype.setClasses = function() {
                        var t = this;
                        this.data.current(function(n) {
                            var i = e.map(n, function(e) { return e.id.toString() });
                            t.$results.find(".select2-results__option[aria-selected]").each(function() {
                                var t = e(this),
                                    n = e.data(this, "data"),
                                    r = "" + n.id;
                                null != n.element && n.element.selected || null == n.element && e.inArray(r, i) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                            })
                        })
                    }, n.prototype.showLoading = function(e) {
                        this.hideLoading();
                        var t = { disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(e) },
                            n = this.option(t);
                        n.className += " loading-results", this.$results.prepend(n)
                    }, n.prototype.hideLoading = function() { this.$results.find(".loading-results").remove() }, n.prototype.option = function(t) {
                        var n = document.createElement("li");
                        n.className = "select2-results__option";
                        var i = { role: "treeitem", "aria-selected": "false" };
                        for (var r in t.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == t.id && delete i["aria-selected"], null != t._resultId && (n.id = t._resultId), t.title && (n.title = t.title), t.children && (i.role = "group", i["aria-label"] = t.text, delete i["aria-selected"]), i) {
                            var o = i[r];
                            n.setAttribute(r, o)
                        }
                        if (t.children) {
                            var a = e(n),
                                s = document.createElement("strong");
                            s.className = "select2-results__group";
                            e(s);
                            this.template(t, s);
                            for (var l = [], c = 0; c < t.children.length; c++) {
                                var u = t.children[c],
                                    d = this.option(u);
                                l.push(d)
                            }
                            var h = e("<ul></ul>", { "class": "select2-results__options select2-results__options--nested" });
                            h.append(l), a.append(s), a.append(h)
                        } else this.template(t, n);
                        return e.data(n, "data", t), n
                    }, n.prototype.bind = function(t) {
                        var n = this,
                            i = t.id + "-results";
                        this.$results.attr("id", i), t.on("results:all", function(e) { n.clear(), n.append(e.data), t.isOpen() && (n.setClasses(), n.highlightFirstItem()) }), t.on("results:append", function(e) { n.append(e.data), t.isOpen() && n.setClasses() }), t.on("query", function(e) { n.hideMessages(), n.showLoading(e) }), t.on("select", function() { t.isOpen() && (n.setClasses(), n.highlightFirstItem()) }), t.on("unselect", function() { t.isOpen() && (n.setClasses(), n.highlightFirstItem()) }), t.on("open", function() { n.$results.attr("aria-expanded", "true"), n.$results.attr("aria-hidden", "false"), n.setClasses(), n.ensureHighlightVisible() }), t.on("close", function() { n.$results.attr("aria-expanded", "false"), n.$results.attr("aria-hidden", "true"), n.$results.removeAttr("aria-activedescendant") }), t.on("results:toggle", function() {
                            var e = n.getHighlightedResults();
                            0 !== e.length && e.trigger("mouseup")
                        }), t.on("results:select", function() { var e = n.getHighlightedResults(); if (0 !== e.length) { var t = e.data("data"); "true" == e.attr("aria-selected") ? n.trigger("close", {}) : n.trigger("select", { data: t }) } }), t.on("results:previous", function() {
                            var e = n.getHighlightedResults(),
                                t = n.$results.find("[aria-selected]"),
                                i = t.index(e);
                            if (0 !== i) {
                                var r = i - 1;
                                0 === e.length && (r = 0);
                                var o = t.eq(r);
                                o.trigger("mouseenter");
                                var a = n.$results.offset().top,
                                    s = o.offset().top,
                                    l = n.$results.scrollTop() + (s - a);
                                0 === r ? n.$results.scrollTop(0) : s - a < 0 && n.$results.scrollTop(l)
                            }
                        }), t.on("results:next", function() {
                            var e = n.getHighlightedResults(),
                                t = n.$results.find("[aria-selected]"),
                                i = t.index(e) + 1;
                            if (!(i >= t.length)) {
                                var r = t.eq(i);
                                r.trigger("mouseenter");
                                var o = n.$results.offset().top + n.$results.outerHeight(!1),
                                    a = r.offset().top + r.outerHeight(!1),
                                    s = n.$results.scrollTop() + a - o;
                                0 === i ? n.$results.scrollTop(0) : a > o && n.$results.scrollTop(s)
                            }
                        }), t.on("results:focus", function(e) { e.element.addClass("select2-results__option--highlighted") }), t.on("results:message", function(e) { n.displayMessage(e) }), e.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                            var t = n.$results.scrollTop(),
                                i = n.$results.get(0).scrollHeight - t + e.deltaY,
                                r = e.deltaY > 0 && t - e.deltaY <= 0,
                                o = e.deltaY < 0 && i <= n.$results.height();
                            r ? (n.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (n.$results.scrollTop(n.$results.get(0).scrollHeight - n.$results.height()), e.preventDefault(), e.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) {
                            var i = e(this),
                                r = i.data("data");
                            "true" !== i.attr("aria-selected") ? n.trigger("select", { originalEvent: t, data: r }) : n.options.get("multiple") ? n.trigger("unselect", { originalEvent: t, data: r }) : n.trigger("close", {})
                        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function() {
                            var t = e(this).data("data");
                            n.getHighlightedResults().removeClass("select2-results__option--highlighted"), n.trigger("results:focus", { data: t, element: e(this) })
                        })
                    }, n.prototype.getHighlightedResults = function() { return this.$results.find(".select2-results__option--highlighted") }, n.prototype.destroy = function() { this.$results.remove() }, n.prototype.ensureHighlightVisible = function() {
                        var e = this.getHighlightedResults();
                        if (0 !== e.length) {
                            var t = this.$results.find("[aria-selected]").index(e),
                                n = this.$results.offset().top,
                                i = e.offset().top,
                                r = this.$results.scrollTop() + (i - n),
                                o = i - n;
                            r -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(r)
                        }
                    }, n.prototype.template = function(t, n) {
                        var i = this.options.get("templateResult"),
                            r = this.options.get("escapeMarkup"),
                            o = i(t, n);
                        null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = r(o) : e(n).append(o)
                    }, n
                }), t.define("select2/keys", [], function() { return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 } }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(e, t, n) {
                    function i(e, t) { this.$element = e, this.options = t, i.__super__.constructor.call(this) }
                    return t.Extend(i, t.Observable), i.prototype.render = function() { var t = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'); return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t }, i.prototype.bind = function(e) {
                        var t = this,
                            i = (e.id, e.id + "-results");
                        this.container = e, this.$selection.on("focus", function(e) { t.trigger("focus", e) }), this.$selection.on("blur", function(e) { t._handleBlur(e) }), this.$selection.on("keydown", function(e) { t.trigger("keypress", e), e.which === n.SPACE && e.preventDefault() }), e.on("results:focus", function(e) { t.$selection.attr("aria-activedescendant", e.data._resultId) }), e.on("selection:update", function(e) { t.update(e.data) }), e.on("open", function() { t.$selection.attr("aria-expanded", "true"), t.$selection.attr("aria-owns", i), t._attachCloseHandler(e) }), e.on("close", function() { t.$selection.attr("aria-expanded", "false"), t.$selection.removeAttr("aria-activedescendant"), t.$selection.removeAttr("aria-owns"), t.$selection.focus(), t._detachCloseHandler(e) }), e.on("enable", function() { t.$selection.attr("tabindex", t._tabindex) }), e.on("disable", function() { t.$selection.attr("tabindex", "-1") })
                    }, i.prototype._handleBlur = function(t) {
                        var n = this;
                        window.setTimeout(function() { document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t) }, 1)
                    }, i.prototype._attachCloseHandler = function(t) {
                        e(document.body).on("mousedown.select2." + t.id, function(t) {
                            var n = e(t.target).closest(".select2");
                            e(".select2.select2-container--open").each(function() {
                                var t = e(this);
                                this != n[0] && t.data("element").select2("close")
                            })
                        })
                    }, i.prototype._detachCloseHandler = function(t) { e(document.body).off("mousedown.select2." + t.id) }, i.prototype.position = function(e, t) { t.find(".selection").append(e) }, i.prototype.destroy = function() { this._detachCloseHandler(this.container) }, i.prototype.update = function() { throw new Error("The `update` method must be defined in child classes.") }, i
                }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n) {
                    function i() { i.__super__.constructor.apply(this, arguments) }
                    return n.Extend(i, t), i.prototype.render = function() { var e = i.__super__.render.call(this); return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e }, i.prototype.bind = function(e) {
                        var t = this;
                        i.__super__.bind.apply(this, arguments);
                        var n = e.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", n), this.$selection.attr("aria-labelledby", n), this.$selection.on("mousedown", function(e) { 1 === e.which && t.trigger("toggle", { originalEvent: e }) }), this.$selection.on("focus", function() {}), this.$selection.on("blur", function() {}), e.on("focus", function() { e.isOpen() || t.$selection.focus() }), e.on("selection:update", function(e) { t.update(e.data) })
                    }, i.prototype.clear = function() { this.$selection.find(".select2-selection__rendered").empty() }, i.prototype.display = function(e, t) { var n = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(n(e, t)) }, i.prototype.selectionContainer = function() { return e("<span></span>") }, i.prototype.update = function(e) {
                        if (0 !== e.length) {
                            var t = e[0],
                                n = this.$selection.find(".select2-selection__rendered"),
                                i = this.display(t, n);
                            n.empty().append(i), n.prop("title", t.title || t.text)
                        } else this.clear()
                    }, i
                }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(e, t, n) {
                    function i() { i.__super__.constructor.apply(this, arguments) }
                    return n.Extend(i, t), i.prototype.render = function() { var e = i.__super__.render.call(this); return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e }, i.prototype.bind = function() {
                        var t = this;
                        i.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) { t.trigger("toggle", { originalEvent: e }) }), this.$selection.on("click", ".select2-selection__choice__remove", function(n) {
                            if (!t.options.get("disabled")) {
                                var i = e(this).parent().data("data");
                                t.trigger("unselect", { originalEvent: n, data: i })
                            }
                        })
                    }, i.prototype.clear = function() { this.$selection.find(".select2-selection__rendered").empty() }, i.prototype.display = function(e, t) { var n = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(n(e, t)) }, i.prototype.selectionContainer = function() { return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>') }, i.prototype.update = function(e) {
                        if (this.clear(), 0 !== e.length) {
                            for (var t = [], i = 0; i < e.length; i++) {
                                var r = e[i],
                                    o = this.selectionContainer(),
                                    a = this.display(r, o);
                                o.append(a), o.prop("title", r.title || r.text), o.data("data", r), t.push(o)
                            }
                            var s = this.$selection.find(".select2-selection__rendered");
                            n.appendMany(s, t)
                        }
                    }, i
                }), t.define("select2/selection/placeholder", ["../utils"], function() {
                    function e(e, t, n) { this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n) }
                    return e.prototype.normalizePlaceholder = function(e, t) { return "string" == typeof t && (t = { id: "", text: t }), t }, e.prototype.createPlaceholder = function(e, t) { var n = this.selectionContainer(); return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n }, e.prototype.update = function(e, t) {
                        var n = 1 == t.length && t[0].id != this.placeholder.id;
                        if (t.length > 1 || n) return e.call(this, t);
                        this.clear();
                        var i = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(i)
                    }, e
                }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function(e, t) {
                    function n() {}
                    return n.prototype.bind = function(e, t, n) {
                        var i = this;
                        e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) { i._handleClear(e) }), t.on("keypress", function(e) { i._handleKeyboardClear(e, t) })
                    }, n.prototype._handleClear = function(e, t) {
                        if (!this.options.get("disabled")) {
                            var n = this.$selection.find(".select2-selection__clear");
                            if (0 !== n.length) {
                                t.stopPropagation();
                                for (var i = n.data("data"), r = 0; r < i.length; r++) { var o = { data: i[r] }; if (this.trigger("unselect", o), o.prevented) return }
                                this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, n.prototype._handleKeyboardClear = function(e, n, i) { i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n) }, n.prototype.update = function(t, n) {
                        if (t.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                            var i = e('<span class="select2-selection__clear">&times;</span>');
                            i.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(i)
                        }
                    }, n
                }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(e, t, n) {
                    function i(e, t, n) { e.call(this, t, n) }
                    return i.prototype.render = function(t) {
                        var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = n, this.$search = n.find("input");
                        var i = t.call(this);
                        return this._transferTabIndex(), i
                    }, i.prototype.bind = function(e, t, i) {
                        var r = this;
                        e.call(this, t, i), t.on("open", function() { r.$search.trigger("focus") }), t.on("close", function() { r.$search.val(""), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus") }), t.on("enable", function() { r.$search.prop("disabled", !1), r._transferTabIndex() }), t.on("disable", function() { r.$search.prop("disabled", !0) }), t.on("focus", function() { r.$search.trigger("focus") }), t.on("results:focus", function(e) { r.$search.attr("aria-activedescendant", e.id) }), this.$selection.on("focusin", ".select2-search--inline", function(e) { r.trigger("focus", e) }), this.$selection.on("focusout", ".select2-search--inline", function(e) { r._handleBlur(e) }), this.$selection.on("keydown", ".select2-search--inline", function(e) {
                            if (e.stopPropagation(), r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === r.$search.val()) {
                                var t = r.$searchContainer.prev(".select2-selection__choice");
                                if (t.length > 0) {
                                    var i = t.data("data");
                                    r.searchRemoveChoice(i), e.preventDefault()
                                }
                            }
                        });
                        var o = document.documentMode,
                            a = o && o <= 11;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function() { a ? r.$selection.off("input.search input.searchcheck") : r.$selection.off("keyup.search") }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                            if (a && "input" === e.type) r.$selection.off("input.search input.searchcheck");
                            else {
                                var t = e.which;
                                t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && r.handleSearch(e)
                            }
                        })
                    }, i.prototype._transferTabIndex = function() { this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1") }, i.prototype.createPlaceholder = function(e, t) { this.$search.attr("placeholder", t.text) }, i.prototype.update = function(e, t) {
                        var n = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
                    }, i.prototype.handleSearch = function() {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var e = this.$search.val();
                            this.trigger("query", { term: e })
                        }
                        this._keyUpPrevented = !1
                    }, i.prototype.searchRemoveChoice = function(e, t) { this.trigger("unselect", { data: t }), this.$search.val(t.text), this.handleSearch() }, i.prototype.resizeSearch = function() {
                        this.$search.css("width", "25px");
                        var e = "";
                        "" !== this.$search.attr("placeholder") ? e = this.$selection.find(".select2-selection__rendered").innerWidth() : e = .75 * (this.$search.val().length + 1) + "em";
                        this.$search.css("width", e)
                    }, i
                }), t.define("select2/selection/eventRelay", ["jquery"], function(e) {
                    function t() {}
                    return t.prototype.bind = function(t, n, i) {
                        var r = this,
                            o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            a = ["opening", "closing", "selecting", "unselecting"];
                        t.call(this, n, i), n.on("*", function(t, n) {
                            if (-1 !== e.inArray(t, o)) {
                                n = n || {};
                                var i = e.Event("select2:" + t, { params: n });
                                r.$element.trigger(i), -1 !== e.inArray(t, a) && (n.prevented = i.isDefaultPrevented())
                            }
                        })
                    }, t
                }), t.define("select2/translation", ["jquery", "require"], function(e, t) {
                    function n(e) { this.dict = e || {} }
                    return n.prototype.all = function() { return this.dict }, n.prototype.get = function(e) { return this.dict[e] }, n.prototype.extend = function(t) { this.dict = e.extend({}, t.all(), this.dict) }, n._cache = {}, n.loadPath = function(e) {
                        if (!(e in n._cache)) {
                            var i = t(e);
                            n._cache[e] = i
                        }
                        return new n(n._cache[e])
                    }, n
                }), t.define("select2/diacritics", [], function() {
                    return {
                        "\u24b6": "A",
                        "\uff21": "A",
                        "\xc0": "A",
                        "\xc1": "A",
                        "\xc2": "A",
                        "\u1ea6": "A",
                        "\u1ea4": "A",
                        "\u1eaa": "A",
                        "\u1ea8": "A",
                        "\xc3": "A",
                        "\u0100": "A",
                        "\u0102": "A",
                        "\u1eb0": "A",
                        "\u1eae": "A",
                        "\u1eb4": "A",
                        "\u1eb2": "A",
                        "\u0226": "A",
                        "\u01e0": "A",
                        "\xc4": "A",
                        "\u01de": "A",
                        "\u1ea2": "A",
                        "\xc5": "A",
                        "\u01fa": "A",
                        "\u01cd": "A",
                        "\u0200": "A",
                        "\u0202": "A",
                        "\u1ea0": "A",
                        "\u1eac": "A",
                        "\u1eb6": "A",
                        "\u1e00": "A",
                        "\u0104": "A",
                        "\u023a": "A",
                        "\u2c6f": "A",
                        "\ua732": "AA",
                        "\xc6": "AE",
                        "\u01fc": "AE",
                        "\u01e2": "AE",
                        "\ua734": "AO",
                        "\ua736": "AU",
                        "\ua738": "AV",
                        "\ua73a": "AV",
                        "\ua73c": "AY",
                        "\u24b7": "B",
                        "\uff22": "B",
                        "\u1e02": "B",
                        "\u1e04": "B",
                        "\u1e06": "B",
                        "\u0243": "B",
                        "\u0182": "B",
                        "\u0181": "B",
                        "\u24b8": "C",
                        "\uff23": "C",
                        "\u0106": "C",
                        "\u0108": "C",
                        "\u010a": "C",
                        "\u010c": "C",
                        "\xc7": "C",
                        "\u1e08": "C",
                        "\u0187": "C",
                        "\u023b": "C",
                        "\ua73e": "C",
                        "\u24b9": "D",
                        "\uff24": "D",
                        "\u1e0a": "D",
                        "\u010e": "D",
                        "\u1e0c": "D",
                        "\u1e10": "D",
                        "\u1e12": "D",
                        "\u1e0e": "D",
                        "\u0110": "D",
                        "\u018b": "D",
                        "\u018a": "D",
                        "\u0189": "D",
                        "\ua779": "D",
                        "\u01f1": "DZ",
                        "\u01c4": "DZ",
                        "\u01f2": "Dz",
                        "\u01c5": "Dz",
                        "\u24ba": "E",
                        "\uff25": "E",
                        "\xc8": "E",
                        "\xc9": "E",
                        "\xca": "E",
                        "\u1ec0": "E",
                        "\u1ebe": "E",
                        "\u1ec4": "E",
                        "\u1ec2": "E",
                        "\u1ebc": "E",
                        "\u0112": "E",
                        "\u1e14": "E",
                        "\u1e16": "E",
                        "\u0114": "E",
                        "\u0116": "E",
                        "\xcb": "E",
                        "\u1eba": "E",
                        "\u011a": "E",
                        "\u0204": "E",
                        "\u0206": "E",
                        "\u1eb8": "E",
                        "\u1ec6": "E",
                        "\u0228": "E",
                        "\u1e1c": "E",
                        "\u0118": "E",
                        "\u1e18": "E",
                        "\u1e1a": "E",
                        "\u0190": "E",
                        "\u018e": "E",
                        "\u24bb": "F",
                        "\uff26": "F",
                        "\u1e1e": "F",
                        "\u0191": "F",
                        "\ua77b": "F",
                        "\u24bc": "G",
                        "\uff27": "G",
                        "\u01f4": "G",
                        "\u011c": "G",
                        "\u1e20": "G",
                        "\u011e": "G",
                        "\u0120": "G",
                        "\u01e6": "G",
                        "\u0122": "G",
                        "\u01e4": "G",
                        "\u0193": "G",
                        "\ua7a0": "G",
                        "\ua77d": "G",
                        "\ua77e": "G",
                        "\u24bd": "H",
                        "\uff28": "H",
                        "\u0124": "H",
                        "\u1e22": "H",
                        "\u1e26": "H",
                        "\u021e": "H",
                        "\u1e24": "H",
                        "\u1e28": "H",
                        "\u1e2a": "H",
                        "\u0126": "H",
                        "\u2c67": "H",
                        "\u2c75": "H",
                        "\ua78d": "H",
                        "\u24be": "I",
                        "\uff29": "I",
                        "\xcc": "I",
                        "\xcd": "I",
                        "\xce": "I",
                        "\u0128": "I",
                        "\u012a": "I",
                        "\u012c": "I",
                        "\u0130": "I",
                        "\xcf": "I",
                        "\u1e2e": "I",
                        "\u1ec8": "I",
                        "\u01cf": "I",
                        "\u0208": "I",
                        "\u020a": "I",
                        "\u1eca": "I",
                        "\u012e": "I",
                        "\u1e2c": "I",
                        "\u0197": "I",
                        "\u24bf": "J",
                        "\uff2a": "J",
                        "\u0134": "J",
                        "\u0248": "J",
                        "\u24c0": "K",
                        "\uff2b": "K",
                        "\u1e30": "K",
                        "\u01e8": "K",
                        "\u1e32": "K",
                        "\u0136": "K",
                        "\u1e34": "K",
                        "\u0198": "K",
                        "\u2c69": "K",
                        "\ua740": "K",
                        "\ua742": "K",
                        "\ua744": "K",
                        "\ua7a2": "K",
                        "\u24c1": "L",
                        "\uff2c": "L",
                        "\u013f": "L",
                        "\u0139": "L",
                        "\u013d": "L",
                        "\u1e36": "L",
                        "\u1e38": "L",
                        "\u013b": "L",
                        "\u1e3c": "L",
                        "\u1e3a": "L",
                        "\u0141": "L",
                        "\u023d": "L",
                        "\u2c62": "L",
                        "\u2c60": "L",
                        "\ua748": "L",
                        "\ua746": "L",
                        "\ua780": "L",
                        "\u01c7": "LJ",
                        "\u01c8": "Lj",
                        "\u24c2": "M",
                        "\uff2d": "M",
                        "\u1e3e": "M",
                        "\u1e40": "M",
                        "\u1e42": "M",
                        "\u2c6e": "M",
                        "\u019c": "M",
                        "\u24c3": "N",
                        "\uff2e": "N",
                        "\u01f8": "N",
                        "\u0143": "N",
                        "\xd1": "N",
                        "\u1e44": "N",
                        "\u0147": "N",
                        "\u1e46": "N",
                        "\u0145": "N",
                        "\u1e4a": "N",
                        "\u1e48": "N",
                        "\u0220": "N",
                        "\u019d": "N",
                        "\ua790": "N",
                        "\ua7a4": "N",
                        "\u01ca": "NJ",
                        "\u01cb": "Nj",
                        "\u24c4": "O",
                        "\uff2f": "O",
                        "\xd2": "O",
                        "\xd3": "O",
                        "\xd4": "O",
                        "\u1ed2": "O",
                        "\u1ed0": "O",
                        "\u1ed6": "O",
                        "\u1ed4": "O",
                        "\xd5": "O",
                        "\u1e4c": "O",
                        "\u022c": "O",
                        "\u1e4e": "O",
                        "\u014c": "O",
                        "\u1e50": "O",
                        "\u1e52": "O",
                        "\u014e": "O",
                        "\u022e": "O",
                        "\u0230": "O",
                        "\xd6": "O",
                        "\u022a": "O",
                        "\u1ece": "O",
                        "\u0150": "O",
                        "\u01d1": "O",
                        "\u020c": "O",
                        "\u020e": "O",
                        "\u01a0": "O",
                        "\u1edc": "O",
                        "\u1eda": "O",
                        "\u1ee0": "O",
                        "\u1ede": "O",
                        "\u1ee2": "O",
                        "\u1ecc": "O",
                        "\u1ed8": "O",
                        "\u01ea": "O",
                        "\u01ec": "O",
                        "\xd8": "O",
                        "\u01fe": "O",
                        "\u0186": "O",
                        "\u019f": "O",
                        "\ua74a": "O",
                        "\ua74c": "O",
                        "\u01a2": "OI",
                        "\ua74e": "OO",
                        "\u0222": "OU",
                        "\u24c5": "P",
                        "\uff30": "P",
                        "\u1e54": "P",
                        "\u1e56": "P",
                        "\u01a4": "P",
                        "\u2c63": "P",
                        "\ua750": "P",
                        "\ua752": "P",
                        "\ua754": "P",
                        "\u24c6": "Q",
                        "\uff31": "Q",
                        "\ua756": "Q",
                        "\ua758": "Q",
                        "\u024a": "Q",
                        "\u24c7": "R",
                        "\uff32": "R",
                        "\u0154": "R",
                        "\u1e58": "R",
                        "\u0158": "R",
                        "\u0210": "R",
                        "\u0212": "R",
                        "\u1e5a": "R",
                        "\u1e5c": "R",
                        "\u0156": "R",
                        "\u1e5e": "R",
                        "\u024c": "R",
                        "\u2c64": "R",
                        "\ua75a": "R",
                        "\ua7a6": "R",
                        "\ua782": "R",
                        "\u24c8": "S",
                        "\uff33": "S",
                        "\u1e9e": "S",
                        "\u015a": "S",
                        "\u1e64": "S",
                        "\u015c": "S",
                        "\u1e60": "S",
                        "\u0160": "S",
                        "\u1e66": "S",
                        "\u1e62": "S",
                        "\u1e68": "S",
                        "\u0218": "S",
                        "\u015e": "S",
                        "\u2c7e": "S",
                        "\ua7a8": "S",
                        "\ua784": "S",
                        "\u24c9": "T",
                        "\uff34": "T",
                        "\u1e6a": "T",
                        "\u0164": "T",
                        "\u1e6c": "T",
                        "\u021a": "T",
                        "\u0162": "T",
                        "\u1e70": "T",
                        "\u1e6e": "T",
                        "\u0166": "T",
                        "\u01ac": "T",
                        "\u01ae": "T",
                        "\u023e": "T",
                        "\ua786": "T",
                        "\ua728": "TZ",
                        "\u24ca": "U",
                        "\uff35": "U",
                        "\xd9": "U",
                        "\xda": "U",
                        "\xdb": "U",
                        "\u0168": "U",
                        "\u1e78": "U",
                        "\u016a": "U",
                        "\u1e7a": "U",
                        "\u016c": "U",
                        "\xdc": "U",
                        "\u01db": "U",
                        "\u01d7": "U",
                        "\u01d5": "U",
                        "\u01d9": "U",
                        "\u1ee6": "U",
                        "\u016e": "U",
                        "\u0170": "U",
                        "\u01d3": "U",
                        "\u0214": "U",
                        "\u0216": "U",
                        "\u01af": "U",
                        "\u1eea": "U",
                        "\u1ee8": "U",
                        "\u1eee": "U",
                        "\u1eec": "U",
                        "\u1ef0": "U",
                        "\u1ee4": "U",
                        "\u1e72": "U",
                        "\u0172": "U",
                        "\u1e76": "U",
                        "\u1e74": "U",
                        "\u0244": "U",
                        "\u24cb": "V",
                        "\uff36": "V",
                        "\u1e7c": "V",
                        "\u1e7e": "V",
                        "\u01b2": "V",
                        "\ua75e": "V",
                        "\u0245": "V",
                        "\ua760": "VY",
                        "\u24cc": "W",
                        "\uff37": "W",
                        "\u1e80": "W",
                        "\u1e82": "W",
                        "\u0174": "W",
                        "\u1e86": "W",
                        "\u1e84": "W",
                        "\u1e88": "W",
                        "\u2c72": "W",
                        "\u24cd": "X",
                        "\uff38": "X",
                        "\u1e8a": "X",
                        "\u1e8c": "X",
                        "\u24ce": "Y",
                        "\uff39": "Y",
                        "\u1ef2": "Y",
                        "\xdd": "Y",
                        "\u0176": "Y",
                        "\u1ef8": "Y",
                        "\u0232": "Y",
                        "\u1e8e": "Y",
                        "\u0178": "Y",
                        "\u1ef6": "Y",
                        "\u1ef4": "Y",
                        "\u01b3": "Y",
                        "\u024e": "Y",
                        "\u1efe": "Y",
                        "\u24cf": "Z",
                        "\uff3a": "Z",
                        "\u0179": "Z",
                        "\u1e90": "Z",
                        "\u017b": "Z",
                        "\u017d": "Z",
                        "\u1e92": "Z",
                        "\u1e94": "Z",
                        "\u01b5": "Z",
                        "\u0224": "Z",
                        "\u2c7f": "Z",
                        "\u2c6b": "Z",
                        "\ua762": "Z",
                        "\u24d0": "a",
                        "\uff41": "a",
                        "\u1e9a": "a",
                        "\xe0": "a",
                        "\xe1": "a",
                        "\xe2": "a",
                        "\u1ea7": "a",
                        "\u1ea5": "a",
                        "\u1eab": "a",
                        "\u1ea9": "a",
                        "\xe3": "a",
                        "\u0101": "a",
                        "\u0103": "a",
                        "\u1eb1": "a",
                        "\u1eaf": "a",
                        "\u1eb5": "a",
                        "\u1eb3": "a",
                        "\u0227": "a",
                        "\u01e1": "a",
                        "\xe4": "a",
                        "\u01df": "a",
                        "\u1ea3": "a",
                        "\xe5": "a",
                        "\u01fb": "a",
                        "\u01ce": "a",
                        "\u0201": "a",
                        "\u0203": "a",
                        "\u1ea1": "a",
                        "\u1ead": "a",
                        "\u1eb7": "a",
                        "\u1e01": "a",
                        "\u0105": "a",
                        "\u2c65": "a",
                        "\u0250": "a",
                        "\ua733": "aa",
                        "\xe6": "ae",
                        "\u01fd": "ae",
                        "\u01e3": "ae",
                        "\ua735": "ao",
                        "\ua737": "au",
                        "\ua739": "av",
                        "\ua73b": "av",
                        "\ua73d": "ay",
                        "\u24d1": "b",
                        "\uff42": "b",
                        "\u1e03": "b",
                        "\u1e05": "b",
                        "\u1e07": "b",
                        "\u0180": "b",
                        "\u0183": "b",
                        "\u0253": "b",
                        "\u24d2": "c",
                        "\uff43": "c",
                        "\u0107": "c",
                        "\u0109": "c",
                        "\u010b": "c",
                        "\u010d": "c",
                        "\xe7": "c",
                        "\u1e09": "c",
                        "\u0188": "c",
                        "\u023c": "c",
                        "\ua73f": "c",
                        "\u2184": "c",
                        "\u24d3": "d",
                        "\uff44": "d",
                        "\u1e0b": "d",
                        "\u010f": "d",
                        "\u1e0d": "d",
                        "\u1e11": "d",
                        "\u1e13": "d",
                        "\u1e0f": "d",
                        "\u0111": "d",
                        "\u018c": "d",
                        "\u0256": "d",
                        "\u0257": "d",
                        "\ua77a": "d",
                        "\u01f3": "dz",
                        "\u01c6": "dz",
                        "\u24d4": "e",
                        "\uff45": "e",
                        "\xe8": "e",
                        "\xe9": "e",
                        "\xea": "e",
                        "\u1ec1": "e",
                        "\u1ebf": "e",
                        "\u1ec5": "e",
                        "\u1ec3": "e",
                        "\u1ebd": "e",
                        "\u0113": "e",
                        "\u1e15": "e",
                        "\u1e17": "e",
                        "\u0115": "e",
                        "\u0117": "e",
                        "\xeb": "e",
                        "\u1ebb": "e",
                        "\u011b": "e",
                        "\u0205": "e",
                        "\u0207": "e",
                        "\u1eb9": "e",
                        "\u1ec7": "e",
                        "\u0229": "e",
                        "\u1e1d": "e",
                        "\u0119": "e",
                        "\u1e19": "e",
                        "\u1e1b": "e",
                        "\u0247": "e",
                        "\u025b": "e",
                        "\u01dd": "e",
                        "\u24d5": "f",
                        "\uff46": "f",
                        "\u1e1f": "f",
                        "\u0192": "f",
                        "\ua77c": "f",
                        "\u24d6": "g",
                        "\uff47": "g",
                        "\u01f5": "g",
                        "\u011d": "g",
                        "\u1e21": "g",
                        "\u011f": "g",
                        "\u0121": "g",
                        "\u01e7": "g",
                        "\u0123": "g",
                        "\u01e5": "g",
                        "\u0260": "g",
                        "\ua7a1": "g",
                        "\u1d79": "g",
                        "\ua77f": "g",
                        "\u24d7": "h",
                        "\uff48": "h",
                        "\u0125": "h",
                        "\u1e23": "h",
                        "\u1e27": "h",
                        "\u021f": "h",
                        "\u1e25": "h",
                        "\u1e29": "h",
                        "\u1e2b": "h",
                        "\u1e96": "h",
                        "\u0127": "h",
                        "\u2c68": "h",
                        "\u2c76": "h",
                        "\u0265": "h",
                        "\u0195": "hv",
                        "\u24d8": "i",
                        "\uff49": "i",
                        "\xec": "i",
                        "\xed": "i",
                        "\xee": "i",
                        "\u0129": "i",
                        "\u012b": "i",
                        "\u012d": "i",
                        "\xef": "i",
                        "\u1e2f": "i",
                        "\u1ec9": "i",
                        "\u01d0": "i",
                        "\u0209": "i",
                        "\u020b": "i",
                        "\u1ecb": "i",
                        "\u012f": "i",
                        "\u1e2d": "i",
                        "\u0268": "i",
                        "\u0131": "i",
                        "\u24d9": "j",
                        "\uff4a": "j",
                        "\u0135": "j",
                        "\u01f0": "j",
                        "\u0249": "j",
                        "\u24da": "k",
                        "\uff4b": "k",
                        "\u1e31": "k",
                        "\u01e9": "k",
                        "\u1e33": "k",
                        "\u0137": "k",
                        "\u1e35": "k",
                        "\u0199": "k",
                        "\u2c6a": "k",
                        "\ua741": "k",
                        "\ua743": "k",
                        "\ua745": "k",
                        "\ua7a3": "k",
                        "\u24db": "l",
                        "\uff4c": "l",
                        "\u0140": "l",
                        "\u013a": "l",
                        "\u013e": "l",
                        "\u1e37": "l",
                        "\u1e39": "l",
                        "\u013c": "l",
                        "\u1e3d": "l",
                        "\u1e3b": "l",
                        "\u017f": "l",
                        "\u0142": "l",
                        "\u019a": "l",
                        "\u026b": "l",
                        "\u2c61": "l",
                        "\ua749": "l",
                        "\ua781": "l",
                        "\ua747": "l",
                        "\u01c9": "lj",
                        "\u24dc": "m",
                        "\uff4d": "m",
                        "\u1e3f": "m",
                        "\u1e41": "m",
                        "\u1e43": "m",
                        "\u0271": "m",
                        "\u026f": "m",
                        "\u24dd": "n",
                        "\uff4e": "n",
                        "\u01f9": "n",
                        "\u0144": "n",
                        "\xf1": "n",
                        "\u1e45": "n",
                        "\u0148": "n",
                        "\u1e47": "n",
                        "\u0146": "n",
                        "\u1e4b": "n",
                        "\u1e49": "n",
                        "\u019e": "n",
                        "\u0272": "n",
                        "\u0149": "n",
                        "\ua791": "n",
                        "\ua7a5": "n",
                        "\u01cc": "nj",
                        "\u24de": "o",
                        "\uff4f": "o",
                        "\xf2": "o",
                        "\xf3": "o",
                        "\xf4": "o",
                        "\u1ed3": "o",
                        "\u1ed1": "o",
                        "\u1ed7": "o",
                        "\u1ed5": "o",
                        "\xf5": "o",
                        "\u1e4d": "o",
                        "\u022d": "o",
                        "\u1e4f": "o",
                        "\u014d": "o",
                        "\u1e51": "o",
                        "\u1e53": "o",
                        "\u014f": "o",
                        "\u022f": "o",
                        "\u0231": "o",
                        "\xf6": "o",
                        "\u022b": "o",
                        "\u1ecf": "o",
                        "\u0151": "o",
                        "\u01d2": "o",
                        "\u020d": "o",
                        "\u020f": "o",
                        "\u01a1": "o",
                        "\u1edd": "o",
                        "\u1edb": "o",
                        "\u1ee1": "o",
                        "\u1edf": "o",
                        "\u1ee3": "o",
                        "\u1ecd": "o",
                        "\u1ed9": "o",
                        "\u01eb": "o",
                        "\u01ed": "o",
                        "\xf8": "o",
                        "\u01ff": "o",
                        "\u0254": "o",
                        "\ua74b": "o",
                        "\ua74d": "o",
                        "\u0275": "o",
                        "\u01a3": "oi",
                        "\u0223": "ou",
                        "\ua74f": "oo",
                        "\u24df": "p",
                        "\uff50": "p",
                        "\u1e55": "p",
                        "\u1e57": "p",
                        "\u01a5": "p",
                        "\u1d7d": "p",
                        "\ua751": "p",
                        "\ua753": "p",
                        "\ua755": "p",
                        "\u24e0": "q",
                        "\uff51": "q",
                        "\u024b": "q",
                        "\ua757": "q",
                        "\ua759": "q",
                        "\u24e1": "r",
                        "\uff52": "r",
                        "\u0155": "r",
                        "\u1e59": "r",
                        "\u0159": "r",
                        "\u0211": "r",
                        "\u0213": "r",
                        "\u1e5b": "r",
                        "\u1e5d": "r",
                        "\u0157": "r",
                        "\u1e5f": "r",
                        "\u024d": "r",
                        "\u027d": "r",
                        "\ua75b": "r",
                        "\ua7a7": "r",
                        "\ua783": "r",
                        "\u24e2": "s",
                        "\uff53": "s",
                        "\xdf": "s",
                        "\u015b": "s",
                        "\u1e65": "s",
                        "\u015d": "s",
                        "\u1e61": "s",
                        "\u0161": "s",
                        "\u1e67": "s",
                        "\u1e63": "s",
                        "\u1e69": "s",
                        "\u0219": "s",
                        "\u015f": "s",
                        "\u023f": "s",
                        "\ua7a9": "s",
                        "\ua785": "s",
                        "\u1e9b": "s",
                        "\u24e3": "t",
                        "\uff54": "t",
                        "\u1e6b": "t",
                        "\u1e97": "t",
                        "\u0165": "t",
                        "\u1e6d": "t",
                        "\u021b": "t",
                        "\u0163": "t",
                        "\u1e71": "t",
                        "\u1e6f": "t",
                        "\u0167": "t",
                        "\u01ad": "t",
                        "\u0288": "t",
                        "\u2c66": "t",
                        "\ua787": "t",
                        "\ua729": "tz",
                        "\u24e4": "u",
                        "\uff55": "u",
                        "\xf9": "u",
                        "\xfa": "u",
                        "\xfb": "u",
                        "\u0169": "u",
                        "\u1e79": "u",
                        "\u016b": "u",
                        "\u1e7b": "u",
                        "\u016d": "u",
                        "\xfc": "u",
                        "\u01dc": "u",
                        "\u01d8": "u",
                        "\u01d6": "u",
                        "\u01da": "u",
                        "\u1ee7": "u",
                        "\u016f": "u",
                        "\u0171": "u",
                        "\u01d4": "u",
                        "\u0215": "u",
                        "\u0217": "u",
                        "\u01b0": "u",
                        "\u1eeb": "u",
                        "\u1ee9": "u",
                        "\u1eef": "u",
                        "\u1eed": "u",
                        "\u1ef1": "u",
                        "\u1ee5": "u",
                        "\u1e73": "u",
                        "\u0173": "u",
                        "\u1e77": "u",
                        "\u1e75": "u",
                        "\u0289": "u",
                        "\u24e5": "v",
                        "\uff56": "v",
                        "\u1e7d": "v",
                        "\u1e7f": "v",
                        "\u028b": "v",
                        "\ua75f": "v",
                        "\u028c": "v",
                        "\ua761": "vy",
                        "\u24e6": "w",
                        "\uff57": "w",
                        "\u1e81": "w",
                        "\u1e83": "w",
                        "\u0175": "w",
                        "\u1e87": "w",
                        "\u1e85": "w",
                        "\u1e98": "w",
                        "\u1e89": "w",
                        "\u2c73": "w",
                        "\u24e7": "x",
                        "\uff58": "x",
                        "\u1e8b": "x",
                        "\u1e8d": "x",
                        "\u24e8": "y",
                        "\uff59": "y",
                        "\u1ef3": "y",
                        "\xfd": "y",
                        "\u0177": "y",
                        "\u1ef9": "y",
                        "\u0233": "y",
                        "\u1e8f": "y",
                        "\xff": "y",
                        "\u1ef7": "y",
                        "\u1e99": "y",
                        "\u1ef5": "y",
                        "\u01b4": "y",
                        "\u024f": "y",
                        "\u1eff": "y",
                        "\u24e9": "z",
                        "\uff5a": "z",
                        "\u017a": "z",
                        "\u1e91": "z",
                        "\u017c": "z",
                        "\u017e": "z",
                        "\u1e93": "z",
                        "\u1e95": "z",
                        "\u01b6": "z",
                        "\u0225": "z",
                        "\u0240": "z",
                        "\u2c6c": "z",
                        "\ua763": "z",
                        "\u0386": "\u0391",
                        "\u0388": "\u0395",
                        "\u0389": "\u0397",
                        "\u038a": "\u0399",
                        "\u03aa": "\u0399",
                        "\u038c": "\u039f",
                        "\u038e": "\u03a5",
                        "\u03ab": "\u03a5",
                        "\u038f": "\u03a9",
                        "\u03ac": "\u03b1",
                        "\u03ad": "\u03b5",
                        "\u03ae": "\u03b7",
                        "\u03af": "\u03b9",
                        "\u03ca": "\u03b9",
                        "\u0390": "\u03b9",
                        "\u03cc": "\u03bf",
                        "\u03cd": "\u03c5",
                        "\u03cb": "\u03c5",
                        "\u03b0": "\u03c5",
                        "\u03c9": "\u03c9",
                        "\u03c2": "\u03c3"
                    }
                }), t.define("select2/data/base", ["../utils"], function(e) {
                    function t() { t.__super__.constructor.call(this) }
                    return e.Extend(t, e.Observable), t.prototype.current = function() { throw new Error("The `current` method must be defined in child classes.") }, t.prototype.query = function() { throw new Error("The `query` method must be defined in child classes.") }, t.prototype.bind = function() {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, n) { var i = t.id + "-result-"; return i += e.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4), i }, t
                }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, n) {
                    function i(e, t) { this.$element = e, this.options = t, i.__super__.constructor.call(this) }
                    return t.Extend(i, e), i.prototype.current = function(e) {
                        var t = [],
                            i = this;
                        this.$element.find(":selected").each(function() {
                            var e = n(this),
                                r = i.item(e);
                            t.push(r)
                        }), e(t)
                    }, i.prototype.select = function(e) {
                        var t = this;
                        if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function(i) {
                            var r = [];
                            (e = [e]).push.apply(e, i);
                            for (var o = 0; o < e.length; o++) { var a = e[o].id; - 1 === n.inArray(a, r) && r.push(a) }
                            t.$element.val(r), t.$element.trigger("change")
                        });
                        else {
                            var i = e.id;
                            this.$element.val(i), this.$element.trigger("change")
                        }
                    }, i.prototype.unselect = function(e) {
                        var t = this;
                        if (this.$element.prop("multiple")) {
                            if (e.selected = !1, n(e.element).is("option")) return e.element.selected = !1, void this.$element.trigger("change");
                            this.current(function(i) {
                                for (var r = [], o = 0; o < i.length; o++) {
                                    var a = i[o].id;
                                    a !== e.id && -1 === n.inArray(a, r) && r.push(a)
                                }
                                t.$element.val(r), t.$element.trigger("change")
                            })
                        }
                    }, i.prototype.bind = function(e) {
                        var t = this;
                        this.container = e, e.on("select", function(e) { t.select(e.data) }), e.on("unselect", function(e) { t.unselect(e.data) })
                    }, i.prototype.destroy = function() { this.$element.find("*").each(function() { n.removeData(this, "data") }) }, i.prototype.query = function(e, t) {
                        var i = [],
                            r = this;
                        this.$element.children().each(function() {
                            var t = n(this);
                            if (t.is("option") || t.is("optgroup")) {
                                var o = r.item(t),
                                    a = r.matches(e, o);
                                null !== a && i.push(a)
                            }
                        }), t({ results: i })
                    }, i.prototype.addOptions = function(e) { t.appendMany(this.$element, e) }, i.prototype.option = function(e) {
                        var t;
                        e.children ? (t = document.createElement("optgroup")).label = e.text : (t = document.createElement("option")).textContent !== undefined ? t.textContent = e.text : t.innerText = e.text, e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                        var i = n(t),
                            r = this._normalizeItem(e);
                        return r.element = t, n.data(t, "data", r), i
                    }, i.prototype.item = function(e) {
                        var t = {};
                        if (null != (t = n.data(e[0], "data"))) return t;
                        if (e.is("option")) t = { id: e.val(), text: e.text(), disabled: e.prop("disabled"), selected: e.prop("selected"), title: e.prop("title") };
                        else if (e.is("optgroup")) {
                            t = { text: e.prop("label"), children: [], title: e.prop("title") };
                            for (var i = e.children("option"), r = [], o = 0; o < i.length; o++) {
                                var a = n(i[o]),
                                    s = this.item(a);
                                r.push(s)
                            }
                            t.children = r
                        }
                        return (t = this._normalizeItem(t)).element = e[0], n.data(e[0], "data", t), t
                    }, i.prototype._normalizeItem = function(e) { n.isPlainObject(e) || (e = { id: e, text: e }); var t = { selected: !1, disabled: !1 }; return null != (e = n.extend({}, { text: "" }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, t, e) }, i.prototype.matches = function(e, t) { return this.options.get("matcher")(e, t) }, i
                }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, t, n) {
                    function i(e, t) {
                        var n = t.get("data") || [];
                        i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
                    }
                    return t.Extend(i, e), i.prototype.select = function(e) {
                        var t = this.$element.find("option").filter(function(t, n) { return n.value == e.id.toString() });
                        0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
                    }, i.prototype.convertToOptions = function(e) {
                        function i(e) { return function() { return n(this).val() == e.id } }
                        for (var r = this, o = this.$element.find("option"), a = o.map(function() { return r.item(n(this)).id }).get(), s = [], l = 0; l < e.length; l++) {
                            var c = this._normalizeItem(e[l]);
                            if (n.inArray(c.id, a) >= 0) {
                                var u = o.filter(i(c)),
                                    d = this.item(u),
                                    h = n.extend(!0, {}, c, d),
                                    p = this.option(h);
                                u.replaceWith(p)
                            } else {
                                var f = this.option(c);
                                if (c.children) {
                                    var m = this.convertToOptions(c.children);
                                    t.appendMany(f, m)
                                }
                                s.push(f)
                            }
                        }
                        return s
                    }, i
                }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, n) {
                    function i(e, t) { this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t) }
                    return t.Extend(i, e), i.prototype._applyDefaults = function(e) { var t = { data: function(e) { return n.extend({}, e, { q: e.term }) }, transport: function(e, t, i) { var r = n.ajax(e); return r.then(t), r.fail(i), r } }; return n.extend({}, t, e, !0) }, i.prototype.processResults = function(e) { return e }, i.prototype.query = function(e, t) {
                        function i() {
                            var i = o.transport(o, function(i) {
                                var o = r.processResults(i, e);
                                r.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(o)
                            }, function() { i.status && "0" === i.status || r.trigger("results:message", { message: "errorLoading" }) });
                            r._request = i
                        }
                        var r = this;
                        null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var o = n.extend({ type: "GET" }, this.ajaxOptions);
                        "function" == typeof o.url && (o.url = o.url.call(this.$element, e)), "function" == typeof o.data && (o.data = o.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
                    }, i
                }), t.define("select2/data/tags", ["jquery"], function(e) {
                    function t(t, n, i) {
                        var r = i.get("tags"),
                            o = i.get("createTag");
                        o !== undefined && (this.createTag = o);
                        var a = i.get("insertTag");
                        if (a !== undefined && (this.insertTag = a), t.call(this, n, i), e.isArray(r))
                            for (var s = 0; s < r.length; s++) {
                                var l = r[s],
                                    c = this._normalizeItem(l),
                                    u = this.option(c);
                                this.$element.append(u)
                            }
                    }
                    return t.prototype.query = function(e, t, n) {
                        function i(e, o) {
                            for (var a = e.results, s = 0; s < a.length; s++) {
                                var l = a[s],
                                    c = null != l.children && !i({ results: l.children }, !0);
                                if (l.text === t.term || c) return !o && (e.data = a, void n(e))
                            }
                            if (o) return !0;
                            var u = r.createTag(t);
                            if (null != u) {
                                var d = r.option(u);
                                d.attr("data-select2-tag", !0), r.addOptions([d]), r.insertTag(a, u)
                            }
                            e.results = a, n(e)
                        }
                        var r = this;
                        this._removeOldTags(), null != t.term && null == t.page ? e.call(this, t, i) : e.call(this, t, n)
                    }, t.prototype.createTag = function(t, n) { var i = e.trim(n.term); return "" === i ? null : { id: i, text: i } }, t.prototype.insertTag = function(e, t, n) { t.unshift(n) }, t.prototype._removeOldTags = function() {
                        this._lastTag;
                        this.$element.find("option[data-select2-tag]").each(function() { this.selected || e(this).remove() })
                    }, t
                }), t.define("select2/data/tokenizer", ["jquery"], function(e) {
                    function t(e, t, n) {
                        var i = n.get("tokenizer");
                        i !== undefined && (this.tokenizer = i), e.call(this, t, n)
                    }
                    return t.prototype.bind = function(e, t, n) { e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field") }, t.prototype.query = function(t, n, i) {
                        function r(t) {
                            var n = a._normalizeItem(t);
                            if (!a.$element.find("option").filter(function() { return e(this).val() === n.id }).length) {
                                var i = a.option(n);
                                i.attr("data-select2-tag", !0), a._removeOldTags(), a.addOptions([i])
                            }
                            o(n)
                        }

                        function o(e) { a.trigger("select", { data: e }) }
                        var a = this;
                        n.term = n.term || "";
                        var s = this.tokenizer(n, this.options, r);
                        s.term !== n.term && (this.$search.length && (this.$search.val(s.term), this.$search.focus()), n.term = s.term), t.call(this, n, i)
                    }, t.prototype.tokenizer = function(t, n, i, r) {
                        for (var o = i.get("tokenSeparators") || [], a = n.term, s = 0, l = this.createTag || function(e) { return { id: e.term, text: e.term } }; s < a.length;) {
                            var c = a[s];
                            if (-1 !== e.inArray(c, o)) {
                                var u = a.substr(0, s),
                                    d = l(e.extend({}, n, { term: u }));
                                null != d ? (r(d), a = a.substr(s + 1) || "", s = 0) : s++
                            } else s++
                        }
                        return { term: a }
                    }, t
                }), t.define("select2/data/minimumInputLength", [], function() {
                    function e(e, t, n) { this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n) }
                    return e.prototype.query = function(e, t, n) { t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: t.term, params: t } }) : e.call(this, t, n) }, e
                }), t.define("select2/data/maximumInputLength", [], function() {
                    function e(e, t, n) { this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n) }
                    return e.prototype.query = function(e, t, n) { t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: t.term, params: t } }) : e.call(this, t, n) }, e
                }), t.define("select2/data/maximumSelectionLength", [], function() {
                    function e(e, t, n) { this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n) }
                    return e.prototype.query = function(e, t, n) {
                        var i = this;
                        this.current(function(r) {
                            var o = null != r ? r.length : 0;
                            i.maximumSelectionLength > 0 && o >= i.maximumSelectionLength ? i.trigger("results:message", { message: "maximumSelected", args: { maximum: i.maximumSelectionLength } }) : e.call(i, t, n)
                        })
                    }, e
                }), t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
                    function n(e, t) { this.$element = e, this.options = t, n.__super__.constructor.call(this) }
                    return t.Extend(n, t.Observable), n.prototype.render = function() { var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>'); return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t }, n.prototype.bind = function() {}, n.prototype.position = function() {}, n.prototype.destroy = function() { this.$dropdown.remove() }, n
                }), t.define("select2/dropdown/search", ["jquery", "../utils"], function(e) {
                    function t() {}
                    return t.prototype.render = function(t) {
                        var n = t.call(this),
                            i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                        return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                    }, t.prototype.bind = function(t, n, i) {
                        var r = this;
                        t.call(this, n, i), this.$search.on("keydown", function(e) { r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented() }), this.$search.on("input", function() { e(this).off("keyup") }), this.$search.on("keyup input", function(e) { r.handleSearch(e) }), n.on("open", function() { r.$search.attr("tabindex", 0), r.$search.focus(), window.setTimeout(function() { r.$search.focus() }, 0) }), n.on("close", function() { r.$search.attr("tabindex", -1), r.$search.val("") }), n.on("focus", function() { n.isOpen() && r.$search.focus() }), n.on("results:all", function(e) { null != e.query.term && "" !== e.query.term || (r.showSearch(e) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide")) })
                    }, t.prototype.handleSearch = function() {
                        if (!this._keyUpPrevented) {
                            var e = this.$search.val();
                            this.trigger("query", { term: e })
                        }
                        this._keyUpPrevented = !1
                    }, t.prototype.showSearch = function() { return !0 }, t
                }), t.define("select2/dropdown/hidePlaceholder", [], function() {
                    function e(e, t, n, i) { this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i) }
                    return e.prototype.append = function(e, t) { t.results = this.removePlaceholder(t.results), e.call(this, t) }, e.prototype.normalizePlaceholder = function(e, t) { return "string" == typeof t && (t = { id: "", text: t }), t }, e.prototype.removePlaceholder = function(e, t) {
                        for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                            var r = t[i];
                            this.placeholder.id === r.id && n.splice(i, 1)
                        }
                        return n
                    }, e
                }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function(e) {
                    function t(e, t, n, i) { this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1 }
                    return t.prototype.append = function(e, t) { this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore) }, t.prototype.bind = function(t, n, i) {
                        var r = this;
                        t.call(this, n, i), n.on("query", function(e) { r.lastParams = e, r.loading = !0 }), n.on("query:append", function(e) { r.lastParams = e, r.loading = !0 }), this.$results.on("scroll", function() { var t = e.contains(document.documentElement, r.$loadingMore[0]);!r.loading && t && (r.$results.offset().top + r.$results.outerHeight(!1) + 50 >= r.$loadingMore.offset().top + r.$loadingMore.outerHeight(!1) && r.loadMore()) })
                    }, t.prototype.loadMore = function() {
                        this.loading = !0;
                        var t = e.extend({}, { page: 1 }, this.lastParams);
                        t.page++, this.trigger("query:append", t)
                    }, t.prototype.showLoadingMore = function(e, t) { return t.pagination && t.pagination.more }, t.prototype.createLoadingMore = function() {
                        var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            n = this.options.get("translations").get("loadingMore");
                        return t.html(n(this.lastParams)), t
                    }, t
                }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(e, t) {
                    function n(t, n, i) { this.$dropdownParent = i.get("dropdownParent") || e(document.body), t.call(this, n, i) }
                    return n.prototype.bind = function(e, t, n) {
                        var i = this,
                            r = !1;
                        e.call(this, t, n), t.on("open", function() { i._showDropdown(), i._attachPositioningHandler(t), r || (r = !0, t.on("results:all", function() { i._positionDropdown(), i._resizeDropdown() }), t.on("results:append", function() { i._positionDropdown(), i._resizeDropdown() })) }), t.on("close", function() { i._hideDropdown(), i._detachPositioningHandler(t) }), this.$dropdownContainer.on("mousedown", function(e) { e.stopPropagation() })
                    }, n.prototype.destroy = function(e) { e.call(this), this.$dropdownContainer.remove() }, n.prototype.position = function(e, t, n) { t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({ position: "absolute", top: -999999 }), this.$container = n }, n.prototype.render = function(t) {
                        var n = e("<span></span>"),
                            i = t.call(this);
                        return n.append(i), this.$dropdownContainer = n, n
                    }, n.prototype._hideDropdown = function() { this.$dropdownContainer.detach() }, n.prototype._attachPositioningHandler = function(n, i) {
                        var r = this,
                            o = "scroll.select2." + i.id,
                            a = "resize.select2." + i.id,
                            s = "orientationchange.select2." + i.id,
                            l = this.$container.parents().filter(t.hasScroll);
                        l.each(function() { e(this).data("select2-scroll-position", { x: e(this).scrollLeft(), y: e(this).scrollTop() }) }), l.on(o, function() {
                            var t = e(this).data("select2-scroll-position");
                            e(this).scrollTop(t.y)
                        }), e(window).on(o + " " + a + " " + s, function() { r._positionDropdown(), r._resizeDropdown() })
                    }, n.prototype._detachPositioningHandler = function(n, i) {
                        var r = "scroll.select2." + i.id,
                            o = "resize.select2." + i.id,
                            a = "orientationchange.select2." + i.id;
                        this.$container.parents().filter(t.hasScroll).off(r), e(window).off(r + " " + o + " " + a)
                    }, n.prototype._positionDropdown = function() {
                        var t = e(window),
                            n = this.$dropdown.hasClass("select2-dropdown--above"),
                            i = this.$dropdown.hasClass("select2-dropdown--below"),
                            r = null,
                            o = this.$container.offset();
                        o.bottom = o.top + this.$container.outerHeight(!1);
                        var a = { height: this.$container.outerHeight(!1) };
                        a.top = o.top, a.bottom = o.top + a.height;
                        var s = { height: this.$dropdown.outerHeight(!1) },
                            l = { top: t.scrollTop(), bottom: t.scrollTop() + t.height() },
                            c = l.top < o.top - s.height,
                            u = l.bottom > o.bottom + s.height,
                            d = { left: o.left, top: a.bottom },
                            h = this.$dropdownParent;
                        "static" === h.css("position") && (h = h.offsetParent());
                        var p = h.offset();
                        d.top -= p.top, d.left -= p.left, n || i || (r = "below"), u || !c || n ? !c && u && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (d.top = a.top - p.top - s.height), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(d)
                    }, n.prototype._resizeDropdown = function() {
                        var e = { width: this.$container.outerWidth(!1) + "px" };
                        this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                    }, n.prototype._showDropdown = function() { this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown() }, n
                }), t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function e(t) {
                        for (var n = 0, i = 0; i < t.length; i++) {
                            var r = t[i];
                            r.children ? n += e(r.children) : n++
                        }
                        return n
                    }

                    function t(e, t, n, i) { this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = Infinity), e.call(this, t, n, i) }
                    return t.prototype.showSearch = function(t, n) { return !(e(n.data.results) < this.minimumResultsForSearch) && t.call(this, n) }, t
                }), t.define("select2/dropdown/selectOnClose", [], function() {
                    function e() {}
                    return e.prototype.bind = function(e, t, n) {
                        var i = this;
                        e.call(this, t, n), t.on("close", function(e) { i._handleSelectOnClose(e) })
                    }, e.prototype._handleSelectOnClose = function(e, t) {
                        if (t && null != t.originalSelect2Event) { var n = t.originalSelect2Event; if ("select" === n._type || "unselect" === n._type) return }
                        var i = this.getHighlightedResults();
                        if (!(i.length < 1)) {
                            var r = i.data("data");
                            null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", { data: r })
                        }
                    }, e
                }), t.define("select2/dropdown/closeOnSelect", [], function() {
                    function e() {}
                    return e.prototype.bind = function(e, t, n) {
                        var i = this;
                        e.call(this, t, n), t.on("select", function(e) { i._selectTriggered(e) }), t.on("unselect", function(e) { i._selectTriggered(e) })
                    }, e.prototype._selectTriggered = function(e, t) {
                        var n = t.originalEvent;
                        n && n.ctrlKey || this.trigger("close", { originalEvent: n, originalSelect2Event: t })
                    }, e
                }), t.define("select2/i18n/en", [], function() {
                    return {
                        errorLoading: function() { return "The results could not be loaded." },
                        inputTooLong: function(e) {
                            var t = e.input.length - e.maximum,
                                n = "Please delete " + t + " character";
                            return 1 != t && (n += "s"), n
                        },
                        inputTooShort: function(e) { return "Please enter " + (e.minimum - e.input.length) + " or more characters" },
                        loadingMore: function() { return "Loading more results\u2026" },
                        maximumSelected: function(e) { var t = "You can only select " + e.maximum + " item"; return 1 != e.maximum && (t += "s"), t },
                        noResults: function() { return "No results found" },
                        searching: function() { return "Searching\u2026" }
                    }
                }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(e, t, n, i, r, o, a, s, l, c, u, d, h, p, f, m, g, y, v, b, k, w, _, S, C, T, E, A, x) {
                    function D() { this.reset() }
                    return D.prototype.apply = function(d) {
                        if (null == (d = e.extend(!0, {}, this.defaults, d)).dataAdapter) {
                            if (null != d.ajax ? d.dataAdapter = f : null != d.data ? d.dataAdapter = p : d.dataAdapter = h, d.minimumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, y)), d.maximumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, v)), d.maximumSelectionLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, b)), d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, m)), null == d.tokenSeparators && null == d.tokenizer || (d.dataAdapter = c.Decorate(d.dataAdapter, g)), null != d.query) {
                                var x = t(d.amdBase + "compat/query");
                                d.dataAdapter = c.Decorate(d.dataAdapter, x)
                            }
                            if (null != d.initSelection) {
                                var D = t(d.amdBase + "compat/initSelection");
                                d.dataAdapter = c.Decorate(d.dataAdapter, D)
                            }
                        }
                        if (null == d.resultsAdapter && (d.resultsAdapter = n, null != d.ajax && (d.resultsAdapter = c.Decorate(d.resultsAdapter, S)), null != d.placeholder && (d.resultsAdapter = c.Decorate(d.resultsAdapter, _)), d.selectOnClose && (d.resultsAdapter = c.Decorate(d.resultsAdapter, E))), null == d.dropdownAdapter) {
                            if (d.multiple) d.dropdownAdapter = k;
                            else {
                                var M = c.Decorate(k, w);
                                d.dropdownAdapter = M
                            }
                            if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, T)), d.closeOnSelect && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, A)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                                var O = t(d.amdBase + "compat/dropdownCss");
                                d.dropdownAdapter = c.Decorate(d.dropdownAdapter, O)
                            }
                            d.dropdownAdapter = c.Decorate(d.dropdownAdapter, C)
                        }
                        if (null == d.selectionAdapter) {
                            if (d.multiple ? d.selectionAdapter = r : d.selectionAdapter = i, null != d.placeholder && (d.selectionAdapter = c.Decorate(d.selectionAdapter, o)), d.allowClear && (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)), d.multiple && (d.selectionAdapter = c.Decorate(d.selectionAdapter, s)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                                var I = t(d.amdBase + "compat/containerCss");
                                d.selectionAdapter = c.Decorate(d.selectionAdapter, I)
                            }
                            d.selectionAdapter = c.Decorate(d.selectionAdapter, l)
                        }
                        if ("string" == typeof d.language)
                            if (d.language.indexOf("-") > 0) {
                                var N = d.language.split("-")[0];
                                d.language = [d.language, N]
                            } else d.language = [d.language];
                        if (e.isArray(d.language)) {
                            var P = new u;
                            d.language.push("en");
                            for (var j = d.language, L = 0; L < j.length; L++) {
                                var $ = j[L],
                                    R = {};
                                try { R = u.loadPath($) } catch (B) { try { $ = this.defaults.amdLanguageBase + $, R = u.loadPath($) } catch (q) { d.debug && window.console && console.warn && console.warn('Select2: The language file for "' + $ + '" could not be automatically loaded. A fallback will be used instead.'); continue } }
                                P.extend(R)
                            }
                            d.translations = P
                        } else {
                            var F = u.loadPath(this.defaults.amdLanguageBase + "en"),
                                H = new u(d.language);
                            H.extend(F), d.translations = H
                        }
                        return d
                    }, D.prototype.reset = function() {
                        function t(e) {
                            function t(e) { return d[e] || e }
                            return e.replace(/[^\u0000-\u007E]/g, t)
                        }

                        function n(i, r) {
                            if ("" === e.trim(i.term)) return r;
                            if (r.children && r.children.length > 0) { for (var o = e.extend(!0, {}, r), a = r.children.length - 1; a >= 0; a--) { null == n(i, r.children[a]) && o.children.splice(a, 1) } return o.children.length > 0 ? o : n(i, o) }
                            var s = t(r.text).toUpperCase(),
                                l = t(i.term).toUpperCase();
                            return s.indexOf(l) > -1 ? r : null
                        }
                        this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: c.escapeMarkup, language: x, matcher: n, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function(e) { return e }, templateResult: function(e) { return e.text }, templateSelection: function(e) { return e.text }, theme: "default", width: "resolve" }
                    }, D.prototype.set = function(t, n) {
                        var i = {};
                        i[e.camelCase(t)] = n;
                        var r = c._convertData(i);
                        e.extend(this.defaults, r)
                    }, new D
                }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(e, t, n, i) {
                    function r(t, r) {
                        if (this.options = t, null != r && this.fromElement(r), this.options = n.apply(this.options), r && r.is("input")) {
                            var o = e(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o)
                        }
                    }
                    return r.prototype.fromElement = function(e) {
                        var n = ["select2"];
                        null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                        var r = {};
                        r = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                        var o = t.extend(!0, {}, r);
                        for (var a in o = i._convertData(o)) t.inArray(a, n) > -1 || (t.isPlainObject(this.options[a]) ? t.extend(this.options[a], o[a]) : this.options[a] = o[a]);
                        return this
                    }, r.prototype.get = function(e) { return this.options[e] }, r.prototype.set = function(e, t) { this.options[e] = t }, r
                }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(e, t, n, i) {
                    var r = function(e, n) {
                        null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), n = n || {}, this.options = new t(n, e), r.__super__.constructor.call(this);
                        var i = e.attr("tabindex") || 0;
                        e.data("old-tabindex", i), e.attr("tabindex", "-1");
                        var o = this.options.get("dataAdapter");
                        this.dataAdapter = new o(e, this.options);
                        var a = this.render();
                        this._placeContainer(a);
                        var s = this.options.get("selectionAdapter");
                        this.selection = new s(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, a);
                        var l = this.options.get("dropdownAdapter");
                        this.dropdown = new l(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, a);
                        var c = this.options.get("resultsAdapter");
                        this.results = new c(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var u = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) { u.trigger("selection:update", { data: e }) }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
                    };
                    return n.Extend(r, n.Observable), r.prototype._generateId = function(e) { return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "") }, r.prototype._placeContainer = function(e) {
                        e.insertAfter(this.$element);
                        var t = this._resolveWidth(this.$element, this.options.get("width"));
                        null != t && e.css("width", t)
                    }, r.prototype._resolveWidth = function(e, t) { var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i; if ("resolve" == t) { var i = this._resolveWidth(e, "style"); return null != i ? i : this._resolveWidth(e, "element") } if ("element" == t) { var r = e.outerWidth(!1); return r <= 0 ? "auto" : r + "px" } if ("style" == t) { var o = e.attr("style"); if ("string" != typeof o) return null; for (var a = o.split(";"), s = 0, l = a.length; s < l; s += 1) { var c = a[s].replace(/\s/g, "").match(n); if (null !== c && c.length >= 1) return c[1] } return null } return t }, r.prototype._bindAdapters = function() { this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container) }, r.prototype._registerDomEvents = function() {
                        var t = this;
                        this.$element.on("change.select2", function() { t.dataAdapter.current(function(e) { t.trigger("selection:update", { data: e }) }) }), this.$element.on("focus.select2", function(e) { t.trigger("focus", e) }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != i ? (this._observer = new i(function(n) { e.each(n, t._syncA), e.each(n, t._syncS) }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                    }, r.prototype._registerDataEvents = function() {
                        var e = this;
                        this.dataAdapter.on("*", function(t, n) { e.trigger(t, n) })
                    }, r.prototype._registerSelectionEvents = function() {
                        var t = this,
                            n = ["toggle", "focus"];
                        this.selection.on("toggle", function() { t.toggleDropdown() }), this.selection.on("focus", function(e) { t.focus(e) }), this.selection.on("*", function(i, r) {-1 === e.inArray(i, n) && t.trigger(i, r) })
                    }, r.prototype._registerDropdownEvents = function() {
                        var e = this;
                        this.dropdown.on("*", function(t, n) { e.trigger(t, n) })
                    }, r.prototype._registerResultsEvents = function() {
                        var e = this;
                        this.results.on("*", function(t, n) { e.trigger(t, n) })
                    }, r.prototype._registerEvents = function() {
                        var e = this;
                        this.on("open", function() { e.$container.addClass("select2-container--open") }), this.on("close", function() { e.$container.removeClass("select2-container--open") }), this.on("enable", function() { e.$container.removeClass("select2-container--disabled") }), this.on("disable", function() { e.$container.addClass("select2-container--disabled") }), this.on("blur", function() { e.$container.removeClass("select2-container--focus") }), this.on("query", function(t) { e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function(n) { e.trigger("results:all", { data: n, query: t }) }) }), this.on("query:append", function(t) { this.dataAdapter.query(t, function(n) { e.trigger("results:append", { data: n, query: t }) }) }), this.on("keypress", function(t) {
                            var n = t.which;
                            e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                        })
                    }, r.prototype._syncAttributes = function() { this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {}) }, r.prototype._syncSubtree = function(e, t) {
                        var n = !1,
                            i = this;
                        if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                            if (t)
                                if (t.addedNodes && t.addedNodes.length > 0)
                                    for (var r = 0; r < t.addedNodes.length; r++) { t.addedNodes[r].selected && (n = !0) } else t.removedNodes && t.removedNodes.length > 0 && (n = !0);
                                else n = !0;
                            n && this.dataAdapter.current(function(e) { i.trigger("selection:update", { data: e }) })
                        }
                    }, r.prototype.trigger = function(e, t) {
                        var n = r.__super__.trigger,
                            i = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" };
                        if (t === undefined && (t = {}), e in i) {
                            var o = i[e],
                                a = { prevented: !1, name: e, args: t };
                            if (n.call(this, o, a), a.prevented) return void(t.prevented = !0)
                        }
                        n.call(this, e, t)
                    }, r.prototype.toggleDropdown = function() { this.options.get("disabled") || (this.isOpen() ? this.close() : this.open()) }, r.prototype.open = function() { this.isOpen() || this.trigger("query", {}) }, r.prototype.close = function() { this.isOpen() && this.trigger("close", {}) }, r.prototype.isOpen = function() {
                        return this.$container.hasClass("select2-container--open")
                    }, r.prototype.hasFocus = function() { return this.$container.hasClass("select2-container--focus") }, r.prototype.focus = function() { this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {})) }, r.prototype.enable = function(e) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                        var t = !e[0];
                        this.$element.prop("disabled", t)
                    }, r.prototype.data = function() { this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'); var e = []; return this.dataAdapter.current(function(t) { e = t }), e }, r.prototype.val = function(t) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                        var n = t[0];
                        e.isArray(n) && (n = e.map(n, function(e) { return e.toString() })), this.$element.val(n).trigger("change")
                    }, r.prototype.destroy = function() { this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null }, r.prototype.render = function() { var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'); return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t }, r
                }), t.define("jquery-mousewheel", ["jquery"], function(e) { return e }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(e, t, n, i) {
                    if (null == e.fn.select2) {
                        var r = ["open", "close", "destroy"];
                        e.fn.select2 = function(t) {
                            if ("object" == typeof(t = t || {})) return this.each(function() {
                                var i = e.extend(!0, {}, t);
                                new n(e(this), i)
                            }), this;
                            if ("string" == typeof t) {
                                var i, o = Array.prototype.slice.call(arguments, 1);
                                return this.each(function() {
                                    var n = e(this).data("select2");
                                    null == n && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = n[t].apply(n, o)
                                }), e.inArray(t, r) > -1 ? this : i
                            }
                            throw new Error("Invalid arguments for Select2: " + t)
                        }
                    }
                    return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
                }), { define: t.define, require: t.require }
            }(),
            n = t.require("jquery.select2");
        return e.fn.select2.amd = t, n
    }),
    function(e, t) {
        if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("jquery"));
        else if ("function" == typeof define && define.amd) define(["jquery"], t);
        else { var n = "object" == typeof exports ? t(require("jquery")) : t(e.jQuery); for (var i in n)("object" == typeof exports ? exports : e)[i] = n[i] }
    }(window, function(__WEBPACK_EXTERNAL_MODULE__3__) {
        function __webpack_require__(e) { if (installedModules[e]) return installedModules[e].exports; var t = installedModules[e] = { i: e, l: !1, exports: {} }; return modules[e].call(t.exports, t, t.exports, __webpack_require__), t.l = !0, t.exports }
        return modules = [function(e) { e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17}') }, function(e, t, n) {
            "use strict";

            function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function r(e, t, n) {
                if (!(this instanceof r)) return new r(e, t, n);
                this.el = void 0, this.events = {}, this.maskset = void 0, this.refreshValue = !1, !0 !== n && (s.isPlainObject(e) ? t = e : (t = t || {}, e && (t.alias = e)), this.opts = s.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, this.userOptions = t || {}, o(this.opts.alias, t, this.opts), this.isRTL = this.opts.numericInput)
            }

            function o(e, t, n) { var i = r.prototype.aliases[e]; return i ? (i.alias && o(i.alias, void 0, n), s.extend(!0, n, i), s.extend(!0, n, t), !0) : (null === n.mask && (n.mask = e), !1) }

            function a(e, t, n, i) {
                function r(t, r) { null !== (r = void 0 !== r ? r : e.getAttribute(i + "-" + t)) && ("string" == typeof r && (0 === t.indexOf("on") ? r = l[r] : "false" === r ? r = !1 : "true" === r && (r = !0)), n[t] = r) }
                if (!0 === t.importDataAttributes) {
                    var a, c, u, d, h = e.getAttribute(i);
                    if (h && "" !== h && (h = h.replace(/'/g, '"'), c = JSON.parse("{" + h + "}")), c)
                        for (d in u = void 0, c)
                            if ("alias" === d.toLowerCase()) { u = c[d]; break }
                    for (a in r("alias", u), n.alias && o(n.alias, n, t), t) {
                        if (c)
                            for (d in u = void 0, c)
                                if (d.toLowerCase() === a.toLowerCase()) { u = c[d]; break }
                        r(a, u)
                    }
                }
                return s.extend(!0, t, n), "rtl" !== e.dir && !t.rightAlign || (e.style.textAlign = "right"), "rtl" !== e.dir && !t.numericInput || (e.dir = "ltr", e.removeAttribute("dir"), t.isRTL = !0), Object.keys(n).length
            }
            var s = n(2),
                l = n(4),
                c = l.document,
                u = n(5).generateMaskSet,
                d = n(5).analyseMask,
                h = n(8);
            r.prototype = {
                dataAttribute: "data-inputmask",
                defaults: { _maxTestPos: 500, placeholder: "_", optionalmarker: ["[", "]"], quantifiermarker: ["{", "}"], groupmarker: ["(", ")"], alternatormarker: "|", escapeChar: "\\", mask: null, regex: null, oncomplete: s.noop, onincomplete: s.noop, oncleared: s.noop, repeat: 0, greedy: !1, autoUnmask: !1, removeMaskOnSubmit: !1, clearMaskOnLostFocus: !0, insertMode: !0, insertModeVisual: !0, clearIncomplete: !1, alias: null, onKeyDown: s.noop, onBeforeMask: null, onBeforePaste: function(e, t) { return s.isFunction(t.onBeforeMask) ? t.onBeforeMask.call(this, e, t) : e }, onBeforeWrite: null, onUnMask: null, showMaskOnFocus: !0, showMaskOnHover: !0, onKeyValidation: s.noop, skipOptionalPartCharacter: " ", numericInput: !1, rightAlign: !1, undoOnEscape: !0, radixPoint: "", _radixDance: !1, groupSeparator: "", keepStatic: null, positionCaretOnTab: !0, tabThrough: !1, supportsInputType: ["text", "tel", "url", "password", "search"], ignorables: [8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229], isComplete: null, preValidation: null, postValidation: null, staticDefinitionSymbol: void 0, jitMasking: !1, nullable: !0, inputEventOnly: !1, noValuePatching: !1, positionCaretOnClick: "lvp", casing: null, inputmode: "text", importDataAttributes: !0, shiftPositions: !0 },
                definitions: { 9: { validator: "[0-9\uff11-\uff19]", definitionSymbol: "*" }, a: { validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]", definitionSymbol: "*" }, "*": { validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]" } },
                aliases: {},
                masksCache: {},
                mask: function(e) {
                    var t = this;
                    return "string" == typeof e && (e = c.getElementById(e) || c.querySelectorAll(e)), e = e.nodeName ? [e] : e, s.each(e, function(e, n) {
                        var i = s.extend(!0, {}, t.opts);
                        if (a(n, i, s.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                            var o = u(i, t.noMasksCache);
                            void 0 !== o && (void 0 !== n.inputmask && (n.inputmask.opts.autoUnmask = !0, n.inputmask.remove()), n.inputmask = new r(void 0, void 0, !0), n.inputmask.opts = i, n.inputmask.noMasksCache = t.noMasksCache, n.inputmask.userOptions = s.extend(!0, {}, t.userOptions), n.inputmask.isRTL = i.isRTL || i.numericInput, n.inputmask.el = n, n.inputmask.maskset = o, s.data(n, "_inputmask_opts", i), h.call(n.inputmask, { action: "mask" }))
                        }
                    }), e && e[0] && e[0].inputmask || this
                },
                option: function(e, t) { return "string" == typeof e ? this.opts[e] : "object" === i(e) ? (s.extend(this.userOptions, e), this.el && !0 !== t && this.mask(this.el), this) : void 0 },
                unmaskedvalue: function(e) { return this.maskset = this.maskset || u(this.opts, this.noMasksCache), h.call(this, { action: "unmaskedvalue", value: e }) },
                remove: function() { return h.call(this, { action: "remove" }) },
                getemptymask: function() { return this.maskset = this.maskset || u(this.opts, this.noMasksCache), h.call(this, { action: "getemptymask" }) },
                hasMaskedValue: function() { return !this.opts.autoUnmask },
                isComplete: function() { return this.maskset = this.maskset || u(this.opts, this.noMasksCache), h.call(this, { action: "isComplete" }) },
                getmetadata: function() { return this.maskset = this.maskset || u(this.opts, this.noMasksCache), h.call(this, { action: "getmetadata" }) },
                isValid: function(e) { return this.maskset = this.maskset || u(this.opts, this.noMasksCache), h.call(this, { action: "isValid", value: e }) },
                format: function(e, t) { return this.maskset = this.maskset || u(this.opts, this.noMasksCache), h.call(this, { action: "format", value: e, metadata: t }) },
                setValue: function(e) { this.el && s(this.el).trigger("setvalue", [e]) },
                analyseMask: d
            }, r.extendDefaults = function(e) { s.extend(!0, r.prototype.defaults, e) }, r.extendDefinitions = function(e) { s.extend(!0, r.prototype.definitions, e) }, r.extendAliases = function(e) { s.extend(!0, r.prototype.aliases, e) }, r.format = function(e, t, n) { return r(t).format(e, n) }, r.unmask = function(e, t) { return r(t).unmaskedvalue(e) }, r.isValid = function(e, t) { return r(t).isValid(e) }, r.remove = function(e) { "string" == typeof e && (e = c.getElementById(e) || c.querySelectorAll(e)), e = e.nodeName ? [e] : e, s.each(e, function(e, t) { t.inputmask && t.inputmask.remove() }) }, r.setValue = function(e, t) { "string" == typeof e && (e = c.getElementById(e) || c.querySelectorAll(e)), e = e.nodeName ? [e] : e, s.each(e, function(e, n) { n.inputmask ? n.inputmask.setValue(t) : s(n).trigger("setvalue", [t]) }) };
            var p = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");
            r.escapeRegex = function(e) { return e.replace(p, "\\$1") }, r.dependencyLib = s, l.Inputmask = r, e.exports = r
        }, function(e, t, n) {
            "use strict";
            var i = n(3);
            if (void 0 === i) throw "jQuery not loaded!";
            e.exports = i
        }, function(e) { e.exports = __WEBPACK_EXTERNAL_MODULE__3__ }, function(module, exports, __webpack_require__) {
            "use strict";

            function _typeof(e) { return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
            var __WEBPACK_AMD_DEFINE_RESULT__;
            __WEBPACK_AMD_DEFINE_RESULT__ = function() { return "undefined" != typeof window ? window : new(eval("require('jsdom').JSDOM"))("").window }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
        }, function(e, t, n) {
            "use strict";

            function i(e, t) {
                function n(e, n, i) {
                    var r, a, s = !1;
                    if (null !== e && "" !== e || (e = (s = null !== i.regex) ? (e = i.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, ".*")), 1 === e.length && !1 === i.greedy && 0 !== i.repeat && (i.placeholder = ""), 0 < i.repeat || "*" === i.repeat || "+" === i.repeat) {
                        var l = "*" === i.repeat ? 0 : "+" === i.repeat ? 1 : i.repeat;
                        e = i.groupmarker[0] + e + i.groupmarker[1] + i.quantifiermarker[0] + l + "," + i.repeat + i.quantifiermarker[1]
                    }
                    return a = s ? "regex_" + i.regex : i.numericInput ? e.split("").reverse().join("") : e, !1 !== i.keepStatic && (a = "ks_" + a), void 0 === Inputmask.prototype.masksCache[a] || !0 === t ? (r = { mask: e, maskToken: Inputmask.prototype.analyseMask(e, s, i), validPositions: {}, _buffer: void 0, buffer: void 0, tests: {}, excludes: {}, metadata: n, maskLength: void 0, jitOffset: {} }, !0 !== t && (Inputmask.prototype.masksCache[a] = r, r = o.extend(!0, {}, Inputmask.prototype.masksCache[a]))) : r = o.extend(!0, {}, Inputmask.prototype.masksCache[a]), r
                }
                if (o.isFunction(e.mask) && (e.mask = e.mask(e)), o.isArray(e.mask)) {
                    if (1 < e.mask.length) { null === e.keepStatic && (e.keepStatic = !0); var i = e.groupmarker[0]; return o.each(e.isRTL ? e.mask.reverse() : e.mask, function(t, n) { 1 < i.length && (i += e.groupmarker[1] + e.alternatormarker + e.groupmarker[0]), void 0 === n.mask || o.isFunction(n.mask) ? i += n : i += n.mask }), n(i += e.groupmarker[1], e.mask, e) }
                    e.mask = e.mask.pop()
                }
                return null === e.keepStatic && (e.keepStatic = !1), e.mask && void 0 !== e.mask.mask && !o.isFunction(e.mask.mask) ? n(e.mask.mask, e.mask, e) : n(e.mask, e.mask, e)
            }

            function r(e, t, n) {
                function i(e, t, n, i) { this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = i || !1, this.quantifier = { min: 1, max: 1 } }

                function r(e, i, r) {
                    r = void 0 !== r ? r : e.matches.length;
                    var a = e.matches[r - 1];
                    if (t) 0 === i.indexOf("[") || k && /\\d|\\s|\\w]/i.test(i) || "." === i ? e.matches.splice(r++, 0, { fn: new RegExp(i, n.casing ? "i" : ""), "static": !1, optionality: !1, newBlockMarker: void 0 === a ? "master" : a.def !== i, casing: null, def: i, placeholder: void 0, nativeDef: i }) : (k && (i = i[i.length - 1]), o.each(i.split(""), function(t, i) { a = e.matches[r - 1], e.matches.splice(r++, 0, { fn: /[a-z]/i.test(n.staticDefinitionSymbol || i) ? new RegExp("[" + (n.staticDefinitionSymbol || i) + "]", n.casing ? "i" : "") : null, "static": !0, optionality: !1, newBlockMarker: void 0 === a ? "master" : a.def !== i && !0 !== a["static"], casing: null, def: n.staticDefinitionSymbol || i, placeholder: void 0 !== n.staticDefinitionSymbol ? i : void 0, nativeDef: (k ? "'" : "") + i }) })), k = !1;
                    else {
                        var s = (n.definitions ? n.definitions[i] : void 0) || Inputmask.prototype.definitions[i];
                        s && !k ? e.matches.splice(r++, 0, { fn: s.validator ? "string" == typeof s.validator ? new RegExp(s.validator, n.casing ? "i" : "") : new function() { this.test = s.validator } : new RegExp("."), "static": s["static"] || !1, optionality: !1, newBlockMarker: void 0 === a ? "master" : a.def !== (s.definitionSymbol || i), casing: s.casing, def: s.definitionSymbol || i, placeholder: s.placeholder, nativeDef: i, generated: s.generated }) : (e.matches.splice(r++, 0, { fn: /[a-z]/i.test(n.staticDefinitionSymbol || i) ? new RegExp("[" + (n.staticDefinitionSymbol || i) + "]", n.casing ? "i" : "") : null, "static": !0, optionality: !1, newBlockMarker: void 0 === a ? "master" : a.def !== i && !0 !== a["static"], casing: null, def: n.staticDefinitionSymbol || i, placeholder: void 0 !== n.staticDefinitionSymbol ? i : void 0, nativeDef: (k ? "'" : "") + i }), k = !1)
                    }
                }

                function a(e) {
                    e && e.matches && o.each(e.matches, function(i, o) {
                        var s = e.matches[i + 1];
                        (void 0 === s || void 0 === s.matches || !1 === s.isQuantifier) && o && o.isGroup && (o.isGroup = !1, t || (r(o, n.groupmarker[0], 0), !0 !== o.openGroup && r(o, n.groupmarker[1]))), a(o)
                    })
                }

                function s() {
                    if (0 < _.length) {
                        if (r(m = _[_.length - 1], p), m.isAlternator) {
                            g = _.pop();
                            for (var e = 0; e < g.matches.length; e++) g.matches[e].isGroup && (g.matches[e].isGroup = !1);
                            0 < _.length ? (m = _[_.length - 1]).matches.push(g) : w.matches.push(g)
                        }
                    } else r(w, p)
                }

                function l(e) {
                    function t(e) { return e === n.optionalmarker[0] ? e = n.optionalmarker[1] : e === n.optionalmarker[1] ? e = n.optionalmarker[0] : e === n.groupmarker[0] ? e = n.groupmarker[1] : e === n.groupmarker[1] && (e = n.groupmarker[0]), e }
                    for (var i in e.matches = e.matches.reverse(), e.matches)
                        if (Object.prototype.hasOwnProperty.call(e.matches, i)) {
                            var r = parseInt(i);
                            if (e.matches[i].isQuantifier && e.matches[r + 1] && e.matches[r + 1].isGroup) {
                                var o = e.matches[i];
                                e.matches.splice(i, 1), e.matches.splice(r + 1, 0, o)
                            }
                            void 0 !== e.matches[i].matches ? e.matches[i] = l(e.matches[i]) : e.matches[i] = t(e.matches[i])
                        }
                    return e
                }

                function c(e) { var t = new i(!0); return t.openGroup = !1, t.matches = e, t }

                function u() {
                    if ((f = _.pop()).openGroup = !1, void 0 !== f)
                        if (0 < _.length) {
                            if ((m = _[_.length - 1]).matches.push(f), m.isAlternator) {
                                g = _.pop();
                                for (var e = 0; e < g.matches.length; e++) g.matches[e].isGroup = !1, g.matches[e].alternatorGroup = !1;
                                0 < _.length ? (m = _[_.length - 1]).matches.push(g) : w.matches.push(g)
                            }
                        } else w.matches.push(f);
                    else s()
                }

                function d(e) { var t = e.pop(); return t.isQuantifier && (t = c([e.pop(), t])), t }
                var h, p, f, m, g, y, v = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                    b = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                    k = !1,
                    w = new i,
                    _ = [],
                    S = [],
                    C = !1;
                for (t && (n.optionalmarker[0] = void 0, n.optionalmarker[1] = void 0); h = t ? b.exec(e) : v.exec(e);) {
                    if (p = h[0], t) switch (p.charAt(0)) {
                        case "?":
                            p = "{0,1}";
                            break;
                        case "+":
                        case "*":
                            p = "{" + p + "}";
                            break;
                        case "|":
                            if (0 === _.length) {
                                var T = c(w.matches);
                                T.openGroup = !0, _.push(T), w.matches = [], C = !0
                            }
                    }
                    if (k) s();
                    else switch (p.charAt(0)) {
                        case "(?=":
                        case "(?!":
                        case "(?<=":
                        case "(?<!":
                            break;
                        case n.escapeChar:
                            k = !0, t && s();
                            break;
                        case n.optionalmarker[1]:
                        case n.groupmarker[1]:
                            u();
                            break;
                        case n.optionalmarker[0]:
                            _.push(new i(!1, !0));
                            break;
                        case n.groupmarker[0]:
                            _.push(new i(!0));
                            break;
                        case n.quantifiermarker[0]:
                            var E = new i(!1, !1, !0),
                                A = (p = p.replace(/[{}]/g, "")).split("|"),
                                x = A[0].split(","),
                                D = isNaN(x[0]) ? x[0] : parseInt(x[0]),
                                M = 1 === x.length ? D : isNaN(x[1]) ? x[1] : parseInt(x[1]);
                            "*" !== D && "+" !== D || (D = "*" === M ? 0 : 1), E.quantifier = { min: D, max: M, jit: A[1] };
                            var O = 0 < _.length ? _[_.length - 1].matches : w.matches;
                            if ((h = O.pop()).isAlternator) {
                                O.push(h), O = h.matches;
                                var I = new i(!0),
                                    N = O.pop();
                                O.push(I), O = I.matches, h = N
                            }
                            h.isGroup || (h = c([h])), O.push(h), O.push(E);
                            break;
                        case n.alternatormarker:
                            if (0 < _.length) {
                                var P = (m = _[_.length - 1]).matches[m.matches.length - 1];
                                y = m.openGroup && (void 0 === P.matches || !1 === P.isGroup && !1 === P.isAlternator) ? _.pop() : d(m.matches)
                            } else y = d(w.matches);
                            if (y.isAlternator) _.push(y);
                            else if (y.alternatorGroup ? (g = _.pop(), y.alternatorGroup = !1) : g = new i(!1, !1, !1, !0), g.matches.push(y), _.push(g), y.openGroup) {
                                y.openGroup = !1;
                                var j = new i(!0);
                                j.alternatorGroup = !0, _.push(j)
                            }
                            break;
                        default:
                            s()
                    }
                }
                for (C && u(); 0 < _.length;) f = _.pop(), w.matches.push(f);
                return 0 < w.matches.length && (a(w), S.push(w)), (n.numericInput || n.isRTL) && l(S[0]), S
            }
            var o = n(2);
            e.exports = { generateMaskSet: i, analyseMask: r }
        }, function(e, t, n) {
            "use strict";
            n(7), n(9), n(10), n(11), e.exports = n(1)
        }, function(e, t, n) {
            "use strict";

            function i(e, t, n) { return e = -1 < n - 1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, -1 < n - 2 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : "00" + e, o.test(e) }
            var r = n(1);
            r.extendDefinitions({ A: { validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]", casing: "upper" }, "&": { validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]", casing: "upper" }, "#": { validator: "[0-9A-Fa-f]", casing: "upper" } });
            var o = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
            r.extendAliases({ cssunit: { regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)" }, url: { regex: "(https?|ftp)//.*", autoUnmask: !1 }, ip: { mask: "i[i[i]].j[j[j]].k[k[k]].l[l[l]]", definitions: { i: { validator: i }, j: { validator: i }, k: { validator: i }, l: { validator: i } }, onUnMask: function(e) { return e }, inputmode: "numeric" }, email: { mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", greedy: !1, casing: "lower", onBeforePaste: function(e) { return (e = e.toLowerCase()).replace("mailto:", "") }, definitions: { "*": { validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]" }, "-": { validator: "[0-9A-Za-z-]" } }, onUnMask: function(e) { return e }, inputmode: "email" }, mac: { mask: "##:##:##:##:##:##" }, vin: { mask: "V{13}9{4}", definitions: { V: { validator: "[A-HJ-NPR-Za-hj-npr-z\\d]", casing: "upper" } }, clearIncomplete: !0, autoUnmask: !0 }, ssn: { mask: "999-99-9999", postValidation: function(e) { return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(e.join("")) } } }), e.exports = r
        }, function(e, t, n) {
            "use strict";

            function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
            var r = n(2),
                o = n(4),
                a = o.document,
                s = o.navigator && o.navigator.userAgent || "",
                l = 0 < s.indexOf("MSIE ") || 0 < s.indexOf("Trident/"),
                c = "ontouchstart" in o,
                u = /iemobile/i.test(s),
                d = /iphone/i.test(s) && !u,
                h = n(0);
            e.exports = function p(e, t, n) {
                function s(e, i, r, o, a) {
                    var s = n.greedy;
                    a && (n.greedy = !1), i = i || 0;
                    var l, c, u, d, h = [],
                        p = 0;
                    do {
                        if (!0 === e && t.validPositions[p]) c = (u = a && !0 === t.validPositions[p].match.optionality && void 0 === t.validPositions[p + 1] && (!0 === t.validPositions[p].generatedInput || t.validPositions[p].input == n.skipOptionalPartCharacter && 0 < p) ? v(p, _(p, l, p - 1)) : t.validPositions[p]).match, l = u.locator.slice(), h.push(!0 === r ? u.input : !1 === r ? c.nativeDef : L(p, c));
                        else {
                            c = (u = b(p, l, p - 1)).match, l = u.locator.slice();
                            var f = !0 !== o && (!1 !== n.jitMasking ? n.jitMasking : c.jit);
                            (d = d && c["static"] && c.def !== n.groupSeparator && null === c.fn || t.validPositions[p - 1] && c["static"] && c.def !== n.groupSeparator && null === c.fn) || !1 === f || void 0 === f || "number" == typeof f && isFinite(f) && p < f ? h.push(!1 === r ? c.nativeDef : L(p, c)) : d = !1
                        }
                        p++
                    } while ((void 0 === Y || p < Y) && (!0 !== c["static"] || "" !== c.def) || p < i);
                    return "" === h[h.length - 1] && h.pop(), !1 === r && void 0 !== t.maskLength || (t.maskLength = p - 1), n.greedy = s, h
                }

                function f(e) { t.buffer = void 0, !0 !== e && (t.validPositions = {}, t.p = 0) }

                function m(e, n, i) {
                    var r = -1,
                        o = -1,
                        a = i || t.validPositions;
                    for (var s in void 0 === e && (e = -1), a) {
                        var l = parseInt(s);
                        a[l] && (n || !0 !== a[l].generatedInput) && (l <= e && (r = l), e <= l && (o = l))
                    }
                    return -1 === r || r == e ? o : -1 == o ? r : e - r < o - e ? r : o
                }

                function g(e) { var t = e.locator[e.alternation]; return "string" == typeof t && 0 < t.length && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "" }

                function y(e, t) {
                    var n = (null != e.alternation ? e.mloc[g(e)] : e.locator).join("");
                    if ("" !== n)
                        for (; n.length < t;) n += "0";
                    return n
                }

                function v(e, t) {
                    for (var i, r, o, a = y(k(e = 0 < e ? e - 1 : 0)), s = 0; s < t.length; s++) {
                        var l = t[s];
                        i = y(l, a.length);
                        var c = Math.abs(i - a);
                        (void 0 === r || "" !== i && c < r || o && !n.greedy && o.match.optionality && "master" === o.match.newBlockMarker && (!l.match.optionality || !l.match.newBlockMarker) || o && o.match.optionalQuantifier && !l.match.optionalQuantifier) && (r = c, o = l)
                    }
                    return o
                }

                function b(e, n, i) { return t.validPositions[e] || v(e, _(e, n ? n.slice() : n, i)) }

                function k(e, n) { return t.validPositions[e] ? t.validPositions[e] : (n || _(e))[0] }

                function w(e, n, i) { for (var r = !1, o = _(e), a = 0; a < o.length; a++) { if (o[a].match && (!(o[a].match.nativeDef !== n.match[i.shiftPositions ? "def" : "nativeDef"] || i.shiftPositions && n.match["static"]) || o[a].match.nativeDef === n.match.nativeDef)) { r = !0; break } if (o[a].match && o[a].match.def === n.match.nativeDef) { r = void 0; break } } return !1 === r && void 0 !== t.jitOffset[e] && (r = w(e + t.jitOffset[e], n, i)), r }

                function _(e, i, o) {
                    function a(i, o, s, c) {
                        function d(s, c, m) {
                            function g(e, t) { var n = 0 === r.inArray(e, t.matches); return n || r.each(t.matches, function(i, r) { if (!0 === r.isQuantifier ? n = g(e, t.matches[i - 1]) : Object.prototype.hasOwnProperty.call(r, "matches") && (n = g(e, r)), n) return !1 }), n }

                            function y(e, n, i) {
                                var o, a;
                                if ((t.tests[e] || t.validPositions[e]) && r.each(t.tests[e] || [t.validPositions[e]], function(e, t) {
                                        if (t.mloc[n]) return o = t, !1;
                                        var r = void 0 !== i ? i : t.alternation,
                                            s = void 0 !== t.locator[r] ? t.locator[r].toString().indexOf(n) : -1;
                                        (void 0 === a || s < a) && -1 !== s && (o = t, a = s)
                                    }), o) { var s = o.locator[o.alternation]; return (o.mloc[n] || o.mloc[s] || o.locator).slice((void 0 !== i ? i : o.alternation) + 1) }
                                return void 0 !== i ? y(e, n) : void 0
                            }

                            function v(e, t) {
                                function i(e) {
                                    for (var t, n = [], i = -1, r = 0, o = e.length; r < o; r++)
                                        if ("-" === e.charAt(r))
                                            for (t = e.charCodeAt(r + 1); ++i < t;) n.push(String.fromCharCode(i));
                                        else i = e.charCodeAt(r), n.push(e.charAt(r));
                                    return n.join("")
                                }
                                return e.match.def === t.match.nativeDef || !(!(n.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match["static"] || !0 === t.match["static"]) && -1 !== i(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(i(e.match.fn.toString().replace(/[[\]/]/g, "")))
                            }

                            function b(i, r) { return !0 === i.match["static"] && !0 !== r.match["static"] && r.match.fn.test(i.match.def, t, e, !1, n, !1) }

                            function k(e, t) {
                                var n = e.alternation,
                                    i = void 0 === t || n === t.alternation && -1 === e.locator[n].toString().indexOf(t.locator[n]);
                                if (!i && n > t.alternation)
                                    for (var r = t.alternation; r < n; r++)
                                        if (e.locator[r] !== t.locator[r]) { n = r, i = !0; break }
                                if (i) {
                                    e.mloc = e.mloc || {};
                                    var o = e.locator[n];
                                    if (void 0 !== o) {
                                        if ("string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = e.locator.slice()), void 0 !== t) {
                                            for (var a in t.mloc) "string" == typeof a && (a = a.split(",")[0]), void 0 === e.mloc[a] && (e.mloc[a] = t.mloc[a]);
                                            e.locator[n] = Object.keys(e.mloc).join(",")
                                        }
                                        return !0
                                    }
                                    e.alternation = void 0
                                }
                                return !1
                            }

                            function w(e, t) {
                                if (e.locator.length !== t.locator.length) return !1;
                                for (var n = e.alternation + 1; n < e.locator.length; n++)
                                    if (e.locator[n] !== t.locator[n]) return !1;
                                return !0
                            }
                            if (u > n._maxTestPos && void 0 !== m) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + t.mask;
                            if (u === e && void 0 === s.matches) return h.push({ match: s, locator: c.reverse(), cd: f, mloc: {} }), !0;
                            if (void 0 !== s.matches) {
                                if (s.isGroup && m !== s) { if (s = d(i.matches[r.inArray(s, i.matches) + 1], c, m)) return !0 } else if (s.isOptional) {
                                    var _ = s,
                                        S = h.length;
                                    if (s = a(s, o, c, m)) {
                                        if (r.each(h, function(e, t) { S <= e && (t.match.optionality = !0) }), l = h[h.length - 1].match, void 0 !== m || !g(l, _)) return !0;
                                        p = !0, u = e
                                    }
                                } else if (s.isAlternator) {
                                    var C, T = s,
                                        E = [],
                                        A = h.slice(),
                                        x = c.length,
                                        D = 0 < o.length ? o.shift() : -1;
                                    if (-1 === D || "string" == typeof D) {
                                        var M, O = u,
                                            I = o.slice(),
                                            N = [];
                                        if ("string" == typeof D) N = D.split(",");
                                        else
                                            for (M = 0; M < T.matches.length; M++) N.push(M.toString());
                                        if (void 0 !== t.excludes[e]) {
                                            for (var P = N.slice(), j = 0, L = t.excludes[e].length; j < L; j++) {
                                                var $ = t.excludes[e][j].toString().split(":");
                                                c.length == $[1] && N.splice(N.indexOf($[0]), 1)
                                            }
                                            0 === N.length && (delete t.excludes[e], N = P)
                                        }(!0 === n.keepStatic || isFinite(parseInt(n.keepStatic)) && O >= n.keepStatic) && (N = N.slice(0, 1));
                                        for (var R = !1, F = 0; F < N.length; F++) {
                                            M = parseInt(N[F]), h = [], o = "string" == typeof D && y(u, M, x) || I.slice(), T.matches[M] && d(T.matches[M], [M].concat(c), m) ? s = !0 : 0 === F && (R = !0), C = h.slice(), u = O, h = [];
                                            for (var H = 0; H < C.length; H++) {
                                                var B = C[H],
                                                    q = !1;
                                                B.match.jit = B.match.jit || R, B.alternation = B.alternation || x, k(B);
                                                for (var U = 0; U < E.length; U++) { var V = E[U]; if ("string" != typeof D || void 0 !== B.alternation && -1 !== r.inArray(B.locator[B.alternation].toString(), N)) { if (B.match.nativeDef === V.match.nativeDef) { q = !0, k(V, B); break } if (v(B, V)) { k(B, V) && (q = !0, E.splice(E.indexOf(V), 0, B)); break } if (v(V, B)) { k(V, B); break } if (b(B, V)) { w(B, V) || void 0 !== ee.inputmask.userOptions.keepStatic ? k(B, V) && (q = !0, E.splice(E.indexOf(V), 0, B)) : n.keepStatic = !0; break } } }
                                                q || E.push(B)
                                            }
                                        }
                                        h = A.concat(E), u = e, p = 0 < h.length, s = 0 < E.length, o = I.slice()
                                    } else s = d(T.matches[D] || i.matches[D], [D].concat(c), m);
                                    if (s) return !0
                                } else if (s.isQuantifier && m !== i.matches[r.inArray(s, i.matches) - 1])
                                    for (var z = s, W = 0 < o.length ? o.shift() : 0; W < (isNaN(z.quantifier.max) ? W + 1 : z.quantifier.max) && u <= e; W++) { var J = i.matches[r.inArray(z, i.matches) - 1]; if (s = d(J, [W].concat(c), J)) { if ((l = h[h.length - 1].match).optionalQuantifier = W >= z.quantifier.min, l.jit = (W || 1) * J.matches.indexOf(l) >= z.quantifier.jit, l.optionalQuantifier && g(l, J)) { p = !0, u = e; break } return l.jit && (t.jitOffset[e] = J.matches.length - J.matches.indexOf(l)), !0 } } else if (s = a(s, o, c, m)) return !0
                            } else u++
                        }
                        for (var m = 0 < o.length ? o.shift() : 0; m < i.matches.length; m++)
                            if (!0 !== i.matches[m].isQuantifier) { var g = d(i.matches[m], [m].concat(s), c); if (g && u === e) return g; if (e < u) break }
                    }

                    function s(e, t) {
                        var i = [];
                        return r.isArray(t) || (t = [t]), 0 < t.length && (void 0 === t[0].alternation || !0 === n.keepStatic ? 0 === (i = v(e, t.slice()).locator.slice()).length && (i = t[0].locator.slice()) : r.each(t, function(e, t) {
                            if ("" !== t.def)
                                if (0 === i.length) i = t.locator.slice();
                                else
                                    for (var n = 0; n < i.length; n++) t.locator[n] && -1 === i[n].toString().indexOf(t.locator[n]) && (i[n] += "," + t.locator[n])
                        })), i
                    }
                    var l, c = t.maskToken,
                        u = i ? o : 0,
                        d = i ? i.slice() : [0],
                        h = [],
                        p = !1,
                        f = i ? i.join("") : "";
                    if (-1 < e && (void 0 === Y || e < Y)) {
                        if (void 0 === i) {
                            for (var m, g = e - 1; void 0 === (m = t.validPositions[g] || t.tests[g]) && -1 < g;) g--;
                            void 0 !== m && -1 < g && (d = s(g, m), f = d.join(""), u = g)
                        }
                        if (t.tests[e] && t.tests[e][0].cd === f) return t.tests[e];
                        for (var y = d.shift(); y < c.length; y++) { if (a(c[y], d, [y]) && u === e || e < u) break }
                    }
                    return 0 !== h.length && !p || h.push({ match: { fn: null, "static": !0, optionality: !1, casing: null, def: "", placeholder: "" }, locator: [], mloc: {}, cd: f }), void 0 !== i && t.tests[e] ? r.extend(!0, [], h) : (t.tests[e] = r.extend(!0, [], h), t.tests[e])
                }

                function S() { return void 0 === t._buffer && (t._buffer = s(!1, 1), void 0 === t.buffer && (t.buffer = t._buffer.slice())), t._buffer }

                function C(e) { return void 0 !== t.buffer && !0 !== e || (t.buffer = s(!0, m(), !0), void 0 === t._buffer && (t._buffer = t.buffer.slice())), t.buffer }

                function T(e, i, o) {
                    var a, s, l = n.skipOptionalPartCharacter,
                        c = te ? o.slice().reverse() : o;
                    if (n.skipOptionalPartCharacter = "", !0 === e) f(), t.tests = {}, e = 0, i = o.length, s = R({ begin: 0, end: 0 }, !1).begin;
                    else {
                        for (a = e; a < i; a++) delete t.validPositions[a];
                        s = e
                    }
                    var u = new r.Event("keypress");
                    for (a = e; a < i; a++) { u.which = c[a].toString().charCodeAt(0), oe = !1; var d = ce.keypressEvent.call(ee, u, !0, !1, !1, s);!1 !== d && (s = d.forwardPosition) }
                    n.skipOptionalPartCharacter = l
                }

                function E(e, i, o) {
                    switch (n.casing || i.casing) {
                        case "upper":
                            e = e.toUpperCase();
                            break;
                        case "lower":
                            e = e.toLowerCase();
                            break;
                        case "title":
                            var a = t.validPositions[o - 1];
                            e = 0 === o || a && a.input === String.fromCharCode(h.SPACE) ? e.toUpperCase() : e.toLowerCase();
                            break;
                        default:
                            if (r.isFunction(n.casing)) {
                                var s = Array.prototype.slice.call(arguments);
                                s.push(t.validPositions), e = n.casing.apply(this, s)
                            }
                    }
                    return e
                }

                function A(e, t, i) {
                    for (var o, a = n.greedy ? t : t.slice(0, 1), s = !1, l = void 0 !== i ? i.split(",") : [], c = 0; c < l.length; c++) - 1 !== (o = e.indexOf(l[c])) && e.splice(o, 1);
                    for (var u = 0; u < e.length; u++)
                        if (-1 !== r.inArray(e[u], a)) { s = !0; break }
                    return s
                }

                function x(e, i, o, a, s, l) {
                    var c, u, d, h, p, y, v, b, w, _ = r.extend(!0, {}, t.validPositions),
                        S = r.extend(!0, {}, t.tests),
                        C = !1,
                        T = !1,
                        E = void 0 !== s ? s : m();
                    if (l && (b = l.begin, w = l.end, l.begin > l.end && (b = l.end, w = l.begin)), -1 === E && void 0 === s) u = (h = k(c = 0)).alternation;
                    else
                        for (; 0 <= E; E--)
                            if ((d = t.validPositions[E]) && void 0 !== d.alternation) {
                                if (h && h.locator[d.alternation] !== d.locator[d.alternation]) break;
                                c = E, u = t.validPositions[c].alternation, h = d
                            } if (void 0 !== u) {
                        v = parseInt(c), t.excludes[v] = t.excludes[v] || [], !0 !== e && t.excludes[v].push(g(h) + ":" + h.alternation);
                        var A = [],
                            M = -1;
                        for (p = v; p < m(void 0, !0) + 1; p++) - 1 === M && e <= p && void 0 !== i && (A.push(i), M = A.length - 1), (y = t.validPositions[p]) && !0 !== y.generatedInput && (void 0 === l || p < b || w <= p) && A.push(y.input), delete t.validPositions[p];
                        for (-1 === M && void 0 !== i && (A.push(i), M = A.length - 1); void 0 !== t.excludes[v] && t.excludes[v].length < 10;) { for (t.tests = {}, f(!0), C = !0, p = 0; p < A.length && (C = D(C.caret || m(void 0, !0) + 1, A[p], !1, a, !0)); p++) p === M && (T = C), 1 == e && C && (T = { caretPos: p }); if (C) break; if (f(), h = k(v), t.validPositions = r.extend(!0, {}, _), t.tests = r.extend(!0, {}, S), !t.excludes[v]) { T = x(e, i, o, a, v - 1, l); break } var O = g(h); if (-1 !== t.excludes[v].indexOf(O + ":" + h.alternation)) { T = x(e, i, o, a, v - 1, l); break } for (t.excludes[v].push(O + ":" + h.alternation), p = v; p < m(void 0, !0) + 1; p++) delete t.validPositions[p] }
                    }
                    return T && !1 === n.keepStatic || delete t.excludes[v], T
                }

                function D(e, i, o, a, s, l) {
                    function c(e) { return te ? 1 < e.begin - e.end || e.begin - e.end == 1 : 1 < e.end - e.begin || e.end - e.begin == 1 }

                    function u(e) {
                        if (void 0 !== e) {
                            if (void 0 !== e.remove && (r.isArray(e.remove) || (e.remove = [e.remove]), r.each(e.remove.sort(function(e, t) { return t.pos - e.pos }), function(e, t) { O({ begin: t, end: t + 1 }) }), e.remove = void 0), void 0 !== e.insert && (r.isArray(e.insert) || (e.insert = [e.insert]), r.each(e.insert.sort(function(e, t) { return e.pos - t.pos }), function(e, t) { "" !== t.c && D(t.pos, t.c, void 0 === t.strict || t.strict, void 0 !== t.fromIsValid ? t.fromIsValid : a) }), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                var t = e.refreshFromBuffer;
                                T(!0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0
                            }
                            void 0 !== e.rewritePosition && (h = e.rewritePosition, e = !0)
                        }
                        return e
                    }

                    function d(i, o, s) {
                        var l = !1;
                        return r.each(_(i), function(d, h) {
                            var p = h.match;
                            if (C(!0), !1 !== (l = null != p.fn ? p.fn.test(o, t, i, s, n, c(e)) : (o === p.def || o === n.skipOptionalPartCharacter) && "" !== p.def && { c: L(i, p, !0) || p.def, pos: i })) {
                                var f = void 0 !== l.c ? l.c : o,
                                    m = i;
                                return f = f === n.skipOptionalPartCharacter && !0 === p["static"] ? L(i, p, !0) || p.def : f, !0 !== (l = u(l)) && void 0 !== l.pos && l.pos !== i && (m = l.pos), (!0 === l || void 0 !== l.pos || void 0 !== l.c) && (!1 === O(e, r.extend({}, h, { input: E(f, p, m) }), a, m) && (l = !1), !1)
                            }
                        }), l
                    }
                    o = !0 === o;
                    var h = e;
                    void 0 !== e.begin && (h = te ? e.end : e.begin);
                    var p = !0,
                        m = r.extend(!0, {}, t.validPositions);
                    if (!1 === n.keepStatic && void 0 !== t.excludes[h] && !0 !== s && !0 !== a)
                        for (var g = h; g < (te ? e.begin : e.end); g++) void 0 !== t.excludes[g] && (t.excludes[g] = void 0, delete t.tests[g]);
                    if (r.isFunction(n.preValidation) && !0 !== a && !0 !== l && (p = u(p = n.preValidation.call(ee, C(), h, i, c(e), n, t, e, o || s))), !0 === p) {
                        if (void 0 === Y || h < Y) {
                            if (p = d(h, i, o), (!o || !0 === a) && !1 === p && !0 !== l) {
                                var y = t.validPositions[h];
                                if (!y || !0 !== y.match["static"] || y.match.def !== i && i !== n.skipOptionalPartCharacter) {
                                    if (n.insertMode || void 0 === t.validPositions[N(h)] || e.end > h) {
                                        var v = !1;
                                        if (t.jitOffset[h] && void 0 === t.validPositions[N(h)] && (!1 !== (p = D(h + t.jitOffset[h], i, !0)) && (!0 !== s && (p.caret = h), v = !0)), e.end > h && (t.validPositions[h] = void 0), !v && !I(h, n.keepStatic))
                                            for (var b = h + 1, k = N(h); b <= k; b++)
                                                if (!1 !== (p = d(b, i, o))) { p = M(h, void 0 !== p.pos ? p.pos : b) || p, h = b; break }
                                    }
                                } else p = { caret: N(h) }
                            }
                        } else p = !1;
                        !1 !== p || !n.keepStatic || !z(C()) && 0 !== h || o || !0 === s ? c(e) && t.tests[h] && 1 < t.tests[h].length && n.keepStatic && !o && !0 !== s && (p = x(!0)) : p = x(h, i, o, a, void 0, e), !0 === p && (p = { pos: h })
                    }
                    if (r.isFunction(n.postValidation) && !0 !== a && !0 !== l) {
                        var w = n.postValidation.call(ee, C(!0), void 0 !== e.begin ? te ? e.end : e.begin : e, i, p, n, t, o);
                        void 0 !== w && (p = !0 === w ? p : w)
                    }
                    return p && void 0 === p.pos && (p.pos = h), !1 === p || !0 === l ? (f(!0), t.validPositions = r.extend(!0, {}, m)) : M(void 0, h, !0), u(p)
                }

                function M(e, n, i) {
                    if (void 0 === e)
                        for (e = n - 1; 0 < e && !t.validPositions[e]; e--);
                    for (var o = e; o < n; o++)
                        if (void 0 === t.validPositions[o] && !I(o, !0)) {
                            if (0 == o ? k(o) : t.validPositions[o - 1]) {
                                var a = _(o).slice();
                                "" === a[a.length - 1].match.def && a.pop();
                                var s, l = v(o, a);
                                if (l && (!0 !== l.match.jit || "master" === l.match.newBlockMarker && (s = t.validPositions[o + 1]) && !0 === s.match.optionalQuantifier) && ((l = r.extend({}, l, { input: L(o, l.match, !0) || l.match.def })).generatedInput = !0, O(o, l, !0), !0 !== i)) { var c = t.validPositions[n].input; return t.validPositions[n] = void 0, D(n, c, !0, !0) }
                            }
                        }
                }

                function O(e, i, o, a) {
                    function s(e, t, n) {
                        var i = t[e];
                        if (void 0 === i || !0 !== i.match["static"] || !0 === i.match.optionality || void 0 !== t[0] && void 0 !== t[0].alternation) return !1;
                        var r = n.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match["static"] && t[e - 1] : t[e - 1],
                            o = n.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match["static"] && t[e + 1] : t[e + 1];
                        return r && o
                    }
                    var l = 0,
                        c = void 0 !== e.begin ? e.begin : e,
                        u = void 0 !== e.end ? e.end : e;
                    if (e.begin > e.end && (c = e.end, u = e.begin), a = void 0 !== a ? a : c, c !== u || n.insertMode && void 0 !== t.validPositions[a] && void 0 === o || void 0 === i) {
                        var d, h = r.extend(!0, {}, t.validPositions),
                            p = m(void 0, !0);
                        for (t.p = c, d = p; c <= d; d--) delete t.validPositions[d], void 0 === i && delete t.tests[d + 1];
                        var g, y, v = !0,
                            b = a,
                            _ = b;
                        for (i && (t.validPositions[a] = r.extend(!0, {}, i), _++, b++), d = i ? u : u - 1; d <= p; d++) {
                            if (void 0 !== (g = h[d]) && !0 !== g.generatedInput && (u <= d || c <= d && s(d, h, { begin: c, end: u }))) {
                                for (;
                                    "" !== k(_).match.def;) {
                                    if (!1 !== (y = w(_, g, n)) || "+" === g.match.def) { "+" === g.match.def && C(!0); var S = D(_, g.input, "+" !== g.match.def, "+" !== g.match.def); if (v = !1 !== S, b = (S.pos || _) + 1, !v && y) break } else v = !1;
                                    if (v) { void 0 === i && g.match["static"] && d === e.begin && l++; break }
                                    if (!v && _ > t.maskLength) break;
                                    _++
                                }
                                "" == k(_).match.def && (v = !1), _ = b
                            }
                            if (!v) break
                        }
                        if (!v) return t.validPositions = r.extend(!0, {}, h), f(!0), !1
                    } else i && k(a).match.cd === i.match.cd && (t.validPositions[a] = r.extend(!0, {}, i));
                    return f(!0), l
                }

                function I(e, n, i) {
                    var r = b(e).match;
                    if ("" === r.def && (r = k(e).match), !0 !== r["static"]) return r.fn;
                    if (!0 === i && void 0 !== t.validPositions[e] && !0 !== t.validPositions[e].generatedInput) return !0;
                    if (!0 !== n && -1 < e) {
                        if (i) { var o = _(e); return o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0) }
                        var a = v(e, _(e)),
                            s = L(e, a.match);
                        return a.match.def !== s
                    }
                    return !1
                }

                function N(e, t, n) {
                    void 0 === n && (n = !0);
                    for (var i = e + 1;
                        "" !== k(i).match.def && (!0 === t && (!0 !== k(i).match.newBlockMarker || !I(i, void 0, !0)) || !0 !== t && !I(i, void 0, n));) i++;
                    return i
                }

                function P(e, t) { var n, i = e; if (i <= 0) return 0; for (; 0 < --i && (!0 === t && !0 !== k(i).match.newBlockMarker || !0 !== t && !I(i, void 0, !0) && ((n = _(i)).length < 2 || 2 === n.length && "" === n[1].match.def));); return i }

                function j(e, t, i, o, a) {
                    if (o && r.isFunction(n.onBeforeWrite)) {
                        var s = n.onBeforeWrite.call(Z, o, t, i, n);
                        if (s) {
                            if (s.refreshFromBuffer) {
                                var l = s.refreshFromBuffer;
                                T(!0 === l ? l : l.start, l.end, s.buffer || t), t = C(!0)
                            }
                            void 0 !== i && (i = void 0 !== s.caret ? s.caret : i)
                        }
                    }
                    if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== o && "blur" === o.type || q(e, i, void 0, void 0, void 0 !== o && "keydown" === o.type && (o.keyCode === h.DELETE || o.keyCode === h.BACKSPACE)), !0 === a)) {
                        var c = r(e),
                            u = e.inputmask._valueGet();
                        ie = !0, c.trigger("input"), setTimeout(function() { u === S().join("") ? c.trigger("cleared") : !0 === z(t) && c.trigger("complete") }, 0)
                    }
                }

                function L(e, i, o) {
                    if (void 0 !== (i = i || k(e).match).placeholder || !0 === o) return r.isFunction(i.placeholder) ? i.placeholder(n) : i.placeholder;
                    if (!0 !== i["static"]) return n.placeholder.charAt(e % n.placeholder.length);
                    if (-1 < e && void 0 === t.validPositions[e]) {
                        var a, s = _(e),
                            l = [];
                        if (s.length > 1 + ("" === s[s.length - 1].match.def ? 1 : 0))
                            for (var c = 0; c < s.length; c++)
                                if ("" !== s[c].match.def && !0 !== s[c].match.optionality && !0 !== s[c].match.optionalQuantifier && (!0 === s[c].match["static"] || void 0 === a || !1 !== s[c].match.fn.test(a.match.def, t, e, !0, n)) && (l.push(s[c]), !0 === s[c].match["static"] && (a = s[c]), 1 < l.length && /[0-9a-bA-Z]/.test(l[0].match.def))) return n.placeholder.charAt(e % n.placeholder.length)
                    }
                    return i.def
                }

                function $(e, t) {
                    if (l) {
                        if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                            var n = C().slice(),
                                i = e.inputmask._valueGet();
                            if (i !== t) { var r = m(); - 1 === r && i === S().join("") ? n = [] : -1 !== r && V(n), j(e, n) }
                        }
                    } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"))
                }

                function R(e, i) {
                    function o(e) {
                        if ("" !== n.radixPoint && 0 !== n.digits) {
                            var i = t.validPositions;
                            if (void 0 === i[e] || i[e].input === L(e)) {
                                if (e < N(-1)) return !0;
                                var o = r.inArray(n.radixPoint, C());
                                if (-1 !== o) {
                                    for (var a in i)
                                        if (i[a] && o < a && i[a].input !== L(a)) return !1;
                                    return !0
                                }
                            }
                        }
                        return !1
                    }
                    if (i && (te ? e.end = e.begin : e.begin = e.end), e.begin === e.end) {
                        switch (n.positionCaretOnClick) {
                            case "none":
                                break;
                            case "select":
                                e = { begin: 0, end: C().length };
                                break;
                            case "ignore":
                                e.end = e.begin = N(m());
                                break;
                            case "radixFocus":
                                if (o(e.begin)) {
                                    var a = C().join("").indexOf(n.radixPoint);
                                    e.end = e.begin = n.numericInput ? N(a) : a;
                                    break
                                }
                            default:
                                var s = e.begin,
                                    l = m(s, !0),
                                    c = N(-1 !== l || I(0) ? l : 0);
                                if (s < c) e.end = e.begin = I(s, !0) || I(s - 1, !0) ? s : N(s);
                                else {
                                    var u = t.validPositions[l],
                                        d = b(c, u ? u.match.locator : void 0, u),
                                        h = L(c, d.match);
                                    if ("" !== h && C()[c] !== h && !0 !== d.match.optionalQuantifier && !0 !== d.match.newBlockMarker || !I(c, n.keepStatic) && d.match.def === h) {
                                        var p = N(c);
                                        (p <= s || s === c) && (c = p)
                                    }
                                    e.end = e.begin = c
                                }
                        }
                        return e
                    }
                }

                function F(e, i, o, a, l) {
                    function c(e, t) {
                        for (var n = s(!0, 0).slice(e, N(e)).join("").replace(/'/g, ""), i = n.indexOf(t); 0 < i && " " === n[i - 1];) i--;
                        var r = 0 === i && !I(e) && (k(e).match.nativeDef === t.charAt(0) || !0 === k(e).match["static"] && k(e).match.nativeDef === "'" + t.charAt(0) || " " === k(e).match.nativeDef && (k(e + 1).match.nativeDef === t.charAt(0) || !0 === k(e + 1).match["static"] && k(e + 1).match.nativeDef === "'" + t.charAt(0)));
                        if (!r && 0 < i && !I(e, !1, !0)) {
                            var o = N(e);
                            u.caretPos.begin < o && (u.caretPos = { begin: o })
                        }
                        return r
                    }
                    var u = this || e.inputmask,
                        d = a.slice(),
                        h = "",
                        p = -1,
                        g = void 0;
                    f(), t.tests = {}, p = n.radixPoint ? R({ begin: 0, end: 0 }).begin : 0, t.p = p, u.caretPos = { begin: p };
                    var y = [],
                        v = u.caretPos;
                    if (r.each(d, function(n, i) {
                            if (void 0 !== i)
                                if (void 0 === t.validPositions[n] && d[n] === L(n) && I(n, !0) && !1 === D(n, d[n], !0, void 0, void 0, !0)) t.p++;
                                else {
                                    var a = new r.Event("_checkval");
                                    a.which = i.toString().charCodeAt(0), h += i;
                                    var s = m(void 0, !0);
                                    c(p, h) ? g = ce.keypressEvent.call(e, a, !0, !1, o, s + 1) : (g = ce.keypressEvent.call(e, a, !0, !1, o, u.caretPos.begin)) && (p = u.caretPos.begin + 1, h = ""), g ? (void 0 !== g.pos && t.validPositions[g.pos] && !0 === t.validPositions[g.pos].match["static"] && void 0 === t.validPositions[g.pos].alternation && (y.push(g.pos), te || (g.forwardPosition = g.pos + 1)), j(void 0, C(), g.forwardPosition, a, !1), u.caretPos = { begin: g.forwardPosition, end: g.forwardPosition }, v = u.caretPos) : u.caretPos = v
                                }
                        }), 0 < y.length) {
                        var b, w, _ = N(-1, void 0, !1);
                        if (!z(C()) && y.length <= _ || z(C()) && 0 < y.length && y.length !== _ && 0 === y[0])
                            for (var S = _; void 0 !== (b = y.shift());) {
                                var T = new r.Event("_checkval");
                                if ((w = t.validPositions[b]).generatedInput = !0, T.which = w.input.charCodeAt(0), (g = ce.keypressEvent.call(e, T, !0, !1, o, S)) && void 0 !== g.pos && g.pos !== b && t.validPositions[g.pos] && !0 === t.validPositions[g.pos].match["static"]) y.push(g.pos);
                                else if (!g) break;
                                S++
                            } else
                                for (; b = y.pop();)(w = t.validPositions[b]) && (w.generatedInput = !0)
                    }
                    if (i)
                        for (var E in j(e, C(), g ? g.forwardPosition : void 0, l || new r.Event("checkval"), l && "input" === l.type), t.validPositions) !0 !== t.validPositions[E].match.generated && delete t.validPositions[E].generatedInput
                }

                function H(e) {
                    if (e) {
                        if (void 0 === e.inputmask) return e.value;
                        e.inputmask && e.inputmask.refreshValue && J(e, e.inputmask._valueGet(!0))
                    }
                    var i = [],
                        o = t.validPositions;
                    for (var a in o) o[a] && o[a].match && (1 != o[a].match["static"] || !0 !== o[a].generatedInput) && i.push(o[a].input);
                    var s = 0 === i.length ? "" : (te ? i.reverse() : i).join("");
                    if (r.isFunction(n.onUnMask)) {
                        var l = (te ? C().slice().reverse() : C()).join("");
                        s = n.onUnMask.call(Z, l, s, n)
                    }
                    return s
                }

                function B(e) { return !te || "number" != typeof e || n.greedy && "" === n.placeholder || !ee || (e = ee.inputmask._valueGet().length - e), e }

                function q(e, t, i, s, l) {
                    var c;
                    if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, i = e.selectionEnd) : o.getSelection ? (c = o.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && c.commonAncestorContainer !== e || (t = c.startOffset, i = c.endOffset) : a.selection && a.selection.createRange && (i = (t = 0 - (c = a.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + c.text.length), { begin: s ? t : B(t), end: s ? i : B(i) };
                    if (r.isArray(t) && (i = te ? t[0] : t[1], t = te ? t[1] : t[0]), void 0 !== t.begin && (i = te ? t.begin : t.end, t = te ? t.end : t.begin), "number" == typeof t) {
                        t = s ? t : B(t), i = "number" == typeof(i = s ? i : B(i)) ? i : t;
                        var u = parseInt(((e.ownerDocument.defaultView || o).getComputedStyle ? (e.ownerDocument.defaultView || o).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                        if (e.scrollLeft = u > e.scrollWidth ? u : 0, e.inputmask.caretPos = { begin: t, end: i }, n.insertModeVisual && !1 === n.insertMode && t === i && (l || i++), e === (e.inputmask.shadowRoot || a).activeElement)
                            if ("setSelectionRange" in e) e.setSelectionRange(t, i);
                            else if (o.getSelection) {
                            if (c = a.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                var d = a.createTextNode("");
                                e.appendChild(d)
                            }
                            c.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), c.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), c.collapse(!0);
                            var h = o.getSelection();
                            h.removeAllRanges(), h.addRange(c)
                        } else e.createTextRange && ((c = e.createTextRange()).collapse(!0), c.moveEnd("character", i), c.moveStart("character", t), c.select())
                    }
                }

                function U(e) {
                    var n, i, o = s(!0, m(), !0, !0),
                        a = o.length,
                        l = m(),
                        c = {},
                        u = t.validPositions[l],
                        d = void 0 !== u ? u.locator.slice() : void 0;
                    for (n = l + 1; n < o.length; n++) d = (i = b(n, d, n - 1)).locator.slice(), c[n] = r.extend(!0, {}, i);
                    var h = u && void 0 !== u.alternation ? u.locator[u.alternation] : void 0;
                    for (n = a - 1; l < n && (((i = c[n]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || h && (h !== c[n].locator[u.alternation] && 1 != i.match["static"] || !0 === i.match["static"] && i.locator[u.alternation] && A(i.locator[u.alternation].toString().split(","), h.toString().split(",")) && "" !== _(n)[0].def)) && o[n] === L(n, i.match)); n--) a--;
                    return e ? { l: a, def: c[a] ? c[a].match : void 0 } : a
                }

                function V(e) { e.length = 0; for (var t, n = s(!0, 0, !0, void 0, !0); void 0 !== (t = n.shift());) e.push(t); return e }

                function z(e) {
                    if (r.isFunction(n.isComplete)) return n.isComplete(e, n);
                    if ("*" !== n.repeat) {
                        var i = !1,
                            o = U(!0),
                            a = P(o.l);
                        if (void 0 === o.def || o.def.newBlockMarker || o.def.optionality || o.def.optionalQuantifier) { i = !0; for (var s = 0; s <= a; s++) { var l = b(s).match; if (!0 !== l["static"] && void 0 === t.validPositions[s] && !0 !== l.optionality && !0 !== l.optionalQuantifier || !0 === l["static"] && e[s] !== L(s, l)) { i = !1; break } } }
                        return i
                    }
                }

                function W(e, i, r, o) {
                    if ((n.numericInput || te) && (i === h.BACKSPACE ? i = h.DELETE : i === h.DELETE && (i = h.BACKSPACE), te)) {
                        var a = r.end;
                        r.end = r.begin, r.begin = a
                    }
                    var s, l = m(void 0, !0);
                    if (r.end >= C().length && l >= r.end && (r.end = l + 1), i === h.BACKSPACE ? r.end - r.begin < 1 && (r.begin = P(r.begin)) : i === h.DELETE && r.begin === r.end && (r.end = I(r.end, !0, !0) ? r.end + 1 : N(r.end) + 1), !1 !== (s = O(r))) {
                        if (!0 !== o && !1 !== n.keepStatic || null !== n.regex && -1 !== k(r.begin).match.def.indexOf("|")) {
                            var c = x(!0);
                            if (c) {
                                var u = void 0 !== c.caret ? c.caret : c.pos ? N(c.pos.begin ? c.pos.begin : c.pos) : m(-1, !0);
                                (i !== h.DELETE || r.begin > u) && r.begin
                            }
                        }!0 !== o && (t.p = i === h.DELETE ? r.begin + s : r.begin)
                    }
                }

                function J(e, t) { e.inputmask.refreshValue = !1, r.isFunction(n.onBeforeMask) && (t = n.onBeforeMask.call(Z, t, n) || t), F(e, !0, !1, t = t.toString().split("")), K = C().join(""), (n.clearMaskOnLostFocus || n.clearIncomplete) && e.inputmask._valueGet() === S().join("") && -1 === m() && e.inputmask._valueSet("") }

                function G(e) {
                    function t(e, t) {
                        function n(e) {
                            function n(e) {
                                if (r.valHooks && (void 0 === r.valHooks[e] || !0 !== r.valHooks[e].inputmaskpatch)) {
                                    var n = r.valHooks[e] && r.valHooks[e].get ? r.valHooks[e].get : function(e) { return e.value },
                                        i = r.valHooks[e] && r.valHooks[e].set ? r.valHooks[e].set : function(e, t) { return e.value = t, e };
                                    r.valHooks[e] = { get: function(e) { if (e.inputmask) { if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue(); var i = n(e); return -1 !== m(void 0, void 0, e.inputmask.maskset.validPositions) || !0 !== t.nullable ? i : "" } return n(e) }, set: function(e, t) { var n = i(e, t); return e.inputmask && J(e, t), n }, inputmaskpatch: !0 }
                                }
                            }

                            function o() { return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== m() || !0 !== t.nullable ? (this.inputmask.shadowRoot || a.activeElement) === this && t.clearMaskOnLostFocus ? (te ? V(C().slice()).reverse() : V(C().slice())).join("") : c.call(this) : "" : c.call(this) }

                            function s(e) { u.call(this, e), this.inputmask && J(this, e) }

                            function l(e) {
                                le.on(e, "mouseenter", function() {
                                    var e = this.inputmask._valueGet(!0);
                                    e !== (te ? C().reverse() : C()).join("") && J(this, e)
                                })
                            }
                            var c, u;
                            if (!e.inputmask.__valueGet) {
                                if (!0 !== t.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === i("test".__proto__) ? function(e) { return e.__proto__ } : function(e) { return e.constructor.prototype });
                                        var d = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : void 0;
                                        d && d.get && d.set ? (c = d.get, u = d.set, Object.defineProperty(e, "value", { get: o, set: s, configurable: !0 })) : "input" !== e.tagName.toLowerCase() && (c = function() { return this.textContent }, u = function(e) { this.textContent = e }, Object.defineProperty(e, "value", { get: o, set: s, configurable: !0 }))
                                    } else a.__lookupGetter__ && e.__lookupGetter__("value") && (c = e.__lookupGetter__("value"), u = e.__lookupSetter__("value"), e.__defineGetter__("value", o), e.__defineSetter__("value", s));
                                    e.inputmask.__valueGet = c, e.inputmask.__valueSet = u
                                }
                                e.inputmask._valueGet = function(e) { return te && !0 !== e ? c.call(this.el).split("").reverse().join("") : c.call(this.el) }, e.inputmask._valueSet = function(e, t) { u.call(this.el, null == e ? "" : !0 !== t && te ? e.split("").reverse().join("") : e) }, void 0 === c && (c = function() { return this.value }, u = function(e) { this.value = e }, n(e.type), l(e))
                            }
                        }
                        "textarea" !== e.tagName.toLowerCase() && t.ignorables.push(h.ENTER);
                        var o = e.getAttribute("type"),
                            s = "input" === e.tagName.toLowerCase() && -1 !== r.inArray(o, t.supportsInputType) || e.isContentEditable || "textarea" === e.tagName.toLowerCase();
                        if (!s)
                            if ("input" === e.tagName.toLowerCase()) {
                                var l = a.createElement("input");
                                l.setAttribute("type", o), s = "text" === l.type, l = null
                            } else s = "partial";
                        return !1 !== s ? n(e) : e.inputmask = void 0, s
                    }
                    le.off(e);
                    var o = t(e, n);
                    if (!1 !== o) { Q = r(ee = e), se = ee.placeholder, -1 === (Y = void 0 !== ee ? ee.maxLength : void 0) && (Y = void 0), "inputMode" in ee && null === ee.getAttribute("inputmode") && (ee.inputMode = n.inputmode, ee.setAttribute("inputmode", n.inputmode)), !0 === o && (n.showMaskOnFocus = n.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(ee.autocomplete), d && (n.insertModeVisual = !1), le.on(ee, "submit", ce.submitEvent), le.on(ee, "reset", ce.resetEvent), le.on(ee, "blur", ce.blurEvent), le.on(ee, "focus", ce.focusEvent), le.on(ee, "invalid", ce.invalidEvent), le.on(ee, "click", ce.clickEvent), le.on(ee, "mouseleave", ce.mouseleaveEvent), le.on(ee, "mouseenter", ce.mouseenterEvent), le.on(ee, "paste", ce.pasteEvent), le.on(ee, "cut", ce.cutEvent), le.on(ee, "complete", n.oncomplete), le.on(ee, "incomplete", n.onincomplete), le.on(ee, "cleared", n.oncleared), c || !0 === n.inputEventOnly ? ee.removeAttribute("maxLength") : (le.on(ee, "keydown", ce.keydownEvent), le.on(ee, "keypress", ce.keypressEvent)), le.on(ee, "input", ce.inputFallBackEvent), le.on(ee, "compositionend", ce.compositionendEvent)), le.on(ee, "setvalue", ce.setValueEvent), K = S().join(""); var s = (ee.inputmask.shadowRoot || a).activeElement; if ("" !== ee.inputmask._valueGet(!0) || !1 === n.clearMaskOnLostFocus || s === ee) { J(ee, ee.inputmask._valueGet(!0), n); var l = C().slice();!1 === z(l) && n.clearIncomplete && f(), n.clearMaskOnLostFocus && s !== ee && (-1 === m() ? l = [] : V(l)), (!1 === n.clearMaskOnLostFocus || n.showMaskOnFocus && s === ee || "" !== ee.inputmask._valueGet(!0)) && j(ee, l), s === ee && q(ee, N(m())) } }
                }
                t = t || this.maskset, n = n || this.opts;
                var K, Q, Y, X, Z = this,
                    ee = this.el,
                    te = this.isRTL || (this.isRTL = n.numericInput),
                    ne = !1,
                    ie = !1,
                    re = !1,
                    oe = !1,
                    ae = !1,
                    se = void 0,
                    le = {
                        on: function(e, t, i) {
                            var o = function(t) {
                                t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                                var o, a = this;
                                if (void 0 === a.inputmask && "FORM" !== this.nodeName) {
                                    var s = r.data(a, "_inputmask_opts");
                                    s ? new Inputmask(s).mask(a) : le.off(a)
                                } else {
                                    if ("setvalue" === t.type || "FORM" === this.nodeName || !(a.disabled || a.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === n.tabThrough && t.keyCode === h.TAB))) {
                                        switch (t.type) {
                                            case "input":
                                                if (!0 === ie || t.inputType && "insertCompositionText" === t.inputType) return ie = !1, t.preventDefault();
                                                break;
                                            case "keydown":
                                                ne = !1, ie = !1;
                                                break;
                                            case "keypress":
                                                if (!0 === ne) return t.preventDefault();
                                                ne = !0;
                                                break;
                                            case "click":
                                            case "focus":
                                                return re ? (re = !1, e.blur(), $(e, (te ? S().slice().reverse() : S()).join("")), setTimeout(function() { e.focus() }, 3e3)) : (o = arguments, setTimeout(function() { e.inputmask && i.apply(a, o) }, 0)), !1
                                        }
                                        var l = i.apply(a, arguments);
                                        return !1 === l && (t.preventDefault(), t.stopPropagation()), l
                                    }
                                    t.preventDefault()
                                }
                            };
                            e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(o), -1 !== r.inArray(t, ["submit", "reset"]) ? null !== e.form && r(e.form).on(t, o) : r(e).on(t, o)
                        },
                        off: function(e, t) {
                            var n;
                            e.inputmask && e.inputmask.events && (t ? (n = [])[t] = e.inputmask.events[t] : n = e.inputmask.events, r.each(n, function(t, n) {
                                for (; 0 < n.length;) { var i = n.pop(); - 1 !== r.inArray(t, ["submit", "reset"]) ? null !== e.form && r(e.form).off(t, i) : r(e).off(t, i) }
                                delete e.inputmask.events[t]
                            }))
                        }
                    },
                    ce = {
                        keydownEvent: function(e) {
                            var i = this,
                                o = r(i),
                                a = e.keyCode,
                                s = q(i),
                                l = n.onKeyDown.call(this, e, C(), s, n);
                            if (void 0 !== l) return l;
                            if (a === h.BACKSPACE || a === h.DELETE || d && a === h.BACKSPACE_SAFARI || e.ctrlKey && a === h.X && !("oncut" in i)) e.preventDefault(), W(i, a, s), j(i, C(!0), t.p, e, i.inputmask._valueGet() !== C().join(""));
                            else if (a === h.END || a === h.PAGE_DOWN) {
                                e.preventDefault();
                                var c = N(m());
                                q(i, e.shiftKey ? s.begin : c, c, !0)
                            } else a === h.HOME && !e.shiftKey || a === h.PAGE_UP ? (e.preventDefault(), q(i, 0, e.shiftKey ? s.begin : 0, !0)) : (n.undoOnEscape && a === h.ESCAPE || 90 === a && e.ctrlKey) && !0 !== e.altKey ? (F(i, !0, !1, K.split("")), o.trigger("click")) : !0 === n.tabThrough && a === h.TAB ? (!0 === e.shiftKey ? (!0 === k(s.begin).match["static"] && (s.begin = N(s.begin)), s.end = P(s.begin, !0), s.begin = P(s.end, !0)) : (s.begin = N(s.begin, !0), s.end = N(s.begin, !0), s.end < t.maskLength && s.end--), s.begin < t.maskLength && (e.preventDefault(), q(i, s.begin, s.end))) : e.shiftKey || n.insertModeVisual && !1 === n.insertMode && (a === h.RIGHT ? setTimeout(function() {
                                var e = q(i);
                                q(i, e.begin)
                            }, 0) : a === h.LEFT && setTimeout(function() {
                                var e = B(i.inputmask.caretPos.begin);
                                B(i.inputmask.caretPos.end);
                                q(i, te ? e + (e === t.maskLength ? 0 : 1) : e - (0 === e ? 0 : 1))
                            }, 0));
                            oe = -1 !== r.inArray(a, n.ignorables)
                        },
                        keypressEvent: function(e, i, o, a, s) {
                            var l = this,
                                c = r(l),
                                u = e.which || e.charCode || e.keyCode;
                            if (!(!0 === i || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || oe)) return u === h.ENTER && K !== C().join("") && (K = C().join(""), setTimeout(function() { c.trigger("change") }, 0)), ie = !0, !0;
                            if (u) {
                                44 !== u && 46 !== u || 3 !== e.location || "" === n.radixPoint || (u = n.radixPoint.charCodeAt(0));
                                var d, p = i ? { begin: s, end: s } : q(l),
                                    m = String.fromCharCode(u);
                                t.writeOutBuffer = !0;
                                var g = D(p, m, a);
                                if (!1 !== g && (f(!0), d = void 0 !== g.caret ? g.caret : N(g.pos.begin ? g.pos.begin : g.pos), t.p = d), d = n.numericInput && void 0 === g.caret ? P(d) : d, !1 !== o && (setTimeout(function() { n.onKeyValidation.call(l, u, g) }, 0), t.writeOutBuffer && !1 !== g)) {
                                    var y = C();
                                    j(l, y, d, e, !0 !== i)
                                }
                                if (e.preventDefault(), i) return !1 !== g && (g.forwardPosition = d), g
                            }
                        },
                        pasteEvent: function(e) {
                            var t, i = this.inputmask._valueGet(!0),
                                a = q(this);
                            te && (t = a.end, a.end = a.begin, a.begin = t);
                            var s = i.substr(0, a.begin),
                                l = i.substr(a.end, i.length);
                            if (s == (te ? S().slice().reverse() : S()).slice(0, a.begin).join("") && (s = ""), l == (te ? S().slice().reverse() : S()).slice(a.end).join("") && (l = ""), o.clipboardData && o.clipboardData.getData) i = s + o.clipboardData.getData("Text") + l;
                            else {
                                if (!e.clipboardData || !e.clipboardData.getData) return !0;
                                i = s + e.clipboardData.getData("text/plain") + l
                            }
                            var c = i;
                            if (r.isFunction(n.onBeforePaste)) {
                                if (!1 === (c = n.onBeforePaste.call(Z, i, n))) return e.preventDefault();
                                c = c || i
                            }
                            return F(this, !1, !1, c.toString().split("")), j(this, C(), N(m()), e, K !== C().join("")), e.preventDefault()
                        },
                        inputFallBackEvent: function(e) {
                            function t(e, t, n) {
                                if (u) {
                                    var i = t.replace(C().join(""), "");
                                    if (1 === i.length) {
                                        var r = t.split("");
                                        r.splice(n.begin, 0, i), t = r.join("")
                                    }
                                }
                                return t
                            }

                            function i(e, t, i) {
                                for (var r, o, a, s = e.substr(0, i.begin).split(""), l = e.substr(i.begin).split(""), c = t.substr(0, i.begin).split(""), u = t.substr(i.begin).split(""), d = s.length >= c.length ? s.length : c.length, h = l.length >= u.length ? l.length : u.length, p = "", f = []; s.length < d;) s.push("~");
                                for (; c.length < d;) c.push("~");
                                for (; l.length < h;) l.unshift("~");
                                for (; u.length < h;) u.unshift("~");
                                var m = s.concat(l),
                                    g = c.concat(u);
                                for (o = 0, r = m.length; o < r; o++) switch (a = L(B(o)), p) {
                                    case "insertText":
                                        g[o - 1] === m[o] && i.begin == m.length - 1 && f.push(m[o]), o = r;
                                        break;
                                    case "insertReplacementText":
                                    case "deleteContentBackward":
                                        "~" === m[o] ? i.end++ : o = r;
                                        break;
                                    default:
                                        m[o] !== g[o] && ("~" !== m[o + 1] && m[o + 1] !== a && void 0 !== m[o + 1] || (g[o] !== a || "~" !== g[o + 1]) && "~" !== g[o] ? "~" === g[o + 1] && g[o] === m[o + 1] ? (p = "insertText", f.push(m[o]), i.begin--, i.end--) : m[o] !== a && "~" !== m[o] && ("~" === m[o + 1] || g[o] !== m[o] && g[o + 1] === m[o + 1]) ? (p = "insertReplacementText", f.push(m[o]), i.begin--) : "~" === m[o] ? (p = "deleteContentBackward", !I(B(o), !0) && g[o] !== n.radixPoint || i.end++) : o = r : (p = "insertText", f.push(m[o]), i.begin--, i.end--))
                                }
                                return { action: p, data: f, caret: i }
                            }
                            var o = this,
                                s = o.inputmask._valueGet(!0),
                                l = (te ? C().slice().reverse() : C()).join(""),
                                c = q(o, void 0, void 0, !0);
                            if (l !== s) {
                                var d = i(s = t(o, s, c), l, c);
                                switch ((o.inputmask.shadowRoot || a).activeElement !== o && o.focus(), j(o, C()), q(o, c.begin, c.end, !0), d.action) {
                                    case "insertText":
                                    case "insertReplacementText":
                                        r.each(d.data, function(e, t) {
                                            var n = new r.Event("keypress");
                                            n.which = t.charCodeAt(0), oe = !1, ce.keypressEvent.call(o, n)
                                        }), setTimeout(function() { Q.trigger("keyup") }, 0);
                                        break;
                                    case "deleteContentBackward":
                                        var p = new r.Event("keydown");
                                        p.keyCode = h.BACKSPACE, ce.keydownEvent.call(o, p);
                                        break;
                                    default:
                                        J(o, s)
                                }
                                e.preventDefault()
                            }
                        },
                        compositionendEvent: function() { Q.trigger("input") },
                        setValueEvent: function(e, t, n) {
                            var i = e && e.detail ? e.detail[0] : t;
                            void 0 === i && (i = this.inputmask._valueGet(!0)), J(this, i), (e.detail && void 0 !== e.detail[1] || void 0 !== n) && q(this, e.detail ? e.detail[1] : n)
                        },
                        focusEvent: function(e) {
                            var t = this.inputmask._valueGet();
                            n.showMaskOnFocus && t !== C().join("") && j(this, C(), N(m())), !0 !== n.positionCaretOnTab || !1 !== ae || z(C()) && -1 !== m() || ce.clickEvent.apply(this, [e, !0]), K = C().join("")
                        },
                        invalidEvent: function() { re = !0 },
                        mouseleaveEvent: function() { ae = !1, n.clearMaskOnLostFocus && (this.inputmask.shadowRoot || a).activeElement !== this && $(this, se) },
                        clickEvent: function(e, t) {
                            if ((this.inputmask.shadowRoot || a).activeElement === this) {
                                var n = R(q(this), t);
                                void 0 !== n && q(this, n)
                            }
                        },
                        cutEvent: function(e) {
                            var n = q(this),
                                i = o.clipboardData || e.clipboardData,
                                r = te ? C().slice(n.end, n.begin) : C().slice(n.begin, n.end);
                            i.setData("text", te ? r.reverse().join("") : r.join("")), a.execCommand && a.execCommand("copy"), W(this, h.DELETE, n), j(this, C(), t.p, e, K !== C().join(""))
                        },
                        blurEvent: function(e) {
                            var t = r(this);
                            if (this.inputmask) {
                                $(this, se);
                                var i = this.inputmask._valueGet(),
                                    o = C().slice();
                                "" !== i && (n.clearMaskOnLostFocus && (-1 === m() && i === S().join("") ? o = [] : V(o)), !1 === z(o) && (setTimeout(function() { t.trigger("incomplete") }, 0), n.clearIncomplete && (f(), o = n.clearMaskOnLostFocus ? [] : S().slice())), j(this, o, void 0, e)), K !== C().join("") && (K = C().join(""), t.trigger("change"))
                            }
                        },
                        mouseenterEvent: function() { ae = !0, (this.inputmask.shadowRoot || a).activeElement !== this && (null == se && this.placeholder !== se && (se = this.placeholder), n.showMaskOnHover && $(this, (te ? S().slice().reverse() : S()).join(""))) },
                        submitEvent: function() { K !== C().join("") && Q.trigger("change"), n.clearMaskOnLostFocus && -1 === m() && ee.inputmask._valueGet && ee.inputmask._valueGet() === S().join("") && ee.inputmask._valueSet(""), n.clearIncomplete && !1 === z(C()) && ee.inputmask._valueSet(""), n.removeMaskOnSubmit && (ee.inputmask._valueSet(ee.inputmask.unmaskedvalue(), !0), setTimeout(function() { j(ee, C()) }, 0)) },
                        resetEvent: function() { ee.inputmask.refreshValue = !0, setTimeout(function() { J(ee, ee.inputmask._valueGet(!0)) }, 0) }
                    };
                if (void 0 !== e) switch (e.action) {
                    case "isComplete":
                        return ee = e.el, z(C());
                    case "unmaskedvalue":
                        return void 0 !== ee && void 0 === e.value || (X = e.value, X = (r.isFunction(n.onBeforeMask) && n.onBeforeMask.call(Z, X, n) || X).split(""), F.call(this, void 0, !1, !1, X), r.isFunction(n.onBeforeWrite) && n.onBeforeWrite.call(Z, void 0, C(), 0, n)), H(ee);
                    case "mask":
                        G(ee);
                        break;
                    case "format":
                        return X = (r.isFunction(n.onBeforeMask) && n.onBeforeMask.call(Z, e.value, n) || e.value).split(""), F.call(this, void 0, !0, !1, X), e.metadata ? { value: te ? C().slice().reverse().join("") : C().join(""), metadata: p.call(this, { action: "getmetadata" }, t, n) } : te ? C().slice().reverse().join("") : C().join("");
                    case "isValid":
                        e.value ? (X = (r.isFunction(n.onBeforeMask) && n.onBeforeMask.call(Z, e.value, n) || e.value).split(""), F.call(this, void 0, !0, !1, X)) : e.value = te ? C().slice().reverse().join("") : C().join("");
                        for (var ue = C(), de = U(), he = ue.length - 1; de < he && !I(he); he--);
                        return ue.splice(de, he + 1 - de), z(ue) && e.value === (te ? C().slice().reverse().join("") : C().join(""));
                    case "getemptymask":
                        return S().join("");
                    case "remove":
                        if (ee && ee.inputmask) {
                            r.data(ee, "_inputmask_opts", null), Q = r(ee);
                            var pe = n.autoUnmask ? H(ee) : ee.inputmask._valueGet(n.autoUnmask);
                            pe !== S().join("") ? ee.inputmask._valueSet(pe, n.autoUnmask) : ee.inputmask._valueSet(""), le.off(ee), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(ee), "value") && ee.inputmask.__valueGet && Object.defineProperty(ee, "value", { get: ee.inputmask.__valueGet, set: ee.inputmask.__valueSet, configurable: !0 }) : a.__lookupGetter__ && ee.__lookupGetter__("value") && ee.inputmask.__valueGet && (ee.__defineGetter__("value", ee.inputmask.__valueGet), ee.__defineSetter__("value", ee.inputmask.__valueSet)), ee.inputmask = void 0
                        }
                        return ee;
                    case "getmetadata":
                        if (r.isArray(t.metadata)) { var fe = s(!0, 0, !1).join(""); return r.each(t.metadata, function(e, t) { if (t.mask === fe) return fe = t, !1 }), fe }
                        return t.metadata
                }
            }
        }, function(e, t, n) {
            "use strict";

            function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function r(e) { var t = new RegExp("\\d+$").exec(e[0]); if (t && void 0 !== t[0]) { var n = g[e[0][0] + "x"].slice(""); return n[0] = n[0](t[0]), n[3] = n[3](t[0]), n } if (g[e[0]]) return g[e[0]] }

            function o(e) {
                if (!e.tokenizer) {
                    var t = [],
                        n = [];
                    for (var i in g)
                        if (/\.*x$/.test(i)) { var r = i[0] + "\\d+"; - 1 === n.indexOf(r) && n.push(r) } else -1 === t.indexOf(i[0]) && t.push(i[0]);
                    e.tokenizer = "(" + (0 < n.length ? n.join("|") + "|" : "") + t.join("+|") + ")+?|.", e.tokenizer = new RegExp(e.tokenizer, "g")
                }
                return e.tokenizer
            }

            function a(e, t) { return (!isFinite(e.rawday) || "29" == e.day && !isFinite(e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) && t }

            function s(e, t) {
                var n = !0;
                if (t.min) {
                    if (e.rawyear) {
                        var i = e.rawyear.replace(/[^0-9]/g, "");
                        n = t.min.year.substr(0, i.length) <= i
                    }
                    e.year === e.rawyear && t.min.date.getTime() == t.min.date.getTime() && (n = t.min.date.getTime() <= e.date.getTime())
                }
                return n && t.max && t.max.date.getTime() == t.max.date.getTime() && (n = t.max.date.getTime() >= e.date.getTime()), n
            }

            function l(e, t, n, i) {
                var a, s, l = "";
                for (o(n).lastIndex = 0; a = o(n).exec(e);)
                    if (void 0 === t)
                        if (s = r(a)) l += "(" + s[0] + ")";
                        else switch (a[0]) {
                            case "[":
                                l += "(";
                                break;
                            case "]":
                                l += ")?";
                                break;
                            default:
                                l += p.escapeRegex(a[0])
                        } else if (s = r(a))
                            if (!0 !== i && s[3]) { l += s[3].call(t.date) } else s[2] ? l += t["raw" + s[2]] : l += a[0];
                else l += a[0];
                return l
            }

            function c(e, t) { for (e = String(e), t = t || 2; e.length < t;) e = "0" + e; return e }

            function u(e, t, n) {
                function r(e) { return e.replace(/[^0-9]/g, "0") }

                function a(e, t) { e[s] = r(t), e["raw" + s] = t, void 0 !== c && c.call(e.date, "month" == s ? parseInt(e[s]) - 1 : e[s]) }
                var s, l, c, u = { date: new Date(1, 0, 1) },
                    d = e;
                if ("string" == typeof d) {
                    for (o(n).lastIndex = 0; l = o(n).exec(t);) {
                        var h = d.slice(0, l[0].length);
                        g.hasOwnProperty(l[0]) && (s = g[l[0]][2], c = g[l[0]][1], a(u, h, n)), d = d.slice(h.length)
                    }
                    return u
                }
                if (d && "object" === i(d) && d.hasOwnProperty("date")) return d
            }

            function d(e, t) { var n, i = ""; for (o(t).lastIndex = 0; n = o(t).exec(t.inputFormat);) "d" === n[0].charAt(0) ? i += c(e.getDate(), n[0].length) : "m" === n[0].charAt(0) ? i += c(e.getMonth() + 1, n[0].length) : "yyyy" === n[0] ? i += e.getFullYear().toString() : "y" === n[0].charAt(0) && (i += c(e.getYear(), n[0].length)); return i }

            function h(e, t) {
                var n, i, r = 0,
                    a = 0;
                for (o(t).lastIndex = 0; i = o(t).exec(t.inputFormat);) { var s = new RegExp("\\d+$").exec(i[0]); if (e <= (r += a = s ? parseInt(s[0]) : i[0].length)) { n = i, i = o(t).exec(t.inputFormat); break } }
                return { targetMatchIndex: r - a, nextMatch: i, targetMatch: n }
            }
            var p = n(1),
                f = p.dependencyLib,
                m = n(0),
                g = { d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate], dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() { return c(Date.prototype.getDate.call(this), 2) }], ddd: [""], dddd: [""], m: ["[1-9]|1[012]", Date.prototype.setMonth, "month", function() { return Date.prototype.getMonth.call(this) + 1 }], mm: ["0[1-9]|1[012]", Date.prototype.setMonth, "month", function() { return c(Date.prototype.getMonth.call(this) + 1, 2) }], mmm: [""], mmmm: [""], yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function() { return c(Date.prototype.getFullYear.call(this), 2) }], yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function() { return c(Date.prototype.getFullYear.call(this), 4) }], h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours], hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() { return c(Date.prototype.getHours.call(this), 2) }], hx: [function(e) { return "[0-9]{".concat(e, "}") }, Date.prototype.setHours, "hours", function() { return Date.prototype.getHours }], H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours], HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() { return c(Date.prototype.getHours.call(this), 2) }], Hx: [function(e) { return "[0-9]{".concat(e, "}") }, Date.prototype.setHours, "hours", function(e) { return function() { return c(Date.prototype.getHours.call(this), e) } }], M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes], MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() { return c(Date.prototype.getMinutes.call(this), 2) }], s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds], ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() { return c(Date.prototype.getSeconds.call(this), 2) }], l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() { return c(Date.prototype.getMilliseconds.call(this), 3) }], L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() { return c(Date.prototype.getMilliseconds.call(this), 2) }], t: ["[ap]"], tt: ["[ap]m"], T: ["[AP]"], TT: ["[AP]M"], Z: [""], o: [""], S: [""] },
                y = { isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:ss", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'" };
            p.extendAliases({
                datetime: {
                    mask: function(e) { return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = y[e.inputFormat] || e.inputFormat, e.displayFormat = y[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = y[e.outputFormat] || e.outputFormat || e.inputFormat, e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), e.regex = l(e.inputFormat, void 0, e), e.min = u(e.min, e.inputFormat, e), e.max = u(e.max, e.inputFormat, e), null },
                    placeholder: "",
                    inputFormat: "isoDateTime",
                    displayFormat: void 0,
                    outputFormat: void 0,
                    min: null,
                    max: null,
                    skipOptionalPartCharacter: "",
                    i18n: { dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], ordinalSuffix: ["st", "nd", "rd", "th"] },
                    preValidation: function(e, t, n, i, r, o, a, s) { if (s) return !0; if (isNaN(n) && e[t] !== n) { var l = h(t, r); if (l.nextMatch && l.nextMatch[0] === n && 1 < l.targetMatch[0].length) { var c = g[l.targetMatch[0]][0]; if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", { fuzzy: !0, buffer: e, refreshFromBuffer: { start: t - 1, end: t + 1 }, pos: t + 1 } } } return !0 },
                    postValidation: function(e, t, n, i, r, o, c) {
                        if (c) return !0;
                        var d, p;
                        if (!1 === i) return (d = h(t + 1, r)).targetMatch && d.targetMatchIndex === t && 1 < d.targetMatch[0].length && void 0 !== g[d.targetMatch[0]] && (p = g[d.targetMatch[0]][0], new RegExp(p).test("0" + n)) ? { insert: [{ pos: t, c: "0" }, { pos: t + 1, c: n }], pos: t + 1 } : i;
                        if (i.fuzzy && (e = i.buffer, t = i.pos), (d = h(t, r)).targetMatch && d.targetMatch[0] && void 0 !== g[d.targetMatch[0]]) { p = g[d.targetMatch[0]][0]; var f = e.slice(d.targetMatchIndex, d.targetMatchIndex + d.targetMatch[0].length);!1 === new RegExp(p).test(f.join("")) && 2 === d.targetMatch[0].length && o.validPositions[d.targetMatchIndex] && o.validPositions[d.targetMatchIndex + 1] && (o.validPositions[d.targetMatchIndex + 1].input = "0") }
                        var m = i,
                            y = u(e.join(""), r.inputFormat, r);
                        return m && y.date.getTime() == y.date.getTime() && (m = (m = a(y, m)) && s(y, r)), t && m && i.pos !== t ? { buffer: l(r.inputFormat, y, r).split(""), refreshFromBuffer: { start: t, end: i.pos } } : m
                    },
                    onKeyDown: function(e, t, n, i) { e.ctrlKey && e.keyCode === m.RIGHT && (this.inputmask._valueSet(d(new Date, i)), f(this).trigger("setvalue")) },
                    onUnMask: function(e, t, n) { return t ? l(n.outputFormat, u(e, n.inputFormat, n), n, !0) : t },
                    casing: function(e, t) { return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e },
                    onBeforeMask: function(e, t) { return "[object Date]" === Object.prototype.toString.call(e) && (e = d(e, t)), e },
                    insertMode: !1,
                    shiftPositions: !1,
                    keepStatic: !1,
                    inputmode: "numeric"
                }
            }), e.exports = p
        }, function(e, t, n) {
            "use strict";

            function i(e, t) {
                for (var n = "", i = 0; i < e.length; i++) h.prototype.definitions[e.charAt(i)] || t.definitions[e.charAt(i)] || t.optionalmarker[0] === e.charAt(i) || t.optionalmarker[1] === e.charAt(i) || t.quantifiermarker[0] === e.charAt(i) || t.quantifiermarker[1] === e.charAt(i) || t.groupmarker[0] === e.charAt(i) || t.groupmarker[1] === e.charAt(i) || t.alternatormarker === e.charAt(i) ? n += "\\" + e.charAt(i) : n += e.charAt(i);
                return n
            }

            function r(e, t, n, i) { if (0 < e.length && 0 < t && (!n.digitsOptional || i)) { var r = p.inArray(n.radixPoint, e); - 1 === r && (e.push(n.radixPoint), r = e.length - 1); for (var o = 1; o <= t; o++) isFinite(e[r + o]) || (e[r + o] = "0") } return e }

            function o(e, t) {
                var n = 0;
                if ("+" === e) {
                    for (n in t.validPositions);
                    n = parseInt(n)
                }
                for (var i in t.tests)
                    if (n <= (i = parseInt(i)))
                        for (var r = 0, o = t.tests[i].length; r < o; r++)
                            if ((void 0 === t.validPositions[i] || "-" === e) && t.tests[i][r].match.def === e) return i + (void 0 !== t.validPositions[i] && "-" !== e ? 1 : 0);
                return n
            }

            function a(e, t) { var n = -1; return p.each(t.validPositions, function(t, i) { if (i && i.match.def === e) return n = parseInt(t), !1 }), n }

            function s(e) { void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp(h.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp(h.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done") }

            function l(e) {
                e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), 1 < e.placeholder.length && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                var t = "0",
                    n = e.radixPoint;
                !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, n = "," === e.radixPoint ? "?" : "!", "" !== e.radixPoint && void 0 === e.definitions[n] && (e.definitions[n] = {}, e.definitions[n].validator = "[" + e.radixPoint + "]", e.definitions[n].placeholder = e.radixPoint, e.definitions[n]["static"] = !0, e.definitions[n].generated = !0)) : (e.__financeInput = !1, e.numericInput = !0);
                var r, o = "[+]";
                if (o += i(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, e.definitions[e.groupSeparator]["static"] = !0, e.definitions[e.groupSeparator].generated = !0), o += e._mask(e)) : o += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                    var a = e.digits.toString().split(",");
                    isFinite(a[0]) && a[1] && isFinite(a[1]) ? o += n + t + "{" + e.digits + "}" : (isNaN(e.digits) || 0 < parseInt(e.digits)) && (e.digitsOptional ? (r = o + n + t + "{0," + e.digits + "}", e.keepStatic = !0) : o += n + t + "{" + e.digits + "}")
                }
                return o += i(e.suffix, e), o += "[-]", r && (o = [r + i(e.suffix, e) + "[-]", o]), e.greedy = !1, s(e), o
            }

            function c(e, t, n, i, r) { return r._radixDance && r.numericInput && t !== r.negationSymbol.back && e <= n && (0 < n || t == r.radixPoint) && (void 0 === i.validPositions[e - 1] || i.validPositions[e - 1].input !== r.negationSymbol.back) && (e -= 1), e }

            function u(e, t, n, i, r) {
                var o = t.buffer ? t.buffer.indexOf(r.radixPoint) : -1,
                    a = -1 !== o && new RegExp("[0-9\uff11-\uff19]").test(e);
                return r._radixDance && a && null == t.validPositions[o] ? { insert: { pos: o === n ? o + 1 : o, c: r.radixPoint }, pos: n } : a
            }

            function d(e, t) {
                var n = new RegExp("(^" + ("" !== t.negationSymbol.front ? h.escapeRegex(t.negationSymbol.front) + "?" : "") + h.escapeRegex(t.prefix) + ")(.*)(" + h.escapeRegex(t.suffix) + ("" != t.negationSymbol.back ? h.escapeRegex(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")),
                    i = n ? n[2] : "",
                    r = !1;
                return i && (i = i.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(i)), !(!r || !(1 < r[0].length || 0 < r[0].length && r[0].length < i.length)) && r
            }
            var h = n(1),
                p = h.dependencyLib,
                f = n(0);
            h.extendAliases({
                numeric: {
                    mask: l,
                    _mask: function(e) { return "(" + e.groupSeparator + "999){+|1}" },
                    digits: "*",
                    digitsOptional: !0,
                    enforceDigitsOnBlur: !1,
                    radixPoint: ".",
                    positionCaretOnClick: "radixFocus",
                    _radixDance: !0,
                    groupSeparator: "",
                    allowMinus: !0,
                    negationSymbol: { front: "-", back: "" },
                    prefix: "",
                    suffix: "",
                    min: null,
                    max: null,
                    step: 1,
                    unmaskAsNumber: !1,
                    roundingFN: Math.round,
                    inputmode: "numeric",
                    shortcuts: { k: "000", m: "000000" },
                    placeholder: "0",
                    greedy: !1,
                    rightAlign: !0,
                    insertMode: !0,
                    autoUnmask: !1,
                    skipOptionalPartCharacter: "",
                    definitions: { 0: { validator: u }, 1: { validator: u, definitionSymbol: "9" }, "+": { validator: function(e, t, n, i, r) { return r.allowMinus && ("-" === e || e === r.negationSymbol.front) } }, "-": { validator: function(e, t, n, i, r) { return r.allowMinus && e === r.negationSymbol.back } } },
                    preValidation: function(e, t, n, i, r, s, l, u) {
                        if (!1 !== r.__financeInput && n === r.radixPoint) return !1;
                        var d;
                        if (d = r.shortcuts && r.shortcuts[n]) {
                            if (1 < d.length)
                                for (var h = [], f = 0; f < d.length; f++) h.push({ pos: t + f, c: d[f], strict: !1 });
                            return { insert: h }
                        }
                        var m = p.inArray(r.radixPoint, e),
                            g = t;
                        if (t = c(t, n, m, s, r), "-" === n || n === r.negationSymbol.front) {
                            if (!0 !== r.allowMinus) return !1;
                            var y = !1,
                                v = a("+", s),
                                b = a("-", s);
                            return -1 !== v && (y = [v, b]), !1 !== y ? { remove: y, caret: g } : { insert: [{ pos: o("+", s), c: r.negationSymbol.front, fromIsValid: !0 }, { pos: o("-", s), c: r.negationSymbol.back, fromIsValid: void 0 }], caret: g + r.negationSymbol.back.length }
                        }
                        if (u) return !0;
                        if (-1 !== m && !0 === r._radixDance && !1 === i && n === r.radixPoint && void 0 !== r.digits && (isNaN(r.digits) || 0 < parseInt(r.digits)) && m !== t) return { caret: r._radixDance && t === m - 1 ? m + 1 : m };
                        if (!1 === r.__financeInput)
                            if (i) { if (r.digitsOptional) return { rewritePosition: l.end }; if (!r.digitsOptional) { if (l.begin > m && l.end <= m) return n === r.radixPoint ? { insert: { pos: m + 1, c: "0", fromIsValid: !0 }, rewritePosition: m } : { rewritePosition: m + 1 }; if (l.begin < m) return { rewritePosition: l.begin - 1 } } } else if (!r.showMaskOnHover && !r.showMaskOnFocus && !r.digitsOptional && 0 < r.digits && "" === this.inputmask.__valueGet.call(this)) return { rewritePosition: m };
                        return { rewritePosition: t }
                    },
                    postValidation: function(e, t, n, i, r, o, a) { if (!1 === i) return i; if (a) return !0; if (null !== r.min || null !== r.max) { var s = r.onUnMask(e.slice().reverse().join(""), void 0, p.extend({}, r, { unmaskAsNumber: !0 })); if (null !== r.min && s < r.min && (s.toString().length >= r.min.toString().length || s < 0)) return !1; if (null !== r.max && s > r.max) return !1 } return i },
                    onUnMask: function(e, t, n) { if ("" === t && !0 === n.nullable) return t; var i = e.replace(n.prefix, ""); return i = (i = i.replace(n.suffix, "")).replace(new RegExp(h.escapeRegex(n.groupSeparator), "g"), ""), "" !== n.placeholder.charAt(0) && (i = i.replace(new RegExp(n.placeholder.charAt(0), "g"), "0")), n.unmaskAsNumber ? ("" !== n.radixPoint && -1 !== i.indexOf(n.radixPoint) && (i = i.replace(h.escapeRegex.call(this, n.radixPoint), ".")), i = (i = i.replace(new RegExp("^" + h.escapeRegex(n.negationSymbol.front)), "-")).replace(new RegExp(h.escapeRegex(n.negationSymbol.back) + "$"), ""), Number(i)) : i },
                    isComplete: function(e, t) { var n = (t.numericInput ? e.slice().reverse() : e).join(""); return n = (n = (n = (n = (n = n.replace(new RegExp("^" + h.escapeRegex(t.negationSymbol.front)), "-")).replace(new RegExp(h.escapeRegex(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp(h.escapeRegex(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (n = n.replace(h.escapeRegex(t.radixPoint), ".")), isFinite(n) },
                    onBeforeMask: function(e, t) {
                        var n = t.radixPoint || ",";
                        isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === n || (e = e.toString().replace(".", n));
                        var i = e.split(n),
                            o = i[0].replace(/[^\-0-9]/g, ""),
                            a = 1 < i.length ? i[1].replace(/[^0-9]/g, "") : "",
                            s = 1 < i.length;
                        e = o + ("" !== a ? n + a : a);
                        var l = 0;
                        if ("" !== n && (l = t.digitsOptional ? t.digits < a.length ? t.digits : a.length : t.digits, "" !== a || !t.digitsOptional)) {
                            var c = Math.pow(10, l || 1);
                            e = e.replace(h.escapeRegex(n), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * c) / c).toFixed(l)), e = e.toString().replace(".", n)
                        }
                        if (0 === t.digits && -1 !== e.indexOf(n) && (e = e.substring(0, e.indexOf(n))), null !== t.min || null !== t.max) {
                            var u = e.toString().replace(n, ".");
                            null !== t.min && u < t.min ? e = t.min.toString().replace(".", n) : null !== t.max && u > t.max && (e = t.max.toString().replace(".", n))
                        }
                        return r(e.toString().split(""), l, t, s).join("")
                    },
                    onBeforeWrite: function(e, t, n, i) {
                        function o(e, t) {
                            if (!1 !== i.__financeInput || t) { var n = p.inArray(i.radixPoint, e); - 1 !== n && e.splice(n, 1) }
                            if ("" !== i.groupSeparator)
                                for (; - 1 !== (n = e.indexOf(i.groupSeparator));) e.splice(n, 1);
                            return e
                        }
                        var a, s = d(t, i);
                        if (s) {
                            var l = t.slice().reverse(),
                                c = l.join("").indexOf(s[0]);
                            l.splice(c, s[0].length);
                            var u = l.length - c;
                            o(l), a = { refreshFromBuffer: !0, buffer: l.reverse(), caret: n < u ? n : u }
                        }
                        if (e) switch (e.type) {
                            case "blur":
                            case "checkval":
                                if (null !== i.min) { var f = i.onUnMask(t.slice().reverse().join(""), void 0, p.extend({}, i, { unmaskAsNumber: !0 })); if (null !== i.min && f < i.min) return { refreshFromBuffer: !0, buffer: r(i.min.toString().replace(".", i.radixPoint).split(""), i.digits, i).reverse() } }
                                if (t[t.length - 1] === i.negationSymbol.front) {
                                    var m = new RegExp("(^" + ("" != i.negationSymbol.front ? h.escapeRegex(i.negationSymbol.front) + "?" : "") + h.escapeRegex(i.prefix) + ")(.*)(" + h.escapeRegex(i.suffix) + ("" != i.negationSymbol.back ? h.escapeRegex(i.negationSymbol.back) + "?" : "") + "$)").exec(o(t.slice(), !0).reverse().join(""));
                                    0 == (m ? m[2] : "") && (a = { refreshFromBuffer: !0, buffer: [0] })
                                } else "" !== i.radixPoint && t[0] === i.radixPoint && (a && a.buffer ? a.buffer.shift() : (t.shift(), a = { refreshFromBuffer: !0, buffer: o(t) }));
                                if (i.enforceDigitsOnBlur) {
                                    var g = (a = a || {}) && a.buffer || t.slice().reverse();
                                    a.refreshFromBuffer = !0, a.buffer = r(g, i.digits, i, !0).reverse()
                                }
                        }
                        return a
                    },
                    onKeyDown: function(e, t, n, i) {
                        var o, a = p(this);
                        if (e.ctrlKey) switch (e.keyCode) {
                            case f.UP:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(i.step)), a.trigger("setvalue"), !1;
                            case f.DOWN:
                                return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(i.step)), a.trigger("setvalue"), !1
                        }
                        if (!e.shiftKey && (e.keyCode === f.DELETE || e.keyCode === f.BACKSPACE || e.keyCode === f.BACKSPACE_SAFARI) && n.begin !== t.length) { if (t[e.keyCode === f.DELETE ? n.begin - 1 : n.end] === i.negationSymbol.front) return o = t.slice().reverse(), "" !== i.negationSymbol.front && o.shift(), "" !== i.negationSymbol.back && o.pop(), a.trigger("setvalue", [o.join(""), n.begin]), !1; if (!0 === i._radixDance) { var s = p.inArray(i.radixPoint, t); if (i.digitsOptional) { if (0 === s) return (o = t.slice().reverse()).pop(), a.trigger("setvalue", [o.join(""), n.begin >= o.length ? o.length : n.begin]), !1 } else if (-1 !== s && (n.begin < s || n.end < s || e.keyCode === f.DELETE && n.begin === s)) return n.begin !== n.end || e.keyCode !== f.BACKSPACE && e.keyCode !== f.BACKSPACE_SAFARI || n.begin++, (o = t.slice().reverse()).splice(o.length - n.begin, n.begin - n.end + 1), o = r(o, i.digits, i).join(""), a.trigger("setvalue", [o, n.begin >= o.length ? s + 1 : n.begin]), !1 } }
                    }
                },
                currency: { prefix: "", groupSeparator: ",", alias: "numeric", digits: 2, digitsOptional: !1 },
                decimal: { alias: "numeric" },
                integer: { alias: "numeric", digits: 0 },
                percentage: { alias: "numeric", min: 0, max: 100, suffix: " %", digits: 0, allowMinus: !1 },
                indianns: { alias: "numeric", _mask: function(e) { return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}" }, groupSeparator: ",", radixPoint: ".", placeholder: "0", digits: 2, digitsOptional: !1 }
            }), e.exports = h
        }, function(e, t, n) {
            "use strict";

            function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function o(e, t) { return !t || "object" !== i(t) && "function" != typeof t ? a(e) : t }

            function a(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && h(e, t)
            }

            function l(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (l = function(e) {
                    function n() { return u(e, arguments, p(this).constructor) }
                    if (null === e || !d(e)) return e;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, n)
                    }
                    return n.prototype = Object.create(e.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), h(n, e)
                })(e)
            }

            function c() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0 } catch (e) { return !1 } }

            function u() {
                return (u = c() ? Reflect.construct : function(e, t, n) {
                    var i = [null];
                    i.push.apply(i, t);
                    var r = new(Function.bind.apply(e, i));
                    return n && h(r, n.prototype), r
                }).apply(null, arguments)
            }

            function d(e) { return -1 !== Function.toString.call(e).indexOf("[native code]") }

            function h(e, t) { return (h = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

            function p(e) { return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function f(e) { return e && e.__esModule ? e : { "default": e } }
            var m = f(n(1));
            if (document.head.createShadowRoot || document.head.attachShadow) {
                var g = function() {
                    function e() {
                        var t;
                        r(this, e);
                        var n = (t = o(this, p(e).call(this))).getAttributeNames(),
                            i = t.attachShadow({ mode: "closed" }),
                            a = document.createElement("input");
                        for (var s in a.type = "text", i.appendChild(a), n) Object.prototype.hasOwnProperty.call(n, s) && a.setAttribute("data-inputmask-" + n[s], t.getAttribute(n[s]));
                        return (new m["default"]).mask(a), a.inputmask.shadowRoot = i, t
                    }
                    return s(e, l(HTMLElement)), e
                }();
                customElements.define("input-mask", g)
            }
        }, function(e, t, n) {
            "use strict";

            function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
            var r = n(3),
                o = n(1);
            void 0 === r.fn.inputmask && (r.fn.inputmask = function(e, t) {
                var n, a = this[0];
                if (void 0 === t && (t = {}), "string" == typeof e) switch (e) {
                    case "unmaskedvalue":
                        return a && a.inputmask ? a.inputmask.unmaskedvalue() : r(a).val();
                    case "remove":
                        return this.each(function() { this.inputmask && this.inputmask.remove() });
                    case "getemptymask":
                        return a && a.inputmask ? a.inputmask.getemptymask() : "";
                    case "hasMaskedValue":
                        return !(!a || !a.inputmask) && a.inputmask.hasMaskedValue();
                    case "isComplete":
                        return !a || !a.inputmask || a.inputmask.isComplete();
                    case "getmetadata":
                        return a && a.inputmask ? a.inputmask.getmetadata() : void 0;
                    case "setvalue":
                        o.setValue(a, t);
                        break;
                    case "option":
                        if ("string" != typeof t) return this.each(function() { if (void 0 !== this.inputmask) return this.inputmask.option(t) });
                        if (a && void 0 !== a.inputmask) return a.inputmask.option(t);
                        break;
                    default:
                        return t.alias = e, n = new o(t), this.each(function() { n.mask(this) })
                } else {
                    if (Array.isArray(e)) return t.alias = e, n = new o(t), this.each(function() { n.mask(this) });
                    if ("object" == i(e)) return n = new o(e), void 0 === e.mask && void 0 === e.alias ? this.each(function() {
                        if (void 0 !== this.inputmask) return this.inputmask.option(e);
                        n.mask(this)
                    }) : this.each(function() { n.mask(this) });
                    if (void 0 === e) return this.each(function() {
                        (n = new o(t)).mask(this)
                    })
                }
            })
        }, function(e, t, n) {
            "use strict";
            var i = n(6),
                r = n(3);
            i.dependencyLib === r && n(12), e.exports = i
        }], installedModules = {}, __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(e, t, n) { __webpack_require__.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, __webpack_require__.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, __webpack_require__.t = function(e, t) {
            if (1 & t && (e = __webpack_require__(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (__webpack_require__.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                for (var i in e) __webpack_require__.d(n, i, function(t) { return e[t] }.bind(null, i));
            return n
        }, __webpack_require__.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return __webpack_require__.d(t, "a", t), t }, __webpack_require__.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 13);
        var modules, installedModules
    });
//! CLABE Validator v1.3.7 ~ github.com/center-key/clabe-validator ~ MIT License
const clabe = {
    version: "1.3.7",
    computeChecksum: e => {
        const t = (e, t, n) => e + parseInt(t, 10) * [3, 7, 1][n % 3] % 10,
            n = () => (10 - e.split("").slice(0, 17).reduce(t, 0) % 10) % 10;
        return /^[0-9]{17,18}$/.test(e) ? n() : null
    },
    validate: e => {
        const t = { length: "Must be exactly 18 digits long", characters: "Must be only numeric digits (no letters)", checksum: "Invalid checksum, last digit should be: ", bank: "Invalid bank code: ", city: "Invalid city code: " };
        if ("string" != typeof e) throw "clabe.validator.check(clabeNum) -- Expected string, got: " + typeof e;
        const n = e.substring(0, 3),
            i = e.substring(3, 6),
            r = e.substring(6, 17),
            o = parseInt(e.substring(17, 18), 10),
            a = () => {
                clabe.citiesMap = {};
                const e = e => clabe.citiesMap[e] ? clabe.citiesMap[e] + ", " : "",
                    t = t => clabe.citiesMap[t[0]] = e(t[0]) + t[1];
                clabe.cities.forEach(t)
            };
        clabe.citiesMap || a();
        const s = clabe.banksMap[parseInt(n, 10)] || {},
            l = clabe.citiesMap[parseInt(i, 10)],
            c = clabe.computeChecksum(e),
            u = (() => { return 18 !== e.length ? { invalid: "length", data: "" } : /[^0-9]/.test(e) ? { invalid: "characters", data: "" } : o !== c ? { invalid: "checksum", data: c } : s.tag ? l ? { invalid: null } : { invalid: "city", data: i } : { invalid: "bank", data: n } })(),
            d = !u.invalid;
        return { ok: d, error: d ? null : "invalid-" + u.invalid, formatOk: d || ["bank", "city"].includes(u.invalid), message: d ? "Valid" : t[u.invalid] + u.data, tag: s.tag || null, bank: s.name || null, city: l || null, account: r, code: { bank: n, city: i }, checksum: c }
    },
    calculate: (e, t, n) => {
        const i = (e, t) => e.length < t ? i("0" + e, t) : e,
            r = (e, t) => i("" + e, t).slice(-t),
            o = r(e, 3) + r(t, 3) + r(n, 11);
        return o + clabe.computeChecksum(o)
    },
    banksMap: { 2: { tag: "BANAMEX", name: "Banco Nacional de M\xe9xico, S.A." }, 6: { tag: "BANCOMEXT", name: "Banco Nacional de Comercio Exterior" }, 9: { tag: "BANOBRAS", name: "Banco Nacional de Obras y Servicios P\xfablicos" }, 12: { tag: "BBVA BANCOMER", name: "BBVA Bancomer, S.A." }, 14: { tag: "SANTANDER", name: "Banco Santander, S.A." }, 19: { tag: "BANJERCITO", name: "Banco Nacional del Ej\xe9rcito, Fuerza A\xe9rea y Armada" }, 21: { tag: "HSBC", name: "HSBC M\xe9xico, S.A." }, 22: { tag: "GE MONEY", name: "GE Money Bank, S.A." }, 30: { tag: "BAJ\xcdO", name: "Banco del Baj\xedo, S.A." }, 32: { tag: "IXE", name: "IXE Banco, S.A." }, 36: { tag: "INBURSA", name: "Banco Inbursa, S.A." }, 37: { tag: "INTERACCIONES", name: "Banco Interacciones, S.A." }, 42: { tag: "MIFEL", name: "Banca Mifel, S.A." }, 44: { tag: "SCOTIABANK", name: "Scotiabank Inverlat, S.A." }, 58: { tag: "BANREGIO", name: "Banco Regional de Monterrey, S.A." }, 59: { tag: "INVEX", name: "Banco Invex, S.A." }, 60: { tag: "BANSI", name: "Bansi, S.A." }, 62: { tag: "AFIRME", name: "Banca Afirme, S.A." }, 72: { tag: "BANORTE", name: "Banco Mercantil del Norte, S.A." }, 102: { tag: "ABNAMRO", name: "ABN AMRO Bank M\xe9xico, S.A." }, 103: { tag: "AMERICAN EXPRESS", name: "American Express Bank (M\xe9xico), S.A." }, 106: { tag: "BAMSA", name: "Bank of America M\xe9xico, S.A." }, 108: { tag: "TOKYO", name: "Bank of Tokyo-Mitsubishi UFJ (M\xe9xico), S.A." }, 110: { tag: "JP MORGAN", name: "Banco J.P. Morgan, S.A." }, 112: { tag: "BMONEX", name: "Banco Monex, S.A." }, 113: { tag: "VE POR MAS", name: "Banco Ve por Mas, S.A." }, 116: { tag: "ING", name: "ING Bank (M\xe9xico), S.A." }, 124: { tag: "DEUTSCHE", name: "Deutsche Bank M\xe9xico, S.A." }, 126: { tag: "CREDIT SUISSE", name: "Banco Credit Suisse (M\xe9xico), S.A." }, 127: { tag: "AZTECA", name: "Banco Azteca, S.A." }, 128: { tag: "AUTOFIN", name: "Banco Autofin M\xe9xico, S.A." }, 129: { tag: "BARCLAYS", name: "Barclays Bank M\xe9xico, S.A." }, 130: { tag: "COMPARTAMOS", name: "Banco Compartamos, S.A." }, 131: { tag: "FAMSA", name: "Banco Ahorro Famsa, S.A." }, 132: { tag: "BMULTIVA", name: "Banco Multiva, S.A." }, 133: { tag: "PRUDENTIAL", name: "Prudencial Bank, S.A." }, 134: { tag: "WAL-MART", name: "Banco Wal Mart de M\xe9xico Adelante, S.A." }, 135: { tag: "NAFIN", name: "Nacional Financiera, S.N.C." }, 136: { tag: "REGIONAL", name: "Banco Regional, S.A." }, 137: { tag: "BANCOPPEL", name: "BanCoppel, S.A." }, 138: { tag: "ABC CAPITAL", name: "ABC Capital, S.A. I.B.M." }, 139: { tag: "UBS BANK", name: "UBS Banco, S.A." }, 140: { tag: "F\xc1CIL", name: "Banco F\xe1cil, S.A." }, 141: { tag: "VOLKSWAGEN", name: "Volkswagen Bank S.A. Instituci\xf3n de Banca M\xfaltiple" }, 143: { tag: "CIBANCO", name: "Consultor\xeda Internacional Banco, S.A." }, 145: { tag: "BBASE", name: "Banco BASE, S.A. de I.B.M." }, 147: { tag: "BANKAOOL", name: "Bankaool, S.A., Instituci\xf3n de Banca M\xfaltiple" }, 148: { tag: "PAGATODO", name: "Banco PagaTodo S.A., Instituci\xf3n de Banca M\xfaltiple" }, 150: { tag: "BIM", name: "Banco Inmobiliario Mexicano, S.A., Instituci\xf3n de Banca M\xfaltiple" }, 152: { tag: "BANCREA", name: "Banco Bancrea, S.A., Instituci\xf3n de Banca M\xfaltiple" }, 156: { tag: "SABADELL", name: "Banco Sabadell, S.A. I.B.M." }, 166: { tag: "BANSEFI", name: "Banco del Ahorro Nacional y Servicios Financieros, S.N.C." }, 168: { tag: "HIPOTECARIA FEDERAL", name: "Sociedad Hipotecaria Federal, S.N.C." }, 600: { tag: "MONEXCB", name: "Monex Casa de Bolsa, S.A. de C.V." }, 601: { tag: "GBM", name: "GBM Grupo Burs\xe1til Mexicano, S.A. de C.V." }, 602: { tag: "MASARI CC.", name: "Masari Casa de Cambio, S.A. de C.V." }, 604: { tag: "C.B. INBURSA", name: "Inversora Burs\xe1til, S.A. de C.V." }, 605: { tag: "VALU\xc9", name: "Valu\xe9, S.A. de C.V., Casa de Bolsa" }, 606: { tag: "CB BASE", name: "Base Internacional Casa de Bolsa, S.A. de C.V." }, 607: { tag: "TIBER", name: "Casa de Cambio Tiber, S.A. de C.V." }, 608: { tag: "VECTOR", name: "Vector Casa de Bolsa, S.A. de C.V." }, 610: { tag: "B&B", name: "B y B Casa de Cambio, S.A. de C.V." }, 611: { tag: "INTERCAM", name: "Intercam Casa de Cambio, S.A. de C.V." }, 613: { tag: "MULTIVA", name: "Multivalores Casa de Bolsa, S.A. de C.V. Multiva Gpo. Fin." }, 614: { tag: "ACCIVAL", name: "Acciones y Valores Banamex, S.A. de C.V., Casa de Bolsa" }, 615: { tag: "MERRILL LYNCH", name: "Merrill Lynch M\xe9xico, S.A. de C.V., Casa de Bolsa" }, 616: { tag: "FINAMEX", name: "Casa de Bolsa Finamex, S.A. de C.V." }, 617: { tag: "VALMEX", name: "Valores Mexicanos Casa de Bolsa, S.A. de C.V." }, 618: { tag: "\xdaNICA", name: "\xdanica Casa de Cambio, S.A. de C.V." }, 619: { tag: "ASEGURADORA MAPFRE", name: "MAPFRE Tepeyac S.A." }, 620: { tag: "AFORE PROFUTURO", name: "Profuturo G.N.P., S.A. de C.V." }, 621: { tag: "CB ACTINBER", name: "Actinver Casa de Bolsa, S.A. de C.V." }, 622: { tag: "ACTINVE SI", name: "Actinver S.A. de C.V." }, 623: { tag: "SKANDIA", name: "Skandia Vida S.A. de C.V." }, 624: { tag: "CONSULTOR\xcdA", name: "Consultor\xeda Internacional Casa de Cambio, S.A. de C.V." }, 626: { tag: "CBDEUTSCHE", name: "Deutsche Securities, S.A. de C.V." }, 627: { tag: "ZURICH", name: "Zurich Compa\xf1\xeda de Seguros, S.A." }, 628: { tag: "ZURICHVI", name: "Zurich Vida, Compa\xf1\xeda de Seguros, S.A." }, 629: { tag: "HIPOTECARIA SU CASITA", name: "Hipotecaria su Casita, S.A. de C.V." }, 630: { tag: "C.B. INTERCAM", name: "Intercam Casa de Bolsa, S.A. de C.V." }, 631: { tag: "C.B. VANGUARDIA", name: "Vanguardia Casa de Bolsa, S.A. de C.V." }, 632: { tag: "BULLTICK C.B.", name: "Bulltick Casa de Bolsa, S.A. de C.V." }, 633: { tag: "STERLING", name: "Sterling Casa de Cambio, S.A. de C.V." }, 634: { tag: "FINCOMUN", name: "Fincom\xfan, Servicios Financieros Comunitarios, S.A. de C.V." }, 636: { tag: "HDI SEGUROS", name: "HDI Seguros, S.A. de C.V." }, 637: { tag: "ORDER", name: "OrderExpress Casa de Cambio , S.A. de C.V. AAC" }, 638: { tag: "AKALA", name: "Akala, S.A. de C.V., Sociedad Financiera Popular" }, 640: { tag: "JP MORGAN C.B.", name: "J.P. Morgan Casa de Bolsa, S.A. de C.V." }, 642: { tag: "REFORMA", name: "Operadora de Recursos Reforma, S.A. de C.V." }, 646: { tag: "STP", name: "Sistema de Transferencias y Pagos STP, S.A. de C.V., SOFOM E.N.R." }, 647: { tag: "TELECOMM", name: "Telecomunicaciones de M\xe9xico" }, 648: { tag: "EVERCORE", name: "Evercore Casa de Bolsa, S.A. de C.V." }, 649: { tag: "SKANDIA", name: "Skandia Operadora S.A. de C.V." }, 651: { tag: "SEGMTY", name: "Seguros Monterrey New York Life, S.A de C.V." }, 652: { tag: "ASEA", name: "Soluci\xf3n Asea, S.A. de C.V., Sociedad Financiera Popular" }, 653: { tag: "KUSPIT", name: "Kuspit Casa de Bolsa, S.A. de C.V." }, 655: { tag: "SOFIEXPRESS", name: "J.P. SOFIEXPRESS, S.A. de C.V., S.F.P." }, 656: { tag: "UNAGRA", name: "UNAGRA, S.A. de C.V., S.F.P." }, 659: { tag: "OPCIONES EMPRESARIALES DEL NOROESTE", name: "Opciones Empresariales Del Noreste, S.A. DE C.V." }, 670: { tag: "LIBERTAD", name: "Libertad Servicios Financieros, S.A. De C.V." }, 846: { tag: "STP", name: "Sistema de Transferencias y Pagos STP" }, 901: { tag: "CLS", name: "CLS Bank International" }, 902: { tag: "INDEVAL", name: "SD. INDEVAL, S.A. de C.V." }, 999: { tag: "N/A", name: "N/A" } },
    cities: [
        [10, "Aguascalientes"],
        [12, "Calvillo"],
        [14, "Jes\xfas Mar\xeda"],
        [20, "Mexicali"],
        [22, "Ensenada"],
        [27, "Tecate"],
        [27, "Tijuana"],
        [28, "La Mesa"],
        [28, "Rosarito"],
        [28, "Tijuana [alternate]"],
        [40, "La Paz"],
        [41, "Cabo San Lucas"],
        [42, "Ciudad Constituci\xf3n"],
        [43, "Guerrero Negro"],
        [45, "San Jos\xe9 del Cabo"],
        [46, "Santa Rosal\xeda"],
        [50, "Campeche"],
        [51, "Calkin\xed"],
        [52, "Ciudad del Carmen"],
        [53, "Champot\xf3n"],
        [60, "G\xf3mez Palacio"],
        [60, "Torre\xf3n"],
        [62, "Ciudad Acu\xf1a"],
        [68, "Monclova"],
        [71, "Nava"],
        [72, "Nueva Rosita"],
        [74, "Parras de la Fuente"],
        [75, "Piedras Negras"],
        [76, "Ramos Arizpe"],
        [77, "Sabinas"],
        [78, "Saltillo"],
        [80, "San Pedro de las Colonias"],
        [90, "Colima"],
        [95, "Manzanillo"],
        [97, "Tecom\xe1n"],
        [100, "Ter\xe1n"],
        [100, "Tuxtla Guti\xe9rrez"],
        [103, "Arriaga"],
        [107, "Cintalapa"],
        [109, "Comit\xe1n"],
        [109, "Villa Las Rosas"],
        [111, "Chiapa de Corso"],
        [113, "F. Comalapa"],
        [114, "Huixtla"],
        [123, "Ocosingo"],
        [124, "Ocozocuautla"],
        [125, "Palenque"],
        [126, "Pichucalco"],
        [127, "Pijijiapan"],
        [128, "Reforma"],
        [130, "San Crist\xf3bal de las Casas"],
        [131, "Simojovel"],
        [133, "Tapachula"],
        [135, "Tonala"],
        [137, "Venustiano Carranza"],
        [138, "Villa Flores"],
        [140, "Yajal\xf3n"],
        [150, "Chihuahua"],
        [150, "Ciudad Delicias"],
        [152, "Ciudad An\xe1huac"],
        [155, "Ciudad Camargo"],
        [158, "Ciudad Cuauht\xe9moc"],
        [161, "Ciudad Guerrero"],
        [162, "Parral"],
        [163, "Ciudad Jim\xe9nez"],
        [164, "Ciudad Ju\xe1rez"],
        [165, "Ciudad Madera"],
        [167, "El Molino de Namiquipa"],
        [168, "Nuevo Casas Grandes"],
        [180, "Atizapan"],
        [180, "Chalco"],
        [180, "Ciudad de M\xe9xico"],
        [180, "Coacalco"],
        [180, "Cuautitl\xe1n Izcalli"],
        [180, "Cuautitl\xe1n"],
        [180, "Ecatepec"],
        [180, "Huehuetoca"],
        [180, "Huixquilucan"],
        [180, "Ixtapaluca"],
        [180, "Los Reyes La Paz"],
        [180, "Naucalpan"],
        [180, "Nezahualc\xf3yotl"],
        [180, "Tecamac"],
        [180, "Teotihuac\xe1n"],
        [180, "Texcoco"],
        [180, "Tlalnepantla"],
        [190, "Durango"],
        [198, "N/A"],
        [201, "Tepehuanes"],
        [202, "Vicente Guerrero"],
        [210, "Guanajuato"],
        [211, "Abasolo"],
        [212, "Ac\xe1mbaro"],
        [213, "Apaseo el Alto"],
        [214, "Apaseo el Grande"],
        [215, "Celaya"],
        [216, "Comonfort"],
        [217, "Coroneo"],
        [218, "Cortazar"],
        [219, "Cuer\xe1maro"],
        [220, "Dolores Hidalgo"],
        [222, "Irapuato"],
        [223, "Jaral del Progreso"],
        [224, "Jer\xe9cuaro"],
        [225, "Le\xf3n"],
        [226, "Cd. Manuel Doblado"],
        [227, "Morole\xf3n"],
        [229, "P\xe9njamo"],
        [232, "Romita"],
        [233, "Salamanca"],
        [234, "Salvatierra"],
        [236, "San Felipe"],
        [237, "Pur\xedsima de Bustos"],
        [237, "San Francisco del Rinco\xf3n"],
        [238, "San Jos\xe9 Iturbide"],
        [239, "San Luis de la Paz"],
        [240, "San Miguel Allende"],
        [244, "Silao"],
        [247, "Uriangato"],
        [248, "Valle de Santiago"],
        [249, "Yuriria"],
        [260, "Chilpancingo"],
        [261, "Acapulco"],
        [263, "Arcelia"],
        [264, "Atoyac de \xc1lvarez"],
        [266, "Ciudad Altamirano"],
        [267, "Coyuca de Ben\xedtez"],
        [270, "Chilapa"],
        [271, "Huitzuco"],
        [272, "Iguala"],
        [272, "La Sabana"],
        [274, "Cuajinicuilapa"],
        [274, "Ometepec"],
        [275, "San Marcos"],
        [276, "Taxco"],
        [278, "Teloloapan"],
        [281, "Tlapa"],
        [282, "Ixtapa Zihuatanejo"],
        [282, "Zihuatanejo"],
        [290, "Pachuca"],
        [291, "Actopan"],
        [292, "Apam"],
        [293, "Atotonilco el Grande"],
        [294, "Ciudad Sahag\xfan"],
        [294, "Teocaltiche"],
        [295, "Cuautepec"],
        [296, "Huejutla"],
        [297, "Huichapan"],
        [298, "Ixmiquilpan"],
        [303, "Progreso de Obreg\xf3n"],
        [305, "Tepeapulco"],
        [308, "Tizayuca"],
        [311, "Tula de Allende"],
        [312, "Tulancingo"],
        [313, "Zacualtip\xe1n"],
        [314, "Zimap\xe1n"],
        [320, "El Salto"],
        [320, "Guadalajara"],
        [320, "San Pedro Tlaquepaque"],
        [320, "Tlajomulco"],
        [320, "Tonala [alternate]"],
        [320, "Zapopan"],
        [326, "Ameca"],
        [327, "Arandas"],
        [330, "Atotonilco el Alto"],
        [331, "Atequiza"],
        [333, "Autl\xe1n"],
        [334, "Azteca"],
        [340, "Casimiro Castillo"],
        [341, "Cihuatl\xe1n"],
        [342, "Ciudad Guzm\xe1n"],
        [346, "Chapala"],
        [348, "El Grullo"],
        [355, "Ixtlahuac\xe1n del R\xedo"],
        [356, "Jalostotitl\xe1n"],
        [357, "Jamay"],
        [361, "La Barca"],
        [362, "Lagos de Moreno"],
        [370, "Ocotl\xe1n"],
        [373, "Pihuamo"],
        [375, "Las Juntas"],
        [375, "Nuevo Vallarta"],
        [375, "Pitillal"],
        [375, "Puerto Vallarta"],
        [381, "San Juan de los Lagos"],
        [382, "N/A"],
        [384, "San Miguel el Alto"],
        [385, "San Patricio Melaque"],
        [386, "Sayula"],
        [387, "Tala"],
        [389, "Tamazula de Gordiano"],
        [391, "Tecalitl\xe1n"],
        [396, "Tepatitl\xe1n"],
        [397, "Tequila"],
        [403, "Tototl\xe1n"],
        [404, "T\xfaxpam"],
        [411, "Villa Hidalgo"],
        [413, "Zacoalco de Torres"],
        [414, "Zapotiltic"],
        [416, "Zapotlanejo"],
        [420, "Toluca"],
        [421, "Acambay"],
        [422, "Almoloya de Ju\xe1rez"],
        [424, "Amecameca"],
        [425, "Apaxco"],
        [426, "Atlacomulco"],
        [428, "Coatepec de Harinas"],
        [430, "Chicoloapan"],
        [431, "Chiconcuac"],
        [432, "El Oro"],
        [433, "Ixtapan de la Sal"],
        [434, "Ixtlahuaca"],
        [435, "Jilotepec"],
        [438, "Lerma"],
        [441, "Metepec"],
        [443, "Otumba"],
        [445, "San Mateo Atenco"],
        [446, "Tejupilco"],
        [448, "Temascaltepec"],
        [449, "Temoaya"],
        [450, "Tenancingo"],
        [451, "Tenago del Valle"],
        [453, "Santiago Tiangistenco"],
        [455, "Tultepec"],
        [456, "Tultitl\xe1n"],
        [457, "Valle de Bravo"],
        [460, "Villa Nicol\xe1s Romero"],
        [463, "Zumpango"],
        [470, "Morelia"],
        [472, "Aguililla"],
        [476, "Apatzing\xe1n"],
        [480, "Ciudad Hidalgo"],
        [483, "Cotija"],
        [484, "Cuitzeo"],
        [492, "Huetamo"],
        [493, "Jacona"],
        [494, "Jiquilpan"],
        [496, "La Piedad"],
        [497, "L\xe1zaro C\xe1rdenas"],
        [498, "Los Reyes"],
        [499, "Maravat\xedo"],
        [501, "Nueva Italia"],
        [506, "P\xe1tzcuaro"],
        [508, "Pur\xe9pero"],
        [509, "Puruandiro"],
        [512, "Sahuayo"],
        [515, "Tac\xe1mbaro"],
        [517, "Tanganc\xedcuaro"],
        [519, "Tepalcatepec"],
        [523, "Tlazazalca"],
        [528, "Uruapan"],
        [533, "Yur\xe9cuaro"],
        [534, "Zacapu"],
        [535, "Zamora"],
        [536, "Zinap\xe9cuaro"],
        [537, "Zit\xe1cuaro"],
        [540, "Cuernavaca"],
        [542, "Cuautla"],
        [542, "Oaxtepec, Morelos"],
        [543, "Jiutepec"],
        [544, "Jojutla"],
        [545, "Puente de Ixtla"],
        [546, "Temixco"],
        [548, "Tetecala"],
        [549, "Yautepec"],
        [552, "Zacatepec"],
        [560, "Tepic"],
        [561, "Acaponeta"],
        [562, "Ahuacatl\xe1n"],
        [564, "Compostela"],
        [566, "Ixtl\xe1n del R\xedo"],
        [571, "San Blas"],
        [573, "Santiago Ixcuintla"],
        [575, "T\xfaxpam [alternate]"],
        [580, "Apodaca"],
        [580, "Cadereyta"],
        [580, "Cd. Guadalupe"],
        [580, "General Escobedo"],
        [580, "Monterrey"],
        [580, "San Nicol\xe1s de los Garza"],
        [580, "San Pedro Garza Garc\xeda"],
        [580, "Santa Catarina"],
        [583, "Allende"],
        [592, "General Zuazua"],
        [595, "Linares"],
        [597, "Montemorelos"],
        [599, "Sabinas Hidalgo"],
        [600, "Salinas Victoria"],
        [601, "El Cercado"],
        [601, "Villa de Santiago"],
        [610, "Oaxaca"],
        [613, "Tlaxiaco"],
        [614, "Huajuapan de Le\xf3n"],
        [616, "Ixtepec"],
        [617, "Juchit\xe1n"],
        [619, "Loma Bonita"],
        [620, "Mat\xedas Romero"],
        [621, "Miahuatl\xe1n"],
        [622, "Ocotl\xe1n [alternate]"],
        [624, "Puerto Escondido"],
        [626, "Salina Cruz"],
        [627, "Lagunas"],
        [628, "Tuxtepec"],
        [630, "Pochutla"],
        [631, "San Pedro Tapanatepec"],
        [632, "Santa Luc\xeda del Camino"],
        [634, "Bah\xedas de Huatulco"],
        [635, "Santiago Juxtlahuaca"],
        [636, "Pinotepa Nacional"],
        [637, "Tehuantepec"],
        [638, "Tlacolula"],
        [640, "Zimatl\xe1n"],
        [650, "Cholula"],
        [650, "La Resurrecci\xf3n"],
        [650, "Puebla"],
        [650, "San Baltazar Campeche"],
        [651, "N/A"],
        [652, "Acatzingo"],
        [654, "Atlixco"],
        [656, "Cuetzalan"],
        [659, "Huauchinango"],
        [662, "Iz\xfacar de Matamoros"],
        [667, "San Mart\xedn Texmelucan"],
        [668, "San Felipe Hueyotlipan"],
        [669, "Tecamachalco"],
        [670, "Tehuac\xe1n"],
        [671, "San Lorenzo"],
        [672, "Teziutl\xe1n"],
        [674, "Xicotepec de Ju\xe1rez"],
        [676, "Zacatl\xe1n"],
        [680, "Pedro Escobedo"],
        [680, "Quer\xe9taro"],
        [680, "Villa Corregidora"],
        [681, "Amealco"],
        [685, "San Juan del R\xedo"],
        [686, "Tequisquiapan"],
        [690, "Chetumal"],
        [691, "Canc\xfan"],
        [691, "Col. Puerto Ju\xe1rez"],
        [692, "Cozumel"],
        [693, "N/A"],
        [694, "Playa del Carmen"],
        [700, "San Luis Potos\xed"],
        [703, "Cerritos"],
        [705, "Ciudad Valles"],
        [709, "Matehuala"],
        [711, "R\xedo Verde"],
        [716, "Tamu\xedn"],
        [730, "Culiac\xe1n"],
        [735, "Concordia"],
        [736, "Cosala"],
        [737, "Choix"],
        [738, "El Fuerte"],
        [739, "Escuinapa"],
        [740, "Guam\xfachil"],
        [741, "Guasave"],
        [743, "Los Mochis"],
        [743, "Topolobampo"],
        [744, "Mazatl\xe1n"],
        [745, "Mocorito"],
        [746, "Navolato"],
        [760, "Hermosillo"],
        [761, "Agua Prieta"],
        [765, "Caborca"],
        [766, "Cananea"],
        [767, "Ciudad Obreg\xf3n"],
        [767, "Esperanza"],
        [769, "Empalme"],
        [770, "Guaymas"],
        [770, "San Carlos"],
        [771, "Huatabampo"],
        [773, "Magdalena"],
        [776, "Nacozari de Garc\xeda"],
        [777, "Navojoa"],
        [778, "Nogales"],
        [779, "Puerto Pe\xf1asco"],
        [780, "San Luis R\xedo Colorado"],
        [790, "Tamulte"],
        [790, "Villa Hermosa"],
        [792, "C\xe1rdenas"],
        [793, "Ciudad Pemex"],
        [794, "Comalcalco"],
        [796, "Emiliano Zapata"],
        [797, "Frontera"],
        [798, "Huimanguillo"],
        [800, "Jalpa de M\xe9ndez"],
        [802, "Macuspana"],
        [803, "Nacajuca"],
        [804, "Para\xedso"],
        [805, "Tacotalpa"],
        [806, "Teapa"],
        [807, "Tenosique"],
        [810, "Ciudad Victoria"],
        [811, "Altamira"],
        [813, "Ciudad Madero"],
        [813, "Tampico"],
        [814, "Ciudad Mante"],
        [818, "Matamoros"],
        [821, "Colombia"],
        [821, "Nuevo Laredo"],
        [822, "Reynosa"],
        [823, "R\xedo Bravo"],
        [825, "Soto La Marina"],
        [826, "Valle Hermoso"],
        [830, "Tlaxcala"],
        [832, "Apizaco"],
        [834, "Santa Ana Chiautempan"],
        [840, "Jalapa"],
        [841, "Acayucan"],
        [843, "Agua Dulce"],
        [845, "\xc1lamo"],
        [846, "Altotonga"],
        [848, "Banderilla"],
        [849, "Boca del R\xedo"],
        [852, "Ciudad Mendoza"],
        [853, "Coatepec"],
        [854, "Coatzacoalcos"],
        [855, "C\xf3rdoba"],
        [856, "Cosamaloapan"],
        [860, "Cuitl\xe1huac"],
        [863, "Fort\xedn de las Flores"],
        [864, "Guti\xe9rrez Zamora"],
        [865, "Huatusco"],
        [867, "Isla"],
        [868, "Ixtaczoquitl\xe1n"],
        [869, "J\xe1ltipan"],
        [871, "Juan Rodr\xedguez Clara"],
        [872, "Villa Jos\xe9 Cardel"],
        [873, "Las Choapas"],
        [875, "Naranjos"],
        [876, "Mart\xednez de la Torre"],
        [877, "Minatitl\xe1n"],
        [878, "Misantla"],
        [879, "Nanchital"],
        [882, "Orizaba"],
        [885, "Papantla"],
        [886, "Perote"],
        [888, "Poza Rica"],
        [889, "R\xedo Blanco"],
        [890, "San Andr\xe9s Tuxtla"],
        [891, "San Rafael"],
        [894, "Plat\xf3n S\xe1nchez"],
        [894, "Tantoyuca"],
        [895, "Tempoal"],
        [898, "Tierra Blanca"],
        [901, "Tlapacoyan"],
        [903, "T\xfaxpam de Rodr\xedguez Cano"],
        [905, "Cd. Industrial Framboyan"],
        [905, "Veracruz"],
        [910, "M\xe9rida"],
        [913, "Motul"],
        [914, "Oxkutzcab"],
        [915, "Progreso"],
        [917, "Ticul"],
        [918, "Tizim\xedn"],
        [920, "Valladolid"],
        [930, "Zacatecas"],
        [933, "Fresnillo"],
        [934, "Guadalupe"],
        [935, "Jalpa"],
        [936, "Jerez de G. Salinas"],
        [938, "Juchipila"],
        [939, "Loreto"],
        [946, "Nochistl\xe1n"],
        [958, "Valpara\xedso"],
        [960, "Calera de V. Rosales"]
    ]
};
"object" == typeof module && (module.exports = clabe), "object" == typeof window && (window.clabe = clabe), $(document).on("turbolinks:load", function() {
        $("#chepina-modal").on("show.bs.modal", function(e) {
            let t = $(e.relatedTarget),
                n = $("#chepina-image"),
                i = t.data("chepina"),
                r = t.data("title");
            n.attr("src", "https://crm.grupoorve.mx/" + i), n.attr("alt", r)
        })
    }), $(document).on("turbolinks:load", function() {
        const e = $("#bank_account_clabe");
        e.inputmask({ mask: "9999 9999 9999 999999" }), e.on("blur", function() {
            const e = $(this).val().replace(/[^0-9\.]+/g, ""),
                t = clabe.validate(e),
                n = $("input[type='submit']"),
                i = $("#clabe");
            "" !== e ? t.ok ? (n.prop("disabled", !1), i.val(t.bank), Swal.fire({ title: t.bank, text: "La CLABE " + e + " es v\xe1lida", type: "success", confirmButtonText: "Ok" })) : (n.prop("disabled", !0), Swal.fire({ title: "\xa1Error!", text: "La CLABE es inv\xe1lida", type: "error", confirmButtonText: "Ok" })) : n.prop("disabled", !1)
        })
    }), $(document).on("turbolinks:load", function() {
        function e(e) { return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()) }
        $("#client_main_phone").inputmask({ mask: "(999) 999 9999" }), $("#client_optional_phone").inputmask({ mask: "(999) 999 9999" }), $("#civil_status").on("change", function() {
            const e = $("#civil_status option:selected").val(),
                t = $("#regime").parent("div");
            "Casado" === e ? (t.removeClass("d-none"), t.find("select").prop("disabled", !1)) : (t.addClass("d-none"), t.find("select").prop("disabled", !0))
        }), $("#client_person").on("change", function() {
            const e = $("#client_person option:selected"),
                t = $(".moral-person"),
                n = $(".physical-person");
            "physical" === e.val() ? (n.removeClass("d-none"), n.find("input").prop("disabled", !1), n.find("select").prop("disabled", !1), t.addClass("d-none"), t.find("input").prop("disabled", !0), t.find("select").prop("disabled", !0)) : (n.addClass("d-none"), n.find("input").prop("disabled", !0), n.find("select").prop("disabled", !0), t.removeClass("d-none"), t.find("input").prop("disabled", !1), t.find("select").prop("disabled", !1))
        }), $("#client_additional_country").on("change", function() {
            const e = $("#client_additional_country option:selected"),
                t = $(".inside-mexico"),
                n = $(".outside-mexico");
            "" !== e.val() ? "M\xe9xico" === e.val() ? (t.removeClass("d-none"), t.find("input").prop("disabled", !1), t.find("select").prop("disabled", !1), n.addClass("d-none"), n.find("input").prop("disabled", !0)) : (n.removeClass("d-none"), n.find("input").prop("disabled", !1), t.addClass("d-none"), t.find("input").prop("disabled", !0)) : (t.addClass("d-none"), t.find("input").prop("disabled", !0), n.addClass("d-none"), n.find("input").prop("disabled", !0))
        }), $("#reassignClientModal").on("show.bs.modal", function(e) {
            let t = $(e.relatedTarget),
                n = $("#save-salesman"),
                i = t.data("client_id");
            n.data("client_id", i)
        }), $("#save-salesman").click(function() {
            let e = $(this).data("client_id"),
                t = $("select[name=salesman]").val(),
                n = "/clients/" + e + "/reassign",
                i = { salesman: t };
            "" !== t ? $.ajax({ type: "POST", contentType: "application/json", url: n, data: JSON.stringify(i), success: function() { $("#reassignClientModal").modal("hide") }, error: function() {} }) : Swal.fire({ title: "Error!", text: "Necesitas selecionar un vendedor", type: "error", confirmButtonText: "Ok" })
        }), $("#client_email").on("change", function() {
            const t = $("input[type=submit]");
            let n = $("input[name='client[email]']").val();
            if (e(n)) {
                let e = "/clients/validate_email",
                    i = { email: n };
                $.ajax({ type: "POST", contentType: "application/json", url: e, data: JSON.stringify(i), success: function(e) { e ? t.prop("disabled", !1) : (Swal.fire({ title: "\xa1Error!", text: "Ya existe un cliente con ese correo electr\xf3nico", type: "error", confirmButtonText: "Ok" }), t.prop("disabled", !0)) }, error: function() {} })
            } else Swal.fire({ title: "\xa1Error!", text: "El correo electr\xf3nico es inv\xe1lido", type: "error", confirmButtonText: "Ok" }), t.prop("disabled", !0)
        }), $("#colony").on("change", function() {
            const e = $("#colony option:selected").val(),
                t = $(".custom-colony");
            "custom" === e ? (t.removeClass("d-none"), t.find("input").prop("disabled", !1)) : (t.addClass("d-none"), t.find("input").prop("disabled", !0))
        })
    }), $(document).on("turbolinks:load", function() { $(".voucher").click(function() { $('input[name="commission[voucher]"]').click() }), $('input[name="commission[voucher]"]').on("change", function() { $(".voucher").addClass("icon-file-uploaded"), $(".file-submit").prop("disabled", !1) }) }), $(document).on("turbolinks:load", function() { $("[data-color]").colorpicker({ format: "hex" }), $("[data-activate]").bootstrapToggle() }), $(document).ready(() => { $(".datepicker").datepicker({ todayHighlight: !0, orientation: "auto top", format: "dd-mm-yyyy" }) }),
    function(e) {
        var t, n = { title: "Confirmar acci\xf3n", commit: "Confirmar", commitClass: "btn btn-danger", cancel: "Regresar", cancelClass: "btn btn-default", fade: !0, verifyClass: "form-control", elements: ["a[data-confirm]", "button[data-confirm]", "input[type=submit][data-confirm]"], focus: "commit", zIndex: 1050, modalClass: !1, show: !0 };
        window.dataConfirmModal = {
            setDefaults: function(n) { t = e.extend(t, n) },
            restoreDefaults: function() { t = e.extend({}, n) },
            confirm: function(e) {
                var t = r(e);
                t.spawn(), t.on("hidden.bs.modal", function() { t.remove() }), t.find(".commit").on("click", function() { e.onConfirm && e.onConfirm.call && e.onConfirm.call(), t.modal("hide") }), t.find(".cancel").on("click", function() { e.onCancel && e.onCancel.call && e.onCancel.call(), t.modal("hide") })
            }
        }, dataConfirmModal.restoreDefaults();
        var i = function(e) {
                var t = { title: e.data("title") || e.attr("title") || e.data("original-title"), text: e.data("confirm"), focus: e.data("focus"), method: e.data("method"), modalClass: e.data("modal-class"), commit: e.data("commit"), commitClass: e.data("commit-class"), cancel: e.data("cancel"), cancelClass: e.data("cancel-class"), remote: e.data("remote"), verify: e.data("verify"), verifyRegexp: e.data("verify-regexp"), verifyLabel: e.data("verify-text"), verifyRegexpCaseInsensitive: e.data("verify-regexp-caseinsensitive"), backdrop: e.data("backdrop") || !0, keyboard: e.data("keyboard") || !0, show: e.data("show") || !0 },
                    n = r(t);
                return n.find(".commit").on("click", function() { e.get(0).click(), n.modal("hide") }), n
            },
            r = function(n) {
                var i = "confirm-modal-" + String(Math.random()).slice(2, -1),
                    r = t.fade ? "fade" : "",
                    o = n.modalClass ? n.modalClass : t.modalClass,
                    a = e('<div id="' + i + '" class="modal ' + o + " " + r + '" tabindex="-1" role="dialog" aria-labelledby="' + i + 'Label" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 id="' + i + 'Label" class="modal-title"></h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"></div><div class="modal-footer"><button class="btn cancel" data-dismiss="modal" aria-hidden="true"></button><button class="btn commit"></button></div></div></div></div>'),
                    s = current = t.zIndex;
                e(".modal.in").not("#" + i).each(function() { current = parseInt(e(this).css("z-index"), 10), current > s && (s = current) }), a.css("z-index", parseInt(s) + 1), a.find(".modal-title").text(n.title || t.title);
                var l = a.find(".modal-body");
                e.each((n.text || "").split(/\n{2}/), function(t, n) { l.append(e("<p/>").html(n)) });
                var c = a.find(".commit");
                c.text(n.commit || t.commit), c.addClass(n.commitClass || t.commitClass);
                var u, d = a.find(".cancel");
                if (d.text(n.cancel || t.cancel), d.addClass(n.cancelClass || t.cancelClass), n.remote && c.attr("data-dismiss", "modal"), n.verify || n.verifyRegexp) {
                    var h;
                    if (c.prop("disabled", !0), n.verifyRegexp) {
                        var p = n.verifyRegexpCaseInsensitive,
                            f = n.verifyRegexp,
                            m = new RegExp(f, p ? "i" : "");
                        h = function(e) { return e.match(m) }
                    } else h = function(e) { return n.verify == e };
                    var g = e("<input/>", { type: "text", "class": t.verifyClass }).on("keyup", function() { c.prop("disabled", !h(e(this).val())) });
                    a.on("shown.bs.modal", function() { g.focus() }), a.on("hidden.bs.modal", function() { g.val("").trigger("keyup") }), n.verifyLabel && l.append(e("<p>", { text: n.verifyLabel })), l.append(g)
                }
                return u = n.focus ? n.focus : "delete" == n.method ? "cancel" : t.focus, u = a.find("." + u), a.on("shown.bs.modal", function() { u.focus() }), e("body").append(a), a.spawn = function() { return a.modal({ backdrop: n.backdrop, keyboard: n.keyboard, show: n.show }) }, a
            },
            o = function(e) { var t = e.data("confirm-modal"); return t || (t = i(e), e.data("confirm-modal", t)), t };
        if (e.fn.confirmModal = function() { var t = o(e(this)); return t.spawn(), t }, e.rails) {
            var a = window.confirm;
            e(document).delegate(t.elements.join(", "), "confirm", function() {
                var t = e(this),
                    n = o(t);
                return n.is(":visible") ? (window.confirm = function() { return !0 }, n.one("hidden.bs.modal", function() { window.confirm = a }), !0) : (n.spawn(), !1)
            })
        }
    }(jQuery), $(document).on("turbolinks:load", function() {
        $("[data-remote]").on("ajax:beforeSend", function() {
            const e = $("body"),
                t = $("<div class='modal-backdrop fade'></div>"),
                n = $('<div id="loader" class="modal fade" style="display: block;">\n        <div class="modal-loader">\n        <div class="spinner-border text-light">\n        <span class="sr-only">Cargando...</span>\n        </div>\n        </div>\n        </div>');
            e.append(t), e.append(n), t.addClass("show"), n.addClass("show"), e.addClass("modal-open")
        }), $("[data-remote]").on("ajax:complete", function() {
            $("body");
            const e = $(".modal-backdrop"),
                t = $("#loader");
            e.remove(), t.remove(), $("body").removeClass("modal-open")
        }), $("[data-remote]").on("ajax:error", function() { Swal.fire({ icon: "error", title: "Oops...", text: "Hubo un error, por favor int\xe9ntalo de nuevo.", customClass: { confirmButton: "btn btn-success", cancelButton: "btn btn-danger" }, buttonsStyling: !1 }) })
    }), $(document).on("turbolinks:load", function() {
        $("#enterprise_rfc").on("blur", function() {
                let e;
                const t = $("#enterprise_rfc"),
                    n = t.val();
                e = 12 == n.length ? "^(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))" : "^(([A-Z]|[a-z]|s){1})(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))";
                const i = new RegExp(e);
                return null == n.match(i) ? (t.addClass("is-invalid"), t.removeClass("is-valid"), !1) : (t.removeClass("is-invalid"), t.addClass("is-valid"), !0)
            }),
            function() {
                "use strict";
                window.addEventListener("load", function() {
                    var e = document.getElementsByClassName("needs-validation");
                    Array.prototype.filter.call(e, function(e) { e.addEventListener("submit", function(t) {!1 === e.checkValidity() && (t.preventDefault(), t.stopPropagation()), e.classList.add("was-validated") }, !1) })
                }, !1)
            }()
    }), $(document).on("turbolinks:load", function() {
        function e(e) { return "/folders/" + e + "/change_status" }
        $(".cancelFolder").click(function() {
            let e = "/folders/" + $(this).data("folder_id") + "/cancel",
                t = { folder: { status: "canceled" } };
            Swal.fire({ title: "Cancelar Expediente", text: "\xbfEst\xe1s seguro que deseas cancelar el expediente?", type: "warning", showCancelButton: !0, confirmButtonColor: "#3085d6", cancelButtonColor: "#d33", confirmButtonText: "Si", cancelButtonText: "No" }).then(function(n) { n.value && $.ajax({ type: "PATCH", contentType: "application/json", url: e, data: JSON.stringify(t), success: function() {}, error: function() {} }) })
        }), $(".changeStatus").click(function() {
            let t = $(this).data("folder_id"),
                n = $(this).data("status"),
                i = e(t),
                r = { folder: { status: n } };
            $.ajax({ type: "PATCH", contentType: "application/json", url: i, data: JSON.stringify(r), success: function() { $("#edit").addClass("d-none"), $("#folder-actions").addClass("d-none"), $("#folderFiles").addClass("border-right-radius") }, error: function() {} })
        }), $("#coownerModal").on("show.bs.modal", function(e) {
            let t = $(e.relatedTarget),
                n = $("#saveCoowner"),
                i = t.data("folder_id");
            n.data("folder_id", i)
        }), $('[data-toggle="tooltip"]').tooltip(), $("#saveCoowner").click(function() {
            let e = $(this).data("folder_id"),
                t = $("select[name=client]").val(),
                n = "/folders/" + e + "/add_client",
                i = { client: t };
            "" !== t ? $.ajax({ type: "POST", contentType: "application/json", url: n, data: JSON.stringify(i), success: function() { $("#saleModal").modal("hide") }, error: function() {} }) : Swal.fire({ title: "Error!", text: "Necesitas selecionar un cliente", type: "error", confirmButtonText: "Ok" })
        }), $(".bank_deposit").click(function() { $('input[name="folder[bank_deposit]"]').click() }), $('input[name="folder[bank_deposit]"]').on("change", function() { $(".bank_deposit").addClass("icon-file-uploaded"), $(".file-submit").prop("disabled", !1) }), $(".down_payment_voucher").click(function() { $('input[name="folder[down_payment_voucher]"]').click() }), $('input[name="folder[down_payment_voucher]"]').on("change", function() { $(".down_payment_voucher").addClass("icon-file-uploaded"), $(".file-submit").prop("disabled", !1) }), $(".reserve_receipt").click(function() { $('input[name="folder[reserve_receipt]"]').click() }), $('input[name="folder[reserve_receipt]"]').on("change", function() { $(".reserve_receipt").addClass("icon-file-uploaded"), $(".file-submit").prop("disabled", !1) }), $(".federal_cedula").click(function() { $('input[name="folder[federal_cedula]"]').click() }), $('input[name="folder[federal_cedula]"]').on("change", function() { $(".federal_cedula").addClass("icon-file-uploaded"), $(".file-submit").prop("disabled", !1) }), $(".down_payment_receipt").click(function() { $('input[name="folder[down_payment_receipt]"]').click() }), $('input[name="folder[down_payment_receipt]"]').on("change", function() { $(".down_payment_receipt").addClass("icon-file-uploaded"), $(".file-submit").prop("disabled", !1) }), $(".conditions_purchase").click(function() { $('input[name="folder[conditions_purchase]"]').click() }), $('input[name="folder[conditions_purchase]"]').on("change", function() { $(".conditions_purchase").addClass("icon-file-uploaded"), $(".file-submit").prop("disabled", !1) }), $(".marriage_act").click(function() { $('input[name="folder[marriage_act]"]').click() }), $('input[name="folder[marriage_act]"]').on("change", function() { $(".marriage_act").addClass("icon-file-uploaded"), $(".file-submit").prop("disabled", !1) }), $(".agree_letter").click(function() { $('input[name="folder[agree_letter]"]').click() }), $('input[name="folder[agree_letter]"]').on("change", function() { $(".agree_letter").addClass("icon-file-uploaded"), $(".file-submit").prop("disabled", !1) }), $(".amortization_table").click(function() { $('input[name="folder[amortization_table]"]').click() }), $('input[name="folder[amortization_table]"]').on("change", function() { $(".amortization_table").addClass("icon-file-uploaded"), $(".file-submit").prop("disabled", !1) }), $(".purchase_promise").click(function() { $('input[name="folder[purchase_promise]"]').click() }), $('input[name="folder[purchase_promise]"]').on("change", function() { $(".purchase_promise").addClass("icon-file-uploaded"), $(".file-submit").prop("disabled", !1) }), $(".promissory_note").click(function() { $('input[name="folder[promissory_note]"]').click() }), $('input[name="folder[promissory_note]"]').on("change", function() { $(".promissory_note").addClass("icon-file-uploaded"), $(".file-submit").prop("disabled", !1) });
        const t = e => {
            $(`${e} .official_identification`).click(function() { $(`${e} input[name="client[official_identification]"]`).click() }), $(`${e} input[name="client[official_identification]"]`).on("change", function() { $(`${e} .official_identification`).addClass("icon-file-uploaded"), $(`${e} .file-client-submit`).prop("disabled", !1) }), $(`${e} .curp`).click(function() { $(`${e} input[name="client[curp]"]`).click() }), $(`${e} input[name="client[curp]"]`).on("change", function() { $(`${e} .curp`).addClass("icon-file-uploaded"), $(`${e} .file-client-submit`).prop("disabled", !1) }), $(`${e} .address_proof`).click(function() {
                $(`${e} input[name="client[address_proof]"]`).click()
            }), $(`${e} input[name="client[address_proof]"]`).on("change", function() { $(`${e} .address_proof`).addClass("icon-file-uploaded"), $(`${e} .file-client-submit`).prop("disabled", !1) }), $(`${e} .fiscal_act`).click(function() { $(`${e} input[name="client[fiscal_act]"]`).click() }), $(`${e} input[name="client[fiscal_act]"]`).on("change", function() { $(`${e} .fiscal_act`).addClass("icon-file-uploaded"), $(`${e} .file-client-submit`).prop("disabled", !1) }), $(`${e} .constitutional_act`).click(function() { $(`${e} input[name="client[constitutional_act]"]`).click() }), $(`${e} input[name="client[constitutional_act]"]`).on("change", function() { $(`${e} .constitutional_act`).addClass("icon-file-uploaded"), $(`${e} .file-client-submit`).prop("disabled", !1) })
        };
        t("#client"), t("#client_2"), t("#client_3"), t("#client_4"), t("#client_5"), t("#client_6"), $("#project").on("change", function() {
            const e = $("#project option:selected").data("phases"),
                t = $("#phase"),
                n = $("#stage");
            t.find("option").not(":first").remove(), n.find("option").not(":first").remove(), n.prop("disabled", !0), n.addClass("bg-input-disabled"), e ? (e.forEach(e => { t.append("<option value=" + e.id + " data-stages='" + JSON.stringify(e.stages) + "'>" + e.name + "</option>") }), t.prop("disabled", !1), t.removeClass("bg-input-disabled")) : (t.prop("disabled", !0), t.addClass("bg-input-disabled"))
        }), $("#phase").on("change", function() {
            const e = $("#phase option:selected").data("stages"),
                t = $("#stage");
            t.find("option").not(":first").remove(), e ? (e.forEach(e => { t.append("<option value=" + e.id + ">" + e.name + "</option>") }), t.prop("disabled", !1), t.removeClass("bg-input-disabled")) : (t.prop("disabled", !0), t.addClass("bg-input-disabled"))
        });
        const n = window.location.href;
        let i = new URL(n);
        if (i.searchParams.get("project")) {
            const e = $("#project option:selected").data("phases"),
                t = $("#phase");
            if (t.find("option").not(":first").remove(), e) {
                e.forEach(e => {
                    const n = i.searchParams.get("phase");
                    Number(n) === e.id ? t.append("<option value=" + e.id + " data-stages='" + JSON.stringify(e.stages) + "'selected>" + e.name + "</option>") : t.append("<option value=" + e.id + " data-stages='" + JSON.stringify(e.stages) + "'>" + e.name + "</option>")
                }), t.prop("disabled", !1), t.removeClass("bg-input-disabled");
                const n = $("#phase option:selected").data("stages"),
                    r = $("#stage");
                r.find("option").not(":first").remove(), n && (n.forEach(e => {
                    const t = i.searchParams.get("stage");
                    Number(t) === e.id ? r.append("<option value=" + e.id + " selected>" + e.name + "</option>") : r.append("<option value=" + e.id + ">" + e.name + "</option>")
                }), r.prop("disabled", !1), r.removeClass("bg-input-disabled"))
            }
        }
    }), $(document).on("turbolinks:load", function() {
        const e = (e, t, n, i, r) => `/projects/${e}/phases/${t}/stages/${n}/blueprints/${i}/blueprint_lots/${r}.json`,
            t = e => "for_sale" === e ? "Disponible" : "reserved" === e ? "Reservado" : "sold" === e ? "Vendido" : "locked" === e ? "Fuera de Venta" : void 0;
        $('[rel="tooltip"]').tooltip({ trigger: "hover" }), $("input:file").change(function() { $(this).val() && $("input:submit").attr("disabled", !1) }), $("#assignLotModal").on("show.bs.modal", function(e) {
            const t = $(e.relatedTarget).data("lot-name");
            $("#lot_name").text(t), $("#assign_lot").data("lot_name", t);
            const n = $(e.relatedTarget).data("lot-id");
            $("#lot_id").val(n);
            const i = $(e.relatedTarget).data("project-id");
            $("#project_id").val(i);
            const r = $(e.relatedTarget).data("phase-id");
            $("#phase_id").val(r);
            const o = $(e.relatedTarget).data("stage-id");
            $("#stage_id").val(o)
        }), $(".assignable").click(function() {
            const n = $(this),
                i = Swal.mixin({ toast: !0, position: "top-end", showConfirmButton: !1, timer: 3e3 }),
                r = $("#lot_id").val(),
                o = $("#project_id").val(),
                a = $("#phase_id").val(),
                s = $("#stage_id").val(),
                l = n.data("blueprint_lot_id"),
                c = n.data("blueprint_id");
            $.ajax({ type: "PUT", contentType: "application/json", url: e(o, a, s, c, l), data: JSON.stringify({ blueprint_lot: { lot_id: r } }), success: e => { $("#lot-" + r).addClass("d-none"), n.addClass("assigned"), n.removeClass("assignable"), n.data("id", e.id), n.data("status", e.lot.status), n.attr("data-original-title", `${e.lot.name}<br>Estado: ${t(e.lot.status)}`), $(`[data-id=${r}]`).find(".delete-button").hide(), $(`[data-id=${r}]`).find(".deallocate-button").show(), $(`[data-id=${r}]`).find(".assign-button").hide(), $("#assignLotModal").modal("hide"), i.fire({ type: "success", title: `Lote ${e.lot.name} asignado.` }) }, error: function(e) { console.log(e), $("#assignLotModal").modal("hide"), i.fire({ type: "warn", title: "Hubo un error, por favor intentalo de nuevo." }) } })
        })
    }), $(document).on("turbolinks:load", function() {
        $("#pay-button").on("click", function(n) {
            $("#pay-button").prop("disabled", !0), n.preventDefault(), OpenPay.setId(document.getElementById("merchant_id").value), OpenPay.setApiKey(document.getElementById("public_key").value), OpenPay.setSandboxMode(!0), OpenPay.deviceData.setup("payment-form", "device_session_id");
            const i = { holder_name: $("#holder_name").val(), card_number: $("#card_number").val().replace(/\s+/g, ""), expiration_month: $("#expiration_month").val(), expiration_year: $("#expiration_year").val(), cvv2: $("#cvv2").val().replace(/_+/g, "") };
            OpenPay.token.create(i, e, t)
        });
        const e = function(e) { $("#token_id").val(e.data.id), $("#payment-form").submit() },
            t = function(e) {
                const t = e.data.description !== undefined ? e.data.description : e.message;
                alert("ERROR [" + e.status + "] " + t), $("#pay-button").prop("disabled", !1)
            };
        $("#card_number").inputmask({ mask: "9999 9999 9999 9999" }), $("#expiration_month").inputmask({ mask: "99" }), $("#expiration_year").inputmask({ mask: "99" }), $("#cvv2").inputmask({ mask: "9999" })
    }), $(document).on("turbolinks:load", function() {
        $(".voucher").click(function() { $('input[name="payment[voucher]"]').click() }), $('input[name="payment[voucher]"]').on("change", function() { $(".voucher").addClass("icon-file-uploaded"), $(".file-submit").prop("disabled", !1) }), $("#paymentModal").on("show.bs.modal", e => {
            const t = $(e.relatedTarget),
                n = t.data("number"),
                i = t.data("date"),
                r = t.data("capital"),
                o = t.data("interest"),
                a = t.data("down_payment"),
                s = t.data("payment"),
                l = t.data("amount");
            $("#payment-number").text(n), $("#payment-date").text(i), $("#payment-capital").text(r), $("#payment-interest").text(o), $("#payment-down_payment").text(a), $("#payment-total").text(s), $("#payment-amount").text(l)
        }), $("#adjust").click(function() { $("#adjust").prop("checked") ? $("#months").prop("disabled", !1) : $("#months").prop("disabled", !0) }), $("#payments #save").on("click", function(e) {
            const t = $("#payments");
            let n = !0;
            e.preventDefault(), t.find("input, select").each(function() {
                const e = $(this);
                e[0].checkValidity() ? e.parent().removeClass("is-invalid") : (n = !1, e.parent().addClass("is-invalid"))
            }), n && (t.attr("method", "POST"), t.submit(), t.attr("method", "GET"))
        }), $('a[data-toggle="tab"]').on("shown.bs.tab", function() {
            const e = $(this).attr("href"),
                t = $("#payments");
            "#payment-form" === e ? ($(".capital-payment input, .capital-payment select").prop("disabled", !0), $(".new-payment input, .new-payment select").prop("disabled", !1)) : "#capital-form" === e ? ($(".new-payment input, .new-payment select").prop("disabled", !0), $(".capital-payment input, .capital-payment select").prop("disabled", !1), "" !== $("#restructuring_type").val() ? $("#capital_amount").prop("disabled", !1) : ($("#capital_amount").prop("disabled", !0), $("#adjust_container").addClass("d-none"))) : ($(".capital-payment input, .capital-payment select").prop("disabled", !0), $(".new-payment input, .new-payment select").prop("disabled", !0)), t.submit()
        }), $("#restructuring_type").on("change", function() { "" !== this.value ? $("#capital_amount").prop("disabled", !1) : $("#capital_amount").prop("disabled", !0) })
    }), $(document).on("turbolinks:load", function() {
        const e = (e, t) => { "percentage" === e.val() ? (t.attr("max", 100), t.next().find(".input-group-text").text("%")) : (t.prop("max", null), t.next().find(".input-group-text").text("$")) };
        $("#promotion_downpayment_type").change(function() { e($(this), $("#promotion_downpayment_amount")) }), $("#promotion_initialpayment_type").change(function() { e($(this), $("#promotion_initialpayment_amount")) })
    }), $(document).on("turbolinks:load", function() {
        $("#send-whatsapp-availability").click(function() {
            const e = $(this).data("url");
            window.open(e)
        })
    }), $(document).on("turbolinks:load", function() {
        $("#quote #reserve, #quote #save").on("click", function() {
            const e = $("#quote");
            e.attr("method", "POST"), e.submit(), e.attr("method", "GET")
        }), $("#quote #send_email").on("click", function() {
            const e = $("#quote"),
                t = $("<input>").attr({ type: "hidden", id: "email", name: "email", value: "true" });
            t.appendTo(e), e.submit(), t.remove()
        }), $("#quote #download_pdf").on("click", function(e) {
            e.preventDefault();
            const t = $("#quote").serialize(),
                n = window.location,
                i = n.protocol + "//" + n.host + n.pathname + ".pdf?" + t;
            return window.open(i, "_blank").focus(), !1
        }), $("#payment_way").change(function() {
            const e = $(this).val();
            if (!["percentage", "amount"].includes(e)) return;
            const t = $("#down_payment_percentage_sign .input-group-text"),
                n = $("#down_payment_amount label");
            "percentage" === e && (n.text("Porcentaje de enganche"), t.text("%")), "amount" === e && (n.text("Monto de enganche"), t.text("$"))
        }), $("#custom_down_payment_differ").change(function() { $("#quote").submit() })
    }), $(document).on("turbolinks:load", function() {
        tinymce.init({ menubar: !1 }), $('select[name="setting[data_type]"]').change(function() {
            const e = $("#trix-editor"),
                t = $("#percentage-editor"),
                n = $("#integer-editor");
            switch (e.css("display", "none"), t.css("display", "none"), n.css("display", "none"), $("textarea", e).prop("disabled", !0), $("input", t).prop("disabled", !0), $("input", n).prop("disabled", !0), $(this).val()) {
                case "html":
                    e.css("display", "block"), $("textarea", e).prop("disabled", !1);
                    break;
                case "percentage":
                    t.css("display", "block"), $("input", t).prop("disabled", !1);
                    break;
                case "integer":
                    n.css("display", "block"), $("input", n).prop("disabled", !1)
            }
        })
    }), $(document).on("turbolinks:load", function() {
        $("input[name^='complete-stage-']").change(function() {
            const e = Swal.mixin({ toast: !0, position: "top-end", showConfirmButton: !1, timer: 3e3 }),
                t = $(this).data("stage-id"),
                n = $(this).data("phase-id"),
                i = $(this).data("project-id"),
                r = { active: $(this).val() },
                o = "/projects/" + i + "/phases/" + n + "/stages/" + t + "/status",
                a = $("#complete-stage-" + t).parent().hasClass("off");
            $.ajax({ type: "PUT", contentType: "application/json", url: o, data: JSON.stringify(r), success: function(n) { "error" !== n.status || a ? e.fire({ type: n.status, title: n.message }) : $("#complete-stage-" + t).bootstrapToggle("off") }, error: function(e) { console.log(e) } })
        }), $("input[name^='down_payment_differ'], input[name^='custom_down_payment_differ']").change(function() { $(this).parent().hasClass("off") ? ($("#stage_start_installments").prop("disabled", !0), $("#custom_start_installments").prop("disabled", !0), $("#promotion_start_installments").prop("disabled", !0)) : ($("#stage_start_installments").prop("disabled", !1), $("#custom_start_installments").prop("disabled", !1), $("#promotion_start_installments").prop("disabled", !1)) }), $("input[name^='is_immediate_construction']").change(function() {
            const e = $("#immediate_extra_months"),
                t = e.find("input");
            e.fadeToggle(), this.checked ? t.prop("disabled", !1) : t.prop("disabled", !0)
        })
    }), $(document).on("turbolinks:load", function() {
        $("#user_phone").inputmask({ mask: "(999) 999 9999" });
        const e = (e, t) => { e.click(() => t.click()), t.on("change", () => e.addClass("icon-file-uploaded")) };
        e($("#user_profile .official_identification"), $('#user_profile input[name="user[official_identification]"]')), e($("#user_profile .curp"), $('#user_profile input[name="user[curp]"]')), e($("#user_profile .address_proof"), $('#user_profile input[name="user[address_proof]"]')), e($("#user_profile .rfc"), $('#user_profile input[name="user[rfc]"]')), e($("#user_profile .birth_certificate"), $('#user_profile input[name="user[birth_certificate]"]')), e($("#user_profile .non_criminal_record"), $('#user_profile input[name="user[non_criminal_record]"]')), e($("#user_profile .job_reference"), $('#user_profile input[name="user[job_reference]"]')), e($("#user_profile .recommendation_letter_1"), $('#user_profile input[name="user[recommendation_letter_1]"]')), e($("#user_profile .recommendation_letter_2"), $('#user_profile input[name="user[recommendation_letter_2]"]')), $("#user_role").on("change", function() {
            const e = $("option:selected", $(this)).val(),
                t = `/roles/${e}/verify_reserve_status`;
            "" !== e ? $.ajax({ type: "GET", contentType: "application/json", url: t, success: function(e) { e ? $("#referent_container").removeClass("d-none") : $("#referent_container").addClass("d-none") }, error: function() { $("#referent_container").addClass("d-none") } }) : $("#referent_container").addClass("d-none")
        })
    }), $(document).on("turbolinks:load", function() {
        $("#show-sidebar").click(function() { $(".page-wrapper").toggleClass("toggled") }), $("#close-sidebar").click(function() { $(".page-wrapper").toggleClass("toggled") }), Tablesaw.init(), $('[data-toggle="tooltip"]').tooltip(), $('[data-provide="datepicker"]').datepicker({ format: "yyyy/mm/dd" }), $("select").each(function() {
            const e = $(this).parent();
            $(this).select2({ placeholder: "Seleccione un elemento", allowClear: !0, width: "100%", dropdownParent: e })
        })
    }), $(document).on("turbolinks:before-cache", function() {
        $("select").each(function() {
            const e = $(this);
            e.data("select2") != undefined && e.select2("destroy")
        })
    });