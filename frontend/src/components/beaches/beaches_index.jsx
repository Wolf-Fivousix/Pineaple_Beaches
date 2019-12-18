import React from "react";
import { Link } from "react-router-dom";
// import BeachShow from "./beach_show";
// import { connect } from "react-redux";

class BeachesIndex extends React.Component {

  render() {
    const { beach } = this.props;
    // const timeDifference = (Date.now() - new Date(beach.date).getTime()) / 1000 / 60;
    // const time = Math.floor(timeDifference);
    return (
      <Link to={`/beaches/${beach._id}`}>
        <ul>
          <div className="beach-name-container">
            <li><h1 className="beach-name">{beach.name}</h1></li>
          </div>
          <div className="beach-location-container">
            <li>{beach.location}</li>
          </div>
        </ul>
      </Link>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(BeachesIndex);
export default BeachesIndex;