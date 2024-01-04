import prisma from "@/utils/db";

const prismaHandlers = async () => {
  console.log("prisma example");
  //await prisma.task.create({
  //  data: {
  //    content: "Some task",
  //  },
  //});
  const allTasks = prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaPage = async () => {
  const tasks = await prismaHandlers();
  if (tasks.length === 0) {
    return (
      <h2 className="mt-8 font-medium text-lg">Your task list is empty!</h2>
    );
  }

  return (
    <div>
      <h1 className="text-4xl">PrismaPage</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-4">
            {task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaPage;
