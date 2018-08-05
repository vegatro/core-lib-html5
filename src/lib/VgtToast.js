import $ from 'jquery';
require('../assets/jquery.toast.css');
require('./jquery.toast.min.js');

class VgtToast{
    constructor(){}

    static show(params){
        var options = {
            content: '',
            timeout: 4000,
            position: 'bottom-right',
            bgColor: 'rgba(0, 0, 0, 0.9)',
            loaderBg: '#ff0000',
            type: '',
            textColor: '#fff',
            animation: 'slide',
            fontSize: '16px'
        };
        
        if(params)
            $.extend(options, params);

        if (options.type == 'success') {
            options.bgColor = 'rgba(0, 144, 10, 0.9)';
            options.loaderBg = '#00b40c';
        }

        $.toast({
            text: '<span style="font-size:' + options.fontSize + ';">' + options.content + '</span>',
            position: options.position,
            bgColor: options.bgColor,
            textColor: options.textColor,
            loaderBg: options.loaderBg,
            icon: options.type,
            hideAfter: options.timeout,
            showHideTransition: options.animation,
        });
    }
}

export {VgtToast};