<template>
  <div id="app">
  	<div class="header">
        <img :src="logoUrl" class="logo"></img>
        <span class="title sl-label2">
        	QB风格组件库，支持QB浏览器,IE10+，Chrome，FF等现代浏览器;
        	<button @click="showMenu" class="sl-btn primary" v-if="menuIcon == 'right'">显示菜单</button>
        </span>
    </div>
    <div class="flex-column flex-center flex-middle">
    	  <div class="flex-item-24" style="text-align:center">
					<span class="sl-label-yellow">Hello World </span>
					<i style="color:orange" class="icon sumscope-icon icon-rocket"></i>
				</div>
    </div>
    <v-dialog :clickToClose="false" />
  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
  	return {
			logoUrl: 'http://h5.sumslack.com/logo57.png'
		}
  },
  created(){
  	this.height = window.screen.availHeight - 240;
  },
  methods:{
	
  }
}
</script>

<style lang="less">
  @import "./assets/css/core.less";
  @import "./assets/css/base.less";
  @import "./assets/fonts/iconfont.css";
  .header{
    margin-top:20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .header .title {
    padding:20px;
  }
</style>
