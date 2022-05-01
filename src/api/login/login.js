import { request } from '../request'

// 电话登录 
export function loginCellPhone(phone){
    return request({
        url:'/login/cellphone',
        method:'post',
        data:phone
    })
}