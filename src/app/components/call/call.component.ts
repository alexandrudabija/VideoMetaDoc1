import { Component } from '@angular/core';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.less']
})
export class CallComponent {
  showOptions = false;

  toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }
}
