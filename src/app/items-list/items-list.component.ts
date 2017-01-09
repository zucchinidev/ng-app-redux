import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../domain/models/item.interface';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() items: Item[];
  @Output() selected: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() deleted: EventEmitter<Item> = new EventEmitter<Item>();
  constructor() { }

  ngOnInit() {
  }

}
