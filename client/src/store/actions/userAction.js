import axios from 'axios';
import Swal from 'sweetalert2'

const url = 'http://localhost:3000'

export const userRegist = (user) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `${url}/register`,
            data: {
                username: user.username,
                email: user.email,
                password: user.password
            }
        })
            .then(({data}) => {
                localStorage.access_token = data.access_token
                localStorage.email = user.email
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
            url: `${url}/login`,
            data: {
                email: user.email,
                password: user.password
            }
        })
            .then(({data}) => {
                localStorage.access_token = data.access_token
                localStorage.email = user.email
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
