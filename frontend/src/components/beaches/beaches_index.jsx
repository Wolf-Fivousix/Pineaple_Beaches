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
        // console.log(new Date().getTime() - Date.now());
        // console.log(typeof (new Date()));
        const timeDifference = (Date.now() - new Date(beach.date).getTime()) / 1000 / 60;
        const time = Math.floor(timeDifference);
        // console.log(new Date(beach.date).getTime());
        // console.log(ObjectId(beach._id).getTimestamp());
        return(
			<Link to={`/beaches/${beach._id}`}>
				<ul>
						<li><h1>{beach.name}</h1></li>
						<li>{beach.location}</li>
						<br/>
						<li>{beach.description}</li>
						<li>Temp: {beach.temperature}</li>
						<br/>
						<li>{time}</li> 
				</ul>
			</Link>
        );
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(BeachesIndex);
export default BeachesIndex;