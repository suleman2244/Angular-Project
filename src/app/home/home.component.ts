import { Component, OnInit, Output,EventEmitter, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FirebaseService } from '../shared/services/auth.service';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@Output() isLogout=new EventEmitter<void>();
color = '';
parentTxtValue: String;
parentClick:Subject<void> = new Subject<void>();
childTextBoxValue: String;
  constructor(public firebaseService:FirebaseService,private translateService: TranslateService) { }

  ngOnInit(): void {
  }
  logout(){
    this.firebaseService.logout();
    this.isLogout.emit();
  }
  onParentButtonClick() {
    this.parentClick.next();
  }

  updateInChildValue(event) {
    this.childTextBoxValue = event;

  }
  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }

}
