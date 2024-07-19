import { Component, Input } from '@angular/core';
import { ClickableBoxProjects } from '../../models/clickable-box-projects';

@Component({
  selector: 'app-clickable-box-projects',
  standalone: true,
  imports: [],
  templateUrl: './clickable-box-projects.component.html',
  styleUrl: './clickable-box-projects.component.scss'
})
export class ClickableBoxProjectsComponent {
  @Input() box!: ClickableBoxProjects;
  filled: boolean = false;


}
