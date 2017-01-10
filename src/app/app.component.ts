import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, AppStore } from './domain/models/index';
import { ItemsService } from './domain/services/items.service';
import { Store } from '@ngrx/store';
import { SELECT_ITEM } from './domain/reducers/selectedItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Angular 2 && Redux!';
  items: Observable<Array<Item>>;
  selectedItem: Observable<Item>;

  constructor(private itemsService: ItemsService, private store: Store<AppStore>) {
    this.items = this.itemsService.items;
    this.selectedItem = this.store.select('selectedItem');
    this.selectedItem.subscribe(v => console.log(v));
    this.itemsService.loadItems();
    this.items.subscribe(v => console.log(v));
  }

  selectItem(item: Item) {
    this.store.dispatch({
      type: SELECT_ITEM,
      payload: item
    });
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item);
  }

  saveItem(item: Item) {
    this.itemsService.saveItem(item);
    this.resetItem();
  }

  resetItem() {
    let emptyItem: Item = {id: null, name: '', description: ''};
    this.store.dispatch({
      type: SELECT_ITEM,
      payload: emptyItem
    });
  }
}
