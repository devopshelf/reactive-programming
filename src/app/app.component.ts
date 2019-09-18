import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string = "";

  // lookup = (resolve) => {
  //   let oldValue = this.message;
  //   let count = 1;
  //   let id = setInterval(()=>{
  //     if(oldValue !== this.message){
  //       resolve(this.message);
  //       oldValue = this.message;
  //       count = count + 1;
  //       if(oldValue == this.message && count > 1){
  //         clearInterval(id)
  //       }
  //     }
  //   },1000)
  // }

  getInput = ()=>{
    //return new Promise((resolve,reject)=>{   //to make it asynchronous
      
        // if(this.message != ""){
        //   resolve(this.message)
        //   console.log("inside promise")
        // }
      
      // this.lookup(resolve);
    //})
    let doc = document.getElementById("hello");
    return fromEvent(doc,'change')
    .pipe(
      map(event => (<HTMLInputElement>event.target).value)
    )
  }
  async calculate(){
    let data:string;
    console.log("Inside calculate before input");
    this.getInput().subscribe((data)=>{
      data = data;
      console.log(data);
    });
  }


  dummyFunction(){
    alert("hey")
  }

}

