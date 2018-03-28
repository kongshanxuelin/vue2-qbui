import Vue from 'vue'
import Router from 'vue-router'

//Pages
import Home from '@/pages/Home'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'
//end of Pages

import SLComponent from "@/router/component.js"

import VueJsModal from "@/components/dialog/index.js"
import VTooltip from '@/components/tooltip/index.js'

import VueHighlightJS from '@/components/highlightjs/index.js'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.prototype.Config = {
  url:"http://wx.sumslack.com/restful/"
}


Vue.use(VueHighlightJS)

Vue.use(VueJsModal, {
  dialog: true
})


Vue.use(VTooltip,{
	disposeTimeout: 10000,
	defaultClass : 'sl-tooltip'
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    }
  ]
})
