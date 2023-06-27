import { GET as getAPI } from "../app/api/route";

export default async function getAllDrinks(userid: number) {
    userid = 1; // Always get test user for now

    const res = await getAPI();

    if (!res.ok) {
        throw new Error("Failed to fetch :(")
    }

    console.log("Woohoo!");

    return res.json();
}