import { Component, OnInit } from '@angular/core';
import { Project } from '../../../models/Project';
import { ClickableBoxProjectsComponent } from "../clickable-box-projects/clickable-box-projects.component";
import { ProjectSelectorService } from '../../../services/projectSelector.service';

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
  boxes!: Project[]; 

  constructor(private projectSelectorService: ProjectSelectorService) {}
  
  ngOnInit(): void {
    this.boxes = this.projectSelectorService.getProjects()
    this.boxes[0].activate()
  }
}
