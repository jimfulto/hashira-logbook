import { Component, OnInit } from '@angular/core';
import { Hashira } from '../hashira.model';
import { HashiraService } from '../hashira.service';

@Component({
  selector: 'app-hashira-list',
  templateUrl: './hashira-list.component.html',
  styleUrls: ['./hashira-list.component.css']
})
export class HashiraListComponent implements OnInit {
  
  hashiras: Hashira[];

  constructor(private hashiraService: HashiraService) { }

  ngOnInit() {
    this.hashiras = this.hashiraService.getHashiras();
  }

}
