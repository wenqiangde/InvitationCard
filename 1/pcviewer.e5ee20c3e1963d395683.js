webpackJsonp([6], {
    0 : function(r, t, e) {
        "use strict";
        function n(r) {
            return r && r.__esModule ? r: {
                "default": r
            }
        }
        function o(r) {
            var t = document.getElementById("previewiframe");
            if ("object" == typeof r) {
                var e = JSON.stringify(r);
                t.contentWindow.postMessage(e, "*")
            }
        }
        function a() {
            o({
                type: "prevPage"
            })
        }
        function i() {
            o({
                type: "nextPage"
            })
        }
        function u() {
            var r = window.innerHeight;
            w = r - 40;
            var t = w / 1008 * 640 + 50; (0, g["default"])(".pcviewer-previewarea").css({
                height: w,
                width: t
            }),
            (0, g["default"])(".pcviewer-previewarea-iframe").css({
                height: w - 20,
                width: 640 * (w - 20) / 1008
            });
            var e = t / 1.6 + 185; (0, g["default"])(".pcviewer").css({
                "margin-left": -e
            })
        }
        function f() {
			////////////////*************
            document.getElementById("previewiframe").contentWindow.location.reload(!0),
            u()
        }
        var c = e(2),
        g = n(c),
        v = e(64),
        h = n(v),
        l = e(1),
        s = n(l);
        e(62);
		////////////////*************手机版地址
		var w, d = "mobile.html";
		//var w, d = "http://q.maka.im/k/" + s["default"].pcViewerGetTail();
        //var w, d = "http://" + window.location.host + "/k/" + s["default"].pcViewerGetTail();
        if (s["default"].judgePC()) {
            window.onresize = f,
            u(),
            (0, g["default"])("#previewiframe").attr("src", d);
			////////////////*************
			var y = "2.html?" + window.projectVersion.id,
			//var y = "http://q.maka.im/k/" + window.projectVersion.id,
            //var y = "http://" + window.location.host + "/k/" + window.projectVersion.id,
            p = h["default"].toDataURL(y, 8); (0, g["default"])(".pcviewer-infoarea-qrcodearea-img").eq(0).attr("src", p),
            (0, g["default"])(".pcviewer-previewarea-downBtn").on("click",
            function() {
                i()
            }),
            (0, g["default"])(".pcviewer-previewarea-upBtn").on("click",
            function() {
                a()
            })
        } else window.location.href = d
    },
    62 : function(r, t) {},
    64 : function(r, t, e) {
        var n = e(65);
        r.exports = {
            typeNumber: 4,
            errorCorrectLevel: "L",
            toBase64: function(r, t) {
                var e = n(this.typeNumber, this.errorCorrectLevel);
                e.addData(r),
                e.make();
                var o = e.createImgBase64(t);
                return o
            },
            toDataURL: function(r, t) {
                var e = this.toBase64(r, t),
                n = "data:image/gif;base64," + e;
                return n
            }
        }
    },
    65 : function(r, t) {
        var e = function() {
            function r(t, e) {
                if ("undefined" == typeof t.length) throw new Error(t.length + "/" + e);
                var n = function() {
                    for (var r = 0; r < t.length && 0 == t[r];) r += 1;
                    for (var n = new Array(t.length - r + e), o = 0; o < t.length - r; o += 1) n[o] = t[o + r];
                    return n
                } (),
                o = {};
                return o.getAt = function(r) {
                    return n[r]
                },
                o.getLength = function() {
                    return n.length
                },
                o.multiply = function(t) {
                    for (var e = new Array(o.getLength() + t.getLength() - 1), n = 0; n < o.getLength(); n += 1) for (var a = 0; a < t.getLength(); a += 1) e[n + a] ^= i.gexp(i.glog(o.getAt(n)) + i.glog(t.getAt(a)));
                    return r(e, 0)
                },
                o.mod = function(t) {
                    if (o.getLength() - t.getLength() < 0) return o;
                    for (var e = i.glog(o.getAt(0)) - i.glog(t.getAt(0)), n = new Array(o.getLength()), a = 0; a < o.getLength(); a += 1) n[a] = o.getAt(a);
                    for (var a = 0; a < t.getLength(); a += 1) n[a] ^= i.gexp(i.glog(t.getAt(a)) + e);
                    return r(n, 0).mod(t)
                },
                o
            }
            var t = function(t, e) {
                var o = 236,
                i = 17,
                g = t,
                v = n[e],
                h = null,
                l = 0,
                d = null,
                y = new Array,
                p = {},
                B = function(r, t) {
                    l = 4 * g + 17,
                    h = function(r) {
                        for (var t = new Array(r), e = 0; r > e; e += 1) {
                            t[e] = new Array(r);
                            for (var n = 0; r > n; n += 1) t[e][n] = null
                        }
                        return t
                    } (l),
                    A(0, 0),
                    A(l - 7, 0),
                    A(0, l - 7),
                    T(),
                    M(),
                    D(r, t),
                    g >= 7 && m(r),
                    null == d && (d = L(g, v, y)),
                    k(d, t)
                },
                A = function(r, t) {
                    for (var e = -1; 7 >= e; e += 1) if (! ( - 1 >= r + e || r + e >= l)) for (var n = -1; 7 >= n; n += 1) - 1 >= t + n || t + n >= l || (e >= 0 && 6 >= e && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == e || 6 == e) || e >= 2 && 4 >= e && n >= 2 && 4 >= n ? h[r + e][t + n] = !0 : h[r + e][t + n] = !1)
                },
                E = function() {
                    for (var r = 0,
                    t = 0,
                    e = 0; 8 > e; e += 1) {
                        B(!0, e);
                        var n = a.getLostPoint(p); (0 == e || r > n) && (r = n, t = e)
                    }
                    return t
                },
                M = function() {
                    for (var r = 8; l - 8 > r; r += 1) null == h[r][6] && (h[r][6] = r % 2 == 0);
                    for (var t = 8; l - 8 > t; t += 1) null == h[6][t] && (h[6][t] = t % 2 == 0)
                },
                T = function() {
                    for (var r = a.getPatternPosition(g), t = 0; t < r.length; t += 1) for (var e = 0; e < r.length; e += 1) {
                        var n = r[t],
                        o = r[e];
                        if (null == h[n][o]) for (var i = -2; 2 >= i; i += 1) for (var u = -2; 2 >= u; u += 1) - 2 == i || 2 == i || -2 == u || 2 == u || 0 == i && 0 == u ? h[n + i][o + u] = !0 : h[n + i][o + u] = !1
                    }
                },
                m = function(r) {
                    for (var t = a.getBCHTypeNumber(g), e = 0; 18 > e; e += 1) {
                        var n = !r && 1 == (t >> e & 1);
                        h[Math.floor(e / 3)][e % 3 + l - 8 - 3] = n
                    }
                    for (var e = 0; 18 > e; e += 1) {
                        var n = !r && 1 == (t >> e & 1);
                        h[e % 3 + l - 8 - 3][Math.floor(e / 3)] = n
                    }
                },
                D = function(r, t) {
                    for (var e = v << 3 | t,
                    n = a.getBCHTypeInfo(e), o = 0; 15 > o; o += 1) {
                        var i = !r && 1 == (n >> o & 1);
                        6 > o ? h[o][8] = i: 8 > o ? h[o + 1][8] = i: h[l - 15 + o][8] = i
                    }
                    for (var o = 0; 15 > o; o += 1) {
                        var i = !r && 1 == (n >> o & 1);
                        8 > o ? h[8][l - o - 1] = i: 9 > o ? h[8][15 - o - 1 + 1] = i: h[8][15 - o - 1] = i
                    }
                    h[l - 8][8] = !r
                },
                k = function(r, t) {
                    for (var e = -1,
                    n = l - 1,
                    o = 7,
                    i = 0,
                    u = a.getMaskFunction(t), f = l - 1; f > 0; f -= 2) for (6 == f && (f -= 1);;) {
                        for (var c = 0; 2 > c; c += 1) if (null == h[n][f - c]) {
                            var g = !1;
                            i < r.length && (g = 1 == (r[i] >>> o & 1));
                            var v = u(n, f - c);
                            v && (g = !g),
                            h[n][f - c] = g,
                            o -= 1,
                            -1 == o && (i += 1, o = 7)
                        }
                        if (n += e, 0 > n || n >= l) {
                            n -= e,
                            e = -e;
                            break
                        }
                    }
                },
                C = function(t, e) {
                    for (var n = 0,
                    o = 0,
                    i = 0,
                    u = new Array(e.length), f = new Array(e.length), c = 0; c < e.length; c += 1) {
                        var g = e[c].dataCount,
                        v = e[c].totalCount - g;
                        o = Math.max(o, g),
                        i = Math.max(i, v),
                        u[c] = new Array(g);
                        for (var h = 0; h < u[c].length; h += 1) u[c][h] = 255 & t.getBuffer()[h + n];
                        n += g;
                        var l = a.getErrorCorrectPolynomial(v),
                        s = r(u[c], l.getLength() - 1),
                        w = s.mod(l);
                        f[c] = new Array(l.getLength() - 1);
                        for (var h = 0; h < f[c].length; h += 1) {
                            var d = h + w.getLength() - f[c].length;
                            f[c][h] = d >= 0 ? w.getAt(d) : 0
                        }
                    }
                    for (var y = 0,
                    h = 0; h < e.length; h += 1) y += e[h].totalCount;
                    for (var p = new Array(y), B = 0, h = 0; o > h; h += 1) for (var c = 0; c < e.length; c += 1) h < u[c].length && (p[B] = u[c][h], B += 1);
                    for (var h = 0; i > h; h += 1) for (var c = 0; c < e.length; c += 1) h < f[c].length && (p[B] = f[c][h], B += 1);
                    return p
                },
                L = function(r, t, e) {
                    for (var n = u.getRSBlocks(r, t), c = f(), g = 0; g < e.length; g += 1) {
                        var v = e[g];
                        c.put(v.getMode(), 4),
                        c.put(v.getLength(), a.getLengthInBits(v.getMode(), r)),
                        v.write(c)
                    }
                    for (var h = 0,
                    g = 0; g < n.length; g += 1) h += n[g].dataCount;
                    if (c.getLengthInBits() > 8 * h) throw new Error("code length overflow. (" + c.getLengthInBits() + ">" + 8 * h + ")");
                    for (c.getLengthInBits() + 4 <= 8 * h && c.put(0, 4); c.getLengthInBits() % 8 != 0;) c.putBit(!1);
                    for (;;) {
                        if (c.getLengthInBits() >= 8 * h) break;
                        if (c.put(o, 8), c.getLengthInBits() >= 8 * h) break;
                        c.put(i, 8)
                    }
                    return C(c, n)
                };
                return p.addData = function(r) {
                    var t = c(r);
                    y.push(t),
                    d = null
                },
                p.isDark = function(r, t) {
                    if (0 > r || r >= l || 0 > t || t >= l) throw new Error(r + "," + t);
                    return h[r][t]
                },
                p.getModuleCount = function() {
                    return l
                },
                p.make = function() {
                    B(!1, E())
                },
                p.createTableTag = function(r, t) {
                    r = r || 2,
                    t = "undefined" == typeof t ? 4 * r: t;
                    var e = "";
                    e += '<table style="',
                    e += " border-width: 0px; border-style: none;",
                    e += " border-collapse: collapse;",
                    e += " padding: 0px; margin: " + t + "px;",
                    e += '">',
                    e += "<tbody>";
                    for (var n = 0; n < p.getModuleCount(); n += 1) {
                        e += "<tr>";
                        for (var o = 0; o < p.getModuleCount(); o += 1) e += '<td style="',
                        e += " border-width: 0px; border-style: none;",
                        e += " border-collapse: collapse;",
                        e += " padding: 0px; margin: 0px;",
                        e += " width: " + r + "px;",
                        e += " height: " + r + "px;",
                        e += " background-color: ",
                        e += p.isDark(n, o) ? "#000000": "#ffffff",
                        e += ";",
                        e += '"/>';
                        e += "</tr>"
                    }
                    return e += "</tbody>",
                    e += "</table>"
                },
                p.createImgTag = function(r, t) {
                    r = r || 2,
                    t = "undefined" == typeof t ? 4 * r: t;
                    var e = p.getModuleCount() * r + 2 * t,
                    n = t,
                    o = e - t;
                    return s(e, e,
                    function(t, e) {
                        if (t >= n && o > t && e >= n && o > e) {
                            var a = Math.floor((t - n) / r),
                            i = Math.floor((e - n) / r);
                            return p.isDark(i, a) ? 0 : 1
                        }
                        return 1
                    })
                },
                p.createImgBase64 = function(r, t) {
                    r = r || 2,
                    t = "undefined" == typeof t ? 4 * r: t;
                    var e = p.getModuleCount() * r + 2 * t,
                    n = t,
                    o = e - t;
                    return w(e, e,
                    function(t, e) {
                        if (t >= n && o > t && e >= n && o > e) {
                            var a = Math.floor((t - n) / r),
                            i = Math.floor((e - n) / r);
                            return p.isDark(i, a) ? 0 : 1
                        }
                        return 1
                    })
                },
                p
            };
            t.stringToBytes = function(r) {
                for (var t = new Array,
                e = 0; e < r.length; e += 1) {
                    var n = r.charCodeAt(e);
                    t.push(255 & n)
                }
                return t
            },
            t.createStringToBytes = function(r, t) {
                var e = function() {
                    for (var e = h(r), n = function() {
                        var r = e.read();
                        if ( - 1 == r) throw new Error;
                        return r
                    },
                    o = 0, a = {};;) {
                        var i = e.read();
                        if ( - 1 == i) break;
                        var u = n(),
                        f = n(),
                        c = n(),
                        g = String.fromCharCode(i << 8 | u),
                        v = f << 8 | c;
                        a[g] = v,
                        o += 1
                    }
                    if (o != t) throw new Error(o + " != " + t);
                    return a
                } (),
                n = "?".charCodeAt(0);
                return function(r) {
                    for (var t = new Array,
                    o = 0; o < r.length; o += 1) {
                        var a = r.charCodeAt(o);
                        if (128 > a) t.push(a);
                        else {
                            var i = e[r.charAt(o)];
                            "number" == typeof i ? (255 & i) == i ? t.push(i) : (t.push(i >>> 8), t.push(255 & i)) : t.push(n)
                        }
                    }
                    return t
                }
            };
            var e = {
                MODE_NUMBER: 1,
                MODE_ALPHA_NUM: 2,
                MODE_8BIT_BYTE: 4,
                MODE_KANJI: 8
            },
            n = {
                L: 1,
                M: 0,
                Q: 3,
                H: 2
            },
            o = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            },
            a = function() {
                var t = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
                n = 1335,
                a = 7973,
                u = 21522,
                f = {},
                c = function(r) {
                    for (var t = 0; 0 != r;) t += 1,
                    r >>>= 1;
                    return t
                };
                return f.getBCHTypeInfo = function(r) {
                    for (var t = r << 10; c(t) - c(n) >= 0;) t ^= n << c(t) - c(n);
                    return (r << 10 | t) ^ u
                },
                f.getBCHTypeNumber = function(r) {
                    for (var t = r << 12; c(t) - c(a) >= 0;) t ^= a << c(t) - c(a);
                    return r << 12 | t
                },
                f.getPatternPosition = function(r) {
                    return t[r - 1]
                },
                f.getMaskFunction = function(r) {
                    switch (r) {
                    case o.PATTERN000:
                        return function(r, t) {
                            return (r + t) % 2 == 0
                        };
                    case o.PATTERN001:
                        return function(r, t) {
                            return r % 2 == 0
                        };
                    case o.PATTERN010:
                        return function(r, t) {
                            return t % 3 == 0
                        };
                    case o.PATTERN011:
                        return function(r, t) {
                            return (r + t) % 3 == 0
                        };
                    case o.PATTERN100:
                        return function(r, t) {
                            return (Math.floor(r / 2) + Math.floor(t / 3)) % 2 == 0
                        };
                    case o.PATTERN101:
                        return function(r, t) {
                            return r * t % 2 + r * t % 3 == 0
                        };
                    case o.PATTERN110:
                        return function(r, t) {
                            return (r * t % 2 + r * t % 3) % 2 == 0
                        };
                    case o.PATTERN111:
                        return function(r, t) {
                            return (r * t % 3 + (r + t) % 2) % 2 == 0
                        };
                    default:
                        throw new Error("bad maskPattern:" + r)
                    }
                },
                f.getErrorCorrectPolynomial = function(t) {
                    for (var e = r([1], 0), n = 0; t > n; n += 1) e = e.multiply(r([1, i.gexp(n)], 0));
                    return e
                },
                f.getLengthInBits = function(r, t) {
                    if (t >= 1 && 10 > t) switch (r) {
                    case e.MODE_NUMBER:
                        return 10;
                    case e.MODE_ALPHA_NUM:
                        return 9;
                    case e.MODE_8BIT_BYTE:
                        return 8;
                    case e.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + r)
                    } else if (27 > t) switch (r) {
                    case e.MODE_NUMBER:
                        return 12;
                    case e.MODE_ALPHA_NUM:
                        return 11;
                    case e.MODE_8BIT_BYTE:
                        return 16;
                    case e.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + r)
                    } else {
                        if (! (41 > t)) throw new Error("type:" + t);
                        switch (r) {
                        case e.MODE_NUMBER:
                            return 14;
                        case e.MODE_ALPHA_NUM:
                            return 13;
                        case e.MODE_8BIT_BYTE:
                            return 16;
                        case e.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error("mode:" + r)
                        }
                    }
                },
                f.getLostPoint = function(r) {
                    for (var t = r.getModuleCount(), e = 0, n = 0; t > n; n += 1) for (var o = 0; t > o; o += 1) {
                        for (var a = 0,
                        i = r.isDark(n, o), u = -1; 1 >= u; u += 1) if (! (0 > n + u || n + u >= t)) for (var f = -1; 1 >= f; f += 1) 0 > o + f || o + f >= t || 0 == u && 0 == f || i == r.isDark(n + u, o + f) && (a += 1);
                        a > 5 && (e += 3 + a - 5)
                    }
                    for (var n = 0; t - 1 > n; n += 1) for (var o = 0; t - 1 > o; o += 1) {
                        var c = 0;
                        r.isDark(n, o) && (c += 1),
                        r.isDark(n + 1, o) && (c += 1),
                        r.isDark(n, o + 1) && (c += 1),
                        r.isDark(n + 1, o + 1) && (c += 1),
                        0 != c && 4 != c || (e += 3)
                    }
                    for (var n = 0; t > n; n += 1) for (var o = 0; t - 6 > o; o += 1) r.isDark(n, o) && !r.isDark(n, o + 1) && r.isDark(n, o + 2) && r.isDark(n, o + 3) && r.isDark(n, o + 4) && !r.isDark(n, o + 5) && r.isDark(n, o + 6) && (e += 40);
                    for (var o = 0; t > o; o += 1) for (var n = 0; t - 6 > n; n += 1) r.isDark(n, o) && !r.isDark(n + 1, o) && r.isDark(n + 2, o) && r.isDark(n + 3, o) && r.isDark(n + 4, o) && !r.isDark(n + 5, o) && r.isDark(n + 6, o) && (e += 40);
                    for (var g = 0,
                    o = 0; t > o; o += 1) for (var n = 0; t > n; n += 1) r.isDark(n, o) && (g += 1);
                    var v = Math.abs(100 * g / t / t - 50) / 5;
                    return e += 10 * v
                },
                f
            } (),
            i = function() {
                for (var r = new Array(256), t = new Array(256), e = 0; 8 > e; e += 1) r[e] = 1 << e;
                for (var e = 8; 256 > e; e += 1) r[e] = r[e - 4] ^ r[e - 5] ^ r[e - 6] ^ r[e - 8];
                for (var e = 0; 255 > e; e += 1) t[r[e]] = e;
                var n = {};
                return n.glog = function(r) {
                    if (1 > r) throw new Error("glog(" + r + ")");
                    return t[r]
                },
                n.gexp = function(t) {
                    for (; 0 > t;) t += 255;
                    for (; t >= 256;) t -= 255;
                    return r[t]
                },
                n
            } (),
            u = function() {
                var r = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16]],
                t = function(r, t) {
                    var e = {};
                    return e.totalCount = r,
                    e.dataCount = t,
                    e
                },
                e = {},
                o = function(t, e) {
                    switch (e) {
                    case n.L:
                        return r[4 * (t - 1) + 0];
                    case n.M:
                        return r[4 * (t - 1) + 1];
                    case n.Q:
                        return r[4 * (t - 1) + 2];
                    case n.H:
                        return r[4 * (t - 1) + 3];
                    default:
                        return
                    }
                };
                return e.getRSBlocks = function(r, e) {
                    var n = o(r, e);
                    if ("undefined" == typeof n) throw new Error("bad rs block @ typeNumber:" + r + "/errorCorrectLevel:" + e);
                    for (var a = n.length / 3,
                    i = new Array,
                    u = 0; a > u; u += 1) for (var f = n[3 * u + 0], c = n[3 * u + 1], g = n[3 * u + 2], v = 0; f > v; v += 1) i.push(t(c, g));
                    return i
                },
                e
            } (),
            f = function() {
                var r = new Array,
                t = 0,
                e = {};
                return e.getBuffer = function() {
                    return r
                },
                e.getAt = function(t) {
                    var e = Math.floor(t / 8);
                    return 1 == (r[e] >>> 7 - t % 8 & 1)
                },
                e.put = function(r, t) {
                    for (var n = 0; t > n; n += 1) e.putBit(1 == (r >>> t - n - 1 & 1))
                },
                e.getLengthInBits = function() {
                    return t
                },
                e.putBit = function(e) {
                    var n = Math.floor(t / 8);
                    r.length <= n && r.push(0),
                    e && (r[n] |= 128 >>> t % 8),
                    t += 1
                },
                e
            },
            c = function(r) {
                var n = e.MODE_8BIT_BYTE,
                o = t.stringToBytes(r),
                a = {};
                return a.getMode = function() {
                    return n
                },
                a.getLength = function(r) {
                    return o.length
                },
                a.write = function(r) {
                    for (var t = 0; t < o.length; t += 1) r.put(o[t], 8)
                },
                a
            },
            g = function() {
                var r = new Array,
                t = {};
                return t.writeByte = function(t) {
                    r.push(255 & t)
                },
                t.writeShort = function(r) {
                    t.writeByte(r),
                    t.writeByte(r >>> 8)
                },
                t.writeBytes = function(r, e, n) {
                    e = e || 0,
                    n = n || r.length;
                    for (var o = 0; n > o; o += 1) t.writeByte(r[o + e])
                },
                t.writeString = function(r) {
                    for (var e = 0; e < r.length; e += 1) t.writeByte(r.charCodeAt(e))
                },
                t.toByteArray = function() {
                    return r
                },
                t.toString = function() {
                    var t = "";
                    t += "[";
                    for (var e = 0; e < r.length; e += 1) e > 0 && (t += ","),
                    t += r[e];
                    return t += "]"
                },
                t
            },
            v = function() {
                var r = 0,
                t = 0,
                e = 0,
                n = "",
                o = {},
                a = function(r) {
                    n += String.fromCharCode(i(63 & r))
                },
                i = function(r) {
                    if (0 > r);
                    else {
                        if (26 > r) return 65 + r;
                        if (52 > r) return 97 + (r - 26);
                        if (62 > r) return 48 + (r - 52);
                        if (62 == r) return 43;
                        if (63 == r) return 47
                    }
                    throw new Error("n:" + r)
                };
                return o.writeByte = function(n) {
                    for (r = r << 8 | 255 & n, t += 8, e += 1; t >= 6;) a(r >>> t - 6),
                    t -= 6
                },
                o.flush = function() {
                    if (t > 0 && (a(r << 6 - t), r = 0, t = 0), e % 3 != 0) for (var o = 3 - e % 3,
                    i = 0; o > i; i += 1) n += "="
                },
                o.toString = function() {
                    return n
                },
                o
            },
            h = function(r) {
                var t = r,
                e = 0,
                n = 0,
                o = 0,
                a = {};
                a.read = function() {
                    for (; 8 > o;) {
                        if (e >= t.length) {
                            if (0 == o) return - 1;
                            throw new Error("unexpected end of file./" + o)
                        }
                        var r = t.charAt(e);
                        if (e += 1, "=" == r) return o = 0,
                        -1;
                        r.match(/^\s$/) || (n = n << 6 | i(r.charCodeAt(0)), o += 6)
                    }
                    var a = n >>> o - 8 & 255;
                    return o -= 8,
                    a
                };
                var i = function(r) {
                    if (r >= 65 && 90 >= r) return r - 65;
                    if (r >= 97 && 122 >= r) return r - 97 + 26;
                    if (r >= 48 && 57 >= r) return r - 48 + 52;
                    if (43 == r) return 62;
                    if (47 == r) return 63;
                    throw new Error("c:" + r)
                };
                return a
            },
            l = function(r, t) {
                var e = r,
                n = t,
                o = new Array(r * t),
                a = {};
                a.setPixel = function(r, t, n) {
                    o[t * e + r] = n
                },
                a.write = function(r) {
                    r.writeString("GIF87a"),
                    r.writeShort(e),
                    r.writeShort(n),
                    r.writeByte(128),
                    r.writeByte(0),
                    r.writeByte(0),
                    r.writeByte(0),
                    r.writeByte(0),
                    r.writeByte(0),
                    r.writeByte(255),
                    r.writeByte(255),
                    r.writeByte(255),
                    r.writeString(","),
                    r.writeShort(0),
                    r.writeShort(0),
                    r.writeShort(e),
                    r.writeShort(n),
                    r.writeByte(0);
                    var t = 2,
                    o = u(t);
                    r.writeByte(t);
                    for (var a = 0; o.length - a > 255;) r.writeByte(255),
                    r.writeBytes(o, a, 255),
                    a += 255;
                    r.writeByte(o.length - a),
                    r.writeBytes(o, a, o.length - a),
                    r.writeByte(0),
                    r.writeString(";")
                };
                var i = function(r) {
                    var t = r,
                    e = 0,
                    n = 0,
                    o = {};
                    return o.write = function(r, o) {
                        if (r >>> o != 0) throw new Error("length over");
                        for (; e + o >= 8;) t.writeByte(255 & (r << e | n)),
                        o -= 8 - e,
                        r >>>= 8 - e,
                        n = 0,
                        e = 0;
                        n = r << e | n,
                        e += o
                    },
                    o.flush = function() {
                        e > 0 && t.writeByte(n)
                    },
                    o
                },
                u = function(r) {
                    for (var t = 1 << r,
                    e = (1 << r) + 1, n = r + 1, a = f(), u = 0; t > u; u += 1) a.add(String.fromCharCode(u));
                    a.add(String.fromCharCode(t)),
                    a.add(String.fromCharCode(e));
                    var c = g(),
                    v = i(c);
                    v.write(t, n);
                    var h = 0,
                    l = String.fromCharCode(o[h]);
                    for (h += 1; h < o.length;) {
                        var s = String.fromCharCode(o[h]);
                        h += 1,
                        a.contains(l + s) ? l += s: (v.write(a.indexOf(l), n), a.size() < 4095 && (a.size() == 1 << n && (n += 1), a.add(l + s)), l = s)
                    }
                    return v.write(a.indexOf(l), n),
                    v.write(e, n),
                    v.flush(),
                    c.toByteArray()
                },
                f = function() {
                    var r = {},
                    t = 0,
                    e = {};
                    return e.add = function(n) {
                        if (e.contains(n)) throw new Error("dup key:" + n);
                        r[n] = t,
                        t += 1
                    },
                    e.size = function() {
                        return t
                    },
                    e.indexOf = function(t) {
                        return r[t]
                    },
                    e.contains = function(t) {
                        return "undefined" != typeof r[t]
                    },
                    e
                };
                return a
            },
            s = function(r, t, e, n) {
                for (var o = l(r, t), a = 0; t > a; a += 1) for (var i = 0; r > i; i += 1) o.setPixel(i, a, e(i, a));
                var u = g();
                o.write(u);
                for (var f = v(), c = u.toByteArray(), h = 0; h < c.length; h += 1) f.writeByte(c[h]);
                f.flush();
                var s = "";
                return s += "<img",
                s += ' src="',
                s += "data:image/gif;base64,",
                s += f,
                s += '"',
                s += ' width="',
                s += r,
                s += '"',
                s += ' height="',
                s += t,
                s += '"',
                n && (s += ' alt="', s += n, s += '"'),
                s += "/>"
            },
            w = function(r, t, e) {
                for (var n = l(r, t), o = 0; t > o; o += 1) for (var a = 0; r > a; a += 1) n.setPixel(a, o, e(a, o));
                var i = g();
                n.write(i);
                for (var u = v(), f = i.toByteArray(), c = 0; c < f.length; c += 1) u.writeByte(f[c]);
                return u.flush(),
                u.toString()
            };
            return t
        } ();
        r.exports = e
    }
});