import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8080/getmovie').subscribe(response => {
      console.log(response);
      // Do something with the response data
    });
  }

}
