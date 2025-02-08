import React, {useEffect} from 'react';
import apiCall from "../store/apiCall.js";
import img from "../assets/image/technology.png";
import {Link} from "react-router-dom";

const Blog = () => {
    const {BlogDataRequest,BlogData} = apiCall();
    useEffect(() => {
        (async () => {
            await BlogDataRequest()
        })()
    }, []);

    return (
        <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
            <div className="container mx-auto">
                <div className="">
                    <h1 className="text-4xl text-indigo-700  my-8 pt-5">Latest popular Blog</h1>
                    <div className="lg:grid lg:grid-cols-3 gap-4">
                        {
                            BlogData?.map((item, index) => (
                                <div key={index} className="max-w-sm p-3  rounded-2xl overflow-hidden shadow-xl">
                                    <img className="w-full" src={item['img']} alt="Sunset in the mountains"/>
                                    <div className="px-6 pt-4">
                                        <div className="font-bold text-xl mb-2">{item.title}</div>
                                        <p className="text-gray-700 text-base">
                                            {item.description}
                                        </p>

                                        <Link to="/blog-details" className="pt-3  flex justify-end items-center  hover:text-indigo-700" >
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

        </div>

    );
};

export default Blog;


