import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mtb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title = '';//decorator
  @Input() imageURL = '';


  constructor() { }

  ngOnInit(): void {
  }

}
