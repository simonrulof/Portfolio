import { Component } from '@angular/core';
import { Project } from '../../../models/Project';
import { ProjectSelectorService } from '../../../services/projectSelector.service';
import { ProjectContentComponent } from '../project-content/project-content.component';

@Component({
  selector: 'app-project-content-list',
  standalone: true,
  imports: [
    ProjectContentComponent,
  ],
  templateUrl: './project-content-list.component.html',
  styleUrl: './project-content-list.component.scss'
})
export class ProjectContentListComponent {
  projects!: Project[]; 
  id_selected!: string;

  constructor(private projectSelectorService: ProjectSelectorService) {}
  
  ngOnInit(): void {
    this.projects = this.projectSelectorService.getProjects()
    this.projects[0].activate()

    this.projectSelectorService.id_selected.subscribe((id_selected) => this.id_selected = id_selected)
  }

}
