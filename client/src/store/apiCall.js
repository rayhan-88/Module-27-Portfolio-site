import {create} from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const apiCall = create((set)=>({
    SliderData:null,
    SliderDataRequest : async ()=>{
        try {
            let res = await axios.get('http://localhost:8080/api/get-slider')
            set({SliderData:res.data['data']})
            if(res.status === true){
                return res.data['data']
            }
        }catch(err){
            console.log(err.toString())
        }
    },
    SliderCreateRequest : async (postBody)=>{
        try {
            let res = await axios.post('http://localhost:8080/api/slider-create',postBody)
            set({SliderData:res.data['data']})
            if(res.status === true){
                toast.success(res.data.message)
                return true
            }
        }catch(err){
            console.log(err.toString())
        }
    },
    SliderDeleteRequest : async (id)=>{
        try {
            let res = await axios.delete(`http://localhost:8080/api/delete-slider/${id}`, )
            set({SliderData:res.data['data']})
            if(res.status === true){
                toast.success(res.data.message)
                return true
            }
        }catch(err){
            console.log(err.toString())
        }
    },

    BlogData:null,
    BlogDataRequest : async ()=>{
        try {
            let res = await axios.get('http://localhost:8080/api/get-blog')
            set({BlogData:res.data['data']})
            if(res.status === true){
                return res.data['data']
            }
        }catch(err){
            console.log(err.toString())
        }
    },
    BlogCreateRequest : async (postBody)=>{
        try {
            let res = await axios.post(`http://localhost:8080/api/blog-create`,postBody)
            set({SliderData:res.data['data']})
            if(res.status === true){
                toast.success(res.data.message)
                return true
            }
        }catch(err){
            console.log(err.toString())
        }
    },
    BlogDeleteRequest : async (id)=>{
        try {
            let res = await axios.delete(`http://localhost:8080/api/delete-blog/${id}`, )
            set({SliderData:res.data['data']})
            if(res.status === true){
                toast.success(res.data.message)
                return true
            }
        }catch(err){
            console.log(err.toString())
        }
    },

    TeamData:null,
    TeamDataRequest : async ()=>{
        try {
            let res = await axios.get('http://localhost:8080/api/get-team')
            set({TeamData:res.data['data']})
            if(res.status === true){
                return res.data['data']
            }
        }catch(err){
            console.log(err.toString())
        }
    },
    TeamCreateRequest : async (postBody)=>{
        try {
            let res = await axios.post('http://localhost:8080/api/team-create',postBody)
            set({SliderData:res.data['data']})
            if(res.status === true){
                toast.success(res.data.message)
                return true
            }
        }catch(err){
            console.log(err.toString())
        }
    },
    TeamDeleteRequest : async (id)=>{
        try {
            let res = await axios.delete(`http://localhost:8080/api/delete-team/${id}`, )
            set({SliderData:res.data['data']})
            if(res.status === true){
                toast.success(res.data.message)
                return true
            }
        }catch(err){
            console.log(err.toString())
        }
    },

    ServiceData:null,
    ServiceDataRequest : async ()=>{
        try {
            let res = await axios.get('http://localhost:8080/api/get-service')
            set({ServiceData:res.data['data']})
            if(res.status === true){
                return res.data['data']
            }
        }catch(err){
            console.log(err.toString())
        }
    },
    ServiceCreateRequest : async (postBody)=>{
        try {
            let res = await axios.post('http://localhost:8080/api/service-create',postBody)
            set({SliderData:res.data['data']})
            if(res.status === true){
                toast.success(res.data.message)
                return true
            }
        }catch(err){
            console.log(err.toString())
        }
    },
    ServiceDeleteRequest : async (id)=>{
        try {
            let res = await axios.delete(`http://localhost:8080/api/delete-service/${id}`, )
            set({SliderData:res.data['data']})
            if(res.status === true){
                toast.success(res.data.message)
                return true
            }
        }catch(err){
            console.log(err.toString())
        }
    },
}))



export default apiCall;