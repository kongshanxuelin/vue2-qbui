<template >
  <div class="m20">
   <sl-pull class="page" :style="'height:'+height+'px'"
	      	@on-pullup='onPullup' 
	      	@on-pulldown='onPulldown'>
			      <ul>
				      <li :key="index" v-for="(item, index) in users.result" style="padding:12px;">
                  <img :src="item.avator" style="width:60px;height:60px;border-radius:50%;margin-right:15px;" />
                  <span class="sl-label-yellow">{{item.nickname}}</span>
                  与 <span class="sl-label2">{{item.modify_time | formatDate}}</span> 登录
				      </li>
				    </ul>
		    </sl-pull>
  </div>
</template>

<script>
export default {
  name: 'sumslack_label',
  data(){
  	return {
  	  height:400,
      P:1,
  		users:{
        first:1,hasNext:false,hasPre:false,nextPage:1,pageNo:1,pageSize:25,result:[],"totalCount":0,"totalPages":0
      }
  	}
  },
  filters: {

        formatDate(time) {
          function padLeftZero(str) {
            return ('00' + str).substr(str.length);
          }
          function formatDate(date, fmt) {
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
                }
                let o = {
                    'M+': date.getMonth() + 1,
                    'd+': date.getDate(),
                    'h+': date.getHours(),
                    'm+': date.getMinutes(),
                    's+': date.getSeconds()
                };
                for (let k in o) {
                    if (new RegExp(`(${k})`).test(fmt)) {
                        let str = o[k] + '';
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
                    }
                }
                return fmt;
            }
            var date = new Date(time);
            return formatDate(date, "yyyy-MM-dd hh:mm");
        }
  },
  created(){
      this.height = window.screen.availHeight - 300;
      this.p = 1;
      this.listIt();
  },
  methods:{
    listIt(cb){
        this.$http.get(this.Config.url + "stat/userList.jhtml?p="+this.p).then(json => {
          if(this.users.result.length>0){
            this.users.result = this.users.result.concat(this.users.result);
          }
          this.users = json.data;
          if(typeof(cb) === "function"){
            cb(json);
          }
        })
      },
  		onPullup(finshCallback) {
	      if(this.users.hasNext){
          this.p = this.users.nextPage;
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
