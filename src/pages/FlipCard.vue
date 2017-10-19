<template >
  <div>
    <sl-card :frontType="'text'"
      :frontTitle="front.title"
      :frontData="front.message"
      :backTitle="back.title"
      :backData="back.message" />
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code"><code class="html"></code></pre>
    </sl-collapse>
    <div><span class="sl-label2">注：仅在PC端有效果</span></div>
  </div>
</template>

<script>
export default {
  name: 'sumslack_flipcard',
  data(){
  	return {
  		front: {
        title: '每日提醒',
        message: "移动到这里查看详情",
      },
      back: {
        title: '明细',
        message: `我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友。 —— 蒙田`,
      },
  		code:`<sl-card :frontType="'text'"
:frontTitle="front.title"
:frontData="front.message"
:backTitle="back.title"
:backData="back.message" />`
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
