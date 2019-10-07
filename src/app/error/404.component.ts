import { Component } from '@angular/core'

@Component({
  template:`<h1 class='errorMessage'>Error 404</h1>`,
  styles: [`
    .errorMessage {
        margin-top: 150px;
        font-size: 120px;
        text-align: center;
    }
  `]  
})

export class Error404Component{
    constructor(){}
}