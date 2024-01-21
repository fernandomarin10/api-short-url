import { Hash } from "../../../shared/hash-creator/Hash";

export class SaveUrl{
    public run(){
        return Hash.create(6);
    }
}