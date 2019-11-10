import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowMatrixComponent } from './flow-matrix.component';

describe('FlowMatrixComponent', () => {
  let component: FlowMatrixComponent;
  let fixture: ComponentFixture<FlowMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
