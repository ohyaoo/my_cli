import * as types from '../mutations'
import { setTimeout } from 'timers';

const state = {
    message: [{
        from: 'cli',
        msg: '你好'
    }]
}

const getters = {
    message: state => state.message
}

const mutations = {
    [types.CLICK](state) {
        let message = [{
            from: 'me',
            msg: '你好呀，我的脚手架'
        }, {
            from: 'cli',
            msg: '欢迎来到我的世界'
        }]
        setTimeout(() => {
            state.message.push(message[0])
            setTimeout(() => {
                state.message.push(message[1])
            }, 1000)
        }, 1000)
    }
}

export default {
    state,
    getters,
    mutations
}