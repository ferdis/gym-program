import React from 'react';
import {Link} from "react-router-dom";
import {Header, List} from "semantic-ui-react";
import Program from '../program';

export default () => {
    const dayList = Program.dayNames.map((dayName, index) => (
        <List.Item key={index}>
            <List.Content>
                <Link to={'/day/' + (index + 1)}>
                    <div>
                    <Header as="h4">
                        Day {index + 1}
                    </Header>
                    <span>{dayName}</span>
                </div>
                </Link>
            </List.Content>
        </List.Item>
    ));

    return <List divided relaxed>
        {dayList}
    </List>
};