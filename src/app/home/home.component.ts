import { Component, OnInit } from '@angular/core';
import { SellService } from '../service/sell.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: any;

  constructor(private ser:SellService) { }

  ngOnInit() {
    this.getproduct();
  }
  getproduct(){
    this.ser.listproduct().subscribe((product:any)=>{
      this.list = product
    });
  }

}
