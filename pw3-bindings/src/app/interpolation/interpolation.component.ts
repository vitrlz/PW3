import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  somar(arg0: number,arg1: number) {
    return arg0+arg1;
    }

    title = 'Hello word';
    foto = 'favicon.ico';



}
