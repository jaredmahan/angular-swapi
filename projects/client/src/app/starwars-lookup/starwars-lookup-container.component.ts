import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { BehaviorSubject, debounceTime, Observable } from "rxjs";
import { PeopleService } from "../services/people.service";
import { Result, Person } from "../services/types";

@Component({
  selector: "app-starwars-lookup-container",
  templateUrl: "./starwars-lookup-container.component.html",
  styleUrls: ["./starwars-lookup-container.component.css"]
})
export class StarwarsLookupContainer implements OnInit {
  searchControl = new FormControl('');
  people$ = new BehaviorSubject(new Result<Person>()).asObservable();
  dirty = false;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      this.dirty = true;
      this.people$ = this.peopleService.search(value);
    });
  }
}
