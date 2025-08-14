import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username } = body;

    if (!email || !username) {
      return new Response(
        JSON.stringify({ message: "Email and username required" }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("flash-cards");
    const users = db.collection("users");

    await users.updateOne(
      { email },
      { $set: { username } },
      { upsert: true } 
    );

    return new Response(JSON.stringify({ message: "Username updated" }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
