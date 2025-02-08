import React, {useState} from 'react';
import userApiCall from "../../store/userApiCall.js";
import apiCall from "../../store/apiCall.js";
import toast from "react-hot-toast";
import ValidationHelper from "../../utility/ValidationHelper.js";

const AddService = () => {

    const {ServiceCreateRequest} = apiCall();
    let [data, setData] = useState({
        title: "",
        description: ""
    });

    let submitData = async () => {
        if (!!ValidationHelper.IsEmpty(data.title)) {
            toast.error(" Title is required.");
        } else if (!!ValidationHelper.IsEmpty(data.description)) {
            toast.error(" Description is required.");
        }else {
            await ServiceCreateRequest(data)


        }
    };
    return (
        <>
            <h2 className="text-center mt-16 text-green-600 text-4xl">Add new service details</h2>
            <br/>

            <div>
                <div className='grid grid-cols-12 gap-[30px]'>
                    <div className='col-span-4'>
                        <label className='text-[14px] font-bold'>Title:</label>
                        <div className='relative'>
                            <input
                                onChange={(e) =>
                                    setData({...data, title: e.target.value})
                                }
                                className='w-full rounded-lg border border-gray-600 p-4 pe-12 text-sm shadow-sm '
                                type='text'
                            />
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <label className='text-[14px] font-bold'>
                            Description:
                        </label>
                        <div className='relative'>
                            <input
                                onChange={(e) =>
                                    setData({...data, description: e.target.value})
                                }
                                className='w-full rounded-lg border border-gray-600 p-4 pe-12 text-sm shadow-sm '
                            />
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between mt-3'>
                    <button
                        onClick={submitData}
                        className="px-[16px] py-[8px] hover:bg-indigo-700 hover:text-white bg-white border dark:border-gray-800 text-lg rounded"
                        type='submit'
                    >
                        Add Slider
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddService;