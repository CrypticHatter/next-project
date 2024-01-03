import CreateForm from "@/components/CreateForm";
import TodoList from "@/components/TodoList";

const getList = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/todo", {
      method: "GET",
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Error loading todo:", error);
  }
};

export default async function Home() {
  const { list } = await getList();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <CreateForm />
        <div className="divider">List</div>
        {list && <TodoList list={list} />}
      </div>
    </div>
  );
}
