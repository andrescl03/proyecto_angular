import { Component, OnInit } from '@angular/core';

@Component({
  //nombre de la etiqueta
  selector: 'app-about',
  //plantilla html que llama
  templateUrl: './about.component.html',
  //
  styleUrls: ['./about.component.css']
})

//export para usar este componente en otras partes de la aplicación
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
