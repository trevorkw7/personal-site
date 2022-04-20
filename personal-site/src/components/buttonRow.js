import React from "react";
import { ReactComponent as GithubLogo }from './logos/github.svg'
import { ReactComponent as LinkedinLogo }from './logos/linkedin.svg'
import { ReactComponent as InstagramLogo }from './logos/instagram.svg'
import { ReactComponent as DevpostLogo }from './logos/devpost.svg'
const ButtonRow = () => {
    return (
        <div className="flex flex-row py-2">
            <button onClick={() => window.location = "https://github.com/trevorkw7"} className="pr-10">
               <GithubLogo className="fill-white hover:fill-hoverColor transition-colors ease-in-out duration-300" width="2rem" />
            </button>
            <button onClick={() => window.location = "https://devpost.com/trevorkw7"} className="pr-10">
               <DevpostLogo className="fill-white hover:fill-hoverColor transition-colors ease-in-out duration-300" width="2rem" fill="white"/>
            </button>
            <button className="pr-10">
               <LinkedinLogo onClick={() => window.location = "https://www.linkedin.com/in/trevor-kwan/"} className="fill-white hover:fill-hoverColor transition-colors ease-in-out duration-300" width="2rem" fill="white"/>
            </button>
            <button onClick={() => window.location = "https://www.instagram.com/tk7.photo/"} className="pr-10">
               <InstagramLogo className="fill-white hover:fill-hoverColor transition-colors ease-in-out duration-300" width="2rem" fill="white"/>
            </button>
        </div>
    )
}

export default ButtonRow;