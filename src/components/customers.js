import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, CardDeck } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Customer extends Component {

    render() {

        let allCustomers = this.props.customers.map((item, index) => {
            return (
                <Card body key={ item.id }>
                    <CardTitle>{ item.firstName } { item.lastName }</CardTitle>
                    <CardSubtitle>{ item.isActive ? "Active" : "Inactive" }</CardSubtitle>
                    <CardSubtitle>{ item.department }</CardSubtitle>
                    <CardText>{ item.products }</CardText>
                </Card>
            );
        });

        return (
            <CardDeck>{ allCustomers }</CardDeck>
        )
    }
}
