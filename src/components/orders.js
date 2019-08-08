import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardSubtitle, CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Order extends Component {

    render() {

        let allOrders = this.props.customers.map((item, index) => {
            let customerPaymentsObj = {};
            this.props.customerPayments.forEach(customerPayment => {
                if (customerPayment.id === item.customerId) {
                    customerPaymentsObj = customerPayment
                }
            });
            return (
                <Card body key={ item.id }>
                    <CardTitle>{ item.firstName } { item.lastName }</CardTitle>
                    <CardSubtitle>{ customerPaymentsObj.name }</CardSubtitle>
                </Card>
            );
        });

        return (
            <CardColumns>{ allOrders }</CardColumns>
        )
    }
}
