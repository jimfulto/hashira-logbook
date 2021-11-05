import { Component, OnInit } from '@angular/core';
import { Hashira } from './hashira.model';

@Component({
  selector: 'app-hashiras',
  templateUrl: './hashiras.component.html',
  styleUrls: ['./hashiras.component.css']
})
export class HashirasComponent implements OnInit {
  selectedHashira: Hashira;

  constructor() { }

  ngOnInit(): void {
  }

}
