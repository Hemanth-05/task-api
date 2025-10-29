import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function getTask(taskId){
    return await taskRepository.findTask(taskId);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
