import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const request = axios.create({
    withCredentials: true,
});

export const signin = async (credentials) => {
    const response = await request.post(`${BACKEND_URL}/api/users/signin`, credentials);
    return response.data;
};

export const signup = async (details) => {
    const response = await request.post(`${BACKEND_URL}/api/users`, details);
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
    return response.data.results;
};

export const getMovieDetails = async (id) => {
    const response = await request.get(`${BACKEND_URL}/api/movies/${id}`);
    return response.data;
};

export const addToWatchlist = async (payload) => {
    const response = await request.post(`${BACKEND_URL}/api/watchlist`, payload);
    return response.data;
};

export const removeFromWatchlist = async (movieId) => {
    console.log(movieId);
    const response = await request.delete(`${BACKEND_URL}/api/watchlist/${movieId}`);
    return response.data;
}

export const getWatchlist = async () => {
    const response = await request.get(`${BACKEND_URL}/api/watchlist`);
    return response.data;
};

export const getWatchListDetails = async (userId) => {
    const response = await request.get(`${BACKEND_URL}/api/watchlist/${userId}`);
    return response.data;
};

export const findAllUsers = async () => {
    const response = await request.get(`${BACKEND_URL}/api/users`);
    return response.data;
};

export const followUser = async (userId, followId) => {
    const response = await request.post(`${BACKEND_URL}/api/users/${userId}/follow/${followId}`);
    return response.data;
};

export const unfollowUser = async (userId, followId) => {
    const response = await request.post(`${BACKEND_URL}/api/users/${userId}/unfollow/${followId}`);
    return response.data;
};

export const getUserRoles = async (userId) => {
    const response = await request.get(`${BACKEND_URL}/api/users/roles/${userId}`);
    console.log(response.data);
    return response.data;
};

export const setUsersCurrentRole = async (role) => {
    const response = await request.post(`${BACKEND_URL}/api/users/setrole`, {"role": role});
    return response.data;
};

export const requestRole = async (role) => {
    const response = await request.post(`${BACKEND_URL}/api/requests`, {"requestedRole": role});
    return response.data;
};

export const removeRole = async (role) => {
    const response = await request.post(`${BACKEND_URL}/api/deleterole`, {"role": role});
    return response.data;
};

export const getRequests = async () => {
    const response = await request.get(`${BACKEND_URL}/api/requests`);
    return response.data;
};

export const completeRequest = async (requestId, body) => {
    const response = await request.post(`${BACKEND_URL}/api/requests/${requestId}`, body);
    return response.data;
}

export const postReview = async (movieId, review) =>{
    const response = await request.post(`${BACKEND_URL}/api/reviews`, {
        movieId: movieId,
        review: review
    })
    return response.data;
}

export const getReviewsByMovieId = async (movieId) => {
    const response = await request.get(`${BACKEND_URL}/api/reviews/${movieId}`);
    return response.data;
};

export const deleteReview = async (reviewId) => {
    const response = await request.delete(`${BACKEND_URL}/api/reviews/${reviewId}`);
    return response.data;
};

export const updateUser = async (user, userId) => {
    const response = await axios.put(`${BACKEND_URL}/api/users/${userId}`, user);
    return response.data;
};