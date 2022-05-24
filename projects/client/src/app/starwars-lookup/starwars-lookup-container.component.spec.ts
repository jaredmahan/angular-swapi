import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StarwarsLookupContainer } from "./starwars-lookup-container.component";

describe("StarwarsLookupContainer", () => {
  let component: StarwarsLookupContainer;
  let fixture: ComponentFixture<StarwarsLookupContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarwarsLookupContainer]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarwarsLookupContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
