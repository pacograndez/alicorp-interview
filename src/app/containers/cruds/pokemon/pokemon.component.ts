import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PokemonService} from "../../../../shared/services/pokemon/pokemon.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {SnackbarService} from "../../../../shared/services/snackbar/snackbar.service";
import {DialogService} from "../../../../shared/services/dialog/dialog.service";
import {PokemonModel} from "../../../../shared/class/pokemon.model";
import {StorageService} from "../../../../shared/services/storage/storage.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, AfterViewInit {

  size = 50;
  pageSize = 5;
  pageSizeOptions = [5, 10, 15];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'info', 'action'];
  pokemons: PokemonModel[] = [];
  // @ts-ignore
  @ViewChild('paginator') paginator: MatPaginator;

  constructor(
    private pokemonService: PokemonService,
    private dialogService: DialogService,
    private snackbarService: SnackbarService,
    private storageService: StorageService
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.pokemonService.pokemons.subscribe((res: PokemonModel[]) => {
      this.pokemons = res && res.length > 0 ? res : JSON.parse(<string>this.storageService.getData('pokemons'));
      if (this.pokemons === null) {
        this.getPage(1);
      } else {
        this.dataSource.data = this.pokemons;
      }
    })
  }

  getPage(page: number): void {
    this.pokemonService.getPokemons(page -1, this.size).subscribe((res: any) => {
      this.pokemonService.setPokemons(res.body.results);
      this.pokemons = res.body.results;
      this.dataSource.data = this.pokemons;
    })
  }

  changePage(): void {
    console.log('cambio de pagina');
  }

  delete(event: any): void {
    let dialogRef = this.dialogService.open(event.name);
    dialogRef.componentInstance.isOK.subscribe((res: boolean) => {
      this.dialogService.loaderDialog.next(res);
      setTimeout(() => {
        this.dialogService.loaderDialog.next(false);
        this.dataSource.data = this.pokemons.filter((pk: PokemonModel) => pk.name !== event.name);
        this.pokemonService.setPokemons(this.dataSource.data);
        this.snackbarService.open(event.name);
      }, 5000);
    });
  }

}
