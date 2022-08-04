import { ProxyState } from "../AppState.js";
import { Gif } from "../Models/Gif.js";
import { sandboxApi } from "./AxiosService.js";

class GifsService{

    async getGifs(){
        const res = await sandboxApi.get('/gifts')
        console.log(res.data);
        ProxyState.gifs = res.data.map(g => new Gif(g))
}
}




export const gifsService = new GifsService()