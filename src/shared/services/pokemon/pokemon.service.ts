import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {PokemonModel} from "../../class/pokemon.model";
import {StorageService} from "../storage/storage.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: BehaviorSubject<PokemonModel[]> = new BehaviorSubject<PokemonModel[]>([]);

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) { }

  getPokemons(page: number, size: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('limit', size.toString());
    params = params.append('offset', page.toString());
    return this.httpClient.get(environment.API_URL + 'pokemon/?', {params, observe: 'response'})
  }

  setPokemons(data: PokemonModel[]): void {
    this.storageService.setData('pokemons', JSON.stringify(data));
    this.pokemons.next(data);
  }
}
