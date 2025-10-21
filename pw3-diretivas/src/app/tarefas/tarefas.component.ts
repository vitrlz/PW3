import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  imports: [],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  tarefas: any[] = [
    {"id": 1, "nome": "tarefa1", "concluido": true},
    {"id": 2, "nome": "tarefa2", "concluido": true},
    {"id": 3, "nome": "tarefa3", "concluido": true},
    {"id": 4, "nome": "tarefa4", "concluido": false},
    {"id": 5, "nome": "tarefa5", "concluido": false}
  ]

  mostrarTarefas: boolean = false
  botao: boolean = true
  mostrarTarefasConcluidas: boolean = false

  mostrar(){
    this.mostrarTarefas = true;
    this.mostrarTarefasConcluidas = false;
    this.trocaBotão()
  }

  mostrarConcluidas(){
    this.mostrarTarefasConcluidas = true;
    this.trocaBotão()
  }

  //      |esse acento foi só para zuar mesmo
  trocaBotão(){
    this.botao = !this.botao
  }
}
