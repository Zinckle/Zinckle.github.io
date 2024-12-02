import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-project-dashboard',
  standalone: true,
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ProjectCardComponent
],
  templateUrl: './project-dashboard.component.html',
  styleUrl: './project-dashboard.component.scss'
})
export class ProjectDashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  cards = [
        { title: 'Emojle',
          image: 'assets/emojle.jpg',
          description: '',
          githubLink: 'https://github.com/Zinckle/Emoji-Wordle',
          pageLink: 'https://emojle.zinck.xyz/',
          cols: 1, rows: 2 },

        { title: 'Sign Language Detection',
          image: 'assets/Aspect-ratio-4x3.svg.png',
          description: '',
          githubLink: 'https://github.com/Zinckle/SignLanguageRecognition',
          pageLink: '',
          cols: 1, rows: 2 },

        { title: 'LiDAR H.A.R.',
          image: 'assets/Aspect-ratio-4x3.svg.png',
          description: '',
          githubLink: 'https://github.com/EvanWebster1/Lidar_HAR_Capstone',
          pageLink: '',
          cols: 1, rows: 2 },

        { title: 'ZinckLib',
          image: 'assets/Aspect-ratio-4x3.svg.png',
          description: '',
          githubLink: 'https://github.com/Zinckle/ZinckLib',
          pageLink: '',
          cols: 1, rows: 2 }
      ];
}
