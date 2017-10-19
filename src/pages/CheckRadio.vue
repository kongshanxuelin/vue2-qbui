<template >
  <div style="display: flex;flex-direction: column;">
    <div class="m20">
      <span >你最爱的水果：</span>
      <sl-checkbox value="苹果" v-model="checkboxValue" checked>苹果</sl-checkbox>
      <sl-checkbox value="火龙果" v-model="checkboxValue">火龙果</sl-checkbox>
      <sl-checkbox value="牛油果" v-model="checkboxValue">牛油果</sl-checkbox>
    </div>
    <span class="sl-label2">Selected:{{checkboxValue}}</span>
    <div class="m20">
      <span>您最想念的时光：</span>
      <sl-radio value="missBefore" v-model="radioValue" checked>婚前</sl-radio>
      <sl-radio value="missAfter" v-model="radioValue">婚后</sl-radio>
    </div>
    <span class="sl-label2">Selected:{{radioValue}}</span>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code"><code class="html"></code></pre>
    </sl-collapse>
    
  </div>
</template>

<script>
export default {
  name: 'sumslack_cr',
  data(){
  	return {
  		checkboxValue: [],
      radioValue: '',
  		code:`<sl-checkbox value="苹果" v-model="checkboxValue" checked>苹果</sl-checkbox>
<sl-checkbox value="火龙果" v-model="checkboxValue">火龙果</sl-checkbox>
<sl-checkbox value="牛油果" v-model="checkboxValue">牛油果</sl-checkbox>
<sl-radio value="missBefore" v-model="radioValue" checked>婚前</sl-radio>
<sl-radio value="missAfter" v-model="radioValue">婚后</sl-radio>
`
  	}
  },
  methods:{
	}
 }
</script>

<style lang="less" >
	div.m20{
	  margin:10px;
	}
</style>
