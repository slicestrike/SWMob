import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', versions: [{data: [20, 40, 15, 30, 12], label: 'Company A'},{data: [30, 40, 20, 35, 15], label: 'Company B'}]},
      { id: 12, name: 'Narco', versions: [{data: [20, 40, 15, 30, 12], label: 'Company A'},{data: [30, 40, 20, 35, 15], label: 'Company B'}]},
      { id: 13, name: 'Bombasto', versions: [{data: [20, 40, 15, 30, 12], label: 'Company A'},{data: [30, 40, 20, 35, 15], label: 'Company B'}]},
      { id: 14, name: 'Celeritas', versions: [{data: [20, 40, 15, 30, 12], label: 'Company A'},{data: [30, 40, 20, 35, 15], label: 'Company B'}]},
      { id: 15, name: 'Magneta', versions: [{data: [20, 40, 15, 30, 12], label: 'Company A'},{data: [30, 40, 20, 35, 15], label: 'Company B'}]},
      { id: 16, name: 'RubberMan', versions: [{data: [20, 40, 15, 30, 12], label: 'Company A'},{data: [30, 40, 20, 35, 15], label: 'Company B'}]},
      { id: 17, name: 'Dynama', versions: [{data: [20, 40, 15, 30, 12], label: 'Company A'},{data: [30, 40, 20, 35, 15], label: 'Company B'}]},
      { id: 18, name: 'Dr IQ', versions: [{data: [20, 40, 15, 30, 12], label: 'Company A'},{data: [30, 40, 20, 35, 15], label: 'Company B'}]},
      { id: 19, name: 'Magma', versions: [{data: [20, 40, 15, 30, 12], label: 'Company A'},{data: [30, 40, 20, 35, 15], label: 'Company B'}]},
      { id: 20, name: 'Tornado', versions: [{data: [20, 40, 15, 30, 12], label: 'Company A'},{data: [30, 40, 20, 35, 15], label: 'Company B'}]}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/