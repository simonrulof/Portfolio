import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CurrentlyComponent } from './currently/currently.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillListComponent } from "./skills/skill-list/skill-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    HomeComponent,
    AboutmeComponent,
    CurrentlyComponent,
    SkillsComponent, 
    SkillListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
