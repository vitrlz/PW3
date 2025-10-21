import { Component } from '@angular/core';
import { ImagemComponent } from "../imagem/imagem.component";
import { BotaoComponent } from "../botao/botao.component";
import { FrasesComponent } from "../frases/frases.component";

@Component({
  selector: 'app-biscoito',
  imports: [ImagemComponent, BotaoComponent, FrasesComponent],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {

  foto: string = "biscoito.png";
  processarFoto(fotoEvent: any){
    this.foto = fotoEvent;
    console.log(this.foto)
  }

  fraseExibir!: boolean;
  processarFrase(exibirFraseEvent: any){
    this.fraseExibir = exibirFraseEvent;
    console.log(this.fraseExibir)
  }

  numeroFrase!: any;
  processarNumeroFrase(numeroFraseEvent: any){
    this.numeroFrase = numeroFraseEvent;
    console.log(this.numeroFrase)
  }



}
