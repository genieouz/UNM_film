import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailFilmPage } from './detail-film.page';

describe('DetailFilmPage', () => {
  let component: DetailFilmPage;
  let fixture: ComponentFixture<DetailFilmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFilmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailFilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
