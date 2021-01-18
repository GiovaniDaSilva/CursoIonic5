import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';

import { Zoom } from '@ionic-native/zoom/ngx';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.page.html',
  styleUrls: ['./zoom.page.scss'],
})
export class ZoomPage implements OnInit {

  API_KEY = 'ru54DeHMyO0eBBsnNxbekZbICTB886oqSSa8';
  API_SECRET = 'UWzWF8GbE2T9CznyJXPeQKEB8R4aAItXkMRu';

  zoom : any = {
    usuario: '',
    senha: '',
    usuarioSala: '',
    senhaSala: '',
    nickUsuarioSala: 'Meu Nick'
  }

  constructor(private zoomService: Zoom, private toastCtrl : ToastController) { }

  ngOnInit() {
  }

  
  inicializarZoom(){
    this.zoomService.initialize(this.API_KEY, this.API_SECRET)
    .then((success:any) =>{
      this.showToast('Inicializou com sucesso.');      
    })
    .catch((erro : any) =>{
      this.showToast('Erro ao Inicializar')
      alert(erro)
    })
  }

  logarNoZoom(){
    this.zoomService.login(this.zoom.usuario, this.zoom.senha)
    .then((success:any) =>{
      this.showToast('Logado com sucesso.');
    })
    .catch((erro : any) =>{
      this.showToast('Erro ao Logar')
    })
  }

  entrarNaSalaDoZoom(){
    const options = {
      no_driving_mode: true,
      no_invite: true,
      no_meeting_end_message: true,
      no_titlebar: false,
      no_bottom_toolbar: false,
      no_dial_in_via_phone: true,
      no_dial_out_to_phone: true,
      no_disconnect_audio: true,
      no_share: true,
      no_audio: true,
      no_video: true,
      no_meeting_error_message: true
    };

    this.zoomService.joinMeeting(this.zoom.usuarioSala, this.zoom.senhaSala, this.zoom.nickUsuarioSala, options)
    .then((success:any) =>{
      this.showToast('Entrou na Sala.');
    })
    .catch((erro : any) =>{
      this.showToast('Erro ao Entrar na Sala')
    })
  }

  sairDaSalaDoZoom(){
    this.zoomService.logout()
    .then((success:any) =>{
      this.showToast('Saiu da Sala.');
    })
    .catch((erro : any) =>{
      this.showToast('Erro ao Sair da Sala')
    })
  }

  async showToast(msg : string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  

}
