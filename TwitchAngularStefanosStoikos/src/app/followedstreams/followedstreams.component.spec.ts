import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedstreamsComponent } from './followedstreams.component';

describe('FollowedstreamsComponent', () => {
  let component: FollowedstreamsComponent;
  let fixture: ComponentFixture<FollowedstreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowedstreamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowedstreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
