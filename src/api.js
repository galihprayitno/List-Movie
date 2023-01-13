import axios from "axios"

const apikey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apikey}&page=1`)
    // console.log({ daftarFilm: movie })

    // mengembalikan data
    // movie dari const movie diatas, sedangkan data.result dari API filmnya. Jadinya movie.data.results
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?api_key=${apikey}&query=${q}&page=1`)
    return search.data
} 