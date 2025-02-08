import {create} from "zustand";
import axios from "axios";
import toast from "react-hot-toast";


const userStore = create((set)=>({
    FormData:{},
    FormDataOnChange: (name, value)=>{
        set((state)=>({
            FormData:{
                ...state.FormData,
                [name]:value
            }
        }))
    },
    RegisterFormRequest:async (postBody)=>{
        try {
            set({FormData:null})
            let res=await axios.post(`http://localhost:8080/api/register`,postBody);
            set({FormData:res.data['data']});
            if(res.data.status === true){
                toast.success(res.data.msg)
                return true
            }
        }
        catch(err){
            toast.error('something went wrong')
            return err.toString();
        }
    },

    LoginFormRequest:async (postBody)=>{
        try {
            let res=await axios.post(`http://localhost:8080/api/login`,postBody);
            console.log(res.data);
            if(res.status === true){
                toast.success(res.data.msg)
                return true
            }
        }
        catch(err){
            toast.error('something went wrong')
            return err.toString();
        }
    },


    LogoutFormRequest:async ()=>{
        try {

            let res=await axios.get(`http://localhost:8080/api/logout`);
            if(res.data.status === true){
                toast.success(res.data.msg)
                return true
            }
        }
        catch(err){
            toast.error('something went wrong')
            return err.toString();
        }
    },

}))

export default userStore;