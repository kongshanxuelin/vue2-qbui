<template >
  <div>
    <div>
      <sl-pull class="page" 
	      	@on-pullup='onPullup' 
	      	@on-pulldown='onPulldown'>
			      <ul>
				      <li :key="index" v-for="(item, index) in items">
				        # item {{ index }} 
				      </li>
				    </ul>
		    </sl-pull>
    </div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code"><code class="html"></code></pre>
    </sl-collapse>
  </div>
</template>

<script>
export default {
  name: 'sumslack_pullrefresher',
  data(){
  	return {
  		items: [2,3,4,5,1,2,3,4,5,2,3,4,5,1,2,3,4,5,2,3,4,5,2,3,4,5],
  		code:`<sl-pull class="page" @on-pullup='onPullup' @on-pulldown='onPulldown'>
<ul>
  <li :key="index" v-for="(item, index) in items">item{{ index }}</li>
</ul>
</sl-pull>`
  	}
  },
  methods:{
  		onPullup(finshCallback) {
	      setTimeout(()=>{
	        this.items=this.items.concat([6,6,6,6,6,6,6,6,6,6,6])
	        finshCallback();//finish refreshing state
	      },3000);
	    },
	
	    onPulldown(finshCallback) {
	      setTimeout(()=>{
	        this.items=[9,9,9,9,9,9,9,9,9,9,9,9,9,9]
	        finshCallback();//finish refreshing state
	      },3000);
	    }
	}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
  .page{
	  height: 200px;
	  position: relative;
	  overflow: auto;
	  /* Prevent native touch events on Windows */
	  -ms-touch-action: none;
	  /* Prevent the callout on tap-hold and text selection */
	  -webkit-touch-callout: none;
	  user-select: none;
	  text-size-adjust: none;
	}
	div.m20{
	  margin:20px;
	}
</style>
