export class Skill {

    id: string;

    constructor(public skill_name: string,
                public percentage: number) {
        this.id = crypto.randomUUID().substring(0, 8)
    }
    
    



    
}