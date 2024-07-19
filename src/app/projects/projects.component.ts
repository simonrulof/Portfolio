import { Component } from '@angular/core';
import { ClickableBoxProjectsListComponent } from "./box/clickable-box-projects-list/clickable-box-projects-list.component";
import { ProjectContentListComponent } from "./project-content/project-content-list/project-content-list.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ClickableBoxProjectsListComponent,
    ProjectContentListComponent,
],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
