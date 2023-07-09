import { Card, Icon } from 'semantic-ui-react';
import React from 'react';

function HomePage() {
    return (
        <Card centered>
            <Card.Content>
                <Card.Header>Under Construction</Card.Header>
                <Card.Meta>
                    <span className="date">Started 07/2023</span>
                </Card.Meta>
                <Card.Description>This website is under construction</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name="computer" />
                    Work in progress ! Stay Clear !
                </a>
            </Card.Content>
        </Card>
    );
}

export default HomePage;
