import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AboutComponent } from "./about/about.component";
import { ProjectDashboardComponent } from "./project-dashboard/project-dashboard.component";
import { LandingComponent } from "./landing/landing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatSlideToggleModule, AboutComponent, ProjectDashboardComponent, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
