

// открыть по кнопке
$('.js-button1').click(function() {

    $('.js-overlay1').fadeIn();
    $('.js-overlay1').addClass('disabled');
});
$('.js-button2').click(function() {

    $('.js-overlay2').fadeIn();
    $('.js-overlay2').addClass('disabled');
});
$('.js-button3').click(function() {

    $('.js-overlay3').fadeIn();
    $('.js-overlay3').addClass('disabled');
});
$('.js-button4').click(function() {

    $('.js-overlay4').fadeIn();
    $('.js-overlay4').addClass('disabled');
});
$('.js-button5').click(function() {

    $('.js-overlay5').fadeIn();
    $('.js-overlay5').addClass('disabled');
});
$('.js-button6').click(function() {

    $('.js-overlay6').fadeIn();
    $('.js-overlay6').addClass('disabled');
});
$('.js-button7').click(function() {

    $('.js-overlay7').fadeIn();
    $('.js-overlay7').addClass('disabled');
});
$('.js-button8').click(function() {

    $('.js-overlay8').fadeIn();
    $('.js-overlay8').addClass('disabled');
});
$('.js-button9').click(function() {

    $('.js-overlay9').fadeIn();
    $('.js-overlay9').addClass('disabled');
});
$('.js-button10').click(function() {

    $('.js-overlay10').fadeIn();
    $('.js-overlay10').addClass('disabled');
});
// закрыть на крестик
$('.js-close1').click(function() {
    $('.js-overlay1').fadeOut();

});
$('.js-close2').click(function() {
    $('.js-overlay2').fadeOut();

});
$('.js-close3').click(function() {
    $('.js-overlay3').fadeOut();

});
$('.js-close4').click(function() {
    $('.js-overlay4').fadeOut();

});
$('.js-close5').click(function() {
    $('.js-overlay5').fadeOut();

});
$('.js-close6').click(function() {
    $('.js-overlay6').fadeOut();

});
$('.js-close7').click(function() {
    $('.js-overlay7').fadeOut();

});
$('.js-close8').click(function() {
    $('.js-overlay8').fadeOut();

});
$('.js-close9').click(function() {
    $('.js-overlay9').fadeOut();

});
$('.js-close10').click(function() {
    $('.js-overlay10').fadeOut();

});
// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup1');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay1').fadeOut();
    }
});
$(document).mouseup(function (e) {
    var popup = $('.js-popup2');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay2').fadeOut();
    }
});
$(document).mouseup(function (e) {
    var popup = $('.js-popup3');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay3').fadeOut();
    }
});
$(document).mouseup(function (e) {
    var popup = $('.js-popup4');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay4').fadeOut();
    }
});
$(document).mouseup(function (e) {
    var popup = $('.js-popup5');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay5').fadeOut();
    }
});
$(document).mouseup(function (e) {
    var popup = $('.js-popup6');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay6').fadeOut();
    }
});
$(document).mouseup(function (e) {
    var popup = $('.js-popup7');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay7').fadeOut();
    }
});
$(document).mouseup(function (e) {
    var popup = $('.js-popup8');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay8').fadeOut();
    }
});
$(document).mouseup(function (e) {
    var popup = $('.js-popup9');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay9').fadeOut();
    }
});
$(document).mouseup(function (e) {
    var popup = $('.js-popup10');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay10').fadeOut();
    }
});

/*owl-carousel*/
jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 2,
        autoplay: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav : true,
        navText : ["",""],
        responsive: {
            0: {
                items: 1,
            },
            768: {
               items: 2
            },
        }
    });
});
$('.slider').slick({
    autoplay: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '8.5rem',
    centerMode: false,
    dots: true,
    arrows: true,
    responsive:[
        {
            breakpoint: 1100,
            settings:{
                slidesToShow: 3
            }
        },
        {
            breakpoint: 950,
            settings:{
                slidesToShow: 2,
                infinite: true
            }
        },
        {
            breakpoint: 790,
            settings:{
                slidesToShow: 1.5,
                infinite: true
            }
        },
        {
            breakpoint: 550,
            settings:{
                slidesToShow: 1,
                infinite: true
            }
        }
    ]
});

//wave
$(function() {
    $(window).on("load", function() {
        setTimeout(function() {
            $("#preloader").css("opacity", "0"), $("body").css("overflow-y", "auto"), setTimeout(function() {
                $("#preloader").css("z-index", "-1")
            }, 500), setTimeout(function() {
                $("#wave1").css("opacity", "0"), $("#wave2").css("opacity", "0"), $("#wave3").css("opacity", "0"), $("#wave1_down").css("opacity", "0"), $("#wave2_down").css("opacity", "0"), $("#wave3_down").css("opacity", "0")
            }, 1e4);
            var i = null;
            $(document).on("scroll", function() {
                clearTimeout(i), $("#wave1").css("opacity", "0.6"), $("#wave2").css("opacity", "0.7"), $("#wave3").css("opacity", "0.6"), $("#wave1_down").css("opacity", "0.6"), $("#wave2_down").css("opacity", "0.6"), $("#wave3_down").css("opacity", "0.6"), i = setTimeout(function() {
                    $("#wave1").css("opacity", "0"), $("#wave2").css("opacity", "0"), $("#wave3").css("opacity", "0"), $("#wave1_down").css("opacity", "0"), $("#wave2_down").css("opacity", "0"), $("#wave3_down").css("opacity", "0")
                }, 1e4)
            })
        }, 1e3)
    }),
    function() {
        var i = document.getElementById("wave1"),
            t = i.getContext("2d"),
            e = i.width = window.innerWidth,
            s = i.height = 200,
            r = [],
            a = {
                count: 5,
                range: {
                    x: 20,
                    y: 80
                },
                duration: {
                    min: 120,
                    max: 120
                },
                thickness: 0,
                level: .35,
                curved: !0
            },
            n = function(i, t) {
                return Math.floor(Math.random() * (t - i + 1) + i)
            },
            l = function(i, t, e, s) {
                return (i /= s / 2) < 1 ? e / 2 * i * i + t : -e / 2 * (--i * (i - 2) - 1) + t
            };
        t.lineJoin = "round", t.lineWidth = a.thickness, t.strokeStyle = a.strokeColor;
        var c = function(i) {
            this.anchorX = i.x, this.anchorY = i.y, this.x = i.x, this.y = i.y, this.setTarget()
        };
        c.prototype.setTarget = function() {
            this.initialX = this.x, this.initialY = this.y, this.targetX = this.anchorX + n(0, 2 * a.range.x) - a.range.x, this.targetY = this.anchorY + n(0, 2 * a.range.y) - a.range.y, this.tick = 0, this.duration = n(a.duration.min, a.duration.max)
        }, c.prototype.update = function() {
            var i = this.targetX - this.x,
                t = this.targetY - this.y,
                e = Math.sqrt(i * i + t * t);
            if (Math.abs(e) <= 0) this.setTarget();
            else {
                var s = this.tick,
                    r = this.initialY,
                    a = this.targetY - this.initialY,
                    n = this.duration;
                this.y = l(s, r, a, n), r = this.initialX, a = this.targetX - this.initialX, n = this.duration, this.x = l(s, r, a, n), this.tick++
            }
        }, c.prototype.render = function() {
            t.beginPath(), t.arc(this.x, this.y, 3, 0, 2 * Math.PI, !1), t.fillStyle = "#000", t.fill()
        };
        for (var o = function() {
            window.requestAnimFrame(o, i), t.clearRect(0, 0, e, s),
                function() {
                    for (var i = r.length; i--;) r[i].update()
                }(),
                function() {
                    t.beginPath();
                    var i, n = r.length;
                    for (t.moveTo(r[0].x, r[0].y), i = 0; i < n - 1; i++) {
                        var l = (r[i].x + r[i + 1].x) / 2,
                            c = (r[i].y + r[i + 1].y) / 2;
                        t.quadraticCurveTo(r[i].x, r[i].y, l, c)
                    }
                    t.lineTo(-a.range.x - a.thickness, s + a.thickness), t.lineTo(e + a.range.x + a.thickness, s + a.thickness), t.closePath();
                    var o = t.createLinearGradient(0, 0, e, 0);
                    o.addColorStop(1, "#ffe800"), o.addColorStop(.75, "#ff9600"), o.addColorStop(.5, "#ff2000"), o.addColorStop(.25, "#00a4ff"), o.addColorStop(0, "#4f80b0"), t.fillStyle = o, t.fill()
                }()
        }, m = a.count + 2, h = (e + 2 * a.range.x) / (a.count - 1); m--;) r.push(new c({
            x: h * (m - 1) - a.range.x,
            y: s - s * a.level
        }));
        window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(i) {
                window.setTimeout(i, 1e3 / 60)
            }, o()
    }(),
        function() {
            var i = document.getElementById("wave1_down"),
                t = i.getContext("2d"),
                e = i.width = window.innerWidth,
                s = i.height = 200,
                r = [],
                a = {
                    count: 5,
                    range: {
                        x: 20,
                        y: 80
                    },
                    duration: {
                        min: 120,
                        max: 120
                    },
                    thickness: 0,
                    level: .35,
                    curved: !0
                },
                n = function(i, t) {
                    return Math.floor(Math.random() * (t - i + 1) + i)
                },
                l = function(i, t, e, s) {
                    return (i /= s / 2) < 1 ? e / 2 * i * i + t : -e / 2 * (--i * (i - 2) - 1) + t
                };
            t.lineJoin = "round", t.lineWidth = a.thickness, t.strokeStyle = a.strokeColor;
            var c = function(i) {
                this.anchorX = i.x, this.anchorY = i.y, this.x = i.x, this.y = i.y, this.setTarget()
            };
            c.prototype.setTarget = function() {
                this.initialX = this.x, this.initialY = this.y, this.targetX = this.anchorX + n(0, 2 * a.range.x) - a.range.x, this.targetY = this.anchorY + n(0, 2 * a.range.y) - a.range.y, this.tick = 0, this.duration = n(a.duration.min, a.duration.max)
            }, c.prototype.update = function() {
                var i = this.targetX - this.x,
                    t = this.targetY - this.y,
                    e = Math.sqrt(i * i + t * t);
                if (Math.abs(e) <= 0) this.setTarget();
                else {
                    var s = this.tick,
                        r = this.initialY,
                        a = this.targetY - this.initialY,
                        n = this.duration;
                    this.y = l(s, r, a, n), r = this.initialX, a = this.targetX - this.initialX, n = this.duration, this.x = l(s, r, a, n), this.tick++
                }
            }, c.prototype.render = function() {
                t.beginPath(), t.arc(this.x, this.y, 3, 0, 2 * Math.PI, !1), t.fillStyle = "#000", t.fill()
            };
            for (var o = function() {
                window.requestAnimFrame(o, i), t.clearRect(0, 0, e, s),
                    function() {
                        for (var i = r.length; i--;) r[i].update()
                    }(),
                    function() {
                        t.beginPath();
                        var i, n = r.length;
                        for (t.moveTo(r[0].x, r[0].y), i = 0; i < n - 1; i++) {
                            var l = (r[i].x + r[i + 1].x) / 2,
                                c = (r[i].y + r[i + 1].y) / 2;
                            t.quadraticCurveTo(r[i].x, r[i].y, l, c)
                        }
                        t.lineTo(-a.range.x - a.thickness, s + a.thickness), t.lineTo(e + a.range.x + a.thickness, s + a.thickness), t.closePath();
                        var o = t.createLinearGradient(0, 0, e, 0);
                        o.addColorStop(1, "#ffe800"), o.addColorStop(.8, "#ff9600"), o.addColorStop(.7, "#00a4ff"), o.addColorStop(.5, "#ff2000"), o.addColorStop(.3, "#4f80b0"), o.addColorStop(0, "#45b71d"), t.fillStyle = o, t.fill()
                    }()
            }, m = a.count + 2, h = (e + 2 * a.range.x) / (a.count - 1); m--;) r.push(new c({
                x: h * (m - 1) - a.range.x,
                y: s - s * a.level
            }));
            window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(i) {
                    window.setTimeout(i, 1e3 / 60)
                }, o()
        }(),
        function() {
            var i = document.getElementById("wave2"),
                t = i.getContext("2d"),
                e = i.width = window.innerWidth,
                s = i.height = 200,
                r = [],
                a = {
                    count: 5,
                    range: {
                        x: 20,
                        y: 80
                    },
                    duration: {
                        min: 160,
                        max: 160
                    },
                    thickness: 0,
                    level: .35,
                    curved: !0
                },
                n = function(i, t) {
                    return Math.floor(Math.random() * (t - i + 1) + i)
                },
                l = function(i, t, e, s) {
                    return (i /= s / 2) < 1 ? e / 2 * i * i + t : -e / 2 * (--i * (i - 2) - 1) + t
                };
            t.lineJoin = "round", t.lineWidth = a.thickness, t.strokeStyle = a.strokeColor;
            var c = function(i) {
                this.anchorX = i.x, this.anchorY = i.y, this.x = i.x, this.y = i.y, this.setTarget()
            };
            c.prototype.setTarget = function() {
                this.initialX = this.x, this.initialY = this.y, this.targetX = this.anchorX + n(0, 2 * a.range.x) - a.range.x, this.targetY = this.anchorY + n(0, 2 * a.range.y) - a.range.y, this.tick = 0, this.duration = n(a.duration.min, a.duration.max)
            }, c.prototype.update = function() {
                var i = this.targetX - this.x,
                    t = this.targetY - this.y,
                    e = Math.sqrt(i * i + t * t);
                if (Math.abs(e) <= 0) this.setTarget();
                else {
                    var s = this.tick,
                        r = this.initialY,
                        a = this.targetY - this.initialY,
                        n = this.duration;
                    this.y = l(s, r, a, n), r = this.initialX, a = this.targetX - this.initialX, n = this.duration, this.x = l(s, r, a, n), this.tick++
                }
            }, c.prototype.render = function() {
                t.beginPath(), t.arc(this.x, this.y, 3, 0, 2 * Math.PI, !1), t.fillStyle = "#000", t.fill()
            };
            for (var o = function() {
                window.requestAnimFrame(o, i), t.clearRect(0, 0, e, s),
                    function() {
                        for (var i = r.length; i--;) r[i].update()
                    }(),
                    function() {
                        t.beginPath();
                        var i, n = r.length;
                        for (t.moveTo(r[0].x, r[0].y), i = 0; i < n - 1; i++) {
                            var l = (r[i].x + r[i + 1].x) / 2,
                                c = (r[i].y + r[i + 1].y) / 2;
                            t.quadraticCurveTo(r[i].x, r[i].y, l, c)
                        }
                        t.lineTo(-a.range.x - a.thickness, s + a.thickness), t.lineTo(e + a.range.x + a.thickness, s + a.thickness), t.closePath();
                        var o = t.createLinearGradient(0, 0, e, 0);
                        o.addColorStop(1, "#45b71d"), o.addColorStop(.7, "#4f80b0"), o.addColorStop(.5, "#00a4ff"), o.addColorStop(.4, "#ff2000"), o.addColorStop(.2, "#ff9600"), o.addColorStop(0, "#ffe800"), t.fillStyle = o, t.fill()
                    }()
            }, m = a.count + 2, h = (e + 2 * a.range.x) / (a.count - 1); m--;) r.push(new c({
                x: h * (m - 1) - a.range.x,
                y: s - s * a.level
            }));
            window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(i) {
                    window.setTimeout(i, 1e3 / 60)
                }, o()
        }(),
        function() {
            var i = document.getElementById("wave2_down"),
                t = i.getContext("2d"),
                e = i.width = window.innerWidth,
                s = i.height = 200,
                r = [],
                a = {
                    count: 5,
                    range: {
                        x: 20,
                        y: 80
                    },
                    duration: {
                        min: 160,
                        max: 160
                    },
                    thickness: 0,
                    level: .35,
                    curved: !0
                },
                n = function(i, t) {
                    return Math.floor(Math.random() * (t - i + 1) + i)
                },
                l = function(i, t, e, s) {
                    return (i /= s / 2) < 1 ? e / 2 * i * i + t : -e / 2 * (--i * (i - 2) - 1) + t
                };
            t.lineJoin = "round", t.lineWidth = a.thickness, t.strokeStyle = a.strokeColor;
            var c = function(i) {
                this.anchorX = i.x, this.anchorY = i.y, this.x = i.x, this.y = i.y, this.setTarget()
            };
            c.prototype.setTarget = function() {
                this.initialX = this.x, this.initialY = this.y, this.targetX = this.anchorX + n(0, 2 * a.range.x) - a.range.x, this.targetY = this.anchorY + n(0, 2 * a.range.y) - a.range.y, this.tick = 0, this.duration = n(a.duration.min, a.duration.max)
            }, c.prototype.update = function() {
                var i = this.targetX - this.x,
                    t = this.targetY - this.y,
                    e = Math.sqrt(i * i + t * t);
                if (Math.abs(e) <= 0) this.setTarget();
                else {
                    var s = this.tick,
                        r = this.initialY,
                        a = this.targetY - this.initialY,
                        n = this.duration;
                    this.y = l(s, r, a, n), r = this.initialX, a = this.targetX - this.initialX, n = this.duration, this.x = l(s, r, a, n), this.tick++
                }
            }, c.prototype.render = function() {
                t.beginPath(), t.arc(this.x, this.y, 3, 0, 2 * Math.PI, !1), t.fillStyle = "#000", t.fill()
            };
            for (var o = function() {
                window.requestAnimFrame(o, i), t.clearRect(0, 0, e, s),
                    function() {
                        for (var i = r.length; i--;) r[i].update()
                    }(),
                    function() {
                        t.beginPath();
                        var i, n = r.length;
                        for (t.moveTo(r[0].x, r[0].y), i = 0; i < n - 1; i++) {
                            var l = (r[i].x + r[i + 1].x) / 2,
                                c = (r[i].y + r[i + 1].y) / 2;
                            t.quadraticCurveTo(r[i].x, r[i].y, l, c)
                        }
                        t.lineTo(-a.range.x - a.thickness, s + a.thickness), t.lineTo(e + a.range.x + a.thickness, s + a.thickness), t.closePath();
                        var o = t.createLinearGradient(0, 0, e, 0);
                        o.addColorStop(1, "#ffe800"), o.addColorStop(.8, "#ff9600"), o.addColorStop(.6, "#00a4ff"), o.addColorStop(.5, "#ff2000"), o.addColorStop(.3, "#4f80b0"), o.addColorStop(0, "#45b71d"), t.fillStyle = o, t.fill()
                    }()
            }, m = a.count + 2, h = (e + 2 * a.range.x) / (a.count - 1); m--;) r.push(new c({
                x: h * (m - 1) - a.range.x,
                y: s - s * a.level
            }));
            window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(i) {
                    window.setTimeout(i, 1e3 / 60)
                }, o()
        }(),
        function() {
            var i = document.getElementById("wave3"),
                t = i.getContext("2d"),
                e = i.width = window.innerWidth,
                s = i.height = 200,
                r = [],
                a = {
                    count: 5,
                    range: {
                        x: 20,
                        y: 80
                    },
                    duration: {
                        min: 140,
                        max: 140
                    },
                    thickness: 0,
                    level: .35,
                    curved: !0
                },
                n = function(i, t) {
                    return Math.floor(Math.random() * (t - i + 1) + i)
                },
                l = function(i, t, e, s) {
                    return (i /= s / 2) < 1 ? e / 2 * i * i + t : -e / 2 * (--i * (i - 2) - 1) + t
                };
            t.lineJoin = "round", t.lineWidth = a.thickness, t.strokeStyle = a.strokeColor;
            var c = function(i) {
                this.anchorX = i.x, this.anchorY = i.y, this.x = i.x, this.y = i.y, this.setTarget()
            };
            c.prototype.setTarget = function() {
                this.initialX = this.x, this.initialY = this.y, this.targetX = this.anchorX + n(0, 2 * a.range.x) - a.range.x, this.targetY = this.anchorY + n(0, 2 * a.range.y) - a.range.y, this.tick = 0, this.duration = n(a.duration.min, a.duration.max)
            }, c.prototype.update = function() {
                var i = this.targetX - this.x,
                    t = this.targetY - this.y,
                    e = Math.sqrt(i * i + t * t);
                if (Math.abs(e) <= 0) this.setTarget();
                else {
                    var s = this.tick,
                        r = this.initialY,
                        a = this.targetY - this.initialY,
                        n = this.duration;
                    this.y = l(s, r, a, n), r = this.initialX, a = this.targetX - this.initialX, n = this.duration, this.x = l(s, r, a, n), this.tick++
                }
            }, c.prototype.render = function() {
                t.beginPath(), t.arc(this.x, this.y, 3, 0, 2 * Math.PI, !1), t.fillStyle = "#000", t.fill()
            };
            for (var o = function() {
                window.requestAnimFrame(o, i), t.clearRect(0, 0, e, s),
                    function() {
                        for (var i = r.length; i--;) r[i].update()
                    }(),
                    function() {
                        t.beginPath();
                        var i, n = r.length;
                        for (t.moveTo(r[0].x, r[0].y), i = 0; i < n - 1; i++) {
                            var l = (r[i].x + r[i + 1].x) / 2,
                                c = (r[i].y + r[i + 1].y) / 2;
                            t.quadraticCurveTo(r[i].x, r[i].y, l, c)
                        }
                        t.lineTo(-a.range.x - a.thickness, s + a.thickness), t.lineTo(e + a.range.x + a.thickness, s + a.thickness), t.closePath();
                        var o = t.createLinearGradient(0, 0, e, 0);
                        o.addColorStop(1, "#45b71d"), o.addColorStop(.8, "#4f80b0"), o.addColorStop(.7, "#ff2000"), o.addColorStop(.5, "#00a4ff"), o.addColorStop(.3, "#ff9600"), o.addColorStop(0, "#ffe800"), t.fillStyle = o, t.fill()
                    }()
            }, m = a.count + 2, h = (e + 2 * a.range.x) / (a.count - 1); m--;) r.push(new c({
                x: h * (m - 1) - a.range.x,
                y: s - s * a.level
            }));
            window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(i) {
                    window.setTimeout(i, 1e3 / 60)
                }, o()
        }(),
        function() {
            var i = document.getElementById("wave3_down"),
                t = i.getContext("2d"),
                e = i.width = window.innerWidth,
                s = i.height = 200,
                r = [],
                a = {
                    count: 5,
                    range: {
                        x: 20,
                        y: 80
                    },
                    duration: {
                        min: 140,
                        max: 140
                    },
                    thickness: 0,
                    level: .35,
                    curved: !0
                },
                n = function(i, t) {
                    return Math.floor(Math.random() * (t - i + 1) + i)
                },
                l = function(i, t, e, s) {
                    return (i /= s / 2) < 1 ? e / 2 * i * i + t : -e / 2 * (--i * (i - 2) - 1) + t
                };
            t.lineJoin = "round", t.lineWidth = a.thickness, t.strokeStyle = a.strokeColor;
            var c = function(i) {
                this.anchorX = i.x, this.anchorY = i.y, this.x = i.x, this.y = i.y, this.setTarget()
            };
            c.prototype.setTarget = function() {
                this.initialX = this.x, this.initialY = this.y, this.targetX = this.anchorX + n(0, 2 * a.range.x) - a.range.x, this.targetY = this.anchorY + n(0, 2 * a.range.y) - a.range.y, this.tick = 0, this.duration = n(a.duration.min, a.duration.max)
            }, c.prototype.update = function() {
                var i = this.targetX - this.x,
                    t = this.targetY - this.y,
                    e = Math.sqrt(i * i + t * t);
                if (Math.abs(e) <= 0) this.setTarget();
                else {
                    var s = this.tick,
                        r = this.initialY,
                        a = this.targetY - this.initialY,
                        n = this.duration;
                    this.y = l(s, r, a, n), r = this.initialX, a = this.targetX - this.initialX, n = this.duration, this.x = l(s, r, a, n), this.tick++
                }
            }, c.prototype.render = function() {
                t.beginPath(), t.arc(this.x, this.y, 3, 0, 2 * Math.PI, !1), t.fillStyle = "#000", t.fill()
            };
            for (var o = function() {
                window.requestAnimFrame(o, i), t.clearRect(0, 0, e, s),
                    function() {
                        for (var i = r.length; i--;) r[i].update()
                    }(),
                    function() {
                        t.beginPath();
                        var i, n = r.length;
                        for (t.moveTo(r[0].x, r[0].y), i = 0; i < n - 1; i++) {
                            var l = (r[i].x + r[i + 1].x) / 2,
                                c = (r[i].y + r[i + 1].y) / 2;
                            t.quadraticCurveTo(r[i].x, r[i].y, l, c)
                        }
                        t.lineTo(-a.range.x - a.thickness, s + a.thickness), t.lineTo(e + a.range.x + a.thickness, s + a.thickness), t.closePath();
                        var o = t.createLinearGradient(0, 0, e, 0);
                        o.addColorStop(1, "#ffe800"), o.addColorStop(.8, "#ff9600"), o.addColorStop(.7, "#00a4ff"), o.addColorStop(.5, "#ff2000"), o.addColorStop(.3, "#4f80b0"), o.addColorStop(0, "#45b71d"), t.fillStyle = o, t.fill()
                    }()
            }, m = a.count + 2, h = (e + 2 * a.range.x) / (a.count - 1); m--;) r.push(new c({
                x: h * (m - 1) - a.range.x,
                y: s - s * a.level
            }));
            window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(i) {
                    window.setTimeout(i, 1e3 / 60)
                }, o()
        }()
});
