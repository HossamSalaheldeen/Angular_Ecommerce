
import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


    pageNumber:number=1;
    limit:number=5 ;
    quary:string;
  constructor(private _navRoute:Router) { }

  onClick(pageNumber:number,limit?:number,stringFilter?:string):void{
    this.pageNumber = pageNumber || 1;
    this.limit      = limit || this.limit || 5;
    this.quary      = stringFilter|| this.quary ;
    
    console.log("quary : "+this.quary);
    if(this.quary != ''){
      console.log("qwqwqq");
      this._navRoute.navigate([''],{
      
        queryParams:{
          'page' : this.pageNumber,
          'limit': this.limit,
          'q'    : this.quary 
        }
      })
    }else{
      this._navRoute.navigate([''],{
      
        queryParams:{
          'page' : this.pageNumber,
          'limit': this.limit
        }
      })
    }
    
  }

  clearStrimg():void{
    this.quary='';
  }
  
}
