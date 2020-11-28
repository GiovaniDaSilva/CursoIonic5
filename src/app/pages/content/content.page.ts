import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  
  lista : any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  constructor() { }

  ngOnInit() {
  }


  logScrollStart(){
    console.log('Iniciou a interação com Scroll');
  }

  logScrollEnd(){
    console.log('Scroll parou de acontecer');
  }

  logScrolling(e){
    console.log(e);
  }

  inicioScroll(){
    this.content.scrollToBottom(300);
  }

  finalScroll(){
    this.content.scrollToTop(300);
  }
}
