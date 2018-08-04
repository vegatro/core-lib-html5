<template>
    <li class="vgt-drawer-item mdc-ripple-surface">
        <a href="#">
            <i class="material-icons icon">{{ vgtIcon }}</i>
            <span class="label">{{ vgtLabel }}</span>
            <i v-if="hasSlotData" class="material-icons collapse-arrow">keyboard_arrow_down</i>
        </a>
        <ul class="vgt-drawer-submenu">
            <slot></slot>
        </ul>
    </li>
</template>

<script>
import {MDCRipple} from '@material/ripple';
import $ from 'jquery';

let self;

export default {
    name: 'VgtDrawerItem',
    props: {
        vgtIcon: {
            type: String,
            default: ''
        },
        vgtLabel: {
            type: String,
            default: ''
        }
    },
    computed: {
        hasSlotData() {
            return this.$slots.default;
        }
    },
    mounted: function(){
        self = this;

        new MDCRipple(self.$el);

        // if(color_.length > 0){
        //     $(self.$el).css('--mdc-theme-primary', color_);
        // }
    }
}
</script>

<style lang="scss">
    .vgt-drawer-item{
    }

    .vgt-drawer-item a{
        display:block;
        color:#fff;
        text-decoration: none;
        padding:15px 10px;
        transition:0.2s all ease;
    }

    .vgt-drawer-item a:hover{
        background: rgba(255, 255, 255, 0.1);
    }

    .vgt-drawer-item .collapse-arrow{
        opacity:0.3;
        float:right;
    }

    .vgt-drawer-item .label{
        display:inline-block;
        height:24px;
        line-height:24px;
        vertical-align: top;
        font-size:16px;
        margin-left:10px;
    }

    .vgt-drawer-submenu{
        margin:0;
        padding:0;
        list-style: none;
    }

    .vgt-drawer-submenu .vgt-drawer-item a{
        padding: 15px 10px 15px 35px;
    }
</style>