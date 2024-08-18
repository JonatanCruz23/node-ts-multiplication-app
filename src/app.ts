import { yarg } from "./config/plugins/yargs.pligin";
import { ServerApp } from "./presentation/server-app";

//console.log(process.argv);

//console.log(process.env);

//console.log(yarg);

(async() => {
    await main();
})();

async function main() {
    
    const {b:base, l:limit, s:showTable, n:fileName, d: fileDestination} = yarg
    ServerApp.run({base, limit, showTable, fileName, fileDestination});
    
}
