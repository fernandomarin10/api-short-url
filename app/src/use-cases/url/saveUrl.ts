import { HashCreator } from "../../../shared/hash-creator/HashCreator";

export class SaveUrl{
    public run(){
        return HashCreator.create(6);
    }
}