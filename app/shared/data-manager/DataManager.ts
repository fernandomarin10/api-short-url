/*
    Since we don't have a DB in our solution, we implement ram storage with a class that persist the data of the service.
*/

// export interface UrlRepository<T>{
//     public save(): void;
// }
export class DataManager{
    private hashUrl = {};

    public save(hash: string, url: string){
        this.hashUrl[hash] = url;
    }

    public getUrl(hash: string){
        return this.hashUrl[hash];
    }
}