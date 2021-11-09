import { Component, Input, OnInit } from '@angular/core';
import { Hashira } from '../../hashira.model';
import { HashiraService } from '../../hashira.service';

@Component({
  selector: 'app-hashira-item',
  templateUrl: './hashira-item.component.html',
  styleUrls: ['./hashira-item.component.css']
})
export class HashiraItemComponent implements OnInit {
  @Input() hashira: Hashira;

  constructor(private hashiraService: HashiraService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.hashiraService.hashiraSelected.emit(this.hashira);
  }

}
