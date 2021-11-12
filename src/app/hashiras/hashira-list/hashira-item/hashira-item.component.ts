import { Component, Input, OnInit } from '@angular/core';
import { Hashira } from '../../hashira.model';

@Component({
  selector: 'app-hashira-item',
  templateUrl: './hashira-item.component.html',
  styleUrls: ['./hashira-item.component.css']
})
export class HashiraItemComponent implements OnInit {
  @Input() hashira: Hashira;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
