import clientPromise from "@/lib/mongodb";

export default async function seedDB() {
  try {
    const client = await clientPromise;
    const db = client.db('miniappsdb');

    const playersCollection = db.collection('players');
    const citiesCollection = db.collection('cities');
    const teamsCollection = db.collection('teams');
    const listsCollection = db.collection('lists');
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
