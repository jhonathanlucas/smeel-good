import { Component, OnInit, Renderer2 } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private renderer: Renderer2) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  ngOnInit() {
  }

  sotario($event){
    const theme = {
      true:"dark",
      false:"light"
    }
    this.renderer.setAttribute(document.body,"color-theme", theme[$event.detail.checked])
    console.log("event")
  }
}
