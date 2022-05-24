import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StarwarsLookupModule } from "./starwars-lookup/starwars-lookup.module";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StarwarsLookupModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
