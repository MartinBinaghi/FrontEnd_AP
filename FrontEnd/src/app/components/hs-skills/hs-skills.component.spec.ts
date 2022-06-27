import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsSkillsComponent } from './hs-skills.component';

describe('HsSkillsComponent', () => {
  let component: HsSkillsComponent;
  let fixture: ComponentFixture<HsSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
