import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes-visuais',
  templateUrl: './componentes-visuais.page.html',
  styleUrls: ['./componentes-visuais.page.scss'],
})
export class ComponentesVisuaisPage implements OnInit {
  listaMenu : any[] = [];

  constructor(private navCtrl : NavController) {
    this.listaMenu = [
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
    {
      title: 'Reorder',
      url: 'reorder',
      icon: 'reorder-three'
    },
    {
      title: 'Select',
      url: 'select',
      icon: 'reorder-four'
    },
    {
      title: 'Toggle',
      url: 'toggle',
      icon: 'toggle'
    },
    {
      title: 'Searchbar',
      url: 'searchbar',
      icon: 'search'
    },  
    {
      title: 'Segment',
      url: 'segment',
      icon: 'git-commit'
    }, 
    {
      title: 'Slide',
      url: 'slide',
      icon: 'code'
    }, 
    {
      title: 'Toast',
      url: 'toast',
      icon: 'information'
    }, 
    {
      title: 'Modal',
      url: 'modal',
      icon: 'browsers'
    }, 
    {
      title: 'Popover',
      url: 'popover',
      icon: 'menu'
    }, 
    {
      title: 'Radio',
      url: 'radio',
      icon: 'radio'
    }, 
    {
      title: 'Animação',
      url: 'animacao',
      icon: 'move'
    }
  ]
   }

  ngOnInit() {
  }

  showPage(url : string){
    this.navCtrl.navigateForward(url)
  }
}
