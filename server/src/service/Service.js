import {blogModel, serviceModel, sliderModel, teamModel} from "../model/Model.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;


// Slider Services
export const sliderCreateService = async (req,res)=>{
    try {
        let reqBody = req.body;
        let result = await sliderModel.create(reqBody)
        return {status:true, data:result, message:"Slider Created successfully"};
    }catch(err){
        return res.status(400).send({status:false,message:err.toString()});
    }
}

export const getSliderService = async (req,res)=>{
    try {
        let result = await sliderModel.find()
        return {status:true, data:result}
    }catch(err){
        return res.status(400).send({status:false,message:err.toString()});
    }
}
export const deleteSliderService = async (req, res) => {
    try {
        let id = new ObjectId(req.params.id);
        let result = await sliderModel.deleteOne({ _id: id });
        return { status: true, data: result, msg: "Product delete success." };
    } catch (e) {
        return { status: false, error: e };
    }
};

// Blog Services
export const blogCreateService = async (req,res)=>{
    try {
        let reqBody = req.body;
        let result = await blogModel.create(reqBody)
        return {status:true, data:result}
    }catch(err){
        return res.status(400).send({status:false,message:err.toString()});
    }
}

export const getBlogService = async (req,res)=>{
    try {
        let result = await blogModel.find()
        return {status:true, data:result}
    }catch(err){
        return res.status(400).send({status:false,message:err.toString()});
    }
}
export const deleteBlogService = async (req, res) => {
    try {
        let id = new ObjectId(req.params.id);
        let result = await blogModel.deleteOne({ _id: id });
        return { status: true, data: result, msg: "Product delete success." };
    } catch (e) {
        return { status: false, error: e };
    }
};

// Team Services
export const teamCreateService = async (req,res)=>{
    try {
        let reqBody = req.body;
        let result = await teamModel.create(reqBody)
        return {status:true, data:result}
    }catch(err){
        return res.status(400).send({status:false,message:err.toString()});
    }
}

export const getTeamService = async (req,res)=>{
    try {
        let result = await teamModel.find()
        return {status:true, data:result}
    }catch(err){
        return res.status(400).send({status:false,message:err.toString()});
    }
}
export const deleteTeamService = async (req, res) => {
    try {
        let id = new ObjectId(req.params.id);
        let result = await teamModel.deleteOne({ _id: id });
        return { status: true, data: result, msg: "Product delete success." };
    } catch (e) {
        return { status: false, error: e };
    }
};

// service Services
export const serviceCreateService = async (req,res)=>{
    try {
        let reqBody = req.body;
        let result = await serviceModel.create(reqBody)
        return {status:true, data:result}
    }catch(err){
        return res.status(400).send({status:false,message:err.toString()});
    }
}

export const getServiceService = async (req,res)=>{
    try {
        let result = await serviceModel.find()
        return {status:true, data:result}
    }catch(err){
        return res.status(400).send({status:false,message:err.toString()});
    }
}
export const deleteServiceService = async (req, res) => {
    try {
        let id = new ObjectId(req.params.id);
        let result = await serviceModel.deleteOne({ _id: id });
        return { status: true, data: result, msg: "Product delete success." };
    } catch (e) {
        return { status: false, error: e };
    }
};