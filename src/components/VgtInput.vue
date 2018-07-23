<template>
    <div v-if="type == 'textarea'" class="mdc-text-field mdc-text-field--textarea">
        <textarea id="textarea" class="mdc-text-field__input" rows="8" cols="40" :required="required"></textarea>
        <label for="textarea" class="mdc-floating-label">{{placeholder}}</label>
    </div>
    <div v-else-if="type != 'textarea' && !outlined" class="mdc-text-field">
        <input :type="type" id="my-text-field" class="mdc-text-field__input" :required="required">
        <label class="mdc-floating-label" for="my-text-field">{{placeholder}}</label>
        <div class="mdc-line-ripple"></div>
    </div>
    <div v-else-if="type != 'textarea' && outlined" class="mdc-text-field mdc-text-field--outlined">
        <input :type="type" :pattern="type == 'email' ? /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ : ''" id="tf-outlined" class="mdc-text-field__input" :required="required">
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
        }
    },
    mounted: function(){
        self = this;

        new MDCTextField(self.$el);
    }
}
</script>

<style lang="scss">
    @import "@material/textfield/mdc-text-field";

    // .mdc-text-field--focused{
    //     @include mdc-text-field-textarea-corner-radius(30px)
    // }
</style>