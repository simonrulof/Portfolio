import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [
    SkillComponent
  ],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss'
})
export class SkillListComponent implements OnInit{
  skills!: Skill[]

  ngOnInit(): void {
    this.skills = [
      new Skill("Python", 80),
      new Skill("C", 50),
      new Skill("Chêvre", 100)
    ]
  }

}
