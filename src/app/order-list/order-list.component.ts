import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
isView=false;
selectedData = {}
selectedIdx: any;
  constructor() { }
  orderList=[
    {id:1, itemName:'Shirt', status:'Ordered',qty:1,size:'M'},
    {id:2, itemName:'Jeans', status:'Canceled',qty:3,size:'XL'},
    {id:3, itemName:'Trowser', status:'Ordered',qty:2,size:'M'},
    {id:4, itemName:'T-Shirt', status:'Ordered',qty:1,size:'S'},
  
  ];
  ngOnInit(): void {
  }
  viewData(recivedIndex): Observable<any>{
   this.isView=true
   this.selectedData = this.orderList
   return this.selectedIdx = recivedIndex
  }
  isViewClosed(recived){
   
    this.isView=recived;
  }
  saveData(data) {
    console.log(data)
     this.orderList[this.selectedIdx] = data
  }
}
