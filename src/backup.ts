import { firestore } from 'firebase-admin';
import * as dia_db from'./DatasetJSON/DiaDB.json';
import {Products} from './types/products';
const csv=require('csvtojson');


export async function backupSuper(){
    const diaProducts = await csv().fromFile(dia_db);

    const  arrayprod: Products[] =  [];
    for(let prodKey in diaProducts) arrayprod.push(gurusToSupermarket(diaProducts[prodKey]));

    
}

async function  saveToFirebase(prod: Products){
    const db = firestore.
    
}


function gurusToSupermarket(guruSuper: any): Products{
    return {
        id: '',
	gurus_id: guruSuper['id'],
	supermarket: guruSuper['supermarket'].split('-')[0],
	location: guruSuper['supermarket'].split('-')[1],
    category: guruSuper['category'],
    name: guruSuper['name'],
    price: guruSuper['price'],
    reference_price: guruSuper['reference_price'],
    reference_unit: guruSuper['reference_unit'],
   updated: firestore.Timestamp.now(),
   created: firestore.Timestamp.now(),
    }


}