import { Component, Renderer2 } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController, private renderer: Renderer2) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

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
