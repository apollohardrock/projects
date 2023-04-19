import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  cardTitle:string = "Atração"
  @Input()
  cardCover:string = "photo"
  @Input()
  cardNumber:string = "0"

}
