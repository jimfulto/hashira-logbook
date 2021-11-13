import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hashira-edit',
  templateUrl: './hashira-edit.component.html',
  styleUrls: ['./hashira-edit.component.css']
})
export class HashiraEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      );
  }

}
