import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor() {}

  cambio(a) {
    if (a == 1) {
      console.log('cd');
    } else if (a == 2) {
    }
  }
}
