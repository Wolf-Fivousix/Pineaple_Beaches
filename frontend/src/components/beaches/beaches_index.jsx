import React from "react";
import { Link } from "react-router-dom";
// import BeachShow from "./beach_show";
// import { connect } from "react-redux";

class BeachesIndex extends React.Component {
  // handleClick() {
  // 	return (e) => console.log(e.currentTarget);
  // }

  render() {
    const { beach } = this.props;
    const beachName = beach.name;
    // console.log(new Date().getTime() - Date.now());
    // console.log(typeof (new Date()));
    // const timeDifference = (Date.now() - new Date(beach.date).getTime()) / 1000 / 60;
    // const time = Math.floor(timeDifference);
    // console.log(new Date(beach.date).getTime());
    // console.log(ObjectId(beach._id).getTimestamp());
    return (
      <Link to={`/beaches/${beach._id}`}>
        <div className="picTitleAligner">
          <img src={require(`../../images/${beachName}.jpg`)}  alt="beachImage" className="miniImage"/>
          <ul>
            <div className="beach-name-container">
              <li><h1 className="beach-name">{beach.name}</h1></li>
            </div>
            <div className="beach-location-container">
              <li>{beach.location}</li>
            </div>
          </ul>
        </div>
      </Link>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(BeachesIndex);
export default BeachesIndex;