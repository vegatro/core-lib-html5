<template>
    <div role="progressbar" class="mdc-linear-progress mdc-linear-progress--indeterminate">
        <div class="mdc-linear-progress__buffering-dots"></div>
        <div class="mdc-linear-progress__buffer"></div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
            <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
            <span class="mdc-linear-progress__bar-inner"></span>
        </div>
    </div>
</template>

<script>
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
    @import "@material/linear-progress/mdc-linear-progress.scss";
</style>