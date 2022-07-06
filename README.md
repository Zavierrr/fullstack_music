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
    自适应

- 重定向状态码 302
    redirect

- axios 功能点
    - 网络请求很多，api axios 单例模式
    - 统一了 vue react native app三端的请求库
    - 每个请求 域名 + 端口部分 没必要重复
        可以配置到 baseURL 中
    - 为了切换请求域名的需要
        baseURL = http://localhost:3000
        http://localhost:3000/banner => /banner
    - 拦截器
        1. 响应拦截器
            interceptors.response.use()
            对返回的数据进行处理，如过滤、处理错误等
        2. 请求拦截器
            interceptors.request.use()
            - 登录时，服务器会给我们一个授权码 token
            - 每次请求时，需要手工带上
                req.headers  请求头
                Authorization 授权信息

- 组件数据管理功能被剥夺
    1. redux 管理数据更专业
        - store store/index.js
        - reducer 集合 交给store
        - combineReducers 提供reducer
        - 各个模块 （文章、评论、用户）
        - 每个模块都是一个 *reducer* 函数
        - reducer 还可以多次运行
        - dispatch 一个他想要的 action
        - 页面会自动更新
        - connect mapStateToProps 获取状态
            mapDispatchToProps 触发状态改变

    2. mapStateToprops      状态读操作
    3. mapDispatchToprops   写操作
        - 状态不可直接修改 redux 起因
            - 有法可依
        - dispatch  getRankList 异步action redux-thunk 支持 data dispatch(changeRankList) 同步action
        - dispatch({type:'',data}) 在action
        - reducer 根据 type 重新计算
        - 状态发生改变，应用了状态的地方mvvm

- 小型项目没必要用redux，如果足够复杂，模块化reducer迁移到pages相应模块下
  - pages/store  新的目录结构
  - store 中央  src/store + 模块化  @pages/store{n}

- 修改状态有固定流程
    - 属于actionCreators
    - 一般标配两个action  一个同步的，一个异步的
    - dispatch 才能触发
    - action 对象固定格式 {type: }
    - type 方便我们把action 为什么要改变记录下来
    - 从 init --> 任何action状态，都是可被追溯的
    - 管理数据的严谨性

- styled-components
    页面播放歌曲动态高度，采用props 传参
        `bottom: ${props => props.play > 0 ? "60px" : 0};`
    ${函数} 函数的返回值
    页面的播放状态

- 移动端一般必须 better-scroll 生成的scroll组件
    1. 滚动体验更好
    2. 下拉刷新，上拉加载更多
    3. 使用了神三元封装的Scroll 组件
        移动端 "加载更多" 的标配

- 数据管理跨页面级别的组件
    redux 可以共享数据（本质）
    父子组件之间共享
        父 --> 子 ：props
        子 --> 父 ：调用父组件函数通知父组件数据改变
    爷孙 周围的人共享 困难
        redux connect 可以跨页面级别，跨层级
        
- redux架构思路
    1.  数据管理和组件，在有了redux后，是平级关系
    - /pages    /store
    2. 模块化数据管理， 每个模块reducer + action 下放到页面路由模块中
    3. 每个模块都提供index.js(灵魂)，所有的reducer，action，constants都一起export，清单文件

- react 组件渲染原理
    1. 挂载
    2. 当状态更新时，就MVVM，jsx从头到尾重新编译
    3. recommend中，多个重要子组件Slider等
    4. 给相对独立，组件加memo，只要外界给他的props没有变，则不会重新编译
    5. 热更新  页面局部

- memo 组件性能优化
    1. 子组件
    2. 父组件数据复杂，多项改变状态的地方
    3. 父组件的改变，没有影响到子组件（props未变，没有props）

- styled-components 原则
    1. 最外层容器使用styled-components 接管
        Wrapper Container
    2. List + ListItem 
        方便样式复用

- 图片延时加载
    1. react-lazyload 
        声明式组件lazyload + placeholder 包住原图
    2. scroll onScroll  react-lazyload 去 forceCheck

##  复杂组件业务分析
1. 这个阶段我们要刻意练习复杂组件
    - 搜索
    - 登录
2. redux 设计思路
    但凡有api 请求的肯定用redux
    跨模块共享状态
3. 热词
    建议
