import React from 'react';
import About from "../Component/About.jsx";
import Layout from "../Component/Layout/Layout.jsx";
import Team from "../Component/Team.jsx";

const AboutPage = () => {
    return (
        <Layout>
           <About/>
            <Team/>
        </Layout>
    );
};

export default AboutPage;