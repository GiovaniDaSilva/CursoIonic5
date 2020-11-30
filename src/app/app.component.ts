import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Navegação',
      url: 'navegacao',
      icon: 'paper-plane'
    },    
    {
      title: 'Botões',
      url: 'botao',
      icon: 'construct'
    },
    {
      title: 'Alerta',
      url: 'alerta',
      icon: 'alert'
    },
    {
      title: 'Action-Sheet',
      url: 'actionSheet',
      icon: 'albums'
    },
    {
      title: 'Badge',
      url: 'badge',
      icon: 'information'
    },
    {
      title: 'Card',
      url: 'card',
      icon: 'card'
    },
    {
      title: 'Checkbox',
      url: 'checkbox',
      icon: 'checkmark'
    },
    {
      title: 'Chip',
      url: 'chip',
      icon: 'tablet-landscape'
    },
    {
      title: 'Content',
      url: 'content',
      icon: 'construct'
    },
    {
      title: 'DateTime',
      url: 'datetime',
      icon: 'calendar'
    },
    {
      title: 'Fab',
      url: 'fab',
      icon: 'ellipsis-horizontal-circle'
    },
    {
      title: 'Grid',
      url: 'grid',
      icon: 'apps'
    },
    {
      title: 'Infinite Scroll',
      url: 'infinite-scroll',
      icon: 'sync'
    },
    {
      title: 'Input',
      url: 'input',
      icon: 'document'
    },
    {
      title: 'List',
      url: 'list',
      icon: 'list'
    },
    {
      title: 'Progress bar',
      url: 'progress-bar',
      icon: 'repeat'
    },
    {
      title: 'Refresher',
      url: 'refresher',
      icon: 'sync'
    },
  ];
  
  public labels = ['Label 1', 'Label 2', 'Label 3']

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
   
  }
}
