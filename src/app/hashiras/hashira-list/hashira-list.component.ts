import { Component, OnInit } from '@angular/core';
import { Hashira } from '../hashira.model';

@Component({
  selector: 'app-hashira-list',
  templateUrl: './hashira-list.component.html',
  styleUrls: ['./hashira-list.component.css']
})
export class HashiraListComponent implements OnInit {
  hashiras: Hashira[] = [
    new Hashira('Giyu Tomioka', 'Water Hashira','https://p4.wallpaperbetter.com/wallpaper/280/996/841/giyu-tomioka-kimetsu-no-yaiba-kimetsu-no-yaiba-water-katana-anime-boys-hd-wallpaper-preview.jpg'),
    new Hashira('Shinobu Kocho', 'Insect Hashira','https://tse1.mm.bing.net/th?id=OIP.Gk0xh-XlyPzRpkQlQzJ3NAHaNL&pid=Api&P=0&w=300&h=300'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
