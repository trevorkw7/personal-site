import React from "react"; 
import HeroTypography from "./heroTypography";
import ImageHolder from "./imageholder";
// returns the hero section of the website
const Hero = ({children}) => {
    return (
        <div className="flex flex-row min-h-full justify-around align-middle bg-background">
            <HeroTypography/>
            <ImageHolder path="portrait.jpg" alt="portrait"/>
        </div>

    )
}

export default Hero;