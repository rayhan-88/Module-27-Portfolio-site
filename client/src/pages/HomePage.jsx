import React from 'react';
import Layout from "../Component/Layout/Layout.jsx";
import Slider from "../Component/Slider.jsx";
import Header from "../Component/Layout/Header.jsx";
import Footer from "../Component/Layout/Footer.jsx";
import Blog from "../Component/Blog.jsx";



const HomePage = () => {
    return (
        <Layout>

            <Slider/>
            <Blog/>

        </Layout>
    );
};

export default HomePage;