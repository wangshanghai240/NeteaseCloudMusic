import { request } from '../request'

// 请求推荐mv数据
export function recommendmv(){
    return request({
        url:'/personalized/mv',
        method:'get'
    })
}
// 推荐歌单
export function recommendMusic(){
    return request({
        rul:"/personalized/limit=5",
        method:'get',
    })
}
// 推荐新音乐
export function recommendMore(){
    return request({
        url:'/personalized/newsong',
        method:'get'
    })
}
// 推荐电台
export function recommendDiantai(){
    return request({
        url:'/personalized/djprogram',
        method:'get'
    })
}