import axios from "axios";

const url = 'http://localhost:5000';
const authurl = url+'/api/auth';
const registerurl = url+'/api/users';
const posturl = url+'/api/posts';
const profileurl = url+'/api/profile'

export const getPosts_route = () => axios.get(posturl);
export const getPostsByUser_route = (id,config) => axios.get(posturl+`/user/${id}`,config);
export const getPost_route = (id) => axios.get(posturl+`/${id}`);

export const addLike_route = (id) => axios.put(posturl+`/like/${id}`);
export const addUnLike_route = (id) => axios.put(posturl+`/notlike/${id}`);

export const addPost_route = (formData,config) => axios.post(posturl,formData,config);
export const addComment_route = (postId,formData,config) => axios.post(posturl+`/comment/${postId}`,formData,config);

export const load_route = () => axios.get(authurl);
export const register_route = (body,config) => axios.post(registerurl,body,config);
export const login_route = (body,config) => axios.post(authurl,body,config);

export const getProfileMe_route = (config) => axios.get(profileurl+'/me',config);
export const updateProfile = (formData,config) => axios.post(profileurl,formData,config);


//TODO: 添加unlike于数据库中 Success
//TODO: 主页新页面 Success
//TODO: 主页编辑功能。 Success
//TODO: 强制刷新的一种可能解决方案，加一个if判断，对得到值进行===null判断，同时记得是get网络请求方式。 (方案正确)Success
//TODO: 点击nav中profile，显示数据。显示还是有些问题。Success
//TODO: 点击按钮，实现新页面跳转 Success
//TODO: 登出功能 Success
//TODO: 评论新页面，一个message，一个comment，最下面是参与评论 Success
//TODO: 在postPage中，有评论即可显示，没有则不显示，然后最下面是添加表单。 Success
//TODO: 主页博客功能，显示所有人的blog信息。 Success
//TODO: 主页上传照片功能。 Success
//TODO: 后端路由需要把数据getallpost auth去掉，同时再写一个是得到用户id来进行查找 (函数成功）Success
//TODO: Message提醒功能 Success
//TODO: 点击comment需要先登录 Success
//TODO: 表单跳转，表单内容清除功能 Success
//TODO: 错误异常处理问题，在所有项目中 Success
//TODO: 规定编辑profile时，所有都必须填上，照片可以不用填上？ Success
//TODO: 在post中 退出系统，数据清零。logout 还能显示，应该跳转到主页'/' Success
//TODO: post页面美化 Success
//TODO: 表单美化 Success
//TODO: 再点击按钮good或者bad实现，取消取消的情况 Success
//TODO: 点击按钮踩功能 Success
//TODO: profile 页面美化  Success
//TODO: register bug, 注册完成后，应该还能再点击register Success









