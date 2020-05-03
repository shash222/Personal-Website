import React, { Component } from 'react';
import '../../styles/ProjectsViewStyles/DetailedProjectCard.css'


export default class DetailedProjectCard extends Component {

    constructor(props) {
        super(props)
        this.handleViewButtonClick = this.handleViewButtonClick.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.getChildren = this.getChildren.bind(this)
        this.getChildren = this.getChildren.bind(this)
    }

    componentDidMount() {
        window.addEventListener('click', (e) => this.handleClick(e))
    }

    handleClick(e) {
        var buttons = document.getElementsByTagName("button")
        var openSampleNode = undefined
        for (let button of buttons) {
            var sampleNode = this.getSampleNode(button.parentNode)
            if (button !== e.target) {
                if (button.classList.contains("active")) {
                    button.classList.remove("active")
                    sampleNode.classList.remove("selected")
                    sampleNode.classList.add("unselected")
                }
            } else {
                openSampleNode = sampleNode
                // e.target.scrollIntoView({block: "end"})
            }
        }
        if (e.target.tagName.toLowerCase() === "button") {
            this.handleViewButtonClick(e, openSampleNode)
        }
    }

    getChildren(n, skipMe) {
        var r = [];
        for (; n; n = n.nextSibling)
            if (n.nodeType === 1 && n !== skipMe)
                r.push(n);
        return r;
    };

    getSiblings(n) {
        return this.getChildren(n.parentNode.firstChild, n);
    }

    getSampleNode(parentNode) {
        var siblings = this.getSiblings(parentNode)
        for (let sib of siblings) {
            if (sib.classList.contains("sample")) {
                return sib
            }
        }
    }

    handleViewButtonClick(e, sampleNode) {
        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active")
            sampleNode.classList.remove("selected")
            sampleNode.classList.add("unselected")
            window.setTimeout(() => {
                if (e.targetNode)
                    e.target.parentNode.scrollIntoView({block: "center"})
            }, 500)
        } else {
            e.target.classList.add("active")
            sampleNode.classList.add("selected")
            sampleNode.classList.remove("unselected")
            window.setTimeout(() => {sampleNode.scrollIntoView({block: "center"})}, 500);
        }
        // console.log(e.target.parentNode.siblingNodes)
    }

    render() {
        return (
            <div className="detailedProjectCardContainer" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay={100 * this.props.delay}>
                <div className="detailedProjectCard">
                    <button onClick={this.handleClick}>View</button>
                </div>
                <div className="sample"></div>
            </div>
        )
    }
}