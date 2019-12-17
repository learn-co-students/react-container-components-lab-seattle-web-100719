// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    const { byline, critics_pick, headline, mpaa_rating, publication_date, summary_short, link } = props.review
    return(
        <div className="review-list">
            <div className="review">
                <h2>{headline} </h2>
                <h4>By {byline || "anonymous"}, {publication_date}</h4>
                <p>{summary_short}</p>
                <p>Rated {mpaa_rating || "NR"}</p>
                <p>Critics Pick? {critics_pick === 1 ? "Yes" : "No"}</p>
                <p><a href={link.url}>{link.suggested_link_text}</a></p>
            </div>
        </div>
    )
}

export default MovieReviews


