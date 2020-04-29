import React, { Component } from 'react';
class ToDoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className="list-group mt-2">
                <li className="list-group-item">
                    <div className="d-flex">
                        <div>
                            <input id="list-check" type="checkbox" />
                            <label htmlFor="list-check">{this.props.data} </label>
                        </div>
                        <div className="ml-auto">
                            <i className="fa fa-trash trash--color fa-lg" aria-hidden="true"></i>
                        </div>
                    </div>
                </li>
            </ul>
        );
    }
}
export default ToDoList;