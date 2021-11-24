import axios from 'axios';
import { Bill } from './interface';

export class VindiService {
  token = 'YOUR_TOKEN';
  url = 'https://app.vindi.com.br/api/v1/bills'
  Post(billItem: Bill): void {
    axios.post(this.url, billItem, {
      auth: { username: this.token, password: '' },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(`[ERRO]: ${error}`);
      });
  }
}