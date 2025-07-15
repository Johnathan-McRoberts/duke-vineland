import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  active = 0;
  private router = inject(Router);

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  title = 'dukevineland.client';
}
