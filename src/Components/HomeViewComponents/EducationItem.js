import React, { Component } from 'react';
import EducationCard from './EducationCard.js'
import CourseCard from './CourseCard.js'
import '../../styles/HomeViewStyles/EducationItem.css'

export default class EducationItem extends Component {
    render() {
        return (
            <div className="educationItemWrapper itemWrapper">
                <div className="educationItemContainer">
                    <EducationCard education={this.props.education} />
                    <div className="relevantCoursesContainer">
                        <h3 className="relevantCoursesHeading">Relevant Courses</h3>
                        <div className="relevantCoursesCardsContainer">

                            {this.props.education.relevantCourses.map((course, i) => (
                                <CourseCard key={course.courseName} course={course} delay={i} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}