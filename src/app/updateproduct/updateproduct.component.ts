import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellService } from '../service/sell.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  updateform:FormGroup
  productid: any;
  productdata:undefined;
  constructor(private fb:FormBuilder,private ser:SellService,private route:Router) { }

  ngOnInit() {
    this.ser.updatepro.subscribe((list:any)=>{
      this.productid = list;
    });
    if(this.productid){
      this.ser.upproduct(this.productid).subscribe((data:any)=>{
        this.productdata = data;
      });
    }
    this.updatedata();
  }

  updatedata(){
    this.updateform = this.fb.group({
      productname:['',Validators.required],
      price:['',Validators.required],
      productDetails:['',Validators.required],
      image:['',Validators.required],
    });
  }
  upproduct(data:any){
    if(this.productdata){
      this.updateform.value.id = this.productid;
    }
    this.ser.updateproduct(this.updateform.value).subscribe((f:any)=>{
      if(f){
        this.route.navigate(['/selle_home']);
      }
    });
  }

}
