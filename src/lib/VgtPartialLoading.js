import $ from 'jquery';
require('../assets/VgtLoading.css');

class VgtPartialLoading {
    constructor(){
    }

    static show(container){
        $(container).css('position', 'relative');
        
        var top = ($(container).innerHeight() - 32) / 2;
        var left = ($(container).innerWidth() - 32) / 2;
        
        $(container).append('<div class="vgt-loading-overlay" style="position:absolute;></div>');

        $(container).append('\
                <div class="vgt-load-progress" style="position:absolute;">\
                    <div class="progress">\
                    <div class="indeterminate"></div>\
                    </div>\
                </div>\
            ');
    }
}

export {VgtPartialLoading};