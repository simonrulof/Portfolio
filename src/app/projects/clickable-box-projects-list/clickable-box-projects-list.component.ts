import { Component, OnInit } from '@angular/core';
import { ClickableBoxProjects } from '../../models/clickable-box-projects';
import { ClickableBoxProjectsComponent } from "../clickable-box-projects/clickable-box-projects.component";

@Component({
  selector: 'app-clickable-box-projects-list',
  standalone: true,
  imports: [
    ClickableBoxProjectsComponent
  ],
  templateUrl: './clickable-box-projects-list.component.html',
  styleUrl: './clickable-box-projects-list.component.scss'
})
export class ClickableBoxProjectsListComponent implements OnInit{
  boxes!: ClickableBoxProjects[]; 
  
  ngOnInit(): void {
    this.boxes = [
      new ClickableBoxProjects("TASI Thesis", "/assets/images/wallpaper.jpg"),
      new ClickableBoxProjects("Portfolio Site", "/assets/images/wallpaper.jpg"),
      new ClickableBoxProjects("IRIT Internship", "/assets/images/wallpaper.jpg"),
      new ClickableBoxProjects("Quadruped", "/assets/images/wallpaper.jpg"),
      new ClickableBoxProjects("Conveyor robot", "/assets/images/wallpaper.jpg")
    ];
  }
}
