import { Component, Input, OnInit } from '@angular/core';
import { Hashira } from '../hashira.model';

@Component({
  selector: 'app-hashira-detail',
  templateUrl: './hashira-detail.component.html',
  styleUrls: ['./hashira-detail.component.css']
})
export class HashiraDetailComponent implements OnInit {
  @Input() hashira: Hashira;

  constructor() { }

  ngOnInit(): void {
  }

}
