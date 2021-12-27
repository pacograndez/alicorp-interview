/*
import {PokemonService} from "./pokemon.service";
import {TestBed} from "@angular/core/testing";
import {HttpClient} from "@angular/common/http";
import {StorageService} from "../storage/storage.service";
import {of} from "rxjs";

class HttpClientSpy {
  get = jasmine.createSpy('httpClient.get');
}

class StorageSpy {
  // setData = jasmine.createSpy('storageService.setData');
  getData = jasmine.createSpy('storageService.getData');
}

fdescribe('PokemonService', () => {
  let service: PokemonService;
  let storageSpy: StorageSpy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useClass: HttpClientSpy},
        {provide: StorageService, useClass: StorageSpy}
      ]
    });
    service = TestBed.inject(PokemonService);
    storageSpy = TestBed.inject(StorageService)
  })

  it('debería crear servicio', () => {
    expect(service).toBeTruthy();
  })

  it('debería retornar listado de pokemons', () => {
    const pokemons = [{
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    }]
    expect(service.getPokemons(0, 50)).toBeUndefined()
    service.setPokemons(pokemons);
  })
})

*/
