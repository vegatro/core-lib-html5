<template>
  <form class="vgt-form">
    <slot></slot>
  </form>
</template>

<script>
import $ from 'jquery';
import {VgtNetwork} from '../lib/VgtNetwork';

let self;

export default {
  name: 'VgtForm',
  props: {
    action: {
      type: String,
      default: ''
    },
    method: {
      type: String,
      default: 'GET'
    },
    submit: {
      type: String,
      default: ''
    },
    success: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    before: {
      type: String,
      default: ''
    },
    complete: {
      type: String,
      default: ''
    },
    preventSubmitDefault: {
      type: Boolean,
      default: false
    },
    preventSuccessDefault: {
      type: Boolean,
      default: false
    },
    preventErrorDefault: {
      type: Boolean,
      default: false
    },
    preventBeforeDefault: {
      type: Boolean,
      default: false
    },
    preventCompleteDefault: {
      type: Boolean,
      default: false
    }
  },
  mounted: function(){
    self = this;

    $(self.$el).on('submit', function(){
      if(self.submit.length)
        eval(self.submit)();

      if(self.preventSubmitDefault)
        return false;

      var $form = $(this);

      try{
        new VgtNetwork().ajaxRequest({
          type: self.method,
          url: self.action,
          data: $form.serialize(),
          success: function(response){
            if(self.success.length)
             eval(self.success)(response);
          },
          error: function(error){
            if(self.error.length)
              eval(self.error)(error);            
          },
          beforeSend: function(jqXHR){
            if(self.before.length)
              eval(self.before)(jqXHR); 
          },
          complete: function(){
            if(self.complete.length)
              eval(self.complete)();
          },
          preventSuccessDefault: self.preventSuccessDefault,
          preventErrorDefault: self.preventErrorDefault,
          preventBeforeSendDefault: self.preventBeforeDefault,
          preventCompleteDefault: self.preventCompleteDefault
        });
      }
      catch(error){
        console.error('[VgtForm Error]', error);
      }

      return false;
    });
  }
}
</script>
