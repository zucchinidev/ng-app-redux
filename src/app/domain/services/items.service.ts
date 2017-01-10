import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, AppStore } from '../models/index';
import { Store } from '@ngrx/store';
import { ADD_ITEMS, DELETE_ITEM, CREATE_ITEM, UPDATE_ITEM } from '../reducers/items';
import { StringService } from './string.service';


@Injectable()
export class ItemsService {
  items: Observable<Array<Item>>;

  constructor(
    private store: Store<AppStore>,
    private stringService: StringService
  ) {
    this.items = this.store.select('items');
  }

  loadItems() {
    let initialItems: Item[] = [];
    this.store.dispatch({
      type: ADD_ITEMS,
      payload: initialItems
    })
  }

  deleteItem(item: Item) {
    this.store.dispatch({
      type: DELETE_ITEM,
      payload: item
    });
  }

  saveItem(item: Item) {
    (item.id) ? this.updateItem(item) : this.createItem(item);
  }

  private updateItem(item: Item) {
    this.store.dispatch({
      type: UPDATE_ITEM,
      payload: item
    });
  }

  private createItem(item: Item) {
    let id = this.stringService.generateUUID();
    this.store.dispatch({
      type: CREATE_ITEM,
      payload: Object.assign({}, item, {id})
    });
  }
}