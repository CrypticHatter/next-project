import UpdateForm from "@/components/UpdateForm";

const getTodoById = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_URL}/api/todo/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Edit({ params }: any) {
  const { id } = params;
  const { content } = await getTodoById(id);

  return <UpdateForm id={id} content={content} />;
}
