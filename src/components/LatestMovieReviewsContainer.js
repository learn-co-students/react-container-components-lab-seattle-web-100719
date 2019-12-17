import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(resp => resp.json())
            .then(data => 
                this.setState({
                    reviews: data.results
                })
            )
    }

    mapReviews = () => {
        return this.state.reviews.map(review => {
            return <MovieReviews key={review.link.url} review={review}/>
        })
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h1>Latest Movie Reviews:</h1>
                {this.mapReviews()}
            </div>
        )
    }
}
export default LatestMovieReviewsContainer