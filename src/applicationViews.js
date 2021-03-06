import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import computerManager from './modules/computerManager';
import customerManager from './modules/customerManager';
import departmentManager from './modules/departmentManager';
import employeeManager from './modules/employeeManager';
import paymentManager from './modules/paymentTypeManager';
import productManager from './modules/productManager';
import trainingProgram from './modules/trainingProgramManager';
import Home from './components/home';
import Customer from './components/customers';
import Computer from './components/computers';
import Department from './components/departments';
import Employee from './components/employees';
import Order from './components/orders';
import PaymentType from './components/paymentTypes';
import TrainingProgram from './components/trainingPrograms'
import Product from './components/products';




class ApplicationViews extends Component {
    state = {
        computers: [],
        customers: [],
        customerPayments: [],
        customerProducts: [],
        departments: [],
        employees: [],
        paymentTypes: [],
        products: [],
        trainingPrograms: []
    };
    //calls


    componentDidMount() {
        const newState = {};
        computerManager.getAllComputers()
            .then(computers => { newState.computers = computers })

            .then(customerManager.getAllCustomers)
            .then(customers => { newState.customers = customers })

            .then(customerManager.getAllCustomersPayments)
            .then(customerPayments => { newState.customerPayments = customerPayments })

            .then(customerManager.getAllCustomersProducts)
            .then(customerProducts => { newState.customerProducts = customerProducts })

            .then(departmentManager.getAllDepartments)
            .then(departments => { newState.departments = departments })

            .then(employeeManager.getAllEmployees)
            .then(employees => { newState.employees = employees })

            .then(paymentManager.getAllPaymentTypes)
            .then(paymentTypes => { newState.paymentTypes = paymentTypes })

            .then(productManager.getAllProducts)
            .then(productManagers => { newState.products = productManagers })

            .then(trainingProgram.getAllTrainingPrograms)
            .then(trainingPrograms => { newState.trainingPrograms = trainingPrograms })

            .then(() => this.setState(newState));
    }

    render() {
        return (
            <>
                <div className="App">
                    <div>
                        <Route exact path="/" render={ (props) => {
                            return <Home
                                { ...props }
                                { ...this.props }
                            />
                        } } />

                        <Route exact path="/customers" render={ (props) => {
                            return <Customer
                                { ...props }
                                { ...this.props }
                                customers={ this.state.customers }
                                customerProducts={ this.state.customerProducts }
                            />
                        } } />

                        <Route exact path="/computers" render={ (props) => {
                            return <Computer
                                { ...props }
                                { ...this.props }
                                computers={ this.state.computers }
                            />
                        } } />

                        <Route exact path="/departments" render={ (props) => {
                            return <Department
                                { ...props }
                                { ...this.props }
                                departments={ this.state.departments }
                            />
                        } } />

                        <Route exact path="/employees" render={ (props) => {
                            return <Employee
                                { ...props }
                                { ...this.props }
                                employees={ this.state.employees }
                                departments={ this.state.departments }
                            />
                        } } />

                        <Route exact path="/orders" render={ (props) => {
                            return <Order
                                { ...props }
                                { ...this.props }
                                customers={ this.state.customerPayments }
                                payments={ this.state.paymentTypes }
                            />
                        } } />

                        <Route exact path="/products" render={ (props) => {
                            return <Product
                                { ...props }
                                { ...this.props }
                                products={ this.state.products }
                            />
                        } } />

                        <Route exact path="/paymentTypes" render={ (props) => {
                            return <PaymentType
                                { ...props }
                                { ...this.props }
                                payment={ this.state.paymentTypes }
                            />
                        } } />

                        <Route exact path="/trainingPrograms" render={ (props) => {
                            return <TrainingProgram
                                { ...props }
                                { ...this.props }
                                programs={ this.state.trainingPrograms }
                            />
                        } } />
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(ApplicationViews);