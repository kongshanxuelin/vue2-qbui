<template >
  <div>
    <div style="display: flex;flex-direction: column;">
    	  <span style="margin-top:10px;">基本使用：</span>
        <sl-autocomplete style="margin-top:10px;"
          source="https://api.github.com/search/repositories?q="
          results-property="items"
          :results-display="formatDisplay"
          @selected="setXHRValue"
          @clear="setXHRValue({})">
        </sl-autocomplete>
        <span style="margin-top:10px;">没结果显示时显示自定义内容</span>
        <sl-autocomplete
        	style="margin-top:10px;"
          source="https://api.github.com/search/repositories?q="
          results-property="items"
          results-display="formatDisplay"
          @selected="setXHRValue"
          @clear="setXHRValue({})"
          @noResults="showAsk"
          @close="ask = null">
          <li v-if="ask" slot="results" class="autocomplete__results__item" @click="create">没结果时的显示内容</li>
        </sl-autocomplete>
        
    </div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code"><code class="html"></code></pre>
    </sl-collapse>
    <div class="results" v-if="apiResults" style="width:95%;overflow:auto;height:250px;">
      <p>Results:</p>
      <pre>{{ apiResults }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sumslack_ac',
  data(){
  	return {
  		objectResults: null,
      apiResults: null,
      ask: null,
  		code:`<sl-autocomplete
          source="https://api.github.com/search/repositories?q="
          results-property="items"
          :results-display="formatDisplay"
          @selected="setXHRValue"
          @clear="setXHRValue({})">
        </sl-autocomplete>`
  	}
  },
  methods:{
  	setObjValue (obj) {
      this.objectResults = obj
    },
    showAsk (args) {
      this.ask = {
        query: args.query
      }
    },
    create (search) {
      alert('Create item for "' + this.ask.query + '"\n\nBut this is just a demo...')
    },
		setXHRValue (obj) {
      this.apiResults = obj
    },
		formatDisplay (result) {
      return result.full_name + ' <strong>[' + result.stargazers_count + ']</strong>'
    }
	}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
   .clearfix{
   	clear:both;
   	margin:0;
   	padding:0;
   }
  .hello{
    padding:20px;
  }
	div.m20{
	  margin:20px;
	}
</style>
