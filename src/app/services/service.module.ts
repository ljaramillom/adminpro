import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

import {
  AdminGuard,
  LoginGuard,
  VerificaTokenGuard,
  SidebarService,
  SharedService,
  SettingsService,
  SubirArchivoService,
  UsuarioService,
  MedicoService,
  HospitalService } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AdminGuard,
    LoginGuard,
    VerificaTokenGuard,
    SidebarService,
    SharedService,
    SettingsService,
    UsuarioService,
    SubirArchivoService,
    ModalUploadService,
    HospitalService,
    MedicoService
  ]
})
export class ServiceModule { }
