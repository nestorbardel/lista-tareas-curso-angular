import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  
  listaTareas: string[] = [];
  nuevaTarea: string = '';

  private _tareasService = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas()
  }

  agregarTarea()
  {
    this._tareasService.agregarTareas(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareasService.getTareas();
  }

  eliminarTarea(index: number)
  {
    this._tareasService.eliminarTareas(index);
    this.listaTareas = this._tareasService.getTareas();
  }

}
