import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const { email, username } = await req.json();
  const client = await clientPromise;
  const users = client.db("flash-cards").collection("users");

  const exists = await users.findOne({ username });
  if (exists) return new Response(JSON.stringify({ error: "Username taken" }), { status: 400 });

  await users.insertOne({ email, username, pinnedSets: [], lastViewed: "" });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}