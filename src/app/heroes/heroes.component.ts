import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../dummy-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private service: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.service.getHeroes().subscribe({
      next: (res) => {
        this.heroes = res;
      },
    });
  }
}
