import { HeroVersion }         from './hero-version';

export interface Hero {
  id: number;
  name: string;
  versions: HeroVersion[];
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/