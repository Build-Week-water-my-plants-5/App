import axios from 'axios';

export const axiosWithAuth = (props) => {
  return axios.create({
    baseURL: 'https://wmpbackend.herokuapp.com/api/auth',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};





