import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from 'react-redux'
import { Top, Tab, TabItem } from './style'
import { useNavigate, NavLink } from 'react-router-dom'
import RouterConfig from "./routes";

function App(props) {
  // console.log(props);
  let { singers, user } = props;
  const navigate = useNavigate()
  const [count, setCount] = useState(0);
  // 有了redux之后，页面组件不再做数据管理

  return (
    <div className="App">
      {/* {
        user.map(users =>
          (<div key={users.id}>{users.name}</div>)
        )
      } */}
      <Top>
        <span
          className="iconfont menu"
          onClick={() => alert("用户中心正在开发中，敬请期待:)")}
        >
          &#xe65c;
        </span>
        <span className="title">云音悦</span>
        <span
          className="iconfont search"
          onClick={() => navigate("/search")}
        >
          &#xe62b;
        </span>
      </Top>
      <Tab>
        <NavLink to="/recommend">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink to="/singers">
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank">
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>
      </Tab>
      <RouterConfig />
    </div>
  );
}

// state 是redux 负责的所有子仓数据
// connect 是api
// 组件数据管理功能被收回 不用fetch 等
// 通过connect 连上store，store未来去管理数据
// redux 让数据管理更科学 开发工艺提高了

// 把store 中的状态以props 的形式引到组件中
// state 由redux 给我们的，状态树
// 以树要组织数据分仓，树根（state）
const mapStateToProps = (state) => {
  return {
    singer: state.singer.singers,
    user: state.user.users
  }
}

export default connect(mapStateToProps)(App); // 高阶组件