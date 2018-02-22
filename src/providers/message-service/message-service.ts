import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

/*
  Generated class for the MessageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const captchaGenUrl: string = "http://192.168.56.2:5003/captcha/v1.0";
const captchaImgUrl_base: string = "http://192.168.56.2:5003/captchaimg/";

class captchaData {
  assoc_id: string;
}

@Injectable()
export class MessageServiceProvider {
  constructor(public http: HttpClient) {
  }

  getMessage() {
    return this.http.get(captchaGenUrl)
      .map((res: captchaData) => captchaImgUrl_base + res.assoc_id);
  }

  registerUser(captcha: string, username: string, password: string) {
    
  }

}
