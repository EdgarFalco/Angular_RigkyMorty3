import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DetallestarjetaComponent } from './detallestarjeta/detallestarjeta.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    TarjetaComponent,
    AcercadeComponent,
    HomeComponent,
    DetallestarjetaComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
