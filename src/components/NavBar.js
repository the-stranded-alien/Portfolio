import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './NavBar.css';

const NavBar = () => {
    const navBarItems = [
        { name: 'Home', path: '#/home', icon: 'home' },
        { name: 'About Me', path: '#/about', icon: 'address card' },
        { name: 'Work Experience', path: '#/work', icon: 'suitcase' },
        { name: 'Education', path: '#/education', icon: 'book' },
        { name: 'Skills', path: '#/skill', icon: 'keyboard' },
        { name: 'Projects', path: '#/project', icon: 'file' },
        { name: 'Certifications', path: '#/certification', icon: 'newspaper' },
        { name: 'Courses', path: '#/course', icon: 'video' },
        { name: 'Resume', path: '#/resume', icon: 'clipboard' },
    ];

    const renderNavBarItems = () => {
        return navBarItems.map((item, index) => (
            <Menu.Item key={index} as="a" href={item.path}>
                <Icon name={item.icon} />
                {item.name}
            </Menu.Item>
        ));
    };

    return (
        <Menu pointing className={'ui nine item menu'}>
            {/*<Menu.Item>*/}
            {/*    <Image*/}
            {/*        rounded*/}
            {/*        circular*/}
            {/*        src={'/myAvatar.png'}*/}
            {/*        alt={'Logo'}*/}
            {/*        className={'navbar-avatar'}*/}
            {/*    />*/}
            {/*</Menu.Item>*/}
            {renderNavBarItems()}
            {/*<Menu.Menu>*/}
            {/*    <div className="desktop-menu">{renderNavBarItems()}</div>*/}
            {/*    <div className="mobile-menu">*/}
            {/*        {renderNavBarItems().slice(0, 2)}*/}
            {/*        {navBarItems.length > 2 && (*/}
            {/*            <Dropdown item icon={'bars'}>*/}
            {/*                <Dropdown.Menu>{renderNavBarItems().slice(2)}</Dropdown.Menu>*/}
            {/*            </Dropdown>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*</Menu.Menu>*/}
        </Menu>
    );
};

export default NavBar;
