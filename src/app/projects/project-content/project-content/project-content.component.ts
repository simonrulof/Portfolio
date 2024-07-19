import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../models/Project';
import { ProjectSelectorService } from '../../../services/projectSelector.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-content',
  standalone: true,
  imports: [],
  templateUrl: './project-content.component.html',
  styleUrl: './project-content.component.scss'
})
export class ProjectContentComponent implements OnInit{
  
  @Input() project!: Project;
  safeURL!: string;


  ngOnInit(): void {
    this.safeURL = this.project.video_link;
  }
}
