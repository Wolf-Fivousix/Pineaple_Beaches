import React from "react";
import { Link } from "react-router-dom";

class BeachesIndex extends React.Component {

  render() {
    const { beach } = this.props;
    const beachName = beach.name;

    return (
      <Link to={`/beaches/${beach._id}`}>
        <div className="picTitleAligner">
          <img src={require(`../../images/${beachName}.jpg`)}  alt="beachImage" className="miniImage"/>
          <ul className="beachIndexInfo">
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

export default BeachesIndex;
