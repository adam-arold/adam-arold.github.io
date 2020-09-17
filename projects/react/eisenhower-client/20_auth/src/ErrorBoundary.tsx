import React, { ErrorInfo } from "react";

class ErrorBoundary extends React.Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("There was an error", error, info);
    }

    render() {
        return this.state.hasError ? (
            <div>Some unfortunate error happened. <a href="/">Click here</a> to go back to the main page.</div>
        ) : this.props.children
    }
}

export default ErrorBoundary;