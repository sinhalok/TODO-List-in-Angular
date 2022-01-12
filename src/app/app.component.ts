import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alok First Angular check Project';

  constructor(){
    // setTimeout(()=>{
    //   this.title ="Hey i am Angular";
    // },3000);
  }
}
