import { connectDatabase } from "@/lib/mongodb";
import { createJwt } from "@/lib/jwt";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { username, roleApplied, email, password } = await req.json();
    const { db } = await connectDatabase();

    try {
        const existingUser = await db.collection('users').findOne({ email });
        if (existingUser) return NextResponse.json({
            error: 'User already exists'
        }, { status: 409 });

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const result = await db.collection('users').insertOne({ username, roleApplied, currentRound: 0, email, password: hashedPassword });

        const token = createJwt({ userId: result.insertedId });

        return NextResponse.json({
            message: 'User created',
            token
        }, { status: 200 });

    } catch (err) {
        console.error("unable to create user", err);
        
        return NextResponse.json({
            error: 'Unable to create user'
        }, { status: 500 });
    }
}