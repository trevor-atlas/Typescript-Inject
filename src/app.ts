import {Inject} from './decorators/Inject'
import { IMyService } from './services/IMyService';

class App {
    @Inject
    private myService!: IMyService;

    public main() {
        this.myService.sayHello('internet')
    }

}

new App().main()