import React from "react";
import { Redirect, RouteComponentProps } from "@reach/router";
import TodoContext from "./TodoContext";
import TodoService from "./TodoService";

interface DetailsProps extends RouteComponentProps {
    id?: string;
    todoService: TodoService;
}

class Details extends React.Component<DetailsProps> {
    state: {
        loading: boolean;
        redirect: boolean;
        todo: ITodo | null;
    } = {
        loading: true,
        redirect: false,
        todo: null,
    };
    private todoService: TodoService;

    constructor(props: DetailsProps) {
        super(props);
        this.todoService = props.todoService;
    }

    componentDidMount() {
        if (this.props.id) {
            this.todoService.findById(this.props.id).then((todo) => {
                this.setState({
                    todo: todo,
                    loading: false,
                });
            });
        }
    }

    render() {
        const todo = this.state.todo;
        if (this.state.redirect) {
            return <Redirect noThrow={true} to="/" />;
        }
        return this.state.loading ? (
            <div>Loading</div>
        ) : todo == null ? (
            <div>Loading</div>
        ) : (
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
                                                redirect: true,
                                            });
                                        }}
                                    >
                                        <span
                                            className="oi oi-circle-check"
                                            title="Complete"
                                        ></span>
                                    </button>
                                );
                            }}
                        </TodoContext.Consumer>
                    </div>
                </div>
            </div>
        );
    }
}
export default Details;
