import axios from "axios";

const url = 'http://localhost:5000';
const authurl = url+'/api/auth';
const registerurl = url+'/api/users';
const posturl = url+'/api/posts';

export const getPosts_route = () => axios.get(posturl);
export const getPost_route = (id) => axios.put(posturl+'/${'+id+'}');
export const addLike_route = (id) => axios.put(posturl+'/like/${'+id+'}');
export const removeLike_route = (id) => axios.put(posturl+'/unlike/${'+id+'}');
export const addPost_route = (formData,config) => axios.post(posturl,formData,config);
export const addComment_route = (postId,formData,config) => axios.post(posturl+'/comment/${'+postId+'}',formData,config);

export const load_route = () => axios.get(authurl);
export const register_route = (body,config) => axios.post(registerurl,body,config);
export const login_route = (body,config) => axios.post(authurl,body,config);




