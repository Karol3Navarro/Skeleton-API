import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';


@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss'],
})



export class ApiListComponent  implements OnInit {
  data: any = [];
  errorMessage: string | null = null;

  id: number | null = null;
  constructor(private apiService: APIService) {
  }

  ngOnInit():void {
    // this.loadAPI();
  }

  // loadAPI(): void{
  //   this.apiService.getPosts().subscribe({
  //     next: (data) => {
  //       this.data = data; // Asigna los datos recibidos a la variable todos
  //     },
  //     error: (error) => {
  //       this.errorMessage = error.message; // Maneja el error si ocurre
  //     }
  //   });
  // }
  ObtenerID(): void {
    if (!this.id) {
      this.errorMessage = "Por favor, ingresa un ID válido.";
      return;
    }
  
    this.apiService.getPost(this.id).subscribe({
      next: (data) => {
        this.data = data; // Asigna los datos recibidos a la variable
        this.errorMessage = ""; // Limpia cualquier mensaje de error previo
      },
      error: (error) => {
        this.errorMessage = error.message; // Maneja el error si ocurre
        this.data = null; // Limpia los datos si hay un error
      }
    });
  }
  ModificarApi(id: number){
    this.apiService.updatePost(id).subscribe(
      response => {
        console.log('Actualizado con éxito:', response);
      },
      error => {
        console.error('Error al actualizar', error);
      }
    );
  }

  createPost(post:any) {
    this.apiService.createPost(post).subscribe(
      (response) => {
        console.log('Creado con éxito:', response);
      },
      (error) => {
        console.error('Error al crear', error);
      }
    );
  }
}
