import { connectDatabase } from "@/lib/mongodb";
import { createJwt } from "@/lib/jwt";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const { db } = await connectDatabase();

  try {
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = createJwt({ userId: user._id.toString() });

    return NextResponse.json(
      {
        message: "Login successful",
        token,
        user: {
          username: user.username,
          roleApplied: user.roleApplied,
          email: user.email,
        }
      },
      { status: 200 }
    );

  } catch (err) {
    console.error("Login error:", err);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
