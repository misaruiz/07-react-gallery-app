import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (
    <nav class="main-nav">
        <ul>
            <li><NavLink to="/sunsets">Sunsets</NavLink></li>
            <li><NavLink to="/eclipses">Eclipses</NavLink></li>
            <li><NavLink to="/shadows">Shadows</NavLink></li>
        </ul>
    </nav>
);

export default Nav;