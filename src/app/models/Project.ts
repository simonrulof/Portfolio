export class Project {

    id: string;
    activated: boolean = false;

        

    constructor(public project_name: string,
                public image: string,
                public content: string,
                public video_link: string) {
        this.id = crypto.randomUUID().substring(0, 8)
    }
    
    activate(){
        this.activated = true;
    }
    
    deActivate(){
        this.activated = false;
    }
}