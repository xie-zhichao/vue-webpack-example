/* 引入vue和主页 */
import Vue from 'vue'
import ToDo from './components/todo/ToDo.vue'

/* 实例化一个vue */
new Vue({
  el: '#app',
  render: h => h(ToDo)
})