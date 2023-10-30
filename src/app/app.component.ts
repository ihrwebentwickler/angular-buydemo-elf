import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "./core/components/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    RouterOutlet
  ],
  standalone: true
})
export class AppComponent {
}
