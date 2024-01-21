export class Hash {
    public readonly hash: string;

    public constructor(hash: string){
        if(hash == null || typeof hash != "string") throw new Error("Hash should be string");
        if(hash == "" || hash.length != 6) throw new Error("Hash should containe 6 chars");
        this.hash = hash;
    }
    
    public static create(hashLength: number){
        const hash: string = Math.random().toString(36).substring(2,hashLength +2);
        if(hash.length != hashLength){
            throw new Error("Hash length problem");
        }
        return hash;
    }
}