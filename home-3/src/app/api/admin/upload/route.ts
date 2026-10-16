import { NextResponse } from "next/server";
import { uploadToR2 } from "@/lib/r2";

const OK = ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"];

export async function POST(req: Request) {
  const file = (await req.formData()).get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "No file" }, { status: 400 });
  if (!OK.includes(file.type)) return NextResponse.json({ error: "Only JPG, PNG, WEBP, AVIF or GIF images" }, { status: 400 });
  if (file.size > 8 * 1024 * 1024) return NextResponse.json({ error: "Max file size is 8 MB" }, { status: 400 });
  try {
    const url = await uploadToR2(Buffer.from(await file.arrayBuffer()), file.name, file.type);
    return NextResponse.json({ url });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Upload failed. Check R2 settings." }, { status: 500 });
  }
}
