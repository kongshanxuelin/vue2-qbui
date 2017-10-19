<template >
  <div>
    <div>
      <span class="sl-label">调整大小：
      	<button class="sl-btn" @click="setIconSet(1)">+</button>
      	<button class="sl-btn" @click="setIconSet(-1)">-</button>
      	&nbsp;&nbsp;图标颜色：	<button class="sl-btn" @click="setIconColor()">Color</button>
      	<span>{{thisIcon}}</span>
      </span>
	      <div style="margin:20px 10px 10px 10px;display: flex;flex-wrap: wrap;" id="icons">
		      <div v-for="color in iconItems" v-tooltip="'icon sumscope-icon '+color">
		      	<i @click="doCopy('icon sumscope-icon '+color)" :style="{ 'fontSize': iconSize, color: iconColor }" :class="'icon sumscope-icon '+color"></i>
		      </div>
	      </div>
    </div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code"><code class="html"></code></pre>
    </sl-collapse>
  </div>
</template>

<script>
export default {
  name: 'sumslack_iconfont',
  data(){
  	return {
  		iconSize: '24px',
  		iconColor: '#ff7d00',
  		thisIcon:"",
  		iconItems:["icon-android","icon-android-o","icon-apple-o","icon-api","icon-apple","icon-arrow-down","icon-area-chart",
  							 "icon-appstore-o","icon-appstore","icon-backward","icon-arrow-right","icon-arrow-up","icon-arrow-left","icon-arrows-alt",
  							 "icon-bank","icon-bar-chart","icon-bars-chart","icon-bell","icon-bars","icon-barcode","icon-bulb",
  							 "icon-book","icon-calculator","icon-calendar","icon-camera-o","icon-camera","icon-caret-down","icon-caret-right",
  							 "icon-caret-left","icon-caret-up","icon-check-circle-o","icon-car","icon-check","icon-check-circle","icon-check-square-o",
  							 "icon-check-square","icon-close-circle","icon-chrome","icon-close-square-o","icon-clock-circle","icon-clock-circle-o","icon-close",
  							 "icon-cloud-o","icon-cloud-download-o","icon-cloud-download","icon-close-square","icon-cloud-upload-o","icon-close-circle-o","icon-cloud-upload",
  							 "icon-cloud","icon-code-o","icon-compass","icon-coffee","icon-code","icon-copy","icon-contacts",
  							 "icon-copyright","icon-credit-card","icon-database","icon-desktop","icon-delete","icon-customer-service","icon-dislike-o",
  							 "icon-dislike","icon-disconnect","icon-double-left","icon-double-right","icon-dot-chart","icon-down-circle","icon-down-square",
  							 "icon-down-square-o","icon-down","icon-down-circle-o","icon-edit","icon-ellipsis","icon-download","icon-enter",
  							 "icon-enviroment","icon-enviroment-o","icon-exception","icon-exclamation","icon-export","icon-eye-o","icon-eye",
					  		"icon-file-add","icon-file-excel","icon-file-jpg","icon-file-pdf","icon-file-text","icon-file-unknown","icon-file-word",
					  		"icon-file-ppt","icon-file","icon-filter","icon-flag","icon-folder-add","icon-fast-forward","icon-folder-open",
					  		"icon-fast-backward","icon-forward","icon-folder","icon-frown-o","icon-gift","icon-fork","icon-frown",
					  		"icon-global","icon-hdd","icon-heart-o","icon-hourglass","icon-heart","icon-home","icon-idcard",
					  		"icon-ie","icon-inbox","icon-info-cirlce-o","icon-info-cirlce","icon-key","icon-info","icon-layout",
					  		"icon-left-circle","icon-laptop","icon-left-circle-o","icon-left-square","icon-left-square-o","icon-left","icon-line-chart",
  							"icon-like-o","icon-like","icon-link","icon-loading--quarters","icon-loading","icon-logout","icon-login",
  							"icon-man","icon-mail","icon-lock","icon-medicine-box","icon-meh-o","icon-meh","icon-menu-unfold",
  							"icon-menu-fold","icon-message","icon-minus-circle","icon-minus-circle-o","icon-minus","icon-minus-square","icon-mobile",
  							"icon-minus-square-o","icon-notification","icon-paper-clip","icon-pause-circle","icon-pause-circle-o","icon-pause","icon-pay-circle-o",
  							"icon-phone","icon-pie-chart","icon-picture","icon-play-circle-o","icon-pay-circle","icon-play-circle","icon-plus-square-o",
  							"icon-plus","icon-plus-circle","icon-plus-square","icon-plus-circle-o","icon-poweroff","icon-printer","icon-pushpin-o",
  							"icon-pushpin","icon-qrcode","icon-question-circle-o","icon-question-circle","icon-question","icon-reload","icon-red-envelope",
  							"icon-retweet","icon-right-circle-o","icon-right-circle","icon-right-square-o","icon-right","icon-right-square","icon-rollback",
  							"icon-rocket","icon-safety","icon-scan","icon-save","icon-schedule","icon-search","icon-shake",
  							"icon-select","icon-share-alt","icon-shop","icon-smile-o","icon-setting","icon-smile","icon-shrink",
  							"icon-skin","icon-shopping-cart","icon-sound","icon-solution","icon-step-backward","icon-star","icon-step-forward",
  							"icon-star-o","icon-switcher","icon-swap-right","icon-swap-left","icon-tablet","icon-sync","icon-swap",
  							"icon-tags-o","icon-tag","icon-tag-o","icon-tags","icon-to-top","icon-team","icon-trademark",
  							"icon-trophy","icon-unlock","icon-tool","icon-up-circle-o","icon-up-circle","icon-up-square","icon-up",
  							"icon-upload","icon-up-square-o","icon-usb","icon-user-add","icon-user","icon-user-delete","icon-usergroup-add",
  							"icon-verticle-left","icon-usergroup-delete","icon-verticle-right","icon-wallet","icon-video-camera","icon-woman","icon-windows",
  							"icon-wifi","icon-windows-o","icon-exclamation-circle","icon-exclamation-circle-o","icon-exclamation-triangle","icon-exclamation-triangle1","icon-maximize",
  							"icon-popup","icon-destroy","icon-import-excel","icon-export-excel","icon-urgent","icon-checkbox-partselecte","icon-checkbox-disabled",
  							"icon-checkbox-selected","icon-radiobutton-selected","icon-radiobutton-unselect","icon-checkbox-unselected","icon-yong-selected","icon-nc-normal","icon-gai-normal",
  							"icon-gai-selected","icon-nc-selected","icon-yong-normal"],
  		code:`<i style="font-size:12px;color:orange;" class="icon sumscope-icon xxxx"></i>`
  	}
  },
  methods:{
  	mounted(){
  		console.log("create....");
  	},
  	setIconSet: function (i) {
      this.iconSize = this.iconSize.replace(/px/g, '')
      this.iconSize = (parseInt(this.iconSize) + i * 4) + 'px'
    },
    setIconColor: function () {
      this.iconColor = this.randColor();
    },
    randColor:function(){
    	return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6); 
    },
    doCopy(c){
    	this.thisIcon = c;
    }
	}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
   i{
   	margin:10px;
   }
</style>
