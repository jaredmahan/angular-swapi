import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarwarsLookupContainer } from "./starwars-lookup-container.component";
import { PersonComponent } from "./person/person.component";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [StarwarsLookupContainer, PersonComponent],
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatIconModule, MatButtonModule, MatInputModule, MatProgressSpinnerModule],
  exports: [StarwarsLookupContainer]
})
export class StarwarsLookupModule {}
