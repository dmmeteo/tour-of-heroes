import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {
    title = 'Tour of Heroes';
    // heroes: Hero[];
    // selectedHero: Hero;
    //
    // constructor(private heroService: HeroService) { }
    //
    // getHeroes(): void {
    //     this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    // }
    //
    // ngOnInit(): void {
    //     this.getHeroes();
    // }
    //
    // onSelect(hero: Hero): void {
    //     this.selectedHero = hero;
    // }
}

