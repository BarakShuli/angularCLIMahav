import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWSComponent } from './chatWS.component';

describe('CesiumComponent', () => {
  let component: ChatWSComponent;
  let fixture: ComponentFixture<ChatWSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
