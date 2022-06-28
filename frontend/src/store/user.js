let defaultState = {
    users: [
        { id: 1, name: 'hh', bio: '11111111' },
        { id: 2, name: 'Zavier', bio: '22222222' }
    ],
    banners: [
        { id: 1, img: 'xx.jpg' },
        { id: 2, img: 'xx.jpg' }
    ],
    list: [
        { id: 1, img: 'xx.jpg', title: 'aaa' },
        { id: 2, img: 'xx.jpg', title: 'aaa1' },
        { id: 3, img: 'xx.jpg', title: 'aaa2' }
    ]
}

const reducer = (state = defaultState) => {
    return state
}
export default reducer