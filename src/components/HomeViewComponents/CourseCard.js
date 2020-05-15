import React, { Component } from 'react';
import '../../styles/HomeViewStyles/CourseCard.css'

export default class EducationCard extends Component {
    render() {
        return (
            <div className="courseCardWrapper cardWrapper" data-aos="flip-right" data-aos-duration="1000" data-aos-delay={this.props.delay * 200}>
                <div className="courseCard card" >
                    <div className="front">
                        <p className="">{this.props.course.courseName}</p>
                    </div>
                    <div className="back">
                        <p className="">{this.props.course.courseDescription}</p>
                    </div>
                </div>

            </div>
        )
    }
}