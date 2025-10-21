// import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-aleatorio',
//   imports: [],
//   templateUrl: './aleatorio.component.html',
//   styleUrl: './aleatorio.component.css'
// })
// export class AleatorioComponent {
//   @ViewChild('min') min!: ElementRef;
//   @ViewChild('max') max!: ElementRef;
//   @Output() result = new EventEmitter<number>();

//   minTrue!: number;
//   maxTrue!: number;
//   resultado!: number;

//   minimo = (<HTMLInputElement>document.getElementById("minInput")).value;
//   gerar(){
//     this.minTrue = parseInt(this.min.nativeElement.value);
//     this.maxTrue = parseInt(this.max.nativeElement.value);
//     var valor = Math.floor(Math.random() * (this.maxTrue - this.minTrue + 1)) + this.minTrue;
//     console.log(this.minimo);
//     console.log(this.max);
//     console.log(valor)
//     this.result.emit(valor);
//   }

// }

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  imports: [],
  templateUrl: './aleatorio.component.html',
  styleUrl: './aleatorio.component.css'
})
export class AleatorioComponent {
  min: number = 0;
  max: number = 0;


  @Output() result = new EventEmitter();

  gerar(){
  this.min = parseFloat((<HTMLInputElement>document.getElementById("minInput")).value);
  this.max = parseFloat((<HTMLInputElement>document.getElementById("maxInput")).value);
    console.log(this.min);
    console.log(this.max);


    var valor = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;

    this.result.emit(valor);

    console.log(valor);
  }

}
