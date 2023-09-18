import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellService } from '../service/sell.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menutype: String = 'default';
  sellername: string;
  searchresult:undefined[];
  constructor(private route:Router,private ser:SellService) { }

  ngOnInit() {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('selle_home') || val.url.includes('selle_product') || val.url.includes('update_product')){
          this.menutype="seller"
          // console.log("if section",this.menutype);
        }else{
          this.menutype="default";
          // console.log("else section",this.menutype);
        }
      }
    });
    if(localStorage.getItem('seller')){
      this.sellername = JSON.parse(localStorage.getItem('seller'));
      // console.log('this.sellername',this.sellername);
    }
  }
  logout(){
    window.localStorage.clear();
    this.route.navigate(['/seller'])
  }

  searchdata(query:KeyboardEvent){
    if(query){
      const element =query.target as HTMLInputElement;
      // console.log('this is search',element.value);
      this.ser.searchproduct(element.value).subscribe((a:any)=>{
        // console.log('final data',a);
        if(a.length > 3){
          a.length = 3;
        }
        this.searchresult = a;
      });
    }
  }

  hidesearch(){
    this.searchresult = undefined;
  }
  searchdatas(val:any){
    this.route.navigate([`/serach/${val}`])
  }

}
