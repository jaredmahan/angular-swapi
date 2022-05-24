import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StarwarsLookupContainer } from "./starwars-lookup/starwars-lookup-container.component";

const routes: Routes = [
  { path: "starwars-lookup", component: StarwarsLookupContainer },
  { path: "", redirectTo: "/starwars-lookup", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
