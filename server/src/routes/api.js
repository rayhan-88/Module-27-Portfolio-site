import express from 'express';
import {
    blogCreate, deleteBlog, deleteService, deleteSlider, deleteTeam,
    getBlog, getService,
    getSlider,
    getTeam,
    serviceCreate,
    sliderCreate,
    teamCreate
} from "../controller/controller.js";

import upload from "../middleware/fileUplodeMiddleware.js";
import {fileUpload} from "../controller/fileUplodeController.js";
import {login, logout, register} from "../controller/userController.js";

const router = express.Router();

// Slider Api
router.post('/slider-create',sliderCreate)
router.get('/get-slider',getSlider)
router.delete("/delete-slider/:id",deleteSlider);
// Blog Api
router.post('/blog-create',blogCreate)
router.get('/get-blog',getBlog)
router.delete("/delete-blog/:id",deleteBlog);
// Team Api
router.post('/team-create',teamCreate)
router.get('/get-team',getTeam)
router.delete("/delete-team/:id",deleteTeam);
// Service Api
router.post('/service-create',serviceCreate)
router.get('/get-service',getService)
router.delete("/delete-service/:id",deleteService);
// User Api
router.post("/register",register);
router.post("/login",login);
router.get("/logout",logout);









// File Upload
router.post('/file-upload', upload.array("file", 20),fileUpload)










export default router;