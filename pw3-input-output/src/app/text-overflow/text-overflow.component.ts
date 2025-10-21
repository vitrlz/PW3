import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aleatorio/',
  imports: [],
  templateUrl: './text-overflow.component.html',
  styleUrl: './text-overflow.component.css'
})
export class TextOverflowComponent {
  @Input() titulo = "O titulo";
  @Input() texto = "O texto longo que será cortado pela folha de estilo. Avante Palestra👺";
  @Input() escolha : boolean = true;

  trocar(){
    this.escolha = !this.escolha;
  }

}
