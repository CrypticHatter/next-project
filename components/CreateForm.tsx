"use client";
import { addTodo } from "@/app/actions/FormActions";
import React, { useRef } from "react";

type Props = {};

function CreateForm({}: Props) {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await addTodo(formData);
        ref.current?.reset();
      }}
    >
      <div className="flex">
        <input
          type="text"
          placeholder="Type here"
          name="content"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary ml-2">Submit</button>
      </div>
    </form>
  );
}

export default CreateForm;
