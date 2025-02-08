import React, {useEffect, useState} from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import toast from "react-hot-toast";
import "react-tabs/style/react-tabs.css";
import ValidationHelper from "../utility/ValidationHelper.js";
import userApiCall from "../store/userApiCall.js";
import apiCall from "../store/apiCall.js";
import AddSlider from "./DashbordTabs/AddSlider.jsx";
import GetSlider from "./DashbordTabs/GetSlider.jsx";
import GetBlog from "./DashbordTabs/GetBlog.jsx";
import AddBlog from "./DashbordTabs/AddBlog.jsx";
import AddTeam from "./DashbordTabs/AddTeam.jsx";
import GetTeam from "./DashbordTabs/GetTeam.jsx";
import AddService from "./DashbordTabs/AddService.jsx";
import GetService from "./DashbordTabs/GetService.jsx";


const Dashboard = () => {




    return (
        <>
            {/* nav bar */}
            <nav className='bg-gray-600 h-[80px] flex justify-center items-center'>
                <h2 className='text-white font-semibold text-[40px]'>
                    Welcome to our dashboard
                </h2>
            </nav>
            <br />
            <div className='container mx-auto'>
                <Tabs>
                    <TabList>
                        <Tab>Add Slider</Tab>
                        <Tab>List Slider</Tab>
                        <Tab>Add Blog</Tab>
                        <Tab>List Blog</Tab>
                        <Tab>Add Team</Tab>
                        <Tab>List Team</Tab>
                        <Tab>Add Service</Tab>
                        <Tab>List Service</Tab>
                    </TabList>

                    {/* Add Slider */}
                    <TabPanel>
                       <AddSlider/>
                    </TabPanel>

                    {/* All Slider */}
                    <TabPanel>
                        <GetSlider/>
                    </TabPanel>




                    {/* Add Blog */}
                    <TabPanel>
                       <AddBlog/>
                    </TabPanel>
                    {/* All Blog */}
                    <TabPanel>
                        <GetBlog/>
                    </TabPanel>



                    {/* Add Team */}
                    <TabPanel>
                       <AddTeam/>
                    </TabPanel>
                    {/* All Team */}
                    <TabPanel>
                        <GetTeam/>
                    </TabPanel>



                    {/* Add Service */}
                    <TabPanel>
                       <AddService/>
                    </TabPanel>
                    {/* All Service */}
                    <TabPanel>
                        <GetService/>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default Dashboard;