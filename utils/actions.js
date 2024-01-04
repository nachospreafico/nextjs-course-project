"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function getAllTasks() {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function addTask(formData) {
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
}

export async function addTaskCustom(prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get("content");
  const Task = z.object({
    content: z.string().min(5),
  });
  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");
    return { message: "Success" };
  } catch (error) {
    console.log(error);
    return { message: "Error" };
  }
}

export async function deleteTask(formData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const id = formData.get("id");
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/tasks");
}

export async function getTask(id) {
  return prisma.task.findUnique({
    where: { id },
  });
}

export async function editTask(formData) {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");
  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
}
