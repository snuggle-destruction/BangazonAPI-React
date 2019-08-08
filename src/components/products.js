import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardColumns } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Products extends Component {

    render() {

        let allProducts = this.props.products.map((item, index) => {
            return (
                <Card body key={ item.id }>
                    <CardTitle>{ item.title }, { item.quantity }</CardTitle>
                    <CardText>{ item.description }</CardText>
                </Card>
            );
        });

        return (
            <CardColumns>{ allProducts }</CardColumns>
        )
    }
}
