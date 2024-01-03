import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const todo = await prisma.todo.create({
    data: {
      content: "My first task",
    },
  });

  console.log(todo);
}

main();
