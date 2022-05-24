import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarwarsLookupContainer } from "./starwars-lookup-container.component";
import { PersonComponent } from "./person/person.component";

@NgModule({
  declarations: [StarwarsLookupContainer, PersonComponent],
  imports: [CommonModule],
  exports: [StarwarsLookupContainer]
})
export class StarwarsLookupModule {}
