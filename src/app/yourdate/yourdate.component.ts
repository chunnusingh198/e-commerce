import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-yourdate',
  templateUrl: './yourdate.component.html',
  styleUrls: ['./yourdate.component.css']
})
export class YourdateComponent implements OnInit {
  countform:FormGroup
  setdate: any;
  showdata:boolean = true;
  screenwidth: number;
  screenheight: number;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.countdata();
    // this.screenwidth = window.screen.width;
    // this.screenheight = window.screen.height;
    // console.log('this in screen size',this.screenwidth,this.screenheight);
  }
  countdata(){
    this.countform = this.fb.group({
      date:['',Validators.required]
    });
  }
  submit(){
    this.setdate = this.countform.value.date;
    console.log('this is date',this.setdate);
    this.targetTime = Date.parse(this.setdate);
    if(this.setdate){
      this.showdata = false;
    }else{
      this.showdata = true;
    }
  }

  date: any;
  now: any;
  // targetDate: any = new Date(2023, 10, 29);
  // targetTime: any = this.targetDate.getTime();
  targetTime: any;
  difference: number;
  months: Array<string> = ['January','February','March','April','May','June','July','August','September','October','November','December',];
  // currentTime: any = `${
  //   this.months[this.targetDate.getMonth()]
  // } ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`;

  @ViewChild('days') days: ElementRef;
  @ViewChild('hours') hours: ElementRef;
  @ViewChild('minutes') minutes: ElementRef;
  @ViewChild('seconds') seconds: ElementRef;

  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);

      !isNaN(this.days.nativeElement.innerText)
        ? (this.days.nativeElement.innerText = Math.floor(this.difference))
        : (this.days.nativeElement.innerHTML = `<img src="https://i.gifer.com/VAyR.gif" />`);
    }, 1000);
  }

  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.days.nativeElement.innerText = Math.floor(this.difference);
    this.hours.nativeElement.innerText = 23 - this.date.getHours();
    this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }

}
