import React from 'react';
import img from '../assets/image/image-3.png';
const About = () => {
    return (
        <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <h6 className="flex justify-center pb-16 text-[40px]  text-base text-indigo-700 font-normal leading-relaxed">
                    Who I Am
                </h6>
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full lg:justify-start justify-center items-start flex">
                        <div
                            className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                            <img
                                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                src={img}
                                alt="about Us image"
                            />
                        </div>
                    </div>
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        The Tale of Our Achievement Story
                                    </h2>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Our achievement story is a testament to teamwork and
                                        perseverance. Together, we've overcome challenges, celebrated
                                        victories, and created a narrative of progress and success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;