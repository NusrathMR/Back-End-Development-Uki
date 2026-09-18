import { Animal } from "./Animal";

export class Dog extends Animal{
    override makeSound():void{
        console.log("Dog barks")
    }
}