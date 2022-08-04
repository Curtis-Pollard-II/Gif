import { GifsController } from "./Controllers/GifsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {

  gifsController = new GifsController();
}

window["app"] = new App();
