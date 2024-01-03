import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  const list = await prisma.todo.findMany();

  return NextResponse.json({ list });
}

export async function POST() {
  console.log("POST request");
}
