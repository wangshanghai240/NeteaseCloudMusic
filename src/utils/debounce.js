// 防抖函数
export default function debounce(fn, delay) {
    let timer = null
        let handler = function() {
            if (timer) {
                clearTimeout(timer)
            } else {
                let _self = this,
                    arg = arguments
                timer = setTimeout(() => {
                    fn.apply(_self, ...arg)
                }, delay)
            }
        }
        // 取消处理
        handler.remove = function(){
            clearTimeout(timer)
            timer = null
        }
        return handler
}