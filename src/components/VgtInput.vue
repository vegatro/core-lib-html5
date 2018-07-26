<template>

    <div v-if="vgtType == 'textarea'" class="mdc-text-field mdc-text-field--textarea">
        <textarea id="textarea" :name="vgtName" class="mdc-text-field__input" rows="8" cols="40" :required="vgtRequired" autocomplete="off"></textarea>
        <label v-if="vgtPlaceholder.length > 0" for="textarea" class="mdc-floating-label">{{vgtPlaceholder}}</label>
    </div>

    <div v-else-if="vgtType == 'checkbox'" class="mdc-form-field">
    <div :class="'mdc-checkbox' + (vgtDisabled ? ' mdc-checkbox--disabled' : '')">
        <input type="checkbox" :name="vgtName" class="mdc-checkbox__native-control" id="checkbox-1" :checked="vgtChecked" :disabled="vgtDisabled" />
        <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
            </svg>
            <div class="mdc-checkbox__mixedmark"></div>
        </div>
    </div>
    <label for="checkbox-1">{{vgtPlaceholder}}</label>
    </div>

    <div v-else-if="(vgtType != 'textarea' && vgtType != 'checkbox' && vgtType != 'radio') && !vgtOutlined" :class="'mdc-text-field' + (vgtIcon.length > 0 ? ' mdc-text-field--with-leading-icon': '')">
        <i v-if="vgtIcon.length > 0" class="material-icons mdc-text-field__icon">{{vgtIcon}}</i>
        <input :type="vgtType" :name="vgtName" id="my-text-field" class="mdc-text-field__input" :required="vgtRequired" autocomplete="off">
        <label v-if="vgtPlaceholder.length > 0" class="mdc-floating-label" for="my-text-field">{{vgtPlaceholder}}</label>
        <div class="mdc-line-ripple"></div>
    </div>

    <div v-else-if="(vgtType != 'textarea' && vgtType != 'checkbox' && vgtType != 'radio') && vgtOutlined" :class="'mdc-text-field mdc-text-field--outlined' + (vgtIcon.length > 0 ? ' mdc-text-field--with-leading-icon': '')">
        <i v-if="vgtIcon.length > 0" class="material-icons mdc-text-field__icon">{{vgtIcon}}</i>
        <input :type="vgtType" :name="vgtName" autocomplete="off" id="tf-outlined" class="mdc-text-field__input" :required="vgtRequired">
        <label v-if="vgtPlaceholder.length > 0" for="tf-outlined mdc-theme--primary" class="mdc-floating-label">{{vgtPlaceholder}}</label>
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
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

let self;

export default{
    name: 'VgtInput',
    props: {
        vgtType: {
            type: String,
            default: 'text'
        },
        vgtName: {
            type: String,
            default: ''
        },
        vgtPlaceholder: {
            type: String,
            default: ''
        },
        vgtDisabled: {
            type: Boolean,
            default: false
        },
        vgtChecked: {
            type: Boolean,
            default: false
        },
        vgtRequired: {
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
        vgtIcon: {
            String,
            default: ''
        }
    },
    mounted: function(){
        self = this;
        let color_ = self.vgtColor;

        if(self.vgtType == 'checkbox'){
            new MDCCheckbox($(self.$el).find('.mdc-checkbox')[0]);
            new MDCFormField(self.$el);
        }
        else{
            new MDCTextField(self.$el);
        }

        if(color_.length > 0){
            $(self.$el).css('--mdc-theme-primary', color_);
        }
    }
}
</script>

<style lang="scss">
    @import "@material/form-field/mdc-form-field";
    @import "@material/checkbox/mdc-checkbox";
    @import "@material/textfield/mdc-text-field";

    .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{
        color: var(--mdc-theme-primary);
    }

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