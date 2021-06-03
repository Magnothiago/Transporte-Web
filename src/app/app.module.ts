import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {ClienteModule} from './cliente/cliente.module';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {ClienterouteModule} from './cliente/clienteroute/clienteroute.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './forms/login/login.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    // NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ClienteModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    ClienterouteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    // NavBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
