import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardSubtitle, CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Employee extends Component {

    render() {

        let allEmployees = this.props.employees.map((item, index) => {
            let departmentObj = {};
            this.props.departments.forEach(department => {
                if (department.id === item.departmentId) {
                    departmentObj = department
                }
            });
            return (
                <Card body key={ item.id }>
                    <CardTitle>{ item.firstName } { item.lastName }</CardTitle>
                    <CardSubtitle>{ item.isSupervisor ? "Supervisor" : "General Employee" }</CardSubtitle>
                    <CardText>{ departmentObj.name }</CardText>
                </Card>
            );
        });

        return (
            <CardColumns>{ allEmployees }</CardColumns>
        )
    }
}
