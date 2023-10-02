/*! For license information please see main.28d7b702.js.LICENSE.txt */
!(function () {
  var e = {
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          u = {};
        function s(e, t) {
          l(e, t), l(e + "Capture", t);
        }
        function l(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          h = {},
          p = {};
        function v(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(p, e) ||
                    (!f.call(h, e) &&
                      (d.test(e) ? (p[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var S = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          x = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          T = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          A = Symbol.for("react.suspense"),
          R = Symbol.for("react.suspense_list"),
          L = Symbol.for("react.memo"),
          N = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var O = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var D = Symbol.iterator;
        function V(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (D && e[D]) || e["@@iterator"])
            ? e
            : null;
        }
        var M,
          F = Object.assign;
        function I(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var j = !1;
        function B(e, t) {
          if (!e || j) return "";
          j = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (l) {
                  var r = l;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (l) {
                  r = l;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (l) {
                r = l;
              }
              e();
            }
          } catch (l) {
            if (l && r && "string" === typeof l.stack) {
              for (
                var a = l.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  u = o.length - 1;
                1 <= i && 0 <= u && a[i] !== o[u];

              )
                u--;
              for (; 1 <= i && 0 <= u; i--, u--)
                if (a[i] !== o[u]) {
                  if (1 !== i || 1 !== u)
                    do {
                      if ((i--, 0 > --u || a[i] !== o[u])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= u);
                  break;
                }
            }
          } finally {
            (j = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? I(e) : "";
        }
        function z(e) {
          switch (e.tag) {
            case 5:
              return I(e.type);
            case 16:
              return I("Lazy");
            case 13:
              return I("Suspense");
            case 19:
              return I("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function U(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case x:
              return "Fragment";
            case k:
              return "Portal";
            case E:
              return "Profiler";
            case _:
              return "StrictMode";
            case A:
              return "Suspense";
            case R:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case T:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || "Memo";
              case N:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return U(t);
            case 8:
              return t === _ ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function G(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Q(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          X(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function oe(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ue(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ue(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var le,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (le = le || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = le.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var he = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          pe = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (he.hasOwnProperty(e) && he[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(he).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (he[t] = he[e]);
          });
        });
        var ye = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var Se = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          xe = null,
          _e = null;
        function Ee(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = wa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          xe ? (_e ? _e.push(e) : (_e = [e])) : (xe = e);
        }
        function Ce() {
          if (xe) {
            var e = xe,
              t = _e;
            if (((_e = xe = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Ae() {}
        var Re = !1;
        function Le(e, t, n) {
          if (Re) return e(t, n);
          Re = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Re = !1), (null !== xe || null !== _e) && (Ae(), Ce());
          }
        }
        function Ne(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Oe = !1;
        if (c)
          try {
            var De = {};
            Object.defineProperty(De, "passive", {
              get: function () {
                Oe = !0;
              },
            }),
              window.addEventListener("test", De, De),
              window.removeEventListener("test", De, De);
          } catch (ce) {
            Oe = !1;
          }
        function Ve(e, t, n, r, a, o, i, u, s) {
          var l = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, l);
          } catch (c) {
            this.onError(c);
          }
        }
        var Me = !1,
          Fe = null,
          Ie = !1,
          je = null,
          Be = {
            onError: function (e) {
              (Me = !0), (Fe = e);
            },
          };
        function ze(e, t, n, r, a, o, i, u, s) {
          (Me = !1), (Fe = null), Ve.apply(Be, arguments);
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Ue(e) !== e) throw Error(o(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return He(a), e;
                    if (i === r) return He(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var u = !1, s = a.child; s; ) {
                    if (s === n) {
                      (u = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (u = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!u) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (u = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (u = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!u) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ke(e)
            : null;
        }
        function Ke(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ke(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ge = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Qe = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((ut(e) / st) | 0)) | 0;
              },
          ut = Math.log,
          st = Math.LN2;
        var lt = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var u = i & ~a;
            0 !== u ? (r = ft(u)) : 0 !== (o &= i) && (r = ft(o));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function ht(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = lt;
          return 0 === (4194240 & (lt <<= 1)) && (lt = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function St(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          kt,
          xt,
          _t,
          Et,
          Tt = !1,
          Ct = [],
          Pt = null,
          At = null,
          Rt = null,
          Lt = new Map(),
          Nt = new Map(),
          Ot = [],
          Dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Vt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              At = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              Lt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Nt.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ft(e) {
          var t = ga(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      xt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function It(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Se = r), n.target.dispatchEvent(r), (Se = null), t.shift();
          }
          return !0;
        }
        function jt(e, t, n) {
          It(e) && n.delete(t);
        }
        function Bt() {
          (Tt = !1),
            null !== Pt && It(Pt) && (Pt = null),
            null !== At && It(At) && (At = null),
            null !== Rt && It(Rt) && (Rt = null),
            Lt.forEach(jt),
            Nt.forEach(jt);
        }
        function zt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Tt ||
              ((Tt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
        }
        function Ut(e) {
          function t(t) {
            return zt(t, e);
          }
          if (0 < Ct.length) {
            zt(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && zt(Pt, e),
              null !== At && zt(At, e),
              null !== Rt && zt(Rt, e),
              Lt.forEach(t),
              Nt.forEach(t),
              n = 0;
            n < Ot.length;
            n++
          )
            (r = Ot[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Ot.length && null === (n = Ot[0]).blockedOn; )
            Ft(n), null === n.blockedOn && Ot.shift();
        }
        var Wt = S.ReactCurrentBatchConfig,
          Ht = !0;
        function $t(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), Gt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), Gt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function Gt(e, t, n, r) {
          if (Ht) {
            var a = Yt(e, t, n, r);
            if (null === a) Hr(e, t, r, qt, n), Vt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = Mt(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (At = Mt(At, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Rt = Mt(Rt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Lt.set(o, Mt(Lt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Nt.set(o, Mt(Nt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Vt(e, r), 4 & t && -1 < Dt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && wt(o),
                  null === (o = Yt(e, t, n, r)) && Hr(e, t, r, qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var qt = null;
        function Yt(e, t, n, r) {
          if (((qt = null), null !== (e = ga((e = we(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Qt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          un,
          sn,
          ln = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(ln),
          fn = F({}, ln, { view: 0, detail: 0 }),
          dn = an(fn),
          hn = F({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (un = e.screenY - sn.screenY))
                      : (un = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : un;
            },
          }),
          pn = an(hn),
          vn = an(F({}, hn, { dataTransfer: 0 })),
          mn = an(F({}, fn, { relatedTarget: 0 })),
          yn = an(
            F({}, ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = F({}, ln, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(gn),
          Sn = an(F({}, ln, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          xn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function _n(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = xn[e]) && !!t[e];
        }
        function En() {
          return _n;
        }
        var Tn = F({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = an(Tn),
          Pn = an(
            F({}, hn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          An = an(
            F({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          Rn = an(
            F({}, ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = F({}, hn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Nn = an(Ln),
          On = [9, 13, 27, 32],
          Dn = c && "CompositionEvent" in window,
          Vn = null;
        c && "documentMode" in document && (Vn = document.documentMode);
        var Mn = c && "TextEvent" in window && !Vn,
          Fn = c && (!Dn || (Vn && 8 < Vn && 11 >= Vn)),
          In = String.fromCharCode(32),
          jn = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== On.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function zn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Un = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Te(r),
            0 < (t = Kr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          Gn = null;
        function qn(e) {
          Ir(e, 0);
        }
        function Yn(e) {
          if (G(Sa(e))) return e;
        }
        function Qn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Xn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Kn && (Kn.detachEvent("onpropertychange", nr), (Gn = Kn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(Gn)) {
            var t = [];
            $n(t, Gn, e, we(e)), Le(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Gn = n), (Kn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(Gn);
        }
        function or(e, t) {
          if ("click" === e) return Yn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var ur =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (ur(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ur(e[a], t[a])) return !1;
          }
          return !0;
        }
        function lr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = lr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = lr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function hr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && hr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          yr = null,
          gr = null,
          br = !1;
        function Sr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== q(r) ||
            ("selectionStart" in (r = mr) && hr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && sr(gr, r)) ||
              ((gr = r),
              0 < (r = Kr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          xr = {},
          _r = {};
        function Er(e) {
          if (xr[e]) return xr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in _r) return (xr[e] = n[t]);
          return e;
        }
        c &&
          ((_r = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Tr = Er("animationend"),
          Cr = Er("animationiteration"),
          Pr = Er("animationstart"),
          Ar = Er("transitionend"),
          Rr = new Map(),
          Lr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Nr(e, t) {
          Rr.set(e, t), s(t, [e]);
        }
        for (var Or = 0; Or < Lr.length; Or++) {
          var Dr = Lr[Or];
          Nr(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)));
        }
        Nr(Tr, "onAnimationEnd"),
          Nr(Cr, "onAnimationIteration"),
          Nr(Pr, "onAnimationStart"),
          Nr("dblclick", "onDoubleClick"),
          Nr("focusin", "onFocus"),
          Nr("focusout", "onBlur"),
          Nr(Ar, "onTransitionEnd"),
          l("onMouseEnter", ["mouseout", "mouseover"]),
          l("onMouseLeave", ["mouseout", "mouseover"]),
          l("onPointerEnter", ["pointerout", "pointerover"]),
          l("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Vr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Vr)
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, u, s, l) {
              if ((ze.apply(this, arguments), Me)) {
                if (!Me) throw Error(o(198));
                var c = Fe;
                (Me = !1), (Fe = null), Ie || ((Ie = !0), (je = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ir(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var u = r[i],
                    s = u.instance,
                    l = u.currentTarget;
                  if (((u = u.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  Fr(a, u, l), (o = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (u = r[i]).instance),
                    (l = u.currentTarget),
                    (u = u.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Fr(a, u, l), (o = s);
                }
            }
          }
          if (Ie) throw ((e = je), (Ie = !1), (je = null), e);
        }
        function jr(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var zr = "_reactListening" + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[zr]) {
            (e[zr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[zr] || ((t[zr] = !0), Br("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Qt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Kt;
              break;
            default:
              a = Gt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Oe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var u = r.stateNode.containerInfo;
                if (u === a || (8 === u.nodeType && u.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== u; ) {
                  if (null === (i = ga(u))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = o = i;
                    continue e;
                  }
                  u = u.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = o,
              a = we(n),
              i = [];
            e: {
              var u = Rr.get(e);
              if (void 0 !== u) {
                var s = cn,
                  l = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Cn;
                    break;
                  case "focusin":
                    (l = "focus"), (s = mn);
                    break;
                  case "focusout":
                    (l = "blur"), (s = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = An;
                    break;
                  case Tr:
                  case Cr:
                  case Pr:
                    s = yn;
                    break;
                  case Ar:
                    s = Rn;
                    break;
                  case "scroll":
                    s = dn;
                    break;
                  case "wheel":
                    s = Nn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Pn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== u ? u + "Capture" : null) : u;
                c = [];
                for (var h, p = r; null !== p; ) {
                  var v = (h = p).stateNode;
                  if (
                    (5 === h.tag &&
                      null !== v &&
                      ((h = v),
                      null !== d &&
                        null != (v = Ne(p, d)) &&
                        c.push($r(p, v, h))),
                    f)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((u = new s(u, l, null, n, a)),
                  i.push({ event: u, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(u = "mouseover" === e || "pointerover" === e) ||
                  n === Se ||
                  !(l = n.relatedTarget || n.fromElement) ||
                  (!ga(l) && !l[pa])) &&
                  (s || u) &&
                  ((u =
                    a.window === a
                      ? a
                      : (u = a.ownerDocument)
                      ? u.defaultView || u.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (l = (l = n.relatedTarget || n.toElement)
                          ? ga(l)
                          : null) &&
                        (l !== (f = Ue(l)) || (5 !== l.tag && 6 !== l.tag)) &&
                        (l = null))
                    : ((s = null), (l = r)),
                  s !== l))
              ) {
                if (
                  ((c = pn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (p = "pointer")),
                  (f = null == s ? u : Sa(s)),
                  (h = null == l ? u : Sa(l)),
                  ((u = new c(v, p + "leave", s, n, a)).target = f),
                  (u.relatedTarget = h),
                  (v = null),
                  ga(a) === r &&
                    (((c = new c(d, p + "enter", l, n, a)).target = h),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  s && l)
                )
                  e: {
                    for (d = l, p = 0, h = c = s; h; h = Gr(h)) p++;
                    for (h = 0, v = d; v; v = Gr(v)) h++;
                    for (; 0 < p - h; ) (c = Gr(c)), p--;
                    for (; 0 < h - p; ) (d = Gr(d)), h--;
                    for (; p--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Gr(c)), (d = Gr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && qr(i, u, s, c, !1),
                  null !== l && null !== f && qr(i, f, l, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (u = r ? Sa(r) : window).nodeName &&
                    u.nodeName.toLowerCase()) ||
                ("input" === s && "file" === u.type)
              )
                var m = Qn;
              else if (Hn(u))
                if (Xn) m = ir;
                else {
                  m = ar;
                  var y = rr;
                }
              else
                (s = u.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === u.type || "radio" === u.type) &&
                  (m = or);
              switch (
                (m && (m = m(e, r))
                  ? $n(i, m, n, a)
                  : (y && y(e, u, r),
                    "focusout" === e &&
                      (y = u._wrapperState) &&
                      y.controlled &&
                      "number" === u.type &&
                      ee(u, "number", u.value)),
                (y = r ? Sa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(y) || "true" === y.contentEditable) &&
                    ((mr = y), (yr = r), (gr = null));
                  break;
                case "focusout":
                  gr = yr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), Sr(i, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  Sr(i, n, a);
              }
              var g;
              if (Dn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Un
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Un || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Un && (g = en())
                    : ((Zt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Un = !0))),
                0 < (y = Kr(r, b)).length &&
                  ((b = new Sn(b, e, null, n, a)),
                  i.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = zn(n)) && (b.data = g))),
                (g = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return zn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((jn = !0), In);
                        case "textInput":
                          return (e = t.data) === In && jn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return "compositionend" === e || (!Dn && Bn(e, t))
                          ? ((e = en()), (Jt = Zt = Xt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, "onBeforeInput")).length &&
                  ((a = new Sn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            Ir(i, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Kr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Ne(e, n)) && r.unshift($r(e, o, a)),
              null != (o = Ne(e, t)) && r.push($r(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Gr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var u = n,
              s = u.alternate,
              l = u.stateNode;
            if (null !== s && s === r) break;
            5 === u.tag &&
              null !== l &&
              ((u = l),
              a
                ? null != (s = Ne(n, o)) && i.unshift($r(n, s, u))
                : a || (null != (s = Ne(n, o)) && i.push($r(n, s, u)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Yr = /\r\n?/g,
          Qr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Qr, "");
        }
        function Zr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ua);
                }
              : ra;
        function ua(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ut(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ut(t);
        }
        function la(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          ha = "__reactProps$" + fa,
          pa = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;
        function ga(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[pa] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[pa]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function Sa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function wa(e) {
          return e[ha] || null;
        }
        var ka = [],
          xa = -1;
        function _a(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > xa || ((e.current = ka[xa]), (ka[xa] = null), xa--);
        }
        function Ta(e, t) {
          xa++, (ka[xa] = e.current), (e.current = t);
        }
        var Ca = {},
          Pa = _a(Ca),
          Aa = _a(!1),
          Ra = Ca;
        function La(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ca;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Na(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Oa() {
          Ea(Aa), Ea(Pa);
        }
        function Da(e, t, n) {
          if (Pa.current !== Ca) throw Error(o(168));
          Ta(Pa, t), Ta(Aa, n);
        }
        function Va(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, W(e) || "Unknown", a));
          return F({}, n, r);
        }
        function Ma(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ca),
            (Ra = Pa.current),
            Ta(Pa, e),
            Ta(Aa, Aa.current),
            !0
          );
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Va(e, t, Ra)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(Aa),
              Ea(Pa),
              Ta(Pa, e))
            : Ea(Aa),
            Ta(Aa, n);
        }
        var Ia = null,
          ja = !1,
          Ba = !1;
        function za(e) {
          null === Ia ? (Ia = [e]) : Ia.push(e);
        }
        function Ua() {
          if (!Ba && null !== Ia) {
            Ba = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ia;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ia = null), (ja = !1);
            } catch (a) {
              throw (null !== Ia && (Ia = Ia.slice(e + 1)), Ge(Je, Ua), a);
            } finally {
              (bt = t), (Ba = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ha = 0,
          $a = null,
          Ka = 0,
          Ga = [],
          qa = 0,
          Ya = null,
          Qa = 1,
          Xa = "";
        function Za(e, t) {
          (Wa[Ha++] = Ka), (Wa[Ha++] = $a), ($a = e), (Ka = t);
        }
        function Ja(e, t, n) {
          (Ga[qa++] = Qa), (Ga[qa++] = Xa), (Ga[qa++] = Ya), (Ya = e);
          var r = Qa;
          e = Xa;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Qa = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Xa = o + e);
          } else (Qa = (1 << o) | (n << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Za(e, 1), Ja(e, 1, 0));
        }
        function to(e) {
          for (; e === $a; )
            ($a = Wa[--Ha]), (Wa[Ha] = null), (Ka = Wa[--Ha]), (Wa[Ha] = null);
          for (; e === Ya; )
            (Ya = Ga[--qa]),
              (Ga[qa] = null),
              (Xa = Ga[--qa]),
              (Ga[qa] = null),
              (Qa = Ga[--qa]),
              (Ga[qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Nl(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function uo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = la(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ya ? { id: Qa, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Nl(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function lo(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!uo(e, t)) {
                if (so(e)) throw Error(o(418));
                t = la(n.nextSibling);
                var r = no;
                t && uo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (ho(), Error(o(418)));
            for (; t; ) io(e, t), (t = la(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = la(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? la(e.stateNode.nextSibling) : null;
          return !0;
        }
        function ho() {
          for (var e = ro; e; ) e = la(e.nextSibling);
        }
        function po() {
          (ro = no = null), (ao = !1);
        }
        function vo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var mo = S.ReactCurrentBatchConfig;
        function yo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var go = _a(null),
          bo = null,
          So = null,
          wo = null;
        function ko() {
          wo = So = bo = null;
        }
        function xo(e) {
          var t = go.current;
          Ea(go), (e._currentValue = t);
        }
        function _o(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Eo(e, t) {
          (bo = e),
            (wo = So = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Su = !0), (e.firstContext = null));
        }
        function To(e) {
          var t = e._currentValue;
          if (wo !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === So)
            ) {
              if (null === bo) throw Error(o(308));
              (So = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else So = So.next = e;
          return t;
        }
        var Co = null;
        function Po(e) {
          null === Co ? (Co = [e]) : Co.push(e);
        }
        function Ao(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Po(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ro(e, r)
          );
        }
        function Ro(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Lo = !1;
        function No(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Oo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Do(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Vo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & As))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ro(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Po(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ro(e, n)
          );
        }
        function Mo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Fo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Io(e, t, n, r) {
          var a = e.updateQueue;
          Lo = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            u = a.shared.pending;
          if (null !== u) {
            a.shared.pending = null;
            var s = u,
              l = s.next;
            (s.next = null), null === i ? (o = l) : (i.next = l), (i = s);
            var c = e.alternate;
            null !== c &&
              (u = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === u ? (c.firstBaseUpdate = l) : (u.next = l),
              (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var f = a.baseState;
            for (i = 0, c = l = s = null, u = o; ; ) {
              var d = u.lane,
                h = u.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: h,
                      lane: 0,
                      tag: u.tag,
                      payload: u.payload,
                      callback: u.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    v = u;
                  switch (((d = t), (h = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (p = v.payload)) {
                        f = p.call(h, f, d);
                        break e;
                      }
                      f = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (p = v.payload)
                              ? p.call(h, f, d)
                              : p) ||
                        void 0 === d
                      )
                        break e;
                      f = F({}, f, d);
                      break e;
                    case 2:
                      Lo = !0;
                  }
                }
                null !== u.callback &&
                  0 !== u.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [u]) : d.push(u));
              } else
                (h = {
                  eventTime: h,
                  lane: d,
                  tag: u.tag,
                  payload: u.payload,
                  callback: u.callback,
                  next: null,
                }),
                  null === c ? ((l = c = h), (s = f)) : (c = c.next = h),
                  (i |= d);
              if (null === (u = u.next)) {
                if (null === (u = a.shared.pending)) break;
                (u = (d = u).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (a.baseState = s),
              (a.firstBaseUpdate = l),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Fs |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function jo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Bo = new r.Component().refs;
        function zo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Uo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tl(),
              a = nl(e),
              o = Do(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Vo(e, o, a)) && (rl(t, e, a, r), Mo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tl(),
              a = nl(e),
              o = Do(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Vo(e, o, a)) && (rl(t, e, a, r), Mo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tl(),
              r = nl(e),
              a = Do(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Vo(e, a, r)) && (rl(t, e, r, n), Mo(t, e, r));
          },
        };
        function Wo(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, o);
        }
        function Ho(e, t, n) {
          var r = !1,
            a = Ca,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = To(o))
              : ((a = Na(t) ? Ra : Pa.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? La(e, a)
                  : Ca)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Uo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function $o(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Uo.enqueueReplaceState(t, t.state, null);
        }
        function Ko(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Bo), No(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = To(o))
            : ((o = Na(t) ? Ra : Pa.current), (a.context = La(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (zo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Uo.enqueueReplaceState(a, a.state, null),
              Io(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Go(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Bo && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Yo(e) {
          return (0, e._init)(e._payload);
        }
        function Qo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Dl(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function u(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Il(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function l(e, t, n, r) {
            var o = n.type;
            return o === x
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === N &&
                    Yo(o) === t.type))
              ? (((r = a(t, n.props)).ref = Go(e, t, n)), (r.return = e), r)
              : (((r = Vl(n.type, n.key, n.props, null, e.mode, r)).ref = Go(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = jl(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Ml(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Il("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Vl(t.type, t.key, t.props, null, e.mode, n)).ref = Go(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = jl(t, e.mode, n)).return = e), t;
                case N:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || V(t))
                return ((t = Ml(t, e.mode, n, null)).return = e), t;
              qo(e, t);
            }
            return null;
          }
          function h(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? l(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case N:
                  return h(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || V(n)) return null !== a ? null : f(e, t, n, r, null);
              qo(e, n);
            }
            return null;
          }
          function p(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return l(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case N:
                  return p(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || V(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              qo(t, r);
            }
            return null;
          }
          function v(a, o, u, s) {
            for (
              var l = null, c = null, f = o, v = (o = 0), m = null;
              null !== f && v < u.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var y = h(a, f, u[v], s);
              if (null === y) {
                null === f && (f = m);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (o = i(y, o, v)),
                null === c ? (l = y) : (c.sibling = y),
                (c = y),
                (f = m);
            }
            if (v === u.length) return n(a, f), ao && Za(a, v), l;
            if (null === f) {
              for (; v < u.length; v++)
                null !== (f = d(a, u[v], s)) &&
                  ((o = i(f, o, v)),
                  null === c ? (l = f) : (c.sibling = f),
                  (c = f));
              return ao && Za(a, v), l;
            }
            for (f = r(a, f); v < u.length; v++)
              null !== (m = p(f, a, v, u[v], s)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (o = i(m, o, v)),
                null === c ? (l = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Za(a, v),
              l
            );
          }
          function m(a, u, s, l) {
            var c = V(s);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (
              var f = (c = null), v = u, m = (u = 0), y = null, g = s.next();
              null !== v && !g.done;
              m++, g = s.next()
            ) {
              v.index > m ? ((y = v), (v = null)) : (y = v.sibling);
              var b = h(a, v, g.value, l);
              if (null === b) {
                null === v && (v = y);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (u = i(b, u, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = y);
            }
            if (g.done) return n(a, v), ao && Za(a, m), c;
            if (null === v) {
              for (; !g.done; m++, g = s.next())
                null !== (g = d(a, g.value, l)) &&
                  ((u = i(g, u, m)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return ao && Za(a, m), c;
            }
            for (v = r(a, v); !g.done; m++, g = s.next())
              null !== (g = p(v, a, m, g.value, l)) &&
                (e &&
                  null !== g.alternate &&
                  v.delete(null === g.key ? m : g.key),
                (u = i(g, u, m)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Za(a, m),
              c
            );
          }
          return function e(r, o, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === x &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var l = i.key, c = o; null !== c; ) {
                      if (c.key === l) {
                        if ((l = i.type) === x) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === l ||
                          ("object" === typeof l &&
                            null !== l &&
                            l.$$typeof === N &&
                            Yo(l) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, i.props)).ref = Go(r, c, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === x
                      ? (((o = Ml(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = o))
                      : (((s = Vl(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = Go(r, o, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return u(r);
                case k:
                  e: {
                    for (c = i.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = jl(i, r.mode, s)).return = r), (r = o);
                  }
                  return u(r);
                case N:
                  return e(r, o, (c = i._init)(i._payload), s);
              }
              if (te(i)) return v(r, o, i, s);
              if (V(i)) return m(r, o, i, s);
              qo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Il(i, r.mode, s)).return = r), (r = o)),
                u(r))
              : n(r, o);
          };
        }
        var Xo = Qo(!0),
          Zo = Qo(!1),
          Jo = {},
          ei = _a(Jo),
          ti = _a(Jo),
          ni = _a(Jo);
        function ri(e) {
          if (e === Jo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((Ta(ni, t), Ta(ti, e), Ta(ei, Jo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ea(ei), Ta(ei, t);
        }
        function oi() {
          Ea(ei), Ea(ti), Ea(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = se(t, e.type);
          t !== n && (Ta(ti, e), Ta(ei, n));
        }
        function ui(e) {
          ti.current === e && (Ea(ei), Ea(ti));
        }
        var si = _a(0);
        function li(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function fi() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var di = S.ReactCurrentDispatcher,
          hi = S.ReactCurrentBatchConfig,
          pi = 0,
          vi = null,
          mi = null,
          yi = null,
          gi = !1,
          bi = !1,
          Si = 0,
          wi = 0;
        function ki() {
          throw Error(o(321));
        }
        function xi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ur(e[n], t[n])) return !1;
          return !0;
        }
        function _i(e, t, n, r, a, i) {
          if (
            ((pi = i),
            (vi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? uu : su),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (Si = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (yi = mi = null),
                (t.updateQueue = null),
                (di.current = lu),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((di.current = iu),
            (t = null !== mi && null !== mi.next),
            (pi = 0),
            (yi = mi = vi = null),
            (gi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Ei() {
          var e = 0 !== Si;
          return (Si = 0), e;
        }
        function Ti() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e), yi
          );
        }
        function Ci() {
          if (null === mi) {
            var e = vi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var t = null === yi ? vi.memoizedState : yi.next;
          if (null !== t) (yi = t), (mi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e);
          }
          return yi;
        }
        function Pi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ai(e) {
          var t = Ci(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = mi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var u = a.next;
              (a.next = i.next), (i.next = u);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (u = null),
              l = null,
              c = i;
            do {
              var f = c.lane;
              if ((pi & f) === f)
                null !== l &&
                  (l = l.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === l ? ((s = l = d), (u = r)) : (l = l.next = d),
                  (vi.lanes |= f),
                  (Fs |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === l ? (u = r) : (l.next = s),
              ur(r, t.memoizedState) || (Su = !0),
              (t.memoizedState = r),
              (t.baseState = u),
              (t.baseQueue = l),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (vi.lanes |= i), (Fs |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ri(e) {
          var t = Ci(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var u = (a = a.next);
            do {
              (i = e(i, u.action)), (u = u.next);
            } while (u !== a);
            ur(i, t.memoizedState) || (Su = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Li() {}
        function Ni(e, t) {
          var n = vi,
            r = Ci(),
            a = t(),
            i = !ur(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (Su = !0)),
            (r = r.queue),
            Hi(Vi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== yi && 1 & yi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              ji(9, Di.bind(null, n, r, a, t), void 0, null),
              null === Rs)
            )
              throw Error(o(349));
            0 !== (30 & pi) || Oi(n, t, a);
          }
          return a;
        }
        function Oi(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Di(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Mi(t) && Fi(e);
        }
        function Vi(e, t, n) {
          return n(function () {
            Mi(t) && Fi(e);
          });
        }
        function Mi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ur(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Fi(e) {
          var t = Ro(e, 1);
          null !== t && rl(t, e, 1, -1);
        }
        function Ii(e) {
          var t = Ti();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Pi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nu.bind(null, vi, e)),
            [t.memoizedState, e]
          );
        }
        function ji(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Bi() {
          return Ci().memoizedState;
        }
        function zi(e, t, n, r) {
          var a = Ti();
          (vi.flags |= e),
            (a.memoizedState = ji(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ui(e, t, n, r) {
          var a = Ci();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((o = i.destroy), null !== r && xi(r, i.deps)))
              return void (a.memoizedState = ji(t, n, o, r));
          }
          (vi.flags |= e), (a.memoizedState = ji(1 | t, n, o, r));
        }
        function Wi(e, t) {
          return zi(8390656, 8, e, t);
        }
        function Hi(e, t) {
          return Ui(2048, 8, e, t);
        }
        function $i(e, t) {
          return Ui(4, 2, e, t);
        }
        function Ki(e, t) {
          return Ui(4, 4, e, t);
        }
        function Gi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ui(4, 4, Gi.bind(null, t, e), n)
          );
        }
        function Yi() {}
        function Qi(e, t) {
          var n = Ci();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && xi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xi(e, t) {
          var n = Ci();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && xi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zi(e, t, n) {
          return 0 === (21 & pi)
            ? (e.baseState && ((e.baseState = !1), (Su = !0)),
              (e.memoizedState = n))
            : (ur(n, t) ||
                ((n = vt()), (vi.lanes |= n), (Fs |= n), (e.baseState = !0)),
              t);
        }
        function Ji(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = hi.transition;
          hi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (hi.transition = r);
          }
        }
        function eu() {
          return Ci().memoizedState;
        }
        function tu(e, t, n) {
          var r = nl(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ru(e))
          )
            au(t, n);
          else if (null !== (n = Ao(e, t, n, r))) {
            rl(n, e, r, tl()), ou(n, t, r);
          }
        }
        function nu(e, t, n) {
          var r = nl(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ru(e)) au(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  u = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = u), ur(u, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Po(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (l) {}
            null !== (n = Ao(e, t, a, r)) &&
              (rl(n, e, r, (a = tl())), ou(n, t, r));
          }
        }
        function ru(e) {
          var t = e.alternate;
          return e === vi || (null !== t && t === vi);
        }
        function au(e, t) {
          bi = gi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ou(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var iu = {
            readContext: To,
            useCallback: ki,
            useContext: ki,
            useEffect: ki,
            useImperativeHandle: ki,
            useInsertionEffect: ki,
            useLayoutEffect: ki,
            useMemo: ki,
            useReducer: ki,
            useRef: ki,
            useState: ki,
            useDebugValue: ki,
            useDeferredValue: ki,
            useTransition: ki,
            useMutableSource: ki,
            useSyncExternalStore: ki,
            useId: ki,
            unstable_isNewReconciler: !1,
          },
          uu = {
            readContext: To,
            useCallback: function (e, t) {
              return (Ti().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: To,
            useEffect: Wi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                zi(4194308, 4, Gi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return zi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return zi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ti();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ti();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tu.bind(null, vi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ti().memoizedState = e);
            },
            useState: Ii,
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return (Ti().memoizedState = e);
            },
            useTransition: function () {
              var e = Ii(!1),
                t = e[0];
              return (
                (e = Ji.bind(null, e[1])), (Ti().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vi,
                a = Ti();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Rs)) throw Error(o(349));
                0 !== (30 & pi) || Oi(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Wi(Vi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                ji(9, Di.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ti(),
                t = Rs.identifierPrefix;
              if (ao) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Qa & ~(1 << (32 - it(Qa) - 1))).toString(32) + n)),
                  0 < (n = Si++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          su = {
            readContext: To,
            useCallback: Qi,
            useContext: To,
            useEffect: Hi,
            useImperativeHandle: qi,
            useInsertionEffect: $i,
            useLayoutEffect: Ki,
            useMemo: Xi,
            useReducer: Ai,
            useRef: Bi,
            useState: function () {
              return Ai(Pi);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return Zi(Ci(), mi.memoizedState, e);
            },
            useTransition: function () {
              return [Ai(Pi)[0], Ci().memoizedState];
            },
            useMutableSource: Li,
            useSyncExternalStore: Ni,
            useId: eu,
            unstable_isNewReconciler: !1,
          },
          lu = {
            readContext: To,
            useCallback: Qi,
            useContext: To,
            useEffect: Hi,
            useImperativeHandle: qi,
            useInsertionEffect: $i,
            useLayoutEffect: Ki,
            useMemo: Xi,
            useReducer: Ri,
            useRef: Bi,
            useState: function () {
              return Ri(Pi);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              var t = Ci();
              return null === mi
                ? (t.memoizedState = e)
                : Zi(t, mi.memoizedState, e);
            },
            useTransition: function () {
              return [Ri(Pi)[0], Ci().memoizedState];
            },
            useMutableSource: Li,
            useSyncExternalStore: Ni,
            useId: eu,
            unstable_isNewReconciler: !1,
          };
        function cu(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += z(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fu(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function du(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var hu = "function" === typeof WeakMap ? WeakMap : Map;
        function pu(e, t, n) {
          ((n = Do(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $s || (($s = !0), (Ks = r)), du(0, t);
            }),
            n
          );
        }
        function vu(e, t, n) {
          (n = Do(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                du(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                du(0, t),
                  "function" !== typeof r &&
                    (null === Gs ? (Gs = new Set([this])) : Gs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function mu(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new hu();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Tl.bind(null, e, t, n)), t.then(e, e));
        }
        function yu(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gu(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Do(-1, 1)).tag = 2), Vo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bu = S.ReactCurrentOwner,
          Su = !1;
        function wu(e, t, n, r) {
          t.child = null === e ? Zo(t, null, n, r) : Xo(t, e.child, n, r);
        }
        function ku(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Eo(t, a),
            (r = _i(e, t, n, r, o, a)),
            (n = Ei()),
            null === e || Su
              ? (ao && n && eo(t), (t.flags |= 1), wu(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $u(e, t, a))
          );
        }
        function xu(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Ol(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Vl(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), _u(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return $u(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Dl(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function _u(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((Su = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $u(e, t, a);
              0 !== (131072 & e.flags) && (Su = !0);
            }
          }
          return Cu(e, t, n, r, a);
        }
        function Eu(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ta(Ds, Os),
                (Os |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ta(Ds, Os),
                  (Os |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ta(Ds, Os),
                (Os |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ta(Ds, Os),
              (Os |= r);
          return wu(e, t, a, n), t.child;
        }
        function Tu(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Cu(e, t, n, r, a) {
          var o = Na(n) ? Ra : Pa.current;
          return (
            (o = La(t, o)),
            Eo(t, a),
            (n = _i(e, t, n, r, o, a)),
            (r = Ei()),
            null === e || Su
              ? (ao && r && eo(t), (t.flags |= 1), wu(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $u(e, t, a))
          );
        }
        function Pu(e, t, n, r, a) {
          if (Na(n)) {
            var o = !0;
            Ma(t);
          } else o = !1;
          if ((Eo(t, a), null === t.stateNode))
            Hu(e, t), Ho(t, n, r), Ko(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              u = t.memoizedProps;
            i.props = u;
            var s = i.context,
              l = n.contextType;
            "object" === typeof l && null !== l
              ? (l = To(l))
              : (l = La(t, (l = Na(n) ? Ra : Pa.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((u !== r || s !== l) && $o(t, i, r, l)),
              (Lo = !1);
            var d = t.memoizedState;
            (i.state = d),
              Io(t, r, i, a),
              (s = t.memoizedState),
              u !== r || d !== s || Aa.current || Lo
                ? ("function" === typeof c &&
                    (zo(t, n, c, r), (s = t.memoizedState)),
                  (u = Lo || Wo(t, n, u, r, d, s, l))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = l),
                  (r = u))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Oo(e, t),
              (u = t.memoizedProps),
              (l = t.type === t.elementType ? u : yo(t.type, u)),
              (i.props = l),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = To(s))
                : (s = La(t, (s = Na(n) ? Ra : Pa.current)));
            var h = n.getDerivedStateFromProps;
            (c =
              "function" === typeof h ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((u !== f || d !== s) && $o(t, i, r, s)),
              (Lo = !1),
              (d = t.memoizedState),
              (i.state = d),
              Io(t, r, i, a);
            var p = t.memoizedState;
            u !== f || d !== p || Aa.current || Lo
              ? ("function" === typeof h &&
                  (zo(t, n, h, r), (p = t.memoizedState)),
                (l = Lo || Wo(t, n, l, r, d, p, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, p, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, p, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (i.props = r),
                (i.state = p),
                (i.context = s),
                (r = l))
              : ("function" !== typeof i.componentDidUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Au(e, t, n, r, o, a);
        }
        function Au(e, t, n, r, a, o) {
          Tu(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Fa(t, n, !1), $u(e, t, o);
          (r = t.stateNode), (bu.current = t);
          var u =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Xo(t, e.child, null, o)),
                (t.child = Xo(t, null, u, o)))
              : wu(e, t, u, o),
            (t.memoizedState = r.state),
            a && Fa(t, n, !0),
            t.child
          );
        }
        function Ru(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Da(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Da(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function Lu(e, t, n, r, a) {
          return po(), vo(a), (t.flags |= 256), wu(e, t, n, r), t.child;
        }
        var Nu,
          Ou,
          Du,
          Vu,
          Mu = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fu(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Iu(e, t, n) {
          var r,
            a = t.pendingProps,
            i = si.current,
            u = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((u = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ta(si, 1 & i),
            null === e)
          )
            return (
              lo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  u
                    ? ((a = t.mode),
                      (u = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== u
                        ? ((u.childLanes = 0), (u.pendingProps = s))
                        : (u = Fl(s, a, 0, null)),
                      (e = Ml(e, a, n, null)),
                      (u.return = t),
                      (e.return = t),
                      (u.sibling = e),
                      (t.child = u),
                      (t.child.memoizedState = Fu(n)),
                      (t.memoizedState = Mu),
                      e)
                    : ju(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, u) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Bu(e, t, u, (r = fu(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Fl(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Ml(i, a, u, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xo(t, e.child, null, u),
                    (t.child.memoizedState = Fu(u)),
                    (t.memoizedState = Mu),
                    i);
              if (0 === (1 & t.mode)) return Bu(e, t, u, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Bu(e, t, u, (r = fu((i = Error(o(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (u & e.childLanes)), Su || s)) {
                if (null !== (r = Rs)) {
                  switch (u & -u) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | u)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Ro(e, a), rl(r, e, a, -1));
                }
                return ml(), Bu(e, t, u, (r = fu(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Pl.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = la(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Ga[qa++] = Qa),
                    (Ga[qa++] = Xa),
                    (Ga[qa++] = Ya),
                    (Qa = e.id),
                    (Xa = e.overflow),
                    (Ya = t)),
                  (t = ju(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (u) {
            (u = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var l = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = l),
                  (t.deletions = null))
                : ((a = Dl(i, l)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (u = Dl(r, u))
                : ((u = Ml(u, s, n, null)).flags |= 2),
              (u.return = t),
              (a.return = t),
              (a.sibling = u),
              (t.child = a),
              (a = u),
              (u = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Fu(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (u.memoizedState = s),
              (u.childLanes = e.childLanes & ~n),
              (t.memoizedState = Mu),
              a
            );
          }
          return (
            (e = (u = e.child).sibling),
            (a = Dl(u, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function ju(e, t) {
          return (
            ((t = Fl(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Bu(e, t, n, r) {
          return (
            null !== r && vo(r),
            Xo(t, e.child, null, n),
            ((e = ju(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function zu(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), _o(e.return, t, n);
        }
        function Uu(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Wu(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((wu(e, t, r.children, n), 0 !== (2 & (r = si.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && zu(e, n, t);
                else if (19 === e.tag) zu(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ta(si, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === li(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Uu(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === li(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Uu(t, !0, n, null, o);
                break;
              case "together":
                Uu(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hu(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $u(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fs |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Dl((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Dl(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ku(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Gu(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qu(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Gu(t), null;
            case 1:
            case 17:
              return Na(t.type) && Oa(), Gu(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                Ea(Aa),
                Ea(Pa),
                fi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (ul(oo), (oo = null)))),
                Ou(e, t),
                Gu(t),
                null
              );
            case 5:
              ui(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Du(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Gu(t), null;
                }
                if (((e = ri(ei.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[ha] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      jr("cancel", r), jr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      jr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Vr.length; a++) jr(Vr[a], r);
                      break;
                    case "source":
                      jr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      jr("error", r), jr("load", r);
                      break;
                    case "details":
                      jr("toggle", r);
                      break;
                    case "input":
                      Q(r, i), jr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        jr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), jr("invalid", r);
                  }
                  for (var s in (ge(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var l = i[s];
                      "children" === s
                        ? "string" === typeof l
                          ? r.textContent !== l &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, l, e),
                            (a = ["children", l]))
                          : "number" === typeof l &&
                            r.textContent !== "" + l &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, l, e),
                            (a = ["children", "" + l]))
                        : u.hasOwnProperty(s) &&
                          null != l &&
                          "onScroll" === s &&
                          jr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      K(r), J(r, i, !0);
                      break;
                    case "textarea":
                      K(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ue(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[da] = t),
                    (e[ha] = r),
                    Nu(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        jr("cancel", e), jr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        jr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Vr.length; a++) jr(Vr[a], e);
                        a = r;
                        break;
                      case "source":
                        jr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        jr("error", e), jr("load", e), (a = r);
                        break;
                      case "details":
                        jr("toggle", e), (a = r);
                        break;
                      case "input":
                        Q(e, r), (a = Y(e, r)), jr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          jr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), jr("invalid", e);
                    }
                    for (i in (ge(n, a), (l = a)))
                      if (l.hasOwnProperty(i)) {
                        var c = l[i];
                        "style" === i
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (u.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && jr("scroll", e)
                              : null != c && b(e, i, c, s));
                      }
                    switch (n) {
                      case "input":
                        K(e), J(e, r, !1);
                        break;
                      case "textarea":
                        K(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Gu(t), null;
            case 6:
              if (e && null != t.stateNode) Vu(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Gu(t), null;
            case 13:
              if (
                (Ea(si),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  ho(), po(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[da] = t;
                  } else
                    po(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Gu(t), (i = !1);
                } else null !== oo && (ul(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & si.current)
                        ? 0 === Vs && (Vs = 3)
                        : ml())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Gu(t),
                  null);
            case 4:
              return (
                oi(),
                Ou(e, t),
                null === e && Ur(t.stateNode.containerInfo),
                Gu(t),
                null
              );
            case 10:
              return xo(t.type._context), Gu(t), null;
            case 19:
              if ((Ea(si), null === (i = t.memoizedState))) return Gu(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Ku(i, !1);
                else {
                  if (0 !== Vs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = li(e))) {
                        for (
                          t.flags |= 128,
                            Ku(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ta(si, (1 & si.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Ws &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ku(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = li(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ku(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !ao)
                    )
                      return Gu(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Ws &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ku(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = si.current),
                  Ta(si, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Gu(t), null);
            case 22:
            case 23:
              return (
                dl(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Os) &&
                    (Gu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Gu(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Yu(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Na(t.type) && Oa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                Ea(Aa),
                Ea(Pa),
                fi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ui(t), null;
            case 13:
              if (
                (Ea(si),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                po();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ea(si), null;
            case 4:
              return oi(), null;
            case 10:
              return xo(t.type._context), null;
            case 22:
            case 23:
              return dl(), null;
            default:
              return null;
          }
        }
        (Nu = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ou = function () {}),
          (Du = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = Y(e, a)), (r = Y(e, r)), (i = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ge(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (u.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var l = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && l !== s && (null != l || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (l && l.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in l)
                        l.hasOwnProperty(o) &&
                          s[o] !== l[o] &&
                          (n || (n = {}), (n[o] = l[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = l);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((l = l ? l.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != l && s !== l && (i = i || []).push(c, l))
                      : "children" === c
                      ? ("string" !== typeof l && "number" !== typeof l) ||
                        (i = i || []).push(c, "" + l)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (u.hasOwnProperty(c)
                          ? (null != l && "onScroll" === c && jr("scroll", e),
                            i || s === l || (i = []))
                          : (i = i || []).push(c, l));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Vu = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Qu = !1,
          Xu = !1,
          Zu = "function" === typeof WeakSet ? WeakSet : Set,
          Ju = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                El(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            El(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && ts(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function as(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function os(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[ha],
              delete t[va],
              delete t[ma],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function us(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || us(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ls(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (ls(e, t, n), e = e.sibling; null !== e; )
              ls(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var fs = null,
          ds = !1;
        function hs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (u) {}
          switch (n.tag) {
            case 5:
              Xu || es(n, t);
            case 6:
              var r = fs,
                a = ds;
              (fs = null),
                hs(e, t, n),
                (ds = a),
                null !== (fs = r) &&
                  (ds
                    ? ((e = fs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fs.removeChild(n.stateNode));
              break;
            case 18:
              null !== fs &&
                (ds
                  ? ((e = fs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Ut(e))
                  : sa(fs, n.stateNode));
              break;
            case 4:
              (r = fs),
                (a = ds),
                (fs = n.stateNode.containerInfo),
                (ds = !0),
                hs(e, t, n),
                (fs = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xu &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      ts(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              hs(e, t, n);
              break;
            case 1:
              if (
                !Xu &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (u) {
                  El(n, t, u);
                }
              hs(e, t, n);
              break;
            case 21:
              hs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Xu = (r = Xu) || null !== n.memoizedState),
                  hs(e, t, n),
                  (Xu = r))
                : hs(e, t, n);
              break;
            default:
              hs(e, t, n);
          }
        }
        function vs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zu()),
              t.forEach(function (t) {
                var r = Al.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  u = t,
                  s = u;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (fs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (fs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === fs) throw Error(o(160));
                ps(i, u, a), (fs = null), (ds = !1);
                var l = a.alternate;
                null !== l && (l.return = null), (a.return = null);
              } catch (c) {
                El(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) ys(t, e), (t = t.sibling);
        }
        function ys(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), gs(e), 4 & r)) {
                try {
                  rs(3, e, e.return), as(3, e);
                } catch (m) {
                  El(e, e.return, m);
                }
                try {
                  rs(5, e, e.return);
                } catch (m) {
                  El(e, e.return, m);
                }
              }
              break;
            case 1:
              ms(t, e), gs(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                gs(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  El(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  u = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  l = e.updateQueue;
                if (((e.updateQueue = null), null !== l))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      X(a, i),
                      be(s, u);
                    var c = be(s, i);
                    for (u = 0; u < l.length; u += 2) {
                      var f = l[u],
                        d = l[u + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (s) {
                      case "input":
                        Z(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var h = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var p = i.value;
                        null != p
                          ? ne(a, !!i.multiple, p, !1)
                          : h !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[ha] = i;
                  } catch (m) {
                    El(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), gs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (m) {
                  El(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                gs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (m) {
                  El(e, e.return, m);
                }
              break;
            case 4:
            default:
              ms(t, e), gs(e);
              break;
            case 13:
              ms(t, e),
                gs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Us = Xe())),
                4 & r && vs(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Xu = (c = Xu) || f), ms(t, e), (Xu = c))
                  : ms(t, e),
                gs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Ju = e, f = e.child; null !== f; ) {
                    for (d = Ju = f; null !== Ju; ) {
                      switch (((p = (h = Ju).child), h.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, h, h.return);
                          break;
                        case 1:
                          es(h, h.return);
                          var v = h.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = h), (n = h.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              El(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          es(h, h.return);
                          break;
                        case 22:
                          if (null !== h.memoizedState) {
                            ks(d);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = h), (Ju = p)) : ks(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = d.stateNode),
                              (u =
                                void 0 !== (l = d.memoizedProps.style) &&
                                null !== l &&
                                l.hasOwnProperty("display")
                                  ? l.display
                                  : null),
                              (s.style.display = ve("display", u)));
                      } catch (m) {
                        El(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        El(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), gs(e), 4 & r && vs(e);
            case 21:
          }
        }
        function gs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (us(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cs(e, ss(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ls(e, ss(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (u) {
              El(e, e.return, u);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          (Ju = e), Ss(e, t, n);
        }
        function Ss(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Ju; ) {
            var a = Ju,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Qu;
              if (!i) {
                var u = a.alternate,
                  s = (null !== u && null !== u.memoizedState) || Xu;
                u = Qu;
                var l = Xu;
                if (((Qu = i), (Xu = s) && !l))
                  for (Ju = a; null !== Ju; )
                    (s = (i = Ju).child),
                      22 === i.tag && null !== i.memoizedState
                        ? xs(a)
                        : null !== s
                        ? ((s.return = i), (Ju = s))
                        : xs(a);
                for (; null !== o; ) (Ju = o), Ss(o, t, n), (o = o.sibling);
                (Ju = a), (Qu = u), (Xu = l);
              }
              ws(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Ju = o))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Ju; ) {
            var t = Ju;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xu || as(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Xu)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && jo(t, i, r);
                      break;
                    case 3:
                      var u = t.updateQueue;
                      if (null !== u) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        jo(t, u, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var l = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            l.autoFocus && n.focus();
                            break;
                          case "img":
                            l.src && (n.src = l.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Ut(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Xu || (512 & t.flags && os(t));
              } catch (h) {
                El(t, t.return, h);
              }
            }
            if (t === e) {
              Ju = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Ju = n);
              break;
            }
            Ju = t.return;
          }
        }
        function ks(e) {
          for (; null !== Ju; ) {
            var t = Ju;
            if (t === e) {
              Ju = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Ju = n);
              break;
            }
            Ju = t.return;
          }
        }
        function xs(e) {
          for (; null !== Ju; ) {
            var t = Ju;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    as(4, t);
                  } catch (s) {
                    El(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      El(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    El(t, o, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    El(t, i, s);
                  }
              }
            } catch (s) {
              El(t, t.return, s);
            }
            if (t === e) {
              Ju = null;
              break;
            }
            var u = t.sibling;
            if (null !== u) {
              (u.return = t.return), (Ju = u);
              break;
            }
            Ju = t.return;
          }
        }
        var _s,
          Es = Math.ceil,
          Ts = S.ReactCurrentDispatcher,
          Cs = S.ReactCurrentOwner,
          Ps = S.ReactCurrentBatchConfig,
          As = 0,
          Rs = null,
          Ls = null,
          Ns = 0,
          Os = 0,
          Ds = _a(0),
          Vs = 0,
          Ms = null,
          Fs = 0,
          Is = 0,
          js = 0,
          Bs = null,
          zs = null,
          Us = 0,
          Ws = 1 / 0,
          Hs = null,
          $s = !1,
          Ks = null,
          Gs = null,
          qs = !1,
          Ys = null,
          Qs = 0,
          Xs = 0,
          Zs = null,
          Js = -1,
          el = 0;
        function tl() {
          return 0 !== (6 & As) ? Xe() : -1 !== Js ? Js : (Js = Xe());
        }
        function nl(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & As) && 0 !== Ns
            ? Ns & -Ns
            : null !== mo.transition
            ? (0 === el && (el = vt()), el)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Qt(e.type));
        }
        function rl(e, t, n, r) {
          if (50 < Xs) throw ((Xs = 0), (Zs = null), Error(o(185)));
          yt(e, n, r),
            (0 !== (2 & As) && e === Rs) ||
              (e === Rs && (0 === (2 & As) && (Is |= n), 4 === Vs && sl(e, Ns)),
              al(e, r),
              1 === n &&
                0 === As &&
                0 === (1 & t.mode) &&
                ((Ws = Xe() + 500), ja && Ua()));
        }
        function al(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                u = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (u & n) && 0 === (u & r)) || (a[i] = ht(u, t))
                : s <= t && (e.expiredLanes |= u),
                (o &= ~u);
            }
          })(e, t);
          var r = dt(e, e === Rs ? Ns : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (ja = !0), za(e);
                  })(ll.bind(null, e))
                : za(ll.bind(null, e)),
                ia(function () {
                  0 === (6 & As) && Ua();
                }),
                (n = null);
            else {
              switch (St(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Rl(n, ol.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ol(e, t) {
          if (((Js = -1), (el = 0), 0 !== (6 & As))) throw Error(o(327));
          var n = e.callbackNode;
          if (xl() && e.callbackNode !== n) return null;
          var r = dt(e, e === Rs ? Ns : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = yl(e, r);
          else {
            t = r;
            var a = As;
            As |= 2;
            var i = vl();
            for (
              (Rs === e && Ns === t) ||
              ((Hs = null), (Ws = Xe() + 500), hl(e, t));
              ;

            )
              try {
                bl();
                break;
              } catch (s) {
                pl(e, s);
              }
            ko(),
              (Ts.current = i),
              (As = a),
              null !== Ls ? (t = 0) : ((Rs = null), (Ns = 0), (t = Vs));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = pt(e)) && ((r = a), (t = il(e, a))),
              1 === t)
            )
              throw ((n = Ms), hl(e, 0), sl(e, r), al(e, Xe()), n);
            if (6 === t) sl(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ur(o(), a)) return !1;
                            } catch (u) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = yl(e, r)) &&
                    0 !== (i = pt(e)) &&
                    ((r = i), (t = il(e, i))),
                  1 === t))
              )
                throw ((n = Ms), hl(e, 0), sl(e, r), al(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  kl(e, zs, Hs);
                  break;
                case 3:
                  if (
                    (sl(e, r),
                    (130023424 & r) === r && 10 < (t = Us + 500 - Xe()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tl(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(kl.bind(null, e, zs, Hs), t);
                    break;
                  }
                  kl(e, zs, Hs);
                  break;
                case 4:
                  if ((sl(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var u = 31 - it(r);
                    (i = 1 << u), (u = t[u]) > a && (a = u), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Es(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(kl.bind(null, e, zs, Hs), r);
                    break;
                  }
                  kl(e, zs, Hs);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return al(e, Xe()), e.callbackNode === n ? ol.bind(null, e) : null;
        }
        function il(e, t) {
          var n = Bs;
          return (
            e.current.memoizedState.isDehydrated && (hl(e, t).flags |= 256),
            2 !== (e = yl(e, t)) && ((t = zs), (zs = n), null !== t && ul(t)),
            e
          );
        }
        function ul(e) {
          null === zs ? (zs = e) : zs.push.apply(zs, e);
        }
        function sl(e, t) {
          for (
            t &= ~js,
              t &= ~Is,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ll(e) {
          if (0 !== (6 & As)) throw Error(o(327));
          xl();
          var t = dt(e, 0);
          if (0 === (1 & t)) return al(e, Xe()), null;
          var n = yl(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = il(e, r)));
          }
          if (1 === n) throw ((n = Ms), hl(e, 0), sl(e, t), al(e, Xe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            kl(e, zs, Hs),
            al(e, Xe()),
            null
          );
        }
        function cl(e, t) {
          var n = As;
          As |= 1;
          try {
            return e(t);
          } finally {
            0 === (As = n) && ((Ws = Xe() + 500), ja && Ua());
          }
        }
        function fl(e) {
          null !== Ys && 0 === Ys.tag && 0 === (6 & As) && xl();
          var t = As;
          As |= 1;
          var n = Ps.transition,
            r = bt;
          try {
            if (((Ps.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ps.transition = n), 0 === (6 & (As = t)) && Ua();
          }
        }
        function dl() {
          (Os = Ds.current), Ea(Ds);
        }
        function hl(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ls))
            for (n = Ls.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Oa();
                  break;
                case 3:
                  oi(), Ea(Aa), Ea(Pa), fi();
                  break;
                case 5:
                  ui(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  Ea(si);
                  break;
                case 10:
                  xo(r.type._context);
                  break;
                case 22:
                case 23:
                  dl();
              }
              n = n.return;
            }
          if (
            ((Rs = e),
            (Ls = e = Dl(e.current, null)),
            (Ns = Os = t),
            (Vs = 0),
            (Ms = null),
            (js = Is = Fs = 0),
            (zs = Bs = null),
            null !== Co)
          ) {
            for (t = 0; t < Co.length; t++)
              if (null !== (r = (n = Co[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Co = null;
          }
          return e;
        }
        function pl(e, t) {
          for (;;) {
            var n = Ls;
            try {
              if ((ko(), (di.current = iu), gi)) {
                for (var r = vi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                gi = !1;
              }
              if (
                ((pi = 0),
                (yi = mi = vi = null),
                (bi = !1),
                (Si = 0),
                (Cs.current = null),
                null === n || null === n.return)
              ) {
                (Vs = 1), (Ms = t), (Ls = null);
                break;
              }
              e: {
                var i = e,
                  u = n.return,
                  s = n,
                  l = t;
                if (
                  ((t = Ns),
                  (s.flags |= 32768),
                  null !== l &&
                    "object" === typeof l &&
                    "function" === typeof l.then)
                ) {
                  var c = l,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var h = f.alternate;
                    h
                      ? ((f.updateQueue = h.updateQueue),
                        (f.memoizedState = h.memoizedState),
                        (f.lanes = h.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var p = yu(u);
                  if (null !== p) {
                    (p.flags &= -257),
                      gu(p, u, s, 0, t),
                      1 & p.mode && mu(i, c, t),
                      (l = c);
                    var v = (t = p).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(l), (t.updateQueue = m);
                    } else v.add(l);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    mu(i, c, t), ml();
                    break e;
                  }
                  l = Error(o(426));
                } else if (ao && 1 & s.mode) {
                  var y = yu(u);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      gu(y, u, s, 0, t),
                      vo(cu(l, s));
                    break e;
                  }
                }
                (i = l = cu(l, s)),
                  4 !== Vs && (Vs = 2),
                  null === Bs ? (Bs = [i]) : Bs.push(i),
                  (i = u);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Fo(i, pu(0, l, t));
                      break e;
                    case 1:
                      s = l;
                      var g = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Gs || !Gs.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Fo(i, vu(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wl(n);
            } catch (S) {
              (t = S), Ls === n && null !== n && (Ls = n = n.return);
              continue;
            }
            break;
          }
        }
        function vl() {
          var e = Ts.current;
          return (Ts.current = iu), null === e ? iu : e;
        }
        function ml() {
          (0 !== Vs && 3 !== Vs && 2 !== Vs) || (Vs = 4),
            null === Rs ||
              (0 === (268435455 & Fs) && 0 === (268435455 & Is)) ||
              sl(Rs, Ns);
        }
        function yl(e, t) {
          var n = As;
          As |= 2;
          var r = vl();
          for ((Rs === e && Ns === t) || ((Hs = null), hl(e, t)); ; )
            try {
              gl();
              break;
            } catch (a) {
              pl(e, a);
            }
          if ((ko(), (As = n), (Ts.current = r), null !== Ls))
            throw Error(o(261));
          return (Rs = null), (Ns = 0), Vs;
        }
        function gl() {
          for (; null !== Ls; ) Sl(Ls);
        }
        function bl() {
          for (; null !== Ls && !Ye(); ) Sl(Ls);
        }
        function Sl(e) {
          var t = _s(e.alternate, e, Os);
          (e.memoizedProps = e.pendingProps),
            null === t ? wl(e) : (Ls = t),
            (Cs.current = null);
        }
        function wl(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qu(n, t, Os))) return void (Ls = n);
            } else {
              if (null !== (n = Yu(n, t)))
                return (n.flags &= 32767), void (Ls = n);
              if (null === e) return (Vs = 6), void (Ls = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ls = t);
            Ls = t = e;
          } while (null !== t);
          0 === Vs && (Vs = 5);
        }
        function kl(e, t, n) {
          var r = bt,
            a = Ps.transition;
          try {
            (Ps.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  xl();
                } while (null !== Ys);
                if (0 !== (6 & As)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Rs && ((Ls = Rs = null), (Ns = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qs ||
                    ((qs = !0),
                    Rl(tt, function () {
                      return xl(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ps.transition), (Ps.transition = null);
                  var u = bt;
                  bt = 1;
                  var s = As;
                  (As |= 4),
                    (Cs.current = null),
                    (function (e, t) {
                      if (((ea = Ht), hr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var u = 0,
                                s = -1,
                                l = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                h = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (s = u + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (l = u + r),
                                    3 === d.nodeType &&
                                      (u += d.nodeValue.length),
                                    null !== (p = d.firstChild);

                                )
                                  (h = d), (d = p);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (h === n && ++c === a && (s = u),
                                    h === i && ++f === r && (l = u),
                                    null !== (p = d.nextSibling))
                                  )
                                    break;
                                  h = (d = h).parentNode;
                                }
                                d = p;
                              }
                              n =
                                -1 === s || -1 === l
                                  ? null
                                  : { start: s, end: l };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Ju = t;
                        null !== Ju;

                      )
                        if (
                          ((e = (t = Ju).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Ju = e);
                        else
                          for (; null !== Ju; ) {
                            t = Ju;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        y = v.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : yo(t.type, m),
                                          y
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var S = t.stateNode.containerInfo;
                                    1 === S.nodeType
                                      ? (S.textContent = "")
                                      : 9 === S.nodeType &&
                                        S.documentElement &&
                                        S.removeChild(S.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (w) {
                              El(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Ju = e);
                              break;
                            }
                            Ju = t.return;
                          }
                      (v = ns), (ns = !1);
                    })(e, n),
                    ys(n, e),
                    pr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bs(n, e, a),
                    Qe(),
                    (As = s),
                    (bt = u),
                    (Ps.transition = i);
                } else e.current = n;
                if (
                  (qs && ((qs = !1), (Ys = e), (Qs = a)),
                  (i = e.pendingLanes),
                  0 === i && (Gs = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  al(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if ($s) throw (($s = !1), (e = Ks), (Ks = null), e);
                0 !== (1 & Qs) && 0 !== e.tag && xl(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Zs
                      ? Xs++
                      : ((Xs = 0), (Zs = e))
                    : (Xs = 0),
                  Ua();
              })(e, t, n, r);
          } finally {
            (Ps.transition = a), (bt = r);
          }
          return null;
        }
        function xl() {
          if (null !== Ys) {
            var e = St(Qs),
              t = Ps.transition,
              n = bt;
            try {
              if (((Ps.transition = null), (bt = 16 > e ? 16 : e), null === Ys))
                var r = !1;
              else {
                if (((e = Ys), (Ys = null), (Qs = 0), 0 !== (6 & As)))
                  throw Error(o(331));
                var a = As;
                for (As |= 4, Ju = e.current; null !== Ju; ) {
                  var i = Ju,
                    u = i.child;
                  if (0 !== (16 & Ju.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var l = 0; l < s.length; l++) {
                        var c = s[l];
                        for (Ju = c; null !== Ju; ) {
                          var f = Ju;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Ju = d);
                          else
                            for (; null !== Ju; ) {
                              var h = (f = Ju).sibling,
                                p = f.return;
                              if ((is(f), f === c)) {
                                Ju = null;
                                break;
                              }
                              if (null !== h) {
                                (h.return = p), (Ju = h);
                                break;
                              }
                              Ju = p;
                            }
                        }
                      }
                      var v = i.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var y = m.sibling;
                            (m.sibling = null), (m = y);
                          } while (null !== m);
                        }
                      }
                      Ju = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== u)
                    (u.return = i), (Ju = u);
                  else
                    e: for (; null !== Ju; ) {
                      if (0 !== (2048 & (i = Ju).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return);
                        }
                      var g = i.sibling;
                      if (null !== g) {
                        (g.return = i.return), (Ju = g);
                        break e;
                      }
                      Ju = i.return;
                    }
                }
                var b = e.current;
                for (Ju = b; null !== Ju; ) {
                  var S = (u = Ju).child;
                  if (0 !== (2064 & u.subtreeFlags) && null !== S)
                    (S.return = u), (Ju = S);
                  else
                    e: for (u = b; null !== Ju; ) {
                      if (0 !== (2048 & (s = Ju).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              as(9, s);
                          }
                        } catch (k) {
                          El(s, s.return, k);
                        }
                      if (s === u) {
                        Ju = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Ju = w);
                        break e;
                      }
                      Ju = s.return;
                    }
                }
                if (
                  ((As = a),
                  Ua(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ps.transition = t);
            }
          }
          return !1;
        }
        function _l(e, t, n) {
          (e = Vo(e, (t = pu(0, (t = cu(n, t)), 1)), 1)),
            (t = tl()),
            null !== e && (yt(e, 1, t), al(e, t));
        }
        function El(e, t, n) {
          if (3 === e.tag) _l(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                _l(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Gs || !Gs.has(r)))
                ) {
                  (t = Vo(t, (e = vu(t, (e = cu(n, e)), 1)), 1)),
                    (e = tl()),
                    null !== t && (yt(t, 1, e), al(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Tl(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tl()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Rs === e &&
              (Ns & n) === n &&
              (4 === Vs ||
              (3 === Vs && (130023424 & Ns) === Ns && 500 > Xe() - Us)
                ? hl(e, 0)
                : (js |= n)),
            al(e, t);
        }
        function Cl(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tl();
          null !== (e = Ro(e, t)) && (yt(e, t, n), al(e, n));
        }
        function Pl(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cl(e, n);
        }
        function Al(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Cl(e, n);
        }
        function Rl(e, t) {
          return Ge(e, t);
        }
        function Ll(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Nl(e, t, n, r) {
          return new Ll(e, t, n, r);
        }
        function Ol(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Dl(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Nl(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Vl(e, t, n, r, a, i) {
          var u = 2;
          if (((r = e), "function" === typeof e)) Ol(e) && (u = 1);
          else if ("string" === typeof e) u = 5;
          else
            e: switch (e) {
              case x:
                return Ml(n.children, a, i, t);
              case _:
                (u = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = Nl(12, n, t, 2 | a)).elementType = E), (e.lanes = i), e
                );
              case A:
                return (
                  ((e = Nl(13, n, t, a)).elementType = A), (e.lanes = i), e
                );
              case R:
                return (
                  ((e = Nl(19, n, t, a)).elementType = R), (e.lanes = i), e
                );
              case O:
                return Fl(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      u = 10;
                      break e;
                    case C:
                      u = 9;
                      break e;
                    case P:
                      u = 11;
                      break e;
                    case L:
                      u = 14;
                      break e;
                    case N:
                      (u = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Nl(u, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Ml(e, t, n, r) {
          return ((e = Nl(7, e, r, t)).lanes = n), e;
        }
        function Fl(e, t, n, r) {
          return (
            ((e = Nl(22, e, r, t)).elementType = O),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Il(e, t, n) {
          return ((e = Nl(6, e, null, t)).lanes = n), e;
        }
        function jl(e, t, n) {
          return (
            ((t = Nl(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Bl(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function zl(e, t, n, r, a, o, i, u, s) {
          return (
            (e = new Bl(e, t, n, u, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Nl(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            No(o),
            e
          );
        }
        function Ul(e) {
          if (!e) return Ca;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Na(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Na(n)) return Va(e, n, t);
          }
          return t;
        }
        function Wl(e, t, n, r, a, o, i, u, s) {
          return (
            ((e = zl(n, r, !0, e, 0, o, 0, u, s)).context = Ul(null)),
            (n = e.current),
            ((o = Do((r = tl()), (a = nl(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Vo(n, o, a),
            (e.current.lanes = a),
            yt(e, a, r),
            al(e, r),
            e
          );
        }
        function Hl(e, t, n, r) {
          var a = t.current,
            o = tl(),
            i = nl(a);
          return (
            (n = Ul(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Do(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Vo(a, t, i)) && (rl(e, a, i, o), Mo(e, a, i)),
            i
          );
        }
        function $l(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Kl(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Gl(e, t) {
          Kl(e, t), (e = e.alternate) && Kl(e, t);
        }
        _s = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Aa.current) Su = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (Su = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ru(t), po();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Na(t.type) && Ma(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ta(go, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ta(si, 1 & si.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Iu(e, t, n)
                            : (Ta(si, 1 & si.current),
                              null !== (e = $u(e, t, n)) ? e.sibling : null);
                        Ta(si, 1 & si.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Wu(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ta(si, si.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Eu(e, t, n);
                    }
                    return $u(e, t, n);
                  })(e, t, n)
                );
              Su = 0 !== (131072 & e.flags);
            }
          else (Su = !1), ao && 0 !== (1048576 & t.flags) && Ja(t, Ka, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hu(e, t), (e = t.pendingProps);
              var a = La(t, Pa.current);
              Eo(t, n), (a = _i(null, t, r, e, a, n));
              var i = Ei();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Na(r) ? ((i = !0), Ma(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    No(t),
                    (a.updater = Uo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Ko(t, r, e, n),
                    (t = Au(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    wu(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hu(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ol(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yo(r, e)),
                  a)
                ) {
                  case 0:
                    t = Cu(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Pu(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ku(null, t, r, e, n);
                    break e;
                  case 14:
                    t = xu(null, t, r, yo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Cu(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pu(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 3:
              e: {
                if ((Ru(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Oo(e, t),
                  Io(t, r, null, n);
                var u = t.memoizedState;
                if (((r = u.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: u.cache,
                      pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                      transitions: u.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Lu(e, t, r, n, (a = cu(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Lu(e, t, r, n, (a = cu(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = la(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Zo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((po(), r === a)) {
                    t = $u(e, t, n);
                    break e;
                  }
                  wu(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && lo(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (u = a.children),
                na(r, a)
                  ? (u = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Tu(e, t),
                wu(e, t, u, n),
                t.child
              );
            case 6:
              return null === e && lo(t), null;
            case 13:
              return Iu(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xo(t, null, r, n)) : wu(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ku(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 7:
              return wu(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wu(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (u = a.value),
                  Ta(go, r._currentValue),
                  (r._currentValue = u),
                  null !== i)
                )
                  if (ur(i.value, u)) {
                    if (i.children === a.children && !Aa.current) {
                      t = $u(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        u = i.child;
                        for (var l = s.firstContext; null !== l; ) {
                          if (l.context === r) {
                            if (1 === i.tag) {
                              (l = Do(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (l.next = l)
                                  : ((l.next = f.next), (f.next = l)),
                                  (c.pending = l);
                              }
                            }
                            (i.lanes |= n),
                              null !== (l = i.alternate) && (l.lanes |= n),
                              _o(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          l = l.next;
                        }
                      } else if (10 === i.tag)
                        u = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (u = i.return)) throw Error(o(341));
                        (u.lanes |= n),
                          null !== (s = u.alternate) && (s.lanes |= n),
                          _o(u, n, t),
                          (u = i.sibling);
                      } else u = i.child;
                      if (null !== u) u.return = i;
                      else
                        for (u = i; null !== u; ) {
                          if (u === t) {
                            u = null;
                            break;
                          }
                          if (null !== (i = u.sibling)) {
                            (i.return = u.return), (u = i);
                            break;
                          }
                          u = u.return;
                        }
                      i = u;
                    }
                wu(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Eo(t, n),
                (r = r((a = To(a)))),
                (t.flags |= 1),
                wu(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = yo((r = t.type), t.pendingProps)),
                xu(e, t, r, (a = yo(r.type, a)), n)
              );
            case 15:
              return _u(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : yo(r, a)),
                Hu(e, t),
                (t.tag = 1),
                Na(r) ? ((e = !0), Ma(t)) : (e = !1),
                Eo(t, n),
                Ho(t, r, a),
                Ko(t, r, a, n),
                Au(null, t, r, !0, e, n)
              );
            case 19:
              return Wu(e, t, n);
            case 22:
              return Eu(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var ql =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yl(e) {
          this._internalRoot = e;
        }
        function Ql(e) {
          this._internalRoot = e;
        }
        function Xl(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zl(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Jl() {}
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var u = a;
              a = function () {
                var e = $l(i);
                u.call(e);
              };
            }
            Hl(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = $l(i);
                    o.call(e);
                  };
                }
                var i = Wl(t, r, e, 0, null, !1, 0, "", Jl);
                return (
                  (e._reactRootContainer = i),
                  (e[pa] = i.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  fl(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var u = r;
                r = function () {
                  var e = $l(s);
                  u.call(e);
                };
              }
              var s = zl(e, 0, !1, null, 0, !1, 0, "", Jl);
              return (
                (e._reactRootContainer = s),
                (e[pa] = s.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                fl(function () {
                  Hl(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return $l(i);
        }
        (Ql.prototype.render = Yl.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Hl(e, t, null, null);
          }),
          (Ql.prototype.unmount = Yl.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fl(function () {
                  Hl(null, e, null, null);
                }),
                  (t[pa] = null);
              }
            }),
          (Ql.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _t();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Ot.length && 0 !== t && t < Ot[n].priority;
                n++
              );
              Ot.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    al(t, Xe()),
                    0 === (6 & As) && ((Ws = Xe() + 500), Ua()));
                }
                break;
              case 13:
                fl(function () {
                  var t = Ro(e, 1);
                  if (null !== t) {
                    var n = tl();
                    rl(t, e, 1, n);
                  }
                }),
                  Gl(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Ro(e, 134217728);
              if (null !== t) rl(t, e, 134217728, tl());
              Gl(e, 134217728);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = nl(e),
                n = Ro(e, t);
              if (null !== n) rl(n, e, t, tl());
              Gl(e, t);
            }
          }),
          (_t = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(o(90));
                      G(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = cl),
          (Ae = fl);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, Sa, wa, Te, Ce, cl],
          },
          nc = {
            findFiberByHostInstance: ga,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: S.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xl(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xl(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = ql;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = zl(e, 1, !1, null, 0, n, 0, r, a)),
              (e[pa] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new Yl(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fl(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zl(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xl(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              u = ql;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (u = n.onRecoverableError)),
              (t = Wl(t, null, e, 1, null != n ? n : null, a, 0, i, u)),
              (e[pa] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ql(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zl(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zl(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (fl(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[pa] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cl),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zl(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          u =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function l(e, t, n) {
          var r,
            o = {},
            l = null,
            c = null;
          for (r in (void 0 !== n && (l = "" + n),
          void 0 !== t.key && (l = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: l,
            ref: c,
            props: o,
            _owner: u.current,
          };
        }
        (t.Fragment = o), (t.jsx = l), (t.jsxs = l);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          u = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          l = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          h = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || p);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || p);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var S = (b.prototype = new g());
        (S.constructor = b), v(S, y.prototype), (S.isPureReactComponent = !0);
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          x = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            o = {},
            i = null,
            u = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (u = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, a) && !_.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
            o.children = l;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: u,
            props: o,
            _owner: x.current,
          };
        }
        function T(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function A(e, t, a, o, i) {
          var u = typeof e;
          ("undefined" !== u && "boolean" !== u) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (u) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === o ? "." + P(s, 0) : o),
              w(i)
                ? ((a = ""),
                  null != e && (a = e.replace(C, "$&/") + "/"),
                  A(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (T(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), w(e)))
            for (var l = 0; l < e.length; l++) {
              var c = o + P((u = e[l]), l);
              s += A(u, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (h && e[h]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), l = 0; !(u = e.next()).done; )
              s += A((u = u.value), t, a, (c = o + P(u, l++)), i);
          else if ("object" === u)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function R(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            A(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var N = { current: null },
          O = { transition: null },
          D = {
            ReactCurrentDispatcher: N,
            ReactCurrentBatchConfig: O,
            ReactCurrentOwner: x,
          };
        (t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              R(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              R(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              o = e.key,
              i = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (u = x.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (l in t)
                k.call(t, l) &&
                  !_.hasOwnProperty(l) &&
                  (a[l] = void 0 === t[l] && void 0 !== s ? s[l] : t[l]);
            }
            var l = arguments.length - 2;
            if (1 === l) a.children = r;
            else if (1 < l) {
              s = Array(l);
              for (var c = 0; c < l; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: u,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: u, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: l, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = O.transition;
            O.transition = {};
            try {
              e();
            } finally {
              O.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return N.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return N.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return N.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return N.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return N.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return N.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return N.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return N.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return N.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return N.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return N.current.useRef(e);
          }),
          (t.useState = function (e) {
            return N.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return N.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return N.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      386: function (e, t, n) {
        "use strict";
        var r = n(61).default,
          a = n(156).default;
        t.J = void 0;
        t.J = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if ("undefined" === typeof window)
            return { persistAtom: function () {} };
          var t = e.key,
            n = void 0 === t ? "recoil-persist" : t,
            o = e.storage,
            i = void 0 === o ? localStorage : o,
            u = e.converter,
            s = void 0 === u ? JSON : u,
            l = function (e, t, n, r) {
              r ? delete t[n] : (t[n] = e), d(t);
            },
            c = function () {
              var e = i.getItem(n);
              return null === e || void 0 === e
                ? {}
                : "string" === typeof e
                ? f(e)
                : "function" === typeof e.then
                ? e.then(f)
                : {};
            },
            f = function (e) {
              if (void 0 === e) return {};
              try {
                return s.parse(e);
              } catch (t) {
                return console.error(t), {};
              }
            },
            d = function (e) {
              try {
                "function" === typeof i.mergeItem
                  ? i.mergeItem(n, s.stringify(e))
                  : i.setItem(n, s.stringify(e));
              } catch (t) {
                console.error(t);
              }
            };
          return {
            persistAtom: function (e) {
              var t = e.onSet,
                n = e.node,
                o = e.trigger,
                i = e.setSelf;
              if ("get" === o) {
                var u = c();
                "function" === typeof u.then &&
                  u.then(function (e) {
                    e.hasOwnProperty(n.key) && i(e[n.key]);
                  }),
                  u.hasOwnProperty(n.key) && i(u[n.key]);
              }
              t(
                (function () {
                  var e = a(
                    r().mark(function e(t, a, o) {
                      var i;
                      return r().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              "function" === typeof (i = c()).then
                                ? i.then(function (e) {
                                    return l(t, e, n.key, o);
                                  })
                                : l(t, i, n.key, o);
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, n, r) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            },
          };
        };
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var u = 2 * (r + 1) - 1,
                s = e[u],
                l = u + 1,
                c = e[l];
              if (0 > o(s, n))
                l < a && 0 > o(c, s)
                  ? ((e[r] = c), (e[l] = n), (r = l))
                  : ((e[r] = s), (e[u] = n), (r = u));
              else {
                if (!(l < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[l] = n), (r = l);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var u = Date,
            s = u.now();
          t.unstable_now = function () {
            return u.now() - s;
          };
        }
        var l = [],
          c = [],
          f = 1,
          d = null,
          h = 3,
          p = !1,
          v = !1,
          m = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function S(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(l, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((m = !1), S(e), !v))
            if (null !== r(l)) (v = !0), O(k);
            else {
              var t = r(c);
              null !== t && D(w, t.startTime - e);
            }
        }
        function k(e, n) {
          (v = !1), m && ((m = !1), g(T), (T = -1)), (p = !0);
          var o = h;
          try {
            for (
              S(n), d = r(l);
              null !== d && (!(d.expirationTime > n) || (e && !A()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (h = d.priorityLevel);
                var u = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof u
                    ? (d.callback = u)
                    : d === r(l) && a(l),
                  S(n);
              } else a(l);
              d = r(l);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(c);
              null !== f && D(w, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (h = o), (p = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var x,
          _ = !1,
          E = null,
          T = -1,
          C = 5,
          P = -1;
        function A() {
          return !(t.unstable_now() - P < C);
        }
        function R() {
          if (null !== E) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? x() : ((_ = !1), (E = null));
            }
          } else _ = !1;
        }
        if ("function" === typeof b)
          x = function () {
            b(R);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var L = new MessageChannel(),
            N = L.port2;
          (L.port1.onmessage = R),
            (x = function () {
              N.postMessage(null);
            });
        } else
          x = function () {
            y(R, 0);
          };
        function O(e) {
          (E = e), _ || ((_ = !0), x());
        }
        function D(e, n) {
          T = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || p || ((v = !0), O(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return h;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(l);
          }),
          (t.unstable_next = function (e) {
            switch (h) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = h;
            }
            var n = h;
            h = t;
            try {
              return e();
            } finally {
              h = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = h;
            h = e;
            try {
              return t();
            } finally {
              h = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (u = o + u),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(l) &&
                    e === r(c) &&
                    (m ? (g(T), (T = -1)) : (m = !0), D(w, o - i)))
                : ((e.sortIndex = u), n(l, e), v || p || ((v = !0), O(k))),
              e
            );
          }),
          (t.unstable_shouldYield = A),
          (t.unstable_wrapCallback = function (e) {
            var t = h;
            return function () {
              var n = h;
              h = t;
              try {
                return e.apply(this, arguments);
              } finally {
                h = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      613: function (e) {
        e.exports = function (e, t, n, r) {
          var a = n ? n.call(r, e, t) : void 0;
          if (void 0 !== a) return !!a;
          if (e === t) return !0;
          if ("object" !== typeof e || !e || "object" !== typeof t || !t)
            return !1;
          var o = Object.keys(e),
            i = Object.keys(t);
          if (o.length !== i.length) return !1;
          for (
            var u = Object.prototype.hasOwnProperty.bind(t), s = 0;
            s < o.length;
            s++
          ) {
            var l = o[s];
            if (!u(l)) return !1;
            var c = e[l],
              f = t[l];
            if (
              !1 === (a = n ? n.call(r, c, f, l) : void 0) ||
              (void 0 === a && c !== f)
            )
              return !1;
          }
          return !0;
        };
      },
      156: function (e) {
        function t(e, t, n, r, a, o, i) {
          try {
            var u = e[o](i),
              s = u.value;
          } catch (l) {
            return void n(l);
          }
          u.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        (e.exports = function (e) {
          return function () {
            var n = this,
              r = arguments;
            return new Promise(function (a, o) {
              var i = e.apply(n, r);
              function u(e) {
                t(i, a, o, u, s, "next", e);
              }
              function s(e) {
                t(i, a, o, u, s, "throw", e);
              }
              u(void 0);
            });
          };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      61: function (e, t, n) {
        var r = n(698).default;
        function a() {
          "use strict";
          (e.exports = a =
            function () {
              return n;
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
          var t,
            n = {},
            o = Object.prototype,
            i = o.hasOwnProperty,
            u =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            s = "function" == typeof Symbol ? Symbol : {},
            l = s.iterator || "@@iterator",
            c = s.asyncIterator || "@@asyncIterator",
            f = s.toStringTag || "@@toStringTag";
          function d(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            d({}, "");
          } catch (t) {
            d = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function h(e, t, n, r) {
            var a = t && t.prototype instanceof S ? t : S,
              o = Object.create(a.prototype),
              i = new O(r || []);
            return u(o, "_invoke", { value: A(e, n, i) }), o;
          }
          function p(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          n.wrap = h;
          var v = "suspendedStart",
            m = "suspendedYield",
            y = "executing",
            g = "completed",
            b = {};
          function S() {}
          function w() {}
          function k() {}
          var x = {};
          d(x, l, function () {
            return this;
          });
          var _ = Object.getPrototypeOf,
            E = _ && _(_(D([])));
          E && E !== o && i.call(E, l) && (x = E);
          var T = (k.prototype = S.prototype = Object.create(x));
          function C(e) {
            ["next", "throw", "return"].forEach(function (t) {
              d(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function P(e, t) {
            function n(a, o, u, s) {
              var l = p(e[a], e, o);
              if ("throw" !== l.type) {
                var c = l.arg,
                  f = c.value;
                return f && "object" == r(f) && i.call(f, "__await")
                  ? t.resolve(f.__await).then(
                      function (e) {
                        n("next", e, u, s);
                      },
                      function (e) {
                        n("throw", e, u, s);
                      }
                    )
                  : t.resolve(f).then(
                      function (e) {
                        (c.value = e), u(c);
                      },
                      function (e) {
                        return n("throw", e, u, s);
                      }
                    );
              }
              s(l.arg);
            }
            var a;
            u(this, "_invoke", {
              value: function (e, r) {
                function o() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                return (a = a ? a.then(o, o) : o());
              },
            });
          }
          function A(e, n, r) {
            var a = v;
            return function (o, i) {
              if (a === y) throw new Error("Generator is already running");
              if (a === g) {
                if ("throw" === o) throw i;
                return { value: t, done: !0 };
              }
              for (r.method = o, r.arg = i; ; ) {
                var u = r.delegate;
                if (u) {
                  var s = R(u, r);
                  if (s) {
                    if (s === b) continue;
                    return s;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (a === v) throw ((a = g), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                a = y;
                var l = p(e, n, r);
                if ("normal" === l.type) {
                  if (((a = r.done ? g : m), l.arg === b)) continue;
                  return { value: l.arg, done: r.done };
                }
                "throw" === l.type &&
                  ((a = g), (r.method = "throw"), (r.arg = l.arg));
              }
            };
          }
          function R(e, n) {
            var r = n.method,
              a = e.iterator[r];
            if (a === t)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = t),
                  R(e, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                b
              );
            var o = p(a, e.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), b
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((n[e.resultName] = i.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                  (n.delegate = null),
                  b)
                : i
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                b);
          }
          function L(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function N(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function O(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(L, this),
              this.reset(!0);
          }
          function D(e) {
            if (e || "" === e) {
              var n = e[l];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var a = -1,
                  o = function n() {
                    for (; ++a < e.length; )
                      if (i.call(e, a))
                        return (n.value = e[a]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(r(e) + " is not iterable");
          }
          return (
            (w.prototype = k),
            u(T, "constructor", { value: k, configurable: !0 }),
            u(k, "constructor", { value: w, configurable: !0 }),
            (w.displayName = d(k, f, "GeneratorFunction")),
            (n.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === w || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (n.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, k)
                  : ((e.__proto__ = k), d(e, f, "GeneratorFunction")),
                (e.prototype = Object.create(T)),
                e
              );
            }),
            (n.awrap = function (e) {
              return { __await: e };
            }),
            C(P.prototype),
            d(P.prototype, c, function () {
              return this;
            }),
            (n.AsyncIterator = P),
            (n.async = function (e, t, r, a, o) {
              void 0 === o && (o = Promise);
              var i = new P(h(e, t, r, a), o);
              return n.isGeneratorFunction(t)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            C(T),
            d(T, f, "Generator"),
            d(T, l, function () {
              return this;
            }),
            d(T, "toString", function () {
              return "[object Generator]";
            }),
            (n.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (n.values = D),
            (O.prototype = {
              constructor: O,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(N),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      i.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function r(r, a) {
                  return (
                    (u.type = "throw"),
                    (u.arg = e),
                    (n.next = r),
                    a && ((n.method = "next"), (n.arg = t)),
                    !!a
                  );
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var o = this.tryEntries[a],
                    u = o.completion;
                  if ("root" === o.tryLoc) return r("end");
                  if (o.tryLoc <= this.prev) {
                    var s = i.call(o, "catchLoc"),
                      l = i.call(o, "finallyLoc");
                    if (s && l) {
                      if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                    } else if (s) {
                      if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (
                    r.tryLoc <= this.prev &&
                    i.call(r, "finallyLoc") &&
                    this.prev < r.finallyLoc
                  ) {
                    var a = r;
                    break;
                  }
                }
                a &&
                  ("break" === e || "continue" === e) &&
                  a.tryLoc <= t &&
                  t <= a.finallyLoc &&
                  (a = null);
                var o = a ? a.completion : {};
                return (
                  (o.type = e),
                  (o.arg = t),
                  a
                    ? ((this.method = "next"), (this.next = a.finallyLoc), b)
                    : this.complete(o)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  b
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), N(n), b;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      N(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, n, r) {
                return (
                  (this.delegate = {
                    iterator: D(e),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = t),
                  b
                );
              },
            }),
            n
          );
        }
        (e.exports = a),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      698: function (e) {
        function t(n) {
          return (
            (e.exports = t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.nc = void 0),
    (function () {
      "use strict";
      var e = n(250);
      function t(e) {
        if (null == e) throw new TypeError("Cannot destructure " + e);
      }
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e, t) {
        if (e) {
          if ("string" === typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          );
        }
      }
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return r(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          a(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function u(e, t, n, r, a, o, i) {
        try {
          var u = e[o](i),
            s = u.value;
        } catch (l) {
          return void n(l);
        }
        u.done ? t(s) : Promise.resolve(s).then(r, a);
      }
      function s(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              u(o, r, a, i, s, "next", e);
            }
            function s(e) {
              u(o, r, a, i, s, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function l(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o,
                i,
                u = [],
                s = !0,
                l = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== t);
                    s = !0
                  );
              } catch (e) {
                (l = !0), (a = e);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (l) throw a;
                }
              }
              return u;
            }
          })(e, t) ||
          a(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(e) {
        return (
          (c = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          c(e)
        );
      }
      function f(e, t) {
        return (
          (f = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          f(e, t)
        );
      }
      function d() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function h(e, t, n) {
        return (
          (h = d()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && f(a, n.prototype), a;
              }),
          h.apply(null, arguments)
        );
      }
      function p(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (p = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return h(e, arguments, c(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              f(r, e)
            );
          }),
          p(e)
        );
      }
      function v(e) {
        return (
          (v =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          v(e)
        );
      }
      function m() {
        m = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          u = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (e) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, r) {
          var o = t && t.prototype instanceof b ? t : b,
            i = Object.create(o.prototype),
            u = new N(r || []);
          return a(i, "_invoke", { value: P(e, n, u) }), i;
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = c;
        var d = "suspendedStart",
          h = "suspendedYield",
          p = "executing",
          y = "completed",
          g = {};
        function b() {}
        function S() {}
        function w() {}
        var k = {};
        l(k, i, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          _ = x && x(x(O([])));
        _ && _ !== n && r.call(_, i) && (k = _);
        var E = (w.prototype = b.prototype = Object.create(k));
        function T(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function C(e, t) {
          function n(a, o, i, u) {
            var s = f(e[a], e, o);
            if ("throw" !== s.type) {
              var l = s.arg,
                c = l.value;
              return c && "object" == v(c) && r.call(c, "__await")
                ? t.resolve(c.__await).then(
                    function (e) {
                      n("next", e, i, u);
                    },
                    function (e) {
                      n("throw", e, i, u);
                    }
                  )
                : t.resolve(c).then(
                    function (e) {
                      (l.value = e), i(l);
                    },
                    function (e) {
                      return n("throw", e, i, u);
                    }
                  );
            }
            u(s.arg);
          }
          var o;
          a(this, "_invoke", {
            value: function (e, r) {
              function a() {
                return new t(function (t, a) {
                  n(e, r, t, a);
                });
              }
              return (o = o ? o.then(a, a) : a());
            },
          });
        }
        function P(t, n, r) {
          var a = d;
          return function (o, i) {
            if (a === p) throw new Error("Generator is already running");
            if (a === y) {
              if ("throw" === o) throw i;
              return { value: e, done: !0 };
            }
            for (r.method = o, r.arg = i; ; ) {
              var u = r.delegate;
              if (u) {
                var s = A(u, r);
                if (s) {
                  if (s === g) continue;
                  return s;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (a === d) throw ((a = y), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              a = p;
              var l = f(t, n, r);
              if ("normal" === l.type) {
                if (((a = r.done ? y : h), l.arg === g)) continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((a = y), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function A(t, n) {
          var r = n.method,
            a = t.iterator[r];
          if (a === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                A(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              g
            );
          var o = f(a, t.iterator, n.arg);
          if ("throw" === o.type)
            return (
              (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), g
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((n[t.resultName] = i.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                g)
              : i
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function R(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function L(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function N(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(R, this),
            this.reset(!0);
        }
        function O(t) {
          if (t || "" === t) {
            var n = t[i];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var a = -1,
                o = function n() {
                  for (; ++a < t.length; )
                    if (r.call(t, a)) return (n.value = t[a]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(v(t) + " is not iterable");
        }
        return (
          (S.prototype = w),
          a(E, "constructor", { value: w, configurable: !0 }),
          a(w, "constructor", { value: S, configurable: !0 }),
          (S.displayName = l(w, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === S || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, w)
                : ((e.__proto__ = w), l(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(E)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          T(C.prototype),
          l(C.prototype, u, function () {
            return this;
          }),
          (t.AsyncIterator = C),
          (t.async = function (e, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new C(c(e, n, r, a), o);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          T(E),
          l(E, s, "Generator"),
          l(E, i, function () {
            return this;
          }),
          l(E, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = O),
          (N.prototype = {
            constructor: N,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(L),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function a(r, a) {
                return (
                  (u.type = "throw"),
                  (u.arg = t),
                  (n.next = r),
                  a && ((n.method = "next"), (n.arg = e)),
                  !!a
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  u = i.completion;
                if ("root" === i.tryLoc) return a("end");
                if (i.tryLoc <= this.prev) {
                  var s = r.call(i, "catchLoc"),
                    l = r.call(i, "finallyLoc");
                  if (s && l) {
                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), g)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), L(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    L(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: O(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function y(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = a(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          u = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (u = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              u || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function g(e) {
        var t = (function (e, t) {
          if ("object" !== v(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== v(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === v(t) ? t : String(t);
      }
      function b(e, t, n) {
        return (
          (t = g(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function k(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function x(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && f(e, t);
      }
      function _(e) {
        var t = d();
        return function () {
          var n,
            r = c(e);
          if (t) {
            var a = c(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === v(t) || "function" === typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return k(e);
          })(this, n);
        };
      }
      function E(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function T(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, g(r.key), r);
        }
      }
      function C(e, t, n) {
        return (
          t && T(e.prototype, t),
          n && T(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var P = n(791),
        A = n(164),
        R = ["override"],
        L = ["cachePolicyForParams_UNSTABLE"],
        N = m().mark(ft),
        O = m().mark(xn);
      var D = function (e) {
        var t = new Error(e);
        if (void 0 === t.stack)
          try {
            throw t;
          } catch (il) {}
        return t;
      };
      var V = function (e) {
        return !!e && "function" === typeof e.then;
      };
      var M = function (e, t) {
        if (null != e) return e;
        throw D(
          null !== t && void 0 !== t ? t : "Got unexpected null or undefined"
        );
      };
      function F(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var I = (function () {
          function e() {
            E(this, e);
          }
          return (
            C(e, [
              {
                key: "getValue",
                value: function () {
                  throw D("BaseLoadable");
                },
              },
              {
                key: "toPromise",
                value: function () {
                  throw D("BaseLoadable");
                },
              },
              {
                key: "valueMaybe",
                value: function () {
                  throw D("BaseLoadable");
                },
              },
              {
                key: "valueOrThrow",
                value: function () {
                  throw D(
                    'Loadable expected value, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "promiseMaybe",
                value: function () {
                  throw D("BaseLoadable");
                },
              },
              {
                key: "promiseOrThrow",
                value: function () {
                  throw D(
                    'Loadable expected promise, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "errorMaybe",
                value: function () {
                  throw D("BaseLoadable");
                },
              },
              {
                key: "errorOrThrow",
                value: function () {
                  throw D(
                    'Loadable expected error, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "is",
                value: function (e) {
                  return e.state === this.state && e.contents === this.contents;
                },
              },
              {
                key: "map",
                value: function (e) {
                  throw D("BaseLoadable");
                },
              },
            ]),
            e
          );
        })(),
        j = (function (e) {
          x(n, e);
          var t = _(n);
          function n(e) {
            var r;
            return (
              E(this, n),
              F(k((r = t.call(this))), "state", "hasValue"),
              F(k(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            C(n, [
              {
                key: "getValue",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return Promise.resolve(this.contents);
                },
              },
              {
                key: "valueMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "valueOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              { key: "promiseMaybe", value: function () {} },
              { key: "errorMaybe", value: function () {} },
              {
                key: "map",
                value: function (e) {
                  var t = this;
                  try {
                    var n = e(this.contents);
                    return V(n) ? H(n) : G(n) ? n : U(n);
                  } catch (r) {
                    return V(r)
                      ? H(
                          r.next(function () {
                            return t.map(e);
                          })
                        )
                      : W(r);
                  }
                },
              },
            ]),
            n
          );
        })(I),
        B = (function (e) {
          x(n, e);
          var t = _(n);
          function n(e) {
            var r;
            return (
              E(this, n),
              F(k((r = t.call(this))), "state", "hasError"),
              F(k(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            C(n, [
              {
                key: "getValue",
                value: function () {
                  throw this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return Promise.reject(this.contents);
                },
              },
              { key: "valueMaybe", value: function () {} },
              { key: "promiseMaybe", value: function () {} },
              {
                key: "errorMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "errorOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "map",
                value: function (e) {
                  return this;
                },
              },
            ]),
            n
          );
        })(I),
        z = (function (e) {
          x(n, e);
          var t = _(n);
          function n(e) {
            var r;
            return (
              E(this, n),
              F(k((r = t.call(this))), "state", "loading"),
              F(k(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            C(n, [
              {
                key: "getValue",
                value: function () {
                  throw this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return this.contents;
                },
              },
              { key: "valueMaybe", value: function () {} },
              {
                key: "promiseMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "promiseOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              { key: "errorMaybe", value: function () {} },
              {
                key: "map",
                value: function (e) {
                  var t = this;
                  return H(
                    this.contents
                      .then(function (t) {
                        var n = e(t);
                        if (G(n)) {
                          var r = n;
                          switch (r.state) {
                            case "hasValue":
                            case "loading":
                              return r.contents;
                            case "hasError":
                              throw r.contents;
                          }
                        }
                        return n;
                      })
                      .catch(function (n) {
                        if (V(n))
                          return n.then(function () {
                            return t.map(e).contents;
                          });
                        throw n;
                      })
                  );
                },
              },
            ]),
            n
          );
        })(I);
      function U(e) {
        return Object.freeze(new j(e));
      }
      function W(e) {
        return Object.freeze(new B(e));
      }
      function H(e) {
        return Object.freeze(new z(e));
      }
      function $() {
        return Object.freeze(new z(new Promise(function () {})));
      }
      function K(e) {
        var t = Array.isArray(e)
            ? e
            : Object.getOwnPropertyNames(e).map(function (t) {
                return e[t];
              }),
          n = t.map(function (e) {
            return G(e) ? e : V(e) ? H(e) : U(e);
          }),
          r = (function (e) {
            return e.every(function (e) {
              return "hasValue" === e.state;
            })
              ? U(
                  e.map(function (e) {
                    return e.contents;
                  })
                )
              : e.some(function (e) {
                  return "hasError" === e.state;
                })
              ? W(
                  M(
                    e.find(function (e) {
                      return "hasError" === e.state;
                    }),
                    "Invalid loadable passed to loadableAll"
                  ).contents
                )
              : H(
                  Promise.all(
                    e.map(function (e) {
                      return e.contents;
                    })
                  )
                );
          })(n);
        return Array.isArray(e)
          ? r
          : r.map(function (t) {
              return Object.getOwnPropertyNames(e).reduce(function (e, n, r) {
                return w(w({}, e), {}, b({}, n, t[r]));
              }, {});
            });
      }
      function G(e) {
        return e instanceof I;
      }
      var q = {
          of: function (e) {
            return V(e) ? H(e) : G(e) ? e : U(e);
          },
          error: function (e) {
            return W(e);
          },
          loading: function () {
            return $();
          },
          all: K,
          isLoadable: G,
        },
        Y = {
          loadableWithValue: U,
          loadableWithError: W,
          loadableWithPromise: H,
          loadableLoading: $,
          loadableAll: K,
          isLoadable: G,
          RecoilLoadable: q,
        },
        Q = Y.loadableWithValue,
        X = Y.loadableWithError,
        Z = Y.loadableWithPromise,
        J = Y.loadableLoading,
        ee = Y.loadableAll,
        te = Y.isLoadable,
        ne = Y.RecoilLoadable,
        re = Object.freeze({
          __proto__: null,
          loadableWithValue: Q,
          loadableWithError: X,
          loadableWithPromise: Z,
          loadableLoading: J,
          loadableAll: ee,
          isLoadable: te,
          RecoilLoadable: ne,
        }),
        ae = {
          RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
          RECOIL_GKS_ENABLED: new Set([
            "recoil_hamt_2020",
            "recoil_sync_external_store",
            "recoil_suppress_rerender_in_callback",
            "recoil_memory_managament_2020",
          ]),
        };
      !(function () {
        var e;
        "undefined" !== typeof process &&
          null !=
            (null === (e = process) || void 0 === e
              ? void 0
              : {
                  NODE_ENV: "production",
                  PUBLIC_URL: "/to-do-app",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }) &&
          ((function (e, t) {
            var n,
              r,
              a =
                null ===
                  (n = {
                    NODE_ENV: "production",
                    PUBLIC_URL: "/to-do-app",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }[e]) ||
                void 0 === n ||
                null === (r = n.toLowerCase()) ||
                void 0 === r
                  ? void 0
                  : r.trim();
            if (null != a && "" !== a) {
              if (!["true", "false"].includes(a))
                throw D(
                  "process.env."
                    .concat(e, " value must be 'true', 'false', or empty: ")
                    .concat(a)
                );
              t("true" === a);
            }
          })("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", function (e) {
            ae.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = e;
          }),
          (function (e, t) {
            var n,
              r =
                null ===
                  (n = {
                    NODE_ENV: "production",
                    PUBLIC_URL: "/to-do-app",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }[e]) || void 0 === n
                  ? void 0
                  : n.trim();
            null != r && "" !== r && t(r.split(/\s*,\s*|\s+/));
          })("RECOIL_GKS_ENABLED", function (e) {
            e.forEach(function (e) {
              ae.RECOIL_GKS_ENABLED.add(e);
            });
          }));
      })();
      var oe = ae;
      function ie(e) {
        return oe.RECOIL_GKS_ENABLED.has(e);
      }
      (ie.setPass = function (e) {
        oe.RECOIL_GKS_ENABLED.add(e);
      }),
        (ie.setFail = function (e) {
          oe.RECOIL_GKS_ENABLED.delete(e);
        }),
        (ie.clear = function () {
          oe.RECOIL_GKS_ENABLED.clear();
        });
      var ue = ie;
      var se,
        le,
        ce,
        fe = function (e, t) {
          return (
            (arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : {}
            ).error,
            null
          );
        },
        de = fe,
        he =
          null !== (se = P.createMutableSource) && void 0 !== se
            ? se
            : P.unstable_createMutableSource,
        pe =
          null !== (le = P.useMutableSource) && void 0 !== le
            ? le
            : P.unstable_useMutableSource,
        ve =
          null !== (ce = P.useSyncExternalStore) && void 0 !== ce
            ? ce
            : P.unstable_useSyncExternalStore,
        me = !1;
      var ye = {
          createMutableSource: he,
          useMutableSource: pe,
          useSyncExternalStore: ve,
          currentRendererSupportsUseSyncExternalStore: function () {
            var e,
              t = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
              n = t.ReactCurrentDispatcher,
              r = t.ReactCurrentOwner,
              a =
                null !=
                (null !==
                  (e = null === n || void 0 === n ? void 0 : n.current) &&
                void 0 !== e
                  ? e
                  : r.currentDispatcher
                ).useSyncExternalStore;
            return (
              !ve ||
                a ||
                me ||
                ((me = !0),
                de(
                  "A React renderer without React 18+ API support is being used with React 18+."
                )),
              a
            );
          },
          reactMode: function () {
            return ue("recoil_transition_support")
              ? { mode: "TRANSITION_SUPPORT", early: !0, concurrent: !0 }
              : ue("recoil_sync_external_store") && null != ve
              ? { mode: "SYNC_EXTERNAL_STORE", early: !0, concurrent: !1 }
              : ue("recoil_mutable_source") &&
                null != pe &&
                "undefined" !== typeof window &&
                !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
              ? ue("recoil_suppress_rerender_in_callback")
                ? { mode: "MUTABLE_SOURCE", early: !0, concurrent: !0 }
                : { mode: "MUTABLE_SOURCE", early: !1, concurrent: !1 }
              : ue("recoil_suppress_rerender_in_callback")
              ? { mode: "LEGACY", early: !0, concurrent: !1 }
              : { mode: "LEGACY", early: !1, concurrent: !1 };
          },
          isFastRefreshEnabled: function () {
            return !1;
          },
        },
        ge = (function () {
          function e(t) {
            E(this, e), F(this, "key", void 0), (this.key = t);
          }
          return (
            C(e, [
              {
                key: "toJSON",
                value: function () {
                  return { key: this.key };
                },
              },
            ]),
            e
          );
        })(),
        be = (function (e) {
          x(n, e);
          var t = _(n);
          function n() {
            return E(this, n), t.apply(this, arguments);
          }
          return C(n);
        })(ge),
        Se = (function (e) {
          x(n, e);
          var t = _(n);
          function n() {
            return E(this, n), t.apply(this, arguments);
          }
          return C(n);
        })(ge);
      var we = {
          AbstractRecoilValue: ge,
          RecoilState: be,
          RecoilValueReadOnly: Se,
          isRecoilValue: function (e) {
            return e instanceof be || e instanceof Se;
          },
        },
        ke = we.AbstractRecoilValue,
        xe = we.RecoilState,
        _e = we.RecoilValueReadOnly,
        Ee = we.isRecoilValue,
        Te = Object.freeze({
          __proto__: null,
          AbstractRecoilValue: ke,
          RecoilState: xe,
          RecoilValueReadOnly: _e,
          isRecoilValue: Ee,
        });
      var Ce = function (e) {};
      var Pe = function (e, t) {
          return m().mark(function n() {
            var r, a, o, i;
            return m().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      (r = 0), (a = y(e)), (n.prev = 2), a.s();
                    case 4:
                      if ((o = a.n()).done) {
                        n.next = 10;
                        break;
                      }
                      return (i = o.value), (n.next = 8), t(i, r++);
                    case 8:
                      n.next = 4;
                      break;
                    case 10:
                      n.next = 15;
                      break;
                    case 12:
                      (n.prev = 12), (n.t0 = n.catch(2)), a.e(n.t0);
                    case 15:
                      return (n.prev = 15), a.f(), n.finish(15);
                    case 18:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              null,
              [[2, 12, 15, 18]]
            );
          })();
        },
        Ae = C(function e() {
          E(this, e);
        }),
        Re = new Ae(),
        Le = new Map(),
        Ne = new Map();
      var Oe = (function (e) {
        x(n, e);
        var t = _(n);
        function n() {
          return E(this, n), t.apply(this, arguments);
        }
        return C(n);
      })(p(Error));
      var De = new Map();
      function Ve(e) {
        return De.get(e);
      }
      var Me = {
        nodes: Le,
        recoilValues: Ne,
        registerNode: function (e) {
          oe.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED &&
            (function (e) {
              if (Le.has(e)) {
                var t = 'Duplicate atom key "'.concat(
                  e,
                  '". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement.'
                );
                console.warn(t);
              }
            })(e.key),
            Le.set(e.key, e);
          var t =
            null == e.set
              ? new Te.RecoilValueReadOnly(e.key)
              : new Te.RecoilState(e.key);
          return Ne.set(e.key, t), t;
        },
        getNode: function (e) {
          var t = Le.get(e);
          if (null == t)
            throw new Oe(
              'Missing definition for RecoilValue: "'.concat(e, '""')
            );
          return t;
        },
        getNodeMaybe: function (e) {
          return Le.get(e);
        },
        deleteNodeConfigIfPossible: function (e) {
          var t;
          if (ue("recoil_memory_managament_2020")) {
            var n,
              r = Le.get(e);
            if (
              null !== r &&
              void 0 !== r &&
              null !== (t = r.shouldDeleteConfigOnRelease) &&
              void 0 !== t &&
              t.call(r)
            )
              Le.delete(e),
                null === (n = Ve(e)) || void 0 === n || n(),
                De.delete(e);
          }
        },
        setConfigDeletionHandler: function (e, t) {
          ue("recoil_memory_managament_2020") &&
            (void 0 === t ? De.delete(e) : De.set(e, t));
        },
        getConfigDeletionHandler: Ve,
        recoilValuesForKeys: function (e) {
          return Pe(e, function (e) {
            return M(Ne.get(e));
          });
        },
        NodeMissingError: Oe,
        DefaultValue: Ae,
        DEFAULT_VALUE: Re,
      };
      var Fe = {
        enqueueExecution: function (e, t) {
          t();
        },
      };
      var Ie,
        je,
        Be =
          ((Ie = function (e) {
            var t =
                "function" === typeof Symbol &&
                "symbol" === typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" === typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              n = {},
              r = Math.pow(2, 5),
              a = r - 1,
              o = r / 2,
              i = r / 4,
              u = {},
              s = function (e) {
                return function () {
                  return e;
                };
              },
              l = (n.hash = function (e) {
                var n = "undefined" === typeof e ? "undefined" : t(e);
                if ("number" === n) return e;
                "string" !== n && (e += "");
                for (var r = 0, a = 0, o = e.length; a < o; ++a)
                  r = ((r << 5) - r + e.charCodeAt(a)) | 0;
                return r;
              }),
              c = function (e, t) {
                return (t >>> e) & a;
              },
              f = function (e) {
                return 1 << e;
              },
              d = function (e, t) {
                return (function (e) {
                  return (
                    (e =
                      ((e =
                        (858993459 & (e -= (e >> 1) & 1431655765)) +
                        ((e >> 2) & 858993459)) +
                        (e >> 4)) &
                      252645135),
                    127 & ((e += e >> 8) + (e >> 16))
                  );
                })(e & (t - 1));
              },
              h = function (e, t, n, r) {
                var a = r;
                if (!e) {
                  var o = r.length;
                  a = new Array(o);
                  for (var i = 0; i < o; ++i) a[i] = r[i];
                }
                return (a[t] = n), a;
              },
              p = function (e, t, n) {
                var r = n.length - 1,
                  a = 0,
                  o = 0,
                  i = n;
                if (e) a = o = t;
                else for (i = new Array(r); a < t; ) i[o++] = n[a++];
                for (++a; a <= r; ) i[o++] = n[a++];
                return e && (i.length = r), i;
              },
              v = { __hamt_isEmpty: !0 },
              m = function (e) {
                return e === v || (e && e.__hamt_isEmpty);
              },
              y = function (e, t, n, r) {
                return {
                  type: 1,
                  edit: e,
                  hash: t,
                  key: n,
                  value: r,
                  _modify: x,
                };
              },
              g = function (e, t, n) {
                return { type: 2, edit: e, hash: t, children: n, _modify: _ };
              },
              b = function (e, t, n) {
                return { type: 3, edit: e, mask: t, children: n, _modify: E };
              },
              S = function (e, t, n) {
                return { type: 4, edit: e, size: t, children: n, _modify: T };
              },
              w = function e(t, n, r, a, o, i) {
                if (r === o) return g(t, r, [i, a]);
                var u = c(n, r),
                  s = c(n, o);
                return b(
                  t,
                  f(u) | f(s),
                  u === s ? [e(t, n + 5, r, a, o, i)] : u < s ? [a, i] : [i, a]
                );
              },
              k = function (e, t) {
                return e === t.edit;
              },
              x = function (e, t, n, r, a, o, i) {
                if (t(o, this.key)) {
                  var s = r(this.value);
                  return s === this.value
                    ? this
                    : s === u
                    ? (--i.value, v)
                    : k(e, this)
                    ? ((this.value = s), this)
                    : y(e, a, o, s);
                }
                var l = r();
                return l === u
                  ? this
                  : (++i.value, w(e, n, this.hash, this, a, y(e, a, o, l)));
              },
              _ = function (e, t, n, r, a, o, i) {
                if (a === this.hash) {
                  var s = (function (e, t, n, r, a, o, i, s) {
                    for (var l = a.length, c = 0; c < l; ++c) {
                      var f = a[c];
                      if (n(i, f.key)) {
                        var d = f.value,
                          v = o(d);
                        return v === d
                          ? a
                          : v === u
                          ? (--s.value, p(e, c, a))
                          : h(e, c, y(t, r, i, v), a);
                      }
                    }
                    var m = o();
                    return m === u ? a : (++s.value, h(e, l, y(t, r, i, m), a));
                  })(k(e, this), e, t, this.hash, this.children, r, o, i);
                  return s === this.children
                    ? this
                    : s.length > 1
                    ? g(e, this.hash, s)
                    : s[0];
                }
                var l = r();
                return l === u
                  ? this
                  : (++i.value, w(e, n, this.hash, this, a, y(e, a, o, l)));
              },
              E = function (e, t, n, r, a, i, u) {
                var s = this.mask,
                  l = this.children,
                  y = c(n, a),
                  g = f(y),
                  w = d(s, g),
                  x = s & g,
                  _ = x ? l[w] : v,
                  E = _._modify(e, t, n + 5, r, a, i, u);
                if (_ === E) return this;
                var T = k(e, this),
                  C = s,
                  P = void 0;
                if (x && m(E)) {
                  if (!(C &= ~g)) return v;
                  if (
                    l.length <= 2 &&
                    (function (e) {
                      return e === v || 1 === e.type || 2 === e.type;
                    })(l[1 ^ w])
                  )
                    return l[1 ^ w];
                  P = p(T, w, l);
                } else if (x || m(E)) P = h(T, w, E, l);
                else {
                  if (l.length >= o)
                    return (function (e, t, n, r, a) {
                      for (var o = [], i = r, u = 0, s = 0; i; ++s)
                        1 & i && (o[s] = a[u++]), (i >>>= 1);
                      return (o[t] = n), S(e, u + 1, o);
                    })(e, y, E, s, l);
                  (C |= g),
                    (P = (function (e, t, n, r) {
                      var a = r.length;
                      if (e) {
                        for (var o = a; o >= t; ) r[o--] = r[o];
                        return (r[t] = n), r;
                      }
                      for (var i = 0, u = 0, s = new Array(a + 1); i < t; )
                        s[u++] = r[i++];
                      for (s[t] = n; i < a; ) s[++u] = r[i++];
                      return s;
                    })(T, w, E, l));
                }
                return T
                  ? ((this.mask = C), (this.children = P), this)
                  : b(e, C, P);
              },
              T = function (e, t, n, r, a, o, u) {
                var s = this.size,
                  l = this.children,
                  f = c(n, a),
                  d = l[f],
                  p = (d || v)._modify(e, t, n + 5, r, a, o, u);
                if (d === p) return this;
                var y = k(e, this),
                  g = void 0;
                if (m(d) && !m(p)) ++s, (g = h(y, f, p, l));
                else if (!m(d) && m(p)) {
                  if (--s <= i)
                    return (function (e, t, n, r) {
                      for (
                        var a = new Array(t - 1),
                          o = 0,
                          i = 0,
                          u = 0,
                          s = r.length;
                        u < s;
                        ++u
                      )
                        if (u !== n) {
                          var l = r[u];
                          l && !m(l) && ((a[o++] = l), (i |= 1 << u));
                        }
                      return b(e, i, a);
                    })(e, s, f, l);
                  g = h(y, f, v, l);
                } else g = h(y, f, p, l);
                return y
                  ? ((this.size = s), (this.children = g), this)
                  : S(e, s, g);
              };
            function C(e, t, n, r, a) {
              (this._editable = e),
                (this._edit = t),
                (this._config = n),
                (this._root = r),
                (this._size = a);
            }
            (v._modify = function (e, t, n, r, a, o, i) {
              var s = r();
              return s === u ? v : (++i.value, y(e, a, o, s));
            }),
              (C.prototype.setTree = function (e, t) {
                return this._editable
                  ? ((this._root = e), (this._size = t), this)
                  : e === this._root
                  ? this
                  : new C(this._editable, this._edit, this._config, e, t);
              });
            var P = (n.tryGetHash = function (e, t, n, r) {
              for (var a = r._root, o = 0, i = r._config.keyEq; ; )
                switch (a.type) {
                  case 1:
                    return i(n, a.key) ? a.value : e;
                  case 2:
                    if (t === a.hash)
                      for (
                        var u = a.children, s = 0, l = u.length;
                        s < l;
                        ++s
                      ) {
                        var h = u[s];
                        if (i(n, h.key)) return h.value;
                      }
                    return e;
                  case 3:
                    var p = c(o, t),
                      v = f(p);
                    if (a.mask & v) {
                      (a = a.children[d(a.mask, v)]), (o += 5);
                      break;
                    }
                    return e;
                  case 4:
                    if ((a = a.children[c(o, t)])) {
                      o += 5;
                      break;
                    }
                    return e;
                  default:
                    return e;
                }
            });
            C.prototype.tryGetHash = function (e, t, n) {
              return P(e, t, n, this);
            };
            var A = (n.tryGet = function (e, t, n) {
              return P(e, n._config.hash(t), t, n);
            });
            C.prototype.tryGet = function (e, t) {
              return A(e, t, this);
            };
            var R = (n.getHash = function (e, t, n) {
              return P(void 0, e, t, n);
            });
            (C.prototype.getHash = function (e, t) {
              return R(e, t, this);
            }),
              (n.get = function (e, t) {
                return P(void 0, t._config.hash(e), e, t);
              }),
              (C.prototype.get = function (e, t) {
                return A(t, e, this);
              });
            var L = (n.has = function (e, t, n) {
              return P(u, e, t, n) !== u;
            });
            C.prototype.hasHash = function (e, t) {
              return L(e, t, this);
            };
            var N = (n.has = function (e, t) {
              return L(t._config.hash(e), e, t);
            });
            C.prototype.has = function (e) {
              return N(e, this);
            };
            var O = function (e, t) {
              return e === t;
            };
            (n.make = function (e) {
              return new C(
                0,
                0,
                { keyEq: (e && e.keyEq) || O, hash: (e && e.hash) || l },
                v,
                0
              );
            }),
              (n.empty = n.make());
            var D = (n.isEmpty = function (e) {
              return e && !!m(e._root);
            });
            C.prototype.isEmpty = function () {
              return D(this);
            };
            var V = (n.modifyHash = function (e, t, n, r) {
              var a = { value: r._size },
                o = r._root._modify(
                  r._editable ? r._edit : NaN,
                  r._config.keyEq,
                  0,
                  e,
                  t,
                  n,
                  a
                );
              return r.setTree(o, a.value);
            });
            C.prototype.modifyHash = function (e, t, n) {
              return V(n, e, t, this);
            };
            var M = (n.modify = function (e, t, n) {
              return V(e, n._config.hash(t), t, n);
            });
            C.prototype.modify = function (e, t) {
              return M(t, e, this);
            };
            var F = (n.setHash = function (e, t, n, r) {
              return V(s(n), e, t, r);
            });
            C.prototype.setHash = function (e, t, n) {
              return F(e, t, n, this);
            };
            var I = (n.set = function (e, t, n) {
              return F(n._config.hash(e), e, t, n);
            });
            C.prototype.set = function (e, t) {
              return I(e, t, this);
            };
            var j = s(u),
              B = (n.removeHash = function (e, t, n) {
                return V(j, e, t, n);
              });
            C.prototype.removeHash = C.prototype.deleteHash = function (e, t) {
              return B(e, t, this);
            };
            var z = (n.remove = function (e, t) {
              return B(t._config.hash(e), e, t);
            });
            C.prototype.remove = C.prototype.delete = function (e) {
              return z(e, this);
            };
            var U = (n.beginMutation = function (e) {
              return new C(
                e._editable + 1,
                e._edit + 1,
                e._config,
                e._root,
                e._size
              );
            });
            C.prototype.beginMutation = function () {
              return U(this);
            };
            var W = (n.endMutation = function (e) {
              return (e._editable = e._editable && e._editable - 1), e;
            });
            C.prototype.endMutation = function () {
              return W(this);
            };
            var H = (n.mutate = function (e, t) {
              var n = U(t);
              return e(n), W(n);
            });
            C.prototype.mutate = function (e) {
              return H(e, this);
            };
            var $ = function (e) {
                return e && K(e[0], e[1], e[2], e[3], e[4]);
              },
              K = function (e, t, n, r, a) {
                for (; n < e; ) {
                  var o = t[n++];
                  if (o && !m(o)) return G(o, r, [e, t, n, r, a]);
                }
                return $(a);
              },
              G = function (e, t, n) {
                switch (e.type) {
                  case 1:
                    return { value: t(e), rest: n };
                  case 2:
                  case 4:
                  case 3:
                    var r = e.children;
                    return K(r.length, r, 0, t, n);
                  default:
                    return $(n);
                }
              },
              q = { done: !0 };
            function Y(e) {
              this.v = e;
            }
            (Y.prototype.next = function () {
              if (!this.v) return q;
              var e = this.v;
              return (this.v = $(e.rest)), e;
            }),
              (Y.prototype[Symbol.iterator] = function () {
                return this;
              });
            var Q = function (e, t) {
                return new Y(G(e._root, t));
              },
              X = function (e) {
                return [e.key, e.value];
              },
              Z = (n.entries = function (e) {
                return Q(e, X);
              });
            C.prototype.entries = C.prototype[Symbol.iterator] = function () {
              return Z(this);
            };
            var J = function (e) {
                return e.key;
              },
              ee = (n.keys = function (e) {
                return Q(e, J);
              });
            C.prototype.keys = function () {
              return ee(this);
            };
            var te = function (e) {
                return e.value;
              },
              ne =
                (n.values =
                C.prototype.values =
                  function (e) {
                    return Q(e, te);
                  });
            C.prototype.values = function () {
              return ne(this);
            };
            var re = (n.fold = function (e, t, n) {
              var r = n._root;
              if (1 === r.type) return e(t, r.value, r.key);
              for (var a = [r.children], o = void 0; (o = a.pop()); )
                for (var i = 0, u = o.length; i < u; ) {
                  var s = o[i++];
                  s &&
                    s.type &&
                    (1 === s.type
                      ? (t = e(t, s.value, s.key))
                      : a.push(s.children));
                }
              return t;
            });
            C.prototype.fold = function (e, t) {
              return re(e, t, this);
            };
            var ae = (n.forEach = function (e, t) {
              return re(
                function (n, r, a) {
                  return e(r, a, t);
                },
                null,
                t
              );
            });
            C.prototype.forEach = function (e) {
              return ae(e, this);
            };
            var oe = (n.count = function (e) {
              return e._size;
            });
            (C.prototype.count = function () {
              return oe(this);
            }),
              Object.defineProperty(C.prototype, "size", {
                get: C.prototype.count,
              }),
              e.exports ? (e.exports = n) : ((void 0).hamt = n);
          }),
          Ie((je = { exports: {} }), je.exports),
          je.exports),
        ze = (function () {
          function e(t) {
            E(this, e),
              F(this, "_map", void 0),
              (this._map = new Map(
                null === t || void 0 === t ? void 0 : t.entries()
              ));
          }
          return (
            C(e, [
              {
                key: "keys",
                value: function () {
                  return this._map.keys();
                },
              },
              {
                key: "entries",
                value: function () {
                  return this._map.entries();
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this._map.get(e);
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._map.has(e);
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  return this._map.set(e, t), this;
                },
              },
              {
                key: "delete",
                value: function (e) {
                  return this._map.delete(e), this;
                },
              },
              {
                key: "clone",
                value: function () {
                  return We(this);
                },
              },
              {
                key: "toMap",
                value: function () {
                  return new Map(this._map);
                },
              },
            ]),
            e
          );
        })(),
        Ue = (function () {
          function e(t) {
            if (
              (E(this, e),
              F(this, "_hamt", Be.empty.beginMutation()),
              t instanceof e)
            ) {
              var n = t._hamt.endMutation();
              (t._hamt = n.beginMutation()), (this._hamt = n.beginMutation());
            } else if (t) {
              var r,
                a = y(t.entries());
              try {
                for (a.s(); !(r = a.n()).done; ) {
                  var o = l(r.value, 2),
                    i = o[0],
                    u = o[1];
                  this._hamt.set(i, u);
                }
              } catch (s) {
                a.e(s);
              } finally {
                a.f();
              }
            }
          }
          return (
            C(e, [
              {
                key: "keys",
                value: function () {
                  return this._hamt.keys();
                },
              },
              {
                key: "entries",
                value: function () {
                  return this._hamt.entries();
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this._hamt.get(e);
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._hamt.has(e);
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  return this._hamt.set(e, t), this;
                },
              },
              {
                key: "delete",
                value: function (e) {
                  return this._hamt.delete(e), this;
                },
              },
              {
                key: "clone",
                value: function () {
                  return We(this);
                },
              },
              {
                key: "toMap",
                value: function () {
                  return new Map(this._hamt);
                },
              },
            ]),
            e
          );
        })();
      function We(e) {
        return ue("recoil_hamt_2020") ? new Ue(e) : new ze(e);
      }
      var He = We;
      var $e = function (e) {
        for (
          var t = new Set(),
            n = arguments.length,
            r = new Array(n > 1 ? n - 1 : 0),
            a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a];
        var o,
          i = y(e);
        try {
          e: for (i.s(); !(o = i.n()).done; ) {
            var u,
              s = o.value,
              l = y(r);
            try {
              for (l.s(); !(u = l.n()).done; ) {
                if (u.value.has(s)) continue e;
              }
            } catch (c) {
              l.e(c);
            } finally {
              l.f();
            }
            t.add(s);
          }
        } catch (c) {
          i.e(c);
        } finally {
          i.f();
        }
        return t;
      };
      var Ke = function (e, t) {
        var n = new Map();
        return (
          e.forEach(function (e, r) {
            n.set(r, t(e, r));
          }),
          n
        );
      };
      function Ge(e, t, n, r) {
        var a = n.nodeDeps,
          o = n.nodeToNodeSubscriptions,
          i = a.get(e);
        if (!i || !r || i === r.nodeDeps.get(e)) {
          a.set(e, t);
          var u,
            s = y(null == i ? t : $e(t, i));
          try {
            for (s.s(); !(u = s.n()).done; ) {
              var l = u.value;
              o.has(l) || o.set(l, new Set()), M(o.get(l)).add(e);
            }
          } catch (p) {
            s.e(p);
          } finally {
            s.f();
          }
          if (i) {
            var c,
              f = y($e(i, t));
            try {
              for (f.s(); !(c = f.n()).done; ) {
                var d = c.value;
                if (!o.has(d)) return;
                var h = M(o.get(d));
                h.delete(e), 0 === h.size && o.delete(d);
              }
            } catch (p) {
              f.e(p);
            } finally {
              f.f();
            }
          }
        }
      }
      var qe = function (e) {
          return {
            nodeDeps: Ke(e.nodeDeps, function (e) {
              return new Set(e);
            }),
            nodeToNodeSubscriptions: Ke(
              e.nodeToNodeSubscriptions,
              function (e) {
                return new Set(e);
              }
            ),
          };
        },
        Ye = function () {
          return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
        },
        Qe = function (e, t, n, r) {
          var a,
            o,
            i,
            u,
            s = n.getState();
          r !== s.currentTree.version &&
            r !==
              (null === (a = s.nextTree) || void 0 === a
                ? void 0
                : a.version) &&
            r !==
              (null === (o = s.previousTree) || void 0 === o
                ? void 0
                : o.version) &&
            de("Tried to save dependencies to a discarded tree");
          var l = n.getGraph(r);
          if (
            (Ge(e, t, l),
            r ===
              (null === (i = s.previousTree) || void 0 === i
                ? void 0
                : i.version) && Ge(e, t, n.getGraph(s.currentTree.version), l),
            r ===
              (null === (u = s.previousTree) || void 0 === u
                ? void 0
                : u.version) || r === s.currentTree.version)
          ) {
            var c,
              f =
                null === (c = s.nextTree) || void 0 === c ? void 0 : c.version;
            if (void 0 !== f) Ge(e, t, n.getGraph(f), l);
          }
        },
        Xe = 0,
        Ze = 0,
        Je = 0,
        et = function () {
          return Xe++;
        },
        tt = function () {
          return Ze++;
        },
        nt = function () {
          return Je++;
        },
        rt = Object.freeze({
          __proto__: null,
          persistentMap: He,
        }).persistentMap,
        at = Ye,
        ot = et;
      function it() {
        var e = ot();
        return {
          version: e,
          stateID: e,
          transactionMetadata: {},
          dirtyAtoms: new Set(),
          atomValues: rt(),
          nonvalidatedAtoms: rt(),
        };
      }
      var ut = {
          makeEmptyTreeState: it,
          makeEmptyStoreState: function () {
            var e = it();
            return {
              currentTree: e,
              nextTree: null,
              previousTree: null,
              commitDepth: 0,
              knownAtoms: new Set(),
              knownSelectors: new Set(),
              transactionSubscriptions: new Map(),
              nodeTransactionSubscriptions: new Map(),
              nodeToComponentSubscriptions: new Map(),
              queuedComponentCallbacks_DEPRECATED: [],
              suspendedComponentResolvers: new Set(),
              graphsByVersion: new Map().set(e.version, at()),
              retention: {
                referenceCounts: new Map(),
                nodesRetainedByZone: new Map(),
                retainablesToCheckForRelease: new Set(),
              },
              nodeCleanupFunctions: new Map(),
            };
          },
          getNextTreeStateVersion: ot,
        },
        st = C(function e() {
          E(this, e);
        });
      var lt = {
        RetentionZone: st,
        retentionZone: function () {
          return new st();
        },
      };
      var ct = function (e, t) {
        var n = new Set(e);
        return n.add(t), n;
      };
      function ft(e, t) {
        var n, r, a, o;
        return m().wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  (n = 0), (r = y(e)), (i.prev = 2), r.s();
                case 4:
                  if ((a = r.n()).done) {
                    i.next = 11;
                    break;
                  }
                  if (((o = a.value), !t(o, n++))) {
                    i.next = 9;
                    break;
                  }
                  return (i.next = 9), o;
                case 9:
                  i.next = 4;
                  break;
                case 11:
                  i.next = 16;
                  break;
                case 13:
                  (i.prev = 13), (i.t0 = i.catch(2)), r.e(i.t0);
                case 16:
                  return (i.prev = 16), r.f(), i.finish(16);
                case 19:
                case "end":
                  return i.stop();
              }
          },
          N,
          null,
          [[2, 13, 16, 19]]
        );
      }
      var dt = ft;
      var ht = function (e, t) {
          return new Proxy(e, {
            get: function (e, n) {
              return !(n in e) && n in t && (e[n] = t[n]()), e[n];
            },
            ownKeys: function (e) {
              return Object.keys(e);
            },
          });
        },
        pt = Me.getNode,
        vt = Me.getNodeMaybe,
        mt = Me.recoilValuesForKeys,
        yt = lt.RetentionZone,
        gt = ct,
        bt = Object.freeze(new Set()),
        St = (function (e) {
          x(n, e);
          var t = _(n);
          function n() {
            return E(this, n), t.apply(this, arguments);
          }
          return C(n);
        })(p(Error));
      function wt(e, t, n, r) {
        var a = e.getState();
        if (!a.nodeCleanupFunctions.has(n)) {
          var o = pt(n),
            i = (function (e, t, n) {
              if (!ue("recoil_memory_managament_2020")) return function () {};
              var r = e.getState().retention.nodesRetainedByZone;
              function a(e) {
                var n = r.get(e);
                n || r.set(e, (n = new Set())), n.add(t);
              }
              if (n instanceof yt) a(n);
              else if (Array.isArray(n)) {
                var o,
                  i = y(n);
                try {
                  for (i.s(); !(o = i.n()).done; ) a(o.value);
                } catch (u) {
                  i.e(u);
                } finally {
                  i.f();
                }
              }
              return function () {
                if (ue("recoil_memory_managament_2020")) {
                  var r = e.getState().retention;
                  if (n instanceof yt) i(n);
                  else if (Array.isArray(n)) {
                    var a,
                      o = y(n);
                    try {
                      for (o.s(); !(a = o.n()).done; ) i(a.value);
                    } catch (u) {
                      o.e(u);
                    } finally {
                      o.f();
                    }
                  }
                }
                function i(e) {
                  var n = r.nodesRetainedByZone.get(e);
                  null === n || void 0 === n || n.delete(t),
                    n && 0 === n.size && r.nodesRetainedByZone.delete(e);
                }
              };
            })(e, n, o.retainedBy),
            u = o.init(e, t, r);
          a.nodeCleanupFunctions.set(n, function () {
            u(), i();
          });
        }
      }
      function kt(e, t, n) {
        return pt(n).peek(e, t);
      }
      function xt(e, t, n) {
        for (
          var r = new Set(),
            a = Array.from(n),
            o = e.getGraph(t.version),
            i = a.pop();
          i;
          i = a.pop()
        ) {
          var u;
          r.add(i);
          var s,
            l = y(
              null !== (u = o.nodeToNodeSubscriptions.get(i)) && void 0 !== u
                ? u
                : bt
            );
          try {
            for (l.s(); !(s = l.n()).done; ) {
              var c = s.value;
              r.has(c) || a.push(c);
            }
          } catch (f) {
            l.e(f);
          } finally {
            l.f();
          }
        }
        return r;
      }
      var _t = function (e, t, n) {
          return wt(e, t, n, "get"), pt(n).get(e, t);
        },
        Et = kt,
        Tt = function (e, t, n, r) {
          var a = pt(n);
          if (null == a.set)
            throw new St("Attempt to set read-only RecoilValue: ".concat(n));
          var o = a.set;
          return wt(e, t, n, "set"), o(e, t, r);
        },
        Ct = function (e, t, n) {
          wt(e, e.getState().currentTree, t, n);
        },
        Pt = function (e, t) {
          var n,
            r = e.getState();
          null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(),
            r.nodeCleanupFunctions.delete(t);
        },
        At = function (e, t, n) {
          var r,
            a = vt(t);
          return (
            null === a ||
              void 0 === a ||
              null === (r = a.invalidate) ||
              void 0 === r ||
              r.call(a, e),
            w(
              w({}, e),
              {},
              {
                atomValues: e.atomValues.clone().delete(t),
                nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
                dirtyAtoms: gt(e.dirtyAtoms, t),
              }
            )
          );
        },
        Rt = function (e, t, n) {
          var r = e.getState(),
            a = e.getGraph(t.version),
            o = pt(n).nodeType;
          return ht(
            { type: o },
            {
              loadable: function () {
                return kt(e, t, n);
              },
              isActive: function () {
                return r.knownAtoms.has(n) || r.knownSelectors.has(n);
              },
              isSet: function () {
                return "selector" !== o && t.atomValues.has(n);
              },
              isModified: function () {
                return t.dirtyAtoms.has(n);
              },
              deps: function () {
                var e;
                return mt(
                  null !== (e = a.nodeDeps.get(n)) && void 0 !== e ? e : []
                );
              },
              subscribers: function () {
                var a, o;
                return {
                  nodes: mt(
                    dt(xt(e, t, new Set([n])), function (e) {
                      return e !== n;
                    })
                  ),
                  components: Pe(
                    null !==
                      (a =
                        null === (o = r.nodeToComponentSubscriptions.get(n)) ||
                        void 0 === o
                          ? void 0
                          : o.values()) && void 0 !== a
                      ? a
                      : [],
                    function (e) {
                      return { name: l(e, 1)[0] };
                    }
                  ),
                };
              },
            }
          );
        },
        Lt = xt,
        Nt = null;
      var Ot = function (e) {
          Nt = e;
        },
        Dt = function () {
          var e;
          null === (e = Nt) || void 0 === e || e();
        },
        Vt = Lt,
        Mt = _t,
        Ft = Tt,
        It = nt,
        jt = Me.getNode,
        Bt = Me.getNodeMaybe,
        zt = Me.DefaultValue,
        Ut = ye.reactMode,
        Wt = Te.AbstractRecoilValue,
        Ht = Te.RecoilState,
        $t = Te.RecoilValueReadOnly,
        Kt = Te.isRecoilValue,
        Gt = Dt;
      function qt(e, t, n) {
        if ("set" === n.type) {
          var r,
            a = n.recoilValue,
            o = (function (e, t, n, r) {
              var a = n.key;
              if ("function" === typeof r) {
                var o = Mt(e, t, a);
                if ("loading" === o.state) {
                  var i = 'Tried to set atom or selector "'.concat(
                    a,
                    '" using an updater function while the current state is pending, this is not currently supported.'
                  );
                  throw (de(i), D(i));
                }
                if ("hasError" === o.state) throw o.contents;
                return r(o.contents);
              }
              return r;
            })(e, t, a, n.valueOrUpdater),
            i = y(Ft(e, t, a.key, o).entries());
          try {
            for (i.s(); !(r = i.n()).done; ) {
              var u = l(r.value, 2);
              Yt(t, u[0], u[1]);
            }
          } catch (p) {
            i.e(p);
          } finally {
            i.f();
          }
        } else if ("setLoadable" === n.type) {
          Yt(t, n.recoilValue.key, n.loadable);
        } else if ("markModified" === n.type) {
          var s = n.recoilValue.key;
          t.dirtyAtoms.add(s);
        } else if ("setUnvalidated" === n.type) {
          var c,
            f = n.recoilValue.key,
            d = n.unvalidatedValue,
            h = Bt(f);
          null === h ||
            void 0 === h ||
            null === (c = h.invalidate) ||
            void 0 === c ||
            c.call(h, t),
            t.atomValues.delete(f),
            t.nonvalidatedAtoms.set(f, d),
            t.dirtyAtoms.add(f);
        } else de("Unknown action ".concat(n.type));
      }
      function Yt(e, t, n) {
        "hasValue" === n.state && n.contents instanceof zt
          ? e.atomValues.delete(t)
          : e.atomValues.set(t, n),
          e.dirtyAtoms.add(t),
          e.nonvalidatedAtoms.delete(t);
      }
      function Qt(e, t) {
        e.replaceState(function (n) {
          var r,
            a = Jt(n),
            o = y(t);
          try {
            for (o.s(); !(r = o.n()).done; ) {
              var i = r.value;
              qt(e, a, i);
            }
          } catch (u) {
            o.e(u);
          } finally {
            o.f();
          }
          return en(e, a), Gt(), a;
        });
      }
      function Xt(e, t) {
        if (Zt.length) {
          var n = Zt[Zt.length - 1],
            r = n.get(e);
          r || n.set(e, (r = [])), r.push(t);
        } else Qt(e, [t]);
      }
      var Zt = [];
      function Jt(e) {
        return w(
          w({}, e),
          {},
          {
            atomValues: e.atomValues.clone(),
            nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
            dirtyAtoms: new Set(e.dirtyAtoms),
          }
        );
      }
      function en(e, t) {
        var n,
          r = y(Vt(e, t, t.dirtyAtoms));
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var a,
              o,
              i = n.value;
            null === (a = Bt(i)) ||
              void 0 === a ||
              null === (o = a.invalidate) ||
              void 0 === o ||
              o.call(a, t);
          }
        } catch (u) {
          r.e(u);
        } finally {
          r.f();
        }
      }
      function tn(e, t, n) {
        Xt(e, { type: "set", recoilValue: t, valueOrUpdater: n });
      }
      var nn = {
        RecoilValueReadOnly: $t,
        AbstractRecoilValue: Wt,
        RecoilState: Ht,
        getRecoilValueAsLoadable: function (e, t) {
          var n,
            r,
            a = t.key,
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : e.getState().currentTree,
            i = e.getState();
          o.version !== i.currentTree.version &&
            o.version !==
              (null === (n = i.nextTree) || void 0 === n
                ? void 0
                : n.version) &&
            o.version !==
              (null === (r = i.previousTree) || void 0 === r
                ? void 0
                : r.version) &&
            de("Tried to read from a discarded tree");
          var u = Mt(e, o, a);
          return "loading" === u.state && u.contents.catch(function () {}), u;
        },
        setRecoilValue: tn,
        setRecoilValueLoadable: function (e, t, n) {
          if (n instanceof zt) return tn(e, t, n);
          Xt(e, { type: "setLoadable", recoilValue: t, loadable: n });
        },
        markRecoilValueModified: function (e, t) {
          Xt(e, { type: "markModified", recoilValue: t });
        },
        setUnvalidatedRecoilValue: function (e, t, n) {
          Xt(e, {
            type: "setUnvalidated",
            recoilValue: t,
            unvalidatedValue: n,
          });
        },
        subscribeToRecoilValue: function (e, t, n) {
          var r = t.key,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null,
            o = It(),
            i = e.getState();
          i.nodeToComponentSubscriptions.has(r) ||
            i.nodeToComponentSubscriptions.set(r, new Map()),
            M(i.nodeToComponentSubscriptions.get(r)).set(o, [
              null !== a && void 0 !== a ? a : "<not captured>",
              n,
            ]);
          var u = Ut();
          if (u.early && ("LEGACY" === u.mode || "MUTABLE_SOURCE" === u.mode)) {
            var s = e.getState().nextTree;
            s && s.dirtyAtoms.has(r) && n(s);
          }
          return {
            release: function () {
              var t = e.getState(),
                n = t.nodeToComponentSubscriptions.get(r);
              void 0 !== n && n.has(o)
                ? (n.delete(o),
                  0 === n.size && t.nodeToComponentSubscriptions.delete(r))
                : de(
                    "Subscription missing at release time for atom ".concat(
                      r,
                      ". This is a bug in Recoil."
                    )
                  );
            },
          };
        },
        isRecoilValue: Kt,
        applyAtomValueWrites: function (e, t) {
          var n = e.clone();
          return (
            t.forEach(function (e, t) {
              "hasValue" === e.state && e.contents instanceof zt
                ? n.delete(t)
                : n.set(t, e);
            }),
            n
          );
        },
        batchStart: function () {
          var e = new Map();
          return (
            Zt.push(e),
            function () {
              var t,
                n = y(e);
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var r = l(t.value, 2);
                  Qt(r[0], r[1]);
                }
              } catch (a) {
                n.e(a);
              } finally {
                n.f();
              }
              Zt.pop() !== e && de("Incorrect order of batch popping");
            }
          );
        },
        writeLoadableToTreeState: Yt,
        invalidateDownstreams: en,
        copyTreeState: Jt,
        refreshRecoilValue: function (e, t) {
          var n,
            r = e.getState().currentTree,
            a = jt(t.key);
          null === (n = a.clearCache) || void 0 === n || n.call(a, e, r);
        },
      };
      var rn = function (e, t, n) {
          for (var r = e.entries(), a = r.next(); !a.done; ) {
            var o = a.value;
            if (t.call(n, o[1], o[0], e)) return !0;
            a = r.next();
          }
          return !1;
        },
        an = Pt,
        on = Me.deleteNodeConfigIfPossible,
        un = Me.getNode,
        sn = lt.RetentionZone,
        ln = new Set();
      function cn(e, t) {
        var n = e.getState(),
          r = n.currentTree;
        if (n.nextTree)
          de(
            "releaseNodesNowOnCurrentTree should only be called at the end of a batch"
          );
        else {
          var a,
            o = new Set(),
            i = y(t);
          try {
            for (i.s(); !(a = i.n()).done; ) {
              var u = a.value;
              if (u instanceof sn) {
                var s,
                  l = y(dn(n, u));
                try {
                  for (l.s(); !(s = l.n()).done; ) {
                    var c = s.value;
                    o.add(c);
                  }
                } catch (p) {
                  l.e(p);
                } finally {
                  l.f();
                }
              } else o.add(u);
            }
          } catch (p) {
            i.e(p);
          } finally {
            i.f();
          }
          var f,
            d = (function (e, t) {
              var n = e.getState(),
                r = n.currentTree,
                a = e.getGraph(r.version),
                o = new Set(),
                i = new Set();
              return u(t), o;
              function u(t) {
                var s,
                  l = new Set(),
                  c = (function (e, t, n, r, a) {
                    var o = e.getGraph(t.version),
                      i = [],
                      u = new Set();
                    for (; n.size > 0; ) s(M(n.values().next().value));
                    return i;
                    function s(e) {
                      if (r.has(e) || a.has(e)) n.delete(e);
                      else if (!u.has(e)) {
                        var t = o.nodeToNodeSubscriptions.get(e);
                        if (t) {
                          var l,
                            c = y(t);
                          try {
                            for (c.s(); !(l = c.n()).done; ) {
                              s(l.value);
                            }
                          } catch (p) {
                            c.e(p);
                          } finally {
                            c.f();
                          }
                        }
                        u.add(e), n.delete(e), i.push(e);
                      }
                    }
                  })(e, r, t, o, i),
                  f = y(c);
                try {
                  for (f.s(); !(s = f.n()).done; ) {
                    var d,
                      h = s.value;
                    if ("recoilRoot" !== un(h).retainedBy)
                      if (
                        (null !== (d = n.retention.referenceCounts.get(h)) &&
                        void 0 !== d
                          ? d
                          : 0) > 0
                      )
                        i.add(h);
                      else if (
                        hn(h).some(function (e) {
                          return n.retention.referenceCounts.get(e);
                        })
                      )
                        i.add(h);
                      else {
                        var v = a.nodeToNodeSubscriptions.get(h);
                        v &&
                        rn(v, function (e) {
                          return i.has(e);
                        })
                          ? i.add(h)
                          : (o.add(h), l.add(h));
                      }
                    else i.add(h);
                  }
                } catch (p) {
                  f.e(p);
                } finally {
                  f.f();
                }
                var m,
                  g = new Set(),
                  b = y(l);
                try {
                  for (b.s(); !(m = b.n()).done; ) {
                    var S,
                      w = m.value,
                      k = y(
                        null !== (x = a.nodeDeps.get(w)) && void 0 !== x
                          ? x
                          : ln
                      );
                    try {
                      for (k.s(); !(S = k.n()).done; ) {
                        var x,
                          _ = S.value;
                        o.has(_) || g.add(_);
                      }
                    } catch (p) {
                      k.e(p);
                    } finally {
                      k.f();
                    }
                  }
                } catch (p) {
                  b.e(p);
                } finally {
                  b.f();
                }
                g.size && u(g);
              }
            })(e, o),
            h = y(d);
          try {
            for (h.s(); !(f = h.n()).done; ) {
              fn(e, r, f.value);
            }
          } catch (p) {
            h.e(p);
          } finally {
            h.f();
          }
        }
      }
      function fn(e, t, n) {
        if (ue("recoil_memory_managament_2020")) {
          an(e, n);
          var r = e.getState();
          r.knownAtoms.delete(n),
            r.knownSelectors.delete(n),
            r.nodeTransactionSubscriptions.delete(n),
            r.retention.referenceCounts.delete(n);
          var a,
            o = y(hn(n));
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var i,
                u = a.value;
              null === (i = r.retention.nodesRetainedByZone.get(u)) ||
                void 0 === i ||
                i.delete(n);
            }
          } catch (p) {
            o.e(p);
          } finally {
            o.f();
          }
          t.atomValues.delete(n),
            t.dirtyAtoms.delete(n),
            t.nonvalidatedAtoms.delete(n);
          var s = r.graphsByVersion.get(t.version);
          if (s) {
            var l = s.nodeDeps.get(n);
            if (void 0 !== l) {
              s.nodeDeps.delete(n);
              var c,
                f = y(l);
              try {
                for (f.s(); !(c = f.n()).done; ) {
                  var d,
                    h = c.value;
                  null === (d = s.nodeToNodeSubscriptions.get(h)) ||
                    void 0 === d ||
                    d.delete(n);
                }
              } catch (p) {
                f.e(p);
              } finally {
                f.f();
              }
            }
            s.nodeToNodeSubscriptions.delete(n);
          }
          on(n);
        }
      }
      function dn(e, t) {
        var n;
        return null !== (n = e.retention.nodesRetainedByZone.get(t)) &&
          void 0 !== n
          ? n
          : ln;
      }
      function hn(e) {
        var t = un(e).retainedBy;
        return void 0 === t || "components" === t || "recoilRoot" === t
          ? []
          : t instanceof sn
          ? [t]
          : t;
      }
      function pn(e, t) {
        ue("recoil_memory_managament_2020") &&
          (e.getState().retention.referenceCounts.delete(t),
          (function (e, t) {
            var n = e.getState();
            n.nextTree
              ? n.retention.retainablesToCheckForRelease.add(t)
              : cn(e, new Set([t]));
          })(e, t));
      }
      var vn = 12e4,
        mn = function (e, t, n) {
          var r;
          if (ue("recoil_memory_managament_2020")) {
            var a = e.getState().retention.referenceCounts,
              o = (null !== (r = a.get(t)) && void 0 !== r ? r : 0) + n;
            0 === o ? pn(e, t) : a.set(t, o);
          }
        },
        yn = function (e) {
          if (ue("recoil_memory_managament_2020")) {
            var t = e.getState();
            cn(e, t.retention.retainablesToCheckForRelease),
              t.retention.retainablesToCheckForRelease.clear();
          }
        },
        gn = function (e) {
          return void 0 === e ? "recoilRoot" : e;
        },
        bn = A.unstable_batchedUpdates,
        Sn = nn.batchStart,
        wn =
          {
            unstable_batchedUpdates: { unstable_batchedUpdates: bn }
              .unstable_batchedUpdates,
          }.unstable_batchedUpdates ||
          function (e) {
            return e();
          },
        kn = function (e) {
          wn(function () {
            var t = function () {};
            try {
              (t = Sn()), e();
            } finally {
              t();
            }
          });
        };
      function xn(e) {
        var t, n, r, a, o, i;
        return m().wrap(
          function (u) {
            for (;;)
              switch ((u.prev = u.next)) {
                case 0:
                  (t = y(e)), (u.prev = 1), t.s();
                case 3:
                  if ((n = t.n()).done) {
                    u.next = 24;
                    break;
                  }
                  (r = n.value), (a = y(r)), (u.prev = 6), a.s();
                case 8:
                  if ((o = a.n()).done) {
                    u.next = 14;
                    break;
                  }
                  return (i = o.value), (u.next = 12), i;
                case 12:
                  u.next = 8;
                  break;
                case 14:
                  u.next = 19;
                  break;
                case 16:
                  (u.prev = 16), (u.t0 = u.catch(6)), a.e(u.t0);
                case 19:
                  return (u.prev = 19), a.f(), u.finish(19);
                case 22:
                  u.next = 3;
                  break;
                case 24:
                  u.next = 29;
                  break;
                case 26:
                  (u.prev = 26), (u.t1 = u.catch(1)), t.e(u.t1);
                case 29:
                  return (u.prev = 29), t.f(), u.finish(29);
                case 32:
                case "end":
                  return u.stop();
              }
          },
          O,
          null,
          [
            [1, 26, 29, 32],
            [6, 16, 19, 22],
          ]
        );
      }
      var _n = xn,
        En = "undefined" === typeof Window || "undefined" === typeof window,
        Tn =
          "undefined" !== typeof navigator &&
          "ReactNative" === navigator.product,
        Cn = {
          isSSR: En,
          isReactNative: Tn,
          isWindow: function (e) {
            return !En && (e === window || e instanceof Window);
          },
        };
      var Pn = function (e, t) {
          var n, r;
          return [
            function () {
              var a = t.apply(void 0, arguments);
              return n === a ? r : ((n = a), (r = e.apply(void 0, arguments)));
            },
            function () {
              n = null;
            },
          ];
        },
        An = kn,
        Rn = Ct,
        Ln = Rt,
        Nn = Ye,
        On = tt,
        Dn = Me.DEFAULT_VALUE,
        Vn = Me.recoilValues,
        Mn = Me.recoilValuesForKeys,
        Fn = nn.AbstractRecoilValue,
        In = nn.getRecoilValueAsLoadable,
        jn = nn.setRecoilValue,
        Bn = nn.setUnvalidatedRecoilValue,
        zn = mn,
        Un = Ot,
        Wn = ut.getNextTreeStateVersion,
        Hn = ut.makeEmptyStoreState,
        $n = Cn.isSSR,
        Kn = Pn,
        Gn = (function () {
          function e(t, n) {
            var r = this;
            E(this, e),
              F(this, "_store", void 0),
              F(this, "_refCount", 1),
              F(this, "getLoadable", function (e) {
                return r.checkRefCount_INTERNAL(), In(r._store, e);
              }),
              F(this, "getPromise", function (e) {
                return r.checkRefCount_INTERNAL(), r.getLoadable(e).toPromise();
              }),
              F(this, "getNodes_UNSTABLE", function (e) {
                if (
                  (r.checkRefCount_INTERNAL(),
                  !0 === (null === e || void 0 === e ? void 0 : e.isModified))
                ) {
                  if (
                    !1 ===
                    (null === e || void 0 === e ? void 0 : e.isInitialized)
                  )
                    return [];
                  var t = r._store.getState().currentTree;
                  return Mn(t.dirtyAtoms);
                }
                var n = r._store.getState().knownAtoms,
                  a = r._store.getState().knownSelectors;
                return null ==
                  (null === e || void 0 === e ? void 0 : e.isInitialized)
                  ? Vn.values()
                  : !0 === e.isInitialized
                  ? Mn(_n([n, a]))
                  : dt(Vn.values(), function (e) {
                      var t = e.key;
                      return !n.has(t) && !a.has(t);
                    });
              }),
              F(this, "getInfo_UNSTABLE", function (e) {
                var t = e.key;
                return (
                  r.checkRefCount_INTERNAL(),
                  Ln(r._store, r._store.getState().currentTree, t)
                );
              }),
              F(this, "map", function (e) {
                r.checkRefCount_INTERNAL();
                var t = new Zn(r, An);
                return e(t), t;
              }),
              F(
                this,
                "asyncMap",
                (function () {
                  var e = s(
                    m().mark(function e(t) {
                      var n;
                      return m().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                r.checkRefCount_INTERNAL(),
                                (n = new Zn(r, An)).retain(),
                                (e.next = 5),
                                t(n)
                              );
                            case 5:
                              return (
                                n.autoRelease_INTERNAL(), e.abrupt("return", n)
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              (this._store = {
                storeID: On(),
                parentStoreID: n,
                getState: function () {
                  return t;
                },
                replaceState: function (e) {
                  t.currentTree = e(t.currentTree);
                },
                getGraph: function (e) {
                  var n = t.graphsByVersion;
                  if (n.has(e)) return M(n.get(e));
                  var r = Nn();
                  return n.set(e, r), r;
                },
                subscribeToTransactions: function () {
                  return { release: function () {} };
                },
                addTransactionMetadata: function () {
                  throw D("Cannot subscribe to Snapshots");
                },
              });
            var a,
              o = y(this._store.getState().knownAtoms);
            try {
              for (o.s(); !(a = o.n()).done; ) {
                var i = a.value;
                Rn(this._store, i, "get"), zn(this._store, i, 1);
              }
            } catch (u) {
              o.e(u);
            } finally {
              o.f();
            }
            this.autoRelease_INTERNAL();
          }
          return (
            C(e, [
              {
                key: "retain",
                value: function () {
                  var e = this;
                  this._refCount <= 0 &&
                    de(
                      "Attempt to retain() Snapshot that was already released."
                    ),
                    this._refCount++;
                  var t = !1;
                  return function () {
                    t || ((t = !0), e._release());
                  };
                },
              },
              {
                key: "autoRelease_INTERNAL",
                value: function () {
                  var e = this;
                  $n ||
                    window.setTimeout(function () {
                      return e._release();
                    }, 10);
                },
              },
              {
                key: "_release",
                value: function () {
                  if ((this._refCount--, 0 === this._refCount)) {
                    if (
                      (this._store
                        .getState()
                        .nodeCleanupFunctions.forEach(function (e) {
                          return e();
                        }),
                      this._store.getState().nodeCleanupFunctions.clear(),
                      !ue("recoil_memory_managament_2020"))
                    )
                      return;
                  } else this._refCount;
                },
              },
              {
                key: "isRetained",
                value: function () {
                  return this._refCount > 0;
                },
              },
              {
                key: "checkRefCount_INTERNAL",
                value: function () {
                  ue("recoil_memory_managament_2020") && this._refCount;
                },
              },
              {
                key: "getStore_INTERNAL",
                value: function () {
                  return this.checkRefCount_INTERNAL(), this._store;
                },
              },
              {
                key: "getID",
                value: function () {
                  return (
                    this.checkRefCount_INTERNAL(),
                    this._store.getState().currentTree.stateID
                  );
                },
              },
              {
                key: "getStoreID",
                value: function () {
                  return this.checkRefCount_INTERNAL(), this._store.storeID;
                },
              },
            ]),
            e
          );
        })();
      function qn(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = e.getState(),
          a = n ? Wn() : t.version;
        return {
          currentTree: {
            version: n ? a : t.version,
            stateID: n ? a : t.stateID,
            transactionMetadata: w({}, t.transactionMetadata),
            dirtyAtoms: new Set(t.dirtyAtoms),
            atomValues: t.atomValues.clone(),
            nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
          },
          commitDepth: 0,
          nextTree: null,
          previousTree: null,
          knownAtoms: new Set(r.knownAtoms),
          knownSelectors: new Set(r.knownSelectors),
          transactionSubscriptions: new Map(),
          nodeTransactionSubscriptions: new Map(),
          nodeToComponentSubscriptions: new Map(),
          queuedComponentCallbacks_DEPRECATED: [],
          suspendedComponentResolvers: new Set(),
          graphsByVersion: new Map().set(a, e.getGraph(t.version)),
          retention: {
            referenceCounts: new Map(),
            nodesRetainedByZone: new Map(),
            retainablesToCheckForRelease: new Set(),
          },
          nodeCleanupFunctions: new Map(
            Pe(r.nodeCleanupFunctions.entries(), function (e) {
              return [l(e, 1)[0], function () {}];
            })
          ),
        };
      }
      var Yn = l(
          Kn(
            function (e, t) {
              var n,
                r = e.getState(),
                a =
                  "latest" === t
                    ? null !== (n = r.nextTree) && void 0 !== n
                      ? n
                      : r.currentTree
                    : M(r.previousTree);
              return new Gn(qn(e, a), e.storeID);
            },
            function (e, t) {
              var n, r;
              return (
                String(t) +
                String(e.storeID) +
                String(
                  null === (n = e.getState().nextTree) || void 0 === n
                    ? void 0
                    : n.version
                ) +
                String(e.getState().currentTree.version) +
                String(
                  null === (r = e.getState().previousTree) || void 0 === r
                    ? void 0
                    : r.version
                )
              );
            }
          ),
          2
        ),
        Qn = Yn[0],
        Xn = Yn[1];
      Un(Xn);
      var Zn = (function (e) {
          x(n, e);
          var t = _(n);
          function n(e, r) {
            var a;
            return (
              E(this, n),
              F(
                k(
                  (a = t.call(
                    this,
                    qn(
                      e.getStore_INTERNAL(),
                      e.getStore_INTERNAL().getState().currentTree,
                      !0
                    ),
                    e.getStoreID()
                  ))
                ),
                "_batch",
                void 0
              ),
              F(k(a), "set", function (e, t) {
                a.checkRefCount_INTERNAL();
                var n = a.getStore_INTERNAL();
                a._batch(function () {
                  zn(n, e.key, 1), jn(a.getStore_INTERNAL(), e, t);
                });
              }),
              F(k(a), "reset", function (e) {
                a.checkRefCount_INTERNAL();
                var t = a.getStore_INTERNAL();
                a._batch(function () {
                  zn(t, e.key, 1), jn(a.getStore_INTERNAL(), e, Dn);
                });
              }),
              F(k(a), "setUnvalidatedAtomValues_DEPRECATED", function (e) {
                a.checkRefCount_INTERNAL();
                var t = a.getStore_INTERNAL();
                An(function () {
                  var n,
                    r = y(e.entries());
                  try {
                    for (r.s(); !(n = r.n()).done; ) {
                      var a = l(n.value, 2),
                        o = a[0],
                        i = a[1];
                      zn(t, o, 1), Bn(t, new Fn(o), i);
                    }
                  } catch (u) {
                    r.e(u);
                  } finally {
                    r.f();
                  }
                });
              }),
              (a._batch = r),
              a
            );
          }
          return C(n);
        })(Gn),
        Jn = {
          Snapshot: Gn,
          MutableSnapshot: Zn,
          freshSnapshot: function (e) {
            var t = new Gn(Hn());
            return null != e ? t.map(e) : t;
          },
          cloneSnapshot: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "latest",
              n = Qn(e, t);
            return n.isRetained() ? n : (Xn(), Qn(e, t));
          },
        },
        er = Jn.Snapshot,
        tr = Jn.MutableSnapshot,
        nr = Jn.freshSnapshot,
        rr = Jn.cloneSnapshot,
        ar = Object.freeze({
          __proto__: null,
          Snapshot: er,
          MutableSnapshot: tr,
          freshSnapshot: nr,
          cloneSnapshot: rr,
        });
      var or = function () {
          for (
            var e = new Set(), t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          for (var a = 0, o = n; a < o.length; a++) {
            var i,
              u = y(o[a]);
            try {
              for (u.s(); !(i = u.n()).done; ) {
                var s = i.value;
                e.add(s);
              }
            } catch (l) {
              u.e(l);
            } finally {
              u.f();
            }
          }
          return e;
        },
        ir = P.useRef;
      var ur = function (e) {
          var t = ir(e);
          return (
            t.current === e && "function" === typeof e && (t.current = e()), t
          );
        },
        sr = ut.getNextTreeStateVersion,
        lr = ut.makeEmptyStoreState,
        cr = Pt,
        fr = Lt,
        dr = Ct,
        hr = Tt,
        pr = At,
        vr = Ye,
        mr = qe,
        yr = tt,
        gr = ye.createMutableSource,
        br = ye.reactMode,
        Sr = nn.applyAtomValueWrites,
        wr = yn,
        kr = ar.freshSnapshot,
        xr = P.useCallback,
        _r = P.useContext,
        Er = P.useEffect,
        Tr = P.useMemo,
        Cr = P.useRef,
        Pr = P.useState;
      function Ar() {
        throw D("This component must be used inside a <RecoilRoot> component.");
      }
      var Rr = Object.freeze({
          storeID: yr(),
          getState: Ar,
          replaceState: Ar,
          getGraph: Ar,
          subscribeToTransactions: Ar,
          addTransactionMetadata: Ar,
        }),
        Lr = !1;
      function Nr(e) {
        if (Lr)
          throw D(
            "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
          );
        var t = e.getState();
        if (null === t.nextTree) {
          ue("recoil_memory_managament_2020") &&
            ue("recoil_release_on_cascading_update_killswitch_2021") &&
            t.commitDepth > 0 &&
            wr(e);
          var n = t.currentTree.version,
            r = sr();
          (t.nextTree = w(
            w({}, t.currentTree),
            {},
            {
              version: r,
              stateID: r,
              dirtyAtoms: new Set(),
              transactionMetadata: {},
            }
          )),
            t.graphsByVersion.set(r, mr(M(t.graphsByVersion.get(n))));
        }
      }
      var Or = P.createContext({ current: Rr }),
        Dr = function () {
          return _r(Or);
        },
        Vr = P.createContext(null);
      function Mr(e, t, n) {
        var r,
          a = y(fr(e, n, n.dirtyAtoms));
        try {
          for (a.s(); !(r = a.n()).done; ) {
            var o = r.value,
              i = t.nodeToComponentSubscriptions.get(o);
            if (i) {
              var u,
                s = y(i);
              try {
                for (s.s(); !(u = s.n()).done; ) {
                  var c = l(u.value, 2),
                    f = (c[0], l(c[1], 2));
                  f[0];
                  (0, f[1])(n);
                }
              } catch (d) {
                s.e(d);
              } finally {
                s.f();
              }
            }
          }
        } catch (d) {
          a.e(d);
        } finally {
          a.f();
        }
      }
      function Fr(e) {
        var t = e.getState(),
          n = t.currentTree,
          r = n.dirtyAtoms;
        if (r.size) {
          var a,
            o = y(t.nodeTransactionSubscriptions);
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var i = l(a.value, 2),
                u = i[0],
                s = i[1];
              if (r.has(u)) {
                var c,
                  f = y(s);
                try {
                  for (f.s(); !(c = f.n()).done; ) {
                    var d = l(c.value, 2);
                    d[0];
                    (0, d[1])(e);
                  }
                } catch (m) {
                  f.e(m);
                } finally {
                  f.f();
                }
              }
            }
          } catch (m) {
            o.e(m);
          } finally {
            o.f();
          }
          var h,
            p = y(t.transactionSubscriptions);
          try {
            for (p.s(); !(h = p.n()).done; ) {
              var v = l(h.value, 2);
              v[0];
              (0, v[1])(e);
            }
          } catch (m) {
            p.e(m);
          } finally {
            p.f();
          }
          (!br().early || t.suspendedComponentResolvers.size > 0) &&
            (Mr(e, t, n),
            t.suspendedComponentResolvers.forEach(function (e) {
              return e();
            }),
            t.suspendedComponentResolvers.clear());
        }
        t.queuedComponentCallbacks_DEPRECATED.forEach(function (e) {
          return e(n);
        }),
          t.queuedComponentCallbacks_DEPRECATED.splice(
            0,
            t.queuedComponentCallbacks_DEPRECATED.length
          );
      }
      function Ir(e) {
        var t = e.setNotifyBatcherOfChange,
          n = Dr(),
          r = l(Pr([]), 2)[1];
        return (
          t(function () {
            return r({});
          }),
          Er(
            function () {
              return (
                t(function () {
                  return r({});
                }),
                function () {
                  t(function () {});
                }
              );
            },
            [t]
          ),
          Er(function () {
            Fe.enqueueExecution("Batcher", function () {
              !(function (e) {
                var t = e.getState();
                t.commitDepth++;
                try {
                  var n = t.nextTree;
                  if (null == n) return;
                  (t.previousTree = t.currentTree),
                    (t.currentTree = n),
                    (t.nextTree = null),
                    Fr(e),
                    null != t.previousTree
                      ? t.graphsByVersion.delete(t.previousTree.version)
                      : de(
                          "Ended batch with no previous state, which is unexpected",
                          "recoil"
                        ),
                    (t.previousTree = null),
                    ue("recoil_memory_managament_2020") && null == n && wr(e);
                } finally {
                  t.commitDepth--;
                }
              })(n.current);
            });
          }),
          null
        );
      }
      var jr = 0;
      function Br(e) {
        var t,
          n = e.initializeState_DEPRECATED,
          r = e.initializeState,
          a = e.store_INTERNAL,
          o = e.children,
          i = function (e) {
            var n = t.current.graphsByVersion;
            if (n.has(e)) return M(n.get(e));
            var r = vr();
            return n.set(e, r), r;
          },
          u = function (e, t) {
            if (null == t) {
              var n = d.current.getState().transactionSubscriptions,
                r = jr++;
              return (
                n.set(r, e),
                {
                  release: function () {
                    n.delete(r);
                  },
                }
              );
            }
            var a = d.current.getState().nodeTransactionSubscriptions;
            a.has(t) || a.set(t, new Map());
            var o = jr++;
            return (
              M(a.get(t)).set(o, e),
              {
                release: function () {
                  var e = a.get(t);
                  e && (e.delete(o), 0 === e.size && a.delete(t));
                },
              }
            );
          },
          s = function (e) {
            Nr(d.current);
            for (var t = 0, n = Object.keys(e); t < n.length; t++) {
              var r = n[t];
              M(d.current.getState().nextTree).transactionMetadata[r] = e[r];
            }
          },
          l = function (e) {
            Nr(d.current);
            var n,
              r = M(t.current.nextTree);
            try {
              (Lr = !0), (n = e(r));
            } finally {
              Lr = !1;
            }
            n !== r &&
              ((t.current.nextTree = n),
              br().early && Mr(d.current, t.current, n),
              M(c.current)());
          },
          c = Cr(null),
          f = xr(
            function (e) {
              c.current = e;
            },
            [c]
          ),
          d = ur(function () {
            return null !== a && void 0 !== a
              ? a
              : {
                  storeID: yr(),
                  getState: function () {
                    return t.current;
                  },
                  replaceState: l,
                  getGraph: i,
                  subscribeToTransactions: u,
                  addTransactionMetadata: s,
                };
          });
        null != a && (d.current = a),
          (t = ur(function () {
            return null != n
              ? (function (e, t) {
                  var n = lr();
                  return (
                    t({
                      set: function (t, r) {
                        var a,
                          o = n.currentTree,
                          i = hr(e, o, t.key, r),
                          u = new Set(i.keys()),
                          s = o.nonvalidatedAtoms.clone(),
                          l = y(u);
                        try {
                          for (l.s(); !(a = l.n()).done; ) {
                            var c = a.value;
                            s.delete(c);
                          }
                        } catch (f) {
                          l.e(f);
                        } finally {
                          l.f();
                        }
                        n.currentTree = w(
                          w({}, o),
                          {},
                          {
                            dirtyAtoms: or(o.dirtyAtoms, u),
                            atomValues: Sr(o.atomValues, i),
                            nonvalidatedAtoms: s,
                          }
                        );
                      },
                      setUnvalidatedAtomValues: function (e) {
                        e.forEach(function (e, t) {
                          n.currentTree = pr(n.currentTree, t, e);
                        });
                      },
                    }),
                    n
                  );
                })(d.current, n)
              : null != r
              ? (function (e) {
                  var t = kr(e),
                    n = t.getStore_INTERNAL().getState();
                  return (
                    t.retain(),
                    n.nodeCleanupFunctions.forEach(function (e) {
                      return e();
                    }),
                    n.nodeCleanupFunctions.clear(),
                    n
                  );
                })(r)
              : lr();
          }));
        var h = Tr(
          function () {
            return null === gr || void 0 === gr
              ? void 0
              : gr(t, function () {
                  return t.current.currentTree.version;
                });
          },
          [t]
        );
        return (
          Er(
            function () {
              var e,
                t = d.current,
                n = y(new Set(t.getState().knownAtoms));
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  dr(t, r, "get");
                }
              } catch (a) {
                n.e(a);
              } finally {
                n.f();
              }
              return function () {
                var e,
                  n = y(t.getState().knownAtoms);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var r = e.value;
                    cr(t, r);
                  }
                } catch (a) {
                  n.e(a);
                } finally {
                  n.f();
                }
              };
            },
            [d]
          ),
          P.createElement(
            Or.Provider,
            { value: d },
            P.createElement(
              Vr.Provider,
              { value: h },
              P.createElement(Ir, { setNotifyBatcherOfChange: f }),
              o
            )
          )
        );
      }
      var zr = function (e) {
          var t = e.override,
            n = i(e, R),
            r = Dr();
          return !1 === t && r.current !== Rr
            ? e.children
            : P.createElement(Br, n);
        },
        Ur = Dr,
        Wr = function () {
          var e = _r(Vr);
          return (
            null == e &&
              Ce(
                "Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks."
              ),
            e
          );
        },
        Hr = function () {
          return Dr().current.storeID;
        };
      var $r = function (e, t) {
          if (e === t) return !0;
          if (e.length !== t.length) return !1;
          for (var n = 0, r = e.length; n < r; n++)
            if (e[n] !== t[n]) return !1;
          return !0;
        },
        Kr = P.useEffect,
        Gr = P.useRef;
      var qr = function (e) {
          var t = Gr();
          return (
            Kr(function () {
              t.current = e;
            }),
            t.current
          );
        },
        Yr = Ur,
        Qr = vn,
        Xr = mn,
        Zr = lt.RetentionZone,
        Jr = P.useEffect,
        ea = P.useRef,
        ta = Cn.isSSR;
      var na = function (e) {
        if (ue("recoil_memory_managament_2020"))
          return (function (e) {
            var t = Array.isArray(e) ? e : [e],
              n = t.map(function (e) {
                return e instanceof Zr ? e : e.key;
              }),
              r = Yr();
            Jr(function () {
              if (ue("recoil_memory_managament_2020")) {
                var e = r.current;
                if (a.current && !ta)
                  window.clearTimeout(a.current), (a.current = null);
                else {
                  var t,
                    o = y(n);
                  try {
                    for (o.s(); !(t = o.n()).done; ) {
                      var i = t.value;
                      Xr(e, i, 1);
                    }
                  } catch (u) {
                    o.e(u);
                  } finally {
                    o.f();
                  }
                }
                return function () {
                  var t,
                    r = y(n);
                  try {
                    for (r.s(); !(t = r.n()).done; ) {
                      var a = t.value;
                      Xr(e, a, -1);
                    }
                  } catch (u) {
                    r.e(u);
                  } finally {
                    r.f();
                  }
                };
              }
            }, [r].concat(o(n)));
            var a = ea(),
              i = qr(n);
            if (!ta && (void 0 === i || !$r(i, n))) {
              var u,
                s = r.current,
                l = y(n);
              try {
                for (l.s(); !(u = l.n()).done; ) {
                  var c = u.value;
                  Xr(s, c, 1);
                }
              } catch (p) {
                l.e(p);
              } finally {
                l.f();
              }
              if (i) {
                var f,
                  d = y(i);
                try {
                  for (d.s(); !(f = d.n()).done; ) {
                    var h = f.value;
                    Xr(s, h, -1);
                  }
                } catch (p) {
                  d.e(p);
                } finally {
                  d.f();
                }
              }
              a.current && window.clearTimeout(a.current),
                (a.current = window.setTimeout(function () {
                  a.current = null;
                  var e,
                    t = y(n);
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var r = e.value;
                      Xr(s, r, -1);
                    }
                  } catch (p) {
                    t.e(p);
                  } finally {
                    t.f();
                  }
                }, Qr));
            }
          })(e);
      };
      var ra = function () {
          return "<component name not available>";
        },
        aa = Me.DEFAULT_VALUE,
        oa = ye.currentRendererSupportsUseSyncExternalStore,
        ia = ye.reactMode,
        ua = ye.useMutableSource,
        sa = ye.useSyncExternalStore,
        la = Wr,
        ca = Ur,
        fa = (Te.isRecoilValue, nn.getRecoilValueAsLoadable),
        da = nn.setRecoilValue,
        ha = nn.subscribeToRecoilValue,
        pa = P.useCallback,
        va = P.useEffect,
        ma = P.useMemo,
        ya = P.useRef,
        ga = P.useState,
        ba = Cn.isSSR;
      function Sa(e, t, n) {
        if ("hasValue" === e.state) return e.contents;
        if ("loading" === e.state)
          throw new Promise(function (t) {
            var r = n.current.getState().suspendedComponentResolvers;
            r.add(t),
              ba &&
                V(e.contents) &&
                e.contents.finally(function () {
                  r.delete(t);
                });
          });
        throw "hasError" === e.state
          ? e.contents
          : D('Invalid value of loadable atom "'.concat(t.key, '"'));
      }
      function wa(e) {
        var t = ca(),
          n = ra(),
          r = pa(
            function () {
              var n;
              var r = t.current,
                a = r.getState(),
                o =
                  ia().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return { loadable: fa(r, e, o), key: e.key };
            },
            [t, e]
          ),
          a = pa(function (e) {
            var t;
            return function () {
              var n,
                r,
                a = e();
              return null !== (n = t) &&
                void 0 !== n &&
                n.loadable.is(a.loadable) &&
                (null === (r = t) || void 0 === r ? void 0 : r.key) === a.key
                ? t
                : ((t = a), a);
            };
          }, []),
          o = ma(
            function () {
              return a(r);
            },
            [r, a]
          ),
          i = pa(
            function (r) {
              var a = t.current;
              return ha(a, e, r, n).release;
            },
            [t, e, n]
          );
        return sa(i, o, o).loadable;
      }
      function ka(e) {
        var t = ca(),
          n = pa(
            function () {
              var n,
                r = t.current,
                a = r.getState(),
                o =
                  ia().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return fa(r, e, o);
            },
            [t, e]
          ),
          r = pa(
            function () {
              return n();
            },
            [n]
          ),
          a = ra(),
          o = pa(
            function (r, o) {
              var i = t.current;
              return ha(
                i,
                e,
                function () {
                  if (!ue("recoil_suppress_rerender_in_callback")) return o();
                  var e = n();
                  s.current.is(e) || o(), (s.current = e);
                },
                a
              ).release;
            },
            [t, e, a, n]
          ),
          i = la();
        if (null == i)
          throw D(
            "Recoil hooks must be used in components contained within a <RecoilRoot> component."
          );
        var u = ua(i, r, o),
          s = ya(u);
        return (
          va(function () {
            s.current = u;
          }),
          u
        );
      }
      function xa(e) {
        var t = ca(),
          n = ra(),
          r = pa(
            function () {
              var n;
              var r = t.current,
                a = r.getState(),
                o =
                  ia().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return fa(r, e, o);
            },
            [t, e]
          ),
          a = pa(
            function () {
              return { loadable: r(), key: e.key };
            },
            [r, e.key]
          ),
          o = pa(
            function (e) {
              var t = a();
              return e.loadable.is(t.loadable) && e.key === t.key ? e : t;
            },
            [a]
          );
        va(
          function () {
            var r = ha(
              t.current,
              e,
              function (e) {
                s(o);
              },
              n
            );
            return s(o), r.release;
          },
          [n, e, t, o]
        );
        var i = l(ga(a), 2),
          u = i[0],
          s = i[1];
        return u.key !== e.key ? a().loadable : u.loadable;
      }
      function _a(e) {
        var t = ca(),
          n = l(ga([]), 2)[1],
          r = ra(),
          a = pa(
            function () {
              var n;
              var r = t.current,
                a = r.getState(),
                o =
                  ia().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return fa(r, e, o);
            },
            [t, e]
          ),
          o = a(),
          i = ya(o);
        return (
          va(function () {
            i.current = o;
          }),
          va(
            function () {
              var o = t.current,
                u = o.getState(),
                s = ha(
                  o,
                  e,
                  function (e) {
                    var t;
                    if (!ue("recoil_suppress_rerender_in_callback"))
                      return n([]);
                    var r = a();
                    (null !== (t = i.current) && void 0 !== t && t.is(r)) ||
                      n(r),
                      (i.current = r);
                  },
                  r
                );
              if (u.nextTree)
                o.getState().queuedComponentCallbacks_DEPRECATED.push(
                  function () {
                    (i.current = null), n([]);
                  }
                );
              else {
                var l;
                if (!ue("recoil_suppress_rerender_in_callback")) return n([]);
                var c = a();
                (null !== (l = i.current) && void 0 !== l && l.is(c)) || n(c),
                  (i.current = c);
              }
              return s.release;
            },
            [r, a, e, t]
          ),
          o
        );
      }
      function Ea(e) {
        return (
          ue("recoil_memory_managament_2020") && na(e),
          {
            TRANSITION_SUPPORT: xa,
            SYNC_EXTERNAL_STORE: oa() ? wa : xa,
            MUTABLE_SOURCE: ka,
            LEGACY: _a,
          }[ia().mode](e)
        );
      }
      function Ta(e) {
        var t = ca();
        return Sa(Ea(e), e, t);
      }
      function Ca(e) {
        var t = ca();
        return pa(
          function (n) {
            da(t.current, e, n);
          },
          [t, e]
        );
      }
      function Pa(e) {
        return ue("recoil_memory_managament_2020") && na(e), xa(e);
      }
      function Aa(e) {
        var t = ca();
        return Sa(Pa(e), e, t);
      }
      var Ra = function (e) {
          return [Ta(e), Ca(e)];
        },
        La = function (e) {
          return [Ea(e), Ca(e)];
        },
        Na = Ta,
        Oa = Ea,
        Da = function (e) {
          var t = ca();
          return pa(
            function () {
              da(t.current, e, aa);
            },
            [t, e]
          );
        },
        Va = Ca,
        Ma = Pa,
        Fa = Aa,
        Ia = function (e) {
          return [Aa(e), Ca(e)];
        };
      var ja = kn,
        Ba = Me.DEFAULT_VALUE,
        za = Me.getNode,
        Ua = Ur,
        Wa = nn.AbstractRecoilValue,
        Ha = nn.setRecoilValueLoadable,
        $a = vn,
        Ka = ar.cloneSnapshot,
        Ga = P.useCallback,
        qa = P.useEffect,
        Ya = P.useRef,
        Qa = P.useState,
        Xa = Cn.isSSR;
      function Za(e) {
        var t = Ua();
        qa(
          function () {
            return t.current.subscribeToTransactions(e).release;
          },
          [e, t]
        );
      }
      function Ja(e, t) {
        var n,
          r = e.getState(),
          a = null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree,
          o = t.getStore_INTERNAL().getState().currentTree;
        ja(function () {
          for (
            var n = new Set(),
              r = 0,
              i = [a.atomValues.keys(), o.atomValues.keys()];
            r < i.length;
            r++
          ) {
            var u,
              s = y(i[r]);
            try {
              for (s.s(); !(u = s.n()).done; ) {
                var l,
                  c,
                  f = u.value;
                (null === (l = a.atomValues.get(f)) || void 0 === l
                  ? void 0
                  : l.contents) !==
                  (null === (c = o.atomValues.get(f)) || void 0 === c
                    ? void 0
                    : c.contents) &&
                  za(f).shouldRestoreFromSnapshots &&
                  n.add(f);
              }
            } catch (d) {
              s.e(d);
            } finally {
              s.f();
            }
          }
          n.forEach(function (t) {
            Ha(e, new Wa(t), o.atomValues.has(t) ? M(o.atomValues.get(t)) : Ba);
          }),
            e.replaceState(function (e) {
              return w(w({}, e), {}, { stateID: t.getID() });
            });
        });
      }
      var eo = function () {
          var e = Ua(),
            t = l(
              Qa(function () {
                return Ka(e.current);
              }),
              2
            ),
            n = t[0],
            r = t[1],
            a = qr(n),
            o = Ya(),
            i = Ya();
          if (
            (Za(
              Ga(function (e) {
                return r(Ka(e));
              }, [])
            ),
            qa(
              function () {
                var e,
                  t = n.retain();
                o.current &&
                  !Xa &&
                  (window.clearTimeout(o.current),
                  (o.current = null),
                  null === (e = i.current) || void 0 === e || e.call(i),
                  (i.current = null));
                return function () {
                  window.setTimeout(t, 10);
                };
              },
              [n]
            ),
            a !== n && !Xa)
          ) {
            var u;
            if (o.current)
              window.clearTimeout(o.current),
                (o.current = null),
                null === (u = i.current) || void 0 === u || u.call(i),
                (i.current = null);
            (i.current = n.retain()),
              (o.current = window.setTimeout(function () {
                var e;
                (o.current = null),
                  null === (e = i.current) || void 0 === e || e.call(i),
                  (i.current = null);
              }, $a));
          }
          return n;
        },
        to = Ja,
        no = function () {
          var e = Ua();
          return Ga(
            function (t) {
              return Ja(e.current, t);
            },
            [e]
          );
        },
        ro = function (e) {
          Za(
            Ga(
              function (t) {
                var n = Ka(t, "latest"),
                  r = Ka(t, "previous");
                e({ snapshot: n, previousSnapshot: r });
              },
              [e]
            )
          );
        },
        ao = Rt,
        oo = Ur;
      var io = function () {
          var e = oo();
          return function (t) {
            var n = t.key;
            return ao(e.current, e.current.getState().currentTree, n);
          };
        },
        uo = ye.reactMode,
        so = zr,
        lo = Ur,
        co = P.useMemo;
      var fo = function () {
          "MUTABLE_SOURCE" === uo().mode &&
            console.warn(
              "Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode."
            );
          var e = lo().current;
          return co(
            function () {
              return function (t) {
                var n = t.children;
                return P.createElement(so, { store_INTERNAL: e }, n);
              };
            },
            [e]
          );
        },
        ho = re.loadableWithValue,
        po = Ct,
        vo = Me.DEFAULT_VALUE,
        mo = Me.getNode,
        yo = nn.copyTreeState,
        go = nn.getRecoilValueAsLoadable,
        bo = nn.invalidateDownstreams,
        So = nn.writeLoadableToTreeState;
      function wo(e) {
        return "atom" === mo(e.key).nodeType;
      }
      var ko = (function () {
        function e(t, n) {
          var r = this;
          E(this, e),
            F(this, "_store", void 0),
            F(this, "_treeState", void 0),
            F(this, "_changes", void 0),
            F(this, "get", function (e) {
              if (r._changes.has(e.key)) return r._changes.get(e.key);
              if (!wo(e))
                throw D(
                  "Reading selectors within atomicUpdate is not supported"
                );
              var t = go(r._store, e, r._treeState);
              if ("hasValue" === t.state) return t.contents;
              throw "hasError" === t.state
                ? t.contents
                : D(
                    "Expected Recoil atom ".concat(
                      e.key,
                      " to have a value, but it is in a loading state."
                    )
                  );
            }),
            F(this, "set", function (e, t) {
              if (!wo(e))
                throw D(
                  "Setting selectors within atomicUpdate is not supported"
                );
              if ("function" === typeof t) {
                var n = r.get(e);
                r._changes.set(e.key, t(n));
              } else po(r._store, e.key, "set"), r._changes.set(e.key, t);
            }),
            F(this, "reset", function (e) {
              r.set(e, vo);
            }),
            (this._store = t),
            (this._treeState = n),
            (this._changes = new Map());
        }
        return (
          C(e, [
            {
              key: "newTreeState_INTERNAL",
              value: function () {
                if (0 === this._changes.size) return this._treeState;
                var e,
                  t = yo(this._treeState),
                  n = y(this._changes);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var r = l(e.value, 2),
                      a = r[0],
                      o = r[1];
                    So(t, a, ho(o));
                  }
                } catch (i) {
                  n.e(i);
                } finally {
                  n.f();
                }
                return bo(this._store, t), t;
              },
            },
          ]),
          e
        );
      })();
      var xo = function (e) {
          return function (t) {
            e.replaceState(function (n) {
              var r = new ko(e, n);
              return t(r), r.newTreeState_INTERNAL();
            });
          };
        },
        _o = xo,
        Eo = Object.freeze({ __proto__: null, atomicUpdater: _o });
      var To = function (e, t) {
          if (!e) throw new Error(t);
        },
        Co = Eo.atomicUpdater,
        Po = kn,
        Ao = Me.DEFAULT_VALUE,
        Ro = Ur,
        Lo = nn.refreshRecoilValue,
        No = nn.setRecoilValue,
        Oo = ar.cloneSnapshot,
        Do = to,
        Vo = P.useCallback,
        Mo = C(function e() {
          E(this, e);
        }),
        Fo = new Mo();
      function Io(e, t, n, r) {
        var a,
          i,
          u = Fo;
        (Po(function () {
          var i =
            "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
          if ("function" !== typeof t) throw D(i);
          var s = ht(
              w(
                w({}, null !== r && void 0 !== r ? r : {}),
                {},
                {
                  set: function (t, n) {
                    return No(e, t, n);
                  },
                  reset: function (t) {
                    return No(e, t, Ao);
                  },
                  refresh: function (t) {
                    return Lo(e, t);
                  },
                  gotoSnapshot: function (t) {
                    return Do(e, t);
                  },
                  transact_UNSTABLE: function (t) {
                    return Co(e)(t);
                  },
                }
              ),
              {
                snapshot: function () {
                  var t = Oo(e);
                  return (a = t.retain()), t;
                },
              }
            ),
            l = t(s);
          if ("function" !== typeof l) throw D(i);
          u = l.apply(void 0, o(n));
        }),
        u instanceof Mo && To(!1),
        V(u))
          ? (u = u.finally(function () {
              var e;
              null === (e = a) || void 0 === e || e();
            }))
          : null === (i = a) || void 0 === i || i();
        return u;
      }
      var jo = Io,
        Bo = function (e, t) {
          var n = Ro();
          return Vo(
            function () {
              for (
                var t = arguments.length, r = new Array(t), a = 0;
                a < t;
                a++
              )
                r[a] = arguments[a];
              return Io(n.current, e, r);
            },
            null != t ? [].concat(o(t), [n]) : void 0
          );
        },
        zo = Ur,
        Uo = nn.refreshRecoilValue,
        Wo = P.useCallback;
      var Ho = function (e) {
          var t = zo();
          return Wo(
            function () {
              var n = t.current;
              Uo(n, e);
            },
            [e, t]
          );
        },
        $o = Eo.atomicUpdater,
        Ko = Ur,
        Go = P.useMemo;
      var qo = function (e, t) {
          var n = Ko();
          return Go(
            function () {
              return function () {
                for (
                  var t = arguments.length, r = new Array(t), a = 0;
                  a < t;
                  a++
                )
                  r[a] = arguments[a];
                $o(n.current)(function (t) {
                  e(t).apply(void 0, r);
                });
              };
            },
            null != t ? [].concat(o(t), [n]) : void 0
          );
        },
        Yo = {
          WrappedValue: C(function e(t) {
            E(this, e), F(this, "value", void 0), (this.value = t);
          }),
        }.WrappedValue,
        Qo = Object.freeze({ __proto__: null, WrappedValue: Yo }),
        Xo = ye.isFastRefreshEnabled,
        Zo = (function (e) {
          x(n, e);
          var t = _(n);
          function n() {
            return E(this, n), t.apply(this, arguments);
          }
          return C(n);
        })(p(Error)),
        Jo = (function () {
          function e(t) {
            var n, r, a;
            E(this, e),
              F(this, "_name", void 0),
              F(this, "_numLeafs", void 0),
              F(this, "_root", void 0),
              F(this, "_onHit", void 0),
              F(this, "_onSet", void 0),
              F(this, "_mapNodeValue", void 0),
              (this._name = null === t || void 0 === t ? void 0 : t.name),
              (this._numLeafs = 0),
              (this._root = null),
              (this._onHit =
                null !== (n = null === t || void 0 === t ? void 0 : t.onHit) &&
                void 0 !== n
                  ? n
                  : function () {}),
              (this._onSet =
                null !== (r = null === t || void 0 === t ? void 0 : t.onSet) &&
                void 0 !== r
                  ? r
                  : function () {}),
              (this._mapNodeValue =
                null !==
                  (a = null === t || void 0 === t ? void 0 : t.mapNodeValue) &&
                void 0 !== a
                  ? a
                  : function (e) {
                      return e;
                    });
          }
          return (
            C(e, [
              {
                key: "size",
                value: function () {
                  return this._numLeafs;
                },
              },
              {
                key: "root",
                value: function () {
                  return this._root;
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  var n;
                  return null === (n = this.getLeafNode(e, t)) || void 0 === n
                    ? void 0
                    : n.value;
                },
              },
              {
                key: "getLeafNode",
                value: function (e, t) {
                  if (null != this._root)
                    for (var n = this._root; n; ) {
                      if (
                        (null === t || void 0 === t || t.onNodeVisit(n),
                        "leaf" === n.type)
                      )
                        return this._onHit(n), n;
                      var r = this._mapNodeValue(e(n.nodeKey));
                      n = n.branches.get(r);
                    }
                },
              },
              {
                key: "set",
                value: function (e, t, n) {
                  var r = this,
                    a = function () {
                      var a,
                        o,
                        i,
                        u,
                        s,
                        c,
                        f,
                        d = y(e);
                      try {
                        for (d.s(); !(f = d.n()).done; ) {
                          var h,
                            p,
                            v,
                            m = l(f.value, 2),
                            g = m[0],
                            b = m[1],
                            S = r._root;
                          if (
                            "leaf" ===
                            (null === S || void 0 === S ? void 0 : S.type)
                          )
                            throw r.invalidCacheError();
                          var w = s;
                          if (
                            "branch" !==
                              (s =
                                null !== (h = s = w ? w.branches.get(c) : S) &&
                                void 0 !== h
                                  ? h
                                  : {
                                      type: "branch",
                                      nodeKey: g,
                                      parent: w,
                                      branches: new Map(),
                                      branchKey: c,
                                    }).type ||
                            s.nodeKey !== g
                          )
                            throw r.invalidCacheError();
                          null === w || void 0 === w || w.branches.set(c, s),
                            null === n ||
                              void 0 === n ||
                              null === (p = n.onNodeVisit) ||
                              void 0 === p ||
                              p.call(n, s),
                            (c = r._mapNodeValue(b)),
                            (r._root =
                              null !== (v = r._root) && void 0 !== v ? v : s);
                        }
                      } catch (_) {
                        d.e(_);
                      } finally {
                        d.f();
                      }
                      var k = s
                        ? null === (a = s) || void 0 === a
                          ? void 0
                          : a.branches.get(c)
                        : r._root;
                      if (null != k && ("leaf" !== k.type || k.branchKey !== c))
                        throw r.invalidCacheError();
                      var x = {
                        type: "leaf",
                        value: t,
                        parent: s,
                        branchKey: c,
                      };
                      null === (o = s) || void 0 === o || o.branches.set(c, x),
                        (r._root =
                          null !== (i = r._root) && void 0 !== i ? i : x),
                        r._numLeafs++,
                        r._onSet(x),
                        null === n ||
                          void 0 === n ||
                          null === (u = n.onNodeVisit) ||
                          void 0 === u ||
                          u.call(n, x);
                    };
                  try {
                    a();
                  } catch (o) {
                    if (!(o instanceof Zo)) throw o;
                    this.clear(), a();
                  }
                },
              },
              {
                key: "delete",
                value: function (e) {
                  var t = this.root();
                  if (!t) return !1;
                  if (e === t)
                    return (this._root = null), (this._numLeafs = 0), !0;
                  for (var n = e.parent, r = e.branchKey; n; ) {
                    var a;
                    if ((n.branches.delete(r), n === t))
                      return (
                        0 === n.branches.size
                          ? ((this._root = null), (this._numLeafs = 0))
                          : this._numLeafs--,
                        !0
                      );
                    if (n.branches.size > 0) break;
                    (r =
                      null === (a = n) || void 0 === a ? void 0 : a.branchKey),
                      (n = n.parent);
                  }
                  for (; n !== t; n = n.parent) if (null == n) return !1;
                  return this._numLeafs--, !0;
                },
              },
              {
                key: "clear",
                value: function () {
                  (this._numLeafs = 0), (this._root = null);
                },
              },
              {
                key: "invalidCacheError",
                value: function () {
                  var e = Xo()
                    ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache."
                    : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
                  throw (
                    (de(
                      e + (null != this._name ? " - ".concat(this._name) : "")
                    ),
                    new Zo())
                  );
                },
              },
            ]),
            e
          );
        })(),
        ei = { TreeCache: Jo }.TreeCache,
        ti = Object.freeze({ __proto__: null, TreeCache: ei }),
        ni = (function () {
          function e(t) {
            var n;
            E(this, e),
              F(this, "_maxSize", void 0),
              F(this, "_size", void 0),
              F(this, "_head", void 0),
              F(this, "_tail", void 0),
              F(this, "_map", void 0),
              F(this, "_keyMapper", void 0),
              (this._maxSize = t.maxSize),
              (this._size = 0),
              (this._head = null),
              (this._tail = null),
              (this._map = new Map()),
              (this._keyMapper =
                null !== (n = t.mapKey) && void 0 !== n
                  ? n
                  : function (e) {
                      return e;
                    });
          }
          return (
            C(e, [
              {
                key: "head",
                value: function () {
                  return this._head;
                },
              },
              {
                key: "tail",
                value: function () {
                  return this._tail;
                },
              },
              {
                key: "size",
                value: function () {
                  return this._size;
                },
              },
              {
                key: "maxSize",
                value: function () {
                  return this._maxSize;
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._map.has(this._keyMapper(e));
                },
              },
              {
                key: "get",
                value: function (e) {
                  var t = this._keyMapper(e),
                    n = this._map.get(t);
                  if (n) return this.set(e, n.value), n.value;
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  var n = this._keyMapper(e);
                  this._map.get(n) && this.delete(e);
                  var r = this.head(),
                    a = { key: e, right: r, left: null, value: t };
                  r ? (r.left = a) : (this._tail = a),
                    this._map.set(n, a),
                    (this._head = a),
                    this._size++,
                    this._maybeDeleteLRU();
                },
              },
              {
                key: "_maybeDeleteLRU",
                value: function () {
                  this.size() > this.maxSize() && this.deleteLru();
                },
              },
              {
                key: "deleteLru",
                value: function () {
                  var e = this.tail();
                  e && this.delete(e.key);
                },
              },
              {
                key: "delete",
                value: function (e) {
                  var t = this._keyMapper(e);
                  if (this._size && this._map.has(t)) {
                    var n = M(this._map.get(t)),
                      r = n.right,
                      a = n.left;
                    r && (r.left = n.left),
                      a && (a.right = n.right),
                      n === this.head() && (this._head = r),
                      n === this.tail() && (this._tail = a),
                      this._map.delete(t),
                      this._size--;
                  }
                },
              },
              {
                key: "clear",
                value: function () {
                  (this._size = 0),
                    (this._head = null),
                    (this._tail = null),
                    (this._map = new Map());
                },
              },
            ]),
            e
          );
        })(),
        ri = { LRUCache: ni }.LRUCache,
        ai = Object.freeze({ __proto__: null, LRUCache: ri }),
        oi = ai.LRUCache,
        ii = ti.TreeCache;
      var ui = function (e) {
        var t = e.name,
          n = e.maxSize,
          r = e.mapNodeValue,
          a =
            void 0 === r
              ? function (e) {
                  return e;
                }
              : r,
          o = new oi({ maxSize: n }),
          i = new ii({
            name: t,
            mapNodeValue: a,
            onHit: function (e) {
              o.set(e, !0);
            },
            onSet: function (e) {
              var t = o.tail();
              o.set(e, !0), t && i.size() > n && i.delete(t.key);
            },
          });
        return i;
      };
      function si(e, t, n) {
        if ("string" === typeof e && !e.includes('"') && !e.includes("\\"))
          return '"'.concat(e, '"');
        switch (typeof e) {
          case "undefined":
            return "";
          case "boolean":
            return e ? "true" : "false";
          case "number":
          case "symbol":
            return String(e);
          case "string":
            return JSON.stringify(e);
          case "function":
            if (!0 !== (null === t || void 0 === t ? void 0 : t.allowFunctions))
              throw D("Attempt to serialize function in a Recoil cache key");
            return "__FUNCTION(".concat(e.name, ")__");
        }
        if (null === e) return "null";
        var r;
        if ("object" !== typeof e)
          return null !== (r = JSON.stringify(e)) && void 0 !== r ? r : "";
        if (V(e)) return "__PROMISE__";
        if (Array.isArray(e))
          return "[".concat(
            e.map(function (e, n) {
              return si(e, t, n.toString());
            }),
            "]"
          );
        if ("function" === typeof e.toJSON) return si(e.toJSON(n), t, n);
        if (e instanceof Map) {
          var a,
            o = {},
            i = y(e);
          try {
            for (i.s(); !(a = i.n()).done; ) {
              var u = l(a.value, 2),
                s = u[0],
                c = u[1];
              o["string" === typeof s ? s : si(s, t)] = c;
            }
          } catch (f) {
            i.e(f);
          } finally {
            i.f();
          }
          return si(o, t, n);
        }
        return e instanceof Set
          ? si(
              Array.from(e).sort(function (e, n) {
                return si(e, t).localeCompare(si(n, t));
              }),
              t,
              n
            )
          : void 0 !== Symbol &&
            null != e[Symbol.iterator] &&
            "function" === typeof e[Symbol.iterator]
          ? si(Array.from(e), t, n)
          : "{".concat(
              Object.keys(e)
                .filter(function (t) {
                  return void 0 !== e[t];
                })
                .sort()
                .map(function (n) {
                  return "".concat(si(n, t), ":").concat(si(e[n], t, n));
                })
                .join(","),
              "}"
            );
      }
      var li = function (e) {
          return si(
            e,
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { allowFunctions: !1 }
          );
        },
        ci = ti.TreeCache,
        fi = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
      var di = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fi,
          t = e.equality,
          n = void 0 === t ? fi.equality : t,
          r = e.eviction,
          a = void 0 === r ? fi.eviction : r,
          o = e.maxSize,
          i = void 0 === o ? fi.maxSize : o,
          u = arguments.length > 1 ? arguments[1] : void 0,
          s = (function (e) {
            switch (e) {
              case "reference":
                return function (e) {
                  return e;
                };
              case "value":
                return function (e) {
                  return li(e);
                };
            }
            throw D("Unrecognized equality policy ".concat(e));
          })(n);
        return (function (e, t, n, r) {
          switch (e) {
            case "keep-all":
              return new ci({ name: r, mapNodeValue: n });
            case "lru":
              return ui({ name: r, maxSize: M(t), mapNodeValue: n });
            case "most-recent":
              return ui({ name: r, maxSize: 1, mapNodeValue: n });
          }
          throw D("Unrecognized eviction policy ".concat(e));
        })(a, i, s, u);
      };
      var hi = function (e) {
          return function () {
            return null;
          };
        },
        pi = re.isLoadable,
        vi = re.loadableWithError,
        mi = re.loadableWithPromise,
        yi = re.loadableWithValue,
        gi = Qo.WrappedValue,
        bi = _t,
        Si = Et,
        wi = Tt,
        ki = Qe,
        xi = Me.DEFAULT_VALUE,
        _i = Me.getConfigDeletionHandler,
        Ei = Me.getNode,
        Ti = Me.registerNode,
        Ci = Te.isRecoilValue,
        Pi = nn.markRecoilValueModified,
        Ai = gn,
        Ri = jo,
        Li = hi,
        Ni = C(function e() {
          E(this, e);
        }),
        Oi = new Ni(),
        Di = [],
        Vi = new Map(),
        Mi = (function () {
          var e = 0;
          return function () {
            return e++;
          };
        })();
      function Fi(e) {
        var t = null,
          n = e.key,
          r = e.get,
          a = e.cachePolicy_UNSTABLE,
          o = null != e.set ? e.set : void 0;
        var i = new Set(),
          u = di(
            null !== a && void 0 !== a
              ? a
              : { equality: "reference", eviction: "keep-all" },
            n
          ),
          s = Ai(e.retainedBy_UNSTABLE),
          c = new Map(),
          f = 0;
        function d() {
          return !ue("recoil_memory_managament_2020") || f > 0;
        }
        function h(e) {
          return (
            e.getState().knownSelectors.add(n),
            f++,
            function () {
              f--;
            }
          );
        }
        function p() {
          return void 0 !== _i(n) && !d();
        }
        function v(e, t, n, r, a) {
          A(t, r, a), m(e, n);
        }
        function m(e, t) {
          P(e, t) && C(e), g(t, !0);
        }
        function g(e, n) {
          var r = Vi.get(e);
          if (null != r) {
            var a,
              o = y(r);
            try {
              for (o.s(); !(a = o.n()).done; ) {
                var i = a.value;
                Pi(i, M(t));
              }
            } catch (u) {
              o.e(u);
            } finally {
              o.f();
            }
            n && Vi.delete(e);
          }
        }
        function b(e, t) {
          var n = Vi.get(t);
          null == n && Vi.set(t, (n = new Set())), n.add(e);
        }
        function S(e, t, n, r, a, o) {
          return t
            .then(function (r) {
              if (!d()) throw (C(e), Oi);
              null != o.loadingDepKey && o.loadingDepPromise === t
                ? n.atomValues.set(o.loadingDepKey, yi(r))
                : e.getState().knownSelectors.forEach(function (e) {
                    n.atomValues.delete(e);
                  });
              var i = x(e, n);
              if (i && "loading" !== i.state) {
                if (
                  ((P(e, a) || null == T(e)) && m(e, a), "hasValue" === i.state)
                )
                  return i.contents;
                throw i.contents;
              }
              if (!P(e, a)) {
                var u = E(e, n);
                if (null != u) return u.loadingLoadable.contents;
              }
              var s = l(k(e, n, a), 2),
                c = s[0],
                f = s[1];
              if (
                ("loading" !== c.state && v(e, n, a, c, f),
                "hasError" === c.state)
              )
                throw c.contents;
              return c.contents;
            })
            .catch(function (t) {
              if (t instanceof Ni) throw Oi;
              if (!d()) throw (C(e), Oi);
              var o = vi(t);
              throw (v(e, n, a, o, r), t);
            });
        }
        function w(e, t, r, a) {
          var o, u, s, l, c, f, d;
          (P(e, a) ||
            t.version ===
              (null === (o = e.getState()) ||
              void 0 === o ||
              null === (u = o.currentTree) ||
              void 0 === u
                ? void 0
                : u.version) ||
            t.version ===
              (null === (s = e.getState()) ||
              void 0 === s ||
              null === (l = s.nextTree) ||
              void 0 === l
                ? void 0
                : l.version)) &&
            ki(
              n,
              r,
              e,
              null !==
                (c =
                  null === (f = e.getState()) ||
                  void 0 === f ||
                  null === (d = f.nextTree) ||
                  void 0 === d
                    ? void 0
                    : d.version) && void 0 !== c
                ? c
                : e.getState().currentTree.version
            );
          var h,
            p = y(r);
          try {
            for (p.s(); !(h = p.n()).done; ) {
              var v = h.value;
              i.add(v);
            }
          } catch (m) {
            p.e(m);
          } finally {
            p.f();
          }
        }
        function k(e, a, o) {
          var i,
            u,
            s = Li(n),
            l = !0,
            c = !0,
            f = function () {
              s(), (c = !1);
            },
            h = !1,
            p = { loadingDepKey: null, loadingDepPromise: null },
            m = new Map();
          function y(t) {
            var n = t.key,
              r = bi(e, a, n);
            switch (
              (m.set(n, r),
              l ||
                (w(e, a, new Set(m.keys()), o),
                (function (e, t) {
                  P(e, t) && (M(T(e)).stateVersions.clear(), g(t, !1));
                })(e, o)),
              r.state)
            ) {
              case "hasValue":
                return r.contents;
              case "hasError":
                throw r.contents;
              case "loading":
                throw (
                  ((p.loadingDepKey = n),
                  (p.loadingDepPromise = r.contents),
                  r.contents)
                );
            }
            throw D("Invalid Loadable state");
          }
          try {
            (i = r({
              get: y,
              getCallback: function (n) {
                return function () {
                  if (c)
                    throw D(
                      "Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription."
                    );
                  null == t && To(!1);
                  for (
                    var r = arguments.length, a = new Array(r), o = 0;
                    o < r;
                    o++
                  )
                    a[o] = arguments[o];
                  return Ri(e, n, a, { node: t });
                };
              },
            })),
              (i = Ci(i) ? y(i) : i),
              pi(i) && ("hasError" === i.state && (h = !0), (i = i.contents)),
              V(i)
                ? (i = (function (e, t, n, r, a, o) {
                    return t
                      .then(function (t) {
                        if (!d()) throw (C(e), Oi);
                        var o = yi(t);
                        return v(e, n, a, o, r), t;
                      })
                      .catch(function (t) {
                        if (!d()) throw (C(e), Oi);
                        if (V(t)) return S(e, t, n, r, a, o);
                        var i = vi(t);
                        throw (v(e, n, a, i, r), t);
                      });
                  })(e, i, a, m, o, p).finally(f))
                : f(),
              (i = i instanceof gi ? i.value : i);
          } catch (b) {
            V((i = b)) ? (i = S(e, i, a, m, o, p).finally(f)) : ((h = !0), f());
          }
          return (
            (u = h ? vi(i) : V(i) ? mi(i) : yi(i)),
            (l = !1),
            (function (e, t, n) {
              if (P(e, t)) {
                var r = T(e);
                null != r && (r.depValuesDiscoveredSoFarDuringAsyncWork = n);
              }
            })(e, o, m),
            w(e, a, new Set(m.keys()), o),
            [u, m]
          );
        }
        function x(e, t) {
          var r = t.atomValues.get(n);
          if (null != r) return r;
          var a,
            o = new Set();
          try {
            r = u.get(
              function (n) {
                return "string" !== typeof n && To(!1), bi(e, t, n).contents;
              },
              {
                onNodeVisit: function (e) {
                  "branch" === e.type && e.nodeKey !== n && o.add(e.nodeKey);
                },
              }
            );
          } catch (i) {
            throw D(
              'Problem with cache lookup for selector "'
                .concat(n, '": ')
                .concat(i.message)
            );
          }
          r &&
            (t.atomValues.set(n, r),
            w(
              e,
              t,
              o,
              null === (a = T(e)) || void 0 === a ? void 0 : a.executionID
            ));
          return r;
        }
        function _(e, t) {
          var n = x(e, t);
          if (null != n) return C(e), n;
          var r,
            a = E(e, t);
          if (null != a)
            return (
              "loading" ===
                (null === (r = a.loadingLoadable) || void 0 === r
                  ? void 0
                  : r.state) && b(e, a.executionID),
              a.loadingLoadable
            );
          var o = Mi(),
            i = l(k(e, t, o), 2),
            u = i[0],
            s = i[1];
          return (
            "loading" === u.state
              ? (!(function (e, t, n, r, a) {
                  c.set(e, {
                    depValuesDiscoveredSoFarDuringAsyncWork: r,
                    executionID: t,
                    loadingLoadable: n,
                    stateVersions: new Map([[a.version, !0]]),
                  });
                })(e, o, u, s, t),
                b(e, o))
              : (C(e), A(t, u, s)),
            u
          );
        }
        function E(e, t) {
          function n(n) {
            var r,
              a = y(n);
            try {
              for (a.s(); !(r = a.n()).done; ) {
                var o = l(r.value, 2),
                  i = o[0],
                  u = o[1];
                if (!bi(e, t, i).is(u)) return !0;
              }
            } catch (s) {
              a.e(s);
            } finally {
              a.f();
            }
            return !1;
          }
          var r,
            a = y(
              _n([
                c.has(e) ? [M(c.get(e))] : [],
                Pe(
                  dt(c, function (t) {
                    return l(t, 1)[0] !== e;
                  }),
                  function (e) {
                    return l(e, 2)[1];
                  }
                ),
              ])
            );
          try {
            for (a.s(); !(r = a.n()).done; ) {
              var o = r.value;
              if (
                o.stateVersions.get(t.version) ||
                !n(o.depValuesDiscoveredSoFarDuringAsyncWork)
              )
                return o.stateVersions.set(t.version, !0), o;
              o.stateVersions.set(t.version, !1);
            }
          } catch (i) {
            a.e(i);
          } finally {
            a.f();
          }
        }
        function T(e) {
          return c.get(e);
        }
        function C(e) {
          c.delete(e);
        }
        function P(e, t) {
          var n;
          return (
            t === (null === (n = T(e)) || void 0 === n ? void 0 : n.executionID)
          );
        }
        function A(e, t, r) {
          e.atomValues.set(n, t);
          try {
            u.set(
              (function (e) {
                return Array.from(e.entries()).map(function (e) {
                  var t = l(e, 2);
                  return [t[0], t[1].contents];
                });
              })(r),
              t
            );
          } catch (a) {
            throw D(
              'Problem with setting cache for selector "'
                .concat(n, '": ')
                .concat(a.message)
            );
          }
        }
        function R(e, t) {
          var r = t.atomValues.get(n);
          return null != r
            ? r
            : u.get(function (n) {
                var r;
                return (
                  "string" !== typeof n && To(!1),
                  null === (r = Si(e, t, n)) || void 0 === r
                    ? void 0
                    : r.contents
                );
              });
        }
        function L(e, t) {
          return (function (e) {
            if (Di.includes(n)) {
              var t = "Recoil selector has circular dependencies: ".concat(
                Di.slice(Di.indexOf(n)).join(" \u2192 ")
              );
              return vi(D(t));
            }
            Di.push(n);
            try {
              return e();
            } finally {
              Di.pop();
            }
          })(function () {
            return _(e, t);
          });
        }
        function N(e) {
          e.atomValues.delete(n);
        }
        function O(e, n) {
          null == t && To(!1);
          var r,
            a = y(i);
          try {
            for (a.s(); !(r = a.n()).done; ) {
              var o,
                s = r.value,
                l = Ei(s);
              null === (o = l.clearCache) || void 0 === o || o.call(l, e, n);
            }
          } catch (c) {
            a.e(c);
          } finally {
            a.f();
          }
          i.clear(), N(n), u.clear(), Pi(e, t);
        }
        if (null != o) {
          return (t = Ti({
            key: n,
            nodeType: "selector",
            peek: R,
            get: L,
            set: function (e, t, r) {
              var a = !1,
                i = new Map();
              function u(r) {
                var o = r.key;
                if (a)
                  throw D(
                    "Recoil: Async selector sets are not currently supported."
                  );
                var i = bi(e, t, o);
                if ("hasValue" === i.state) return i.contents;
                if ("loading" === i.state) {
                  var u = 'Getting value of asynchronous atom or selector "'
                    .concat(o, '" in a pending state while setting selector "')
                    .concat(n, '" is not yet supported.');
                  throw (de(u), D(u));
                }
                throw i.contents;
              }
              function s(n, r) {
                if (a) {
                  var o =
                    "Recoil: Async selector sets are not currently supported.";
                  throw (de(o), D(o));
                }
                var s = "function" === typeof r ? r(u(n)) : r;
                wi(e, t, n.key, s).forEach(function (e, t) {
                  return i.set(t, e);
                });
              }
              var l = o(
                {
                  set: s,
                  get: u,
                  reset: function (e) {
                    s(e, xi);
                  },
                },
                r
              );
              if (void 0 !== l)
                throw V(l)
                  ? D(
                      "Recoil: Async selector sets are not currently supported."
                    )
                  : D("Recoil: selector set should be a void function.");
              return (a = !0), i;
            },
            init: h,
            invalidate: N,
            clearCache: O,
            shouldDeleteConfigOnRelease: p,
            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
            shouldRestoreFromSnapshots: !1,
            retainedBy: s,
          }));
        }
        return (t = Ti({
          key: n,
          nodeType: "selector",
          peek: R,
          get: L,
          init: h,
          invalidate: N,
          clearCache: O,
          shouldDeleteConfigOnRelease: p,
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          shouldRestoreFromSnapshots: !1,
          retainedBy: s,
        }));
      }
      Fi.value = function (e) {
        return new gi(e);
      };
      var Ii = Fi,
        ji = re.isLoadable,
        Bi = re.loadableWithError,
        zi = re.loadableWithPromise,
        Ui = re.loadableWithValue,
        Wi = Qo.WrappedValue,
        Hi = Rt,
        $i = Me.DEFAULT_VALUE,
        Ki = Me.DefaultValue,
        Gi = Me.getConfigDeletionHandler,
        qi = Me.registerNode,
        Yi = Me.setConfigDeletionHandler,
        Qi = Te.isRecoilValue,
        Xi = nn.getRecoilValueAsLoadable,
        Zi = nn.markRecoilValueModified,
        Ji = nn.setRecoilValue,
        eu = nn.setRecoilValueLoadable,
        tu = gn,
        nu = function (e) {
          return e instanceof Wi ? e.value : e;
        };
      function ru(e) {
        var t = e.key,
          n = e.persistence_UNSTABLE,
          r = tu(e.retainedBy_UNSTABLE),
          a = 0;
        function i(e) {
          return zi(
            e
              .then(function (e) {
                return (u = Ui(e)), e;
              })
              .catch(function (e) {
                throw ((u = Bi(e)), e);
              })
          );
        }
        var u = V(e.default)
          ? i(e.default)
          : ji(e.default)
          ? "loading" === e.default.state
            ? i(e.default.contents)
            : e.default
          : Ui(nu(e.default));
        c(u.contents);
        var s = void 0,
          l = new Map();
        function c(e) {
          return e;
        }
        function f(e, n) {
          var r, a;
          return null !==
            (r = null !== (a = n.atomValues.get(t)) && void 0 !== a ? a : s) &&
            void 0 !== r
            ? r
            : u;
        }
        var d = qi({
          key: t,
          nodeType: "atom",
          peek: f,
          get: function (e, r) {
            if (r.atomValues.has(t)) return M(r.atomValues.get(t));
            if (r.nonvalidatedAtoms.has(t)) {
              if (null != s) return s;
              if (null == n)
                return (
                  Ce(
                    "Tried to restore a persisted value for atom ".concat(
                      t,
                      " but it has no persistence settings."
                    )
                  ),
                  u
                );
              var a = r.nonvalidatedAtoms.get(t),
                o = n.validator(a, $i),
                i = o instanceof Ki ? u : Ui(o);
              return (s = i);
            }
            return u;
          },
          set: function (e, n, r) {
            if (n.atomValues.has(t)) {
              var a = M(n.atomValues.get(t));
              if ("hasValue" === a.state && r === a.contents) return new Map();
            } else if (!n.nonvalidatedAtoms.has(t) && r instanceof Ki)
              return new Map();
            return (s = void 0), new Map().set(t, Ui(r));
          },
          init: function (n, r, i) {
            var s;
            if ((a++, n.getState().knownAtoms.add(t), "loading" === u.state)) {
              u.contents.finally(function () {
                var e;
                (null !== (e = n.getState().nextTree) && void 0 !== e
                  ? e
                  : n.getState().currentTree
                ).atomValues.has(t) || Zi(n, d);
              });
            }
            var c =
              null !== (s = e.effects) && void 0 !== s ? s : e.effects_UNSTABLE;
            if (null != c) {
              var h,
                p = function (e) {
                  if (b && e.key === t) {
                    var a = g;
                    return a instanceof Ki
                      ? f(n, r)
                      : V(a)
                      ? zi(
                          a.then(function (e) {
                            return e instanceof Ki ? u.toPromise() : e;
                          })
                        )
                      : Ui(a);
                  }
                  return Xi(n, e);
                },
                v = function (e) {
                  return p(e).toPromise();
                },
                m = function (e) {
                  var r,
                    a = Hi(
                      n,
                      null !== (r = n.getState().nextTree) && void 0 !== r
                        ? r
                        : n.getState().currentTree,
                      e.key
                    );
                  return !b || e.key !== t || g instanceof Ki
                    ? a
                    : w(w({}, a), {}, { isSet: !0, loadable: p(e) });
                },
                g = $i,
                b = !0,
                S = !1,
                k = null,
                x = function (e) {
                  return function (t) {
                    if (b) {
                      var r = p(d),
                        a = "hasValue" === r.state ? r.contents : $i;
                      (g = "function" === typeof t ? t(a) : t),
                        V(g) &&
                          (g = g.then(function (t) {
                            return (k = { effect: e, value: t }), t;
                          }));
                    } else {
                      if (V(t))
                        throw D(
                          "Setting atoms to async values is not implemented."
                        );
                      "function" !== typeof t &&
                        (k = { effect: e, value: nu(t) }),
                        Ji(
                          n,
                          d,
                          "function" === typeof t
                            ? function (n) {
                                var r = nu(t(n));
                                return (k = { effect: e, value: r }), r;
                              }
                            : nu(t)
                        );
                    }
                  };
                },
                _ = function (e) {
                  return function () {
                    return x(e)($i);
                  };
                },
                E = function (e) {
                  return function (r) {
                    var a,
                      i = n.subscribeToTransactions(function (n) {
                        var a,
                          o = n.getState(),
                          i = o.currentTree,
                          s = o.previousTree;
                        s ||
                          (de(
                            "Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"
                          ),
                          (s = i));
                        var l =
                          null !== (a = i.atomValues.get(t)) && void 0 !== a
                            ? a
                            : u;
                        if ("hasValue" === l.state) {
                          var c,
                            f,
                            d,
                            h,
                            p = l.contents,
                            v =
                              null !== (c = s.atomValues.get(t)) && void 0 !== c
                                ? c
                                : u,
                            m = "hasValue" === v.state ? v.contents : $i;
                          (null === (f = k) || void 0 === f
                            ? void 0
                            : f.effect) !== e ||
                          (null === (d = k) || void 0 === d
                            ? void 0
                            : d.value) !== p
                            ? r(p, m, !i.atomValues.has(t))
                            : (null === (h = k) || void 0 === h
                                ? void 0
                                : h.effect) === e && (k = null);
                        }
                      }, t).release;
                    l.set(
                      n,
                      [].concat(
                        o(null !== (a = l.get(n)) && void 0 !== a ? a : []),
                        [i]
                      )
                    );
                  };
                },
                T = y(c);
              try {
                for (T.s(); !(h = T.n()).done; ) {
                  var C = h.value;
                  try {
                    var P,
                      A = C({
                        node: d,
                        storeID: n.storeID,
                        parentStoreID_UNSTABLE: n.parentStoreID,
                        trigger: i,
                        setSelf: x(C),
                        resetSelf: _(C),
                        onSet: E(C),
                        getPromise: v,
                        getLoadable: p,
                        getInfo_UNSTABLE: m,
                      });
                    if (null != A)
                      l.set(
                        n,
                        [].concat(
                          o(null !== (P = l.get(n)) && void 0 !== P ? P : []),
                          [A]
                        )
                      );
                  } catch (N) {
                    (g = N), (S = !0);
                  }
                }
              } catch (O) {
                T.e(O);
              } finally {
                T.f();
              }
              if (((b = !1), !(g instanceof Ki))) {
                var R,
                  L = S
                    ? Bi(g)
                    : V(g)
                    ? zi(
                        (function (e, n) {
                          var r = n
                            .then(function (n) {
                              var a, o;
                              return (
                                (null ===
                                  (o = (
                                    null !== (a = e.getState().nextTree) &&
                                    void 0 !== a
                                      ? a
                                      : e.getState().currentTree
                                  ).atomValues.get(t)) || void 0 === o
                                  ? void 0
                                  : o.contents) === r && Ji(e, d, n),
                                n
                              );
                            })
                            .catch(function (n) {
                              var a, o;
                              throw (
                                ((null ===
                                  (o = (
                                    null !== (a = e.getState().nextTree) &&
                                    void 0 !== a
                                      ? a
                                      : e.getState().currentTree
                                  ).atomValues.get(t)) || void 0 === o
                                  ? void 0
                                  : o.contents) === r && eu(e, d, Bi(n)),
                                n)
                              );
                            });
                          return r;
                        })(n, g)
                      )
                    : Ui(nu(g));
                L.contents,
                  r.atomValues.set(t, L),
                  null === (R = n.getState().nextTree) ||
                    void 0 === R ||
                    R.atomValues.set(t, L);
              }
            }
            return function () {
              var e;
              a--,
                null === (e = l.get(n)) ||
                  void 0 === e ||
                  e.forEach(function (e) {
                    return e();
                  }),
                l.delete(n);
            };
          },
          invalidate: function () {
            s = void 0;
          },
          shouldDeleteConfigOnRelease: function () {
            return void 0 !== Gi(t) && a <= 0;
          },
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          persistence_UNSTABLE: e.persistence_UNSTABLE
            ? {
                type: e.persistence_UNSTABLE.type,
                backButton: e.persistence_UNSTABLE.backButton,
              }
            : void 0,
          shouldRestoreFromSnapshots: !0,
          retainedBy: r,
        });
        return d;
      }
      function au(e) {
        var n = Object.assign({}, (t(e), e)),
          r = "default" in e ? e.default : new Promise(function () {});
        return Qi(r)
          ? (function (e) {
              var t = au(
                  w(
                    w({}, e),
                    {},
                    {
                      default: $i,
                      persistence_UNSTABLE:
                        void 0 === e.persistence_UNSTABLE
                          ? void 0
                          : w(
                              w({}, e.persistence_UNSTABLE),
                              {},
                              {
                                validator: function (t) {
                                  return t instanceof Ki
                                    ? t
                                    : M(e.persistence_UNSTABLE).validator(
                                        t,
                                        $i
                                      );
                                },
                              }
                            ),
                      effects: e.effects,
                      effects_UNSTABLE: e.effects_UNSTABLE,
                    }
                  )
                ),
                n = Ii({
                  key: "".concat(e.key, "__withFallback"),
                  get: function (n) {
                    var r = (0, n.get)(t);
                    return r instanceof Ki ? e.default : r;
                  },
                  set: function (e, n) {
                    return (0, e.set)(t, n);
                  },
                  cachePolicy_UNSTABLE: { eviction: "most-recent" },
                  dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                });
              return Yi(n.key, Gi(e.key)), n;
            })(w(w({}, n), {}, { default: r }))
          : ru(w(w({}, n), {}, { default: r }));
      }
      au.value = function (e) {
        return new Wi(e);
      };
      var ou = au,
        iu = (function () {
          function e(t) {
            var n;
            E(this, e),
              F(this, "_map", void 0),
              F(this, "_keyMapper", void 0),
              (this._map = new Map()),
              (this._keyMapper =
                null !== (n = null === t || void 0 === t ? void 0 : t.mapKey) &&
                void 0 !== n
                  ? n
                  : function (e) {
                      return e;
                    });
          }
          return (
            C(e, [
              {
                key: "size",
                value: function () {
                  return this._map.size;
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._map.has(this._keyMapper(e));
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this._map.get(this._keyMapper(e));
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  this._map.set(this._keyMapper(e), t);
                },
              },
              {
                key: "delete",
                value: function (e) {
                  this._map.delete(this._keyMapper(e));
                },
              },
              {
                key: "clear",
                value: function () {
                  this._map.clear();
                },
              },
            ]),
            e
          );
        })(),
        uu = { MapCache: iu }.MapCache,
        su = Object.freeze({ __proto__: null, MapCache: uu }),
        lu = ai.LRUCache,
        cu = su.MapCache,
        fu = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
      var du = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : fu,
            t = e.equality,
            n = void 0 === t ? fu.equality : t,
            r = e.eviction,
            a = void 0 === r ? fu.eviction : r,
            o = e.maxSize,
            i = void 0 === o ? fu.maxSize : o,
            u = (function (e) {
              switch (e) {
                case "reference":
                  return function (e) {
                    return e;
                  };
                case "value":
                  return function (e) {
                    return li(e);
                  };
              }
              throw D("Unrecognized equality policy ".concat(e));
            })(n);
          return (function (e, t, n) {
            switch (e) {
              case "keep-all":
                return new cu({ mapKey: n });
              case "lru":
                return new lu({ mapKey: n, maxSize: M(t) });
              case "most-recent":
                return new lu({ mapKey: n, maxSize: 1 });
            }
            throw D("Unrecognized eviction policy ".concat(e));
          })(a, i, u);
        },
        hu = Me.setConfigDeletionHandler;
      var pu = function (e) {
          var t,
            n,
            r = du({
              equality:
                null !==
                  (t =
                    null === (n = e.cachePolicyForParams_UNSTABLE) ||
                    void 0 === n
                      ? void 0
                      : n.equality) && void 0 !== t
                  ? t
                  : "value",
              eviction: "keep-all",
            });
          return function (t) {
            var n,
              a,
              o = r.get(t);
            if (null != o) return o;
            e.cachePolicyForParams_UNSTABLE;
            var u = i(e, L),
              s = "default" in e ? e.default : new Promise(function () {}),
              l = ou(
                w(
                  w({}, u),
                  {},
                  {
                    key: ""
                      .concat(e.key, "__")
                      .concat(
                        null !== (n = li(t)) && void 0 !== n ? n : "void"
                      ),
                    default: "function" === typeof s ? s(t) : s,
                    retainedBy_UNSTABLE:
                      "function" === typeof e.retainedBy_UNSTABLE
                        ? e.retainedBy_UNSTABLE(t)
                        : e.retainedBy_UNSTABLE,
                    effects:
                      "function" === typeof e.effects
                        ? e.effects(t)
                        : "function" === typeof e.effects_UNSTABLE
                        ? e.effects_UNSTABLE(t)
                        : null !== (a = e.effects) && void 0 !== a
                        ? a
                        : e.effects_UNSTABLE,
                  }
                )
              );
            return (
              r.set(t, l),
              hu(l.key, function () {
                r.delete(t);
              }),
              l
            );
          };
        },
        vu = Me.setConfigDeletionHandler,
        mu = 0;
      var yu = function (e) {
          var t,
            n,
            r = du({
              equality:
                null !==
                  (t =
                    null === (n = e.cachePolicyForParams_UNSTABLE) ||
                    void 0 === n
                      ? void 0
                      : n.equality) && void 0 !== t
                  ? t
                  : "value",
              eviction: "keep-all",
            });
          return function (t) {
            var n, a;
            try {
              a = r.get(t);
            } catch (f) {
              throw D(
                "Problem with cache lookup for selector "
                  .concat(e.key, ": ")
                  .concat(f.message)
              );
            }
            if (null != a) return a;
            var o,
              i = ""
                .concat(e.key, "__selectorFamily/")
                .concat(
                  null !== (n = li(t, { allowFunctions: !0 })) && void 0 !== n
                    ? n
                    : "void",
                  "/"
                )
                .concat(mu++),
              u = function (n) {
                return e.get(t)(n);
              },
              s = e.cachePolicy_UNSTABLE,
              l =
                "function" === typeof e.retainedBy_UNSTABLE
                  ? e.retainedBy_UNSTABLE(t)
                  : e.retainedBy_UNSTABLE;
            if (null != e.set) {
              var c = e.set;
              o = Ii({
                key: i,
                get: u,
                set: function (e, n) {
                  return c(t)(e, n);
                },
                cachePolicy_UNSTABLE: s,
                dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                retainedBy_UNSTABLE: l,
              });
            } else
              o = Ii({
                key: i,
                get: u,
                cachePolicy_UNSTABLE: s,
                dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                retainedBy_UNSTABLE: l,
              });
            return (
              r.set(t, o),
              vu(o.key, function () {
                r.delete(t);
              }),
              o
            );
          };
        },
        gu = yu({
          key: "__constant",
          get: function (e) {
            return function () {
              return e;
            };
          },
          cachePolicyForParams_UNSTABLE: { equality: "reference" },
        });
      var bu = function (e) {
          return gu(e);
        },
        Su = yu({
          key: "__error",
          get: function (e) {
            return function () {
              throw D(e);
            };
          },
          cachePolicyForParams_UNSTABLE: { equality: "reference" },
        });
      var wu = function (e) {
        return Su(e);
      };
      var ku = function (e) {
          return e;
        },
        xu = re.loadableWithError,
        _u = re.loadableWithPromise,
        Eu = re.loadableWithValue;
      function Tu(e, t) {
        var n,
          r = Array(t.length).fill(void 0),
          a = Array(t.length).fill(void 0),
          o = y(t.entries());
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var i = l(n.value, 2),
              u = i[0],
              s = i[1];
            try {
              r[u] = e(s);
            } catch (c) {
              a[u] = c;
            }
          }
        } catch (f) {
          o.e(f);
        } finally {
          o.f();
        }
        return [r, a];
      }
      function Cu(e) {
        return null != e && !V(e);
      }
      function Pu(e) {
        return Array.isArray(e)
          ? e
          : Object.getOwnPropertyNames(e).map(function (t) {
              return e[t];
            });
      }
      function Au(e, t) {
        return Array.isArray(e)
          ? t
          : Object.getOwnPropertyNames(e).reduce(function (e, n, r) {
              return w(w({}, e), {}, b({}, n, t[r]));
            }, {});
      }
      function Ru(e, t, n) {
        return Au(
          e,
          n.map(function (e, n) {
            return null == e ? Eu(t[n]) : V(e) ? _u(e) : xu(e);
          })
        );
      }
      var Lu = yu({
          key: "__waitForNone",
          get: function (e) {
            return function (t) {
              var n = l(Tu(t.get, Pu(e)), 2),
                r = n[0],
                a = n[1];
              return Ru(e, r, a);
            };
          },
          dangerouslyAllowMutability: !0,
        }),
        Nu = yu({
          key: "__waitForAny",
          get: function (e) {
            return function (t) {
              var n = l(Tu(t.get, Pu(e)), 2),
                r = n[0],
                a = n[1];
              return a.some(function (e) {
                return !V(e);
              })
                ? Ru(e, r, a)
                : new Promise(function (t) {
                    var n,
                      o = y(a.entries());
                    try {
                      var i = function () {
                        var o = l(n.value, 2),
                          i = o[0],
                          u = o[1];
                        V(u) &&
                          u
                            .then(function (n) {
                              (r[i] = n), (a[i] = void 0), t(Ru(e, r, a));
                            })
                            .catch(function (n) {
                              (a[i] = n), t(Ru(e, r, a));
                            });
                      };
                      for (o.s(); !(n = o.n()).done; ) i();
                    } catch (u) {
                      o.e(u);
                    } finally {
                      o.f();
                    }
                  });
            };
          },
          dangerouslyAllowMutability: !0,
        }),
        Ou = {
          waitForNone: Lu,
          waitForAny: Nu,
          waitForAll: yu({
            key: "__waitForAll",
            get: function (e) {
              return function (t) {
                var n = l(Tu(t.get, Pu(e)), 2),
                  r = n[0],
                  a = n[1];
                if (
                  a.every(function (e) {
                    return null == e;
                  })
                )
                  return Au(e, r);
                var o = a.find(Cu);
                if (null != o) throw o;
                return Promise.all(a).then(function (t) {
                  return Au(
                    e,
                    ((n = r),
                    t.map(function (e, t) {
                      return void 0 === e ? n[t] : e;
                    }))
                  );
                  var n;
                });
              };
            },
            dangerouslyAllowMutability: !0,
          }),
          waitForAllSettled: yu({
            key: "__waitForAllSettled",
            get: function (e) {
              return function (t) {
                var n = l(Tu(t.get, Pu(e)), 2),
                  r = n[0],
                  a = n[1];
                return a.every(function (e) {
                  return !V(e);
                })
                  ? Ru(e, r, a)
                  : Promise.all(
                      a.map(function (e, t) {
                        return V(e)
                          ? e
                              .then(function (e) {
                                (r[t] = e), (a[t] = void 0);
                              })
                              .catch(function (e) {
                                (r[t] = void 0), (a[t] = e);
                              })
                          : null;
                      })
                    ).then(function () {
                      return Ru(e, r, a);
                    });
              };
            },
            dangerouslyAllowMutability: !0,
          }),
          noWait: yu({
            key: "__noWait",
            get: function (e) {
              return function (t) {
                var n = t.get;
                try {
                  return Ii.value(Eu(n(e)));
                } catch (r) {
                  return Ii.value(V(r) ? _u(r) : xu(r));
                }
              };
            },
            dangerouslyAllowMutability: !0,
          }),
        },
        Du = re.RecoilLoadable,
        Vu = Me.DefaultValue,
        Mu = zr,
        Fu = Hr,
        Iu = Te.isRecoilValue,
        ju = lt.retentionZone,
        Bu = ar.freshSnapshot,
        zu = {
          DefaultValue: Vu,
          isRecoilValue: Iu,
          RecoilLoadable: Du,
          RecoilEnv: oe,
          RecoilRoot: Mu,
          useRecoilStoreID: Fu,
          useRecoilBridgeAcrossReactRoots_UNSTABLE: fo,
          atom: ou,
          selector: Ii,
          atomFamily: pu,
          selectorFamily: yu,
          constSelector: bu,
          errorSelector: wu,
          readOnlySelector: ku,
          noWait: Ou.noWait,
          waitForNone: Ou.waitForNone,
          waitForAny: Ou.waitForAny,
          waitForAll: Ou.waitForAll,
          waitForAllSettled: Ou.waitForAllSettled,
          useRecoilValue: Na,
          useRecoilValueLoadable: Oa,
          useRecoilState: Ra,
          useRecoilStateLoadable: La,
          useSetRecoilState: Va,
          useResetRecoilState: Da,
          useGetRecoilValueInfo_UNSTABLE: io,
          useRecoilRefresher_UNSTABLE: Ho,
          useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Ma,
          useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Fa,
          useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Ia,
          useRecoilCallback: Bo,
          useRecoilTransaction_UNSTABLE: qo,
          useGotoRecoilSnapshot: no,
          useRecoilSnapshot: eo,
          useRecoilTransactionObserver_UNSTABLE: ro,
          snapshot_UNSTABLE: Bu,
          useRetain: na,
          retentionZone: ju,
        },
        Uu = zu.RecoilRoot,
        Wu = zu.atom,
        Hu = zu.selector,
        $u = zu.useRecoilValue,
        Ku = zu.useRecoilState,
        Gu = zu.useSetRecoilState;
      var qu = function () {
        return (
          (qu =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          qu.apply(this, arguments)
        );
      };
      Object.create;
      function Yu(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, a = 0, o = t.length; a < o; a++)
            (!r && a in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create;
      "function" === typeof SuppressedError && SuppressedError;
      var Qu = n(613),
        Xu = n.n(Qu),
        Zu = "-ms-",
        Ju = "-moz-",
        es = "-webkit-",
        ts = "comm",
        ns = "rule",
        rs = "decl",
        as = "@import",
        os = "@keyframes",
        is = "@layer",
        us = Math.abs,
        ss = String.fromCharCode,
        ls = Object.assign;
      function cs(e) {
        return e.trim();
      }
      function fs(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function ds(e, t, n) {
        return e.replace(t, n);
      }
      function hs(e, t) {
        return e.indexOf(t);
      }
      function ps(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function vs(e, t, n) {
        return e.slice(t, n);
      }
      function ms(e) {
        return e.length;
      }
      function ys(e) {
        return e.length;
      }
      function gs(e, t) {
        return t.push(e), e;
      }
      function bs(e, t) {
        return e.filter(function (e) {
          return !fs(e, t);
        });
      }
      var Ss = 1,
        ws = 1,
        ks = 0,
        xs = 0,
        _s = 0,
        Es = "";
      function Ts(e, t, n, r, a, o, i, u) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: a,
          children: o,
          line: Ss,
          column: ws,
          length: i,
          return: "",
          siblings: u,
        };
      }
      function Cs(e, t) {
        return ls(
          Ts("", null, null, "", null, null, 0, e.siblings),
          e,
          { length: -e.length },
          t
        );
      }
      function Ps(e) {
        for (; e.root; ) e = Cs(e.root, { children: [e] });
        gs(e, e.siblings);
      }
      function As() {
        return (
          (_s = xs > 0 ? ps(Es, --xs) : 0),
          ws--,
          10 === _s && ((ws = 1), Ss--),
          _s
        );
      }
      function Rs() {
        return (
          (_s = xs < ks ? ps(Es, xs++) : 0),
          ws++,
          10 === _s && ((ws = 1), Ss++),
          _s
        );
      }
      function Ls() {
        return ps(Es, xs);
      }
      function Ns() {
        return xs;
      }
      function Os(e, t) {
        return vs(Es, e, t);
      }
      function Ds(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function Vs(e) {
        return (Ss = ws = 1), (ks = ms((Es = e))), (xs = 0), [];
      }
      function Ms(e) {
        return (Es = ""), e;
      }
      function Fs(e) {
        return cs(Os(xs - 1, Bs(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function Is(e) {
        for (; (_s = Ls()) && _s < 33; ) Rs();
        return Ds(e) > 2 || Ds(_s) > 3 ? "" : " ";
      }
      function js(e, t) {
        for (
          ;
          --t &&
          Rs() &&
          !(
            _s < 48 ||
            _s > 102 ||
            (_s > 57 && _s < 65) ||
            (_s > 70 && _s < 97)
          );

        );
        return Os(e, Ns() + (t < 6 && 32 == Ls() && 32 == Rs()));
      }
      function Bs(e) {
        for (; Rs(); )
          switch (_s) {
            case e:
              return xs;
            case 34:
            case 39:
              34 !== e && 39 !== e && Bs(_s);
              break;
            case 40:
              41 === e && Bs(e);
              break;
            case 92:
              Rs();
          }
        return xs;
      }
      function zs(e, t) {
        for (; Rs() && e + _s !== 57 && (e + _s !== 84 || 47 !== Ls()); );
        return "/*" + Os(t, xs - 1) + "*" + ss(47 === e ? e : Rs());
      }
      function Us(e) {
        for (; !Ds(Ls()); ) Rs();
        return Os(e, xs);
      }
      function Ws(e, t) {
        for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
        return n;
      }
      function Hs(e, t, n, r) {
        switch (e.type) {
          case is:
            if (e.children.length) break;
          case as:
          case rs:
            return (e.return = e.return || e.value);
          case ts:
            return "";
          case os:
            return (e.return = e.value + "{" + Ws(e.children, r) + "}");
          case ns:
            if (!ms((e.value = e.props.join(",")))) return "";
        }
        return ms((n = Ws(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function $s(e, t, n) {
        switch (
          (function (e, t) {
            return 45 ^ ps(e, 0)
              ? (((((((t << 2) ^ ps(e, 0)) << 2) ^ ps(e, 1)) << 2) ^
                  ps(e, 2)) <<
                  2) ^
                  ps(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return es + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return es + e + e;
          case 4789:
            return Ju + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return es + e + Ju + e + Zu + e + e;
          case 5936:
            switch (ps(e, t + 11)) {
              case 114:
                return es + e + Zu + ds(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return es + e + Zu + ds(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return es + e + Zu + ds(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
          case 6828:
          case 4268:
          case 2903:
            return es + e + Zu + e + e;
          case 6165:
            return es + e + Zu + "flex-" + e + e;
          case 5187:
            return (
              es +
              e +
              ds(e, /(\w+).+(:[^]+)/, es + "box-$1$2" + Zu + "flex-$1$2") +
              e
            );
          case 5443:
            return (
              es +
              e +
              Zu +
              "flex-item-" +
              ds(e, /flex-|-self/g, "") +
              (fs(e, /flex-|baseline/)
                ? ""
                : Zu + "grid-row-" + ds(e, /flex-|-self/g, "")) +
              e
            );
          case 4675:
            return (
              es +
              e +
              Zu +
              "flex-line-pack" +
              ds(e, /align-content|flex-|-self/g, "") +
              e
            );
          case 5548:
            return es + e + Zu + ds(e, "shrink", "negative") + e;
          case 5292:
            return es + e + Zu + ds(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              es +
              "box-" +
              ds(e, "-grow", "") +
              es +
              e +
              Zu +
              ds(e, "grow", "positive") +
              e
            );
          case 4554:
            return es + ds(e, /([^-])(transform)/g, "$1" + es + "$2") + e;
          case 6187:
            return (
              ds(
                ds(ds(e, /(zoom-|grab)/, es + "$1"), /(image-set)/, es + "$1"),
                e,
                ""
              ) + e
            );
          case 5495:
          case 3959:
            return ds(e, /(image-set\([^]*)/, es + "$1$`$1");
          case 4968:
            return (
              ds(
                ds(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  es + "box-pack:$3" + Zu + "flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              es +
              e +
              e
            );
          case 4200:
            if (!fs(e, /flex-|baseline/))
              return Zu + "grid-column-align" + vs(e, t) + e;
            break;
          case 2592:
          case 3360:
            return Zu + ds(e, "template-", "") + e;
          case 4384:
          case 3616:
            return n &&
              n.some(function (e, n) {
                return (t = n), fs(e.props, /grid-\w+-end/);
              })
              ? ~hs(e + (n = n[t].value), "span")
                ? e
                : Zu +
                  ds(e, "-start", "") +
                  e +
                  Zu +
                  "grid-row-span:" +
                  (~hs(n, "span")
                    ? fs(n, /\d+/)
                    : +fs(n, /\d+/) - +fs(e, /\d+/)) +
                  ";"
              : Zu + ds(e, "-start", "") + e;
          case 4896:
          case 4128:
            return n &&
              n.some(function (e) {
                return fs(e.props, /grid-\w+-start/);
              })
              ? e
              : Zu + ds(ds(e, "-end", "-span"), "span ", "") + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return ds(e, /(.+)-inline(.+)/, es + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (ms(e) - 1 - t > 6)
              switch (ps(e, t + 1)) {
                case 109:
                  if (45 !== ps(e, t + 4)) break;
                case 102:
                  return (
                    ds(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1" +
                        es +
                        "$2-$3$1" +
                        Ju +
                        (108 == ps(e, t + 3) ? "$3" : "$2-$3")
                    ) + e
                  );
                case 115:
                  return ~hs(e, "stretch")
                    ? $s(ds(e, "stretch", "fill-available"), t, n) + e
                    : e;
              }
            break;
          case 5152:
          case 5920:
            return ds(
              e,
              /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
              function (t, n, r, a, o, i, u) {
                return (
                  Zu +
                  n +
                  ":" +
                  r +
                  u +
                  (a ? Zu + n + "-span:" + (o ? i : +i - +r) + u : "") +
                  e
                );
              }
            );
          case 4949:
            if (121 === ps(e, t + 6)) return ds(e, ":", ":" + es) + e;
            break;
          case 6444:
            switch (ps(e, 45 === ps(e, 14) ? 18 : 11)) {
              case 120:
                return (
                  ds(
                    e,
                    /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                    "$1" +
                      es +
                      (45 === ps(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      es +
                      "$2$3$1" +
                      Zu +
                      "$2box$3"
                  ) + e
                );
              case 100:
                return ds(e, ":", ":" + Zu) + e;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return ds(e, "scroll-", "scroll-snap-") + e;
        }
        return e;
      }
      function Ks(e, t, n, r) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case rs:
              return void (e.return = $s(e.value, e.length, n));
            case os:
              return Ws([Cs(e, { value: ds(e.value, "@", "@" + es) })], r);
            case ns:
              if (e.length)
                return (function (e, t) {
                  return e.map(t).join("");
                })((n = e.props), function (t) {
                  switch (fs(t, (r = /(::plac\w+|:read-\w+)/))) {
                    case ":read-only":
                    case ":read-write":
                      Ps(
                        Cs(e, {
                          props: [ds(t, /:(read-\w+)/, ":" + Ju + "$1")],
                        })
                      ),
                        Ps(Cs(e, { props: [t] })),
                        ls(e, { props: bs(n, r) });
                      break;
                    case "::placeholder":
                      Ps(
                        Cs(e, {
                          props: [ds(t, /:(plac\w+)/, ":" + es + "input-$1")],
                        })
                      ),
                        Ps(
                          Cs(e, {
                            props: [ds(t, /:(plac\w+)/, ":" + Ju + "$1")],
                          })
                        ),
                        Ps(
                          Cs(e, {
                            props: [ds(t, /:(plac\w+)/, Zu + "input-$1")],
                          })
                        ),
                        Ps(Cs(e, { props: [t] })),
                        ls(e, { props: bs(n, r) });
                  }
                  return "";
                });
          }
      }
      function Gs(e) {
        return Ms(qs("", null, null, null, [""], (e = Vs(e)), 0, [0], e));
      }
      function qs(e, t, n, r, a, o, i, u, s) {
        for (
          var l = 0,
            c = 0,
            f = i,
            d = 0,
            h = 0,
            p = 0,
            v = 1,
            m = 1,
            y = 1,
            g = 0,
            b = "",
            S = a,
            w = o,
            k = r,
            x = b;
          m;

        )
          switch (((p = g), (g = Rs()))) {
            case 40:
              if (108 != p && 58 == ps(x, f - 1)) {
                -1 != hs((x += ds(Fs(g), "&", "&\f")), "&\f") && (y = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              x += Fs(g);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              x += Is(p);
              break;
            case 92:
              x += js(Ns() - 1, 7);
              continue;
            case 47:
              switch (Ls()) {
                case 42:
                case 47:
                  gs(Qs(zs(Rs(), Ns()), t, n, s), s);
                  break;
                default:
                  x += "/";
              }
              break;
            case 123 * v:
              u[l++] = ms(x) * y;
            case 125 * v:
            case 59:
            case 0:
              switch (g) {
                case 0:
                case 125:
                  m = 0;
                case 59 + c:
                  -1 == y && (x = ds(x, /\f/g, "")),
                    h > 0 &&
                      ms(x) - f &&
                      gs(
                        h > 32
                          ? Xs(x + ";", r, n, f - 1, s)
                          : Xs(ds(x, " ", "") + ";", r, n, f - 2, s),
                        s
                      );
                  break;
                case 59:
                  x += ";";
                default:
                  if (
                    (gs(
                      (k = Ys(
                        x,
                        t,
                        n,
                        l,
                        c,
                        a,
                        u,
                        b,
                        (S = []),
                        (w = []),
                        f,
                        o
                      )),
                      o
                    ),
                    123 === g)
                  )
                    if (0 === c) qs(x, t, k, k, S, o, f, u, w);
                    else
                      switch (99 === d && 110 === ps(x, 3) ? 100 : d) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          qs(
                            e,
                            k,
                            k,
                            r &&
                              gs(
                                Ys(e, k, k, 0, 0, a, u, b, a, (S = []), f, w),
                                w
                              ),
                            a,
                            w,
                            f,
                            u,
                            r ? S : w
                          );
                          break;
                        default:
                          qs(x, k, k, k, [""], w, 0, u, w);
                      }
              }
              (l = c = h = 0), (v = y = 1), (b = x = ""), (f = i);
              break;
            case 58:
              (f = 1 + ms(x)), (h = p);
            default:
              if (v < 1)
                if (123 == g) --v;
                else if (125 == g && 0 == v++ && 125 == As()) continue;
              switch (((x += ss(g)), g * v)) {
                case 38:
                  y = c > 0 ? 1 : ((x += "\f"), -1);
                  break;
                case 44:
                  (u[l++] = (ms(x) - 1) * y), (y = 1);
                  break;
                case 64:
                  45 === Ls() && (x += Fs(Rs())),
                    (d = Ls()),
                    (c = f = ms((b = x += Us(Ns())))),
                    g++;
                  break;
                case 45:
                  45 === p && 2 == ms(x) && (v = 0);
              }
          }
        return o;
      }
      function Ys(e, t, n, r, a, o, i, u, s, l, c, f) {
        for (
          var d = a - 1, h = 0 === a ? o : [""], p = ys(h), v = 0, m = 0, y = 0;
          v < r;
          ++v
        )
          for (
            var g = 0, b = vs(e, d + 1, (d = us((m = i[v])))), S = e;
            g < p;
            ++g
          )
            (S = cs(m > 0 ? h[g] + " " + b : ds(b, /&\f/g, h[g]))) &&
              (s[y++] = S);
        return Ts(e, t, n, 0 === a ? ns : u, s, l, c, f);
      }
      function Qs(e, t, n, r) {
        return Ts(e, t, n, ts, ss(_s), vs(e, 2, -2), 0, r);
      }
      function Xs(e, t, n, r, a) {
        return Ts(e, t, n, rs, vs(e, 0, r), vs(e, r + 1, -1), r, a);
      }
      var Zs = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        Js =
          ("undefined" != typeof process &&
            void 0 !==
              {
                NODE_ENV: "production",
                PUBLIC_URL: "/to-do-app",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              } &&
            ({
              NODE_ENV: "production",
              PUBLIC_URL: "/to-do-app",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }.REACT_APP_SC_ATTR ||
              {
                NODE_ENV: "production",
                PUBLIC_URL: "/to-do-app",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_ATTR)) ||
          "data-styled",
        el = "undefined" != typeof window && "HTMLElement" in window,
        tl = Boolean(
          "boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "/to-do-app",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                } &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "/to-do-app",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "/to-do-app",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY
            ? "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "/to-do-app",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "/to-do-app",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.REACT_APP_SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "/to-do-app",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                } &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "/to-do-app",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "/to-do-app",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "/to-do-app",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "/to-do-app",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_DISABLE_SPEEDY
        ),
        nl = {},
        rl = (new Set(), Object.freeze([])),
        al = Object.freeze({});
      function ol(e, t, n) {
        return (
          void 0 === n && (n = al),
          (e.theme !== n.theme && e.theme) || t || n.theme
        );
      }
      var il = new Set([
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "u",
          "ul",
          "use",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ]),
        ul = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        sl = /(^-|-$)/g;
      function ll(e) {
        return e.replace(ul, "-").replace(sl, "");
      }
      var cl = /(a)(d)/gi,
        fl = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function dl(e) {
        var t,
          n = "";
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = fl(t % 52) + n;
        return (fl(t % 52) + n).replace(cl, "$1-$2");
      }
      var hl,
        pl = function (e, t) {
          for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
          return e;
        },
        vl = function (e) {
          return pl(5381, e);
        };
      function ml(e) {
        return dl(vl(e) >>> 0);
      }
      function yl(e) {
        return "string" == typeof e && !0;
      }
      var gl = "function" == typeof Symbol && Symbol.for,
        bl = gl ? Symbol.for("react.memo") : 60115,
        Sl = gl ? Symbol.for("react.forward_ref") : 60112,
        wl = {
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
          type: !0,
        },
        kl = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        xl = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        _l =
          (((hl = {})[Sl] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
          (hl[bl] = xl),
          hl);
      function El(e) {
        return ("type" in (t = e) && t.type.$$typeof) === bl
          ? xl
          : "$$typeof" in e
          ? _l[e.$$typeof]
          : wl;
        var t;
      }
      var Tl = Object.defineProperty,
        Cl = Object.getOwnPropertyNames,
        Pl = Object.getOwnPropertySymbols,
        Al = Object.getOwnPropertyDescriptor,
        Rl = Object.getPrototypeOf,
        Ll = Object.prototype;
      function Nl(e, t, n) {
        if ("string" != typeof t) {
          if (Ll) {
            var r = Rl(t);
            r && r !== Ll && Nl(e, r, n);
          }
          var a = Cl(t);
          Pl && (a = a.concat(Pl(t)));
          for (var o = El(e), i = El(t), u = 0; u < a.length; ++u) {
            var s = a[u];
            if (!(s in kl || (n && n[s]) || (i && s in i) || (o && s in o))) {
              var l = Al(t, s);
              try {
                Tl(e, s, l);
              } catch (e) {}
            }
          }
        }
        return e;
      }
      function Ol(e) {
        return "function" == typeof e;
      }
      function Dl(e) {
        return "object" == typeof e && "styledComponentId" in e;
      }
      function Vl(e, t) {
        return e && t ? "".concat(e, " ").concat(t) : e || t || "";
      }
      function Ml(e, t) {
        if (0 === e.length) return "";
        for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
        return n;
      }
      function Fl(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          e.constructor.name === Object.name &&
          !("props" in e && e.$$typeof)
        );
      }
      function Il(e, t, n) {
        if ((void 0 === n && (n = !1), !n && !Fl(e) && !Array.isArray(e)))
          return t;
        if (Array.isArray(t))
          for (var r = 0; r < t.length; r++) e[r] = Il(e[r], t[r]);
        else if (Fl(t)) for (var r in t) e[r] = Il(e[r], t[r]);
        return e;
      }
      function jl(e, t) {
        Object.defineProperty(e, "toString", { value: t });
      }
      function Bl(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return new Error(
          "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
            .concat(e, " for more information.")
            .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
        );
      }
      var zl = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = e);
          }
          return (
            (e.prototype.indexOfGroup = function (e) {
              for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
              return t;
            }),
            (e.prototype.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, a = r; e >= a; )
                  if ((a <<= 1) < 0) throw Bl(16, "".concat(e));
                (this.groupSizes = new Uint32Array(a)),
                  this.groupSizes.set(n),
                  (this.length = a);
                for (var o = r; o < a; o++) this.groupSizes[o] = 0;
              }
              for (
                var i = this.indexOfGroup(e + 1), u = ((o = 0), t.length);
                o < u;
                o++
              )
                this.tag.insertRule(i, t[o]) && (this.groupSizes[e]++, i++);
            }),
            (e.prototype.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  r = n + t;
                this.groupSizes[e] = 0;
                for (var a = n; a < r; a++) this.tag.deleteRule(n);
              }
            }),
            (e.prototype.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var n = this.groupSizes[e],
                  r = this.indexOfGroup(e),
                  a = r + n,
                  o = r;
                o < a;
                o++
              )
                t += "".concat(this.tag.getRule(o)).concat("/*!sc*/\n");
              return t;
            }),
            e
          );
        })(),
        Ul = new Map(),
        Wl = new Map(),
        Hl = 1,
        $l = function (e) {
          if (Ul.has(e)) return Ul.get(e);
          for (; Wl.has(Hl); ) Hl++;
          var t = Hl++;
          return Ul.set(e, t), Wl.set(t, e), t;
        },
        Kl = function (e, t) {
          Ul.set(e, t), Wl.set(t, e);
        },
        Gl = "style["
          .concat(Js, "][")
          .concat("data-styled-version", '="')
          .concat("6.0.8", '"]'),
        ql = new RegExp(
          "^".concat(Js, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
        ),
        Yl = function (e, t, n) {
          for (var r, a = n.split(","), o = 0, i = a.length; o < i; o++)
            (r = a[o]) && e.registerName(t, r);
        },
        Ql = function (e, t) {
          for (
            var n,
              r = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(
                "/*!sc*/\n"
              ),
              a = [],
              o = 0,
              i = r.length;
            o < i;
            o++
          ) {
            var u = r[o].trim();
            if (u) {
              var s = u.match(ql);
              if (s) {
                var l = 0 | parseInt(s[1], 10),
                  c = s[2];
                0 !== l &&
                  (Kl(c, l), Yl(e, c, s[3]), e.getTag().insertRules(l, a)),
                  (a.length = 0);
              } else a.push(u);
            }
          }
        };
      function Xl() {
        return n.nc;
      }
      var Zl = function (e) {
          var t = document.head,
            n = e || t,
            r = document.createElement("style"),
            a = (function (e) {
              var t = Array.from(e.querySelectorAll("style[".concat(Js, "]")));
              return t[t.length - 1];
            })(n),
            o = void 0 !== a ? a.nextSibling : null;
          r.setAttribute(Js, "active"),
            r.setAttribute("data-styled-version", "6.0.8");
          var i = Xl();
          return i && r.setAttribute("nonce", i), n.insertBefore(r, o), r;
        },
        Jl = (function () {
          function e(e) {
            (this.element = Zl(e)),
              this.element.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                  var t = document.styleSheets, n = 0, r = t.length;
                  n < r;
                  n++
                ) {
                  var a = t[n];
                  if (a.ownerNode === e) return a;
                }
                throw Bl(17);
              })(this.element)),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return t && t.cssText ? t.cssText : "";
            }),
            e
          );
        })(),
        ec = (function () {
          function e(e) {
            (this.element = Zl(e)),
              (this.nodes = this.element.childNodes),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var n = document.createTextNode(t);
                return (
                  this.element.insertBefore(n, this.nodes[e] || null),
                  this.length++,
                  !0
                );
              }
              return !1;
            }),
            (e.prototype.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        tc = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              return (
                e <= this.length &&
                (this.rules.splice(e, 0, t), this.length++, !0)
              );
            }),
            (e.prototype.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        nc = el,
        rc = { isServer: !el, useCSSOMInjection: !tl },
        ac = (function () {
          function e(e, t, n) {
            void 0 === e && (e = al), void 0 === t && (t = {});
            var r = this;
            (this.options = qu(qu({}, rc), e)),
              (this.gs = t),
              (this.names = new Map(n)),
              (this.server = !!e.isServer),
              !this.server &&
                el &&
                nc &&
                ((nc = !1),
                (function (e) {
                  for (
                    var t = document.querySelectorAll(Gl), n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var a = t[n];
                    a &&
                      "active" !== a.getAttribute(Js) &&
                      (Ql(e, a), a.parentNode && a.parentNode.removeChild(a));
                  }
                })(this)),
              jl(this, function () {
                return (function (e) {
                  for (
                    var t = e.getTag(),
                      n = t.length,
                      r = "",
                      a = function (n) {
                        var a = (function (e) {
                          return Wl.get(e);
                        })(n);
                        if (void 0 === a) return "continue";
                        var o = e.names.get(a),
                          i = t.getGroup(n);
                        if (void 0 === o || 0 === i.length) return "continue";
                        var u = ""
                            .concat(Js, ".g")
                            .concat(n, '[id="')
                            .concat(a, '"]'),
                          s = "";
                        void 0 !== o &&
                          o.forEach(function (e) {
                            e.length > 0 && (s += "".concat(e, ","));
                          }),
                          (r += ""
                            .concat(i)
                            .concat(u, '{content:"')
                            .concat(s, '"}')
                            .concat("/*!sc*/\n"));
                      },
                      o = 0;
                    o < n;
                    o++
                  )
                    a(o);
                  return r;
                })(r);
              });
          }
          return (
            (e.registerId = function (e) {
              return $l(e);
            }),
            (e.prototype.reconstructWithOptions = function (t, n) {
              return (
                void 0 === n && (n = !0),
                new e(
                  qu(qu({}, this.options), t),
                  this.gs,
                  (n && this.names) || void 0
                )
              );
            }),
            (e.prototype.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (e.prototype.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((e = (function (e) {
                    var t = e.useCSSOMInjection,
                      n = e.target;
                    return e.isServer ? new tc(n) : t ? new Jl(n) : new ec(n);
                  })(this.options)),
                  new zl(e)))
              );
              var e;
            }),
            (e.prototype.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (e.prototype.registerName = function (e, t) {
              if (($l(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var n = new Set();
                n.add(t), this.names.set(e, n);
              }
            }),
            (e.prototype.insertRules = function (e, t, n) {
              this.registerName(e, t), this.getTag().insertRules($l(e), n);
            }),
            (e.prototype.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (e.prototype.clearRules = function (e) {
              this.getTag().clearGroup($l(e)), this.clearNames(e);
            }),
            (e.prototype.clearTag = function () {
              this.tag = void 0;
            }),
            e
          );
        })(),
        oc = /&/g,
        ic = /^\s*\/\/.*$/gm;
      function uc(e, t) {
        return e.map(function (e) {
          return (
            "rule" === e.type &&
              ((e.value = "".concat(t, " ").concat(e.value)),
              (e.value = e.value.replaceAll(",", ",".concat(t, " "))),
              (e.props = e.props.map(function (e) {
                return "".concat(t, " ").concat(e);
              }))),
            Array.isArray(e.children) &&
              "@keyframes" !== e.type &&
              (e.children = uc(e.children, t)),
            e
          );
        });
      }
      function sc(e) {
        var t,
          n,
          r,
          a = void 0 === e ? al : e,
          o = a.options,
          i = void 0 === o ? al : o,
          u = a.plugins,
          s = void 0 === u ? rl : u,
          l = function (e, r, a) {
            return a === n ||
              (a.startsWith(n) &&
                a.endsWith(n) &&
                a.replaceAll(n, "").length > 0)
              ? ".".concat(t)
              : e;
          },
          c = s.slice();
        c.push(function (e) {
          e.type === ns &&
            e.value.includes("&") &&
            (e.props[0] = e.props[0].replace(oc, n).replace(r, l));
        }),
          i.prefix && c.push(Ks),
          c.push(Hs);
        var f = function (e, a, o, u) {
          void 0 === a && (a = ""),
            void 0 === o && (o = ""),
            void 0 === u && (u = "&"),
            (t = u),
            (n = a),
            (r = new RegExp("\\".concat(n, "\\b"), "g"));
          var s = e.replace(ic, ""),
            l = Gs(
              o || a ? "".concat(o, " ").concat(a, " { ").concat(s, " }") : s
            );
          i.namespace && (l = uc(l, i.namespace));
          var f,
            d = [];
          return (
            Ws(
              l,
              (function (e) {
                var t = ys(e);
                return function (n, r, a, o) {
                  for (var i = "", u = 0; u < t; u++)
                    i += e[u](n, r, a, o) || "";
                  return i;
                };
              })(
                c.concat(
                  ((f = function (e) {
                    return d.push(e);
                  }),
                  function (e) {
                    e.root || ((e = e.return) && f(e));
                  })
                )
              )
            ),
            d
          );
        };
        return (
          (f.hash = s.length
            ? s
                .reduce(function (e, t) {
                  return t.name || Bl(15), pl(e, t.name);
                }, 5381)
                .toString()
            : ""),
          f
        );
      }
      var lc = new ac(),
        cc = sc(),
        fc = P.createContext({
          shouldForwardProp: void 0,
          styleSheet: lc,
          stylis: cc,
        }),
        dc = (fc.Consumer, P.createContext(void 0));
      function hc() {
        return (0, P.useContext)(fc);
      }
      function pc(e) {
        var t = (0, P.useState)(e.stylisPlugins),
          n = t[0],
          r = t[1],
          a = hc().styleSheet,
          o = (0, P.useMemo)(
            function () {
              var t = a;
              return (
                e.sheet
                  ? (t = e.sheet)
                  : e.target &&
                    (t = t.reconstructWithOptions({ target: e.target }, !1)),
                e.disableCSSOMInjection &&
                  (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                t
              );
            },
            [e.disableCSSOMInjection, e.sheet, e.target, a]
          ),
          i = (0, P.useMemo)(
            function () {
              return sc({
                options: {
                  namespace: e.namespace,
                  prefix: e.enableVendorPrefixes,
                },
                plugins: n,
              });
            },
            [e.enableVendorPrefixes, e.namespace, n]
          );
        (0, P.useEffect)(
          function () {
            Xu()(n, e.stylisPlugins) || r(e.stylisPlugins);
          },
          [e.stylisPlugins]
        );
        var u = (0, P.useMemo)(
          function () {
            return {
              shouldForwardProp: e.shouldForwardProp,
              styleSheet: o,
              stylis: i,
            };
          },
          [e.shouldForwardProp, o, i]
        );
        return P.createElement(
          fc.Provider,
          { value: u },
          P.createElement(dc.Provider, { value: i }, e.children)
        );
      }
      var vc = (function () {
          function e(e, t) {
            var n = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = cc);
              var r = n.name + t.hash;
              e.hasNameForId(n.id, r) ||
                e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
            }),
              (this.name = e),
              (this.id = "sc-keyframes-".concat(e)),
              (this.rules = t),
              jl(this, function () {
                throw Bl(12, String(n.name));
              });
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = cc), this.name + e.hash;
            }),
            e
          );
        })(),
        mc = function (e) {
          return e >= "A" && e <= "Z";
        };
      function yc(e) {
        for (var t = "", n = 0; n < e.length; n++) {
          var r = e[n];
          if (1 === n && "-" === r && "-" === e[0]) return e;
          mc(r) ? (t += "-" + r.toLowerCase()) : (t += r);
        }
        return t.startsWith("ms-") ? "-" + t : t;
      }
      var gc = function (e) {
          return null == e || !1 === e || "" === e;
        },
        bc = function e(t) {
          var n,
            r,
            a = [];
          for (var o in t) {
            var i = t[o];
            t.hasOwnProperty(o) &&
              !gc(i) &&
              ((Array.isArray(i) && i.isCss) || Ol(i)
                ? a.push("".concat(yc(o), ":"), i, ";")
                : Fl(i)
                ? a.push.apply(
                    a,
                    Yu(Yu(["".concat(o, " {")], e(i), !1), ["}"], !1)
                  )
                : a.push(
                    ""
                      .concat(yc(o), ": ")
                      .concat(
                        ((n = o),
                        null == (r = i) || "boolean" == typeof r || "" === r
                          ? ""
                          : "number" != typeof r ||
                            0 === r ||
                            n in Zs ||
                            n.startsWith("--")
                          ? String(r).trim()
                          : "".concat(r, "px")),
                        ";"
                      )
                  ));
          }
          return a;
        };
      function Sc(e, t, n, r) {
        return gc(e)
          ? []
          : Dl(e)
          ? [".".concat(e.styledComponentId)]
          : Ol(e)
          ? !Ol((a = e)) || (a.prototype && a.prototype.isReactComponent) || !t
            ? [e]
            : Sc(e(t), t, n, r)
          : e instanceof vc
          ? n
            ? (e.inject(n, r), [e.getName(r)])
            : [e]
          : Fl(e)
          ? bc(e)
          : Array.isArray(e)
          ? Array.prototype.concat.apply(
              rl,
              e.map(function (e) {
                return Sc(e, t, n, r);
              })
            )
          : [e.toString()];
        var a;
      }
      function wc(e) {
        for (var t = 0; t < e.length; t += 1) {
          var n = e[t];
          if (Ol(n) && !Dl(n)) return !1;
        }
        return !0;
      }
      var kc = vl("6.0.8"),
        xc = (function () {
          function e(e, t, n) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === n || n.isStatic) && wc(e)),
              (this.componentId = t),
              (this.baseHash = pl(kc, t)),
              (this.baseStyle = n),
              ac.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, n) {
              var r = this.baseStyle
                ? this.baseStyle.generateAndInjectStyles(e, t, n)
                : "";
              if (this.isStatic && !n.hash)
                if (
                  this.staticRulesId &&
                  t.hasNameForId(this.componentId, this.staticRulesId)
                )
                  r = Vl(r, this.staticRulesId);
                else {
                  var a = Ml(Sc(this.rules, e, t, n)),
                    o = dl(pl(this.baseHash, a) >>> 0);
                  if (!t.hasNameForId(this.componentId, o)) {
                    var i = n(a, ".".concat(o), void 0, this.componentId);
                    t.insertRules(this.componentId, o, i);
                  }
                  (r = Vl(r, o)), (this.staticRulesId = o);
                }
              else {
                for (
                  var u = pl(this.baseHash, n.hash), s = "", l = 0;
                  l < this.rules.length;
                  l++
                ) {
                  var c = this.rules[l];
                  if ("string" == typeof c) s += c;
                  else if (c) {
                    var f = Ml(Sc(c, e, t, n));
                    (u = pl(u, f + l)), (s += f);
                  }
                }
                if (s) {
                  var d = dl(u >>> 0);
                  t.hasNameForId(this.componentId, d) ||
                    t.insertRules(
                      this.componentId,
                      d,
                      n(s, ".".concat(d), void 0, this.componentId)
                    ),
                    (r = Vl(r, d));
                }
              }
              return r;
            }),
            e
          );
        })(),
        _c = P.createContext(void 0);
      _c.Consumer;
      function Ec(e) {
        var t = P.useContext(_c),
          n = (0, P.useMemo)(
            function () {
              return (function (e, t) {
                if (!e) throw Bl(14);
                if (Ol(e)) return e(t);
                if (Array.isArray(e) || "object" != typeof e) throw Bl(8);
                return t ? qu(qu({}, t), e) : e;
              })(e.theme, t);
            },
            [e.theme, t]
          );
        return e.children
          ? P.createElement(_c.Provider, { value: n }, e.children)
          : null;
      }
      var Tc = {};
      new Set();
      function Cc(e, t, n) {
        var r = Dl(e),
          a = e,
          o = !yl(e),
          i = t.attrs,
          u = void 0 === i ? rl : i,
          s = t.componentId,
          l =
            void 0 === s
              ? (function (e, t) {
                  var n = "string" != typeof e ? "sc" : ll(e);
                  Tc[n] = (Tc[n] || 0) + 1;
                  var r = "".concat(n, "-").concat(ml("6.0.8" + n + Tc[n]));
                  return t ? "".concat(t, "-").concat(r) : r;
                })(t.displayName, t.parentComponentId)
              : s,
          c = t.displayName,
          f =
            (void 0 === c &&
              (function (e) {
                yl(e)
                  ? "styled.".concat(e)
                  : "Styled(".concat(
                      (function (e) {
                        return e.displayName || e.name || "Component";
                      })(e),
                      ")"
                    );
              })(e),
            t.displayName && t.componentId
              ? "".concat(ll(t.displayName), "-").concat(t.componentId)
              : t.componentId || l),
          d = r && a.attrs ? a.attrs.concat(u).filter(Boolean) : u,
          h = t.shouldForwardProp;
        if (r && a.shouldForwardProp) {
          var p = a.shouldForwardProp;
          if (t.shouldForwardProp) {
            var v = t.shouldForwardProp;
            h = function (e, t) {
              return p(e, t) && v(e, t);
            };
          } else h = p;
        }
        var m = new xc(n, f, r ? a.componentStyle : void 0);
        var y = P.forwardRef(function (e, t) {
          return (function (e, t, n) {
            var r = e.attrs,
              a = e.componentStyle,
              o = e.defaultProps,
              i = e.foldedComponentIds,
              u = e.styledComponentId,
              s = e.target,
              l = P.useContext(_c),
              c = hc(),
              f = e.shouldForwardProp || c.shouldForwardProp,
              d = (function (e, t, n) {
                for (
                  var r,
                    a = qu(qu({}, t), { className: void 0, theme: n }),
                    o = 0;
                  o < e.length;
                  o += 1
                ) {
                  var i = Ol((r = e[o])) ? r(a) : r;
                  for (var u in i)
                    a[u] =
                      "className" === u
                        ? Vl(a[u], i[u])
                        : "style" === u
                        ? qu(qu({}, a[u]), i[u])
                        : i[u];
                }
                return (
                  t.className && (a.className = Vl(a.className, t.className)), a
                );
              })(r, t, ol(t, l, o) || al),
              h = d.as || s,
              p = {};
            for (var v in d)
              void 0 === d[v] ||
                "$" === v[0] ||
                "as" === v ||
                "theme" === v ||
                ("forwardedAs" === v
                  ? (p.as = d.forwardedAs)
                  : (f && !f(v, h)) || (p[v] = d[v]));
            var m = (function (e, t) {
                var n = hc();
                return e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
              })(a, d),
              y = Vl(i, u);
            return (
              m && (y += " " + m),
              d.className && (y += " " + d.className),
              (p[yl(h) && !il.has(h) ? "class" : "className"] = y),
              (p.ref = n),
              (0, P.createElement)(h, p)
            );
          })(y, e, t);
        });
        return (
          (y.attrs = d),
          (y.componentStyle = m),
          (y.shouldForwardProp = h),
          (y.foldedComponentIds = r
            ? Vl(a.foldedComponentIds, a.styledComponentId)
            : ""),
          (y.styledComponentId = f),
          (y.target = r ? a.target : e),
          Object.defineProperty(y, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (e) {
              this._foldedDefaultProps = r
                ? (function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                    for (var r = 0, a = t; r < a.length; r++) Il(e, a[r], !0);
                    return e;
                  })({}, a.defaultProps, e)
                : e;
            },
          }),
          jl(y, function () {
            return ".".concat(y.styledComponentId);
          }),
          o &&
            Nl(y, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
            }),
          y
        );
      }
      function Pc(e, t) {
        for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1)
          n.push(t[r], e[r + 1]);
        return n;
      }
      var Ac = function (e) {
        return Object.assign(e, { isCss: !0 });
      };
      function Rc(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        if (Ol(e) || Fl(e)) return Ac(Sc(Pc(rl, Yu([e], t, !0))));
        var r = e;
        return 0 === t.length && 1 === r.length && "string" == typeof r[0]
          ? Sc(r)
          : Ac(Sc(Pc(r, t)));
      }
      function Lc(e, t, n) {
        if ((void 0 === n && (n = al), !t)) throw Bl(1, t);
        var r = function (r) {
          for (var a = [], o = 1; o < arguments.length; o++)
            a[o - 1] = arguments[o];
          return e(t, n, Rc.apply(void 0, Yu([r], a, !1)));
        };
        return (
          (r.attrs = function (r) {
            return Lc(
              e,
              t,
              qu(qu({}, n), {
                attrs: Array.prototype.concat(n.attrs, r).filter(Boolean),
              })
            );
          }),
          (r.withConfig = function (r) {
            return Lc(e, t, qu(qu({}, n), r));
          }),
          r
        );
      }
      var Nc = function (e) {
          return Lc(Cc, e);
        },
        Oc = Nc;
      il.forEach(function (e) {
        Oc[e] = Nc(e);
      });
      var Dc = (function () {
        function e(e, t) {
          (this.rules = e),
            (this.componentId = t),
            (this.isStatic = wc(e)),
            ac.registerId(this.componentId + 1);
        }
        return (
          (e.prototype.createStyles = function (e, t, n, r) {
            var a = r(Ml(Sc(this.rules, t, n, r)), ""),
              o = this.componentId + e;
            n.insertRules(o, o, a);
          }),
          (e.prototype.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (e.prototype.renderStyles = function (e, t, n, r) {
            e > 2 && ac.registerId(this.componentId + e),
              this.removeStyles(e, n),
              this.createStyles(e, t, n, r);
          }),
          e
        );
      })();
      (function () {
        function e() {
          var e = this;
          (this._emitSheetCSS = function () {
            var t = e.instance.toString(),
              n = Xl(),
              r = Ml(
                [
                  n && 'nonce="'.concat(n, '"'),
                  "".concat(Js, '="true"'),
                  "".concat("data-styled-version", '="').concat("6.0.8", '"'),
                ].filter(Boolean),
                " "
              );
            return "<style ".concat(r, ">").concat(t, "</style>");
          }),
            (this.getStyleTags = function () {
              if (e.sealed) throw Bl(2);
              return e._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var t;
              if (e.sealed) throw Bl(2);
              var n =
                  (((t = {})[Js] = ""),
                  (t["data-styled-version"] = "6.0.8"),
                  (t.dangerouslySetInnerHTML = {
                    __html: e.instance.toString(),
                  }),
                  t),
                r = Xl();
              return (
                r && (n.nonce = r),
                [P.createElement("style", qu({}, n, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              e.sealed = !0;
            }),
            (this.instance = new ac({ isServer: !0 })),
            (this.sealed = !1);
        }
        (e.prototype.collectStyles = function (e) {
          if (this.sealed) throw Bl(2);
          return P.createElement(pc, { sheet: this.instance }, e);
        }),
          (e.prototype.interleaveWithNodeStream = function (e) {
            throw Bl(3);
          });
      })(),
        "__sc-".concat(Js, "__");
      function Vc(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var Mc = (0, n(386).J)().persistAtom,
        Fc = Wu({
          key: "categories",
          default: ["TO_DO", "DOING", "DONE"],
          effects_UNSTABLE: [Mc],
        }),
        Ic = Wu({ key: "category", default: "TO_DO" }),
        jc = Wu({ key: "toDo", default: [], effects_UNSTABLE: [Mc] }),
        Bc = Hu({
          key: "toDoSelector",
          get: function (e) {
            var t = e.get,
              n = t(jc),
              r = t(Ic);
            return n.filter(function (e) {
              return e.category === r;
            });
          },
        }),
        zc = (0, P.createContext)({
          transformPagePoint: function (e) {
            return e;
          },
          isStatic: !1,
          reducedMotion: "never",
        }),
        Uc = (0, P.createContext)({}),
        Wc = (0, P.createContext)(null),
        Hc = "undefined" !== typeof document,
        $c = Hc ? P.useLayoutEffect : P.useEffect,
        Kc = (0, P.createContext)({ strict: !1 });
      function Gc(e) {
        return (
          "object" === typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function qc(e) {
        return "string" === typeof e || Array.isArray(e);
      }
      function Yc(e) {
        return "object" === typeof e && "function" === typeof e.start;
      }
      var Qc = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        Xc = ["initial"].concat(Qc);
      function Zc(e) {
        return (
          Yc(e.animate) ||
          Xc.some(function (t) {
            return qc(e[t]);
          })
        );
      }
      function Jc(e) {
        return Boolean(Zc(e) || e.variants);
      }
      function ef(e) {
        var t = (function (e, t) {
            if (Zc(e)) {
              var n = e.initial,
                r = e.animate;
              return {
                initial: !1 === n || qc(n) ? n : void 0,
                animate: qc(r) ? r : void 0,
              };
            }
            return !1 !== e.inherit ? t : {};
          })(e, (0, P.useContext)(Uc)),
          n = t.initial,
          r = t.animate;
        return (0, P.useMemo)(
          function () {
            return { initial: n, animate: r };
          },
          [tf(n), tf(r)]
        );
      }
      function tf(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var nf = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        rf = {},
        af = function (e) {
          rf[e] = {
            isEnabled: function (t) {
              return nf[e].some(function (e) {
                return !!t[e];
              });
            },
          };
        };
      for (var of in nf) af(of);
      var uf = (0, P.createContext)({}),
        sf = (0, P.createContext)({}),
        lf = Symbol.for("motionComponentSymbol");
      function cf(e) {
        var t = e.preloadedFeatures,
          n = e.createVisualElement,
          r = e.useRender,
          a = e.useVisualState,
          o = e.Component;
        t &&
          (function (e) {
            for (var t in e) rf[t] = w(w({}, rf[t]), e[t]);
          })(t);
        var i = (0, P.forwardRef)(function (e, i) {
          var u,
            s = w(w(w({}, (0, P.useContext)(zc)), e), {}, { layoutId: ff(e) }),
            l = s.isStatic,
            c = ef(e),
            f = a(e, l);
          if (!l && Hc) {
            c.visualElement = (function (e, t, n, r) {
              var a = (0, P.useContext)(Uc).visualElement,
                o = (0, P.useContext)(Kc),
                i = (0, P.useContext)(Wc),
                u = (0, P.useContext)(zc).reducedMotion,
                s = (0, P.useRef)();
              (r = r || o.renderer),
                !s.current &&
                  r &&
                  (s.current = r(e, {
                    visualState: t,
                    parent: a,
                    props: n,
                    presenceContext: i,
                    blockInitialAnimation: !!i && !1 === i.initial,
                    reducedMotionConfig: u,
                  }));
              var l = s.current;
              (0, P.useInsertionEffect)(function () {
                l && l.update(n, i);
              });
              var c = (0, P.useRef)(Boolean(window.HandoffAppearAnimations));
              return (
                $c(function () {
                  l &&
                    (l.render(),
                    c.current &&
                      l.animationState &&
                      l.animationState.animateChanges());
                }),
                (0, P.useEffect)(function () {
                  l &&
                    (l.updateFeatures(),
                    !c.current &&
                      l.animationState &&
                      l.animationState.animateChanges(),
                    (window.HandoffAppearAnimations = void 0),
                    (c.current = !1));
                }),
                l
              );
            })(o, f, s, n);
            var d = (0, P.useContext)(sf),
              h = (0, P.useContext)(Kc).strict;
            c.visualElement && (u = c.visualElement.loadFeatures(s, h, t, d));
          }
          return P.createElement(
            Uc.Provider,
            { value: c },
            u && c.visualElement
              ? P.createElement(u, w({ visualElement: c.visualElement }, s))
              : null,
            r(
              o,
              e,
              (function (e, t, n) {
                return (0, P.useCallback)(
                  function (r) {
                    r && e.mount && e.mount(r),
                      t && (r ? t.mount(r) : t.unmount()),
                      n &&
                        ("function" === typeof n
                          ? n(r)
                          : Gc(n) && (n.current = r));
                  },
                  [t]
                );
              })(f, c.visualElement, i),
              f,
              l,
              c.visualElement
            )
          );
        });
        return (i[lf] = o), i;
      }
      function ff(e) {
        var t = e.layoutId,
          n = (0, P.useContext)(uf).id;
        return n && void 0 !== t ? n + "-" + t : t;
      }
      function df(e) {
        function t(t) {
          return cf(
            e(
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            )
          );
        }
        if ("undefined" === typeof Proxy) return t;
        var n = new Map();
        return new Proxy(t, {
          get: function (e, r) {
            return n.has(r) || n.set(r, t(r)), n.get(r);
          },
        });
      }
      var hf = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function pf(e) {
        return (
          "string" === typeof e &&
          !e.includes("-") &&
          !!(hf.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      var vf = {};
      var mf = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        yf = new Set(mf);
      function gf(e, t) {
        var n = t.layout,
          r = t.layoutId;
        return (
          yf.has(e) ||
          e.startsWith("origin") ||
          ((n || void 0 !== r) && (!!vf[e] || "opacity" === e))
        );
      }
      var bf = function (e) {
          return Boolean(e && e.getVelocity);
        },
        Sf = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        wf = mf.length;
      var kf = function (e) {
          return function (t) {
            return "string" === typeof t && t.startsWith(e);
          };
        },
        xf = kf("--"),
        _f = kf("var(--"),
        Ef = function (e, t) {
          return t && "number" === typeof e ? t.transform(e) : e;
        },
        Tf = function (e, t, n) {
          return Math.min(Math.max(n, e), t);
        },
        Cf = {
          test: function (e) {
            return "number" === typeof e;
          },
          parse: parseFloat,
          transform: function (e) {
            return e;
          },
        },
        Pf = w(
          w({}, Cf),
          {},
          {
            transform: function (e) {
              return Tf(0, 1, e);
            },
          }
        ),
        Af = w(w({}, Cf), {}, { default: 1 }),
        Rf = function (e) {
          return Math.round(1e5 * e) / 1e5;
        },
        Lf = /(-)?([\d]*\.?[\d])+/g,
        Nf =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        Of =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function Df(e) {
        return "string" === typeof e;
      }
      var Vf = function (e) {
          return {
            test: function (t) {
              return Df(t) && t.endsWith(e) && 1 === t.split(" ").length;
            },
            parse: parseFloat,
            transform: function (t) {
              return "".concat(t).concat(e);
            },
          };
        },
        Mf = Vf("deg"),
        Ff = Vf("%"),
        If = Vf("px"),
        jf = Vf("vh"),
        Bf = Vf("vw"),
        zf = w(
          w({}, Ff),
          {},
          {
            parse: function (e) {
              return Ff.parse(e) / 100;
            },
            transform: function (e) {
              return Ff.transform(100 * e);
            },
          }
        ),
        Uf = w(w({}, Cf), {}, { transform: Math.round }),
        Wf = {
          borderWidth: If,
          borderTopWidth: If,
          borderRightWidth: If,
          borderBottomWidth: If,
          borderLeftWidth: If,
          borderRadius: If,
          radius: If,
          borderTopLeftRadius: If,
          borderTopRightRadius: If,
          borderBottomRightRadius: If,
          borderBottomLeftRadius: If,
          width: If,
          maxWidth: If,
          height: If,
          maxHeight: If,
          size: If,
          top: If,
          right: If,
          bottom: If,
          left: If,
          padding: If,
          paddingTop: If,
          paddingRight: If,
          paddingBottom: If,
          paddingLeft: If,
          margin: If,
          marginTop: If,
          marginRight: If,
          marginBottom: If,
          marginLeft: If,
          rotate: Mf,
          rotateX: Mf,
          rotateY: Mf,
          rotateZ: Mf,
          scale: Af,
          scaleX: Af,
          scaleY: Af,
          scaleZ: Af,
          skew: Mf,
          skewX: Mf,
          skewY: Mf,
          distance: If,
          translateX: If,
          translateY: If,
          translateZ: If,
          x: If,
          y: If,
          z: If,
          perspective: If,
          transformPerspective: If,
          opacity: Pf,
          originX: zf,
          originY: zf,
          originZ: If,
          zIndex: Uf,
          fillOpacity: Pf,
          strokeOpacity: Pf,
          numOctaves: Uf,
        };
      function Hf(e, t, n, r) {
        var a = e.style,
          o = e.vars,
          i = e.transform,
          u = e.transformOrigin,
          s = !1,
          l = !1,
          c = !0;
        for (var f in t) {
          var d = t[f];
          if (xf(f)) o[f] = d;
          else {
            var h = Wf[f],
              p = Ef(d, h);
            if (yf.has(f)) {
              if (((s = !0), (i[f] = p), !c)) continue;
              d !== (h.default || 0) && (c = !1);
            } else f.startsWith("origin") ? ((l = !0), (u[f] = p)) : (a[f] = p);
          }
        }
        if (
          (t.transform ||
            (s || r
              ? (a.transform = (function (e, t, n, r) {
                  for (
                    var a = t.enableHardwareAcceleration,
                      o = void 0 === a || a,
                      i = t.allowTransformNone,
                      u = void 0 === i || i,
                      s = "",
                      l = 0;
                    l < wf;
                    l++
                  ) {
                    var c = mf[l];
                    if (void 0 !== e[c]) {
                      var f = Sf[c] || c;
                      s += "".concat(f, "(").concat(e[c], ") ");
                    }
                  }
                  return (
                    o && !e.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    r ? (s = r(e, n ? "" : s)) : u && n && (s = "none"),
                    s
                  );
                })(e.transform, n, c, r))
              : a.transform && (a.transform = "none")),
          l)
        ) {
          var v = u.originX,
            m = void 0 === v ? "50%" : v,
            y = u.originY,
            g = void 0 === y ? "50%" : y,
            b = u.originZ,
            S = void 0 === b ? 0 : b;
          a.transformOrigin = "".concat(m, " ").concat(g, " ").concat(S);
        }
      }
      var $f = function () {
        return { style: {}, transform: {}, transformOrigin: {}, vars: {} };
      };
      function Kf(e, t, n) {
        for (var r in t) bf(t[r]) || gf(r, n) || (e[r] = t[r]);
      }
      function Gf(e, t, n) {
        var r = {};
        return (
          Kf(r, e.style || {}, e),
          Object.assign(
            r,
            (function (e, t, n) {
              var r = e.transformTemplate;
              return (0, P.useMemo)(
                function () {
                  var e = $f();
                  return (
                    Hf(e, t, { enableHardwareAcceleration: !n }, r),
                    Object.assign({}, e.vars, e.style)
                  );
                },
                [t]
              );
            })(e, t, n)
          ),
          e.transformValues ? e.transformValues(r) : r
        );
      }
      function qf(e, t, n) {
        var r = {},
          a = Gf(e, t, n);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((r.draggable = !1),
            (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
            (a.touchAction =
              !0 === e.drag
                ? "none"
                : "pan-".concat("x" === e.drag ? "y" : "x"))),
          void 0 === e.tabIndex &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (r.tabIndex = 0),
          (r.style = a),
          r
        );
      }
      var Yf = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function Qf(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          Yf.has(e)
        );
      }
      var Xf,
        Zf = function (e) {
          return !Qf(e);
        };
      try {
        (Xf = require("@emotion/is-prop-valid").default) &&
          (Zf = function (e) {
            return e.startsWith("on") ? !Qf(e) : Xf(e);
          });
      } catch (kS) {}
      function Jf(e, t, n) {
        return "string" === typeof e ? e : If.transform(t + n * e);
      }
      var ed = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        td = { offset: "strokeDashoffset", array: "strokeDasharray" };
      var nd = [
        "attrX",
        "attrY",
        "attrScale",
        "originX",
        "originY",
        "pathLength",
        "pathSpacing",
        "pathOffset",
      ];
      function rd(e, t, n, r, a) {
        var o = t.attrX,
          u = t.attrY,
          s = t.attrScale,
          l = t.originX,
          c = t.originY,
          f = t.pathLength,
          d = t.pathSpacing,
          h = void 0 === d ? 1 : d,
          p = t.pathOffset,
          v = void 0 === p ? 0 : p;
        if ((Hf(e, i(t, nd), n, a), r))
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        else {
          (e.attrs = e.style), (e.style = {});
          var m = e.attrs,
            y = e.style,
            g = e.dimensions;
          m.transform && (g && (y.transform = m.transform), delete m.transform),
            g &&
              (void 0 !== l || void 0 !== c || y.transform) &&
              (y.transformOrigin = (function (e, t, n) {
                var r = Jf(t, e.x, e.width),
                  a = Jf(n, e.y, e.height);
                return "".concat(r, " ").concat(a);
              })(g, void 0 !== l ? l : 0.5, void 0 !== c ? c : 0.5)),
            void 0 !== o && (m.x = o),
            void 0 !== u && (m.y = u),
            void 0 !== s && (m.scale = s),
            void 0 !== f &&
              (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  a =
                    !(arguments.length > 4 && void 0 !== arguments[4]) ||
                    arguments[4];
                e.pathLength = 1;
                var o = a ? ed : td;
                e[o.offset] = If.transform(-r);
                var i = If.transform(t),
                  u = If.transform(n);
                e[o.array] = "".concat(i, " ").concat(u);
              })(m, f, h, v, !1);
        }
      }
      var ad = function () {
          return w(w({}, $f()), {}, { attrs: {} });
        },
        od = function (e) {
          return "string" === typeof e && "svg" === e.toLowerCase();
        };
      function id(e, t, n, r) {
        var a = (0, P.useMemo)(
          function () {
            var n = ad();
            return (
              rd(
                n,
                t,
                { enableHardwareAcceleration: !1 },
                od(r),
                e.transformTemplate
              ),
              w(w({}, n.attrs), {}, { style: w({}, n.style) })
            );
          },
          [t]
        );
        if (e.style) {
          var o = {};
          Kf(o, e.style, e), (a.style = w(w({}, o), a.style));
        }
        return a;
      }
      function ud() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (t, n, r, a, o) {
          var i = a.latestValues,
            u = (pf(t) ? id : qf)(n, i, o, t),
            s = (function (e, t, n) {
              var r = {};
              for (var a in e)
                ("values" === a && "object" === typeof e.values) ||
                  ((Zf(a) ||
                    (!0 === n && Qf(a)) ||
                    (!t && !Qf(a)) ||
                    (e.draggable && a.startsWith("onDrag"))) &&
                    (r[a] = e[a]));
              return r;
            })(n, "string" === typeof t, e),
            l = w(w(w({}, s), u), {}, { ref: r }),
            c = n.children,
            f = (0, P.useMemo)(
              function () {
                return bf(c) ? c.get() : c;
              },
              [c]
            );
          return (0, P.createElement)(t, w(w({}, l), {}, { children: f }));
        };
      }
      var sd = function (e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      };
      function ld(e, t, n, r) {
        var a = t.style,
          o = t.vars;
        for (var i in (Object.assign(e.style, a, r && r.getProjectionStyles(n)),
        o))
          e.style.setProperty(i, o[i]);
      }
      var cd = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function fd(e, t, n, r) {
        for (var a in (ld(e, t, void 0, r), t.attrs))
          e.setAttribute(cd.has(a) ? a : sd(a), t.attrs[a]);
      }
      function dd(e, t) {
        var n = e.style,
          r = {};
        for (var a in n)
          (bf(n[a]) || (t.style && bf(t.style[a])) || gf(a, e)) &&
            (r[a] = n[a]);
        return r;
      }
      function hd(e, t) {
        var n = dd(e, t);
        for (var r in e) {
          if (bf(e[r]) || bf(t[r]))
            n[
              -1 !== mf.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = e[r];
        }
        return n;
      }
      function pd(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return (
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
          "string" === typeof t && (t = e.variants && e.variants[t]),
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
          t
        );
      }
      var vd = function (e) {
          return Array.isArray(e);
        },
        md = function (e) {
          return Boolean(e && "object" === typeof e && e.mix && e.toValue);
        },
        yd = function (e) {
          return vd(e) ? e[e.length - 1] || 0 : e;
        };
      function gd(e) {
        var t = bf(e) ? e.get() : e;
        return md(t) ? t.toValue() : t;
      }
      var bd = ["transitionEnd", "transition"];
      var Sd = function (e) {
        return function (t, n) {
          var r = (0, P.useContext)(Uc),
            a = (0, P.useContext)(Wc),
            o = function () {
              return (function (e, t, n, r) {
                var a = e.scrapeMotionValuesFromProps,
                  o = e.createRenderState,
                  i = e.onMount,
                  u = { latestValues: wd(t, n, r, a), renderState: o() };
                return (
                  i &&
                    (u.mount = function (e) {
                      return i(t, e, u);
                    }),
                  u
                );
              })(e, t, r, a);
            };
          return n
            ? o()
            : (function (e) {
                var t = (0, P.useRef)(null);
                return null === t.current && (t.current = e()), t.current;
              })(o);
        };
      };
      function wd(e, t, n, r) {
        var a = {},
          o = r(e, {});
        for (var u in o) a[u] = gd(o[u]);
        var s = e.initial,
          l = e.animate,
          c = Zc(e),
          f = Jc(e);
        t &&
          f &&
          !c &&
          !1 !== e.inherit &&
          (void 0 === s && (s = t.initial), void 0 === l && (l = t.animate));
        var d = !!n && !1 === n.initial,
          h = (d = d || !1 === s) ? l : s;
        h &&
          "boolean" !== typeof h &&
          !Yc(h) &&
          (Array.isArray(h) ? h : [h]).forEach(function (t) {
            var n = pd(e, t);
            if (n) {
              var r = n.transitionEnd,
                o = (n.transition, i(n, bd));
              for (var u in o) {
                var s = o[u];
                if (Array.isArray(s)) s = s[d ? s.length - 1 : 0];
                null !== s && (a[u] = s);
              }
              for (var l in r) a[l] = r[l];
            }
          });
        return a;
      }
      var kd = function (e) {
          return e;
        },
        xd = (function () {
          function e() {
            E(this, e), (this.order = []), (this.scheduled = new Set());
          }
          return (
            C(e, [
              {
                key: "add",
                value: function (e) {
                  if (!this.scheduled.has(e))
                    return this.scheduled.add(e), this.order.push(e), !0;
                },
              },
              {
                key: "remove",
                value: function (e) {
                  var t = this.order.indexOf(e);
                  -1 !== t &&
                    (this.order.splice(t, 1), this.scheduled.delete(e));
                },
              },
              {
                key: "clear",
                value: function () {
                  (this.order.length = 0), this.scheduled.clear();
                },
              },
            ]),
            e
          );
        })();
      var _d = [
        "prepare",
        "read",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      var Ed = (function (e, t) {
          var n = !1,
            r = !0,
            a = { delta: 0, timestamp: 0, isProcessing: !1 },
            o = _d.reduce(function (e, t) {
              return (
                (e[t] = (function (e) {
                  var t = new xd(),
                    n = new xd(),
                    r = 0,
                    a = !1,
                    o = !1,
                    i = new WeakSet(),
                    u = {
                      schedule: function (e) {
                        var o =
                            arguments.length > 2 &&
                            void 0 !== arguments[2] &&
                            arguments[2] &&
                            a,
                          u = o ? t : n;
                        return (
                          arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1] &&
                            i.add(e),
                          u.add(e) && o && a && (r = t.order.length),
                          e
                        );
                      },
                      cancel: function (e) {
                        n.remove(e), i.delete(e);
                      },
                      process: function (s) {
                        if (a) o = !0;
                        else {
                          a = !0;
                          var l = [n, t];
                          if (
                            ((t = l[0]),
                            (n = l[1]).clear(),
                            (r = t.order.length))
                          )
                            for (var c = 0; c < r; c++) {
                              var f = t.order[c];
                              f(s), i.has(f) && (u.schedule(f), e());
                            }
                          (a = !1), o && ((o = !1), u.process(s));
                        }
                      },
                    };
                  return u;
                })(function () {
                  return (n = !0);
                })),
                e
              );
            }, {}),
            i = function (e) {
              return o[e].process(a);
            },
            u = function o() {
              var u = performance.now();
              (n = !1),
                (a.delta = r
                  ? 1e3 / 60
                  : Math.max(Math.min(u - a.timestamp, 40), 1)),
                (a.timestamp = u),
                (a.isProcessing = !0),
                _d.forEach(i),
                (a.isProcessing = !1),
                n && t && ((r = !1), e(o));
            },
            s = _d.reduce(function (t, i) {
              var s = o[i];
              return (
                (t[i] = function (t) {
                  var o =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    i =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                  return (
                    n || ((n = !0), (r = !0), a.isProcessing || e(u)),
                    s.schedule(t, o, i)
                  );
                }),
                t
              );
            }, {});
          return {
            schedule: s,
            cancel: function (e) {
              return _d.forEach(function (t) {
                return o[t].cancel(e);
              });
            },
            state: a,
            steps: o,
          };
        })(
          "undefined" !== typeof requestAnimationFrame
            ? requestAnimationFrame
            : kd,
          !0
        ),
        Td = Ed.schedule,
        Cd = Ed.cancel,
        Pd = Ed.state,
        Ad = Ed.steps,
        Rd = {
          useVisualState: Sd({
            scrapeMotionValuesFromProps: hd,
            createRenderState: ad,
            onMount: function (e, t, n) {
              var r = n.renderState,
                a = n.latestValues;
              Td.read(function () {
                try {
                  r.dimensions =
                    "function" === typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                Td.render(function () {
                  rd(
                    r,
                    a,
                    { enableHardwareAcceleration: !1 },
                    od(t.tagName),
                    e.transformTemplate
                  ),
                    fd(t, r);
                });
            },
          }),
        },
        Ld = {
          useVisualState: Sd({
            scrapeMotionValuesFromProps: dd,
            createRenderState: $f,
          }),
        };
      function Nd(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { passive: !0 };
        return (
          e.addEventListener(t, n, r),
          function () {
            return e.removeEventListener(t, n);
          }
        );
      }
      var Od = function (e) {
        return "mouse" === e.pointerType
          ? "number" !== typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      };
      function Dd(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { point: { x: e[t + "X"], y: e[t + "Y"] } };
      }
      var Vd = function (e) {
        return function (t) {
          return Od(t) && e(t, Dd(t));
        };
      };
      function Md(e, t, n, r) {
        return Nd(e, t, Vd(n), r);
      }
      var Fd = function (e, t) {
          return function (n) {
            return t(e(n));
          };
        },
        Id = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(Fd);
        };
      function jd(e) {
        var t = null;
        return function () {
          return (
            null === t &&
            ((t = e),
            function () {
              t = null;
            })
          );
        };
      }
      var Bd = jd("dragHorizontal"),
        zd = jd("dragVertical");
      function Ud(e) {
        var t = !1;
        if ("y" === e) t = zd();
        else if ("x" === e) t = Bd();
        else {
          var n = Bd(),
            r = zd();
          n && r
            ? (t = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return t;
      }
      function Wd() {
        var e = Ud(!0);
        return !e || (e(), !1);
      }
      var Hd = (function () {
        function e(t) {
          E(this, e), (this.isMounted = !1), (this.node = t);
        }
        return C(e, [{ key: "update", value: function () {} }]), e;
      })();
      function $d(e, t) {
        var n = "pointer" + (t ? "enter" : "leave"),
          r = "onHover" + (t ? "Start" : "End");
        return Md(
          e.current,
          n,
          function (n, a) {
            if ("touch" !== n.type && !Wd()) {
              var o = e.getProps();
              e.animationState &&
                o.whileHover &&
                e.animationState.setActive("whileHover", t),
                o[r] &&
                  Td.update(function () {
                    return o[r](n, a);
                  });
            }
          },
          { passive: !e.getProps()[r] }
        );
      }
      var Kd = (function (e) {
          x(n, e);
          var t = _(n);
          function n() {
            return E(this, n), t.apply(this, arguments);
          }
          return (
            C(n, [
              {
                key: "mount",
                value: function () {
                  this.unmount = Id($d(this.node, !0), $d(this.node, !1));
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Hd),
        Gd = (function (e) {
          x(n, e);
          var t = _(n);
          function n() {
            var e;
            return (
              E(this, n), ((e = t.apply(this, arguments)).isActive = !1), e
            );
          }
          return (
            C(n, [
              {
                key: "onFocus",
                value: function () {
                  var e = !1;
                  try {
                    e = this.node.current.matches(":focus-visible");
                  } catch (t) {
                    e = !0;
                  }
                  e &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !0),
                    (this.isActive = !0));
                },
              },
              {
                key: "onBlur",
                value: function () {
                  this.isActive &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !1),
                    (this.isActive = !1));
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = this;
                  this.unmount = Id(
                    Nd(this.node.current, "focus", function () {
                      return e.onFocus();
                    }),
                    Nd(this.node.current, "blur", function () {
                      return e.onBlur();
                    })
                  );
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Hd),
        qd = function e(t, n) {
          return !!n && (t === n || e(t, n.parentElement));
        };
      function Yd(e, t) {
        if (t) {
          var n = new PointerEvent("pointer" + e);
          t(n, Dd(n));
        }
      }
      var Qd = (function (e) {
          x(n, e);
          var t = _(n);
          function n() {
            var e;
            return (
              E(this, n),
              ((e = t.apply(this, arguments)).removeStartListeners = kd),
              (e.removeEndListeners = kd),
              (e.removeAccessibleListeners = kd),
              (e.startPointerPress = function (t, n) {
                if ((e.removeEndListeners(), !e.isPressing)) {
                  var r = e.node.getProps(),
                    a = Md(
                      window,
                      "pointerup",
                      function (t, n) {
                        if (e.checkPressEnd()) {
                          var r = e.node.getProps(),
                            a = r.onTap,
                            o = r.onTapCancel;
                          Td.update(function () {
                            qd(e.node.current, t.target)
                              ? a && a(t, n)
                              : o && o(t, n);
                          });
                        }
                      },
                      { passive: !(r.onTap || r.onPointerUp) }
                    ),
                    o = Md(
                      window,
                      "pointercancel",
                      function (t, n) {
                        return e.cancelPress(t, n);
                      },
                      { passive: !(r.onTapCancel || r.onPointerCancel) }
                    );
                  (e.removeEndListeners = Id(a, o)), e.startPress(t, n);
                }
              }),
              (e.startAccessiblePress = function () {
                var t = Nd(e.node.current, "keydown", function (t) {
                    if ("Enter" === t.key && !e.isPressing) {
                      e.removeEndListeners(),
                        (e.removeEndListeners = Nd(
                          e.node.current,
                          "keyup",
                          function (t) {
                            "Enter" === t.key &&
                              e.checkPressEnd() &&
                              Yd("up", function (t, n) {
                                var r = e.node.getProps().onTap;
                                r &&
                                  Td.update(function () {
                                    return r(t, n);
                                  });
                              });
                          }
                        )),
                        Yd("down", function (t, n) {
                          e.startPress(t, n);
                        });
                    }
                  }),
                  n = Nd(e.node.current, "blur", function () {
                    e.isPressing &&
                      Yd("cancel", function (t, n) {
                        return e.cancelPress(t, n);
                      });
                  });
                e.removeAccessibleListeners = Id(t, n);
              }),
              e
            );
          }
          return (
            C(n, [
              {
                key: "startPress",
                value: function (e, t) {
                  this.isPressing = !0;
                  var n = this.node.getProps(),
                    r = n.onTapStart;
                  n.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !0),
                    r &&
                      Td.update(function () {
                        return r(e, t);
                      });
                },
              },
              {
                key: "checkPressEnd",
                value: function () {
                  return (
                    this.removeEndListeners(),
                    (this.isPressing = !1),
                    this.node.getProps().whileTap &&
                      this.node.animationState &&
                      this.node.animationState.setActive("whileTap", !1),
                    !Wd()
                  );
                },
              },
              {
                key: "cancelPress",
                value: function (e, t) {
                  if (this.checkPressEnd()) {
                    var n = this.node.getProps().onTapCancel;
                    n &&
                      Td.update(function () {
                        return n(e, t);
                      });
                  }
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = this.node.getProps(),
                    t = Md(
                      this.node.current,
                      "pointerdown",
                      this.startPointerPress,
                      { passive: !(e.onTapStart || e.onPointerStart) }
                    ),
                    n = Nd(
                      this.node.current,
                      "focus",
                      this.startAccessiblePress
                    );
                  this.removeStartListeners = Id(t, n);
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removeStartListeners(),
                    this.removeEndListeners(),
                    this.removeAccessibleListeners();
                },
              },
            ]),
            n
          );
        })(Hd),
        Xd = ["root"],
        Zd = new WeakMap(),
        Jd = new WeakMap(),
        eh = function (e) {
          var t = Zd.get(e.target);
          t && t(e);
        },
        th = function (e) {
          e.forEach(eh);
        };
      function nh(e, t, n) {
        var r = (function (e) {
          var t = e.root,
            n = i(e, Xd),
            r = t || document;
          Jd.has(r) || Jd.set(r, {});
          var a = Jd.get(r),
            o = JSON.stringify(n);
          return (
            a[o] || (a[o] = new IntersectionObserver(th, w({ root: t }, n))),
            a[o]
          );
        })(t);
        return (
          Zd.set(e, n),
          r.observe(e),
          function () {
            Zd.delete(e), r.unobserve(e);
          }
        );
      }
      var rh = { some: 0, all: 1 },
        ah = (function (e) {
          x(n, e);
          var t = _(n);
          function n() {
            var e;
            return (
              E(this, n),
              ((e = t.apply(this, arguments)).hasEnteredView = !1),
              (e.isInView = !1),
              e
            );
          }
          return (
            C(n, [
              {
                key: "startObserver",
                value: function () {
                  var e = this;
                  this.unmount();
                  var t = this.node.getProps().viewport,
                    n = void 0 === t ? {} : t,
                    r = n.root,
                    a = n.margin,
                    o = n.amount,
                    i = void 0 === o ? "some" : o,
                    u = n.once,
                    s = {
                      root: r ? r.current : void 0,
                      rootMargin: a,
                      threshold: "number" === typeof i ? i : rh[i],
                    };
                  return nh(this.node.current, s, function (t) {
                    var n = t.isIntersecting;
                    if (
                      e.isInView !== n &&
                      ((e.isInView = n), !u || n || !e.hasEnteredView)
                    ) {
                      n && (e.hasEnteredView = !0),
                        e.node.animationState &&
                          e.node.animationState.setActive("whileInView", n);
                      var r = e.node.getProps(),
                        a = r.onViewportEnter,
                        o = r.onViewportLeave,
                        i = n ? a : o;
                      i && i(t);
                    }
                  });
                },
              },
              {
                key: "mount",
                value: function () {
                  this.startObserver();
                },
              },
              {
                key: "update",
                value: function () {
                  if ("undefined" !== typeof IntersectionObserver) {
                    var e = this.node,
                      t = e.props,
                      n = e.prevProps,
                      r = ["amount", "margin", "root"].some(
                        (function (e) {
                          var t = e.viewport,
                            n = void 0 === t ? {} : t,
                            r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            a = r.viewport,
                            o = void 0 === a ? {} : a;
                          return function (e) {
                            return n[e] !== o[e];
                          };
                        })(t, n)
                      );
                    r && this.startObserver();
                  }
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Hd);
      var oh = {
        inView: { Feature: ah },
        tap: { Feature: Qd },
        focus: { Feature: Gd },
        hover: { Feature: Kd },
      };
      function ih(e, t) {
        if (!Array.isArray(t)) return !1;
        var n = t.length;
        if (n !== e.length) return !1;
        for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function uh(e, t, n) {
        var r = e.getProps();
        return pd(
          r,
          t,
          void 0 !== n ? n : r.custom,
          (function (e) {
            var t = {};
            return (
              e.values.forEach(function (e, n) {
                return (t[n] = e.get());
              }),
              t
            );
          })(e),
          (function (e) {
            var t = {};
            return (
              e.values.forEach(function (e, n) {
                return (t[n] = e.getVelocity());
              }),
              t
            );
          })(e)
        );
      }
      var sh = "data-" + sd("framerAppearId"),
        lh = kd,
        ch = kd;
      var fh = function (e) {
          return 1e3 * e;
        },
        dh = function (e) {
          return e / 1e3;
        },
        hh = !1,
        ph = function (e) {
          return Array.isArray(e) && "number" === typeof e[0];
        };
      function vh(e) {
        return Boolean(
          !e ||
            ("string" === typeof e && yh[e]) ||
            ph(e) ||
            (Array.isArray(e) && e.every(vh))
        );
      }
      var mh = function (e) {
          var t = l(e, 4),
            n = t[0],
            r = t[1],
            a = t[2],
            o = t[3];
          return "cubic-bezier("
            .concat(n, ", ")
            .concat(r, ", ")
            .concat(a, ", ")
            .concat(o, ")");
        },
        yh = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: mh([0, 0.65, 0.55, 1]),
          circOut: mh([0.55, 0, 1, 0.45]),
          backIn: mh([0.31, 0.01, 0.66, -0.59]),
          backOut: mh([0.33, 1.53, 0.69, 0.99]),
        };
      function gh(e) {
        if (e) return ph(e) ? mh(e) : Array.isArray(e) ? e.map(gh) : yh[e];
      }
      var bh = function (e, t, n) {
          return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
        },
        Sh = 1e-7,
        wh = 12;
      function kh(e, t, n, r) {
        if (e === t && n === r) return kd;
        var a = function (t) {
          return (function (e, t, n, r, a) {
            var o,
              i,
              u = 0;
            do {
              (o = bh((i = t + (n - t) / 2), r, a) - e) > 0 ? (n = i) : (t = i);
            } while (Math.abs(o) > Sh && ++u < wh);
            return i;
          })(t, 0, 1, e, n);
        };
        return function (e) {
          return 0 === e || 1 === e ? e : bh(a(e), t, r);
        };
      }
      var xh = kh(0.42, 0, 1, 1),
        _h = kh(0, 0, 0.58, 1),
        Eh = kh(0.42, 0, 0.58, 1),
        Th = function (e) {
          return Array.isArray(e) && "number" !== typeof e[0];
        },
        Ch = function (e) {
          return function (t) {
            return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
          };
        },
        Ph = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        Ah = function (e) {
          return 1 - Math.sin(Math.acos(e));
        },
        Rh = Ph(Ah),
        Lh = Ch(Rh),
        Nh = kh(0.33, 1.53, 0.69, 0.99),
        Oh = Ph(Nh),
        Dh = Ch(Oh),
        Vh = {
          linear: kd,
          easeIn: xh,
          easeInOut: Eh,
          easeOut: _h,
          circIn: Ah,
          circInOut: Lh,
          circOut: Rh,
          backIn: Oh,
          backInOut: Dh,
          backOut: Nh,
          anticipate: function (e) {
            return (e *= 2) < 1
              ? 0.5 * Oh(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          },
        },
        Mh = function (e) {
          if (Array.isArray(e)) {
            ch(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            var t = l(e, 4);
            return kh(t[0], t[1], t[2], t[3]);
          }
          return "string" === typeof e
            ? (ch(void 0 !== Vh[e], "Invalid easing type '".concat(e, "'")),
              Vh[e])
            : e;
        },
        Fh = function (e, t) {
          return function (n) {
            return Boolean(
              (Df(n) && Of.test(n) && n.startsWith(e)) ||
                (t && Object.prototype.hasOwnProperty.call(n, t))
            );
          };
        },
        Ih = function (e, t, n) {
          return function (r) {
            var a;
            if (!Df(r)) return r;
            var o = l(r.match(Lf), 4),
              i = o[0],
              u = o[1],
              s = o[2],
              c = o[3];
            return (
              b((a = {}), e, parseFloat(i)),
              b(a, t, parseFloat(u)),
              b(a, n, parseFloat(s)),
              b(a, "alpha", void 0 !== c ? parseFloat(c) : 1),
              a
            );
          };
        },
        jh = w(
          w({}, Cf),
          {},
          {
            transform: function (e) {
              return Math.round(
                (function (e) {
                  return Tf(0, 255, e);
                })(e)
              );
            },
          }
        ),
        Bh = {
          test: Fh("rgb", "red"),
          parse: Ih("red", "green", "blue"),
          transform: function (e) {
            var t = e.red,
              n = e.green,
              r = e.blue,
              a = e.alpha,
              o = void 0 === a ? 1 : a;
            return (
              "rgba(" +
              jh.transform(t) +
              ", " +
              jh.transform(n) +
              ", " +
              jh.transform(r) +
              ", " +
              Rf(Pf.transform(o)) +
              ")"
            );
          },
        };
      var zh = {
          test: Fh("#"),
          parse: function (e) {
            var t = "",
              n = "",
              r = "",
              a = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (n = e.substring(3, 5)),
                  (r = e.substring(5, 7)),
                  (a = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (n = e.substring(2, 3)),
                  (r = e.substring(3, 4)),
                  (a = e.substring(4, 5)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (a += a)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: a ? parseInt(a, 16) / 255 : 1,
              }
            );
          },
          transform: Bh.transform,
        },
        Uh = {
          test: Fh("hsl", "hue"),
          parse: Ih("hue", "saturation", "lightness"),
          transform: function (e) {
            var t = e.hue,
              n = e.saturation,
              r = e.lightness,
              a = e.alpha,
              o = void 0 === a ? 1 : a;
            return (
              "hsla(" +
              Math.round(t) +
              ", " +
              Ff.transform(Rf(n)) +
              ", " +
              Ff.transform(Rf(r)) +
              ", " +
              Rf(Pf.transform(o)) +
              ")"
            );
          },
        },
        Wh = {
          test: function (e) {
            return Bh.test(e) || zh.test(e) || Uh.test(e);
          },
          parse: function (e) {
            return Bh.test(e)
              ? Bh.parse(e)
              : Uh.test(e)
              ? Uh.parse(e)
              : zh.parse(e);
          },
          transform: function (e) {
            return Df(e)
              ? e
              : e.hasOwnProperty("red")
              ? Bh.transform(e)
              : Uh.transform(e);
          },
        },
        Hh = function (e, t, n) {
          return -n * e + n * t + e;
        };
      function $h(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      var Kh = function (e, t, n) {
          var r = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - r) + r));
        },
        Gh = [zh, Bh, Uh];
      function qh(e) {
        var t = (function (e) {
          return Gh.find(function (t) {
            return t.test(e);
          });
        })(e);
        ch(
          Boolean(t),
          "'".concat(
            e,
            "' is not an animatable color. Use the equivalent color code instead."
          )
        );
        var n = t.parse(e);
        return (
          t === Uh &&
            (n = (function (e) {
              var t = e.hue,
                n = e.saturation,
                r = e.lightness,
                a = e.alpha;
              (t /= 360), (r /= 100);
              var o = 0,
                i = 0,
                u = 0;
              if ((n /= 100)) {
                var s = r < 0.5 ? r * (1 + n) : r + n - r * n,
                  l = 2 * r - s;
                (o = $h(l, s, t + 1 / 3)),
                  (i = $h(l, s, t)),
                  (u = $h(l, s, t - 1 / 3));
              } else o = i = u = r;
              return {
                red: Math.round(255 * o),
                green: Math.round(255 * i),
                blue: Math.round(255 * u),
                alpha: a,
              };
            })(n)),
          n
        );
      }
      var Yh = function (e, t) {
        var n = qh(e),
          r = qh(t),
          a = w({}, n);
        return function (e) {
          return (
            (a.red = Kh(n.red, r.red, e)),
            (a.green = Kh(n.green, r.green, e)),
            (a.blue = Kh(n.blue, r.blue, e)),
            (a.alpha = Hh(n.alpha, r.alpha, e)),
            Bh.transform(a)
          );
        };
      };
      var Qh = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: kd,
        },
        Xh = { regex: Nf, countKey: "Colors", token: "${c}", parse: Wh.parse },
        Zh = { regex: Lf, countKey: "Numbers", token: "${n}", parse: Cf.parse };
      function Jh(e, t) {
        var n,
          r = t.regex,
          a = t.countKey,
          i = t.token,
          u = t.parse,
          s = e.tokenised.match(r);
        s &&
          ((e["num" + a] = s.length),
          (e.tokenised = e.tokenised.replace(r, i)),
          (n = e.values).push.apply(n, o(s.map(u))));
      }
      function ep(e) {
        var t = e.toString(),
          n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return n.value.includes("var(--") && Jh(n, Qh), Jh(n, Xh), Jh(n, Zh), n;
      }
      function tp(e) {
        return ep(e).values;
      }
      function np(e) {
        var t = ep(e),
          n = t.values,
          r = t.numColors,
          a = t.numVars,
          o = t.tokenised,
          i = n.length;
        return function (e) {
          for (var t = o, n = 0; n < i; n++)
            t =
              n < a
                ? t.replace(Qh.token, e[n])
                : n < a + r
                ? t.replace(Xh.token, Wh.transform(e[n]))
                : t.replace(Zh.token, Rf(e[n]));
          return t;
        };
      }
      var rp = function (e) {
        return "number" === typeof e ? 0 : e;
      };
      var ap = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              Df(e) &&
              ((null === (t = e.match(Lf)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (n = e.match(Nf)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: tp,
          createTransformer: np,
          getAnimatableNone: function (e) {
            var t = tp(e);
            return np(e)(t.map(rp));
          },
        },
        op = function (e, t) {
          return function (n) {
            return "".concat(n > 0 ? t : e);
          };
        };
      function ip(e, t) {
        return "number" === typeof e
          ? function (n) {
              return Hh(e, t, n);
            }
          : Wh.test(e)
          ? Yh(e, t)
          : e.startsWith("var(")
          ? op(e, t)
          : lp(e, t);
      }
      var up = function (e, t) {
          var n = o(e),
            r = n.length,
            a = e.map(function (e, n) {
              return ip(e, t[n]);
            });
          return function (e) {
            for (var t = 0; t < r; t++) n[t] = a[t](e);
            return n;
          };
        },
        sp = function (e, t) {
          var n = w(w({}, e), t),
            r = {};
          for (var a in n)
            void 0 !== e[a] && void 0 !== t[a] && (r[a] = ip(e[a], t[a]));
          return function (e) {
            for (var t in r) n[t] = r[t](e);
            return n;
          };
        },
        lp = function (e, t) {
          var n = ap.createTransformer(t),
            r = ep(e),
            a = ep(t);
          return r.numVars === a.numVars &&
            r.numColors === a.numColors &&
            r.numNumbers >= a.numNumbers
            ? Id(up(r.values, a.values), n)
            : (lh(
                !0,
                "Complex values '"
                  .concat(e, "' and '")
                  .concat(
                    t,
                    "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                  )
              ),
              op(e, t));
        },
        cp = function (e, t, n) {
          var r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        fp = function (e, t) {
          return function (n) {
            return Hh(e, t, n);
          };
        };
      function dp(e, t, n) {
        for (
          var r = [],
            a =
              n ||
              (function (e) {
                return "number" === typeof e
                  ? fp
                  : "string" === typeof e
                  ? Wh.test(e)
                    ? Yh
                    : lp
                  : Array.isArray(e)
                  ? up
                  : "object" === typeof e
                  ? sp
                  : fp;
              })(e[0]),
            o = e.length - 1,
            i = 0;
          i < o;
          i++
        ) {
          var u = a(e[i], e[i + 1]);
          if (t) {
            var s = Array.isArray(t) ? t[i] || kd : t;
            u = Id(s, u);
          }
          r.push(u);
        }
        return r;
      }
      function hp(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          a = void 0 === r || r,
          i = n.ease,
          u = n.mixer,
          s = e.length;
        if (
          (ch(
            s === t.length,
            "Both input and output ranges must be the same length"
          ),
          1 === s)
        )
          return function () {
            return t[0];
          };
        e[0] > e[s - 1] && ((e = o(e).reverse()), (t = o(t).reverse()));
        var l = dp(t, i, u),
          c = l.length,
          f = function (t) {
            var n = 0;
            if (c > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            var r = cp(e[n], e[n + 1], t);
            return l[n](r);
          };
        return a
          ? function (t) {
              return f(Tf(e[0], e[s - 1], t));
            }
          : f;
      }
      function pp(e) {
        var t = [0];
        return (
          (function (e, t) {
            for (var n = e[e.length - 1], r = 1; r <= t; r++) {
              var a = cp(0, t, r);
              e.push(Hh(n, 1, a));
            }
          })(t, e.length - 1),
          t
        );
      }
      function vp(e) {
        var t,
          n,
          r = e.duration,
          a = void 0 === r ? 300 : r,
          o = e.keyframes,
          i = e.times,
          u = e.ease,
          s = void 0 === u ? "easeInOut" : u,
          l = Th(s) ? s.map(Mh) : Mh(s),
          c = { done: !1, value: o[0] },
          f = (function (e, t) {
            return e.map(function (e) {
              return e * t;
            });
          })(i && i.length === o.length ? i : pp(o), a),
          d = hp(f, o, {
            ease: Array.isArray(l)
              ? l
              : ((t = o),
                (n = l),
                t
                  .map(function () {
                    return n || Eh;
                  })
                  .splice(0, t.length - 1)),
          });
        return {
          calculatedDuration: a,
          next: function (e) {
            return (c.value = d(e)), (c.done = e >= a), c;
          },
        };
      }
      function mp(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      var yp = 5;
      function gp(e, t, n) {
        var r = Math.max(t - yp, 0);
        return mp(n - e(r), t - r);
      }
      var bp = 0.001,
        Sp = 0.01,
        wp = 10,
        kp = 0.05,
        xp = 1;
      function _p(e) {
        var t,
          n,
          r = e.duration,
          a = void 0 === r ? 800 : r,
          o = e.bounce,
          i = void 0 === o ? 0.25 : o,
          u = e.velocity,
          s = void 0 === u ? 0 : u,
          l = e.mass,
          c = void 0 === l ? 1 : l;
        lh(a <= fh(wp), "Spring duration must be 10 seconds or less");
        var f = 1 - i;
        (f = Tf(kp, xp, f)),
          (a = Tf(Sp, wp, dh(a))),
          f < 1
            ? ((t = function (e) {
                var t = e * f,
                  n = t * a,
                  r = t - s,
                  o = Tp(e, f),
                  i = Math.exp(-n);
                return bp - (r / o) * i;
              }),
              (n = function (e) {
                var n = e * f * a,
                  r = n * s + s,
                  o = Math.pow(f, 2) * Math.pow(e, 2) * a,
                  i = Math.exp(-n),
                  u = Tp(Math.pow(e, 2), f);
                return ((-t(e) + bp > 0 ? -1 : 1) * ((r - o) * i)) / u;
              }))
            : ((t = function (e) {
                return Math.exp(-e * a) * ((e - s) * a + 1) - bp;
              }),
              (n = function (e) {
                return Math.exp(-e * a) * (a * a * (s - e));
              }));
        var d = (function (e, t, n) {
          for (var r = n, a = 1; a < Ep; a++) r -= e(r) / t(r);
          return r;
        })(t, n, 5 / a);
        if (((a = fh(a)), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: a };
        var h = Math.pow(d, 2) * c;
        return { stiffness: h, damping: 2 * f * Math.sqrt(c * h), duration: a };
      }
      var Ep = 12;
      function Tp(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      var Cp = ["keyframes", "restDelta", "restSpeed"],
        Pp = ["duration", "bounce"],
        Ap = ["stiffness", "damping", "mass"];
      function Rp(e, t) {
        return t.some(function (t) {
          return void 0 !== e[t];
        });
      }
      function Lp(e) {
        var t,
          n = e.keyframes,
          r = e.restDelta,
          a = e.restSpeed,
          o = i(e, Cp),
          u = n[0],
          s = n[n.length - 1],
          l = { done: !1, value: u },
          c = (function (e) {
            var t = w(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              e
            );
            if (!Rp(e, Ap) && Rp(e, Pp)) {
              var n = _p(e);
              (t = w(
                w(w({}, t), n),
                {},
                { velocity: 0, mass: 1 }
              )).isResolvedFromDuration = !0;
            }
            return t;
          })(o),
          f = c.stiffness,
          d = c.damping,
          h = c.mass,
          p = c.velocity,
          v = c.duration,
          m = c.isResolvedFromDuration,
          y = p ? -dh(p) : 0,
          g = d / (2 * Math.sqrt(f * h)),
          b = s - u,
          S = dh(Math.sqrt(f / h)),
          k = Math.abs(b) < 5;
        if ((a || (a = k ? 0.01 : 2), r || (r = k ? 0.005 : 0.5), g < 1)) {
          var x = Tp(S, g);
          t = function (e) {
            var t = Math.exp(-g * S * e);
            return (
              s -
              t *
                (((y + g * S * b) / x) * Math.sin(x * e) + b * Math.cos(x * e))
            );
          };
        } else if (1 === g)
          t = function (e) {
            return s - Math.exp(-S * e) * (b + (y + S * b) * e);
          };
        else {
          var _ = S * Math.sqrt(g * g - 1);
          t = function (e) {
            var t = Math.exp(-g * S * e),
              n = Math.min(_ * e, 300);
            return (
              s -
              (t * ((y + g * S * b) * Math.sinh(n) + _ * b * Math.cosh(n))) / _
            );
          };
        }
        return {
          calculatedDuration: (m && v) || null,
          next: function (e) {
            var n = t(e);
            if (m) l.done = e >= v;
            else {
              var o = y;
              0 !== e && (o = g < 1 ? gp(t, e, n) : 0);
              var i = Math.abs(o) <= a,
                u = Math.abs(s - n) <= r;
              l.done = i && u;
            }
            return (l.value = l.done ? s : n), l;
          },
        };
      }
      function Np(e) {
        var t = e.keyframes,
          n = e.velocity,
          r = void 0 === n ? 0 : n,
          a = e.power,
          o = void 0 === a ? 0.8 : a,
          i = e.timeConstant,
          u = void 0 === i ? 325 : i,
          s = e.bounceDamping,
          l = void 0 === s ? 10 : s,
          c = e.bounceStiffness,
          f = void 0 === c ? 500 : c,
          d = e.modifyTarget,
          h = e.min,
          p = e.max,
          v = e.restDelta,
          m = void 0 === v ? 0.5 : v,
          y = e.restSpeed,
          g = t[0],
          b = { done: !1, value: g },
          S = function (e) {
            return void 0 === h
              ? p
              : void 0 === p || Math.abs(h - e) < Math.abs(p - e)
              ? h
              : p;
          },
          w = o * r,
          k = g + w,
          x = void 0 === d ? k : d(k);
        x !== k && (w = x - g);
        var _,
          E,
          T = function (e) {
            return -w * Math.exp(-e / u);
          },
          C = function (e) {
            return x + T(e);
          },
          P = function (e) {
            var t = T(e),
              n = C(e);
            (b.done = Math.abs(t) <= m), (b.value = b.done ? x : n);
          },
          A = function (e) {
            (function (e) {
              return (void 0 !== h && e < h) || (void 0 !== p && e > p);
            })(b.value) &&
              ((_ = e),
              (E = Lp({
                keyframes: [b.value, S(b.value)],
                velocity: gp(C, e, b.value),
                damping: l,
                stiffness: f,
                restDelta: m,
                restSpeed: y,
              })));
          };
        return (
          A(0),
          {
            calculatedDuration: null,
            next: function (e) {
              var t = !1;
              return (
                E || void 0 !== _ || ((t = !0), P(e), A(e)),
                void 0 !== _ && e > _ ? E.next(e - _) : (!t && P(e), b)
              );
            },
          }
        );
      }
      var Op = function (e) {
          var t = function (t) {
            var n = t.timestamp;
            return e(n);
          };
          return {
            start: function () {
              return Td.update(t, !0);
            },
            stop: function () {
              return Cd(t);
            },
            now: function () {
              return Pd.isProcessing ? Pd.timestamp : performance.now();
            },
          };
        },
        Dp = 2e4;
      function Vp(e) {
        for (var t = 0, n = e.next(t); !n.done && t < Dp; )
          (t += 50), (n = e.next(t));
        return t >= Dp ? 1 / 0 : t;
      }
      var Mp = [
          "autoplay",
          "delay",
          "driver",
          "keyframes",
          "type",
          "repeat",
          "repeatDelay",
          "repeatType",
          "onPlay",
          "onStop",
          "onComplete",
          "onUpdate",
        ],
        Fp = { decay: Np, inertia: Np, tween: vp, keyframes: vp, spring: Lp };
      function Ip(e) {
        var t,
          n,
          r,
          a = e.autoplay,
          u = void 0 === a || a,
          s = e.delay,
          l = void 0 === s ? 0 : s,
          c = e.driver,
          f = void 0 === c ? Op : c,
          d = e.keyframes,
          h = e.type,
          p = void 0 === h ? "keyframes" : h,
          v = e.repeat,
          m = void 0 === v ? 0 : v,
          y = e.repeatDelay,
          g = void 0 === y ? 0 : y,
          b = e.repeatType,
          S = void 0 === b ? "loop" : b,
          k = e.onPlay,
          x = e.onStop,
          _ = e.onComplete,
          E = e.onUpdate,
          T = i(e, Mp),
          C = 1,
          P = !1,
          A = function () {
            n = new Promise(function (e) {
              t = e;
            });
          };
        A();
        var R,
          L = Fp[p] || vp;
        L !== vp &&
          "number" !== typeof d[0] &&
          ((R = hp([0, 100], d, { clamp: !1 })), (d = [0, 100]));
        var N,
          O = L(w(w({}, T), {}, { keyframes: d }));
        "mirror" === S &&
          (N = L(
            w(
              w({}, T),
              {},
              { keyframes: o(d).reverse(), velocity: -(T.velocity || 0) }
            )
          ));
        var D = "idle",
          V = null,
          M = null,
          F = null;
        null === O.calculatedDuration && m && (O.calculatedDuration = Vp(O));
        var I = O.calculatedDuration,
          j = 1 / 0,
          B = 1 / 0;
        null !== I && (B = (j = I + g) * (m + 1) - g);
        var z = 0,
          U = function (e) {
            if (null !== M) {
              C > 0 && (M = Math.min(M, e)),
                C < 0 && (M = Math.min(e - B / C, M));
              var t =
                  (z = null !== V ? V : Math.round(e - M) * C) -
                  l * (C >= 0 ? 1 : -1),
                n = C >= 0 ? t < 0 : t > B;
              (z = Math.max(t, 0)), "finished" === D && null === V && (z = B);
              var r = z,
                a = O;
              if (m) {
                var o = z / j,
                  i = Math.floor(o),
                  u = o % 1;
                !u && o >= 1 && (u = 1),
                  1 === u && i--,
                  (i = Math.min(i, m + 1));
                var s = Boolean(i % 2);
                s &&
                  ("reverse" === S
                    ? ((u = 1 - u), g && (u -= g / j))
                    : "mirror" === S && (a = N));
                var c = Tf(0, 1, u);
                z > B && (c = "reverse" === S && s ? 1 : 0), (r = c * j);
              }
              var f = n ? { done: !1, value: d[0] } : a.next(r);
              R && (f.value = R(f.value));
              var h = f.done;
              n || null === I || (h = C >= 0 ? z >= B : z <= 0);
              var p =
                null === V && ("finished" === D || ("running" === D && h));
              return E && E(f.value), p && $(), f;
            }
          },
          W = function () {
            r && r.stop(), (r = void 0);
          },
          H = function () {
            (D = "idle"), W(), t(), A(), (M = F = null);
          },
          $ = function () {
            (D = "finished"), _ && _(), W(), t();
          },
          K = function () {
            if (!P) {
              r || (r = f(U));
              var e = r.now();
              k && k(),
                null !== V ? (M = e - V) : (M && "finished" !== D) || (M = e),
                "finished" === D && A(),
                (F = M),
                (V = null),
                (D = "running"),
                r.start();
            }
          };
        u && K();
        var G = {
          then: function (e, t) {
            return n.then(e, t);
          },
          get time() {
            return dh(z);
          },
          set time(e) {
            (e = fh(e)),
              (z = e),
              null === V && r && 0 !== C ? (M = r.now() - e / C) : (V = e);
          },
          get duration() {
            var e =
              null === O.calculatedDuration ? Vp(O) : O.calculatedDuration;
            return dh(e);
          },
          get speed() {
            return C;
          },
          set speed(e) {
            e !== C && r && ((C = e), (G.time = dh(z)));
          },
          get state() {
            return D;
          },
          play: K,
          pause: function () {
            (D = "paused"), (V = z);
          },
          stop: function () {
            (P = !0), "idle" !== D && ((D = "idle"), x && x(), H());
          },
          cancel: function () {
            null !== F && U(F), H();
          },
          complete: function () {
            D = "finished";
          },
          sample: function (e) {
            return (M = 0), U(e);
          },
        };
        return G;
      }
      var jp = ["onUpdate", "onComplete"],
        Bp = (function (e) {
          var t;
          return function () {
            return void 0 === t && (t = e()), t;
          };
        })(function () {
          return Object.hasOwnProperty.call(Element.prototype, "animate");
        }),
        zp = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]);
      function Up(e, t, n) {
        n.onUpdate;
        var r = n.onComplete,
          a = i(n, jp);
        if (
          !(
            Bp() &&
            zp.has(t) &&
            !a.repeatDelay &&
            "mirror" !== a.repeatType &&
            0 !== a.damping &&
            "inertia" !== a.type
          )
        )
          return !1;
        var o,
          u,
          s = !1,
          l = function () {
            u = new Promise(function (e) {
              o = e;
            });
          };
        l();
        var c = a.keyframes,
          f = a.duration,
          d = void 0 === f ? 300 : f,
          h = a.ease,
          p = a.times;
        if (
          (function (e, t) {
            return (
              "spring" === t.type || "backgroundColor" === e || !vh(t.ease)
            );
          })(t, a)
        ) {
          for (
            var v = Ip(w(w({}, a), {}, { repeat: 0, delay: 0 })),
              m = { done: !1, value: c[0] },
              y = [],
              g = 0;
            !m.done && g < 2e4;

          )
            (m = v.sample(g)), y.push(m.value), (g += 10);
          (p = void 0), (c = y), (d = g - 10), (h = "linear");
        }
        var S = (function (e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            a = r.delay,
            o = void 0 === a ? 0 : a,
            i = r.duration,
            u = r.repeat,
            s = void 0 === u ? 0 : u,
            l = r.repeatType,
            c = void 0 === l ? "loop" : l,
            f = r.ease,
            d = r.times,
            h = b({}, t, n);
          d && (h.offset = d);
          var p = gh(f);
          return (
            Array.isArray(p) && (h.easing = p),
            e.animate(h, {
              delay: o,
              duration: i,
              easing: Array.isArray(p) ? "linear" : p,
              fill: "both",
              iterations: s + 1,
              direction: "reverse" === c ? "alternate" : "normal",
            })
          );
        })(
          e.owner.current,
          t,
          c,
          w(w({}, a), {}, { duration: d, ease: h, times: p })
        );
        a.syncStart &&
          (S.startTime = Pd.isProcessing
            ? Pd.timestamp
            : document.timeline
            ? document.timeline.currentTime
            : performance.now());
        var k = function () {
            return S.cancel();
          },
          x = function () {
            Td.update(k), o(), l();
          };
        return (
          (S.onfinish = function () {
            e.set(
              (function (e, t) {
                var n = t.repeat,
                  r = t.repeatType;
                return e[
                  n && "loop" !== (void 0 === r ? "loop" : r) && n % 2 === 1
                    ? 0
                    : e.length - 1
                ];
              })(c, a)
            ),
              r && r(),
              x();
          }),
          {
            then: function (e, t) {
              return u.then(e, t);
            },
            attachTimeline: function (e) {
              return (S.timeline = e), (S.onfinish = null), kd;
            },
            get time() {
              return dh(S.currentTime || 0);
            },
            set time(e) {
              S.currentTime = fh(e);
            },
            get speed() {
              return S.playbackRate;
            },
            set speed(e) {
              S.playbackRate = e;
            },
            get duration() {
              return dh(d);
            },
            play: function () {
              s || (S.play(), Cd(k));
            },
            pause: function () {
              return S.pause();
            },
            stop: function () {
              if (((s = !0), "idle" !== S.playState)) {
                var t = S.currentTime;
                if (t) {
                  var n = Ip(w(w({}, a), {}, { autoplay: !1 }));
                  e.setWithVelocity(
                    n.sample(t - 10).value,
                    n.sample(t).value,
                    10
                  );
                }
                x();
              }
            },
            complete: function () {
              return S.finish();
            },
            cancel: x,
          }
        );
      }
      var Wp = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        Hp = { type: "keyframes", duration: 0.8 },
        $p = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        Kp = function (e, t) {
          var n = t.keyframes;
          return n.length > 2
            ? Hp
            : yf.has(e)
            ? e.startsWith("scale")
              ? {
                  type: "spring",
                  stiffness: 550,
                  damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
                  restSpeed: 10,
                }
              : Wp
            : $p;
        },
        Gp = function (e, t) {
          return (
            "zIndex" !== e &&
            (!("number" !== typeof t && !Array.isArray(t)) ||
              !(
                "string" !== typeof t ||
                (!ap.test(t) && "0" !== t) ||
                t.startsWith("url(")
              ))
          );
        },
        qp = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function Yp(e) {
        var t = l(e.slice(0, -1).split("("), 2),
          n = t[0],
          r = t[1];
        if ("drop-shadow" === n) return e;
        var a = l(r.match(Lf) || [], 1)[0];
        if (!a) return e;
        var o = r.replace(a, ""),
          i = qp.has(n) ? 1 : 0;
        return a !== r && (i *= 100), n + "(" + i + o + ")";
      }
      var Qp = /([a-z-]*)\(.*?\)/g,
        Xp = w(
          w({}, ap),
          {},
          {
            getAnimatableNone: function (e) {
              var t = e.match(Qp);
              return t ? t.map(Yp).join(" ") : e;
            },
          }
        ),
        Zp = w(
          w({}, Wf),
          {},
          {
            color: Wh,
            backgroundColor: Wh,
            outlineColor: Wh,
            fill: Wh,
            stroke: Wh,
            borderColor: Wh,
            borderTopColor: Wh,
            borderRightColor: Wh,
            borderBottomColor: Wh,
            borderLeftColor: Wh,
            filter: Xp,
            WebkitFilter: Xp,
          }
        ),
        Jp = function (e) {
          return Zp[e];
        };
      function ev(e, t) {
        var n = Jp(e);
        return (
          n !== Xp && (n = ap),
          n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
        );
      }
      var tv = function (e) {
        return /^0[^.\s]+$/.test(e);
      };
      function nv(e) {
        return "number" === typeof e
          ? 0 === e
          : null !== e
          ? "none" === e || "0" === e || tv(e)
          : void 0;
      }
      var rv = [
        "when",
        "delay",
        "delayChildren",
        "staggerChildren",
        "staggerDirection",
        "repeat",
        "repeatType",
        "repeatDelay",
        "from",
        "elapsed",
      ];
      function av(e, t) {
        return e[t] || e.default || e;
      }
      var ov = function (e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return function (a) {
          var u = av(r, e) || {},
            s = u.delay || r.delay || 0,
            l = r.elapsed,
            c = void 0 === l ? 0 : l;
          c -= fh(s);
          var f = (function (e, t, n, r) {
              var a,
                i = Gp(t, n);
              a = Array.isArray(n) ? o(n) : [null, n];
              for (
                var u = void 0 !== r.from ? r.from : e.get(),
                  s = void 0,
                  l = [],
                  c = 0;
                c < a.length;
                c++
              )
                null === a[c] && (a[c] = 0 === c ? u : a[c - 1]),
                  nv(a[c]) && l.push(c),
                  "string" === typeof a[c] &&
                    "none" !== a[c] &&
                    "0" !== a[c] &&
                    (s = a[c]);
              if (i && l.length && s)
                for (var f = 0; f < l.length; f++) a[l[f]] = ev(t, s);
              return a;
            })(t, e, n, u),
            d = f[0],
            h = f[f.length - 1],
            p = Gp(e, d),
            v = Gp(e, h);
          lh(
            p === v,
            "You are trying to animate "
              .concat(e, ' from "')
              .concat(d, '" to "')
              .concat(h, '". ')
              .concat(
                d,
                " is not an animatable value - to enable this animation set "
              )
              .concat(d, " to a value animatable to ")
              .concat(h, " via the `style` property.")
          );
          var m = w(
            w({ keyframes: f, velocity: t.getVelocity(), ease: "easeOut" }, u),
            {},
            {
              delay: -c,
              onUpdate: function (e) {
                t.set(e), u.onUpdate && u.onUpdate(e);
              },
              onComplete: function () {
                a(), u.onComplete && u.onComplete();
              },
            }
          );
          if (
            ((function (e) {
              e.when,
                e.delay,
                e.delayChildren,
                e.staggerChildren,
                e.staggerDirection,
                e.repeat,
                e.repeatType,
                e.repeatDelay,
                e.from,
                e.elapsed;
              var t = i(e, rv);
              return !!Object.keys(t).length;
            })(u) || (m = w(w({}, m), Kp(e, m))),
            m.duration && (m.duration = fh(m.duration)),
            m.repeatDelay && (m.repeatDelay = fh(m.repeatDelay)),
            !p || !v || hh || !1 === u.type)
          )
            return (function (e) {
              var t = e.keyframes,
                n = e.delay,
                r = e.onUpdate,
                a = e.onComplete,
                o = function () {
                  return (
                    r && r(t[t.length - 1]),
                    a && a(),
                    {
                      time: 0,
                      speed: 1,
                      duration: 0,
                      play: kd,
                      pause: kd,
                      stop: kd,
                      then: function (e) {
                        return e(), Promise.resolve();
                      },
                      cancel: kd,
                      complete: kd,
                    }
                  );
                };
              return n
                ? Ip({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: n,
                    onComplete: o,
                  })
                : o();
            })(hh ? w(w({}, m), {}, { delay: 0 }) : m);
          if (
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate
          ) {
            var y = Up(t, e, m);
            if (y) return y;
          }
          return Ip(m);
        };
      };
      function iv(e) {
        return Boolean(bf(e) && e.add);
      }
      var uv = function (e) {
        return /^\-?\d*\.?\d+$/.test(e);
      };
      function sv(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function lv(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var cv = (function () {
          function e() {
            E(this, e), (this.subscriptions = []);
          }
          return (
            C(e, [
              {
                key: "add",
                value: function (e) {
                  var t = this;
                  return (
                    sv(this.subscriptions, e),
                    function () {
                      return lv(t.subscriptions, e);
                    }
                  );
                },
              },
              {
                key: "notify",
                value: function (e, t, n) {
                  var r = this.subscriptions.length;
                  if (r)
                    if (1 === r) this.subscriptions[0](e, t, n);
                    else
                      for (var a = 0; a < r; a++) {
                        var o = this.subscriptions[a];
                        o && o(e, t, n);
                      }
                },
              },
              {
                key: "getSize",
                value: function () {
                  return this.subscriptions.length;
                },
              },
              {
                key: "clear",
                value: function () {
                  this.subscriptions.length = 0;
                },
              },
            ]),
            e
          );
        })(),
        fv = { current: void 0 },
        dv = (function () {
          function e(t) {
            var n,
              r = this,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            E(this, e),
              (this.version = "10.16.4"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.canTrackVelocity = !1),
              (this.events = {}),
              (this.updateAndNotify = function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                (r.prev = r.current), (r.current = e);
                var n = Pd.delta,
                  a = Pd.timestamp;
                r.lastUpdated !== a &&
                  ((r.timeDelta = n),
                  (r.lastUpdated = a),
                  Td.postRender(r.scheduleVelocityCheck)),
                  r.prev !== r.current &&
                    r.events.change &&
                    r.events.change.notify(r.current),
                  r.events.velocityChange &&
                    r.events.velocityChange.notify(r.getVelocity()),
                  t &&
                    r.events.renderRequest &&
                    r.events.renderRequest.notify(r.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return Td.postRender(r.velocityCheck);
              }),
              (this.velocityCheck = function (e) {
                e.timestamp !== r.lastUpdated &&
                  ((r.prev = r.current),
                  r.events.velocityChange &&
                    r.events.velocityChange.notify(r.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((n = this.current), !isNaN(parseFloat(n)))),
              (this.owner = a.owner);
          }
          return (
            C(e, [
              {
                key: "onChange",
                value: function (e) {
                  return this.on("change", e);
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  var n = this;
                  this.events[e] || (this.events[e] = new cv());
                  var r = this.events[e].add(t);
                  return "change" === e
                    ? function () {
                        r(),
                          Td.read(function () {
                            n.events.change.getSize() || n.stop();
                          });
                      }
                    : r;
                },
              },
              {
                key: "clearListeners",
                value: function () {
                  for (var e in this.events) this.events[e].clear();
                },
              },
              {
                key: "attach",
                value: function (e, t) {
                  (this.passiveEffect = e), (this.stopPassiveEffect = t);
                },
              },
              {
                key: "set",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  t && this.passiveEffect
                    ? this.passiveEffect(e, this.updateAndNotify)
                    : this.updateAndNotify(e, t);
                },
              },
              {
                key: "setWithVelocity",
                value: function (e, t, n) {
                  this.set(t), (this.prev = e), (this.timeDelta = n);
                },
              },
              {
                key: "jump",
                value: function (e) {
                  this.updateAndNotify(e),
                    (this.prev = e),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect();
                },
              },
              {
                key: "get",
                value: function () {
                  return fv.current && fv.current.push(this), this.current;
                },
              },
              {
                key: "getPrevious",
                value: function () {
                  return this.prev;
                },
              },
              {
                key: "getVelocity",
                value: function () {
                  return this.canTrackVelocity
                    ? mp(
                        parseFloat(this.current) - parseFloat(this.prev),
                        this.timeDelta
                      )
                    : 0;
                },
              },
              {
                key: "start",
                value: function (e) {
                  var t = this;
                  return (
                    this.stop(),
                    new Promise(function (n) {
                      (t.hasAnimated = !0),
                        (t.animation = e(n)),
                        t.events.animationStart &&
                          t.events.animationStart.notify();
                    }).then(function () {
                      t.events.animationComplete &&
                        t.events.animationComplete.notify(),
                        t.clearAnimation();
                    })
                  );
                },
              },
              {
                key: "stop",
                value: function () {
                  this.animation &&
                    (this.animation.stop(),
                    this.events.animationCancel &&
                      this.events.animationCancel.notify()),
                    this.clearAnimation();
                },
              },
              {
                key: "isAnimating",
                value: function () {
                  return !!this.animation;
                },
              },
              {
                key: "clearAnimation",
                value: function () {
                  delete this.animation;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.clearListeners(),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect();
                },
              },
            ]),
            e
          );
        })();
      function hv(e, t) {
        return new dv(e, t);
      }
      var pv = function (e) {
          return function (t) {
            return t.test(e);
          };
        },
        vv = [
          Cf,
          If,
          Ff,
          Mf,
          Bf,
          jf,
          {
            test: function (e) {
              return "auto" === e;
            },
            parse: function (e) {
              return e;
            },
          },
        ],
        mv = function (e) {
          return vv.find(pv(e));
        },
        yv = [].concat(o(vv), [Wh, ap]),
        gv = function (e) {
          return yv.find(pv(e));
        },
        bv = ["transitionEnd", "transition"];
      function Sv(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, hv(n));
      }
      function wv(e, t) {
        var n = uh(e, t),
          r = n ? e.makeTargetAnimatable(n, !1) : {},
          a = r.transitionEnd,
          o = void 0 === a ? {} : a,
          u = (r.transition, i(r, bv));
        for (var s in (u = w(w({}, u), o))) {
          Sv(e, s, yd(u[s]));
        }
      }
      function kv(e, t) {
        if (t) return (t[e] || t.default || t).from;
      }
      var xv = ["transition", "transitionEnd"];
      function _v(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.delay,
          a = void 0 === r ? 0 : r,
          o = n.transitionOverride,
          u = n.type,
          s = e.makeTargetAnimatable(t),
          l = s.transition,
          c = void 0 === l ? e.getDefaultTransition() : l,
          f = s.transitionEnd,
          d = i(s, xv),
          h = e.getValue("willChange");
        o && (c = o);
        var p = [],
          v = u && e.animationState && e.animationState.getState()[u],
          m = function (t) {
            var n = e.getValue(t),
              r = d[t];
            if (
              !n ||
              void 0 === r ||
              (v &&
                (function (e, t) {
                  var n = e.protectedKeys,
                    r = e.needsAnimating,
                    a = n.hasOwnProperty(t) && !0 !== r[t];
                  return (r[t] = !1), a;
                })(v, t))
            )
              return 1;
            var o = w({ delay: a, elapsed: 0 }, c);
            if (window.HandoffAppearAnimations && !n.hasAnimated) {
              var i = e.getProps()[sh];
              i &&
                ((o.elapsed = window.HandoffAppearAnimations(i, t, n, Td)),
                (o.syncStart = !0));
            }
            n.start(
              ov(t, n, r, e.shouldReduceMotion && yf.has(t) ? { type: !1 } : o)
            );
            var u = n.animation;
            iv(h) &&
              (h.add(t),
              u.then(function () {
                return h.remove(t);
              })),
              p.push(u);
          };
        for (var y in d) m(y);
        return (
          f &&
            Promise.all(p).then(function () {
              f && wv(e, f);
            }),
          p
        );
      }
      function Ev(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = uh(e, t, n.custom),
          a = (r || {}).transition,
          o = void 0 === a ? e.getDefaultTransition() || {} : a;
        n.transitionOverride && (o = n.transitionOverride);
        var i = r
            ? function () {
                return Promise.all(_v(e, r, n));
              }
            : function () {
                return Promise.resolve();
              },
          u =
            e.variantChildren && e.variantChildren.size
              ? function () {
                  var r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    a = o,
                    i = a.delayChildren,
                    u = void 0 === i ? 0 : i,
                    s = a.staggerChildren,
                    l = a.staggerDirection;
                  return (function (e, t) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 0,
                      a =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 1,
                      o = arguments.length > 5 ? arguments[5] : void 0,
                      i = [],
                      u = (e.variantChildren.size - 1) * r,
                      s =
                        1 === a
                          ? function () {
                              return (
                                (arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0) * r
                              );
                            }
                          : function () {
                              return (
                                u -
                                (arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0) *
                                  r
                              );
                            };
                    return (
                      Array.from(e.variantChildren)
                        .sort(Tv)
                        .forEach(function (e, r) {
                          e.notify("AnimationStart", t),
                            i.push(
                              Ev(
                                e,
                                t,
                                w(w({}, o), {}, { delay: n + s(r) })
                              ).then(function () {
                                return e.notify("AnimationComplete", t);
                              })
                            );
                        }),
                      Promise.all(i)
                    );
                  })(e, t, u + r, s, l, n);
                }
              : function () {
                  return Promise.resolve();
                },
          s = o.when;
        if (s) {
          var c = l("beforeChildren" === s ? [i, u] : [u, i], 2),
            f = c[0],
            d = c[1];
          return f().then(function () {
            return d();
          });
        }
        return Promise.all([i(), u(n.delay)]);
      }
      function Tv(e, t) {
        return e.sortNodePosition(t);
      }
      var Cv = ["transition", "transitionEnd"],
        Pv = o(Qc).reverse(),
        Av = Qc.length;
      function Rv(e) {
        return function (t) {
          return Promise.all(
            t.map(function (t) {
              var n = t.animation,
                r = t.options;
              return (function (e, t) {
                var n,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                if ((e.notify("AnimationStart", t), Array.isArray(t))) {
                  var a = t.map(function (t) {
                    return Ev(e, t, r);
                  });
                  n = Promise.all(a);
                } else if ("string" === typeof t) n = Ev(e, t, r);
                else {
                  var o = "function" === typeof t ? uh(e, t, r.custom) : t;
                  n = Promise.all(_v(e, o, r));
                }
                return n.then(function () {
                  return e.notify("AnimationComplete", t);
                });
              })(e, n, r);
            })
          );
        };
      }
      function Lv(e) {
        var t = Rv(e),
          n = {
            animate: Nv(!0),
            whileInView: Nv(),
            whileHover: Nv(),
            whileTap: Nv(),
            whileDrag: Nv(),
            whileFocus: Nv(),
            exit: Nv(),
          },
          r = !0,
          a = function (t, n) {
            var r = uh(e, n);
            if (r) {
              r.transition;
              var a = r.transitionEnd,
                o = i(r, Cv);
              t = w(w(w({}, t), o), a);
            }
            return t;
          };
        function u(i, u) {
          for (
            var s = e.getProps(),
              l = e.getVariantContext(!0) || {},
              c = [],
              f = new Set(),
              d = {},
              h = 1 / 0,
              p = function () {
                var t = Pv[v],
                  p = n[t],
                  m = void 0 !== s[t] ? s[t] : l[t],
                  y = qc(m),
                  g = t === u ? p.isActive : null;
                !1 === g && (h = v);
                var b = m === l[t] && m !== s[t] && y;
                if (
                  (b && r && e.manuallyAnimateOnMount && (b = !1),
                  (p.protectedKeys = w({}, d)),
                  (!p.isActive && null === g) ||
                    (!m && !p.prevProp) ||
                    Yc(m) ||
                    "boolean" === typeof m)
                )
                  return 1;
                var S = (function (e, t) {
                    if ("string" === typeof t) return t !== e;
                    if (Array.isArray(t)) return !ih(t, e);
                    return !1;
                  })(p.prevProp, m),
                  k = S || (t === u && p.isActive && !b && y) || (v > h && y),
                  x = Array.isArray(m) ? m : [m],
                  _ = x.reduce(a, {});
                !1 === g && (_ = {});
                var E = p.prevResolvedValues,
                  T = void 0 === E ? {} : E,
                  C = w(w({}, T), _),
                  P = function (e) {
                    (k = !0), f.delete(e), (p.needsAnimating[e] = !0);
                  };
                for (var A in C) {
                  var R = _[A],
                    L = T[A];
                  d.hasOwnProperty(A) ||
                    (R !== L
                      ? vd(R) && vd(L)
                        ? !ih(R, L) || S
                          ? P(A)
                          : (p.protectedKeys[A] = !0)
                        : void 0 !== R
                        ? P(A)
                        : f.add(A)
                      : void 0 !== R && f.has(A)
                      ? P(A)
                      : (p.protectedKeys[A] = !0));
                }
                (p.prevProp = m),
                  (p.prevResolvedValues = _),
                  p.isActive && (d = w(w({}, d), _)),
                  r && e.blockInitialAnimation && (k = !1),
                  k &&
                    !b &&
                    c.push.apply(
                      c,
                      o(
                        x.map(function (e) {
                          return { animation: e, options: w({ type: t }, i) };
                        })
                      )
                    );
              },
              v = 0;
            v < Av;
            v++
          )
            p();
          if (f.size) {
            var m = {};
            f.forEach(function (t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (m[t] = n);
            }),
              c.push({ animation: m });
          }
          var y = Boolean(c.length);
          return (
            r && !1 === s.initial && !e.manuallyAnimateOnMount && (y = !1),
            (r = !1),
            y ? t(c) : Promise.resolve()
          );
        }
        return {
          animateChanges: u,
          setActive: function (t, r, a) {
            var o;
            if (n[t].isActive === r) return Promise.resolve();
            null === (o = e.variantChildren) ||
              void 0 === o ||
              o.forEach(function (e) {
                var n;
                return null === (n = e.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(t, r);
              }),
              (n[t].isActive = r);
            var i = u(a, t);
            for (var s in n) n[s].protectedKeys = {};
            return i;
          },
          setAnimateFunction: function (n) {
            t = n(e);
          },
          getState: function () {
            return n;
          },
        };
      }
      function Nv() {
        return {
          isActive:
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      var Ov = (function (e) {
          x(n, e);
          var t = _(n);
          function n(e) {
            var r;
            return (
              E(this, n),
              (r = t.call(this, e)),
              e.animationState || (e.animationState = Lv(e)),
              r
            );
          }
          return (
            C(n, [
              {
                key: "updateAnimationControlsSubscription",
                value: function () {
                  var e = this.node.getProps().animate;
                  this.unmount(),
                    Yc(e) && (this.unmount = e.subscribe(this.node));
                },
              },
              {
                key: "mount",
                value: function () {
                  this.updateAnimationControlsSubscription();
                },
              },
              {
                key: "update",
                value: function () {
                  this.node.getProps().animate !==
                    (this.node.prevProps || {}).animate &&
                    this.updateAnimationControlsSubscription();
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Hd),
        Dv = 0,
        Vv = (function (e) {
          x(n, e);
          var t = _(n);
          function n() {
            var e;
            return E(this, n), ((e = t.apply(this, arguments)).id = Dv++), e;
          }
          return (
            C(n, [
              {
                key: "update",
                value: function () {
                  var e = this;
                  if (this.node.presenceContext) {
                    var t = this.node.presenceContext,
                      n = t.isPresent,
                      r = t.onExitComplete,
                      a = t.custom,
                      o = (this.node.prevPresenceContext || {}).isPresent;
                    if (this.node.animationState && n !== o) {
                      var i = this.node.animationState.setActive("exit", !n, {
                        custom:
                          null !== a && void 0 !== a
                            ? a
                            : this.node.getProps().custom,
                      });
                      r &&
                        !n &&
                        i.then(function () {
                          return r(e.id);
                        });
                    }
                  }
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = (this.node.presenceContext || {}).register;
                  e && (this.unmount = e(this.id));
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Hd),
        Mv = { animation: { Feature: Ov }, exit: { Feature: Vv } },
        Fv = function (e, t) {
          return Math.abs(e - t);
        };
      var Iv = (function () {
        function e(t, n) {
          var r = this,
            a = (
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
            ).transformPagePoint;
          if (
            (E(this, e),
            (this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var e = zv(r.lastMoveEventInfo, r.history),
                  t = null !== r.startEvent,
                  n =
                    (function (e, t) {
                      var n = Fv(e.x, t.x),
                        r = Fv(e.y, t.y);
                      return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
                    })(e.offset, { x: 0, y: 0 }) >= 3;
                if (t || n) {
                  var a = e.point,
                    o = Pd.timestamp;
                  r.history.push(w(w({}, a), {}, { timestamp: o }));
                  var i = r.handlers,
                    u = i.onStart,
                    s = i.onMove;
                  t ||
                    (u && u(r.lastMoveEvent, e),
                    (r.startEvent = r.lastMoveEvent)),
                    s && s(r.lastMoveEvent, e);
                }
              }
            }),
            (this.handlePointerMove = function (e, t) {
              (r.lastMoveEvent = e),
                (r.lastMoveEventInfo = jv(t, r.transformPagePoint)),
                Td.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (e, t) {
              if ((r.end(), r.lastMoveEvent && r.lastMoveEventInfo)) {
                var n = r.handlers,
                  a = n.onEnd,
                  o = n.onSessionEnd,
                  i = zv(
                    "pointercancel" === e.type
                      ? r.lastMoveEventInfo
                      : jv(t, r.transformPagePoint),
                    r.history
                  );
                r.startEvent && a && a(e, i), o && o(e, i);
              }
            }),
            Od(t))
          ) {
            (this.handlers = n), (this.transformPagePoint = a);
            var o = jv(Dd(t), this.transformPagePoint),
              i = o.point,
              u = Pd.timestamp;
            this.history = [w(w({}, i), {}, { timestamp: u })];
            var s = n.onSessionStart;
            s && s(t, zv(o, this.history)),
              (this.removeListeners = Id(
                Md(window, "pointermove", this.handlePointerMove),
                Md(window, "pointerup", this.handlePointerUp),
                Md(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          C(e, [
            {
              key: "updateHandlers",
              value: function (e) {
                this.handlers = e;
              },
            },
            {
              key: "end",
              value: function () {
                this.removeListeners && this.removeListeners(),
                  Cd(this.updatePoint);
              },
            },
          ]),
          e
        );
      })();
      function jv(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function Bv(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function zv(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: Bv(n, Wv(t)),
          offset: Bv(n, Uv(t)),
          velocity: Hv(t, 0.1),
        };
      }
      function Uv(e) {
        return e[0];
      }
      function Wv(e) {
        return e[e.length - 1];
      }
      function Hv(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        for (
          var n = e.length - 1, r = null, a = Wv(e);
          n >= 0 && ((r = e[n]), !(a.timestamp - r.timestamp > fh(t)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var o = dh(a.timestamp - r.timestamp);
        if (0 === o) return { x: 0, y: 0 };
        var i = { x: (a.x - r.x) / o, y: (a.y - r.y) / o };
        return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
      }
      function $v(e) {
        return e.max - e.min;
      }
      function Kv(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.01;
        return Math.abs(e - t) <= n;
      }
      function Gv(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        (e.origin = r),
          (e.originPoint = Hh(t.min, t.max, e.origin)),
          (e.scale = $v(n) / $v(t)),
          (Kv(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = Hh(n.min, n.max, e.origin) - e.originPoint),
          (Kv(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function qv(e, t, n, r) {
        Gv(e.x, t.x, n.x, r ? r.originX : void 0),
          Gv(e.y, t.y, n.y, r ? r.originY : void 0);
      }
      function Yv(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + $v(t));
      }
      function Qv(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + $v(t));
      }
      function Xv(e, t, n) {
        Qv(e.x, t.x, n.x), Qv(e.y, t.y, n.y);
      }
      function Zv(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function Jv(e, t) {
        var n = t.min - e.min,
          r = t.max - e.max;
        if (t.max - t.min < e.max - e.min) {
          var a = [r, n];
          (n = a[0]), (r = a[1]);
        }
        return { min: n, max: r };
      }
      var em = 0.35;
      function tm(e, t, n) {
        return { min: nm(e, t), max: nm(e, n) };
      }
      function nm(e, t) {
        return "number" === typeof e ? e : e[t] || 0;
      }
      var rm = function () {
          return {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
        },
        am = function () {
          return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        };
      function om(e) {
        return [e("x"), e("y")];
      }
      function im(e) {
        var t = e.top;
        return {
          x: { min: e.left, max: e.right },
          y: { min: t, max: e.bottom },
        };
      }
      function um(e) {
        return void 0 === e || 1 === e;
      }
      function sm(e) {
        var t = e.scale,
          n = e.scaleX,
          r = e.scaleY;
        return !um(t) || !um(n) || !um(r);
      }
      function lm(e) {
        return sm(e) || cm(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }
      function cm(e) {
        return fm(e.x) || fm(e.y);
      }
      function fm(e) {
        return e && "0%" !== e;
      }
      function dm(e, t, n) {
        return n + t * (e - n);
      }
      function hm(e, t, n, r, a) {
        return void 0 !== a && (e = dm(e, a, r)), dm(e, n, r) + t;
      }
      function pm(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0;
        (e.min = hm(e.min, t, n, r, a)), (e.max = hm(e.max, t, n, r, a));
      }
      function vm(e, t) {
        var n = t.x,
          r = t.y;
        pm(e.x, n.translate, n.scale, n.originPoint),
          pm(e.y, r.translate, r.scale, r.originPoint);
      }
      function mm(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function ym(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function gm(e, t, n) {
        var r = l(n, 3),
          a = r[0],
          o = r[1],
          i = r[2],
          u = void 0 !== t[i] ? t[i] : 0.5,
          s = Hh(e.min, e.max, u);
        pm(e, t[a], t[o], s, t.scale);
      }
      var bm = ["x", "scaleX", "originX"],
        Sm = ["y", "scaleY", "originY"];
      function wm(e, t) {
        gm(e.x, t, bm), gm(e.y, t, Sm);
      }
      function km(e, t) {
        return im(
          (function (e, t) {
            if (!t) return e;
            var n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      var xm = new WeakMap(),
        _m = (function () {
          function e(t) {
            E(this, e),
              (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = am()),
              (this.visualElement = t);
          }
          return (
            C(e, [
              {
                key: "start",
                value: function (e) {
                  var t = this,
                    n = (
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {}
                    ).snapToCursor,
                    r = void 0 !== n && n,
                    a = this.visualElement.presenceContext;
                  if (!a || !1 !== a.isPresent) {
                    this.panSession = new Iv(
                      e,
                      {
                        onSessionStart: function (e) {
                          t.stopAnimation(),
                            r && t.snapToCursor(Dd(e, "page").point);
                        },
                        onStart: function (e, n) {
                          var r = t.getProps(),
                            a = r.drag,
                            o = r.dragPropagation,
                            i = r.onDragStart;
                          if (
                            !a ||
                            o ||
                            (t.openGlobalLock && t.openGlobalLock(),
                            (t.openGlobalLock = Ud(a)),
                            t.openGlobalLock)
                          ) {
                            (t.isDragging = !0),
                              (t.currentDirection = null),
                              t.resolveConstraints(),
                              t.visualElement.projection &&
                                ((t.visualElement.projection.isAnimationBlocked =
                                  !0),
                                (t.visualElement.projection.target = void 0)),
                              om(function (e) {
                                var n = t.getAxisMotionValue(e).get() || 0;
                                if (Ff.test(n)) {
                                  var r = t.visualElement.projection;
                                  if (r && r.layout) {
                                    var a = r.layout.layoutBox[e];
                                    if (a) n = $v(a) * (parseFloat(n) / 100);
                                  }
                                }
                                t.originPoint[e] = n;
                              }),
                              i &&
                                Td.update(
                                  function () {
                                    return i(e, n);
                                  },
                                  !1,
                                  !0
                                );
                            var u = t.visualElement.animationState;
                            u && u.setActive("whileDrag", !0);
                          }
                        },
                        onMove: function (e, n) {
                          var r = t.getProps(),
                            a = r.dragPropagation,
                            o = r.dragDirectionLock,
                            i = r.onDirectionLock,
                            u = r.onDrag;
                          if (a || t.openGlobalLock) {
                            var s = n.offset;
                            if (o && null === t.currentDirection)
                              return (
                                (t.currentDirection = (function (e) {
                                  var t =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : 10,
                                    n = null;
                                  Math.abs(e.y) > t
                                    ? (n = "y")
                                    : Math.abs(e.x) > t && (n = "x");
                                  return n;
                                })(s)),
                                void (
                                  null !== t.currentDirection &&
                                  i &&
                                  i(t.currentDirection)
                                )
                              );
                            t.updateAxis("x", n.point, s),
                              t.updateAxis("y", n.point, s),
                              t.visualElement.render(),
                              u && u(e, n);
                          }
                        },
                        onSessionEnd: function (e, n) {
                          return t.stop(e, n);
                        },
                      },
                      {
                        transformPagePoint:
                          this.visualElement.getTransformPagePoint(),
                      }
                    );
                  }
                },
              },
              {
                key: "stop",
                value: function (e, t) {
                  var n = this.isDragging;
                  if ((this.cancel(), n)) {
                    var r = t.velocity;
                    this.startAnimation(r);
                    var a = this.getProps().onDragEnd;
                    a &&
                      Td.update(function () {
                        return a(e, t);
                      });
                  }
                },
              },
              {
                key: "cancel",
                value: function () {
                  this.isDragging = !1;
                  var e = this.visualElement,
                    t = e.projection,
                    n = e.animationState;
                  t && (t.isAnimationBlocked = !1),
                    this.panSession && this.panSession.end(),
                    (this.panSession = void 0),
                    !this.getProps().dragPropagation &&
                      this.openGlobalLock &&
                      (this.openGlobalLock(), (this.openGlobalLock = null)),
                    n && n.setActive("whileDrag", !1);
                },
              },
              {
                key: "updateAxis",
                value: function (e, t, n) {
                  var r = this.getProps().drag;
                  if (n && Em(e, r, this.currentDirection)) {
                    var a = this.getAxisMotionValue(e),
                      o = this.originPoint[e] + n[e];
                    this.constraints &&
                      this.constraints[e] &&
                      (o = (function (e, t, n) {
                        var r = t.min,
                          a = t.max;
                        return (
                          void 0 !== r && e < r
                            ? (e = n ? Hh(r, e, n.min) : Math.max(e, r))
                            : void 0 !== a &&
                              e > a &&
                              (e = n ? Hh(a, e, n.max) : Math.min(e, a)),
                          e
                        );
                      })(o, this.constraints[e], this.elastic[e])),
                      a.set(o);
                  }
                },
              },
              {
                key: "resolveConstraints",
                value: function () {
                  var e = this,
                    t = this.getProps(),
                    n = t.dragConstraints,
                    r = t.dragElastic,
                    a = (this.visualElement.projection || {}).layout,
                    o = this.constraints;
                  n && Gc(n)
                    ? this.constraints ||
                      (this.constraints = this.resolveRefConstraints())
                    : (this.constraints =
                        !(!n || !a) &&
                        (function (e, t) {
                          var n = t.top,
                            r = t.left,
                            a = t.bottom,
                            o = t.right;
                          return { x: Zv(e.x, r, o), y: Zv(e.y, n, a) };
                        })(a.layoutBox, n)),
                    (this.elastic = (function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : em;
                      return (
                        !1 === e ? (e = 0) : !0 === e && (e = em),
                        { x: tm(e, "left", "right"), y: tm(e, "top", "bottom") }
                      );
                    })(r)),
                    o !== this.constraints &&
                      a &&
                      this.constraints &&
                      !this.hasMutatedConstraints &&
                      om(function (t) {
                        e.getAxisMotionValue(t) &&
                          (e.constraints[t] = (function (e, t) {
                            var n = {};
                            return (
                              void 0 !== t.min && (n.min = t.min - e.min),
                              void 0 !== t.max && (n.max = t.max - e.min),
                              n
                            );
                          })(a.layoutBox[t], e.constraints[t]));
                      });
                },
              },
              {
                key: "resolveRefConstraints",
                value: function () {
                  var e = this.getProps(),
                    t = e.dragConstraints,
                    n = e.onMeasureDragConstraints;
                  if (!t || !Gc(t)) return !1;
                  var r = t.current;
                  ch(
                    null !== r,
                    "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
                  );
                  var a = this.visualElement.projection;
                  if (!a || !a.layout) return !1;
                  var o = (function (e, t, n) {
                      var r = km(e, n),
                        a = t.scroll;
                      return a && (ym(r.x, a.offset.x), ym(r.y, a.offset.y)), r;
                    })(r, a.root, this.visualElement.getTransformPagePoint()),
                    i = (function (e, t) {
                      return { x: Jv(e.x, t.x), y: Jv(e.y, t.y) };
                    })(a.layout.layoutBox, o);
                  if (n) {
                    var u = n(
                      (function (e) {
                        var t = e.x,
                          n = e.y;
                        return {
                          top: n.min,
                          right: t.max,
                          bottom: n.max,
                          left: t.min,
                        };
                      })(i)
                    );
                    (this.hasMutatedConstraints = !!u), u && (i = im(u));
                  }
                  return i;
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t = this,
                    n = this.getProps(),
                    r = n.drag,
                    a = n.dragMomentum,
                    o = n.dragElastic,
                    i = n.dragTransition,
                    u = n.dragSnapToOrigin,
                    s = n.onDragTransitionEnd,
                    l = this.constraints || {},
                    c = om(function (n) {
                      if (Em(n, r, t.currentDirection)) {
                        var s = (l && l[n]) || {};
                        u && (s = { min: 0, max: 0 });
                        var c = o ? 200 : 1e6,
                          f = o ? 40 : 1e7,
                          d = w(
                            w(
                              {
                                type: "inertia",
                                velocity: a ? e[n] : 0,
                                bounceStiffness: c,
                                bounceDamping: f,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10,
                              },
                              i
                            ),
                            s
                          );
                        return t.startAxisValueAnimation(n, d);
                      }
                    });
                  return Promise.all(c).then(s);
                },
              },
              {
                key: "startAxisValueAnimation",
                value: function (e, t) {
                  var n = this.getAxisMotionValue(e);
                  return n.start(ov(e, n, 0, t));
                },
              },
              {
                key: "stopAnimation",
                value: function () {
                  var e = this;
                  om(function (t) {
                    return e.getAxisMotionValue(t).stop();
                  });
                },
              },
              {
                key: "getAxisMotionValue",
                value: function (e) {
                  var t = "_drag" + e.toUpperCase(),
                    n = this.visualElement.getProps(),
                    r = n[t];
                  return (
                    r ||
                    this.visualElement.getValue(
                      e,
                      (n.initial ? n.initial[e] : void 0) || 0
                    )
                  );
                },
              },
              {
                key: "snapToCursor",
                value: function (e) {
                  var t = this;
                  om(function (n) {
                    if (Em(n, t.getProps().drag, t.currentDirection)) {
                      var r = t.visualElement.projection,
                        a = t.getAxisMotionValue(n);
                      if (r && r.layout) {
                        var o = r.layout.layoutBox[n],
                          i = o.min,
                          u = o.max;
                        a.set(e[n] - Hh(i, u, 0.5));
                      }
                    }
                  });
                },
              },
              {
                key: "scalePositionWithinConstraints",
                value: function () {
                  var e = this;
                  if (this.visualElement.current) {
                    var t = this.getProps(),
                      n = t.drag,
                      r = t.dragConstraints,
                      a = this.visualElement.projection;
                    if (Gc(r) && a && this.constraints) {
                      this.stopAnimation();
                      var o = { x: 0, y: 0 };
                      om(function (t) {
                        var n = e.getAxisMotionValue(t);
                        if (n) {
                          var r = n.get();
                          o[t] = (function (e, t) {
                            var n = 0.5,
                              r = $v(e),
                              a = $v(t);
                            return (
                              a > r
                                ? (n = cp(t.min, t.max - r, e.min))
                                : r > a && (n = cp(e.min, e.max - a, t.min)),
                              Tf(0, 1, n)
                            );
                          })({ min: r, max: r }, e.constraints[t]);
                        }
                      });
                      var i = this.visualElement.getProps().transformTemplate;
                      (this.visualElement.current.style.transform = i
                        ? i({}, "")
                        : "none"),
                        a.root && a.root.updateScroll(),
                        a.updateLayout(),
                        this.resolveConstraints(),
                        om(function (t) {
                          if (Em(t, n, null)) {
                            var r = e.getAxisMotionValue(t),
                              a = e.constraints[t],
                              i = a.min,
                              u = a.max;
                            r.set(Hh(i, u, o[t]));
                          }
                        });
                    }
                  }
                },
              },
              {
                key: "addListeners",
                value: function () {
                  var e = this;
                  if (this.visualElement.current) {
                    xm.set(this.visualElement, this);
                    var t = Md(
                        this.visualElement.current,
                        "pointerdown",
                        function (t) {
                          var n = e.getProps(),
                            r = n.drag,
                            a = n.dragListener;
                          r && (void 0 === a || a) && e.start(t);
                        }
                      ),
                      n = function () {
                        Gc(e.getProps().dragConstraints) &&
                          (e.constraints = e.resolveRefConstraints());
                      },
                      r = this.visualElement.projection,
                      a = r.addEventListener("measure", n);
                    r &&
                      !r.layout &&
                      (r.root && r.root.updateScroll(), r.updateLayout()),
                      n();
                    var o = Nd(window, "resize", function () {
                        return e.scalePositionWithinConstraints();
                      }),
                      i = r.addEventListener("didUpdate", function (t) {
                        var n = t.delta,
                          r = t.hasLayoutChanged;
                        e.isDragging &&
                          r &&
                          (om(function (t) {
                            var r = e.getAxisMotionValue(t);
                            r &&
                              ((e.originPoint[t] += n[t].translate),
                              r.set(r.get() + n[t].translate));
                          }),
                          e.visualElement.render());
                      });
                    return function () {
                      o(), t(), a(), i && i();
                    };
                  }
                },
              },
              {
                key: "getProps",
                value: function () {
                  var e = this.visualElement.getProps(),
                    t = e.drag,
                    n = void 0 !== t && t,
                    r = e.dragDirectionLock,
                    a = void 0 !== r && r,
                    o = e.dragPropagation,
                    i = void 0 !== o && o,
                    u = e.dragConstraints,
                    s = void 0 !== u && u,
                    l = e.dragElastic,
                    c = void 0 === l ? em : l,
                    f = e.dragMomentum,
                    d = void 0 === f || f;
                  return w(
                    w({}, e),
                    {},
                    {
                      drag: n,
                      dragDirectionLock: a,
                      dragPropagation: i,
                      dragConstraints: s,
                      dragElastic: c,
                      dragMomentum: d,
                    }
                  );
                },
              },
            ]),
            e
          );
        })();
      function Em(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      var Tm = (function (e) {
          x(n, e);
          var t = _(n);
          function n(e) {
            var r;
            return (
              E(this, n),
              ((r = t.call(this, e)).removeGroupControls = kd),
              (r.removeListeners = kd),
              (r.controls = new _m(e)),
              r
            );
          }
          return (
            C(n, [
              {
                key: "mount",
                value: function () {
                  var e = this.node.getProps().dragControls;
                  e && (this.removeGroupControls = e.subscribe(this.controls)),
                    (this.removeListeners = this.controls.addListeners() || kd);
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removeGroupControls(), this.removeListeners();
                },
              },
            ]),
            n
          );
        })(Hd),
        Cm = function (e) {
          return function (t, n) {
            e &&
              Td.update(function () {
                return e(t, n);
              });
          };
        },
        Pm = (function (e) {
          x(n, e);
          var t = _(n);
          function n() {
            var e;
            return (
              E(this, n),
              ((e = t.apply(this, arguments)).removePointerDownListener = kd),
              e
            );
          }
          return (
            C(n, [
              {
                key: "onPointerDown",
                value: function (e) {
                  this.session = new Iv(e, this.createPanHandlers(), {
                    transformPagePoint: this.node.getTransformPagePoint(),
                  });
                },
              },
              {
                key: "createPanHandlers",
                value: function () {
                  var e = this,
                    t = this.node.getProps(),
                    n = t.onPanSessionStart,
                    r = t.onPanStart,
                    a = t.onPan,
                    o = t.onPanEnd;
                  return {
                    onSessionStart: Cm(n),
                    onStart: Cm(r),
                    onMove: a,
                    onEnd: function (t, n) {
                      delete e.session,
                        o &&
                          Td.update(function () {
                            return o(t, n);
                          });
                    },
                  };
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = this;
                  this.removePointerDownListener = Md(
                    this.node.current,
                    "pointerdown",
                    function (t) {
                      return e.onPointerDown(t);
                    }
                  );
                },
              },
              {
                key: "update",
                value: function () {
                  this.session &&
                    this.session.updateHandlers(this.createPanHandlers());
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removePointerDownListener(),
                    this.session && this.session.end();
                },
              },
            ]),
            n
          );
        })(Hd);
      var Am = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function Rm(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      var Lm = {
          correct: function (e, t) {
            if (!t.target) return e;
            if ("string" === typeof e) {
              if (!If.test(e)) return e;
              e = parseFloat(e);
            }
            var n = Rm(e, t.target.x),
              r = Rm(e, t.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        Nm = {
          correct: function (e, t) {
            var n = t.treeScale,
              r = t.projectionDelta,
              a = e,
              o = ap.parse(e);
            if (o.length > 5) return a;
            var i = ap.createTransformer(e),
              u = "number" !== typeof o[0] ? 1 : 0,
              s = r.x.scale * n.x,
              l = r.y.scale * n.y;
            (o[0 + u] /= s), (o[1 + u] /= l);
            var c = Hh(s, l, 0.5);
            return (
              "number" === typeof o[2 + u] && (o[2 + u] /= c),
              "number" === typeof o[3 + u] && (o[3 + u] /= c),
              i(o)
            );
          },
        },
        Om = (function (e) {
          x(n, e);
          var t = _(n);
          function n() {
            return E(this, n), t.apply(this, arguments);
          }
          return (
            C(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    r = n.visualElement,
                    a = n.layoutGroup,
                    o = n.switchLayoutGroup,
                    i = n.layoutId,
                    u = r.projection;
                  (e = Vm),
                    Object.assign(vf, e),
                    u &&
                      (a.group && a.group.add(u),
                      o && o.register && i && o.register(u),
                      u.root.didUpdate(),
                      u.addEventListener("animationComplete", function () {
                        t.safeToRemove();
                      }),
                      u.setOptions(
                        w(
                          w({}, u.options),
                          {},
                          {
                            onExitComplete: function () {
                              return t.safeToRemove();
                            },
                          }
                        )
                      )),
                    (Am.hasEverUpdated = !0);
                },
              },
              {
                key: "getSnapshotBeforeUpdate",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.layoutDependency,
                    a = n.visualElement,
                    o = n.drag,
                    i = n.isPresent,
                    u = a.projection;
                  return u
                    ? ((u.isPresent = i),
                      o || e.layoutDependency !== r || void 0 === r
                        ? u.willUpdate()
                        : this.safeToRemove(),
                      e.isPresent !== i &&
                        (i
                          ? u.promote()
                          : u.relegate() ||
                            Td.postRender(function () {
                              var e = u.getStack();
                              (e && e.members.length) || t.safeToRemove();
                            })),
                      null)
                    : null;
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var e = this,
                    t = this.props.visualElement.projection;
                  t &&
                    (t.root.didUpdate(),
                    queueMicrotask(function () {
                      !t.currentAnimation && t.isLead() && e.safeToRemove();
                    }));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var e = this.props,
                    t = e.visualElement,
                    n = e.layoutGroup,
                    r = e.switchLayoutGroup,
                    a = t.projection;
                  a &&
                    (a.scheduleCheckAfterUnmount(),
                    n && n.group && n.group.remove(a),
                    r && r.deregister && r.deregister(a));
                },
              },
              {
                key: "safeToRemove",
                value: function () {
                  var e = this.props.safeToRemove;
                  e && e();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(P.Component);
      function Dm(e) {
        var t = (function () {
            var e = (0, P.useContext)(Wc);
            if (null === e) return [!0, null];
            var t = e.isPresent,
              n = e.onExitComplete,
              r = e.register,
              a = (0, P.useId)();
            return (
              (0, P.useEffect)(function () {
                return r(a);
              }, []),
              !t && n
                ? [
                    !1,
                    function () {
                      return n && n(a);
                    },
                  ]
                : [!0]
            );
          })(),
          n = l(t, 2),
          r = n[0],
          a = n[1],
          o = (0, P.useContext)(uf);
        return P.createElement(
          Om,
          w(
            w({}, e),
            {},
            {
              layoutGroup: o,
              switchLayoutGroup: (0, P.useContext)(sf),
              isPresent: r,
              safeToRemove: a,
            }
          )
        );
      }
      var Vm = {
          borderRadius: w(
            w({}, Lm),
            {},
            {
              applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
              ],
            }
          ),
          borderTopLeftRadius: Lm,
          borderTopRightRadius: Lm,
          borderBottomLeftRadius: Lm,
          borderBottomRightRadius: Lm,
          boxShadow: Nm,
        },
        Mm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Fm = Mm.length,
        Im = function (e) {
          return "string" === typeof e ? parseFloat(e) : e;
        },
        jm = function (e) {
          return "number" === typeof e || If.test(e);
        };
      function Bm(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      var zm = Wm(0, 0.5, Rh),
        Um = Wm(0.5, 0.95, kd);
      function Wm(e, t, n) {
        return function (r) {
          return r < e ? 0 : r > t ? 1 : n(cp(e, t, r));
        };
      }
      function Hm(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function $m(e, t) {
        Hm(e.x, t.x), Hm(e.y, t.y);
      }
      function Km(e, t, n, r, a) {
        return (
          (e = dm((e -= t), 1 / n, r)), void 0 !== a && (e = dm(e, 1 / a, r)), e
        );
      }
      function Gm(e, t, n, r, a) {
        var o = l(n, 3),
          i = o[0],
          u = o[1],
          s = o[2];
        !(function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            a = arguments.length > 4 ? arguments[4] : void 0,
            o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : e,
            i =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : e;
          if (
            (Ff.test(t) &&
              ((t = parseFloat(t)), (t = Hh(i.min, i.max, t / 100) - i.min)),
            "number" === typeof t)
          ) {
            var u = Hh(o.min, o.max, r);
            e === o && (u -= t),
              (e.min = Km(e.min, t, n, u, a)),
              (e.max = Km(e.max, t, n, u, a));
          }
        })(e, t[i], t[u], t[s], t.scale, r, a);
      }
      var qm = ["x", "scaleX", "originX"],
        Ym = ["y", "scaleY", "originY"];
      function Qm(e, t, n, r) {
        Gm(e.x, t, qm, n ? n.x : void 0, r ? r.x : void 0),
          Gm(e.y, t, Ym, n ? n.y : void 0, r ? r.y : void 0);
      }
      function Xm(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function Zm(e) {
        return Xm(e.x) && Xm(e.y);
      }
      function Jm(e, t) {
        return (
          Math.round(e.x.min) === Math.round(t.x.min) &&
          Math.round(e.x.max) === Math.round(t.x.max) &&
          Math.round(e.y.min) === Math.round(t.y.min) &&
          Math.round(e.y.max) === Math.round(t.y.max)
        );
      }
      function ey(e) {
        return $v(e.x) / $v(e.y);
      }
      var ty = (function () {
        function e() {
          E(this, e), (this.members = []);
        }
        return (
          C(e, [
            {
              key: "add",
              value: function (e) {
                sv(this.members, e), e.scheduleRender();
              },
            },
            {
              key: "remove",
              value: function (e) {
                if (
                  (lv(this.members, e),
                  e === this.prevLead && (this.prevLead = void 0),
                  e === this.lead)
                ) {
                  var t = this.members[this.members.length - 1];
                  t && this.promote(t);
                }
              },
            },
            {
              key: "relegate",
              value: function (e) {
                var t,
                  n = this.members.findIndex(function (t) {
                    return e === t;
                  });
                if (0 === n) return !1;
                for (var r = n; r >= 0; r--) {
                  var a = this.members[r];
                  if (!1 !== a.isPresent) {
                    t = a;
                    break;
                  }
                }
                return !!t && (this.promote(t), !0);
              },
            },
            {
              key: "promote",
              value: function (e, t) {
                var n = this.lead;
                e !== n &&
                  ((this.prevLead = n),
                  (this.lead = e),
                  e.show(),
                  n &&
                    (n.instance && n.scheduleRender(),
                    e.scheduleRender(),
                    (e.resumeFrom = n),
                    t && (e.resumeFrom.preserveOpacity = !0),
                    n.snapshot &&
                      ((e.snapshot = n.snapshot),
                      (e.snapshot.latestValues =
                        n.animationValues || n.latestValues)),
                    e.root && e.root.isUpdating && (e.isLayoutDirty = !0),
                    !1 === e.options.crossfade && n.hide()));
              },
            },
            {
              key: "exitAnimationComplete",
              value: function () {
                this.members.forEach(function (e) {
                  var t = e.options,
                    n = e.resumingFrom;
                  t.onExitComplete && t.onExitComplete(),
                    n && n.options.onExitComplete && n.options.onExitComplete();
                });
              },
            },
            {
              key: "scheduleRender",
              value: function () {
                this.members.forEach(function (e) {
                  e.instance && e.scheduleRender(!1);
                });
              },
            },
            {
              key: "removeLeadSnapshot",
              value: function () {
                this.lead &&
                  this.lead.snapshot &&
                  (this.lead.snapshot = void 0);
              },
            },
          ]),
          e
        );
      })();
      function ny(e, t, n) {
        var r = "",
          a = e.x.translate / t.x,
          o = e.y.translate / t.y;
        if (
          ((a || o) &&
            (r = "translate3d(".concat(a, "px, ").concat(o, "px, 0) ")),
          (1 === t.x && 1 === t.y) ||
            (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")),
          n)
        ) {
          var i = n.rotate,
            u = n.rotateX,
            s = n.rotateY;
          i && (r += "rotate(".concat(i, "deg) ")),
            u && (r += "rotateX(".concat(u, "deg) ")),
            s && (r += "rotateY(".concat(s, "deg) "));
        }
        var l = e.x.scale * t.x,
          c = e.y.scale * t.y;
        return (
          (1 === l && 1 === c) ||
            (r += "scale(".concat(l, ", ").concat(c, ")")),
          r || "none"
        );
      }
      var ry = function (e, t) {
          return e.depth - t.depth;
        },
        ay = (function () {
          function e() {
            E(this, e), (this.children = []), (this.isDirty = !1);
          }
          return (
            C(e, [
              {
                key: "add",
                value: function (e) {
                  sv(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  lv(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  this.isDirty && this.children.sort(ry),
                    (this.isDirty = !1),
                    this.children.forEach(e);
                },
              },
            ]),
            e
          );
        })();
      var oy = ["", "X", "Y", "Z"],
        iy = 0,
        uy = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function sy(e) {
        var t = e.attachResizeListener,
          n = e.defaultParent,
          r = e.measureScroll,
          a = e.checkIsScrollRoot,
          i = e.resetTransform;
        return (function () {
          function e() {
            var t = this,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null === n || void 0 === n
                  ? void 0
                  : n();
            E(this, e),
              (this.id = iy++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = function () {
                t.isUpdating && ((t.isUpdating = !1), t.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                var e;
                (uy.totalNodes =
                  uy.resolvedTargetDeltas =
                  uy.recalculatedProjection =
                    0),
                  t.nodes.forEach(fy),
                  t.nodes.forEach(gy),
                  t.nodes.forEach(by),
                  t.nodes.forEach(dy),
                  (e = uy),
                  window.MotionDebug && window.MotionDebug.record(e);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = r),
              (this.root = a ? a.root || a : this),
              (this.path = a ? [].concat(o(a.path), [a]) : []),
              (this.parent = a),
              (this.depth = a ? a.depth + 1 : 0);
            for (var i = 0; i < this.path.length; i++)
              this.path[i].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ay());
          }
          return (
            C(e, [
              {
                key: "addEventListener",
                value: function (e, t) {
                  return (
                    this.eventHandlers.has(e) ||
                      this.eventHandlers.set(e, new cv()),
                    this.eventHandlers.get(e).add(t)
                  );
                },
              },
              {
                key: "notifyListeners",
                value: function (e) {
                  for (
                    var t = this.eventHandlers.get(e),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    r[a - 1] = arguments[a];
                  t && t.notify.apply(t, r);
                },
              },
              {
                key: "hasListeners",
                value: function (e) {
                  return this.eventHandlers.has(e);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var n = this,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.root.hasTreeAnimated;
                  if (!this.instance) {
                    var a;
                    (this.isSVG =
                      (a = e) instanceof SVGElement && "svg" !== a.tagName),
                      (this.instance = e);
                    var o = this.options,
                      i = o.layoutId,
                      u = o.layout,
                      s = o.visualElement;
                    if (
                      (s && !s.current && s.mount(e),
                      this.root.nodes.add(this),
                      this.parent && this.parent.children.add(this),
                      r && (u || i) && (this.isLayoutDirty = !0),
                      t)
                    ) {
                      var l,
                        c = function () {
                          return (n.root.updateBlockedByResize = !1);
                        };
                      t(e, function () {
                        (n.root.updateBlockedByResize = !0),
                          l && l(),
                          (l = (function (e, t) {
                            var n = performance.now(),
                              r = function r(a) {
                                var o = a.timestamp - n;
                                o >= t && (Cd(r), e(o - t));
                              };
                            return (
                              Td.read(r, !0),
                              function () {
                                return Cd(r);
                              }
                            );
                          })(c, 250)),
                          Am.hasAnimatedSinceResize &&
                            ((Am.hasAnimatedSinceResize = !1),
                            n.nodes.forEach(yy));
                      });
                    }
                    i && this.root.registerSharedNode(i, this),
                      !1 !== this.options.animate &&
                        s &&
                        (i || u) &&
                        this.addEventListener("didUpdate", function (e) {
                          var t = e.delta,
                            r = e.hasLayoutChanged,
                            a = e.hasRelativeTargetChanged,
                            o = e.layout;
                          if (n.isTreeAnimationBlocked())
                            return (
                              (n.target = void 0),
                              void (n.relativeTarget = void 0)
                            );
                          var i =
                              n.options.transition ||
                              s.getDefaultTransition() ||
                              Ey,
                            u = s.getProps(),
                            l = u.onLayoutAnimationStart,
                            c = u.onLayoutAnimationComplete,
                            f = !n.targetLayout || !Jm(n.targetLayout, o) || a,
                            d = !r && a;
                          if (
                            n.options.layoutRoot ||
                            (n.resumeFrom && n.resumeFrom.instance) ||
                            d ||
                            (r && (f || !n.currentAnimation))
                          ) {
                            n.resumeFrom &&
                              ((n.resumingFrom = n.resumeFrom),
                              (n.resumingFrom.resumingFrom = void 0)),
                              n.setAnimationOrigin(t, d);
                            var h = w(
                              w({}, av(i, "layout")),
                              {},
                              { onPlay: l, onComplete: c }
                            );
                            (s.shouldReduceMotion || n.options.layoutRoot) &&
                              ((h.delay = 0), (h.type = !1)),
                              n.startAnimation(h);
                          } else r || yy(n), n.isLead() && n.options.onExitComplete && n.options.onExitComplete();
                          n.targetLayout = o;
                        });
                  }
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                  var e = this.getStack();
                  e && e.remove(this),
                    this.parent && this.parent.children.delete(this),
                    (this.instance = void 0),
                    Cd(this.updateProjection);
                },
              },
              {
                key: "blockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !0;
                },
              },
              {
                key: "unblockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !1;
                },
              },
              {
                key: "isUpdateBlocked",
                value: function () {
                  return (
                    this.updateManuallyBlocked || this.updateBlockedByResize
                  );
                },
              },
              {
                key: "isTreeAnimationBlocked",
                value: function () {
                  return (
                    this.isAnimationBlocked ||
                    (this.parent && this.parent.isTreeAnimationBlocked()) ||
                    !1
                  );
                },
              },
              {
                key: "startUpdate",
                value: function () {
                  this.isUpdateBlocked() ||
                    ((this.isUpdating = !0),
                    this.nodes && this.nodes.forEach(Sy),
                    this.animationId++);
                },
              },
              {
                key: "getTransformTemplate",
                value: function () {
                  var e = this.options.visualElement;
                  return e && e.getProps().transformTemplate;
                },
              },
              {
                key: "willUpdate",
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  if (
                    ((this.root.hasTreeAnimated = !0),
                    this.root.isUpdateBlocked())
                  )
                    this.options.onExitComplete &&
                      this.options.onExitComplete();
                  else if (
                    (!this.root.isUpdating && this.root.startUpdate(),
                    !this.isLayoutDirty)
                  ) {
                    this.isLayoutDirty = !0;
                    for (var t = 0; t < this.path.length; t++) {
                      var n = this.path[t];
                      (n.shouldResetTransform = !0),
                        n.updateScroll("snapshot"),
                        n.options.layoutRoot && n.willUpdate(!1);
                    }
                    var r = this.options,
                      a = r.layoutId,
                      o = r.layout;
                    if (void 0 !== a || o) {
                      var i = this.getTransformTemplate();
                      (this.prevTransformTemplateValue = i
                        ? i(this.latestValues, "")
                        : void 0),
                        this.updateSnapshot(),
                        e && this.notifyListeners("willUpdate");
                    }
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  if (((this.updateScheduled = !1), this.isUpdateBlocked()))
                    return (
                      this.unblockUpdate(),
                      this.clearAllSnapshots(),
                      void this.nodes.forEach(py)
                    );
                  this.isUpdating || this.nodes.forEach(vy),
                    (this.isUpdating = !1),
                    this.nodes.forEach(my),
                    this.nodes.forEach(ly),
                    this.nodes.forEach(cy),
                    this.clearAllSnapshots();
                  var e = performance.now();
                  (Pd.delta = Tf(0, 1e3 / 60, e - Pd.timestamp)),
                    (Pd.timestamp = e),
                    (Pd.isProcessing = !0),
                    Ad.update.process(Pd),
                    Ad.preRender.process(Pd),
                    Ad.render.process(Pd),
                    (Pd.isProcessing = !1);
                },
              },
              {
                key: "didUpdate",
                value: function () {
                  var e = this;
                  this.updateScheduled ||
                    ((this.updateScheduled = !0),
                    queueMicrotask(function () {
                      return e.update();
                    }));
                },
              },
              {
                key: "clearAllSnapshots",
                value: function () {
                  this.nodes.forEach(hy), this.sharedNodes.forEach(wy);
                },
              },
              {
                key: "scheduleUpdateProjection",
                value: function () {
                  Td.preRender(this.updateProjection, !1, !0);
                },
              },
              {
                key: "scheduleCheckAfterUnmount",
                value: function () {
                  var e = this;
                  Td.postRender(function () {
                    e.isLayoutDirty
                      ? e.root.didUpdate()
                      : e.root.checkUpdateFailed();
                  });
                },
              },
              {
                key: "updateSnapshot",
                value: function () {
                  !this.snapshot &&
                    this.instance &&
                    (this.snapshot = this.measure());
                },
              },
              {
                key: "updateLayout",
                value: function () {
                  if (
                    this.instance &&
                    (this.updateScroll(),
                    (this.options.alwaysMeasureLayout && this.isLead()) ||
                      this.isLayoutDirty)
                  ) {
                    if (this.resumeFrom && !this.resumeFrom.instance)
                      for (var e = 0; e < this.path.length; e++) {
                        this.path[e].updateScroll();
                      }
                    var t = this.layout;
                    (this.layout = this.measure(!1)),
                      (this.layoutCorrected = am()),
                      (this.isLayoutDirty = !1),
                      (this.projectionDelta = void 0),
                      this.notifyListeners("measure", this.layout.layoutBox);
                    var n = this.options.visualElement;
                    n &&
                      n.notify(
                        "LayoutMeasure",
                        this.layout.layoutBox,
                        t ? t.layoutBox : void 0
                      );
                  }
                },
              },
              {
                key: "updateScroll",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "measure",
                    t = Boolean(this.options.layoutScroll && this.instance);
                  this.scroll &&
                    this.scroll.animationId === this.root.animationId &&
                    this.scroll.phase === e &&
                    (t = !1),
                    t &&
                      (this.scroll = {
                        animationId: this.root.animationId,
                        phase: e,
                        isRoot: a(this.instance),
                        offset: r(this.instance),
                      });
                },
              },
              {
                key: "resetTransform",
                value: function () {
                  if (i) {
                    var e = this.isLayoutDirty || this.shouldResetTransform,
                      t = this.projectionDelta && !Zm(this.projectionDelta),
                      n = this.getTransformTemplate(),
                      r = n ? n(this.latestValues, "") : void 0,
                      a = r !== this.prevTransformTemplateValue;
                    e &&
                      (t || lm(this.latestValues) || a) &&
                      (i(this.instance, r),
                      (this.shouldResetTransform = !1),
                      this.scheduleRender());
                  }
                },
              },
              {
                key: "measure",
                value: function () {
                  var e,
                    t =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    n = this.measurePageBox(),
                    r = this.removeElementScroll(n);
                  return (
                    t && (r = this.removeTransform(r)),
                    Py((e = r).x),
                    Py(e.y),
                    {
                      animationId: this.root.animationId,
                      measuredBox: n,
                      layoutBox: r,
                      latestValues: {},
                      source: this.id,
                    }
                  );
                },
              },
              {
                key: "measurePageBox",
                value: function () {
                  var e = this.options.visualElement;
                  if (!e) return am();
                  var t = e.measureViewportBox(),
                    n = this.root.scroll;
                  return n && (ym(t.x, n.offset.x), ym(t.y, n.offset.y)), t;
                },
              },
              {
                key: "removeElementScroll",
                value: function (e) {
                  var t = am();
                  $m(t, e);
                  for (var n = 0; n < this.path.length; n++) {
                    var r = this.path[n],
                      a = r.scroll,
                      o = r.options;
                    if (r !== this.root && a && o.layoutScroll) {
                      if (a.isRoot) {
                        $m(t, e);
                        var i = this.root.scroll;
                        i && (ym(t.x, -i.offset.x), ym(t.y, -i.offset.y));
                      }
                      ym(t.x, a.offset.x), ym(t.y, a.offset.y);
                    }
                  }
                  return t;
                },
              },
              {
                key: "applyTransform",
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = am();
                  $m(n, e);
                  for (var r = 0; r < this.path.length; r++) {
                    var a = this.path[r];
                    !t &&
                      a.options.layoutScroll &&
                      a.scroll &&
                      a !== a.root &&
                      wm(n, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
                      lm(a.latestValues) && wm(n, a.latestValues);
                  }
                  return lm(this.latestValues) && wm(n, this.latestValues), n;
                },
              },
              {
                key: "removeTransform",
                value: function (e) {
                  var t = am();
                  $m(t, e);
                  for (var n = 0; n < this.path.length; n++) {
                    var r = this.path[n];
                    if (r.instance && lm(r.latestValues)) {
                      sm(r.latestValues) && r.updateSnapshot();
                      var a = am();
                      $m(a, r.measurePageBox()),
                        Qm(
                          t,
                          r.latestValues,
                          r.snapshot ? r.snapshot.layoutBox : void 0,
                          a
                        );
                    }
                  }
                  return lm(this.latestValues) && Qm(t, this.latestValues), t;
                },
              },
              {
                key: "setTargetDelta",
                value: function (e) {
                  (this.targetDelta = e),
                    this.root.scheduleUpdateProjection(),
                    (this.isProjectionDirty = !0);
                },
              },
              {
                key: "setOptions",
                value: function (e) {
                  this.options = w(
                    w(w({}, this.options), e),
                    {},
                    { crossfade: void 0 === e.crossfade || e.crossfade }
                  );
                },
              },
              {
                key: "clearMeasurements",
                value: function () {
                  (this.scroll = void 0),
                    (this.layout = void 0),
                    (this.snapshot = void 0),
                    (this.prevTransformTemplateValue = void 0),
                    (this.targetDelta = void 0),
                    (this.target = void 0),
                    (this.isLayoutDirty = !1);
                },
              },
              {
                key: "forceRelativeParentToResolveTarget",
                value: function () {
                  this.relativeParent &&
                    this.relativeParent.resolvedRelativeTargetAt !==
                      Pd.timestamp &&
                    this.relativeParent.resolveTargetDelta(!0);
                },
              },
              {
                key: "resolveTargetDelta",
                value: function () {
                  var e,
                    t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0],
                    n = this.getLead();
                  this.isProjectionDirty ||
                    (this.isProjectionDirty = n.isProjectionDirty),
                    this.isTransformDirty ||
                      (this.isTransformDirty = n.isTransformDirty),
                    this.isSharedProjectionDirty ||
                      (this.isSharedProjectionDirty =
                        n.isSharedProjectionDirty);
                  var r = Boolean(this.resumingFrom) || this !== n;
                  if (
                    !!(
                      t ||
                      (r && this.isSharedProjectionDirty) ||
                      this.isProjectionDirty ||
                      (null === (e = this.parent) || void 0 === e
                        ? void 0
                        : e.isProjectionDirty) ||
                      this.attemptToResolveRelativeTarget
                    )
                  ) {
                    var a = this.options,
                      o = a.layout,
                      i = a.layoutId;
                    if (this.layout && (o || i)) {
                      if (
                        ((this.resolvedRelativeTargetAt = Pd.timestamp),
                        !this.targetDelta && !this.relativeTarget)
                      ) {
                        var u = this.getClosestProjectingParent();
                        u && u.layout && 1 !== this.animationProgress
                          ? ((this.relativeParent = u),
                            this.forceRelativeParentToResolveTarget(),
                            (this.relativeTarget = am()),
                            (this.relativeTargetOrigin = am()),
                            Xv(
                              this.relativeTargetOrigin,
                              this.layout.layoutBox,
                              u.layout.layoutBox
                            ),
                            $m(this.relativeTarget, this.relativeTargetOrigin))
                          : (this.relativeParent = this.relativeTarget =
                              void 0);
                      }
                      if (this.relativeTarget || this.targetDelta) {
                        var s, l, c;
                        if (
                          (this.target ||
                            ((this.target = am()),
                            (this.targetWithTransforms = am())),
                          this.relativeTarget &&
                          this.relativeTargetOrigin &&
                          this.relativeParent &&
                          this.relativeParent.target
                            ? (this.forceRelativeParentToResolveTarget(),
                              (s = this.target),
                              (l = this.relativeTarget),
                              (c = this.relativeParent.target),
                              Yv(s.x, l.x, c.x),
                              Yv(s.y, l.y, c.y))
                            : this.targetDelta
                            ? (Boolean(this.resumingFrom)
                                ? (this.target = this.applyTransform(
                                    this.layout.layoutBox
                                  ))
                                : $m(this.target, this.layout.layoutBox),
                              vm(this.target, this.targetDelta))
                            : $m(this.target, this.layout.layoutBox),
                          this.attemptToResolveRelativeTarget)
                        ) {
                          this.attemptToResolveRelativeTarget = !1;
                          var f = this.getClosestProjectingParent();
                          f &&
                          Boolean(f.resumingFrom) ===
                            Boolean(this.resumingFrom) &&
                          !f.options.layoutScroll &&
                          f.target &&
                          1 !== this.animationProgress
                            ? ((this.relativeParent = f),
                              this.forceRelativeParentToResolveTarget(),
                              (this.relativeTarget = am()),
                              (this.relativeTargetOrigin = am()),
                              Xv(
                                this.relativeTargetOrigin,
                                this.target,
                                f.target
                              ),
                              $m(
                                this.relativeTarget,
                                this.relativeTargetOrigin
                              ))
                            : (this.relativeParent = this.relativeTarget =
                                void 0);
                        }
                        uy.resolvedTargetDeltas++;
                      }
                    }
                  }
                },
              },
              {
                key: "getClosestProjectingParent",
                value: function () {
                  if (
                    this.parent &&
                    !sm(this.parent.latestValues) &&
                    !cm(this.parent.latestValues)
                  )
                    return this.parent.isProjecting()
                      ? this.parent
                      : this.parent.getClosestProjectingParent();
                },
              },
              {
                key: "isProjecting",
                value: function () {
                  return Boolean(
                    (this.relativeTarget ||
                      this.targetDelta ||
                      this.options.layoutRoot) &&
                      this.layout
                  );
                },
              },
              {
                key: "calcProjection",
                value: function () {
                  var e,
                    t = this.getLead(),
                    n = Boolean(this.resumingFrom) || this !== t,
                    r = !0;
                  if (
                    ((this.isProjectionDirty ||
                      (null === (e = this.parent) || void 0 === e
                        ? void 0
                        : e.isProjectionDirty)) &&
                      (r = !1),
                    n &&
                      (this.isSharedProjectionDirty || this.isTransformDirty) &&
                      (r = !1),
                    this.resolvedRelativeTargetAt === Pd.timestamp && (r = !1),
                    !r)
                  ) {
                    var a = this.options,
                      o = a.layout,
                      i = a.layoutId;
                    if (
                      ((this.isTreeAnimating = Boolean(
                        (this.parent && this.parent.isTreeAnimating) ||
                          this.currentAnimation ||
                          this.pendingAnimation
                      )),
                      this.isTreeAnimating ||
                        (this.targetDelta = this.relativeTarget = void 0),
                      this.layout && (o || i))
                    ) {
                      $m(this.layoutCorrected, this.layout.layoutBox);
                      var u = this.treeScale.x,
                        s = this.treeScale.y;
                      !(function (e, t, n) {
                        var r =
                            arguments.length > 3 &&
                            void 0 !== arguments[3] &&
                            arguments[3],
                          a = n.length;
                        if (a) {
                          var o, i;
                          t.x = t.y = 1;
                          for (var u = 0; u < a; u++) {
                            i = (o = n[u]).projectionDelta;
                            var s = o.instance;
                            (s && s.style && "contents" === s.style.display) ||
                              (r &&
                                o.options.layoutScroll &&
                                o.scroll &&
                                o !== o.root &&
                                wm(e, {
                                  x: -o.scroll.offset.x,
                                  y: -o.scroll.offset.y,
                                }),
                              i &&
                                ((t.x *= i.x.scale),
                                (t.y *= i.y.scale),
                                vm(e, i)),
                              r && lm(o.latestValues) && wm(e, o.latestValues));
                          }
                          (t.x = mm(t.x)), (t.y = mm(t.y));
                        }
                      })(this.layoutCorrected, this.treeScale, this.path, n),
                        !t.layout ||
                          t.target ||
                          (1 === this.treeScale.x && 1 === this.treeScale.y) ||
                          (t.target = t.layout.layoutBox);
                      var l = t.target;
                      if (l) {
                        this.projectionDelta ||
                          ((this.projectionDelta = rm()),
                          (this.projectionDeltaWithTransform = rm()));
                        var c = this.projectionTransform;
                        qv(
                          this.projectionDelta,
                          this.layoutCorrected,
                          l,
                          this.latestValues
                        ),
                          (this.projectionTransform = ny(
                            this.projectionDelta,
                            this.treeScale
                          )),
                          (this.projectionTransform === c &&
                            this.treeScale.x === u &&
                            this.treeScale.y === s) ||
                            ((this.hasProjected = !0),
                            this.scheduleRender(),
                            this.notifyListeners("projectionUpdate", l)),
                          uy.recalculatedProjection++;
                      } else
                        this.projectionTransform &&
                          ((this.projectionDelta = rm()),
                          (this.projectionTransform = "none"),
                          this.scheduleRender());
                    }
                  }
                },
              },
              {
                key: "hide",
                value: function () {
                  this.isVisible = !1;
                },
              },
              {
                key: "show",
                value: function () {
                  this.isVisible = !0;
                },
              },
              {
                key: "scheduleRender",
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  if (
                    (this.options.scheduleRender &&
                      this.options.scheduleRender(),
                    e)
                  ) {
                    var t = this.getStack();
                    t && t.scheduleRender();
                  }
                  this.resumingFrom &&
                    !this.resumingFrom.instance &&
                    (this.resumingFrom = void 0);
                },
              },
              {
                key: "setAnimationOrigin",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    r = this.snapshot,
                    a = r ? r.latestValues : {},
                    o = w({}, this.latestValues),
                    i = rm();
                  (this.relativeParent &&
                    this.relativeParent.options.layoutRoot) ||
                    (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    (this.attemptToResolveRelativeTarget = !n);
                  var u,
                    s = am(),
                    l =
                      (r ? r.source : void 0) !==
                      (this.layout ? this.layout.source : void 0),
                    c = this.getStack(),
                    f = !c || c.members.length <= 1,
                    d = Boolean(
                      l &&
                        !f &&
                        !0 === this.options.crossfade &&
                        !this.path.some(_y)
                    );
                  (this.animationProgress = 0),
                    (this.mixTargetDelta = function (n) {
                      var r = n / 1e3;
                      ky(i.x, e.x, r),
                        ky(i.y, e.y, r),
                        t.setTargetDelta(i),
                        t.relativeTarget &&
                          t.relativeTargetOrigin &&
                          t.layout &&
                          t.relativeParent &&
                          t.relativeParent.layout &&
                          (Xv(
                            s,
                            t.layout.layoutBox,
                            t.relativeParent.layout.layoutBox
                          ),
                          (function (e, t, n, r) {
                            xy(e.x, t.x, n.x, r), xy(e.y, t.y, n.y, r);
                          })(t.relativeTarget, t.relativeTargetOrigin, s, r),
                          u &&
                            (function (e, t) {
                              return (
                                e.x.min === t.x.min &&
                                e.x.max === t.x.max &&
                                e.y.min === t.y.min &&
                                e.y.max === t.y.max
                              );
                            })(t.relativeTarget, u) &&
                            (t.isProjectionDirty = !1),
                          u || (u = am()),
                          $m(u, t.relativeTarget)),
                        l &&
                          ((t.animationValues = o),
                          (function (e, t, n, r, a, o) {
                            a
                              ? ((e.opacity = Hh(
                                  0,
                                  void 0 !== n.opacity ? n.opacity : 1,
                                  zm(r)
                                )),
                                (e.opacityExit = Hh(
                                  void 0 !== t.opacity ? t.opacity : 1,
                                  0,
                                  Um(r)
                                )))
                              : o &&
                                (e.opacity = Hh(
                                  void 0 !== t.opacity ? t.opacity : 1,
                                  void 0 !== n.opacity ? n.opacity : 1,
                                  r
                                ));
                            for (var i = 0; i < Fm; i++) {
                              var u = "border".concat(Mm[i], "Radius"),
                                s = Bm(t, u),
                                l = Bm(n, u);
                              (void 0 === s && void 0 === l) ||
                                (s || (s = 0),
                                l || (l = 0),
                                0 === s || 0 === l || jm(s) === jm(l)
                                  ? ((e[u] = Math.max(Hh(Im(s), Im(l), r), 0)),
                                    (Ff.test(l) || Ff.test(s)) && (e[u] += "%"))
                                  : (e[u] = l));
                            }
                            (t.rotate || n.rotate) &&
                              (e.rotate = Hh(t.rotate || 0, n.rotate || 0, r));
                          })(o, a, t.latestValues, r, d, f)),
                        t.root.scheduleUpdateProjection(),
                        t.scheduleRender(),
                        (t.animationProgress = r);
                    }),
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t = this;
                  this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom &&
                      this.resumingFrom.currentAnimation &&
                      this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation &&
                      (Cd(this.pendingAnimation),
                      (this.pendingAnimation = void 0)),
                    (this.pendingAnimation = Td.update(function () {
                      (Am.hasAnimatedSinceResize = !0),
                        (t.currentAnimation = (function (e, t, n) {
                          var r = bf(e) ? e : hv(e);
                          return r.start(ov("", r, t, n)), r.animation;
                        })(
                          0,
                          1e3,
                          w(
                            w({}, e),
                            {},
                            {
                              onUpdate: function (n) {
                                t.mixTargetDelta(n),
                                  e.onUpdate && e.onUpdate(n);
                              },
                              onComplete: function () {
                                e.onComplete && e.onComplete(),
                                  t.completeAnimation();
                              },
                            }
                          )
                        )),
                        t.resumingFrom &&
                          (t.resumingFrom.currentAnimation =
                            t.currentAnimation),
                        (t.pendingAnimation = void 0);
                    }));
                },
              },
              {
                key: "completeAnimation",
                value: function () {
                  this.resumingFrom &&
                    ((this.resumingFrom.currentAnimation = void 0),
                    (this.resumingFrom.preserveOpacity = void 0));
                  var e = this.getStack();
                  e && e.exitAnimationComplete(),
                    (this.resumingFrom =
                      this.currentAnimation =
                      this.animationValues =
                        void 0),
                    this.notifyListeners("animationComplete");
                },
              },
              {
                key: "finishAnimation",
                value: function () {
                  this.currentAnimation &&
                    (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation();
                },
              },
              {
                key: "applyTransformsToTarget",
                value: function () {
                  var e = this.getLead(),
                    t = e.targetWithTransforms,
                    n = e.target,
                    r = e.layout,
                    a = e.latestValues;
                  if (t && n && r) {
                    if (
                      this !== e &&
                      this.layout &&
                      r &&
                      Ay(
                        this.options.animationType,
                        this.layout.layoutBox,
                        r.layoutBox
                      )
                    ) {
                      n = this.target || am();
                      var o = $v(this.layout.layoutBox.x);
                      (n.x.min = e.target.x.min), (n.x.max = n.x.min + o);
                      var i = $v(this.layout.layoutBox.y);
                      (n.y.min = e.target.y.min), (n.y.max = n.y.min + i);
                    }
                    $m(t, n),
                      wm(t, a),
                      qv(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        t,
                        a
                      );
                  }
                },
              },
              {
                key: "registerSharedNode",
                value: function (e, t) {
                  this.sharedNodes.has(e) || this.sharedNodes.set(e, new ty()),
                    this.sharedNodes.get(e).add(t);
                  var n = t.options.initialPromotionConfig;
                  t.promote({
                    transition: n ? n.transition : void 0,
                    preserveFollowOpacity:
                      n && n.shouldPreserveFollowOpacity
                        ? n.shouldPreserveFollowOpacity(t)
                        : void 0,
                  });
                },
              },
              {
                key: "isLead",
                value: function () {
                  var e = this.getStack();
                  return !e || e.lead === this;
                },
              },
              {
                key: "getLead",
                value: function () {
                  var e;
                  return (
                    (this.options.layoutId &&
                      (null === (e = this.getStack()) || void 0 === e
                        ? void 0
                        : e.lead)) ||
                    this
                  );
                },
              },
              {
                key: "getPrevLead",
                value: function () {
                  var e;
                  return this.options.layoutId
                    ? null === (e = this.getStack()) || void 0 === e
                      ? void 0
                      : e.prevLead
                    : void 0;
                },
              },
              {
                key: "getStack",
                value: function () {
                  var e = this.options.layoutId;
                  if (e) return this.root.sharedNodes.get(e);
                },
              },
              {
                key: "promote",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.needsReset,
                    n = e.transition,
                    r = e.preserveFollowOpacity,
                    a = this.getStack();
                  a && a.promote(this, r),
                    t &&
                      ((this.projectionDelta = void 0), (this.needsReset = !0)),
                    n && this.setOptions({ transition: n });
                },
              },
              {
                key: "relegate",
                value: function () {
                  var e = this.getStack();
                  return !!e && e.relegate(this);
                },
              },
              {
                key: "resetRotation",
                value: function () {
                  var e = this.options.visualElement;
                  if (e) {
                    var t = !1,
                      n = e.latestValues;
                    if (
                      ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) &&
                        (t = !0),
                      t)
                    ) {
                      for (var r = {}, a = 0; a < oy.length; a++) {
                        var o = "rotate" + oy[a];
                        n[o] && ((r[o] = n[o]), e.setStaticValue(o, 0));
                      }
                      for (var i in (e.render(), r)) e.setStaticValue(i, r[i]);
                      e.scheduleRender();
                    }
                  }
                },
              },
              {
                key: "getProjectionStyles",
                value: function () {
                  var e,
                    t,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = {};
                  if (!this.instance || this.isSVG) return r;
                  if (!this.isVisible) return { visibility: "hidden" };
                  r.visibility = "";
                  var a = this.getTransformTemplate();
                  if (this.needsReset)
                    return (
                      (this.needsReset = !1),
                      (r.opacity = ""),
                      (r.pointerEvents = gd(n.pointerEvents) || ""),
                      (r.transform = a ? a(this.latestValues, "") : "none"),
                      r
                    );
                  var o = this.getLead();
                  if (!this.projectionDelta || !this.layout || !o.target) {
                    var i = {};
                    return (
                      this.options.layoutId &&
                        ((i.opacity =
                          void 0 !== this.latestValues.opacity
                            ? this.latestValues.opacity
                            : 1),
                        (i.pointerEvents = gd(n.pointerEvents) || "")),
                      this.hasProjected &&
                        !lm(this.latestValues) &&
                        ((i.transform = a ? a({}, "") : "none"),
                        (this.hasProjected = !1)),
                      i
                    );
                  }
                  var u = o.animationValues || o.latestValues;
                  this.applyTransformsToTarget(),
                    (r.transform = ny(
                      this.projectionDeltaWithTransform,
                      this.treeScale,
                      u
                    )),
                    a && (r.transform = a(u, r.transform));
                  var s = this.projectionDelta,
                    l = s.x,
                    c = s.y;
                  for (var f in ((r.transformOrigin = ""
                    .concat(100 * l.origin, "% ")
                    .concat(100 * c.origin, "% 0")),
                  o.animationValues
                    ? (r.opacity =
                        o === this
                          ? null !==
                              (t =
                                null !== (e = u.opacity) && void 0 !== e
                                  ? e
                                  : this.latestValues.opacity) && void 0 !== t
                            ? t
                            : 1
                          : this.preserveOpacity
                          ? this.latestValues.opacity
                          : u.opacityExit)
                    : (r.opacity =
                        o === this
                          ? void 0 !== u.opacity
                            ? u.opacity
                            : ""
                          : void 0 !== u.opacityExit
                          ? u.opacityExit
                          : 0),
                  vf))
                    if (void 0 !== u[f]) {
                      var d = vf[f],
                        h = d.correct,
                        p = d.applyTo,
                        v = "none" === r.transform ? u[f] : h(u[f], o);
                      if (p)
                        for (var m = p.length, y = 0; y < m; y++) r[p[y]] = v;
                      else r[f] = v;
                    }
                  return (
                    this.options.layoutId &&
                      (r.pointerEvents =
                        o === this ? gd(n.pointerEvents) || "" : "none"),
                    r
                  );
                },
              },
              {
                key: "clearSnapshot",
                value: function () {
                  this.resumeFrom = this.snapshot = void 0;
                },
              },
              {
                key: "resetTree",
                value: function () {
                  this.root.nodes.forEach(function (e) {
                    var t;
                    return null === (t = e.currentAnimation) || void 0 === t
                      ? void 0
                      : t.stop();
                  }),
                    this.root.nodes.forEach(py),
                    this.root.sharedNodes.clear();
                },
              },
            ]),
            e
          );
        })();
      }
      function ly(e) {
        e.updateLayout();
      }
      function cy(e) {
        var t,
          n =
            (null === (t = e.resumeFrom) || void 0 === t
              ? void 0
              : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
          var r = e.layout,
            a = r.layoutBox,
            o = r.measuredBox,
            i = e.options.animationType,
            u = n.source !== e.layout.source;
          "size" === i
            ? om(function (e) {
                var t = u ? n.measuredBox[e] : n.layoutBox[e],
                  r = $v(t);
                (t.min = a[e].min), (t.max = t.min + r);
              })
            : Ay(i, n.layoutBox, a) &&
              om(function (t) {
                var r = u ? n.measuredBox[t] : n.layoutBox[t],
                  o = $v(a[t]);
                (r.max = r.min + o),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[t].max = e.relativeTarget[t].min + o));
              });
          var s = rm();
          qv(s, a, n.layoutBox);
          var l = rm();
          u
            ? qv(l, e.applyTransform(o, !0), n.measuredBox)
            : qv(l, a, n.layoutBox);
          var c = !Zm(s),
            f = !1;
          if (!e.resumeFrom) {
            var d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
              var h = d.snapshot,
                p = d.layout;
              if (h && p) {
                var v = am();
                Xv(v, n.layoutBox, h.layoutBox);
                var m = am();
                Xv(m, a, p.layoutBox),
                  Jm(v, m) || (f = !0),
                  d.options.layoutRoot &&
                    ((e.relativeTarget = m),
                    (e.relativeTargetOrigin = v),
                    (e.relativeParent = d));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: a,
            snapshot: n,
            delta: l,
            layoutDelta: s,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: f,
          });
        } else if (e.isLead()) {
          var y = e.options.onExitComplete;
          y && y();
        }
        e.options.transition = void 0;
      }
      function fy(e) {
        uy.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = Boolean(
                e.isProjectionDirty ||
                  e.parent.isProjectionDirty ||
                  e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function dy(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function hy(e) {
        e.clearSnapshot();
      }
      function py(e) {
        e.clearMeasurements();
      }
      function vy(e) {
        e.isLayoutDirty = !1;
      }
      function my(e) {
        var t = e.options.visualElement;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function yy(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function gy(e) {
        e.resolveTargetDelta();
      }
      function by(e) {
        e.calcProjection();
      }
      function Sy(e) {
        e.resetRotation();
      }
      function wy(e) {
        e.removeLeadSnapshot();
      }
      function ky(e, t, n) {
        (e.translate = Hh(t.translate, 0, n)),
          (e.scale = Hh(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function xy(e, t, n, r) {
        (e.min = Hh(t.min, n.min, r)), (e.max = Hh(t.max, n.max, r));
      }
      function _y(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      var Ey = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        Ty = function (e) {
          return (
            "undefined" !== typeof navigator &&
            navigator.userAgent.toLowerCase().includes(e)
          );
        },
        Cy = Ty("applewebkit/") && !Ty("chrome/") ? Math.round : kd;
      function Py(e) {
        (e.min = Cy(e.min)), (e.max = Cy(e.max));
      }
      function Ay(e, t, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !Kv(ey(t), ey(n), 0.2))
        );
      }
      var Ry = sy({
          attachResizeListener: function (e, t) {
            return Nd(e, "resize", t);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        Ly = { current: void 0 },
        Ny = sy({
          measureScroll: function (e) {
            return { x: e.scrollLeft, y: e.scrollTop };
          },
          defaultParent: function () {
            if (!Ly.current) {
              var e = new Ry({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (Ly.current = e);
            }
            return Ly.current;
          },
          resetTransform: function (e, t) {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: function (e) {
            return Boolean("fixed" === window.getComputedStyle(e).position);
          },
        }),
        Oy = {
          pan: { Feature: Pm },
          drag: { Feature: Tm, ProjectionNode: Ny, MeasureLayout: Dm },
        },
        Dy = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      var Vy = 4;
      function My(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        ch(
          n <= Vy,
          'Max CSS variable fallback depth detected in property "'.concat(
            e,
            '". This may indicate a circular fallback dependency.'
          )
        );
        var r = (function (e) {
            var t = Dy.exec(e);
            if (!t) return [,];
            var n = l(t, 3);
            return [n[1], n[2]];
          })(e),
          a = l(r, 2),
          o = a[0],
          i = a[1];
        if (o) {
          var u = window.getComputedStyle(t).getPropertyValue(o);
          if (u) {
            var s = u.trim();
            return uv(s) ? parseFloat(s) : s;
          }
          return _f(i) ? My(i, t, n + 1) : i;
        }
      }
      var Fy = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        Iy = function (e) {
          return Fy.has(e);
        },
        jy = function (e) {
          return e === Cf || e === If;
        },
        By = function (e, t) {
          return parseFloat(e.split(", ")[t]);
        },
        zy = function (e, t) {
          return function (n, r) {
            var a = r.transform;
            if ("none" === a || !a) return 0;
            var o = a.match(/^matrix3d\((.+)\)$/);
            if (o) return By(o[1], t);
            var i = a.match(/^matrix\((.+)\)$/);
            return i ? By(i[1], e) : 0;
          };
        },
        Uy = new Set(["x", "y", "z"]),
        Wy = mf.filter(function (e) {
          return !Uy.has(e);
        });
      var Hy = {
        width: function (e, t) {
          var n = e.x,
            r = t.paddingLeft,
            a = void 0 === r ? "0" : r,
            o = t.paddingRight,
            i = void 0 === o ? "0" : o;
          return n.max - n.min - parseFloat(a) - parseFloat(i);
        },
        height: function (e, t) {
          var n = e.y,
            r = t.paddingTop,
            a = void 0 === r ? "0" : r,
            o = t.paddingBottom,
            i = void 0 === o ? "0" : o;
          return n.max - n.min - parseFloat(a) - parseFloat(i);
        },
        top: function (e, t) {
          var n = t.top;
          return parseFloat(n);
        },
        left: function (e, t) {
          var n = t.left;
          return parseFloat(n);
        },
        bottom: function (e, t) {
          var n = e.y,
            r = t.top;
          return parseFloat(r) + (n.max - n.min);
        },
        right: function (e, t) {
          var n = e.x,
            r = t.left;
          return parseFloat(r) + (n.max - n.min);
        },
        x: zy(4, 13),
        y: zy(5, 14),
      };
      (Hy.translateX = Hy.x), (Hy.translateY = Hy.y);
      var $y = function (e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        (t = w({}, t)), (r = w({}, r));
        var a = Object.keys(t).filter(Iy),
          o = [],
          i = !1,
          u = [];
        if (
          (a.forEach(function (a) {
            var s = e.getValue(a);
            if (e.hasValue(a)) {
              var l,
                c = n[a],
                f = mv(c),
                d = t[a];
              if (vd(d)) {
                var h = d.length,
                  p = null === d[0] ? 1 : 0;
                (c = d[p]), (f = mv(c));
                for (var v = p; v < h && null !== d[v]; v++)
                  l
                    ? ch(
                        mv(d[v]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = mv(d[v])),
                      ch(
                        l === f || (jy(f) && jy(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = mv(d);
              if (f !== l)
                if (jy(f) && jy(l)) {
                  var m = s.get();
                  "string" === typeof m && s.set(parseFloat(m)),
                    "string" === typeof d
                      ? (t[a] = parseFloat(d))
                      : Array.isArray(d) &&
                        l === If &&
                        (t[a] = d.map(parseFloat));
                } else
                  (null === f || void 0 === f ? void 0 : f.transform) &&
                  (null === l || void 0 === l ? void 0 : l.transform) &&
                  (0 === c || 0 === d)
                    ? 0 === c
                      ? s.set(l.transform(c))
                      : (t[a] = f.transform(d))
                    : (i ||
                        ((o = (function (e) {
                          var t = [];
                          return (
                            Wy.forEach(function (n) {
                              var r = e.getValue(n);
                              void 0 !== r &&
                                (t.push([n, r.get()]),
                                r.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            t.length && e.render(),
                            t
                          );
                        })(e)),
                        (i = !0)),
                      u.push(a),
                      (r[a] = void 0 !== r[a] ? r[a] : t[a]),
                      s.jump(d));
            }
          }),
          u.length)
        ) {
          var s = u.indexOf("height") >= 0 ? window.pageYOffset : null,
            c = (function (e, t, n) {
              var r = t.measureViewportBox(),
                a = t.current,
                o = getComputedStyle(a),
                i = o.display,
                u = {};
              "none" === i && t.setStaticValue("display", e.display || "block"),
                n.forEach(function (e) {
                  u[e] = Hy[e](r, o);
                }),
                t.render();
              var s = t.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var r = t.getValue(n);
                  r && r.jump(u[n]), (e[n] = Hy[n](s, o));
                }),
                e
              );
            })(t, e, u);
          return (
            o.length &&
              o.forEach(function (t) {
                var n = l(t, 2),
                  r = n[0],
                  a = n[1];
                e.getValue(r).set(a);
              }),
            e.render(),
            Hc && null !== s && window.scrollTo({ top: s }),
            { target: c, transitionEnd: r }
          );
        }
        return { target: t, transitionEnd: r };
      };
      function Ky(e, t, n, r) {
        return (function (e) {
          return Object.keys(e).some(Iy);
        })(t)
          ? $y(e, t, n, r)
          : { target: t, transitionEnd: r };
      }
      var Gy = function (e, n, r, a) {
          var o = (function (e, n, r) {
            var a = Object.assign({}, (t(n), n)),
              o = e.current;
            if (!(o instanceof Element)) return { target: a, transitionEnd: r };
            for (var i in (r && (r = w({}, r)),
            e.values.forEach(function (e) {
              var t = e.get();
              if (_f(t)) {
                var n = My(t, o);
                n && e.set(n);
              }
            }),
            a)) {
              var u = a[i];
              if (_f(u)) {
                var s = My(u, o);
                s && ((a[i] = s), r || (r = {}), void 0 === r[i] && (r[i] = u));
              }
            }
            return { target: a, transitionEnd: r };
          })(e, n, a);
          return Ky(e, (n = o.target), r, (a = o.transitionEnd));
        },
        qy = { current: null },
        Yy = { current: !1 };
      var Qy = new WeakMap(),
        Xy = ["willChange"],
        Zy = ["children"],
        Jy = Object.keys(rf),
        eg = Jy.length,
        tg = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        ng = Xc.length,
        rg = (function () {
          function e(t) {
            var n = this,
              r = t.parent,
              a = t.props,
              o = t.presenceContext,
              u = t.reducedMotionConfig,
              s = t.visualState,
              l =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            E(this, e),
              (this.current = null),
              (this.children = new Set()),
              (this.isVariantNode = !1),
              (this.isControllingVariants = !1),
              (this.shouldReduceMotion = null),
              (this.values = new Map()),
              (this.features = {}),
              (this.valueSubscriptions = new Map()),
              (this.prevMotionValues = {}),
              (this.events = {}),
              (this.propEventSubscriptions = {}),
              (this.notifyUpdate = function () {
                return n.notify("Update", n.latestValues);
              }),
              (this.render = function () {
                n.current &&
                  (n.triggerBuild(),
                  n.renderInstance(
                    n.current,
                    n.renderState,
                    n.props.style,
                    n.projection
                  ));
              }),
              (this.scheduleRender = function () {
                return Td.render(n.render, !1, !0);
              });
            var c = s.latestValues,
              f = s.renderState;
            (this.latestValues = c),
              (this.baseTarget = w({}, c)),
              (this.initialValues = a.initial ? w({}, c) : {}),
              (this.renderState = f),
              (this.parent = r),
              (this.props = a),
              (this.presenceContext = o),
              (this.depth = r ? r.depth + 1 : 0),
              (this.reducedMotionConfig = u),
              (this.options = l),
              (this.isControllingVariants = Zc(a)),
              (this.isVariantNode = Jc(a)),
              this.isVariantNode && (this.variantChildren = new Set()),
              (this.manuallyAnimateOnMount = Boolean(r && r.current));
            var d = this.scrapeMotionValuesFromProps(a, {}),
              h = d.willChange,
              p = i(d, Xy);
            for (var v in p) {
              var m = p[v];
              void 0 !== c[v] && bf(m) && (m.set(c[v], !1), iv(h) && h.add(v));
            }
          }
          return (
            C(e, [
              {
                key: "scrapeMotionValuesFromProps",
                value: function (e, t) {
                  return {};
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var t = this;
                  (this.current = e),
                    Qy.set(e, this),
                    this.projection &&
                      !this.projection.instance &&
                      this.projection.mount(e),
                    this.parent &&
                      this.isVariantNode &&
                      !this.isControllingVariants &&
                      (this.removeFromVariantTree =
                        this.parent.addVariantChild(this)),
                    this.values.forEach(function (e, n) {
                      return t.bindToMotionValue(n, e);
                    }),
                    Yy.current ||
                      (function () {
                        if (((Yy.current = !0), Hc))
                          if (window.matchMedia) {
                            var e = window.matchMedia(
                                "(prefers-reduced-motion)"
                              ),
                              t = function () {
                                return (qy.current = e.matches);
                              };
                            e.addListener(t), t();
                          } else qy.current = !1;
                      })(),
                    (this.shouldReduceMotion =
                      "never" !== this.reducedMotionConfig &&
                      ("always" === this.reducedMotionConfig || qy.current)),
                    this.parent && this.parent.children.add(this),
                    this.update(this.props, this.presenceContext);
                },
              },
              {
                key: "unmount",
                value: function () {
                  for (var e in (Qy.delete(this.current),
                  this.projection && this.projection.unmount(),
                  Cd(this.notifyUpdate),
                  Cd(this.render),
                  this.valueSubscriptions.forEach(function (e) {
                    return e();
                  }),
                  this.removeFromVariantTree && this.removeFromVariantTree(),
                  this.parent && this.parent.children.delete(this),
                  this.events))
                    this.events[e].clear();
                  for (var t in this.features) this.features[t].unmount();
                  this.current = null;
                },
              },
              {
                key: "bindToMotionValue",
                value: function (e, t) {
                  var n = this,
                    r = yf.has(e),
                    a = t.on("change", function (t) {
                      (n.latestValues[e] = t),
                        n.props.onUpdate && Td.update(n.notifyUpdate, !1, !0),
                        r &&
                          n.projection &&
                          (n.projection.isTransformDirty = !0);
                    }),
                    o = t.on("renderRequest", this.scheduleRender);
                  this.valueSubscriptions.set(e, function () {
                    a(), o();
                  });
                },
              },
              {
                key: "sortNodePosition",
                value: function (e) {
                  return this.current &&
                    this.sortInstanceNodePosition &&
                    this.type === e.type
                    ? this.sortInstanceNodePosition(this.current, e.current)
                    : 0;
                },
              },
              {
                key: "loadFeatures",
                value: function (e, t, n, r) {
                  for (
                    var a, o, u = this, s = (e.children, i(e, Zy)), l = 0;
                    l < eg;
                    l++
                  ) {
                    var c = Jy[l],
                      f = rf[c],
                      d = f.isEnabled,
                      h = f.Feature,
                      p = f.ProjectionNode,
                      v = f.MeasureLayout;
                    p && (a = p),
                      d(s) &&
                        (!this.features[c] &&
                          h &&
                          (this.features[c] = new h(this)),
                        v && (o = v));
                  }
                  if (!this.projection && a) {
                    this.projection = new a(
                      this.latestValues,
                      this.parent && this.parent.projection
                    );
                    var m = s.layoutId,
                      y = s.layout,
                      g = s.drag,
                      b = s.dragConstraints,
                      S = s.layoutScroll,
                      w = s.layoutRoot;
                    this.projection.setOptions({
                      layoutId: m,
                      layout: y,
                      alwaysMeasureLayout: Boolean(g) || (b && Gc(b)),
                      visualElement: this,
                      scheduleRender: function () {
                        return u.scheduleRender();
                      },
                      animationType: "string" === typeof y ? y : "both",
                      initialPromotionConfig: r,
                      layoutScroll: S,
                      layoutRoot: w,
                    });
                  }
                  return o;
                },
              },
              {
                key: "updateFeatures",
                value: function () {
                  for (var e in this.features) {
                    var t = this.features[e];
                    t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
                  }
                },
              },
              {
                key: "triggerBuild",
                value: function () {
                  this.build(
                    this.renderState,
                    this.latestValues,
                    this.options,
                    this.props
                  );
                },
              },
              {
                key: "measureViewportBox",
                value: function () {
                  return this.current
                    ? this.measureInstanceViewportBox(this.current, this.props)
                    : am();
                },
              },
              {
                key: "getStaticValue",
                value: function (e) {
                  return this.latestValues[e];
                },
              },
              {
                key: "setStaticValue",
                value: function (e, t) {
                  this.latestValues[e] = t;
                },
              },
              {
                key: "makeTargetAnimatable",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  return this.makeTargetAnimatableFromInstance(
                    e,
                    this.props,
                    t
                  );
                },
              },
              {
                key: "update",
                value: function (e, t) {
                  (e.transformTemplate || this.props.transformTemplate) &&
                    this.scheduleRender(),
                    (this.prevProps = this.props),
                    (this.props = e),
                    (this.prevPresenceContext = this.presenceContext),
                    (this.presenceContext = t);
                  for (var n = 0; n < tg.length; n++) {
                    var r = tg[n];
                    this.propEventSubscriptions[r] &&
                      (this.propEventSubscriptions[r](),
                      delete this.propEventSubscriptions[r]);
                    var a = e["on" + r];
                    a && (this.propEventSubscriptions[r] = this.on(r, a));
                  }
                  (this.prevMotionValues = (function (e, t, n) {
                    var r = t.willChange;
                    for (var a in t) {
                      var o = t[a],
                        i = n[a];
                      if (bf(o)) e.addValue(a, o), iv(r) && r.add(a);
                      else if (bf(i))
                        e.addValue(a, hv(o, { owner: e })),
                          iv(r) && r.remove(a);
                      else if (i !== o)
                        if (e.hasValue(a)) {
                          var u = e.getValue(a);
                          !u.hasAnimated && u.set(o);
                        } else {
                          var s = e.getStaticValue(a);
                          e.addValue(a, hv(void 0 !== s ? s : o, { owner: e }));
                        }
                    }
                    for (var l in n) void 0 === t[l] && e.removeValue(l);
                    return t;
                  })(
                    this,
                    this.scrapeMotionValuesFromProps(e, this.prevProps),
                    this.prevMotionValues
                  )),
                    this.handleChildMotionValue &&
                      this.handleChildMotionValue();
                },
              },
              {
                key: "getProps",
                value: function () {
                  return this.props;
                },
              },
              {
                key: "getVariant",
                value: function (e) {
                  return this.props.variants ? this.props.variants[e] : void 0;
                },
              },
              {
                key: "getDefaultTransition",
                value: function () {
                  return this.props.transition;
                },
              },
              {
                key: "getTransformPagePoint",
                value: function () {
                  return this.props.transformPagePoint;
                },
              },
              {
                key: "getClosestVariantNode",
                value: function () {
                  return this.isVariantNode
                    ? this
                    : this.parent
                    ? this.parent.getClosestVariantNode()
                    : void 0;
                },
              },
              {
                key: "getVariantContext",
                value: function () {
                  if (
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0]
                  )
                    return this.parent
                      ? this.parent.getVariantContext()
                      : void 0;
                  if (!this.isControllingVariants) {
                    var e =
                      (this.parent && this.parent.getVariantContext()) || {};
                    return (
                      void 0 !== this.props.initial &&
                        (e.initial = this.props.initial),
                      e
                    );
                  }
                  for (var t = {}, n = 0; n < ng; n++) {
                    var r = Xc[n],
                      a = this.props[r];
                    (qc(a) || !1 === a) && (t[r] = a);
                  }
                  return t;
                },
              },
              {
                key: "addVariantChild",
                value: function (e) {
                  var t = this.getClosestVariantNode();
                  if (t)
                    return (
                      t.variantChildren && t.variantChildren.add(e),
                      function () {
                        return t.variantChildren.delete(e);
                      }
                    );
                },
              },
              {
                key: "addValue",
                value: function (e, t) {
                  t !== this.values.get(e) &&
                    (this.removeValue(e), this.bindToMotionValue(e, t)),
                    this.values.set(e, t),
                    (this.latestValues[e] = t.get());
                },
              },
              {
                key: "removeValue",
                value: function (e) {
                  this.values.delete(e);
                  var t = this.valueSubscriptions.get(e);
                  t && (t(), this.valueSubscriptions.delete(e)),
                    delete this.latestValues[e],
                    this.removeValueFromRenderState(e, this.renderState);
                },
              },
              {
                key: "hasValue",
                value: function (e) {
                  return this.values.has(e);
                },
              },
              {
                key: "getValue",
                value: function (e, t) {
                  if (this.props.values && this.props.values[e])
                    return this.props.values[e];
                  var n = this.values.get(e);
                  return (
                    void 0 === n &&
                      void 0 !== t &&
                      ((n = hv(t, { owner: this })), this.addValue(e, n)),
                    n
                  );
                },
              },
              {
                key: "readValue",
                value: function (e) {
                  var t;
                  return void 0 === this.latestValues[e] && this.current
                    ? null !==
                        (t = this.getBaseTargetFromProps(this.props, e)) &&
                      void 0 !== t
                      ? t
                      : this.readValueFromInstance(
                          this.current,
                          e,
                          this.options
                        )
                    : this.latestValues[e];
                },
              },
              {
                key: "setBaseTarget",
                value: function (e, t) {
                  this.baseTarget[e] = t;
                },
              },
              {
                key: "getBaseTarget",
                value: function (e) {
                  var t,
                    n = this.props.initial,
                    r =
                      "string" === typeof n || "object" === typeof n
                        ? null === (t = pd(this.props, n)) || void 0 === t
                          ? void 0
                          : t[e]
                        : void 0;
                  if (n && void 0 !== r) return r;
                  var a = this.getBaseTargetFromProps(this.props, e);
                  return void 0 === a || bf(a)
                    ? void 0 !== this.initialValues[e] && void 0 === r
                      ? void 0
                      : this.baseTarget[e]
                    : a;
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  return (
                    this.events[e] || (this.events[e] = new cv()),
                    this.events[e].add(t)
                  );
                },
              },
              {
                key: "notify",
                value: function (e) {
                  if (this.events[e]) {
                    for (
                      var t,
                        n = arguments.length,
                        r = new Array(n > 1 ? n - 1 : 0),
                        a = 1;
                      a < n;
                      a++
                    )
                      r[a - 1] = arguments[a];
                    (t = this.events[e]).notify.apply(t, r);
                  }
                },
              },
            ]),
            e
          );
        })(),
        ag = ["transition", "transitionEnd"],
        og = (function (e) {
          x(n, e);
          var t = _(n);
          function n() {
            return E(this, n), t.apply(this, arguments);
          }
          return (
            C(n, [
              {
                key: "sortInstanceNodePosition",
                value: function (e, t) {
                  return 2 & e.compareDocumentPosition(t) ? 1 : -1;
                },
              },
              {
                key: "getBaseTargetFromProps",
                value: function (e, t) {
                  return e.style ? e.style[t] : void 0;
                },
              },
              {
                key: "removeValueFromRenderState",
                value: function (e, t) {
                  var n = t.vars,
                    r = t.style;
                  delete n[e], delete r[e];
                },
              },
              {
                key: "makeTargetAnimatableFromInstance",
                value: function (e, t, n) {
                  var r = e.transition,
                    a = e.transitionEnd,
                    o = i(e, ag),
                    u = t.transformValues,
                    s = (function (e, t, n) {
                      var r = {};
                      for (var a in e) {
                        var o = kv(a, t);
                        if (void 0 !== o) r[a] = o;
                        else {
                          var i = n.getValue(a);
                          i && (r[a] = i.get());
                        }
                      }
                      return r;
                    })(o, r || {}, this);
                  if (
                    (u && (a && (a = u(a)), o && (o = u(o)), s && (s = u(s))),
                    n)
                  ) {
                    !(function (e, t, n) {
                      var r,
                        a,
                        o = Object.keys(t).filter(function (t) {
                          return !e.hasValue(t);
                        }),
                        i = o.length;
                      if (i)
                        for (var u = 0; u < i; u++) {
                          var s = o[u],
                            l = t[s],
                            c = null;
                          Array.isArray(l) && (c = l[0]),
                            null === c &&
                              (c =
                                null !==
                                  (a =
                                    null !== (r = n[s]) && void 0 !== r
                                      ? r
                                      : e.readValue(s)) && void 0 !== a
                                  ? a
                                  : t[s]),
                            void 0 !== c &&
                              null !== c &&
                              ("string" === typeof c && (uv(c) || tv(c))
                                ? (c = parseFloat(c))
                                : !gv(c) && ap.test(l) && (c = ev(s, l)),
                              e.addValue(s, hv(c, { owner: e })),
                              void 0 === n[s] && (n[s] = c),
                              null !== c && e.setBaseTarget(s, c));
                        }
                    })(this, o, s);
                    var l = Gy(this, o, s, a);
                    (a = l.transitionEnd), (o = l.target);
                  }
                  return w({ transition: r, transitionEnd: a }, o);
                },
              },
            ]),
            n
          );
        })(rg);
      var ig = (function (e) {
        x(n, e);
        var t = _(n);
        function n() {
          return E(this, n), t.apply(this, arguments);
        }
        return (
          C(n, [
            {
              key: "readValueFromInstance",
              value: function (e, t) {
                if (yf.has(t)) {
                  var n = Jp(t);
                  return (n && n.default) || 0;
                }
                var r,
                  a = ((r = e), window.getComputedStyle(r)),
                  o = (xf(t) ? a.getPropertyValue(t) : a[t]) || 0;
                return "string" === typeof o ? o.trim() : o;
              },
            },
            {
              key: "measureInstanceViewportBox",
              value: function (e, t) {
                return km(e, t.transformPagePoint);
              },
            },
            {
              key: "build",
              value: function (e, t, n, r) {
                Hf(e, t, n, r.transformTemplate);
              },
            },
            {
              key: "scrapeMotionValuesFromProps",
              value: function (e, t) {
                return dd(e, t);
              },
            },
            {
              key: "handleChildMotionValue",
              value: function () {
                var e = this;
                this.childSubscription &&
                  (this.childSubscription(), delete this.childSubscription);
                var t = this.props.children;
                bf(t) &&
                  (this.childSubscription = t.on("change", function (t) {
                    e.current && (e.current.textContent = "".concat(t));
                  }));
              },
            },
            {
              key: "renderInstance",
              value: function (e, t, n, r) {
                ld(e, t, n, r);
              },
            },
          ]),
          n
        );
      })(og);
      function ug() {
        return (
          (ug =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = (function (e, t) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(e, t) &&
                      null !== (e = c(e));

                    );
                    return e;
                  })(e, t);
                  if (r) {
                    var a = Object.getOwnPropertyDescriptor(r, t);
                    return a.get
                      ? a.get.call(arguments.length < 3 ? e : n)
                      : a.value;
                  }
                }),
          ug.apply(this, arguments)
        );
      }
      var sg = (function (e) {
          x(n, e);
          var t = _(n);
          function n() {
            var e;
            return (
              E(this, n), ((e = t.apply(this, arguments)).isSVGTag = !1), e
            );
          }
          return (
            C(n, [
              {
                key: "getBaseTargetFromProps",
                value: function (e, t) {
                  return e[t];
                },
              },
              {
                key: "readValueFromInstance",
                value: function (e, t) {
                  if (yf.has(t)) {
                    var n = Jp(t);
                    return (n && n.default) || 0;
                  }
                  return (t = cd.has(t) ? t : sd(t)), e.getAttribute(t);
                },
              },
              {
                key: "measureInstanceViewportBox",
                value: function () {
                  return am();
                },
              },
              {
                key: "scrapeMotionValuesFromProps",
                value: function (e, t) {
                  return hd(e, t);
                },
              },
              {
                key: "build",
                value: function (e, t, n, r) {
                  rd(e, t, n, this.isSVGTag, r.transformTemplate);
                },
              },
              {
                key: "renderInstance",
                value: function (e, t, n, r) {
                  fd(e, t, 0, r);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  (this.isSVGTag = od(e.tagName)),
                    ug(c(n.prototype), "mount", this).call(this, e);
                },
              },
            ]),
            n
          );
        })(og),
        lg = function (e, t) {
          return pf(e)
            ? new sg(t, { enableHardwareAcceleration: !1 })
            : new ig(t, { enableHardwareAcceleration: !0 });
        },
        cg = { layout: { ProjectionNode: Ny, MeasureLayout: Dm } },
        fg = w(w(w(w({}, Mv), oh), Oy), cg),
        dg = df(function (e, t) {
          return (function (e, t, n, r) {
            var a = t.forwardMotionProps,
              o = void 0 !== a && a;
            return w(
              w({}, pf(e) ? Rd : Ld),
              {},
              {
                preloadedFeatures: n,
                useRender: ud(o),
                createVisualElement: r,
                Component: e,
              }
            );
          })(e, t, fg, lg);
        });
      var hg = ["name"],
        pg = ["_f"],
        vg = ["_f"],
        mg = function (e) {
          return "checkbox" === e.type;
        },
        yg = function (e) {
          return e instanceof Date;
        },
        gg = function (e) {
          return null == e;
        },
        bg = function (e) {
          return "object" === typeof e;
        },
        Sg = function (e) {
          return !gg(e) && !Array.isArray(e) && bg(e) && !yg(e);
        },
        wg = function (e) {
          return Sg(e) && e.target
            ? mg(e.target)
              ? e.target.checked
              : e.target.value
            : e;
        },
        kg = function (e, t) {
          return e.has(
            (function (e) {
              return e.substring(0, e.search(/\.\d+(\.|$)/)) || e;
            })(t)
          );
        },
        xg = function (e) {
          var t = e.constructor && e.constructor.prototype;
          return Sg(t) && t.hasOwnProperty("isPrototypeOf");
        },
        _g =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.HTMLElement &&
          "undefined" !== typeof document;
      function Eg(e) {
        var t,
          n = Array.isArray(e);
        if (e instanceof Date) t = new Date(e);
        else if (e instanceof Set) t = new Set(e);
        else {
          if (
            (_g && (e instanceof Blob || e instanceof FileList)) ||
            (!n && !Sg(e))
          )
            return e;
          if (((t = n ? [] : {}), n || xg(e)))
            for (var r in e) e.hasOwnProperty(r) && (t[r] = Eg(e[r]));
          else t = e;
        }
        return t;
      }
      var Tg = function (e) {
          return Array.isArray(e) ? e.filter(Boolean) : [];
        },
        Cg = function (e) {
          return void 0 === e;
        },
        Pg = function (e, t, n) {
          if (!t || !Sg(e)) return n;
          var r = Tg(t.split(/[,[\].]+?/)).reduce(function (e, t) {
            return gg(e) ? e : e[t];
          }, e);
          return Cg(r) || r === e ? (Cg(e[t]) ? n : e[t]) : r;
        },
        Ag = function (e) {
          return "boolean" === typeof e;
        },
        Rg = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
        Lg = {
          onBlur: "onBlur",
          onChange: "onChange",
          onSubmit: "onSubmit",
          onTouched: "onTouched",
          all: "all",
        },
        Ng = "max",
        Og = "min",
        Dg = "maxLength",
        Vg = "minLength",
        Mg = "pattern",
        Fg = "required",
        Ig = "validate",
        jg =
          (P.createContext(null),
          function (e, t, n) {
            var r =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              a = { defaultValues: t._defaultValues },
              o = function (o) {
                Object.defineProperty(a, o, {
                  get: function () {
                    var a = o;
                    return (
                      t._proxyFormState[a] !== Lg.all &&
                        (t._proxyFormState[a] = !r || Lg.all),
                      n && (n[a] = !0),
                      e[a]
                    );
                  },
                });
              };
            for (var i in e) o(i);
            return a;
          }),
        Bg = function (e) {
          return Sg(e) && !Object.keys(e).length;
        },
        zg = function (e, t, n, r) {
          n(e);
          e.name;
          var a = i(e, hg);
          return (
            Bg(a) ||
            Object.keys(a).length >= Object.keys(t).length ||
            Object.keys(a).find(function (e) {
              return t[e] === (!r || Lg.all);
            })
          );
        },
        Ug = function (e) {
          return Array.isArray(e) ? e : [e];
        };
      function Wg(e) {
        var t = P.useRef(e);
        (t.current = e),
          P.useEffect(
            function () {
              var n =
                !e.disabled &&
                t.current.subject &&
                t.current.subject.subscribe({ next: t.current.next });
              return function () {
                n && n.unsubscribe();
              };
            },
            [e.disabled]
          );
      }
      var Hg = function (e) {
          return "string" === typeof e;
        },
        $g = function (e, t, n, r, a) {
          return Hg(e)
            ? (r && t.watch.add(e), Pg(n, e, a))
            : Array.isArray(e)
            ? e.map(function (e) {
                return r && t.watch.add(e), Pg(n, e);
              })
            : (r && (t.watchAll = !0), n);
        };
      var Kg = function (e) {
          return /^\w*$/.test(e);
        },
        Gg = function (e) {
          return Tg(e.replace(/["|']|\]/g, "").split(/\.|\[/));
        };
      function qg(e, t, n) {
        for (
          var r = -1, a = Kg(t) ? [t] : Gg(t), o = a.length, i = o - 1;
          ++r < o;

        ) {
          var u = a[r],
            s = n;
          if (r !== i) {
            var l = e[u];
            s = Sg(l) || Array.isArray(l) ? l : isNaN(+a[r + 1]) ? {} : [];
          }
          (e[u] = s), (e = e[u]);
        }
        return e;
      }
      var Yg = function (e, t, n, r, a) {
          return t
            ? w(
                w({}, n[e]),
                {},
                {
                  types: w(
                    w({}, n[e] && n[e].types ? n[e].types : {}),
                    {},
                    b({}, r, a || !0)
                  ),
                }
              )
            : {};
        },
        Qg = function e(t, n, r) {
          var a,
            o = y(r || Object.keys(t));
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var u = a.value,
                s = Pg(t, u);
              if (s) {
                var l = s._f,
                  c = i(s, pg);
                if (l && n(l.name)) {
                  if (l.ref.focus) {
                    l.ref.focus();
                    break;
                  }
                  if (l.refs && l.refs[0].focus) {
                    l.refs[0].focus();
                    break;
                  }
                } else Sg(c) && e(c, n);
              }
            }
          } catch (f) {
            o.e(f);
          } finally {
            o.f();
          }
        },
        Xg = function (e) {
          return {
            isOnSubmit: !e || e === Lg.onSubmit,
            isOnBlur: e === Lg.onBlur,
            isOnChange: e === Lg.onChange,
            isOnAll: e === Lg.all,
            isOnTouch: e === Lg.onTouched,
          };
        },
        Zg = function (e, t, n) {
          return (
            !n &&
            (t.watchAll ||
              t.watch.has(e) ||
              o(t.watch).some(function (t) {
                return e.startsWith(t) && /^\.\w+/.test(e.slice(t.length));
              }))
          );
        },
        Jg = function (e, t, n) {
          var r = Tg(Pg(e, n));
          return qg(r, "root", t[n]), qg(e, n, r), e;
        },
        eb = function (e) {
          return "file" === e.type;
        },
        tb = function (e) {
          return "function" === typeof e;
        },
        nb = function (e) {
          if (!_g) return !1;
          var t = e ? e.ownerDocument : 0;
          return (
            e instanceof
            (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
          );
        },
        rb = function (e) {
          return Hg(e);
        },
        ab = function (e) {
          return "radio" === e.type;
        },
        ob = function (e) {
          return e instanceof RegExp;
        },
        ib = { value: !1, isValid: !1 },
        ub = { value: !0, isValid: !0 },
        sb = function (e) {
          if (Array.isArray(e)) {
            if (e.length > 1) {
              var t = e
                .filter(function (e) {
                  return e && e.checked && !e.disabled;
                })
                .map(function (e) {
                  return e.value;
                });
              return { value: t, isValid: !!t.length };
            }
            return e[0].checked && !e[0].disabled
              ? e[0].attributes && !Cg(e[0].attributes.value)
                ? Cg(e[0].value) || "" === e[0].value
                  ? ub
                  : { value: e[0].value, isValid: !0 }
                : ub
              : ib;
          }
          return ib;
        },
        lb = { isValid: !1, value: null },
        cb = function (e) {
          return Array.isArray(e)
            ? e.reduce(function (e, t) {
                return t && t.checked && !t.disabled
                  ? { isValid: !0, value: t.value }
                  : e;
              }, lb)
            : lb;
        };
      function fb(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "validate";
        if (rb(e) || (Array.isArray(e) && e.every(rb)) || (Ag(e) && !e))
          return { type: n, message: rb(e) ? e : "", ref: t };
      }
      var db = function (e) {
          return Sg(e) && !ob(e) ? e : { value: e, message: "" };
        },
        hb = (function () {
          var e = s(
            m().mark(function e(t, n, r, a, o) {
              var i,
                u,
                s,
                l,
                c,
                f,
                d,
                h,
                p,
                v,
                y,
                g,
                b,
                S,
                k,
                x,
                _,
                E,
                T,
                C,
                P,
                A,
                R,
                L,
                N,
                O,
                D,
                V,
                M,
                F,
                I,
                j,
                B,
                z,
                U,
                W,
                H,
                $,
                K,
                G,
                q,
                Y,
                Q,
                X,
                Z,
                J,
                ee,
                te;
              return m().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((i = t._f),
                        (u = i.ref),
                        (s = i.refs),
                        (l = i.required),
                        (c = i.maxLength),
                        (f = i.minLength),
                        (d = i.min),
                        (h = i.max),
                        (p = i.pattern),
                        (v = i.validate),
                        (y = i.name),
                        (g = i.valueAsNumber),
                        (b = i.mount),
                        (S = i.disabled),
                        (k = Pg(n, y)),
                        b && !S)
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return", {});
                    case 4:
                      if (
                        ((x = s ? s[0] : u),
                        (_ = function (e) {
                          a &&
                            x.reportValidity &&
                            (x.setCustomValidity(Ag(e) ? "" : e || ""),
                            x.reportValidity());
                        }),
                        (E = {}),
                        (T = ab(u)),
                        (C = mg(u)),
                        (P = T || C),
                        (A =
                          ((g || eb(u)) && Cg(u.value) && Cg(k)) ||
                          (nb(u) && "" === u.value) ||
                          "" === k ||
                          (Array.isArray(k) && !k.length)),
                        (R = Yg.bind(null, y, r, E)),
                        (L = function (e, t, n) {
                          var r =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : Dg,
                            a =
                              arguments.length > 4 && void 0 !== arguments[4]
                                ? arguments[4]
                                : Vg,
                            o = e ? t : n;
                          E[y] = w(
                            { type: e ? r : a, message: o, ref: u },
                            R(e ? r : a, o)
                          );
                        }),
                        !(o
                          ? !Array.isArray(k) || !k.length
                          : l &&
                            ((!P && (A || gg(k))) ||
                              (Ag(k) && !k) ||
                              (C && !sb(s).isValid) ||
                              (T && !cb(s).isValid))))
                      ) {
                        e.next = 20;
                        break;
                      }
                      if (
                        ((N = rb(l) ? { value: !!l, message: l } : db(l)),
                        (O = N.value),
                        (D = N.message),
                        !O)
                      ) {
                        e.next = 20;
                        break;
                      }
                      if (
                        ((E[y] = w({ type: Fg, message: D, ref: x }, R(Fg, D))),
                        r)
                      ) {
                        e.next = 20;
                        break;
                      }
                      return _(D), e.abrupt("return", E);
                    case 20:
                      if (A || (gg(d) && gg(h))) {
                        e.next = 29;
                        break;
                      }
                      if (
                        ((F = db(h)),
                        (I = db(d)),
                        gg(k) || isNaN(k)
                          ? ((B = u.valueAsDate || new Date(k)),
                            (z = function (e) {
                              return new Date(
                                new Date().toDateString() + " " + e
                              );
                            }),
                            (U = "time" == u.type),
                            (W = "week" == u.type),
                            Hg(F.value) &&
                              k &&
                              (V = U
                                ? z(k) > z(F.value)
                                : W
                                ? k > F.value
                                : B > new Date(F.value)),
                            Hg(I.value) &&
                              k &&
                              (M = U
                                ? z(k) < z(I.value)
                                : W
                                ? k < I.value
                                : B < new Date(I.value)))
                          : ((j = u.valueAsNumber || (k ? +k : k)),
                            gg(F.value) || (V = j > F.value),
                            gg(I.value) || (M = j < I.value)),
                        !V && !M)
                      ) {
                        e.next = 29;
                        break;
                      }
                      if ((L(!!V, F.message, I.message, Ng, Og), r)) {
                        e.next = 29;
                        break;
                      }
                      return _(E[y].message), e.abrupt("return", E);
                    case 29:
                      if (
                        (!c && !f) ||
                        A ||
                        !(Hg(k) || (o && Array.isArray(k)))
                      ) {
                        e.next = 39;
                        break;
                      }
                      if (
                        ((H = db(c)),
                        ($ = db(f)),
                        (K = !gg(H.value) && k.length > +H.value),
                        (G = !gg($.value) && k.length < +$.value),
                        !K && !G)
                      ) {
                        e.next = 39;
                        break;
                      }
                      if ((L(K, H.message, $.message), r)) {
                        e.next = 39;
                        break;
                      }
                      return _(E[y].message), e.abrupt("return", E);
                    case 39:
                      if (!p || A || !Hg(k)) {
                        e.next = 46;
                        break;
                      }
                      if (
                        ((q = db(p)),
                        (Y = q.value),
                        (Q = q.message),
                        !ob(Y) || k.match(Y))
                      ) {
                        e.next = 46;
                        break;
                      }
                      if (
                        ((E[y] = w({ type: Mg, message: Q, ref: u }, R(Mg, Q))),
                        r)
                      ) {
                        e.next = 46;
                        break;
                      }
                      return _(Q), e.abrupt("return", E);
                    case 46:
                      if (!v) {
                        e.next = 80;
                        break;
                      }
                      if (!tb(v)) {
                        e.next = 59;
                        break;
                      }
                      return (e.next = 50), v(k, n);
                    case 50:
                      if (((X = e.sent), !(Z = fb(X, x)))) {
                        e.next = 57;
                        break;
                      }
                      if (((E[y] = w(w({}, Z), R(Ig, Z.message))), r)) {
                        e.next = 57;
                        break;
                      }
                      return _(Z.message), e.abrupt("return", E);
                    case 57:
                      e.next = 80;
                      break;
                    case 59:
                      if (!Sg(v)) {
                        e.next = 80;
                        break;
                      }
                      (J = {}), (e.t0 = m().keys(v));
                    case 62:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 76;
                        break;
                      }
                      if (((ee = e.t1.value), Bg(J) || r)) {
                        e.next = 66;
                        break;
                      }
                      return e.abrupt("break", 76);
                    case 66:
                      return (e.t2 = fb), (e.next = 69), v[ee](k, n);
                    case 69:
                      (e.t3 = e.sent),
                        (e.t4 = x),
                        (e.t5 = ee),
                        (te = (0, e.t2)(e.t3, e.t4, e.t5)) &&
                          ((J = w(w({}, te), R(ee, te.message))),
                          _(te.message),
                          r && (E[y] = J)),
                        (e.next = 62);
                      break;
                    case 76:
                      if (Bg(J)) {
                        e.next = 80;
                        break;
                      }
                      if (((E[y] = w({ ref: x }, J)), r)) {
                        e.next = 80;
                        break;
                      }
                      return e.abrupt("return", E);
                    case 80:
                      return _(!0), e.abrupt("return", E);
                    case 82:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, r, a, o) {
            return e.apply(this, arguments);
          };
        })();
      function pb(e, t) {
        var n = Array.isArray(t) ? t : Kg(t) ? [t] : Gg(t),
          r =
            1 === n.length
              ? e
              : (function (e, t) {
                  for (var n = t.slice(0, -1).length, r = 0; r < n; )
                    e = Cg(e) ? r++ : e[t[r++]];
                  return e;
                })(e, n),
          a = n.length - 1,
          o = n[a];
        return (
          r && delete r[o],
          0 !== a &&
            ((Sg(r) && Bg(r)) ||
              (Array.isArray(r) &&
                (function (e) {
                  for (var t in e)
                    if (e.hasOwnProperty(t) && !Cg(e[t])) return !1;
                  return !0;
                })(r))) &&
            pb(e, n.slice(0, -1)),
          e
        );
      }
      function vb() {
        var e = [];
        return {
          get observers() {
            return e;
          },
          next: function (t) {
            var n,
              r = y(e);
            try {
              for (r.s(); !(n = r.n()).done; ) {
                var a = n.value;
                a.next && a.next(t);
              }
            } catch (o) {
              r.e(o);
            } finally {
              r.f();
            }
          },
          subscribe: function (t) {
            return (
              e.push(t),
              {
                unsubscribe: function () {
                  e = e.filter(function (e) {
                    return e !== t;
                  });
                },
              }
            );
          },
          unsubscribe: function () {
            e = [];
          },
        };
      }
      var mb = function (e) {
        return gg(e) || !bg(e);
      };
      function yb(e, t) {
        if (mb(e) || mb(t)) return e === t;
        if (yg(e) && yg(t)) return e.getTime() === t.getTime();
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var a = 0, o = n; a < o.length; a++) {
          var i = o[a],
            u = e[i];
          if (!r.includes(i)) return !1;
          if ("ref" !== i) {
            var s = t[i];
            if (
              (yg(u) && yg(s)) ||
              (Sg(u) && Sg(s)) ||
              (Array.isArray(u) && Array.isArray(s))
                ? !yb(u, s)
                : u !== s
            )
              return !1;
          }
        }
        return !0;
      }
      var gb = function (e) {
          return "select-multiple" === e.type;
        },
        bb = function (e) {
          return ab(e) || mg(e);
        },
        Sb = function (e) {
          return nb(e) && e.isConnected;
        },
        wb = function (e) {
          for (var t in e) if (tb(e[t])) return !0;
          return !1;
        };
      function kb(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = Array.isArray(e);
        if (Sg(e) || n)
          for (var r in e)
            Array.isArray(e[r]) || (Sg(e[r]) && !wb(e[r]))
              ? ((t[r] = Array.isArray(e[r]) ? [] : {}), kb(e[r], t[r]))
              : gg(e[r]) || (t[r] = !0);
        return t;
      }
      function xb(e, t, n) {
        var r = Array.isArray(e);
        if (Sg(e) || r)
          for (var a in e)
            Array.isArray(e[a]) || (Sg(e[a]) && !wb(e[a]))
              ? Cg(t) || mb(n[a])
                ? (n[a] = Array.isArray(e[a]) ? kb(e[a], []) : w({}, kb(e[a])))
                : xb(e[a], gg(t) ? {} : t[a], n[a])
              : (n[a] = !yb(e[a], t[a]));
        return n;
      }
      var _b = function (e, t) {
          return xb(e, t, kb(t));
        },
        Eb = function (e, t) {
          var n = t.valueAsNumber,
            r = t.valueAsDate,
            a = t.setValueAs;
          return Cg(e)
            ? e
            : n
            ? "" === e
              ? NaN
              : e
              ? +e
              : e
            : r && Hg(e)
            ? new Date(e)
            : a
            ? a(e)
            : e;
        };
      function Tb(e) {
        var t = e.ref;
        if (
          !(e.refs
            ? e.refs.every(function (e) {
                return e.disabled;
              })
            : t.disabled)
        )
          return eb(t)
            ? t.files
            : ab(t)
            ? cb(e.refs).value
            : gb(t)
            ? o(t.selectedOptions).map(function (e) {
                return e.value;
              })
            : mg(t)
            ? sb(e.refs).value
            : Eb(Cg(t.value) ? e.ref.value : t.value, e);
      }
      var Cb = function (e, t, n, r) {
          var a,
            i = {},
            u = y(e);
          try {
            for (u.s(); !(a = u.n()).done; ) {
              var s = a.value,
                l = Pg(t, s);
              l && qg(i, s, l._f);
            }
          } catch (c) {
            u.e(c);
          } finally {
            u.f();
          }
          return {
            criteriaMode: n,
            names: o(e),
            fields: i,
            shouldUseNativeValidation: r,
          };
        },
        Pb = function (e) {
          return Cg(e)
            ? e
            : ob(e)
            ? e.source
            : Sg(e)
            ? ob(e.value)
              ? e.value.source
              : e.value
            : e;
        },
        Ab = function (e) {
          return (
            e.mount &&
            (e.required ||
              e.min ||
              e.max ||
              e.maxLength ||
              e.minLength ||
              e.pattern ||
              e.validate)
          );
        };
      function Rb(e, t, n) {
        var r = Pg(e, n);
        if (r || Kg(n)) return { error: r, name: n };
        for (var a = n.split("."); a.length; ) {
          var o = a.join("."),
            i = Pg(t, o),
            u = Pg(e, o);
          if (i && !Array.isArray(i) && n !== o) return { name: n };
          if (u && u.type) return { name: o, error: u };
          a.pop();
        }
        return { name: n };
      }
      var Lb = function (e, t, n, r, a) {
          return (
            !a.isOnAll &&
            (!n && a.isOnTouch
              ? !(t || e)
              : (n ? r.isOnBlur : a.isOnBlur)
              ? !e
              : !(n ? r.isOnChange : a.isOnChange) || e)
          );
        },
        Nb = function (e, t) {
          return !Tg(Pg(e, t)).length && pb(e, t);
        },
        Ob = {
          mode: Lg.onSubmit,
          reValidateMode: Lg.onChange,
          shouldFocusError: !0,
        };
      function Db() {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 ? arguments[1] : void 0,
          r = w(w({}, Ob), t),
          a = {
            submitCount: 0,
            isDirty: !1,
            isLoading: tb(r.defaultValues),
            isValidating: !1,
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            touchedFields: {},
            dirtyFields: {},
            errors: {},
          },
          u = {},
          l =
            ((Sg(r.defaultValues) || Sg(r.values)) &&
              Eg(r.defaultValues || r.values)) ||
            {},
          c = r.shouldUnregister ? {} : Eg(l),
          f = { action: !1, mount: !1, watch: !1 },
          d = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
          },
          h = 0,
          p = {
            isDirty: !1,
            dirtyFields: !1,
            touchedFields: !1,
            isValidating: !1,
            isValid: !1,
            errors: !1,
          },
          v = { values: vb(), array: vb(), state: vb() },
          g = t.resetOptions && t.resetOptions.keepDirtyValues,
          S = Xg(r.mode),
          k = Xg(r.reValidateMode),
          x = r.criteriaMode === Lg.all,
          _ = (function () {
            var e = s(
              m().mark(function e(t) {
                var n;
                return m().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!p.isValid && !t) {
                          e.next = 14;
                          break;
                        }
                        if (!r.resolver) {
                          e.next = 9;
                          break;
                        }
                        return (e.t1 = Bg), (e.next = 5), A();
                      case 5:
                        (e.t2 = e.sent.errors),
                          (e.t0 = (0, e.t1)(e.t2)),
                          (e.next = 12);
                        break;
                      case 9:
                        return (e.next = 11), L(u, !0);
                      case 11:
                        e.t0 = e.sent;
                      case 12:
                        (n = e.t0) !== a.isValid &&
                          v.state.next({ isValid: n });
                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          E = function (e) {
            return p.isValidating && v.state.next({ isValidating: e });
          },
          T = function (e, t, n, r) {
            var a = Pg(u, e);
            if (a) {
              var o = Pg(c, e, Cg(n) ? Pg(l, e) : n);
              Cg(o) || (r && r.defaultChecked) || t
                ? qg(c, e, t ? o : Tb(a._f))
                : D(e, o),
                f.mount && _();
            }
          },
          C = function (e, t, n, r, o) {
            var i = !1,
              u = !1,
              s = { name: e };
            if (!n || r) {
              p.isDirty &&
                ((u = a.isDirty),
                (a.isDirty = s.isDirty = N()),
                (i = u !== s.isDirty));
              var c = yb(Pg(l, e), t);
              (u = Pg(a.dirtyFields, e)),
                c ? pb(a.dirtyFields, e) : qg(a.dirtyFields, e, !0),
                (s.dirtyFields = a.dirtyFields),
                (i = i || (p.dirtyFields && u !== !c));
            }
            if (n) {
              var f = Pg(a.touchedFields, e);
              f ||
                (qg(a.touchedFields, e, n),
                (s.touchedFields = a.touchedFields),
                (i = i || (p.touchedFields && f !== n)));
            }
            return i && o && v.state.next(s), i ? s : {};
          },
          P = function (n, r, o, i) {
            var u,
              s = Pg(a.errors, n),
              l = p.isValid && Ag(r) && a.isValid !== r;
            if (
              (t.delayError && o
                ? ((u = function () {
                    return (function (e, t) {
                      qg(a.errors, e, t), v.state.next({ errors: a.errors });
                    })(n, o);
                  }),
                  (e = function (e) {
                    clearTimeout(h), (h = setTimeout(u, e));
                  })(t.delayError))
                : (clearTimeout(h),
                  (e = null),
                  o ? qg(a.errors, n, o) : pb(a.errors, n)),
              (o ? !yb(s, o) : s) || !Bg(i) || l)
            ) {
              var c = w(
                w(w({}, i), l && Ag(r) ? { isValid: r } : {}),
                {},
                { errors: a.errors, name: n }
              );
              (a = w(w({}, a), c)), v.state.next(c);
            }
            E(!1);
          },
          A = (function () {
            var e = s(
              m().mark(function e(t) {
                return m().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          r.resolver(
                            c,
                            r.context,
                            Cb(
                              t || d.mount,
                              u,
                              r.criteriaMode,
                              r.shouldUseNativeValidation
                            )
                          )
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          R = (function () {
            var e = s(
              m().mark(function e(t) {
                var n, r, o, i, u, s;
                return m().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), A(t);
                      case 2:
                        if (((n = e.sent), (r = n.errors), t)) {
                          o = y(t);
                          try {
                            for (o.s(); !(i = o.n()).done; )
                              (u = i.value),
                                (s = Pg(r, u))
                                  ? qg(a.errors, u, s)
                                  : pb(a.errors, u);
                          } catch (l) {
                            o.e(l);
                          } finally {
                            o.f();
                          }
                        } else a.errors = r;
                        return e.abrupt("return", r);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          L = (function () {
            var e = s(
              m().mark(function e(t, n) {
                var o,
                  u,
                  s,
                  l,
                  f,
                  h,
                  p,
                  v = arguments;
                return m().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (o =
                          v.length > 2 && void 0 !== v[2]
                            ? v[2]
                            : { valid: !0 }),
                          (e.t0 = m().keys(t));
                      case 2:
                        if ((e.t1 = e.t0()).done) {
                          e.next = 23;
                          break;
                        }
                        if (((u = e.t1.value), !(s = t[u]))) {
                          e.next = 21;
                          break;
                        }
                        if (((l = s._f), (f = i(s, vg)), !l)) {
                          e.next = 17;
                          break;
                        }
                        return (
                          (h = d.array.has(l.name)),
                          (e.next = 11),
                          hb(s, c, x, r.shouldUseNativeValidation && !n, h)
                        );
                      case 11:
                        if (!(p = e.sent)[l.name]) {
                          e.next = 16;
                          break;
                        }
                        if (((o.valid = !1), !n)) {
                          e.next = 16;
                          break;
                        }
                        return e.abrupt("break", 23);
                      case 16:
                        !n &&
                          (Pg(p, l.name)
                            ? h
                              ? Jg(a.errors, p, l.name)
                              : qg(a.errors, l.name, p[l.name])
                            : pb(a.errors, l.name));
                      case 17:
                        if (((e.t2 = f), !e.t2)) {
                          e.next = 21;
                          break;
                        }
                        return (e.next = 21), L(f, n, o);
                      case 21:
                        e.next = 2;
                        break;
                      case 23:
                        return e.abrupt("return", o.valid);
                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          N = function (e, t) {
            return e && t && qg(c, e, t), !yb(j(), l);
          },
          O = function (e, t, n) {
            return $g(
              e,
              d,
              w({}, f.mount ? c : Cg(t) ? l : Hg(e) ? b({}, e, t) : t),
              n,
              t
            );
          },
          D = function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = Pg(u, e),
              a = t;
            if (r) {
              var i = r._f;
              i &&
                (!i.disabled && qg(c, e, Eb(t, i)),
                (a = nb(i.ref) && gg(t) ? "" : t),
                gb(i.ref)
                  ? o(i.ref.options).forEach(function (e) {
                      return (e.selected = a.includes(e.value));
                    })
                  : i.refs
                  ? mg(i.ref)
                    ? i.refs.length > 1
                      ? i.refs.forEach(function (e) {
                          return (
                            (!e.defaultChecked || !e.disabled) &&
                            (e.checked = Array.isArray(a)
                              ? !!a.find(function (t) {
                                  return t === e.value;
                                })
                              : a === e.value)
                          );
                        })
                      : i.refs[0] && (i.refs[0].checked = !!a)
                    : i.refs.forEach(function (e) {
                        return (e.checked = e.value === a);
                      })
                  : eb(i.ref)
                  ? (i.ref.value = "")
                  : ((i.ref.value = a),
                    i.ref.type ||
                      v.values.next({ name: e, values: w({}, c) })));
            }
            (n.shouldDirty || n.shouldTouch) &&
              C(e, a, n.shouldTouch, n.shouldDirty, !0),
              n.shouldValidate && I(e);
          },
          V = function e(t, n, r) {
            for (var a in n) {
              var o = n[a],
                i = "".concat(t, ".").concat(a),
                s = Pg(u, i);
              (!d.array.has(t) && mb(o) && (!s || s._f)) || yg(o)
                ? D(i, o, r)
                : e(i, o, r);
            }
          },
          M = function (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              o = Pg(u, e),
              i = d.array.has(e),
              s = Eg(t);
            qg(c, e, s),
              i
                ? (v.array.next({ name: e, values: w({}, c) }),
                  (p.isDirty || p.dirtyFields) &&
                    r.shouldDirty &&
                    v.state.next({
                      name: e,
                      dirtyFields: _b(l, c),
                      isDirty: N(e, s),
                    }))
                : !o || o._f || gg(s)
                ? D(e, s, r)
                : V(e, s, r),
              Zg(e, d) && v.state.next(w({}, a)),
              v.values.next({ name: e, values: w({}, c) }),
              !f.mount && n();
          },
          F = (function () {
            var t = s(
              m().mark(function t(n) {
                var o, i, s, l, f, h, y, g, b, T, R, N, O, D, V, M, F;
                return m().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((o = n.target),
                          (i = o.name),
                          (s = !0),
                          (l = Pg(u, i)),
                          (f = function () {
                            return o.type ? Tb(l._f) : wg(n);
                          }),
                          !l)
                        ) {
                          t.next = 47;
                          break;
                        }
                        if (
                          ((g = f()),
                          (b = n.type === Rg.BLUR || n.type === Rg.FOCUS_OUT),
                          (T =
                            (!Ab(l._f) &&
                              !r.resolver &&
                              !Pg(a.errors, i) &&
                              !l._f.deps) ||
                            Lb(b, Pg(a.touchedFields, i), a.isSubmitted, k, S)),
                          (R = Zg(i, d, b)),
                          qg(c, i, g),
                          b
                            ? (l._f.onBlur && l._f.onBlur(n), e && e(0))
                            : l._f.onChange && l._f.onChange(n),
                          (N = C(i, g, b, !1)),
                          (O = !Bg(N) || R),
                          !b &&
                            v.values.next({
                              name: i,
                              type: n.type,
                              values: w({}, c),
                            }),
                          !T)
                        ) {
                          t.next = 18;
                          break;
                        }
                        return (
                          p.isValid && _(),
                          t.abrupt(
                            "return",
                            O && v.state.next(w({ name: i }, R ? {} : N))
                          )
                        );
                      case 18:
                        if (
                          (!b && R && v.state.next(w({}, a)),
                          E(!0),
                          !r.resolver)
                        ) {
                          t.next = 32;
                          break;
                        }
                        return (t.next = 23), A([i]);
                      case 23:
                        (D = t.sent),
                          (V = D.errors),
                          (M = Rb(a.errors, u, i)),
                          (F = Rb(V, u, M.name || i)),
                          (h = F.error),
                          (i = F.name),
                          (y = Bg(V)),
                          (t.next = 46);
                        break;
                      case 32:
                        return (
                          (t.next = 34),
                          hb(l, c, x, r.shouldUseNativeValidation)
                        );
                      case 34:
                        if (
                          ((t.t0 = i),
                          (h = t.sent[t.t0]),
                          !(s = Number.isNaN(g) || g === Pg(c, i, g)))
                        ) {
                          t.next = 46;
                          break;
                        }
                        if (!h) {
                          t.next = 42;
                          break;
                        }
                        (y = !1), (t.next = 46);
                        break;
                      case 42:
                        if (!p.isValid) {
                          t.next = 46;
                          break;
                        }
                        return (t.next = 45), L(u, !0);
                      case 45:
                        y = t.sent;
                      case 46:
                        s && (l._f.deps && I(l._f.deps), P(i, y, h, N));
                      case 47:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          I = (function () {
            var e = s(
              m().mark(function e(t) {
                var n,
                  o,
                  i,
                  l,
                  c,
                  f = arguments;
                return m().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((n = f.length > 1 && void 0 !== f[1] ? f[1] : {}),
                          (l = Ug(t)),
                          E(!0),
                          !r.resolver)
                        ) {
                          e.next = 11;
                          break;
                        }
                        return (e.next = 6), R(Cg(t) ? t : l);
                      case 6:
                        (c = e.sent),
                          (o = Bg(c)),
                          (i = t
                            ? !l.some(function (e) {
                                return Pg(c, e);
                              })
                            : o),
                          (e.next = 21);
                        break;
                      case 11:
                        if (!t) {
                          e.next = 18;
                          break;
                        }
                        return (
                          (e.next = 14),
                          Promise.all(
                            l.map(
                              (function () {
                                var e = s(
                                  m().mark(function e(t) {
                                    var n;
                                    return m().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (n = Pg(u, t)),
                                              (e.next = 3),
                                              L(n && n._f ? b({}, t, n) : n)
                                            );
                                          case 3:
                                            return e.abrupt("return", e.sent);
                                          case 4:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                          )
                        );
                      case 14:
                        ((i = e.sent.every(Boolean)) || a.isValid) && _(),
                          (e.next = 21);
                        break;
                      case 18:
                        return (e.next = 20), L(u);
                      case 20:
                        i = o = e.sent;
                      case 21:
                        return (
                          v.state.next(
                            w(
                              w(
                                w(
                                  {},
                                  !Hg(t) || (p.isValid && o !== a.isValid)
                                    ? {}
                                    : { name: t }
                                ),
                                r.resolver || !t ? { isValid: o } : {}
                              ),
                              {},
                              { errors: a.errors, isValidating: !1 }
                            )
                          ),
                          n.shouldFocus &&
                            !i &&
                            Qg(
                              u,
                              function (e) {
                                return e && Pg(a.errors, e);
                              },
                              t ? l : d.mount
                            ),
                          e.abrupt("return", i)
                        );
                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          j = function (e) {
            var t = w(w({}, l), f.mount ? c : {});
            return Cg(e)
              ? t
              : Hg(e)
              ? Pg(t, e)
              : e.map(function (e) {
                  return Pg(t, e);
                });
          },
          B = function (e, t) {
            return {
              invalid: !!Pg((t || a).errors, e),
              isDirty: !!Pg((t || a).dirtyFields, e),
              isTouched: !!Pg((t || a).touchedFields, e),
              error: Pg((t || a).errors, e),
            };
          },
          z = function (e, t, n) {
            var r = (Pg(u, e, { _f: {} })._f || {}).ref;
            qg(a.errors, e, w(w({}, t), {}, { ref: r })),
              v.state.next({ name: e, errors: a.errors, isValid: !1 }),
              n && n.shouldFocus && r && r.focus && r.focus();
          },
          U = function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              o = y(e ? Ug(e) : d.mount);
            try {
              for (o.s(); !(t = o.n()).done; ) {
                var i = t.value;
                d.mount.delete(i),
                  d.array.delete(i),
                  n.keepValue || (pb(u, i), pb(c, i)),
                  !n.keepError && pb(a.errors, i),
                  !n.keepDirty && pb(a.dirtyFields, i),
                  !n.keepTouched && pb(a.touchedFields, i),
                  !r.shouldUnregister && !n.keepDefaultValue && pb(l, i);
              }
            } catch (s) {
              o.e(s);
            } finally {
              o.f();
            }
            v.values.next({ values: w({}, c) }),
              v.state.next(w(w({}, a), n.keepDirty ? { isDirty: N() } : {})),
              !n.keepIsValid && _();
          },
          W = function (e) {
            var t = e.disabled,
              n = e.name,
              r = e.field,
              a = e.fields;
            if (Ag(t)) {
              var o = t ? void 0 : Pg(c, n, Tb(r ? r._f : Pg(a, n)._f));
              qg(c, n, o), C(n, o, !1, !1, !0);
            }
          },
          H = function e(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              a = Pg(u, t),
              i = Ag(n.disabled);
            return (
              qg(
                u,
                t,
                w(
                  w({}, a || {}),
                  {},
                  {
                    _f: w(
                      w({}, a && a._f ? a._f : { ref: { name: t } }),
                      {},
                      { name: t, mount: !0 },
                      n
                    ),
                  }
                )
              ),
              d.mount.add(t),
              a
                ? W({ field: a, disabled: n.disabled, name: t })
                : T(t, !0, n.value),
              w(
                w(
                  w({}, i ? { disabled: n.disabled } : {}),
                  r.progressive
                    ? {
                        required: !!n.required,
                        min: Pb(n.min),
                        max: Pb(n.max),
                        minLength: Pb(n.minLength),
                        maxLength: Pb(n.maxLength),
                        pattern: Pb(n.pattern),
                      }
                    : {}
                ),
                {},
                {
                  name: t,
                  onChange: F,
                  onBlur: F,
                  ref: (function (e) {
                    function t(t) {
                      return e.apply(this, arguments);
                    }
                    return (
                      (t.toString = function () {
                        return e.toString();
                      }),
                      t
                    );
                  })(function (i) {
                    if (i) {
                      e(t, n), (a = Pg(u, t));
                      var s =
                          (Cg(i.value) &&
                            i.querySelectorAll &&
                            i.querySelectorAll("input,select,textarea")[0]) ||
                          i,
                        c = bb(s),
                        h = a._f.refs || [];
                      if (
                        c
                          ? h.find(function (e) {
                              return e === s;
                            })
                          : s === a._f.ref
                      )
                        return;
                      qg(u, t, {
                        _f: w(
                          w({}, a._f),
                          c
                            ? {
                                refs: [].concat(
                                  o(h.filter(Sb)),
                                  [s],
                                  o(Array.isArray(Pg(l, t)) ? [{}] : [])
                                ),
                                ref: { type: s.type, name: t },
                              }
                            : { ref: s }
                        ),
                      }),
                        T(t, !1, void 0, s);
                    } else (a = Pg(u, t, {}))._f && (a._f.mount = !1), (r.shouldUnregister || n.shouldUnregister) && (!kg(d.array, t) || !f.action) && d.unMount.add(t);
                  }),
                }
              )
            );
          },
          $ = function () {
            return (
              r.shouldFocusError &&
              Qg(
                u,
                function (e) {
                  return e && Pg(a.errors, e);
                },
                d.mount
              )
            );
          },
          K = function (e, t) {
            return (function () {
              var n = s(
                m().mark(function n(o) {
                  var i, s, l, f;
                  return m().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            (o &&
                              (o.preventDefault && o.preventDefault(),
                              o.persist && o.persist()),
                            (i = Eg(c)),
                            v.state.next({ isSubmitting: !0 }),
                            !r.resolver)
                          ) {
                            n.next = 13;
                            break;
                          }
                          return (n.next = 6), A();
                        case 6:
                          (s = n.sent),
                            (l = s.errors),
                            (f = s.values),
                            (a.errors = l),
                            (i = f),
                            (n.next = 15);
                          break;
                        case 13:
                          return (n.next = 15), L(u);
                        case 15:
                          if ((pb(a.errors, "root"), !Bg(a.errors))) {
                            n.next = 22;
                            break;
                          }
                          return (
                            v.state.next({ errors: {} }), (n.next = 20), e(i, o)
                          );
                        case 20:
                          n.next = 27;
                          break;
                        case 22:
                          if (!t) {
                            n.next = 25;
                            break;
                          }
                          return (n.next = 25), t(w({}, a.errors), o);
                        case 25:
                          $(), setTimeout($);
                        case 27:
                          v.state.next({
                            isSubmitted: !0,
                            isSubmitting: !1,
                            isSubmitSuccessful: Bg(a.errors),
                            submitCount: a.submitCount + 1,
                            errors: a.errors,
                          });
                        case 28:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (e) {
                return n.apply(this, arguments);
              };
            })();
          },
          G = function (e) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              o = e ? Eg(e) : l,
              i = Eg(o),
              s = e && !Bg(e) ? i : l;
            if ((r.keepDefaultValues || (l = o), !r.keepValues)) {
              if (r.keepDirtyValues || g) {
                var h,
                  m = y(d.mount);
                try {
                  for (m.s(); !(h = m.n()).done; ) {
                    var b = h.value;
                    Pg(a.dirtyFields, b) ? qg(s, b, Pg(c, b)) : M(b, Pg(s, b));
                  }
                } catch (C) {
                  m.e(C);
                } finally {
                  m.f();
                }
              } else {
                if (_g && Cg(e)) {
                  var S,
                    k = y(d.mount);
                  try {
                    for (k.s(); !(S = k.n()).done; ) {
                      var x = S.value,
                        _ = Pg(u, x);
                      if (_ && _._f) {
                        var E = Array.isArray(_._f.refs)
                          ? _._f.refs[0]
                          : _._f.ref;
                        if (nb(E)) {
                          var T = E.closest("form");
                          if (T) {
                            T.reset();
                            break;
                          }
                        }
                      }
                    }
                  } catch (C) {
                    k.e(C);
                  } finally {
                    k.f();
                  }
                }
                u = {};
              }
              (c = t.shouldUnregister
                ? r.keepDefaultValues
                  ? Eg(l)
                  : {}
                : Eg(s)),
                v.array.next({ values: w({}, s) }),
                v.values.next({ values: w({}, s) });
            }
            (d = {
              mount: new Set(),
              unMount: new Set(),
              array: new Set(),
              watch: new Set(),
              watchAll: !1,
              focus: "",
            }),
              !f.mount && n(),
              (f.mount = !p.isValid || !!r.keepIsValid),
              (f.watch = !!t.shouldUnregister),
              v.state.next({
                submitCount: r.keepSubmitCount ? a.submitCount : 0,
                isDirty: r.keepDirty
                  ? a.isDirty
                  : !(!r.keepDefaultValues || yb(e, l)),
                isSubmitted: !!r.keepIsSubmitted && a.isSubmitted,
                dirtyFields: r.keepDirtyValues
                  ? a.dirtyFields
                  : r.keepDefaultValues && e
                  ? _b(l, e)
                  : {},
                touchedFields: r.keepTouched ? a.touchedFields : {},
                errors: r.keepErrors ? a.errors : {},
                isSubmitSuccessful:
                  !!r.keepIsSubmitSuccessful && a.isSubmitSuccessful,
                isSubmitting: !1,
              });
          },
          q = function (e, t) {
            return G(tb(e) ? e(c) : e, t);
          };
        return {
          control: {
            register: H,
            unregister: U,
            getFieldState: B,
            handleSubmit: K,
            setError: z,
            _executeSchema: A,
            _getWatch: O,
            _getDirty: N,
            _updateValid: _,
            _removeUnmounted: function () {
              var e,
                t = y(d.unMount);
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  var n = e.value,
                    r = Pg(u, n);
                  r &&
                    (r._f.refs
                      ? r._f.refs.every(function (e) {
                          return !Sb(e);
                        })
                      : !Sb(r._f.ref)) &&
                    U(n);
                }
              } catch (a) {
                t.e(a);
              } finally {
                t.f();
              }
              d.unMount = new Set();
            },
            _updateFieldArray: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 ? arguments[3] : void 0,
                o =
                  !(arguments.length > 4 && void 0 !== arguments[4]) ||
                  arguments[4],
                i =
                  !(arguments.length > 5 && void 0 !== arguments[5]) ||
                  arguments[5];
              if (r && n) {
                if (((f.action = !0), i && Array.isArray(Pg(u, e)))) {
                  var s = n(Pg(u, e), r.argA, r.argB);
                  o && qg(u, e, s);
                }
                if (i && Array.isArray(Pg(a.errors, e))) {
                  var d = n(Pg(a.errors, e), r.argA, r.argB);
                  o && qg(a.errors, e, d), Nb(a.errors, e);
                }
                if (
                  p.touchedFields &&
                  i &&
                  Array.isArray(Pg(a.touchedFields, e))
                ) {
                  var h = n(Pg(a.touchedFields, e), r.argA, r.argB);
                  o && qg(a.touchedFields, e, h);
                }
                p.dirtyFields && (a.dirtyFields = _b(l, c)),
                  v.state.next({
                    name: e,
                    isDirty: N(e, t),
                    dirtyFields: a.dirtyFields,
                    errors: a.errors,
                    isValid: a.isValid,
                  });
              } else qg(c, e, t);
            },
            _updateDisabledField: W,
            _getFieldArray: function (e) {
              return Tg(
                Pg(f.mount ? c : l, e, t.shouldUnregister ? Pg(l, e, []) : [])
              );
            },
            _reset: G,
            _resetDefaultValues: function () {
              return (
                tb(r.defaultValues) &&
                r.defaultValues().then(function (e) {
                  q(e, r.resetOptions), v.state.next({ isLoading: !1 });
                })
              );
            },
            _updateFormState: function (e) {
              a = w(w({}, a), e);
            },
            _subjects: v,
            _proxyFormState: p,
            get _fields() {
              return u;
            },
            get _formValues() {
              return c;
            },
            get _state() {
              return f;
            },
            set _state(e) {
              f = e;
            },
            get _defaultValues() {
              return l;
            },
            get _names() {
              return d;
            },
            set _names(e) {
              d = e;
            },
            get _formState() {
              return a;
            },
            set _formState(e) {
              a = e;
            },
            get _options() {
              return r;
            },
            set _options(e) {
              r = w(w({}, r), e);
            },
          },
          trigger: I,
          register: H,
          handleSubmit: K,
          watch: function (e, t) {
            return tb(e)
              ? v.values.subscribe({
                  next: function (n) {
                    return e(O(void 0, t), n);
                  },
                })
              : O(e, t, !0);
          },
          setValue: M,
          getValues: j,
          reset: q,
          resetField: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            Pg(u, e) &&
              (Cg(t.defaultValue)
                ? M(e, Pg(l, e))
                : (M(e, t.defaultValue), qg(l, e, t.defaultValue)),
              t.keepTouched || pb(a.touchedFields, e),
              t.keepDirty ||
                (pb(a.dirtyFields, e),
                (a.isDirty = t.defaultValue ? N(e, Pg(l, e)) : N())),
              t.keepError || (pb(a.errors, e), p.isValid && _()),
              v.state.next(w({}, a)));
          },
          clearErrors: function (e) {
            e &&
              Ug(e).forEach(function (e) {
                return pb(a.errors, e);
              }),
              v.state.next({ errors: e ? a.errors : {} });
          },
          unregister: U,
          setError: z,
          setFocus: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = Pg(u, e),
              r = n && n._f;
            if (r) {
              var a = r.refs ? r.refs[0] : r.ref;
              a.focus && (a.focus(), t.shouldSelect && a.select());
            }
          },
          getFieldState: B,
        };
      }
      function Vb() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = P.useRef(),
          n = P.useRef(),
          r = l(
            P.useState({
              isDirty: !1,
              isValidating: !1,
              isLoading: tb(e.defaultValues),
              isSubmitted: !1,
              isSubmitting: !1,
              isSubmitSuccessful: !1,
              isValid: !1,
              submitCount: 0,
              dirtyFields: {},
              touchedFields: {},
              errors: {},
              defaultValues: tb(e.defaultValues) ? void 0 : e.defaultValues,
            }),
            2
          ),
          a = r[0],
          o = r[1];
        t.current ||
          (t.current = w(
            w(
              {},
              Db(e, function () {
                return o(function (e) {
                  return w({}, e);
                });
              })
            ),
            {},
            { formState: a }
          ));
        var i = t.current.control;
        return (
          (i._options = e),
          Wg({
            subject: i._subjects.state,
            next: function (e) {
              zg(e, i._proxyFormState, i._updateFormState, !0) &&
                o(w({}, i._formState));
            },
          }),
          P.useEffect(
            function () {
              e.values && !yb(e.values, n.current)
                ? (i._reset(e.values, i._options.resetOptions),
                  (n.current = e.values))
                : i._resetDefaultValues();
            },
            [e.values, i]
          ),
          P.useEffect(function () {
            i._state.mount || (i._updateValid(), (i._state.mount = !0)),
              i._state.watch &&
                ((i._state.watch = !1),
                i._subjects.state.next(w({}, i._formState))),
              i._removeUnmounted();
          }),
          (t.current.formState = jg(a, i)),
          t.current
        );
      }
      var Mb,
        Fb,
        Ib,
        jb = n(184),
        Bb = Oc.form(
          Mb ||
            (Mb = Vc([
              "\n  display: flex;\n  margin-top: 20px;\n  width: 50vw;\n",
            ]))
        ),
        zb = Oc.input(
          Fb ||
            (Fb = Vc([
              "\n  flex: 1;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin-right: 10px;\n  font-size: 16px;\n",
            ]))
        ),
        Ub = Oc.button(
          Ib ||
            (Ib = Vc([
              "\n  padding: 10px 20px;\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 16px;\n\n  &:hover {\n    background-color: #45a049;\n  }\n",
            ]))
        );
      var Wb,
        Hb,
        $b = function () {
          var e = Gu(jc),
            t = $u(Ic),
            n = Vb(),
            r = n.register,
            a = n.handleSubmit,
            i = n.setValue;
          return (0, jb.jsxs)(Bb, {
            onSubmit: a(function (n) {
              var r = n.toDo;
              e(function (e) {
                return [{ text: r, id: Date.now(), category: t }].concat(o(e));
              }),
                i("toDo", "");
            }),
            children: [
              (0, jb.jsx)(
                zb,
                w(
                  w({}, r("toDo", { required: "Please write a To Do" })),
                  {},
                  { placeholder: "Write a to do" }
                )
              ),
              (0, jb.jsx)(Ub, { type: "submit", children: "Add" }),
            ],
          });
        },
        Kb = Oc.li(
          Wb ||
            (Wb = Vc([
              "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  margin: 10px 0;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 50vw;\n",
            ]))
        ),
        Gb = Oc.button(
          Hb ||
            (Hb = Vc([
              "\n  margin: 3px;\n  padding: 8px 16px;\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  width: 80px;\n  &:hover {\n    background-color: #45a049;\n  }\n",
            ]))
        );
      var qb,
        Yb,
        Qb,
        Xb,
        Zb = function (e) {
          var t = e.text,
            n = e.category,
            r = e.id,
            a = Gu(jc),
            i = $u(Fc),
            u = function (e) {
              var n = e.currentTarget.name;
              a(function (e) {
                var a = e.findIndex(function (e) {
                    return e.id === r;
                  }),
                  i = { text: t, id: r, category: n };
                return [].concat(o(e.slice(0, a)), [i], o(e.slice(a + 1)));
              });
            };
          return (0, jb.jsxs)(Kb, {
            children: [
              (0, jb.jsx)("span", { children: t }),
              (0, jb.jsxs)("div", {
                children: [
                  i
                    .filter(function (e) {
                      return n !== e;
                    })
                    .map(function (e) {
                      return (0,
                      jb.jsx)(Gb, { onClick: u, name: e, children: e }, e);
                    }),
                  (0, jb.jsx)(Gb, {
                    onClick: function () {
                      a(function (e) {
                        var t = e.findIndex(function (e) {
                          return e.id === r;
                        });
                        return (
                          console.log(e),
                          console.log(r),
                          console.log(t),
                          [].concat(o(e.slice(0, t)), o(e.slice(t + 1)))
                        );
                      });
                    },
                    children: "Delete",
                  }),
                ],
              }),
            ],
          });
        },
        Jb = Oc.form(
          qb ||
            (qb = Vc([
              "\n  margin-top: 20px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n",
            ]))
        ),
        eS = Oc.input(
          Yb ||
            (Yb = Vc([
              "\n  margin-bottom: 10px;\n  padding: 10px;\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 16px;\n",
            ]))
        ),
        tS = Oc.h1(
          Qb || (Qb = Vc(["\n  font-size: 24px;\n  margin-bottom: 20px;\n"]))
        ),
        nS = Oc.button(
          Xb ||
            (Xb = Vc([
              "\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 20px;\n  cursor: pointer;\n  font-size: 16px;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: #45a049;\n  }\n",
            ]))
        );
      var rS,
        aS,
        oS,
        iS,
        uS,
        sS,
        lS = function () {
          var e = Gu(Fc),
            t = Vb(),
            n = t.register,
            r = t.handleSubmit;
          return (0, jb.jsxs)(Jb, {
            onSubmit: r(function (t) {
              var n = t.newCategory;
              e(function (e) {
                return [].concat(o(e), [n]);
              });
            }),
            children: [
              (0, jb.jsx)(tS, { children: "New Category" }),
              (0, jb.jsx)(
                eS,
                w(
                  w(
                    {},
                    n("newCategory", { required: "Please write a Category" })
                  ),
                  {},
                  { type: "text", placeholder: "Enter Category Name" }
                )
              ),
              (0, jb.jsx)(nS, { children: "add" }),
            ],
          });
        },
        cS = Oc.div(
          rS ||
            (rS = Vc([
              "\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  align-items: center;\n",
            ]))
        ),
        fS = Oc.h1(
          aS ||
            (aS = Vc([
              "\n  font-size: 100px;\n  font-weight: bold;\n  width: 50vw;\n  text-align: center;\n",
            ]))
        ),
        dS = Oc.div(
          oS ||
            (oS = Vc([
              "\n  width: 50vw;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 15px;\n  margin: 20px;\n",
            ]))
        ),
        hS = Oc.span(
          iS ||
            (iS = Vc([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 12px;\n  border: 1px solid;\n  text-align: center;\n  background-color: ",
              ";\n  color: white;\n  border-radius: 8px;\n  font-weight: bold;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",
              ";\n  }\n\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);\n",
            ])),
          function (e) {
            return e.selected ? "#59656d" : "#2f3640";
          },
          function (e) {
            return e.selected ? "#4c565e" : "#1e2329";
          }
        ),
        pS = Oc(dg.div)(
          uS ||
            (uS = Vc([
              "\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n",
            ]))
        ),
        vS = Oc.button(
          sS ||
            (sS = Vc([
              "\n  border-radius: 8px;\n  padding: 12px;\n  cursor: pointer;\n",
            ]))
        ),
        mS = {
          hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
          visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
        };
      var yS,
        gS = function () {
          var e = $u(Bc),
            t = l(Ku(Ic), 2),
            n = t[0],
            r = t[1],
            a = $u(Fc),
            o = function (e) {
              r(e.currentTarget.textContent);
            },
            i = l(P.useState(!1), 2),
            u = i[0],
            s = i[1];
          return (0, jb.jsxs)(cS, {
            children: [
              u
                ? (0, jb.jsx)(pS, {
                    variants: mS,
                    initial: "hidden",
                    animate: "visible",
                    exit: "exit",
                    onClick: function () {
                      s(!u);
                    },
                    children: (0, jb.jsx)(dg.div, {
                      onClick: function (e) {
                        return e.stopPropagation();
                      },
                      children: (0, jb.jsx)(lS, {}),
                    }),
                  })
                : null,
              (0, jb.jsx)(fS, { children: "To Dos" }),
              (0, jb.jsxs)(dS, {
                children: [
                  null === a || void 0 === a
                    ? void 0
                    : a.map(function (e) {
                        return (0,
                        jb.jsx)(hS, { selected: n === e, onClick: o, children: e }, e);
                      }),
                  (0, jb.jsx)(vS, {
                    onClick: function () {
                      s(!u);
                    },
                    children: " New ",
                  }),
                ],
              }),
              (0, jb.jsx)($b, {}),
              null === e || void 0 === e
                ? void 0
                : e.map(function (e) {
                    return (0, jb.jsx)(Zb, w({}, e), e.id);
                  }),
            ],
          });
        },
        bS = (function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          var r = Rc.apply(void 0, Yu([e], t, !1)),
            a = "sc-global-".concat(ml(JSON.stringify(r))),
            o = new Dc(r, a),
            i = function (e) {
              var t = hc(),
                n = P.useContext(_c),
                r = P.useRef(t.styleSheet.allocateGSInstance(a)).current;
              return (
                t.styleSheet.server && u(r, e, t.styleSheet, n, t.stylis),
                P.useLayoutEffect(
                  function () {
                    if (!t.styleSheet.server)
                      return (
                        u(r, e, t.styleSheet, n, t.stylis),
                        function () {
                          return o.removeStyles(r, t.styleSheet);
                        }
                      );
                  },
                  [r, e, t.styleSheet, n, t.stylis]
                ),
                null
              );
            };
          function u(e, t, n, r, a) {
            if (o.isStatic) o.renderStyles(e, nl, n, a);
            else {
              var u = qu(qu({}, t), { theme: ol(t, r, i.defaultProps) });
              o.renderStyles(e, u, n, a);
            }
          }
          return P.memo(i);
        })(
          yS ||
            (yS = Vc([
              "\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",
              ";\n  color:",
              ";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n",
            ])),
          function (e) {
            return e.theme.bgColor;
          },
          function (e) {
            return e.theme.textColor;
          }
        );
      var SS = function () {
          return (0, jb.jsxs)(jb.Fragment, {
            children: [(0, jb.jsx)(bS, {}), (0, jb.jsx)(gS, {})],
          });
        },
        wS = document.getElementById("root");
      if (!wS) throw new Error("Failed to find the root element");
      e.createRoot(wS).render(
        (0, jb.jsx)(Uu, {
          children: (0, jb.jsx)(Ec, {
            theme: {
              bgColor: "#2f3640",
              textColor: "white",
              accentColor: "#9c88ff",
              cardBgColor: "transparent",
            },
            children: (0, jb.jsx)(SS, {}),
          }),
        })
      );
    })();
})();
//# sourceMappingURL=main.28d7b702.js.map
