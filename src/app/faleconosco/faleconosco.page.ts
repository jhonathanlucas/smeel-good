import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-faleconosco',
  templateUrl: './faleconosco.page.html',
  styleUrls: ['./faleconosco.page.scss'],
})
export class FaleconoscoPage implements OnInit {

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
