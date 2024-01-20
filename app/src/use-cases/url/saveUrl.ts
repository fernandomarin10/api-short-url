export class SaveUrl{
    public run(){
        return Math.random().toString(36).substring(2,7);
    }
}