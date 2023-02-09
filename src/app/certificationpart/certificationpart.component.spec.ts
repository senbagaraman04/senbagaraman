import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationpartComponent } from './certificationpart.component';

describe('CertificationpartComponent', () => {
  let component: CertificationpartComponent;
  let fixture: ComponentFixture<CertificationpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationpartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
