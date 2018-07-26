<template>
    <button v-if="submit" type="submit" 
        :class="'vgt-button mdc-button' 
            + (outlined ? ' mdc-button--outlined' : '') 
            + (raised ? ' mdc-button--raised' : '')
            + (unelevated ? ' mdc-button--unelevated' : '')">

        <i v-if="icon.length > 0" class="material-icons mdc-button__icon" aria-hidden="true">{{icon}}</i>

        <slot></slot>
    </button>

    <a v-else
        :class="'vgt-button mdc-button' 
            + (outlined ? ' mdc-button--outlined' : '') 
            + (raised ? ' mdc-button--raised' : '')
            + (unelevated ? ' mdc-button--unelevated' : '')">

        <i v-if="icon.length > 0" class="material-icons mdc-button__icon" aria-hidden="true">{{icon}}</i>

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
        link: {
            String,
            default: ''
        },
        icon: {
            String,
            default: ''
        },
        unelevated: {
            type: Boolean,
            default: false
        },
        raised: {
            type: Boolean,
            default: false
        },
        outlined: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: ''
        },
        submit: {
            type: Boolean,
            default: false
        }
    },
    mounted: function(){
        self = this;
        let color_ = self.color;

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