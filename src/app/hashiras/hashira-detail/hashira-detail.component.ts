import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hashira } from '../hashira.model';
import { HashiraService } from '../hashira.service';

@Component({
  selector: 'app-hashira-detail',
  templateUrl: './hashira-detail.component.html',
  styleUrls: ['./hashira-detail.component.css']
})
export class HashiraDetailComponent implements OnInit {
  hashira: Hashira;
  id: number;

  constructor(private hashiraService: HashiraService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.hashira = this.hashiraService.getHashira(this.id);
        }
      );
  }

  onAddToFormsList() {
    this.hashiraService.addFormsToFormsList(this.hashira.styles);
  }

  onEditHashira() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    //this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }

}
