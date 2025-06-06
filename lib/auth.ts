import NextAuth, { NextAuthConfig, Session, User, Account, Profile } from "next-auth";
import { JWT } from 'next-auth/jwt';
import GoogleProvider from "next-auth/providers/google";
import { connectDatabase } from "./mongodb";

export const authOptions: NextAuthConfig = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
    ],
    secret: process.env.AUTH_SECRET as string,
    session: { strategy: "jwt" },
    callbacks: {
        async signIn({ user, account, profile }: { user?: User | null, account?: Account | null, profile?: Profile | null }) {
            if (!account || !profile || !user) return false;

            if (account.provider === "google") {
                const { db } = await connectDatabase()
                const gid = account.providerAccountId; // Google unique user ID

                const existingUser = await db.collection("users").findOne({ gid });

                if (!existingUser) {
                    const currentDate = new Date();
                    const result = await db.collection("users").insertOne({
                        gid,
                        createdAt: currentDate,
                        updatedAt: currentDate,
                        status: 'AUTHENTICATED'
                    });
        
                    (user as any).mongoId = result.insertedId.toString();

                } else {
                    (user as any).mongoId = existingUser._id.toString();
                }

                return true;
            }
            return false;
        },

        async jwt({ token, account, user }: { token: JWT, account?: Account | null, user?: User }) {
            if (user && account) {
                token.uid = (user as any).mongoId
                token.email = user.email;
                token.name = user.name;
                token.picture = user.image;
            }
            return token;
        },

        async session({ session, token }: { session: Session, token: JWT }) {
            if (session.user) {
                session.user.uid = token.uid as string;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.picture;
            }
            return session;
        },
    }
}

declare module "next-auth" {
    interface Session {
        user: {
            uid: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        uid: string;
        name?: string | null;
        email?: string | null;
        picture?: string | null;
    }
}