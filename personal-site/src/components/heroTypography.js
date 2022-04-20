import React from "react";
import ButtonRow from "./buttonRow";

// hero typography, requires name and description variables
const HeroTypography = (props) => {
    const NAME = "Trevor";
    const DESCRIPTION = ['Self-Starter // Developer // Lifelong-Learner', 'Mathematics and Computer Science Major @ UCSD']

    return ( 
        <div className="flex flex-col justify-center grow px-10  ">
                <p className="text-titleColor text-3xl text-left py-3">
                Hello, I'm
                </p>
                <p className="text-titleColor text-8xl text-left py-3">
                {NAME}.
                </p>
                {DESCRIPTION.map((line) => (
                    <p className="text-textColor text-lg text-left py-2">
                        {line}
                    </p>
                ))}
                 <p className="text-textColor text-lg text-left py-2">
                     Founder of <a className="underline"href="https://notesforfrontliners.org/">Notes For Frontliners</a>
                 </p>
                <ButtonRow />

        </div>
    )
}

export default HeroTypography;