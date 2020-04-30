import React, { Component } from 'react';
import navItems from '../../constants/HomeViewLinks.json'
import '../../styles/HomeViewStyles/TopNavBar.css'
import { Link } from 'react-scroll'

export default class TopNavBar extends Component {
    render() {
        return (
            <nav id="topNavBarContainer">
                <ul id="topNavBarItems">
                    {navItems.sections.map(item => (
                        <li key={item.referenceId + "Link"} className="navItem">
                            <Link
                                activeClass="active"
                                to={item.referenceId}
                                spy={true}
                                duration={1000}>
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}