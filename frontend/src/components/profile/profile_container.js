import { connect } from 'react-redux';
import { fetchUserReviews } from '../../actions/review_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    reviews: Object.values(state.reviews.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserReviews: id => dispatch(fetchUserReviews(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);