import axios from "axios";

const url = 'http://localhost:5000';
const authurl = url+'/api/auth';
const registerurl = url+'/api/users';
const posturl = url+'/api/posts';
const profileurl = url+'/api/profile'

export const getPosts_route = (config) => axios.get(posturl,config);
export const getPost_route = (id) => axios.put(posturl+`${id}`);
export const addLike_route = (id) => axios.put(posturl+`/like/${id}`);
export const removeLike_route = (id) => axios.put(posturl+`/unlike/${id}`);
export const addUnLike_route = (id) => axios.put(posturl+`/unlike/${id}`);
export const addPost_route = (formData,config) => axios.post(posturl,formData,config);
export const addComment_route = (postId,formData,config) => axios.post(posturl+`/comment/${postId}`,formData,config);

export const load_route = () => axios.get(authurl);
export const register_route = (body,config) => axios.post(registerurl,body,config);
export const login_route = (body,config) => axios.post(authurl,body,config);

export const getProfileMe_route = (config) => axios.get(profileurl+'/me',config);
// export const getProfileById = (id) => axios.get(profileurl+`/user/${id}`);
export const updateProfile = (formData,config) => axios.post(profileurl,formData,config);

//TODO: 登出功能
//TODO: 添加unlike于数据库中 Success
//TODO: 再点击按钮good或者bad实现，取消取消的情况
//TODO: 评论新页面，一个message，一个comment，最下面是参与评论
//TODO: 点击按钮踩功能
//TODO: 点击按钮，添加评论
//TODO: 主页新页面 Success
//TODO: 主页编辑功能。 Success
//TODO: 主页上传照片功能。
//TODO: 主页博客功能，显示所有人的blog信息。
//TODO: 点击nav中profile，显示数据。显示还是有些问题。Bad



