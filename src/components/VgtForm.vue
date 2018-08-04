<template>
  <form class="vgt-form" :action="vgtAction">
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
    vgtAction: {
      type: String,
      default: ''
    },
    vgtMethod: {
      type: String,
      default: 'GET'
    },
    vgtSubmit: {
      type: String,
      default: ''
    },
    vgtSuccess: {
      type: String,
      default: ''
    },
    vgtError: {
      type: String,
      default: ''
    },
    vgtBeforeInit: {
      type: String,
      default: ''
    },
    vgtBefore: {
      type: String,
      default: ''
    },
    vgtComplete: {
      type: String,
      default: ''
    },
    vgtPreventSubmitDefault: {
      type: Boolean,
      default: false
    },
    vgtPreventSuccessDefault: {
      type: Boolean,
      default: false
    },
    vgtPreventErrorDefault: {
      type: Boolean,
      default: false
    },
    vgtPreventBeforeDefault: {
      type: Boolean,
      default: false
    },
    vgtPreventCompleteDefault: {
      type: Boolean,
      default: false
    }
  },
  mounted: function(){
    self = this;

    $(self.$el).on('submit', function(){
      if(self.vgtSubmit.length)
        eval(self.vgtSubmit)();

      if(self.vgtPreventSubmitDefault)
        return false;

      var $form = $(this);

      try{
        if(self.vgtBeforeInit.length)
          eval(self.vgtBeforeInit)();

        new VgtNetwork().ajaxRequest({
          type: self.vgtMethod,
          url: self.vgtAction,
          data: $form.serialize(),
          success: function(response){
            if(self.vgtSuccess.length)
             eval(self.vgtSuccess)(response);
          },
          error: function(error){
            if(self.vgtError.length)
              eval(self.vgtError)(error);            
          },
          before: function(jqXHR){
            if(self.vgtBefore.length)
              eval(self.vgtBefore)(jqXHR);
          },
          complete: function(){
            if(self.vgtComplete.length)
              eval(self.vgtComplete)();
          },
          preventSuccessDefault: self.vgtPreventSuccessDefault,
          preventErrorDefault: self.vgtPreventErrorDefault,
          preventBeforeSendDefault: self.vgtPreventBeforeDefault,
          preventCompleteDefault: self.vgtPreventCompleteDefault
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
