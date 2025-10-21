import { Component } from '@angular/core';
import { FuncionalidadeComponent } from "../funcionalidade/funcionalidade.component";
import { ContatoComponent } from "../contato/contato.component";
import { SobreComponent } from "../sobre/sobre.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FuncionalidadeComponent, ContatoComponent, SobreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
