import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "hbs_admin";
const key = () => new TextEncoder().encode(process.env.AUTH_SECRET || "");

export const signSession = (email: string) =>
  new SignJWT({ email }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("7d").sign(key());

export async function verifySession(token?: string) {
  if (!token || !process.env.AUTH_SECRET) return null;
  try {
    const { payload } = await jwtVerify(token, key());
    return payload as { email: string };
  } catch {
    return null;
  }
}

export async function currentAdmin() {
  return verifySession((await cookies()).get(SESSION_COOKIE)?.value);
}
