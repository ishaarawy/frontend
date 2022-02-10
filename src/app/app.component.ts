import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Champion';

  navLinks=[
    {name:'Participants',url:'/participants'},
    {name:'Leagues',url:'/leagues'}
  ]
}
