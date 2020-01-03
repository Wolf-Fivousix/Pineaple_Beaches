import React from 'react';

class ReviewBox extends React.Component {
    render() {
        return (
            <li className="single-review">{this.props.post}</li>
        )
    }
}

export default ReviewBox;