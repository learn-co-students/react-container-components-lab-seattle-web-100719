import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: "",
        reviews: []
    }

    handleSearch = (event) => {
        event.preventDefault();
        this.handleFetch()
    }

    handleInput = (text) => {
        this.setState({
            searchTerm: text
        })
    }

    handleFetch = () => {
        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(json => {

                this.setState({
                    reviews: json.results
                })
            })
    }


    render() {
        return (
            <div className="searchable-movie-reviews">
                <SearchForm onSubmit={this.handleSearch} onChange={this.handleInput} />
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}


const SearchForm = props => (
    <form className="searchable-movie-reviews" onSubmit={props.onSubmit}>
        <input type="text" onChange={(event) => props.onChange(event.target.value)}></input>
        <input type="submit"></input>
    </form>);
