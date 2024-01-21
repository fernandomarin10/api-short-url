import { DataManager } from "../../../shared/data-manager/DataManager";
import { Hash } from "../../../shared/hash-creator/Hash";

export class SaveUrl{
    public run(url: string, dataStorage: DataManager){
        const newHash: string = Hash.create(6);
        dataStorage.save(newHash, url);
        return newHash;
    }
}