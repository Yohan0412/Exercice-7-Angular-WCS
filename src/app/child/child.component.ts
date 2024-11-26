import { Component, input, Input} from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgIf],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

 
  
  @Input()
  numberOfCookies: number = 0;
  
  @Input()
  flour: number = 0;
  
  @Input()
  salt: number = 0;
  
  @Input()
  sugar: number = 0;
  
  @Input()
  egg: number = 0;
startCooking: any;

}

