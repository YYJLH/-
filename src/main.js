// 入口文件
// console.log('ok')
// 导入vue
import Vue from 'vue'

import { Header } from 'mint-ui';

Vue.component(Header.name, Header)

import app from './App.vue'
// 导入mui
import './lib/mui/css/mui.css'


var vm = new Vue({
    el:'#app',
    render: c=>c(app)
})