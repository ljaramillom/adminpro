import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input() leyenda: string = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress', null) txtProgress: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onChanges(newValue: number) {
    // let elemHTML: any = document.getElementsByName('progreso')[0];
    if (newValue >= 100){
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  cambiarValor(value) {
    if (this.progreso >= 100 && value > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && value < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + value;

    this.cambioValor.emit(this.progreso);
  }

}
