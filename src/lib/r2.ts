import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

let client: S3Client | null = null;
const getClient = () =>
  (client ??= new S3Client({
    region: "auto",
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: process.env.R2_ACCESS_KEY_ID || "", secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "" },
  }));

export async function uploadToR2(body: Buffer, name: string, contentType: string) {
  const safe = name.toLowerCase().replace(/[^a-z0-9.]+/g, "-").slice(-80);
  const key = `uploads/${new Date().getFullYear()}/${Date.now()}-${safe}`;
  await getClient().send(
    new PutObjectCommand({ Bucket: process.env.R2_BUCKET, Key: key, Body: body, ContentType: contentType, CacheControl: "public, max-age=31536000, immutable" }),
  );
  return `${(process.env.R2_PUBLIC_URL || "").replace(/\/$/, "")}/${key}`;
}
