import React, { Component } from 'react';
import '../styles/CourseCard.css'

export default class EducationCard extends Component {
    render() {
        return (
            <div className="courseCardWrapper cardWrapper">
                <div className="courseCardContainer card"  data-aos="flip-right" data-aos-duration="1000" data-aos-delay={this.props.delay * 150}>
                    <div className="front">
                        <div className="">{this.props.course.courseName}</div>
                    </div>
                    <div className="back">
                        <div className="">{this.props.course.courseDescription}</div>
                    </div>
                </div>

            </div>
        )
    }
}