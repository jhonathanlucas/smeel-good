import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = true;
  register = false;
  defaultDate = "1987-06-30";
  isSubmitted = false;
 

  constructor() { }

  // Exibir o fomr de resgistro
  exibirResgistrar(){
    this.login = false;
    this.register = true;
  }
  exibirLogin(){
    this.login = true;
    this.register = false;
  }

  ngOnInit() {
   
  }

}
