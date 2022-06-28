- fullstack 全栈
    1. 前端方向 vitejs/app 工程化生成单页应用
    2. 后端使用 开源的NeteaseCloud
        - .git 干掉
            同一个项目目录下不能有多个git
    3. 前端和后端怎么交流？
        axios api ->
        frontend 8080端口 UI 组件  需要数据（fastmock 伪接口）
        backend 3000端口 api 接口
        前后端分离
        8080（前端） -> 3000（后端） -> 3306（数据库）

- `npm install -g cnpm -registry=https://registry.npm.taobao.org`
    - 全局安装 cnpm  来自阿里
    - npm i 国外的服务器把package.json 中依赖的包下载下来，很慢，容易出错
    - cnpm i 到阿里云上下载，更快
    - --registry 手动设置安装源
    npm 和 cnpm 用法一样

- react 全家桶
    react 组件化 MVVM（数据驱动页面）
    react-router 路由
    redux 数据流管理
        前端 --> api --> redux --> 后端

- react 是声明式的UI组件开发框架
    1. 如此多的组件 很复杂，类似于API
    2. 可以用组件来声明功能，更好读 （组件名就是函数名）

- react + reactDOM
    react-router  +  react-router-dom
    redux  +  react-redux

- 数据仓库的搭建过程
    1. 从 react-redux 中解构Provider
        声明给应用添加数据管理功能
    2. store 专有目录下 createStore 创建仓库实例
    3. createStore 方法接受 reducer 函数

- 使用react全家桶中的react redux，结构出来provider，向应用添加数据管理功能 

-   <Provider store={store}>
        <BrowserRouter>
            {/* react 组件 */}
            <App />
        </BrowserRouter>
    </Provider>
    Provider 包住 App，此时App 相当于子组件，通过props传值

-   state 是redux 负责的所有子仓数据
    connect 是api
    组件数据管理功能被收回 不用fetch 等
    通过connect 连上store，store未来去管理数据
    redux 让数据管理更科学 开发工艺提高了

- reset
    神三元 使用的 styled-components 提供的 createGlobalStyle 全局样式

- adapter

- 重定向状态码 302