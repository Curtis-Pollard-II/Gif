import { ProxyState } from "../AppState.js"
import { sandboxApi } from "../Services/AxiosService.js"
import { gifsService } from "../Services/GifsService.js"
import { Pop } from "../Utils/Pop.js"


function _drawGif(){
    let template = ''
    ProxyState.gifs.forEach(g => template += g.gifCardTemplate)
    document.getElementById('gif-card').innerHTML = template
}



export class GifsController {
    constructor(){
    ProxyState.on('gifs', _drawGif)
    this.getGifs()
    }

async getGifs(){
    try {
        await gifsService.getGifs()
    } catch (error) {
        Pop.error(error)
        console.error('[getGifs]', error);
        
    }
}

}