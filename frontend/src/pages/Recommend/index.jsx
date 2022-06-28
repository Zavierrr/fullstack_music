import React from 'react'
import { connect } from 'react-redux'

function Recommend() {
    return (
        <div>
            Recommend
        </div>
    )
}

// state 状态树 每一个reducer 是一个分支
const mapStateToProps = (state) => {
    return {
        banners: state.recommend.banners
    }
}

export default connect(mapStateToProps)(Recommend)