import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SobrenosPage } from './sobrenos.page';

describe('SobrenosPage', () => {
  let component: SobrenosPage;
  let fixture: ComponentFixture<SobrenosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobrenosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SobrenosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
