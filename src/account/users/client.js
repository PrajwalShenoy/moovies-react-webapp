import axios from "axios";

// export const BASE_URL = "https://localhost:4000";
export const BASE_URL = process.env.REACT_APP_BACKEND_URL;
export const USERS_URL = `${BASE_URL}/api/users`;
const request = axios.create({
    withCredentials: true,
});

export const signin = async (credentials) => {
    console.log(`${USERS_URL}/signin`);
    const response = await request.post(`${USERS_URL}/signin`, credentials);
    return response.data;
};
export const account = async () => {
    try {
        const response = await request.post(`${USERS_URL}/account`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return null;
    }
};

export const updateUser = async (user) => {
    const response = await request.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};

export const findAllUsers = async () => {
    const response = await request.get(USERS_URL);
    return response.data;
};

export const createUser = async (user) => {
    const response = await request.post(USERS_URL, user);
    return response.data;
};

export const findUserById = async (userId) => {
    const response = await request.get(`${USERS_URL}/${userId}`);
    return response.data;
};

export const deleteUser = async (user) => {
    const response = await request.delete(`${USERS_URL}/${user._id}`);
    return response.data;
}

export const findUserByUsername = async (username) => {
    const response = await request.get(`${USERS_URL}/username/${username}`);
    return response.data;
}

export const signup = async (credentials) => {
    const response = await request.post(`${USERS_URL}/signup`, credentials);
    return response.data;
}

export const signout = async () => {
    const response = await request.post(`${USERS_URL}/signout`);
    return response.data;
};