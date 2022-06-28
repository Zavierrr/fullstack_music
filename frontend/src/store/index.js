// 初始化仓库
// 当项目一旦复杂起来，数据流管理变得很重要
import { createStore } from "redux"
import reducer from './reducer'
// 激活 redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// store 数据状态仓库
// 1. 上京东官网 或APP UI组件开发
// 2. 后端提供接口
// 3. 数据、状态放在仓库
// 实例化一个仓库
// reducer --> Array.reduce
// 第二个参数
const store = createStore(reducer, composeEnhancers());

export default store
