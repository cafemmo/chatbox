(function(a) {
	a.fn.emoticonize = function(m) {
		var c = a.extend({}, a.fn.emoticonize.defaults, m);
		var d = [")", "(", "*", "[", "]", "{", "}", "|", "^", "<", ">", "\\", "?", "+", "=", "."];
		var l = [":-)", ":o)", ":c)", ":^)", ":-D", ":-(", ":-9", ";-)", ":-P", ":-p", ":-Þ", ":-b", ":-O", ":-/", ":-X", ":-#", ":'(", "B-)", "8-)", ";*(", ":-*", ":-\\", "?-)", ": )", ": ]", "= ]", "= )", "8 )", ": }", ": D", "8 D", "X D", "x D", "= D", ": (", ": [", ": {", "= (", "; )", "; ]", "; D", ": P", ": p", "= P", "= p", ": b", ": Þ", ": O", "8 O", ": /", "= /", ": S", ": #", ": X", "B )", ": |", ": \\", "= \\", ": *", ": &gt;", ": &lt;"];
		var j = [":)", ":]", "=]", "=)", "8)", ":}", ":D", ":(", ":[", ":{", "=(", ";)", ";]", ";D", ":P", ":p", "=P", "=p", ":b", ":Þ", ":O", ":/", "=/", ":S", ":#", ":X", "B)", ":|", ":\\", "=\\", ":*", ":&gt;", ":&lt;"];
		var h = {
			"&gt;:)": {
				cssClass: "red-emoticon small-emoticon spaced-emoticon"
			},
			"&gt;;)": {
				cssClass: "red-emoticon small-emoticon spaced-emoticon"
			},
			"&gt;:(": {
				cssClass: "red-emoticon small-emoticon spaced-emoticon"
			},
			"&gt;: )": {
				cssClass: "red-emoticon small-emoticon"
			},
			"&gt;; )": {
				cssClass: "red-emoticon small-emoticon"
			},
			"&gt;: (": {
				cssClass: "red-emoticon small-emoticon"
			},
			";(": {
				cssClass: "red-emoticon spaced-emoticon"
			},
			"&lt;3": {
				cssClass: "pink-emoticon counter-rotated"
			},
			O_O: {
				cssClass: "no-rotate"
			},
			o_o: {
				cssClass: "no-rotate"
			},
			"0_o": {
				cssClass: "no-rotate"
			},
			O_o: {
				cssClass: "no-rotate"
			},
			T_T: {
				cssClass: "no-rotate"
			},
			"^_^": {
				cssClass: "no-rotate"
			},
			"O:)": {
				cssClass: "small-emoticon spaced-emoticon"
			},
			"O: )": {
				cssClass: "small-emoticon"
			},
			"8D": {
				cssClass: "small-emoticon spaced-emoticon"
			},
			XD: {
				cssClass: "small-emoticon spaced-emoticon"
			},
			xD: {
				cssClass: "small-emoticon spaced-emoticon"
			},
			"=D": {
				cssClass: "small-emoticon spaced-emoticon"
			},
			"8O": {
				cssClass: "small-emoticon spaced-emoticon"
			},
			"[+=..]": {
				cssClass: "no-rotate nintendo-controller"
			}
		};
		var f = new RegExp("(\\" + d.join("|\\") + ")", "g");
		var n = "(^|[\\s\\0])";
		for (var g = l.length - 1; g >= 0; --g) {
			l[g] = l[g].replace(f, "\\$1");
			l[g] = new RegExp(n + "(" + l[g] + ")", "g")
		}
		for (var g = j.length - 1; g >= 0; --g) {
			j[g] = j[g].replace(f, "\\$1");
			j[g] = new RegExp(n + "(" + j[g] + ")", "g")
		}
		for (var k in h) {
			h[k].regexp = k.replace(f, "\\$1");
			h[k].regexp = new RegExp(n + "(" + h[k].regexp + ")", "g")
		}
		var e = "span.css-emoticon";
		if (c.exclude) {
			e += "," + c.exclude
		}
		var b = e.split(",");
		return this.not(e).each(function() {
			var o = a(this);
			var i = "css-emoticon";
			if (c.animate) {
				i += " un-transformed-emoticon animated-emoticon"
			}
			for (var p in h) {
				specialCssClass = i + " " + h[p].cssClass;
				o.html(o.html().replace(h[p].regexp, "$1<span class='" + specialCssClass + "'>$2</span>"))
			}
			a(l).each(function() {
				o.html(o.html().replace(this, "$1<span class='" + i + "'>$2</span>"))
			});
			a(j).each(function() {
				o.html(o.html().replace(this, "$1<span class='" + i + " spaced-emoticon'>$2</span>"))
			});
			a.each(b, function(q, r) {
				o.find(a.trim(r) + " span.css-emoticon").each(function() {
					a(this).replaceWith(a(this).text())
				})
			});
			if (c.animate) {
				setTimeout(function() {
					a(".un-transformed-emoticon").removeClass("un-transformed-emoticon")
				}, c.delay)
			}
		})
	};
	a.fn.unemoticonize = function(b) {
		var c = a.extend({}, a.fn.emoticonize.defaults, b);
		return this.each(function() {
			var d = a(this);
			d.find("span.css-emoticon").each(function() {
				var e = a(this);
				if (c.animate) {
					e.addClass("un-transformed-emoticon");
					setTimeout(function() {
						e.replaceWith(e.text())
					}, c.delay)
				} else {
					e.replaceWith(e.text())
				}
			})
		})
	};
	a.fn.emoticonize.defaults = {
		animate: true,
		delay: 500,
		exclude: "pre,code,.no-emoticons"
	}
})(jQuery);
"use strict";
var XBBCODE = function() {
	function e() {
		s = [];
		var e, t, n;
		for (e in i)
			if (i.hasOwnProperty(e)) {
				for ("*" === e ? s.push("\\" + e) : (s.push(e), i[e].noParse && y.push(e)), i[e].validChildLookup = {}, i[e].validParentLookup = {}, i[e].restrictParentsTo = i[e].restrictParentsTo || [], i[e].restrictChildrenTo = i[e].restrictChildrenTo || [], n = i[e].restrictChildrenTo.length, t = 0; n > t; t++) i[e].validChildLookup[i[e].restrictChildrenTo[t]] = !0;
				for (n = i[e].restrictParentsTo.length, t = 0; n > t; t++) i[e].validParentLookup[i[e].restrictParentsTo[t]] = !0
			} c = new RegExp("<bbcl=([0-9]+) (" + s.join("|") + ")([ =][^>]*?)?>((?:.|[\\r\\n])*?)<bbcl=\\1 /\\2>", "gi"), u = new RegExp("\\[(" + s.join("|") + ")([ =][^\\]]*?)?\\]([^\\[]*?)\\[/\\1\\]", "gi"), g = new RegExp("\\[(" + y.join("|") + ")([ =][^\\]]*?)?\\]([\\s\\S]*?)\\[/\\1\\]", "gi"),
			function() {
				for (var e = [], t = 0; t < s.length; t++) "\\*" !== s[t] && e.push("/" + s[t]);
				p = new RegExp("(\\[)((?:" + s.join("|") + ")(?:[ =][^\\]]*?)?)(\\])", "gi"), d = new RegExp("(\\[)(" + e.join("|") + ")(\\])", "gi")
			}()
	}

	function t(e, n, r, o, a, l, u) {
		u = u || [], r++;
		var g, p, d, f, b = new RegExp("(<bbcl=" + r + " )(" + s.join("|") + ")([ =>])", "gi"),
			h = new RegExp("(<bbcl=" + r + " )(" + s.join("|") + ")([ =>])", "i"),
			T = l.match(b) || [],
			x = i[e] || {};
		for (b.lastIndex = 0, T || (l = ""), d = 0; d < T.length; d++) h.lastIndex = 0, f = T[d].match(h)[2].toLowerCase(), x && x.restrictChildrenTo && x.restrictChildrenTo.length > 0 && (x.validChildLookup[f] || (p = 'The tag "' + f + '" is not allowed as a child of the tag "' + e + '".', u.push(p))), g = i[f] || {}, g.restrictParentsTo.length > 0 && (g.validParentLookup[e] || (p = 'The tag "' + e + '" is not allowed as a parent of the tag "' + f + '".', u.push(p)));
		return l = l.replace(c, function(e, n, r, o, a) {
			return u = t(r.toLowerCase(), e, n, r, o, a, u), e
		}), u
	}

	function n(e) {
		return e = e.replace(/\<([^\>][^\>]*?)\>/gi, function(e, t) {
			var n = t.match(/^bbcl=([0-9]+) /);
			return null === n ? "<bbcl=0 " + t + ">" : "<" + t.replace(/^(bbcl=)([0-9]+)/, function(e, t, n) {
				return t + (parseInt(n, 10) + 1)
			}) + ">"
		})
	}

	function r(e) {
		return e.replace(/<bbcl=[0-9]+ \/\*>/gi, "").replace(/<bbcl=[0-9]+ /gi, "&#91;").replace(/>/gi, "&#93;")
	}

	function o(e) {
		var t = e.text;
		return t = t.replace(c, k)
	}

	function a(e) {
		for (e = e.replace(/\[(?!\*[ =\]]|list([ =][^\]]*)?\]|\/list[\]])/gi, "<"), e = e.replace(/\[(?=list([ =][^\]]*)?\]|\/list[\]])/gi, ">"); e !== (e = e.replace(/>list([ =][^\]]*)?\]([^>]*?)(>\/list])/gi, function(e) {
				for (var t = e; t !== (t = t.replace(/\[\*\]([^\[]*?)(\[\*\]|>\/list])/i, function(e, t, n) {
						return n = ">/list]" === n.toLowerCase() ? "</*]</list]" : "</*][*]", "<*]" + t + n
					})););
				return t = t.replace(/>/g, "<")
			})););
		return e = e.replace(/</g, "[")
	}

	function l(e) {
		for (; e !== (e = e.replace(u, function(e) {
				return e = e.replace(/\[/g, "<"), e = e.replace(/\]/g, ">"), n(e)
			})););
		return e
	}
	var i, s, c, u, g, p, d, f = {},
		b = /^(?:https?|file|c):(?:\/{1,3}|\\{1})[-a-zA-Z0-9:;@#%&()~_?\+=\/\\\.]*$/,
		h = /^(?:aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)$/,
		T = /^#?[a-fA-F0-9]{6}$/,
		x = /[^\s@]+@[^\s@]+\.[^\s@]+/,
		m = /^([a-z][a-z0-9_]+|"[a-z][a-z0-9_\s]+")$/i,
		y = [];
	i = {
		b: {
			openTag: function() {
				return '<span class="xbbcode-b">'
			},
			closeTag: function() {
				return "</span>"
			}
		},
		bbcode: {
			openTag: function() {
				return ""
			},
			closeTag: function() {
				return ""
			}
		},
		center: {
			openTag: function() {
				return '<span class="xbbcode-center">'
			},
			closeTag: function() {
				return "</span>"
			}
		},
		code: {
			openTag: function() {
				return '<span class="xbbcode-code">'
			},
			closeTag: function() {
				return "</span>"
			},
			noParse: !0
		},
		color: {
			openTag: function(e) {
				var t = e.substr(1).toLowerCase() || "black";
				return h.lastIndex = 0, T.lastIndex = 0, h.test(t) || (T.test(t) ? "#" !== t.substr(0, 1) && (t = "#" + t) : t = "black"), '<span style="color:' + t + '">'
			},
			closeTag: function() {
				return "</span>"
			}
		},
		email: {
			openTag: function(e, t) {
				var n;
				return n = e ? e.substr(1) : t.replace(/<.*?>/g, ""), x.lastIndex = 0, x.test(n) ? '<a href="mailto:' + n + '">' : "<a>"
			},
			closeTag: function() {
				return "</a>"
			}
		},
		face: {
			openTag: function(e) {
				var t = e.substr(1) || "inherit";
				return m.lastIndex = 0, m.test(t) || (t = "inherit"), '<span style="font-family:' + t + '">'
			},
			closeTag: function() {
				return "</span>"
			}
		},
		font: {
			openTag: function(e) {
				var t = e.substr(1) || "inherit";
				return m.lastIndex = 0, m.test(t) || (t = "inherit"), '<span style="font-family:' + t + '">'
			},
			closeTag: function() {
				return "</span>"
			}
		},
		i: {
			openTag: function() {
				return '<span class="xbbcode-i">'
			},
			closeTag: function() {
				return "</span>"
			}
		},
		img: {
			openTag: function(e, t) {
				var n = t;
				return b.lastIndex = 0, b.test(n) || (n = ""), '<img src="' + n + '" />'
			},
			closeTag: function() {
				return ""
			},
			displayContent: !1
		},
		justify: {
			openTag: function() {
				return '<span class="xbbcode-justify">'
			},
			closeTag: function() {
				return "</span>"
			}
		},
		large: {
			openTag: function(e) {
				var e = e || "",
					t = e.substr(1) || "inherit";
				return h.lastIndex = 0, T.lastIndex = 0, h.test(t) || (T.test(t) ? "#" !== t.substr(0, 1) && (t = "#" + t) : t = "inherit"), '<span class="xbbcode-size-36" style="color:' + t + '">'
			},
			closeTag: function() {
				return "</span>"
			}
		},
		left: {
			openTag: function() {
				return '<span class="xbbcode-left">'
			},
			closeTag: function() {
				return "</span>"
			}
		},
		li: {
			openTag: function() {
				return "<li>"
			},
			closeTag: function() {
				return "</li>"
			},
			restrictParentsTo: ["list", "ul", "ol"]
		},
		list: {
			openTag: function() {
				return "<ul>"
			},
			closeTag: function() {
				return "</ul>"
			},
			restrictChildrenTo: ["*", "li"]
		},
		noparse: {
			openTag: function() {
				return ""
			},
			closeTag: function() {
				return ""
			},
			noParse: !0
		},
		ol: {
			openTag: function() {
				return "<ol>"
			},
			closeTag: function() {
				return "</ol>"
			},
			restrictChildrenTo: ["*", "li"]
		},
		php: {
			openTag: function() {
				return '<span class="xbbcode-code">'
			},
			closeTag: function() {
				return "</span>"
			},
			noParse: !0
		},
		quote: {
			openTag: function() {
				return '<blockquote class="xbbcode-blockquote">'
			},
			closeTag: function() {
				return "</blockquote>"
			}
		},
		right: {
			openTag: function() {
				return '<span class="xbbcode-right">'
			},
			closeTag: function() {
				return "</span>"
			}
		},
		s: {
			openTag: function() {
				return '<span class="xbbcode-s">'
			},
			closeTag: function() {
				return "</span>"
			}
		},
		size: {
			openTag: function(e) {
				var t = parseInt(e.substr(1), 10) || 0;
				return (4 > t || t > 40) && (t = 14), '<span class="xbbcode-size-' + t + '">'
			},
			closeTag: function() {
				return "</span>"
			}
		},
		small: {
			openTag: function(e) {
				var e = e || "",
					t = e.substr(1) || "inherit";
				return h.lastIndex = 0, T.lastIndex = 0, h.test(t) || (T.test(t) ? "#" !== t.substr(0, 1) && (t = "#" + t) : t = "inherit"), '<span class="xbbcode-size-10" style="color:' + t + '">'
			},
			closeTag: function() {
				return "</span>"
			}
		},
		sub: {
			openTag: function() {
				return "<sub>"
			},
			closeTag: function() {
				return "</sub>"
			}
		},
		sup: {
			openTag: function() {
				return "<sup>"
			},
			closeTag: function() {
				return "</sup>"
			}
		},
		table: {
			openTag: function() {
				return '<table class="xbbcode-table">'
			},
			closeTag: function() {
				return "</table>"
			},
			restrictChildrenTo: ["tbody", "thead", "tfoot", "tr"]
		},
		tbody: {
			openTag: function() {
				return "<tbody>"
			},
			closeTag: function() {
				return "</tbody>"
			},
			restrictChildrenTo: ["tr"],
			restrictParentsTo: ["table"]
		},
		tfoot: {
			openTag: function() {
				return "<tfoot>"
			},
			closeTag: function() {
				return "</tfoot>"
			},
			restrictChildrenTo: ["tr"],
			restrictParentsTo: ["table"]
		},
		thead: {
			openTag: function() {
				return '<thead class="xbbcode-thead">'
			},
			closeTag: function() {
				return "</thead>"
			},
			restrictChildrenTo: ["tr"],
			restrictParentsTo: ["table"]
		},
		td: {
			openTag: function() {
				return '<td class="xbbcode-td">'
			},
			closeTag: function() {
				return "</td>"
			},
			restrictParentsTo: ["tr"]
		},
		th: {
			openTag: function() {
				return '<th class="xbbcode-th">'
			},
			closeTag: function() {
				return "</th>"
			},
			restrictParentsTo: ["tr"]
		},
		tr: {
			openTag: function() {
				return '<tr class="xbbcode-tr">'
			},
			closeTag: function() {
				return "</tr>"
			},
			restrictChildrenTo: ["td", "th"],
			restrictParentsTo: ["table", "tbody", "tfoot", "thead"]
		},
		u: {
			openTag: function() {
				return '<span class="xbbcode-u">'
			},
			closeTag: function() {
				return "</span>"
			}
		},
		ul: {
			openTag: function() {
				return "<ul>"
			},
			closeTag: function() {
				return "</ul>"
			},
			restrictChildrenTo: ["*", "li"]
		},
		url: {
			openTag: function(e, t) {
				var n;
				return n = e ? e.substr(1) : t.replace(/<.*?>/g, ""), b.lastIndex = 0, b.test(n) || (n = "#"), '<a href="' + n + '">'
			},
			closeTag: function() {
				return "</a>"
			}
		},
		"*": {
			openTag: function() {
				return "<li>"
			},
			closeTag: function() {
				return "</li>"
			},
			restrictParentsTo: ["list", "ul", "ol"]
		}
	}, e();
	var k = function(e, t, n, o, a) {
		n = n.toLowerCase();
		var l = i[n].noParse ? r(a) : a.replace(c, k),
			s = i[n].openTag(o, l),
			u = i[n].closeTag(o, l);
		return i[n].displayContent === !1 && (l = ""), s + l + u
	};
	return f.tags = function() {
		return i
	}, f.addTags = function(t) {
		var n;
		for (n in t) i[n] = t[n];
		e()
	}, f.process = function(e) {
		var n = {
				html: "",
				error: !1
			},
			r = [];
		for (e.text = e.text.replace(/</g, "&lt;"), e.text = e.text.replace(/>/g, "&gt;"), e.text = e.text.replace(p, function(e, t, n) {
				return "<" + n + ">"
			}), e.text = e.text.replace(d, function(e, t, n) {
				return "<" + n + ">"
			}), e.text = e.text.replace(/\[/g, "&#91;"), e.text = e.text.replace(/\]/g, "&#93;"), e.text = e.text.replace(/</g, "["), e.text = e.text.replace(/>/g, "]"); e.text !== (e.text = e.text.replace(g, function(e, t, n, r) {
				return r = r.replace(/\[/g, "&#91;"), r = r.replace(/\]/g, "&#93;"), n = n || "", r = r || "", "[" + t + n + "]" + r + "[/" + t + "]"
			})););
		return e.text = a(e.text), e.text = l(e.text), r = t("bbcode", e.text, -1, "", "", e.text), n.html = o(e), -1 === n.html.indexOf("[") && -1 === n.html.indexOf("]") || r.push("Some tags appear to be misaligned."), e.removeMisalignedTags && (n.html = n.html.replace(/\[.*?\]/g, "")), e.addInLineBreaks && (n.html = '<div style="white-space:pre-wrap;">' + n.html + "</div>"), e.escapeHtml || (n.html = n.html.replace("&#91;", "["), n.html = n.html.replace("&#93;", "]")), n.error = 0 !== r.length, n.errorQueue = r, n
	}, f
}();