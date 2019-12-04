import { connect } from 'react-redux';
import { fetchUserReviews } from '../../actions/review_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  // debugger
  return {
    reviews: Object.values(state.entities.reviews.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserReviews: id => dispatch(fetchUserReviews(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);