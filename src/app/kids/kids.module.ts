import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidsPageRoutingModule } from './kids-routing.module';

import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';

import { KidsPage } from './kids.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    KidsPageRoutingModule,
    PipesModule,
    ComponentsModule,
  ],
  declarations: [KidsPage],
})
export class KidsPageModule {}
