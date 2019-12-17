import React from 'react';
import { unlink } from 'fs';

class ReviewBox extends React.Component {
    render() {
        
        // debugger
        return (
            <ul>
                <li className="single-review">{this.props.post}</li>
            </ul>
        )
    }
}

export default ReviewBox;