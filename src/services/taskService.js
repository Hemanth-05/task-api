import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function getTask(taskId){
  const task = await taskRepository.findTask(taskId);

  if (!task) {
    const err = new Error('Task not found');
    err.status = 404;
    throw err;
  }

  return task;
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
