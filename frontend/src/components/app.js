import React from 'react';
import '../stylesheets/main_css';   // all stylesheets
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash/splash';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from './session/signup_form_container';
import ReviewsContainer from './reviews/reviews_container';
import ReviewComposeContainer from './reviews/review_composer_container';
import ProfileContainer from './profile/profile_container';

const App = () => (
    <div className="app-container">
        <Switch>
            <Route exact={true} path="/" component={Splash} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <ProtectedRoute exact path="/reviews" component={ReviewsContainer} />
            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <ProtectedRoute exact path="/new_review" component={ReviewComposeContainer} />
        </Switch>
    </div>
);

export default App;
