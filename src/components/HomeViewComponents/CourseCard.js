import React, { Component } from 'react';
import '../../styles/HomeViewStyles/CourseCard.css'

export default class EducationCard extends Component {
    render() {
        return (
            <div className="courseCardWrapper cardWrapper" data-aos="flip-right" data-aos-duration="500" data-aos-delay={this.props.delay * 100}>
                <div className="courseCard card" >
                    <div className="front">
                        <p className="courseName">{this.props.course.courseName}</p>
                    </div>
                    <div className="back">
                        <p className="courseDescription">{this.props.course.courseDescription}</p>
                    </div>
                </div>

            </div>
        )
    }
}