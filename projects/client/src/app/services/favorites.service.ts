import { Injectable } from "@angular/core";
import { liveQuery } from "dexie";
import { map, pipe } from "rxjs";
import { db } from "../../db/db";
import { Person } from "../types";

/**
 * This service uses Dexie to store and retrieve favorites from indexedDB.
 */

@Injectable({ providedIn: "root" })
export class FavoritesService {
  async addFavorite(person: Person) {
    const exists = (await db.favorites.where("name").equals(person.name).count()) > 0;
    if (exists) {
      alert("This person is already in your favorites");
      return;
    }

    db.favorites.add(person);
  }

  deleteFavorite(person: Person) {
    db.favorites.delete(person.id as number);
  }

  getFavorites() {
    return liveQuery(() => db.favorites.orderBy("name").toArray());
  }
}
