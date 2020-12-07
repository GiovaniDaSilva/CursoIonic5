import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {



opcaoSelecionada : string = "frutas";
  constructor() { }

  ngOnInit() {
  }

  selecionar(event : any){
    console.log(event);

    this.opcaoSelecionada = event.detail.value;
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
