import React, { Component } from 'react';
import '../../styles/HomeViewStyles/HomeViewNavBar.css';
import navItems from '../../constants/HomeViewLinks.json'
import { Link } from 'react-scroll'

export default class HomeViewNavBar extends Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.animateHomeViewNavBar = this.animateHomeViewNavBar.bind(this);
        this.setHomeViewNavLinkToActive = this.setHomeViewNavLinkToActive.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        const scrollValue = window.scrollY;
        if (scrollValue % vh === 0) {
            // const newSectionNumber = Math.round(scrollValue / vh)
            // this.props.handleSectionChange(newSectionNumber - this.props.currentSectionNumber)
        }
        const newSectionNumber = Math.round(scrollValue / vh)
        // console.log(newSectionNumber, this.props.currentSectionNumber)
        // if (newSectionNumber !== this.props.currentSectionNumber) {
        //     console.log("Animating")
        this.animateHomeViewNavBar()
        this.setHomeViewNavLinkToActive();
        if (newSectionNumber !== this.props.currentSectionNumber)
            this.props.handleSectionChange(newSectionNumber - this.props.currentSectionNumber)
        // }
    }

    setHomeViewNavLinkToActive() {
        var homeNavBarLinks = document.querySelectorAll("#homeViewNavBarItems .navItem>a");
        [].forEach.call(homeNavBarLinks, (link) => {
            link.classList.remove("active")
        })
        if (this.props.currentSectionNumber > 0)
            homeNavBarLinks[this.props.currentSectionNumber - 1].classList.add('active')
    }

    animateHomeViewNavBar() {

        const height = window.innerHeight;
        const scrollPosition = window.scrollY;
        const elem = document.getElementById("homeViewNavBarContainer");
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
                                // spy={true}
                                smooth={true}
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