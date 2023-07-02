import { Slider } from 'semantic-ui-react';

const SkillItem = (min, max, value) => {
    return <Slider min={min} max={max} value={value} />;
};
