import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroComponent } from "./cadastro/cadastro.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-login';
}
