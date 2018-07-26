<template>
    <button v-if="vgtSubmit" type="submit" 
        :class="'vgt-button mdc-button' 
            + (vgtOutlined ? ' mdc-button--outlined' : '') 
            + (vgtRaised ? ' mdc-button--raised' : '')
            + (vgtUnelevated ? ' mdc-button--unelevated' : '')">

        <i v-if="vgtIcon.length > 0" class="material-icons mdc-button__icon" aria-hidden="true">{{vgtIcon}}</i>

        <slot></slot>
    </button>

    <a v-else
        :class="'vgt-button mdc-button' 
            + (vgtOutlined ? ' mdc-button--outlined' : '') 
            + (vgtRaised ? ' mdc-button--raised' : '')
            + (vgtUnelevated ? ' mdc-button--unelevated' : '')">

        <i v-if="vgtIcon.length > 0" class="material-icons mdc-button__icon" aria-hidden="true">{{vgtIcon}}</i>

        <slot></slot>
    </a>
</template>

<script>
import $ from 'jquery';
import {MDCRipple} from '@material/ripple';

let self;

export default {
    name: 'VgtButton',
    props: {
        vgtLink: {
            String,
            default: ''
        },
        vgtIcon: {
            String,
            default: ''
        },
        vgtUnelevated: {
            type: Boolean,
            default: false
        },
        vgtRaised: {
            type: Boolean,
            default: false
        },
        vgtOutlined: {
            type: Boolean,
            default: false
        },
        vgtColor: {
            type: String,
            default: ''
        },
        vgtSubmit: {
            type: Boolean,
            default: false
        }
    },
    mounted: function(){
        self = this;
        let color_ = self.vgtColor;

        new MDCRipple(self.$el);

        if(color_.length > 0){
            $(self.$el).css('--mdc-theme-primary', color_);
        }
    }
}
</script>

<style lang="scss">
    @import "@material/button/mdc-button";

    .mdc-button{
        vertical-align: top;
    }
</style>