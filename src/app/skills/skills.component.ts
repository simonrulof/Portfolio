import { Component } from '@angular/core';
import { SkillListComponent } from "./skill-list/skill-list.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SkillListComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  

}
