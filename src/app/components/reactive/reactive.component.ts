import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  show:boolean = false;
  subject = new Subject();
  connection:Subscription;
  constructor() { }

  recieveUserInput(value:string){
    console.log("Inside Modal");
    this.show = false;
    this.subject.next(value);
  }

  onCancel(){
    this.show = false;
  }

  dummy(){
    alert("I am dummy")
  }

  ngOnInit() {
    this.connection = this.subject.subscribe({
      next:function(data){
      alert(`this is from react function, value: ${data}`);
      }
    })
  }

  calculate(){
    this.show = true;
    //let a  = await getValue();
    let a = ""
    
  }

  ngOnDestroy(){
    this.connection.unsubscribe();
  }

}
