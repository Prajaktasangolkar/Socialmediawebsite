import axios from 'axios';

const API=axios.create({baseURL:'http://localhost:5000'})

export const uploadImage=(data)=>API.post("/upload/",data)

export const uploadPost=(data)=>API.post('/post/',data);

export const likeUser=(id,data)=>API.put(`/post/${id}/like`,data)
export const dislikeUser=(id,data)=>API.put(`/post/${id}/dislike`,data)