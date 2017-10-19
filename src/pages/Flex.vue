<template >
  <div>
    <p>基于24格栅格布局</p>
    <div class="demo demo1">
			<div class="flex-column">
				<div class="flex-item-24">flex-item-24</div>
				<div class="flex-item-12">flex-item-12</div>
				<div class="flex-item-12">flex-item-12</div>
				<div class="flex-item-8">flex-item-8</div>
				<div class="flex-item">flex-item 自动填充宽度</div>
				<div class="flex-item-8">flex-item-8</div>
				<div class="flex-item-8">flex-item-8</div>
				<div class="flex-item-8 flex-offset-8">flex-item-8 , flex-offset-8</div>
			</div>
		</div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code1"><code class="html"></code></pre>
    </sl-collapse>
		<p>垂直水平居中，支持多行</p>
		<div class="demo flex-row flex-middle flex-center" style="min-height: 180px">
			<div class="flex-item-8" style="margin-bottom: 10px">无论是多行还是单行，都可以垂直居中</div>
			<div class="flex-item-8">无论是多行还是单行，都可以垂直居中</div>
		</div>
		<sl-collapse title="显示源码">
    	<pre v-highlightjs="code2"><code class="html"></code></pre>
    </sl-collapse>
    <p>flex-offset-* 向左偏移</p>
    <div class="demo flex-column"><div class="flex-item-8">flex-item-8</div></div>
    <div class="demo flex-column"><div class="flex-item-8 flex-offset-8">flex-item-8</div></div>
    <div class="demo flex-column"><div class="flex-item-8 flex-offset-16">flex-item-8</div></div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code3"><code class="html"></code></pre>
    </sl-collapse>
    <p>响应式布局</p>
    <div class="demo flex-column">
			<div class="flex-item-24">把浏览器窗口调小试试</div>
			<div class="flex-item flex-md-show" style="padding-left:10px;">低于992px的时候出现</div>
			<div class="flex-item flex-md-show" style="padding-left:10px;">低于992px的时候出现</div>
			<div class="flex-item flex-md-show" style="padding-left:10px;">低于992px的时候出现</div>
		</div> 
		<sl-collapse title="显示源码">
    	<pre v-highlightjs="code4"><code class="html"></code></pre>
    </sl-collapse>
		<p>多栏同高</p>
		<div class="demo flex-column">
			<div class="flex-item-8">sidebar</div>
			<div class="flex-item-16" style="height: 200px">main</div>
		</div>
		<sl-collapse title="显示源码">
    	<pre v-highlightjs="code5"><code class="html"></code></pre>
    </sl-collapse>
  </div>
</template>

<script>
export default {
  name: 'sumslack_input',
  data(){
  	return {
  		code1:`<div class="demo demo1">
<div class="flex-column">
	<div class="flex-item-24">flex-item-24</div>
	<div class="flex-item-12">flex-item-12</div>
	<div class="flex-item-12">flex-item-12</div>
	<div class="flex-item-8">flex-item-8</div>
	<div class="flex-item">flex-item 自动填充宽度</div>
	<div class="flex-item-8">flex-item-8</div>
	<div class="flex-item-8">flex-item-8</div>
	<div class="flex-item-8 flex-offset-8">flex-item-8 , flex-offset-8</div>
	</div>
</div>`,
		  code2:`<div class="flex-row flex-middle flex-center" style="min-height: 180px">
	<div class="flex-item-8" style="margin-bottom: 10px">无论是多行还是单行，都可以垂直居中</div>
	<div class="flex-item-8">无论是多行还是单行，都可以垂直居中</div>
</div>`,
		  code3:`<div class="demo flex-column"><div class="flex-item-8">flex-item-8</div></div>
<div class="demo flex-column"><div class="flex-item-8 flex-offset-8">flex-item-8</div></div>
<div class="demo flex-column"><div class="flex-item-8 flex-offset-16">flex-item-8</div></div>`,
		  code4:`<div class="demo flex-column">
	<div class="flex-item-24">把浏览器窗口调小试试</div>
	<div class="flex-item flex-md-show" style="padding-left:10px;">低于992px的时候出现</div>
	<div class="flex-item flex-md-show" style="padding-left:10px;">低于992px的时候出现</div>
	<div class="flex-item flex-md-show" style="padding-left:10px;">低于992px的时候出现</div>
</div> `,
		  code5:`<div class="demo flex-column">
	<div class="flex-item-8">sidebar</div>
	<div class="flex-item-16" style="height: 200px">main</div>
</div>`
  	}
  },
  methods:{
	}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
	.demo > .flex-column, .demo > .flex-row, .demo.flex-column, .demo.flex-row {
		background-image: linear-gradient(90deg, #172422 4.16666667%, #121a19 4.16666667%, #121a19 8.33333333%, #172422 8.33333333%, #172422 12.5%, #121a19 12.5%, #121a19 16.66666667%, #172422 16.66666667%, #172422 20.83333333%, #121a19 20.83333333%, #121a19 25%, #172422 25%, #172422 29.16666667%, #121a19 29.16666667%, #121a19 33.33333333%, #172422 33.33333333%, #172422 37.5%, #121a19 37.5%, #121a19 41.66666667%, #172422 41.66666667%, #172422 45.83333333%, #121a19 45.83333333%, #121a19 50%, #172422 50%, #172422 54.16666667%, #121a19 54.16666667%, #121a19 58.33333333%, #172422 58.33333333%, #172422 62.5%, #121a19 62.5%, #121a19 66.66666667%, #172422 66.66666667%, #172422 70.83333333%, #121a19 70.83333333%, #121a19 75%, #172422 75%, #172422 79.16666667%, #121a19 79.16666667%, #121a19 83.33333333%, #172422 83.33333333%, #172422 87.5%, #121a19 87.5%, #121a19 91.66666667%, #172422 91.66666667%, #172422 95.83333333%, #121a19 95.83333333%);
	}
	.demo.flex-column .flex-column, .demo.flex-row .flex-column, .demo.flex-column .flex-row, .demo.flex-row .flex-row {
		background: none;
	box-shadow: none;
	} 
	.demo [class*=flex-item] {
		background-color: rgba(72, 174, 255, 0.27);
		box-shadow: inset 1px 1px rgba(15, 35 ,35,0.15), inset -1px -1px rgb(15, 35, 35,0.15);
		line-height: 40px;
		text-align: center;
	}
	.demo1 [class^=flex-item] {
		line-height: 60px;
	}

	</style>
