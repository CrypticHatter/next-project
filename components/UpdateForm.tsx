"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

type Props = {
  id: string;
  content: string;
};

const UpdateForm = (props: Props) => {
  const { id, content } = props;
  const [newContent, setContent] = useState(content);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/todo/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "multipart/json",
        },
        body: JSON.stringify({ newContent }),
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="text"
              placeholder="Type here"
              name="content"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setContent(e.target.value)}
              value={newContent}
            />
            <button type="submit" className="btn btn-primary ml-2">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
