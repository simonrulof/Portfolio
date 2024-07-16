import { NgClass } from '@angular/common';
import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { Skill } from '../../models/skill';


@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent{

  @Input() skill!: Skill
  filled: boolean = false;

  constructor(public el: ElementRef) { }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const element = this.el.nativeElement
    const componentPosition = element.offsetTop + element.offsetHeight
    const scrollPosition = window.pageYOffset + window.innerHeight
    if (scrollPosition >= componentPosition + 100) {
      this.filled = true
    }

  }
}
