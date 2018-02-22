import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageServiceProvider } from '../../providers/message-service/message-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imgurl;
  captcha;
  username;
  password;
  email;
  

  constructor(public navCtrl: NavController, private messageService: MessageServiceProvider) {
    this.getMessage();
  }

  getMessage() {
    this.messageService.getMessage().subscribe(data => {
      console.log(data);
      this.imgurl = data;
    }
    );
  }

}
