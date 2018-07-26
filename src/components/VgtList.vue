<template>
    <ul class="mdc-list" aria-orientation="vertical">
        <slot></slot>
    </ul>
</template>

<script>
import $ from 'jquery';

let self;

export default {
    name: 'VgtList',
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
    @import "@material/list/mdc-list";

</style>