import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardSubtitle, CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Departments extends Component {

    render() {

        let allDepartments = this.props.departments.map((item, index) => {
            return (
                <Card body key={ item.id }>
                    <CardTitle>{ item.name }</CardTitle>
                    <CardSubtitle>${ item.budget }</CardSubtitle>
                </Card>
            );
        });

        return (
            <CardColumns>{ allDepartments }</CardColumns>
        )
    }
}
