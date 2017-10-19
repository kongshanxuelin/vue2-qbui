<template >
  <div>
    <div>
      <div class="flex-row flex-middle flex-center" style="width:200px;height:200px;border:1px solid #006600;" @contextmenu.prevent="$refs.ctxMenu.open">
			     <div class="flex-item-18">这里点击鼠标右键试试</div>
			     <div class="flex-item-18" style="margin-top:10px;">
				    <a class="sl-btn" @mousedown="popMenu($event)">左键出现菜单</a>
			     	<sl-menu :pop-items="popItems" :mouse="mousePosition" @ListItemClick="list_item_click">
				    </sl-menu>
			     </div>
			</div>
			<sl-ctxmenu id="context-menu" ref="ctxMenu">
			  <li data-id="menu1" @click="doClick">option 1</li>
			  <li data-id="menu2" class="disabled">option 2</li>
			  <li class="ctx-divider"></li>
			  <li data-id="menu3" @click="doClick">option 3</li>
			</sl-ctxmenu>
    </div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code"><code class="html"></code></pre>
    </sl-collapse>
    
    
      
  </div>
</template>

<script>
export default {
  name: 'sumslack_menu',
  data(){
  	return {
  		popItems:[
        {
          class:'icon sumscope-icon icon-android',
          txt:'菜单名有点长'
        },
        {
          class:'icon sumscope-icon icon-android',
          txt:'菜单2'
        },
        {
          class:'icon sumscope-icon icon-android',
          txt:'菜单3'
        }
      ],
      mousePosition:['close'],
  		code:`<div class="flex-row flex-middle flex-center" style="width:200px;height:200px;border:1px solid #006600;" @contextmenu.prevent="$refs.ctxMenu.open">
  <div class="flex-item-18">这里点击鼠标右键试试</div>
</div>
<sl-ctxmenu id="context-menu" ref="ctxMenu">
  <li data-id="menu1" @click="doClick">option 1</li>
  <li data-id="menu2" class="disabled">option 2</li>
  <li class="ctx-divider"></li>
  <li data-id="menu3" @click="doClick">option 3</li>
</sl-ctxmenu>`
  	}
  },
  methods:{
  	doClick(e){
  		this.$modal.alert("click:"+e.target.dataset.id);
  	},
  	list_item_click(it){
      this.$modal.alert('click : ' + it);
      this.mousePosition = ['close'];
	   },
	  popMenu(e){
	   	let self = this;
	    e.preventDefault();
	    if(e.button ===0){
	      let x = e.layerX + 100;
	      let y = e.layerY + 150;
	      self.mousePosition = [x, y];
	    }
	    else if(e.button ===2){
	      self.mousePosition = ['close'];
	    }
	  }
	}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
	div.m20{
	  margin:20px;
	}
</style>
