import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGeneratorComponent } from './user-generator.component';

describe('UserGeneratorComponent', () => {
  let component: UserGeneratorComponent;
  let fixture: ComponentFixture<UserGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
