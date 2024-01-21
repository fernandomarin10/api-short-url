import { Hash } from "../../../shared/hash-creator/Hash";
import { DataManager } from "../../../shared/data-manager/DataManager";

export class GetUrlFromHash{
    public run(hash: Hash, dataStorage: DataManager){
        return dataStorage[hash.hash];
    }
}