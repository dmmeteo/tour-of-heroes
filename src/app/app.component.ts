import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'app-root',
    template: `
        <h1>{{title}}</h1>
        <h2>MyHeroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes"
                [ngClass]="{'slected': hero == selectedHero}"
                (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <hero-detail [hero]="selectedHero"></hero-detail>
    `,
    // templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}

