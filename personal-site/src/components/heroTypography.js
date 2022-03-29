import React from "react";

// hero typography, requires name and description variables
const HeroTypography = (props) => {
    const NAME = "Trevor";
    const DESCRIPTION = ['Self-Starter // Developer // Entrepreneur', 'Mathematics and Computer Science Major @ UCSD', 'Founder of Notes For Frontliners']

    return (
        <div className="flex flex-col flex-auto w-6/12 px-10  ">
            <div className="flex flex-col flex-auto w-full justify-center">
                <p className="text-titleColor text-3xl text-left py-3">
                Hello, I'm
                </p>
                <p className="text-titleColor text-8xl text-left py-3">
                {NAME}.
                </p>
            </div>
            <div className="flex flex-col flex-auto w-full justify-center">
                {DESCRIPTION.map((line) => (
                    <p className="text-textColor text-lg text-left py-2">
                        {line}
                    </p>
                ))}
                {console.log(DESCRIPTION)}
            </div>
            <div className="flex-auto w-32">

            </div>
        </div>
    )
}

export default HeroTypography;