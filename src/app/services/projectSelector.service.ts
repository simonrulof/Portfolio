import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectSelectorService {

    private boxes: Project[] = [
        new Project("TASI Thesis", "/assets/images/wallpaper.jpg", "", ""),
        new Project("Portfolio Site", "/assets/images/wallpaper.jpg",  "", ""),
        new Project("IRIT Internship", "/assets/images/wallpaper.jpg",  "", ""),
        new Project("Quadruped", "/assets/images/wallpaper.jpg",  "", ""),
        new Project("Conveyor robot", "/assets/images/wallpaper.jpg",  "", "")
    ];

    private id_selected_behaviour = new BehaviorSubject<string>(this.boxes[0].id);
    id_selected = this.id_selected_behaviour.asObservable();

    getBoxes(): Project[] {
        return [...this.boxes];
    }
      
    updateSelected_id(id: string){
        for (var box of this.boxes){
            if (box.id === this.id_selected_behaviour.value) box.deActivate()
            if (box.id === id) box.activate()
        }
        this.id_selected_behaviour.next(id);
    }
}
