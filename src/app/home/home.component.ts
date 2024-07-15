import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public el: ElementRef, private headerService: HeaderService) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const element = this.el.nativeElement;
    const componentPosition = element.offsetTop + element.offsetHeight;
    const scrollPosition = window.pageYOffset;

    console.log(scrollPosition)
    console.log(componentPosition)

    this.headerService.checkUpdateColored(scrollPosition, componentPosition);

  }
}
