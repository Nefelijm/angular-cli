import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nombre de la etiqueta se va hacer referencia
  templateUrl: './app.component.html', //
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'proyecto';
  show:boolean = false;
  cursos:string[] = ["angular","react","vue.js","html","java"];

  constructor(){
    this.showCursos();
  }

  showCursos(){
    this.show = !this.show;
    console.log(this.show)
  }

}

