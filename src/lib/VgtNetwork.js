import $ from 'jquery';

let ACTIVE_AJAX_REQUESTS = [];

const VgtNetwork = {
    ajaxRequest: function (context, params) {
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
                    user.logout(context);
                    context.$root.$f7.toast.show({ text: 'Oturumunuz sonlandırıldı. Lütfen tekrar giriş yapın.' });
                    return;
                }
                else if(data.Status == 403){
                    context.$root.$f7.toast.show({ text: 'Bu isteği yapmaya yetkiniz bulunmamaktadır.' });
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
                context.$root.$f7.toast.show({ text: 'İstek başarısız. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.' });
            }

            if(params.error)
                params.error();
        }

        OPTIONS.beforeSend = function(jqXHR){
            if(!OPTIONS.preventBeforeSendDefault){
                if(OPTIONS.showLoading)
                context.$root.$f7.preloader.show();
                
                var counter = 0;

                if(params.abortRequests){
                    $(ACTIVE_AJAX_REQUESTS).each(function (i, request) {
                        request.abort();
                        counter++;
                    });

                    $(ACTIVE_AJAX_REQUESTS).each(function () {
                        ACTIVE_AJAX_REQUESTS.pop();
                    });

                    ACTIVE_AJAX_REQUESTS.push(jqXHR);
                }
            }

            if(params.beforeSend)
                params.beforeSend(jqXHR);
        }

        OPTIONS.complete = function(){
            context.$root.$f7.preloader.hide();
        }
        
        $.ajax(OPTIONS);
    }
};

export {VgtNetwork};