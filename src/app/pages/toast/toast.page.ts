import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async toastSimples() {
    const toast = await this.toastCtrl.create({
      message: 'Este é um toast simples.',
      duration: 2000
    });
    toast.present();
  }

  async toastComOpcoes() {
    const toast = await this.toastCtrl.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',//to, middle e outros
      mode: "ios", // ou md para android
      translucent: true,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
