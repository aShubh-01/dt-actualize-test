import { connectDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { db } = await connectDatabase();
        const roles = await db.collection("roles").find(
            { isRoleActive: true }, 
            { projection: { _id: 1, roleTitle: 1, roleDescription: 1 }}
        ).toArray();

        return NextResponse.json({
            roles,
            message: "Roles fetched succesfully"
        }, { status: 200})
        
    } catch (err) {
        console.error('Error fetching roles', err);
        return NextResponse.json(
            { error: "Failed to fetch roles from database"}, 
            {status: 500}
        )
    }
}