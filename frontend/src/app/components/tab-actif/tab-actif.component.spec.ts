import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabActifComponent } from './tab-actif.component';

describe('TabActifComponent', () => {
  let component: TabActifComponent;
  let fixture: ComponentFixture<TabActifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabActifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
