import { firestore } from "firebase-admin";


export interface Products {
	id:string ,
	gurus_id: number,
	supermarket: string,
	location: string,
    category: string,
    name: string,
    price: number,
    reference_price: number,
    reference_unit: string,
   updated:firestore.Timestamp,
   created:firestore.Timestamp,
}
