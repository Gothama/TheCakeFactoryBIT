
import React, { Component } from 'react';
import CustNav from './custNav.component';
import CustDetails from './custDetails.component';


export default class CustomerAccount extends Component {

    render() {
        return (
            <div>
                <div style={{ backgroundColor: "#14213d", paddingBottom: "100px", paddingTop: "100px" }} >
                    <CustNav />
                    <h1 className="container" style={{ color: "white", paddingTop: "50px" }}>My Account</h1>
                    <CustDetails />
                </div>

            </div>

        );
    }
}