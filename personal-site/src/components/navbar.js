import React from "react";

function NavBar() {

    const navbarLinks = [
        { name: "HOME", link: "/" },
        { name: "SKILLS", link: "/skills" },
        { name: "EXPERIENCE", link: "/experience" },
        { name: "PROJECTS", link: "/projects" },
    ];

    return (
        // returns navigation bar component with links to other pages
        <div className="flex flex-row justify-around items-center w-full h-16 bg-background px-32">
                    { navbarLinks.map(({ name, link }) => (
                    <div className="text-titleColor hover:text-hoverColor transition-colors ease-in-out duration-300">
                        <p class="">{name}</p>
                    </div>
                ))} 
        </div>

   )
}

export default NavBar;