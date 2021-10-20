import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';
import { timer } from 'rxjs'

@Component({
  selector: 'ns-in-between',
  templateUrl: './in-between.component.html',
})
export class InBetweenComponent {
  constructor(routerExtensions: RouterExtensions) {
    timer(1500).subscribe(() => routerExtensions.navigate(['/items']));
  }
}
