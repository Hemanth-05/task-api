import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

export async function findTask(taskId) {
  return await prisma.task.findUnique({
    where: {
      id: taskId,  
    },
  });
}


// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
