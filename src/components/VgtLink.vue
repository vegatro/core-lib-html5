<template>
    <a class="vgt-link" :data-history-push="vgtHistoryPush" :data-target="vgtTarget" :data-container="vgtContainer" :data-callback="vgtCallback" :href="vgtHref">
        <slot></slot>
    </a>
</template>

<script>
import $ from 'jquery';

let self;

export default {
    name: 'VgtList',
    props: {
        vgtHref: {
            type: String,
            default: '#'
        },
        vgtHistoryPush: {
            type: Boolean,
            default: false
        },
        vgtTarget: {
            type: String,
            default: '#vgt-content-body'
        },
        vgtContainer: {
            type: String,
            default: '#vgt-content-body'
        },
        vgtCallback: {
            type: String,
            default: ''
        }
    },
    mounted: function(){
        self = this;

        // $(self.$el).on('click', function(){
        //     console.log('clicked');

        //     if(self.vgtHistoryPush){
        //         var pushObj = {
        //             url: self.vgtHref,
        //             target: self.vgtTarget,
        //             container: self.vgtContainer,
        //             callback: self.vgtCallback
        //         };

        //         window.history.pushState(
        //             pushObj, 
        //             "", 
        //             self.vgtHref
        //         );

        //         return false;
        //     }
        // });
    }
}
</script>