import { NextResponse } from 'next/server';
import { connectDatabase } from '@/lib/mongodb';

export async function GET() {
  try {
    const { db } = await connectDatabase();

    const frameworks = await db.collection('frameworks').find({}).toArray();

    return NextResponse.json({ frameworks });
  } catch (error) {
    console.error('Error fetching frameworks:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}



export async function POST(req: Request) {
  try {
    const { db } = await connectDatabase();
    const body = await req.json();

    // Validate required fields (customize based on your frontend form data)
    const { studentId, frameworkId, selectedAt } = body;

    if (!studentId || !frameworkId) {
      return NextResponse.json(
        { message: 'Missing required fields: studentId or frameworkId' },
        { status: 400 }
      );
    }

    const result = await db.collection('studentFrameworks').insertOne({
      studentId,
      frameworkId,
      selectedAt: selectedAt || new Date()
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
