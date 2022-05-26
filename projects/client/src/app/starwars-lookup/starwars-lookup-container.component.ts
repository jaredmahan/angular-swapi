import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable as DObservable } from "dexie";
import { BehaviorSubject, debounceTime, Observable, Subscription } from "rxjs";
import { FavoritesService } from "../services/favorites.service";
import { PeopleService } from "../services/people.service";
import { Result, Person } from "../types";

@Component({
  selector: "app-starwars-lookup-container",
  templateUrl: "./starwars-lookup-container.component.html",
  styleUrls: ["./starwars-lookup-container.component.css"]
})
export class StarwarsLookupContainer implements OnInit, OnDestroy {
  searchControl = new FormControl("");
  people$ = new BehaviorSubject(new Result<Person>()).asObservable();
  favorites$!: DObservable<Person[]>;
  dirty = false;
  private subscription!: Subscription;

  constructor(private peopleService: PeopleService, private favoritesService: FavoritesService) {}


  ngOnInit(): void {
    this.favorites$ = this.favoritesService.getFavorites();
    this.subscription = this.searchControl.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.dirty = true;
      this.people$ = this.peopleService.search(value);
    })
  }

  addFavorite(person: Person) {
    this.favoritesService.addFavorite(person);
  }

  deleteFavorite(person: Person) {
    this.favoritesService.deleteFavorite(person);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
