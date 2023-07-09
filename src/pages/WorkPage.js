import React from 'react';
import { Item } from 'semantic-ui-react';
import WorkItem from '../components/Work/WorkItem';
import workData from '../data/Work/work.json';
import './WorkPage.css';

const renderWorkExperience = () => {
    const workExperiences = workData.work;
    return workExperiences.map((workExperience, index) => (
        <WorkItem
            key={index}
            company={workExperience.company}
            designation={workExperience.designation}
            startDate={workExperience.startDate}
            endDate={workExperience.endDate}
        />
    ));
};

function WorkPage() {
    return <Item.Group>{renderWorkExperience()}</Item.Group>;
}

export default WorkPage;
