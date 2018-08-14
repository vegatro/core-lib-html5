import $ from 'jquery';
import {VgtLoading} from './VgtLoading';
import {VgtPartialLoading} from './VgtPartialLoading';
import {VgtToast} from './VgtToast';

class VgtNetwork {
    constructor(){
    }

    ajaxRequest (params) {
        let self = this;

        if(!params) params = {};

        if(typeof(params.abortRequests) === 'undefined')
            params.abortRequests = false;

        var OPTIONS = {
            url                     : '',
            type                    : 'GET',
            dataType                : 'json',
            data                    : '',
            cache                   : false,
            showLoading             : true,
            preventSuccessDefault   : false,
            preventErrorDefault     : false,
            preventBeforeSendDefault: false,
            preventCompleteDefault  : false,
            success                 : function(data){ },
            error                   : function(jqXHR, textStatus, error){},
            beforeSend              : function(jqXHR){},
            complete                : function(){},
            headers                 : { 'X-Requested-With': 'XMLHttpRequest' }
        };

        if (params)
            $.extend(OPTIONS, params);
        
        OPTIONS.success = function(data){  
            if(!OPTIONS.preventSuccessDefault){
                if(data.Status == 200){
                    VgtToast.show({ content: 'İşlem başarılı.' });
                    console.log('İstek başarılı');
                }
                else if(data.Status == 402){
                    // user.logout(context);
                    // context.$root.$f7.toast.show({ text: 'Oturumunuz sonlandırıldı. Lütfen tekrar giriş yapın.' });
                    VgtToast.show({ content: 'Oturumunuz sonlandırıldı. Lütfen tekrar giriş yapın.' });
                    return;
                }
                else if(data.Status == 403){
                    // context.$root.$f7.toast.show({ text: 'Bu isteği yapmaya yetkiniz bulunmamaktadır.' });
                    VgtToast.show({ content: 'Bu isteği yapmaya yetkiniz bulunmamaktadır.' });
                    return;
                }
                else{
                    console.log('İstek başarısız');
                    VgtToast.show({ content: 'İstek başarısız. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.' });
                }
            }
            
            if(params.success)
                params.success(data);
        }

        OPTIONS.error = function(jqXHR, textStatus, error){
            console.log(error);

            if(error == 'abort')
                return;

            if(!OPTIONS.preventErrorDefault){
                console.log('İstek başarısız');
                VgtToast.show({ content: 'İstek başarısız. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.' });
                // context.$root.$f7.toast.show({ text: 'İstek başarısız. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.' });
            }

            if(params.error)
                params.error(error);
        }

        OPTIONS.beforeSend = function(jqXHR){
            if(!OPTIONS.preventBeforeSendDefault){
                // if(OPTIONS.showLoading)
                // context.$root.$f7.preloader.show();
                VgtLoading.show();
                
                var counter = 0;

                if(params.abortRequests){
                    $(self.constructor.ACTIVE_AJAX_REQUESTS).each(function (i, request) {
                        request.abort();
                        counter++;
                    });

                    $(self.constructor.ACTIVE_AJAX_REQUESTS).each(function () {
                        self.constructor.ACTIVE_AJAX_REQUESTS.pop();
                    });

                    self.constructor.ACTIVE_AJAX_REQUESTS.push(jqXHR);
                }
            }

            if(OPTIONS.before)
                OPTIONS.before(jqXHR);
        }

        OPTIONS.complete = function(){
            if(!OPTIONS.preventCompleteDefault){
                VgtLoading.hide();
            // context.$root.$f7.preloader.hide();
            }

            if(params.complete)
                params.complete();
        };
        
        $.ajax(OPTIONS);
    }

    loadPartial(url, target, container, callback){
        VgtPartialLoading.show(container);

        // $(container).load(url + ' ' + target, function(){
        //     initializeVgtApp();
        //     eval(callback)();
        // });

        $.get(url, function (data) {
            if(data.indexOf('"Status":402') != -1){
                location.reload();
                return;
            }

            var title = $(data).filter('title').text();

            if($(data).find('.nav-bar').length){
                var navbar = $(data).find('.nav-bar').html();
                $('.nav-bar').html(navbar);
            }

            data = $(data).find(target).html();
            $(container).empty().append(data);
            document.title = title;
            
            initializeVgtApp();
            eval(callback)();
        });
    }
}

VgtNetwork.ACTIVE_AJAX_REQUESTS = [];

export {VgtNetwork};