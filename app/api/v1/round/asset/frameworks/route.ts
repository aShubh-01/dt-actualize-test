// /app/api/v1/round/asset/framework/route.ts

import { NextResponse } from 'next/server';
import { connectDatabase } from '@/lib/mongodb';

// ✅ GET: Fetch frameworks by round
export async function GET(req: Request) {
  try {
    const { db } = await connectDatabase();
    const { searchParams } = new URL(req.url);
    const round = searchParams.get('round');

    if (!round) {
      return NextResponse.json(
        { message: 'Missing round parameter in query string' },
        { status: 400 }
      );
    }

    const frameworks = await db
      .collection('frameworks')
      .find({ round })
      .toArray();

    return NextResponse.json({ frameworks });
  } catch (error) {
    console.error('Error fetching frameworks:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// ✅ POST: Save a student's selected framework in a round
export async function POST(req: Request) {
  try {
    const { db } = await connectDatabase();
    const body = await req.json();

    const { studentId, frameworkId, round, selectedAt } = body;

    if (!studentId || !frameworkId || !round) {
      return NextResponse.json(
        { message: 'Missing required fields: studentId, frameworkId, or round' },
        { status: 400 }
      );
    }

    const result = await db.collection('studentFrameworks').insertOne({
      studentId,
      frameworkId,
      round,
      selectedAt: selectedAt || new Date(),
    });

    return NextResponse.json(
      { message: 'Framework selection saved successfully', id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving student framework:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
