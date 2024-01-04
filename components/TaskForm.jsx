import { addTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={addTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Type your task here..."
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          Add task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
