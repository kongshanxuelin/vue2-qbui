<template>
  <div id="app">
  	<div class="header">
        <img :src="logoUrl" class="logo"></img>
        <span class="title sl-label2">商务工作记事册后台监控</span>
        <div>
            <router-link :to="{name:'home'}" exact>
              Dashborad
            </router-link>
            <router-link :to="{name:'page1'}">
              操作日志
            </router-link>
            <router-link :to="{name:'page2', params:{id:12}}">
              用户列表
            </router-link>
      </div>
    </div>
    <div class="content">
		  <transition name="slide-fade">
		    <router-view></router-view>
		  </transition>
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
