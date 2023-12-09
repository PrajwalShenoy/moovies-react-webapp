import axios from "axios";
// import "dotenv/config";

// const BACKEND_URL = process.env.BACKEND_URL;
const BACKEND_URL = "http://localhost:4000";

const request = axios.create({
    withCredentials: true,
});

export const signin = async (credentials) => {
    const response = await request.post(`${BACKEND_URL}/api/users/signin`, credentials);
    return response.data;
};

export const getSessionAccount = async () => {
    const response = await request.get(`${BACKEND_URL}/api/users/account`);
    return response.data;
}

export const signout = async () => {
    const response = await request.post(`${BACKEND_URL}/api/users/signout`);
    return response.data;
};

export const getSpecificMovies = async (type) => {
    let response = null;
    switch (type) {
        case "NewMovies":
            response = await request.get(`${BACKEND_URL}/api/movies/newmovies`);
            break;
        case "Action":
            response = await request.get(`${BACKEND_URL}/api/movies/genre/action`);
            break;
        case "Comedy":
            response = await request.get(`${BACKEND_URL}/api/movies/genre/comedy`);
            break;
        case "Thriller":
            response = await request.get(`${BACKEND_URL}/api/movies/genre/thriller`);
            break;
    }
    if (response === null) { 
        return [];
    }
    console.log(response.data.results);
    return response.data.results;
};

export const getMovieDetails = async (id) => {
    const response = await request.get(`${BACKEND_URL}/api/movies/${id}`);
    return response.data;
};
