import React from "react";
import ErrorBoundary from "./ErrorBoundary";

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.todoService = props.todoService;
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        throw new Error("lol");
        this.todoService.findById(this.props.id).then(todo => {
            this.setState({
                todo: todo,
                loading: false
            })
        })
    }

    render() {
        const todo = this.state.todo;
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
                </div>
            </div>
        )

    }
}
export default function DetailsWithErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    )
}