import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../types';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person!: Person;
  @Input() favorite: boolean = false;
  @Output() addFavorite = new EventEmitter<Person>();
  @Output() deleteFavorite = new EventEmitter<Person>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewFavorite(person: Person) {
    this.addFavorite.emit(person);
  }
  removeFavoriteFromList(person: Person) {
    this.deleteFavorite.emit(person);
  }

}
