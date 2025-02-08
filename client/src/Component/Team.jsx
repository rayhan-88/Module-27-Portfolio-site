import React, {useEffect} from 'react';
import apiCall from "../store/apiCall.js";

const Team = () => {
    const {TeamDataRequest,TeamData} = apiCall();
    useEffect(() => {
        (async () => {
            await TeamDataRequest()
        })()
    }, []);
    return (
        <div className="font-sans pb-24">
            <div className="container mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-gray-800 text-3xl font-extrabold">Meet our team</h2>
                    <p className="text-gray-800 text-sm mt-4 leading-relaxed">
                        Meet our team of professionals to serve you.
                    </p>
                </div>
                <div className="w-full lg:w-[65%] mx-auto gap-4 lg:grid lg:grid-cols-3 align-middle justify-center gap-4 mt-12">
                    {
                        TeamData?.map((item,index)=>{
                            return (
                                <div key={index} className="">
                                    <div >
                                        <div className="border rounded-lg  overflow-hidden">
                                            <img src={item['img']}
                                                className="w-full h-56 object-cover"
                                                 alt={item.name}
                                            />
                                            <div className="p-4">
                                                <h4 className="text-gray-800 text-base font-bold">{item.name}</h4>
                                                <p className="text-gray-800 text-xs mt-1">{item.designation}</p>
                                                <span className=" mt-4">
                                                {item.description}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
};

export default Team;