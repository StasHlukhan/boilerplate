/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { IUser, IUserRequest } from './types';
import { notify } from '@shared/ui/theme/notification';
// import { BASE_URL } from '@features/user-edit/model/helpers';
import { setAuthToken } from '@app/model/helpers';

export default class UserService {
  static async loginUser({ email, password }: IUser) {
    try {
      const response = await axios.post(`/user/login/`, {
        email,
        password,
      });
      return response.data;
    } catch (e: any) {
      notify({ message: e.response.data.message });
    }
  }
  static async updateUser(updateUser: IUserRequest) {
    setAuthToken(localStorage.getItem('authToken'));

    try {
      const response = await axios.patch(`/user/updateMe/`,  updateUser );

      return response.data;
    } catch (e: unknown) {
      const err = e as Error;

      console.log(err);
    }
  }
}
