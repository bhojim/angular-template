import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodebankComponent } from './codebank.component';

describe('CodebankComponent', () => {
  let component: CodebankComponent;
  let fixture: ComponentFixture<CodebankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
