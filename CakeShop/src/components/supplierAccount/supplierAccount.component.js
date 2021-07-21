
import React, { Component } from 'react';

import SupDetails from './supDetails.component';
import SupNav from './supNav.component';


export default class SupplierAccount extends Component {

    render() {
        return (
            <div>
                <div style={{ backgroundColor: "#14213d", paddingBottom: "100px", paddingTop: "100px" }} >
                    <SupNav />
                    <h1 className="container" style={{ color: "white", paddingTop: "50px" }}>My Account</h1>
                    <SupDetails />
                </div>

            </div>

        );
    }
}