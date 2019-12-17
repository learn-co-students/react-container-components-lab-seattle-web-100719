import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    fetchMovies = (searchTerm) => {
        fetch(`${URL}&query=${searchTerm}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                reviews: data.results
            }))
    }

    mapReviews = () => {
        return this.state.reviews.map(review => {
            return <MovieReviews key={review.link.url} review={review}/>
        })
    }


    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.fetchMovies(this.state.searchTerm)
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <h2>Search for a movie here:</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}></input>
                    <input type="submit" value="Search"></input>
                </form>

                {this.mapReviews()}
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer