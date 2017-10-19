<template>
  <div class="hello">
    <h1>组合控件 </h1>
    <div>
      <span class="sl-label">FlipCard</span>
      <div class="descripton">
      	<sl-card :frontType="'text'"
      :frontTitle="front.title"
      :frontData="front.graphData"
      :backTitle="back.title"
      :backData="back.message" />
      </div>
    </div>
    <div>
      <span class="sl-label">Tabs</span>
      <div class="descripton">
		    <sl-tabs>
		        <sl-tab name="首页">
		            First tab content
		        </sl-tab>
		        <sl-tab name="第二页">
		            Second tab content
		        </sl-tab>
		        <sl-tab name="第三页">
		            Third tab content
		        </sl-tab>
		    </sl-tabs>
      </div>
    </div>
    <div>
      <span class="sl-label">Pull</span>
      <div style="border:1px solid #004444">
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
    </div>
    <div>
      <span class="sl-label">TreeView</span>
      <p class="descripton">xxxx</p>
    </div>
    <div>
      <a class="sl-label">DataTable</a>
      <div style="border:1px solid #004444;padding:10px;">
		    <!--api-url="https://vuetable.ratiw.net/api/users"-->

				<sl-table ref="vuetable"
			    api-url="https://vuetable.ratiw.net/api/users"
			    :fields="[{name:'name',sortField:'name'}, {name:'email',sortField:'email'}, 'birthdate']"
			    pagination-path=""
			    @vuetable:pagination-data="onPaginationData"
			    wrapper-class="vuetable-wrapper"
			    table-wrapper=".vuetable-wrapper"
			  ></sl-table>
			  <sl-table-pagination ref="pagination"
		      @vuetable-pagination:change-page="onChangePage"
		    ></sl-table-pagination>
      </div>
    </div>
    <div>
      <span class="sl-label">Chart</span>
      <p class="descripton">xxxx</p>
    </div>
    <p>表单复合控件</p>
    <div>
      <span class="sl-label">HtmlEditor</span>
      <p class="descripton">xxxx</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'page2',
  data () {
    return {
    	items: [2,3,4,5,1,2,3,4,5,2,3,4,5,1,2,3,4,5,2,3,4,5,2,3,4,5],
    	tabList : [{name:'name1'},{name:'name2', disabled: true},{name:'name3'}],
      tabName: 'name1',
    	front: {
        title: 'Daily Conversion Value',
        graphData: "this is test",
      },
      back: {
        title: 'Monthly Summary',
        message: 'Your average daily conversion value for this month is <b>50.4$</b>. It is below the average of the last six months.',
      },
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
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
	    },
	    
	    onPaginationData (paginationData) {
	      this.$refs.pagination.setPaginationData(paginationData)
	    },
	    onChangePage (page) {
	      this.$refs.vuetable.changePage(page)
	    },
  }
}
</script>

<!--Pull-->
<style scoped rel="stylesheet/less" lang="less">
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
	/*scrollbar start*/
.iScrollVerticalScrollbar {
  position: absolute;
  z-index: 9999;
  width: 2px;
  bottom: 2px;
  top: 2px;
  right: 2px;
  overflow: hidden;
}

.iScrollVerticalScrollbar.iScrollBothScrollbars {
  bottom: 18px;
}

.iScrollIndicator {
  position: absolute;
  background: #999;
  border-radius: 6px;
  opacity: .8;
}

.iScrollVerticalScrollbar .iScrollIndicator {
  width: 100%;
  background: #999;
}
/*scrollbar end*/


/* Loading Animation: */
        .vuetable-wrapper {
            opacity: 1;
            position: relative;
            filter: alpha(opacity=100); /* IE8 and earlier */
        }
        .vuetable-wrapper.loading {
          opacity:0.4;
           transition: opacity .3s ease-in-out;
           -moz-transition: opacity .3s ease-in-out;
           -webkit-transition: opacity .3s ease-in-out;
        }
        .vuetable-wrapper.loading:after {
          position: absolute;
          content: '';
          top: 40%;
          left: 50%;
          margin: -30px 0 0 -30px;
          border-radius: 100%;
          -webkit-animation-fill-mode: both;
                  animation-fill-mode: both;
          border: 4px solid #000;
          height: 60px;
          width: 60px;
          background: transparent !important;
          display: inline-block;
          -webkit-animation: pulse 1s 0s ease-in-out infinite;
                  animation: pulse 1s 0s ease-in-out infinite;
        }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../assets/css/core.less";
  @import "../assets/css/base.less";
  h1, h2 {
    font-weight: normal;
  }

</style>
