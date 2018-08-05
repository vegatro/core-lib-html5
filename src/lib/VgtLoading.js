import $ from 'jquery';
require('../assets/VgtLoading.css');

class VgtLoading {
    constructor(){
    }

    static show(){
        $('body').append('<div class="og-loading-overlay"></div>');
        $('body').append('<div id="og-loading" style="display:none;">\
                                            <div id="og-loading-c">\
                                                <div id="og-loading-logo"></div>\
                                                <div class="og-loading-circle"></div>\
                                                <div class="og-loading-circle-2"></div>\
                                            </div>\
                                        </div>');

        //$('#loadingBox:last-child').css('left', ($(window).width() - $('#loadingBox').width()) / 2);
        //$('#loadingBox:last-child').css('top', ($(window).height() - $('#loadingBox').height()) / 2);

        $('#og-loading:last-child').fadeIn(300);
    }

    static hide(){
        setTimeout(function() {
            $('.og-loading-overlay').fadeOut(200);
            $('#og-loading').fadeOut(200);

            setTimeout(function() {
                $('.og-loading-overlay').remove();
                $('#og-loading').remove();
            }, 0);
        }, 200);
    }
}

export {VgtLoading};