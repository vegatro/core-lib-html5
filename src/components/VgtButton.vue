<template>
    <button 
        :class="'mdc-button' 
            + (outlined ? ' mdc-button--outlined' : '') 
            + (raised ? ' mdc-button--raised' : '')
            + (unelevated ? ' mdc-button--unelevated' : '')">

        <i v-if="icon.length > 0" class="material-icons mdc-button__icon" aria-hidden="true">{{icon}}</i>

        <slot></slot>
    </button>
</template>

<script>
import {MDCRipple} from '@material/ripple';

let self;

export default {
    name: 'VgtButton',
    props: {
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
        }
    },
    mounted: function(){
        self = this;

        new MDCRipple(self.$el);
    }
}
</script>

<style lang="scss">
    @import "@material/button/mdc-button";

    .mdc-button{
        vertical-align: top;
    }
</style>