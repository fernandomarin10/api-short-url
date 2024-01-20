import app from "./app";

async function main(){
    try{
        const port: number = 9000;
        app.listen(port);
        console.log('Server is listening on port: ', port);
    }catch(e){
        console.log("Error initiating server: ", e);
    }
}

main();