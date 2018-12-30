import apiService from "@/api/apiService";
import { ProfileEntity } from "@/entities/UserEntity";


export default class UsersService {
  static getProfile() {
    apiService.post<ProfileEntity>('/B2C/B2C_Account/GetAccountDetail').then(r => {
      console.log(r.Data);
    }).catch(err => {
      console.log('hasError');
      console.log(err);
      throw err;
    })
  }
}
