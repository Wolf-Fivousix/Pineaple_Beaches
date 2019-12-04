import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ReviewNavbar from './review_nav';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
});

export default connect(
    mapStateToProps,{ logout })
(ReviewNavbar);