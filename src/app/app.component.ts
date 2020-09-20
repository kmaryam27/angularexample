import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angilar-example';
  post = [{title:"mmm", imageURL: "assets/m1.JPG"}, 
          {title:"nnn", imageURL: "assets/m2.JPG"}, 
          {title:"ddd", imageURL: "assets/m3.JPG"}]
}
