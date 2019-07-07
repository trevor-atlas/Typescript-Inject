import { IMyService } from "./IMyService";
import { Inject } from "../decorators/Inject";

export class MyService implements IMyService {

    @Inject
    private baseURL!: string;

    public sayHello(name: string): void {
        console.log(`Hello from the real service, ${name}!`)
        console.log('baseURL is ', this.baseURL)
    }
}