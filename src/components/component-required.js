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

//Treeview
import SLZTree from './treeview/tree.vue';
import SLComboZTree from './treeview/combotree.vue'

//Editor
import SLEditr from "./editor/Editr.vue";
import bus from './editor/bus.js'; 

//Charts
import VueHighcharts from './highcharts/VueHighcharts.vue'

//Multi-Select
import Multiselect from './mselect/Multiselect'
import multiselectMixin from './mselect/multiselectMixin'
import pointerMixin from './mselect/pointerMixin'

//Uploader
import Uploader from './uploader/UploadFile'

if (!window.Promise) {
	window.Promise = Promise
}

export default {
  install (Vue, userOptions = {}) {
  	
    Vue.component('sl-autocomplete', SLAutocomplete)
    Vue.component('sl-checkbox', SLCheckbox)
    Vue.component('sl-radio', SLRadio)
    
    Vue.component('sl-select', Multiselect)
    //Uploader
    Vue.component("sl-uploader", Uploader);
    
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
  	//Treeview
  	Vue.component('sl-tree', SLZTree);
  	Vue.component('sl-combotree', SLComboZTree);
  	
  	//Editor
  	bus.options = { ...bus.options, ...userOptions };
    Vue.component("sl-editor", SLEditr);

      
    //Charts
    Vue.component("sl-chart", VueHighcharts);

  
  }
}

/**
 * generate key 0-1-2-3
 * this is very important function for now module
 * @param treeData
 * @param parentKey
 * @returns {Array}
 */
 const generateKey = (treeData = [], parentKey = '0') => {
    treeData = treeData.map((item, i) => {
        item.key = parentKey + '-' + i.toString();

        if (item.hasOwnProperty('children') && item.children.length > 0) {
            generateKey(item.children, item.key)
        }

        return item;
    })
    return treeData;
}
/**
 * get parent node
 * @param node { Object }
 * @param treeData { Array }
 * @returns { Object }
 */
const getParentNode = (node = {}, treeData = []) => {
    let tem;
    let postions = node.key.split('-');
    for (let [index, item] of postions.entries()) {
        switch (index) {
            case 0:
                break;
            case 1:
                tem = treeData[item];
                break;
            default:
                tem = tem.children[item];
        }
    }
    return tem
}

export { 
  SLAutocomplete, SLCollapse, SLCheckbox, SLRadio, 
  SLSwitches, SLMenu, SLCtxMenu, SLDatePicker,SLCard,SLTabs,SLTab,SLPullTo,
  Vuetable,
  SLEditr,
  VuetablePagination,
  VuetablePaginationDropDown,
  VuetablePaginationInfo,
  VuetablePaginationMixin,
  VuetablePaginationInfoMixin,
  SLZTree,SLComboZTree, generateKey, getParentNode,
  Multiselect, multiselectMixin, pointerMixin
}
