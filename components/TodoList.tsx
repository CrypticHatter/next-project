import ActionBtns from "./ActionBtns";

type Props = {
  list: todo[];
};

interface todo {
  _id: string;
  content: string;
}

const TodoList = (props: Props) => {
  const { list } = props;

  return (
    <div className="flex flex-col w-full">
      {list.map((todo) => {
        return (
          <div key={todo.id} className="flex p-1">
            <div className="w-2/3">{todo.content}</div>
            <ActionBtns id={todo.id} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
