import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudsRoutingModule } from './cruds-routing.module';
import { CrudsComponent } from './cruds.component';
import {SharedModule} from "../../../shared/shared.module";
import { PokemonComponent } from './pokemon/pokemon.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    CrudsComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    CrudsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ]
})
export class CrudsModule { }
