import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellService } from '../service/sell.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  signupform:FormGroup
  loginform:FormGroup
  showform:boolean = false;
  iserror: string;
  constructor(private fb:FormBuilder,private ser:SellService,private route:Router) { }

  ngOnInit() {
    this.signup();
    this.login();
    this.ser.reload();
  }

  signup(){
    this.signupform = this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
    });
  }

  login(){
    this.loginform = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
    });
  }
  loginsubmt(){
    this.ser.userlogin(this.loginform.value);
    this.ser.isloginerror.subscribe((error:any)=>{
      if(error){
        this.iserror = "Email or password in not correct"
      }
    });
  }

  submit(){
    this.ser.userdata(this.signupform.value);
  }

  opensignup(){
    this.showform = true;
  }

  openlogin(){
    this.showform = false;
  }

}
