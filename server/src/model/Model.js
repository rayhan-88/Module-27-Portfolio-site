import mongoose from 'mongoose';
// Slider Schema
const SliderSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true},
}, { timestamps: true ,versionKey: false });


const sliderModel = mongoose.model('slider',SliderSchema);


// Blog Schema
const BlogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true}

}, { timestamps: true,versionKey: false });

 const blogModel = mongoose.model('blog',BlogSchema);

// Team Schema
const TeamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    designation: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true}

}, { timestamps: true,versionKey: false });

const teamModel = mongoose.model('team',TeamSchema);

// Service Schema
const serviceSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
}, { timestamps: true,versionKey: false });

const serviceModel = mongoose.model('services',serviceSchema);




export { sliderModel, blogModel,teamModel,serviceModel };