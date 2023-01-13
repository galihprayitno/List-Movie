import React, { useEffect, useState } from 'react';
import "../App.css"
import { getMovieList, searchMovie } from "../api.js"

const App = () => {
    const [popularMovies, setPopularMovies] = useState([])

    // Menampilkan output API di function getMovieList
    useEffect(() => {
        getMovieList().then((hasil) => {
            setPopularMovies(hasil)
        })
    }, [])

    // memasukkan hasil popularMovies ke tag HTML div.Movie-container
    // penamaan fungcion MoviePopularList harus diawali kapital
    const MoviePopularList = () => {
        return popularMovies.map((film, i) => {
            return (
                // Penamaan title, post_path, relase_date, dan vote_average dari struktur JSON API themoviedb
                <>
                    <div className="Movie-wrapper" key={i}>
                        <div className="Movie-title">{film.title}</div>
                        <img src={`${process.env.REACT_APP_IMGURL}/${film.poster_path}`} className="Movie-image" />
                        <div className="Movie-date">Relase Date : {film.release_date}</div>
                        <div className="Movie-rate">Score : {film.vote_average}</div>
                    </div>
                </>
            )
        })
    }


    const search = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q)
            setPopularMovies(query.results)
        }

    }

    console.log({ popularMovies: popularMovies })
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>GALIH FILM</h1>
                    <input type="text" placeholder='cari film yang diinginkan' className='Movie-search'
                        onChange={({ target }) => search(target.value)} />
                    <div className="Movie-container">
                        <MoviePopularList />
                    </div>
                </header>
            </div>
        </>
    );
}
export default App;


