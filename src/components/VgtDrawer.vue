<template>
    <aside class="vgt-drawer">
        <header class="vgt-drawer-header">
            <slot name="header"></slot>
        </header>
        <ul class="vgt-drawer-item-list">
            <slot></slot>
        </ul>
        <footer class="vgt-drawer-footer">
            <slot name="footer"></slot>
        </footer>
    </aside>
</template>

<script>
import $ from 'jquery';

let self;

export default {
    name: 'VgtDrawer',
    props: {
        
    },
    mounted: function(){
        self = this;

        // if(color_.length > 0){
        //     $(self.$el).css('--mdc-theme-primary', color_);
        // }
    }
}
</script>

<style lang="scss">
    .vgt-drawer{
        width: 250px;
        position: absolute;
        top:0px;
        left:0px;
        bottom:0px;
        background: #333;
        z-index: 1000;
    }

    .vgt-drawer-header{
        width:100%;
        height:150px;
        background: rgba(0, 0, 0, 0.2);
    }

    .vgt-drawer-item-list{
        list-style:none;
        padding:0px;
        margin:20px 0px 0px 0px;
    }
</style>