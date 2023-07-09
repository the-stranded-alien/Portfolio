import { Progress } from 'semantic-ui-react';
import './SkillSubItem.css';

const SkillSubItem = ({ subSkills, skillValueOutOf }) => {
    return (
        <div className="skillSubItem">
            {subSkills.map((subSkill, index) => (
                <Progress
                    key={index}
                    size={'medium'}
                    color={'green'}
                    value={subSkill.value}
                    total={skillValueOutOf}
                    progress={'ratio'}
                >
                    {subSkill.name}
                </Progress>
            ))}
        </div>
    );
};

export default SkillSubItem;
