import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  public paymentMethod = ' ';

  constructor() { }

  ngOnInit() {
  }

  public paymentForm(){
    console.log("Forma de pagamento: " + this.paymentMethod)
  }
}
