import React from "react";
import CartWidget from '../cartwidget'


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
                    
                    <li className="nav_link"><CartWidget /><a href="#"></a>
                    </li>

                </ul>
            </nav>
            
        </header>
    );
}

export default NavBar;