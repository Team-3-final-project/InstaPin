import axios from 'axios';
import Swal from 'sweetalert2'

export const userRegist = (user) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: 'http://localhost:3000/register',
            data: {
                username: user.username,
                email: user.email,
                password: user.password
            }
        })
            .then(({data}) => {
                console.log(data);
                dispatch({
                    type: 'SET_USER_REGIS',
                    payload: {
                        access_token: data
                    }
                })
            })
            .catch(err => {
                Swal.fire({
                    title: 'Email already registered!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    },
                    icon: 'error'
                  })
            })
    }
}

export const userLogin = (user) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: 'http://localhost:3000/login',
            data: {
                email: user.email,
                password: user.password
            }
        })
            .then(({data}) => {
                console.log(data);
                dispatch({
                    type: 'SET_USER_LOGIN',
                    payload: {
                        access_token: data
                    }
                })
            })
            .catch(err => {
                Swal.fire({
                    title: 'Incorrect email or password',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    },
                    icon: 'error'
                  })
            })
    }
}