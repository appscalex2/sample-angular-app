import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: any = 'sample-angular-app'             
  unusedVar = 123;;               

  myMethod() {                       
    return 'hello'
  }

  anotherMethod = () => {            
    let x = 5
    let y = 10
    return x + y
  title = 'sample-angular-app';
  myVariable = 123   

   unusedFunction() {  
    console.log('hello');
  }
}
