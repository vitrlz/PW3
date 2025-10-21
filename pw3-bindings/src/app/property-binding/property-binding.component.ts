import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  mostrarTexto(){
    this.exibeTexto=!this.exibeTexto
  }
  title = 'Hello word';
  foto = 'favicon.ico';
  exibeTexto = false;

}
