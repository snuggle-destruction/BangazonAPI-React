import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Computers extends Component {

    render() {

        let allComputers = this.props.computers.map((item, index) => {
            return (
                <Card body key={ item.id }>
                    <CardTitle>{ item.make }, { item.manufacturer }</CardTitle>
                    <CardText>{ item.decomissionDate !== '0001-01-01T00:00:00' ? "Decomissioned" : "In Use" }</CardText>
                </Card>
            );
        });

        return (
            <CardColumns>{ allComputers }</CardColumns>
        )
    }
}
