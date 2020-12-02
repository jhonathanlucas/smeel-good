import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.page.html',
  styleUrls: ['./fale-conosco.page.scss'],
})
export class FaleConoscoPage implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  tema($event){
    const theme = {
      true:"dark",
      false:"light"
    }
    this.renderer.setAttribute(document.body,"color-theme", theme[$event.detail.checked])
    console.log("event")
  }
  
}
