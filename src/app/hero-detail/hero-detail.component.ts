import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
       private heroService: HeroService,
       private route: ActivatedRoute,
       private location: Location
    ) {}

    ngOnInit() {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+parems.get('id')))
            .subscribe(hero => this.hero = hero)
    }

}
