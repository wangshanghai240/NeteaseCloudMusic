import { request } from '../request'

// 电话登录 
export function loginCellPhone(phone,captcha){
    return request({
        url:'/login/cellphone'+'?timestamp='+ Date.now(),
        method:'get',
        params:{phone:phone,captcha:captcha}
    })
}
// 获取验证码
export function getAuthID(authid){
    return request({
        url:"/captcha/sent",
        method:'get',
        params:{phone:authid}
    })
}