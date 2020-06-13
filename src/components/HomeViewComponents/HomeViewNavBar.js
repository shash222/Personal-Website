import React, { Component } from 'react';
import '../../styles/HomeViewStyles/HomeViewNavBar.css';
import navItems from '../../constants/HomeViewLinks.json'

export default class HomeViewNavBar extends Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.animateHomeViewNavBar = this.animateHomeViewNavBar.bind(this);
        this.setHomeViewNavLinkToActive = this.setHomeViewNavLinkToActive.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setHomeViewNavLinkToActive();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.animateHomeViewNavBar()
        const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        const scrollValue = window.scrollY;
        const newSectionNumber = Math.round(scrollValue / vh)
        if (newSectionNumber !== this.props.currentSectionNumber) {
            // if (scrollValue % vh === 0) {
            this.setHomeViewNavLinkToActive(newSectionNumber);
            this.props.handleSectionChange(newSectionNumber - this.props.currentSectionNumber)
        }
    }

    setHomeViewNavLinkToActive(newSectionNumber) {
        var homeNavBarLinks = document.querySelectorAll("#homeViewNavBarItems .navItem>button");
        [].forEach.call(homeNavBarLinks, (link) => {
            link.classList.remove("active")
        })
        if (newSectionNumber > 0 && newSectionNumber <= homeNavBarLinks.length)
            homeNavBarLinks[newSectionNumber - 1].classList.add('active')
    }

    animateHomeViewNavBar() {

        const height = window.innerHeight;
        const scrollPosition = window.scrollY;
        const elem = document.getElementById("homeViewNavBarContainer");
        if (scrollPosition >= height / 2) {
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
        // if (scrollPosition < height) {
        //     newLeftPosition = (scrollPosition / height * elem.offsetWidth - elem.offsetWidth) + "px";
        // }
        // elem.style.left = newLeftPosition;
    }



    render() {
        return (
            <nav id="homeViewNavBarContainer" >
                <ul id="homeViewNavBarItems">
                    {navItems.sections.slice(1).map((item, i) => (
                        <li key={item.referenceId + "Link"} className="navItem" onClick={() => this.props.handleSectionNavigationArrowClick(i + 1)}>
                            <button className="homeViewNavBarLink">{item.linkText}</button>
                        </li>
                    ))}

                </ul>

            </nav>
        )
    }
}