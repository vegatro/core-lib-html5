<template>

    <div v-if="type == 'textarea'" class="mdc-text-field mdc-text-field--textarea">
        <textarea id="textarea" class="mdc-text-field__input" rows="8" cols="40" :required="required" autocomplete="off"></textarea>
        <label v-if="placeholder.length > 0" for="textarea" class="mdc-floating-label">{{placeholder}}</label>
    </div>

    <div v-else-if="type != 'textarea' && !outlined" :class="'mdc-text-field' + (icon.length > 0 ? ' mdc-text-field--with-leading-icon': '')">
        <i v-if="icon.length > 0" class="material-icons mdc-text-field__icon">{{icon}}</i>
        <input :type="type" id="my-text-field" class="mdc-text-field__input" :required="required" autocomplete="off">
        <label v-if="placeholder.length > 0" class="mdc-floating-label" for="my-text-field">{{placeholder}}</label>
        <div class="mdc-line-ripple"></div>
    </div>

    <div v-else-if="type != 'textarea' && outlined" :class="'mdc-text-field mdc-text-field--outlined' + (icon.length > 0 ? ' mdc-text-field--with-leading-icon': '')">
        <i v-if="icon.length > 0" class="material-icons mdc-text-field__icon">{{icon}}</i>
        <input :type="type" autocomplete="off" id="tf-outlined" class="mdc-text-field__input" :required="required">
        <label v-if="placeholder.length > 0" for="tf-outlined mdc-theme--primary" class="mdc-floating-label">{{placeholder}}</label>
        <div class="mdc-notched-outline">
            <svg>
            <path class="mdc-notched-outline__path"/>
            </svg>
        </div>
        <div class="mdc-notched-outline__idle"></div>
    </div>

</template>

<script>
import $ from 'jquery';
import {MDCTextField} from '@material/textfield';

let self;

export default{
    name: 'VgtInput',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        required: {
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
        icon: {
            String,
            default: ''
        }
    },
    mounted: function(){
        self = this;
        let color_ = self.color;

        new MDCTextField(self.$el);

        if(color_.length > 0){
            $(self.$el).css('--mdc-theme-primary', color_);
        }
    }
}
</script>

<style lang="scss">
    @import "@material/textfield/mdc-text-field";

    // .mdc-text-field:not(.mdc-text-field--textarea){
    //     margin:0px !important;
    //     height:56px !important;
    // }

    // .mdc-text-field--focused:not(.mdc-text-field--textarea.mdc-text-field--focused) .mdc-floating-label{
    //     bottom:18px;
    //     color: var(--mdc-theme-primary) !important;
    // }

    // .mdc-text-field--focused{
        // @include mdc-text-field-line-ripple-color(#ff0000);
        // // @include mdc-text-field-caret-color(#ff0000);
        // @include mdc-text-field-focused-outline-color(#ff0000);
        // @include mdc-text-field-outline-color(#ff0000);
    // }
</style>