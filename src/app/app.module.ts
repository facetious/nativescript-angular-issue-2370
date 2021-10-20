import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { AppStateService } from './app-state.service';
import { InBetweenComponent } from './in-between/in-between.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, InBetweenComponent, ItemsComponent, ItemDetailComponent],
  providers: [AppStateService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
