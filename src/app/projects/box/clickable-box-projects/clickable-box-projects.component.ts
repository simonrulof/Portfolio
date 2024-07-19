import { Component, Input } from '@angular/core';
import { Project } from '../../../models/Project';
import { NgClass } from '@angular/common';
import { ProjectSelectorService } from '../../../services/projectSelector.service';

@Component({
  selector: 'app-clickable-box-projects',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './clickable-box-projects.component.html',
  styleUrl: './clickable-box-projects.component.scss'
})
export class ClickableBoxProjectsComponent {
  @Input() box!: Project;
  filled: boolean = false;

  constructor(private projectSelectorService: ProjectSelectorService) {}
  
  onClick(){
    this.projectSelectorService.updateSelected_id(this.box.id)
  }
}
