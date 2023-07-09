import React from 'react';
import './SkillPage.css';
import SkillList from '../components/Skills/SkillList';

function SkillPage() {
    return <div className="skillPage">{SkillList()}</div>;
}

export default SkillPage;
