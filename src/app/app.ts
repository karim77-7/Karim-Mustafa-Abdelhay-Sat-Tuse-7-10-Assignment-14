import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Home } from "./components/home/home";
import { Blog } from "./components/blog/blog";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Home, Blog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project2');
}
