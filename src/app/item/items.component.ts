import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'

import { AppStateService } from '~/app/app-state.service'
import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>

  id: Subject<any> = new Subject();

  constructor(private itemService: ItemService, appStateService: AppStateService) {
    this.id.subscribe((id: any) => {
      console.log('ok');
      appStateService.routingParams.next(['/item', id]);
    });
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }

  fire(id): void {
    this.id.next(id);
  }
}
