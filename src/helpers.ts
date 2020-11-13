import admin from "firebase-admin";
const db = admin.firestore();

//* Compare to arrays and return TRUE if they are the same
export function compareArrays(arr1: any[], arr2: any[]) {
	// compare lengths
	if (arr1.length !== arr2.length) return false;

	for (let i = 0; i < arr1.length; i++) {
		// Check if we have nested arrays
		if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
			// recurse into the nested arrays
			if (!compareArrays(arr1[i], arr2[i])) return false;
		} else if (arr1[i] !== arr2[i]) {
			// Warning - two different object instances will never be equal: {x:20} != {x:20}
			return false;
		}
	}
	return true;
}

//* The path is represented like this: users/{userId}/collections/{collectionId}/
export const getUserIdFromPath = (snap: admin.firestore.DocumentData) => snap.ref.path.split("/")[1];
export const getLsNwPrdFllFromPath = (snap: admin.firestore.DocumentData) => snap.ref.path.split("/")[3];

//* All refs to the database collections
export const refCollUser = db.collection("users");
export const refCollCollection = (userId: string) => refUser(userId).collection("collections");
export const refCollProduct = (userId: string) => refUser(userId).collection("products");
export const refCollNews = (userId: string) => refUser(userId).collection("news");
export const refCollFllr = (userId: string) => refUser(userId).collection("followers");
export const refCollFlling = (userId: string) => refUser(userId).collection("following");
export const refCollTags = (userId: string, productId: string) => refProduct(userId, productId).collection("tags");

//* All refs to the database doc
export const refUser = (userId: string) => refCollUser.doc(userId);
export const refList = (userId: string, listId: string) => refCollCollection(userId).doc(listId);
export const refProduct = (userId: string, productId: string) => refCollProduct(userId).doc(productId);
export const refTag = (userId: string, productId: string, tagId: string) => refCollTags(userId, productId).doc(tagId);
export const refNews = (userId: string, newsId: string) => refCollNews(userId).doc(newsId);
export const refFollower = (userId: string, followerId: string) => refCollFllr(userId).doc(followerId);
export const refFollowing = (userId: string, followingId: string) => refCollFlling(userId).doc(followingId);

//* All refs to the database Erased Collections
export const refCollErasedUser = db.collection("erasedUsers");
export const refCollErasedProds = db.collection("erasedProds");
