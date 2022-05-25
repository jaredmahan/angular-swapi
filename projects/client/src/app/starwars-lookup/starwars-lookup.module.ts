import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarwarsLookupContainer } from "./starwars-lookup-container.component";
import { PersonComponent } from "./person/person.component";
import { MatCardModule } from "@angular/material/card";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
  declarations: [StarwarsLookupContainer, PersonComponent],
  imports: [CommonModule, MatCardModule, MatSliderModule],
  exports: [StarwarsLookupContainer]
})
export class StarwarsLookupModule {}
