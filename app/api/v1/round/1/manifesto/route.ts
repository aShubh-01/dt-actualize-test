import { NextResponse, NextRequest } from "next/server";
import { connectDatabase } from "@/lib/mongodb";
import { toObjectId } from "@/lib/utils";

export async function POST(req: NextRequest) {
    try {
        const { userId, user_email, q1, q2, q3 } = await req.json();

        if(!userId || !user_email || !q1 || !q2 ||!q3) {
            return NextResponse.json({
                error: 'Incomplete Request Body',
            }, { status: 400 })
        }

        const { db } = await connectDatabase();

        await db.collection('manifesto_answers').insertOne({
            userId: toObjectId(userId),
            userEmail: user_email,
            negative_prompting: q1,
            prompt_engineering: q2,
            growth_manifesto: q3
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