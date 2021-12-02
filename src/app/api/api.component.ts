import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  users:any;

  searchText;
  constructor(private http : HttpClient,private userData:UsersDataService) {
    this.userData.getData()
    .subscribe((data)=>{
      if (data) {
        hideloader();
        this.users=data;
    }

    })
    function hideloader() {
    document.getElementById('loading').style.display = 'none';
  }

}

  ngOnInit(): void {


  }


}