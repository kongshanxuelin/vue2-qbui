<template >
  <div>
    <div id="label">
    	<span class="sl-label">文字：</span>
    	<span>默认文字</span>
      <span class="sl-label2">次要的说明</span>
      <span class="sl-label-yellow">普通</span>
      <span class="sl-label-white">强调文字</span>
      <span class="sl-label-disabled">灰化的文字</span>
    </div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="codeLabel"><code class="html"></code></pre>
    </sl-collapse>
    <div>
      <span class="sl-label">链接：</span>
        <a href="/">Go Text</a>
        <a disabled href="#">Go Button</a>
        <a class="strong"  href="/tooltip">Go Tooltip</a>
    </div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="codeLink"><code class="html"></code></pre>
    </sl-collapse>
  </div>
</template>

<script>
export default {
  name: 'sumslack_label',
  data(){
  	return {
  		codeLabel:`<span>默认文字</span>
<span class="sl-label">文字：</span>
<span class="sl-label2">次要的说明</span>
<span class="sl-label-yellow">普通</span>
<span class="sl-label-white">强调文字</span>
<span class="sl-label-disabled">灰化的文字</span>`,
			codeLink:`<a href="/">Go Text</a>
<a disabled href="#">Go Button</a>
<a class="strong"  href="/tooltip">Go Tooltip</a>`
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
	div.hello > div{
	  margin:20px;
	}
</style>
