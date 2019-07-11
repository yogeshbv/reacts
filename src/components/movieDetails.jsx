import React, { Component } from 'react';
import { getMovie } from '../services/fakeMovieService';
import Like from './common/like';

class MovieDetails extends Component {
    state = { 
        // movies: getMovie(id),
     }
    render() { 
        const movie = getMovie(this.props.match.params.id);
        console.log("movie path",movie)
               
        return ( 
            <>
            {movie ?
            <div className="container">
                <h3>Movie Details</h3>
                {/* { movies.map(movie => (
                    (movie._id === this.props.match.params.id) ? */}
                    <div>
                        <h4>{movie._id}</h4>
                        <div>
                            {movie.title}
                        </div>
                        <div>{movie.publishDate}</div>
                        <Like isLike={movie.liked} />
                    </div>
                {/* )}                 */}
                <div>
                    <button onClick={() => this.props.history.replace('/movies')} className="btn btn-primary">Ok!</button>
                </div>
            </div> : 
            <form>

            </form>}
            </>
         );
    }
}
 
export default MovieDetails;