import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async alerta(){
    const alert = await this.alertCtrl.create({      
      header: 'Titulo',
      subHeader: 'Sub Titulo',
      message: 'Esta é a mensagem do alerta.',
      buttons: ['OK']
    });
    alert.present();
  }

  async alertaMultiplosBotao(){
    const alert = await this.alertCtrl.create({      
      header: 'Titulo',
      subHeader: 'Sub Titulo',
      message: 'Esta é a mensagem do alerta.',
      buttons: ['Abrir','Salvar','Exportar']
    });
    alert.present();
  }
  async confirma() {
    const alert = await this.alertCtrl.create({      
      header: 'Confirma!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }


  async prompt() {
    const alert = await this.alertCtrl.create({      
      header: 'Acesso Restrito!',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Informe seu e-mail'
        },
        {
          name: 'senha',
          type: 'password',
          id: 'name2-id',          
          placeholder: 'Informe sua senha'
        }       
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (form) => {
            console.log(form);
          }
        }
      ]
    });

    await alert.present();
  }

}