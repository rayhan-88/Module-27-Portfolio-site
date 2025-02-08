import React, {useState} from 'react';
import userApiCall from "../../store/userApiCall.js";
import apiCall from "../../store/apiCall.js";
import toast from "react-hot-toast";
import ValidationHelper from "../../utility/ValidationHelper.js";

const AddTeam = () => {
    const {TeamCreateRequest} = apiCall();
    let [data, setData] = useState({
        name: "",
        description: "",
        designation: "",
        img: "",
    });




    let submitData = async () => {
        if (!!ValidationHelper.IsEmpty(data.name)) {
            toast.error(" Name is required.");
        } else if (!!ValidationHelper.IsEmpty(data.description)) {
            toast.error(" Description is required.");
        }else if (!!ValidationHelper.IsEmpty(data.designation)) {
            toast.error(" Designation is required.");
        } else if (!!ValidationHelper.IsEmpty(data.img)) {
            toast.error(" Image is required.");
        } else {
            await TeamCreateRequest(data)


        }
    };
    return (
        <>
            <h2 className="text-center mt-16 text-green-600 text-4xl">Add new team details</h2>
            <br/>

            <div>
                <div className='grid grid-cols-12 gap-[30px]'>
                    <div className='col-span-4'>
                        <label className='text-[14px] font-bold'>Name:</label>
                        <div className='relative'>
                            <input
                                onChange={(e) =>
                                    setData({...data, name: e.target.value})
                                }
                                className='w-full rounded-lg border border-gray-600 p-4 pe-12 text-sm shadow-sm '
                                type='text'
                            />
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <label className='text-[14px] font-bold'>Designation:</label>
                        <div className='relative'>
                            <input
                                onChange={(e) =>
                                    setData({...data, designation: e.target.value})
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
                    <div className='col-span-4'>
                        <label className='text-[14px] font-bold'>
                            Choose image:
                        </label>
                            <div className='relative'>
                                <input
                                    onChange={(e) => setData({...data, img: e.target.value})}
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

export default AddTeam;