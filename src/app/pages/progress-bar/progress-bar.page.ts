import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
  progress : number = 0;
  constructor() { }

  ngOnInit() {
  }

  aumentarProgresso(){
    this.progress += 0.1;    
    if (this.progress >= 1) {
      this.progress = 0;
    }    
  }
}
