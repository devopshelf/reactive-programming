import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() show:boolean;
  @Output() handleClose = new EventEmitter<boolean>();
  @Output() handleOk = new EventEmitter<string>();
  message:string;
  constructor() { }

  ngOnInit() {
    console.log(this.show)
  }

  onClose(){
    this.handleClose.emit(false);
    this.show = false;
  }

  onOk(){
    console.log(this.message)
    this.handleOk.emit(this.message);
    this.show = false;
  }

}
