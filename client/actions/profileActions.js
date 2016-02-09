import axios from 'axios';
const ROOT_URL = '/api/profile';

const profileActions = {

  setState: (newState) => {
    return {
      type: 'SET_PROFILE_STATE',
      state: newState,
    };
  },

/*  getProfile: (state) => {
    //const request = axios.get(`${ROOT_URL}/get`);
    return {
      type: 'GET_PROFILE',
      state,
      // payload: request,
    };
  },*/
  setProfile: (id, props) => {
    console.log(id, props);
    const request = axios.put(`${ROOT_URL}/${id}`, props);
    return {
      type: 'SET_PROFILE',
      payload: request,
    };
  },
};

export default profileActions;
