import React from 'react';
import { Item } from 'semantic-ui-react';

const WorkItem = ({ company, designation, startDate, endDate }) => {
    return (
        <Item>
            <Item.Content>
                <Item.Header>{company}</Item.Header>
                <Item.Meta>{designation}</Item.Meta>
                <Item.Extra>
                    {startDate} - {endDate}
                </Item.Extra>
            </Item.Content>
        </Item>
    );
};

export default WorkItem;
