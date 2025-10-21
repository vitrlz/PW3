import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextOverflowComponent } from "./text-overflow/text-overflow.component";
import { AleatorioComponent } from "./aleatorio/aleatorio.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextOverflowComponent, AleatorioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  resultado!: number ;

  processar(resultado: number){
    this.resultado = resultado;
  }
}
