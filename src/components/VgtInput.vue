<template>

    <div v-if="type == 'textarea'" class="mdc-text-field mdc-text-field--textarea">
        <textarea id="textarea" class="mdc-text-field__input" rows="8" cols="40" :required="required" autocomplete="off"></textarea>
        <label for="textarea" class="mdc-floating-label">{{placeholder}}</label>
    </div>

    <div v-else-if="type != 'textarea' && !outlined" :class="'mdc-text-field' + (icon.length > 0 ? ' mdc-text-field--with-leading-icon': '')">
        <i v-if="icon.length > 0" class="material-icons mdc-text-field__icon">{{icon}}</i>
        <input :type="type" id="my-text-field" class="mdc-text-field__input" :required="required" autocomplete="off">
        <label class="mdc-floating-label" for="my-text-field">{{placeholder}}</label>
        <div class="mdc-line-ripple"></div>
    </div>

    <div v-else-if="type != 'textarea' && outlined" :class="'mdc-text-field mdc-text-field--outlined' + (icon.length > 0 ? ' mdc-text-field--with-leading-icon': '')">
        <i v-if="icon.length > 0" class="material-icons mdc-text-field__icon">{{icon}}</i>
        <input :type="type" autocomplete="off" id="tf-outlined" class="mdc-text-field__input" :required="required">
        <label for="tf-outlined" class="mdc-floating-label">Your Name</label>
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
            default: '#6200EE'
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

        $(self.$el).children('.mdc-text-field__input').on('focus', function(){
            $(this).css('border-color', color_);
            $(this).parents('.mdc-text-field').first().css('border-color', color_);
            $(this).parents('.mdc-text-field').first().find('.mdc-line-ripple').css('background-color', color_);
            $(this).parents('.mdc-text-field').first().find('.mdc-floating-label').css('color', color_);
            $(this).parents('.mdc-text-field').first().find('path.mdc-notched-outline__path').attr('style', 'stroke:' + color_);
        });

        $(self.$el).children('.mdc-text-field__input').on('blur', function(){
            $(this).attr('style', '');
            $(this).parents('.mdc-text-field').first().attr('style', '');
            $(this).parents('.mdc-text-field').first().find('.mdc-line-ripple').attr('style', '');
            $(this).parents('.mdc-text-field').first().find('.mdc-floating-label').attr('style', '');
            $(this).parents('.mdc-text-field').first().find('path.mdc-notched-outline__path').attr('style', '');
        });
    }
}
</script>

<style lang="scss">
    @import "@material/textfield/mdc-text-field";

    .mdc-text-field{
        margin:0px !important;
        height:56px !important;
    }

    .mdc-text-field .mdc-floating-label{
        bottom:18px;
    }

    // .mdc-text-field--focused{
        // @include mdc-text-field-line-ripple-color(#ff0000);
        // // @include mdc-text-field-caret-color(#ff0000);
        // @include mdc-text-field-focused-outline-color(#ff0000);
        // @include mdc-text-field-outline-color(#ff0000);
    // }
</style>