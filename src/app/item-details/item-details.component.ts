import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../domain/models/item.interface';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  private _item: Item;
  originalName: string;
  selectedItem: Item;
  @Output() saved: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() cancelled: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  set item(value: Item) {
    if (value) {
      this._item = value;
    }
    this.selectedItem = Object.assign({}, value);
  }

  get item(): Item {
    return this._item;
  }

}
