import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from './services/settings/settings.service';
import { ServiceModule } from './services/service.module';
import { APP_ROUTES } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    APP_ROUTES,
    FormsModule,
    SharedModule,
    BrowserModule,
    ServiceModule,
    ReactiveFormsModule,
  ],
  providers: [
    SettingsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
