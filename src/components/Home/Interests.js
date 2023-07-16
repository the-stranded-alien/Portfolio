import React from 'react';
import Typewriter from 'typewriter-effect';

const Interests = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    'Full Stack Development',
                    'Cloud & DevOps',
                    'Systems Architecture',
                    'Databases & Data Engineering',
                    'Data Science',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
};

export default Interests;
