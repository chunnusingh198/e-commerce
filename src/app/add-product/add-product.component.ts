import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellService } from '../service/sell.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addproductform:FormGroup;
  url: any;
  formData: FormData;

  constructor(private fb:FormBuilder,private ser:SellService) { }

  ngOnInit() {
    this.addproduct();
  }

  addproduct(){
    this.addproductform = this.fb.group({
      productname:['',Validators.required],
      price:['',Validators.required],
      productDetails:['',Validators.required],
      image:['',Validators.required],
      // fileSource:['',Validators.required],
    });
  }
  appproduct(){
    // this.formData = new FormData();
    // this.formData.append('file', this.addproductform.get('fileSource').value);
    // this.formData.append('productname', this.addproductform.get('productname').value);
    // this.formData.append('price', this.addproductform.get('price').value);
    // this.formData.append('productDetails', this.addproductform.get('productDetails').value);
    this.ser.addproduct(this.addproductform.value).subscribe((pro:any)=>{
      console.log('get product',pro);
    });
    console.log('this addproductform',this.addproductform.value);
    setTimeout(() => {
      this.addproductform.reset();
    }, 2000);
  }

  // onFileChanged(e:any){
  //   console.log('this is image',e);
  //   if(e.target.files){
  //     const reader = new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload = ((event:any) =>{
  //     this.url = event.target.result;
  //     });
  //     const file = e.target.files[0];
  //     this.addproductform.patchValue({
  //       fileSource: file
  //     });
  //   }
  // }

}
