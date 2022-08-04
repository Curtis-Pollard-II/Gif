export class Gif{
    constructor(data){
        this.opened = data.opened
        this.tag = data.tag
        this.url = data.url
        this.id = data.id

        

    }

    get gifCardTemplate(){
        return`
        
            <img src="${this.url}"></img>
        
        `
    }
}