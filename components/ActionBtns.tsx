"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = { id: string };

const ActionBtns = (props: Props) => {
  const { id } = props;
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const confirmed = confirm("Do you want to delete?");

      if (confirmed) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_AUTH_URL}/api/todo/${id}`,
          {
            method: "DELETE",
          }
        );
        router.refresh();
      }
    } catch (error) {
      console.log("Error deleting: ", error);
    }
  };

  const handleEdit = async () => {};

  return (
    <div className="w-1/3">
      <Link href={`edit/${id}`} className="btn btn-sm btn-primary ml-2">
        E
      </Link>
      <button onClick={handleDelete} className="btn btn-sm btn-error ml-2">
        D
      </button>
    </div>
  );
};

export default ActionBtns;
