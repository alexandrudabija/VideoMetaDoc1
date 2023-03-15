import { Component } from '@angular/core';

@Component({
  selector: 'app-request-call',
  templateUrl: './request-call.component.html',
  styleUrls: ['./request-call.component.less']
})
export class RequestCallComponent {
  showOptions = false;

  toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }
}
