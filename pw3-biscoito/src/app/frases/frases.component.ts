import { Component, Input, Type } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css' // Corrigido (antes estava styleUrl)
})
export class FrasesComponent {
  frases = [
    "Feliz Natal e um próspero Ano Novo",
    "Não mexa com o meu território, senão vai acabar mal.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Acredite em você e tudo será possível.",
    "Grandes conquistas começam com pequenos passos.",
    "O impossível é apenas uma opinião.",
    "Você é mais forte do que imagina e capaz de mais do que acredita.",
    "Fracasso não é o fim, é apenas uma lição no caminho para a vitória.",
    "Se você pode sonhar, pode realizar.",
    "A persistência realiza o impossível."
  ];
  @Input() numeroFrasef!: number
  frase = this.frases[Math.floor(Math.random() * 10)]; // Inicializa com a primeira frase
  @Input() exibir=false
}
