import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  contactform:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.contactformsection();
  }

  contactformsection(){
    this.contactform = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phoneno:['',Validators.required],
      message:['',Validators.required],
    });
  }

  submit(){
    console.log(this.contactform.value);
    setTimeout(() => {
      this.contactform.reset();
    }, 2000);
  }

}
