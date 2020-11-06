import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public formulariozinho = {
  username: '',
  email: '',
  myDate: '',
  cep: '',
  number: '',
  complement: '',
  phone: '',
  senha: '',
  }

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
    this.storage.set('key', this.formulariozinho);
   
  }

  loadData()
{
  this.storage.get(this.key).then((val) => {
    console.log('key', val);
   
  });
}
  public logForm(){
    console.log("informaçoes do cadastro: \n nome: " + this.formulariozinho)
  
  }
  
}
