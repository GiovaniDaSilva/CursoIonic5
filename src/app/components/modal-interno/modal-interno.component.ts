import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-interno',
  templateUrl: './modal-interno.component.html',
  styleUrls: ['./modal-interno.component.scss'],
})
export class ModalInternoComponent implements OnInit {

  constructor(private navParams : NavParams, private modalCtrl: ModalController) {
    console.log(this.navParams.get("nome"));
   }

  ngOnInit() {}

  fecharModal(){
    this.modalCtrl.dismiss()
    console.log("Modal Fechou.")
  }
}
