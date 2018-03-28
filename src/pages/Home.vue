<template >
  <div>
  	<h2>统计数据</h2>
    <div class="m20">
    		<span class="sl-label2">今日用户数：</span><span class="sl-label-yellow m15">{{stat.tUserNum}}</span>
    		<span class="sl-label2">今日任务数：</span><span class="sl-label-yellow m15">{{stat.tTaskNum}}</span>
    		<span class="sl-label2">今日计划数：</span><span class="sl-label-yellow m15">{{stat.tTodoNum}}</span>
    </div>
		<div class="m20">
    		<span class="sl-label2">总用户数：</span><span class="sl-label-yellow m15">{{stat.userNum}}</span>
    		<span class="sl-label2">总任务数：</span><span class="sl-label-yellow m15">{{stat.taskNum}}</span>
    		<span class="sl-label2">总计划数：</span><span class="sl-label-yellow">{{stat.todoNum}}</span>
    </div>
  	
  </div>
</template>

<script>
export default {
  name: 'sumslack_label',
  data(){
  	return {
				stat:{tTaskNum:0,tTodoNum:0,tUserNum:0,taskNum:0,todoNum:0,userNum:0}
  	}
	},
	created(){
			this.$http.get(this.Config.url + "stat/stat.jhtml").then(json => {
				this.stat = json.data;
			})
	},
  methods:{
	}
 }
</script>

<style lang="less" scoped>
  h2 {
  	color:orange;
  	font-size: 16px;
  }
	div{
	  margin:20px;
	}
	ul {
		margin:0;
		padding:0;
	}
	li{
		list-style-type: none;
		margin-bottom: 10px;
	}
	.code {
		display: inline-block;padding:4px;background-color: #193d37;
	}
	.m15{
		margin-right: 15px;
	}
</style>
