<template>
    <div class="mdc-card">
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    </div>
</template>

<script>
import $ from 'jquery';

let self;

export default {
    name: 'VgtCard',
    props: {
        
    },
    mounted: function(){
        self = this;

        // if(color_.length > 0){
        //     $(self.$el).css('--mdc-theme-primary', color_);
        // }
    }
}
</script>

<style lang="scss">
    @import "@material/card/mdc-card";

</style>
