import {CrudsComponent} from "./cruds.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {MatDialogModule} from "@angular/material/dialog";
import {DialogService} from "../../../shared/services/dialog/dialog.service";

describe('CrudsComponent', () => {
  let component: CrudsComponent;
  let fixture: ComponentFixture<CrudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudsComponent],
      imports: [
        MatDialogModule
      ],
      providers: [
        DialogService
      ]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CrudsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('la variable show debería estar inicializada con false', () => {
    expect(component.show).toEqual(false);
  });

})
