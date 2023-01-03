import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabArchivesComponent } from './tab-archives.component';

describe('TabArchivesComponent', () => {
  let component: TabArchivesComponent;
  let fixture: ComponentFixture<TabArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabArchivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
