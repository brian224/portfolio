var HEAVEN = HEAVEN || {};
HEAVEN.canvas = (function() {
    var _0xfa0ex2 = [], 
    _0xfa0ex3 = document.getElementById("myCanvas"), 
    _0xfa0ex4 = _0xfa0ex3.getContext("2d"), 
    _0xfa0ex5, 
    _0xfa0ex6, 
    _0xfa0ex7, 
    _0xfa0ex8 = 0, 
    _0xfa0ex9, 
    _0xfa0exa, 
    _0xfa0exb, 
    _0xfa0exc, 
    _0xfa0exd, 
    _0xfa0exe = {}, 
    _0xfa0exf = 64, 
    _0xfa0ex10 = _0xfa0exf / 4, 
    _0xfa0ex11 = 64, 
    _0xfa0ex12 = _0xfa0ex11 / 4, 
    _0xfa0ex13 = $(".arrow-btn.left"), 
    _0xfa0ex14 = $(".arrow-btn.right"), 
    _0xfa0ex15 = $(".msk"), 
    _0xfa0ex16, 
    _0xfa0ex17 = $(".list.type1"), 
    _0xfa0ex18 = $(".list.type2"), 
    _0xfa0ex19, 
    _0xfa0ex1a, 
    _0xfa0ex1b, 
    _0xfa0ex1c, 
    _0xfa0ex1d, 
    _0xfa0ex1e = 0, 
    _0xfa0ex1f, 
    _0xfa0ex20 = $("#myCanvas").offset(), 
    _0xfa0ex21 = parseInt(_0xfa0ex20.left, 10), 
    _0xfa0ex22 = parseInt(_0xfa0ex20.top, 10), 
    _0xfa0ex23 = "", 
    _0xfa0ex24 = 1, 
    _0xfa0ex25 = 0, 
    _0xfa0ex26 = false, 
    _0xfa0ex27 = function(_0xfa0ex4c) {
        var _0xfa0ex4d = new Image();
        _0xfa0ex4d.src = _0xfa0ex4c.target.result;
        _0xfa0ex4d.onload = _0xfa0ex28
    }, _0xfa0ex28 = function(_0xfa0ex4c) {
        _0xfa0ex2a(_0xfa0ex4c.currentTarget)
    }, _0xfa0ex29 = function(_0xfa0ex4e) {
        var _0xfa0ex4d = new Image();
        _0xfa0ex4d.src = _0xfa0ex4e;
        _0xfa0ex4d.onload = _0xfa0ex28
    }, _0xfa0ex2a = function(_0xfa0ex4f) {
        var _0xfa0ex50 = _0xfa0ex4f.width/2, 
            _0xfa0ex51 = _0xfa0ex4f.height/2, 
            _0xfa0ex52, 
            _0xfa0ex53, 
            _0xfa0ex54, 
            _0xfa0ex55, 
            _0xfa0ex56, 
            _0xfa0ex52 = new createjs.Container();
        var matrix = new createjs.Matrix2D();
            matrix.scale(0.5,0.5);

        _0xfa0ex52.name = "c" + _0xfa0ex8;
        _0xfa0ex52.w = _0xfa0ex50;
        _0xfa0ex52.h = _0xfa0ex51;
        _0xfa0ex52.x = 300;
        _0xfa0ex52.y = 50;
        _0xfa0ex52.dx = 0;
        _0xfa0ex52.dy = 0;
        _0xfa0ex52.dw = _0xfa0ex50;
        _0xfa0ex52.dh = _0xfa0ex51;
        _0xfa0ex52.range = Math.sqrt(Math.pow(_0xfa0ex50 / 2, 2) + Math.pow(_0xfa0ex51 / 2, 2));
        _0xfa0ex52.scale = 1;
        _0xfa0ex52.cursor = "pointer";
        _0xfa0ex53 = new createjs.Shape();
        _0xfa0ex53.graphics.drawRect(0, 0, _0xfa0ex50, _0xfa0ex51);
        _0xfa0ex52.bg = _0xfa0ex53;
        _0xfa0ex52.addChild(_0xfa0ex53);
        _0xfa0ex53 = new createjs.Shape();
        _0xfa0ex53.graphics.beginBitmapFill(_0xfa0ex4f,  "no-repeat", matrix).drawRect(0, 0, _0xfa0ex50, _0xfa0ex51);
        _0xfa0ex52.source = _0xfa0ex53;
        _0xfa0ex52.addChild(_0xfa0ex53);
        _0xfa0ex54 = new createjs.Shape();
        _0xfa0ex54.graphics.beginStroke("#fff").drawRect(-1, -1, _0xfa0ex50 + 2, _0xfa0ex51 + 2);
        _0xfa0ex54.set({
            visible: false
        });
        _0xfa0ex52.dash = _0xfa0ex54;
        _0xfa0ex52.addChild(_0xfa0ex54);
        _0xfa0ex55 = new createjs.Shape();
        _0xfa0ex55.graphics.beginBitmapFill(_0xfa0exe.remove).drawRect(0, 0, _0xfa0exf, _0xfa0exf);
        if (projects.device() === 'Mobile') {
            _0xfa0ex55.setTransform(-_0xfa0ex10*2, -_0xfa0ex10*2, 1, 1).set({
                y: _0xfa0ex51 - _0xfa0ex10*2,
                visible: false
            });
        } else {
            _0xfa0ex55.setTransform(-_0xfa0ex10, -_0xfa0ex10, 0.5, 0.5).set({
                y: _0xfa0ex51 - _0xfa0ex10,
                visible: false
            });
        }
        _0xfa0ex52.remove = _0xfa0ex55;
        _0xfa0ex52.addChild(_0xfa0ex55);
        _0xfa0ex56 = new createjs.Shape();
        _0xfa0ex56.graphics.beginBitmapFill(_0xfa0exe.resize).drawRect(0, 0, _0xfa0ex11, _0xfa0ex11);
        if (projects.device() === 'Mobile') {
            _0xfa0ex56.setTransform(-_0xfa0ex12*2, -_0xfa0ex12*2, 1, 1).set({
                x: _0xfa0ex50 - _0xfa0ex12*2,
                visible: false
            });
        } else {
            _0xfa0ex56.setTransform(-_0xfa0ex12, -_0xfa0ex12, 0.5, 0.5).set({
                x: _0xfa0ex50 - _0xfa0ex12,
                visible: false
            });
        }
        _0xfa0ex52.resize = _0xfa0ex56;
        _0xfa0ex52.addChild(_0xfa0ex56);
        _0xfa0ex6.addChild(_0xfa0ex52);
        _0xfa0ex8++;
        _0xfa0ex52.bg.on("mousedown", _0xfa0ex37, null, false);
        _0xfa0ex52.source.on("mousedown", _0xfa0ex37, null, false);
        _0xfa0ex52.remove.on("mousedown", _0xfa0ex33, null, false);
        _0xfa0ex52.resize.on("mousedown", _0xfa0ex34, null, false);
        _0xfa0ex2b(_0xfa0ex52.name)
    }, _0xfa0ex2b = function(_0xfa0ex57) {
        var _0xfa0ex58 = _0xfa0ex6.children, _0xfa0ex59 = 0, _0xfa0ex5a = _0xfa0ex58.length, _0xfa0ex5b, _0xfa0ex5c;
        for (_0xfa0ex59 = 0; _0xfa0ex59 < _0xfa0ex5a; _0xfa0ex59++) {
            if (_0xfa0ex58[_0xfa0ex59].name === _0xfa0ex57) {
                _0xfa0ex31(_0xfa0ex58[_0xfa0ex59]);
                _0xfa0ex5c = _0xfa0ex58[_0xfa0ex59];
                _0xfa0exd = _0xfa0ex5c
            } else {
                _0xfa0ex32(_0xfa0ex58[_0xfa0ex59])
            }
        }
        ;if (_0xfa0ex5c) {
            _0xfa0ex6.addChild(_0xfa0ex5c)
        }
    }, _0xfa0ex2c = function(_0xfa0ex52, _0xfa0ex5d, _0xfa0ex5e, _0xfa0ex50, _0xfa0ex51, _0xfa0ex5f) {
        createjs.Tween.get(_0xfa0ex52.source).to({
            x: _0xfa0ex5d,
            y: _0xfa0ex5e,
            scaleX: _0xfa0ex5f,
            scaleY: _0xfa0ex5f
        }, 100, createjs.Ease.circOut());
        createjs.Tween.get(_0xfa0ex52.dash).to({
            x: _0xfa0ex5d,
            y: _0xfa0ex5e,
            scaleX: _0xfa0ex5f,
            scaleY: _0xfa0ex5f
        }, 100, createjs.Ease.circOut());
        if (projects.device() === 'Mobile') {
            createjs.Tween.get(_0xfa0ex52.remove).to({
                x: _0xfa0ex5d - _0xfa0ex10*2,
                y: _0xfa0ex51 - _0xfa0ex10*2
            }, 100, createjs.Ease.circOut());
            createjs.Tween.get(_0xfa0ex52.resize).to({
                x: _0xfa0ex50 - _0xfa0ex12*2,
                y: _0xfa0ex5e - _0xfa0ex12*2
            }, 100, createjs.Ease.circOut())
        } else {
            createjs.Tween.get(_0xfa0ex52.remove).to({
                x: _0xfa0ex5d - _0xfa0ex10,
                y: _0xfa0ex51 - _0xfa0ex10
            }, 100, createjs.Ease.circOut());
            createjs.Tween.get(_0xfa0ex52.resize).to({
                x: _0xfa0ex50 - _0xfa0ex12,
                y: _0xfa0ex5e - _0xfa0ex12
            }, 100, createjs.Ease.circOut())
        }
    }, _0xfa0ex2d = function(_0xfa0ex52, _0xfa0ex60) {
        _0xfa0ex52.dash.set({
            visible: _0xfa0ex60
        });
        _0xfa0ex52.remove.set({
            visible: _0xfa0ex60
        });
        _0xfa0ex52.resize.set({
            visible: _0xfa0ex60
        })
    }, _0xfa0ex2e = function(_0xfa0ex52) {
        var _0xfa0ex61 = _0xfa0ex52.scale * 1.02
          , _0xfa0ex62 = (1 - _0xfa0ex61) * (_0xfa0ex52.w / 2)
          , _0xfa0ex63 = (1 - _0xfa0ex61) * (_0xfa0ex52.h / 2);
        _0xfa0ex2c(_0xfa0ex52, _0xfa0ex62, _0xfa0ex63, _0xfa0ex52.w - _0xfa0ex62, _0xfa0ex52.h - _0xfa0ex63, _0xfa0ex61)
    }, _0xfa0ex2f = function(_0xfa0ex52) {
        _0xfa0ex2c(_0xfa0ex52, _0xfa0ex52.dx, _0xfa0ex52.dy, _0xfa0ex52.dw, _0xfa0ex52.dh, _0xfa0ex52.scale)
    }, _0xfa0ex30 = function(_0xfa0ex64) {
        var _0xfa0ex5f = Math.min(Math.max(_0xfa0ex64 / _0xfa0exd.range, 0.2), 2);
        _0xfa0exd.scale = _0xfa0ex5f;
        _0xfa0exd.dx = (1 - _0xfa0ex5f) * (_0xfa0exd.w / 2);
        _0xfa0exd.dy = (1 - _0xfa0ex5f) * (_0xfa0exd.h / 2);
        _0xfa0exd.dw = _0xfa0exd.dx + _0xfa0exd.w * _0xfa0ex5f;
        _0xfa0exd.dh = _0xfa0exd.dy + _0xfa0exd.h * _0xfa0ex5f;
        _0xfa0exd.source.set({
            x: _0xfa0exd.dx,
            y: _0xfa0exd.dy,
            scaleX: _0xfa0ex5f,
            scaleY: _0xfa0ex5f
        });
        _0xfa0exd.dash.set({
            x: _0xfa0exd.dx,
            y: _0xfa0exd.dy,
            scaleX: _0xfa0ex5f,
            scaleY: _0xfa0ex5f
        });
        _0xfa0exd.remove.set({
            x: _0xfa0exd.dx - _0xfa0ex10,
            y: _0xfa0exd.dh - _0xfa0ex10
        });
        _0xfa0exd.resize.set({
            x: _0xfa0exd.dw - _0xfa0ex10,
            y: _0xfa0exd.dy - _0xfa0ex10
        })
    }, _0xfa0ex31 = function(_0xfa0ex52) {
        _0xfa0ex2d(_0xfa0ex52, true)
    }, _0xfa0ex32 = function(_0xfa0ex52) {
        _0xfa0ex2d(_0xfa0ex52, false)
    }, _0xfa0ex33 = function(_0xfa0ex4c) {
        _0xfa0ex6.removeChild(_0xfa0ex4c.currentTarget.parent)
    }, _0xfa0ex34 = function(_0xfa0ex4c) {
        _0xfa0ex47();
        var _0xfa0ex65 = _0xfa0ex4c.currentTarget.parent;
        _0xfa0ex9 = _0xfa0ex65.w / 2 + _0xfa0ex65.x;
        _0xfa0exa = _0xfa0ex65.h / 2 + _0xfa0ex65.y;
        $(document).on("mousemove touchmove", _0xfa0ex35).on("mouseup mouseleave touchend touchcancel", _0xfa0ex36)
    }, _0xfa0ex35 = function(_0xfa0ex4c) {
        var _0xfa0ex66 = (_0xfa0ex4c.pageX || _0xfa0ex4c.originalEvent.touches[0].pageX) - _0xfa0ex21
          , _0xfa0ex67 = (_0xfa0ex4c.pageY || _0xfa0ex4c.originalEvent.touches[0].pageY) - _0xfa0ex22
          , _0xfa0ex68 = Math.sqrt(Math.pow(_0xfa0ex66 - _0xfa0ex9, 2) + Math.pow(_0xfa0ex67 - _0xfa0exa, 2));
        _0xfa0ex30(_0xfa0ex68)
    }, _0xfa0ex36 = function(_0xfa0ex4c) {
        $(document).off("mousemove touchmove", _0xfa0ex35).off("mouseup mouseleave touchend touchcancel", _0xfa0ex36)
    }, _0xfa0ex37 = function(_0xfa0ex4c) {
        _0xfa0ex47();
        var _0xfa0ex65 = _0xfa0ex4c.currentTarget.parent;
        _0xfa0ex2b(_0xfa0ex65.name);
        if (_0xfa0ex4c.currentTarget.name === "bg" || _0xfa0ex4c.currentTarget.name === "sheet") {
            return
        }
        ;_0xfa0ex2e(_0xfa0ex65);
        _0xfa0ex9 = _0xfa0ex4c.stageX;
        _0xfa0exa = _0xfa0ex4c.stageY;
        _0xfa0exb = _0xfa0ex65.x;
        _0xfa0exc = _0xfa0ex65.y;
        $(document).on("mousemove touchmove", _0xfa0ex38).on("mouseup mouseleave touchend touchcancel", _0xfa0ex39)
    }, _0xfa0ex38 = function(_0xfa0ex4c) {
        var _0xfa0ex66 = (_0xfa0ex4c.pageX || _0xfa0ex4c.originalEvent.touches[0].pageX) - _0xfa0ex21
          , _0xfa0ex67 = (_0xfa0ex4c.pageY || _0xfa0ex4c.originalEvent.touches[0].pageY) - _0xfa0ex22
          , _0xfa0ex62 = _0xfa0ex66 - _0xfa0ex9
          , _0xfa0ex63 = _0xfa0ex67 - _0xfa0exa;
        _0xfa0exd.x = (_0xfa0exb + _0xfa0ex62) / _0xfa0ex24;
        _0xfa0exd.y = (_0xfa0exc + _0xfa0ex63) / _0xfa0ex24;
        if (_0xfa0ex26) {
            _0xfa0exd.x += 10 / _0xfa0ex24;
            _0xfa0exd.y += 10 / _0xfa0ex24
        }
    }, _0xfa0ex39 = function(_0xfa0ex4c) {
        _0xfa0ex2f(_0xfa0exd);
        $(document).off("mousemove touchmove", _0xfa0ex38).off("mouseup mouseleave touchend touchcancel", _0xfa0ex39)
    }, _0xfa0ex3a = function(_0xfa0ex4c) {
        var _0xfa0ex69 = new FileReader();
        var _0xfa0ex6a = document.getElementById("fileUpload").files[0];
        _0xfa0ex69.readAsDataURL(_0xfa0ex6a);
        _0xfa0ex69.onload = _0xfa0ex27
    }, _0xfa0ex3b = function(_0xfa0ex64) {
        if (_0xfa0ex64 == 1) {
            _0xfa0ex7.getChildByName("s1").visible = true;
            _0xfa0ex7.getChildByName("s2").visible = false
        } else {
            _0xfa0ex7.getChildByName("s1").visible = false;
            _0xfa0ex7.getChildByName("s2").visible = true
        }
    }, _0xfa0ex3c = function() {
        var _0xfa0ex53;
        _0xfa0ex7 = new createjs.Container();
        _0xfa0ex7.set({
            x: 180,
            y: 129
        });
        _0xfa0ex7.name = "sheet";
        _0xfa0ex53 = new createjs.Shape();
        _0xfa0ex53.graphics.beginBitmapFill(_0xfa0exe.s1).drawRect(0, 0, _0xfa0exe.s1.width, _0xfa0exe.s1.height);
        _0xfa0ex53.visible = false;
        _0xfa0ex53.name = "s1";
        _0xfa0ex7.addChild(_0xfa0ex53);
        _0xfa0ex53 = new createjs.Shape();
        _0xfa0ex53.graphics.beginBitmapFill(_0xfa0exe.s2).drawRect(0, 0, _0xfa0exe.s2.width, _0xfa0exe.s2.height);
        _0xfa0ex53.visible = false;
        _0xfa0ex53.name = "s2";
        _0xfa0ex7.addChild(_0xfa0ex53);
        _0xfa0ex5.addChild(_0xfa0ex7)
    }, _0xfa0ex3d = function() {
        _0xfa0ex5 = new createjs.Stage("myCanvas");
        _0xfa0ex5.enableMouseOver();
        createjs.Touch.enable(_0xfa0ex5);
        var _0xfa0ex53 = new createjs.Shape();
        _0xfa0ex53.graphics.beginBitmapFill(_0xfa0exe.bg).drawRect(0, 0, _0xfa0exe.bg.width, _0xfa0exe.bg.height);
        _0xfa0ex53.name = "bg";
        _0xfa0ex5.addChild(_0xfa0ex53);
        _0xfa0ex6 = new createjs.Container();
        _0xfa0ex6.set({
            x: 0,
            y: 0
        });
        _0xfa0ex5.addChild(_0xfa0ex6);
        _0xfa0ex3c();
        _0xfa0ex3b($("input[name*=sheet]:checked").val());
        _0xfa0ex53.on("mousedown", _0xfa0ex37, null, false);
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", _0xfa0ex3e);
        $(".obj").on("click", function(_0xfa0ex4c) {
            _0xfa0ex29($(this).children("img").attr("src"))
        });
        $("input[name*=sheet]").on("click", function(_0xfa0ex4c) {
            _0xfa0ex3b($("input[name*=sheet]:checked").val())
        })
    }, _0xfa0ex3e = function() {
        _0xfa0ex5.update()
    }, _0xfa0ex3f = function(_0xfa0ex6b) {
        if (_0xfa0ex6b.item.type == "image") {
            _0xfa0exe[_0xfa0ex6b.item.id] = _0xfa0ex6b.result
        }
    }, _0xfa0ex40 = function() {
        _0xfa0ex3d()
    }, _0xfa0ex41 = function() {
        var _0xfa0ex6c = [{
            src: "bed_bg.jpg",
            id: "bg"
        }, {
            src: "share_bg_01.png",
            id: "sbg1"
        }, {
            src: "share_bg_02.png",
            id: "sbg2"
        }, {
            src: "share_sign_01.png",
            id: "ss1"
        }, {
            src: "bed_b_01.png",
            id: "s1"
        }, {
            src: "bed_b_02.png",
            id: "s2"
        }, {
            src: "resize.png",
            id: "resize"
        }, {
            src: "remove.png",
            id: "remove"
        }], _0xfa0ex6d;
        _0xfa0ex6d = new createjs.LoadQueue(false);
        _0xfa0ex6d.addEventListener("fileload", _0xfa0ex3f);
        _0xfa0ex6d.addEventListener("complete", _0xfa0ex40);
        _0xfa0ex6d.loadManifest(_0xfa0ex6c, true, "../../Content/img/bed/")
    }, _0xfa0ex42 = function(_0xfa0ex4c) {
        var _0xfa0ex6e = $("<canvas>")[0]
          , _0xfa0ex6f = _0xfa0ex6e.getContext("2d");
        _0xfa0ex2b("bg");
        _0xfa0ex6e.width = 1200;
        _0xfa0ex6e.height = 630;
        _0xfa0ex6f.font = "bold 40px 微軟正黑體";
        if ($('#bd2').prop('checked')) {
            _0xfa0ex6f.drawImage(_0xfa0exe.sbg2, 0, 0, 1200, 630);
        } else {
            _0xfa0ex6f.drawImage(_0xfa0exe.sbg1, 0, 0, 1200, 630);
        }
        _0xfa0ex43(_0xfa0ex6f, _0xfa0ex23);
        setTimeout(function() {
            _0xfa0ex6f.drawImage(_0xfa0ex3, 25, 25, 580, 580);
            _0xfa0ex6f.drawImage(_0xfa0exe.ss1, 588, 406, 185, 133);
            _0xfa0ex4a(_0xfa0ex6e.toDataURL("image/png", 1))
        }, 100)
    }, _0xfa0ex43 = function(_0xfa0ex6f, _0xfa0ex70) {
        var _0xfa0ex59, _0xfa0ex5a = (_0xfa0ex70.length + 10 - 1) / 10, _0xfa0ex64;
        for (_0xfa0ex59 = 0; _0xfa0ex59 < _0xfa0ex5a; _0xfa0ex59++) {
            _0xfa0ex64 = _0xfa0ex59 * 10;
            _0xfa0ex6f.fillText(_0xfa0ex70.slice(_0xfa0ex64, _0xfa0ex64 + 10), 734, 231 + (_0xfa0ex59 * 50))
        }
    }, _0xfa0ex44 = function(_0xfa0ex64) {
        if (_0xfa0ex64 == 1) {
            _0xfa0ex17.show().css("marginLeft", 0);
            _0xfa0ex18.hide().css("marginLeft", 0);
            _0xfa0ex1d = -_0xfa0ex1b;
            _0xfa0ex1f = _0xfa0ex17
        } else {
            _0xfa0ex17.hide().css("marginLeft", 0);
            _0xfa0ex18.show().css("marginLeft", 0);
            _0xfa0ex1d = -_0xfa0ex1c;
            _0xfa0ex1f = _0xfa0ex18
        }
        ;_0xfa0ex1e = 0;
        _0xfa0ex46()
    }, _0xfa0ex45 = function(_0xfa0ex71) {
        if (_0xfa0ex71 == "left") {
            _0xfa0ex1e++
        } else {
            _0xfa0ex1e--
        }
        ;_0xfa0ex1e = Math.min(Math.max(_0xfa0ex1e, _0xfa0ex1d), 0);
        _0xfa0ex1f.stop().animate({
            marginLeft: _0xfa0ex1e * _0xfa0ex16
        }, 250, function() {
            _0xfa0ex46()
        })
    }, _0xfa0ex46 = function() {
        if (_0xfa0ex1e == 0) {
            _0xfa0ex13.css("opacity", 0)
        } else {
            _0xfa0ex13.css("opacity", 1)
        }
        ;if (_0xfa0ex1e == _0xfa0ex1d) {
            _0xfa0ex14.css("opacity", 0)
        } else {
            _0xfa0ex14.css("opacity", 1)
        }
    }, _0xfa0ex47 = function() {
        _0xfa0ex20 = $("#myCanvas").offset();
        _0xfa0ex21 = parseInt(_0xfa0ex20.left, 10);
        _0xfa0ex22 = parseInt(_0xfa0ex20.top, 10)
    }, _0xfa0ex48 = function() {
        var _0xfa0ex72 = _0xfa0ex17.children("a")
          , _0xfa0ex73 = _0xfa0ex18.children("a")
          , _0xfa0ex74 = Math.round(_0xfa0ex72.width() + parseInt(_0xfa0ex72.css("margin-right"), 10))
          , _0xfa0ex75 = $(window).width() / 640;
        _0xfa0ex16 = _0xfa0ex15.width();
        if (_0xfa0ex26) {
            _0xfa0ex16 = 440 * _0xfa0ex75;
            _0xfa0ex74 = (100 + 10) * _0xfa0ex75;
            _0xfa0ex24 = 540 * _0xfa0ex75 / 600;
            _0xfa0ex25 = 600 / (540 * _0xfa0ex75)
        }
        ;_0xfa0ex19 = _0xfa0ex74 * _0xfa0ex72.length;
        _0xfa0ex1a = _0xfa0ex74 * _0xfa0ex73.length;
        _0xfa0ex1b = Math.floor((_0xfa0ex72.length + 4 - 1) / 4) - 1;
        _0xfa0ex1c = Math.floor((_0xfa0ex73.length + 4 - 1) / 4) - 1;
        _0xfa0ex47()
    }, _0xfa0ex49 = function() {
        var arr = [
            '他們說，人一生專心做好一件事就是圓滿，我的那件事剛好是睡覺。',
            '不好意思今天大塞車，所以我還在家裡睡覺。',
            '起床看到貓咪還在睡，所以我決定今天當隻貓。喵。',
            '世上沒有一件事可以不努力。事實上，我也很努力的在賴床。',
            '真正重要的東西，只用眼睛是看不到的。例如睡眠。',
            '我剛剛夢到我已經醒來了。所以我就安心地繼續睡了。',
            '當你真心渴望某件事時，全宇宙都會聯合起來幫助你。像是賴床。',
            '老闆說我今天可以在家睡覺。然後老闆本人是我。',
            '你看過賴床的人嗎？現在就讓你看個夠。'
        ];

        $(".get-btn").addClass('is-loading');
        $(".txt-sub").text(arr[Math.floor(Math.random() * 9)]);
        // $.ajax({
        //     type: "GET",
        //     url: $(".get-btn").data("url"),
        //     dataType: "json",
        //     success: function(data) {
        //         _0xfa0ex23 = data.reason;
        //     },
        //     error: function (jqXHR, textStatus, errorThrown) {
        //         console.log(jqXHR.responseText + ',' + jqXHR.status + ',' + jqXHR.readyState + ',' + jqXHR.statusText);
        //     },
        //     complete: function(data) {
        //         $(".get-btn").delay(1200).queue(function(){
        //             $(".txt-sub").text(_0xfa0ex23)
        //             $(this).removeClass('is-loading').dequeue();
        //         });
        //     }
        // })
    }, _0xfa0ex4a = function(_0xfa0ex77) {
        $.ajax({
            type: "POST",
            url: $(".ok-btn").data("url"),
            data: {
                "image": _0xfa0ex77.split('data:image/png;base64,')[1],
                "title": _0xfa0ex23
            },
            dataType: "json",
            success: function(data) {
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.responseText + ',' + jqXHR.status + ',' + jqXHR.readyState + ',' + jqXHR.statusText);
            },
            complete: function(data) {
                localStorage.setItem('img', _0xfa0ex77);
                window.location.href = 'result.html';
            }
        })
    }, _0xfa0ex4b = function() {
        _0xfa0ex26 = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;
        _0xfa0ex48();
        $(window).resize(_0xfa0ex48);
        _0xfa0ex41();
        _0xfa0ex44($("input[name*=type]:checked").val());
        $("input[name*=type]").on("click", function(_0xfa0ex4c) {
            _0xfa0ex44($("input[name*=type]:checked").val())
        });
        $(".arrow-btn").on("click", function(_0xfa0ex4c) {
            _0xfa0ex45($(this).data("arrow"))
        });
        $(".get-btn").on("click", _0xfa0ex49);
        _0xfa0ex49();
        $(".ok-btn").on("click", _0xfa0ex42)
    };
    _0xfa0ex4b();
    return {
        init: _0xfa0ex4b
    }
}())