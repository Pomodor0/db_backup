import admin from "firebase-admin";


admin.initializeApp({
    credential: admin.credential.cert(require('../../credentials.json')),
});
import * as backup from "./backup";


exports.backup = backup;


function main(){
    backup.backupSuper();
}

main();