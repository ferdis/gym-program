import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Program from '../program';
import {Button, Container, Divider, Grid, Header, Icon, Item, Message} from "semantic-ui-react";

export class Days extends Component {

    render() {
        const day = this.props.match.params.day;

        const exercises = Program.getDailyExercises(day).map(({ picture, name, sets }, index) => (
            <Item key={index}>
                {picture && <Item.Image size="small" src={picture} />}

                <Item.Content>
                    <Item.Header as="a">{name}</Item.Header>
                    <Item.Description>
                    </Item.Description>
                    <Item.Extra><strong>Sets:</strong> {sets.join(', ')}</Item.Extra>
                </Item.Content>
            </Item>
        ));

        if (!exercises.length) {
            return <Container>
                <Message icon="calendar outline" header="There are no exercises for this day" content="You can add some exercises for this day in program.js"/>
                <Link to="/"><Icon name="left arrow" /> Go Back</Link>
            </Container>
        }

        return <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width="10" verticalAlign="middle">
                        <Header as="h3">{ Program.getDayName(day) }</Header>
                    </Grid.Column>
                    <Grid.Column width="6" textAlign="right" verticalAlign="middle">
                        <Link to="/">
                            <Button animated>
                                <Button.Content visible>Back</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='left arrow' />
                                </Button.Content>
                            </Button>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Divider/>

            <Item.Group divided>{exercises}</Item.Group>
        </Container>;
    }
}
