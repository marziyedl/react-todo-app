import React, { Component } from 'react'
import './Header.css'
class HeaderComponent extends Component {

    render() {
        return (
            <div className="col-sm-12">
                <div className="row d-flex justify-content-center align-items-center header-block">
                    <h1 className="header--color"> ToDo List
            </h1>
                </div>

            </div>)
    }
}
export default HeaderComponent;