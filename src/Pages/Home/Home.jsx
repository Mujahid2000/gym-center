
import { Helmet } from "react-helmet";

import HomeBanner from "./Banner";


import Subscription from "./Subscription";

import Program from "./Program";
import FitnessPlan from "./FitnessPlan";
import Pricing from "./Pricing";
import Review from "./Review";
import { Lenis } from "lenis/react";



const Home = () => {
    return (
        <Lenis root >
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <Program/>
            <FitnessPlan/>
            <Pricing/>
            <Review/>
             <Subscription></Subscription>
            
        </Lenis>
    );
};

export default Home;