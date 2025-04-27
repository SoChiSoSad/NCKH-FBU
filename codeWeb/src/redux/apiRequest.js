import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice";

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8080/api/v1/public/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    } catch (err) {
        dispatch(loginFailed());
    }
};

// export const registerUser = async (user, dispatch, navigate) => {
//     dispatch(registerStart());
//     try{
//         await axios.post ("http://localhost:8080/api/v1/public/signup", user);
//         dispatch(registerSuccess());
//         navigate("/login");

//     } catch (err) {
//         dispatch(registerFailed());
//     }
// }

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try{
        await axios.post ("http://localhost:8080/api/v1/public/signup", user);
        dispatch(registerSuccess());
        navigate("/login");

    } catch (err) {
        console.error("Error during registration: ", err.respsonse ? err.response.data : err.message);
        dispatch(registerFailed());
    }
}