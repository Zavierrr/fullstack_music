import * as actionTypes from './constants'
import { getRankListRequest } from '@/api/request'

const changeRankList = (data) => ({
    type: actionTypes.CHANGE_RANK_LIST,
    data
})

export const getRankList = () => {
    return dispatch => {
        getRankListRequest().then(data => {
            let list = data && data.list;
            dispatch(changeRankList(list));
            dispatch(changeLoading(false));
        })
    }
}

const changeLoading = (data) => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data
})