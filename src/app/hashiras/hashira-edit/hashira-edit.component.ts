import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { HashiraService } from '../hashira.service';

@Component({
  selector: 'app-hashira-edit',
  templateUrl: './hashira-edit.component.html',
  styleUrls: ['./hashira-edit.component.css']
})
export class HashiraEditComponent implements OnInit {
  id: number;
  editMode = false;
  hashiraForm: FormGroup;

  constructor(private route: ActivatedRoute, private hashiraService: HashiraService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    console.log(this.hashiraForm);
  }

  private initForm() {
    let hashiraName = '';
    let hashiraImagePath = '';
    let hashiraDescription = '';

    if(this.editMode) {
      const hashira = this.hashiraService.getHashira(this.id);
      hashiraName = hashira.name;
      hashiraImagePath = hashira.imagePath;
      hashiraDescription = hashira.description;
    }

    this.hashiraForm = new FormGroup({
      'name': new FormControl(hashiraName),
      'imagePath': new FormControl(hashiraImagePath),
      'description': new FormControl(hashiraDescription)
    });
  }

}
