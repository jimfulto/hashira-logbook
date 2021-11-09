import { Component, OnInit } from '@angular/core';
import { Hashira } from './hashira.model';
import { HashiraService } from './hashira.service';

@Component({
  selector: 'app-hashiras',
  templateUrl: './hashiras.component.html',
  styleUrls: ['./hashiras.component.css']
})
export class HashirasComponent implements OnInit {
  selectedHashira: Hashira;

  constructor(private hashiraService: HashiraService) { }

  ngOnInit(): void {
    this.hashiraService.hashiraSelected
      .subscribe(
        (hashira: Hashira) => {
          this.selectedHashira = hashira;
        }
      );
  }

}
