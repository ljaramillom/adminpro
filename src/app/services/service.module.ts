import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, SharedService, SettingsService, UsuarioService } from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuard } from './guards/login-guard.guard';
import { SubirArchivoService } from './subirArchivo/subir-archivo.service';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginGuard,
    SidebarService,
    SharedService,
    SettingsService,
    UsuarioService,
    SubirArchivoService,
    ModalUploadService
  ]
})
export class ServiceModule { }
