import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import {Days} from "./days/days";
import NoMatch from './days/no-match';

import './App.css';
import {Container, Header, Icon} from "semantic-ui-react";

class App extends Component {
    render() {
        return <Container text>
            <Header className="main-header">
                <Icon name="calendar alternate outline"/>
                <Header.Content>Gym Program</Header.Content>
            </Header>
            <Switch>
                <Route path="/day/:day" component={Days}/>
                <Route component={NoMatch}/>
            </Switch>
        </Container>;
    }
}

export default App;
