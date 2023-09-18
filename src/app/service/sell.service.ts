import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  constructor(private http:HttpClient,private route:Router) { }

issllersignup= new BehaviorSubject<boolean>(false)
// updatepro= new BehaviorSubject<boolean>(false)
isloginerror= new EventEmitter<boolean>(false)

public updatepro = new BehaviorSubject<any>('');
updatepro$ = this.updatepro.asObservable();


  userdata(data:any){
    return this.http.post(environment.Url,data,{observe: "response"})
    .subscribe((result:any)=>{
      this.issllersignup.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body))
      this.route.navigate(['/selle_home']);
      console.log('this is server data',result);
    });
  }
  reload(){
    if(localStorage.getItem('seller')){
      this.issllersignup.next(true);
      this.route.navigate(['/selle_home']);
    }
  }

  userlogin(data:any){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe: "response"})
    .subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.route.navigate(['/selle_home']);
      }else{
        console.log("user logged in failed");
        this.isloginerror.emit(true)
      }
    })
  }

  addproduct(data:any){
    return this.http.post(environment.addUrl,data)
  }
  listproduct(){
    return this.http.get(environment.addUrl)
  }
  deleteproduct(id:number){
    return this.http.delete(`http://localhost:3000/addproduct/${id}`)
  }
  upproduct(id:number){
    return this.http.get(`http://localhost:3000/addproduct/${id}`)
  }
  updateproduct(product:any){
    return this.http.put(`http://localhost:3000/addproduct/${product.id}`,product)
  }

  searchproduct(query:any){
    return this.http.get(`http://localhost:3000/addproduct?q=${query}`)
  }
}
