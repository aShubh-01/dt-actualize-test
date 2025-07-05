import { NextRequest, NextResponse } from "next/server";
import { connectDatabase } from "@/lib/mongodb";

export async function GET(req: NextRequest) {
    try {
        const round = Number(req.nextUrl.searchParams.get('round'));

        if(!round) {
            return NextResponse.json({
                message: 'Round missing'
            }, { status: 400 })
        }

        const { db } = await connectDatabase();

        const testimonials = await db.collection('social-proof').find(
            { round },
            { projection: { 
                _id: 1,
                name: 1,
                role: 1,
                quote: 1,
                avatar: 1,  
            }}
        ).toArray();

        return NextResponse.json({
            message: 'Social Prood Testimonials Fetched',
            testimonials
        }, { status: 200 });

    } catch (err) {
        console.error("unable to fetch social proof data", err);
        NextResponse.json({
            error: 'Failed to fetch social proof data'
        }, { status: 500 })
    }
}