<template >
  <div>
    <div class="m20">
    	<div style="margin-bottom: 8px;">
      <span class="sl-label">Tabs</span>
      <a class="sl-btn primary" href="#第三页">选中第三页</a>
      </div>
      <div class="descripton">
		    <sl-tabs direction="vertical">
		        <sl-tab name="首页">
		            First tab content
		        </sl-tab>
		        <sl-tab name="第二页" prefix="<i class='icon sumscope-icon icon-apple'></i>&nbsp;" suffix="<span class='suffix'>4</span>">
		            Second tab content
		        </sl-tab>
		        <sl-tab name="第三页">
		            Third tab content
		        </sl-tab>
		    </sl-tabs>
      </div>
    </div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code"><code class="html"></code></pre>
    </sl-collapse>
    
  </div>
</template>

<script>
export default {
  name: 'sumslack_tabs',
  data(){
  	return {
  		code:`<sl-tabs>
<sl-tab name="首页">
    First tab content
</sl-tab>
<sl-tab name="第二页" prefix="<i class='icon sumscope-icon icon-apple'></i>" suffix="<span class='suffix'>4</span>>
    Second tab content
</sl-tab>
<sl-tab name="第三页">
    Third tab content
</sl-tab>
</sl-tabs>`
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
