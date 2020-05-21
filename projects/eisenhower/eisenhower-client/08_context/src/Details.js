import React from "react";
import { Redirect } from "@reach/router";
import TodoContext from "./TodoContext";

class Details extends React.Component {

    state = {
        loading: true
    }

    constructor(props) {
        super(props);
        this.todoService = props.todoService;
    }

    componentDidMount() {
        const id = parseInt(this.props.id, 10);
        this.todoService.findById(id).then(todo => {
            this.setState({
                todo: todo,
                loading: false
            });
        })
    }

    render() {
        const todo = this.state.todo;
        if (this.state.redirect) {
            return <Redirect noThrow={true} to="/" />
        }
        return this.state.loading ? <div>Loading</div> : (
            <div className="card">
                <div className="card-header">
                    <h3>{todo.title}</h3>
                </div>
                <div className="card-body">
                    <dl>
                        <dt>Urgency</dt>
                        <dd>{todo.urgency}</dd>
                        <dt>Importance</dt>
                        <dd>{todo.importance}</dd>
                    </dl>
                    <p>{todo.description}</p>
                    <div className="btn-group">
                        <TodoContext.Consumer>
                            {(completeTodo) => {
                                return (
                                    <button
                                        className="btn btn-outline-success"
                                        onClick={() => {
                                            completeTodo(todo);
                                            this.setState({
                                                redirect: true
                                            })
                                        }}>
                                        <span className="oi oi-circle-check" title="Complete"></span>
                                    </button>
                                )
                            }}
                        </TodoContext.Consumer>
                    </div>
                </div>
            </div>
        )
    }
}
export default Details;