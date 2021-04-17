import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  img404: string = '/assets/images/404.png';

  constructor() { }

  ngOnInit(): void {
  }

}
