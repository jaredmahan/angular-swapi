import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Person } from "./types/person";

@Injectable({ providedIn: "root" })
export class PeopleService extends BaseService<Person> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "people");
  }
}
