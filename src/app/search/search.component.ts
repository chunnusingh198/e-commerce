import { Component, OnInit } from '@angular/core';
import { SellService } from '../service/sell.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  serchdatas: any;
  serarchresults: undefined[];

  constructor(private ser:SellService,private activat:ActivatedRoute) { }

  ngOnInit() {
    let query = this.activat.snapshot.paramMap.get('query');
    console.log('eeeeeeeee',query);

      query && this.ser.searchproduct(query).subscribe((result:any)=>{
        this.serarchresults = result;
        console.log('final data',this.serarchresults);
      });
  }

}
