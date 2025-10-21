import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [ReactiveFormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  resultado: number = 0

  calcularLouco()
  {
    const input1 = document.getElementById("num1") as HTMLInputElement
    const input2 = document.getElementById("num2") as HTMLInputElement
    const input3 = document.getElementById("operacao") as HTMLInputElement

    let num1: any
    let num2: any
    let operacao

    num1 = input1.value
    num2 = input2.value
    operacao = input3.value
    console.log(operacao)
    switch (operacao){
      case '+':
        this.resultado = Number(num1) + Number(num2)
        return
      case '-':
        this.resultado = Number(num1) - Number(num2)
        return
      case '*':
        this.resultado = Number(num1) * Number(num2)
        return
      case '/':
        this.resultado = Number(num1) / Number(num2)
        return
    }
    console.log(this.resultado)
    return
  }

  private audio: HTMLAudioElement;
  calculadoraForm : FormGroup;
  constructor(private fb: FormBuilder) {

    this.calculadoraForm = this.fb.group({
      num1 : this.fb.control(0),
      num2 : this.fb.control(0),
      operacao : this.fb.control('')
    });

    this.audio = new Audio();
    this.audio.src = "assets/fart.mp3";
    this.audio.load();
  }



  calcular(){

    this.audio.currentTime = 0;
    this.audio.play().then(() => {
      console.log("Som tocando!");
    }).catch((error) => {
      console.error("Erro ao tocar o som:", error);
    })

    let num1 = this.calculadoraForm.get('num1')?.value;
    let num2 = this.calculadoraForm.get('num2')?.value
    let operacao = this.calculadoraForm.get('operacao')?.value
    switch (operacao){
      case '+':
        this.resultado = Number(num1) + Number(num2)
        return
      case '-':
        this.resultado = Number(num1) - Number(num2)
        return
      case '*':
        this.resultado = Number(num1) * Number(num2)
        return
      case '/':
        this.resultado = Number(num1) / Number(num2)
        return
    }

  }
}
