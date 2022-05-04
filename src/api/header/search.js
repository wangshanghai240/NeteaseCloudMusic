import { request } from '../request'
// 歌曲搜索
export function SearchMusic(keyword){
    return request({
        url:'/cloudsearch',
        method:'get',
        params:{keywords:keyword}
    })
}
// 默认歌曲关键字
export function DefaultMusic(){
    return request({
        url:'/search/default',
        method:'get'
    })
}
// 热搜关键字
export function hotKeyword(){
    return request({
        url:'/search/hot',
        method:'get'
    })
}
// 搜索建议
export function suggestMusic(keyword){
    return request({
        url:'/search/suggest',
        method:'get',
        params:{keywords:keyword}
    })
}