import React from "react";

export const NavBar = () => {
    return (
        <header className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <a className="nav_link" href="#">logo</a>
                </div>
                <ul className="nav_list">

                    <li className="nav_link">algo1<a href="#"></a>
                    </li>
                    
                    <li className="nav_link">algo2<a href="#"></a>
                    </li>
                    
                    <li className="nav_link">algo3<a href="#"></a>
                    </li>

                </ul>
            </nav>
            
        </header>
    );
}

export default NavBar;