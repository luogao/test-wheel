import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Hello from '@/components/Hello'
import countUp from '@/components/countUp';
import progressbar from '@/components/progressbar';
import qrBarcode from '@/components/QrBarcode';
import photoFileUploader from '@/components/photoFileUploader';
import sideBlock from '@/components/sideBlock';
import dynamicList from '@/components/dynamicList';


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/countUp',
    name: 'countUp',
    component: countUp
  }, {
    path: '/progressbar',
    name: 'progressbar',
    component: progressbar
  }, {
    path: '/qrBarcode',
    name: 'qrBarcode',
    component: qrBarcode
  }, {
    path: '/photoFileUploader',
    name: 'photoFileUploader',
    component: photoFileUploader
  }, {
    path: '/sideBlock',
    name: 'sideBlock',
    component: sideBlock
  }, {
    path: '/dynamicList',
    name: 'dynamicList',
    component: dynamicList
  }],
  mode: 'history'
})
