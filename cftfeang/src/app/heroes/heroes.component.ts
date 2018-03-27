import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  hero = 'Pop Nicole Alexandru';

  ngOnInit() {
    console.log("Asta se intampla direct dupa initializare");
    console.log("Asa ca haide sa vedem cum functioneaza!!");
  }

}
