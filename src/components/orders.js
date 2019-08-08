import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardSubtitle, CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Order extends Component {

    render() {

        let allOrders = this.props.customers.map((item, index) => {
            let paymentsObj = {};
            this.props.payments.forEach(payment => {
                if (payment.id === item.paymentTypeId && item.paymentTypeId !== null) {
                    paymentsObj = payment
                }
            });
            return (
                <Card body key={ item.id }>
                    <CardTitle>{ item.firstName } { item.lastName }</CardTitle>
                    <CardSubtitle>{ paymentsObj.name }</CardSubtitle>
                </Card>
            );
        });

        return (
            <CardColumns>{ allOrders }</CardColumns>
        )
    }
}
