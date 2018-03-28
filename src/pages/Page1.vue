<template >
  <div class="m20">
    <div>
      <sl-pull class="page" :style="'height:'+height+'px'"
	      	@on-pullup='onPullup' 
	      	@on-pulldown='onPulldown'>
			      <ul>
				      <li :key="index" v-for="(item, index) in tasks.result" style="padding:12px;">
				        <div class="flex-column">
                  <div class="flex-item-8"><span class="sl-label2">{{item.nick}}</span> <span class="sl-label-yellow" v-if="item.tag!=''">{{item.tag}}</span> </div>
                  <div class="flex-item-16" style="text-align:right"><span class="sl-label2">{{item.dt}}</span> </div>
                </div>
				        <div class="flex-row">{{ item.task_content }} </div>           
				      </li>
				    </ul>
		    </sl-pull>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sumslack_pullrefresher',
  data(){
  	return {
      height:400,
      P:1,
  		tasks:{
        first:1,hasNext:false,hasPre:false,nextPage:1,pageNo:1,pageSize:25,result:[],"totalCount":2005,"totalPages":81
      }
  	}
  },
  created(){
      this.height = window.screen.availHeight - 300;
      this.p = 1;
      this.listIt();
  },
  methods:{
      listIt(cb){
        this.$http.get(this.Config.url + "stat/taskList.jhtml?p="+this.p).then(json => {
          if(this.tasks.result.length>0){
            this.tasks.result = this.tasks.result.concat(this.tasks.result);
          }
          this.tasks = json.data;
          if(typeof(cb) === "function"){
            cb(json);
          }
        })
      },
  		onPullup(finshCallback) {
	      if(this.tasks.hasNext){
          this.p = this.tasks.nextPage;
        }
        this.listIt(function(){finshCallback();});
	    },
	
	    onPulldown(finshCallback) {
        this.p = 1;
        this.listIt(function(){finshCallback();});
	    }
	}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .page{
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
