import { NextRequest, NextResponse } from "next/server";
import { connectDatabase } from "@/lib/mongodb";

export async function GET(req: NextRequest) {
    try {
        const round = req.nextUrl.searchParams.get('round');

        if (!round) {
            return NextResponse.json({
                message: 'Round missing'
            }, { status: 400 })
        }

        const { db } = await connectDatabase();

        const caseStudies = await db.collection('case-studies').find(
            { round: 2 },
            {
                projection: {
                    _id: 1,
                    company: 1,
                    description: 1,
                    tag: 1,
                    round: 1
                }
            }
        ).toArray();

        return NextResponse.json({
            message: 'Case Studies Fetched',
            caseStudies
        }, { status: 200 });

    } catch (err) {
        console.error("unable to fetch case studies dat", err);
        NextResponse.json({
            error: 'Failed to fetch case studies data'
        }, { status: 500 })
    }
}