import { Injectable } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Subject } from 'rxjs';

@Injectable()
export class AppStateService {
  public routingParams: Subject<any> = new Subject<any>();

  constructor(routerExtensions: RouterExtensions) {
    this.routingParams.subscribe((params: any) => {
      console.log(`got ${params}`);
      routerExtensions.navigate(params);
    });
  }
}
