<template>
    <a class="vgt-link" :data-history-push="vgtHistoryPush" :data-target="vgtTarget" :data-container="vgtContainer" :href="vgtHref">
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
        }
    },
    mounted: function(){
        self = this;

        $(self.$el).on('click', function(){
            console.log('clicked');

            if(self.vgtHistoryPush){
                window.history.pushState(
                    {
                        url: self.vgtHref,
                        target: self.vgtTarget,
                        container: self.vgtContainer
                    }, 
                    "", 
                    self.vgtHref
                );

                return false;
            }
        });
    }
}
</script>