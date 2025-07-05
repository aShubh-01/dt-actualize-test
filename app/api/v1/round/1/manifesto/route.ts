import { NextResponse, NextRequest } from "next/server";
import { connectDatabase } from "@/lib/mongodb";
import { toObjectId } from "@/lib/utils";

export async function POST(req: NextRequest) {
    try {
        const { userId, manifestoData } = await req.json();

        if(!userId || !manifestoData) {
            return NextResponse.json({
                error: 'UserId & Manifesto Data required',
            }, { status: 400 })
        }

        const { db } = await connectDatabase();

        await db.collection('manifestos').insertOne({
            userId: toObjectId(userId),
            manifestoData
        });

        return NextResponse.json({
            message: 'Manifesto Submitted!'
        }, { status: 200 });

    } catch (error) {
        console.error('Error creating manifesto:', error);

        return NextResponse.json(
            { error: 'Unable to submit user manifesto' },
            { status: 500 }
        );
    }
}