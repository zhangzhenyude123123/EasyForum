import axios from "axios";

const url = 'http://localhost:5000';
const authurl = url+'/api/auth';
const registerurl = url+'/api/users';
export const fetchPosts = () => axios.get(url);

export const load_route = () => axios.get(authurl);
export const register_route = (body,config) => axios.post(registerurl,body,config);
export const login_route = (body,config) => axios.post(authurl,body,config);




