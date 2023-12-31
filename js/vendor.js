!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function () {
    return i = {
        686: function (t, e, i) {
            "use strict";
            i.d(e, {
                default: function () {
                    return f
                }
            });
            var e = i(279), r = i.n(e), e = i(370), a = i.n(e), e = i(817), o = i.n(e);

            function s(t) {
                try {
                    document.execCommand(t)
                } catch (t) {
                }
            }

            function l(t) {
                return t = o()(t), s("cut"), t
            }

            function n(t, e) {
                var i, n;
                i = t, n = "rtl" === document.documentElement.getAttribute("dir"), (t = document.createElement("textarea")).style.fontSize = "12pt", t.style.border = "0", t.style.padding = "0", t.style.margin = "0", t.style.position = "absolute", t.style[n ? "right" : "left"] = "-9999px", n = window.pageYOffset || document.documentElement.scrollTop, t.style.top = "".concat(n, "px"), t.setAttribute("readonly", ""), t.value = i;
                return e.container.appendChild(t), e = o()(t), s("copy"), t.remove(), e
            }

            function c(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {container: document.body},
                    i = "";
                return "string" == typeof t ? i = n(t, e) : t instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == t ? void 0 : t.type) ? i = n(t.value, e) : (i = o()(t), s("copy")), i
            }

            function d(t) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function h(t) {
                return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function u(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function p(t, e) {
                return (p = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function m(t) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function g(t, e) {
                if (t = "data-clipboard-".concat(t), e.hasAttribute(t)) return e.getAttribute(t)
            }

            var f = function () {
                var t = s, e = r();
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && p(t, e);
                i = s, n = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (t) {
                        return !1
                    }
                }();
                var i, n, o = function () {
                    var t = m(i),
                        e = n ? (e = m(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments),
                        t = this;
                    if (!e || "object" !== h(e) && "function" != typeof e) {
                        if (void 0 !== t) return t;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }
                    return e
                };

                function s(t, e) {
                    var i;
                    if (this instanceof s) return (i = o.call(this)).resolveOptions(e), i.listenClick(t), i;
                    throw new TypeError("Cannot call a class as a function")
                }

                return t = [{
                    key: "copy", value: function (t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {container: document.body};
                        return c(t, e)
                    }
                }, {key: "cut", value: l}, {
                    key: "isSupported", value: function () {
                        var t = "string" == typeof (t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]) ? [t] : t,
                            e = !!document.queryCommandSupported;
                        return t.forEach(function (t) {
                            e = e && !!document.queryCommandSupported(t)
                        }), e
                    }
                }], u((e = s).prototype, [{
                    key: "resolveOptions", value: function () {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === h(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick", value: function (t) {
                        var e = this;
                        this.listener = a()(t, "click", function (t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick", value: function (t) {
                        var e = t.delegateTarget || t.currentTarget, i = this.action(e) || "copy", t = function () {
                            var t = void 0 === (i = (n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).action) ? "copy" : i,
                                e = n.container, i = n.target, n = n.text;
                            if ("copy" !== t && "cut" !== t) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                            if (void 0 !== i) {
                                if (!i || "object" !== d(i) || 1 !== i.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === t && i.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === t && (i.hasAttribute("readonly") || i.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                            }
                            return n ? c(n, {container: e}) : i ? "cut" === t ? l(i) : c(i, {container: e}) : void 0
                        }({action: i, container: this.container, target: this.target(e), text: this.text(e)});
                        this.emit(t ? "success" : "error", {
                            action: i,
                            text: t,
                            trigger: e,
                            clearSelection: function () {
                                e && e.focus(), window.getSelection().removeAllRanges()
                            }
                        })
                    }
                }, {
                    key: "defaultAction", value: function (t) {
                        return g("action", t)
                    }
                }, {
                    key: "defaultTarget", value: function (t) {
                        if (t = g("target", t)) return document.querySelector(t)
                    }
                }, {
                    key: "defaultText", value: function (t) {
                        return g("text", t)
                    }
                }, {
                    key: "destroy", value: function () {
                        this.listener.destroy()
                    }
                }]), u(e, t), s
            }()
        }, 828: function (t) {
            var e;
            "undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector), t.exports = function (t, e) {
                for (; t && 9 !== t.nodeType;) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode
                }
            }
        }, 438: function (t, e, i) {
            var r = i(828);

            function s(t, e, i, n, o) {
                var s = function (e, i, t, n) {
                    return function (t) {
                        t.delegateTarget = r(t.target, i), t.delegateTarget && n.call(e, t)
                    }
                }.apply(this, arguments);
                return t.addEventListener(i, s, o), {
                    destroy: function () {
                        t.removeEventListener(i, s, o)
                    }
                }
            }

            t.exports = function (t, e, i, n, o) {
                return "function" == typeof t.addEventListener ? s.apply(null, arguments) : "function" == typeof i ? s.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
                    return s(t, e, i, n, o)
                }))
            }
        }, 879: function (t, i) {
            i.node = function (t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, i.nodeList = function (t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || i.node(t[0]))
            }, i.string = function (t) {
                return "string" == typeof t || t instanceof String
            }, i.fn = function (t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        }, 370: function (t, e, i) {
            var c = i(879), d = i(438);
            t.exports = function (t, e, i) {
                if (!t && !e && !i) throw new Error("Missing required arguments");
                if (!c.string(e)) throw new TypeError("Second argument must be a String");
                if (!c.fn(i)) throw new TypeError("Third argument must be a Function");
                if (c.node(t)) return (r = t).addEventListener(a = e, l = i), {
                    destroy: function () {
                        r.removeEventListener(a, l)
                    }
                };
                if (c.nodeList(t)) return n = t, o = e, s = i, Array.prototype.forEach.call(n, function (t) {
                    t.addEventListener(o, s)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(n, function (t) {
                            t.removeEventListener(o, s)
                        })
                    }
                };
                if (c.string(t)) return d(document.body, t, e, i);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                var n, o, s, r, a, l
            }
        }, 817: function (t) {
            t.exports = function (t) {
                var e,
                    i = "SELECT" === t.nodeName ? (t.focus(), t.value) : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName ? ((e = t.hasAttribute("readonly")) || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), e || t.removeAttribute("readonly"), t.value) : (t.hasAttribute("contenteditable") && t.focus(), i = window.getSelection(), (e = document.createRange()).selectNodeContents(t), i.removeAllRanges(), i.addRange(e), i.toString());
                return i
            }
        }, 279: function (t) {
            function e() {
            }

            e.prototype = {
                on: function (t, e, i) {
                    var n = this.e || (this.e = {});
                    return (n[t] || (n[t] = [])).push({fn: e, ctx: i}), this
                }, once: function (t, e, i) {
                    var n = this;

                    function o() {
                        n.off(t, o), e.apply(i, arguments)
                    }

                    return o._ = e, this.on(t, o, i)
                }, emit: function (t) {
                    for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, o = i.length; n < o; n++) i[n].fn.apply(i[n].ctx, e);
                    return this
                }, off: function (t, e) {
                    var i = this.e || (this.e = {}), n = i[t], o = [];
                    if (n && e) for (var s = 0, r = n.length; s < r; s++) n[s].fn !== e && n[s].fn._ !== e && o.push(n[s]);
                    return o.length ? i[t] = o : delete i[t], this
                }
            }, t.exports = e, t.exports.TinyEmitter = e
        }
    }, o = {}, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, {a: e}), e
    }, n.d = function (t, e) {
        for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {enumerable: !0, get: e[i]})
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n(686).default;

    function n(t) {
        var e;
        return (o[t] || (e = o[t] = {exports: {}}, i[t](e, e.exports, n), e)).exports
    }

    var i, o
}), function (t, e) {
    "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
    let i = t.console, c = void 0 === i ? function () {
    } : function (t) {
        i.error(t)
    };
    return function (a, o, l) {
        (l = l || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function (t) {
            t && (this.options = Object.assign(this.options || {}, t))
        }), l.fn[a] = function (t, ...e) {
            if ("string" != typeof t) return n = t, this.each(function (t, e) {
                let i = l.data(e, a);
                i ? (i.option(n), i._init()) : (i = new o(e, n), l.data(e, a, i))
            }), this;
            {
                var i = this, s = t, r = e;
                let n, o = `$().${a}("${s}")`;
                return i.each(function (t, e) {
                    var i, e = l.data(e, a);
                    e ? (i = e[s]) && "_" != s.charAt(0) ? (i = i.apply(e, r), n = void 0 === n ? i : n) : c(o + " is not a valid method") : c(a + " not initialized. Cannot call method " + o)
                }), void 0 !== n ? n : i
            }
            var n
        })
    }
}), function (t, e) {
    "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {
    }

    var e = t.prototype;
    return e.on = function (t, e) {
        var i;
        return t && e && ((i = (i = this._events = this._events || {})[t] = i[t] || []).includes(e) || i.push(e)), this
    }, e.once = function (t, e) {
        var i;
        return t && e && (this.on(t, e), ((i = this._onceEvents = this._onceEvents || {})[t] = i[t] || {})[e] = !0), this
    }, e.off = function (t, e) {
        t = this._events && this._events[t];
        return t && t.length && -1 != (e = t.indexOf(e)) && t.splice(e, 1), this
    }, e.emitEvent = function (t, e) {
        let i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            var n, o = this._onceEvents && this._onceEvents[t];
            for (n of i) o && o[n] && (this.off(t, n), delete o[n]), n.apply(this, e)
        }
        return this
    }, e.allOff = function () {
        return delete this._events, delete this._onceEvents, this
    }, t
}), function (t, e) {
    "object" == typeof module && module.exports ? module.exports = e(t) : t.fizzyUIUtils = e(t)
}(this, function (e) {
    let n = {
        extend: function (t, e) {
            return Object.assign(t, e)
        }, modulo: function (t, e) {
            return (t % e + e) % e
        }, makeArray: function (t) {
            return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? [...t] : [t]
        }, removeFrom: function (t, e) {
            e = t.indexOf(e);
            -1 != e && t.splice(e, 1)
        }, getParent: function (t, e) {
            for (; t.parentNode && t != document.body;) if ((t = t.parentNode).matches(e)) return t
        }, getQueryElement: function (t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, handleEvent: function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, filterFindElements: function (t, i) {
            return (t = n.makeArray(t)).filter(t => t instanceof HTMLElement).reduce((t, e) => {
                if (!i) return t.push(e), t;
                e.matches(i) && t.push(e);
                e = e.querySelectorAll(i);
                return t.concat(...e)
            }, [])
        }, debounceMethod: function (t, e, i) {
            i = i || 100;
            let n = t.prototype[e], o = e + "Timeout";
            t.prototype[e] = function () {
                clearTimeout(this[o]);
                let t = arguments;
                this[o] = setTimeout(() => {
                    n.apply(this, t), delete this[o]
                }, i)
            }
        }, docReady: function (t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, toDashed: function (t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        }
    }, l = e.console;
    return n.htmlInit = function (r, a) {
        n.docReady(function () {
            let o = "data-" + n.toDashed(a), t = document.querySelectorAll(`[${o}]`), s = e.jQuery;
            [...t].forEach(t => {
                let e, i = t.getAttribute(o);
                try {
                    e = i && JSON.parse(i)
                } catch (e) {
                    return void (l && l.error(`Error parsing ${o} on ${t.className}: ` + e))
                }
                var n = new r(t, e);
                s && s.data(t, a, n)
            })
        })
    }, n
}), function (t, e) {
    "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("fizzy-ui-utils")) : t.InfiniteScroll = e(t, t.EvEmitter, t.fizzyUIUtils)
}(window, function (e, t, o) {
    let s = e.jQuery, r = {};

    function a(t, e) {
        var i, n = o.getQueryElement(t);
        if (n) {
            if ((t = n).infiniteScrollGUID) return (i = r[t.infiniteScrollGUID]).option(e), i;
            this.element = t, this.options = {...a.defaults}, this.option(e), s && (this.$element = s(this.element)), this.create()
        } else console.error("Bad element for InfiniteScroll: " + (n || t))
    }

    a.defaults = {}, a.create = {}, a.destroy = {};
    var i = a.prototype;
    Object.assign(i, t.prototype);
    let n = 0, l = (i.create = function () {
            var t = this.guid = ++n;
            if (this.element.infiniteScrollGUID = t, (r[t] = this).pageIndex = 1, this.loadCount = 0, this.updateGetPath(), this.getPath && this.getPath()) for (var e in this.updateGetAbsolutePath(), this.log("initialized", [this.element.className]), this.callOnInit(), a.create) a.create[e].call(this); else console.error("Disabling InfiniteScroll")
        }, i.option = function (t) {
            Object.assign(this.options, t)
        }, i.callOnInit = function () {
            var t = this.options.onInit;
            t && t.call(this, this)
        }, i.dispatchEvent = function (e, i, n) {
            this.log(e, n);
            var o = i ? [i].concat(n) : n;
            if (this.emitEvent(e, o), s && this.$element) {
                let t = e += ".infiniteScroll";
                i && ((o = s.Event(i)).type = e, t = o), this.$element.trigger(t, n)
            }
        }, {
            initialized: t => "on " + t,
            request: t => "URL: " + t,
            load: (t, e) => `${t.title || ""}. URL: ` + e,
            error: (t, e) => t + ". URL: " + e,
            append: (t, e, i) => i.length + " items. URL: " + e,
            last: (t, e) => "URL: " + e,
            history: (t, e) => "URL: " + e,
            pageIndex: function (t, e) {
                return `current page determined to be: ${t} from ` + e
            }
        }), c = (i.log = function (i, n) {
            if (this.options.debug) {
                let t = "[InfiniteScroll] " + i, e = l[i];
                e && (t += ". " + e.apply(this, n)), console.log(t)
            }
        }, i.updateMeasurements = function () {
            this.windowHeight = e.innerHeight;
            var t = this.element.getBoundingClientRect();
            this.top = t.top + e.scrollY
        }, i.updateScroller = function () {
            var t = this.options.elementScroll;
            if (t) {
                if (this.scroller = !0 === t ? this.element : o.getQueryElement(t), !this.scroller) throw new Error("Unable to find elementScroll: " + t)
            } else this.scroller = e
        }, i.updateGetPath = function () {
            var t, e = this.options.path;
            e ? "function" != (t = typeof e) ? "string" == t && e.match("{{#}}") ? this.updateGetPathTemplate(e) : this.updateGetPathSelector(e) : this.getPath = e : console.error("InfiniteScroll path option required. Set as: " + e)
        }, i.updateGetPathTemplate = function (e) {
            this.getPath = () => {
                var t = this.pageIndex + 1;
                return e.replace("{{#}}", t)
            };
            var t = e.replace(/(\\\?|\?)/, "\\?").replace("{{#}}", "(\\d\\d?\\d?)"), t = new RegExp(t),
                t = location.href.match(t);
            t && (this.pageIndex = parseInt(t[1], 10), this.log("pageIndex", [this.pageIndex, "template string"]))
        }, [/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/, /^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/, /(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/]),
        d = a.getPathParts = function (t) {
            if (t) for (var e of c) {
                var i, n, e = t.match(e);
                if (e) return [, e, i, n] = e, {begin: e, index: i, end: n}
            }
        };
    i.updateGetPathSelector = function (t) {
        var e = document.querySelector(t);
        if (e) {
            var e = e.getAttribute("href"), n = d(e);
            if (n) {
                let {begin: t, index: e, end: i} = n;
                this.isPathSelector = !0, this.getPath = () => t + (this.pageIndex + 1) + i, this.pageIndex = parseInt(e, 10) - 1, this.log("pageIndex", [this.pageIndex, "next link"])
            } else console.error("InfiniteScroll unable to parse next link href: " + e)
        } else console.error("Bad InfiniteScroll path option. Next link not found: " + t)
    }, i.updateGetAbsolutePath = function () {
        var o = this.getPath();
        if (o.match(/^http/) || o.match(/^\//)) this.getAbsolutePath = this.getPath; else {
            let t = location["pathname"], e = o.match(/^\?/), i = t.substring(0, t.lastIndexOf("/")),
                n = e ? t : i + "/";
            this.getAbsolutePath = () => n + this.getPath()
        }
    }, a.create.hideNav = function () {
        var t = o.getQueryElement(this.options.hideNav);
        t && (t.style.display = "none", this.nav = t)
    }, a.destroy.hideNav = function () {
        this.nav && (this.nav.style.display = "")
    }, i.destroy = function () {
        for (var t in this.allOff(), a.destroy) a.destroy[t].call(this);
        delete this.element.infiniteScrollGUID, delete r[this.guid], s && this.$element && s.removeData(this.element, "infiniteScroll")
    }, a.throttle = function (n, o) {
        let s, r;
        return o = o || 200, function () {
            let t = +new Date, e = arguments, i = () => {
                s = t, n.apply(this, e)
            };
            s && t < s + o ? (clearTimeout(r), r = setTimeout(i, o)) : i()
        }
    }, a.data = function (t) {
        t = (t = o.getQueryElement(t)) && t.infiniteScrollGUID;
        return t && r[t]
    }, a.setJQuery = function (t) {
        s = t
    }, o.htmlInit(a, "infinite-scroll"), i._init = function () {
    };
    t = e.jQueryBridget;
    return s && t && t("infiniteScroll", a, s), a
}), function (t, e) {
    "object" == typeof module && module.exports ? module.exports = e(t, require("./core")) : e(t, t.InfiniteScroll)
}(window, function (e, o) {
    var t = o.prototype;
    Object.assign(o.defaults, {
        loadOnScroll: !0,
        checkLastPage: !0,
        responseBody: "text",
        domParseResponse: !0
    }), o.create.pageLoad = function () {
        this.canLoad = !0, this.on("scrollThreshold", this.onScrollThresholdLoad), this.on("load", this.checkLastPage), this.options.outlayer && this.on("append", this.onAppendOutlayer)
    }, t.onScrollThresholdLoad = function () {
        this.options.loadOnScroll && this.loadNextPage()
    };
    let s = new DOMParser;

    function d(t) {
        var e = document.createDocumentFragment();
        return t && e.append(...t), e
    }

    return t.loadNextPage = function () {
        if (!this.isLoading && this.canLoad) {
            let {responseBody: i, domParseResponse: n, fetchOptions: t} = this.options, o = this.getAbsolutePath();
            this.isLoading = !0, "function" == typeof t && (t = t());
            var e = fetch(o, t).then(e => {
                var t;
                return e.ok ? e[i]().then(t => ("text" == i && n && (t = s.parseFromString(t, "text/html")), 204 == e.status ? (this.lastPageReached(t, o), {
                    body: t,
                    response: e
                }) : this.onPageLoad(t, o, e))) : (t = new Error(e.statusText), this.onPageError(t, o, e), {response: e})
            }).catch(t => {
                this.onPageError(t, o)
            });
            return this.dispatchEvent("request", null, [o, e]), e
        }
    }, t.onPageLoad = function (t, e, i) {
        return this.options.append || (this.isLoading = !1), this.pageIndex++, this.loadCount++, this.dispatchEvent("load", null, [t, e, i]), this.appendNextPage(t, e, i)
    }, t.appendNextPage = function (t, e, i) {
        var {append: n, responseBody: o, domParseResponse: s} = this.options;
        if ("text" != o || !s || !n) return {body: t, response: i};
        let r = t.querySelectorAll(n), a = {body: t, response: i, items: r};
        if (!r || !r.length) return this.lastPageReached(t, e), a;
        let l = d(r),
            c = () => (this.appendItems(r, l), this.isLoading = !1, this.dispatchEvent("append", null, [t, e, r, i]), a);
        return this.options.outlayer ? this.appendOutlayerItems(l, c) : c()
    }, t.appendItems = function (t, e) {
        if (t && t.length) {
            var i;
            for (i of (e = e || d(t)).querySelectorAll("script")) {
                var n, o = document.createElement("script");
                for (n of i.attributes) o.setAttribute(n.name, n.value);
                o.innerHTML = i.innerHTML, i.parentNode.replaceChild(o, i)
            }
            this.element.appendChild(e)
        }
    }, t.appendOutlayerItems = function (t, i) {
        let n = o.imagesLoaded || e.imagesLoaded;
        return n ? new Promise(function (e) {
            n(t, function () {
                var t = i();
                e(t)
            })
        }) : (console.error("[InfiniteScroll] imagesLoaded required for outlayer option"), void (this.isLoading = !1))
    }, t.onAppendOutlayer = function (t, e, i) {
        this.options.outlayer.appended(i)
    }, t.checkLastPage = function (t, e) {
        let i, {checkLastPage: n, path: o} = this.options;
        n && ("function" != typeof o || this.getPath() ? ("string" == typeof n ? i = n : this.isPathSelector && (i = o), i && t.querySelector && (t.querySelector(i) || this.lastPageReached(t, e))) : this.lastPageReached(t, e))
    }, t.lastPageReached = function (t, e) {
        this.canLoad = !1, this.dispatchEvent("last", null, [t, e])
    }, t.onPageError = function (t, e, i) {
        return this.isLoading = !1, this.canLoad = !1, this.dispatchEvent("error", null, [t, e, i]), t
    }, o.create.prefill = function () {
        var t;
        this.options.prefill && ((t = this.options.append) ? (this.updateMeasurements(), this.updateScroller(), this.isPrefilling = !0, this.on("append", this.prefill), this.once("error", this.stopPrefill), this.once("last", this.stopPrefill), this.prefill()) : console.error("append option required for prefill. Set as :" + t))
    }, t.prefill = function () {
        var t = this.getPrefillDistance();
        this.isPrefilling = 0 <= t, this.isPrefilling ? (this.log("prefill"), this.loadNextPage()) : this.stopPrefill()
    }, t.getPrefillDistance = function () {
        return this.options.elementScroll ? this.scroller.clientHeight - this.scroller.scrollHeight : this.windowHeight - this.element.clientHeight
    }, t.stopPrefill = function () {
        this.log("stopPrefill"), this.off("append", this.prefill)
    }, o
}), function (t, e) {
    "object" == typeof module && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function (i, t, e) {
    var n = t.prototype;
    return Object.assign(t.defaults, {scrollThreshold: 400}), t.create.scrollWatch = function () {
        this.pageScrollHandler = this.onPageScroll.bind(this), this.resizeHandler = this.onResize.bind(this);
        var t = this.options.scrollThreshold;
        !t && 0 !== t || this.enableScrollWatch()
    }, t.destroy.scrollWatch = function () {
        this.disableScrollWatch()
    }, n.enableScrollWatch = function () {
        this.isScrollWatching || (this.isScrollWatching = !0, this.updateMeasurements(), this.updateScroller(), this.on("last", this.disableScrollWatch), this.bindScrollWatchEvents(!0))
    }, n.disableScrollWatch = function () {
        this.isScrollWatching && (this.bindScrollWatchEvents(!1), delete this.isScrollWatching)
    }, n.bindScrollWatchEvents = function (t) {
        t = t ? "addEventListener" : "removeEventListener";
        this.scroller[t]("scroll", this.pageScrollHandler), i[t]("resize", this.resizeHandler)
    }, n.onPageScroll = t.throttle(function () {
        this.getBottomDistance() <= this.options.scrollThreshold && this.dispatchEvent("scrollThreshold")
    }), n.getBottomDistance = function () {
        let t, e;
        return e = this.options.elementScroll ? (t = this.scroller.scrollHeight, this.scroller.scrollTop + this.scroller.clientHeight) : (t = this.top + this.element.clientHeight, i.scrollY + this.windowHeight), t - e
    }, n.onResize = function () {
        this.updateMeasurements()
    }, e.debounceMethod(t, "onResize", 150), t
}), function (t, e) {
    "object" == typeof module && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function (n, t, e) {
    var i = t.prototype;
    Object.assign(t.defaults, {history: "replace"});
    let o = document.createElement("a");
    return t.create.history = function () {
        this.options.history && (o.href = this.getAbsolutePath(), (o.origin || o.protocol + "//" + o.host) == location.origin ? this.options.append ? this.createHistoryAppend() : this.createHistoryPageLoad() : console.error(`[InfiniteScroll] cannot set history with different origin: ${o.origin} on ${location.origin} . History behavior disabled.`))
    }, i.createHistoryAppend = function () {
        this.updateMeasurements(), this.updateScroller(), this.scrollPages = [{
            top: 0,
            path: location.href,
            title: document.title
        }], this.scrollPage = this.scrollPages[0], this.scrollHistoryHandler = this.onScrollHistory.bind(this), this.unloadHandler = this.onUnload.bind(this), this.scroller.addEventListener("scroll", this.scrollHistoryHandler), this.on("append", this.onAppendHistory), this.bindHistoryAppendEvents(!0)
    }, i.bindHistoryAppendEvents = function (t) {
        t = t ? "addEventListener" : "removeEventListener";
        this.scroller[t]("scroll", this.scrollHistoryHandler), n[t]("unload", this.unloadHandler)
    }, i.createHistoryPageLoad = function () {
        this.on("load", this.onPageLoadHistory)
    }, t.destroy.history = i.destroyHistory = function () {
        this.options.history && this.options.append && this.bindHistoryAppendEvents(!1)
    }, i.onAppendHistory = function (t, e, i) {
        i && i.length && (i = i[0], i = this.getElementScrollY(i), o.href = e, this.scrollPages.push({
            top: i,
            path: o.href,
            title: t.title
        }))
    }, i.getElementScrollY = function (t) {
        return this.options.elementScroll ? t.offsetTop - this.top : t.getBoundingClientRect().top + n.scrollY
    }, i.onScrollHistory = function () {
        var t = this.getClosestScrollPage();
        t != this.scrollPage && (this.scrollPage = t, this.setHistory(t.title, t.path))
    }, e.debounceMethod(t, "onScrollHistory", 150), i.getClosestScrollPage = function () {
        let t, e;
        t = this.options.elementScroll ? this.scroller.scrollTop + this.scroller.clientHeight / 2 : n.scrollY + this.windowHeight / 2;
        for (var i of this.scrollPages) {
            if (i.top >= t) break;
            e = i
        }
        return e
    }, i.setHistory = function (t, e) {
        var i = this.options.history;
        i && history[i + "State"] && (history[i + "State"](null, t, e), this.options.historyTitle && (document.title = t), this.dispatchEvent("history", null, [t, e]))
    }, i.onUnload = function () {
        var t;
        0 !== this.scrollPage.top && (t = n.scrollY - this.scrollPage.top + this.top, this.destroyHistory(), scrollTo(0, t))
    }, i.onPageLoadHistory = function (t, e) {
        this.setHistory(t.title, e)
    }, t
}), function (t, e) {
    "object" == typeof module && module.exports ? module.exports = e(0, require("./core"), require("fizzy-ui-utils")) : e(0, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function (t, e, i) {
    class n {
        constructor(t, e) {
            this.element = t, this.infScroll = e, this.clickHandler = this.onClick.bind(this), this.element.addEventListener("click", this.clickHandler), e.on("request", this.disable.bind(this)), e.on("load", this.enable.bind(this)), e.on("error", this.hide.bind(this)), e.on("last", this.hide.bind(this))
        }

        onClick(t) {
            t.preventDefault(), this.infScroll.loadNextPage()
        }

        enable() {
            this.element.removeAttribute("disabled")
        }

        disable() {
            this.element.disabled = "disabled"
        }

        hide() {
            this.element.style.display = "none"
        }

        destroy() {
            this.element.removeEventListener("click", this.clickHandler)
        }
    }

    return e.create.button = function () {
        var t = i.getQueryElement(this.options.button);
        t && (this.button = new n(t, this))
    }, e.destroy.button = function () {
        this.button && this.button.destroy()
    }, e.Button = n, e
}), function (t, e) {
    "object" == typeof module && module.exports ? module.exports = e(0, require("./core"), require("fizzy-ui-utils")) : e(0, t.InfiniteScroll, t.fizzyUIUtils)
}(window, function (t, e, i) {
    var n = e.prototype;

    function o(t) {
        r(t, "none")
    }

    function s(t) {
        r(t, "block")
    }

    function r(t, e) {
        t && (t.style.display = e)
    }

    return e.create.status = function () {
        var t = i.getQueryElement(this.options.status);
        t && (this.statusElement = t, this.statusEventElements = {
            request: t.querySelector(".infinite-scroll-request"),
            error: t.querySelector(".infinite-scroll-error"),
            last: t.querySelector(".infinite-scroll-last")
        }, this.on("request", this.showRequestStatus), this.on("error", this.showErrorStatus), this.on("last", this.showLastStatus), this.bindHideStatus("on"))
    }, n.bindHideStatus = function (t) {
        var e = this.options.append ? "append" : "load";
        this[t](e, this.hideAllStatus)
    }, n.showRequestStatus = function () {
        this.showStatus("request")
    }, n.showErrorStatus = function () {
        this.showStatus("error")
    }, n.showLastStatus = function () {
        this.showStatus("last"), this.bindHideStatus("off")
    }, n.showStatus = function (t) {
        s(this.statusElement), this.hideStatusEventElements(), s(this.statusEventElements[t])
    }, n.hideAllStatus = function () {
        o(this.statusElement), this.hideStatusEventElements()
    }, n.hideStatusEventElements = function () {
        for (var t in this.statusEventElements) o(this.statusEventElements[t])
    }, e
}), function (e, i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (t) {
        return i(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var s = e.jQuery, r = e.console;

    function a(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    var l = Array.prototype.slice;

    function c(t, e, i) {
        if (!(this instanceof c)) return new c(t, e, i);
        var n, o = t;
        (o = "string" == typeof t ? document.querySelectorAll(t) : o) ? (this.elements = (n = o, Array.isArray(n) ? n : "object" == typeof n && "number" == typeof n.length ? l.call(n) : [n]), this.options = a({}, this.options), "function" == typeof e ? i = e : a(this.options, e), i && this.on("always", i), this.getImages(), s && (this.jqDeferred = new s.Deferred), setTimeout(this.check.bind(this))) : r.error("Bad element for imagesLoaded " + (o || t))
    }

    (c.prototype = Object.create(t.prototype)).options = {}, c.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, c.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && d[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) for (var s = t.querySelectorAll(this.options.background), n = 0; n < s.length; n++) {
                var r = s[n];
                this.addElementBackgroundImages(r)
            }
        }
    };
    var d = {1: !0, 9: !0, 11: !0};

    function i(t) {
        this.img = t
    }

    function n(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }

    return c.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
            var o = n && n[2];
            o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
        }
    }, c.prototype.addImage = function (t) {
        t = new i(t);
        this.images.push(t)
    }, c.prototype.addBackground = function (t, e) {
        t = new n(t, e);
        this.images.push(t)
    }, c.prototype.check = function () {
        var n = this;

        function e(t, e, i) {
            setTimeout(function () {
                n.progress(t, e, i)
            })
        }

        this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (t) {
            t.once("progress", e), t.check()
        }) : this.complete()
    }, c.prototype.progress = function (t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && r && r.log("progress: " + i, t, e)
    }, c.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred && (t = this.hasAnyBroken ? "reject" : "resolve", this.jqDeferred[t](this))
    }, (i.prototype = Object.create(t.prototype)).check = function () {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
    }, i.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, i.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, i.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, i.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, i.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, (n.prototype = Object.create(i.prototype)).check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, n.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, n.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, (c.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function (t, e) {
            return new c(this, t, e).jqDeferred.promise(s(this))
        })
    })(), c
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).jarallax = e()
}(this, function () {
    "use strict";

    function t(t) {
        "complete" === document.readyState || "interactive" === document.readyState ? t() : document.addEventListener("DOMContentLoaded", t, {
            capture: !0,
            once: !0,
            passive: !0
        })
    }

    let e;
    var o = e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        r = {
            type: "scroll",
            speed: .5,
            containerClass: "jarallax-container",
            imgSrc: null,
            imgElement: ".jarallax-img",
            imgSize: "cover",
            imgPosition: "50% 50%",
            imgRepeat: "no-repeat",
            keepImg: !1,
            elementInViewport: null,
            zIndex: -100,
            disableParallax: !1,
            onScroll: null,
            onInit: null,
            onDestroy: null,
            onCoverImage: null,
            videoClass: "jarallax-video",
            videoSrc: null,
            videoStartTime: 0,
            videoEndTime: 0,
            videoVolume: 0,
            videoLoop: !0,
            videoPlayOnlyVisible: !0,
            videoLazyLoading: !0,
            disableVideo: !1,
            onVideoInsert: null,
            onVideoWorkerInit: null
        };
    const i = o["navigator"], n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(i.userAgent);
    let s, a, l;

    function c() {
        s = o.innerWidth || document.documentElement.clientWidth, a = n ? (!l && document.body && ((l = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(l)), (l ? l.clientHeight : 0) || o.innerHeight || document.documentElement.clientHeight) : o.innerHeight || document.documentElement.clientHeight
    }

    function m() {
        return {width: s, height: a}
    }

    c(), o.addEventListener("resize", c), o.addEventListener("orientationchange", c), o.addEventListener("load", c), t(() => {
        c()
    });
    const d = [];

    function h() {
        if (d.length) {
            const {width: s, height: r} = m();
            d.forEach((t, e) => {
                var i, n, {instance: t, oldData: o} = t;
                t.isVisible() && (i = {
                    width: (i = t.$item.getBoundingClientRect()).width,
                    height: i.height,
                    top: i.top,
                    bottom: i.bottom,
                    wndW: s,
                    wndH: r
                }, o = (n = !o || o.wndW !== i.wndW || o.wndH !== i.wndH || o.width !== i.width || o.height !== i.height) || !o || o.top !== i.top || o.bottom !== i.bottom, d[e].oldData = i, n && t.onResize(), o) && t.onScroll()
            }), o.requestAnimationFrame(h)
        }
    }

    const u = new o.IntersectionObserver(t => {
        t.forEach(t => {
            t.target.jarallax.isElementInViewport = t.isIntersecting
        })
    }, {rootMargin: "50px"}), p = o["navigator"];
    let g = 0;

    class f {
        constructor(t, e) {
            const i = this, n = (i.instanceID = g, g += 1, i.$item = t, i.defaults = {...r}, i.$item.dataset || {}),
                o = {};
            if (Object.keys(n).forEach(t => {
                var e = t.substr(0, 1).toLowerCase() + t.substr(1);
                e && void 0 !== i.defaults[e] && (o[e] = n[t])
            }), i.options = i.extend({}, i.defaults, o, e), i.pureOptions = i.extend({}, i.options), Object.keys(i.options).forEach(t => {
                "true" === i.options[t] ? i.options[t] = !0 : "false" === i.options[t] && (i.options[t] = !1)
            }), i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed))), "string" == typeof i.options.disableParallax && (i.options.disableParallax = new RegExp(i.options.disableParallax)), i.options.disableParallax instanceof RegExp) {
                const t = i.options.disableParallax;
                i.options.disableParallax = () => t.test(p.userAgent)
            }
            if ("function" != typeof i.options.disableParallax && (i.options.disableParallax = () => !1), "string" == typeof i.options.disableVideo && (i.options.disableVideo = new RegExp(i.options.disableVideo)), i.options.disableVideo instanceof RegExp) {
                const t = i.options.disableVideo;
                i.options.disableVideo = () => t.test(p.userAgent)
            }
            "function" != typeof i.options.disableVideo && (i.options.disableVideo = () => !1);
            let s = i.options.elementInViewport;
            s && "object" == typeof s && void 0 !== s.length && ([s] = s), s instanceof Element || (s = null), i.options.elementInViewport = s, i.image = {
                src: i.options.imgSrc || null,
                $container: null,
                useImgTag: !1,
                position: "fixed"
            }, i.initImg() && i.canInitParallax() && i.init()
        }

        css(t, e) {
            return i = t, "string" == typeof (n = e) ? o.getComputedStyle(i).getPropertyValue(n) : (Object.keys(n).forEach(t => {
                i.style[t] = n[t]
            }), i);
            var i, n
        }

        extend(t, ...e) {
            return [i, ...n] = [t, ...e], i = i || {}, Object.keys(n).forEach(e => {
                n[e] && Object.keys(n[e]).forEach(t => {
                    i[t] = n[e][t]
                })
            }), i;
            var i, n
        }

        getWindowData() {
            var {width: t, height: e} = m();
            return {width: t, height: e, y: document.documentElement.scrollTop}
        }

        initImg() {
            var t = this;
            let e = t.options.imgElement;
            return (e = e && "string" == typeof e ? t.$item.querySelector(e) : e) instanceof Element || (t.options.imgSrc ? (e = new Image).src = t.options.imgSrc : e = null), e && (t.options.keepImg ? t.image.$item = e.cloneNode(!0) : (t.image.$item = e, t.image.$itemParent = e.parentNode), t.image.useImgTag = !0), !(!t.image.$item && (null === t.image.src && (t.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", t.image.bgImage = t.css(t.$item, "background-image")), !t.image.bgImage || "none" === t.image.bgImage))
        }

        canInitParallax() {
            return !this.options.disableParallax()
        }

        init() {
            const t = this,
                e = {position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden"};
            let i = {pointerEvents: "none", transformStyle: "preserve-3d", backfaceVisibility: "hidden"};
            if (!t.options.keepImg) {
                const e = t.$item.getAttribute("style");
                if (e && t.$item.setAttribute("data-jarallax-original-styles", e), t.image.useImgTag) {
                    const e = t.image.$item.getAttribute("style");
                    e && t.image.$item.setAttribute("data-jarallax-original-styles", e)
                }
            }
            if ("static" === t.css(t.$item, "position") && t.css(t.$item, {position: "relative"}), "auto" === t.css(t.$item, "z-index") && t.css(t.$item, {zIndex: 0}), t.image.$container = document.createElement("div"), t.css(t.image.$container, e), t.css(t.image.$container, {"z-index": t.options.zIndex}), "fixed" === this.image.position && t.css(t.image.$container, {
                "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }), t.image.$container.setAttribute("id", "jarallax-container-" + t.instanceID), t.options.containerClass && t.image.$container.setAttribute("class", t.options.containerClass), t.$item.appendChild(t.image.$container), t.image.useImgTag ? i = t.extend({
                "object-fit": t.options.imgSize,
                "object-position": t.options.imgPosition,
                "max-width": "none"
            }, e, i) : (t.image.$item = document.createElement("div"), t.image.src && (i = t.extend({
                "background-position": t.options.imgPosition,
                "background-size": t.options.imgSize,
                "background-repeat": t.options.imgRepeat,
                "background-image": t.image.bgImage || `url("${t.image.src}")`
            }, e, i))), "opacity" !== t.options.type && "scale" !== t.options.type && "scale-opacity" !== t.options.type && 1 !== t.options.speed || (t.image.position = "absolute"), "fixed" === t.image.position) {
                const e = function (t) {
                    for (var e = []; null !== t.parentElement;) 1 === (t = t.parentElement).nodeType && e.push(t);
                    return e
                }(t.$item).filter(t => {
                    var t = o.getComputedStyle(t), e = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                    return e && "none" !== e || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                });
                t.image.position = e.length ? "absolute" : "fixed"
            }
            var n;
            i.position = t.image.position, t.css(t.image.$item, i), t.image.$container.appendChild(t.image.$item), t.onResize(), t.onScroll(!0), t.options.onInit && t.options.onInit.call(t), "none" !== t.css(t.$item, "background-image") && t.css(t.$item, {"background-image": "none"}), n = t, d.push({instance: n}), 1 === d.length && o.requestAnimationFrame(h), u.observe(n.options.elementInViewport || n.$item)
        }

        destroy() {
            var t = this, i = t, e = (d.forEach((t, e) => {
                t.instance.instanceID === i.instanceID && d.splice(e, 1)
            }), u.unobserve(i.options.elementInViewport || i.$item), t.$item.getAttribute("data-jarallax-original-styles"));
            if (t.$item.removeAttribute("data-jarallax-original-styles"), e ? t.$item.setAttribute("style", e) : t.$item.removeAttribute("style"), t.image.useImgTag) {
                const i = t.image.$item.getAttribute("data-jarallax-original-styles");
                t.image.$item.removeAttribute("data-jarallax-original-styles"), i ? t.image.$item.setAttribute("style", e) : t.image.$item.removeAttribute("style"), t.image.$itemParent && t.image.$itemParent.appendChild(t.image.$item)
            }
            t.image.$container && t.image.$container.parentNode.removeChild(t.image.$container), t.options.onDestroy && t.options.onDestroy.call(t), delete t.$item.jarallax
        }

        coverImage() {
            var t = this, e = m()["height"], i = t.image.$container.getBoundingClientRect(), n = i.height,
                o = t.options["speed"], s = "scroll" === t.options.type || "scroll-opacity" === t.options.type;
            let r = 0, a = n, l;
            return s && (o < 0 ? (r = o * Math.max(n, e), e < n && (r -= o * (n - e))) : r = o * (n + e), 1 < o ? a = Math.abs(r - e) : o < 0 ? a = r / o + Math.abs(r) : a += (e - n) * (1 - o), r /= 2), t.parallaxScrollDistance = r, l = s ? (e - a) / 2 : (n - a) / 2, t.css(t.image.$item, {
                height: a + "px",
                marginTop: l + "px",
                left: "fixed" === t.image.position ? i.left + "px" : "0",
                width: i.width + "px"
            }), t.options.onCoverImage && t.options.onCoverImage.call(t), {
                image: {height: a, marginTop: l},
                container: i
            }
        }

        isVisible() {
            return this.isElementInViewport || !1
        }

        onScroll(t) {
            var i = this;
            if (t || i.isVisible()) {
                var t = m()["height"], n = i.$item.getBoundingClientRect(), o = n.top, s = n.height, r = {},
                    a = Math.max(0, o), l = Math.max(0, s + o), c = Math.max(0, -o), d = Math.max(0, o + s - t),
                    h = Math.max(0, s - (o + s - t)), u = Math.max(0, -o + t - s), p = 1 - (t - o) / (t + s) * 2;
                let e = 1;
                if (s < t ? e = 1 - (c || d) / s : l <= t ? e = l / t : h <= t && (e = h / t), "opacity" !== i.options.type && "scale-opacity" !== i.options.type && "scroll-opacity" !== i.options.type || (r.transform = "translate3d(0,0,0)", r.opacity = e), "scale" === i.options.type || "scale-opacity" === i.options.type) {
                    let t = 1;
                    i.options.speed < 0 ? t -= i.options.speed * e : t += i.options.speed * (1 - e), r.transform = `scale(${t}) translate3d(0,0,0)`
                }
                if ("scroll" === i.options.type || "scroll-opacity" === i.options.type) {
                    let t = i.parallaxScrollDistance * p;
                    "absolute" === i.image.position && (t -= o), r.transform = `translate3d(0,${t}px,0)`
                }
                i.css(i.image.$item, r), i.options.onScroll && i.options.onScroll.call(i, {
                    section: n,
                    beforeTop: a,
                    beforeTopEnd: l,
                    afterTop: c,
                    beforeBottom: d,
                    beforeBottomEnd: h,
                    afterBottom: u,
                    visiblePercent: e,
                    fromViewportCenter: p
                })
            }
        }

        onResize() {
            this.coverImage()
        }
    }

    function y(t, e, ...i) {
        var n = (t = ("object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) ? [t] : t).length;
        let o, s = 0;
        for (; s < n; s += 1) if ("object" == typeof e || void 0 === e ? t[s].jarallax || (t[s].jarallax = new f(t[s], e)) : t[s].jarallax && (o = t[s].jarallax[e].apply(t[s].jarallax, i)), void 0 !== o) return o;
        return t
    }

    y.constructor = f;
    const v = o.jQuery;
    if (void 0 !== v) {
        const t = function (...t) {
            Array.prototype.unshift.call(t, this);
            t = y.apply(o, t);
            return "object" != typeof t ? t : this
        }, e = (t.constructor = y.constructor, v.fn.jarallax);
        v.fn.jarallax = t, v.fn.jarallax.noConflict = function () {
            return v.fn.jarallax = e, this
        }
    }
    return t(() => {
        y(document.querySelectorAll("[data-jarallax]"))
    }), y
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).jarallaxVideo = e()
}(this, function () {
    "use strict";
    var r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t() {
        this.doneCallbacks = [], this.failCallbacks = []
    }

    var s = {
        autoplay: !(t.prototype = {
            execute(t, e) {
                let i = t.length;
                for (e = Array.prototype.slice.call(e); i;) t[--i].apply(null, e)
            }, resolve(...t) {
                this.execute(this.doneCallbacks, t)
            }, reject(...t) {
                this.execute(this.failCallbacks, t)
            }, done(t) {
                this.doneCallbacks.push(t)
            }, fail(t) {
                this.failCallbacks.push(t)
            }
        }), loop: !1, mute: !1, volume: 100, showControls: !0, accessibilityHidden: !1, startTime: 0, endTime: 0
    };
    let a = 0, e = 0, n = 0, i = 0, o = 0;
    const l = new t, c = new t;

    class d {
        constructor(t, e) {
            var i, n, o = this;
            o.url = t, o.options_default = {...s}, o.options = (i = {}, n = [o.options_default, e], i = i || {}, Object.keys(n).forEach(e => {
                n[e] && Object.keys(n[e]).forEach(t => {
                    i[t] = n[e][t]
                })
            }), i), o.videoID = o.parseURL(t), o.videoID && (o.ID = a, a += 1, o.loadAPI(), o.init())
        }

        parseURL(n) {
            var t = !(!(t = n.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=)([^#\&\?]*).*/)) || 11 !== t[1].length) && t[1],
                e = !(!(e = n.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/)) || !e[3]) && e[3],
                i = function () {
                    const t = n.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), e = {};
                    let i = 0;
                    return t.forEach(t => {
                        t = t.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                        t && t[1] && t[2] && (e["ogv" === t[1] ? "ogg" : t[1]] = t[2], i = 1)
                    }), !!i && e
                }();
            return t ? (this.type = "youtube", t) : e ? (this.type = "vimeo", e) : !!i && (this.type = "local", i)
        }

        isValid() {
            return !!this.videoID
        }

        on(t, e) {
            this.userEventsList = this.userEventsList || [], (this.userEventsList[t] || (this.userEventsList[t] = [])).push(e)
        }

        off(i, n) {
            this.userEventsList && this.userEventsList[i] && (n ? this.userEventsList[i].forEach((t, e) => {
                t === n && (this.userEventsList[i][e] = !1)
            }) : delete this.userEventsList[i])
        }

        fire(t, ...e) {
            this.userEventsList && void 0 !== this.userEventsList[t] && this.userEventsList[t].forEach(t => {
                t && t.apply(this, e)
            })
        }

        play(t) {
            const e = this;
            e.player && ("youtube" === e.type && e.player.playVideo && (void 0 !== t && e.player.seekTo(t || 0), r.YT.PlayerState.PLAYING !== e.player.getPlayerState()) && e.player.playVideo(), "vimeo" === e.type && (void 0 !== t && e.player.setCurrentTime(t), e.player.getPaused().then(t => {
                t && e.player.play()
            })), "local" === e.type) && (void 0 !== t && (e.player.currentTime = t), e.player.paused) && e.player.play()
        }

        pause() {
            const e = this;
            e.player && ("youtube" === e.type && e.player.pauseVideo && r.YT.PlayerState.PLAYING === e.player.getPlayerState() && e.player.pauseVideo(), "vimeo" === e.type && e.player.getPaused().then(t => {
                t || e.player.pause()
            }), "local" === e.type) && !e.player.paused && e.player.pause()
        }

        mute() {
            var t = this;
            t.player && ("youtube" === t.type && t.player.mute && t.player.mute(), "vimeo" === t.type && t.player.setVolume && t.setVolume(0), "local" === t.type) && (t.$video.muted = !0)
        }

        unmute() {
            var t = this;
            t.player && ("youtube" === t.type && t.player.mute && t.player.unMute(), "vimeo" === t.type && t.player.setVolume && t.setVolume(t.options.volume || 100), "local" === t.type) && (t.$video.muted = !1)
        }

        setVolume(t = !1) {
            var e = this;
            e.player && "number" == typeof t && ("youtube" === e.type && e.player.setVolume && e.player.setVolume(t), "vimeo" === e.type && e.player.setVolume && e.player.setVolume(t / 100), "local" === e.type) && (e.$video.volume = t / 100)
        }

        getVolume(e) {
            var t = this;
            t.player ? ("youtube" === t.type && t.player.getVolume && e(t.player.getVolume()), "vimeo" === t.type && t.player.getVolume && t.player.getVolume().then(t => {
                e(100 * t)
            }), "local" === t.type && e(100 * t.$video.volume)) : e(!1)
        }

        getMuted(e) {
            var t = this;
            t.player ? ("youtube" === t.type && t.player.isMuted && e(t.player.isMuted()), "vimeo" === t.type && t.player.getVolume && t.player.getVolume().then(t => {
                e(!!t)
            }), "local" === t.type && e(t.$video.muted)) : e(null)
        }

        getImageURL(i) {
            const n = this;
            if (n.videoImage) i(n.videoImage); else {
                if ("youtube" === n.type) {
                    const r = ["maxresdefault", "sddefault", "hqdefault", "0"];
                    let t = 0;
                    var e = new Image;
                    e.onload = function () {
                        120 !== (this.naturalWidth || this.width) || t === r.length - 1 ? (n.videoImage = `https://img.youtube.com/vi/${n.videoID}/${r[t]}.jpg`, i(n.videoImage)) : (t += 1, this.src = `https://img.youtube.com/vi/${n.videoID}/${r[t]}.jpg`)
                    }, e.src = `https://img.youtube.com/vi/${n.videoID}/${r[t]}.jpg`
                }
                if ("vimeo" === n.type) {
                    let t = r.innerWidth || 1920,
                        e = (r.devicePixelRatio && (t *= r.devicePixelRatio), t = Math.min(t, 1920), new XMLHttpRequest);
                    e.open("GET", `https://vimeo.com/api/oembed.json?url=${n.url}&width=` + t, !0), e.onreadystatechange = function () {
                        var t;
                        4 === this.readyState && 200 <= this.status && this.status < 400 && (t = JSON.parse(this.responseText)).thumbnail_url && (n.videoImage = t.thumbnail_url, i(n.videoImage))
                    }, e.send(), e = null
                }
            }
        }

        getIframe(t) {
            this.getVideo(t)
        }

        getVideo(o) {
            const s = this;
            s.$video ? o(s.$video) : s.onAPIready(() => {
                let t;
                if (s.$video || ((t = document.createElement("div")).style.display = "none"), "youtube" === s.type) {
                    let e, i;
                    s.playerOptions = {
                        host: "https://www.youtube-nocookie.com",
                        videoId: s.videoID,
                        playerVars: {autohide: 1, rel: 0, autoplay: 0, playsinline: 1}
                    }, s.options.showControls || (s.playerOptions.playerVars.iv_load_policy = 3, s.playerOptions.playerVars.modestbranding = 1, s.playerOptions.playerVars.controls = 0, s.playerOptions.playerVars.showinfo = 0, s.playerOptions.playerVars.disablekb = 1), s.playerOptions.events = {
                        onReady(e) {
                            if (s.options.mute ? e.target.mute() : "number" == typeof s.options.volume && e.target.setVolume(s.options.volume), s.options.autoplay && s.play(s.options.startTime), s.fire("ready", e), s.options.loop && !s.options.endTime) {
                                const e = .1;
                                s.options.endTime = s.player.getDuration() - .1
                            }
                            setInterval(() => {
                                s.getVolume(t => {
                                    s.options.volume !== t && (s.options.volume = t, s.fire("volumechange", e))
                                })
                            }, 150)
                        }, onStateChange(t) {
                            s.options.loop && t.data === r.YT.PlayerState.ENDED && s.play(s.options.startTime), e || t.data !== r.YT.PlayerState.PLAYING || (e = 1, s.fire("started", t)), t.data === r.YT.PlayerState.PLAYING && s.fire("play", t), t.data === r.YT.PlayerState.PAUSED && s.fire("pause", t), t.data === r.YT.PlayerState.ENDED && s.fire("ended", t), t.data === r.YT.PlayerState.PLAYING ? i = setInterval(() => {
                                s.fire("timeupdate", t), s.options.endTime && s.player.getCurrentTime() >= s.options.endTime && (s.options.loop ? s.play(s.options.startTime) : s.pause())
                            }, 150) : clearInterval(i)
                        }, onError(t) {
                            s.fire("error", t)
                        }
                    };
                    var n = !s.$video;
                    if (n) {
                        const o = document.createElement("div");
                        o.setAttribute("id", s.playerID), t.appendChild(o), document.body.appendChild(t)
                    }
                    s.player = s.player || new r.YT.Player(s.playerID, s.playerOptions), n && (s.$video = document.getElementById(s.playerID), s.options.accessibilityHidden && (s.$video.setAttribute("tabindex", "-1"), s.$video.setAttribute("aria-hidden", "true")), s.videoWidth = parseInt(s.$video.getAttribute("width"), 10) || 1280, s.videoHeight = parseInt(s.$video.getAttribute("height"), 10) || 720)
                }
                if ("vimeo" === s.type) {
                    if (s.playerOptions = {
                        dnt: 1,
                        id: s.videoID,
                        autopause: 0,
                        transparent: 0,
                        autoplay: s.options.autoplay ? 1 : 0,
                        loop: s.options.loop ? 1 : 0,
                        muted: s.options.mute || 0 === s.options.volume ? 1 : 0
                    }, s.options.showControls || (s.playerOptions.controls = 0), !s.options.showControls && s.options.loop && s.options.autoplay && (s.playerOptions.background = 1), !s.$video) {
                        let e = "";
                        Object.keys(s.playerOptions).forEach(t => {
                            "" !== e && (e += "&"), e += t + "=" + encodeURIComponent(s.playerOptions[t])
                        }), s.$video = document.createElement("iframe"), s.$video.setAttribute("id", s.playerID), s.$video.setAttribute("src", `https://player.vimeo.com/video/${s.videoID}?` + e), s.$video.setAttribute("frameborder", "0"), s.$video.setAttribute("mozallowfullscreen", ""), s.$video.setAttribute("allowfullscreen", ""), s.$video.setAttribute("title", "Vimeo video player"), s.options.accessibilityHidden && (s.$video.setAttribute("tabindex", "-1"), s.$video.setAttribute("aria-hidden", "true")), t.appendChild(s.$video), document.body.appendChild(t)
                    }
                    let e;
                    s.player = s.player || new r.Vimeo.Player(s.$video, s.playerOptions), s.options.mute || "number" != typeof s.options.volume || s.setVolume(s.options.volume), s.options.startTime && s.options.autoplay && s.player.setCurrentTime(s.options.startTime), s.player.getVideoWidth().then(t => {
                        s.videoWidth = t || 1280
                    }), s.player.getVideoHeight().then(t => {
                        s.videoHeight = t || 720
                    }), s.player.on("timeupdate", t => {
                        e || (s.fire("started", t), e = 1), s.fire("timeupdate", t), s.options.endTime && s.options.endTime && t.seconds >= s.options.endTime && (s.options.loop ? s.play(s.options.startTime) : s.pause())
                    }), s.player.on("play", t => {
                        s.fire("play", t), s.options.startTime && 0 === t.seconds && s.play(s.options.startTime)
                    }), s.player.on("pause", t => {
                        s.fire("pause", t)
                    }), s.player.on("ended", t => {
                        s.fire("ended", t)
                    }), s.player.on("loaded", t => {
                        s.fire("ready", t)
                    }), s.player.on("volumechange", t => {
                        s.getVolume(t => {
                            s.options.volume = t
                        }), s.fire("volumechange", t)
                    }), s.player.on("error", t => {
                        s.fire("error", t)
                    })
                }
                if ("local" === s.type) {
                    let e;
                    s.$video || (s.$video = document.createElement("video"), s.player = s.$video, s.options.showControls && (s.$video.controls = !0), "number" == typeof s.options.volume && s.setVolume(s.options.volume), s.options.mute && s.mute(), s.options.loop && (s.$video.loop = !0), s.$video.setAttribute("playsinline", ""), s.$video.setAttribute("webkit-playsinline", ""), s.options.accessibilityHidden && (s.$video.setAttribute("tabindex", "-1"), s.$video.setAttribute("aria-hidden", "true")), s.$video.setAttribute("id", s.playerID), t.appendChild(s.$video), document.body.appendChild(t), Object.keys(s.videoID).forEach(t => {
                        var e, i, n;
                        e = s.$video, i = s.videoID[t], t = "video/" + t, (n = document.createElement("source")).src = i, n.type = t, e.appendChild(n)
                    })), s.player.addEventListener("playing", t => {
                        e || s.fire("started", t), e = 1
                    }), s.player.addEventListener("timeupdate", function (t) {
                        s.fire("timeupdate", t), s.options.endTime && s.options.endTime && this.currentTime >= s.options.endTime && (s.options.loop ? s.play(s.options.startTime) : s.pause())
                    }), s.player.addEventListener("play", t => {
                        s.fire("play", t)
                    }), s.player.addEventListener("pause", t => {
                        s.fire("pause", t)
                    }), s.player.addEventListener("ended", t => {
                        s.fire("ended", t)
                    }), s.player.addEventListener("loadedmetadata", function () {
                        s.videoWidth = this.videoWidth || 1280, s.videoHeight = this.videoHeight || 720, s.fire("ready"), s.options.autoplay && s.play(s.options.startTime)
                    }), s.player.addEventListener("volumechange", t => {
                        s.getVolume(t => {
                            s.options.volume = t
                        }), s.fire("volumechange", t)
                    }), s.player.addEventListener("error", t => {
                        s.fire("error", t)
                    })
                }
                o(s.$video)
            })
        }

        init() {
            this.playerID = "VideoWorker-" + this.ID
        }

        loadAPI() {
            if (!e || !n) {
                let i = "";
                if ("youtube" !== this.type || e || (e = 1, i = "https://www.youtube.com/iframe_api"), "vimeo" === this.type && !n) {
                    if (n = 1, void 0 !== r.Vimeo) return;
                    i = "https://player.vimeo.com/api/player.js"
                }
                if (i) {
                    let t = document.createElement("script"), e = document.getElementsByTagName("head")[0];
                    t.src = i, e.appendChild(t), e = null, t = null
                }
            }
        }

        onAPIready(t) {
            const e = this;
            if ("youtube" === e.type && (void 0 !== r.YT && 0 !== r.YT.loaded || i ? "object" == typeof r.YT && 1 === r.YT.loaded ? t() : l.done(() => {
                t()
            }) : (i = 1, r.onYouTubeIframeAPIReady = function () {
                r.onYouTubeIframeAPIReady = null, l.resolve("done"), t()
            })), "vimeo" === e.type) if (void 0 !== r.Vimeo || o) void 0 !== r.Vimeo ? t() : c.done(() => {
                t()
            }); else {
                o = 1;
                const e = setInterval(() => {
                    void 0 !== r.Vimeo && (clearInterval(e), c.resolve("done"), t())
                }, 20)
            }
            "local" === e.type && t()
        }
    }

    var h,
        u = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function p(t = u.jarallax) {
        if (void 0 !== t) {
            const e = t.constructor, n = e.prototype.onScroll, i = (e.prototype.onScroll = function () {
                const i = this;
                n.apply(i), i.isVideoInserted || !i.video || i.options.videoLazyLoading && !i.isElementInViewport || i.options.disableVideo() || (i.isVideoInserted = !0, i.video.getVideo(t => {
                    var e = t.parentNode;
                    i.css(t, {
                        position: i.image.position,
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        bottom: "0px",
                        width: "100%",
                        height: "100%",
                        maxWidth: "none",
                        maxHeight: "none",
                        pointerEvents: "none",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        margin: 0,
                        zIndex: -1
                    }), i.$video = t, "local" === i.video.type && (i.image.src ? i.$video.setAttribute("poster", i.image.src) : i.image.$item && "IMG" === i.image.$item.tagName && i.image.$item.src && i.$video.setAttribute("poster", i.image.$item.src)), i.options.videoClass && i.$video.setAttribute("class", `${i.options.videoClass} ${i.options.videoClass}-` + i.video.type), i.image.$container.appendChild(t), e.parentNode.removeChild(e), i.options.onVideoInsert && i.options.onVideoInsert.call(i)
                }))
            }, e.prototype.coverImage), o = (e.prototype.coverImage = function () {
                var o = this, s = i.apply(o), r = !!o.image.$item && o.image.$item.nodeName;
                if (s && o.video && r && ("IFRAME" === r || "VIDEO" === r)) {
                    let t = s.image.height, e = t * o.image.width / o.image.height, i = (s.container.width - e) / 2,
                        n = s.image.marginTop;
                    s.container.width > e && (e = s.container.width, t = e * o.image.height / o.image.width, i = 0, n += (s.image.height - t) / 2), "IFRAME" === r && (t += 400, n -= 200), o.css(o.$video, {
                        width: e + "px",
                        marginLeft: i + "px",
                        height: t + "px",
                        marginTop: n + "px"
                    })
                }
                return s
            }, e.prototype.initImg), s = (e.prototype.initImg = function () {
                var t = this, e = o.apply(t);
                return t.options.videoSrc || (t.options.videoSrc = t.$item.getAttribute("data-jarallax-video") || null), t.options.videoSrc ? (t.defaultInitImgResult = e, !0) : e
            }, e.prototype.canInitParallax), r = (e.prototype.canInitParallax = function () {
                const i = this;
                let t = s.apply(i);
                if (i.options.videoSrc) {
                    const n = new d(i.options.videoSrc, {
                        autoplay: !0,
                        loop: i.options.videoLoop,
                        showControls: !1,
                        accessibilityHidden: !0,
                        startTime: i.options.videoStartTime || 0,
                        endTime: i.options.videoEndTime || 0,
                        mute: !i.options.videoVolume,
                        volume: i.options.videoVolume || 0
                    });
                    if (i.options.onVideoWorkerInit && i.options.onVideoWorkerInit.call(i, n), n.isValid()) if (this.options.disableParallax() && (t = !0, i.image.position = "absolute", i.options.type = "scroll", i.options.speed = 1), t) {
                        if (n.on("ready", () => {
                            if (i.options.videoPlayOnlyVisible) {
                                const t = i.onScroll;
                                i.onScroll = function () {
                                    t.apply(i), i.videoError || !i.options.videoLoop && (i.options.videoLoop || i.videoEnded) || (i.isVisible() ? n.play() : n.pause())
                                }
                            } else n.play()
                        }), n.on("started", () => {
                            i.image.$default_item = i.image.$item, i.image.$item = i.$video, i.image.width = i.video.videoWidth || 1280, i.image.height = i.video.videoHeight || 720, i.coverImage(), i.onScroll(), i.image.$default_item && (i.image.$default_item.style.display = "none")
                        }), n.on("ended", () => {
                            i.videoEnded = !0, i.options.videoLoop || e()
                        }), n.on("error", () => {
                            i.videoError = !0, e()
                        }), i.video = n, !i.defaultInitImgResult && (i.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "local" !== n.type)) return n.getImageURL(t => {
                            i.image.bgImage = `url("${t}")`, i.init()
                        }), !1
                    } else i.defaultInitImgResult || n.getImageURL(t => {
                        var e = i.$item.getAttribute("style");
                        e && i.$item.setAttribute("data-jarallax-original-styles", e), i.css(i.$item, {
                            "background-image": `url("${t}")`,
                            "background-position": "center",
                            "background-size": "cover"
                        })
                    });

                    function e() {
                        i.image.$default_item && (i.image.$item = i.image.$default_item, i.image.$item.style.display = "block", i.coverImage(), i.onScroll())
                    }
                }
                return t
            }, e.prototype.destroy);
            e.prototype.destroy = function () {
                var t = this;
                t.image.$default_item && (t.image.$item = t.image.$default_item, delete t.image.$default_item), r.apply(t)
            }
        }
    }

    return p(), h = () => {
        void 0 !== u.jarallax && u.jarallax(document.querySelectorAll("[data-jarallax-video]"))
    }, "complete" === document.readyState || "interactive" === document.readyState ? h() : document.addEventListener("DOMContentLoaded", h, {
        capture: !0,
        once: !0,
        passive: !0
    }), u.VideoWorker || (u.VideoWorker = d), p
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function (h) {
    function u(t) {
        return m.raw ? t : encodeURIComponent(t)
    }

    function p(t, e) {
        t = m.raw ? t : function (t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(i, " ")), m.json ? JSON.parse(t) : t
            } catch (t) {
            }
        }(t);
        return h.isFunction(e) ? e(t) : t
    }

    var i = /\+/g, m = h.cookie = function (t, e, i) {
        var n, o;
        if (void 0 !== e && !h.isFunction(e)) return "number" == typeof (i = h.extend({}, m.defaults, i)).expires && (n = i.expires, (o = i.expires = new Date).setTime(+o + 864e5 * n)), document.cookie = [u(t), "=", (o = e, u(m.json ? JSON.stringify(o) : String(o))), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("");
        for (var s = t ? void 0 : {}, r = document.cookie ? document.cookie.split("; ") : [], a = 0, l = r.length; a < l; a++) {
            var c = r[a].split("="), d = (d = c.shift(), m.raw ? d : decodeURIComponent(d)), c = c.join("=");
            if (t && t === d) {
                s = p(c, e);
                break
            }
            t || void 0 === (c = p(c)) || (s[d] = c)
        }
        return s
    };
    m.defaults = {}, h.removeCookie = function (t, e) {
        return void 0 !== h.cookie(t) && (h.cookie(t, "", h.extend({}, e, {expires: -1})), !h.cookie(t))
    }
}), function (l, i, n, a) {
    function c(t, e) {
        this.settings = null, this.options = l.extend({}, c.Defaults, e), this.$element = l(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, l.each(["onResize", "onThrottledResize"], l.proxy(function (t, e) {
            this._handlers[e] = l.proxy(this[e], this)
        }, this)), l.each(c.Plugins, l.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), l.each(c.Workers, l.proxy(function (t, e) {
            this._pipe.push({filter: e.filter, run: l.proxy(e.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    c.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: i,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, c.Width = {Default: "default", Inner: "inner", Outer: "outer"}, c.Type = {
        Event: "event",
        State: "state"
    }, c.Plugins = {}, c.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this.settings.margin || "", i = !this.settings.autoWidth, n = this.settings.rtl,
                n = {width: "auto", "margin-left": n ? e : "", "margin-right": n ? "" : e};
            i || this.$stage.children().css(n), t.css = n
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e, i = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, n = this._items.length,
                o = !this.settings.autoWidth, s = [];
            for (t.items = {
                merge: !1,
                width: i
            }; n--;) e = this._mergers[n], e = this.settings.mergeFit && Math.min(e, this.settings.items) || e, t.items.merge = 1 < e || t.items.merge, s[n] = o ? i * e : this._items[n].width();
            this._widths = s
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var t = [], e = this._items, i = this.settings, n = Math.max(2 * i.items, 4),
                o = 2 * Math.ceil(e.length / 2), s = i.loop && e.length ? i.rewind ? n : Math.max(n, o) : 0, r = "",
                a = "";
            for (s /= 2; 0 < s;) t.push(this.normalize(t.length / 2, !0)), r += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a, --s;
            this._clones = t, l(r).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var t, e, i = this.settings.rtl ? 1 : -1, n = this._clones.length + this._items.length, o = -1, s = []; ++o < n;) t = s[o - 1] || 0, e = this._widths[this.relative(o)] + this.settings.margin, s.push(t + e * i);
            this._coordinates = s
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var t = this.settings.stagePadding, e = this._coordinates, e = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
            this.$stage.css(e)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this._coordinates.length, i = !this.settings.autoWidth, n = this.$stage.children();
            if (i && t.items.merge) for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css); else i && (t.css.width = t.items.width, n.css(t.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            for (var t, e, i = this.settings.rtl ? 1 : -1, n = 2 * this.settings.stagePadding, o = this.coordinates(this.current()) + n, s = o + this.width() * i, r = [], a = 0, l = this._coordinates.length; a < l; a++) t = this._coordinates[a - 1] || 0, e = Math.abs(this._coordinates[a]) + n * i, (this.op(t, "<=", o) && this.op(t, ">", s) || this.op(e, "<", o) && this.op(e, ">", s)) && r.push(a);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + r.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], c.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ">", {class: this.settings.stageClass}).wrap(l("<div/>", {class: this.settings.stageOuterClass})), this.$element.append(this.$stage.parent()))
    }, c.prototype.initializeItems = function () {
        var t = this.$element.find(".owl-item");
        t.length ? (this._items = t.get().map(function (t) {
            return l(t)
        }), this._mergers = this._items.map(function () {
            return 1
        }), this.refresh()) : (this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass))
    }, c.prototype.initialize = function () {
        var t, e;
        this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a, e = this.$element.children(e).width(), t.length) && e <= 0 && this.preloadAutoWidthImages(t), this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, c.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, c.prototype.setup = function () {
        var e = this.viewport(), t = this.options.responsive, i = -1, n = null;
        t ? (l.each(t, function (t) {
            t <= e && i < t && (i = Number(t))
        }), "function" == typeof (n = l.extend({}, this.options, t[i])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : n = l.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: n
            }
        }), this._breakpoint = i, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, c.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, c.prototype.prepare = function (t) {
        var e = this.trigger("prepare", {content: t});
        return e.data || (e.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {content: e.data}), e.data
    }, c.prototype.update = function () {
        for (var t = 0, e = this._pipe.length, i = l.proxy(function (t) {
            return this[t]
        }, this._invalidated), n = {}; t < e;) (this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(n), t++;
        this._invalidated = {}, this.is("valid") || this.enter("valid")
    }, c.prototype.width = function (t) {
        switch (t = t || c.Width.Default) {
            case c.Width.Inner:
            case c.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, c.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, c.prototype.onThrottledResize = function () {
        i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, c.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, c.prototype.registerEventHandlers = function () {
        l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
    }, c.prototype.onDragStart = function (t) {
        var e = null;
        3 !== t.which && (e = l.support.transform ? {
            x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
            y: e[16 === e.length ? 13 : 5]
        } : (e = this.$stage.position(), {
            x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
            y: e.top
        }), this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), l(n).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(n).one("mousemove.owl.core touchmove.owl.core", l.proxy(function (t) {
            var e = this.difference(this._drag.pointer, this.pointer(t));
            l(n).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, c.prototype.onDragMove = function (t) {
        var e = null, i = null, n = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, n);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), t = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + t), i + t)), this._drag.stage.current = o, this.animate(o.x))
    }, c.prototype.onDragEnd = function (t) {
        var t = this.difference(this._drag.pointer, this.pointer(t)), e = this._drag.stage.current,
            i = 0 < t.x ^ this.settings.rtl ? "left" : "right";
        l(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== t.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== t.x ? i : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = i, 3 < Math.abs(t.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function () {
            return !1
        }), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, c.prototype.closest = function (i, n) {
        var o = -1, s = this.width(), r = this.coordinates();
        return this.settings.freeDrag || l.each(r, l.proxy(function (t, e) {
            return "left" === n && e - 30 < i && i < e + 30 ? o = t : "right" === n && e - s - 30 < i && i < e - s + 30 ? o = t + 1 : this.op(i, "<", e) && this.op(i, ">", r[t + 1] !== a ? r[t + 1] : e - s) && (o = "left" === n ? t + 1 : t), -1 === o
        }, this)), this.settings.loop || (this.op(i, ">", r[this.minimum()]) ? o = i = this.minimum() : this.op(i, "<", r[this.maximum()]) && (o = i = this.maximum())), o
    }, c.prototype.animate = function (t) {
        var e = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), l.support.transform3d && l.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : e ? this.$stage.animate({left: t + "px"}, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: t + "px"})
    }, c.prototype.is = function (t) {
        return this._states.current[t] && 0 < this._states.current[t]
    }, c.prototype.current = function (t) {
        if (t !== a) {
            if (0 === this._items.length) return a;
            var e;
            t = this.normalize(t), this._current !== t && ((e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            })).data !== a && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            }))
        }
        return this._current
    }, c.prototype.invalidate = function (t) {
        return "string" === l.type(t) && (this._invalidated[t] = !0, this.is("valid")) && this.leave("valid"), l.map(this._invalidated, function (t, e) {
            return e
        })
    }, c.prototype.reset = function (t) {
        (t = this.normalize(t)) !== a && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, c.prototype.normalize = function (t, e) {
        var i = this._items.length, e = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = a : (t < 0 || i + e <= t) && (t = ((t - e / 2) % i + i) % i + e / 2), t
    }, c.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, c.prototype.maximum = function (t) {
        var e, i, n, o = this.settings, s = this._coordinates.length;
        if (o.loop) s = this._clones.length / 2 + this._items.length - 1; else if (o.autoWidth || o.merge) {
            if (e = this._items.length) for (i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n);) ;
            s = e + 1
        } else s = o.center ? this._items.length - 1 : this._items.length - o.items;
        return t && (s -= this._clones.length / 2), Math.max(s, 0)
    }, c.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, c.prototype.items = function (t) {
        return t === a ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, c.prototype.mergers = function (t) {
        return t === a ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, c.prototype.clones = function (i) {
        function n(t) {
            return t % 2 == 0 ? o + t / 2 : e - (t + 1) / 2
        }

        var e = this._clones.length / 2, o = e + this._items.length;
        return i === a ? l.map(this._clones, function (t, e) {
            return n(e)
        }) : l.map(this._clones, function (t, e) {
            return t === i ? n(e) : null
        })
    }, c.prototype.speed = function (t) {
        return t !== a && (this._speed = t), this._speed
    }, c.prototype.coordinates = function (t) {
        var e, i = 1, n = t - 1;
        return t === a ? l.map(this._coordinates, l.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, n = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[n] || 0)) / 2 * i) : e = this._coordinates[n] || 0, Math.ceil(e))
    }, c.prototype.duration = function (t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, c.prototype.to = function (t, e) {
        var i = this.current(), n = t - this.relative(i), o = (0 < n) - (n < 0), s = this._items.length,
            r = this.minimum(), a = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(n) > s / 2 && (n += -1 * o * s), (o = (((t = i + n) - r) % s + s) % s + r) !== t && o - n <= a && 0 < o - n && this.reset(i = (t = o) - n)) : t = this.settings.rewind ? (t % (a += 1) + a) % a : Math.max(r, Math.min(a, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
    }, c.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, c.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, c.prototype.onTransitionEnd = function (t) {
        if (t !== a && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, c.prototype.viewport = function () {
        var t;
        return this.options.responsiveBaseElement !== i ? t = l(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : n.documentElement && n.documentElement.clientWidth ? t = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
    }, c.prototype.replace = function (t) {
        this.$stage.empty(), this._items = [], t = t && (t instanceof jQuery ? t : l(t)), (t = this.settings.nestedItemSelector ? t.find("." + this.settings.nestedItemSelector) : t).filter(function () {
            return 1 === this.nodeType
        }).each(l.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, c.prototype.add = function (t, e) {
        var i = this.relative(this._current);
        e = e === a ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : l(t), this.trigger("add", {
            content: t,
            position: e
        }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, c.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== a && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, c.prototype.preloadAutoWidthImages = function (t) {
        t.each(l.proxy(function (t, e) {
            this.enter("pre-loading"), e = l(e), l(new Image).one("load", l.proxy(function (t) {
                e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh()
            }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
        }, this))
    }, c.prototype.destroy = function () {
        for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(n).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, c.prototype.op = function (t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case"<":
                return n ? i < t : t < i;
            case">":
                return n ? t < i : i < t;
            case">=":
                return n ? t <= i : i <= t;
            case"<=":
                return n ? i <= t : t <= i
        }
    }, c.prototype.on = function (t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, c.prototype.off = function (t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, c.prototype.trigger = function (t, e, i, n, o) {
        var s = {item: {count: this._items.length, index: this.current()}},
            r = l.camelCase(l.grep(["on", t, i], function (t) {
                return t
            }).join("-").toLowerCase()),
            a = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({relatedTarget: this}, s, e));
        return this._supress[t] || (l.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(a)
        }), this.register({
            type: c.Type.Event,
            name: t
        }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, a)), a
    }, c.prototype.enter = function (t) {
        l.each([t].concat(this._states.tags[t] || []), l.proxy(function (t, e) {
            this._states.current[e] === a && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, c.prototype.leave = function (t) {
        l.each([t].concat(this._states.tags[t] || []), l.proxy(function (t, e) {
            this._states.current[e]--
        }, this))
    }, c.prototype.register = function (i) {
        var e;
        i.type === c.Type.Event ? (l.event.special[i.name] || (l.event.special[i.name] = {}), l.event.special[i.name].owl || (e = l.event.special[i.name]._default, l.event.special[i.name]._default = function (t) {
            return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
        }, l.event.special[i.name].owl = !0)) : i.type === c.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = l.grep(this._states.tags[i.name], l.proxy(function (t, e) {
            return l.inArray(t, this._states.tags[i.name]) === e
        }, this)))
    }, c.prototype.suppress = function (t) {
        l.each(t, l.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, c.prototype.release = function (t) {
        l.each(t, l.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, c.prototype.pointer = function (t) {
        var e = {x: null, y: null};
        return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
    }, c.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, c.prototype.difference = function (t, e) {
        return {x: t.x - e.x, y: t.y - e.y}
    }, l.fn.owlCarousel = function (e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var t = l(this), i = t.data("owl.carousel");
            i || (i = new c(this, "object" == typeof e && e), t.data("owl.carousel", i), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, e) {
                i.register({
                    type: c.Type.Event,
                    name: e
                }), i.$element.on(e + ".owl.carousel.core", l.proxy(function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
                }, i))
            })), "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, n)
        })
    }, l.fn.owlCarousel.Constructor = c
}(window.Zepto || window.jQuery, window, document), function (e, i) {
    function n(t) {
        this._core = t, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = e.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    }

    n.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, n.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, n.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible) && this._core.invalidate("width") && this._core.refresh()
    }, n.prototype.destroy = function () {
        var t, e;
        for (t in i.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
}(window.Zepto || window.jQuery, window, document), function (a, o) {
    function e(t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                    var e = this._core.settings, i = e.center && Math.ceil(e.items / 2) || e.items,
                        n = e.center && -1 * i || 0,
                        o = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + n,
                        s = this._core.clones().length, r = a.proxy(function (t, e) {
                            this.load(e)
                        }, this);
                    for (0 < e.lazyLoadEager && (i += e.lazyLoadEager, e.loop) && (o -= e.lazyLoadEager, i++); n++ < i;) this.load(s / 2 + this._core.relative(o)), s && a.each(this._core.clones(this._core.relative(o)), r), o++
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    }

    e.Defaults = {lazyLoad: !1, lazyLoadEager: 0}, e.prototype.load = function (t) {
        var t = this._core.$stage.children().eq(t), e = t && t.find(".owl-lazy");
        !e || -1 < a.inArray(t.get(0), this._loaded) || (e.each(a.proxy(function (t, e) {
            var i = a(e),
                n = 1 < o.devicePixelRatio && i.attr("data-src-retina") || i.attr("data-src") || i.attr("data-srcset");
            this._core.trigger("load", {
                element: i,
                url: n
            }, "lazy"), i.is("img") ? i.one("load.owl.lazy", a.proxy(function () {
                i.css("opacity", 1), this._core.trigger("loaded", {element: i, url: n}, "lazy")
            }, this)).attr("src", n) : i.is("source") ? i.one("load.owl.lazy", a.proxy(function () {
                this._core.trigger("loaded", {element: i, url: n}, "lazy")
            }, this)).attr("srcset", n) : ((e = new Image).onload = a.proxy(function () {
                i.css({"background-image": 'url("' + n + '")', opacity: "1"}), this._core.trigger("loaded", {
                    element: i,
                    url: n
                }, "lazy")
            }, this), e.src = n)
        }, this)), this._loaded.push(t.get(0)))
    }, e.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document), function (o, i) {
    function n(t) {
        this._core = t, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this), "loaded.owl.lazy": o.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = o.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var e = this;
        o(i).on("load", function () {
            e._core.settings.autoHeight && e.update()
        }), o(i).resize(function () {
            e._core.settings.autoHeight && (null != e._intervalId && clearTimeout(e._intervalId), e._intervalId = setTimeout(function () {
                e.update()
            }, 250))
        })
    }

    n.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, n.prototype.update = function () {
        var t = this._core._current, e = t + this._core.settings.items, i = this._core.settings.lazyLoad,
            t = this._core.$stage.children().toArray().slice(t, e), n = [], e = 0;
        o.each(t, function (t, e) {
            n.push(o(e).height())
        }), (e = Math.max.apply(null, n)) <= 1 && i && this._previousHeight && (e = this._previousHeight), this._previousHeight = e, this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)
    }, n.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, o.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
}(window.Zepto || window.jQuery, window, document), function (d, e) {
    function i(t) {
        this._core = t, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": d.proxy(function (t) {
                t.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": d.proxy(function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this), "refreshed.owl.carousel": d.proxy(function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": d.proxy(function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": d.proxy(function (t) {
                var e;
                t.namespace && (e = d(t.content).find(".owl-video")).length && (e.css("display", "none"), this.fetch(e, d(t.content)))
            }, this)
        }, this._core.options = d.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", d.proxy(function (t) {
            this.play(t)
        }, this))
    }

    i.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, i.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            o = t.attr("data-width") || this._core.settings.videoWidth,
            s = t.attr("data-height") || this._core.settings.videoHeight, r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (-1 < (n = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube"; else if (-1 < n[3].indexOf("vimeo")) i = "vimeo"; else {
            if (!(-1 < n[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[r] = {
            type: i,
            id: n,
            width: o,
            height: s
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, i.prototype.thumbnail = function (e, t) {
        function i(t) {
            n = c.lazyLoad ? d("<div/>", {class: "owl-video-tn " + l, srcType: t}) : d("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + t + ")"
            }), e.after(n), e.after('<div class="owl-video-play-icon"></div>')
        }

        var n, o, s = t.width && t.height ? "width:" + t.width + "px;height:" + t.height + "px;" : "",
            r = e.find("img"), a = "src", l = "", c = this._core.settings;
        if (e.wrap(d("<div/>", {
            class: "owl-video-wrapper",
            style: s
        })), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), r.length) return i(r.attr(a)), r.remove(), !1;
        "youtube" === t.type ? (o = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", i(o)) : "vimeo" === t.type ? d.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                o = t[0].thumbnail_large, i(o)
            }
        }) : "vzaar" === t.type && d.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                o = t.framegrab_url, i(o)
            }
        })
    }, i.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, i.prototype.play = function (t) {
        var e, t = d(t.target).closest("." + this._core.settings.itemClass), i = this._videos[t.attr("data-video")],
            n = i.width || "100%", o = i.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), t = this._core.items(this._core.relative(t.index())), this._core.reset(t.index()), (e = d('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", o), e.attr("width", n), "youtube" === i.type ? e.attr("src", "//www.youtube.com/embed/" + i.id + "?autoplay=1&rel=0&v=" + i.id) : "vimeo" === i.type ? e.attr("src", "//player.vimeo.com/video/" + i.id + "?autoplay=1") : "vzaar" === i.type && e.attr("src", "//view.vzaar.com/" + i.id + "/player?autoplay=true"), d(e).wrap('<div class="owl-video-frame" />').insertAfter(t.find(".owl-video")), this._playing = t.addClass("owl-video-playing"))
    }, i.prototype.isInFullScreen = function () {
        var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
        return t && d(t).parent().hasClass("owl-video-frame")
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, d.fn.owlCarousel.Constructor.Plugins.Video = i
}(window.Zepto || window.jQuery, (window, document)), function (r) {
    function e(t) {
        this.core = t, this.core.options = r.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": r.proxy(function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": r.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this), "translate.owl.carousel": r.proxy(function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    }

    e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
        var t, e, i, n, o, s;
        1 === this.core.settings.items && r.support.animation && r.support.transition && (this.core.speed(0), e = r.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous), n = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn, s = this.core.settings.animateOut, this.core.current() !== this.previous) && (s && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(r.support.animation.end, e).css({left: t + "px"}).addClass("animated owl-animated-out").addClass(s)), o) && n.one(r.support.animation.end, e).addClass("animated owl-animated-in").addClass(o)
    }, e.prototype.clear = function (t) {
        r(t.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, r.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, (window, document)), function (n, o, e) {
    function i(t) {
        this._core = t, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": n.proxy(function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this), "initialized.owl.carousel": n.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": n.proxy(function (t, e, i) {
                t.namespace && this.play(e, i)
            }, this), "stop.owl.autoplay": n.proxy(function (t) {
                t.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": n.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": n.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": n.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": n.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = n.extend({}, i.Defaults, this._core.options)
    }

    i.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, i.prototype._next = function (t) {
        this._call = o.setTimeout(n.proxy(this._next, this, t), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || e.hidden || this._core.next(t || this._core.settings.autoplaySpeed)
    }, i.prototype.read = function () {
        return (new Date).getTime() - this._time
    }, i.prototype.play = function (t, e) {
        var i;
        this._core.is("rotating") || this._core.enter("rotating"), t = t || this._core.settings.autoplayTimeout, i = Math.min(this._time % (this._timeout || t), t), this._paused ? (this._time = this.read(), this._paused = !1) : o.clearTimeout(this._call), this._time += this.read() % t - i, this._timeout = t, this._call = o.setTimeout(n.proxy(this._next, this, e), t - i)
    }, i.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, o.clearTimeout(this._call), this._core.leave("rotating"))
    }, i.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, o.clearTimeout(this._call))
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, n.fn.owlCarousel.Constructor.Plugins.autoplay = i
}(window.Zepto || window.jQuery, window, document), function (o) {
    "use strict";

    function e(t) {
        this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + o(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": o.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this), "changed.owl.carousel": o.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this), "initialized.owl.carousel": o.proxy(function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": o.proxy(function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = o.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    }

    e.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function () {
        var t, i = this._core.settings;
        for (t in this._controls.$relative = (i.navContainer ? o(i.navContainer) : o("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = o("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", o.proxy(function (t) {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next = o("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", o.proxy(function (t) {
            this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [o('<button role="button">').addClass(i.dotClass).append(o("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? o(i.dotsContainer) : o("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", o.proxy(function (t) {
            var e = (o(t.target).parent().is(this._controls.$absolute) ? o(t.target) : o(t.target).parent()).index();
            t.preventDefault(), this.to(e, i.dotsSpeed)
        }, this)), this._overrides) this._core[t] = o.proxy(this[t], this)
    }, e.prototype.destroy = function () {
        var t, e, i, n, o = this._core.settings;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) "$relative" === e && o.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.prototype.update = function () {
        var t, e, i = this._core.clones().length / 2, n = i + this._core.items().length, o = this._core.maximum(!0),
            s = this._core.settings, r = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy) for (this._pages = [], t = i, e = 0; t < n; t++) {
            if (r <= e || 0 === e) {
                if (this._pages.push({start: Math.min(o, t - i), end: t - i + r - 1}), Math.min(o, t - i) === o) break;
                e = 0, 0
            }
            e += this._core.mergers(this._core.relative(t))
        }
    }, e.prototype.draw = function () {
        var t = this._core.settings, e = this._core.items().length <= t.items,
            i = this._core.relative(this._core.current()), n = t.loop || t.rewind;
        this._controls.$relative.toggleClass("disabled", !t.nav || e), t.nav && (this._controls.$previous.toggleClass("disabled", !n && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !n && i >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !t.dots || e), t.dots && (n = this._pages.length - this._controls.$absolute.children().length, t.dotsData && 0 != n ? this._controls.$absolute.html(this._templates.join("")) : 0 < n ? this._controls.$absolute.append(new Array(1 + n).join(this._templates[0])) : n < 0 && this._controls.$absolute.children().slice(n).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(o.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function (t) {
        var e = this._core.settings;
        t.page = {
            index: o.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
        }
    }, e.prototype.current = function () {
        var i = this._core.relative(this._core.current());
        return o.grep(this._pages, o.proxy(function (t, e) {
            return t.start <= i && t.end >= i
        }, this)).pop()
    }, e.prototype.getPosition = function (t) {
        var e, i, n = this._core.settings;
        return "page" == n.slideBy ? (e = o.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += n.slideBy : e -= n.slideBy), e
    }, e.prototype.next = function (t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, e.prototype.prev = function (t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, e.prototype.to = function (t, e, i) {
        !i && this._pages.length ? (i = this._pages.length, o.proxy(this._overrides.to, this._core)(this._pages[(t % i + i) % i].start, e)) : o.proxy(this._overrides.to, this._core)(t, e)
    }, o.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, (window, document)), function (n, o) {
    "use strict";

    function e(t) {
        this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": n.proxy(function (t) {
                t.namespace && "URLHash" === this._core.settings.startPosition && n(o).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": n.proxy(function (t) {
                var e;
                t.namespace && (e = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash")) && (this._hashes[e] = t.content)
            }, this), "changed.owl.carousel": n.proxy(function (t) {
                var i;
                t.namespace && "position" === t.property.name && (i = this._core.items(this._core.relative(this._core.current())), t = n.map(this._hashes, function (t, e) {
                    return t === i ? e : null
                }).join()) && o.location.hash.slice(1) !== t && (o.location.hash = t)
            }, this)
        }, this._core.options = n.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), n(o).on("hashchange.owl.navigation", n.proxy(function (t) {
            var e = o.location.hash.substring(1), i = this._core.$stage.children(),
                i = this._hashes[e] && i.index(this._hashes[e]);
            void 0 !== i && i !== this._core.current() && this._core.to(this._core.relative(i), !1, !0)
        }, this))
    }

    e.Defaults = {URLhashListener: !1}, e.prototype.destroy = function () {
        var t, e;
        for (t in n(o).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, n.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document), function (o) {
    function e(t, i) {
        var n = !1, e = t.charAt(0).toUpperCase() + t.slice(1);
        return o.each((t + " " + r.join(e + " ") + e).split(" "), function (t, e) {
            if (void 0 !== s[e]) return n = !i || e, !1
        }), n
    }

    function t(t) {
        return e(t, !0)
    }

    var s = o("<support>").get(0).style, r = "Webkit Moz O ms".split(" "), i = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, n = function () {
        return !!e("transform")
    }, a = function () {
        return !!e("perspective")
    }, l = function () {
        return !!e("animation")
    };
    !function () {
        return !!e("transition")
    }() || (o.support.transition = new String(t("transition")), o.support.transition.end = i.transition.end[o.support.transition]), l() && (o.support.animation = new String(t("animation")), o.support.animation.end = i.animation.end[o.support.animation]), n() && (o.support.transform = new String(t("transform")), o.support.transform3d = a())
}(window.Zepto || window.jQuery, (window, document)), function (h, n) {
    function o(t, e) {
        this.element = t, this.settings = h.extend({}, i, e), this.settings.duplicate || e.hasOwnProperty("removeIds") || (this.settings.removeIds = !1), this._defaults = i, this._name = s, this.init()
    }

    var i = {
        label: "MENU",
        duplicate: !0,
        duration: 200,
        easingOpen: "swing",
        easingClose: "swing",
        closedSymbol: "&#9658;",
        openedSymbol: "&#9660;",
        prependTo: "body",
        appendTo: "",
        parentTag: "a",
        closeOnClick: !1,
        allowParentLinks: !1,
        nestedParentLinks: !0,
        showChildren: !1,
        removeIds: !0,
        removeClasses: !1,
        removeStyles: !1,
        brand: "",
        animations: "jquery",
        init: function () {
        },
        beforeOpen: function () {
        },
        beforeClose: function () {
        },
        afterOpen: function () {
        },
        afterClose: function () {
        }
    }, s = "slicknav", u = "slicknav", a = 40, l = 13, c = 27, d = 37, p = 39, m = 32, g = 38;
    o.prototype.init = function () {
        var t, s = this, e = h(this.element), r = this.settings,
            i = (r.duplicate ? s.mobileNav = e.clone() : s.mobileNav = e, r.removeIds && (s.mobileNav.removeAttr("id"), s.mobileNav.find("*").each(function (t, e) {
                h(e).removeAttr("id")
            })), r.removeClasses && (s.mobileNav.removeAttr("class"), s.mobileNav.find("*").each(function (t, e) {
                h(e).removeAttr("class")
            })), r.removeStyles && (s.mobileNav.removeAttr("style"), s.mobileNav.find("*").each(function (t, e) {
                h(e).removeAttr("style")
            })), e = u + "_icon", "" === r.label && (e += " " + u + "_no-text"), "a" == r.parentTag && (r.parentTag = 'a href="#"'), s.mobileNav.attr("class", u + "_nav"), t = h('<div class="' + u + '_menu"></div>'), "" !== r.brand && (i = h('<div class="' + u + '_brand">' + r.brand + "</div>"), h(t).append(i)), s.btn = h(["<" + r.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + u + "_btn " + u + '_collapsed">', '<span class="' + u + '_menutxt">' + r.label + "</span>", '<span class="' + e + '">', '<span class="' + u + '_icon-bar"></span>', '<span class="' + u + '_icon-bar"></span>', '<span class="' + u + '_icon-bar"></span>', "</span>", "</" + r.parentTag + ">"].join("")), h(t).append(s.btn), "" !== r.appendTo ? h(r.appendTo).append(t) : h(r.prependTo).prepend(t), t.append(s.mobileNav), s.mobileNav.find("li"));
        h(i).each(function () {
            var t, e, i, n = h(this), o = {};
            o.children = n.children("ul").attr("role", "menu"), n.data("menu", o), 0 < o.children.length ? (o = n.contents(), t = !1, e = [], h(o).each(function () {
                return !h(this).is("ul") && (e.push(this), void (h(this).is("a") && (t = !0)))
            }), o = h("<" + r.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + u + '_item"/>'), r.allowParentLinks && !r.nestedParentLinks && t ? h(e).wrapAll('<span class="' + u + "_parent-link " + u + '_row"/>').parent() : h(e).wrapAll(o).parent().addClass(u + "_row"), r.showChildren ? n.addClass(u + "_open") : n.addClass(u + "_collapsed"), n.addClass(u + "_parent"), i = h('<span class="' + u + '_arrow">' + (r.showChildren ? r.openedSymbol : r.closedSymbol) + "</span>"), r.allowParentLinks && !r.nestedParentLinks && t && (i = i.wrap(o).parent()), h(e).last().after(i)) : 0 === n.children().length && n.addClass(u + "_txtnode"), n.children("a").attr("role", "menuitem").click(function (t) {
                r.closeOnClick && !h(t.target).parent().closest("li").hasClass(u + "_parent") && h(s.btn).click()
            }), r.closeOnClick && r.allowParentLinks && (n.children("a").children("a").click(function (t) {
                h(s.btn).click()
            }), n.find("." + u + "_parent-link a:not(." + u + "_item)").click(function (t) {
                h(s.btn).click()
            }))
        }), h(i).each(function () {
            var t = h(this).data("menu");
            r.showChildren || s._visibilityToggle(t.children, null, !1, null, !0)
        }), s._visibilityToggle(s.mobileNav, null, !1, "init", !0), s.mobileNav.attr("role", "menu"), h(n).mousedown(function () {
            s._outlines(!1)
        }), h(n).keyup(function () {
            s._outlines(!0)
        }), h(s.btn).click(function (t) {
            t.preventDefault(), s._menuToggle()
        }), s.mobileNav.on("click", "." + u + "_item", function (t) {
            t.preventDefault(), s._itemClick(h(this))
        }), h(s.btn).keydown(function (t) {
            var e = t || event;
            switch (e.keyCode) {
                case l:
                case m:
                case a:
                    t.preventDefault(), e.keyCode === a && h(s.btn).hasClass(u + "_open") || s._menuToggle(), h(s.btn).next().find('[role="menuitem"]').first().focus()
            }
        }), s.mobileNav.on("keydown", "." + u + "_item", function (t) {
            switch ((t || event).keyCode) {
                case l:
                    t.preventDefault(), s._itemClick(h(t.target));
                    break;
                case p:
                    t.preventDefault(), h(t.target).parent().hasClass(u + "_collapsed") && s._itemClick(h(t.target)), h(t.target).next().find('[role="menuitem"]').first().focus()
            }
        }), s.mobileNav.on("keydown", '[role="menuitem"]', function (t) {
            switch ((t || event).keyCode) {
                case a:
                    t.preventDefault();
                    var e = (n = (i = h(t.target).parent().parent().children().children('[role="menuitem"]:visible')).index(t.target)) + 1;
                    i.length <= e && (e = 0), i.eq(e).focus();
                    break;
                case g:
                    t.preventDefault();
                    var i,
                        n = (i = h(t.target).parent().parent().children().children('[role="menuitem"]:visible')).index(t.target);
                    i.eq(n - 1).focus();
                    break;
                case d:
                    t.preventDefault(), h(t.target).parent().parent().parent().hasClass(u + "_open") ? ((e = h(t.target).parent().parent().prev()).focus(), s._itemClick(e)) : h(t.target).parent().parent().hasClass(u + "_nav") && (s._menuToggle(), h(s.btn).focus());
                    break;
                case c:
                    t.preventDefault(), s._menuToggle(), h(s.btn).focus()
            }
        }), r.allowParentLinks && r.nestedParentLinks && h("." + u + "_item a").click(function (t) {
            t.stopImmediatePropagation()
        })
    }, o.prototype._menuToggle = function (t) {
        var e = this.btn, i = this.mobileNav;
        e.hasClass(u + "_collapsed") ? (e.removeClass(u + "_collapsed"), e.addClass(u + "_open")) : (e.removeClass(u + "_open"), e.addClass(u + "_collapsed")), e.addClass(u + "_animating"), this._visibilityToggle(i, e.parent(), !0, e)
    }, o.prototype._itemClick = function (t) {
        var e = this.settings, i = t.data("menu");
        i || ((i = {}).arrow = t.children("." + u + "_arrow"), i.ul = t.next("ul"), i.parent = t.parent(), i.parent.hasClass(u + "_parent-link") && (i.parent = t.parent().parent(), i.ul = t.parent().next("ul")), t.data("menu", i)), i.parent.hasClass(u + "_collapsed") ? (i.arrow.html(e.openedSymbol), i.parent.removeClass(u + "_collapsed"), i.parent.addClass(u + "_open")) : (i.arrow.html(e.closedSymbol), i.parent.addClass(u + "_collapsed"), i.parent.removeClass(u + "_open")), i.parent.addClass(u + "_animating"), this._visibilityToggle(i.ul, i.parent, !0, t)
    }, o.prototype._visibilityToggle = function (i, t, e, n, o) {
        function s(t, e) {
            h(t).removeClass(u + "_animating"), h(e).removeClass(u + "_animating"), o || l.afterOpen(t)
        }

        function r(t, e) {
            i.attr("aria-hidden", "true"), c.attr("tabindex", "-1"), a._setVisAttr(i, !0), i.hide(), h(t).removeClass(u + "_animating"), h(e).removeClass(u + "_animating"), o ? "init" == t && l.init() : l.afterClose(t)
        }

        var a = this, l = a.settings, c = a._getActionItems(i), d = 0;
        e && (d = l.duration), i.hasClass(u + "_hidden") ? (i.removeClass(u + "_hidden"), o || l.beforeOpen(n), "jquery" === l.animations ? i.stop(!0, !0).slideDown(d, l.easingOpen, function () {
            s(n, t)
        }) : "velocity" === l.animations && i.velocity("finish").velocity("slideDown", {
            duration: d,
            easing: l.easingOpen,
            complete: function () {
                s(n, t)
            }
        }), i.attr("aria-hidden", "false"), c.attr("tabindex", "0"), a._setVisAttr(i, !1)) : (i.addClass(u + "_hidden"), o || l.beforeClose(n), "jquery" === l.animations ? i.stop(!0, !0).slideUp(d, this.settings.easingClose, function () {
            r(n, t)
        }) : "velocity" === l.animations && i.velocity("finish").velocity("slideUp", {
            duration: d,
            easing: l.easingClose,
            complete: function () {
                r(n, t)
            }
        }))
    }, o.prototype._setVisAttr = function (t, e) {
        var i = this, t = t.children("li").children("ul").not("." + u + "_hidden");
        e ? t.each(function () {
            var t = h(this);
            t.attr("aria-hidden", "true"), i._getActionItems(t).attr("tabindex", "-1"), i._setVisAttr(t, e)
        }) : t.each(function () {
            var t = h(this);
            t.attr("aria-hidden", "false"), i._getActionItems(t).attr("tabindex", "0"), i._setVisAttr(t, e)
        })
    }, o.prototype._getActionItems = function (t) {
        var e, i, n = t.data("menu");
        return n || (n = {}, i = (e = t.children("li")).find("a"), n.links = i.add(e.find("." + u + "_item")), t.data("menu", n)), n.links
    }, o.prototype._outlines = function (t) {
        t ? h("." + u + "_item, ." + u + "_btn").css("outline", "") : h("." + u + "_item, ." + u + "_btn").css("outline", "none")
    }, o.prototype.toggle = function () {
        this._menuToggle()
    }, o.prototype.open = function () {
        this.btn.hasClass(u + "_collapsed") && this._menuToggle()
    }, o.prototype.close = function () {
        this.btn.hasClass(u + "_open") && this._menuToggle()
    }, h.fn[s] = function (e) {
        var i, n = arguments;
        return void 0 === e || "object" == typeof e ? this.each(function () {
            h.data(this, "plugin_" + s) || h.data(this, "plugin_" + s, new o(this, e))
        }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? (this.each(function () {
            var t = h.data(this, "plugin_" + s);
            t instanceof o && "function" == typeof t[e] && (i = t[e].apply(t, Array.prototype.slice.call(n, 1)))
        }), void 0 !== i ? i : this) : void 0
    }
}(jQuery, document, window), function () {
    "use strict";
    var t = document.createElement("style"),
        e = (t.innerHTML = "@keyframes pulsate{0%,to{opacity:1}50%{opacity:.2}}#spotlight{position:fixed;top:-1px;bottom:-1px;width:100%;z-index:99999;color:#fff;background-color:#000;opacity:0;overflow:hidden;-webkit-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .2s ease-out;font-family:Arial,sans-serif;font-size:16px;font-weight:400;contain:strict;touch-action:none;pointer-events:none}#spotlight.show{opacity:1;transition:none;pointer-events:auto}#spotlight.white{color:#212529;background-color:#fff}#spotlight.white .spl-next,#spotlight.white .spl-page~*,#spotlight.white .spl-prev,#spotlight.white .spl-spinner{filter:invert(1)}#spotlight.white .spl-progress{background-color:rgba(0,0,0,.35)}#spotlight.white .spl-footer,#spotlight.white .spl-header{background-color:rgba(255,255,255,.65)}#spotlight.white .spl-button{background:#212529;color:#fff}.spl-footer,.spl-header{background-color:rgba(0,0,0,.45)}#spotlight .contain,#spotlight .cover{object-fit:cover;height:100%;width:100%}#spotlight .contain{object-fit:contain}#spotlight .autofit{object-fit:none;width:auto;height:auto;max-height:none;max-width:none;transition:none}.spl-scene,.spl-spinner,.spl-track{width:100%;height:100%;position:absolute}.spl-track{contain:strict}.spl-spinner{background-position:center;background-repeat:no-repeat;background-size:42px;opacity:0}.spl-spinner.spin{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmYiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iLjY1Ij48Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuMTUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMTggMTgiIHRvPSIzNjAgMTggMTgiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvZz48L2c+PC9zdmc+);transition:opacity .2s linear .25s;opacity:1}.spl-spinner.error{background-image:url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB3aWR0aD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYsMUExNSwxNSwwLDEsMCwzMSwxNiwxNSwxNSwwLDAsMCwxNiwxWm0wLDJhMTMsMTMsMCwwLDEsOC40NSwzLjE0TDYuMTQsMjQuNDVBMTMsMTMsMCwwLDEsMTYsM1ptMCwyNmExMywxMywwLDAsMS04LjQ1LTMuMTRMMjUuODYsNy41NUExMywxMywwLDAsMSwxNiwyOVoiIGlkPSJiYW5fc2lnbl9jcm9zc2VkX2NpcmNsZSIvPjwvc3ZnPg==);background-size:128px;transition:none;opacity:.5}.spl-scene{transition:transform .65s cubic-bezier(.1,1,.1,1);contain:layout size;will-change:transform}.spl-pane>*{position:absolute;width:auto;height:auto;max-width:100%;max-height:100%;left:50%;top:50%;margin:0;padding:0;border:0;transform:translate(-50%,-50%) scale(1);transition:transform .65s cubic-bezier(.3,1,.3,1),opacity .65s ease;contain:layout style;will-change:transform,opacity;visibility:hidden}.spl-header,.spl-pane,.spl-progress{position:absolute;top:0}.spl-pane{width:100%;height:100%;transition:transform .65s cubic-bezier(.3,1,.3,1);contain:layout size;will-change:transform,contents}.spl-header{width:100%;height:50px;text-align:right;transform:translateY(-100px);transition:transform .35s ease;overflow:hidden;will-change:transform}#spotlight.menu .spl-footer,#spotlight.menu .spl-header,.spl-footer:hover,.spl-header:hover{transform:translateY(0)}.spl-header div{display:inline-block;vertical-align:middle;white-space:nowrap;width:50px;height:50px;opacity:.5}.spl-progress{width:100%;height:3px;background-color:rgba(255,255,255,.45);transform:translateX(-100%);transition:transform linear}.spl-footer,.spl-next,.spl-prev{position:absolute;transition:transform .35s ease;will-change:transform}.spl-footer{left:0;right:0;bottom:0;line-height:20px;padding:20px 20px 0;padding-bottom:env(safe-area-inset-bottom,0);text-align:left;font-size:15px;font-weight:400;transform:translateY(100%)}.spl-title{font-size:22px}.spl-button,.spl-description,.spl-title{margin-bottom:20px}.spl-button{display:inline-block;background:#fff;color:#000;border-radius:5px;padding:10px 20px;cursor:pointer}.spl-next,.spl-page~*,.spl-prev{background-position:center;background-repeat:no-repeat}.spl-page{float:left;width:auto;line-height:50px}.spl-page~*{background-size:21px;float:right}.spl-fullscreen{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9Ii0xIC0xIDI2IDI2IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggM0g1YTIgMiAwIDAgMC0yIDJ2M20xOCAwVjVhMiAyIDAgMCAwLTItMmgtM20wIDE4aDNhMiAyIDAgMCAwIDItMnYtM00zIDE2djNhMiAyIDAgMCAwIDIgMmgzIi8+PC9zdmc+)}.spl-fullscreen.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04IDN2M2EyIDIgMCAwIDEtMiAySDNtMTggMGgtM2EyIDIgMCAwIDEtMi0yVjNtMCAxOHYtM2EyIDIgMCAwIDEgMi0yaDNNMyAxNmgzYTIgMiAwIDAgMSAyIDJ2MyIvPjwvc3ZnPg==)}.spl-autofit{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9Ijk2cHgiIHZpZXdCb3g9IjAgMCA5NiA5NiIgd2lkdGg9Ijk2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoOTAgNTAgNTApIiBmaWxsPSIjZmZmIiBkPSJNNzEuMzExLDgwQzY5LjY3LDg0LjY2LDY1LjIzLDg4LDYwLDg4SDIwYy02LjYzLDAtMTItNS4zNy0xMi0xMlYzNmMwLTUuMjMsMy4zNC05LjY3LDgtMTEuMzExVjc2YzAsMi4yMSwxLjc5LDQsNCw0SDcxLjMxMSAgeiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSIgZmlsbD0iI2ZmZiIgZD0iTTc2LDhIMzZjLTYuNjMsMC0xMiw1LjM3LTEyLDEydjQwYzAsNi42Myw1LjM3LDEyLDEyLDEyaDQwYzYuNjMsMCwxMi01LjM3LDEyLTEyVjIwQzg4LDEzLjM3LDgyLjYzLDgsNzYsOHogTTgwLDYwICBjMCwyLjIxLTEuNzksNC00LDRIMzZjLTIuMjEsMC00LTEuNzktNC00VjIwYzAtMi4yMSwxLjc5LTQsNC00aDQwYzIuMjEsMCw0LDEuNzksNCw0VjYweiIvPjwvc3ZnPg==)}.spl-zoom-in,.spl-zoom-out{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjgiIHgyPSIxNCIgeTE9IjExIiB5Mj0iMTEiLz48L3N2Zz4=);background-size:22px}.spl-zoom-in{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjExIiB4Mj0iMTEiIHkxPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxMSIvPjwvc3ZnPg==)}.spl-download{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNDEuNzMycHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE0MS43MzIgMTQxLjczMiIgd2lkdGg9IjE0MS43MzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIwLjY3NCwxMjUuMTM4SDIwLjc5M3YxNi41OTRoOTkuODgxVjEyNS4xMzh6IE0xMTkuMDE5LDU4Ljc3NmMtMi41NjEtMi41NjItNi43MTYtMi41NjItOS4yNzUsMEw3Ny4yMSw5MS4zMTJWNi41NjIgICBDNzcuMjEsMi45MzYsNzQuMjY5LDAsNzAuNjQ4LDBjLTMuNjI0LDAtNi41NiwyLjkzNy02LjU2LDYuNTYzdjg0Ljc1TDMxLjk5Miw1OS4yMThjLTIuNTYyLTIuNTY0LTYuNzE1LTIuNTY0LTkuMjc3LDAgICBjLTIuNTY1LDIuNTYyLTIuNTY1LDYuNzE2LDAsOS4yNzlsNDMuMjk0LDQzLjI5M2MwLjE1LDAuMTU0LDAuMzE0LDAuMjk5LDAuNDgxLDAuNDM4YzAuMDc2LDAuMDYyLDAuMTU1LDAuMTEzLDAuMjM0LDAuMTc2ICAgYzAuMDk0LDAuMDY1LDAuMTg2LDAuMTQyLDAuMjc5LDAuMjA2YzAuMDk3LDAuMDYzLDAuMTkyLDAuMTE0LDAuMjg2LDAuMTc0YzAuMDg4LDAuMDU0LDAuMTc0LDAuMTA1LDAuMjY1LDAuMTUzICAgYzAuMSwwLjA1NiwwLjE5OSwwLjEsMC4yOTgsMC4xNDdjMC4wOTcsMC4wNDUsMC4xOSwwLjA5MSwwLjI4MywwLjEzMmMwLjA5OCwwLjA0LDAuMTk2LDAuMDcyLDAuMjk1LDAuMTA1ICAgYzAuMTA0LDAuMDM4LDAuMjA3LDAuMDc4LDAuMzEyLDAuMTA5YzAuMTAxLDAuMDMsMC4xOTcsMC4wNTIsMC4yOTcsMC4wNzdjMC4xMDgsMC4wMjMsMC4yMTQsMC4wNTgsMC4zMjQsMC4wNzggICBjMC4xMTUsMC4wMjEsMC4yMzEsMC4wMzMsMC4zNDYsMC4wNTRjMC4wOTcsMC4wMTUsMC4xOTIsMC4wMzIsMC4yODksMC4wNDJjMC40MywwLjA0MiwwLjg2NSwwLjA0MiwxLjI5NSwwICAgYzAuMS0wLjAxLDAuMTkxLTAuMDI3LDAuMjg5LTAuMDQyYzAuMTE0LTAuMDIxLDAuMjMzLTAuMDI5LDAuMzQ0LTAuMDU0YzAuMTA5LTAuMDIxLDAuMjE3LTAuMDU1LDAuMzI0LTAuMDc4ICAgYzAuMTAyLTAuMDI1LDAuMTk5LTAuMDQ3LDAuMjk5LTAuMDc3YzAuMTA1LTAuMDMxLDAuMjA3LTAuMDcxLDAuMzEyLTAuMTA5YzAuMTAyLTAuMDMsMC4xOTUtMC4wNjIsMC4yOTUtMC4xMDUgICBjMC4wOTYtMC4wNDEsMC4xOTEtMC4wODcsMC4yODMtMC4xMzJjMC4xLTAuMDQ4LDAuMTk5LTAuMDkyLDAuMjk3LTAuMTQ3YzAuMDkxLTAuMDQ4LDAuMTc3LTAuMTA0LDAuMjY0LTAuMTUzICAgYzAuMDk4LTAuMDYsMC4xOTMtMC4xMSwwLjI4Ny0wLjE3NGMwLjA5Ni0wLjA2NCwwLjE4OS0wLjE0MSwwLjI4MS0wLjIwNmMwLjA3Ni0wLjA2MiwwLjE1Ni0wLjExMywwLjIzMy0wLjE3NiAgIGMwLjI0OS0wLjIwNCwwLjQ3OS0wLjQzNywwLjY5NC0wLjY3YzAuMDc2LTAuMDY3LDAuMTU0LTAuMTMxLDAuMjI5LTAuMjAzbDQzLjI5NC00My4yOTYgICBDMTIxLjU4MSw2NS40OTEsMTIxLjU4MSw2MS4zMzcsMTE5LjAxOSw1OC43NzYiLz48L2c+PC9zdmc+);background-size:20px}.spl-theme{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMiIgdmlld0JveD0iMiAyIDIwIDIwIiB3aWR0aD0iMjRweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIsNGMtNC40MTgsMC04LDMuNTgyLTgsOHMzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOFMxNi40MTgsNCwxMiw0eiBNMTIsMThjLTMuMzE0LDAtNi0yLjY4Ni02LTZzMi42ODYtNiw2LTZzNiwyLjY4Niw2LDYgUzE1LjMxNCwxOCwxMiwxOHoiLz48cGF0aCBkPSJNMTIsN3YxMGMyLjc1NywwLDUtMi4yNDMsNS01UzE0Ljc1Nyw3LDEyLDd6Ii8+PC9nPjwvc3ZnPg==)}.spl-play{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwb2x5Z29uIGZpbGw9IiNmZmYiIHBvaW50cz0iMTAgOCAxNiAxMiAxMCAxNiAxMCA4Ii8+PC9zdmc+)}.spl-play.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTUiIHkyPSI5Ii8+PGxpbmUgeDE9IjE0IiB4Mj0iMTQiIHkxPSIxNSIgeTI9IjkiLz48L3N2Zz4=);animation:pulsate 1s ease infinite}.spl-close{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIyIDIgMjAgMjAiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZSB4MT0iMTgiIHgyPSI2IiB5MT0iNiIgeTI9IjE4Ii8+PGxpbmUgeDE9IjYiIHgyPSIxOCIgeTE9IjYiIHkyPSIxOCIvPjwvc3ZnPg==)}.spl-next,.spl-prev{top:50%;width:50px;height:50px;opacity:.65;background-color:rgba(0,0,0,.45);border-radius:100%;cursor:pointer;margin-top:-25px;transform:translateX(-100px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSIxNSAxOCA5IDEyIDE1IDYiLz48L3N2Zz4=);background-size:30px}.spl-prev{left:20px}.spl-next{left:auto;right:20px;transform:translateX(100px) scaleX(-1)}#spotlight.menu .spl-prev{transform:translateX(0)}#spotlight.menu .spl-next{transform:translateX(0) scaleX(-1)}@media (hover:hover){.spl-page~div{cursor:pointer;transition:opacity .2s ease}.spl-next:hover,.spl-page~div:hover,.spl-prev:hover{opacity:1}}@media (max-width:500px){.spl-header div{width:44px}.spl-footer .spl-title{font-size:20px}.spl-footer{font-size:14px}.spl-next,.spl-prev{width:35px;height:35px;margin-top:-17.5px;background-size:15px 15px}.spl-spinner{background-size:30px 30px}}.hide-scrollbars{overflow:hidden!important}", document.getElementsByTagName("head")[0]);

    function d(t, e, i) {
        t.classList[i ? "add" : "remove"](e)
    }

    function h(t, e, i) {
        t["_s_" + e] !== (i = "" + i) && (t.style.setProperty(e, i), t["_s_" + e] = i)
    }

    e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t), Object.assign || (Object.assign = function (t, e) {
        for (var i, n = Object.keys(e), o = 0; o < n.length; o++) t[i = n[o]] = e[i];
        return t
    }), Element.prototype.closest || (Element.prototype.closest = function (t) {
        t = t.substring(1);
        for (var e = this; e && 1 === e.nodeType;) {
            if (e.classList.contains(t)) return e;
            e = e.parentElement
        }
        return null
    });
    var H = 0;

    function O(t, e) {
        e && (h(t, "transition", "none"), e()), H = H || t.clientTop && 0, e && h(t, "transition", "")
    }

    function n(t, e, i, n) {
        o(!0, t, e, i, n)
    }

    function o(t, e, i, n, o) {
        e[(t ? "add" : "remove") + "EventListener"](i, n, !o && !1 !== o || o)
    }

    function R(t, e) {
        t.stopPropagation(), e && t.preventDefault()
    }

    function u(t, e) {
        h(t, "display", e ? "" : "none")
    }

    function V(t, e) {
        h(t, "visibility", e ? "" : "hidden")
    }

    function p(t, e) {
        h(t, "transition", e ? "" : "none")
    }

    var Y = "theme download play page close autofit zoom-in zoom-out prev next fullscreen".split(" "),
        B = {page: 1, close: 1, autofit: 1, "zoom-in": 1, "zoom-out": 1, prev: 1, next: 1, fullscreen: 1},
        m = document.createElement("div"),
        Z = (m.id = "spotlight", m.innerHTML = "<div class=spl-spinner></div><div class=spl-track><div class=spl-scene><div class=spl-pane></div></div></div><div class=spl-header><div class=spl-page> </div></div><div class=spl-progress></div><div class=spl-footer><div class=spl-title> </div><div class=spl-description> </div><div class=spl-button> </div></div><div class=spl-prev></div><div class=spl-next></div>", {}),
        W = document.createElement("video");

    function U(t, e, i, n) {
        if ("node" !== n) for (var o, s = Object.keys(i), r = 0; r < s.length; r++) if (3 < (o = s[r]).length && 0 === o.indexOf("src")) if ("video" === n) {
            var a = Z[o];
            if (a) {
                if (0 < a) {
                    var l = i[o];
                    break
                }
            } else {
                if (W.canPlayType("video/" + o.substring(3).replace("-", "").toLowerCase())) {
                    Z[o] = 1, l = i[o];
                    break
                }
                Z[o] = -1
            }
        } else {
            var c;
            (a = parseInt(o.substring(4), 10)) && (a = Math.abs(e - a), !c || a < c) && (c = a, l = i[o])
        }
        return l || i.src || i.href || t.src || t.href
    }

    var g, f, G, q, y, Q, J, F, v, X, K, tt, b, w, I, _, x, M, et, it, C, nt, ot, st, rt, at, lt, S, ct, dt, ht, ut, L,
        pt, mt, gt, ft, A, s, E, yt, T, vt, bt, wt, It, _t, xt, Mt, Ct, St, Lt, At, i, Et, j, D, k, r, Tt, a, jt,
        Dt = {}, kt = navigator.connection, zt = window.devicePixelRatio || 1, Pt = document.createElement("img");

    function Nt() {
        function t(t) {
            return Dt[t] = (m || document).getElementsByClassName("spl-" + t)[0]
        }

        var e;
        s || (s = document.body, vt = t("scene"), bt = t("header"), wt = t("footer"), It = t("title"), _t = t("description"), xt = t("button"), Mt = t("prev"), Ct = t("next"), Lt = t("page"), i = t("progress"), Et = t("spinner"), yt = [t("pane")], l("close", ae), (a = s[a = "requestFullscreen"] || s[a = "msRequestFullscreen"] || s[a = "webkitRequestFullscreen"] || s[a = "mozRequestFullscreen"] ? a : "") ? (jt = a.replace("request", "exit").replace("mozRequest", "mozCancel").replace("Request", "Exit"), St = l("fullscreen", ee)) : Y.pop(), l("autofit", $), l("zoom-in", ne), l("zoom-out", oe), l("theme", ie), At = l("play", c), l("download", re), n(Mt, "click", ce), n(Ct, "click", de), n(e = t("track"), "mousedown", Xt), n(e, "mousemove", te), n(e, "mouseleave", Kt), n(e, "mouseup", Kt), n(e, "touchstart", Xt, {passive: !1}), n(e, "touchmove", te, {passive: !0}), n(e, "touchend", Kt), n(xt, "click", function () {
            ut ? ut(I, M) : ht && (location.href = ht)
        }))
    }

    function l(t, e) {
        var i = document.createElement("div");
        return i.className = "spl-" + t, n(i, "click", e), bt.appendChild(i), Dt[t] = i
    }

    function $t(t) {
        if (_ = x.length) {
            s || Nt(), ot && ot(t);
            for (var e = yt[0], i = e.parentNode, n = yt.length; n < _; n++) {
                var o = e.cloneNode(!1);
                h(o, "left", 100 * n + "%"), i.appendChild(o), yt[n] = o
            }
            E || (s.appendChild(m), Yt()), I = t || 1, p(vt), ue(!0), a && u(St, 0 < screen.availHeight - window.innerHeight), history.pushState({spl: 1}, ""), history.pushState({spl: 2}, ""), p(m, !0), d(s, "hide-scrollbars", !0), d(m, "show", !0), Ut(!0), Yt(), N(), S && c(!0, !0)
        }
    }

    function z(t, e) {
        return void 0 !== (t = M[t]) ? "false" !== (t = "" + t) && (t || e) : e
    }

    function Ht(t) {
        t ? O(T, Ht) : (p(vt, ft), h(T, "opacity", gt ? 0 : 1), Zt(mt && .8), A && d(T, A, !0))
    }

    function Ot(t, e) {
        t && d(Et, "spin", e)
    }

    function Rt() {
        return document.fullscreen || document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement
    }

    function Vt() {
        var t;
        Yt(), T && Bt(), a && (t = Rt(), d(St, "on", t), t || u(St, 0 < screen.availHeight - window.innerHeight))
    }

    function Yt() {
        y = m.clientWidth, Q = m.clientHeight
    }

    function Bt() {
        J = T.clientWidth, F = T.clientHeight
    }

    function Zt(t) {
        h(T, "transform", "translate(-50%, -50%) scale(" + (t || v) + ")")
    }

    function P(t, e) {
        h(E, "transform", t || e ? "translate(" + t + "px, " + e + "px)" : "")
    }

    function Wt(t, e, i) {
        e ? O(vt, function () {
            Wt(t, !1, i)
        }) : h(vt, "transform", "translateX(" + (100 * -t + (i || 0)) + "%)")
    }

    function Ut(t) {
        o(t, window, "keydown", qt), o(t, window, "wheel", Qt), o(t, window, "resize", Vt), o(t, window, "popstate", Gt)
    }

    function Gt(t) {
        E && t.state.spl && ae(!0)
    }

    function qt(t) {
        if (E) {
            var e = !1 !== M["zoom-in"];
            switch (t.keyCode) {
                case 8:
                    e && $();
                    break;
                case 27:
                    ae();
                    break;
                case 32:
                    S && c();
                    break;
                case 37:
                    ce();
                    break;
                case 39:
                    de();
                    break;
                case 38:
                case 107:
                case 187:
                    e && ne();
                    break;
                case 40:
                case 109:
                case 189:
                    e && oe()
            }
        }
    }

    function Qt(t) {
        E && !1 !== M["zoom-in"] && (.5 * ((t = t.deltaY) < 0 ? 1 : t ? -1 : 0) < 0 ? oe : ne)()
    }

    function c(t, e) {
        ("boolean" == typeof t ? t : !k) === !k && (k = k ? clearTimeout(k) : 1, d(At, "on", k), e || Jt(k))
    }

    function Jt(t) {
        nt && (O(i, function () {
            h(i, "transition-duration", ""), h(i, "transform", "")
        }), t) && (h(i, "transition-duration", pt + "s"), h(i, "transform", "translateX(0)")), t && (k = setTimeout(de, 1e3 * pt))
    }

    function N() {
        lt && (Tt = Date.now() + 2950, r || (d(m, "menu", !0), function e(t) {
            r = setTimeout(function () {
                var t = Date.now();
                Tt <= t ? (d(m, "menu"), r = 0) : e(Tt - t)
            }, t)
        }(3e3)))
    }

    function Ft(t) {
        (r = "boolean" == typeof t ? t ? r : 0 : r) ? (r = clearTimeout(r), d(m, "menu")) : N()
    }

    function Xt(t) {
        R(t, !0), K = !(X = !0);
        var e = t.touches;
        (e = e && e[0]) && (t = e), tt = J * v <= y, G = t.pageX, q = t.pageY, p(E)
    }

    function Kt(t) {
        var e;
        R(t), X && (K ? (tt && K && (e = (t = g < -y / 7 && (I < _ || C)) || y / 7 < g && (1 < I || C), (t || e) && (Wt(I - 1, !0, g / y * 100), t && de() || e && ce()), g = 0, P()), p(E, !0)) : Ft(), X = !1)
    }

    function te(t) {
        var e;
        R(t), X ? ((e = (e = t.touches) && e[0]) && (t = e), e = (J * v - y) / 2, g -= G - (G = t.pageX), tt || (e < g ? g = e : g < -e && (g = -e), Q < F * v && ((e = (F * v - Q) / 2) < (f -= q - (q = t.pageY)) ? f = e : f < -e && (f = -e))), K = !0, P(g, f)) : N()
    }

    function ee(t) {
        var e = Rt();
        "boolean" == typeof t && t === !!e || (e ? document[jt]() : m[a]())
    }

    function ie(t) {
        w !== (t = "string" != typeof t ? w ? "" : ct || "white" : t) && (w && d(m, w), t && d(m, t, !0), w = t)
    }

    function $(t) {
        "boolean" == typeof t && (b = !t), d(T, "autofit", b = 1 === v && !b), h(T, "transform", ""), v = 1, f = g = 0, Bt(), p(E), P()
    }

    function ne() {
        var t = v / .65;
        t <= 50 && (b && $(), P(g /= .65, f /= .65), se(t))
    }

    function oe() {
        var t = .65 * v;
        b && $(), 1 <= t && (1 == t ? g = f = 0 : (g *= .65, f *= .65), P(g, f), se(t))
    }

    function se(t) {
        v = t || 1, Zt()
    }

    function re() {
        var t = s, e = document.createElement("a"), i = T.src;
        e.href = i, e.download = i.substring(i.lastIndexOf("/") + 1), t.appendChild(e), e.click(), t.removeChild(e)
    }

    function ae(t) {
        setTimeout(function () {
            s.removeChild(m), E = T = j = M = it = x = ot = st = rt = ut = null
        }, 200), d(s, "hide-scrollbars"), d(m, "show"), ee(!1), Ut(), history.go(!0 === t ? -1 : -2), D && (Pt.src = ""), k && c(), T && le(T), r = r && clearTimeout(r), w && ie(), L && d(m, L), rt && rt()
    }

    function le(t) {
        var e;
        t.g ? (t.g.appendChild(t), t.g = null) : ((e = t.parentNode) && e.removeChild(t), t.src = t.onerror = "")
    }

    function ce(t) {
        if (t && N(), 1 < _) return 1 < I ? he(I - 1) : C ? (Wt(_, !0), he(_)) : void 0
    }

    function de(t) {
        if (t && N(), 1 < _) return I < _ ? he(I + 1) : C ? (Wt(-1, !0), he(1)) : void (k && c())
    }

    function he(t) {
        var e;
        if (t !== I) return (k ? (clearTimeout(k), Jt) : N)(), e = I < t, I = t, ue(e), !0
    }

    function ue(t) {
        f = g = 0, v = 1, T && (T.onerror ? le(T) : (e = T, setTimeout(function () {
            e && T !== e && (le(e), e = null)
        }, 650), Ht(), P()));
        var e, i = t, n = x[I - 1], o = n;
        if (M = {}, it && Object.assign(M, it), Object.assign(M, o.dataset || o), et = M.media, ut = M.onclick, ct = M.theme, L = M.class, lt = z("autohide", !0), C = z("infinite"), nt = z("progress", !0), S = z("autoslide"), dt = z("preload", !0), ht = M.buttonHref, pt = S && parseFloat(S) || 7, w || ct && ie(ct), L && d(m, L, !0), L && O(m), o = M.control) {
            for (var o = "string" == typeof o ? o.split(",") : o, s = 0; s < Y.length; s++) M[Y[s]] = !1;
            for (s = 0; s < o.length; s++) {
                var r = o[s].trim();
                "zoom" === r ? M["zoom-in"] = M["zoom-out"] = !0 : M[r] = !0
            }
        }
        if (o = M.animation, mt = gt = ft = !o, A = !1, o) for (o = "string" == typeof o ? o.split(",") : o, s = 0; s < o.length; s++) "scale" === (r = o[s].trim()) ? mt = !0 : "fade" === r ? gt = !0 : "slide" === r ? ft = !0 : r && (A = r);
        for (at = M.fit, s = kt && kt.downlink, o = Math.max(Q, y) * zt, j = {
            media: et,
            src: U(n, o = s && 1200 * s < o ? 1200 * s : o, M, et),
            title: z("title", n.alt || n.title || (a = n.firstElementChild) && (a.alt || a.title))
        }, D && (Pt.src = D = ""), dt && i && (n = x[I]) && ((a = (i = n.dataset || n).media) && "image" !== a || (D = U(n, o, i, a))), n = 0; n < Y.length; n++) i = Y[n], u(Dt[i], z(i, B[i]));
        Wt(I - 1), d(Et, "error"), function t(e) {
            if (E = yt[e - 1], T = E.firstChild, I = e, T) b && $(), at && d(T, at, !0), Ht(!0), A && d(T, A), gt && h(T, "opacity", 1), mt && h(T, "transform", ""), h(T, "visibility", "visible"), D && (Pt.src = D), S && Jt(k); else {
                var i = j.media, n = z("spinner", !0);
                if ("video" === i) Ot(n, !0), (T = document.createElement("video")).onloadedmetadata = function () {
                    T === this && (T.onerror = null, T.width = T.videoWidth, T.height = T.videoHeight, Bt(), Ot(n), t(e))
                }, T.poster = M.poster, T.preload = dt ? "auto" : "metadata", T.controls = z("controls", !0), T.autoplay = M.autoplay, T.h = z("inline"), T.muted = z("muted"); else {
                    if ("node" === i) return void ((T = "string" == typeof (T = j.src) ? document.querySelector(T) : T) && (T.g || (T.g = T.parentNode), Bt(), E.appendChild(T), t(e)));
                    Ot(n, !0), (T = document.createElement("img")).onload = function () {
                        T === this && (T.onerror = null, Ot(n), t(e), Bt())
                    }
                }
                T.src = j.src, E.appendChild(T), T && (n || h(T, "visibility", "visible"), T.onerror = function () {
                    T === this && (le(T), d(Et, "error", !0), Ot(n))
                })
            }
        }(I), p(E), P(), t = j.title;
        var a = z("description"), l = z("button"), c = t || a || l;
        c && (t && (It.firstChild.nodeValue = t), a && (_t.firstChild.nodeValue = a), l && (xt.firstChild.nodeValue = l), u(It, t), u(_t, a), u(xt, l), h(wt, "transform", "all" === lt ? "" : "none")), lt || d(m, "menu", !0), V(wt, c), V(Mt, C || 1 < I), V(Ct, C || I < _), Lt.firstChild.nodeValue = 1 < _ ? I + " / " + _ : "", st && st(I, M)
    }

    n(document, "click", function (t) {
        var e = t.target.closest(".spotlight");
        if (e) {
            R(t, !0), t = e.closest(".spotlight-group"), x = (t || document).getElementsByClassName("spotlight");
            for (var i = 0; i < x.length; i++) if (x[i] === e) {
                it = t && t.dataset, $t(i + 1);
                break
            }
        }
    }), window.Spotlight = {
        init: Nt,
        theme: ie,
        fullscreen: ee,
        download: re,
        autofit: $,
        next: de,
        prev: ce,
        goto: he,
        close: ae,
        zoom: se,
        menu: Ft,
        show: function (t, e, i) {
            x = t, e && (ot = (it = e).onshow, st = e.onchange, rt = e.onclose, i = i || e.index), $t(i)
        },
        play: c,
        addControl: l,
        removeControl: function (t) {
            var e = Dt[t];
            e && (bt.removeChild(e), Dt[t] = null)
        }
    }
}.call(this), function (p) {
    p.fn.theiaStickySidebar = function (t) {
        function e(t, e) {
            return !0 === t.initialized || !(p("body").width() < t.minWidth) && (e = e, (h = t).initialized = !0, 0 === p("#theia-sticky-sidebar-stylesheet-" + h.namespace).length && p("head").append(p('<style id="theia-sticky-sidebar-stylesheet-' + h.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), e.each(function () {
                function d() {
                    o.fixedScrollTop = 0, o.sidebar.css({"min-height": "1px"}), o.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }

                var i, t, e, n, o = {},
                    s = (o.sidebar = p(this), o.options = h || {}, o.container = p(o.options.containerSelector), 0 == o.container.length && (o.container = o.sidebar.parent()), o.sidebar.parents().css("-webkit-transform", "none"), o.sidebar.css({
                        position: o.options.defaultPosition,
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }), o.stickySidebar = o.sidebar.find(".theiaStickySidebar"), 0 == o.stickySidebar.length && (i = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i, o.sidebar.find("script").filter(function (t, e) {
                        return 0 === e.type.length || e.type.match(i)
                    }).remove(), o.stickySidebar = p("<div>").addClass("theiaStickySidebar").append(o.sidebar.children()), o.sidebar.append(o.stickySidebar)), o.marginBottom = parseInt(o.sidebar.css("margin-bottom")), o.paddingTop = parseInt(o.sidebar.css("padding-top")), o.paddingBottom = parseInt(o.sidebar.css("padding-bottom")), o.stickySidebar.offset().top),
                    r = o.stickySidebar.outerHeight();
                o.stickySidebar.css("padding-top", 1), o.stickySidebar.css("padding-bottom", 1), s -= o.stickySidebar.offset().top, r = o.stickySidebar.outerHeight() - r - s, 0 == s ? (o.stickySidebar.css("padding-top", 0), o.stickySidebarPaddingTop = 0) : o.stickySidebarPaddingTop = 1, 0 == r ? (o.stickySidebar.css("padding-bottom", 0), o.stickySidebarPaddingBottom = 0) : o.stickySidebarPaddingBottom = 1, o.previousScrollTop = null, o.fixedScrollTop = 0, d(), o.onScroll = function (t) {
                    if (t.stickySidebar.is(":visible")) if (p("body").width() < t.options.minWidth) d(); else {
                        if (t.options.disableOnResponsiveLayouts) if (t.sidebar.outerWidth("none" == t.sidebar.css("float")) + 50 > t.container.width()) return void d();
                        var e, i, n, o, s, r = p(document).scrollTop(), a = "static";
                        r >= t.sidebar.offset().top + (t.paddingTop - t.options.additionalMarginTop) && (i = t.paddingTop + h.additionalMarginTop, o = t.paddingBottom + t.marginBottom + h.additionalMarginBottom, s = t.sidebar.offset().top, l = t.sidebar.offset().top + (l = t.container, c = l.height(), l.children().each(function () {
                            c = Math.max(c, p(this).height())
                        }), c), e = 0 + h.additionalMarginTop, i = t.stickySidebar.outerHeight() + i + o < p(window).height() ? e + t.stickySidebar.outerHeight() : p(window).height() - t.marginBottom - t.paddingBottom - h.additionalMarginBottom, o = s - r + t.paddingTop, s = l - r - t.paddingBottom - t.marginBottom, l = t.stickySidebar.offset().top - r, n = t.previousScrollTop - r, "fixed" == t.stickySidebar.css("position") && "modern" == t.options.sidebarBehavior && (l += n), "stick-to-top" == t.options.sidebarBehavior && (l = h.additionalMarginTop), "stick-to-bottom" == t.options.sidebarBehavior && (l = i - t.stickySidebar.outerHeight()), l = 0 < n ? Math.min(l, e) : Math.max(l, i - t.stickySidebar.outerHeight()), l = Math.max(l, o), l = Math.min(l, s - t.stickySidebar.outerHeight()), a = !(n = t.container.height() == t.stickySidebar.outerHeight()) && l == e || !n && l == i - t.stickySidebar.outerHeight() ? "fixed" : r + l - t.sidebar.offset().top - t.paddingTop <= h.additionalMarginTop ? "static" : "absolute"), "fixed" == a ? (o = p(document).scrollLeft(), t.stickySidebar.css({
                            position: "fixed",
                            width: u(t.stickySidebar) + "px",
                            transform: "translateY(" + l + "px)",
                            left: t.sidebar.offset().left + parseInt(t.sidebar.css("padding-left")) - o + "px",
                            top: "0px"
                        })) : "absolute" == a ? (s = {}, "absolute" != t.stickySidebar.css("position") && (s.position = "absolute", s.transform = "translateY(" + (r + l - t.sidebar.offset().top - t.stickySidebarPaddingTop - t.stickySidebarPaddingBottom) + "px)", s.top = "0px"), s.width = u(t.stickySidebar) + "px", s.left = "", t.stickySidebar.css(s)) : "static" == a && d(), "static" != a && 1 == t.options.updateSidebarHeight && t.sidebar.css({"min-height": t.stickySidebar.outerHeight() + t.stickySidebar.offset().top - t.sidebar.offset().top + t.paddingBottom}), t.previousScrollTop = r
                    }
                    var l, c
                }, o.onScroll(o), p(document).on("scroll." + o.options.namespace, (n = o, function () {
                    n.onScroll(n)
                })), p(window).on("resize." + o.options.namespace, (e = o, function () {
                    e.stickySidebar.css({position: "static"}), e.onScroll(e)
                })), "undefined" != typeof ResizeSensor && new ResizeSensor(o.stickySidebar[0], (t = o, function () {
                    t.onScroll(t)
                }))
            }), !0);
            var h
        }

        function u(t) {
            var e;
            try {
                e = t[0].getBoundingClientRect().width
            } catch (t) {
            }
            return e = void 0 === e ? t.width() : e
        }

        var i, n, o, s, r;
        return (t = p.extend({
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        }, t)).additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, e(t = t, i = this) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), p(document).on("scroll." + t.namespace, (s = t, r = i, function (t) {
            e(s, r) && p(this).unbind(t)
        })), p(window).on("resize." + t.namespace, (n = t, o = i, function (t) {
            e(n, o) && p(this).unbind(t)
        }))), this
    }
}(jQuery), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).LazyLoad = e()
}(this, function () {
    "use strict";

    function e() {
        return (e = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i, n = arguments[e];
                for (i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }).apply(this, arguments)
    }

    function r(t) {
        return e({}, it, t)
    }

    function t(e, t) {
        var i, n = "LazyLoad::Initialized", e = new e(t);
        try {
            i = new CustomEvent(n, {detail: {instance: e}})
        } catch (t) {
            (i = document.createEvent("CustomEvent")).initCustomEvent(n, !1, !1, {instance: e})
        }
        window.dispatchEvent(i)
    }

    function a(t) {
        return C(t, rt)
    }

    function s(t) {
        S(t, null)
    }

    function c(t, e, i, n) {
        t && (void 0 !== n ? t(e, i, n) : void 0 !== i ? t(e, i) : t(e))
    }

    function d(t, e) {
        tt ? t.classList.add(e) : t.className += (t.className ? " " : "") + e
    }

    function h(t) {
        return t.llTempImage
    }

    function l(t, e) {
        e && (e = e._observer) && e.unobserve(t)
    }

    function u(t, e) {
        t && (t.loadingCount += e)
    }

    function N(t, e) {
        t && (t.toLoadCount = e)
    }

    function p(t, e) {
        (t = t.parentNode) && "PICTURE" === t.tagName && ct(t).forEach(e)
    }

    function $(t, e) {
        ct(t).forEach(e)
    }

    function H(t) {
        delete t[_]
    }

    function i(e, t) {
        var i;
        D(e) || (i = {}, t.forEach(function (t) {
            i[t] = e.getAttribute(t)
        }), e[_] = i)
    }

    function n(e, t) {
        var i;
        D(e) && (i = ht(e), t.forEach(function (t) {
            pt(e, t, i[t])
        }))
    }

    function O(t, e, i) {
        d(t, e.class_loading), S(t, x), i && (u(i, 1), c(e.callback_loading, t, i))
    }

    function R(t, e) {
        k(t, I, C(t, e.data_sizes)), k(t, w, C(t, e.data_srcset)), k(t, b, C(t, e.data_src))
    }

    function V(t, e) {
        !e || 0 < e.loadingCount || 0 < e.toLoadCount || c(t.callback_finish, e)
    }

    function Y(t, e, i) {
        t.addEventListener(e, i), t.llEvLisnrs[e] = i
    }

    function m(t) {
        return !!t.llEvLisnrs
    }

    function g(t) {
        if (m(t)) {
            var e, i, n = t.llEvLisnrs;
            for (e in n) {
                var o = n[e];
                i = e, t.removeEventListener(i, o)
            }
            delete t.llEvLisnrs
        }
    }

    function B(t, e, i) {
        var n;
        delete t.llTempImage, u(i, -1), (n = i) && --n.toLoadCount, E(t, e.class_loading), e.unobserve_completed && l(t, i)
    }

    function f(t, e, i) {
        var n, o, s;
        -1 < wt.indexOf(t.tagName) ? (z(n = t, o = e, s = i), bt(n, o, s)) : (n = e, o = i, lt(s = t), z(s, n, o), ut(s), gt(s, n, o), ft(s, n, o))
    }

    function Z(t) {
        t.removeAttribute(b), t.removeAttribute(w), t.removeAttribute(I)
    }

    function W(t) {
        p(t, function (t) {
            n(t, j)
        }), n(t, j)
    }

    function U(t, e) {
        var i;
        (It[(i = t).tagName] || mt)(i), i = e, L(e = t) || A(e) || (E(e, i.class_entered), E(e, i.class_exited), E(e, i.class_applied), E(e, i.class_loading), E(e, i.class_loaded), E(e, i.class_error)), s(t), H(t)
    }

    function G(t, e, i, n) {
        var o;
        i.cancel_on_exit && a(t) === x && "IMG" === t.tagName && (g(t), p(o = t, function (t) {
            Z(t)
        }), Z(o), W(t), E(t, i.class_loading), u(n, -1), s(t), c(i.callback_cancel, t, e, n))
    }

    function q(t, e, i, n) {
        var o, s, r = 0 <= at.indexOf(a(t));
        S(t, "entered"), d(t, i.class_entered), E(t, i.class_exited), o = t, s = n, i.unobserve_entered && l(o, s), c(i.callback_enter, t, e, n), r || f(t, i, n)
    }

    function Q(t, n, o) {
        t.forEach(function (t) {
            var e, i;
            -1 !== _t.indexOf(t.tagName) && (e = n, i = o, (t = t).setAttribute("loading", "lazy"), z(t, e, i), vt(t, e), S(t, ot))
        }), N(o, 0)
    }

    function o(t) {
        return t.container.querySelectorAll(t.elements_selector)
    }

    function J(t) {
        return a(t) === M
    }

    function F(t, e) {
        return t = t || o(e), St(t).filter(L)
    }

    function y(t, e) {
        var i, n, o, s, t = r(t);
        this._settings = t, this.loadingCount = 0, i = t, n = this, K && !xt(i) && (n._observer = new IntersectionObserver(function (t) {
            Ct(t, i, n)
        }, Mt(i))), o = t, s = this, v && window.addEventListener("online", function () {
            Lt(o, s)
        }), this.update(e)
    }

    var v = "undefined" != typeof window,
        X = v && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        K = v && "IntersectionObserver" in window, tt = v && "classList" in document.createElement("p"),
        et = v && 1 < window.devicePixelRatio, it = {
            elements_selector: ".lazy",
            container: X || v ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            data_bg_hidpi: "bg-hidpi",
            data_bg_multi: "bg-multi",
            data_bg_multi_hidpi: "bg-multi-hidpi",
            data_poster: "poster",
            class_applied: "applied",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            class_entered: "entered",
            class_exited: "exited",
            unobserve_completed: !0,
            unobserve_entered: !1,
            cancel_on_exit: !0,
            callback_enter: null,
            callback_exit: null,
            callback_applied: null,
            callback_loading: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            callback_cancel: null,
            use_native: !1
        }, b = "src", w = "srcset", I = "sizes", _ = "llOriginalAttrs", x = "loading", nt = "applied", M = "error",
        ot = "native", st = "data-", rt = "ll-status", C = function (t, e) {
            return t.getAttribute(st + e)
        }, S = function (t, e) {
            var i = rt;
            i = st + i, null === e ? t.removeAttribute(i) : t.setAttribute(i, e)
        }, L = function (t) {
            return null === a(t)
        }, A = function (t) {
            return a(t) === ot
        }, at = [x, "loaded", nt, M], E = function (t, e) {
            tt ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
        }, lt = function (t) {
            t.llTempImage = document.createElement("IMG")
        }, ct = function (t) {
            for (var e, i = [], n = 0; e = t.children[n]; n += 1) "SOURCE" === e.tagName && i.push(e);
            return i
        }, T = [b], dt = [b, "poster"], j = [b, w, I], D = function (t) {
            return !!t[_]
        }, ht = function (t) {
            return t[_]
        }, ut = function (t) {
            D(t) || (t[_] = {backgroundImage: t.style.backgroundImage})
        }, pt = function (t, e, i) {
            i ? t.setAttribute(e, i) : t.removeAttribute(e)
        }, mt = function (t) {
            var e;
            D(t) && (e = ht(t), t.style.backgroundImage = e.backgroundImage)
        }, k = function (t, e, i) {
            i && t.setAttribute(e, i)
        }, gt = function (t, e, i) {
            var n = C(t, e.data_bg), o = C(t, e.data_bg_hidpi), o = et && o ? o : n;
            o && (t.style.backgroundImage = 'url("'.concat(o, '")'), h(t).setAttribute(b, o), O(t, e, i))
        }, ft = function (t, e, i) {
            var n = C(t, e.data_bg_multi), o = C(t, e.data_bg_multi_hidpi), o = et && o ? o : n;
            o && (t.style.backgroundImage = o, n = i, d(o = t, (i = e).class_applied), S(o, nt), n) && (i.unobserve_completed && l(o, i), c(i.callback_applied, o, n))
        }, yt = {
            IMG: function (t, e) {
                p(t, function (t) {
                    i(t, j), R(t, e)
                }), i(t, j), R(t, e)
            }, IFRAME: function (t, e) {
                i(t, T), k(t, b, C(t, e.data_src))
            }, VIDEO: function (t, e) {
                $(t, function (t) {
                    i(t, T), k(t, b, C(t, e.data_src))
                }), i(t, dt), k(t, "poster", C(t, e.data_poster)), k(t, b, C(t, e.data_src)), t.load()
            }
        }, vt = function (t, e) {
            var i = yt[t.tagName];
            i && i(t, e)
        }, bt = function (t, e, i) {
            var n = yt[t.tagName];
            n && (n(t, e), O(t, e, i))
        }, wt = ["IMG", "IFRAME", "VIDEO"], z = function (s, r, a) {
            var t, e, i, n, l = h(s) || s;
            m(l) || (e = function (t) {
                var e, i, n, o;
                i = r, n = a, o = A(e = s), B(e, i, n), d(e, i.class_loaded), S(e, "loaded"), c(i.callback_loaded, e, n), o || V(i, n), g(l)
            }, i = function (t) {
                var e, i, n, o;
                i = r, n = a, o = A(e = s), B(e, i, n), d(e, i.class_error), S(e, M), c(i.callback_error, e, n), o || V(i, n), g(l)
            }, m(t = l) || (t.llEvLisnrs = {}), n = "VIDEO" === t.tagName ? "loadeddata" : "load", Y(t, n, e), Y(t, "error", i))
        }, It = {
            IMG: W, IFRAME: function (t) {
                n(t, T)
            }, VIDEO: function (t) {
                $(t, function (t) {
                    n(t, T)
                }), n(t, dt), t.load()
            }
        }, _t = ["IMG", "IFRAME", "VIDEO"], xt = function (t) {
            return t.use_native && "loading" in HTMLImageElement.prototype
        }, Mt = function (t) {
            return {root: t.container === document ? null : t.container, rootMargin: t.thresholds || t.threshold + "px"}
        }, Ct = function (t, o, s) {
            t.forEach(function (t) {
                return (n = t).isIntersecting || 0 < n.intersectionRatio ? q(t.target, t, o, s) : (n = t.target, t = t, e = o, i = s, void (L(n) || (d(n, e.class_exited), G(n, t, e, i), c(e.callback_exit, n, t, i))));
                var e, i, n
            })
        }, St = function (t) {
            return Array.prototype.slice.call(t)
        }, Lt = function (e, t) {
            var i;
            i = o(e), St(i).filter(J).forEach(function (t) {
                E(t, e.class_error), s(t)
            }), t.update()
        };
    if (y.prototype = {
        update: function (t) {
            var e, i = this._settings, t = F(t, i);
            N(this, t.length), X || !K ? this.loadAll(t) : xt(i) ? Q(t, i, this) : (i = this._observer, t = t, i.disconnect(), e = i, t.forEach(function (t) {
                e.observe(t)
            }))
        }, destroy: function () {
            this._observer && this._observer.disconnect(), o(this._settings).forEach(function (t) {
                H(t)
            }), delete this._observer, delete this._settings, delete this.loadingCount, delete this.toLoadCount
        }, loadAll: function (t) {
            var e = this, i = this._settings;
            F(t, i).forEach(function (t) {
                l(t, e), f(t, i, e)
            })
        }, restoreAll: function () {
            var e = this._settings;
            o(e).forEach(function (t) {
                U(t, e)
            })
        }
    }, y.load = function (t, e) {
        e = r(e);
        f(t, e)
    }, y.resetStatus = function (t) {
        s(t)
    }, v) {
        var At = y, P = window.lazyLoadOptions;
        if (P) if (P.length) for (var Et, Tt = 0; Et = P[Tt]; Tt += 1) t(At, Et); else t(At, P)
    }
    return y
});