import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import computerManager from './modules/computerManager';
import customerManager from './modules/customerManager';
import departmentManager from './modules/departmentManager';
import employeeManager from './modules/employeeManager';
import orderManager from './modules/orderManager';
import paymentManager from './modules/paymentTypeManager';
import productManager from './modules/productManager';
import trainingProgram from './modules/trainingProgram';
import Home from './components/home';
import Customer from './components/customers';



class ApplicationViews extends Component {
    state = {
        computers: [],
        customers: [],
        departments: [],
        employees: [],
        paymentTypes: [],
        productManagers: [],
        trainingPrograms: []
    };
    //calls


    componentDidMount() {
        const newState = {};
        computerManager.getAllComputers()
            .then(computers => { newState.computers = computers })
            .then(customerManager.getAllCustomers)
            .then(customers => { newState.customers = customers })
            .then(departmentManager.getAllDepartments)
            .then(departments => { newState.departments = departments })
            .then(employeeManager.getAllEmployees)
            .then(employees => { newState.employees = employees })
            .then(orderManager.getAllOrders)
            .then(orders => { newState.orders = orders })
            .then(paymentManager.getAllPaymentTypes)
            .then(paymentTypes => { newState.paymentTypes = paymentTypes })
            .then(productManager.getAllProducts)
            .then(productManagers => { newState.productManagers = productManagers })
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
                            />
                        } } />
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(ApplicationViews);