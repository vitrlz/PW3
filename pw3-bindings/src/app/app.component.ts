import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InterpolationComponent, EventBindingComponent, PropertyBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}

