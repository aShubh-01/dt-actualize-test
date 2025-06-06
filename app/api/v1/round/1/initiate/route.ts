import { connectDatabase } from "@/lib/mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { roleId, userId } = await req.json();
        if(!roleId || !userId) {
            return NextResponse.json({
                error: "Requires missing parameters"
            }, { status: 400 })
        } 

        const { db } = await connectDatabase();
        const currentDate = new Date()
        const initiatedRound = await db.collection("round1_attempts").insertOne({
            roleId,
            userId,
            createdAt: currentDate,
            updatedAt: currentDate
        });

        return NextResponse.json({
            attemptId: initiatedRound.insertedId,
            message: "Round 1 Initiated"
        }, { status: 200})
        
    } catch (err) {
        console.error('Error initiating round 1', err);
        return NextResponse.json(
            { error: "Failed to initiated round 1"}, 
            {status: 500}
        )
    }
}