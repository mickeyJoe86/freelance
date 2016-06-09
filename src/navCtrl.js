(function(){
    'use strict';
    
    angular
        .module('app')
        .controller('navCtrl', [function(){
            (function($){
                
                var cbpAnimatedHeader = (function() {

                    var docElem = document.documentElement,
                        header = document.querySelector( '.navbar-fixed-top' ),
                        didScroll = false,
                        changeHeaderOn = 300;

                    function init() {
                        window.addEventListener( 'scroll', function( event ) {
                            if( !didScroll ) {
                                didScroll = true;
                                setTimeout( scrollPage, 250 );
                            }
                        }, false );
                    }

                    function scrollPage() {
                        var sy = scrollY();
                        if ( sy >= changeHeaderOn ) {
                            classie.add( header, 'navbar-shrink' );
                        }
                        else {
                            classie.remove( header, 'navbar-shrink' );
                        }
                        didScroll = false;
                    }

                    function scrollY() {
                        return window.pageYOffset || docElem.scrollTop;
                    }
                    
                    $(function () {
                        $('body').on('click', '.page-scroll a', function (event) {
                            var $anchor = $(this);
                            $('html, body').stop().animate({
                                scrollTop: $($anchor.attr('href')).offset().top
                            }, 1500, 'easeInOutExpo');
                            event.preventDefault();
                        });
                    });

                    init();

                })(jQuery);
            })

                      
        }]);
    
}())