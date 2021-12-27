import {PokemonComponent} from "./pokemon.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {PokemonService} from "../../../../shared/services/pokemon/pokemon.service";
import {DialogService} from "../../../../shared/services/dialog/dialog.service";
import {MatDialogModule} from "@angular/material/dialog";
import {SnackbarService} from "../../../../shared/services/snackbar/snackbar.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonComponent],
      imports: [
        HttpClientTestingModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      providers: [
        PokemonService,
        DialogService,
        SnackbarService
      ]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('debería crear el component', () => {
    const fixture = TestBed.createComponent(PokemonComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('la variable size debería estar inicializada con 50', () => {
    expect(component.size).toEqual(50);
  });

  it('la variable pageSize debería estar inicializada con 5', () => {
    expect(component.pageSize).toEqual(5);
  });

  it('la variable pageSizeOptions debería contener al menos uno de los valores [5, 10, 15]', () => {
    expect(component.pageSizeOptions).toContain(5);
  });
})
