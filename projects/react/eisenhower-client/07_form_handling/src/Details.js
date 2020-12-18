import React from "react";
import { Redirect } from "@reach/router";

class Details extends React.Component {

    state = {
        loading: true
    }

    constructor(props) {
        super(props);
        this.completeTodo = props.completeTodo;
        this.todoService = props.todoService;
    }

    componentDidMount() {
        const id = parseInt(this.props.id, 10);
        this.todoService.findById(id).then(todo => {
            console.log("Todo:", todo);
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
                        <button
                            className="btn btn-outline-success"
                            onClick={() => {
                                this.completeTodo(todo);
                                this.setState({
                                    redirect: true
                                })
                            }}>
                            <span className="oi oi-circle-check" title="Complete"></span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Details;