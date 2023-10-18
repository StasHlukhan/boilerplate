import axios from 'axios';

export const setAuthToken = (token:string | null) => {
   if (token) {
       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   }
   else
       delete axios.defaults.headers.common["Authorization"];
}
export function getAuthToken() {
    return localStorage.getItem('authToken');
  }