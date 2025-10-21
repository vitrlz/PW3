import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  hidden: boolean = false
  texto: string = ""
  userCerta: string = "Gustavo Escarpa"
  passCerta: string = "123HAS"

  private audio: HTMLAudioElement;
  cadastroForm : FormGroup;
  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      user : this.fb.control(""),
      pass : this.fb.control("")
    });

    this.audio = new Audio();

    this.audio.load();
  }

  autenticar(){
    let user = this.cadastroForm.get('user')?.value;
    let pass = this.cadastroForm.get('pass')?.value;
    if(user == this.userCerta && pass == this.passCerta){
      this.texto = "Bem vindo, " + user

    this.audio.src = "assets/palmeiras.mp3";
    this.audio.currentTime = 0;
    this.audio.play()
    }else{
      this.texto = "Usuário/Senha inválido"

      this.audio.src = "assets/fart.mp3";
    this.audio.currentTime = 0.7;
    this.audio.play()

    }
    this.hidden = !this.hidden
  }

}
