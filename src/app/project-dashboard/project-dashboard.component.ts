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
          description: 'Emojle is an emoji-based guessing game similar to Wordle, the objective is to guess the correct emoji based on feedback on previous guesses. Start by selecting any emoji and use the information you get from that guess to try and find the emoji of the day!',
          githubLink: 'https://github.com/Zinckle/Emoji-Wordle',
          pageLink: 'https://emojle.zinck.xyz/',
          cols: 1, rows: 2 },

        { title: 'Sign Language Detection',
          image: 'assets/SLD.png',
          description: 'In this project, I created a Sign Language Recognition System utilizing convolutional neural network (CNN). This process involves two CNNs; one for detecting static ASL signs, and another for recognizing dynamic signs like the letters J and Z. This was done by using datasets such as Sign Language MNSIT and EMNIST Letters, coupled with finger tracking from mediapipe.',
          githubLink: 'https://github.com/Zinckle/SignLanguageRecognition',
          pageLink: '',
          cols: 1, rows: 2 },

        { title: 'LiDAR H.A.R.',
          image: 'assets/LiDAR_HAR.png',
          description: 'This project presents a comprehensive approach to detecting and classifying human exercise poses using 3D LIDAR technology coupled with deep learning methodologies. Our study builds upon the foundational work of point cloud processing, introducing a series of deep learning models to recognize and classify human exercises accurately.',
          githubLink: 'https://github.com/EvanWebster1/Lidar_HAR_Capstone',
          pageLink: '',
          cols: 1, rows: 2 },

        { title: 'ZinckLib',
          image: 'assets/ZinckLib.png',
          description: 'The main focus of this library is around the manipulation of strings between various forms like strings to numbers or converting a number to its written form. There are also some other tools like creating a list of prime numbers less than a given value or determining if a string is in alphabetical order.',
          githubLink: 'https://github.com/Zinckle/ZinckLib',
          pageLink: 'https://pypi.org/project/ZinckLib/',
          cols: 1, rows: 2 }
      ];
}
