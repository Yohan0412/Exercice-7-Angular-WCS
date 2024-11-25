import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  // Input()
  // startCooking: boolean : false;
  
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

}

