import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgClass } from '@angular/common';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit{
  colored!: boolean;

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.currentColored.subscribe((colored) => this.colored = colored)
  }
}

