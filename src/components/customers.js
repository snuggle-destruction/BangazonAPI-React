import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardSubtitle, CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Customer extends Component {

    render() {

        let allCustomers = this.props.customerProducts.map((item, index) => {
            let titles = "";
            item.products.forEach(product => {
                if (product !== null)
                    titles += product.title;
            });
            return (
                <Card body key={ item.id }>
                    <CardTitle>{ item.firstName } { item.lastName }</CardTitle>
                    <CardSubtitle>{ item.isActive ? "Active" : "Inactive" }</CardSubtitle>
                    <CardText>Products: { titles }</CardText>
                </Card>
            );
        });

        return (
            <CardColumns>{ allCustomers }</CardColumns>
        )
    }
}
