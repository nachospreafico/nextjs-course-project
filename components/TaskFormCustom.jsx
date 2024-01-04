"use client";
import { addTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "Please wait..." : "Create task"}
    </button>
  );
};

const initialState = { message: null };

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(addTaskCustom, initialState);
  useEffect(() => {
    if (state.message === "Error") {
      toast.error("There was an error.");
      return;
    }
    if (state.message) {
      toast.success("Task created successfully!");
    }
  }, [state]);
  return (
    <form action={formAction}>
      {/*{state.message ? <p className="mb-2">{state.message}</p> : null}*/}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Type your task here..."
          name="content"
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};

export default TaskFormCustom;
