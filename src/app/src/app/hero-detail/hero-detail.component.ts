import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroVersion }     from '../hero-version';
import { HeroService }  from '../hero.service';
import { ChartsModule }         from 'ng2-charts';
import { RadarChartComponent }  from '../radar/radar';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  //public versions2: HeroVersion[];
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  } 
  //versions = getHero().versions;

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero =>
      { 
        this.hero = hero;
        //alert(hero.versions)
        this.versions = hero.versions;
      }
      );//, this.versions2 = hero.versions));
     

     //versions2 = [{data: [20, 40, 15, 30, 12], label: 'Company A'},{data: [30, 40, 20, 35, 15], label: 'Company B'}];

     
      //versions: [{data: [20, 40, 15, 30, 12], label: 'Company A'},{data: [30, 40, 20, 35, 15], label: 'Company B'}];
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/