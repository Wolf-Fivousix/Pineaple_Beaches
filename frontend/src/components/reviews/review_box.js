import React from 'react';

class ReviewBox extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.post}</h1>
            </div>
        )
    }
}

export default ReviewBox;