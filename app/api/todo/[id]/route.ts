import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  // const { searchParams } = new URL(req.url);
  const { id } = params;
  await prisma.todo.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({ message: "item deleted" }, { status: 200 });
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
    select: {
      content: true,
    },
  });

  return NextResponse.json(todo);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { newContent } = await req.json();

  const todo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      content: newContent,
    },
  });

  return NextResponse.json(todo);
}
