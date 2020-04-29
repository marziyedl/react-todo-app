import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../Header/Header';
import FormAddToDO from '../FormAddToDo/FormAddToDo';
import ToDoList from '../ToDoList/ToDoList';
class AppComponent extends Component {
    state = { todos: [] };
    constructor() {
        super();
    }
    formHanler(text) {
        debugger;
        this.setState((prevState) => {
            return {
                todos: [
                    ...prevState.todos,
                    { key: Date.now(), done: false, text }]
            }
        });
    }

    render() {
        let { todos } = this.state;
        return (
            <div>
                <Header />
                <div className="container col-6 align-self-center mt-3">
                    <FormAddToDO addText={this.formHanler.bind(this)} />
                    {
                        todos.length === 0
                            ? <p>not todos</p>
                            : todos.map(item => <ToDoList key={item.key} data={item.text} />)
                    }

                </div>
            </div>

        );
    }
}
export default AppComponent;