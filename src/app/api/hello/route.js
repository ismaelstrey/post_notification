import { NextResponse } from "next/server"
export async function GET(request) {
  return NextResponse.json({ message: 'Hello, Next.js!' })
}

export async function POST(request) {
  const res = await request.json()
  console.log(res)
  return NextResponse.json({ res })
}
