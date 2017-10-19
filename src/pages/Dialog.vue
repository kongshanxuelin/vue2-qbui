<template >
  <div>
    <div style="display: flex;flex-direction: column;">
			  <button class="sl-btn" @click="alert">alert</button>
			  <button class="sl-btn default" @click="confirm">confirm</button>
			  <button class="sl-btn warning" @click="prompt">prompt</button>
			  <button class="sl-btn" @click="dialog">普通对话框</button>
    </div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code"><code class="javascript"></code></pre>
    </sl-collapse>
    
  </div>
</template>

<script>
export default {
  name: 'sumslack_dialog',
  data(){
  	return {
  		code:`this.$modal.alert("alert!!!");
this.$modal.confirm("yes <strong style='color:yellow'>or</strong> no?",function(){
	alert("click ok");
});
this.$modal.prompt({msg:"请输入电话：",value:12},function(ret){
	alert(ret);
});
this.$modal.dialog("测试对话框",{text:"<b>this is html</b>",buttons:[{title:"OK"}]})
`
  	}
  },
  methods:{
  	alert () {
      this.$modal.alert("alert!!!");
    },
    confirm(){
    	this.$modal.confirm("yes <strong style='color:yellow'>or</strong> no?",function(){
    		alert("click ok");
    	});
    },
    prompt(){
    	this.$modal.prompt({msg:"请输入电话：",value:12},function(ret){
    		alert(ret);
    	});
    },
    dialog(){
    	this.$modal.dialog("测试对话框",{text:"<b>this is html</b>",buttons:[{title:"OK"}]})
    }
	}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scope>
	div.m20{
	  margin:20px;
	}
	button{
		margin-top:10px;
	}
</style>
