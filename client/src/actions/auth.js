import * as api from '../api'
import { setCurrentUser } from './currentUser'
// import { fetchAllUsers } from './users'

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        alert('Successfully Registerd...!')

    } catch (error) {
        // console.log(error)
        alert('Something Went wrong...!')
    }
}

// export const login = (authData, navigate) => async (dispatch) => {
//     try {
//         const { data } = await api.logIn(authData)
//         dispatch({ type: 'AUTH', data})
//         dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
//         alert('Successfully Login...!')
        
//         navigate('/')
//     } catch (error) {
//         // console.log(error)
//         alert('Something Went wrong...!')
//     }   
// }

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData);
        dispatch({ type: 'AUTH', data });

        const profile = JSON.parse(localStorage.getItem('Profile'));
        dispatch(setCurrentUser(profile));
       
        if (profile.result.userType === 'Admin') {
            navigate('/Admin');
        } else {
            navigate('/'); // Replace '/Admin' with the actual path for the Admin page.
        }

        alert('Successfully Logged in...!');
    } catch (error) {
        // console.log(error)
        alert('Something Went wrong...!');
    }
}
