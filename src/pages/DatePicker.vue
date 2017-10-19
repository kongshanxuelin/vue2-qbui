<template >
  <div>
  	<div class="m20">
      <span class="sl-label">选择日期：</span>
      <sl-datepicker :disabled-picker="state['disabled-picker']" :calendar-button="true" calendar-button-icon="icon sumscope-icon icon-clock-circle-o" :monday-first="state['monday-first']" :clear-button="state['clear-button']" v-model="date1" ></sl-datepicker>
      <div class="m20">
      <button @click="settings('monday-first')" class="sl-btn primary">是否周一开始</button>
      <button @click="settings('disabled-picker')" class="sl-btn warning">是否有效</button>
      <button @click="settings('clear-button')" class="sl-btn warning">是否显示清空按钮</button>
      </div>
    </div>
    <div class="m20">
      <span class="sl-label" style="height:32px;line-height: 32px;">选择日期(总是显示的日历)：</span>
      <sl-datepicker v-model="date1" :inline="true"></sl-datepicker> 
    </div>
    <div class="m20">
      <span class="sl-label">选择日期(不能选周末,周一开始)：</span>
      <sl-datepicker :monday-first="true" :disabled="state.disabled" format="yyyy-MM-dd" v-model="date1" ></sl-datepicker> 
    </div>
    <div class="m20">
      <span class="sl-label">选择日期(高亮周一)：</span>
      <sl-datepicker :clear-button="true" :highlighted="state.highlighted" format="yyyy-MM-dd" v-model="date1" ></sl-datepicker> 
    </div>
    <div class="m20">
    	<span>Result:{{date1}}</span>
    </div>
    <sl-collapse title="显示源码">
    	<pre v-highlightjs="code"><code class="html"></code></pre>
    	<pre v-highlightjs="jscode"><code class="javascript"></code></pre>
    </sl-collapse>
  </div>
</template>

<script>
export default {
  name: 'sumslack_label',
  data(){
  	return {
  		date1:new Date(),
  		state:{
  			"day-view-only":true,
  			"disabled-picker":false,
  			"monday-first":false,
  			"inline":false,
		    disabled: {
		        //to: new Date(2016, 0, 5), // Disable all dates up to specific date
		        //from: new Date(2016, 0, 26), // Disable all dates after specific date
		        days: [6, 0], // Disable Saturday's and Sunday's
		        /*
		        daysOfMonth: [29, 30, 31], // Disable 29th, 30th and 31st of each month
		        dates: [ // Disable an array of dates
		            new Date(2016, 9, 16),
		            new Date(2016, 9, 17),
		            new Date(2016, 9, 18)
		        ],
		        ranges: [{ // Disable dates in given ranges (exclusive).
		            from: new Date(2016, 11, 25),
		            to: new Date(2016, 11, 30)
		        }, {
		            from: new Date(2017, 1, 12),
		            to: new Date(2017, 2, 25)
		        }]
		        */
		    },
		    highlighted: {
	        days: [1], // Highlight Saturday's and Sunday's
	        /*
	        to: new Date(2016, 0, 5), // Highlight all dates up to specific date
	        from: new Date(2016, 0, 26), // Highlight all dates after specific date
	        daysOfMonth: [15, 20, 31], // Highlight 15th, 20th and 31st of each month
	        dates: [ // Highlight an array of dates
	            new Date(2016, 9, 16),
	            new Date(2016, 9, 17),
	            new Date(2016, 9, 18)
	        ]
	        */
	    }
		},
  		code:`<sl-datepicker ... v-model="date1" ></sl-datepicker>`,
  		jscode:`export default {
  name: 'sumslack_datepicker',
  data(){
		return {
			date1:new Date(),
			state:{
			  "day-view-only":true,
		    "disabled-picker":false,
		    "monday-first":false,
		    "inline":false,
				disabled: {
				  days: [6, 0]
				},
				highlighted: {
			    days: [1]
			  }
			}
		}
  },
	methods:{
		settings(prop){
		this.state[prop] = !this.state[prop];
	  }
	}
}`
  	}
  },
  methods:{
		settings(prop){
			this.state[prop] = !this.state[prop];
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
