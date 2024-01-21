export class HashCreator {

    public static create(hashLength: number){
        const hash: string = Math.random().toString(36).substring(2,hashLength +2);
        if(hash.length != hashLength){
            throw new Error("Hash length problem");
        }
        return hash;
    }
}