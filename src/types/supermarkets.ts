import { firestore } from "firebase-admin";


export interface supermarket {
	id:string ,
	supermarket: string,
    location: string,
    num_products: number,
   updated:firestore.Timestamp,
   created:firestore.Timestamp,
}