import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: 'heading.component.html',
})
export class HeadingComponent {
  @Input()
  name: string = '';
}
