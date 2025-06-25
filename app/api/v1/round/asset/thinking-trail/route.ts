import { NextRequest, NextResponse } from "next/server";
import { connectDatabase } from "@/lib/mongodb";

// ✅ GET: Fetch both observation cards and watchpoints by round
export async function GET(req: NextRequest) {
  try {
    const round = Number(req.nextUrl.searchParams.get("round"));

    if (!round) {
      return NextResponse.json(
        { message: "Missing or invalid 'round' parameter in query string" },
        { status: 400 }
      );
    }

    const { db } = await connectDatabase();

    const [observations, watchPoints] = await Promise.all([
      db.collection("observationcard")
        .find({ round })
        .project({
          _id: 1,
          title: 1,
          description: 1,
          iconType: 1,
        })
        .toArray(),

      db.collection("watchpoints")
        .find({ round })
        .project({
          _id: 1,
          title: 1,
          description: 1,
          iconType: 1,
        })
        .toArray(),
    ]);

    return NextResponse.json(
      {
        message: "Data fetched successfully",
        observations,
        watchPoints,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
