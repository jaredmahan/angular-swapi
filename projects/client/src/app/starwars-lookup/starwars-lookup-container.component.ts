import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PeopleService } from "../services/people.service";
import { Result, Person } from "../services/types";

@Component({
  selector: "app-starwars-lookup-container",
  templateUrl: "./starwars-lookup-container.component.html",
  styleUrls: ["./starwars-lookup-container.component.css"]
})
export class StarwarsLookupContainer implements OnInit {
  people$!: Observable<Result<Person>>;
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.people$ = this.peopleService.search("la");
  }
}
