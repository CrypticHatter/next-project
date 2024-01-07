"use server";
import prisma from "@/libs/prismadb";
import { revalidatePath } from "next/cache";

export const addTodo = async (formData: FormData) => {
  try {
    // @ts-ignore
    const res = await prisma.todo.create({
      data: {
        content: formData.get("content"),
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};
