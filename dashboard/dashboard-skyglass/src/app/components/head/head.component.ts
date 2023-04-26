import { Component, Input } from '@angular/core';


const today = new Date();

console.log(today.toUTCString())




@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})

export class HeadComponent {
  @Input()
  today_and_now: any = today.toLocaleDateString()

}
