import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import Swal from 'sweetalert2';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;
  totalRegistros = 0;
  cargando: boolean = true;

  constructor(
    public _usuarioService: UsuarioService,
    public _modalUploadService: ModalUploadService,
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
    this._modalUploadService.notificacion
        .subscribe(resp => this.cargarUsuarios());
  }

  cargarUsuarios() {
    this.cargando = true;
    this._usuarioService.cargarUsuarios(this.desde)
        .subscribe((resp: any) => {
          this.totalRegistros = resp.total;
          this.usuarios = resp.usuarios;
          this.cargando = false;
        });
  }

  buscarUsuario(termino: string) {
    if (termino.length <= 0) {
      this.cargarUsuarios();
      return;
    }

    this.cargando = true;

    this._usuarioService.buscarUsuarios(termino)
      .subscribe((usuarios: Usuario[]) => {
          this.usuarios = usuarios;
          this.cargando = false;
      });
  }

  cambiarDesde(valor: number) {
    let desde = this.desde + valor;
    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }
    this.desde += valor;
    this.cargarUsuarios();
  }

  borrarUsuario(usuario: Usuario) {
    if (usuario._id === this._usuarioService.usuario._id) {
      Swal.fire('Error', 'El usuario seleccionado no puede ser eliminado.', 'error');
    }
    Swal.fire({
      title: '¿Está seguro de realizar la siguiente acción?',
      text: "El usuario con nombre " + usuario.nombre + ' será eliminado.',
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.value) {
        this._usuarioService.borrarUsuario(usuario._id)
          .subscribe(borrado => {
            console.log(borrado);
            this.cargarUsuarios();
          });
        }
    });
  }

  guardarUsuario(usuario: Usuario) {
    this._usuarioService.actualizarUsuario(usuario)
      .subscribe(resp => {
        console.log(resp);
      });
  }

  mostrarModal(id: string) {
    this._modalUploadService.mostrarModal('usuarios', id);
  }

}
