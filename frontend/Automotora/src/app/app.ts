import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  public router = inject(Router)

  protected readonly title = signal('Automotora');
}
