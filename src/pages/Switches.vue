<template >
  <div>
    <div class="m20" style="display: flex;align-content: space-between;">
      <div><span class="sl-label">背景音乐允许后台播放：</span></div>
      <div style="flex:1;text-align:right;padding-right:20px;"><sl-switcher v-model="enabled"></sl-switcher></div>
    </div>
    <div class="m20">
    	<span class="sl-label2">选择结果：{{enabled}}</span>
    </div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code"><code class="html"></code></pre>
    </sl-collapse>
    
  </div>
</template>

<script>
export default {
  name: 'sumslack_Switches',
  data(){
  	return {
  		enabled:false,
  		code:`<sl-switcher v-model="enabled"></sl-switcher>`
  	}
  },
  methods:{
	}
 }
</script>
<style lang="less" >
	div.m20{
	  margin:20px;
	}
</style>
