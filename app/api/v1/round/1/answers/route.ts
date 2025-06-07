import { connectDatabase } from "@/lib/mongodb";
import { toObjectId } from "@/lib/utils";
import { ObjectId } from "mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { userId, answers } = await req.json();
        const attemptId = req.nextUrl.searchParams.get('id');

        if(!userId || !answers || !attemptId) {
            return NextResponse.json({
                error: 'Missing either userId, answers or attemptId'
            }, { status: 400})
        }

        const now = new Date().toISOString();

        const formattedAnswers = Object.entries(answers).map(([qid, answer]) => {
            return {
                userId: toObjectId(userId),
                questionId: toObjectId(qid),
                attemptId: toObjectId(attemptId),
                answerText: answer,
                submittedAt: now
            }
        })

        const { db } = await connectDatabase();
        await db.collection("round1_answers").insertMany(formattedAnswers)

        //Call AI model api to geneate feedback for the answers
        const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms * 1000));
        await delay(5);

        return NextResponse.json(
            { message: "Answers Submitted!"}, 
            {status: 200}
        )
    } catch (err) {
        console.error("Unable to submit user answers", err)
        return NextResponse.json(
            { error: "Failed to submit answers"}, 
            {status: 500}
        )
    }
}