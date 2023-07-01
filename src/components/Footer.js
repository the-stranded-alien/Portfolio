import React from 'react';
import { Grid, Menu, Icon } from 'semantic-ui-react';

const Footer = () => {
    return (
        <Grid.Row>
            <Grid.Column>
                <Menu fixed="bottom" inverted>
                    <Menu.Item>
                        <Icon corner name="call" />
                        +91 7249999056
                    </Menu.Item>
                    <Menu.Item>
                        <Icon corner name="mail" />
                        sahil16gupta11@gmail.com
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item href="https://www.github.com">
                            <Icon corner name="github" />
                        </Menu.Item>
                        <Menu.Item href="https://www.linkedin.com">
                            <Icon corner name="linkedin" />
                        </Menu.Item>
                        <Menu.Item href="https://www.twitter.com">
                            <Icon corner name="twitter" />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Grid.Column>
        </Grid.Row>
    );
};

export default Footer;
