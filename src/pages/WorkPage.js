import React from 'react';
import { Item } from 'semantic-ui-react';
import './WorkPage.css';
import WorkList from '../components/Work/WorkList';

function WorkPage() {
    return <Item.Group>{WorkList()}</Item.Group>;
}

export default WorkPage;
