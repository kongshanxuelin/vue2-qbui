<template >
  <div>
    <div>
			<span v-tooltip="'this is test'">移动到我上面试试</span>
			<span v-tooltip="{content:'this is other test',placement: 'bottom-center',offset:50}">自定义Tip</span>
    </div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code"><code class="html"></code></pre>
    </sl-collapse>
  </div>
</template>

<script>
export default {
  name: 'sumslack_tooltip',
  data(){
  	return {
  		code:`<span v-tooltip="'this is test'">移动到我上面试试</span>
<span v-tooltip="{content:'this is other test',placement: 'bottom-center',offset:50}">自定义Tip</span>`
  	}
  },
  methods:{
  	callIt(a){
  		alert(JSON.stringify(a));
  	}
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
	div.hello > div{
	  margin:20px;
	}
</style>
