import React, {useEffect} from 'react';
import img from '../assets/image/hero (2).png';
import apiCall from "../store/apiCall.js";
import SliderSkeleton from "../skeleton/SliderSkeleton.jsx";
import {Link} from "react-router-dom";
const Slider = () => {
    const {SliderDataRequest,SliderData} = apiCall();
    useEffect(() => {
        (async () => {
            await SliderDataRequest()
        })()
    }, []);
    return (
       <section className="dark:bg-gray-100 mt-8 dark:text-gray-800">
                <div className="container mx-auto">
                    {
                        SliderData?.map((item,index) => {
                            return (
                                <div key={index} className="grid grid-cols-12">
                                <div className='col-span-6'>
                                    <div
                                        className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                        <h1 className="text-5xl font-bold leading-none text-center text-[#2507b1] sm:text-6xl">
                                            {item.name}
                                        </h1>
                                        <p className="mt-6 mb-8 text-lg sm:mb-12">{item.description}</p>
                                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                            <Link  to="/about" className="px-8 py-3 text-lg hover:bg-indigo-700 hover:text-white font-semibold border rounded dark:border-gray-800">More...</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <div
                                        className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                        <img src={item['img']} alt="Image"
                                             className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"/>
                                    </div>
                                </div>
                            </div>)
                        })
                    }

                </div>
            </section>

    );
};

export default Slider;