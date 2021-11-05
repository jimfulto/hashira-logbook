import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hashira } from '../../hashira.model';

@Component({
  selector: 'app-hashira-item',
  templateUrl: './hashira-item.component.html',
  styleUrls: ['./hashira-item.component.css']
})
export class HashiraItemComponent implements OnInit {
  @Input() hashira: Hashira;
  @Output() hashiraSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.hashiraSelected.emit();
  }

}
