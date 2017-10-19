import Vue from 'vue'
import Router from 'vue-router'

//Pages
import Label from '@/pages/Label'
import Button from '@/pages/Button'
import Tooltip from '@/pages/Tooltip'
import IconFont from '@/pages/IconFont'

import Input from '@/pages/Input'
import AutoCompleter from '@/pages/AutoCompleter'
import DatePicker from '@/pages/DatePicker'
import CheckRadio from '@/pages/CheckRadio'
import Switches from '@/pages/Switches'

import PageFlex from '@/pages/Flex'
import PageTabs from '@/pages/Tabs'
import PageDialog from '@/pages/Dialog'
import PageFlipCard from '@/pages/FlipCard'
import PageMenu from '@/pages/Menu'

import PageTable from '@/pages/Table'
import PagePullRefresher from '@/pages/PullRefresher'

//end of Pages
import Hello from '@/pages/Hello'
import Page2 from '@/pages/Page2'
import Detail from '@/pages/Detail'
import SLComponent from "@/router/component.js"

import VueJsModal from "@/components/dialog/index.js"
import VTooltip from '@/components/tooltip/index.js'

import VueHighlightJS from '@/components/highlightjs/index.js'
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
      component: Label
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: Tooltip
    },
    {
      path: '/iconfont',
      name: 'iconfont',
      component: IconFont
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/ac',
      name: 'ac',
      component: AutoCompleter
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: DatePicker
    },
    {
      path: '/cr',
      name: 'cr',
      component: CheckRadio
    },
    {
      path: '/switches',
      name: 'switches',
      component: Switches
    },
    {
      path: '/flex',
      name: 'flex',
      component: PageFlex
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: PageTabs
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: PageDialog
    },
    {
      path: '/flipcard',
      name: 'flipcard',
      component: PageFlipCard
    },
    {
      path: '/menu',
      name: 'menu',
      component: PageMenu
    },
    {
      path: '/table',
      name: 'table',
      component: PageTable
    },
    {
      path: '/pullrefreser',
      name: 'pullrefreser',
      component: PagePullRefresher
    },
    {
      path: '/coming',
      name: 'coming',
      component: Hello
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
