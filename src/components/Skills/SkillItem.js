import React from 'react';
import { Progress } from 'semantic-ui-react';

const skillValueOutOf = 10;

const SkillItem = ({ value, name }) => {
    return (
        <Progress
            size={'medium'}
            color={'green'}
            value={value}
            total={skillValueOutOf}
            progress={'ratio'}
        >
            {name}
        </Progress>
    );
};

export default SkillItem;
