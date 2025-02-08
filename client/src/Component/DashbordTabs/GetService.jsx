import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import apiCall from "../../store/apiCall.js";

const GetService = () => {
    const navigate = useNavigate();
    const {ServiceDataRequest,ServiceData,ServiceDeleteRequest} = apiCall();
    const [get, setGet] = useState([]);
    // get All Product
    useEffect(() => {
        (async () => {
            await ServiceDataRequest();

        })();
    }, []);

    // delete slider
    let deleteProductFun = async (id) => {
        let result =  await ServiceDeleteRequest(id);
        if(result){
            await ServiceDataRequest();
            navigate('/dashboard');
        }
    };
    return (
        <>
            {/* component */}
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <div className='grid grid-cols-12 gap-[2px]'>
                    <div className='col-span-12'>
                        <table className=" table-fixed w-full">
                            <thead>
                            <tr>
                                <th className="px-4 py-2">Title</th>
                                <th className="px-4 py-2">Description</th>

                            </tr>
                            </thead>
                            <tbody>
                            {
                                ServiceData?.map((item,index) => (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{item['title']}</td>
                                        <td className="border px-4 py-2">{item['description']}</td>
                                        <td className='px-6 py-4'>
                                        <span onClick={() => deleteProductFun(item['_id'])}
                                              className='rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button'>
                                        Remove
                                        </span>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>


                        </table>
                    </div>

                </div>
            </div>
        </>
    );
};

export default GetService;