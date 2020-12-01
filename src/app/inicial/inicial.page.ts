import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 1000
    
  };
  constructor() { }

  ngOnInit() {
  }

}
