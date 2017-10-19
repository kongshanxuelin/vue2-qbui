<template >
  <div>
    <div>
      <span class="sl-label">输入框：</span>
      <div class="m20">
      <input class="sl-input" placeHolder="普通输入框" />
      </div>
      <div class="m20">
      <input class="sl-input" disabled placeHolder="灰化的" />
      </div>
      <div class="m20">
      <input class="sl-input date" placeHolder="日期输入框" />
      </div>
      <div class="m20">
      <input class="sl-input search" placeHolder="搜索输入框"  />
      </div>
    </div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code"><code class="html"></code></pre>
    </sl-collapse>
    
  </div>
</template>

<script>
export default {
  name: 'sumslack_input',
  data(){
  	return {
  		code:`<input class="sl-input"  placeHolder="普通输入框" />
<input class="sl-input" disabled placeHolder="灰化的" />
<input class="sl-input date" placeHolder="日期输入框"  />
<input class="sl-input search" placeHolder="搜索输入框"  />`
  	}
  },
  methods:{
	}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
   .autocomplete{
		float:right;
   }
   .clearfix{
   	clear:both;
   	margin:0;
   	padding:0;
   }
  .hello{
    padding:20px;
  }
	div.m20{
	  margin:20px;
	}
</style>
