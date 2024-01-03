import UpdateForm from "@/components/UpdateForm";

type Params = { id: string };

const getTodoById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/todo/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const edit = async ({ params }: Params) => {
  const { id } = params;
  const { content } = await getTodoById(id);

  return <UpdateForm id={id} content={content} />;
};

export default edit;
