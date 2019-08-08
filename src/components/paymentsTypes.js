import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardSubtitle, CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class paymentTypes extends Component {

    render() {

        let allPaymentTypes = this.props.payments.map((item, index) => {
            let PaymentsObj = {};
            this.props.payments.forEach(payment => {
                if (payment.id === item.customerId) {
                    PaymentsObj = payment
                }
            });
            return (
                <Card body key={ item.id }>
                    <CardTitle>{ item.Name }</CardTitle>
                </Card>
            );
        });

        return (
            <CardColumns>{ allPaymentTypes }</CardColumns>
        )
    }
}
