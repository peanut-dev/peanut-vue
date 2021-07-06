import initData from "./initData.js"

/**
 * Vue构造函数
 * @param {*} options new Vue传递的配置对象
 */
export default function Vue(options) {
  this._init(options)
}

/**
 * 初始化配置对象
 * @param {*} options 
 */
Vue.prototype._init = function (options) {
  // 将options配置挂载到Vue实例上
  this.$options = options
  // 初始化options.data
  // 代理data对象上的各个属性到Vue实例
  // 给data对象上的各个属性设置响应式能力
  initData(this)
}