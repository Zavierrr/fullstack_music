// 不做具体状态，负责分配工作
// redux 提供了 combineReducer 函数功能
// 分成多的子仓库，然后combine 一下合并到一起
// 一个reducer文件，放一类数据
// 每个reducer 文件负责返回一个函数
// 固定的返回值 页面需要的状态
// 页面不再管理数据
import singerReducer from './singer'
import useReducer from "./user";
import recommendReducer from "./recommend";
import { combineReducers } from "redux";

export default combineReducers({
    // key: value
    user: useReducer,
    singer: singerReducer,
    recommend: recommendReducer,
})
