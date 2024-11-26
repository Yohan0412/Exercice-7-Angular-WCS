import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KitchenComponent } from './kitchen/kitchen.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,KitchenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {}
