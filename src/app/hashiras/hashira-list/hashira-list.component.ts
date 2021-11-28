import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hashira } from '../hashira.model';
import { HashiraService } from '../hashira.service';

@Component({
  selector: 'app-hashira-list',
  templateUrl: './hashira-list.component.html',
  styleUrls: ['./hashira-list.component.css']
})
export class HashiraListComponent implements OnInit {
  
  hashiras: Hashira[];

  constructor(private hashiraService: HashiraService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.hashiraService.hashirasChanged
      .subscribe(
        (hashiras: Hashira[]) => {
          this.hashiras = hashiras;
        }
      );
    this.hashiras = this.hashiraService.getHashiras();
  }

  onNewHashira() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
