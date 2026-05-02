(function (window , document , jQuery , undefined) {
    'use strict';

    var projects = new factory();

    function factory() {
        this.$w      = jQuery(window);
        this.$d      = jQuery(document);
        this.$hb     = jQuery('html , body');
        this.$b      = jQuery('body');
        this._ORIGIN = /^file\:\/\/\//.exec(window.location.href) ? '' : ( /^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i.exec(window.location.href)[0] );
        this._HREF   = window.location.href;
        this._EVENTS = 'click touchstart';
        this._ISMAC  = navigator.platform.match(/Mac/i) ? true : false;
        this._browsers = {
            'msie'    : navigator.userAgent.match(/(msie|trident(?=\/))\/?\s*(\d+)/i) ? true : false,
            'edge'    : navigator.userAgent.match(/(Edge(?=\/))\/?\s*(\d+)/i) ? true : false,
            'chrome'  : navigator.userAgent.match(/(chrome(?=\/))\/?\s*(\d+)/i) || navigator.userAgent.match(/CriOS/i) ? true : false,
            'safari'  : navigator.userAgent.match(/(safari(?=\/))\/?\s*(\d+)/i) ? true : false,
            'firefox' : navigator.userAgent.match(/(firefox(?=\/))\/?\s*(\d+)/i) ? true : false,
            'opera'   : navigator.userAgent.match(/(opera(?=\/))\/?\s*(\d+)/i) ? true : false,
            'version' : null
        };
    };

    /* execFun */
    factory.prototype.execFun = function(functionName, args) {
        var _window = '';
        var _regex = {
            _parentheses : /.*\(.*\)/,
            _funName     : /(.*?)\(/,
            _plugin      : /^jQuery.*\.([^.]*?)(?:\(\))$/,
            _args        : /(?!.*\().*(?=\))/,
            _className   : /^(jQuery|\$)\s*[^\(]*\(\s*([^\)]*)\)/
        };

        var _args       = args ? ( Array.isArray(args) ? args : [ args ] ) : ( _regex._args.exec( functionName ) ? [ /^\"|\'/.exec(_regex._args.exec( functionName )[0]) ? /(?!^(\"|\')).*(?=(\"|\'))/.exec(_regex._args.exec( functionName )[0])[0] : ( ( _regex._args.exec( functionName )[0] === 'true' || _regex._args.exec( functionName )[0] === 'false' ) ? Boolean(_regex._args.exec( functionName )[0]) : ( _regex._args.exec( functionName )[0] ? ( _regex._args.exec( functionName )[0] | 0) : undefined ) ) ] : Array.prototype.slice.call(arguments, 2) );
        var _namespaces = _regex._plugin.exec( functionName ) ? functionName : ( _regex._parentheses.exec( functionName ) ? _regex._funName.exec( functionName )[1].split('.') : functionName.split('.') );
        var _func       = Array.isArray(_namespaces) ? _namespaces.pop() : null;

        if ( Array.isArray(_namespaces) ) {
            for ( var _key in _namespaces ) {
                if (_namespaces.hasOwnProperty(_key)) {
                    if ( _key == 0 ) {
                        _window = window[_namespaces[_key]];

                    } else {
                        _window = _window[_namespaces[_key]];
                    }
                }
            }

            if ( typeof(_window[_func]) === 'function' ) {
                return _window[_func].apply(window, _args);
            }
        } else {
            new Function(_namespaces)();
        }
    };

    /* Animationend */
    factory.prototype.animationend = function() {
        if ( /Android|webOS|iPad|BlackBerry/i.test(navigator.userAgent) ) {
            return 'webkitAnimationEnd webkitTransitionEnd';
        } else {
            return 'animationend transitionend';
        }
    };

    /* input event */
    factory.prototype.eventInput = function() {
        if ( projects.browsers() === 'MSIE 8' ) {
            return 'propertychange input';
        } else {
            return 'input';
        }
    };

    /* IE8 & iE9 placeholder */
    factory.prototype.placeholder = function(){
        if ( jQuery.fn.placeholder ) {
            var $input = document.createElement('input');
            var _placeholder = ('placeholder' in $input);

            if ( ! _placeholder && jQuery('[placeholder]').length !== 0 ) {
                jQuery('[placeholder].jQ-placeholder').placeholder();
            }
        }
    };

    /* get device ( PC or Tablet or Mobile )  */
    factory.prototype.device = function() {
        if ( projects.$w.width() < 768 && /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return 'M';
        } else {
            if ( /Android|webOS|iPad|BlackBerry/i.test(navigator.userAgent) ) {
                return 'T';
            } else if ( ( projects.$w.width() > 730 && projects.$w.width() < 815 ) && /iPhone/i.test(navigator.userAgent) ) {
                return 'M';
            } else {
                return 'P';
            }
        }
    };

    /* get browsers */
    factory.prototype.browsersVersion = function(){
        var _useragent = navigator.userAgent.match(/(opera|chrome|CriOS|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        var _tem;

        if( /trident/i.test( _useragent[1] ) ){
            _tem = /\brv[ :]+(\d+)/g.exec( navigator.userAgent ) || [];
            return projects._browsers.version = (Number(_tem[1]) || '');
        }
        
        if( _useragent[1] === 'Chrome' || _useragent[1] === 'CriOS' ){
            _tem = navigator.userAgent.match( /\b(OPR|Edge)\/(\d+)/ );
            if ( _tem != null ) {
                return projects._browsers.version = _tem[2];

                if ( _tem.slice(1).join(' ').match( /\b(OPR)\/(\d+)/ ) ) return projects._browsers.version = _tem.slice(1).join(' ').replace('OPR', 'Opera');
            } 
        }

        _useragent = _useragent[2] ? [ _useragent[1] , _useragent[2] ]: [ navigator.appName , navigator.appVersion , '-?' ];

        if ( ( _tem = navigator.userAgent.match( /version\/(\d+)/i ) ) != null ) _useragent.splice(1 , 1 , _tem[1]);
            return projects._browsers.version = Number(_useragent[1]);
    }();

    /* ajax init */
    // factory.prototype.ajax = function(url , success , complete , erroe , element) {
    //     var _type          = /[?&]type=([^&#]*)/.exec(url) ? ( /[?&]type=([^&#]*)/.exec(url)[1] ) : 'POST',
    //         _url           = /^((?!(\?|\&)callback=).)*/.exec(url)[0],
    //         _dataType      = /[?&]dataType=([^&#]*)/.exec(url) ? ( /[?&]dataType=([^&#]*)/.exec(url)[1] ) : 'script',
    //         _data          = /[?&]data=([^&#]*)/.exec(url) ? ( /[?&]data=([^&#]*)/.exec(url)[1] ) : '',
    //         _jsonpCallback = /[?&]callback=([^&#]*)/.exec(url) ? ( ( /[?&]callback=([^&#]*)/.exec(url)[1] ) !== '?' ? ( /[?&]callback=([^&#]*)/.exec(url)[1] ) : 'Sugarfun_' + new Date().getTime() ) : null;
    //     var _function      = null;

    //     if ( _data.indexOf('[object Object]') !== -1 ) {
    //         alert('data format error \n try JSON.stringify(data)');
    //     } else {
    //         if ( _url ) {
    //             if ( _type.toUpperCase() === 'POST' ) {
    //                 _function = jQuery.post;
    //             } else if ( _type.toUpperCase() === 'GET' ) {
    //                 _function = jQuery.get;
    //             } else if ( _type.toUpperCase() === 'getScript' ) {
    //                 _function = jQuery.getScript;
    //             }
    // 
    //             _function(_url , JSON.parse(_data) , function(data){
    //                 if ( success && typeof(success) === 'function' ) {
    //                     success(data , element);
    //                 }
    //             }).always(function(data){
    //                 if ( complete && typeof(complete) === 'function' ) {
    //                     complete(data , element);
    //                 }
    //             }).fail(function(jqXHR, textStatus, errorThrown){
    //                 if ( erroe && typeof(erroe) === 'function' ) {
    //                     erroe(jqXHR, textStatus, errorThrown);
    //                 }
    //             })
    //         }
    //     }
    // }

    factory.prototype.documentOff = function(cName , func) {
        var _documentOff = true;

        projects.$d.bind(projects._EVENTS , function(e){
            e.stopPropagation();

            if ( _documentOff && ! jQuery( e.target ).is(cName) ) {
                _documentOff = false;

                if ( typeof(func) === 'function' ) {
                    func();
                } else {
                    projects.execFun(func);
                }
            }
        });
    };

    /* owlCarousel */
    factory.prototype.owlCarousel = function(element, callback) {
        if ( jQuery.fn.owlCarousel ) {
            if ( jQuery(element).length !== 0 ) {
                jQuery(element).each(function(i , elem){
                    var $owl           = jQuery(elem);
                    var _items         = $owl.find('> *').length;
                    var _arrowClass    = ( $owl.data('ctrl-class') ? $owl.data('ctrl-class') : 'm-owl' ),
                        _arrowCtrl     = '<div class="'+ _arrowClass +'-arrow-ctrl jQ-owlArrowCtrl"><button type="button" class="'+ _arrowClass +'-arrow is-prev jQ-owlArrow">'+ ( $owl.data('prev') ? $owl.data('prev') : '' ) +'</button><button type="button" class="'+ _arrowClass +'-arrow is-next jQ-owlArrow">'+ ( $owl.data('next') ? $owl.data('next') : '' ) +'</button></div>';
                    var $arrowPrev     = null,
                        $arrowNext     = null;
                    var setIntervals   = null;
                    var _prev          = null,
                        _this          = null;
                    var _animateFinish = true;
                    var _hasArrow       = $owl.data('arrow')
                                            ? $owl.data('arrow')
                                            : ( $owl.data('arrow-md') && projects.device() === 'P' )
                                                ? $owl.data('arrow-md')
                                                :  ( $owl.data('arrow-sm') && projects.device() === 'T' )
                                                    ? $owl.data('arrow-sm')
                                                    : ( $owl.data('arrow-xs') && projects.device() === 'M' )
                                                        ? $owl.data('arrow-xs')
                                                        : null,
                    arrow = function() {
                        if ( _hasArrow ) {
                            var $el = null;

                            if ( $owl.next('.'+ _arrowClass +'-arrow-ctrl').length === 0 ) {
                                if ( _hasArrow === 'outer' ) {
                                    $owl.after(_arrowCtrl);
                                    $el = $owl.next();
                                } else if ( _hasArrow === 'inner' ) {
                                    $owl.find('.owl-stage-outer').append(_arrowCtrl);
                                    $el = $owl.find('.owl-stage-outer');
                                }
                            }

                            $arrowPrev = $el.find('.' + _arrowClass + '-arrow.is-prev'),
                            $arrowNext = $el.find('.' + _arrowClass + '-arrow.is-next');

                            // if ( $owl.data('loop') !== true ||  ) {
                            projects.owlArrowHide($owl , $arrowPrev , $arrowNext);
                            // }

                            $arrowPrev.on('click' , function(){
                                if ( _animateFinish ) {
                                    _animateFinish = false;
                                    projects.owlPrev($owl);
                                }
                            });

                            $arrowNext.on('click' , function(){
                                if ( _animateFinish ) {
                                    _animateFinish = false;
                                    projects.owlNext($owl);
                                }
                            });
                        } else {
                            if ( $owl.next('.'+ _arrowClass +'-arrow-ctrl').length !== 0 ) {
                                $owl.next('.'+ _arrowClass +'-arrow-ctrl').remove();
                            }
                        }
                    };

                    if ( element.events || $owl.data('events') ) {
                        var _events = element.events || $owl.data('events');

                        if ( typeof(_events) === 'string' ) {
                            projects.execFun(_events, $owl);
                        } else if ( typeof(_events) === 'function' ) {
                            _events($owl);
                        }
                    }

                    $owl.on('initialized.owl.carousel', function(e){
                        // console.log(callback);
                        if ( typeof(callback) === 'function' ) {
                            callback();
                        }
                    });

                    // console.log($owl.data('autoplay'));

                    // console.log($owl.data('items') !== undefined ? $owl.data('items') : ( ( $owl.data('items-xs') | 0 ) > 0 ) ? ( $owl.data('items-xs') | 0 ) : 1);

                    $owl.owlCarousel({
                        animateIn  : $owl.data('animate-in') ? $owl.data('animate-in') : projects.device() === 'P' ? $owl.data('animate-in-md') : projects.device() === 'T' ? $owl.data('animate-in-sm') : projects.device() === 'M' ? $owl.data('animate-in-xs') : false,
                        animateOut : $owl.data('animate-out') ? $owl.data('animate-out') : projects.device() === 'P' ? $owl.data('animate-out-md') : projects.device() === 'T' ? $owl.data('animate-out-sm') : projects.device() === 'M' ? $owl.data('animate-out-xs') : false,
                        mouseDrag  : ( $owl.data('mouse-drag') !== false ) ? true : false,
                        touchDrag  : ( $owl.data('touch-drag') !== false ) ? true : false,
                        pullDrag   : ( $owl.data('pull-drag') !== false ) ? true : false,
                        center     : ( $owl.data('center') !== true ) ? false : true,
                        smartSpeed : $owl.data('speed') ? $owl.data('speed') : 250,
                        nav        : false,
                        autoWidth  : ( $owl.data('auto-width') !== true ) ? false : true,
                        responsive : {
                            0 : {
                                items        : $owl.data('items') !== undefined ? $owl.data('items') : ( ( $owl.data('items-xs') | 0 ) > 0 ) ? ( $owl.data('items-xs') | 0 ) : 1,
                                dots         : _items > 1 ? ( $owl.data('dots') !== undefined ? $owl.data('dots') : ( $owl.data('dots-xs') !== false ) ? true : false ) : false,
                                loop         : _items > 1 ? ( $owl.data('loop') !== undefined ? $owl.data('loop') : ( $owl.data('loop-xs') !== true ) ? false : true ) : false,
                                autoplay     : typeof($owl.data('autoplay')) === 'boolean' ? ( ( $owl.data('autoplay') !== true ) ? ( $owl.data('autoplay-xs') ? $owl.data('autoplay-xs') : false ) : true ) : ( ( $owl.data('autoplay') === undefined ) ? ( $owl.data('autoplay-xs') ? projects.execFun($owl.data('autoplay-xs')) : false ) : projects.execFun($owl.data('autoplay')) ),
                                margin       : $owl.data('margin-xs') ? ( ( $owl.data('margin-xs') / 320 ) * projects.$w.width() ) : 0,
                                stagePadding : $owl.data('padding-xs') ? ( ( $owl.data('padding-xs') / 320 ) * projects.$w.width() ) : 0
                                // nav   : ( ( $owl.data('ctrl') === true || $owl.data('ctrl-xs') === true ) ? ( $owl.data('items-xs') !== undefined ? ( _items > $owl.data('items-xs') ? true : false ) : ( _items > 1 ? true : false ) ) : false ),
                            },
                            768 : {
                                items        : $owl.data('items') !== undefined ? $owl.data('items') : ( ( $owl.data('items-sm') | 0 ) > 0 ) ? ( $owl.data('items-sm') | 0 ) : 1,
                                dots         : _items > 1 ? ( $owl.data('dots') !== undefined ? $owl.data('dots') : ( $owl.data('dots-sm') !== false ) ? true : false ) : false,
                                loop         : _items > 1 ? ( $owl.data('loop') !== undefined ? $owl.data('loop') : ( $owl.data('loop-sm') !== true ) ? false : true ) : false,
                                autoplay     : typeof($owl.data('autoplay')) === 'boolean' ? ( ( $owl.data('autoplay') !== true ) ? ( $owl.data('autoplay-sm') ? $owl.data('autoplay-sm') : false ) : true ) : ( ( $owl.data('autoplay') === undefined ) ? ( $owl.data('autoplay-sm') ? projects.execFun($owl.data('autoplay-sm')) : false ) : projects.execFun($owl.data('autoplay')) ),
                                margin       : $owl.data('margin-sm') ? ( ( $owl.data('margin-sm') / 768 ) * projects.$w.width() ) : 0,
                                stagePadding : $owl.data('padding-sm') ? ( ( $owl.data('padding-sm') / 768 ) * projects.$w.width() ) : 0
                                // nav   : ( ( $owl.data('ctrl') === true || $owl.data('ctrl-sm') === true ) ? ( $owl.data('items-sm') !== undefined ? ( _items > $owl.data('items-sm') ? true : false ) : ( _items > 1 ? true : false ) ) : false ),
                            },
                            1000 : {
                                items        : $owl.data('items') !== undefined ? $owl.data('items') : ( $owl.data('items-md') !== undefined ? ( ( $owl.data('items-md') | 0 ) > 0 ) ? ( $owl.data('items-md') | 0 ) : 1 : 1 ),
                                dots         : _items > 1 ? ( $owl.data('dots') !== undefined ? $owl.data('dots') : ( $owl.data('dots-md') !== false ) ? true : false ) : false,
                                loop         : _items > 1 ? ( $owl.data('loop') !== undefined ? $owl.data('loop') : ( $owl.data('loop-md') !== true ) ? false : true ) : false,
                                autoplay     : typeof($owl.data('autoplay')) === 'boolean' ? ( ( $owl.data('autoplay') !== true ) ? ( $owl.data('autoplay-md') ? $owl.data('autoplay-md') : false ) : true ) : ( ( $owl.data('autoplay') === undefined ) ? ( $owl.data('autoplay-md') ? projects.execFun($owl.data('autoplay-md')) : false ) : projects.execFun($owl.data('autoplay')) ),
                                margin       : $owl.data('margin-md') ? $owl.data('margin-md') : 0,
                                stagePadding : $owl.data('padding-md') ? $owl.data('padding-md') : 0
                                // nav   : ( ( $owl.data('ctrl') === true || $owl.data('ctrl-md') === true ) ? ( $owl.data('items-md') !== undefined ? ( _items > $owl.data('items-md') ? true : false ) : ( _items > 1 ? true : false ) ) : false ),
                            }
                        },
                        lazyLoad           : ( $owl.data('img-load') !== true ) ? false : true,
                        autoplayTimeout    : $owl.data('timeout') ? $owl.data('timeout') : 5000,
                        navContainerClass  : $owl.data('ctrl-class') ? $owl.data('ctrl-class') + '-ctrl' : 'm-owl-ctrl',
                        dotsClass          : $owl.data('ctrl-class') ? $owl.data('ctrl-class') + '-dots' : 'm-owl-dots ' + ( $owl.data('dots-position') !== 'relative' ? 'is-absolute' : 'is-relative') + '',
                        dotClass           : $owl.data('ctrl-class') ? $owl.data('ctrl-class') + '-dot' : 'm-owl-dot',
                        centerClass        : $owl.data('ctrl-class') ? $owl.data('ctrl-class') + '-center' : 'm-owl-center',
                        startPosition      : ( ( $owl.data('start-position') | 0 ) > 0 ) ? ( $owl.data('start-position') | 0 ) : 0,
                        autoplayHoverPause : projects.device() === 'P' ? ( ( $owl.data('hover-pause') !== true ) ? false : true ) : false
                    });

                    arrow();

                    $owl.on('resized.owl.carousel' , function(e){
                        arrow();
                    }).on('translated.owl.carousel' , function(e){
                        var $self = jQuery(this);
                        _animateFinish = true;

                        if ( $self.data('loop') ) {
                            _prev = (_this ? _this : ( e.item.index - 1 ));
                            _this = e.item.index;
                        } else {
                            _prev = (_this ? _this : ( e.item.index - 1 ));
                            _this = e.item.index;
                        }

                        if ( $self.find('.owl-item > *').eq(_prev).is('[data-media]') ) {
                            projects.owlMediaPlay($owl , _prev , 'prev');
                        }

                        if ( $self.find('.owl-item > *').eq(_this).is('[data-media]') ) {
                            projects.owlMediaPlay($owl , _this);

                            if ( $self.data('autoplay') ) {
                                var _url      = $self.find('.owl-item > *').eq(_this).attr('data-media'),
                                    _autoplay = ( /autoplay\=/.test(_url) ? ( ( ( /autoplay\=([^?&#]*)/.exec(_url)[1] ) | 0 ) === 1 ? true : false ) : false );

                                if ( _autoplay ) {
                                    projects.owlStop($self);
                                }
                            }
                        }
                    });
                });

                projects.owlMediaInit(element);
            }
        }
    };

    factory.prototype.owlMediaInit = function(element) {
        var setTime = null;

        for (var i = 0, $elem = jQuery(element); i < $elem.length; i++) {
            if ( $elem.eq(i).find('.owl-item > [data-media]').length !== 0 ) {
                projects.mediaInit(function(){
                    jQuery(element).each(function(i , elem){
                        var $owl = jQuery(elem);
                        var _eq  = ( $elem.eq(i).find('.owl-item > [data-media]').length !== 0 ) ? $owl.find('.owl-item.active').index() : null;

                        if ( _eq ) {
                            window.clearTimeout(setTime);

                            $owl.find('.m-youtube:eq('+ _eq +') > iframe').load(function(){
                                setTime = setTimeout(function(){
                                    projects.owlMediaPlay($owl , _eq);
                                } , 250);
                            });
                        }

                    });
                });
            }
        }
    }

    factory.prototype.owlMediaPlay = function(element , eq , type) {
        var _url      = element.find('.owl-item > *').eq(eq).attr('data-media'),
            _idx      = ( /index\=([^?&#]*)/.exec(_url)[1] | 0 ),
            _autoplay = ( /autoplay\=/.test(_url) ? ( ( ( /autoplay\=([^?&#]*)/.exec(_url)[1] ) | 0 ) === 1 ? true : false ) : false );

        if ( type !== 'prev' ) {
            if ( _autoplay ) {
                projects._media._player[_idx].playVideo();
            } else {
                projects._media._player[_idx].pauseVideo();
            }
        } else {
            projects._media._player[_idx].pauseVideo();
        }
    };

    factory.prototype.owlArrowHide = function(element , arrowPrev , arrowNext) {
        var $stageOuter  = element.find('.owl-stage-outer'),
            $stage       = element.find('.owl-stage');
        var _items       = null,
            _elemWidth   = null,
            // _offsetWidth = null,
            // _scrollWidth = null,
            _stageWidth  = null,
            // _scrollbar   = null,
            _position    = 0,
            _space       = (parseFloat(element.css('padding-right'), 10) + parseFloat(element.css('padding-right'), 10) + (element.css('border-right') ? parseFloat(element.css('border-right'), 10) : 0) + (element.css('border-left') ? parseFloat(element.css('border-left'), 10) : 0));
        var _HIDE        = 'b-d-n';
        var arrowHide = function() {
            _items       = $stage.find('.owl-item').length;
            _elemWidth   = typeof(document.body.getBoundingClientRect) !== 'function' ? element.width() : Math.ceil(element[0].getBoundingClientRect().width - _space + 1);
            // _offsetWidth = ( Math.round( element.outerWidth() ) | 0 ) - ( parseInt(element.css('padding-left') , 10) + parseInt(element.css('padding-right') , 10) );
            // _scrollWidth = ( Math.round( element[0].scrollWidth ) | 0 ) - ( parseInt(element.css('padding-left') , 10) + parseInt(element.css('padding-right') , 10) );
            _stageWidth  = typeof(document.body.getBoundingClientRect) !== 'function' ? $stage.find('.owl-item')[0].getBoundingClientRect().width : parseFloat(window.getComputedStyle($stage.find('.owl-item')[0]).width, 10);

            _stageWidth = Math.round(_stageWidth * $stage.find('.owl-item').length);



            // console.log(window.getComputedStyle($stage.find('.owl-item')[0]).width);

            // console.log(typeof(document.body.getBoundingClientRect));
            // _scrollbar   = (( $stage.find('.owl-item').outerWidth() | 0 ) * $stage.find('.owl-item.active').length) - ( $stageOuter.outerWidth() | 0 );
            // _scrollbar = function() {
            //     var _width = 0;

            //     for ( var i = 0 , $elem = $stage.find('.owl-item'); i < $elem.length; i ++ ) {
            //         _width += ($elem.eq(i).outerWidth());
            //     }

            //     return ( _width - ( $stageOuter.outerWidth() | 0 ) );
            // };
            _position = ( ( Math.round( $stage.position().left )  ) ) === 0 ? 0 : ( ( Math.round( $stage.position().left )  ) * (-1) );

            if ( _position !== 0 ) {
                if ( arrowPrev.hasClass(_HIDE) ) {
                    arrowPrev.removeClass(_HIDE);
                }
            } else {
                if ( ! arrowPrev.hasClass(_HIDE) ) {
                    arrowPrev.addClass(_HIDE);
                }
            }

            if ( ( _stageWidth <= _elemWidth ) || ( ( _elemWidth + _position ) >= _stageWidth ) ) {
                if ( ! arrowNext.hasClass(_HIDE) ) {
                    arrowNext.addClass(_HIDE);
                }
            } else {
                if ( arrowNext.hasClass(_HIDE) ) {
                    arrowNext.removeClass(_HIDE);
                }
            }
        };

        arrowHide();

        element.on('resized.owl.carousel , translated.owl.carousel' , function(e){
            arrowHide();
        });

        projects.owlEvents(element , 'resized.owl.carousel , translated.owl.carousel' , function(){
            arrowHide();
        });
    };

    factory.prototype.owlEvents = function(element , onEvents , callback) {
        var $elem = element;
        if ( typeof(element) === 'string' ) {
            $elem = jQuery(element);
        }
        $elem.on(onEvents , function(e){
            if ( typeof(callback) === 'function' ) {
                callback(e);
            } else if ( typeof(callback) === 'string' ) {
                projects.execFun(callback);
            }
        });
    };

    factory.prototype.owlPrev = function(element) {
        var $elem = element;
        if ( typeof(element) === 'string' ) {
            $elem = jQuery(element);
        }
        $elem.trigger('prev.owl.carousel');
    };

    factory.prototype.owlNext = function(element) {
        var $elem = element;
        if ( typeof(element) === 'string' ) {
            $elem = jQuery(element);
        }
        $elem.trigger('next.owl.carousel');
    };

    factory.prototype.owlStop = function(element) {
        var $elem = element;
        if ( typeof(element) === 'string' ) {
            $elem = jQuery(element);
        }
        $elem.trigger('stop.owl.autoplay');
    };

    factory.prototype.owlPlay = function(element, time) {
        var $elem = element;
        if ( typeof(element) === 'string' ) {
            $elem = jQuery(element);
        }
        if ( time ) {
            $elem.trigger('play.owl.autoplay', [time]);
        } else {
            $elem.trigger('play.owl.autoplay');
        }
    };

    factory.prototype.owlGoto = function(element , position , speed) {
        var $elem = element;
        if ( typeof(element) === 'string' ) {
            $elem = jQuery(element);
        }
        $elem.trigger('to.owl.carousel', [position , ( speed ? speed : 500 ) , true]);
    };

    factory.prototype.owlDestroy = function(element) {
        jQuery(element).trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        jQuery(element).find('.owl-stage-outer').children().unwrap();
    };

    /* validate */
    factory.prototype.validate = function(object) {
        if ( jQuery.fn.validate ) {
            var _settings = null;
            var highlight   = null,
                unhighlight = null,
                eventFn     = function(event, element) {
                    if ( jQuery(element).data('event') ) {
                        for ( var i = 0, _event = jQuery(element).data('event').replace(/\s/g, '').split(','); i < _event.length; i ++ ) {
                            if ( _event[i] === event ) {
                                jQuery(element).valid();
                            }
                        }
                    } else {
                        if ( object && typeof(object.event) === 'string' && object.event === event ) {
                            jQuery(element).valid();
                        } else if ( object && typeof(object.event) === 'object' ) {
                            for ( var i = 0 ; i < object.event.length; i ++ ) {
                                if ( object.event[i] === event ) {
                                    jQuery(element).valid();
                                }
                            }
                        }
                    }
                };

            projects.addMethod();

            if ( object && typeof(object.selfMethod) === 'function' ) {
                object.selfMethod.call();
            }

            for ( var i = 0 , $forms = jQuery('form') ; i < $forms.length ; i ++ ) {
                $forms.eq(i).validate({
                    errorClass : ( object && object.errorClass ) ? object.errorClass : 'is-error',
                    validClass : ( object && object.validClass ) ? object.validClass : 'is-success',
                    onkeyup    : function(element) {
                        var _event = 'keyup';

                        eventFn(_event, element);
                    },
                    onfocusin : function(element) {
                        if ( object && typeof(object.onfocusin) === 'function' ) {
                            object.onfocusin(element);
                        }
                    },
                    onfocusout : function(element) {
                        var _event = 'focusout';

                        eventFn(_event, element);

                        if ( object && typeof(object.onfocusout) === 'function' ) {
                            object.onfocusout(element);
                        }
                    }
                });

                _settings = $forms.eq(i).data('validator').settings;

                highlight   = _settings.highlight;
                unhighlight = _settings.unhighlight;

                if ( $forms.eq(i).data('ignore') !== undefined ) {
                    _settings.ignore = $forms.eq(i).data('ignore');
                }

                if ( object && typeof(object.highlight) === 'function' ) {
                    _settings.highlight = function(element, errorClass, validClass) {
                        highlight(element, errorClass, validClass);
                        object.highlight(element, errorClass, validClass);
                    }
                }

                if ( object && typeof(object.unhighlight) === 'function' ) {
                    _settings.unhighlight = function(element, errorClass, validClass) {
                        unhighlight(element, errorClass, validClass);
                        object.unhighlight(element, errorClass, validClass);
                    }
                }

                if ( object && typeof(object.errorPlacement) === 'function' ) {
                    _settings.errorPlacement = function(error, element) {
                        object.errorPlacement(error, element);
                    };
                }

                if ( object && typeof(object.showErrors) === 'function' ) {
                    _settings.showErrors = function(errorMap, errorList) {
                        object.showErrors(errorMap, errorList);
                    };
                }

                _settings.submitHandler = function(form) {
                    if ( jQuery(form).data('submit') ) {
                        projects.execFun(jQuery(form).data('submit'), form);
                        return false;
                    } else {
                        form.submit();
                        return false;
                    }
                }
            }
        }
    };

    factory.prototype.addMethod = function() {
        /* chinese checked */
        jQuery.validator.addMethod('chinese' , function (value, elem, params) {
            var _chinese = /^[\u4E00-\u9FA5]+$/;
            return this.optional(elem) || ( _chinese.test(value) );
        });

        /* phone checked */
        jQuery.validator.addMethod('phone' , function (value, elem, params) {
            var _phone = /^09[0-9]{8}$/;
            return this.optional(elem) || ( _phone.test(value) );
        });

        /* 身分證 checked */
        jQuery.validator.addMethod('idcard' , function (value, elem, params){
            var _county = new Array(1, 10, 19, 28, 37, 46, 55, 64, 39, 73, 82, 2, 11, 20, 48, 29, 38, 47, 56, 65, 74, 83, 21, 3, 12, 30);
            var _value  = null,
                _idcard = _value = value.toUpperCase();

            if ( ! jQuery(elem).hasClass('required') ) return true;
            
            if ( value.length != 10 ) return false;

            if ( ! _idcard.match(/^[A-Z]\d{9}$/) ) {
                return false;
            } else {
                var _sum = 0;

                //將字串分割為陣列(IE必需這麼做才不會出錯)
                _idcard = _idcard.split('');

                //計算總分
                _sum = _county[( _idcard[0].charCodeAt(0) - 65 )];

                for ( var i = 1; i <= 8; i ++ ) {
                    _sum += ( ( _idcard[i] | 0 ) * (9 - i) );
                }

                _sum += ( _idcard[9] | 0 );

                if ( _sum % 10 == 0 ) {
                    return true;
                } else {
                    return false;
                }
            }
        });

        /* 居留證 checked */
        jQuery.validator.addMethod('resident' , function (value, elem, params){
            var _county = new Array(1, 10, 19, 28, 37, 46, 55, 64, 39, 73, 82, 2, 11, 20, 48, 29, 38, 47, 56, 65, 74, 83, 21, 3, 12, 30);
            var _value  = null,
                _idcard = _value = value.toUpperCase();

            if ( ! jQuery(elem).hasClass('required') ) return true;
            
            if ( value.length != 10 ) return false;

            if ( ! _idcard.match(/^[A-Z][A-D]\d{8}$/) ) {
                return false;
            } else {
                var _sum = 0;

                //將字串分割為陣列(IE必需這麼做才不會出錯)
                _idcard = _idcard.split('');

                //計算總分
                _sum = _county[( _idcard[0].charCodeAt(0) - 65 )];
                
                _idcard[1] = ( _idcard[1].charCodeAt(0) - 65 );

                for ( var i = 1; i <= 8; i ++ ) {
                    _sum += ( ( _idcard[i] | 0 ) * (9 - i) );
                }

                _sum += ( _idcard[9] | 0 );

                if ( _sum % 10 == 0 ) {
                    return true;
                } else {
                    return false;
                }
            }
        });

        /* 統一編號 checked */
        jQuery.validator.addMethod('uni' , function (value, elem, params){
            var _idList = '00000000, 11111111';

            if ( ! /^\d{8}$/.test(value) || _idList.indexOf(value) !== -1 ) {
                return false;
            }

            var _operator = [1, 2, 1, 2, 1, 2, 4, 1];
            var _sum      = 0;
            var _calculate = function(product) {
                // 個位數 + 十位數
                var _ones = ( product % 10 ),
                    _tens = ( ( product - _ones ) / 10 );

                return (_ones + _tens);
            };

            for ( var i = 0; i < _operator.length; i ++ ) {
                _sum += _calculate(value[i] * _operator[i]);
            }

            return ( ( ( _sum % 10 === 0 ) || ( value[6] == '7' && ( _sum + 1 ) % 10 === 0 ) ) ? true : false );
        });

        /* 身分證 和 居留證 checked */
        jQuery.validator.addMethod('identity' , function (value, elem, params){
            var _county = new Array(1, 10, 19, 28, 37, 46, 55, 64, 39, 73, 82, 2, 11, 20, 48, 29, 38, 47, 56, 65, 74, 83, 21, 3, 12, 30);
            var _value  = null,
                _idcard = _value = value.toUpperCase();

            if ( ! jQuery(elem).hasClass('required') ) return true;
            
            if ( value.length != 10 ) return false;

            if ( ! _idcard.match(/^[A-Z]\d{9}$/) && ! _idcard.match(/^[A-Z][A-D]\d{8}$/) ) {
                // 如果頁面上有 data-msg-identity 就會統一所有驗證的錯誤訊息，如果沒有請加入 data-msg-idcard 、 data-msg-resident 和 data-msg-error
                if ( ! jQuery(elem).attr('data-msg-identity') ) {
                    jQuery(elem).removeData('msg-identity').data('msg-identity', jQuery(elem).data('msg-error'));
                }

                return false;
            } else {
                var _sum = 0;

                //將字串分割為陣列(IE必需這麼做才不會出錯)
                _idcard = _idcard.split('');

                //計算總分
                _sum = _county[( _idcard[0].charCodeAt(0) - 65 )];

                if ( _value.match(/^[A-Z]\d{9}$/) ) {
                    //身分證字號
                    if ( ! jQuery(elem).attr('data-msg-identity') ) {
                        jQuery(elem).removeData('msg-identity').data('msg-identity', jQuery(elem).data('msg-idcard'));
                    }
                } else {
                    // 外籍居留證
                    _idcard[1] = ( _idcard[1].charCodeAt(0) - 65 );
                    if ( ! jQuery(elem).attr('data-msg-identity') ) {
                        jQuery(elem).removeData('msg-identity').data('msg-identity', jQuery(elem).data('msg-resident'));
                    }
                }

                for ( var i = 1; i <= 8; i ++ ) {
                    _sum += ( ( _idcard[i] | 0 ) * (9 - i) );
                }

                _sum += ( _idcard[9] | 0 );

                if ( _sum % 10 == 0 ) {
                    return true;
                } else {
                    return false;
                }
            }
        });

        /* 身分證 居留證 和 統一編號 checked */
        jQuery.validator.addMethod('idall' , function (value, elem, params){
            var _county   = new Array(1, 10, 19, 28, 37, 46, 55, 64, 39, 73, 82, 2, 11, 20, 48, 29, 38, 47, 56, 65, 74, 83, 21, 3, 12, 30),
                _operator = new Array(1, 2, 1, 2, 1, 2, 4, 1);
            var _value    = null,
                _idcard   = _value = value.toUpperCase();
            var _idList   = '00000000, 11111111';

            if ( ! jQuery(elem).hasClass('required') ) return true;
            
            if ( ! _idcard.match(/^[A-Z]\d{9}$/) && ! _idcard.match(/^[A-Z][A-D]\d{8}$/) && ( ! /^\d{8}$/.test(value) || _idList.indexOf(value) !== -1 ) ) {
                // 如果頁面上有 data-msg-idall 就會統一所有驗證的錯誤訊息，如果沒有請加入 data-msg-idcard 、 data-msg-resident 、 data-msg-uni 和 data-msg-error
                if ( ! jQuery(elem).attr('data-msg-idall') ) {
                    jQuery(elem).removeData('msg-idall').data('msg-idall', jQuery(elem).data('msg-error'));
                }

                return false;
            } else {
                if ( ! _idcard.match(/^[A-Z]\d{9}$/) && ! _idcard.match(/^[A-Z][A-D]\d{8}$/) ) {
                    var _sum       = 0;
                    var _calculate = function(product) {
                        // 個位數 + 十位數
                        var _ones = ( product % 10 ),
                            _tens = ( ( product - _ones ) / 10 );

                        return ( _ones + _tens );
                    };

                    for ( var i = 0; i < _operator.length; i ++ ) {
                        _sum += _calculate(value[i] * _operator[i]);
                    }

                    if ( ! jQuery(elem).attr('data-msg-idall') ) {
                        jQuery(elem).removeData('msg-idall').data('msg-idall', jQuery(elem).data('msg-uni'));
                    }

                    return ( ( ( _sum % 10 === 0 ) || ( value[6] == '7' && ( _sum + 1 ) % 10 === 0 ) ) ? true : false );
                } else {
                    var _sum = 0;

                    // 將字串分割為陣列(IE必需這麼做才不會出錯)
                    _idcard = _idcard.split('');

                    //計算總分
                    _sum = _county[( _idcard[0].charCodeAt(0) - 65 )];

                    if ( _value.match(/^[A-Z]\d{9}$/) ) {
                        //身分證字號
                        if ( ! jQuery(elem).attr('data-msg-idall') ) {
                            jQuery(elem).removeData('msg-idall').data('msg-idall', jQuery(elem).data('msg-idcard'));
                        }
                    } else {
                        // 外籍居留證
                        _idcard[1] = ( _idcard[1].charCodeAt(0) - 65 );

                        if ( ! jQuery(elem).attr('data-msg-idall') ) {
                            jQuery(elem).removeData('msg-idall').data('msg-idall', jQuery(elem).data('msg-resident'));
                        }
                    }

                    for ( var i = 1; i <= 8; i ++ ) {
                        _sum += ( (_idcard[i] | 0) * (9 - i) );
                    }

                    _sum += ( _idcard[9] | 0 );

                    if ( _sum % 10 == 0 ) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        });

        /* either checked */
        jQuery.validator.addMethod('either' , function (value, elem, params){
            var _group   = /either in \w+/.exec(jQuery(elem).attr('class'))[0].replace(/ /g , '.');
            var _elem = jQuery('.' + _group);
            var _length  = 0;
            // var _input   = false;

            for ( var i = 0 ; i < _elem.length ; i ++ ) {
                if ( _elem.eq(i).val() === '' ) {
                    _length ++;
                }
            };

            return (_elem.length !== _length);
        });

        jQuery.validator.addClassRules({
            'chinese' : {
                chinese : true
            },
            'phone' : {
                phone : true
            },
            'idcard' : {
                idcard : true
            },
            'resident' : {
                resident : true
            },
            'uni' : {
                uni : true
            },
            'identity' : {
                identity : true
            },
            'idall' : {
                idall : true
            },
            'either' : {
                either : true
            }
        });
    };

    /* youtube */
    factory.prototype._media  = {
        _length   : 0,
        _id       : null,
        _player   : [],
        _idArray  : [],
        $media    : null,
        _autoplay : null
    };

    factory.prototype.mediaSet = function() {
        projects._media._orientation = ( projects.$w.width() > projects.$w.height() ) ? 'landscape' : 'portrait';
        projects._media._scale       = projects._media._orientation === 'portrait' ? (9 / 16) : (16 / 9);
    };

    factory.prototype.mediaRun = function(elem, idx, callback) {
        projects._media.$media = elem ? elem : ( jQuery('[data-media]').length !== 0 ) ? jQuery('[data-media]') : null;

        if ( projects._media.$media ) {
            projects._media.$media.each(function(i , elem) {
                var $elem       = jQuery(elem);
                var _data       = null;
                var _opacity    = ( /opacity\=/.test($elem.attr('data-media')) ? ( ( /opacity\=([^?&#]*)/.exec($elem.attr('data-media'))[1] ) | 0 ) : 0 ),
                    _absolute   = ( /absolute\=/.test($elem.attr('data-media')) ? ( ( /absolute\=([^?&#]*)/.exec($elem.attr('data-media'))[1] ) | 0 ) : 0 ),
                    _fullscreen = ( /fullscreen\=/.test($elem.attr('data-media')) ? ( ( /fullscreen\=([^?&#]*)/.exec($elem.attr('data-media'))[1] ) | 0 ) : 0 );
                var _closest    = $elem.find($elem.data('elem')) || $elem.next($elem.data('elem')) || $elem.parent().find($elem.data('elem')),
                    _elem       = $elem.data('elem') ? _closest : $elem,
                    _elemHeight = _fullscreen ? ( $elem.data('elem') ? _elem.parent().height() : _elem.height() ) + 'px' : '100%',
                    _elemWidth  = _fullscreen ? ( $elem.data('elem') ? _elem.parent().width() : _elem.width() ) + 'px' : '100%',
                    _top        = _fullscreen ? ( projects._media._orientation === 'landscape' ? ( ( ( _elemHeight  - _elem.width() ) /  2 ) + 'px' ) : '0px' ) : '0px',
                    _left       = _fullscreen ? ( ( ( _elem.width() / _elemHeight ) <= projects._media._scale ) ? ( ( ( ( _elem.width() - ( _elem.width() / ( _elemHeight / _elem.width() ) ) ) / 2 ) | 0 ) + 'px' ) : '0px' ) : '0px',
                    _width      = _fullscreen ? ( ( ( _elem.width() / _elemHeight ) <= projects._media._scale ) ? ( ( ( _elem.width() / ( _elemHeight / _elem.width() ) ) | 0 ) + 'px' ) : '100%' ) : '100%',
                    _height     = _fullscreen ? ( projects._media._orientation === 'landscape' ? ( _elem.width() + 'px' ) : '100%' ) : '100%';

                var _youtube = '<div class="m-youtube' + ( _opacity === 0 ? ' is-opacity' : '' ) +''+ ( _absolute === 1 ? ' is-absolute' : '' ) +'" style="width: '+_elemWidth+'; height: '+_elemHeight+';overflow: hidden;"><span id="m-youtube-'+i+'" class="m-youtube-append" style="top: '+ _top +'; height: '+_height+'; width: '+_width+'; left: '+_left+'; position : absolute;"></span></div>';

                _data = $elem.attr('data-media');
                $elem.attr('data-media' , ( _data + (( /\?/.test(_data) ) ? '&index='+(idx ? idx : i)+'' : '?index='+(idx ? idx : i)+'') ) );

                if ( _elem.find('.m-youtube').length === 0 ) {
                    _elem.append(_youtube);

                    if ( /youtube|youtu\.be/i.exec( $elem.attr('data-media') )) {
                        projects.mediaAppend($elem , callback);
                    }
                }
            });

            projects.mediaResize();
        }
    };

    factory.prototype.mediaInit = function(elem, idx, callback) {
        // var setIntervals = null;

        projects.mediaSet();

        // console.log(projects.u2bPlayer);
        projects.u2bPlayer(function(){
            projects.mediaRun(elem, idx, callback);
        });
    };

    factory.prototype.mediaResize = function() {
        var resize = function() {
            projects.mediaSet();

            for (var i = 0 ; i < projects._media.$media.length ; i ++ ) {
                var $elem       = projects._media.$media.eq(i);
                var _fullscreen = ( /fullscreen\=/.test($elem.attr('data-media')) ? ( ( /fullscreen\=([^?&#]*)/.exec($elem.attr('data-media'))[1] ) | 0 ) : 0 );
                var _closest    = $elem.find($elem.data('elem')) || $elem.next($elem.data('elem')) || $elem.parent().find($elem.data('elem')),
                    _elem       = $elem.data('elem') ? _closest : $elem,
                    _elemHeight = $elem.data('elem') ? _elem.parent().height() : _elem.height(),
                    _elemWidth  = $elem.data('elem') ? _elem.parent().width() : _elem.width(),
                    _top        = projects._media._orientation === 'landscape' ? ( ( _elemHeight - _elem.width() ) /  2 ) + 'px' : '0px',
                    _left       = ( ( _elem.width() / _elemHeight ) <= projects._media._scale ) ? ( ( ( ( _elem.width() - ( _elem.width() / ( _elemHeight / _elem.width() ) ) ) / 2 ) | 0 ) + 'px' ) : '0px',
                    _width      = ( ( _elem.width() / _elemHeight ) <= projects._media._scale ) ? ( ( ( _elem.width() / ( _elemHeight / _elem.width() ) ) | 0 ) + 'px' ) : '100%',
                    _height     = projects._media._orientation === 'landscape' ? ( _elem.width() + 'px' ) : '100%';

                if ( _fullscreen ) {
                    $elem.find('.m-youtube').css({
                        'width'  : _elemWidth,
                        'height' : _elemHeight
                    }).find('.m-youtube-append').css({
                        'top'    : _top,
                        'left'   : _left,
                        'width'  : _width,
                        'height' : _height
                    });
                }
            }
        }

        if( window.attachEvent ) {
            window.attachEvent('onresize', function() {
                resize();
            });
        } else if( window.addEventListener ) {
            window.addEventListener('resize', function() {
                resize();
            }, true);
        }
    };

    factory.prototype.u2bPlayer = function(fun) {
        var _setinterval = null;

        if ( projects._media._loaded ) return false;

        if ( ! window['YT'] ) {
            var YT = {
                loading : 0,
                loaded  : 0
            };
        }
        if ( ! window['YTConfig'] ) {
            var YTConfig = {
                'host': 'http://www.youtube.com'
            };
        }
        if ( ! YT.loading ) {
            YT.loading = 1;
            
            (function() {
                var l    = [];
                YT.ready = function(f) {
                    if ( YT.loaded ) {
                        f();
                    } else {
                        l.push(f);
                    }
                };
                
                window.onYTReady = function() {
                    YT.loaded = 1;
                    for ( var i = 0 ; i < l.length ; i ++ ) {
                        try {
                            l[i]();
                        } catch (e) {}
                    }
                };

                YT.setConfig = function(c) {
                    for ( var k in c ) {
                        if ( c.hasOwnProperty(k) ) {
                            YTConfig[k] = c[k];
                        }
                    }
                };

                if ( ! projects._media._loaded ) {
                    var a = document.createElement('script');
                    a.type  = 'text/javascript';
                    a.id    = 'www-widgetapi-script';
                    a.src   = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vfl_Bhgrs/www-widgetapi.js';
                    a.async = true;
                    var b = document.getElementsByTagName('script')[0];
                    b.parentNode.insertBefore(a, b);

                    projects._media._loaded = true;
                }

                _setinterval = setInterval(function(){
                    if ( typeof(window.YT) !== 'undefined' ) {
                        clearInterval(_setinterval);
                        fun();
                    }
                }, 1);
            })();
        }
    };

    factory.prototype.mediaAppend = function(element , callback) {
        var _url         = element.attr('data-media'),
            _id          = _url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i)[1],
            _idx         = /index\=/.test(_url) ? ( ( /index\=([^?&#]*)/.exec(_url)[1] ) | 0 ) : null,
            _owl         = ( /owl\=/.test(_url) ? ( ( /owl\=([^?&#]*)/.exec(_url)[1] ) | 0 ) : 0 ),
            _autoPlay    = ( /autoplay\=/.test(_url) ? ( ( /autoplay\=([^?&#]*)/.exec(_url)[1] ) | 0 ) : 0 ),
            _ctrls       = /controls\=/.test(_url) ? ( ( /controls\=([^?&#]*)/.exec(_url)[1] ) | 0 ) : 0,
            _showinfo    = /showinfo\=/.test(_url) ? ( ( /showinfo\=([^?&#]*)/.exec(_url)[1] ) | 0 ) : 0,
            _loop        = /loop\=/.test(_url) ? ( ( /loop\=([^?&#]*)/.exec(_url)[1] ) | 0 ) : 0,
            _mute        = /mute\=/.test(_url) ? ( ( /mute\=([^?&#]*)/.exec(_url)[1] ) | 0 ) : 0,
            _bgplay      = /bgplay\=/.test(_url) ? ( ( /bgplay\=([^?&#]*)/.exec(_url)[1] ) | 0 ) : 0,
            _playsinline = /playsinline\=/.test(_url) ? ( ( /playsinline\=([^?&#]*)/.exec(_url)[1] ) | 0 ) : 0;
        var ready        = element.data('ready'),
            stateChange  = element.data('statechange');
        var _setInterval = null;

        projects._media._id = 'm-youtube-' + _idx;

        projects._media._idArray.push({'id' : _id , 'bgplay' : _bgplay});
        
        if ( _autoPlay && projects._media._autoplay === null ) {
            projects._media._autoplay = true;
        } else if ( projects._media._autoplay ) {
            _autoPlay = 0;
        }

        if ( _owl ) {
            _autoPlay = 0;
        }

        projects._media._player.push(
            new YT.Player(projects._media._id , {
                width            : '100%',
                height           : '100%',
                videoId          : _id,
                suggestedQuality : 'highres',
                playerVars : {
                    autoplay       : _autoPlay,
                    controls       : _ctrls,
                    showinfo       : _showinfo,
                    loop           : _loop,
                    fs             : 0,
                    rel            : 0,
                    modestbranding : 1,
                    iv_load_policy : 1,
                    autohide       : 0,
                    start          : 0,
                    playsinline    : _playsinline,
                    enablejsapi    : 1,
                    version        : 3,
                    playlist       : _id,
                    origin         : projects._ORIGIN + '/',
                    wmode          : 'transparent'
                },
                events: {
                    onReady : function(event) {
                        if ( _mute ) {
                            projects._media._player[_idx].mute();
                        }
                        if ( ready ) {
                            if ( typeof(ready) === 'function' ) {
                                ready.call(event);
                            } else if ( typeof(ready) === 'string' ) {
                                projects.execFun(ready);
                            }
                        }
                    },
                    onStateChange : function(event) {
                        var $owl         = jQuery('.m-youtube-append').eq(_idx).parents('.owl-loaded');
                        var _owlAutoPlay = $owl.data('autoplay'),
                            _opacity     = ( /opacity\=/.test(_url) ? ( ( /opacity\=([^?&#]*)/.exec(_url)[1] ) | 0 ) : 0 );

                        /* unstarted */
                        if ( event.data === -1 ) {
                            if ( ! _opacity ) {
                                jQuery('#m-youtube-'+_idx+'').parent().addClass('is-opacity');
                            }
                            
                            if ( _owl && _owlAutoPlay ) {
                                projects.owlStop($owl);
                            }
                        }

                        /* playing */
                        if ( event.data === 1 ) {
                            if ( ! _opacity ) {
                                jQuery('#m-youtube-'+_idx+'').parent().removeClass('is-opacity');
                            }
                            
                            for ( var i = 0 ; i < projects._media._player.length ; i ++ ) {
                                if ( i !== _idx && projects._media._idArray[i].bgplay === 0 ) {
                                    projects._media._player[i].pauseVideo();
                                }
                            }
                        }

                        /* paused */
                        if ( event.data === 2 ) {
                            var _currentTime = null;

                            for (var i = 0 ; i < projects._media._player.length ; i ++ ) {
                                if ( i === _idx ) {
                                    _currentTime = projects._media._player[i].getCurrentTime();

                                    if ( projects._media._idArray[i].bgplay === 0 ) {
                                        projects._media._player[i].seekTo(_currentTime).pauseVideo();
                                    }
                                }
                            }
                        }

                        /* buffering */
                        if ( event.data === 3 ) {
                        } 

                        /* video cued */
                        if ( event.data === 5 ) {
                            if ( _owl && _owlAutoPlay ) {
                                var _setTime = null;

                                window.clearTimeout(_setTime);
                                projects.owlPlay($owl, 1);

                                _setTime = setTimeout(function(){
                                    projects.owlPlay($owl, ($owl.data('timeout') ? $owl.data('timeout') : 5000));
                                }, 2);
                            }
                        }

                        /* ended */
                        if ( event.data === 0 ) {
                            if ( ! _loop ) {
                                projects._media._player[_idx].stopVideo();
                            }
                        }

                        if ( stateChange ) {
                            if ( typeof(stateChange) === 'function' ) {
                                stateChange.call(event);
                            } else if ( typeof(stateChange) === 'string' ) {
                                projects.execFun(stateChange, event);
                            }
                        }
                    }
                }
            })
        );

        projects._media._length += 1;
        

        if ( callback && projects._media._length === projects._media.$media.length ) {
            _setInterval = setInterval(function(){
                if ( typeof(projects._media._player[0].seekTo) !== 'undefined' ) {
                    window.clearInterval(_setInterval);
                    if ( typeof(callback) === 'function' ) {
                        callback.call();
                    } else if ( typeof(callback) === 'string' ) {
                        projects.execFun(callback);
                    }
                }
            }, 10);
        }
    };

    // factory.prototype.mediaRemove = function() {
    //     if ( jQuery(projects._media.$element).length !== 0 ) {
    //         jQuery(projects._media.$element).after('<span id="'+projects._media._id+'" class="'+projects._media._class+'" style="'+ projects._media._fullStyle +'"></span>').remove();
    //     }
    // };

    /* plugin isQuery function */
    factory.prototype.isQuery = function(obj) {
        return obj && obj.hasOwnProperty && obj instanceof $;
    };

    /* plugin accordion event */
    factory.prototype.accordion = jQuery.accordion = function () {
        projects.accordion.init.apply( this , arguments );
    };

    jQuery.extend( projects.accordion , {
        _defaults : {
            frame         : null,
            header        : null,
            content       : null,
            classEvent    : 'toggle',
            className     : null,
            siblingsClose : true,
            documentOff   : false,
            index         : 0
        },
        _group : {},
        _activeIndex : null,
        _className : 'sf-accordion',
        init : function(group , opts) {
            if ( ! group ) {
                return;
            }

            if ( ! $.isArray(group) ) {
                group = projects.isQuery(group) ? $(group).get() : [group];
            }

            $.each( group , function( i , element ) {
                var obj = {};

                obj = element;
                group[ i ] = obj;
            });

            projects.accordion.opts   = $.extend(true , {} , projects.accordion._defaults , opts);
            projects.accordion._group = group;

            return projects.accordion.click(projects.accordion.opts.index);
        },
        click : function(index) {
            var _coming = {},
                _regex,
                _obj;

            _obj = projects.accordion._group[ index ] || null;

            if ( ! _obj ) {
                return false;
            }

            _coming = $.extend(true , {} , projects.accordion.opts , _obj);

            for ( var i = 0, $frame = jQuery(_coming.frame); i < $frame.length; i ++ ) {
                $frame.eq(i).data('coming', _coming);

                for (var j = 0, _header = _coming.header.replace(/\s/g, '').split(','); j < _header.length; j ++ ) {
                    for ( var k = 0, $header = $frame.eq(i).find(_header[j]); k < $header.length; k ++ ) {

                        // console.log($header.eq(j).css('display'));

                        // if ( $header.eq(j).css('display') !== 'none' ) {
                            // console.log(j);
                            $header.eq(k).data({
                                'match'   : ''+projects.accordion._className+'-'+i+'-'+k+'',
                                'parents' : _coming.frame,
                                'index'   : k
                            });

                            var $comingContent = typeof(_coming.content) === 'string'
                                                    ? $header.eq(k).nextAll(_coming.content).length !== 0
                                                        ? $header.eq(k).nextAll(_coming.content)
                                                        : $header.eq(k).parent().nextAll(_coming.content).length !== 0
                                                            ? $header.eq(k).parent().nextAll(_coming.content)
                                                            : $header.eq(k).parents(_coming.frame).find(_coming.content).length !== 0
                                                                ? $header.eq(k).parents(_coming.frame).find(_coming.content).eq(k)
                                                                : null
                                                    : _coming.content.eq(k);

                            $comingContent.addClass(''+projects.accordion._className+' '+projects.accordion._className+'-'+i+'-'+k+'');
                        // }
                    }
                    
                }

            }

            jQuery(_coming.header).bind('click' , function(e){
                var $self    = jQuery(this),
                    $content = jQuery('.' + $self.data('match'));
                var _TIME    = 150;
                var _times   = ( ( parseFloat($content.css('transition-duration') , 10) * 1000 ) + _TIME ) ||
                            ( ( parseFloat($content.css('animation-duration') , 10) * 1000 ) + _TIME ) ||
                            _TIME;

                if ( $self.data('match') && $self[0].nodeName !== 'A' ) {
                    projects.accordion.switch($self);
                }
            });
        },
        switch : function(element) {
            var $self    = element,
                $parents = $self.parents($self.data('parents')),
                $content = jQuery('.' + $self.data('match'));
            var _coming = $parents.data('coming');
            var _TIME   = 150;
            var _times  = ( ( parseFloat($content.css('transition-duration') , 10) * 1000 ) + _TIME ) ||
                            ( ( parseFloat($content.css('animation-duration') , 10) * 10000 ) + _TIME ) ||
                            _TIME,
                timeout = null;
            var _header = ('.' + $self[0].className.replace(/\s/g, '.'));

            if ( typeof(_coming.beforeRun) === 'function' ) {
                _coming.beforeRun($self , $content);
            }

            if ( _coming.classEvent === 'toggle' ) {
                if ( _coming.siblingsClose ) {
                    var _hasClass = $self.hasClass(_coming.className) ? true : false;

                    $parents.find(''+ _header +', '+_coming.content+'').removeClass(_coming.className);

                    if ( _hasClass ) {
                        $self.addClass(_coming.className);
                        $content.addClass(_coming.className);
                    }
                    $self.toggleClass(_coming.className);
                    $content.toggleClass(_coming.className);
                } else {
                    $self.toggleClass(_coming.className);
                    $content.toggleClass(_coming.className);
                }
            }

            else if ( _coming.classEvent === 'add' && ! $self.hasClass(_coming.className) ) {
                $parents.find(''+_header+', '+_coming.content+'').removeClass(_coming.className);

                $self.addClass(_coming.className);
                $content.addClass(_coming.className);
            }

            else if ( _coming.classEvent === 'remove' && $self.hasClass(_coming.className) ) {
                $self.removeClass(_coming.className);
                $content.removeClass(_coming.className);
            }

            if ( _coming.documentOff ) {
                projects.documentOff(''+_coming.header+' , '+_coming.header+' * , .'+projects.accordion._className+' , .'+projects.accordion._className+' *' , function(){
                    jQuery(''+_coming.header+', .'+projects.accordion._className+'').removeClass(_coming.className);
                });
            }

            if ( typeof(_coming.afterRun) === 'function' ) {
                timeout = setTimeout(function(){
                    _coming.afterRun($self , $content);
                } , _times);
            }
        },
        clear : function(element) {
            var $self    = element,
                $parents = $self.parents($self.data('parents')),
                $content = jQuery('.' + $self.data('match'));
            var _coming = $parents.data('coming');

            $self.removeClass(_coming.className);
            $content.removeClass(_coming.className);
        },
        clearGroup : function(element) {
            var $self    = element,
                $parents = $self.parents($self.data('parents')),
                $content = jQuery('.' + $self.data('match'));
            var _coming = $parents.data('coming');

            $parents.find(''+_coming.header+', '+_coming.content+'').removeClass(_coming.className);
        }
    });

    factory.prototype.mousewheel = function(element , fn) {
        var $element = typeof(element) === 'object' ? element : jQuery(element);
        var _event , _deltaY;

        $element.bind('mousewheel DOMMouseScroll', function (e) {
            if ( ! e ) e = event;
            
            e.deltaY = e.originalEvent.detail || e.originalEvent.wheelDelta;
            e.deltaY = e.type !== 'DOMMouseScroll' ? ( e.deltaY > 0 ? 1 : -1 ) : ( e.deltaY < 0 ? 1 : -1  );
            
            if ( fn ) {
                fn(e);
            }
        });
    };

    /* tab */
    factory.prototype.tab = jQuery.tab = function () {
        projects.tab.init.apply( this , arguments );
    };

    jQuery.extend( projects.tab , {
        _defaults : {
            stopClass     : null,
            slideClass    : null,
            activeClass   : null,
            activedClass  : null,
            hideClass     : null,
            frame         : null,
            header        : null,
            body          : null,
            button        : null,
            bar           : null
        },
        _DELAY : 100,
        _group : {},
        _isAnimateEnd : true,
        init : function(group , opts) {
            if ( ! group || jQuery(group.frame).length === 0 ) {
                return;
            }

            if ( ! $.isArray(group) ) {
                group = projects.isQuery(group) ? $(group).get() : [group];
            }

            $.each( group , function( i , element ) {
                var obj = {};

                obj = element;
                group[ i ] = obj;
            });

            projects.tab.opts   = $.extend(true , {} , projects.tab._defaults , opts);
            projects.tab._group = group;

            return projects.tab.start();
        },
        bar : function(index) {
            var _coming = /\w[^-]*$/.exec(projects.tab._group[0].frame)[0];
            var _parent = jQuery(projects.tab._defaults[_coming].frame).eq(index).find(projects.tab._defaults[_coming].button).parent('.'+ projects.tab._defaults[_coming].activeClass +'');

            var _className = projects.tab._defaults[_coming].bar ? ( '.' + (/class\=\"([^?&#]*)\"/.exec(projects.tab._defaults[_coming].bar)[1].replace(/\s/g, '.')) ) : null;

            if ( projects.tab._defaults[_coming].bar && jQuery(projects.tab._defaults[_coming].header).eq(index).find(_className).length === 0 ) {
                jQuery(projects.tab._defaults[_coming].header).eq(index).append(projects.tab._defaults[_coming].bar);
            }

            if ( jQuery(projects.tab._defaults[_coming].header).eq(index).find(_className).length !== 0 ) {
                var _space  = parseInt(_parent.css('padding-right'), 10),
                    _left   = (_parent.position().left + _space) - ( _parent.parents('.owl-stage').length !== 0 ? _parent.parents('.owl-stage').position().left : 0 ),
                    _width  = (_parent.outerWidth() - ( _space * 2 ));

                jQuery(projects.tab._defaults[_coming].frame).eq(index).find(_className).css({
                    'left'  : _left,
                    'width' : _width
                });
            }

            jQuery(projects.tab._defaults[_coming].frame).eq(index).attr('data-ready', 1);
        },
        start : function() {
            var _coming = /\w[^-]*$/.exec(projects.tab._group[0].frame)[0];
            var _obj;
            var _animateTimes = null;

            _obj = projects.tab._group[0] || null;

            if ( ! _obj ) {
                return false;
            }

            projects.tab._defaults[_coming] = $.extend(true , {} , projects.tab.opts , _obj);

            // console.log(projects.tab._defaults[_coming]);

            _animateTimes = ( (parseFloat(jQuery(projects.tab._defaults[_coming].body).css('transitionDuration') , 10) * 1000) + 100 );

            projects.tab.addData(_coming);
            
            for (var i = 0, $tab = jQuery(projects.tab._defaults[_coming].frame); i < $tab.length; i++) {

                projects.tab.bar(i);
                $tab.eq(i).find(projects.tab._defaults[_coming].button).data('parent-index', i).data('coming', _coming);

                $tab.eq(i).find(projects.tab._defaults[_coming].button).off('click').on('click' , function(e){
                    var $self    = jQuery(this),
                        $frame   = $self.parents(projects.tab._defaults[_coming].frame),
                        $body    = $frame.find(projects.tab._defaults[_coming].body);

                    var _setTime = null;

                    e.preventDefault();

                    // if ( ! projects.tab._isAnimateEnd ) return false;

                    if ( typeof(projects.tab._defaults[_coming].click) === 'function' ) {
                        projects.tab._defaults[_coming].click($self, _animateTimes);
                    } else if ( $self.data('click') ) {
                        projects.execFun($self.data('click'), [$self, _animateTimes]);
                    }

                    // projects.tab._isAnimateEnd = false;

                    projects.tab.animate($self);
                    $body.data('animate', 1);

                    // _setTime = setTimeout(function(){
                    //     projects.tab._isAnimateEnd = true;
                    //     window.clearTimeout(_setTime);
                    // } , _animateTimes);
                });
            }
        },
        ctrlClass : function(element , activeClass , activedClass , indexArray) {
            element.removeClass(''+activeClass+' '+activedClass+'');
            element.eq(indexArray[0]).addClass(''+activedClass+' '+activeClass+'');
            element.eq(indexArray[1]).addClass(activeClass);

        },
        addData : function(coming) {
            for ( var i = 0 , $frame = jQuery(projects.tab._defaults[coming].frame) ; i < $frame.length ; i ++ ) {
                for ( var j = 0 , $button = $frame.eq(i).find(projects.tab._defaults[coming].button) ; j < $button.length ; j ++ ) {
                    $button.eq(j).data('index' , j);
                    if ( $frame.eq(i).find(projects.tab._defaults[coming].button).eq(j).parent().hasClass(projects.tab._defaults[coming].activeClass) ) {
                        $frame.eq(i).data('active-arr' , ''+j+' , '+j+'');
                    }
                }
            }
        },
        animate : function(element , addData) {
            var _coming       = element.data('coming');
            var $frame        = element.parents(projects.tab._defaults[_coming].frame),
                $body         = $frame.find(projects.tab._defaults[_coming].body);
            var _regexActive  = null;
            // var _setTimeout   = null;
            var _activeArr    = null;
            var _times        = ( (parseFloat($body.css('transitionDuration') , 10) * 1000) );
            var _index        = element.parent().index();
            var _regex        = /^\..*(?=\.)|^\..*/;
            var _class        = null;
            var _animateTimes = ( (parseFloat($body.css('transitionDuration') , 10) * 1000) + 100 );

            if ( typeof($frame[0]) !== 'undefined' || ! $body.data('animate') ) {
                if ( addData ) {
                    projects.tab.addData(_coming);
                }

                _regexActive = /\w+$/.exec($frame.data('active-arr'))[0];

                $frame.removeData('active-arr').data('active-arr' , ''+_regexActive+' , '+ ( addData ? _regexActive : element.data('index') ) +'');

                _activeArr = [(jQuery.trim($frame.data('active-arr').split(',')[0]) | 0) , (jQuery.trim($frame.data('active-arr').split(',')[1]) | 0)];


                if ( typeof(projects.tab._defaults[_coming].slideBefore) === 'function' ) {
                    projects.tab._defaults[_coming].slideBefore(element , _animateTimes);
                } else if ( element.parents(projects.tab._defaults[_coming].frame).data('slide-before') ) {
                    projects.execFun($frame.data('slide-before'), [element , _animateTimes]);
                }

                if ( _activeArr[1] !== _activeArr[0] ) {
                    // $body.find('> *').removeClass(projects.tab._defaults[_coming].hideClass);
                    // console.log($frame.find(projects.tab._defaults[_coming].button));
                    $frame.find(projects.tab._defaults[_coming].button).parent().removeClass(projects.tab._defaults[_coming].activeClass);
                    element.parent().addClass(projects.tab._defaults[_coming].activeClass);
                    projects.tab.bar(element.data('parent-index'));
                    projects.tab.ctrlClass($body.find('> *') , projects.tab._defaults[_coming].activeClass , projects.tab._defaults[_coming].activedClass , _activeArr);


                    // window.clearTimeout(_setTimeout);

                    // console.log(11);

                    if ( ( _activeArr[1] > _activeArr[0] ) ) {


                        _activeArr[0] = _activeArr[1];
                        

                        $body.addClass(projects.tab._defaults[_coming].slideClass).finish().delay(_times).queue(function(){
                            projects.tab.ctrlClass($body.find('> *') , projects.tab._defaults[_coming].activeClass , projects.tab._defaults[_coming].activedClass , _activeArr);
                            $body.addClass(projects.tab._defaults[_coming].stopClass).removeClass(projects.tab._defaults[_coming].slideClass).dequeue();
                        }).delay(_times).queue(function(){
                            $body.removeClass(projects.tab._defaults[_coming].stopClass).removeData('animate').dequeue();

                            if ( typeof(projects.tab._defaults[_coming].slideAfter) === 'function' ) {
                                projects.tab._defaults[_coming].slideAfter(element , _animateTimes);
                            } else if ( $frame.data('slide-after') ) {
                                projects.execFun($frame.data('slide-after'), [element , _animateTimes]);
                            }

                            // window.clearTimeout(_setTimeout);
                        });
                    } else if ( _activeArr[1] < _activeArr[0] ) {


                        _activeArr[0] = _activeArr[1];

                        $body.addClass(''+projects.tab._defaults[_coming].stopClass+' '+projects.tab._defaults[_coming].slideClass+'').finish().delay(0).queue(function(){
                            $body.removeClass(''+projects.tab._defaults[_coming].stopClass+' '+projects.tab._defaults[_coming].slideClass+'').dequeue();
                        }).delay(_times).queue(function(){
                            projects.tab.ctrlClass($body.find('> *') , projects.tab._defaults[_coming].activeClass , projects.tab._defaults[_coming].activedClass , _activeArr);
                            $body.removeData('animate').dequeue();

                            if ( typeof(projects.tab._defaults[_coming].slideAfter) === 'function' ) {
                                projects.tab._defaults[_coming].slideAfter(element , _animateTimes);
                            } else if ( element.data('slide-after') ) {
                                projects.execFun($frame.data('slide-after'), [element , _animateTimes]);
                            }
                        });
                    }
                }
            }

        }
    });

    factory.prototype.scrollTopAnimate = function(scrollTop , speed) {
        projects.$hb.animate({
            'scrollTop' : scrollTop
        } , (speed ? speed : 500));
    };

    if ( ! window.projects ) {
        window.projects = projects;
    }
}(window, document, jQuery));