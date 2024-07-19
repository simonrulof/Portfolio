export class ClickableBoxProjects {

    id: string;

    constructor(public project_name: string,
                public image: string) {
        this.id = crypto.randomUUID().substring(0, 8)
    }
    
    
}