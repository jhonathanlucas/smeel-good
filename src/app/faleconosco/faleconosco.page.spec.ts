import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaleconoscoPage } from './faleconosco.page';

describe('FaleconoscoPage', () => {
  let component: FaleconoscoPage;
  let fixture: ComponentFixture<FaleconoscoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaleconoscoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaleconoscoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
