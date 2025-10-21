import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {

  @Output() fotoEvent = new EventEmitter();
  @Output() exibirFraseEvent = new EventEmitter();
  @Output() fraseAleatoriaEvent = new EventEmitter();

  exibir1 = true;
  exibir2 = true;

  biscoito(){
    var foto = "biscoito-aberto.png"
    this.fotoEvent.emit(foto)
    this.exibir1 = false

    var exibirFrase = true;
    this.exibirFraseEvent.emit(exibirFrase)

    var numeroFrase = Math.floor(Math.random() * 10)
    this.fraseAleatoriaEvent.emit(numeroFrase)
  }

   biscoitoReiniciar(){
    var foto = "biscoito.png"
    this.fotoEvent.emit(foto)
    this.exibir1 = true

    var exibirFrase = false;
    this.exibirFraseEvent.emit(exibirFrase)
   }


}
