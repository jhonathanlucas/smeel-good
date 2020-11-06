import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
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

  key:string;

  login = true;
  register = false;
  defaultDate = "1987-06-30";
  isSubmitted = false;

  constructor(private storage: Storage) { }


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

  saveData(){
    this.storage.set('nome', this.username);
    this.storage.set('email', this.email);
    this.storage.set('dataNasc', this.myDate);
    this.storage.set('cep', this.cep);
    this.storage.set('numero', this.number);
    this.storage.set('compl', this.complement);
    this.storage.set('tel', this.phone);
    this.storage.set('password', this.senha);
  }
  
  loadData()
{
  this.storage.get(this.key).then((val) => {
    console.log('nome', val);
    console.log('email', this.email);
    console.log('dataNasc', this.myDate);
    console.log('cep', this.cep);
    console.log('numero', this.number);
    console.log('compl', this.complement);
    console.log('tel', this.phone);
    console.log('password', this.senha);
  });
}
  public logForm(){
    console.log("informaçoes do cadastro: \n nome: " + this.username + "\n email: " + this.email
    + "\n data: " + this.myDate + "\n cep: " + this.cep + "\n numero: " + this.number + "\n complemento: " + this.complement
    + "\n celular: " + this.phone + "\n senha: " + this.senha);
  }

}
