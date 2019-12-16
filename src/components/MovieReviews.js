// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => (
    <div className="review-list">
    {props.reviews.map(review => <DisplayReview review={review} />)}
    </div>);

const DisplayReview = props => (
    <div className="review">
        <h3>{props.review.headline}</h3>
    </div>
)


export default MovieReviews