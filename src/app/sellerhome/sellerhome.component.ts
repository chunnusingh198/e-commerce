import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SellService } from '../service/sell.service';

@Component({
  selector: 'app-sellerhome',
  templateUrl: './sellerhome.component.html',
  styleUrls: ['./sellerhome.component.css']
})
export class SellerhomeComponent implements OnInit {
  list: any;
  message: string;
  productid: number;

  constructor(private route:Router, private ser:SellService) { }

  ngOnInit() {
    this.getproduct();
  }

  selingstart(){
    this.route.navigate(['/seller'])
  }

  getproduct(){
    this.ser.listproduct().subscribe((product:any)=>{
      this.list = product
    });
  }

  deleteproduct(id:number){
    this.ser.deleteproduct(id).subscribe((del:any)=>{
      if(del){
        this.message = "This Product is delete"
        this.getproduct();
      }
    });
  }
  update(id:number){
    this.productid = id;
    this.ser.updatepro.next(this.productid)
    this.route.navigate(['/update_product']);
  }

}
