import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.page.html',
  styleUrls: ['./check-box.page.scss'],
})
export class CheckBoxPage implements OnInit {

  meses : any[] = [
    {nomeMes: 'Janeiro', valor: 1, marcado: false},
    {nomeMes: 'Fevereiro', valor: 2, marcado: true},
    {nomeMes: 'Março', valor: 3, marcado: false},
    {nomeMes: 'Abril', valor: 4, marcado: true},
    {nomeMes: 'maio', valor: 5, marcado: true}
  ]

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
    console.log(this.meses);
  }

  exibeMeses(){
    console.log(this.meses);
    this.alerta();
  }

  async alerta(){
    const alert = await this.alertCtrl.create({      
      header: 'Meses marcados',      
      message: 'Resultado no console.log.',      
      buttons: ['OK']
    });
    alert.present();
  }

}
