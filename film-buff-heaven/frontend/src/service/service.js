import Axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;




const url = 'https://api.themoviedb.org/3';
const topratedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;
const searchUrl = `${url}/search/movie`;






export const fetchTopratedMovie = async () => {
    try {
        const { data } = await Axios.get(topratedUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
            vote_count: m['vote_count'],
        }))

        return modifiedData;
    } catch (error) {

    }
}

export const fetchTopratedMovie2 = async () => {
    try {
        const { data } = await Axios.get(topratedUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 2
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
            vote_count: m['vote_count'],
        }))

        return modifiedData;
    } catch (error) {

    }
}

export const fetchMovieDetail = async (id) => {
    try {
        const { data } = await Axios.get(`${movieUrl}/${id}`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
   
            }
        });
        return data;
    } catch (error) { }
}


export const fetchMovieSearch = async (name) => {
    try {
        const { data } = await Axios.get(`${searchUrl}`, {
            params: {
                api_key: apiKey,
                query: name
            }
        })
        
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData =  {
          poster: posterUrl+data.results[0].poster_path,
          id: data.results[0].id

        };

        if(data.results[0] === undefined){
            alert("Movie Not Found")
            return "";
        }
        return modifiedData;
    } catch (error) { }
}


export const fetchSimilarMovie = async (id) => {
    try {
        const { data } = await Axios.get(`${movieUrl}/${id}/similar`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}