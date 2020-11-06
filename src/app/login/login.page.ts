import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: '';
  email: '';
  myDate: '';
  cep: '';
  number: '';
  complement: '';
  phone: '';
  senha: '';
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

  public logForm(){
    console.log("informaçoes do cadastro: \n nome: " + this.username + "\n email: " + this.email
    + "\n data: " + this.myDate + "\n cep: " + this.cep + "\n numero: " + this.number + "\n complemento: " + this.complement
    + "\n celular: " + this.phone + "\n senha: " + this.senha);
  }

}
