import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../dummy-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private service: HeroService,
    private mesageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.mesageService.add(`Heroes: selected hero id=${hero.id}`);
    console.log(this.selectedHero);
  }

  getHeroes(): void {
    this.service.getHeroes().subscribe({
      next: (res) => {
        this.heroes = res;
      },
    });
  }
}
