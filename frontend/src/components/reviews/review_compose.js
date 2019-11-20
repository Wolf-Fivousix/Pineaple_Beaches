import React from 'react';
import ReviewBox from './review_box';

class ReviewCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post:"",
            newReview:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState( {newReview: nextProps.newReview.post})
    }

    handleSubmit(e) {
        e.preventDefault();
        let review = {
            post: this.state.post
        };
        this.props.composeReview(review);
        this.setState({post: ''})
    }

    update() {
        return e => this.setState({
            post: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <div>
                        <input type="textarea"
                            value={this.state.post}
                            onChange={this.update()}
                            placeholder="How was the Beach...?"
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br/>
                <ReviewBox text={this.state.newReview} />
            </div>
        )
    }
}

export default ReviewCompose;