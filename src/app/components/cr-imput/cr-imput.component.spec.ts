import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrImputComponent } from './cr-imput.component';

describe('CrImputComponent', () => {
  let component: CrImputComponent;
  let fixture: ComponentFixture<CrImputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrImputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrImputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
