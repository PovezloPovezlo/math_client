import Author from "./Author";

export class ModuleInfo {

    author: Author;
    name: string;
    githubUrl: string;

    constructor(author: Author, name: string, githubUrl: string) {
        this.author = author;
        this.name = name;
        this.githubUrl = githubUrl;
    }

}