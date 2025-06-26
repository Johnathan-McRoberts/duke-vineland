import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { UsersOverviewComponent } from './user-login/components/users-overview/users-overview.component';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
  }


  navigateToUsers() {
    // Standard navigation
    this.router.navigate(['/users']);
  }
  navigateToCharts() {
    // Standard navigation
    this.router.navigate(['/charts']);
  }
  navigateToTables() {
    // Standard navigation
    this.router.navigate(['/tables']);
  }
  navigateToForms() {
    // Standard navigation
    this.router.navigate(['/forms']);
  }
  navigateToInputExport() {
    // Standard navigation
    this.router.navigate(['/import-export']);
  }


  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'dukevineland.client';
}
