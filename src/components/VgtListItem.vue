<template>
    <li class="mdc-list-item mdc-ripple-surface" @click="checked = !checked">
        <vgt-input v-if="vgtCheckbox" :vgt-name="vgtName" vgt-type="checkbox" :vgt-checked="checked" :vgt-value="vgtValue"></vgt-input>
        <span v-if="vgtIcon.length > 0" class="mdc-list-item__graphic material-icons" aria-hidden="true">{{vgtIcon}}</span>
        <slot></slot>
    </li>
</template>

<script>
import $ from 'jquery';
import {MDCRipple} from '@material/ripple';

let self;

export default {
    name: 'VgtListItem',
    data: function(){
        return {
            checked: false
        }
    },
    props: {
        vgtIcon: {
            type: String,
            default: ''
        },
        vgtCheckbox: {
            type: Boolean,
            default: false
        },
        vgtChecked: {
            type: Boolean,
            default: false
        },
        vgtName: {
            type: String,
            default: ''
        },
        vgtValue: {
            type: String,
            default: ''
        }
    },
    methods: {
        toggle: function(){
            // if(self.$el)
        }
    },
    mounted: function(){
        self = this;

        new MDCRipple(self.$el);

        self.checked = self.vgtChecked;

        // if(self.vgtCheckbox){
        //     $(self.$el).on('click', function(){
                
        //     });
        // }
    }
}
</script>

<style lang="scss">
    // @import "@material/list/mdc-list";

    .mdc-list-item__graphic{
        margin-right: 16px;
    }
</style>