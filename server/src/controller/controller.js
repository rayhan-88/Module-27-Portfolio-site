import {
    blogCreateService,
    deleteBlogService,
    deleteServiceService,
    deleteSliderService,
    deleteTeamService,
    getBlogService,
    getServiceService,
    getSliderService,
    getTeamService,
    serviceCreateService,
    sliderCreateService,
    teamCreateService
} from "../service/Service.js";

// Slider Controller
export const sliderCreate = async (req, res) => {
    try {
        let result = await sliderCreateService(req,res);
        res.json(result);
    } catch (error) {
        res.status(500).json({ status: false, message: error.toString() });
    }
};
export const getSlider = async (req, res) => {
    try {
        let result = await getSliderService(req,res);
        res.json(result);
    } catch (error) {
        res.status(500).json({ status: false, message: error.toString() });
    }
};

export const deleteSlider = async (req, res) => {
    let result = await deleteSliderService(req);
    return res.status(200).json(result);
};


// Blog Controller
export const blogCreate = async (req, res) => {
    try {
        let result = await blogCreateService(req,res);
        res.json(result);
    } catch (error) {
        res.status(500).json({ status: false, message: error.toString() });
    }
};

export const getBlog = async (req, res) => {
    try {
        let result = await getBlogService(req,res);
        res.json(result);
    } catch (error) {
        res.status(500).json({ status: false, message: error.toString() });
    }
};
export const deleteBlog = async (req, res) => {
    let result = await deleteBlogService(req);
    return res.status(200).json(result);
};


// Team Controller
export const teamCreate = async (req, res) => {
    try {
        let result = await teamCreateService(req,res);
        res.json(result);
    } catch (error) {
        res.status(500).json({ status: false, message: error.toString() });
    }
};


export const getTeam = async (req, res) => {
    try {
        let result = await getTeamService(req,res);
        res.json(result);
    } catch (error) {
        res.status(500).json({ status: false, message: error.toString() });
    }
};
export const deleteTeam = async (req, res) => {
    let result = await deleteTeamService(req);
    return res.status(200).json(result);
};


// Service Controller
export const serviceCreate = async (req, res) => {
    try {
        let result = await serviceCreateService(req,res);
        res.json(result);
    } catch (error) {
        res.status(500).json({ status: false, message: error.toString() });
    }
}

export const getService = async (req, res) => {
    try {
        let result = await getServiceService(req,res);
        res.json(result);
    } catch (error) {
        res.status(500).json({ status: false, message: error.toString() });
    }
};
export const deleteService = async (req, res) => {
    let result = await deleteServiceService(req);
    return res.status(200).json(result);
};
