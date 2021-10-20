import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { InBetweenComponent } from './in-between/in-between.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/in-between', pathMatch: 'full' },
  { path: 'in-between', component: InBetweenComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemDetailComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, {enableTracing: true})],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
