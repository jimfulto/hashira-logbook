import { Styles } from "../shared/form.model";


export class Hashira {
    public name: string;
    public description: string;
    public imagePath: string;
    public styles: Styles[];

    constructor(name: string, desc: string, imagePath: string, styles: Styles[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.styles = styles;
    }
}