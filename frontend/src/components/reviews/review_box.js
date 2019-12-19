import React from 'react';

class ReviewBox extends React.Component {
    render() {
        return (
            <ul>
                <li className="single-review">{this.props.post}</li>
                {/* <li>{this.props.username}</li> */}
            </ul>
        )
    }
}

export default ReviewBox;