import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZoomPageRoutingModule } from './zoom-routing.module';

import { ZoomPage } from './zoom.page';

import { Zoom } from '@ionic-native/zoom/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZoomPageRoutingModule
  ],
  declarations: [ZoomPage],
  providers:[Zoom]  
})
export class ZoomPageModule {}
