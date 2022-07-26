import { Injectable } from '@angular/core';
import axios from "axios";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


async signin(data: any) {

 await axios.post('http://127.0.0.1:8000/api/auth/login', data)
    .then(function (response) {
      // handle success
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return error;
  })
}


 }

