import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Nav, NavItem, NavLink } from 'reactstrap';


class Navbar extends Component {
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div>
                <Nav pills>
                    <NavItem>
                        <NavLink
                            to="/"
                            tag={ Link } active={ window.location.pathname === '/' }>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/computers"
                            tag={ Link } active={ window.location.pathname === '/computers' }>Computers</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/customers"
                            tag={ Link } active={ window.location.pathname === '/customers' }>Customers</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/departments"
                            tag={ Link } active={ window.location.pathname === '/departments' }>Departments</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/employees"
                            tag={ Link } active={ window.location.pathname === '/employees' }>Employees</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/orders"
                            tag={ Link } active={ window.location.pathname === '/orders' }>Orders</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/paymenttypes"
                            tag={ Link } active={ window.location.pathname === '/paymenttypes' }>Payment Types</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/products"
                            tag={ Link } active={ window.location.pathname === '/products' }>Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/trainingprograms"
                            tag={ Link } active={ window.location.pathname === '/trainingprograms' }>Training Programs</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default withRouter(Navbar)