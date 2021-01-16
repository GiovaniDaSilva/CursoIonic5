import { Component, OnInit } from '@angular/core';

//import { Zoom } from '@ionic-native/zoom/ngx';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.page.html',
  styleUrls: ['./zoom.page.scss'],
})
export class ZoomPage implements OnInit {

  API_KEY = 'ru54DeHMyO0eBBsnNxbekZbICTB886oqSSa8';
  API_SECRET = 'UWzWF8GbE2T9CznyJXPeQKEB8R4aAItXkMRu';

  zoom : any = {
    usuario: 'giovani-vani@outlook.com',
    senha: 'Vani89052385',
    usuarioSala: '',
    senhaSala: '',
    nickUsuarioSala: 'Giovani'
  }

  constructor(){}//private zoomService: Zoom, private toastCtrl : ToastController) { }

  ngOnInit() {
  }

}
