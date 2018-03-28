<template lang="pug">
.editr
    .editr--toolbar
        Btn(
            v-for="module in modules",
            :module="module",
            :key="module.name",
            @exec="exec(arguments[0], arguments[1])",
            :ref="'btn-'+module.name",
            :title="module.title || ''"
        )

    .editr--content(ref="content", contenteditable="true", tabindex="1", :placeholder="placeholder")

</template>

<script>
import bus from './bus.js';
import debounce from "debounce";
import Btn from "./Button.vue";

import bold from "./modules/bold.js";
import italic from "./modules/italic.js";
import underline from "./modules/underline.js";

import headings from "./modules/headings.vue";
import hyperlink from "./modules/hyperlink.vue";
import list_ordered from "./modules/list_ordered.js";
import list_unordered from "./modules/list_unordered.js";

import image from "./modules/image.vue";
import table from "./modules/table.vue";

import removeFormat from "./modules/removeFormat.js";

import separator from "./modules/separator.js";

const modules = [
    bold, italic, underline, separator,
    headings, hyperlink,
    list_ordered, list_unordered, separator,
    image, table, separator,
    removeFormat
];

export default {
    model: {
        prop: "html",
        event: "html"
    },

    props: {
        html: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: "输入描述..."
        },
    },


    components: { Btn  },

    data () {
        return {
        	hideModules:[],
            selection: ""
        }
    },

    computed: {
        modules: function() {
        	var ss = modules;
            console.log("hideModules:",this.hideModules)
            if (bus.options.hideModules){
                ss = modules.filter(m => !bus.options.hideModules[m.name]);
            }
            ss = ss.filter(m => {
            	if(this.hideModules[m.name] === false){
            		return false;
            	}
          		return true;
            });
            console.log(ss);
            return ss;
        },

        btnsWithDashboards: function () {
            if (this.modules)
                return this.modules.filter(m => m.render);
            return [];
        },

        innerHTML: {
            get () {
                return this.$refs.content.innerHTML;
            },

            set (html) {
                if (this.innerHTML !== html) {
                    this.$refs.content.innerHTML = html;
                }
            }
        }
    },

    methods: {
        saveSelection() {
            if (window.getSelection) {
                this.selection = window.getSelection();
                if (this.selection.getRangeAt && this.selection.rangeCount) {
                    return this.selection.getRangeAt(0);
                }
            } else if (document.selection && document.selection.createRange) {
                return document.selection.createRange();
            }
            return null;
        },

        restoreSelection(range) {
            if (range) {
                if (window.getSelection) {
                    this.selection = window.getSelection();
                    this.selection.removeAllRanges();
                    this.selection.addRange(range);
                }
                else if (document.selection && range.select)
                    range.select();
            }
        },

        exec: function(cmd, arg){
            this.$refs.content.focus();
            document.execCommand(cmd, false, arg||"");

            this.$nextTick(() => {
                this.$emit("html", this.$refs.content.innerHTML);
            });
        },

        onDocumentClick (e) {
            for (let i = 0; i < this.btnsWithDashboards.length; i++) {
                const btn = this.$refs[`btn-${this.btnsWithDashboards[i].name}`][0];
                if (btn && btn.showDashboard && !btn.$el.contains(e.target))
                    btn.closeDashboard();
            }
        },

        onInput: debounce(function (e){
            this.$emit("html", this.$refs.content.innerHTML);
        }, 300),

        syncHTML () {
            if (this.html !== this.$refs.content.innerHTML)
                this.innerHTML = this.html;
        },
        
        setHideModel(json) {
        	this.hideModules = json;
        }
    },

    mounted () {
        this.unwatch = this.$watch("html", this.syncHTML, { immediate: true});

        this.$refs.content.addEventListener("input", this.onInput);
        document.addEventListener("click", this.onDocumentClick);

        bus.on("exec", this.exec);
    },

    beforeDestroy () {
      this.unwatch();
    }
}
</script>

<style lang="stylus">
$offwhite = #172422
$buttonWidth = 8vw
$buttonHeight = 32px
$svgSize = 16px

.editr
    border 1px solid #193d37
    background #0a0f0e;
    width 100%

.editr--toolbar
    background $offwhite
    border-bottom 1px solid darken($offwhite, 7.5%)
    position relative
    display flex
    height $buttonHeight

    a
        display inline-block
        width $buttonWidth
        max-width 32px
        height $buttonHeight
        color #d0d0d0
        fill #d0d0d0
        cursor pointer
        text-align center
        line-height 1

        &:hover
            background-color #193d37

        &:active
            background-color #193d37

        svg
            width $svgSize
            height $svgSize
            margin (($buttonHeight - $svgSize)/2) auto

            path
                fill inherit

        &.vw-btn-separator
            width 1px
            margin 0 10px

            &:hover
                background initial
                cursor default

            i
                border-left 1px solid #535353
                height 100%
                position absolute
                width 1px

    .dashboard
        width 100%
        position absolute
        top 32px
        left 0
        text-align left
        padding 0.5rem 1rem
        background #172422
        border 0px solid#193d37
        input
        	background #172422
        	border 1px solid #193d37
        button
        	background #136c5e	
        	border 1px solid #193d37
        	border-radius 5px
        	&:hover
        		background #168674		
		.vue-dropzone
			background #172422
			border 2px solid #193d37
		.vue-dropzone:hover
			background #193d37


.editr--content
    min-height 150px
    padding 0.75rem 0.5rem
    line-height 1.33
    font-family inherit
    color inherit

    &[contenteditable=true]:empty:before
        content: attr(placeholder);
        color alpha(black, 0.3)
        display: block; /* For Firefox */

    img
        max-width 100%

    table
        width 100%

        th
            text-align left

    &:focus
        outline 0

    ul, ol
        li
            list-style-position: inside;

</style>
