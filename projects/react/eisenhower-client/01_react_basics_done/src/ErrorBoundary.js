import React, { Component } from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error("There was an error.", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    There was an error. <Link to="/">Click here</Link> to go back to the homepage.
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;