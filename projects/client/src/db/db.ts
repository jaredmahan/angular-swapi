import Dexie, { Table } from 'dexie';
import { Person } from '../app/types';

export class AppDB extends Dexie {
  favorites!: Table<Person, number>;

  constructor() {
    super('swapi-client');
    this.version(3).stores({
      favorites: '++id, name'
    });

  }
}

export const db = new AppDB();
