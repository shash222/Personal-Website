import React, { Component } from 'react';
import '../../styles/HomeViewStyles/HomeViewNavBar.css';
import navItems from '../../constants/HomeViewLinks.json'
import { Link } from 'react-scroll'

export default class HomeViewNavBar extends Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.animateHomeViewNavBar = this.animateHomeViewNavBar.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.animateHomeViewNavBar()
        const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        const scrollValue = window.scrollY;
        if (scrollValue % vh === 0) {
            const newSectionNumber = Math.round(scrollValue / vh)
            this.props.handleSectionChange(newSectionNumber - this.props.currentSectionNumber)
        }
    }

    animateHomeViewNavBar() {

        const height = window.innerHeight;
        const scrollPosition = window.scrollY;
        const elem = document.getElementById("homeViewNavBarContainer");
        console.log(scrollPosition)
        if (scrollPosition > height) {
            elem.classList.add("show")
            elem.classList.remove("hide")
        } else {
            elem.classList.add("hide")
            elem.classList.remove("show")
        }

        // --------------------  commented out because this was buggy
        // nav display portion by scroll position
        // const height = window.innerHeight;
        // const scrollPosition = window.scrollY;
        // var newLeftPosition = "0vw";
        // const elem = document.getElementById("homeViewNavBarContainer");
        // console.log(scrollPosition, newLeftPosition)
        // if (scrollPosition < height) {
        //     newLeftPosition = (scrollPosition / height * elem.offsetWidth - elem.offsetWidth) + "px";
        // }
        // elem.style.left = newLeftPosition;
    }



    render() {
        return (
            <nav id="homeViewNavBarContainer" >
                <ul id="homeViewNavBarItems">
                    {navItems.sections.slice(1).map(item => (
                        <li key={item.referenceId + "Link"} className="navItem">
                            <Link
                                activeClass="active"
                                to={item.referenceId}
                                spy={true}
                                duration={500}>
                                {item.linkText}
                            </Link>
                        </li>
                    ))}

                </ul>

            </nav>
        )
    }
}