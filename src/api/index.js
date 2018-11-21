/*
包含n个接口请求函数的模块
函数的返回值: promise对象

import ajax from './ajax'
const BASE_URL = 'http://localhost:4000' //或者
const BASE_URL = '/api' //设置了跨域代理

例如

获取食品分类列表，GET请求：
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')

用户名密码登陆验证，POST请求：
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL+'/login_pwd', {name, pwd, captcha}, 'POST')
 */

//获取菜谱分类
export const reqCategorys = () => ajax(BASE_URL+'/categorys')

//获取菜谱详情
export const reqDetail = () => ajax(BASE_URL+'/detail')

//获取菜谱视频
export const reqVideos = () => ajax(BASE_URL+'/videos')


