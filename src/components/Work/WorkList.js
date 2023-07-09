import workData from '../../data/Work/work.json';
import WorkItem from './WorkItem';

const WorkList = () => {
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

export default WorkList;
