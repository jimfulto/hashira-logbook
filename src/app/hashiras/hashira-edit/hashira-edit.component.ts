import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Hashira } from '../hashira.model';
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
    // const newHashira = new Hashira(
    //   this.hashiraForm.value['name'],
    //   this.hashiraForm.value['description'],
    //   this.hashiraForm.value['imagePath'],
    //   this.hashiraForm.value['styles']
    // );
    if(this.editMode) {
      this.hashiraService.updateHashira(this.id, this.hashiraForm.value);
    } else {
      this.hashiraService.addHashira(this.hashiraForm.value);
    }
  }

  onAddStyle() {
    (<FormArray>this.hashiraForm.get('styles')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [ Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/) ])
      })
    );
  }

  get controls() { // a getter!
    return (<FormArray>this.hashiraForm.get('styles')).controls;
  }

  private initForm() {
    let hashiraName = '';
    let hashiraImagePath = '';
    let hashiraDescription = '';
    let hashiarStyles = new FormArray([]);

    if(this.editMode) {
      const hashira = this.hashiraService.getHashira(this.id);
      hashiraName = hashira.name;
      hashiraImagePath = hashira.imagePath;
      hashiraDescription = hashira.description;
      if(hashira['styles']) {
        for(let style of hashira.styles) {
          hashiarStyles.push(
            new FormGroup({
              'name': new FormControl(style.name, Validators.required),
              'amount': new FormControl(style.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.hashiraForm = new FormGroup({
      'name': new FormControl(hashiraName, Validators.required),
      'imagePath': new FormControl(hashiraImagePath, Validators.required),
      'description': new FormControl(hashiraDescription, Validators.required),
      'styles': hashiarStyles
    });
  }

}
