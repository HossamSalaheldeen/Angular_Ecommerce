import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common-functions.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage;
  @Input() pageTotalNumber;

  pageNumber:number=1;
  limit:number = 5;
  constructor( private _navRoute:Router,
    private _commonServices:CommonService) { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
}

onClick(num):void{
  this.pageNumber = num;
  this._commonServices.onClick(this.pageNumber);
}

receiveNumber(limitNumber):void{
  this.limit = limitNumber;
  console.log('receiveNumber : ' + this.limit);
}
}
