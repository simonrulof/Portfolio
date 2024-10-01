import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgClass } from '@angular/common';
import { HeaderService } from '../services/header.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass, 
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit{
  language: boolean = false;
  colored!: boolean;

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.currentColored.subscribe((colored) => this.colored = colored)
  }
}

