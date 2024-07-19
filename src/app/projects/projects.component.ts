import { Component } from '@angular/core';
import { ClickableBoxProjectsListComponent } from "./clickable-box-projects-list/clickable-box-projects-list.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ClickableBoxProjectsListComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
