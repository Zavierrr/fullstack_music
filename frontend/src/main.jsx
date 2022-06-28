import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './style'
import { IconStyle } from "./assets/iconfont/iconfont";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 外面再包一层，提供数据管理功能，redux最常用 项目做大了 企业里的财务专员
  // 路由 SPA
  // react 声明式开发
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <IconStyle />
      {/* react 组件 */}
      <App />
    </BrowserRouter>
  </Provider>
)
