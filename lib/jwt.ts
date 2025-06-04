import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '123secretdt';
const JWT_EXPIRES_IN = '7d'

export function createJwt(payload : any) : string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyJwt(token : string) : any {
    try {
        return jwt.verify(token, JWT_SECRET)
    } catch (err) {
        console.error('Unable to verify jwt', err)
        return null;
    }
}