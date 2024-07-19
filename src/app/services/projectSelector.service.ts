import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectSelectorService {

    private boxes: Project[] = [
        new Project("TASI Thesis", "/assets/images/wallpaper.jpg", "Salut c’est Simon. Paragraphe bien sympa parlant de ma vie en francais et en anglais parce que franchement ca rend vachement mieux vous trouvez pas ?", "https://www.youtube.com/embed/A7EDceh_ucg"),
        new Project("Portfolio Site", "/assets/images/wallpaper.jpg",  "Salut c’est Simon. Paragraphe bien sympa parlant de ma vie en francais et en anglais parce que franchement ca rend vachement mieux vous trouvez pas ?", "https://www.youtube.com/embed/A7EDceh_ucg"),
        new Project("IRIT Internship", "/assets/images/wallpaper.jpg",  "Salut c’est Simon. Paragraphe bien sympa parlant de ma vie en francais et en anglais parce que franchement ca rend vachement mieux vous trouvez pas ?", "https://www.youtube.com/embed/A7EDceh_ucg"),
        new Project("Quadruped", "/assets/images/wallpaper.jpg",  "Salut c’est Simon. Paragraphe bien sympa parlant de ma vie en francais et en anglais parce que franchement ca rend vachement mieux vous trouvez pas ?", "https://www.youtube.com/embed/A7EDceh_ucg"),
        new Project("Conveyor robot", "/assets/images/wallpaper.jpg",  "Salut c’est Simon. Paragraphe bien sympa parlant de ma vie en francais et en anglais parce que franchement ca rend vachement mieux vous trouvez pas ?", "https://www.youtube.com/embed/A7EDceh_ucg")
    ];

    private id_selected_behaviour = new BehaviorSubject<string>(this.boxes[0].id);
    id_selected = this.id_selected_behaviour.asObservable();

    getProjects(): Project[] {
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
