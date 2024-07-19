import { Component, Input } from '@angular/core';
import { Project } from '../../../models/Project';
import { ProjectSelectorService } from '../../../services/projectSelector.service';

@Component({
  selector: 'app-project-content',
  standalone: true,
  imports: [],
  templateUrl: './project-content.component.html',
  styleUrl: './project-content.component.scss'
})
export class ProjectContentComponent {
  
  @Input() box!: Project;
  filled: boolean = false;

  constructor(private projectSelectorService: ProjectSelectorService) {}
  
  onClick(){
    this.projectSelectorService.updateSelected_id(this.box.id)
  }

}
