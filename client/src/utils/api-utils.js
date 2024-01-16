const API_URL = "https://project-2-api.herokuapp.com/";
const API_KEY = "?api_key=dfba9f0b-f93e-4eb2-84c6-0948cc6af536";

export const getMoviesEndpoint = () => API_URL + "videos/" + API_KEY;
export const getMovieEndpoint = (id) => API_URL + "videos/" + id + API_KEY;


