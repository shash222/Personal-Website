import React, { Component } from 'react';
import navItems from '../../constants/TopLinks.json'
import '../../styles/HomeViewStyles/TopNavBar.css'
import { NavLink } from 'react-router-dom'

export default class TopNavBar extends Component {
    render() {
        return (
            <nav id="topNavBarContainer">
                <ul id="topNavBarItems">
                    {navItems.map(item => (
                        <li key={item.linkText + "Link"} className="navItem">
                            <NavLink to={item.path}>{item.linkText}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}