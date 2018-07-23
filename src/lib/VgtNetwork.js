import $ from 'jquery';

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
                    console.log('İstek başarılı');
                }
                else if(data.Status == 402){
                    // user.logout(context);
                    // context.$root.$f7.toast.show({ text: 'Oturumunuz sonlandırıldı. Lütfen tekrar giriş yapın.' });
                    return;
                }
                else if(data.Status == 403){
                    // context.$root.$f7.toast.show({ text: 'Bu isteği yapmaya yetkiniz bulunmamaktadır.' });
                    return;
                }
                else
                    console.log('İstek başarısız');
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
                // context.$root.$f7.toast.show({ text: 'İstek başarısız. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.' });
            }

            if(params.error)
                params.error(error);
        }

        OPTIONS.beforeSend = function(jqXHR){
            if(!OPTIONS.preventBeforeSendDefault){
                // if(OPTIONS.showLoading)
                // context.$root.$f7.preloader.show();
                
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

            if(params.beforeSend)
                params.beforeSend(jqXHR);
        }

        OPTIONS.complete = function(){
            if(!OPTIONS.preventCompleteDefault){
            // context.$root.$f7.preloader.hide();
            }

            if(params.complete)
                params.complete();
        };
        
        $.ajax(OPTIONS);
    }
}

VgtNetwork.ACTIVE_AJAX_REQUESTS = [];

export {VgtNetwork};