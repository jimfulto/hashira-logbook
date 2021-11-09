import { Component, Input, OnInit } from '@angular/core';
import { Hashira } from '../hashira.model';
import { HashiraService } from '../hashira.service';

@Component({
  selector: 'app-hashira-detail',
  templateUrl: './hashira-detail.component.html',
  styleUrls: ['./hashira-detail.component.css']
})
export class HashiraDetailComponent implements OnInit {
  @Input() hashira: Hashira;

  constructor(private hashiraService: HashiraService) { }

  ngOnInit(): void {
  }

  onAddToFormsList() {
    this.hashiraService.addFormsToFormsList(this.hashira.styles);
  }

}
