import { Item } from './item.interface';

export interface AppStore {
  items: Item[];
  selectedItem: Item;
}