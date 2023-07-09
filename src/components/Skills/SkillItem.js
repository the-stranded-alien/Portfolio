import React from 'react';
import SkillSubItem from '../Skills/SkillSubItem';
import { Progress } from 'semantic-ui-react';
import './SkillItem.css';

const skillValueOutOf = 10;

const SkillItem = ({ value, name, subSkills }) => {
    return (
        <div className="skillItem">
            <Progress
                size={'medium'}
                color={'green'}
                value={value}
                total={skillValueOutOf}
                progress={'ratio'}
            >
                {name}
            </Progress>
            <SkillSubItem subSkills={subSkills} skillValueOutOf={skillValueOutOf} />
        </div>
    );
};

export default SkillItem;
