import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async,ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { RestAPIComponent } from './restApi.component';

describe('CesiumComponent', () => {
   let fixture: ComponentFixture<RestAPIComponent>;
    let restInstance: RestAPIComponent;
    let de: DebugElement;
    let restApiSampleDOMEL:HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(RestAPIComponent);
      restInstance = fixture.componentInstance; // BannerComponent test instance
      restApiSampleDOMEL = fixture.debugElement.nativeElement;

      de = fixture.debugElement.query(By.css('h1'));
      restApiSampleDOMEL = de.nativeElement;
    });

    it('should display a different test title', () => {
      restInstance.title = 'Test Title';
      fixture.detectChanges();
      expect(restApiSampleDOMEL.textContent).toContain('Test Title');
    });
});
