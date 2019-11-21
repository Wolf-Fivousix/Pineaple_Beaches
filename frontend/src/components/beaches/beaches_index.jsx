import React from "react";
// import { connect } from "react-redux";

class BeachesIndex extends React.Component {

    render() {
        const { beach } = this.props;
        return(
          <ul>
                <li><h1>{beach.name}</h1></li>
                <li>{beach.location}</li>
                <br/>
                <li>{beach.description}</li>
          </ul>
        );
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(BeachesIndex);
export default BeachesIndex;