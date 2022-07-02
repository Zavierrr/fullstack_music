import { memo } from 'react'
import LazyLoad from 'react-lazyload'
import music from './music.png'

function RecommendList(props) {
    return (
        <ListWrapper>
            <h1>推荐歌单</h1>
            <List>
                {
                    RecommendList.map(item => {
                        return (
                            <ListItem key={item.id}>
                                <div className="img_wrapper">
                                    <div className="decorate"></div>
                                    <LazyLoad placeholder={<img width="100%" height="100%" src={music} />}>
                                        <img width="100%" height="100%" src={item.picUrl + "?param=300x300"} alt="" />
                                    </LazyLoad>
                                </div>
                            </ListItem>
                        )
                    })
                }
            </List>
        </ListWrapper>
    )
}

// 性能优化
export default memo(RecommendList)