import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnDestroy,
} from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnDestroy {
  @Input() showClass: boolean = false;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnDestroy(): void {}

  handleNotify() {
    if (window.innerWidth < 1024) {
      this.notify.emit(!this.showClass);
    }
  }
}
