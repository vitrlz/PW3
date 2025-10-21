import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TexteBootstrapComponent } from "./texte-bootstrap/texte-bootstrap.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TexteBootstrapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apresentacao';
}
