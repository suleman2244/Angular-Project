import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-void-button',
  templateUrl: './void-button.component.html',
  styleUrls: ['./void-button.component.css']
})
export class VoidButtonComponent implements OnInit {
@Input() text:string;
@Input() btnClass:string;
@Output() onClick:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
event(){
  this.onClick.emit();
}

}
