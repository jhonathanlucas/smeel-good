import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(public loadingController: LoadingController,private router:Router) {}

  async ngOnInit (){ 
    setTimeout(async () =>{ await this.router.navigate(['/inicial'])} , 2000)
  }

  async teste() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    await this.router.navigate(['/inicial'])
    console.log('Loading dismissed!');
  }
 
}
