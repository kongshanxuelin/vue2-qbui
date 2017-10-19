<template >
  <div>
    <div>
      <span class="sl-label">按钮：</span>
      <div class="bdiv">
	      <button class="sl-btn" @click="callIt({a:1})">默认按钮</button>
	      <button class="sl-btn default" @click="callIt({a:1})">Default按钮</button>
	      <button class="sl-btn warning" @click="callIt({a:1})">Warning按钮</button>
	      <button class="sl-btn fatal" @click="callIt({a:1})">Fatal按钮</button>
	      <button class="sl-btn" disabled @click="callIt({a:1})">灰化按钮</button>
      </div>
    </div>
    <sl-collapse title="显示源码">
    <pre v-highlightjs="codeButton"><code class="html"></code></pre>
    </sl-collapse>
  </div>
</template>

<script>
export default {
  name: 'sumslack_button',
  data(){
  	return {
  		codeButton:`<button class="sl-btn" @click="callIt({a:1})">默认按钮</button>
<button class="sl-btn default" @click="callIt({a:1})">Default按钮</button>
<button class="sl-btn warning" @click="callIt({a:1})">Warning按钮</button>
<button class="sl-btn fatal" @click="callIt({a:1})">Fatal按钮</button>
<button class="sl-btn" disabled @click="callIt({a:1})">灰化按钮</button>`
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
   .bdiv{
   	display:flex;flex-direction: column;
   }
   .bdiv > button {
   	margin-top:10px;
   }
</style>
