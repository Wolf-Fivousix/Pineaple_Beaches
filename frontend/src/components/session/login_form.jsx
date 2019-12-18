import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import LogoNav from '../nav/logonav';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.setErrorArray = this.setErrorArray.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    demoUser(e) {
        e.preventDefault();

        const demo = {
            username: "DemoUser",
            password: "password"
        }

        this.props.demoUser(demo);
    }

    // Once the user has been authenticated, redirect to the Profile page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/reviews');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Once the user refreshes it clears errors
    componentWillUnmount() {
        this.props.clearErrors();
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.login(user);
    }

    // Set error array to change length of form height
    setErrorArray() {
        let errorArray = [];

        Object.keys(this.state.errors).map((error) => (
            errorArray.push(this.state.errors[error])
        ))

        return errorArray;
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul className="error-ul">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li className="error-login" key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        if (this.setErrorArray().length > 0) {
            return (
                <div className="login-content-container">
                    <LogoNav />
                    <div className="login-form-container">
                        <form className="login-form-errors" onSubmit={this.handleSubmit}>
                            <div className="l-form-content">
                                <Link className="back-arrow" to="/">&#8592;</Link>
                                <h1 className="login-label">Log In</h1>
                                <br/>
                                <input className="login-input" type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    placeholder="Username"
                                />
                                <br />
                                <input className="login-input" type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                />
                                <br />
                                <input className="login-submit" type="submit" value={this.props.formType} />
                                <br />
                                <div className="login-bottom-content">
                                    <h3 className="no-account">Don't have an account?</h3>
                                    <Link className="to-signup" to="/signup">Sign Up Here!</Link>
                                    <button className="demo-but" onClick={this.demoUser}>Demo Login</button>
                                </div>
                                <br/>
                                {this.renderErrors()}
                            </div>
                        </form>
                    </div>
                    <h1 className="trade-mark-sessions">®</h1>
                </div>
            );
        } else {
            return (
                <div className="login-content-container">
                    <LogoNav />
                    <div className="login-form-container">
                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <div className="l-form-content">
                                <Link className="back-arrow" to="/">&#8592;</Link>
                                <h1 className="login-label">Log In</h1>
                                <br/>
                                <input className="login-input" type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    placeholder="Username"
                                />
                                <br />
                                <input className="login-input" type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                />
                                <br />
                                <input className="login-submit" type="submit" value={this.props.formType} />
                                <br />
                                <div className="login-bottom-content">
                                    <h3 className="no-account">Don't have an account?</h3>
                                    <Link className="to-signup" to="/signup">Sign Up Here!</Link>
                                    <button className="demo-but" onClick={this.demoUser}>Demo Login</button>
                                </div>
                                <br/>
                            </div>
                        </form>
                    </div>
                    <h1 className="trade-mark-sessions">®</h1>
                </div>
            );
        }
    }
}

export default withRouter(LoginForm);