import axios from 'axios';
import {setMostPopularMovies, setMeniu, setGenre, setHearts, addLog} from './actions';
import { endpoints } from './config';

export const getMostPopularMovies = () => (dispatch) => {
  axios
    .get(endpoints.mostPopularMovies())
    .then((data) => {
      dispatch(setMostPopularMovies(data.data.results));
    });
};

export const getMeniu = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((data) => {
            dispatch(setMeniu(data.data.genres));
        });
};

export const getMoviesByGenre = (grenre) => (dispatch) => {
    axios
        .get(endpoints.genreMovies(grenre[0]))
        .then((data) => {
            dispatch(setGenre(data.data.results, grenre[0]));
        });
    dispatch(addToLog(`Pakeistas zanras i ${grenre[1]}`));
};

export const setHeartById = (movie) => (dispatch, getState) => {

    let hearts = getState().heart.hearted;

    if(hearts.indexOf(movie[0]) === -1)
    {
        dispatch(setHearts([...hearts,movie[0]]));
        dispatch(addToLog(`Uzdeta sirdele filmui ${movie[1]}`));
    }
    else{
        dispatch(setHearts(hearts.filter(i => i !== movie[0])))
        dispatch(addToLog(`Nuimta sirdele filmui ${movie[1]}`));
    }

};

export const addToLog = (log) => (dispatch, getState) => {

    let logs = getState().log.logs;
    let d = new Date();

    const data =
        d.getFullYear()+'-'+
        (d.getMonth<10?'0'+d.getMonth():d.getMonth())+'-'+
        (d.getDay()<10?'0'+d.getDay():d.getDay())+' '+
        (d.getHours()<10?'0'+d.getHours():d.getHours())+':'+
        (d.getMinutes()<10?'0'+d.getMinutes():d.getMinutes())+':'+
        (d.getSeconds()<10?'0'+d.getSeconds():d.getSeconds());

    logs[data] = log;

    dispatch(addLog(logs));

};

