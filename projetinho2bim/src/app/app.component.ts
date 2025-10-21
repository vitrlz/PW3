import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { FuncionalidadeComponent } from "./funcionalidade/funcionalidade.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, FuncionalidadeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetinho2bim';
   
}
