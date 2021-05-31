import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.page.html',
  styleUrls: ['./finish.page.scss'],
})
export class FinishPage implements OnInit {
  navCtrl: any;
  
  constructor(public alertController: AlertController, navCtrl: NavController) {}
  

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar pedido',
      subHeader: '',
      message: 'Se voce escolher a opção "sim" você tera o pedido cancelado e sera redirecionado para a pagina inicial.',
      buttons: [
        {
          text: 'Não',
          role: 'Não',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        }, {
          text: 'Sim',
          handler: () => {
            console.log('Confirmar');
            this.navCtrl.push(HomePage);
          }
        }
      ]
    });
    await alert.present();
    
}

}
