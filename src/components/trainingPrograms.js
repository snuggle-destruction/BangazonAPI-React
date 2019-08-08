import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardSubtitle, CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class trainingPrograms extends Component {

    render() {
        let allPrograms = this.props.programs.map((item, index) => {
            return (
                <Card body key={ item.id }>
                    <CardTitle>{ item.name }</CardTitle>
                </Card>
            );
        });

        return (
            <CardColumns>{ allPrograms }</CardColumns>
        )
    }
}