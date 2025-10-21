import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  imports: [],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css'
})
export class IfComponent {

    nomes: string[] = [];

    addTeste() {
      this.nomes.push('Teste');
    }

}
