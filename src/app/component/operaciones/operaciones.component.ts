import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistroService } from '../../service/registro.service';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss']
})
export class OperacionesComponent implements OnInit {

  nombreRegistro: string = '';
  descripcionRegistro: string = '';
  registros: any[] = [];
  registroSeleccionado: any = null;

  constructor(private registroService: RegistroService) {}

  ngOnInit(): void {
    this.cargarRegistros();
  }

  cargarRegistros() {
    this.registros = this.registroService.obtenerRegistros();
  }

  agregarRegistro() {
    if (this.validarFormulario()) {
      const registro = {
        nombreregis: this.nombreRegistro,
        descripcionregis: this.descripcionRegistro,
        mostrarDetalles: false
      };
      this.registroService.guardarRegistro(registro);
      this.cargarRegistros();
      this.limpiarFormulario();
    }
  }

  eliminarRegistro(id: number) {
    this.registroService.eliminarRegistro(id);
    this.cargarRegistros();
  }

  toggleDetalles(registro: any) {
    this.registroSeleccionado = registro;  
  }

  validarFormulario(): boolean {
    return this.nombreRegistro !== '' && this.descripcionRegistro !== '';
  }

  limpiarFormulario() {
    this.nombreRegistro = '';
    this.descripcionRegistro = '';
  }
}
