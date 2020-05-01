import React, {Component} from 'react';
import ExperienceViewIntroSection from '../components/ExperienceViewComponents/ExperienceViewIntroSection.js'
import ExperienceSection from '../components/ExperienceViewComponents/ExperienceSection.js'
import '../styles/ExperienceViewStyles/ExperienceView.css'

export default class ExperienceView extends Component {
    render() {
        return(
            <div id="experienceView">
                <ExperienceViewIntroSection />
                <ExperienceSection />
            </div>
        )
    }
}