import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';

import { SlideshowBackdrop2Component } from './slideshow-backdrop2/slideshow-backdrop2.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowBackdrop2Component,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent,
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowBackdrop2Component,
    SlideshowPosterComponent,
    SlideshowParesComponent,
    DetalleComponent,
  ],
  imports: [CommonModule, IonicModule, PipesModule],
})
export class ComponentsModule {}
