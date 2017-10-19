<template >
  <div>
    <div class="flex-column">
    	<div class="flex-row flex-right" style="width:98%">
    	<div class="flex-item-24 " style="margin-bottom: 10px;">
    		 <button @click="settings('multi-sort')" class="sl-btn">多列排序(Ctrl+表头)</button>
    		 <button @click="showField" class="sl-btn">显示隐藏第二列</button>
    	</div>
    	</div>
      <div class="flex-item-24">
      	<sl-table ref="vuetable"
			    api-url="https://vuetable.ratiw.net/api/users"
			    :fields="[{name:'name',sortField:'name'}, {name:'email',sortField:'email'}, 'birthdate','__actions']"
			    pagination-path=""
			    :per-page="tbl['per-page']"
			    :multi-sort="tbl['multi-sort']"
			    multi-sort-key="ctrl"
			    @vuetable:pagination-data="onPaginationData"
			    wrapper-class="vuetable-wrapper"
			    table-wrapper=".vuetable-wrapper"
			  ></sl-table>
			  <sl-table-pagination ref="pagination"
		      @vuetable-pagination:change-page="onChangePage"
		    ></sl-table-pagination>
      </div>
    </div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code"><code class="html"></code></pre>
    </sl-collapse>
    
  </div>
</template>

<script>
export default {
  name: 'sumslack_table',
  data(){
  	return {
  		tbl:{
  			"multi-sort":false,
  			"per-page":10
  		},
  		code:`<sl-table ref="vuetable"
	api-url="https://vuetable.ratiw.net/api/users"
	:fields="[{name:'name',sortField:'name'}, {name:'email',sortField:'email'}, 'birthdate']"
	pagination-path=""
	:per-page="tbl['per-page']"
	:multi-sort="tbl['multi-sort']"
	multi-sort-key="ctrl"
	@vuetable:pagination-data="onPaginationData"
	wrapper-class="vuetable-wrapper"
	table-wrapper=".vuetable-wrapper"
  ></sl-table>
<sl-table-pagination ref="pagination" @vuetable-pagination:change-page="onChangePage">
</sl-table-pagination>`
  	}
  },
  methods:{
  		onPaginationData (paginationData) {
	      this.$refs.pagination.setPaginationData(paginationData)
	    },
	    onChangePage (page) {
	      this.$refs.vuetable.changePage(page)
	    },
	    settings(prop){
	    	this.tbl[prop] = !this.tbl[prop];
	    },
	    showField(){
	    	this.$refs.vuetable.toggleField(1);
	    },
	    changePerPage(e){
	    	var v = 10;
	    	if(!isNaN(e.target.value)){
	    		v = parseInt(e.target.value);
	    	}
	    	this.tbl['per-page'] = v;
	    }
	}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
	div.m20{
	  margin:20px;
	}
	.h20{
		height:20px;
		line-height: 20px;
	}
</style>
