import React from 'react';
import SkillItem from '../components/Skills/SkillItem';
import skillData from '../data/Skills/skills.json';
import './SkillPage.css';

const renderSkills = () => {
    const skills = skillData.skills;
    return skills.map((skill, index) => (
        <SkillItem key={index} value={skill.value} name={skill.name} />
    ));
};

function SkillPage() {
    return <div className="skillPage">{renderSkills()}</div>;
}

export default SkillPage;
