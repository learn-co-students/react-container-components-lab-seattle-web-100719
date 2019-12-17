import React, { PureComponent } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`;
// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//     + `api-key=${NYT_API_KEY}`;

export class SearchableMovieReviewsContainer extends PureComponent {
    constructor() {
        super(),
            this.state = {
                reviews: [],
                searchTerm: ""
            }
    }

    fetchSearchData = () => {
        console.log("Searching.......")
        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(json => {
                console.log("search", json)
                this.setState({ reviews: json.results })
            })
    }

    handleSearchTermChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.fetchSearchData()
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchValue" onChange={event => this.handleSearchTermChange(event)} />
                    <input type="submit" value="Submit" />
                </form>
                <h1>Searched Movie Reviews</h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer

