import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService{
  

  registros: any[] = [];

  constructor() { 
    this.cargarRegistro();
  }

  private cargarRegistro() {
    this.registros = JSON.parse(localStorage.getItem('registros') || '[]');
  }

  guardarRegistro(registro: any) {
    registro.id = this.generarId();
    this.registros.push(registro);
    localStorage.setItem('registros', JSON.stringify(this.registros));
  }

  eliminarRegistro(id: number) {
    this.registros = this.registros.filter(registro => registro.id !== id);
    localStorage.setItem('registros', JSON.stringify(this.registros));
  }


  obtenerRegistros(): any[] {
    return this.registros;
  }

  private generarId(): number {
    return this.registros.length > 0 ? Math.max(...this.registros.map(t => t.id)) + 1 : 1;
  }
}
