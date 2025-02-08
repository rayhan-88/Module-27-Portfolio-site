import React, {useEffect} from "react";
import {RiSettings6Line, RiTailwindCssFill} from "react-icons/ri";
import {FaGitAlt, FaReact} from "react-icons/fa";
import {IoLogoNodejs} from "react-icons/io";
import {MdOutlineSpeed} from "react-icons/md";
import apiCall from "../store/apiCall.js";


const Services = () => {
    const {ServiceDataRequest,ServiceData} = apiCall();
    useEffect(() => {
        (async () => {
            await ServiceDataRequest()
        })()
    }, []);
    return (
        <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="w-full ">
                        <div className="mx-auto mb-12 w-full text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                Services
                            </span>
                            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                What I Offer
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                I provide high-quality, customized services designed to meet your needs, ensuring
                                efficiency, innovation, and exceptional results.
                            </p>
                        </div>
                        <div className=" lg:grid lg:grid-cols-3 gap-4">
                            {
                                ServiceData?.map((item, index) => (
                                    <div key={index} className=" ">
                                        <div className=" px-4 ">
                                            <div
                                                className="mb-9 h-[370px] w-[450px] rounded-[20px] bg-white py-10 px-5 shadow-xl dark:bg-dark-2 md:px-7 xl:px-10">
                                                <div
                                                    className="mb-4  flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
                                                    {item?.title==="Frontend Development"?<FaReact color="#66dbfd" fontSize="40px" />:<></>}
                                                    {item?.title==="Based on Tailwind CSS"?<RiTailwindCssFill color="#00bcff" fontSize="40px"/>:<></>}
                                                    {item?.title==="Backend Development"?<IoLogoNodejs color="#549e44" fontSize="40px"/>:<></>}
                                                    {item?.title==="Fast & Optimized Performance"?<MdOutlineSpeed color="#13cd05" fontSize="40px"/>:<></>}
                                                    {item?.title==="API Development & Integration"?<RiSettings6Line color="#1d07cd" fontSize="40px"/>:<></>}
                                                    {item?.title==="Version Control"?<FaGitAlt color="#f94828" fontSize="40px"/>:<></>}
                                                </div>
                                                <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
                                                    {item.title}
                                                </h4>
                                                <p className="text-body-color dark:text-dark-6">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Services;


