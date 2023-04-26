import { Component, Input } from '@angular/core';
import data from '../../../api/dashboard.json';

let json: any = data

let clientesParque: string = json[0].quantidade
let clientesPlataforma: string = json[1].quantidade
let clientesAbusado: string = json[2].quantidade


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input()
  parque: string = clientesParque;
  @Input()
  plataforma: string = clientesPlataforma
  @Input()
  abusado: string = clientesAbusado

}
