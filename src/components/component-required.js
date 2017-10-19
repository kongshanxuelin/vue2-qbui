/*
 * sl-swither:https://github.com/drewjbartlett/vue-switches
 * sl-datepicer:https://github.com/charliekassel/vuejs-datepicker
 * sl-autocomplete:https://github.com/charliekassel/vuejs-autocomplete
 * sl-table:https://ratiw.github.io/vuetable-2/#/Callbacks
 * dialog:https://github.com/euvl/vue-js-modal
 * Tabs:https://github.com/spatie/vue-tabs-component
 * tooltip:https://github.com/Akryum/v-tooltip
 * Flex:http://coffcer.github.io/flex-layout/
 * sl-ctxmenu:https://github.com/vmaimone/vue-context-menu
 * sl-selecttree:https://github.com/wilsonIs/vue-treeSelect
 */
import SLAutocomplete from './sl-autocomplete'
import SLCheckbox from './sl-checkbox'
import SLRadio from './sl-radio'
import SLSwitches from './sl-switches';
import SLMenu from './sl-menu';
import SLDatePicker from './sl-datepicker';
import SLCollapse from './sl-collapse';
import SLCard from './flipcard/InfoCard';

import SLTab from './tabs/components/Tab'
import SLTabs from './tabs/components/Tabs'

import SLPullTo from './pull-refresher/pull-to-refresh';


import Vuetable from './table/Vuetable.vue'
import VuetablePagination from './table/VuetablePagination.vue'
import VuetablePaginationDropDown from './table/VuetablePaginationDropdown.vue'
import VuetablePaginationInfo from './table/VuetablePaginationInfo.vue'
import VuetablePaginationMixin from './table/VuetablePaginationMixin.vue'
import VuetablePaginationInfoMixin from './table/VuetablePaginationInfoMixin.vue'
import Promise from 'promise-polyfill'

import SLCtxMenu from './ctx-menu/index'

if (!window.Promise) {
	window.Promise = Promise
}

export default {
  install (Vue) {
  	
    Vue.component('sl-autocomplete', SLAutocomplete)
    Vue.component('sl-checkbox', SLCheckbox)
    Vue.component('sl-radio', SLRadio)
    Vue.component('sl-switcher', SLSwitches)
    Vue.component('sl-menu', SLMenu)
    Vue.component('sl-ctxmenu',SLCtxMenu);
    Vue.component('sl-datepicker', SLDatePicker)
    Vue.component('sl-card', SLCard);
    Vue.component('sl-tabs', SLTabs);
    Vue.component('sl-tab', SLTab);
    Vue.component('sl-pull', SLPullTo);
    Vue.component('sl-collapse',SLCollapse);
    //table
    Vue.component("sl-table", Vuetable);
  	Vue.component("sl-table-pagination", VuetablePagination);
  	Vue.component("sl-table-pagination-dropdown", VuetablePaginationDropDown);
  	Vue.component("sl-table-pagination-info", VuetablePaginationInfo);
  
  }
}

export { 
  SLAutocomplete, SLCollapse, SLCheckbox, SLRadio, 
  SLSwitches, SLMenu, SLCtxMenu, SLDatePicker,SLCard,SLTabs,SLTab,SLPullTo,
  Vuetable,
  VuetablePagination,
  VuetablePaginationDropDown,
  VuetablePaginationInfo,
  VuetablePaginationMixin,
  VuetablePaginationInfoMixin}
