import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  professores: string[] = ["Correx", "Wilton", "Saulo", "Bangladesh", "Nancí"];

  remover(index: number){
    this.professores.splice(index, 1);
  }
  nomeNovo:any
  adicionar(){
    const inputElement = document.getElementById("NomeInput") as HTMLInputElement;
    this.nomeNovo = inputElement?.value;
    console.log(this.nomeNovo)
    if (this.nomeNovo == '') {
      this.nomeNovo = ''
      alert('Campo vazio!');
      return;
    }
    this.professores.push(this.nomeNovo)
    inputElement.value = '';
  }

  private audio: HTMLAudioElement;
  constructor() {
    this.audio = new Audio();
    this.audio.src = "sounds/fart.mp3";
    this.audio.load();
  }

  som() {
    // const audioElement = document.getElementById('myAudio') as HTMLAudioElement;
    // audioElement.play();
    // let audio = new Audio();
    // audio.src = "assets/fart.mp3";
    // audio.load();
    // audio.play();
    // console.log("executou som")
    this.audio.currentTime = 0; 
    this.audio.play().then(() => {
      console.log("Som tocando!");
    }).catch((error) => { 
      console.error("Erro ao tocar o som:", error);
    })
  }
}
