import React, { Component } from 'react';
import Like from './common/like';
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';
import Paginate from './common/paginate';
import {Link} from 'react-router-dom';

class Movies extends Component {
    state = { 
        movies: getMovies(),
        pageSize: 4,
        likeCount: 0,
        genres: getGenres()
     }

    //  componentDidMount() {
    //      console.log("component mounted!!");
    //  }

    //  componentDidUpdate(prevPros, prevState) {
    //     console.log(prevState)
    //  }

    //  componentWillUnmount() {
    //      console.log("component destroyed!!")
    //  }

    //  allGenres = () => {
    //     let { movies } = this.state;
    //     let arrGen = movies.map(movie => (
    //         movie.genre.name
    //     ))

    //      const finalGenr = arrGen.reduce((accu, gen) => {
    //         accu[gen] = (accu[gen] || 0) + 1;
    //         return accu;
    //     }, {});

    //     console.log(arrGen);
    //     console.log(finalGenr);
    //  }

    render() {
        let { likeCount, pageSize, movies, genres } = this.state;
        console.log("movieGenre" , genres);
        genres.map(g => {
            const totalGenre = movies.filter(m => g._id === m.genre._id).length;
            g.count = totalGenre;
        });

        return ( 
            <React.Fragment>
               
                <div className="row">
                    <div className="col col-sm-4">
                        <ul className="list-group">
                            {
                                genres.map(gen => (
                                    <li 
                                        key={gen._id} 
                                        className="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                        {gen.name}<span className="badge badge-primary badge-pill">{gen.count}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col col-sm-8">
                        <Link to={'/movies/new'} className="btn btn-primary">Add Movie</Link>
                        <hr/>
                        <div>
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Rate</th>
                                    <th/>
                                    <th/>
                                    </tr>
                                </thead>
                                <tbody>
                                    { movies.map(movie => (
                                        <tr key={movie._id}>
                                            <td>
                                                <Link
                                                    to={`/movies/${movie._id}`}
                                                >
                                                    {movie.title}
                                                </Link>
                                            </td>
                                            <td>{movie.genre.name}</td>
                                            <td>{movie.numberInStock}</td>
                                            <td>{movie.dailyRentalRate}</td>
                                            <td>
                                                <Like
                                                    onLikeMovie={() => this.handleLike(movie)} 
                                                    isLike={movie.liked} />
                                            </td>
                                            <td>
                                                <button 
                                                    onClick={() => this.removeMovie(movie)} 
                                                    className="btn btn-danger btn-sm">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))   
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 mb-4">Total Movies {movies.length}</p>    
                        <Paginate
                            totalMovies={movies.length}
                            pageSize={pageSize}    
                        />
                        <div>Total likes {likeCount}</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    removeMovie(movie) {
        console.log(movie);
        const movies = this.state.movies.filter(m=>m._id !== movie._id);
        this.setState({movies})
    }

    // likeCount = () => {
    //     console.log("asc");
    //     let likeCount = 0;
    //     this.state.movies.map(movie => 
    //         (movie.liked === true) ? likeCount++ : likeCount--
    //     )
    //     this.setState({likeCount})
    // }

    handleLike(movie) {
        const movies = this.state.movies;

        const index = movies.indexOf(movie);
        movies[index].liked = !movie.liked;
        // movies.map(movie => {
        //     if(movie.liked) this.state.likeCount += 1
        // })
        this.setState({ likeCount: this.state.likeCount + 1})
        // if(movies[index].liked === true) {
        //     console.log("true");
        //     likeCount = this.state.likeCount + 1;
        // } else{
        //     console.log("false");
        //     likeCount = this.state.likeCount - 1;
        // } 

        this.setState({movies});
        // this.setState({likeCount});
    }
}
 
export default Movies;