"use server";

import dbConnect from "./database/connect";
import Task from "./database/taskModel";

export async function getTasks() {
  await dbConnect();

  try {
    return await Task.find({});
  } catch (err) {
    console.log(err);
  }
}

export async function createTask(params: {
  title: string;
  description: string;
  status: string;
}) {
  await dbConnect();

  const { title, description, status } = params;

  try {
    return await Task.create({title, description, status});
  } catch (err) {
    console.log(err);
  }
}
