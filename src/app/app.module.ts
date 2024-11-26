import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { KitchenComponent } from './kitchen/kitchen.component';
import { AppComponent } from './app.component';
import { ChildComponent } from "./child/child.component";


@NgModule({
  imports: [BrowserModule, FormsModule, ChildComponent],
  declarations: [  KitchenComponent ],
  
})
export class AppModule {  }
