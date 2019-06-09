import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'namcoi-blog-wp-api';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://namcoi.com/wp-json/wp/v2/posts?per_page=1')
      .subscribe(response => {
        console.log(response);
      });
  }
}
