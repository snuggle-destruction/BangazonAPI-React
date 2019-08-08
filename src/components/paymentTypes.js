import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardSubtitle, CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class paymentTypes extends Component {

    render() {
        let allPayments = this.props.payment.map((item, index) => {
            return (
                <Card body key={ item.id }>
                    <CardTitle>{ item.name }</CardTitle>
                </Card>
            );
        });

        return (
            <CardColumns>{ allPayments }</CardColumns>
        )
    }
}
