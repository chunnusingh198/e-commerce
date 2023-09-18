import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settime',
  templateUrl: './settime.component.html',
  styleUrls: ['./settime.component.css']
})
export class SettimeComponent implements OnInit {
  upcomingform:FormGroup
  starttime: any;
  username: any;
  endtime: any;
  showdata:boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.formsection();
  }

  formsection(){
    this.upcomingform = this.fb.group({
      name:['',Validators.required],
      time:['',Validators.required],
      endtime:['',Validators.required]
    });
  }

  submitdata(){
    this.username = this.upcomingform.value.name;
    this.starttime = this.upcomingform.value.time;
    this.endtime = this.upcomingform.value.endtime;
    if(this.upcomingform.value){
      this.showdata = true;
    }
  }


}
