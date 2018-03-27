import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  hero = {id:1,  name:'Alex Pop'};
  name = '';

  ngOnInit() {   
  }

}
