import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponentComponent } from './pokemon-list.component';

describe('PokemonListComponentComponent', () => {
  let component: PokemonListComponentComponent;
  let fixture: ComponentFixture<PokemonListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
