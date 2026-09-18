import { Animal } from "./Animal";

export class Cat extends Animal{
    override makeSound():void{
        console.log("Meow");
    }
}