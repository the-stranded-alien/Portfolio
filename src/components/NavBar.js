import React from 'react';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const NavBar = () => {
    return (
        <Menu className={'ui nine item menu'}>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Education</Menu.Item>
            <Menu.Item>Work Experience</Menu.Item>
            <Menu.Item>Skills</Menu.Item>
            <Menu.Item>Projects</Menu.Item>
            <Menu.Item>Certifications</Menu.Item>
            <Menu.Item>Courses</Menu.Item>
            <Menu.Item>Resume</Menu.Item>
        </Menu>
    );
};

export default NavBar;
