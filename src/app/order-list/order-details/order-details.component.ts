import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit, DoCheck {
  isEditOrder=false;
  updatedOrder: any = {id:"", itemName:'', status:'',qty:'' ,size:''};
  @Input() selectedOrder;
  @Output() isViewClosed= new EventEmitter<any>();
  @Output() savedData  = new EventEmitter<any>();
  @Input() selectedIdx
  constructor() { }
  ngOnInit(): Observable<any> {
  
     this.updatedOrder['id'] = this.selectedOrder[this.selectedIdx]['id'] ;
    this.updatedOrder['itemName'] = this.selectedOrder[this.selectedIdx]['itemName'];
    this.updatedOrder['status'] = this.selectedOrder[this.selectedIdx]['status'];
    this.updatedOrder['qty'] = this.selectedOrder[this.selectedIdx]['qty'];
    this.updatedOrder['size'] = this.selectedOrder[this.selectedIdx]['size'];
    return this.updatedOrder
  }
  ngDoCheck() {
   

  }
  viewClose(){
   
    this.isViewClosed.emit(false);
  }
  close() {
    this.updatedOrder['id'] = this.selectedOrder[this.selectedIdx]['id'] ;
    this.updatedOrder['itemName'] = this.selectedOrder[this.selectedIdx]['itemName'];
    this.updatedOrder['status'] = this.selectedOrder[this.selectedIdx]['status'];
    this.updatedOrder['qty'] = this.selectedOrder[this.selectedIdx]['qty'];
    this.updatedOrder['size'] = this.selectedOrder[this.selectedIdx]['size'];
  }
saveOrder(ev) {
  this.isEditOrder = false
  console.log(this.updatedOrder)
  this.savedData.emit(this.updatedOrder)
}

}
