import skillData from '../../data/Skills/skills.json';
import SkillItem from './SkillItem';
import './SkillList.css';

const renderSkillList = () => {
    const skills = skillData.skills;
    return skills.map((skill, index) => (
        <SkillItem
            key={index}
            value={skill.overallValue}
            name={skill.category}
            subSkills={skill.subSkills}
        />
    ));
};

const SkillList = () => {
    return <div className="skillList">{renderSkillList()}</div>;
};

export default SkillList;
