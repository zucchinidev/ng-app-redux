import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { itemsReducer, selectedItemReducer } from './domain/reducers';
import { ItemsService } from './domain/services/items.service';
import { StringService } from './domain/services/string.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({
      items: itemsReducer,
      selectedItem: selectedItemReducer
    }) // The store that defines our app state
  ],
  providers: [ItemsService, StringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
