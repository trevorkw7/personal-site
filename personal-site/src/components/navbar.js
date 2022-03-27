import React from "react";
import { COLORS } from ".././values/colors";

function NavBar() {

    const navbarLinks = [
        { name: "Home", link: "/" },
        { name: "Skills", link: "/skills" },
        { name: "Experience", link: "/experience" },
        { name: "Projects", link: "/projects" },
    ];

    return (
        // returns navigation bar component with links to other pages
        <div className="flex-row space-between bg-background">
            {navbarLinks.map(({ name, link }) => (
                <div className="order-1">
                    <a href={link}>{name}</a>
                </div>
            ))}
        </div>


    )

}

export default NavBar;